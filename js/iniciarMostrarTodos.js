function iniciarMostrarTodos(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid:{
      rows: 3
    },
    spaceBetween: 15,
    loop: false,
    loopFillGroupWithBlank: false,
    freeMode: true,
    keyboard: {
      enabled: true,
    },
    // autoplay: {
    //   delay: 5000,
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      // type: "fraction",
      // type: "progressbar",
      // renderBullet: function (index, className) {
      //   return '<span class="' + className + '">' + (index + 1) + "</span>";
      // },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // breakpoints: {
    //   568: {
    //     slidesPerView: 2,
    //     slidesPerGroup: 2,
    //     grid:{
    //       rows: 2
    //     },
    //   },
    //   736: {
    //     slidesPerView: 3,
    //     slidesPerGroup: 3,
    //     grid:{
    //       rows: 3
    //     },
    //   },
    //   1080: {
    //     slidesPerView: 4,
    //     slidesPerGroup: 4,
    //     grid:{
    //       rows: 4
    //     },
    //   }
    // }
  });
}