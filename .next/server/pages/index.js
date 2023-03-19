(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 582:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__EtNt2",
	"description": "Home_description__Qwq1f",
	"code": "Home_code__aGV0U",
	"grid": "Home_grid__c_g6N",
	"card": "Home_card__7oz7W",
	"center": "Home_center__V0nxp",
	"logo": "Home_logo__80mSr",
	"thirteen": "Home_thirteen__ocdUI",
	"rotate": "Home_rotate__99GkW",
	"content": "Home_content___fOQz",
	"vercelLogo": "Home_vercelLogo__lhIxO"
};


/***/ }),

/***/ 387:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./src/styles/Home.module.css
var Home_module = __webpack_require__(582);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
;// CONCATENATED MODULE: ./src/pages/index.tsx



function Home({ message  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Create Next App"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: message
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "new text"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: "new text 2"
                    })
                ]
            })
        ]
    });
}
const getServerSideProps = async (ctx)=>{
    const response = await fetch("http://localhost:3000/api/v1/hello");
    const data = await response.json();
    return {
        props: {
            message: data
        }
    };
};


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
var __webpack_exports__ = (__webpack_exec__(387));
module.exports = __webpack_exports__;

})();