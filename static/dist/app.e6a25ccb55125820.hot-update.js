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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n//import SheetDisplay from \"@/Apps/SheetDisplay.vue\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"SheetDetail\",\n  //components: {SheetDisplay},\n  data() {\n    return {\n      sheet: {\n        default: () => ({\n          title: \"Moonlight Sonata\",\n          composer: \"Ludwig van Beethoven\",\n          genre: \"Classical\",\n          imagePath: \"../assets/score_0.svg\",\n          // Example image URL\n          rating: 4.3 // Example rating\n        })\n      }\n      // Other necessary data\n    };\n  },\n  methods: {\n    fetchSheetDetails() {\n      const sheetId = this.$route.params.id;\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api/sheets/' + sheetId).then(response => {\n        this.sheet = response.data;\n      }).catch(error => {\n        console.error(\"Error fetching sheet details:\", error);\n      });\n    },\n    saveSheet() {\n      const sheetId = this.sheet.id; // Assuming you have the sheet's ID\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/save_sheet/', {\n        sheetId: sheetId,\n        sellerId: this.owner\n      }).then(response => {\n        // Handle the success response\n        console.log(\"Sheet saved successfully:\", response.data);\n      }).catch(error => {\n        // Handle the error\n        console.error(\"Error saving sheet:\", error);\n      });\n    },\n    followUser() {\n      // Implement follow functionality\n    }\n  },\n  watch: {\n    '$route': 'fetchSheetDetails' // Re-fetch data when route changes\n  },\n  mounted() {\n    this.fetchSheetDetails();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT9mNmFhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlYXJjaC1pY29uXCIgQGNsaWNrPVwidG9nZ2xlU2VhcmNoQmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxicj48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIDxoMT57eyBzaGVldC50aXRsZSB9fTwvaDE+XG4gICAgICAgICAgPCEtLSBEaXNwbGF5IHNoZWV0IGRldGFpbHMsIHVzZXIgaW5mbywgYW5kIGltYWdlIC0tPlxuICAgICAgICAgIDwhLS0gU2F2ZSBhbmQgRm9sbG93IGJ1dHRvbnMgLS0+XG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlU2hlZXRcIj5TYXZlIFNoZWV0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJmb2xsb3dVc2VyXCI+Rm9sbG93IFVzZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vL2ltcG9ydCBTaGVldERpc3BsYXkgZnJvbSBcIkAvQXBwcy9TaGVldERpc3BsYXkudnVlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2hlZXREZXRhaWxcIixcbiAgICAvL2NvbXBvbmVudHM6IHtTaGVldERpc3BsYXl9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaGVldDoge1xuICAgICAgICAgIGRlZmF1bHQ6ICgpID0+ICh7XG4gICAgICAgICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAgICAgICBjb21wb3NlcjogXCJMdWR3aWcgdmFuIEJlZXRob3ZlblwiLFxuICAgICAgICAgICAgZ2VucmU6IFwiQ2xhc3NpY2FsXCIsXG4gICAgICAgICAgICBpbWFnZVBhdGg6IFwiLi4vYXNzZXRzL3Njb3JlXzAuc3ZnXCIsIC8vIEV4YW1wbGUgaW1hZ2UgVVJMXG4gICAgICAgICAgICByYXRpbmc6IDQuMyAvLyBFeGFtcGxlIHJhdGluZ1xuICAgICAgICAgIH0pLFxuICAgICAgfSxcbiAgICAgIC8vIE90aGVyIG5lY2Vzc2FyeSBkYXRhXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZldGNoU2hlZXREZXRhaWxzKCkge1xuICAgICAgY29uc3Qgc2hlZXRJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgIGF4aW9zLmdldCgnL2FwaS9zaGVldHMvJyArIHNoZWV0SWQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnNoZWV0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2hlZXQgZGV0YWlsczpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNhdmVTaGVldCgpIHtcbiAgICAgIGNvbnN0IHNoZWV0SWQgPSB0aGlzLnNoZWV0LmlkOyAvLyBBc3N1bWluZyB5b3UgaGF2ZSB0aGUgc2hlZXQncyBJRFxuICAgICAgYXhpb3MucG9zdCgnL2FwaS9zYXZlX3NoZWV0LycsIHsgc2hlZXRJZDogc2hlZXRJZCwgc2VsbGVySWQ6IHRoaXMub3duZXIgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3VjY2VzcyByZXNwb25zZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hlZXQgc2F2ZWQgc3VjY2Vzc2Z1bGx5OlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBzaGVldDpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGZvbGxvd1VzZXIoKSB7XG4gICAgICAvLyBJbXBsZW1lbnQgZm9sbG93IGZ1bmN0aW9uYWxpdHlcbiAgICB9XG4gIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlJzogJ2ZldGNoU2hlZXREZXRhaWxzJywgLy8gUmUtZmV0Y2ggZGF0YSB3aGVuIHJvdXRlIGNoYW5nZXNcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoU2hlZXREZXRhaWxzKCk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vYXNzZXRzL2Nzcy9ob21lX3BhZ2UuY3NzXCI+XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-b2b9e668\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"#\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\")], -1 /* HOISTED */));\nconst _hoisted_9 = [_hoisted_8];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Home\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    class: \"search-icon\",\n    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleSearchBar && _ctx.toggleSearchBar(...args))\n  }, [..._hoisted_9])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sheet.title), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Display sheet details, user info, and image \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Save and Follow buttons \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.saveSheet && $options.saveSheet(...args))\n  }, \"Save Sheet\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.followUser && $options.followUser(...args))\n  }, \"Follow User\")])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TaGVldERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjJiOWU2Njgmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUdBO0FBQUE7O0FBR0E7QUFBQTs7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7OztBQWhCQTtBQUlBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT9mNmFhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlYXJjaC1pY29uXCIgQGNsaWNrPVwidG9nZ2xlU2VhcmNoQmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxicj48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIDxoMT57eyBzaGVldC50aXRsZSB9fTwvaDE+XG4gICAgICAgICAgPCEtLSBEaXNwbGF5IHNoZWV0IGRldGFpbHMsIHVzZXIgaW5mbywgYW5kIGltYWdlIC0tPlxuICAgICAgICAgIDwhLS0gU2F2ZSBhbmQgRm9sbG93IGJ1dHRvbnMgLS0+XG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlU2hlZXRcIj5TYXZlIFNoZWV0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJmb2xsb3dVc2VyXCI+Rm9sbG93IFVzZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4vL2ltcG9ydCBTaGVldERpc3BsYXkgZnJvbSBcIkAvQXBwcy9TaGVldERpc3BsYXkudnVlXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2hlZXREZXRhaWxcIixcbiAgICAvL2NvbXBvbmVudHM6IHtTaGVldERpc3BsYXl9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaGVldDoge1xuICAgICAgICAgIGRlZmF1bHQ6ICgpID0+ICh7XG4gICAgICAgICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAgICAgICBjb21wb3NlcjogXCJMdWR3aWcgdmFuIEJlZXRob3ZlblwiLFxuICAgICAgICAgICAgZ2VucmU6IFwiQ2xhc3NpY2FsXCIsXG4gICAgICAgICAgICBpbWFnZVBhdGg6IFwiLi4vYXNzZXRzL3Njb3JlXzAuc3ZnXCIsIC8vIEV4YW1wbGUgaW1hZ2UgVVJMXG4gICAgICAgICAgICByYXRpbmc6IDQuMyAvLyBFeGFtcGxlIHJhdGluZ1xuICAgICAgICAgIH0pLFxuICAgICAgfSxcbiAgICAgIC8vIE90aGVyIG5lY2Vzc2FyeSBkYXRhXG4gICAgfTtcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGZldGNoU2hlZXREZXRhaWxzKCkge1xuICAgICAgY29uc3Qgc2hlZXRJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgIGF4aW9zLmdldCgnL2FwaS9zaGVldHMvJyArIHNoZWV0SWQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnNoZWV0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2hlZXQgZGV0YWlsczpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNhdmVTaGVldCgpIHtcbiAgICAgIGNvbnN0IHNoZWV0SWQgPSB0aGlzLnNoZWV0LmlkOyAvLyBBc3N1bWluZyB5b3UgaGF2ZSB0aGUgc2hlZXQncyBJRFxuICAgICAgYXhpb3MucG9zdCgnL2FwaS9zYXZlX3NoZWV0LycsIHsgc2hlZXRJZDogc2hlZXRJZCwgc2VsbGVySWQ6IHRoaXMub3duZXIgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgc3VjY2VzcyByZXNwb25zZVxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hlZXQgc2F2ZWQgc3VjY2Vzc2Z1bGx5OlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIGVycm9yXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyBzaGVldDpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGZvbGxvd1VzZXIoKSB7XG4gICAgICAvLyBJbXBsZW1lbnQgZm9sbG93IGZ1bmN0aW9uYWxpdHlcbiAgICB9XG4gIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlJzogJ2ZldGNoU2hlZXREZXRhaWxzJywgLy8gUmUtZmV0Y2ggZGF0YSB3aGVuIHJvdXRlIGNoYW5nZXNcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoU2hlZXREZXRhaWxzKCk7XG4gIH0sXG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vYXNzZXRzL2Nzcy9ob21lX3BhZ2UuY3NzXCI+XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2fa7569ee58f1471"; }
/******/ }();
/******/ 
/******/ }
);