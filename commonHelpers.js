import{r as l,l as o,f as m,c as y,d as f,M as i,a as g,p as h}from"./assets/footer-modal-33d558f1.js";import"./assets/vendor-f89adc3e.js";const _="/project-Bpfbt9js/assets/tomatto-a27bffcd.png";async function d(){let e=!0;const t=new l;t.bigCartNumber.textContent="CART (0)";var s=[],c=0;const r=o.loadCart();if("products"in r){const n=await Promise.all(r.products.map(a=>m.product(a.productId)));n.forEach(a=>{e=!1,c=c+a.price*r.products[n.indexOf(a)].amount,s.push(`
            
          <li class="cart-product" data-productId="${a._id}">
            <div class="cart-product-img">
              <img class="card-img"
                src="${a.img}"
                alt="${a.name}"
              />
            </div>

            <div class="cart-product-card">
              <div class="cart-product-name-container">
                <h3 class="cart-product-name">${a.name}</h3>
                <button data-productId="${a._id}" type="button" class="cart-product-delete-btn js-cart-prod-del">
                <svg class="cart-icon-close js-cart-prod-del" data-productId="${a._id}" width="18" height="18">
                    <use class="js-cart-prod-del" data-productId="${a._id}" href="${y}#close-icon"></use>
                    </svg>
                </button>
              </div>

                <div class="cart-product-info">
                  <p class="cart-category-title">
                    Category:
                    <span class="cart-category-name">${a.category}</span>
                  </p>
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${a.size}</span>
                  </p>
                </div>
                  <div class="cart-product-price" >
                    <span class="cart-product-span">$${a.price}</span>
                  </div>
                
            </div>
          </li>
          <div class="divider"></div>
          `)}),t.bigCartNumber.textContent="CART ("+r.products.length+")"}e?(t.deleteAllBtn.style.display="none",t.cartEmptyContainer.style.display="flex",t.totalCartSum.textContent="$0",t.cartContainer.innerHTML=""):(t.deleteAllBtn.style.display="flex",t.cartEmptyContainer.style.display="none",t.cartContainer.innerHTML=s.join(""),t.totalCartSum.textContent="$"+c.toFixed(2)),t.cartContainer.addEventListener("click",n=>{const a=n.target.closest(".js-cart-prod-del");if(a){const v=a.dataset.productid,u=r.products.findIndex(C=>C.productId===v);u!==-1&&(r.products.splice(u,1),o.saveCart(r),d())}})}async function b(e){e.preventDefault();const t=new l,s=o.loadCart();if(t.cartEmail.value.trim().length!==0)if("products"in s)if(s.products.length!==0)try{s.email=t.cartEmail.value.trim();const c=await m.order(s);o.deleteCart(),f(),d(),i._modalImg.style.display="none",i._modal.innerHTML=`
        <div class="modal-inner">
          <img
            class="modal__food-tomatto"
            src="${_}"
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
        </div>`,i.open()}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}f();d();const p=new l,E=document.querySelector(".cart-amount");p.buttonCheckout.addEventListener("click",b);g.addEventListener("submit",h);p.deleteAllBtn.addEventListener("click",e=>{e.target.classList.contains("js-delete-all")&&(o.deleteCart(),d(),E.textContent="CART (0)")});p.cartContainer.addEventListener("click",e=>{let t=o.loadCart();if(e.target.classList.contains("js-cart-prod-del")){const s=e.target.dataset.productid,c=t.products.findIndex(r=>r.productId===s);c!==-1&&t.products.splice(c,1),o.saveCart(t),d()}});
//# sourceMappingURL=commonHelpers.js.map
