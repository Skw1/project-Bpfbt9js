import{r as i,l as s,f as p,c as C,d as u,a as g,p as y}from"./assets/footer-modal-3bb25060.js";import"./assets/vendor-7ba42fd8.js";async function d(){let n=!0;const a=new i;a.bigCartNumber.textContent="CART (0)";var r=[],c=0;const e=s.loadCart();if("products"in e){const o=await Promise.all(e.products.map(t=>p.product(t.productId)));o.forEach(t=>{n=!1,c=c+t.price*e.products[o.indexOf(t)].amount,r.push(`
            
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
              <button data-productId="${t._id}" type="button" class="cart-product-delete-btn js-cart-prod-del">
              <svg class="cart-icon-close" width="18" height="18">
                    <use href="${C}"></use>
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
          `)}),a.bigCartNumber.textContent="CART ("+e.products.length+")"}n?(a.cartEmptyContainer.style.display="block",a.totalCartSum.textContent="Sum: $0",a.cartContainer.innerHTML=""):(a.cartEmptyContainer.style.display="none",a.cartContainer.innerHTML=r.join(""),a.totalCartSum.textContent="Sum: $"+c.toFixed(2)),"products"in e&&e.products.length&&document.querySelector(".js-cart-prod-del").addEventListener("click",o=>{const t=new i,m=o.target.closest(".js-cart-prod-del").dataset.productid,l=e.products.findIndex(f=>f.productId===m);l!==-1&&e.products.splice(l,1),s.saveCart(e),d(),console.log(t),t.cartEmptyContainer.style.display="block"})}async function v(n){n.preventDefault();const a=new i,r=s.loadCart();if(a.cartEmail.value.trim().length!==0)if("products"in r)if(r.products.length!==0)try{r.email=a.cartEmail.value.trim();const c=await p.order(r);s.deleteCart(),u(),d(),alert(c.message)}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}s.loadCart();u();d();const h=new i;h.buttonCheckout.addEventListener("click",v);g.addEventListener("submit",y);
//# sourceMappingURL=commonHelpers.js.map
