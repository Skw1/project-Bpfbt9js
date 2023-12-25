import { FetchProducts } from "./fetchApi";
import '../css/cards.css'


const productsList = document.querySelector('.product-card-list');
const fetchProducts = new FetchProducts();

function handleMarkup(prop) {
  const { category, img, name, popularity, price, size } = prop;
  return `
       <li class="product-card-item">
      
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${img}" alt="${name}" class="product-card-image"></div>
        <h2 calss="product-card-name">${name}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${category}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${size}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${popularity}</span>
            </p>
        </div>
        <div class="product-card-bottom">
        <p>$${price}</p>
        <button class="card_buy-btn">
        <svg class="card_buy-logo-icon">
                <use href="./img/icons.svg#logo-icon"></use>
            </svg>
            </button>
        </div>
        </div>
    </li>
  `
};


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


//   function onSearch(e) {
//   e.preventDefault();
//   productsList.innerHTML = '';

//   fetchProducts.inputQuery = e.target.elements.searchQuery.value.trim();

//   fetchProducts.getProductsBySearch()
//     .then(({ results }) => {

//       if (results.length === 0) {
//          searchFormEl.reset();

//         window.alert('Oops test')
//       }

//       return results.map(item => {

//     productsList.insertAdjacentHTML('beforeend', handleMarkup(item))
//   })})
//   .catch(err => {
//       if (!err) {
//         return
//       }
//       window.alert('Oops test')
//     });
// }



// function onSelect(e) {
  
//   fetchProducts.query = e.target.value;
//   productsList.innerHTML = '';
  
//   fetchProducts.getProductsByCategory()
//     .then(({ results }) => results.map(item => {
//       productsList.insertAdjacentHTML('beforeend', handleMarkup(item))
//     }))
//     .catch(err => {
//       if (!err) {
//         return
//       }
//       window.alert('Oops test')
//     });
// }
    
//   fetchProducts.getCategories()
//   .then(data =>
//   data.map(item => {
    
//     const categoriesMurkup = `<option value="${item}">${item}</option>`;
//     return categoriesEl.insertAdjacentHTML('beforeend', categoriesMurkup)
//   }))
//    .catch(err => {
//     if (!err) {
//       return
//     }
//    window.alert('Oops test')
//   })



