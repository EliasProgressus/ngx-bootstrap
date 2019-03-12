/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
/**
 * @template T
 */
export class MiniStore extends Observable {
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
function MiniStore_tsickle_Closure_declarations() {
    /** @type {?} */
    MiniStore.prototype._dispatcher;
    /** @type {?} */
    MiniStore.prototype._reducer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0b3JlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsVUFBVSxFQUFzQixNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHM0QsTUFBTSxnQkFBb0IsU0FBUSxVQUFhOzs7Ozs7SUFDN0MsWUFDVSxhQUVBO0lBRVIsQUFEQSxzQ0FBc0M7SUFDdEMsTUFBdUI7UUFFdkIsS0FBSyxFQUFFLENBQUM7UUFOQSxnQkFBVyxHQUFYLFdBQVc7UUFFWCxhQUFRLEdBQVIsUUFBUTs7UUFPaEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7S0FDdEI7Ozs7OztJQUVELE1BQU0sQ0FBSSxXQUE0Qjs7UUFFcEMsdUJBQU0sT0FBTyxHQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FDN0M7Ozs7OztJQUVELElBQUksQ0FBSSxRQUF3QjtRQUM5Qix1QkFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDOztRQUV0RSxLQUFLLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUUxQixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQWM7UUFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBRUQsSUFBSSxDQUFDLE1BQWM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQVE7UUFDWixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUM3Qjs7OztJQUVELFFBQVE7O0tBRVA7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAY29weXJpZ2h0IG5ncnhcclxuICovXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5pU3RvcmU8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8QWN0aW9uPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgIHByaXZhdGUgX3JlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PixcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8YW55PlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICB0aGlzLnNvdXJjZSA9IHN0YXRlJDtcclxuICB9XHJcblxyXG4gIHNlbGVjdDxSPihwYXRoT3JNYXBGbjogKHN0YXRlOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICBjb25zdCBtYXBwZWQkOiBPYnNlcnZhYmxlPFI+ID0gdGhpcy5zb3VyY2UucGlwZShtYXAocGF0aE9yTWFwRm4pKTtcclxuXHJcbiAgICByZXR1cm4gbWFwcGVkJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xyXG4gIH1cclxuXHJcbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pOiBNaW5pU3RvcmU8Uj4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBuZXcgTWluaVN0b3JlPFI+KHRoaXMuX2Rpc3BhdGNoZXIsIHRoaXMuX3JlZHVjZXIsIHRoaXMpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgc3RvcmUub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xyXG4gICAgdGhpcy5fZGlzcGF0Y2hlci5uZXh0KGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZXh0KGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICB0aGlzLl9kaXNwYXRjaGVyLm5leHQoYWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgZXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIHRoaXMuX2Rpc3BhdGNoZXIuZXJyb3IoZXJyKTtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlKCkge1xyXG4gICAgLypub29wKi9cclxuICB9XHJcbn1cclxuIl19