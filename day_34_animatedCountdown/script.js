/* This code animates a series of numbers sequentially by adding/removing CSS classes and using animationend event listeners. 
When complete, it hides a counter, shows a final message, and allows restarting the animation. */

/* In this refactored version, the code is encapsulated within an IIFE to prevent global scope pollution, 
constants are used for selectors, and the functions are defined separately for better organization and readability. */

(function () {
  // Define constants for class names and elements to improve code readability.
  const NUMS_SELECTOR = '.nums span';
  const COUNTER_SELECTOR = '.counter';
  const FINAL_SELECTOR = '.final';
  const REPLAY_SELECTOR = '#replay';

  const nums = document.querySelectorAll(NUMS_SELECTOR);
  const counter = document.querySelector(COUNTER_SELECTOR);
  const finalMessage = document.querySelector(FINAL_SELECTOR);
  const replay = document.querySelector(REPLAY_SELECTOR);

  // Initialize the animation when the page loads.
  runAnimation();

  // Reset the DOM to its initial state.
  function resetDOM() {
    counter.classList.remove('hide');
    finalMessage.classList.remove('show');
    nums.forEach((num) => num.classList.value = '');
    nums[0].classList.add('in');
  }

  // Run the animation.
  function runAnimation() {
    nums.forEach((num, idx) => {
      const nextToLast = nums.length - 1;

      num.addEventListener('animationend', (e) => {
        if (e.animationName === 'goIn' && idx !== nextToLast) {
          num.classList.remove('in');
          num.classList.add('out');
        } else if (e.animationName === 'goOut' && num.nextElementSibling) {
          num.nextElementSibling.classList.add('in');
        } else {
          counter.classList.add('hide');
          finalMessage.classList.add('show');
        }
      });
    });
  }

  // Add a click event listener to the 'replay' button.
  replay.addEventListener('click', () => {
    resetDOM();
    runAnimation();
  });
})();
