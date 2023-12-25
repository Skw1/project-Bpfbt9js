import axios from "axios";
export function fetchBreeds(){
    console.log("hello !");
    const BASE_URL= "https://food-boutique.b.goit.study/api/products/popular";

  return axios.get(BASE_URL)
  .then(response =>
    {
      return response.data
  }
    )
      .catch(error => {
      // console.error(error);
      throw new Error(error);
  });
  };
//   ---------------------------------------------------------
export function createMarcup (arr) {
    return arr.map(({id,img,name,category,size,popularity})=>` 

        <li class ="cards-item">
            <div class="photo-card">
                    <img class = "cards__image" src="${img}" alt="${name}" loading="lazy" />
                 
            </div> 
            <div class="info">
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
               <button class="popular-products-btn" type="button">
                    <svg class="basket-icon-svg" width="12" height="12">
                        <use href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div class="check-btn"><svg class="check-icon-svg" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>

               </li>    
               
    

`).join("")
}
// ---------------------------------------------------------------------
const containerProducts = document.querySelector(".cards-list")
// import { fetchBreeds } from "./fetchApi";
// import { createMarcup } from "./refs";
export async function render() {
    try {
      const data = await fetchBreeds();
      console.log('render', data);
      containerProducts.insertAdjacentHTML('beforeend', createMarcup(data));
           return await data;
    } catch (error) {
      console.log(error.message);
    }
  }
// ----------------------add main.js-------------------------
// import { render } from "./js/popularProducts";
// render ()
