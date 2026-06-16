(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[405],{

/***/ 8312:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        return __webpack_require__(7986);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 1634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  t: function() { return /* binding */ MobileBottomBar; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./src/styles/vars.ts
var vars = __webpack_require__(6059);
;// CONCATENATED MODULE: ./src/components/MobileBottomBar/MobileBottomBar.styled.ts

function _templateObject() {
    const data = (0,_tagged_template_literal._)([
        "\n    z-index: 40;\n    width: 100%;\n    position: absolute;\n    // top: ",
        ";\n    &::before {\n      content: '';\n      position: absolute;\n      inset: 0;\n      z-index: -1;\n      backdrop-filter: blur(8px);\n      mask: linear-gradient(\n        to bottom,\n        transparent 0%,\n        rgba(0, 0, 0, 0.4) 2%,\n        black 18%,\n        black 100%\n      );\n      -webkit-mask: linear-gradient(\n        to bottom,\n        transparent 0%,\n        rgba(0, 0, 0, 0.4) 2%,\n        black 18%,\n        black 100%\n      );\n    }\n    bottom: 0px;\n  "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0,_tagged_template_literal._)([
        "\n    font-style: normal;\n    font-weight: 600;\n    line-height: 140%; /* 16.8px */\n    letter-spacing: 1.8px;\n    text-transform: capitalize;\n  "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}



const Wrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "MobileBottomBarstyled__Wrapper",
    componentId: "sc-wximr9-0"
}).withConfig({
    componentId: "sc-1502d72-0"
}).withConfig({
    componentId: "sc-f1bbd6dc-0"
})(()=>[
        (0,styled_components_browser_esm/* css */.iv)(_templateObject(), vars/* bottomPositionOfMobileThreeJSCanvas */.ni)
    ]);
const Content = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "MobileBottomBarstyled__Content",
    componentId: "sc-wximr9-1"
}).withConfig({
    componentId: "sc-1502d72-1"
}).withConfig({
    componentId: "sc-f1bbd6dc-1"
})({
    "display": "flex",
    "height": "100%",
    "width": "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "gap": "1rem",
    "overflowY": "auto",
    "overflowX": "hidden"
});
const Button = styled_components_browser_esm/* default */.ZP.button.withConfig({
    displayName: "MobileBottomBarstyled__Button",
    componentId: "sc-wximr9-2"
}).withConfig({
    componentId: "sc-1502d72-2"
}).withConfig({
    componentId: "sc-f1bbd6dc-2"
})(()=>[
        {
            "display": "flex",
            "width": "100%",
            "maxWidth": "300px",
            "alignItems": "center",
            "justifyContent": "center",
            "gap": "1rem",
            "borderRadius": "9999px",
            "backgroundColor": "rgb(255 255 255 / 0.75)",
            "paddingLeft": "30px",
            "paddingRight": "30px",
            "paddingTop": "14px",
            "paddingBottom": "14px",
            "fontSize": "12px",
            "--tw-text-opacity": "1",
            "color": "rgb(38 38 38 / var(--tw-text-opacity, 1))"
        },
        (0,styled_components_browser_esm/* css */.iv)(_templateObject1())
    ]);

// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
;// CONCATENATED MODULE: ./public/icons/list_black.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgListBlack = function SvgListBlack(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 14,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    stroke: "#1E1E1E",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.2,
    d: "M1.75 7h10.5M1.75 3.5h10.5M1.75 10.5h10.5"
  })));
};
/* harmony default export */ var list_black = (SvgListBlack);
;// CONCATENATED MODULE: ./public/icons/blueprint.svg
var _g, _defs;
function blueprint_extends() { return blueprint_extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, blueprint_extends.apply(null, arguments); }

