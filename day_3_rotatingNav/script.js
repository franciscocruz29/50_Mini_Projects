const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

// use the classList API to add and remove the show-nav class
open.addEventListener('click', () => container.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav'));
