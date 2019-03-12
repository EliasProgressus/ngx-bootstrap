/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PopoverContainerComponent } from './popover-container.component';
import { PositioningService } from 'ngx-bootstrap/positioning';
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    function PopoverDirective(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
        this._positionService = _positionService;
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (/** @type {?} */ err) {
                    return;
                }
            });
        }
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        function () {
            return this._popover.isShown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this._popover.isShown || !this.popover) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.popover,
            context: this.popoverContext,
            placement: this.placement,
            title: this.popoverTitle,
            containerClass: this.containerClass
        });
        this.isOpen = true;
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: true
                }
            }
        });
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._popover.dispose();
    };
    PopoverDirective.decorators = [
        { type: Directive, args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
    ];
    /** @nocollapse */
    PopoverDirective.ctorParameters = function () { return [
        { type: PopoverConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
        { type: PositioningService, },
    ]; };
    PopoverDirective.propDecorators = {
        "popover": [{ type: Input },],
        "popoverContext": [{ type: Input },],
        "popoverTitle": [{ type: Input },],
        "placement": [{ type: Input },],
        "outsideClick": [{ type: Input },],
        "triggers": [{ type: Input },],
        "container": [{ type: Input },],
        "containerClass": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
    };
    return PopoverDirective;
}());
export { PopoverDirective };
function PopoverDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    PopoverDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    PopoverDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    PopoverDirective.propDecorators;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    PopoverDirective.prototype.popover;
    /**
     * Context to be used if popover is a template.
     * @type {?}
     */
    PopoverDirective.prototype.popoverContext;
    /**
     * Title of a popover.
     * @type {?}
     */
    PopoverDirective.prototype.popoverTitle;
    /**
     * Placement of a popover. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    PopoverDirective.prototype.placement;
    /**
     * Close popover on outside click
     * @type {?}
     */
    PopoverDirective.prototype.outsideClick;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    PopoverDirective.prototype.triggers;
    /**
     * A selector specifying the element the popover should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    PopoverDirective.prototype.container;
    /**
     * Css class for popover container
     * @type {?}
     */
    PopoverDirective.prototype.containerClass;
    /**
     * Emits an event when the popover is shown
     * @type {?}
     */
    PopoverDirective.prototype.onShown;
    /**
     * Emits an event when the popover is hidden
     * @type {?}
     */
    PopoverDirective.prototype.onHidden;
    /** @type {?} */
    PopoverDirective.prototype._popover;
    /** @type {?} */
    PopoverDirective.prototype._isInited;
    /** @type {?} */
    PopoverDirective.prototype._positionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvIiwic291cmNlcyI6WyJwb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUNyRSxTQUFTLEVBQWUsZ0JBQWdCLEVBQ3pDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0lBMkU3RCwwQkFDRSxPQUFzQixFQUN0QixXQUF1QixFQUN2QixTQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsR0FBMkIsRUFDbkI7UUFBQSxxQkFBZ0IsR0FBaEIsZ0JBQWdCOzs7OzRCQXJERixLQUFLOzs7OzhCQWVILEVBQUU7eUJBOEJSLEtBQUs7UUFVdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHO2FBQ2hCLFlBQVksQ0FDWCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVjthQUNBLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDOztRQUd2QyxFQUFF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USxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3pCOztnQkE3S0YsU0FBUyxTQUFDLEVBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFDOzs7O2dCQVJqRCxhQUFhO2dCQUhULFVBQVU7Z0JBQ3JCLFNBQVM7Z0JBQWUsZ0JBQWdCO2dCQUdoQixzQkFBc0I7Z0JBRXZDLGtCQUFrQjs7OzRCQVd4QixLQUFLO21DQUtMLEtBQUs7aUNBSUwsS0FBSzs4QkFJTCxLQUFLO2lDQUlMLEtBQUs7NkJBS0wsS0FBSzs4QkFLTCxLQUFLO21DQUtMLEtBQUs7MkJBS0wsS0FBSzs0QkFpQkwsTUFBTTs2QkFLTixNQUFNOzsyQkE3RVQ7O1NBYWEsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IFBvcG92ZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuLyoqXHJcbiAqIEEgbGlnaHR3ZWlnaHQsIGV4dGVuc2libGUgZGlyZWN0aXZlIGZvciBmYW5jeSBwb3BvdmVyIGNyZWF0aW9uLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6ICdbcG9wb3Zlcl0nLCBleHBvcnRBczogJ2JzLXBvcG92ZXInfSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqXHJcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgcG9wb3Zlci5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIHBvcG92ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqXHJcbiAgICogQ29udGV4dCB0byBiZSB1c2VkIGlmIHBvcG92ZXIgaXMgYSB0ZW1wbGF0ZS5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIEBJbnB1dCgpIHBvcG92ZXJDb250ZXh0OiBhbnk7XHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgYSBwb3BvdmVyLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBvcG92ZXJUaXRsZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFBsYWNlbWVudCBvZiBhIHBvcG92ZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcclxuICAgKi9cclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnIHwgJ2F1dG8nO1xyXG4gIC8qKlxyXG4gICAqIENsb3NlIHBvcG92ZXIgb24gb3V0c2lkZSBjbGlja1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG91dHNpZGVDbGljayA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxyXG4gICAqIGV2ZW50IG5hbWVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cclxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ3NzIGNsYXNzIGZvciBwb3BvdmVyIGNvbnRhaW5lclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNsYXNzID0gJyc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHBvcG92ZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BvcG92ZXIuaXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBzaG93blxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgaGlkZGVuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICBwcml2YXRlIF9wb3BvdmVyOiBDb21wb25lbnRMb2FkZXI8UG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudD47XHJcbiAgcHJpdmF0ZSBfaXNJbml0ZWQgPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfY29uZmlnOiBQb3BvdmVyQ29uZmlnLFxyXG4gICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25TZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcclxuICApIHtcclxuICAgIHRoaXMuX3BvcG92ZXIgPSBjaXNcclxuICAgICAgLmNyZWF0ZUxvYWRlcjxQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgICBfZWxlbWVudFJlZixcclxuICAgICAgICBfdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICBfcmVuZGVyZXJcclxuICAgICAgKVxyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogUG9wb3ZlckNvbmZpZywgdXNlVmFsdWU6IF9jb25maWd9KTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgX2NvbmZpZyk7XHJcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9wb3BvdmVyLm9uU2hvd247XHJcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fcG9wb3Zlci5vbkhpZGRlbjtcclxuXHJcbiAgICAvLyBmaXg6IG5vIGZvY3VzIG9uIGJ1dHRvbiBvbiBNYWMgT1MgIzE3OTVcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9wb3BvdmVyLmlzU2hvd24gfHwgIXRoaXMucG9wb3Zlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcG9wb3ZlclxyXG4gICAgICAuYXR0YWNoKFBvcG92ZXJDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcclxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXHJcbiAgICAgIC5zaG93KHtcclxuICAgICAgICBjb250ZW50OiB0aGlzLnBvcG92ZXIsXHJcbiAgICAgICAgY29udGV4dDogdGhpcy5wb3BvdmVyQ29udGV4dCxcclxuICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnBvcG92ZXJUaXRsZSxcclxuICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzc1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSBwb3BvdmVyLlxyXG4gICAqL1xyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgdGhpcy5fcG9wb3Zlci5oaWRlKCk7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gZml4OiBzZWVtcyB0aGVyZSBhcmUgYW4gaXNzdWUgd2l0aCBgcm91dGVyTGlua0FjdGl2ZWBcclxuICAgIC8vIHdoaWNoIHJlc3VsdCBpbiBkdXBsaWNhdGVkIGNhbGwgbmdPbkluaXQgd2l0aG91dCBjYWxsIHRvIG5nT25EZXN0cm95XHJcbiAgICAvLyByZWFkIG1vcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS92YWxvci1zb2Z0d2FyZS9uZ3gtYm9vdHN0cmFwL2lzc3Vlcy8xODg1XHJcbiAgICBpZiAodGhpcy5faXNJbml0ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5faXNJbml0ZWQgPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcclxuICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgZmxpcDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcG9wb3Zlci5saXN0ZW4oe1xyXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcclxuICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLm91dHNpZGVDbGljayxcclxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3BvdmVyLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIl19