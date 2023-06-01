// Retrieve a reference to the <body> of the HTML document
const body = document.body;

// Select all elements that have the class 'slide'
const slides = document.querySelectorAll('.slide');

// Get the button elements with the id 'left' and 'right'
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// Initialize a counter to keep track of the active slide
let activeSlide = 0;

// Add a 'click' event listener to the right button
rightBtn.addEventListener('click', () => {
  // Increment the active slide counter
  activeSlide++;

  // If activeSlide exceeds the total number of slides, reset it to 0
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  // Change the body's background to the current slide's background
  setBgToBody();

  // Set the current slide as active
  setActiveSlide();
});

// Add a 'click' event listener to the left button
leftBtn.addEventListener('click', () => {
  // Decrement the active slide counter
  activeSlide--;

  // If activeSlide goes below 0, set it to the last slide
  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  // Change the body's background to the current slide's background
  setBgToBody();

  // Set the current slide as active
  setActiveSlide();
});

// Initially, set the body's background to the first slide's background
setBgToBody();

// Function to set the body's background image to the current slide's background
function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

// Function to set the active slide
function setActiveSlide() {
  // For each slide, remove the 'active' class
  slides.forEach((slide) => slide.classList.remove('active'));

  // Add the 'active' class to the current slide
  slides[activeSlide].classList.add('active');
}
