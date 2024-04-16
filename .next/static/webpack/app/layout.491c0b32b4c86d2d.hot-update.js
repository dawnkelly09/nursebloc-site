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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Navigation: function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_nursebloc_hor_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/nursebloc-hor.png */ \"(app-pages-browser)/./public/nursebloc-hor.png\");\n/* harmony import */ var _public_tg_purple_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/tg-purple.svg */ \"(app-pages-browser)/./public/tg-purple.svg\");\n/* harmony import */ var _public_insta_purple_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/insta-purple.svg */ \"(app-pages-browser)/./public/insta-purple.svg\");\n/* harmony import */ var _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/wallets/wallet-selector */ \"(app-pages-browser)/./src/wallets/wallet-selector.js\");\n/* harmony import */ var _app_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _dynamic_labs_sdk_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @dynamic-labs/sdk-react-core */ \"(app-pages-browser)/./node_modules/@dynamic-labs/sdk-react-core/src/index.js\");\n/* harmony import */ var _dynamic_labs_ethereum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @dynamic-labs/ethereum */ \"(app-pages-browser)/./node_modules/@dynamic-labs/ethereum/src/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n//***NEAR wallet */\n\n\n//Dynamic xyz imports\n\n\nconst Navigation = ()=>{\n    _s();\n    //***NEAR wallet***\n    const { signedAccountId, logOut, logIn } = (0,_wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_7__.useWallet)();\n    const [action, setAction] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(()=>{});\n    const [label, setLabel] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Loading...\");\n    //how label should appear on NEAR login/out button\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (signedAccountId) {\n            setAction(()=>logOut);\n            setLabel(\"Logout NEAR \".concat(signedAccountId));\n        } else {\n            setAction(()=>logIn);\n            setLabel(\"Login NEAR\");\n        }\n    }, [\n        signedAccountId,\n        logOut,\n        logIn,\n        setAction,\n        setLabel\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"navbar navbar-expand-lg\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid nav-logo\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    legacyBehavior: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        priority: true,\n                        src: _public_nursebloc_hor_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"Nursebloc\",\n                        height: \"80\"\n                    }, void 0, false, {\n                        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"icons-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                priority: true,\n                                src: _public_tg_purple_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                height: 20,\n                                alt: \"telegram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"icons-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                priority: true,\n                                src: _public_insta_purple_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                height: 20,\n                                alt: \"telegram\"\n                            }, void 0, false, {\n                                fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"icons-row\",\n                            children: \"X icon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"links-row\",\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 46,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"links-row\",\n                            children: \"Plans\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 47,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"links-row\",\n                            children: \"Membership\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 48,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"\",\n                            className: \"links-row\",\n                            children: \"Nurses\"\n                        }, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 49,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-secondary\",\n                        onClick: action,\n                        children: [\n                            \" \",\n                            label,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"navbar-nav\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dynamic_labs_sdk_react_core__WEBPACK_IMPORTED_MODULE_9__.DynamicContextProvider, {\n                        settings: {\n                            environmentId: \"083f7686-ea77-41da-9929-5a0fc0abbc47\",\n                            walletConnectors: [\n                                _dynamic_labs_ethereum__WEBPACK_IMPORTED_MODULE_10__.EthereumWalletConnectors\n                            ]\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dynamic_labs_sdk_react_core__WEBPACK_IMPORTED_MODULE_9__.DynamicWidget, {}, void 0, false, {\n                            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/dawnkelly/Documents/Nursebloc/nursebloc-site/src/components/navigation.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navigation, \"Tt9A8D31PxLVYkdvg+/d9ej3D7I=\", false, function() {\n    return [\n        _wallets_wallet_selector__WEBPACK_IMPORTED_MODULE_7__.useWallet\n    ];\n});\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDRjtBQUNlO0FBQ2M7QUFDZjtBQUNNO0FBQ2pELG1CQUFtQjtBQUNtQztBQUNmO0FBQ3ZDLHFCQUFxQjtBQUNnRTtBQUNuQjtBQUUzRCxNQUFNWSxhQUFhOztJQUMxQixtQkFBbUI7SUFDakIsTUFBTSxFQUFFQyxlQUFlLEVBQUVDLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdSLG1FQUFTQTtJQUNwRCxNQUFNLENBQUNTLFFBQVFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUMsS0FBUTtJQUM3QyxNQUFNLENBQUNlLE9BQU9DLFNBQVMsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ25DLGtEQUFrRDtJQUNsREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJVyxpQkFBaUI7WUFDbkJJLFVBQVUsSUFBTUg7WUFDaEJLLFNBQVMsZUFBK0IsT0FBaEJOO1FBQzFCLE9BQU87WUFDTEksVUFBVSxJQUFNRjtZQUNoQkksU0FBUztRQUNYO0lBQ0YsR0FBRztRQUFDTjtRQUFpQkM7UUFBUUM7UUFBT0U7UUFBV0U7S0FBUztJQUV4RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNwQixrREFBSUE7b0JBQUNzQixNQUFLO29CQUFJQyxRQUFRO29CQUFDQyxjQUFjOzhCQUNwQyw0RUFBQ3pCLG1EQUFLQTt3QkFBQzBCLFFBQVE7d0JBQUNDLEtBQUt2QixpRUFBYUE7d0JBQUV3QixLQUFJO3dCQUFZQyxRQUFPOzs7Ozs7Ozs7Ozs4QkFFN0QsOERBQUNQOztzQ0FDQyw4REFBQ3JCLGtEQUFJQTs0QkFBQ3NCLE1BQUs7NEJBQUdGLFdBQVU7c0NBQ3RCLDRFQUFDckIsbURBQUtBO2dDQUFDMEIsUUFBUTtnQ0FBQ0MsS0FBS3RCLDZEQUFFQTtnQ0FBRXdCLFFBQVE7Z0NBQUlELEtBQUk7Ozs7Ozs7Ozs7O3NDQUUzQyw4REFBQzNCLGtEQUFJQTs0QkFBQ3NCLE1BQUs7NEJBQUdGLFdBQVU7c0NBQ3RCLDRFQUFDckIsbURBQUtBO2dDQUFDMEIsUUFBUTtnQ0FBQ0MsS0FBS3JCLGdFQUFLQTtnQ0FBRXVCLFFBQVE7Z0NBQUlELEtBQUk7Ozs7Ozs7Ozs7O3NDQUU5Qyw4REFBQzNCLGtEQUFJQTs0QkFBQ3NCLE1BQUs7NEJBQUdGLFdBQVU7c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFFdEMsOERBQUNDOztzQ0FDRCw4REFBQ3JCLGtEQUFJQTs0QkFBQ3NCLE1BQUs7NEJBQUdGLFdBQVU7c0NBQVk7Ozs7OztzQ0FDcEMsOERBQUNwQixrREFBSUE7NEJBQUNzQixNQUFLOzRCQUFHRixXQUFVO3NDQUFZOzs7Ozs7c0NBQ3BDLDhEQUFDcEIsa0RBQUlBOzRCQUFDc0IsTUFBSzs0QkFBR0YsV0FBVTtzQ0FBWTs7Ozs7O3NDQUNwQyw4REFBQ3BCLGtEQUFJQTs0QkFBQ3NCLE1BQUs7NEJBQUdGLFdBQVU7c0NBQVk7Ozs7Ozs7Ozs7Ozs4QkFHcEMsOERBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDUzt3QkFBT1QsV0FBVTt3QkFBb0JVLFNBQVNmOzs0QkFBUzs0QkFBRUU7NEJBQU07Ozs7Ozs7Ozs7Ozs4QkFFbEUsOERBQUNJO29CQUFJRCxXQUFVOzhCQUNmLDRFQUFDWixnRkFBc0JBO3dCQUNyQnVCLFVBQVU7NEJBQ1ZDLGVBQWU7NEJBQ2ZDLGtCQUFrQjtnQ0FBRXZCLDZFQUF3QkE7NkJBQUU7d0JBQzlDO2tDQUNFLDRFQUFDRCx1RUFBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTFCLEVBQUU7R0FyRFdFOztRQUVnQ0wsK0RBQVNBOzs7S0FGekNLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24uanM/YTkwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBOdXJzZUJsb2NMb2dvIGZyb20gJy4uLy4uL3B1YmxpYy9udXJzZWJsb2MtaG9yLnBuZydcbmltcG9ydCBURyBmcm9tICcuLi8uLi9wdWJsaWMvdGctcHVycGxlLnN2ZydcbmltcG9ydCBJbnN0YSBmcm9tICcuLi8uLi9wdWJsaWMvaW5zdGEtcHVycGxlLnN2Zydcbi8vKioqTkVBUiB3YWxsZXQgKi9cbmltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Avd2FsbGV0cy93YWxsZXQtc2VsZWN0b3InO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9hcHAvZ2xvYmFscy5jc3MnXG4vL0R5bmFtaWMgeHl6IGltcG9ydHNcbmltcG9ydCB7IER5bmFtaWNDb250ZXh0UHJvdmlkZXIsIER5bmFtaWNXaWRnZXQgfSBmcm9tICdAZHluYW1pYy1sYWJzL3Nkay1yZWFjdC1jb3JlJztcbmltcG9ydCB7IEV0aGVyZXVtV2FsbGV0Q29ubmVjdG9ycyB9IGZyb20gXCJAZHluYW1pYy1sYWJzL2V0aGVyZXVtXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xuLy8qKipORUFSIHdhbGxldCoqKlxuICBjb25zdCB7IHNpZ25lZEFjY291bnRJZCwgbG9nT3V0LCBsb2dJbiB9ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFthY3Rpb24sIHNldEFjdGlvbl0gPSB1c2VTdGF0ZSgoKSA9PiB7IH0pO1xuICBjb25zdCBbbGFiZWwsIHNldExhYmVsXSA9IHVzZVN0YXRlKCdMb2FkaW5nLi4uJyk7XG4gIC8vaG93IGxhYmVsIHNob3VsZCBhcHBlYXIgb24gTkVBUiBsb2dpbi9vdXQgYnV0dG9uXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZ25lZEFjY291bnRJZCkge1xuICAgICAgc2V0QWN0aW9uKCgpID0+IGxvZ091dCk7XG4gICAgICBzZXRMYWJlbChgTG9nb3V0IE5FQVIgJHtzaWduZWRBY2NvdW50SWR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEFjdGlvbigoKSA9PiBsb2dJbik7XG4gICAgICBzZXRMYWJlbCgnTG9naW4gTkVBUicpO1xuICAgIH1cbiAgfSwgW3NpZ25lZEFjY291bnRJZCwgbG9nT3V0LCBsb2dJbiwgc2V0QWN0aW9uLCBzZXRMYWJlbF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZ1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbmF2LWxvZ29cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZiBsZWdhY3lCZWhhdmlvcj5cbiAgICAgICAgICA8SW1hZ2UgcHJpb3JpdHkgc3JjPXtOdXJzZUJsb2NMb2dvfSBhbHQ9XCJOdXJzZWJsb2NcIiBoZWlnaHQ9XCI4MFwiLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIiBjbGFzc05hbWU9J2ljb25zLXJvdyc+XG4gICAgICAgICAgICA8SW1hZ2UgcHJpb3JpdHkgc3JjPXtUR30gaGVpZ2h0PXsyMH0gYWx0PVwidGVsZWdyYW1cIi8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGhyZWY9XCJcIiBjbGFzc05hbWU9J2ljb25zLXJvdyc+XG4gICAgICAgICAgICA8SW1hZ2UgcHJpb3JpdHkgc3JjPXtJbnN0YX0gaGVpZ2h0PXsyMH0gYWx0PVwidGVsZWdyYW1cIi8+IFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8TGluayBocmVmPVwiXCIgY2xhc3NOYW1lPSdpY29ucy1yb3cnPlggaWNvbjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJcIiBjbGFzc05hbWU9J2xpbmtzLXJvdyc+QWJvdXQ8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJcIiBjbGFzc05hbWU9J2xpbmtzLXJvdyc+UGxhbnM8L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJcIiBjbGFzc05hbWU9J2xpbmtzLXJvdyc+TWVtYmVyc2hpcDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIlwiIGNsYXNzTmFtZT0nbGlua3Mtcm93Jz5OdXJzZXM8L0xpbms+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyoqTkVBUiBidXR0b24gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSduYXZiYXItbmF2Jz5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgb25DbGljaz17YWN0aW9ufSA+IHtsYWJlbH0gPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLW5hdic+XG4gICAgICAgIDxEeW5hbWljQ29udGV4dFByb3ZpZGVyIFxuICAgICAgICAgIHNldHRpbmdzPXt7IFxuICAgICAgICAgIGVudmlyb25tZW50SWQ6ICcwODNmNzY4Ni1lYTc3LTQxZGEtOTkyOS01YTBmYzBhYmJjNDcnLFxuICAgICAgICAgIHdhbGxldENvbm5lY3RvcnM6IFsgRXRoZXJldW1XYWxsZXRDb25uZWN0b3JzIF0sXG4gICAgICAgICAgfX0+IFxuICAgICAgICAgICAgPER5bmFtaWNXaWRnZXQgLz4gXG4gICAgICAgICAgPC9EeW5hbWljQ29udGV4dFByb3ZpZGVyPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07Il0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTnVyc2VCbG9jTG9nbyIsIlRHIiwiSW5zdGEiLCJ1c2VXYWxsZXQiLCJzdHlsZXMiLCJEeW5hbWljQ29udGV4dFByb3ZpZGVyIiwiRHluYW1pY1dpZGdldCIsIkV0aGVyZXVtV2FsbGV0Q29ubmVjdG9ycyIsIk5hdmlnYXRpb24iLCJzaWduZWRBY2NvdW50SWQiLCJsb2dPdXQiLCJsb2dJbiIsImFjdGlvbiIsInNldEFjdGlvbiIsImxhYmVsIiwic2V0TGFiZWwiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciIsInByaW9yaXR5Iiwic3JjIiwiYWx0IiwiaGVpZ2h0IiwiYnV0dG9uIiwib25DbGljayIsInNldHRpbmdzIiwiZW52aXJvbm1lbnRJZCIsIndhbGxldENvbm5lY3RvcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navigation.js\n"));

/***/ })

});