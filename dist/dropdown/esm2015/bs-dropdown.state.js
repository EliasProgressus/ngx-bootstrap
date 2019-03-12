/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
export class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(resolve => {
            this.resolveDropdownMenu = resolve;
        });
    }
}
BsDropdownState.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDropdownState.ctorParameters = () => [];
function BsDropdownState_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDropdownState.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDropdownState.ctorParameters;
    /** @type {?} */
    BsDropdownState.prototype.direction;
    /** @type {?} */
    BsDropdownState.prototype.autoClose;
    /** @type {?} */
    BsDropdownState.prototype.insideClick;
    /** @type {?} */
    BsDropdownState.prototype.isOpenChange;
    /** @type {?} */
    BsDropdownState.prototype.isDisabledChange;
    /** @type {?} */
    BsDropdownState.prototype.toggleClick;
    /**
     * Content to be displayed as popover.
     * @type {?}
     */
    BsDropdownState.prototype.dropdownMenu;
    /** @type {?} */
    BsDropdownState.prototype.resolveDropdownMenu;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24uc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiYnMtZHJvcGRvd24uc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpELE1BQU07SUFlSjt5QkFkMkIsTUFBTTs0QkFHbEIsSUFBSSxZQUFZLEVBQVc7Z0NBQ3ZCLElBQUksWUFBWSxFQUFXOzJCQUNoQyxJQUFJLFlBQVksRUFBVztRQVV2QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0tBQ0o7OztZQXBCRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzQ29tcG9uZW50UmVmIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRHJvcGRvd25TdGF0ZSB7XHJcbiAgZGlyZWN0aW9uOiAnZG93bicgfCAndXAnID0gJ2Rvd24nO1xyXG4gIGF1dG9DbG9zZTogYm9vbGVhbjtcclxuICBpbnNpZGVDbGljazogYm9vbGVhbjtcclxuICBpc09wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgaXNEaXNhYmxlZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICB0b2dnbGVDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udGVudCB0byBiZSBkaXNwbGF5ZWQgYXMgcG9wb3Zlci5cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcclxuICBkcm9wZG93bk1lbnU6IFByb21pc2U8QnNDb21wb25lbnRSZWY8YW55Pj47XHJcbiAgcmVzb2x2ZURyb3Bkb3duTWVudTogKGNvbXBvbmVudFJlZjogQnNDb21wb25lbnRSZWY8YW55PikgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmRyb3Bkb3duTWVudSA9IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmVEcm9wZG93bk1lbnUgPSByZXNvbHZlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==