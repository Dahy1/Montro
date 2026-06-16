(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[731],{

/***/ 2734:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/cookie-policy",
      function () {
        return __webpack_require__(775);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 775:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ cookie_policy; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Layout/Layout.tsx + 133 modules
var Layout = __webpack_require__(6811);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/styles/components/Containers.ts
var Containers = __webpack_require__(4483);
// EXTERNAL MODULE: ./src/styles/mixins.ts
var mixins = __webpack_require__(3654);
;// CONCATENATED MODULE: ./src/components/Cookies/CookiePolicy/CookiePolicy.styles.ts


const Title = styled_components_browser_esm/* default */.ZP.h1.withConfig({
    displayName: "CookiePolicystyles__Title",
    componentId: "sc-kzyq7p-0"
}).withConfig({
    componentId: "sc-71fd4470-0"
}).withConfig({
    componentId: "sc-87bc1319-0"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading1), {
    "marginBottom": "4rem",
    "marginTop": "4rem"
});
const Paragraph = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "CookiePolicystyles__Paragraph",
    componentId: "sc-kzyq7p-1"
}).withConfig({
    componentId: "sc-71fd4470-1"
}).withConfig({
    componentId: "sc-87bc1319-1"
})([
    "",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Paragraph));
const SectionTitle = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "CookiePolicystyles__SectionTitle",
    componentId: "sc-kzyq7p-2"
}).withConfig({
    componentId: "sc-71fd4470-2"
}).withConfig({
    componentId: "sc-87bc1319-2"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Paragraph), {
    "marginTop": "2rem",
    "marginBottom": "2rem",
    "fontWeight": "700"
});
const Header = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "CookiePolicystyles__Header",
    componentId: "sc-kzyq7p-3"
}).withConfig({
    componentId: "sc-71fd4470-3"
}).withConfig({
    componentId: "sc-87bc1319-3"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading3), {
    "marginTop": "2rem",
    "marginBottom": "2rem",
    "fontWeight": "700"
});
const List = styled_components_browser_esm/* default */.ZP.ul.withConfig({
    displayName: "CookiePolicystyles__List",
    componentId: "sc-kzyq7p-4"
}).withConfig({
    componentId: "sc-71fd4470-4"
}).withConfig({
    componentId: "sc-87bc1319-4"
})({
    "position": "relative",
    "marginTop": "1.5rem",
    "display": "flex",
    "flexDirection": "column",
    "gap": "0.75rem",
    "paddingLeft": "1.75rem"
});
const ContactLink = styled_components_browser_esm/* default */.ZP.a.withConfig({
    displayName: "CookiePolicystyles__ContactLink",
    componentId: "sc-kzyq7p-5"
}).withConfig({
    componentId: "sc-71fd4470-5"
}).withConfig({
    componentId: "sc-87bc1319-5"
})({
    "fontWeight": "700",
    "textDecorationLine": "underline"
});

;// CONCATENATED MODULE: ./src/components/Cookies/CookiePolicy/CookiePolicy.tsx







