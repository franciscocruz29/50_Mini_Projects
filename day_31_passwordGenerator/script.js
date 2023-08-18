// Get references to the HTML elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// Map of character types to their corresponding random functions
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
};

// Event listener for copying password to clipboard
clipboardEl.addEventListener('click', copyToClipboard);

// Event listener for generating password
generateEl.addEventListener('click', generatePassword);

// Function to copy password to clipboard
function copyToClipboard() {
  const password = resultEl.innerText;
  if (!password) {
    return; // If no password to copy, exit
  }
  navigator.clipboard.writeText(password);
  alert('Password copied to clipboard!');
}

// Function to generate and display password
function generatePassword() {
  const length = +lengthEl.value; // Get the desired password length
  const selectedTypes = {
    lower: lowercaseEl.checked,
    upper: uppercaseEl.checked,
    number: numbersEl.checked,
    symbol: symbolsEl.checked
  };

  const selectedTypeCount = Object.values(selectedTypes).filter(Boolean).length;
  if (selectedTypeCount === 0) {
    resultEl.innerText = 'Select at least one character type.';
    return; // If no character type is selected, show error message and exit
  }

  const generatedPassword = generateRandomPassword(selectedTypes, length);
  resultEl.innerText = generatedPassword; // Display the generated password
}

// Function to generate a random password based on selected types and length
function generateRandomPassword(selectedTypes, length) {
  const selectedTypeKeys = Object.keys(selectedTypes).filter(type => selectedTypes[type]);
  let generatedPassword = '';

  for (let i = 0; i < length; i++) {
    const randomType = selectedTypeKeys[Math.floor(Math.random() * selectedTypeKeys.length)];
    generatedPassword += randomFunc[randomType](); // Append a randomly generated character of the selected type
  }

  return generatedPassword;
}

// Functions to generate random characters
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); // Generate a lowercase character
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); // Generate an uppercase character
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); // Generate a numeric character
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'; // List of symbols
  return symbols[Math.floor(Math.random() * symbols.length)]; // Generate a random symbol
}
