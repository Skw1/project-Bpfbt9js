import{r as p,b as S,g as C,f as v,l as x,d as O,e as q,h as H,a as J,p as z}from"./assets/footer-modal-21aff4b3.js";import"./assets/vendor-7ba42fd8.js";const w=document.querySelector(".error");new p;let o,b;async function B(t){document.querySelector(".product_card-list").innerHTML="",t.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",L(e)))}function D(t){if(t.target.classList.contains("product_card-item")||t.target!==t.currentTarget){let e=setInterval(function(){_(),j()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.nodeName==="use"||t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"){const s=t.target.closest(".product_card-item").dataset.productid;S(s),o[`btn2${s}`].style.display="none",o[`check1${s}`].style.display="flex";return}C(t,".product_card-item");return}}function L(t){const{category:e,img:s,name:a,popularity:f,price:g,size:y,_id:c,is10PercentOff:N}=t;return N?`
  <li class="product_card-item js-object" id=${c} data-productId="${c}" >

  <svg class="discount-icon" id=${c}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${a}" class="product_card-image"></div>
        <h2 class="product_card-name">${a}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${y}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${f}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${g}</p>
         <button id="${c}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${c}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${c}" class="check js-object" data-jsname="check1${c}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item js-object" id=${c} data-productId="${c}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${a}" class="product_card-image"></div>
        <h2 class="product_card-name">${a}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${y}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${f}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${g}</p>
        
        <button id="${c}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${c}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${c}" class="check js-object" data-jsname="check1${c}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function F(){b=await v.products(),b.results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",L(t))),o=new p,_()}function _(){let t=x.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),b.results.forEach(s=>{e.includes(s._id)?(o[`btn2${s._id}`].style.display="none",o[`check1${s._id}`].style.display="flex"):(o[`check1${s._id}`].style.display="none",o[`btn2${s._id}`].style.display="flex")})}let $,k,h,i;async function U(){$=new p,$.PopularList.innerHTML="",k=await v.popular(),Y()}function V(t){h=t.target.closest(".cards-item").dataset.productid,i[`btn1${h}`].style.display="none",i[`check${h}`].style.display="flex",S(h)}function G(t){let e=setInterval(function(){j(),_()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.classList.contains("js-btn")){V(t);return}if(!t.target.classList.contains("js-btn")){C(t,".cards-item");return}}function R(t){return t.map(({_id:e,img:s,name:a,category:f,size:g,popularity:y})=>` 
    <li class ="cards-item" data-productid="${e}" >
        <div id ="${e}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${f}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${g}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${y}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${e}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${e}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${e}" class="check-btn js-object js-btn" data-jsname="check${e}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function Y(){try{const t=k;return $.PopularList.insertAdjacentHTML("beforeend",R(t)),i=new p,j(),await t}catch(t){console.log(t.message)}}function j(){let t=x.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),k.forEach(s=>{e.includes(s._id)?(i[`btn1${s._id}`].style.display="none",i[`check${s._id}`].style.display="flex"):(i[`check${s._id}`].style.display="none",i[`btn1${s._id}`].style.display="flex")})}const l=document.querySelector("#dropdownMenu"),I=document.querySelector("#input-filter"),K=document.querySelector("#filterButt"),u=document.querySelector(".category-content"),Q=document.querySelector(".dropdown-toggle"),m="keyword",E="category";let r=JSON.parse(localStorage.getItem(m)),n=JSON.parse(localStorage.getItem(E)),d={};function P(){(r||n)&&(I.value=r,u.textContent=n)}async function T(){let e=(await v.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));e.push("Show all"),n!==null?u.textContent=n:u.textContent="Categories",l.innerHTML="",e.forEach(async s=>{const a=document.createElement("div");a.className="dropdown-item",a.textContent=s,a.onclick=async function(){n=s,localStorage.setItem(E,JSON.stringify(n)),A()},l.appendChild(a)})}async function A(){l.style.display=l.style.display==="flex"?"none":"flex",n!==null?u.textContent=n:u.textContent="Categories",setTimeout(function(){l.style.opacity=l.style.opacity==="1"?"0":"1"},10)}function W(t){const e=t.target.value;e?localStorage.setItem(m,JSON.stringify(e)):localStorage.setItem(m,JSON.stringify(null))}async function X(t){t.preventDefault(),r==""?r=null:r=JSON.parse(localStorage.getItem(m)),r==null?n.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={}:d={category:n.replace(" ","_").replace("/","&").replace(" ","_")}:n.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={keyword:r}:d={category:n.replace(" ","_").replace("/","&").replace(" ","_"),keyword:r};const e=await v.products(d);return e.results.length===0?w.style.display="flex":w.style.display="none",B(e)}P();T();const M=new p;O();F();document.querySelector(".product_card-list").addEventListener("click",D);U();M.PopularList.addEventListener("click",G);q();T();P();M.discountList.addEventListener("click",H);Q.addEventListener("click",A);I.addEventListener("input",W);K.addEventListener("click",X);J.addEventListener("submit",z);
//# sourceMappingURL=commonHelpers2.js.map