var SvgBlueprint = function SvgBlueprint(props) {
  return /*#__PURE__*/react.createElement("svg", blueprint_extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14,
    height: 14,
    fill: "none"
  }, props), _g || (_g = /*#__PURE__*/react.createElement("g", {
    clipPath: "url(#blueprint_svg__a)"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#1E1E1E",
    d: "M12.909.5H1.09a.59.59 0 0 0-.591.59v11.82c0 .325.265.59.59.59h6.698a.59.59 0 0 0 0-1.182H1.682v-5.12h2.757v2.166a.59.59 0 0 0 1.182 0V3.848a.59.59 0 0 0-1.182 0v2.167H1.682V1.682H7.59v2.954c0 .327.264.591.59.591h2.758a.59.59 0 0 0 0-1.181H8.773V1.682h3.545v7.09H8.182a.59.59 0 0 0 0 1.183h4.136v2.363h-.985a.591.591 0 0 0 0 1.182h1.576a.59.59 0 0 0 .59-.59V1.09a.59.59 0 0 0-.59-.59"
  }))), _defs || (_defs = /*#__PURE__*/react.createElement("defs", null, /*#__PURE__*/react.createElement("clipPath", {
    id: "blueprint_svg__a"
  }, /*#__PURE__*/react.createElement("path", {
    fill: "#fff",
    d: "M.5.5h13v13H.5z"
  })))));
};
/* harmony default export */ var blueprint = (SvgBlueprint);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/MobileBottomBar/MobileBottomBar.tsx








const MobileBottomBar = (param)=>{
    let { children, isDetailsScreen = false, isMasterplan = false } = param;
    const POIModalData = (0,useGlobalStore/* useStore */.o)((s)=>s.POIModalData);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const { t } = (0,es/* useTranslation */.$G)();
    const renderButton = ()=>{
        if (!isMasterplan) {
            if (POIModalData) {
                return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
                    onClick: ()=>dispatch({
                            type: globalReducer/* StoreActions */.A.IS_MOBILE_POI_MODAL_OPEN,
                            payload: true
                        }),
                    children: t("read more")
                });
            }
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button, {
                onClick: ()=>dispatch({
                        type: globalReducer/* StoreActions */.A.SET_MOBILE_LIST_OPEN,
                        payload: true
                    }),
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                        children: isDetailsScreen ? /*#__PURE__*/ (0,jsx_runtime.jsx)(blueprint, {}) : /*#__PURE__*/ (0,jsx_runtime.jsx)(list_black, {})
                    }),
                    isDetailsScreen ? t("show apartment details") : t("show apartments list")
                ]
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Wrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Content, {
            children: /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                children: children
            })
        })
    });
};


/***/ }),

