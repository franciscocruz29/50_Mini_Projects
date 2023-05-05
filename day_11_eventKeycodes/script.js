const insert = document.getElementById('insert');

/* Each of these div elements contains the following child elements:

The first child element is a template literal ${ event.key === ' ' ? 'Space' : event.key; }, which displays the key that was pressed. If the key pressed is the space bar, then the text "Space" is displayed instead of a space character.
The second child element is the keyCode property of the event object, which contains the numerical value of the key that was pressed.
The third child element is the code property of the event object, which contains a string representation of the key that was pressed. */

window.addEventListener('keydown', (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === ' ' ? 'Space' : event.key} 
  <small>event.key</small>
</div>

<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});
