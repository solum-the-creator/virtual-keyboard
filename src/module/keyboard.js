import { keyboardEnglisLayout, keyboardRussianLayout } from './layout';

export default class Keyboard {
  constructor() {
    this.genereateKeyboardContainer();
    this.generateInputField(6, 68);

    document.querySelectorAll('.main')[0].appendChild(this.inputField);
    document.querySelectorAll('.main')[0].appendChild(this.keyboardContainer);

    this.layout = 'english';
    this.generateKeyboard();

    // document.addEventListener('keydown', this.onKeyDown.bind(this));
    // document.addEventListener('keyup', this.onKeyUp.bind(this));
  }

  genereateKeyboardContainer() {
    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('main-keyboard');
    keyboardContainer.classList.add('keyboard');
    this.keyboardContainer = keyboardContainer;
  }

  generateInputField(rows, cols) {
    const inputField = document.createElement('textarea');
    inputField.classList.add('main__textarea');
    inputField.id = 'keyboard-textarea';
    inputField.name = 'keyboard-textarea';
    inputField.rows = rows.toString();
    inputField.cols = cols.toString();
    this.inputField = inputField;
  }

  generateKeyboard() {
    this.keyboardContainer.innerHTML = '';

    const layout = this.pickLayout();
    layout.forEach((row) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');
      keyboardRow.classList.add('row');

      row.keys.forEach((key) => {
        const keyElement = this.generateKey(key);
        // keyElement.addEventListener('click', () => {
        //   this.typeCharacter(key);
        // });
        keyboardRow.appendChild(keyElement);
      });
      this.keyboardContainer.appendChild(keyboardRow);
    });
  }

  pickLayout() {
    if (this.layout === 'english') {
      return keyboardEnglisLayout;
    }
    return keyboardRussianLayout;
  }

  // eslint-disable-next-line class-methods-use-this
  generateKey(key) {
    const rowKey = document.createElement('div');
    rowKey.classList.add('row__key');
    rowKey.classList.add('key');

    if (key.typeKey === 'letter') {
      rowKey.classList.add('key_letter');
    } else {
      rowKey.classList.add('key_function');
      switch (key.codeKey) {
        case 'Backspace':
        case 'Tab':
        case 'Delete':
        case 'CapsLock':
        case 'Enter':
        case 'Space':
          rowKey.classList.add(`key_${key.codeKey.toLowerCase()}`);
          break;

        case 'ShiftLeft':
        case 'ShiftRight':
          rowKey.classList.add('key_shift');
          break;

        case 'ControlLeft':
        case 'ControlRight':
          rowKey.classList.add('key_ctrl');
          break;

        case 'MetaLeft':
          rowKey.classList.add('key_meta');
          break;

        case 'AltLeft':
        case 'Altright':
          rowKey.classList.add('key_alt');
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
    return rowKey;
  }
}
