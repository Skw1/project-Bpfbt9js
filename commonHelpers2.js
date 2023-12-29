import{r as p,b as x,g as I,f as b,l as L,e as v,h as $,d as H,i as J,j as z,a as B,p as D}from"./assets/footer-modal-cd104327.js";import"./assets/vendor-7ba42fd8.js";const C=document.querySelector(".error");new p;let o,_;async function F(t){document.querySelector(".product_card-list").innerHTML="",t.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",E(e)))}function U(t){if(t.target.classList.contains("product_card-item")||t.target!==t.currentTarget){let e=setInterval(function(){w(),S()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.nodeName==="use"||t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"){const s=t.target.closest(".product_card-item").dataset.productid;x(s),o[`btn2${s}`].style.display="none",o[`check1${s}`].style.display="flex";return}I(t,".product_card-item");return}}function E(t){const{category:e,img:s,name:c,popularity:f,price:y,size:g,_id:a,is10PercentOff:q}=t;return q?`
  <li class="product_card-item js-object" id=${a} data-productId="${a}" >

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
                Size:<span class="info-span">${g}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${f}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${y}</p>
         <button id="${a}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${a}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${a}" class="check js-object" data-jsname="check1${a}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${$}"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item js-object" id=${a} data-productId="${a}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${c}" class="product_card-image"></div>
        <h2 class="product_card-name">${c}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${g}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${f}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${y}</p>
        
        <button id="${a}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${a}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${a}" class="check js-object" data-jsname="check1${a}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${$}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function V(){_=await b.products(),_.results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",E(t))),o=new p,w()}function w(){let t=L.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),_.results.forEach(s=>{e.includes(s._id)?(o[`btn2${s._id}`].style.display="none",o[`check1${s._id}`].style.display="flex"):(o[`check1${s._id}`].style.display="none",o[`btn2${s._id}`].style.display="flex")})}let j,k,h,i;async function G(){j=new p,j.PopularList.innerHTML="",k=await b.popular(),Q()}function R(t){h=t.target.closest(".cards-item").dataset.productid,i[`btn1${h}`].style.display="none",i[`check${h}`].style.display="flex",x(h)}function Y(t){let e=setInterval(function(){S(),w()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.classList.contains("js-btn")){R(t);return}if(!t.target.classList.contains("js-btn")){I(t,".cards-item");return}}function K(t){return t.map(({_id:e,img:s,name:c,category:f,size:y,popularity:g})=>` 
    <li class ="cards-item" data-productid="${e}" >
        <div id ="${e}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${c}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${c}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${f}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${y}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${g}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${e}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${e}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${e}" class="check-btn js-object js-btn" data-jsname="check${e}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="${$}"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function Q(){try{const t=k;return j.PopularList.insertAdjacentHTML("beforeend",K(t)),i=new p,S(),await t}catch(t){console.log(t.message)}}function S(){let t=L.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),k.forEach(s=>{e.includes(s._id)?(i[`btn1${s._id}`].style.display="none",i[`check${s._id}`].style.display="flex"):(i[`check${s._id}`].style.display="none",i[`btn1${s._id}`].style.display="flex")})}const l=document.querySelector("#dropdownMenu"),P=document.querySelector("#input-filter"),W=document.querySelector("#filterButt"),u=document.querySelector(".category-content"),X=document.querySelector(".dropdown-toggle"),m="keyword",T="category";let r=JSON.parse(localStorage.getItem(m)),n=JSON.parse(localStorage.getItem(T)),d={};function A(){(r||n)&&(P.value=r,u.textContent=n)}async function M(){let e=(await b.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));e.push("Show all"),n!==null?u.textContent=n:u.textContent="Categories",l.innerHTML="",e.forEach(async s=>{const c=document.createElement("div");c.className="dropdown-item",c.textContent=s,c.onclick=async function(){n=s,localStorage.setItem(T,JSON.stringify(n)),N()},l.appendChild(c)})}async function N(){l.style.display=l.style.display==="flex"?"none":"flex",n!==null?u.textContent=n:u.textContent="Categories",setTimeout(function(){l.style.opacity=l.style.opacity==="1"?"0":"1"},10)}function Z(t){const e=t.target.value;e?localStorage.setItem(m,JSON.stringify(e)):localStorage.setItem(m,JSON.stringify(null))}async function tt(t){t.preventDefault(),r==""?r=null:r=JSON.parse(localStorage.getItem(m)),r==null?n.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={}:d={category:n.replace(" ","_").replace("/","&").replace(" ","_")}:n.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={keyword:r}:d={category:n.replace(" ","_").replace("/","&").replace(" ","_"),keyword:r};const e=await b.products(d);return e.results.length===0?C.style.display="flex":C.style.display="none",F(e)}A();M();const O=new p;H();V();document.querySelector(".product_card-list").addEventListener("click",U);G();O.PopularList.addEventListener("click",Y);J();M();A();O.discountList.addEventListener("click",z);X.addEventListener("click",N);P.addEventListener("input",Z);W.addEventListener("click",tt);B.addEventListener("submit",D);
//# sourceMappingURL=commonHelpers2.js.map
