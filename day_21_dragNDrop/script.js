// Select the draggable element
const draggableElement = document.querySelector('.fill');

// Select all target elements
const targetElements = document.querySelectorAll('.empty');

// Add event listeners to the draggable element
draggableElement.addEventListener('dragstart', handleDragStart);
draggableElement.addEventListener('dragend', handleDragEnd);

// Add event listeners to each target element
for (const targetElement of targetElements) {
  targetElement.addEventListener('dragover', handleDragOver);
  targetElement.addEventListener('dragenter', handleDragEnter);
  targetElement.addEventListener('dragleave', handleDragLeave);
  targetElement.addEventListener('drop', handleDrop);
}

// Event handler for the dragstart event
function handleDragStart() {
  // Add the class 'hold' to the draggable element
  this.classList.add('hold');

  // Set a small timeout to allow the class change to take effect
  setTimeout(() => this.classList.add('invisible'), 0);
}

// Event handler for the dragend event
function handleDragEnd() {
  // Reset the class of the draggable element to its default value
  this.classList.remove('hold', 'invisible');
  this.classList.add('fill');
}

// Event handler for the dragover event
function handleDragOver(event) {
  // Prevent the default behavior of the browser for the dragover event
  event.preventDefault();
}

// Event handler for the dragenter event
function handleDragEnter(event) {
  // Prevent the default behavior of the browser for the dragenter event
  event.preventDefault();

  // Add the class 'hovered' to the target element
  this.classList.add('hovered');
}

// Event handler for the dragleave event
function handleDragLeave() {
  // Remove the class 'hovered' from the target element
  this.classList.remove('hovered');
}

// Event handler for the drop event
function handleDrop() {
  // Remove the class 'hovered' from the target element
  this.classList.remove('hovered');

  // Append the draggable element to the target element
  this.appendChild(draggableElement);
}
