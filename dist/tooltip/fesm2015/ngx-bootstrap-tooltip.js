import { Injectable, Component, ChangeDetectionStrategy, Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewContainerRef, NgModule } from '@angular/core';
import { isBs3, OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { __decorate, __metadata } from 'tslib';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
class TooltipConfig {
    constructor() {
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
}
TooltipConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TooltipContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap["in"] = true;
        if (this.animation) {
            this.classMap["fade"] = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!isBs3',
                    '[class.bs3]': 'isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `,
                styles: [`
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `]
            }] }
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
let /** @type {?} */ id = 0;
class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} cis
     * @param {?} config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _positionService
     */
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
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
        this.ariaDescribedby = `tooltip-${this.tooltipId}`;
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
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._tooltip.isShown;
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
     * @deprecated - please use `tooltip` instead
     * @param {?} value
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set htmlContent(value) {
        warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /**
     * @deprecated - please use `placement` instead
     * @param {?} value
     * @return {?}
     */
    set _placement(value) {
        warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /**
     * @deprecated - please use `isOpen` instead
     * @param {?} value
     * @return {?}
     */
    set _isOpen(value) {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    /**
     * @return {?}
     */
    get _isOpen() {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /**
     * @deprecated - please use `isDisabled` instead
     * @param {?} value
     * @return {?}
     */
    set _enable(value) {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    /**
     * @return {?}
     */
    get _enable() {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /**
     * @deprecated - please use `container="body"` instead
     * @param {?} value
     * @return {?}
     */
    set _appendToBody(value) {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    /**
     * @return {?}
     */
    get _appendToBody() {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /**
     * @deprecated - will replaced with customClass
     * @param {?} value
     * @return {?}
     */
    set _popupClass(value) {
        warnOnce('tooltipClass deprecated');
    }
    /**
     * @deprecated - removed
     * @param {?} value
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set _tooltipContext(value) {
        warnOnce('tooltipContext deprecated');
    }
    /**
     * @deprecated
     * @param {?} value
     * @return {?}
     */
    set _tooltipPopupDelay(value) {
        warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /**
     * @deprecated -  please use `triggers` instead
     * @return {?}
     */
    get _tooltipTrigger() {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set _tooltipTrigger(value) {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: true
                }
            }
        });
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        /* tslint:disable-next-line:no-any */
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    show() {
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        const /** @type {?} */ showTooltip = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: this.ariaDescribedby
            });
        };
        const /** @type {?} */ cancelDelayedTooltipShowing = () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            const /** @type {?} */ _timer = timer(this.delay).subscribe(() => {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                const /** @type {?} */ triggers = parseTriggers(this.triggers);
                this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, triggers[0].close, () => {
                    _timer.unsubscribe();
                    cancelDelayedTooltipShowing();
                });
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap["in"] = false;
        setTimeout(() => {
            this._tooltip.hide();
        }, this.tooltipFadeDuration);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            },] }
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
    { type: TooltipConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: PositioningService, },
];
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
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TooltipModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    }
}
TooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
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

