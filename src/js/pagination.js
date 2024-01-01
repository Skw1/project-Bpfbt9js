import  Pagination  from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import {onCardClick, renderCards, errHide, renderSearchedCards,} from './renderProductList.js'
import fetchAPI from './fetchApi.js';


let inputTextHolder = JSON.parse(localStorage.getItem('keyword'));
let itemCategory = JSON.parse(localStorage.getItem('category'));
let filter = {};



const container = document.getElementById('pagination');
export function addPagination(totalItems, itemsPerPage, currentPage) {
  const options = {
    totalItems: totalItems,
    itemsPerPage: itemsPerPage,
    visiblePages: 5,
    page: currentPage,
    centerAlign: true,
    // template: {
    //   page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    //   currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    //   moveButton: (type) => {
    //     const moveButtonTemplates = {
    //       first: '<a href="#" class="tui-page-btn tui-first"><<</a>',
    //       last: '<a href="#" class="tui-page-btn tui-last">>></a>',
    //       prev: '<a href="#" class="tui-page-btn tui-prev"><</a>',
    //       next: '<a href="#" class="tui-page-btn tui-next">></a>'
    //     };
    //     return moveButtonTemplates[type];
    //   },
    //   disabledMoveButton: (type) => {
    //     const disabledMoveButtonTemplates = {
    //       first: '<span class="tui-page-btn tui-first tui-is-disabled"><<</span>',
    //       last: '<span class="tui-page-btn tui-last tui-is-disabled">>></span>',
    //       prev: '<span class="tui-page-btn tui-prev tui-is-disabled"><</span>',
    //       next: '<span class="tui-page-btn tui-next tui-is-disabled">></span>'
    //     };
    //     return disabledMoveButtonTemplates[type];
    //   },
    //   moreButton: '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">...</a>'
    // }
  };

  const pagination = new Pagination(container, options);
  pagination.on('afterMove', createPagin)


}
export function deletePagination() {
  container.innerHTML = '';
}

async function createPagin (event) {
  const currentPage = event.page;
  var filters = JSON.parse(localStorage.getItem('filters')) || {};
  filters.page = currentPage;
  //  filter = {
  //   keyword : JSON.parse(localStorage.getItem('keyword')),
  //   category : JSON.parse(localStorage.getItem('category').replace(' ', '_').replace('/', '&').replace(' ', '_')),
  //   page: filters.page
  //   }
  if (inputTextHolder == "") {
    inputTextHolder = null;
} else {
    inputTextHolder = JSON.parse(localStorage.getItem('keyword'));
}

if(inputTextHolder == null){
    if(itemCategory.replace(' ', '_').replace('/', '&').replace(' ', '_') == 'Show_all'){
        filter = {page: filters.page};
    }
    else{
        filter = {category: itemCategory.replace(' ', '_').replace('/', '&').replace(' ', '_'), page: filters.page}
    }
    
}
else{
    if(itemCategory.replace(' ', '_').replace('/', '&').replace(' ', '_') == 'Show_all'){
        filter = {keyword: inputTextHolder, page: filters.page};
    }
    else{
        filter = {category: itemCategory.replace(' ', '_').replace('/', '&').replace(' ', '_'), keyword: inputTextHolder, page: filters.page}
    }
}
    console.log(filter)
  const data = await fetchAPI.products(filter)
  return renderSearchedCards(data);

};