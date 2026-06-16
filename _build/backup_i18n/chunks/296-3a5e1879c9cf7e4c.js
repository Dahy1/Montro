"use strict";
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([[296],{

/***/ 9878:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var _path, _path2;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgArrowlist = function SvgArrowlist(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M12.726 14.766a.84.84 0 0 1 1.188 0l3.606 3.606 3.606-3.606a.84.84 0 0 1 1.188 1.188l-4.2 4.2a.84.84 0 0 1-1.188 0l-4.2-4.2a.84.84 0 0 1 0-1.188",
    clipRule: "evenodd"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    fillRule: "evenodd",
    d: "M17.52 8.64a.84.84 0 0 1 .84.84v10.08a.84.84 0 0 1-1.68 0V9.48a.84.84 0 0 1 .84-.84M2.4 11.16a.84.84 0 0 1 .84-.84h7.56a.84.84 0 0 1 0 1.68H3.24a.84.84 0 0 1-.84-.84M2.4 4.44a.84.84 0 0 1 .84-.84h14.28a.84.84 0 0 1 0 1.68H3.24a.84.84 0 0 1-.84-.84M2.4 17.88a.84.84 0 0 1 .84-.84h5.88a.84.84 0 0 1 0 1.68H3.24a.84.84 0 0 1-.84-.84",
    clipRule: "evenodd"
  })));
};
/* harmony default export */ __webpack_exports__.Z = (SvgArrowlist);

/***/ }),

/***/ 1028:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgCheck = function SvgCheck(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18,
    height: 18,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 1.5,
    d: "m15 4.5-8.25 8.25L3 9"
  })));
};
/* harmony default export */ __webpack_exports__.Z = (SvgCheck);

/***/ }),

/***/ 3360:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ApartmentList_ApartmentList; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./src/components/ApartmentList/ApartmentListItem/ApartmentListItem.tsx + 2 modules
var ApartmentListItem = __webpack_require__(7298);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./node_modules/react-infinite-scroll-component/dist/index.es.js


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/* eslint-disable no-undefined,no-param-reassign,no-shadow */

/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {Number}    delay          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {Boolean}   [noTrailing]   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset)
 * @param  {Function}  callback       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {Boolean}   [debounceMode] If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @return {Function}  A new, throttled, function.
 */
function throttle (delay, noTrailing, callback, debounceMode) {
  /*
   * After wrapper has stopped being called, this timeout ensures that
   * `callback` is executed at the proper times in `throttle` and `end`
   * debounce modes.
   */
  var timeoutID;
  var cancelled = false; // Keep track of the last time `callback` was executed.

  var lastExec = 0; // Function to clear existing timeout

  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  } // Function to cancel next exec


  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  } // `noTrailing` defaults to falsy.


  if (typeof noTrailing !== 'boolean') {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = undefined;
  }
  /*
   * The `wrapper` function encapsulates all of the throttling / debouncing
   * functionality and when executed will limit the rate at which `callback`
   * is executed.
   */


  function wrapper() {
    var self = this;
    var elapsed = Date.now() - lastExec;
    var args = arguments;

    if (cancelled) {
      return;
    } // Execute `callback` and update the `lastExec` timestamp.


    function exec() {
      lastExec = Date.now();
      callback.apply(self, args);
    }
    /*
     * If `debounceMode` is true (at begin) this is used to clear the flag
     * to allow future `callback` executions.
     */


    function clear() {
      timeoutID = undefined;
    }

    if (debounceMode && !timeoutID) {
      /*
       * Since `wrapper` is being called for the first time and
       * `debounceMode` is true (at begin), execute `callback`.
       */
      exec();
    }

    clearExistingTimeout();

    if (debounceMode === undefined && elapsed > delay) {
      /*
       * In throttle mode, if `delay` time has been exceeded, execute
       * `callback`.
       */
      exec();
    } else if (noTrailing !== true) {
      /*
       * In trailing throttle mode, since `delay` time has not been
       * exceeded, schedule `callback` to execute `delay` ms after most
       * recent execution.
       *
       * If `debounceMode` is true (at begin), schedule `clear` to execute
       * after `delay` ms.
       *
       * If `debounceMode` is false (at end), schedule `callback` to
       * execute after `delay` ms.
       */
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
    }
  }

  wrapper.cancel = cancel; // Return the wrapper function.

  return wrapper;
}

var ThresholdUnits = {
    Pixel: 'Pixel',
    Percent: 'Percent',
};
var defaultThreshold = {
    unit: ThresholdUnits.Percent,
    value: 0.8,
};
function parseThreshold(scrollThreshold) {
    if (typeof scrollThreshold === 'number') {
        return {
            unit: ThresholdUnits.Percent,
            value: scrollThreshold * 100,
        };
    }
    if (typeof scrollThreshold === 'string') {
        if (scrollThreshold.match(/^(\d*(\.\d+)?)px$/)) {
            return {
                unit: ThresholdUnits.Pixel,
                value: parseFloat(scrollThreshold),
            };
        }
        if (scrollThreshold.match(/^(\d*(\.\d+)?)%$/)) {
            return {
                unit: ThresholdUnits.Percent,
                value: parseFloat(scrollThreshold),
            };
        }
        console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...');
        return defaultThreshold;
    }
    console.warn('scrollThreshold should be string or number');
    return defaultThreshold;
}

var InfiniteScroll = /** @class */ (function (_super) {
    __extends(InfiniteScroll, _super);
    function InfiniteScroll(props) {
        var _this = _super.call(this, props) || this;
        _this.lastScrollTop = 0;
        _this.actionTriggered = false;
        // variables to keep track of pull down behaviour
        _this.startY = 0;
        _this.currentY = 0;
        _this.dragging = false;
        // will be populated in componentDidMount
        // based on the height of the pull down element
        _this.maxPullDownDistance = 0;
        _this.getScrollableTarget = function () {
            if (_this.props.scrollableTarget instanceof HTMLElement)
                return _this.props.scrollableTarget;
            if (typeof _this.props.scrollableTarget === 'string') {
                return document.getElementById(_this.props.scrollableTarget);
            }
            if (_this.props.scrollableTarget === null) {
                console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      ");
            }
            return null;
        };
        _this.onStart = function (evt) {
            if (_this.lastScrollTop)
                return;
            _this.dragging = true;
            if (evt instanceof MouseEvent) {
                _this.startY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.startY = evt.touches[0].pageY;
            }
            _this.currentY = _this.startY;
            if (_this._infScroll) {
                _this._infScroll.style.willChange = 'transform';
                _this._infScroll.style.transition = "transform 0.2s cubic-bezier(0,0,0.31,1)";
            }
        };
        _this.onMove = function (evt) {
            if (!_this.dragging)
                return;
            if (evt instanceof MouseEvent) {
                _this.currentY = evt.pageY;
            }
            else if (evt instanceof TouchEvent) {
                _this.currentY = evt.touches[0].pageY;
            }
            // user is scrolling down to up
            if (_this.currentY < _this.startY)
                return;
            if (_this.currentY - _this.startY >=
                Number(_this.props.pullDownToRefreshThreshold)) {
                _this.setState({
                    pullToRefreshThresholdBreached: true,
                });
            }
            // so you can drag upto 1.5 times of the maxPullDownDistance
            if (_this.currentY - _this.startY > _this.maxPullDownDistance * 1.5)
                return;
            if (_this._infScroll) {
                _this._infScroll.style.overflow = 'visible';
                _this._infScroll.style.transform = "translate3d(0px, " + (_this.currentY -
                    _this.startY) + "px, 0px)";
            }
        };
        _this.onEnd = function () {
            _this.startY = 0;
            _this.currentY = 0;
            _this.dragging = false;
            if (_this.state.pullToRefreshThresholdBreached) {
                _this.props.refreshFunction && _this.props.refreshFunction();
                _this.setState({
                    pullToRefreshThresholdBreached: false,
                });
            }
            requestAnimationFrame(function () {
                // this._infScroll
                if (_this._infScroll) {
                    _this._infScroll.style.overflow = 'auto';
                    _this._infScroll.style.transform = 'none';
                    _this._infScroll.style.willChange = 'unset';
                }
            });
        };
        _this.onScrollListener = function (event) {
            if (typeof _this.props.onScroll === 'function') {
                // Execute this callback in next tick so that it does not affect the
                // functionality of the library.
                setTimeout(function () { return _this.props.onScroll && _this.props.onScroll(event); }, 0);
            }
            var target = _this.props.height || _this._scrollableNode
                ? event.target
                : document.documentElement.scrollTop
                    ? document.documentElement
                    : document.body;
            // return immediately if the action has already been triggered,
            // prevents multiple triggers.
            if (_this.actionTriggered)
                return;
            var atBottom = _this.props.inverse
                ? _this.isElementAtTop(target, _this.props.scrollThreshold)
                : _this.isElementAtBottom(target, _this.props.scrollThreshold);
            // call the `next` function in the props to trigger the next data fetch
            if (atBottom && _this.props.hasMore) {
                _this.actionTriggered = true;
                _this.setState({ showLoader: true });
                _this.props.next && _this.props.next();
            }
            _this.lastScrollTop = target.scrollTop;
        };
        _this.state = {
            showLoader: false,
            pullToRefreshThresholdBreached: false,
            prevDataLength: props.dataLength,
        };
        _this.throttledOnScrollListener = throttle(150, _this.onScrollListener).bind(_this);
        _this.onStart = _this.onStart.bind(_this);
        _this.onMove = _this.onMove.bind(_this);
        _this.onEnd = _this.onEnd.bind(_this);
        return _this;
    }
    InfiniteScroll.prototype.componentDidMount = function () {
        if (typeof this.props.dataLength === 'undefined') {
            throw new Error("mandatory prop \"dataLength\" is missing. The prop is needed" +
                " when loading more content. Check README.md for usage");
        }
        this._scrollableNode = this.getScrollableTarget();
        this.el = this.props.height
            ? this._infScroll
            : this._scrollableNode || window;
        if (this.el) {
            this.el.addEventListener('scroll', this
                .throttledOnScrollListener);
        }
        if (typeof this.props.initialScrollY === 'number' &&
            this.el &&
            this.el instanceof HTMLElement &&
            this.el.scrollHeight > this.props.initialScrollY) {
            this.el.scrollTo(0, this.props.initialScrollY);
        }
        if (this.props.pullDownToRefresh && this.el) {
            this.el.addEventListener('touchstart', this.onStart);
            this.el.addEventListener('touchmove', this.onMove);
            this.el.addEventListener('touchend', this.onEnd);
            this.el.addEventListener('mousedown', this.onStart);
            this.el.addEventListener('mousemove', this.onMove);
            this.el.addEventListener('mouseup', this.onEnd);
            // get BCR of pullDown element to position it above
            this.maxPullDownDistance =
                (this._pullDown &&
                    this._pullDown.firstChild &&
                    this._pullDown.firstChild.getBoundingClientRect()
                        .height) ||
                    0;
            this.forceUpdate();
            if (typeof this.props.refreshFunction !== 'function') {
                throw new Error("Mandatory prop \"refreshFunction\" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage'");
            }
        }
    };
    InfiniteScroll.prototype.componentWillUnmount = function () {
        if (this.el) {
            this.el.removeEventListener('scroll', this
                .throttledOnScrollListener);
            if (this.props.pullDownToRefresh) {
                this.el.removeEventListener('touchstart', this.onStart);
                this.el.removeEventListener('touchmove', this.onMove);
                this.el.removeEventListener('touchend', this.onEnd);
                this.el.removeEventListener('mousedown', this.onStart);
                this.el.removeEventListener('mousemove', this.onMove);
                this.el.removeEventListener('mouseup', this.onEnd);
            }
        }
    };
    InfiniteScroll.prototype.componentDidUpdate = function (prevProps) {
        // do nothing when dataLength is unchanged
        if (this.props.dataLength === prevProps.dataLength)
            return;
        this.actionTriggered = false;
        // update state when new data was sent in
        this.setState({
            showLoader: false,
        });
    };
    InfiniteScroll.getDerivedStateFromProps = function (nextProps, prevState) {
        var dataLengthChanged = nextProps.dataLength !== prevState.prevDataLength;
        // reset when data changes
        if (dataLengthChanged) {
            return __assign(__assign({}, prevState), { prevDataLength: nextProps.dataLength });
        }
        return null;
    };
    InfiniteScroll.prototype.isElementAtTop = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop <=
                threshold.value + clientHeight - target.scrollHeight + 1);
        }
        return (target.scrollTop <=
            threshold.value / 100 + clientHeight - target.scrollHeight + 1);
    };
    InfiniteScroll.prototype.isElementAtBottom = function (target, scrollThreshold) {
        if (scrollThreshold === void 0) { scrollThreshold = 0.8; }
        var clientHeight = target === document.body || target === document.documentElement
            ? window.screen.availHeight
            : target.clientHeight;
        var threshold = parseThreshold(scrollThreshold);
        if (threshold.unit === ThresholdUnits.Pixel) {
            return (target.scrollTop + clientHeight >= target.scrollHeight - threshold.value);
        }
        return (target.scrollTop + clientHeight >=
            (threshold.value / 100) * target.scrollHeight);
    };
    InfiniteScroll.prototype.render = function () {
        var _this = this;
        var style = __assign({ height: this.props.height || 'auto', overflow: 'auto', WebkitOverflowScrolling: 'touch' }, this.props.style);
        var hasChildren = this.props.hasChildren ||
            !!(this.props.children &&
                this.props.children instanceof Array &&
                this.props.children.length);
        // because heighted infiniteScroll visualy breaks
        // on drag down as overflow becomes visible
        var outerDivStyle = this.props.pullDownToRefresh && this.props.height
            ? { overflow: 'auto' }
            : {};
        return (react.createElement("div", { style: outerDivStyle, className: "infinite-scroll-component__outerdiv" },
            react.createElement("div", { className: "infinite-scroll-component " + (this.props.className || ''), ref: function (infScroll) { return (_this._infScroll = infScroll); }, style: style },
                this.props.pullDownToRefresh && (react.createElement("div", { style: { position: 'relative' }, ref: function (pullDown) { return (_this._pullDown = pullDown); } },
                    react.createElement("div", { style: {
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            top: -1 * this.maxPullDownDistance,
                        } }, this.state.pullToRefreshThresholdBreached
                        ? this.props.releaseToRefreshContent
                        : this.props.pullDownToRefreshContent))),
                this.props.children,
                !this.state.showLoader &&
                    !hasChildren &&
                    this.props.hasMore &&
                    this.props.loader,
                this.state.showLoader && this.props.hasMore && this.props.loader,
                !this.props.hasMore && this.props.endMessage)));
    };
    return InfiniteScroll;
}(react.Component));

/* harmony default export */ var index_es = (InfiniteScroll);
//# sourceMappingURL=index.es.js.map

// EXTERNAL MODULE: ./types/const.ts
var types_const = __webpack_require__(2409);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var index_esm = __webpack_require__(1649);
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__(4204);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
;// CONCATENATED MODULE: ./src/components/ApartmentList/ClearFiltersPrompt/ClearFiltersPrompt.styled.ts

const Prompt = styled_components_browser_esm/* default */.ZP.h5.withConfig({
    displayName: "ClearFiltersPromptstyled__Prompt",
    componentId: "sc-1w003kg-0"
}).withConfig({
    componentId: "sc-5399aab3-0"
}).withConfig({
    componentId: "sc-85e74755-0"
})({
    "fontSize": "16px",
    "fontWeight": "700",
    "textTransform": "capitalize",
    "lineHeight": "120%"
});
const Wrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ClearFiltersPromptstyled__Wrapper",
    componentId: "sc-1w003kg-1"
}).withConfig({
    componentId: "sc-5399aab3-1"
}).withConfig({
    componentId: "sc-85e74755-1"
})({
    "display": "flex",
    "width": "90%",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "1rem",
    "borderRadius": "0.75rem",
    "backgroundColor": "var(--blue-700)",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "1.5rem",
    "paddingBottom": "1.5rem",
    "@media (min-width: 768px)": {
        "backgroundColor": "transparent"
    }
});

// EXTERNAL MODULE: ./src/components/Filters/helpers.ts
var helpers = __webpack_require__(5004);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/ApartmentList/ClearFiltersPrompt/ClearFiltersPrompt.tsx








