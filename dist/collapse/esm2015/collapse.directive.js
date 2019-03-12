/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
export class CollapseDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new EventEmitter();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new EventEmitter();
        // shown
        this.isExpanded = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
    }
    /**
     * A flag indicating visibility of content (shown or hidden)
     * @param {?} value
     * @return {?}
     */
    set collapse(value) {
        this.isExpanded = value;
        this.toggle();
    }
    /**
     * @return {?}
     */
    get collapse() {
        return this.isExpanded;
    }
    /**
     * allows to manually toggle content visibility
     * @return {?}
     */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */
    hide() {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.display = 'none';
        this.collapsed.emit(this);
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    show() {
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.display = 'block';
        // this.height = 'auto';
        this.isCollapse = true;
        this.isCollapsing = false;
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'visible');
        this._renderer.setStyle(this._el.nativeElement, 'height', 'auto');
        this.expanded.emit(this);
    }
}
CollapseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                host: {
                    '[class.collapse]': 'true'
                }
            },] }
];
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
CollapseDirective.propDecorators = {
    "collapsed": [{ type: Output },],
    "expanded": [{ type: Output },],
    "display": [{ type: HostBinding, args: ['style.display',] },],
    "isExpanded": [{ type: HostBinding, args: ['class.in',] }, { type: HostBinding, args: ['class.show',] }, { type: HostBinding, args: ['attr.aria-expanded',] },],
    "isCollapsed": [{ type: HostBinding, args: ['attr.aria-hidden',] },],
    "isCollapse": [{ type: HostBinding, args: ['class.collapse',] },],
    "isCollapsing": [{ type: HostBinding, args: ['class.collapsing',] },],
    "collapse": [{ type: Input },],
};
function CollapseDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    CollapseDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    CollapseDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    CollapseDirective.propDecorators;
    /**
     * This event fires as soon as content collapses
     * @type {?}
     */
    CollapseDirective.prototype.collapsed;
    /**
     * This event fires as soon as content becomes visible
     * @type {?}
     */
    CollapseDirective.prototype.expanded;
    /** @type {?} */
    CollapseDirective.prototype.display;
    /** @type {?} */
    CollapseDirective.prototype.isExpanded;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsed;
    /** @type {?} */
    CollapseDirective.prototype.isCollapse;
    /** @type {?} */
    CollapseDirective.prototype.isCollapsing;
    /** @type {?} */
    CollapseDirective.prototype._el;
    /** @type {?} */
    CollapseDirective.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS8iLCJzb3VyY2VzIjpbImNvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQVN2QixNQUFNOzs7OztJQWdDSixZQUFvQixHQUFlLEVBQVUsU0FBb0I7UUFBN0MsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7Ozs7eUJBN0J4QixJQUFJLFlBQVksRUFBRTs7Ozt3QkFHbkIsSUFBSSxZQUFZLEVBQUU7OzBCQU83QyxJQUFJOzsyQkFFOEIsS0FBSzs7MEJBRVIsSUFBSTs7NEJBRUEsS0FBSztLQWFnQjs7Ozs7O1FBVGpFLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7Ozs7SUFHaEIsSUFBSSxRQUFRO1FBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBS0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtLQUNGOzs7OztJQUdELElBQUk7UUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUV6QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUUxQixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMzQjs7Ozs7SUFHRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O1FBRXZCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFDdEIsVUFBVSxFQUNWLFNBQVMsQ0FDVixDQUFDO1FBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7WUFwRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLE1BQU07aUJBQzNCO2FBQ0Y7Ozs7WUFkQyxVQUFVO1lBS1YsU0FBUzs7OzBCQWFSLE1BQU07eUJBR04sTUFBTTt3QkFFTixXQUFXLFNBQUMsZUFBZTsyQkFFM0IsV0FBVyxTQUFDLFVBQVUsY0FDdEIsV0FBVyxTQUFDLFlBQVksY0FDeEIsV0FBVyxTQUFDLG9CQUFvQjs0QkFHaEMsV0FBVyxTQUFDLGtCQUFrQjsyQkFFOUIsV0FBVyxTQUFDLGdCQUFnQjs2QkFFNUIsV0FBVyxTQUFDLGtCQUFrQjt5QkFHOUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IGFkZCBhbmltYXRpb25zIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvOTk0NyBzb2x2ZWRcclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJyxcclxuICBleHBvcnRBczogJ2JzLWNvbGxhcHNlJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNvbGxhcHNlXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIHtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBhcyBzb29uIGFzIGNvbnRlbnQgY29sbGFwc2VzICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBhcyBzb29uIGFzIGNvbnRlbnQgYmVjb21lcyB2aXNpYmxlICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgLy8gc2hvd25cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmluJylcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcclxuICBpc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAvLyBoaWRkZW5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIC8vIHN0YWxlIHN0YXRlXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZScpIGlzQ29sbGFwc2UgPSB0cnVlO1xyXG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2luZycpIGlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG5cclxuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjb2xsYXBzZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzRXhwYW5kZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSB0b2dnbGUgY29udGVudCB2aXNpYmlsaXR5ICovXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSBoaWRlIGNvbnRlbnQgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmNvbGxhcHNlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSBzaG93IGNvbGxhcHNlZCBjb250ZW50ICovXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDb2xsYXBzZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vIHRoaXMuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ292ZXJmbG93JyxcclxuICAgICAgJ3Zpc2libGUnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XHJcbiAgICB0aGlzLmV4cGFuZGVkLmVtaXQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==