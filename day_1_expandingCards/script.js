// This code creates an interactive set of panels where only one panel can be active at a time. 
// When a panel is clicked, it becomes active, and any previously active panel becomes inactive.

// 1. Select all the panels
const panels = document.querySelectorAll('.panel');
// console.log(panels);

// 2. For each panel, add an event listener for the 'click' event:

// When a panel is clicked, the anonymous arrow function is executed.
// First, call the removeActiveClasses() function. This function will remove the 'active' class from all panels, making them inactive.
// Then, add the 'active' class to the clicked panel using panel.classList.add('active'). This marks the clicked panel as active.

panels.forEach(panel => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

// 3. The removeActiveClasses() function: This ensures that no panel has the 'active' class, effectively making all panels inactive.
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  });
}