const ClearFiltersPrompt = ()=>{
    const router = (0,next_router.useRouter)();
    const showFavourites = (0,useGlobalStore/* useStore */.o)((s)=>s.showFavourites);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const { t } = (0,es/* useTranslation */.$G)();
    const handleClearFilters = ()=>{
        (0,helpers/* clearFilters */.K5)(router);
    };
    const handleSeeOffers = ()=>{
        dispatch({
            type: globalReducer/* StoreActions */.A.SET_SHOW_FAVOURITES,
            payload: false
        });
    };
    if (showFavourites) {
        return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Prompt, {
                    children: t("no favourite apartments")
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                    onClick: handleSeeOffers,
                    variant: Button/* ButtonVariant */.W.PRIMARY_G,
                    children: t("common.show")
                })
            ]
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Prompt, {
                children: t("no items match your search")
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                onClick: handleClearFilters,
                variant: Button/* ButtonVariant */.W.PRIMARY_G,
                children: t("clear all filters")
            })
        ]
    });
};
/* harmony default export */ var ClearFiltersPrompt_ClearFiltersPrompt = (ClearFiltersPrompt);

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(2729);
// EXTERNAL MODULE: ./src/components/ResultsAndSorting/ResultCount/ResultCount.tsx + 1 modules
var ResultCount = __webpack_require__(3253);
// EXTERNAL MODULE: ./types/enums.ts
var enums = __webpack_require__(806);
;// CONCATENATED MODULE: ./src/components/ResultsAndSorting/ResultsAndSortingDesktop.styled.ts

const ResultsAndSortingDesktop_styled_Wrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ResultsAndSortingDesktopstyled__Wrapper",
    componentId: "sc-38o92y-0"
}).withConfig({
    componentId: "sc-92fb6ea2-0"
}).withConfig({
    componentId: "sc-1de8b36a-0"
})({
    "display": "flex",
    "justifyContent": "space-between",
    "paddingBottom": "0.5rem",
    "paddingTop": "0.75rem"
});

;// CONCATENATED MODULE: ./src/components/ResultsAndSorting/ResultsAndSortingDesktop.tsx

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








const ResultsAndSortingDesktop = (param)=>{
    let { totalApartmentCount } = param;
    const { t } = (0,es/* useTranslation */.$G)();
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const deviceType = (0,useGlobalStore/* useStore */.o)((s)=>s.deviceType);
    const comparisonList = (0,useGlobalStore/* useStore */.o)((s)=>s.comparisonList);
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: deviceType !== enums/* DeviceType */.Yi.MOBILE && /*#__PURE__*/ (0,jsx_runtime.jsxs)(ResultsAndSortingDesktop_styled_Wrapper, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultCount/* default */.Z, {
                    count: totalApartmentCount
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledButton, {
                    onClick: ()=>comparisonList.length > 0 && dispatch({
                            type: globalReducer/* StoreActions */.A.SET_IS_COMPARISON_OPEN,
                            payload: true
                        }),
                    $_css: [
                        {
                            "display": "flex",
                            "alignItems": "center",
                            "justifyContent": "space-between",
                            "gap": "0.5rem",
                            "transitionProperty": "all",
                            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                            "transitionDuration": "150ms",
                            "&:hover": {
                                "opacity": "0.7"
                            },
                            "&:active": {
                                "--tw-scale-x": ".95",
                                "--tw-scale-y": ".95",
                                "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
                            }
                        },
                        !(comparisonList.length > 0) && {
                            "pointerEvents": "none",
                            "opacity": "0.5"
                        }
                    ],
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                            width: 16,
                            height: 16,
                            viewBox: "0 0 16 17",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("g", {
                                    clipPath: "url(#clip0_7599_9661)",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                        d: "M2.14404 13.1433C2.36843 14.0622 3.22359 14.7965 4.2417 14.7967C5.25586 14.7967 6.11419 14.0664 6.42139 13.1433H2.14404ZM10.4819 13.1433C10.7063 14.0621 11.5615 14.7964 12.5796 14.7967C13.5938 14.7967 14.4531 14.0665 14.7603 13.1433H10.4819ZM10.4917 12.0174H14.5786L13.0601 6.65799H12.0981L10.4917 12.0174ZM2.24365 12.0174H6.24072L4.72217 6.65799H3.76221L2.24365 12.0174ZM15.9224 12.6785C15.8269 14.4897 14.3966 15.92 12.5854 16.0154H12.5796C10.7636 16.0152 9.33326 14.5813 9.23779 12.7713V12.4734L9.2417 12.4588L10.9634 6.65799H5.94971L7.58057 12.368L7.58447 12.3806V12.6785C7.48906 14.4887 6.05799 15.9226 4.2417 15.9226C2.42726 15.9224 0.995469 14.4903 0.899902 12.7713L0.898926 12.7654H0.899902V12.4734L0.903809 12.4597L2.75635 5.97537L2.75732 5.97049C2.80902 5.81559 2.88965 5.7039 2.99072 5.63162C3.09175 5.55946 3.20646 5.53201 3.31592 5.53201H7.39111C7.41963 5.20367 7.58732 4.94254 7.84814 4.82498V1.46268C7.84822 1.30114 7.90215 1.1587 8.00439 1.05643C8.10665 0.954173 8.24912 0.90027 8.41064 0.900177C8.57234 0.900177 8.71553 0.954085 8.81787 1.05643C8.92007 1.15869 8.97405 1.30118 8.97412 1.46268V4.82498C9.23488 4.94257 9.40264 5.20372 9.43115 5.53201H13.5063C13.7239 5.53201 13.9471 5.64129 14.0591 5.86502L14.063 5.87381L14.0659 5.8826L15.9185 12.368L15.9224 12.3806V12.6785Z",
                                        fill: "white",
                                        stroke: "white",
                                        strokeWidth: "0.2"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)("defs", {
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)("clipPath", {
                                        id: "clip0_7599_9661",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("rect", {
                                            width: "16",
                                            height: "16",
                                            fill: "white",
                                            transform: "translate(0 0.5)"
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP, {
                            children: t("comparison")
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP2, {
                            children: comparisonList.length
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ var ResultsAndSorting_ResultsAndSortingDesktop = (ResultsAndSortingDesktop);
var _StyledButton = (0,styled_components_browser_esm/* default */.ZP)("button").withConfig({
    componentId: "sc-4b7702a9-0"
}).withConfig({
    componentId: "sc-7d192cf8-0"
})(_templateObject(), (p)=>p.$_css);
var _StyledP = (0,styled_components_browser_esm/* default */.ZP)("p")({
    "fontSize": "1rem",
    "fontWeight": "500"
});
var _StyledP2 = (0,styled_components_browser_esm/* default */.ZP)("p").withConfig({
    displayName: "ResultsAndSortingDesktop___StyledP2",
    componentId: "sc-1xoh7c8-0"
})({
    "borderRadius": "90px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem",
    "fontSize": "12px",
    "fontWeight": "700",
    "--tw-text-opacity": "1",
    "color": "rgb(55 55 55 / var(--tw-text-opacity, 1))"
});

;// CONCATENATED MODULE: ./src/components/ApartmentList/DraggableListContainer/DraggableListContainer.styled.ts

function DraggableListContainer_styled_templateObject() {
    const data = (0,_tagged_template_literal._)([
        "\n    width: 100%;\n    position: relative;\n    height: calc(100dvh - 64px);\n    transition: height 500ms ease-in-out;\n    @media (min-width: 768px) {\n      padding-top: 0px;\n      height: ",
        ";\n      transition: 300ms ease-out;\n    }\n  "
    ]);
    DraggableListContainer_styled_templateObject = function() {
        return data;
    };
    return data;
}


const Resizable = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "DraggableListContainerstyled__Resizable",
    componentId: "sc-1x192op-0"
}).withConfig({
    componentId: "sc-475cdce2-0"
}).withConfig({
    componentId: "sc-e308c21d-0"
})((param)=>{
    let { areFiltersOpen } = param;
    return [
        (0,styled_components_browser_esm/* css */.iv)(DraggableListContainer_styled_templateObject(), areFiltersOpen ? "calc(100vh - 622px - 5vh)" : "calc(100vh - 365px - 5vh)")
    ];
});
const DragHandle = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "DraggableListContainerstyled__DragHandle",
    componentId: "sc-1x192op-1"
}).withConfig({
    componentId: "sc-475cdce2-1"
}).withConfig({
    componentId: "sc-e308c21d-1"
})([
    "",
    " &::after{content:'';position:absolute;left:50%;top:50%;width:100px;height:4px;background-color:",
    ";transform:translate(-50%,-50%);border-radius:20px;}"
], {
    "position": "absolute",
    "left": "0px",
    "top": "0px",
    "zIndex": "50",
    "height": "2.5rem",
    "width": "100%",
    "cursor": "pointer",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(27 27 27 / var(--tw-bg-opacity, 1))",
    "@media (min-width: 768px)": {
        "display": "none"
    }
}, "rgba(255, 255, 255, 0.7)");

;// CONCATENATED MODULE: ./src/components/ApartmentList/DraggableListContainer/DraggableListContainer.tsx




const DraggableContainer = (param)=>{
    let { children } = param;
    const filtersOpen = (0,useGlobalStore/* useStore */.o)((s)=>s.filtersOpen);
    const dragContainerRef = (0,react.useRef)(null);
    const dragHandleRef = (0,react.useRef)(null);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Resizable, {
        areFiltersOpen: filtersOpen,
        ref: dragContainerRef,
        children: [
             false && /*#__PURE__*/ 0,
            children
        ]
    });
};
/* harmony default export */ var DraggableListContainer = (DraggableContainer);

// EXTERNAL MODULE: ./src/styles/vars.ts
var vars = __webpack_require__(6059);
;// CONCATENATED MODULE: ./src/components/ApartmentList/ApartmentList.styled.ts

function ApartmentList_styled_templateObject() {
    const data = (0,_tagged_template_literal._)([
        "\n    @media (max-width: 768px) {\n      background-color: var(--bg-brand-800);\n      height: ",
        ";\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      overflow-y: auto;\n      overflow-x: hidden;\n    }\n  "
    ]);
    ApartmentList_styled_templateObject = function() {
        return data;
    };
    return data;
}



const Container = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListstyled__Container",
    componentId: "sc-13r0d6n-0"
}).withConfig({
    componentId: "sc-ebee93aa-0"
}).withConfig({
    componentId: "sc-b21eec67-0"
})({
    "width": "100%",
    "@media (min-width: 768px)": {
        "position": "relative",
        "width": "440px",
        "borderWidth": "1px",
        "borderColor": "var(--base-transparent-white-20)",
        "backgroundColor": "var(--base-transparent-blur-30)",
        "paddingLeft": "1rem",
        "paddingRight": "1rem",
        "--tw-backdrop-blur": "blur(12px)",
        "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
        "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"
    }
});
const ApartmentList_styled_Wrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListstyled__Wrapper",
    componentId: "sc-13r0d6n-1"
}).withConfig({
    componentId: "sc-ebee93aa-1"
}).withConfig({
    componentId: "sc-b21eec67-1"
})({
    "position": "relative",
    "height": "max-content",
    "@media (min-width: 1024px)": {
        "width": "100%"
    }
});
const ApartmentListContainer = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListstyled__ApartmentListContainer",
    componentId: "sc-13r0d6n-2"
}).withConfig({
    componentId: "sc-ebee93aa-2"
}).withConfig({
    componentId: "sc-b21eec67-2"
})(()=>[
        {
            "height": "100%",
            "overflowY": "scroll",
            "backgroundColor": "var(--blue-900)",
            "padding": "0.75rem",
            "@media (min-width: 768px)": {
                "backgroundColor": "transparent",
                "paddingLeft": "0px",
                "paddingRight": "2px"
            }
        }
    ]);
const ClearFiltersWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListstyled__ClearFiltersWrapper",
    componentId: "sc-13r0d6n-3"
}).withConfig({
    componentId: "sc-ebee93aa-3"
}).withConfig({
    componentId: "sc-b21eec67-3"
})(()=>[
        (0,styled_components_browser_esm/* css */.iv)(ApartmentList_styled_templateObject(), vars/* bottomPositionOfMobileThreeJSCanvas */.ni)
    ]);
const ButtonScrollTop = styled_components_browser_esm/* default */.ZP.button.withConfig({
    displayName: "ApartmentListstyled__ButtonScrollTop",
    componentId: "sc-13r0d6n-4"
}).withConfig({
    componentId: "sc-ebee93aa-4"
}).withConfig({
    componentId: "sc-b21eec67-4"
})((param)=>{
    let { isVisible } = param;
    return [
        {
            "pointerEvents": "none",
            "opacity": "0",
            "transitionProperty": "opacity",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "300ms"
        },
        {
            "position": "absolute",
            "right": "1.5rem",
            "display": "flex",
            "alignItems": "center",
            "justifyContent": "center",
            "@media (min-width: 768px)": {
                "right": "0.75rem"
            }
        },
        isVisible && {
            "pointerEvents": "auto",
            "opacity": "1"
        }
    ];
});

// EXTERNAL MODULE: ./src/utils/helpers/crmHelper.ts
var crmHelper = __webpack_require__(2424);
;// CONCATENATED MODULE: ./src/components/ApartmentList/ApartmentList.tsx
















const ApartmentList = (param)=>{
    let { apartmentsData, totalApartmentCount, crmData } = param;
    const showFavourites = (0,useGlobalStore/* useStore */.o)((s)=>s.showFavourites);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const [apartments, setApartments] = (0,react.useState)(apartmentsData);
    const [hasMore, setHasMore] = (0,react.useState)(true);
    const [nextPageFetch, setNextPageFetch] = (0,react.useState)(2);
    const [showScrollTopButton, setShowScrollTopButton] = (0,react.useState)(false);
    const [isImagePreviewActive, setIsImagePreviewActive] = (0,react.useState)(false);
    const [imagePreviewUrl, setImagePreviewUrl] = (0,react.useState)("");
    const containerRef = (0,react.useRef)(null);
    //arrow up button visibility control
    (0,react.useEffect)(()=>{
        const checkScroll = ()=>{
            const isScrolled = containerRef.current ? containerRef.current.scrollTop > 50 : false;
            setShowScrollTopButton(isScrolled);
        };
        const scrollContainer = containerRef.current;
        scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.addEventListener("scroll", checkScroll);
        return ()=>{
            scrollContainer === null || scrollContainer === void 0 ? void 0 : scrollContainer.removeEventListener("scroll", checkScroll);
        };
    }, []);
    //Resets the component state when new apartment data is received.
    //This happens when query params change and fresh data is fetched in getServerSideProps
    (0,react.useEffect)(()=>{
        var _containerRef_current;
        (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.scrollTo({
            top: 0
        });
        setApartments(apartmentsData);
        setNextPageFetch(2);
        if (apartmentsData.length < types_const/* PAGINATION_PAGE_SIZE */.h0) {
            setHasMore(false);
        } else {
            setHasMore(true);
            if (window.innerHeight > 1200) {
                fetchMoreData();
            }
        }
    }, [
        apartmentsData
    ]);
    const fetchMoreData = async ()=>{
        const queryParams = new URLSearchParams({
            ...router.query,
            page: String(nextPageFetch),
            pageSize: String(types_const/* PAGINATION_PAGE_SIZE */.h0)
        }).toString();
        try {
            const response = await fetch("/api/apartments?".concat(queryParams));
            const newApartments = await response.json();
            if (newApartments.apartments.length === 0) {
                setHasMore(false);
            } else {
                const newMergedApartments = (0,crmHelper/* mergeApartments */.r)(newApartments.apartments, crmData);
                setApartments((prev)=>[
                        ...prev,
                        ...newMergedApartments
                    ]);
                setNextPageFetch((prevPage)=>prevPage + 1);
            }
        } catch (error) {
            console.error("Failed to fetch more apartments:", error);
            setHasMore(false);
        }
    };
    const scrollToTop = ()=>{
        var _containerRef_current;
        (_containerRef_current = containerRef.current) === null || _containerRef_current === void 0 ? void 0 : _containerRef_current.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    (0,react.useEffect)(()=>{
        if (showFavourites) {
            const storedFavourites = localStorage.getItem("favouriteApartments");
            if (!storedFavourites) {
                setApartments([]);
                setHasMore(false);
                return;
            }
            const parsed = JSON.parse(storedFavourites);
            const mappedFavourites = parsed.filter((fav)=>{
                return fav.Floor[0].Building.Project == router.query.project;
            });
            setApartments(mappedFavourites);
            setHasMore(false);
        } else {
            setApartments(apartmentsData);
            setHasMore(true);
            setNextPageFetch(2);
        }
    }, [
        showFavourites,
        apartmentsData
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(ResultsAndSorting_ResultsAndSortingDesktop, {
                totalApartmentCount: totalApartmentCount
            }),
            apartments.length > 0 ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(ApartmentList_styled_Wrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(DraggableListContainer, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentListContainer, {
                            ref: containerRef,
                            id: "apartmentListContainer",
                            onScroll: ()=>dispatch({
                                    type: globalReducer/* StoreActions */.A.SET_FILTERS_OPEN,
                                    payload: false
                                }),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledInfiniteScroll, {
                                dataLength: apartments.length,
                                next: fetchMoreData,
                                hasMore: hasMore,
                                loader: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: "Loading..."
                                }),
                                endMessage: /*#__PURE__*/ (0,jsx_runtime.jsx)("p", {
                                    children: t("no more elements")
                                }),
                                scrollableTarget: "apartmentListContainer",
                                children: apartments.map((apartment, index)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentListItem/* default */.Z, {
                                            apartmentData: apartment
                                        })
                                    }, index))
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledStyledButtonScrollTop, {
                        isVisible: showScrollTopButton,
                        onClick: scrollToTop,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledIoIosArrowUp, {}),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledSpan, {
                                children: t("back to top")
                            })
                        ]
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(ClearFiltersWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(ClearFiltersPrompt_ClearFiltersPrompt, {})
            })
        ]
    });
};
/* harmony default export */ var ApartmentList_ApartmentList = (ApartmentList);
var _StyledInfiniteScroll = (0,styled_components_browser_esm/* default */.ZP)(index_es).withConfig({
    componentId: "sc-38f2093f-0"
}).withConfig({
    componentId: "sc-ffb81b3f-0"
})({
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "0.25rem"
});
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "width": "calc(50% - 2px)"
});
var _StyledStyledButtonScrollTop = (0,styled_components_browser_esm/* default */.ZP)(ButtonScrollTop)({
    "marginTop": "10px"
});
var _StyledIoIosArrowUp = (0,styled_components_browser_esm/* default */.ZP)(index_esm/* IoIosArrowUp */.Vmf)({
    "marginRight": "0.5rem",
    "--tw-text-opacity": "1",
    "color": "rgb(255 255 255 / var(--tw-text-opacity, 1))"
});
var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    displayName: "ApartmentList___StyledSpan",
    componentId: "sc-16roaqp-0"
})({
    "fontSize": "12px",
    "textTransform": "capitalize"
});


