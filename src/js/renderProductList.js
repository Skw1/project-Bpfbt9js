import fetchAPI from './fetchApi.js';

import { getProductModal } from './modalProduct.js';


const productsList = document.querySelector('.product-card-list');
const productListApi = await fetchAPI.products();

function onCardClick(e) {
  // const cardId = e.target.closest('.product-card-item').id;

  if (e.target.classList.contains('product-card-item') || e.target !== e.currentTarget) {
    if (e.target.nodeName === "use" || e.target.nodeName === "BUTTON" || e.target.nodeName === "svg") {
  
      console.log('add prod')
     
   return;
    }
  
    getProductModal(e, '.product-card-item');
    return
  }
  
}
function handleMarkup(data) {
  const { category, img, name, popularity, price, size, _id, is10PercentOff } = data;

  if (is10PercentOff) {
    return `
  <li class="product-card-item discount-list-item" id=${_id} data-productId="${_id}" >

  <svg class="discount-icon" id=${_id}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product-card-image"></div>
        <h2 class="product-card-name">${name}</h2>
        <div class="product-card-info">
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
        <div class="product-card-bottom">
        <p class="product-curd-price">$${price}</p>
        <button class="card_buy-btn">
          <svg class="card_buy-logo-icon">
                <use href="./img/icons.svg#shopping-cart-icon"></use>
          </svg>
        </button>
        </div>
        </div>
    </li>
  `
  }
  
  return `
  <li class="product-card-item discount-list-item" id=${_id} data-productId="${_id}" >

       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product-card-image"></div>
        <h2 class="product-card-name">${name}</h2>
        <div class="product-card-info">
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
        <div class="product-card-bottom">
        <p class="product-curd-price">$${price}</p>
        <button class="card_buy-btn">
          <svg class="card_buy-logo-icon">
                <use href="./img/icons.svg#shopping-cart-icon"></use>
          </svg>
        </button>
        </div>
        </div>
    </li>
  `;
  
};

function renderCards() {
  productListApi.results.map(item => {
    return productsList.insertAdjacentHTML('beforeend', handleMarkup(item));
  }
  )
};


function renderSearchedCards(category, search) {
  productsList.innerHTML = '';

  if (category) {
    return category.map(item => productsList.insertAdjacentHTML('beforeend', handleMarkup(item)));
  }

  if (search) {
    if (search.length === 0) {
        window.alert('Oops something went wrong')
      }
    return search.map(item => productsList.insertAdjacentHTML('beforeend', handleMarkup(item)));
  }
};

export{onCardClick, renderCards, renderSearchedCards, productsList};

