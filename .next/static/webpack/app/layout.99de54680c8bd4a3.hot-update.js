"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/navigation.js":
/*!**************************************!*\
  !*** ./src/components/navigation.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_nursebloc_logo_vert_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/nursebloc-logo-vert.svg */ \"(app-pages-browser)/./public/nursebloc-logo-vert.svg\");\n/* harmony import */ var public_near_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/near-logo.svg */ \"(app-pages-browser)/./public/near-logo.svg\");\n/* harmony import */ var _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/wallets/wallet-selector */ \"(app-pages-browser)/./src/wallets/wallet-selector.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const { signedAccountId, logOut, logIn } = (0,_wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_6__.useWallet)();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{});\n    const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Loading...\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (signedAccountId) {\n            setAction(()=>logOut);\n            setLabel(\"Logout \".concat(signedAccountId));\n        } else {\n            setAction(()=>logIn);\n            setLabel(\"Login\");\n        }\n    }, [\n        signedAccountId,\n        logOut,\n        logIn,\n        setAction,\n        setLabel\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid nav\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        priority: true,\n                        src: _public_nursebloc_logo_vert_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"Nursebloc\",\n                        width: \"258\",\n                        height: \"101\",\n                        className: \"d-inline-block align-text-top\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav pt-1\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-secondary\",\n                        onClick: action,\n                        children: [\n                            \" \",\n                            label,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navigation, \"Tt9A8D31PxLVYkdvg+/d9ej3D7I=\", false, function() {\n    return [\n        _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_6__.useWallet\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNGO0FBQ2U7QUFDb0I7QUFDcEI7QUFDVTtBQUUvQyxNQUFNTyxhQUFhOztJQUV4QixNQUFNLEVBQUVDLGVBQWUsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0osbUVBQVNBO0lBQ3BELE1BQU0sQ0FBQ0ssUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFRO0lBQzdDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJTSxpQkFBaUI7WUFDbkJJLFVBQVUsSUFBTUg7WUFDaEJLLFNBQVMsVUFBMEIsT0FBaEJOO1FBQ3JCLE9BQU87WUFDTEksVUFBVSxJQUFNRjtZQUNoQkksU0FBUztRQUNYO0lBQ0YsR0FBRztRQUFDTjtRQUFpQkM7UUFBUUM7UUFBT0U7UUFBV0U7S0FBUztJQUV4RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNmLGtEQUFJQTtvQkFBQ2lCLE1BQUs7b0JBQUlDLFFBQVE7b0JBQUNDLGNBQWM7OEJBQ3BDLDRFQUFDcEIsbURBQUtBO3dCQUFDcUIsUUFBUTt3QkFBQ0MsS0FBS2xCLHVFQUFhQTt3QkFBRW1CLEtBQUk7d0JBQVlDLE9BQU07d0JBQU1DLFFBQU87d0JBQU1ULFdBQVU7Ozs7Ozs7Ozs7OzhCQUV6Riw4REFBQ0M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNVO3dCQUFPVixXQUFVO3dCQUFvQlcsU0FBU2hCOzs0QkFBUzs0QkFBRUU7NEJBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzFFLEVBQUU7R0E1QldOOztRQUVnQ0QsK0RBQVNBOzs7S0FGekNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanM/YTkwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOdXJzZUJsb2NMb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9udXJzZWJsb2MtbG9nby12ZXJ0LnN2ZydcbmltcG9ydCBOZWFyTG9nbyBmcm9tICdwdWJsaWMvbmVhci1sb2dvLnN2Zyc7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAL3dhbGxldHMvd2FsbGV0LXNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb24gPSAoKSA9PiB7XG5cbiAgY29uc3QgeyBzaWduZWRBY2NvdW50SWQsIGxvZ091dCwgbG9nSW4gfSA9IHVzZVdhbGxldCgpO1xuICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUoKCkgPT4geyB9KTtcbiAgY29uc3QgW2xhYmVsLCBzZXRMYWJlbF0gPSB1c2VTdGF0ZSgnTG9hZGluZy4uLicpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZ25lZEFjY291bnRJZCkge1xuICAgICAgc2V0QWN0aW9uKCgpID0+IGxvZ091dCk7XG4gICAgICBzZXRMYWJlbChgTG9nb3V0ICR7c2lnbmVkQWNjb3VudElkfWApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRBY3Rpb24oKCkgPT4gbG9nSW4pO1xuICAgICAgc2V0TGFiZWwoJ0xvZ2luJyk7XG4gICAgfVxuICB9LCBbc2lnbmVkQWNjb3VudElkLCBsb2dPdXQsIGxvZ0luLCBzZXRBY3Rpb24sIHNldExhYmVsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBuYXZcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICA8SW1hZ2UgcHJpb3JpdHkgc3JjPXtOdXJzZUJsb2NMb2dvfSBhbHQ9XCJOdXJzZWJsb2NcIiB3aWR0aD1cIjI1OFwiIGhlaWdodD1cIjEwMVwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRleHQtdG9wXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLW5hdiBwdC0xJz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17YWN0aW9ufSA+IHtsYWJlbH0gPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk51cnNlQmxvY0xvZ28iLCJOZWFyTG9nbyIsInVzZVdhbGxldCIsIk5hdmlnYXRpb24iLCJzaWduZWRBY2NvdW50SWQiLCJsb2dPdXQiLCJsb2dJbiIsImFjdGlvbiIsInNldEFjdGlvbiIsImxhYmVsIiwic2V0TGFiZWwiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciIsInByaW9yaXR5Iiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navigation.js\n"));

/***/ })

});