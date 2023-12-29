import{a as m,b as tt}from"./vendor-7ba42fd8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=e(a);fetch(a.href,n)}})();class u{constructor(){const t=document.querySelectorAll(".js-object");for(let e=0;e<t.length;e++)"dataset"in t[e]&&"jsname"in t[e].dataset&&(this[t[e].dataset.jsname]=t[e])}refresh(){for(var t in this)t in this&&delete this[t];const e=document.querySelectorAll(".js-object");for(let o=0;o<e.length;o++)"dataset"in e[o]&&"jsname"in e[o].dataset&&(this[e[o].dataset.jsname]=e[o])}}const v={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await m.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await m.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await m.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await m.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(e){throw e}},products:async function(t={}){try{const e={params:t};return(await m.get(this._baseURL+this._productsURL,e)).data}catch(e){throw e}},subscribe:async function(t){try{const e={email:t};return(await m.post(this._baseURL+this._subscriptionURL,e)).data}catch(e){throw e}},order:async function(t){try{return(await m.post(this._baseURL+this._orderURL,t)).data}catch(e){throw e}}},l={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,e){try{const o=JSON.stringify(e);localStorage.setItem(t,o)}catch(o){throw o}},_load:function(t){try{const e=localStorage.getItem(t);return e===null?{}:JSON.parse(e)}catch(e){throw e}},_delete:function(t){try{localStorage.removeItem(t)}catch(e){throw e}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t),rt("discountIcon"),H()},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}};function st(s,t){const e=tt.create(s,{onShow:a=>{document.addEventListener("keydown",o),a.element().querySelector(t).onclick=a.close},onClose:()=>{document.removeEventListener("keydown",o)}});function o(a){a.key==="Escape"&&e.close()}e.show()}const et="/project-Bpfbt9js/assets/icons-03dfadd1.svg#close-icon",ot="/project-Bpfbt9js/assets/icons-03dfadd1.svg#shopping-cart-icon";async function x(s,t){const o=s.target.closest(t).dataset.productid,{name:a,desc:n,img:i,category:r,price:c,size:_,popularity:Q}=await v.product(o);let O="Add to",R=l.loadCart();"products"in R&&R.products.findIndex(w=>w.productId===o)!==-1&&(O="Remove from");const X=`<div class="container">
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
              <span class="modal-product-prop-span">${r}</span>
            </p>
            <p class="modal-product-prop">
              Size:
              <span class="modal-product-prop-span">${_}</span>
            </p>
            </div>
            <p class="modal-product-prop">
              Popularity: <span class="modal-product-prop-span">${Q}</span>
            </p>       
          <p class="modal-product-prop-dscr">${n}</p>
        </div>
      </div>
      <div class="modal-product-bottom">
        <p class="modal-product-price">$${c}</p>
        <button class="modal-product-cart js-modal-product-cart" type="button">
          <span class="baskettext">${O}</span> <svg class="modal-product-icon-basket" width="18" height="18">
              <use href="${ot}"></use>
            </svg>
        </button>
      </div>
    </div>
    </div>`;st(X,".js-modal-close"),document.querySelector(".js-modal-product-cart").addEventListener("click",P=>{const w=P.target.closest(".modal-product-cart");let f=l.loadCart(),A=!0;if("products"in f){const q=f.products.findIndex(Z=>Z.productId===o);q!==-1&&(f.products.splice(q,1),w.querySelector(".baskettext").innerHTML="Add to",A=!1)}A&&("products"in f?f.products.push({productId:o,amount:1}):f={email:"",products:[{productId:o,amount:1}]},w.querySelector(".baskettext").innerHTML="Remove from"),l.saveCart(f)})}const at="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-icon",M="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-cart",T="/project-Bpfbt9js/assets/icons-03dfadd1.svg#discount-checked";async function ct(){const t=new u;t.discountList.innerHTML="";const e=await v.discount(),o=[];let a=0;for(e.length<2?a=e.length:a=2;a>0;a--){let c=Math.floor(Math.random()*e.length);o.push(e[c]),e.splice(c,1)}let n=l.loadCart();const i=[];"products"in n&&(n=n.products,n.forEach(c=>i.push(c.productId)));const r=[];o.forEach(c=>{let _=M;i.includes(c._id)&&(_=T),r.push(`
        <li class="discount-list-item discount-show" data-productId="${c._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${c._id}">
              <use href="${at}" class="discount-show"  data-productId="${c._id}"></use>
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
                    <use href="${_}" class="js-object discount-buy" data-jsname="discountIcon${c._id}" data-productId="${c._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",r.join(""))}function D(s){let t=l.loadCart(),e=!1;return"products"in t&&t.products.forEach(o=>{if(o.productId===s){e=!0;return}}),e}function U(s){let t=l.loadCart();D(s)||("products"in t?t.products.push({productId:s,amount:1}):t={email:"",products:[{productId:s,amount:1}]},l.saveCart(t))}function B(s,t){const e=new u;e[`${t}${s}`].href.baseVal===`${M}`&&(e[`${t}${s}`].href.baseVal=`${T}`)}function nt(s,t){const e=new u;e[`${t}${s}`].href.baseVal===`${T}`&&(e[`${t}${s}`].href.baseVal=`${M}`)}function rt(s){const t=new u;for(var e in t)if(e.indexOf(s)===0){let o=t[e].dataset.productid;D(o)?B(o,s):nt(o,s)}}function it(s){s.target.classList.contains("discount-buy")?U(s.target.dataset.productid):s.target.classList.contains("discount-show")&&x(s,".discount-show")}function H(){const s=new u;let t=0,e=l.loadCart();"products"in e&&(t=e.products.length),console.log(t),s.headerCartNumber.textContent=t}let k,S,$,b;async function dt(){k=new u,k.PopularList.innerHTML="",S=await v.popular(),ft()}function lt(s){$=s.target.closest(".cards-item").dataset.productid,b[`btn1${$}`].style.display="none",b[`check${$}`].style.display="flex",U($)}function ut(s){if(s.target.classList.contains("js-btn")){lt(s);return}if(!s.target.classList.contains("js-btn")){x(s,".cards-item");return}}function pt(s){return s.map(({_id:t,img:e,name:o,category:a,size:n,popularity:i})=>` 
    <li class ="cards-item" data-productid="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${e}" alt="${o}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${o}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${a}</span>
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
               
    
`).join("")}async function ft(){try{const s=S;k.PopularList.insertAdjacentHTML("beforeend",pt(s)),b=new u;let t=l.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(a=>e.push(a.productId)));const o=[];return S.forEach(a=>{e.includes(a._id)&&(b[`btn1${a._id}`].style.display="none",b[`check${a._id}`].style.display="flex")}),await s}catch(s){console.log(s.message)}}const p={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-backdrop"),modalImg:document.querySelector(".modal__food-basket"),modalInner:document.querySelector(".modal-inner")},F=document.querySelector(".footer-form"),mt="Escape";function C(){window.addEventListener("keydown",z),p.closeModalBtn.addEventListener("click",I),p.backdrop.addEventListener("click",J),document.body.classList.add("show-modal")}function I(){window.removeEventListener("keydown",z),p.closeModalBtn.removeEventListener("click",I),p.backdrop.removeEventListener("click",J),document.body.classList.remove("show-modal")}function J(s){s.currentTarget===s.target&&I()}function z(s){s.code===mt&&I()}async function ht(s){s.preventDefault();const t=s.target.elements.email.value;console.log(t);const e={email:t},o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};await fetch("https://food-boutique.b.goit.study/api/subscription",o).then(a=>{if(a.json(),console.log(a),a.status===409){C(),p.modalImg.style.display="none",p.modalInner.innerHTML=`
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
        </div>`;return}if(a.status===201){C(),p.modalImg.style.display="block",p.modalInner.innerHTML=`
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
          `,F.reset();return}C()}).catch(a=>console.log(a.message))}const j=new u;function gt(s){const t=s.target.closest(".product_card-item").dataset.productid;if(s.target.classList.contains("product_card-item")||s.target!==s.currentTarget){if(s.target.nodeName==="use"||s.target.nodeName==="BUTTON"||s.target.nodeName==="svg"){console.log(t),U(t),B(t,"shoppingCartIcon");return}x(s,".product_card-item");return}}function E(s){const{category:t,img:e,name:o,popularity:a,price:n,size:i,_id:r,is10PercentOff:c}=s;return c?`
  <li class="product_card-item discount-list-item" id=${r} data-productId="${r}" >

  <svg class="discount-icon" id=${r}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${e}" alt="${o}" class="product_card-image"></div>
        <h2 class="product_card-name">${o}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${a}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${n}</p>
         <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${r}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
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
  <li class="product_card-item discount-list-item" id=${r} data-productId="${r}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${e}" alt="${o}" class="product_card-image"></div>
        <h2 class="product_card-name">${o}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${i}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${a}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${n}</p>
        
        <button id="${r}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn1${r}"  type="button">
                    <svg class="card_buy-icon-svg js-btn js-object"  data-jsname="btn" width="12" height="12">
                        <use class="js-btn" href="./img/icons.svg#shopping-cart-icon"></use>
                    </svg>
                </button>
                <div id="${r}" class="check-btn js-object" data-jsname="check${r}" >
                <svg data-jsname="check1" class="check-icon-svg  discount-buy js-object" width="12" height="12">
                        <use href="./img/icons.svg#check-mark-icon"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function bt(){(await v.products()).results.map(t=>j.productsList.insertAdjacentHTML("beforeend",E(t)))}function yt(s,t){if(j.productsList.innerHTML="",s)return s.map(e=>j.productsList.insertAdjacentHTML("beforeend",E(e)));if(t)return t.length===0&&window.alert("Oops something went wrong"),t.map(e=>j.productsList.insertAdjacentHTML("beforeend",E(e)))}const h=document.querySelector("#dropdownMenu"),V=document.querySelector("#input-filter"),vt=document.querySelector("#filterButt"),y=document.querySelector(".category-content"),_t=document.querySelector(".dropdown-toggle"),L="keyword",K="category";let g=JSON.parse(localStorage.getItem(L)),d=JSON.parse(localStorage.getItem(K));function Y(){(g||d)&&(V.value=g,y.textContent=d)}async function W(){let t=(await v.categories()).map(e=>e.replace("_"," ").replace("&","/").replace("_"," "));d!==null?y.textContent=d:y.textContent="Categories",h.innerHTML="",t.forEach(async e=>{const o=document.createElement("div");o.className="dropdown-item",o.textContent=e,o.onclick=async function(){d=e.replace(" ","_").replace("/","&").replace(" ","_"),localStorage.setItem(K,JSON.stringify(d)),G()},h.appendChild(o)})}async function G(){h.style.display=h.style.display==="flex"?"none":"flex",d!==null?y.textContent=d:y.textContent="Categories",setTimeout(function(){h.style.opacity=h.style.opacity==="1"?"0":"1"},10)}function wt(s){const t=s.target.value;t?localStorage.setItem(L,JSON.stringify(t)):localStorage.setItem(L,JSON.stringify(null))}async function $t(s){s.preventDefault(),g==""?g=null:g=JSON.parse(localStorage.getItem(L)),console.log(d,g)}Y();W();const N=new u;H();bt();N.productsList.addEventListener("click",gt);dt();N.PopularList.addEventListener("click",ut);ct();W();Y();yt();N.discountList.addEventListener("click",it);_t.addEventListener("click",G);V.addEventListener("input",wt);vt.addEventListener("click",$t);F.addEventListener("submit",ht);
//# sourceMappingURL=main-6fde556f.js.map
