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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDisplay.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDisplay.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SheetDisplay',\n  data() {\n    return {\n      firstPageUrl: \"poop.pdf\"\n    };\n  },\n  props: {\n    sheet: {\n      type: Object,\n      required: true,\n      default: () => ({\n        title: \"Moonlight Sonata\",\n        composer: \"Ludwig van Beethoven\",\n        genre: \"Classical\",\n        imagePath: \"../assets/score_0.svg\",\n        // Example image URL\n        rating: 4.3 // Example rating\n      })\n    }\n  },\n  methods: {\n    async fetchFirstPage() {\n      const sheetId = this.sheet.id;\n      this.firstPageUrl = \"/concerto/\" + sheetId;\n    }\n  },\n  mounted() {\n    this.fetchFirstPage();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NoZWV0RGlzcGxheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6IjtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TaGVldERpc3BsYXkudnVlP2FjZTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2hlZXQtZGlzcGxheVwiPlxuICAgIDxkaXYgY2xhc3M9XCJzaGVldC1pbWFnZVwiPlxuICAgICAgPCEtLSBFeGFtcGxlIGltYWdlOyByZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHNvdXJjZSBmcm9tIHlvdXIgZGF0YSAtLT5cbiAgICAgICA8aW1nIDpTUkM9XCJmaXJzdFBhZ2VVcmxcIiBsb2FkaW5nPVwibGF6eVwiICAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaGVldC1pbmZvXCI+XG4gICAgICA8IS0tIEV4YW1wbGUgdGl0bGU7IHJlcGxhY2Ugd2l0aCBhY3R1YWwgdGl0bGUgZnJvbSB5b3VyIGRhdGEgLS0+XG4gICAgICA8aDM+e3sgc2hlZXQubmFtZSB9fTwvaDM+XG4gICAgICA8cD5Db21wb3Nlcjoge3sgc2hlZXQuY29tcG9zZXIgfX08L3A+XG4gICAgICA8cD5HZW5yZToge3sgc2hlZXQuZ2VucmUgfX08L3A+XG4gICAgICA8IS0tIEFkZCBtb3JlIHNoZWV0IGRldGFpbHMgYXMgbmVlZGVkIC0tPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJzaGVldC1yYXRpbmdcIiA+XG4gICAgICA8IS0tIFN0YXIgUmF0aW5nIERpc3BsYXkgLS0+XG4gICAgICA8c3BhbiB2LWZvcj1cInN0YXIgaW4gNVwiIDprZXk9XCJzdGFyXCIgY2xhc3M9XCJzdGFyXCI+XG4gICAgICAgIHt7IHN0YXIgPD0gc2hlZXQuc2NvcmUgPyAn4piFJyA6ICfimIYnIH19XG4gICAgICA8L3NwYW4+XG48IS0tICAgICAgPHNwYW4gY2xhc3M9XCJyYXRpbmctbnVtYmVyXCI+e3sgc2hlZXQucmF0aW5nLnRvRml4ZWQoMSkgfX0gLyA1PC9zcGFuPi0tPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdTaGVldERpc3BsYXknLFxuICAgIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZmlyc3RQYWdlVXJsOiBcInBvb3AucGRmXCIsXG4gICAgfTtcbiAgfSxcbiAgcHJvcHM6IHtcbiAgICBzaGVldDoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICBkZWZhdWx0OiAoKSA9PiAoe1xuICAgICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAgIGNvbXBvc2VyOiBcIkx1ZHdpZyB2YW4gQmVldGhvdmVuXCIsXG4gICAgICAgIGdlbnJlOiBcIkNsYXNzaWNhbFwiLFxuICAgICAgICBpbWFnZVBhdGg6IFwiLi4vYXNzZXRzL3Njb3JlXzAuc3ZnXCIsIC8vIEV4YW1wbGUgaW1hZ2UgVVJMXG4gICAgICAgIHJhdGluZzogNC4zIC8vIEV4YW1wbGUgcmF0aW5nXG4gICAgICB9KSxcbiAgICB9LFxuICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgYXN5bmMgZmV0Y2hGaXJzdFBhZ2UoKSB7XG4gICAgICAgIGNvbnN0IHNoZWV0SWQgPSB0aGlzLnNoZWV0LmlkO1xuXG4gICAgICAgIHRoaXMuZmlyc3RQYWdlVXJsID0gXCIvY29uY2VydG8vXCIgKyBzaGVldElkXG5cbiAgICAgIH0sXG4gICAgfSxcbiAgICBtb3VudGVkKCkge1xuXG4gICAgIHRoaXMuZmV0Y2hGaXJzdFBhZ2UoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDUwMCw2MDAsNzAwfFBvcHBpbnM6NDAwLDUwMCZkaXNwbGF5PXN3YXAnKTtcblxuKntcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xufVxuLnNoZWV0LWRpc3BsYXkge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbi5zaGVldC1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1nLnBuZycpO1xufVxuXG4uc2hlZXQtaW5mbyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zaGVldC1pbmZvIHAge1xuICBtYXJnaW46IDVweCAwO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzY2Njtcbn1cbi8qIEV4aXN0aW5nIHN0eWxlcyAuLi4gKi9cblxuXG5cbi5zaGVldC1yYXRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG4uc3RhciB7XG4gIGNvbG9yOiBnb2xkO1xuICBmb250LXNpemU6IDIwcHg7IC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cbn1cblxuLnJhdGluZy1udW1iZXIge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDisplay.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDisplay.vue?vue&type=template&id=10bf1457&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDisplay.vue?vue&type=template&id=10bf1457&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-10bf1457\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"sheet-display\"\n};\nconst _hoisted_2 = {\n  class: \"sheet-image\"\n};\nconst _hoisted_3 = [\"SRC\"];\nconst _hoisted_4 = {\n  class: \"sheet-info\"\n};\nconst _hoisted_5 = {\n  class: \"sheet-rating\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Example image; replace with actual image source from your data \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n    SRC: $data.firstPageUrl,\n    loading: \"lazy\"\n  }, null, 8 /* PROPS */, _hoisted_3)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Example title; replace with actual title from your data \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h3\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.sheet.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Composer: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.sheet.composer), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"p\", null, \"Genre: \" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.sheet.genre), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Add more sheet details as needed \")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Star Rating Display \"), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(5, star => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n      key: star,\n      class: \"star\"\n    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(star <= $props.sheet.score ? '★' : '☆'), 1 /* TEXT */);\n  }), 64 /* STABLE_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"      <span class=\\\"rating-number\\\">{{ sheet.rating.toFixed(1) }} / 5</span>\")])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TaGVldERpc3BsYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEwYmYxNDU3JnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOzs7QUFJQTtBQUFBOztBQU9BO0FBQUE7O0FBWkE7QUFHQTtBQUFBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL1NoZWV0RGlzcGxheS52dWU/YWNlMCJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJzaGVldC1kaXNwbGF5XCI+XG4gICAgPGRpdiBjbGFzcz1cInNoZWV0LWltYWdlXCI+XG4gICAgICA8IS0tIEV4YW1wbGUgaW1hZ2U7IHJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2Ugc291cmNlIGZyb20geW91ciBkYXRhIC0tPlxuICAgICAgIDxpbWcgOlNSQz1cImZpcnN0UGFnZVVybFwiIGxvYWRpbmc9XCJsYXp5XCIgIC8+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNoZWV0LWluZm9cIj5cbiAgICAgIDwhLS0gRXhhbXBsZSB0aXRsZTsgcmVwbGFjZSB3aXRoIGFjdHVhbCB0aXRsZSBmcm9tIHlvdXIgZGF0YSAtLT5cbiAgICAgIDxoMz57eyBzaGVldC5uYW1lIH19PC9oMz5cbiAgICAgIDxwPkNvbXBvc2VyOiB7eyBzaGVldC5jb21wb3NlciB9fTwvcD5cbiAgICAgIDxwPkdlbnJlOiB7eyBzaGVldC5nZW5yZSB9fTwvcD5cbiAgICAgIDwhLS0gQWRkIG1vcmUgc2hlZXQgZGV0YWlscyBhcyBuZWVkZWQgLS0+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInNoZWV0LXJhdGluZ1wiID5cbiAgICAgIDwhLS0gU3RhciBSYXRpbmcgRGlzcGxheSAtLT5cbiAgICAgIDxzcGFuIHYtZm9yPVwic3RhciBpbiA1XCIgOmtleT1cInN0YXJcIiBjbGFzcz1cInN0YXJcIj5cbiAgICAgICAge3sgc3RhciA8PSBzaGVldC5zY29yZSA/ICfimIUnIDogJ+KYhicgfX1cbiAgICAgIDwvc3Bhbj5cbjwhLS0gICAgICA8c3BhbiBjbGFzcz1cInJhdGluZy1udW1iZXJcIj57eyBzaGVldC5yYXRpbmcudG9GaXhlZCgxKSB9fSAvIDU8L3NwYW4+LS0+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ1NoZWV0RGlzcGxheScsXG4gICAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmaXJzdFBhZ2VVcmw6IFwicG9vcC5wZGZcIixcbiAgICB9O1xuICB9LFxuICBwcm9wczoge1xuICAgIHNoZWV0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgIGRlZmF1bHQ6ICgpID0+ICh7XG4gICAgICAgIHRpdGxlOiBcIk1vb25saWdodCBTb25hdGFcIixcbiAgICAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgICAgZ2VucmU6IFwiQ2xhc3NpY2FsXCIsXG4gICAgICAgIGltYWdlUGF0aDogXCIuLi9hc3NldHMvc2NvcmVfMC5zdmdcIiwgLy8gRXhhbXBsZSBpbWFnZSBVUkxcbiAgICAgICAgcmF0aW5nOiA0LjMgLy8gRXhhbXBsZSByYXRpbmdcbiAgICAgIH0pLFxuICAgIH0sXG4gIH0sXG4gICAgbWV0aG9kczp7XG4gICAgICBhc3luYyBmZXRjaEZpcnN0UGFnZSgpIHtcbiAgICAgICAgY29uc3Qgc2hlZXRJZCA9IHRoaXMuc2hlZXQuaWQ7XG5cbiAgICAgICAgdGhpcy5maXJzdFBhZ2VVcmwgPSBcIi9jb25jZXJ0by9cIiArIHNoZWV0SWRcblxuICAgICAgfSxcbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG5cbiAgICAgdGhpcy5mZXRjaEZpcnN0UGFnZSgpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9udHNlcnJhdDo0MDAsNTAwLDYwMCw3MDB8UG9wcGluczo0MDAsNTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4qe1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG59XG4uc2hlZXQtZGlzcGxheSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbn1cblxuLnNoZWV0LWltYWdlIGltZyB7XG4gIHdpZHRoOiAxMDBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9pbWcucG5nJyk7XG59XG5cbi5zaGVldC1pbmZvIGgzIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzMzMztcbn1cblxuLnNoZWV0LWluZm8gcCB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjNjY2O1xufVxuLyogRXhpc3Rpbmcgc3R5bGVzIC4uLiAqL1xuXG5cblxuLnNoZWV0LXJhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbi5zdGFyIHtcbiAgY29sb3I6IGdvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDsgLyogQWRqdXN0IGFzIG5lZWRlZCAqL1xufVxuXG4ucmF0aW5nLW51bWJlciB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDisplay.vue?vue&type=template&id=10bf1457&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a997a5557a5af021"; }
/******/ }();
/******/ 
/******/ }
);