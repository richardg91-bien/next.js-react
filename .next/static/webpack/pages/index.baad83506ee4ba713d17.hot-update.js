webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Users.js":
/*!*****************************!*\
  !*** ./components/Users.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ricardo gozles\\Desktop\\nextproject\\components\\Users.js",
    _this = undefined;



var Users = function Users(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list-group",
      children: props.users.map(function (user) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: "list-group-item  list-group-item-action d-flex justify-content-between align=items=center ",
          onClick: function onClick() {
            return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/users/[id]", "/users/$(user.id}");
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
              children: [user.id, ". ", user.first_name, " ", user.last_name]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 10,
              columnNumber: 21
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Email: ", user.email]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 21
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 9,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: user.avatar,
            alt: user.first_name + user.last_name,
            style: {
              borderRadius: "50%"
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 17
          }, _this)]
        }, user.id, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, _this);
};

_c = Users;
/* harmony default export */ __webpack_exports__["default"] = (Users);

var _c;

$RefreshReg$(_c, "Users");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2Vycy5qcyJdLCJuYW1lcyI6WyJVc2VycyIsInByb3BzIiwidXNlcnMiLCJtYXAiLCJ1c2VyIiwiUm91dGVyIiwicHVzaCIsImlkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiYm9yZGVyUmFkaXVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUN6QixzQkFDSTtBQUFBLDJCQUNBO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQSxnQkFDS0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLDRCQUVUO0FBQUksbUJBQVMsRUFBQyw0RkFBZDtBQUF5SCxpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLGtEQUFNLENBQUNDLElBQVAsQ0FBYSxhQUFiLEVBQTRCLG1CQUE1QixDQUFOO0FBQUEsV0FBbEk7QUFBQSxrQ0FDQTtBQUFBLG9DQUNJO0FBQUEseUJBQUtGLElBQUksQ0FBQ0csRUFBVixRQUFnQkgsSUFBSSxDQUFDSSxVQUFyQixPQUFrQ0osSUFBSSxDQUFDSyxTQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFBLG9DQUFXTCxJQUFJLENBQUNNLEtBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFLQTtBQUFLLGVBQUcsRUFBRU4sSUFBSSxDQUFDTyxNQUFmO0FBQ0EsZUFBRyxFQUFFUCxJQUFJLENBQUNJLFVBQUwsR0FBa0JKLElBQUksQ0FBQ0ssU0FENUI7QUFFQSxpQkFBSyxFQUFFO0FBQUVHLDBCQUFZLEVBQUU7QUFBaEI7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxBO0FBQUEsV0FBZ0hSLElBQUksQ0FBQ0csRUFBckg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGUztBQUFBLE9BQWhCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1CQyxDQXBCRDs7S0FBTVAsSztBQXNCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmFhZDgzNTA2ZWU0YmE3MTNkMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmNvbnN0IFVzZXJzID0gKHByb3BzKSA9PiB7XHJcbnJldHVybiAoXHJcbiAgICA8ZGl2PiAgICAgICAgXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxyXG4gICAgICAgIHtwcm9wcy51c2Vycy5tYXAoKHVzZXIpICA9PiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbSAgbGlzdC1ncm91cC1pdGVtLWFjdGlvbiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ249aXRlbXM9Y2VudGVyIFwiIGtleT17dXNlci5pZH0gb25DbGljaz17KCkgPT4gUm91dGVyLnB1c2goIFwiL3VzZXJzL1tpZF1cIiwgXCIvdXNlcnMvJCh1c2VyLmlkfVwiKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aDU+e3VzZXIuaWR9LiB7dXNlci5maXJzdF9uYW1lfSB7dXNlci5sYXN0X25hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbDoge3VzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dXNlci5hdmF0YXJ9IFxyXG4gICAgICAgICAgICAgICAgYWx0PXt1c2VyLmZpcnN0X25hbWUgKyB1c2VyLmxhc3RfbmFtZX0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiNTAlXCIgfX0gLz4gICAgXHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX0gIFxyXG4gICAgPC91bD4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==