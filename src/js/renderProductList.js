import { FetchProducts } from "./fetchApi";
import Notiflix from 'notiflix';

const categoriesEl = document.querySelector('.js-category');
const productsList = document.querySelector('.card-container');
const searchFormEl = document.querySelector('.js-search-form');

const fetchProducts = new FetchProducts();

categoriesEl.addEventListener('change', onSelect);
searchFormEl.addEventListener('submit', onSearch);

function onSearch(e) {
  e.preventDefault();
  productsList.innerHTML = '';

  fetchProducts.inputQuery = e.target.elements.searchQuery.value.trim();

  fetchProducts.getProductsBySearch()
    .then(({ results }) => {

      if (results.length === 0) {
         searchFormEl.reset();
        
        window.alert('Oops test')
      }
      
      return results.map(item => {
     
    productsList.insertAdjacentHTML('beforeend', handleMarkup(item))
  })})
  .catch(err => {
      if (!err) {
        return
      }
      window.alert('Oops test')
    });
}

function handleMarkup(prop) {
  const { category, img, name, popularity, price, size } = prop;
  return `
      <li>
    <img src="${img}" alt="${name}">
    <h2>${name}</h2>
    <div>
        <p>Category: ${category}</p>
        <p>Size: ${size}</p>
        <p>Popularity: ${popularity}</p>
      </div>
      <p>$${price}</p>
  </li>
  `
}

function onSelect(e) {
  
  fetchProducts.query = e.target.value;
  productsList.innerHTML = '';
  
  fetchProducts.getProductsByCategory()
    .then(({ results }) => results.map(item => {
      productsList.insertAdjacentHTML('beforeend', handleMarkup(item))
    }))
    .catch(err => {
      if (!err) {
        return
      }
      window.alert('Oops test')
    });
}
    
  fetchProducts.getCategories()
  .then(data =>
  data.map(item => {
    
    const categoriesMurkup = `<option value="${item}">${item}</option>`;
    return categoriesEl.insertAdjacentHTML('beforeend', categoriesMurkup)
  }))
   .catch(err => {
    if (!err) {
      return
    }
   window.alert('Oops test')
  })

fetchProducts.getProducts()
  .then(({ results }) => {
    results.map(item => {
      
      productsList.insertAdjacentHTML('beforeend', handleMarkup(item))
    })
  })
   .catch(err => {
    if (!err) {
      return
    }
   window.alert('Oops test')
  });

