/* The code creates 500 square elements, adds event listeners for mouseover and mouseout events, 
and changes the background color and box shadow of each square when you hover over it and remove the hover. 
The colors are chosen randomly from the colors array, and the getRandomColor function is responsible for this. 
The setColor and removeColor functions handle the styling of the squares. */

// Get a reference to the HTML element with the id 'container'.
const container = document.getElementById('container');

// Define an array of colors that will be used to change the background of squares.
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

// Define a constant called SQUARES with a value of 500. This will determine how many squares are created.
const SQUARES = 500;

// Create a loop to create 500 squares.
for (let i = 0; i < SQUARES; i++) {
  // Create a new <div> element to represent a square.
  const square = document.createElement('div');

  // Add a CSS class 'square' to the square element.
  square.classList.add('square');

  // Add a mouseover event listener to the square element.
  square.addEventListener('mouseover', () => setColor(square));

  // Add a mouseout event listener to the square element.
  square.addEventListener('mouseout', () => removeColor(square));

  // Append the square element to the 'container' div in the HTML.
  container.appendChild(square);
}

// Function to set the background color and box shadow of an element.
function setColor(element) {
  // Get a random color from the 'colors' array.
  const color = getRandomColor();

  // Set the background color of the element to the random color.
  element.style.background = color;

  // Add a box shadow with the same color to create an effect.
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

// Function to remove the background color and box shadow from an element.
function removeColor(element) {
  // Reset the background color to a dark gray.
  element.style.background = '#1d1d1d';

  // Remove the box shadow.
  element.style.boxShadow = '0 0 2px #000';
}

// Function to get a random color from the 'colors' array.
function getRandomColor() {
  // Generate a random index within the range of the 'colors' array.
  return colors[Math.floor(Math.random() * colors.length)];
}

