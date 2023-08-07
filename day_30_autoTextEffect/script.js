// Get references to HTML elements
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

// Define the text to be displayed
const text = 'We Love Programming!';

// Initialize the index for slicing the text
let currentIndex = 0;

// Function to write the text letter by letter
function writeText() {
  // Slice the text from the beginning up to the current index and set it as the inner text of the element
  textEl.innerText = text.slice(0, currentIndex);

  // Increment the index for the next slice
  currentIndex++;

  // If the index goes beyond the length of the text, reset it to 0
  if (currentIndex >= text.length) {
    currentIndex = 0;
  }

  // Calculate the speed based on the value of the 'speed' input
  const speed = 300 / speedEl.value;

  // Schedule the next call to writeText after a specific timeout (speed)
  setTimeout(writeText, speed);
}

// Call the writeText function to start displaying the text
writeText();

// Listen for changes in the 'speed' input element
speedEl.addEventListener('input', (e) => {
  // The 'speed' input value has changed, so the typewriter speed needs to be adjusted accordingly
  // The speed is calculated as 300 divided by the new value of the 'speed' input
  // This ensures that the lower the value, the faster the text will be typed out
  // The typewriter effect will automatically update based on the new speed value
});
