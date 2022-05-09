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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendContact\": () => (/* binding */ appendContact)\n/* harmony export */ });\nconst appendContact = () => {\r\n    const paraEl = document.createElement('p');\r\n    const titleBoxEl = document.createElement('h3');\r\n    const contactBoxContainerEl = document.createElement('div');\r\n    const titleContactEl = document.createElement('h2');\r\n    const titleContaierEl = document.createElement('div');\r\n    const gridContactContainer = document.createElement('div');\r\n\r\n    paraEl.innerHTML = 'Monday - Sunday <br> 10am - 11pm <br> Kreuzberg, Berlin <br> awesome-tea@berlin.com'\r\n    titleBoxEl.innerHTML = 'Find us here:';\r\n    contactBoxContainerEl.classList = 'contact-cell-info';\r\n    titleContactEl.innerHTML = 'It\\'s tea <br> time';\r\n    titleContaierEl.classList = 'contact-cell-title';\r\n    gridContactContainer.classList = 'grid-container-contact'\r\n\r\n    contactBoxContainerEl.appendChild(titleBoxEl);\r\n    contactBoxContainerEl.appendChild(paraEl);\r\n    titleContaierEl.appendChild(titleContactEl);\r\n    gridContactContainer.appendChild(titleContaierEl);\r\n    gridContactContainer.appendChild(contactBoxContainerEl);\r\n   \r\n\r\n    return gridContactContainer;\r\n\r\n}\r\n\n\n//# sourceURL=webpack://restuarantlandingpage/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendHome\": () => (/* binding */ appendHome)\n/* harmony export */ });\nconst appendHome = () => {\r\n  const containerElement = document.createElement('div');\r\n  const titleContainerElement = document.createElement('div');\r\n  const titleElement = document.createElement('h1');\r\n  const subTitleElement = document.createElement('h3');\r\n  const imageContainerElement = document.createElement('div');\r\n  const imageElement = document.createElement('img');\r\n\r\n\r\n\r\n\r\n\r\n  containerElement.classList = 'container';\r\n  titleContainerElement.classList = 'title-container';\r\n  titleElement.innerHTML = \"The tea you'll <br> never spill\";\r\n  titleElement.classList = 'title';\r\n  subTitleElement.innerHTML = '100% ORGANIC & FAIR TRADE';\r\n  imageContainerElement.classList = 'img-container';\r\n  imageElement.setAttribute('src', 'https://www.linkpicture.com/q/home_31.png');\r\n  imageElement.setAttribute('alt', 'tea cup');\r\n\r\n\r\n\r\n  titleContainerElement.appendChild(subTitleElement );\r\n  titleContainerElement.appendChild(titleElement);\r\n  containerElement.appendChild(titleContainerElement);\r\n  imageContainerElement.appendChild(imageElement);\r\n  containerElement.appendChild(imageContainerElement);\r\n\r\n\r\n  return containerElement;\r\n\r\n}\n\n//# sourceURL=webpack://restuarantlandingpage/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\ncontent.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.appendHome)());\r\n\r\n// Link Menu buttons to functions \r\n\r\n\r\n(function updateDisplay() {\r\n\r\nconst content = document.querySelector('#content');\r\nconst homeBtnElement = document.querySelector('#home');\r\nconst menuBtnElement = document.querySelector('#menu');\r\nconst contactElement = document.querySelector('#contact');\r\n\r\n\r\nfunction switchToHome() {\r\n    reset();\r\n    content.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.appendHome)());\r\n}\r\n\r\n\r\nfunction switchToMenu() {\r\n    reset();\r\n    content.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.appendMenu)());\r\n}\r\n\r\nfunction switchToContact() {\r\n    reset();\r\n    content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.appendContact)());\r\n}\r\n\r\n\r\nfunction reset() {\r\n    content.innerHTML = '';\r\n}\r\n\r\n\r\nhomeBtnElement.addEventListener('click', switchToHome);\r\nmenuBtnElement.addEventListener('click', switchToMenu);\r\ncontactElement.addEventListener('click', switchToContact);\r\n\r\n})();\r\n\r\n\n\n//# sourceURL=webpack://restuarantlandingpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appendMenu\": () => (/* binding */ appendMenu)\n/* harmony export */ });\nconst appendMenu = () => {\r\n    const gridContainer = document.createElement('div');\r\n    gridContainer.classList = 'grid-container';  \r\n    \r\n    const menu = [\r\n        {img: 'https://www.linkpicture.com/q/greentea.png',\r\n        name: 'Green Tea'},\r\n        {img: 'https://www.linkpicture.com/q/matcha.png',\r\n        name: 'Motcha Tea'},\r\n        {img: 'https://www.linkpicture.com/q/herbal.png',\r\n        name: 'Herbal Tea'}\r\n    ];\r\n\r\n    menu.forEach(x => render(x));\r\n\r\n// Creates the menu elements \r\n\r\n    function render(x) {\r\n        const img = document.createElement('img');\r\n        const name = document.createElement('h3');\r\n        const productCell = document.createElement('div');\r\n\r\n        img.setAttribute('src', x.img);\r\n        name.innerHTML = x.name;\r\n        productCell.classList = 'cell';\r\n\r\n        appendProduct(img, name, productCell);\r\n    }\r\n    \r\n// Appends the elements\r\n\r\n    function appendProduct(img, name, cell) {\r\n        cell.appendChild(img);\r\n        cell.appendChild(name);\r\n        gridContainer.appendChild(cell);\r\n    }\r\n\r\n    return gridContainer;\r\n\r\n}\n\n//# sourceURL=webpack://restuarantlandingpage/./src/menu.js?");

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