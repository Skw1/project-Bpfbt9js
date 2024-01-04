import debounce from 'debounce';
import { buyProduct, setCheckedIcon } from './discount.js';
import fetchAPI from './fetchApi.js';
import { getProductModal } from './modalProduct.js';
import refsAPI from './refs.js';
import localStorageApi from './localStorageApi.js';
import { addCheck } from './popularProducts.js';
import cartIcon from '../img/icons.svg#discount-cart';
import checkedIcon from '../img/icons.svg#discount-checked';

const errHide = document.querySelector('.error');
let page;
let frontEndPop = new refsAPI();
let checkBtn;
let productListApi;

let filter = {
  limit: null,
};

async function renderSearchedCards(data) {
  document.querySelector('.product_card-list').innerHTML = '';
  data.results.map(item => {
    return document
      .querySelector('.product_card-list')
      .insertAdjacentHTML('beforeend', handleMarkup(item));
  });
  checkBtn = new refsAPI();
  productListApi = data;
  addCheckBasket();
}

function onCardClick(e) {
  if (
    e.target.classList.contains('product_card-item') ||
    e.target !== e.currentTarget
  ) {
    let timerId = setInterval(function () {
      addCheckBasket();
      addCheck();
    }, 1000);

    setTimeout(function () {
      clearInterval(timerId);
    }, 10000);
    if (
      e.target.nodeName === 'use' ||
      e.target.nodeName === 'BUTTON' ||
      e.target.nodeName === 'svg'
    ) {
      const cardId = e.target.closest('.product_card-item').dataset.productid;

      buyProduct(cardId);

      checkBtn[`btn2${cardId}`].style.display = 'none';
      checkBtn[`check1${cardId}`].style.display = 'flex';
      return;
    }

    getProductModal(e, '.product_card-item');

    return;
  }
}
//
function handleMarkup(data) {
  const { category, img, name, popularity, price, size, _id, is10PercentOff } =
    data;

  if (is10PercentOff) {
    return `
  <li class="product_card-item js-object" id=${_id} data-productId="${_id}" >
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product_card-image"></div>
        <h2 class="product_card-name">${name}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${category}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${size}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${popularity}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${price}</p>
         <button id="${_id}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${_id}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${cartIcon}"></use>
                    </svg>
                </button>
                <div id="${_id}" class="check js-object" data-jsname="check1${_id}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${checkedIcon}"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `;
  }

  return `
  <li class="product_card-item js-object" id=${_id} data-productId="${_id}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product_card-image"></div>
        <h2 class="product_card-name">${name}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${category}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${size}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${popularity}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${price}</p>
        
        <button id="${_id}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${_id}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${cartIcon}"></use>
                    </svg>
                </button>
                <div id="${_id}" class="check js-object" data-jsname="check1${_id}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${checkedIcon}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`;
}

function handleViewportChange() {
  let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (viewportWidth >= 1440) {
    filter = {
      limit: 9,
    };
  } else if (viewportWidth < 1440 && viewportWidth > 768) {
    filter = {
      limit: 8,
    };
  } else {
    filter = {
      limit: 6,
    };
  }
}

async function renderCards() {
  handleViewportChange();
  productListApi = await fetchAPI.products(filter);
  productListApi.results.map(item => {
    return document
      .querySelector('.product_card-list')
      .insertAdjacentHTML('beforeend', handleMarkup(item));
  });
  checkBtn = new refsAPI();

  addCheckBasket();
}
function addCheckBasket() {
  let Mycart = localStorageApi.loadCart();

  const productsInCart = [];
  if ('products' in Mycart) {
    Mycart = Mycart.products;
    Mycart.forEach(product => productsInCart.push(product.productId));
  }

  const productsList = [];
  productListApi.results.forEach(product => {
    if (productsInCart.includes(product._id)) {
      checkBtn[`btn2${product._id}`].style.display = 'none';
      checkBtn[`check1${product._id}`].style.display = 'flex';
    } else {
      checkBtn[`check1${product._id}`].style.display = 'none';
      checkBtn[`btn2${product._id}`].style.display = 'flex';
    }
  });
}
export {
  onCardClick,
  renderCards,
  errHide,
  renderSearchedCards,
  addCheckBasket,
  handleViewportChange,
};
