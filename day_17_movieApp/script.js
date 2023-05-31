// URLs for API, Images and Search endpoint
const API_KEY = '3fd2be6f0c70a2a598f084ddfb75487c';
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

// Get the DOM elements needed
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Fetches the movie data from a given URL
const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

// Show movies on the webpage
const showMovies = (movies) => {
  main.innerHTML = '';
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
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
    main.appendChild(movieEl);
  });
};

// Determine the class by the movie's vote
const getClassByRate = (vote) => {
  if (vote >= 8) return 'green';
  else if (vote >= 5) return 'orange';
  else return 'red';
};

// Fetch movies from API_URL
getMovies(API_URL);

// Event listener for form submit event
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    await getMovies(`${SEARCH_API}${searchTerm}`);
    search.value = '';
  } else {
    window.location.reload();
  }
});
