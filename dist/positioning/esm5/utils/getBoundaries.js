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
export function getBoundaries(target, host, padding, boundariesElement, fixedPosition) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Qm91bmRhcmllcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRCb3VuZGFyaWVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSw2Q0FBNkMsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hILE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7QUFFOUUsTUFBTSx3QkFDSixNQUFtQixFQUNuQixJQUFpQixFQUNqQixPQUFXLEVBQ1gsaUJBQXlCLEVBQ3pCLGFBQXFCO0lBRnJCLHdCQUFBLEVBQUEsV0FBVztJQUVYLDhCQUFBLEVBQUEscUJBQXFCOztJQUlyQixxQkFBSSxVQUFVLEdBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUMxQyxxQkFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUdqSCxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLFVBQVUsR0FBRyw2Q0FBNkMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDekY7SUFBQyxJQUFJLENBQUMsQ0FBQzs7UUFFTixxQkFBSSxjQUFjLFNBQUEsQ0FBQztRQUNuQixFQUFFLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGNBQWMsR0FBRyxlQUFlLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUM7YUFDdkQ7U0FDRjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztTQUN2RDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sY0FBYyxHQUFHLGlCQUFpQixDQUFDO1NBQ3BDO1FBRUQscUJBQU0sT0FBTyxHQUFHLG9DQUFvQyxDQUNsRCxjQUFjLEVBQ2QsWUFBWSxFQUNaLGFBQWEsQ0FDZCxDQUFDOztRQUdGLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSwrQ0FBUSxrQkFBTSxFQUFFLGdCQUFLLENBQTBDO1lBQy9ELFVBQVUsQ0FBQyxHQUFHLElBQUksT0FBTyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ2xELFVBQVUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsVUFBVSxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDckQsVUFBVSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6RDtRQUFDLElBQUksQ0FBQyxDQUFDOztZQUVOLFVBQVUsR0FBRyxPQUFPLENBQUM7U0FDdEI7S0FDRjs7SUFHRCxVQUFVLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQztJQUMzQixVQUFVLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQztJQUMxQixVQUFVLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQztJQUM1QixVQUFVLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQztJQUU3QixNQUFNLENBQUMsVUFBVSxDQUFDO0NBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cclxuICovXHJcbmltcG9ydCB7IGdldFNjcm9sbFBhcmVudCB9IGZyb20gJy4vZ2V0U2Nyb2xsUGFyZW50JztcclxuaW1wb3J0IHsgZ2V0UGFyZW50Tm9kZSB9IGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XHJcbmltcG9ydCB7IGZpbmRDb21tb25PZmZzZXRQYXJlbnQgfSBmcm9tICcuL2ZpbmRDb21tb25PZmZzZXRQYXJlbnQnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUgfSBmcm9tICcuL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSc7XHJcbmltcG9ydCB7IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0V2luZG93U2l6ZXMgfSBmcm9tICcuL2dldFdpbmRvd1NpemVzJztcclxuaW1wb3J0IHsgaXNGaXhlZCB9IGZyb20gJy4vaXNGaXhlZCc7XHJcbmltcG9ydCB7IGdldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldEZpeGVkUG9zaXRpb25PZmZzZXRQYXJlbnQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvdW5kYXJpZXMoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0OiBIVE1MRWxlbWVudCxcclxuICBwYWRkaW5nID0gMCxcclxuICBib3VuZGFyaWVzRWxlbWVudDogc3RyaW5nLFxyXG4gIGZpeGVkUG9zaXRpb24gPSBmYWxzZVxyXG4pIHtcclxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxyXG5cclxuICBsZXQgYm91bmRhcmllczogYW55ID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICBjb25zdCBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudCh0YXJnZXQpIDogZmluZENvbW1vbk9mZnNldFBhcmVudCh0YXJnZXQsIGhvc3QpO1xyXG5cclxuICAvLyBIYW5kbGUgdmlld3BvcnQgY2FzZVxyXG4gIGlmIChib3VuZGFyaWVzRWxlbWVudCA9PT0gJ3ZpZXdwb3J0Jykge1xyXG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBIYW5kbGUgb3RoZXIgY2FzZXMgYmFzZWQgb24gRE9NIGVsZW1lbnQgdXNlZCBhcyBib3VuZGFyaWVzXHJcbiAgICBsZXQgYm91bmRhcmllc05vZGU7XHJcbiAgICBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICdzY3JvbGxQYXJlbnQnKSB7XHJcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gZ2V0U2Nyb2xsUGFyZW50KGdldFBhcmVudE5vZGUoaG9zdCkpO1xyXG4gICAgICBpZiAoYm91bmRhcmllc05vZGUubm9kZU5hbWUgPT09ICdCT0RZJykge1xyXG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnd2luZG93Jykge1xyXG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHRhcmdldC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvdW5kYXJpZXNOb2RlID0gYm91bmRhcmllc0VsZW1lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShcclxuICAgICAgYm91bmRhcmllc05vZGUsXHJcbiAgICAgIG9mZnNldFBhcmVudCxcclxuICAgICAgZml4ZWRQb3NpdGlvblxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBJbiBjYXNlIG9mIEhUTUwsIHdlIG5lZWQgYSBkaWZmZXJlbnQgY29tcHV0YXRpb25cclxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcclxuICAgICAgY29uc3QgeyBoZWlnaHQsIHdpZHRoIH0gPSBnZXRXaW5kb3dTaXplcyh0YXJnZXQub3duZXJEb2N1bWVudCk7XHJcbiAgICAgIGJvdW5kYXJpZXMudG9wICs9IG9mZnNldHMudG9wIC0gb2Zmc2V0cy5tYXJnaW5Ub3A7XHJcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gTnVtYmVyKGhlaWdodCkgKyBOdW1iZXIob2Zmc2V0cy50b3ApO1xyXG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xyXG4gICAgICBib3VuZGFyaWVzLnJpZ2h0ID0gTnVtYmVyKHdpZHRoKSArIE51bWJlcihvZmZzZXRzLmxlZnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZm9yIGFsbCB0aGUgb3RoZXIgRE9NIGVsZW1lbnRzLCB0aGlzIG9uZSBpcyBnb29kXHJcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWRkIHBhZGRpbmdzXHJcbiAgYm91bmRhcmllcy5sZWZ0ICs9IHBhZGRpbmc7XHJcbiAgYm91bmRhcmllcy50b3AgKz0gcGFkZGluZztcclxuICBib3VuZGFyaWVzLnJpZ2h0IC09IHBhZGRpbmc7XHJcbiAgYm91bmRhcmllcy5ib3R0b20gLT0gcGFkZGluZztcclxuXHJcbiAgcmV0dXJuIGJvdW5kYXJpZXM7XHJcbn1cclxuIl19