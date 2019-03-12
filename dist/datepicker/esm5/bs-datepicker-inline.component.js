/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { BsDatepickerConfig } from './bs-datepicker.config';
var BsDatepickerInlineDirective = /** @class */ (function () {
    function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
        set: /**
         * Initial value of datepicker
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._bsValue === value) {
                return;
            }
            this._bsValue = value;
            this.bsValueChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
            _this.bsValue = value;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    };
    /**
     * Set config for datepicker
     */
    /**
     * Set config for datepicker
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.setConfig = /**
     * Set config for datepicker
     * @return {?}
     */
    function () {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    };
    /**
     * @return {?}
     */
    BsDatepickerInlineDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDatepickerInlineDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'bs-datepicker-inline',
                    exportAs: 'bsDatepickerInline'
                },] }
    ];
    /** @nocollapse */
    BsDatepickerInlineDirective.ctorParameters = function () { return [
        { type: BsDatepickerInlineConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
    ]; };
    BsDatepickerInlineDirective.propDecorators = {
        "bsValue": [{ type: Input },],
        "bsConfig": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "datesDisabled": [{ type: Input },],
        "bsValueChange": [{ type: Output },],
    };
    return BsDatepickerInlineDirective;
}());
export { BsDatepickerInlineDirective };
function BsDatepickerInlineDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerInlineDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerInlineDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDatepickerInlineDirective.propDecorators;
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._bsValue;
    /**
     * Config object for datepicker
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.bsConfig;
    /**
     * Indicates whether datepicker is enabled or not
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.maxDate;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.datesDisabled;
    /**
     * Emits when datepicker value has been changed
     * @type {?}
     */
    BsDatepickerInlineDirective.prototype.bsValueChange;
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._subs;
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._datepicker;
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._config;
    /** @type {?} */
    BsDatepickerInlineDirective.prototype._elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ1MsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUNyQyxNQUFNLEVBQUUsU0FBUyxFQUFpQixnQkFBZ0IsRUFDdEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFtQixzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRTVHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztJQWtEMUQscUNBQW1CLE9BQWlDLEVBQ2hDLGFBQ1IsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQTBCO1FBQ2hDLGdCQUFXLEdBQVgsV0FBVzs7Ozs2QkFSZSxJQUFJLFlBQVksRUFBRTtxQkFFOUIsRUFBRTs7UUFXbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FDakMsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLENBQ1YsQ0FBQztLQUNIOzBCQWxERyxnREFBTzs7Ozs7O2tCQUFDLEtBQVc7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixNQUFNLENBQUM7YUFDUjtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcs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QVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQU5RLHdCQUF3QjtnQkFOTixVQUFVO2dCQUNSLFNBQVM7Z0JBQWlCLGdCQUFnQjtnQkFFN0Msc0JBQXNCOzs7NEJBZTdDLEtBQUs7NkJBWUwsS0FBSzsrQkFJTCxLQUFLOzRCQUlMLEtBQUs7NEJBSUwsS0FBSztrQ0FJTCxLQUFLO2tDQUlMLE1BQU07O3NDQW5EVDs7U0FjYSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1pbmxpbmUnLFxyXG4gIGV4cG9ydEFzOiAnYnNEYXRlcGlja2VySW5saW5lJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgX2JzVmFsdWU6IERhdGU7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJJbmxpbmVDb25maWc+O1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIgaXMgZW5hYmxlZCBvciBub3RcclxuICAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xyXG4gIC8qKlxyXG4gICAqIEVtaXRzIHdoZW4gZGF0ZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9kYXRlcGlja2VyUmVmOiBDb21wb25lbnRSZWY8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9jb25maWc6IEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xyXG4gICAgLy8gdG9kbzogYXNzaWduIG9ubHkgc3Vic2V0IG9mIGZpZWxkc1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9jb25maWcpO1xyXG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgX2VsZW1lbnRSZWYsXHJcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBfcmVuZGVyZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q29uZmlnKCk7XHJcblxyXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRGF0ZXBpY2tlckNvbmZpZywgdXNlVmFsdWU6IHRoaXMuX2NvbmZpZ30pXHJcbiAgICAgIC5hdHRhY2goQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAudG8odGhpcy5fZWxlbWVudFJlZilcclxuICAgICAgLnNob3coKTtcclxuXHJcbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBwaWNrZXIgKHZpZXcgLT4gbW9kZWwpXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcGlja2VyXHJcbiAgICovXHJcbiAgc2V0Q29uZmlnKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB0aGlzLmJzQ29uZmlnLCB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxyXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXHJcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcclxuICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxyXG4gICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=