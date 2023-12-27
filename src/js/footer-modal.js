// -------------------Підключи цей код щоб працювало---------------------
// import refs from './js/refs.js';
// import { postEmail } from './js/footer-modal.js';

// refs.form.addEventListener('submit', postEmail);

export const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),

  backdrop: document.querySelector('.js-backdrop'),
  modal: document.querySelector('.modal-inner'),
  form: document.querySelector('.footer-form'),
};

const ESC_KEY_CODE = 'Escape';

refs.form.addEventListener('submit', postEmail);

function onOpenModal() {
  window.addEventListener('keydown', onEscKeyPress);
  refs.closeModalBtn.addEventListener('click', onCloseModal);

  refs.backdrop.addEventListener('click', onBackdropClick);
  document.body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.closeModalBtn.removeEventListener('click', onCloseModal);

  refs.backdrop.removeEventListener('click', onBackdropClick);
  document.body.classList.remove('show-modal');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal();
  }
}

function onEscKeyPress(event) {
  const isEscCode = event.code === ESC_KEY_CODE;
  if (isEscCode) {
    onCloseModal();
  }
}

export async function postEmail(params) {
  params.preventDefault();

  const email = params.target.elements.email.value;

  console.log(email);

  const obj = {
    email: email,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  };

  await fetch('https://food-boutique.b.goit.study/api/subscription', options)
    .then(responce => {
      responce.json();
      console.log(responce);
      if (responce.status === 409) {
        onOpenModal();
        refs.modal.innerHTML = `
        <div class="content-text">
          <div class="text-message">
            <span>This </span>
            <span class="highlight">email address </span>
            <span>has already been entered</span>
          </div>
          <div class="additional-text">
            You have already subscribed to our new products. Watch for offers at
            the mailing address.
          </div>
        </div>`;
        return;
      }
      if (responce.status === 201) {
        onOpenModal();
        refs.modal.innerHTML = `
          <div class="content-text">
            <div class="subscribing-text">
              <span>Thanks for subscribing for </span>
              <span class="highlight">new</span>
              <span> products</span>
            </div>
            <div class="promise-text">
              We promise you organic and high-quality products that will meet your
              expectations. Please stay with us and we promise you many pleasant
              surprises.
            </div>
          </div>
          <img src="./Rectangle 2.png"/>
          `;
        return;
      }
      onOpenModal();
      refs.modal.innerHTML = `
        <div class="content-text">
          <div class="additional-text">
            Sorry!!! Somthig going wrong:(
          </div>
        </div>`;
    })

    .catch(error => console.log(error.message));
}