export { TooltipContainerComponent, TooltipDirective, TooltipModule, TooltipConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10b29sdGlwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvdG9vbHRpcC5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvdG9vbHRpcC90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvdG9vbHRpcC90b29sdGlwLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKiBEZWZhdWx0IHZhbHVlcyBwcm92aWRlciBmb3IgdG9vbHRpcCAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29uZmlnIHtcclxuICAvKiogdG9vbHRpcCBwbGFjZW1lbnQsIHN1cHBvcnRlZCBwb3NpdGlvbnM6ICd0b3AnLCAnYm90dG9tJywgJ2xlZnQnLCAncmlnaHQnICovXHJcbiAgcGxhY2VtZW50ID0gJ3RvcCc7XHJcbiAgLyoqIGFycmF5IG9mIGV2ZW50IG5hbWVzIHdoaWNoIHRyaWdnZXJzIHRvb2x0aXAgb3BlbmluZyAqL1xyXG4gIHRyaWdnZXJzID0gJ2hvdmVyIGZvY3VzJztcclxuICAvKiogYSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSB0b29sdGlwIHNob3VsZCBiZSBhcHBlbmRlZCB0by4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIgKi9cclxuICBjb250YWluZXI6IHN0cmluZztcclxuICAvKiogZGVsYXkgYmVmb3JlIHNob3dpbmcgdGhlIHRvb2x0aXAgKi9cclxuICBkZWxheSA9IDA7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneVxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLXRvb2x0aXAtY29udGFpbmVyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzXSc6XHJcbiAgICAgICdcInRvb2x0aXAgaW4gdG9vbHRpcC1cIiArIHBsYWNlbWVudCArIFwiIFwiICsgXCJicy10b29sdGlwLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIGNvbnRhaW5lckNsYXNzJyxcclxuICAgICdbY2xhc3Muc2hvd10nOiAnIWlzQnMzJyxcclxuICAgICdbY2xhc3MuYnMzXSc6ICdpc0JzMycsXHJcbiAgICAnW2F0dHIuaWRdJzogJ3RoaXMuaWQnLFxyXG4gICAgcm9sZTogJ3Rvb2x0aXAnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIDpob3N0LnRvb2x0aXAge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMudG9vbHRpcC50b3A+LmFycm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMudG9vbHRpcC5ib3R0b20ge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMuYnMtdG9vbHRpcC1sZWZ0LCA6aG9zdC5iczMuYnMtdG9vbHRpcC1yaWdodHtcclxuICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMuYnMtdG9vbHRpcC1yaWdodCAuYXJyb3csIDpob3N0LmJzMy5icy10b29sdGlwLWxlZnQgLmFycm93IHtcclxuICAgICAgbWFyZ2luOiAuM3JlbSAwO1xyXG4gICAgfVxyXG4gIGBcclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1hcnJvdyBhcnJvd1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRvb2x0aXAtaW5uZXJcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9kaXY+XHJcbiAgICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgY2xhc3NNYXA6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gIHBsYWNlbWVudDogc3RyaW5nO1xyXG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XHJcbiAgYW5pbWF0aW9uOiBib29sZWFuO1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIGdldCBpc0JzMygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBUb29sdGlwQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNsYXNzTWFwID0geyBpbjogZmFsc2UsIGZhZGU6IGZhbHNlIH07XHJcbiAgICB0aGlzLmNsYXNzTWFwW3RoaXMucGxhY2VtZW50XSA9IHRydWU7XHJcbiAgICB0aGlzLmNsYXNzTWFwW2B0b29sdGlwLSR7dGhpcy5wbGFjZW1lbnR9YF0gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2xhc3NNYXAuaW4gPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXAuZmFkZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29udGFpbmVyQ2xhc3MpIHtcclxuICAgICAgdGhpcy5jbGFzc01hcFt0aGlzLmNvbnRhaW5lckNsYXNzXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50IGRlcHJlY2F0aW9uICovXHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBPbkNoYW5nZSwgd2Fybk9uY2UsIHBhcnNlVHJpZ2dlcnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xyXG5cclxubGV0IGlkID0gMDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLCBbdG9vbHRpcEh0bWxdJyxcclxuICBleHBvcnRBczogJ2JzLXRvb2x0aXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHRvb2x0aXBJZCA9IGlkKys7XHJcbiAgLyoqXHJcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cclxuICAgKi9cclxuICBAT25DaGFuZ2UoKVxyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIEZpcmVkIHdoZW4gdG9vbHRpcCBjb250ZW50IGNoYW5nZXMgKi9cclxuICBAT3V0cHV0KClcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSB0b29sdGlwLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIENzcyBjbGFzcyBmb3IgdG9vbHRpcCBjb250YWluZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXJDbGFzcyA9ICcnO1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRvb2x0aXAgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXAuaXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRvIGRpc2FibGUgdG9vbHRpcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGF5IGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBoaWRkZW5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcEh0bWwnKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBzZXQgaHRtbENvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwSHRtbCB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCcpO1xyXG4gICAgdGhpcy50b29sdGlwID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKVxyXG4gIHNldCBfcGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwUGxhY2VtZW50IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQnKTtcclxuICAgIHRoaXMucGxhY2VtZW50ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBJc09wZW4nKVxyXG4gIHNldCBfaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9pc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcEVuYWJsZScpXHJcbiAgc2V0IF9lbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSAhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgX2VuYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcEFwcGVuZFRvQm9keScpXHJcbiAgc2V0IF9hcHBlbmRUb0JvZHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5PbmNlKFxyXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdmFsdWUgPyAnYm9keScgOiB0aGlzLmNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdldCBfYXBwZW5kVG9Cb2R5KCk6IGJvb2xlYW4ge1xyXG4gICAgd2Fybk9uY2UoXHJcbiAgICAgICd0b29sdGlwQXBwZW5kVG9Cb2R5IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQnXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCwgd2lsbCBiZSBhZGRlZCB0byBjb25maWd1cmF0aW9uICovXHJcbiAgQElucHV0KCkgdG9vbHRpcEFuaW1hdGlvbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHdpbGwgcmVwbGFjZWQgd2l0aCBjdXN0b21DbGFzcyAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcENsYXNzJylcclxuICBzZXQgX3BvcHVwQ2xhc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDbGFzcyBkZXByZWNhdGVkJyk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSByZW1vdmVkICovXHJcbiAgQElucHV0KCd0b29sdGlwQ29udGV4dCcpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCBfdG9vbHRpcENvbnRleHQodmFsdWU6IGFueSkge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDb250ZXh0IGRlcHJlY2F0ZWQnKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcFBvcHVwRGVsYXknKVxyXG4gIHNldCBfdG9vbHRpcFBvcHVwRGVsYXkodmFsdWU6IG51bWJlcikge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBQb3B1cERlbGF5IGlzIGRlcHJlY2F0ZWQsIHVzZSBgZGVsYXlgIGluc3RlYWQnKTtcclxuICAgIHRoaXMuZGVsYXkgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBGYWRlRHVyYXRpb24gPSAxNTA7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtICBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcFRyaWdnZXInKVxyXG4gIGdldCBfdG9vbHRpcFRyaWdnZXIoKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnRyaWdnZXJzO1xyXG4gIH1cclxuXHJcbiAgc2V0IF90b29sdGlwVHJpZ2dlcih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcclxuICAgIHRoaXMudHJpZ2dlcnMgPSAodmFsdWUgfHwgJycpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRieSA9IGB0b29sdGlwLSR7dGhpcy50b29sdGlwSWR9YDtcclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgQE91dHB1dCgpXHJcbiAgdG9vbHRpcFN0YXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkOiBudW1iZXIgfCBhbnk7XHJcbiAgcHJvdGVjdGVkIF90b29sdGlwQ2FuY2VsU2hvd0ZuOiBGdW5jdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfdG9vbHRpcDogQ29tcG9uZW50TG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICBjb25maWc6IFRvb2x0aXBDb25maWcsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5fdG9vbHRpcCA9IGNpc1xyXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYsXHJcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcclxuICAgICAgKVxyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcclxuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3Rvb2x0aXAubGlzdGVuKHtcclxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXHJcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXHJcbiAgICB9KTtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICAgIHRoaXMudG9vbHRpcENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgdG9vbHRpcC5cclxuICAgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgdG9vbHRpcC5cclxuICAgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzT3BlbiB8fFxyXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgfHxcclxuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgfHxcclxuICAgICAgIXRoaXMudG9vbHRpcFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBcclxuICAgICAgICAuYXR0YWNoKFRvb2x0aXBDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxyXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxyXG4gICAgICAgIC5zaG93KHtcclxuICAgICAgICAgIGNvbnRlbnQ6IHRoaXMudG9vbHRpcCxcclxuICAgICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXHJcbiAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzcyxcclxuICAgICAgICAgIGlkOiB0aGlzLmFyaWFEZXNjcmliZWRieVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4pIHtcclxuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZGVsYXkpIHtcclxuICAgICAgY29uc3QgX3RpbWVyID0gdGltZXIodGhpcy5kZWxheSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzaG93VG9vbHRpcCgpO1xyXG4gICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRyaWdnZXJzKSB7XHJcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRoaXMudHJpZ2dlcnMpO1xyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cmlnZ2Vyc1swXS5jbG9zZSwgKCkgPT4ge1xyXG4gICAgICAgICAgX3RpbWVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1Rvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBhbiBlbGVtZW50w6LCgMKZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSB0b29sdGlwLlxyXG4gICAqL1xyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dElkKTtcclxuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl90b29sdGlwLmlzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2UuY2xhc3NNYXAuaW4gPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcclxuICAgIH0sIHRoaXMudG9vbHRpcEZhZGVEdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sdGlwLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb25maWcgfSBmcm9tICcuL3Rvb2x0aXAuY29uZmlnJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUb29sdGlwRGlyZWN0aXZlLCBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVG9vbHRpcERpcmVjdGl2ZV0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbVG9vbHRpcENvbnRhaW5lckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRvb2x0aXBNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1Rvb2x0aXBDb25maWcsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUE7Ozs7O3lCQUVjLEtBQUs7Ozs7d0JBRU4sYUFBYTs7OztxQkFJaEIsQ0FBQzs7OztZQVRWLFVBQVU7Ozs7Ozs7QUNIWDs7OztJQXdERSxZQUFZLE1BQXFC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