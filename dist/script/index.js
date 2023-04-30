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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _module_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/layout */ \"./src/module/layout.js\");\n\r\n\r\n\r\n\r\nconst generateKeyboard = (keyboardLayout) => {\r\n  const keyboard = document.createElement('div');\r\n  keyboard.classList.add('main-keyboard');\r\n  keyboard.classList.add('keyboard');\r\n\r\n  keyboardLayout.forEach((rowKeys) => {\r\n    const keyboardRow = document.createElement('div');\r\n    keyboardRow.classList.add('keyboard__row');\r\n    keyboardRow.classList.add('row');\r\n\r\n    rowKeys.keys.forEach((key) => {\r\n      const rowKey = document.createElement('div');\r\n      rowKey.classList.add('row__key');\r\n      rowKey.classList.add('key');\r\n      if (key.typeKey === 'letter') {\r\n        rowKey.classList.add('key_letter');\r\n      } else {\r\n        rowKey.classList.add('key_function');\r\n        switch (key.codeKey) {\r\n          case 'Backspace':\r\n            rowKey.classList.add('key_backspace');\r\n            break;\r\n\r\n          case 'Tab':\r\n            rowKey.classList.add('key_tab');\r\n            break;\r\n\r\n          case 'Delete':\r\n            rowKey.classList.add('key_delete');\r\n            break;\r\n\r\n          case 'CapsLock':\r\n            rowKey.classList.add('key_capslock');\r\n            break;\r\n\r\n          case 'Enter':\r\n            rowKey.classList.add('key_enter');\r\n            break;\r\n\r\n          case 'ShiftLeft':\r\n            rowKey.classList.add('key_shift');\r\n            break;\r\n\r\n          case 'ShiftRight':\r\n            rowKey.classList.add('key_shift');\r\n            break;\r\n\r\n          case 'ControlLeft':\r\n            rowKey.classList.add('key_ctrl');\r\n            break;\r\n\r\n          case 'ControlRight':\r\n            rowKey.classList.add('key_ctrl');\r\n            break;\r\n\r\n          case 'MetaLeft':\r\n            rowKey.classList.add('key_meta');\r\n            break;\r\n\r\n          case 'AltLeft':\r\n            rowKey.classList.add('key_alt');\r\n            break;\r\n\r\n          case 'Altright':\r\n            rowKey.classList.add('key_alt');\r\n            break;\r\n\r\n          case 'Space':\r\n            rowKey.classList.add('key_space');\r\n            break;\r\n\r\n          case 'ArrowUp':\r\n            rowKey.classList.add('key_arrow-up');\r\n            break;\r\n\r\n          case 'ArrowLeft':\r\n            rowKey.classList.add('key_arrow-left');\r\n            break;\r\n\r\n          case 'ArrowRight':\r\n            rowKey.classList.add('key_arrow-right');\r\n            break;\r\n\r\n          case 'ArrowDown':\r\n            rowKey.classList.add('key_arrow-down');\r\n            break;\r\n\r\n          default:\r\n            break;\r\n        }\r\n      }\r\n\r\n      const keyValue = document.createElement('span');\r\n      keyValue.classList.add('key__value');\r\n      keyValue.textContent = key.valueKey;\r\n\r\n      rowKey.appendChild(keyValue);\r\n      keyboardRow.appendChild(rowKey);\r\n    });\r\n\r\n    keyboard.appendChild(keyboardRow);\r\n  });\r\n\r\n  return keyboard;\r\n};\r\n\r\nconst generateHeader = () => {\r\n  const header = document.createElement('header');\r\n  header.classList.add('header');\r\n\r\n  const headerTitle = document.createElement('h1');\r\n  headerTitle.classList.add('header__title');\r\n  headerTitle.textContent = 'Virtual Keyboard';\r\n\r\n  header.appendChild(headerTitle);\r\n\r\n  document.body.appendChild(header);\r\n};\r\n\r\nconst generateMain = () => {\r\n  const main = document.createElement('main');\r\n  main.classList.add('main');\r\n\r\n  const mainTextArea = document.createElement('textarea');\r\n  mainTextArea.classList.add('main__textarea');\r\n  mainTextArea.name = 'keyboard-textarea';\r\n  mainTextArea.id = 'keyboard-textarea';\r\n  mainTextArea.cols = '68';\r\n  mainTextArea.rows = '6';\r\n\r\n  const mainKeyboard = generateKeyboard(_module_layout__WEBPACK_IMPORTED_MODULE_1__.keyboardEnglisLayout);\r\n\r\n  main.appendChild(mainTextArea);\r\n  main.appendChild(mainKeyboard);\r\n\r\n  document.body.appendChild(main);\r\n};\r\n\r\nconst generateFooter = () => {\r\n  const footer = document.createElement('footer');\r\n  footer.classList.add('footer');\r\n\r\n  const footerTitle = document.createElement('h4');\r\n  footerTitle.classList.add('footer__title');\r\n  footerTitle.textContent = 'Copyright©2023 solum-the-creator';\r\n\r\n  footer.appendChild(footerTitle);\r\n\r\n  document.body.appendChild(footer);\r\n};\r\n\r\nconst generatePage = () => {\r\n  generateHeader();\r\n  generateMain();\r\n  generateFooter();\r\n};\r\n\r\ngeneratePage();\r\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/module/key.js":
/*!***************************!*\
  !*** ./src/module/key.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KeyboardKey)\n/* harmony export */ });\nclass KeyboardKey {\n  constructor(codeKey, valueKey, shiftKey) {\n    this.codeKey = codeKey;\n    this.valueKey = valueKey;\n    if (!shiftKey) {\n      this.shiftKey = valueKey;\n      this.typeKey = 'function';\n    } else {\n      this.shiftKey = shiftKey;\n      this.typeKey = 'letter';\n    }\n  }\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/module/key.js?");

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