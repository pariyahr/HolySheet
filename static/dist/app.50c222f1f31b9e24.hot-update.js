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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Apps/Navbar.vue */ \"./src/Apps/Navbar.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Explore_Page\",\n  components: {\n    Navbar: _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      components: [],\n      visib2: \"\",\n      showSearch: false,\n      searchQuery: '',\n      apiURL: '/api/concerto/',\n      trendingSheets: []\n      // trendingSheets: [\n      //   {\n      //     id: 1,\n      //     title: \"Moonlight Sonata\",\n      //     composer: \"Ludwig van Beethoven\",\n      //     genre: \"Classical\",\n      //     imagePath: \"path/to/moonlight-sonata-image.jpg\", // Replace with actual image path\n      //     rating: 4.5\n      //   },\n      //   {\n      //     id: 2,\n      //     title: \"The Four Seasons\",\n      //     composer: \"Antonio Vivaldi\",\n      //     genre: \"Baroque\",\n      //     imagePath: \"path/to/four-seasons-image.jpg\", // Replace with actual image path\n      //     rating: 3.5\n      //   },\n      //   {\n      //     id: 3,\n      //     title: \"Clair de Lune\",\n      //     composer: \"Claude Debussy\",\n      //     genre: \"Impressionist\",\n      //     imagePath: \"path/to/clair-de-lune-image.jpg\", // Replace with actual image path\n      //     rating: 5\n      //   },\n      //   {\n      //     id: 4,\n      //     title: \"Rhapsody in Blue\",\n      //     composer: \"George Gershwin\",\n      //     genre: \"Jazz\",\n      //     imagePath: \"path/to/rhapsody-in-blue-image.jpg\", // Replace with actual image path\n      //     rating: 4.4\n      //   }\n      // ],\n    };\n  },\n  computed: {\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['backgroundVolume']),\n    computedVolume() {\n      return this.backgroundVolume / 100;\n    },\n    filteredSheets() {\n      // Filter sheets only if there's a search query\n      if (this.searchQuery) {\n        return this.trendingSheets.filter(sheet => sheet.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||\n        //sheet.composer.toLowerCase().includes(this.searchQuery.toLowerCase()) ||\n        sheet.genre.toLowerCase().includes(this.searchQuery.toLowerCase()));\n      }\n      return this.trendingSheets; // Return all sheets if no search query\n    }\n  },\n  methods: {\n    async fetchComponents() {\n      try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/components/');\n        this.components = response.data;\n        this.visib2 = this.components[0].is_seller;\n      } catch (error) {\n        console.error('Error fetching components:', error);\n      }\n    },\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['setVolume']),\n    changeVolume(newVolume) {\n      this.setVolume(newVolume);\n    }\n  },\n  mounted() {\n    this.fetchTrendingSheets();\n    this.fetchComponents();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBa0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XG5cblxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2LW1vZGVsPVwidm9sdW1lXCIgQGNoYW5nZT1cImNoYW5nZVZvbHVtZSh2b2x1bWUpXCIgLz5cbiAgICAgIDxhdWRpbyA6c3JjPVwibXVzaWNTb3VyY2VcIiA6dm9sdW1lPVwiY29tcHV0ZWRWb2x1bWVcIiBhdXRvcGxheSBsb29wIC8+XG5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cblxuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL0FwcHMvTmF2YmFyLnZ1ZVwiO1xuaW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRXhwbG9yZV9QYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgIE5hdmJhcixcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW10sXG4gICAgICB2aXNpYjI6IFwiXCIsXG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgICAgYXBpVVJMOiAnL2FwaS9jb25jZXJ0by8nLFxuICAgICAgICB0cmVuZGluZ1NoZWV0cyA6W11cbiAgICAgIC8vIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMSxcbiAgICAgIC8vICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9tb29ubGlnaHQtc29uYXRhLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDQuNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDIsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiVGhlIEZvdXIgU2Vhc29uc1wiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkFudG9uaW8gVml2YWxkaVwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkJhcm9xdWVcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9mb3VyLXNlYXNvbnMtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogMy41XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMyxcbiAgICAgIC8vICAgICB0aXRsZTogXCJDbGFpciBkZSBMdW5lXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiQ2xhdWRlIERlYnVzc3lcIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJJbXByZXNzaW9uaXN0XCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vY2xhaXItZGUtbHVuZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA1XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogNCxcbiAgICAgIC8vICAgICB0aXRsZTogXCJSaGFwc29keSBpbiBCbHVlXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiR2VvcmdlIEdlcnNod2luXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiSmF6elwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL3JoYXBzb2R5LWluLWJsdWUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNC40XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIF0sXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAgIC4uLm1hcEdldHRlcnMoWydiYWNrZ3JvdW5kVm9sdW1lJ10pLFxuICAgICAgY29tcHV0ZWRWb2x1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRWb2x1bWUgLyAxMDA7XG4gICAgICB9LFxuICAgICAgZmlsdGVyZWRTaGVldHMoKSB7XG4gICAgICAgIC8vIEZpbHRlciBzaGVldHMgb25seSBpZiB0aGVyZSdzIGEgc2VhcmNoIHF1ZXJ5XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHMuZmlsdGVyKHNoZWV0ID0+XG4gICAgICAgICAgICBzaGVldC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgLy9zaGVldC5jb21wb3Nlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgIHNoZWV0LmdlbnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHM7IC8vIFJldHVybiBhbGwgc2hlZXRzIGlmIG5vIHNlYXJjaCBxdWVyeVxuICAgICAgfVxuICAgIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudHMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY29tcG9uZW50cy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWIyID0gdGhpcy5jb21wb25lbnRzWzBdLmlzX3NlbGxlcjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29tcG9uZW50czonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgfSxcblxuICAgIC4uLm1hcEFjdGlvbnMoWydzZXRWb2x1bWUnXSksXG5cbiAgICBjaGFuZ2VWb2x1bWUobmV3Vm9sdW1lKSB7XG4gICAgICB0aGlzLnNldFZvbHVtZShuZXdWb2x1bWUpO1xuICAgIH0sXG5cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoVHJlbmRpbmdTaGVldHMoKTtcbiAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5c986417\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nconst _hoisted_3 = [\"src\", \"volume\"];\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Navbar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar, {\n    isSeller: $data.visib2\n  }, null, 8 /* PROPS */, [\"isSeller\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"range\",\n    min: \"0\",\n    max: \"100\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => _ctx.volume = $event),\n    onChange: _cache[1] || (_cache[1] = $event => $options.changeVolume(_ctx.volume))\n  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.volume]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"audio\", {\n    src: _ctx.musicSource,\n    volume: $options.computedVolume,\n    autoplay: \"\",\n    loop: \"\"\n  }, null, 8 /* PROPS */, _hoisted_3)])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM5ODY0MTcmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7Ozs7QUFEQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XG5cblxuICAgICAgPGlucHV0IHR5cGU9XCJyYW5nZVwiIG1pbj1cIjBcIiBtYXg9XCIxMDBcIiB2LW1vZGVsPVwidm9sdW1lXCIgQGNoYW5nZT1cImNoYW5nZVZvbHVtZSh2b2x1bWUpXCIgLz5cbiAgICAgIDxhdWRpbyA6c3JjPVwibXVzaWNTb3VyY2VcIiA6dm9sdW1lPVwiY29tcHV0ZWRWb2x1bWVcIiBhdXRvcGxheSBsb29wIC8+XG5cblxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuPHNjcmlwdD5cblxuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTmF2YmFyIGZyb20gXCJAL0FwcHMvTmF2YmFyLnZ1ZVwiO1xuaW1wb3J0IHttYXBBY3Rpb25zLCBtYXBHZXR0ZXJzfSBmcm9tIFwidnVleFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRXhwbG9yZV9QYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgIE5hdmJhcixcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW10sXG4gICAgICB2aXNpYjI6IFwiXCIsXG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgICAgYXBpVVJMOiAnL2FwaS9jb25jZXJ0by8nLFxuICAgICAgICB0cmVuZGluZ1NoZWV0cyA6W11cbiAgICAgIC8vIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMSxcbiAgICAgIC8vICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9tb29ubGlnaHQtc29uYXRhLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDQuNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDIsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiVGhlIEZvdXIgU2Vhc29uc1wiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkFudG9uaW8gVml2YWxkaVwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkJhcm9xdWVcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9mb3VyLXNlYXNvbnMtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogMy41XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMyxcbiAgICAgIC8vICAgICB0aXRsZTogXCJDbGFpciBkZSBMdW5lXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiQ2xhdWRlIERlYnVzc3lcIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJJbXByZXNzaW9uaXN0XCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vY2xhaXItZGUtbHVuZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA1XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogNCxcbiAgICAgIC8vICAgICB0aXRsZTogXCJSaGFwc29keSBpbiBCbHVlXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiR2VvcmdlIEdlcnNod2luXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiSmF6elwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL3JoYXBzb2R5LWluLWJsdWUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNC40XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIF0sXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAgIC4uLm1hcEdldHRlcnMoWydiYWNrZ3JvdW5kVm9sdW1lJ10pLFxuICAgICAgY29tcHV0ZWRWb2x1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRWb2x1bWUgLyAxMDA7XG4gICAgICB9LFxuICAgICAgZmlsdGVyZWRTaGVldHMoKSB7XG4gICAgICAgIC8vIEZpbHRlciBzaGVldHMgb25seSBpZiB0aGVyZSdzIGEgc2VhcmNoIHF1ZXJ5XG4gICAgICAgIGlmICh0aGlzLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHMuZmlsdGVyKHNoZWV0ID0+XG4gICAgICAgICAgICBzaGVldC5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICAgICAgLy9zaGVldC5jb21wb3Nlci50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoUXVlcnkudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgICAgIHNoZWV0LmdlbnJlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hRdWVyeS50b0xvd2VyQ2FzZSgpKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudHJlbmRpbmdTaGVldHM7IC8vIFJldHVybiBhbGwgc2hlZXRzIGlmIG5vIHNlYXJjaCBxdWVyeVxuICAgICAgfVxuICAgIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudHMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY29tcG9uZW50cy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWIyID0gdGhpcy5jb21wb25lbnRzWzBdLmlzX3NlbGxlcjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29tcG9uZW50czonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgfSxcblxuICAgIC4uLm1hcEFjdGlvbnMoWydzZXRWb2x1bWUnXSksXG5cbiAgICBjaGFuZ2VWb2x1bWUobmV3Vm9sdW1lKSB7XG4gICAgICB0aGlzLnNldFZvbHVtZShuZXdWb2x1bWUpO1xuICAgIH0sXG5cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoVHJlbmRpbmdTaGVldHMoKTtcbiAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "6d592ed98a1778a6"; }
/******/ }();
/******/ 
/******/ }
);