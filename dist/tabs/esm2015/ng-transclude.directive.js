/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class NgTranscludeDirective {
    /**
     * @param {?} viewRef
     */
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    /**
     * @return {?}
     */
    get ngTransclude() {
        return this._ngTransclude;
    }
}
NgTranscludeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngTransclude]'
            },] }
];
/** @nocollapse */
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
NgTranscludeDirective.propDecorators = {
    "ngTransclude": [{ type: Input },],
};
function NgTranscludeDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    NgTranscludeDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    NgTranscludeDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    NgTranscludeDirective.propDecorators;
    /** @type {?} */
    NgTranscludeDirective.prototype.viewRef;
    /** @type {?} */
    NgTranscludeDirective.prototype._viewRef;
    /** @type {?} */
    NgTranscludeDirective.prototype._ngTransclude;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctdHJhbnNjbHVkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RhYnMvIiwic291cmNlcyI6WyJuZy10cmFuc2NsdWRlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS2hGLE1BQU07Ozs7SUFxQkosWUFBWSxPQUF5QjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7Ozs7O1FBZEcsWUFBWSxDQUFDLFdBQTZCO1FBQzVDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM5Qzs7Ozs7SUFJSCxJQUFJLFlBQVk7UUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBSnVDLGdCQUFnQjs7OzZCQVlyRCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW25nVHJhbnNjbHVkZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1RyYW5zY2x1ZGVEaXJlY3RpdmUge1xyXG4gIHZpZXdSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIHByb3RlY3RlZCBfdmlld1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcHJvdGVjdGVkIF9uZ1RyYW5zY2x1ZGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCBuZ1RyYW5zY2x1ZGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIHRoaXMuX25nVHJhbnNjbHVkZSA9IHRlbXBsYXRlUmVmO1xyXG4gICAgaWYgKHRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMudmlld1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIGdldCBuZ1RyYW5zY2x1ZGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmdUcmFuc2NsdWRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iodmlld1JlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgdGhpcy52aWV3UmVmID0gdmlld1JlZjtcclxuICB9XHJcbn1cclxuIl19