// STEPS:

// 1. Retrieve the necessary HTML elements, such as the element with the ID "tags" and the element with the ID "textarea".

// 2. Set the focus on the textarea element to ensure that the cursor is placed inside it when the page loads.

// 3. Add an event listener for the "keyup" event on the textarea element. This event will trigger whenever a key is released after being pressed.

// 4. In the event listener callback function:
//  a.Extract the current value of the textarea, which represents the tags entered by the user.
//  b.Create tags from the input value by splitting it with commas as delimiters.
//  c.Filter out any empty or whitespace - only tags.
//  d.Trim whitespace from each tag.
//  e.Generate HTML elements for each tag and append them to the element with the ID "tags".

// 5. If the key released in the event is the Enter key:
// a.Clear the value of the textarea after a short delay(e.g., 10 milliseconds).
// b.Initiate the random selection process.

// 6. In the random selection process:
// a.Define the number of times the tags will be highlighted and unhighlighted(e.g., 30 times).
// b.Set an interval to repeat the following steps every 100 milliseconds:

// Pick a random tag from the available tags.
// If a tag is selected:
// i.Highlight the tag.
// ii.After a short delay(e.g., 100 milliseconds), unhighlight the tag.
// c.After the specified number of iterations, clear the interval.
// d.After a short delay(e.g., 100 milliseconds), select a random tag and highlight it without unhighlighting.

// 7. To pick a random tag:
// a.Retrieve all HTML elements with the class name "tag".
// b.Select a random element from the list of tags.

// 8. To highlight a tag:
//  a.Apply a visual style to the tag to indicate that it is selected or active.

// 9. To unhighlight a tag:
//  a.Remove the visual style applied to the tag to revert its appearance.

const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', handleKeyUp);

function handleKeyUp(e) {
  const input = e.target.value;

  if (e.key === 'Enter') {
    clearTextarea();
    randomSelect();
  }

  createTags(input);
}

function createTags(input) {
  const tags = input
    .split(',')
    .map(tag => tag.trim())
    .filter(tag => tag !== '');

  tagsEl.innerHTML = '';

  tags.forEach(tag => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function clearTextarea() {
  textarea.value = '';
}

function randomSelect() {
  const times = 30;
  let counter = 0;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    if (randomTag) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }

    counter++;

    if (counter === times) {
      clearInterval(interval);
      const finalTag = pickRandomTag();
      highlightTag(finalTag);
    }
  }, 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag');

  if (tags.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * tags.length);
  return tags[randomIndex];
}

function highlightTag(tag) {
  tag.classList.add('highlight');
}

function unHighlightTag(tag) {
  tag.classList.remove('highlight');
}

