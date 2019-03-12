/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Finds the first parent of an element that has a transformed property defined
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
/**
 * @param {?} element
 * @return {?}
 */
export function getFixedPositionOffsetParent(element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQUU5QixNQUFNLHVDQUF1QyxPQUFvQjs7SUFFL0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztLQUNoQztJQUVELHFCQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRS9CLE9BQU8sRUFBRSxJQUFJLHdCQUF3QixDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsS0FBSyxNQUFNLEVBQUUsQ0FBQztRQUNsRSxFQUFFLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztLQUN2QjtJQUVELE1BQU0sQ0FBQyxFQUFFLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztDQUN2QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBGaW5kcyB0aGUgZmlyc3QgcGFyZW50IG9mIGFuIGVsZW1lbnQgdGhhdCBoYXMgYSB0cmFuc2Zvcm1lZCBwcm9wZXJ0eSBkZWZpbmVkXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi9nZXRTdHlsZUNvbXB1dGVkUHJvcGVydHknO1xyXG5pbXBvcnQgeyBpc0lFIH0gZnJvbSAnLi9pc0lFJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogSFRNTEVsZW1lbnQge1xyXG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxyXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xyXG4gICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgbGV0IGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xyXG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxufVxyXG4iXX0=