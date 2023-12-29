import{r as h,f as m,g as v,l as I,b as j,s as E,d as P,e as T,h as A,a as N,p as M}from"./assets/footer-modal-fbfc26d5.js";import"./assets/vendor-7ba42fd8.js";let y,b,g,o;async function O(){y=new h,y.PopularList.innerHTML="",b=await m.popular(),z()}function q(t){g=t.target.closest(".cards-item").dataset.productid,o[`btn1${g}`].style.display="none",o[`check${g}`].style.display="flex",j(g)}function H(t){let s=setInterval(function(){$()},1e3);if(setTimeout(function(){clearInterval(s)},5e3),t.target.classList.contains("js-btn")){q(t);return}if(!t.target.classList.contains("js-btn")){v(t,".cards-item");return}}function J(t){return t.map(({_id:s,img:e,name:c,category:l,size:u,popularity:p})=>` 
    <li class ="cards-item" data-productid="${s}" >
        <div id ="${s}" class="photo-card">
                    <img class = "cards__image" src="${e}" alt="${c}" loading="lazy" />
                 
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
               <button id="${s}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${s}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${s}" class="check-btn js-object js-btn" data-jsname="check${s}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object js-btn" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function z(){try{const t=b;return y.PopularList.insertAdjacentHTML("beforeend",J(t)),o=new h,$(),await t}catch(t){console.log(t.message)}}function $(){let t=I.loadCart();const s=[];"products"in t&&(t=t.products,t.forEach(e=>s.push(e.productId))),b.forEach(e=>{s.includes(e._id)?(o[`btn1${e._id}`].style.display="none",o[`check${e._id}`].style.display="flex"):(o[`check${e._id}`].style.display="none",o[`btn1${e._id}`].style.display="flex")})}async function D(t,s){document.querySelector(".product_card-list").innerHTML="",await m.products()}function F(t){if(t.target.classList.contains("product_card-item")||t.target!==t.currentTarget){if(t.target.nodeName==="use"||t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"){const s=t.target.closest(".product_card-item").dataset.productid;console.log(s),j(s),E(s,"shoppingCartIcon");return}v(t,".product_card-item");return}}function B(t){const{category:s,img:e,name:c,popularity:l,price:u,size:p,_id:a,is10PercentOff:x}=t;return x?`
  <li class="product_card-item" id=${a} data-productId="${a}" >

  <svg class="discount-icon" id=${a}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${e}" alt="${c}" class="product_card-image"></div>
        <h2 class="product_card-name">${c}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${s}</span>
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
        <div class="card-img-wrapper"><img src="${e}" alt="${c}" class="product_card-image"></div>
        <h2 class="product_card-name">${c}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${s}</span>
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
    </li>`}async function U(){(await m.products()).results.map(s=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",B(s)))}const r=document.querySelector("#dropdownMenu"),k=document.querySelector("#input-filter"),V=document.querySelector("#filterButt"),d=document.querySelector(".category-content"),G=document.querySelector(".dropdown-toggle"),f="keyword",_="category";let i=JSON.parse(localStorage.getItem(f)),n=JSON.parse(localStorage.getItem(_));function w(){(i||n)&&(k.value=i,d.textContent=n)}async function C(){let s=(await m.categories()).map(e=>e.replace("_"," ").replace("&","/").replace("_"," "));n!==null?d.textContent=n:d.textContent="Categories",r.innerHTML="",s.forEach(async e=>{const c=document.createElement("div");c.className="dropdown-item",c.textContent=e,c.onclick=async function(){n=e,localStorage.setItem(_,JSON.stringify(n)),S()},r.appendChild(c)})}async function S(){r.style.display=r.style.display==="flex"?"none":"flex",n!==null?d.textContent=n:d.textContent="Categories",setTimeout(function(){r.style.opacity=r.style.opacity==="1"?"0":"1"},10)}function R(t){const s=t.target.value;s?localStorage.setItem(f,JSON.stringify(s)):localStorage.setItem(f,JSON.stringify(null))}async function Y(t){t.preventDefault(),i==""?i=null:i=JSON.parse(localStorage.getItem(f)),console.log(n.replace(" ","_").replace("/","&").replace(" ","_"),i)}w();C();const L=new h;P();U();document.querySelector(".product_card-list").addEventListener("click",F);O();L.PopularList.addEventListener("click",H);T();C();w();D();L.discountList.addEventListener("click",A);G.addEventListener("click",S);k.addEventListener("input",R);V.addEventListener("click",Y);N.addEventListener("submit",M);
//# sourceMappingURL=commonHelpers2.js.map
