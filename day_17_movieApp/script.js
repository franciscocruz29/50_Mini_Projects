// Declare constant URLs for API, Images and Search endpoint
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

// Get the DOM elements needed
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Fetch movies from API_URL
getMovies(API_URL);

// Async function that fetches the movie data from a given URL
async function getMovies(url) {
  // Fetch data from the API
  const res = await fetch(url);
  // Parse the JSON response
  const data = await res.json();

  // Call showMovies function with the results
  showMovies(data.results);
}

// Function to show movies on the webpage
function showMovies(movies) {
  // Clear main HTML
  main.innerHTML = '';

  // For each movie in the movies array
  movies.forEach((movie) => {
    // Destructure the movie object to get title, poster_path, vote_average, and overview
    const { title, poster_path, vote_average, overview } = movie;

    // Create a new div element for this movie
    const movieEl = document.createElement('div');
    // Add the 'movie' class to this div
    movieEl.classList.add('movie');

    // Set the innerHTML of this div
    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
          <h3>Overview</h3>
          ${overview}
        </div>
        `;
    // Append this div to main element
    main.appendChild(movieEl);
  });
}

// Function to determine the class by the movie's vote
function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5) {
    return 'orange';
  } else {
    return 'red';
  }
}

// Event listener for form submit event
form.addEventListener('submit', (e) => {
  // Prevent the form from being submitted normally
  e.preventDefault();

  // Get the search term from the search input
  const searchTerm = search.value;

  // If search term is not empty
  if (searchTerm && searchTerm !== '') {
    // Fetch movies from the search API with the search term
    getMovies(SEARCH_API + searchTerm);

    // Clear the search input
    search.value = '';
  } else {
    // If search term is empty, reload the page
    window.location.reload();
  }
});
