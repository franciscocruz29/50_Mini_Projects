/* This code is designed to fetch data for 150 Pokemon from the PokeAPI, create HTML cards for each Pokemon, and display them in an HTML container element with the id 'poke-container'. 
Each card contains the Pokemon's name, ID, and type, with a background color corresponding to its primary type. */

const pokeContainer = document.getElementById('poke-container');
const pokemonCount = 150;

const typeColors = {
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
  normal: '#F5F5F5',
};

const mainTypes = Object.keys(typeColors);

async function fetchPokemons() {
  for (let i = 1; i <= pokemonCount; i++) {
    const pokemonData = await getPokemon(i);
    createPokemonCard(pokemonData);
  }
}

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function createPokemonCard(pokemon) {
  const pokemonCard = document.createElement('div');
  pokemonCard.classList.add('pokemon');

  const name = capitalizeFirstLetter(pokemon.name);
  const id = padWithZeros(pokemon.id, 3);

  const pokemonTypes = pokemon.types.map(type => type.type.name);
  const primaryType = findPrimaryType(pokemonTypes);

  const backgroundColor = typeColors[primaryType];

  pokemonCard.style.backgroundColor = backgroundColor;

  const pokemonHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${primaryType}</span></small>
        </div>
    `;

  pokemonCard.innerHTML = pokemonHTML;

  pokeContainer.appendChild(pokemonCard);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function padWithZeros(number, width) {
  return number.toString().padStart(width, '0');
}

function findPrimaryType(types) {
  return mainTypes.find(type => types.includes(type)) || 'normal';
}

fetchPokemons();
