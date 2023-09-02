/* This code sets up a simple note-taking application where users can add, edit, and delete notes. 
Notes are stored in local storage, allowing users to retrieve their notes even after closing and reopening the application. 
The code uses JavaScript and the DOM to manipulate the webpage and handle user interactions. */

// Get the 'add' button element by its ID.
const addBtn = document.getElementById('add');

// Retrieve notes from localStorage and parse them as JSON.
const notes = JSON.parse(localStorage.getItem('notes'));

// Check if there are any notes in localStorage.
if (notes) {
  // If there are notes, loop through each note and call the addNewNote function to display them.
  notes.forEach(note => addNewNote(note));
}

// Add a click event listener to the 'add' button, which will call the addNewNote function when clicked.
addBtn.addEventListener('click', () => addNewNote());

// Define the addNewNote function, which creates a new note element.
function addNewNote(text = '') {
  // Create a new 'div' element for the note and add a 'note' class to it.
  const note = document.createElement('div');
  note.classList.add('note');

  // Set the inner HTML of the note element, which includes buttons for editing and deleting, and a text area.
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  // Get references to various elements within the note.
  const editBtn = note.querySelector('.edit');
  const deleteBtn = note.querySelector('.delete');
  const main = note.querySelector('.main');
  const textArea = note.querySelector('textarea');

  // Set the value of the text area to the provided 'text'.
  textArea.value = text;

  // Render the 'text' as markdown in the 'main' section of the note.
  main.innerHTML = marked(text);

  // Add a click event listener to the delete button to remove the note and update local storage.
  deleteBtn.addEventListener('click', () => {
    note.remove();
    updateLS();
  });

  // Add a click event listener to the edit button to toggle the visibility of the main section and text area.
  editBtn.addEventListener('click', () => {
    main.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
  });

  // Add an input event listener to the text area to update the markdown preview and local storage.
  textArea.addEventListener('input', (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
    updateLS();
  });

  // Append the created note element to the body of the document.
  document.body.appendChild(note);
}

// Define the updateLS function to update the notes in local storage.
function updateLS() {
  // Get all the text areas containing notes.
  const notesText = document.querySelectorAll('textarea');

  // Create an array to store the notes' content.
  const notes = [];

  // Iterate through each text area and push its value (note content) into the 'notes' array.
  notesText.forEach(note => notes.push(note.value));

  // Store the 'notes' array in local storage as a JSON string.
  localStorage.setItem('notes', JSON.stringify(notes));
}
