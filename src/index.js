import './main.scss';

import { keyboardEnglisLayout } from './module/layout';

const generateKeyboard = (keyboardLayout) => {
  const keyboard = document.createElement('div');
  keyboard.classList.add('main-keyboard');
  keyboard.classList.add('keyboard');

  keyboardLayout.forEach((rowKeys) => {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard__row');
    keyboardRow.classList.add('row');

    rowKeys.keys.forEach((key) => {
      const rowKey = document.createElement('div');
      rowKey.classList.add('row__key');
      rowKey.classList.add('key');
      if (key.typeKey === 'letter') {
        rowKey.classList.add('key_letter');
      } else {
        rowKey.classList.add('key_function');
        switch (key.codeKey) {
          case 'Backspace':
            rowKey.classList.add('key_backspace');
            break;

          case 'Tab':
            rowKey.classList.add('key_tab');
            break;

          case 'Delete':
            rowKey.classList.add('key_delete');
            break;

          case 'CapsLock':
            rowKey.classList.add('key_capslock');
            break;

          case 'Enter':
            rowKey.classList.add('key_enter');
            break;

          case 'ShiftLeft':
            rowKey.classList.add('key_shift');
            break;

          case 'ShiftRight':
            rowKey.classList.add('key_shift');
            break;

          case 'ControlLeft':
            rowKey.classList.add('key_ctrl');
            break;

          case 'ControlRight':
            rowKey.classList.add('key_ctrl');
            break;

          case 'MetaLeft':
            rowKey.classList.add('key_meta');
            break;

          case 'AltLeft':
            rowKey.classList.add('key_alt');
            break;

          case 'Altright':
            rowKey.classList.add('key_alt');
            break;

          case 'Space':
            rowKey.classList.add('key_space');
            break;

          case 'ArrowUp':
            rowKey.classList.add('key_arrow-up');
            break;

          case 'ArrowLeft':
            rowKey.classList.add('key_arrow-left');
            break;

          case 'ArrowRight':
            rowKey.classList.add('key_arrow-right');
            break;

          case 'ArrowDown':
            rowKey.classList.add('key_arrow-down');
            break;

          default:
            break;
        }
      }

      const keyValue = document.createElement('span');
      keyValue.classList.add('key__value');
      keyValue.textContent = key.valueKey;

      rowKey.appendChild(keyValue);
      keyboardRow.appendChild(rowKey);
    });

    keyboard.appendChild(keyboardRow);
  });

  return keyboard;
};

const generateHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header__title');
  headerTitle.textContent = 'Virtual Keyboard';

  header.appendChild(headerTitle);

  document.body.appendChild(header);
};

const generateMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');

  const mainTextArea = document.createElement('textarea');
  mainTextArea.classList.add('main__textarea');
  mainTextArea.name = 'keyboard-textarea';
  mainTextArea.id = 'keyboard-textarea';
  mainTextArea.cols = '68';
  mainTextArea.rows = '6';

  const mainKeyboard = generateKeyboard(keyboardEnglisLayout);

  main.appendChild(mainTextArea);
  main.appendChild(mainKeyboard);

  document.body.appendChild(main);
};

const generateFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const footerTitle = document.createElement('h4');
  footerTitle.classList.add('footer__title');
  footerTitle.textContent = 'Copyright©2023 solum-the-creator';

  footer.appendChild(footerTitle);

  document.body.appendChild(footer);
};

const generatePage = () => {
  generateHeader();
  generateMain();
  generateFooter();
};

generatePage();
