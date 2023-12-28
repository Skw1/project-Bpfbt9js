import{a as p,b as D}from"./vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();class l{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let a=0;a<s.length;a++)"dataset"in s[a]&&"jsname"in s[a].dataset&&(this[s[a].dataset.jsname]=s[a])}}const _={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await p.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await p.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await p.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await p.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await p.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await p.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await p.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},i={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const a=JSON.stringify(s);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),K("discountIcon"),U()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function q(o,t){const s=D.create(o,{onShow:e=>{document.addEventListener("keydown",a),e.element().querySelector(t).onclick=e.close},onClose:()=>{document.removeEventListener("keydown",a)}});function a(e){e.key==="Escape"&&s.close()}s.show()}const N="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#close-icon",O="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function A(o,t){const a=o.target.closest(t).dataset.productid,{name:e,desc:n,img:r,category:f,price:c,size:h,popularity:P}=await _.product(a);let L="Add to",j=i.loadCart();"products"in j&&j.products.findIndex(m=>m.productId===a)!==-1&&(L="Remove from");const T=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${N}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${r}"
            alt="${e}"
            width="160"
            height="160"
          />
        </div>
        <div class="modal-dscr-wrapper">
          <h3 class="modal-product-title">${e}</h3>
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
              Popularity: <span class="modal-product-prop-span">${P}</span>
            </p>       
          <p class="modal-product-prop-dscr">${n}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${L}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${O}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;q(T,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",C=>{const m=C.target.closest(".modal-product-cart");let u=i.loadCart(),k=!0;if("products"in u){const E=u.products.findIndex(B=>B.productId===a);E!==-1&&(u.products.splice(E,1),m.querySelector(".baskettext").innerHTML="Add to",k=!1)}k&&("products"in u?u.products.push({productId:a,amount:1}):u={email:"",products:[{productId:a,amount:1}]},m.querySelector(".baskettext").innerHTML="Remove from"),i.saveCart(u)})}const H="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",I="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",$="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function F(){const t=new l;t.discountList.innerHTML="";const s=await _.discount(),a=[];let e=0;for(s.length<2?e=s.length:e=2;e>0;e--){let c=Math.floor(Math.random()*s.length);a.push(s[c]),s.splice(c,1)}let n=i.loadCart();const r=[];"products"in n&&(n=n.products,n.forEach(c=>r.push(c.productId)));const f=[];a.forEach(c=>{let h=I;r.includes(c._id)&&(h=$),f.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${H}" class="discount-show"  data-productId="${c._id}"></use>
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
                    <use href="${h}" class="js-object discount-buy" data-jsname="discountIcon${c._id}" data-productId="${c._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",f.join(""))}function S(o){let t=i.loadCart(),s=!1;return"products"in t&&t.products.forEach(a=>{if(a.productId===o){s=!0;return}}),s}function z(o){let t=i.loadCart();S(o)||("products"in t?t.products.push({productId:o,amount:1}):t={email:"",products:[{productId:o,amount:1}]},i.saveCart(t))}function V(o,t){const s=new l;s[`${t}${o}`].href.baseVal===`${I}`&&(s[`${t}${o}`].href.baseVal=`${$}`)}function J(o,t){const s=new l;s[`${t}${o}`].href.baseVal===`${$}`&&(s[`${t}${o}`].href.baseVal=`${I}`)}function K(o){const t=new l;for(var s in t)if(s.indexOf(o)===0){let a=t[s].dataset.productid;S(a)?V(a,o):J(a,o)}}function W(o){o.target.classList.contains("discount-buy")?z(o.target.dataset.productid):o.target.classList.contains("discount-show")&&A(o,".discount-show")}function U(){const o=new l;let t=0,s=i.loadCart();"products"in s&&(t=s.products.length),console.log(t),o.headerCartNumber.textContent=t}let v,w,g;async function Y(){v=new l,v.PopularList.innerHTML="",w=await _.popular(),Q()}function G(o){return o.map(({_id:t,img:s,name:a,category:e,size:n,popularity:r})=>` 
    <li class ="cards-item" data-id="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${e}</span>
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
               
    
`).join("")}async function Q(){try{const o=w;v.PopularList.insertAdjacentHTML("beforeend",G(o)),g=new l;let t=i.loadCart();const s=[];"products"in t&&(t=t.products,t.forEach(e=>s.push(e.productId)));const a=[];return w.forEach(e=>{s.includes(e._id)&&(g[`btn1${e._id}`].style.display="none",g[`check${e._id}`].style.display="flex")}),await o}catch(o){console.log(o.message)}}const d={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},M=document.querySelector(".footer-form"),X="Escape";function y(){window.addEventListener("keydown",x),d.closeModalBtn.addEventListener("click",b),d.backdrop.addEventListener("click",R),document.body.classList.add("show-modal")}function b(){window.removeEventListener("keydown",x),d.closeModalBtn.removeEventListener("click",b),d.backdrop.removeEventListener("click",R),document.body.classList.remove("show-modal")}function R(o){o.currentTarget===o.target&&b()}function x(o){o.code===X&&b()}async function Z(o){o.preventDefault();const t=o.target.elements.email.value;console.log(t);const s={email:t},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(e=>{if(e.json(),console.log(e),e.status===409){y(),d.modalImg.style.display="none",d.modalInner.innerHTML=`
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
        </div>`;return}if(e.status===201){y(),d.modalImg.style.display="block",d.modalInner.innerHTML=`
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
          `,M.reset();return}y()}).catch(e=>console.log(e.message))}const tt=new l;M.addEventListener("submit",Z);Y();F();U();tt.discountList.addEventListener("click",W);
//# sourceMappingURL=main-931d2720.js.map
