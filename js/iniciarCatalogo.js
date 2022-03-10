function iniciarCatalogo(){
  var swiper = new Swiper(".mySwiper", {
    zoom: true,
    spaceBetween: 5,
    slidesPerView: 4,
    lazy: true,
    freeMode: true,
    grabCursor: true,
    watchSlidesProgress: true,
    breakpoints: {
      568: {
        slidesPerView: 8,
        slidesPerGroup: 8,
      },
      736: {
        slidesPerView: 16,
        slidesPerGroup: 16,
      },
      1080: {
        slidesPerView: 32,
        slidesPerGroup: 32,
      }
    }
  });
  var swiper2 = new Swiper(".mySwiper2", {
    zoom: true,
    spaceBetween: 5,
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    thumbs: {
      swiper: swiper,
    },
  });
}

