let mySwiper = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  speed: 1000,
  effect: "slide",
  slidesPerView: 1.25,
  centeredSlides: true,
  spaceBetween: 8,

  breakpoints: {
    768: {
      slidesPerView: 3,
      enabled: false,
    },
  },
});
