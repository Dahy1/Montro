(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[667],{

/***/ 8852:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/[project]/[zone]/[building]",
      function () {
        return __webpack_require__(7078);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 7078:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(1686);
/* harmony import */ var _components_ApartmentList_ApartmentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3360);
/* harmony import */ var _components_ApartmentListFilters_ApartmentListFilters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5070);
/* harmony import */ var _utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4919);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7294);
/* harmony import */ var _utils_pubsub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1933);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1163);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_styles_components_Containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4483);
/* harmony import */ var _components_Slider_hooks_useSliderConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4557);
/* harmony import */ var _utils_helpers_mappings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(431);
/* harmony import */ var _ts_enums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(806);
/* harmony import */ var _components_MobileBottomBar_MobileBottomBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1634);
/* harmony import */ var _zustand_globalReducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4017);
/* harmony import */ var _components_MobileModal_MobileModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4078);
/* harmony import */ var _components_FilteringSortingMobile_FilteringModal_FilteringModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3726);
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5793);
/* harmony import */ var _components_CloseUIButton_CloseUIButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5783);
/* harmony import */ var _public_icons_search_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8911);
/* harmony import */ var _public_icons_arrowlist_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(9878);
/* harmony import */ var _components_FilterTags_FilterTags__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(4496);
/* harmony import */ var _components_BottomSheet_BottomSheet__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1747);
/* harmony import */ var _components_BottomSheet_BottomSheetInserts_MobileApartmentListSorting__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5853);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(2120);
/* harmony import */ var _ts_const__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(2409);
/* harmony import */ var _components_Icons_Icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5672);
/* harmony import */ var _components_ApartmentList_ApartmentListItem_ApartmentListItem__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(7298);
/* harmony import */ var _components_ApartmentListNav_useBackNavigationClick__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(971);
/* harmony import */ var _zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(9179);
/* harmony import */ var _utils_helpers_crmHelper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(2424);






