/***/ }),

/***/ 5070:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ApartmentListFilters_ApartmentListFilters; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./src/components/Filters/Filters.tsx + 15 modules
var Filters = __webpack_require__(617);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 194 modules
var motion = __webpack_require__(3495);
// EXTERNAL MODULE: ./src/components/Filters/helpers.ts
var helpers = __webpack_require__(5004);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./public/icons/chevron_up_large.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgChevronUpLarge = function SvgChevronUpLarge(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 12,
    height: 12,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    stroke: "#fff",
    d: "M9.6 8.4 6 4.8 2.4 8.4"
  })));
};
/* harmony default export */ var chevron_up_large = (SvgChevronUpLarge);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
// EXTERNAL MODULE: ./types/enums.ts
var enums = __webpack_require__(806);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./src/components/Badge/Badge.tsx
var Badge = __webpack_require__(9382);
// EXTERNAL MODULE: ./src/styles/mixins.ts
var mixins = __webpack_require__(3654);
;// CONCATENATED MODULE: ./src/components/ApartmentListFilters/ApartmentListFilters.styled.ts


const Container = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListFiltersstyled__Container",
    componentId: "sc-1q836is-0"
}).withConfig({
    componentId: "sc-445d1501-0"
}).withConfig({
    componentId: "sc-7d05aba5-0"
})({
    "pointerEvents": "auto",
    "width": "440px",
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
});
const FiltersContainer = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListFiltersstyled__FiltersContainer",
    componentId: "sc-1q836is-1"
}).withConfig({
    componentId: "sc-445d1501-1"
}).withConfig({
    componentId: "sc-7d05aba5-1"
})({
    "position": "relative",
    "width": "440px",
    "borderWidth": "1px",
    "borderColor": "var(--base-transparent-white-20)",
    "backgroundColor": "var(--base-transparent-blur-30)",
    "padding": "1rem",
    "--tw-backdrop-blur": "blur(12px)",
    "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
    "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"
});
const ButtonsWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListFiltersstyled__ButtonsWrapper",
    componentId: "sc-1q836is-2"
}).withConfig({
    componentId: "sc-445d1501-2"
}).withConfig({
    componentId: "sc-7d05aba5-2"
})({
    "display": "flex",
    "justifyContent": "space-between"
});
const ButtonsDivider = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ApartmentListFiltersstyled__ButtonsDivider",
    componentId: "sc-1q836is-3"
}).withConfig({
    componentId: "sc-445d1501-3"
}).withConfig({
    componentId: "sc-7d05aba5-3"
})({
    "position": "absolute",
    "left": "0px",
    "top": "54px",
    "width": "100%",
    "borderBottomWidth": "1px",
    "borderColor": "rgba(255, 255, 255, 0.20)"
});
const Toggle = styled_components_browser_esm/* default */.ZP.button.withConfig({
    displayName: "ApartmentListFiltersstyled__Toggle",
    componentId: "sc-1q836is-4"
}).withConfig({
    componentId: "sc-445d1501-4"
}).withConfig({
    componentId: "sc-7d05aba5-4"
})([
    "",
    ""
], {
    "display": "flex",
    "alignItems": "center",
    "gap": "0.25rem",
    "fontWeight": "500",
    "textTransform": "capitalize"
});
const ClearButton = styled_components_browser_esm/* default */.ZP.button.withConfig({
    displayName: "ApartmentListFiltersstyled__ClearButton",
    componentId: "sc-1q836is-5"
}).withConfig({
    componentId: "sc-445d1501-5"
}).withConfig({
    componentId: "sc-7d05aba5-5"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading6), {
    "textTransform": "capitalize",
    "--tw-text-opacity": "1",
    "color": "rgb(234 234 234 / var(--tw-text-opacity, 1))"
});
const IconWrapper = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "ApartmentListFiltersstyled__IconWrapper",
    componentId: "sc-1q836is-6"
}).withConfig({
    componentId: "sc-445d1501-6"
}).withConfig({
    componentId: "sc-7d05aba5-6"
})((param)=>{
    let { rotated } = param;
    return [
        {
            "transitionDuration": "200ms"
        },
        rotated ? {
            "--tw-rotate": "0deg",
            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
        } : {
            "--tw-rotate": "180deg",
            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
        }
    ];
});

// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/ApartmentListFilters/ApartmentListFilters.tsx














const ApartmentListFilters = (param)=>{
    let { allBuildingsAndZones } = param;
    const filtersOpen = (0,useGlobalStore/* useStore */.o)((s)=>s.filtersOpen);
    const deviceType = (0,useGlobalStore/* useStore */.o)((s)=>s.deviceType);
    const isMobile = deviceType === enums/* DeviceType */.Yi.MOBILE;
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const [activeFiltersCount, setActiveFiltersCount] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        const count = (0,helpers/* getActiveFiltersCount */.jt)(router.query);
        setActiveFiltersCount(count);
    }, [
        router.query
    ]);
    const toggleFiltersOpen = ()=>{
        dispatch({
            type: globalReducer/* StoreActions */.A.SET_FILTERS_OPEN,
            payload: !filtersOpen
        });
        dispatch({
            type: globalReducer/* StoreActions */.A.SET_SHOW_FAVOURITES,
            payload: false
        });
    };
    const handleClearFilters = (e)=>{
        if (activeFiltersCount > 0) {
            e.stopPropagation();
            (0,helpers/* clearFilters */.K5)(router);
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
        children: !isMobile && /*#__PURE__*/ (0,jsx_runtime.jsxs)(FiltersContainer, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(ButtonsWrapper, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(Toggle, {
                            onClick: toggleFiltersOpen,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledSpan, {
                                    children: [
                                        " ",
                                        t("filters"),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Badge/* Badge */.C, {
                                            count: activeFiltersCount,
                                            clearResource: handleClearFilters
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsx)(IconWrapper, {
                                    rotated: filtersOpen,
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(chevron_up_large, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledSpan2, {
                            onClick: handleClearFilters,
                            children: t("filtering.clearFilters")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsx)(motion/* motion */.E.div, {
                    initial: {
                        height: filtersOpen ? "auto" : 0
                    },
                    animate: {
                        height: filtersOpen ? "auto" : 0
                    },
                    transition: {
                        duration: 0.3
                    },
                    style: {
                        overflow: "hidden"
                    },
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Filters/* default */.ZP, {
                        allBuildingsAndZones: allBuildingsAndZones
                    })
                })
            ]
        })
    });
};
/* harmony default export */ var ApartmentListFilters_ApartmentListFilters = (ApartmentListFilters);
var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    componentId: "sc-1c4f7170-0"
}).withConfig({
    componentId: "sc-7b650ac3-0"
})({
    "position": "relative",
    "marginRight": "1.75rem",
    "fontSize": "20px",
    "fontWeight": "500",
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "marginLeft": "1.75rem"
    }
});
var _StyledSpan2 = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    displayName: "ApartmentListFilters___StyledSpan2",
    componentId: "sc-11y43so-0"
})({
    "display": "flex",
    "cursor": "pointer",
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": "14px",
    "fontWeight": "500",
    "textTransform": "uppercase",
    "color": "var(--base-white-white)"
});


/***/ }),

/***/ 1747:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1686);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1526);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3495);



const BottomSheet = (param)=>{
    let { isOpen, onClose, children } = param;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(framer_motion__WEBPACK_IMPORTED_MODULE_1__/* .AnimatePresence */ .M, {
        children: isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledMotionDiv, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 0.8
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_StyledMotionDiv2, {
                    initial: {
                        y: "100%"
                    },
                    animate: {
                        y: 0
                    },
                    exit: {
                        y: "100%"
                    },
                    transition: {
                        type: "linear",
                        stiffness: 120,
                        damping: 15
                    },
                    drag: "y",
                    dragConstraints: {
                        top: 0,
                        bottom: 200
                    },
                    dragElastic: 0,
                    onDragEnd: (_, info)=>{
                        if (info.point.y > window.innerHeight - 300) onClose();
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledDiv, {}),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledDiv2, {
                            children: children
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ __webpack_exports__.Z = (BottomSheet);
var _StyledMotionDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div).withConfig({
    componentId: "sc-189bfb4a-0"
}).withConfig({
    componentId: "sc-8206734f-0"
})({
    "position": "fixed",
    "inset": "0px",
    "zIndex": "120",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(35 29 13 / var(--tw-bg-opacity, 1))"
});
var _StyledMotionDiv2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div)({
    "position": "fixed",
    "bottom": "0px",
    "left": "0px",
    "zIndex": "130",
    "width": "100%",
    "borderTopLeftRadius": "1rem",
    "borderTopRightRadius": "1rem",
    "backgroundColor": "var(--blue-700)",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "1.5rem",
    "paddingBottom": "1.5rem",
    "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
});
var _StyledDiv = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)("div")({
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "0.5rem",
    "marginBottom": "0.5rem",
    "height": "0.25rem",
    "width": "3rem",
    "borderRadius": "9999px",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(156 163 175 / var(--tw-bg-opacity, 1))"
});
var _StyledDiv2 = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP)("div").withConfig({
    displayName: "BottomSheet___StyledDiv2",
    componentId: "sc-130swfe-0"
})({
    "maxHeight": "70vh",
    "overflowY": "auto"
});


/***/ }),

/***/ 5853:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: function() { return /* binding */ MobileApartmentListSorting; }
});

// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(2729);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
;// CONCATENATED MODULE: ./src/components/ResultsAndSorting/ApartmentListSorting/sortCategories.json
var sortCategories_namespaceObject = JSON.parse('[{"label":"Price","options":[{"id":"price_asc","name":"price","fullName":"Low to High"},{"id":"price_desc","name":"price","fullName":"High to Low"}]},{"label":"Size","options":[{"id":"area_asc","name":"size","fullName":"Small to Large"},{"id":"area_desc","name":"size","fullName":"Large to Small"}]},{"label":"Number","options":[{"id":"number_asc","name":"number","fullName":"0-9"},{"id":"number_desc","name":"number","fullName":"9-0"}]}]');
// EXTERNAL MODULE: ./src/utils/helpers/helpers.ts
var helpers = __webpack_require__(4919);
// EXTERNAL MODULE: ./public/icons/check.svg
var check = __webpack_require__(1028);
;// CONCATENATED MODULE: ./src/components/BottomSheet/BottomSheetInserts/MobileApartmentListSorting.tsx

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








const MobileApartmentListSorting = (param)=>{
    let { onClose } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const { query } = router;
    const defaultSortOption = sortCategories_namespaceObject.find((category)=>category.label === "Number").options[0];
    const [selectedSort, setSelectedSort] = (0,react.useState)(()=>{
        const initialSort = query.sort;
        return sortCategories_namespaceObject.flatMap((category)=>category.options).find((option)=>option.id === initialSort) || defaultSortOption;
    });
    const handleSortChange = (option)=>{
        setSelectedSort(option);
        (0,helpers/* updateQueryParams */.Vb)(router, {
            sort: option.id
        });
        onClose();
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv, {
        children: sortCategories_namespaceObject.map((category)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv2, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledP, {
                        children: t(category.label.toLowerCase())
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
                        children: category.options.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledButton, {
                                onClick: ()=>handleSortChange(option),
                                $_css: [
                                    {
                                        "display": "flex",
                                        "width": "100%",
                                        "alignItems": "center",
                                        "justifyContent": "space-between",
                                        "borderRadius": "9999px",
                                        "paddingLeft": "1rem",
                                        "paddingRight": "1rem",
                                        "paddingTop": "0.5rem",
                                        "paddingBottom": "0.5rem",
                                        "fontSize": "14px",
                                        "textTransform": "capitalize",
                                        "color": "var(--base-white-200)",
                                        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                                        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                                        "transitionDuration": "150ms",
                                        "&:hover": {
                                            "backgroundColor": "var(--blue-700)"
                                        }
                                    },
                                    option.id === selectedSort.id && {
                                        "backgroundColor": "var(--base-transparent-white-20)"
                                    }
                                ],
                                children: [
                                    t(option.fullName.toLowerCase()),
                                    option.id === selectedSort.id && /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledSpan, {
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* default */.Z, {})
                                    })
                                ]
                            }, option.id))
                    })
                ]
            }, category.label))
    });
};
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-1f0eed0a-0"
}).withConfig({
    componentId: "sc-faad8588-0"
})({
    "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-y-reverse": "0",
        "marginTop": "calc(1rem * calc(1 - var(--tw-space-y-reverse)))",
        "marginBottom": "calc(1rem * var(--tw-space-y-reverse))"
    }
});
var _StyledDiv2 = (0,styled_components_browser_esm/* default */.ZP)("div")({
    "display": "flex",
    "flexDirection": "column",
    "gap": "0.25rem"
});
var _StyledP = (0,styled_components_browser_esm/* default */.ZP)("p")({
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "fontSize": "14px",
    "textTransform": "capitalize",
    "color": "var(--blue-600)"
});
var _StyledButton = (0,styled_components_browser_esm/* default */.ZP)("button")(_templateObject(), (p)=>p.$_css);
var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    displayName: "MobileApartmentListSorting___StyledSpan",
    componentId: "sc-1cghznu-0"
})({
    "marginLeft": "0.5rem"
});


/***/ }),

/***/ 4496:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  W: function() { return /* binding */ FilterTags; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./src/components/Icons/Icons.tsx
var Icons = __webpack_require__(5672);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./public/icons/closeg.svg
var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }

