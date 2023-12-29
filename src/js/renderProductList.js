import { buyProduct, setCheckedIcon } from './discount.js';
import fetchAPI from './fetchApi.js';
import { getProductModal } from './modalProduct.js';

const productsList = document.querySelector('.product_card-list');

function onCardClick(e) {
  const cardId = e.target.closest('.product_card-item').dataset.productid;
  
  if (e.target.classList.contains('product_card-item') || e.target !== e.currentTarget) {
    if (e.target.nodeName === "use" || e.target.nodeName === "BUTTON" || e.target.nodeName === "svg") {
  
      console.log(cardId)
      buyProduct(cardId)
      setCheckedIcon(cardId, 'shoppingCartIcon')
  
      return;
    }
  
    getProductModal(e, '.product_card-item');
    return
  }
  
}
function handleMarkup(data) {
  const { category, img, name, popularity, price, size, _id, is10PercentOff } = data;

  if (is10PercentOff) {
    return `
  <li class="product_card-item discount-list-item" id=${_id} data-productId="${_id}" >

  <svg class="discount-icon" id=${_id}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
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
         <button id="${_id}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${_id}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${_id}" class="check-btn js-object" data-jsname="check${_id}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `
  }
  
  return `
  <li class="product_card-item discount-list-item" id=${_id} data-productId="${_id}" >

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
        
        <button id="${_id}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${_id}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${_id}" class="check-btn js-object" data-jsname="check${_id}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `;
  
};

async function renderCards() {
  const productListApi = await fetchAPI.products();

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

