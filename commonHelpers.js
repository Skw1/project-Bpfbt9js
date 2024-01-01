import{r as l,l as c,f as u,c as v,d as m,M as i,a as h,p as C}from"./assets/footer-modal-1f170b31.js";import"./assets/vendor-7ba42fd8.js";const b="/project-Bpfbt9js/assets/tomatto-a27bffcd.png";async function d(){let s=!0;const e=new l;console.log(e),e.bigCartNumber.textContent="CART (0)";var r=[],o=0;const a=c.loadCart();if("products"in a){const n=await Promise.all(a.products.map(t=>u.product(t.productId)));n.forEach(t=>{s=!1,o=o+t.price*a.products[n.indexOf(t)].amount,r.push(`
            
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
                    <use href="${v}#close-icon"></use>
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
                </div>
                  <div class="cart-product-price" >
                    <span class="cart-product-span">$${t.price}</span>
                  </div>
                
            </div>
          </li>
          <hr class=""divider>
          `)}),e.bigCartNumber.textContent="CART ("+a.products.length+")"}s?(e.deleteAllBtn.style.display="none",e.cartEmptyContainer.style.display="block",e.totalCartSum.textContent="$0",e.cartContainer.innerHTML=""):(e.deleteAllBtn.style.display="block",e.cartEmptyContainer.style.display="none",e.cartContainer.innerHTML=r.join(""),e.totalCartSum.textContent="$"+o.toFixed(2)),"products"in a&&a.products.length&&document.querySelector(".js-cart-prod-del").addEventListener("click",n=>{const t=new l,f=n.target.closest(".js-cart-prod-del").dataset.productid,p=a.products.findIndex(g=>g.productId===f);p!==-1&&a.products.splice(p,1),c.saveCart(a),d(),console.log(t),t.cartEmptyContainer.style.display="block"})}async function E(s){s.preventDefault();const e=new l,r=c.loadCart();if(e.cartEmail.value.trim().length!==0)if("products"in r)if(r.products.length!==0)try{r.email=e.cartEmail.value.trim();const o=await u.order(r);c.deleteCart(),m(),d(),i._modalImg.style.display="none",i._modal.innerHTML=`
        <div class="modal-inner">
          <img
            class="modal__food-tomatto"
            src="${b}"
            alt="Кошик з фруктамі"
          />
          <div class="modal__title--wrap-success">
            <p class="modal__title--success">ORDER SUCCESS</p>
          </div>
          <div class="modal__description--wrap modal__description--wrap-success">
            <p class="modal__description modal__description--success">
              Thank you for shopping at Food Boutique. Your order has been
              received and is now being freshly prepared just for you! Get ready
              to indulge in nourishing goodness, delivered right to your doorstep.
              We're thrilled to be part of your journey to better health and
              happiness.
            </p>
          </div>
        </div>`,i.open()}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}m();d();const y=new l;y.buttonCheckout.addEventListener("click",E);h.addEventListener("submit",C);y.deleteAllBtn.addEventListener("click",s=>{console.log(s.target.classList.contains("js-delete-all")),s.target.classList.contains("js-delete-all")&&(c.deleteCart(),d())});
//# sourceMappingURL=commonHelpers.js.map
