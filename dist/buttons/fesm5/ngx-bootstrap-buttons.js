import { Directive, forwardRef, HostBinding, HostListener, Input, ChangeDetectorRef, ElementRef, Optional, Renderer2, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
var /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        get: /**
         * @return {?}
         */
        function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = /**
     * @param {?} state
     * @return {?}
     */
    function (state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonCheckboxDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[btnCheckbox]',
                    providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonCheckboxDirective.propDecorators = {
        "btnCheckboxTrue": [{ type: Input },],
        "btnCheckboxFalse": [{ type: Input },],
        "state": [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] },],
        "onClick": [{ type: HostListener, args: ['click',] },],
    };
    return ButtonCheckboxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ButtonRadioGroupDirective; }),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioGroupDirective = /** @class */ (function () {
    function ButtonRadioGroupDirective(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this._value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioGroupDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    ButtonRadioGroupDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[btnRadioGroup]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioGroupDirective.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
    ]; };
    return ButtonRadioGroupDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    function ButtonRadioDirective(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "value", {
        get: /**
         * Current value of radio component or group
         * @return {?}
         */
        function () {
            return this.group ? this.group.value : this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this.group) {
                this.group.value = value;
                return;
            }
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "disabled", {
        get: /**
         * If `true` — radio button is disabled
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} disabled
         * @return {?}
         */
        function (disabled) {
            this._disabled = disabled;
            this.setDisabledState(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this.btnRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = /**
     * @return {?}
     */
    function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype._onChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    };
    // ControlValueAccessor
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    ButtonRadioDirective.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    };
    ButtonRadioDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[btnRadio]',
                    providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                },] }
    ];
    /** @nocollapse */
    ButtonRadioDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ChangeDetectorRef, },
        { type: ButtonRadioGroupDirective, decorators: [{ type: Optional },] },
        { type: Renderer2, },
    ]; };
    ButtonRadioDirective.propDecorators = {
        "btnRadio": [{ type: Input },],
        "uncheckable": [{ type: Input },],
        "value": [{ type: Input },],
        "disabled": [{ type: Input },],
        "isActive": [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] },],
        "onClick": [{ type: HostListener, args: ['click',] },],
    };
    return ButtonRadioDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    ButtonsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                    exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
                },] }
    ];
    return ButtonsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { ButtonCheckboxDirective, ButtonRadioGroupDirective, ButtonRadioDirective, ButtonsModule, CHECKBOX_CONTROL_VALUE_ACCESSOR as ɵa, RADIO_CONTROL_VALUE_ACCESSOR as ɵb, RADIO_CONTROL_VALUE_ACCESSOR$1 as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1idXR0b25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy9idXR0b24tcmFkaW8uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBQcm92aWRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBUT0RPOiBjb25maWc6IGFjdGl2ZUNsYXNzIC0gQ2xhc3MgdG8gYXBwbHkgdG8gdGhlIGNoZWNrZWQgYnV0dG9uc1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25DaGVja2JveERpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgY2hlY2tib3ggZnVuY3Rpb25hbGl0eSB0byBhbnkgZWxlbWVudFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnRuQ2hlY2tib3hdJyxcclxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAvKiogVHJ1dGh5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXHJcbiAgQElucHV0KCkgYnRuQ2hlY2tib3hUcnVlID0gdHJ1ZTtcclxuICAvKiogRmFsc3kgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cclxuICBASW5wdXQoKSBidG5DaGVja2JveEZhbHNlID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1wcmVzc2VkJylcclxuICBzdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIHByb3RlY3RlZCBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBwcm90ZWN0ZWQgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICAvLyB2aWV3IC0+IG1vZGVsXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvZ2dsZSghdGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZ2dsZSh0aGlzLnRydWVWYWx1ZSA9PT0gdGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHRydWVWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveFRydWUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgID8gdGhpcy5idG5DaGVja2JveFRydWVcclxuICAgICAgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBmYWxzZVZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94RmFsc2UgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgID8gdGhpcy5idG5DaGVja2JveEZhbHNlXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0YXRlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIG1vZGVsIC0+IHZpZXdcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJ1ZVZhbHVlID09PSB2YWx1ZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIGdyb3VwIG9mIHJhZGlvIGJ1dHRvbnMuXHJcbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tidG5SYWRpb0dyb3VwXScsXHJcbiAgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFByb3ZpZGVyLFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHJhZGlvIGJ1dHRvbnMgb3IgZ3JvdXBzIG9mIGJ1dHRvbnMuXHJcbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tidG5SYWRpb10nLFxyXG4gIHByb3ZpZGVyczogW1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgLyoqIFJhZGlvIGJ1dHRvbiB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gYG5nTW9kZWxgICovXHJcbiAgQElucHV0KCkgYnRuUmFkaW86IHN0cmluZztcclxuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gY2FuIGJlIHVuY2hlY2tlZCAqL1xyXG4gIEBJbnB1dCgpIHVuY2hlY2thYmxlOiBib29sZWFuO1xyXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHJhZGlvIGNvbXBvbmVudCBvciBncm91cCAqL1xyXG4gIEBJbnB1dCgpIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdyb3VwID8gdGhpcy5ncm91cC52YWx1ZSA6IHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBudWxsIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICB0aGlzLmdyb3VwLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gaXMgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxyXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdmFsdWU6ICBudWxsIHwgc3RyaW5nO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGdyb3VwOiBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcy5kaXNhYmxlZCB8fCAhdGhpcy51bmNoZWNrYWJsZSAmJiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy51bmNoZWNrYWJsZSAmJiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlID8gdW5kZWZpbmVkIDogdGhpcy5idG5SYWRpbztcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuY2hlY2thYmxlID0gdHlwZW9mIHRoaXMudW5jaGVja2FibGUgIT09ICd1bmRlZmluZWQnO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICB0aGlzLmdyb3VwLm9uVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLmdyb3VwLm9uQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gbW9kZWwgLT4gdmlld1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCdXR0b25SYWRpb0RpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25zTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBCdXR0b25zTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFZQSxxQkFBYSwrQkFBK0IsR0FBYTtJQUN2RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBdUIsR0FBQSxDQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7Ozs7Ozs7OytCQVcyQixJQUFJOzs7O2dDQUVILEtBQUs7cUJBSXpCLEtBQUs7d0JBS1EsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTOzs7OztJQUl4Qyx5Q0FBTzs7OztRQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQUc1QiwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVDO0lBRUQsc0JBQWMsOENBQVM7Ozs7UUFBdkI7WUFDRSxPQUFPLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXO2tCQUM5QyxJQUFJLENBQUMsZUFBZTtrQkFDcEIsSUFBSSxDQUFDO1NBQ1Y7OztPQUFB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