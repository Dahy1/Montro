"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[153],{

/***/ 1787:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AA: function() { return /* binding */ FavouriteButton; },
/* harmony export */   F2: function() { return /* binding */ ComparisonButton; },
/* harmony export */   uZ: function() { return /* binding */ CopyLinkButton; }
/* harmony export */ });
/* unused harmony export Lead */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1686);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3935);
/* harmony import */ var _utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4919);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7294);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2120);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4173);
/* harmony import */ var _barrel_optimize_names_FiLoader_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6893);
/* harmony import */ var _hooks_useComparisonList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3561);









const FavouriteButton = (param)=>{
    let { apartment, baseColor = "white", height = 22, width = 22 } = param;
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const [isFavourite, setIsFavourite] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const storedFavourites = localStorage.getItem("favouriteApartments");
        const existingFavourites = storedFavourites ? JSON.parse(storedFavourites) : [];
        const apartmentExists = existingFavourites.some((fav)=>fav.ExternalId === apartment.ExternalId);
        setIsFavourite(apartmentExists);
    }, [
        apartment
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledButton, {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        onClick: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            const storedFavourites = localStorage.getItem("favouriteApartments");
            const existingFavourites = storedFavourites ? JSON.parse(storedFavourites) : [];
            const apartmentExists = existingFavourites.some((fav)=>fav.ExternalId === apartment.ExternalId);
            if (apartmentExists) {
                // Remove the apartment from favourites
                const updatedFavourites = existingFavourites.filter((fav)=>fav.ExternalId !== apartment.ExternalId);
                localStorage.setItem("favouriteApartments", JSON.stringify(updatedFavourites));
                const toastMessage = (0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__/* .capitalizeFirstLetter */ .fm)(t("apartment removed from favourites"));
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .Am)(toastMessage, {
                    position: "bottom-right",
                    autoClose: 3000
                });
                setIsFavourite(false);
            } else {
                existingFavourites.push(apartment);
                localStorage.setItem("favouriteApartments", JSON.stringify(existingFavourites));
                const toastMessage = (0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__/* .capitalizeFirstLetter */ .fm)(t("apartment added to favourites"));
                react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .Am.success(toastMessage, {
                    position: "bottom-right",
                    autoClose: 3000
                });
                setIsFavourite(true);
            }
        },
        children: [
            isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledSpan, {
                style: {
                    // @ts-ignore
                    textWrap: "nowrap"
                },
                children: t("favourite")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: width,
                height: height,
                viewBox: "0 0 22 22",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                    d: "M19.1036 4.22555C18.6354 3.75714 18.0795 3.38556 17.4677 3.13205C16.8558 2.87853 16.2001 2.74805 15.5378 2.74805C14.8755 2.74805 14.2197 2.87853 13.6079 3.13205C12.996 3.38556 12.4401 3.75714 11.9719 4.22555L11.0003 5.19722L10.0286 4.22555C9.08289 3.27984 7.80022 2.74854 6.46277 2.74854C5.12532 2.74854 3.84266 3.27984 2.89694 4.22555C1.95122 5.17127 1.41992 6.45394 1.41992 7.79139C1.41992 9.12883 1.95122 10.4115 2.89694 11.3572L3.8686 12.3289L11.0003 19.4606L18.1319 12.3289L19.1036 11.3572C19.572 10.889 19.9436 10.3331 20.1971 9.7213C20.4506 9.10946 20.5811 8.45367 20.5811 7.79139C20.5811 7.12911 20.4506 6.47332 20.1971 5.86148C19.9436 5.24964 19.572 4.69375 19.1036 4.22555Z",
                    stroke: baseColor,
                    fill: isFavourite ? baseColor : "",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            })
        ]
    });
};
const CopyLinkButton = (param)=>{
    let { height = 22, width = 22, baseColor = "white" } = param;
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledButton2, {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        onClick: ()=>{
            (0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__/* .copyUrlToClip */ .G0)();
            const toastMessage = (0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__/* .capitalizeFirstLetter */ .fm)(t("link copied to clipboard"));
            react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .Am.success(toastMessage, {
                position: "bottom-right",
                autoClose: 3000
            });
        },
        children: [
            isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledSpan2, {
                style: {
                    // @ts-ignore
                    textWrap: "nowrap"
                },
                children: t("copy link")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: width,
                height: height,
                viewBox: "0 0 22 22",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M18.3333 8.25H10.0833C9.07081 8.25 8.25 9.07081 8.25 10.0833V18.3333C8.25 19.3459 9.07081 20.1667 10.0833 20.1667H18.3333C19.3459 20.1667 20.1667 19.3459 20.1667 18.3333V10.0833C20.1667 9.07081 19.3459 8.25 18.3333 8.25Z",
                        stroke: baseColor,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M4.58301 13.7497H3.66634C3.18011 13.7497 2.7138 13.5565 2.36998 13.2127C2.02616 12.8689 1.83301 12.4026 1.83301 11.9163V3.66634C1.83301 3.18011 2.02616 2.7138 2.36998 2.36998C2.7138 2.02616 3.18011 1.83301 3.66634 1.83301H11.9163C12.4026 1.83301 12.8689 2.02616 13.2127 2.36998C13.5565 2.7138 13.7497 3.18011 13.7497 3.66634V4.58301",
                        stroke: baseColor,
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                ]
            })
        ]
    });
};
const Lead = ()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const { t } = useTranslation();
    const [isLeadFormOpen, setIsLeadFormOpen] = useState(false);
    const [isPending, setIsPending] = useState(false);
    const sendLead = async ()=>{
        if (!name || !email) {
            const toastMessage = capitalizeFirstLetter(t("please fill out the form"));
            toast.error(toastMessage, {
                position: "bottom-right",
                autoClose: 3000
            });
            return;
        }
        if (!email.includes("@")) {
            const toastMessage = capitalizeFirstLetter(t("please enter a valid email"));
            toast.error(toastMessage, {
                position: "bottom-right",
                autoClose: 3000
            });
            return;
        }
        const storedFavourites = localStorage.getItem("favouriteApartments");
        const existingFavourites = storedFavourites ? JSON.parse(storedFavourites) : [];
        const externalIds = existingFavourites.map((apartment)=>apartment.ExternalId).join(",");
        setIsPending(true);
        const responseLead = await fetch("/api/lead", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: {
                    name: name.split(" ").map((part)=>capitalizeFirstLetter(part)).join(" "),
                    email,
                    favouriteApartments: externalIds
                }
            })
        });
        if (responseLead.ok) {
            const toastMessage = capitalizeFirstLetter(t("sent successfully"));
            toast.success(toastMessage, {
                position: "bottom-right",
                autoClose: 3000
            });
        } else {
            const toastMessage = capitalizeFirstLetter(t("failed to send please try again later"));
            toast.error(toastMessage, {
                position: "bottom-right",
                autoClose: 3000
            });
        }
        setIsLeadFormOpen(false);
        setName("");
        setEmail("");
        setIsPending(false);
    };
    return /*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            isLeadFormOpen && /*#__PURE__*/ ReactDOM.createPortal(/*#__PURE__*/ _jsx(_StyledDiv, {
                onClick: ()=>setIsLeadFormOpen(false),
                children: /*#__PURE__*/ _jsxs(_StyledDiv2, {
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ _jsx(_StyledP, {
                            children: t("contact")
                        }),
                        /*#__PURE__*/ _jsx(_StyledP2, {
                            children: t("fill out the form below")
                        }),
                        /*#__PURE__*/ _jsx(_StyledInput, {
                            type: "text",
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            placeholder: "*".concat(capitalizeFirstLetter(t("name")))
                        }),
                        /*#__PURE__*/ _jsx(_StyledInput2, {
                            type: "email",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            placeholder: "*".concat(capitalizeFirstLetter(t("email")))
                        }),
                        /*#__PURE__*/ _jsx(_StyledButton3, {
                            onClick: sendLead,
                            disabled: isPending,
                            children: isPending ? /*#__PURE__*/ _jsx(_StyledFiLoader, {}) : t("send")
                        }),
                        /*#__PURE__*/ _jsx(_StyledP3, {
                            children: t("policy")
                        })
                    ]
                })
            }), document.body),
            /*#__PURE__*/ _jsx(_StyledButton4, {
                onClick: ()=>setIsLeadFormOpen(true),
                children: t("reserve")
            })
        ]
    });
};
const ComparisonButton = (param)=>{
    let { apartment, baseColor = "white", height = 22, width = 22 } = param;
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const [isHovered, setIsHovered] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { comparisonList, setComparisonList } = (0,_hooks_useComparisonList__WEBPACK_IMPORTED_MODULE_6__/* .useComparisonList */ .l)();
    const inComparisonList = comparisonList.some((item)=>item.ExternalId === apartment.ExternalId);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledButton5, {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        onClick: (e)=>{
            e.stopPropagation();
            e.preventDefault();
            if (inComparisonList) {
                setComparisonList(comparisonList.filter((item)=>item.ExternalId !== apartment.ExternalId));
                const toastMessage = (0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__/* .capitalizeFirstLetter */ .fm)(t("apartment removed from comparison list"));
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .Am)(toastMessage, {
                    position: "bottom-right",
                    autoClose: 3000
                });
            } else {
                setComparisonList([
                    ...comparisonList,
                    apartment
                ]);
                const toastMessage = (0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__/* .capitalizeFirstLetter */ .fm)(t("apartment added to comparison list"));
                react_toastify__WEBPACK_IMPORTED_MODULE_5__/* .toast */ .Am.success(toastMessage, {
                    position: "bottom-right",
                    autoClose: 3000
                });
            }
        },
        children: [
            isHovered && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledSpan3, {
                style: {
                    // @ts-ignore
                    textWrap: "nowrap"
                },
                children: t("comparison")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                width: width,
                height: height,
                viewBox: "0 0 16 17",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("g", {
                    clipPath: "url(#clip0_7599_9661)",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                        d: "M2.14404 13.1433C2.36843 14.0622 3.22359 14.7965 4.2417 14.7967C5.25586 14.7967 6.11419 14.0664 6.42139 13.1433H2.14404ZM10.4819 13.1433C10.7063 14.0621 11.5615 14.7964 12.5796 14.7967C13.5938 14.7967 14.4531 14.0665 14.7603 13.1433H10.4819ZM10.4917 12.0174H14.5786L13.0601 6.65799H12.0981L10.4917 12.0174ZM2.24365 12.0174H6.24072L4.72217 6.65799H3.76221L2.24365 12.0174ZM15.9224 12.6785C15.8269 14.4897 14.3966 15.92 12.5854 16.0154H12.5796C10.7636 16.0152 9.33326 14.5813 9.23779 12.7713V12.4734L9.2417 12.4588L10.9634 6.65799H5.94971L7.58057 12.368L7.58447 12.3806V12.6785C7.48906 14.4887 6.05799 15.9226 4.2417 15.9226C2.42726 15.9224 0.995469 14.4903 0.899902 12.7713L0.898926 12.7654H0.899902V12.4734L0.903809 12.4597L2.75635 5.97537L2.75732 5.97049C2.80902 5.81559 2.88965 5.7039 2.99072 5.63162C3.09175 5.55946 3.20646 5.53201 3.31592 5.53201H7.39111C7.41963 5.20367 7.58732 4.94254 7.84814 4.82498V1.46268C7.84822 1.30114 7.90215 1.1587 8.00439 1.05643C8.10665 0.954173 8.24912 0.90027 8.41064 0.900177C8.57234 0.900177 8.71553 0.954085 8.81787 1.05643C8.92007 1.15869 8.97405 1.30118 8.97412 1.46268V4.82498C9.23488 4.94257 9.40264 5.20372 9.43115 5.53201H13.5063C13.7239 5.53201 13.9471 5.64129 14.0591 5.86502L14.063 5.87381L14.0659 5.8826L15.9185 12.368L15.9224 12.3806V12.6785Z",
                        fill: baseColor,
                        fillOpacity: inComparisonList ? 1 : 0.8,
                        stroke: inComparisonList ? baseColor : "",
                        strokeWidth: "0.6"
                    })
                })
            })
        ]
    });
};
var _StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("button").withConfig({
    componentId: "sc-e7b7fa3e-0"
}).withConfig({
    componentId: "sc-7101679b-0"
})({
    "position": "relative",
    "transitionProperty": "all",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "&:active": {
        "--tw-scale-x": ".9",
        "--tw-scale-y": ".9",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledSpan = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("span")({
    "position": "absolute",
    "top": "-0.5rem",
    "left": "50%",
    "display": "none",
    "width": "fit-content",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "borderRadius": "9999px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(197 197 197 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem",
    "fontSize": "8px",
    "fontWeight": "500",
    "textTransform": "capitalize",
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity, 1))",
    "@media (min-width: 768px)": {
        "display": "block"
    }
});
var _StyledButton2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("button")({
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "gap": "0.25rem",
    "&:active": {
        "--tw-scale-x": ".9",
        "--tw-scale-y": ".9",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledSpan2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("span")({
    "position": "absolute",
    "top": "-0.5rem",
    "left": "50%",
    "display": "none",
    "width": "fit-content",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "borderRadius": "9999px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(197 197 197 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem",
    "fontSize": "8px",
    "fontWeight": "500",
    "textTransform": "capitalize",
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity, 1))",
    "@media (min-width: 768px)": {
        "display": "block"
    }
});
var _StyledDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("div")({
    "position": "fixed",
    "left": "0px",
    "top": "0px",
    "zIndex": "999",
    "display": "flex",
    "height": "100%",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(0, 41, 39, 0.80)"
});
var _StyledDiv2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("div")({
    "display": "flex",
    "maxWidth": "20rem",
    "flexDirection": "column",
    "gap": "1.5rem",
    "borderRadius": "0.75rem",
    "backgroundColor": "var(--base-transparent-white-20)",
    "padding": "2.5rem",
    "--tw-backdrop-blur": "blur(16px)",
    "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
    "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"
});
var _StyledP = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("p")({
    "fontSize": "24px",
    "textTransform": "capitalize"
});
var _StyledP2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("p")({
    "fontSize": "10px",
    "textTransform": "capitalize",
    "--tw-text-opacity": "1",
    "color": "rgb(209 213 219 / var(--tw-text-opacity, 1))"
});
var _StyledInput = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("input")({
    "borderBottomWidth": "2px",
    "borderColor": "rgba(255, 255, 255, 0.10)",
    "backgroundColor": "transparent",
    "padding": "0.75rem",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))",
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "&::placeholder": {
        "color": "rgb(255 255 255 / 0.6)"
    },
    "&:focus": {
        "borderColor": "transparent",
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-color": "rgb(255 255 255 / 0.3)"
    }
});
var _StyledInput2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("input")({
    "borderBottomWidth": "2px",
    "borderColor": "rgba(255, 255, 255, 0.10)",
    "backgroundColor": "transparent",
    "padding": "0.75rem",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))",
    "outline": "2px solid transparent",
    "outlineOffset": "2px",
    "&::placeholder": {
        "color": "rgb(255 255 255 / 0.6)"
    },
    "&:focus": {
        "borderColor": "transparent",
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-color": "rgb(255 255 255 / 0.3)"
    }
});
var _StyledButton3 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("button")({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "9999px",
    "backgroundColor": "rgb(255 255 255 / 0.8)",
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "fontSize": "10px",
    "textTransform": "capitalize",
    "color": "var(--blue-800)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "&:hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity, 1))"
    }
});
var _StyledFiLoader = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)(_barrel_optimize_names_FiLoader_react_icons_fi__WEBPACK_IMPORTED_MODULE_8__/* .FiLoader */ .dAq)({
    "@keyframes spin": {
        "to": {
            "transform": "rotate(360deg)"
        }
    },
    "animation": "spin 1s linear infinite"
});
var _StyledP3 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("p")({
    "fontSize": "10px",
    "textTransform": "capitalize",
    "--tw-text-opacity": "1",
    "color": "rgb(209 213 219 / var(--tw-text-opacity, 1))"
});
var _StyledButton4 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("button")({
    "display": "flex",
    "height": "2.75rem",
    "width": "fit-content",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "0.25rem",
    "alignSelf": "center",
    "borderRadius": "9999px",
    "backgroundColor": "var(--blue-700)",
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "fontSize": "14px",
    "textTransform": "capitalize",
    "color": "var(--base-white-white)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "&:hover": {
        "backgroundColor": "var(--blue-700)",
        "color": "var(--base-white-white)"
    },
    "@media (min-width: 768px)": {
        "width": "auto"
    }
});
var _StyledButton5 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("button")({
    "position": "relative",
    "transitionProperty": "all",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "&:active": {
        "--tw-scale-x": ".9",
        "--tw-scale-y": ".9",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledSpan3 = (0,styled_components__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP)("span").withConfig({
    displayName: "ApartmentDetailsButtons___StyledSpan3",
    componentId: "sc-1d6nhf1-0"
})({
    "position": "absolute",
    "top": "-0.5rem",
    "left": "50%",
    "display": "none",
    "width": "fit-content",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "borderRadius": "9999px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(197 197 197 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem",
    "fontSize": "8px",
    "fontWeight": "500",
    "textTransform": "capitalize",
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity, 1))",
    "@media (min-width: 768px)": {
        "display": "block"
    }
});


/***/ }),

