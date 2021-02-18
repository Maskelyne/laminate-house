import Swiper from "swiper/bundle";

export function swiper () {

  let slider = document.querySelector('.swiper-container');

  if (slider) {

    const swiper = new Swiper('.main-slider', {
      direction: 'vertical',
      slidesPerView: 1,
      loop: true,
      // autoplay: {
      //   delay: 8000,
      //   disableOnInteraction: false,
      // },
      mousewheel: true,
      pagination: {
        el: '.main-slider__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">0' + (index + 1) + '</span>';
        },
      }
    });
  }

}

