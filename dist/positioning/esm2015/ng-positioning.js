/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getReferenceOffsets, setAllStyles } from './utils';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers';
export class Positioning {
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    position(hostElement, targetElement, round = true) {
        return this.offset(hostElement, targetElement, false);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?=} round
     * @return {?}
     */
    offset(hostElement, targetElement, round = true) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} position
     * @param {?=} appendToBody
     * @param {?=} options
     * @return {?}
     */
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        const /** @type {?} */ chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), initData(targetElement, hostElement, position, options));
    }
}
const /** @type {?} */ positionService = new Positioning();
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
    const /** @type {?} */ data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    setAllStyles(data, renderer);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9zaXRpb25pbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsibmctcG9zaXRpb25pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQU1BLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFNUQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUUsTUFBTTs7Ozs7OztJQUNKLFFBQVEsQ0FBQyxXQUF3QixFQUFFLGFBQTBCLEVBQUUsS0FBSyxHQUFHLElBQUk7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUN2RDs7Ozs7OztJQUVELE1BQU0sQ0FBQyxXQUF3QixFQUFFLGFBQTBCLEVBQUUsS0FBSyxHQUFHLElBQUk7UUFDdkUsTUFBTSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztLQUN4RDs7Ozs7Ozs7O0lBRUQsZ0JBQWdCLENBQ2QsV0FBd0IsRUFDeEIsYUFBMEIsRUFDMUIsUUFBZ0IsRUFDaEIsWUFBc0IsRUFDdEIsT0FBaUI7UUFFakIsdUJBQU0sZ0JBQWdCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUUvRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUM1QixDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFDbEQsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN4RCxDQUFDO0tBQ0g7Q0FDRjtBQUVELHVCQUFNLGVBQWUsR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDOzs7Ozs7Ozs7O0FBRTFDLE1BQU0sMkJBQ0osV0FBd0IsRUFDeEIsYUFBMEIsRUFDMUIsU0FBaUIsRUFDakIsWUFBc0IsRUFDdEIsT0FBaUIsRUFDakIsUUFBb0I7SUFHcEIsdUJBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FDM0MsV0FBVyxFQUNYLGFBQWEsRUFDYixTQUFTLEVBQ1QsWUFBWSxFQUNaLE9BQU8sQ0FDUixDQUFDO0lBRUYsWUFBWSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAY29weXJpZ2h0IFZhbG9yIFNvZnR3YXJlXHJcbiAqIEBjb3B5cmlnaHQgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcclxuICovXHJcbmltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZ2V0UmVmZXJlbmNlT2Zmc2V0cywgc2V0QWxsU3R5bGVzIH0gZnJvbSAnLi91dGlscyc7XHJcblxyXG5pbXBvcnQgeyBhcnJvdywgZmxpcCwgcHJldmVudE92ZXJmbG93LCBzaGlmdCwgaW5pdERhdGEgfSBmcm9tICcuL21vZGlmaWVycyc7XHJcbmltcG9ydCB7IERhdGEsIE9mZnNldHMsIE9wdGlvbnMgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nIHtcclxuICBwb3NpdGlvbihob3N0RWxlbWVudDogSFRNTEVsZW1lbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LCByb3VuZCA9IHRydWUpOiBPZmZzZXRzIHtcclxuICAgIHJldHVybiB0aGlzLm9mZnNldChob3N0RWxlbWVudCwgdGFyZ2V0RWxlbWVudCwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgb2Zmc2V0KGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCwgdGFyZ2V0RWxlbWVudDogSFRNTEVsZW1lbnQsIHJvdW5kID0gdHJ1ZSk6IE9mZnNldHMge1xyXG4gICAgcmV0dXJuIGdldFJlZmVyZW5jZU9mZnNldHModGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgcG9zaXRpb25FbGVtZW50cyhcclxuICAgIGhvc3RFbGVtZW50OiBIVE1MRWxlbWVudCxcclxuICAgIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgcG9zaXRpb246IHN0cmluZyxcclxuICAgIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXHJcbiAgICBvcHRpb25zPzogT3B0aW9uc1xyXG4gICk6IERhdGEge1xyXG4gICAgY29uc3QgY2hhaW5PZk1vZGlmaWVycyA9IFtmbGlwLCBzaGlmdCwgcHJldmVudE92ZXJmbG93LCBhcnJvd107XHJcblxyXG4gICAgcmV0dXJuIGNoYWluT2ZNb2RpZmllcnMucmVkdWNlKFxyXG4gICAgICAobW9kaWZpZWREYXRhLCBtb2RpZmllcikgPT4gbW9kaWZpZXIobW9kaWZpZWREYXRhKSxcclxuICAgICAgaW5pdERhdGEodGFyZ2V0RWxlbWVudCwgaG9zdEVsZW1lbnQsIHBvc2l0aW9uLCBvcHRpb25zKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHBvc2l0aW9uU2VydmljZSA9IG5ldyBQb3NpdGlvbmluZygpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc2l0aW9uRWxlbWVudHMoXHJcbiAgaG9zdEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxyXG4gIHBsYWNlbWVudDogc3RyaW5nLFxyXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW4sXHJcbiAgb3B0aW9ucz86IE9wdGlvbnMsXHJcbiAgcmVuZGVyZXI/OiBSZW5kZXJlcjJcclxuKTogdm9pZCB7XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBwb3NpdGlvblNlcnZpY2UucG9zaXRpb25FbGVtZW50cyhcclxuICAgIGhvc3RFbGVtZW50LFxyXG4gICAgdGFyZ2V0RWxlbWVudCxcclxuICAgIHBsYWNlbWVudCxcclxuICAgIGFwcGVuZFRvQm9keSxcclxuICAgIG9wdGlvbnNcclxuICApO1xyXG5cclxuICBzZXRBbGxTdHlsZXMoZGF0YSwgcmVuZGVyZXIpO1xyXG59XHJcbiJdfQ==