// Create a class to handle the data and rendering
class DataRenderer {
  constructor() {
    // Get the DOM elements by their IDs
    this.header = document.getElementById('header');
    this.title = document.getElementById('title');
    this.excerpt = document.getElementById('excerpt');
    this.profile_img = document.getElementById('profile_img');
    this.name = document.getElementById('name');
    this.date = document.getElementById('date');

    // Get the DOM elements with the class 'animated-bg' and 'animated-bg-text'
    this.animated_bgs = document.querySelectorAll('.animated-bg');
    this.animated_bg_texts = document.querySelectorAll('.animated-bg-text');

    // Initialize the data
    this.data = {
      header: '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />',
      title: 'Lorem ipsum dolor sit amet',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis',
      profile_img: '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />',
      name: 'John Doe',
      date: 'Oct 08, 2020'
    };
  }

  // Render the data
  renderData() {
    // Update the DOM elements with the data
    this.header.innerHTML = this.data.header;
    this.title.innerHTML = this.data.title;
    this.excerpt.innerHTML = this.data.excerpt;
    this.profile_img.innerHTML = this.data.profile_img;
    this.name.innerHTML = this.data.name;
    this.date.innerHTML = this.data.date;

    // Remove the 'animated-bg' class from each element in animated_bgs NodeList
    this.animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));

    // Remove the 'animated-bg-text' class from each element in animated_bg_texts NodeList
    this.animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
  }

  // Initialize the rendering process
  init() {
    setTimeout(() => {
      this.renderData();
    }, 2500);
  }
}

// Create an instance of the DataRenderer class and initialize it
const dataRenderer = new DataRenderer();
dataRenderer.init();
