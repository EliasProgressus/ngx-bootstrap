/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { timepickerReducer, initialState } from './timepicker.reducer';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
export class TimepickerStore extends MiniStore {
    constructor() {
        const /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        const /** @type {?} */ state = new MiniState(initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TimepickerStore.ctorParameters = () => [];
function TimepickerStore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimepickerStore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimepickerStore.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsaUJBQWlCLEVBRWpCLFlBQVksRUFDYixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFVLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUd2RSxNQUFNLHNCQUF1QixTQUFRLFNBQTBCO0lBQzdEO1FBQ0UsdUJBQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFTO1lBQzlDLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsQ0FBQyxDQUFDO1FBQ0gsdUJBQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUN6QixZQUFZLEVBQ1osV0FBVyxFQUNYLGlCQUFpQixDQUNsQixDQUFDO1FBQ0YsS0FBSyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM5Qzs7O1lBWkYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICB0aW1lcGlja2VyUmVkdWNlcixcclxuICBUaW1lcGlja2VyU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlXHJcbn0gZnJvbSAnLi90aW1lcGlja2VyLnJlZHVjZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFjdGlvbiwgTWluaVN0b3JlLCBNaW5pU3RhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8VGltZXBpY2tlclN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBfZGlzcGF0Y2hlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWN0aW9uPih7XHJcbiAgICAgIHR5cGU6ICdbbWluaS1uZ3J4XSBkaXNwYXRjaGVyIGluaXQnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxUaW1lcGlja2VyU3RhdGU+KFxyXG4gICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgIF9kaXNwYXRjaGVyLFxyXG4gICAgICB0aW1lcGlja2VyUmVkdWNlclxyXG4gICAgKTtcclxuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCB0aW1lcGlja2VyUmVkdWNlciwgc3RhdGUpO1xyXG4gIH1cclxufVxyXG4iXX0=