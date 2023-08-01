// Get the reference to the HTML elements with the specified IDs
const button = document.getElementById('button'); // The button element
const toasts = document.getElementById('toasts'); // The container for notifications/toasts

// Array of predefined messages for notifications
const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

// Array of notification types (CSS classes) that can be used for styling the notifications
const types = ['info', 'success', 'error'];

// Add a click event listener to the 'button' element to trigger the creation of a notification
button.addEventListener('click', () => createNotification());

// Function to create a notification with a given message and type (if provided)
function createNotification(message = null, type = null) {
  // Create a new 'div' element to represent the notification
  const notif = document.createElement('div');
  // Add the class 'toast' to the notification element
  notif.classList.add('toast');
  // If a specific type is provided, add that type as a class to the notification element;
  // otherwise, get a random type from the 'types' array and add it as a class
  notif.classList.add(type ? type : getRandomType());
  // Set the inner text of the notification to the provided message, if available;
  // otherwise, get a random message from the 'messages' array and use it as the notification message
  notif.innerText = message ? message : getRandomMessage();
  // Append the notification element to the 'toasts' container
  toasts.appendChild(notif);

  // After 3000 milliseconds (3 seconds), remove the notification element from the DOM
  setTimeout(() => {
    notif.remove();
  }, 3000);
}

// Function to get a random element from an array
function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Function to get a random message from the 'messages' array
function getRandomMessage() {
  return getRandomFromArray(messages);
}

// Function to get a random type from the 'types' array
function getRandomType() {
  return getRandomFromArray(types);
}
