/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { initialDatepickerState } from './bs-datepicker.state';
import { BehaviorSubject } from 'rxjs';
import { bsDatepickerReducer } from './bs-datepicker.reducer';
export class BsDatepickerStore extends MiniStore {
    constructor() {
        const /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        const /** @type {?} */ state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
}
BsDatepickerStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerStore.ctorParameters = () => [];
function BsDatepickerStore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerStore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerStore.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBcUIsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlELE1BQU0sd0JBQXlCLFNBQVEsU0FBNEI7SUFDakU7UUFDRSx1QkFBTSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQVM7WUFDOUMsSUFBSSxFQUFFLDhCQUE4QjtTQUNyQyxDQUFDLENBQUM7UUFDSCx1QkFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQ3pCLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsbUJBQW1CLENBQ3BCLENBQUM7UUFDRixLQUFLLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2hEOzs7WUFaRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNaW5pU3RvcmUsIEFjdGlvbiwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdGF0ZSwgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdGF0ZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBic0RhdGVwaWNrZXJSZWR1Y2VyIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnJlZHVjZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8QnNEYXRlcGlja2VyU3RhdGU+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IF9kaXNwYXRjaGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBY3Rpb24+KHtcclxuICAgICAgdHlwZTogJ1tkYXRlcGlja2VyXSBkaXNwYXRjaGVyIGluaXQnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxCc0RhdGVwaWNrZXJTdGF0ZT4oXHJcbiAgICAgIGluaXRpYWxEYXRlcGlja2VyU3RhdGUsXHJcbiAgICAgIF9kaXNwYXRjaGVyLFxyXG4gICAgICBic0RhdGVwaWNrZXJSZWR1Y2VyXHJcbiAgICApO1xyXG4gICAgc3VwZXIoX2Rpc3BhdGNoZXIsIGJzRGF0ZXBpY2tlclJlZHVjZXIsIHN0YXRlKTtcclxuICB9XHJcbn1cclxuIl19