//   кнопку типу button у вигляді іконки-візка, click по якій має додавати продукт до кошику шляхом оновлення
//    інформації про кошик, яка повинна зберігатися в localStorage. Якщо такий продукт вже є доданим до кошику, 
//    іконка-візка має змінюватись на іконку ✓. Такий товар додати в кошик стає неможливим.

// Click по картці продукту має відкривати модальне вікно з детальною інформацією про продукт.

// Отримуємо кнопку та кошик
const button = document.querySelector('.btn-popular-products');
const cartItems = JSON.parse(localStorage.getItem('KEY')) || [];

// Функція, яка додає продукт до кошика
function addToCart() {
  // Отримуємо назву продукту
  const productName = data.name; // Замість "Назва продукту" вставте назву потрібного продукту
  
  // Перевіряємо, чи такий продукт вже є в кошику
  const productExists = cartItems.includes(productName);
  
  // Якщо продукт вже є в кошику, змінюємо іконку на ✓
  if (productExists) {
    button.innerHTML = '&#10004;';
    return;
  }
  
  // Якщо продукта ще немає в кошику, додаємо його
  cartItems.push(productName);
  localStorage.setItem('KEY', JSON.stringify(cartItems));
  
  // Оновлюємо інформацію про кошик
  updateCartInfo();
}

// Функція, яка оновлює інформацію про кошик
function updateCartInfo() {
  const cartInfo = document.querySelector('.cart-info');
  cartInfo.innerHTML = `Кількість продуктів у кошику: ${cartItems.length}`;
}

// Додаємо обробник події click на кнопку
button.addEventListener('click', addToCart);

// Функція, яка відкриває модальне вікно з детальною інформацією про продукт
// function openProductModal() {
//   // Отримуємо інформацію про продукт
//   const productInfo = 'Детальна інформація про продукт'; // Замість "Детальна інформація про продукт" вставте потрібну інформацію
  
//   // Відкриваємо модальне вікно і вставляємо інформацію
//   const modal = document.querySelector('.modal');
//   const modalContent = document.querySelector('.modal-content');
//   modalContent.innerHTML = productInfo;
  
//   modal.style.display = 'block';
// }

// Додаємо обробник події click на картку продукту
const productCard = document.querySelector('.product-card');
productCard.addEventListener('click', openProductModal);       
