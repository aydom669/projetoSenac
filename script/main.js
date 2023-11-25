
var swiper = new Swiper(".receitas__container", {
  loop:true,
  grabCursor: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
      },
    991: {
      slidesPerView: 3,
    },
  },
});