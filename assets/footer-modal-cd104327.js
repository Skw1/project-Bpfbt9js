import{a as u,b as D}from"./vendor-7ba42fd8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();const _={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await u.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await u.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await u.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await u.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await u.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return await u.post(this._baseURL+this._subscriptionURL,s)}catch(s){throw s}},order:async function(t){try{return(await u.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}};class p{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let e=0;e<s.length;e++)"dataset"in s[e]&&"jsname"in s[e].dataset&&(this[s[e].dataset.jsname]=s[e])}}function x(o,t){const s=D.create(o,{onShow:a=>{document.addEventListener("keydown",e),a.element().querySelector(t).onclick=a.close},onClose:()=>{document.removeEventListener("keydown",e)}});function e(a){a.key==="Escape"&&s.close()}s.show()}const g="/project-Bpfbt9js/assets/icons-03dfadd1.svg#close-icon",B="/project-Bpfbt9js/assets/icons-03dfadd1.svg#shopping-cart-icon";async function N(o,t){const e=o.target.closest(t).dataset.productid,{name:a,desc:c,img:n,category:f,price:r,size:m,popularity:U}=await _.product(e);let w="Add to",I=i.loadCart();"products"in I&&I.products.findIndex(h=>h.productId===e)!==-1&&(w="Remove from");const S=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${g}"></use>
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
              <span class="modal-product-prop-span">${m}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${U}</span>
            </p>       
          <p class="modal-product-prop-dscr">${c}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${r}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${w}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${B}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;x(S,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",L=>{const h=L.target.closest(".modal-product-cart");let l=i.loadCart(),$=!0;if("products"in l){const C=l.products.findIndex(M=>M.productId===e);C!==-1&&(l.products.splice(C,1),h.querySelector(".baskettext").innerHTML="Add to",$=!1)}$&&("products"in l?l.products.push({productId:e,amount:1}):l={email:"",products:[{productId:e,amount:1}]},h.querySelector(".baskettext").innerHTML="Remove from"),i.saveCart(l)})}const q="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-icon",v="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-cart",y="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-checked";async function z(){const t=new p;t.discountList.innerHTML="";const s=await _.discount(),e=[];let a=0;for(s.length<2?a=s.length:a=2;a>0;a--){let r=Math.floor(Math.random()*s.length);e.push(s[r]),s.splice(r,1)}let c=i.loadCart();const n=[];"products"in c&&(c=c.products,c.forEach(r=>n.push(r.productId)));const f=[];e.forEach(r=>{let m=v;n.includes(r._id)&&(m=y),f.push(`
        <li class="discount-list-item discount-show" data-productId="${r._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${r._id}">
              <use href="${q}" class="discount-show"  data-productId="${r._id}"></use>
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
                    <use href="${m}" class="js-object discount-buy" data-jsname="discountIcon${r._id}" data-productId="${r._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",f.join(""))}function E(o){let t=i.loadCart(),s=!1;return"products"in t&&t.products.forEach(e=>{if(e.productId===o){s=!0;return}}),s}function T(o){let t=i.loadCart();E(o)||("products"in t?t.products.push({productId:o,amount:1}):t={email:"",products:[{productId:o,amount:1}]},i.saveCart(t))}function O(o,t){const s=new p;s[`${t}${o}`].href.baseVal===`${v}`&&(s[`${t}${o}`].href.baseVal=`${y}`)}function P(o,t){const s=new p;s[`${t}${o}`].href.baseVal===`${y}`&&(s[`${t}${o}`].href.baseVal=`${v}`)}function A(o){const t=new p;for(var s in t)if(s.indexOf(o)===0){let e=t[s].dataset.productid;E(e)?O(e,o):P(e,o)}}function J(o){o.target.classList.contains("discount-buy")?T(o.target.dataset.productid):o.target.classList.contains("discount-show")&&N(o,".discount-show")}function F(){const o=new p;let t=0,s=i.loadCart();"products"in s&&(t=s.products.length),o.headerCartNumber.textContent=t}const i={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const e=JSON.stringify(s);localStorage.setItem(t,e)}catch(e){throw e}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),A("discountIcon"),F()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},d={closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modal:document.querySelector(".modal")},H=document.querySelector(".footer-form"),V="Escape";function j(){window.addEventListener("keydown",R),d.closeModalBtn.addEventListener("click",b),d.backdrop.addEventListener("click",k),document.body.classList.add("show-modal")}function b(){window.removeEventListener("keydown",R),d.closeModalBtn.removeEventListener("click",b),d.backdrop.removeEventListener("click",k),document.body.classList.remove("show-modal")}function k(o){o.currentTarget===o.target&&b()}function R(o){o.code===V&&b()}async function W(o){o.preventDefault();const t=o.target.elements.email.value;await _.subscribe(t).then(s=>{d.modalImg.style.display="block",d.modal.innerHTML=`
      <button class="modal-btn" data-action="close-modal">
        <svg class="modal-btn-icon" >
          <use href="${g}"></use>
        </svg>
      </button>
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
      <img
        class="modal__food-basket"
        src="./img/Rectangle 2.png"
        alt="Кошик з фруктамі"
      />
    </div>
          `,j(),H.reset()}).catch(s=>{d.modalImg.style.display="none",d.modal.innerHTML=`
      <button class="modal-btn " data-action="close-modal">
        <svg class="modal-btn-icon" >
          <use href="${g}"></use>
        </svg>
      </button>
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
      </div>`,j()})}export{H as a,T as b,g as c,F as d,v as e,_ as f,N as g,y as h,z as i,J as j,i as l,W as p,p as r};
//# sourceMappingURL=footer-modal-cd104327.js.map
