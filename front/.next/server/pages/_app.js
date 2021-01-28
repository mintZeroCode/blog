module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout/Add.js":
/*!**********************************!*\
  !*** ./components/layout/Add.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledComponents/layout/nav */ "./styledComponents/layout/nav.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\youngmin\\Desktop\\blog\\front\\components\\layout\\Add.js";





const Add = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_3__["AddDiv"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_3__["AddTitle"], {
      children: "\uCE74\uD14C\uACE0\uB9AC"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_3__["AddLink"], {
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`${_config_config__WEBPACK_IMPORTED_MODULE_4__["frontUrl"]}/javaScript`);
      },
      children: "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_3__["AddLink"], {
        children: "\uC54C\uACE0\uB9AC\uC998"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ }),

/***/ "./components/layout/Main.js":
/*!***********************************!*\
  !*** ./components/layout/Main.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styledComponents/layout/Main */ "./styledComponents/layout/Main.js");

var _jsxFileName = "C:\\Users\\youngmin\\Desktop\\blog\\front\\components\\layout\\Main.js";





const Main = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["Title"], {
      children: "\uBAA8\uB4E0\uAE00"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentBox"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentDate"], {
        children: "2020.6.20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentBox"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentDate"], {
        children: "2020.6.20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 2] this \uBC14\uC778\uB529"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 this\uC758 \uC4F0\uC784\uC0C8\uC5D0 \uB300\uD574 \uD559\uC2B5\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentBox"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentDate"], {
        children: "2020.6.20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentBox"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentDate"], {
        children: "2020.6.20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentBox"], {
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/javaScript/post_1");
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentDate"], {
        children: "2020.6.20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Main__WEBPACK_IMPORTED_MODULE_4__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/layout/Menu.js":
/*!***********************************!*\
  !*** ./components/layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledComponents_layout_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styledComponents/layout/Menu */ "./styledComponents/layout/Menu.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\youngmin\\Desktop\\blog\\front\\components\\layout\\Menu.js";





const Menu = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Menu__WEBPACK_IMPORTED_MODULE_3__["Div"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Menu__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        onClick: () => {
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`${_config_config__WEBPACK_IMPORTED_MODULE_4__["frontUrl"]}/javaScript`);
        },
        children: "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_Menu__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        children: "\uB124\uD2B8\uC6CC\uD06C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/layout/Nav.js":
/*!**********************************!*\
  !*** ./components/layout/Nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Add */ "./components/layout/Add.js");
/* harmony import */ var _styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styledComponents/layout/nav */ "./styledComponents/layout/nav.js");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\youngmin\\Desktop\\blog\\front\\components\\layout\\Nav.js";







const Nav = () => {
  const {
    0: showDiv,
    1: setShowDiv
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_4__["Div"], {
      children: [showDiv && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Add__WEBPACK_IMPORTED_MODULE_3__["default"], {
          showDiv: showDiv
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, undefined)
      }, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_4__["Logo"], {
        onClick: () => {
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`/frontUrl/`);
        },
        children: "Mint Code \uAE30\uC220 \uBE14\uB85C\uADF8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_layout_nav__WEBPACK_IMPORTED_MODULE_4__["AddMenu"], {
        onClick: () => {
          setShowDiv(!showDiv);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsList"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.frontUrl = "http://localhost:3000"; // exports.backUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://api.interfree.co.kr"
//     : "http://localhost:80";

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Nav */ "./components/layout/Nav.js");
/* harmony import */ var _components_layout_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Add */ "./components/layout/Add.js");
/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout/Menu */ "./components/layout/Menu.js");
/* harmony import */ var _components_layout_Main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/layout/Main */ "./components/layout/Main.js");


