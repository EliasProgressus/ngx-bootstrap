/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { BehaviorSubject, queueScheduler } from 'rxjs';
import { observeOn, scan } from 'rxjs/operators';
/**
 * @template T
 */
export class MiniState extends BehaviorSubject {
    /**
     * @param {?} _initialState
     * @param {?} actionsDispatcher$
     * @param {?} reducer
     */
    constructor(_initialState, actionsDispatcher$, reducer) {
        super(_initialState);
        const /** @type {?} */ actionInQueue$ = actionsDispatcher$.pipe(observeOn(queueScheduler));
        const /** @type {?} */ state$ = actionInQueue$.pipe(scan((state, action) => {
            if (!action) {
                return state;
            }
            return reducer(state, action);
        }, _initialState));
        state$.subscribe((value) => this.next(value));
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFJQSxPQUFPLEVBQUUsZUFBZSxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBR2pELE1BQU0sZ0JBQW9CLFNBQVEsZUFBa0I7Ozs7OztJQUNsRCxZQUNFLGFBQWdCLEVBQ2hCLGtCQUFzQyxFQUN0QyxPQUF5QjtRQUV6QixLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckIsdUJBQU0sY0FBYyxHQUFHLGtCQUFrQixDQUFDLElBQUksQ0FDNUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUMxQixDQUFDO1FBQ0YsdUJBQU0sTUFBTSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQ2hDLElBQUksQ0FBQyxDQUFDLEtBQVEsRUFBRSxNQUFjLEVBQUUsRUFBRTtZQUNoQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQzthQUNkO1lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDL0IsRUFDRCxhQUFhLENBQ2QsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGNvcHlyaWdodCBuZ3J4XHJcbiAqL1xyXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBxdWV1ZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBvYnNlcnZlT24sIHNjYW4gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmlTdGF0ZTxUPiBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxUPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfaW5pdGlhbFN0YXRlOiBULFxyXG4gICAgYWN0aW9uc0Rpc3BhdGNoZXIkOiBPYnNlcnZhYmxlPEFjdGlvbj4sXHJcbiAgICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQ+XHJcbiAgKSB7XHJcbiAgICBzdXBlcihfaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25JblF1ZXVlJCA9IGFjdGlvbnNEaXNwYXRjaGVyJC5waXBlKFxyXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhdGUkID0gYWN0aW9uSW5RdWV1ZSQucGlwZShcclxuICAgICAgc2Nhbigoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICB9LFxyXG4gICAgICBfaW5pdGlhbFN0YXRlXHJcbiAgICApKTtcclxuXHJcbiAgICBzdGF0ZSQuc3Vic2NyaWJlKCh2YWx1ZTogVCkgPT4gdGhpcy5uZXh0KHZhbHVlKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==