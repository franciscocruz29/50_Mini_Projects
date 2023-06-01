// The logic is largely the same, but instead of a series of global variables and functions, 
// there's now a SlideShow class that encapsulates all the functionality.

// Create a SlideShow class to handle slide functionality
class SlideShow {
  constructor(body, slides, leftBtn, rightBtn) {
    this.body = body;
    this.slides = slides;
    this.leftBtn = leftBtn;
    this.rightBtn = rightBtn;
    this.activeSlideIndex = 0;

    // Set initial body background
    this.setBodyBackground();

    // Set initial active slide
    this.setActiveSlide();

    // Bind event handlers
    this.leftBtn.addEventListener('click', this.previousSlide.bind(this));
    this.rightBtn.addEventListener('click', this.nextSlide.bind(this));
  }

  // Set the body's background image to the current slide's background
  setBodyBackground() {
    this.body.style.backgroundImage = this.slides[this.activeSlideIndex].style.backgroundImage;
  }

  // Set the active slide
  setActiveSlide() {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.slides[this.activeSlideIndex].classList.add('active');
  }

  // Go to the next slide
  nextSlide() {
    this.activeSlideIndex++;
    if (this.activeSlideIndex > this.slides.length - 1) {
      this.activeSlideIndex = 0;
    }
    this.updateSlide();
  }

  // Go to the previous slide
  previousSlide() {
    this.activeSlideIndex--;
    if (this.activeSlideIndex < 0) {
      this.activeSlideIndex = this.slides.length - 1;
    }
    this.updateSlide();
  }

  // Update the slide
  updateSlide() {
    this.setBodyBackground();
    this.setActiveSlide();
  }
}

// Instantiate the SlideShow class
new SlideShow(
  document.body,
  document.querySelectorAll('.slide'),
  document.getElementById('left'),
  document.getElementById('right')
);
