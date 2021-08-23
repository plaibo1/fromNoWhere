const swiper = new Swiper('.swiper-container', {
    // Default parameters
    slidesPerView: 2,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      767: {
        slidesPerView: 1,
        spaceBetween: 30
      }
    }
  })