const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('active', window.scrollY > nav.offsetHeight + 150);
});
