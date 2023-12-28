import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import { onBasicLightbox } from './modalClose.js';
import closeIcon from '../img/icons.svg#close-icon';
import shoppingCartIcon from '../img/icons.svg#shopping-cart-icon';

// функція getProductModal(event, jsClass) викликається при кліку на картку
// event - івент колбек функції при кліку на картку

// cards.addEventListener("click", handleClick); //слухач на контейнер з лішками

// function handleClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }
//   if (event.target.classList.contains("basket")) {
//     // сюди потрібно прописати додавання продукту в Localstorage по id
//     // console.log("you clicked basket");
//   } else {
//     // console.log("you clicked product");
//     getProductModal(event, ".js-product-item");
//   }
// }

// jsClass - класс лішки, наприклад `<li data-productId="${_id}" class="item js-product-item">
// в лішці обовязково має бути дата атрибут data-productId="${_id}"

async function getProductModal(event, jsClass) {
  const currentProduct = event.target.closest(jsClass);
  const id = currentProduct.dataset.productid;
  const { name, desc, img, category, price, size, popularity } =
    await fetchAPI.product(id);

  let basketText = 'Add to';

  let cart = localStorageApi.loadCart();
  if ('products' in cart) {
    const idx = cart.products.findIndex(product => product.productId === id);
    if (idx !== -1) {
      basketText = 'Remove from';
    }
  }

  const productModalMarkup = `<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${closeIcon}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${img}"
            alt="${name}"
            width="160"
            height="160"
          />
        </div>
        <div class="modal-dscr-wrapper">
          <h3 class="modal-product-title">${name}</h3>
          <div class="modal-product-prop-wrap">
            <p class="modal-product-prop">
              Category:
              <span class="modal-product-prop-span">${category}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${size}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${popularity}</span>
            </p>       
          <p class="modal-product-prop-dscr">${desc}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${price}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${basketText}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${shoppingCartIcon}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;

  onBasicLightbox(productModalMarkup, '.js-modal-close');

  document
    .querySelector('.js-modal-product-cart')
    .addEventListener('click', event => {
      const btn = event.target.closest('.modal-product-cart');

      let cart = localStorageApi.loadCart();

      let notInCart = true;
      if ('products' in cart) {
        const resalt = cart.products.findIndex(
          product => product.productId === id
        );
        if (resalt !== -1) {
          cart.products.splice(resalt, 1);
          btn.querySelector('.baskettext').innerHTML = 'Add to';
          notInCart = false;
        }
      }

      if (notInCart) {
        if ('products' in cart) {
          cart.products.push({
            productId: id,
            amount: 1,
          });
        } else {
          cart = {
            email: '',
            products: [{ productId: id, amount: 1 }],
          };
        }
        btn.querySelector('.baskettext').innerHTML = 'Remove from';
      }

      localStorageApi.saveCart(cart);
    });
}

export { getProductModal };
