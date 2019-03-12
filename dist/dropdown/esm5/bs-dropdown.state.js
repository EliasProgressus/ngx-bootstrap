/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter, Injectable } from '@angular/core';
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());
export { BsDropdownState };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24uc3RhdGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Ryb3Bkb3duLyIsInNvdXJjZXMiOlsiYnMtZHJvcGRvd24uc3RhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQW1CdkQ7UUFBQSxpQkFJQzt5QkFsQjBCLE1BQU07NEJBR2xCLElBQUksWUFBWSxFQUFXO2dDQUN2QixJQUFJLFlBQVksRUFBVzsyQkFDaEMsSUFBSSxZQUFZLEVBQVc7UUFVdkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU87WUFDckMsS0FBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztTQUNwQyxDQUFDLENBQUM7S0FDSjs7Z0JBcEJGLFVBQVU7Ozs7MEJBSFg7O1NBSWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0NvbXBvbmVudFJlZiB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0Ryb3Bkb3duU3RhdGUge1xyXG4gIGRpcmVjdGlvbjogJ2Rvd24nIHwgJ3VwJyA9ICdkb3duJztcclxuICBhdXRvQ2xvc2U6IGJvb2xlYW47XHJcbiAgaW5zaWRlQ2xpY2s6IGJvb2xlYW47XHJcbiAgaXNPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIGlzRGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgdG9nZ2xlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgdG8gYmUgZGlzcGxheWVkIGFzIHBvcG92ZXIuXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcbiAgZHJvcGRvd25NZW51OiBQcm9taXNlPEJzQ29tcG9uZW50UmVmPGFueT4+O1xyXG4gIHJlc29sdmVEcm9wZG93bk1lbnU6IChjb21wb25lbnRSZWY6IEJzQ29tcG9uZW50UmVmPGFueT4pID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5kcm9wZG93bk1lbnUgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgdGhpcy5yZXNvbHZlRHJvcGRvd25NZW51ID0gcmVzb2x2ZTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=