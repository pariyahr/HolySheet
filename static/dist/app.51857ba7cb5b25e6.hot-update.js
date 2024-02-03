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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ \"./node_modules/core-js/modules/es.array.push.js\");\n/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ \"./src/router.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Apps/Navbar.vue */ \"./src/Apps/Navbar.vue\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Explore_Page\",\n  components: {\n    Navbar: _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  },\n  data() {\n    return {\n      components: [],\n      visib2: \"\",\n      showSearch: false,\n      searchQuery: '',\n      apiURL: '/api/concerto/',\n      trendingSheets: []\n      // trendingSheets: [\n      //   {\n      //     id: 1,\n      //     title: \"Moonlight Sonata\",\n      //     composer: \"Ludwig van Beethoven\",\n      //     genre: \"Classical\",\n      //     imagePath: \"path/to/moonlight-sonata-image.jpg\", // Replace with actual image path\n      //     rating: 4.5\n      //   },\n      //   {\n      //     id: 2,\n      //     title: \"The Four Seasons\",\n      //     composer: \"Antonio Vivaldi\",\n      //     genre: \"Baroque\",\n      //     imagePath: \"path/to/four-seasons-image.jpg\", // Replace with actual image path\n      //     rating: 3.5\n      //   },\n      //   {\n      //     id: 3,\n      //     title: \"Clair de Lune\",\n      //     composer: \"Claude Debussy\",\n      //     genre: \"Impressionist\",\n      //     imagePath: \"path/to/clair-de-lune-image.jpg\", // Replace with actual image path\n      //     rating: 5\n      //   },\n      //   {\n      //     id: 4,\n      //     title: \"Rhapsody in Blue\",\n      //     composer: \"George Gershwin\",\n      //     genre: \"Jazz\",\n      //     imagePath: \"path/to/rhapsody-in-blue-image.jpg\", // Replace with actual image path\n      //     rating: 4.4\n      //   }\n      // ],\n    };\n  },\n  computed: {\n    filteredSheets() {\n      // Filter sheets only if there's a search query\n      if (this.searchQuery) {\n        return this.trendingSheets.filter(sheet => sheet.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||\n        //sheet.composer.toLowerCase().includes(this.searchQuery.toLowerCase()) ||\n        sheet.genre.toLowerCase().includes(this.searchQuery.toLowerCase()));\n      }\n      return this.trendingSheets; // Return all sheets if no search query\n    }\n  },\n  methods: {\n    async fetchComponents() {\n      try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get('/components/');\n        this.components = response.data;\n        this.visib2 = this.components[0].is_seller;\n      } catch (error) {\n        console.error('Error fetching components:', error);\n      }\n    },\n    toggleSearchBar() {\n      this.showSearch = !this.showSearch;\n    },\n    fetchTrendingSheets() {\n      axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(this.apiURL).then(response => {\n        this.trendingSheets = response.data;\n      }).catch(error => {\n        console.error(\"There was an error fetching the sheets:\", error);\n      });\n    },\n    searchSheets() {\n      this.showSearch = !this.showSearch;\n    },\n    goToSheetPage(sheetId) {\n      _router__WEBPACK_IMPORTED_MODULE_1__[\"default\"].push({\n        name: 'SheetDetail',\n        params: {\n          id: sheetId\n        }\n      });\n    }\n  },\n  mounted() {\n    this.fetchTrendingSheets();\n    this.fetchComponents();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBZUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0FwcHMvU2V0dGluZ3MudnVlP2Y4YTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYmctaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQxXCI+XG4gICAgICA8TmF2YmFyIDppc1NlbGxlcj1cInZpc2liMlwiPjwvTmF2YmFyPlxuXG5cbiAgICAgIDwhLS0gVHJlbmRpbmcgU2hlZXRzIFNlY3Rpb24gLS0+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5cbmltcG9ydCByb3V0ZXIgZnJvbSBcIkAvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL0FwcHMvTmF2YmFyLnZ1ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRXhwbG9yZV9QYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgIE5hdmJhcixcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW10sXG4gICAgICB2aXNpYjI6IFwiXCIsXG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgICAgYXBpVVJMOiAnL2FwaS9jb25jZXJ0by8nLFxuICAgICAgICB0cmVuZGluZ1NoZWV0cyA6W11cbiAgICAgIC8vIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMSxcbiAgICAgIC8vICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9tb29ubGlnaHQtc29uYXRhLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDQuNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDIsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiVGhlIEZvdXIgU2Vhc29uc1wiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkFudG9uaW8gVml2YWxkaVwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkJhcm9xdWVcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9mb3VyLXNlYXNvbnMtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogMy41XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMyxcbiAgICAgIC8vICAgICB0aXRsZTogXCJDbGFpciBkZSBMdW5lXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiQ2xhdWRlIERlYnVzc3lcIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJJbXByZXNzaW9uaXN0XCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vY2xhaXItZGUtbHVuZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA1XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogNCxcbiAgICAgIC8vICAgICB0aXRsZTogXCJSaGFwc29keSBpbiBCbHVlXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiR2VvcmdlIEdlcnNod2luXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiSmF6elwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL3JoYXBzb2R5LWluLWJsdWUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNC40XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIF0sXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBmaWx0ZXJlZFNoZWV0cygpIHtcbiAgICAgIC8vIEZpbHRlciBzaGVldHMgb25seSBpZiB0aGVyZSdzIGEgc2VhcmNoIHF1ZXJ5XG4gICAgICBpZiAodGhpcy5zZWFyY2hRdWVyeSkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmVuZGluZ1NoZWV0cy5maWx0ZXIoc2hlZXQgPT5cbiAgICAgICAgICBzaGVldC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgIC8vc2hlZXQuY29tcG9zZXIudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgc2hlZXQuZ2VucmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmVuZGluZ1NoZWV0czsgLy8gUmV0dXJuIGFsbCBzaGVldHMgaWYgbm8gc2VhcmNoIHF1ZXJ5XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnRzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2NvbXBvbmVudHMvJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liMiA9IHRoaXMuY29tcG9uZW50c1swXS5pc19zZWxsZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvbXBvbmVudHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICB0b2dnbGVTZWFyY2hCYXIoKSB7XG4gICAgICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XG4gICAgICB9LFxuXG4gICAgICBmZXRjaFRyZW5kaW5nU2hlZXRzKCkge1xuICAgICAgICBheGlvcy5nZXQodGhpcy5hcGlVUkwpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgdGhpcy50cmVuZGluZ1NoZWV0cyA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIHNoZWV0czpcIiwgZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIHNlYXJjaFNoZWV0cygpe1xuICAgICAgICAgIHRoaXMuc2hvd1NlYXJjaCA9ICF0aGlzLnNob3dTZWFyY2g7XG4gICAgICB9LFxuICAgICAgZ29Ub1NoZWV0UGFnZShzaGVldElkKSB7XG4gICAgICAgIHJvdXRlci5wdXNoKHsgbmFtZTogJ1NoZWV0RGV0YWlsJywgcGFyYW1zOiB7IGlkOiBzaGVldElkIH0gfSk7XG4gICAgICB9LFxuXG4gIH0sXG4gIG1vdW50ZWQoKSB7XG4gICAgdGhpcy5mZXRjaFRyZW5kaW5nU2hlZXRzKCk7XG4gICAgIHRoaXMuZmV0Y2hDb21wb25lbnRzKCk7XG4gIH1cbn07XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZCBzcmM9XCIuLi9hc3NldHMvY3NzL2hvbWVfcGFnZS5jc3NcIj5cbi8qIFVzZSB0aGUgcHJvdmlkZWQgQ1NTIHN0eWxlcyAqL1xuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5c986417\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Navbar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar, {\n    isSeller: $data.visib2\n  }, null, 8 /* PROPS */, [\"isSeller\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Trending Sheets Section \")])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM5ODY0MTcmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7OztBQURBO0FBRUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XG5cblxuICAgICAgPCEtLSBUcmVuZGluZyBTaGVldHMgU2VjdGlvbiAtLT5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHJvdXRlciBmcm9tIFwiQC9yb3V0ZXJcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvQXBwcy9OYXZiYXIudnVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJFeHBsb3JlX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgICAgTmF2YmFyLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRzOiBbXSxcbiAgICAgIHZpc2liMjogXCJcIixcbiAgICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgICBhcGlVUkw6ICcvYXBpL2NvbmNlcnRvLycsXG4gICAgICAgIHRyZW5kaW5nU2hlZXRzIDpbXVxuICAgICAgLy8gdHJlbmRpbmdTaGVldHM6IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiAxLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIk1vb25saWdodCBTb25hdGFcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJMdWR3aWcgdmFuIEJlZXRob3ZlblwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkNsYXNzaWNhbFwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL21vb25saWdodC1zb25hdGEtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNC41XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMixcbiAgICAgIC8vICAgICB0aXRsZTogXCJUaGUgRm91ciBTZWFzb25zXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiQW50b25pbyBWaXZhbGRpXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiQmFyb3F1ZVwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL2ZvdXItc2Vhc29ucy1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiAzLjVcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiAzLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIkNsYWlyIGRlIEx1bmVcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJDbGF1ZGUgRGVidXNzeVwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkltcHJlc3Npb25pc3RcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9jbGFpci1kZS1sdW5lLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDVcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiA0LFxuICAgICAgLy8gICAgIHRpdGxlOiBcIlJoYXBzb2R5IGluIEJsdWVcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJHZW9yZ2UgR2Vyc2h3aW5cIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJKYXp6XCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vcmhhcHNvZHktaW4tYmx1ZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA0LjRcbiAgICAgIC8vICAgfVxuICAgICAgLy8gXSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGZpbHRlcmVkU2hlZXRzKCkge1xuICAgICAgLy8gRmlsdGVyIHNoZWV0cyBvbmx5IGlmIHRoZXJlJ3MgYSBzZWFyY2ggcXVlcnlcbiAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRyZW5kaW5nU2hlZXRzLmZpbHRlcihzaGVldCA9PlxuICAgICAgICAgIHNoZWV0Lm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFF1ZXJ5LnRvTG93ZXJDYXNlKCkpIHx8XG4gICAgICAgICAgLy9zaGVldC5jb21wb3Nlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICBzaGVldC5nZW5yZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyZW5kaW5nU2hlZXRzOyAvLyBSZXR1cm4gYWxsIHNoZWV0cyBpZiBubyBzZWFyY2ggcXVlcnlcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudHMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY29tcG9uZW50cy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWIyID0gdGhpcy5jb21wb25lbnRzWzBdLmlzX3NlbGxlcjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29tcG9uZW50czonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgIHRvZ2dsZVNlYXJjaEJhcigpIHtcbiAgICAgICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgICAgIH0sXG5cbiAgICAgIGZldGNoVHJlbmRpbmdTaGVldHMoKSB7XG4gICAgICAgIGF4aW9zLmdldCh0aGlzLmFwaVVSTClcbiAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRyZW5kaW5nU2hlZXRzID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgc2hlZXRzOlwiLCBlcnJvcik7XG4gICAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgc2VhcmNoU2hlZXRzKCl7XG4gICAgICAgICAgdGhpcy5zaG93U2VhcmNoID0gIXRoaXMuc2hvd1NlYXJjaDtcbiAgICAgIH0sXG4gICAgICBnb1RvU2hlZXRQYWdlKHNoZWV0SWQpIHtcbiAgICAgICAgcm91dGVyLnB1c2goeyBuYW1lOiAnU2hlZXREZXRhaWwnLCBwYXJhbXM6IHsgaWQ6IHNoZWV0SWQgfSB9KTtcbiAgICAgIH0sXG5cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoVHJlbmRpbmdTaGVldHMoKTtcbiAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "612ed8ddb80761a9"; }
/******/ }();
/******/ 
/******/ }
);