// Selecting the necessary elements from the DOM
const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

// Counting the number of slides in the right slide container
const slidesLength = slideRight.querySelectorAll('div').length;

// Setting the initial active slide index to 0
let activeSlideIndex = 0;

// Positioning the left slide container based on the number of slides
slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// Adding event listeners to the up and down buttons
upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

// Function to handle the slide change based on the direction (up or down)
const changeSlide = (direction) => {
  // Getting the height of the slider container
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === 'up') {
    // Incrementing the active slide index when moving up
    activeSlideIndex++;

    // Resetting the active slide index to 0 if it exceeds the number of slides
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === 'down') {
    // Decrementing the active slide index when moving down
    activeSlideIndex--;

    // Setting the active slide index to the last slide if it becomes negative
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  // Applying the transform property to move the right slide container up or down
  slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;

  // Applying the transform property to move the left slide container up or down
  slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
};
