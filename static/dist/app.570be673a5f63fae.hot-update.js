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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n/* harmony import */ var _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Apps/Navbar.vue */ \"./src/Apps/Navbar.vue\");\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm-bundler.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Settings_Page\",\n  components: {\n    Navbar: _Apps_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  },\n  data() {\n    return {\n      volume: this.$store.state.backgroundVolume,\n      components: [],\n      visib2: \"\",\n      showSearch: false,\n      searchQuery: '',\n      apiURL: '/api/concerto/',\n      trendingSheets: []\n      // trendingSheets: [\n      //   {\n      //     id: 1,\n      //     title: \"Moonlight Sonata\",\n      //     composer: \"Ludwig van Beethoven\",\n      //     genre: \"Classical\",\n      //     imagePath: \"path/to/moonlight-sonata-image.jpg\", // Replace with actual image path\n      //     rating: 4.5\n      //   },\n      //   {\n      //     id: 2,\n      //     title: \"The Four Seasons\",\n      //     composer: \"Antonio Vivaldi\",\n      //     genre: \"Baroque\",\n      //     imagePath: \"path/to/four-seasons-image.jpg\", // Replace with actual image path\n      //     rating: 3.5\n      //   },\n      //   {\n      //     id: 3,\n      //     title: \"Clair de Lune\",\n      //     composer: \"Claude Debussy\",\n      //     genre: \"Impressionist\",\n      //     imagePath: \"path/to/clair-de-lune-image.jpg\", // Replace with actual image path\n      //     rating: 5\n      //   },\n      //   {\n      //     id: 4,\n      //     title: \"Rhapsody in Blue\",\n      //     composer: \"George Gershwin\",\n      //     genre: \"Jazz\",\n      //     imagePath: \"path/to/rhapsody-in-blue-image.jpg\", // Replace with actual image path\n      //     rating: 4.4\n      //   }\n      // ],\n    };\n  },\n  computed: {\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['backgroundVolume']),\n    computedVolume() {\n      return this.backgroundVolume / 100; // Convert to a scale of 0 to 1\n    }\n  },\n  watch: {\n    computedVolume(newVolume) {\n      const audioPlayer = this.$refs.audioPlayer;\n      if (audioPlayer) {\n        audioPlayer.volume = newVolume;\n      }\n    }\n  },\n  methods: {\n    async fetchComponents() {\n      try {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/components/');\n        this.components = response.data;\n        this.visib2 = this.components[0].is_seller;\n      } catch (error) {\n        console.error('Error fetching components:', error);\n      }\n    },\n    ...(0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['setVolume']),\n    changeVolume() {\n      this.setVolume(this.volume);\n    }\n  },\n  mounted() {\n    this.fetchTrendingSheets();\n    this.fetchComponents();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHBzL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiOzs7O0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XG5cblxuICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdi1tb2RlbD1cInZvbHVtZVwiIEBjaGFuZ2U9XCJjaGFuZ2VWb2x1bWVcIiAvPlxuXG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5cblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9BcHBzL05hdmJhci52dWVcIjtcbmltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNldHRpbmdzX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgICAgTmF2YmFyLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHZvbHVtZTogdGhpcy4kc3RvcmUuc3RhdGUuYmFja2dyb3VuZFZvbHVtZSxcbiAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgdmlzaWIyOiBcIlwiLFxuICAgICAgc2hvd1NlYXJjaDogZmFsc2UsXG4gICAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgICAgIGFwaVVSTDogJy9hcGkvY29uY2VydG8vJyxcbiAgICAgICAgdHJlbmRpbmdTaGVldHMgOltdXG4gICAgICAvLyB0cmVuZGluZ1NoZWV0czogW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDEsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiTW9vbmxpZ2h0IFNvbmF0YVwiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkx1ZHdpZyB2YW4gQmVldGhvdmVuXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiQ2xhc3NpY2FsXCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vbW9vbmxpZ2h0LXNvbmF0YS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA0LjVcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiAyLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIlRoZSBGb3VyIFNlYXNvbnNcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJBbnRvbmlvIFZpdmFsZGlcIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJCYXJvcXVlXCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vZm91ci1zZWFzb25zLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDMuNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDMsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiQ2xhaXIgZGUgTHVuZVwiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkNsYXVkZSBEZWJ1c3N5XCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiSW1wcmVzc2lvbmlzdFwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL2NsYWlyLWRlLWx1bmUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDQsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiUmhhcHNvZHkgaW4gQmx1ZVwiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkdlb3JnZSBHZXJzaHdpblwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkphenpcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9yaGFwc29keS1pbi1ibHVlLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDQuNFxuICAgICAgLy8gICB9XG4gICAgICAvLyBdLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbJ2JhY2tncm91bmRWb2x1bWUnXSksXG4gICAgY29tcHV0ZWRWb2x1bWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kVm9sdW1lIC8gMTAwOyAvLyBDb252ZXJ0IHRvIGEgc2NhbGUgb2YgMCB0byAxXG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjb21wdXRlZFZvbHVtZShuZXdWb2x1bWUpIHtcbiAgICAgIGNvbnN0IGF1ZGlvUGxheWVyID0gdGhpcy4kcmVmcy5hdWRpb1BsYXllcjtcbiAgICAgIGlmIChhdWRpb1BsYXllcikge1xuICAgICAgICBhdWRpb1BsYXllci52b2x1bWUgPSBuZXdWb2x1bWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnRzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2NvbXBvbmVudHMvJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liMiA9IHRoaXMuY29tcG9uZW50c1swXS5pc19zZWxsZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvbXBvbmVudHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICAuLi5tYXBBY3Rpb25zKFsnc2V0Vm9sdW1lJ10pLFxuICAgIGNoYW5nZVZvbHVtZSgpIHtcbiAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMudm9sdW1lKTtcbiAgICB9XG5cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoVHJlbmRpbmdTaGVldHMoKTtcbiAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-5c986417\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"bg-img\"\n};\nconst _hoisted_2 = {\n  class: \"content1\"\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_Navbar = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"Navbar\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Navbar, {\n    isSeller: $data.visib2\n  }, null, 8 /* PROPS */, [\"isSeller\"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"input\", {\n    type: \"range\",\n    min: \"0\",\n    max: \"100\",\n    \"onUpdate:modelValue\": _cache[0] || (_cache[0] = $event => $data.volume = $event),\n    onChange: _cache[1] || (_cache[1] = (...args) => $options.changeVolume && $options.changeVolume(...args))\n  }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $data.volume]])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM5ODY0MTcmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7OztBQURBO0FBRUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZS1ob2x5c2hlZXQvLi9zcmMvQXBwcy9TZXR0aW5ncy52dWU/ZjhhMSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJiZy1pbWdcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudDFcIj5cbiAgICAgIDxOYXZiYXIgOmlzU2VsbGVyPVwidmlzaWIyXCI+PC9OYXZiYXI+XG5cblxuICAgIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIwXCIgbWF4PVwiMTAwXCIgdi1tb2RlbD1cInZvbHVtZVwiIEBjaGFuZ2U9XCJjaGFuZ2VWb2x1bWVcIiAvPlxuXG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cbjxzY3JpcHQ+XG5cblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IE5hdmJhciBmcm9tIFwiQC9BcHBzL05hdmJhci52dWVcIjtcbmltcG9ydCB7bWFwQWN0aW9ucywgbWFwR2V0dGVyc30gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNldHRpbmdzX1BhZ2VcIixcbiAgY29tcG9uZW50czoge1xuICAgICAgTmF2YmFyLFxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHZvbHVtZTogdGhpcy4kc3RvcmUuc3RhdGUuYmFja2dyb3VuZFZvbHVtZSxcbiAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgdmlzaWIyOiBcIlwiLFxuICAgICAgc2hvd1NlYXJjaDogZmFsc2UsXG4gICAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgICAgIGFwaVVSTDogJy9hcGkvY29uY2VydG8vJyxcbiAgICAgICAgdHJlbmRpbmdTaGVldHMgOltdXG4gICAgICAvLyB0cmVuZGluZ1NoZWV0czogW1xuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDEsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiTW9vbmxpZ2h0IFNvbmF0YVwiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkx1ZHdpZyB2YW4gQmVldGhvdmVuXCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiQ2xhc3NpY2FsXCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vbW9vbmxpZ2h0LXNvbmF0YS1pbWFnZS5qcGdcIiwgLy8gUmVwbGFjZSB3aXRoIGFjdHVhbCBpbWFnZSBwYXRoXG4gICAgICAvLyAgICAgcmF0aW5nOiA0LjVcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAge1xuICAgICAgLy8gICAgIGlkOiAyLFxuICAgICAgLy8gICAgIHRpdGxlOiBcIlRoZSBGb3VyIFNlYXNvbnNcIixcbiAgICAgIC8vICAgICBjb21wb3NlcjogXCJBbnRvbmlvIFZpdmFsZGlcIixcbiAgICAgIC8vICAgICBnZW5yZTogXCJCYXJvcXVlXCIsXG4gICAgICAvLyAgICAgaW1hZ2VQYXRoOiBcInBhdGgvdG8vZm91ci1zZWFzb25zLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDMuNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDMsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiQ2xhaXIgZGUgTHVuZVwiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkNsYXVkZSBEZWJ1c3N5XCIsXG4gICAgICAvLyAgICAgZ2VucmU6IFwiSW1wcmVzc2lvbmlzdFwiLFxuICAgICAgLy8gICAgIGltYWdlUGF0aDogXCJwYXRoL3RvL2NsYWlyLWRlLWx1bmUtaW1hZ2UuanBnXCIsIC8vIFJlcGxhY2Ugd2l0aCBhY3R1YWwgaW1hZ2UgcGF0aFxuICAgICAgLy8gICAgIHJhdGluZzogNVxuICAgICAgLy8gICB9LFxuICAgICAgLy8gICB7XG4gICAgICAvLyAgICAgaWQ6IDQsXG4gICAgICAvLyAgICAgdGl0bGU6IFwiUmhhcHNvZHkgaW4gQmx1ZVwiLFxuICAgICAgLy8gICAgIGNvbXBvc2VyOiBcIkdlb3JnZSBHZXJzaHdpblwiLFxuICAgICAgLy8gICAgIGdlbnJlOiBcIkphenpcIixcbiAgICAgIC8vICAgICBpbWFnZVBhdGg6IFwicGF0aC90by9yaGFwc29keS1pbi1ibHVlLWltYWdlLmpwZ1wiLCAvLyBSZXBsYWNlIHdpdGggYWN0dWFsIGltYWdlIHBhdGhcbiAgICAgIC8vICAgICByYXRpbmc6IDQuNFxuICAgICAgLy8gICB9XG4gICAgICAvLyBdLFxuICAgIH07XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgLi4ubWFwR2V0dGVycyhbJ2JhY2tncm91bmRWb2x1bWUnXSksXG4gICAgY29tcHV0ZWRWb2x1bWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5iYWNrZ3JvdW5kVm9sdW1lIC8gMTAwOyAvLyBDb252ZXJ0IHRvIGEgc2NhbGUgb2YgMCB0byAxXG4gICAgfSxcbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICBjb21wdXRlZFZvbHVtZShuZXdWb2x1bWUpIHtcbiAgICAgIGNvbnN0IGF1ZGlvUGxheWVyID0gdGhpcy4kcmVmcy5hdWRpb1BsYXllcjtcbiAgICAgIGlmIChhdWRpb1BsYXllcikge1xuICAgICAgICBhdWRpb1BsYXllci52b2x1bWUgPSBuZXdWb2x1bWU7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnRzKCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnL2NvbXBvbmVudHMvJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2liMiA9IHRoaXMuY29tcG9uZW50c1swXS5pc19zZWxsZXI7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGNvbXBvbmVudHM6JywgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgIH0sXG5cbiAgICAuLi5tYXBBY3Rpb25zKFsnc2V0Vm9sdW1lJ10pLFxuICAgIGNoYW5nZVZvbHVtZSgpIHtcbiAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMudm9sdW1lKTtcbiAgICB9XG5cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICB0aGlzLmZldGNoVHJlbmRpbmdTaGVldHMoKTtcbiAgICAgdGhpcy5mZXRjaENvbXBvbmVudHMoKTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkIHNyYz1cIi4uL2Fzc2V0cy9jc3MvaG9tZV9wYWdlLmNzc1wiPlxuLyogVXNlIHRoZSBwcm92aWRlZCBDU1Mgc3R5bGVzICovXG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/Apps/Settings.vue?vue&type=template&id=5c986417&scoped=true\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "028d0b5bb52c6216"; }
/******/ }();
/******/ 
/******/ }
);