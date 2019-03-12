/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, forwardRef, HostBinding, HostListener, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
// TODO: config: activeClass - Class to apply to the checked buttons
export const /** @type {?} */ CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
export class ButtonCheckboxDirective {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWNoZWNrYm94LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvYnV0dG9ucy8iLCJzb3VyY2VzIjpbImJ1dHRvbi1jaGVja2JveC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFHekUsTUFBTSxDQUFDLHVCQUFNLCtCQUErQixHQUFhO0lBQ3ZELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUM7SUFDdEQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDOzs7O0FBU0YsTUFBTTs7Ozs7K0JBRXVCLElBQUk7Ozs7Z0NBRUgsS0FBSztxQkFJekIsS0FBSzt3QkFLUSxRQUFRLENBQUMsU0FBUzt5QkFDakIsUUFBUSxDQUFDLFNBQVM7Ozs7O0lBSXhDLE9BQU87UUFDTCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Ozs7O0lBRzVCLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsSUFBYyxTQUFTO1FBQ3JCLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssV0FBVztZQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNWOzs7O0lBRUQsSUFBYyxVQUFVO1FBQ3RCLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZCLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDWDs7Ozs7SUFFRCxNQUFNLENBQUMsS0FBYztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDNUQ7Ozs7O0lBSUQsVUFBVSxDQUFDLEtBQThCO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxLQUFLLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDdkQ7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsRUFBWTtRQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxFQUFZO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQzthQUM3Qzs7OztnQ0FHRSxLQUFLO2lDQUVMLEtBQUs7c0JBRUwsV0FBVyxTQUFDLGNBQWMsY0FDMUIsV0FBVyxTQUFDLG1CQUFtQjt3QkFVL0IsWUFBWSxTQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTpuby11c2UtYmVmb3JlLWRlY2xhcmVcclxuaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0QmluZGluZyxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFByb3ZpZGVyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbi8vIFRPRE86IGNvbmZpZzogYWN0aXZlQ2xhc3MgLSBDbGFzcyB0byBhcHBseSB0byB0aGUgY2hlY2tlZCBidXR0b25zXHJcbmV4cG9ydCBjb25zdCBDSEVDS0JPWF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJ1dHRvbkNoZWNrYm94RGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEFkZCBjaGVja2JveCBmdW5jdGlvbmFsaXR5IHRvIGFueSBlbGVtZW50XHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tidG5DaGVja2JveF0nLFxyXG4gIHByb3ZpZGVyczogW0NIRUNLQk9YX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25DaGVja2JveERpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIC8qKiBUcnV0aHkgdmFsdWUsIHdpbGwgYmUgc2V0IHRvIG5nTW9kZWwgKi9cclxuICBASW5wdXQoKSBidG5DaGVja2JveFRydWUgPSB0cnVlO1xyXG4gIC8qKiBGYWxzeSB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gbmdNb2RlbCAqL1xyXG4gIEBJbnB1dCgpIGJ0bkNoZWNrYm94RmFsc2UgPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXByZXNzZWQnKVxyXG4gIHN0YXRlID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCB2YWx1ZTogYm9vbGVhbiB8IHN0cmluZztcclxuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuXHJcbiAgcHJvdGVjdGVkIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIHByb3RlY3RlZCBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIC8vIHZpZXcgLT4gbW9kZWxcclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG9nZ2xlKCF0aGlzLnN0YXRlKTtcclxuICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlKHRoaXMudHJ1ZVZhbHVlID09PSB0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXQgdHJ1ZVZhbHVlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLmJ0bkNoZWNrYm94VHJ1ZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyB0aGlzLmJ0bkNoZWNrYm94VHJ1ZVxyXG4gICAgICA6IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0IGZhbHNlVmFsdWUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMuYnRuQ2hlY2tib3hGYWxzZSAhPT0gJ3VuZGVmaW5lZCdcclxuICAgICAgPyB0aGlzLmJ0bkNoZWNrYm94RmFsc2VcclxuICAgICAgOiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZShzdGF0ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuc3RhdGUgPyB0aGlzLnRydWVWYWx1ZSA6IHRoaXMuZmFsc2VWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yXHJcbiAgLy8gbW9kZWwgLT4gdmlld1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4gfCBzdHJpbmcgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0YXRlID0gdGhpcy50cnVlVmFsdWUgPT09IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlID8gdGhpcy50cnVlVmFsdWUgOiB0aGlzLmZhbHNlVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxufVxyXG4iXX0=