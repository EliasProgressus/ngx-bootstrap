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
    const /** @type {?} */ window = element.ownerDocument.defaultView;
    const /** @type {?} */ css = window.getComputedStyle(element, null);
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
    const { overflow, overflowX, overflowY } = getStyleComputedProperty(element);
    if (/(auto|scroll|overlay)/.test(String(overflow) + String(overflowY) + String(overflowX))) {
        return element;
    }
    return getScrollParent(getParentNode(element));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ isIE11 = isBrowser && !!((/** @type {?} */ (window)).MSInputMethodContext && (/** @type {?} */ (document)).documentMode);
const /** @type {?} */ isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
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
    const /** @type {?} */ noOffsetParent = isIE(10) ? document.body : null;
    // NOTE: 1 DOM access here
    let /** @type {?} */ offsetParent = element.offsetParent || null;
    // Skip hidden elements which don't have an offsetParent
    let /** @type {?} */ sibling;
    while (offsetParent === noOffsetParent && element.nextElementSibling) {
        sibling = element.nextElementSibling;
        offsetParent = sibling.offsetParent;
    }
    const /** @type {?} */ nodeName = offsetParent && offsetParent.nodeName;
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
    const { nodeName } = element;
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
    const /** @type {?} */ order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    const /** @type {?} */ start = order ? element1 : element2;
    const /** @type {?} */ end = order ? element2 : element1;
    // Get common ancestor container
    const /** @type {?} */ range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    const { commonAncestorContainer } = range;
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
    const /** @type {?} */ element1root = getRoot(element1);
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
    const /** @type {?} */ sideA = axis === 'x' ? 'Left' : 'Top';
    const /** @type {?} */ sideB = sideA === 'Left' ? 'Right' : 'Bottom';
    return (parseFloat(styles[`border${sideA}Width`]) +
        parseFloat(styles[`border${sideB}Width`]));
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
    return Math.max(body[`offset${axis}`], body[`scroll${axis}`], html[`client${axis}`], html[`offset${axis}`], html[`scroll${axis}`], isIE(10)
        ? (parseInt(html[`offset${axis}`], 10) +
            parseInt(computedStyle[`margin${axis === 'Height' ? 'Top' : 'Left'}`], 10) +
            parseInt(computedStyle[`margin${axis === 'Height' ? 'Bottom' : 'Right'}`], 10))
        : 0);
}
/**
 * @param {?} document
 * @return {?}
 */
