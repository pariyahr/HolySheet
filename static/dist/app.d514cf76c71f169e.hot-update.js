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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/First_page.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/First_page.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.mjs\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\nconst __default__ = {\n  data() {\n    return {\n      musicSource: 'path/to/your-music-file.mp3' // Replace with the actual path\n      // ... other data properties ...\n    };\n  },\n  computed: {\n    computedVolume() {\n      return this.$store.state.backgroundVolume / 100;\n    }\n  },\n  methods: {\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['setVolume']),\n    changeVolume(newVolume) {\n      this.setVolume(newVolume);\n    }\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/Object.assign(__default__, {\n  __name: 'First_page',\n  setup(__props, {\n    expose: __expose\n  }) {\n    __expose();\n    const __returned__ = {\n      get mapActions() {\n        return vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions;\n      },\n      get RouterLink() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink;\n      },\n      get RouterView() {\n        return vue_router__WEBPACK_IMPORTED_MODULE_1__.RouterView;\n      }\n    };\n    Object.defineProperty(__returned__, '__isScriptSetup', {\n      enumerable: false,\n      value: true\n    });\n    return __returned__;\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9GaXJzdF9wYWdlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmc2V0dXA9dHJ1ZSZsYW5nPWpzIiwibWFwcGluZ3MiOiI7OztBQXlCQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0ZpcnN0X3BhZ2UudnVlPzEyMDUiXSwic291cmNlc0NvbnRlbnQiOlsiXG48dGVtcGxhdGU+XG5cbiAgPGF1ZGlvIHNyYz1cIi9Vc2Vycy9hbGlyZXphYW1pcmkvRG93bmxvYWRzL2ZpbGVfZXhhbXBsZV9NUDNfNzAwS0IubXAzXCIgOnZvbHVtZT1cImNvbXB1dGVkVm9sdW1lXCIgYXV0b3BsYXkgbG9vcD48L2F1ZGlvPlxuICA8ZGl2IGNsYXNzPVwiYmctaW1nXCI+XG4gICAgICA8ZGl2IGNsYXNzID0gXCJzdGFja2VkLWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxoZWFkZXI+SG9seSBTaGVldDwvaGVhZGVyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9sb2dpblwiPiBMb2dpbiA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL3JlZ2lzdGVyXCI+IFJlZ2lzdGVyIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvcHlyaWdodFwiPlxuICAgICAgICAgICAgICAgIDxhPiDCqSBhbGlyZXphIGFtaXJpLCBwYXJpeWEgaGFqaXBvdXIsIGFtaXJyZXphIGdoYWR5YW5pPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48L2Rpdj5cbiAgPFJvdXRlclZpZXcvPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cD5cbmltcG9ydCB7IFJvdXRlckxpbmssIFJvdXRlclZpZXcgfSBmcm9tIFwidnVlLXJvdXRlclwiO1xuXG48L3NjcmlwdD5cblxuPHNjcmlwdD5cbmltcG9ydCB7bWFwQWN0aW9uc30gZnJvbSBcInZ1ZXhcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbXVzaWNTb3VyY2U6ICdwYXRoL3RvL3lvdXItbXVzaWMtZmlsZS5tcDMnLCAvLyBSZXBsYWNlIHdpdGggdGhlIGFjdHVhbCBwYXRoXG4gICAgICAgICAgICAvLyAuLi4gb3RoZXIgZGF0YSBwcm9wZXJ0aWVzIC4uLlxuICAgICAgICB9O1xuICAgIH0sXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgY29tcHV0ZWRWb2x1bWUoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kc3RvcmUuc3RhdGUuYmFja2dyb3VuZFZvbHVtZSAvIDEwMDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgLi4ubWFwQWN0aW9ucyhbJ3NldFZvbHVtZSddKSxcblxuICAgICAgY2hhbmdlVm9sdW1lKG5ld1ZvbHVtZSkge1xuICAgICAgICB0aGlzLnNldFZvbHVtZShuZXdWb2x1bWUpO1xuICAgICAgfVxuICAgIH1cbn07XG48L3NjcmlwdD5cblxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4vYXNzZXRzL2Nzcy9maXJzdF9wYWdlLmNzc1wiPlxuXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/First_page.vue?vue&type=script&setup=true&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/First_page.vue?vue&type=template&id=46e2e077&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/First_page.vue?vue&type=template&id=46e2e077&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-46e2e077\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = [\"volume\"];\nconst _hoisted_2 = {\n  class: \"bg-img\"\n};\nconst _hoisted_3 = {\n  class: \"stacked-content\"\n};\nconst _hoisted_4 = {\n  class: \"content\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"header\", null, \"Holy Sheet\", -1 /* HOISTED */));\nconst _hoisted_6 = {\n  class: \"field\"\n};\nconst _hoisted_7 = {\n  class: \"field\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"copyright\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", null, \" © alireza amiri, pariya hajipour, amirreza ghadyani\")], -1 /* HOISTED */));\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"audio\", {\n    src: \"/Users/alirezaamiri/Downloads/file_example_MP3_700KB.mp3\",\n    volume: $options.computedVolume,\n    autoplay: \"\",\n    loop: \"\"\n  }, null, 8 /* PROPS */, _hoisted_1), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"RouterLink\"], {\n    to: \"/login\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Login \")]),\n    _: 1 /* STABLE */\n  })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"RouterLink\"], {\n    to: \"/register\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Register \")]),\n    _: 1 /* STABLE */\n  })]), _hoisted_8])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup[\"RouterView\"])], 64 /* STABLE_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvRmlyc3RfcGFnZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDZlMmUwNzcmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7QUFDQTs7QUFFQTtBQUFBOztBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQUE7O0FBWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9GaXJzdF9wYWdlLnZ1ZT8xMjA1Il0sInNvdXJjZXNDb250ZW50IjpbIlxuPHRlbXBsYXRlPlxuXG4gIDxhdWRpbyBzcmM9XCIvVXNlcnMvYWxpcmV6YWFtaXJpL0Rvd25sb2Fkcy9maWxlX2V4YW1wbGVfTVAzXzcwMEtCLm1wM1wiIDp2b2x1bWU9XCJjb21wdXRlZFZvbHVtZVwiIGF1dG9wbGF5IGxvb3A+PC9hdWRpbz5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgICAgPGRpdiBjbGFzcyA9IFwic3RhY2tlZC1jb250ZW50XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8aGVhZGVyPkhvbHkgU2hlZXQ8L2hlYWRlcj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvbG9naW5cIj4gTG9naW4gPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9yZWdpc3RlclwiPiBSZWdpc3RlciA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb3B5cmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8YT4gwqkgYWxpcmV6YSBhbWlyaSwgcGFyaXlhIGhhamlwb3VyLCBhbWlycmV6YSBnaGFkeWFuaTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuPC9kaXY+XG4gIDxSb3V0ZXJWaWV3Lz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXA+XG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJWaWV3IH0gZnJvbSBcInZ1ZS1yb3V0ZXJcIjtcblxuPC9zY3JpcHQ+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge21hcEFjdGlvbnN9IGZyb20gXCJ2dWV4XCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG11c2ljU291cmNlOiAncGF0aC90by95b3VyLW11c2ljLWZpbGUubXAzJywgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgcGF0aFxuICAgICAgICAgICAgLy8gLi4uIG90aGVyIGRhdGEgcHJvcGVydGllcyAuLi5cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbXB1dGVkVm9sdW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmJhY2tncm91bmRWb2x1bWUgLyAxMDA7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIC4uLm1hcEFjdGlvbnMoWydzZXRWb2x1bWUnXSksXG5cbiAgICAgIGNoYW5nZVZvbHVtZShuZXdWb2x1bWUpIHtcbiAgICAgICAgdGhpcy5zZXRWb2x1bWUobmV3Vm9sdW1lKTtcbiAgICAgIH1cbiAgICB9XG59O1xuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuL2Fzc2V0cy9jc3MvZmlyc3RfcGFnZS5jc3NcIj5cblxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/First_page.vue?vue&type=template&id=46e2e077&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ef498b25655e29ce"; }
/******/ }();
/******/ 
/******/ }
);