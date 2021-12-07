(() => {
var exports = {};
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 361:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "BrowseScreen_list__2kA46",
	"container": "BrowseScreen_container__2oCHj"
};


/***/ }),

/***/ 293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ browse),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./src/screens/Browse/BrowseScreen.module.css
var BrowseScreen_module = __webpack_require__(361);
var BrowseScreen_module_default = /*#__PURE__*/__webpack_require__.n(BrowseScreen_module);
;// CONCATENATED MODULE: ./src/screens/Browse/BrowseScreen.jsx



function BrowseScreen() {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (BrowseScreen_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                children: " Browse Shelter Animals "
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (BrowseScreen_module_default()).list
            })
        ]
    }));
};

;// CONCATENATED MODULE: ./src/pages/browse/index.jsx

async function getServerSideProps() {
    const response = await fetch("http://localhost:3001/animals");
    const animals = await response.json();
    return {
        props: {
            animals
        }
    };
}
/* harmony default export */ const browse = (BrowseScreen);


/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(293));
module.exports = __webpack_exports__;

})();