const BuildingPage = (param)=>{
    let { apartments, allBuildingsAndZones, totalApartmentCount, floorsCount, crmData } = param;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_22__/* .useTranslation */ .$G)();
    const deviceType = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__/* .useStore */ .o)((s)=>s.deviceType);
    const mobileListOpen = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__/* .useStore */ .o)((s)=>s.mobileListOpen);
    const filtersOpen = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__/* .useStore */ .o)((s)=>s.filtersOpen);
    const featureFlags = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__/* .useStore */ .o)((s)=>s.featureFlags);
    const isUIClosed = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__/* .useStore */ .o)((s)=>s.isUIClosed);
    const POIModalData = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__/* .useStore */ .o)((s)=>s.POIModalData);
    const dispatch = (0,_zustand_useGlobalStore__WEBPACK_IMPORTED_MODULE_26__/* .useStore */ .o)((s)=>s.dispatch);
    const updateRoute = (0,_components_ApartmentListNav_useBackNavigationClick__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)();
    const setSliderConfig = (0,_components_Slider_hooks_useSliderConfig__WEBPACK_IMPORTED_MODULE_8__/* .useSliderConfig */ .P1)([
        {
            type: "exterior",
            data: {
                building: router.query.building
            }
        }
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (featureFlags.skipFloorplanSelection) {
            setSliderConfig([
                {
                    type: "exterior",
                    data: {
                        building: router.query.building
                    }
                }
            ]);
        } else {
            setSliderConfig([
                {
                    type: "exterior",
                    data: {
                        building: router.query.building
                    }
                },
                {
                    type: "floorplan3d",
                    data: {
                        floorsCount
                    }
                }
            ]);
        }
    }, [
        featureFlags.skipFloorplanSelection,
        floorsCount,
        router.query.building,
        setSliderConfig
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const fetchAndSendApartments = async ()=>{
            const queryParams = new URLSearchParams({
                ...router.query,
                page: "1",
                pageSize: "2000"
            }).toString();
            const response = await fetch("/api/apartments?".concat(queryParams));
            const responseJSON = await response.json();
            const allApartmentsInBuilding = (0,_utils_helpers_crmHelper__WEBPACK_IMPORTED_MODULE_27__/* .mergeApartments */ .r)(responseJSON.apartments, crmData);
            const apartmentNames = allApartmentsInBuilding.map((apartment)=>{
                return {
                    number: apartment.Number,
                    area: apartment.Area,
                    price: apartment.Price,
                    rooms: apartment.TotalRooms,
                    type: apartment.Type,
                    status: _utils_helpers_mappings__WEBPACK_IMPORTED_MODULE_9__/* .apartmentStatusMap */ .ZQ[apartment.Status],
                    floorNumber: apartment.Floor.map((floor)=>floor.FloorNumber),
                    buildingName: apartment.Floor[0].Building.Name,
                    zoneName: apartment.Floor[0].Building.Zone,
                    block: "Test 404 TODO",
                    apartmentName: apartment.ApartmentName,
                    statusId: apartment.StatusId
                };
            });
            _utils_pubsub__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .ZP.publish(_utils_pubsub__WEBPACK_IMPORTED_MODULE_5__/* .EventType */ .tw.SHOW_APARTMENTS, {
                visibleApartments: apartmentNames
            });
        };
        fetchAndSendApartments();
    }, [
        router.query
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv2, {
                id: "section1",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilteringSortingMobile_FilteringModal_FilteringModal__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        isOpen: filtersOpen,
                        onClose: ()=>dispatch({
                                type: _zustand_globalReducer__WEBPACK_IMPORTED_MODULE_12__/* .StoreActions */ .A.SET_FILTERS_OPEN,
                                payload: false
                            }),
                        allBuildingsAndZones: allBuildingsAndZones,
                        totalApartmentCount: totalApartmentCount
                    }),
                    _ts_enums__WEBPACK_IMPORTED_MODULE_10__/* .DeviceType */ .Yi.MOBILE !== deviceType && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_styles_components_Containers__WEBPACK_IMPORTED_MODULE_7__/* .DesktopLayoutWrapper */ .Kc, {
                        poiZoomed: false,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv3, {
                                onClick: updateRoute,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledSpan, {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_23__/* .BackArrow */ .D1, {
                                            width: 32,
                                            height: 32
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledP, {
                                        children: t((0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__/* .getBuildingLabel */ .FQ)((0,_utils_helpers_helpers__WEBPACK_IMPORTED_MODULE_3__/* .mapBuldingToBlock */ .f)(router.query.building)))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(src_styles_components_Containers__WEBPACK_IMPORTED_MODULE_7__/* .BlurWrapper */ .Ah, {
                                isClosed: isUIClosed,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CloseUIButton_CloseUIButton__WEBPACK_IMPORTED_MODULE_16__/* .CloseUIButton */ .A, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ApartmentListFilters_ApartmentListFilters__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        allBuildingsAndZones: allBuildingsAndZones
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ApartmentList_ApartmentList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        apartmentsData: apartments,
                                        totalApartmentCount: totalApartmentCount,
                                        crmData: crmData
                                    })
                                ]
                            })
                        ]
                    }),
                    _ts_enums__WEBPACK_IMPORTED_MODULE_10__/* .DeviceType */ .Yi.MOBILE === deviceType && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_MobileBottomBar_MobileBottomBar__WEBPACK_IMPORTED_MODULE_11__/* .MobileBottomBar */ .t, {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_15__/* .Slider */ .i, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_MobileModal_MobileModal__WEBPACK_IMPORTED_MODULE_13__/* .MobileModal */ .o, {
                                isOpen: mobileListOpen,
                                onClose: ()=>dispatch({
                                        type: _zustand_globalReducer__WEBPACK_IMPORTED_MODULE_12__/* .StoreActions */ .A.SET_MOBILE_LIST_OPEN,
                                        payload: false
                                    }),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilterTags_FilterTags__WEBPACK_IMPORTED_MODULE_19__/* .FilterTags */ .W, {}),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ApartmentList_ApartmentList__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                        apartmentsData: apartments,
                                        totalApartmentCount: totalApartmentCount,
                                        crmData: crmData
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            deviceType === _ts_enums__WEBPACK_IMPORTED_MODULE_10__/* .DeviceType */ .Yi.MOBILE && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SectionsMobile, {
                apartments: apartments,
                totalApartmentCount: totalApartmentCount,
                router: router,
                dispatch: dispatch,
                t: t,
                crmData: crmData
            })
        ]
    });
};
const SectionsMobile = (param)=>{
    let { apartments, totalApartmentCount, router, dispatch, t, crmData } = param;
    const [paginatedApartments, setPaginatedApartments] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(apartments);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const totalPages = Math.ceil(totalApartmentCount / _ts_const__WEBPACK_IMPORTED_MODULE_28__/* .PAGINATION_PAGE_SIZE */ .h0);
    const [isSortingBottomSheetOpen, setIsSortingBottomSheetOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const isRTL = document.documentElement.dir === "rtl";
    const handlePageChange = async (newPage)=>{
        if (newPage < 1 || newPage > totalPages) return;
        const queryParams = new URLSearchParams({
            ...router.query,
            page: String(newPage),
            pageSize: String(_ts_const__WEBPACK_IMPORTED_MODULE_28__/* .PAGINATION_PAGE_SIZE */ .h0)
        }).toString();
        const res = await fetch("/api/apartments?".concat(queryParams));
        const data = await res.json();
        const mergedApartments = (0,_utils_helpers_crmHelper__WEBPACK_IMPORTED_MODULE_27__/* .mergeApartments */ .r)(data.apartments, crmData);
        setPaginatedApartments(mergedApartments);
        setCurrentPage(newPage);
    };
    const closeSortingBottomSheet = ()=>{
        setIsSortingBottomSheetOpen(false);
    };
    const startNumber = (currentPage - 1) * _ts_const__WEBPACK_IMPORTED_MODULE_28__/* .PAGINATION_PAGE_SIZE */ .h0 + 1;
    const endNumber = Math.min(currentPage * _ts_const__WEBPACK_IMPORTED_MODULE_28__/* .PAGINATION_PAGE_SIZE */ .h0, totalApartmentCount);
    const displayText = isRTL ? "".concat(totalApartmentCount, " of ").concat(endNumber, "-").concat(startNumber) : "".concat(startNumber, "-").concat(endNumber, " of ").concat(totalApartmentCount);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv4, {
        id: "section2",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv5, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledP2, {
                                children: t("common.offers")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv6, {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
                                        onClick: ()=>dispatch({
                                                type: _zustand_globalReducer__WEBPACK_IMPORTED_MODULE_12__/* .StoreActions */ .A.SET_FILTERS_OPEN,
                                                payload: true
                                            }),
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_public_icons_search_svg__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {})
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: ()=>setIsSortingBottomSheetOpen(true),
                                        children: [
                                            " ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_public_icons_arrowlist_svg__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_FilterTags_FilterTags__WEBPACK_IMPORTED_MODULE_19__/* .FilterTags */ .W, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledDiv7, {
                        children: paginatedApartments.map((apartment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_ApartmentList_ApartmentListItem_ApartmentListItem__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                                apartmentData: apartment
                            }, apartment.ExternalId))
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledDiv8, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledButton, {
                                onClick: ()=>handlePageChange(currentPage - 1),
                                disabled: currentPage === 1,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_23__/* .LeftArrow */ .IT, {})
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledP3, {
                                dir: "ltr",
                                children: displayText
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledButton2, {
                                onClick: ()=>handlePageChange(currentPage + 1),
                                disabled: currentPage === totalPages,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Icons_Icons__WEBPACK_IMPORTED_MODULE_23__/* .RightArrow */ .UV, {})
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BottomSheet_BottomSheet__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                isOpen: isSortingBottomSheetOpen,
                onClose: closeSortingBottomSheet,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_BottomSheet_BottomSheetInserts_MobileApartmentListSorting__WEBPACK_IMPORTED_MODULE_21__/* .MobileApartmentListSorting */ .l, {
                    onClose: closeSortingBottomSheet
                })
            })
        ]
    });
};
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (BuildingPage);
var _StyledDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div").withConfig({
    componentId: "sc-29742c10-0"
}).withConfig({
    componentId: "sc-5cd24498-0"
})({
    "height": "100vh",
    "@media (min-width: 768px)": {
        "pointerEvents": "none"
    }
});
var _StyledDiv2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div")({
    "position": "relative",
    "height": "calc(145dvw + 172px)",
    "scrollSnapAlign": "start",
    "@media (min-width: 768px)": {
        "height": "100vh",
        "paddingTop": "60px"
    }
});
var _StyledDiv3 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div")({
    "pointerEvents": "auto",
    "display": "flex",
    "cursor": "pointer",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "gap": "1rem",
    "paddingBottom": "16px"
});
var _StyledSpan = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("span")({
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "--tw-rotate": "180deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledP = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("p")({
    "fontSize": "32px"
});
var _StyledDiv4 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div")({
    "pointerEvents": "auto",
    "position": "relative",
    "zIndex": "50",
    "scrollSnapAlign": "start",
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
});
var _StyledDiv5 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div")({
    "marginLeft": "1rem",
    "marginRight": "1rem",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between"
});
var _StyledP2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("p")({
    "fontSize": "22px",
    "fontWeight": "700",
    "lineHeight": "120%"
});
var _StyledDiv6 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div")({
    "display": "flex",
    "gap": "1rem"
});
var _StyledDiv7 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div")({
    "display": "grid",
    "gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
    "columnGap": "0.5rem",
    "rowGap": "1rem",
    "padding": "1rem"
});
var _StyledDiv8 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("div")({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "padding": "1rem"
});
var _StyledButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("button")({
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "--tw-rotate": "180deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledP3 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("p")({
    "fontSize": "12px",
    "fontWeight": "700",
    "lineHeight": "140%",
    "color": "var(--base-white-white)"
});
var _StyledButton2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .ZP)("button").withConfig({
    displayName: "building___StyledButton2",
    componentId: "sc-1lj21be-0"
})({
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "--tw-rotate": "180deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [260,866,664,893,153,296,774,888,179], function() { return __webpack_exec__(8852); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);