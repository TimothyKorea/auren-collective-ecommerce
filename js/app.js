const mobileMenuBtn = document.querySelector('.js-mobile-menu-toggle');
const mobileMenu = document.querySelector('.js-mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-active');
    toggleMenu();
})


const mobileMenuHidden = document.querySelector('.js-mobile-cancel-icon');

mobileMenuHidden.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
    hideMenu();
})


const body = document.body;
const overlay = document.querySelector('.js-menu-overlay');

function toggleMenu() {
    body.classList.add('menu-open');
    overlay.classList.add('is-active');
}

function hideMenu() {
    body.classList.remove('menu-open');
    overlay.classList.remove('is-active');
}