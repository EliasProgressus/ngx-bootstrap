(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/buttons', ['exports', '@angular/core', '@angular/forms'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].buttons = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    // TODO: config: activeClass - Class to apply to the checked buttons
    var /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonCheckboxDirective; }),
        multi: true
    };
    /**
     * Add checkbox functionality to any element
     */
    var ButtonCheckboxDirective = (function () {
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
             */ function () {
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
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[btnCheckbox]',
                        providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        ButtonCheckboxDirective.propDecorators = {
            "btnCheckboxTrue": [{ type: core.Input },],
            "btnCheckboxFalse": [{ type: core.Input },],
            "state": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] },],
            "onClick": [{ type: core.HostListener, args: ['click',] },],
        };
        return ButtonCheckboxDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonRadioGroupDirective; }),
        multi: true
    };
    /**
     * A group of radio buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioGroupDirective = (function () {
        function ButtonRadioGroupDirective(cdr) {
            this.cdr = cdr;
            this.onChange = Function.prototype;
            this.onTouched = Function.prototype;
        }
        Object.defineProperty(ButtonRadioGroupDirective.prototype, "value", {
            get: /**
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
            { type: core.Directive, args: [{
                        selector: '[btnRadioGroup]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioGroupDirective.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
            ];
        };
        return ButtonRadioGroupDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ RADIO_CONTROL_VALUE_ACCESSOR$1 = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return ButtonRadioDirective; }),
        multi: true
    };
    /**
     * Create radio buttons or groups of buttons.
     * A value of a selected button is bound to a variable specified via ngModel.
     */
    var ButtonRadioDirective = (function () {
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
             */ function () {
                return this.group ? this.group.value : this._value;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} disabled
             * @return {?}
             */ function (disabled) {
                this._disabled = disabled;
                this.setDisabledState(disabled);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
            get: /**
             * @return {?}
             */ function () {
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
            { type: core.Directive, args: [{
                        selector: '[btnRadio]',
                        providers: [RADIO_CONTROL_VALUE_ACCESSOR$1]
                    },] }
        ];
        /** @nocollapse */
        ButtonRadioDirective.ctorParameters = function () {
            return [
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
                { type: ButtonRadioGroupDirective, decorators: [{ type: core.Optional },] },
                { type: core.Renderer2, },
            ];
        };
        ButtonRadioDirective.propDecorators = {
            "btnRadio": [{ type: core.Input },],
            "uncheckable": [{ type: core.Input },],
            "value": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "isActive": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.HostBinding, args: ['attr.aria-pressed',] },],
            "onClick": [{ type: core.HostListener, args: ['click',] },],
        };
        return ButtonRadioDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ButtonsModule = (function () {
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
            { type: core.NgModule, args: [{
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

    exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
    exports.ButtonRadioGroupDirective = ButtonRadioGroupDirective;
    exports.ButtonRadioDirective = ButtonRadioDirective;
    exports.ButtonsModule = ButtonsModule;
    exports.ɵa = CHECKBOX_CONTROL_VALUE_ACCESSOR;
    exports.ɵb = RADIO_CONTROL_VALUE_ACCESSOR;
    exports.ɵc = RADIO_CONTROL_VALUE_ACCESSOR$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1idXR0b25zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy9idXR0b24tcmFkaW8tZ3JvdXAuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2J1dHRvbnMvYnV0dG9uLXJhZGlvLmRpcmVjdGl2ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9idXR0b25zL2J1dHRvbnMubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLXVzZS1iZWZvcmUtZGVjbGFyZVxyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUHJvdmlkZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLy8gVE9ETzogY29uZmlnOiBhY3RpdmVDbGFzcyAtIENsYXNzIHRvIGFwcGx5IHRvIHRoZSBjaGVja2VkIGJ1dHRvbnNcclxuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIGNoZWNrYm94IGZ1bmN0aW9uYWxpdHkgdG8gYW55IGVsZW1lbnRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2J0bkNoZWNrYm94XScsXHJcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgLyoqIFRydXRoeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xyXG4gIEBJbnB1dCgpIGJ0bkNoZWNrYm94VHJ1ZSA9IHRydWU7XHJcbiAgLyoqIEZhbHN5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXHJcbiAgQElucHV0KCkgYnRuQ2hlY2tib3hGYWxzZSA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXHJcbiAgc3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBwcm90ZWN0ZWQgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgLy8gdmlldyAtPiBtb2RlbFxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b2dnbGUoIXRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2dnbGUodGhpcy50cnVlVmFsdWUgPT09IHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCB0cnVlVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hUcnVlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hUcnVlXHJcbiAgICAgIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgZmFsc2VWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveEZhbHNlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hGYWxzZVxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zdGF0ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBtb2RlbCAtPiB2aWV3XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRydWVWYWx1ZSA9PT0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBEaXJlY3RpdmUsIGZvcndhcmRSZWYsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQSBncm91cCBvZiByYWRpbyBidXR0b25zLlxyXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9Hcm91cF0nLFxyXG4gIHByb3ZpZGVyczogW1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZyB8IG51bGwpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBQcm92aWRlcixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tcmFkaW8tZ3JvdXAuZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvRGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSByYWRpbyBidXR0b25zIG9yIGdyb3VwcyBvZiBidXR0b25zLlxyXG4gKiBBIHZhbHVlIG9mIGEgc2VsZWN0ZWQgYnV0dG9uIGlzIGJvdW5kIHRvIGEgdmFyaWFibGUgc3BlY2lmaWVkIHZpYSBuZ01vZGVsLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnRuUmFkaW9dJyxcclxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uUmFkaW9EaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIC8qKiBSYWRpbyBidXR0b24gdmFsdWUsIHdpbGwgYmUgc2V0IHRvIGBuZ01vZGVsYCAqL1xyXG4gIEBJbnB1dCgpIGJ0blJhZGlvOiBzdHJpbmc7XHJcbiAgLyoqIElmIGB0cnVlYCDDosKAwpQgcmFkaW8gYnV0dG9uIGNhbiBiZSB1bmNoZWNrZWQgKi9cclxuICBASW5wdXQoKSB1bmNoZWNrYWJsZTogYm9vbGVhbjtcclxuICAvKiogQ3VycmVudCB2YWx1ZSBvZiByYWRpbyBjb21wb25lbnQgb3IgZ3JvdXAgKi9cclxuICBASW5wdXQoKSBnZXQgdmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ncm91cCA/IHRoaXMuZ3JvdXAudmFsdWUgOiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVsbCB8IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcclxuICAgICAgdGhpcy5ncm91cC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgLyoqIElmIGB0cnVlYCDDosKAwpQgcmFkaW8gYnV0dG9uIGlzIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJylcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1wcmVzc2VkJylcclxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ZhbHVlOiAgbnVsbCB8IHN0cmluZztcclxuICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGVsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBncm91cDogQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5lbC5uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMuZGlzYWJsZWQgfHwgIXRoaXMudW5jaGVja2FibGUgJiYgdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudW5jaGVja2FibGUgJiYgdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZSA/IHVuZGVmaW5lZCA6IHRoaXMuYnRuUmFkaW87XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bmNoZWNrYWJsZSA9IHR5cGVvZiB0aGlzLnVuY2hlY2thYmxlICE9PSAndW5kZWZpbmVkJztcclxuICB9XHJcblxyXG4gIG9uQmx1cigpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcclxuICAgICAgdGhpcy5ncm91cC5vblRvdWNoZWQoKTtcclxuICAgICAgdGhpcy5ncm91cC5vbkNoYW5nZSh2YWx1ZSk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIG1vZGVsIC0+IHZpZXdcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tY2hlY2tib3guZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnV0dG9uUmFkaW9EaXJlY3RpdmUgfSBmcm9tICcuL2J1dHRvbi1yYWRpby5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tcmFkaW8tZ3JvdXAuZGlyZWN0aXZlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsIEJ1dHRvblJhZGlvRGlyZWN0aXZlLCBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlXSxcclxuICBleHBvcnRzOiBbQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUsIEJ1dHRvblJhZGlvRGlyZWN0aXZlLCBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uc01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogQnV0dG9uc01vZHVsZSwgcHJvdmlkZXJzOiBbXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiRGlyZWN0aXZlIiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIkhvc3RMaXN0ZW5lciIsIkNoYW5nZURldGVjdG9yUmVmIiwiUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiIsIkVsZW1lbnRSZWYiLCJPcHRpb25hbCIsIlJlbmRlcmVyMiIsIk5nTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFZQSx5QkFBYSwrQkFBK0IsR0FBYTtRQUN2RCxPQUFPLEVBQUVBLHVCQUFpQjs7UUFFMUIsV0FBVyxFQUFFQyxlQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixHQUFBLENBQUM7UUFDdEQsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDOzs7Ozs7Ozs7bUNBVzJCLElBQUk7Ozs7b0NBRUgsS0FBSzt5QkFJekIsS0FBSzs0QkFLUSxRQUFRLENBQUMsU0FBUzs2QkFDakIsUUFBUSxDQUFDLFNBQVM7Ozs7O1FBSXhDLHlDQUFPOzs7O2dCQUNMLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtvQkFDbkIsT0FBTztpQkFDUjtnQkFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7UUFHNUIsMENBQVE7OztZQUFSO2dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFB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