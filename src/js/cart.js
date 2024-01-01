import localStorageApi from './localStorageApi.js';
import { form } from '/js/footer-modal.js';
import { postEmail } from '/js/footer-modal.js';

import { totalCartSum, checkout } from './totalcartsum.js';
import { drawHeaderCartNumber } from './discount.js';
import refsAPI from './refs.js';

drawHeaderCartNumber();
totalCartSum();

const frondEnd = new refsAPI();

frondEnd.buttonCheckout.addEventListener('click', checkout);

form.addEventListener('submit', postEmail);

// delete all cart
frondEnd.deleteAllBtn.addEventListener('click', event => {
  if (event.target.classList.contains('js-delete-all')) {
    localStorageApi.deleteCart();
    totalCartSum();
  }
});

// delete one product
frondEnd.cartContainer.addEventListener('click', event => {
  let cart = localStorageApi.loadCart();

  if (event.target.classList.contains('js-cart-prod-del')) {
    const id = event.target.dataset.productid;
    const prodIdx = cart.products.findIndex(
      product => product.productId === id
    );
    if (prodIdx !== -1) {
      cart.products.splice(prodIdx, 1);
    }

    localStorageApi.saveCart(cart);
    totalCartSum();
  }
});
