import{a as l,b as T}from"./vendor-0363fca5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();class p{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let a=0;a<s.length;a++)"dataset"in s[a]&&"jsname"in s[a].dataset&&(this[s[a].dataset.jsname]=s[a])}}const w={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await l.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await l.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await l.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await l.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await l.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await l.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await l.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},u={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const a=JSON.stringify(s);localStorage.setItem(t,a)}catch(a){throw a}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function B(o,t){const s=T.create(o,{onShow:e=>{document.addEventListener("keydown",a),e.element().querySelector(t).onclick=e.close},onClose:()=>{document.removeEventListener("keydown",a)}});function a(e){e.key==="Escape"&&s.close()}s.show()}const D="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#close-icon",q="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function O(o,t){const a=o.target.closest(t).dataset.productid,{name:e,desc:r,img:n,category:h,price:c,size:f,popularity:R}=await w.product(a);let I="Add to",L=u.loadCart();"products"in L&&L.products.findIndex(m=>m.productId===a)!==-1&&(I="Remove from");const x=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${D}"></use>
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
              <span class="modal-product-prop-span">${h}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${f}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${R}</span>
            </p>       
          <p class="modal-product-prop-dscr">${r}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${I}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${q}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;B(x,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",j=>{const m=j.target.closest(".modal-product-cart");let d=u.loadCart(),$=!0;if("products"in d){const k=d.products.findIndex(P=>P.productId===a);k!==-1&&(d.products.splice(k,1),m.querySelector(".baskettext").innerHTML="Add to",$=!1)}$&&("products"in d?d.products.push({productId:a,amount:1}):d={email:"",products:[{productId:a,amount:1}]},m.querySelector(".baskettext").innerHTML="Remove from"),u.saveCart(d)})}const N="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",E="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",C="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function A(){const t=new p;t.discountList.innerHTML="";const s=await w.discount(),a=[];let e=0;for(s.length<2?e=s.length:e=2;e>0;e--){let c=Math.floor(Math.random()*s.length);a.push(s[c]),s.splice(c,1)}let r=u.loadCart();const n=[];"products"in r&&(r=r.products,r.forEach(c=>n.push(c.productId)));const h=[];a.forEach(c=>{let f=E;n.includes(c._id)&&(f=C),h.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${N}" class="discount-show"  data-productId="${c._id}"></use>
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
                    <use href="${f}" class="js-object discount-buy" data-jsname="discountIcon${c._id}" data-productId="${c._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",h.join(""))}function H(o){let t=u.loadCart(),s=!0;"products"in t&&t.products.forEach(a=>{if(a.productId===o){s=!1;return}}),s&&("products"in t?t.products.push({productId:o,amount:1}):t={email:"",products:[{productId:o,amount:1}]},u.saveCart(t))}function F(o,t){const s=new p;s[`${t}${o}`].href.baseVal===`${E}`&&(s[`${t}${o}`].href.baseVal=`${C}`)}function z(o){o.target.classList.contains("discount-buy")?(H(o.target.dataset.productid),F(o.target.dataset.productid,"discountIcon")):o.target.classList.contains("discount-show")&&O(o,".discount-show")}const i={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},S=document.querySelector(".footer-form"),J="Escape";function g(){window.addEventListener("keydown",M),i.closeModalBtn.addEventListener("click",b),i.backdrop.addEventListener("click",U),document.body.classList.add("show-modal")}function b(){window.removeEventListener("keydown",M),i.closeModalBtn.removeEventListener("click",b),i.backdrop.removeEventListener("click",U),document.body.classList.remove("show-modal")}function U(o){o.currentTarget===o.target&&b()}function M(o){o.code===J&&b()}async function K(o){o.preventDefault();const t=o.target.elements.email.value;console.log(t);const s={email:t},a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)};await fetch("https://food-boutique.b.goit.study/api/subscription",a).then(e=>{if(e.json(),console.log(e),e.status===409){g(),i.modalImg.style.display="none",i.modalInner.innerHTML=`
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
        </div>`;return}if(e.status===201){g(),i.modalImg.style.display="block",i.modalInner.innerHTML=`
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
          `,S.reset();return}g()}).catch(e=>console.log(e.message))}let v,_,y;async function V(){v=new p,v.PopularList.innerHTML="",_=await w.popular(),Y()}function W(o){return o.map(({_id:t,img:s,name:a,category:e,size:r,popularity:n})=>` 
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
               
    
`).join("")}async function Y(){try{const o=_;v.PopularList.insertAdjacentHTML("beforeend",W(o)),y=new p;let t=u.loadCart();const s=[];"products"in t&&(t=t.products,t.forEach(e=>s.push(e.productId)));const a=[];return _.forEach(e=>{s.includes(e._id)&&(y[`btn1${e._id}`].style.display="none",y[`check${e._id}`].style.display="flex")}),await o}catch(o){console.log(o.message)}}const G=new p;S.addEventListener("submit",K);V();A();G.discountList.addEventListener("click",z);
//# sourceMappingURL=main-bbff77f7.js.map
