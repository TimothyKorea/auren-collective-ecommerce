import {products} from './data.js';

function renderProducts(productArray, container) {
    container.innerHTML = "";

    productArray.forEach(product => {
        container.innerHTML += `
        <div class="product-card__container">
                <div class="product-card__img-wrapper">
                    <img class="product-card__img" src="${product.img}" alt="${product.imageAlt}">
                </div>

                <div class="product-card__info-wrapper">
                    <div class="product-card__info">
                        <span class="product-card__seasonal-tag">${product.seasonalTag}</span>
                        <h3 class="product-card__title">${product.title}</h3>
                        <div class="product-card__meta-row">
                            <div class="product-card__meta">
                                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgb(160, 25, 55)"><path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.56L12 17.77 6.12 20.62l1.12-6.56L2.48 9.42l6.58-.96L12 2.5z"/></svg></span>
                                <span class="product-card__rating">${product.rating}</span>
                            </div>
                            <p class="product-card__colors">${product.colors}</p>
                        </div>
                    </div>

                    <span class="product-card__price">$${product.price / 100}</span>
                </div>
            </div>
        `
    })
}

const bestSeller = products.filter(eachProduct => eachProduct.isBestSeller === true);
renderProducts(bestSeller, document.querySelector('.best-sellers__product-grid'));


const mobileMenuBtn = document.querySelector('.js-mobile-menu-toggle');
const mobileMenu = document.querySelector('.js-mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('is-active');
    toggleMenu();
})


const mobileMenuHidden = document.querySelector('.js-mobile-close-menu');

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

const searchIcon = document.querySelector('.js-search-icon');
const searchOverlay = document.querySelector('.js-search-overlay');
const searchOverlayClose = document.querySelector('.js-overlay-close');

searchIcon.addEventListener('click', () => {
    searchOverlay.classList.add('active');
})

searchOverlayClose.addEventListener('click', () => {
    searchOverlay.classList.remove('active');
})