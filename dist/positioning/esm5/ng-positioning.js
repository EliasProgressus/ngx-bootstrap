/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers';
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return this.offset(hostElement, targetElement, false);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    function (hostElement, targetElement, round) {
        if (round === void 0) { round = true; }
        return getReferenceOffsets(targetElement, hostElement);
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    Positioning.prototype.positionElements = /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    function (hostElement, targetElement, position, appendToBody, options) {
        var /** @type {?} */ chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce(function (modifiedData, modifier) { return modifier(modifiedData); }, initData(targetElement, hostElement, position, options));
    };
    return Positioning;
}());
export { Positioning };
var /** @type {?} */ positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @param {?=} options
 * @param {?=} renderer
 * @return {?}
 */
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    var /** @type {?} */ data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibmctcG9zaXRpb25pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUUsSUFBQTs7Ozs7Ozs7O0lBQ0UsOEJBQVE7Ozs7OztJQUFSLFVBQVMsV0FBd0IsRUFBRSxhQUEwQixFQUFFLEtBQVk7UUFBWixzQkFBQSxFQUFBLFlBQVk7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN2RDs7Ozs7OztJQUVELDRCQUFNOzs7Ozs7SUFBTixVQUFPLFdBQXdCLEVBQUUsYUFBMEIsRUFBRSxLQUFZO1FBQVosc0JBQUEsRUFBQSxZQUFZO1FBQ3ZFLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDeEQ7Ozs7Ozs7OztJQUVELHNDQUFnQjs7Ozs7Ozs7SUFBaEIsVUFDRSxXQUF3QixFQUN4QixhQUEwQixFQUMxQixRQUFnQixFQUNoQixZQUFzQixFQUN0QixPQUFpQjtRQUVqQixxQkFBTSxnQkFBZ0IsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRS9ELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQzVCLFVBQUMsWUFBWSxFQUFFLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBdEIsQ0FBc0IsRUFDbEQsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN4RCxDQUFDO0tBQ0g7c0JBbENIO0lBbUNDLENBQUE7QUF2QkQsdUJBdUJDO0FBRUQscUJBQU0sZUFBZSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7Ozs7Ozs7Ozs7QUFFMUMsTUFBTSwyQkFDSixXQUF3QixFQUN4QixhQUEwQixFQUMxQixTQUFpQixFQUNqQixZQUFzQixFQUN0QixPQUFpQixFQUNqQixRQUFvQjtJQUdwQixxQkFBTSxJQUFJLEdBQUcsZUFBZSxDQUFDLGdCQUFnQixDQUMzQyxXQUFXLEVBQ1gsYUFBYSxFQUNiLFNBQVMsRUFDVCxZQUFZLEVBQ1osT0FBTyxDQUNSLENBQUM7SUFFRixZQUFZLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcclxuICogQGNvcHlyaWdodCBGZWRlcmljbyBaaXZvbG8gYW5kIGNvbnRyaWJ1dG9yc1xyXG4gKi9cclxuaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBnZXRSZWZlcmVuY2VPZmZzZXRzLCBzZXRBbGxTdHlsZXMgfSBmcm9tICcuL3V0aWxzJztcclxuXHJcbmltcG9ydCB7IGFycm93LCBmbGlwLCBwcmV2ZW50T3ZlcmZsb3csIHNoaWZ0LCBpbml0RGF0YSB9IGZyb20gJy4vbW9kaWZpZXJzJztcclxuaW1wb3J0IHsgRGF0YSwgT2Zmc2V0cywgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25pbmcge1xyXG4gIHBvc2l0aW9uKGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IE9mZnNldHMge1xyXG4gICAgcmV0dXJuIHRoaXMub2Zmc2V0KGhvc3RFbGVtZW50LCB0YXJnZXRFbGVtZW50LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBvZmZzZXQoaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCwgcm91bmQgPSB0cnVlKTogT2Zmc2V0cyB7XHJcbiAgICByZXR1cm4gZ2V0UmVmZXJlbmNlT2Zmc2V0cyh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgICBwb3NpdGlvbjogc3RyaW5nLFxyXG4gICAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcclxuICAgIG9wdGlvbnM/OiBPcHRpb25zXHJcbiAgKTogRGF0YSB7XHJcbiAgICBjb25zdCBjaGFpbk9mTW9kaWZpZXJzID0gW2ZsaXAsIHNoaWZ0LCBwcmV2ZW50T3ZlcmZsb3csIGFycm93XTtcclxuXHJcbiAgICByZXR1cm4gY2hhaW5PZk1vZGlmaWVycy5yZWR1Y2UoXHJcbiAgICAgIChtb2RpZmllZERhdGEsIG1vZGlmaWVyKSA9PiBtb2RpZmllcihtb2RpZmllZERhdGEpLFxyXG4gICAgICBpbml0RGF0YSh0YXJnZXRFbGVtZW50LCBob3N0RWxlbWVudCwgcG9zaXRpb24sIG9wdGlvbnMpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcG9zaXRpb25TZXJ2aWNlID0gbmV3IFBvc2l0aW9uaW5nKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcG9zaXRpb25FbGVtZW50cyhcclxuICBob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsXHJcbiAgcGxhY2VtZW50OiBzdHJpbmcsXHJcbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbixcclxuICBvcHRpb25zPzogT3B0aW9ucyxcclxuICByZW5kZXJlcj86IFJlbmRlcmVyMlxyXG4pOiB2b2lkIHtcclxuXHJcbiAgY29uc3QgZGF0YSA9IHBvc2l0aW9uU2VydmljZS5wb3NpdGlvbkVsZW1lbnRzKFxyXG4gICAgaG9zdEVsZW1lbnQsXHJcbiAgICB0YXJnZXRFbGVtZW50LFxyXG4gICAgcGxhY2VtZW50LFxyXG4gICAgYXBwZW5kVG9Cb2R5LFxyXG4gICAgb3B0aW9uc1xyXG4gICk7XHJcblxyXG4gIHNldEFsbFN0eWxlcyhkYXRhLCByZW5kZXJlcik7XHJcbn1cclxuIl19