/***/ 7298:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ApartmentListItem_ApartmentListItem; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./src/utils/helpers/helpers.ts
var helpers = __webpack_require__(4919);
// EXTERNAL MODULE: ./src/containers/VideoConfigurator/threeJSManager/ThreeJSManager.ts + 34 modules
var ThreeJSManager = __webpack_require__(586);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
;// CONCATENATED MODULE: ./src/components/ApartmentOffer/ApartmentOffer.styled.ts

const Wrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentOfferstyled__Wrapper",
    componentId: "sc-1d5i4pl-0"
}).withConfig({
    componentId: "sc-88071777-0"
}).withConfig({
    componentId: "sc-2f08df18-0"
})((param)=>{
    let { restrictWidthForVerticalScroll } = param;
    return [
        {
            "display": "flex",
            "height": "100%",
            "width": "100%",
            "flexShrink": "0",
            "flexDirection": "column",
            "overflow": "hidden",
            "borderWidth": "1px",
            "borderColor": "transparent",
            "backgroundColor": "var(--blue-700)",
            "--tw-backdrop-blur": "blur(12px)",
            "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
            "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
            "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "150ms",
            "&:hover": {
                "backgroundColor": "var(--base-transparent-60-hover)"
            },
            "@media (min-width: 768px)": {
                "borderColor": "var(--base-transparent-white-20)",
                "backgroundColor": "var(--base-transparent-20-default)"
            }
        },
        restrictWidthForVerticalScroll && {
            "width": "185px"
        }
    ];
});
const ImageWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentOfferstyled__ImageWrapper",
    componentId: "sc-1d5i4pl-1"
}).withConfig({
    componentId: "sc-88071777-1"
}).withConfig({
    componentId: "sc-2f08df18-1"
})({
    "position": "relative",
    "margin": "0.5rem",
    "height": "160px",
    "borderRadius": "8px"
});
const ImageTag = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "ApartmentOfferstyled__ImageTag",
    componentId: "sc-1d5i4pl-2"
}).withConfig({
    componentId: "sc-88071777-2"
}).withConfig({
    componentId: "sc-2f08df18-2"
})({
    "position": "absolute",
    "left": "6px",
    "top": "6px",
    "borderRadius": "9999px",
    "backgroundColor": "var(--base-white-white)",
    "paddingLeft": "6px",
    "paddingRight": "6px",
    "paddingTop": "4px",
    "paddingBottom": "4px",
    "fontSize": "12px",
    "fontWeight": "700",
    "color": "var(--blue-700)"
});
const Image = styled_components_browser_esm/* default */.ZP.img.withConfig({
    displayName: "ApartmentOfferstyled__Image",
    componentId: "sc-1d5i4pl-3"
}).withConfig({
    componentId: "sc-88071777-3"
}).withConfig({
    componentId: "sc-2f08df18-3"
})({
    "height": "100%",
    "width": "100%",
    "borderRadius": "0.5rem",
    "objectFit": "cover"
});
const ContentWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentOfferstyled__ContentWrapper",
    componentId: "sc-1d5i4pl-4"
}).withConfig({
    componentId: "sc-88071777-4"
}).withConfig({
    componentId: "sc-2f08df18-4"
})({
    "marginLeft": "0.5rem",
    "marginRight": "0.5rem",
    "display": "flex",
    "flex": "1 1 0%",
    "flexDirection": "column",
    "justifyContent": "space-between",
    "gap": "0.75rem",
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem",
    "paddingBottom": "0.75rem"
});
const ContentHeader = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentOfferstyled__ContentHeader",
    componentId: "sc-1d5i4pl-5"
}).withConfig({
    componentId: "sc-88071777-5"
}).withConfig({
    componentId: "sc-2f08df18-5"
})({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomWidth": "1px",
    "borderColor": "var(--base-transparent-white-20)",
    "paddingBottom": "0.5rem"
});
const ContentHeaderTitle = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "ApartmentOfferstyled__ContentHeaderTitle",
    componentId: "sc-1d5i4pl-6"
}).withConfig({
    componentId: "sc-88071777-6"
}).withConfig({
    componentId: "sc-2f08df18-6"
})({
    "fontWeight": "600",
    "lineHeight": "120%",
    "color": "var(--base-white-white)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
});
const ContentHeaderIconsWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentOfferstyled__ContentHeaderIconsWrapper",
    componentId: "sc-1d5i4pl-7"
}).withConfig({
    componentId: "sc-88071777-7"
}).withConfig({
    componentId: "sc-2f08df18-7"
})({
    "display": "flex",
    "gap": "0.5rem"
});
const ContentBody = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentOfferstyled__ContentBody",
    componentId: "sc-1d5i4pl-8"
}).withConfig({
    componentId: "sc-88071777-8"
}).withConfig({
    componentId: "sc-2f08df18-8"
})({
    "display": "flex",
    "flexWrap": "wrap",
    "columnGap": "1rem",
    "rowGap": "0.25rem",
    "fontSize": "14px"
});
const ContentBodyField = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "ApartmentOfferstyled__ContentBodyField",
    componentId: "sc-1d5i4pl-9"
}).withConfig({
    componentId: "sc-88071777-9"
}).withConfig({
    componentId: "sc-2f08df18-9"
})({
    "display": "flex",
    "gap": "0.25rem",
    "whiteSpace": "nowrap",
    "fontSize": "12px",
    "fontWeight": "700",
    "color": "var(--base-white-white)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "flexDirection": "row-reverse"
    }
});
const ContentBodyVal = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "ApartmentOfferstyled__ContentBodyVal",
    componentId: "sc-1d5i4pl-10"
}).withConfig({
    componentId: "sc-88071777-10"
}).withConfig({
    componentId: "sc-2f08df18-10"
})({
    "fontWeight": "500",
    "color": "var(--blue-600)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "@media (min-width: 768px)": {
        "color": "var(--base-white-300)"
    },
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "order": "1"
    }
});
const ContentPrice = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentOfferstyled__ContentPrice",
    componentId: "sc-1d5i4pl-11"
}).withConfig({
    componentId: "sc-88071777-11"
}).withConfig({
    componentId: "sc-2f08df18-11"
})({
    "borderTopWidth": "1px",
    "borderColor": "var(--base-transparent-white-20)",
    "paddingTop": "0.5rem",
    "fontWeight": "500",
    "color": "var(--base-white-white)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
});
const PriceField = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "ApartmentOfferstyled__PriceField",
    componentId: "sc-1d5i4pl-12"
}).withConfig({
    componentId: "sc-88071777-12"
}).withConfig({
    componentId: "sc-2f08df18-12"
})({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "fontSize": "12px",
    "color": "var(--blue-600)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "@media (min-width: 768px)": {
        "color": "var(--base-white-300)"
    }
});
const PriceVal = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "ApartmentOfferstyled__PriceVal",
    componentId: "sc-1d5i4pl-13"
}).withConfig({
    componentId: "sc-88071777-13"
}).withConfig({
    componentId: "sc-2f08df18-13"
})({
    "fontSize": "1rem",
    "fontWeight": "700",
    "lineHeight": "120%",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
});
const SecondaryPriceVal = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "ApartmentOfferstyled__SecondaryPriceVal",
    componentId: "sc-1d5i4pl-14"
}).withConfig({
    componentId: "sc-88071777-14"
}).withConfig({
    componentId: "sc-2f08df18-14"
})({
    "fontSize": "12px",
    "fontWeight": "500",
    "lineHeight": "120%",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
});

// EXTERNAL MODULE: ./src/utils/pubsub.ts
var pubsub = __webpack_require__(1933);
// EXTERNAL MODULE: ./src/utils/helpers/mappings.ts
var mappings = __webpack_require__(431);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./src/components/ApartmentDetails/ApartmentDetailsButtons.tsx
var ApartmentDetailsButtons = __webpack_require__(1787);
// EXTERNAL MODULE: ./public/jsonData/VideoConfig.json
var VideoConfig = __webpack_require__(766);
;// CONCATENATED MODULE: ./src/components/ApartmentOffer/ApartmentOffer.tsx

function _templateObject() {
    const data = (0,_tagged_template_literal._)([
        "",
        ""
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}










const ApartmentOffer = (param)=>{
    let { apartment, restrictWidthForVerticalScroll = false } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const priceDisplay = apartment.Price === 0 ? t("request") : (0,helpers/* formatCurrency */.xG)(apartment.Price);
    const secondaryPriceDisplay = apartment.Price === 0 ? t("request") : (0,helpers/* formatCurrency */.xG)(apartment.PriceM2);
    const videoVersion = (0,helpers/* getVideoVersion */.l4)(router.query.project);
    const videoPrefixBase = "".concat(VideoConfig/* VideoPrefixBase */.Hi).concat(router.query.project || VideoConfig/* redirects.redirectProjectName */.Df.V1).concat(videoVersion);
    apartment.Floor.sort((a, b)=>a.FloorNumber - b.FloorNumber);
    let buildingName = (0,helpers/* removeLeftPartOfUnderscore */.$0)(apartment.Floor[0].Building.Name);
    buildingName = buildingName.endsWith("V") ? buildingName.slice(0, -1) : buildingName;
    const floorNumber = apartment.Floor[0].FloorNumber;
    const handleApartmentHover = ()=>{
        if (!router.query.building) return;
        const apartData = {
            number: apartment.Number,
            area: apartment.Area,
            price: apartment.Price,
            rooms: apartment.NumberOfRooms,
            type: apartment.Type,
            floorNumber: apartment.Floor.map((floor)=>floor.FloorNumber),
            buildingName: apartment.Floor[0].Building.Name,
            zoneName: apartment.Floor[0].Building.Zone,
            status: mappings/* apartmentStatusMap */.ZQ[apartment.Status],
            block: "404 Test TODO",
            apartmentName: apartment.ApartmentName,
            statusId: apartment.StatusId
        };
        pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.APARTMENT_HOVERED, {
            apartmentData: apartData
        });
    };
    const handleApartmentUnhover = ()=>{
        if (!router.query.building) return;
        pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.APARTMENT_UNHOVERED, {
            apartmentData: null
        });
    };
    const apartmentNumber = "".concat(floorNumber, ".").concat(+apartment.Number);
    const unitName = "".concat(t("titles.apartment"), " ").concat(t("apartmentCard.unitType.".concat(apartment.Type.toLowerCase())), " ").concat(apartmentNumber);
    const plan = "".concat((0,helpers/* getAssetsUrl */.I1)(), "/plans/").concat(apartmentNumber, ".png");
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
        onMouseOver: handleApartmentHover,
        onMouseLeave: handleApartmentUnhover,
        className: "group",
        restrictWidthForVerticalScroll: restrictWidthForVerticalScroll,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ImageWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv2, {
                                $_css: [
                                    {
                                        "height": "0.5rem",
                                        "width": "0.5rem",
                                        "borderRadius": "9999px"
                                    },
                                    {
                                        Sold: {
                                            "--tw-bg-opacity": "1",
                                            "backgroundColor": "rgb(225 81 81 / var(--tw-bg-opacity, 1))"
                                        },
                                        Reserved: {
                                            "--tw-bg-opacity": "1",
                                            "backgroundColor": "rgb(221 202 60 / var(--tw-bg-opacity, 1))"
                                        },
                                        ReservedDev: {
                                            "--tw-bg-opacity": "1",
                                            "backgroundColor": "rgb(221 202 60 / var(--tw-bg-opacity, 1))"
                                        },
                                        ReservedOral: {
                                            "--tw-bg-opacity": "1",
                                            "backgroundColor": "rgb(221 202 60 / var(--tw-bg-opacity, 1))"
                                        },
                                        Disabled: {
                                            "--tw-bg-opacity": "1",
                                            "backgroundColor": "rgb(175 175 175 / var(--tw-bg-opacity, 1))"
                                        },
                                        Available: {
                                            "--tw-bg-opacity": "1",
                                            "backgroundColor": "rgb(57 199 71 / var(--tw-bg-opacity, 1))"
                                        },
                                        Price: {
                                            "--tw-bg-opacity": "1",
                                            "backgroundColor": "rgb(57 199 71 / var(--tw-bg-opacity, 1))"
                                        }
                                    }[apartment.Status]
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP, {
                                children: t("priceStatus.".concat(apartment.Status))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Image, {
                        src: plan,
                        alt: "Floorplan"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentHeader, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(ContentHeaderTitle, {
                                children: unitName
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentHeaderIconsWrapper, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentDetailsButtons/* FavouriteButton */.AA, {
                                        apartment: apartment,
                                        baseColor: "#C6C3C0",
                                        height: 16,
                                        width: 16
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentDetailsButtons/* ComparisonButton */.F2, {
                                        apartment: apartment,
                                        baseColor: "#C6C3C0",
                                        height: 16,
                                        width: 16
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBody, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyVal, {
                                        children: [
                                            t("apartmentCard.area"),
                                            ":"
                                        ]
                                    }),
                                    " ",
                                    apartment.Area,
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "m\xb2"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyVal, {
                                        children: [
                                            t("apartmentCard.floor"),
                                            ":"
                                        ]
                                    }),
                                    " ",
                                    floorNumber
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyVal, {
                                        children: [
                                            t("apartmentCard.rooms"),
                                            ":"
                                        ]
                                    }),
                                    " ",
                                    apartment.TotalRooms || 0
                                ]
                            }),
                            apartment.LoggiaCombine > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyVal, {
                                        children: [
                                            t("rooms.Loggia"),
                                            ":"
                                        ]
                                    }),
                                    " ",
                                    apartment.LoggiaCombine,
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "m\xb2"
                                    })
                                ]
                            }),
                            apartment.BalconyCombine > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyVal, {
                                        children: [
                                            t("rooms.Balcony"),
                                            ":"
                                        ]
                                    }),
                                    " ",
                                    apartment.BalconyCombine,
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "m\xb2"
                                    })
                                ]
                            }),
                            apartment.TerraceCombine > 0 && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentBodyVal, {
                                        children: [
                                            t("rooms.Terrace"),
                                            ":"
                                        ]
                                    }),
                                    " ",
                                    apartment.TerraceCombine,
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                                        children: "m\xb2"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(ContentPrice, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(PriceField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            t("apartmentCard.priceM2"),
                                            ":"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(SecondaryPriceVal, {
                                        children: secondaryPriceDisplay
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(PriceField, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                        children: [
                                            t("apartmentCard.price"),
                                            ":"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(PriceVal, {
                                        children: priceDisplay
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }, apartment.ExternalId);
};
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-9066e01e-0"
}).withConfig({
    componentId: "sc-e619710d-0"
})({
    "position": "absolute",
    "left": "0.375rem",
    "top": "0.375rem",
    "display": "flex",
    "alignItems": "center",
    "gap": "0.25rem",
    "borderRadius": "4px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "0.375rem",
    "paddingRight": "0.375rem",
    "@media (min-width: 768px)": {
        "left": "0.5rem",
        "top": "0.5rem"
    }
});
var _StyledDiv2 = (0,styled_components_browser_esm/* default */.ZP)("div")(_templateObject(), (p)=>p.$_css);
var _StyledP = (0,styled_components_browser_esm/* default */.ZP)("p").withConfig({
    displayName: "ApartmentOffer___StyledP",
    componentId: "sc-1v1bz8k-0"
})({
    "fontSize": "12px",
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgb(65 65 65 / var(--tw-text-opacity, 1))"
});

// EXTERNAL MODULE: ./types/enums.ts
var enums = __webpack_require__(806);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/ApartmentList/ApartmentListItem/ApartmentListItem.tsx









function ApartmentListItem(param) {
    let { apartmentData, restrictWidthForVerticalScroll = false } = param;
    var _removeLeftPartOfUnderscore;
    const { push, query: { project, floor, zone, building } } = (0,next_router.useRouter)();
    const videoController = (0,useGlobalStore/* useStore */.o)((s)=>s.videoController);
    const deviceType = (0,useGlobalStore/* useStore */.o)((s)=>s.deviceType);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    if (apartmentData == undefined) return null;
    const isMobile = deviceType === enums/* DeviceType */.Yi.MOBILE;
    const zoneName = apartmentData.Floor[0].Building.Zone;
    const buildingName = apartmentData.Floor[0].Building.Name;
    const buildingLetter = (_removeLeftPartOfUnderscore = (0,helpers/* removeLeftPartOfUnderscore */.$0)(buildingName)) === null || _removeLeftPartOfUnderscore === void 0 ? void 0 : _removeLeftPartOfUnderscore.toString();
    const floorsApartment = apartmentData.Floor.map((floor)=>floor.FloorNumber);
    floorsApartment.sort((a, b)=>a - b);
    const floorViewNumbers = floorsApartment.map((floor)=>(0,helpers/* getFloorNumberToViewNumber */.MH)(buildingLetter, floor, project));
    const floorNumber = apartmentData.Floor.sort((a, b)=>a.FloorNumber - b.FloorNumber)[0].FloorNumber;
    const urlToApartment = "/".concat(project, "/").concat(zoneName, "/").concat(buildingName, "/").concat(floorNumber, "_").concat(apartmentData.Number, "?side=").concat(apartmentData.Side.toLowerCase()).concat(floor ? "&floor=" + floor : "&floor=" + floorNumber);
    const handleVideo = (apartmentNumber)=>{
        if (building && floor) {
            dispatch({
                type: globalReducer/* StoreActions */.A.SET_LOCK_TRANSITIONS,
                payload: true
            });
            const buildingType = (0,helpers/* getBuildingType */.F9)(buildingLetter);
            const canPlay = videoController === null || videoController === void 0 ? void 0 : videoController.PlaySelectedVideoFromCurrent("CameraPlan".concat(buildingType, "Apart").concat((0,helpers/* getFloorNumberToViewNumber */.MH)(buildingLetter, Number(floor)), "-").concat(parseInt(apartmentNumber, 10)).concat((0,helpers/* getApartmentFloorNamePart */.uS)(floorViewNumbers, (0,helpers/* getFloorNumberToViewNumber */.MH)(buildingLetter, Number(floor)))));
            if (canPlay) {
                var _ThreeJSManager_instance;
                (_ThreeJSManager_instance = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance === void 0 ? void 0 : _ThreeJSManager_instance.playSection();
                dispatch({
                    type: globalReducer/* StoreActions */.A.TOGGLE_VIDEO_TRANSITIONING,
                    payload: true
                });
            }
            return;
        }
        if (building) {
            dispatch({
                type: globalReducer/* StoreActions */.A.SET_LOCK_TRANSITIONS,
                payload: true
            });
            const buildingType = (0,helpers/* getBuildingType */.F9)(buildingLetter);
            const to = "CameraPlan".concat(buildingType, "FloorPlan").concat(floorViewNumbers[0]);
            const canPlay = videoController === null || videoController === void 0 ? void 0 : videoController.PlaySelectedVideoFromCurrent(to);
            if (canPlay) {
                var _ThreeJSManager_instance1;
                (_ThreeJSManager_instance1 = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance1 === void 0 ? void 0 : _ThreeJSManager_instance1.playSection();
                dispatch({
                    type: globalReducer/* StoreActions */.A.TOGGLE_VIDEO_TRANSITIONING,
                    payload: true
                });
                const videosQueue = [
                    "CameraPlan".concat(buildingType, "Apart").concat(floorViewNumbers[0], "-").concat(parseInt(apartmentNumber, 10)).concat((0,helpers/* getApartmentFloorNamePart */.uS)(floorViewNumbers))
                ];
                videosQueue.forEach((video)=>{
                    videoController === null || videoController === void 0 ? void 0 : videoController.addVideoToQueue(video);
                });
            }
            return;
        }
        if (zone) {
            dispatch({
                type: globalReducer/* StoreActions */.A.SET_LOCK_TRANSITIONS,
                payload: true
            });
            const apartmentZone = (0,helpers/* removeLeftPartOfUnderscore */.$0)(apartmentData.Floor[0].Building.Zone);
            const firstVideoInSequence = zone === "Zone_All" ? "Camera".concat(project, "Zone").concat(apartmentZone, "1") : "Camera".concat(project, "Building").concat((0,helpers/* removeLeftPartOfUnderscore */.$0)(buildingName), "1");
            const canPlay = videoController === null || videoController === void 0 ? void 0 : videoController.PlaySelectedVideoFromCurrent(firstVideoInSequence);
            if (canPlay) {
                var _ThreeJSManager_instance2;
                (_ThreeJSManager_instance2 = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance2 === void 0 ? void 0 : _ThreeJSManager_instance2.playSection();
                dispatch({
                    type: globalReducer/* StoreActions */.A.TOGGLE_VIDEO_TRANSITIONING,
                    payload: true
                });
                const buildingType = (0,helpers/* getBuildingType */.F9)(buildingLetter);
                const toBuilding = "Camera".concat(project, "Building").concat((0,helpers/* removeLeftPartOfUnderscore */.$0)(buildingName), "1");
                const toFloorPlan = "CameraPlan".concat(buildingType, "FloorPlan").concat(floorViewNumbers[0]);
                const toApartment = "CameraPlan".concat(buildingType, "Apart").concat(floorViewNumbers[0], "-").concat(parseInt(apartmentNumber, 10)).concat((0,helpers/* getApartmentFloorNamePart */.uS)(floorViewNumbers));
                const videosQueue = zone === "Zone_All" ? [
                    toBuilding,
                    toFloorPlan,
                    toApartment
                ] : [
                    toFloorPlan,
                    toApartment
                ];
                videosQueue.forEach((video)=>{
                    videoController === null || videoController === void 0 ? void 0 : videoController.addVideoToQueue(video);
                });
            }
            return;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)((link_default()), {
        href: urlToApartment,
        onClick: ()=>{
            handleVideo(apartmentData.Number);
            dispatch({
                type: globalReducer/* StoreActions */.A.SET_MOBILE_LIST_OPEN,
                payload: false
            });
            if (isMobile) window.scrollTo(0, 0);
        },
        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentOffer, {
            apartment: apartmentData,
            restrictWidthForVerticalScroll: restrictWidthForVerticalScroll
        })
    });
}
/* harmony default export */ var ApartmentListItem_ApartmentListItem = (ApartmentListItem);


/***/ }),

/***/ 1634:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


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

/***/ 4078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: function() { return /* binding */ MobileModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1686);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7294);
/* harmony import */ var _public_icons_arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6630);
/* harmony import */ var _public_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8911);
/* harmony import */ var _zustand_globalReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4017);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2120);
/* harmony import */ var _components_ApartmentListNav_ApartmentListNav_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4235);
/* harmony import */ var _zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9179);
/* harmony import */ var _components_Badge_Badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9382);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Filters_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5004);












