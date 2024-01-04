import{r as y,b as E,g as N,f as m,l as T,e as S,h as j,d as F,i as V,j as U,a as G,p as R}from"./assets/footer-modal-7f5e354d.js";import{P as Y}from"./assets/vendor-f89adc3e.js";const L=document.querySelector(".error");new y;let i,k,_={limit:null};async function O(e){document.querySelector(".product_card-list").innerHTML="",e.results.map(a=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",A(a)))}function K(e){if(e.target.classList.contains("product_card-item")||e.target!==e.currentTarget){let a=setInterval(function(){I(),x()},1e3);if(setTimeout(function(){clearInterval(a)},1e4),e.target.nodeName==="use"||e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"){const t=e.target.closest(".product_card-item").dataset.productid;E(t),i[`btn2${t}`].style.display="none",i[`check1${t}`].style.display="flex";return}N(e,".product_card-item");return}}function A(e){const{category:a,img:t,name:s,popularity:u,price:h,size:b,_id:n,is10PercentOff:D}=e;return D?`
  <li class="product_card-item js-object" id=${n} data-productId="${n}" >
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${t}" alt="${s}" class="product_card-image"></div>
        <h2 class="product_card-name">${s}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${a}</span>
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
                        <use class="js-btn" href="${S}"></use>
                    </svg>
                </button>
                <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${j}"></use>
                    </svg></div>
        </div>
        </div>
    </li>
  `:`
  <li class="product_card-item js-object" id=${n} data-productId="${n}" >

       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${t}" alt="${s}" class="product_card-image"></div>
        <h2 class="product_card-name">${s}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${a}</span>
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
                        <use class="js-btn" href="${S}"></use>
                    </svg>
                </button>
                <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${j}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}function M(){let e=window.innerWidth||document.documentElement.clientWidth;e>=1440?_={limit:9}:e<1440&&e>768?_={limit:8}:_={limit:6}}async function Q(){M(),k=await m.products(_),k.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",A(e))),i=new y,I()}function I(){let e=T.loadCart();const a=[];"products"in e&&(e=e.products,e.forEach(t=>a.push(t.productId))),k.results.forEach(t=>{a.includes(t._id)?(i[`btn2${t._id}`].style.display="none",i[`check1${t._id}`].style.display="flex"):(i[`check1${t._id}`].style.display="none",i[`btn2${t._id}`].style.display="flex")})}let C,P,v,o;async function X(){C=new y,C.PopularList.innerHTML="",P=await m.popular(),ae()}function Z(e){v=e.target.closest(".cards-item").dataset.productid,o[`btn1${v}`].style.display="none",o[`check${v}`].style.display="flex",E(v)}function ee(e){let a=setInterval(function(){x(),I()},1e3);if(setTimeout(function(){clearInterval(a)},1e4),e.target.classList.contains("js-btn")){Z(e);return}if(!e.target.classList.contains("js-btn")){N(e,".cards-item");return}}function te(e){return e.map(({_id:a,img:t,name:s,category:u,size:h,popularity:b})=>` 
    <li class ="cards-item" data-productid="${a}" >
        <div id ="${a}" class="photo-card">
                    <img class = "cards__image" src="${t}" alt="${s}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${s}</h3>      
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
               <button id="${a}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${a}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="${S}"></use>
                    </svg>
                </button>
                <div id="${a}" class="check-btn js-object js-btn" data-jsname="check${a}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="${j}"></use>
                    </svg></div>
               </li>    
                  
`).join("")}async function ae(){try{const e=P;return C.PopularList.insertAdjacentHTML("beforeend",te(e)),o=new y,x(),await e}catch(e){console.log(e.message)}}function x(){let e=T.loadCart();const a=[];"products"in e&&(e=e.products,e.forEach(t=>a.push(t.productId))),P.forEach(t=>{a.includes(t._id)?(o[`btn1${t._id}`].style.display="none",o[`check${t._id}`].style.display="flex"):(o[`check${t._id}`].style.display="none",o[`btn1${t._id}`].style.display="flex")})}let l=JSON.parse(localStorage.getItem("keyword")),$=JSON.parse(localStorage.getItem("category")),d={};const se=document.getElementById("pagination");function ne(e,a,t){const s={totalItems:e,itemsPerPage:a,visiblePages:5,page:t,centerAlign:!0};new Y(se,s).on("afterMove",ce)}async function ce(e){const a=e.page;var t=JSON.parse(localStorage.getItem("filters"))||{};t.page=a,l==""?l=null:l=JSON.parse(localStorage.getItem("keyword")),l==null?$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={page:t.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),page:t.page}:$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={keyword:l,page:t.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),keyword:l,page:t.page},console.log(d);const s=await m.products(d);return O(s)}const p=document.querySelector("#dropdownMenu"),q=document.querySelector("#input-filter"),re=document.querySelector("#filterButt"),f=document.querySelector(".category-content"),ie=document.querySelector(".dropdown-toggle"),w="keyword",H="category";let r=JSON.parse(localStorage.getItem(w)),c=JSON.parse(localStorage.getItem(H)),g={};function J(){(r||c)&&(q.value=r,f.textContent=c)}async function B(){let a=(await m.categories()).map(t=>t.replace("_"," ").replace("&","/").replace("_"," "));a.push("Show all"),c!==null?f.textContent=c:f.textContent="Categories",p.innerHTML="",a.forEach(async t=>{const s=document.createElement("div");s.className="dropdown-item",s.textContent=t,s.onclick=async function(){c=t,localStorage.setItem(H,JSON.stringify(c)),W()},p.appendChild(s)})}async function W(){p.style.display=p.style.display==="flex"?"none":"flex",c!==null?f.textContent=c:f.textContent="Categories",setTimeout(function(){p.style.opacity=p.style.opacity==="1"?"0":"1"},10)}function oe(e){const a=e.target.value;a?localStorage.setItem(w,JSON.stringify(a)):localStorage.setItem(w,JSON.stringify(null))}async function le(e){e.preventDefault(),r==""?r=null:r=JSON.parse(localStorage.getItem(w));let a=window.innerWidth||document.documentElement.clientWidth,t="";a>=1440?t=9:a<1440&&a>768?t=8:t=6,r==null?c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={limit:t}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_"),limit:t}:c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={keyword:r,limit:t}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_"),keyword:r,limit:t};const s=await m.products(g);return s.results.length===0?L.style.display="flex":L.style.display="none",ne(s.perPage*s.totalPages,s.perPage,s.page),O(s)}J();B();const z=new y;M();F();Q();document.querySelector(".product_card-list").addEventListener("click",K);X();z.PopularList.addEventListener("click",ee);V();B();J();z.discountList.addEventListener("click",U);ie.addEventListener("click",W);q.addEventListener("input",oe);re.addEventListener("click",le);G.addEventListener("submit",R);
//# sourceMappingURL=commonHelpers2.js.map
