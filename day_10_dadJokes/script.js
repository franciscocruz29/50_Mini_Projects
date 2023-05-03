const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

function generateJoke() {
  // Create an object with headers to be sent along with the request
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  // Send an HTTP request to the specified URL with the headers object
  fetch('https://icanhazdadjoke.com', config)
    // Extract the JSON data from the response
    .then((res) => res.json())
    // Update an HTML element with the retrieved joke data
    .then((data) => {
      // console.log(data);
      // Assuming there is an element with ID "joke" in the HTML document
      jokeEl.innerHTML = data.joke;
    });
}

