/* Each of these div elements contains the following child elements:

The first child element is a template literal ${ event.key === ' ' ? 'Space' : event.key; }, which displays the key that was pressed. If the key pressed is the space bar, then the text "Space" is displayed instead of a space character.
The second child element is the keyCode property of the event object, which contains the numerical value of the key that was pressed.
The third child element is the code property of the event object, which contains a string representation of the key that was pressed. */

const insert = document.getElementById('insert');

function displayKeyInfo(event) {
  const keyName = event.key === ' ' ? 'Space' : event.key;
  const keyCode = event.keyCode;
  const code = event.code;

  const html = `
    <div class="key">
      ${keyName} <small>event.key</small>
    </div>
    <div class="key">
      ${keyCode} <small>event.keyCode</small>
    </div>
    <div class="key">
      ${code} <small>event.code</small>
    </div>
  `;

  insert.innerHTML = html;
}

window.addEventListener('keydown', displayKeyInfo);

