import { fetchCategories, FetchProducts } from "./fetchApi";

const categoriesEl = document.querySelector('.js-category')
const productsList = document.querySelector('.card-container')

const fetchProducts = new FetchProducts();

categoriesEl.addEventListener('change', onSelect);

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
}

fetchCategories().then(data => {
  data.map(item => {
    
    const categoriesMurkup = `<option value="${item}">${item}</option>`;
    return categoriesEl.insertAdjacentHTML('beforeend', categoriesMurkup)
  })
});

fetchProducts.getProducts()
  .then(({results}) => {
    results.map(item => {
      
      productsList.insertAdjacentHTML('beforeend', handleMarkup(item))
    })
  })

