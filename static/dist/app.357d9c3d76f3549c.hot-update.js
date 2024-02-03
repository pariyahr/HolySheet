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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Apps/Navbar.vue */ \"./src/Apps/Navbar.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Settings_Page\",\n  components: {\n    Navbar: _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      components: [],\n      visib2: \"\",\n      showSearch: false,\n      searchQuery: '',\n      apiURL: '/api/concerto/',\n      trendingSheets: []\n      // trendingSheets: [\n      //   {\n      //     id: 1,\n      //     title: \"Moonlight Sonata\",\n      //     composer: \"Ludwig van Beethoven\",\n      //     genre: \"Classical\",\n      //     imagePath: \"path/to/moonlight-sonata-image.jpg\", // Replace with actual image path\n      //     rating: 4.5\n      //   },\n      //   {\n      //     id: 2,\n      //     title: \"The Four Seasons\",\n      //     composer: \"Antonio Vivaldi\",\n      //     genre: \"Baroque\",\n      //     imagePath: \"path/to/four-seasons-image.jpg\", // Replace with actual image path\n      //     rating: 3.5\n      //   },\n      //   {\n      //     id: 3,\n      //     title: \"Clair de Lune\",\n      //     composer: \"Claude Debussy\",\n      //     genre: \"Impressionist\",\n      //     imagePath: \"path/to/clair-de-lune-image.jpg\", // Replace with actual image path\n      //     rating: 5\n      //   },\n      //   {\n      //     id: 4,\n      //     title: \"Rhapsody in Blue\",\n      //     composer: \"George Gershwin\",\n      //     genre: \"Jazz\",\n      //     imagePath: \"path/to/rhapsody-in-blue-image.jpg\", // Replace with actual image path\n      //     rating: 4.4\n      //   }\n      // ],\n    };\n  },\n  computed: {\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['backgroundVolume']),\n    computedVolume() {\n      return this.backgroundVolume / 100; // Convert to a scale of 0 to 1\n    }\n  },\n  watch: {\n    computedVolume(newVolume) {\n      const audioPlayer = this.$refs.audioPlayer;\n      if (audioPlayer) {\n        audioPlayer.volume = newVolume;\n      }\n    }\n  },\n  methods: {\n    async fetchComponents() {\n      try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/components/');\n        this.components = response.data;\n        this.visib2 = this.components[0].is_seller;\n      } catch (error) {\n        console.error('Error fetching components:', error);\n      }\n    },\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['setVolume']),\n    changeVolume(newVolume) {\n      this.setVolume(newVolume);\n    }\n  },\n  mounted() {\n    this.fetchTrendingSheets();\n    this.fetchComponents();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWUtaG9seXNoZWV0Ly4vc3JjL0FwcHMvU2V0dGluZ3MudnVlP2Y4YTEiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiYmctaW1nXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQxXCI+XG4gICAgICA8TmF2YmFyIDppc1NlbGxlcj1cInZpc2liMlwiPjwvTmF2YmFyPlxuXG5cbiAgICA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMFwiIG1heD1cIjEwMFwiIHYtbW9kZWw9XCJ2b2x1bWVcIiBAY2hhbmdlPVwiY2hhbmdlVm9sdW1lXCIgLz5cblxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG48c2NyaXB0PlxuXG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvQXBwcy9OYXZiYXIudnVlXCI7XG5pbXBvcnQge21hcEFjdGlvbnMsIG1hcEdldHRlcnN9IGZyb20gXCJ2dWV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTZXR0aW5nc19QYWdlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICAgIE5hdmJhcixcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50czogW10sXG4gICAgICB2aXNpYjI6IFwiXCIsXG4gICAgICBzaG93U2VhcmNoOiBmYWxzZSxcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgICAgYXBpVVJMOiAnL2FwaS9jb25jZXJ0by8nLFxuICAgICAgICB0cmVuZGluZ1NoZWV0cyA6W11cbiAgICAgIC8vIHRyZW5kaW5nU2hlZXRzOiBbXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMSxcbiAgICAgIC8vICAgICB0aXRsZTogXCJNb29ubGlnaHQgU29uYXRhXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiTHVkd2lnIHZhbiBCZWV0aG92ZW5cIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJDbGFzc2ljYWxcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9tb29ubGlnaHQtc29uYXRhLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDQuNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDIsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiVGhlIEZvdXIgU2Vhc29uc1wiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkFudG9uaW8gVml2YWxkaVwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkJhcm9xdWVcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9mb3VyLXNlYXNvbnMtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogMy41XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMyxcbiAgICAgIC8vICAgICB0aXRsZTogXCJDbGFpciBkZSBMdW5lXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiQ2xhdWRlIERlYnVzc3lcIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJJbXByZXNzaW9uaXN0XCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vY2xhaXItZGUtbHVuZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA1XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogNCxcbiAgICAgIC8vICAgICB0aXRsZTogXCJSaGFwc29keSBpbiBCbHVlXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiR2VvcmdlIEdlcnNod2luXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiSmF6elwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL3JoYXBzb2R5LWluLWJsdWUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNC40XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIF0sXG4gICAgfTtcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFsnYmFja2dyb3VuZFZvbHVtZSddKSxcbiAgICBjb21wdXRlZFZvbHVtZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmJhY2tncm91bmRWb2x1bWUgLyAxMDA7IC8vIENvbnZlcnQgdG8gYSBzY2FsZSBvZiAwIHRvIDFcbiAgICB9LFxuICB9LFxuICB3YXRjaDoge1xuICAgIGNvbXB1dGVkVm9sdW1lKG5ld1ZvbHVtZSkge1xuICAgICAgY29uc3QgYXVkaW9QbGF5ZXIgPSB0aGlzLiRyZWZzLmF1ZGlvUGxheWVyO1xuICAgICAgaWYgKGF1ZGlvUGxheWVyKSB7XG4gICAgICAgIGF1ZGlvUGxheWVyLnZvbHVtZSA9IG5ld1ZvbHVtZTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudHMoKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvY29tcG9uZW50cy8nKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudmlzaWIyID0gdGhpcy5jb21wb25lbnRzWzBdLmlzX3NlbGxlcjtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgY29tcG9uZW50czonLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgfSxcblxuICAgIC4uLm1hcEFjdGlvbnMoWydzZXRWb2x1bWUnXSksXG5cbiAgICBjaGFuZ2VWb2x1bWUobmV3Vm9sdW1lKSB7XG4gICAgICB0aGlzLnNldFZvbHVtZShuZXdWb2x1bWUpO1xuICAgIH0sXG5cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoVHJlbmRpbmdTaGVldHMoKTtcbiAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5c986417\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Navbar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar, {\n    isSeller: $data.visib2\n  }, null, 8 /* PROPS */, [\"isSeller\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"range\",\n    min: \"0\",\n    max: \"100\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => _ctx.volume = $event),\n    onChange: _cache[1] || (_cache[1] = (...args) => $options.changeVolume && $options.changeVolume(...args))\n  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.volume]])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM5ODY0MTcmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7OztBQURBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XG5cblxuICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdi1tb2RlbD1cInZvbHVtZVwiIEBjaGFuZ2U9XCJjaGFuZ2VWb2x1bWVcIiAvPlxuXG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5cblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9BcHBzL05hdmJhci52dWVcIjtcbmltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNldHRpbmdzX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgICAgTmF2YmFyLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb21wb25lbnRzOiBbXSxcbiAgICAgIHZpc2liMjogXCJcIixcbiAgICAgIHNob3dTZWFyY2g6IGZhbHNlLFxuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgICBhcGlVUkw6ICcvYXBpL2NvbmNlcnRvLycsXG4gICAgICAgIHRyZW5kaW5nU2hlZXRzIDpbXVxuICAgICAgLy8gdHJlbmRpbmdTaGVldHM6IFtcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiAxLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIk1vb25saWdodCBTb25hdGFcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJMdWR3aWcgdmFuIEJlZXRob3ZlblwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkNsYXNzaWNhbFwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL21vb25saWdodC1zb25hdGEtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNC41XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIHtcbiAgICAgIC8vICAgICBpZDogMixcbiAgICAgIC8vICAgICB0aXRsZTogXCJUaGUgRm91ciBTZWFzb25zXCIsXG4gICAgICAvLyAgICAgY29tcG9zZXI6IFwiQW50b25pbyBWaXZhbGRpXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiQmFyb3F1ZVwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL2ZvdXItc2Vhc29ucy1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiAzLjVcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiAzLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIkNsYWlyIGRlIEx1bmVcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJDbGF1ZGUgRGVidXNzeVwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkltcHJlc3Npb25pc3RcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9jbGFpci1kZS1sdW5lLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDVcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiA0LFxuICAgICAgLy8gICAgIHRpdGxlOiBcIlJoYXBzb2R5IGluIEJsdWVcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJHZW9yZ2UgR2Vyc2h3aW5cIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJKYXp6XCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vcmhhcHNvZHktaW4tYmx1ZS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA0LjRcbiAgICAgIC8vICAgfVxuICAgICAgLy8gXSxcbiAgICB9O1xuICB9LFxuICBjb21wdXRlZDoge1xuICAgIC4uLm1hcEdldHRlcnMoWydiYWNrZ3JvdW5kVm9sdW1lJ10pLFxuICAgIGNvbXB1dGVkVm9sdW1lKCkge1xuICAgICAgcmV0dXJuIHRoaXMuYmFja2dyb3VuZFZvbHVtZSAvIDEwMDsgLy8gQ29udmVydCB0byBhIHNjYWxlIG9mIDAgdG8gMVxuICAgIH0sXG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgY29tcHV0ZWRWb2x1bWUobmV3Vm9sdW1lKSB7XG4gICAgICBjb25zdCBhdWRpb1BsYXllciA9IHRoaXMuJHJlZnMuYXVkaW9QbGF5ZXI7XG4gICAgICBpZiAoYXVkaW9QbGF5ZXIpIHtcbiAgICAgICAgYXVkaW9QbGF5ZXIudm9sdW1lID0gbmV3Vm9sdW1lO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50cygpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9jb21wb25lbnRzLycpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYjIgPSB0aGlzLmNvbXBvbmVudHNbMF0uaXNfc2VsbGVyO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBjb21wb25lbnRzOicsIGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICB9LFxuXG4gICAgLi4ubWFwQWN0aW9ucyhbJ3NldFZvbHVtZSddKSxcblxuICAgIGNoYW5nZVZvbHVtZShuZXdWb2x1bWUpIHtcbiAgICAgIHRoaXMuc2V0Vm9sdW1lKG5ld1ZvbHVtZSk7XG4gICAgfSxcblxuICB9LFxuICBtb3VudGVkKCkge1xuICAgIHRoaXMuZmV0Y2hUcmVuZGluZ1NoZWV0cygpO1xuICAgICB0aGlzLmZldGNoQ29tcG9uZW50cygpO1xuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgc3JjPVwiLi4vYXNzZXRzL2Nzcy9ob21lX3BhZ2UuY3NzXCI+XG4vKiBVc2UgdGhlIHByb3ZpZGVkIENTUyBzdHlsZXMgKi9cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "9ed7a7ca59b32c74"; }
/******/ }();
/******/ 
/******/ }
);