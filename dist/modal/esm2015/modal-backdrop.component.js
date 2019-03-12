/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CLASS_NAME } from './modal-options.class';
import { isBs3, Utils } from 'ngx-bootstrap/utils';
/**
 * This component will be added as background layout for modals if enabled
 */
export class ModalBackdropComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._isAnimated = value;
        // this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, value);
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShown(value) {
        this._isShown = value;
        if (value) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        else {
            this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.IN}`);
        }
        if (!isBs3()) {
            if (value) {
                this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
            else {
                this.renderer.removeClass(this.element.nativeElement, `${CLASS_NAME.SHOW}`);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.addClass(this.element.nativeElement, `${CLASS_NAME.FADE}`);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-modal-backdrop',
                template: ' ',
                host: { class: CLASS_NAME.BACKDROP }
            }] }
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
function ModalBackdropComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ModalBackdropComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ModalBackdropComponent.ctorParameters;
    /** @type {?} */
    ModalBackdropComponent.prototype.element;
    /** @type {?} */
    ModalBackdropComponent.prototype.renderer;
    /** @type {?} */
    ModalBackdropComponent.prototype._isAnimated;
    /** @type {?} */
    ModalBackdropComponent.prototype._isShown;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtYmFja2Ryb3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9tb2RhbC8iLCJzb3VyY2VzIjpbIm1vZGFsLWJhY2tkcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQVUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBU25ELE1BQU07Ozs7O0lBZ0RKLFlBQVksT0FBbUIsRUFBRSxRQUFtQjt3QkFGL0IsS0FBSztRQUd4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUMxQjs7OztJQWxERCxJQUFJLFVBQVU7UUFDWixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUN6Qjs7Ozs7SUFFRCxJQUFJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDOztLQUUxQjs7OztJQUVELElBQUksT0FBTztRQUNULE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0tBQ3RCOzs7OztJQUVELElBQUksT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsR0FBRyxVQUFVLENBQUMsRUFBRSxFQUFFLENBQ25CLENBQUM7U0FDSDtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsQ0FDbkIsQ0FBQztTQUNIO1FBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQ3JCLENBQUM7YUFDSDtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFDMUIsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQ3JCLENBQUM7YUFDSDtTQUNGO0tBQ0Y7Ozs7SUFhRCxRQUFRO1FBQ04sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUMxQixHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FDckIsQ0FBQztZQUNGLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ3JCOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxHQUFHO2dCQUNiLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsUUFBUSxFQUFFO2FBQ3JDOzs7O1lBWG1CLFVBQVU7WUFBVSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ0xBU1NfTkFNRSB9IGZyb20gJy4vbW9kYWwtb3B0aW9ucy5jbGFzcyc7XHJcbmltcG9ydCB7IGlzQnMzLCBVdGlscyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuXHJcbi8qKiBUaGlzIGNvbXBvbmVudCB3aWxsIGJlIGFkZGVkIGFzIGJhY2tncm91bmQgbGF5b3V0IGZvciBtb2RhbHMgaWYgZW5hYmxlZCAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLW1vZGFsLWJhY2tkcm9wJyxcclxuICB0ZW1wbGF0ZTogJyAnLFxyXG4gIGhvc3Q6IHsgY2xhc3M6IENMQVNTX05BTUUuQkFDS0RST1AgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxCYWNrZHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZ2V0IGlzQW5pbWF0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNBbmltYXRlZDtcclxuICB9XHJcblxyXG4gIHNldCBpc0FuaW1hdGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc0FuaW1hdGVkID0gdmFsdWU7XHJcbiAgICAvLyB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7Q2xhc3NOYW1lLkZBREV9YCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzU2hvd24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc1Nob3duKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9pc1Nob3duID0gdmFsdWU7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBgJHtDTEFTU19OQU1FLklOfWBcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgYCR7Q0xBU1NfTkFNRS5JTn1gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzQnMzKCkpIHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgICAgYCR7Q0xBU1NfTkFNRS5TSE9XfWBcclxuICAgICAgICApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXHJcbiAgICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICAgIGAke0NMQVNTX05BTUUuU0hPV31gXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZWxlbWVudDogRWxlbWVudFJlZjtcclxuICByZW5kZXJlcjogUmVuZGVyZXIyO1xyXG5cclxuICBwcm90ZWN0ZWQgX2lzQW5pbWF0ZWQ6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF9pc1Nob3duID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBgJHtDTEFTU19OQU1FLkZBREV9YFxyXG4gICAgICApO1xyXG4gICAgICBVdGlscy5yZWZsb3codGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19