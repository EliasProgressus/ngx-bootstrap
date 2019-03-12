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
export function getScroll(element, side = 'top') {
    const /** @type {?} */ upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
    const /** @type {?} */ nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        const /** @type {?} */ html = element.ownerDocument.documentElement;
        const /** @type {?} */ scrollingElement = element.ownerDocument.scrollingElement || html;
        return scrollingElement[upperSide];
    }
    return element[upperSide];
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2Nyb2xsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldFNjcm9sbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0EsTUFBTSxvQkFBb0IsT0FBb0IsRUFBRSxJQUFJLEdBQUcsS0FBSztJQUMxRCx1QkFBTSxTQUFTLEdBQUcsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDOUQsdUJBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7SUFFbEMsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMvQyx1QkFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDbkQsdUJBQU0sZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUM7UUFFeEUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3BDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztDQUMzQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBHZXRzIHRoZSBzY3JvbGwgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQgaW4gdGhlIGdpdmVuIHNpZGUgKHRvcCBhbmQgbGVmdClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudDogSFRNTEVsZW1lbnQsIHNpZGUgPSAndG9wJykge1xyXG4gIGNvbnN0IHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XHJcbiAgY29uc3Qgbm9kZU5hbWUgPSBlbGVtZW50Lm5vZGVOYW1lO1xyXG5cclxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICBjb25zdCBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIGNvbnN0IHNjcm9sbGluZ0VsZW1lbnQgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudCB8fCBodG1sO1xyXG5cclxuICAgIHJldHVybiBzY3JvbGxpbmdFbGVtZW50W3VwcGVyU2lkZV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudFt1cHBlclNpZGVdO1xyXG59XHJcbiJdfQ==