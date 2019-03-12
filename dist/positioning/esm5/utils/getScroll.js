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
export function getScroll(element, side) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2Nyb2xsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldFNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBTSxvQkFBb0IsT0FBb0IsRUFBRSxJQUFZO0lBQVoscUJBQUEsRUFBQSxZQUFZO0lBQzFELHFCQUFNLFNBQVMsR0FBRyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQztJQUM5RCxxQkFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztJQUVsQyxFQUFFLENBQUMsQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQy9DLHFCQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztRQUNuRCxxQkFBTSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQztRQUV4RSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDcEM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0NBQzNCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEdldHMgdGhlIHNjcm9sbCB2YWx1ZSBvZiB0aGUgZ2l2ZW4gZWxlbWVudCBpbiB0aGUgZ2l2ZW4gc2lkZSAodG9wIGFuZCBsZWZ0KVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2lkZSA9ICd0b3AnKSB7XHJcbiAgY29uc3QgdXBwZXJTaWRlID0gc2lkZSA9PT0gJ3RvcCcgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcclxuICBjb25zdCBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XHJcblxyXG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgY29uc3Qgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XHJcblxyXG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XHJcbn1cclxuIl19