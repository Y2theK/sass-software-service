const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "vertical",
  //   loop: true,

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
