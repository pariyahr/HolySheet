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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Profile.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Profile.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Profile_page\",\n  data() {\n    return {\n      visib: \"\",\n      components: []\n    };\n  },\n  mounted() {\n    this.fetchComponents();\n  },\n  methods: {\n    vis() {\n      this.visib = \"n\";\n    },\n    async fetchComponents() {\n      try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get('/api/components/');\n        this.components = response.data;\n      } catch (error) {\n        console.error('Error fetching components:', error);\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1Byb2ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7O0FBcUZBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0FwcHMvUHJvZmlsZS52dWU/MDY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjwhRE9DVFlQRSBodG1sPlxyXG48aHRtbCBsYW5nPVwiZW5cIj5cclxuXHJcbjxoZWFkPlxyXG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICA8dGl0bGU+UHJvZmlsZTwvdGl0bGU+XHJcbjwvaGVhZD5cclxuPGRpdiBjbGFzcz1cImJnLWltZ1wiIHYtZm9yPVwiY29tcG9uZW50IGluIGNvbXBvbmVudHNcIiA6a2V5PVwiY29tcG9uZW50LmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvSG9tZVwiPiBIb21lIDwvUm91dGVyTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0V4cGxvcmVcIj4gRXhwbG9yZSA8L1JvdXRlckxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9BZGRcIj4gQWRkIDwvUm91dGVyTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL1Byb2ZpbGVcIj4gUHJvZmlsZSA8L1JvdXRlckxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9NZW51XCI+IFNldHRpbmdzIDwvUm91dGVyTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL01lbnVcIj4gU2F2ZWQgPC9Sb3V0ZXJMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJwcm9maWxlLXBpY3R1cmVcIiBzcmM9XCIuLi9hc3NldHMvcHJvZmlsZS1pY29uLmpwZ1wiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbm5lcl9jb250ZW50XCIgc3R5bGUgPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBvc3RzXCIgc3R5bGU9XCJsaXN0LXN0eWxlOiBub25lO1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbnVtYmVyXCI+NTAwPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPlBvc3RzPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJmb2xsb3dlcnNcIiBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1udW1iZXJcIj57e2NvbXBvbmVudC5mb2xsb3dlcnN9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj5Gb2xsb3dlcnM8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImZvbGxvd2luZ3NcIiBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1udW1iZXJcIj57e2NvbXBvbmVudC5mb2xsb3dpbmdzfX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+Rm9sbG93aW5nczwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWRldGFpbHNcIj5cclxuICAgICAgIDxoMSBjbGFzcz1cInVzZXJuYW1lXCI+e3tjb21wb25lbnQudXNlcm5hbWV9fTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAzMSU7IGxlZnQ6IDQ2JTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiBzdHlsZT1cIndpZHRoOiAxNTBweDtcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwidmlzXCIgdHlwZT1cInN1Ym1pdFwiPmVkaXQgcHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJ2aXNpYlwiIGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNDAlOyBsZWZ0OiA0MS41JTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGExPlVzZXJuYW1lPC9hMT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8YTE+UGFzc3dvcmQ8L2ExPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxhPlByb2ZpbGUgUGljdHVyZTwvYT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJteWZpbGVcIiBuYW1lPVwibXlmaWxlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPC9odG1sPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiUHJvZmlsZV9wYWdlXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpc2liOiBcIlwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFtdLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICB2aXMoKXtcclxuICAgICAgICAgICAgdGhpcy52aXNpYiA9IFwiblwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZmV0Y2hDb21wb25lbnRzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY29tcG9uZW50cy8nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb21wb25lbnRzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxyXG5cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Profile.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Profile.vue?vue&type=template&id=6f953565&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Profile.vue?vue&type=template&id=6f953565&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n/* harmony import */ var _assets_profile_icon_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/profile-icon.jpg */ \"./src/assets/profile-icon.jpg\");\n\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-6f953565\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  lang: \"en\"\n};\nconst _hoisted_2 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"head\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"meta\", {\n  charset: \"UTF-8\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"title\", null, \"Profile\")], -1 /* HOISTED */));\nconst _hoisted_3 = {\n  class: \"content\"\n};\nconst _hoisted_4 = {\n  class: \"navbar\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = {\n  class: \"active\"\n};\nconst _hoisted_9 = {\n  class: \"active\"\n};\nconst _hoisted_10 = {\n  class: \"active\"\n};\nconst _hoisted_11 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"profile-header\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"img\", {\n  class: \"profile-picture\",\n  src: _assets_profile_icon_jpg__WEBPACK_IMPORTED_MODULE_1__,\n  alt: \"Profile Picture\"\n})], -1 /* HOISTED */));\nconst _hoisted_12 = {\n  class: \"inner_content\",\n  style: {\n    \"margin-bottom\": \"10px\"\n  }\n};\nconst _hoisted_13 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", {\n  class: \"posts\",\n  style: {\n    \"list-style\": \"none\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"stat-number\"\n}, \"500\"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"stat-label\"\n}, \"Posts\")], -1 /* HOISTED */));\nconst _hoisted_14 = {\n  class: \"followers\",\n  style: {\n    \"list-style\": \"none\"\n  }\n};\nconst _hoisted_15 = {\n  class: \"stat-number\"\n};\nconst _hoisted_16 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"stat-label\"\n}, \"Followers\", -1 /* HOISTED */));\nconst _hoisted_17 = {\n  class: \"followings\",\n  style: {\n    \"list-style\": \"none\"\n  }\n};\nconst _hoisted_18 = {\n  class: \"stat-number\"\n};\nconst _hoisted_19 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"stat-label\"\n}, \"Followings\", -1 /* HOISTED */));\nconst _hoisted_20 = {\n  class: \"profile-details\"\n};\nconst _hoisted_21 = {\n  class: \"username\"\n};\nconst _hoisted_22 = {\n  class: \"container\",\n  style: {\n    \"position\": \"absolute\",\n    \"top\": \"31%\",\n    \"left\": \"46%\"\n  }\n};\nconst _hoisted_23 = {\n  class: \"field\",\n  style: {\n    \"width\": \"150px\"\n  }\n};\nconst _hoisted_24 = {\n  key: 0,\n  class: \"container\",\n  style: {\n    \"position\": \"absolute\",\n    \"top\": \"40%\",\n    \"left\": \"41.5%\"\n  }\n};\nconst _hoisted_25 = {\n  class: \"field\"\n};\nconst _hoisted_26 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  type: \"text\",\n  placeholder: \"Enter Username\",\n  name: \"username\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_27 = {\n  class: \"field\"\n};\nconst _hoisted_28 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  type: \"password\",\n  placeholder: \"Enter Password\",\n  name: \"password\"\n}, null, -1 /* HOISTED */));\nconst _hoisted_29 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"field\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"a\", null, \"Profile Picture\")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n  type: \"file\",\n  id: \"myfile\",\n  name: \"myfile\"\n})], -1 /* HOISTED */));\nconst _hoisted_30 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"field\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\"\n}, \"Submit\")], -1 /* HOISTED */));\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  const _component_a1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"a1\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"DOCTYPE html\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"html\", _hoisted_1, [_hoisted_2, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.components, component => {\n    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", {\n      class: \"bg-img\",\n      key: component.id\n    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n      to: \"/Home\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n      _: 1 /* STABLE */\n    })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n      to: \"/Explore\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n      _: 1 /* STABLE */\n    })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n      to: \"/Add\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n      _: 1 /* STABLE */\n    })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n      to: \"/Profile\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n      _: 1 /* STABLE */\n    })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n      to: \"/Menu\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Settings \")]),\n      _: 1 /* STABLE */\n    })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n      to: \"/Menu\"\n    }, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Saved \")]),\n      _: 1 /* STABLE */\n    })])])]), _hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(component.followers), 1 /* TEXT */), _hoisted_16]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(component.followings), 1 /* TEXT */), _hoisted_19])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(component.username), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n      onClick: _cache[0] || (_cache[0] = (...args) => $options.vis && $options.vis(...args)),\n      type: \"submit\"\n    }, \"edit profile\")])]), $data.visib ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Username\")]),\n      _: 1 /* STABLE */\n    }), _hoisted_26]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_27, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"Password\")]),\n      _: 1 /* STABLE */\n    }), _hoisted_28]), _hoisted_29, _hoisted_30])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"v-if\", true)])]);\n  }), 128 /* KEYED_FRAGMENT */))])], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9Qcm9maWxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02Zjk1MzU2NSZzY29wZWQ9dHJ1ZSIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBZ0NBOzs7QUE5QkE7QUFBQTtBQUVBO0FBQ0E7QUFBQTs7QUFJQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7O0FBR0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOztBQUdBO0FBQUE7O0FBQ0E7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7OztBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7OztBQXhFQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUlBO0FBc0JBO0FBQUE7QUFBQTtBQUtBOztBQUNBO0FBR0E7O0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0FwcHMvUHJvZmlsZS52dWU/MDY1YiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjwhRE9DVFlQRSBodG1sPlxyXG48aHRtbCBsYW5nPVwiZW5cIj5cclxuXHJcbjxoZWFkPlxyXG4gICAgPG1ldGEgY2hhcnNldD1cIlVURi04XCI+XHJcbiAgICA8dGl0bGU+UHJvZmlsZTwvdGl0bGU+XHJcbjwvaGVhZD5cclxuPGRpdiBjbGFzcz1cImJnLWltZ1wiIHYtZm9yPVwiY29tcG9uZW50IGluIGNvbXBvbmVudHNcIiA6a2V5PVwiY29tcG9uZW50LmlkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhclwiPlxyXG4gICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvSG9tZVwiPiBIb21lIDwvUm91dGVyTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0V4cGxvcmVcIj4gRXhwbG9yZSA8L1JvdXRlckxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9BZGRcIj4gQWRkIDwvUm91dGVyTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL1Byb2ZpbGVcIj4gUHJvZmlsZSA8L1JvdXRlckxpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PjwvbGk+XHJcbiAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9NZW51XCI+IFNldHRpbmdzIDwvUm91dGVyTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+PC9saT5cclxuICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL01lbnVcIj4gU2F2ZWQgPC9Sb3V0ZXJMaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInByb2ZpbGUtaGVhZGVyXCI+XHJcbiAgICAgIDxpbWcgY2xhc3M9XCJwcm9maWxlLXBpY3R1cmVcIiBzcmM9XCIuLi9hc3NldHMvcHJvZmlsZS1pY29uLmpwZ1wiIGFsdD1cIlByb2ZpbGUgUGljdHVyZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbm5lcl9jb250ZW50XCIgc3R5bGUgPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBvc3RzXCIgc3R5bGU9XCJsaXN0LXN0eWxlOiBub25lO1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbnVtYmVyXCI+NTAwPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1sYWJlbFwiPlBvc3RzPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGkgY2xhc3M9XCJmb2xsb3dlcnNcIiBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1udW1iZXJcIj57e2NvbXBvbmVudC5mb2xsb3dlcnN9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtbGFiZWxcIj5Gb2xsb3dlcnM8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cImZvbGxvd2luZ3NcIiBzdHlsZT1cImxpc3Qtc3R5bGU6IG5vbmU7XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1udW1iZXJcIj57e2NvbXBvbmVudC5mb2xsb3dpbmdzfX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0LWxhYmVsXCI+Rm9sbG93aW5nczwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwcm9maWxlLWRldGFpbHNcIj5cclxuICAgICAgIDxoMSBjbGFzcz1cInVzZXJuYW1lXCI+e3tjb21wb25lbnQudXNlcm5hbWV9fTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAzMSU7IGxlZnQ6IDQ2JTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIiBzdHlsZT1cIndpZHRoOiAxNTBweDtcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LW9uOmNsaWNrPVwidmlzXCIgdHlwZT1cInN1Ym1pdFwiPmVkaXQgcHJvZmlsZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJ2aXNpYlwiIGNsYXNzPVwiY29udGFpbmVyXCIgc3R5bGU9XCJwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogNDAlOyBsZWZ0OiA0MS41JTtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cclxuICAgICAgICAgICAgPGExPlVzZXJuYW1lPC9hMT5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBVc2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxyXG4gICAgICAgICAgICA8YTE+UGFzc3dvcmQ8L2ExPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBQYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxhPlByb2ZpbGUgUGljdHVyZTwvYT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJteWZpbGVcIiBuYW1lPVwibXlmaWxlXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG5cclxuPC9kaXY+XHJcblxyXG48L2Rpdj5cclxuPC9odG1sPlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiUHJvZmlsZV9wYWdlXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHZpc2liOiBcIlwiLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFtdLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgICB2aXMoKXtcclxuICAgICAgICAgICAgdGhpcy52aXNpYiA9IFwiblwiO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgZmV0Y2hDb21wb25lbnRzKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY29tcG9uZW50cy8nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb21wb25lbnRzOicsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxyXG5cclxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Profile.vue?vue&type=template&id=6f953565&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "833de0cfc2f1a9f9"; }
/******/ }();
/******/ 
/******/ }
);