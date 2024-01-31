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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n//import SheetDisplay from \"@/Apps/SheetDisplay.vue\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"SheetDetail\",\n  //components: {SheetDisplay},\n  data() {\n    return {\n      sheet: {\n        default: () => ({\n          title: \"Moonlight Sonata\",\n          composer: \"Ludwig van Beethoven\",\n          genre: \"Classical\",\n          imagePath: \"../assets/score_0.svg\",\n          // Example image URL\n          rating: 4.3 // Example rating\n        })\n      }\n      // Other necessary data\n    };\n  },\n  methods: {\n    fetchSheetDetails() {\n      const sheetId = this.$route.params.id;\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api//' + sheetId).then(response => {\n        this.sheet = response.data;\n      }).catch(error => {\n        console.error(\"Error fetching sheet details:\", error);\n      });\n    },\n    saveSheet() {\n      const sheetId = this.sheet.id; // Assuming you have the sheet's ID\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/save_sheet/', {\n        sheetId: sheetId,\n        sellerId: this.owner\n      }).then(response => {\n        // Handle the success response\n        console.log(\"Sheet saved successfully:\", response.data);\n      }).catch(error => {\n        // Handle the error\n        console.error(\"Error saving sheet:\", error);\n      });\n    },\n    followUser() {\n      // Implement follow functionality\n    }\n  },\n  watch: {\n    '$route': 'fetchSheetDetails' // Re-fetch data when route changes\n  },\n  mounted() {\n    this.fetchSheetDetails();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOztBQW1DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT9mNmFhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlYXJjaC1pY29uXCIgQGNsaWNrPVwidG9nZ2xlU2VhcmNoQmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxicj48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIDxoMT57eyBzaGVldC5uYW1lIH19PC9oMT5cbiAgICAgICAgICA8IS0tIERpc3BsYXkgc2hlZXQgZGV0YWlscywgdXNlciBpbmZvLCBhbmQgaW1hZ2UgLS0+XG4gICAgICAgICAgPCEtLSBTYXZlIGFuZCBGb2xsb3cgYnV0dG9ucyAtLT5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVTaGVldFwiPlNhdmUgU2hlZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImZvbGxvd1VzZXJcIj5Gb2xsb3cgVXNlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vaW1wb3J0IFNoZWV0RGlzcGxheSBmcm9tIFwiQC9BcHBzL1NoZWV0RGlzcGxheS52dWVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTaGVldERldGFpbFwiLFxuICAgIC8vY29tcG9uZW50czoge1NoZWV0RGlzcGxheX0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoZWV0OiB7XG4gICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk1vb25saWdodCBTb25hdGFcIixcbiAgICAgICAgICAgIGNvbXBvc2VyOiBcIkx1ZHdpZyB2YW4gQmVldGhvdmVuXCIsXG4gICAgICAgICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgICAgICAgIGltYWdlUGF0aDogXCIuLi9hc3NldHMvc2NvcmVfMC5zdmdcIiwgLy8gRXhhbXBsZSBpbWFnZSBVUkxcbiAgICAgICAgICAgIHJhdGluZzogNC4zIC8vIEV4YW1wbGUgcmF0aW5nXG4gICAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgLy8gT3RoZXIgbmVjZXNzYXJ5IGRhdGFcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZmV0Y2hTaGVldERldGFpbHMoKSB7XG4gICAgICBjb25zdCBzaGVldElkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgYXhpb3MuZ2V0KCcvYXBpLy8nICsgc2hlZXRJZClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuc2hlZXQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzaGVldCBkZXRhaWxzOlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2F2ZVNoZWV0KCkge1xuICAgICAgY29uc3Qgc2hlZXRJZCA9IHRoaXMuc2hlZXQuaWQ7IC8vIEFzc3VtaW5nIHlvdSBoYXZlIHRoZSBzaGVldCdzIElEXG4gICAgICBheGlvcy5wb3N0KCcvYXBpL3NhdmVfc2hlZXQvJywgeyBzaGVldElkOiBzaGVldElkLCBzZWxsZXJJZDogdGhpcy5vd25lciB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBzdWNjZXNzIHJlc3BvbnNlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaGVldCBzYXZlZCBzdWNjZXNzZnVsbHk6XCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHNoZWV0OlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9sbG93VXNlcigpIHtcbiAgICAgIC8vIEltcGxlbWVudCBmb2xsb3cgZnVuY3Rpb25hbGl0eVxuICAgIH1cbiAgfSxcbiAgICB3YXRjaDoge1xuICAgICckcm91dGUnOiAnZmV0Y2hTaGVldERldGFpbHMnLCAvLyBSZS1mZXRjaCBkYXRhIHdoZW4gcm91dGUgY2hhbmdlc1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmV0Y2hTaGVldERldGFpbHMoKTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-b2b9e668\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"#\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\")], -1 /* HOISTED */));\nconst _hoisted_9 = [_hoisted_8];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Home\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    class: \"search-icon\",\n    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleSearchBar && _ctx.toggleSearchBar(...args))\n  }, [..._hoisted_9])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sheet.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Display sheet details, user info, and image \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Save and Follow buttons \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.saveSheet && $options.saveSheet(...args))\n  }, \"Save Sheet\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.followUser && $options.followUser(...args))\n  }, \"Follow User\")])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TaGVldERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjJiOWU2Njgmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUdBO0FBQUE7O0FBR0E7QUFBQTs7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQUE7OztBQWhCQTtBQUlBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFLQTtBQUlBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT9mNmFhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlYXJjaC1pY29uXCIgQGNsaWNrPVwidG9nZ2xlU2VhcmNoQmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxicj48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgIDxoMT57eyBzaGVldC5uYW1lIH19PC9oMT5cbiAgICAgICAgICA8IS0tIERpc3BsYXkgc2hlZXQgZGV0YWlscywgdXNlciBpbmZvLCBhbmQgaW1hZ2UgLS0+XG4gICAgICAgICAgPCEtLSBTYXZlIGFuZCBGb2xsb3cgYnV0dG9ucyAtLT5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNhdmVTaGVldFwiPlNhdmUgU2hlZXQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImZvbGxvd1VzZXJcIj5Gb2xsb3cgVXNlcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vaW1wb3J0IFNoZWV0RGlzcGxheSBmcm9tIFwiQC9BcHBzL1NoZWV0RGlzcGxheS52dWVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTaGVldERldGFpbFwiLFxuICAgIC8vY29tcG9uZW50czoge1NoZWV0RGlzcGxheX0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoZWV0OiB7XG4gICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk1vb25saWdodCBTb25hdGFcIixcbiAgICAgICAgICAgIGNvbXBvc2VyOiBcIkx1ZHdpZyB2YW4gQmVldGhvdmVuXCIsXG4gICAgICAgICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgICAgICAgIGltYWdlUGF0aDogXCIuLi9hc3NldHMvc2NvcmVfMC5zdmdcIiwgLy8gRXhhbXBsZSBpbWFnZSBVUkxcbiAgICAgICAgICAgIHJhdGluZzogNC4zIC8vIEV4YW1wbGUgcmF0aW5nXG4gICAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgLy8gT3RoZXIgbmVjZXNzYXJ5IGRhdGFcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgZmV0Y2hTaGVldERldGFpbHMoKSB7XG4gICAgICBjb25zdCBzaGVldElkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgYXhpb3MuZ2V0KCcvYXBpLy8nICsgc2hlZXRJZClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuc2hlZXQgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBzaGVldCBkZXRhaWxzOlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2F2ZVNoZWV0KCkge1xuICAgICAgY29uc3Qgc2hlZXRJZCA9IHRoaXMuc2hlZXQuaWQ7IC8vIEFzc3VtaW5nIHlvdSBoYXZlIHRoZSBzaGVldCdzIElEXG4gICAgICBheGlvcy5wb3N0KCcvYXBpL3NhdmVfc2hlZXQvJywgeyBzaGVldElkOiBzaGVldElkLCBzZWxsZXJJZDogdGhpcy5vd25lciB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBzdWNjZXNzIHJlc3BvbnNlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaGVldCBzYXZlZCBzdWNjZXNzZnVsbHk6XCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHNoZWV0OlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9sbG93VXNlcigpIHtcbiAgICAgIC8vIEltcGxlbWVudCBmb2xsb3cgZnVuY3Rpb25hbGl0eVxuICAgIH1cbiAgfSxcbiAgICB3YXRjaDoge1xuICAgICckcm91dGUnOiAnZmV0Y2hTaGVldERldGFpbHMnLCAvLyBSZS1mZXRjaCBkYXRhIHdoZW4gcm91dGUgY2hhbmdlc1xuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmV0Y2hTaGVldERldGFpbHMoKTtcbiAgfSxcbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "797591f878011cc5"; }
/******/ }();
/******/ 
/******/ }
);