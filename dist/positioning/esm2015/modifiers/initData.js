/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { computeAutoPlacement, getReferenceOffsets, getTargetOffsets } from '../utils';
/**
 * @param {?} targetElement
 * @param {?} hostElement
 * @param {?} position
 * @param {?} options
 * @return {?}
 */
export function initData(targetElement, hostElement, position, options) {
    const /** @type {?} */ hostElPosition = getReferenceOffsets(targetElement, hostElement);
    const /** @type {?} */ placementAuto = !!position.match(/auto/g);
    // support old placements 'auto left|right|top|bottom'
    let /** @type {?} */ placement = !!position.match(/auto\s(left|right|top|bottom)/g)
        ? position.split(' ')[1] || ''
        : position;
    const /** @type {?} */ targetOffset = getTargetOffsets(targetElement, hostElPosition, placement);
    placement = computeAutoPlacement(placement, hostElPosition, targetElement, hostElement);
    return {
        options,
        instance: {
            target: targetElement,
            host: hostElement,
            arrow: null
        },
        offsets: {
            target: targetOffset,
            host: hostElPosition,
            arrow: null
        },
        positionFixed: false,
        placement,
        placementAuto
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdERhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibW9kaWZpZXJzL2luaXREYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLG1CQUFtQixFQUNuQixnQkFBZ0IsRUFDakIsTUFBTSxVQUFVLENBQUM7Ozs7Ozs7O0FBSWxCLE1BQU0sbUJBQ0osYUFBMEIsRUFBRSxXQUF3QixFQUFFLFFBQWdCLEVBQUUsT0FBZ0I7SUFHeEYsdUJBQU0sY0FBYyxHQUFHLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RSx1QkFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7O0lBR2hELHFCQUFJLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQztRQUNoRSxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO1FBQzlCLENBQUMsQ0FBQyxRQUFRLENBQUM7SUFFYix1QkFBTSxZQUFZLEdBQUcsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLGNBQWMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNoRixTQUFTLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFFeEYsTUFBTSxDQUFDO1FBQ0wsT0FBTztRQUNQLFFBQVEsRUFBRTtZQUNSLE1BQU0sRUFBRSxhQUFhO1lBQ3JCLElBQUksRUFBRSxXQUFXO1lBQ2pCLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRCxPQUFPLEVBQUU7WUFDUCxNQUFNLEVBQUUsWUFBWTtZQUNwQixJQUFJLEVBQUUsY0FBYztZQUNwQixLQUFLLEVBQUUsSUFBSTtTQUNaO1FBQ0QsYUFBYSxFQUFFLEtBQUs7UUFDcEIsU0FBUztRQUNULGFBQWE7S0FDZCxDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGNvbXB1dGVBdXRvUGxhY2VtZW50LFxyXG4gIGdldFJlZmVyZW5jZU9mZnNldHMsXHJcbiAgZ2V0VGFyZ2V0T2Zmc2V0c1xyXG59IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IERhdGEsIE9wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXRhKFxyXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHBvc2l0aW9uOiBzdHJpbmcsIG9wdGlvbnM6IE9wdGlvbnNcclxuKTogRGF0YSB7XHJcblxyXG4gIGNvbnN0IGhvc3RFbFBvc2l0aW9uID0gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XHJcbiAgY29uc3QgcGxhY2VtZW50QXV0byA9ICEhcG9zaXRpb24ubWF0Y2goL2F1dG8vZyk7XHJcblxyXG4gIC8vIHN1cHBvcnQgb2xkIHBsYWNlbWVudHMgJ2F1dG8gbGVmdHxyaWdodHx0b3B8Ym90dG9tJ1xyXG4gIGxldCBwbGFjZW1lbnQgPSAhIXBvc2l0aW9uLm1hdGNoKC9hdXRvXFxzKGxlZnR8cmlnaHR8dG9wfGJvdHRvbSkvZylcclxuICAgID8gcG9zaXRpb24uc3BsaXQoJyAnKVsxXSB8fCAnJ1xyXG4gICAgOiBwb3NpdGlvbjtcclxuXHJcbiAgY29uc3QgdGFyZ2V0T2Zmc2V0ID0gZ2V0VGFyZ2V0T2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxQb3NpdGlvbiwgcGxhY2VtZW50KTtcclxuICBwbGFjZW1lbnQgPSBjb21wdXRlQXV0b1BsYWNlbWVudChwbGFjZW1lbnQsIGhvc3RFbFBvc2l0aW9uLCB0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBvcHRpb25zLFxyXG4gICAgaW5zdGFuY2U6IHtcclxuICAgICAgdGFyZ2V0OiB0YXJnZXRFbGVtZW50LFxyXG4gICAgICBob3N0OiBob3N0RWxlbWVudCxcclxuICAgICAgYXJyb3c6IG51bGxcclxuICAgIH0sXHJcbiAgICBvZmZzZXRzOiB7XHJcbiAgICAgIHRhcmdldDogdGFyZ2V0T2Zmc2V0LFxyXG4gICAgICBob3N0OiBob3N0RWxQb3NpdGlvbixcclxuICAgICAgYXJyb3c6IG51bGxcclxuICAgIH0sXHJcbiAgICBwb3NpdGlvbkZpeGVkOiBmYWxzZSxcclxuICAgIHBsYWNlbWVudCxcclxuICAgIHBsYWNlbWVudEF1dG9cclxuICB9O1xyXG59XHJcbiJdfQ==