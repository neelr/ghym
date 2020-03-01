webpackHotUpdate("static/development/pages/run.js",{

/***/ "./pages/run.js":
/*!**********************!*\
  !*** ./pages/run.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Run; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rebass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rebass */ "./node_modules/rebass/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _rebass_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @rebass/forms */ "./node_modules/@rebass/forms/dist/index.esm.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");








var _jsxFileName = "/Users/neelredkar/Documents/Git/ghym/pages/run.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








var Run = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Run, _React$Component);

  function Run() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Run);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Run)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      connect: __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Text"], {
        fontSize: "3",
        m: "10px",
        color: "red",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Disconnected \uD83D\uDC80"),
      id: "",
      console: ""
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Run, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
        flexDirection: "column",
        textAlign: "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, this.state.connect, __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Heading"], {
        fontSize: [5, 6],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Create A Job!"), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Flex"], {
        action: "javascript:void(0);",
        flexDirection: "column",
        width: ["80vw", "75vw"],
        m: "auto",
        as: "form",
        id: "form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        "for": "name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "Name"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_13__["Input"], {
        id: "name",
        name: "name",
        css: {
          borderRadius: "3px"
        },
        placeholder: "My Job 123",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        "for": "ram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Memory"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_13__["Select"], {
        id: "ram",
        name: "ram",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx("option", {
        value: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "1 GB"), __jsx("option", {
        value: "2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "2 GB"), __jsx("option", {
        value: "3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "3 GB"), __jsx("option", {
        value: "4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "4 GB"), __jsx("option", {
        value: "5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "5 GB"), __jsx("option", {
        value: "6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "6 GB"), __jsx("option", {
        value: "7",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "7 GB"), __jsx("option", {
        value: "8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "8 GB"), __jsx("option", {
        value: "9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "9 GB")), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_13__["Label"], {
        "for": "code",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "Code"), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_13__["Textarea"], {
        css: {
          borderRadius: "3px"
        },
        id: "code",
        name: "code",
        placeholder: "print(\"Hello World!\")",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), __jsx(react_dropzone__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onDrop: function onDrop(acceptedFiles) {
          return console.log(acceptedFiles);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps;
        return __jsx("section", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          style: {
            height: "50px",
            display: "flex",
            outlineColor: "grey",
            outlineWidth: "3px",
            outlineStyle: "dashed"
          }
        }, getRootProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), __jsx("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        })), __jsx("p", {
          style: {
            margin: "auto"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, "Drag 'n' drop some files here, or click to select files")));
      }), __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: function onClick() {
          axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("https://ghym-server.glitch.me/queue_job", {
            is_running: false,
            name: document.getElementById("name").value,
            id: _this2.state.id,
            ram: document.getElementById("ram").value,
            code: document.getElementById("code").value
          });
          document.getElementById('form').reset();
        },
        m: "10px",
        sx: {
          ":hover": {
            cursor: "pointer"
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, "Send Away!")), __jsx(_rebass_forms__WEBPACK_IMPORTED_MODULE_13__["Textarea"], {
        sx: {
          m: "auto",
          bg: "dark",
          width: ["80vw", "50vw"]
        },
        id: "console",
        placeholder: "Your console!",
        readOnly: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_12___default()("https://ghym-server.glitch.me/");
      socket.on("connect", function () {
        _this3.setState({
          connect: __jsx(rebass__WEBPACK_IMPORTED_MODULE_9__["Text"], {
            m: "10px",
            fontSize: "3",
            color: "green",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, "Connected \uD83D\uDD0C"),
          id: socket.id
        });
      });
      socket.on("done", function (d) {
        document.getElementById("console").value = "".concat(d.name, " has finished with the output: ").concat(d.out);
      });
    }
  }]);

  return Run;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=run.js.a6170e755c72af0de231.hot-update.js.map