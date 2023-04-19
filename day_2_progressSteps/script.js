// 1. Declare variables to store DOM elements:
  // progress: The progress bar element.
  // prev: The "previous" button element.
  // next: The "next" button element.
  // circles: A NodeList containing all elements with the class "circle".

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// 2. Initialize currentActive to 1, which represents the current active step.
let currentActive = 1;

// 3. Add event listeners to the "previous" and "next" buttons:
next.addEventListener('click', () => {
  currentActive++;

  // If it goes beyond the total number of circles, set it to the highest valid value.
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

prev.addEventListener('click', () => {
  currentActive--;
   // If it goes below 1, set it to the lowest valid value (1)
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

// 4. Define the update() function, which updates the state of the progress indicator
function update() {
  // Iterate through each circle, adding the "active" class if its index is less than currentActive, and removing the "active" class otherwise.
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  // calculates the width of the progress bar by dividing the number of active circles minus 1 by the total number of circles minus 1, and multiplying the result by 100 to get a percentage.
  // The subtraction of 1 from both numerator and denominator is done to exclude the first circle from the calculation, as the progress bar starts from the first circle.
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

  // Disable the "previous" button if currentActive is 1 (first step), and disable the "next" button if currentActive is equal to the total number of circles (last step). 
  // Otherwise, enable both buttons.
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
