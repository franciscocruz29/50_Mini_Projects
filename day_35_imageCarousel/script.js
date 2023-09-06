/* This code controls an image carousel with left and right buttons that allow you to navigate through a series of images displayed horizontally. 
The interval between image changes is set to 2 seconds, and you can also manually navigate through the images using the buttons.  */

// Select the image container element
const imgs = document.getElementById('imgs');

// Select the left arrow button
const leftBtn = document.getElementById('left');

// Select the right arrow button  
const rightBtn = document.getElementById('right');

// Get all the images inside the image container as an array
const img = document.querySelectorAll('#imgs img');

// Initialize a variable 'idx' to keep track of the current image index, starting at 0
let idx = 0;

// Set up an interval that calls the 'run' function every 2000 milliseconds (2 seconds) and store it in the 'interval' variable
let interval = setInterval(run, 2000);

// Define a function called 'run' which will be executed by the interval
function run() {
  // Increment the 'idx' variable by 1
  idx++;
  // Call the 'changeImage' function
  changeImage();
}

// Define a function called 'changeImage' to update the displayed image
function changeImage() {
  // Check if 'idx' is greater than the number of images minus one
  if (idx > img.length - 1) {
    // Reset 'idx' to 0 if it exceeds the last index
    idx = 0;
  } else if (idx < 0) {
    // Set 'idx' to the last index if it becomes negative
    idx = img.length - 1;
  }

  // Update the 'transform' style of the 'imgs' element to move the images horizontally
  // The template literal `${-idx * 500}px` calculates the horizontal translation based on the current 'idx' and 500 pixels per image
  imgs.style.transform = `translateX(${-idx * 500}px)`;
}

// Define a function called 'resetInterval' to reset the interval timer
function resetInterval() {
  // Clear the existing interval
  clearInterval(interval);
  // Set a new interval that calls the 'run' function every 2000 milliseconds
  interval = setInterval(run, 2000);
}

// Add a click event listener to the 'rightBtn' element
rightBtn.addEventListener('click', () => {
  // Increment 'idx' to move to the next image
  idx++;
  // Call 'changeImage' to update the displayed image
  changeImage();
  // Reset the interval timer
  resetInterval();
});

// Add a click event listener to the 'leftBtn' element
leftBtn.addEventListener('click', () => {
  // Decrement 'idx' to move to the previous image
  idx--;
  // Call 'changeImage' to update the displayed image
  changeImage();
  // Reset the interval timer
  resetInterval();
});
