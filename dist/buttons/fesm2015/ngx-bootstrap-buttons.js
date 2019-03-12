import { Directive, forwardRef, HostBinding, HostListener, Input, ChangeDetectorRef, ElementRef, Optional, Renderer2, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
const /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
class ButtonCheckboxDirective {
    constructor() {
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
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    /**
     * @return {?}
     */
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue
            : true;
    }
    /**
     * @return {?}
     */
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse
            : false;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    toggle(state) {
        this.state = state;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonRadioGroupDirective),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioGroupDirective {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._value = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonRadioGroupDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            },] }
];
/** @nocollapse */
ButtonRadioGroupDirective.ctorParameters = () => [
    { type: ChangeDetectorRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR$1 = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonRadioDirective),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioDirective {
    /**
     * @param {?} el
     * @param {?} cdr
     * @param {?} group
     * @param {?} renderer
     */
    constructor(el, cdr, group, renderer) {
        this.el = el;
        this.cdr = cdr;
        this.group = group;
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * Current value of radio component or group
     * @return {?}
     */
    get value() {
        return this.group ? this.group.value : this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this._value = value;
    }
    /**
     * If `true` — radio button is disabled
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    set disabled(disabled) {
        this._disabled = disabled;
        this.setDisabledState(disabled);
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.btnRadio === this.value;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.el.nativeElement.attributes.disabled || !this.uncheckable && this.btnRadio === this.value) {
            return;
        }
        this.value = this.uncheckable && this.btnRadio === this.value ? undefined : this.btnRadio;
        this._onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _onChange(value) {
        if (this.group) {
            this.group.onTouched();
            this.group.onChange(value);
            return;
        }
        this.onTouched();
        this.onChange(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} disabled
     * @return {?}
     */
    setDisabledState(disabled) {
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
}
ButtonRadioDirective.decorators = [
    { type: Directive, args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
            },] }
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
    { type: ButtonRadioGroupDirective, decorators: [{ type: Optional },] },
    { type: Renderer2, },
];
ButtonRadioDirective.propDecorators = {
    "btnRadio": [{ type: Input },],
    "uncheckable": [{ type: Input },],
    "value": [{ type: Input },],
    "disabled": [{ type: Input },],
    "isActive": [{ type: HostBinding, args: ['class.active',] }, { type: HostBinding, args: ['attr.aria-pressed',] },],
    "onClick": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective, ButtonRadioGroupDirective]
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

export { ButtonCheckboxDirective, ButtonRadioGroupDirective, ButtonRadioDirective, ButtonsModule, CHECKBOX_CONTROL_VALUE_ACCESSOR as ɵa, RADIO_CONTROL_VALUE_ACCESSOR as ɵb, RADIO_CONTROL_VALUE_ACCESSOR$1 as ɵc };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1idXR0b25zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy9idXR0b24tcmFkaW8uZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9ucy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tdXNlLWJlZm9yZS1kZWNsYXJlXHJcbmltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBQcm92aWRlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBUT0RPOiBjb25maWc6IGFjdGl2ZUNsYXNzIC0gQ2xhc3MgdG8gYXBwbHkgdG8gdGhlIGNoZWNrZWQgYnV0dG9uc1xyXG5leHBvcnQgY29uc3QgQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25DaGVja2JveERpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBZGQgY2hlY2tib3ggZnVuY3Rpb25hbGl0eSB0byBhbnkgZWxlbWVudFxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnRuQ2hlY2tib3hdJyxcclxuICBwcm92aWRlcnM6IFtDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAvKiogVHJ1dGh5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXHJcbiAgQElucHV0KCkgYnRuQ2hlY2tib3hUcnVlID0gdHJ1ZTtcclxuICAvKiogRmFsc3kgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cclxuICBASW5wdXQoKSBidG5DaGVja2JveEZhbHNlID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1wcmVzc2VkJylcclxuICBzdGF0ZSA9IGZhbHNlO1xyXG5cclxuICBwcm90ZWN0ZWQgdmFsdWU6IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gIHByb3RlY3RlZCBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBwcm90ZWN0ZWQgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICAvLyB2aWV3IC0+IG1vZGVsXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvZ2dsZSghdGhpcy5zdGF0ZSk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvZ2dsZSh0aGlzLnRydWVWYWx1ZSA9PT0gdGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IHRydWVWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveFRydWUgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgID8gdGhpcy5idG5DaGVja2JveFRydWVcclxuICAgICAgOiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCBmYWxzZVZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94RmFsc2UgIT09ICd1bmRlZmluZWQnXHJcbiAgICAgID8gdGhpcy5idG5DaGVja2JveEZhbHNlXHJcbiAgICAgIDogZmFsc2U7XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoc3RhdGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnN0YXRlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIG1vZGVsIC0+IHZpZXdcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMudHJ1ZVZhbHVlID09PSB2YWx1ZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBIGdyb3VwIG9mIHJhZGlvIGJ1dHRvbnMuXHJcbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tidG5SYWRpb0dyb3VwXScsXHJcbiAgcHJvdmlkZXJzOiBbUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVsbCkge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFByb3ZpZGVyLFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHJhZGlvIGJ1dHRvbnMgb3IgZ3JvdXBzIG9mIGJ1dHRvbnMuXHJcbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tidG5SYWRpb10nLFxyXG4gIHByb3ZpZGVyczogW1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgLyoqIFJhZGlvIGJ1dHRvbiB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gYG5nTW9kZWxgICovXHJcbiAgQElucHV0KCkgYnRuUmFkaW86IHN0cmluZztcclxuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gY2FuIGJlIHVuY2hlY2tlZCAqL1xyXG4gIEBJbnB1dCgpIHVuY2hlY2thYmxlOiBib29sZWFuO1xyXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHJhZGlvIGNvbXBvbmVudCBvciBncm91cCAqL1xyXG4gIEBJbnB1dCgpIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmdyb3VwID8gdGhpcy5ncm91cC52YWx1ZSA6IHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBudWxsIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICB0aGlzLmdyb3VwLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICAvKiogSWYgYHRydWVgIMOiwoDClCByYWRpbyBidXR0b24gaXMgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLnNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxyXG4gIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdmFsdWU6ICBudWxsIHwgc3RyaW5nO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGdyb3VwOiBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcy5kaXNhYmxlZCB8fCAhdGhpcy51bmNoZWNrYWJsZSAmJiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy51bmNoZWNrYWJsZSAmJiB0aGlzLmJ0blJhZGlvID09PSB0aGlzLnZhbHVlID8gdW5kZWZpbmVkIDogdGhpcy5idG5SYWRpbztcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVuY2hlY2thYmxlID0gdHlwZW9mIHRoaXMudW5jaGVja2FibGUgIT09ICd1bmRlZmluZWQnO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICB0aGlzLmdyb3VwLm9uVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLmdyb3VwLm9uQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gbW9kZWwgLT4gdmlld1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCdXR0b25SYWRpb0RpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgQnV0dG9uUmFkaW9EaXJlY3RpdmUsIEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25zTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBCdXR0b25zTW9kdWxlLCBwcm92aWRlcnM6IFtdIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7QUFZQSx1QkFBYSwrQkFBK0IsR0FBYTtJQUN2RCxPQUFPLEVBQUUsaUJBQWlCOztJQUUxQixXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sdUJBQXVCLENBQUM7SUFDdEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOzs7O0FBU0Y7Ozs7OytCQUU2QixJQUFJOzs7O2dDQUVILEtBQUs7cUJBSXpCLEtBQUs7d0JBS1EsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTOzs7OztJQUl4QyxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBRzVCLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsSUFBYyxTQUFTO1FBQ3JCLE9BQU8sT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFdBQVc7Y0FDOUMsSUFBSSxDQUFDLGVBQWU7Y0FDcEIsSUFBSSxDQUFDO0tBQ1Y7Ozs7SUFFRCxJQUFjLFVBQVU7UUFDdEIsT0FBTyxPQUFP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