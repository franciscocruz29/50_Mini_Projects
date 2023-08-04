/* 
This code listens for double-click events on an element with class "loveMe." 
When a double-click is detected (two clicks within 800ms of each other), 
it creates a heart icon at the position of the double-click. 
The number of double-clicks is displayed and updated in the element with id "times." 
The heart icon is then removed after one second (1000ms).
 */


// Get the element with class 'loveMe' and store it in the 'loveMe' constant.
const loveMe = document.querySelector('.loveMe');

// Get the element with id 'times' and store it in the 'times' constant.
const times = document.querySelector('#times');

// Initialize variables to keep track of click time and the number of times clicked.
let clickTime = 0;
let timesClicked = 0;

// Add a click event listener to the 'loveMe' element.
loveMe.addEventListener('click', (e) => {
  // Check if this is the first click (no previous click time recorded).
  if (clickTime === 0) {
    // If it's the first click, record the timestamp in milliseconds using new Date().
    clickTime = new Date().getTime();
  } else {
    // If it's not the first click (a click time is already recorded),
    // calculate the time elapsed since the last click.
    if ((new Date().getTime() - clickTime) < 800) {
      // If the elapsed time is less than 800ms, it's a double click.
      // Call the 'createHeart' function and reset the clickTime to 0.
      createHeart(e);
      clickTime = 0;
    } else {
      // If the elapsed time is more than 800ms, consider it as a single click.
      // Record the timestamp of this click for potential double-click check.
      clickTime = new Date().getTime();
    }
  }
});

// Function to create a heart element when a double click is detected.
const createHeart = (e) => {
  // Create a new 'i' element (icon) for the heart.
  const heart = document.createElement('i');
  // Add the necessary classes for the heart icon (Font Awesome classes).
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  // Get the x and y coordinates of the click event.
  const x = e.clientX;
  const y = e.clientY;

  // Get the offset from the target element to the top-left corner of the document.
  const leftOffset = e.target.offsetLeft;
  const topOffset = e.target.offsetTop;

  // Calculate the position of the click event relative to the target element.
  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  // Set the position of the heart element to the calculated coordinates.
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  // Append the heart element to the 'loveMe' container.
  loveMe.appendChild(heart);

  // Increment the 'timesClicked' variable and display it in the 'times' element.
  times.innerHTML = ++timesClicked;

  // Set a timeout to remove the heart element after 1000ms (1 second).
  setTimeout(() => heart.remove(), 1000);
};
