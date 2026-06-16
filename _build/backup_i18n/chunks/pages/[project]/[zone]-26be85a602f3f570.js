(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[94],{

/***/ 3932:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/[project]/[zone]",
      function () {
        return __webpack_require__(834);
      }
    ]);
    if(false) {}
  

/***/ }),

/***/ 834:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  __N_SSP: function() { return /* binding */ __N_SSP; },
  "default": function() { return /* binding */ _zone_; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./src/components/ApartmentList/ApartmentList.tsx + 8 modules
var ApartmentList = __webpack_require__(3360);
// EXTERNAL MODULE: ./src/components/ApartmentListFilters/ApartmentListFilters.tsx + 2 modules
var ApartmentListFilters = __webpack_require__(5070);
// EXTERNAL MODULE: ./src/utils/helpers/helpers.ts
var helpers = __webpack_require__(4919);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/utils/pubsub.ts
var pubsub = __webpack_require__(1933);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./src/styles/components/Containers.ts
var Containers = __webpack_require__(4483);
// EXTERNAL MODULE: ./src/components/Slider/hooks/useSliderConfig.ts + 2 modules
var useSliderConfig = __webpack_require__(4557);
// EXTERNAL MODULE: ./types/enums.ts
var enums = __webpack_require__(806);
// EXTERNAL MODULE: ./src/components/MobileBottomBar/MobileBottomBar.tsx + 3 modules
var MobileBottomBar = __webpack_require__(1634);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
// EXTERNAL MODULE: ./src/components/MobileModal/MobileModal.tsx
var MobileModal = __webpack_require__(4078);
// EXTERNAL MODULE: ./src/components/FilteringSortingMobile/FilteringModal/FilteringModal.tsx + 1 modules
var FilteringModal = __webpack_require__(3726);
// EXTERNAL MODULE: ./src/components/Slider/Slider.tsx + 4 modules
var Slider = __webpack_require__(5793);
// EXTERNAL MODULE: ./src/components/CloseUIButton/CloseUIButton.tsx
var CloseUIButton = __webpack_require__(5783);
// EXTERNAL MODULE: ./src/utils/helpers/mappings.ts
var mappings = __webpack_require__(431);
// EXTERNAL MODULE: ./src/containers/VideoConfigurator/threeJSManager/ThreeJSManager.ts + 34 modules
var ThreeJSManager = __webpack_require__(586);
// EXTERNAL MODULE: ./src/components/FilterTags/FilterTags.tsx + 1 modules
var FilterTags = __webpack_require__(4496);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./src/components/ApartmentList/ApartmentListItem/ApartmentListItem.tsx + 2 modules
var ApartmentListItem = __webpack_require__(7298);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/hooks/useHandleRedirectUrlParam.ts



const useHandleRedirectUrlParam = ()=>{
    const router = (0,next_router.useRouter)();
    const isVideoTransitioning = (0,useGlobalStore/* useStore */.o)((s)=>s.isVideoTransitioning);
    const alreadyRunned = (0,react.useRef)(true);
    (0,react.useEffect)(()=>{
        if (isVideoTransitioning) {
            alreadyRunned.current = false;
        }
        if (alreadyRunned.current) return;
        if (router.query.redirect && !isVideoTransitioning) {
            const targetRoute = "".concat(router.query.redirect);
            router.push(targetRoute);
            alreadyRunned.current = true;
        }
    }, [
        isVideoTransitioning,
        router
    ]);
};
/* harmony default export */ var hooks_useHandleRedirectUrlParam = (useHandleRedirectUrlParam);

// EXTERNAL MODULE: ./src/containers/VideoConfigurator/threeJSManager/pointsOfInteres/pointOfInterestController.ts + 7 modules
var pointOfInterestController = __webpack_require__(826);
// EXTERNAL MODULE: ./types/const.ts
var types_const = __webpack_require__(2409);
// EXTERNAL MODULE: ./public/jsonData/PanoramaConfig.json
var PanoramaConfig = __webpack_require__(5744);
// EXTERNAL MODULE: ./src/components/ResultsAndSorting/ResultCount/ResultCount.tsx + 1 modules
var ResultCount = __webpack_require__(3253);
// EXTERNAL MODULE: ./src/components/POI/index.ts + 42 modules
var POI = __webpack_require__(2831);
;// CONCATENATED MODULE: ./src/pages/[project]/[zone]/index.tsx

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
function _templateObject1() {
    const data = (0,_tagged_template_literal._)([
        "",
        ""
    ]);
    _templateObject1 = function() {
        return data;
    };
    return data;
}





























const ZonePage = (param)=>{
    let { apartments, allBuildingsAndZones, totalApartmentCount, fragmentedApartmentsCount, crmData } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const deviceType = (0,useGlobalStore/* useStore */.o)((s)=>s.deviceType);
    const mobileListOpen = (0,useGlobalStore/* useStore */.o)((s)=>s.mobileListOpen);
    const filtersOpen = (0,useGlobalStore/* useStore */.o)((s)=>s.filtersOpen);
    const isUIClosed = (0,useGlobalStore/* useStore */.o)((s)=>s.isUIClosed);
    const POIModalData = (0,useGlobalStore/* useStore */.o)((s)=>s.POIModalData);
    const isVideoTransitioning = (0,useGlobalStore/* useStore */.o)((s)=>s.isVideoTransitioning);
    const videoController = (0,useGlobalStore/* useStore */.o)((s)=>s.videoController);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const isMobile = deviceType === enums/* DeviceType */.Yi.MOBILE;
    hooks_useHandleRedirectUrlParam();
    // @ts-ignore
    const setSliderConfig = (0,useSliderConfig/* useSliderConfig */.P1)([
        {
            type: "exterior",
            data: {
                zone: router.query.zone
            }
        }
    ]);
    (0,react.useEffect)(()=>{
        if (fragmentedApartmentsCount.zoneName) {
            let buildingsData = [];
            buildingsData = Object.entries(fragmentedApartmentsCount.apartmentCount).map((param)=>{
                let [key, value] = param;
                return {
                    buildingName: key,
                    offers: value
                };
            });
            var _router_query_side;
            const side = Array.isArray(router.query.side) ? router.query.side[0] : (_router_query_side = router.query.side) !== null && _router_query_side !== void 0 ? _router_query_side : Object.keys(mappings/* directionSuffixMap */.fY)[0];
            pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.SHOW_BUILDINGS, {
                visibleBuildings: buildingsData,
                zoneName: fragmentedApartmentsCount.zoneName,
                side
            });
        } else {
            let zonesData = [];
            zonesData = Object.entries(fragmentedApartmentsCount.apartmentCount).map((param)=>{
                let [key, value] = param;
                return {
                    zoneName: key,
                    offers: value
                };
            });
            pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.SHOW_ZONES, {
                visibleZones: zonesData
            });
        }
    }, [
        router.query
    ]);
    const section1Ref = (0,react.useRef)(null);
    const section2Ref = (0,react.useRef)(null);
    const section3Ref = (0,react.useRef)(null);
    const section4Ref = (0,react.useRef)(null);
    const currentSectionRef = (0,react.useRef)("");
    const sectionsCameraMap = [
        {
            id: "section1",
            camera: "Camera".concat(router.query.project, "ZoneHero1"),
            ref: section1Ref
        },
        {
            id: "section2",
            camera: "Camera".concat(router.query.project, "ZoneA1"),
            ref: section2Ref
        },
        {
            id: "section3",
            camera: "Camera".concat(router.query.project, "ZoneAmenities1"),
            ref: section3Ref
        },
        {
            id: "section4",
            camera: "Camera".concat(router.query.project, "ZoneMaster1"),
            ref: section4Ref
        }
    ];
    const projectName = router.query.project;
    const handleSetModalType = (type, interactionKey, isMobile)=>{
        if (isVideoTransitioning) return false;
        const isPanoramaConfigActive = PanoramaConfig/* active */.b;
        const typeNumbersRemoved = type.replaceAll(/[0-9]/g, "");
        const modalData = (0,pointOfInterestController/* getPoiData */.QW)(type, projectName);
        if (!modalData) return false;
        const pointInPanoramaConfig = PanoramaConfig/* apartments */.J.some((element)=>element.type.toLowerCase() == typeNumbersRemoved.toLowerCase());
        let isVisualAction = false;
        if (pointInPanoramaConfig && isPanoramaConfigActive) {
            var _ThreeJSManager_instance;
            isVisualAction = true;
            (_ThreeJSManager_instance = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance === void 0 ? void 0 : _ThreeJSManager_instance.OpenPanorama("", typeNumbersRemoved);
            setTimeout(()=>{
                if (!isMobile) {
                    /*
          for panorama view we can either no show modal and do it like here
          or we can show modal then we also need to add
          if (isMobile) {
          dispatch({
            type: StoreActions.IS_MOBILE_POI_MODAL_OPEN,
            payload: true,
          });
          }
          */ dispatch({
                        type: globalReducer/* StoreActions */.A.SET_POI_MODAL_DATA,
                        payload: modalData
                    });
                }
                dispatch({
                    type: globalReducer/* StoreActions */.A.SET_IS_UI_CLOSED,
                    payload: false
                });
                dispatch({
                    type: globalReducer/* StoreActions */.A.IS_SLIDER_HIDDEN,
                    payload: false
                });
            }, 1000);
        } else {
            var _ThreeJSManager_instance1;
            const canPlay = videoController === null || videoController === void 0 ? void 0 : videoController.PlaySelectedVideoFromCurrent(modalData.camera);
            setTimeout(()=>{
                dispatch({
                    type: globalReducer/* StoreActions */.A.SET_POI_MODAL_DATA,
                    payload: modalData
                });
            }, canPlay ? types_const/* SHOW_MODAL_TIMEOUT */.aA : 0);
            if (isMobile) {
                dispatch({
                    type: globalReducer/* StoreActions */.A.IS_MOBILE_POI_MODAL_OPEN,
                    payload: true
                });
            }
            if (!canPlay) return isVisualAction;
            isVisualAction = true;
            const fromCamera = (0,helpers/* removeRightPartOfUnderscore */.Z7)((0,helpers/* removeLeftPartOfUnderscore */.$0)(videoController === null || videoController === void 0 ? void 0 : videoController.getCurrentVideoName()));
            dispatch({
                type: globalReducer/* StoreActions */.A.SET_POI_ORIGIN_CAMERA,
                payload: fromCamera
            });
            (_ThreeJSManager_instance1 = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance1 === void 0 ? void 0 : _ThreeJSManager_instance1.playSection();
            dispatch({
                type: globalReducer/* StoreActions */.A.TOGGLE_VIDEO_TRANSITIONING,
                payload: true
            });
        }
        dispatch({
            type: globalReducer/* StoreActions */.A.SET_ACTIVE_POI_NAME,
            payload: interactionKey
        });
        pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.HIDE_3D, {
            hide3D: true
        });
        return isVisualAction;
    };
    const handleSectionChange = (sectionId)=>{
        var _ThreeJSManager_instance, _ThreeJSManager_instance1;
        if (sectionId === currentSectionRef.current) return null;
        if (isVideoTransitioning) return;
        const lastChar = sectionId[sectionId.length - 1];
        const sectionNumber = lastChar >= "0" && lastChar <= "9" ? parseInt(lastChar, 10) : null;
        switch(sectionId){
            case "section3":
                const { pathname, query } = router;
                const updatedQuery = {
                    ...query
                };
                // @ts-ignore
                delete updatedQuery.side;
                const queryString = new URLSearchParams(updatedQuery).toString();
                router.push("".concat(pathname, "?").concat(queryString), undefined, {
                    shallow: true,
                    scroll: false
                });
                setSliderConfig([
                    {
                        type: "amenitiesSection",
                        data: null
                    }
                ]);
                dispatch({
                    type: globalReducer/* StoreActions */.A.IS_SLIDER_HIDDEN,
                    payload: false
                });
                break;
            case "section4":
                setSliderConfig([
                    {
                        type: "master",
                        data: null
                    }
                ]);
                dispatch({
                    type: globalReducer/* StoreActions */.A.IS_SLIDER_HIDDEN,
                    payload: false
                });
                break;
            default:
                setSliderConfig([
                    {
                        type: "zone",
                        data: null
                    }
                ]);
                dispatch({
                    type: globalReducer/* StoreActions */.A.IS_SLIDER_HIDDEN,
                    payload: false
                });
                break;
        }
        let videoToPlay = "";
        if (sectionId == "section2") {
            let zone = router.query.zone;
            zone = zone.split("_")[1];
            videoToPlay = "Camera".concat(router.query.project, "Zone").concat(zone, "1");
        } else {
            var _sectionsCameraMap_find;
            videoToPlay = ((_sectionsCameraMap_find = sectionsCameraMap.find((section)=>section.id === sectionId)) === null || _sectionsCameraMap_find === void 0 ? void 0 : _sectionsCameraMap_find.camera) || "";
        }
        const canPlay = videoController === null || videoController === void 0 ? void 0 : videoController.PlaySelectedVideoFromCurrent(videoToPlay);
        currentSectionRef.current = sectionId;
        if (sectionId === "section1") {
            dispatch({
                type: globalReducer/* StoreActions */.A.SET_IS_UI_CLOSED,
                payload: true
            });
        } else {
            dispatch({
                type: globalReducer/* StoreActions */.A.SET_IS_UI_CLOSED,
                payload: false
            });
        }
        pubsub/* default */.ZP.publish(pubsub/* EventType */.tw.SECTION_CHANGED, {
            currentSectionNumber: sectionNumber
        });
        if (!canPlay) return;
        (_ThreeJSManager_instance = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance === void 0 ? void 0 : _ThreeJSManager_instance.playSection();
        dispatch({
            type: globalReducer/* StoreActions */.A.TOGGLE_VIDEO_TRANSITIONING,
            payload: true
        });
        (_ThreeJSManager_instance1 = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance1 === void 0 ? void 0 : _ThreeJSManager_instance1.threeJSPubSubReceiver.refreshBuilding(router.query.zone, router.query.side);
    };
    (0,react.useEffect)(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    handleSectionChange(entry.target.id);
                }
            });
        }, {
            threshold: 0.5
        });
        sectionsCameraMap.forEach((param)=>{
            let { ref } = param;
            if (ref.current) {
                observer.observe(ref.current);
            }
        });
        return ()=>{
            sectionsCameraMap.forEach((param)=>{
                let { ref } = param;
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
    }, [
        dispatch,
        isVideoTransitioning,
        router.query.project,
        videoController,
        setSliderConfig
    ]);
    (0,react.useEffect)(()=>{
        if (isMobile) {
            // fixes slider active state tracking on mobile
            setSliderConfig([
                {
                    type: "zone",
                    data: null
                }
            ]);
        }
    }, [
        isMobile,
        setSliderConfig
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv, {
        children: isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionsMobile, {
            filtersOpen: filtersOpen,
            dispatch: dispatch,
            allBuildingsAndZones: allBuildingsAndZones,
            totalApartmentCount: totalApartmentCount,
            deviceType: deviceType,
            mobileListOpen: mobileListOpen,
            apartments: apartments,
            ref1: section1Ref,
            ref2: section2Ref,
            ref3: section3Ref,
            ref4: section4Ref,
            t: t,
            handleSetModalType: handleSetModalType,
            handleSectionChange: handleSectionChange,
            crmData: crmData
        }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(SectionsDesktop, {
            POIModalData: POIModalData,
            isUIClosed: isUIClosed,
            apartments: apartments,
            allBuildingsAndZones: allBuildingsAndZones,
            totalApartmentCount: totalApartmentCount,
            ref1: section1Ref,
            ref2: section2Ref,
            ref3: section3Ref,
            ref4: section4Ref,
            t: t,
            dispatch: dispatch,
            handleSetModalType: handleSetModalType,
            crmData: crmData
        })
    });
};
const SectionsMobile = (param)=>{
    let { filtersOpen, dispatch, totalApartmentCount, deviceType, mobileListOpen, apartments, allBuildingsAndZones, ref1, ref2, ref3, ref4, t, handleSetModalType, handleSectionChange, crmData } = param;
    var _tabRefs_current_activeTab, _tabRefs_current_activeTab1;
    let Tabs;
    (function(Tabs) {
        Tabs["Main"] = "main";
        Tabs["Amenities"] = "amenities";
        Tabs["Locations"] = "locations";
    })(Tabs || (Tabs = {}));
    const activeTab = (0,useGlobalStore/* useStore */.o)((s)=>s.activeTab);
    const setActiveTab = (tab)=>dispatch({
            type: globalReducer/* StoreActions */.A.SET_ACTIVE_TAB,
            payload: tab
        });
    const tabRefs = (0,react.useRef)({});
    (0,react.useEffect)(()=>{
        switch(activeTab){
            case "amenities":
                handleSectionChange("section3");
                break;
            case "locations":
                handleSectionChange("section4");
                break;
            default:
                handleSectionChange("section2");
        }
    }, [
        activeTab
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv2, {
                id: "section1",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FilteringModal/* default */.Z, {
                        isOpen: filtersOpen,
                        onClose: ()=>dispatch({
                                type: globalReducer/* StoreActions */.A.SET_FILTERS_OPEN,
                                payload: false
                            }),
                        allBuildingsAndZones: allBuildingsAndZones,
                        totalApartmentCount: totalApartmentCount
                    }),
                    deviceType === enums/* DeviceType */.Yi.MOBILE && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MobileBottomBar/* MobileBottomBar */.t, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv3, {
                                        children: [
                                            Object.values(Tabs).map((tab)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledButton, {
                                                    onClick: ()=>setActiveTab(tab),
                                                    ref: (el)=>tabRefs.current[tab] = el,
                                                    children: t("nav.".concat(tab))
                                                }, tab)),
                                            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv4, {
                                                style: {
                                                    width: ((_tabRefs_current_activeTab = tabRefs.current[activeTab]) === null || _tabRefs_current_activeTab === void 0 ? void 0 : _tabRefs_current_activeTab.offsetWidth) || 0,
                                                    left: ((_tabRefs_current_activeTab1 = tabRefs.current[activeTab]) === null || _tabRefs_current_activeTab1 === void 0 ? void 0 : _tabRefs_current_activeTab1.offsetLeft) || 0
                                                }
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Slider/* Slider */.i, {})
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(MobileModal/* MobileModal */.o, {
                                isOpen: mobileListOpen,
                                onClose: ()=>dispatch({
                                        type: globalReducer/* StoreActions */.A.SET_MOBILE_LIST_OPEN,
                                        payload: false
                                    }),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterTags/* FilterTags */.W, {}),
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentList/* default */.Z, {
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
            {
                ["main"]: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv5, {
                        id: "section2",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv6, {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCount/* default */.Z, {
                                        count: totalApartmentCount
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterTags/* FilterTags */.W, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv7, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv8, {
                                        children: apartments.map((apartment)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentListItem/* default */.Z, {
                                                restrictWidthForVerticalScroll: true,
                                                apartmentData: apartment
                                            }, apartment.ExternalId))
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv9, {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledButton2, {
                                        onClick: ()=>{
                                            dispatch({
                                                type: globalReducer/* StoreActions */.A.SET_MOBILE_LIST_OPEN,
                                                payload: true
                                            });
                                        },
                                        children: t("common.showAll")
                                    })
                                })
                            ]
                        })
                    })
                }),
                ["amenities"]: /*#__PURE__*/ (0,jsx_runtime.jsx)(POI/* Amenities */.a2, {
                    handleSetModalType: handleSetModalType
                }),
                ["locations"]: /*#__PURE__*/ (0,jsx_runtime.jsx)(POI/* Locations */.tY, {})
            }[activeTab],
            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv0, {
                id: "footer",
                children: t("footer.disclaimer")
            })
        ]
    });
};
const SectionsDesktop = (param)=>{
    let { POIModalData, isUIClosed, allBuildingsAndZones, totalApartmentCount, apartments, ref1, ref2, ref3, ref4, t, dispatch, handleSetModalType, crmData } = param;
    const footerRef = (0,react.useRef)(null);
    (0,react.useEffect)(()=>{
        const observer = new IntersectionObserver((param)=>{
            let [entry] = param;
            const isInView = entry.isIntersecting;
            if (isInView) {
                dispatch({
                    type: globalReducer/* StoreActions */.A.IS_SLIDER_HIDDEN,
                    payload: false
                });
            } else {
                dispatch({
                    type: globalReducer/* StoreActions */.A.IS_SLIDER_HIDDEN,
                    payload: false
                });
            }
        }, {
            threshold: 0.01
        });
        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
        return ()=>observer.disconnect();
    }, [
        dispatch
    ]);
    const scrollTimerRef = (0,react.useRef)(null);
    const isSnappingRef = (0,react.useRef)(false);
    (0,react.useEffect)(()=>{
        const handleScroll = ()=>{
            if (scrollTimerRef.current) {
                clearTimeout(scrollTimerRef.current);
            }
            scrollTimerRef.current = setTimeout(()=>{
                if (isSnappingRef.current) return;
                const viewportMid = window.scrollY + window.innerHeight / 2;
                let closestRef = null;
                let closestDistance = Infinity;
                [
                    ref1,
                    ref2,
                    ref3,
                    ref4
                ].forEach((ref)=>{
                    if (!ref.current) return;
                    const el = ref.current;
                    const elMid = el.offsetTop + el.offsetHeight / 2;
                    const distance = Math.abs(viewportMid - elMid);
                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestRef = el;
                    }
                });
                if (!closestRef) return;
                const targetScrollY = closestRef.offsetTop;
                const delta = Math.abs(window.scrollY - targetScrollY);
                if (delta < 4) return;
                const smoothScrollTo = function(targetY) {
                    let duration = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 800;
                    const startY = window.scrollY;
                    const distance = targetY - startY;
                    const startTime = performance.now();
                    const ease = (t)=>t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
                    const step = (currentTime)=>{
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        window.scrollTo(0, startY + distance * ease(progress));
                        if (progress < 1) requestAnimationFrame(step);
                        else isSnappingRef.current = false;
                    };
                    requestAnimationFrame(step);
                };
                isSnappingRef.current = true;
                smoothScrollTo(targetScrollY, 500);
                setTimeout(()=>{
                    isSnappingRef.current = false;
                }, 500);
            }, 1000);
        };
        window.addEventListener("scroll", handleScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimerRef.current) clearTimeout(scrollTimerRef.current);
        };
    }, []);
    const router = (0,next_router.useRouter)();
    const projectName = router.query.project;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv1, {
                id: "section1",
                ref: ref1,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv10, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("img", {
                            src: "/icons/logo.svg",
                            alt: "logo",
                            width: "110px",
                            height: "110px"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP2, {
                            children: "Kozielska Park"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP3, {
                            children: "Wysoka jakość. W zielonym zaciszu."
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledButton3, {
                            onClick: ()=>{
                                var _ref2_current;
                                (_ref2_current = ref2.current) === null || _ref2_current === void 0 ? void 0 : _ref2_current.scrollIntoView({
                                    behavior: "smooth"
                                });
                            },
                            children: t("hero.explore")
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv11, {
                id: "section2",
                ref: ref2,
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containers/* DesktopLayoutWrapper */.Kc, {
                    poiZoomed: false,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP4, {
                            children: t("titles.selectBuilding")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Containers/* BlurWrapper */.Ah, {
                            isClosed: isUIClosed,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseUIButton/* CloseUIButton */.A, {}),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentListFilters/* default */.Z, {
                                    allBuildingsAndZones: allBuildingsAndZones
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentList/* default */.Z, {
                                    apartmentsData: apartments,
                                    totalApartmentCount: totalApartmentCount,
                                    crmData: crmData
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv12, {
                id: "section3",
                ref: ref3,
                $_css: [
                    {
                        "height": "100vh",
                        "width": "fit-content",
                        "scrollSnapAlign": "start",
                        "paddingTop": "60px",
                        "transitionProperty": "transform",
                        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "transitionDuration": "500ms",
                        "@media (min-width: 768px)": {
                            "paddingLeft": "40px",
                            '&:where([dir="rtl"], [dir="rtl"] *)': {
                                "paddingRight": "40px"
                            }
                        }
                    },
                    isUIClosed && {
                        "--tw-translate-x": "-96%",
                        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                        '&:where([dir="rtl"], [dir="rtl"] *)': {
                            "--tw-translate-x": "96%",
                            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
                        }
                    }
                ],
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(POI/* Amenities */.a2, {
                    handleSetModalType: handleSetModalType
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv13, {
                id: "section4",
                ref: ref4,
                $_css2: [
                    {
                        "height": "100vh",
                        "width": "fit-content",
                        "scrollSnapAlign": "start",
                        "paddingTop": "60px",
                        "transitionProperty": "transform",
                        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "transitionDuration": "500ms",
                        "@media (min-width: 768px)": {
                            "paddingLeft": "40px",
                            '&:where([dir="rtl"], [dir="rtl"] *)': {
                                "paddingRight": "40px"
                            }
                        }
                    },
                    isUIClosed && {
                        "--tw-translate-x": "-96%",
                        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
                        '&:where([dir="rtl"], [dir="rtl"] *)': {
                            "--tw-translate-x": "96%",
                            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
                        }
                    }
                ],
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(POI/* Locations */.tY, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv14, {
                id: "footer",
                ref: footerRef,
                children: t("footer.disclaimer")
            })
        ]
    });
};
var __N_SSP = true;
/* harmony default export */ var _zone_ = (ZonePage);
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-6965366-0"
}).withConfig({
    componentId: "sc-55fd490e-0"
})({
    "height": "100dvh",
    "width": "100dvw"
});
var _StyledDiv2 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "position": "relative",
    "height": "calc(145dvw + 172px)",
    "scrollSnapAlign": "start"
});
var _StyledDiv3 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "position": "relative",
    "marginTop": "0.5rem",
    "marginBottom": "0.5rem",
    "display": "grid",
    "gridTemplateColumns": "repeat(3, minmax(0, 1fr))",
    "borderBottomWidth": "1px",
    "borderColor": "rgba(255,255,255,0.20)",
    "paddingLeft": "0.25rem",
    "paddingRight": "0.25rem"
});
var _StyledButton = (0,styled_components_browser_esm/* default */.ZP)("button")({
    "flex": "1 1 0%",
    "paddingTop": "1rem",
    "paddingBottom": "1rem",
    "fontSize": "12px",
    "fontWeight": "500",
    "textTransform": "uppercase",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
});
var _StyledDiv4 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "position": "absolute",
    "bottom": "0px",
    "height": "3px",
    "borderTopLeftRadius": "9999px",
    "borderTopRightRadius": "9999px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
    "transitionProperty": "all",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
});
var _StyledDiv5 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "pointerEvents": "auto",
    "position": "relative",
    "zIndex": "50",
    "scrollSnapAlign": "start",
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
});
var _StyledDiv6 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "pointerEvents": "auto"
});
var _StyledP = (0,styled_components_browser_esm/* default */.ZP)("p")({
    "marginLeft": "1rem",
    "marginRight": "1rem",
    "display": "flex",
    "justifyContent": "space-between",
    "paddingTop": "0.75rem",
    "fontSize": "22px",
    "fontWeight": "700",
    "lineHeight": "120%"
});
var _StyledDiv7 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "maxWidth": "100%",
    "overflowX": "auto",
    "overflowY": "hidden",
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
});
var _StyledDiv8 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "display": "flex",
    "gap": "0.5rem",
    "&::before": {
        "content": "var(--tw-content)",
        "display": "block",
        "width": "0.5rem",
        "flexShrink": "0",
        "--tw-content": "''"
    },
    "&::after": {
        "content": "var(--tw-content)",
        "display": "block",
        "width": "0.5rem",
        "flexShrink": "0",
        "--tw-content": "''"
    }
});
var _StyledDiv9 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "display": "flex",
    "width": "100%",
    "justifyContent": "flex-end"
});
var _StyledButton2 = (0,styled_components_browser_esm/* default */.ZP)("button")({
    "marginLeft": "1rem",
    "marginRight": "1rem",
    "fontSize": "16px",
    "fontWeight": "500",
    "textTransform": "uppercase"
});
var _StyledDiv0 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "var(--blue-700)",
    "paddingLeft": "2rem",
    "paddingRight": "2rem",
    "paddingTop": "0.75rem",
    "paddingBottom": "0.75rem",
    "fontSize": "12px",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
});
var _StyledDiv1 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "position": "relative",
    "height": "100vh",
    "scrollSnapAlign": "start"
});
var _StyledDiv10 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "display": "flex",
    "height": "100%",
    "width": "100%",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center"
});
var _StyledP2 = (0,styled_components_browser_esm/* default */.ZP)("p")({
    "marginTop": "2.5rem",
    "fontSize": "56px",
    "fontWeight": "600"
});
var _StyledP3 = (0,styled_components_browser_esm/* default */.ZP)("p")({
    "fontSize": "32px",
    "fontWeight": "600"
});
var _StyledButton3 = (0,styled_components_browser_esm/* default */.ZP)("button")({
    "marginTop": "2.5rem",
    "cursor": "pointer",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(244 240 233 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "1.5rem",
    "paddingRight": "1.5rem",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "textTransform": "uppercase",
    "--tw-text-opacity": "1",
    "color": "rgb(35 29 13 / var(--tw-text-opacity, 1))",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "&:hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgb(152 73 49 / var(--tw-bg-opacity, 1))",
        "--tw-text-opacity": "1",
        "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
    },
    "&:active": {
        "--tw-scale-x": ".95",
        "--tw-scale-y": ".95",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledDiv11 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "pointerEvents": "none",
    "height": "100vh",
    "scrollSnapAlign": "start",
    "paddingTop": "60px"
});
var _StyledP4 = (0,styled_components_browser_esm/* default */.ZP)("p")({
    "paddingBottom": "16px",
    "fontSize": "32px"
});
var _StyledDiv12 = (0,styled_components_browser_esm/* default */.ZP)("div")(_templateObject(), (p)=>p.$_css);
var _StyledDiv13 = (0,styled_components_browser_esm/* default */.ZP)("div")(_templateObject1(), (p)=>p.$_css2);
var _StyledDiv14 = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    displayName: "zone___StyledDiv14",
    componentId: "sc-kx6xdu-0"
})({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "var(--blue-700)",
    "paddingLeft": "5rem",
    "paddingRight": "5rem",
    "paddingTop": "0.75rem",
    "paddingBottom": "0.75rem",
    "fontSize": "12px",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
});


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, [260,866,664,893,153,296,774,888,179], function() { return __webpack_exec__(3932); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);