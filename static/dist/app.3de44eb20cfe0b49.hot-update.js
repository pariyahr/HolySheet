"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevue_holysheet"]("app",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n/* harmony import */ var _First_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./First_page */ \"./src/First_page.vue\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n\n\n\n\nconst app = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_First_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.use(_router__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\napp.mount('#app');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9tYWluLmpzP2ZiZWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJ1xuaW1wb3J0IHJvdXRlciBmcm9tIFwiQC9yb3V0ZXJcIjtcbmltcG9ydCBGaXJzdF9wYWdlIGZyb20gJy4vRmlyc3RfcGFnZSdcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcblxuY29uc3QgYXBwID0gY3JlYXRlQXBwIChGaXJzdF9wYWdlKTtcbmFwcC51c2Uocm91dGVyKVxuYXBwLm1vdW50KCcjYXBwJylcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.js\n");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_0__.createStore)({\n  state: {\n    backgroundVolume: 50 // Initial volume level\n  },\n  mutations: {\n    SET_VOLUME(state, volume) {\n      state.backgroundVolume = volume;\n    }\n  },\n  actions: {\n    setVolume({\n      commit\n    }, volume) {\n      commit('SET_VOLUME', volume);\n    }\n  },\n  getters: {\n    backgroundVolume: state => state.backgroundVolume\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL3N0b3JlLmpzP2NkYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4JztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIGJhY2tncm91bmRWb2x1bWU6IDUwLCAvLyBJbml0aWFsIHZvbHVtZSBsZXZlbFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICBTRVRfVk9MVU1FKHN0YXRlLCB2b2x1bWUpIHtcbiAgICAgIHN0YXRlLmJhY2tncm91bmRWb2x1bWUgPSB2b2x1bWU7XG4gICAgfSxcbiAgfSxcbiAgYWN0aW9uczoge1xuICAgIHNldFZvbHVtZSh7IGNvbW1pdCB9LCB2b2x1bWUpIHtcbiAgICAgIGNvbW1pdCgnU0VUX1ZPTFVNRScsIHZvbHVtZSk7XG4gICAgfSxcbiAgfSxcbiAgZ2V0dGVyczoge1xuICAgIGJhY2tncm91bmRWb2x1bWU6IChzdGF0ZSkgPT4gc3RhdGUuYmFja2dyb3VuZFZvbHVtZSxcbiAgfSxcbn0pO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/store.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "35ba8e78b36e83d0"; }
/******/ }();
/******/ 
/******/ }
);