var _jsxFileName = "C:\\Users\\youngmin\\Desktop\\blog\\front\\pages\\_app.js";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        className: "jsx-1484730601",
        children: "interfree"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        charset: "utf-8",
        className: "jsx-1484730601"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "sns \uD3EC\uD2B8\uD3F4\uB9AC\uC624",
        className: "jsx-1484730601"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "keywords",
        content: "interfree, sns",
        className: "jsx-1484730601"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "author",
        content: "mintzerocode",
        className: "jsx-1484730601"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Nav__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1484730601",
      children: "@import url(\"https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@500&display=swap\");body{font-family:\"Hind Vadodara\",sans-serif;font-size:16px;font-weight:500;background-color:#f5f5f5;overflow-y:scroll;}a{cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xceW91bmdtaW5cXERlc2t0b3BcXGJsb2dcXGZyb250XFxwYWdlc1xcX2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQnlCLEFBR3NHLEFBQ25ELEFBT3pCLGVBQ2pCLHdCQVBpQixlQUNDLGdCQUNTLHlCQUNQLGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHlvdW5nbWluXFxEZXNrdG9wXFxibG9nXFxmcm9udFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L05hdlwiO1xyXG5pbXBvcnQgQWRkIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9BZGRcIjtcclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L01lbnVcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L01haW5cIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+aW50ZXJmcmVlPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJzbnMg7Y+s7Yq47Y+066as7JikXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiaW50ZXJmcmVlLCBzbnNcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwibWludHplcm9jb2RlXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2IC8+XHJcblxyXG4gICAgICA8TWVudSAvPlxyXG4gICAgICB7LyogPE1haW4gLz4gKi99XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGluZCtWYWRvZGFyYTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXBcIik7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIaW5kIFZhZG9kYXJhXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\youngmin\\\\Desktop\\\\blog\\\\front\\\\pages\\\\_app.js */"
    }, void 0, false, void 0, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      className: "jsx-1484730601" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styledComponents/layout/Main.js":
/*!*****************************************!*\
  !*** ./styledComponents/layout/Main.js ***!
  \*****************************************/
/*! exports provided: Title, ContentBox, ContentTitle, ContentDate, Hr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBox", function() { return ContentBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTitle", function() { return ContentTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentDate", function() { return ContentDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hr", function() { return Hr; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Title = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border: 1px solid #f0ffff;
  border-radius: 20px;
  // background-color: white;
  margin: 0px auto;
  margin-top: 60px;
  text-align: center;
  font-size: 60px;
  font-weight: 600;
  padding: 20px;
`;
const ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border: 1px solid #f0ffff;
  border-radius: 10px;
  // box-shadow: 1px 1px 2px 2px #ccc;
  // background-color: white;
  margin: 0px auto;
  margin-top: 10px;
  text-align: center;
  width: 50%;
  cursor: pointer;
  min-height: 150px;
`;
const ContentTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`;
const ContentDate = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.hr`
  margin: 0 auto;
  width: 70%;
`;

/***/ }),

/***/ "./styledComponents/layout/Menu.js":
/*!*****************************************!*\
  !*** ./styledComponents/layout/Menu.js ***!
  \*****************************************/
/*! exports provided: Div, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItem", function() { return MenuItem; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Div = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  padding: 0px;
  text-align: center;
  font-size: 30px;
  color: #6495ed;
  position: fixed;
  top: 85px;
  left: 0px;
  height: 100%;
  border-top: none;
  border-right: 1px solid #d9d9d9;
  z-index: 100;
  @media (max-width: 768px) {
    display: none;
  }
`;
const MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #6495ed;
  }
`;

/***/ }),

/***/ "./styledComponents/layout/nav.js":
/*!****************************************!*\
  !*** ./styledComponents/layout/nav.js ***!
  \****************************************/
/*! exports provided: Div, AddDiv, AddMenu, Logo, AddTitle, AddLink, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Div", function() { return Div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDiv", function() { return AddDiv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMenu", function() { return AddMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logo", function() { return Logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTitle", function() { return AddTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLink", function() { return AddLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Div = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  font-size: 30px;
  background: white;
  padding: 20px 0px;
`;
const AddDiv = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: fixed;
  top: 85px;
  right: 0px;
  height: 100%;
  width: 30%;
  background-color: #f0ffff;
  z-index: 1000;
`;
const AddMenu = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  position: fixed;

  top: 20px;
  right: 10px;
  margin-left: 30px @media (min-width: 768px) {
    display: none;
  }
`;
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  margin: 0px;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;
const AddTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;
const AddLink = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
  &:hover {
    border-bottom: 3px solid #6495ed;
  }
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.button`
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvQWRkLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0eWxlZENvbXBvbmVudHMvbGF5b3V0L01haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVkQ29tcG9uZW50cy9sYXlvdXQvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZWRDb21wb25lbnRzL2xheW91dC9uYXYuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiQWRkIiwiUm91dGVyIiwicHVzaCIsImZyb250VXJsIiwiTWFpbiIsIk1lbnUiLCJOYXYiLCJzaG93RGl2Iiwic2V0U2hvd0RpdiIsInVzZVN0YXRlIiwiZXhwb3J0cyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiVGl0bGUiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW50Qm94IiwiQ29udGVudFRpdGxlIiwiQ29udGVudERhdGUiLCJIciIsImhyIiwiRGl2IiwiTWVudUl0ZW0iLCJBZGREaXYiLCJBZGRNZW51IiwiTG9nbyIsIkFkZFRpdGxlIiwicCIsIkFkZExpbmsiLCJCdXR0b24iLCJidXR0b24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLE1BQU07QUFDaEIsc0JBQ0UscUVBQUMsbUVBQUQ7QUFBQSw0QkFDRSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkYsZUFHRSxxRUFBQyxvRUFBRDtBQUNFLGFBQU8sRUFBRSxNQUFNO0FBQ2JDLDBEQUFNLENBQUNDLElBQVAsQ0FBYSxHQUFFQyx1REFBUyxhQUF4QjtBQUNELE9BSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFVRTtBQUFBLDZCQUNFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQWpCRDs7QUFtQmVILGtFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBRUE7QUFFQTs7QUFRQSxNQUFNSSxJQUFJLEdBQUcsTUFBTTtBQUNqQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBR0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQUlFLHFFQUFDLHdFQUFEO0FBQUEsOEJBQ0UscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpGLGVBVUUscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFWRixlQVlFLHFFQUFDLHdFQUFEO0FBQUEsOEJBQ0UscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBa0JFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJGLGVBb0JFLHFFQUFDLHdFQUFEO0FBQUEsOEJBQ0UscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRixlQTBCRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRixlQTRCRSxxRUFBQyx3RUFBRDtBQUFBLDhCQUNFLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1QkYsZUFrQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQ0YsZUFvQ0UscUVBQUMsd0VBQUQ7QUFDRSxhQUFPLEVBQUUsTUFBTTtBQUNiSCwwREFBTSxDQUFDQyxJQUFQLENBQVksb0JBQVo7QUFDRCxPQUhIO0FBQUEsOEJBS0UscUVBQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRSxxRUFBQywwRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBDRixlQThDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtERCxDQW5ERDs7QUFxRGVFLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUEsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakIsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLDhCQUNFLHFFQUFDLHNFQUFEO0FBQ0UsZUFBTyxFQUFFLE1BQU07QUFDYkosNERBQU0sQ0FBQ0MsSUFBUCxDQUFhLEdBQUVDLHVEQUFTLGFBQXhCO0FBQ0QsU0FISDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVFFLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBY0QsQ0FmRDs7QUFpQmVFLG1FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBLE1BQU1DLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBRUEsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxnRUFBRDtBQUFBLGlCQUNHRixPQUFPLGlCQUNOO0FBQUEsK0JBQ0UscUVBQUMsNENBQUQ7QUFBSyxpQkFBTyxFQUFFQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFGSixlQU9FLHFFQUFDLGlFQUFEO0FBQ0UsZUFBTyxFQUFFLE1BQU07QUFDYk4sNERBQU0sQ0FBQ0MsSUFBUCxDQUFhLFlBQWI7QUFDRCxTQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBY0UscUVBQUMsb0VBQUQ7QUFDRSxlQUFPLEVBQUUsTUFBTTtBQUNiTSxvQkFBVSxDQUFDLENBQUNELE9BQUYsQ0FBVjtBQUNELFNBSEg7QUFBQSwrQkFLRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTBCRCxDQTdCRDs7QUErQmVELGtFQUFmLEU7Ozs7Ozs7Ozs7O0FDekNBSSxPQUFPLENBQUNQLFFBQVIsR0FBbUIsdUJBQW5CLEMsQ0FFQTtBQUNBO0FBQ0E7QUFDQSwrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNRLEtBQVQsQ0FBZTtBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBZixFQUF5QztBQUN2QyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxlQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUMsb0NBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQyxnQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKRixlQUtFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDLGNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFVRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUEsa0RBeUJFLHFFQUFDLFNBQUQsa0NBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6QkY7QUFBQSxrQkFERjtBQTZCRDs7QUFFY0Ysb0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1HLEtBQUssR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBSTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVZPO0FBWUEsTUFBTUMsVUFBVSxHQUFHRix3REFBTSxDQUFDQyxHQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FYTztBQWFBLE1BQU1FLFlBQVksR0FBR0gsd0RBQU0sQ0FBQ0MsR0FBSTtBQUN2QztBQUNBO0FBQ0E7QUFDQSxDQUpPO0FBTUEsTUFBTUcsV0FBVyxHQUFHSix3REFBTSxDQUFDQyxHQUFJO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLENBSk87QUFNQSxNQUFNSSxFQUFFLEdBQUdMLHdEQUFNLENBQUNNLEVBQUc7QUFDNUI7QUFDQTtBQUNBLENBSE8sQzs7Ozs7Ozs7Ozs7O0FDdkNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1DLEdBQUcsR0FBR1Asd0RBQU0sQ0FBQ0MsR0FBSTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWhCTztBQWtCQSxNQUFNTyxRQUFRLEdBQUdSLHdEQUFNLENBQUNDLEdBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBTk8sQzs7Ozs7Ozs7Ozs7O0FDcEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxNQUFNTSxHQUFHLEdBQUdQLHdEQUFNLENBQUNDLEdBQUk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBWk87QUFjQSxNQUFNUSxNQUFNLEdBQUdULHdEQUFNLENBQUNDLEdBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQVJPO0FBVUEsTUFBTVMsT0FBTyxHQUFHVix3REFBTSxDQUFDQyxHQUFJO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FSTztBQVVBLE1BQU1VLElBQUksR0FBR1gsd0RBQU0sQ0FBQ0MsR0FBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBZE87QUFnQkEsTUFBTVcsUUFBUSxHQUFHWix3REFBTSxDQUFDYSxDQUFFO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBaEJPO0FBaUJBLE1BQU1DLE9BQU8sR0FBR2Qsd0RBQU0sQ0FBQ2EsQ0FBRTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBakJPO0FBbUJBLE1BQU1FLE1BQU0sR0FBR2Ysd0RBQU0sQ0FBQ2dCLE1BQU87QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FoQk8sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RlAsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgQWRkRGl2LCBBZGRUaXRsZSwgQWRkTGluayB9IGZyb20gXCIuLi8uLi9zdHlsZWRDb21wb25lbnRzL2xheW91dC9uYXZcIjtcclxuaW1wb3J0IHsgZnJvbnRVcmwgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgQWRkID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QWRkRGl2PlxyXG4gICAgICA8QWRkVGl0bGU+7Lm07YWM6rOg66asPC9BZGRUaXRsZT5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxBZGRMaW5rXHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYCR7ZnJvbnRVcmx9L2phdmFTY3JpcHRgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAg7J6Q67CU7Iqk7YGs66a97Yq4XHJcbiAgICAgIDwvQWRkTGluaz5cclxuICAgICAgPGE+XHJcbiAgICAgICAgPEFkZExpbms+7JWM6rOg66as7KaYPC9BZGRMaW5rPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L0FkZERpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBmcm9udFVybCB9IGZyb20gXCIuLi8uLi9jb25maWcvY29uZmlnXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFRpdGxlLFxyXG4gIENvbnRlbnRCb3gsXHJcbiAgQ29udGVudFRpdGxlLFxyXG4gIENvbnRlbnREYXRlLFxyXG4gIEhyLFxyXG59IGZyb20gXCIuLi8uLi9zdHlsZWRDb21wb25lbnRzL2xheW91dC9NYWluXCI7XHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VGl0bGU+66qo65Og6riAPC9UaXRsZT5cclxuXHJcbiAgICAgIDxIciAvPlxyXG4gICAgICA8Q29udGVudEJveD5cclxuICAgICAgICA8Q29udGVudERhdGU+MjAyMC42LjIwPC9Db250ZW50RGF0ZT5cclxuICAgICAgICA8Q29udGVudFRpdGxlPlvsnpDrsJTsiqTtgazrpr3tirgg7KSR7JqUIOqwnOuFkCDsoJXrpqwgMV0g7Iqk7L2U7ZSEPC9Db250ZW50VGl0bGU+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg7J6Q67CU7Iqk7YGs66a97Yq4IOuzgOyImCDrspTsnITsl5Ag64yA7ZWY7JesIOyEpOuqhe2VqeuLiOuLpC5cclxuICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICA8SHIgLz5cclxuXHJcbiAgICAgIDxDb250ZW50Qm94PlxyXG4gICAgICAgIDxDb250ZW50RGF0ZT4yMDIwLjYuMjA8L0NvbnRlbnREYXRlPlxyXG4gICAgICAgIDxDb250ZW50VGl0bGU+W+yekOuwlOyKpO2BrOumve2KuCDspJHsmpQg6rCc64WQIOygleumrCAyXSB0aGlzIOuwlOyduOuUqTwvQ29udGVudFRpdGxlPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOyekOuwlOyKpO2BrOumve2KuCB0aGlz7J2YIOyTsOyehOyDiOyXkCDrjIDtlbQg7ZWZ7Iq17ZWp64uI64ukLlxyXG4gICAgICA8L0NvbnRlbnRCb3g+XHJcbiAgICAgIDxIciAvPlxyXG5cclxuICAgICAgPENvbnRlbnRCb3g+XHJcbiAgICAgICAgPENvbnRlbnREYXRlPjIwMjAuNi4yMDwvQ29udGVudERhdGU+XHJcbiAgICAgICAgPENvbnRlbnRUaXRsZT5b7J6Q67CU7Iqk7YGs66a97Yq4IOykkeyalCDqsJzrhZAg7KCV66asIDFdIOyKpOy9lO2UhDwvQ29udGVudFRpdGxlPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOyekOuwlOyKpO2BrOumve2KuCDrs4DsiJgg67KU7JyE7JeQIOuMgO2VmOyXrCDshKTrqoXtlanri4jri6QuXHJcbiAgICAgIDwvQ29udGVudEJveD5cclxuICAgICAgPEhyIC8+XHJcblxyXG4gICAgICA8Q29udGVudEJveD5cclxuICAgICAgICA8Q29udGVudERhdGU+MjAyMC42LjIwPC9Db250ZW50RGF0ZT5cclxuICAgICAgICA8Q29udGVudFRpdGxlPlvsnpDrsJTsiqTtgazrpr3tirgg7KSR7JqUIOqwnOuFkCDsoJXrpqwgMV0g7Iqk7L2U7ZSEPC9Db250ZW50VGl0bGU+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg7J6Q67CU7Iqk7YGs66a97Yq4IOuzgOyImCDrspTsnITsl5Ag64yA7ZWY7JesIOyEpOuqhe2VqeuLiOuLpC5cclxuICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICA8SHIgLz5cclxuXHJcbiAgICAgIDxDb250ZW50Qm94XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goXCIvamF2YVNjcmlwdC9wb3N0XzFcIik7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250ZW50RGF0ZT4yMDIwLjYuMjA8L0NvbnRlbnREYXRlPlxyXG4gICAgICAgIDxDb250ZW50VGl0bGU+W+yekOuwlOyKpO2BrOumve2KuCDspJHsmpQg6rCc64WQIOygleumrCAxXSDsiqTsvZTtlIQ8L0NvbnRlbnRUaXRsZT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDsnpDrsJTsiqTtgazrpr3tirgg67OA7IiYIOuylOychOyXkCDrjIDtlZjsl6wg7ISk66qF7ZWp64uI64ukLlxyXG4gICAgICA8L0NvbnRlbnRCb3g+XHJcbiAgICAgIDxIciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IERpdiwgTWVudUl0ZW0gfSBmcm9tIFwiLi4vLi4vc3R5bGVkQ29tcG9uZW50cy9sYXlvdXQvTWVudVwiO1xyXG5cclxuaW1wb3J0IHsgZnJvbnRVcmwgfSBmcm9tIFwiLi4vLi4vY29uZmlnL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgTWVudSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPERpdj5cclxuICAgICAgICA8TWVudUl0ZW1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goYCR7ZnJvbnRVcmx9L2phdmFTY3JpcHRgKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg7J6Q67CU7Iqk7YGs66a97Yq4XHJcbiAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICA8TWVudUl0ZW0+64Sk7Yq47JuM7YGsPC9NZW51SXRlbT5cclxuICAgICAgPC9EaXY+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgQWRkIGZyb20gXCIuL0FkZFwiO1xyXG5cclxuaW1wb3J0IHsgRGl2LCBBZGRNZW51LCBMb2dvIH0gZnJvbSBcIi4uLy4uL3N0eWxlZENvbXBvbmVudHMvbGF5b3V0L25hdlwiO1xyXG5pbXBvcnQgeyBCc0xpc3QgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcclxuXHJcbmltcG9ydCB7IGZyb250VXJsIH0gZnJvbSBcIi4uLy4uL2NvbmZpZy9jb25maWdcIjtcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IHtcclxuICBjb25zdCBbc2hvd0Rpdiwgc2V0U2hvd0Rpdl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8RGl2PlxyXG4gICAgICAgIHtzaG93RGl2ICYmIChcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxBZGQgc2hvd0Rpdj17c2hvd0Rpdn0gLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxMb2dvXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKGAvZnJvbnRVcmwvYCk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE1pbnQgQ29kZSDquLDsiKAg67iU66Gc6re4XHJcbiAgICAgICAgPC9Mb2dvPlxyXG4gICAgICAgIDxBZGRNZW51XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNob3dEaXYoIXNob3dEaXYpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8QnNMaXN0IC8+XHJcbiAgICAgICAgPC9BZGRNZW51PlxyXG4gICAgICA8L0Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImV4cG9ydHMuZnJvbnRVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuLy8gZXhwb3J0cy5iYWNrVXJsID1cclxuLy8gICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuLy8gICAgID8gXCJodHRwczovL2FwaS5pbnRlcmZyZWUuY28ua3JcIlxyXG4vLyAgICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6ODBcIjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcblxyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9OYXZcIjtcclxuaW1wb3J0IEFkZCBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvQWRkXCI7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NZW51XCI7XHJcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NYWluXCI7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPmludGVyZnJlZTwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwic25zIO2PrO2KuO2PtOumrOyYpFwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cImludGVyZnJlZSwgc25zXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIm1pbnR6ZXJvY29kZVwiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5hdiAvPlxyXG5cclxuICAgICAgPE1lbnUgLz5cclxuICAgICAgey8qIDxNYWluIC8+ICovfVxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhpbmQrVmFkb2RhcmE6d2dodEA1MDAmZGlzcGxheT1zd2FwXCIpO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSGluZCBWYWRvZGFyYVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50Qm94ID0gc3R5bGVkLmRpdmBcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjBmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gYm94LXNoYWRvdzogMXB4IDFweCAycHggMnB4ICNjY2M7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtaW4taGVpZ2h0OiAxNTBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50RGF0ZSA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHdpZHRoOiA3MCU7XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgY29sb3I6ICM2NDk1ZWQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogODVweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51SXRlbSA9IHN0eWxlZC5kaXZgXHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzY0OTVlZDtcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGl2ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBBZGREaXYgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDg1cHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmZmZmO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkTWVudSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG5cclxuICB0b3A6IDIwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHggQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMjkwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQWRkVGl0bGUgPSBzdHlsZWQucGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDI5MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgQWRkTGluayA9IHN0eWxlZC5wYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMjkwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzY0OTVlZDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDI5MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG5gO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==