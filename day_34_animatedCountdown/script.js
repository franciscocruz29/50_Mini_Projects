/* This code animates a series of numbers sequentially by adding/removing CSS classes and using animationend event listeners. 
When complete, it hides a counter, shows a final message, and allows restarting the animation. */

// Select all elements with class 'nums' and span tags
const nums = document.querySelectorAll('.nums span');

// Select element with class 'counter'
const counter = document.querySelector('.counter');

// Select element with class 'final' 
const finalMessage = document.querySelector('.final');

// Select element with id 'replay'
const replay = document.querySelector('#replay');

// Call runAnimation function to start animation
runAnimation();

// Function to reset/clear animation classes
function resetDOM() {

  // Hide counter element  
  counter.classList.remove('hide');

  // Hide final message
  finalMessage.classList.remove('show');

  // Remove animation classes from all nums elements
  nums.forEach((num) => {
    num.classList.value = '';
  });

  // Add 'in' class to first num element
  nums[0].classList.add('in');
}

// Main animation function
function runAnimation() {

  // Loop through each num element
  nums.forEach((num, idx) => {

    // Get index of next to last element
    const nextToLast = nums.length - 1;

    // Add event listener for animation end
    num.addEventListener('animationend', (e) => {

      // If animation that ended is 'goIn' and not the last element
      if (e.animationName === 'goIn' && idx !== nextToLast) {

        // Remove 'in' class and add 'out' class
        num.classList.remove('in');
        num.classList.add('out');

        // If animation that ended is 'goOut' and element has next sibling
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {

        // Add 'in' class to next sibling 
        num.nextElementSibling.classList.add('in');

        // Otherwise, this is the last animation
      } else {

        // Hide counter
        counter.classList.add('hide');

        // Show final message 
        finalMessage.classList.add('show');
      }
    });
  });
}

// Add click handler to replay button 
replay.addEventListener('click', () => {

  // Reset DOM and restart animation
  resetDOM();
  runAnimation();
});
