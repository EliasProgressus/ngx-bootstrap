/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgZone } from '@angular/core';
import { ComponentLoader } from './component-loader.class';
import { PositioningService } from 'ngx-bootstrap/positioning';
export class ComponentLoaderFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: NgZone, },
    { type: Injector, },
    { type: PositioningService, },
    { type: ApplicationRef, },
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50LWxvYWRlci5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsY0FBYyxFQUFFLHdCQUF3QixFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQzFFLE1BQU0sRUFDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHL0QsTUFBTTs7Ozs7Ozs7SUFDSixZQUFvQix5QkFBbUQsRUFDbkQsU0FDQSxXQUNBLGFBQ0E7UUFKQSw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELFlBQU8sR0FBUCxPQUFPO1FBQ1AsY0FBUyxHQUFULFNBQVM7UUFDVCxnQkFBVyxHQUFYLFdBQVc7UUFDWCxvQkFBZSxHQUFmLGVBQWU7S0FBb0I7Ozs7Ozs7OztJQVF2RCxZQUFZLENBQUksV0FBdUIsRUFDdkIsaUJBQW1DLEVBQ25DLFNBQW9CO1FBQ2xDLE1BQU0sQ0FBQyxJQUFJLGVBQWUsQ0FDeEIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMseUJBQXlCLEVBQzlCLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLGVBQWUsRUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FDakIsQ0FBQztLQUNIOzs7WUEzQkYsVUFBVTs7OztZQU5PLHdCQUF3QjtZQUN4QyxNQUFNO1lBRDRELFFBQVE7WUFJbkUsa0JBQWtCO1lBSnpCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFwcGxpY2F0aW9uUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEVsZW1lbnRSZWYsIEluamVjdGFibGUsIEluamVjdG9yLFxyXG4gIE5nWm9uZSwgUmVuZGVyZXIyLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciB9IGZyb20gJy4vY29tcG9uZW50LWxvYWRlci5jbGFzcyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Bvc1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9hcHBsaWNhdGlvblJlZjogQXBwbGljYXRpb25SZWYpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIF9lbGVtZW50UmVmXHJcbiAgICogQHBhcmFtIF92aWV3Q29udGFpbmVyUmVmXHJcbiAgICogQHBhcmFtIF9yZW5kZXJlclxyXG4gICAqL1xyXG4gIGNyZWF0ZUxvYWRlcjxUPihfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyKTogQ29tcG9uZW50TG9hZGVyPFQ+IHtcclxuICAgIHJldHVybiBuZXcgQ29tcG9uZW50TG9hZGVyPFQ+KFxyXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgX3JlbmRlcmVyLFxyXG4gICAgICBfZWxlbWVudFJlZixcclxuICAgICAgdGhpcy5faW5qZWN0b3IsXHJcbiAgICAgIHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgICAgdGhpcy5fbmdab25lLFxyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblJlZixcclxuICAgICAgdGhpcy5fcG9zU2VydmljZVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19