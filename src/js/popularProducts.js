import fetchAPI from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import refsAPI from './refs.js';
import { discountOnClick } from './discount.js';
import { buyProduct } from './discount.js';
const butt = document.querySelector('.popular-products-btn');
const checkDiv = document.querySelector('.check-btn');
let frontEndPopular
let productsToDraw
let popularProducts
export async function renderPopular(){
    // const POPULARNUMBER = 10;
    // checkDiv.style.display = 'none';
     frontEndPopular = new refsAPI();
    // console.log(frontEndPopular.PopularList);
    frontEndPopular.PopularList.innerHTML = '';
    popularProducts = await fetchAPI.popular()
    // console.log('popularProducts',popularProducts);
    
    // ----------------
    
    render()
    
    //   console.log(render());
    
}

// -----------------------------------------------------------------------
export function handleModall(event) {
    // if(!event.target.classList.contains("js-btn")){
    //     return;
    // }
    function addProduct() {
        const product = event.target.closest(".cards-item")
        // console.log(product);
        const product_Id= product.dataset.id;
        buyProduct(product_Id)
        // alert()
                          localStorage.clear();
        console.log(product_Id);
        function removeBtn() {
        product_Id?checkDiv.style.display = 'flex':butt.style.display = 'none';
    
    }
    
// butt.disabled = false;
removeBtn()
console.log(removeBtn());
        
    }
    // -------------------------------------
    !event.target.classList.contains("js-btn")?alert():addProduct();
   
    // ===============================
//     const prod = JSON.parse(localStorage.getItem('cart-project-Bpfbt9js'))||[];
// // const productName = prod.products[1]
// let productName = '';
// if ('products' in prod) {
//   productName = prod.products;
// }
// console.log(productName);
         
//   let found = false;
// // let cart = localStorageApi.loadCart();
// // console.log("cart",cart);
//   for (let i = 0; i < productName.length; i++) {
//     if (productName[i].productId === product_Id) {
//       found = true;
// checkDiv.style.display = 'none';
// butt.disabled = false;
//     //   break;
//     }
//   }
  
//   if (!found) {
//     productName.push({productId: product_Id, amount: 1});
// butt.disabled = true;
// checkDiv.style.display = 'block';
//   }

//   console.log(productName);
  
// localStorage.setItem('cart-project-Bpfbt9js', JSON.stringify(productName));

}

// //   ---------------------------------------------------------
export function createMarcup (arr) {
    return arr.map(({_id,img,name,category,size,popularity})=>` 
        <li class ="cards-item" data-id="${_id}" >
        <div class="photo-card">
                    <img class = "cards__image" src="${img}" alt="${name}" loading="lazy" />
                 
            </div> 
            <div class="info discount-show">
                    <h3 class="info-title">${name}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${category}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${size}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${popularity}</span>
                        </p>
                    </wraper>
               </div>
               <button class="popular-products-btn js-btn discount-buy" type="button">
                    <svg class="basket-icon-svg js-btn" width="12" height="12">
                        <use href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div class="check-btn"><svg class="check-icon-svg  discount-buy" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")
}
// // ---------------------------------------------------------------------

export async function render() {
    try {
    //   const data = productsToDraw;
      const data =popularProducts 
    //   console.log('render', data);
      frontEndPopular.PopularList.insertAdjacentHTML('beforeend', createMarcup(data));
           return await data;
    } catch (error) {
      console.log(error.message);
    }
  }
//   ---------------------------------------------------------
        export {butt, checkDiv}
        // -------------------------------------------
//         import { renderPopular } from './js/popularProducts.js';
// renderPopular()
 
// import { handleModall, butt, checkDiv} from './js/popularProducts.js';
//  frontEnd.PopularList.addEventListener('click', handleModall)
// //  frontEnd.PopularList.addEventListener('click', discountOnClick)

// //  checkDiv.style.display = 'none';

// // import { butt } from './js/popularProducts.js';
// // export const butt = document.querySelector('.popular-products-btn');

// // button.addEventListener('click', handleModall)