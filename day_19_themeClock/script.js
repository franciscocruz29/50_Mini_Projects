// DOM elements
const domElements = {
  hour: document.querySelector('.hour'),
  minute: document.querySelector('.minute'),
  second: document.querySelector('.second'),
  time: document.querySelector('.time'),
  date: document.querySelector('.date'),
  toggle: document.querySelector('.toggle')
};

// Constants for days and months
const timeConstants = {
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
};

// Toggle event for changing theme
domElements.toggle.addEventListener('click', (e) => {
  const html = document.querySelector('html');
  html.classList.toggle('dark');
  e.target.innerHTML = html.classList.contains('dark') ? 'Light mode' : 'Dark mode';
});

// Function to update time and date
function updateTimeAndDate() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  // Convert 24-hour format to 12-hour format
  const hourForClock = hour >= 13 ? hour % 12 : hour;
  const ampm = hour >= 12 ? 'PM' : 'AM';

  // Rotate the clock hands
  rotateClockHands(hourForClock, minute, second);

  // Update the time and date display
  displayTimeAndDate(hourForClock, minute, ampm, currentTime);
}

function rotateClockHands(hour, minute, second) {
  domElements.hour.style.transform = createRotationStyle(hour, 0, 12, 0, 360);
  domElements.minute.style.transform = createRotationStyle(minute, 0, 60, 0, 360);
  domElements.second.style.transform = createRotationStyle(second, 0, 60, 0, 360);
}

function createRotationStyle(num, in_min, in_max, out_min, out_max) {
  const degree = scale(num, in_min, in_max, out_min, out_max);
  return `translate(-50%, -100%) rotate(${degree}deg)`;
}

function displayTimeAndDate(hour, minute, ampm, currentTime) {
  const day = currentTime.getDay();
  const month = currentTime.getMonth();
  const date = currentTime.getDate();

  domElements.time.innerHTML = `${hour}:${minute < 10 ? `0${minute}` : minute} ${ampm}`;
  domElements.date.innerHTML = `${timeConstants.days[day]}, ${timeConstants.months[month]} <span class="circle">${date}</span>`;
}

// Function to scale time to degree for clock hands rotation
function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

updateTimeAndDate(); // Call the updateTimeAndDate function

// Set interval to update the time every second
setInterval(updateTimeAndDate, 1000);
