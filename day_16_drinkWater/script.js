/* This code is for a hydration tracker. It has 8 small cups representing 250ml each and a big cup representing the total of 2L. 
When you click on a small cup, it and all the cups before it get highlighted, representing that you've drunk that water. 
The big cup updates to show the percentage of water drunk and the liters remained. */

// Select all the small cup elements from the DOM
const smallCups = document.querySelectorAll('.cup-small');

// Select the liters, percentage, and remained elements from the DOM
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Call the updateBigCup function initially to set the big cup display
updateBigCup();

// Add click event listeners to each small cup
smallCups.forEach((cup, idx) => {
  cup.addEventListener('click', () => highlightCups(idx));
});

// Function to highlight the cups up to the one clicked
function highlightCups(idx) {
  // If the last cup is clicked and it's already full, remove its highlight
  if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;

  // If the clicked cup is already full and the next one isn't, remove the highlight of the clicked cup
  else if (smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
    idx--;
  }

  // For each cup, if its index is less than or equal to the clicked cup's index, add the 'full' class to it, otherwise remove the 'full' class
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  // Update the big cup display
  updateBigCup();
}

// Function to update the big cup display
function updateBigCup() {
  // Get the number of full cups
  const fullCups = document.querySelectorAll('.cup-small.full').length;

  // Get the total number of cups
  const totalCups = smallCups.length;

  // If there are no full cups, hide the percentage
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    // Otherwise, show the percentage and set its height and text according to the proportion of full cups
    percentage.style.visibility = 'visible';
    percentage.style.height = `${fullCups / totalCups * 330}px`;
    percentage.innerText = `${fullCups / totalCups * 100}%`;
  }

  // If all cups are full, hide the remained
  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    // Otherwise, show the remained and set its text according to the remaining liters
    remained.style.visibility = 'visible';
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`;
  }
}
