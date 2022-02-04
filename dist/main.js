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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  list-style: none;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  position: relative;\\r\\n  min-height: 95vh;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: unset;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.navbar li {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.navbar u {\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\nnav img {\\r\\n  width: 150px;\\r\\n  height: 150px;\\r\\n}\\r\\n\\r\\nbody::after {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  height: 50px;\\r\\n}\\r\\n\\r\\n.cards-wrapper {\\r\\n  display: grid;\\r\\n  align-self: center;\\r\\n  text-align: center;\\r\\n  justify-content: center;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.cards {\\r\\n  margin: 50px auto;\\r\\n}\\r\\n\\r\\n.image {\\r\\n  width: 200px;\\r\\n}\\r\\n\\r\\n.cards li {\\r\\n  padding: 6px;\\r\\n}\\r\\n\\r\\n.comments-btn {\\r\\n  border: 1px solid black;\\r\\n  padding: 3px;\\r\\n}\\r\\n\\r\\n.flex-li {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n  gap: 2px;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.pop-up-container {\\r\\n  display: none;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  width: 80vw;\\r\\n  border: 2px #000 solid;\\r\\n  box-sizing: border-box;\\r\\n  margin-top: 50px;\\r\\n}\\r\\n\\r\\n.pop-up-container.pop {\\r\\n  display: grid;\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.span-div {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.id-text {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-content: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.id-text li {\\r\\n  text-align: left;\\r\\n  margin-right: 50px;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.two li {\\r\\n  margin-right: 0;\\r\\n}\\r\\n\\r\\n.meal-image {\\r\\n  height: 400px;\\r\\n  width: 500px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  float: right;\\r\\n  margin-right: 20px;\\r\\n  font-size: 30px;\\r\\n  font-weight: bold;\\r\\n  border: none;\\r\\n  background-color: #fff;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 200px;\\r\\n  border: 2px #000 solid;\\r\\n  height: 30px;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  border: 2px #000 solid;\\r\\n  padding-left: 10px;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-size: 15px;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  padding: 5px;\\r\\n  box-shadow: 5px 5px #000;\\r\\n  margin-bottom: 20px;\\r\\n  font-size: 20px;\\r\\n  border: 2px #000 solid;\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\nfooter::after {\\r\\n  content: '';\\r\\n  display: block;\\r\\n  width: 100%;\\r\\n  height: 30px;\\r\\n  background-color: darkgray;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  position: absolute;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  font-size: 22px;\\r\\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\\r\\n  color: #000;\\r\\n  background-color: #fff;\\r\\n  font-weight: bold;\\r\\n  padding: 10px 0 10px 0;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n@media only screen and (min-width: 678px) {\\r\\n  .cards-wrapper {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr 1fr;\\r\\n    align-items: center;\\r\\n    text-align: center;\\r\\n    padding: 0;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone-2-javascript/./node_modules/css-loader/dist/runtime/api.js?");

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

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayItems.js */ \"./src/modules/displayItems.js\");\n/* harmony import */ var _modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getDataFromAPI.js */ \"./src/modules/getDataFromAPI.js\");\n\n\n\n\nwindow.onload = async () => {\n  (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(await (0,_modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n};\n\nconst Footer = () => {\n  const footer = document.querySelector('footer');\n  const currentYear = new Date().getFullYear();\n  footer.innerHTML = `<footer>\n                \n                <span>&#169;</span> ${currentYear} Created by Microverse under CC License.\n            </footer>\n            <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>`;\n};\n\nFooter();\n\n//# sourceURL=webpack://capstone-2-javascript/./src/index.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayItems.js */ \"./src/modules/displayItems.js\");\n/* harmony import */ var _modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/getDataFromAPI.js */ \"./src/modules/getDataFromAPI.js\");\n\r\n\r\n\r\n\r\nwindow.onload = async () => {\r\n  (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(await (0,_modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n};\r\n\r\nconst Footer = () => {\r\n  const footer = document.querySelector('footer');\r\n  const currentYear = new Date().getFullYear();\r\n  footer.innerHTML = `<footer>\r\n                \r\n                <span>&#169;</span> ${currentYear} Created by Microverse under CC License.\r\n            </footer>\r\n            <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>`;\r\n};\r\n\r\nFooter();\r\nwindow.onload = async () => {\r\n  (0,_modules_displayItems_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(await (0,_modules_getDataFromAPI_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\r\n};\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/index.js?");
>>>>>>> origin

/***/ }),

/***/ "./src/modules/displayItems.js":
/*!*************************************!*\
  !*** ./src/modules/displayItems.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n/* harmony import */ var _homepageCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepageCounter.js */ \"./src/modules/homepageCounter.js\");\n\n\n\nconst mealsContainer = document.querySelector('.cards-wrapper');\nconst numbersOfMeals = document.querySelector('.meals-number');\n\nconst list = (meals) => {\n  meals.forEach(async (meal) => {\n    const ul = document.createElement('ul');\n    ul.id = meal.idMeal;\n    ul.classList.add('cards');\n    mealsContainer.appendChild(ul);\n    const imageContainer = document.createElement('li');\n    ul.appendChild(imageContainer);\n    const image = document.createElement('img');\n    image.src = meal.strMealThumb;\n    image.classList.add('image');\n    imageContainer.appendChild(image);\n    const mealTitle = document.createElement('li');\n    ul.appendChild(mealTitle);\n    mealTitle.classList.add('flex-li');\n    const mealName = document.createElement('span');\n    mealName.innerHTML = meal.strMeal;\n    mealTitle.appendChild(mealName);\n    const spanHeart = document.createElement('span');\n    mealTitle.appendChild(spanHeart);\n    const heart = document.createElement('i');\n    heart.classList.add('far', 'fa-heart', 'like');\n    heart.id = meal.idMeal;\n    mealTitle.appendChild(heart);\n    const likes = document.createElement('li');\n    likes.classList.add('likeCounter');\n    likes.innerHTML = 'O likes';\n    ul.appendChild(likes);\n    const commentBtn = document.createElement('li');\n    ul.appendChild(commentBtn);\n    const anchor = document.createElement('a');\n    anchor.id = meals.idMeal;\n    anchor.classList.add('comments-btn');\n    anchor.href = '#';\n    anchor.text = 'Comments';\n    commentBtn.appendChild(anchor);\n\n    const likesData = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikesFromAPI)();\n    const showLikes = (likesData, likes) => {\n      likesData.forEach((meal) => {\n        if (meal.item_id === heart.id) {\n          likes.innerHTML = `${meal.likes} likes `;\n        }\n      });\n    };\n    showLikes(likesData, likes);\n\n    heart.addEventListener('click', async () => {\n      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.addLikeToAPI)(heart.id);\n      heart.style.color = 'red';\n      setTimeout(() => {\n        heart.style.color = 'unset';\n      }, 2000);\n\n      const likeComing = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.getLikesFromAPI)();\n      showLikes(likeComing, likes);\n    });\n  });\n\n  numbersOfMeals.textContent = (0,_homepageCounter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meals);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/displayItems.js?");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getInfo.js */ \"./src/modules/getInfo.js\");\n/* harmony import */ var _pop_up_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pop-up.js */ \"./src/modules/pop-up.js\");\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ \"./src/modules/likes.js\");\n\r\n\r\n\r\n\r\nconst mealsContainer = document.querySelector('.cards-wrapper');\r\n\r\nconst list = (meals) => {\r\n  meals.forEach(async (meal) => {\r\n    const ul = document.createElement('ul');\r\n    ul.id = meal.idMeal;\r\n    ul.classList.add('cards');\r\n    mealsContainer.appendChild(ul);\r\n    const imageContainer = document.createElement('li');\r\n    ul.appendChild(imageContainer);\r\n    const image = document.createElement('img');\r\n    image.src = meal.strMealThumb;\r\n    image.classList.add('image');\r\n    imageContainer.appendChild(image);\r\n    const mealTitle = document.createElement('li');\r\n    ul.appendChild(mealTitle);\r\n    mealTitle.classList.add('flex-li');\r\n    const mealName = document.createElement('span');\r\n    mealName.innerHTML = meal.strMeal;\r\n    mealTitle.appendChild(mealName);\r\n    const spanHeart = document.createElement('span');\r\n    mealTitle.appendChild(spanHeart);\r\n    const heart = document.createElement('i');\r\n    heart.classList.add('far', 'fa-heart', 'like');\r\n    heart.id = meal.idMeal;\r\n    mealTitle.appendChild(heart);\r\n    const likes = document.createElement('li');\r\n    likes.classList.add('likeCounter');\r\n    likes.innerHTML = 'O likes';\r\n    ul.appendChild(likes);\r\n    const commentBtn = document.createElement('li');\r\n    ul.appendChild(commentBtn);\r\n    const anchor = document.createElement('a');\r\n    anchor.id = meals.idMeal;\r\n    anchor.classList.add('comments-btn');\r\n    anchor.href = '#';\r\n    anchor.text = 'Comments';\r\n    commentBtn.appendChild(anchor);\r\n    const popUpContainer = document.querySelector('.pop-up-container');\r\n\r\n    anchor.addEventListener('click', async () => {\r\n      popUpContainer.classList.add('pop');\r\n      (0,_pop_up_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(await (0,_getInfo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meal.idMeal));\r\n    });\r\n    const likesData = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikesFromAPI)();\r\n    const showLikes = (likesData, likes) => {\r\n      likesData.forEach((meal) => {\r\n        if (meal.item_id === heart.id) {\r\n          likes.innerHTML = `${meal.likes} likes `;\r\n        }\r\n      });\r\n    };\r\n    showLikes(likesData, likes);\r\n\r\n    heart.addEventListener('click', async () => {\r\n      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.addLikeToAPI)(heart.id);\r\n      heart.style.color = 'red';\r\n      setTimeout(() => {\r\n        heart.style.color = 'unset';\r\n      }, 2000);\r\n\r\n      const likeComing = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.getLikesFromAPI)();\r\n      showLikes(likeComing, likes);\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (list);\r\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/displayItems.js?");
>>>>>>> origin

/***/ }),

/***/ "./src/modules/getDataFromAPI.js":
/*!***************************************!*\
  !*** ./src/modules/getDataFromAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLikeFromAPI = async () => {\n  const getMeals = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');\n  return (await getMeals.json()).meals;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikeFromAPI);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/getDataFromAPI.js?");

/***/ }),

/***/ "./src/modules/homepageCounter.js":
/*!****************************************!*\
  !*** ./src/modules/homepageCounter.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homepageCounter = (items) => items.length;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepageCounter);\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/homepageCounter.js?");

/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikesFromAPI\": () => (/* binding */ getLikesFromAPI),\n/* harmony export */   \"addLikeToAPI\": () => (/* binding */ addLikeToAPI)\n/* harmony export */ });\nconst getLikesFromAPI = async () => {\n  const getLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes');\n  const json = await getLike.json();\n  return json;\n};\n\nconst addLikeToAPI = async (mealId) => {\n  const postLike = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WCK0EdtmUviPKWBbJC6l/likes', {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: mealId,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n  return postLike;\n};\n\n\n\n//# sourceURL=webpack://capstone-2-javascript/./src/modules/likes.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;