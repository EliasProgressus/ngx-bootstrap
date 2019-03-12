/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { initialDatepickerState } from './bs-datepicker.state';
import { BehaviorSubject } from 'rxjs';
import { bsDatepickerReducer } from './bs-datepicker.reducer';
var BsDatepickerStore = /** @class */ (function (_super) {
    tslib_1.__extends(BsDatepickerStore, _super);
    function BsDatepickerStore() {
        var _this = this;
        var /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        var /** @type {?} */ state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
        return _this;
    }
    BsDatepickerStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BsDatepickerStore.ctorParameters = function () { return []; };
    return BsDatepickerStore;
}(MiniStore));
export { BsDatepickerStore };
function BsDatepickerStore_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerStore.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerStore.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQXFCLHNCQUFzQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUFHdkIsNkNBQTRCO0lBQ2pFO1FBQUEsaUJBVUM7UUFUQyxxQkFBTSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQVM7WUFDOUMsSUFBSSxFQUFFLDhCQUE4QjtTQUNyQyxDQUFDLENBQUM7UUFDSCxxQkFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQ3pCLHNCQUFzQixFQUN0QixXQUFXLEVBQ1gsbUJBQW1CLENBQ3BCLENBQUM7UUFDRixRQUFBLGtCQUFNLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLENBQUMsU0FBQzs7S0FDaEQ7O2dCQVpGLFVBQVU7Ozs7NEJBTlg7RUFPdUMsU0FBUztTQUFuQyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1pbmlTdG9yZSwgQWN0aW9uLCBNaW5pU3RhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0YXRlLCBpbml0aWFsRGF0ZXBpY2tlclN0YXRlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnN0YXRlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGJzRGF0ZXBpY2tlclJlZHVjZXIgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIucmVkdWNlcic7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJTdG9yZSBleHRlbmRzIE1pbmlTdG9yZTxCc0RhdGVwaWNrZXJTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgY29uc3QgX2Rpc3BhdGNoZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEFjdGlvbj4oe1xyXG4gICAgICB0eXBlOiAnW2RhdGVwaWNrZXJdIGRpc3BhdGNoZXIgaW5pdCdcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPEJzRGF0ZXBpY2tlclN0YXRlPihcclxuICAgICAgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSxcclxuICAgICAgX2Rpc3BhdGNoZXIsXHJcbiAgICAgIGJzRGF0ZXBpY2tlclJlZHVjZXJcclxuICAgICk7XHJcbiAgICBzdXBlcihfZGlzcGF0Y2hlciwgYnNEYXRlcGlja2VyUmVkdWNlciwgc3RhdGUpO1xyXG4gIH1cclxufVxyXG4iXX0=