var SvgCloseg = function SvgCloseg(props) {
  return /*#__PURE__*/react.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 10,
    height: 10,
    fill: "none"
  }, props), _path || (_path = /*#__PURE__*/react.createElement("path", {
    fill: "#099",
    d: "m1.267 9.667-.934-.934L4.067 5 .333 1.267l.934-.934L5 4.067 8.733.333l.934.934L5.933 5l3.734 3.733-.934.934L5 5.933z"
  })));
};
/* harmony default export */ var closeg = (SvgCloseg);
// EXTERNAL MODULE: ./src/utils/helpers/helpers.ts
var helpers = __webpack_require__(4919);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
;// CONCATENATED MODULE: ./src/components/FilterTags/FilterTags.tsx







const FilterTags = ()=>{
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const isRTL = document.documentElement.dir === "rtl";
    const SHOULD_SHOW_NUMERIC_VALUE = [
        "floor"
    ];
    const { query } = router;
    const ignoredFilters = [
        "project",
        "zone",
        "side",
        "building"
    ];
    // Extract minPrice & maxPrice
    const minPrice = query.minPrice;
    const maxPrice = query.maxPrice;
    // Extract minArea & maxArea
    const minArea = query.minArea;
    const maxArea = query.maxArea;
    // Get active filters excluding ignored ones & grouped filters (price/area)
    const activeFilters = Object.entries(query).filter((param)=>{
        let [key, value] = param;
        return typeof value === "string" && !ignoredFilters.includes(key) && key !== "minPrice" && key !== "maxPrice" && key !== "minArea" && key !== "maxArea";
    });
    // Remove a filter and update the route
    const removeFilter = (filterKey)=>{
        const newQuery = {
            ...query
        };
        if (filterKey === "price") {
            delete newQuery.minPrice;
            delete newQuery.maxPrice;
        } else if (filterKey === "area") {
            delete newQuery.minArea;
            delete newQuery.maxArea;
        } else {
            delete newQuery[filterKey];
        }
        const queryString = new URLSearchParams(newQuery).toString();
        router.push("".concat(router.pathname, "?").concat(queryString), undefined, {
            scroll: false
        });
    };
    const priceDisplay = (minPrice, maxPrice)=>{
        if (isRTL) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                dir: "ltr",
                children: [
                    minPrice ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Riyal */.QI, {}),
                            minPrice
                        ]
                    }) : "",
                    " ",
                    minPrice && maxPrice ? "-" : "",
                    maxPrice ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Riyal */.QI, {}),
                            maxPrice
                        ]
                    }) : "",
                    " ",
                    ":",
                    t("price")
                ]
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    t("price"),
                    ":",
                    " ",
                    minPrice ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Riyal */.QI, {}),
                            minPrice
                        ]
                    }) : "",
                    " ",
                    minPrice && maxPrice ? "-" : "",
                    " ",
                    maxPrice ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* Riyal */.QI, {}),
                            maxPrice
                        ]
                    }) : "",
                    " "
                ]
            });
        }
    };
    const areaDisplay = (minArea, maxArea)=>{
        if (isRTL) {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                dir: "ltr",
                children: [
                    minArea ? "".concat(minArea, " m\xb2") : "",
                    " ",
                    minArea && maxArea ? "-" : "",
                    " ",
                    maxArea ? "".concat(maxArea, " m\xb2") : "",
                    ":",
                    t("filterTags.area")
                ]
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    t("filterTags.area"),
                    ": ",
                    minArea ? "".concat(minArea, " m\xb2") : "",
                    " ",
                    minArea && maxArea ? "-" : "",
                    " ",
                    maxArea ? "".concat(maxArea, " m\xb2") : ""
                ]
            });
        }
    };
    const otherFiltersDisplay = (key, value)=>{
        if ((0,helpers/* isNumeric */.kE)(value)) {
            if (SHOULD_SHOW_NUMERIC_VALUE.includes(key)) {
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                    children: [
                        t("filterTags.".concat(key)),
                        ": ",
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                            children: [
                                " ",
                                value
                            ]
                        })
                    ]
                });
            }
            return /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                children: t("filterTags.".concat(key))
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                children: [
                    t("filterTags.".concat(key)),
                    ":",
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                        children: [
                            " ",
                            t("filterTags.".concat(value)),
                            " "
                        ]
                    })
                ]
            });
        }
    };
    if (activeFilters.length === 0 && !minPrice && !maxPrice && !minArea && !maxArea) return null;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv, {
        children: [
            (minPrice || maxPrice) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledSpan, {
                children: [
                    priceDisplay(minPrice, maxPrice),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>removeFilter("price"),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(closeg, {})
                    })
                ]
            }),
            (minArea || maxArea) && /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledSpan2, {
                children: [
                    areaDisplay(minArea, maxArea),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                        onClick: ()=>removeFilter("area"),
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(closeg, {})
                    })
                ]
            }),
            activeFilters.length > 0 && activeFilters.map((param)=>/*#__PURE__*/ {
                let [key, value] = param;
                return (0,jsx_runtime.jsxs)(_StyledSpan3, {
                    children: [
                        otherFiltersDisplay(key, value),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>removeFilter(key),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(closeg, {})
                        })
                    ]
                }, key);
            })
        ]
    });
};
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-121e8dd4-0"
}).withConfig({
    componentId: "sc-f7970a7-0"
})({
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "0.5rem",
    "padding": "1rem",
    "paddingBottom": "0px"
});
var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span")({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "0.5rem",
    "borderRadius": "9999px",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgb(2 83 79 / var(--tw-border-opacity, 1))",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "6px",
    "paddingBottom": "6px",
    "fontSize": "14px"
});
var _StyledSpan2 = (0,styled_components_browser_esm/* default */.ZP)("span")({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "0.5rem",
    "borderRadius": "9999px",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgb(2 83 79 / var(--tw-border-opacity, 1))",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "6px",
    "paddingBottom": "6px",
    "fontSize": "14px"
});
var _StyledSpan3 = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    displayName: "FilterTags___StyledSpan3",
    componentId: "sc-1bz6mar-0"
})({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "0.5rem",
    "borderRadius": "9999px",
    "borderWidth": "1px",
    "--tw-border-opacity": "1",
    "borderColor": "rgb(2 83 79 / var(--tw-border-opacity, 1))",
    "paddingLeft": "0.75rem",
    "paddingRight": "0.75rem",
    "paddingTop": "6px",
    "paddingBottom": "6px",
    "fontSize": "14px"
});


/***/ }),

/***/ 3726:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ FilteringModal_FilteringModal; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./src/components/Filters/Filters.tsx + 15 modules
var Filters = __webpack_require__(617);
// EXTERNAL MODULE: ./src/components/Button/Button.tsx + 1 modules
var Button = __webpack_require__(4204);
// EXTERNAL MODULE: ./src/components/Filters/helpers.ts
var helpers = __webpack_require__(5004);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./src/styles/mixins.ts
var mixins = __webpack_require__(3654);
// EXTERNAL MODULE: ./node_modules/react-icons/io5/index.esm.js
var index_esm = __webpack_require__(155);
;// CONCATENATED MODULE: ./src/components/FilteringSortingMobile/FilteringModal/FilteringModal.styled.ts



const ModalOverlay = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "FilteringModalstyled__ModalOverlay",
    componentId: "sc-1wmdlp2-0"
}).withConfig({
    componentId: "sc-923bdfe6-0"
}).withConfig({
    componentId: "sc-3855b303-0"
})({
    "position": "fixed",
    "top": "0px",
    "zIndex": "101",
    "display": "flex",
    "height": "100dvh",
    "width": "100vw",
    "flexDirection": "column",
    "alignItems": "center",
    "backgroundColor": "var(--blue-900)",
    "@media (min-width: 768px)": {
        "display": "none"
    }
});
const ModalContainer = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "FilteringModalstyled__ModalContainer",
    componentId: "sc-1wmdlp2-1"
}).withConfig({
    componentId: "sc-923bdfe6-1"
}).withConfig({
    componentId: "sc-3855b303-1"
})({
    "display": "flex",
    "height": "100dvh",
    "width": "100%",
    "flexDirection": "column",
    "overflowY": "scroll",
    "paddingLeft": "2rem",
    "paddingRight": "2rem",
    "paddingTop": "2.75rem",
    "paddingBottom": "2.75rem"
});
const Header = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "FilteringModalstyled__Header",
    componentId: "sc-1wmdlp2-2"
}).withConfig({
    componentId: "sc-923bdfe6-2"
}).withConfig({
    componentId: "sc-3855b303-2"
})({
    "position": "relative",
    "display": "flex",
    "width": "100%",
    "justifyContent": "center",
    "borderBottomWidth": "1px",
    "borderColor": "rgba(255, 255, 255, 0.2)",
    "paddingBottom": "1.5rem"
});
const Title = styled_components_browser_esm/* default */.ZP.h2.withConfig({
    displayName: "FilteringModalstyled__Title",
    componentId: "sc-1wmdlp2-3"
}).withConfig({
    componentId: "sc-923bdfe6-3"
}).withConfig({
    componentId: "sc-3855b303-3"
})([
    "",
    ";position:relative;"
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading2));
const ArrowBack = (0,styled_components_browser_esm/* default */.ZP)(index_esm/* IoArrowBack */.O8Q).withConfig({
    displayName: "FilteringModalstyled__ArrowBack",
    componentId: "sc-1wmdlp2-4"
}).withConfig({
    componentId: "sc-923bdfe6-4"
}).withConfig({
    componentId: "sc-3855b303-4"
})({
    "position": "absolute",
    "bottom": "50%",
    "left": "0px",
    "height": "2rem",
    "width": "2rem",
    "cursor": "pointer"
});
const Footer = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "FilteringModalstyled__Footer",
    componentId: "sc-1wmdlp2-5"
}).withConfig({
    componentId: "sc-923bdfe6-5"
}).withConfig({
    componentId: "sc-3855b303-5"
})([
    "",
    " button{width:100%;justify-content:center;}"
], {
    "marginLeft": "auto",
    "marginRight": "auto",
    "marginTop": "0.75rem",
    "display": "flex",
    "width": "100%",
    "maxWidth": "24rem",
    "flexDirection": "column",
    "gap": "0.75rem"
});

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./public/icons/arrow_back.svg
var arrow_back = __webpack_require__(6630);
// EXTERNAL MODULE: ./public/icons/arrowlist.svg
var arrowlist = __webpack_require__(9878);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/components/BottomSheet/BottomSheet.tsx
var BottomSheet = __webpack_require__(1747);
// EXTERNAL MODULE: ./src/components/BottomSheet/BottomSheetInserts/MobileApartmentListSorting.tsx + 1 modules
var MobileApartmentListSorting = __webpack_require__(5853);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
// EXTERNAL MODULE: ./src/components/ApartmentListNav/ApartmentListNav.styled.ts
var ApartmentListNav_styled = __webpack_require__(4235);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/FilteringSortingMobile/FilteringModal/FilteringModal.tsx
















const FilteringModal = (param)=>{
    let { isOpen, onClose, allBuildingsAndZones, totalApartmentCount } = param;
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const [activeFiltersCount, setActiveFiltersCount] = (0,react.useState)(0);
    const [isSortingBottomSheetOpen, setIsSortingBottomSheetOpen] = (0,react.useState)(false);
    const closeSortingBottomSheet = ()=>{
        setIsSortingBottomSheetOpen(false);
    };
    (0,react.useEffect)(()=>{
        const count = (0,helpers/* getActiveFiltersCount */.jt)(router.query);
        setActiveFiltersCount(count);
    }, [
        router.query
    ]);
    if (!isOpen) return null;
    const handleClearFilters = ()=>{
        (0,helpers/* clearFilters */.K5)(router);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModalOverlay, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledButton, {
                        onClick: onClose,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledArrowBackIcon, {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(ApartmentListNav_styled/* NavTitle */.wo, {
                        children: t("filters")
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledDiv2, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("button", {
                            onClick: ()=>setIsSortingBottomSheetOpen(true),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(arrowlist/* default */.Z, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(ModalContainer, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Filters/* default */.ZP, {
                        allBuildingsAndZones: allBuildingsAndZones
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Footer, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(Button/* default */.Z, {
                                variant: Button/* ButtonVariant */.W.TEXT,
                                onClick: handleClearFilters,
                                children: t("filtering.clearFilters")
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Button/* default */.Z, {
                                onClick: ()=>{
                                    onClose();
                                    dispatch({
                                        type: globalReducer/* StoreActions */.A.SET_MOBILE_LIST_OPEN,
                                        payload: true
                                    });
                                },
                                variant: Button/* ButtonVariant */.W.PRIMARY_G,
                                disabled: totalApartmentCount === 0,
                                children: [
                                    t("common.show"),
                                    " ",
                                    totalApartmentCount,
                                    " ",
                                    t("common.offers")
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomSheet/* default */.Z, {
                isOpen: isSortingBottomSheetOpen,
                onClose: closeSortingBottomSheet,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileApartmentListSorting/* MobileApartmentListSorting */.l, {
                    onClose: closeSortingBottomSheet
                })
            })
        ]
    });
};
/* harmony default export */ var FilteringModal_FilteringModal = (FilteringModal);
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-c508ee62-0"
}).withConfig({
    componentId: "sc-b4041718-0"
})({
    "zIndex": "31",
    "display": "flex",
    "height": "64px",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "space-between",
    "backgroundColor": "var(--blue-700)",
    "padding": "0.5rem"
});
var _StyledButton = (0,styled_components_browser_esm/* default */.ZP)("button")({
    "flex": "1 1 0%"
});
var _StyledArrowBackIcon = (0,styled_components_browser_esm/* default */.ZP)(arrow_back/* default */.Z)({
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "--tw-rotate": "180deg",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledDiv2 = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    displayName: "FilteringModal___StyledDiv2",
    componentId: "sc-1b1ona-0"
})({
    "display": "flex",
    "flex": "1 1 0%",
    "alignItems": "center",
    "justifyContent": "flex-end",
    "gap": "1rem"
});


/***/ }),

/***/ 617:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ZP: function() { return /* binding */ Filters_Filters; }
});

// UNUSED EXPORTS: applyFilter, updateRouteForBuildingSelection

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/utils/helpers/helpers.ts
var helpers = __webpack_require__(4919);
// EXTERNAL MODULE: ./src/components/Filters/components/RangeSlider/helpers.ts
var RangeSlider_helpers = __webpack_require__(5484);
// EXTERNAL MODULE: ./node_modules/@swc/helpers/esm/_tagged_template_literal.js
var _tagged_template_literal = __webpack_require__(2729);
// EXTERNAL MODULE: ./src/styles/mixins.ts
var mixins = __webpack_require__(3654);
;// CONCATENATED MODULE: ./src/components/Filters/components/RangeSlider/RangeSlider.styled.ts

function _templateObject() {
    const data = (0,_tagged_template_literal._)([
        "\n    input[type='range'] {\n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      width: 100%;\n      outline: none;\n      position: absolute;\n      margin: auto;\n      top: 0;\n      bottom: 0;\n      background-color: transparent;\n      pointer-events: none;\n    }\n    input[name='from'] {\n      ",
        "\n    }\n    input[name='to'] {\n      ",
        "\n    }\n    input[type='range']::-webkit-slider-runnable-track {\n      -webkit-appearance: none;\n      height: 3px;\n    }\n    input[type='range']::-moz-range-track {\n      -moz-appearance: none;\n      height: 3px;\n    }\n    input[type='range']::-ms-track {\n      appearance: none;\n      height: 3px;\n    }\n    input[type='range']::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      height: 13px;\n      width: 13px;\n      background-color: white; // dots color in default state\n      cursor: pointer;\n      margin-top: -4px;\n      pointer-events: auto;\n      border-radius: 50%;\n    }\n    input[type='range']::-moz-range-thumb {\n      appearance: none;\n      -webkit-appearance: none;\n      height: 13px;\n      width: 13px;\n      cursor: pointer;\n      border-radius: 50%;\n      background-color: white; // dots color in default state\n      pointer-events: auto;\n      border: none;\n    }\n    input[type='range']::-ms-thumb {\n      appearance: none;\n      height: 13px;\n      width: 13px;\n      cursor: pointer;\n      border-radius: 50%;\n      background-color: white; // dots color in default state\n      pointer-events: auto;\n    }\n    input[type='range']:active::-webkit-slider-thumb {\n      background-color: #ffffff; // dots color in active state\n      border: 1px solid white; // dots border color in active state\n    }\n  "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}



const Container = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "RangeSliderstyled__Container",
    componentId: "sc-1oeyxd5-0"
}).withConfig({
    componentId: "sc-89465ed9-0"
}).withConfig({
    componentId: "sc-7f5a1c60-0"
})({
    "display": "flex",
    "flexDirection": "column",
    "gap": "0.5rem"
});
const FilterName = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "RangeSliderstyled__FilterName",
    componentId: "sc-1oeyxd5-1"
}).withConfig({
    componentId: "sc-89465ed9-1"
}).withConfig({
    componentId: "sc-7f5a1c60-1"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading5), {
    "fontSize": "12px",
    "color": "var(--base-white-200)"
});
const RangeWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "RangeSliderstyled__RangeWrapper",
    componentId: "sc-1oeyxd5-2"
}).withConfig({
    componentId: "sc-89465ed9-2"
}).withConfig({
    componentId: "sc-7f5a1c60-2"
})({
    "position": "relative",
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem"
});
const RangeContainer = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "RangeSliderstyled__RangeContainer",
    componentId: "sc-1oeyxd5-3"
}).withConfig({
    componentId: "sc-89465ed9-3"
}).withConfig({
    componentId: "sc-7f5a1c60-3"
})(()=>[
        {
            "position": "relative",
            "height": "40px",
            "width": "100%"
        },
        (0,styled_components_browser_esm/* css */.iv)(_templateObject(), {
            "--tw-translate-x": "-6px",
            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
            '&:where([dir="rtl"], [dir="rtl"] *)': {
                "--tw-translate-x": "6px",
                "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
            }
        }, {
            "--tw-translate-x": "6px",
            "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
            '&:where([dir="rtl"], [dir="rtl"] *)': {
                "--tw-translate-x": "-6px",
                "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
            }
        })
    ]);
