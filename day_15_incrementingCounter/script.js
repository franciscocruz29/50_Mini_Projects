// Function to handle the update of counter
const updateCounter = (counter, target) => {
  let currentCount = +counter.innerText;
  const increment = target / 200;

  if (currentCount < target) {
    counter.innerText = `${Math.ceil(currentCount + increment)}`;
    setTimeout(() => updateCounter(counter, target), 1);
  } else {
    counter.innerText = target;
  }
};

// Query all elements with the class 'counter'
const counters = document.querySelectorAll('.counter');

// Loop over each 'counter' element
counters.forEach(counter => {
  // Initialize the innerText of the counter to '0'
  counter.innerText = '0';

  // Get the 'data-target' attribute from the counter element and convert it into a number
  const target = +counter.getAttribute('data-target');

  // Start the counter
  updateCounter(counter, target);
});
