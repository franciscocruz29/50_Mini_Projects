/* The code creates a navigation system where clicking on a list item shows the corresponding content while 
hiding other content elements and ensuring that only one list item is marked as active at a time. */

// Select elements with the class 'content' and store them in a variable.
const contents = document.querySelectorAll('.content');

// Select list items within the navigation and store them in a variable.
const listItems = document.querySelectorAll('nav ul li');

// Add a click event listener to each list item.
listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    hideAll();

    // Add the 'active' class to the clicked list item.
    item.classList.add('active');

    // Show the corresponding content.
    contents[idx].classList.add('show');
  });
});

// Function to hide all content elements and remove 'active' class from all list items.
function hideAll() {
  contents.forEach(content => content.classList.remove('show'));
  listItems.forEach(item => item.classList.remove('active'));
}