const SliderTrack = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "RangeSliderstyled__SliderTrack",
    componentId: "sc-1oeyxd5-4"
}).withConfig({
    componentId: "sc-89465ed9-4"
}).withConfig({
    componentId: "sc-7f5a1c60-4"
})({
    "position": "absolute",
    "top": "50%",
    "height": "3px",
    "width": "100%",
    "borderRadius": "5px"
});

;// CONCATENATED MODULE: ./src/components/Filters/components/RangeSlider/RangeSlider.tsx






/**
 * RangeSlider is a range input component with two handles that allow you to pick an interval from
 * a given range.
 * @param filterName string, name of the value to be filtered. This should be the same as the value in url query
 * @param displayLabel string or ReactElement, name that is visible on label above the input
 * @param minValue number, minimal value for the range
 * @param maxValue number, maximal value for the range
 * @param initialRange state of Range type ({from: number, to: number}) the input should start with
 * @param onInput function to run on input
 */ const RangeSlider = (param)=>{
    let { filterName, displayLabel, minValue, maxValue, initialRange, onInput } = param;
    const [range, setRange] = (0,react.useState)(initialRange);
    const [step, setStep] = (0,react.useState)();
    const [auxiliarySliderFromValue, setAuxiliarySliderFromValue] = (0,react.useState)(range.from.toString());
    const [auxiliarySliderToValue, setAuxiliarySliderToValue] = (0,react.useState)(range.to.toString());
    const id = (0,react.useId)();
    (0,react.useEffect)(()=>{
        const stepValue = (0,RangeSlider_helpers/* calculateStep */.fB)(maxValue);
        setStep(stepValue);
    }, [
        maxValue
    ]);
    (0,react.useEffect)(()=>{
        setRange(initialRange);
        const fromValueSlider = document.getElementById("".concat(id, "-from"));
        const toValueSlider = document.getElementById("".concat(id, "-to"));
        if (fromValueSlider && toValueSlider) {
            fromValueSlider.valueAsNumber = initialRange.from;
            toValueSlider.valueAsNumber = initialRange.to;
        }
        setAuxiliarySliderFromValue(initialRange.from.toString());
        setAuxiliarySliderToValue(initialRange.to.toString());
    }, [
        id,
        initialRange
    ]);
    const minGap = 0;
    const handleSliderInputFrom = (e)=>{
        const value = parseInt(e.currentTarget.value);
        if (range.to - value <= minGap) {
            setRange({
                from: range.to - minGap,
                to: range.to
            });
            setAuxiliarySliderFromValue((range.to - minGap).toString());
        } else {
            setRange({
                from: value,
                to: range.to
            });
            setAuxiliarySliderFromValue(value.toString());
        }
    };
    const handleSliderTouchEndFrom = (e)=>{
        const value = parseInt(e.currentTarget.value);
        let newValue = value;
        if (range.to - value <= minGap) {
            newValue = range.to - minGap;
        } else {
            newValue = value;
        }
        onInput({
            ["min".concat((0,helpers/* capitalizeFirstLetter */.fm)(filterName))]: Math.min(newValue, initialRange.to).toString()
        });
    };
    const handleOnBlurFrom = ()=>{
        const sanitizedValue = isNaN(Number(auxiliarySliderFromValue)) ? minValue : Number(auxiliarySliderFromValue);
        const validValue = Math.min(Math.max(sanitizedValue, minValue), range.to - minGap);
        setRange({
            from: validValue,
            to: range.to
        });
        setAuxiliarySliderFromValue(validValue.toString());
        onInput({
            ["min".concat((0,helpers/* capitalizeFirstLetter */.fm)(filterName))]: Math.min(validValue, initialRange.to).toString()
        });
    };
    const handleSliderInputTo = (e)=>{
        const value = parseInt(e.currentTarget.value);
        if (value - range.from <= minGap) {
            setRange({
                from: range.from,
                to: range.from + minGap
            });
            setAuxiliarySliderToValue((range.to + minGap).toString());
        } else {
            setRange({
                from: range.from,
                to: value
            });
            setAuxiliarySliderToValue(value.toString());
        }
    };
    const handleSliderTouchEndTo = (e)=>{
        const value = parseInt(e.currentTarget.value);
        let newValue = value;
        if (value - range.from <= minGap) {
            newValue = range.to + minGap;
        } else {
            newValue = value;
        }
        onInput({
            ["max".concat((0,helpers/* capitalizeFirstLetter */.fm)(filterName))]: Math.max(newValue, initialRange.from).toString()
        });
    };
    const handleOnBlurTo = ()=>{
        const sanitizedValue = isNaN(Number(auxiliarySliderToValue)) ? maxValue : Number(auxiliarySliderToValue);
        const validValue = Math.min(Math.max(sanitizedValue, range.from + minGap), maxValue);
        setRange({
            from: range.from,
            to: validValue
        });
        setAuxiliarySliderToValue(validValue.toString());
        onInput({
            ["max".concat((0,helpers/* capitalizeFirstLetter */.fm)(filterName))]: Math.max(validValue, initialRange.from).toString()
        });
    };
    const fillColor = ()=>{
        const sliderTrack = document.querySelector("#".concat(CSS.escape("slider-track-".concat(id))));
        if (!sliderTrack) return;
        const trackWidth = sliderTrack.offsetWidth || 0;
        const thumbOffsetPercent = 6 / trackWidth * 100;
        const percentFrom = (range.from - minValue) / (maxValue - minValue) * 100;
        const percentTo = (range.to - minValue) / (maxValue - minValue) * 100;
        let start, end;
        if (document.documentElement.dir === "rtl") {
            // In RTL, reverse the positions and adjust the gradient direction.
            start = 100 - percentTo - thumbOffsetPercent;
            end = 100 - percentFrom + thumbOffsetPercent;
        } else {
            start = percentFrom - thumbOffsetPercent;
            end = percentTo + thumbOffsetPercent;
        }
        sliderTrack.style.background = "linear-gradient(to right, #ffffff33 ".concat(start, "%, #ffffff ").concat(start, "%, #ffffff ").concat(end, "%, #ffffff33 ").concat(end, "%)");
    };
    (0,react.useEffect)(()=>{
        fillColor();
    }, [
        range.from,
        range.to,
        initialRange
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(FilterName, {
                children: displayLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RangeWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(RangeContainer, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(SliderTrack, {
                            id: "slider-track-".concat(id)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            id: "".concat(id, "-from"),
                            name: "from",
                            type: "range",
                            min: minValue,
                            max: maxValue,
                            step: step,
                            value: range.from,
                            onInput: handleSliderInputFrom,
                            onPointerUp: handleSliderTouchEndFrom,
                            onTouchEnd: handleSliderTouchEndFrom
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)("input", {
                            id: "".concat(id, "-to"),
                            name: "to",
                            type: "range",
                            min: minValue,
                            max: maxValue,
                            step: step,
                            value: range.to,
                            onInput: handleSliderInputTo,
                            onPointerUp: handleSliderTouchEndTo,
                            onTouchEnd: handleSliderTouchEndTo
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(_StyledDiv, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledInput, {
                        type: "text",
                        value: auxiliarySliderFromValue,
                        onChange: (e)=>setAuxiliarySliderFromValue(e.target.value),
                        onBlur: handleOnBlurFrom
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledSpan, {
                        children: "-"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledInput2, {
                        type: "text",
                        value: auxiliarySliderToValue,
                        onChange: (e)=>setAuxiliarySliderToValue(e.target.value),
                        onBlur: handleOnBlurTo
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var RangeSlider_RangeSlider = (RangeSlider);
var _StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-aa5d34d2-0"
}).withConfig({
    componentId: "sc-104dc5c4-0"
})({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "0.5rem"
});
var _StyledInput = (0,styled_components_browser_esm/* default */.ZP)("input")({
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "center",
    "borderWidth": "1px",
    "borderColor": "rgba(255, 255, 255, 0.20)",
    "backgroundColor": "transparent",
    "paddingLeft": "14px",
    "paddingRight": "14px",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "textAlign": "center",
    "fontSize": "14px",
    "@media (min-width: 768px)": {
        "backgroundColor": "var(--base-transparent-20-default)",
        "paddingTop": "6px",
        "paddingBottom": "6px"
    }
});
var _StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span")({
    "fontSize": "12px"
});
var _StyledInput2 = (0,styled_components_browser_esm/* default */.ZP)("input").withConfig({
    displayName: "RangeSlider___StyledInput2",
    componentId: "sc-10t90sx-0"
})({
    "display": "flex",
    "width": "100%",
    "alignItems": "center",
    "justifyContent": "center",
    "borderWidth": "1px",
    "borderColor": "rgba(255, 255, 255, 0.20)",
    "backgroundColor": "transparent",
    "paddingLeft": "14px",
    "paddingRight": "14px",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "textAlign": "center",
    "fontSize": "14px",
    "@media (min-width: 768px)": {
        "backgroundColor": "var(--base-transparent-20-default)",
        "paddingTop": "6px",
        "paddingBottom": "6px"
    }
});

;// CONCATENATED MODULE: ./src/components/Filters/components/RadioInput/RadioInput.styled.ts


const RadioInput_styled_Container = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "RadioInputstyled__Container",
    componentId: "sc-14xf82m-0"
}).withConfig({
    componentId: "sc-59129774-0"
}).withConfig({
    componentId: "sc-43e5d328-0"
})({
    "display": "flex",
    "width": "100%",
    "flexDirection": "column",
    "gap": "11px"
});
const RadioInput_styled_FilterName = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "RadioInputstyled__FilterName",
    componentId: "sc-14xf82m-1"
}).withConfig({
    componentId: "sc-59129774-1"
}).withConfig({
    componentId: "sc-43e5d328-1"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading5), {
    "fontWeight": "500",
    "color": "var(--base-white-200)",
    "@media (min-width: 768px)": {
        "fontSize": "12px"
    }
});
const OptionsWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "RadioInputstyled__OptionsWrapper",
    componentId: "sc-14xf82m-2"
}).withConfig({
    componentId: "sc-59129774-2"
}).withConfig({
    componentId: "sc-43e5d328-2"
})({
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "10px",
    "@media (min-width: 768px)": {
        "gap": "0.375rem"
    }
});
const Label = styled_components_browser_esm/* default */.ZP.label.withConfig({
    displayName: "RadioInputstyled__Label",
    componentId: "sc-14xf82m-3"
}).withConfig({
    componentId: "sc-59129774-3"
}).withConfig({
    componentId: "sc-43e5d328-3"
})((param)=>{
    let { active, secondary } = param;
    return [
        (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading6),
        {
            "display": "flex",
            "height": "2.25rem",
            "cursor": "pointer",
            "alignItems": "center",
            "justifyContent": "center",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "paddingTop": "12px",
            "paddingBottom": "12px",
            "fontSize": "14px",
            "fontWeight": "500",
            "--tw-backdrop-blur": "blur(4px)",
            "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
            "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
            "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "300ms",
            "@media (min-width: 768px)": {
                "height": "auto",
                "paddingLeft": "12px",
                "paddingRight": "12px",
                "paddingTop": "0.375rem",
                "paddingBottom": "0.375rem",
                "fontSize": "12px"
            }
        },
        secondary && {
            "display": "flex",
            "height": "2.25rem",
            "alignItems": "center",
            "justifyContent": "center"
        },
        active ? {
            "borderWidth": "1px",
            "borderColor": "transparent",
            "backgroundColor": "var(--base-white-50)",
            "color": "var(--blue-700)"
        } : {
            "borderWidth": "1px",
            "borderColor": "var(--base-transparent-white-20)",
            "backgroundColor": "transparent",
            "color": "var(--base-white-white)",
            "&:hover": {
                "borderWidth": "1px",
                "borderColor": "transparent",
                "backgroundColor": "var(--base-white-50)",
                "color": "var(--blue-700)"
            },
            "@media (min-width: 768px)": {
                "backgroundColor": "var(--base-transparent-20-default)"
            }
        }
    ];
});
const RadioButton = styled_components_browser_esm/* default */.ZP.input.withConfig({
    displayName: "RadioInputstyled__RadioButton",
    componentId: "sc-14xf82m-4"
}).withConfig({
    componentId: "sc-59129774-4"
}).withConfig({
    componentId: "sc-43e5d328-4"
})({
    "height": "0px",
    "width": "0px",
    "appearance": "none"
});

;// CONCATENATED MODULE: ./src/components/Filters/FilteringOptions.ts
var Filter;
(function(Filter) {
    Filter["SEARCH"] = "search";
    Filter["AREA"] = "area";
    Filter["PRICE"] = "price";
    Filter["ROOMS"] = "roomsCount";
    Filter["ZONE"] = "zone";
    Filter["FLOOR"] = "floor";
    Filter["BUILDING"] = "building";
    Filter["SIDE"] = "apartmentSide";
    Filter["STATUS"] = "status";
    Filter["DUPLEX"] = "duplex";
    Filter["FORSALE"] = "forsale";
    Filter["BALCONY"] = "balcony";
    Filter["LOGGIA"] = "loggia";
    Filter["TERRACE"] = "terrace";
})(Filter || (Filter = {}));

// EXTERNAL MODULE: ./types/enums.ts
var enums = __webpack_require__(806);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./src/utils/helpers/mappings.ts
var mappings = __webpack_require__(431);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/Filters/components/RadioInput/RadioInput.tsx








/**
 * Input of radio type with a radio button for every string passed to it in options array.
 * If given a number instead of options array it will render numbered buttons starting from 2.
 * @param filterName string, name of the value to be filtered. This should be the same as the value in url query
 * @param displayLabel string, name that is visible on label above the input
 * @param options array of strings, or number, options for the user to choose from
 * @param selectedOption currently picked option, from an external source
 * @param onInput function to run on input to update the picked option
 */ const RadioInput = (param)=>{
    let { filterName, displayLabel, options, selectedOption, onInput, secondary = false } = param;
    const deviceType = (0,useGlobalStore/* useStore */.o)((s)=>s.deviceType);
    const { t } = (0,es/* useTranslation */.$G)();
    const handleChange = (e)=>{
        const option = {
            [filterName]: e.target.value
        };
        onInput(option);
    };
    const handleDeselect = (isSelected)=>{
        if (isSelected) {
            const option = {
                [filterName]: ""
            };
            setTimeout(()=>{
                onInput(option);
            }, 0);
        }
    };
    const renderOptions = ()=>{
        let optionsToRender = [];
        if (typeof options === "number") {
            if (filterName === Filter.FLOOR) {
                for(let i = 1; i <= options; i++){
                    optionsToRender.push(i.toString());
                }
            } else if (filterName === Filter.ROOMS) {
                for(let i = 2; i <= options; i++){
                    optionsToRender.push(i.toString());
                }
            } else {
                for(let i = 1; i <= options; i++){
                    optionsToRender.push(i.toString());
                }
            }
        } else {
            optionsToRender = options;
        }
        const translateParam = (t, param)=>{
            const parts = param.split("_");
            if (parts[0].toLowerCase() === "alfursan") {
                const name = "Alfursan";
                if (Array.isArray(options) && options.length > 1) {
                    // @ts-ignore
                    return name + " " + mappings/* stringToNumberMap */.sH[parts[1].toLowerCase()];
                } else {
                    return name;
                }
            }
            return "".concat(t(parts[0].toLowerCase()), "_").concat(parts[1]);
        };
        const formatLabel = (option)=>{
            if ((filterName === Filter.ZONE || filterName === Filter.BUILDING) && deviceType === enums/* DeviceType */.Yi.MOBILE) {
                return (0,helpers/* removeLeftPartOfUnderscore */.$0)(t(option.toLowerCase()));
            } else if ((filterName === Filter.ZONE || filterName === Filter.BUILDING) && deviceType !== enums/* DeviceType */.Yi.MOBILE) {
                return (0,helpers/* replaceUnderscoreWithSpace */.gA)(translateParam(t, option));
            } else if (filterName === Filter.SIDE) {
                return t("orientation.short.".concat(option));
            } else {
                return t(option.toLowerCase());
            }
        };
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: optionsToRender === null || optionsToRender === void 0 ? void 0 : optionsToRender.map((option, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(Label, {
                    active: selectedOption === option,
                    secondary: secondary,
                    children: [
                        formatLabel(option),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioButton, {
                            onChange: handleChange,
                            onClick: ()=>handleDeselect(selectedOption === option),
                            type: "radio",
                            name: filterName,
                            value: option,
                            checked: selectedOption === option
                        })
                    ]
                }, index))
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(RadioInput_styled_Container, {
        children: [
            !!displayLabel && /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioInput_styled_FilterName, {
                children: displayLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(OptionsWrapper, {
                children: renderOptions()
            })
        ]
    });
};
/* harmony default export */ var RadioInput_RadioInput = (RadioInput);

// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(1163);
// EXTERNAL MODULE: ./src/components/Filters/helpers.ts
var Filters_helpers = __webpack_require__(5004);
;// CONCATENATED MODULE: ./src/components/Filters/Filters.styled.ts

const Filters_styled_Container = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Filtersstyled__Container",
    componentId: "sc-j7f2vi-0"
}).withConfig({
    componentId: "sc-1ca39c40-0"
}).withConfig({
    componentId: "sc-c038512f-0"
})({
    "display": "flex",
    "flexGrow": "1",
    "flexDirection": "column",
    "rowGap": "1rem",
    "@media (min-width: 768px)": {
        "marginTop": "1rem",
        "display": "grid",
        "flexGrow": "0",
        "gridTemplateColumns": "repeat(2, minmax(0, 1fr))",
        "columnGap": "2rem"
    }
});
const SliderWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Filtersstyled__SliderWrapper",
    componentId: "sc-j7f2vi-1"
}).withConfig({
    componentId: "sc-1ca39c40-1"
}).withConfig({
    componentId: "sc-c038512f-1"
})({
    "width": "100%"
});
const RowWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "Filtersstyled__RowWrapper",
    componentId: "sc-j7f2vi-2"
}).withConfig({
    componentId: "sc-1ca39c40-2"
}).withConfig({
    componentId: "sc-c038512f-2"
})({
    "gridColumn": "span 2 / span 2",
    "display": "flex",
    "flexDirection": "column",
    "gap": "2rem",
    "@media (min-width: 768px)": {
        "flexDirection": "row"
    }
});

