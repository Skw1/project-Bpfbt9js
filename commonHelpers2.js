import{r as h,f as m,g as j,l as P,b as $,s as A,d as T,e as M,h as N,a as O,p as q}from"./assets/footer-modal-fbfc26d5.js";import"./assets/vendor-7ba42fd8.js";let b,v,g,r;async function H(){b=new h,b.PopularList.innerHTML="",v=await m.popular(),F()}function J(t){g=t.target.closest(".cards-item").dataset.productid,r[`btn1${g}`].style.display="none",r[`check${g}`].style.display="flex",$(g)}function z(t){let e=setInterval(function(){k()},1e3);if(setTimeout(function(){clearInterval(e)},5e3),t.target.classList.contains("js-btn")){J(t);return}if(!t.target.classList.contains("js-btn")){j(t,".cards-item");return}}function D(t){return t.map(({_id:e,img:s,name:c,category:l,size:u,popularity:p})=>` 
    <li class ="cards-item" data-productid="${e}" >
        <div id ="${e}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${c}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${c}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${l}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${u}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${p}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${e}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${e}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${e}" class="check-btn js-object js-btn" data-jsname="check${e}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object js-btn" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function F(){try{const t=v;return b.PopularList.insertAdjacentHTML("beforeend",D(t)),r=new h,k(),await t}catch(t){console.log(t.message)}}function k(){let t=P.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),v.forEach(s=>{e.includes(s._id)?(r[`btn1${s._id}`].style.display="none",r[`check${s._id}`].style.display="flex"):(r[`check${s._id}`].style.display="none",r[`btn1${s._id}`].style.display="flex")})}async function B(t){document.querySelector(".product_card-list").innerHTML="",t.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",_(e)))}function U(t){if(t.target.classList.contains("product_card-item")||t.target!==t.currentTarget){if(t.target.nodeName==="use"||t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"){const e=t.target.closest(".product_card-item").dataset.productid;console.log(e),$(e),A(e,"shoppingCartIcon");return}j(t,".product_card-item");return}}function _(t){const{category:e,img:s,name:c,popularity:l,price:u,size:p,_id:a,is10PercentOff:E}=t;return E?`
  <li class="product_card-item" id=${a} data-productId="${a}" >

  <svg class="discount-icon" id=${a}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${c}" class="product_card-image"></div>
        <h2 class="product_card-name">${c}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${p}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${l}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${u}</p>
         <button id="${a}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${a}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${a}" class="check-btn js-object" data-jsname="check${a}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item" id=${a} data-productId="${a}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${c}" class="product_card-image"></div>
        <h2 class="product_card-name">${c}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${p}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${l}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${u}</p>
        
        <button id="${a}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${a}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${a}" class="check-btn js-object" data-jsname="check${a}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function V(){(await m.products()).results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",_(e)))}const i=document.querySelector("#dropdownMenu"),w=document.querySelector("#input-filter"),G=document.querySelector("#filterButt"),d=document.querySelector(".category-content"),R=document.querySelector(".dropdown-toggle"),f="keyword",C="category";let o=JSON.parse(localStorage.getItem(f)),n=JSON.parse(localStorage.getItem(C)),y={};function S(){(o||n)&&(w.value=o,d.textContent=n)}async function L(){let e=(await m.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));n!==null?d.textContent=n:d.textContent="Categories",i.innerHTML="",e.forEach(async s=>{const c=document.createElement("div");c.className="dropdown-item",c.textContent=s,c.onclick=async function(){n=s,localStorage.setItem(C,JSON.stringify(n)),x()},i.appendChild(c)})}async function x(){i.style.display=i.style.display==="flex"?"none":"flex",n!==null?d.textContent=n:d.textContent="Categories",setTimeout(function(){i.style.opacity=i.style.opacity==="1"?"0":"1"},10)}function Y(t){const e=t.target.value;e?localStorage.setItem(f,JSON.stringify(e)):localStorage.setItem(f,JSON.stringify(null))}async function K(t){t.preventDefault(),o==""?o=null:o=JSON.parse(localStorage.getItem(f)),o==null?y={category:n.replace(" ","_").replace("/","&").replace(" ","_")}:y={keyword:o,category:n.replace(" ","_").replace("/","&").replace(" ","_")};const e=await m.products(y);return B(e)}S();L();const I=new h;T();V();document.querySelector(".product_card-list").addEventListener("click",U);H();I.PopularList.addEventListener("click",z);M();L();S();I.discountList.addEventListener("click",N);R.addEventListener("click",x);w.addEventListener("input",Y);G.addEventListener("click",K);O.addEventListener("submit",q);
//# sourceMappingURL=commonHelpers2.js.map
