import KeyboardKey from './key';

export const keyboardEnglisLayout = [
  [
    new KeyboardKey('Backquote', '`', '~'),
    new KeyboardKey('Digit1', '1', '!'),
    new KeyboardKey('Digit2', '2', '@'),
    new KeyboardKey('Digit3', '3', '#'),
    new KeyboardKey('Digit4', '4', '$'),
    new KeyboardKey('Digit5', '5', '%'),
    new KeyboardKey('Digit6', '6', '^'),
    new KeyboardKey('Digit7', '7', '&'),
    new KeyboardKey('Digit8', '8', '*'),
    new KeyboardKey('Digit9', '9', '('),
    new KeyboardKey('Digit0', '0', ')'),
    new KeyboardKey('Minus', '-', '_'),
    new KeyboardKey('Equal', '=', '+'),
    new KeyboardKey('Backspace', 'Backspace'),
  ],
  [
    new KeyboardKey('Tab', 'Tab'),
    new KeyboardKey('KeyQ', 'q', 'Q'),
    new KeyboardKey('KeyW', 'w', 'W'),
    new KeyboardKey('KeyE', 'e', 'E'),
    new KeyboardKey('KeyR', 'r', 'R'),
    new KeyboardKey('KeyT', 't', 'T'),
    new KeyboardKey('KeyY', 'y', 'Y'),
    new KeyboardKey('KeyU', 'u', 'U'),
    new KeyboardKey('KeyI', 'i', 'I'),
    new KeyboardKey('KeyO', 'o', 'O'),
    new KeyboardKey('KeyP', 'p', 'P'),
    new KeyboardKey('BracketLeft', '[', '{'),
    new KeyboardKey('BracketRight', ']', '}'),
    new KeyboardKey('Backslash', '\\', '|'),
    new KeyboardKey('Delete', 'Del'),
  ],
  [
    new KeyboardKey('CapsLock', 'CapsLk'),
    new KeyboardKey('KeyA', 'a', 'A'),
    new KeyboardKey('KeyS', 's', 'S'),
    new KeyboardKey('KeyD', 'd', 'D'),
    new KeyboardKey('KeyF', 'f', 'F'),
    new KeyboardKey('KeyG', 'g', 'G'),
    new KeyboardKey('KeyH', 'h', 'H'),
    new KeyboardKey('KeyJ', 'j', 'J'),
    new KeyboardKey('KeyK', 'k', 'K'),
    new KeyboardKey('KeyL', 'l', 'L'),
    new KeyboardKey('Semicolon', ';', ':'),
    new KeyboardKey('Quote', '\'', '"'),
    new KeyboardKey('Enter', 'Enter'),
  ],
  [
    new KeyboardKey('ShiftLeft', 'Shift'),
    new KeyboardKey('KeyZ', 'z', 'Z'),
    new KeyboardKey('KeyX', 'x', 'X'),
    new KeyboardKey('KeyC', 'c', 'C'),
    new KeyboardKey('KeyV', 'v', 'V'),
    new KeyboardKey('KeyB', 'b', 'B'),
    new KeyboardKey('KeyN', 'n', 'N'),
    new KeyboardKey('KeyM', 'm', 'M'),
    new KeyboardKey('Comma', ',', '<'),
    new KeyboardKey('Period', '.', '>'),
    new KeyboardKey('Slash', '/', '?'),
    new KeyboardKey('ArrowUp', '↑'),
    new KeyboardKey('ShiftRight', 'Shift'),
  ],
  [
    new KeyboardKey('ControlLeft', 'Ctrl'),
    new KeyboardKey('MetaLeft', 'Win'),
    new KeyboardKey('AltLeft', 'Alt'),
    new KeyboardKey('Space', ''),
    new KeyboardKey('AltRight', 'Alt'),
    new KeyboardKey('ArrowLeft', '←'),
    new KeyboardKey('ArrowDown', '↓'),
    new KeyboardKey('ArrowRight', '→'),
    new KeyboardKey('ControlRight', 'Ctrl'),
  ],
];

