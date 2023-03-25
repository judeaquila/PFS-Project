// Navbar Responsiveness
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Slideshow
// Get the slider container and slides
const slider = document.querySelector('.slider-container');
const slides = slider.querySelectorAll('.slide');

// Get the navigation buttons
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');

// Set the initial active slide
let activeSlide = 0;
slides[activeSlide].classList.add('active');

// Add event listeners to the navigation buttons
prevBtn.addEventListener('click', () => {
  // Hide the current active slide
  slides[activeSlide].classList.remove('active');
  
  // Decrement the active slide index
  activeSlide--;
  
  // If we go below 0, loop around to the last slide
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  
  // Show the new active slide
  slides[activeSlide].classList.add('active');
});

nextBtn.addEventListener('click', () => {
  // Hide the current active slide
  slides[activeSlide].classList.remove('active');
  
  // Increment the active slide index
  activeSlide++;
  
  // If we go beyond the last slide, loop around to the first slide
  if (activeSlide >= slides.length) {
    activeSlide = 0;
  }
  
  // Show the new active slide
  slides[activeSlide].classList.add('active');
});
