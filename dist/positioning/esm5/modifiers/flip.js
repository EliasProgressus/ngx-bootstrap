/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { computeAutoPlacement, getBoundaries, getClientRect, getOppositeVariation, getTargetOffsets, isModifierEnabled } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function flip(data) {
    data.offsets.target = getClientRect(data.offsets.target);
    if (!isModifierEnabled(data.options, 'flip')) {
        data.offsets.target = tslib_1.__assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        return data;
    }
    var /** @type {?} */ boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    'viewport', false // positionFixed
    );
    var /** @type {?} */ placement = data.placement.split(' ')[0];
    var /** @type {?} */ variation = data.placement.split(' ')[1] || '';
    var /** @type {?} */ offsetsHost = data.offsets.host;
    var /** @type {?} */ target = data.instance.target;
    var /** @type {?} */ host = data.instance.host;
    var /** @type {?} */ adaptivePosition = variation
        ? computeAutoPlacement('auto', offsetsHost, target, host, ['top', 'bottom'])
        : computeAutoPlacement('auto', offsetsHost, target, host);
    var /** @type {?} */ flipOrder = [placement, adaptivePosition];
    /* tslint:disable-next-line: cyclomatic-complexity */
    flipOrder.forEach(function (step, index) {
        if (placement !== step || flipOrder.length === index + 1) {
            return data;
        }
        placement = data.placement.split(' ')[0];
        // using floor because the host offsets may contain decimals we are not going to consider here
        var /** @type {?} */ overlapsRef = (placement === 'left' &&
            Math.floor(data.offsets.target.right) > Math.floor(data.offsets.host.left)) ||
            (placement === 'right' &&
                Math.floor(data.offsets.target.left) < Math.floor(data.offsets.host.right)) ||
            (placement === 'top' &&
                Math.floor(data.offsets.target.bottom) > Math.floor(data.offsets.host.top)) ||
            (placement === 'bottom' &&
                Math.floor(data.offsets.target.top) < Math.floor(data.offsets.host.bottom));
        var /** @type {?} */ overflowsLeft = Math.floor(data.offsets.target.left) < Math.floor(boundaries.left);
        var /** @type {?} */ overflowsRight = Math.floor(data.offsets.target.right) > Math.floor(boundaries.right);
        var /** @type {?} */ overflowsTop = Math.floor(data.offsets.target.top) < Math.floor(boundaries.top);
        var /** @type {?} */ overflowsBottom = Math.floor(data.offsets.target.bottom) > Math.floor(boundaries.bottom);
        var /** @type {?} */ overflowsBoundaries = (placement === 'left' && overflowsLeft) ||
            (placement === 'right' && overflowsRight) ||
            (placement === 'top' && overflowsTop) ||
            (placement === 'bottom' && overflowsBottom);
        // flip the variation if required
        var /** @type {?} */ isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var /** @type {?} */ flippedVariation = ((isVertical && variation === 'left' && overflowsLeft) ||
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
            data.placement = placement + (variation ? " " + variation : '');
            data.offsets.target = tslib_1.__assign({}, data.offsets.target, getTargetOffsets(data.instance.target, data.offsets.host, data.placement));
        }
    });
    return data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxpcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJtb2RpZmllcnMvZmxpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsYUFBYSxFQUNiLGFBQWEsRUFDYixvQkFBb0IsRUFDcEIsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNsQixNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFJbEIsTUFBTSxlQUFlLElBQVU7SUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFekQsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sd0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ25CLGdCQUFnQixDQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pCLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FDRixDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQscUJBQU0sVUFBVSxHQUFHLGFBQWEsQ0FDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUNsQixDQUFDLEVBQUUsVUFBVTtJQUNiLFVBQVUsRUFDVixLQUFLO0tBQ04sQ0FBQztJQUVGLHFCQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxxQkFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENB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SUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQUksU0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUVoRSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sd0JBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ25CLGdCQUFnQixDQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2pCLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FDRixDQUFDO1NBQ0g7S0FDRixDQUFDLENBQUM7SUFFSCxNQUFNLENBQUMsSUFBSSxDQUFDO0NBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNvbXB1dGVBdXRvUGxhY2VtZW50LFxyXG4gIGdldEJvdW5kYXJpZXMsXHJcbiAgZ2V0Q2xpZW50UmVjdCxcclxuICBnZXRPcHBvc2l0ZVZhcmlhdGlvbixcclxuICBnZXRUYXJnZXRPZmZzZXRzLFxyXG4gIGlzTW9kaWZpZXJFbmFibGVkXHJcbn0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxpcChkYXRhOiBEYXRhKTogRGF0YSB7XHJcbiAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnRhcmdldCk7XHJcblxyXG4gIGlmICghaXNNb2RpZmllckVuYWJsZWQoZGF0YS5vcHRpb25zLCAnZmxpcCcpKSB7XHJcblxyXG4gICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcclxuICAgICAgLi4uZGF0YS5vZmZzZXRzLnRhcmdldCxcclxuICAgICAgLi4uZ2V0VGFyZ2V0T2Zmc2V0cyhcclxuICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcclxuICAgICAgICBkYXRhLm9mZnNldHMuaG9zdCxcclxuICAgICAgICBkYXRhLnBsYWNlbWVudFxyXG4gICAgICApXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYm91bmRhcmllcyA9IGdldEJvdW5kYXJpZXMoXHJcbiAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcclxuICAgIGRhdGEuaW5zdGFuY2UuaG9zdCxcclxuICAgIDAsIC8vIHBhZGRpbmdcclxuICAgICd2aWV3cG9ydCcsXHJcbiAgICBmYWxzZSAvLyBwb3NpdGlvbkZpeGVkXHJcbiAgKTtcclxuXHJcbiAgbGV0IHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF07XHJcbiAgbGV0IHZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMV0gfHwgJyc7XHJcblxyXG4gIGNvbnN0IG9mZnNldHNIb3N0ID0gZGF0YS5vZmZzZXRzLmhvc3Q7XHJcbiAgY29uc3QgdGFyZ2V0ID0gZGF0YS5pbnN0YW5jZS50YXJnZXQ7XHJcbiAgY29uc3QgaG9zdCA9IGRhdGEuaW5zdGFuY2UuaG9zdDtcclxuXHJcbiAgY29uc3QgYWRhcHRpdmVQb3NpdGlvbiA9IHZhcmlhdGlvblxyXG4gICAgPyBjb21wdXRlQXV0b1BsYWNlbWVudCgnYXV0bycsIG9mZnNldHNIb3N0LCB0YXJnZXQsIGhvc3QsIFsndG9wJywgJ2JvdHRvbSddKVxyXG4gICAgOiBjb21wdXRlQXV0b1BsYWNlbWVudCgnYXV0bycsIG9mZnNldHNIb3N0LCB0YXJnZXQsIGhvc3QpO1xyXG5cclxuICBjb25zdCBmbGlwT3JkZXIgPSBbcGxhY2VtZW50LCBhZGFwdGl2ZVBvc2l0aW9uXTtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cclxuICBmbGlwT3JkZXIuZm9yRWFjaCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgIGlmIChwbGFjZW1lbnQgIT09IHN0ZXAgfHwgZmxpcE9yZGVyLmxlbmd0aCA9PT0gaW5kZXggKyAxKSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCcgJylbMF07XHJcblxyXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgaG9zdCBvZmZzZXRzIG1heSBjb250YWluIGRlY2ltYWxzIHdlIGFyZSBub3QgZ29pbmcgdG8gY29uc2lkZXIgaGVyZVxyXG4gICAgY29uc3Qgb3ZlcmxhcHNSZWYgPVxyXG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiZcclxuICAgICAgICBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5sZWZ0KSkgfHxcclxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5sZWZ0KSA8IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLmhvc3QucmlnaHQpKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAndG9wJyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC5ib3R0b20pID4gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC50b3ApKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJlxyXG4gICAgICAgIE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC50b3ApIDwgTWF0aC5mbG9vcihkYXRhLm9mZnNldHMuaG9zdC5ib3R0b20pKTtcclxuXHJcbiAgICBjb25zdCBvdmVyZmxvd3NMZWZ0ID0gTWF0aC5mbG9vcihkYXRhLm9mZnNldHMudGFyZ2V0LmxlZnQpIDwgTWF0aC5mbG9vcihib3VuZGFyaWVzLmxlZnQpO1xyXG4gICAgY29uc3Qgb3ZlcmZsb3dzUmlnaHQgPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQucmlnaHQpID4gTWF0aC5mbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcclxuICAgIGNvbnN0IG92ZXJmbG93c1RvcCA9IE1hdGguZmxvb3IoZGF0YS5vZmZzZXRzLnRhcmdldC50b3ApIDwgTWF0aC5mbG9vcihib3VuZGFyaWVzLnRvcCk7XHJcbiAgICBjb25zdCBvdmVyZmxvd3NCb3R0b20gPSBNYXRoLmZsb29yKGRhdGEub2Zmc2V0cy50YXJnZXQuYm90dG9tKSA+IE1hdGguZmxvb3IoYm91bmRhcmllcy5ib3R0b20pO1xyXG5cclxuICAgIGNvbnN0IG92ZXJmbG93c0JvdW5kYXJpZXMgPVxyXG4gICAgICAocGxhY2VtZW50ID09PSAnbGVmdCcgJiYgb3ZlcmZsb3dzTGVmdCkgfHxcclxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NSaWdodCkgfHxcclxuICAgICAgKHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wKSB8fFxyXG4gICAgICAocGxhY2VtZW50ID09PSAnYm90dG9tJyAmJiBvdmVyZmxvd3NCb3R0b20pO1xyXG5cclxuICAgIC8vIGZsaXAgdGhlIHZhcmlhdGlvbiBpZiByZXF1aXJlZFxyXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XHJcbiAgICBjb25zdCBmbGlwcGVkVmFyaWF0aW9uID1cclxuICAgICAgKChpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQpIHx8XHJcbiAgICAgICAgKGlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0KSB8fFxyXG4gICAgICAgICghaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdsZWZ0JyAmJiBvdmVyZmxvd3NUb3ApIHx8XHJcbiAgICAgICAgKCFpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ3JpZ2h0JyAmJiBvdmVyZmxvd3NCb3R0b20pKTtcclxuXHJcbiAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcyB8fCBmbGlwcGVkVmFyaWF0aW9uKSB7XHJcbiAgICAgIGlmIChvdmVybGFwc1JlZiB8fCBvdmVyZmxvd3NCb3VuZGFyaWVzKSB7XHJcbiAgICAgICAgcGxhY2VtZW50ID0gZmxpcE9yZGVyW2luZGV4ICsgMV07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmbGlwcGVkVmFyaWF0aW9uKSB7XHJcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gYCAke3ZhcmlhdGlvbn1gIDogJycpO1xyXG5cclxuICAgICAgZGF0YS5vZmZzZXRzLnRhcmdldCA9IHtcclxuICAgICAgICAuLi5kYXRhLm9mZnNldHMudGFyZ2V0LFxyXG4gICAgICAgIC4uLmdldFRhcmdldE9mZnNldHMoXHJcbiAgICAgICAgICBkYXRhLmluc3RhbmNlLnRhcmdldCxcclxuICAgICAgICAgIGRhdGEub2Zmc2V0cy5ob3N0LFxyXG4gICAgICAgICAgZGF0YS5wbGFjZW1lbnRcclxuICAgICAgICApXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiJdfQ==