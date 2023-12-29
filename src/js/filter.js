import fetchAPI from './fetchApi.js';
import {onCardClick, renderCards, renderSearchedCards, productsList} from './renderProductList.js'

const dropdownMenu = document.querySelector('#dropdownMenu');
const inputText = document.querySelector('#input-filter')
const buttonForm = document.querySelector('#filterButt')
const categoryContent = document.querySelector('.category-content')
const buttonCategory = document.querySelector('.dropdown-toggle')
const LOCAL_SAVE_INPUT = "keyword";
const LOCAL_SAVE_CATEGORY = "category";

let inputTextHolder = JSON.parse(localStorage.getItem(LOCAL_SAVE_INPUT));
let itemCategory = JSON.parse(localStorage.getItem(LOCAL_SAVE_CATEGORY));

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function checkAndFillFormFields() {
    if (inputTextHolder || itemCategory) {
      inputText.value = inputTextHolder;
      categoryContent.textContent = itemCategory;
    }
}

async function createDropdownList() {
    const data = await fetchAPI.categories();

   

    let outputArray = data.map(item => {
    return item.replace('_', ' ').replace('&', '/').replace('_', ' ');
    });


   

    if (itemCategory !== null) {
        categoryContent.textContent = itemCategory;
    } else {
        categoryContent.textContent = "Categories"
    }

    dropdownMenu.innerHTML = '';

    outputArray.forEach(async (item) => {
        const listItem = document.createElement('div');
        listItem.className = 'dropdown-item';
        listItem.textContent = item;
        listItem.onclick = async function () {
            itemCategory = item;
            localStorage.setItem(LOCAL_SAVE_CATEGORY, JSON.stringify(itemCategory));
            toggleDropdown();
        };
        dropdownMenu.appendChild(listItem);
    });
}

async function toggleDropdown() {
    dropdownMenu.style.display = (dropdownMenu.style.display === 'flex') ? 'none' : 'flex';

    if (itemCategory !== null) {
        categoryContent.textContent = itemCategory;
    } else {
        categoryContent.textContent = "Categories"
    }

    setTimeout(function () {
        dropdownMenu.style.opacity = (dropdownMenu.style.opacity === '1') ? '0' : '1';
    }, 10);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function inputPush(e) {
    const value = e.target.value;
    if (value) {
        localStorage.setItem(LOCAL_SAVE_INPUT, JSON.stringify(value));
    } else {
        localStorage.setItem(LOCAL_SAVE_INPUT, JSON.stringify(null));
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

async function cardsCreate(event) {
    event.preventDefault();
    if (inputTextHolder == "") {
        inputTextHolder = null;
    } else {
        inputTextHolder = JSON.parse(localStorage.getItem(LOCAL_SAVE_INPUT));
    }
    console.log(itemCategory.replace(' ', '_').replace('/', '&').replace(' ', '_'), inputTextHolder);
}


checkAndFillFormFields();
createDropdownList();




export {
    checkAndFillFormFields,
    createDropdownList,
    cardsCreate,
    inputPush,
    toggleDropdown,
    buttonCategory,
    inputText,
    buttonForm
}
