import{a as d}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();class p{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let a=0;a<s.length;a++)"dataset"in s[a]&&"jsname"in s[a].dataset&&(this[s[a].dataset.jsname]=s[a])}}const w={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await d.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await d.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await d.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await d.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await d.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await d.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await d.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},h={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const a=JSON.stringify(s);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},U="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",v="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",L="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function C(){const t=new p;t.discountList.innerHTML="";const s=await w.discount(),a=[];let o=0;for(s.length<2?o=s.length:o=2;o>0;o--){let c=Math.floor(Math.random()*s.length);a.push(s[c]),s.splice(c,1)}let n=h.loadCart();const r=[];"products"in n&&(n=n.products,n.forEach(c=>r.push(c.productId)));const y=[];a.forEach(c=>{let _=v;r.includes(c._id)&&(_=L),y.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${U}" class="discount-show"  data-productId="${c._id}"></use>
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
        `)}),t.discountList.insertAdjacentHTML("beforeend",y.join(""))}function I(e){let t=h.loadCart(),s=!0;"products"in t&&t.products.forEach(a=>{if(a.productId===e){s=!1;return}}),s&&("products"in t?t.products.push({productId:e,amount:1}):t={email:"",products:[{productId:e,amount:1}]},h.saveCart(t))}function R(e,t){const s=new p;s[`${t}${e}`].href.baseVal===`${v}`&&(s[`${t}${e}`].href.baseVal=`${L}`)}function S(e){e.target.classList.contains("discount-buy")?(I(e.target.dataset.productid),R(e.target.dataset.productid,"discountIcon")):e.target.classList.contains("discount-show")}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},j=document.querySelector(".footer-form"),M="Escape";function m(){window.addEventListener("keydown",k),i.closeModalBtn.addEventListener("click",f),i.backdrop.addEventListener("click",$),document.body.classList.add("show-modal")}function f(){window.removeEventListener("keydown",k),i.closeModalBtn.removeEventListener("click",f),i.backdrop.removeEventListener("click",$),document.body.classList.remove("show-modal")}function $(e){e.currentTarget===e.target&&f()}function k(e){e.code===M&&f()}async function D(e){e.preventDefault();const t=e.target.elements.email.value;console.log(t);const s={email:t},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(o=>{if(o.json(),console.log(o),o.status===409){m(),i.modalImg.style.display="none",i.modalInner.innerHTML=`
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
        </div>`;return}if(o.status===201){m(),i.modalImg.style.display="block",i.modalInner.innerHTML=`
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
          `,j.reset();return}m()}).catch(o=>console.log(o.message))}let g,b,l,u;async function P(){g=new p,g.PopularList.innerHTML="",b=await w.popular(),N()}function T(e){l=e.target.closest(".cards-item").dataset.id,u[`btn1${l}`].style.display="none",u[`check${l}`].style.display="flex",I(l)}function B(e){if(e.target.classList.contains("js-btn")){T(e);return}if(!e.target.classList.contains("js-btn")){l=e.target.closest(".cards-item").dataset.id;return}}function O(e){return e.map(({_id:t,img:s,name:a,category:o,size:n,popularity:r})=>` 
    <li class ="cards-item" data-id="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${o}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${n}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${r}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${t}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${t}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${t}" class="check-btn js-object" data-jsname="check${t}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function N(){try{const e=b;g.PopularList.insertAdjacentHTML("beforeend",O(e)),u=new p;let t=h.loadCart();const s=[];"products"in t&&(t=t.products,t.forEach(o=>s.push(o.productId)));const a=[];return b.forEach(o=>{s.includes(o._id)&&(u[`btn1${o._id}`].style.display="none",u[`check${o._id}`].style.display="flex")}),await e}catch(e){console.log(e.message)}}j.addEventListener("submit",D);P();E.PopularList.addEventListener("click",B);C();const E=new p;E.discountList.addEventListener("click",S);
//# sourceMappingURL=main-aa908632.js.map
