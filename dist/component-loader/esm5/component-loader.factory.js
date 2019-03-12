/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
var ComponentLoaderFactory = /** @class */ (function () {
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     */
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    ComponentLoaderFactory.prototype.createLoader = /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: ComponentFactoryResolver, },
        { type: NgZone, },
        { type: Injector, },
        { type: PositioningService, },
        { type: ApplicationRef, },
    ]; };
    return ComponentLoaderFactory;
}());
export { ComponentLoaderFactory };
function ComponentLoaderFactory_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ComponentLoaderFactory.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ComponentLoaderFactory.ctorParameters;
    /** @type {?} */
    ComponentLoaderFactory.prototype._componentFactoryResolver;
    /** @type {?} */
    ComponentLoaderFactory.prototype._ngZone;
    /** @type {?} */
    ComponentLoaderFactory.prototype._injector;
    /** @type {?} */
    ComponentLoaderFactory.prototype._posService;
    /** @type {?} */
    ComponentLoaderFactory.prototype._applicationRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUFFLHdCQUF3QixFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQzFFLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBSTdELGdDQUFvQix5QkFBbUQsRUFDbkQsU0FDQSxXQUNBLGFBQ0E7UUFKQSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxvQkFBZSxHQUFmLGVBQWU7S0FBb0I7SUFFdkQ7Ozs7O09BS0c7Ozs7Ozs7OztJQUNILDZDQUFZOzs7Ozs7OztJQUFaLFVBQWdCLFdBQXVCLEVBQ3ZCLGlCQUFtQyxFQUNuQyxTQUFvQjtRQUNsQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQ3hCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsV0FBVyxFQUNYLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLHlCQUF5QixFQUM5QixJQUFJLENBQUMsT0FBTyxFQUNaLElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyxXQUFXLENBQ2pCLENBQUM7S0FDSDs7Z0JBM0JGLFVBQVU7Ozs7Z0JBTk8sd0JBQXdCO2dCQUN4QyxNQUFNO2dCQUQ0RCxRQUFRO2dCQUluRSxrQkFBa0I7Z0JBSnpCLGNBQWM7O2lDQURoQjs7U0FRYSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLFxyXG4gIE5nWm9uZSwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIF9lbGVtZW50UmVmXHJcbiAgICogQHBhcmFtIF92aWV3Q29udGFpbmVyUmVmXHJcbiAgICogQHBhcmFtIF9yZW5kZXJlclxyXG4gICAqL1xyXG4gIGNyZWF0ZUxvYWRlcjxUPihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyPFQ+KFxyXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgX3JlbmRlcmVyLFxyXG4gICAgICBfZWxlbWVudFJlZixcclxuICAgICAgdGhpcy5faW5qZWN0b3IsXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgdGhpcy5fbmdab25lLFxyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZixcclxuICAgICAgdGhpcy5fcG9zU2VydmljZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19