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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _SheetDisplay_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SheetDisplay.vue */ \"./src/Apps/SheetDisplay.vue\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Explore_Page\",\n  components: {\n    SheetDisplay: _SheetDisplay_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      showSearch: false,\n      searchQuery: '',\n      trendingSheets: [{\n        id: 1,\n        title: \"Moonlight Sonata\",\n        composer: \"Ludwig van Beethoven\",\n        genre: \"Classical\",\n        imagePath: \"path/to/moonlight-sonata-image.jpg\",\n        // Replace with actual image path\n        rating: 4.5\n      }, {\n        id: 2,\n        title: \"The Four Seasons\",\n        composer: \"Antonio Vivaldi\",\n        genre: \"Baroque\",\n        imagePath: \"path/to/four-seasons-image.jpg\",\n        // Replace with actual image path\n        rating: 3.5\n      }, {\n        id: 3,\n        title: \"Clair de Lune\",\n        composer: \"Claude Debussy\",\n        genre: \"Impressionist\",\n        imagePath: \"path/to/clair-de-lune-image.jpg\",\n        // Replace with actual image path\n        rating: 5\n      }, {\n        id: 4,\n        title: \"Rhapsody in Blue\",\n        composer: \"George Gershwin\",\n        genre: \"Jazz\",\n        imagePath: \"path/to/rhapsody-in-blue-image.jpg\",\n        // Replace with actual image path\n        rating: 4.4\n      }]\n    };\n  },\n  computed: {\n    filteredSheets() {\n      // Filter sheets only if there's a search query\n      if (this.searchQuery) {\n        return this.trendingSheets.filter(sheet => sheet.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || sheet.composer.toLowerCase().includes(this.searchQuery.toLowerCase()) || sheet.genre.toLowerCase().includes(this.searchQuery.toLowerCase()));\n      }\n      return this.trendingSheets; // Return all sheets if no search query\n    }\n  },\n  methods: {\n    toggleSearchBar() {\n      this.showSearch = !this.showSearch;\n    },\n    fetchTrendingSheets() {\n      // Fetch your sheets data here\n    }\n  },\n  mounted() {\n    this.fetchTrendingSheets();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL0V4cGxvcmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7O0FBMENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9FeHBsb3JlLnZ1ZT81YWU4Il0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlYXJjaC1pY29uXCIgQGNsaWNrPVwidG9nZ2xlU2VhcmNoQmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1iYXJcIiB2LWlmPVwic2hvd1NlYXJjaFwiPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2LW1vZGVsPVwic2VhcmNoUXVlcnlcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIC8+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2VhcmNoU2hlZXRzXCI+U2VhcmNoPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBUcmVuZGluZyBTaGVldHMgU2VjdGlvbiAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZGluZy1zaGVldHNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7IHdpZHRoOiA5MCU7IHRleHQtYWxpZ246IGNlbnRlclwiPlxuICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4XCI+VHJlbmRpbmcgU2hlZXRzPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1zY29wZVwiIHN0eWxlPVwicGFkZGluZzogMTBweFwiPlxuICAgICAgICAgIDx1bDE+XG4gICAgICAgICAgICA8bGkxIHYtZm9yPVwic2hlZXQgaW4gZmlsdGVyZWRTaGVldHNcIiA6a2V5PVwic2hlZXQuaWRcIj5cbiAgICAgICAgICAgICAgPHNoZWV0LWRpc3BsYXkgOnNoZWV0PVwic2hlZXRcIj48L3NoZWV0LWRpc3BsYXk+XG4gICAgICAgICAgICA8L2xpMT5cbiAgICAgICAgICA8L3VsMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgU2hlZXREaXNwbGF5IGZyb20gJy4vU2hlZXREaXNwbGF5LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFeHBsb3JlX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgIFNoZWV0RGlzcGxheVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9tb29ubGlnaHQtc29uYXRhLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgICAgICByYXRpbmc6IDQuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgdGl0bGU6IFwiVGhlIEZvdXIgU2Vhc29uc1wiLFxuICAgICAgICAgIGNvbXBvc2VyOiBcIkFudG9uaW8gVml2YWxkaVwiLFxuICAgICAgICAgIGdlbnJlOiBcIkJhcm9xdWVcIixcbiAgICAgICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9mb3VyLXNlYXNvbnMtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgICAgIHJhdGluZzogMy41XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMyxcbiAgICAgICAgICB0aXRsZTogXCJDbGFpciBkZSBMdW5lXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiQ2xhdWRlIERlYnVzc3lcIixcbiAgICAgICAgICBnZW5yZTogXCJJbXByZXNzaW9uaXN0XCIsXG4gICAgICAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vY2xhaXItZGUtbHVuZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAgICAgcmF0aW5nOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNCxcbiAgICAgICAgICB0aXRsZTogXCJSaGFwc29keSBpbiBCbHVlXCIsXG4gICAgICAgICAgY29tcG9zZXI6IFwiR2VvcmdlIEdlcnNod2luXCIsXG4gICAgICAgICAgZ2VucmU6IFwiSmF6elwiLFxuICAgICAgICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL3JoYXBzb2R5LWluLWJsdWUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgICAgIHJhdGluZzogNC40XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgfTtcbiAgfSxcblxuICBjb21wdXRlZDoge1xuICAgIGZpbHRlcmVkU2hlZXRzKCkge1xuICAgICAgLy8gRmlsdGVyIHNoZWV0cyBvbmx5IGlmIHRoZXJlJ3MgYSBzZWFyY2ggcXVlcnlcbiAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZW5kaW5nU2hlZXRzLmZpbHRlcihzaGVldCA9PlxuICAgICAgICAgIHNoZWV0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHNoZWV0LmNvbXBvc2VyLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIHNoZWV0LmdlbnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHM7IC8vIFJldHVybiBhbGwgc2hlZXRzIGlmIG5vIHNlYXJjaCBxdWVyeVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgICAgdG9nZ2xlU2VhcmNoQmFyKCkge1xuICAgICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgICB9LFxuXG4gICAgZmV0Y2hUcmVuZGluZ1NoZWV0cygpIHtcbiAgICAgIC8vIEZldGNoIHlvdXIgc2hlZXRzIGRhdGEgaGVyZVxuICAgIH0sXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mZXRjaFRyZW5kaW5nU2hlZXRzKCk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cbi8qIFVzZSB0aGUgcHJvdmlkZWQgQ1NTIHN0eWxlcyAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-0ea8214f\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"#\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"i\", {\n  class: \"fas fa-search\"\n})], -1 /* HOISTED */));\nconst _hoisted_9 = [_hoisted_8];\nconst _hoisted_10 = {\n  key: 0,\n  class: \"search-bar\"\n};\nconst _hoisted_11 = {\n  class: \"trending-sheets\",\n  style: {\n    \"margin-top\": \"20px\",\n    \"width\": \"90%\",\n    \"text-align\": \"center\"\n  }\n};\nconst _hoisted_12 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  style: {\n    \"margin-bottom\": \"10px\"\n  }\n}, \"Trending Sheets\", -1 /* HOISTED */));\nconst _hoisted_13 = {\n  class: \"scroll-scope\",\n  style: {\n    \"padding\": \"10px\"\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  const _component_sheet_display = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"sheet-display\");\n  const _component_li1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"li1\");\n  const _component_ul1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"ul1\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Home\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    class: \"search-icon\",\n    onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleSearchBar && $options.toggleSearchBar(...args))\n  }, [..._hoisted_9])]), $data.showSearch ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.searchQuery = $event),\n    placeholder: \"Search...\"\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.searchQuery]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.searchSheets && _ctx.searchSheets(...args))\n  }, \"Search\")])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Trending Sheets Section \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ul1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.filteredSheets, sheet => {\n      return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_li1, {\n        key: sheet.id\n      }, {\n        default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_sheet_display, {\n          sheet: sheet\n        }, null, 8 /* PROPS */, [\"sheet\"])]),\n        _: 2 /* DYNAMIC */\n      }, 1024 /* DYNAMIC_SLOTS */);\n    }), 128 /* KEYED_FRAGMENT */))]),\n    _: 1 /* STABLE */\n  })])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9FeHBsb3JlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZWE4MjE0ZiZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBR0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUdBOzs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQTNCQTtBQUlBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0FwcHMvRXhwbG9yZS52dWU/NWFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Ib21lXCI+IEhvbWUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvRXhwbG9yZVwiPiBFeHBsb3JlIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0FkZFwiPiBBZGQgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvUHJvZmlsZVwiPiBQcm9maWxlIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWFyY2gtaWNvblwiIEBjbGljaz1cInRvZ2dsZVNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48aSBjbGFzcz1cImZhcyBmYS1zZWFyY2hcIj48L2k+PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtYmFyXCIgdi1pZj1cInNob3dTZWFyY2hcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInNlYXJjaFF1ZXJ5XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNlYXJjaFNoZWV0c1wiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gVHJlbmRpbmcgU2hlZXRzIFNlY3Rpb24gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwidHJlbmRpbmctc2hlZXRzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4OyB3aWR0aDogOTAlOyB0ZXh0LWFsaWduOiBjZW50ZXJcIj5cbiAgICAgICAgPGgyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlRyZW5kaW5nIFNoZWV0czwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtc2NvcGVcIiBzdHlsZT1cInBhZGRpbmc6IDEwcHhcIj5cbiAgICAgICAgICA8dWwxPlxuICAgICAgICAgICAgPGxpMSB2LWZvcj1cInNoZWV0IGluIGZpbHRlcmVkU2hlZXRzXCIgOmtleT1cInNoZWV0LmlkXCI+XG4gICAgICAgICAgICAgIDxzaGVldC1kaXNwbGF5IDpzaGVldD1cInNoZWV0XCI+PC9zaGVldC1kaXNwbGF5PlxuICAgICAgICAgICAgPC9saTE+XG4gICAgICAgICAgPC91bDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuaW1wb3J0IFNoZWV0RGlzcGxheSBmcm9tICcuL1NoZWV0RGlzcGxheS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRXhwbG9yZV9QYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBTaGVldERpc3BsYXlcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2hvd1NlYXJjaDogZmFsc2UsXG4gICAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgICB0cmVuZGluZ1NoZWV0czogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgdGl0bGU6IFwiTW9vbmxpZ2h0IFNvbmF0YVwiLFxuICAgICAgICAgIGNvbXBvc2VyOiBcIkx1ZHdpZyB2YW4gQmVldGhvdmVuXCIsXG4gICAgICAgICAgZ2VucmU6IFwiQ2xhc3NpY2FsXCIsXG4gICAgICAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vbW9vbmxpZ2h0LXNvbmF0YS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAgICAgcmF0aW5nOiA0LjVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgIHRpdGxlOiBcIlRoZSBGb3VyIFNlYXNvbnNcIixcbiAgICAgICAgICBjb21wb3NlcjogXCJBbnRvbmlvIFZpdmFsZGlcIixcbiAgICAgICAgICBnZW5yZTogXCJCYXJvcXVlXCIsXG4gICAgICAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vZm91ci1zZWFzb25zLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgICAgICByYXRpbmc6IDMuNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgdGl0bGU6IFwiQ2xhaXIgZGUgTHVuZVwiLFxuICAgICAgICAgIGNvbXBvc2VyOiBcIkNsYXVkZSBEZWJ1c3N5XCIsXG4gICAgICAgICAgZ2VucmU6IFwiSW1wcmVzc2lvbmlzdFwiLFxuICAgICAgICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL2NsYWlyLWRlLWx1bmUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgICAgIHJhdGluZzogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgdGl0bGU6IFwiUmhhcHNvZHkgaW4gQmx1ZVwiLFxuICAgICAgICAgIGNvbXBvc2VyOiBcIkdlb3JnZSBHZXJzaHdpblwiLFxuICAgICAgICAgIGdlbnJlOiBcIkphenpcIixcbiAgICAgICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9yaGFwc29keS1pbi1ibHVlLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgICAgICByYXRpbmc6IDQuNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHtcbiAgICBmaWx0ZXJlZFNoZWV0cygpIHtcbiAgICAgIC8vIEZpbHRlciBzaGVldHMgb25seSBpZiB0aGVyZSdzIGEgc2VhcmNoIHF1ZXJ5XG4gICAgICBpZiAodGhpcy5zZWFyY2hRdWVyeSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVuZGluZ1NoZWV0cy5maWx0ZXIoc2hlZXQgPT5cbiAgICAgICAgICBzaGVldC50aXRsZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBzaGVldC5jb21wb3Nlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBzaGVldC5nZW5yZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyZW5kaW5nU2hlZXRzOyAvLyBSZXR1cm4gYWxsIHNoZWV0cyBpZiBubyBzZWFyY2ggcXVlcnlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAgIHRvZ2dsZVNlYXJjaEJhcigpIHtcbiAgICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XG4gICAgfSxcblxuICAgIGZldGNoVHJlbmRpbmdTaGVldHMoKSB7XG4gICAgICAvLyBGZXRjaCB5b3VyIHNoZWV0cyBkYXRhIGhlcmVcbiAgICB9LFxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmV0Y2hUcmVuZGluZ1NoZWV0cygpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vYXNzZXRzL2Nzcy9ob21lX3BhZ2UuY3NzXCI+XG4vKiBVc2UgdGhlIHByb3ZpZGVkIENTUyBzdHlsZXMgKi9cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Explore.vue?vue&type=template&id=0ea8214f&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f16de34d5d63d84c"; }
/******/ }();
/******/ 
/******/ }
);