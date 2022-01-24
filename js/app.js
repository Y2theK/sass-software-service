const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    dynamicBullets: true,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

//navigation
const navi = document.querySelector("nav");
const pos = navi.offsetTop;
const scrollup = document.querySelector(".scroll-up-item");
console.log(pos);
window.onscroll = () => {
  if (window.pageYOffset >= pos + 100) {
    navi.classList.add("sticky");
    scrollup.style.display = "block";
  } else {
    navi.classList.remove("sticky");
    scrollup.style.display = "none";
  }
};

//mobile nav
var x = 0;
var navicon = document.querySelector(".navbar__bars");
var bars_icon = document.querySelector(".fa-bars");
var cross_icon = document.querySelector(".fa-times");
var mobilenav = document.querySelector(".navbar__menu");

navicon.onclick = () => {
  if (x == 0) {
    mobilenav.classList.add("shownav");
    bars_icon.style.display = "none";
    cross_icon.style.display = "block";

    x = 1;
  } else {
    mobilenav.classList.remove("shownav");
    bars_icon.style.display = "block";
    cross_icon.style.display = "none";
    x = 0;
  }
};
closeNav = () => {
  mobilenav.classList.remove("shownav");
  bars_icon.style.display = "block";
  cross_icon.style.display = "none";
  x = 0;
};

//preloader
const loader = document.querySelector(".preloader");
setTimeout(function () {
  loader.style.display = "none";
}, 2000);
