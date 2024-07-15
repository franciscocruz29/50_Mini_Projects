// Select all elements with the class 'rating'
const ratings = document.querySelectorAll('.rating');
// Select the container of the ratings
const ratingsContainer = document.querySelector('.ratings-container');
// Select the send button
const sendBtn = document.querySelector('#send');
// Select the panel element
const panel = document.querySelector('#panel');
// Initialize the selected rating
let selectedRating = 'Satisfied';

// Add a click event listener to the ratings container
ratingsContainer.addEventListener('click', (e) => {
  // Check if the clicked element's parent has the class 'rating' and the clicked element has a next sibling
  if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
    removeActive();
    // Add 'active' class to the parent of the clicked element
    e.target.parentNode.classList.add('active');
    // Set the selected rating to the text content of the next sibling (which is the <small> tag)
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
  // Check if the clicked element's parent has the class 'rating', has a previous sibling, and that sibling is an IMG
  else if (
    e.target.parentNode.classList.contains('rating') &&
    e.target.previousSibling &&
    e.target.previousElementSibling.nodeName === 'IMG'
  ) {
    removeActive();
    // Add 'active' class to the parent of the clicked element
    e.target.parentNode.classList.add('active');
    // Set the selected rating to the text content of the clicked element
    selectedRating = e.target.innerHTML;
  }
});

// Add a click event listener to the send button
sendBtn.addEventListener('click', (e) => {
  // Replace the content of the panel with a thank you message and the selected rating
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

// Function to remove 'active' class from all rating elements
function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove('active');
  }
}
