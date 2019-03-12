/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { BsDropdownDirective } from './bs-dropdown.directive';
export class BsDropdownToggleDirective {
    /**
     * @param {?} _state
     * @param {?} _element
     * @param {?} dropdown
     */
    constructor(_state, _element, dropdown) {
        this._state = _state;
        this._element = _element;
        this.dropdown = dropdown;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state.isOpenChange.subscribe((value) => (this.isOpen = value)));
        // populate disabled state
        this._subscriptions.push(this._state.isDisabledChange.subscribe((value) => (this.isDisabled = value || null)));
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit(true);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDocumentClick(event) {
        if (this._state.autoClose &&
            event.button !== 2 &&
            !this._element.nativeElement.contains(event.target) &&
            !(this._state.insideClick && this.dropdown._contains(event))) {
            this._state.toggleClick.emit(false);
        }
    }
    /**
     * @return {?}
     */
    onEsc() {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const /** @type {?} */ sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle',
                host: {
                    '[attr.aria-haspopup]': 'true'
                }
            },] }
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = () => [
    { type: BsDropdownState, },
    { type: ElementRef, },
    { type: BsDropdownDirective, },
];
BsDropdownToggleDirective.propDecorators = {
    "isDisabled": [{ type: HostBinding, args: ['attr.disabled',] },],
    "isOpen": [{ type: HostBinding, args: ['attr.aria-expanded',] },],
    "onClick": [{ type: HostListener, args: ['click', [],] },],
    "onDocumentClick": [{ type: HostListener, args: ['document:click', ['$event'],] },],
    "onEsc": [{ type: HostListener, args: ['keyup.esc',] },],
};
function BsDropdownToggleDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownToggleDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownToggleDirective.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsDropdownToggleDirective.propDecorators;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isDisabled;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.isOpen;
    /** @type {?} */
    BsDropdownToggleDirective.prototype._subscriptions;
    /** @type {?} */
    BsDropdownToggleDirective.prototype._state;
    /** @type {?} */
    BsDropdownToggleDirective.prototype._element;
    /** @type {?} */
    BsDropdownToggleDirective.prototype.dropdown;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZHJvcGRvd24vIiwic291cmNlcyI6WyJicy1kcm9wZG93bi10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQVM5RCxNQUFNOzs7Ozs7SUFRSixZQUFvQixNQUF1QixFQUFVLFFBQW9CLEVBQVUsUUFBNkI7UUFBNUYsV0FBTSxHQUFOLE1BQU0sQ0FBaUI7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBcUI7MEJBUDVELElBQUk7OEJBS2YsRUFBRTs7UUFJekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FDaEMsQ0FBQyxLQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FDMUMsQ0FDRixDQUFDOztRQUVGLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FDcEMsQ0FBQyxLQUFjLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLENBQ3RELENBQ0YsQ0FBQztLQUNIOzs7O0lBR0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQztTQUNSO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzs7Ozs7SUFJckMsZUFBZSxDQUFDLEtBQWlCO1FBQy9CLEVBQUUsQ0FBQyxDQUNELElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUztZQUNyQixLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDbEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQzdELENBQUMsQ0FBQyxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OztJQUlILEtBQUs7UUFDSCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JDOzs7OztJQUdILFdBQVc7UUFDVCxHQUFHLENBQUMsQ0FBQyx1QkFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ25CO0tBQ0Y7OztZQTdERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFDQUFxQztnQkFDL0MsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsSUFBSSxFQUFFO29CQUNKLHNCQUFzQixFQUFFLE1BQU07aUJBQy9CO2FBQ0Y7Ozs7WUFUUSxlQUFlO1lBUHRCLFVBQVU7WUFRSCxtQkFBbUI7OzsyQkFVekIsV0FBVyxTQUFDLGVBQWU7dUJBRzNCLFdBQVcsU0FBQyxvQkFBb0I7d0JBbUJoQyxZQUFZLFNBQUMsT0FBTyxFQUFFLEVBQUU7Z0NBUXhCLFlBQVksU0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkFZekMsWUFBWSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkRlc3Ryb3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuaW1wb3J0IHsgQnNEcm9wZG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uZGlyZWN0aXZlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzRHJvcGRvd25Ub2dnbGVdLFtkcm9wZG93blRvZ2dsZV0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtZHJvcGRvd24tdG9nZ2xlJyxcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIuYXJpYS1oYXNwb3B1cF0nOiAndHJ1ZSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKSBpc0Rpc2FibGVkOiBib29sZWFuID0gbnVsbDtcclxuXHJcbiAgLy8gQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWV4cGFuZGVkJykgaXNPcGVuOiBib29sZWFuO1xyXG5cclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGF0ZTogQnNEcm9wZG93blN0YXRlLCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIGRyb3Bkb3duOiBCc0Ryb3Bkb3duRGlyZWN0aXZlKSB7XHJcbiAgICAvLyBzeW5jIGlzIG9wZW4gdmFsdWUgd2l0aCBzdGF0ZVxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdGF0ZS5pc09wZW5DaGFuZ2Uuc3Vic2NyaWJlKFxyXG4gICAgICAgICh2YWx1ZTogYm9vbGVhbikgPT4gKHRoaXMuaXNPcGVuID0gdmFsdWUpXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgICAvLyBwb3B1bGF0ZSBkaXNhYmxlZCBzdGF0ZVxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9ucy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdGF0ZS5pc0Rpc2FibGVkQ2hhbmdlLnN1YnNjcmliZShcclxuICAgICAgICAodmFsdWU6IGJvb2xlYW4pID0+ICh0aGlzLmlzRGlzYWJsZWQgPSB2YWx1ZSB8fCBudWxsKVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbXSlcclxuICBvbkNsaWNrKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KHRydWUpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uRG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLl9zdGF0ZS5hdXRvQ2xvc2UgJiZcclxuICAgICAgZXZlbnQuYnV0dG9uICE9PSAyICYmXHJcbiAgICAgICF0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJlxyXG4gICAgICAhKHRoaXMuX3N0YXRlLmluc2lkZUNsaWNrICYmIHRoaXMuZHJvcGRvd24uX2NvbnRhaW5zKGV2ZW50KSlcclxuICAgICkge1xyXG4gICAgICB0aGlzLl9zdGF0ZS50b2dnbGVDbGljay5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleXVwLmVzYycpXHJcbiAgb25Fc2MoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fc3RhdGUuYXV0b0Nsb3NlKSB7XHJcbiAgICAgIHRoaXMuX3N0YXRlLnRvZ2dsZUNsaWNrLmVtaXQoZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=