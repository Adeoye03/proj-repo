const header_1 = document.querySelector('.header');
const menu = document.querySelector('.menu');
const ul = document.querySelector('ul');


menu.addEventListener('click', () => {
    menu.classList.toggle('active');
});
ul.addEventListener('click', () => {
    menu.classList.remove('active');
});