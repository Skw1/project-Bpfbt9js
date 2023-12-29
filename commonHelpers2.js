import{r as _,f as y,g as k,l as O,b as w,s as A,d as N,a as H,e as B}from"./assets/localStorageApi-36a606b0.js";import"./assets/vendor-7ba42fd8.js";let v,j,g,r;async function J(){v=new _,v.PopularList.innerHTML="",j=await y.popular(),Y()}function D(t){g=t.target.closest(".cards-item").dataset.productid,r[`btn1${g}`].style.display="none",r[`check${g}`].style.display="flex",w(g)}function z(t){let e=setInterval(function(){$()},1e3);if(setTimeout(function(){clearInterval(e)},5e3),t.target.classList.contains("js-btn")){D(t);return}if(!t.target.classList.contains("js-btn")){k(t,".cards-item");return}}function F(t){return t.map(({_id:e,img:s,name:a,category:c,size:p,popularity:m})=>` 
    <li class ="cards-item" data-productid="${e}" >
        <div id ="${e}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${c}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${p}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${m}</span>
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
               
    
`).join("")}async function Y(){try{const t=j;return v.PopularList.insertAdjacentHTML("beforeend",F(t)),r=new _,$(),await t}catch(t){console.log(t.message)}}function $(){let t=O.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),j.forEach(s=>{e.includes(s._id)?(r[`btn1${s._id}`].style.display="none",r[`check${s._id}`].style.display="flex"):(r[`check${s._id}`].style.display="none",r[`btn1${s._id}`].style.display="flex")})}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},C=document.querySelector(".footer-form"),K="Escape";function h(){window.addEventListener("keydown",S),i.closeModalBtn.addEventListener("click",b),i.backdrop.addEventListener("click",L),document.body.classList.add("show-modal")}function b(){window.removeEventListener("keydown",S),i.closeModalBtn.removeEventListener("click",b),i.backdrop.removeEventListener("click",L),document.body.classList.remove("show-modal")}function L(t){t.currentTarget===t.target&&b()}function S(t){t.code===K&&b()}async function U(t){t.preventDefault();const e=t.target.elements.email.value;console.log(e);const s={email:e},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(c=>{if(c.json(),console.log(c),c.status===409){h(),i.modalImg.style.display="none",i.modalInner.innerHTML=`
        <div class="modal__title--wrap">
          <p class="modal__title">
            This
            <span class="modal__accent-text">email address </span>
            has already been entered
          </p>
        </div>
        <div class="modal__description--wrap">
          <p class="modal__description">
            You have already subscribed to our new products. Watch for offers at
            the mailing address.
          </p>
        </div>`;return}if(c.status===201){h(),i.modalImg.style.display="block",i.modalInner.innerHTML=`
        <div class="modal__title--wrap">
        <p class="modal__title">
          Thanks for subscribing for
          <span class="modal__accent-text">new</span>
          products
        </p>
      </div>
      <div class="modal__description--wrap">
        <p class="modal__description">
          We promise you organic and high-quality products that will meet your
          expectations. Please stay with us and we promise you many pleasant
          surprises.
        </p>
      </div>
          `,C.reset();return}h()}).catch(c=>console.log(c.message))}async function V(t,e){document.querySelector(".product_card-list").innerHTML="",await y.products()}function W(t){if(t.target.classList.contains("product_card-item")||t.target!==t.currentTarget){if(t.target.nodeName==="use"||t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"){const e=t.target.closest(".product_card-item").dataset.productid;console.log(e),w(e),A(e,"shoppingCartIcon");return}k(t,".product_card-item");return}}function G(t){const{category:e,img:s,name:a,popularity:c,price:p,size:m,_id:n,is10PercentOff:q}=t;return q?`
  <li class="product_card-item" id=${n} data-productId="${n}" >

  <svg class="discount-icon" id=${n}>
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
                Size:<span class="info-span">${m}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${c}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${p}</p>
         <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${n}" class="check-btn js-object" data-jsname="check${n}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item" id=${n} data-productId="${n}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${a}" class="product_card-image"></div>
        <h2 class="product_card-name">${a}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${m}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${c}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${p}</p>
        
        <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${n}" class="check-btn js-object" data-jsname="check${n}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function R(){(await y.products()).results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",G(e)))}const d=document.querySelector("#dropdownMenu"),E=document.querySelector("#input-filter"),Q=document.querySelector("#filterButt"),u=document.querySelector(".category-content"),X=document.querySelector(".dropdown-toggle"),f="keyword",I="category";let l=JSON.parse(localStorage.getItem(f)),o=JSON.parse(localStorage.getItem(I));function x(){(l||o)&&(E.value=l,u.textContent=o)}async function T(){let e=(await y.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));o!==null?u.textContent=o:u.textContent="Categories",d.innerHTML="",e.forEach(async s=>{const a=document.createElement("div");a.className="dropdown-item",a.textContent=s,a.onclick=async function(){o=s.replace(" ","_").replace("/","&").replace(" ","_"),localStorage.setItem(I,JSON.stringify(o)),M()},d.appendChild(a)})}async function M(){d.style.display=d.style.display==="flex"?"none":"flex",o!==null?u.textContent=o:u.textContent="Categories",setTimeout(function(){d.style.opacity=d.style.opacity==="1"?"0":"1"},10)}function Z(t){const e=t.target.value;e?localStorage.setItem(f,JSON.stringify(e)):localStorage.setItem(f,JSON.stringify(null))}async function tt(t){t.preventDefault(),l==""?l=null:l=JSON.parse(localStorage.getItem(f)),console.log(o,l)}x();T();const P=new _;N();R();document.querySelector(".product_card-list").addEventListener("click",W);J();P.PopularList.addEventListener("click",z);H();T();x();V();P.discountList.addEventListener("click",B);X.addEventListener("click",M);E.addEventListener("input",Z);Q.addEventListener("click",tt);C.addEventListener("submit",U);
//# sourceMappingURL=commonHelpers2.js.map
