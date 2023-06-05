// First, we grab HTML elements using the querySelector method.
const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

// Arrays containing the days of the week and the months in a year
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// Here we add an event listener to the toggle element, so when it's clicked, the theme changes from light to dark or vice versa
toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark'); // If dark mode is on, remove it
    e.target.innerHTML = 'Dark mode'; // and change the button text to "Dark mode"
  } else {
    html.classList.add('dark'); // If dark mode is off, turn it on
    e.target.innerHTML = 'Light mode'; // and change the button text to "Light mode"
  }
});

// The setTime function is responsible for updating the time and date displayed
function setTime() {
  const time = new Date(); // Gets the current date and time
  const month = time.getMonth(); // Gets the current month
  const day = time.getDay(); // Gets the current day of the week
  const date = time.getDate(); // Gets the current date of the month
  const hours = time.getHours(); // Gets the current hour
  const hoursForClock = hours >= 13 ? hours % 12 : hours; // Converts 24-hour time to 12-hour time for display
  const minutes = time.getMinutes(); // Gets the current minutes
  const seconds = time.getSeconds(); // Gets the current seconds
  const ampm = hours >= 12 ? 'PM' : 'AM'; // Determines whether it's AM or PM

  // Updates the position of the hour, minute, and second hands on the clock
  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

  // Updates the time and date display
  timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

// The scale function is used to map the time values to degrees for rotating the clock hands
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setTime(); // Call the setTime

// Set the time every second
setInterval(setTime, 1000);
