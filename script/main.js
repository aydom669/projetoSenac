
// menu mobile

let navBar = document.querySelector(".header .nav");

document.querySelector('#menu-btn')
.addEventListener('click', ()=>{
    navBar.classList.add('active')
})

document.querySelector('#nav-close')
.addEventListener('click', ()=>{
    navBar.classList.remove('active')
})

// ===================================


// Carrocel configurações

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

// ====================================