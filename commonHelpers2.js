import{r as y,b as I,g as P,f as m,l as L,e as v,h as $,d as J,i as z,j as D,a as F,p as U}from"./assets/footer-modal-ca5ec455.js";import{P as V}from"./assets/vendor-f89adc3e.js";const C=document.querySelector(".error");new y;let r,w;async function E(t){document.querySelector(".product_card-list").innerHTML="",t.results.map(e=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",T(e)))}function G(t){if(t.target.classList.contains("product_card-item")||t.target!==t.currentTarget){let e=setInterval(function(){j(),k()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.nodeName==="use"||t.target.nodeName==="BUTTON"||t.target.nodeName==="svg"){const s=t.target.closest(".product_card-item").dataset.productid;I(s),r[`btn2${s}`].style.display="none",r[`check1${s}`].style.display="flex";return}P(t,".product_card-item");return}}function T(t){const{category:e,img:s,name:a,popularity:p,price:i,size:d,_id:n,is10PercentOff:q}=t;return q?`
  <li class="product_card-item js-object" id=${n} data-productId="${n}" >

  <svg class="discount-icon" id=${n}>
   <use href="icon.svg#discount-icon"></use>
 </svg>
       <div class="product_card-wrapper">
        <div class="card-img-wrapper"><img src="${s}" alt="${a}" class="product_card-image"></div>
        <h2 class="product_card-name">${a}</h2>
        <div class="product_card-info">
            <p class="info-text">
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${d}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${p}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${i}</p>
         <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${$}"></use>
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
                Category:<span class="info-span">${e}</span>
            </p>
            <p class="info-text">
                Size:<span class="info-span">${d}</span>
            </p>
            <p class="info-text">
                Popularity:<span class="info-span">${p}</span>
            </p>
        </div>
        <div class="product_card-bottom">
        <p class="product-curd-price">$${i}</p>
        
        <button id="${n}" class="card_buy-btn js-btn discount-buy js-object" data-jsname="btn2${n}"  type="button">
                    <svg class="card_buy-icon-svg js-btn "   width="18" height="18">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${n}" class="check js-object" data-jsname="check1${n}" >
                <svg  class="check-icon-svg  discount-buy " width="18" height="18">
                        <use href="${$}"></use>
                    </svg></div>
        </div>
        </div>
    </li>`}async function R(){w=await m.products(),w.results.map(t=>document.querySelector(".product_card-list").insertAdjacentHTML("beforeend",T(t))),r=new y,j()}function j(){let t=L.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),w.results.forEach(s=>{e.includes(s._id)?(r[`btn2${s._id}`].style.display="none",r[`check1${s._id}`].style.display="flex"):(r[`check1${s._id}`].style.display="none",r[`btn2${s._id}`].style.display="flex")})}const Y="/project-Bpfbt9js/assets/icons-5c405266.svg#arrow";let _,S,b,l;async function K(){_=new y,_.PopularList.innerHTML="",S=await m.popular(),Z()}function Q(t){b=t.target.closest(".cards-item").dataset.productid,l[`btn1${b}`].style.display="none",l[`check${b}`].style.display="flex",I(b)}function W(t){let e=setInterval(function(){k(),j()},1e3);if(setTimeout(function(){clearInterval(e)},1e4),t.target.classList.contains("js-btn")){Q(t);return}if(!t.target.classList.contains("js-btn")){P(t,".cards-item");return}}function X(t){return t.map(({_id:e,img:s,name:a,category:p,size:i,popularity:d})=>` 
    <li class ="cards-item" data-productid="${e}" >
        <div id ="${e}" class="photo-card">
                    <img class = "cards__image" src="${s}" alt="${a}" loading="lazy" />
                 
            </div> 
            <div class=" discount-show">
                    <h3 class="info-title">${a}</h3>      
                    <p class="info-text">
                        Category:<span class="info-span">${p}</span>
                    </p>
                    <wraper class="info-wraper">
                        <p class="info-text">
                            Size:<span class="info-span">${i}</span>
                        </p>
                        <p class="info-text">
                            Popularity:<span class="info-span">${d}</span>
                        </p>
                    </wraper>
               </div>
               <button id="${e}" class="popular-products-btn js-btn discount-buy js-object" data-jsname="btn1${e}"  type="button">
                    <svg class="basket-icon-svg js-btn "   width="12" height="12">
                        <use class="js-btn" href="${v}"></use>
                    </svg>
                </button>
                <div id="${e}" class="check-btn js-object js-btn" data-jsname="check${e}" >
                <svg  class="check-icon-svg  discount-buy  js-btn" width="12" height="12">
                        <use href="${$}"></use>
                    </svg></div>
               </li>    
                  
`).join("")}async function Z(){try{const t=S;return _.PopularList.insertAdjacentHTML("beforeend",X(t)),l=new y,k(),await t}catch(t){console.log(t.message)}}function k(){let t=L.loadCart();const e=[];"products"in t&&(t=t.products,t.forEach(s=>e.push(s.productId))),S.forEach(s=>{e.includes(s._id)?(l[`btn1${s._id}`].style.display="none",l[`check${s._id}`].style.display="flex"):(l[`check${s._id}`].style.display="none",l[`btn1${s._id}`].style.display="flex")})}function tt(){let t;window.onscroll=function(){t||(t=document.createElement("button"),t.innerHTML=t.innerHTML=`<svg class="" width="16" height="16"><use href="${Y}"</use></svg>`,t.classList.add("scrollBtn"),document.body.appendChild(t),t.style.animation="flashing 1s infinite",t.onclick=function(){document.documentElement.scrollTop=0,t.style.display="none"}),window.onscroll=function(){document.documentElement.scrollTop===0?t.style.display="none":t.style.display="flex";var e=document.documentElement.scrollHeight,s=window.innerHeight,a=document.documentElement.scrollTop;a>e/6-s/6?t.style.visibility="visible":t.style.visibility="hidden"}}}let x={};const et=document.getElementById("pagination");function st(t,e,s){const a={totalItems:t,itemsPerPage:e,visiblePages:5,page:s,centerAlign:!1,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:i=>({first:'<a href="#" class="tui-page-btn tui-first"><<</a>',last:'<a href="#" class="tui-page-btn tui-last">>></a>',prev:'<a href="#" class="tui-page-btn tui-prev"><</a>',next:'<a href="#" class="tui-page-btn tui-next">></a>'})[i],disabledMoveButton:i=>({first:'<span class="tui-page-btn tui-first tui-is-disabled"><<</span>',last:'<span class="tui-page-btn tui-last tui-is-disabled">>></span>',prev:'<span class="tui-page-btn tui-prev tui-is-disabled"><</span>',next:'<span class="tui-page-btn tui-next tui-is-disabled">></span>'})[i],moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">...</a>'}};new V(et,a).on("afterMove",at)}async function at(t){const e=t.page;var s=JSON.parse(localStorage.getItem("filters"))||{};s.page=e,x={keyword:JSON.parse(localStorage.getItem("keyword")),category:JSON.parse(localStorage.getItem("category").replace(" ","_").replace("/","&").replace(" ","_")),page:s.page};const a=await m.products(x);return E(a)}const u=document.querySelector("#dropdownMenu"),M=document.querySelector("#input-filter"),nt=document.querySelector("#filterButt"),f=document.querySelector(".category-content"),ct=document.querySelector(".dropdown-toggle"),h="keyword",B="category";let o=JSON.parse(localStorage.getItem(h)),c=JSON.parse(localStorage.getItem(B)),g={};function N(){(o||c)&&(M.value=o,f.textContent=c)}async function A(){let e=(await m.categories()).map(s=>s.replace("_"," ").replace("&","/").replace("_"," "));e.push("Show all"),c!==null?f.textContent=c:f.textContent="Categories",u.innerHTML="",e.forEach(async s=>{const a=document.createElement("div");a.className="dropdown-item",a.textContent=s,a.onclick=async function(){c=s,localStorage.setItem(B,JSON.stringify(c)),H()},u.appendChild(a)})}async function H(){u.style.display=u.style.display==="flex"?"none":"flex",c!==null?f.textContent=c:f.textContent="Categories",setTimeout(function(){u.style.opacity=u.style.opacity==="1"?"0":"1"},10)}function it(t){const e=t.target.value;e?localStorage.setItem(h,JSON.stringify(e)):localStorage.setItem(h,JSON.stringify(null))}async function ot(t){t.preventDefault(),o==""?o=null:o=JSON.parse(localStorage.getItem(h)),o==null?c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_")}:c.replace(" ","_").replace("/","&").replace(" ","_")=="Show_all"?g={keyword:o}:g={category:c.replace(" ","_").replace("/","&").replace(" ","_"),keyword:o};const e=await m.products(g);return e.results.length===0?C.style.display="flex":C.style.display="none",st(e.perPage*e.totalPages,e.perPage,e.page),E(e)}N();A();const O=new y;J();R();document.querySelector(".product_card-list").addEventListener("click",G);K();O.PopularList.addEventListener("click",W);z();A();N();O.discountList.addEventListener("click",D);ct.addEventListener("click",H);M.addEventListener("input",it);nt.addEventListener("click",ot);F.addEventListener("submit",U);tt();
//# sourceMappingURL=commonHelpers2.js.map
