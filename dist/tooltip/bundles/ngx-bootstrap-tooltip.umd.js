(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning'), require('rxjs'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tooltip', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning', 'rxjs', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tooltip = {}),global.ng.core,global.utils,global.componentLoader,global.positioning,global.rxjs,global.ng.common));
}(this, (function (exports,core,utils,componentLoader,positioning,rxjs,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Default values provider for tooltip
     */
    var TooltipConfig = (function () {
        function TooltipConfig() {
            /**
             * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
             */
            this.placement = 'top';
            /**
             * array of event names which triggers tooltip opening
             */
            this.triggers = 'hover focus';
            /**
             * delay before showing the tooltip
             */
            this.delay = 0;
        }
        TooltipConfig.decorators = [
            { type: core.Injectable }
        ];
        return TooltipConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TooltipContainerComponent = (function () {
        function TooltipContainerComponent(config) {
            Object.assign(this, config);
        }
        Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipContainerComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.classMap = { in: false, fade: false };
                this.classMap[this.placement] = true;
                this.classMap["tooltip-" + this.placement] = true;
                this.classMap["in"] = true;
                if (this.animation) {
                    this.classMap["fade"] = true;
                }
                if (this.containerClass) {
                    this.classMap[this.containerClass] = true;
                }
            };
        TooltipContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-tooltip-container',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        // tslint:disable-next-line
                        host: {
                            '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                            '[class.show]': '!isBs3',
                            '[class.bs3]': 'isBs3',
                            '[attr.id]': 'this.id',
                            role: 'tooltip'
                        },
                        template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    ",
                        styles: ["\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TooltipContainerComponent.ctorParameters = function () {
            return [
                { type: TooltipConfig, },
            ];
        };
        return TooltipContainerComponent;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ id = 0;
    var TooltipDirective = (function () {
        function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._positionService = _positionService;
            this.tooltipId = id++;
            /**
             * Fired when tooltip content changes
             */
            /* tslint:disable-next-line:no-any */
            this.tooltipChange = new core.EventEmitter();
            /**
             * Css class for tooltip container
             */
            this.containerClass = '';
            /**
             * @deprecated - removed, will be added to configuration
             */
            this.tooltipAnimation = true;
            /**
             * @deprecated
             */
            this.tooltipFadeDuration = 150;
            this.ariaDescribedby = "tooltip-" + this.tooltipId;
            /**
             * @deprecated
             */
            this.tooltipStateChanged = new core.EventEmitter();
            this._tooltip = cis
                .createLoader(this._elementRef, _viewContainerRef, this._renderer)
                .provide({ provide: TooltipConfig, useValue: config });
            Object.assign(this, config);
            this.onShown = this._tooltip.onShown;
            this.onHidden = this._tooltip.onHidden;
        }
        Object.defineProperty(TooltipDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the tooltip is currently being shown
             * @return {?}
             */ function () {
                return this._tooltip.isShown;
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
        Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
            set: /**
             * @deprecated - please use `tooltip` instead
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                utils.warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
                this.tooltip = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_placement", {
            set: /**
             * @deprecated - please use `placement` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
                this.placement = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                return this.isOpen;
            },
            set: /**
             * @deprecated - please use `isOpen` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                this.isOpen = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_enable", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                return this.isDisabled;
            },
            set: /**
             * @deprecated - please use `isDisabled` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                this.isDisabled = !value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
            get: /**
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                return this.container === 'body';
            },
            set: /**
             * @deprecated - please use `container="body"` instead
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                this.container = value ? 'body' : this.container;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
            set: /**
             * @deprecated - will replaced with customClass
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipClass deprecated');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
            set: /**
             * @deprecated - removed
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                utils.warnOnce('tooltipContext deprecated');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
            set: /**
             * @deprecated
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
                this.delay = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
            get: /**
             * @deprecated -  please use `triggers` instead
             * @return {?}
             */ function () {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                return this.triggers;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                this.triggers = (value || '').toString();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._positionService.setOptions({
                    modifiers: {
                        flip: {
                            enabled: true
                        }
                    }
                });
                this._tooltip.listen({
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                /* tslint:disable-next-line:no-any */
                this.tooltipChange.subscribe(function (value) {
                    if (!value) {
                        _this._tooltip.hide();
                    }
                });
            };
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.toggle = /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.show = /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isOpen ||
                    this.isDisabled ||
                    this._delayTimeoutId ||
                    !this.tooltip) {
                    return;
                }
                var /** @type {?} */ showTooltip = function () {
                    if (_this._delayTimeoutId) {
                        _this._delayTimeoutId = undefined;
                    }
                    _this._tooltip
                        .attach(TooltipContainerComponent)
                        .to(_this.container)
                        .position({ attachment: _this.placement })
                        .show({
                        content: _this.tooltip,
                        placement: _this.placement,
                        containerClass: _this.containerClass,
                        id: _this.ariaDescribedby
                    });
                };
                var /** @type {?} */ cancelDelayedTooltipShowing = function () {
                    if (_this._tooltipCancelShowFn) {
                        _this._tooltipCancelShowFn();
                    }
                };
                if (this.delay) {
                    var /** @type {?} */ _timer_1 = rxjs.timer(this.delay).subscribe(function () {
                        showTooltip();
                        cancelDelayedTooltipShowing();
                    });
                    if (this.triggers) {
                        var /** @type {?} */ triggers = utils.parseTriggers(this.triggers);
                        this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, function () {
                            _timer_1.unsubscribe();
                            cancelDelayedTooltipShowing();
                        });
                    }
                }
                else {
                    showTooltip();
                }
            };
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
        TooltipDirective.prototype.hide = /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._delayTimeoutId) {
                    clearTimeout(this._delayTimeoutId);
                    this._delayTimeoutId = undefined;
                }
                if (!this._tooltip.isShown) {
                    return;
                }
                this._tooltip.instance.classMap["in"] = false;
                setTimeout(function () {
                    _this._tooltip.hide();
                }, this.tooltipFadeDuration);
            };
        /**
         * @return {?}
         */
        TooltipDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._tooltip.dispose();
            };
        TooltipDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[tooltip], [tooltipHtml]',
                        exportAs: 'bs-tooltip'
                    },] }
        ];
        /** @nocollapse */
        TooltipDirective.ctorParameters = function () {
            return [
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
                { type: TooltipConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: positioning.PositioningService, },
            ];
        };
        TooltipDirective.propDecorators = {
            "tooltip": [{ type: core.Input },],
            "tooltipChange": [{ type: core.Output },],
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "containerClass": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "delay": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "htmlContent": [{ type: core.Input, args: ['tooltipHtml',] },],
            "_placement": [{ type: core.Input, args: ['tooltipPlacement',] },],
            "_isOpen": [{ type: core.Input, args: ['tooltipIsOpen',] },],
            "_enable": [{ type: core.Input, args: ['tooltipEnable',] },],
            "_appendToBody": [{ type: core.Input, args: ['tooltipAppendToBody',] },],
            "tooltipAnimation": [{ type: core.Input },],
            "_popupClass": [{ type: core.Input, args: ['tooltipClass',] },],
            "_tooltipContext": [{ type: core.Input, args: ['tooltipContext',] },],
            "_tooltipPopupDelay": [{ type: core.Input, args: ['tooltipPopupDelay',] },],
            "tooltipFadeDuration": [{ type: core.Input },],
            "_tooltipTrigger": [{ type: core.Input, args: ['tooltipTrigger',] },],
            "ariaDescribedby": [{ type: core.HostBinding, args: ['attr.aria-describedby',] },],
            "tooltipStateChanged": [{ type: core.Output },],
        };
        __decorate([
            utils.OnChange(),
            __metadata("design:type", Object)
        ], TooltipDirective.prototype, "tooltip", void 0);
        return TooltipDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TooltipModule = (function () {
        function TooltipModule() {
        }
        /**
         * @return {?}
         */
        TooltipModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TooltipModule,
                    providers: [TooltipConfig, componentLoader.ComponentLoaderFactory, positioning.PositioningService]
                };
            };
        TooltipModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TooltipDirective, TooltipContainerComponent],
                        exports: [TooltipDirective],
                        entryComponents: [TooltipContainerComponent]
                    },] }
        ];
        return TooltipModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TooltipContainerComponent = TooltipContainerComponent;
    exports.TooltipDirective = TooltipDirective;
    exports.TooltipModule = TooltipModule;
    exports.TooltipConfig = TooltipConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10b29sdGlwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0b29sdGlwICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb25maWcge1xyXG4gIC8qKiB0b29sdGlwIHBsYWNlbWVudCwgc3VwcG9ydGVkIHBvc2l0aW9uczogJ3RvcCcsICdib3R0b20nLCAnbGVmdCcsICdyaWdodCcgKi9cclxuICBwbGFjZW1lbnQgPSAndG9wJztcclxuICAvKiogYXJyYXkgb2YgZXZlbnQgbmFtZXMgd2hpY2ggdHJpZ2dlcnMgdG9vbHRpcCBvcGVuaW5nICovXHJcbiAgdHJpZ2dlcnMgPSAnaG92ZXIgZm9jdXMnO1xyXG4gIC8qKiBhIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIiAqL1xyXG4gIGNvbnRhaW5lcjogc3RyaW5nO1xyXG4gIC8qKiBkZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcCAqL1xyXG4gIGRlbGF5ID0gMDtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtdG9vbHRpcC1jb250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3NdJzpcclxuICAgICAgJ1widG9vbHRpcCBpbiB0b29sdGlwLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBcImJzLXRvb2x0aXAtXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIHBsYWNlbWVudCArIFwiIFwiICsgY29udGFpbmVyQ2xhc3MnLFxyXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchaXNCczMnLFxyXG4gICAgJ1tjbGFzcy5iczNdJzogJ2lzQnMzJyxcclxuICAgICdbYXR0ci5pZF0nOiAndGhpcy5pZCcsXHJcbiAgICByb2xlOiAndG9vbHRpcCdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QudG9vbHRpcCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy50b29sdGlwLnRvcD4uYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy50b29sdGlwLmJvdHRvbSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy10b29sdGlwLWxlZnQsIDpob3N0LmJzMy5icy10b29sdGlwLXJpZ2h0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy10b29sdGlwLXJpZ2h0IC5hcnJvdywgOmhvc3QuYnMzLmJzLXRvb2x0aXAtbGVmdCAuYXJyb3cge1xyXG4gICAgICBtYXJnaW46IC4zcmVtIDA7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93IGFycm93XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBjbGFzc01hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XHJcbiAgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcclxuICBhbmltYXRpb246IGJvb2xlYW47XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IFRvb2x0aXBDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xhc3NNYXAgPSB7IGluOiBmYWxzZSwgZmFkZTogZmFsc2UgfTtcclxuICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5wbGFjZW1lbnRdID0gdHJ1ZTtcclxuICAgIHRoaXMuY2xhc3NNYXBbYHRvb2x0aXAtJHt0aGlzLnBsYWNlbWVudH1gXSA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jbGFzc01hcC5pbiA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5jbGFzc01hcC5mYWRlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5jb250YWluZXJDbGFzcykge1xyXG4gICAgICB0aGlzLmNsYXNzTWFwW3RoaXMuY29udGFpbmVyQ2xhc3NdID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCBkZXByZWNhdGlvbiAqL1xyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgT25DaGFuZ2UsIHdhcm5PbmNlLCBwYXJzZVRyaWdnZXJzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbmxldCBpZCA9IDA7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0b29sdGlwXSwgW3Rvb2x0aXBIdG1sXScsXHJcbiAgZXhwb3J0QXM6ICdicy10b29sdGlwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICB0b29sdGlwSWQgPSBpZCsrO1xyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgQE9uQ2hhbmdlKClcclxuICBASW5wdXQoKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB0b29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiBGaXJlZCB3aGVuIHRvb2x0aXAgY29udGVudCBjaGFuZ2VzICovXHJcbiAgQE91dHB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUGxhY2VtZW50IG9mIGEgdG9vbHRpcC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxyXG4gICAqIGV2ZW50IG5hbWVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cclxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBDc3MgY2xhc3MgZm9yIHRvb2x0aXAgY29udGFpbmVyXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0b29sdGlwIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcclxuICAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBEZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRlbGF5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgc2hvd25cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBIdG1sJylcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgc2V0IGh0bWxDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcEh0bWwgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQnKTtcclxuICAgIHRoaXMudG9vbHRpcCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgcGxhY2VtZW50YCBpbnN0ZWFkICovXHJcbiAgQElucHV0KCd0b29sdGlwUGxhY2VtZW50JylcclxuICBzZXQgX3BsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcFBsYWNlbWVudCB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgcGxhY2VtZW50YCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkICovXHJcbiAgQElucHV0KCd0b29sdGlwSXNPcGVuJylcclxuICBzZXQgX2lzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xyXG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBfaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBFbmFibGUnKVxyXG4gIHNldCBfZW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9lbmFibGUoKTogYm9vbGVhbiB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKVxyXG4gIHNldCBfYXBwZW5kVG9Cb2R5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuT25jZShcclxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcclxuICAgICk7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHZhbHVlID8gJ2JvZHknIDogdGhpcy5jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgX2FwcGVuZFRvQm9keSgpOiBib29sZWFuIHtcclxuICAgIHdhcm5PbmNlKFxyXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgPT09ICdib2R5JztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQsIHdpbGwgYmUgYWRkZWQgdG8gY29uZmlndXJhdGlvbiAqL1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBBbmltYXRpb24gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSB3aWxsIHJlcGxhY2VkIHdpdGggY3VzdG9tQ2xhc3MgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBDbGFzcycpXHJcbiAgc2V0IF9wb3B1cENsYXNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwQ2xhc3MgZGVwcmVjYXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcENvbnRleHQnKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBzZXQgX3Rvb2x0aXBDb250ZXh0KHZhbHVlOiBhbnkpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwQ29udGV4dCBkZXByZWNhdGVkJyk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBQb3B1cERlbGF5JylcclxuICBzZXQgX3Rvb2x0aXBQb3B1cERlbGF5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwUG9wdXBEZWxheSBpcyBkZXByZWNhdGVkLCB1c2UgYGRlbGF5YCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLmRlbGF5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBASW5wdXQoKSB0b29sdGlwRmFkZUR1cmF0aW9uID0gMTUwO1xyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSAgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBUcmlnZ2VyJylcclxuICBnZXQgX3Rvb2x0aXBUcmlnZ2VyKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VycztcclxuICB9XHJcblxyXG4gIHNldCBfdG9vbHRpcFRyaWdnZXIodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcFRyaWdnZXIgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLnRyaWdnZXJzID0gKHZhbHVlIHx8ICcnKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnkgPSBgdG9vbHRpcC0ke3RoaXMudG9vbHRpcElkfWA7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHRvb2x0aXBTdGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogbnVtYmVyIHwgYW55O1xyXG4gIHByb3RlY3RlZCBfdG9vbHRpcENhbmNlbFNob3dGbjogRnVuY3Rpb247XHJcblxyXG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgY29uZmlnOiBUb29sdGlwQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMuX3Rvb2x0aXAgPSBjaXNcclxuICAgICAgLmNyZWF0ZUxvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxyXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyXHJcbiAgICAgIClcclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFRvb2x0aXBDb25maWcsIHVzZVZhbHVlOiBjb25maWd9KTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl90b29sdGlwLm9uU2hvd247XHJcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xyXG4gICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICBmbGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90b29sdGlwLmxpc3Rlbih7XHJcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxyXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxyXG4gICAgfSk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc09wZW4gfHxcclxuICAgICAgdGhpcy5pc0Rpc2FibGVkIHx8XHJcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkIHx8XHJcbiAgICAgICF0aGlzLnRvb2x0aXBcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1Rvb2x0aXAgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xyXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl90b29sdGlwXHJcbiAgICAgICAgLmF0dGFjaChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcclxuICAgICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcclxuICAgICAgICAuc2hvdyh7XHJcbiAgICAgICAgICBjb250ZW50OiB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxyXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M6IHRoaXMuY29udGFpbmVyQ2xhc3MsXHJcbiAgICAgICAgICBpZDogdGhpcy5hcmlhRGVzY3JpYmVkYnlcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKSB7XHJcbiAgICAgICAgdGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRlbGF5KSB7XHJcbiAgICAgIGNvbnN0IF90aW1lciA9IHRpbWVyKHRoaXMuZGVsYXkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc2hvd1Rvb2x0aXAoKTtcclxuICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy50cmlnZ2Vycykge1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0aGlzLnRyaWdnZXJzKTtcclxuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJpZ2dlcnNbMF0uY2xvc2UsICgpID0+IHtcclxuICAgICAgICAgIF90aW1lci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dUb29sdGlwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgdG9vbHRpcC5cclxuICAgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRJZCk7XHJcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fdG9vbHRpcC5pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwLmluID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fdG9vbHRpcC5oaWRlKCk7XHJcbiAgICB9LCB0aGlzLnRvb2x0aXBGYWRlRHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbHRpcERpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVG9vbHRpcERpcmVjdGl2ZSwgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1Rvb2x0aXBEaXJlY3RpdmVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1Rvb2x0aXBDb250YWluZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUb29sdGlwTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtUb29sdGlwQ29uZmlnLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsImlzQnMzIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJFdmVudEVtaXR0ZXIiLCJ3YXJuT25jZSIsInRpbWVyIiwicGFyc2VUcmlnZ2VycyIsIkRpcmVjdGl2ZSIsIlZpZXdDb250YWluZXJSZWYiLCJDb21wb25lbnRMb2FkZXJGYWN0b3J5IiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIlBvc2l0aW9uaW5nU2VydmljZSIsIklucHV0IiwiT3V0cHV0IiwiSG9zdEJpbmRpbmciLCJPbkNoYW5nZSIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OzZCQU1jLEtBQUs7Ozs7NEJBRU4sYUFBYTs7Ozt5QkFJaEIsQ0FBQzs7O29CQVRWQSxlQUFVOzs0QkFIWDs7Ozs7OztBQ0FBO1FBd0RFLG1DQUFZLE1BQXFCO1lBQy9CLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO1FBTkQsc0JBQUksNENBQUs7OztnQkFBVDtnQkFDRSxPQUFPQyxX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