/***/ 7986:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __N_SSP: function() { return /* binding */ __N_SSP; },
  "default": function() { return /* binding */ pages; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(2729);
// EXTERNAL MODULE: ./src/styles/mixins.ts
var mixins = __webpack_require__(3654);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 194 modules
var motion = __webpack_require__(3495);
;// CONCATENATED MODULE: ./src/components/Masterplan/Masterplan.style.ts

function _templateObject() {
    const data = (0,_tagged_template_literal._)([
        "\n    &::-webkit-scrollbar-track {\n      margin: 20px;\n    }\n  "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function _templateObject1() {
    const data = (0,_tagged_template_literal._)([
        "\n    ",
        "\n  "
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}




const ScreenWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ScreenWrapper",
    componentId: "sc-pl2hfe-0"
}).withConfig({
    componentId: "sc-ee49896-0"
}).withConfig({
    componentId: "sc-51a55c19-0"
})({
    "pointerEvents": "none",
    "position": "relative",
    "zIndex": "50",
    "display": "flex",
    "height": "fit-content",
    "maxHeight": "100vh",
    "width": "100vw",
    "flexDirection": "column",
    "@media (min-width: 768px)": {
        "zIndex": "30",
        "padding": "2rem",
        "paddingLeft": "40px"
    }
});
const ScreenTitle = styled_components_browser_esm/* default */.ZP.h1.withConfig({
    displayName: "Masterplanstyle__ScreenTitle",
    componentId: "sc-pl2hfe-1"
}).withConfig({
    componentId: "sc-ee49896-1"
}).withConfig({
    componentId: "sc-51a55c19-1"
})({
    "pointerEvents": "auto",
    "marginTop": "0.25rem",
    "marginBottom": "0.25rem",
    "marginLeft": "0.5rem",
    "width": "fit-content",
    "fontSize": "1.75rem",
    "textTransform": "capitalize",
    "@media (min-width: 768px)": {
        "marginTop": "0px",
        "marginBottom": "1rem",
        "marginLeft": "0px",
        "fontSize": "32px"
    }
});
const MainCardWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__MainCardWrapper",
    componentId: "sc-pl2hfe-2"
}).withConfig({
    componentId: "sc-ee49896-2"
}).withConfig({
    componentId: "sc-51a55c19-2"
})(()=>[
        {
            "pointerEvents": "auto",
            "marginBottom": "3.5rem",
            "display": "flex",
            "width": "100%",
            "flexDirection": "column",
            "overflowY": "auto",
            "paddingLeft": "1rem",
            "paddingRight": "1rem",
            "fontSize": "2.625rem",
            "@media (min-width: 768px)": {
                "maxHeight": "calc(100vh - 160px - 100px)",
                "width": "480px",
                "borderRadius": "1.5rem",
                "borderWidth": "1px",
                "borderColor": "rgba(255, 255, 255, 0.20)",
                "backgroundColor": "rgba(0, 0, 0, 0.10)",
                "padding": "2rem",
                "--tw-backdrop-blur": "blur(4px)",
                "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
                "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"
            }
        },
        (0,styled_components_browser_esm/* css */.iv)(_templateObject())
    ]);
const MainCardSection = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__MainCardSection",
    componentId: "sc-pl2hfe-3"
}).withConfig({
    componentId: "sc-ee49896-3"
}).withConfig({
    componentId: "sc-51a55c19-3"
})({});
const MainCardSectionTitle = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "Masterplanstyle__MainCardSectionTitle",
    componentId: "sc-pl2hfe-4"
}).withConfig({
    componentId: "sc-ee49896-4"
}).withConfig({
    componentId: "sc-51a55c19-4"
})({
    "pointerEvents": "auto",
    "marginBottom": "1rem",
    "fontSize": "14px",
    "textTransform": "capitalize",
    "@media (min-width: 768px)": {
        "fontSize": "16px"
    }
});
const MainCardSectionButtonWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__MainCardSectionButtonWrapper",
    componentId: "sc-pl2hfe-5"
}).withConfig({
    componentId: "sc-ee49896-5"
}).withConfig({
    componentId: "sc-51a55c19-5"
})({
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "0.5rem"
});
const MainCardDivider = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__MainCardDivider",
    componentId: "sc-pl2hfe-6"
}).withConfig({
    componentId: "sc-ee49896-6"
}).withConfig({
    componentId: "sc-51a55c19-6"
})({
    "marginTop": "1.5rem",
    "marginBottom": "1.5rem",
    "borderWidth": "1px",
    "borderColor": "rgba(255, 255, 255, 0.2)"
});
const ModalBackdrop = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalBackdrop",
    componentId: "sc-pl2hfe-7"
}).withConfig({
    componentId: "sc-ee49896-7"
}).withConfig({
    componentId: "sc-51a55c19-7"
})({
    "pointerEvents": "auto",
    "position": "absolute",
    "left": "0px",
    "top": "0px",
    "zIndex": "50",
    "display": "flex",
    "height": "100vh",
    "width": "100vw",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgb(0 0 0 / 0.6)"
});
const ModalWrapper = (0,motion/* motion */.E)(styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalWrapper",
    componentId: "sc-pl2hfe-8"
}).withConfig({
    componentId: "sc-ee49896-8"
}).withConfig({
    componentId: "sc-51a55c19-8"
})({
    "height": "75%",
    "width": "91.666667%",
    "borderRadius": "1.5rem",
    "backgroundColor": "rgba(177, 177, 177, 0.3)",
    "padding": "1.5rem",
    "--tw-backdrop-blur": "blur(16px)",
    "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
    "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
    "@media (min-width: 768px)": {
        "height": "480px",
        "width": "860px",
        "padding": "2rem"
    }
}));
const ModalContentWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalContentWrapper",
    componentId: "sc-pl2hfe-9"
}).withConfig({
    componentId: "sc-ee49896-9"
}).withConfig({
    componentId: "sc-51a55c19-9"
})({
    "position": "relative",
    "display": "flex",
    "height": "100%",
    "width": "100%",
    "flexDirection": "column",
    "@media (min-width: 768px)": {
        "flexDirection": "row",
        "gap": "2rem"
    }
});
const ModalCloseButton = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalCloseButton",
    componentId: "sc-pl2hfe-10"
}).withConfig({
    componentId: "sc-ee49896-10"
}).withConfig({
    componentId: "sc-51a55c19-10"
})({
    "position": "absolute",
    "right": "0px",
    "top": "0px",
    "zIndex": "10",
    "display": "flex",
    "height": "3rem",
    "width": "3rem",
    "cursor": "pointer",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "9999px",
    "backgroundColor": "rgba(0,0,0,0.4)",
    "@media (min-width: 768px)": {
        "backgroundColor": "rgba(0, 0, 0, 0.15)"
    }
});
const ModalImageWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalImageWrapper",
    componentId: "sc-pl2hfe-11"
}).withConfig({
    componentId: "sc-ee49896-11"
}).withConfig({
    componentId: "sc-51a55c19-11"
})({
    "position": "relative",
    "height": "100%",
    "width": "100%",
    "borderRadius": "0.5rem",
    "textAlign": "center",
    "@media (min-width: 768px)": {
        "width": "50%"
    }
});
const ModalImage = styled_components_browser_esm/* default */.ZP.img.withConfig({
    displayName: "Masterplanstyle__ModalImage",
    componentId: "sc-pl2hfe-12"
}).withConfig({
    componentId: "sc-ee49896-12"
}).withConfig({
    componentId: "sc-51a55c19-12"
})({
    "height": "100%",
    "width": "100%",
    "borderRadius": "0.5rem",
    "objectFit": "cover"
});
//  justify-content:safe center is in development for iOS Safari
const ModalTextWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalTextWrapper",
    componentId: "sc-pl2hfe-13"
}).withConfig({
    componentId: "sc-ee49896-13"
}).withConfig({
    componentId: "sc-51a55c19-13"
})((param)=>{
    let { noImage } = param;
    return [
        {
            "marginBottom": "1rem",
            "display": "flex",
            "height": "100%",
            "width": "100%",
            "flexDirection": "column",
            "overflowY": "auto",
            "justifyContent": "safe center",
            "@media (min-width: 768px)": {
                "width": "50%"
            }
        },
        noImage && {
            "textAlign": "center",
            "@media (min-width: 768px)": {
                "width": "100%"
            }
        }
    ];
});
const ModalTitle = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "Masterplanstyle__ModalTitle",
    componentId: "sc-pl2hfe-14"
}).withConfig({
    componentId: "sc-ee49896-14"
}).withConfig({
    componentId: "sc-51a55c19-14"
})({
    "marginBottom": "1rem",
    "fontSize": "1.75rem",
    "textTransform": "capitalize"
});
const ModalText = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "Masterplanstyle__ModalText",
    componentId: "sc-pl2hfe-15"
}).withConfig({
    componentId: "sc-ee49896-15"
}).withConfig({
    componentId: "sc-51a55c19-15"
})({
    "fontSize": "12px"
});
const Button = styled_components_browser_esm/* default */.ZP.button.withConfig({
    displayName: "Masterplanstyle__Button",
    componentId: "sc-pl2hfe-16"
}).withConfig({
    componentId: "sc-ee49896-16"
}).withConfig({
    componentId: "sc-51a55c19-16"
})((param)=>{
    let { isActive, isHovered } = param;
    return [
        {
            "display": "flex",
            "borderRadius": "9999px",
            "borderWidth": "1px",
            "borderColor": "rgba(255, 255, 255, 0.20)",
            "backgroundColor": "rgba(0, 0, 0, 0.10)",
            "paddingLeft": "0.75rem",
            "paddingRight": "0.75rem",
            "paddingTop": "0.25rem",
            "paddingBottom": "0.25rem",
            "transitionProperty": "all",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "200ms",
            "&:hover": {
                "borderColor": "rgba(255, 255, 255, 0.60)",
                "backgroundColor": "rgba(255, 255, 255, 0.10)"
            }
        },
        isActive && {
            "borderColor": "rgba(255, 255, 255, 0.60)",
            "--tw-bg-opacity": "1",
            "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity, 1))"
        },
        isHovered && {
            "borderColor": "rgba(255, 255, 255, 0.60)",
            "backgroundColor": "rgba(255, 255, 255, 0.10)"
        }
    ];
});
const ButtonText = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "Masterplanstyle__ButtonText",
    componentId: "sc-pl2hfe-17"
}).withConfig({
    componentId: "sc-ee49896-17"
}).withConfig({
    componentId: "sc-51a55c19-17"
})((param)=>{
    let { isActive, isHovered, secondary } = param;
    return [
        (0,styled_components_browser_esm/* css */.iv)(_templateObject1(), (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading6)),
        {
            "fontSize": "12px",
            "textTransform": "capitalize",
            "letterSpacing": "0.6px",
            "transitionProperty": "all",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "75ms",
            ".group:hover &": {
                "--tw-text-opacity": "1",
                "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
            }
        },
        isActive && {
            "--tw-text-opacity": "1",
            "color": "rgb(0 0 0 / var(--tw-text-opacity, 1))"
        },
        isHovered && {
            "--tw-text-opacity": "1",
            "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
        },
        secondary && {
            "display": "flex",
            "height": "2.25rem",
            "alignItems": "center",
            "justifyContent": "center"
        }
    ];
/*
tw`group-hover:(bg-text-gradient text-transparent bg-clip-text) capitalize transition-all 
  duration-75 text-sm tracking-[0.6px]`,
isActive && tw`bg-text-gradient text-transparent bg-clip-text`,
isHovered && tw`bg-text-gradient text-transparent bg-clip-text`,
*/ });
const DetailsCard = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__DetailsCard",
    componentId: "sc-pl2hfe-18"
}).withConfig({
    componentId: "sc-ee49896-18"
}).withConfig({
    componentId: "sc-51a55c19-18"
})((param)=>{
    let { isClosed } = param;
    return [
        {
            "pointerEvents": "auto",
            "position": "relative",
            "display": "flex",
            "flexDirection": "column",
            "alignItems": "flex-start",
            "transitionProperty": "transform",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "500ms"
        },
        {
            "width": "100%",
            "borderRadius": "1.5rem",
            "padding": "1rem",
            "@media (min-width: 768px)": {
                "width": "580px",
                "borderWidth": "2px",
                "borderColor": "rgba(255, 255, 255, 0.20)",
                "backgroundColor": "rgba(0, 0, 0, 0.10)",
                "padding": "2.5rem",
                "--tw-backdrop-blur": "blur(4px)",
                "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
                "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"
            }
        },
        isClosed && {
            "--tw-translate-x": "-90%",
            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
        }
    ];
});
const DetailsTitle = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "Masterplanstyle__DetailsTitle",
    componentId: "sc-pl2hfe-19"
}).withConfig({
    componentId: "sc-ee49896-19"
}).withConfig({
    componentId: "sc-51a55c19-19"
})({
    "marginBottom": "1rem",
    "fontSize": "24px",
    "textTransform": "capitalize",
    "lineHeight": "24px"
});
const DetailsText = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "Masterplanstyle__DetailsText",
    componentId: "sc-pl2hfe-20"
}).withConfig({
    componentId: "sc-ee49896-20"
}).withConfig({
    componentId: "sc-51a55c19-20"
})({
    "marginBottom": "2rem",
    "fontSize": "14px"
});
const DetailsButtonsWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__DetailsButtonsWrapper",
    componentId: "sc-pl2hfe-21"
}).withConfig({
    componentId: "sc-ee49896-21"
}).withConfig({
    componentId: "sc-51a55c19-21"
})({
    "display": "flex",
    "width": "100%",
    "flexDirection": "column",
    "gap": "0.5rem",
    "@media (min-width: 768px)": {
        "width": "140px"
    }
});
const DetailsButton = styled_components_browser_esm/* default */.ZP.button.withConfig({
    displayName: "Masterplanstyle__DetailsButton",
    componentId: "sc-pl2hfe-22"
}).withConfig({
    componentId: "sc-ee49896-22"
}).withConfig({
    componentId: "sc-51a55c19-22"
})({
    "position": "relative",
    "borderRadius": "9999px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(234 234 234 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "2.5rem",
    "paddingRight": "2.5rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "&:hover:hover": {
        "backgroundImage": "linear-gradient(to right, #00e0ff 0%, #111bff 100%)"
    }
});
const DetailsButtonText = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "Masterplanstyle__DetailsButtonText",
    componentId: "sc-pl2hfe-23"
}).withConfig({
    componentId: "sc-ee49896-23"
}).withConfig({
    componentId: "sc-51a55c19-23"
})({
    "backgroundImage": "linear-gradient(to right, #00e0ff 0%, #111bff 100%)",
    "WebkitBackgroundClip": "text",
    "backgroundClip": "text",
    "fontSize": "12px",
    "textTransform": "capitalize",
    "color": "transparent",
    ".group:hover &": {
        "--tw-text-opacity": "1",
        "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
    }
});
const ModalSlider = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalSlider",
    componentId: "sc-pl2hfe-24"
}).withConfig({
    componentId: "sc-ee49896-24"
}).withConfig({
    componentId: "sc-51a55c19-24"
})({
    "position": "absolute",
    "bottom": "0.5rem",
    "left": "50%",
    "display": "flex",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "justifyContent": "center",
    "gap": "0.5rem"
});
const ModalSliderButton = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Masterplanstyle__ModalSliderButton",
    componentId: "sc-pl2hfe-25"
}).withConfig({
    componentId: "sc-ee49896-25"
}).withConfig({
    componentId: "sc-51a55c19-25"
})((param)=>{
    let { isActive } = param;
    return [
        {
            "height": "1rem",
            "width": "1rem",
            "cursor": "pointer",
            "borderRadius": "9999px",
            "borderWidth": "1px",
            "borderColor": "rgba(255, 255, 255, 0.4)",
            "backgroundColor": "rgba(217, 217, 217, 0.1)",
            "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "300ms"
        },
        !isActive && {
            "&:hover": {
                "--tw-border-opacity": "1",
                "borderColor": "rgb(255 255 255 / var(--tw-border-opacity, 1))",
                "backgroundColor": "rgba(217, 217, 217, 0.2)"
            }
        },
        isActive && {
            "borderColor": "rgba(255, 255, 255, 0.6)",
            "backgroundColor": "rgba(217, 217, 217, 0.4)"
        }
    ];
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
;// CONCATENATED MODULE: ./src/components/Masterplan/Modal.tsx




const Modal = (param)=>{
    let { title, text, imgSrc, onClose } = param;
    const [currentIndex, setCurrentIndex] = (0,react.useState)(0);
    const { t } = (0,es/* useTranslation */.$G)();
    const selectImage = (index)=>{
        setCurrentIndex(index);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalBackdrop, {
        onClick: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalWrapper, {
            initial: {
                opacity: 0,
                backdropFilter: "blur(0px)"
            },
            animate: {
                opacity: 1,
                backdropFilter: "blur(16px)"
            },
            transition: {
                duration: 0.5
            },
            onClick: (e)=>e.stopPropagation(),
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModalContentWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalCloseButton, {
                        onClick: onClose,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseSVG, {})
                    }),
                    imgSrc.length > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModalImageWrapper, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalImage, {
                                src: imgSrc[currentIndex],
                                alt: "popup image"
                            }),
                            imgSrc.length > 1 && /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalSlider, {
                                children: imgSrc.map((_, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ModalSliderButton, {
                                        onClick: ()=>selectImage(index),
                                        isActive: currentIndex === index
                                    }, index))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModalTextWrapper, {
                        noImage: imgSrc.length < 1,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalTitle, {
                                children: t(title)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ModalText, {
                                children: t(text)
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const CloseSVG = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "10",
        height: "10",
        viewBox: "0 0 10 10",
        fill: "none",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M1.30859 1.30859L8.69321 8.69321",
                stroke: "white",
                strokeWidth: "0.923077",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M8.69141 1.30859L1.30679 8.69321",
                stroke: "white",
                strokeWidth: "0.923077",
                strokeLinecap: "round"
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Masterplan/Button.tsx


const Button_Button = (param)=>{
    let { text, isActive, isHovered, onClick, onMouseEnter, onMouseLeave, secondary = false } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button, {
        isActive: isActive,
        isHovered: isHovered,
        className: "group",
        onClick: onClick,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onMouseLeave,
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ButtonText, {
            isActive: isActive,
            isHovered: isHovered,
            secondary: secondary,
            children: text
        })
    });
};

// EXTERNAL MODULE: ./public/jsonData/POIConfig.json
var POIConfig = __webpack_require__(9417);
// EXTERNAL MODULE: ./src/containers/VideoConfigurator/threeJSManager/ThreeJSManager.ts + 34 modules
var ThreeJSManager = __webpack_require__(586);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
// EXTERNAL MODULE: ./src/utils/pubsub.ts
var pubsub = __webpack_require__(1933);
// EXTERNAL MODULE: ./src/components/CloseUIButton/CloseUIButton.tsx
var CloseUIButton = __webpack_require__(5783);
// EXTERNAL MODULE: ./types/const.ts
var types_const = __webpack_require__(2409);
// EXTERNAL MODULE: ./public/jsonData/PointOfInterestConfig.json
var PointOfInterestConfig = __webpack_require__(6733);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/Masterplan/MainCard.tsx














const MainCard = ()=>{
    const videoController = (0,useGlobalStore/* useStore */.o)((s)=>s.videoController);
    const isVideoTransitioning = (0,useGlobalStore/* useStore */.o)((s)=>s.isVideoTransitioning);
    const hoveredPOIName = (0,useGlobalStore/* useStore */.o)((s)=>s.hoveredPOIName);
    const activePOIName = (0,useGlobalStore/* useStore */.o)((s)=>s.activePOIName);
    const isUIClosed = (0,useGlobalStore/* useStore */.o)((s)=>s.isUIClosed);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const { t } = (0,es/* useTranslation */.$G)();
    const handleMouseEnter = (name)=>{
        dispatch({
            type: globalReducer/* StoreActions */.A.SET_HOVERED_POI_NAME,
            payload: name
        });
        const pointOfInterestData = {
            name
        };
        pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.POI_HOVERED, {
            pointOfInterestData
        });
    };
    const handleMouseLeave = (name)=>{
        dispatch({
            type: globalReducer/* StoreActions */.A.SET_HOVERED_POI_NAME,
            payload: ""
        });
        const pointOfInterestData = {
            name
        };
        pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.POI_UNHOVERED, {
            pointOfInterestData
        });
    };
    const handleSetModalData = (data)=>{
        dispatch({
            type: globalReducer/* StoreActions */.A.SET_POI_MODAL_DATA,
            payload: data
        });
    };
    const transitionToCamera = (point)=>{
        var _PointOfInterestConfig_projects_find, _ThreeJSManager_instance;
        if (isVideoTransitioning) return;
        const canPlay = videoController === null || videoController === void 0 ? void 0 : videoController.PlaySelectedVideoFromCurrent(point.camera);
        const districtData = (_PointOfInterestConfig_projects_find = PointOfInterestConfig/* projects */.q.find((project)=>project.name.toLowerCase() == "masterplan")) === null || _PointOfInterestConfig_projects_find === void 0 ? void 0 : _PointOfInterestConfig_projects_find.district.find((district)=>district.name === point.name);
        if (districtData) {
            setTimeout(()=>{
                // we need full reload because video player is not reset
                window.location.href = districtData.redirect;
            // 2000 ms because that's the video transition length
            }, 2000);
        } else {
            setTimeout(()=>handleSetModalData(point), canPlay ? types_const/* SHOW_MODAL_TIMEOUT */.aA : 0);
        }
        if (!canPlay) return;
        (_ThreeJSManager_instance = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance === void 0 ? void 0 : _ThreeJSManager_instance.playSection();
        dispatch({
            type: globalReducer/* StoreActions */.A.TOGGLE_VIDEO_TRANSITIONING,
            payload: true
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv, {
        $_css: [
            {
                "position": "relative",
                "width": "fit-content"
            },
            {
                "transitionProperty": "transform",
                "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                "transitionDuration": "500ms"
            },
            isUIClosed && {
                "--tw-translate-x": "-110%",
                "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                '&:where([dir="rtl"], [dir="rtl"] *)': {
                    "--tw-translate-x": "110%",
                    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
                }
            }
        ],
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseUIButton/* CloseUIButton */.A, {
                rightPosition: 2
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(MainCardWrapper, {
                children: Object.values(POIConfig.projects.find((project)=>project.name.toLowerCase() == "masterplan").section).map((section, idx)=>{
                    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react.Fragment, {
                        children: [
                            idx !== 0 && /*#__PURE__*/ (0,jsx_runtime.jsx)(MainCardDivider, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MainCardSection, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MainCardSectionTitle, {
                                        children: section.title
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MainCardSectionButtonWrapper, {
                                        children: Object.values(section.points).map((point)=>{
                                            return /*#__PURE__*/ (0,jsx_runtime.jsx)(Button_Button, {
                                                text: t(point.name),
                                                isHovered: hoveredPOIName === point.name,
                                                isActive: activePOIName === point.name,
                                                onMouseEnter: ()=>handleMouseEnter(point.name),
                                                onMouseLeave: ()=>handleMouseLeave(point.name),
                                                onClick: ()=>{
                                                    transitionToCamera(point);
                                                    dispatch({
                                                        type: globalReducer/* StoreActions */.A.SET_ACTIVE_POI_NAME,
                                                        payload: point.name
                                                    });
                                                }
                                            }, point.name);
                                        })
                                    })
                                ]
                            })
                        ]
                    }, section.title);
                })
            })
        ]
    });
};
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    displayName: "MainCard___StyledDiv",
    componentId: "sc-9u801q-0"
}).withConfig({
    componentId: "sc-ed94a155-0"
}).withConfig({
    componentId: "sc-c02c41cb-0"
})([
    "",
    ""
], (p)=>p.$_css);