export const keyboardRussianLayout = [
  [
    new KeyboardKey('Backquote', 'ё', 'Ё'),
    new KeyboardKey('Digit1', '1', '!'),
    new KeyboardKey('Digit2', '2', '"'),
    new KeyboardKey('Digit3', '3', '№'),
    new KeyboardKey('Digit4', '4', ';'),
    new KeyboardKey('Digit5', '5', '%'),
    new KeyboardKey('Digit6', '6', ':'),
    new KeyboardKey('Digit7', '7', '?'),
    new KeyboardKey('Digit8', '8', '*'),
    new KeyboardKey('Digit9', '9', '('),
    new KeyboardKey('Digit0', '0', ')'),
    new KeyboardKey('Minus', '-', '_'),
    new KeyboardKey('Equal', '=', '+'),
    new KeyboardKey('Backspace', 'Backspace'),
  ],
  [
    new KeyboardKey('Tab', 'Tab'),
    new KeyboardKey('KeyQ', 'й', 'Й'),
    new KeyboardKey('KeyW', 'ц', 'Ц'),
    new KeyboardKey('KeyE', 'у', 'У'),
    new KeyboardKey('KeyR', 'к', 'К'),
    new KeyboardKey('KeyT', 'е', 'Е'),
    new KeyboardKey('KeyY', 'н', 'Н'),
    new KeyboardKey('KeyU', 'г', 'Г'),
    new KeyboardKey('KeyI', 'ш', 'Ш'),
    new KeyboardKey('KeyO', 'щ', 'Щ'),
    new KeyboardKey('KeyP', 'з', 'З'),
    new KeyboardKey('BracketLeft', 'х', 'Х'),
    new KeyboardKey('BracketRight', 'ъ', 'Ъ'),
    new KeyboardKey('Backslash', '\\', '/'),
    new KeyboardKey('Delete', 'Del'),
  ],
  [
    new KeyboardKey('CapsLock', 'CapsLk'),
    new KeyboardKey('KeyA', 'ф', 'Ф'),
    new KeyboardKey('KeyS', 'ы', 'Ы'),
    new KeyboardKey('KeyD', 'в', 'В'),
    new KeyboardKey('KeyF', 'а', 'А'),
    new KeyboardKey('KeyG', 'п', 'П'),
    new KeyboardKey('KeyH', 'р', 'Р'),
    new KeyboardKey('KeyJ', 'о', 'О'),
    new KeyboardKey('KeyK', 'л', 'Л'),
    new KeyboardKey('KeyL', 'д', 'Д'),
    new KeyboardKey('Semicolon', 'ж', 'Ж'),
    new KeyboardKey('Quote', 'э', 'Э'),
    new KeyboardKey('Enter', 'Enter'),
  ],
  [
    new KeyboardKey('ShiftLeft', 'Shift'),
    new KeyboardKey('KeyZ', 'я', 'Я'),
    new KeyboardKey('KeyX', 'ч', 'Ч'),
    new KeyboardKey('KeyC', 'с', 'С'),
    new KeyboardKey('KeyV', 'м', 'М'),
    new KeyboardKey('KeyB', 'и', 'И'),
    new KeyboardKey('KeyN', 'т', 'Т'),
    new KeyboardKey('KeyM', 'ь', 'Ь'),
    new KeyboardKey('Comma', 'б', 'б'),
    new KeyboardKey('Period', 'ю', 'Ю'),
    new KeyboardKey('Slash', '.', ','),
    new KeyboardKey('ArrowUp', '↑'),
    new KeyboardKey('ShiftRight', 'Shift'),
  ],
  [
    new KeyboardKey('ControlLeft', 'Ctrl'),
    new KeyboardKey('MetaLeft', 'Win'),
    new KeyboardKey('AltLeft', 'Alt'),
    new KeyboardKey('Space', ''),
    new KeyboardKey('AltRight', 'Alt'),
    new KeyboardKey('ArrowLeft', '←'),
    new KeyboardKey('ArrowDown', '↓'),
    new KeyboardKey('ArrowRight', '→'),
    new KeyboardKey('ControlRight', 'Ctrl'),
  ],
];
