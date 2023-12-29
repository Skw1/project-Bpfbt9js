import{a as u,b as U}from"./vendor-7ba42fd8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const n of c.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerpolicy&&(c.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?c.credentials="include":r.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function e(r){if(r.ep)return;r.ep=!0;const c=s(r);fetch(r.href,c)}})();const y={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await u.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await u.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await u.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await u.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await u.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await u.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await u.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}};class l{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let e=0;e<s.length;e++)"dataset"in s[e]&&"jsname"in s[e].dataset&&(this[s[e].dataset.jsname]=s[e])}}function R(o,t){const s=U.create(o,{onShow:r=>{document.addEventListener("keydown",e),r.element().querySelector(t).onclick=r.close},onClose:()=>{document.removeEventListener("keydown",e)}});function e(r){r.key==="Escape"&&s.close()}s.show()}const S="/project-Bpfbt9js/assets/icons-03dfadd1.svg#close-icon",E="/project-Bpfbt9js/assets/icons-03dfadd1.svg#shopping-cart-icon";async function D(o,t){const e=o.target.closest(t).dataset.productid,{name:r,desc:c,img:n,category:p,price:a,size:f,popularity:L}=await y.product(e);let b="Add to",_=i.loadCart();"products"in _&&_.products.findIndex(h=>h.productId===e)!==-1&&(b="Remove from");const j=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${S}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${n}"
            alt="${r}"
            width="160"
            height="160"
          />
        </div>
        <div class="modal-dscr-wrapper">
          <h3 class="modal-product-title">${r}</h3>
          <div class="modal-product-prop-wrap">
            <p class="modal-product-prop">
              Category:
              <span class="modal-product-prop-span">${p}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${f}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${L}</span>
            </p>       
          <p class="modal-product-prop-dscr">${c}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${a}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${b}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${E}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;R(j,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",w=>{const h=w.target.closest(".modal-product-cart");let d=i.loadCart(),I=!0;if("products"in d){const v=d.products.findIndex(C=>C.productId===e);v!==-1&&(d.products.splice(v,1),h.querySelector(".baskettext").innerHTML="Add to",I=!1)}I&&("products"in d?d.products.push({productId:e,amount:1}):d={email:"",products:[{productId:e,amount:1}]},h.querySelector(".baskettext").innerHTML="Remove from"),i.saveCart(d)})}const N="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-icon",m="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-cart",g="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-checked";async function A(){const t=new l;t.discountList.innerHTML="";const s=await y.discount(),e=[];let r=0;for(s.length<2?r=s.length:r=2;r>0;r--){let a=Math.floor(Math.random()*s.length);e.push(s[a]),s.splice(a,1)}let c=i.loadCart();const n=[];"products"in c&&(c=c.products,c.forEach(a=>n.push(a.productId)));const p=[];e.forEach(a=>{let f=m;n.includes(a._id)&&(f=g),p.push(`
        <li class="discount-list-item discount-show" data-productId="${a._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${a._id}">
              <use href="${N}" class="discount-show"  data-productId="${a._id}"></use>
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
                    <use href="${f}" class="js-object discount-buy" data-jsname="discountIcon${a._id}" data-productId="${a._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",p.join(""))}function $(o){let t=i.loadCart(),s=!1;return"products"in t&&t.products.forEach(e=>{if(e.productId===o){s=!0;return}}),s}function M(o){let t=i.loadCart();$(o)||("products"in t?t.products.push({productId:o,amount:1}):t={email:"",products:[{productId:o,amount:1}]},i.saveCart(t))}function k(o,t){const s=new l;s[`${t}${o}`].href.baseVal===`${m}`&&(s[`${t}${o}`].href.baseVal=`${g}`)}function x(o,t){const s=new l;s[`${t}${o}`].href.baseVal===`${g}`&&(s[`${t}${o}`].href.baseVal=`${m}`)}function B(o){const t=new l;for(var s in t)if(s.indexOf(o)===0){let e=t[s].dataset.productid;$(e)?k(e,o):x(e,o)}}function T(o){o.target.classList.contains("discount-buy")?M(o.target.dataset.productid):o.target.classList.contains("discount-show")&&D(o,".discount-show")}function O(){const o=new l;let t=0,s=i.loadCart();"products"in s&&(t=s.products.length),o.headerCartNumber.textContent=t}const i={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const e=JSON.stringify(s);localStorage.setItem(t,e)}catch(e){throw e}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),B("discountIcon"),O()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};export{A as a,M as b,S as c,O as d,T as e,y as f,D as g,i as l,l as r,k as s};
//# sourceMappingURL=localStorageApi-36a606b0.js.map
