import { Injectable, ChangeDetectionStrategy, Input, Component, Directive, ElementRef, Output, Renderer2, ViewContainerRef, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
    }
    PopoverConfig.decorators = [
        { type: Injectable }
    ];
    return PopoverConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    function PopoverContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    PopoverContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'popover-container',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"popover in popover-" + placement + " " + "bs-popover-" + placement + " " + placement + " " + containerClass',
                        '[class.show]': '!isBs3',
                        '[class.bs3]': 'isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    },
                    template: "<div class=\"popover-arrow arrow\"></div>\r\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\r\n<div class=\"popover-content popover-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                    styles: ["\n    :host.bs3.popover-top {\n      margin-bottom: 10px;\n    }\n    :host.bs3.popover.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.popover.top {\n      margin-bottom: 10px;\n    }\n    :host.popover.bottom>.arrow {\n      margin-left: -4px;\n    }\n    :host.bs3.bs-popover-left {\n      margin-right: .5rem;\n    }\n    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{\n      margin: .3rem 0;\n    }\n    "]
                }] }
    ];
    /** @nocollapse */
    PopoverContainerComponent.ctorParameters = function () { return [
        { type: PopoverConfig, },
    ]; };
    PopoverContainerComponent.propDecorators = {
        "placement": [{ type: Input },],
        "title": [{ type: Input },],
    };
    return PopoverContainerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    PopoverModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PopoverDirective, PopoverContainerComponent],
                    exports: [PopoverDirective],
                    entryComponents: [PopoverContainerComponent]
                },] }
    ];
    return PopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { PopoverDirective, PopoverModule, PopoverConfig, PopoverContainerComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3BvdmVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvcG9wb3Zlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9wb3Zlci9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9wb3Zlci9wb3BvdmVyLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyL3BvcG92ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBDb25maWd1cmF0aW9uIHNlcnZpY2UgZm9yIHRoZSBQb3BvdmVyIGRpcmVjdGl2ZS5cclxuICogWW91IGNhbiBpbmplY3QgdGhpcyBzZXJ2aWNlLCB0eXBpY2FsbHkgaW4geW91ciByb290IGNvbXBvbmVudCwgYW5kIGN1c3RvbWl6ZVxyXG4gKiB0aGUgdmFsdWVzIG9mIGl0cyBwcm9wZXJ0aWVzIGluIG9yZGVyIHRvIHByb3ZpZGUgZGVmYXVsdCB2YWx1ZXMgZm9yIGFsbCB0aGVcclxuICogcG9wb3ZlcnMgdXNlZCBpbiB0aGUgYXBwbGljYXRpb24uXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImF1dG9cIlxyXG4gICAqL1xyXG4gIHBsYWNlbWVudCA9ICd0b3AnO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxyXG4gICAqIGV2ZW50IG5hbWVzLlxyXG4gICAqL1xyXG4gIHRyaWdnZXJzID0gJ2NsaWNrJztcclxuXHJcbiAgb3V0c2lkZUNsaWNrID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cclxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cclxuICAgKi9cclxuICBjb250YWluZXI6IHN0cmluZztcclxufVxyXG4iLCJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BvcG92ZXItY29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzXSc6XHJcbiAgICAgICdcInBvcG92ZXIgaW4gcG9wb3Zlci1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgXCJicy1wb3BvdmVyLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIGNvbnRhaW5lckNsYXNzJyxcclxuICAgICdbY2xhc3Muc2hvd10nOiAnIWlzQnMzJyxcclxuICAgICdbY2xhc3MuYnMzXSc6ICdpc0JzMycsXHJcbiAgICByb2xlOiAndG9vbHRpcCcsXHJcbiAgICBzdHlsZTogJ2Rpc3BsYXk6YmxvY2s7J1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdC5iczMucG9wb3Zlci10b3Age1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLnBvcG92ZXIudG9wPi5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLnBvcG92ZXIudG9wIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIDpob3N0LnBvcG92ZXIuYm90dG9tPi5hcnJvdyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLmJzLXBvcG92ZXItbGVmdCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMuYnMtcG9wb3Zlci1yaWdodCAuYXJyb3csIDpob3N0LmJzMy5icy1wb3BvdmVyLWxlZnQgLmFycm93e1xyXG4gICAgICBtYXJnaW46IC4zcmVtIDA7XHJcbiAgICB9XHJcbiAgICBgXHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6IHN0cmluZztcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XHJcblxyXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBQb3BvdmVyQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgVGVtcGxhdGVSZWYsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuXHJcbi8qKlxyXG4gKiBBIGxpZ2h0d2VpZ2h0LCBleHRlbnNpYmxlIGRpcmVjdGl2ZSBmb3IgZmFuY3kgcG9wb3ZlciBjcmVhdGlvbi5cclxuICovXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnW3BvcG92ZXJdJywgZXhwb3J0QXM6ICdicy1wb3BvdmVyJ30pXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBASW5wdXQoKSBwb3BvdmVyOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKlxyXG4gICAqIENvbnRleHQgdG8gYmUgdXNlZCBpZiBwb3BvdmVyIGlzIGEgdGVtcGxhdGUuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBASW5wdXQoKSBwb3BvdmVyQ29udGV4dDogYW55O1xyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIGEgcG9wb3Zlci5cclxuICAgKi9cclxuICBASW5wdXQoKSBwb3BvdmVyVGl0bGU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdhdXRvJztcclxuICAvKipcclxuICAgKiBDbG9zZSBwb3BvdmVyIG9uIG91dHNpZGUgY2xpY2tcclxuICAgKi9cclxuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcclxuICAgKiBldmVudCBuYW1lcy5cclxuICAgKi9cclxuICBASW5wdXQoKSB0cmlnZ2Vyczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXHJcbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENzcyBjbGFzcyBmb3IgcG9wb3ZlciBjb250YWluZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXJDbGFzcyA9ICcnO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBwb3BvdmVyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9wb3BvdmVyLmlzU2hvd247XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHBvcG92ZXIgaXMgc2hvd25cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIGhpZGRlblxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgcHJpdmF0ZSBfcG9wb3ZlcjogQ29tcG9uZW50TG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2lzSW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX2NvbmZpZzogUG9wb3ZlckNvbmZpZyxcclxuICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wb3BvdmVyID0gY2lzXHJcbiAgICAgIC5jcmVhdGVMb2FkZXI8UG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudD4oXHJcbiAgICAgICAgX2VsZW1lbnRSZWYsXHJcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgX3JlbmRlcmVyXHJcbiAgICAgIClcclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFBvcG92ZXJDb25maWcsIHVzZVZhbHVlOiBfY29uZmlnfSk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xyXG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fcG9wb3Zlci5vblNob3duO1xyXG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX3BvcG92ZXIub25IaWRkZW47XHJcblxyXG4gICAgLy8gZml4OiBubyBmb2N1cyBvbiBidXR0b24gb24gTWFjIE9TICMxNzk1XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSBwb3BvdmVyLlxyXG4gICAqL1xyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fcG9wb3Zlci5pc1Nob3duIHx8ICF0aGlzLnBvcG92ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BvcG92ZXJcclxuICAgICAgLmF0dGFjaChQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXHJcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxyXG4gICAgICAuc2hvdyh7XHJcbiAgICAgICAgY29udGVudDogdGhpcy5wb3BvdmVyLFxyXG4gICAgICAgIGNvbnRleHQ6IHRoaXMucG9wb3ZlckNvbnRleHQsXHJcbiAgICAgICAgcGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudCxcclxuICAgICAgICB0aXRsZTogdGhpcy5wb3BvdmVyVGl0bGUsXHJcbiAgICAgICAgY29udGFpbmVyQ2xhc3M6IHRoaXMuY29udGFpbmVyQ2xhc3NcclxuICAgICAgfSk7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci5cclxuICAgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMuX3BvcG92ZXIuaGlkZSgpO1xyXG4gICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlcyBhbiBlbGVtZW50w6LCgMKZcyBwb3BvdmVyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSBwb3BvdmVyLlxyXG4gICAqL1xyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICByZXR1cm4gdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zaG93KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIGZpeDogc2VlbXMgdGhlcmUgYXJlIGFuIGlzc3VlIHdpdGggYHJvdXRlckxpbmtBY3RpdmVgXHJcbiAgICAvLyB3aGljaCByZXN1bHQgaW4gZHVwbGljYXRlZCBjYWxsIG5nT25Jbml0IHdpdGhvdXQgY2FsbCB0byBuZ09uRGVzdHJveVxyXG4gICAgLy8gcmVhZCBtb3JlOiBodHRwczovL2dpdGh1Yi5jb20vdmFsb3Itc29mdHdhcmUvbmd4LWJvb3RzdHJhcC9pc3N1ZXMvMTg4NVxyXG4gICAgaWYgKHRoaXMuX2lzSW5pdGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2lzSW5pdGVkID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3BvcG92ZXIubGlzdGVuKHtcclxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXHJcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXHJcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9wb3Zlci5kaXNwb3NlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcclxuaW1wb3J0IHsgUG9wb3ZlckRpcmVjdGl2ZSB9IGZyb20gJy4vcG9wb3Zlci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtQb3BvdmVyRGlyZWN0aXZlLCBQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUG9wb3ZlckRpcmVjdGl2ZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFBvcG92ZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1BvcG92ZXJDb25maWcsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O3lCQWFjLEtBQUs7Ozs7O3dCQUtOLE9BQU87NEJBRUgsS0FBSzs7O2dCQVpyQixVQUFVOzt3QkFSWDs7Ozs7OztBQ0FBO0lBaURFLG1DQUFZLE1BQXFCO1FBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQzdCO0lB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