// EXTERNAL MODULE: ./src/containers/VideoConfigurator/threeJSManager/ThreeJSManager.ts + 34 modules
var ThreeJSManager = __webpack_require__(586);
// EXTERNAL MODULE: ./src/utils/pubsub.ts
var pubsub = __webpack_require__(1933);
// EXTERNAL MODULE: ./src/components/BottomSheet/BottomSheet.tsx
var BottomSheet = __webpack_require__(1747);
;// CONCATENATED MODULE: ./src/components/Filters/components/Search/SearchIcon.tsx

function SearchIcon() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z",
                stroke: "#C3C3C3",
                "stroke-width": "1.16667",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M12.2504 12.2499L9.71289 9.7124",
                stroke: "#C3C3C3",
                "stroke-width": "1.16667",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Filters/components/Search/EnterIcon.tsx

function EnterIcon() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "11",
        height: "9",
        viewBox: "0 0 11 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0 5.25C0 4.92783 0.26117 4.66667 0.583333 4.66667H7.58333C8.54986 4.66667 9.33333 3.88319 9.33333 2.91667V0.583333C9.33333 0.261164 9.59449 0 9.91667 0C10.2388 0 10.5 0.261164 10.5 0.583333V2.91667C10.5 4.52748 9.19415 5.83333 7.58333 5.83333H0.583333C0.26117 5.83333 0 5.57218 0 5.25Z",
                fill: "#EBEBEB"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M0.170853 5.66264C-0.0569508 5.43485 -0.0569508 5.06548 0.170853 4.83769L2.50419 2.50435C2.732 2.27655 3.10134 2.27655 3.32915 2.50435C3.55695 2.73216 3.55695 3.10151 3.32915 3.3293L1.40829 5.25016L3.32915 7.17102C3.55695 7.39881 3.55695 7.76818 3.32915 7.99597C3.10134 8.22376 2.732 8.22376 2.50419 7.99597L0.170853 5.66264Z",
                fill: "#EBEBEB"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Filters/components/Search/CloseIcon.tsx

function CloseIcon() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M10.5 3.5L3.5 10.5",
                stroke: "#EBEBEB",
                strokeWidth: "1.16667",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                d: "M3.5 3.5L10.5 10.5",
                stroke: "#EBEBEB",
                strokeWidth: "1.16667",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Filters/components/Search/Search.tsx

function Search_templateObject() {
    const data = (0,_tagged_template_literal._)([
        "",
        ""
    ]);
    Search_templateObject = function() {
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








const SEARCH_FIELDS = [
    "Floor.Building.Name",
    "ApartmentName"
];
function Search(param) {
    let { label, onInput } = param;
    const router = (0,next_router.useRouter)();
    const [value, setValue] = (0,react.useState)("");
    const search = router.query.search;
    const apply = ()=>{
        onInput({
            [Filter.SEARCH]: value.trim(),
            searchFields: SEARCH_FIELDS.join(",")
        });
    };
    const clear = ()=>{
        setValue("");
        onInput({
            [Filter.SEARCH]: "",
            searchFields: ""
        });
    };
    const handleKeyDown = (e)=>{
        if (e.key === "Enter") apply();
    };
    const hasValue = value.length > 0;
    const hasSearch = typeof search === "string" && search.length > 0;
    const isSame = value === search;
    const showEnter = hasValue && !isSame;
    const showClose = hasSearch && !hasValue || isSame;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Search_StyledDiv, {
        $_css: [
            {
                "borderWidth": "1px",
                "borderColor": "rgba(255, 255, 255, 0.20)",
                "backgroundColor": "rgba(0, 0, 0, 0.10)",
                "--tw-backdrop-blur": "blur(4px)",
                "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
                "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
                "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                "transitionDuration": "150ms"
            },
            {
                "display": "flex",
                "width": "100%",
                "alignItems": "center",
                "gap": "0.5rem",
                "paddingLeft": "0.75rem",
                "paddingRight": "0.75rem",
                "paddingTop": "0.5rem",
                "paddingBottom": "0.5rem",
                "&:focus-within": {
                    "borderColor": "rgba(255,255,255,0.60)"
                }
            }
        ],
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(SearchIcon, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(Search_StyledInput, {
                type: "text",
                name: "search",
                placeholder: label,
                value: value,
                onChange: (e)=>setValue(e.target.value),
                onKeyDown: handleKeyDown,
                $_css2: [
                    {
                        "flex": "1 1 0%",
                        "backgroundColor": "transparent",
                        "fontSize": "12px",
                        "fontWeight": "600",
                        "color": "rgba(255,255,255,0.20)",
                        "outline": "2px solid transparent",
                        "outlineOffset": "2px"
                    },
                    {
                        "&::placeholder": {
                            "--tw-text-opacity": "1",
                            "color": "rgb(195 195 195 / var(--tw-text-opacity, 1))"
                        },
                        "&:not(:placeholder-shown)": {
                            "--tw-text-opacity": "1",
                            "color": "rgb(235 235 235 / var(--tw-text-opacity, 1))"
                        }
                    }
                ]
            }),
            (showEnter || showClose) && (showEnter ? /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledButton, {
                onClick: apply,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(EnterIcon, {})
            }) : /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledButton2, {
                onClick: clear,
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CloseIcon, {})
            }))
        ]
    });
}
var Search_StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-75d70cdd-0"
}).withConfig({
    componentId: "sc-a62e947-0"
})(Search_templateObject(), (p)=>p.$_css);
var Search_StyledInput = (0,styled_components_browser_esm/* default */.ZP)("input")(_templateObject1(), (p)=>p.$_css2);
var _StyledButton = (0,styled_components_browser_esm/* default */.ZP)("button")({
    "&:active": {
        "--tw-scale-x": ".9",
        "--tw-scale-y": ".9",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});
var _StyledButton2 = (0,styled_components_browser_esm/* default */.ZP)("button").withConfig({
    displayName: "Search___StyledButton2",
    componentId: "sc-1u0k4mv-0"
})({
    "&:active": {
        "--tw-scale-x": ".9",
        "--tw-scale-y": ".9",
        "transform": "translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
    }
});

// EXTERNAL MODULE: ./public/icons/check.svg
var check = __webpack_require__(1028);
;// CONCATENATED MODULE: ./src/components/BottomSheet/BottomSheetInserts/MobileBuildingListSelection.tsx

function MobileBuildingListSelection_templateObject() {
    const data = (0,_tagged_template_literal._)([
        "",
        ""
    ]);
    MobileBuildingListSelection_templateObject = function() {
        return data;
    };
    return data;
}





const MobileBuildingListSelection = (param)=>{
    let { filterName, onClose, selectedOption, options, formatOption = (option)=>option, onInput } = param;
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const handleSelect = (option)=>{
        const updatedOption = {
            [filterName]: option
        };
        onClose();
        onInput(updatedOption);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)("div", {
        children: options.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)(MobileBuildingListSelection_StyledButton, {
                onClick: ()=>handleSelect(option),
                $_css: [
                    {
                        "display": "flex",
                        "width": "100%",
                        "alignItems": "center",
                        "justifyContent": "space-between",
                        "borderRadius": "9999px",
                        "paddingLeft": "1rem",
                        "paddingRight": "1rem",
                        "paddingTop": "0.5rem",
                        "paddingBottom": "0.5rem",
                        "fontSize": "14px",
                        "color": "var(--base-white-200)",
                        "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
                        "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
                        "transitionDuration": "150ms",
                        "&:hover": {
                            "backgroundColor": "var(--blue-700)"
                        }
                    },
                    option === selectedOption && {
                        "backgroundColor": "var(--base-transparent-white-20)"
                    }
                ],
                children: [
                    formatOption(option),
                    option === selectedOption && /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileBuildingListSelection_StyledSpan, {
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)(check/* default */.Z, {})
                    })
                ]
            }, option))
    });
};
var MobileBuildingListSelection_StyledButton = (0,styled_components_browser_esm/* default */.ZP)("button").withConfig({
    componentId: "sc-2af9a5b6-0"
}).withConfig({
    componentId: "sc-f5b13413-0"
})(MobileBuildingListSelection_templateObject(), (p)=>p.$_css);
var MobileBuildingListSelection_StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    displayName: "MobileBuildingListSelection___StyledSpan",
    componentId: "sc-uivs0d-0"
})({
    "marginLeft": "0.5rem"
});

;// CONCATENATED MODULE: ./src/components/Filters/components/DropdownInput/DropdownInput.styled.ts


const Wrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "DropdownInputstyled__Wrapper",
    componentId: "sc-3td6sd-0"
}).withConfig({
    componentId: "sc-7dffb850-0"
}).withConfig({
    componentId: "sc-d02c6c77-0"
})({
    "display": "flex",
    "width": "100%",
    "flexDirection": "column",
    "gap": "0.5rem"
});
const DropdownInput_styled_Label = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "DropdownInputstyled__Label",
    componentId: "sc-3td6sd-1"
}).withConfig({
    componentId: "sc-7dffb850-1"
}).withConfig({
    componentId: "sc-d02c6c77-1"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading5), {
    "fontSize": "12px",
    "fontWeight": "500",
    "color": "var(--base-white-200)"
});
const DropdownWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "DropdownInputstyled__DropdownWrapper",
    componentId: "sc-3td6sd-2"
}).withConfig({
    componentId: "sc-7dffb850-2"
}).withConfig({
    componentId: "sc-d02c6c77-2"
})({
    "position": "relative",
    "width": "100%"
});
const DropdownButton = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "DropdownInputstyled__DropdownButton",
    componentId: "sc-3td6sd-3"
}).withConfig({
    componentId: "sc-7dffb850-3"
}).withConfig({
    componentId: "sc-d02c6c77-3"
})((param)=>{
    let { isActive } = param;
    return [
        {
            "display": "flex",
            "width": "100%",
            "alignItems": "center",
            "justifyContent": "space-between",
            "gap": "0.5rem",
            "paddingLeft": "1rem",
            "paddingRight": "1rem",
            "paddingTop": "6px",
            "paddingBottom": "6px",
            "fontSize": "12px"
        },
        {
            "borderWidth": "1px",
            "borderColor": "var(--base-transparent-white-20)",
            "backgroundColor": "var(--base-transparent-20-default)"
        },
        {
            "cursor": "pointer",
            "color": "var(--base-white-white)",
            "&:focus": {
                "outline": "2px solid transparent",
                "outlineOffset": "2px",
                "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
                "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
                "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
                "--tw-ring-opacity": "1",
                "--tw-ring-color": "rgb(59 130 246 / var(--tw-ring-opacity, 1))"
            }
        },
        {
            "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "150ms",
            "&:hover": {
                "borderWidth": "1px",
                "borderColor": "transparent",
                "backgroundColor": "var(--base-white-50)",
                "color": "var(--blue-700)"
            }
        },
        isActive && {
            "borderWidth": "1px",
            "borderColor": "transparent",
            "backgroundColor": "var(--base-white-50)",
            "color": "var(--blue-700)"
        }
    ];
});
// TODO: adjust color to out variables when the design is done
const DropdownOptionsWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "DropdownInputstyled__DropdownOptionsWrapper",
    componentId: "sc-3td6sd-4"
}).withConfig({
    componentId: "sc-7dffb850-4"
}).withConfig({
    componentId: "sc-d02c6c77-4"
})({
    "position": "absolute",
    "zIndex": "10",
    "marginTop": "0.25rem",
    "display": "flex",
    "maxHeight": "15rem",
    "width": "100%",
    "flexDirection": "column",
    "gap": "0.5rem",
    "overflowY": "auto",
    "borderWidth": "1px",
    "backgroundColor": "var(--base-white-white)",
    "--tw-shadow": "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    "--tw-shadow-colored": "0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
});
// TODO: adjust color to out variables when the design is done
const DropdownOption = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "DropdownInputstyled__DropdownOption",
    componentId: "sc-3td6sd-5"
}).withConfig({
    componentId: "sc-7dffb850-5"
}).withConfig({
    componentId: "sc-d02c6c77-5"
})({
    "cursor": "pointer",
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgb(255 255 255 / var(--tw-bg-opacity, 1))",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "0.5rem",
    "paddingBottom": "0.5rem",
    "fontSize": "12px",
    "--tw-text-opacity": "1",
    "color": "rgb(0 0 0 / var(--tw-text-opacity, 1))",
    "&:hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgb(209 213 219 / var(--tw-bg-opacity, 1))"
    }
});

