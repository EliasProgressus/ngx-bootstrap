/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @param {?} data
 * @return {?}
 */
export function shift(data) {
    var /** @type {?} */ placement = data.placement;
    var /** @type {?} */ basePlacement = placement.split(' ')[0];
    var /** @type {?} */ shiftvariation = placement.split(' ')[1];
    if (shiftvariation) {
        var _a = data.offsets, host = _a.host, target = _a.target;
        var /** @type {?} */ isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        var /** @type {?} */ side = isVertical ? 'left' : 'top';
        var /** @type {?} */ measurement = isVertical ? 'width' : 'height';
        var /** @type {?} */ shiftOffsets = {
            left: (_b = {}, _b[side] = host[side], _b),
            right: (_c = {},
                _c[side] = host[side] + host[measurement] - host[measurement],
                _c)
        };
        data.offsets.target = tslib_1.__assign({}, target, shiftOffsets[shiftvariation]);
    }
    return data;
    var _b, _c;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL3NoaWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE1BQU0sZ0JBQWdCLElBQVU7SUFDOUIscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDakMscUJBQU0sYUFBYSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUMscUJBQU0sY0FBYyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0MsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNuQix1QkFBUSxjQUFJLEVBQUUsa0JBQU0sQ0FBa0I7UUFDdEMscUJBQU0sVUFBVSxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNuRSxxQkFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6QyxxQkFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUVwRCxxQkFBTSxZQUFZLEdBQUc7WUFDbkIsSUFBSSxZQUFJLEdBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBRTtZQUM1QixLQUFLO2dCQUNILEdBQUMsSUFBSSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzttQkFDM0Q7U0FDRixDQUFDO1FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLHdCQUFRLE1BQU0sRUFBSyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUUsQ0FBQztLQUN0RTtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7O0NBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGlmdChkYXRhOiBEYXRhKTogRGF0YSB7XHJcbiAgY29uc3QgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XHJcbiAgY29uc3QgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnICcpWzBdO1xyXG4gIGNvbnN0IHNoaWZ0dmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCcgJylbMV07XHJcblxyXG4gIGlmIChzaGlmdHZhcmlhdGlvbikge1xyXG4gICAgY29uc3QgeyBob3N0LCB0YXJnZXQgfSA9IGRhdGEub2Zmc2V0cztcclxuICAgIGNvbnN0IGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcclxuICAgIGNvbnN0IHNpZGUgPSBpc1ZlcnRpY2FsID8gJ2xlZnQnIDogJ3RvcCc7XHJcbiAgICBjb25zdCBtZWFzdXJlbWVudCA9IGlzVmVydGljYWwgPyAnd2lkdGgnIDogJ2hlaWdodCc7XHJcblxyXG4gICAgY29uc3Qgc2hpZnRPZmZzZXRzID0ge1xyXG4gICAgICBsZWZ0OiB7IFtzaWRlXTogaG9zdFtzaWRlXSB9LFxyXG4gICAgICByaWdodDoge1xyXG4gICAgICAgIFtzaWRlXTogaG9zdFtzaWRlXSArIGhvc3RbbWVhc3VyZW1lbnRdIC0gaG9zdFttZWFzdXJlbWVudF1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhLm9mZnNldHMudGFyZ2V0ID0geyAuLi50YXJnZXQsIC4uLnNoaWZ0T2Zmc2V0c1tzaGlmdHZhcmlhdGlvbl0gfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRhO1xyXG59XHJcbiJdfQ==