/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { getParentNode } from './getParentNode';
/**
 * @param {?} element
 * @return {?}
 */
export function getScrollParent(element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0U2Nyb2xsUGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldFNjcm9sbFBhcmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUVoRCxNQUFNLDBCQUEwQixPQUFZOztJQUUxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztLQUN0QjtJQUVELE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxNQUFNO1lBQ1QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDO1FBQ3BDLEtBQUssV0FBVztZQUNkLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3RCLFFBQVE7S0FDVDs7SUFHRCw0Q0FBUSxzQkFBUSxFQUFFLHdCQUFTLEVBQUUsd0JBQVMsQ0FBdUM7SUFDN0UsRUFBRSxDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNGLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDaEI7SUFFRCxNQUFNLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ2hEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcclxuICovXHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgZ2V0UGFyZW50Tm9kZSB9IGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQ6IGFueSk6IGFueSB7XHJcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keTtcclxuICB9XHJcblxyXG4gIHN3aXRjaCAoZWxlbWVudC5ub2RlTmFtZSkge1xyXG4gICAgY2FzZSAnSFRNTCc6XHJcbiAgICBjYXNlICdCT0RZJzpcclxuICAgICAgcmV0dXJuIGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5O1xyXG4gICAgY2FzZSAnI2RvY3VtZW50JzpcclxuICAgICAgcmV0dXJuIGVsZW1lbnQuYm9keTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgfVxyXG5cclxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcclxuICBjb25zdCB7IG92ZXJmbG93LCBvdmVyZmxvd1gsIG92ZXJmbG93WSB9ID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xyXG4gIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KFN0cmluZyhvdmVyZmxvdykgKyBTdHJpbmcob3ZlcmZsb3dZKSArIFN0cmluZyhvdmVyZmxvd1gpKSkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoZWxlbWVudCkpO1xyXG59XHJcbiJdfQ==