/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/capstone-meal.jpg */ \"./src/img/capstone-meal.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Quintessential&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  list-style: none;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  position: relative;\\n  min-height: 100vh;\\n  margin: 0;\\n  background-color: #464866;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: unset;\\n}\\n\\n.navbar {\\n  display: flex;\\n  justify-content: space-evenly;\\n  align-items: center;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  z-index: 1000;\\n  background-color: #aaabb8;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.navbar u {\\n  font-weight: bold;\\n}\\n\\nnav img {\\n  display: none;\\n}\\n\\n.tittle {\\n  font-family: 'Neonderthaw', sans-serif;\\n  font-size: 30px;\\n  color: #464866;\\n}\\n\\n.name {\\n  font-family: 'Nanum Pen Script', sans-serif;\\n  font-size: 20px;\\n  color: #464866;\\n}\\n\\n.meal-name {\\n  color: #464866;\\n  font-family: 'Nanum Pen Script', sans-serif;\\n  font-size: 16px;\\n  font-weight: 700;\\n}\\n\\n.meals-number {\\n  color: #def2f1;\\n}\\n\\n.date {\\n  font-size: 16px;\\n  font-size: 20px;\\n  font-weight: bold;\\n  color: #464866;\\n}\\n\\n.cards-wrapper {\\n  display: grid;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 110px 10px;\\n  gap: 30px;\\n}\\n\\n.card {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  background-repeat: no-repeat;\\n  background-size: 98%;\\n  background-position-x: 50%;\\n  border-top-left-radius: 10%;\\n  border-top-right-radius: 10%;\\n  background-color: #29648a;\\n  transition: box-shadow 130ms ease-in-out;\\n  overflow: hidden;\\n  height: 430px;\\n  position: relative;\\n  margin-bottom: 0;\\n  padding: 50px;\\n  width: 370px;\\n}\\n\\n.card:hover {\\n  box-shadow: 10px 12px 6px rgba(0, 0, 0, 0.2), -1px -1px 7px rgba(0, 0, 0, 0.2);\\n}\\n\\n.flex-li {\\n  display: flex;\\n  justify-content: center;\\n  text-align: center;\\n  background-color: #2e9cca;\\n  bottom: 65px;\\n  left: 0;\\n  position: absolute;\\n  right: 0;\\n  color: #fff;\\n  padding: 0;\\n  margin-right: 40px;\\n  width: 100%;\\n}\\n\\n.flex-li span {\\n  color: #fff;\\n  margin-right: 10px;\\n}\\n\\n.like {\\n  font-size: 24px;\\n  cursor: pointer;\\n}\\n\\n.likeCounter {\\n  background-color: #fff;\\n  bottom: 40px;\\n  left: 0;\\n  font-family: 'Quintessential', sans-serif;\\n  position: absolute;\\n  right: 0;\\n  color: #464886;\\n  text-align: center;\\n}\\n\\n.comments-btn {\\n  border: 1px solid #fff;\\n  background-color: #2e9cca;\\n  border-radius: 21px;\\n  color: #fff;\\n  position: absolute;\\n  bottom: 3px;\\n  right: 38%;\\n  text-align: center;\\n  margin: auto;\\n  padding: 0 4px;\\n  font-family: 'Nanum Pen Script', sans-serif;\\n  font-size: 20px;\\n}\\n\\n.comments-btn:hover {\\n  color: #fccd04;\\n}\\n\\n.pop-up-container {\\n  display: none;\\n  width: 60vw;\\n  border: 2px #000 solid;\\n  box-sizing: border-box;\\n  background-color: #1e1b26;\\n  margin: 60px auto 0 auto;\\n  box-shadow: 5px 5px 115px -14px black;\\n  border-radius: 4px;\\n  background-image:\\n    linear-gradient(\\n      rgba(22, 12, 46, 0.95),\\n      rgba(73, 66, 92, 0.95)\\n    ),\\n    url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.main-pop-up {\\n  display: none;\\n  height: 100vh;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  background-color: rgba(100, 88, 88, 0.7);\\n  backdrop-filter: blur(3px);\\n  overflow-y: scroll;\\n  z-index: 1;\\n}\\n\\n.pop-up-container.pop {\\n  display: grid;\\n}\\n\\n.pop-up {\\n  text-align: center;\\n}\\n\\n.span-div {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n}\\n\\n.id-title {\\n  display: flex;\\n  flex-direction: column;\\n  align-content: center;\\n  justify-content: center;\\n  color: #fff;\\n  font-family: 'Poppins', sans-serif;\\n  font-weight: bolder;\\n}\\n\\n.meal-details1 {\\n  color: #a4b3b6;\\n  font-size: 22px;\\n  font-family: 'Robot', sans-serif;\\n  font-weight: bold;\\n}\\n\\n.meal-details {\\n  margin-right: 50px;\\n  color: #e98074;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n.meal-image {\\n  width: 80%;\\n  margin-top: 60px;\\n  height: 380px;\\n  background-position: center;\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  z-index: 111 !important;\\n  border-top-left-radius: 4px;\\n  border-top-right-radius: 4px;\\n  -webkit-mask-image:\\n    -webkit-gradient(\\n      linear,\\n      left top,\\n      left bottom,\\n      color-stop(0, rgba(0, 0, 0, 1)),\\n      color-stop(0.35, rgba(0, 0, 0, 1)),\\n      color-stop(0.5, rgba(0, 0, 0, 1)),\\n      color-stop(0.65, rgba(0, 0, 0, 1)),\\n      color-stop(0.85, rgba(0, 0, 0, 0.6)),\\n      color-stop(1, rgba(0, 0, 0, 0))\\n    );\\n  position: relative;\\n}\\n\\n.meal-image:hover {\\n  transform: scale(1.1);\\n}\\n\\n.close-button {\\n  position: absolute;\\n  font-size: 30px;\\n  font-weight: bold;\\n  border: none;\\n  background-color: #1e1b26;\\n  color: rgb(141, 105, 105);\\n}\\n\\n.close-button:hover {\\n  color: red;\\n  transform: scale(1.1);\\n}\\n\\n.comment-text {\\n  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\\n  color: #a8a878;\\n  font-size: 25px;\\n}\\n\\n.comment-counter {\\n  color: burlywood;\\n  font-size: 20px;\\n  font-family: 'Poppins', sans-serif;\\n  font-weight: 900;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 20px;\\n}\\n\\ninput {\\n  padding-left: 10px;\\n  color: rgb(82, 81, 80);\\n  background-color: rgb(233, 224, 224);\\n  width: 400px;\\n  height: 40px;\\n  border-radius: 5px;\\n  border: 1px #000 solid;\\n}\\n\\ntextarea {\\n  padding-left: 10px;\\n  color: rgb(73, 72, 70);\\n  background-color: rgb(236, 232, 232);\\n  width: 400px;\\n  border-radius: 5px;\\n  border: 1px #000 solid;\\n}\\n\\n::placeholder {\\n  font-size: 15px;\\n  font-weight: 600;\\n  color: rgb(112, 107, 107);\\n}\\n\\n.btn {\\n  padding: 5px;\\n  box-shadow: 5px 5px rgb(26, 25, 25);\\n  margin-bottom: 20px;\\n  font-size: 20px;\\n  border: 2px #000 solid;\\n  width: 250px;\\n  background-color: #44318d;\\n  color: #fff;\\n}\\n\\n.white {\\n  color: #fff;\\n  font-family: 'Roboto', sans-serif;\\n  font-weight: 800;\\n}\\n\\nfooter::after {\\n  content: '';\\n  display: block;\\n  width: 100%;\\n  height: 30px;\\n  background-color: darkgray;\\n}\\n\\nfooter {\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  height: 50px;\\n  font-size: 22px;\\n  color: rgb(2, 28, 43);\\n  background-color: #aaabb8;\\n  font-weight: bold;\\n  padding: 10px 0 10px 0;\\n  text-align: center;\\n}\\n\\n@media only screen and (min-width: 678px) {\\n  .cards-wrapper {\\n    display: flex;\\n    flex-direction: row;\\n    flex-wrap: wrap;\\n    gap: 100px 200px;\\n    margin: 100px 0 100px 0;\\n    text-align: center;\\n  }\\n\\n  nav img {\\n    display: block;\\n    width: 100px;\\n    height: 100px;\\n  }\\n\\n  .tittle {\\n    font-size: 70px;\\n  }\\n\\n  .name {\\n    font-size: 40px;\\n  }\\n\\n  .meal-name {\\n    font-size: 24px;\\n  }\\n\\n  .comments-btn {\\n    font-size: 21px;\\n  }\\n}\\n\\n@media only screen and (max-width: 678px) {\\n  .meal-image {\\n    width: 80%;\\n    margin-top: 60px;\\n    height: 380px;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    z-index: 111 !important;\\n    border-top-left-radius: 4px;\\n    border-top-right-radius: 4px;\\n    -webkit-mask-image:\\n      -webkit-gradient(\\n        linear,\\n        left top,\\n        left bottom,\\n        color-stop(0, rgba(0, 0, 0, 1)),\\n        color-stop(0.35, rgba(0, 0, 0, 1)),\\n        color-stop(0.5, rgba(0, 0, 0, 1)),\\n        color-stop(0.65, rgba(0, 0, 0, 1)),\\n        color-stop(0.85, rgba(0, 0, 0, 0.6)),\\n        color-stop(1, rgba(0, 0, 0, 0))\\n      );\\n    position: relative;\\n  }\\n\\n  .pop-up-container {\\n    display: none;\\n    width: 90vw;\\n    border: 2px #000 solid;\\n    box-sizing: border-box;\\n    background-color: #1e1b26;\\n    margin: 60px auto 0 auto;\\n    box-shadow: 5px 5px 115px -14px black;\\n    border-radius: 4px;\\n    background-image:\\n      linear-gradient(\\n        rgba(22, 12, 46, 0.95),\\n        rgba(73, 66, 92, 0.95)\\n      ),\\n      url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  }\\n\\n  .main-pop-up {\\n    display: none;\\n    height: 100vh;\\n    position: fixed;\\n    top: 0;\\n    width: 100%;\\n    background-color: rgba(100, 88, 88, 0.7);\\n    backdrop-filter: blur(3px);\\n    overflow-y: scroll;\\n    z-index: 1;\\n  }\\n\\n  .pop-up-container.pop {\\n    display: grid;\\n  }\\n\\n  .pop-up {\\n    text-align: center;\\n    width: fit-content;\\n  }\\n\\n  .close-button {\\n    position: absolute;\\n    margin-right: 10px;\\n    font-size: 30px;\\n    font-weight: bold;\\n    border: none;\\n    background-color: #1e1b26;\\n    color: rgb(141, 105, 105);\\n  }\\n\\n  input {\\n    padding-left: 10px;\\n    color: bisque;\\n    background-color: rgb(179, 168, 168);\\n    width: 250px;\\n    height: 40px;\\n    border-radius: 5px;\\n    border: 1px #000 solid;\\n  }\\n\\n  textarea {\\n    padding-left: 10px;\\n    color: bisque;\\n    background-color: rgb(68, 64, 64);\\n    width: 250px;\\n    border-radius: 5px;\\n    border: 1px #000 solid;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayItems.js */ \"./src/modules/displayItems.js\");\n/* harmony import */ var _modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getDataFromAPI.js */ \"./src/modules/getDataFromAPI.js\");\n\n\n\n\nwindow.onload = async () => {\n  (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(await (0,_modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\n\nconst Footer = () => {\n  const footer = document.querySelector('footer');\n  const currentYear = new Date().getFullYear();\n  footer.innerHTML = `<footer>\n                \n                <span>&#169;</span> ${currentYear} Created by Dejan & Anny .\n            </footer>\n            <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>`;\n};\n\nFooter();\n\nconst { luxon } = window;\nconst date = document.querySelector('.date');\ndate.innerText = luxon.DateTime.now().toFormat('MMMM dd, yyyy, hh:mm:ss a').toString();\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (item) => {\n  if (item.length) {\n    return item.length;\n  } else {\n    return 0;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _homepageCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepageCounter.js */ \"./src/modules/homepageCounter.js\");\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pop-up.js */ \"./src/modules/pop-up.js\");\n/* harmony import */ var _getInfo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getInfo.js */ \"./src/modules/getInfo.js\");\n\n\n\n\n\nconst mealsContainer = document.querySelector('.cards-wrapper');\nconst numbersOfMeals = document.querySelector('.meals-number');\n\nconst list = (meals) => {\n  meals.forEach(async (meal) => {\n    const ul = document.createElement('ul');\n    ul.id = meal.idMeal;\n    ul.classList.add('card');\n    ul.style.backgroundImage = `url('${meal.strMealThumb}')`;\n    mealsContainer.appendChild(ul);\n    const imageContainer = document.createElement('li');\n    ul.appendChild(imageContainer);\n    const image = document.createElement('img');\n    image.classList.add('image');\n    imageContainer.appendChild(image);\n    const mealTitle = document.createElement('li');\n    ul.appendChild(mealTitle);\n    mealTitle.classList.add('flex-li');\n    const mealName = document.createElement('span');\n    mealName.classList.add('meal-name');\n    mealName.innerHTML = meal.strMeal;\n    mealTitle.appendChild(mealName);\n    const spanHeart = document.createElement('span');\n    mealTitle.appendChild(spanHeart);\n    const heart = document.createElement('i');\n    heart.classList.add('far', 'fa-heart', 'like');\n    heart.id = meal.idMeal;\n    mealTitle.appendChild(heart);\n    const likesNumber = document.createElement('li');\n    likesNumber.classList.add('likeCounter');\n    likesNumber.innerHTML = 'O likes';\n    ul.appendChild(likesNumber);\n    const commentBtn = document.createElement('li');\n    ul.appendChild(commentBtn);\n    const anchor = document.createElement('a');\n    anchor.id = meals.idMeal;\n    anchor.classList.add('comments-btn');\n    anchor.href = '#';\n    anchor.text = 'Comments';\n    commentBtn.appendChild(anchor);\n\n    const popUpContainer = document.querySelector('.pop-up-container');\n    anchor.addEventListener('click', async () => {\n      popUpContainer.classList.add('pop');\n      (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(await (0,_getInfo_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(meal.idMeal));\n      const navbar = document.querySelector('.navbar');\n      navbar.classList.add('hide');\n    });\n\n    const likesData = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikesFromAPI)();\n    const showLikes = (likesData, likesNumber) => {\n      likesData.forEach((likeProp) => {\n        if (likeProp.item_id === heart.id) {\n          likesNumber.innerHTML = `${likeProp.likes} likes `;\n        }\n      });\n    };\n    showLikes(likesData, likesNumber);\n\n    heart.addEventListener('click', async () => {\n      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.addLikeToAPI)(heart.id);\n      heart.style.color = 'red';\n      setTimeout(() => {\n        heart.style.color = 'unset';\n      }, 2000);\n\n      const likeComing = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikesFromAPI)();\n      showLikes(likeComing, likesNumber);\n    });\n  });\n\n  numbersOfMeals.textContent = (0,_homepageCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meals);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/displayItems.js?");

