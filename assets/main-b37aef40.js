import{a as m,b as tt}from"./vendor-7ba42fd8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();class p{constructor(){const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}refresh(){for(var t in this)t in this&&delete this[t];const e=document.querySelectorAll(".js-object");for(let c=0;c<e.length;c++)"dataset"in e[c]&&"jsname"in e[c].dataset&&(this[e[c].dataset.jsname]=e[c])}}const w={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await m.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await m.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await m.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await m.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(e){throw e}},products:async function(t={}){try{const e={params:t};return(await m.get(this._baseURL+this._productsURL,e)).data}catch(e){throw e}},subscribe:async function(t){try{const e={email:t};return(await m.post(this._baseURL+this._subscriptionURL,e)).data}catch(e){throw e}},order:async function(t){try{return(await m.post(this._baseURL+this._orderURL,t)).data}catch(e){throw e}}},l={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,e){try{const c=JSON.stringify(e);localStorage.setItem(t,c)}catch(c){throw c}},_load:function(t){try{const e=localStorage.getItem(t);return e===null?{}:JSON.parse(e)}catch(e){throw e}},_delete:function(t){try{localStorage.removeItem(t)}catch(e){throw e}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),rt("discountIcon"),B()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function st(s,t){const e=tt.create(s,{onShow:o=>{document.addEventListener("keydown",c),o.element().querySelector(t).onclick=o.close},onClose:()=>{document.removeEventListener("keydown",c)}});function c(o){o.key==="Escape"&&e.close()}e.show()}const et="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#close-icon",ot="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#shopping-cart-icon";async function x(s,t){const c=s.target.closest(t).dataset.productid,{name:o,desc:n,img:i,category:r,price:a,size:$,popularity:Q}=await w.product(c);let N="Add to",O=l.loadCart();"products"in O&&O.products.findIndex(j=>j.productId===c)!==-1&&(N="Remove from");const X=`<div class="container">
  <div class="modal-product">
      <button class="modal-button js-modal-close" type="button" >
        <svg class="modal-form-icon" width="28" height="28">
              <use href="${et}"></use>
            </svg>
      </button>
      <div class="modal-product-top">
        <div class="modal-image-wrapper">
          <img
            class="modal-product-image"
            src="${i}"
            alt="${o}"
            width="160"
            height="160"
          />
        </div>
        <div class="modal-dscr-wrapper">
          <h3 class="modal-product-title">${o}</h3>
          <div class="modal-product-prop-wrap">
            <p class="modal-product-prop">
              Category:
              <span class="modal-product-prop-span">${r}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${$}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${Q}</span>
            </p>       
          <p class="modal-product-prop-dscr">${n}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${a}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${N}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${ot}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;st(X,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",R=>{const j=R.target.closest(".modal-product-cart");let f=l.loadCart(),P=!0;if("products"in f){const q=f.products.findIndex(Z=>Z.productId===c);q!==-1&&(f.products.splice(q,1),j.querySelector(".baskettext").innerHTML="Add to",P=!1)}P&&("products"in f?f.products.push({productId:c,amount:1}):f={email:"",products:[{productId:c,amount:1}]},j.querySelector(".baskettext").innerHTML="Remove from"),l.saveCart(f)})}const ct="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",M="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",T="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function at(){const t=new p;t.discountList.innerHTML="";const e=await w.discount(),c=[];let o=0;for(e.length<2?o=e.length:o=2;o>0;o--){let a=Math.floor(Math.random()*e.length);c.push(e[a]),e.splice(a,1)}let n=l.loadCart();const i=[];"products"in n&&(n=n.products,n.forEach(a=>i.push(a.productId)));const r=[];c.forEach(a=>{let $=M;i.includes(a._id)&&($=T),r.push(`
        <li class="discount-list-item discount-show" data-productId="${a._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${a._id}">
              <use href="${ct}" class="discount-show"  data-productId="${a._id}"></use>
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
                    <use href="${$}" class="js-object discount-buy" data-jsname="discountIcon${a._id}" data-productId="${a._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",r.join(""))}function A(s){let t=l.loadCart(),e=!1;return"products"in t&&t.products.forEach(c=>{if(c.productId===s){e=!0;return}}),e}function U(s){let t=l.loadCart();A(s)||("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},l.saveCart(t))}function D(s,t){const e=new p;e[`${t}${s}`].href.baseVal===`${M}`&&(e[`${t}${s}`].href.baseVal=`${T}`)}function nt(s,t){const e=new p;e[`${t}${s}`].href.baseVal===`${T}`&&(e[`${t}${s}`].href.baseVal=`${M}`)}function rt(s){const t=new p;for(var e in t)if(e.indexOf(s)===0){let c=t[e].dataset.productid;A(c)?D(c,s):nt(c,s)}}function it(s){s.target.classList.contains("discount-buy")?U(s.target.dataset.productid):s.target.classList.contains("discount-show")&&x(s,".discount-show")}function B(){const s=new p;let t=0,e=l.loadCart();"products"in e&&(t=e.products.length),console.log(t),s.headerCartNumber.textContent=t}let k,S,_,b;async function dt(){k=new p,k.PopularList.innerHTML="",S=await w.popular(),ft()}function lt(s){_=s.target.closest(".cards-item").dataset.id,b[`btn1${_}`].style.display="none",b[`check${_}`].style.display="flex",U(_)}function ut(s){if(s.target.classList.contains("js-btn")){lt(s);return}if(!s.target.classList.contains("js-btn")){x(s,".cards-item");return}}function pt(s){return s.map(({_id:t,img:e,name:c,category:o,size:n,popularity:i})=>` 
    <li class ="cards-item" data-id="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${e}" alt="${c}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${c}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${o}</span>
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
                        <use class="js-btn" href="../img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${t}" class="check-btn js-object" data-jsname="check${t}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="../img/icons.svg#check-mark-icon"></use>
                    </svg></div>
               </li>    
               
    
`).join("")}async function ft(){try{const s=S;k.PopularList.insertAdjacentHTML("beforeend",pt(s)),b=new p;let t=l.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(o=>e.push(o.productId)));const c=[];return S.forEach(o=>{e.includes(o._id)&&(b[`btn1${o._id}`].style.display="none",b[`check${o._id}`].style.display="flex")}),await s}catch(s){console.log(s.message)}}const u={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},H=document.querySelector(".footer-form"),mt="Escape";function C(){window.addEventListener("keydown",J),u.closeModalBtn.addEventListener("click",I),u.backdrop.addEventListener("click",F),document.body.classList.add("show-modal")}function I(){window.removeEventListener("keydown",J),u.closeModalBtn.removeEventListener("click",I),u.backdrop.removeEventListener("click",F),document.body.classList.remove("show-modal")}function F(s){s.currentTarget===s.target&&I()}function J(s){s.code===mt&&I()}async function ht(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const e={email:t},c={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};await fetch("https://food-boutique.b.goit.study/api/subscription",c).then(o=>{if(o.json(),console.log(o),o.status===409){C(),u.modalImg.style.display="none",u.modalInner.innerHTML=`
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
        </div>`;return}if(o.status===201){C(),u.modalImg.style.display="block",u.modalInner.innerHTML=`
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
          `,H.reset();return}C()}).catch(o=>console.log(o.message))}const y=document.querySelector(".product-card-list");function gt(s){const t=s.target.closest(".product-card-item").dataset.productid;if(s.target.classList.contains("product-card-item")||s.target!==s.currentTarget){if(s.target.nodeName==="use"||s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"){console.log(t),U(t),D(t,"shoppingCartIcon");return}x(s,".product-card-item");return}}function E(s){const{category:t,img:e,name:c,popularity:o,price:n,size:i,_id:r,is10PercentOff:a}=s;return a?`
  <li class="product-card-item discount-list-item" id=${r} data-productId="${r}" >

  <svg class="discount-icon" id=${r}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product-card-wrapper">
        <div class="card-img-wrapper"><img src="${e}" alt="${c}" class="product-card-image"></div>
        <h2 class="product-card-name">${c}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${o}</span>
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
        <div class="card-img-wrapper"><img src="${e}" alt="${c}" class="product-card-image"></div>
        <h2 class="product-card-name">${c}</h2>
        <div class="product-card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${o}</span>
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
  `}async function bt(){(await w.products()).results.map(t=>y.insertAdjacentHTML("beforeend",E(t)))}function yt(s,t){if(y.innerHTML="",s)return s.map(e=>y.insertAdjacentHTML("beforeend",E(e)));if(t)return t.length===0&&window.alert("Oops something went wrong"),t.map(e=>y.insertAdjacentHTML("beforeend",E(e)))}const h=document.querySelector("#dropdownMenu"),z=document.querySelector("#input-filter"),vt=document.querySelector("#filterButt"),v=document.querySelector(".category-content"),wt=document.querySelector(".dropdown-toggle"),L="keyword",V="category";let g=JSON.parse(localStorage.getItem(L)),d=JSON.parse(localStorage.getItem(V));function K(){(g||d)&&(z.value=g,v.textContent=d)}async function Y(){const s=await w.categories();d!==null?v.textContent=d:v.textContent="Categories",h.innerHTML="",s.forEach(async t=>{const e=document.createElement("div");e.className="dropdown-item",e.textContent=t,e.onclick=async function(){d=t,localStorage.setItem(V,JSON.stringify(d)),W()},h.appendChild(e)})}async function W(){h.style.display=h.style.display==="flex"?"none":"flex",d!==null?v.textContent=d:v.textContent="Categories",setTimeout(function(){h.style.opacity=h.style.opacity==="1"?"0":"1"},10)}function $t(s){const t=s.target.value;t?localStorage.setItem(L,JSON.stringify(t)):localStorage.setItem(L,JSON.stringify(null))}async function jt(s){s.preventDefault(),g==""?g=null:g=JSON.parse(localStorage.getItem(L)),console.log(d,g)}K();Y();const G=new p;B();bt();y.addEventListener("click",gt);dt();G.PopularList.addEventListener("click",ut);at();Y();K();yt();G.discountList.addEventListener("click",it);wt.addEventListener("click",W);z.addEventListener("input",$t);vt.addEventListener("click",jt);H.addEventListener("submit",ht);
//# sourceMappingURL=main-b37aef40.js.map
