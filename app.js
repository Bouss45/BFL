const bouton = document.querySelector('.btn');
const burger = document.querySelector('.burger');

bouton.addEventListener('click', () => {
    burger.classList.toggle('open');
});