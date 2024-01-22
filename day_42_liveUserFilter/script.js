// Get references to the HTML elements with the IDs 'result' and 'filter'
const result = document.getElementById('result');
const filter = document.getElementById('filter');

// Create an empty array to store list items
const listItems = [];

// Call the function to fetch data when the script loads
getData();

// Add an event listener to the 'filter' input element, triggering the filterData function when the input changes
filter.addEventListener('input', (e) => filterData(e.target.value));

// Asynchronous function to fetch data from the randomuser.me API
async function getData() {
  // Make a fetch request to the API endpoint and await the response
  const res = await fetch('https://randomuser.me/api?results=50');

  // Extract the 'results' property from the JSON response
  const { results } = await res.json();

  // Clear the content of the 'result' element
  result.innerHTML = '';

  // Iterate over each user in the results
  results.forEach(user => {
    // Create a new list item element
    const li = document.createElement('li');

    // Push the list item to the 'listItems' array
    listItems.push(li);

    // Set the inner HTML of the list item with user information
    li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

    // Append the list item to the 'result' element
    result.appendChild(li);
  });
}

// Function to filter the displayed data based on the input value
function filterData(searchTerm) {
  // Iterate over each list item in the 'listItems' array
  listItems.forEach(item => {
    // Check if the text content of the list item contains the search term (case-insensitive)
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      // If it does, remove the 'hide' class to display the item
      item.classList.remove('hide');
    } else {
      // If it doesn't, add the 'hide' class to hide the item
      item.classList.add('hide');
    }
  });
}
