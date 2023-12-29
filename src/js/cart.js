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
  console.log(event.target.classList.contains('js-delete-all'));
  if (event.target.classList.contains('js-delete-all')) {
    localStorageApi.deleteCart();
    totalCartSum();
  }
});
