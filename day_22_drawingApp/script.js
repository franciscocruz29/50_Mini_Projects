// Get references to the necessary HTML elements
const canvas = document.getElementById('canvas'); // Get the canvas element
const increaseBtn = document.getElementById('increase'); // Get the increase button element
const decreaseBtn = document.getElementById('decrease'); // Get the decrease button element
const sizeEL = document.getElementById('size'); // Get the size element for displaying the size
const colorEl = document.getElementById('color'); // Get the color input element
const clearEl = document.getElementById('clear'); // Get the clear button element

// Get the 2D rendering context of the canvas
const ctx = canvas.getContext('2d');

// Set initial values for size, color, and isPressed
let size = 10; // Initial size
let isPressed = false; // Flag to track if the mouse button is pressed
colorEl.value = 'black'; // Initial color is black
let color = colorEl.value; // Current color
let x; // X-coordinate of the mouse
let y; // Y-coordinate of the mouse

// Event listener for mouse down on the canvas
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  // Get the current mouse coordinates
  x = e.offsetX;
  y = e.offsetY;
});

// Event listener for mouse up anywhere on the document
document.addEventListener('mouseup', (e) => {
  isPressed = false;

  // Reset the coordinates
  x = undefined;
  y = undefined;
});

// Event listener for mouse move on the canvas
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    // Get the current mouse coordinates
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    // Draw a circle at the current coordinates
    drawCircle(x2, y2);

    // Draw a line from the previous coordinates to the current coordinates
    drawLine(x, y, x2, y2);

    // Update the previous coordinates to the current coordinates
    x = x2;
    y = y2;
  }
});

// Function to draw a circle on the canvas
function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

// Function to draw a line on the canvas
function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Function to update the size display on the screen
function updateSizeOnScreen() {
  sizeEL.innerText = size;
}

// Event listener for the increase button
increaseBtn.addEventListener('click', () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  // Update the size display
  updateSizeOnScreen();
});

// Event listener for the decrease button
decreaseBtn.addEventListener('click', () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  // Update the size display
  updateSizeOnScreen();
});

// Event listener for the color input change
colorEl.addEventListener('change', (e) => (color = e.target.value));

// Event listener for the clear button
clearEl.addEventListener('click', () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
