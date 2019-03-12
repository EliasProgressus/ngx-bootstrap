/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { getBoundaries } from './getBoundaries';
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
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions, boundariesElement, padding) {
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
        return (tslib_1.__assign({ key: key }, rects[key], { area: getArea(rects[key]) }));
    })
        .sort(function (a, b) { return b.area - a.area; });
    var /** @type {?} */ filteredAreas = sortedAreas.filter(function (_a) {
        var width = _a.width, height = _a.height;
        return width >= target.clientWidth && height >= target.clientHeight;
    });
    filteredAreas = allowedPositions
        .reduce(function (obj, key) {
        return tslib_1.__assign({}, obj, (_a = {}, _a[key] = filteredAreas[key], _a));
        var _a;
    }, {});
    var /** @type {?} */ computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    var /** @type {?} */ variation = placement.split(' ')[1];
    target.className = target.className.replace(/auto/g, computedPlacement);
    return computedPlacement + (variation ? "-" + variation : '');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcHV0ZUF1dG9QbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvY29tcHV0ZUF1dG9QbGFjZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBR2hELGlCQUFpQixFQUE0QztRQUExQyxnQkFBSyxFQUFFLGtCQUFNO0lBQzlCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0NBQ3ZCOzs7Ozs7Ozs7OztBQUVELE1BQU0sK0JBQ0osU0FBaUIsRUFDakIsT0FBZ0IsRUFDaEIsTUFBbUIsRUFDbkIsSUFBaUIsRUFDakIsZ0JBQTRELEVBQzVELGlCQUE4QixFQUM5QixPQUFXO0lBRlgsaUNBQUEsRUFBQSxvQkFBMkIsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDO0lBQzVELGtDQUFBLEVBQUEsOEJBQThCO0lBQzlCLHdCQUFBLEVBQUEsV0FBVztJQUVYLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDbEI7SUFFRCxxQkFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFM0UscUJBQU0sS0FBSyxHQUFRO1FBQ2pCLEdBQUcsRUFBRTtZQUNILEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztZQUN2QixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRztTQUNyQztRQUNELEtBQUssRUFBRTtZQUNMLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLO1lBQ3ZDLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtTQUMxQjtRQUNELE1BQU0sRUFBRTtZQUNOLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztZQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTTtTQUMzQztRQUNELElBQUksRUFBRTtZQUNKLEtBQUssRUFBRSxPQUFPLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTtTQUMxQjtLQUNGLENBQUM7SUFFRixxQkFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkMsR0FBRyxDQUFDLFVBQUEsR0FBRztRQUFJLE9BQUEsb0JBQ1YsR0FBRyxLQUFBLElBQ0EsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUNiLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQ3pCO0lBSlUsQ0FJVixDQUFDO1NBQ0YsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBZixDQUFlLENBQUMsQ0FBQztJQUVuQyxxQkFBSSxhQUFhLEdBQVUsV0FBVyxDQUFDLE1BQU0sQ0FDM0MsVUFBQyxFQUFpQjtZQUFmLGdCQUFLLEVBQUUsa0JBQU07UUFDZCxPQUFBLEtBQUssSUFBSSxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsWUFBWTtJQUE1RCxDQUE0RCxDQUMvRCxDQUFDO0lBRUYsYUFBYSxHQUFHLGdCQUFnQjtTQUM3QixNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsR0FBRztRQUNmLE1BQU0sc0JBQU0sR0FBRyxlQUFHLEdBQUcsSUFBRyxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQUc7O0tBQzlDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFVCxxQkFBTSxpQkFBaUIsR0FBVyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDeEQsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHO1FBQ3RCLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBRXZCLHFCQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGlCQUFpQixDQUFDLENBQUM7SUFFeEUsTUFBTSxDQUFDLGlCQUFpQixHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFJLFNBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDL0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxyXG4gKiBhdmFpbGFibGUgc3BhY2UuXHJcbiAqL1xyXG5pbXBvcnQgeyBnZXRCb3VuZGFyaWVzIH0gZnJvbSAnLi9nZXRCb3VuZGFyaWVzJztcclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5mdW5jdGlvbiBnZXRBcmVhKHsgd2lkdGgsIGhlaWdodCB9OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KSB7XHJcbiAgcmV0dXJuIHdpZHRoICogaGVpZ2h0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQoXHJcbiAgcGxhY2VtZW50OiBzdHJpbmcsXHJcbiAgcmVmUmVjdDogT2Zmc2V0cyxcclxuICB0YXJnZXQ6IEhUTUxFbGVtZW50LFxyXG4gIGhvc3Q6IEhUTUxFbGVtZW50LFxyXG4gIGFsbG93ZWRQb3NpdGlvbnM6IGFueVtdID0gWyd0b3AnLCAnbGVmdCcsICdib3R0b20nLCAncmlnaHQnXSxcclxuICBib3VuZGFyaWVzRWxlbWVudCA9ICd2aWV3cG9ydCcsXHJcbiAgcGFkZGluZyA9IDBcclxuKSB7XHJcbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XHJcbiAgICByZXR1cm4gcGxhY2VtZW50O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXModGFyZ2V0LCBob3N0LCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCk7XHJcblxyXG4gIGNvbnN0IHJlY3RzOiBhbnkgPSB7XHJcbiAgICB0b3A6IHtcclxuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMud2lkdGgsXHJcbiAgICAgIGhlaWdodDogcmVmUmVjdC50b3AgLSBib3VuZGFyaWVzLnRvcFxyXG4gICAgfSxcclxuICAgIHJpZ2h0OiB7XHJcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLnJpZ2h0IC0gcmVmUmVjdC5yaWdodCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxyXG4gICAgfSxcclxuICAgIGJvdHRvbToge1xyXG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcclxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmJvdHRvbSAtIHJlZlJlY3QuYm90dG9tXHJcbiAgICB9LFxyXG4gICAgbGVmdDoge1xyXG4gICAgICB3aWR0aDogcmVmUmVjdC5sZWZ0IC0gYm91bmRhcmllcy5sZWZ0LFxyXG4gICAgICBoZWlnaHQ6IGJvdW5kYXJpZXMuaGVpZ2h0XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc29ydGVkQXJlYXMgPSBPYmplY3Qua2V5cyhyZWN0cylcclxuICAgIC5tYXAoa2V5ID0+ICh7XHJcbiAgICAgIGtleSxcclxuICAgICAgLi4ucmVjdHNba2V5XSxcclxuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxyXG4gICAgfSkpXHJcbiAgICAuc29ydCgoYSwgYikgPT4gYi5hcmVhIC0gYS5hcmVhKTtcclxuXHJcbiAgbGV0IGZpbHRlcmVkQXJlYXM6IGFueVtdID0gc29ydGVkQXJlYXMuZmlsdGVyKFxyXG4gICAgKHsgd2lkdGgsIGhlaWdodCB9KSA9PlxyXG4gICAgICB3aWR0aCA+PSB0YXJnZXQuY2xpZW50V2lkdGggJiYgaGVpZ2h0ID49IHRhcmdldC5jbGllbnRIZWlnaHRcclxuICApO1xyXG5cclxuICBmaWx0ZXJlZEFyZWFzID0gYWxsb3dlZFBvc2l0aW9uc1xyXG4gICAgLnJlZHVjZSgob2JqLCBrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIHsgLi4ub2JqLCBba2V5XTogZmlsdGVyZWRBcmVhc1trZXldIH07XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gIGNvbnN0IGNvbXB1dGVkUGxhY2VtZW50OiBzdHJpbmcgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDBcclxuICAgID8gZmlsdGVyZWRBcmVhc1swXS5rZXlcclxuICAgIDogc29ydGVkQXJlYXNbMF0ua2V5O1xyXG5cclxuICBjb25zdCB2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgdGFyZ2V0LmNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWUucmVwbGFjZSgvYXV0by9nLCBjb21wdXRlZFBsYWNlbWVudCk7XHJcblxyXG4gIHJldHVybiBjb21wdXRlZFBsYWNlbWVudCArICh2YXJpYXRpb24gPyBgLSR7dmFyaWF0aW9ufWAgOiAnJyk7XHJcbn1cclxuIl19