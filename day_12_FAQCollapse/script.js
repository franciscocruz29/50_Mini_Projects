// Steps:

// 1. Find all elements in the document with the class name 'faq-toggle' and store them in a list called 'toggles'.

// 2. For each 'toggle' element in the 'toggles' list, do the following:

  // 3. Attach a 'click' event listener to the 'toggle' element.This means that when the 'toggle' element is clicked, it will trigger a function.

  // 4. The function that is triggered on click does the following:

      // 5. It finds the parent element of the 'toggle' element that was clicked.

      // 6. It checks if the parent element has a class called 'active'.

      // 7. If the 'active' class is present, it removes it. If it's not present, it adds it.

/* const toggles = document.querySelectorAll('.faq-toggle');

for (let toggle of toggles) {
  toggle.addEventListener('click', function () {
    this.parentNode.classList.toggle('active');
  });
} */

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
