
//  CTRL+C from marge of Ruslans Pull Request CTRL+V to main

// ====================================================================================================

// Приклад скрипту для відкриття/закриття модальних вікон, в ньому не дописано id модального вікна покупки  

// ====================================================================================================

import basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

// Функція для створення та відкриття модального вікна
function showModal(modalId, content) {
  const instance = basicLightbox.create(content, {
    onShow: (instance) => {
      document.addEventListener('keydown', onModalEscape);
      instance.element().querySelector('.js-modal-close').onclick = () => {
        instance.close();
        clearModalContent(modalId);
      };
    },
    onClose: () => {
      document.removeEventListener('keydown', onModalEscape);
      clearModalContent(modalId);
    }
  });

  // Функція для закриття модального вікна клавішею Escape
  function onModalEscape(evt) {
    if (evt.key === 'Escape') {
      instance.close();
      clearModalContent(modalId);
    }
  }

  instance.show();
}

document.addEventListener('DOMContentLoaded', () => {
  // Встановлення обробників подій для відкриття модальних вікон
  document.getElementById('trigger-subscribing').addEventListener('click', () => {
    showModal('popup-subscribing', document.getElementById('popup-subscribing').innerHTML);
  });

  document.getElementById('trigger-email').addEventListener('click', () => {
    showModal('popup-email', document.getElementById('popup-email').innerHTML);
  });

  document.getElementById('trigger-order').addEventListener('click', () => {
    showModal('popup-order', document.getElementById('popup-order').innerHTML);
  });
});
