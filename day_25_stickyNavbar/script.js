// Select the element with the class 'nav' and store it in the variable 'nav'
const nav = document.querySelector('.nav');

// Add an event listener to the window, which listens for the 'scroll' event and calls the 'fixNav' function when triggered
window.addEventListener('scroll', fixNav);

// Define the 'fixNav' function that will be called when the 'scroll' event occurs
function fixNav() {
  // Check if the vertical scroll position (window.scrollY) is greater than the combined height of the 'nav' element and an offset of 150 pixels
  if (window.scrollY > nav.offsetHeight + 150) {
    // If the condition is true, add the class 'active' to the 'nav' element
    nav.classList.add('active');
  } else {
    // If the condition is false (scroll position is less than the 'nav' element height + 150 pixels), remove the class 'active' from the 'nav' element
    nav.classList.remove('active');
  }
}

