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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SheetDisplay_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SheetDisplay.vue */ \"./src/Apps/SheetDisplay.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Explore_Page\",\n  components: {\n    SheetDisplay: _SheetDisplay_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      showSearch: false,\n      searchQuery: '',\n      trendingSheets: [{\n        id: 1,\n        title: \"Moonlight Sonata\",\n        composer: \"Ludwig van Beethoven\",\n        genre: \"Classical\",\n        imagePath: \"path/to/moonlight-sonata-image.jpg\",\n        // Replace with actual image path\n        rating: 4.5\n      }, {\n        id: 2,\n        title: \"The Four Seasons\",\n        composer: \"Antonio Vivaldi\",\n        genre: \"Baroque\",\n        imagePath: \"path/to/four-seasons-image.jpg\",\n        // Replace with actual image path\n        rating: 3.5\n      }, {\n        id: 3,\n        title: \"Clair de Lune\",\n        composer: \"Claude Debussy\",\n        genre: \"Impressionist\",\n        imagePath: \"path/to/clair-de-lune-image.jpg\",\n        // Replace with actual image path\n        rating: 5\n      }, {\n        id: 4,\n        title: \"Rhapsody in Blue\",\n        composer: \"George Gershwin\",\n        genre: \"Jazz\",\n        imagePath: \"path/to/rhapsody-in-blue-image.jpg\",\n        // Replace with actual image path\n        rating: 4.4\n      }]\n    };\n  },\n  computed: {\n    filteredSheets() {\n      // Filter sheets only if there's a search query\n      if (this.searchQuery) {\n        return this.trendingSheets.filter(sheet => sheet.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || sheet.composer.toLowerCase().includes(this.searchQuery.toLowerCase()) || sheet.genre.toLowerCase().includes(this.searchQuery.toLowerCase()));\n      }\n      return this.trendingSheets; // Return all sheets if no search query\n    }\n  },\n  methods: {\n    toggleSearchBar() {\n      this.showSearch = !this.showSearch;\n    },\n    fetchTrendingSheets() {\n      // Fetch your sheets data here\n    }\n  },\n  mounted() {\n    this.fetchTrendingSheets();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL0V4cGxvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7O0FBMENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9FeHBsb3JlLnZ1ZT81YWU4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+PC9kaXY+XG4gICAgICAgICAgICA8bGkgIEBjbGljaz1cInRvZ2dsZVNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyXCIgdi1zaG93PVwic2hvd1NlYXJjaFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2VhcmNoUXVlcnlcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2VhcmNoU2hlZXRzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBUcmVuZGluZyBTaGVldHMgU2VjdGlvbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZGluZy1zaGVldHNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7IHdpZHRoOiA5MCU7IFwiPlxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4XCI+VHJlbmRpbmcgU2hlZXRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1zY29wZVwiIHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxuICAgICAgICAgIDx1bDE+XG4gICAgICAgICAgICA8bGkxIHYtZm9yPVwic2hlZXQgaW4gZmlsdGVyZWRTaGVldHNcIiA6a2V5PVwic2hlZXQuaWRcIj5cbiAgICAgICAgICAgICAgPHNoZWV0LWRpc3BsYXkgOnNoZWV0PVwic2hlZXRcIj48L3NoZWV0LWRpc3BsYXk+XG4gICAgICAgICAgICA8L2xpMT5cbiAgICAgICAgICA8L3VsMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgU2hlZXREaXNwbGF5IGZyb20gJy4vU2hlZXREaXNwbGF5LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFeHBsb3JlX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIFNoZWV0RGlzcGxheVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9tb29ubGlnaHQtc29uYXRhLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgICAgICByYXRpbmc6IDQuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgdGl0bGU6IFwiVGhlIEZvdXIgU2Vhc29uc1wiLFxuICAgICAgICAgIGNvbXBvc2VyOiBcIkFudG9uaW8gVml2YWxkaVwiLFxuICAgICAgICAgIGdlbnJlOiBcIkJhcm9xdWVcIixcbiAgICAgICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9mb3VyLXNlYXNvbnMtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgICAgIHJhdGluZzogMy41XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICB0aXRsZTogXCJDbGFpciBkZSBMdW5lXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiQ2xhdWRlIERlYnVzc3lcIixcbiAgICAgICAgICBnZW5yZTogXCJJbXByZXNzaW9uaXN0XCIsXG4gICAgICAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vY2xhaXItZGUtbHVuZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAgICAgcmF0aW5nOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICB0aXRsZTogXCJSaGFwc29keSBpbiBCbHVlXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiR2VvcmdlIEdlcnNod2luXCIsXG4gICAgICAgICAgZ2VucmU6IFwiSmF6elwiLFxuICAgICAgICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL3JoYXBzb2R5LWluLWJsdWUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgICAgIHJhdGluZzogNC40XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGZpbHRlcmVkU2hlZXRzKCkge1xuICAgICAgLy8gRmlsdGVyIHNoZWV0cyBvbmx5IGlmIHRoZXJlJ3MgYSBzZWFyY2ggcXVlcnlcbiAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZW5kaW5nU2hlZXRzLmZpbHRlcihzaGVldCA9PlxuICAgICAgICAgIHNoZWV0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHNoZWV0LmNvbXBvc2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHNoZWV0LmdlbnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHM7IC8vIFJldHVybiBhbGwgc2hlZXRzIGlmIG5vIHNlYXJjaCBxdWVyeVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICAgdG9nZ2xlU2VhcmNoQmFyKCkge1xuICAgICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgICB9LFxuXG4gICAgZmV0Y2hUcmVuZGluZ1NoZWV0cygpIHtcbiAgICAgIC8vIEZldGNoIHlvdXIgc2hlZXRzIGRhdGEgaGVyZVxuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mZXRjaFRyZW5kaW5nU2hlZXRzKCk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cbi8qIFVzZSB0aGUgcHJvdmlkZWQgQ1NTIHN0eWxlcyAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-0ea8214f\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"active\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"#\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n  class: \"fas fa-search\"\n})], -1 /* HOISTED */));\nconst _hoisted_10 = [_hoisted_9];\nconst _hoisted_11 = {\n  class: \"search-bar\"\n};\nconst _hoisted_12 = {\n  class: \"trending-sheets\",\n  style: {\n    \"margin-top\": \"20px\",\n    \"width\": \"90%\"\n  }\n};\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  style: {\n    \"margin-bottom\": \"10px\"\n  }\n}, \"Trending Sheets\", -1 /* HOISTED */));\nconst _hoisted_14 = {\n  class: \"scroll-scope\",\n  style: {\n    \"padding\": \"20px\"\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  const _component_sheet_display = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"sheet-display\");\n  const _component_li1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"li1\");\n  const _component_ul1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ul1\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Home\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])]), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleSearchBar && $options.toggleSearchBar(...args))\n  }, [..._hoisted_10])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.searchQuery = $event),\n    placeholder: \"Search...\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchQuery]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.searchSheets && _ctx.searchSheets(...args))\n  }, \"Search\")], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $data.showSearch]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Trending Sheets Section \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ul1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filteredSheets, sheet => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_li1, {\n        key: sheet.id\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_sheet_display, {\n          sheet: sheet\n        }, null, 8 /* PROPS */, [\"sheet\"])]),\n        _: 2 /* DYNAMIC */\n      }, 1024 /* DYNAMIC_SLOTS */);\n    }), 128 /* KEYED_FRAGMENT */))]),\n    _: 1 /* STABLE */\n  })])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9FeHBsb3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWE4MjE0ZiZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBR0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFBQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUEzQkE7QUFJQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9FeHBsb3JlLnZ1ZT81YWU4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+PC9kaXY+XG4gICAgICAgICAgICA8bGkgIEBjbGljaz1cInRvZ2dsZVNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyXCIgdi1zaG93PVwic2hvd1NlYXJjaFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2VhcmNoUXVlcnlcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2VhcmNoU2hlZXRzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBUcmVuZGluZyBTaGVldHMgU2VjdGlvbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZGluZy1zaGVldHNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7IHdpZHRoOiA5MCU7IFwiPlxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4XCI+VHJlbmRpbmcgU2hlZXRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1zY29wZVwiIHN0eWxlPVwicGFkZGluZzogMjBweFwiPlxuICAgICAgICAgIDx1bDE+XG4gICAgICAgICAgICA8bGkxIHYtZm9yPVwic2hlZXQgaW4gZmlsdGVyZWRTaGVldHNcIiA6a2V5PVwic2hlZXQuaWRcIj5cbiAgICAgICAgICAgICAgPHNoZWV0LWRpc3BsYXkgOnNoZWV0PVwic2hlZXRcIj48L3NoZWV0LWRpc3BsYXk+XG4gICAgICAgICAgICA8L2xpMT5cbiAgICAgICAgICA8L3VsMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgU2hlZXREaXNwbGF5IGZyb20gJy4vU2hlZXREaXNwbGF5LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFeHBsb3JlX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIFNoZWV0RGlzcGxheVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9tb29ubGlnaHQtc29uYXRhLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgICAgICByYXRpbmc6IDQuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgdGl0bGU6IFwiVGhlIEZvdXIgU2Vhc29uc1wiLFxuICAgICAgICAgIGNvbXBvc2VyOiBcIkFudG9uaW8gVml2YWxkaVwiLFxuICAgICAgICAgIGdlbnJlOiBcIkJhcm9xdWVcIixcbiAgICAgICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9mb3VyLXNlYXNvbnMtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgICAgIHJhdGluZzogMy41XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICB0aXRsZTogXCJDbGFpciBkZSBMdW5lXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiQ2xhdWRlIERlYnVzc3lcIixcbiAgICAgICAgICBnZW5yZTogXCJJbXByZXNzaW9uaXN0XCIsXG4gICAgICAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vY2xhaXItZGUtbHVuZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAgICAgcmF0aW5nOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICB0aXRsZTogXCJSaGFwc29keSBpbiBCbHVlXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiR2VvcmdlIEdlcnNod2luXCIsXG4gICAgICAgICAgZ2VucmU6IFwiSmF6elwiLFxuICAgICAgICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL3JoYXBzb2R5LWluLWJsdWUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgICAgIHJhdGluZzogNC40XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGZpbHRlcmVkU2hlZXRzKCkge1xuICAgICAgLy8gRmlsdGVyIHNoZWV0cyBvbmx5IGlmIHRoZXJlJ3MgYSBzZWFyY2ggcXVlcnlcbiAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZW5kaW5nU2hlZXRzLmZpbHRlcihzaGVldCA9PlxuICAgICAgICAgIHNoZWV0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHNoZWV0LmNvbXBvc2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHNoZWV0LmdlbnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHM7IC8vIFJldHVybiBhbGwgc2hlZXRzIGlmIG5vIHNlYXJjaCBxdWVyeVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICAgdG9nZ2xlU2VhcmNoQmFyKCkge1xuICAgICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgICB9LFxuXG4gICAgZmV0Y2hUcmVuZGluZ1NoZWV0cygpIHtcbiAgICAgIC8vIEZldGNoIHlvdXIgc2hlZXRzIGRhdGEgaGVyZVxuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mZXRjaFRyZW5kaW5nU2hlZXRzKCk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cbi8qIFVzZSB0aGUgcHJvdmlkZWQgQ1NTIHN0eWxlcyAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6b71793dbc92efcf"; }
/******/ }();
/******/ 
/******/ }
);