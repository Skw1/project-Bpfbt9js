
import refsAPI from './js/refs.js';
const frontEnd = new refsAPI();

import {drawDiscount, discountOnClick, drawHeaderCartNumber} from './js/discount.js';
import { renderPopular,handleModall } from './js/popularProducts.js';

import { form } from './js/footer-modal.js';
import { postEmail } from './js/footer-modal.js';
import {onCardClick, renderCards, renderSearchedCards} from './js/renderProductList.js';
import {checkAndFillFormFields, createDropdownList, cardsCreate, inputPush, toggleDropdown,  buttonCategory, inputText, buttonForm} from './js/filter.js';

//get DOM tree
// const frontEnd = new refsAPI();


// Draw Header Cart Number
drawHeaderCartNumber();


// RenderProuctList
renderCards();


// Add event listener for  Product Cards
document.querySelector('.product_card-list').addEventListener('click', onCardClick);


// Draw Popular products 
renderPopular();


// Add event listener for popular products
frontEnd.PopularList.addEventListener('click', handleModall);


// Draw discount products
drawDiscount();


// Create DropDown List
createDropdownList();


// Check Fields
checkAndFillFormFields();


// Render Searched Cards
renderSearchedCards();


// Add event listener for discount products
frontEnd.discountList.addEventListener('click', discountOnClick);

// Filter
buttonCategory.addEventListener('click', toggleDropdown);
inputText.addEventListener('input', inputPush);
buttonForm.addEventListener('click', cardsCreate);

// Modal footer
form.addEventListener('submit', postEmail);



