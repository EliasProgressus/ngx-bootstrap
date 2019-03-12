(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/positioning', ['exports', '@angular/core', '@angular/common', 'rxjs'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].positioning = {}),global.ng.core,global.ng.common,global.rxjs));
}(this, (function (exports,core,common,rxjs) { 'use strict';

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Get CSS computed property of the given element
     * @param {?} element
     * @param {?=} property
     * @return {?}
     */
    function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
            return [];
        }
        // NOTE: 1 DOM access here
        var /** @type {?} */ window = element.ownerDocument.defaultView;
        var /** @type {?} */ css = window.getComputedStyle(element, null);
        return property ? css[property] : css;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Returns the parentNode or the host of the element
     * @param {?} element
     * @return {?}
     */
    function getParentNode(element) {
        if (element.nodeName === 'HTML') {
            return element;
        }
        return element.parentNode || element.host;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
            return document.body;
        }
        switch (element.nodeName) {
            case 'HTML':
            case 'BODY':
                return element.ownerDocument.body;
            case '#document':
                return element.body;
            default:
        }
        // Firefox want us to check `-x` and `-y` variations as well
        var _a = getStyleComputedProperty(element), overflow = _a.overflow, overflowX = _a.overflowX, overflowY = _a.overflowY;
        if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
            return element;
        }
        return getScrollParent(getParentNode(element));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ isIE11 = isBrowser && !!(((window)).MSInputMethodContext && ((document)).documentMode);
    var /** @type {?} */ isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
    /**
     * @param {?=} version
     * @return {?}
     */
    function isIE(version) {
        if (version === 11) {
            return isIE11;
        }
        if (version === 10) {
            return isIE10;
        }
        return isIE11 || isIE10;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getOffsetParent(element) {
        if (!element) {
            return document.documentElement;
        }
        var /** @type {?} */ noOffsetParent = isIE(10) ? document.body : null;
        // NOTE: 1 DOM access here
        var /** @type {?} */ offsetParent = element.offsetParent || null;
        // Skip hidden elements which don't have an offsetParent
        var /** @type {?} */ sibling;
        while (offsetParent === noOffsetParent && element.nextElementSibling) {
            sibling = element.nextElementSibling;
            offsetParent = sibling.offsetParent;
        }
        var /** @type {?} */ nodeName = offsetParent && offsetParent.nodeName;
        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
            return sibling ? sibling.ownerDocument.documentElement : document.documentElement;
        }
        // .offsetParent will return the closest TH, TD or TABLE in case
        // no offsetParent is present, I hate this job...
        if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 &&
            getStyleComputedProperty(offsetParent, 'position') === 'static') {
            return getOffsetParent(offsetParent);
        }
        return offsetParent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function isOffsetContainer(element) {
        var nodeName = element.nodeName;
        if (nodeName === 'BODY') {
            return false;
        }
        return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Finds the root node (document, shadowDOM root) of the given element
     * @param {?} node
     * @return {?}
     */
    function getRoot(node) {
        if (node.parentNode !== null) {
            return getRoot(node.parentNode);
        }
        return node;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element1
     * @param {?} element2
     * @return {?}
     */
    function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
            return document.documentElement;
        }
        // Here we make sure to give as "start" the element that comes first in the DOM
        /* tslint:disable-next-line: no-bitwise */
        var /** @type {?} */ order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var /** @type {?} */ start = order ? element1 : element2;
        var /** @type {?} */ end = order ? element2 : element1;
        // Get common ancestor container
        var /** @type {?} */ range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer;
        // Both nodes are inside #document
        if ((element1 !== commonAncestorContainer &&
            element2 !== commonAncestorContainer) ||
            start.contains(end)) {
            if (isOffsetContainer(commonAncestorContainer)) {
                return commonAncestorContainer;
            }
            return getOffsetParent(commonAncestorContainer);
        }
        // one of the nodes is inside shadowDOM, find which one
        var /** @type {?} */ element1root = getRoot(element1);
        if (element1root.host) {
            return findCommonOffsetParent(element1root.host, element2);
        }
        else {
            return findCommonOffsetParent(element1, getRoot(element2).host);
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Helper to detect borders of a given element
     * @param {?} styles
     * @param {?} axis
     * @return {?}
     */
    function getBordersSize(styles, axis) {
        var /** @type {?} */ sideA = axis === 'x' ? 'Left' : 'Top';
        var /** @type {?} */ sideB = sideA === 'Left' ? 'Right' : 'Bottom';
        return (parseFloat(styles["border" + sideA + "Width"]) +
            parseFloat(styles["border" + sideB + "Width"]));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} axis
     * @param {?} body
     * @param {?} html
     * @param {?} computedStyle
     * @return {?}
     */
    function getSize(axis, body, html, computedStyle) {
        return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10)
            ? (parseInt(html["offset" + axis], 10) +
                parseInt(computedStyle["margin" + (axis === 'Height' ? 'Top' : 'Left')], 10) +
                parseInt(computedStyle["margin" + (axis === 'Height' ? 'Bottom' : 'Right')], 10))
            : 0);
    }
    /**
     * @param {?} document
     * @return {?}
     */
    function getWindowSizes(document) {
        var /** @type {?} */ body = document.body;
        var /** @type {?} */ html = document.documentElement;
        var /** @type {?} */ computedStyle = isIE(10) && getComputedStyle(html);
        return {
            height: getSize('Height', body, html, computedStyle),
            width: getSize('Width', body, html, computedStyle)
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Gets the scroll value of the given element in the given side (top and left)
     * @param {?} element
     * @param {?=} side
     * @return {?}
     */
    function getScroll(element, side) {
        if (side === void 0) {
            side = 'top';
        }
        var /** @type {?} */ upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        var /** @type {?} */ nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            var /** @type {?} */ html = element.ownerDocument.documentElement;
            var /** @type {?} */ scrollingElement = element.ownerDocument.scrollingElement || html;
            return scrollingElement[upperSide];
        }
        return element[upperSide];
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} offsets
     * @return {?}
     */
    function getClientRect(offsets) {
        return __assign({}, offsets, { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getBoundingClientRect(element) {
        var /** @type {?} */ rect = {};
        // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11
        try {
            if (isIE(10)) {
                rect = element.getBoundingClientRect();
                var /** @type {?} */ scrollTop = getScroll(element, 'top');
                var /** @type {?} */ scrollLeft = getScroll(element, 'left');
                rect.top += scrollTop;
                rect.left += scrollLeft;
                rect.bottom += scrollTop;
                rect.right += scrollLeft;
            }
            else {
                rect = element.getBoundingClientRect();
            }
        }
        catch (e) {
            return undefined;
        }
        var /** @type {?} */ result = {
            left: rect.left,
            top: rect.top,
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        };
        // subtract scrollbar size from sizes
        var /** @type {?} */ sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
        var /** @type {?} */ width = sizes.width || element.clientWidth || result.right - result.left;
        var /** @type {?} */ height = sizes.height || element.clientHeight || result.bottom - result.top;
        var /** @type {?} */ horizScrollbar = element.offsetWidth - width;
        var /** @type {?} */ vertScrollbar = element.offsetHeight - height;
        // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons
        if (horizScrollbar || vertScrollbar) {
            var /** @type {?} */ styles = getStyleComputedProperty(element);
            horizScrollbar -= getBordersSize(styles, 'x');
            vertScrollbar -= getBordersSize(styles, 'y');
            result.width -= horizScrollbar;
            result.height -= vertScrollbar;
        }
        return getClientRect(result);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} rect
     * @param {?} element
     * @param {?=} subtract
     * @return {?}
     */
    function includeScroll(rect, element, subtract) {
        if (subtract === void 0) {
            subtract = false;
        }
        var /** @type {?} */ scrollTop = getScroll(element, 'top');
        var /** @type {?} */ scrollLeft = getScroll(element, 'left');
        var /** @type {?} */ modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} children
     * @param {?} parent
     * @param {?=} fixedPosition
     * @return {?}
     */
    function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition) {
        if (fixedPosition === void 0) {
            fixedPosition = false;
        }
        var /** @type {?} */ isIE10 = isIE(10);
        var /** @type {?} */ isHTML = parent.nodeName === 'HTML';
        var /** @type {?} */ childrenRect = getBoundingClientRect(children);
        var /** @type {?} */ parentRect = getBoundingClientRect(parent);
        var /** @type {?} */ scrollParent = getScrollParent(children);
        var /** @type {?} */ styles = getStyleComputedProperty(parent);
        var /** @type {?} */ borderTopWidth = parseFloat(styles.borderTopWidth);
        var /** @type {?} */ borderLeftWidth = parseFloat(styles.borderLeftWidth);
        // In cases where the parent is fixed, we must ignore negative scroll in offset calc
        if (fixedPosition && isHTML) {
            parentRect.top = Math.max(parentRect.top, 0);
            parentRect.left = Math.max(parentRect.left, 0);
        }
        var /** @type {?} */ offsets = getClientRect({
            top: childrenRect.top - parentRect.top - borderTopWidth,
            left: childrenRect.left - parentRect.left - borderLeftWidth,
            width: childrenRect.width,
            height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0;
        // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.
        if (!isIE10 && isHTML) {
            var /** @type {?} */ marginTop = parseFloat(styles.marginTop);
            var /** @type {?} */ marginLeft = parseFloat(styles.marginLeft);
            offsets.top -= borderTopWidth - marginTop;
            offsets.bottom -= borderTopWidth - marginTop;
            offsets.left -= borderLeftWidth - marginLeft;
            offsets.right -= borderLeftWidth - marginLeft;
            // Attach marginTop and marginLeft because in some circumstances we may need them
            offsets.marginTop = marginTop;
            offsets.marginLeft = marginLeft;
        }
        if (isIE10 && !fixedPosition
            ? parent.contains(scrollParent)
            : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
            offsets = includeScroll(offsets, parent);
        }
        return offsets;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @param {?=} excludeScroll
     * @return {?}
     */
    function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll) {
        if (excludeScroll === void 0) {
            excludeScroll = false;
        }
        var /** @type {?} */ html = element.ownerDocument.documentElement;
        var /** @type {?} */ relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var /** @type {?} */ width = Math.max(html.clientWidth, window.innerWidth || 0);
        var /** @type {?} */ height = Math.max(html.clientHeight, window.innerHeight || 0);
        var /** @type {?} */ scrollTop = !excludeScroll ? getScroll(html) : 0;
        var /** @type {?} */ scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
        var /** @type {?} */ offset = {
            top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
            left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
            width: width,
            height: height
        };
        return getClientRect(offset);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function isFixed(element) {
        var /** @type {?} */ nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
            return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
            return true;
        }
        return isFixed(getParentNode(element));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @return {?}
     */
    function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE()) {
            return document.documentElement;
        }
        var /** @type {?} */ el = element.parentElement;
        while (el && getStyleComputedProperty(el, 'transform') === 'none') {
            el = el.parentElement;
        }
        return el || document.documentElement;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} padding
     * @param {?=} boundariesElement
     * @param {?=} fixedPosition
     * @return {?}
     */
    function getBoundaries(target, host, padding, boundariesElement, fixedPosition) {
        if (padding === void 0) {
            padding = 0;
        }
        if (fixedPosition === void 0) {
            fixedPosition = false;
        }
        // NOTE: 1 DOM access here
        var /** @type {?} */ boundaries = { top: 0, left: 0 };
        var /** @type {?} */ offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
        // Handle viewport case
        if (boundariesElement === 'viewport') {
            boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        }
        else {
            // Handle other cases based on DOM element used as boundaries
            var /** @type {?} */ boundariesNode = void 0;
            if (boundariesElement === 'scrollParent') {
                boundariesNode = getScrollParent(getParentNode(host));
                if (boundariesNode.nodeName === 'BODY') {
                    boundariesNode = target.ownerDocument.documentElement;
                }
            }
            else if (boundariesElement === 'window') {
                boundariesNode = target.ownerDocument.documentElement;
            }
            else {
                boundariesNode = boundariesElement;
            }
            var /** @type {?} */ offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
            // In case of HTML, we need a different computation
            if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
                var _a = getWindowSizes(target.ownerDocument), height = _a.height, width = _a.width;
                boundaries.top += offsets.top - offsets.marginTop;
                boundaries.bottom = Number(height) + Number(offsets.top);
                boundaries.left += offsets.left - offsets.marginLeft;
                boundaries.right = Number(width) + Number(offsets.left);
            }
            else {
                // for all the other DOM elements, this one is good
                boundaries = offsets;
            }
        }
        // Add paddings
        boundaries.left += padding;
        boundaries.top += padding;
        boundaries.right -= padding;
        boundaries.bottom -= padding;
        return boundaries;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} __0
     * @return {?}
     */
    function getArea(_a) {
        var width = _a.width, height = _a.height;
        return width * height;
    }
    /**
     * @param {?} placement
     * @param {?} refRect
     * @param {?} target
     * @param {?} host
     * @param {?=} allowedPositions
     * @param {?=} boundariesElement
     * @param {?=} padding
     * @return {?}
     */
    function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
        if (allowedPositions === void 0) {
            allowedPositions = ['top', 'left', 'bottom', 'right'];
        }
        if (boundariesElement === void 0) {
            boundariesElement = 'viewport';
        }
        if (padding === void 0) {
            padding = 0;
        }
        if (placement.indexOf('auto') === -1) {
            return placement;
        }
        var /** @type {?} */ boundaries = getBoundaries(target, host, padding, boundariesElement);
        var /** @type {?} */ rects = {
            top: {
                width: boundaries.width,
                height: refRect.top - boundaries.top
            },
            right: {
                width: boundaries.right - refRect.right,
                height: boundaries.height
            },
            bottom: {
                width: boundaries.width,
                height: boundaries.bottom - refRect.bottom
            },
            left: {
                width: refRect.left - boundaries.left,
                height: boundaries.height
            }
        };
        var /** @type {?} */ sortedAreas = Object.keys(rects)
            .map(function (key) {
            return (__assign({ key: key }, rects[key], { area: getArea(rects[key]) }));
        })
            .sort(function (a, b) { return b.area - a.area; });
        var /** @type {?} */ filteredAreas = sortedAreas.filter(function (_a) {
            var width = _a.width, height = _a.height;
            return width >= target.clientWidth && height >= target.clientHeight;
        });
        filteredAreas = allowedPositions
            .reduce(function (obj, key) {
            return __assign({}, obj, (_a = {}, _a[key] = filteredAreas[key], _a));
            var _a;
        }, {});
        var /** @type {?} */ computedPlacement = filteredAreas.length > 0
            ? filteredAreas[0].key
            : sortedAreas[0].key;
        var /** @type {?} */ variation = placement.split(' ')[1];
        target.className = target.className.replace(/auto/g, computedPlacement);
        return computedPlacement + (variation ? "-" + variation : '');
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function getOffsets(data) {
        return {
            width: data.offsets.target.width,
            height: data.offsets.target.height,
            left: Math.floor(data.offsets.target.left),
            top: Math.round(data.offsets.target.top),
            bottom: Math.round(data.offsets.target.bottom),
            right: Math.floor(data.offsets.target.right)
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Get the opposite placement of the given one
     * @param {?} placement
     * @return {?}
     */
    function getOppositePlacement(placement) {
        var /** @type {?} */ hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) { return hash[matched]; });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Get the opposite placement variation of the given one
     * @param {?} variation
     * @return {?}
     */
    function getOppositeVariation(variation) {
        if (variation === 'right') {
            return 'left';
        }
        else if (variation === 'left') {
            return 'right';
        }
        return variation;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Get the outer sizes of the given element (offset size + margins)
     * @param {?} element
     * @return {?}
     */
    function getOuterSizes(element) {
        var /** @type {?} */ window = element.ownerDocument.defaultView;
        var /** @type {?} */ styles = window.getComputedStyle(element);
        var /** @type {?} */ x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
        var /** @type {?} */ y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
        return {
            width: Number(element.offsetWidth) + y,
            height: Number(element.offsetHeight) + x
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} target
     * @param {?} host
     * @param {?=} fixedPosition
     * @return {?}
     */
    function getReferenceOffsets(target, host, fixedPosition) {
        if (fixedPosition === void 0) {
            fixedPosition = null;
        }
        var /** @type {?} */ commonOffsetParent = fixedPosition
            ? getFixedPositionOffsetParent(target)
            : findCommonOffsetParent(target, host);
        return getOffsetRectRelativeToArbitraryNode(host, commonOffsetParent, fixedPosition);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} target
     * @param {?} hostOffsets
     * @param {?} position
     * @return {?}
     */
    function getTargetOffsets(target, hostOffsets, position) {
        var /** @type {?} */ placement = position.split(' ')[0];
        // Get target node sizes
        var /** @type {?} */ targetRect = getOuterSizes(target);
        // Add position, width and height to our offsets object
        var /** @type {?} */ targetOffsets = {
            width: targetRect.width,
            height: targetRect.height
        };
        // depending by the target placement we have to compute its offsets slightly differently
        var /** @type {?} */ isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        var /** @type {?} */ mainSide = isHoriz ? 'top' : 'left';
        var /** @type {?} */ secondarySide = isHoriz ? 'left' : 'top';
        var /** @type {?} */ measurement = isHoriz ? 'height' : 'width';
        var /** @type {?} */ secondaryMeasurement = !isHoriz ? 'height' : 'width';
        targetOffsets[mainSide] =
            hostOffsets[mainSide] +
                hostOffsets[measurement] / 2 -
                targetRect[measurement] / 2;
        targetOffsets[secondarySide] = placement === secondarySide
            ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
            : hostOffsets[getOppositePlacement(secondarySide)];
        return targetOffsets;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Helper used to know if the given modifier is enabled.
     * @param {?} options
     * @param {?} modifierName
     * @return {?}
     */
    function isModifierEnabled(options, modifierName) {
        return options
            && options.modifiers
            && options.modifiers[modifierName]
            && options.modifiers[modifierName].enabled;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Tells if a given input is a number
     * @param {?} n
     * @return {?}
     */
    function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} data
     * @param {?=} renderer
     * @return {?}
     */
    function setAllStyles$$1(data, renderer) {
        var /** @type {?} */ target = data.instance.target;
        var /** @type {?} */ offsets = getOffsets(data);
        setStyles(target, {
            'will-change': 'transform',
            top: '0px',
            left: '0px',
            transform: "translate3d(" + offsets.left + "px, " + offsets.top + "px, 0px)"
        }, renderer);
        if (data.instance.arrow) {
            setStyles(data.instance.arrow, data.offsets.arrow, renderer);
        }
        if (data.placementAuto) {
            if (renderer) {
                renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement));
                renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement));
                renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, "s" + data.placement));
                if (target.className.match(/popover/g)) {
                    renderer.addClass(target, 'popover-auto');
                }
                if (target.className.match(/tooltip/g)) {
                    renderer.addClass(target, 'tooltip-auto');
                }
            }
            else {
                target.className = target.className.replace(/bs-popover-auto/g, "bs-popover-" + data.placement);
                target.className = target.className.replace(/bs-tooltip-auto/g, "bs-tooltip-" + data.placement);
                target.className = target.className.replace(/\sauto/g, "s" + data.placement);
                if (target.className.match(/popover/g)) {
                    target.classList.add('popover-auto');
                }
                if (target.className.match(/tooltip/g)) {
                    target.classList.add('tooltip-auto');
                }
            }
        }
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, "" + data.placement));
        }
        else {
            target.className = target.className.replace(/left|right|top|bottom/g, "" + data.placement);
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} element
     * @param {?} styles
     * @param {?=} renderer
     * @return {?}
     */
    function setStyles(element, styles, renderer) {
        Object.keys(styles).forEach(function (prop) {
            var /** @type {?} */ unit = '';
            // add unit if the value is numeric and is one of the following
            if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
                isNumeric(styles[prop])) {
                unit = 'px';
            }
            if (renderer) {
                renderer.setStyle(element, prop, "" + String(styles[prop]) + unit);
                return;
            }
            element.style[prop] = String(styles[prop]) + unit;
        });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function arrow(data) {
        var /** @type {?} */ targetOffsets = data.offsets.target;
        // if arrowElement is a string, suppose it's a CSS selector
        var /** @type {?} */ arrowElement = data.instance.target.querySelector('.arrow');
        // if arrowElement is not found, don't run the modifier
        if (!arrowElement) {
            return data;
        }
        var /** @type {?} */ isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
        var /** @type {?} */ len = isVertical ? 'height' : 'width';
        var /** @type {?} */ sideCapitalized = isVertical ? 'Top' : 'Left';
        var /** @type {?} */ side = sideCapitalized.toLowerCase();
        var /** @type {?} */ altSide = isVertical ? 'left' : 'top';
        var /** @type {?} */ opSide = isVertical ? 'bottom' : 'right';
        var /** @type {?} */ arrowElementSize = getOuterSizes(arrowElement)[len];
        // top/left side
        if (data.offsets.host[opSide] - arrowElementSize < targetOffsets[side]) {
            targetOffsets[side] -=
                targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
        }
        // bottom/right side
        if (Number(data.offsets.host[side]) + Number(arrowElementSize) > targetOffsets[opSide]) {
            targetOffsets[side] +=
                Number(data.offsets.host[side]) + Number(arrowElementSize) - Number(targetOffsets[opSide]);
        }
        targetOffsets = getClientRect(targetOffsets);
        // compute center of the target
        var /** @type {?} */ center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
        // Compute the sideValue using the updated target offsets
        // take target margin in account because we don't have this info available
        var /** @type {?} */ css = getStyleComputedProperty(data.instance.target);
        var /** @type {?} */ targetMarginSide = parseFloat(css["margin" + sideCapitalized]);
        var /** @type {?} */ targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
        var /** @type {?} */ sideValue = center - targetOffsets[side] - targetMarginSide - targetBorderSide;
        // prevent arrowElement from being placed not contiguously to its target
        sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
        data.offsets.arrow = (_a = {},
            _a[side] = Math.round(sideValue),
            _a[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
            ,
                _a);
        data.instance.arrow = arrowElement;
        return data;
        var _a;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function flip(data) {
        data.offsets.target = getClientRect(data.offsets.target);
        if (!isModifierEnabled(data.options, 'flip')) {
            data.offsets.target = __assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
            return data;
        }
        var /** @type {?} */ boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'viewport', false // positionFixed
        );
        var /** @type {?} */ placement = data.placement.split(' ')[0];
        var /** @type {?} */ variation = data.placement.split(' ')[1] || '';
        var /** @type {?} */ offsetsHost = data.offsets.host;
        var /** @type {?} */ target = data.instance.target;
        var /** @type {?} */ host = data.instance.host;
        var /** @type {?} */ adaptivePosition = variation
            ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
            : computeAutoPlacement('auto', offsetsHost, target, host);
        var /** @type {?} */ flipOrder = [placement, adaptivePosition];
        /* tslint:disable-next-line: cyclomatic-complexity */
        flipOrder.forEach(function (step, index) {
            if (placement !== step || flipOrder.length === index + 1) {
                return data;
            }
            placement = data.placement.split(' ')[0];
            // using floor because the host offsets may contain decimals we are not going to consider here
            var /** @type {?} */ overlapsRef = (placement === 'left' &&
                Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
                (placement === 'right' &&
                    Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
                (placement === 'top' &&
                    Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
                (placement === 'bottom' &&
                    Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
            var /** @type {?} */ overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
            var /** @type {?} */ overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
            var /** @type {?} */ overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
            var /** @type {?} */ overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
            var /** @type {?} */ overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
                (placement === 'right' && overflowsRight) ||
                (placement === 'top' && overflowsTop) ||
                (placement === 'bottom' && overflowsBottom);
            // flip the variation if required
            var /** @type {?} */ isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
            var /** @type {?} */ flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
                (isVertical && variation === 'right' && overflowsRight) ||
                (!isVertical && variation === 'left' && overflowsTop) ||
                (!isVertical && variation === 'right' && overflowsBottom));
            if (overlapsRef || overflowsBoundaries || flippedVariation) {
                if (overlapsRef || overflowsBoundaries) {
                    placement = flipOrder[index + 1];
                }
                if (flippedVariation) {
                    variation = getOppositeVariation(variation);
                }
                data.placement = placement + (variation ? " " + variation : '');
                data.offsets.target = __assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
            }
        });
        return data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} targetElement
     * @param {?} hostElement
     * @param {?} position
     * @param {?} options
     * @return {?}
     */
    function initData(targetElement, hostElement, position, options) {
        var /** @type {?} */ hostElPosition = getReferenceOffsets(targetElement, hostElement);
        var /** @type {?} */ placementAuto = !!position.match(/auto/g);
        // support old placements 'auto left|right|top|bottom'
        var /** @type {?} */ placement = !!position.match(/auto\s(left|right|top|bottom)/g)
            ? position.split(' ')[1] || ''
            : position;
        var /** @type {?} */ targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
        placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
        return {
            options: options,
            instance: {
                target: targetElement,
                host: hostElement,
                arrow: null
            },
            offsets: {
                target: targetOffset,
                host: hostElPosition,
                arrow: null
            },
            positionFixed: false,
            placement: placement,
            placementAuto: placementAuto
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function preventOverflow(data) {
        // NOTE: DOM access here
        // resets the targetOffsets's position so that the document size can be calculated excluding
        // the size of the targetOffsets element itself
        var /** @type {?} */ transformProp = 'transform';
        var /** @type {?} */ targetStyles = data.instance.target.style; // assignment to help minification
        var top = targetStyles.top, left = targetStyles.left, _a = transformProp, transform = targetStyles[_a];
        targetStyles.top = '';
        targetStyles.left = '';
        targetStyles[transformProp] = '';
        var /** @type {?} */ boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
        'scrollParent', false // positionFixed
        );
        // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed
        targetStyles.top = top;
        targetStyles.left = left;
        targetStyles[transformProp] = transform;
        var /** @type {?} */ order = ['left', 'right', 'top', 'bottom'];
        var /** @type {?} */ check = {
            primary: /**
             * @param {?} placement
             * @return {?}
             */ function (placement) {
                var /** @type {?} */ value = data.offsets.target[placement];
                if (data.offsets.target[placement] < boundaries[placement] &&
                    !false // options.escapeWithReference
                ) {
                    value = Math.max(data.offsets.target[placement], boundaries[placement]);
                }
                return _a = {}, _a[placement] = value, _a;
                var _a;
            },
            secondary: /**
             * @param {?} placement
             * @return {?}
             */ function (placement) {
                var /** @type {?} */ mainSide = placement === 'right' ? 'left' : 'top';
                var /** @type {?} */ value = data.offsets.target[mainSide];
                if (data.offsets.target[placement] > boundaries[placement] &&
                    !false // escapeWithReference
                ) {
                    value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                        (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
                }
                return _a = {}, _a[mainSide] = value, _a;
                var _a;
            }
        };
        var /** @type {?} */ side;
        order.forEach(function (placement) {
            side = ['left', 'top']
                .indexOf(placement) !== -1
                ? 'primary'
                : 'secondary';
            data.offsets.target = __assign({}, data.offsets.target, check[side](placement));
        });
        return data;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} data
     * @return {?}
     */
    function shift(data) {
        var /** @type {?} */ placement = data.placement;
        var /** @type {?} */ basePlacement = placement.split(' ')[0];
        var /** @type {?} */ shiftvariation = placement.split(' ')[1];
        if (shiftvariation) {
            var _a = data.offsets, host = _a.host, target = _a.target;
            var /** @type {?} */ isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
            var /** @type {?} */ side = isVertical ? 'left' : 'top';
            var /** @type {?} */ measurement = isVertical ? 'width' : 'height';
            var /** @type {?} */ shiftOffsets = {
                left: (_b = {}, _b[side] = host[side], _b),
                right: (_c = {},
                    _c[side] = host[side] + host[measurement] - host[measurement],
                    _c)
            };
            data.offsets.target = __assign({}, target, shiftOffsets[shiftvariation]);
        }
        return data;
        var _b, _c;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var Positioning = (function () {
        function Positioning() {
        }
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
        Positioning.prototype.position = /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
            function (hostElement, targetElement, round) {
                if (round === void 0) {
                    round = true;
                }
                return this.offset(hostElement, targetElement, false);
            };
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
        Positioning.prototype.offset = /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?=} round
         * @return {?}
         */
            function (hostElement, targetElement, round) {
                if (round === void 0) {
                    round = true;
                }
                return getReferenceOffsets(targetElement, hostElement);
            };
        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} appendToBody
         * @param {?=} options
         * @return {?}
         */
        Positioning.prototype.positionElements = /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} position
         * @param {?=} appendToBody
         * @param {?=} options
         * @return {?}
         */
            function (hostElement, targetElement, position, appendToBody, options) {
                var /** @type {?} */ chainOfModifiers = [flip, shift, preventOverflow, arrow];
                return chainOfModifiers.reduce(function (modifiedData, modifier) { return modifier(modifiedData); }, initData(targetElement, hostElement, position, options));
            };
        return Positioning;
    }());
    var /** @type {?} */ positionService = new Positioning();
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} options
     * @param {?=} renderer
     * @return {?}
     */
    function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
        var /** @type {?} */ data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
        setAllStyles$$1(data, renderer);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PositioningService = (function () {
        function PositioningService(rendererFactory, platformId) {
            var _this = this;
            this.update$$ = new rxjs.Subject();
            this.positionElements = new Map();
            if (common.isPlatformBrowser(platformId)) {
                rxjs.merge(rxjs.fromEvent(window, 'scroll'), rxjs.fromEvent(window, 'resize'), rxjs.of(0, rxjs.animationFrameScheduler), this.update$$)
                    .subscribe(function () {
                    _this.positionElements
                        .forEach(function (positionElement) {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                    });
                });
            }
        }
        /**
         * @param {?} options
         * @return {?}
         */
        PositioningService.prototype.position = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.addPositionElement(options);
                this.update$$.next();
            };
        /**
         * @param {?} options
         * @return {?}
         */
        PositioningService.prototype.addPositionElement = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.positionElements.set(_getHtmlElement(options.element), options);
            };
        /**
         * @param {?} elRef
         * @return {?}
         */
        PositioningService.prototype.deletePositionElement = /**
         * @param {?} elRef
         * @return {?}
         */
            function (elRef) {
                this.positionElements.delete(_getHtmlElement(elRef));
            };
        /**
         * @param {?} options
         * @return {?}
         */
        PositioningService.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                this.options = options;
            };
        PositioningService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        PositioningService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2, },
                { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
            ];
        };
        return PositioningService;
    }());
    /**
     * @param {?} element
     * @return {?}
     */
    function _getHtmlElement(element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof core.ElementRef) {
            return element.nativeElement;
        }
        return element;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.positionElements = positionElements;
    exports.Positioning = Positioning;
    exports.PositioningService = PositioningService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3NpdGlvbmluZy51bWQuanMubWFwIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRQYXJlbnROb2RlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFNjcm9sbFBhcmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9pc0Jyb3dzZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNJRS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRPZmZzZXRQYXJlbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNPZmZzZXRDb250YWluZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Um9vdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9maW5kQ29tbW9uT2Zmc2V0UGFyZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldEJvcmRlcnNTaXplLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFdpbmRvd1NpemVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFNjcm9sbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRDbGllbnRSZWN0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9pbmNsdWRlU2Nyb2xsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNGaXhlZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldEJvdW5kYXJpZXMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T2Zmc2V0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRPcHBvc2l0ZVZhcmlhdGlvbi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRPdXRlclNpemVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFJlZmVyZW5jZU9mZnNldHMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0VGFyZ2V0T2Zmc2V0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9pc01vZGlmaWVyRW5hYmxlZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9pc051bWVyaWMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvc2V0QWxsU3R5bGVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL3NldFN0eWxlcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9tb2RpZmllcnMvYXJyb3cudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2ZsaXAudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2luaXREYXRhLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9wcmV2ZW50T3ZlcmZsb3cudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvbW9kaWZpZXJzL3NoaWZ0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL25nLXBvc2l0aW9uaW5nLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKipcclxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcGVydHk/OiBzdHJpbmcpOiBhbnkge1xyXG4gIGlmIChlbGVtZW50Lm5vZGVUeXBlICE9PSAxKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXHJcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gIGNvbnN0IGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xyXG5cclxuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwYXJlbnROb2RlIG9yIHRoZSBob3N0IG9mIHRoZSBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShlbGVtZW50OiBhbnkpOiBhbnkge1xyXG4gIGlmIChlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgIHJldHVybiBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZSB8fCBlbGVtZW50Lmhvc3Q7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcclxuICovXHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgZ2V0UGFyZW50Tm9kZSB9IGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQ6IGFueSk6IGFueSB7XHJcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xyXG4gICAgY2FzZSAnSFRNTCc6XHJcbiAgICBjYXNlICdCT0RZJzpcclxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xyXG4gICAgY2FzZSAnI2RvY3VtZW50JzpcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgfVxyXG5cclxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcclxuICBjb25zdCB7IG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xyXG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KFN0cmluZyhvdmVyZmxvdykgKyBTdHJpbmcob3ZlcmZsb3dZKSArIFN0cmluZyhvdmVyZmxvd1gpKSkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBpc0Jyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xyXG4iLCIvKipcclxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxyXG4gKi9cclxuaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnLi9pc0Jyb3dzZXInO1xyXG5cclxuY29uc3QgaXNJRTExID0gaXNCcm93c2VyICYmICEhKCh3aW5kb3cgYXMgYW55KS5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpO1xyXG5jb25zdCBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJRSh2ZXJzaW9uPzogbnVtYmVyKSB7XHJcbiAgaWYgKHZlcnNpb24gPT09IDExKSB7XHJcbiAgICByZXR1cm4gaXNJRTExO1xyXG4gIH1cclxuICBpZiAodmVyc2lvbiA9PT0gMTApIHtcclxuICAgIHJldHVybiBpc0lFMTA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNJRTExIHx8IGlzSUUxMDtcclxufVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudDogYW55KTogYW55IHtcclxuICBpZiAoIWVsZW1lbnQpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBub09mZnNldFBhcmVudCA9IGlzSUUoMTApID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XHJcblxyXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXHJcbiAgbGV0IG9mZnNldFBhcmVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50IHx8IG51bGw7XHJcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcclxuXHJcbiAgbGV0IHNpYmxpbmc6IGFueTtcclxuXHJcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcclxuICAgIHNpYmxpbmcgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIG9mZnNldFBhcmVudCA9IHNpYmxpbmcub2Zmc2V0UGFyZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xyXG5cclxuICBpZiAoIW5vZGVOYW1lIHx8IG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgcmV0dXJuIHNpYmxpbmcgPyBzaWJsaW5nLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxyXG4gIC8vIG5vIG9mZnNldFBhcmVudCBpcyBwcmVzZW50LCBJIGhhdGUgdGhpcyBqb2IuLi5cclxuICBpZiAoXHJcbiAgICBbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJlxyXG4gICAgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KG9mZnNldFBhcmVudCwgJ3Bvc2l0aW9uJykgPT09ICdzdGF0aWMnXHJcbiAgKSB7XHJcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xyXG59XHJcbiIsImltcG9ydCB7IGdldE9mZnNldFBhcmVudCB9IGZyb20gJy4vZ2V0T2Zmc2V0UGFyZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50OiBhbnkpIHtcclxuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlbGVtZW50O1xyXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgbm9kZU5hbWUgPT09ICdIVE1MJyB8fCBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCkgPT09IGVsZW1lbnRcclxuICApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBGaW5kcyB0aGUgcm9vdCBub2RlIChkb2N1bWVudCwgc2hhZG93RE9NIHJvb3QpIG9mIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um9vdChub2RlOiBOb2RlKTogYW55IHtcclxuICBpZiAobm9kZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gZ2V0Um9vdChub2RlLnBhcmVudE5vZGUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5vZGU7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEZpbmRzIHRoZSBvZmZzZXQgcGFyZW50IGNvbW1vbiB0byB0aGUgdHdvIHByb3ZpZGVkIG5vZGVzXHJcbiAqL1xyXG5pbXBvcnQgeyBpc09mZnNldENvbnRhaW5lciB9IGZyb20gJy4vaXNPZmZzZXRDb250YWluZXInO1xyXG5pbXBvcnQgeyBnZXRSb290IH0gZnJvbSAnLi9nZXRSb290JztcclxuaW1wb3J0IHsgZ2V0T2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDE6IEhUTUxFbGVtZW50LCBlbGVtZW50MjogSFRNTEVsZW1lbnQpOiBhbnkge1xyXG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxyXG4gIGlmICghZWxlbWVudDEgfHwgIWVsZW1lbnQxLm5vZGVUeXBlIHx8ICFlbGVtZW50MiB8fCAhZWxlbWVudDIubm9kZVR5cGUpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyBIZXJlIHdlIG1ha2Ugc3VyZSB0byBnaXZlIGFzIFwic3RhcnRcIiB0aGUgZWxlbWVudCB0aGF0IGNvbWVzIGZpcnN0IGluIHRoZSBET01cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWJpdHdpc2UgKi9cclxuICBjb25zdCBvcmRlciA9IGVsZW1lbnQxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQyKSAmIE5vZGUuRE9DVU1FTlRfUE9TSVRJT05fRk9MTE9XSU5HO1xyXG5cclxuICBjb25zdCBzdGFydCA9IG9yZGVyID8gZWxlbWVudDEgOiBlbGVtZW50MjtcclxuICBjb25zdCBlbmQgPSBvcmRlciA/IGVsZW1lbnQyIDogZWxlbWVudDE7XHJcblxyXG4gIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXHJcbiAgY29uc3QgcmFuZ2UgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpO1xyXG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcclxuICByYW5nZS5zZXRFbmQoZW5kLCAwKTtcclxuICBjb25zdCB7IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyIH0gPSByYW5nZTtcclxuXHJcbiAgLy8gQm90aCBub2RlcyBhcmUgaW5zaWRlICNkb2N1bWVudFxyXG4gIGlmIChcclxuICAgIChlbGVtZW50MSAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIgJiZcclxuICAgICAgZWxlbWVudDIgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSB8fFxyXG4gICAgc3RhcnQuY29udGFpbnMoZW5kKVxyXG4gICkge1xyXG4gICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xyXG4gICAgICByZXR1cm4gY29tbW9uQW5jZXN0b3JDb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChjb21tb25BbmNlc3RvckNvbnRhaW5lcik7XHJcbiAgfVxyXG5cclxuICAvLyBvbmUgb2YgdGhlIG5vZGVzIGlzIGluc2lkZSBzaGFkb3dET00sIGZpbmQgd2hpY2ggb25lXHJcbiAgY29uc3QgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XHJcbiAgaWYgKGVsZW1lbnQxcm9vdC5ob3N0KSB7XHJcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MXJvb3QuaG9zdCwgZWxlbWVudDIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MSwgZ2V0Um9vdChlbGVtZW50MikuaG9zdCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvcmRlcnNTaXplKHN0eWxlczogQ1NTU3R5bGVEZWNsYXJhdGlvbiwgYXhpczogc3RyaW5nKSB7XHJcbiAgY29uc3Qgc2lkZUEgPSBheGlzID09PSAneCcgPyAnTGVmdCcgOiAnVG9wJztcclxuICBjb25zdCBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQX1XaWR0aGBdKSArXHJcbiAgICBwYXJzZUZsb2F0KHN0eWxlc1tgYm9yZGVyJHtzaWRlQn1XaWR0aGBdKVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4vaXNJRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRTaXplKGF4aXM6IHN0cmluZywgYm9keTogSFRNTEVsZW1lbnQsIGh0bWw6IEhUTUxFbGVtZW50LCBjb21wdXRlZFN0eWxlOiBDU1NTdHlsZURlY2xhcmF0aW9uKSB7XHJcbiAgcmV0dXJuIE1hdGgubWF4KFxyXG4gICAgYm9keVtgb2Zmc2V0JHtheGlzfWBdLFxyXG4gICAgYm9keVtgc2Nyb2xsJHtheGlzfWBdLFxyXG4gICAgaHRtbFtgY2xpZW50JHtheGlzfWBdLFxyXG4gICAgaHRtbFtgb2Zmc2V0JHtheGlzfWBdLFxyXG4gICAgaHRtbFtgc2Nyb2xsJHtheGlzfWBdLFxyXG4gICAgaXNJRSgxMClcclxuICAgICAgPyAocGFyc2VJbnQoaHRtbFtgb2Zmc2V0JHtheGlzfWBdLCAxMCkgK1xyXG4gICAgICBwYXJzZUludChjb21wdXRlZFN0eWxlW2BtYXJnaW4ke2F4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCd9YF0sIDEwKSArXHJcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnQm90dG9tJyA6ICdSaWdodCd9YF0sIDEwKSlcclxuICAgIDogMFxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dTaXplcyhkb2N1bWVudDogRG9jdW1lbnQpIHtcclxuICBjb25zdCBib2R5ID0gZG9jdW1lbnQuYm9keTtcclxuICBjb25zdCBodG1sID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIGNvbnN0IGNvbXB1dGVkU3R5bGUgPSBpc0lFKDEwKSAmJiBnZXRDb21wdXRlZFN0eWxlKGh0bWwpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaGVpZ2h0OiBnZXRTaXplKCdIZWlnaHQnLCBib2R5LCBodG1sLCBjb21wdXRlZFN0eWxlKSxcclxuICAgIHdpZHRoOiBnZXRTaXplKCdXaWR0aCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpXHJcbiAgfTtcclxufVxyXG4iLCIvKipcclxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzaWRlID0gJ3RvcCcpIHtcclxuICBjb25zdCB1cHBlclNpZGUgPSBzaWRlID09PSAndG9wJyA/ICdzY3JvbGxUb3AnIDogJ3Njcm9sbExlZnQnO1xyXG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcclxuXHJcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgY29uc3QgaHRtbCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JvbGxpbmdFbGVtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQgfHwgaHRtbDtcclxuXHJcbiAgICByZXR1cm4gc2Nyb2xsaW5nRWxlbWVudFt1cHBlclNpZGVdO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnRbdXBwZXJTaWRlXTtcclxufVxyXG4iLCIvKipcclxuICogR2l2ZW4gZWxlbWVudCBvZmZzZXRzLCBnZW5lcmF0ZSBhbiBvdXRwdXQgc2ltaWxhciB0byBnZXRCb3VuZGluZ0NsaWVudFJlY3RcclxuICovXHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudFJlY3Qob2Zmc2V0czogT2Zmc2V0cyk6IE9mZnNldHMge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5vZmZzZXRzLFxyXG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXHJcbiAgICBib3R0b206IG9mZnNldHMudG9wICsgb2Zmc2V0cy5oZWlnaHRcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXQgYm91bmRpbmcgY2xpZW50IHJlY3Qgb2YgZ2l2ZW4gZWxlbWVudFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBnZXRCb3JkZXJzU2l6ZSB9IGZyb20gJy4vZ2V0Qm9yZGVyc1NpemUnO1xyXG5pbXBvcnQgeyBnZXRXaW5kb3dTaXplcyB9IGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xyXG5pbXBvcnQgeyBnZXRTY3JvbGwgfSBmcm9tICcuL2dldFNjcm9sbCc7XHJcbmltcG9ydCB7IGdldENsaWVudFJlY3QgfSBmcm9tICcuL2dldENsaWVudFJlY3QnO1xyXG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogT2Zmc2V0cyB7XHJcbiAgbGV0IHJlY3Q6IGFueSA9IHt9O1xyXG5cclxuICAvLyBJRTEwIDEwIEZJWDogUGxlYXNlLCBkb24ndCBhc2ssIHRoZSBlbGVtZW50IGlzbid0XHJcbiAgLy8gY29uc2lkZXJlZCBpbiBET00gaW4gc29tZSBjaXJjdW1zdGFuY2VzLi4uXHJcbiAgLy8gVGhpcyBpc24ndCByZXByb2R1Y2libGUgaW4gSUUxMCBjb21wYXRpYmlsaXR5IG1vZGUgb2YgSUUxMVxyXG4gIHRyeSB7XHJcbiAgICBpZiAoaXNJRSgxMCkpIHtcclxuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XHJcbiAgICAgIGNvbnN0IHNjcm9sbExlZnQgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ2xlZnQnKTtcclxuICAgICAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wO1xyXG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcclxuICAgICAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wO1xyXG4gICAgICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0OiBhbnkgPSB7XHJcbiAgICBsZWZ0OiByZWN0LmxlZnQsXHJcbiAgICB0b3A6IHJlY3QudG9wLFxyXG4gICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXHJcbiAgICBoZWlnaHQ6IHJlY3QuYm90dG9tIC0gcmVjdC50b3BcclxuICB9O1xyXG5cclxuICAvLyBzdWJ0cmFjdCBzY3JvbGxiYXIgc2l6ZSBmcm9tIHNpemVzXHJcbiAgY29uc3Qgc2l6ZXM6IGFueSA9IGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJyA/IGdldFdpbmRvd1NpemVzKGVsZW1lbnQub3duZXJEb2N1bWVudCkgOiB7fTtcclxuICBjb25zdCB3aWR0aCA9XHJcbiAgICBzaXplcy53aWR0aCB8fCBlbGVtZW50LmNsaWVudFdpZHRoIHx8IHJlc3VsdC5yaWdodCAtIHJlc3VsdC5sZWZ0O1xyXG4gIGNvbnN0IGhlaWdodCA9XHJcbiAgICBzaXplcy5oZWlnaHQgfHwgZWxlbWVudC5jbGllbnRIZWlnaHQgfHwgcmVzdWx0LmJvdHRvbSAtIHJlc3VsdC50b3A7XHJcblxyXG4gIGxldCBob3JpelNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0V2lkdGggLSB3aWR0aDtcclxuICBsZXQgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xyXG5cclxuICAvLyBpZiBhbiBoeXBvdGhldGljYWwgc2Nyb2xsYmFyIGlzIGRldGVjdGVkLCB3ZSBtdXN0IGJlIHN1cmUgaXQncyBub3QgYSBgYm9yZGVyYFxyXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xyXG4gIGlmIChob3JpelNjcm9sbGJhciB8fCB2ZXJ0U2Nyb2xsYmFyKSB7XHJcbiAgICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XHJcbiAgICBob3JpelNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd4Jyk7XHJcbiAgICB2ZXJ0U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3knKTtcclxuXHJcbiAgICByZXN1bHQud2lkdGggLT0gaG9yaXpTY3JvbGxiYXI7XHJcbiAgICByZXN1bHQuaGVpZ2h0IC09IHZlcnRTY3JvbGxiYXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChyZXN1bHQpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcclxuICovXHJcbmltcG9ydCB7IGdldFNjcm9sbCB9IGZyb20gJy4vZ2V0U2Nyb2xsJztcclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0OiBPZmZzZXRzLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgc3VidHJhY3QgPSBmYWxzZSkge1xyXG4gIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XHJcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xyXG4gIGNvbnN0IG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XHJcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XHJcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XHJcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcclxuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcclxuXHJcbiAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IH0gZnJvbSAnLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xyXG5pbXBvcnQgeyBnZXRDbGllbnRSZWN0IH0gZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsUGFyZW50IH0gZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGluY2x1ZGVTY3JvbGwgfSBmcm9tICcuL2luY2x1ZGVTY3JvbGwnO1xyXG5pbXBvcnQgeyBpc0lFIGFzIHJ1bklzSUUgfSBmcm9tICcuL2lzSUUnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoXHJcbiAgY2hpbGRyZW46IEhUTUxFbGVtZW50LFxyXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgZml4ZWRQb3NpdGlvbiA9IGZhbHNlXHJcbik6IE9mZnNldHMge1xyXG4gIGNvbnN0IGlzSUUxMCA9IHJ1bklzSUUoMTApO1xyXG4gIGNvbnN0IGlzSFRNTCA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnO1xyXG4gIGNvbnN0IGNoaWxkcmVuUmVjdDogYW55ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcclxuICBjb25zdCBwYXJlbnRSZWN0OiBhbnkgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcclxuICBjb25zdCBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcclxuICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKTtcclxuICBjb25zdCBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpO1xyXG5cclxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcclxuICBpZiAoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcclxuICAgIHBhcmVudFJlY3QudG9wID0gTWF0aC5tYXgocGFyZW50UmVjdC50b3AsIDApO1xyXG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcclxuICB9XHJcblxyXG4gIGxldCBvZmZzZXRzOiBPZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XHJcbiAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxyXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXHJcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxyXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0XHJcbiAgfSk7XHJcblxyXG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcclxuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xyXG5cclxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcclxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcclxuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxyXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cclxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcclxuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCk7XHJcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCk7XHJcblxyXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XHJcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcclxuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xyXG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xyXG5cclxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxyXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XHJcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uXHJcbiAgICAgID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudClcclxuICAgICAgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJ1xyXG4gICkge1xyXG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvZmZzZXRzO1xyXG59XHJcbiIsImltcG9ydCB7IGdldENsaWVudFJlY3QgfSBmcm9tICcuL2dldENsaWVudFJlY3QnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XHJcbmltcG9ydCB7IGdldFNjcm9sbCB9IGZyb20gJy4vZ2V0U2Nyb2xsJztcclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBleGNsdWRlU2Nyb2xsID0gZmFsc2UpOiBPZmZzZXRzIHtcclxuICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICBjb25zdCByZWxhdGl2ZU9mZnNldCA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShlbGVtZW50LCBodG1sKTtcclxuICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KGh0bWwuY2xpZW50V2lkdGgsIHdpbmRvdy5pbm5lcldpZHRoIHx8IDApO1xyXG4gIGNvbnN0IGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcclxuICBjb25zdCBzY3JvbGxMZWZ0ID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCwgJ2xlZnQnKSA6IDA7XHJcblxyXG4gIGNvbnN0IG9mZnNldCA9IHtcclxuICAgIHRvcDogc2Nyb2xsVG9wIC0gTnVtYmVyKHJlbGF0aXZlT2Zmc2V0LnRvcCkgKyBOdW1iZXIocmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wKSxcclxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSBOdW1iZXIocmVsYXRpdmVPZmZzZXQubGVmdCkgKyBOdW1iZXIocmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCksXHJcbiAgICB3aWR0aCxcclxuICAgIGhlaWdodFxyXG4gIH07XHJcblxyXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KG9mZnNldCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBnZXRQYXJlbnROb2RlIH0gZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ZpeGVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XHJcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xyXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNGaXhlZChnZXRQYXJlbnROb2RlKGVsZW1lbnQpKTtcclxufVxyXG4iLCIvKipcclxuICogRmluZHMgdGhlIGZpcnN0IHBhcmVudCBvZiBhbiBlbGVtZW50IHRoYXQgaGFzIGEgdHJhbnNmb3JtZWQgcHJvcGVydHkgZGVmaW5lZFxyXG4gKi9cclxuXHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4vaXNJRSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcclxuICAvLyBUaGlzIGNoZWNrIGlzIG5lZWRlZCB0byBhdm9pZCBlcnJvcnMgaW4gY2FzZSBvbmUgb2YgdGhlIGVsZW1lbnRzIGlzbid0IGRlZmluZWQgZm9yIGFueSByZWFzb25cclxuICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQucGFyZW50RWxlbWVudCB8fCBpc0lFKCkpIHtcclxuICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIGxldCBlbCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcbiAgd2hpbGUgKGVsICYmIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbCwgJ3RyYW5zZm9ybScpID09PSAnbm9uZScpIHtcclxuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbn1cclxuIiwiLyoqXHJcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cclxuICovXHJcbmltcG9ydCB7IGdldFNjcm9sbFBhcmVudCB9IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcclxuaW1wb3J0IHsgZ2V0UGFyZW50Tm9kZSB9IGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XHJcbmltcG9ydCB7IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgfSBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XHJcbmltcG9ydCB7IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0V2luZG93U2l6ZXMgfSBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcclxuaW1wb3J0IHsgaXNGaXhlZCB9IGZyb20gJy4vaXNGaXhlZCc7XHJcbmltcG9ydCB7IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kYXJpZXMoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0OiBIVE1MRWxlbWVudCxcclxuICBwYWRkaW5nID0gMCxcclxuICBib3VuZGFyaWVzRWxlbWVudDogc3RyaW5nLFxyXG4gIGZpeGVkUG9zaXRpb24gPSBmYWxzZVxyXG4pIHtcclxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxyXG5cclxuICBsZXQgYm91bmRhcmllczogYW55ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCh0YXJnZXQpIDogZmluZENvbW1vbk9mZnNldFBhcmVudCh0YXJnZXQsIGhvc3QpO1xyXG5cclxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxyXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0Jykge1xyXG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXHJcbiAgICBsZXQgYm91bmRhcmllc05vZGU7XHJcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XHJcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoaG9zdCkpO1xyXG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xyXG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xyXG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHRhcmdldC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShcclxuICAgICAgYm91bmRhcmllc05vZGUsXHJcbiAgICAgIG9mZnNldFBhcmVudCxcclxuICAgICAgZml4ZWRQb3NpdGlvblxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cclxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcclxuICAgICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRXaW5kb3dTaXplcyh0YXJnZXQub3duZXJEb2N1bWVudCk7XHJcbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XHJcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gTnVtYmVyKGhlaWdodCkgKyBOdW1iZXIob2Zmc2V0cy50b3ApO1xyXG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xyXG4gICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gTnVtYmVyKHdpZHRoKSArIE51bWJlcihvZmZzZXRzLmxlZnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXHJcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhZGRpbmdzXHJcbiAgYm91bmRhcmllcy5sZWZ0ICs9IHBhZGRpbmc7XHJcbiAgYm91bmRhcmllcy50b3AgKz0gcGFkZGluZztcclxuICBib3VuZGFyaWVzLnJpZ2h0IC09IHBhZGRpbmc7XHJcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gcGFkZGluZztcclxuXHJcbiAgcmV0dXJuIGJvdW5kYXJpZXM7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFV0aWxpdHkgdXNlZCB0byB0cmFuc2Zvcm0gdGhlIGBhdXRvYCBwbGFjZW1lbnQgdG8gdGhlIHBsYWNlbWVudCB3aXRoIG1vcmVcclxuICogYXZhaWxhYmxlIHNwYWNlLlxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0Qm91bmRhcmllcyB9IGZyb20gJy4vZ2V0Qm91bmRhcmllcyc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZnVuY3Rpb24gZ2V0QXJlYSh7IHdpZHRoLCBoZWlnaHQgfTogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSkge1xyXG4gIHJldHVybiB3aWR0aCAqIGhlaWdodDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVBdXRvUGxhY2VtZW50KFxyXG4gIHBsYWNlbWVudDogc3RyaW5nLFxyXG4gIHJlZlJlY3Q6IE9mZnNldHMsXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0OiBIVE1MRWxlbWVudCxcclxuICBhbGxvd2VkUG9zaXRpb25zOiBhbnlbXSA9IFsndG9wJywgJ2xlZnQnLCAnYm90dG9tJywgJ3JpZ2h0J10sXHJcbiAgYm91bmRhcmllc0VsZW1lbnQgPSAndmlld3BvcnQnLFxyXG4gIHBhZGRpbmcgPSAwXHJcbikge1xyXG4gIGlmIChwbGFjZW1lbnQuaW5kZXhPZignYXV0bycpID09PSAtMSkge1xyXG4gICAgcmV0dXJuIHBsYWNlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKHRhcmdldCwgaG9zdCwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpO1xyXG5cclxuICBjb25zdCByZWN0czogYW55ID0ge1xyXG4gICAgdG9wOiB7XHJcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxyXG4gICAgICBoZWlnaHQ6IHJlZlJlY3QudG9wIC0gYm91bmRhcmllcy50b3BcclxuICAgIH0sXHJcbiAgICByaWdodDoge1xyXG4gICAgICB3aWR0aDogYm91bmRhcmllcy5yaWdodCAtIHJlZlJlY3QucmlnaHQsXHJcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcclxuICAgIH0sXHJcbiAgICBib3R0b206IHtcclxuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxyXG4gICAgfSxcclxuICAgIGxlZnQ6IHtcclxuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpXHJcbiAgICAubWFwKGtleSA9PiAoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIC4uLnJlY3RzW2tleV0sXHJcbiAgICAgIGFyZWE6IGdldEFyZWEocmVjdHNba2V5XSlcclxuICAgIH0pKVxyXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuYXJlYSAtIGEuYXJlYSk7XHJcblxyXG4gIGxldCBmaWx0ZXJlZEFyZWFzOiBhbnlbXSA9IHNvcnRlZEFyZWFzLmZpbHRlcihcclxuICAgICh7IHdpZHRoLCBoZWlnaHQgfSkgPT5cclxuICAgICAgd2lkdGggPj0gdGFyZ2V0LmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSB0YXJnZXQuY2xpZW50SGVpZ2h0XHJcbiAgKTtcclxuXHJcbiAgZmlsdGVyZWRBcmVhcyA9IGFsbG93ZWRQb3NpdGlvbnNcclxuICAgIC5yZWR1Y2UoKG9iaiwga2V5KSA9PiB7XHJcbiAgICAgIHJldHVybiB7IC4uLm9iaiwgW2tleV06IGZpbHRlcmVkQXJlYXNba2V5XSB9O1xyXG4gICAgfSwge30pO1xyXG5cclxuICBjb25zdCBjb21wdXRlZFBsYWNlbWVudDogc3RyaW5nID0gZmlsdGVyZWRBcmVhcy5sZW5ndGggPiAwXHJcbiAgICA/IGZpbHRlcmVkQXJlYXNbMF0ua2V5XHJcbiAgICA6IHNvcnRlZEFyZWFzWzBdLmtleTtcclxuXHJcbiAgY29uc3QgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV07XHJcblxyXG4gIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2F1dG8vZywgY29tcHV0ZWRQbGFjZW1lbnQpO1xyXG5cclxuICByZXR1cm4gY29tcHV0ZWRQbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYC0ke3ZhcmlhdGlvbn1gIDogJycpO1xyXG59XHJcbiIsImltcG9ydCB7IERhdGEsIE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldHMoZGF0YTogRGF0YSk6IE9mZnNldHMge1xyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogZGF0YS5vZmZzZXRzLnRhcmdldC53aWR0aCxcclxuICAgIGhlaWdodDogZGF0YS5vZmZzZXRzLnRhcmdldC5oZWlnaHQsXHJcbiAgICBsZWZ0OiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQubGVmdCksXHJcbiAgICB0b3A6IE1hdGgucm91bmQoZGF0YS5vZmZzZXRzLnRhcmdldC50b3ApLFxyXG4gICAgYm90dG9tOiBNYXRoLnJvdW5kKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSxcclxuICAgIHJpZ2h0OiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpXHJcbiAgfTtcclxufVxyXG4iLCIvKipcclxuICogR2V0IHRoZSBvcHBvc2l0ZSBwbGFjZW1lbnQgb2YgdGhlIGdpdmVuIG9uZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudDogc3RyaW5nKSB7XHJcbiAgY29uc3QgaGFzaCA9IHsgbGVmdDogJ3JpZ2h0JywgcmlnaHQ6ICdsZWZ0JywgYm90dG9tOiAndG9wJywgdG9wOiAnYm90dG9tJyB9O1xyXG5cclxuICByZXR1cm4gcGxhY2VtZW50LnJlcGxhY2UoL2xlZnR8cmlnaHR8Ym90dG9tfHRvcC9nLCBtYXRjaGVkID0+IGhhc2hbbWF0Y2hlZF0pO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCB2YXJpYXRpb24gb2YgdGhlIGdpdmVuIG9uZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbjogc3RyaW5nKSB7XHJcbiAgaWYgKHZhcmlhdGlvbiA9PT0gJ3JpZ2h0Jykge1xyXG4gICAgcmV0dXJuICdsZWZ0JztcclxuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ2xlZnQnKSB7XHJcbiAgICByZXR1cm4gJ3JpZ2h0JztcclxuICB9XHJcblxyXG4gIHJldHVybiB2YXJpYXRpb247XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQ6IGFueSkge1xyXG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICBjb25zdCB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xyXG4gIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogTnVtYmVyKGVsZW1lbnQub2Zmc2V0V2lkdGgpICsgeSxcclxuICAgIGhlaWdodDogTnVtYmVyKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArIHhcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcclxuICovXHJcbmltcG9ydCB7IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgfSBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XHJcbmltcG9ydCB7IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWZlcmVuY2VPZmZzZXRzKFxyXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXHJcbiAgaG9zdDogSFRNTEVsZW1lbnQsXHJcbiAgZml4ZWRQb3NpdGlvbjogYm9vbGVhbiA9IG51bGxcclxuKTogT2Zmc2V0cyB7XHJcbiAgY29uc3QgY29tbW9uT2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvblxyXG4gICAgPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHRhcmdldClcclxuICAgIDogZmluZENvbW1vbk9mZnNldFBhcmVudCh0YXJnZXQsIGhvc3QpO1xyXG5cclxuICByZXR1cm4gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGhvc3QsIGNvbW1vbk9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSB0YXJnZXRcclxuICovXHJcbmltcG9ydCB7IGdldE9wcG9zaXRlUGxhY2VtZW50IH0gZnJvbSAnLi9nZXRPcHBvc2l0ZVBsYWNlbWVudCc7XHJcbmltcG9ydCB7IGdldE91dGVyU2l6ZXMgfSBmcm9tICcuL2dldE91dGVyU2l6ZXMnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXRPZmZzZXRzKFxyXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXHJcbiAgaG9zdE9mZnNldHM6IE9mZnNldHMsXHJcbiAgcG9zaXRpb246IHN0cmluZ1xyXG4pOiBPZmZzZXRzIHtcclxuICBjb25zdCBwbGFjZW1lbnQgPSBwb3NpdGlvbi5zcGxpdCgnICcpWzBdO1xyXG5cclxuICAvLyBHZXQgdGFyZ2V0IG5vZGUgc2l6ZXNcclxuICBjb25zdCB0YXJnZXRSZWN0ID0gZ2V0T3V0ZXJTaXplcyh0YXJnZXQpO1xyXG5cclxuICAvLyBBZGQgcG9zaXRpb24sIHdpZHRoIGFuZCBoZWlnaHQgdG8gb3VyIG9mZnNldHMgb2JqZWN0XHJcbiAgY29uc3QgdGFyZ2V0T2Zmc2V0cyA9IHtcclxuICAgIHdpZHRoOiB0YXJnZXRSZWN0LndpZHRoLFxyXG4gICAgaGVpZ2h0OiB0YXJnZXRSZWN0LmhlaWdodFxyXG4gIH07XHJcblxyXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgdGFyZ2V0IHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcclxuICBjb25zdCBpc0hvcml6ID0gWydyaWdodCcsICdsZWZ0J10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcclxuICBjb25zdCBtYWluU2lkZSA9IGlzSG9yaXogPyAndG9wJyA6ICdsZWZ0JztcclxuICBjb25zdCBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xyXG4gIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcclxuICBjb25zdCBzZWNvbmRhcnlNZWFzdXJlbWVudCA9ICFpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xyXG5cclxuICB0YXJnZXRPZmZzZXRzW21haW5TaWRlXSA9XHJcbiAgICBob3N0T2Zmc2V0c1ttYWluU2lkZV0gK1xyXG4gICAgaG9zdE9mZnNldHNbbWVhc3VyZW1lbnRdIC8gMiAtXHJcbiAgICB0YXJnZXRSZWN0W21lYXN1cmVtZW50XSAvIDI7XHJcblxyXG4gIHRhcmdldE9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gPSBwbGFjZW1lbnQgPT09IHNlY29uZGFyeVNpZGVcclxuICAgID8gaG9zdE9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSB0YXJnZXRSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XVxyXG4gICAgOiBob3N0T2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XHJcblxyXG4gIHJldHVybiB0YXJnZXRPZmZzZXRzO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBpcyBlbmFibGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9kaWZpZXJFbmFibGVkKG9wdGlvbnM6IGFueSwgbW9kaWZpZXJOYW1lOiBzdHJpbmcpIHtcclxuICByZXR1cm4gb3B0aW9uc1xyXG4gICAgJiYgb3B0aW9ucy5tb2RpZmllcnNcclxuICAgICYmIG9wdGlvbnMubW9kaWZpZXJzW21vZGlmaWVyTmFtZV1cclxuICAgICYmIG9wdGlvbnMubW9kaWZpZXJzW21vZGlmaWVyTmFtZV0uZW5hYmxlZDtcclxufVxyXG4iLCIvKipcclxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtZXJpYyhuOiBhbnkpIHtcclxuICByZXR1cm4gbiAhPT0gJycgJiYgIWlzTmFOKHBhcnNlRmxvYXQobikpICYmIGlzRmluaXRlKG4pO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcclxuICovXHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGdldE9mZnNldHMsIHNldFN0eWxlcyB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEFsbFN0eWxlcyhkYXRhOiBEYXRhLCByZW5kZXJlcj86IFJlbmRlcmVyMik6IHZvaWQge1xyXG4gIGNvbnN0IHRhcmdldCA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0O1xyXG5cclxuICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0cyhkYXRhKTtcclxuXHJcbiAgc2V0U3R5bGVzKHRhcmdldCwge1xyXG4gICAgJ3dpbGwtY2hhbmdlJzogJ3RyYW5zZm9ybScsXHJcbiAgICB0b3A6ICcwcHgnLFxyXG4gICAgbGVmdDogJzBweCcsXHJcbiAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgke29mZnNldHMubGVmdH1weCwgJHtvZmZzZXRzLnRvcH1weCwgMHB4KWBcclxuICB9LCByZW5kZXJlcik7XHJcblxyXG4gIGlmIChkYXRhLmluc3RhbmNlLmFycm93KSB7XHJcbiAgICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5hcnJvdywgZGF0YS5vZmZzZXRzLmFycm93LCByZW5kZXJlcik7XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0YS5wbGFjZW1lbnRBdXRvKSB7XHJcbiAgICBpZiAocmVuZGVyZXIpIHtcclxuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJyxcclxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXBvcG92ZXItYXV0by9nLCBgYnMtcG9wb3Zlci0ke2RhdGEucGxhY2VtZW50fWApXHJcbiAgICAgICk7XHJcbiAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0YXJnZXQsICdjbGFzcycsXHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9icy10b29sdGlwLWF1dG8vZywgYGJzLXRvb2x0aXAtJHtkYXRhLnBsYWNlbWVudH1gKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJyxcclxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL1xcc2F1dG8vZywgYFxccyR7ZGF0YS5wbGFjZW1lbnR9YClcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC9wb3BvdmVyL2cpKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCAncG9wb3Zlci1hdXRvJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC90b29sdGlwL2cpKSB7XHJcbiAgICAgICAgcmVuZGVyZXIuYWRkQ2xhc3ModGFyZ2V0LCAndG9vbHRpcC1hdXRvJyk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtcG9wb3Zlci1hdXRvL2csIGBicy1wb3BvdmVyLSR7ZGF0YS5wbGFjZW1lbnR9YCk7XHJcbiAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXRvb2x0aXAtYXV0by9nLCBgYnMtdG9vbHRpcC0ke2RhdGEucGxhY2VtZW50fWApO1xyXG4gICAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9cXHNhdXRvL2csIGBcXHMke2RhdGEucGxhY2VtZW50fWApO1xyXG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3BvcG92ZXIvZykpIHtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgncG9wb3Zlci1hdXRvJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YXJnZXQuY2xhc3NOYW1lLm1hdGNoKC90b29sdGlwL2cpKSB7XHJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Rvb2x0aXAtYXV0bycpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAocmVuZGVyZXIpIHtcclxuICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0YXJnZXQsICdjbGFzcycsIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvbGVmdHxyaWdodHx0b3B8Ym90dG9tL2csIGAke2RhdGEucGxhY2VtZW50fWApKTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvbGVmdHxyaWdodHx0b3B8Ym90dG9tL2csIGAke2RhdGEucGxhY2VtZW50fWApO1xyXG4gIH1cclxufVxyXG4iLCIvKipcclxuICogU2V0IHRoZSBzdHlsZSB0byB0aGUgZ2l2ZW4gcG9wcGVyXHJcbiAqL1xyXG5pbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzTnVtZXJpYyB9IGZyb20gJy4vaXNOdW1lcmljJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudDogSFRNTEVsZW1lbnQsIHN0eWxlczogYW55LCByZW5kZXJlcj86IFJlbmRlcmVyMikge1xyXG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaCgocHJvcDogYW55KSA9PiB7XHJcbiAgICBsZXQgdW5pdCA9ICcnO1xyXG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXHJcbiAgICBpZiAoWyd3aWR0aCcsICdoZWlnaHQnLCAndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10uaW5kZXhPZihwcm9wKSAhPT0gLTEgJiZcclxuICAgICAgaXNOdW1lcmljKHN0eWxlc1twcm9wXSkpIHtcclxuICAgICAgdW5pdCA9ICdweCc7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlbmRlcmVyKSB7XHJcbiAgICAgIHJlbmRlcmVyLnNldFN0eWxlKGVsZW1lbnQsIHByb3AsIGAke1N0cmluZyhzdHlsZXNbcHJvcF0pfSR7dW5pdH1gKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gU3RyaW5nKHN0eWxlc1twcm9wXSkgKyB1bml0O1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGdldENsaWVudFJlY3QsIGdldE91dGVyU2l6ZXMsIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyb3coZGF0YTogRGF0YSkge1xyXG4gIGxldCB0YXJnZXRPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnRhcmdldDtcclxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxyXG4gIGNvbnN0IGFycm93RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZGF0YS5pbnN0YW5jZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XHJcblxyXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcclxuICBpZiAoIWFycm93RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudCkgIT09IC0xO1xyXG5cclxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xyXG4gIGNvbnN0IHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcclxuICBjb25zdCBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcclxuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xyXG4gIGNvbnN0IGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcclxuXHJcbiAgLy8gdG9wL2xlZnQgc2lkZVxyXG4gIGlmIChkYXRhLm9mZnNldHMuaG9zdFtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHRhcmdldE9mZnNldHNbc2lkZV0pIHtcclxuICAgIHRhcmdldE9mZnNldHNbc2lkZV0gLT1cclxuICAgICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtIChkYXRhLm9mZnNldHMuaG9zdFtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XHJcbiAgfVxyXG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXHJcbiAgaWYgKE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoYXJyb3dFbGVtZW50U2l6ZSkgPiB0YXJnZXRPZmZzZXRzW29wU2lkZV0pIHtcclxuICAgIHRhcmdldE9mZnNldHNbc2lkZV0gKz1cclxuICAgICAgTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSAtIE51bWJlcih0YXJnZXRPZmZzZXRzW29wU2lkZV0pO1xyXG4gIH1cclxuICB0YXJnZXRPZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh0YXJnZXRPZmZzZXRzKTtcclxuXHJcbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHRhcmdldFxyXG4gIGNvbnN0IGNlbnRlciA9IE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoZGF0YS5vZmZzZXRzLmhvc3RbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMik7XHJcblxyXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCB0YXJnZXQgb2Zmc2V0c1xyXG4gIC8vIHRha2UgdGFyZ2V0IG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXHJcbiAgY29uc3QgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UudGFyZ2V0KTtcclxuXHJcbiAgY29uc3QgdGFyZ2V0TWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2BtYXJnaW4ke3NpZGVDYXBpdGFsaXplZH1gXSk7XHJcbiAgY29uc3QgdGFyZ2V0Qm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdKTtcclxuICBsZXQgc2lkZVZhbHVlID1cclxuICAgIGNlbnRlciAtIHRhcmdldE9mZnNldHNbc2lkZV0gLSB0YXJnZXRNYXJnaW5TaWRlIC0gdGFyZ2V0Qm9yZGVyU2lkZTtcclxuXHJcbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgdGFyZ2V0XHJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odGFyZ2V0T2Zmc2V0c1tsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XHJcblxyXG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcclxuICAgIFtzaWRlXTogTWF0aC5yb3VuZChzaWRlVmFsdWUpLFxyXG4gICAgW2FsdFNpZGVdOiAnJyAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcclxuICB9O1xyXG5cclxuICBkYXRhLmluc3RhbmNlLmFycm93ID0gYXJyb3dFbGVtZW50O1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIGNvbXB1dGVBdXRvUGxhY2VtZW50LFxyXG4gIGdldEJvdW5kYXJpZXMsXHJcbiAgZ2V0Q2xpZW50UmVjdCxcclxuICBnZXRPcHBvc2l0ZVZhcmlhdGlvbixcclxuICBnZXRUYXJnZXRPZmZzZXRzLFxyXG4gIGlzTW9kaWZpZXJFbmFibGVkXHJcbn0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcChkYXRhOiBEYXRhKTogRGF0YSB7XHJcbiAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnRhcmdldCk7XHJcblxyXG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAnZmxpcCcpKSB7XHJcblxyXG4gICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcclxuICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcclxuICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcclxuICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcclxuICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcclxuICAgICAgICBkYXRhLnBsYWNlbWVudFxyXG4gICAgICApXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXHJcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcclxuICAgIGRhdGEuaW5zdGFuY2UuaG9zdCxcclxuICAgIDAsIC8vIHBhZGRpbmdcclxuICAgICd2aWV3cG9ydCcsXHJcbiAgICBmYWxzZSAvLyBwb3NpdGlvbkZpeGVkXHJcbiAgKTtcclxuXHJcbiAgbGV0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF07XHJcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMV0gfHwgJyc7XHJcblxyXG4gIGNvbnN0IG9mZnNldHNIb3N0ID0gZGF0YS5vZmZzZXRzLmhvc3Q7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZGF0YS5pbnN0YW5jZS50YXJnZXQ7XHJcbiAgY29uc3QgaG9zdCA9IGRhdGEuaW5zdGFuY2UuaG9zdDtcclxuXHJcbiAgY29uc3QgYWRhcHRpdmVQb3NpdGlvbiA9IHZhcmlhdGlvblxyXG4gICAgPyBjb21wdXRlQXV0b1BsYWNlbWVudCgnYXV0bycsIG9mZnNldHNIb3N0LCB0YXJnZXQsIGhvc3QsIFsndG9wJywgJ2JvdHRvbSddKVxyXG4gICAgOiBjb21wdXRlQXV0b1BsYWNlbWVudCgnYXV0bycsIG9mZnNldHNIb3N0LCB0YXJnZXQsIGhvc3QpO1xyXG5cclxuICBjb25zdCBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBhZGFwdGl2ZVBvc2l0aW9uXTtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cclxuICBmbGlwT3JkZXIuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF07XHJcblxyXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgaG9zdCBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxyXG4gICAgY29uc3Qgb3ZlcmxhcHNSZWYgPVxyXG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiZcclxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5sZWZ0KSkgfHxcclxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5sZWZ0KSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QucmlnaHQpKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pID4gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC50b3ApKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC50b3ApIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5ib3R0b20pKTtcclxuXHJcbiAgICBjb25zdCBvdmVyZmxvd3NMZWZ0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihib3VuZGFyaWVzLmxlZnQpO1xyXG4gICAgY29uc3Qgb3ZlcmZsb3dzUmlnaHQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcclxuICAgIGNvbnN0IG92ZXJmbG93c1RvcCA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC50b3ApIDwgTWF0aC5mbG9vcihib3VuZGFyaWVzLnRvcCk7XHJcbiAgICBjb25zdCBvdmVyZmxvd3NCb3R0b20gPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xyXG5cclxuICAgIGNvbnN0IG92ZXJmbG93c0JvdW5kYXJpZXMgPVxyXG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcclxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcclxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xyXG5cclxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxyXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XHJcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uID1cclxuICAgICAgKChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQpIHx8XHJcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxyXG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XHJcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NCb3R0b20pKTtcclxuXHJcbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XHJcbiAgICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzKSB7XHJcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XHJcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYCAke3ZhcmlhdGlvbn1gIDogJycpO1xyXG5cclxuICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcclxuICAgICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxyXG4gICAgICAgIC4uLmdldFRhcmdldE9mZnNldHMoXHJcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcclxuICAgICAgICAgIGRhdGEub2Zmc2V0cy5ob3N0LFxyXG4gICAgICAgICAgZGF0YS5wbGFjZW1lbnRcclxuICAgICAgICApXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY29tcHV0ZUF1dG9QbGFjZW1lbnQsXHJcbiAgZ2V0UmVmZXJlbmNlT2Zmc2V0cyxcclxuICBnZXRUYXJnZXRPZmZzZXRzXHJcbn0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgRGF0YSwgT3B0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERhdGEoXHJcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgcG9zaXRpb246IHN0cmluZywgb3B0aW9uczogT3B0aW9uc1xyXG4pOiBEYXRhIHtcclxuXHJcbiAgY29uc3QgaG9zdEVsUG9zaXRpb24gPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50KTtcclxuICBjb25zdCBwbGFjZW1lbnRBdXRvID0gISFwb3NpdGlvbi5tYXRjaCgvYXV0by9nKTtcclxuXHJcbiAgLy8gc3VwcG9ydCBvbGQgcGxhY2VtZW50cyAnYXV0byBsZWZ0fHJpZ2h0fHRvcHxib3R0b20nXHJcbiAgbGV0IHBsYWNlbWVudCA9ICEhcG9zaXRpb24ubWF0Y2goL2F1dG9cXHMobGVmdHxyaWdodHx0b3B8Ym90dG9tKS9nKVxyXG4gICAgPyBwb3NpdGlvbi5zcGxpdCgnICcpWzFdIHx8ICcnXHJcbiAgICA6IHBvc2l0aW9uO1xyXG5cclxuICBjb25zdCB0YXJnZXRPZmZzZXQgPSBnZXRUYXJnZXRPZmZzZXRzKHRhcmdldEVsZW1lbnQsIGhvc3RFbFBvc2l0aW9uLCBwbGFjZW1lbnQpO1xyXG4gIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KHBsYWNlbWVudCwgaG9zdEVsUG9zaXRpb24sIHRhcmdldEVsZW1lbnQsIGhvc3RFbGVtZW50KTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIG9wdGlvbnMsXHJcbiAgICBpbnN0YW5jZToge1xyXG4gICAgICB0YXJnZXQ6IHRhcmdldEVsZW1lbnQsXHJcbiAgICAgIGhvc3Q6IGhvc3RFbGVtZW50LFxyXG4gICAgICBhcnJvdzogbnVsbFxyXG4gICAgfSxcclxuICAgIG9mZnNldHM6IHtcclxuICAgICAgdGFyZ2V0OiB0YXJnZXRPZmZzZXQsXHJcbiAgICAgIGhvc3Q6IGhvc3RFbFBvc2l0aW9uLFxyXG4gICAgICBhcnJvdzogbnVsbFxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxyXG4gICAgcGxhY2VtZW50LFxyXG4gICAgcGxhY2VtZW50QXV0b1xyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Qm91bmRhcmllcyB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGE6IERhdGEpIHtcclxuXHJcbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXHJcbiAgLy8gcmVzZXRzIHRoZSB0YXJnZXRPZmZzZXRzJ3MgcG9zaXRpb24gc28gdGhhdCB0aGUgZG9jdW1lbnQgc2l6ZSBjYW4gYmUgY2FsY3VsYXRlZCBleGNsdWRpbmdcclxuICAvLyB0aGUgc2l6ZSBvZiB0aGUgdGFyZ2V0T2Zmc2V0cyBlbGVtZW50IGl0c2VsZlxyXG4gIGNvbnN0IHRyYW5zZm9ybVByb3AgPSAndHJhbnNmb3JtJztcclxuICBjb25zdCB0YXJnZXRTdHlsZXMgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5zdHlsZTsgLy8gYXNzaWdubWVudCB0byBoZWxwIG1pbmlmaWNhdGlvblxyXG4gIGNvbnN0IHsgdG9wLCBsZWZ0LCBbdHJhbnNmb3JtUHJvcF06IHRyYW5zZm9ybSB9ID0gdGFyZ2V0U3R5bGVzO1xyXG4gIHRhcmdldFN0eWxlcy50b3AgPSAnJztcclxuICB0YXJnZXRTdHlsZXMubGVmdCA9ICcnO1xyXG4gIHRhcmdldFN0eWxlc1t0cmFuc2Zvcm1Qcm9wXSA9ICcnO1xyXG5cclxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcclxuICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxyXG4gICAgZGF0YS5pbnN0YW5jZS5ob3N0LFxyXG4gICAgMCwgLy8gcGFkZGluZ1xyXG4gICAgJ3Njcm9sbFBhcmVudCcsXHJcbiAgICBmYWxzZSAvLyBwb3NpdGlvbkZpeGVkXHJcbiAgKTtcclxuXHJcbiAgLy8gTk9URTogRE9NIGFjY2VzcyBoZXJlXHJcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXHJcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9IHRvcDtcclxuICB0YXJnZXRTdHlsZXMubGVmdCA9IGxlZnQ7XHJcbiAgdGFyZ2V0U3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xyXG5cclxuICBjb25zdCBvcmRlciA9IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ107XHJcblxyXG4gIGNvbnN0IGNoZWNrID0ge1xyXG4gICAgcHJpbWFyeShwbGFjZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICBsZXQgdmFsdWUgPSBkYXRhLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkYXRhLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0gPCBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcclxuICAgICAgICAhZmFsc2UgLy8gb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgoZGF0YS5vZmZzZXRzLnRhcmdldFtwbGFjZW1lbnRdLCBib3VuZGFyaWVzW3BsYWNlbWVudF0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBbcGxhY2VtZW50XTogdmFsdWUgfTtcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnkocGxhY2VtZW50OiBzdHJpbmcpIHtcclxuICAgICAgY29uc3QgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcclxuICAgICAgbGV0IHZhbHVlID0gZGF0YS5vZmZzZXRzLnRhcmdldFttYWluU2lkZV07XHJcbiAgICAgIGlmIChcclxuICAgICAgICBkYXRhLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiZcclxuICAgICAgICAhZmFsc2UgLy8gZXNjYXBlV2l0aFJlZmVyZW5jZVxyXG4gICAgICApIHtcclxuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKFxyXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldFttYWluU2lkZV0sXHJcbiAgICAgICAgICBib3VuZGFyaWVzW3BsYWNlbWVudF0gLVxyXG4gICAgICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/IGRhdGEub2Zmc2V0cy50YXJnZXQud2lkdGggOiBkYXRhLm9mZnNldHMudGFyZ2V0LmhlaWdodClcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyBbbWFpblNpZGVdOiB2YWx1ZSB9O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGxldCBzaWRlOiBzdHJpbmc7XHJcblxyXG4gIG9yZGVyLmZvckVhY2gocGxhY2VtZW50ID0+IHtcclxuICAgIHNpZGUgPSBbJ2xlZnQnLCAndG9wJ11cclxuICAgICAgLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTFcclxuICAgICAgPyAncHJpbWFyeSdcclxuICAgICAgOiAnc2Vjb25kYXJ5JztcclxuXHJcbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0geyAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LCAuLi5jaGVja1tzaWRlXShwbGFjZW1lbnQpIH07XHJcblxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGlmdChkYXRhOiBEYXRhKTogRGF0YSB7XHJcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XHJcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xyXG4gIGNvbnN0IHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV07XHJcblxyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xyXG4gICAgY29uc3QgeyBob3N0LCB0YXJnZXQgfSA9IGRhdGEub2Zmc2V0cztcclxuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcclxuICAgIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XHJcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XHJcblxyXG4gICAgY29uc3Qgc2hpZnRPZmZzZXRzID0ge1xyXG4gICAgICBsZWZ0OiB7IFtzaWRlXTogaG9zdFtzaWRlXSB9LFxyXG4gICAgICByaWdodDoge1xyXG4gICAgICAgIFtzaWRlXTogaG9zdFtzaWRlXSArIGhvc3RbbWVhc3VyZW1lbnRdIC0gaG9zdFttZWFzdXJlbWVudF1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0geyAuLi50YXJnZXQsIC4uLnNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0gfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXHJcbiAqIEBjb3B5cmlnaHQgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcclxuICovXHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZ2V0UmVmZXJlbmNlT2Zmc2V0cywgc2V0QWxsU3R5bGVzIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBhcnJvdywgZmxpcCwgcHJldmVudE92ZXJmbG93LCBzaGlmdCwgaW5pdERhdGEgfSBmcm9tICcuL21vZGlmaWVycyc7XHJcbmltcG9ydCB7IERhdGEsIE9mZnNldHMsIE9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcclxuICBwb3NpdGlvbihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBPZmZzZXRzIHtcclxuICAgIHJldHVybiB0aGlzLm9mZnNldChob3N0RWxlbWVudCwgdGFyZ2V0RWxlbWVudCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb2Zmc2V0KGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IE9mZnNldHMge1xyXG4gICAgcmV0dXJuIGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcG9zaXRpb25FbGVtZW50cyhcclxuICAgIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcG9zaXRpb246IHN0cmluZyxcclxuICAgIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXHJcbiAgICBvcHRpb25zPzogT3B0aW9uc1xyXG4gICk6IERhdGEge1xyXG4gICAgY29uc3QgY2hhaW5PZk1vZGlmaWVycyA9IFtmbGlwLCBzaGlmdCwgcHJldmVudE92ZXJmbG93LCBhcnJvd107XHJcblxyXG4gICAgcmV0dXJuIGNoYWluT2ZNb2RpZmllcnMucmVkdWNlKFxyXG4gICAgICAobW9kaWZpZWREYXRhLCBtb2RpZmllcikgPT4gbW9kaWZpZXIobW9kaWZpZWREYXRhKSxcclxuICAgICAgaW5pdERhdGEodGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQsIHBvc2l0aW9uLCBvcHRpb25zKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZygpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uRWxlbWVudHMoXHJcbiAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gIHBsYWNlbWVudDogc3RyaW5nLFxyXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXHJcbiAgb3B0aW9ucz86IE9wdGlvbnMsXHJcbiAgcmVuZGVyZXI/OiBSZW5kZXJlcjJcclxuKTogdm9pZCB7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBwb3NpdGlvblNlcnZpY2UucG9zaXRpb25FbGVtZW50cyhcclxuICAgIGhvc3RFbGVtZW50LFxyXG4gICAgdGFyZ2V0RWxlbWVudCxcclxuICAgIHBsYWNlbWVudCxcclxuICAgIGFwcGVuZFRvQm9keSxcclxuICAgIG9wdGlvbnNcclxuICApO1xyXG5cclxuICBzZXRBbGxTdHlsZXMoZGF0YSwgcmVuZGVyZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyRmFjdG9yeTIsIEluamVjdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgcG9zaXRpb25FbGVtZW50cyB9IGZyb20gJy4vbmctcG9zaXRpb25pbmcnO1xyXG5cclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgb2YsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbmluZ09wdGlvbnMge1xyXG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBtb3ZlZCAqL1xyXG4gIGVsZW1lbnQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmc7XHJcblxyXG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggdGhlIGVsZW1lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byAgKi9cclxuICB0YXJnZXQ/OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LWF0dGFjaG1lbnQgaG9yaXotYXR0YWNobWVudCcgb3IgJ3BsYWNlbWVudCdcclxuICAgKiAtIHBsYWNlbWVudCBjYW4gYmUgXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqIG5vdCB5ZXQgc3VwcG9ydGVkOlxyXG4gICAqIC0gdmVydC1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ3RvcCcsICdtaWRkbGUnLCAnYm90dG9tJ1xyXG4gICAqIC0gaG9yaXotYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICdsZWZ0JywgJ2NlbnRlcicsICdyaWdodCdcclxuICAgKi9cclxuICBhdHRhY2htZW50Pzogc3RyaW5nO1xyXG5cclxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgYXR0YWNobWVudGAuIFRoZSBvbmUgZGlmZmVyZW5jZSBpcyB0aGF0LCBpZiBpdCdzIG5vdCBwcm92aWRlZCxcclxuICAgKiBgdGFyZ2V0QXR0YWNobWVudGAgd2lsbCBhc3N1bWUgdGhlIG1pcnJvciBpbWFnZSBvZiBgYXR0YWNobWVudGAuXHJcbiAgICovXHJcbiAgdGFyZ2V0QXR0YWNobWVudD86IHN0cmluZztcclxuXHJcbiAgLyoqIEEgc3RyaW5nIG9mIHRoZSBmb3JtICd2ZXJ0LW9mZnNldCBob3Jpei1vZmZzZXQnXHJcbiAgICogLSB2ZXJ0LW9mZnNldCBhbmQgaG9yaXotb2Zmc2V0IGNhbiBiZSBvZiB0aGUgZm9ybSBcIjIwcHhcIiBvciBcIjU1JVwiXHJcbiAgICovXHJcbiAgb2Zmc2V0Pzogc3RyaW5nO1xyXG5cclxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgb2Zmc2V0YCwgYnV0IHJlZmVycmluZyB0byB0aGUgb2Zmc2V0IG9mIHRoZSB0YXJnZXQgKi9cclxuICB0YXJnZXRPZmZzZXQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBJZiB0cnVlIGNvbXBvbmVudCB3aWxsIGJlIGF0dGFjaGVkIHRvIGJvZHkgKi9cclxuICBhcHBlbmRUb0JvZHk/OiBib29sZWFuO1xyXG59XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmdTZXJ2aWNlIHtcclxuICBvcHRpb25zOiBPcHRpb25zO1xyXG4gIHByaXZhdGUgdXBkYXRlJCQgPSBuZXcgU3ViamVjdDxudWxsPigpO1xyXG4gIHByaXZhdGUgcG9zaXRpb25FbGVtZW50cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBudW1iZXJcclxuICApIHtcclxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybUlkKSkge1xyXG4gICAgICBtZXJnZShcclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyksXHJcbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLFxyXG4gICAgICAgIG9mKDAsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyKSxcclxuICAgICAgICB0aGlzLnVwZGF0ZSQkXHJcbiAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMucG9zaXRpb25FbGVtZW50c1xyXG4gICAgICAgICAgICAuZm9yRWFjaCgocG9zaXRpb25FbGVtZW50OiBQb3NpdGlvbmluZ09wdGlvbnMpID0+IHtcclxuICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgICAgICAgICAgICAgX2dldEh0bWxFbGVtZW50KHBvc2l0aW9uRWxlbWVudC50YXJnZXQpLFxyXG4gICAgICAgICAgICAgICAgX2dldEh0bWxFbGVtZW50KHBvc2l0aW9uRWxlbWVudC5lbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudC5hdHRhY2htZW50LFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50LmFwcGVuZFRvQm9keSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKVxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcG9zaXRpb24ob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLmFkZFBvc2l0aW9uRWxlbWVudChvcHRpb25zKTtcclxuICAgIHRoaXMudXBkYXRlJCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkUG9zaXRpb25FbGVtZW50KG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLnNldChfZ2V0SHRtbEVsZW1lbnQob3B0aW9ucy5lbGVtZW50KSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBkZWxldGVQb3NpdGlvbkVsZW1lbnQoZWxSZWY6IEVsZW1lbnRSZWYpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb25FbGVtZW50cy5kZWxldGUoX2dldEh0bWxFbGVtZW50KGVsUmVmKSk7XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IE9wdGlvbnMpIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SHRtbEVsZW1lbnQoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nKTogSFRNTEVsZW1lbnQge1xyXG4gIC8vIGl0IG1lYW5zIHRoYXQgd2UgZ290IGEgc2VsZWN0b3JcclxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFJlZikge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50O1xyXG59XHJcbiJdLCJuYW1lcyI6WyJydW5Jc0lFIiwic2V0QWxsU3R5bGVzIiwiU3ViamVjdCIsImlzUGxhdGZvcm1Ccm93c2VyIiwibWVyZ2UiLCJmcm9tRXZlbnQiLCJvZiIsImFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyIiwiSW5qZWN0YWJsZSIsIlJlbmRlcmVyRmFjdG9yeTIiLCJJbmplY3QiLCJQTEFURk9STV9JRCIsIkVsZW1lbnRSZWYiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztBQWNBLElBZU8sSUFBSSxRQUFRLEdBQUc7UUFDbEIsUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7WUFDM0MsS0FB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