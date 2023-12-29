import{r as n,l as s,f as i,c as p,d as l}from"./assets/localStorageApi-a706a4a6.js";import"./assets/vendor-7ba42fd8.js";async function d(){const e=new n;e.bigCartNumber.textContent="CART (0)";var c=[],a=0;const r=s.loadCart();if("products"in r){const o=await Promise.all(r.products.map(t=>i.product(t.productId)));o.forEach(t=>{a=a+t.price*r.products[o.indexOf(t)].amount,c.push(`
            
            <li class="cart-product" data-productId="${t._id}">
            <div class="cart-product-img">
              <img class="card-img"
                src="${t.img}"
                alt="${t.name}"
              />
            </div>

            <div class="cart-product-card">
            <div class="cart-product-name-container">
              <h3 class="cart-product-name">${t.name}</h3>
              <button data-productId="${t._id}" type="button" class="cart-product-delete-btn">
              <svg class="cart-icon-close" width="18" height="18">
                    <use href="${p}"></use>
                    </svg>
              </button>
            </div>

            <div class="cart-product-info">
                  <p class="cart-category-title">
                    Category:
                    <span class="cart-category-name">${t.category}</span>
                  </p>
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${t.size}</span>
                  </p>
                  <p class="cart-product-price">$${t.price}</p>
            </div>
          </li>
          `)}),e.bigCartNumber.textContent="CART ("+r.products.length+")"}e.cartEmptyContainer.style.display="none",e.cartContainer.innerHTML=c.join(""),e.totalCartSum.textContent="Sum: $"+a.toFixed(2)}async function u(e){e.preventDefault();const c=new n,a=s.loadCart();if(c.cartEmail.value.trim().length!==0)if("products"in a)if(a.products.length!==0)try{a.email=c.cartEmail.value.trim();const r=await i.order(a);s.deleteCart(),l(),d(),alert(r.message)}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}s.loadCart();l();d();const m=new n;m.buttonCheckout.addEventListener("click",u);
//# sourceMappingURL=commonHelpers.js.map
