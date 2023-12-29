import{r as l,l as n,f as p,c as y,d as u,a as C,p as v}from"./assets/footer-modal-3bb25060.js";import"./assets/vendor-7ba42fd8.js";async function i(){let r=!0;const e=new l;console.log(e),e.bigCartNumber.textContent="CART (0)";var s=[],c=0;const a=n.loadCart();if("products"in a){const o=await Promise.all(a.products.map(t=>p.product(t.productId)));o.forEach(t=>{r=!1,c=c+t.price*a.products[o.indexOf(t)].amount,s.push(`
            
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
                    <use href="${y}"></use>
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
          `)}),e.bigCartNumber.textContent="CART ("+a.products.length+")"}r?(e.deleteAllBtn.style.display="none",e.cartEmptyContainer.style.display="block",e.totalCartSum.textContent="Sum: $0",e.cartContainer.innerHTML=""):(e.deleteAllBtn.style.display="block",e.cartEmptyContainer.style.display="none",e.cartContainer.innerHTML=s.join(""),e.totalCartSum.textContent="Sum: $"+c.toFixed(2)),"products"in a&&a.products.length&&document.querySelector(".js-cart-prod-del").addEventListener("click",o=>{const t=new l,f=o.target.closest(".js-cart-prod-del").dataset.productid,d=a.products.findIndex(g=>g.productId===f);d!==-1&&a.products.splice(d,1),n.saveCart(a),i(),console.log(t),t.cartEmptyContainer.style.display="block"})}async function h(r){r.preventDefault();const e=new l,s=n.loadCart();if(e.cartEmail.value.trim().length!==0)if("products"in s)if(s.products.length!==0)try{s.email=e.cartEmail.value.trim();const c=await p.order(s);n.deleteCart(),u(),i(),alert(c.message)}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}u();i();const m=new l;m.buttonCheckout.addEventListener("click",h);C.addEventListener("submit",v);m.deleteAllBtn.addEventListener("click",r=>{console.log(r.target.classList.contains("js-delete-all")),r.target.classList.contains("js-delete-all")&&(n.deleteCart(),i())});
//# sourceMappingURL=commonHelpers.js.map
