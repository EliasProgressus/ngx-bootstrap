/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { isIE } from './isIE';
/**
 * @param {?} element
 * @return {?}
 */
export function getOffsetParent(element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T2Zmc2V0UGFyZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldE9mZnNldFBhcmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7QUFFOUIsTUFBTSwwQkFBMEIsT0FBWTtJQUMxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDYixNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztLQUNqQztJQUVELHFCQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs7SUFHdkQscUJBQUksWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDOztJQUdoRCxxQkFBSSxPQUFZLENBQUM7SUFFakIsT0FBTyxZQUFZLEtBQUssY0FBYyxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JFLE9BQU8sR0FBRyxPQUFPLENBQUMsa0JBQWtCLENBQUM7UUFDckMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7S0FDckM7SUFFRCxxQkFBTSxRQUFRLEdBQUcsWUFBWSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUM7SUFFdkQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQztLQUNuRjs7O0lBSUQsRUFBRSxDQUFDLENBQ0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELHdCQUF3QixDQUFDLFlBQVksRUFBRSxVQUFVLENBQUMsS0FBSyxRQUN6RCxDQUFDLENBQUMsQ0FBQztRQUNELE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUM7S0FDdEM7SUFFRCxNQUFNLENBQUMsWUFBWSxDQUFDO0NBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFJldHVybnMgdGhlIG9mZnNldCBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcclxuICovXHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4vaXNJRSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQ6IGFueSk6IGFueSB7XHJcbiAgaWYgKCFlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgbm9PZmZzZXRQYXJlbnQgPSBpc0lFKDEwKSA/IGRvY3VtZW50LmJvZHkgOiBudWxsO1xyXG5cclxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxyXG4gIGxldCBvZmZzZXRQYXJlbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudCB8fCBudWxsO1xyXG4gIC8vIFNraXAgaGlkZGVuIGVsZW1lbnRzIHdoaWNoIGRvbid0IGhhdmUgYW4gb2Zmc2V0UGFyZW50XHJcblxyXG4gIGxldCBzaWJsaW5nOiBhbnk7XHJcblxyXG4gIHdoaWxlIChvZmZzZXRQYXJlbnQgPT09IG5vT2Zmc2V0UGFyZW50ICYmIGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XHJcbiAgICBzaWJsaW5nID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICBvZmZzZXRQYXJlbnQgPSBzaWJsaW5nLm9mZnNldFBhcmVudDtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5vZGVOYW1lID0gb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudC5ub2RlTmFtZTtcclxuXHJcbiAgaWYgKCFub2RlTmFtZSB8fCBub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcclxuICAgIHJldHVybiBzaWJsaW5nID8gc2libGluZy5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudCA6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8vIC5vZmZzZXRQYXJlbnQgd2lsbCByZXR1cm4gdGhlIGNsb3Nlc3QgVEgsIFREIG9yIFRBQkxFIGluIGNhc2VcclxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXHJcbiAgaWYgKFxyXG4gICAgWydUSCcsICdURCcsICdUQUJMRSddLmluZGV4T2Yob2Zmc2V0UGFyZW50Lm5vZGVOYW1lKSAhPT0gLTEgJiZcclxuICAgIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShvZmZzZXRQYXJlbnQsICdwb3NpdGlvbicpID09PSAnc3RhdGljJ1xyXG4gICkge1xyXG4gICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChvZmZzZXRQYXJlbnQpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9mZnNldFBhcmVudDtcclxufVxyXG4iXX0=