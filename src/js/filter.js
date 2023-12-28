import fetchAPI from './js/fetchApi.js';



const dropdownMenu = document.querySelector('#dropdownMenu');
const inputText = document.querySelector('#input-filter')
const buttonForm = document.querySelector('#filterButt')
const LOCAL_SAVE_INPUT = "keyword";
const LOCAL_SAVE_CATEGORY = "category";
const categoryContent = document.querySelector('.category-content')

inputText.addEventListener('input', inputPush)
buttonForm.addEventListener('click', cardsCreate)

let inputTextHolder = JSON.parse(localStorage.getItem(LOCAL_SAVE_INPUT));
let itemCategory = JSON.parse(localStorage.getItem(LOCAL_SAVE_CATEGORY));


// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const data = ['Option 1', 'Option 2', 'Option 3', 'Option 3'];

function checkAndFillFormFields() {
    if (inputTextHolder || itemCategory) {
      inputText.value = inputTextHolder;
      categoryContent.textContent = itemCategory;
    }
  }


async function createDropdownList() {

    const data = await fetchAPI.categories();

    if(itemCategory !== null){
        categoryContent.textContent = itemCategory;
   }
   else{
        categoryContent.textContent = "Categories"
   }

    dropdownMenu.innerHTML = '';

    

    data.forEach((item) => {
        const listItem = document.createElement('div');
        listItem.className = 'dropdown-item';
        listItem.textContent = item;
        listItem.onclick = function () {
            itemCategory = item;
            localStorage.setItem(LOCAL_SAVE_CATEGORY, JSON.stringify(itemCategory));
            toggleDropdown();
        };
        dropdownMenu.appendChild(listItem);
    });
}



function toggleDropdown() {

    dropdownMenu.style.display = (dropdownMenu.style.display === 'flex') ? 'none' : 'flex';
    
    if(itemCategory !== null){
        categoryContent.textContent = itemCategory;
   }
   else{
        categoryContent.textContent = "Categories"
   }

    setTimeout(function () {
        dropdownMenu.style.opacity = (dropdownMenu.style.opacity === '1') ? '0' : '1';
    }, 10);
}

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function inputPush(e) {
    const value = e.target.value;
    if(value){
        localStorage.setItem(LOCAL_SAVE_INPUT, JSON.stringify(value));
    }
    else{
        localStorage.setItem(LOCAL_SAVE_INPUT, JSON.stringify(null));
    }
    
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function cardsCreate (event) {
    event.preventDefault();
    if(inputTextHolder == ""){
        inputTextHolder = null;
    }
    else{
        inputTextHolder = JSON.parse(localStorage.getItem(LOCAL_SAVE_INPUT));
    }

    console.log(inputTextHolder, itemCategory)
}

checkAndFillFormFields();
createDropdownList();