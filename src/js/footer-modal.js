import fetchApi from './fetchApi'; //Підключив функцію запитів на сервер
import Icon from '/img/icons.svg#close-icon';
import ModalFilter from './modal/ModalFilter';

// *****Змінні на модалці*****
// const refs = {
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop'),
//   modalImg: document.querySelector('.modal__food-basket'),
//   modal: document.querySelector('.modal'),
// };

export const form = document.querySelector('.footer-form'); //Експортую змінну для підключення у "maim.js"

// const ESC_KEY_CODE = 'Escape';

// // ---------------Функції відкриття та закриття модалки------------------

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   refs.closeModalBtn.addEventListener('click', onCloseModal);

//   refs.backdrop.addEventListener('click', onBackdropClick);
//   document.body.classList.add('show-modal');
// }

// function onCloseModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   refs.closeModalBtn.removeEventListener('click', onCloseModal);

//   refs.backdrop.removeEventListener('click', onBackdropClick);
//   document.body.classList.remove('show-modal');
// }

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     onCloseModal();
//   }
// }

// function onEscKeyPress(event) {
//   const isEscCode = event.code === ESC_KEY_CODE;
//   if (isEscCode) {
//     onCloseModal();
//   }
// }

// ------------Перевірка наявності імейлу на сервері та відмальовування вмісту модалки--------------

export async function postEmail(params) {
  params.preventDefault();

  const email = params.target.elements.email.value;

  await fetchApi
    .subscribe(email)
    .then(responce => {
      ModalFilter._modal.innerHTML = `
        <button class="modal-btn" data-action="close-modal">
          <svg class="modal-btn-icon" >
            <use href="${Icon}"></use>
          </svg>
        </button>
          <div class="modal__title--wrap">
          <p class="modal__title">
            Thanks for subscribing for
            <span class="modal__accent-text">new</span>
            products
          </p>
        </div>
        <div class="modal__description--wrap">
          <p class="modal__description">
            We promise you organic and high-quality products that will meet your
            expectations. Please stay with us and we promise you many pleasant
            surprises.
          </p>
        </div>
        <img
          class="modal__food-basket"
          src="./img/Rectangle 2.png"
          alt="Кошик з фруктамі"
        />
      </div>
            `;
      ModalFilter.open();
      form.reset();
    })

    .catch(error => {
      ModalFilter._modal.innerHTML = `
      <button class="modal-btn " data-action="close-modal">
        <svg class="modal-btn-icon" >
          <use href="${Icon}"></use>
        </svg>
      </button>
      <div class="modal__title--wrap">
        <p class="modal__title">
          This
          <span class="modal__accent-text">email address </span>
          has already been entered
        </p>
      </div>
      <div class="modal__description--wrap">
        <p class="modal__description">
          You have already subscribed to our new products. Watch for offers at
          the mailing address.
        </p>
      </div>`;
      ModalFilter.open();
    });
}
