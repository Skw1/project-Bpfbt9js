import{r as i,l as n,f as p,c as y,d as u,M as d,a as f,p as g}from"./assets/footer-modal-73fce1d4.js";import"./assets/vendor-f89adc3e.js";const C="/project-Bpfbt9js/assets/tomatto-a27bffcd.png",v="/project-Bpfbt9js/assets/icons-5c405266.svg#shadow-icon";async function m(){let a=!0;const t=new i;t.bigCartNumber.textContent="CART (0)";var s=[],o=0;const c=n.loadCart();if("products"in c){const l=await Promise.all(c.products.map(e=>p.product(e.productId)));l.forEach(e=>{a=!1,o=o+e.price*c.products[l.indexOf(e)].amount,s.push(`
            
          <li class="cart-product" data-productId="${e._id}">
            <div class="cart-product-img">
              <img class="card-img"
                src="${e.img}"
                alt="${e.name}"
              />
            </div>

            <div class="cart-product-card">
              <div class="cart-product-name-container">
                <h3 class="cart-product-name">${e.name}</h3>
                <button data-productId="${e._id}" type="button" class="cart-product-delete-btn js-cart-prod-del">
                <svg class="cart-icon-close js-cart-prod-del" data-productId="${e._id}" width="18" height="18">
                    <use class="js-cart-prod-del" data-productId="${e._id}" href="${y}"></use>
                    </svg>
                </button>
              </div>

                <div class="cart-product-info">
                  <p class="cart-category-title">
                    Category:
                    <span class="cart-category-name">${e.category}</span>
                  </p>
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${e.size}</span>
                  </p>
                </div>
                  <div class="cart-product-price" >
                    <span class="cart-product-span">$${e.price}</span>
                  </div>
                
            </div>
          </li>
          <div class="divider"></div>
          `)}),t.bigCartNumber.textContent="CART ("+c.products.length+")"}a?(t.deleteAllBtn.style.display="none",t.cartEmptyContainer.style.display="flex",t.totalCartSum.textContent="$0",t.cartContainer.innerHTML=""):(t.deleteAllBtn.style.display="flex",t.cartEmptyContainer.style.display="none",t.cartContainer.innerHTML=s.join(""),t.totalCartSum.textContent="$"+o.toFixed(2))}async function h(a){a.preventDefault();const t=new i,s=n.loadCart();if(t.cartEmail.value.trim().length!==0)if("products"in s)if(s.products.length!==0)try{s.email=t.cartEmail.value.trim();const o=await p.order(s);n.deleteCart(),u(),m(),d._modalImg.style.display="none",d._modal.innerHTML=`
        <div class="modal-inner">
          <div class="moal__food-tomatto--wrap">
          <svg class="moal__food-tomatto--shadow">
          <use href="${v}"></use>
        </svg>
            <img
              class="modal__food-tomatto"
              src="${C}"
              alt="Кошик з фруктамі"
            />
            
          </div>
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
        </div>`,d.open()}catch{alert("Check email!")}else alert("empty cart2!");else alert("empty cart1!");else alert("empty email!")}u();m();const r=new i,_=document.querySelector(".cart-amount");r.buttonCheckout.addEventListener("click",h);f.addEventListener("submit",g);r.deleteAllBtn.addEventListener("click",a=>{a.target.classList.contains("js-delete-all")&&(n.deleteCart(),r.deleteAllBtn.style.display="none",r.cartEmptyContainer.style.display="flex",_.textContent="CART (0)",r.bigCartNumber.textContent="CART (0)")});r.cartContainer.addEventListener("click",a=>{if(!a.target.classList.contains("js-cart-prod-del"))return;let t=n.loadCart();const s=a.target.closest(".cart-product");console.log(s);const o=a.target.dataset.productid;console.log(o);const c=t.products.findIndex(l=>l.productId===o);c!==-1&&(t.products.splice(c,1),n.saveCart(t),s.style.display="none",r.bigCartNumber.textContent=`CART (${t.products.length})`),t.products.length||(r.deleteAllBtn.style.display="none",r.cartEmptyContainer.style.display="flex")});
//# sourceMappingURL=commonHelpers.js.map
