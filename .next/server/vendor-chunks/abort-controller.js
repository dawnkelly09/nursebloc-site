"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/abort-controller";
exports.ids = ["vendor-chunks/abort-controller"];
exports.modules = {

/***/ "(ssr)/./node_modules/abort-controller/dist/abort-controller.js":
/*!****************************************************************!*\
  !*** ./node_modules/abort-controller/dist/abort-controller.js ***!
  \****************************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/**\n * @author Toru Nagashima <https://github.com/mysticatea>\n * See LICENSE file in root directory for full license.\n */\n\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar eventTargetShim = __webpack_require__(/*! event-target-shim */ \"(ssr)/./node_modules/event-target-shim/dist/event-target-shim.js\");\n\n/**\n * The signal class.\n * @see https://dom.spec.whatwg.org/#abortsignal\n */\nclass AbortSignal extends eventTargetShim.EventTarget {\n    /**\n     * AbortSignal cannot be constructed directly.\n     */\n    constructor() {\n        super();\n        throw new TypeError(\"AbortSignal cannot be constructed directly\");\n    }\n    /**\n     * Returns `true` if this `AbortSignal`'s `AbortController` has signaled to abort, and `false` otherwise.\n     */\n    get aborted() {\n        const aborted = abortedFlags.get(this);\n        if (typeof aborted !== \"boolean\") {\n            throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this === null ? \"null\" : typeof this}`);\n        }\n        return aborted;\n    }\n}\neventTargetShim.defineEventAttribute(AbortSignal.prototype, \"abort\");\n/**\n * Create an AbortSignal object.\n */\nfunction createAbortSignal() {\n    const signal = Object.create(AbortSignal.prototype);\n    eventTargetShim.EventTarget.call(signal);\n    abortedFlags.set(signal, false);\n    return signal;\n}\n/**\n * Abort a given signal.\n */\nfunction abortSignal(signal) {\n    if (abortedFlags.get(signal) !== false) {\n        return;\n    }\n    abortedFlags.set(signal, true);\n    signal.dispatchEvent({ type: \"abort\" });\n}\n/**\n * Aborted flag for each instances.\n */\nconst abortedFlags = new WeakMap();\n// Properties should be enumerable.\nObject.defineProperties(AbortSignal.prototype, {\n    aborted: { enumerable: true },\n});\n// `toString()` should return `\"[object AbortSignal]\"`\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortSignal.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortSignal\",\n    });\n}\n\n/**\n * The AbortController.\n * @see https://dom.spec.whatwg.org/#abortcontroller\n */\nclass AbortController {\n    /**\n     * Initialize this controller.\n     */\n    constructor() {\n        signals.set(this, createAbortSignal());\n    }\n    /**\n     * Returns the `AbortSignal` object associated with this object.\n     */\n    get signal() {\n        return getSignal(this);\n    }\n    /**\n     * Abort and signal to any observers that the associated activity is to be aborted.\n     */\n    abort() {\n        abortSignal(getSignal(this));\n    }\n}\n/**\n * Associated signals.\n */\nconst signals = new WeakMap();\n/**\n * Get the associated signal of a given controller.\n */\nfunction getSignal(controller) {\n    const signal = signals.get(controller);\n    if (signal == null) {\n        throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${controller === null ? \"null\" : typeof controller}`);\n    }\n    return signal;\n}\n// Properties should be enumerable.\nObject.defineProperties(AbortController.prototype, {\n    signal: { enumerable: true },\n    abort: { enumerable: true },\n});\nif (typeof Symbol === \"function\" && typeof Symbol.toStringTag === \"symbol\") {\n    Object.defineProperty(AbortController.prototype, Symbol.toStringTag, {\n        configurable: true,\n        value: \"AbortController\",\n    });\n}\n\nexports.AbortController = AbortController;\nexports.AbortSignal = AbortSignal;\nexports[\"default\"] = AbortController;\n\nmodule.exports = AbortController\nmodule.exports.AbortController = module.exports[\"default\"] = AbortController\nmodule.exports.AbortSignal = AbortSignal\n//# sourceMappingURL=abort-controller.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYWJvcnQtY29udHJvbGxlci9kaXN0L2Fib3J0LWNvbnRyb2xsZXIuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELHNCQUFzQixtQkFBTyxDQUFDLDJGQUFtQjs7QUFFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEZBQTBGLHFDQUFxQztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQkFBa0I7QUFDakMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRkFBMEYsaURBQWlEO0FBQzNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLGtCQUFrQjtBQUNoQyxhQUFhLGtCQUFrQjtBQUMvQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsdUJBQXVCO0FBQ3ZCLG1CQUFtQjtBQUNuQixrQkFBZTs7QUFFZjtBQUNBLDhCQUE4QixHQUFHLHlCQUF5QjtBQUMxRCwwQkFBMEI7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL2Fib3J0LWNvbnRyb2xsZXIvZGlzdC9hYm9ydC1jb250cm9sbGVyLmpzP2Q5ZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAYXV0aG9yIFRvcnUgTmFnYXNoaW1hIDxodHRwczovL2dpdGh1Yi5jb20vbXlzdGljYXRlYT5cbiAqIFNlZSBMSUNFTlNFIGZpbGUgaW4gcm9vdCBkaXJlY3RvcnkgZm9yIGZ1bGwgbGljZW5zZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgZXZlbnRUYXJnZXRTaGltID0gcmVxdWlyZSgnZXZlbnQtdGFyZ2V0LXNoaW0nKTtcblxuLyoqXG4gKiBUaGUgc2lnbmFsIGNsYXNzLlxuICogQHNlZSBodHRwczovL2RvbS5zcGVjLndoYXR3Zy5vcmcvI2Fib3J0c2lnbmFsXG4gKi9cbmNsYXNzIEFib3J0U2lnbmFsIGV4dGVuZHMgZXZlbnRUYXJnZXRTaGltLkV2ZW50VGFyZ2V0IHtcbiAgICAvKipcbiAgICAgKiBBYm9ydFNpZ25hbCBjYW5ub3QgYmUgY29uc3RydWN0ZWQgZGlyZWN0bHkuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBYm9ydFNpZ25hbCBjYW5ub3QgYmUgY29uc3RydWN0ZWQgZGlyZWN0bHlcIik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoaXMgYEFib3J0U2lnbmFsYCdzIGBBYm9ydENvbnRyb2xsZXJgIGhhcyBzaWduYWxlZCB0byBhYm9ydCwgYW5kIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGdldCBhYm9ydGVkKCkge1xuICAgICAgICBjb25zdCBhYm9ydGVkID0gYWJvcnRlZEZsYWdzLmdldCh0aGlzKTtcbiAgICAgICAgaWYgKHR5cGVvZiBhYm9ydGVkICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgJ3RoaXMnIHRvIGJlIGFuICdBYm9ydFNpZ25hbCcgb2JqZWN0LCBidXQgZ290ICR7dGhpcyA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIHRoaXN9YCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFib3J0ZWQ7XG4gICAgfVxufVxuZXZlbnRUYXJnZXRTaGltLmRlZmluZUV2ZW50QXR0cmlidXRlKEFib3J0U2lnbmFsLnByb3RvdHlwZSwgXCJhYm9ydFwiKTtcbi8qKlxuICogQ3JlYXRlIGFuIEFib3J0U2lnbmFsIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQWJvcnRTaWduYWwoKSB7XG4gICAgY29uc3Qgc2lnbmFsID0gT2JqZWN0LmNyZWF0ZShBYm9ydFNpZ25hbC5wcm90b3R5cGUpO1xuICAgIGV2ZW50VGFyZ2V0U2hpbS5FdmVudFRhcmdldC5jYWxsKHNpZ25hbCk7XG4gICAgYWJvcnRlZEZsYWdzLnNldChzaWduYWwsIGZhbHNlKTtcbiAgICByZXR1cm4gc2lnbmFsO1xufVxuLyoqXG4gKiBBYm9ydCBhIGdpdmVuIHNpZ25hbC5cbiAqL1xuZnVuY3Rpb24gYWJvcnRTaWduYWwoc2lnbmFsKSB7XG4gICAgaWYgKGFib3J0ZWRGbGFncy5nZXQoc2lnbmFsKSAhPT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhYm9ydGVkRmxhZ3Muc2V0KHNpZ25hbCwgdHJ1ZSk7XG4gICAgc2lnbmFsLmRpc3BhdGNoRXZlbnQoeyB0eXBlOiBcImFib3J0XCIgfSk7XG59XG4vKipcbiAqIEFib3J0ZWQgZmxhZyBmb3IgZWFjaCBpbnN0YW5jZXMuXG4gKi9cbmNvbnN0IGFib3J0ZWRGbGFncyA9IG5ldyBXZWFrTWFwKCk7XG4vLyBQcm9wZXJ0aWVzIHNob3VsZCBiZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQWJvcnRTaWduYWwucHJvdG90eXBlLCB7XG4gICAgYWJvcnRlZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG59KTtcbi8vIGB0b1N0cmluZygpYCBzaG91bGQgcmV0dXJuIGBcIltvYmplY3QgQWJvcnRTaWduYWxdXCJgXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJvcnRTaWduYWwucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogXCJBYm9ydFNpZ25hbFwiLFxuICAgIH0pO1xufVxuXG4vKipcbiAqIFRoZSBBYm9ydENvbnRyb2xsZXIuXG4gKiBAc2VlIGh0dHBzOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jYWJvcnRjb250cm9sbGVyXG4gKi9cbmNsYXNzIEFib3J0Q29udHJvbGxlciB7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSB0aGlzIGNvbnRyb2xsZXIuXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHNpZ25hbHMuc2V0KHRoaXMsIGNyZWF0ZUFib3J0U2lnbmFsKCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgQWJvcnRTaWduYWxgIG9iamVjdCBhc3NvY2lhdGVkIHdpdGggdGhpcyBvYmplY3QuXG4gICAgICovXG4gICAgZ2V0IHNpZ25hbCgpIHtcbiAgICAgICAgcmV0dXJuIGdldFNpZ25hbCh0aGlzKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQWJvcnQgYW5kIHNpZ25hbCB0byBhbnkgb2JzZXJ2ZXJzIHRoYXQgdGhlIGFzc29jaWF0ZWQgYWN0aXZpdHkgaXMgdG8gYmUgYWJvcnRlZC5cbiAgICAgKi9cbiAgICBhYm9ydCgpIHtcbiAgICAgICAgYWJvcnRTaWduYWwoZ2V0U2lnbmFsKHRoaXMpKTtcbiAgICB9XG59XG4vKipcbiAqIEFzc29jaWF0ZWQgc2lnbmFscy5cbiAqL1xuY29uc3Qgc2lnbmFscyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIEdldCB0aGUgYXNzb2NpYXRlZCBzaWduYWwgb2YgYSBnaXZlbiBjb250cm9sbGVyLlxuICovXG5mdW5jdGlvbiBnZXRTaWduYWwoY29udHJvbGxlcikge1xuICAgIGNvbnN0IHNpZ25hbCA9IHNpZ25hbHMuZ2V0KGNvbnRyb2xsZXIpO1xuICAgIGlmIChzaWduYWwgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCAndGhpcycgdG8gYmUgYW4gJ0Fib3J0Q29udHJvbGxlcicgb2JqZWN0LCBidXQgZ290ICR7Y29udHJvbGxlciA9PT0gbnVsbCA/IFwibnVsbFwiIDogdHlwZW9mIGNvbnRyb2xsZXJ9YCk7XG4gICAgfVxuICAgIHJldHVybiBzaWduYWw7XG59XG4vLyBQcm9wZXJ0aWVzIHNob3VsZCBiZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZSwge1xuICAgIHNpZ25hbDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG4gICAgYWJvcnQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxufSk7XG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09IFwic3ltYm9sXCIpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQWJvcnRDb250cm9sbGVyLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFwiQWJvcnRDb250cm9sbGVyXCIsXG4gICAgfSk7XG59XG5cbmV4cG9ydHMuQWJvcnRDb250cm9sbGVyID0gQWJvcnRDb250cm9sbGVyO1xuZXhwb3J0cy5BYm9ydFNpZ25hbCA9IEFib3J0U2lnbmFsO1xuZXhwb3J0cy5kZWZhdWx0ID0gQWJvcnRDb250cm9sbGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFib3J0Q29udHJvbGxlclxubW9kdWxlLmV4cG9ydHMuQWJvcnRDb250cm9sbGVyID0gbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQWJvcnRDb250cm9sbGVyXG5tb2R1bGUuZXhwb3J0cy5BYm9ydFNpZ25hbCA9IEFib3J0U2lnbmFsXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYm9ydC1jb250cm9sbGVyLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/abort-controller/dist/abort-controller.js\n");

/***/ })

};
;