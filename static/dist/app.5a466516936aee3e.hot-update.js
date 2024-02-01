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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n//import SheetDisplay from \"@/Apps/SheetDisplay.vue\";\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"SheetDetail\",\n  //components: {SheetDisplay},\n  data() {\n    return {\n      components: [],\n      visib2: \"\",\n      firstPageUrl: null,\n      sheet: {\n        default: () => ({\n          title: \"Moonlight Sonata\",\n          composer: \"Ludwig van Beethoven\",\n          genre: \"Classical\",\n          imagePath: \"../assets/score_0.svg\",\n          // Example image URL\n          rating: 4.3 // Example rating\n        })\n      }\n      // Other necessary data\n    };\n  },\n  methods: {\n    async fetchFirstPage() {\n      const sheetId = this.$route.params.id;\n      // Example API call to get the first page\n      const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api/concerto/' + sheetId);\n      this.firstPageUrl = response.data.firstPageUrl;\n    },\n    fetchSheetDetails() {\n      const sheetId = this.$route.params.id;\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api/concerto/' + sheetId).then(response => {\n        this.sheet = response.data;\n      }).catch(error => {\n        console.error(\"Error fetching sheet details:\", error);\n      });\n    },\n    saveSheet() {\n      const sheetId = this.sheet.id; // Assuming you have the sheet's ID\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/api/save_sheet/', {\n        sheetId: sheetId,\n        sellerId: this.owner\n      }, {\n        xsrfCookieName: 'csrftoken',\n        xsrfHeaderName: 'X-CSRFTOKEN'\n      }).then(response => {\n        // Handle the success response\n        console.log(\"Sheet saved successfully:\", response.data);\n      }).catch(error => {\n        // Handle the error\n        console.error(\"Error saving sheet:\", error);\n      });\n    },\n    followUser() {\n      // Implement follow functionality\n    },\n    async fetchComponents() {\n      try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/components/');\n        this.components = response.data;\n        this.visib2 = this.components[0].is_seller;\n      } catch (error) {\n        console.error('Error fetching components:', error);\n      }\n    }\n  },\n  watch: {\n    '$route': 'fetchSheetDetails' // Re-fetch data when route changes\n  },\n  mounted() {\n    this.fetchSheetDetails();\n    this.fetchComponents();\n    this.fetchFirstPage();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOztBQTRDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TaGVldERldGFpbC52dWU/ZjZhYSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDx1bCBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCIgdi1pZj1cInZpc2liMlwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0FkZFwiPiBBZGQgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvUHJvZmlsZVwiPiBQcm9maWxlIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3M9XCJzZWFyY2gtaWNvblwiIEBjbGljaz1cInRvZ2dsZVNlYXJjaEJhclwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj48YnI+PC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cblxuXG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZGluZy1zaGVldHNcIiAgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4OyB3aWR0aDogNTAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxID57eyBzaGVldC5uYW1lIH19PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERpc3BsYXkgUERGIFByZXZpZXcgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1zY29wZVwiIHN0eWxlPVwicGFkZGluZzogMjBweDsgaGVpZ2h0OiA2MDBweDsgbWFyZ2luLXRvcDogMTBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGRmLXByZXZpZXctY29udGFpbmVyXCIgc3R5bGU9XCJwYWRkaW5nOiAyMHB4OyBoZWlnaHQ6IDYwMHB4OyBtYXJnaW4tdG9wOiAxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyB2LWlmPVwiZmlyc3RQYWdlVXJsXCIgOnNyYz1cImZpcnN0UGFnZVVybFwiIGFsdD1cIkZpcnN0IHBhZ2Ugb2YgUERGXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bztcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwic2F2ZVNoZWV0XCI+U2F2ZSBTaGVldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiZm9sbG93VXNlclwiPkZvbGxvdyBVc2VyPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vaW1wb3J0IFNoZWV0RGlzcGxheSBmcm9tIFwiQC9BcHBzL1NoZWV0RGlzcGxheS52dWVcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNoZWV0RGV0YWlsXCIsXG4gICAgLy9jb21wb25lbnRzOiB7U2hlZXREaXNwbGF5fSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW10sXG4gICAgICB2aXNpYjI6IFwiXCIsXG4gICAgICAgIGZpcnN0UGFnZVVybDogbnVsbCxcbiAgICAgIHNoZWV0OiB7XG4gICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbiAgICAgICAgICAgIHRpdGxlOiBcIk1vb25saWdodCBTb25hdGFcIixcbiAgICAgICAgICAgIGNvbXBvc2VyOiBcIkx1ZHdpZyB2YW4gQmVldGhvdmVuXCIsXG4gICAgICAgICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgICAgICAgIGltYWdlUGF0aDogXCIuLi9hc3NldHMvc2NvcmVfMC5zdmdcIiwgLy8gRXhhbXBsZSBpbWFnZSBVUkxcbiAgICAgICAgICAgIHJhdGluZzogNC4zIC8vIEV4YW1wbGUgcmF0aW5nXG4gICAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgLy8gT3RoZXIgbmVjZXNzYXJ5IGRhdGFcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgICBhc3luYyBmZXRjaEZpcnN0UGFnZSgpIHtcbiAgICAgIGNvbnN0IHNoZWV0SWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICAvLyBFeGFtcGxlIEFQSSBjYWxsIHRvIGdldCB0aGUgZmlyc3QgcGFnZVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY29uY2VydG8vJyArIHNoZWV0SWQpO1xuICAgICAgdGhpcy5maXJzdFBhZ2VVcmwgPSByZXNwb25zZS5kYXRhLmZpcnN0UGFnZVVybDtcbiAgICB9LFxuXG4gICAgZmV0Y2hTaGVldERldGFpbHMoKSB7XG4gICAgICBjb25zdCBzaGVldElkID0gdGhpcy4kcm91dGUucGFyYW1zLmlkO1xuICAgICAgYXhpb3MuZ2V0KCcvYXBpL2NvbmNlcnRvLycgKyBzaGVldElkKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5zaGVldCA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHNoZWV0IGRldGFpbHM6XCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzYXZlU2hlZXQoKSB7XG4gICAgICBjb25zdCBzaGVldElkID0gdGhpcy5zaGVldC5pZDsgLy8gQXNzdW1pbmcgeW91IGhhdmUgdGhlIHNoZWV0J3MgSURcbiAgICAgIGF4aW9zLnBvc3QoJy9hcGkvc2F2ZV9zaGVldC8nLCB7IHNoZWV0SWQ6IHNoZWV0SWQsIHNlbGxlcklkOiB0aGlzLm93bmVyIH0sIHtcbiAgICAgICAgICAgICAgICB4c3JmQ29va2llTmFtZTogJ2NzcmZ0b2tlbicsXG4gICAgICAgICAgICAgICAgeHNyZkhlYWRlck5hbWU6ICdYLUNTUkZUT0tFTicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBzdWNjZXNzIHJlc3BvbnNlXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTaGVldCBzYXZlZCBzdWNjZXNzZnVsbHk6XCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3JcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2F2aW5nIHNoZWV0OlwiLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZm9sbG93VXNlcigpIHtcbiAgICAgIC8vIEltcGxlbWVudCBmb2xsb3cgZnVuY3Rpb25hbGl0eVxuICAgIH0sXG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnRzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2NvbXBvbmVudHMvJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liMiA9IHRoaXMuY29tcG9uZW50c1swXS5pc19zZWxsZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvbXBvbmVudHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICB9LFxuICAgIHdhdGNoOiB7XG4gICAgJyRyb3V0ZSc6ICdmZXRjaFNoZWV0RGV0YWlscycsIC8vIFJlLWZldGNoIGRhdGEgd2hlbiByb3V0ZSBjaGFuZ2VzXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mZXRjaFNoZWV0RGV0YWlscygpO1xuICAgICB0aGlzLmZldGNoQ29tcG9uZW50cygpO1xuICAgICB0aGlzLmZldGNoRmlyc3RQYWdlKCk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-b2b9e668\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  key: 0,\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", {\n  href: \"#\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"br\")], -1 /* HOISTED */));\nconst _hoisted_8 = [_hoisted_7];\nconst _hoisted_9 = {\n  class: \"trending-sheets\",\n  style: {\n    \"margin-top\": \"20px\",\n    \"width\": \"50%\"\n  }\n};\nconst _hoisted_10 = {\n  class: \"scroll-scope\",\n  style: {\n    \"padding\": \"20px\",\n    \"height\": \"600px\",\n    \"margin-top\": \"10px\"\n  }\n};\nconst _hoisted_11 = {\n  id: \"pdf-preview-container\",\n  style: {\n    \"padding\": \"20px\",\n    \"height\": \"600px\",\n    \"margin-top\": \"10px\"\n  }\n};\nconst _hoisted_12 = [\"src\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [$data.visib2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n    class: \"search-icon\",\n    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.toggleSearchBar && _ctx.toggleSearchBar(...args))\n  }, [..._hoisted_8])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.sheet.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Display PDF Preview \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [$data.firstPageUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"img\", {\n    key: 0,\n    src: $data.firstPageUrl,\n    alt: \"First page of PDF\",\n    style: {\n      \"max-width\": \"100%\",\n      \"height\": \"auto\"\n    }\n  }, null, 8 /* PROPS */, _hoisted_12)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[1] || (_cache[1] = (...args) => $options.saveSheet && $options.saveSheet(...args))\n  }, \"Save Sheet\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n    onClick: _cache[2] || (_cache[2] = (...args) => $options.followUser && $options.followUser(...args))\n  }, \"Follow User\")])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TaGVldERldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjJiOWU2Njgmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOzs7QUFHQTs7O0FBR0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQXpCQTtBQUlBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFPQTs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL1NoZWV0RGV0YWlsLnZ1ZT9mNmFhIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50MVwiPlxuICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0V4cGxvcmVcIj4gRXhwbG9yZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIiB2LWlmPVwidmlzaWIyXCI+XG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzcz1cInNlYXJjaC1pY29uXCIgQGNsaWNrPVwidG9nZ2xlU2VhcmNoQmFyXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPjxicj48L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuXG5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRyZW5kaW5nLXNoZWV0c1wiICBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7IHdpZHRoOiA1MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDEgPnt7IHNoZWV0Lm5hbWUgfX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRGlzcGxheSBQREYgUHJldmlldyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXNjb3BlXCIgc3R5bGU9XCJwYWRkaW5nOiAyMHB4OyBoZWlnaHQ6IDYwMHB4OyBtYXJnaW4tdG9wOiAxMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwZGYtcHJldmlldy1jb250YWluZXJcIiBzdHlsZT1cInBhZGRpbmc6IDIwcHg7IGhlaWdodDogNjAwcHg7IG1hcmdpbi10b3A6IDEwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHYtaWY9XCJmaXJzdFBhZ2VVcmxcIiA6c3JjPVwiZmlyc3RQYWdlVXJsXCIgYWx0PVwiRmlyc3QgcGFnZSBvZiBQREZcIiBzdHlsZT1cIm1heC13aWR0aDogMTAwJTsgaGVpZ2h0OiBhdXRvO1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJzYXZlU2hlZXRcIj5TYXZlIFNoZWV0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJmb2xsb3dVc2VyXCI+Rm9sbG93IFVzZXI8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuLy9pbXBvcnQgU2hlZXREaXNwbGF5IGZyb20gXCJAL0FwcHMvU2hlZXREaXNwbGF5LnZ1ZVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiU2hlZXREZXRhaWxcIixcbiAgICAvL2NvbXBvbmVudHM6IHtTaGVldERpc3BsYXl9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRzOiBbXSxcbiAgICAgIHZpc2liMjogXCJcIixcbiAgICAgICAgZmlyc3RQYWdlVXJsOiBudWxsLFxuICAgICAgc2hlZXQ6IHtcbiAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTW9vbmxpZ2h0IFNvbmF0YVwiLFxuICAgICAgICAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgICAgICAgIGdlbnJlOiBcIkNsYXNzaWNhbFwiLFxuICAgICAgICAgICAgaW1hZ2VQYXRoOiBcIi4uL2Fzc2V0cy9zY29yZV8wLnN2Z1wiLCAvLyBFeGFtcGxlIGltYWdlIFVSTFxuICAgICAgICAgICAgcmF0aW5nOiA0LjMgLy8gRXhhbXBsZSByYXRpbmdcbiAgICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgICAvLyBPdGhlciBuZWNlc3NhcnkgZGF0YVxuICAgIH07XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICAgIGFzeW5jIGZldGNoRmlyc3RQYWdlKCkge1xuICAgICAgY29uc3Qgc2hlZXRJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5pZDtcbiAgICAgIC8vIEV4YW1wbGUgQVBJIGNhbGwgdG8gZ2V0IHRoZSBmaXJzdCBwYWdlXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jb25jZXJ0by8nICsgc2hlZXRJZCk7XG4gICAgICB0aGlzLmZpcnN0UGFnZVVybCA9IHJlc3BvbnNlLmRhdGEuZmlyc3RQYWdlVXJsO1xuICAgIH0sXG5cbiAgICBmZXRjaFNoZWV0RGV0YWlscygpIHtcbiAgICAgIGNvbnN0IHNoZWV0SWQgPSB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQ7XG4gICAgICBheGlvcy5nZXQoJy9hcGkvY29uY2VydG8vJyArIHNoZWV0SWQpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICB0aGlzLnNoZWV0ID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgc2hlZXQgZGV0YWlsczpcIiwgZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNhdmVTaGVldCgpIHtcbiAgICAgIGNvbnN0IHNoZWV0SWQgPSB0aGlzLnNoZWV0LmlkOyAvLyBBc3N1bWluZyB5b3UgaGF2ZSB0aGUgc2hlZXQncyBJRFxuICAgICAgYXhpb3MucG9zdCgnL2FwaS9zYXZlX3NoZWV0LycsIHsgc2hlZXRJZDogc2hlZXRJZCwgc2VsbGVySWQ6IHRoaXMub3duZXIgfSwge1xuICAgICAgICAgICAgICAgIHhzcmZDb29raWVOYW1lOiAnY3NyZnRva2VuJyxcbiAgICAgICAgICAgICAgICB4c3JmSGVhZGVyTmFtZTogJ1gtQ1NSRlRPS0VOJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAvLyBIYW5kbGUgdGhlIHN1Y2Nlc3MgcmVzcG9uc2VcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoZWV0IHNhdmVkIHN1Y2Nlc3NmdWxseTpcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzYXZpbmcgc2hlZXQ6XCIsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBmb2xsb3dVc2VyKCkge1xuICAgICAgLy8gSW1wbGVtZW50IGZvbGxvdyBmdW5jdGlvbmFsaXR5XG4gICAgfSxcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudHMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY29tcG9uZW50cy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWIyID0gdGhpcy5jb21wb25lbnRzWzBdLmlzX3NlbGxlcjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29tcG9uZW50czonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAnJHJvdXRlJzogJ2ZldGNoU2hlZXREZXRhaWxzJywgLy8gUmUtZmV0Y2ggZGF0YSB3aGVuIHJvdXRlIGNoYW5nZXNcbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoU2hlZXREZXRhaWxzKCk7XG4gICAgIHRoaXMuZmV0Y2hDb21wb25lbnRzKCk7XG4gICAgIHRoaXMuZmV0Y2hGaXJzdFBhZ2UoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/SheetDetail.vue?vue&type=template&id=b2b9e668&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "134225d548085680"; }
/******/ }();
/******/ 
/******/ }
);