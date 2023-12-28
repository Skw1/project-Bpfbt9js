import{a as h,b as z}from"./vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();class u{constructor(){const t=document.querySelectorAll(".js-object");for(let o=0;o<t.length;o++)"dataset"in t[o]&&"jsname"in t[o].dataset&&(this[t[o].dataset.jsname]=t[o])}refresh(){for(var t in this)t in this&&delete this[t];const o=document.querySelectorAll(".js-object");for(let c=0;c<o.length;c++)"dataset"in o[c]&&"jsname"in o[c].dataset&&(this[o[c].dataset.jsname]=o[c])}}const v={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await h.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await h.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await h.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await h.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(o){throw o}},products:async function(t={}){try{const o={params:t};return(await h.get(this._baseURL+this._productsURL,o)).data}catch(o){throw o}},subscribe:async function(t){try{const o={email:t};return(await h.post(this._baseURL+this._subscriptionURL,o)).data}catch(o){throw o}},order:async function(t){try{return(await h.post(this._baseURL+this._orderURL,t)).data}catch(o){throw o}}},d={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,o){try{const c=JSON.stringify(o);localStorage.setItem(t,c)}catch(c){throw c}},_load:function(t){try{const o=localStorage.getItem(t);return o===null?{}:JSON.parse(o)}catch(o){throw o}},_delete:function(t){try{localStorage.removeItem(t)}catch(o){throw o}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),G("discountIcon"),P()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function F(s,t){const o=z.create(s,{onShow:e=>{document.addEventListener("keydown",c),e.element().querySelector(t).onclick=e.close},onClose:()=>{document.removeEventListener("keydown",c)}});function c(e){e.key==="Escape"&&o.close()}o.show()}const V="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#close-icon",J="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function _(s,t){const c=s.target.closest(t).dataset.productid,{name:e,desc:n,img:i,category:r,price:a,size:m,popularity:O}=await v.product(c);let C="Add to",E=d.loadCart();"products"in E&&E.products.findIndex(g=>g.productId===c)!==-1&&(C="Remove from");const A=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${V}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${i}"
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
              <span class="modal-product-prop-span">${r}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${m}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${O}</span>
            </p>       
          <p class="modal-product-prop-dscr">${n}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${a}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${C}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${J}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;F(A,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",S=>{const g=S.target.closest(".modal-product-cart");let p=d.loadCart(),M=!0;if("products"in p){const U=p.products.findIndex(H=>H.productId===c);U!==-1&&(p.products.splice(U,1),g.querySelector(".baskettext").innerHTML="Add to",M=!1)}M&&("products"in p?p.products.push({productId:c,amount:1}):p={email:"",products:[{productId:c,amount:1}]},g.querySelector(".baskettext").innerHTML="Remove from"),d.saveCart(p)})}const K="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",L="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",I="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function W(){const t=new u;t.discountList.innerHTML="";const o=await v.discount(),c=[];let e=0;for(o.length<2?e=o.length:e=2;e>0;e--){let a=Math.floor(Math.random()*o.length);c.push(o[a]),o.splice(a,1)}let n=d.loadCart();const i=[];"products"in n&&(n=n.products,n.forEach(a=>i.push(a.productId)));const r=[];c.forEach(a=>{let m=L;i.includes(a._id)&&(m=I),r.push(`
        <li class="discount-list-item discount-show" data-productId="${a._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${a._id}">
              <use href="${K}" class="discount-show"  data-productId="${a._id}"></use>
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
        `)}),t.discountList.insertAdjacentHTML("beforeend",r.join(""))}function x(s){let t=d.loadCart(),o=!1;return"products"in t&&t.products.forEach(c=>{if(c.productId===s){o=!0;return}}),o}function k(s){let t=d.loadCart();x(s)||("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},d.saveCart(t))}function R(s,t){const o=new u;o[`${t}${s}`].href.baseVal===`${L}`&&(o[`${t}${s}`].href.baseVal=`${I}`)}function Y(s,t){const o=new u;o[`${t}${s}`].href.baseVal===`${I}`&&(o[`${t}${s}`].href.baseVal=`${L}`)}function G(s){const t=new u;for(var o in t)if(o.indexOf(s)===0){let c=t[o].dataset.productid;x(c)?R(c,s):Y(c,s)}}function Q(s){s.target.classList.contains("discount-buy")?k(s.target.dataset.productid):s.target.classList.contains("discount-show")&&_(s,".discount-show")}function P(){const s=new u;let t=0,o=d.loadCart();"products"in o&&(t=o.products.length),console.log(t),s.headerCartNumber.textContent=t}let $,j,b,f;async function X(){$=new u,$.PopularList.innerHTML="",j=await v.popular(),ot()}function Z(s){b=s.target.closest(".cards-item").dataset.id,f[`btn1${b}`].style.display="none",f[`check${b}`].style.display="flex",k(b)}function tt(s){if(s.target.classList.contains("js-btn")){Z(s);return}if(!s.target.classList.contains("js-btn")){_(s,".cards-item");return}}function st(s){return s.map(({_id:t,img:o,name:c,category:e,size:n,popularity:i})=>` 
    <li class ="cards-item" data-id="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${o}" alt="${c}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${c}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${e}</span>
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
                <div id="${t}" class="check-btn js-object" data-jsname="check${t}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function ot(){try{const s=j;$.PopularList.insertAdjacentHTML("beforeend",st(s)),f=new u;let t=d.loadCart();const o=[];"products"in t&&(t=t.products,t.forEach(e=>o.push(e.productId)));const c=[];return j.forEach(e=>{o.includes(e._id)&&(f[`btn1${e._id}`].style.display="none",f[`check${e._id}`].style.display="flex")}),await s}catch(s){console.log(s.message)}}const l={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},T=document.querySelector(".footer-form"),et="Escape";function w(){window.addEventListener("keydown",B),l.closeModalBtn.addEventListener("click",y),l.backdrop.addEventListener("click",N),document.body.classList.add("show-modal")}function y(){window.removeEventListener("keydown",B),l.closeModalBtn.removeEventListener("click",y),l.backdrop.removeEventListener("click",N),document.body.classList.remove("show-modal")}function N(s){s.currentTarget===s.target&&y()}function B(s){s.code===et&&y()}async function ct(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const o={email:t},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)};await fetch("https://food-boutique.b.goit.study/api/subscription",c).then(e=>{if(e.json(),console.log(e),e.status===409){w(),l.modalImg.style.display="none",l.modalInner.innerHTML=`
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
          `,T.reset();return}w()}).catch(e=>console.log(e.message))}const q=document.querySelector(".product-card-list");function at(s){const t=s.target.closest(".product-card-item").dataset.productid;if(s.target.classList.contains("product-card-item")||s.target!==s.currentTarget){if(s.target.nodeName==="use"||s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"){console.log(t),k(t),R(t,"shoppingCartIcon");return}_(s,".product-card-item");return}}function nt(s){const{category:t,img:o,name:c,popularity:e,price:n,size:i,_id:r,is10PercentOff:a}=s;return a?`
  <li class="product-card-item discount-list-item" id=${r} data-productId="${r}" >

  <svg class="discount-icon" id=${r}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${o}" alt="${c}" class="product-card-image"></div>
        <h2 class="product-card-name">${c}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${e}</span>
            </p>
        </div>
        <div class="product-card-bottom">
        <p class="product-curd-price">$${n}</p>
         <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${r}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
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
  <li class="product-card-item discount-list-item" id=${r} data-productId="${r}" >

       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${o}" alt="${c}" class="product-card-image"></div>
        <h2 class="product-card-name">${c}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${e}</span>
            </p>
        </div>
        <div class="product-card-bottom">
        <p class="product-curd-price">$${n}</p>
        
        <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${r}"  type="button">
                    <svg class="basket-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
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
  `}async function rt(){(await v.products()).results.map(t=>q.insertAdjacentHTML("beforeend",nt(t)))}const D=new u;P();rt();q.addEventListener("click",at);X();D.PopularList.addEventListener("click",tt);W();D.discountList.addEventListener("click",Q);T.addEventListener("submit",ct);
//# sourceMappingURL=main-2561d507.js.map
