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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Apps/Navbar.vue */ \"./src/Apps/Navbar.vue\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Settings_Page\",\n  components: {\n    Navbar: _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      x: document.getElementById(\"audio-id\"),\n      components: [],\n      visib2: \"\"\n    };\n  },\n  methods: {\n    pause() {\n      x.pause;\n    },\n    async fetchComponents() {\n      try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('/components/');\n        this.components = response.data;\n        this.visib2 = this.components[0].is_seller;\n      } catch (error) {\n        console.error('Error fetching components:', error);\n      }\n    }\n  },\n  mounted() {\n    this.fetchComponents();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7QUFnQkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQxXCI+XHJcbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XHJcblxyXG5cclxuICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwYXVzZVwiIHZhbHVlPVwiUGF1c2UgQXVkaW9cIiAvPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9BcHBzL05hdmJhci52dWVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIlNldHRpbmdzX1BhZ2VcIixcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgTmF2YmFyXHJcbiAgICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB4OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvLWlkXCIpLFxyXG4gICAgICAgICAgY29tcG9uZW50czogW10sXHJcbiAgICAgICAgICB2aXNpYjI6IFwiXCIsXHJcbiAgICAgIH1cclxuICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHgucGF1c2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGZldGNoQ29tcG9uZW50cygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY29tcG9uZW50cy8nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liMiA9IHRoaXMuY29tcG9uZW50c1swXS5pc19zZWxsZXI7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb21wb25lbnRzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICB0aGlzLmZldGNoQ29tcG9uZW50cygpO1xyXG4gIH1cclxuXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cclxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5c986417\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Navbar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar, {\n    isSeller: $data.visib2\n  }, null, 8 /* PROPS */, [\"isSeller\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"button\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.pause && $options.pause(...args)),\n    value: \"Pause Audio\"\n  })])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM5ODY0MTcmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7OztBQURBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQxXCI+XHJcbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XHJcblxyXG5cclxuICAgPGlucHV0IHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJwYXVzZVwiIHZhbHVlPVwiUGF1c2UgQXVkaW9cIiAvPlxyXG5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcblxyXG48c2NyaXB0PlxyXG5cclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9BcHBzL05hdmJhci52dWVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIlNldHRpbmdzX1BhZ2VcIixcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgTmF2YmFyXHJcbiAgICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB4OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvLWlkXCIpLFxyXG4gICAgICAgICAgY29tcG9uZW50czogW10sXHJcbiAgICAgICAgICB2aXNpYjI6IFwiXCIsXHJcbiAgICAgIH1cclxuICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIHBhdXNlKCkge1xyXG4gICAgICAgIHgucGF1c2U7XHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGZldGNoQ29tcG9uZW50cygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY29tcG9uZW50cy8nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liMiA9IHRoaXMuY29tcG9uZW50c1swXS5pc19zZWxsZXI7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb21wb25lbnRzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICB0aGlzLmZldGNoQ29tcG9uZW50cygpO1xyXG4gIH1cclxuXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cclxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "4a3bf21f49a51c33"; }
/******/ }();
/******/ 
/******/ }
);