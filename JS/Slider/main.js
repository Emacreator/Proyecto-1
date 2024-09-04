const slider = document.querySelector(".slider");
const slides = slider.querySelector(".slides");
const prevBtn = slider.querySelector(".prev");
const nextBtn = slider.querySelector(".next");

const slideWith = slides.clientWidth;
// console.log(slideWith);

let slideIndex = 0;

// Movemos los slides a la posicion indicada por el slideIndex
const moveToSlide = () => {
  slides.style.transform = `translateX(${-slideWith * slideIndex}px)`;
};

//Avanzar al siguiente slide y actualizar la posicion del slider
const nextSlide = () => {
  if (slideIndex === slides.children.length - 1) {
    // console.log("estas al final");
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  moveToSlide();
};

const prevSlide = () => {
  if (slideIndex === 0) {
    // console.log("estas al principio");
    slideIndex = slides.children.length - 1;
  } else {
    slideIndex--;
  }
  moveToSlide();
};

// console.log(slides.children);

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
