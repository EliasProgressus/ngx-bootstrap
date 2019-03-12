import { BehaviorSubject, queueScheduler, Observable } from 'rxjs';
import { observeOn, scan, distinctUntilChanged, map } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class MiniState extends BehaviorSubject {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class MiniStore extends Observable {
    /**
     * @param {?} _dispatcher
     * @param {?} _reducer
     * @param {?} state$
     */
    constructor(_dispatcher, _reducer, /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    state$) {
        super();
        this._dispatcher = _dispatcher;
        this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        this.source = state$;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    select(pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        const /** @type {?} */ mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    }
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    lift(operator) {
        const /** @type {?} */ store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    }
    /**
     * @param {?} action
     * @return {?}
     */
    dispatch(action) {
        this._dispatcher.next(action);
    }
    /**
     * @param {?} action
     * @return {?}
     */
    next(action) {
        this._dispatcher.next(action);
    }
    /**
     * @param {?} err
     * @return {?}
     */
    error(err) {
        this._dispatcher.error(err);
    }
    /**
     * @return {?}
     */
    complete() {
        /*noop*/
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { MiniState, MiniStore };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1taW5pLW5ncnguanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvbWluaS1uZ3J4L3N0YXRlLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC9zdG9yZS5jbGFzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGNvcHlyaWdodCBuZ3J4XHJcbiAqL1xyXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlLCBxdWV1ZVNjaGVkdWxlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBvYnNlcnZlT24sIHNjYW4gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1pbmlTdGF0ZTxUPiBleHRlbmRzIEJlaGF2aW9yU3ViamVjdDxUPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfaW5pdGlhbFN0YXRlOiBULFxyXG4gICAgYWN0aW9uc0Rpc3BhdGNoZXIkOiBPYnNlcnZhYmxlPEFjdGlvbj4sXHJcbiAgICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQ+XHJcbiAgKSB7XHJcbiAgICBzdXBlcihfaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgICBjb25zdCBhY3Rpb25JblF1ZXVlJCA9IGFjdGlvbnNEaXNwYXRjaGVyJC5waXBlKFxyXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc3RhdGUkID0gYWN0aW9uSW5RdWV1ZSQucGlwZShcclxuICAgICAgc2Nhbigoc3RhdGU6IFQsIGFjdGlvbjogQWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYgKCFhY3Rpb24pIHtcclxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICB9LFxyXG4gICAgICBfaW5pdGlhbFN0YXRlXHJcbiAgICApKTtcclxuXHJcbiAgICBzdGF0ZSQuc3Vic2NyaWJlKCh2YWx1ZTogVCkgPT4gdGhpcy5uZXh0KHZhbHVlKSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBAY29weXJpZ2h0IG5ncnhcclxuICovXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5pU3RvcmU8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8QWN0aW9uPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgIHByaXZhdGUgX3JlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PixcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8YW55PlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICB0aGlzLnNvdXJjZSA9IHN0YXRlJDtcclxuICB9XHJcblxyXG4gIHNlbGVjdDxSPihwYXRoT3JNYXBGbjogKHN0YXRlOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICBjb25zdCBtYXBwZWQkOiBPYnNlcnZhYmxlPFI+ID0gdGhpcy5zb3VyY2UucGlwZShtYXAocGF0aE9yTWFwRm4pKTtcclxuXHJcbiAgICByZXR1cm4gbWFwcGVkJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xyXG4gIH1cclxuXHJcbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pOiBNaW5pU3RvcmU8Uj4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBuZXcgTWluaVN0b3JlPFI+KHRoaXMuX2Rpc3BhdGNoZXIsIHRoaXMuX3JlZHVjZXIsIHRoaXMpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgc3RvcmUub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xyXG4gICAgdGhpcy5fZGlzcGF0Y2hlci5uZXh0KGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZXh0KGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICB0aGlzLl9kaXNwYXRjaGVyLm5leHQoYWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgZXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIHRoaXMuX2Rpc3BhdGNoZXIuZXJyb3IoZXJyKTtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlKCkge1xyXG4gICAgLypub29wKi9cclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQTs7O0FBSUEsZUFBMEIsU0FBUSxlQUFrQjs7Ozs7O0lBQ2xELFlBQ0UsYUFBZ0IsRUFDaEIsa0JBQXNDLEVBQ3RDLE9BQXlCO1FBRXpCLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVyQix1QkFBTSxjQUFjLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUM1QyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQzFCLENBQUM7UUFDRix1QkFBTSxNQUFNLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FDaEMsSUFBSSxDQUFDLENBQUMsS0FBUSxFQUFFLE1BQWM7WUFDNUIsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWCxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQy9CLEVBQ0QsYUFBYSxDQUNkLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFRLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ2xEO0NBQ0Y7Ozs7OztBQzdCRDs7O0FBSUEsZUFBMEIsU0FBUSxVQUFhOzs7Ozs7SUFDN0MsWUFDVSxhQUVBOztJQUVSLE1BQXVCO1FBRXZCLEtBQUssRUFBRSxDQUFDO1FBTkEsZ0JBQVcsR0FBWCxXQUFXO1FBRVgsYUFBUSxHQUFSLFFBQVE7O1FBT2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0tBQ3RCOzs7Ozs7SUFFRCxNQUFNLENBQUksV0FBNEI7O1FBRXBDLHVCQUFNLE9BQU8sR0FBa0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFbEUsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUM3Qzs7Ozs7O0lBRUQsSUFBSSxDQUFJLFFBQXdCO1FBQzlCLHVCQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FBSSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7O1FBRXRFLEtBQUssQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRTFCLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBRUQsSUFBSSxDQUFDLE1BQWM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQVE7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3Qjs7OztJQUVELFFBQVE7O0tBRVA7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7In0=