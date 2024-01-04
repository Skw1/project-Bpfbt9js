import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import '/css/pagination-style.css';
import {
  onCardClick,
  renderCards,
  errHide,
  renderSearchedCards,
} from './renderProductList.js';
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
  };

  const pagination = new Pagination(container, options);
  pagination.on('afterMove', createPagin);
}
export function deletePagination() {
  container.innerHTML = '';
}

async function createPagin(event) {
  const currentPage = event.page;
  var filters = JSON.parse(localStorage.getItem('filters')) || {};
  filters.page = currentPage;
  
  if (inputTextHolder == '') {
    inputTextHolder = null;
  } else {
    inputTextHolder = JSON.parse(localStorage.getItem('keyword'));
  }

  if (inputTextHolder == null) {
    if (
      itemCategory.replace(' ', '_').replace('/', '&').replace(' ', '_') ==
      'Show_all'
    ) {
      filter = { page: filters.page };
    } else {
      filter = {
        category: itemCategory
          .replace(' ', '_')
          .replace('/', '&')
          .replace(' ', '_'),
        page: filters.page,
      };
    }
  } else {
    if (
      itemCategory.replace(' ', '_').replace('/', '&').replace(' ', '_') ==
      'Show_all'
    ) {
      filter = { keyword: inputTextHolder, page: filters.page };
    } else {
      filter = {
        category: itemCategory
          .replace(' ', '_')
          .replace('/', '&')
          .replace(' ', '_'),
        keyword: inputTextHolder,
        page: filters.page,
      };
    }
  }
  console.log(filter);
  const data = await fetchAPI.products(filter);
  return renderSearchedCards(data);
}