function getWindowSizes(document) {
    const /** @type {?} */ body = document.body;
    const /** @type {?} */ html = document.documentElement;
    const /** @type {?} */ computedStyle = isIE(10) && getComputedStyle(html);
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
function getScroll(element, side = 'top') {
    const /** @type {?} */ upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    const /** @type {?} */ nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        const /** @type {?} */ html = element.ownerDocument.documentElement;
        const /** @type {?} */ scrollingElement = element.ownerDocument.scrollingElement || html;
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
    return Object.assign({}, offsets, { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
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
    let /** @type {?} */ rect = {};
    // IE10 10 FIX: Please, don't ask, the element isn't
    // considered in DOM in some circumstances...
    // This isn't reproducible in IE10 compatibility mode of IE11
    try {
        if (isIE(10)) {
            rect = element.getBoundingClientRect();
            const /** @type {?} */ scrollTop = getScroll(element, 'top');
            const /** @type {?} */ scrollLeft = getScroll(element, 'left');
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
    const /** @type {?} */ result = {
        left: rect.left,
        top: rect.top,
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    };
    // subtract scrollbar size from sizes
    const /** @type {?} */ sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
    const /** @type {?} */ width = sizes.width || element.clientWidth || result.right - result.left;
    const /** @type {?} */ height = sizes.height || element.clientHeight || result.bottom - result.top;
    let /** @type {?} */ horizScrollbar = element.offsetWidth - width;
    let /** @type {?} */ vertScrollbar = element.offsetHeight - height;
    // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
    // we make this check conditional for performance reasons
    if (horizScrollbar || vertScrollbar) {
        const /** @type {?} */ styles = getStyleComputedProperty(element);
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
function includeScroll(rect, element, subtract = false) {
    const /** @type {?} */ scrollTop = getScroll(element, 'top');
    const /** @type {?} */ scrollLeft = getScroll(element, 'left');
    const /** @type {?} */ modifier = subtract ? -1 : 1;
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
function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
    const /** @type {?} */ isIE10 = isIE(10);
    const /** @type {?} */ isHTML = parent.nodeName === 'HTML';
    const /** @type {?} */ childrenRect = getBoundingClientRect(children);
    const /** @type {?} */ parentRect = getBoundingClientRect(parent);
    const /** @type {?} */ scrollParent = getScrollParent(children);
    const /** @type {?} */ styles = getStyleComputedProperty(parent);
    const /** @type {?} */ borderTopWidth = parseFloat(styles.borderTopWidth);
    const /** @type {?} */ borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    let /** @type {?} */ offsets = getClientRect({
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
        const /** @type {?} */ marginTop = parseFloat(styles.marginTop);
        const /** @type {?} */ marginLeft = parseFloat(styles.marginLeft);
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
function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll = false) {
    const /** @type {?} */ html = element.ownerDocument.documentElement;
    const /** @type {?} */ relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    const /** @type {?} */ width = Math.max(html.clientWidth, window.innerWidth || 0);
    const /** @type {?} */ height = Math.max(html.clientHeight, window.innerHeight || 0);
    const /** @type {?} */ scrollTop = !excludeScroll ? getScroll(html) : 0;
    const /** @type {?} */ scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    const /** @type {?} */ offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width,
        height
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
    const /** @type {?} */ nodeName = element.nodeName;
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
    let /** @type {?} */ el = element.parentElement;
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
function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
    // NOTE: 1 DOM access here
    let /** @type {?} */ boundaries = { top: 0, left: 0 };
    const /** @type {?} */ offsetParent = fixedPosition ? getFixedPositionOffsetParent(target) : findCommonOffsetParent(target, host);
    // Handle viewport case
    if (boundariesElement === 'viewport') {
        boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
    }
    else {
        // Handle other cases based on DOM element used as boundaries
        let /** @type {?} */ boundariesNode;
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
        const /** @type {?} */ offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
        // In case of HTML, we need a different computation
        if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            const { height, width } = getWindowSizes(target.ownerDocument);
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
function getArea({ width, height }) {
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
function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'left', 'bottom', 'right'], boundariesElement = 'viewport', padding = 0) {
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    const /** @type {?} */ boundaries = getBoundaries(target, host, padding, boundariesElement);
    const /** @type {?} */ rects = {
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
    const /** @type {?} */ sortedAreas = Object.keys(rects)
        .map(key => (Object.assign({ key }, rects[key], { area: getArea(rects[key]) })))
        .sort((a, b) => b.area - a.area);
    let /** @type {?} */ filteredAreas = sortedAreas.filter(({ width, height }) => width >= target.clientWidth && height >= target.clientHeight);
    filteredAreas = allowedPositions
        .reduce((obj, key) => {
        return Object.assign({}, obj, { [key]: filteredAreas[key] });
    }, {});
    const /** @type {?} */ computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    const /** @type {?} */ variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? `-${variation}` : '');
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
    const /** @type {?} */ hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
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
    const /** @type {?} */ window = element.ownerDocument.defaultView;
    const /** @type {?} */ styles = window.getComputedStyle(element);
    const /** @type {?} */ x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    const /** @type {?} */ y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
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
function getReferenceOffsets(target, host, fixedPosition = null) {
    const /** @type {?} */ commonOffsetParent = fixedPosition
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
    const /** @type {?} */ placement = position.split(' ')[0];
    // Get target node sizes
    const /** @type {?} */ targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    const /** @type {?} */ targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    const /** @type {?} */ isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    const /** @type {?} */ mainSide = isHoriz ? 'top' : 'left';
    const /** @type {?} */ secondarySide = isHoriz ? 'left' : 'top';
    const /** @type {?} */ measurement = isHoriz ? 'height' : 'width';
    const /** @type {?} */ secondaryMeasurement = !isHoriz ? 'height' : 'width';
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
    const /** @type {?} */ target = data.instance.target;
    const /** @type {?} */ offsets = getOffsets(data);
    setStyles(target, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    if (data.placementAuto) {
        if (renderer) {
            renderer.setAttribute(target, 'class', target.className.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`));
            renderer.setAttribute(target, 'class', target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`));
            renderer.setAttribute(target, 'class', target.className.replace(/\sauto/g, `\s${data.placement}`));
            if (target.className.match(/popover/g)) {
                renderer.addClass(target, 'popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                renderer.addClass(target, 'tooltip-auto');
            }
        }
        else {
            target.className = target.className.replace(/bs-popover-auto/g, `bs-popover-${data.placement}`);
            target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${data.placement}`);
            target.className = target.className.replace(/\sauto/g, `\s${data.placement}`);
            if (target.className.match(/popover/g)) {
                target.classList.add('popover-auto');
            }
            if (target.className.match(/tooltip/g)) {
                target.classList.add('tooltip-auto');
            }
        }
    }
    if (renderer) {
        renderer.setAttribute(target, 'class', target.className.replace(/left|right|top|bottom/g, `${data.placement}`));
    }
    else {
        target.className = target.className.replace(/left|right|top|bottom/g, `${data.placement}`);
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
    Object.keys(styles).forEach((prop) => {
        let /** @type {?} */ unit = '';
        // add unit if the value is numeric and is one of the following
        if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 &&
            isNumeric(styles[prop])) {
            unit = 'px';
        }
        if (renderer) {
            renderer.setStyle(element, prop, `${String(styles[prop])}${unit}`);
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
    let /** @type {?} */ targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    const /** @type {?} */ arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    const /** @type {?} */ isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    const /** @type {?} */ len = isVertical ? 'height' : 'width';
    const /** @type {?} */ sideCapitalized = isVertical ? 'Top' : 'Left';
    const /** @type {?} */ side = sideCapitalized.toLowerCase();
    const /** @type {?} */ altSide = isVertical ? 'left' : 'top';
    const /** @type {?} */ opSide = isVertical ? 'bottom' : 'right';
    const /** @type {?} */ arrowElementSize = getOuterSizes(arrowElement)[len];
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
    const /** @type {?} */ center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    const /** @type {?} */ css = getStyleComputedProperty(data.instance.target);
    const /** @type {?} */ targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]);
    const /** @type {?} */ targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]);
    let /** @type {?} */ sideValue = center - targetOffsets[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
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
function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    const /** @type {?} */ boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    let /** @type {?} */ placement = data.placement.split(' ')[0];
    let /** @type {?} */ variation = data.placement.split(' ')[1] || '';
    const /** @type {?} */ offsetsHost = data.offsets.host;
    const /** @type {?} */ target = data.instance.target;
    const /** @type {?} */ host = data.instance.host;
    const /** @type {?} */ adaptivePosition = variation
        ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
        : computeAutoPlacement('auto', offsetsHost, target, host);
    const /** @type {?} */ flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach((step, index) => {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        const /** @type {?} */ overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        const /** @type {?} */ overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        const /** @type {?} */ overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        const /** @type {?} */ overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        const /** @type {?} */ overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        const /** @type {?} */ overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        const /** @type {?} */ isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        const /** @type {?} */ flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
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
            data.placement = placement + (variation ? ` ${variation}` : '');
            data.offsets.target = Object.assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
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
    const /** @type {?} */ hostElPosition = getReferenceOffsets(targetElement, hostElement);
    const /** @type {?} */ placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    let /** @type {?} */ placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    const /** @type {?} */ targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options,
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
        placement,
        placementAuto
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
    const /** @type {?} */ transformProp = 'transform';
    const /** @type {?} */ targetStyles = data.instance.target.style; // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    const /** @type {?} */ boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    const /** @type {?} */ order = ['left', 'right', 'top', 'bottom'];
    const /** @type {?} */ check = {
        /**
         * @param {?} placement
         * @return {?}
         */
        primary(placement) {
            let /** @type {?} */ value = data.offsets.target[placement];
            if (data.offsets.target[placement] < boundaries[placement] &&
                !false // options.escapeWithReference
            ) {
                value = Math.max(data.offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        /**
         * @param {?} placement
         * @return {?}
         */
        secondary(placement) {
            const /** @type {?} */ mainSide = placement === 'right' ? 'left' : 'top';
            let /** @type {?} */ value = data.offsets.target[mainSide];
            if (data.offsets.target[placement] > boundaries[placement] &&
                !false // escapeWithReference
            ) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    let /** @type {?} */ side;
    order.forEach(placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign({}, data.offsets.target, check[side](placement));
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
    const /** @type {?} */ placement = data.placement;
    const /** @type {?} */ basePlacement = placement.split(' ')[0];
    const /** @type {?} */ shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        const { host, target } = data.offsets;
        const /** @type {?} */ isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        const /** @type {?} */ side = isVertical ? 'left' : 'top';
        const /** @type {?} */ measurement = isVertical ? 'width' : 'height';
        const /** @type {?} */ shiftOffsets = {
            left: { [side]: host[side] },
            right: {
                [side]: host[side] + host[measurement] - host[measurement]
            }
        };
        data.offsets.target = Object.assign({}, target, shiftOffsets[shiftvariation]);
    }
    return data;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    position(hostElement, targetElement, round = true) {
        return this.offset(hostElement, targetElement, false);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    offset(hostElement, targetElement, round = true) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        const /** @type {?} */ chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), initData(targetElement, hostElement, position, options));
    }
}
const /** @type {?} */ positionService = new Positioning();
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
    const /** @type {?} */ data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles$$1(data, renderer);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PositioningService {
    /**
     * @param {?} rendererFactory
     * @param {?} platformId
     */
    constructor(rendererFactory, platformId) {
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), of(0, animationFrameScheduler), this.update$$)
                .subscribe(() => {
                this.positionElements
                    .forEach((positionElement) => {
                    positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                });
            });
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        this.addPositionElement(options);
        this.update$$.next();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    /**
     * @param {?} elRef
     * @return {?}
     */
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PositioningService.ctorParameters = () => [
    { type: RendererFactory2, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3NpdGlvbmluZy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0UGFyZW50Tm9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRTY3JvbGxQYXJlbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNCcm93c2VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2lzSUUudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T2Zmc2V0UGFyZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2lzT2Zmc2V0Q29udGFpbmVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFJvb3QudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZmluZENvbW1vbk9mZnNldFBhcmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRCb3JkZXJzU2l6ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRXaW5kb3dTaXplcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRTY3JvbGwudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Q2xpZW50UmVjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRCb3VuZGluZ0NsaWVudFJlY3QudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaW5jbHVkZVNjcm9sbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2lzRml4ZWQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRCb3VuZGFyaWVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2NvbXB1dGVBdXRvUGxhY2VtZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldE9mZnNldHMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T3Bwb3NpdGVQbGFjZW1lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T3Bwb3NpdGVWYXJpYXRpb24udHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvZ2V0T3V0ZXJTaXplcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9nZXRSZWZlcmVuY2VPZmZzZXRzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL2dldFRhcmdldE9mZnNldHMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNNb2RpZmllckVuYWJsZWQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvdXRpbHMvaXNOdW1lcmljLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL3V0aWxzL3NldEFsbFN0eWxlcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy91dGlscy9zZXRTdHlsZXMudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvbW9kaWZpZXJzL2Fycm93LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9mbGlwLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9pbml0RGF0YS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9tb2RpZmllcnMvcHJldmVudE92ZXJmbG93LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nL21vZGlmaWVycy9zaGlmdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9uZy1wb3NpdGlvbmluZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy9wb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZXQgQ1NTIGNvbXB1dGVkIHByb3BlcnR5IG9mIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wZXJ0eT86IHN0cmluZyk6IGFueSB7XHJcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcclxuICBjb25zdCB3aW5kb3cgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XHJcbiAgY29uc3QgY3NzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCwgbnVsbCk7XHJcblxyXG4gIHJldHVybiBwcm9wZXJ0eSA/IGNzc1twcm9wZXJ0eV0gOiBjc3M7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQ6IGFueSk6IGFueSB7XHJcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudC5wYXJlbnROb2RlIHx8IGVsZW1lbnQuaG9zdDtcclxufVxyXG4iLCIvKipcclxuICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBnZXRQYXJlbnROb2RlIH0gZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnQoZWxlbWVudDogYW55KTogYW55IHtcclxuICAvLyBSZXR1cm4gYm9keSwgYGdldFNjcm9sbGAgd2lsbCB0YWtlIGNhcmUgdG8gZ2V0IHRoZSBjb3JyZWN0IGBzY3JvbGxUb3BgIGZyb20gaXRcclxuICBpZiAoIWVsZW1lbnQpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xyXG4gIH1cclxuXHJcbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XHJcbiAgICBjYXNlICdIVE1MJzpcclxuICAgIGNhc2UgJ0JPRFknOlxyXG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XHJcbiAgICBjYXNlICcjZG9jdW1lbnQnOlxyXG4gICAgICByZXR1cm4gZWxlbWVudC5ib2R5O1xyXG4gICAgZGVmYXVsdDpcclxuICB9XHJcblxyXG4gIC8vIEZpcmVmb3ggd2FudCB1cyB0byBjaGVjayBgLXhgIGFuZCBgLXlgIHZhcmlhdGlvbnMgYXMgd2VsbFxyXG4gIGNvbnN0IHsgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIH0gPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XHJcbiAgaWYgKC8oYXV0b3xzY3JvbGx8b3ZlcmxheSkvLnRlc3QoU3RyaW5nKG92ZXJmbG93KSArIFN0cmluZyhvdmVyZmxvd1kpICsgU3RyaW5nKG92ZXJmbG93WCkpKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XHJcbiIsIi8qKlxyXG4gKiBEZXRlcm1pbmVzIGlmIHRoZSBicm93c2VyIGlzIEludGVybmV0IEV4cGxvcmVyXHJcbiAqL1xyXG5pbXBvcnQgeyBpc0Jyb3dzZXIgfSBmcm9tICcuL2lzQnJvd3Nlcic7XHJcblxyXG5jb25zdCBpc0lFMTEgPSBpc0Jyb3dzZXIgJiYgISEoKHdpbmRvdyBhcyBhbnkpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmIChkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSk7XHJcbmNvbnN0IGlzSUUxMCA9IGlzQnJvd3NlciAmJiAvTVNJRSAxMC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lFKHZlcnNpb24/OiBudW1iZXIpIHtcclxuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcclxuICAgIHJldHVybiBpc0lFMTE7XHJcbiAgfVxyXG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xyXG4gICAgcmV0dXJuIGlzSUUxMDtcclxuICB9XHJcblxyXG4gIHJldHVybiBpc0lFMTEgfHwgaXNJRTEwO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBvZmZzZXQgcGFyZW50IG9mIHRoZSBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuL2lzSUUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFBhcmVudChlbGVtZW50OiBhbnkpOiBhbnkge1xyXG4gIGlmICghZWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcclxuXHJcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcclxuICBsZXQgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcclxuICAvLyBTa2lwIGhpZGRlbiBlbGVtZW50cyB3aGljaCBkb24ndCBoYXZlIGFuIG9mZnNldFBhcmVudFxyXG5cclxuICBsZXQgc2libGluZzogYW55O1xyXG5cclxuICB3aGlsZSAob2Zmc2V0UGFyZW50ID09PSBub09mZnNldFBhcmVudCAmJiBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZykge1xyXG4gICAgc2libGluZyA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgb2Zmc2V0UGFyZW50ID0gc2libGluZy5vZmZzZXRQYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBub2RlTmFtZSA9IG9mZnNldFBhcmVudCAmJiBvZmZzZXRQYXJlbnQubm9kZU5hbWU7XHJcblxyXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICByZXR1cm4gc2libGluZyA/IHNpYmxpbmcub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICAvLyAub2Zmc2V0UGFyZW50IHdpbGwgcmV0dXJuIHRoZSBjbG9zZXN0IFRILCBURCBvciBUQUJMRSBpbiBjYXNlXHJcbiAgLy8gbm8gb2Zmc2V0UGFyZW50IGlzIHByZXNlbnQsIEkgaGF0ZSB0aGlzIGpvYi4uLlxyXG4gIGlmIChcclxuICAgIFsnVEgnLCAnVEQnLCAnVEFCTEUnXS5pbmRleE9mKG9mZnNldFBhcmVudC5ub2RlTmFtZSkgIT09IC0xICYmXHJcbiAgICBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYydcclxuICApIHtcclxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQob2Zmc2V0UGFyZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvZmZzZXRQYXJlbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0T2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9nZXRPZmZzZXRQYXJlbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2Zmc2V0Q29udGFpbmVyKGVsZW1lbnQ6IGFueSkge1xyXG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGVsZW1lbnQ7XHJcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBub2RlTmFtZSA9PT0gJ0hUTUwnIHx8IGdldE9mZnNldFBhcmVudChlbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKSA9PT0gZWxlbWVudFxyXG4gICk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290KG5vZGU6IE5vZGUpOiBhbnkge1xyXG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9kZTtcclxufVxyXG4iLCIvKipcclxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcclxuICovXHJcbmltcG9ydCB7IGlzT2Zmc2V0Q29udGFpbmVyIH0gZnJvbSAnLi9pc09mZnNldENvbnRhaW5lcic7XHJcbmltcG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL2dldFJvb3QnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MTogSFRNTEVsZW1lbnQsIGVsZW1lbnQyOiBIVE1MRWxlbWVudCk6IGFueSB7XHJcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXHJcbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZSAqL1xyXG4gIGNvbnN0IG9yZGVyID0gZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xyXG4gIGNvbnN0IGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcclxuXHJcbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcclxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xyXG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xyXG4gIGNvbnN0IHsgY29tbW9uQW5jZXN0b3JDb250YWluZXIgfSA9IHJhbmdlO1xyXG5cclxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XHJcbiAgaWYgKFxyXG4gICAgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJlxyXG4gICAgICBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIpIHx8XHJcbiAgICBzdGFydC5jb250YWlucyhlbmQpXHJcbiAgKSB7XHJcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XHJcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcclxuICBjb25zdCBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcclxuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcclxuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlbHBlciB0byBkZXRlY3QgYm9yZGVycyBvZiBhIGdpdmVuIGVsZW1lbnRcclxuICovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzOiBDU1NTdHlsZURlY2xhcmF0aW9uLCBheGlzOiBzdHJpbmcpIHtcclxuICBjb25zdCBzaWRlQSA9IGF4aXMgPT09ICd4JyA/ICdMZWZ0JyA6ICdUb3AnO1xyXG4gIGNvbnN0IHNpZGVCID0gc2lkZUEgPT09ICdMZWZ0JyA/ICdSaWdodCcgOiAnQm90dG9tJztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVBfVdpZHRoYF0pICtcclxuICAgIHBhcnNlRmxvYXQoc3R5bGVzW2Bib3JkZXIke3NpZGVCfVdpZHRoYF0pXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcclxuXHJcbmZ1bmN0aW9uIGdldFNpemUoYXhpczogc3RyaW5nLCBib2R5OiBIVE1MRWxlbWVudCwgaHRtbDogSFRNTEVsZW1lbnQsIGNvbXB1dGVkU3R5bGU6IENTU1N0eWxlRGVjbGFyYXRpb24pIHtcclxuICByZXR1cm4gTWF0aC5tYXgoXHJcbiAgICBib2R5W2BvZmZzZXQke2F4aXN9YF0sXHJcbiAgICBib2R5W2BzY3JvbGwke2F4aXN9YF0sXHJcbiAgICBodG1sW2BjbGllbnQke2F4aXN9YF0sXHJcbiAgICBodG1sW2BvZmZzZXQke2F4aXN9YF0sXHJcbiAgICBodG1sW2BzY3JvbGwke2F4aXN9YF0sXHJcbiAgICBpc0lFKDEwKVxyXG4gICAgICA/IChwYXJzZUludChodG1sW2BvZmZzZXQke2F4aXN9YF0sIDEwKSArXHJcbiAgICAgIHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbYG1hcmdpbiR7YXhpcyA9PT0gJ0hlaWdodCcgPyAnVG9wJyA6ICdMZWZ0J31gXSwgMTApICtcclxuICAgICAgcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtgbWFyZ2luJHtheGlzID09PSAnSGVpZ2h0JyA/ICdCb3R0b20nIDogJ1JpZ2h0J31gXSwgMTApKVxyXG4gICAgOiAwXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50OiBEb2N1bWVudCkge1xyXG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xyXG4gIGNvbnN0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGlzSUUoMTApICYmIGdldENvbXB1dGVkU3R5bGUoaHRtbCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBoZWlnaHQ6IGdldFNpemUoJ0hlaWdodCcsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpLFxyXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNpZGUgPSAndG9wJykge1xyXG4gIGNvbnN0IHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XHJcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xyXG5cclxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xyXG5cclxuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHaXZlbiBlbGVtZW50IG9mZnNldHMsIGdlbmVyYXRlIGFuIG91dHB1dCBzaW1pbGFyIHRvIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxyXG4gKi9cclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50UmVjdChvZmZzZXRzOiBPZmZzZXRzKTogT2Zmc2V0cyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLm9mZnNldHMsXHJcbiAgICByaWdodDogb2Zmc2V0cy5sZWZ0ICsgb2Zmc2V0cy53aWR0aCxcclxuICAgIGJvdHRvbTogb2Zmc2V0cy50b3AgKyBvZmZzZXRzLmhlaWdodFxyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGdldEJvcmRlcnNTaXplIH0gZnJvbSAnLi9nZXRCb3JkZXJzU2l6ZSc7XHJcbmltcG9ydCB7IGdldFdpbmRvd1NpemVzIH0gZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XHJcbmltcG9ydCB7IGdldFNjcm9sbCB9IGZyb20gJy4vZ2V0U2Nyb2xsJztcclxuaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XHJcbmltcG9ydCB7IGlzSUUgfSBmcm9tICcuL2lzSUUnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3VuZGluZ0NsaWVudFJlY3QoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBPZmZzZXRzIHtcclxuICBsZXQgcmVjdDogYW55ID0ge307XHJcblxyXG4gIC8vIElFMTAgMTAgRklYOiBQbGVhc2UsIGRvbid0IGFzaywgdGhlIGVsZW1lbnQgaXNuJ3RcclxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cclxuICAvLyBUaGlzIGlzbid0IHJlcHJvZHVjaWJsZSBpbiBJRTEwIGNvbXBhdGliaWxpdHkgbW9kZSBvZiBJRTExXHJcbiAgdHJ5IHtcclxuICAgIGlmIChpc0lFKDEwKSkge1xyXG4gICAgICByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcclxuICAgICAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xyXG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XHJcbiAgICAgIHJlY3QubGVmdCArPSBzY3JvbGxMZWZ0O1xyXG4gICAgICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3A7XHJcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCByZXN1bHQ6IGFueSA9IHtcclxuICAgIGxlZnQ6IHJlY3QubGVmdCxcclxuICAgIHRvcDogcmVjdC50b3AsXHJcbiAgICB3aWR0aDogcmVjdC5yaWdodCAtIHJlY3QubGVmdCxcclxuICAgIGhlaWdodDogcmVjdC5ib3R0b20gLSByZWN0LnRvcFxyXG4gIH07XHJcblxyXG4gIC8vIHN1YnRyYWN0IHNjcm9sbGJhciBzaXplIGZyb20gc2l6ZXNcclxuICBjb25zdCBzaXplczogYW55ID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnID8gZ2V0V2luZG93U2l6ZXMoZWxlbWVudC5vd25lckRvY3VtZW50KSA6IHt9O1xyXG4gIGNvbnN0IHdpZHRoID1cclxuICAgIHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LnJpZ2h0IC0gcmVzdWx0LmxlZnQ7XHJcbiAgY29uc3QgaGVpZ2h0ID1cclxuICAgIHNpemVzLmhlaWdodCB8fCBlbGVtZW50LmNsaWVudEhlaWdodCB8fCByZXN1bHQuYm90dG9tIC0gcmVzdWx0LnRvcDtcclxuXHJcbiAgbGV0IGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xyXG4gIGxldCB2ZXJ0U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRIZWlnaHQgLSBoZWlnaHQ7XHJcblxyXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXHJcbiAgLy8gd2UgbWFrZSB0aGlzIGNoZWNrIGNvbmRpdGlvbmFsIGZvciBwZXJmb3JtYW5jZSByZWFzb25zXHJcbiAgaWYgKGhvcml6U2Nyb2xsYmFyIHx8IHZlcnRTY3JvbGxiYXIpIHtcclxuICAgIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50KTtcclxuICAgIGhvcml6U2Nyb2xsYmFyIC09IGdldEJvcmRlcnNTaXplKHN0eWxlcywgJ3gnKTtcclxuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xyXG5cclxuICAgIHJlc3VsdC53aWR0aCAtPSBob3JpelNjcm9sbGJhcjtcclxuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFN1bSBvciBzdWJ0cmFjdCB0aGUgZWxlbWVudCBzY3JvbGwgdmFsdWVzIChsZWZ0IGFuZCB0b3ApIGZyb20gYSBnaXZlbiByZWN0IG9iamVjdFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlU2Nyb2xsKHJlY3Q6IE9mZnNldHMsIGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzdWJ0cmFjdCA9IGZhbHNlKSB7XHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcclxuICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XHJcbiAgY29uc3QgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcclxuICByZWN0LnRvcCArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcclxuICByZWN0LmJvdHRvbSArPSBzY3JvbGxUb3AgKiBtb2RpZmllcjtcclxuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xyXG4gIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xyXG5cclxuICByZXR1cm4gcmVjdDtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgfSBmcm9tICcuL2dldEJvdW5kaW5nQ2xpZW50UmVjdCc7XHJcbmltcG9ydCB7IGdldENsaWVudFJlY3QgfSBmcm9tICcuL2dldENsaWVudFJlY3QnO1xyXG5pbXBvcnQgeyBnZXRTY3JvbGxQYXJlbnQgfSBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgaW5jbHVkZVNjcm9sbCB9IGZyb20gJy4vaW5jbHVkZVNjcm9sbCc7XHJcbmltcG9ydCB7IGlzSUUgYXMgcnVuSXNJRSB9IGZyb20gJy4vaXNJRSc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShcclxuICBjaGlsZHJlbjogSFRNTEVsZW1lbnQsXHJcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICBmaXhlZFBvc2l0aW9uID0gZmFsc2VcclxuKTogT2Zmc2V0cyB7XHJcbiAgY29uc3QgaXNJRTEwID0gcnVuSXNJRSgxMCk7XHJcbiAgY29uc3QgaXNIVE1MID0gcGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCc7XHJcbiAgY29uc3QgY2hpbGRyZW5SZWN0OiBhbnkgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QoY2hpbGRyZW4pO1xyXG4gIGNvbnN0IHBhcmVudFJlY3Q6IGFueSA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChwYXJlbnQpO1xyXG4gIGNvbnN0IHNjcm9sbFBhcmVudCA9IGdldFNjcm9sbFBhcmVudChjaGlsZHJlbik7XHJcblxyXG4gIGNvbnN0IHN0eWxlcyA9IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShwYXJlbnQpO1xyXG4gIGNvbnN0IGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xyXG4gIGNvbnN0IGJvcmRlckxlZnRXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlckxlZnRXaWR0aCk7XHJcblxyXG4gIC8vIEluIGNhc2VzIHdoZXJlIHRoZSBwYXJlbnQgaXMgZml4ZWQsIHdlIG11c3QgaWdub3JlIG5lZ2F0aXZlIHNjcm9sbCBpbiBvZmZzZXQgY2FsY1xyXG4gIGlmIChmaXhlZFBvc2l0aW9uICYmIGlzSFRNTCkge1xyXG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XHJcbiAgICBwYXJlbnRSZWN0LmxlZnQgPSBNYXRoLm1heChwYXJlbnRSZWN0LmxlZnQsIDApO1xyXG4gIH1cclxuXHJcbiAgbGV0IG9mZnNldHM6IE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHtcclxuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXHJcbiAgICBsZWZ0OiBjaGlsZHJlblJlY3QubGVmdCAtIHBhcmVudFJlY3QubGVmdCAtIGJvcmRlckxlZnRXaWR0aCxcclxuICAgIHdpZHRoOiBjaGlsZHJlblJlY3Qud2lkdGgsXHJcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHRcclxuICB9KTtcclxuXHJcbiAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSAwO1xyXG4gIG9mZnNldHMubWFyZ2luTGVmdCA9IDA7XHJcblxyXG4gIC8vIFN1YnRyYWN0IG1hcmdpbnMgb2YgZG9jdW1lbnRFbGVtZW50IGluIGNhc2UgaXQncyBiZWluZyB1c2VkIGFzIHBhcmVudFxyXG4gIC8vIHdlIGRvIHRoaXMgb25seSBvbiBIVE1MIGJlY2F1c2UgaXQncyB0aGUgb25seSBlbGVtZW50IHRoYXQgYmVoYXZlc1xyXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXHJcbiAgLy8gdGhlIGJveCBvZiB0aGUgZG9jdW1lbnRFbGVtZW50LCBpbiB0aGUgb3RoZXIgY2FzZXMgbm90LlxyXG4gIGlmICghaXNJRTEwICYmIGlzSFRNTCkge1xyXG4gICAgY29uc3QgbWFyZ2luVG9wID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wKTtcclxuICAgIGNvbnN0IG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KTtcclxuXHJcbiAgICBvZmZzZXRzLnRvcCAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcclxuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xyXG4gICAgb2Zmc2V0cy5sZWZ0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XHJcbiAgICBvZmZzZXRzLnJpZ2h0IC09IGJvcmRlckxlZnRXaWR0aCAtIG1hcmdpbkxlZnQ7XHJcblxyXG4gICAgLy8gQXR0YWNoIG1hcmdpblRvcCBhbmQgbWFyZ2luTGVmdCBiZWNhdXNlIGluIHNvbWUgY2lyY3Vtc3RhbmNlcyB3ZSBtYXkgbmVlZCB0aGVtXHJcbiAgICBvZmZzZXRzLm1hcmdpblRvcCA9IG1hcmdpblRvcDtcclxuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XHJcbiAgfVxyXG5cclxuICBpZiAoXHJcbiAgICBpc0lFMTAgJiYgIWZpeGVkUG9zaXRpb25cclxuICAgICAgPyBwYXJlbnQuY29udGFpbnMoc2Nyb2xsUGFyZW50KVxyXG4gICAgICA6IHBhcmVudCA9PT0gc2Nyb2xsUGFyZW50ICYmIHNjcm9sbFBhcmVudC5ub2RlTmFtZSAhPT0gJ0JPRFknXHJcbiAgKSB7XHJcbiAgICBvZmZzZXRzID0gaW5jbHVkZVNjcm9sbChvZmZzZXRzLCBwYXJlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9mZnNldHM7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XHJcbmltcG9ydCB7IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV4Y2x1ZGVTY3JvbGwgPSBmYWxzZSk6IE9mZnNldHMge1xyXG4gIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xyXG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xyXG4gIGNvbnN0IHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0ID0ge1xyXG4gICAgdG9wOiBzY3JvbGxUb3AgLSBOdW1iZXIocmVsYXRpdmVPZmZzZXQudG9wKSArIE51bWJlcihyZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3ApLFxyXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIE51bWJlcihyZWxhdGl2ZU9mZnNldC5sZWZ0KSArIE51bWJlcihyZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0KSxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcclxufVxyXG4iLCIvKipcclxuICogQ2hlY2sgaWYgdGhlIGdpdmVuIGVsZW1lbnQgaXMgZml4ZWQgb3IgaXMgaW5zaWRlIGEgZml4ZWQgcGFyZW50XHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGdldFBhcmVudE5vZGUgfSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRml4ZWQoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcclxuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XHJcbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQsICdwb3NpdGlvbicpID09PSAnZml4ZWQnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpc0ZpeGVkKGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xyXG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxyXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xyXG4gICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbGV0IGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xyXG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4iLCIvKipcclxuICogQ29tcHV0ZWQgdGhlIGJvdW5kYXJpZXMgbGltaXRzIGFuZCByZXR1cm4gdGhlbVxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0U2Nyb2xsUGFyZW50IH0gZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xyXG5pbXBvcnQgeyBnZXRQYXJlbnROb2RlIH0gZnJvbSAnLi9nZXRQYXJlbnROb2RlJztcclxuaW1wb3J0IHsgZmluZENvbW1vbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XHJcbmltcG9ydCB7IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlIH0gZnJvbSAnLi9nZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUnO1xyXG5pbXBvcnQgeyBnZXRXaW5kb3dTaXplcyB9IGZyb20gJy4vZ2V0V2luZG93U2l6ZXMnO1xyXG5pbXBvcnQgeyBpc0ZpeGVkIH0gZnJvbSAnLi9pc0ZpeGVkJztcclxuaW1wb3J0IHsgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm91bmRhcmllcyhcclxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxyXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxyXG4gIHBhZGRpbmcgPSAwLFxyXG4gIGJvdW5kYXJpZXNFbGVtZW50OiBzdHJpbmcsXHJcbiAgZml4ZWRQb3NpdGlvbiA9IGZhbHNlXHJcbikge1xyXG4gIC8vIE5PVEU6IDEgRE9NIGFjY2VzcyBoZXJlXHJcblxyXG4gIGxldCBib3VuZGFyaWVzOiBhbnkgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gIGNvbnN0IG9mZnNldFBhcmVudCA9IGZpeGVkUG9zaXRpb24gPyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KHRhcmdldCkgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHRhcmdldCwgaG9zdCk7XHJcblxyXG4gIC8vIEhhbmRsZSB2aWV3cG9ydCBjYXNlXHJcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XHJcbiAgICBib3VuZGFyaWVzID0gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKG9mZnNldFBhcmVudCwgZml4ZWRQb3NpdGlvbik7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcclxuICAgIGxldCBib3VuZGFyaWVzTm9kZTtcclxuICAgIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3Njcm9sbFBhcmVudCcpIHtcclxuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShob3N0KSk7XHJcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XHJcbiAgICAgICAgYm91bmRhcmllc05vZGUgPSB0YXJnZXQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvZmZzZXRzID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKFxyXG4gICAgICBib3VuZGFyaWVzTm9kZSxcclxuICAgICAgb2Zmc2V0UGFyZW50LFxyXG4gICAgICBmaXhlZFBvc2l0aW9uXHJcbiAgICApO1xyXG5cclxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxyXG4gICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnSFRNTCcgJiYgIWlzRml4ZWQob2Zmc2V0UGFyZW50KSkge1xyXG4gICAgICBjb25zdCB7IGhlaWdodCwgd2lkdGggfSA9IGdldFdpbmRvd1NpemVzKHRhcmdldC5vd25lckRvY3VtZW50KTtcclxuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcclxuICAgICAgYm91bmRhcmllcy5ib3R0b20gPSBOdW1iZXIoaGVpZ2h0KSArIE51bWJlcihvZmZzZXRzLnRvcCk7XHJcbiAgICAgIGJvdW5kYXJpZXMubGVmdCArPSBvZmZzZXRzLmxlZnQgLSBvZmZzZXRzLm1hcmdpbkxlZnQ7XHJcbiAgICAgIGJvdW5kYXJpZXMucmlnaHQgPSBOdW1iZXIod2lkdGgpICsgTnVtYmVyKG9mZnNldHMubGVmdCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcclxuICAgICAgYm91bmRhcmllcyA9IG9mZnNldHM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBBZGQgcGFkZGluZ3NcclxuICBib3VuZGFyaWVzLmxlZnQgKz0gcGFkZGluZztcclxuICBib3VuZGFyaWVzLnRvcCArPSBwYWRkaW5nO1xyXG4gIGJvdW5kYXJpZXMucmlnaHQgLT0gcGFkZGluZztcclxuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBwYWRkaW5nO1xyXG5cclxuICByZXR1cm4gYm91bmRhcmllcztcclxufVxyXG4iLCIvKipcclxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxyXG4gKiBhdmFpbGFibGUgc3BhY2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRCb3VuZGFyaWVzIH0gZnJvbSAnLi9nZXRCb3VuZGFyaWVzJztcclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XHJcbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXHJcbiAgcGxhY2VtZW50OiBzdHJpbmcsXHJcbiAgcmVmUmVjdDogT2Zmc2V0cyxcclxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxyXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxyXG4gIGFsbG93ZWRQb3NpdGlvbnM6IGFueVtdID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXSxcclxuICBib3VuZGFyaWVzRWxlbWVudCA9ICd2aWV3cG9ydCcsXHJcbiAgcGFkZGluZyA9IDBcclxuKSB7XHJcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XHJcbiAgICByZXR1cm4gcGxhY2VtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXModGFyZ2V0LCBob3N0LCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IHJlY3RzOiBhbnkgPSB7XHJcbiAgICB0b3A6IHtcclxuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxyXG4gICAgfSxcclxuICAgIHJpZ2h0OiB7XHJcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxyXG4gICAgfSxcclxuICAgIGJvdHRvbToge1xyXG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXHJcbiAgICB9LFxyXG4gICAgbGVmdDoge1xyXG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxyXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcclxuICAgIC5tYXAoa2V5ID0+ICh7XHJcbiAgICAgIGtleSxcclxuICAgICAgLi4ucmVjdHNba2V5XSxcclxuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxyXG4gICAgfSkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcclxuXHJcbiAgbGV0IGZpbHRlcmVkQXJlYXM6IGFueVtdID0gc29ydGVkQXJlYXMuZmlsdGVyKFxyXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxyXG4gICAgICB3aWR0aCA+PSB0YXJnZXQuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHRhcmdldC5jbGllbnRIZWlnaHRcclxuICApO1xyXG5cclxuICBmaWx0ZXJlZEFyZWFzID0gYWxsb3dlZFBvc2l0aW9uc1xyXG4gICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBba2V5XTogZmlsdGVyZWRBcmVhc1trZXldIH07XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50OiBzdHJpbmcgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcclxuICAgID8gZmlsdGVyZWRBcmVhc1swXS5rZXlcclxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xyXG5cclxuICBjb25zdCB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYXV0by9nLCBjb21wdXRlZFBsYWNlbWVudCk7XHJcblxyXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0cyhkYXRhOiBEYXRhKTogT2Zmc2V0cyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiBkYXRhLm9mZnNldHMudGFyZ2V0LndpZHRoLFxyXG4gICAgaGVpZ2h0OiBkYXRhLm9mZnNldHMudGFyZ2V0LmhlaWdodCxcclxuICAgIGxlZnQ6IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5sZWZ0KSxcclxuICAgIHRvcDogTWF0aC5yb3VuZChkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCksXHJcbiAgICBib3R0b206IE1hdGgucm91bmQoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pLFxyXG4gICAgcmlnaHQ6IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5yaWdodClcclxuICB9O1xyXG59XHJcbiIsIi8qKlxyXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50OiBzdHJpbmcpIHtcclxuICBjb25zdCBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XHJcblxyXG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIG1hdGNoZWQgPT4gaGFzaFttYXRjaGVkXSk7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uOiBzdHJpbmcpIHtcclxuICBpZiAodmFyaWF0aW9uID09PSAncmlnaHQnKSB7XHJcbiAgICByZXR1cm4gJ2xlZnQnO1xyXG4gIH0gZWxzZSBpZiAodmFyaWF0aW9uID09PSAnbGVmdCcpIHtcclxuICAgIHJldHVybiAncmlnaHQnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhcmlhdGlvbjtcclxufVxyXG4iLCIvKipcclxuICogR2V0IHRoZSBvdXRlciBzaXplcyBvZiB0aGUgZ2l2ZW4gZWxlbWVudCAob2Zmc2V0IHNpemUgKyBtYXJnaW5zKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudDogYW55KSB7XHJcbiAgY29uc3Qgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG4gIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xyXG4gIGNvbnN0IHggPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3AgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20gfHwgMCk7XHJcbiAgY29uc3QgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdpZHRoOiBOdW1iZXIoZWxlbWVudC5vZmZzZXRXaWR0aCkgKyB5LFxyXG4gICAgaGVpZ2h0OiBOdW1iZXIoZWxlbWVudC5vZmZzZXRIZWlnaHQpICsgeFxyXG4gIH07XHJcbn1cclxuIiwiLyoqXHJcbiAqIEdldCBvZmZzZXRzIHRvIHRoZSByZWZlcmVuY2UgZWxlbWVudFxyXG4gKi9cclxuaW1wb3J0IHsgZmluZENvbW1vbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZmluZENvbW1vbk9mZnNldFBhcmVudCc7XHJcbmltcG9ydCB7IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCB9IGZyb20gJy4vZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0OiBIVE1MRWxlbWVudCxcclxuICBmaXhlZFBvc2l0aW9uOiBib29sZWFuID0gbnVsbFxyXG4pOiBPZmZzZXRzIHtcclxuICBjb25zdCBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uXHJcbiAgICA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQodGFyZ2V0KVxyXG4gICAgOiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KHRhcmdldCwgaG9zdCk7XHJcblxyXG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoaG9zdCwgY29tbW9uT2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcclxufVxyXG4iLCIvKipcclxuICogR2V0IG9mZnNldHMgdG8gdGhlIHRhcmdldFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgfSBmcm9tICcuL2dldE9wcG9zaXRlUGxhY2VtZW50JztcclxuaW1wb3J0IHsgZ2V0T3V0ZXJTaXplcyB9IGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldE9mZnNldHMoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0T2Zmc2V0czogT2Zmc2V0cyxcclxuICBwb3NpdGlvbjogc3RyaW5nXHJcbik6IE9mZnNldHMge1xyXG4gIGNvbnN0IHBsYWNlbWVudCA9IHBvc2l0aW9uLnNwbGl0KCcgJylbMF07XHJcblxyXG4gIC8vIEdldCB0YXJnZXQgbm9kZSBzaXplc1xyXG4gIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRPdXRlclNpemVzKHRhcmdldCk7XHJcblxyXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcclxuICBjb25zdCB0YXJnZXRPZmZzZXRzID0ge1xyXG4gICAgd2lkdGg6IHRhcmdldFJlY3Qud2lkdGgsXHJcbiAgICBoZWlnaHQ6IHRhcmdldFJlY3QuaGVpZ2h0XHJcbiAgfTtcclxuXHJcbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSB0YXJnZXQgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxyXG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xyXG4gIGNvbnN0IG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xyXG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xyXG4gIGNvbnN0IHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcblxyXG4gIHRhcmdldE9mZnNldHNbbWFpblNpZGVdID1cclxuICAgIGhvc3RPZmZzZXRzW21haW5TaWRlXSArXHJcbiAgICBob3N0T2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC1cclxuICAgIHRhcmdldFJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcclxuXHJcbiAgdGFyZ2V0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZVxyXG4gICAgPyBob3N0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHRhcmdldFJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdXHJcbiAgICA6IGhvc3RPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcclxuXHJcbiAgcmV0dXJuIHRhcmdldE9mZnNldHM7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGlzIGVuYWJsZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNNb2RpZmllckVuYWJsZWQob3B0aW9uczogYW55LCBtb2RpZmllck5hbWU6IHN0cmluZykge1xyXG4gIHJldHVybiBvcHRpb25zXHJcbiAgICAmJiBvcHRpb25zLm1vZGlmaWVyc1xyXG4gICAgJiYgb3B0aW9ucy5tb2RpZmllcnNbbW9kaWZpZXJOYW1lXVxyXG4gICAgJiYgb3B0aW9ucy5tb2RpZmllcnNbbW9kaWZpZXJOYW1lXS5lbmFibGVkO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBUZWxscyBpZiBhIGdpdmVuIGlucHV0IGlzIGEgbnVtYmVyXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1lcmljKG46IGFueSkge1xyXG4gIHJldHVybiBuICE9PSAnJyAmJiAhaXNOYU4ocGFyc2VGbG9hdChuKSkgJiYgaXNGaW5pdGUobik7XHJcbn1cclxuIiwiLyoqXHJcbiAqIFNldCB0aGUgc3R5bGUgdG8gdGhlIGdpdmVuIHBvcHBlclxyXG4gKi9cclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgZ2V0T2Zmc2V0cywgc2V0U3R5bGVzIH0gZnJvbSAnLi9pbmRleCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWxsU3R5bGVzKGRhdGE6IERhdGEsIHJlbmRlcmVyPzogUmVuZGVyZXIyKTogdm9pZCB7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZGF0YS5pbnN0YW5jZS50YXJnZXQ7XHJcblxyXG4gIGNvbnN0IG9mZnNldHMgPSBnZXRPZmZzZXRzKGRhdGEpO1xyXG5cclxuICBzZXRTdHlsZXModGFyZ2V0LCB7XHJcbiAgICAnd2lsbC1jaGFuZ2UnOiAndHJhbnNmb3JtJyxcclxuICAgIHRvcDogJzBweCcsXHJcbiAgICBsZWZ0OiAnMHB4JyxcclxuICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKCR7b2Zmc2V0cy5sZWZ0fXB4LCAke29mZnNldHMudG9wfXB4LCAwcHgpYFxyXG4gIH0sIHJlbmRlcmVyKTtcclxuXHJcbiAgaWYgKGRhdGEuaW5zdGFuY2UuYXJyb3cpIHtcclxuICAgIHNldFN0eWxlcyhkYXRhLmluc3RhbmNlLmFycm93LCBkYXRhLm9mZnNldHMuYXJyb3csIHJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhLnBsYWNlbWVudEF1dG8pIHtcclxuICAgIGlmIChyZW5kZXJlcikge1xyXG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLFxyXG4gICAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtcG9wb3Zlci1hdXRvL2csIGBicy1wb3BvdmVyLSR7ZGF0YS5wbGFjZW1lbnR9YClcclxuICAgICAgKTtcclxuICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJyxcclxuICAgICAgICB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL2JzLXRvb2x0aXAtYXV0by9nLCBgYnMtdG9vbHRpcC0ke2RhdGEucGxhY2VtZW50fWApXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUodGFyZ2V0LCAnY2xhc3MnLFxyXG4gICAgICAgIHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvXFxzYXV0by9nLCBgXFxzJHtkYXRhLnBsYWNlbWVudH1gKVxyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3BvcG92ZXIvZykpIHtcclxuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsICdwb3BvdmVyLWF1dG8nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3Rvb2x0aXAvZykpIHtcclxuICAgICAgICByZW5kZXJlci5hZGRDbGFzcyh0YXJnZXQsICd0b29sdGlwLWF1dG8nKTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9icy1wb3BvdmVyLWF1dG8vZywgYGJzLXBvcG92ZXItJHtkYXRhLnBsYWNlbWVudH1gKTtcclxuICAgICAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYnMtdG9vbHRpcC1hdXRvL2csIGBicy10b29sdGlwLSR7ZGF0YS5wbGFjZW1lbnR9YCk7XHJcbiAgICAgIHRhcmdldC5jbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lLnJlcGxhY2UoL1xcc2F1dG8vZywgYFxccyR7ZGF0YS5wbGFjZW1lbnR9YCk7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTmFtZS5tYXRjaCgvcG9wb3Zlci9nKSkge1xyXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdwb3BvdmVyLWF1dG8nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldC5jbGFzc05hbWUubWF0Y2goL3Rvb2x0aXAvZykpIHtcclxuICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgndG9vbHRpcC1hdXRvJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChyZW5kZXJlcikge1xyXG4gICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRhcmdldCwgJ2NsYXNzJywgdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9sZWZ0fHJpZ2h0fHRvcHxib3R0b20vZywgYCR7ZGF0YS5wbGFjZW1lbnR9YCkpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0YXJnZXQuY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZS5yZXBsYWNlKC9sZWZ0fHJpZ2h0fHRvcHxib3R0b20vZywgYCR7ZGF0YS5wbGFjZW1lbnR9YCk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcclxuICovXHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOdW1lcmljIH0gZnJvbSAnLi9pc051bWVyaWMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFN0eWxlcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgc3R5bGVzOiBhbnksIHJlbmRlcmVyPzogUmVuZGVyZXIyKSB7XHJcbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKChwcm9wOiBhbnkpID0+IHtcclxuICAgIGxldCB1bml0ID0gJyc7XHJcbiAgICAvLyBhZGQgdW5pdCBpZiB0aGUgdmFsdWUgaXMgbnVtZXJpYyBhbmQgaXMgb25lIG9mIHRoZSBmb2xsb3dpbmdcclxuICAgIGlmIChbJ3dpZHRoJywgJ2hlaWdodCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXS5pbmRleE9mKHByb3ApICE9PSAtMSAmJlxyXG4gICAgICBpc051bWVyaWMoc3R5bGVzW3Byb3BdKSkge1xyXG4gICAgICB1bml0ID0gJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVuZGVyZXIpIHtcclxuICAgICAgcmVuZGVyZXIuc2V0U3R5bGUoZWxlbWVudCwgcHJvcCwgYCR7U3RyaW5nKHN0eWxlc1twcm9wXSl9JHt1bml0fWApO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBTdHJpbmcoc3R5bGVzW3Byb3BdKSArIHVuaXQ7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCwgZ2V0T3V0ZXJTaXplcywgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJvdyhkYXRhOiBEYXRhKSB7XHJcbiAgbGV0IHRhcmdldE9mZnNldHMgPSBkYXRhLm9mZnNldHMudGFyZ2V0O1xyXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXHJcbiAgY29uc3QgYXJyb3dFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKTtcclxuXHJcbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxyXG4gIGlmICghYXJyb3dFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XHJcblxyXG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcbiAgY29uc3Qgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xyXG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xyXG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XHJcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xyXG5cclxuICAvLyB0b3AvbGVmdCBzaWRlXHJcbiAgaWYgKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgdGFyZ2V0T2Zmc2V0c1tzaWRlXSkge1xyXG4gICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtPVxyXG4gICAgICB0YXJnZXRPZmZzZXRzW3NpZGVdIC0gKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcclxuICB9XHJcbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcclxuICBpZiAoTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSA+IHRhcmdldE9mZnNldHNbb3BTaWRlXSkge1xyXG4gICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSArPVxyXG4gICAgICBOdW1iZXIoZGF0YS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGFycm93RWxlbWVudFNpemUpIC0gTnVtYmVyKHRhcmdldE9mZnNldHNbb3BTaWRlXSk7XHJcbiAgfVxyXG4gIHRhcmdldE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHRhcmdldE9mZnNldHMpO1xyXG5cclxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgdGFyZ2V0XHJcbiAgY29uc3QgY2VudGVyID0gTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyKTtcclxuXHJcbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHRhcmdldCBvZmZzZXRzXHJcbiAgLy8gdGFrZSB0YXJnZXQgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcclxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS50YXJnZXQpO1xyXG5cclxuICBjb25zdCB0YXJnZXRNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdKTtcclxuICBjb25zdCB0YXJnZXRCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbYGJvcmRlciR7c2lkZUNhcGl0YWxpemVkfVdpZHRoYF0pO1xyXG4gIGxldCBzaWRlVmFsdWUgPVxyXG4gICAgY2VudGVyIC0gdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtIHRhcmdldE1hcmdpblNpZGUgLSB0YXJnZXRCb3JkZXJTaWRlO1xyXG5cclxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyB0YXJnZXRcclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih0YXJnZXRPZmZzZXRzW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcclxuXHJcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge1xyXG4gICAgW3NpZGVdOiBNYXRoLnJvdW5kKHNpZGVWYWx1ZSksXHJcbiAgICBbYWx0U2lkZV06ICcnIC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxyXG4gIH07XHJcblxyXG4gIGRhdGEuaW5zdGFuY2UuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY29tcHV0ZUF1dG9QbGFjZW1lbnQsXHJcbiAgZ2V0Qm91bmRhcmllcyxcclxuICBnZXRDbGllbnRSZWN0LFxyXG4gIGdldE9wcG9zaXRlVmFyaWF0aW9uLFxyXG4gIGdldFRhcmdldE9mZnNldHMsXHJcbiAgaXNNb2RpZmllckVuYWJsZWRcclxufSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGlwKGRhdGE6IERhdGEpOiBEYXRhIHtcclxuICBkYXRhLm9mZnNldHMudGFyZ2V0ID0gZ2V0Q2xpZW50UmVjdChkYXRhLm9mZnNldHMudGFyZ2V0KTtcclxuXHJcbiAgaWYgKCFpc01vZGlmaWVyRW5hYmxlZChkYXRhLm9wdGlvbnMsICdmbGlwJykpIHtcclxuXHJcbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xyXG4gICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxyXG4gICAgICAuLi5nZXRUYXJnZXRPZmZzZXRzKFxyXG4gICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxyXG4gICAgICAgIGRhdGEub2Zmc2V0cy5ob3N0LFxyXG4gICAgICAgIGRhdGEucGxhY2VtZW50XHJcbiAgICAgIClcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhcclxuICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxyXG4gICAgZGF0YS5pbnN0YW5jZS5ob3N0LFxyXG4gICAgMCwgLy8gcGFkZGluZ1xyXG4gICAgJ3ZpZXdwb3J0JyxcclxuICAgIGZhbHNlIC8vIHBvc2l0aW9uRml4ZWRcclxuICApO1xyXG5cclxuICBsZXQgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcclxuICBsZXQgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVsxXSB8fCAnJztcclxuXHJcbiAgY29uc3Qgb2Zmc2V0c0hvc3QgPSBkYXRhLm9mZnNldHMuaG9zdDtcclxuICBjb25zdCB0YXJnZXQgPSBkYXRhLmluc3RhbmNlLnRhcmdldDtcclxuICBjb25zdCBob3N0ID0gZGF0YS5pbnN0YW5jZS5ob3N0O1xyXG5cclxuICBjb25zdCBhZGFwdGl2ZVBvc2l0aW9uID0gdmFyaWF0aW9uXHJcbiAgICA/IGNvbXB1dGVBdXRvUGxhY2VtZW50KCdhdXRvJywgb2Zmc2V0c0hvc3QsIHRhcmdldCwgaG9zdCwgWyd0b3AnLCAnYm90dG9tJ10pXHJcbiAgICA6IGNvbXB1dGVBdXRvUGxhY2VtZW50KCdhdXRvJywgb2Zmc2V0c0hvc3QsIHRhcmdldCwgaG9zdCk7XHJcblxyXG4gIGNvbnN0IGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIGFkYXB0aXZlUG9zaXRpb25dO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xyXG4gIGZsaXBPcmRlci5mb3JFYWNoKChzdGVwLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKHBsYWNlbWVudCAhPT0gc3RlcCB8fCBmbGlwT3JkZXIubGVuZ3RoID09PSBpbmRleCArIDEpIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJyAnKVswXTtcclxuXHJcbiAgICAvLyB1c2luZyBmbG9vciBiZWNhdXNlIHRoZSBob3N0IG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXHJcbiAgICBjb25zdCBvdmVybGFwc1JlZiA9XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5yaWdodCkgPiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LmxlZnQpKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmXHJcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5yaWdodCkpIHx8XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICd0b3AnICYmXHJcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmJvdHRvbSkgPiBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LnRvcCkpIHx8XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmXHJcbiAgICAgICAgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCkgPCBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy5ob3N0LmJvdHRvbSkpO1xyXG5cclxuICAgIGNvbnN0IG92ZXJmbG93c0xlZnQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQubGVmdCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMubGVmdCk7XHJcbiAgICBjb25zdCBvdmVyZmxvd3NSaWdodCA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5yaWdodCkgPiBNYXRoLmZsb29yKGJvdW5kYXJpZXMucmlnaHQpO1xyXG4gICAgY29uc3Qgb3ZlcmZsb3dzVG9wID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LnRvcCkgPCBNYXRoLmZsb29yKGJvdW5kYXJpZXMudG9wKTtcclxuICAgIGNvbnN0IG92ZXJmbG93c0JvdHRvbSA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XHJcblxyXG4gICAgY29uc3Qgb3ZlcmZsb3dzQm91bmRhcmllcyA9XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NMZWZ0KSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJiBvdmVyZmxvd3NUb3ApIHx8XHJcbiAgICAgIChwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIG92ZXJmbG93c0JvdHRvbSk7XHJcblxyXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXHJcbiAgICBjb25zdCBpc1ZlcnRpY2FsID0gWyd0b3AnLCAnYm90dG9tJ10uaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMTtcclxuICAgIGNvbnN0IGZsaXBwZWRWYXJpYXRpb24gPVxyXG4gICAgICAoKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcclxuICAgICAgICAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdyaWdodCcgJiYgb3ZlcmZsb3dzUmlnaHQpIHx8XHJcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c1RvcCkgfHxcclxuICAgICAgICAoIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c0JvdHRvbSkpO1xyXG5cclxuICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzIHx8IGZsaXBwZWRWYXJpYXRpb24pIHtcclxuICAgICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMpIHtcclxuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcclxuICAgICAgICB2YXJpYXRpb24gPSBnZXRPcHBvc2l0ZVZhcmlhdGlvbih2YXJpYXRpb24pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBkYXRhLnBsYWNlbWVudCA9IHBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgICR7dmFyaWF0aW9ufWAgOiAnJyk7XHJcblxyXG4gICAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0ge1xyXG4gICAgICAgIC4uLmRhdGEub2Zmc2V0cy50YXJnZXQsXHJcbiAgICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcclxuICAgICAgICAgIGRhdGEuaW5zdGFuY2UudGFyZ2V0LFxyXG4gICAgICAgICAgZGF0YS5vZmZzZXRzLmhvc3QsXHJcbiAgICAgICAgICBkYXRhLnBsYWNlbWVudFxyXG4gICAgICAgIClcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBjb21wdXRlQXV0b1BsYWNlbWVudCxcclxuICBnZXRSZWZlcmVuY2VPZmZzZXRzLFxyXG4gIGdldFRhcmdldE9mZnNldHNcclxufSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBEYXRhLCBPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF0YShcclxuICB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwb3NpdGlvbjogc3RyaW5nLCBvcHRpb25zOiBPcHRpb25zXHJcbik6IERhdGEge1xyXG5cclxuICBjb25zdCBob3N0RWxQb3NpdGlvbiA9IGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xyXG4gIGNvbnN0IHBsYWNlbWVudEF1dG8gPSAhIXBvc2l0aW9uLm1hdGNoKC9hdXRvL2cpO1xyXG5cclxuICAvLyBzdXBwb3J0IG9sZCBwbGFjZW1lbnRzICdhdXRvIGxlZnR8cmlnaHR8dG9wfGJvdHRvbSdcclxuICBsZXQgcGxhY2VtZW50ID0gISFwb3NpdGlvbi5tYXRjaCgvYXV0b1xccyhsZWZ0fHJpZ2h0fHRvcHxib3R0b20pL2cpXHJcbiAgICA/IHBvc2l0aW9uLnNwbGl0KCcgJylbMV0gfHwgJydcclxuICAgIDogcG9zaXRpb247XHJcblxyXG4gIGNvbnN0IHRhcmdldE9mZnNldCA9IGdldFRhcmdldE9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsUG9zaXRpb24sIHBsYWNlbWVudCk7XHJcbiAgcGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCBob3N0RWxQb3NpdGlvbiwgdGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgb3B0aW9ucyxcclxuICAgIGluc3RhbmNlOiB7XHJcbiAgICAgIHRhcmdldDogdGFyZ2V0RWxlbWVudCxcclxuICAgICAgaG9zdDogaG9zdEVsZW1lbnQsXHJcbiAgICAgIGFycm93OiBudWxsXHJcbiAgICB9LFxyXG4gICAgb2Zmc2V0czoge1xyXG4gICAgICB0YXJnZXQ6IHRhcmdldE9mZnNldCxcclxuICAgICAgaG9zdDogaG9zdEVsUG9zaXRpb24sXHJcbiAgICAgIGFycm93OiBudWxsXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb25GaXhlZDogZmFsc2UsXHJcbiAgICBwbGFjZW1lbnQsXHJcbiAgICBwbGFjZW1lbnRBdXRvXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRCb3VuZGFyaWVzIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmV2ZW50T3ZlcmZsb3coZGF0YTogRGF0YSkge1xyXG5cclxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcclxuICAvLyByZXNldHMgdGhlIHRhcmdldE9mZnNldHMncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xyXG4gIC8vIHRoZSBzaXplIG9mIHRoZSB0YXJnZXRPZmZzZXRzIGVsZW1lbnQgaXRzZWxmXHJcbiAgY29uc3QgdHJhbnNmb3JtUHJvcCA9ICd0cmFuc2Zvcm0nO1xyXG4gIGNvbnN0IHRhcmdldFN0eWxlcyA9IGRhdGEuaW5zdGFuY2UudGFyZ2V0LnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXHJcbiAgY29uc3QgeyB0b3AsIGxlZnQsIFt0cmFuc2Zvcm1Qcm9wXTogdHJhbnNmb3JtIH0gPSB0YXJnZXRTdHlsZXM7XHJcbiAgdGFyZ2V0U3R5bGVzLnRvcCA9ICcnO1xyXG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gJyc7XHJcbiAgdGFyZ2V0U3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XHJcblxyXG4gIGNvbnN0IGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKFxyXG4gICAgZGF0YS5pbnN0YW5jZS50YXJnZXQsXHJcbiAgICBkYXRhLmluc3RhbmNlLmhvc3QsXHJcbiAgICAwLCAvLyBwYWRkaW5nXHJcbiAgICAnc2Nyb2xsUGFyZW50JyxcclxuICAgIGZhbHNlIC8vIHBvc2l0aW9uRml4ZWRcclxuICApO1xyXG5cclxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcclxuICAvLyByZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3R5bGUgcHJvcGVydGllcyBhZnRlciB0aGUgb2Zmc2V0cyBoYXZlIGJlZW4gY29tcHV0ZWRcclxuICB0YXJnZXRTdHlsZXMudG9wID0gdG9wO1xyXG4gIHRhcmdldFN0eWxlcy5sZWZ0ID0gbGVmdDtcclxuICB0YXJnZXRTdHlsZXNbdHJhbnNmb3JtUHJvcF0gPSB0cmFuc2Zvcm07XHJcblxyXG4gIGNvbnN0IG9yZGVyID0gWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICdib3R0b20nXTtcclxuXHJcbiAgY29uc3QgY2hlY2sgPSB7XHJcbiAgICBwcmltYXJ5KHBsYWNlbWVudDogc3RyaW5nKSB7XHJcbiAgICAgIGxldCB2YWx1ZSA9IGRhdGEub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRhdGEub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxyXG4gICAgICAgICFmYWxzZSAvLyBvcHRpb25zLmVzY2FwZVdpdGhSZWZlcmVuY2VcclxuICAgICAgKSB7XHJcbiAgICAgICAgdmFsdWUgPSBNYXRoLm1heChkYXRhLm9mZnNldHMudGFyZ2V0W3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IFtwbGFjZW1lbnRdOiB2YWx1ZSB9O1xyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeShwbGFjZW1lbnQ6IHN0cmluZykge1xyXG4gICAgICBjb25zdCBtYWluU2lkZSA9IHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyA/ICdsZWZ0JyA6ICd0b3AnO1xyXG4gICAgICBsZXQgdmFsdWUgPSBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRhdGEub2Zmc2V0cy50YXJnZXRbcGxhY2VtZW50XSA+IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJlxyXG4gICAgICAgICFmYWxzZSAvLyBlc2NhcGVXaXRoUmVmZXJlbmNlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHZhbHVlID0gTWF0aC5taW4oXHJcbiAgICAgICAgICBkYXRhLm9mZnNldHMudGFyZ2V0W21haW5TaWRlXSxcclxuICAgICAgICAgIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtXHJcbiAgICAgICAgICAocGxhY2VtZW50ID09PSAncmlnaHQnID8gZGF0YS5vZmZzZXRzLnRhcmdldC53aWR0aCA6IGRhdGEub2Zmc2V0cy50YXJnZXQuaGVpZ2h0KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IFttYWluU2lkZV06IHZhbHVlIH07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgbGV0IHNpZGU6IHN0cmluZztcclxuXHJcbiAgb3JkZXIuZm9yRWFjaChwbGFjZW1lbnQgPT4ge1xyXG4gICAgc2lkZSA9IFsnbGVmdCcsICd0b3AnXVxyXG4gICAgICAuaW5kZXhPZihwbGFjZW1lbnQpICE9PSAtMVxyXG4gICAgICA/ICdwcmltYXJ5J1xyXG4gICAgICA6ICdzZWNvbmRhcnknO1xyXG5cclxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7IC4uLmRhdGEub2Zmc2V0cy50YXJnZXQsIC4uLmNoZWNrW3NpZGVdKHBsYWNlbWVudCkgfTtcclxuXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0KGRhdGE6IERhdGEpOiBEYXRhIHtcclxuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcclxuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMF07XHJcbiAgY29uc3Qgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XHJcbiAgICBjb25zdCB7IGhvc3QsIHRhcmdldCB9ID0gZGF0YS5vZmZzZXRzO1xyXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xyXG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcclxuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcclxuXHJcbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XHJcbiAgICAgIGxlZnQ6IHsgW3NpZGVdOiBob3N0W3NpZGVdIH0sXHJcbiAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgW3NpZGVdOiBob3N0W3NpZGVdICsgaG9zdFttZWFzdXJlbWVudF0gLSBob3N0W21lYXN1cmVtZW50XVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7IC4uLnRhcmdldCwgLi4uc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcclxuICogQGNvcHlyaWdodCBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xyXG4gKi9cclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBnZXRSZWZlcmVuY2VPZmZzZXRzLCBzZXRBbGxTdHlsZXMgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IGFycm93LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIHNoaWZ0LCBpbml0RGF0YSB9IGZyb20gJy4vbW9kaWZpZXJzJztcclxuaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cywgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xyXG4gIHBvc2l0aW9uKGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IE9mZnNldHMge1xyXG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvZmZzZXQoaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogT2Zmc2V0cyB7XHJcbiAgICByZXR1cm4gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICBwb3NpdGlvbjogc3RyaW5nLFxyXG4gICAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcclxuICAgIG9wdGlvbnM/OiBPcHRpb25zXHJcbiAgKTogRGF0YSB7XHJcbiAgICBjb25zdCBjaGFpbk9mTW9kaWZpZXJzID0gW2ZsaXAsIHNoaWZ0LCBwcmV2ZW50T3ZlcmZsb3csIGFycm93XTtcclxuXHJcbiAgICByZXR1cm4gY2hhaW5PZk1vZGlmaWVycy5yZWR1Y2UoXHJcbiAgICAgIChtb2RpZmllZERhdGEsIG1vZGlmaWVyKSA9PiBtb2RpZmllcihtb2RpZmllZERhdGEpLFxyXG4gICAgICBpbml0RGF0YSh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCwgcG9zaXRpb24sIG9wdGlvbnMpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25TZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcclxuICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgcGxhY2VtZW50OiBzdHJpbmcsXHJcbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcclxuICBvcHRpb25zPzogT3B0aW9ucyxcclxuICByZW5kZXJlcj86IFJlbmRlcmVyMlxyXG4pOiB2b2lkIHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgaG9zdEVsZW1lbnQsXHJcbiAgICB0YXJnZXRFbGVtZW50LFxyXG4gICAgcGxhY2VtZW50LFxyXG4gICAgYXBwZW5kVG9Cb2R5LFxyXG4gICAgb3B0aW9uc1xyXG4gICk7XHJcblxyXG4gIHNldEFsbFN0eWxlcyhkYXRhLCByZW5kZXJlcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXJGYWN0b3J5MiwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAnLi9uZy1wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW9ucyB7XHJcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB3aWxsIGJlIG1vdmVkICovXHJcbiAgZWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGJlIGF0dGFjaGVkIHRvICAqL1xyXG4gIHRhcmdldD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtYXR0YWNobWVudCBob3Jpei1hdHRhY2htZW50JyBvciAncGxhY2VtZW50J1xyXG4gICAqIC0gcGxhY2VtZW50IGNhbiBiZSBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICogbm90IHlldCBzdXBwb3J0ZWQ6XHJcbiAgICogLSB2ZXJ0LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAndG9wJywgJ21pZGRsZScsICdib3R0b20nXHJcbiAgICogLSBob3Jpei1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J1xyXG4gICAqL1xyXG4gIGF0dGFjaG1lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBhdHRhY2htZW50YC4gVGhlIG9uZSBkaWZmZXJlbmNlIGlzIHRoYXQsIGlmIGl0J3Mgbm90IHByb3ZpZGVkLFxyXG4gICAqIGB0YXJnZXRBdHRhY2htZW50YCB3aWxsIGFzc3VtZSB0aGUgbWlycm9yIGltYWdlIG9mIGBhdHRhY2htZW50YC5cclxuICAgKi9cclxuICB0YXJnZXRBdHRhY2htZW50Pzogc3RyaW5nO1xyXG5cclxuICAvKiogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtb2Zmc2V0IGhvcml6LW9mZnNldCdcclxuICAgKiAtIHZlcnQtb2Zmc2V0IGFuZCBob3Jpei1vZmZzZXQgY2FuIGJlIG9mIHRoZSBmb3JtIFwiMjBweFwiIG9yIFwiNTUlXCJcclxuICAgKi9cclxuICBvZmZzZXQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBvZmZzZXRgLCBidXQgcmVmZXJyaW5nIHRvIHRoZSBvZmZzZXQgb2YgdGhlIHRhcmdldCAqL1xyXG4gIHRhcmdldE9mZnNldD86IHN0cmluZztcclxuXHJcbiAgLyoqIElmIHRydWUgY29tcG9uZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gYm9keSAqL1xyXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xyXG4gIG9wdGlvbnM6IE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSB1cGRhdGUkJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvbkVsZW1lbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIG1lcmdlKFxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKSxcclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJyksXHJcbiAgICAgICAgb2YoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxyXG4gICAgICAgIHRoaXMudXBkYXRlJCRcclxuICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwb3NpdGlvbkVsZW1lbnQ6IFBvc2l0aW9uaW5nT3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudHMoXHJcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LnRhcmdldCksXHJcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LmVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50LmF0dGFjaG1lbnQsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXBwZW5kVG9Cb2R5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbihvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkUG9zaXRpb25FbGVtZW50KG9wdGlvbnMpO1xyXG4gICAgdGhpcy51cGRhdGUkJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBhZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuc2V0KF9nZXRIdG1sRWxlbWVudChvcHRpb25zLmVsZW1lbnQpLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc2l0aW9uRWxlbWVudChlbFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLmRlbGV0ZShfZ2V0SHRtbEVsZW1lbnQoZWxSZWYpKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRIdG1sRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBnb3QgYSBzZWxlY3RvclxyXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIl0sIm5hbWVzIjpbInJ1bklzSUUiLCJzZXRBbGxTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0Esa0NBQXlDLE9BQW9CLEVBQUUsUUFBaUI7SUFDOUUsSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtRQUMxQixPQUFPLEVBQUUsQ0FBQztLQUNYOztJQUVELHVCQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNqRCx1QkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVuRCxPQUFPLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDO0NBQ3ZDOzs7Ozs7Ozs7OztBQ1RELHVCQUE4QixPQUFZO0lBQ3hDLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDL0IsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFFRCxPQUFPLE9BQU8sQ0FBQyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQztDQUMzQzs7Ozs7O0FDTkQ7Ozs7QUFHQSx5QkFBZ0MsT0FBWTs7SUFFMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztLQUN0QjtJQUVELFFBQVEsT0FBTyxDQUFDLFFBQVE7UUFDdEIsS0FBSyxNQUFNLENBQUM7UUFDWixLQUFLLE1BQU07WUFDVCxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3BDLEtBQUssV0FBVztZQUNkLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQztRQUN0QixRQUFRO0tBQ1Q7O0lBR0QsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFD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