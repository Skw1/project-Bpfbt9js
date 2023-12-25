import fetchAPI from './js/fetchApi.js';
import localStorageApi from './js/localStorageApi.js';
import refsAPI from './refs.js';
import { onBasicLightbox } from './js/modal.Close';
import closeIcon from './img/icons.svg#close-icon';
import shoppingCartIcon from './img/icons.svg#shopping-cart-icon';

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

// jsClass - класс лішки, наприклад `<li data-id="${_id}" class="item js-product-item">
// в лішці обовязково має бути дата атрибут data-id="${_id}"

export async function getProductModal(event, jsClass) {
  const currentProduct = event.target.closest(jsClass);
  const id = currentProduct.dataset.id;
  const { name, desc, img, category, price, size, popularity } =
    await fetchAPI.product(id);

  let basketStatus = 'addtocart'; // по дефолту текст на кнопці 'Add to'
  let basketText = 'Add to';

  // додати перевірку localStorage чи є продукт по id і змінити
  // basketStatus = "removefromcart";
  // basketText = 'Remove from';

  const productModalMarkup = `<div class="modal-product">
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
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${popularity}</span>
            </p>
          </div>
          <p class="modal-product-prop-dscr">${desc}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${price}</p>
        <button class="modal-product-cart js-${basketStatus}" type="button">
          <span class="baskettext">${basketText}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${shoppingCartIcon}"></use>
            </svg>
        </button>
      </div>
    </div>`;

  onBasicLightbox(productModalMarkup, '.js-modal-close');

  // додати слухач по кліку на кнопку корзини
  // записати дані з id продукту в localStorage якщо такого id там немає і змінити basketText = 'Remove from'
  //якщо в localStorage є продукт змінити basketText = 'Add to' і пидалити продукт з localStorage
}
