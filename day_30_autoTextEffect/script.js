// Get a reference to the HTML elements with IDs 'text' and 'speed'
const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

// Define the text to be displayed
const text = 'We Love Programming!';

// Initialize the index for slicing the text
let idx = 1;

// Calculate the initial speed based on the value of the 'speed' input
let speed = 300 / speedEl.value;

// Call the writeText function to start displaying the text
writeText();

// Function to write the text letter by letter
function writeText() {
  // Slice the text from the beginning up to the current index and set it as the inner text of the element
  textEl.innerText = text.slice(0, idx);

  // Increment the index for the next slice
  idx++;

  // If the index goes beyond the length of the text, reset it to 1
  if (idx > text.length) {
    idx = 1;
  }

  // Schedule the next call to writeText after a specific timeout (speed)
  setTimeout(writeText, speed);
}

// Listen for changes in the 'speed' input element
speedEl.addEventListener('input', (e) => {
  // Update the speed based on the new value of the 'speed' input
  speed = 300 / e.target.value;
});
