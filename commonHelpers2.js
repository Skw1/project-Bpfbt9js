import{r as g,b as P,g as x,f as m,l as L,e as w,h as S,d as W,i as z,j as D,a as F,p as V}from"./assets/footer-modal-f1da27fc.js";import{P as U}from"./assets/vendor-f89adc3e.js";const I=document.querySelector(".error");new g;let l,v,b={limit:null};async function E(e){document.querySelector(".product_card-list").innerHTML="",e.results.map(a=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",N(a))),l=new g,v=e,_()}function G(e){if(e.target.classList.contains("product_card-item")||e.target!==e.currentTarget){let a=setInterval(function(){_(),C()},1e3);if(setTimeout(function(){clearInterval(a)},1e4),e.target.nodeName==="use"||e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"){const t=e.target.closest(".product_card-item").dataset.productid;P(t),l[`btn2${t}`].style.display="none",l[`check1${t}`].style.display="flex";return}x(e,".product_card-item");return}}function N(e){const{category:a,img:t,name:s,popularity:n,price:i,size:p,_id:c,is10PercentOff:B}=e;return B?`
  <li class="product_card-item js-object" id=${c} data-productId="${c}" >
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${t}" alt="${s}" class="product_card-image"></div>
        <h2 class="product_card-name">${s}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${a}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${p}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${n}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${i}</p>
         <button id="${c}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${c}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${w}"></use>
                    </svg>
                </button>
                <div id="${c}" class="check js-object" data-jsname="check1${c}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${S}"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item js-object" id=${c} data-productId="${c}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${t}" alt="${s}" class="product_card-image"></div>
        <h2 class="product_card-name">${s}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${a}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${p}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${n}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${i}</p>
        
        <button id="${c}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${c}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${w}"></use>
                    </svg>
                </button>
                <div id="${c}" class="check js-object" data-jsname="check1${c}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${S}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}function T(){let e=window.innerWidth||document.documentElement.clientWidth;e>=1440?b={limit:9}:e<1440&&e>768?b={limit:8}:b={limit:6}}async function R(){T(),v=await m.products(b),v.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",N(e))),l=new g,_()}function _(){let e=L.loadCart();const a=[];"products"in e&&(e=e.products,e.forEach(t=>a.push(t.productId))),v.results.forEach(t=>{a.includes(t._id)?(l[`btn2${t._id}`].style.display="none",l[`check1${t._id}`].style.display="flex"):(l[`check1${t._id}`].style.display="none",l[`btn2${t._id}`].style.display="flex")})}let j,k,h,d;async function Y(){j=new g,j.PopularList.innerHTML="",k=await m.popular(),Z()}function K(e){h=e.target.closest(".cards-item").dataset.productid,d[`btn1${h}`].style.display="none",d[`check${h}`].style.display="flex",P(h)}function Q(e){let a=setInterval(function(){C(),_()},1e3);if(setTimeout(function(){clearInterval(a)},1e4),e.target.classList.contains("js-btn")){K(e);return}if(!e.target.classList.contains("js-btn")){x(e,".cards-item");return}}function X(e){return e.map(({_id:a,img:t,name:s,category:n,size:i,popularity:p})=>` 
    <li class ="cards-item" data-productid="${a}" >
        <div id ="${a}" class="photo-card">
                    <img class = "cards__image" src="${t}" alt="${s}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${s}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${n}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${i}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${p}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${a}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${a}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="${w}"></use>
                    </svg>
                </button>
                <div id="${a}" class="check-btn js-object js-btn" data-jsname="check${a}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="${S}"></use>
                    </svg></div>
               </li>    
                  
`).join("")}async function Z(){try{const e=k;return j.PopularList.insertAdjacentHTML("beforeend",X(e)),d=new g,C(),await e}catch(e){console.log(e.message)}}function C(){let e=L.loadCart();const a=[];"products"in e&&(e=e.products,e.forEach(t=>a.push(t.productId))),k.forEach(t=>{a.includes(t._id)?(d[`btn1${t._id}`].style.display="none",d[`check${t._id}`].style.display="flex"):(d[`check${t._id}`].style.display="none",d[`btn1${t._id}`].style.display="flex")})}const ee=document.getElementById("pagination");function te(e,a,t){const s={totalItems:e,itemsPerPage:a,visiblePages:5,page:t,centerAlign:!0};new U(ee,s).on("afterMove",ae)}async function ae(e){const a=e.page;let t=JSON.parse(localStorage.getItem("keyword")),s=JSON.parse(localStorage.getItem("category")),n={};var i=JSON.parse(localStorage.getItem("filters"))||{};i.page=a,t==""?t=null:t=JSON.parse(localStorage.getItem("keyword")),t==null?s.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?n={page:i.page}:n={category:s.replace(" ","_").replace("/","&").replace(" ","_"),page:i.page}:s.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?n={keyword:t,page:i.page}:n={category:s.replace(" ","_").replace("/","&").replace(" ","_"),keyword:t,page:i.page},console.log(n);const p=await m.products(n);return E(p)}const u=document.querySelector("#dropdownMenu"),O=document.querySelector("#input-filter"),se=document.querySelector("#filterButt"),y=document.querySelector(".category-content"),ne=document.querySelector(".dropdown-toggle"),$="keyword",A="category";let o=JSON.parse(localStorage.getItem($)),r=JSON.parse(localStorage.getItem(A)),f={};function M(){(o||r)&&(O.value=o,y.textContent=r)}async function q(){let a=(await m.categories()).map(t=>t.replace("_"," ").replace("&","/").replace("_"," "));a.push("Show all"),r!==null?y.textContent=r:y.textContent="Categories",u.innerHTML="",a.forEach(async t=>{const s=document.createElement("div");s.className="dropdown-item",s.textContent=t,s.onclick=async function(){r=t,localStorage.setItem(A,JSON.stringify(r)),H()},u.appendChild(s)})}async function H(){u.style.display=u.style.display==="flex"?"none":"flex",r!==null?y.textContent=r:y.textContent="Categories",setTimeout(function(){u.style.opacity=u.style.opacity==="1"?"0":"1"},10)}function ce(e){const a=e.target.value;a?localStorage.setItem($,JSON.stringify(a)):localStorage.setItem($,JSON.stringify(null))}async function re(e){e.preventDefault(),o==""?o=null:o=JSON.parse(localStorage.getItem($));let a=window.innerWidth||document.documentElement.clientWidth,t="";a>=1440?t=9:a<1440&&a>768?t=8:t=6,o==null?r.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?f={limit:t}:f={category:r.replace(" ","_").replace("/","&").replace(" ","_"),limit:t}:r.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?f={keyword:o,limit:t}:f={category:r.replace(" ","_").replace("/","&").replace(" ","_"),keyword:o,limit:t};const s=await m.products(f);return s.results.length===0?I.style.display="flex":I.style.display="none",te(s.perPage*s.totalPages,s.perPage,s.page),E(s)}M();q();const J=new g;T();W();R();document.querySelector(".product_card-list").addEventListener("click",G);Y();J.PopularList.addEventListener("click",Q);z();q();M();J.discountList.addEventListener("click",D);ne.addEventListener("click",H);O.addEventListener("input",ce);se.addEventListener("click",re);F.addEventListener("submit",V);
//# sourceMappingURL=commonHelpers2.js.map
