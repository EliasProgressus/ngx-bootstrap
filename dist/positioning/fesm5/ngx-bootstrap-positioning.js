import { __assign } from 'tslib';
import { Injectable, ElementRef, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { fromEvent, merge, of, animationFrameScheduler, Subject } from 'rxjs';

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
var /** @type {?} */ isIE11 = isBrowser && !!((/** @type {?} */ (window)).MSInputMethodContext && (/** @type {?} */ (document)).documentMode);
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
    if (side === void 0) { side = 'top'; }
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
    catch (/** @type {?} */ e) {
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
    if (subtract === void 0) { subtract = false; }
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
    if (fixedPosition === void 0) { fixedPosition = false; }
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
    if (excludeScroll === void 0) { excludeScroll = false; }
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
    if (padding === void 0) { padding = 0; }
    if (fixedPosition === void 0) { fixedPosition = false; }
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
    if (allowedPositions === void 0) { allowedPositions = ['top', 'left', 'bottom', 'right']; }
    if (boundariesElement === void 0) { boundariesElement = 'viewport'; }
    if (padding === void 0) { padding = 0; }
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
    if (fixedPosition === void 0) { fixedPosition = null; }
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
         */
        function (placement) {
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
         */
        function (placement) {
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
var Positioning = /** @class */ (function () {
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
        if (round === void 0) { round = true; }
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
        if (round === void 0) { round = true; }
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
var PositioningService = /** @class */ (function () {
    function PositioningService(rendererFactory, platformId) {
        var _this = this;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), of(0, animationFrameScheduler), this.update$$)
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
        { type: Injectable }
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return [
        { type: RendererFactory2, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
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
    if (element instanceof ElementRef) {
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

export { positionElements, Positioning, PositioningService };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3NpdGlvbmluZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0UGFyZW50Tm9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRTY3JvbGxQYXJlbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNCcm93c2VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2lzSUUudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2lzT2Zmc2V0Q29udGFpbmVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFJvb3QudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZmluZENvbW1vbk9mZnNldFBhcmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRCb3JkZXJzU2l6ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRXaW5kb3dTaXplcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRTY3JvbGwudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Q2xpZW50UmVjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaW5jbHVkZVNjcm9sbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2lzRml4ZWQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRCb3VuZGFyaWVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldE9mZnNldHMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24udHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T3V0ZXJTaXplcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFRhcmdldE9mZnNldHMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNNb2RpZmllckVuYWJsZWQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNOdW1lcmljLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL3NldEFsbFN0eWxlcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9zZXRTdHlsZXMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2Fycm93LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9mbGlwLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9pbml0RGF0YS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9zaGlmdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9uZy1wb3NpdGlvbmluZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9wb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eT86IHN0cmluZyk6IGFueSB7XHJcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcclxuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgY29uc3QgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XHJcblxyXG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQ6IGFueSk6IGFueSB7XHJcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcclxufVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBnZXRQYXJlbnROb2RlIH0gZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudDogYW55KTogYW55IHtcclxuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcclxuICBpZiAoIWVsZW1lbnQpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XHJcbiAgICBjYXNlICdIVE1MJzpcclxuICAgIGNhc2UgJ0JPRFknOlxyXG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XHJcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxyXG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5O1xyXG4gICAgZGVmYXVsdDpcclxuICB9XHJcblxyXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxyXG4gIGNvbnN0IHsgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIH0gPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XHJcbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3QoU3RyaW5nKG92ZXJmbG93KSArIFN0cmluZyhvdmVyZmxvd1kpICsgU3RyaW5nKG92ZXJmbG93WCkpKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiIsIi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXHJcbiAqL1xyXG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuL2lzQnJvd3Nlcic7XHJcblxyXG5jb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEoKHdpbmRvdyBhcyBhbnkpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIChkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSk7XHJcbmNvbnN0IGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lFKHZlcnNpb24/OiBudW1iZXIpIHtcclxuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcclxuICAgIHJldHVybiBpc0lFMTE7XHJcbiAgfVxyXG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xyXG4gICAgcmV0dXJuIGlzSUUxMDtcclxuICB9XHJcblxyXG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuL2lzSUUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50OiBhbnkpOiBhbnkge1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcclxuXHJcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcclxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcclxuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxyXG5cclxuICBsZXQgc2libGluZzogYW55O1xyXG5cclxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgc2libGluZyA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgb2Zmc2V0UGFyZW50ID0gc2libGluZy5vZmZzZXRQYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XHJcblxyXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICByZXR1cm4gc2libGluZyA/IHNpYmxpbmcub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXHJcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxyXG4gIGlmIChcclxuICAgIFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmXHJcbiAgICBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYydcclxuICApIHtcclxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0T2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQ6IGFueSkge1xyXG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsZW1lbnQ7XHJcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudFxyXG4gICk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290KG5vZGU6IE5vZGUpOiBhbnkge1xyXG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9kZTtcclxufVxyXG4iLCIvKipcclxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcclxuICovXHJcbmltcG9ydCB7IGlzT2Zmc2V0Q29udGFpbmVyIH0gZnJvbSAnLi9pc09mZnNldENvbnRhaW5lcic7XHJcbmltcG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL2dldFJvb3QnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MTogSFRNTEVsZW1lbnQsIGVsZW1lbnQyOiBIVE1MRWxlbWVudCk6IGFueSB7XHJcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXHJcbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZSAqL1xyXG4gIGNvbnN0IG9yZGVyID0gZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xyXG4gIGNvbnN0IGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcclxuXHJcbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcclxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xyXG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xyXG4gIGNvbnN0IHsgY29tbW9uQW5jZXN0b3JDb250YWluZXIgfSA9IHJhbmdlO1xyXG5cclxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XHJcbiAgaWYgKFxyXG4gICAgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJlxyXG4gICAgICBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIpIHx8XHJcbiAgICBzdGFydC5jb250YWlucyhlbmQpXHJcbiAgKSB7XHJcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XHJcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcclxuICBjb25zdCBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcclxuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcclxuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uLCBheGlzOiBzdHJpbmcpIHtcclxuICBjb25zdCBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xyXG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVBfVdpZHRoYF0pICtcclxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVCfVdpZHRoYF0pXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcclxuXHJcbmZ1bmN0aW9uIGdldFNpemUoYXhpczogc3RyaW5nLCBib2R5OiBIVE1MRWxlbWVudCwgaHRtbDogSFRNTEVsZW1lbnQsIGNvbXB1dGVkU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcclxuICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICBib2R5W2BvZmZzZXQke2F4aXN9YF0sXHJcbiAgICBib2R5W2BzY3JvbGwke2F4aXN9YF0sXHJcbiAgICBodG1sW2BjbGllbnQke2F4aXN9YF0sXHJcbiAgICBodG1sW2BvZmZzZXQke2F4aXN9YF0sXHJcbiAgICBodG1sW2BzY3JvbGwke2F4aXN9YF0sXHJcbiAgICBpc0lFKDEwKVxyXG4gICAgICA/IChwYXJzZUludChodG1sW2BvZmZzZXQke2F4aXN9YF0sIDEwKSArXHJcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnVG9wJyA6ICdMZWZ0J31gXSwgMTApICtcclxuICAgICAgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtgbWFyZ2luJHtheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0J31gXSwgMTApKVxyXG4gICAgOiAwXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50OiBEb2N1bWVudCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBoZWlnaHQ6IGdldFNpemUoJ0hlaWdodCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxyXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNpZGUgPSAndG9wJykge1xyXG4gIGNvbnN0IHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XHJcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xyXG5cclxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xyXG5cclxuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxyXG4gKi9cclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzOiBPZmZzZXRzKTogT2Zmc2V0cyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLm9mZnNldHMsXHJcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcclxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodFxyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGdldEJvcmRlcnNTaXplIH0gZnJvbSAnLi9nZXRCb3JkZXJzU2l6ZSc7XHJcbmltcG9ydCB7IGdldFdpbmRvd1NpemVzIH0gZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XHJcbmltcG9ydCB7IGdldFNjcm9sbCB9IGZyb20gJy4vZ2V0U2Nyb2xsJztcclxuaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XHJcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuL2lzSUUnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBPZmZzZXRzIHtcclxuICBsZXQgcmVjdDogYW55ID0ge307XHJcblxyXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcclxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cclxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpc0lFKDEwKSkge1xyXG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcclxuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xyXG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XHJcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xyXG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XHJcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHQ6IGFueSA9IHtcclxuICAgIGxlZnQ6IHJlY3QubGVmdCxcclxuICAgIHRvcDogcmVjdC50b3AsXHJcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcclxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxyXG4gIH07XHJcblxyXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcclxuICBjb25zdCBzaXplczogYW55ID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xyXG4gIGNvbnN0IHdpZHRoID1cclxuICAgIHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LnJpZ2h0IC0gcmVzdWx0LmxlZnQ7XHJcbiAgY29uc3QgaGVpZ2h0ID1cclxuICAgIHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuYm90dG9tIC0gcmVzdWx0LnRvcDtcclxuXHJcbiAgbGV0IGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xyXG4gIGxldCB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XHJcblxyXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXHJcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcclxuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcclxuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xyXG5cclxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcclxuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3Q6IE9mZnNldHMsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdWJ0cmFjdCA9IGZhbHNlKSB7XHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcclxuICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XHJcbiAgY29uc3QgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcclxuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcclxuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcclxuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xyXG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xyXG5cclxuICByZXR1cm4gcmVjdDtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgfSBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XHJcbmltcG9ydCB7IGdldENsaWVudFJlY3QgfSBmcm9tICcuL2dldENsaWVudFJlY3QnO1xyXG5pbXBvcnQgeyBnZXRTY3JvbGxQYXJlbnQgfSBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgaW5jbHVkZVNjcm9sbCB9IGZyb20gJy4vaW5jbHVkZVNjcm9sbCc7XHJcbmltcG9ydCB7IGlzSUUgYXMgcnVuSXNJRSB9IGZyb20gJy4vaXNJRSc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShcclxuICBjaGlsZHJlbjogSFRNTEVsZW1lbnQsXHJcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICBmaXhlZFBvc2l0aW9uID0gZmFsc2VcclxuKTogT2Zmc2V0cyB7XHJcbiAgY29uc3QgaXNJRTEwID0gcnVuSXNJRSgxMCk7XHJcbiAgY29uc3QgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XHJcbiAgY29uc3QgY2hpbGRyZW5SZWN0OiBhbnkgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoY2hpbGRyZW4pO1xyXG4gIGNvbnN0IHBhcmVudFJlY3Q6IGFueSA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xyXG4gIGNvbnN0IHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChjaGlsZHJlbik7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xyXG4gIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xyXG4gIGNvbnN0IGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XHJcblxyXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xyXG4gIGlmIChmaXhlZFBvc2l0aW9uICYmIGlzSFRNTCkge1xyXG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XHJcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xyXG4gIH1cclxuXHJcbiAgbGV0IG9mZnNldHM6IE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHtcclxuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXHJcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcclxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXHJcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHRcclxuICB9KTtcclxuXHJcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xyXG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XHJcblxyXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxyXG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xyXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXHJcbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxyXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wKTtcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KTtcclxuXHJcbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcclxuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xyXG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XHJcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XHJcblxyXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXHJcbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcclxuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICBpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb25cclxuICAgICAgPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KVxyXG4gICAgICA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknXHJcbiAgKSB7XHJcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9mZnNldHM7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XHJcbmltcG9ydCB7IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV4Y2x1ZGVTY3JvbGwgPSBmYWxzZSk6IE9mZnNldHMge1xyXG4gIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xyXG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xyXG4gIGNvbnN0IHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0ID0ge1xyXG4gICAgdG9wOiBzY3JvbGxUb3AgLSBOdW1iZXIocmVsYXRpdmVPZmZzZXQudG9wKSArIE51bWJlcihyZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3ApLFxyXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIE51bWJlcihyZWxhdGl2ZU9mZnNldC5sZWZ0KSArIE51bWJlcihyZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0KSxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcclxufVxyXG4iLCIvKipcclxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGdldFBhcmVudE5vZGUgfSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XHJcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpc0ZpeGVkKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xyXG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxyXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xyXG4gICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbGV0IGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xyXG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4iLCIvKipcclxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U2Nyb2xsUGFyZW50IH0gZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xyXG5pbXBvcnQgeyBnZXRQYXJlbnROb2RlIH0gZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcclxuaW1wb3J0IHsgZmluZENvbW1vbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XHJcbmltcG9ydCB7IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlIH0gZnJvbSAnLi9nZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUnO1xyXG5pbXBvcnQgeyBnZXRXaW5kb3dTaXplcyB9IGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xyXG5pbXBvcnQgeyBpc0ZpeGVkIH0gZnJvbSAnLi9pc0ZpeGVkJztcclxuaW1wb3J0IHsgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhcclxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxyXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxyXG4gIHBhZGRpbmcgPSAwLFxyXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBzdHJpbmcsXHJcbiAgZml4ZWRQb3NpdGlvbiA9IGZhbHNlXHJcbikge1xyXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXHJcblxyXG4gIGxldCBib3VuZGFyaWVzOiBhbnkgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHRhcmdldCkgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHRhcmdldCwgaG9zdCk7XHJcblxyXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXHJcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XHJcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcclxuICAgIGxldCBib3VuZGFyaWVzTm9kZTtcclxuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcclxuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShob3N0KSk7XHJcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XHJcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSB0YXJnZXQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKFxyXG4gICAgICBib3VuZGFyaWVzTm9kZSxcclxuICAgICAgb2Zmc2V0UGFyZW50LFxyXG4gICAgICBmaXhlZFBvc2l0aW9uXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxyXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xyXG4gICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldFdpbmRvd1NpemVzKHRhcmdldC5vd25lckRvY3VtZW50KTtcclxuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcclxuICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBOdW1iZXIoaGVpZ2h0KSArIE51bWJlcihvZmZzZXRzLnRvcCk7XHJcbiAgICAgIGJvdW5kYXJpZXMubGVmdCArPSBvZmZzZXRzLmxlZnQgLSBvZmZzZXRzLm1hcmdpbkxlZnQ7XHJcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSBOdW1iZXIod2lkdGgpICsgTnVtYmVyKG9mZnNldHMubGVmdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcclxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFkZGluZ3NcclxuICBib3VuZGFyaWVzLmxlZnQgKz0gcGFkZGluZztcclxuICBib3VuZGFyaWVzLnRvcCArPSBwYWRkaW5nO1xyXG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gcGFkZGluZztcclxuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBwYWRkaW5nO1xyXG5cclxuICByZXR1cm4gYm91bmRhcmllcztcclxufVxyXG4iLCIvKipcclxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxyXG4gKiBhdmFpbGFibGUgc3BhY2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRCb3VuZGFyaWVzIH0gZnJvbSAnLi9nZXRCb3VuZGFyaWVzJztcclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XHJcbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXHJcbiAgcGxhY2VtZW50OiBzdHJpbmcsXHJcbiAgcmVmUmVjdDogT2Zmc2V0cyxcclxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxyXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxyXG4gIGFsbG93ZWRQb3NpdGlvbnM6IGFueVtdID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXSxcclxuICBib3VuZGFyaWVzRWxlbWVudCA9ICd2aWV3cG9ydCcsXHJcbiAgcGFkZGluZyA9IDBcclxuKSB7XHJcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XHJcbiAgICByZXR1cm4gcGxhY2VtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXModGFyZ2V0LCBob3N0LCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IHJlY3RzOiBhbnkgPSB7XHJcbiAgICB0b3A6IHtcclxuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxyXG4gICAgfSxcclxuICAgIHJpZ2h0OiB7XHJcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxyXG4gICAgfSxcclxuICAgIGJvdHRvbToge1xyXG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXHJcbiAgICB9LFxyXG4gICAgbGVmdDoge1xyXG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxyXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcclxuICAgIC5tYXAoa2V5ID0+ICh7XHJcbiAgICAgIGtleSxcclxuICAgICAgLi4ucmVjdHNba2V5XSxcclxuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxyXG4gICAgfSkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcclxuXHJcbiAgbGV0IGZpbHRlcmVkQXJlYXM6IGFueVtdID0gc29ydGVkQXJlYXMuZmlsdGVyKFxyXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxyXG4gICAgICB3aWR0aCA+PSB0YXJnZXQuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHRhcmdldC5jbGllbnRIZWlnaHRcclxuICApO1xyXG5cclxuICBmaWx0ZXJlZEFyZWFzID0gYWxsb3dlZFBvc2l0aW9uc1xyXG4gICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBba2V5XTogZmlsdGVyZWRBcmVhc1trZXldIH07XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50OiBzdHJpbmcgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcclxuICAgID8gZmlsdGVyZWRBcmVhc1swXS5rZXlcclxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xyXG5cclxuICBjb25zdCB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYXV0by9nLCBjb21wdXRlZFBsYWNlbWVudCk7XHJcblxyXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0cyhkYXRhOiBEYXRhKTogT2Zmc2V0cyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiBkYXRhLm9mZnNldHMudGFyZ2V0LndpZHRoLFxyXG4gICAgaGVpZ2h0OiBkYXRhLm9mZnNldHMudGFyZ2V0LmhlaWdodCxcclxuICAgIGxlZnQ6IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5sZWZ0KSxcclxuICAgIHRvcDogTWF0aC5yb3VuZChkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCksXHJcbiAgICBib3R0b206IE1hdGgucm91bmQoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pLFxyXG4gICAgcmlnaHQ6IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5yaWdodClcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50OiBzdHJpbmcpIHtcclxuICBjb25zdCBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XHJcblxyXG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIG1hdGNoZWQgPT4gaGFzaFttYXRjaGVkXSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uOiBzdHJpbmcpIHtcclxuICBpZiAodmFyaWF0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICByZXR1cm4gJ2xlZnQnO1xyXG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnbGVmdCcpIHtcclxuICAgIHJldHVybiAncmlnaHQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhcmlhdGlvbjtcclxufVxyXG4iLCIvKipcclxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudDogYW55KSB7XHJcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gIGNvbnN0IHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgMCk7XHJcbiAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiBOdW1iZXIoZWxlbWVudC5vZmZzZXRXaWR0aCkgKyB5LFxyXG4gICAgaGVpZ2h0OiBOdW1iZXIoZWxlbWVudC5vZmZzZXRIZWlnaHQpICsgeFxyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxyXG4gKi9cclxuaW1wb3J0IHsgZmluZENvbW1vbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XHJcbmltcG9ydCB7IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0OiBIVE1MRWxlbWVudCxcclxuICBmaXhlZFBvc2l0aW9uOiBib29sZWFuID0gbnVsbFxyXG4pOiBPZmZzZXRzIHtcclxuICBjb25zdCBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uXHJcbiAgICA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQodGFyZ2V0KVxyXG4gICAgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHRhcmdldCwgaG9zdCk7XHJcblxyXG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoaG9zdCwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcclxufVxyXG4iLCIvKipcclxuICogR2V0IG9mZnNldHMgdG8gdGhlIHRhcmdldFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgfSBmcm9tICcuL2dldE9wcG9zaXRlUGxhY2VtZW50JztcclxuaW1wb3J0IHsgZ2V0T3V0ZXJTaXplcyB9IGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldE9mZnNldHMoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0T2Zmc2V0czogT2Zmc2V0cyxcclxuICBwb3NpdGlvbjogc3RyaW5nXHJcbik6IE9mZnNldHMge1xyXG4gIGNvbnN0IHBsYWNlbWVudCA9IHBvc2l0aW9uLnNwbGl0KCcgJylbMF07XHJcblxyXG4gIC8vIEdldCB0YXJnZXQgbm9kZSBzaXplc1xyXG4gIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRPdXRlclNpemVzKHRhcmdldCk7XHJcblxyXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcclxuICBjb25zdCB0YXJnZXRPZmZzZXRzID0ge1xyXG4gICAgd2lkdGg6IHRhcmdldFJlY3Qud2lkdGgsXHJcbiAgICBoZWlnaHQ6IHRhcmdldFJlY3QuaGVpZ2h0XHJcbiAgfTtcclxuXHJcbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSB0YXJnZXQgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxyXG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xyXG4gIGNvbnN0IG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xyXG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xyXG4gIGNvbnN0IHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcblxyXG4gIHRhcmdldE9mZnNldHNbbWFpblNpZGVdID1cclxuICAgIGhvc3RPZmZzZXRzW21haW5TaWRlXSArXHJcbiAgICBob3N0T2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC1cclxuICAgIHRhcmdldFJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcclxuXHJcbiAgdGFyZ2V0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZVxyXG4gICAgPyBob3N0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHRhcmdldFJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdXHJcbiAgICA6IGhvc3RPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcclxuXHJcbiAgcmV0dXJuIHRhcmdldE9mZnNldHM7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQob3B0aW9uczogYW55LCBtb2RpZmllck5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBvcHRpb25zXHJcbiAgICAmJiBvcHRpb25zLm1vZGlmaWVyc1xyXG4gICAgJiYgb3B0aW9ucy5tb2RpZmllcnNbbW9kaWZpZXJOYW1lXVxyXG4gICAgJiYgb3B0aW9ucy5tb2RpZmllcnNbbW9kaWZpZXJOYW1lXS5lbmFibGVkO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBUZWxscyBpZiBhIGdpdmVuIGlucHV0IGlzIGEgbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljKG46IGFueSkge1xyXG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxyXG4gKi9cclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgZ2V0T2Zmc2V0cywgc2V0U3R5bGVzIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWxsU3R5bGVzKGRhdGE6IERhdGEsIHJlbmRlcmVyPzogUmVuZGVyZXIyKTogdm9pZCB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZGF0YS5pbnN0YW5jZS50YXJnZXQ7XHJcblxyXG4gIGNvbnN0IG9mZnNldHMgPSBnZXRPZmZzZXRzKGRhdGEpO1xyXG5cclxuICBzZXRTdHlsZXModGFyZ2V0LCB7XHJcbiAgICAnd2lsbC1jaGFuZ2UnOiAndHJhbnNmb3JtJyxcclxuICAgIHRvcDogJzBweCcsXHJcbiAgICBsZWZ0OiAnMHB4JyxcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7b2Zmc2V0cy5sZWZ0fXB4LCAke29mZnNldHMudG9wfXB4LCAwcHgpYFxyXG4gIH0sIHJlbmRlcmVyKTtcclxuXHJcbiAgaWYgKGRhdGEuaW5zdGFuY2UuYXJyb3cpIHtcclxuICAgIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLmFycm93LCBkYXRhLm9mZnNldHMuYXJyb3csIHJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhLnBsYWNlbWVudEF1dG8pIHtcclxuICAgIGlmIChyZW5kZXJlcikge1xyXG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLFxyXG4gICAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtcG9wb3Zlci1hdXRvL2csIGBicy1wb3BvdmVyLSR7ZGF0YS5wbGFjZW1lbnR9YClcclxuICAgICAgKTtcclxuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJyxcclxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXRvb2x0aXAtYXV0by9nLCBgYnMtdG9vbHRpcC0ke2RhdGEucGxhY2VtZW50fWApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLFxyXG4gICAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvXFxzYXV0by9nLCBgXFxzJHtkYXRhLnBsYWNlbWVudH1gKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3BvcG92ZXIvZykpIHtcclxuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsICdwb3BvdmVyLWF1dG8nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3Rvb2x0aXAvZykpIHtcclxuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsICd0b29sdGlwLWF1dG8nKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9icy1wb3BvdmVyLWF1dG8vZywgYGJzLXBvcG92ZXItJHtkYXRhLnBsYWNlbWVudH1gKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtdG9vbHRpcC1hdXRvL2csIGBicy10b29sdGlwLSR7ZGF0YS5wbGFjZW1lbnR9YCk7XHJcbiAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL1xcc2F1dG8vZywgYFxccyR7ZGF0YS5wbGFjZW1lbnR9YCk7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5tYXRjaCgvcG9wb3Zlci9nKSkge1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLWF1dG8nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3Rvb2x0aXAvZykpIHtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9vbHRpcC1hdXRvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyZW5kZXJlcikge1xyXG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJywgdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9sZWZ0fHJpZ2h0fHRvcHxib3R0b20vZywgYCR7ZGF0YS5wbGFjZW1lbnR9YCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9sZWZ0fHJpZ2h0fHRvcHxib3R0b20vZywgYCR7ZGF0YS5wbGFjZW1lbnR9YCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcclxuICovXHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi9pc051bWVyaWMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc3R5bGVzOiBhbnksIHJlbmRlcmVyPzogUmVuZGVyZXIyKSB7XHJcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wOiBhbnkpID0+IHtcclxuICAgIGxldCB1bml0ID0gJyc7XHJcbiAgICAvLyBhZGQgdW5pdCBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYyBhbmQgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcclxuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJlxyXG4gICAgICBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xyXG4gICAgICB1bml0ID0gJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVuZGVyZXIpIHtcclxuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgcHJvcCwgYCR7U3RyaW5nKHN0eWxlc1twcm9wXSl9JHt1bml0fWApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBTdHJpbmcoc3R5bGVzW3Byb3BdKSArIHVuaXQ7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCwgZ2V0T3V0ZXJTaXplcywgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJvdyhkYXRhOiBEYXRhKSB7XHJcbiAgbGV0IHRhcmdldE9mZnNldHMgPSBkYXRhLm9mZnNldHMudGFyZ2V0O1xyXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXHJcbiAgY29uc3QgYXJyb3dFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKTtcclxuXHJcbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxyXG4gIGlmICghYXJyb3dFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XHJcblxyXG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcbiAgY29uc3Qgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xyXG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xyXG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XHJcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xyXG5cclxuICAvLyB0b3AvbGVmdCBzaWRlXHJcbiAgaWYgKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgdGFyZ2V0T2Zmc2V0c1tzaWRlXSkge1xyXG4gICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtPVxyXG4gICAgICB0YXJnZXRPZmZzZXRzW3NpZGVdIC0gKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcclxuICB9XHJcbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcclxuICBpZiAoTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSA+IHRhcmdldE9mZnNldHNbb3BTaWRlXSkge1xyXG4gICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSArPVxyXG4gICAgICBOdW1iZXIoZGF0YS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGFycm93RWxlbWVudFNpemUpIC0gTnVtYmVyKHRhcmdldE9mZnNldHNbb3BTaWRlXSk7XHJcbiAgfVxyXG4gIHRhcmdldE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHRhcmdldE9mZnNldHMpO1xyXG5cclxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgdGFyZ2V0XHJcbiAgY29uc3QgY2VudGVyID0gTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyKTtcclxuXHJcbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHRhcmdldCBvZmZzZXRzXHJcbiAgLy8gdGFrZSB0YXJnZXQgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcclxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS50YXJnZXQpO1xyXG5cclxuICBjb25zdCB0YXJnZXRNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdKTtcclxuICBjb25zdCB0YXJnZXRCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbYGJvcmRlciR7c2lkZUNhcGl0YWxpemVkfVdpZHRoYF0pO1xyXG4gIGxldCBzaWRlVmFsdWUgPVxyXG4gICAgY2VudGVyIC0gdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtIHRhcmdldE1hcmdpblNpZGUgLSB0YXJnZXRCb3JkZXJTaWRlO1xyXG5cclxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyB0YXJnZXRcclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih0YXJnZXRPZmZzZXRzW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcclxuXHJcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge1xyXG4gICAgW3NpZGVdOiBNYXRoLnJvdW5kKHNpZGVWYWx1ZSksXHJcbiAgICBbYWx0U2lkZV06ICcnIC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxyXG4gIH07XHJcblxyXG4gIGRhdGEuaW5zdGFuY2UuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY29tcHV0ZUF1dG9QbGFjZW1lbnQsXHJcbiAgZ2V0Qm91bmRhcmllcyxcclxuICBnZXRDbGllbnRSZWN0LFxyXG4gIGdldE9wcG9zaXRlVmFyaWF0aW9uLFxyXG4gIGdldFRhcmdldE9mZnNldHMsXHJcbiAgaXNNb2RpZmllckVuYWJsZWRcclxufSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwKGRhdGE6IERhdGEpOiBEYXRhIHtcclxuICBkYXRhLm9mZnNldHMudGFyZ2V0ID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMudGFyZ2V0KTtcclxuXHJcbiAgaWYgKCFpc01vZGlmaWVyRW5hYmxlZChkYXRhLm9wdGlvbnMsICdmbGlwJykpIHtcclxuXHJcbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xyXG4gICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxyXG4gICAgICAuLi5nZXRUYXJnZXRPZmZzZXRzKFxyXG4gICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxyXG4gICAgICAgIGRhdGEub2Zmc2V0cy5ob3N0LFxyXG4gICAgICAgIGRhdGEucGxhY2VtZW50XHJcbiAgICAgIClcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcclxuICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxyXG4gICAgZGF0YS5pbnN0YW5jZS5ob3N0LFxyXG4gICAgMCwgLy8gcGFkZGluZ1xyXG4gICAgJ3ZpZXdwb3J0JyxcclxuICAgIGZhbHNlIC8vIHBvc2l0aW9uRml4ZWRcclxuICApO1xyXG5cclxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcclxuICBsZXQgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVsxXSB8fCAnJztcclxuXHJcbiAgY29uc3Qgb2Zmc2V0c0hvc3QgPSBkYXRhLm9mZnNldHMuaG9zdDtcclxuICBjb25zdCB0YXJnZXQgPSBkYXRhLmluc3RhbmNlLnRhcmdldDtcclxuICBjb25zdCBob3N0ID0gZGF0YS5pbnN0YW5jZS5ob3N0O1xyXG5cclxuICBjb25zdCBhZGFwdGl2ZVBvc2l0aW9uID0gdmFyaWF0aW9uXHJcbiAgICA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KCdhdXRvJywgb2Zmc2V0c0hvc3QsIHRhcmdldCwgaG9zdCwgWyd0b3AnLCAnYm90dG9tJ10pXHJcbiAgICA6IGNvbXB1dGVBdXRvUGxhY2VtZW50KCdhdXRvJywgb2Zmc2V0c0hvc3QsIHRhcmdldCwgaG9zdCk7XHJcblxyXG4gIGNvbnN0IGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIGFkYXB0aXZlUG9zaXRpb25dO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xyXG4gIGZsaXBPcmRlci5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcclxuXHJcbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSBob3N0IG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXHJcbiAgICBjb25zdCBvdmVybGFwc1JlZiA9XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5yaWdodCkgPiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LmxlZnQpKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmXHJcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5yaWdodCkpIHx8XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmXHJcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmJvdHRvbSkgPiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LnRvcCkpIHx8XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmXHJcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCkgPCBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LmJvdHRvbSkpO1xyXG5cclxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQubGVmdCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMubGVmdCk7XHJcbiAgICBjb25zdCBvdmVyZmxvd3NSaWdodCA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5yaWdodCkgPiBNYXRoLmZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xyXG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMudG9wKTtcclxuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmZsb3dzQm91bmRhcmllcyA9XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3ApIHx8XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XHJcblxyXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXHJcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcclxuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb24gPVxyXG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcclxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XHJcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c1RvcCkgfHxcclxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xyXG5cclxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcclxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcclxuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcclxuICAgICAgICB2YXJpYXRpb24gPSBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhLnBsYWNlbWVudCA9IHBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgICR7dmFyaWF0aW9ufWAgOiAnJyk7XHJcblxyXG4gICAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xyXG4gICAgICAgIC4uLmRhdGEub2Zmc2V0cy50YXJnZXQsXHJcbiAgICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcclxuICAgICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxyXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLmhvc3QsXHJcbiAgICAgICAgICBkYXRhLnBsYWNlbWVudFxyXG4gICAgICAgIClcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBjb21wdXRlQXV0b1BsYWNlbWVudCxcclxuICBnZXRSZWZlcmVuY2VPZmZzZXRzLFxyXG4gIGdldFRhcmdldE9mZnNldHNcclxufSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBEYXRhLCBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF0YShcclxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwb3NpdGlvbjogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zXHJcbik6IERhdGEge1xyXG5cclxuICBjb25zdCBob3N0RWxQb3NpdGlvbiA9IGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xyXG4gIGNvbnN0IHBsYWNlbWVudEF1dG8gPSAhIXBvc2l0aW9uLm1hdGNoKC9hdXRvL2cpO1xyXG5cclxuICAvLyBzdXBwb3J0IG9sZCBwbGFjZW1lbnRzICdhdXRvIGxlZnR8cmlnaHR8dG9wfGJvdHRvbSdcclxuICBsZXQgcGxhY2VtZW50ID0gISFwb3NpdGlvbi5tYXRjaCgvYXV0b1xccyhsZWZ0fHJpZ2h0fHRvcHxib3R0b20pL2cpXHJcbiAgICA/IHBvc2l0aW9uLnNwbGl0KCcgJylbMV0gfHwgJydcclxuICAgIDogcG9zaXRpb247XHJcblxyXG4gIGNvbnN0IHRhcmdldE9mZnNldCA9IGdldFRhcmdldE9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsUG9zaXRpb24sIHBsYWNlbWVudCk7XHJcbiAgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCBob3N0RWxQb3NpdGlvbiwgdGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgb3B0aW9ucyxcclxuICAgIGluc3RhbmNlOiB7XHJcbiAgICAgIHRhcmdldDogdGFyZ2V0RWxlbWVudCxcclxuICAgICAgaG9zdDogaG9zdEVsZW1lbnQsXHJcbiAgICAgIGFycm93OiBudWxsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0czoge1xyXG4gICAgICB0YXJnZXQ6IHRhcmdldE9mZnNldCxcclxuICAgICAgaG9zdDogaG9zdEVsUG9zaXRpb24sXHJcbiAgICAgIGFycm93OiBudWxsXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb25GaXhlZDogZmFsc2UsXHJcbiAgICBwbGFjZW1lbnQsXHJcbiAgICBwbGFjZW1lbnRBdXRvXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRCb3VuZGFyaWVzIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YTogRGF0YSkge1xyXG5cclxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcclxuICAvLyByZXNldHMgdGhlIHRhcmdldE9mZnNldHMncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xyXG4gIC8vIHRoZSBzaXplIG9mIHRoZSB0YXJnZXRPZmZzZXRzIGVsZW1lbnQgaXRzZWxmXHJcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xyXG4gIGNvbnN0IHRhcmdldFN0eWxlcyA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0LnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXHJcbiAgY29uc3QgeyB0b3AsIGxlZnQsIFt0cmFuc2Zvcm1Qcm9wXTogdHJhbnNmb3JtIH0gPSB0YXJnZXRTdHlsZXM7XHJcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9ICcnO1xyXG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gJyc7XHJcbiAgdGFyZ2V0U3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XHJcblxyXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxyXG4gICAgZGF0YS5pbnN0YW5jZS50YXJnZXQsXHJcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXHJcbiAgICAwLCAvLyBwYWRkaW5nXHJcbiAgICAnc2Nyb2xsUGFyZW50JyxcclxuICAgIGZhbHNlIC8vIHBvc2l0aW9uRml4ZWRcclxuICApO1xyXG5cclxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcclxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcclxuICB0YXJnZXRTdHlsZXMudG9wID0gdG9wO1xyXG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gbGVmdDtcclxuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XHJcblxyXG4gIGNvbnN0IG9yZGVyID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgY29uc3QgY2hlY2sgPSB7XHJcbiAgICBwcmltYXJ5KHBsYWNlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGRhdGEub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRhdGEub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxyXG4gICAgICAgICFmYWxzZSAvLyBvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcclxuICAgICAgKSB7XHJcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChkYXRhLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IFtwbGFjZW1lbnRdOiB2YWx1ZSB9O1xyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeShwbGFjZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICBjb25zdCBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xyXG4gICAgICBsZXQgdmFsdWUgPSBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRhdGEub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxyXG4gICAgICAgICFmYWxzZSAvLyBlc2NhcGVXaXRoUmVmZXJlbmNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4oXHJcbiAgICAgICAgICBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXSxcclxuICAgICAgICAgIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtXHJcbiAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gZGF0YS5vZmZzZXRzLnRhcmdldC53aWR0aCA6IGRhdGEub2Zmc2V0cy50YXJnZXQuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNpZGU6IHN0cmluZztcclxuXHJcbiAgb3JkZXIuZm9yRWFjaChwbGFjZW1lbnQgPT4ge1xyXG4gICAgc2lkZSA9IFsnbGVmdCcsICd0b3AnXVxyXG4gICAgICAuaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMVxyXG4gICAgICA/ICdwcmltYXJ5J1xyXG4gICAgICA6ICdzZWNvbmRhcnknO1xyXG5cclxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7IC4uLmRhdGEub2Zmc2V0cy50YXJnZXQsIC4uLmNoZWNrW3NpZGVdKHBsYWNlbWVudCkgfTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0KGRhdGE6IERhdGEpOiBEYXRhIHtcclxuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcclxuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMF07XHJcbiAgY29uc3Qgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XHJcbiAgICBjb25zdCB7IGhvc3QsIHRhcmdldCB9ID0gZGF0YS5vZmZzZXRzO1xyXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xyXG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcclxuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcclxuXHJcbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XHJcbiAgICAgIGxlZnQ6IHsgW3NpZGVdOiBob3N0W3NpZGVdIH0sXHJcbiAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgW3NpZGVdOiBob3N0W3NpZGVdICsgaG9zdFttZWFzdXJlbWVudF0gLSBob3N0W21lYXN1cmVtZW50XVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7IC4uLnRhcmdldCwgLi4uc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcclxuICogQGNvcHlyaWdodCBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xyXG4gKi9cclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBnZXRSZWZlcmVuY2VPZmZzZXRzLCBzZXRBbGxTdHlsZXMgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IGFycm93LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIHNoaWZ0LCBpbml0RGF0YSB9IGZyb20gJy4vbW9kaWZpZXJzJztcclxuaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cywgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xyXG4gIHBvc2l0aW9uKGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IE9mZnNldHMge1xyXG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvZmZzZXQoaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogT2Zmc2V0cyB7XHJcbiAgICByZXR1cm4gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICBwb3NpdGlvbjogc3RyaW5nLFxyXG4gICAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcclxuICAgIG9wdGlvbnM/OiBPcHRpb25zXHJcbiAgKTogRGF0YSB7XHJcbiAgICBjb25zdCBjaGFpbk9mTW9kaWZpZXJzID0gW2ZsaXAsIHNoaWZ0LCBwcmV2ZW50T3ZlcmZsb3csIGFycm93XTtcclxuXHJcbiAgICByZXR1cm4gY2hhaW5PZk1vZGlmaWVycy5yZWR1Y2UoXHJcbiAgICAgIChtb2RpZmllZERhdGEsIG1vZGlmaWVyKSA9PiBtb2RpZmllcihtb2RpZmllZERhdGEpLFxyXG4gICAgICBpbml0RGF0YSh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCwgcG9zaXRpb24sIG9wdGlvbnMpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25TZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcclxuICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgcGxhY2VtZW50OiBzdHJpbmcsXHJcbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcclxuICBvcHRpb25zPzogT3B0aW9ucyxcclxuICByZW5kZXJlcj86IFJlbmRlcmVyMlxyXG4pOiB2b2lkIHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgaG9zdEVsZW1lbnQsXHJcbiAgICB0YXJnZXRFbGVtZW50LFxyXG4gICAgcGxhY2VtZW50LFxyXG4gICAgYXBwZW5kVG9Cb2R5LFxyXG4gICAgb3B0aW9uc1xyXG4gICk7XHJcblxyXG4gIHNldEFsbFN0eWxlcyhkYXRhLCByZW5kZXJlcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXJGYWN0b3J5MiwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAnLi9uZy1wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW9ucyB7XHJcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB3aWxsIGJlIG1vdmVkICovXHJcbiAgZWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGJlIGF0dGFjaGVkIHRvICAqL1xyXG4gIHRhcmdldD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtYXR0YWNobWVudCBob3Jpei1hdHRhY2htZW50JyBvciAncGxhY2VtZW50J1xyXG4gICAqIC0gcGxhY2VtZW50IGNhbiBiZSBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICogbm90IHlldCBzdXBwb3J0ZWQ6XHJcbiAgICogLSB2ZXJ0LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAndG9wJywgJ21pZGRsZScsICdib3R0b20nXHJcbiAgICogLSBob3Jpei1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J1xyXG4gICAqL1xyXG4gIGF0dGFjaG1lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBhdHRhY2htZW50YC4gVGhlIG9uZSBkaWZmZXJlbmNlIGlzIHRoYXQsIGlmIGl0J3Mgbm90IHByb3ZpZGVkLFxyXG4gICAqIGB0YXJnZXRBdHRhY2htZW50YCB3aWxsIGFzc3VtZSB0aGUgbWlycm9yIGltYWdlIG9mIGBhdHRhY2htZW50YC5cclxuICAgKi9cclxuICB0YXJnZXRBdHRhY2htZW50Pzogc3RyaW5nO1xyXG5cclxuICAvKiogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtb2Zmc2V0IGhvcml6LW9mZnNldCdcclxuICAgKiAtIHZlcnQtb2Zmc2V0IGFuZCBob3Jpei1vZmZzZXQgY2FuIGJlIG9mIHRoZSBmb3JtIFwiMjBweFwiIG9yIFwiNTUlXCJcclxuICAgKi9cclxuICBvZmZzZXQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBvZmZzZXRgLCBidXQgcmVmZXJyaW5nIHRvIHRoZSBvZmZzZXQgb2YgdGhlIHRhcmdldCAqL1xyXG4gIHRhcmdldE9mZnNldD86IHN0cmluZztcclxuXHJcbiAgLyoqIElmIHRydWUgY29tcG9uZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gYm9keSAqL1xyXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xyXG4gIG9wdGlvbnM6IE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSB1cGRhdGUkJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvbkVsZW1lbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIG1lcmdlKFxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKSxcclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJyksXHJcbiAgICAgICAgb2YoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxyXG4gICAgICAgIHRoaXMudXBkYXRlJCRcclxuICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwb3NpdGlvbkVsZW1lbnQ6IFBvc2l0aW9uaW5nT3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudHMoXHJcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LnRhcmdldCksXHJcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LmVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50LmF0dGFjaG1lbnQsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXBwZW5kVG9Cb2R5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbihvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkUG9zaXRpb25FbGVtZW50KG9wdGlvbnMpO1xyXG4gICAgdGhpcy51cGRhdGUkJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBhZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuc2V0KF9nZXRIdG1sRWxlbWVudChvcHRpb25zLmVsZW1lbnQpLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc2l0aW9uRWxlbWVudChlbFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLmRlbGV0ZShfZ2V0SHRtbEVsZW1lbnQoZWxSZWYpKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRIdG1sRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBnb3QgYSBzZWxlY3RvclxyXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJ1bklzSUUiLCJzZXRBbGxTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBLGtDQUF5QyxPQUFvQixFQUFFLFFBQWlCO0lBQzlFLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxDQUFDLEVBQUU7UUFDMUIsT0FBTyxFQUFFLENBQUM7S0FDWDs7SUFFRCxxQkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7SUFDakQscUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbkQsT0FBTyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztDQUN2Qzs7Ozs7Ozs7Ozs7QUNURCx1QkFBOEIsT0FBWTtJQUN4QyxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO1FBQy9CLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBRUQsT0FBTyxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUM7Q0FDM0M7Ozs7OztBQ05EOzs7O0FBR0EseUJBQWdDLE9BQVk7O0lBRTFDLElBQUksQ0FBQyxPQUFPLEVBQUU7UUFDWixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FDdEI7SUFFRCxRQUFRLE9BQU8sQ0FBQyxRQUFRO1FBQ3RCLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxNQUFNO1lBQ1QsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztRQUNwQyxLQUFLLFdBQVc7WUFDZCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUM7UUFDdEIsUUFBUTtLQUNUOztJQUdELDRDQUFRLHNCQUFRLEVBQUUsd0JBQVMsRUFBRSx3QkFBUyxDQUF1QztJQUM3RSxJQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxN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