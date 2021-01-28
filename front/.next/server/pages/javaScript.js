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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/javaScript.js");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/javaScript.js":
/*!*****************************!*\
  !*** ./pages/javaScript.js ***!
  \*****************************/
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
/* harmony import */ var _styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styledComponents/pages/javaScript */ "./styledComponents/pages/javaScript.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/config */ "./config/config.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_config_config__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\youngmin\\Desktop\\blog\\front\\pages\\javaScript.js";





const javaScript = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      paddingTop: "30px"
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["Title"], {
      children: "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentBox"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentDate"], {
        children: "2020.6.20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentBox"], {
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`${_config_config__WEBPACK_IMPORTED_MODULE_4__["frontUrl"]}/javaScript/post_4`);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentDate"], {
        children: "2020. 8. 19"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 4]\uD568\uC218\uC758 prototype \uAE30\uB2A5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 this\uC758 \uC4F0\uC784\uC0C8\uC5D0 \uB300\uD574 \uD559\uC2B5\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentBox"], {
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`${_config_config__WEBPACK_IMPORTED_MODULE_4__["frontUrl"]}/javaScript/post_3`);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentDate"], {
        children: " 2020. 8. 13"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 3]\uAE30\uBCF8\uB370\uC774\uD130 \uD0C0\uC785\uC758 prototype \uAE30\uB2A5"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentBox"], {
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`${_config_config__WEBPACK_IMPORTED_MODULE_4__["frontUrl"]}/javaScript/post_2`);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentDate"], {
        children: "2020.08.05"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 2] this \uBC14\uC778\uB529"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentBox"], {
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push(`${_config_config__WEBPACK_IMPORTED_MODULE_4__["frontUrl"]}/javaScript/post_1`);
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentDate"], {
        children: "2020.07.13"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["ContentTitle"], {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_styledComponents_pages_javaScript__WEBPACK_IMPORTED_MODULE_3__["Hr"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (javaScript);

/***/ }),

/***/ "./styledComponents/pages/javaScript.js":
/*!**********************************************!*\
  !*** ./styledComponents/pages/javaScript.js ***!
  \**********************************************/
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
  border-radius: 20px;
  margin: 0px auto;
  margin-top: 60px;
  text-align: center;
  width: 30%;
  font-size: 60px;
  font-weight: 600;
  padding: 20px;

  @media (max-width: 1135px) {
    font-size: 53px;
  }
  @media (max-width: 1100px) {
    font-size: 50px;
  }
  @media (max-width: 1020px) {
    font-size: 38px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 430px) {
    font-size: 18px;
  }
  @media (max-width: 290px) {
    font-size: 15px;
  }
`;
const ContentBox = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  border: 1px solid #f0ffff;
  border-radius: 10px;
  // box-shadow: 1px 1px 2px 2px #ccc;
  // background-color: white;
  margin: 0px auto;
  margin-top: 10px;

  text-align: center;
  width: 60%;
  cursor: pointer;
  min-height: 120px;
  @media (max-width: 1135px) {
    width: 100%;
  }
`;
const ContentTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  font-size: 35px;
  font-weight: 600;

  @media (max-width: 1135px) {
    font-size: 30px;
  }
  @media (max-width: 1100px) {
    font-size: 26px;
  }
  @media (max-width: 1020px) {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
  @media (max-width: 430px) {
    font-size: 16px;
  }
`;
const ContentDate = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 1135px) {
    font-size: 18px;
  }
  @media (max-width: 1100px) {
    font-size: 17px;
  }
  @media (max-width: 1020px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 430px) {
    font-size: 14px;
  }
`;
const Hr = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.hr`
  margin: 0 auto;

  @media (max-width: 1135px) {
    width: 100%;
  }
`;

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uZmlnL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9qYXZhU2NyaXB0LmpzIiwid2VicGFjazovLy8uL3N0eWxlZENvbXBvbmVudHMvcGFnZXMvamF2YVNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJleHBvcnRzIiwiZnJvbnRVcmwiLCJqYXZhU2NyaXB0IiwicGFkZGluZ1RvcCIsIlJvdXRlciIsInB1c2giLCJUaXRsZSIsInN0eWxlZCIsImRpdiIsIkNvbnRlbnRCb3giLCJDb250ZW50VGl0bGUiLCJDb250ZW50RGF0ZSIsIkhyIiwiaHIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtR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Ozs7OztBQzdGUCx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSw4QyIsImZpbGUiOiJwYWdlcy9qYXZhU2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9qYXZhU2NyaXB0LmpzXCIpO1xuIiwiZXhwb3J0cy5mcm9udFVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDozMDAwXCI7XHJcblxyXG4vLyBleHBvcnRzLmJhY2tVcmwgPVxyXG4vLyAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4vLyAgICAgPyBcImh0dHBzOi8vYXBpLmludGVyZnJlZS5jby5rclwiXHJcbi8vICAgICA6IFwiaHR0cDovL2xvY2FsaG9zdDo4MFwiO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIFRpdGxlLFxyXG4gIENvbnRlbnRCb3gsXHJcbiAgQ29udGVudFRpdGxlLFxyXG4gIENvbnRlbnREYXRlLFxyXG4gIEhyLFxyXG59IGZyb20gXCIuLi9zdHlsZWRDb21wb25lbnRzL3BhZ2VzL2phdmFTY3JpcHRcIjtcclxuXHJcbmltcG9ydCB7IGZyb250VXJsIH0gZnJvbSBcIi4uL2NvbmZpZy9jb25maWdcIjtcclxuXHJcbmNvbnN0IGphdmFTY3JpcHQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgc3R5bGU9e3tcclxuICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAgPFRpdGxlPuyekOuwlOyKpO2BrOumve2KuDwvVGl0bGU+XHJcbiAgICAgIDxIciAvPlxyXG4gICAgICA8Q29udGVudEJveD5cclxuICAgICAgICA8Q29udGVudERhdGU+MjAyMC42LjIwPC9Db250ZW50RGF0ZT5cclxuICAgICAgICA8Q29udGVudFRpdGxlPlvsnpDrsJTsiqTtgazrpr3tirgg7KSR7JqUIOqwnOuFkCDsoJXrpqwgMV0g7Iqk7L2U7ZSEPC9Db250ZW50VGl0bGU+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAg7J6Q67CU7Iqk7YGs66a97Yq4IOuzgOyImCDrspTsnITsl5Ag64yA7ZWY7JesIOyEpOuqhe2VqeuLiOuLpC5cclxuICAgICAgPC9Db250ZW50Qm94PlxyXG4gICAgICA8SHIgLz5cclxuXHJcbiAgICAgIDxDb250ZW50Qm94XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goYCR7ZnJvbnRVcmx9L2phdmFTY3JpcHQvcG9zdF80YCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxDb250ZW50RGF0ZT4yMDIwLiA4LiAxOTwvQ29udGVudERhdGU+XHJcbiAgICAgICAgPENvbnRlbnRUaXRsZT5cclxuICAgICAgICAgIFvsnpDrsJTsiqTtgazrpr3tirgg7KSR7JqUIOqwnOuFkCDsoJXrpqwgNF3tlajsiJjsnZggcHJvdG90eXBlIOq4sOuKpVxyXG4gICAgICAgIDwvQ29udGVudFRpdGxlPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOyekOuwlOyKpO2BrOumve2KuCB0aGlz7J2YIOyTsOyehOyDiOyXkCDrjIDtlbQg7ZWZ7Iq17ZWp64uI64ukLlxyXG4gICAgICA8L0NvbnRlbnRCb3g+XHJcbiAgICAgIDxIciAvPlxyXG5cclxuICAgICAgPENvbnRlbnRCb3hcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgJHtmcm9udFVybH0vamF2YVNjcmlwdC9wb3N0XzNgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRlbnREYXRlPiAyMDIwLiA4LiAxMzwvQ29udGVudERhdGU+XHJcbiAgICAgICAgPENvbnRlbnRUaXRsZT5cclxuICAgICAgICAgIFvsnpDrsJTsiqTtgazrpr3tirgg7KSR7JqUIOqwnOuFkCDsoJXrpqwgM13quLDrs7jrjbDsnbTthLAg7YOA7J6F7J2YIHByb3RvdHlwZSDquLDriqVcclxuICAgICAgICA8L0NvbnRlbnRUaXRsZT5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICDsnpDrsJTsiqTtgazrpr3tirgg67OA7IiYIOuylOychOyXkCDrjIDtlZjsl6wg7ISk66qF7ZWp64uI64ukLlxyXG4gICAgICA8L0NvbnRlbnRCb3g+XHJcbiAgICAgIDxIciAvPlxyXG5cclxuICAgICAgPENvbnRlbnRCb3hcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBSb3V0ZXIucHVzaChgJHtmcm9udFVybH0vamF2YVNjcmlwdC9wb3N0XzJgKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENvbnRlbnREYXRlPjIwMjAuMDguMDU8L0NvbnRlbnREYXRlPlxyXG4gICAgICAgIDxDb250ZW50VGl0bGU+W+yekOuwlOyKpO2BrOumve2KuCDspJHsmpQg6rCc64WQIOygleumrCAyXSB0aGlzIOuwlOyduOuUqTwvQ29udGVudFRpdGxlPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOyekOuwlOyKpO2BrOumve2KuCDrs4DsiJgg67KU7JyE7JeQIOuMgO2VmOyXrCDshKTrqoXtlanri4jri6QuXHJcbiAgICAgIDwvQ29udGVudEJveD5cclxuICAgICAgPEhyIC8+XHJcblxyXG4gICAgICA8Q29udGVudEJveFxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIFJvdXRlci5wdXNoKGAke2Zyb250VXJsfS9qYXZhU2NyaXB0L3Bvc3RfMWApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q29udGVudERhdGU+MjAyMC4wNy4xMzwvQ29udGVudERhdGU+XHJcbiAgICAgICAgPENvbnRlbnRUaXRsZT5b7J6Q67CU7Iqk7YGs66a97Yq4IOykkeyalCDqsJzrhZAg7KCV66asIDFdIOyKpOy9lO2UhDwvQ29udGVudFRpdGxlPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIOyekOuwlOyKpO2BrOumve2KuCDrs4DsiJgg67KU7JyE7JeQIOuMgO2VmOyXrCDshKTrqoXtlanri4jri6QuXHJcbiAgICAgIDwvQ29udGVudEJveD5cclxuICAgICAgPEhyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgamF2YVNjcmlwdDtcclxuIiwiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaXRsZSA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgZm9udC1zaXplOiA2MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMzVweCkge1xyXG4gICAgZm9udC1zaXplOiA1M3B4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMzhweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMjkwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVudEJveCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YwZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjY2NjO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEyMHB4O1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTM1cHgpIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50VGl0bGUgPSBzdHlsZWQuZGl2YFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDExMzVweCkge1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0MzBweCkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZW50RGF0ZSA9IHN0eWxlZC5kaXZgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTEzNXB4KSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IEhyID0gc3R5bGVkLmhyYFxyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogMTEzNXB4KSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbmA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9