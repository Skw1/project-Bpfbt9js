import{r as y,b as E,g as N,f as m,l as T,e as w,h as S,d as W,i as V,j as U,a as G,p as R}from"./assets/footer-modal-db943ed2.js";import{P as Y}from"./assets/vendor-f89adc3e.js";const L=document.querySelector(".error");new y;let o,j,k={limit:null};async function O(e){document.querySelector(".product_card-list").innerHTML="",e.results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",A(t)))}function K(e){if(e.target.classList.contains("product_card-item")||e.target!==e.currentTarget){let t=setInterval(function(){I(),x()},1e3);if(setTimeout(function(){clearInterval(t)},1e4),e.target.nodeName==="use"||e.target.nodeName==="BUTTON"||e.target.nodeName==="svg"){const a=e.target.closest(".product_card-item").dataset.productid;E(a),o[`btn2${a}`].style.display="none",o[`check1${a}`].style.display="flex";return}N(e,".product_card-item");return}}function A(e){const{category:t,img:a,name:s,popularity:u,price:h,size:b,_id:c,is10PercentOff:F}=e;return F?`
  <li class="product_card-item js-object" id=${c} data-productId="${c}" >

  <svg class="discount-icon" id=${c}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${a}" alt="${s}" class="product_card-image"></div>
        <h2 class="product_card-name">${s}</h2>
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
        <div class="card-img-wrapper"><img src="${a}" alt="${s}" class="product_card-image"></div>
        <h2 class="product_card-name">${s}</h2>
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
    </li>`}function M(){(window.innerWidth||document.documentElement.clientWidth)>=1440?k={limit:9}:k={limit:6}}async function Q(){M(),j=await m.products(k),j.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",A(e))),o=new y,I()}function I(){let e=T.loadCart();const t=[];"products"in e&&(e=e.products,e.forEach(a=>t.push(a.productId))),j.results.forEach(a=>{t.includes(a._id)?(o[`btn2${a._id}`].style.display="none",o[`check1${a._id}`].style.display="flex"):(o[`check1${a._id}`].style.display="none",o[`btn2${a._id}`].style.display="flex")})}let C,P,v,i;async function X(){C=new y,C.PopularList.innerHTML="",P=await m.popular(),ae()}function Z(e){v=e.target.closest(".cards-item").dataset.productid,i[`btn1${v}`].style.display="none",i[`check${v}`].style.display="flex",E(v)}function ee(e){let t=setInterval(function(){x(),I()},1e3);if(setTimeout(function(){clearInterval(t)},1e4),e.target.classList.contains("js-btn")){Z(e);return}if(!e.target.classList.contains("js-btn")){N(e,".cards-item");return}}function te(e){return e.map(({_id:t,img:a,name:s,category:u,size:h,popularity:b})=>` 
    <li class ="cards-item" data-productid="${t}" >
        <div id ="${t}" class="photo-card">
                    <img class = "cards__image" src="${a}" alt="${s}" loading="lazy" />
                 
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
                  
`).join("")}async function ae(){try{const e=P;return C.PopularList.insertAdjacentHTML("beforeend",te(e)),i=new y,x(),await e}catch(e){console.log(e.message)}}function x(){let e=T.loadCart();const t=[];"products"in e&&(e=e.products,e.forEach(a=>t.push(a.productId))),P.forEach(a=>{t.includes(a._id)?(i[`btn1${a._id}`].style.display="none",i[`check${a._id}`].style.display="flex"):(i[`check${a._id}`].style.display="none",i[`btn1${a._id}`].style.display="flex")})}let l=JSON.parse(localStorage.getItem("keyword")),$=JSON.parse(localStorage.getItem("category")),d={};const se=document.getElementById("pagination");function ce(e,t,a){const s={totalItems:e,itemsPerPage:t,visiblePages:5,page:a,centerAlign:!0};new Y(se,s).on("afterMove",ne)}async function ne(e){const t=e.page;var a=JSON.parse(localStorage.getItem("filters"))||{};a.page=t,l==""?l=null:l=JSON.parse(localStorage.getItem("keyword")),l==null?$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={page:a.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),page:a.page}:$.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?d={keyword:l,page:a.page}:d={category:$.replace(" ","_").replace("/","&").replace(" ","_"),keyword:l,page:a.page},console.log(d);const s=await m.products(d);return O(s)}const p=document.querySelector("#dropdownMenu"),q=document.querySelector("#input-filter"),re=document.querySelector("#filterButt"),f=document.querySelector(".category-content"),oe=document.querySelector(".dropdown-toggle"),_="keyword",H="category";let r=JSON.parse(localStorage.getItem(_)),n=JSON.parse(localStorage.getItem(H)),g={};function J(){(r||n)&&(q.value=r,f.textContent=n)}async function B(){let t=(await m.categories()).map(a=>a.replace("_"," ").replace("&","/").replace("_"," "));t.push("Show all"),n!==null?f.textContent=n:f.textContent="Categories",p.innerHTML="",t.forEach(async a=>{const s=document.createElement("div");s.className="dropdown-item",s.textContent=a,s.onclick=async function(){n=a,localStorage.setItem(H,JSON.stringify(n)),z()},p.appendChild(s)})}async function z(){p.style.display=p.style.display==="flex"?"none":"flex",n!==null?f.textContent=n:f.textContent="Categories",setTimeout(function(){p.style.opacity=p.style.opacity==="1"?"0":"1"},10)}function ie(e){const t=e.target.value;t?localStorage.setItem(_,JSON.stringify(t)):localStorage.setItem(_,JSON.stringify(null))}async function le(e){e.preventDefault(),r==""?r=null:r=JSON.parse(localStorage.getItem(_)),r==null?n.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={}:g={category:n.replace(" ","_").replace("/","&").replace(" ","_")}:n.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={keyword:r}:g={category:n.replace(" ","_").replace("/","&").replace(" ","_"),keyword:r};const t=await m.products(g);return t.results.length===0?L.style.display="flex":L.style.display="none",ce(t.perPage*t.totalPages,t.perPage,t.page),O(t)}J();B();const D=new y;M();W();Q();document.querySelector(".product_card-list").addEventListener("click",K);X();D.PopularList.addEventListener("click",ee);V();B();J();D.discountList.addEventListener("click",U);oe.addEventListener("click",z);q.addEventListener("input",ie);re.addEventListener("click",le);G.addEventListener("submit",R);
//# sourceMappingURL=commonHelpers2.js.map
