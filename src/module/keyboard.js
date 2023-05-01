import { keyboardEnglisLayout, keyboardRussianLayout } from './layout';

export default class Keyboard {
  constructor() {
    this.genereateKeyboardContainer();
    this.generateInputField(6, 68);

    document.querySelectorAll('.main')[0].appendChild(this.inputField);
    document.querySelectorAll('.main')[0].appendChild(this.keyboardContainer);

    this.isCapsLockOn = false;
    this.layout = 'english';
    this.isShiftPressed = false;
    this.isCtrlPressed = false;
    this.isAltPressed = false;
    this.cursorPos = 0;

    this.generateKeyboard();

    window.addEventListener('keydown', (event) => this.onKeyDown(event));
    window.addEventListener('keyup', (event) => this.onKeyUp(event));
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
    inputField.addEventListener('keydown', (event) => {
      event.preventDefault();
    });

    inputField.addEventListener('keypress', (event) => {
      event.preventDefault();
    });
    this.inputField = inputField;
  }

  generateKeyboard() {
    this.keyboardContainer.innerHTML = '';

    const layout = this.pickLayout();
    layout.forEach((row) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');
      keyboardRow.classList.add('row');

      row.forEach((key) => {
        const keyElement = this.generateKey(key);
        keyElement.addEventListener('click', () => {
          if (key.typeKey === 'letter') {
            this.typeCharacter(key.valueKey);
          } else {
            this.doActionKey(key.codeKey);
          }
        });
        keyboardRow.appendChild(keyElement);
      });
      this.keyboardContainer.appendChild(keyboardRow);
    });
  }

  typeCharacter(char) {
    let curChar = char;
    if (this.isCapsLockOn && char.match(/[a-zA-Z]/)) {
      curChar = char.toUpperCase();
    }
    this.inputField.value += curChar;
    this.cursorPos += 1;
  }

  doActionKey(key) {
    switch (key) {
      case 'Delete':
        this.inputField.value = this.inputField.value.substring(0, this.cursorPos)
          + this.inputField.value.substring(this.cursorPos + 1);
        break;
      case 'Backspace':
        this.inputField.value = this.inputField.value.substring(0, this.cursorPos - 1)
          + this.inputField.value.substring(this.cursorPos);
        this.cursorPos -= 1;
        break;
      case 'Tab':
        this.inputField.value += '\t';
        this.cursorPos += 1;
        break;
      case 'CapsLock':
        this.toggleCapsLock();
        break;
      case 'Enter':
        this.inputField.value += '\n';
        this.cursorPos += 1;
        break;
      case 'Shift':
        // Do nothing, handle in the keydown event listener
        break;
      case 'Ctrl':
        // Do nothing, handle in the keydown event listener
        break;
      case 'Alt':
        // Do nothing, handle in the keydown event listener
        break;
      case 'Space':
        this.inputField.value += ' ';
        this.cursorPos += 1;
        break;
      default:
        break;
    }
  }

  // eslint-disable-next-line class-methods-use-this
  toggleCapsLock() {
    console.log('capslock press');
    // const capsLockKey = this.keyboardContainer.querySelector('.key-capslock');
    // const letters = this.keyboardContainer.querySelectorAll('.virtual-keyboard-key:not(.key-capslock):not(.key-shift):not(.key-enter):not(.key-backspace):not(.key-tab):not(.key-space)');
    // letters.forEach((letter) => {
    //   const letterKey = letter;
    //   letterKey.textContent = capsLockKey.classList.contains('active') ? letter.textContent.toLowerCase() : letter.textContent.toUpperCase();
    // });
    // capsLockKey.classList.toggle('active');
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

  onKeyDown(event) {
    const charCode = event.code;

    // If the pressed key is a printable character, type it on the virtual keyboard
    if (!event.ctrlKey && !event.altKey && !event.metaKey && charCode !== 'Space') {
      const isUpperCase = this.isCapsLockOn || (this.isShiftPressed && !this.isAltPressed);

      const flatLayout = this.pickLayout().flat();

      const layoutKey = flatLayout.find((key) => key.codeKey === charCode);
      if (layoutKey && layoutKey.typeKey !== 'function') {
        this.typeCharacter(layoutKey[isUpperCase ? 'shiftKey' : 'valueKey']);
      }
    }

    const { code } = event;
    switch (code) {
      case 'ShiftLeft': // Shift
        this.isShiftPressed = true;
        break;
      case 'ShiftRight': // Shift
        this.isShiftPressed = true;
        break;
      case 'ControlLeft': // Ctrl
        this.isCtrlPressed = true;
        break;
      case 'ControlRight': // Ctrl
        this.isCtrlPressed = true;
        break;
      case 'AltLeft': // Alt
        this.isAltPressed = true;
        break;
      case 'AltRight': // Alt
        this.isAltPressed = true;
        break;
      default:
        break;
    }

    // Handle language change with Shift + Alt
    if (this.isShiftPressed && this.isAltPressed) {
      this.toggleLayout();
    }
  }

  onKeyUp(event) {
    const { code } = event;
    switch (code) {
      case 'ShiftLeft': // Shift
        this.isShiftPressed = false;
        break;
      case 'ShiftRight': // Shift
        this.isShiftPressed = false;
        break;
      case 'ControlLeft': // Ctrl
        this.isCtrlPressed = false;
        break;
      case 'ControlRight': // Ctrl
        this.isCtrlPressed = false;
        break;
      case 'AltLeft': // Alt
        this.isAltPressed = false;
        break;
      case 'AltRight': // Alt
        this.isAltPressed = false;
        break;
      default:
        break;
    }
  }

  toggleLayout() {
    this.layout = this.layout === 'english' ? 'russian' : 'english';
    this.generateKeyboard();
  }
}
