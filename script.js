"use strict";
//email validation
const checEmail =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const email = document.querySelector(".checkEmail");
const error = document.querySelector(".error");
const submit = document.querySelector(".submit");
const errorParagraph = document.querySelector(".errorParagraph");
submit.addEventListener("click", function () {
  if (!checEmail.test(email.value)) {
    console.log(!checEmail.test(email.value));
    error.classList.remove("hidden");
    errorParagraph.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
    errorParagraph.classList.add("hidden");
  }
});
console.log(checEmail === "katja.debevc72@gmail.com");
//mobile features slider
const feature0 = document.querySelector(".feature0");
const feature1 = document.querySelector(".feature1");
const feature2 = document.querySelector(".feature2");
const feature3 = document.querySelector(".feature3");
const features = [feature0, feature1, feature2, feature3];
for (let i = 0; i < features.length; i++) {
  //   features[i - 1].classList.add("hiddenMobile");
  features[i].classList.remove("hiddenMobile");
}
//mobile responsive design
const hamburgerIcon = document.querySelector(".hamburgerIcon");
const closeIcon = document.querySelector(".closeIcon");
const navMobile = document.querySelector(".navMobile");
hamburgerIcon.addEventListener("click", function () {
  navMobile.classList.remove("hidden");
  closeIcon.classList.remove("hidden");
  hamburgerIcon.classList.add("hidden");
});
closeIcon.addEventListener("click", function () {
  navMobile.classList.add("hidden");
  closeIcon.classList.add("hidden");
  hamburgerIcon.classList.remove("hidden");
});
console.log(document.querySelector(".features"));
const slider = function () {
  const slides = document.querySelectorAll(".feature");
  const btnLeft = document.querySelector(".back");
  const btnRight = document.querySelector(".next");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  slides.forEach((slide) => slide.classList.add("hidden"));
  slides[0].classList.remove("hidden");
  const goToSlide = function (slide) {
    slides.forEach((slide) => slide.classList.add("hidden"));

    slides[slide].classList.remove("hidden");
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "ArrowLeft") prevSlide();
  //   e.key === "ArrowRight" && nextSlide();
  // });
};
slider();
