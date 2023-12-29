import{a as u,b as M}from"./vendor-7ba42fd8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();const j={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await u.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await u.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await u.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await u.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await u.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await u.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await u.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}};class p{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let e=0;e<s.length;e++)"dataset"in s[e]&&"jsname"in s[e].dataset&&(this[s[e].dataset.jsname]=s[e])}}function D(o,t){const s=M.create(o,{onShow:a=>{document.addEventListener("keydown",e),a.element().querySelector(t).onclick=a.close},onClose:()=>{document.removeEventListener("keydown",e)}});function e(a){a.key==="Escape"&&s.close()}s.show()}const q="/project-Bpfbt9js/assets/icons-03dfadd1.svg#close-icon",x="/project-Bpfbt9js/assets/icons-03dfadd1.svg#shopping-cart-icon";async function B(o,t){const e=o.target.closest(t).dataset.productid,{name:a,desc:c,img:n,category:f,price:r,size:h,popularity:S}=await j.product(e);let v="Add to",w=i.loadCart();"products"in w&&w.products.findIndex(m=>m.productId===e)!==-1&&(v="Remove from");const U=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${q}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${n}"
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
              <span class="modal-product-prop-span">${f}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${h}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${S}</span>
            </p>       
          <p class="modal-product-prop-dscr">${c}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${r}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${v}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${x}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;D(U,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",I=>{const m=I.target.closest(".modal-product-cart");let l=i.loadCart(),L=!0;if("products"in l){const $=l.products.findIndex(R=>R.productId===e);$!==-1&&(l.products.splice($,1),m.querySelector(".baskettext").innerHTML="Add to",L=!1)}L&&("products"in l?l.products.push({productId:e,amount:1}):l={email:"",products:[{productId:e,amount:1}]},m.querySelector(".baskettext").innerHTML="Remove from"),i.saveCart(l)})}const N="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-icon",_="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-cart",y="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-checked";async function K(){const t=new p;t.discountList.innerHTML="";const s=await j.discount(),e=[];let a=0;for(s.length<2?a=s.length:a=2;a>0;a--){let r=Math.floor(Math.random()*s.length);e.push(s[r]),s.splice(r,1)}let c=i.loadCart();const n=[];"products"in c&&(c=c.products,c.forEach(r=>n.push(r.productId)));const f=[];e.forEach(r=>{let h=_;n.includes(r._id)&&(h=y),f.push(`
        <li class="discount-list-item discount-show" data-productId="${r._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${r._id}">
              <use href="${N}" class="discount-show"  data-productId="${r._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${r._id}">
              <img
                class="discount-image discount-show"
                src="${r.img}"
                width="114"
                height="114"
                alt="${r.name}"
                data-productId="${r._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${r._id}">
              <p class="discount-title discount-show"  data-productId="${r._id}">${r.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${r._id}">
                <span class="discount-price discount-show"  data-productId="${r._id}">$${r.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${r._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${r._id}">
                    <use href="${h}" class="js-object discount-buy" data-jsname="discountIcon${r._id}" data-productId="${r._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",f.join(""))}function C(o){let t=i.loadCart(),s=!1;return"products"in t&&t.products.forEach(e=>{if(e.productId===o){s=!0;return}}),s}function T(o){let t=i.loadCart();C(o)||("products"in t?t.products.push({productId:o,amount:1}):t={email:"",products:[{productId:o,amount:1}]},i.saveCart(t))}function O(o,t){const s=new p;s[`${t}${o}`].href.baseVal===`${_}`&&(s[`${t}${o}`].href.baseVal=`${y}`)}function P(o,t){const s=new p;s[`${t}${o}`].href.baseVal===`${y}`&&(s[`${t}${o}`].href.baseVal=`${_}`)}function A(o){const t=new p;for(var s in t)if(s.indexOf(o)===0){let e=t[s].dataset.productid;C(e)?O(e,o):P(e,o)}}function z(o){o.target.classList.contains("discount-buy")?T(o.target.dataset.productid):o.target.classList.contains("discount-show")&&B(o,".discount-show")}function F(){const o=new p;let t=0,s=i.loadCart();"products"in s&&(t=s.products.length),o.headerCartNumber.textContent=t}const i={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const e=JSON.stringify(s);localStorage.setItem(t,e)}catch(e){throw e}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),A("discountIcon"),F()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},d={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},H=document.querySelector(".footer-form"),V="Escape";function b(){window.addEventListener("keydown",k),d.closeModalBtn.addEventListener("click",g),d.backdrop.addEventListener("click",E),document.body.classList.add("show-modal")}function g(){window.removeEventListener("keydown",k),d.closeModalBtn.removeEventListener("click",g),d.backdrop.removeEventListener("click",E),document.body.classList.remove("show-modal")}function E(o){o.currentTarget===o.target&&g()}function k(o){o.code===V&&g()}async function W(o){o.preventDefault();const t=o.target.elements.email.value;console.log(t);const s={email:t},e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};await fetch("https://food-boutique.b.goit.study/api/subscription",e).then(a=>{if(a.json(),console.log(a),a.status===409){b(),d.modalImg.style.display="none",d.modalInner.innerHTML=`
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
        </div>`;return}if(a.status===201){b(),d.modalImg.style.display="block",d.modalInner.innerHTML=`
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
          `,H.reset();return}b()}).catch(a=>console.log(a.message))}export{H as a,T as b,q as c,F as d,K as e,j as f,B as g,z as h,i as l,W as p,p as r};
//# sourceMappingURL=footer-modal-21aff4b3.js.map
