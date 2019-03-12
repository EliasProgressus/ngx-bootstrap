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
export class PopoverDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} _positionService
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
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
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._popover.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
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
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
            show: () => this.show()
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
];
/** @nocollapse */
PopoverDirective.ctorParameters = () => [
    { type: PopoverConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
    { type: PositioningService, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvIiwic291cmNlcyI6WyJwb3BvdmVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUNyRSxTQUFTLEVBQWUsZ0JBQWdCLEVBQ3pDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7QUFNL0QsTUFBTTs7Ozs7Ozs7O0lBcUVKLFlBQ0UsT0FBc0IsRUFDdEIsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCLEVBQ25CO1FBQUEscUJBQWdCLEdBQWhCLGdCQUFnQjs7Ozs0QkFyREYsS0FBSzs7Ozs4QkFlSCxFQUFFO3lCQThCUixLQUFLO1FBVXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRzthQUNoQixZQUFZLENBQ1gsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLENBQ1Y7YUFDQSxPQUFPLENBQUMsRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzs7UUFHdkMsRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNsQyxXQUFXLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtnQkFDbEQsSUFBSSxDQUFDO29CQUNILFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ25DO2dCQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFBLEdBQUcsRUFBRSxDQUFDO29CQUNiLE1BQU0sQ0FBQztpQkFDUjthQUNGLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7O1FBdkRHLE1BQU07UUFDUixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUM7Ozs7OztJQUcvQixJQUFJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7S0FDRjs7Ozs7O0lBbURELElBQUk7UUFDRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVE7YUFDVixNQUFNLENBQUMseUJBQXlCLENBQUM7YUFDakMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDbEIsUUFBUSxDQUFDLEVBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQzthQUN0QyxJQUFJLENBQUM7WUFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsT0FBTyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQzVCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDeEIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1NBQ3BDLENBQUMsQ0FBQztRQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOzs7Ozs7SUFNRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjtLQUNGOzs7Ozs7SUFNRCxNQUFNO1FBQ0osRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNwQjtRQUVELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNiOzs7O0lBRUQsUUFBUTs7OztRQUlOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ3hCLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDekI7OztZQTdLRixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUM7Ozs7WUFSakQsYUFBYTtZQUhULFVBQVU7WUFDckIsU0FBUztZQUFlLGdCQUFnQjtZQUdoQixzQkFBc0I7WUFFdkMsa0JBQWtCOzs7d0JBV3hCLEtBQUs7K0JBS0wsS0FBSzs2QkFJTCxLQUFLOzBCQUlMLEtBQUs7NkJBSUwsS0FBSzt5QkFLTCxLQUFLOzBCQUtMLEtBQUs7K0JBS0wsS0FBSzt1QkFLTCxLQUFLO3dCQWlCTCxNQUFNO3lCQUtOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG4vKipcclxuICogQSBsaWdodHdlaWdodCwgZXh0ZW5zaWJsZSBkaXJlY3RpdmUgZm9yIGZhbmN5IHBvcG92ZXIgY3JlYXRpb24uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1twb3BvdmVyXScsIGV4cG9ydEFzOiAnYnMtcG9wb3Zlcid9KVxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKipcclxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQElucHV0KCkgcG9wb3Zlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKipcclxuICAgKiBDb250ZXh0IHRvIGJlIHVzZWQgaWYgcG9wb3ZlciBpcyBhIHRlbXBsYXRlLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQElucHV0KCkgcG9wb3ZlckNvbnRleHQ6IGFueTtcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiBhIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcG9wb3ZlclRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYXV0byc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgcG9wb3ZlciBvbiBvdXRzaWRlIGNsaWNrXHJcbiAgICovXHJcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDc3MgY2xhc3MgZm9yIHBvcG92ZXIgY29udGFpbmVyXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9wb3Zlci5pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIHNob3duXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIHByaXZhdGUgX3BvcG92ZXI6IENvbXBvbmVudExvYWRlcjxQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9pc0luaXRlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9jb25maWc6IFBvcG92ZXJDb25maWcsXHJcbiAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5fcG9wb3ZlciA9IGNpc1xyXG4gICAgICAuY3JlYXRlTG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICAgIF9lbGVtZW50UmVmLFxyXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIF9yZW5kZXJlclxyXG4gICAgICApXHJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBQb3BvdmVyQ29uZmlnLCB1c2VWYWx1ZTogX2NvbmZpZ30pO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcclxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3BvcG92ZXIub25TaG93bjtcclxuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9wb3BvdmVyLm9uSGlkZGVuO1xyXG5cclxuICAgIC8vIGZpeDogbm8gZm9jdXMgb24gYnV0dG9uIG9uIE1hYyBPUyAjMTc5NVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci5cclxuICAgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3BvcG92ZXIuaXNTaG93biB8fCAhdGhpcy5wb3BvdmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9wb3BvdmVyXHJcbiAgICAgIC5hdHRhY2goUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudClcclxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxyXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcclxuICAgICAgLnNob3coe1xyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMucG9wb3ZlcixcclxuICAgICAgICBjb250ZXh0OiB0aGlzLnBvcG92ZXJDb250ZXh0LFxyXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucG9wb3ZlclRpdGxlLFxyXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiB0aGlzLmNvbnRhaW5lckNsYXNzXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTigJlzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLl9wb3BvdmVyLmhpZGUoKTtcclxuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudOKAmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci5cclxuICAgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBmaXg6IHNlZW1zIHRoZXJlIGFyZSBhbiBpc3N1ZSB3aXRoIGByb3V0ZXJMaW5rQWN0aXZlYFxyXG4gICAgLy8gd2hpY2ggcmVzdWx0IGluIGR1cGxpY2F0ZWQgY2FsbCBuZ09uSW5pdCB3aXRob3V0IGNhbGwgdG8gbmdPbkRlc3Ryb3lcclxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcclxuICAgIGlmICh0aGlzLl9pc0luaXRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pc0luaXRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xyXG4gICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICBmbGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9wb3BvdmVyLmxpc3Rlbih7XHJcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxyXG4gICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMub3V0c2lkZUNsaWNrLFxyXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BvcG92ZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=