/* This code controls an image carousel with left and right buttons that allow you to navigate through a series of images displayed horizontally. 
The interval between image changes is set to 2 seconds, and you can also manually navigate through the images using the buttons.  */

// Get DOM elements and store them in variables
const imgsContainer = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');
const images = document.querySelectorAll('#imgs img');

// Initialize variables for image index and interval
let currentIndex = 0;
let intervalId = setInterval(nextImage, 2000);

// Function to display the current image
function displayImage() {
  // Ensure currentIndex is within bounds
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  // Calculate the translation based on currentIndex
  const translateX = -currentIndex * 500;

  // Apply the transform style to move the images
  imgsContainer.style.transform = `translateX(${translateX}px)`;
}

// Function to show the next image
function nextImage() {
  currentIndex++;
  displayImage();
}

// Function to show the previous image
function previousImage() {
  currentIndex--;
  displayImage();
}

// Function to reset the interval timer
function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextImage, 2000);
}

// Event listeners for left and right buttons
rightBtn.addEventListener('click', () => {
  nextImage();
  resetInterval();
});

leftBtn.addEventListener('click', () => {
  previousImage();
  resetInterval();
});

// Initial display of the first image
displayImage();
