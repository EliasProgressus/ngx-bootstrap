/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} data
 * @return {?}
 */
export function shift(data) {
    const /** @type {?} */ placement = data.placement;
    const /** @type {?} */ basePlacement = placement.split(' ')[0];
    const /** @type {?} */ shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        const { host, target } = data.offsets;
        const /** @type {?} */ isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        const /** @type {?} */ side = isVertical ? 'left' : 'top';
        const /** @type {?} */ measurement = isVertical ? 'width' : 'height';
        const /** @type {?} */ shiftOffsets = {
            left: { [side]: host[side] },
            right: {
                [side]: host[side] + host[measurement] - host[measurement]
            }
        };
        data.offsets.target = Object.assign({}, target, shiftOffsets[shiftvariation]);
    }
    return data;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL3NoaWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxnQkFBZ0IsSUFBVTtJQUM5Qix1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNqQyx1QkFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5Qyx1QkFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUvQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0Qyx1QkFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ25FLHVCQUFNLElBQUksR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pDLHVCQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBRXBELHVCQUFNLFlBQVksR0FBRztZQUNuQixJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM1QixLQUFLLEVBQUU7Z0JBQ0wsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDM0Q7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHFCQUFRLE1BQU0sRUFBSyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUUsQ0FBQztLQUN0RTtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERhdGEgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNoaWZ0KGRhdGE6IERhdGEpOiBEYXRhIHtcclxuICBjb25zdCBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcclxuICBjb25zdCBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMF07XHJcbiAgY29uc3Qgc2hpZnR2YXJpYXRpb24gPSBwbGFjZW1lbnQuc3BsaXQoJyAnKVsxXTtcclxuXHJcbiAgaWYgKHNoaWZ0dmFyaWF0aW9uKSB7XHJcbiAgICBjb25zdCB7IGhvc3QsIHRhcmdldCB9ID0gZGF0YS5vZmZzZXRzO1xyXG4gICAgY29uc3QgaXNWZXJ0aWNhbCA9IFsnYm90dG9tJywgJ3RvcCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgIT09IC0xO1xyXG4gICAgY29uc3Qgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcclxuICAgIGNvbnN0IG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcclxuXHJcbiAgICBjb25zdCBzaGlmdE9mZnNldHMgPSB7XHJcbiAgICAgIGxlZnQ6IHsgW3NpZGVdOiBob3N0W3NpZGVdIH0sXHJcbiAgICAgIHJpZ2h0OiB7XHJcbiAgICAgICAgW3NpZGVdOiBob3N0W3NpZGVdICsgaG9zdFttZWFzdXJlbWVudF0gLSBob3N0W21lYXN1cmVtZW50XVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGEub2Zmc2V0cy50YXJnZXQgPSB7IC4uLnRhcmdldCwgLi4uc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIl19