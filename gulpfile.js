const {src, dest, parallel, series, watch} = require('gulp');
const sass = require('gulp-sass');
const mediaCssGroup = require('gulp-group-css-media-queries');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const del = require('del');
const webpackStream = require('webpack-stream');
const uglify = require('gulp-uglify-es').default;
const imageMin = require('gulp-imagemin');
const webpackConfig = require('./webpack.config.js');
const webpack = require('webpack');

const clean = () => {
  return del(['dev'])
};

const fontsDev = () => {
  return src(['source/fonts/*.{woff,woff2}'])
    .pipe(dest('dev/assets/fonts'))
    .pipe(browserSync.stream());
}

const htmlDev = () => {
  return src(['source/html/*.html'])
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('dev'))
    .pipe(browserSync.stream());
};

const bootstrapCss = () => {
  return src('source/css/*.css')
    .pipe(dest('dev/assets/css'))
}

const styles = () => {
  return src('source/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    })
    .on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(mediaCssGroup())
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dev/assets/css'))
    .pipe(browserSync.stream());
};

const bootstrapJs = () => {
  return src('source/js/bootstrap.min.js')
    .pipe(dest('dev/assets/js'))
}

const popper = () => {
  return src('source/js/popper.min.js')
    .pipe(dest('dev/assets/js'))
}

const scripts = () => {
  return src('source/js/main.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end'); // Don't stop the rest of the task
    })
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(dest('dev/assets/js'))
    .pipe(browserSync.stream());
};

const imgToBuild = () => {
  return src(['source/img/**/*{png,jpg,svg}'])
    .pipe(dest('dev/assets/img'))
};

const watchFiles = () => {
  browserSync.init({
    notify: false,
    ui: false,
    server: {
      baseDir: 'dev',
    }
  });

  watch('source/html/**/*.html', htmlDev);
  watch('source/sass/**/*.scss', styles);
  watch('source/js/**/*.js', scripts);
  watch('source/img/**/*.jpg', imgToBuild);
  watch('source/img/**/*.jpeg', imgToBuild);
  watch('source/img/**/*.png', imgToBuild);
}

exports.fileinclude = htmlDev;
exports.styles = styles;
exports.bootstrapCss = bootstrapCss;
exports.bootstrapJs = bootstrapJs;
exports.popper = popper;
exports.scripts = scripts;
exports.watchFiles = watchFiles;
exports.fontsDev = fontsDev;
exports.clean = clean;

exports.development = series(clean, parallel(fontsDev, htmlDev, bootstrapCss, styles, bootstrapJs, popper, scripts, imgToBuild), watchFiles);


// ---------- BUILD ----------
const cleanBuild = () => {
  return del(['build'])
};

const fontsBuild = () => {
  return src(['source/fonts/*.{woff,woff2}'])
    .pipe(dest('build/assets/fonts'))
    .pipe(browserSync.stream());
}

const htmlBuild = () => {
  return src(['source/html/index.html'])
    .pipe(fileinclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('build'))
};

const stylesBuild = () => {
  return src('source/sass/style.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded'
    })
    .on('error', notify.onError()))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(mediaCssGroup())
    .pipe(cleanCSS({
      level: 2,
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('build/assets/css'))
};

const scriptsBuild = () => {
  return src('source/js/main.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err);
      this.emit('end'); // Don't stop the rest of the task
    })
    .pipe(uglify().on("error", notify.onError()))
    .pipe(dest('build/assets/js'))
};

const imageMinBuild = () => {
  return src('source/img/**/*.{png,jpg,svg}')
    .pipe(imageMin([
      imageMin.optipng({optimizationLevel: 5}),
      imageMin.mozjpeg({progressive: true, quality: 90}),
      imageMin.svgo(),
    ]))
    .pipe(dest('build/assets/img'))
};

exports.stylesBuild = stylesBuild;
exports.fontsBuild = fontsBuild;
exports.scriptsBuild = scriptsBuild;
exports.cleanBuild = cleanBuild;
exports.imageMinBuild = imageMinBuild;

exports.build = series(cleanBuild, fontsBuild, htmlBuild, stylesBuild, scriptsBuild, imageMinBuild);
