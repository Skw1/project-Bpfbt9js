import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import refsAPI from './refs.js';

// function to draw discount products section
async function drawDiscount() {
  // number of products to draw
  const DISCOUNTNUMBER = 2;
  //product icons
  const DISCOUNTCART = '../img/icons.svg#discount-cart';
  const DISCOUNTCECKED = '../img/icons.svg#discount-checked';
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
        <li class="discount-list-item" data-product-id="${product._id}" data-action-type="showProduct">
            <svg width="60" height="60" class="discount-icon">
              <use href="../img/icons.svg#discount-icon"></use>
            </svg>
            <div class="discount-image-box">
              <img
                class="discount-image"
                src="${product.img}"
                width="114"
                height="114"
                alt="${product.name}"
              />
            </div>
            <div class="discount-description">
              <p class="discount-title">${product.name}</p>
              <div class="discount-description-price">
                <span class="discount-price">$${product.price}</span>
                <div class="discount-icon-box" data-product-id="${product._id}" data-action-type="buyProduct">
                  <svg width="18" height="18" class="discount-cart">
                    <use href="${icon}"></use>
                  </svg>
                </div>
              </div>
            </div>
         </li>
        `);
  });
  frontEnd.discountList.insertAdjacentHTML('beforeend', productsList.join(''));
}

export { drawDiscount };
