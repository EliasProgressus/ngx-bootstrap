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
    let /** @type {?} */ targetOffsets = data.offsets.target;
    // if arrowElement is a string, suppose it's a CSS selector
    const /** @type {?} */ arrowElement = data.instance.target.querySelector('.arrow');
    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
        return data;
    }
    const /** @type {?} */ isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
    const /** @type {?} */ len = isVertical ? 'height' : 'width';
    const /** @type {?} */ sideCapitalized = isVertical ? 'Top' : 'Left';
    const /** @type {?} */ side = sideCapitalized.toLowerCase();
    const /** @type {?} */ altSide = isVertical ? 'left' : 'top';
    const /** @type {?} */ opSide = isVertical ? 'bottom' : 'right';
    const /** @type {?} */ arrowElementSize = getOuterSizes(arrowElement)[len];
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
    const /** @type {?} */ center = Number(data.offsets.host[side]) + Number(data.offsets.host[len] / 2 - arrowElementSize / 2);
    // Compute the sideValue using the updated target offsets
    // take target margin in account because we don't have this info available
    const /** @type {?} */ css = getStyleComputedProperty(data.instance.target);
    const /** @type {?} */ targetMarginSide = parseFloat(css[`margin${sideCapitalized}`]);
    const /** @type {?} */ targetBorderSide = parseFloat(css[`border${sideCapitalized}Width`]);
    let /** @type {?} */ sideValue = center - targetOffsets[side] - targetMarginSide - targetBorderSide;
    // prevent arrowElement from being placed not contiguously to its target
    sideValue = Math.max(Math.min(targetOffsets[len] - arrowElementSize, sideValue), 0);
    data.offsets.arrow = {
        [side]: Math.round(sideValue),
        [altSide]: '' // make sure to unset any eventual altSide value from the DOM node
    };
    data.instance.arrow = arrowElement;
    return data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXJyb3cuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL2Fycm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFHbEYsTUFBTSxnQkFBZ0IsSUFBVTtJQUM5QixxQkFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7O0lBRXhDLHVCQUFNLFlBQVksR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztJQUd0RixFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQsdUJBQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFFcEUsdUJBQU0sR0FBRyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDNUMsdUJBQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDcEQsdUJBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyx1QkFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUM1Qyx1QkFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUMvQyx1QkFBTSxnQkFBZ0IsR0FBRyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7O0lBRzFELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLGdCQUFnQixHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNqQixhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO0tBQ3hFOztJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkYsYUFBYSxDQUFDLElBQUksQ0FBQztZQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7S0FDOUY7SUFDRCxhQUFhLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDOztJQUc3Qyx1QkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQzs7O0lBSTNHLHVCQUFNLEdBQUcsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTNELHVCQUFNLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckUsdUJBQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLGVBQWUsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMxRSxxQkFBSSxTQUFTLEdBQ1gsTUFBTSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQzs7SUFHckUsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUc7UUFDbkIsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztRQUM3QixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7S0FDZCxDQUFDO0lBRUYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO0lBRW5DLE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENsaWVudFJlY3QsIGdldE91dGVyU2l6ZXMsIGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRGF0YSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXJyb3coZGF0YTogRGF0YSkge1xyXG4gIGxldCB0YXJnZXRPZmZzZXRzID0gZGF0YS5vZmZzZXRzLnRhcmdldDtcclxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgYSBzdHJpbmcsIHN1cHBvc2UgaXQncyBhIENTUyBzZWxlY3RvclxyXG4gIGNvbnN0IGFycm93RWxlbWVudDogSFRNTEVsZW1lbnQgfCBudWxsID0gZGF0YS5pbnN0YW5jZS50YXJnZXQucXVlcnlTZWxlY3RvcignLmFycm93Jyk7XHJcblxyXG4gIC8vIGlmIGFycm93RWxlbWVudCBpcyBub3QgZm91bmQsIGRvbid0IHJ1biB0aGUgbW9kaWZpZXJcclxuICBpZiAoIWFycm93RWxlbWVudCkge1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpc1ZlcnRpY2FsID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihkYXRhLnBsYWNlbWVudCkgIT09IC0xO1xyXG5cclxuICBjb25zdCBsZW4gPSBpc1ZlcnRpY2FsID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xyXG4gIGNvbnN0IHNpZGVDYXBpdGFsaXplZCA9IGlzVmVydGljYWwgPyAnVG9wJyA6ICdMZWZ0JztcclxuICBjb25zdCBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XHJcbiAgY29uc3QgYWx0U2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcclxuICBjb25zdCBvcFNpZGUgPSBpc1ZlcnRpY2FsID8gJ2JvdHRvbScgOiAncmlnaHQnO1xyXG4gIGNvbnN0IGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcclxuXHJcbiAgLy8gdG9wL2xlZnQgc2lkZVxyXG4gIGlmIChkYXRhLm9mZnNldHMuaG9zdFtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHRhcmdldE9mZnNldHNbc2lkZV0pIHtcclxuICAgIHRhcmdldE9mZnNldHNbc2lkZV0gLT1cclxuICAgICAgdGFyZ2V0T2Zmc2V0c1tzaWRlXSAtIChkYXRhLm9mZnNldHMuaG9zdFtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XHJcbiAgfVxyXG4gIC8vIGJvdHRvbS9yaWdodCBzaWRlXHJcbiAgaWYgKE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoYXJyb3dFbGVtZW50U2l6ZSkgPiB0YXJnZXRPZmZzZXRzW29wU2lkZV0pIHtcclxuICAgIHRhcmdldE9mZnNldHNbc2lkZV0gKz1cclxuICAgICAgTnVtYmVyKGRhdGEub2Zmc2V0cy5ob3N0W3NpZGVdKSArIE51bWJlcihhcnJvd0VsZW1lbnRTaXplKSAtIE51bWJlcih0YXJnZXRPZmZzZXRzW29wU2lkZV0pO1xyXG4gIH1cclxuICB0YXJnZXRPZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh0YXJnZXRPZmZzZXRzKTtcclxuXHJcbiAgLy8gY29tcHV0ZSBjZW50ZXIgb2YgdGhlIHRhcmdldFxyXG4gIGNvbnN0IGNlbnRlciA9IE51bWJlcihkYXRhLm9mZnNldHMuaG9zdFtzaWRlXSkgKyBOdW1iZXIoZGF0YS5vZmZzZXRzLmhvc3RbbGVuXSAvIDIgLSBhcnJvd0VsZW1lbnRTaXplIC8gMik7XHJcblxyXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCB0YXJnZXQgb2Zmc2V0c1xyXG4gIC8vIHRha2UgdGFyZ2V0IG1hcmdpbiBpbiBhY2NvdW50IGJlY2F1c2Ugd2UgZG9uJ3QgaGF2ZSB0aGlzIGluZm8gYXZhaWxhYmxlXHJcbiAgY29uc3QgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UudGFyZ2V0KTtcclxuXHJcbiAgY29uc3QgdGFyZ2V0TWFyZ2luU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2BtYXJnaW4ke3NpZGVDYXBpdGFsaXplZH1gXSk7XHJcbiAgY29uc3QgdGFyZ2V0Qm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzW2Bib3JkZXIke3NpZGVDYXBpdGFsaXplZH1XaWR0aGBdKTtcclxuICBsZXQgc2lkZVZhbHVlID1cclxuICAgIGNlbnRlciAtIHRhcmdldE9mZnNldHNbc2lkZV0gLSB0YXJnZXRNYXJnaW5TaWRlIC0gdGFyZ2V0Qm9yZGVyU2lkZTtcclxuXHJcbiAgLy8gcHJldmVudCBhcnJvd0VsZW1lbnQgZnJvbSBiZWluZyBwbGFjZWQgbm90IGNvbnRpZ3VvdXNseSB0byBpdHMgdGFyZ2V0XHJcbiAgc2lkZVZhbHVlID0gTWF0aC5tYXgoTWF0aC5taW4odGFyZ2V0T2Zmc2V0c1tsZW5dIC0gYXJyb3dFbGVtZW50U2l6ZSwgc2lkZVZhbHVlKSwgMCk7XHJcblxyXG4gIGRhdGEub2Zmc2V0cy5hcnJvdyA9IHtcclxuICAgIFtzaWRlXTogTWF0aC5yb3VuZChzaWRlVmFsdWUpLFxyXG4gICAgW2FsdFNpZGVdOiAnJyAvLyBtYWtlIHN1cmUgdG8gdW5zZXQgYW55IGV2ZW50dWFsIGFsdFNpZGUgdmFsdWUgZnJvbSB0aGUgRE9NIG5vZGVcclxuICB9O1xyXG5cclxuICBkYXRhLmluc3RhbmNlLmFycm93ID0gYXJyb3dFbGVtZW50O1xyXG5cclxuICByZXR1cm4gZGF0YTtcclxufVxyXG4iXX0=