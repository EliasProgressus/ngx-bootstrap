/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { observeOn, scan } from 'rxjs/operators';
/**
 * @template T
 */
var /**
 * @template T
 */
MiniState = /** @class */ (function (_super) {
    tslib_1.__extends(MiniState, _super);
    function MiniState(_initialState, actionsDispatcher$, reducer) {
        var _this = _super.call(this, _initialState) || this;
        var /** @type {?} */ actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        var /** @type {?} */ state$ = actionInQueue$.pipe(scan(function (state, action) {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe(function (value) { return _this.next(value); });
        return _this;
    }
    return MiniState;
}(BehaviorSubject));
/**
 * @template T
 */
export { MiniState };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGVBQWUsRUFBYyxjQUFjLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUdqRDs7O0FBQUE7SUFBa0MscUNBQWtCO0lBQ2xELG1CQUNFLGFBQWdCLEVBQ2hCLGtCQUFzQyxFQUN0QyxPQUF5QjtRQUgzQixZQUtFLGtCQUFNLGFBQWEsQ0FBQyxTQWlCckI7UUFmQyxxQkFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUM1QyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQzFCLENBQUM7UUFDRixxQkFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FDaEMsSUFBSSxDQUFDLFVBQUMsS0FBUSxFQUFFLE1BQWM7WUFDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNaLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDZDtZQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9CLEVBQ0QsYUFBYSxDQUNkLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxLQUFRLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7O0tBQ2xEO29CQS9CSDtFQVFrQyxlQUFlLEVBd0JoRCxDQUFBOzs7O0FBeEJELHFCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAY29weXJpZ2h0IG5ncnhcclxuICovXHJcbmltcG9ydCB7IEFjdGlvbiwgQWN0aW9uUmVkdWNlciB9IGZyb20gJy4vaW5kZXgnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG9ic2VydmVPbiwgc2NhbiB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgTWluaVN0YXRlPFQ+IGV4dGVuZHMgQmVoYXZpb3JTdWJqZWN0PFQ+IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9pbml0aWFsU3RhdGU6IFQsXHJcbiAgICBhY3Rpb25zRGlzcGF0Y2hlciQ6IE9ic2VydmFibGU8QWN0aW9uPixcclxuICAgIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8VD5cclxuICApIHtcclxuICAgIHN1cGVyKF9pbml0aWFsU3RhdGUpO1xyXG5cclxuICAgIGNvbnN0IGFjdGlvbkluUXVldWUkID0gYWN0aW9uc0Rpc3BhdGNoZXIkLnBpcGUoXHJcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlcilcclxuICAgICk7XHJcbiAgICBjb25zdCBzdGF0ZSQgPSBhY3Rpb25JblF1ZXVlJC5waXBlKFxyXG4gICAgICBzY2FuKChzdGF0ZTogVCwgYWN0aW9uOiBBY3Rpb24pID0+IHtcclxuICAgICAgICBpZiAoIWFjdGlvbikge1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgIH0sXHJcbiAgICAgIF9pbml0aWFsU3RhdGVcclxuICAgICkpO1xyXG5cclxuICAgIHN0YXRlJC5zdWJzY3JpYmUoKHZhbHVlOiBUKSA9PiB0aGlzLm5leHQodmFsdWUpKTtcclxuICB9XHJcbn1cclxuIl19