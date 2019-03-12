/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getScrollParent } from './getScrollParent';
import { getParentNode } from './getParentNode';
import { findCommonOffsetParent } from './findCommonOffsetParent';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getViewportOffsetRectRelativeToArtbitraryNode } from './getViewportOffsetRectRelativeToArtbitraryNode';
import { getWindowSizes } from './getWindowSizes';
import { isFixed } from './isFixed';
import { getFixedPositionOffsetParent } from './getFixedPositionOffsetParent';
/**
 * @param {?} target
 * @param {?} host
 * @param {?=} padding
 * @param {?=} boundariesElement
 * @param {?=} fixedPosition
 * @return {?}
 */
export function getBoundaries(target, host, padding = 0, boundariesElement, fixedPosition = false) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm91bmRhcmllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRCb3VuZGFyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7QUFFOUUsTUFBTSx3QkFDSixNQUFtQixFQUNuQixJQUFpQixFQUNqQixPQUFPLEdBQUcsQ0FBQyxFQUNYLGlCQUF5QixFQUN6QixhQUFhLEdBQUcsS0FBSzs7SUFJckIscUJBQUksVUFBVSxHQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDMUMsdUJBQU0sWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFHakgsRUFBRSxDQUFDLENBQUMsaUJBQWlCLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNyQyxVQUFVLEdBQUcsNkNBQTZDLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQ3pGO0lBQUMsSUFBSSxDQUFDLENBQUM7O1FBRU4scUJBQUksY0FBYyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDekMsY0FBYyxHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RCxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQzthQUN2RDtTQUNGO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGlCQUFpQixLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDO1NBQ3ZEO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixjQUFjLEdBQUcsaUJBQWlCLENBQUM7U0FDcEM7UUFFRCx1QkFBTSxPQUFPLEdBQUcsb0NBQW9DLENBQ2xELGNBQWMsRUFDZCxZQUFZLEVBQ1osYUFBYSxDQUNkLENBQUM7O1FBR0YsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRCxVQUFVLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUNsRCxVQUFVLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3pELFVBQVUsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1lBQ3JELFVBQVUsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekQ7UUFBQyxJQUFJLENBQUMsQ0FBQzs7WUFFTixVQUFVLEdBQUcsT0FBTyxDQUFDO1NBQ3RCO0tBQ0Y7O0lBR0QsVUFBVSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUM7SUFDM0IsVUFBVSxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUM7SUFDMUIsVUFBVSxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUM7SUFDNUIsVUFBVSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQUM7SUFFN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQztDQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDb21wdXRlZCB0aGUgYm91bmRhcmllcyBsaW1pdHMgYW5kIHJldHVybiB0aGVtXHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRTY3JvbGxQYXJlbnQgfSBmcm9tICcuL2dldFNjcm9sbFBhcmVudCc7XHJcbmltcG9ydCB7IGdldFBhcmVudE5vZGUgfSBmcm9tICcuL2dldFBhcmVudE5vZGUnO1xyXG5pbXBvcnQgeyBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9maW5kQ29tbW9uT2Zmc2V0UGFyZW50JztcclxuaW1wb3J0IHsgZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlIH0gZnJvbSAnLi9nZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUnO1xyXG5pbXBvcnQgeyBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUgfSBmcm9tICcuL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSc7XHJcbmltcG9ydCB7IGdldFdpbmRvd1NpemVzIH0gZnJvbSAnLi9nZXRXaW5kb3dTaXplcyc7XHJcbmltcG9ydCB7IGlzRml4ZWQgfSBmcm9tICcuL2lzRml4ZWQnO1xyXG5pbXBvcnQgeyBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50IH0gZnJvbSAnLi9nZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCb3VuZGFyaWVzKFxyXG4gIHRhcmdldDogSFRNTEVsZW1lbnQsXHJcbiAgaG9zdDogSFRNTEVsZW1lbnQsXHJcbiAgcGFkZGluZyA9IDAsXHJcbiAgYm91bmRhcmllc0VsZW1lbnQ6IHN0cmluZyxcclxuICBmaXhlZFBvc2l0aW9uID0gZmFsc2VcclxuKSB7XHJcbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcclxuXHJcbiAgbGV0IGJvdW5kYXJpZXM6IGFueSA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XHJcbiAgY29uc3Qgb2Zmc2V0UGFyZW50ID0gZml4ZWRQb3NpdGlvbiA/IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQodGFyZ2V0KSA6IGZpbmRDb21tb25PZmZzZXRQYXJlbnQodGFyZ2V0LCBob3N0KTtcclxuXHJcbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcclxuICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd2aWV3cG9ydCcpIHtcclxuICAgIGJvdW5kYXJpZXMgPSBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUob2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gSGFuZGxlIG90aGVyIGNhc2VzIGJhc2VkIG9uIERPTSBlbGVtZW50IHVzZWQgYXMgYm91bmRhcmllc1xyXG4gICAgbGV0IGJvdW5kYXJpZXNOb2RlO1xyXG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xyXG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGdldFNjcm9sbFBhcmVudChnZXRQYXJlbnROb2RlKGhvc3QpKTtcclxuICAgICAgaWYgKGJvdW5kYXJpZXNOb2RlLm5vZGVOYW1lID09PSAnQk9EWScpIHtcclxuICAgICAgICBib3VuZGFyaWVzTm9kZSA9IHRhcmdldC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3dpbmRvdycpIHtcclxuICAgICAgYm91bmRhcmllc05vZGUgPSB0YXJnZXQub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib3VuZGFyaWVzTm9kZSA9IGJvdW5kYXJpZXNFbGVtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9mZnNldHMgPSBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoXHJcbiAgICAgIGJvdW5kYXJpZXNOb2RlLFxyXG4gICAgICBvZmZzZXRQYXJlbnQsXHJcbiAgICAgIGZpeGVkUG9zaXRpb25cclxuICAgICk7XHJcblxyXG4gICAgLy8gSW4gY2FzZSBvZiBIVE1MLCB3ZSBuZWVkIGEgZGlmZmVyZW50IGNvbXB1dGF0aW9uXHJcbiAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdIVE1MJyAmJiAhaXNGaXhlZChvZmZzZXRQYXJlbnQpKSB7XHJcbiAgICAgIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0V2luZG93U2l6ZXModGFyZ2V0Lm93bmVyRG9jdW1lbnQpO1xyXG4gICAgICBib3VuZGFyaWVzLnRvcCArPSBvZmZzZXRzLnRvcCAtIG9mZnNldHMubWFyZ2luVG9wO1xyXG4gICAgICBib3VuZGFyaWVzLmJvdHRvbSA9IE51bWJlcihoZWlnaHQpICsgTnVtYmVyKG9mZnNldHMudG9wKTtcclxuICAgICAgYm91bmRhcmllcy5sZWZ0ICs9IG9mZnNldHMubGVmdCAtIG9mZnNldHMubWFyZ2luTGVmdDtcclxuICAgICAgYm91bmRhcmllcy5yaWdodCA9IE51bWJlcih3aWR0aCkgKyBOdW1iZXIob2Zmc2V0cy5sZWZ0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGZvciBhbGwgdGhlIG90aGVyIERPTSBlbGVtZW50cywgdGhpcyBvbmUgaXMgZ29vZFxyXG4gICAgICBib3VuZGFyaWVzID0gb2Zmc2V0cztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIEFkZCBwYWRkaW5nc1xyXG4gIGJvdW5kYXJpZXMubGVmdCArPSBwYWRkaW5nO1xyXG4gIGJvdW5kYXJpZXMudG9wICs9IHBhZGRpbmc7XHJcbiAgYm91bmRhcmllcy5yaWdodCAtPSBwYWRkaW5nO1xyXG4gIGJvdW5kYXJpZXMuYm90dG9tIC09IHBhZGRpbmc7XHJcblxyXG4gIHJldHVybiBib3VuZGFyaWVzO1xyXG59XHJcbiJdfQ==