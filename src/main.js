import refsAPI from './js/refs.js';
const frontEnd = new refsAPI();
import {drawDiscount, discountOnClick, drawHeaderCartNumber} from './js/discount.js';

import { renderPopular,handleModall } from './js/popularProducts.js';
import { form } from './js/footer-modal.js';
import { postEmail } from './js/footer-modal.js';
import {onCardClick, renderCards, renderSearchedCards, productsList} from './js/renderProductList.js'


//  RenderProuctList

renderCards()

productsList.addEventListener('click', onCardClick)

//Modal footer
form.addEventListener('submit', postEmail);



//Popular products imports

import { renderPopular, handleModall } from './js/popularProducts.js';

renderPopular();

//draw discount products
drawDiscount();
drawHeaderCartNumber();

//get DOM tree
// const frontEnd = new refsAPI();

//add event listener for discount products
frontEnd.discountList.addEventListener('click', discountOnClick);

