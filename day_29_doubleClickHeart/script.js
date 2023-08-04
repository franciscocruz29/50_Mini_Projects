/* 
This code listens for double-click events on an element with class "loveMe." 
When a double-click is detected (two clicks within 800ms of each other), 
it creates a heart icon at the position of the double-click. 
The number of double-clicks is displayed and updated in the element with id "times." 
The heart icon is then removed after one second (1000ms).
 */


const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');
let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', handleLoveClick);

function handleLoveClick(e) {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if ((new Date().getTime() - clickTime) < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
}

function createHeart(e) {
  const heart = document.createElement('i');
  heart.classList.add('fas', 'fa-heart');
  setPosition(heart, e);
  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;
  setTimeout(() => heart.remove(), 1000);
}

function setPosition(heart, e) {
  const x = e.clientX;
  const y = e.clientY;
  const { offsetLeft, offsetTop } = e.target;
  const xInside = x - offsetLeft;
  const yInside = y - offsetTop;
  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;
}
