import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import refsAPI from './refs.js';
import { addCheckBasket } from './renderProductList.js';
import { getProductModal } from './modalProduct.js';
import { buyProduct } from './discount.js';
import cartIcon from '../img/icons.svg#discount-cart';
import checkedIcon from '../img/icons.svg#discount-checked';
import arrow from '../img/icons.svg#arrow'
let frontEndPopular;
let popularProducts;
let product_Id;
let checkBtn;

async function renderPopular() {
  frontEndPopular = new refsAPI();
  frontEndPopular.PopularList.innerHTML = '';
  popularProducts = await fetchAPI.popular();
  render();
}

function addProduct(event) {
  const product = event.target.closest('.cards-item');
  product_Id = product.dataset.productid;
  checkBtn[`btn1${product_Id}`].style.display = 'none';
  checkBtn[`check${product_Id}`].style.display = 'flex';
  buyProduct(product_Id);
}

function handleModall(event) {
  let timerId = setInterval(function () {
    addCheck();
    addCheckBasket();
  }, 1000);
  setTimeout(function () {
    clearInterval(timerId);
  }, 10000);

  if (event.target.classList.contains('js-btn')) {
    addProduct(event);
    return;
  }
  if (!event.target.classList.contains('js-btn')) {
    getProductModal(event, '.cards-item');
    return;
  }
}

export function createMarcup(arr) {
  return arr
    .map(
      ({ _id, img, name, category, size, popularity }) => ` 
    <li class ="cards-item" data-productid="${_id}" >
        <div id ="${_id}" class="photo-card">
                    <img class = "cards__image" src="${img}" alt="${name}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${name}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${category}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${size}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${popularity}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${_id}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${_id}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="${cartIcon}"></use>
                    </svg>
                </button>
                <div id="${_id}" class="check-btn js-object js-btn" data-jsname="check${_id}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="${checkedIcon}"></use>
                    </svg></div>
               </li>    
                  
`
    )
    .join('');
}

async function render() {
  try {
    const data = popularProducts;
    frontEndPopular.PopularList.insertAdjacentHTML(
      'beforeend',
      createMarcup(data)
    );
    checkBtn = new refsAPI();
    addCheck();
    return await data;
  } catch (error) {
    console.log(error.message);
  }
}
function addCheck() {
  let Mycart = localStorageApi.loadCart();
  const productsInCart = [];
  if ('products' in Mycart) {
    Mycart = Mycart.products;
    Mycart.forEach(product => productsInCart.push(product.productId));
  }
  const productsList = [];
  popularProducts.forEach(product => {
    if (productsInCart.includes(product._id)) {
      checkBtn[`btn1${product._id}`].style.display = 'none';
      checkBtn[`check${product._id}`].style.display = 'flex';
    } else {
      checkBtn[`check${product._id}`].style.display = 'none';
      checkBtn[`btn1${product._id}`].style.display = 'flex';
    }
  });
}
function createScrollButton() {
  let button;
  
  window.onscroll = function() {
      if (!button) {
          button = document.createElement("button");
          button.innerHTML = button.innerHTML = `<svg class="" width="16" height="16"><use href="${arrow}"</use></svg>`;
          button.classList.add("scrollBtn");
          document.body.appendChild(button);

          button.style.animation = "flashing 1s infinite"; 
          button.onclick = function() {
              document.documentElement.scrollTop = 0;
              button.style.display = "none";
          };
      }

      window.onscroll = function() {
          if (document.documentElement.scrollTop === 0) {
              button.style.display = "none";
          } else {
              button.style.display = "flex";
          }

          var pageHeight = document.documentElement.scrollHeight;
          var windowHeight = window.innerHeight;
          var scrollPosition = document.documentElement.scrollTop;

          if (scrollPosition > (pageHeight / 6 - windowHeight / 6)) {
              button.style.visibility = "visible";
          } else {
              button.style.visibility = "hidden";
          }
      };
  };
}
export { renderPopular, handleModall, addCheck, createScrollButton };
