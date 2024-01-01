import{r as y,b as x,g as E,f as m,l as T,e as w,h as S,d as D,i as F,j as U,a as V,p as G}from"./assets/footer-modal-dc986a11.js";import{P as R}from"./assets/vendor-f89adc3e.js";const P=document.querySelector(".error");new y;let r,j;async function M(e){document.querySelector(".product_card-list").innerHTML="",e.results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",N(t)))}function Y(e){if(e.target.classList.contains("product_card-item")||e.target!==e.currentTarget){let t=setInterval(function(){C(),L()},1e3);if(setTimeout(function(){clearInterval(t)},1e4),e.target.nodeName==="use"||e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"){const s=e.target.closest(".product_card-item").dataset.productid;x(s),r[`btn2${s}`].style.display="none",r[`check1${s}`].style.display="flex";return}E(e,".product_card-item");return}}function N(e){const{category:t,img:s,name:a,popularity:u,price:h,size:b,_id:n,is10PercentOff:z}=e;return z?`
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
                Size:<span class="info-span">${b}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${u}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${h}</p>
         <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${w}"></use>
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
                Size:<span class="info-span">${b}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${u}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${h}</p>
        
        <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${w}"></use>
                    </svg>
                </button>
                <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${S}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function K(){j=await m.products(),j.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",N(e))),r=new y,C()}function C(){let e=T.loadCart();const t=[];"products"in e&&(e=e.products,e.forEach(s=>t.push(s.productId))),j.results.forEach(s=>{t.includes(s._id)?(r[`btn2${s._id}`].style.display="none",r[`check1${s._id}`].style.display="flex"):(r[`check1${s._id}`].style.display="none",r[`btn2${s._id}`].style.display="flex")})}const Q="/project-Bpfbt9js/assets/icons-5c405266.svg#arrow";let k,I,v,i;async function W(){k=new y,k.PopularList.innerHTML="",I=await m.popular(),te()}function X(e){v=e.target.closest(".cards-item").dataset.productid,i[`btn1${v}`].style.display="none",i[`check${v}`].style.display="flex",x(v)}function Z(e){let t=setInterval(function(){L(),C()},1e3);if(setTimeout(function(){clearInterval(t)},1e4),e.target.classList.contains("js-btn")){X(e);return}if(!e.target.classList.contains("js-btn")){E(e,".cards-item");return}}function ee(e){return e.map(({_id:t,img:s,name:a,category:u,size:h,popularity:b})=>` 
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
                            Popularity:<span class="info-span">${b}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${t}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${t}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="${w}"></use>
                    </svg>
                </button>
                <div id="${t}" class="check-btn js-object js-btn" data-jsname="check${t}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="${S}"></use>
                    </svg></div>
               </li>    
                  
`).join("")}async function te(){try{const e=I;return k.PopularList.insertAdjacentHTML("beforeend",ee(e)),i=new y,L(),await e}catch(e){console.log(e.message)}}function L(){let e=T.loadCart();const t=[];"products"in e&&(e=e.products,e.forEach(s=>t.push(s.productId))),I.forEach(s=>{t.includes(s._id)?(i[`btn1${s._id}`].style.display="none",i[`check${s._id}`].style.display="flex"):(i[`check${s._id}`].style.display="none",i[`btn1${s._id}`].style.display="flex")})}function se(){let e;window.onscroll=function(){e||(e=document.createElement("button"),e.innerHTML=e.innerHTML=`<svg class="" width="16" height="16"><use href="${Q}"</use></svg>`,e.classList.add("scrollBtn"),document.body.appendChild(e),e.style.animation="flashing 1s infinite",e.onclick=function(){document.documentElement.scrollTop=0,e.style.display="none"}),window.onscroll=function(){document.documentElement.scrollTop===0?e.style.display="none":e.style.display="flex";var t=document.documentElement.scrollHeight,s=window.innerHeight,a=document.documentElement.scrollTop;a>t/6-s/6?e.style.visibility="visible":e.style.visibility="hidden"}}}let l=JSON.parse(localStorage.getItem("keyword")),$=JSON.parse(localStorage.getItem("category")),d={};const ae=document.getElementById("pagination");function ne(e,t,s){const a={totalItems:e,itemsPerPage:t,visiblePages:5,page:s,centerAlign:!0};new R(ae,a).on("afterMove",ce)}async function ce(e){const t=e.page;var s=JSON.parse(localStorage.getItem("filters"))||{};s.page=t,l==""?l=null:l=JSON.parse(localStorage.getItem("keyword")),l==null?$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={page:s.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),page:s.page}:$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={keyword:l,page:s.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),keyword:l,page:s.page},console.log(d);const a=await m.products(d);return M(a)}const p=document.querySelector("#dropdownMenu"),H=document.querySelector("#input-filter"),oe=document.querySelector("#filterButt"),f=document.querySelector(".category-content"),re=document.querySelector(".dropdown-toggle"),_="keyword",O="category";let o=JSON.parse(localStorage.getItem(_)),c=JSON.parse(localStorage.getItem(O)),g={};function A(){(o||c)&&(H.value=o,f.textContent=c)}async function q(){let t=(await m.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));t.push("Show all"),c!==null?f.textContent=c:f.textContent="Categories",p.innerHTML="",t.forEach(async s=>{const a=document.createElement("div");a.className="dropdown-item",a.textContent=s,a.onclick=async function(){c=s,localStorage.setItem(O,JSON.stringify(c)),J()},p.appendChild(a)})}async function J(){p.style.display=p.style.display==="flex"?"none":"flex",c!==null?f.textContent=c:f.textContent="Categories",setTimeout(function(){p.style.opacity=p.style.opacity==="1"?"0":"1"},10)}function ie(e){const t=e.target.value;t?localStorage.setItem(_,JSON.stringify(t)):localStorage.setItem(_,JSON.stringify(null))}async function le(e){e.preventDefault(),o==""?o=null:o=JSON.parse(localStorage.getItem(_)),o==null?c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_")}:c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={keyword:o}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_"),keyword:o};const t=await m.products(g);return t.results.length===0?P.style.display="flex":P.style.display="none",ne(t.perPage*t.totalPages,t.perPage,t.page),M(t)}A();q();const B=new y;D();K();document.querySelector(".product_card-list").addEventListener("click",Y);W();B.PopularList.addEventListener("click",Z);F();q();A();B.discountList.addEventListener("click",U);re.addEventListener("click",J);H.addEventListener("input",ie);oe.addEventListener("click",le);V.addEventListener("submit",G);se();
//# sourceMappingURL=commonHelpers2.js.map
