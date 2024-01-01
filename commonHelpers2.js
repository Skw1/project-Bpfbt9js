import{r as p,b as L,g as x,f as b,l as I,e as v,h as $,d as q,i as B,j as J,a as z,p as D}from"./assets/footer-modal-1f170b31.js";import"./assets/vendor-7ba42fd8.js";const C=document.querySelector(".error");new p;let r,w;async function F(t){document.querySelector(".product_card-list").innerHTML="",t.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",E(e)))}function U(t){if(t.target.classList.contains("product_card-item")||t.target!==t.currentTarget){let e=setInterval(function(){j(),S()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.nodeName==="use"||t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"){const s=t.target.closest(".product_card-item").dataset.productid;L(s),r[`btn2${s}`].style.display="none",r[`check1${s}`].style.display="flex";return}x(t,".product_card-item");return}}function E(t){const{category:e,img:s,name:n,popularity:f,price:y,size:g,_id:c,is10PercentOff:O}=t;return O?`
  <li class="product_card-item js-object" id=${c} data-productId="${c}" >

  <svg class="discount-icon" id=${c}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${n}" class="product_card-image"></div>
        <h2 class="product_card-name">${n}</h2>
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
         <button id="${c}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${c}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${c}" class="check js-object" data-jsname="check1${c}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${$}"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item js-object" id=${c} data-productId="${c}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${n}" class="product_card-image"></div>
        <h2 class="product_card-name">${n}</h2>
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
        
        <button id="${c}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${c}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${c}" class="check js-object" data-jsname="check1${c}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${$}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function V(){w=await b.products(),w.results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",E(t))),r=new p,j()}function j(){let t=I.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),w.results.forEach(s=>{e.includes(s._id)?(r[`btn2${s._id}`].style.display="none",r[`check1${s._id}`].style.display="flex"):(r[`check1${s._id}`].style.display="none",r[`btn2${s._id}`].style.display="flex")})}const G="/project-Bpfbt9js/assets/icons-5c405266.svg#arrow";let _,k,m,i;async function R(){_=new p,_.PopularList.innerHTML="",k=await b.popular(),W()}function Y(t){m=t.target.closest(".cards-item").dataset.productid,i[`btn1${m}`].style.display="none",i[`check${m}`].style.display="flex",L(m)}function K(t){let e=setInterval(function(){S(),j()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.classList.contains("js-btn")){Y(t);return}if(!t.target.classList.contains("js-btn")){x(t,".cards-item");return}}function Q(t){return t.map(({_id:e,img:s,name:n,category:f,size:y,popularity:g})=>` 
    <li class ="cards-item" data-productid="${e}" >
        <div id ="${e}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${n}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${n}</h3>      
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
                  
`).join("")}async function W(){try{const t=k;return _.PopularList.insertAdjacentHTML("beforeend",Q(t)),i=new p,S(),await t}catch(t){console.log(t.message)}}function S(){let t=I.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),k.forEach(s=>{e.includes(s._id)?(i[`btn1${s._id}`].style.display="none",i[`check${s._id}`].style.display="flex"):(i[`check${s._id}`].style.display="none",i[`btn1${s._id}`].style.display="flex")})}function X(){let t;window.onscroll=function(){t||(t=document.createElement("button"),t.innerHTML=t.innerHTML=`<svg class="" width="16" height="16"><use href="${G}"</use></svg>`,t.classList.add("scrollBtn"),document.body.appendChild(t),t.style.animation="flashing 1s infinite",t.onclick=function(){document.documentElement.scrollTop=0,t.style.display="none"}),window.onscroll=function(){document.documentElement.scrollTop===0?t.style.display="none":t.style.display="flex";var e=document.documentElement.scrollHeight,s=window.innerHeight,n=document.documentElement.scrollTop;n>e/6-s/6?t.style.visibility="visible":t.style.visibility="hidden"}}}const l=document.querySelector("#dropdownMenu"),T=document.querySelector("#input-filter"),Z=document.querySelector("#filterButt"),u=document.querySelector(".category-content"),tt=document.querySelector(".dropdown-toggle"),h="keyword",P="category";let o=JSON.parse(localStorage.getItem(h)),a=JSON.parse(localStorage.getItem(P)),d={};function M(){(o||a)&&(T.value=o,u.textContent=a)}async function H(){let e=(await b.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));e.push("Show all"),a!==null?u.textContent=a:u.textContent="Categories",l.innerHTML="",e.forEach(async s=>{const n=document.createElement("div");n.className="dropdown-item",n.textContent=s,n.onclick=async function(){a=s,localStorage.setItem(P,JSON.stringify(a)),A()},l.appendChild(n)})}async function A(){l.style.display=l.style.display==="flex"?"none":"flex",a!==null?u.textContent=a:u.textContent="Categories",setTimeout(function(){l.style.opacity=l.style.opacity==="1"?"0":"1"},10)}function et(t){const e=t.target.value;e?localStorage.setItem(h,JSON.stringify(e)):localStorage.setItem(h,JSON.stringify(null))}async function st(t){t.preventDefault(),o==""?o=null:o=JSON.parse(localStorage.getItem(h)),o==null?a.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={}:d={category:a.replace(" ","_").replace("/","&").replace(" ","_")}:a.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={keyword:o}:d={category:a.replace(" ","_").replace("/","&").replace(" ","_"),keyword:o};const e=await b.products(d);return e.results.length===0?C.style.display="flex":C.style.display="none",F(e)}M();H();const N=new p;q();V();document.querySelector(".product_card-list").addEventListener("click",U);R();N.PopularList.addEventListener("click",K);B();H();M();N.discountList.addEventListener("click",J);tt.addEventListener("click",A);T.addEventListener("input",et);Z.addEventListener("click",st);z.addEventListener("submit",D);X();
//# sourceMappingURL=commonHelpers2.js.map
