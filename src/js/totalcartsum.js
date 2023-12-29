import refsAPI from './refs.js';
import fetchApi from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import closeIcon from '../img/icons.svg#close-icon';
import { drawProductCart } from './cart.js';
import { drawHeaderCartNumber } from './discount.js';

async function totalCartSum() {
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
      //add totall product price to totall cart sum
      cartSum =
        cartSum +
        product.price * cart.products[products.indexOf(product)].amount;
      // console.log(typeof cart.products[products.indexOf(product)].amount);
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
              <button data-productId="${product._id}" type="button" class="cart-product-delete-btn">
              <svg class="cart-icon-close" width="18" height="18">
                    <use href="${closeIcon}"></use>
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
                  <p class="cart-product-price">$${product.price}</p>
            </div>
          </li>
          `);
    });
    frontEnd.bigCartNumber.textContent = 'CART (' + cart.products.length + ')';
  }
  frontEnd.cartEmptyContainer.style.display = 'none';
  frontEnd.cartContainer.innerHTML = productsToDraw.join('');
  frontEnd.totalCartSum.textContent = 'Sum: $' + cartSum.toFixed(2);
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
          alert(message.message);
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
