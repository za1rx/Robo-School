const swiper = new Swiper(".swiper", {
  // Параметры слайдера
  // loop: true,  // зацикливать слайды
  slidesPerView: 3.6, // сколько слайдов отображать одновременно
  spaceBetween: 17, // расстояние между слайдами
  navigation: {
    // кнопки навигации (по желанию)
    nextEl: ".s-button-next",
    prevEl: ".s-button-prev",
  },
  pagination: {
    // пагинация (по желанию)
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    // автопроигрывание (по желанию)
    delay: 2500,
    disableOnInteraction: false,
  },
  on: {
    slideChange: function () {
      updateProgressBar();
    },
  },
});

function updateProgressBar() {
  const progressBar = document.querySelector(".swiper-progress-bar");
  const progress = ((swiper.realIndex + 1) / swiper.slides.length) * 167;
  progressBar.style.width = `${progress}%`;
}
