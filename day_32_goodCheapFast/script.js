// Select all elements with the class 'toggle'
const toggles = document.querySelectorAll('.toggle');

// Select the elements with IDs 'good', 'cheap', and 'fast'
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

// Add an event listener to each toggle element
toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

// Define the function that will be called when a toggle is changed
function doTheTrick(theClickedOne) {
  // Check if all three checkboxes are checked
  if (good.checked && cheap.checked && fast.checked) {
    // If the 'good' checkbox was clicked, uncheck the 'fast' checkbox
    if (good === theClickedOne) {
      fast.checked = false;
    }

    // If the 'cheap' checkbox was clicked, uncheck the 'good' checkbox
    if (cheap === theClickedOne) {
      good.checked = false;
    }

    // If the 'fast' checkbox was clicked, uncheck the 'cheap' checkbox
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}

