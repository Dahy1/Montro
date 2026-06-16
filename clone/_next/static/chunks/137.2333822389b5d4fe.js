"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[137],{

/***/ 8925:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CookiesConsent; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__(4204);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Cookies/CookieConsent.styles.ts


const ContentWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "CookieConsentstyles__ContentWrapper",
    componentId: "sc-m4i5ay-0"
}).withConfig({
    componentId: "sc-7d0205e8-0"
}).withConfig({
    componentId: "sc-c699514b-0"
})({
    "position": "fixed",
    "bottom": "0px",
    "zIndex": "50",
    "display": "flex",
    "width": "100vw",
    "flexDirection": "column",
    "alignItems": "center",
    "gap": "1.25rem",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(17 24 39 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "1.25rem",
    "paddingRight": "1.25rem",
    "paddingTop": "2rem",
    "paddingBottom": "2rem",
    "@media (min-width: 1024px)": {
        "right": "0px",
        "width": "300px",
        "paddingLeft": "1.25rem",
        "paddingRight": "1.25rem",
        "paddingBottom": "1.25rem",
        "paddingTop": "2rem"
    }
});
const CloseButton = styled_components_browser_esm/* default */.ZP.button.withConfig({
    displayName: "CookieConsentstyles__CloseButton",
    componentId: "sc-m4i5ay-1"
}).withConfig({
    componentId: "sc-7d0205e8-1"
}).withConfig({
    componentId: "sc-c699514b-1"
})({
    "position": "absolute",
    "right": "0.625rem",
    "top": "0.625rem",
    "display": "none",
    "--tw-text-opacity": "1",
    "color": "rgb(174 174 174 / var(--tw-text-opacity, 1))",
    "@media (min-width: 1024px)": {
        "display": "block"
    }
});
const TextWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "CookieConsentstyles__TextWrapper",
    componentId: "sc-m4i5ay-2"
}).withConfig({
    componentId: "sc-7d0205e8-2"
}).withConfig({
    componentId: "sc-c699514b-2"
})({});
const Paragraph = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "CookieConsentstyles__Paragraph",
    componentId: "sc-m4i5ay-3"
}).withConfig({
    componentId: "sc-7d0205e8-3"
}).withConfig({
    componentId: "sc-c699514b-3"
})([
    "font-style:normal;font-weight:400;line-height:140%;letter-spacing:-0.42px;",
    ""
], {
    "fontSize": "1rem",
    "--tw-text-opacity": "1",
    "color": "rgb(55 65 81 / var(--tw-text-opacity, 1))",
    "@media (min-width: 1024px)": {
        "fontSize": "14px"
    }
});
const StyledLink = (0,styled_components_browser_esm/* default */.ZP)((link_default())).withConfig({
    displayName: "CookieConsentstyles__StyledLink",
    componentId: "sc-m4i5ay-4"
}).withConfig({
    componentId: "sc-7d0205e8-4"
}).withConfig({
    componentId: "sc-c699514b-4"
})({
    "cursor": "pointer",
    "textDecorationLine": "underline"
});
const ButtonsWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "CookieConsentstyles__ButtonsWrapper",
    componentId: "sc-m4i5ay-5"
}).withConfig({
    componentId: "sc-7d0205e8-5"
}).withConfig({
    componentId: "sc-c699514b-5"
})([
    "button{width:100%;}",
    ""
], {
    "display": "flex",
    "width": "100%",
    "maxWidth": "20rem",
    "flexDirection": "column",
    "alignItems": "center",
    "gap": "0.625rem"
});

// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: ./src/components/Cookies/CookiesConsent.tsx






const CookieConsent = ()=>{
    const [accepted, setAccepted] = (0,react.useState)(false);
    const [show, setShow] = (0,react.useState)(false);
    const { t } = (0,es/* useTranslation */.$G)();
    (0,react.useEffect)(()=>{
        const cookies = document.cookie.split(";");
        const acceptedCookies = cookies.find((cookie)=>cookie.includes("accepted"));
        if (acceptedCookies) {
            setAccepted(true);
        } else {
            setShow(true);
        }
    }, []);
    (0,react.useEffect)(()=>{
        if (accepted) {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            document.cookie = "accepted=true; expires=".concat(date.toUTCString(), "; secure;");
            // Update Google Tag Manager
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "cookie_consent_update",
                cookie_consent: "accepted"
            });
        }
    }, [
        accepted
    ]);
    if (accepted) {
        return null;
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: show && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentWrapper, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseButton, {
                    onClick: ()=>setShow(false),
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(index_esm/* IoCloseOutline */.IOM, {})
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(TextWrapper, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Paragraph, {
                        children: [
                            "We are using cookies to ensure you get the best experience on our website.",
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(StyledLink, {
                                href: "/cookie-policy",
                                children: "Check out our Cookie Policy"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonsWrapper, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: ()=>setAccepted(true),
                            children: "Accept All"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                            onClick: ()=>setShow(false),
                            children: "Reject non-essential"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ var CookiesConsent = (CookieConsent);


/***/ }),

/***/ 8357:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  w_: function() { return /* reexport */ GenIcon; }
});

// UNUSED EXPORTS: DefaultContext, IconBase, IconContext, IconsManifest

;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconsManifest.js
var IconsManifest = [
  {
    "id": "ci",
    "name": "Circum Icons",
    "projectUrl": "https://circumicons.com/",
    "license": "MPL-2.0 license",
    "licenseUrl": "https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE"
  },
  {
    "id": "fa",
    "name": "Font Awesome 5",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "fa6",
    "name": "Font Awesome 6",
    "projectUrl": "https://fontawesome.com/",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "io",
    "name": "Ionicons 4",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "io5",
    "name": "Ionicons 5",
    "projectUrl": "https://ionicons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/ionic-team/ionicons/blob/master/LICENSE"
  },
  {
    "id": "md",
    "name": "Material Design icons",
    "projectUrl": "http://google.github.io/material-design-icons/",
    "license": "Apache License Version 2.0",
    "licenseUrl": "https://github.com/google/material-design-icons/blob/master/LICENSE"
  },
  {
    "id": "ti",
    "name": "Typicons",
    "projectUrl": "http://s-ings.com/typicons/",
    "license": "CC BY-SA 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/"
  },
  {
    "id": "go",
    "name": "Github Octicons icons",
    "projectUrl": "https://octicons.github.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/primer/octicons/blob/master/LICENSE"
  },
  {
    "id": "fi",
    "name": "Feather",
    "projectUrl": "https://feathericons.com/",
    "license": "MIT",
    "licenseUrl": "https://github.com/feathericons/feather/blob/master/LICENSE"
  },
  {
    "id": "lu",
    "name": "Lucide",
    "projectUrl": "https://lucide.dev/",
    "license": "ISC",
    "licenseUrl": "https://github.com/lucide-icons/lucide/blob/main/LICENSE"
  },
  {
    "id": "gi",
    "name": "Game Icons",
    "projectUrl": "https://game-icons.net/",
    "license": "CC BY 3.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/3.0/"
  },
  {
    "id": "wi",
    "name": "Weather Icons",
    "projectUrl": "https://erikflowers.github.io/weather-icons/",
    "license": "SIL OFL 1.1",
    "licenseUrl": "http://scripts.sil.org/OFL"
  },
  {
    "id": "di",
    "name": "Devicons",
    "projectUrl": "https://vorillaz.github.io/devicons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ai",
    "name": "Ant Design Icons",
    "projectUrl": "https://github.com/ant-design/ant-design-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "bs",
    "name": "Bootstrap Icons",
    "projectUrl": "https://github.com/twbs/icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "ri",
    "name": "Remix Icon",
    "projectUrl": "https://github.com/Remix-Design/RemixIcon",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "fc",
    "name": "Flat Color Icons",
    "projectUrl": "https://github.com/icons8/flat-color-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "gr",
    "name": "Grommet-Icons",
    "projectUrl": "https://github.com/grommet/grommet-icons",
    "license": "Apache License Version 2.0",
    "licenseUrl": "http://www.apache.org/licenses/"
  },
  {
    "id": "hi",
    "name": "Heroicons",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "hi2",
    "name": "Heroicons 2",
    "projectUrl": "https://github.com/tailwindlabs/heroicons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "si",
    "name": "Simple Icons",
    "projectUrl": "https://simpleicons.org/",
    "license": "CC0 1.0 Universal",
    "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/"
  },
  {
    "id": "sl",
    "name": "Simple Line Icons",
    "projectUrl": "https://thesabbir.github.io/simple-line-icons/",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "im",
    "name": "IcoMoon Free",
    "projectUrl": "https://github.com/Keyamoon/IcoMoon-Free",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt"
  },
  {
    "id": "bi",
    "name": "BoxIcons",
    "projectUrl": "https://github.com/atisawd/boxicons",
    "license": "CC BY 4.0 License",
    "licenseUrl": "https://github.com/atisawd/boxicons/blob/master/LICENSE"
  },
  {
    "id": "cg",
    "name": "css.gg",
    "projectUrl": "https://github.com/astrit/css.gg",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "vsc",
    "name": "VS Code Icons",
    "projectUrl": "https://github.com/microsoft/vscode-codicons",
    "license": "CC BY 4.0",
    "licenseUrl": "https://creativecommons.org/licenses/by/4.0/"
  },
  {
    "id": "tb",
    "name": "Tabler Icons",
    "projectUrl": "https://github.com/tabler/tabler-icons",
    "license": "MIT",
    "licenseUrl": "https://opensource.org/licenses/MIT"
  },
  {
    "id": "tfi",
    "name": "Themify Icons",
    "projectUrl": "https://github.com/lykmapipo/themify-icons",
    "license": "MIT",
    "licenseUrl": "https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE"
  },
  {
    "id": "rx",
    "name": "Radix Icons",
    "projectUrl": "https://icons.radix-ui.com",
    "license": "MIT",
    "licenseUrl": "https://github.com/radix-ui/icons/blob/master/LICENSE"
  },
  {
    "id": "pi",
    "name": "Phosphor Icons",
    "projectUrl": "https://github.com/phosphor-icons/core",
    "license": "MIT",
    "licenseUrl": "https://github.com/phosphor-icons/core/blob/main/LICENSE"
  },
  {
    "id": "lia",
    "name": "Icons8 Line Awesome",
    "projectUrl": "https://icons8.com/line-awesome",
    "license": "MIT",
    "licenseUrl": "https://github.com/icons8/line-awesome/blob/master/LICENSE.md"
  }
]
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconContext.js

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = react.createContext && react.createContext(DefaultContext);
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/iconBase.js
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};


function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return react.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  // eslint-disable-next-line react/display-name
  return function (props) {
    return react.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
      size = props.size,
      title = props.title,
      svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return react.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && react.createElement("title", null, title), props.children);
  };
  return IconContext !== undefined ? react.createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
;// CONCATENATED MODULE: ./node_modules/react-icons/lib/esm/index.js




/***/ })

}]);