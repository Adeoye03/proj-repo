const header_1 = document.querySelector('.header');
const menu = document.querySelector('.menu');
const ul = document.querySelector('ul');


 header_1.addEventListener('click', () => {
     header_1.classList.toggle('active');
});
ul.addEventListener('click', () => {
    ul.classList.remove('active');
});
 header_1.addEventListener('click', () => {
     header_1.classList.remove('active');
});
