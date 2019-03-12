(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/popover', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].popover = {}),global.ng.core,global.utils,global.componentLoader,global.positioning,global.ng.common));
}(this, (function (exports,core,utils,componentLoader,positioning,common) { 'use strict';

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
    var PopoverConfig = (function () {
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
            { type: core.Injectable }
        ];
        return PopoverConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PopoverContainerComponent = (function () {
        function PopoverContainerComponent(config) {
            Object.assign(this, config);
        }
        Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        PopoverContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'popover-container',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
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
        PopoverContainerComponent.ctorParameters = function () {
            return [
                { type: PopoverConfig, },
            ];
        };
        PopoverContainerComponent.propDecorators = {
            "placement": [{ type: core.Input },],
            "title": [{ type: core.Input },],
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
    var PopoverDirective = (function () {
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
                    catch (err) {
                        return;
                    }
                });
            }
        }
        Object.defineProperty(PopoverDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the popover is currently being shown
             * @return {?}
             */ function () {
                return this._popover.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Directive, args: [{ selector: '[popover]', exportAs: 'bs-popover' },] }
        ];
        /** @nocollapse */
        PopoverDirective.ctorParameters = function () {
            return [
                { type: PopoverConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: positioning.PositioningService, },
            ];
        };
        PopoverDirective.propDecorators = {
            "popover": [{ type: core.Input },],
            "popoverContext": [{ type: core.Input },],
            "popoverTitle": [{ type: core.Input },],
            "placement": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "containerClass": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
        };
        return PopoverDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var PopoverModule = (function () {
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
                    providers: [PopoverConfig, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        PopoverModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.PopoverDirective = PopoverDirective;
    exports.PopoverModule = PopoverModule;
    exports.PopoverConfig = PopoverConfig;
    exports.PopoverContainerComponent = PopoverContainerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wb3BvdmVyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wb3BvdmVyL3BvcG92ZXIuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3BvcG92ZXIvcG9wb3Zlci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvcG9wb3Zlci9wb3BvdmVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBzZXJ2aWNlIGZvciB0aGUgUG9wb3ZlciBkaXJlY3RpdmUuXHJcbiAqIFlvdSBjYW4gaW5qZWN0IHRoaXMgc2VydmljZSwgdHlwaWNhbGx5IGluIHlvdXIgcm9vdCBjb21wb25lbnQsIGFuZCBjdXN0b21pemVcclxuICogdGhlIHZhbHVlcyBvZiBpdHMgcHJvcGVydGllcyBpbiBvcmRlciB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzIGZvciBhbGwgdGhlXHJcbiAqIHBvcG92ZXJzIHVzZWQgaW4gdGhlIGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbmZpZyB7XHJcbiAgLyoqXHJcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIiwgXCJhdXRvXCJcclxuICAgKi9cclxuICBwbGFjZW1lbnQgPSAndG9wJztcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcclxuICAgKiBldmVudCBuYW1lcy5cclxuICAgKi9cclxuICB0cmlnZ2VycyA9ICdjbGljayc7XHJcblxyXG4gIG91dHNpZGVDbGljayA9IGZhbHNlO1xyXG4gIC8qKlxyXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgcG9wb3ZlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXHJcbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXHJcbiAgICovXHJcbiAgY29udGFpbmVyOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbmZpZyB9IGZyb20gJy4vcG9wb3Zlci5jb25maWcnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwb3BvdmVyLWNvbnRhaW5lcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzc10nOlxyXG4gICAgICAnXCJwb3BvdmVyIGluIHBvcG92ZXItXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIFwiYnMtcG9wb3Zlci1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBjb250YWluZXJDbGFzcycsXHJcbiAgICAnW2NsYXNzLnNob3ddJzogJyFpc0JzMycsXHJcbiAgICAnW2NsYXNzLmJzM10nOiAnaXNCczMnLFxyXG4gICAgcm9sZTogJ3Rvb2x0aXAnLFxyXG4gICAgc3R5bGU6ICdkaXNwbGF5OmJsb2NrOydcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QuYnMzLnBvcG92ZXItdG9wIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5wb3BvdmVyLnRvcD4uYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5wb3BvdmVyLnRvcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5wb3BvdmVyLmJvdHRvbT4uYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTRweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy1wb3BvdmVyLWxlZnQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG4gICAgfVxyXG4gICAgOmhvc3QuYnMzLmJzLXBvcG92ZXItcmlnaHQgLmFycm93LCA6aG9zdC5iczMuYnMtcG9wb3Zlci1sZWZ0IC5hcnJvd3tcclxuICAgICAgbWFyZ2luOiAuM3JlbSAwO1xyXG4gICAgfVxyXG4gICAgYFxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BvcG92ZXItY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcclxuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xyXG5cclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUG9wb3ZlckNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG4vKipcclxuICogQSBsaWdodHdlaWdodCwgZXh0ZW5zaWJsZSBkaXJlY3RpdmUgZm9yIGZhbmN5IHBvcG92ZXIgY3JlYXRpb24uXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjogJ1twb3BvdmVyXScsIGV4cG9ydEFzOiAnYnMtcG9wb3Zlcid9KVxyXG5leHBvcnQgY2xhc3MgUG9wb3ZlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICAvKipcclxuICAgKiBDb250ZW50IHRvIGJlIGRpc3BsYXllZCBhcyBwb3BvdmVyLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQElucHV0KCkgcG9wb3Zlcjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKipcclxuICAgKiBDb250ZXh0IHRvIGJlIHVzZWQgaWYgcG9wb3ZlciBpcyBhIHRlbXBsYXRlLlxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgQElucHV0KCkgcG9wb3ZlckNvbnRleHQ6IGFueTtcclxuICAvKipcclxuICAgKiBUaXRsZSBvZiBhIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgcG9wb3ZlclRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogUGxhY2VtZW50IG9mIGEgcG9wb3Zlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgfCAnYXV0byc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgcG9wb3ZlciBvbiBvdXRzaWRlIGNsaWNrXHJcbiAgICovXHJcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHBvcG92ZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDc3MgY2xhc3MgZm9yIHBvcG92ZXIgY29udGFpbmVyXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgcG9wb3ZlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcG9wb3Zlci5pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBwb3BvdmVyIGlzIHNob3duXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgcG9wb3ZlciBpcyBoaWRkZW5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIHByaXZhdGUgX3BvcG92ZXI6IENvbXBvbmVudExvYWRlcjxQb3BvdmVyQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9pc0luaXRlZCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9jb25maWc6IFBvcG92ZXJDb25maWcsXHJcbiAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5fcG9wb3ZlciA9IGNpc1xyXG4gICAgICAuY3JlYXRlTG9hZGVyPFBvcG92ZXJDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICAgIF9lbGVtZW50UmVmLFxyXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIF9yZW5kZXJlclxyXG4gICAgICApXHJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBQb3BvdmVyQ29uZmlnLCB1c2VWYWx1ZTogX2NvbmZpZ30pO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcclxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3BvcG92ZXIub25TaG93bjtcclxuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9wb3BvdmVyLm9uSGlkZGVuO1xyXG5cclxuICAgIC8vIGZpeDogbm8gZm9jdXMgb24gYnV0dG9uIG9uIE1hYyBPUyAjMTc5NVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIF9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci5cclxuICAgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3BvcG92ZXIuaXNTaG93biB8fCAhdGhpcy5wb3BvdmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9wb3BvdmVyXHJcbiAgICAgIC5hdHRhY2goUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudClcclxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxyXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcclxuICAgICAgLnNob3coe1xyXG4gICAgICAgIGNvbnRlbnQ6IHRoaXMucG9wb3ZlcixcclxuICAgICAgICBjb250ZXh0OiB0aGlzLnBvcG92ZXJDb250ZXh0LFxyXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucG9wb3ZlclRpdGxlLFxyXG4gICAgICAgIGNvbnRhaW5lckNsYXNzOiB0aGlzLmNvbnRhaW5lckNsYXNzXHJcbiAgICAgIH0pO1xyXG4gICAgdGhpcy5pc09wZW4gPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTDosKAwplzIHBvcG92ZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLl9wb3BvdmVyLmhpZGUoKTtcclxuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgcG9wb3Zlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgcG9wb3Zlci5cclxuICAgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyBmaXg6IHNlZW1zIHRoZXJlIGFyZSBhbiBpc3N1ZSB3aXRoIGByb3V0ZXJMaW5rQWN0aXZlYFxyXG4gICAgLy8gd2hpY2ggcmVzdWx0IGluIGR1cGxpY2F0ZWQgY2FsbCBuZ09uSW5pdCB3aXRob3V0IGNhbGwgdG8gbmdPbkRlc3Ryb3lcclxuICAgIC8vIHJlYWQgbW9yZTogaHR0cHM6Ly9naXRodWIuY29tL3ZhbG9yLXNvZnR3YXJlL25neC1ib290c3RyYXAvaXNzdWVzLzE4ODVcclxuICAgIGlmICh0aGlzLl9pc0luaXRlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9pc0luaXRlZCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xyXG4gICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICBmbGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9wb3BvdmVyLmxpc3Rlbih7XHJcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxyXG4gICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMub3V0c2lkZUNsaWNrLFxyXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3BvcG92ZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5pbXBvcnQgeyBQb3BvdmVyQ29uZmlnIH0gZnJvbSAnLi9wb3BvdmVyLmNvbmZpZyc7XHJcbmltcG9ydCB7IFBvcG92ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3BvcG92ZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUG9wb3ZlckRpcmVjdGl2ZSwgUG9wb3ZlckNvbnRhaW5lckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1BvcG92ZXJEaXJlY3RpdmVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1BvcG92ZXJDb250YWluZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQb3BvdmVyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBQb3BvdmVyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtQb3BvdmVyQ29uZmlnLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsImlzQnMzIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJJbnB1dCIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tcG9uZW50TG9hZGVyRmFjdG9yeSIsIlBvc2l0aW9uaW5nU2VydmljZSIsIk91dHB1dCIsIk5n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