/***/ }),

/***/ "./src/modules/getDataFromAPI.js":
/*!***************************************!*\
  !*** ./src/modules/getDataFromAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDataFromAPI = async () => {\n  const getMeals = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');\n  return (await getMeals.json()).meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDataFromAPI);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/getDataFromAPI.js?");

/***/ }),

/***/ "./src/modules/getInfo.js":
/*!********************************!*\
  !*** ./src/modules/getInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getInfo = async (idMeal) => {\n  const getMealsInfo = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`,\n  );\n  return (await getMealsInfo.json()).meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getInfo);\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/getInfo.js?");

/***/ }),

/***/ "./src/modules/homepageCounter.js":
/*!****************************************!*\
  !*** ./src/modules/homepageCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homepageCounter = (items) => items.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageCounter);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/homepageCounter.js?");

/***/ }),

/***/ "./src/modules/involvementkeys.js":
/*!****************************************!*\
  !*** ./src/modules/involvementkeys.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setCommentsToAPI\": () => (/* binding */ setCommentsToAPI),\n/* harmony export */   \"getCommentsFromAPI\": () => (/* binding */ getCommentsFromAPI)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\n\nconst setCommentsToAPI = async (comment) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/puvc7VYSNA8heLggUsN3/comments';\n  const response = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n    },\n    body: JSON.stringify(comment),\n  });\n  return response.ok;\n};\n\nconst getCommentsFromAPI = async (item) => {\n  const involvementAPI = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/puvc7VYSNA8heLggUsN3/comments?item_id=${item.idMeal}`;\n  const commentsFromAPI = await fetch(involvementAPI).then((response) => response.json());\n  const commentList = commentsFromAPI;\n  const counter = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentList);\n  const displayComments = document.querySelector('.p-comment');\n  const commentNumber = document.querySelector('.comment-counter');\n\n  commentNumber.innerHTML = `Comments (${counter})`;\n\n  displayComments.innerHTML = '';\n\n    commentList.forEach((comment) => {\n      const createComment = document.createElement('li');\n      createComment.classList.add('create-comment');\n      createComment.style.display = 'flex';\n      createComment.style.justifyContent = 'center';\n      createComment.style.gap = '10px';\n      displayComments.appendChild(createComment);\n      const span1 = document.createElement('span');\n      span1.classList.add('white');\n      createComment.appendChild(span1);\n      span1.textContent = comment.creation_date;\n      const span2 = document.createElement('span');\n      span2.classList.add('white');\n      span2.innerHTML = `${comment.username}:`;\n      createComment.appendChild(span2);\n      const span3=  document.createElement('span');\n      span3.classList.add('white');\n      span3.textContent = comment.comment;\n      createComment.appendChild(span3);\n  });\n};\n\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/involvementkeys.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesFromAPI\": () => (/* binding */ getLikesFromAPI),\n/* harmony export */   \"addLikeToAPI\": () => (/* binding */ addLikeToAPI)\n/* harmony export */ });\nconst getLikesFromAPI = async () => {\n  const getLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes');\n  const json = await getLike.json();\n  return json;\n};\n\nconst addLikeToAPI = async (mealId) => {\n  const postLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: mealId,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return postLike;\n};\n\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/likes.js?");

