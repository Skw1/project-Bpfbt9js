import{a}from"./vendor-a61d8330.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerpolicy&&(i.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?i.credentials="include":c.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(c){if(c.ep)return;c.ep=!0;const i=s(c);fetch(c.href,i)}})();class u{constructor(){const t=document.querySelectorAll(".js-object");for(let s=0;s<t.length;s++)"dataset"in t[s]&&"jsname"in t[s].dataset&&(this[t[s].dataset.jsname]=t[s])}refresh(){for(var t in this)t in this&&delete this[t];const s=document.querySelectorAll(".js-object");for(let r=0;r<s.length;r++)"dataset"in s[r]&&"jsname"in s[r].dataset&&(this[s[r].dataset.jsname]=s[r])}}const _={_baseURL:"https://food-boutique.b.goit.study/api",_categoriesURL:"/products/categories",_productsURL:"/products",_popularURL:"/products/popular",_discountURL:"/products/discount",_subscriptionURL:"/subscription",_orderURL:"/orders",categories:async function(){try{return(await a.get(this._baseURL+this._categoriesURL)).data}catch(t){throw t}},popular:async function(){try{return(await a.get(this._baseURL+this._popularURL)).data}catch(t){throw t}},discount:async function(){try{return(await a.get(this._baseURL+this._discountURL)).data}catch(t){throw t}},product:async function(t){try{return(await a.get(this._baseURL+this._productsURL+`/${t}`)).data}catch(s){throw s}},products:async function(t={}){try{const s={params:t};return(await a.get(this._baseURL+this._productsURL,s)).data}catch(s){throw s}},subscribe:async function(t){try{const s={email:t};return(await a.post(this._baseURL+this._subscriptionURL,s)).data}catch(s){throw s}},order:async function(t){try{return(await a.post(this._baseURL+this._orderURL,t)).data}catch(s){throw s}}},d={_filterID:"filter-project-Bpfbt9js",_cartID:"cart-project-Bpfbt9js",_save:function(t,s){try{const r=JSON.stringify(s);localStorage.setItem(t,r)}catch(r){throw r}},_load:function(t){try{const s=localStorage.getItem(t);return s===null?{}:JSON.parse(s)}catch(s){throw s}},_delete:function(t){try{localStorage.removeItem(t)}catch(s){throw s}},saveFilter:function(t){this._save(this._filterID,t)},loadFilter:function(){return this._load(this._filterID)},deleteFilter:function(){this._delete(this._filterID)},saveCart:function(t){this._save(this._cartID,t)},loadCart:function(){return this._load(this._cartID)},deleteCart:function(){this._delete(this._cartID)}},g="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-icon",f="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-cart",p="/project-Bpfbt9js/assets/icons-5dbc4c13.svg#discount-checked";async function b(){const t=new u;t.discountList.innerHTML="";const s=await _.discount(),r=[];let c=0;for(s.length<2?c=s.length:c=2;c>0;c--){let o=Math.floor(Math.random()*s.length);r.push(s[o]),s.splice(o,1)}let i=d.loadCart();const n=[];"products"in i&&(i=i.products,i.forEach(o=>n.push(o.productId)));const l=[];r.forEach(o=>{let h=f;n.includes(o._id)&&(h=p),l.push(`
        <li class="discount-list-item discount-show" data-productId="${o._id}">
            <svg width="60" height="60" class="discount-icon discount-show"  data-productId="${o._id}">
              <use href="${g}" class="discount-show"  data-productId="${o._id}"></use>
            </svg>
            <div class="discount-image-box discount-show"  data-productId="${o._id}">
              <img
                class="discount-image discount-show"
                src="${o.img}"
                width="114"
                height="114"
                alt="${o.name}"
                data-productId="${o._id}"
              />
            </div>
            <div class="discount-description discount-show"  data-productId="${o._id}">
              <p class="discount-title discount-show"  data-productId="${o._id}">${o.name}</p>
              <div class="discount-description-price discount-show"  data-productId="${o._id}">
                <span class="discount-price discount-show"  data-productId="${o._id}">$${o.price}</span>
                <button type="button" class="discount-icon-box discount-buy" data-productId="${o._id}">
                  <svg width="18" height="18" class="discount-cart discount-buy" data-productId="${o._id}">
                    <use href="${h}" class="js-object discount-buy" data-jsname="discountIcon${o._id}" data-productId="${o._id}"></use>
                  </svg>
                </button>
              </div>
            </div>
         </li>
        `)}),t.discountList.insertAdjacentHTML("beforeend",l.join(""))}function m(e){let t=d.loadCart(),s=!0;"products"in t&&t.products.forEach(r=>{if(r.productId===e){s=!1;return}}),s&&("products"in t?t.products.push({productId:e,amount:1}):t={email:"",products:[{productId:e,amount:1}]},d.saveCart(t))}function I(e,t){const s=new u;s[`${t}${e}`].href.baseVal===`${f}`&&(s[`${t}${e}`].href.baseVal=`${p}`)}function y(e){e.target.classList.contains("discount-buy")?(m(e.target.dataset.productid),I(e.target.dataset.productid,"discountIcon")):e.target.classList.contains("discount-show")}b();const w=new u;w.discountList.addEventListener("click",y);
//# sourceMappingURL=main-39ceaaf7.js.map
