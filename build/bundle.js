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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var sum = function sum(a, b) {return a + b;};

console.log(sum(1, 2));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW5kZXguanMiXSwibmFtZXMiOlsic3VtIiwiYSIsImIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSUEsTUFBSyxTQUFMQSxHQUFLLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxVQUFTRCxJQUFJQyxDQUFiLEVBQVQ7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBWUosSUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFaIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6ImM6L1dvcmtzcGFjZS9ub2RlLWJhYmVsIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBzdW09IChhLGIpID0+IGEgKyBiO1xyXG5cclxuY29uc29sZS5sb2coc3VtKDEsMikpOyAiXX0=

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map