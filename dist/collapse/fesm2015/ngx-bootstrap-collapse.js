import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CollapseDirective {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CollapseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { CollapseDirective, CollapseModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jb2xsYXBzZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jb2xsYXBzZS9jb2xsYXBzZS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY29sbGFwc2UvY29sbGFwc2UubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRvZG86IGFkZCBhbmltYXRpb25zIHdoZW4gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvOTk0NyBzb2x2ZWRcclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VdJyxcclxuICBleHBvcnRBczogJ2JzLWNvbGxhcHNlJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmNvbGxhcHNlXSc6ICd0cnVlJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlRGlyZWN0aXZlIHtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBhcyBzb29uIGFzIGNvbnRlbnQgY29sbGFwc2VzICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgY29sbGFwc2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBhcyBzb29uIGFzIGNvbnRlbnQgYmVjb21lcyB2aXNpYmxlICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgZXhwYW5kZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5OiBzdHJpbmc7XHJcbiAgLy8gc2hvd25cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmluJylcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJylcclxuICBpc0V4cGFuZGVkID0gdHJ1ZTtcclxuICAvLyBoaWRkZW5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIC8vIHN0YWxlIHN0YXRlXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZScpIGlzQ29sbGFwc2UgPSB0cnVlO1xyXG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2luZycpIGlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG5cclxuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xyXG4gICAgdGhpcy50b2dnbGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBjb2xsYXBzZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzRXhwYW5kZWQ7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMikge31cclxuXHJcbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSB0b2dnbGUgY29udGVudCB2aXNpYmlsaXR5ICovXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSBoaWRlIGNvbnRlbnQgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5pc0V4cGFuZGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmlzQ29sbGFwc2UgPSB0cnVlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB0aGlzLmNvbGxhcHNlZC5lbWl0KHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGFsbG93cyB0byBtYW51YWxseSBzaG93IGNvbGxhcHNlZCBjb250ZW50ICovXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDb2xsYXBzZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNpbmcgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIC8vIHRoaXMuaGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShcclxuICAgICAgdGhpcy5fZWwubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ292ZXJmbG93JyxcclxuICAgICAgJ3Zpc2libGUnXHJcbiAgICApO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsICdhdXRvJyk7XHJcbiAgICB0aGlzLmV4cGFuZGVkLmVtaXQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb2xsYXBzZURpcmVjdGl2ZSB9IGZyb20gJy4vY29sbGFwc2UuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ29sbGFwc2VEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtDb2xsYXBzZURpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbGxhcHNlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBDb2xsYXBzZU1vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7Ozs7O0lBaURFLFlBQW9CLEdBQWUsRUFBVSxTQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBVzs7Ozt5QkE3QnhCLElBQUksWUFBWSxFQUFFOzs7O3dCQUduQixJQUFJLFlBQVksRUFBRTs7MEJBTzdDLElBQUk7OzJCQUU4QixLQUFLOzswQkFFUixJQUFJOzs0QkFFQSxLQUFLO0tBYWdCOzs7Ozs7UUFUakUsUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7OztJQUdoQixJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7O0lBS0QsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7Ozs7SUFHRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDM0I7Ozs7O0lBR0QsSUFBSTtRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXpCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztRQUV2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQ3RCLFVBQVUsRUFDVixTQUFTLENBQ1YsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7O1lBcEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxNQUFNO2lCQUMzQjthQUNGOzs7O1lBZEMsVUFBVTtZQUtWLFNBQVM7OzswQkFhUixNQUFNO3lCQUdOLE1BQU07d0JBRU4sV0FBVyxTQUFDLGVBQWU7MkJBRTNCLFdBQVcsU0FBQyxVQUFVLGNBQ3RCLFdBQVcsU0FBQyxZQUFZLGNBQ3hCLFdBQVcsU0FBQyxvQkFBb0I7NEJBR2hDLFdBQVcsU0FBQyxrQkFBa0I7MkJBRTlCLFdBQVcsU0FBQyxnQkFBZ0I7NkJBRTVCLFdBQVcsU0FBQyxrQkFBa0I7eUJBRzlCLEtBQUs7Ozs7Ozs7QUN4Q1I7Ozs7SUFTRSxPQUFPLE9BQU87UUFDWixPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDcEQ7OztZQVBGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0I7Ozs7Ozs7Ozs7Ozs7OzsifQ==