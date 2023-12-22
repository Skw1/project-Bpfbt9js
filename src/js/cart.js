function cartMarkup(products) {
  if (products.length !== 0) {
    return products
      .map(({ _id, name, img, category, price, size }) => {
        return `
          <div class="cart-product-container">
            <div class="cart-delete-all">
            <button type="button" class="cart-delete-button"> Delete All
                <span class="cart-close-icon">
                    <svg class="cart-icon-close" width="24" height="24">
                    <use href="./img/icons.svg#close-icon"></use>
                    </svg>
                </span>
            </button>
            </div>


            <ul class="cart-products-list">
            <li class="cart-product" id="${_id}">
            <div class="cart-product-img">
              <img
                src="${img}"
                alt="${name}"
              />
            </div>

            <div class="cart-product-card">
            <div class="cart-product-name-container">
              <h3 class="cart-product-name">${name}</h3>
              <button type="button" class="cart-product-delete-btn">
              <svg class="cart-icon-close" width="24" height="24">
                    <use href="./img/icons.svg#close-icon"></use>
                    </svg>
              </button>
            </div>
              
            <div class="cart-product-info">
                  <p class="cart-category-title">
                    Category:
                    <span class="cart-category-name">${category}</span>
                  </p>
                  <p class="cart-product-size">
                    Size: <span class="cart-product-size-value">${size}</span>
                  </p>
                  <p class="cart-product-price">$${price}</p>
            </div>            
          </li>
          </div>


          <div class="cart-order-container">
            <h2 class="order-title">Your order</h2>

          <div class="order-container">
            <p class="order-text">Total</p>
            <p class="order-total-sum">$${products.toFixed(2)}</p>
          </div>

          <div class="order-input-checkout">
            <label class="order-input-checkout" for="email"></label>
            <input
                class="order-email"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
            />
            <button class="order-checkout-button" type="submit">Checkout</button>
          </div>

          </div>
            `;
      })
      .join('');
  } else {
    return `
          <div class="cart-empty-product">
            <img
              src="......................"
              alt="empty cart"
              class="cart-epmpty-img"
            />
            <p class="cart-empty-title">
              Your basket is <span class=cart-empty-item> empty...</span>
            </p>
            <p class="cart-empty-text">
              Go to the main page to select your favorite products and add them to the cart.
            </p>
          </div>`;
  }
}
