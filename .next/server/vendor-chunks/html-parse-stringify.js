/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/html-parse-stringify";
exports.ids = ["vendor-chunks/html-parse-stringify"];
exports.modules = {

/***/ "(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.js":
/*!************************************************************************!*\
  !*** ./node_modules/html-parse-stringify/dist/html-parse-stringify.js ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var e,t=(e=__webpack_require__(/*! void-elements */ \"(ssr)/./node_modules/void-elements/index.js\"))&&\"object\"==typeof e&&\"default\"in e?e.default:e,n=/\\s([^'\"/\\s><]+?)[\\s/>]|([^\\s=]+)=\\s?(\".*?\"|'.*?')/g;function r(e){var r={type:\"tag\",name:\"\",voidElement:!1,attrs:{},children:[]},i=e.match(/<\\/?([^\\s]+?)[/\\s>]/);if(i&&(r.name=i[1],(t[i[1]]||\"/\"===e.charAt(e.length-2))&&(r.voidElement=!0),r.name.startsWith(\"!--\"))){var s=e.indexOf(\"--\\x3e\");return{type:\"comment\",comment:-1!==s?e.slice(4,s):\"\"}}for(var c=new RegExp(n),a=null;null!==(a=c.exec(e));)if(a[0].trim())if(a[1]){var o=a[1].trim(),u=[o,\"\"];o.indexOf(\"=\")>-1&&(u=o.split(\"=\")),r.attrs[u[0]]=u[1],c.lastIndex--}else a[2]&&(r.attrs[a[2]]=a[3].trim().substring(1,a[3].length-1));return r}var i=/<[a-zA-Z0-9\\-\\!\\/](?:\"[^\"]*\"|'[^']*'|[^'\">])*>/g,s=/^\\s*$/,c=Object.create(null);function a(e,t){switch(t.type){case\"text\":return e+t.content;case\"tag\":return e+=\"<\"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'=\"'+e[n]+'\"');return t.length?\" \"+t.join(\" \"):\"\"}(t.attrs):\"\")+(t.voidElement?\"/>\":\">\"),t.voidElement?e:e+t.children.reduce(a,\"\")+\"</\"+t.name+\">\";case\"comment\":return e+\"\\x3c!--\"+t.comment+\"--\\x3e\"}}module.exports={parse:function(e,t){t||(t={}),t.components||(t.components=c);var n,a=[],o=[],u=-1,l=!1;if(0!==e.indexOf(\"<\")){var m=e.indexOf(\"<\");a.push({type:\"text\",content:-1===m?e:e.substring(0,m)})}return e.replace(i,function(i,c){if(l){if(i!==\"</\"+n.name+\">\")return;l=!1}var m,d=\"/\"!==i.charAt(1),f=i.startsWith(\"\\x3c!--\"),h=c+i.length,p=e.charAt(h);if(f){var v=r(i);return u<0?(a.push(v),a):((m=o[u]).children.push(v),a)}if(d&&(u++,\"tag\"===(n=r(i)).type&&t.components[n.name]&&(n.type=\"component\",l=!0),n.voidElement||l||!p||\"<\"===p||n.children.push({type:\"text\",content:e.slice(h,e.indexOf(\"<\",h))}),0===u&&a.push(n),(m=o[u-1])&&m.children.push(n),o[u]=n),(!d||n.voidElement)&&(u>-1&&(n.voidElement||n.name===i.slice(2,-1))&&(u--,n=-1===u?a:o[u]),!l&&\"<\"!==p&&p)){m=-1===u?a:o[u].children;var x=e.indexOf(\"<\",h),g=e.slice(h,-1===x?void 0:x);s.test(g)&&(g=\" \"),(x>-1&&u+m.length>=0||\" \"!==g)&&m.push({type:\"text\",content:g})}}),a},stringify:function(e){return e.reduce(function(e,t){return e+a(\"\",t)},\"\")}};\n//# sourceMappingURL=html-parse-stringify.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkvZGlzdC9odG1sLXBhcnNlLXN0cmluZ2lmeS5qcyIsIm1hcHBpbmdzIjoiQUFBQSxXQUFXLG1CQUFPLENBQUMsa0VBQWUseUdBQXlHLGNBQWMsT0FBTywwQ0FBMEMsYUFBYSxrQ0FBa0Msd0dBQXdHLDBCQUEwQixPQUFPLCtDQUErQywrQkFBK0IscUJBQXFCLHlCQUF5QiwyQkFBMkIscUVBQXFFLGtFQUFrRSxTQUFTLHdGQUF3RixnQkFBZ0IsZUFBZSw4QkFBOEIsb0RBQW9ELFNBQVMsdUNBQXVDLG1DQUFtQyxpR0FBaUcscURBQXFELGdCQUFnQixvQkFBb0IsUUFBUSxpQ0FBaUMsMEJBQTBCLHVCQUF1QixxQkFBcUIsUUFBUSw4Q0FBOEMsRUFBRSxpQ0FBaUMsTUFBTSw4QkFBOEIsS0FBSywrRUFBK0UsTUFBTSxXQUFXLHVEQUF1RCxrSUFBa0ksZ0RBQWdELHNLQUFzSyx5QkFBeUIsb0RBQW9ELDJEQUEyRCxzQkFBc0IsR0FBRyxJQUFJLHVCQUF1Qiw4QkFBOEIsaUJBQWlCO0FBQzFrRSIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9ub2RlX21vZHVsZXMvaHRtbC1wYXJzZS1zdHJpbmdpZnkvZGlzdC9odG1sLXBhcnNlLXN0cmluZ2lmeS5qcz9mNTUxIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBlLHQ9KGU9cmVxdWlyZShcInZvaWQtZWxlbWVudHNcIikpJiZcIm9iamVjdFwiPT10eXBlb2YgZSYmXCJkZWZhdWx0XCJpbiBlP2UuZGVmYXVsdDplLG49L1xccyhbXidcIi9cXHM+PF0rPylbXFxzLz5dfChbXlxccz1dKyk9XFxzPyhcIi4qP1wifCcuKj8nKS9nO2Z1bmN0aW9uIHIoZSl7dmFyIHI9e3R5cGU6XCJ0YWdcIixuYW1lOlwiXCIsdm9pZEVsZW1lbnQ6ITEsYXR0cnM6e30sY2hpbGRyZW46W119LGk9ZS5tYXRjaCgvPFxcLz8oW15cXHNdKz8pWy9cXHM+XS8pO2lmKGkmJihyLm5hbWU9aVsxXSwodFtpWzFdXXx8XCIvXCI9PT1lLmNoYXJBdChlLmxlbmd0aC0yKSkmJihyLnZvaWRFbGVtZW50PSEwKSxyLm5hbWUuc3RhcnRzV2l0aChcIiEtLVwiKSkpe3ZhciBzPWUuaW5kZXhPZihcIi0tXFx4M2VcIik7cmV0dXJue3R5cGU6XCJjb21tZW50XCIsY29tbWVudDotMSE9PXM/ZS5zbGljZSg0LHMpOlwiXCJ9fWZvcih2YXIgYz1uZXcgUmVnRXhwKG4pLGE9bnVsbDtudWxsIT09KGE9Yy5leGVjKGUpKTspaWYoYVswXS50cmltKCkpaWYoYVsxXSl7dmFyIG89YVsxXS50cmltKCksdT1bbyxcIlwiXTtvLmluZGV4T2YoXCI9XCIpPi0xJiYodT1vLnNwbGl0KFwiPVwiKSksci5hdHRyc1t1WzBdXT11WzFdLGMubGFzdEluZGV4LS19ZWxzZSBhWzJdJiYoci5hdHRyc1thWzJdXT1hWzNdLnRyaW0oKS5zdWJzdHJpbmcoMSxhWzNdLmxlbmd0aC0xKSk7cmV0dXJuIHJ9dmFyIGk9LzxbYS16QS1aMC05XFwtXFwhXFwvXSg/OlwiW15cIl0qXCJ8J1teJ10qJ3xbXidcIj5dKSo+L2cscz0vXlxccyokLyxjPU9iamVjdC5jcmVhdGUobnVsbCk7ZnVuY3Rpb24gYShlLHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcInRleHRcIjpyZXR1cm4gZSt0LmNvbnRlbnQ7Y2FzZVwidGFnXCI6cmV0dXJuIGUrPVwiPFwiK3QubmFtZSsodC5hdHRycz9mdW5jdGlvbihlKXt2YXIgdD1bXTtmb3IodmFyIG4gaW4gZSl0LnB1c2gobisnPVwiJytlW25dKydcIicpO3JldHVybiB0Lmxlbmd0aD9cIiBcIit0LmpvaW4oXCIgXCIpOlwiXCJ9KHQuYXR0cnMpOlwiXCIpKyh0LnZvaWRFbGVtZW50P1wiLz5cIjpcIj5cIiksdC52b2lkRWxlbWVudD9lOmUrdC5jaGlsZHJlbi5yZWR1Y2UoYSxcIlwiKStcIjwvXCIrdC5uYW1lK1wiPlwiO2Nhc2VcImNvbW1lbnRcIjpyZXR1cm4gZStcIlxceDNjIS0tXCIrdC5jb21tZW50K1wiLS1cXHgzZVwifX1tb2R1bGUuZXhwb3J0cz17cGFyc2U6ZnVuY3Rpb24oZSx0KXt0fHwodD17fSksdC5jb21wb25lbnRzfHwodC5jb21wb25lbnRzPWMpO3ZhciBuLGE9W10sbz1bXSx1PS0xLGw9ITE7aWYoMCE9PWUuaW5kZXhPZihcIjxcIikpe3ZhciBtPWUuaW5kZXhPZihcIjxcIik7YS5wdXNoKHt0eXBlOlwidGV4dFwiLGNvbnRlbnQ6LTE9PT1tP2U6ZS5zdWJzdHJpbmcoMCxtKX0pfXJldHVybiBlLnJlcGxhY2UoaSxmdW5jdGlvbihpLGMpe2lmKGwpe2lmKGkhPT1cIjwvXCIrbi5uYW1lK1wiPlwiKXJldHVybjtsPSExfXZhciBtLGQ9XCIvXCIhPT1pLmNoYXJBdCgxKSxmPWkuc3RhcnRzV2l0aChcIlxceDNjIS0tXCIpLGg9YytpLmxlbmd0aCxwPWUuY2hhckF0KGgpO2lmKGYpe3ZhciB2PXIoaSk7cmV0dXJuIHU8MD8oYS5wdXNoKHYpLGEpOigobT1vW3VdKS5jaGlsZHJlbi5wdXNoKHYpLGEpfWlmKGQmJih1KyssXCJ0YWdcIj09PShuPXIoaSkpLnR5cGUmJnQuY29tcG9uZW50c1tuLm5hbWVdJiYobi50eXBlPVwiY29tcG9uZW50XCIsbD0hMCksbi52b2lkRWxlbWVudHx8bHx8IXB8fFwiPFwiPT09cHx8bi5jaGlsZHJlbi5wdXNoKHt0eXBlOlwidGV4dFwiLGNvbnRlbnQ6ZS5zbGljZShoLGUuaW5kZXhPZihcIjxcIixoKSl9KSwwPT09dSYmYS5wdXNoKG4pLChtPW9bdS0xXSkmJm0uY2hpbGRyZW4ucHVzaChuKSxvW3VdPW4pLCghZHx8bi52b2lkRWxlbWVudCkmJih1Pi0xJiYobi52b2lkRWxlbWVudHx8bi5uYW1lPT09aS5zbGljZSgyLC0xKSkmJih1LS0sbj0tMT09PXU/YTpvW3VdKSwhbCYmXCI8XCIhPT1wJiZwKSl7bT0tMT09PXU/YTpvW3VdLmNoaWxkcmVuO3ZhciB4PWUuaW5kZXhPZihcIjxcIixoKSxnPWUuc2xpY2UoaCwtMT09PXg/dm9pZCAwOngpO3MudGVzdChnKSYmKGc9XCIgXCIpLCh4Pi0xJiZ1K20ubGVuZ3RoPj0wfHxcIiBcIiE9PWcpJiZtLnB1c2goe3R5cGU6XCJ0ZXh0XCIsY29udGVudDpnfSl9fSksYX0sc3RyaW5naWZ5OmZ1bmN0aW9uKGUpe3JldHVybiBlLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlK2EoXCJcIix0KX0sXCJcIil9fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWh0bWwtcGFyc2Utc3RyaW5naWZ5LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/html-parse-stringify/dist/html-parse-stringify.js\n");

/***/ })

};
;