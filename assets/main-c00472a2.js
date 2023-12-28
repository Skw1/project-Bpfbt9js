import{a as f,b as H}from"./vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();class u{constructor(){const t=document.querySelectorAll(".js-object");for(let o=0;o<t.length;o++)"dataset"in t[o]&&"jsname"in t[o].dataset&&(this[t[o].dataset.jsname]=t[o])}refresh(){for(var t in this)t in this&&delete this[t];const o=document.querySelectorAll(".js-object");for(let a=0;a<o.length;a++)"dataset"in o[a]&&"jsname"in o[a].dataset&&(this[o[a].dataset.jsname]=o[a])}}const v={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await f.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await f.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await f.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await f.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(o){throw o}},products:async function(t={}){try{const o={params:t};return(await f.get(this._baseURL+this._productsURL,o)).data}catch(o){throw o}},subscribe:async function(t){try{const o={email:t};return(await f.post(this._baseURL+this._subscriptionURL,o)).data}catch(o){throw o}},order:async function(t){try{return(await f.post(this._baseURL+this._orderURL,t)).data}catch(o){throw o}}},d={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,o){try{const a=JSON.stringify(o);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const o=localStorage.getItem(t);return o===null?{}:JSON.parse(o)}catch(o){throw o}},_delete:function(t){try{localStorage.removeItem(t)}catch(o){throw o}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),G("discountIcon"),R()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function z(s,t){const o=H.create(s,{onShow:e=>{document.addEventListener("keydown",a),e.element().querySelector(t).onclick=e.close},onClose:()=>{document.removeEventListener("keydown",a)}});function a(e){e.key==="Escape"&&o.close()}o.show()}const F="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#close-icon",V="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function L(s,t){const a=s.target.closest(t).dataset.productid,{name:e,desc:r,img:n,category:i,price:c,size:m,popularity:D}=await v.product(a);let C="Add to",k=d.loadCart();"products"in k&&k.products.findIndex(g=>g.productId===a)!==-1&&(C="Remove from");const O=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${F}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${n}"
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
              <span class="modal-product-prop-span">${i}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${m}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${D}</span>
            </p>       
          <p class="modal-product-prop-dscr">${r}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${C}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${V}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;z(O,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",E=>{const g=E.target.closest(".modal-product-cart");let p=d.loadCart(),S=!0;if("products"in p){const M=p.products.findIndex(A=>A.productId===a);M!==-1&&(p.products.splice(M,1),g.querySelector(".baskettext").innerHTML="Add to",S=!1)}S&&("products"in p?p.products.push({productId:a,amount:1}):p={email:"",products:[{productId:a,amount:1}]},g.querySelector(".baskettext").innerHTML="Remove from"),d.saveCart(p)})}const J="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",I="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",j="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function K(){const t=new u;t.discountList.innerHTML="";const o=await v.discount(),a=[];let e=0;for(o.length<2?e=o.length:e=2;e>0;e--){let c=Math.floor(Math.random()*o.length);a.push(o[c]),o.splice(c,1)}let r=d.loadCart();const n=[];"products"in r&&(r=r.products,r.forEach(c=>n.push(c.productId)));const i=[];a.forEach(c=>{let m=I;n.includes(c._id)&&(m=j),i.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${J}" class="discount-show"  data-productId="${c._id}"></use>
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
        `)}),t.discountList.insertAdjacentHTML("beforeend",i.join(""))}function U(s){let t=d.loadCart(),o=!1;return"products"in t&&t.products.forEach(a=>{if(a.productId===s){o=!0;return}}),o}function x(s){let t=d.loadCart();U(s)||("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},d.saveCart(t))}function W(s,t){const o=new u;o[`${t}${s}`].href.baseVal===`${I}`&&(o[`${t}${s}`].href.baseVal=`${j}`)}function Y(s,t){const o=new u;o[`${t}${s}`].href.baseVal===`${j}`&&(o[`${t}${s}`].href.baseVal=`${I}`)}function G(s){const t=new u;for(var o in t)if(o.indexOf(s)===0){let a=t[o].dataset.productid;U(a)?W(a,s):Y(a,s)}}function Q(s){s.target.classList.contains("discount-buy")?x(s.target.dataset.productid):s.target.classList.contains("discount-show")&&L(s,".discount-show")}function R(){const s=new u;let t=0,o=d.loadCart();"products"in o&&(t=o.products.length),console.log(t),s.headerCartNumber.textContent=t}let _,$,b,h;async function X(){_=new u,_.PopularList.innerHTML="",$=await v.popular(),ot()}function Z(s){b=s.target.closest(".cards-item").dataset.id,h[`btn1${b}`].style.display="none",h[`check${b}`].style.display="flex",x(b)}function tt(s){if(s.target.classList.contains("js-btn")){Z(s);return}if(!s.target.classList.contains("js-btn")){L(s,".cards-item");return}}function st(s){return s.map(({_id:t,img:o,name:a,category:e,size:r,popularity:n})=>` 
    <li class ="cards-item" data-id="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${o}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${e}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${r}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${n}</span>
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
               
    
`).join("")}async function ot(){try{const s=$;_.PopularList.insertAdjacentHTML("beforeend",st(s)),h=new u;let t=d.loadCart();const o=[];"products"in t&&(t=t.products,t.forEach(e=>o.push(e.productId)));const a=[];return $.forEach(e=>{o.includes(e._id)&&(h[`btn1${e._id}`].style.display="none",h[`check${e._id}`].style.display="flex")}),await s}catch(s){console.log(s.message)}}const l={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},P=document.querySelector(".footer-form"),et="Escape";function w(){window.addEventListener("keydown",N),l.closeModalBtn.addEventListener("click",y),l.backdrop.addEventListener("click",T),document.body.classList.add("show-modal")}function y(){window.removeEventListener("keydown",N),l.closeModalBtn.removeEventListener("click",y),l.backdrop.removeEventListener("click",T),document.body.classList.remove("show-modal")}function T(s){s.currentTarget===s.target&&y()}function N(s){s.code===et&&y()}async function at(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const o={email:t},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(e=>{if(e.json(),console.log(e),e.status===409){w(),l.modalImg.style.display="none",l.modalInner.innerHTML=`
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
        </div>`;return}if(e.status===201){w(),l.modalImg.style.display="block",l.modalInner.innerHTML=`
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
          `,P.reset();return}w()}).catch(e=>console.log(e.message))}const B=document.querySelector(".product-card-list");function ct(s){if(s.target.classList.contains("product-card-item")||s.target!==s.currentTarget){if(s.target.nodeName==="use"||s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"){console.log("add prod");return}L(s,".product-card-item");return}}function rt(s){const{category:t,img:o,name:a,popularity:e,price:r,size:n,_id:i,is10PercentOff:c}=s;return c?`
  <li class="product-card-item discount-list-item" id=${i} data-productId="${i}" >

  <svg class="discount-icon" id=${i}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${o}" alt="${a}" class="product-card-image"></div>
        <h2 class="product-card-name">${a}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${n}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${e}</span>
            </p>
        </div>
        <div class="product-card-bottom">
        <p class="product-curd-price">$${r}</p>
        <button class="card_buy-btn">
          <svg class="card_buy-logo-icon">
                <use href="./img/icons.svg#shopping-cart-icon"></use>
          </svg>
        </button>
        </div>
        </div>
    </li>
  `:`
  <li class="product-card-item discount-list-item" id=${i} data-productId="${i}" >

       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${o}" alt="${a}" class="product-card-image"></div>
        <h2 class="product-card-name">${a}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${n}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${e}</span>
            </p>
        </div>
        <div class="product-card-bottom">
        <p class="product-curd-price">$${r}</p>
        <button class="card_buy-btn">
          <svg class="card_buy-logo-icon">
                <use href="./img/icons.svg#shopping-cart-icon"></use>
          </svg>
        </button>
        </div>
        </div>
    </li>
  `}async function nt(){(await v.products()).results.map(t=>B.insertAdjacentHTML("beforeend",rt(t)))}const q=new u;R();nt();B.addEventListener("click",ct);X();q.PopularList.addEventListener("click",tt);K();q.discountList.addEventListener("click",Q);P.addEventListener("submit",at);
//# sourceMappingURL=main-c00472a2.js.map