// EXTERNAL MODULE: ./src/components/MobileBottomBar/MobileBottomBar.tsx + 3 modules
var MobileBottomBar = __webpack_require__(1634);
// EXTERNAL MODULE: ./src/components/Slider/Slider.tsx + 4 modules
var Slider = __webpack_require__(5793);
// EXTERNAL MODULE: ./src/components/Slider/hooks/useSliderConfig.ts + 2 modules
var useSliderConfig = __webpack_require__(4557);
// EXTERNAL MODULE: ./types/enums.ts
var enums = __webpack_require__(806);
;// CONCATENATED MODULE: ./src/pages/index.tsx












const Home = ()=>{
    const deviceType = (0,useGlobalStore/* useStore */.o)((s)=>s.deviceType);
    const POIModalData = (0,useGlobalStore/* useStore */.o)((s)=>s.POIModalData);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const { t } = (0,es/* useTranslation */.$G)();
    (0,useSliderConfig/* useSliderConfig */.P1)([
        {
            type: "masterplan",
            data: {
                district: "Masterplan"
            }
        }
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ScreenWrapper, {
                children: [
                    (POIModalData === null || POIModalData === void 0 ? void 0 : POIModalData.modalData.title) && /*#__PURE__*/ (0,jsx_runtime.jsx)(Modal, {
                        imgSrc: POIModalData.modalData.imgPath,
                        title: POIModalData.modalData.title,
                        text: POIModalData.modalData.text,
                        onClose: ()=>{
                            dispatch({
                                type: globalReducer/* StoreActions */.A.SET_POI_MODAL_DATA,
                                payload: null
                            });
                            dispatch({
                                type: globalReducer/* StoreActions */.A.SET_IS_UI_CLOSED,
                                payload: false
                            });
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ScreenTitle, {
                        children: t("masterplan")
                    }),
                    enums/* DeviceType */.Yi.MOBILE !== deviceType && /*#__PURE__*/ (0,jsx_runtime.jsx)(MainCard, {})
                ]
            }),
            enums/* DeviceType */.Yi.MOBILE === deviceType && /*#__PURE__*/ (0,jsx_runtime.jsxs)(MobileBottomBar/* MobileBottomBar */.t, {
                isMasterplan: true,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* Slider */.i, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(pages_StyledDiv, {}),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(MainCard, {})
                ]
            })
        ]
    });
};
var __N_SSP = true;
/* harmony default export */ var pages = (Home);
var pages_StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    displayName: "pages___StyledDiv",
    componentId: "sc-15icc5g-0"
}).withConfig({
    componentId: "sc-f9d6f419-0"
}).withConfig({
    componentId: "sc-9162a174-0"
})({
    "paddingTop": "1.5rem"
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [774,888,179], function() { return __webpack_exec__(8312); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);