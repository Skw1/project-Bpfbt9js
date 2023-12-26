import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import refsAPI from './refs.js';
//product icons
const DISCOUNTCART = './img/icons.svg#discount-cart';
const DISCOUNTCECKED = './img/icons.svg#discount-checked';

// function to draw discount products section
async function drawDiscount() {
  // number of products to draw
  const DISCOUNTNUMBER = 2;
  // get all nodes
  const frontEnd = new refsAPI();
  //clear
  frontEnd.discountList.innerHTML = '';
  //get list of discount products
  const discountProducts = await fetchAPI.discount();

  //array of products to draw
  const productsToDraw = [];
  let i = 0;
  //do we have enough products to draw?
  if (discountProducts.length < DISCOUNTNUMBER) {
    i = discountProducts.length;
  } else {
    i = DISCOUNTNUMBER;
  }
  //choose random products and add to array to be drawn
  for (; i > 0; i--) {
    let randomNumber = Math.floor(Math.random() * discountProducts.length);
    productsToDraw.push(discountProducts[randomNumber]);
    discountProducts.splice(randomNumber, 1); //remove used products
  }

  //read saved Cart
  let cart = localStorageApi.loadCart();
  //get saved products id
  const productsInCart = [];
  if ('products' in cart) {
    cart = cart.products;
    cart.forEach(product => productsInCart.push(product.productId));
  }
  //draw discount products
  const productsList = [];
  productsToDraw.forEach(product => {
    //chose icon
    let icon = DISCOUNTCART;
    if (productsInCart.includes(product._id)) {
      icon = DISCOUNTCECKED;
    }
    productsList.push(`
        <li class="discount-list-item discount-show" data-productId="${product._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${product._id}">
              <use href="./img/icons.svg#discount-icon" class="discount-show"  data-productId="${product._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${product._id}">
              <img
                class="discount-image discount-show"
                src="${product.img}"
                width="114"
                height="114"
                alt="${product.name}"
                data-productId="${product._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${product._id}">
              <p class="discount-title discount-show"  data-productId="${product._id}">${product.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${product._id}">
                <span class="discount-price discount-show"  data-productId="${product._id}">$${product.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${product._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${product._id}">
                    <use href="${icon}" class="js-object discount-buy" data-jsname="discountIcon${product._id}" data-productId="${product._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `);
  });
  frontEnd.discountList.insertAdjacentHTML('beforeend', productsList.join(''));
}

function buyProduct(id) {
  //read saved Cart
  let cart = localStorageApi.loadCart();
  //check if product in cart
  let notInCart = true;
  if ('products' in cart) {
    cart.products.forEach(product => {
      if (product.productId === id) {
        notInCart = false;
        return;
      }
    });
  }
  //if not in cart then add
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
    //save cart and change icon
    localStorageApi.saveCart(cart);
  }
}

function changeCartIcon(id, prefix) {
  const frontEnd = new refsAPI();
  if (frontEnd[`${prefix}${id}`].href.baseVal === DISCOUNTCART) {
    frontEnd[`${prefix}${id}`].href.baseVal = DISCOUNTCECKED;
  }
}

function discountOnClick(event) {
  if (event.target.classList.contains('discount-buy')) {
    buyProduct(event.target.dataset.productid);
    changeCartIcon(event.target.dataset.productid, 'discountIcon');
  } else if (event.target.classList.contains('discount-show')) {
    // open modal window with product info
  }
}

export { drawDiscount, discountOnClick, buyProduct, changeCartIcon };
