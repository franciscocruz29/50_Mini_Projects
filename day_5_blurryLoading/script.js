/* This code creates a loading animation by progressively reducing the opacity of the text displaying 
the loading percentage and the blur effect of a background image. */

const loadText = document.querySelector('.loading-text'); // store a reference to the element displaying the loading percentage
const bg = document.querySelector('.bg'); // store a reference to the background element

let load = 0;

let int = setInterval(blurring, 30); // call the blurring function every 30ms

// This function is responsible for updating the loading percentage, text opacity, and background blur.
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// The scale function is used to map the loading percentage to appropriate opacity and blur values.
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
