/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
export class BsDropdownMenuDirective {
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] }
];
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState, },
    { type: ViewContainerRef, },
    { type: TemplateRef, },
];
function BsDropdownMenuDirective_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownMenuDirective.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownMenuDirective.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQU10RCxNQUFNOzs7Ozs7SUFFSixZQUNFLE1BQXVCLEVBQ3ZCLGNBQWdDLEVBQ2hDLFlBQThCO1FBRTlCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUN6QixXQUFXLEVBQUUsWUFBWTtZQUN6QixhQUFhLEVBQUUsY0FBYztTQUM5QixDQUFDLENBQUM7S0FDSjs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7Z0JBQzNDLFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs7WUFMUSxlQUFlO1lBRFMsZ0JBQWdCO1lBQTdCLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzRHJvcGRvd25TdGF0ZSB9IGZyb20gJy4vYnMtZHJvcGRvd24uc3RhdGUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnNEcm9wZG93bk1lbnVdLFtkcm9wZG93bk1lbnVdJyxcclxuICBleHBvcnRBczogJ2JzLWRyb3Bkb3duLW1lbnUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfc3RhdGU6IEJzRHJvcGRvd25TdGF0ZSxcclxuICAgIF92aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+XHJcbiAgKSB7XHJcbiAgICBfc3RhdGUucmVzb2x2ZURyb3Bkb3duTWVudSh7XHJcbiAgICAgIHRlbXBsYXRlUmVmOiBfdGVtcGxhdGVSZWYsXHJcbiAgICAgIHZpZXdDb250YWluZXI6IF92aWV3Q29udGFpbmVyXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19