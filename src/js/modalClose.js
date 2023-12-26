// функція приймає markup - розмітка у вигляді рядка
// та querySelector - селектор для кнопки закриття модального вікна

import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function onBasicLightbox(markup, querySelector) {
  const instance = basicLightbox.create(markup, {
    onShow: instance => {
      document.addEventListener('keydown', onModal);
      instance.element().querySelector(querySelector).onclick = instance.close;
    },

    onClose: () => {
      document.removeEventListener('keydown', onModal);
    },
  });

  function onModal(evt) {
    if (evt.key === 'Escape') {
      instance.close();
    }
  }

  instance.show();
}
export { onBasicLightbox };
