// Define the base URL for the GitHub API
const APIURL = 'https://api.github.com/users/';

// Get references to HTML elements
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

// Function to fetch user data from GitHub API
async function getUser(username) {
  try {
    // Fetch user data using Axios library
    const { data } = await axios(APIURL + username);

    // Call the function to create the user card with the retrieved data
    createUserCard(data);

    // Call the function to get and display the user's repositories
    getRepos(username);
  } catch (err) {
    // If an error occurs during the API call (e.g., user not found), handle the error
    if (err.response.status == 404) {
      // Call the function to create an error card with a message
      createErrorCard('No profile with this username');
    }
  }
}

// Function to fetch user repositories from GitHub API
async function getRepos(username) {
  try {
    // Fetch user repositories data using Axios library
    const { data } = await axios(APIURL + username + '/repos?sort=created');

    // Call the function to add the repositories to the user card
    addReposToCard(data);
  } catch (err) {
    // If an error occurs during the API call, handle the error
    createErrorCard('Problem fetching repos');
  }
}

// Function to create the user card with user information
function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : '';

  // Create the HTML template for the user card
  const cardHTML = `
    <div class="card">
      <div>
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
      </div>
      <div class="user-info">
        <h2>${userID}</h2>
        ${userBio}
        <ul>
          <li>${user.followers} <strong>Followers</strong></li>
          <li>${user.following} <strong>Following</strong></li>
          <li>${user.public_repos} <strong>Repos</strong></li>
        </ul>

        <div id="repos"></div>
      </div>
    </div>
  `;

  // Set the user card's HTML as the content of the 'main' element
  main.innerHTML = cardHTML;
}

// Function to create an error card with a specified error message
function createErrorCard(msg) {
  const cardHTML = `
    <div class="card">
      <h1>${msg}</h1>
    </div>
  `;

  // Set the error card's HTML as the content of the 'main' element
  main.innerHTML = cardHTML;
}

// Function to add the user repositories to the user card
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  // Iterate through the first 5 repositories and create links for them
  repos.slice(0, 5).forEach(repo => {
    const repoEl = document.createElement('a');
    repoEl.classList.add('repo');
    repoEl.href = repo.html_url;
    repoEl.target = '_blank';
    repoEl.innerText = repo.name;

    // Append each repository link to the 'reposEl' element
    reposEl.appendChild(repoEl);
  });
}

// Event listener for the form submission (search button click or Enter key press)
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior

  const user = search.value;

  if (user) {
    // If the user input is not empty, call the 'getUser' function to fetch and display user data
    getUser(user);

    search.value = ''; // Clear the search input after processing
  }
});
