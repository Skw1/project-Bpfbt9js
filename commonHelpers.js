import{r as o,l as n,f as l,c as m,d,a as u,p as C}from"./assets/footer-modal-1e6432dd.js";import"./assets/vendor-7ba42fd8.js";async function p(){let c=!0;const a=new o;a.bigCartNumber.textContent="CART (0)";var e=[],r=0;const s=n.loadCart();if("products"in s){const i=await Promise.all(s.products.map(t=>l.product(t.productId)));i.forEach(t=>{c=!1,r=r+t.price*s.products[i.indexOf(t)].amount,e.push(`
            
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
                    <use href="${m}"></use>
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
          `)}),a.bigCartNumber.textContent="CART ("+s.products.length+")"}c?(a.cartEmptyContainer.style.display="block",a.totalCartSum.textContent="Sum: $0",a.cartContainer.innerHTML=""):(a.cartEmptyContainer.style.display="none",a.cartContainer.innerHTML=e.join(""),a.totalCartSum.textContent="Sum: $"+r.toFixed(2))}async function f(c){c.preventDefault();const a=new o,e=n.loadCart();if(a.cartEmail.value.trim().length!==0)if("products"in e)if(e.products.length!==0)try{e.email=a.cartEmail.value.trim();const r=await l.order(e);n.deleteCart(),d(),p(),alert(r.message)}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}n.loadCart();d();p();const g=new o;g.buttonCheckout.addEventListener("click",f);u.addEventListener("submit",C);
//# sourceMappingURL=commonHelpers.js.map
