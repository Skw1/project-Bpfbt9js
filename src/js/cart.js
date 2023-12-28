

import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import { icon } from './img/icons.svg';

async function drawProductCart() {
  let cart = localStorageApi.loadCart();
  console.log(cart);

  const productsInCart = [];
  if ('products' in cart) {
    cart.products.forEach(({ productId }) =>
      getProductApi(productId).then(resp => productsInCart.push(resp))
    );
  }
  // console.log(productsInCart);

  const cartContainer = document.querySelector(
    '.cart-products-order-container'
  );
  cartContainer.innerHTML = cartMarkup(productsInCart);
}

async function getProductApi(id) {
  const product = await fetchAPI.product(id);
  return product;
}

function cartMarkup(products) {
  return products
    .map(({ _id, name, img, category, price, size }) => {
      return `
             <div class="cart-product-container">
            <div class="cart-delete-all">
            <button type="button" class="cart-delete-button"> Delete All
                <span class="cart-close-icon">
                    <svg class="cart-icon-close" width="24" height="24">
                    <use href="${icon}#close-icon"></use>
                    </svg>
                </span>
            </button>
            </div>

            <ul class="cart-products-list">
            <li class="cart-product" data-productId="${_id}">
            <div class="cart-product-img">
              <img class="card-img"
                src="${img}"
                alt="${name}"
              />
            </div>

            <div class="cart-product-card">
            <div class="cart-product-name-container">
              <h3 class="cart-product-name">${name}</h3>
              <button data-productId="${_id}" type="button" class="cart-product-delete-btn">
              <svg class="cart-icon-close" width="18" height="18">
                    <use href="${icon}#close-icon"></use>
                    </svg>
              </button>
            </div>

            <div class="cart-product-info">
                  <p class="cart-category-title">
                    Category:
                    <span class="cart-category-name">${category}</span>
                  </p>
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${size}</span>
                  </p>
                  <p class="cart-product-price">$${price}</p>
            </div>
          </li>
          </ul>
          </div>

          <div class="cart-order-container">
            <h2 class="order-title">Your order</h2>

          <div class="order-container">
            <p class="order-text">Total</p>
            <p class="order-sum-text">Sum:</p>
            <p class="order-total-sum">${price.toFixed(2)}</p>
          </div>

          <div class="order-input-checkout">
            <label class="order-label-chekout" for="email"></label>
            <span class="order-mail-span">Mail:</span>
            <input
                class="order-email"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
            />
            <button class="order-checkout-button" type="submit">Checkout</button>
          </div>

          </div>`;
    })
    .join('');
}

drawProductCart();

document
  .querySelector('.cart-product-delete-btn')
  .addEventListener('click', event => {
    const id = event.target.dataset.productId;
    let cart = localStorageApi.loadCart();
    if ('products' in cart) {
      const resalt = cart.products.findIndex(
        product => product.productId === id
      );
      if (resalt !== -1) {
        cart.products.splice(resalt, 1);
      }
    }
    localStorageApi.saveCart(cart);
  });
