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
eval("\nvar sum = function sum(a, b) {return a + b;};\n\nconsole.log(sum(1, 2));\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcaW5kZXguanMiXSwibmFtZXMiOlsic3VtIiwiYSIsImIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQ0EsSUFBSUEsTUFBSyxTQUFMQSxHQUFLLENBQUNDLENBQUQsRUFBR0MsQ0FBSCxVQUFTRCxJQUFJQyxDQUFiLEVBQVQ7O0FBRUFDLFFBQVFDLEdBQVIsQ0FBWUosSUFBSSxDQUFKLEVBQU0sQ0FBTixDQUFaIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6ImM6L1dvcmtzcGFjZS9ub2RlLWJhYmVsIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBzdW09IChhLGIpID0+IGEgKyBiO1xyXG5cclxuY29uc29sZS5sb2coc3VtKDEsMikpOyBcclxuIl19//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ODc0OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQSwyQ0FBMkMsY0FBYyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgc3VtID0gZnVuY3Rpb24gc3VtKGEsIGIpIHtyZXR1cm4gYSArIGI7fTtcblxuY29uc29sZS5sb2coc3VtKDEsIDIpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkluTnlZMXhjYVc1a1pYZ3Vhbk1pWFN3aWJtRnRaWE1pT2xzaWMzVnRJaXdpWVNJc0ltSWlMQ0pqYjI1emIyeGxJaXdpYkc5bklsMHNJbTFoY0hCcGJtZHpJam9pTzBGQlEwRXNTVUZCU1VFc1RVRkJTeXhUUVVGTVFTeEhRVUZMTEVOQlFVTkRMRU5CUVVRc1JVRkJSME1zUTBGQlNDeFZRVUZUUkN4SlFVRkpReXhEUVVGaUxFVkJRVlE3TzBGQlJVRkRMRkZCUVZGRExFZEJRVklzUTBGQldVb3NTVUZCU1N4RFFVRktMRVZCUVUwc1EwRkJUaXhEUVVGYUlpd2labWxzWlNJNkltbHVaR1Y0TG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SW1NNkwxZHZjbXR6Y0dGalpTOXViMlJsTFdKaFltVnNJaXdpYzI5MWNtTmxjME52Ym5SbGJuUWlPbHNpWEhKY2JteGxkQ0J6ZFcwOUlDaGhMR0lwSUQwK0lHRWdLeUJpTzF4eVhHNWNjbHh1WTI5dWMyOXNaUzVzYjJjb2MzVnRLREVzTWlrcE95QmNjbHh1SWwxOVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ })
/******/ ]);