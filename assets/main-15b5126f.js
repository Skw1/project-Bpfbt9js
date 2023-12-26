import{a as c}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();class u{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let o=0;o<s.length;o++)"dataset"in s[o]&&"jsname"in s[o].dataset&&(this[s[o].dataset.jsname]=s[o])}}const _={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await c.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await c.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await c.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await c.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await c.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await c.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await c.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},d={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const o=JSON.stringify(s);localStorage.setItem(t,o)}catch(o){throw o}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},f="../img/icons.svg#discount-cart",p="../img/icons.svg#discount-checked";async function g(){const t=new u;t.discountList.innerHTML="";const s=await _.discount(),o=[];let i=0;for(s.length<2?i=s.length:i=2;i>0;i--){let r=Math.floor(Math.random()*s.length);o.push(s[r]),s.splice(r,1)}let a=d.loadCart();const n=[];"products"in a&&(a=a.products,a.forEach(r=>n.push(r.productId)));const l=[];o.forEach(r=>{let h=f;n.includes(r._id)&&(h=p),l.push(`
        <li class="discount-list-item discount-show" data-productId="${r._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${r._id}">
              <use href="../img/icons.svg#discount-icon" class="discount-show"  data-productId="${r._id}"></use>
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
                <div class="discount-icon-box discount-buy" data-productId="${r._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${r._id}">
                    <use href="${h}" class="js-object discount-buy" data-jsname="disIcon${r._id}" data-productId="${r._id}"></use>
                  </svg>
                </div>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",l.join(""))}function m(e){let t=d.loadCart(),s=!0;if("products"in t&&t.products.forEach(o=>{if(o.productId===e){s=!1;return}}),s){"products"in t?t.products.push({productId:e,amount:1}):t={email:"",products:[{productId:e,amount:1}]},d.saveCart(t);const o=new u;o[`disIcon${e}`].href.baseVal===f&&(o[`disIcon${e}`].href.baseVal=p)}}function I(e){e.target.classList.contains("discount-buy")?m(e.target.dataset.productid):e.target.classList.contains("discount-show")}g();const w=new u;w.discountList.addEventListener("click",I);
//# sourceMappingURL=main-15b5126f.js.map
