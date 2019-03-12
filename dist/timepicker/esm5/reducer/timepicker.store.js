/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { timepickerReducer, initialState } from './timepicker.reducer';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
var TimepickerStore = /** @class */ (function (_super) {
    tslib_1.__extends(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        var /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        var /** @type {?} */ state = new MiniState(initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(MiniStore));
export { TimepickerStore };
function TimepickerStore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimepickerStore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimepickerStore.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixZQUFZLEVBQ2IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBVSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBR2xDLDJDQUEwQjtJQUM3RDtRQUFBLGlCQVVDO1FBVEMscUJBQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFTO1lBQzlDLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsQ0FBQyxDQUFDO1FBQ0gscUJBQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUN6QixZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixDQUNsQixDQUFDO1FBQ0YsUUFBQSxrQkFBTSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLFNBQUM7O0tBQzlDOztnQkFaRixVQUFVOzs7OzBCQVZYO0VBV3FDLFNBQVM7U0FBakMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICB0aW1lcGlja2VyUmVkdWNlcixcclxuICBUaW1lcGlja2VyU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlXHJcbn0gZnJvbSAnLi90aW1lcGlja2VyLnJlZHVjZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFjdGlvbiwgTWluaVN0b3JlLCBNaW5pU3RhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8VGltZXBpY2tlclN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBfZGlzcGF0Y2hlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWN0aW9uPih7XHJcbiAgICAgIHR5cGU6ICdbbWluaS1uZ3J4XSBkaXNwYXRjaGVyIGluaXQnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxUaW1lcGlja2VyU3RhdGU+KFxyXG4gICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgIF9kaXNwYXRjaGVyLFxyXG4gICAgICB0aW1lcGlja2VyUmVkdWNlclxyXG4gICAgKTtcclxuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCB0aW1lcGlja2VyUmVkdWNlciwgc3RhdGUpO1xyXG4gIH1cclxufVxyXG4iXX0=