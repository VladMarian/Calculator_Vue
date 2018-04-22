/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var app = new Vue({\r\n  el: '#app',\r\n  data: {\r\n    appTitle: 'Vue Calculator',\r\n    a: '',\r\n    b: '',\r\n    tot: 0,\r\n    display: 0,\r\n    operator: null\r\n  },\r\n  \r\n  methods: {\r\n    setNumber(num){\r\n      if(this.operator === null){\r\n        this.a += num;\r\n        this.display = this.a;\r\n      }\r\n      else{\r\n        this.b += num;\r\n        this.display = this.b;\r\n      }\r\n    },\r\n    \r\n    calculate(){\r\n      switch(this.operator){\r\n        case '+':\r\n          this.tot = parseFloat(this.a) + parseFloat(this.b);\r\n          break;\r\n        case '-':\r\n          this.tot = parseFloat(this.a) - parseFloat(this.b);\r\n          break;\r\n        case '*':\r\n          this.tot = parseFloat(this.a) * parseFloat(this.b);\r\n          break;\r\n        case '/':\r\n          this.tot = parseFloat(this.a) / parseFloat(this.b);\r\n          break;\r\n      }\r\n      this.display = this.tot;\r\n      this.a = '' + this.tot + ''; \r\n      this.b = '';\r\n      this.operator = null;\r\n    },\r\n    \r\n    clear(){\r\n      this.a = '';\r\n      this.b = '';\r\n      this.tot = 0;\r\n      this.display = 0;\r\n      this.operator = null;\r\n    }\r\n  }\r\n});\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./js/main.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./js/main.js */\"./js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./js/main.js?");

/***/ })

/******/ });