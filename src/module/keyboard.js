import { keyboardEnglisLayout, keyboardRussianLayout } from './layout';

export default class Keyboard {
  constructor() {
    this.genereateKeyboardContainer();
    this.generateInputField(6, 68);

    document.querySelectorAll('.main')[0].appendChild(this.inputField);
    document.querySelectorAll('.main')[0].appendChild(this.keyboardContainer);

    this.isCapsLockOn = false;
    this.layout = localStorage.keyboardLanguage || 'english';
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
        keyElement.addEventListener('mousedown', () => {
          if (key.typeKey === 'letter') {
            this.typeCharacter(key.valueKey);
          } else {
            this.doActionKey(key.codeKey);
          }
        });
        keyElement.addEventListener('mouseup', () => {
          if (key.typeKey !== 'letter') {
            this.onKeyUp(key.codeKey);
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
    this.inputField.value = this.inputField.value.substring(0, this.cursorPos)
    + curChar + this.inputField.value.substring(this.cursorPos);
    this.cursorPos += char.length;
    this.inputField.setSelectionRange(this.cursorPos, this.cursorPos);
  }

  doActionKey(key) {
    switch (key) {
      case 'Delete':
        this.inputField.value = this.inputField.value.substring(0, this.cursorPos)
          + this.inputField.value.substring(this.cursorPos + 1);
        this.inputField.setSelectionRange(this.cursorPos, this.cursorPos);
        break;
      case 'Backspace':
        this.inputField.value = this.inputField.value.substring(0, this.cursorPos - 1)
          + this.inputField.value.substring(this.cursorPos);
        this.cursorPos -= 1;
        if (this.cursorPos < 0) this.cursorPos = 0;
        this.inputField.setSelectionRange(this.cursorPos, this.cursorPos);
        break;
      case 'Tab':
        this.typeCharacter('    ');
        break;
      case 'CapsLock':
        this.toggleCapsLock();
        break;
      case 'Enter':
        this.typeCharacter('\n');
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.isShiftPressed = true;
        break;
      case 'ControlLeft':
      case 'ControlRight':
        this.isCtrlPressed = true;
        break;
      case 'AltLeft':
      case 'AltRight':
        this.isAltPressed = true;
        break;
      case 'Space':
        this.typeCharacter(' ');
        break;

      case 'ArrowUp':
        this.moveCursorUp();
        break;

      case 'ArrowLeft':
        if (this.cursorPos === 0) this.cursorPos = 1;
        this.cursorPos -= 1;
        this.inputField.setSelectionRange(this.cursorPos, this.cursorPos);
        break;
      case 'ArrowRight':
        if (this.cursorPos > this.inputField.value.length - 1) {
          this.cursorPos = this.inputField.value.length - 1;
        }
        this.cursorPos += 1;
        this.inputField.setSelectionRange(this.cursorPos, this.cursorPos);
        break;
      case 'ArrowDown':
        this.moveCursorDown();
        break;
      default:
        break;
    }
  }

  moveCursorUp() {
    const currentValue = this.inputField.value;

    const currentLineStart = currentValue.lastIndexOf('\n', this.cursorPos - 1) + 1;

    let currentLineEnd = currentValue.indexOf('\n', this.cursorPos);
    if (currentLineEnd === -1) {
      currentLineEnd = currentValue.length;
    }
    const currentLinePos = this.cursorPos - currentLineStart;

    const prevLineStart = currentValue.lastIndexOf('\n', currentLineStart - 2) + 1;
    const prevLineEnd = currentValue.indexOf('\n', prevLineStart);
    const prevLineLength = prevLineEnd - prevLineStart;
    const newCursorPos = prevLineStart + Math.min(currentLinePos, prevLineLength);
    this.cursorPos = newCursorPos;
    this.inputField.setSelectionRange(newCursorPos, newCursorPos);
  }

  moveCursorDown() {
    const currentValue = this.inputField.value;
    const currentLineStart = currentValue.lastIndexOf('\n', this.cursorPos - 1) + 1;
    let currentLineEnd = currentValue.indexOf('\n', this.cursorPos);
    if (currentLineEnd === -1) {
      currentLineEnd = currentValue.length;
    }
    const currentLinePos = this.cursorPos - currentLineStart;

    const nextLineStart = currentValue.indexOf('\n', currentLineEnd) + 1;

    let nextLineEnd = currentValue.indexOf('\n', nextLineStart + 1);
    if (nextLineEnd === -1) {
      nextLineEnd = currentValue.length;
    }
    const nextLineLength = nextLineEnd - nextLineStart;
    const newCursorPos = nextLineStart + Math.min(currentLinePos, nextLineLength);
    this.cursorPos = newCursorPos;
    this.inputField.setSelectionRange(newCursorPos, newCursorPos);
  }

  // eslint-disable-next-line class-methods-use-this
  toggleCapsLock() {
    this.isCapsLockOn = !this.isCapsLockOn;
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
    rowKey.dataset.code = key.codeKey;
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

    const isUpperCase = (this.isShiftPressed && !this.isAltPressed);
    const flatLayout = this.pickLayout().flat();
    const layoutKey = flatLayout.find((key) => key.codeKey === charCode);
    if (layoutKey) {
      const currentKeyboardKey = this.keyboardContainer.querySelector(`.key[data-code="${layoutKey.codeKey}"]`);
      currentKeyboardKey.classList.add('key_down');
      if (layoutKey.typeKey !== 'function') {
        this.typeCharacter(layoutKey[isUpperCase ? 'shiftKey' : 'valueKey']);
      } else {
        this.doActionKey(layoutKey.codeKey);
      }
    }

    if (this.isShiftPressed && this.isAltPressed) {
      this.toggleLayout();
    }
  }

  onKeyUp(event) {
    let code = event;
    if (event.code) {
      code = event.code;
    }
    switch (code) {
      case 'ShiftLeft':
      case 'ShiftRight':
        this.isShiftPressed = false;
        break;
      case 'ControlLeft':
      case 'ControlRight':
        this.isCtrlPressed = false;
        break;
      case 'AltLeft':
      case 'AltRight':
        this.isAltPressed = false;
        break;
      default:
        break;
    }
    const currentKeyboardKey = this.keyboardContainer.querySelector(`.key[data-code="${code}"]`);
    if (currentKeyboardKey) {
      currentKeyboardKey.classList.remove('key_down');
      currentKeyboardKey.classList.add('key_up');
      currentKeyboardKey.addEventListener('animationend', (animationEvent) => {
        if (animationEvent.animationName === 'shadowFadeOut') {
          currentKeyboardKey.classList.remove('key_up');
        }
      });
    }
  }

  toggleLayout() {
    this.layout = this.layout === 'english' ? 'russian' : 'english';
    localStorage.keyboardLanguage = this.layout;
    this.generateKeyboard();
  }
}
