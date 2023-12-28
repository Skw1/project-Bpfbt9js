import{a as u,b as N}from"./vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();class p{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let a=0;a<s.length;a++)"dataset"in s[a]&&"jsname"in s[a].dataset&&(this[s[a].dataset.jsname]=s[a])}}const L={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await u.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await u.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await u.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await u.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await u.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await u.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await u.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},d={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const a=JSON.stringify(s);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),W("discountIcon")},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function A(o,t){const s=N.create(o,{onShow:e=>{document.addEventListener("keydown",a),e.element().querySelector(t).onclick=e.close},onClose:()=>{document.removeEventListener("keydown",a)}});function a(e){e.key==="Escape"&&s.close()}s.show()}const H="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#close-icon",F="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function M(o,t){const a=o.target.closest(t).dataset.productid,{name:e,desc:n,img:r,category:h,price:c,size:m,popularity:D}=await L.product(a);let j="Add to",k=d.loadCart();"products"in k&&k.products.findIndex(b=>b.productId===a)!==-1&&(j="Remove from");const q=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${H}"></use>
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
              <span class="modal-product-prop-span">${h}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${m}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${D}</span>
            </p>       
          <p class="modal-product-prop-dscr">${n}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${j}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${F}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;A(q,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",E=>{const b=E.target.closest(".modal-product-cart");let l=d.loadCart(),C=!0;if("products"in l){const S=l.products.findIndex(O=>O.productId===a);S!==-1&&(l.products.splice(S,1),b.querySelector(".baskettext").innerHTML="Add to",C=!1)}C&&("products"in l?l.products.push({productId:a,amount:1}):l={email:"",products:[{productId:a,amount:1}]},b.querySelector(".baskettext").innerHTML="Remove from"),d.saveCart(l)})}const z="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",I="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",$="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function V(){const t=new p;t.discountList.innerHTML="";const s=await L.discount(),a=[];let e=0;for(s.length<2?e=s.length:e=2;e>0;e--){let c=Math.floor(Math.random()*s.length);a.push(s[c]),s.splice(c,1)}let n=d.loadCart();const r=[];"products"in n&&(n=n.products,n.forEach(c=>r.push(c.productId)));const h=[];a.forEach(c=>{let m=I;r.includes(c._id)&&(m=$),h.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${z}" class="discount-show"  data-productId="${c._id}"></use>
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
                    <use href="${m}" class="js-object discount-buy" data-jsname="discountIcon${c._id}" data-productId="${c._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",h.join(""))}function U(o){let t=d.loadCart(),s=!1;return"products"in t&&t.products.forEach(a=>{if(a.productId===o){s=!0;return}}),s}function R(o){let t=d.loadCart();U(o)||("products"in t?t.products.push({productId:o,amount:1}):t={email:"",products:[{productId:o,amount:1}]},d.saveCart(t))}function J(o,t){const s=new p;s[`${t}${o}`].href.baseVal===`${I}`&&(s[`${t}${o}`].href.baseVal=`${$}`)}function K(o,t){const s=new p;s[`${t}${o}`].href.baseVal===`${$}`&&(s[`${t}${o}`].href.baseVal=`${I}`)}function W(o){const t=new p;for(var s in t)if(s.indexOf(o)===0){let a=t[s].dataset.productid;U(a)?J(a,o):K(a,o)}}function Y(o){o.target.classList.contains("discount-buy")?R(o.target.dataset.productid):o.target.classList.contains("discount-show")&&M(o,".discount-show")}let _,w,g,f;async function G(){_=new p,_.PopularList.innerHTML="",w=await L.popular(),tt()}function Q(o){g=o.target.closest(".cards-item").dataset.id,f[`btn1${g}`].style.display="none",f[`check${g}`].style.display="flex",R(g)}function X(o){if(o.target.classList.contains("js-btn")){Q(o);return}if(!o.target.classList.contains("js-btn")){M(o,".cards-item");return}}function Z(o){return o.map(({_id:t,img:s,name:a,category:e,size:n,popularity:r})=>` 
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
               
    
`).join("")}async function tt(){try{const o=w;_.PopularList.insertAdjacentHTML("beforeend",Z(o)),f=new p;let t=d.loadCart();const s=[];"products"in t&&(t=t.products,t.forEach(e=>s.push(e.productId)));const a=[];return w.forEach(e=>{s.includes(e._id)&&(f[`btn1${e._id}`].style.display="none",f[`check${e._id}`].style.display="flex")}),await o}catch(o){console.log(o.message)}}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},P=document.querySelector(".footer-form"),st="Escape";function v(){window.addEventListener("keydown",T),i.closeModalBtn.addEventListener("click",y),i.backdrop.addEventListener("click",x),document.body.classList.add("show-modal")}function y(){window.removeEventListener("keydown",T),i.closeModalBtn.removeEventListener("click",y),i.backdrop.removeEventListener("click",x),document.body.classList.remove("show-modal")}function x(o){o.currentTarget===o.target&&y()}function T(o){o.code===st&&y()}async function ot(o){o.preventDefault();const t=o.target.elements.email.value;console.log(t);const s={email:t},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(e=>{if(e.json(),console.log(e),e.status===409){v(),i.modalImg.style.display="none",i.modalInner.innerHTML=`
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
        </div>`;return}if(e.status===201){v(),i.modalImg.style.display="block",i.modalInner.innerHTML=`
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
          `,P.reset();return}v()}).catch(e=>console.log(e.message))}const B=new p;P.addEventListener("submit",ot);G();B.PopularList.addEventListener("click",X);V();B.discountList.addEventListener("click",Y);
//# sourceMappingURL=main-4d4442d2.js.map
