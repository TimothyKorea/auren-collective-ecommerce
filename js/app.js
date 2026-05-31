import {products} from './data.js';

function renderProducts(productArray, container) {
    container.innerHTML = "";

    productArray.forEach(product => {
        container.innerHTML += `
        <div class="product-card__container">
                <div class="product-card__img-wrapper">
                    <img class="product-card__img" src="${product.img}" alt="${product.imageAlt}">
                    <button type="button" class="product-card__cart-btn">
                        <span class="product-card__cart-btn-icon"><svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" aria-hidden="true" fill="#e3e3e3"><path d="M444-144v-300H144v-72h300v-300h72v300h300v72H516v300h-72Z"/></svg></span>
                        <span class="product-card__cart-btn-text">Add to Cart</span>
                    </button>
                    <button type="button" class="product-card__wishlist-add" aria-label="add to wishlist">
                        <span class="product-card__wishlist-icon"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="16px" viewBox="0 -960 960 960" width="16px" fill="currentcolor"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg></span>
                    </button>
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

const bestSellerLabelBtn = document.querySelector('.best-sellers__label');
const bestSellerFilterLists = document.querySelector('.best-sellers__filter-lists');

bestSellerLabelBtn.addEventListener('click', () => {
    bestSellerFilterLists.classList.toggle('active');
})

const bestSellersFilterText = document.querySelector('.best-sellers__selected-text');
const bestSellersFilterBtn = document.querySelectorAll('.best-sellers__filter-list-btn');

bestSellersFilterBtn.forEach(btn => {
    btn.addEventListener('click', () => {

        bestSellersFilterBtn.forEach(button => {
            button.classList.remove('active');
        })

        btn.classList.add('active');

        bestSellersFilterText.textContent = btn.textContent;

        bestSellerFilterLists.classList.remove('active');
    })
})

const subscribeBtn = document.querySelector('.js-subscribe-btn');
const promotionalInput = document.querySelector('.js-promotional-input');
const promotionalBtnSound = document.querySelector('.promotional-section__btn-sound');

function updateButtonState(){
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let email = promotionalInput.value.trim();

    if(!emailPattern.test(email)){
        subscribeBtn.textContent = 'Subscribe';
    }

    else{
        subscribeBtn.textContent = 'Ready to subscribe';
    }
}

promotionalInput.addEventListener('focus', updateButtonState);
promotionalInput.addEventListener('input', updateButtonState);

subscribeBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let email = promotionalInput.value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){
        alert('Please enter an email address');
        return;
    }

    else{
        subscribeBtn.textContent = 'Subscribed to Zyren journal';
        promotionalBtnSound.currentTime = 0;
        promotionalBtnSound.play();
        promotionalInput.value = "";
    }

    setTimeout(function(){
        updateButtonState();
    }, 2000);
})

