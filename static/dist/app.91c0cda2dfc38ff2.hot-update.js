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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Add_page\",\n  components: {\n    SheetDisplay\n  },\n  data() {\n    return {\n      newSheet: {\n        name: '',\n        genre: '',\n        file: null,\n        score: 0,\n        price: 0\n      }\n    };\n  },\n  methods: {\n    handleFileUpload(event) {\n      this.newSheet.file = event.target.files[0];\n    },\n    submitSheet() {\n      const formData = new FormData();\n      formData.append('name', this.newSheet.name);\n      formData.append('genre', this.newSheet.genre);\n      formData.append('file', this.newSheet.file);\n      formData.append('score', this.newSheet.score);\n      formData.append('price', this.newSheet.price);\n      axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post('/Add/', formData, {\n        xsrfCookieName: 'csrftoken',\n        xsrfHeaderName: 'X-CSRFTOKEN'\n      }).then(response => {\n        console.log(\"Sheet added:\", response.data);\n        // Handle success (e.g., showing a success message)\n      }).catch(error => {\n        console.error(\"Error adding sheet:\", error);\n        // Handle error (e.g., showing an error message)\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL0FkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMiLCJtYXBwaW5ncyI6Ijs7QUFvRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9BZGQudnVlP2NiZmUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhclwiPlxuICAgICAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0hvbWVcIj4gSG9tZSA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9FeHBsb3JlXCI+IEV4cGxvcmUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvQWRkXCI+IEFkZCA8L1JvdXRlckxpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Qcm9maWxlXCI+IFByb2ZpbGUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwhLS0gRm9ybSBmb3IgYWRkaW5nIHNoZWV0IG11c2ljIC0tPlxuXG5cbiAgICAgICAgICAgIDxoZWFkZXI+IE5ldyBTaGVldCA8L2hlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmVuZGluZy1zaGVldHNcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7IHdpZHRoOiAzMCU7XCI+XG4gICAgICAgICAgICAgICAgPGgyIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMTBweFwiPlNoZWV0IFBERjwvaDI+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0U2hlZXRcIiBtZXRob2Q9XCJQT1NUXCIgPlxuICAgICAgPCEtLSAgICAgICAgICAgICAgeyUgY3NyZl90b2tlbiAlfS0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YTE+bmFtZTwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJuYW1lXCIgdi1tb2RlbD1cIm5ld1NoZWV0Lm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExPmdlbnJlPC9hMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cImdlbnJlXCIgdi1tb2RlbD1cIm5ld1NoZWV0LmdlbnJlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExPnByaWNlPC9hMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cInByaWNlXCIgdi1tb2RlbD1cIm5ld1NoZWV0LnByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExIGZvcj1cImZpbGVcIj5GaWxlPC9hMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVcIiBAY2hhbmdlPVwiaGFuZGxlRmlsZVVwbG9hZFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQgU2hlZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiQWRkX3BhZ2VcIixcbiAgICBjb21wb25lbnRzOiB7U2hlZXREaXNwbGF5fSxcbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3U2hlZXQ6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICBnZW5yZTogJycsXG4gICAgICAgICAgICAgICAgZmlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBzY29yZTogMCxcbiAgICAgICAgICAgICAgICBwcmljZTogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYW5kbGVGaWxlVXBsb2FkKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLm5ld1NoZWV0LmZpbGUgPSBldmVudC50YXJnZXQuZmlsZXNbMF07XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdFNoZWV0KCkge1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnbmFtZScsIHRoaXMubmV3U2hlZXQubmFtZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2dlbnJlJywgdGhpcy5uZXdTaGVldC5nZW5yZSk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCB0aGlzLm5ld1NoZWV0LmZpbGUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdzY29yZScsIHRoaXMubmV3U2hlZXQuc2NvcmUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcmljZScsIHRoaXMubmV3U2hlZXQucHJpY2UpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KCcvQWRkLycsIGZvcm1EYXRhLCB7XG4gICAgICAgICAgICAgICAgeHNyZkNvb2tpZU5hbWU6ICdjc3JmdG9rZW4nLFxuICAgICAgICAgICAgICAgIHhzcmZIZWFkZXJOYW1lOiAnWC1DU1JGVE9LRU4nLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU2hlZXQgYWRkZWQ6XCIsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgc3VjY2VzcyAoZS5nLiwgc2hvd2luZyBhIHN1Y2Nlc3MgbWVzc2FnZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhZGRpbmcgc2hlZXQ6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGVycm9yIChlLmcuLCBzaG93aW5nIGFuIGVycm9yIG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG48L3NjcmlwdD5cblxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=template&id=a4e74b46&scoped=true":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=template&id=a4e74b46&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-a4e74b46\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content\"\n};\nconst _hoisted_3 = {\n  class: \"navbar\"\n};\nconst _hoisted_4 = {\n  class: \"active\"\n};\nconst _hoisted_5 = {\n  class: \"active\"\n};\nconst _hoisted_6 = {\n  class: \"active\"\n};\nconst _hoisted_7 = {\n  class: \"active\"\n};\nconst _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"header\", null, \" New Sheet \", -1 /* HOISTED */));\nconst _hoisted_9 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"trending-sheets\",\n  style: {\n    \"margin-top\": \"20px\",\n    \"width\": \"30%\"\n  }\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h2\", {\n  style: {\n    \"margin-bottom\": \"10px\"\n  }\n}, \"Sheet PDF\")], -1 /* HOISTED */));\nconst _hoisted_10 = {\n  class: \"container\"\n};\nconst _hoisted_11 = {\n  class: \"field\"\n};\nconst _hoisted_12 = {\n  class: \"field\"\n};\nconst _hoisted_13 = {\n  class: \"field\"\n};\nconst _hoisted_14 = {\n  class: \"field\"\n};\nconst _hoisted_15 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", {\n  class: \"field\"\n}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"button\", {\n  type: \"submit\"\n}, \"Submit Sheet\")], -1 /* HOISTED */));\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_RouterLink = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"RouterLink\");\n  const _component_a1 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"a1\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"ul\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Home\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Home \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Explore\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Explore \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Add\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Add \")]),\n    _: 1 /* STABLE */\n  })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"li\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_RouterLink, {\n    to: \"/Profile\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Profile \")]),\n    _: 1 /* STABLE */\n  })])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Form for adding sheet music \"), _hoisted_8, _hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"form\", {\n    onSubmit: _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)((...args) => $options.submitSheet && $options.submitSheet(...args), [\"prevent\"])),\n    method: \"POST\"\n  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\"              {% csrf_token %}\"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"name\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    placeholder: \"name\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.newSheet.name = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newSheet.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"genre\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    placeholder: \"genre\",\n    \"onUpdate:modelValue\": _cache[1] || (_cache[1] = $event => $data.newSheet.genre = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newSheet.genre]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, null, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"price\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"text\",\n    placeholder: \"price\",\n    \"onUpdate:modelValue\": _cache[2] || (_cache[2] = $event => $data.newSheet.price = $event)\n  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.newSheet.price]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_a1, {\n    for: \"file\"\n  }, {\n    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\"File\")]),\n    _: 1 /* STABLE */\n  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"file\",\n    id: \"file\",\n    onChange: _cache[3] || (_cache[3] = (...args) => $options.handleFileUpload && $options.handleFileUpload(...args))\n  }, null, 32 /* NEED_HYDRATION */)]), _hoisted_15])], 32 /* NEED_HYDRATION */)])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9BZGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE0ZTc0YjQ2JnNjb3BlZD10cnVlIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBQTs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFHQTtBQUFBOztBQUdBO0FBQUE7O0FBR0E7QUFBQTtBQVNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFRQTtBQUFBOztBQUNBO0FBQUE7O0FBSUE7QUFBQTs7QUFLQTtBQUFBOztBQUtBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7O0FBcERBO0FBSUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFBQTtBQUFBOztBQUtBO0FBV0E7QUFBQTtBQUNBO0FBR0E7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0FwcHMvQWRkLnZ1ZT9jYmZlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiYmctaW1nXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgICA8bGk+PGRpdiBjbGFzcz1cImFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8Um91dGVyTGluayB0bz1cIi9Ib21lXCI+IEhvbWUgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvRXhwbG9yZVwiPiBFeHBsb3JlIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaT48ZGl2IGNsYXNzPVwiYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZXJMaW5rIHRvPVwiL0FkZFwiPiBBZGQgPC9Sb3V0ZXJMaW5rPlxuICAgICAgICAgICAgICAgIDwvZGl2PjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPjxkaXYgY2xhc3M9XCJhY3RpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlckxpbmsgdG89XCIvUHJvZmlsZVwiPiBQcm9maWxlIDwvUm91dGVyTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj48L2xpPlxuXG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8IS0tIEZvcm0gZm9yIGFkZGluZyBzaGVldCBtdXNpYyAtLT5cblxuXG4gICAgICAgICAgICA8aGVhZGVyPiBOZXcgU2hlZXQgPC9oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJlbmRpbmctc2hlZXRzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4OyB3aWR0aDogMzAlO1wiPlxuICAgICAgICAgICAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDEwcHhcIj5TaGVldCBQREY8L2gyPlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFNoZWV0XCIgbWV0aG9kPVwiUE9TVFwiID5cbiAgICAgIDwhLS0gICAgICAgICAgICAgIHslIGNzcmZfdG9rZW4gJX0tLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGExPm5hbWU8L2ExPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIHYtbW9kZWw9XCJuZXdTaGVldC5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhMT5nZW5yZTwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJnZW5yZVwiIHYtbW9kZWw9XCJuZXdTaGVldC5nZW5yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhMT5wcmljZTwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJwcmljZVwiIHYtbW9kZWw9XCJuZXdTaGVldC5wcmljZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhMSBmb3I9XCJmaWxlXCI+RmlsZTwvYTE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlXCIgQGNoYW5nZT1cImhhbmRsZUZpbGVVcGxvYWRcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0IFNoZWV0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG5cbjxzY3JpcHQ+XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcIkFkZF9wYWdlXCIsXG4gICAgY29tcG9uZW50czoge1NoZWV0RGlzcGxheX0sXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld1NoZWV0OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZ2VucmU6ICcnLFxuICAgICAgICAgICAgICAgIGZpbGU6IG51bGwsXG4gICAgICAgICAgICAgICAgc2NvcmU6IDAsXG4gICAgICAgICAgICAgICAgcHJpY2U6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGFuZGxlRmlsZVVwbG9hZChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5uZXdTaGVldC5maWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICB9LFxuICAgICAgICBzdWJtaXRTaGVldCgpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ25hbWUnLCB0aGlzLm5ld1NoZWV0Lm5hbWUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdnZW5yZScsIHRoaXMubmV3U2hlZXQuZ2VucmUpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgdGhpcy5uZXdTaGVldC5maWxlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnc2NvcmUnLCB0aGlzLm5ld1NoZWV0LnNjb3JlKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgncHJpY2UnLCB0aGlzLm5ld1NoZWV0LnByaWNlKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL0FkZC8nLCBmb3JtRGF0YSwge1xuICAgICAgICAgICAgICAgIHhzcmZDb29raWVOYW1lOiAnY3NyZnRva2VuJyxcbiAgICAgICAgICAgICAgICB4c3JmSGVhZGVyTmFtZTogJ1gtQ1NSRlRPS0VOJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNoZWV0IGFkZGVkOlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIHN1Y2Nlc3MgKGUuZy4sIHNob3dpbmcgYSBzdWNjZXNzIG1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYWRkaW5nIHNoZWV0OlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBlcnJvciAoZS5nLiwgc2hvd2luZyBhbiBlcnJvciBtZXNzYWdlKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuPC9zY3JpcHQ+XG5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cblxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Add.vue?vue&type=template&id=a4e74b46&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "82609094faed3cdd"; }
/******/ }();
/******/ 
/******/ }
);