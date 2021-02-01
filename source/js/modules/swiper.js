import Swiper from "swiper/bundle";

export function swiper () {

  let slider = document.querySelector('.swiper-container');

  if (slider) {

    const swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}

