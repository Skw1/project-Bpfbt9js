import refsAPI from './js/refs.js';
import { drawDiscount, discountOnClick } from './js/discount.js';
import {checkAndFillFormFields, createDropdownList, cardsCreate, inputPush, toggleDropdown,  buttonCategory, inputText, buttonForm} from './js/filter.js';
import { renderSearchedCards } from './js/renderProductList.js';

// Test RenderProuctList


//draw discount products
drawDiscount();
createDropdownList();
checkAndFillFormFields();
renderSearchedCards();
//get DOM tree
const frontEnd = new refsAPI();

//add event listener for discount products
frontEnd.discountList.addEventListener('click', discountOnClick);

// filter
buttonCategory.addEventListener('click', toggleDropdown)
inputText.addEventListener('input', inputPush)
buttonForm.addEventListener('click', cardsCreate)


