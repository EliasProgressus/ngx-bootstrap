/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
/**
 * @template T
 */
var /**
 * @template T
 */
MiniStore = /** @class */ (function (_super) {
    tslib_1.__extends(MiniStore, _super);
    function MiniStore(_dispatcher, _reducer, /* tslint:disable-next-line: no-any */
    /* tslint:disable-next-line: no-any */
    state$) {
        var _this = _super.call(this) || this;
        _this._dispatcher = _dispatcher;
        _this._reducer = _reducer;
        /* tslint:disable-next-line: deprecation */
        /* tslint:disable-next-line: deprecation */
        _this.source = state$;
        return _this;
    }
    /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    MiniStore.prototype.select = /**
     * @template R
     * @param {?} pathOrMapFn
     * @return {?}
     */
    function (pathOrMapFn) {
        /* tslint:disable-next-line: deprecation */
        var /** @type {?} */ mapped$ = this.source.pipe(map(pathOrMapFn));
        return mapped$.pipe(distinctUntilChanged());
    };
    /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    MiniStore.prototype.lift = /**
     * @template R
     * @param {?} operator
     * @return {?}
     */
    function (operator) {
        var /** @type {?} */ store = new MiniStore(this._dispatcher, this._reducer, this);
        /* tslint:disable-next-line: deprecation */
        store.operator = operator;
        return store;
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.dispatch = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /**
     * @param {?} action
     * @return {?}
     */
    MiniStore.prototype.next = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        this._dispatcher.next(action);
    };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} err
     * @return {?}
     */
    MiniStore.prototype.error = /**
     * @param {?} err
     * @return {?}
     */
    function (err) {
        this._dispatcher.error(err);
    };
    /**
     * @return {?}
     */
    MiniStore.prototype.complete = /**
     * @return {?}
     */
    function () {
        /*noop*/
    };
    return MiniStore;
}(Observable));
/**
 * @template T
 */
export { MiniStore };
function MiniStore_tsickle_Closure_declarations() {
    /** @type {?} */
    MiniStore.prototype._dispatcher;
    /** @type {?} */
    MiniStore.prototype._reducer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL21pbmktbmdyeC8iLCJzb3VyY2VzIjpbInN0b3JlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFFLFVBQVUsRUFBc0IsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzNEOzs7QUFBQTtJQUFrQyxxQ0FBYTtJQUM3QyxtQkFDVSxhQUVBO0lBRVIsQUFEQSxzQ0FBc0M7SUFDdEMsTUFBdUI7UUFMekIsWUFPRSxpQkFBTyxTQUlSO1FBVlMsaUJBQVcsR0FBWCxXQUFXO1FBRVgsY0FBUSxHQUFSLFFBQVE7O1FBT2hCLEFBREEsMkNBQTJDO1FBQzNDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztLQUN0Qjs7Ozs7O0lBRUQsMEJBQU07Ozs7O0lBQU4sVUFBVSxXQUE0Qjs7UUFFcEMscUJBQU0sT0FBTyxHQUFrQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUVsRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FDN0M7Ozs7OztJQUVELHdCQUFJOzs7OztJQUFKLFVBQVEsUUFBd0I7UUFDOUIscUJBQU0sS0FBSyxHQUFHLElBQUksU0FBUyxDQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQzs7UUFFdEUsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFMUIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7OztJQUVELDRCQUFROzs7O0lBQVIsVUFBUyxNQUFjO1FBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVELHdCQUFJOzs7O0lBQUosVUFBSyxNQUFjO1FBQ2pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO0lBRUQsc0NBQXNDOzs7OztJQUN0Qyx5QkFBSzs7OztJQUFMLFVBQU0sR0FBUTtRQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzdCOzs7O0lBRUQsNEJBQVE7OztJQUFSOztLQUVDO29CQW5ESDtFQU9rQyxVQUFVLEVBNkMzQyxDQUFBOzs7O0FBN0NELHFCQTZDQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAY29weXJpZ2h0IG5ncnhcclxuICovXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIE9ic2VydmVyLCBPcGVyYXRvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBBY3Rpb24sIEFjdGlvblJlZHVjZXIgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNaW5pU3RvcmU8VD4gZXh0ZW5kcyBPYnNlcnZhYmxlPFQ+IGltcGxlbWVudHMgT2JzZXJ2ZXI8QWN0aW9uPiB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9kaXNwYXRjaGVyOiBPYnNlcnZlcjxBY3Rpb24+LFxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgIHByaXZhdGUgX3JlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PixcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICBzdGF0ZSQ6IE9ic2VydmFibGU8YW55PlxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICB0aGlzLnNvdXJjZSA9IHN0YXRlJDtcclxuICB9XHJcblxyXG4gIHNlbGVjdDxSPihwYXRoT3JNYXBGbjogKHN0YXRlOiBUKSA9PiBSKTogT2JzZXJ2YWJsZTxSPiB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICBjb25zdCBtYXBwZWQkOiBPYnNlcnZhYmxlPFI+ID0gdGhpcy5zb3VyY2UucGlwZShtYXAocGF0aE9yTWFwRm4pKTtcclxuXHJcbiAgICByZXR1cm4gbWFwcGVkJC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xyXG4gIH1cclxuXHJcbiAgbGlmdDxSPihvcGVyYXRvcjogT3BlcmF0b3I8VCwgUj4pOiBNaW5pU3RvcmU8Uj4ge1xyXG4gICAgY29uc3Qgc3RvcmUgPSBuZXcgTWluaVN0b3JlPFI+KHRoaXMuX2Rpc3BhdGNoZXIsIHRoaXMuX3JlZHVjZXIsIHRoaXMpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgc3RvcmUub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfVxyXG5cclxuICBkaXNwYXRjaChhY3Rpb246IEFjdGlvbikge1xyXG4gICAgdGhpcy5fZGlzcGF0Y2hlci5uZXh0KGFjdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZXh0KGFjdGlvbjogQWN0aW9uKSB7XHJcbiAgICB0aGlzLl9kaXNwYXRjaGVyLm5leHQoYWN0aW9uKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgZXJyb3IoZXJyOiBhbnkpIHtcclxuICAgIHRoaXMuX2Rpc3BhdGNoZXIuZXJyb3IoZXJyKTtcclxuICB9XHJcblxyXG4gIGNvbXBsZXRlKCkge1xyXG4gICAgLypub29wKi9cclxuICB9XHJcbn1cclxuIl19