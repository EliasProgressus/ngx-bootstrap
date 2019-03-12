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
var PositioningService = /** @class */ (function () {
    function PositioningService(rendererFactory, platformId) {
        var _this = this;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), of(0, animationFrameScheduler), this.update$$)
                .subscribe(function () {
                _this.positionElements
                    .forEach(function (positionElement) {
                    positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                });
            });
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.addPositionElement(options);
        this.update$$.next();
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.addPositionElement = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    };
    /**
     * @param {?} elRef
     * @return {?}
     */
    PositioningService.prototype.deletePositionElement = /**
     * @param {?} elRef
     * @return {?}
     */
    function (elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        this.options = options;
    };
    PositioningService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return [
        { type: RendererFactory2, },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    ]; };
    return PositioningService;
}());
export { PositioningService };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJwb3NpdGlvbmluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSx1QkFBdUIsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE0QzVFLDRCQUNFLGVBQWlDLEVBQ1o7UUFGdkIsaUJBeUJDO3dCQTVCa0IsSUFBSSxPQUFPLEVBQVE7Z0NBQ1gsSUFBSSxHQUFHLEVBQUU7UUFNbEMsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLEtBQUssQ0FDSCxTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMzQixTQUFTLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUMzQixFQUFFLENBQUMsQ0FBQyxFQUFFLHVCQUF1QixDQUFDLEVBQzlCLElBQUksQ0FBQyxRQUFRLENBQ2Q7aUJBQ0UsU0FBUyxDQUFDO2dCQUNULEtBQUksQ0FBQyxnQkFBZ0I7cUJBQ2xCLE9BQU8sQ0FBQyxVQUFDLGVBQW1DO29CQUMzQyxnQkFBZ0IsQ0FDZCxlQUFlLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUN2QyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUN4QyxlQUFlLENBQUMsVUFBVSxFQUMxQixlQUFlLENBQUMsWUFBWSxFQUM1QixLQUFJLENBQUMsT0FBTyxFQUNaLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUMzQyxDQUFDO2lCQUNILENBQUMsQ0FBQzthQUNOLENBQUMsQ0FBQztTQUNOO0tBQ0Y7Ozs7O0lBRUQscUNBQVE7Ozs7SUFBUixVQUFTLE9BQTJCO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3RCOzs7OztJQUVELCtDQUFrQjs7OztJQUFsQixVQUFtQixPQUEyQjtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDdEU7Ozs7O0lBRUQsa0RBQXFCOzs7O0lBQXJCLFVBQXNCLEtBQWlCO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDdEQ7Ozs7O0lBRUQsdUNBQVU7Ozs7SUFBVixVQUFXLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOztnQkFoREYsVUFBVTs7OztnQkEzQ3NCLGdCQUFnQjtnREFtRDVDLE1BQU0sU0FBQyxXQUFXOzs2QkFuRHZCOztTQTRDYSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0QvQix5QkFBeUIsT0FBMEM7O0lBRWpFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sT0FBTyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEM7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLFlBQVksVUFBVSxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztLQUM5QjtJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBFbGVtZW50UmVmLCBSZW5kZXJlckZhY3RvcnkyLCBJbmplY3QsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IHBvc2l0aW9uRWxlbWVudHMgfSBmcm9tICcuL25nLXBvc2l0aW9uaW5nJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIG9mLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9zaXRpb25pbmdPcHRpb25zIHtcclxuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHdpbGwgYmUgbW92ZWQgKi9cclxuICBlbGVtZW50PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xyXG5cclxuICAvKiogVGhlIERPTSBlbGVtZW50LCBFbGVtZW50UmVmLCBvciBhIHNlbGVjdG9yIHN0cmluZyBvZiBhbiBlbGVtZW50IHdoaWNoIHRoZSBlbGVtZW50IHdpbGwgYmUgYXR0YWNoZWQgdG8gICovXHJcbiAgdGFyZ2V0PzogSFRNTEVsZW1lbnQgfCBFbGVtZW50UmVmIHwgc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1hdHRhY2htZW50IGhvcml6LWF0dGFjaG1lbnQnIG9yICdwbGFjZW1lbnQnXHJcbiAgICogLSBwbGFjZW1lbnQgY2FuIGJlIFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcclxuICAgKiBub3QgeWV0IHN1cHBvcnRlZDpcclxuICAgKiAtIHZlcnQtYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICd0b3AnLCAnbWlkZGxlJywgJ2JvdHRvbSdcclxuICAgKiAtIGhvcml6LWF0dGFjaG1lbnQgY2FuIGJlIGFueSBvZiAnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnXHJcbiAgICovXHJcbiAgYXR0YWNobWVudD86IHN0cmluZztcclxuXHJcbiAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYGF0dGFjaG1lbnRgLiBUaGUgb25lIGRpZmZlcmVuY2UgaXMgdGhhdCwgaWYgaXQncyBub3QgcHJvdmlkZWQsXHJcbiAgICogYHRhcmdldEF0dGFjaG1lbnRgIHdpbGwgYXNzdW1lIHRoZSBtaXJyb3IgaW1hZ2Ugb2YgYGF0dGFjaG1lbnRgLlxyXG4gICAqL1xyXG4gIHRhcmdldEF0dGFjaG1lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1vZmZzZXQgaG9yaXotb2Zmc2V0J1xyXG4gICAqIC0gdmVydC1vZmZzZXQgYW5kIGhvcml6LW9mZnNldCBjYW4gYmUgb2YgdGhlIGZvcm0gXCIyMHB4XCIgb3IgXCI1NSVcIlxyXG4gICAqL1xyXG4gIG9mZnNldD86IHN0cmluZztcclxuXHJcbiAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYG9mZnNldGAsIGJ1dCByZWZlcnJpbmcgdG8gdGhlIG9mZnNldCBvZiB0aGUgdGFyZ2V0ICovXHJcbiAgdGFyZ2V0T2Zmc2V0Pzogc3RyaW5nO1xyXG5cclxuICAvKiogSWYgdHJ1ZSBjb21wb25lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byBib2R5ICovXHJcbiAgYXBwZW5kVG9Cb2R5PzogYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uaW5nU2VydmljZSB7XHJcbiAgb3B0aW9uczogT3B0aW9ucztcclxuICBwcml2YXRlIHVwZGF0ZSQkID0gbmV3IFN1YmplY3Q8bnVsbD4oKTtcclxuICBwcml2YXRlIHBvc2l0aW9uRWxlbWVudHMgPSBuZXcgTWFwKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxyXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcGxhdGZvcm1JZDogbnVtYmVyXHJcbiAgKSB7XHJcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm1JZCkpIHtcclxuICAgICAgbWVyZ2UoXHJcbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Njcm9sbCcpLFxyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKSxcclxuICAgICAgICBvZigwLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciksXHJcbiAgICAgICAgdGhpcy51cGRhdGUkJFxyXG4gICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHNcclxuICAgICAgICAgICAgLmZvckVhY2goKHBvc2l0aW9uRWxlbWVudDogUG9zaXRpb25pbmdPcHRpb25zKSA9PiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb25FbGVtZW50cyhcclxuICAgICAgICAgICAgICAgIF9nZXRIdG1sRWxlbWVudChwb3NpdGlvbkVsZW1lbnQudGFyZ2V0KSxcclxuICAgICAgICAgICAgICAgIF9nZXRIdG1sRWxlbWVudChwb3NpdGlvbkVsZW1lbnQuZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXR0YWNobWVudCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudC5hcHBlbmRUb0JvZHksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICByZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHBvc2l0aW9uKG9wdGlvbnM6IFBvc2l0aW9uaW5nT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgdGhpcy5hZGRQb3NpdGlvbkVsZW1lbnQob3B0aW9ucyk7XHJcbiAgICB0aGlzLnVwZGF0ZSQkLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGFkZFBvc2l0aW9uRWxlbWVudChvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcclxuICAgIHRoaXMucG9zaXRpb25FbGVtZW50cy5zZXQoX2dldEh0bWxFbGVtZW50KG9wdGlvbnMuZWxlbWVudCksIG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlUG9zaXRpb25FbGVtZW50KGVsUmVmOiBFbGVtZW50UmVmKTogdm9pZCB7XHJcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuZGVsZXRlKF9nZXRIdG1sRWxlbWVudChlbFJlZikpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBPcHRpb25zKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gX2dldEh0bWxFbGVtZW50KGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgRWxlbWVudFJlZiB8IHN0cmluZyk6IEhUTUxFbGVtZW50IHtcclxuICAvLyBpdCBtZWFucyB0aGF0IHdlIGdvdCBhIHNlbGVjdG9yXHJcbiAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRSZWYpIHtcclxuICAgIHJldHVybiBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZWxlbWVudDtcclxufVxyXG4iXX0=