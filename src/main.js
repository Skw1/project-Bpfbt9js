import refsAPI from './js/refs.js';
import {drawDiscount, discountOnClick, drawHeaderCartNumber} from './js/discount.js';
import { renderPopular,handleModall } from './js/popularProducts.js';
import { form } from './js/footer-modal.js';
import { postEmail } from './js/footer-modal.js';
import {onCardClick, renderCards, renderSearchedCards, productsList} from './js/renderProductList.js';


//get DOM tree
const frontEnd = new refsAPI();


// Draw Header Cart Number

drawHeaderCartNumber();


// RenderProuctList

renderCards()


// Add event listener for  Product Cards

productsList.addEventListener('click', onCardClick)


// Draw Popular products 

renderPopular();


// Add event listener for popular products

frontEnd.PopularList.addEventListener('click', handleModall)


// Draw discount products

drawDiscount();


// Add event listener for discount products

frontEnd.discountList.addEventListener('click', discountOnClick);

// Modal footer

form.addEventListener('submit', postEmail);





