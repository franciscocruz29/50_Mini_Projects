// Algorithm Design for Dynamic Testimonial Update
//
// Step 1 -- Initialize selectors:
// - Retrieve references to the HTML elements that will display the testimonial content (testimonial, userImage, username, and role).
// Step 2 -- Define Testimonial Data:
// - Store multiple testimonials as objects in an array. Each object contains:
//    * name: The name of the person giving the testimonial.
//    * position: Their job role.
//    * photo: The URL of their profile image.
//    * text: The testimonial content.
// Step 3 -- Create a function to update the testimonial:
// - Extract Current Testimonial Data
// - Update DOM Elements
// - Increment Index
// - Reset Index if necessary
// Step 4 -- Set Interval for Automatic Updates:
// - Use setInterval to call the updateTestimonial function every 10 seconds (10000 milliseconds). This ensures that the testimonial section updates automatically at regular intervals.

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
  },
];

let currentIndex = 0;

// Function to update the testimonial
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[currentIndex];

  testimonial.textContent = text;
  userImage.src = photo;
  username.textContent = name;
  role.textContent = position;

  // Increment index or reset to 0 if at the end of the array
  currentIndex = (currentIndex + 1) % testimonials.length;
}

// Set interval to update testimonial every 10 seconds
const intervalDuration = 10000; // 10 seconds
setInterval(updateTestimonial, intervalDuration);

// Initialize first testimonial
updateTestimonial();
