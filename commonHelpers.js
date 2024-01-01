import{r as n,l as o,f as u,c as f,d as m,M as i,a as v,p as y}from"./assets/footer-modal-83666b88.js";import"./assets/vendor-f89adc3e.js";const g="/project-Bpfbt9js/assets/tomatto-a27bffcd.png";async function d(){let e=!0;const t=new n;t.bigCartNumber.textContent="CART (0)";var s=[],r=0;const c=o.loadCart();if("products"in c){const p=await Promise.all(c.products.map(a=>u.product(a.productId)));p.forEach(a=>{e=!1,r=r+a.price*c.products[p.indexOf(a)].amount,s.push(`
            
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
                    <use class="js-cart-prod-del" data-productId="${a._id}" href="${f}#close-icon"></use>
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
          <hr class=""divider>
          `)}),t.bigCartNumber.textContent="CART ("+c.products.length+")"}e?(t.deleteAllBtn.style.display="none",t.cartEmptyContainer.style.display="block",t.totalCartSum.textContent="$0",t.cartContainer.innerHTML=""):(t.deleteAllBtn.style.display="block",t.cartEmptyContainer.style.display="none",t.cartContainer.innerHTML=s.join(""),t.totalCartSum.textContent="$"+r.toFixed(2))}async function C(e){e.preventDefault();const t=new n,s=o.loadCart();if(t.cartEmail.value.trim().length!==0)if("products"in s)if(s.products.length!==0)try{s.email=t.cartEmail.value.trim();const r=await u.order(s);o.deleteCart(),m(),d(),i._modalImg.style.display="none",i._modal.innerHTML=`
        <div class="modal-inner">
          <img
            class="modal__food-tomatto"
            src="${g}"
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
        </div>`,i.open()}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}m();d();const l=new n;l.buttonCheckout.addEventListener("click",C);v.addEventListener("submit",y);l.deleteAllBtn.addEventListener("click",e=>{e.target.classList.contains("js-delete-all")&&(o.deleteCart(),d())});l.cartContainer.addEventListener("click",e=>{let t=o.loadCart();if(e.target.classList.contains("js-cart-prod-del")){const s=e.target.dataset.productid,r=t.products.findIndex(c=>c.productId===s);r!==-1&&t.products.splice(r,1),o.saveCart(t),d()}});
//# sourceMappingURL=commonHelpers.js.map
