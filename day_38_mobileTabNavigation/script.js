/* The code creates a navigation system where clicking on a list item shows the corresponding content while 
hiding other content elements and ensuring that only one list item is marked as active at a time. */

// Select all elements with the class 'content' and store them in the 'contents' variable.
const contents = document.querySelectorAll('.content');

// Select all list items within <ul> elements in the navigation and store them in the 'listItems' variable.
const listItems = document.querySelectorAll('nav ul li');

// Iterate over each 'listItem' using forEach loop and attach a click event listener.
listItems.forEach((item, idx) => {
  item.addEventListener('click', () => {
    // When a list item is clicked, first hide all content elements.
    hideAllContents();

    // Then hide all list items (remove the 'active' class).
    hideAllItems();

    // Add the 'active' class to the clicked list item.
    item.classList.add('active');

    // Show the corresponding content by adding the 'show' class to it. 'idx' is the index of the clicked list item.
    contents[idx].classList.add('show');
  });
});

// Function to hide all content elements by removing the 'show' class from each one.
function hideAllContents() {
  contents.forEach(content => content.classList.remove('show'));
}

// Function to hide all list items by removing the 'active' class from each one.
function hideAllItems() {
  listItems.forEach(item => item.classList.remove('active'));
}