;// CONCATENATED MODULE: ./src/components/Filters/components/DropdownInput/DropdownInput.tsx






/**
 * Input of radio type with a radio button for every string passed to it in options array.
 * If given a number instead of options array it will render numbered buttons starting from 2.
 * @param filterName string, name of the value to be filtered. This should be the same as the value in url query
 * @param displayLabel string, name that is visible on label above the input
 * @param options array of strings, or number, options for the user to choose from
 * @param selectedOption currently picked option, from an external source
 * @param onInput function to run on input to update the picked option
 */ function DropdownInput(param) {
    let { filterName, displayLabel, selectedOption, options, onInput, formatOption = (option)=>option } = param;
    const [isOpen, setIsOpen] = (0,react.useState)(false);
    const [selected, setSelected] = (0,react.useState)(selectedOption || "");
    const { t } = (0,es/* useTranslation */.$G)();
    const [hydrated, setHydrated] = (0,react.useState)(false);
    (0,react.useEffect)(()=>{
        if (selectedOption === undefined || selectedOption === null || selectedOption === "") setSelected("");
    }, [
        selectedOption
    ]);
    (0,react.useEffect)(()=>{
        setHydrated(true);
    }, []);
    const handleSelect = (option)=>{
        const updatedOption = {
            [filterName]: option
        };
        setSelected(option);
        setIsOpen(false);
        onInput(updatedOption);
    };
    const handleResetDefault = (e)=>{
        e.stopPropagation();
        const updatedOption = {
            [filterName]: ""
        };
        setSelected("");
        setIsOpen(false);
        onInput(updatedOption);
    };
    let optionsToRender = [];
    if (typeof options === "number") {
        if (filterName === Filter.FLOOR) {
            for(let i = 0; i <= options; i++){
                optionsToRender.push(i.toString());
            }
        } else if (filterName === Filter.ROOMS) {
            for(let i = 2; i <= options; i++){
                optionsToRender.push(i.toString());
            }
        } else {
            for(let i = 1; i <= options; i++){
                optionsToRender.push(i.toString());
            }
        }
    } else {
        optionsToRender = options;
    }
    const optionPlaceholder = ()=>{
        if (filterName === Filter.BUILDING) {
            return selected || t("common.allBuildings");
        }
        if (filterName === Filter.FLOOR) {
            return selected || t("common.allFloors");
        }
        return selected || t("common.selectOption");
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Wrapper, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(DropdownInput_styled_Label, {
                children: displayLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DropdownWrapper, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(DropdownButton, {
                        isActive: isOpen,
                        onClick: ()=>setIsOpen(!isOpen),
                        className: "group",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)(DropdownInput_StyledSpan, {
                                children: [
                                    optionPlaceholder(),
                                    selected && /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledSpan2, {
                                        onClick: handleResetDefault,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "12",
                                            height: "12",
                                            viewBox: "0 0 12 12",
                                            fill: "none",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledPath, {
                                                    d: "M9 3L3 9",
                                                    strokeWidth: "1.33333",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledPath2, {
                                                    d: "M3 3L9 9",
                                                    strokeWidth: "1.33333",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(_StyledSvg, {
                                xmlns: "http://www.w3.org/2000/svg",
                                style: hydrated ? {
                                    transform: isOpen ? "rotate(180deg)" : ""
                                } : {},
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M19 9l-7 7-7-7"
                                })
                            })
                        ]
                    }),
                    isOpen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(DropdownOptionsWrapper, {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsx)(DropdownOption, {
                                onClick: ()=>handleSelect(""),
                                children: filterName === Filter.FLOOR ? t("common.allFloors") : t("common.allBuildings")
                            }),
                            optionsToRender.map((option)=>/*#__PURE__*/ (0,jsx_runtime.jsx)(DropdownOption, {
                                    onClick: ()=>handleSelect(option),
                                    children: t(formatOption(option))
                                }, option))
                        ]
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ var DropdownInput_DropdownInput = (DropdownInput);
var DropdownInput_StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    componentId: "sc-b72e4131-0"
}).withConfig({
    componentId: "sc-fef31485-0"
})({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
});
var _StyledSpan2 = (0,styled_components_browser_esm/* default */.ZP)("span")({
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem"
});
var _StyledPath = (0,styled_components_browser_esm/* default */.ZP)("path")({
    "stroke": "#fff",
    ".group:hover &": {
        "stroke": "var(--blue-700)"
    }
});
var _StyledPath2 = (0,styled_components_browser_esm/* default */.ZP)("path")({
    "stroke": "#fff",
    ".group:hover &": {
        "stroke": "var(--blue-700)"
    }
});
var _StyledSvg = (0,styled_components_browser_esm/* default */.ZP)("svg").withConfig({
    displayName: "DropdownInput___StyledSvg",
    componentId: "sc-o8dfjp-0"
})({
    "height": "1rem",
    "width": "1rem",
    "transitionProperty": "transform",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
});

;// CONCATENATED MODULE: ./src/components/Filters/components/CheckboxInput/CheckboxInput.styled.ts


const CheckboxInput_styled_Container = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "CheckboxInputstyled__Container",
    componentId: "sc-9k6mjl-0"
}).withConfig({
    componentId: "sc-b4bd773b-0"
}).withConfig({
    componentId: "sc-54a80652-0"
})({
    "display": "flex",
    "width": "100%",
    "flexDirection": "column",
    "gap": "11px"
});
const CheckboxInput_styled_FilterName = styled_components_browser_esm/* default */.ZP.p.withConfig({
    displayName: "CheckboxInputstyled__FilterName",
    componentId: "sc-9k6mjl-1"
}).withConfig({
    componentId: "sc-b4bd773b-1"
}).withConfig({
    componentId: "sc-54a80652-1"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading5), {
    "fontSize": "12px",
    "color": "var(--base-white-200)",
    "@media (min-width: 768px)": {
        "fontSize": "12px"
    }
});
const CheckboxInput_styled_OptionsWrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "CheckboxInputstyled__OptionsWrapper",
    componentId: "sc-9k6mjl-2"
}).withConfig({
    componentId: "sc-b4bd773b-2"
}).withConfig({
    componentId: "sc-54a80652-2"
})({
    "display": "flex",
    "flexWrap": "wrap",
    "gap": "8px",
    "@media (min-width: 768px)": {
        "gap": "0.25rem"
    }
});
const CheckboxInput_styled_Label = styled_components_browser_esm/* default */.ZP.label.withConfig({
    displayName: "CheckboxInputstyled__Label",
    componentId: "sc-9k6mjl-3"
}).withConfig({
    componentId: "sc-b4bd773b-3"
}).withConfig({
    componentId: "sc-54a80652-3"
})((param)=>{
    let { active } = param;
    return [
        (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading6),
        {
            "display": "flex",
            "cursor": "pointer",
            "alignItems": "center",
            "justifyContent": "center",
            "paddingLeft": "20px",
            "paddingRight": "20px",
            "paddingTop": "12px",
            "paddingBottom": "12px",
            "fontSize": "14px",
            "--tw-backdrop-blur": "blur(4px)",
            "WebkitBackdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
            "backdropFilter": "var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)",
            "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke",
            "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
            "transitionDuration": "300ms",
            "@media (min-width: 768px)": {
                "paddingLeft": "14px",
                "paddingRight": "14px",
                "paddingTop": "10px",
                "paddingBottom": "10px",
                "fontSize": "10px"
            }
        },
        active ? {
            "borderWidth": "1px",
            "borderColor": "transparent",
            "backgroundColor": "var(--base-white-50)",
            "color": "var(--blue-700)"
        } : {
            "borderWidth": "1px",
            "borderColor": "rgba(255, 255, 255, 0.20)",
            "backgroundColor": "transparent",
            "color": "var(--base-white-white)",
            "@media (min-width: 768px)": {
                "backgroundColor": "var(--base-transparent-20-default)",
                "&:hover": {
                    "borderWidth": "1px",
                    "borderColor": "transparent",
                    "backgroundColor": "var(--base-white-50)",
                    "color": "var(--blue-700)"
                }
            }
        }
    ];
});
const CheckboxButton = styled_components_browser_esm/* default */.ZP.input.withConfig({
    displayName: "CheckboxInputstyled__CheckboxButton",
    componentId: "sc-9k6mjl-4"
}).withConfig({
    componentId: "sc-b4bd773b-4"
}).withConfig({
    componentId: "sc-54a80652-4"
})({
    "height": "0px",
    "width": "0px",
    "appearance": "none"
});

;// CONCATENATED MODULE: ./src/components/Filters/components/CheckboxInput/CheckboxInput.tsx




const CheckboxInput = (param)=>{
    let { displayLabel, onInput, checkboxes } = param;
    const router = (0,next_router.useRouter)();
    const isChecked = (item)=>{
        if (item.alternativeActiveFlag !== undefined) {
            return item.alternativeActiveFlag;
        } else {
            var _router_query;
            return ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query[item.filterName]) == item.filterStateOn;
        }
    };
    const handleClick = (checkboxState)=>{
        const isSelected = isChecked(checkboxState);
        if (checkboxState.alternativeOnInput !== undefined) {
            checkboxState.alternativeOnInput();
            return;
        }
        let newValue = {
            [checkboxState.filterName]: ""
        };
        if (!isSelected) {
            newValue = {
                [checkboxState.filterName]: checkboxState.filterStateOn
            };
        }
        setTimeout(()=>{
            onInput(newValue);
        }, 0);
    };
    const renderCheckboxes = ()=>{
        return /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
            children: checkboxes === null || checkboxes === void 0 ? void 0 : checkboxes.map((item, index)=>{
                var _router_query;
                return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CheckboxInput_styled_Label, {
                    active: isChecked(item),
                    className: "group ".concat(isChecked(item) ? "is-active" : ""),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxInput_StyledSpan, {
                            children: item.optionDisplay
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxButton, {
                            onClick: ()=>handleClick(item),
                            type: "checkbox",
                            name: item.filterName,
                            value: ((_router_query = router.query) === null || _router_query === void 0 ? void 0 : _router_query[item.filterName]) ? item.filterStateOn : "no"
                        })
                    ]
                }, index);
            })
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(CheckboxInput_styled_Container, {
        children: [
            !!displayLabel && /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxInput_styled_FilterName, {
                children: displayLabel
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxInput_styled_OptionsWrapper, {
                children: renderCheckboxes()
            })
        ]
    });
};
/* harmony default export */ var CheckboxInput_CheckboxInput = (CheckboxInput);
var CheckboxInput_StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span").withConfig({
    displayName: "CheckboxInput___StyledSpan",
    componentId: "sc-yvccks-0"
}).withConfig({
    componentId: "sc-634c8a6c-0"
}).withConfig({
    componentId: "sc-306b6376-0"
})({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "gap": "0.25rem",
    "fontSize": "12px",
    '&:where([dir="rtl"], [dir="rtl"] *)': {
        "flexDirection": "row-reverse"
    }
});

// EXTERNAL MODULE: ./src/components/Icons/Icons.tsx
var Icons = __webpack_require__(5672);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
;// CONCATENATED MODULE: ./src/components/Filters/Filters.tsx