/***/ }),

/***/ "./src/modules/pop-up.js":
/*!*******************************!*\
  !*** ./src/modules/pop-up.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementkeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementkeys.js */ \"./src/modules/involvementkeys.js\");\n\n\nconst mainPopUp = document.querySelector('.main-pop-up');\nconst popUpContainer = document.querySelector('.pop-up-container');\nconst popUp = async ([meal]) => {\n  mainPopUp.style.display = 'block';\n  popUpContainer.innerHTML = '';\n  const div = document.createElement('div');\n  div.id = 'some';\n  div.classList.add('pop-up');\n  popUpContainer.appendChild(div);\n  const mealImage = document.createElement('img');\n  mealImage.src = meal.strMealThumb;\n  mealImage.classList.add('meal-image');\n  div.appendChild(mealImage);\n  const closeButton = document.createElement('button');\n  closeButton.innerText = 'X';\n  closeButton.classList.add('close-button');\n  div.appendChild(closeButton);\n  const ID = document.createElement('h2');\n  ID.innerText = meal.strMeal;\n  ID.classList.add('id-title');\n  div.appendChild(ID);\n  const spanDiv = document.createElement('div');\n  spanDiv.classList.add('span-div');\n  const iDText = document.createElement('ul');\n  iDText.classList.add('id-text');\n  const li = document.createElement('li');\n  const li2 = document.createElement('li');\n  const li3 = document.createElement('li');\n  li.innerHTML = `<span class=\"meal-details1\">Category</span> : ${meal.strCategory}`;\n  li.classList.add('meal-details');\n  li2.innerHTML = `<span class=\"meal-details1\">Origin</span> : ${meal.strArea}`;\n  li2.classList.add('meal-details');\n  li3.innerHTML = `<span class=\"meal-details1\">Recipe</span> : ${meal.strInstructions}`;\n  li3.classList.add('meal-details');\n  iDText.appendChild(li);\n  iDText.appendChild(li2);\n  iDText.appendChild(li3);\n  spanDiv.appendChild(iDText);\n  div.appendChild(spanDiv);\n  const commentHeader = document.createElement('h3');\n  commentHeader.classList.add('comment-text');\n  commentHeader.innerText = '';\n  const commentText = document.createElement('ul');\n  commentText.classList.add('comment-container');\n  const commentNumber = document.createElement('li');\n  commentNumber.classList.add('comment-counter');\n  div.appendChild(commentHeader);\n  commentText.appendChild(commentNumber);\n  div.appendChild(commentText);\n  const displayComments = document.createElement('ul');\n  displayComments.classList.add('p-comment');\n  div.appendChild(displayComments);\n  const form = document.createElement('form');\n  const input = document.createElement('input');\n  input.placeholder = 'Your name';\n  input.id = 'username';\n  const textArea = document.createElement('textarea');\n  textArea.placeholder = 'Your insight';\n  textArea.id = 'userComment';\n  form.appendChild(input);\n  form.appendChild(textArea);\n  const btn = document.createElement('button');\n  btn.type = 'button';\n  btn.classList.add('btn');\n  btn.innerText = 'Comments';\n  form.appendChild(btn);\n  div.appendChild(form);\n\n  closeButton.addEventListener('click', () => {\n    popUpContainer.classList.remove('pop');\n    mainPopUp.style.display = 'none';\n    const navbar = document.querySelector('.navbar');\n    navbar.classList.remove('hide');\n  });\n\n  btn.addEventListener('click', () => {\n    const username = document.querySelector('#username').value;\n    const comment = document.querySelector('#userComment').value;\n    const commentId = meal.idMeal;\n    const newComment = {\n      item_id: commentId,\n      username,\n      comment,\n    };\n\n    (0,_involvementkeys_js__WEBPACK_IMPORTED_MODULE_0__.setCommentsToAPI)(newComment);\n    form.reset();\n    setTimeout(() => {\n      (0,_involvementkeys_js__WEBPACK_IMPORTED_MODULE_0__.getCommentsFromAPI)(meal);\n    }, 500);\n  });\n  (0,_involvementkeys_js__WEBPACK_IMPORTED_MODULE_0__.getCommentsFromAPI)(meal);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popUp);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/pop-up.js?");

/***/ }),

/***/ "./src/img/capstone-meal.jpg":
/*!***********************************!*\
  !*** ./src/img/capstone-meal.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e023e0513aa7537c90cb.jpg\";\n\n//# sourceURL=webpack://capstone-2-javascript/./src/img/capstone-meal.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;