const CookiePolicy = ()=>{
    const { t } = (0,es/* useTranslation */.$G)();
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containers/* Section */.$0, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Title, {
                children: t("cookiePolicy.h1")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paragraph, {
                children: [
                    t("cookiePolicy.contact"),
                    " ",
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledLink, {
                        href: "/cookie-policy",
                        children: "https://realestate.vinode.io/cookie-policy"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                children: t("cookiePolicy.title.1")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                children: t("cookiePolicy.paragraph.1")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                children: t("cookiePolicy.title.2")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                children: t("cookiePolicy.paragraph.2")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                children: t("cookiePolicy.title.3")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                children: t("cookiePolicy.paragraph.3")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Header, {
                children: t("cookiePolicy.listTitle")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                children: t("cookiePolicy.title.4")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                        children: t("cookiePolicy.paragraph.4")
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                children: t("cookiePolicy.title.5")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                children: t("cookiePolicy.paragraph.5")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(List, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                            children: t("cookiePolicy.listItem.1")
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                            children: t("cookiePolicy.listItem.2")
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                            children: t("cookiePolicy.listItem.3")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionTitle, {
                children: t("cookiePolicy.title.6")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                children: t("cookiePolicy.paragraph.1")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Paragraph, {
                children: t("cookiePolicy.paragraph.7")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(List, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("li", {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paragraph, {
                        children: [
                            "Email:",
                            " ",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContactLink, {
                                href: "mailto:".concat(t("contact.form.contactAt.email")),
                                children: t("contact.form.contactAt.email")
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ var CookiePolicy_CookiePolicy = (CookiePolicy);
var _StyledLink = (0,styled_components_browser_esm/* default */.ZP)((link_default())).withConfig({
    displayName: "CookiePolicy___StyledLink",
    componentId: "sc-1j35dr2-0"
}).withConfig({
    componentId: "sc-749c920d-0"
}).withConfig({
    componentId: "sc-6ee7ad38-0"
})({
    "textDecorationLine": "underline"
});

;// CONCATENATED MODULE: ./src/pages/cookie-policy.tsx




const cookie_policy_CookiePolicy = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Layout/* default */.Z, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CookiePolicy_CookiePolicy, {})
    });
};
/* harmony default export */ var cookie_policy = (cookie_policy_CookiePolicy);


/***/ }),

/***/ 4483:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $0: function() { return /* binding */ Section; },
/* harmony export */   Ah: function() { return /* binding */ BlurWrapper; },
/* harmony export */   Kc: function() { return /* binding */ DesktopLayoutWrapper; }
/* harmony export */ });
/* unused harmony exports PageWrapper, Wrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1686);

const PageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div.withConfig({
    displayName: "Containers__PageWrapper",
    componentId: "sc-1t029ts-0"
}).withConfig({
    componentId: "sc-34db383f-0"
}).withConfig({
    componentId: "sc-434f5fbc-0"
})({
    "overflowX": "clip"
});
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div.withConfig({
    displayName: "Containers__Wrapper",
    componentId: "sc-1t029ts-1"
}).withConfig({
    componentId: "sc-34db383f-1"
}).withConfig({
    componentId: "sc-434f5fbc-1"
})({
    "paddingTop": "70px",
    "paddingBottom": "70px"
});
const Section = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.section.withConfig({
    displayName: "Containers__Section",
    componentId: "sc-1t029ts-2"
}).withConfig({
    componentId: "sc-34db383f-2"
}).withConfig({
    componentId: "sc-434f5fbc-2"
})({
    "marginLeft": "auto",
    "marginRight": "auto",
    "maxWidth": "1110px",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "@media (min-width: 1024px)": {
        "paddingLeft": "2rem",
        "paddingRight": "2rem"
    },
    "@media (min-width: 1280px)": {
        "paddingLeft": "0px",
        "paddingRight": "0px"
    }
});
const DesktopLayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div.withConfig({
    displayName: "Containers__DesktopLayoutWrapper",
    componentId: "sc-1t029ts-3"
}).withConfig({
    componentId: "sc-34db383f-3"
}).withConfig({
    componentId: "sc-434f5fbc-3"
})((param)=>{
    let { poiZoomed } = param;
    return [
        {
            "pointerEvents": "none",
            "position": "relative",
            "display": "none",
            "width": "max-content",
            "transitionProperty": "transform",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "500ms",
            "@media (min-width: 768px)": {
                "display": "block",
                "paddingLeft": "40px",
                '&:where([dir="rtl"], [dir="rtl"] *)': {
                    "paddingRight": "40px"
                }
            }
        },
        poiZoomed && {
            "--tw-translate-x": "-200%",
            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
        }
    ];
});
const BlurWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .ZP.div.withConfig({
    displayName: "Containers__BlurWrapper",
    componentId: "sc-1t029ts-4"
}).withConfig({
    componentId: "sc-34db383f-4"
}).withConfig({
    componentId: "sc-434f5fbc-4"
})((param)=>{
    let { isClosed } = param;
    return [
        {
            "pointerEvents": "auto",
            "position": "relative",
            "display": "flex",
            "flexDirection": "column",
            "gap": "2px",
            "transitionProperty": "transform",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "500ms"
        },
        isClosed && {
            "--tw-translate-x": "-107%",
            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
            '&:where([dir="rtl"], [dir="rtl"] *)': {
                "--tw-translate-x": "109%",
                "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
            }
        }
    ];
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [664,774,888,179], function() { return __webpack_exec__(2734); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);