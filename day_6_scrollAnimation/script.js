/* A simple implementation of a scroll - triggered animation effect using JavaScript.
When the user scrolls down the page, elements with the class 'box' will be shown or 
hidden depending on their position relative to the viewport. */

const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4; // calculates the trigger point for the animation. The trigger point is set to 4/5ths (80%) of the viewport's height from the top.

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top; // gets the top position of the current 'box' element relative to the viewport.

    if (boxTop < triggerBottom) { // if the top position of the current 'box' element is above the trigger point
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

/* This code snippet detects when 'box' elements enter the last 1 / 5th(20 %) of the viewport's height while scrolling and 
adds the 'show' class to them, making them visible. When they leave this area, the 'show' class is removed, hiding the elements again. */
