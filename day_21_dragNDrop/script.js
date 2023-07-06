// Select the element with class 'fill'
const fill = document.querySelector('.fill');

// Select all elements with class 'empty'
const empties = document.querySelectorAll('.empty');

// Add event listeners for drag events on the 'fill' element
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Iterate over each 'empty' element and add event listeners for drag events
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Event handler for dragstart event
function dragStart() {
  // Add the class 'hold' to the current element's className
  this.className += ' hold';
  // Set the className to 'invisible' after a small delay
  setTimeout(() => this.className = 'invisible', 0);
}

// Event handler for dragend event
function dragEnd() {
  // Set the className of the current element to 'fill'
  this.className = 'fill';
}

// Event handler for dragover event
function dragOver(e) {
  // Prevent the default behavior of the browser for the dragover event
  e.preventDefault();
}

// Event handler for dragenter event
function dragEnter(e) {
  // Prevent the default behavior of the browser for the dragenter event
  e.preventDefault();
  // Add the class 'hovered' to the current element's className
  this.className += ' hovered';
}

// Event handler for dragleave event
function dragLeave() {
  // Set the className of the current element to 'empty'
  this.className = 'empty';
}

// Event handler for drop event
function dragDrop() {
  // Set the className of the current element to 'empty'
  this.className = 'empty';
  // Append the 'fill' element to the current element
  this.append(fill);
}
