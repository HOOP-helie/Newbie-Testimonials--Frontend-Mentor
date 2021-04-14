const btnRight = document.querySelectorAll(".next-icon");
const btnLeft = document.querySelectorAll(".previous-icon");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
let maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide();

btnRight.forEach((btn) => btn.addEventListener("click", () => goToSlide(1)));
btnLeft.forEach((btn) => btn.addEventListener("click", () => goToSlide(0)));
