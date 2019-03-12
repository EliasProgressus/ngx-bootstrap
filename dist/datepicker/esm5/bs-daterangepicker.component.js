/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { BsDaterangepickerConfig } from './bs-daterangepicker.config';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { filter } from 'rxjs/operators';
var BsDaterangepickerDirective = /** @class */ (function () {
    function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended
         * to. Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
        get: /**
         * Returns whether or not the daterangepicker is currently being shown
         * @return {?}
         */
        function () {
            return this._datepicker.isShown;
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
    Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
        set: /**
         * Initial value of daterangepicker
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
    BsDaterangepickerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.setConfig();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.ngOnChanges = /**
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
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.show = /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe(function (value) {
            _this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter(function (range) { return range && range[0] && !!range[1]; }))
            .subscribe(function (value) {
            _this.bsValue = value;
            _this.hide();
        }));
    };
    /**
     * Set config for daterangepicker
     */
    /**
     * Set config for daterangepicker
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.setConfig = /**
     * Set config for daterangepicker
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
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.hide = /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    function () {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        try {
            for (var _a = tslib_1.__values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    BsDaterangepickerDirective.prototype.toggle = /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
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
    BsDaterangepickerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._datepicker.dispose();
    };
    BsDaterangepickerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[bsDaterangepicker]',
                    exportAs: 'bsDaterangepicker'
                },] }
    ];
    /** @nocollapse */
    BsDaterangepickerDirective.ctorParameters = function () { return [
        { type: BsDaterangepickerConfig, },
        { type: ElementRef, },
        { type: Renderer2, },
        { type: ViewContainerRef, },
        { type: ComponentLoaderFactory, },
    ]; };
    BsDaterangepickerDirective.propDecorators = {
        "placement": [{ type: Input },],
        "triggers": [{ type: Input },],
        "outsideClick": [{ type: Input },],
        "container": [{ type: Input },],
        "outsideEsc": [{ type: Input },],
        "isOpen": [{ type: Input },],
        "onShown": [{ type: Output },],
        "onHidden": [{ type: Output },],
        "bsValue": [{ type: Input },],
        "bsConfig": [{ type: Input },],
        "isDisabled": [{ type: Input },],
        "minDate": [{ type: Input },],
        "maxDate": [{ type: Input },],
        "datesDisabled": [{ type: Input },],
        "bsValueChange": [{ type: Output },],
    };
    return BsDaterangepickerDirective;
}());
export { BsDaterangepickerDirective };
function BsDaterangepickerDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDaterangepickerDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDaterangepickerDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDaterangepickerDirective.propDecorators;
    /**
     * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.placement;
    /**
     * Specifies events that should trigger. Supports a space separated list of
     * event names.
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.triggers;
    /**
     * Close daterangepicker on outside click
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.outsideClick;
    /**
     * A selector specifying the element the daterangepicker should be appended
     * to. Currently only supports "body".
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.container;
    /** @type {?} */
    BsDaterangepickerDirective.prototype.outsideEsc;
    /**
     * Emits an event when the daterangepicker is shown
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.onShown;
    /**
     * Emits an event when the daterangepicker is hidden
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.onHidden;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._bsValue;
    /**
     * Config object for daterangepicker
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.bsConfig;
    /**
     * Indicates whether daterangepicker's content is enabled or not
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.isDisabled;
    /**
     * Minimum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.minDate;
    /**
     * Maximum date which is available for selection
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.maxDate;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.datesDisabled;
    /**
     * Emits when daterangepicker value has been changed
     * @type {?}
     */
    BsDaterangepickerDirective.prototype.bsValueChange;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._subs;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._datepicker;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._datepickerRef;
    /** @type {?} */
    BsDaterangepickerDirective.prototype._config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImJzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRXpHLE9BQU8sRUFBRSxzQkFBc0IsRUFBbUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN6RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0lBbUd0QyxvQ0FBbUIsT0FBZ0MsRUFDdkMsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQXlCOzs7O3lCQXhGTyxRQUFROzs7Ozt3QkFLOUMsT0FBTzs7Ozs0QkFJSCxJQUFJOzs7Ozt5QkFLUCxNQUFNOzBCQUVMLElBQUk7Ozs7NkJBaUVzQixJQUFJLFlBQVksRUFBRTtxQkFFaEMsRUFBRTtRQVVsQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxZQUFZLENBQ2pDLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsU0FBUyxDQUNWLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FB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b21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBDb21wb25lbnRMb2FkZXIgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcmFuZ2VwaWNrZXJdJyxcclxuICBleHBvcnRBczogJ2JzRGF0ZXJhbmdlcGlja2VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmVcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8qKlxyXG4gICAqIFBsYWNlbWVudCBvZiBhIGRhdGVyYW5nZXBpY2tlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcclxuICAgKiBldmVudCBuYW1lcy5cclxuICAgKi9cclxuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgZGF0ZXJhbmdlcGlja2VyIG9uIG91dHNpZGUgY2xpY2tcclxuICAgKi9cclxuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXJhbmdlcGlja2VyIHNob3VsZCBiZSBhcHBlbmRlZFxyXG4gICAqIHRvLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XHJcblxyXG4gIEBJbnB1dCgpIG91dHNpZGVFc2MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBkYXRlcmFuZ2VwaWNrZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIHNob3duXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcmFuZ2VwaWNrZXIgaXMgaGlkZGVuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIF9ic1ZhbHVlOiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcmFuZ2VwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlW10pIHtcclxuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmJzVmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcmFuZ2VwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVyYW5nZXBpY2tlckNvbmZpZz47XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXJhbmdlcGlja2VyJ3MgY29udGVudCBpcyBlbmFibGVkIG9yIG5vdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cclxuICAgKi9cclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgd2hlbiBkYXRlcmFuZ2VwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcclxuICAgICAgICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgX2VsZW1lbnRSZWYsXHJcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBfcmVuZGVyZXJcclxuICAgICk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xyXG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZGF0ZXBpY2tlci5vblNob3duO1xyXG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2RhdGVwaWNrZXIub25IaWRkZW47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcclxuICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLm91dHNpZGVDbGljayxcclxuICAgICAgb3V0c2lkZUVzYzogdGhpcy5vdXRzaWRlRXNjLFxyXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcclxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRDb25maWcoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBhbiBlbGVtZW504oCZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDigJxtYW51YWzigJ0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSBkYXRlcGlja2VyLlxyXG4gICAqL1xyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldENvbmZpZygpO1xyXG5cclxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXHJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxyXG4gICAgICAuYXR0YWNoKEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXHJcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxyXG4gICAgICAuc2hvdyh7cGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudH0pO1xyXG5cclxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoKHJhbmdlOiBEYXRlW10pID0+IHJhbmdlICYmIHJhbmdlWzBdICYmICEhcmFuZ2VbMV0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcclxuICAgICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcmFuZ2VwaWNrZXJcclxuICAgKi9cclxuICBzZXRDb25maWcoKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgdGhpcy5fY29uZmlnLFxyXG4gICAgICB0aGlzLmJzQ29uZmlnLFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXHJcbiAgICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxyXG4gICAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcclxuICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXHJcbiAgICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYW4gZWxlbWVudOKAmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudOKAmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEg4oCcbWFudWFs4oCdIHRyaWdnZXJpbmdcclxuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIl19