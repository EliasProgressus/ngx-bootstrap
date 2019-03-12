/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
var /** @type {?} */ id = 0;
var TooltipDirective = /** @class */ (function () {
    function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /**
         * Fired when tooltip content changes
         */
        /* tslint:disable-next-line:no-any */
        this.tooltipChange = new EventEmitter();
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
        this.tooltipStateChanged = new EventEmitter();
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
         */
        function () {
            return this._tooltip.isShown;
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
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        set: /**
         * @deprecated - please use `tooltip` instead
         * @param {?} value
         * @return {?}
         */
        /* tslint:disable-next-line:no-any */
        function (value) {
            warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
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
         */
        function (value) {
            warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        set: /**
         * @deprecated - please use `isOpen` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled;
        },
        set: /**
         * @deprecated - please use `isDisabled` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = !value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: /**
         * @return {?}
         */
        function () {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        set: /**
         * @deprecated - please use `container="body"` instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
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
         */
        function (value) {
            warnOnce('tooltipClass deprecated');
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
            warnOnce('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
        set: /**
         * @deprecated
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
            this.delay = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        get: /**
         * @deprecated -  please use `triggers` instead
         * @return {?}
         */
        function () {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
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
            var /** @type {?} */ _timer_1 = timer(this.delay).subscribe(function () {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                var /** @type {?} */ triggers = parseTriggers(this.triggers);
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
        { type: Directive, args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] }
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
        { type: TooltipConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: PositioningService, },
    ]; };
    TooltipDirective.propDecorators = {
        "tooltip": [{ type: Input },],
        "tooltipChange": [{ type: Output },],
        "placement": [{ type: Input },],
        "triggers": [{ type: Input },],
        "container": [{ type: Input },],
        "containerClass": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "delay": [{ type: Input },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "htmlContent": [{ type: Input, args: ['tooltipHtml',] },],
        "_placement": [{ type: Input, args: ['tooltipPlacement',] },],
        "_isOpen": [{ type: Input, args: ['tooltipIsOpen',] },],
        "_enable": [{ type: Input, args: ['tooltipEnable',] },],
        "_appendToBody": [{ type: Input, args: ['tooltipAppendToBody',] },],
        "tooltipAnimation": [{ type: Input },],
        "_popupClass": [{ type: Input, args: ['tooltipClass',] },],
        "_tooltipContext": [{ type: Input, args: ['tooltipContext',] },],
        "_tooltipPopupDelay": [{ type: Input, args: ['tooltipPopupDelay',] },],
        "tooltipFadeDuration": [{ type: Input },],
        "_tooltipTrigger": [{ type: Input, args: ['tooltipTrigger',] },],
        "ariaDescribedby": [{ type: HostBinding, args: ['attr.aria-describedby',] },],
        "tooltipStateChanged": [{ type: Output },],
    };
    tslib_1.__decorate([
        OnChange(),
        tslib_1.__metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());
export { TooltipDirective };
function TooltipDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TooltipDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TooltipDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TooltipDirective.propDecorators;
    /** @type {?} */
    TooltipDirective.prototype.tooltipId;
    /**
     * Content to be displayed as tooltip.
     * @type {?}
     */
    TooltipDirective.prototype.tooltip;
    /**
     * Fired when tooltip content changes
     * @type {?}
     */
    TooltipDirective.prototype.tooltipChange;
    /**
     * Placement of a tooltip. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    TooltipDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    TooltipDirective.prototype.triggers;
    /**
     * A selector specifying the element the tooltip should be appended to.
     * Currently only supports "body".
     * @type {?}
     */
    TooltipDirective.prototype.container;
    /**
     * Css class for tooltip container
     * @type {?}
     */
    TooltipDirective.prototype.containerClass;
    /**
     * Allows to disable tooltip
     * @type {?}
     */
    TooltipDirective.prototype.isDisabled;
    /**
     * Delay before showing the tooltip
     * @type {?}
     */
    TooltipDirective.prototype.delay;
    /**
     * Emits an event when the tooltip is shown
     * @type {?}
     */
    TooltipDirective.prototype.onShown;
    /**
     * Emits an event when the tooltip is hidden
     * @type {?}
     */
    TooltipDirective.prototype.onHidden;
    /**
     * @deprecated - removed, will be added to configuration
     * @type {?}
     */
    TooltipDirective.prototype.tooltipAnimation;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipFadeDuration;
    /** @type {?} */
    TooltipDirective.prototype.ariaDescribedby;
    /**
     * @deprecated
     * @type {?}
     */
    TooltipDirective.prototype.tooltipStateChanged;
    /** @type {?} */
    TooltipDirective.prototype._delayTimeoutId;
    /** @type {?} */
    TooltipDirective.prototype._tooltipCancelShowFn;
    /** @type {?} */
    TooltipDirective.prototype._tooltip;
    /** @type {?} */
    TooltipDirective.prototype._elementRef;
    /** @type {?} */
    TooltipDirective.prototype._renderer;
    /** @type {?} */
    TooltipDirective.prototype._positionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvIiwic291cmNlcyI6WyJ0b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QixxQkFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQXNMVCwwQkFDRSxpQkFBbUMsRUFDbkMsR0FBMkIsRUFDM0IsTUFBcUIsRUFDYixhQUNBLFdBQ0E7UUFGQSxnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUztRQUNULHFCQUFnQixHQUFoQixnQkFBZ0I7eUJBckxkLEVBQUUsRUFBRTs7Ozs7NkJBV3lDLElBQUksWUFBWSxFQUFFOzs7OzhCQW1CakQsRUFBRTs7OztnQ0FpR0EsSUFBSTs7OzttQ0F1QkQsR0FBRzsrQkFlc0IsYUFBVyxJQUFJLENBQUMsU0FBVzs7OzttQ0FJdEMsSUFBSSxZQUFZLEVBQVc7UUFldEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHO2FBQ2hCLFlBQVksQ0FDWCxJQUFJLENBQUMs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QkFPeEIsS0FBSyxTQUFDLGVBQWU7NEJBYXJCLEtBQUssU0FBQyxlQUFlO2tDQWFyQixLQUFLLFNBQUMscUJBQXFCO3FDQWlCM0IsS0FBSztnQ0FHTCxLQUFLLFNBQUMsY0FBYztvQ0FNcEIsS0FBSyxTQUFDLGdCQUFnQjt1Q0FPdEIsS0FBSyxTQUFDLG1CQUFtQjt3Q0FPekIsS0FBSztvQ0FHTCxLQUFLLFNBQUMsZ0JBQWdCO29DQVl0QixXQUFXLFNBQUMsdUJBQXVCO3dDQUduQyxNQUFNOzs7UUFwS04sUUFBUSxFQUFFOzs7MkJBbkNiOztTQThCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCBkZXByZWNhdGlvbiAqL1xyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgT25DaGFuZ2UsIHdhcm5PbmNlLCBwYXJzZVRyaWdnZXJzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuaW1wb3J0IHsgdGltZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbmxldCBpZCA9IDA7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1t0b29sdGlwXSwgW3Rvb2x0aXBIdG1sXScsXHJcbiAgZXhwb3J0QXM6ICdicy10b29sdGlwJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9vbHRpcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICB0b29sdGlwSWQgPSBpZCsrO1xyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgQE9uQ2hhbmdlKClcclxuICBASW5wdXQoKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICB0b29sdGlwOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiBGaXJlZCB3aGVuIHRvb2x0aXAgY29udGVudCBjaGFuZ2VzICovXHJcbiAgQE91dHB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHRvb2x0aXBDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogUGxhY2VtZW50IG9mIGEgdG9vbHRpcC4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxyXG4gICAqIGV2ZW50IG5hbWVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRyaWdnZXJzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cclxuICAgKiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBDc3MgY2xhc3MgZm9yIHRvb2x0aXAgY29udGFpbmVyXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyQ2xhc3MgPSAnJztcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSB0b29sdGlwIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl90b29sdGlwLmlzU2hvd247XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0byBkaXNhYmxlIHRvb2x0aXBcclxuICAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBEZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRlbGF5OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgc2hvd25cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIG9uU2hvd246IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIHRvb2x0aXAgaXMgaGlkZGVuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBIdG1sJylcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgc2V0IGh0bWxDb250ZW50KHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcEh0bWwgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRvb2x0aXBgIGluc3RlYWQnKTtcclxuICAgIHRoaXMudG9vbHRpcCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgcGxhY2VtZW50YCBpbnN0ZWFkICovXHJcbiAgQElucHV0KCd0b29sdGlwUGxhY2VtZW50JylcclxuICBzZXQgX3BsYWNlbWVudCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcFBsYWNlbWVudCB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgcGxhY2VtZW50YCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLnBsYWNlbWVudCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkICovXHJcbiAgQElucHV0KCd0b29sdGlwSXNPcGVuJylcclxuICBzZXQgX2lzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xyXG4gICAgdGhpcy5pc09wZW4gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBfaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBJc09wZW4gd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGlzT3BlbmAgaW5zdGVhZCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmlzT3BlbjtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRGlzYWJsZWRgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBFbmFibGUnKVxyXG4gIHNldCBfZW5hYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gIXZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9lbmFibGUoKTogYm9vbGVhbiB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcEVuYWJsZSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBBcHBlbmRUb0JvZHknKVxyXG4gIHNldCBfYXBwZW5kVG9Cb2R5KHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuT25jZShcclxuICAgICAgJ3Rvb2x0aXBBcHBlbmRUb0JvZHkgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCdcclxuICAgICk7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IHZhbHVlID8gJ2JvZHknIDogdGhpcy5jb250YWluZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgX2FwcGVuZFRvQm9keSgpOiBib29sZWFuIHtcclxuICAgIHdhcm5PbmNlKFxyXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXIgPT09ICdib2R5JztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHJlbW92ZWQsIHdpbGwgYmUgYWRkZWQgdG8gY29uZmlndXJhdGlvbiAqL1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBBbmltYXRpb24gPSB0cnVlO1xyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSB3aWxsIHJlcGxhY2VkIHdpdGggY3VzdG9tQ2xhc3MgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBDbGFzcycpXHJcbiAgc2V0IF9wb3B1cENsYXNzKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwQ2xhc3MgZGVwcmVjYXRlZCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcENvbnRleHQnKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBzZXQgX3Rvb2x0aXBDb250ZXh0KHZhbHVlOiBhbnkpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwQ29udGV4dCBkZXByZWNhdGVkJyk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBQb3B1cERlbGF5JylcclxuICBzZXQgX3Rvb2x0aXBQb3B1cERlbGF5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwUG9wdXBEZWxheSBpcyBkZXByZWNhdGVkLCB1c2UgYGRlbGF5YCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLmRlbGF5ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBASW5wdXQoKSB0b29sdGlwRmFkZUR1cmF0aW9uID0gMTUwO1xyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSAgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBUcmlnZ2VyJylcclxuICBnZXQgX3Rvb2x0aXBUcmlnZ2VyKCk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VycztcclxuICB9XHJcblxyXG4gIHNldCBfdG9vbHRpcFRyaWdnZXIodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcFRyaWdnZXIgd2FzIGRlcHJlY2F0ZWQsIHBsZWFzZSB1c2UgYHRyaWdnZXJzYCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLnRyaWdnZXJzID0gKHZhbHVlIHx8ICcnKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBhcmlhRGVzY3JpYmVkYnkgPSBgdG9vbHRpcC0ke3RoaXMudG9vbHRpcElkfWA7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHRvb2x0aXBTdGF0ZUNoYW5nZWQ6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgcHJvdGVjdGVkIF9kZWxheVRpbWVvdXRJZDogbnVtYmVyIHwgYW55O1xyXG4gIHByb3RlY3RlZCBfdG9vbHRpcENhbmNlbFNob3dGbjogRnVuY3Rpb247XHJcblxyXG4gIHByaXZhdGUgX3Rvb2x0aXA6IENvbXBvbmVudExvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgY29uZmlnOiBUb29sdGlwQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxyXG4gICkge1xyXG5cclxuICAgIHRoaXMuX3Rvb2x0aXAgPSBjaXNcclxuICAgICAgLmNyZWF0ZUxvYWRlcjxUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgICB0aGlzLl9lbGVtZW50UmVmLFxyXG4gICAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyXHJcbiAgICAgIClcclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IFRvb2x0aXBDb25maWcsIHVzZVZhbHVlOiBjb25maWd9KTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl90b29sdGlwLm9uU2hvd247XHJcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fdG9vbHRpcC5vbkhpZGRlbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xyXG4gICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICBmbGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl90b29sdGlwLmxpc3Rlbih7XHJcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxyXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxyXG4gICAgfSk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgICB0aGlzLnRvb2x0aXBDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTigJlzIHRvb2x0aXAuIFRoaXMgaXMgY29uc2lkZXJlZCBhIOKAnG1hbnVhbOKAnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIHRvb2x0aXAuXHJcbiAgICovXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5pc09wZW4gfHxcclxuICAgICAgdGhpcy5pc0Rpc2FibGVkIHx8XHJcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkIHx8XHJcbiAgICAgICF0aGlzLnRvb2x0aXBcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd1Rvb2x0aXAgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9kZWxheVRpbWVvdXRJZCkge1xyXG4gICAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl90b29sdGlwXHJcbiAgICAgICAgLmF0dGFjaChUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcclxuICAgICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcclxuICAgICAgICAuc2hvdyh7XHJcbiAgICAgICAgICBjb250ZW50OiB0aGlzLnRvb2x0aXAsXHJcbiAgICAgICAgICBwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50LFxyXG4gICAgICAgICAgY29udGFpbmVyQ2xhc3M6IHRoaXMuY29udGFpbmVyQ2xhc3MsXHJcbiAgICAgICAgICBpZDogdGhpcy5hcmlhRGVzY3JpYmVkYnlcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcgPSAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKSB7XHJcbiAgICAgICAgdGhpcy5fdG9vbHRpcENhbmNlbFNob3dGbigpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLmRlbGF5KSB7XHJcbiAgICAgIGNvbnN0IF90aW1lciA9IHRpbWVyKHRoaXMuZGVsYXkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc2hvd1Rvb2x0aXAoKTtcclxuICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy50cmlnZ2Vycykge1xyXG4gICAgICAgIGNvbnN0IHRyaWdnZXJzID0gcGFyc2VUcmlnZ2Vycyh0aGlzLnRyaWdnZXJzKTtcclxuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuID0gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJpZ2dlcnNbMF0uY2xvc2UsICgpID0+IHtcclxuICAgICAgICAgIF90aW1lci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgY2FuY2VsRGVsYXllZFRvb2x0aXBTaG93aW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNob3dUb29sdGlwKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgdG9vbHRpcC5cclxuICAgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9kZWxheVRpbWVvdXRJZCk7XHJcbiAgICAgIHRoaXMuX2RlbGF5VGltZW91dElkID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fdG9vbHRpcC5pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl90b29sdGlwLmluc3RhbmNlLmNsYXNzTWFwLmluID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fdG9vbHRpcC5oaWRlKCk7XHJcbiAgICB9LCB0aGlzLnRvb2x0aXBGYWRlRHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl90b29sdGlwLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIl19