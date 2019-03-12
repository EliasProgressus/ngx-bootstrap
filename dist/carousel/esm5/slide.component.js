/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(carousel) {
        /**
         * Wraps element by appropriate CSS classes
         */
        this.addClass = true;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    function () {
        this.carousel.addSlide(this);
    };
    /** Fires changes in container collection after removing of this slide instance */
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    function () {
        this.carousel.removeSlide(this);
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slide',
                    template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    host: {
                        '[attr.aria-hidden]': '!active'
                    }
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: CarouselComponent, },
    ]; };
    SlideComponent.propDecorators = {
        "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
        "addClass": [{ type: HostBinding, args: ['class.item',] }, { type: HostBinding, args: ['class.carousel-item',] },],
    };
    return SlideComponent;
}());
export { SlideComponent };
function SlideComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    SlideComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    SlideComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    SlideComponent.propDecorators;
    /**
     * Is current slide active
     * @type {?}
     */
    SlideComponent.prototype.active;
    /**
     * Wraps element by appropriate CSS classes
     * @type {?}
     */
    SlideComponent.prototype.addClass;
    /**
     * Link to Parent(container-collection) component
     * @type {?}
     */
    SlideComponent.prototype.carousel;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jYXJvdXNlbC8iLCJzb3VyY2VzIjpbInNsaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBRVgsS0FBSyxFQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQTJCdkQsd0JBQVksUUFBMkI7Ozs7d0JBTDVCLElBQUk7UUFNYixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUMxQjtJQUVELDhFQUE4RTs7Ozs7SUFDOUUsaUNBQVE7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCO0lBRUQsa0ZBQWtGOzs7OztJQUNsRixvQ0FBVzs7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakM7O2dCQXJDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLFFBQVEsRUFBRSx1R0FJVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osb0JBQW9CLEVBQUUsU0FBUztxQkFDaEM7aUJBQ0Y7Ozs7Z0JBWlEsaUJBQWlCOzs7MkJBZXZCLFdBQVcsU0FBQyxjQUFjLGNBQzFCLEtBQUs7NkJBSUwsV0FBVyxTQUFDLFlBQVksY0FDeEIsV0FBVyxTQUFDLHFCQUFxQjs7eUJBN0JwQzs7U0FxQmEsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbGlkZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIiBjbGFzcz1cIml0ZW1cIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIuYXJpYS1oaWRkZW5dJzogJyFhY3RpdmUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIElzIGN1cnJlbnQgc2xpZGUgYWN0aXZlICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBJbnB1dCgpXHJcbiAgYWN0aXZlOiBib29sZWFuO1xyXG5cclxuICAvKiogV3JhcHMgZWxlbWVudCBieSBhcHByb3ByaWF0ZSBDU1MgY2xhc3NlcyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXRlbScpXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jYXJvdXNlbC1pdGVtJylcclxuICBhZGRDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qKiBMaW5rIHRvIFBhcmVudChjb250YWluZXItY29sbGVjdGlvbikgY29tcG9uZW50ICovXHJcbiAgcHJvdGVjdGVkIGNhcm91c2VsOiBDYXJvdXNlbENvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoY2Fyb3VzZWw6IENhcm91c2VsQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XHJcbiAgfVxyXG5cclxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciBhZGRpbmcgYSBuZXcgc2xpZGUgaW5zdGFuY2UgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwuYWRkU2xpZGUodGhpcyk7XHJcbiAgfVxyXG5cclxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciByZW1vdmluZyBvZiB0aGlzIHNsaWRlIGluc3RhbmNlICovXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcm91c2VsLnJlbW92ZVNsaWRlKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=