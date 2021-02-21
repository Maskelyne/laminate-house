import Swiper from "swiper/bundle";

export function swiper () {

  let mainSlider = document.querySelector('.main-slider');
  let brandsSlider = document.querySelector('.brands-slider__box-wrapper');

  if (mainSlider) {
    const swiper = new Swiper(mainSlider, {
      direction: 'vertical',
      slidesPerView: 1,
      loop: true,
      speed: 2000,
      effect: 'fade',
      // autoplay: {
      //   delay: 2000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.main-slider__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + '</span>';
        },
      }
    });
  }

  if (brandsSlider) {
    const swiper = new Swiper(brandsSlider, {
      loop: true,
      speed: 1000,
      // autoplay: {
      //   delay: 3000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1440: {
          slidesPerView: 5,
          spaceBetween: 100,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 50
        }
      }
    });
  }

}

