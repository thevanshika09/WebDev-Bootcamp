// Get carousel elements
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

let currentSlideIndex = 0;

// Show a specific slide by index
function showSlide(index) {
  track.style.transform = `translateX(-${100 * index}%)`;
}

// Next slide
nextButton.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
});

// Previous slide
prevButton.addEventListener("click", () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex);
});

// Auto-play: move to next slide every 5 seconds
setInterval(() => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex);
}, 5000);
