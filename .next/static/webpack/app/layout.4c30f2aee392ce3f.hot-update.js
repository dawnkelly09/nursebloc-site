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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_nursebloc_logo_vert_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/nursebloc-logo-vert.svg */ \"(app-pages-browser)/./public/nursebloc-logo-vert.svg\");\n/* harmony import */ var public_near_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! public/near-logo.svg */ \"(app-pages-browser)/./public/near-logo.svg\");\n/* harmony import */ var _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/wallets/wallet-selector */ \"(app-pages-browser)/./src/wallets/wallet-selector.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const { signedAccountId, logOut, logIn } = (0,_wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_6__.useWallet)();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{});\n    const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Loading...\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (signedAccountId) {\n            setAction(()=>logOut);\n            setLabel(\"Logout \".concat(signedAccountId));\n        } else {\n            setAction(()=>logIn);\n            setLabel(\"Login\");\n        }\n    }, [\n        signedAccountId,\n        logOut,\n        logIn,\n        setAction,\n        setLabel\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid nav-logo\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        priority: true,\n                        src: _public_nursebloc_logo_vert_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"Nursebloc\",\n                        width: \"258\",\n                        height: \"101\",\n                        className: \"d-inline-block align-text-top\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"icons-row\",\n                            children: \"TG icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"icons-row\",\n                            children: \"insta icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"icons-row\",\n                            children: \"X icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 37,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            children: \"Plans\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            children: \"Membership\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            children: \"Nurses\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 40,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-secondary\",\n                        onClick: action,\n                        children: [\n                            \" \",\n                            label,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navigation, \"Tt9A8D31PxLVYkdvg+/d9ej3D7I=\", false, function() {\n    return [\n        _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_6__.useWallet\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNlO0FBQ29CO0FBQ3BCO0FBQ1U7QUFDZjtBQUVoQyxNQUFNUSxhQUFhOztJQUV4QixNQUFNLEVBQUVDLGVBQWUsRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0wsbUVBQVNBO0lBQ3BELE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHViwrQ0FBUUEsQ0FBQyxLQUFRO0lBQzdDLE1BQU0sQ0FBQ1csT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJTyxpQkFBaUI7WUFDbkJJLFVBQVUsSUFBTUg7WUFDaEJLLFNBQVMsVUFBMEIsT0FBaEJOO1FBQ3JCLE9BQU87WUFDTEksVUFBVSxJQUFNRjtZQUNoQkksU0FBUztRQUNYO0lBQ0YsR0FBRztRQUFDTjtRQUFpQkM7UUFBUUM7UUFBT0U7UUFBV0U7S0FBUztJQUV4RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNoQixrREFBSUE7b0JBQUNrQixNQUFLO29CQUFJQyxRQUFRO29CQUFDQyxjQUFjOzhCQUNwQyw0RUFBQ3JCLG1EQUFLQTt3QkFBQ3NCLFFBQVE7d0JBQUNDLEtBQUtuQix1RUFBYUE7d0JBQUVvQixLQUFJO3dCQUFZQyxPQUFNO3dCQUFNQyxRQUFPO3dCQUFNVCxXQUFVOzs7Ozs7Ozs7Ozs4QkFFekYsOERBQUNDOztzQ0FDQyw4REFBQ2pCLGtEQUFJQTs0QkFBQ2tCLE1BQUs7NEJBQUdGLFdBQVU7c0NBQVk7Ozs7OztzQ0FDcEMsOERBQUNoQixrREFBSUE7NEJBQUNrQixNQUFLOzRCQUFHRixXQUFVO3NDQUFZOzs7Ozs7c0NBQ3BDLDhEQUFDaEIsa0RBQUlBOzRCQUFDa0IsTUFBSzs0QkFBR0YsV0FBVTtzQ0FBWTs7Ozs7Ozs7Ozs7OzhCQUV0Qyw4REFBQ0M7O3NDQUNELDhEQUFDakIsa0RBQUlBOzRCQUFDa0IsTUFBSztzQ0FBSTs7Ozs7O3NDQUNmLDhEQUFDbEIsa0RBQUlBOzRCQUFDa0IsTUFBSztzQ0FBRzs7Ozs7O3NDQUNkLDhEQUFDbEIsa0RBQUlBOzRCQUFDa0IsTUFBSztzQ0FBRzs7Ozs7O3NDQUNkLDhEQUFDbEIsa0RBQUlBOzRCQUFDa0IsTUFBSztzQ0FBRzs7Ozs7Ozs7Ozs7OzhCQUVkLDhEQUFDRDtvQkFBSUQsV0FBVTs4QkFDYiw0RUFBQ1U7d0JBQU9WLFdBQVU7d0JBQW9CVyxTQUFTaEI7OzRCQUFTOzRCQUFFRTs0QkFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUUsRUFBRTtHQXZDV047O1FBRWdDRiwrREFBU0E7OztLQUZ6Q0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcz9hOTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE51cnNlQmxvY0xvZ28gZnJvbSAnLi4vLi4vcHVibGljL251cnNlYmxvYy1sb2dvLXZlcnQuc3ZnJ1xuaW1wb3J0IE5lYXJMb2dvIGZyb20gJ3B1YmxpYy9uZWFyLWxvZ28uc3ZnJztcbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Avd2FsbGV0cy93YWxsZXQtc2VsZWN0b3InO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9hcHAvZ2xvYmFscy5jc3MnXG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuXG4gIGNvbnN0IHsgc2lnbmVkQWNjb3VudElkLCBsb2dPdXQsIGxvZ0luIH0gPSB1c2VXYWxsZXQoKTtcbiAgY29uc3QgW2FjdGlvbiwgc2V0QWN0aW9uXSA9IHVzZVN0YXRlKCgpID0+IHsgfSk7XG4gIGNvbnN0IFtsYWJlbCwgc2V0TGFiZWxdID0gdXNlU3RhdGUoJ0xvYWRpbmcuLi4nKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaWduZWRBY2NvdW50SWQpIHtcbiAgICAgIHNldEFjdGlvbigoKSA9PiBsb2dPdXQpO1xuICAgICAgc2V0TGFiZWwoYExvZ291dCAke3NpZ25lZEFjY291bnRJZH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QWN0aW9uKCgpID0+IGxvZ0luKTtcbiAgICAgIHNldExhYmVsKCdMb2dpbicpO1xuICAgIH1cbiAgfSwgW3NpZ25lZEFjY291bnRJZCwgbG9nT3V0LCBsb2dJbiwgc2V0QWN0aW9uLCBzZXRMYWJlbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbmF2LWxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICA8SW1hZ2UgcHJpb3JpdHkgc3JjPXtOdXJzZUJsb2NMb2dvfSBhbHQ9XCJOdXJzZWJsb2NcIiB3aWR0aD1cIjI1OFwiIGhlaWdodD1cIjEwMVwiIGNsYXNzTmFtZT1cImQtaW5saW5lLWJsb2NrIGFsaWduLXRleHQtdG9wXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIiBjbGFzc05hbWU9J2ljb25zLXJvdyc+VEcgaWNvbjwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiXCIgY2xhc3NOYW1lPSdpY29ucy1yb3cnPmluc3RhIGljb248L0xpbms+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIlwiIGNsYXNzTmFtZT0naWNvbnMtcm93Jz5YIGljb248L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiXCIgPkFib3V0PC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiXCI+UGxhbnM8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJcIj5NZW1iZXJzaGlwPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiXCI+TnVyc2VzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1uYXYnPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBvbkNsaWNrPXthY3Rpb259ID4ge2xhYmVsfSA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTnVyc2VCbG9jTG9nbyIsIk5lYXJMb2dvIiwidXNlV2FsbGV0Iiwic3R5bGVzIiwiTmF2aWdhdGlvbiIsInNpZ25lZEFjY291bnRJZCIsImxvZ091dCIsImxvZ0luIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwibGFiZWwiLCJzZXRMYWJlbCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJwYXNzSHJlZiIsImxlZ2FjeUJlaGF2aW9yIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navigation.js\n"));

/***/ })

});