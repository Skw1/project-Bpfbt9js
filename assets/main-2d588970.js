import{a as m,b as Z}from"./vendor-7ba42fd8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();class p{constructor(){const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}refresh(){for(var t in this)t in this&&delete this[t];const e=document.querySelectorAll(".js-object");for(let o=0;o<e.length;o++)"dataset"in e[o]&&"jsname"in e[o].dataset&&(this[e[o].dataset.jsname]=e[o])}}const y={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await m.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await m.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await m.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await m.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(e){throw e}},products:async function(t={}){try{const e={params:t};return(await m.get(this._baseURL+this._productsURL,e)).data}catch(e){throw e}},subscribe:async function(t){try{const e={email:t};return(await m.post(this._baseURL+this._subscriptionURL,e)).data}catch(e){throw e}},order:async function(t){try{return(await m.post(this._baseURL+this._orderURL,t)).data}catch(e){throw e}}},l={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,e){try{const o=JSON.stringify(e);localStorage.setItem(t,o)}catch(o){throw o}},_load:function(t){try{const e=localStorage.getItem(t);return e===null?{}:JSON.parse(e)}catch(e){throw e}},_delete:function(t){try{localStorage.removeItem(t)}catch(e){throw e}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),nt("discountIcon"),A()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function tt(s,t){const e=Z.create(s,{onShow:a=>{document.addEventListener("keydown",o),a.element().querySelector(t).onclick=a.close},onClose:()=>{document.removeEventListener("keydown",o)}});function o(a){a.key==="Escape"&&e.close()}e.show()}const st="/project-Bpfbt9js/assets/icons-03dfadd1.svg#close-icon",et="/project-Bpfbt9js/assets/icons-03dfadd1.svg#shopping-cart-icon";async function k(s,t){const o=s.target.closest(t).dataset.productid,{name:a,desc:n,img:i,category:r,price:c,size:_,popularity:G}=await y.product(o);let T="Add to",U=l.loadCart();"products"in U&&U.products.findIndex(w=>w.productId===o)!==-1&&(T="Remove from");const Q=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${st}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${i}"
            alt="${a}"
            width="160"
            height="160"
          />
        </div>
        <div class="modal-dscr-wrapper">
          <h3 class="modal-product-title">${a}</h3>
          <div class="modal-product-prop-wrap">
            <p class="modal-product-prop">
              Category:
              <span class="modal-product-prop-span">${r}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${_}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${G}</span>
            </p>       
          <p class="modal-product-prop-dscr">${n}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${T}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${et}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;tt(Q,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",N=>{const w=N.target.closest(".modal-product-cart");let f=l.loadCart(),R=!0;if("products"in f){const O=f.products.findIndex(X=>X.productId===o);O!==-1&&(f.products.splice(O,1),w.querySelector(".baskettext").innerHTML="Add to",R=!1)}R&&("products"in f?f.products.push({productId:o,amount:1}):f={email:"",products:[{productId:o,amount:1}]},w.querySelector(".baskettext").innerHTML="Remove from"),l.saveCart(f)})}const ot="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-icon",S="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-cart",E="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-checked";async function at(){const t=new p;t.discountList.innerHTML="";const e=await y.discount(),o=[];let a=0;for(e.length<2?a=e.length:a=2;a>0;a--){let c=Math.floor(Math.random()*e.length);o.push(e[c]),e.splice(c,1)}let n=l.loadCart();const i=[];"products"in n&&(n=n.products,n.forEach(c=>i.push(c.productId)));const r=[];o.forEach(c=>{let _=S;i.includes(c._id)&&(_=E),r.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${ot}" class="discount-show"  data-productId="${c._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${c._id}">
              <img
                class="discount-image discount-show"
                src="${c.img}"
                width="114"
                height="114"
                alt="${c.name}"
                data-productId="${c._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${c._id}">
              <p class="discount-title discount-show"  data-productId="${c._id}">${c.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${c._id}">
                <span class="discount-price discount-show"  data-productId="${c._id}">$${c.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${c._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${c._id}">
                    <use href="${_}" class="js-object discount-buy" data-jsname="discountIcon${c._id}" data-productId="${c._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",r.join(""))}function P(s){let t=l.loadCart(),e=!1;return"products"in t&&t.products.forEach(o=>{if(o.productId===s){e=!0;return}}),e}function x(s){let t=l.loadCart();P(s)||("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},l.saveCart(t))}function q(s,t){const e=new p;e[`${t}${s}`].href.baseVal===`${S}`&&(e[`${t}${s}`].href.baseVal=`${E}`)}function ct(s,t){const e=new p;e[`${t}${s}`].href.baseVal===`${E}`&&(e[`${t}${s}`].href.baseVal=`${S}`)}function nt(s){const t=new p;for(var e in t)if(e.indexOf(s)===0){let o=t[e].dataset.productid;P(o)?q(o,s):ct(o,s)}}function rt(s){s.target.classList.contains("discount-buy")?x(s.target.dataset.productid):s.target.classList.contains("discount-show")&&k(s,".discount-show")}function A(){const s=new p;let t=0,e=l.loadCart();"products"in e&&(t=e.products.length),console.log(t),s.headerCartNumber.textContent=t}let C,M,$,h;async function it(){C=new p,C.PopularList.innerHTML="",M=await y.popular(),pt()}function dt(s){$=s.target.closest(".cards-item").dataset.productid,h[`btn1${$}`].style.display="none",h[`check${$}`].style.display="flex",x($)}function lt(s){let t=setInterval(function(){D()},1e3);if(setTimeout(function(){clearInterval(t)},5e3),s.target.classList.contains("js-btn")){dt(s);return}if(!s.target.classList.contains("js-btn")){k(s,".cards-item");return}}function ut(s){return s.map(({_id:t,img:e,name:o,category:a,size:n,popularity:i})=>` 
    <li class ="cards-item" data-productid="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${e}" alt="${o}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${o}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${a}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${n}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${i}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${t}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${t}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${t}" class="check-btn js-object js-btn" data-jsname="check${t}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object js-btn" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function pt(){try{const s=M;return C.PopularList.insertAdjacentHTML("beforeend",ut(s)),h=new p,D(),await s}catch(s){console.log(s.message)}}function D(){let s=l.loadCart();const t=[];"products"in s&&(s=s.products,s.forEach(e=>t.push(e.productId))),M.forEach(e=>{t.includes(e._id)?(h[`btn1${e._id}`].style.display="none",h[`check${e._id}`].style.display="flex"):(h[`check${e._id}`].style.display="none",h[`btn1${e._id}`].style.display="flex")})}const u={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},B=document.querySelector(".footer-form"),ft="Escape";function L(){window.addEventListener("keydown",F),u.closeModalBtn.addEventListener("click",I),u.backdrop.addEventListener("click",H),document.body.classList.add("show-modal")}function I(){window.removeEventListener("keydown",F),u.closeModalBtn.removeEventListener("click",I),u.backdrop.removeEventListener("click",H),document.body.classList.remove("show-modal")}function H(s){s.currentTarget===s.target&&I()}function F(s){s.code===ft&&I()}async function mt(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const e={email:t},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};await fetch("https://food-boutique.b.goit.study/api/subscription",o).then(a=>{if(a.json(),console.log(a),a.status===409){L(),u.modalImg.style.display="none",u.modalInner.innerHTML=`
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
        </div>`;return}if(a.status===201){L(),u.modalImg.style.display="block",u.modalInner.innerHTML=`
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
          `,B.reset();return}L()}).catch(a=>console.log(a.message))}async function ht(s,t){document.querySelector(".product_card-list").innerHTML="",await y.products()}function gt(s){if(s.target.classList.contains("product_card-item")||s.target!==s.currentTarget){if(s.target.nodeName==="use"||s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"){const t=s.target.closest(".product_card-item").dataset.productid;console.log(t),x(t),q(t,"shoppingCartIcon");return}k(s,".product_card-item");return}}function bt(s){const{category:t,img:e,name:o,popularity:a,price:n,size:i,_id:r,is10PercentOff:c}=s;return c?`
  <li class="product_card-item discount-list-item" id=${r} data-productId="${r}" >

  <svg class="discount-icon" id=${r}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${e}" alt="${o}" class="product_card-image"></div>
        <h2 class="product_card-name">${o}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${a}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${n}</p>
         <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${r}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${r}" class="check-btn js-object" data-jsname="check${r}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item discount-list-item" id=${r} data-productId="${r}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${e}" alt="${o}" class="product_card-image"></div>
        <h2 class="product_card-name">${o}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${a}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${n}</p>
        
        <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${r}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${r}" class="check-btn js-object" data-jsname="check${r}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function yt(){(await y.products()).results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",bt(t)))}const g=document.querySelector("#dropdownMenu"),J=document.querySelector("#input-filter"),vt=document.querySelector("#filterButt"),v=document.querySelector(".category-content"),_t=document.querySelector(".dropdown-toggle"),j="keyword",z="category";let b=JSON.parse(localStorage.getItem(j)),d=JSON.parse(localStorage.getItem(z));function V(){(b||d)&&(J.value=b,v.textContent=d)}async function K(){let t=(await y.categories()).map(e=>e.replace("_"," ").replace("&","/").replace("_"," "));d!==null?v.textContent=d:v.textContent="Categories",g.innerHTML="",t.forEach(async e=>{const o=document.createElement("div");o.className="dropdown-item",o.textContent=e,o.onclick=async function(){d=e.replace(" ","_").replace("/","&").replace(" ","_"),localStorage.setItem(z,JSON.stringify(d)),Y()},g.appendChild(o)})}async function Y(){g.style.display=g.style.display==="flex"?"none":"flex",d!==null?v.textContent=d:v.textContent="Categories",setTimeout(function(){g.style.opacity=g.style.opacity==="1"?"0":"1"},10)}function wt(s){const t=s.target.value;t?localStorage.setItem(j,JSON.stringify(t)):localStorage.setItem(j,JSON.stringify(null))}async function $t(s){s.preventDefault(),b==""?b=null:b=JSON.parse(localStorage.getItem(j)),console.log(d,b)}V();K();const W=new p;A();yt();document.querySelector(".product_card-list").addEventListener("click",gt);it();W.PopularList.addEventListener("click",lt);at();K();V();ht();W.discountList.addEventListener("click",rt);_t.addEventListener("click",Y);J.addEventListener("input",wt);vt.addEventListener("click",$t);B.addEventListener("submit",mt);
//# sourceMappingURL=main-2d588970.js.map
