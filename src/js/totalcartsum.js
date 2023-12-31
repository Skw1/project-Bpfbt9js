import refsAPI from './refs.js';
import fetchApi from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import closeIcon from '../img/icons.svg#close-icon';
import { drawHeaderCartNumber } from './discount.js';
import ModalFilter from './modal/ModalFilter.js';
import tomattoIcon from '../img/tomatto.png';
import shadowIcon from '../img/icons.svg#shadow-icon';

async function totalCartSum() {
  let cartIsEmpty = true;
  const frontEnd = new refsAPI();
  frontEnd.bigCartNumber.textContent = 'CART (0)';
  var productsToDraw = [];
  var cartSum = 0;
  //load cart with products
  const cart = localStorageApi.loadCart();

  //get  info for each product in cart
  if ('products' in cart) {
    const products = await Promise.all(
      cart.products.map(product => {
        return fetchApi.product(product.productId);
      })
    );
    products.forEach(product => {
      cartIsEmpty = false;
      //add totall product price to totall cart sum
      cartSum =
        cartSum +
        product.price * cart.products[products.indexOf(product)].amount;
      productsToDraw.push(`
            
          <li class="cart-product" data-productId="${product._id}">
            <div class="cart-product-img">
              <img class="card-img"
                src="${product.img}"
                alt="${product.name}"
              />
            </div>

            <div class="cart-product-card">
              <div class="cart-product-name-container">
                <h3 class="cart-product-name">${product.name}</h3>
                <button data-productId="${product._id}" type="button" class="cart-product-delete-btn js-cart-prod-del">
                <svg class="cart-icon-close js-cart-prod-del" data-productId="${product._id}" width="18" height="18">
                    <use class="js-cart-prod-del" data-productId="${product._id}" href="${closeIcon}"></use>
                    </svg>
                </button>
              </div>

                <div class="cart-product-info">
                  <p class="cart-category-title">
                    Category:
                    <span class="cart-category-name">${product.category}</span>
                  </p>
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${product.size}</span>
                  </p>
                </div>
                  <div class="cart-product-price" >
                    <span class="cart-product-span">$${product.price}</span>
                  </div>
                
            </div>
          </li>
          <div class="divider"></div>
          `);
    });
    frontEnd.bigCartNumber.textContent = 'CART (' + cart.products.length + ')';
  }
  if (cartIsEmpty) {
    frontEnd.deleteAllBtn.style.display = 'none';
    frontEnd.cartEmptyContainer.style.display = 'flex';
    frontEnd.totalCartSum.textContent = '$0';
    frontEnd.cartContainer.innerHTML = '';
  } else {
    frontEnd.deleteAllBtn.style.display = 'flex';
    frontEnd.cartEmptyContainer.style.display = 'none';
    frontEnd.cartContainer.innerHTML = productsToDraw.join('');
    frontEnd.totalCartSum.textContent = '$' + cartSum.toFixed(2);
  }
}

async function checkout(event) {
  event.preventDefault();
  const frondEnd = new refsAPI();
  const cart = localStorageApi.loadCart();
  if (frondEnd.cartEmail.value.trim().length !== 0) {
    if ('products' in cart) {
      if (cart.products.length !== 0) {
        try {
          cart.email = frondEnd.cartEmail.value.trim();
          const message = await fetchApi.order(cart);
          localStorageApi.deleteCart();
          drawHeaderCartNumber();
          totalCartSum();
          ModalFilter._modalImg.style.display = 'none';
          ModalFilter._modal.innerHTML = `
        <div class="modal-inner">
          <div class="moal__food-tomatto--wrap">
          <svg class="moal__food-tomatto--shadow">
          <use href="${shadowIcon}"></use>
        </svg>
            <img
              class="modal__food-tomatto"
              src="${tomattoIcon}"
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
        </div>`;
          ModalFilter.open();
        } catch (error) {
          alert('Check email!');
        }
      } else {
        alert('empty cart2!');
      }
    } else {
      alert('empty cart1!');
    }
  } else {
    alert('empty email!');
  }
}

export { totalCartSum, checkout };
