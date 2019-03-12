/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable, ElementRef, RendererFactory2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { positionElements } from './ng-positioning';
import { fromEvent, merge, of, animationFrameScheduler, Subject } from 'rxjs';
/**
 * @record
 */
export function PositioningOptions() { }
function PositioningOptions_tsickle_Closure_declarations() {
    /**
     * The DOM element, ElementRef, or a selector string of an element which will be moved
     * @type {?|undefined}
     */
    PositioningOptions.prototype.element;
    /**
     * The DOM element, ElementRef, or a selector string of an element which the element will be attached to
     * @type {?|undefined}
     */
    PositioningOptions.prototype.target;
    /**
     * A string of the form 'vert-attachment horiz-attachment' or 'placement'
     * - placement can be "top", "bottom", "left", "right"
     * not yet supported:
     * - vert-attachment can be any of 'top', 'middle', 'bottom'
     * - horiz-attachment can be any of 'left', 'center', 'right'
     * @type {?|undefined}
     */
    PositioningOptions.prototype.attachment;
    /**
     * A string similar to `attachment`. The one difference is that, if it's not provided,
     * `targetAttachment` will assume the mirror image of `attachment`.
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetAttachment;
    /**
     * A string of the form 'vert-offset horiz-offset'
     * - vert-offset and horiz-offset can be of the form "20px" or "55%"
     * @type {?|undefined}
     */
    PositioningOptions.prototype.offset;
    /**
     * A string similar to `offset`, but referring to the offset of the target
     * @type {?|undefined}
     */
    PositioningOptions.prototype.targetOffset;
    /**
     * If true component will be attached to body
     * @type {?|undefined}
     */
    PositioningOptions.prototype.appendToBody;
}
export class PositioningService {
    /**
     * @param {?} rendererFactory
     * @param {?} platformId
     */
    constructor(rendererFactory, platformId) {
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), of(0, animationFrameScheduler), this.update$$)
                .subscribe(() => {
                this.positionElements
                    .forEach((positionElement) => {
                    positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, this.options, rendererFactory.createRenderer(null, null));
                });
            });
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        this.addPositionElement(options);
        this.update$$.next();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    addPositionElement(options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    }
    /**
     * @param {?} elRef
     * @return {?}
     */
    deletePositionElement(elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        this.options = options;
    }
}
PositioningService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PositioningService.ctorParameters = () => [
    { type: RendererFactory2, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
function PositioningService_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PositioningService.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PositioningService.ctorParameters;
    /** @type {?} */
    PositioningService.prototype.options;
    /** @type {?} */
    PositioningService.prototype.update$$;
    /** @type {?} */
    PositioningService.prototype.positionElements;
}
/**
 * @param {?} element
 * @return {?}
 */
function _getHtmlElement(element) {
    // it means that we got a selector
    if (typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJwb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVDOUUsTUFBTTs7Ozs7SUFLSixZQUNFLGVBQWlDLEVBQ1o7d0JBTEosSUFBSSxPQUFPLEVBQVE7Z0NBQ1gsSUFBSSxHQUFHLEVBQUU7UUFNbEMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FDSCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMzQixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMzQixFQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLEVBQzlCLElBQUksQ0FBQyxRQUFRLENBQ2Q7aUJBQ0UsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsZ0JBQWdCO3FCQUNsQixPQUFPLENBQUMsQ0FBQyxlQUFtQyxFQUFFLEVBQUU7b0JBQy9DLGdCQUFnQixDQUNkLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQ3ZDLGVBQWUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQ3hDLGVBQWUsQ0FBQyxVQUFVLEVBQzFCLGVBQWUsQ0FBQyxZQUFZLEVBQzVCLElBQUksQ0FBQyxPQUFPLEVBQ1osZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQzNDLENBQUM7aUJBQ0gsQ0FBQyxDQUFDO2FBQ04sQ0FBQyxDQUFDO1NBQ047S0FDRjs7Ozs7SUFFRCxRQUFRLENBQUMsT0FBMkI7UUFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDdEI7Ozs7O0lBRUQsa0JBQWtCLENBQUMsT0FBMkI7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQ3RFOzs7OztJQUVELHFCQUFxQixDQUFDLEtBQWlCO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdEQ7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzs7WUFoREYsVUFBVTs7OztZQTNDc0IsZ0JBQWdCOzRDQW1ENUMsTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJDdkIseUJBQXlCLE9BQTBDOztJQUVqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3hDO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxZQUFZLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7S0FDOUI7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRWxlbWVudFJlZiwgUmVuZGVyZXJGYWN0b3J5MiwgSW5qZWN0LCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBwb3NpdGlvbkVsZW1lbnRzIH0gZnJvbSAnLi9uZy1wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBvZiwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW9ucyB7XHJcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB3aWxsIGJlIG1vdmVkICovXHJcbiAgZWxlbWVudD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcclxuXHJcbiAgLyoqIFRoZSBET00gZWxlbWVudCwgRWxlbWVudFJlZiwgb3IgYSBzZWxlY3RvciBzdHJpbmcgb2YgYW4gZWxlbWVudCB3aGljaCB0aGUgZWxlbWVudCB3aWxsIGJlIGF0dGFjaGVkIHRvICAqL1xyXG4gIHRhcmdldD86IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtYXR0YWNobWVudCBob3Jpei1hdHRhY2htZW50JyBvciAncGxhY2VtZW50J1xyXG4gICAqIC0gcGxhY2VtZW50IGNhbiBiZSBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICogbm90IHlldCBzdXBwb3J0ZWQ6XHJcbiAgICogLSB2ZXJ0LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAndG9wJywgJ21pZGRsZScsICdib3R0b20nXHJcbiAgICogLSBob3Jpei1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J1xyXG4gICAqL1xyXG4gIGF0dGFjaG1lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBhdHRhY2htZW50YC4gVGhlIG9uZSBkaWZmZXJlbmNlIGlzIHRoYXQsIGlmIGl0J3Mgbm90IHByb3ZpZGVkLFxyXG4gICAqIGB0YXJnZXRBdHRhY2htZW50YCB3aWxsIGFzc3VtZSB0aGUgbWlycm9yIGltYWdlIG9mIGBhdHRhY2htZW50YC5cclxuICAgKi9cclxuICB0YXJnZXRBdHRhY2htZW50Pzogc3RyaW5nO1xyXG5cclxuICAvKiogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtb2Zmc2V0IGhvcml6LW9mZnNldCdcclxuICAgKiAtIHZlcnQtb2Zmc2V0IGFuZCBob3Jpei1vZmZzZXQgY2FuIGJlIG9mIHRoZSBmb3JtIFwiMjBweFwiIG9yIFwiNTUlXCJcclxuICAgKi9cclxuICBvZmZzZXQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIHN0cmluZyBzaW1pbGFyIHRvIGBvZmZzZXRgLCBidXQgcmVmZXJyaW5nIHRvIHRoZSBvZmZzZXQgb2YgdGhlIHRhcmdldCAqL1xyXG4gIHRhcmdldE9mZnNldD86IHN0cmluZztcclxuXHJcbiAgLyoqIElmIHRydWUgY29tcG9uZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gYm9keSAqL1xyXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xyXG4gIG9wdGlvbnM6IE9wdGlvbnM7XHJcbiAgcHJpdmF0ZSB1cGRhdGUkJCA9IG5ldyBTdWJqZWN0PG51bGw+KCk7XHJcbiAgcHJpdmF0ZSBwb3NpdGlvbkVsZW1lbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHBsYXRmb3JtSWQ6IG51bWJlclxyXG4gICkge1xyXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XHJcbiAgICAgIG1lcmdlKFxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdzY3JvbGwnKSxcclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJyksXHJcbiAgICAgICAgb2YoMCwgYW5pbWF0aW9uRnJhbWVTY2hlZHVsZXIpLFxyXG4gICAgICAgIHRoaXMudXBkYXRlJCRcclxuICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzXHJcbiAgICAgICAgICAgIC5mb3JFYWNoKChwb3NpdGlvbkVsZW1lbnQ6IFBvc2l0aW9uaW5nT3B0aW9ucykgPT4ge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudHMoXHJcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LnRhcmdldCksXHJcbiAgICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LmVsZW1lbnQpLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50LmF0dGFjaG1lbnQsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXBwZW5kVG9Cb2R5LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvbihvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkUG9zaXRpb25FbGVtZW50KG9wdGlvbnMpO1xyXG4gICAgdGhpcy51cGRhdGUkJC5uZXh0KCk7XHJcbiAgfVxyXG5cclxuICBhZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9uczogUG9zaXRpb25pbmdPcHRpb25zKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuc2V0KF9nZXRIdG1sRWxlbWVudChvcHRpb25zLmVsZW1lbnQpLCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGRlbGV0ZVBvc2l0aW9uRWxlbWVudChlbFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xyXG4gICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLmRlbGV0ZShfZ2V0SHRtbEVsZW1lbnQoZWxSZWYpKTtcclxuICB9XHJcblxyXG4gIHNldE9wdGlvbnMob3B0aW9uczogT3B0aW9ucykge1xyXG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRIdG1sRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgLy8gaXQgbWVhbnMgdGhhdCB3ZSBnb3QgYSBzZWxlY3RvclxyXG4gIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XHJcbiAgICByZXR1cm4gZWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVsZW1lbnQ7XHJcbn1cclxuIl19