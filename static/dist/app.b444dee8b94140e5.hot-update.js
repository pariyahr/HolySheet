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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SheetDisplay_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SheetDisplay.vue */ \"./src/Apps/SheetDisplay.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Explore_Page\",\n  components: {\n    SheetDisplay: _SheetDisplay_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      showSearch: false,\n      searchQuery: '',\n      trendingSheets: [\n        // ... your list of sheets ...\n      ]\n    };\n  },\n  computed: {\n    filteredSheets() {\n      if (!this.searchQuery) {\n        return this.trendingSheets;\n      }\n      return this.trendingSheets.filter(sheet => sheet.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || sheet.composer.toLowerCase().includes(this.searchQuery.toLowerCase()) || sheet.genre.toLowerCase().includes(this.searchQuery.toLowerCase()));\n    }\n  },\n  mounted() {\n    this.fetchTrendingSheets();\n  },\n  methods: {\n    fetchTrendingSheets() {\n      // Fetch your sheets data here\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL0V4cGxvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7O0FBeUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0FwcHMvRXhwbG9yZS52dWU/NWFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlYXJjaC1pY29uXCI+PGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWJhclwiIHYtc2hvdz1cInNob3dTZWFyY2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNlYXJjaFNoZWV0c1wiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gVHJlbmRpbmcgU2hlZXRzIFNlY3Rpb24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidHJlbmRpbmctc2hlZXRzXCI+XG4gICAgICAgIDxoMj5UcmVuZGluZyBTaGVldHM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXNjb3BlXCI+XG4gICAgICAgICAgPHVsMT5cbiAgICAgICAgICAgIDxsaTEgdi1mb3I9XCJzaGVldCBpbiBmaWx0ZXJlZFNoZWV0c1wiIDprZXk9XCJzaGVldC5pZFwiPlxuICAgICAgICAgICAgICA8IS0tIFNoZWV0IERpc3BsYXkgQ29tcG9uZW50IC0tPlxuICAgICAgICAgICAgICA8c2hlZXQtZGlzcGxheSA6c2hlZXQ9XCJzaGVldFwiPjwvc2hlZXQtZGlzcGxheT5cbiAgICAgICAgICAgIDwvbGkxPlxuICAgICAgICAgIDwvdWwxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cbmltcG9ydCBTaGVldERpc3BsYXkgZnJvbSAnLi9TaGVldERpc3BsYXkudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkV4cGxvcmVfUGFnZVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgU2hlZXREaXNwbGF5XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgdHJlbmRpbmdTaGVldHM6IFtcbiAgICAgICAgLy8gLi4uIHlvdXIgbGlzdCBvZiBzaGVldHMgLi4uXG4gICAgICBdLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgZmlsdGVyZWRTaGVldHMoKSB7XG4gICAgICBpZiAoIXRoaXMuc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmVuZGluZ1NoZWV0cy5maWx0ZXIoc2hlZXQgPT5cbiAgICAgICAgc2hlZXQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgIHNoZWV0LmNvbXBvc2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICBzaGVldC5nZW5yZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICAgICk7XG4gICAgfVxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmV0Y2hUcmVuZGluZ1NoZWV0cygpO1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZmV0Y2hUcmVuZGluZ1NoZWV0cygpIHtcbiAgICAgIC8vIEZldGNoIHlvdXIgc2hlZXRzIGRhdGEgaGVyZVxuICAgIH0sXG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cbi8qIFVzZSB0aGUgcHJvdmlkZWQgQ1NTIHN0eWxlcyAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-0ea8214f\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n  class: \"search-icon\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"#\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n  class: \"fas fa-search\"\n})])], -1 /* HOISTED */));\nconst _hoisted_9 = {\n  class: \"search-bar\"\n};\nconst _hoisted_10 = {\n  class: \"trending-sheets\"\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", null, \"Trending Sheets\", -1 /* HOISTED */));\nconst _hoisted_12 = {\n  class: \"scroll-scope\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  const _component_sheet_display = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"sheet-display\");\n  const _component_li1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"li1\");\n  const _component_ul1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ul1\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Home\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])]), _hoisted_8]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.searchQuery = $event),\n    placeholder: \"Search...\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchQuery]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.searchSheets && _ctx.searchSheets(...args))\n  }, \"Search\")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.showSearch]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Trending Sheets Section \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ul1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filteredSheets, sheet => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_li1, {\n        key: sheet.id\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Sheet Display Component \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_sheet_display, {\n          sheet: sheet\n        }, null, 8 /* PROPS */, [\"sheet\"])]),\n        _: 2 /* DYNAMIC */\n      }, 1024 /* DYNAMIC_SLOTS */);\n    }), 128 /* KEYED_FRAGMENT */))]),\n    _: 1 /* STABLE */\n  })])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9FeHBsb3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWE4MjE0ZiZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBR0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBOztBQU1BO0FBQUE7QUFDQTs7QUFDQTtBQUFBOzs7Ozs7QUF6QkE7QUFJQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFRQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL0V4cGxvcmUudnVlPzVhZTgiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYmctaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Ib21lXCI+IEhvbWUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvRXhwbG9yZVwiPiBFeHBsb3JlIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0FkZFwiPiBBZGQgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvUHJvZmlsZVwiPiBQcm9maWxlIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWFyY2gtaWNvblwiPjxhIGhyZWY9XCIjXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvYT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIiB2LXNob3c9XCJzaG93U2VhcmNoXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHYtbW9kZWw9XCJzZWFyY2hRdWVyeVwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cbiAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzZWFyY2hTaGVldHNcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIFRyZW5kaW5nIFNoZWV0cyBTZWN0aW9uIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cInRyZW5kaW5nLXNoZWV0c1wiPlxuICAgICAgICA8aDI+VHJlbmRpbmcgU2hlZXRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1zY29wZVwiPlxuICAgICAgICAgIDx1bDE+XG4gICAgICAgICAgICA8bGkxIHYtZm9yPVwic2hlZXQgaW4gZmlsdGVyZWRTaGVldHNcIiA6a2V5PVwic2hlZXQuaWRcIj5cbiAgICAgICAgICAgICAgPCEtLSBTaGVldCBEaXNwbGF5IENvbXBvbmVudCAtLT5cbiAgICAgICAgICAgICAgPHNoZWV0LWRpc3BsYXkgOnNoZWV0PVwic2hlZXRcIj48L3NoZWV0LWRpc3BsYXk+XG4gICAgICAgICAgICA8L2xpMT5cbiAgICAgICAgICA8L3VsMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgU2hlZXREaXNwbGF5IGZyb20gJy4vU2hlZXREaXNwbGF5LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFeHBsb3JlX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIFNoZWV0RGlzcGxheVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAgIC8vIC4uLiB5b3VyIGxpc3Qgb2Ygc2hlZXRzIC4uLlxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGZpbHRlcmVkU2hlZXRzKCkge1xuICAgICAgaWYgKCF0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZW5kaW5nU2hlZXRzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHMuZmlsdGVyKHNoZWV0ID0+XG4gICAgICAgIHNoZWV0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICBzaGVldC5jb21wb3Nlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgc2hlZXQuZ2VucmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICApO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoVHJlbmRpbmdTaGVldHMoKTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZldGNoVHJlbmRpbmdTaGVldHMoKSB7XG4gICAgICAvLyBGZXRjaCB5b3VyIHNoZWV0cyBkYXRhIGhlcmVcbiAgICB9LFxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vYXNzZXRzL2Nzcy9ob21lX3BhZ2UuY3NzXCI+XG4vKiBVc2UgdGhlIHByb3ZpZGVkIENTUyBzdHlsZXMgKi9cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "e74a9642a41328bf"; }
/******/ }();
/******/ 
/******/ }
);