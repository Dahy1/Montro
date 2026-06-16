(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[197],{

/***/ 6141:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/404",
      function () {
        return __webpack_require__(2002);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 2002:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _404; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./src/components/Layout/Layout.tsx + 133 modules
var Layout = __webpack_require__(6811);
;// CONCATENATED MODULE: ./src/containers/NotFound/NotFound.tsx

const NotFound = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: "Not found"
    });
};
/* harmony default export */ var NotFound_NotFound = (NotFound); // const VideoPlayer = dynamic(() => import('./VideoPlayer/VideoPlayer'), {
 //   ssr: false,
 // });

;// CONCATENATED MODULE: ./src/pages/404.tsx



const ErrorPage = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(NotFound_NotFound, {})
    });
};
/* harmony default export */ var _404 = (ErrorPage);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,888,179], function() { return __webpack_exec__(6141); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);