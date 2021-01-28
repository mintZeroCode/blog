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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./styledComponents/layout/nav.js

const Div = external_styled_components_default.a.div`
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
const AddDiv = external_styled_components_default.a.div`
  position: fixed;
  top: 85px;
  right: 0px;
  height: 100%;
  width: 30%;
  background-color: #f0ffff;
  z-index: 1000;
`;
const AddMenu = external_styled_components_default.a.div`
  position: fixed;

  top: 20px;
  right: 10px;
  margin-left: 30px @media (min-width: 768px) {
    display: none;
  }
`;
const Logo = external_styled_components_default.a.div`
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
const AddTitle = external_styled_components_default.a.p`
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
const AddLink = external_styled_components_default.a.p`
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
const Button = external_styled_components_default.a.button`
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
// EXTERNAL MODULE: ./config/config.js
var config = __webpack_require__("OcYQ");

// CONCATENATED MODULE: ./components/layout/Add.js







const Add = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(AddDiv, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AddTitle, {
      children: "\uCE74\uD14C\uACE0\uB9AC"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("hr", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AddLink, {
      onClick: () => {
        router_default.a.push(`${config["frontUrl"]}/javaScript`);
      },
      children: "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(AddLink, {
        children: "\uC54C\uACE0\uB9AC\uC998"
      })
    })]
  });
};

/* harmony default export */ var layout_Add = (Add);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__("7v8O");

// CONCATENATED MODULE: ./components/layout/Nav.js










const Nav = () => {
  const {
    0: showDiv,
    1: setShowDiv
  } = Object(external_react_["useState"])(false);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Div, {
      children: [showDiv && /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_Add, {
          showDiv: showDiv
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {
        onClick: () => {
          router_default.a.push(`/frontUrl/`);
        },
        children: "Mint Code \uAE30\uC220 \uBE14\uB85C\uADF8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AddMenu, {
        onClick: () => {
          setShowDiv(!showDiv);
        },
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(bs_["BsList"], {})
      })]
    })
  });
};

/* harmony default export */ var layout_Nav = (Nav);
// CONCATENATED MODULE: ./styledComponents/layout/Menu.js

const Menu_Div = external_styled_components_default.a.div`
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
const MenuItem = external_styled_components_default.a.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid #6495ed;
  }
`;
// CONCATENATED MODULE: ./components/layout/Menu.js








const Menu = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Menu_Div, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem, {
        onClick: () => {
          router_default.a.push(`${config["frontUrl"]}/javaScript`);
        },
        children: "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MenuItem, {
        children: "\uB124\uD2B8\uC6CC\uD06C"
      })]
    })
  });
};

/* harmony default export */ var layout_Menu = (Menu);
// CONCATENATED MODULE: ./styledComponents/layout/Main.js

const Title = external_styled_components_default.a.div`
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
const ContentBox = external_styled_components_default.a.div`
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
const ContentTitle = external_styled_components_default.a.div`
  text-align: center;
  font-size: 35px;
  font-weight: 600;
`;
const ContentDate = external_styled_components_default.a.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
`;
const Hr = external_styled_components_default.a.hr`
  margin: 0 auto;
  width: 70%;
`;
// CONCATENATED MODULE: ./components/layout/Main.js







const Main = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Title, {
      children: "\uBAA8\uB4E0\uAE00"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hr, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentBox, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentDate, {
        children: "2020.6.20"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentTitle, {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hr, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentBox, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentDate, {
        children: "2020.6.20"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentTitle, {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 2] this \uBC14\uC778\uB529"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 this\uC758 \uC4F0\uC784\uC0C8\uC5D0 \uB300\uD574 \uD559\uC2B5\uD569\uB2C8\uB2E4."]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hr, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentBox, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentDate, {
        children: "2020.6.20"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentTitle, {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hr, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentBox, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentDate, {
        children: "2020.6.20"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentTitle, {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hr, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(ContentBox, {
      onClick: () => {
        router_default.a.push("/javaScript/post_1");
      },
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentDate, {
        children: "2020.6.20"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ContentTitle, {
        children: "[\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC911\uC694 \uAC1C\uB150 \uC815\uB9AC 1] \uC2A4\uCF54\uD504"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uBCC0\uC218 \uBC94\uC704\uC5D0 \uB300\uD558\uC5EC \uC124\uBA85\uD569\uB2C8\uB2E4."]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Hr, {})]
  });
};

/* harmony default export */ var layout_Main = (Main);
// CONCATENATED MODULE: ./pages/_app.js





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        className: "jsx-1484730601",
        children: "interfree"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        charset: "utf-8",
        className: "jsx-1484730601"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "sns \uD3EC\uD2B8\uD3F4\uB9AC\uC624",
        className: "jsx-1484730601"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "keywords",
        content: "interfree, sns",
        className: "jsx-1484730601"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "author",
        content: "mintzerocode",
        className: "jsx-1484730601"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_Nav, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(layout_Menu, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(style_default.a, {
      id: "1484730601",
      children: ["@import url(\"https://fonts.googleapis.com/css2?family=Hind+Vadodara:wght@500&display=swap\");body{font-family:\"Hind Vadodara\",sans-serif;font-size:16px;font-weight:500;background-color:#f5f5f5;overflow-y:scroll;}", "a{cursor:pointer;}"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
      className: "jsx-1484730601" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
    }))]
  });
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7v8O":
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "OcYQ":
/***/ (function(module, exports) {

exports.frontUrl = "http://localhost:3000"; // exports.backUrl =
//   process.env.NODE_ENV === "production"
//     ? "https://api.interfree.co.kr"
//     : "http://localhost:80";

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });