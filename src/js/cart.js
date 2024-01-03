import localStorageApi from './localStorageApi.js';
import { form } from '/js/footer-modal.js';
import { postEmail } from '/js/footer-modal.js';

import { totalCartSum, checkout } from './totalcartsum.js';
import { drawHeaderCartNumber } from './discount.js';
import refsAPI from './refs.js';

drawHeaderCartNumber();
totalCartSum();

const frondEnd = new refsAPI();
const CART = document.querySelector('.cart-amount');
frondEnd.buttonCheckout.addEventListener('click', checkout);

form.addEventListener('submit', postEmail);

// delete all cart
frondEnd.deleteAllBtn.addEventListener('click', event => {
  if (event.target.classList.contains('js-delete-all')) {
    localStorageApi.deleteCart();
    frondEnd.deleteAllBtn.style.display = 'none';
    frondEnd.cartEmptyContainer.style.display = 'flex';
    CART.textContent = 'CART (0)';
    frondEnd.bigCartNumber.textContent = 'CART (0)';
  }
});

// delete one product
frondEnd.cartContainer.addEventListener('click', event => {
  if (!event.target.classList.contains('js-cart-prod-del')) {
    return;
  }
  let cart = localStorageApi.loadCart();

  const li = event.target.closest('.cart-product');
  console.log(li);
  const id = event.target.dataset.productid;
  console.log(id);
  const prodIdx = cart.products.findIndex(product => product.productId === id);
  if (prodIdx !== -1) {
    cart.products.splice(prodIdx, 1);
    localStorageApi.saveCart(cart);
    li.style.display = 'none';
    frondEnd.bigCartNumber.textContent = `CART (${cart.products.length})`;
  }
  if (!cart.products.length) {
    frondEnd.deleteAllBtn.style.display = 'none';
    frondEnd.cartEmptyContainer.style.display = 'flex';
  }
});
