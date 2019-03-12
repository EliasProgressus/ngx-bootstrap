/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getClientRect, getOuterSizes, getStyleComputedProperty } from '../utils';
/**
 * @param {?} data
 * @return {?}
 */
export function arrow(data) {
    var /** @type {?} */ targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    var /** @type {?} */ arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    var /** @type {?} */ isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    var /** @type {?} */ len = isVertical ? 'height' : 'width';
    var /** @type {?} */ sideCapitalized = isVertical ? 'Top' : 'Left';
    var /** @type {?} */ side = sideCapitalized.toLowerCase();
    var /** @type {?} */ altSide = isVertical ? 'left' : 'top';
    var /** @type {?} */ opSide = isVertical ? 'bottom' : 'right';
    var /** @type {?} */ arrowElementSize = getOuterSizes(arrowElement)[len];
    // top/left side
    if (data.offsets.host[opSide] - arrowElementSize < targetOffsets[side]) {
        targetOffsets[side] -=
            targetOffsets[side] - (data.offsets.host[opSide] - arrowElementSize);
    }
    // bottom/right side
    if (Number(data.offsets.host[side]) + Number(arrowElementSize) > targetOffsets[opSide]) {
        targetOffsets[side] +=
            Number(data.offsets.host[side]) + Number(arrowElementSize) - Number(targetOffsets[opSide]);
    }
    targetOffsets = getClientRect(targetOffsets);
    // compute center of the target
    var /** @type {?} */ center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    var /** @type {?} */ css = getStyleComputedProperty(data.instance.target);
    var /** @type {?} */ targetMarginSide = parseFloat(css["margin" + sideCapitalized]);
    var /** @type {?} */ targetBorderSide = parseFloat(css["border" + sideCapitalized + "Width"]);
    var /** @type {?} */ sideValue = center - targetOffsets[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = (_a = {},
        _a[side] = Math.round(sideValue),
        _a[altSide] = '' // make sure to unset any eventual altSide value from the DOM node
    ,
        _a);
    data.instance.arrow = arrowElement;
    return data;
    var _a;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL2Fycm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFHbEYsTUFBTSxnQkFBZ0IsSUFBVTtJQUM5QixxQkFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0lBRXhDLHFCQUFNLFlBQVksR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQUd0RixFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQscUJBQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFcEUscUJBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDNUMscUJBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEQscUJBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxxQkFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1QyxxQkFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvQyxxQkFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRzFELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3hFOztJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDOUY7SUFDRCxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztJQUc3QyxxQkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzs7O0lBSTNHLHFCQUFNLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNELHFCQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsV0FBUyxlQUFpQixDQUFDLENBQUMsQ0FBQztJQUNyRSxxQkFBTSxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLFdBQVMsZUFBZSxVQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFFLHFCQUFJLFNBQVMsR0FDWCxNQUFNLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDOztJQUdyRSxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUVwRixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7UUFDaEIsR0FBQyxJQUFJLElBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUM7UUFDN0IsR0FBQyxPQUFPLElBQUcsRUFBRSxDQUFDLGtFQUFrRTs7V0FDakYsQ0FBQztJQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQztJQUVuQyxNQUFNLENBQUMsSUFBSSxDQUFDOztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCwgZ2V0T3V0ZXJTaXplcywgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5IH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhcnJvdyhkYXRhOiBEYXRhKSB7XHJcbiAgbGV0IHRhcmdldE9mZnNldHMgPSBkYXRhLm9mZnNldHMudGFyZ2V0O1xyXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBhIHN0cmluZywgc3VwcG9zZSBpdCdzIGEgQ1NTIHNlbGVjdG9yXHJcbiAgY29uc3QgYXJyb3dFbGVtZW50OiBIVE1MRWxlbWVudCB8IG51bGwgPSBkYXRhLmluc3RhbmNlLnRhcmdldC5xdWVyeVNlbGVjdG9yKCcuYXJyb3cnKTtcclxuXHJcbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxyXG4gIGlmICghYXJyb3dFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XHJcblxyXG4gIGNvbnN0IGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcbiAgY29uc3Qgc2lkZUNhcGl0YWxpemVkID0gaXNWZXJ0aWNhbCA/ICdUb3AnIDogJ0xlZnQnO1xyXG4gIGNvbnN0IHNpZGUgPSBzaWRlQ2FwaXRhbGl6ZWQudG9Mb3dlckNhc2UoKTtcclxuICBjb25zdCBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xyXG4gIGNvbnN0IG9wU2lkZSA9IGlzVmVydGljYWwgPyAnYm90dG9tJyA6ICdyaWdodCc7XHJcbiAgY29uc3QgYXJyb3dFbGVtZW50U2l6ZSA9IGdldE91dGVyU2l6ZXMoYXJyb3dFbGVtZW50KVtsZW5dO1xyXG5cclxuICAvLyB0b3AvbGVmdCBzaWRlXHJcbiAgaWYgKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplIDwgdGFyZ2V0T2Zmc2V0c1tzaWRlXSkge1xyXG4gICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtPVxyXG4gICAgICB0YXJnZXRPZmZzZXRzW3NpZGVdIC0gKGRhdGEub2Zmc2V0cy5ob3N0W29wU2lkZV0gLSBhcnJvd0VsZW1lbnRTaXplKTtcclxuICB9XHJcbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcclxuICBpZiAoTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSA+IHRhcmdldE9mZnNldHNbb3BTaWRlXSkge1xyXG4gICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSArPVxyXG4gICAgICBOdW1iZXIoZGF0YS5vZmZzZXRzLmhvc3Rbc2lkZV0pICsgTnVtYmVyKGFycm93RWxlbWVudFNpemUpIC0gTnVtYmVyKHRhcmdldE9mZnNldHNbb3BTaWRlXSk7XHJcbiAgfVxyXG4gIHRhcmdldE9mZnNldHMgPSBnZXRDbGllbnRSZWN0KHRhcmdldE9mZnNldHMpO1xyXG5cclxuICAvLyBjb21wdXRlIGNlbnRlciBvZiB0aGUgdGFyZ2V0XHJcbiAgY29uc3QgY2VudGVyID0gTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyKTtcclxuXHJcbiAgLy8gQ29tcHV0ZSB0aGUgc2lkZVZhbHVlIHVzaW5nIHRoZSB1cGRhdGVkIHRhcmdldCBvZmZzZXRzXHJcbiAgLy8gdGFrZSB0YXJnZXQgbWFyZ2luIGluIGFjY291bnQgYmVjYXVzZSB3ZSBkb24ndCBoYXZlIHRoaXMgaW5mbyBhdmFpbGFibGVcclxuICBjb25zdCBjc3MgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZGF0YS5pbnN0YW5jZS50YXJnZXQpO1xyXG5cclxuICBjb25zdCB0YXJnZXRNYXJnaW5TaWRlID0gcGFyc2VGbG9hdChjc3NbYG1hcmdpbiR7c2lkZUNhcGl0YWxpemVkfWBdKTtcclxuICBjb25zdCB0YXJnZXRCb3JkZXJTaWRlID0gcGFyc2VGbG9hdChjc3NbYGJvcmRlciR7c2lkZUNhcGl0YWxpemVkfVdpZHRoYF0pO1xyXG4gIGxldCBzaWRlVmFsdWUgPVxyXG4gICAgY2VudGVyIC0gdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtIHRhcmdldE1hcmdpblNpZGUgLSB0YXJnZXRCb3JkZXJTaWRlO1xyXG5cclxuICAvLyBwcmV2ZW50IGFycm93RWxlbWVudCBmcm9tIGJlaW5nIHBsYWNlZCBub3QgY29udGlndW91c2x5IHRvIGl0cyB0YXJnZXRcclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbih0YXJnZXRPZmZzZXRzW2xlbl0gLSBhcnJvd0VsZW1lbnRTaXplLCBzaWRlVmFsdWUpLCAwKTtcclxuXHJcbiAgZGF0YS5vZmZzZXRzLmFycm93ID0ge1xyXG4gICAgW3NpZGVdOiBNYXRoLnJvdW5kKHNpZGVWYWx1ZSksXHJcbiAgICBbYWx0U2lkZV06ICcnIC8vIG1ha2Ugc3VyZSB0byB1bnNldCBhbnkgZXZlbnR1YWwgYWx0U2lkZSB2YWx1ZSBmcm9tIHRoZSBET00gbm9kZVxyXG4gIH07XHJcblxyXG4gIGRhdGEuaW5zdGFuY2UuYXJyb3cgPSBhcnJvd0VsZW1lbnQ7XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiJdfQ==