import refsAPI from './js/refs.js';
import { drawDiscount, discountOnClick } from './js/discount.js';


//  RenderProuctList
import { onCardClick, productsList, renderCards } from './js/renderProductList.js';

renderCards()

productsList.addEventListener('click', onCardClick)


//Modal footer

import { form } from './js/footer-modal.js';
import { postEmail } from './js/footer-modal.js';

form.addEventListener('submit', postEmail);


//Popular products imports

import { renderPopular,handleModall } from './js/popularProducts.js';

renderPopular()

 frontEnd.PopularList.addEventListener('click', handleModall)


//draw discount products
drawDiscount();

//get DOM tree
const frontEnd = new refsAPI();

//add event listener for discount products
frontEnd.discountList.addEventListener('click', discountOnClick);


