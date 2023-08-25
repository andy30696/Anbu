document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelector(".slides");
  const slideWidth = document.querySelector(".slidesImg").offsetWidth;
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  let currentPosition = 0;

  prevBtn.addEventListener("click", () => {
    currentPosition += slideWidth;
    if (currentPosition > 0) {
      currentPosition = -(slideWidth * 4);
    }
    slides.style.transform = `translateX(${currentPosition}px)`;
  });

  nextBtn.addEventListener("click", () => {
    currentPosition -= slideWidth;
    if (currentPosition < -(slideWidth * 4)) {
      currentPosition = 0;
    }
    slides.style.transform = `translateX(${currentPosition}px)`;
  });
});
