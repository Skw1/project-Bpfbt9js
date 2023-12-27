document
  .querySelector('.cart-product-delete-btn')
  .addEventListener('click', event => {
    const id = event.target.dataset.productId;
    let cart = localStorageApi.loadCart();
    if ('products' in cart) {
      const resalt = cart.products.findIndex(
        product => product.productId === id
      );
      if (resalt !== -1) {
        cart.products.splice(resalt, 1);
      }
    }
    localStorageApi.saveCart(cart);
  });