const applyFilter = (filter, router, option)=>{
    if (filter === Filter.ZONE || filter === Filter.BUILDING) {
        if (!Object.values(option)[0]) {
            var _ThreeJSManager_instance;
            (_ThreeJSManager_instance = ThreeJSManager/* ThreeJSManager */.E.instance) === null || _ThreeJSManager_instance === void 0 ? void 0 : _ThreeJSManager_instance.ShowBuilding();
        }
    }
    (0,Filters_helpers/* updateRoute */.fq)(router, option);
};
const updateRouteForBuildingSelection = (router, option, allBuildingsAndZones, isMobile)=>{
    const queryParams = new URLSearchParams(router.query);
    queryParams.delete("project");
    queryParams.delete("zone");
    queryParams.delete("building");
    queryParams.delete("side");
    queryParams.delete("floor");
    if (isMobile) window.scrollTo({
        top: 0
    });
    const queryString = queryParams.toString() + (isMobile ? "" : "#section2");
    const [, routeFragment] = Object.entries(option)[0];
    const target = allBuildingsAndZones.find((item)=>item.buildingName === routeFragment);
    console.log(target, routeFragment);
    if (target === undefined) {
        router.push("/".concat(router.query.project, "/Zone_A?").concat(queryString), undefined, {
            scroll: false
        });
    } else {
        router.push("/".concat(router.query.project, "/").concat(target === null || target === void 0 ? void 0 : target.zoneName, "/").concat(target === null || target === void 0 ? void 0 : target.buildingName, "?").concat(queryString), undefined, {
            scroll: false
        });
    }
};
const Filters = (param)=>{
    let { allBuildingsAndZones } = param;
    const deviceType = (0,useGlobalStore/* useStore */.o)((s)=>s.deviceType);
    const filteringBoundaries = (0,useGlobalStore/* useStore */.o)((s)=>s.filteringBoundaries);
    const apartmentsSideMap = (0,useGlobalStore/* useStore */.o)((s)=>s.apartmentsSideMap);
    const showFavourites = (0,useGlobalStore/* useStore */.o)((s)=>s.showFavourites);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const router = (0,next_router.useRouter)();
    const { t } = (0,es/* useTranslation */.$G)();
    const { floor, status, roomsCount, building, apartmentSide } = router.query;
    const isMobile = deviceType === enums/* DeviceType */.Yi.MOBILE;
    const sides = [
        ...new Set(Object.values(apartmentsSideMap).flatMap((zone)=>Object.values(zone).flatMap((rubik)=>Object.values(rubik).flatMap((num)=>Object.values(num).flat()))))
    ];
    function getInitialRange(filter) {
        const capitalizedFilterName = (0,helpers/* capitalizeFirstLetter */.fm)(filter);
        const minValueKey = "min".concat(capitalizedFilterName);
        const maxValueKey = "max".concat(capitalizedFilterName);
        const minValue = (0,helpers/* normalizeParameter */.bz)(router.query[minValueKey]);
        const maxValue = (0,helpers/* normalizeParameter */.bz)(router.query[maxValueKey]);
        let from = Number(filteringBoundaries[minValueKey]);
        let to = Number(filteringBoundaries[maxValueKey]);
        if (Number(minValue)) {
            from = Number(Number(minValue) > filteringBoundaries[maxValueKey] ? filteringBoundaries[maxValueKey] : Number(minValue) < filteringBoundaries[minValueKey] ? filteringBoundaries[minValueKey] : minValue);
        }
        if (Number(maxValue)) {
            to = Number(Number(maxValue) > filteringBoundaries[maxValueKey] ? filteringBoundaries[maxValueKey] : Number(maxValue) < filteringBoundaries[minValueKey] ? filteringBoundaries[minValueKey] : maxValue);
        }
        return {
            from,
            to
        };
    }
    function getSelectedOption(filter, option) {
        const normalizedOption = (0,helpers/* normalizeParameter */.bz)(option);
        const normalizedOptionAsNumber = Number(normalizedOption);
        if (filter === Filter.FLOOR) {
            if (normalizedOptionAsNumber > filteringBoundaries.maxFloor) {
                (0,helpers/* updateQueryParams */.Vb)(router, {
                    [filter]: String(filteringBoundaries.maxFloor)
                });
            } else {
                return (0,helpers/* normalizeParameter */.bz)(option);
            }
        }
        if (filter === Filter.ROOMS) {
            if (normalizedOptionAsNumber > filteringBoundaries.roomsCount) {
                (0,helpers/* updateQueryParams */.Vb)(router, {
                    [filter]: String(filteringBoundaries.roomsCount)
                });
            } else {
                return (0,helpers/* normalizeParameter */.bz)(option);
            }
        }
        return (0,helpers/* normalizeParameter */.bz)(option);
    }
    function onSliderInput(filter, router, params) {
        if (filter === Filter.PRICE) {
            if (params.minPrice === undefined) {
                if (!router.query.minPrice) {
                    params.minPrice = String(filteringBoundaries.minPrice);
                }
            }
            if (params.maxPrice === undefined) {
                if (!router.query.maxPrice) {
                    params.maxPrice = String(filteringBoundaries.maxPrice);
                }
            }
        }
        if (filter === Filter.AREA) {
            if (params.minArea === undefined) {
                if (!router.query.minArea) {
                    params.minArea = String(filteringBoundaries.minArea);
                }
            }
            if (params.maxArea === undefined) {
                if (!router.query.maxArea) {
                    params.maxArea = String(filteringBoundaries.maxArea);
                }
            }
        }
        (0,helpers/* updateQueryParams */.Vb)(router, params);
    }
    const apartmentStatusKeysArray = Object.keys({
        Available: pubsub/* ApartmentStatus */.lr.Available,
        Reserved: pubsub/* ApartmentStatus */.lr.Reserved,
        Sold: pubsub/* ApartmentStatus */.lr.Sold
    });
    const [isBuildingsBottomSheetOpen, setIsBuildingsBottomSheetOpen] = (0,react.useState)(false);
    const [isFloorBottomSheetOpen, setIsFloorBottomSheetOpen] = (0,react.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Filters_styled_Container, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RowWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(Search, {
                    label: t("filtering.searchBy"),
                    onInput: (option)=>(0,helpers/* updateQueryParams */.Vb)(router, option)
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RowWrapper, {
                children: !!allBuildingsAndZones && (isMobile ? /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenBuildingsButton, {
                            label: t("filtering.building"),
                            defaultLabel: t("common.allBuildings"),
                            building: building ? "".concat(t("filtering.building"), " ").concat((0,helpers/* mapBuldingToBlock */.f)(building)) : building,
                            isBuildingsBottomSheetOpen: isBuildingsBottomSheetOpen,
                            setIsBuildingsBottomSheetOpen: setIsBuildingsBottomSheetOpen,
                            onInput: (building)=>applyFilter(Filter.BUILDING, router, building)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomSheet/* default */.Z, {
                            isOpen: isBuildingsBottomSheetOpen,
                            onClose: ()=>setIsBuildingsBottomSheetOpen(false),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileBuildingListSelection, {
                                filterName: Filter.BUILDING,
                                selectedOption: building,
                                options: allBuildingsAndZones.map((item)=>item.buildingName),
                                formatOption: (building)=>"".concat(t((0,helpers/* getBuildingLabel */.FQ)((0,helpers/* mapBuldingToBlock */.f)(building)))),
                                onClose: ()=>setIsBuildingsBottomSheetOpen(false),
                                onInput: (building)=>{
                                    updateRouteForBuildingSelection(router, building, allBuildingsAndZones, isMobile);
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(OpenBuildingsButton, {
                            label: t("filtering.floor"),
                            defaultLabel: t("common.allFloors"),
                            building: getSelectedOption(Filter.FLOOR, floor),
                            isBuildingsBottomSheetOpen: isFloorBottomSheetOpen,
                            setIsBuildingsBottomSheetOpen: setIsFloorBottomSheetOpen,
                            onInput: (floor)=>applyFilter(Filter.FLOOR, router, floor)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(BottomSheet/* default */.Z, {
                            isOpen: isFloorBottomSheetOpen,
                            onClose: ()=>setIsFloorBottomSheetOpen(false),
                            children: /*#__PURE__*/ (0,jsx_runtime.jsx)(MobileBuildingListSelection, {
                                filterName: Filter.FLOOR,
                                selectedOption: getSelectedOption(Filter.FLOOR, floor),
                                options: [
                                    ...Array(filteringBoundaries.maxFloor)
                                ].map((_, i)=>(i + 1).toString()),
                                onClose: ()=>setIsFloorBottomSheetOpen(false),
                                onInput: (option)=>(0,helpers/* updateQueryParams */.Vb)(router, option)
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DropdownInput_DropdownInput, {
                            filterName: Filter.BUILDING,
                            displayLabel: t("filtering.building"),
                            selectedOption: building,
                            options: allBuildingsAndZones.map((item)=>item.buildingName),
                            formatOption: (building)=>"".concat(t((0,helpers/* getBuildingLabel */.FQ)((0,helpers/* mapBuldingToBlock */.f)(building)))),
                            onInput: (building)=>updateRouteForBuildingSelection(router, building, allBuildingsAndZones, isMobile)
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsx)(DropdownInput_DropdownInput, {
                            filterName: Filter.FLOOR,
                            displayLabel: t("filtering.floor"),
                            options: [
                                ...Array(filteringBoundaries.maxFloor - filteringBoundaries.minFloor + 1)
                            ].map((_, i)=>(i + filteringBoundaries.minFloor).toString()),
                            selectedOption: getSelectedOption(Filter.FLOOR, floor),
                            onInput: (option)=>(0,helpers/* updateQueryParams */.Vb)(router, option)
                        })
                    ]
                }))
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioInput_RadioInput, {
                filterName: Filter.ROOMS,
                displayLabel: t("filtering.roomNr"),
                options: (()=>filteringBoundaries.roomsCount > 4 ? [
                        "1",
                        "2",
                        "3",
                        "4+"
                    ] : Array.from({
                        length: filteringBoundaries.roomsCount
                    }, (_, i)=>String(i + 1)))(),
                selectedOption: getSelectedOption(Filter.ROOMS, roomsCount),
                onInput: (option)=>(0,helpers/* updateQueryParams */.Vb)(router, option)
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RowWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(SliderWrapper, {
                    children: /*#__PURE__*/ (0,jsx_runtime.jsx)(RangeSlider_RangeSlider, {
                        filterName: Filter.PRICE,
                        displayLabel: /*#__PURE__*/ (0,jsx_runtime.jsx)("span", {
                            children: t("filtering.price")
                        }),
                        minValue: filteringBoundaries.minPrice,
                        maxValue: filteringBoundaries.maxPrice,
                        initialRange: getInitialRange(Filter.PRICE),
                        onInput: (params)=>onSliderInput(Filter.PRICE, router, params)
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RowWrapper, {
                children: /*#__PURE__*/ (0,jsx_runtime.jsx)(CheckboxInput_CheckboxInput, {
                    displayLabel: t("filtering.showOnly"),
                    onInput: (option)=>(0,helpers/* updateQueryParams */.Vb)(router, option),
                    checkboxes: [
                        {
                            filterName: Filter.BALCONY,
                            optionDisplay: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                children: t("rooms.Balcony")
                            }),
                            filterStateOn: "yes"
                        },
                        {
                            filterName: Filter.LOGGIA,
                            optionDisplay: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                children: t("rooms.Loggia")
                            }),
                            filterStateOn: "yes"
                        },
                        {
                            filterName: Filter.TERRACE,
                            optionDisplay: /*#__PURE__*/ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, {
                                children: t("rooms.Terrace")
                            }),
                            filterStateOn: "yes"
                        },
                        {
                            filterName: "",
                            optionDisplay: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* HeartIcon */.h_, {
                                        height: 16,
                                        width: 16,
                                        hasHover: true
                                    }),
                                    t("filtering.favorites")
                                ]
                            }),
                            filterStateOn: "1",
                            alternativeActiveFlag: showFavourites,
                            alternativeOnInput: ()=>{
                                dispatch({
                                    type: globalReducer/* StoreActions */.A.SET_SHOW_FAVOURITES,
                                    payload: !showFavourites
                                });
                            }
                        },
                        {
                            filterName: Filter.STATUS,
                            optionDisplay: /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Icons/* HouseSaleIcon */.uK, {
                                        height: 16,
                                        width: 16,
                                        hasHover: true
                                    }),
                                    t("filtering.forSale")
                                ]
                            }),
                            filterStateOn: "Available"
                        }
                    ]
                })
            })
        ]
    });
};
const OpenBuildingsButton = (param)=>{
    let { label, defaultLabel, building, isBuildingsBottomSheetOpen, setIsBuildingsBottomSheetOpen, onInput } = param;
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Filters_StyledDiv, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsx)(RadioInput_styled_FilterName, {
                children: label
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(Filters_StyledButton, {
                onClick: ()=>setIsBuildingsBottomSheetOpen(true),
                className: "group",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)(Filters_StyledSpan, {
                        children: [
                            building || defaultLabel,
                            building && /*#__PURE__*/ (0,jsx_runtime.jsx)(Filters_StyledSpan2, {
                                onClick: (e)=>{
                                    e.stopPropagation();
                                    const updatedOption = {
                                        [Filter.BUILDING]: ""
                                    };
                                    onInput(updatedOption);
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Filters_StyledPath, {
                                            d: "M9 3L3 9",
                                            strokeWidth: "1.33333",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsx)(Filters_StyledPath2, {
                                            d: "M3 3L9 9",
                                            strokeWidth: "1.33333",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsx)(Filters_StyledSvg, {
                        xmlns: "http://www.w3.org/2000/svg",
                        style: {
                            transform: isBuildingsBottomSheetOpen ? "rotate(180deg)" : ""
                        },
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ var Filters_Filters = (Filters);
var Filters_StyledDiv = (0,styled_components_browser_esm/* default */.ZP)("div").withConfig({
    componentId: "sc-faab18b-0"
}).withConfig({
    componentId: "sc-8fa820eb-0"
})({
    "display": "flex",
    "flexDirection": "column",
    "gap": "0.75rem"
});
var Filters_StyledButton = (0,styled_components_browser_esm/* default */.ZP)("button")({
    "display": "flex",
    "width": "100%",
    "cursor": "pointer",
    "alignItems": "center",
    "justifyContent": "space-between",
    "gap": "0.5rem",
    "borderWidth": "1px",
    "borderColor": "rgba(255, 255, 255, 0.20)",
    "backgroundColor": "transparent",
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "paddingTop": "10px",
    "paddingBottom": "10px",
    "fontSize": "12px",
    "color": "var(--base-white-white)",
    "transitionProperty": "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms",
    "&:hover": {
        "borderWidth": "1px",
        "borderColor": "transparent",
        "backgroundColor": "var(--base-white-50)",
        "color": "var(--blue-700)"
    },
    "&:focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgb(59 130 246 / var(--tw-ring-opacity, 1))"
    },
    "@media (min-width: 768px)": {
        "backgroundColor": "var(--base-transparent-20-default)",
        "paddingTop": "6px",
        "paddingBottom": "6px"
    }
});
var Filters_StyledSpan = (0,styled_components_browser_esm/* default */.ZP)("span")({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "fontSize": "14px"
});
var Filters_StyledSpan2 = (0,styled_components_browser_esm/* default */.ZP)("span")({
    "paddingLeft": "0.5rem",
    "paddingRight": "0.5rem"
});
var Filters_StyledPath = (0,styled_components_browser_esm/* default */.ZP)("path")({
    "stroke": "#fff",
    ".group:hover &": {
        "stroke": "var(--blue-700)"
    }
});
var Filters_StyledPath2 = (0,styled_components_browser_esm/* default */.ZP)("path")({
    "stroke": "#fff",
    ".group:hover &": {
        "stroke": "var(--blue-700)"
    }
});
var Filters_StyledSvg = (0,styled_components_browser_esm/* default */.ZP)("svg").withConfig({
    displayName: "Filters___StyledSvg",
    componentId: "sc-16qnd03-0"
})({
    "height": "1rem",
    "width": "1rem",
    "transitionProperty": "transform",
    "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
    "transitionDuration": "150ms"
});


/***/ }),

/***/ 3253:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ ResultCount_ResultCount; }
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 17 modules
var es = __webpack_require__(2120);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js + 9 modules
var styled_components_browser_esm = __webpack_require__(1686);
// EXTERNAL MODULE: ./src/styles/mixins.ts
var mixins = __webpack_require__(3654);
;// CONCATENATED MODULE: ./src/components/ResultsAndSorting/ResultCount/ResultCount.styled.ts


const Wrapper = styled_components_browser_esm/* default */.ZP.div.withConfig({
    displayName: "ResultCountstyled__Wrapper",
    componentId: "sc-1g1i38t-0"
}).withConfig({
    componentId: "sc-84099950-0"
}).withConfig({
    componentId: "sc-e841eac5-0"
})({
    "position": "relative"
});
const Title = styled_components_browser_esm/* default */.ZP.h3.withConfig({
    displayName: "ResultCountstyled__Title",
    componentId: "sc-1g1i38t-1"
}).withConfig({
    componentId: "sc-84099950-1"
}).withConfig({
    componentId: "sc-e841eac5-1"
})([
    "",
    ""
], {
    "fontSize": "20px",
    "fontWeight": "500",
    "textTransform": "uppercase"
});
const Result = styled_components_browser_esm/* default */.ZP.span.withConfig({
    displayName: "ResultCountstyled__Result",
    componentId: "sc-1g1i38t-2"
}).withConfig({
    componentId: "sc-84099950-2"
}).withConfig({
    componentId: "sc-e841eac5-2"
})([
    "",
    " ",
    ""
], (0,mixins/* setTypography */.Q)(mixins/* FontTypes */.m.Heading6), {
    "paddingLeft": "0.5rem"
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./src/zustand/globalReducer.tsx
var globalReducer = __webpack_require__(4017);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs + 1 modules
var react_toastify_esm = __webpack_require__(4173);
// EXTERNAL MODULE: ./src/utils/helpers/helpers.ts
var helpers = __webpack_require__(4919);
// EXTERNAL MODULE: ./src/zustand/useGlobalStore.ts + 4 modules
var useGlobalStore = __webpack_require__(9179);
;// CONCATENATED MODULE: ./src/components/ResultsAndSorting/ResultCount/ResultCount.tsx








const ResultCount = (param)=>{
    let { count } = param;
    const { t } = (0,es/* useTranslation */.$G)();
    const showFavourites = (0,useGlobalStore/* useStore */.o)((s)=>s.showFavourites);
    const dispatch = (0,useGlobalStore/* useStore */.o)((s)=>s.dispatch);
    const [favouritesCount, setFavouritesCount] = (0,react.useState)(0);
    (0,react.useEffect)(()=>{
        const storedFavourites = localStorage.getItem("favouriteApartments");
        const existingFavourites = storedFavourites ? JSON.parse(storedFavourites) : [];
        setFavouritesCount(existingFavourites.length);
    }, [
        showFavourites
    ]);
    const clearFavourites = ()=>{
        if (showFavourites) {
            const confirmationMessage = (0,helpers/* capitalizeFirstLetter */.fm)(t("clear favourites confirmation"));
            const userConfirmed = window.confirm(confirmationMessage);
            if (userConfirmed) {
                localStorage.removeItem("favouriteApartments");
                dispatch({
                    type: globalReducer/* StoreActions */.A.SET_SHOW_FAVOURITES,
                    payload: false
                });
                setFavouritesCount(0);
                const toastMessage = (0,helpers/* capitalizeFirstLetter */.fm)(t("favourites cleared"));
                react_toastify_esm/* toast */.Am.success(toastMessage, {
                    position: "bottom-right",
                    autoClose: 3000
                });
            }
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsx)(Wrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Title, {
            children: [
                showFavourites ? t("favourites") : t("common.offers"),
                ":",
                " ",
                showFavourites ? favouritesCount : count
            ]
        })
    });
};
/* harmony default export */ var ResultCount_ResultCount = (ResultCount);


/***/ }),

/***/ 4483:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ }),

/***/ 2424:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: function() { return /* binding */ mergeApartments; }
/* harmony export */ });
/* harmony import */ var _utils_pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1933);
/* harmony import */ var _utils_helpers_mappings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(431);


/**
 * Use this to replace data from strapi with data from CRM. This is needed to get the correct price and status of the apartment.
 * @param apartments
 * @param crmList
 */ function mergeApartments(apartments, crmList) {
    const crmMap = new Map(crmList.map((item)=>[
            item.id,
            item
        ]));
    for (const apartment of apartments){
        const crm = crmMap.get(apartment.ExternalId);
        if (crm) {
            const mappedStatus = _utils_helpers_mappings__WEBPACK_IMPORTED_MODULE_1__/* .crmToApartmentStatus */ .nC[crm.status_id] || _utils_pubsub__WEBPACK_IMPORTED_MODULE_0__/* .ApartmentStatus */ .lr.Disabled;
            apartment.Price = crm.price;
            apartment.StatusId = crm.status_id;
            apartment.Status = mappedStatus;
            apartment.PriceM2 = crm.pricemkw;
            apartment.PriceChangeHistory = crm.price_change_history;
            apartment.ApartmentLink = crm.card_link;
            apartment.Area = crm.area;
        }
    }
    return apartments;
}


/***/ })

}]);