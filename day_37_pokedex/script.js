/* This code is designed to fetch data for 150 Pokemon from the PokeAPI, create HTML cards for each Pokemon, and display them in an HTML container element with the id 'poke-container'. 
Each card contains the Pokemon's name, ID, and type, with a background color corresponding to its primary type. */

// Get a reference to the HTML element with the id 'poke-container'.
const poke_container = document.getElementById('poke-container');

// Define the total number of Pokemon you want to fetch and display.
const pokemon_count = 150;

// Define a dictionary (object) called 'colors' that associates Pokemon types with colors.
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};

// Create an array called 'main_types' that contains the keys (types) from the 'colors' object.
const main_types = Object.keys(colors);

// Define an asynchronous function 'fetchPokemons' that will fetch and display Pokemon data.
const fetchPokemons = async () => {
  // Use a for loop to fetch each Pokemon data from the API.
  for (let i = 1; i <= pokemon_count; i++) {
    // Await the 'getPokemon' function for each Pokemon to ensure they are fetched sequentially.
    await getPokemon(i);
  }
};

// Define an asynchronous function 'getPokemon' that fetches data for a specific Pokemon by its ID.
const getPokemon = async (id) => {
  // Construct the URL to fetch data for the specified Pokemon ID from the PokeAPI.
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  // Send a GET request to the PokeAPI using 'fetch' and await the response.
  const res = await fetch(url);
  // Parse the response JSON data.
  const data = await res.json();
  // Call the 'createPokemonCard' function to create a card for the fetched Pokemon.
  createPokemonCard(data);
};

// Define a function 'createPokemonCard' that generates HTML cards for each Pokemon.
const createPokemonCard = (pokemon) => {
  // Create a new <div> element to represent the Pokemon card.
  const pokemonEl = document.createElement('div');
  // Add a CSS class 'pokemon' to the created <div> element.
  pokemonEl.classList.add('pokemon');

  // Capitalize the first letter of the Pokemon's name and format its ID.
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');

  // Extract the Pokemon's types and determine the card's background color based on its primary type.
  const poke_types = pokemon.types.map(type => type.type.name);
  const type = main_types.find(type => poke_types.indexOf(type) > -1);
  const color = colors[type];

  // Set the background color of the Pokemon card based on its type.
  pokemonEl.style.backgroundColor = color;

  // Create the inner HTML content for the Pokemon card.
  const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

  // Set the inner HTML of the Pokemon card to the generated content.
  pokemonEl.innerHTML = pokemonInnerHTML;

  // Append the Pokemon card to the 'poke_container' element in the HTML.
  poke_container.appendChild(pokemonEl);
};

// Call the 'fetchPokemons' function to start fetching and displaying Pokemon data.
fetchPokemons();
