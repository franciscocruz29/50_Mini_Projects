/* This code facilitates a smooth user experience for inputting digit-by-digit codes 
by automatically moving the focus to the next or previous input field, depending on the user's action. */


// Select all elements with the class '.code' and store them in the 'codes' variable
const codes = document.querySelectorAll('.code');

// Focus the first element in the 'codes' NodeList
codes[0].focus();

// Iterate over each element in the 'codes' NodeList
codes.forEach((code, idx) => {
  // Add an event listener for the 'keydown' event on each 'code' element
  code.addEventListener('keydown', (e) => {
    // Check if the pressed key is a number between 0 and 9
    if (e.key >= 0 && e.key <= 9) {
      // Clear the current input field's value
      codes[idx].value = '';
      // Set a timeout to focus the next input field after 10 milliseconds
      setTimeout(() => codes[idx + 1] && codes[idx + 1].focus(), 10);
    }
    // Check if the pressed key is the 'Backspace'
    else if (e.key === 'Backspace') {
      // Set a timeout to focus the previous input field after 10 milliseconds
      setTimeout(() => codes[idx - 1] && codes[idx - 1].focus(), 10);
    }
  });
});
