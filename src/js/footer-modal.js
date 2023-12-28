// -------------------Підключи цей код щоб працювало---------------------


const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
  modalImg: document.querySelector('.modal__food-basket'),
  modalInner: document.querySelector('.modal-inner'),
};

export const form = document.querySelector('.footer-form');

const ESC_KEY_CODE = 'Escape';

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
        refs.modalImg.style.display = 'none';
        refs.modalInner.innerHTML = `
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
        return;
      }
      if (responce.status === 201) {
        onOpenModal();
        refs.modalImg.style.display = 'block';
        refs.modalInner.innerHTML = `
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
          `;
        form.reset();
        return;
      }
      onOpenModal();
    })

    .catch(error => console.log(error.message));
}
