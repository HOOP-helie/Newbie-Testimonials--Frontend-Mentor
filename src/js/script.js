const btnRight = document.querySelectorAll(".next-icon");
const btnLeft = document.querySelectorAll(".previous-icon");
const slides = document.querySelectorAll(".slide");

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide();

btnRight.forEach((btn) => btn.addEventListener("click", () => goToSlide(1)));
btnLeft.forEach((btn) => btn.addEventListener("click", () => goToSlide(0)));

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") goToSlide(0);
  if (e.key === "ArrowRight") goToSlide(1);
});
