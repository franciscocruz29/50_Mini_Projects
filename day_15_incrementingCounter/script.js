// Query all elements with the class 'counter' and assign them to the variable 'counters'
const counters = document.querySelectorAll('.counter');

// Loop over each 'counter' element
counters.forEach(counter => {

  // Initialize the innerText of the counter to '0'
  counter.innerText = '0';

  // Define a function called 'updateCounter'
  const updateCounter = () => {

    // Get the 'data-target' attribute from the counter element and convert it into a number
    const target = +counter.getAttribute('data-target');

    // Get the current innerText of the counter and convert it into a number
    const c = +counter.innerText;

    // Calculate the increment value. This is the target value divided by 200
    const increment = target / 200;

    // If the current value is less than the target value
    if (c < target) {
      // Increase the counter by the increment value and round it up to the nearest integer, then set this as the new counter text
      counter.innerText = `${Math.ceil(c + increment)}`;

      // Call the 'updateCounter' function after 1 millisecond
      setTimeout(updateCounter, 1);
    } else {
      // If the current value has reached (or exceeded) the target value, set the counter text to the target value
      counter.innerText = target;
    }
  };

  // Call the 'updateCounter' function to start the counter
  updateCounter();

});
