const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  // Create an object with headers to be sent along with the request
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  try {
    // Send an HTTP request to the specified URL with the headers object
    const response = await fetch('https://icanhazdadjoke.com', config);
    // Extract the JSON data from the response
    const data = await response.json();
    // Update the element's inner HTML with the retrieved joke data
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    // Log any errors to the console
    console.error(error);
  }
}
