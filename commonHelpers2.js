import{r as y,b as E,g as T,f as m,l as M,e as _,h as S,d as F,i as W,j as V,a as U,p as G}from"./assets/footer-modal-7456823a.js";import{P as R}from"./assets/vendor-f89adc3e.js";const x=document.querySelector(".error");new y;let r,j,k={limit:null};async function N(e){document.querySelector(".product_card-list").innerHTML="",e.results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",H(t)))}function Y(e){if(e.target.classList.contains("product_card-item")||e.target!==e.currentTarget){let t=setInterval(function(){I(),P()},1e3);if(setTimeout(function(){clearInterval(t)},1e4),e.target.nodeName==="use"||e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"){const s=e.target.closest(".product_card-item").dataset.productid;E(s),r[`btn2${s}`].style.display="none",r[`check1${s}`].style.display="flex";return}T(e,".product_card-item");return}}function H(e){const{category:t,img:s,name:a,popularity:u,price:h,size:v,_id:n,is10PercentOff:D}=e;return D?`
  <li class="product_card-item js-object" id=${n} data-productId="${n}" >

  <svg class="discount-icon" id=${n}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${a}" class="product_card-image"></div>
        <h2 class="product_card-name">${a}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${v}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${u}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${h}</p>
         <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${_}"></use>
                    </svg>
                </button>
                <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${S}"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item js-object" id=${n} data-productId="${n}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${a}" class="product_card-image"></div>
        <h2 class="product_card-name">${a}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${t}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${v}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${u}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${h}</p>
        
        <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${_}"></use>
                    </svg>
                </button>
                <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${S}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}function K(){(window.innerWidth||document.documentElement.clientWidth)>=1440?k={limit:9}:k={limit:6}}async function Q(){K(),j=await m.products(k),j.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",H(e))),r=new y,I()}function I(){let e=M.loadCart();const t=[];"products"in e&&(e=e.products,e.forEach(s=>t.push(s.productId))),j.results.forEach(s=>{t.includes(s._id)?(r[`btn2${s._id}`].style.display="none",r[`check1${s._id}`].style.display="flex"):(r[`check1${s._id}`].style.display="none",r[`btn2${s._id}`].style.display="flex")})}const X="/project-Bpfbt9js/assets/icons-5c405266.svg#arrow";let C,L,b,i;async function Z(){C=new y,C.PopularList.innerHTML="",L=await m.popular(),ae()}function ee(e){b=e.target.closest(".cards-item").dataset.productid,i[`btn1${b}`].style.display="none",i[`check${b}`].style.display="flex",E(b)}function te(e){let t=setInterval(function(){P(),I()},1e3);if(setTimeout(function(){clearInterval(t)},1e4),e.target.classList.contains("js-btn")){ee(e);return}if(!e.target.classList.contains("js-btn")){T(e,".cards-item");return}}function se(e){return e.map(({_id:t,img:s,name:a,category:u,size:h,popularity:v})=>` 
    <li class ="cards-item" data-productid="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${u}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${h}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${v}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${t}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${t}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="${_}"></use>
                    </svg>
                </button>
                <div id="${t}" class="check-btn js-object js-btn" data-jsname="check${t}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="${S}"></use>
                    </svg></div>
               </li>    
                  
`).join("")}async function ae(){try{const e=L;return C.PopularList.insertAdjacentHTML("beforeend",se(e)),i=new y,P(),await e}catch(e){console.log(e.message)}}function P(){let e=M.loadCart();const t=[];"products"in e&&(e=e.products,e.forEach(s=>t.push(s.productId))),L.forEach(s=>{t.includes(s._id)?(i[`btn1${s._id}`].style.display="none",i[`check${s._id}`].style.display="flex"):(i[`check${s._id}`].style.display="none",i[`btn1${s._id}`].style.display="flex")})}function ne(){let e;window.onscroll=function(){e||(e=document.createElement("button"),e.innerHTML=e.innerHTML=`<svg class="" width="16" height="16"><use href="${X}"</use></svg>`,e.classList.add("scrollBtn"),document.body.appendChild(e),e.style.animation="flashing 1s infinite",e.onclick=function(){document.documentElement.scrollTop=0,e.style.display="none"}),window.onscroll=function(){document.documentElement.scrollTop===0?e.style.display="none":e.style.display="flex";var t=document.documentElement.scrollHeight,s=window.innerHeight,a=document.documentElement.scrollTop;a>t/6-s/6?e.style.visibility="visible":e.style.visibility="hidden"}}}let l=JSON.parse(localStorage.getItem("keyword")),$=JSON.parse(localStorage.getItem("category")),d={};const ce=document.getElementById("pagination");function oe(e,t,s){const a={totalItems:e,itemsPerPage:t,visiblePages:5,page:s,centerAlign:!0};new R(ce,a).on("afterMove",re)}async function re(e){const t=e.page;var s=JSON.parse(localStorage.getItem("filters"))||{};s.page=t,l==""?l=null:l=JSON.parse(localStorage.getItem("keyword")),l==null?$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={page:s.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),page:s.page}:$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={keyword:l,page:s.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),keyword:l,page:s.page},console.log(d);const a=await m.products(d);return N(a)}const p=document.querySelector("#dropdownMenu"),O=document.querySelector("#input-filter"),ie=document.querySelector("#filterButt"),f=document.querySelector(".category-content"),le=document.querySelector(".dropdown-toggle"),w="keyword",A="category";let o=JSON.parse(localStorage.getItem(w)),c=JSON.parse(localStorage.getItem(A)),g={};function q(){(o||c)&&(O.value=o,f.textContent=c)}async function J(){let t=(await m.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));t.push("Show all"),c!==null?f.textContent=c:f.textContent="Categories",p.innerHTML="",t.forEach(async s=>{const a=document.createElement("div");a.className="dropdown-item",a.textContent=s,a.onclick=async function(){c=s,localStorage.setItem(A,JSON.stringify(c)),B()},p.appendChild(a)})}async function B(){p.style.display=p.style.display==="flex"?"none":"flex",c!==null?f.textContent=c:f.textContent="Categories",setTimeout(function(){p.style.opacity=p.style.opacity==="1"?"0":"1"},10)}function de(e){const t=e.target.value;t?localStorage.setItem(w,JSON.stringify(t)):localStorage.setItem(w,JSON.stringify(null))}async function pe(e){e.preventDefault(),o==""?o=null:o=JSON.parse(localStorage.getItem(w)),o==null?c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_")}:c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={keyword:o}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_"),keyword:o};const t=await m.products(g);return t.results.length===0?x.style.display="flex":x.style.display="none",oe(t.perPage*t.totalPages,t.perPage,t.page),N(t)}q();J();const z=new y;F();Q();document.querySelector(".product_card-list").addEventListener("click",Y);Z();z.PopularList.addEventListener("click",te);W();J();q();z.discountList.addEventListener("click",V);le.addEventListener("click",B);O.addEventListener("input",de);ie.addEventListener("click",pe);U.addEventListener("submit",G);ne();
//# sourceMappingURL=commonHelpers2.js.map
