import{a as i}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();class h{constructor(){const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}refresh(){for(var t in this)t in this&&delete this[t];const e=document.querySelectorAll(".js-object");for(let r=0;r<e.length;r++)"dataset"in e[r]&&"jsname"in e[r].dataset&&(this[e[r].dataset.jsname]=e[r])}}const I={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await i.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await i.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await i.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await i.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(e){throw e}},products:async function(t={}){try{const e={params:t};return(await i.get(this._baseURL+this._productsURL,e)).data}catch(e){throw e}},subscribe:async function(t){try{const e={email:t};return(await i.post(this._baseURL+this._subscriptionURL,e)).data}catch(e){throw e}},order:async function(t){try{return(await i.post(this._baseURL+this._orderURL,t)).data}catch(e){throw e}}},p={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,e){try{const r=JSON.stringify(e);localStorage.setItem(t,r)}catch(r){throw r}},_load:function(t){try{const e=localStorage.getItem(t);return e===null?{}:JSON.parse(e)}catch(e){throw e}},_delete:function(t){try{localStorage.removeItem(t)}catch(e){throw e}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},L="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",_="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",y="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function v(){const t=new h;t.discountList.innerHTML="";const e=await I.discount(),r=[];let o=0;for(e.length<2?o=e.length:o=2;o>0;o--){let a=Math.floor(Math.random()*e.length);r.push(e[a]),e.splice(a,1)}let n=p.loadCart();const d=[];"products"in n&&(n=n.products,n.forEach(a=>d.push(a.productId)));const f=[];r.forEach(a=>{let m=_;d.includes(a._id)&&(m=y),f.push(`
        <li class="discount-list-item discount-show" data-productId="${a._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${a._id}">
              <use href="${L}" class="discount-show"  data-productId="${a._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${a._id}">
              <img
                class="discount-image discount-show"
                src="${a.img}"
                width="114"
                height="114"
                alt="${a.name}"
                data-productId="${a._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${a._id}">
              <p class="discount-title discount-show"  data-productId="${a._id}">${a.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${a._id}">
                <span class="discount-price discount-show"  data-productId="${a._id}">$${a.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${a._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${a._id}">
                    <use href="${m}" class="js-object discount-buy" data-jsname="discountIcon${a._id}" data-productId="${a._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",f.join(""))}function j(s){let t=p.loadCart(),e=!0;"products"in t&&t.products.forEach(r=>{if(r.productId===s){e=!1;return}}),e&&("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},p.saveCart(t))}function U(s,t){const e=new h;e[`${t}${s}`].href.baseVal===`${_}`&&(e[`${t}${s}`].href.baseVal=`${y}`)}function $(s){s.target.classList.contains("discount-buy")?(j(s.target.dataset.productid),U(s.target.dataset.productid,"discountIcon")):s.target.classList.contains("discount-show")}const c={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},b=document.querySelector(".footer-form"),E="Escape";function u(){window.addEventListener("keydown",w),c.closeModalBtn.addEventListener("click",l),c.backdrop.addEventListener("click",g),document.body.classList.add("show-modal")}function l(){window.removeEventListener("keydown",w),c.closeModalBtn.removeEventListener("click",l),c.backdrop.removeEventListener("click",g),document.body.classList.remove("show-modal")}function g(s){s.currentTarget===s.target&&l()}function w(s){s.code===E&&l()}async function R(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const e={email:t},r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};await fetch("https://food-boutique.b.goit.study/api/subscription",r).then(o=>{if(o.json(),console.log(o),o.status===409){u(),c.modalImg.style.display="none",c.modalInner.innerHTML=`
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
        </div>`;return}if(o.status===201){u(),c.modalImg.style.display="block",c.modalInner.innerHTML=`
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
          `,b.reset();return}u()}).catch(o=>console.log(o.message))}b.addEventListener("submit",R);v();const C=new h;C.discountList.addEventListener("click",$);
//# sourceMappingURL=main-3b9f2569.js.map
