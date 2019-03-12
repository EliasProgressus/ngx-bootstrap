/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { getBordersSize } from './getBordersSize';
import { getWindowSizes } from './getWindowSizes';
import { getScroll } from './getScroll';
import { getClientRect } from './getClientRect';
import { isIE } from './isIE';
/**
 * @param {?} element
 * @return {?}
 */
export function getBoundingClientRect(element) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm91bmRpbmdDbGllbnRSZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldEJvdW5kaW5nQ2xpZW50UmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBR0EsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7OztBQUc5QixNQUFNLGdDQUFnQyxPQUFvQjtJQUN4RCxxQkFBSSxJQUFJLEdBQVEsRUFBRSxDQUFDOzs7O0lBS25CLElBQUksQ0FBQztRQUNILEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLEdBQUcsT0FBTyxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDdkMscUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDNUMscUJBQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksSUFBSSxVQUFVLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssSUFBSSxVQUFVLENBQUM7U0FDMUI7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksR0FBRyxPQUFPLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN4QztLQUNGO0lBQUMsS0FBSyxDQUFDLENBQUMsaUJBQUEsQ0FBQyxFQUFFLENBQUM7UUFDWCxNQUFNLENBQUMsU0FBUyxDQUFDO0tBQ2xCO0lBRUQscUJBQU0sTUFBTSxHQUFRO1FBQ2xCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztRQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJO1FBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHO0tBQy9CLENBQUM7O0lBR0YscUJBQU0sS0FBSyxHQUFRLE9BQU8sQ0FBQyxRQUFRLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDNUYscUJBQU0sS0FBSyxHQUNULEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDbkUscUJBQU0sTUFBTSxHQUNWLEtBQUssQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLFlBQVksSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFFckUscUJBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ2pELHFCQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQzs7O0lBSWxELEVBQUUsQ0FBQyxDQUFDLGNBQWMsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLHFCQUFNLE1BQU0sR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxjQUFjLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5QyxhQUFhLElBQUksY0FBYyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUU3QyxNQUFNLENBQUMsS0FBSyxJQUFJLGNBQWMsQ0FBQztRQUMvQixNQUFNLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQztLQUNoQztJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR2V0IGJvdW5kaW5nIGNsaWVudCByZWN0IG9mIGdpdmVuIGVsZW1lbnRcclxuICovXHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgZ2V0Qm9yZGVyc1NpemUgfSBmcm9tICcuL2dldEJvcmRlcnNTaXplJztcclxuaW1wb3J0IHsgZ2V0V2luZG93U2l6ZXMgfSBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xyXG5pbXBvcnQgeyBnZXRDbGllbnRSZWN0IH0gZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcclxuaW1wb3J0IHsgaXNJRSB9IGZyb20gJy4vaXNJRSc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50OiBIVE1MRWxlbWVudCk6IE9mZnNldHMge1xyXG4gIGxldCByZWN0OiBhbnkgPSB7fTtcclxuXHJcbiAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxyXG4gIC8vIGNvbnNpZGVyZWQgaW4gRE9NIGluIHNvbWUgY2lyY3Vtc3RhbmNlcy4uLlxyXG4gIC8vIFRoaXMgaXNuJ3QgcmVwcm9kdWNpYmxlIGluIElFMTAgY29tcGF0aWJpbGl0eSBtb2RlIG9mIElFMTFcclxuICB0cnkge1xyXG4gICAgaWYgKGlzSUUoMTApKSB7XHJcbiAgICAgIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICBjb25zdCBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xyXG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XHJcbiAgICAgIHJlY3QudG9wICs9IHNjcm9sbFRvcDtcclxuICAgICAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQ7XHJcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcclxuICAgICAgcmVjdC5yaWdodCArPSBzY3JvbGxMZWZ0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdDogYW55ID0ge1xyXG4gICAgbGVmdDogcmVjdC5sZWZ0LFxyXG4gICAgdG9wOiByZWN0LnRvcCxcclxuICAgIHdpZHRoOiByZWN0LnJpZ2h0IC0gcmVjdC5sZWZ0LFxyXG4gICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXHJcbiAgfTtcclxuXHJcbiAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xyXG4gIGNvbnN0IHNpemVzOiBhbnkgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgPyBnZXRXaW5kb3dTaXplcyhlbGVtZW50Lm93bmVyRG9jdW1lbnQpIDoge307XHJcbiAgY29uc3Qgd2lkdGggPVxyXG4gICAgc2l6ZXMud2lkdGggfHwgZWxlbWVudC5jbGllbnRXaWR0aCB8fCByZXN1bHQucmlnaHQgLSByZXN1bHQubGVmdDtcclxuICBjb25zdCBoZWlnaHQgPVxyXG4gICAgc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5ib3R0b20gLSByZXN1bHQudG9wO1xyXG5cclxuICBsZXQgaG9yaXpTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldFdpZHRoIC0gd2lkdGg7XHJcbiAgbGV0IHZlcnRTY3JvbGxiYXIgPSBlbGVtZW50Lm9mZnNldEhlaWdodCAtIGhlaWdodDtcclxuXHJcbiAgLy8gaWYgYW4gaHlwb3RoZXRpY2FsIHNjcm9sbGJhciBpcyBkZXRlY3RlZCwgd2UgbXVzdCBiZSBzdXJlIGl0J3Mgbm90IGEgYGJvcmRlcmBcclxuICAvLyB3ZSBtYWtlIHRoaXMgY2hlY2sgY29uZGl0aW9uYWwgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcclxuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xyXG4gICAgY29uc3Qgc3R5bGVzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpO1xyXG4gICAgaG9yaXpTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneCcpO1xyXG4gICAgdmVydFNjcm9sbGJhciAtPSBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsICd5Jyk7XHJcblxyXG4gICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xyXG4gICAgcmVzdWx0LmhlaWdodCAtPSB2ZXJ0U2Nyb2xsYmFyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdldENsaWVudFJlY3QocmVzdWx0KTtcclxufVxyXG4iXX0=