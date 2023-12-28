import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import refsAPI from './refs.js';

import { getProductModal } from './modalProduct.js';
import { buyProduct } from './discount.js';
let frontEndPopular;
let popularProducts;
let product_Id;
let checkBtn;

async function renderPopular() {
  frontEndPopular = new refsAPI();
  frontEndPopular.PopularList.innerHTML = '';
  popularProducts = await fetchAPI.popular();
  // console.log("popularProducts",popularProducts);
  // ----------------
  render();
}
function addProduct(event) {
  const product = event.target.closest('.cards-item');
  // console.log(product);
  product_Id = product.dataset.id;
  checkBtn[`btn1${product_Id}`].style.display = 'none';
  checkBtn[`check${product_Id}`].style.display = 'flex';
  buyProduct(product_Id);

  //   console.log(product_Id);
}
// -----------------------------------------------------------------------
function handleModall(event) {
  if (event.target.classList.contains('js-btn')) {
    addProduct(event);
    return;
  }
  if (!event.target.classList.contains('js-btn')) {
    // const product = event.target.closest('.cards-item');
    // product_Id = product.dataset.id;
    // console.log(product_Id);
    getProductModal(event, '.cards-item');

    // alert();
    return;
  }
}
//  ================================================
// localStorage.clear()
// //   ---------------------------------------------------------
export function createMarcup(arr) {
  return arr
    .map(
      ({ _id, img, name, category, size, popularity }) => ` 
    <li class ="cards-item" data-id="${_id}" >
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
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${_id}" class="check-btn js-object" data-jsname="check${_id}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`
    )
    .join('');
}
// // ---------------------------------------------------------------------
async function render() {
  try {
    const data = popularProducts;
    //   console.log('render', data);
    frontEndPopular.PopularList.insertAdjacentHTML(
      'beforeend',
      createMarcup(data)
    );
    checkBtn = new refsAPI();
    // console.log(checkBtn);
    let Mycart = localStorageApi.loadCart();
    // console.log("Mycart",Mycart.products);
    //get saved products id
    const productsInCart = [];
    if ('products' in Mycart) {
      Mycart = Mycart.products;
      Mycart.forEach(product => productsInCart.push(product.productId));
    }
    //draw discount products
    const productsList = [];
    popularProducts.forEach(product => {
      if (productsInCart.includes(product._id)) {
        checkBtn[`btn1${product._id}`].style.display = 'none';
        checkBtn[`check${product._id}`].style.display = 'flex';
      }
    });
    return await data;
  } catch (error) {
    console.log(error.message);
  }
}
//   ---------------------------------------------------------
export { renderPopular, handleModall };
// ----------------------------для main.js---------------
//         import { renderPopular,handleModall } from './js/popularProducts.js';
// renderPopular()
//  frontEnd.PopularList.addEventListener('click', handleModall)

