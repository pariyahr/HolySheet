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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.url-search-params.delete.js */ \"./node_modules/core-js/modules/web.url-search-params.delete.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_delete_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.url-search-params.has.js */ \"./node_modules/core-js/modules/web.url-search-params.has.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_has_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.url-search-params.size.js */ \"./node_modules/core-js/modules/web.url-search-params.size.js\");\n/* harmony import */ var core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_size_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Add_page\",\n  data() {\n    return {\n      newSheet: {\n        name: '',\n        genre: '',\n        file: null,\n        score: 0,\n        price: 0,\n        composer: ''\n      },\n      pdfPreviewUrl: null\n    };\n  },\n  methods: {\n    handleFileUpload(event) {\n      const file = event.target.files[0];\n      if (file && file.type === \"application/pdf\") {\n        this.newSheet.file = file;\n        this.pdfPreviewUrl = URL.createObjectURL(file); // Create a URL for preview\n      }\n    },\n    submitSheet() {\n      const formData = new FormData();\n      formData.append('name', this.newSheet.name);\n      formData.append('genre', this.newSheet.genre);\n      formData.append('file', this.newSheet.file);\n      formData.append('score', this.newSheet.score);\n      formData.append('price', this.newSheet.price);\n      formData.append('composer', this.newSheet.composer);\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post('/Add/', formData, {\n        xsrfCookieName: 'csrftoken',\n        xsrfHeaderName: 'X-CSRFTOKEN'\n      }).then(response => {\n        console.log(\"Sheet added:\", response.data);\n        // Handle success (e.g., showing a success message)\n      }).catch(error => {\n        console.error(\"Error adding sheet:\", error);\n        // Handle error (e.g., showing an error message)\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL0FkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFnRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlLWhvbHlzaGVldC8uL3NyYy9BcHBzL0FkZC52dWU/Y2JmZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImJnLWltZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvSG9tZVwiPiBIb21lIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0V4cGxvcmVcIj4gRXhwbG9yZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9BZGRcIj4gQWRkIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL1Byb2ZpbGVcIj4gUHJvZmlsZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cblxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPCEtLSBGb3JtIGZvciBhZGRpbmcgc2hlZXQgbXVzaWMgLS0+XG5cblxuICAgICAgICAgICAgPGgxIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweFwiPiBOZXcgU2hlZXQgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWNvbnRhaW5lclwiICBzdHlsZT1cImhlaWdodDogNzAlXCIgPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIEZpcnN0IGRpdiBmb3IgUERGIGRpc3BsYXkgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZGluZy1zaGVldHNcIiAgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4OyBcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxMHB4XCI+U2hlZXQgUERGPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERpc3BsYXkgUERGIFByZXZpZXcgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNjcm9sbC1zY29wZVwiIHN0eWxlPVwicGFkZGluZzogMjBweDsgaGVpZ2h0OiA2MDBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBAY2hhbmdlPVwiaGFuZGxlRmlsZVVwbG9hZFwiIGFjY2VwdD1cImFwcGxpY2F0aW9uL3BkZlwiIGlkPVwiZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJwZGZQcmV2aWV3VXJsXCIgY2xhc3M9XCJwZGYtcHJldmlld1wiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIDpzcmM9XCJwZGZQcmV2aWV3VXJsXCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNTUwcHhcIiA+PC9pZnJhbWU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gU2Vjb25kIGRpdiBmb3IgdGhlIGZvcm0gLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGVldC1mb3JtXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0U2hlZXRcIiBtZXRob2Q9XCJQT1NUXCIgPlxuICAgICAgICAgICAgICAgICAgPCEtLSAgICAgICAgICAgICAgeyUgY3NyZl90b2tlbiAlfS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTE+bmFtZTwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIgdi1tb2RlbD1cIm5ld1NoZWV0Lm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExPmdlbnJlPC9hMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImdlbnJlXCIgdi1tb2RlbD1cIm5ld1NoZWV0LmdlbnJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExPnByaWNlPC9hMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInByaWNlXCIgdi1tb2RlbD1cIm5ld1NoZWV0LnByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExPkNvbXBvc2VyPC9hMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInByaWNlXCIgdi1tb2RlbD1cIm5ld1NoZWV0LmNvbXBvc2VyXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdCBTaGVldDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkFkZF9wYWdlXCIsXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld1NoZWV0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZ2VucmU6ICcnLFxuICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDAsXG4gICAgICAgICAgICAgICAgY29tcG9zZXI6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGRmUHJldmlld1VybDogbnVsbFxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgIGhhbmRsZUZpbGVVcGxvYWQoZXZlbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgICAgICBpZiAoZmlsZSAmJiBmaWxlLnR5cGUgPT09IFwiYXBwbGljYXRpb24vcGRmXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1NoZWV0LmZpbGUgPSBmaWxlO1xuICAgICAgICAgICAgICAgIHRoaXMucGRmUHJldmlld1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7IC8vIENyZWF0ZSBhIFVSTCBmb3IgcHJldmlld1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRTaGVldCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLm5ld1NoZWV0Lm5hbWUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdnZW5yZScsIHRoaXMubmV3U2hlZXQuZ2VucmUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgdGhpcy5uZXdTaGVldC5maWxlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2NvcmUnLCB0aGlzLm5ld1NoZWV0LnNjb3JlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJpY2UnLCB0aGlzLm5ld1NoZWV0LnByaWNlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnY29tcG9zZXInLCB0aGlzLm5ld1NoZWV0LmNvbXBvc2VyKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL0FkZC8nLCBmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAgIHhzcmZDb29raWVOYW1lOiAnY3NyZnRva2VuJyxcbiAgICAgICAgICAgICAgICB4c3JmSGVhZGVyTmFtZTogJ1gtQ1NSRlRPS0VOJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoZWV0IGFkZGVkOlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3MgKGUuZy4sIHNob3dpbmcgYSBzdWNjZXNzIG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHNoZWV0OlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvciAoZS5nLiwgc2hvd2luZyBhbiBlcnJvciBtZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=template&id=a4e74b46&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=template&id=a4e74b46&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-a4e74b46\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", {\n  style: {\n    \"margin-top\": \"20px\"\n  }\n}, \" New Sheet \", -1 /* HOISTED */));\nconst _hoisted_9 = {\n  class: \"flex-container\",\n  style: {\n    \"height\": \"70%\"\n  }\n};\nconst _hoisted_10 = {\n  class: \"trending-sheets\",\n  style: {\n    \"margin-top\": \"20px\"\n  }\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  style: {\n    \"margin-bottom\": \"10px\"\n  }\n}, \"Sheet PDF\", -1 /* HOISTED */));\nconst _hoisted_12 = {\n  class: \"scroll-scope\",\n  style: {\n    \"padding\": \"20px\",\n    \"height\": \"600px\"\n  }\n};\nconst _hoisted_13 = {\n  key: 0,\n  class: \"pdf-preview\"\n};\nconst _hoisted_14 = [\"src\"];\nconst _hoisted_15 = {\n  class: \"sheet-form\"\n};\nconst _hoisted_16 = {\n  class: \"container\"\n};\nconst _hoisted_17 = {\n  class: \"field\"\n};\nconst _hoisted_18 = {\n  class: \"field\"\n};\nconst _hoisted_19 = {\n  class: \"field\"\n};\nconst _hoisted_20 = {\n  class: \"field\"\n};\nconst _hoisted_21 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"field\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\"\n}, \"Submit Sheet\")], -1 /* HOISTED */));\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  const _component_a1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"a1\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Home\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Form for adding sheet music \"), _hoisted_8, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" First div for PDF display \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Display PDF Preview \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"file\",\n    onChange: _cache[0] || (_cache[0] = (...args) => $options.handleFileUpload && $options.handleFileUpload(...args)),\n    accept: \"application/pdf\",\n    id: \"file\"\n  }, null, 32 /* NEED_HYDRATION */), $data.pdfPreviewUrl ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"iframe\", {\n    src: $data.pdfPreviewUrl,\n    width: \"100%\",\n    height: \"550px\"\n  }, null, 8 /* PROPS */, _hoisted_14)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Second div for the form \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.submitSheet && $options.submitSheet(...args), [\"prevent\"])),\n    method: \"POST\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"              {% csrf_token %}\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"name\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    placeholder: \"name\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.newSheet.name = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newSheet.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"genre\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    placeholder: \"genre\",\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $data.newSheet.genre = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newSheet.genre]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"price\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    placeholder: \"price\",\n    \"onUpdate:modelValue\": _cache[3] || (_cache[3] = $event => $data.newSheet.price = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newSheet.price]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Composer\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    placeholder: \"price\",\n    \"onUpdate:modelValue\": _cache[4] || (_cache[4] = $event => $data.newSheet.composer = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newSheet.composer]])]), _hoisted_21])], 32 /* NEED_HYDRATION */)])])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9BZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE0ZTc0YjQ2JnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7O0FBR0E7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQUVBOzs7O0FBU0E7QUFBQTs7QUFHQTtBQUFBOztBQUNBO0FBQUE7O0FBSUE7QUFBQTs7QUFLQTtBQUFBOztBQUtBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7O0FBaEVBO0FBSUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUtBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQU1BO0FBRUE7QUFBQTtBQUNBO0FBR0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9BZGQudnVlP2NiZmUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwhLS0gRm9ybSBmb3IgYWRkaW5nIHNoZWV0IG11c2ljIC0tPlxuXG5cbiAgICAgICAgICAgIDxoMSBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHhcIj4gTmV3IFNoZWV0IDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1jb250YWluZXJcIiAgc3R5bGU9XCJoZWlnaHQ6IDcwJVwiID5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBGaXJzdCBkaXYgZm9yIFBERiBkaXNwbGF5IC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJlbmRpbmctc2hlZXRzXCIgIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDsgXCIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlNoZWV0IFBERjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBEaXNwbGF5IFBERiBQcmV2aWV3IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzY3JvbGwtc2NvcGVcIiBzdHlsZT1cInBhZGRpbmc6IDIwcHg7IGhlaWdodDogNjAwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgQGNoYW5nZT1cImhhbmRsZUZpbGVVcGxvYWRcIiBhY2NlcHQ9XCJhcHBsaWNhdGlvbi9wZGZcIiBpZD1cImZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwicGRmUHJldmlld1VybFwiIGNsYXNzPVwicGRmLXByZXZpZXdcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZSA6c3JjPVwicGRmUHJldmlld1VybFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjU1MHB4XCIgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tIFNlY29uZCBkaXYgZm9yIHRoZSBmb3JtIC0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hlZXQtZm9ybVwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFNoZWV0XCIgbWV0aG9kPVwiUE9TVFwiID5cbiAgICAgICAgICAgICAgICAgIDwhLS0gICAgICAgICAgICAgIHslIGNzcmZfdG9rZW4gJX0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExPm5hbWU8L2ExPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIHYtbW9kZWw9XCJuZXdTaGVldC5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhMT5nZW5yZTwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJnZW5yZVwiIHYtbW9kZWw9XCJuZXdTaGVldC5nZW5yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhMT5wcmljZTwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIHYtbW9kZWw9XCJuZXdTaGVldC5wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhMT5Db21wb3NlcjwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIHYtbW9kZWw9XCJuZXdTaGVldC5jb21wb3NlclwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgU2hlZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogXCJBZGRfcGFnZVwiLFxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXdTaGVldDoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIGdlbnJlOiAnJyxcbiAgICAgICAgICAgICAgICBmaWxlOiBudWxsLFxuICAgICAgICAgICAgICAgIHNjb3JlOiAwLFxuICAgICAgICAgICAgICAgIHByaWNlOiAwLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VyOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBkZlByZXZpZXdVcmw6IG51bGxcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICBoYW5kbGVGaWxlVXBsb2FkKGV2ZW50KSB7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgaWYgKGZpbGUgJiYgZmlsZS50eXBlID09PSBcImFwcGxpY2F0aW9uL3BkZlwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdTaGVldC5maWxlID0gZmlsZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBkZlByZXZpZXdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpOyAvLyBDcmVhdGUgYSBVUkwgZm9yIHByZXZpZXdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3VibWl0U2hlZXQoKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCduYW1lJywgdGhpcy5uZXdTaGVldC5uYW1lKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZ2VucmUnLCB0aGlzLm5ld1NoZWV0LmdlbnJlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIHRoaXMubmV3U2hlZXQuZmlsZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Njb3JlJywgdGhpcy5uZXdTaGVldC5zY29yZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ByaWNlJywgdGhpcy5uZXdTaGVldC5wcmljZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2NvbXBvc2VyJywgdGhpcy5uZXdTaGVldC5jb21wb3Nlcik7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9BZGQvJywgZm9ybURhdGEsIHtcbiAgICAgICAgICAgICAgICB4c3JmQ29va2llTmFtZTogJ2NzcmZ0b2tlbicsXG4gICAgICAgICAgICAgICAgeHNyZkhlYWRlck5hbWU6ICdYLUNTUkZUT0tFTicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJTaGVldCBhZGRlZDpcIiwgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzdWNjZXNzIChlLmcuLCBzaG93aW5nIGEgc3VjY2VzcyBtZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGFkZGluZyBzaGVldDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgZXJyb3IgKGUuZy4sIHNob3dpbmcgYW4gZXJyb3IgbWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbjwvc2NyaXB0PlxuXG5cbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vYXNzZXRzL2Nzcy9ob21lX3BhZ2UuY3NzXCI+XG5cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=template&id=a4e74b46&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "d7e7316824a1e325"; }
/******/ }();
/******/ 
/******/ }
);