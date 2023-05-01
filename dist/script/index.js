/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-template/./src/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _module_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/keyboard */ \"./src/module/keyboard.js\");\n\r\n\r\n\r\n\r\nconst generateHeader = () => {\r\n  const header = document.createElement('header');\r\n  header.classList.add('header');\r\n\r\n  const headerTitle = document.createElement('h1');\r\n  headerTitle.classList.add('header__title');\r\n  headerTitle.textContent = 'Virtual Keyboard';\r\n\r\n  header.appendChild(headerTitle);\r\n\r\n  document.body.appendChild(header);\r\n};\r\n\r\nconst generateMain = () => {\r\n  const main = document.createElement('main');\r\n  main.classList.add('main');\r\n\r\n  document.body.appendChild(main);\r\n  const keyboard = new _module_keyboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n};\r\n\r\nconst generateFooter = () => {\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add('footer');\r\n\r\n  const footerTitle = document.createElement('h4');\r\n  footerTitle.classList.add('footer__title');\r\n  footerTitle.textContent = 'Copyright©2023 solum-the-creator';\r\n\r\n  footer.appendChild(footerTitle);\r\n\r\n  document.body.appendChild(footer);\r\n};\r\n\r\nconst generatePage = () => {\r\n  generateHeader();\r\n  generateMain();\r\n  generateFooter();\r\n};\r\n\r\ngeneratePage();\r\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/module/key.js":
/*!***************************!*\
  !*** ./src/module/key.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyboardKey)\n/* harmony export */ });\nclass KeyboardKey {\n  constructor(codeKey, valueKey, shiftKey) {\n    this.codeKey = codeKey;\n    this.valueKey = valueKey;\n    if (!shiftKey) {\n      this.shiftKey = valueKey;\n      this.typeKey = 'function';\n    } else {\n      this.shiftKey = shiftKey;\n      this.typeKey = 'letter';\n    }\n  }\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/module/key.js?");

/***/ }),

/***/ "./src/module/keyboard.js":
/*!********************************!*\
  !*** ./src/module/keyboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Keyboard)\n/* harmony export */ });\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/module/layout.js\");\n\n\nclass Keyboard {\n  constructor() {\n    this.genereateKeyboardContainer();\n    this.generateInputField(6, 68);\n\n    document.querySelectorAll('.main')[0].appendChild(this.inputField);\n    document.querySelectorAll('.main')[0].appendChild(this.keyboardContainer);\n\n    this.layout = 'english';\n    this.generateKeyboard();\n\n    // document.addEventListener('keydown', this.onKeyDown.bind(this));\n    // document.addEventListener('keyup', this.onKeyUp.bind(this));\n  }\n\n  genereateKeyboardContainer() {\n    const keyboardContainer = document.createElement('div');\n    keyboardContainer.classList.add('main-keyboard');\n    keyboardContainer.classList.add('keyboard');\n    this.keyboardContainer = keyboardContainer;\n  }\n\n  generateInputField(rows, cols) {\n    const inputField = document.createElement('textarea');\n    inputField.classList.add('main__textarea');\n    inputField.id = 'keyboard-textarea';\n    inputField.name = 'keyboard-textarea';\n    inputField.rows = rows.toString();\n    inputField.cols = cols.toString();\n    this.inputField = inputField;\n  }\n\n  generateKeyboard() {\n    this.keyboardContainer.innerHTML = '';\n\n    const layout = this.pickLayout();\n    layout.forEach((row) => {\n      const keyboardRow = document.createElement('div');\n      keyboardRow.classList.add('keyboard__row');\n      keyboardRow.classList.add('row');\n\n      row.keys.forEach((key) => {\n        const keyElement = this.generateKey(key);\n        // keyElement.addEventListener('click', () => {\n        //   this.typeCharacter(key);\n        // });\n        keyboardRow.appendChild(keyElement);\n      });\n      this.keyboardContainer.appendChild(keyboardRow);\n    });\n  }\n\n  pickLayout() {\n    if (this.layout === 'english') {\n      return _layout__WEBPACK_IMPORTED_MODULE_0__.keyboardEnglisLayout;\n    }\n    return _layout__WEBPACK_IMPORTED_MODULE_0__.keyboardRussianLayout;\n  }\n\n  // eslint-disable-next-line class-methods-use-this\n  generateKey(key) {\n    const rowKey = document.createElement('div');\n    rowKey.classList.add('row__key');\n    rowKey.classList.add('key');\n\n    if (key.typeKey === 'letter') {\n      rowKey.classList.add('key_letter');\n    } else {\n      rowKey.classList.add('key_function');\n      switch (key.codeKey) {\n        case 'Backspace':\n        case 'Tab':\n        case 'Delete':\n        case 'CapsLock':\n        case 'Enter':\n        case 'Space':\n          rowKey.classList.add(`key_${key.codeKey.toLowerCase()}`);\n          break;\n\n        case 'ShiftLeft':\n        case 'ShiftRight':\n          rowKey.classList.add('key_shift');\n          break;\n\n        case 'ControlLeft':\n        case 'ControlRight':\n          rowKey.classList.add('key_ctrl');\n          break;\n\n        case 'MetaLeft':\n          rowKey.classList.add('key_meta');\n          break;\n\n        case 'AltLeft':\n        case 'Altright':\n          rowKey.classList.add('key_alt');\n          break;\n\n        case 'ArrowUp':\n          rowKey.classList.add('key_arrow-up');\n          break;\n\n        case 'ArrowLeft':\n          rowKey.classList.add('key_arrow-left');\n          break;\n\n        case 'ArrowRight':\n          rowKey.classList.add('key_arrow-right');\n          break;\n\n        case 'ArrowDown':\n          rowKey.classList.add('key_arrow-down');\n          break;\n\n        default:\n          break;\n      }\n    }\n\n    const keyValue = document.createElement('span');\n    keyValue.classList.add('key__value');\n    keyValue.textContent = key.valueKey;\n\n    rowKey.appendChild(keyValue);\n    return rowKey;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/module/keyboard.js?");

