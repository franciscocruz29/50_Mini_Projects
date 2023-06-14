// Select all elements with the class name 'ripple' on the page
const buttons = document.querySelectorAll('.ripple');

// For each button that we just selected...
buttons.forEach(button => {
  // Attach an event listener to the 'click' event
  button.addEventListener('click', function (e) {
    // Get the X and Y coordinates of the mouse click event on the page
    const x = e.pageX;
    const y = e.pageY;

    // Get the top and left offset of the button relative to its parent element
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    // Subtract the button's left and top offset from the X and Y coordinates of the mouse click event
    // to get the click position inside the button
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    // Create a new 'span' element
    const circle = document.createElement('span');
    // Add the 'circle' class to the new span element
    circle.classList.add('circle');
    // Set the top and left CSS properties of the new span element to the inside click position
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    // Add the new span element to the button that was clicked
    this.appendChild(circle);

    // Remove the new span element after 500 milliseconds
    setTimeout(() => circle.remove(), 500);
  });
});

