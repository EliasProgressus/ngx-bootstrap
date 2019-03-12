/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// TODO: config: activeClass - Class to apply to the checked buttons
export var /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
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
export { ButtonCheckboxDirective };
function ButtonCheckboxDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ButtonCheckboxDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ButtonCheckboxDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ButtonCheckboxDirective.propDecorators;
    /**
     * Truthy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxTrue;
    /**
     * Falsy value, will be set to ngModel
     * @type {?}
     */
    ButtonCheckboxDirective.prototype.btnCheckboxFalse;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.state;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.value;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.isDisabled;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.onChange;
    /** @type {?} */
    ButtonCheckboxDirective.prototype.onTouched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHekUsTUFBTSxDQUFDLHFCQUFNLCtCQUErQixHQUFhO0lBQ3ZELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHVCQUF1QixFQUF2QixDQUF1QixDQUFDO0lBQ3RELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQzs7Ozs7Ozs7OytCQVcyQixJQUFJOzs7O2dDQUVILEtBQUs7cUJBSXpCLEtBQUs7d0JBS1EsUUFBUSxDQUFDLFNBQVM7eUJBQ2pCLFFBQVEsQ0FBQyxTQUFTOzs7OztJQUl4Qyx5Q0FBTzs7OztRQUNMLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7Ozs7SUFHNUIsMENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1QztJQUVELHNCQUFjLDhDQUFTOzs7O1FBQXZCO1lBQ0UsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxXQUFXO2dCQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7Z0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUM7U0FDVjs7O09BQUE7SUFFRCxzQkFBYywrQ0FBVTs7OztRQUF4QjtZQUNFLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO2dCQUNqRCxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdkIsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNYOzs7T0FBQTs7Ozs7SUFFRCx3Q0FBTTs7OztJQUFOLFVBQU8sS0FBYztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDNUQ7SUFFRCx1QkFBdUI7SUFDdkIsZ0JBQWdCOzs7OztJQUNoQiw0Q0FBVTs7OztJQUFWLFVBQVcsS0FBOEI7UUFDdkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQUN2RDs7Ozs7SUFFRCxrREFBZ0I7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQsa0RBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsbURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO2lCQUM3Qzs7OztvQ0FHRSxLQUFLO3FDQUVMLEtBQUs7MEJBRUwsV0FBVyxTQUFDLGNBQWMsY0FDMUIsV0FBVyxTQUFDLG1CQUFtQjs0QkFVL0IsWUFBWSxTQUFDLE9BQU87O2tDQTVDdkI7O1NBMkJhLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLXVzZS1iZWZvcmUtZGVjbGFyZVxyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUHJvdmlkZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuLy8gVE9ETzogY29uZmlnOiBhY3RpdmVDbGFzcyAtIENsYXNzIHRvIGFwcGx5IHRvIHRoZSBjaGVja2VkIGJ1dHRvbnNcclxuZXhwb3J0IGNvbnN0IENIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uQ2hlY2tib3hEaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQWRkIGNoZWNrYm94IGZ1bmN0aW9uYWxpdHkgdG8gYW55IGVsZW1lbnRcclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2J0bkNoZWNrYm94XScsXHJcbiAgcHJvdmlkZXJzOiBbQ0hFQ0tCT1hfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgLyoqIFRydXRoeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xyXG4gIEBJbnB1dCgpIGJ0bkNoZWNrYm94VHJ1ZSA9IHRydWU7XHJcbiAgLyoqIEZhbHN5IHZhbHVlLCB3aWxsIGJlIHNldCB0byBuZ01vZGVsICovXHJcbiAgQElucHV0KCkgYnRuQ2hlY2tib3hGYWxzZSA9IGZhbHNlO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtcHJlc3NlZCcpXHJcbiAgc3RhdGUgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIHZhbHVlOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gIHByb3RlY3RlZCBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG5cclxuICBwcm90ZWN0ZWQgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcHJvdGVjdGVkIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgLy8gdmlldyAtPiBtb2RlbFxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50b2dnbGUoIXRoaXMuc3RhdGUpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy50b2dnbGUodGhpcy50cnVlVmFsdWUgPT09IHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldCB0cnVlVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hUcnVlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hUcnVlXHJcbiAgICAgIDogdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgZmFsc2VWYWx1ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlb2YgdGhpcy5idG5DaGVja2JveEZhbHNlICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICA/IHRoaXMuYnRuQ2hlY2tib3hGYWxzZVxyXG4gICAgICA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKHN0YXRlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5zdGF0ZSA/IHRoaXMudHJ1ZVZhbHVlIDogdGhpcy5mYWxzZVZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3JcclxuICAvLyBtb2RlbCAtPiB2aWV3XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbiB8IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RhdGUgPSB0aGlzLnRydWVWYWx1ZSA9PT0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG59XHJcbiJdfQ==