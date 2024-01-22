// Use const and let appropriately, and use camelCase for variable names
const resultElement = document.getElementById('result');
const filterElement = document.getElementById('filter');
const listItems = [];

// Use async function expression for better consistency
const getData = async () => {
  try {
    const response = await fetch('https://randomuser.me/api?results=50');
    const { results } = await response.json();

    // Clear resultElement content
    resultElement.innerHTML = '';

    // Use forEach with a concise arrow function
    results.forEach(user => {
      const listItem = document.createElement('li');
      listItems.push(listItem);

      // Use template literals for better readability
      listItem.innerHTML = `
                <img src="${user.picture.large}" alt="${user.name.first}">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.city}, ${user.location.country}</p>
                </div>
            `;

      // Append the listItem to resultElement
      resultElement.appendChild(listItem);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Use a separate function for clarity and modularity
const filterData = (searchTerm) => {
  // Use forEach with a concise arrow function
  listItems.forEach(item => {
    // Use includes directly for case-insensitive matching
    const isMatch = item.innerText.toLowerCase().includes(searchTerm.toLowerCase());

    // Toggle the 'hide' class based on the match condition
    item.classList.toggle('hide', !isMatch);
  });
};

// Trigger the data fetching on script load
getData();

// Use a more meaningful event name and a named function for clarity
filterElement.addEventListener('input', (event) => {
  filterData(event.target.value);
});
