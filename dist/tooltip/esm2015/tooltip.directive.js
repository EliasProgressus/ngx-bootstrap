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
let /** @type {?} */ id = 0;
export class TooltipDirective {
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
tslib_1.__decorate([
    OnChange(),
    tslib_1.__metadata("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Rvb2x0aXAvIiwic291cmNlcyI6WyJ0b29sdGlwLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU3QixxQkFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBTVgsTUFBTTs7Ozs7Ozs7O0lBZ0xKLFlBQ0UsaUJBQW1DLEVBQ25DLEdBQTJCLEVBQzNCLE1BQXFCLEVBQ2IsYUFDQSxXQUNBO1FBRkEsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsY0FBUyxHQUFULFNBQVM7UUFDVCxxQkFBZ0IsR0FBaEIsZ0JBQWdCO3lCQXJMZCxFQUFFLEVBQUU7Ozs7OzZCQVd5QyxJQUFJLFlBQVksRUFBRTs7Ozs4QkFtQmpELEVBQUU7Ozs7Z0NBaUdBLElBQUk7Ozs7bUNBdUJELEdBQUc7K0JBZXNCLFdBQVcsSUFBSSxDQUFDLFNBQVMsRUFBRTs7OzttQ0FJdEMsSUFBSSxZQUFZLEVBQVc7UUFldEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHO2FBQ2hCLFlBQVksQ0FDWCxJQUFJLENBQUMsV0FBVyxFQUNoQixpQkFBaUIsRUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FDZjthQUNBLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFFdkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0tBQ3hDOzs7OztRQWhLRyxNQUFNO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDOzs7Ozs7SUFHL0IsSUFBSSxNQUFNLENBQUMsS0FBYztRQUN2QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNOLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0tBQ0Y7Ozs7Ozs7UUEwQkcsV0FBVyxDQUFDLEtBQWdDO1FBQzlDLFFBQVEsQ0FBQywwREFBMEQsQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O1FBS25CLFVBQVUsQ0FBQyxLQUFhO1FBQzFCLFFBQVEsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7Ozs7O1FBS3JCLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLFFBQVEsQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7OztJQUd0QixJQUFJLE9BQU87UUFDVCxRQUFRLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUV0RSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztLQUNwQjs7Ozs7O1FBSUcsT0FBTyxDQUFDLEtBQWM7UUFDeEIsUUFBUSxDQUFDLCtEQUErRCxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEtBQUssQ0FBQzs7Ozs7SUFHM0IsSUFBSSxPQUFPO1FBQ1QsUUFBUSxDQUFDLCtEQUErRCxDQUFDLENBQUM7UUFFMUUsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Ozs7OztRQUlHLGFBQWEsQ0FBQyxLQUFjO1FBQzlCLFFBQVEsQ0FDTiwyRUFBMkUsQ0FDNUUsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7Ozs7O0lBR25ELElBQUksYUFBYTtRQUNmLFFBQVEsQ0FDTiwyRUFBMkUsQ0FDNUUsQ0FBQztRQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQztLQUNsQzs7Ozs7O1FBT0csV0FBVyxDQUFDLEtBQWE7UUFDM0IsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUM7Ozs7Ozs7O1FBTWxDLGVBQWUsQ0FBQyxLQUFVO1FBQzVCLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDOzs7Ozs7O1FBS3BDLGtCQUFrQixDQUFDLEtBQWE7UUFDbEMsUUFBUSxDQUFDLHNEQUFzRCxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7Ozs7OztRQVFqQixlQUFlO1FBQ2pCLFFBQVEsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1FBRXpFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDOzs7Ozs7SUFHdkIsSUFBSSxlQUFlLENBQUMsS0FBd0I7UUFDMUMsUUFBUSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQzs7OztJQWtDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxJQUFJO2lCQUNkO2FBQ0Y7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7U0FDeEIsQ0FBQyxDQUFDOztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUU7WUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDdEI7U0FDRixDQUFDLENBQUM7S0FDSjs7Ozs7O0lBTUQsTUFBTTtRQUNKLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYjs7Ozs7O0lBTUQsSUFBSTtRQUNGLEVBQUUsQ0FBQyxDQUNELElBQUksQ0FBQyxNQUFNO1lBQ1gsSUFBSSxDQUFDLFVBQVU7WUFDZixJQUFJLENBQUMsZUFBZTtZQUNwQixDQUFDLElBQUksQ0FBQyxPQUNSLENBQUMsQ0FBQyxDQUFDO1lBQ0QsTUFBTSxDQUFDO1NBQ1I7UUFFRCx1QkFBTSxXQUFXLEdBQUcsR0FBRyxFQUFFO1lBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQzthQUNsQztZQUVELElBQUksQ0FBQyxRQUFRO2lCQUNWLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQztpQkFDakMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7aUJBQ2xCLFFBQVEsQ0FBQyxFQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUM7aUJBQ3RDLElBQUksQ0FBQztnQkFDSixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDekIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO2dCQUNuQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWU7YUFDekIsQ0FBQyxDQUFDO1NBQ04sQ0FBQztRQUNGLHVCQUFNLDJCQUEyQixHQUFHLEdBQUcsRUFBRTtZQUN2QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUM3QjtTQUNGLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNmLHVCQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQzlDLFdBQVcsRUFBRSxDQUFDO2dCQUNkLDJCQUEyQixFQUFFLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xCLHVCQUFNLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUU7b0JBQ3hHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDckIsMkJBQTJCLEVBQUUsQ0FBQztpQkFDL0IsQ0FBQyxDQUFDO2FBQ0o7U0FDRjtRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sV0FBVyxFQUFFLENBQUM7U0FDZjtLQUNGOzs7Ozs7SUFNRCxJQUFJO1FBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDekIsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztTQUNsQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxTQUFNLEtBQUssQ0FBQztRQUMzQyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN0QixFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0tBQzlCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDekI7OztZQXZURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFqQkMsZ0JBQWdCO1lBTVEsc0JBQXNCO1lBRnZDLGFBQWE7WUFicEIsVUFBVTtZQU9WLFNBQVM7WUFVRixrQkFBa0I7Ozt3QkFnQnhCLEtBQUs7OEJBSUwsTUFBTTswQkFPTixLQUFLO3lCQUtMLEtBQUs7MEJBS0wsS0FBSzsrQkFJTCxLQUFLO3VCQUlMLEtBQUs7MkJBZ0JMLEtBQUs7c0JBS0wsS0FBSzt3QkFNTCxNQUFNO3lCQUtOLE1BQU07NEJBR04sS0FBSyxTQUFDLGFBQWE7MkJBUW5CLEtBQUssU0FBQyxrQkFBa0I7d0JBT3hCLEtBQUssU0FBQyxlQUFlO3dCQWFyQixLQUFLLFNBQUMsZUFBZTs4QkFhckIsS0FBSyxTQUFDLHFCQUFxQjtpQ0FpQjNCLEtBQUs7NEJBR0wsS0FBSyxTQUFDLGNBQWM7Z0NBTXBCLEtBQUssU0FBQyxnQkFBZ0I7bUNBT3RCLEtBQUssU0FBQyxtQkFBbUI7b0NBT3pCLEtBQUs7Z0NBR0wsS0FBSyxTQUFDLGdCQUFnQjtnQ0FZdEIsV0FBVyxTQUFDLHVCQUF1QjtvQ0FHbkMsTUFBTTs7O0lBcEtOLFFBQVEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50IGRlcHJlY2F0aW9uICovXHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sdGlwLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb29sdGlwQ29uZmlnIH0gZnJvbSAnLi90b29sdGlwLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBPbkNoYW5nZSwgd2Fybk9uY2UsIHBhcnNlVHJpZ2dlcnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyB0aW1lciB9IGZyb20gJ3J4anMnO1xyXG5cclxubGV0IGlkID0gMDtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3Rvb2x0aXBdLCBbdG9vbHRpcEh0bWxdJyxcclxuICBleHBvcnRBczogJ2JzLXRvb2x0aXAnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHRvb2x0aXBJZCA9IGlkKys7XHJcbiAgLyoqXHJcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgdG9vbHRpcC5cclxuICAgKi9cclxuICBAT25DaGFuZ2UoKVxyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHRvb2x0aXA6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgLyoqIEZpcmVkIHdoZW4gdG9vbHRpcCBjb250ZW50IGNoYW5nZXMgKi9cclxuICBAT3V0cHV0KClcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgdG9vbHRpcENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSB0b29sdGlwLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHJpZ2dlcnM6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHRvb2x0aXAgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIENzcyBjbGFzcyBmb3IgdG9vbHRpcCBjb250YWluZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXJDbGFzcyA9ICcnO1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIHRvb2x0aXAgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Rvb2x0aXAuaXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRvIGRpc2FibGUgdG9vbHRpcFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGF5IGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGVsYXk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBzaG93blxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgdG9vbHRpcCBpcyBoaWRkZW5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcEh0bWwnKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBzZXQgaHRtbENvbnRlbnQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwSHRtbCB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdG9vbHRpcGAgaW5zdGVhZCcpO1xyXG4gICAgdGhpcy50b29sdGlwID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBQbGFjZW1lbnQnKVxyXG4gIHNldCBfcGxhY2VtZW50KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwUGxhY2VtZW50IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBwbGFjZW1lbnRgIGluc3RlYWQnKTtcclxuICAgIHRoaXMucGxhY2VtZW50ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc09wZW5gIGluc3RlYWQgKi9cclxuICBASW5wdXQoJ3Rvb2x0aXBJc09wZW4nKVxyXG4gIHNldCBfaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9pc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICB3YXJuT25jZSgndG9vbHRpcElzT3BlbiB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgaXNPcGVuYCBpbnN0ZWFkJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcGxlYXNlIHVzZSBgaXNEaXNhYmxlZGAgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcEVuYWJsZScpXHJcbiAgc2V0IF9lbmFibGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSAhdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgX2VuYWJsZSgpOiBib29sZWFuIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwRW5hYmxlIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBpc0Rpc2FibGVkYCBpbnN0ZWFkJyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGNvbnRhaW5lcj1cImJvZHlcImAgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcEFwcGVuZFRvQm9keScpXHJcbiAgc2V0IF9hcHBlbmRUb0JvZHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHdhcm5PbmNlKFxyXG4gICAgICAndG9vbHRpcEFwcGVuZFRvQm9keSB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGFpbmVyPVwiYm9keVwiYCBpbnN0ZWFkJ1xyXG4gICAgKTtcclxuICAgIHRoaXMuY29udGFpbmVyID0gdmFsdWUgPyAnYm9keScgOiB0aGlzLmNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIGdldCBfYXBwZW5kVG9Cb2R5KCk6IGJvb2xlYW4ge1xyXG4gICAgd2Fybk9uY2UoXHJcbiAgICAgICd0b29sdGlwQXBwZW5kVG9Cb2R5IHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGBjb250YWluZXI9XCJib2R5XCJgIGluc3RlYWQnXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbnRhaW5lciA9PT0gJ2JvZHknO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIC0gcmVtb3ZlZCwgd2lsbCBiZSBhZGRlZCB0byBjb25maWd1cmF0aW9uICovXHJcbiAgQElucHV0KCkgdG9vbHRpcEFuaW1hdGlvbiA9IHRydWU7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHdpbGwgcmVwbGFjZWQgd2l0aCBjdXN0b21DbGFzcyAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcENsYXNzJylcclxuICBzZXQgX3BvcHVwQ2xhc3ModmFsdWU6IHN0cmluZykge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDbGFzcyBkZXByZWNhdGVkJyk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSByZW1vdmVkICovXHJcbiAgQElucHV0KCd0b29sdGlwQ29udGV4dCcpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCBfdG9vbHRpcENvbnRleHQodmFsdWU6IGFueSkge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBDb250ZXh0IGRlcHJlY2F0ZWQnKTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcFBvcHVwRGVsYXknKVxyXG4gIHNldCBfdG9vbHRpcFBvcHVwRGVsYXkodmFsdWU6IG51bWJlcikge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBQb3B1cERlbGF5IGlzIGRlcHJlY2F0ZWQsIHVzZSBgZGVsYXlgIGluc3RlYWQnKTtcclxuICAgIHRoaXMuZGVsYXkgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIEBJbnB1dCgpIHRvb2x0aXBGYWRlRHVyYXRpb24gPSAxNTA7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtICBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCAqL1xyXG4gIEBJbnB1dCgndG9vbHRpcFRyaWdnZXInKVxyXG4gIGdldCBfdG9vbHRpcFRyaWdnZXIoKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgd2Fybk9uY2UoJ3Rvb2x0aXBUcmlnZ2VyIHdhcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGB0cmlnZ2Vyc2AgaW5zdGVhZCcpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnRyaWdnZXJzO1xyXG4gIH1cclxuXHJcbiAgc2V0IF90b29sdGlwVHJpZ2dlcih2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pIHtcclxuICAgIHdhcm5PbmNlKCd0b29sdGlwVHJpZ2dlciB3YXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgdHJpZ2dlcnNgIGluc3RlYWQnKTtcclxuICAgIHRoaXMudHJpZ2dlcnMgPSAodmFsdWUgfHwgJycpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kZXNjcmliZWRieScpIGFyaWFEZXNjcmliZWRieSA9IGB0b29sdGlwLSR7dGhpcy50b29sdGlwSWR9YDtcclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgQE91dHB1dCgpXHJcbiAgdG9vbHRpcFN0YXRlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBwcm90ZWN0ZWQgX2RlbGF5VGltZW91dElkOiBudW1iZXIgfCBhbnk7XHJcbiAgcHJvdGVjdGVkIF90b29sdGlwQ2FuY2VsU2hvd0ZuOiBGdW5jdGlvbjtcclxuXHJcbiAgcHJpdmF0ZSBfdG9vbHRpcDogQ29tcG9uZW50TG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICBjb25maWc6IFRvb2x0aXBDb25maWcsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5fdG9vbHRpcCA9IGNpc1xyXG4gICAgICAuY3JlYXRlTG9hZGVyPFRvb2x0aXBDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnRSZWYsXHJcbiAgICAgICAgX3ZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXJcclxuICAgICAgKVxyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogVG9vbHRpcENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZ30pO1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX3Rvb2x0aXAub25TaG93bjtcclxuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl90b29sdGlwLm9uSGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3Rvb2x0aXAubGlzdGVuKHtcclxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXHJcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXHJcbiAgICB9KTtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICAgIHRoaXMudG9vbHRpcENoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXAuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgdG9vbHRpcC5cclxuICAgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gZWxlbWVudOKAmXMgdG9vbHRpcC4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgdG9vbHRpcC5cclxuICAgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmlzT3BlbiB8fFxyXG4gICAgICB0aGlzLmlzRGlzYWJsZWQgfHxcclxuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgfHxcclxuICAgICAgIXRoaXMudG9vbHRpcFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93VG9vbHRpcCA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX2RlbGF5VGltZW91dElkKSB7XHJcbiAgICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3Rvb2x0aXBcclxuICAgICAgICAuYXR0YWNoKFRvb2x0aXBDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxyXG4gICAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxyXG4gICAgICAgIC5zaG93KHtcclxuICAgICAgICAgIGNvbnRlbnQ6IHRoaXMudG9vbHRpcCxcclxuICAgICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXHJcbiAgICAgICAgICBjb250YWluZXJDbGFzczogdGhpcy5jb250YWluZXJDbGFzcyxcclxuICAgICAgICAgIGlkOiB0aGlzLmFyaWFEZXNjcmliZWRieVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZyA9ICgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4pIHtcclxuICAgICAgICB0aGlzLl90b29sdGlwQ2FuY2VsU2hvd0ZuKCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuZGVsYXkpIHtcclxuICAgICAgY29uc3QgX3RpbWVyID0gdGltZXIodGhpcy5kZWxheSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICBzaG93VG9vbHRpcCgpO1xyXG4gICAgICAgIGNhbmNlbERlbGF5ZWRUb29sdGlwU2hvd2luZygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnRyaWdnZXJzKSB7XHJcbiAgICAgICAgY29uc3QgdHJpZ2dlcnMgPSBwYXJzZVRyaWdnZXJzKHRoaXMudHJpZ2dlcnMpO1xyXG4gICAgICAgIHRoaXMuX3Rvb2x0aXBDYW5jZWxTaG93Rm4gPSB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cmlnZ2Vyc1swXS5jbG9zZSwgKCkgPT4ge1xyXG4gICAgICAgICAgX3RpbWVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICBjYW5jZWxEZWxheWVkVG9vbHRpcFNob3dpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hvd1Rvb2x0aXAoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBhbiBlbGVtZW504oCZcyB0b29sdGlwLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSB0b29sdGlwLlxyXG4gICAqL1xyXG4gIGhpZGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGVsYXlUaW1lb3V0SWQpIHtcclxuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX2RlbGF5VGltZW91dElkKTtcclxuICAgICAgdGhpcy5fZGVsYXlUaW1lb3V0SWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl90b29sdGlwLmlzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3Rvb2x0aXAuaW5zdGFuY2UuY2xhc3NNYXAuaW4gPSBmYWxzZTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl90b29sdGlwLmhpZGUoKTtcclxuICAgIH0sIHRoaXMudG9vbHRpcEZhZGVEdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Rvb2x0aXAuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=