const MobileModal = (param)=>{
    let { children, isOpen, onClose } = param;
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .$G)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const dispatch = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .o)((s)=>s.dispatch);
    const comparisonList = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_7__/* .useStore */ .o)((s)=>s.comparisonList);
    const [activeFiltersCount, setActiveFiltersCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const count = (0,_components_Filters_helpers__WEBPACK_IMPORTED_MODULE_10__/* .getActiveFiltersCount */ .jt)(router.query);
        setActiveFiltersCount(count);
    }, [
        router.query
    ]);
    const handleClearFilters = (e)=>{
        if (activeFiltersCount > 0) {
            e.stopPropagation();
            (0,_components_Filters_helpers__WEBPACK_IMPORTED_MODULE_10__/* .clearFilters */ .K5)(router);
        }
    };
    if (!isOpen) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv2, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledButton, {
                        onClick: onClose,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_public_icons_arrow_back_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledDiv3, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ApartmentListNav_ApartmentListNav_styled__WEBPACK_IMPORTED_MODULE_6__/* .NavTitle */ .wo, {
                            children: t("common.offers")
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv4, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledButton2, {
                                onClick: ()=>{
                                    dispatch({
                                        type: _zustand_globalReducer__WEBPACK_IMPORTED_MODULE_4__/* .StoreActions */ .A.SET_FILTERS_OPEN,
                                        payload: true
                                    });
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_public_icons_search_svg__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Badge_Badge__WEBPACK_IMPORTED_MODULE_8__/* .Badge */ .C, {
                                            count: activeFiltersCount,
                                            clearResource: handleClearFilters
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledButton3, {
                                onClick: ()=>{
                                    dispatch({
                                        type: _zustand_globalReducer__WEBPACK_IMPORTED_MODULE_4__/* .StoreActions */ .A.SET_IS_COMPARISON_OPEN,
                                        payload: true
                                    });
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
                                        width: "23",
                                        height: "23",
                                        viewBox: "0 0 23 23",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
                                            d: "M11.1172 0C11.5341 0 11.8125 0.278413 11.8125 0.695312V5.83691C12.2292 5.97601 12.5068 6.3926 12.5068 6.94824H18.7607C19.0386 6.94833 19.3161 7.08745 19.4551 7.36523L22.2344 17.0928V17.5098C22.0954 20.15 20.0113 22.2349 17.3711 22.374C14.7307 22.374 12.6458 20.2888 12.5068 17.6484V17.2314L15.1475 8.33789H7.22656L9.72754 17.0928V17.5098C9.58858 20.15 7.50442 22.2341 4.86426 22.2344C2.22389 22.2344 0.138967 20.1498 0 17.6484V17.2314L2.7793 7.50391C2.91829 7.0872 3.19673 6.94824 3.47461 6.94824H9.72754C9.72757 6.39242 10.006 5.97587 10.4229 5.83691V0.695312C10.4229 0.278457 10.7004 5.93339e-05 11.1172 0ZM1.52832 18.0654C1.80625 19.5941 3.19666 20.8447 4.86426 20.8447C6.53166 20.8445 7.92103 19.5939 8.33789 18.0654H1.52832ZM14.0352 18.0654C14.3131 19.5941 15.7035 20.8447 17.3711 20.8447C19.0386 20.8446 20.4279 19.594 20.8447 18.0654H14.0352ZM4.03027 8.33789L1.66797 16.6758H8.05957L5.69727 8.33789H4.03027ZM16.5371 8.33789L14.0352 16.6758H20.5674L18.2051 8.33789H16.5371Z",
                                            fill: "white"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledDiv5, {
                                        children: comparisonList.length
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            children
        ]
    });
};
var _StyledDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("div").withConfig({
    componentId: "sc-f8adb940-0"
}).withConfig({
    componentId: "sc-6227d675-0"
})({
    "position": "fixed",
    "left": "0px",
    "top": "0px",
    "zIndex": "100",
    "height": "100%",
    "width": "100%",
    "backgroundColor": "var(--blue-900)"
});
var _StyledDiv2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("div")({
    "zIndex": "31",
    "display": "flex",
    "height": "64px",
    "alignItems": "center",
    "justifyContent": "space-between",
    "gap": "0.5rem",
    "backgroundColor": "var(--blue-700)",
    "padding": "0.5rem",
    "paddingLeft": "1rem",
    "paddingRight": "1rem"
});
var _StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("button")({
    "flex": "1 1 0%"
});
var _StyledDiv3 = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("div")({
    "position": "absolute",
    "left": "50%",
    "display": "flex",
    "--tw-translate-x": "-50%",
    "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
    "alignItems": "center",
    "justifyContent": "center"
});
var _StyledDiv4 = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("div")({
    "display": "flex",
    "flex": "1 1 0%",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "gap": "1rem"
});
var _StyledButton2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("button")({
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem"
});
var _StyledButton3 = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("button")({
    "position": "relative",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem"
});
var _StyledDiv5 = (0,styled_components__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .ZP)("div").withConfig({
    displayName: "MobileModal___StyledDiv5",
    componentId: "sc-1rr00bk-0"
})({
    "position": "absolute",
    "right": "-20%",
    "top": "-20%",
    "borderRadius": "90px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "6px",
    "paddingRight": "6px",
    "fontSize": "12px",
    "fontWeight": "700",
    "--tw-text-opacity": "1",
    "color": "rgb(36 34 32 / var(--tw-text-opacity, 1))"
});


/***/ })

}]);