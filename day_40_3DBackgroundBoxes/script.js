/* This code essentially creates a grid of 16 colored boxes within the 'boxes' container 
and allows you to toggle the size of the container when you click the 'btn' button. */

const boxesContainer = document.getElementById('boxes');
const toggleButton = document.getElementById('btn');

// Define a function to handle the button click event
function toggleBoxSize() {
  boxesContainer.classList.toggle('big');
}

// Add an event listener to the button
toggleButton.addEventListener('click', toggleBoxSize);

// Create a function to generate the grid of boxes
function createBoxes() {
  const boxGrid = document.createDocumentFragment(); // Create a document fragment to optimize DOM manipulation

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
      boxGrid.appendChild(box); // Append the box to the document fragment
    }
  }

  boxesContainer.appendChild(boxGrid); // Append the document fragment to the container
}

// Call the createBoxes function to generate the grid of boxes when the page loads
document.addEventListener('DOMContentLoaded', createBoxes);


