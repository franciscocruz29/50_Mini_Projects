// A code that creates buttons for playing different sounds and ensures that only one sound plays at a time.

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

function createButton(sound) {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;
  btn.addEventListener('click', () => {
    playSound(sound);
  });

  return btn;
}

function playSound(sound) {
  stopAllSounds();
  document.getElementById(sound).play();
}

function stopAllSounds() {
  sounds.forEach(stopSound);
}

function stopSound(sound) {
  const song = document.getElementById(sound);
  song.pause();
  song.currentTime = 0;  // resets its current time to 0
}

function addButtonsToContainer() {
  const container = document.getElementById('buttons');
  sounds.map(createButton).forEach(btn => container.appendChild(btn));
}

addButtonsToContainer();