/***/ }),

/***/ "./src/module/keyboardRow.js":
/*!***********************************!*\
  !*** ./src/module/keyboardRow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyboardRow)\n/* harmony export */ });\nclass KeyboardRow {\n  constructor(keys) {\n    this.keys = keys;\n  }\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/module/keyboardRow.js?");

/***/ }),

/***/ "./src/module/layout.js":
/*!******************************!*\
  !*** ./src/module/layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyboardEnglisLayout\": () => (/* binding */ keyboardEnglisLayout),\n/* harmony export */   \"keyboardRussianLayout\": () => (/* binding */ keyboardRussianLayout)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/module/key.js\");\n/* harmony import */ var _keyboardRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardRow */ \"./src/module/keyboardRow.js\");\n\n\n\nconst keyboardEnglisLayout = [\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backquote', '`', '~'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit1', '1', '!'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit2', '2', '@'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit3', '3', '#'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit4', '4', '$'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit5', '5', '%'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit6', '6', '^'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit7', '7', '&'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit8', '8', '*'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit9', '9', '('),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit0', '0', ')'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Minus', '-', '_'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Equal', '=', '+'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backspace', 'Backspace'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Tab', 'Tab'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyQ', 'q', 'Q'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyW', 'w', 'W'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyE', 'e', 'E'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyR', 'r', 'R'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyT', 't', 'T'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyY', 'y', 'Y'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyU', 'u', 'U'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyI', 'i', 'I'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyO', 'o', 'O'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyP', 'p', 'P'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('BracketLeft', '[', '{'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('BracketRight', ']', '}'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backslash', '\\\\', '|'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Delete', 'Del'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('CapsLock', 'CapsLk'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyA', 'a', 'A'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyS', 's', 'S'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyD', 'd', 'D'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyF', 'f', 'F'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyG', 'g', 'G'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyH', 'h', 'H'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyJ', 'j', 'J'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyK', 'k', 'K'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyL', 'l', 'L'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Semicolon', ';', ':'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Quote', '\\'', '\"'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Enter', 'Enter'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ShiftLeft', 'Shift'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyZ', 'z', 'Z'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyX', 'x', 'X'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyC', 'c', 'C'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyV', 'v', 'V'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyB', 'b', 'B'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyN', 'n', 'N'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyM', 'm', 'M'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Comma', ',', '<'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Period', '.', '>'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Slash', '/', '?'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowUp', '↑'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ShiftRight', 'Shift'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ControlLeft', 'Ctrl'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('MetaLeft', 'Win'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('AltLeft', 'Alt'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Space', ''),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('AltRight', 'Alt'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowLeft', '←'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowDown', '↓'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowRight', '→'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ControlRight', 'Ctrl'),\n  ]),\n];\n\nconst keyboardRussianLayout = [\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backquote', '`', '~'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit1', '1', '!'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit2', '2', '@'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit3', '3', '#'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit4', '4', '$'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit5', '5', '%'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit6', '6', '^'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit7', '7', '&'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit8', '8', '*'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit9', '9', '('),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Digit0', '0', ')'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Minus', '-', '_'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Equal', '=', '+'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backspace', 'Backspace'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Tab', 'Tab'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyQ', 'q', 'Q'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyW', 'w', 'W'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyE', 'e', 'E'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyR', 'r', 'R'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyT', 't', 'T'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyY', 'y', 'Y'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyU', 'u', 'U'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyI', 'i', 'I'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyO', 'o', 'O'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyP', 'p', 'P'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('BracketLeft', '[', '{'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('BracketRight', ']', '}'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Backslash', '\\\\', '|'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Key', 'q', 'Q'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Delete', 'Del'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('CapsLock', 'CapsLk'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyA', 'a', 'A'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyS', 's', 'S'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyD', 'd', 'D'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyF', 'f', 'F'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyG', 'g', 'G'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyH', 'h', 'H'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyJ', 'j', 'J'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyK', 'k', 'K'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyL', 'l', 'L'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Semicolon', ';', ':'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Quote', '\\'', '\"'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Enter', 'Enter'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ShiftLeft', 'Shift'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyZ', 'z', 'Z'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyX', 'x', 'X'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyC', 'c', 'C'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyV', 'v', 'V'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyB', 'b', 'B'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyN', 'n', 'N'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('KeyM', 'm', 'M'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Comma', ',', '<'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Period', '.', '>'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Slash', '/', '?'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowUp', '↑'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ShiftRight', 'Shift'),\n  ]),\n  new _keyboardRow__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ControlLeft', 'Ctrl'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('MetaLeft', 'Win'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('AltLeft', 'Alt'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Space', 'Space'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('AltRight', 'Alt'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowLeft', '←'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowDown', '↓'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ArrowRight', '→'),\n    new _key__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('ControlRight', 'Ctrl'),\n  ]),\n];\n\n\n//# sourceURL=webpack://webpack-template/./src/module/layout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;