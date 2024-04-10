/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uuid4";
exports.ids = ["vendor-chunks/uuid4"];
exports.modules = {

/***/ "(ssr)/./node_modules/uuid4/index.js":
/*!*************************************!*\
  !*** ./node_modules/uuid4/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nconst uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;\nfunction valid(uuid) {\n  return uuidPattern.test(uuid);\n}\n\nfunction uuid4() {\n  var rnd = crypto.randomBytes(16);\n  rnd[6] = (rnd[6] & 0x0f) | 0x40;\n  rnd[8] = (rnd[8] & 0x3f) | 0x80;\n  rnd = rnd.toString(\"hex\").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);\n  rnd.shift();\n  return rnd.join(\"-\");\n}\nuuid4.valid = valid;\n\nmodule.exports = uuid4;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXVpZDQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLHNCQUFROztBQUUvQiwrQkFBK0IsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsR0FBRztBQUN6RjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWxsby1uZWFyLy4vbm9kZV9tb2R1bGVzL3V1aWQ0L2luZGV4LmpzP2M3NzkiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3J5cHRvID0gcmVxdWlyZShcImNyeXB0b1wiKTtcblxuY29uc3QgdXVpZFBhdHRlcm4gPSAvXlswLTlhLWZdezh9LVswLTlhLWZdezR9LTRbMC05YS1mXXszfS1bODlhYl1bMC05YS1mXXszfS1bMC05YS1mXXsxMn0kL2k7XG5mdW5jdGlvbiB2YWxpZCh1dWlkKSB7XG4gIHJldHVybiB1dWlkUGF0dGVybi50ZXN0KHV1aWQpO1xufVxuXG5mdW5jdGlvbiB1dWlkNCgpIHtcbiAgdmFyIHJuZCA9IGNyeXB0by5yYW5kb21CeXRlcygxNik7XG4gIHJuZFs2XSA9IChybmRbNl0gJiAweDBmKSB8IDB4NDA7XG4gIHJuZFs4XSA9IChybmRbOF0gJiAweDNmKSB8IDB4ODA7XG4gIHJuZCA9IHJuZC50b1N0cmluZyhcImhleFwiKS5tYXRjaCgvKC57OH0pKC57NH0pKC57NH0pKC57NH0pKC57MTJ9KS8pO1xuICBybmQuc2hpZnQoKTtcbiAgcmV0dXJuIHJuZC5qb2luKFwiLVwiKTtcbn1cbnV1aWQ0LnZhbGlkID0gdmFsaWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gdXVpZDQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uuid4/index.js\n");

/***/ })

};
;