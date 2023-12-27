
import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';

import discountIcon from '../img/icons.svg#discount-icon';
import cartIcon from '../img/icons.svg#discount-cart';
import checkedIcon from '../img/icons.svg#discount-checked';

const productsList = document.querySelector('.product-card-list');

const productList = await fetchAPI.products();

productsList.addEventListener('click', onCardClick);

function onCardClick(e) {
  const cardId = e.target.closest('.product-card-item').id;

  if (e.target.classList.contains('product-card-item') || e.target !== e.currentTarget) {
    if (e.target.nodeName === "use" || e.target.nodeName === "BUTTON" || e.target.nodeName === "svg") {
      console.log('Buy prod', cardId)
     
   return
    }
    
    console.log('Open modal', cardId)
    
    return
  }
  
}
function handleMarkup(data) {
  const { category, img, name, popularity, price, size, _id, is10PercentOff } = data;
  
  const markup = `
  <li class="product-card-item discount-list-item" id=${_id} data-discount="${is10PercentOff}">

  <svg class="discount-icon" id=${_id}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product-card-image"></div>
        <h2 calss="product-card-name">${name}</h2>
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

  return markup;
  
};

function renderCards(arr) {
  arr.map(item => {
    return productsList.insertAdjacentHTML('beforeend', handleMarkup(item));
  }
  )
};

renderCards(productList.results);

function shownDiscIcon(arr) {
  arr.map(el => {
    const icon = document.querySelector('.discount-icon')
    
    console.log(icon)
      
    
    
  })
};
shownDiscIcon(productList.results)



function renderSearchedCards(category, search) {
  productsList.innerHTML = '';

  if (category) {
    return category.map(item => productsList.insertAdjacentHTML('beforeend', handleMarkup(item)))
  }

  if (search) {
    if (search.length === 0) {
        window.alert('Oops test')
      }
    return search.map(item => productsList.insertAdjacentHTML('beforeend', handleMarkup(item)))
  }
};




