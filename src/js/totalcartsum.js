import refsAPI from './refs.js';
import fetchApi from './fetchApi.js';
import localStorageApi from './localStorageApi.js';
import closeIcon from '../img/icons.svg#close-icon';
import { drawHeaderCartNumber } from './discount.js';

async function totalCartSum() {
  let cartIsEmpty = true;
  const frontEnd = new refsAPI();
  console.log(frontEnd);
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
                <button data-productId="${product._id}" type="button" class="cart-product-delete-btn js-cart-prod-del">
                <svg class="cart-icon-close" width="18" height="18">
                    <use href="${closeIcon}#close-icon"></use>
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
          <hr class=""divider>
          `);
    });
    frontEnd.bigCartNumber.textContent = 'CART (' + cart.products.length + ')';
  }
  if (cartIsEmpty) {
    frontEnd.deleteAllBtn.style.display = 'none';
    frontEnd.cartEmptyContainer.style.display = 'block';
    frontEnd.totalCartSum.textContent = '$0';
    frontEnd.cartContainer.innerHTML = '';
  } else {
    frontEnd.deleteAllBtn.style.display = 'block';
    frontEnd.cartEmptyContainer.style.display = 'none';
    frontEnd.cartContainer.innerHTML = productsToDraw.join('');
    frontEnd.totalCartSum.textContent = '$' + cartSum.toFixed(2);
  }

  // delete one product
  if ('products' in cart && cart.products.length) {
    document
      .querySelector('.js-cart-prod-del')
      .addEventListener('click', event => {
        const frontEnd = new refsAPI();
        const btn = event.target.closest('.js-cart-prod-del');
        const id = btn.dataset.productid;

        const prodIdx = cart.products.findIndex(
          product => product.productId === id
        );
        if (prodIdx !== -1) {
          cart.products.splice(prodIdx, 1);
        }

        localStorageApi.saveCart(cart);
        totalCartSum();
        console.log(frontEnd);
        frontEnd.cartEmptyContainer.style.display = 'block';
      });
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
