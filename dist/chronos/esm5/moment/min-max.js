/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isArray, isDateValid } from '../utils/type-checks';
import { isAfter, isBefore } from '../utils/date-compare';
/**
 * @param {?} fn
 * @param {?} dates
 * @return {?}
 */
function pickBy(fn, dates) {
    var /** @type {?} */ _dates;
    var /** @type {?} */ _firstArg = dates[0];
    if (isArray(_firstArg) && dates.length === 1) {
        _dates = _firstArg;
    }
    else if (isArray(dates)) {
        _dates = dates;
    }
    if (!_dates || !_dates.length) {
        return new Date();
    }
    var /** @type {?} */ res = _dates[0];
    for (var /** @type {?} */ i = 1; i < _dates.length; ++i) {
        // if (!moments[i].isValid() || moments[i][fn](res)) {
        if (!isDateValid(_dates[i]) || fn.call(null, _dates[i], res)) {
            res = _dates[i];
        }
    }
    return res;
}
/**
 * @param {...?} args
 * @return {?}
 */
export function min() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // const args = [].slice.call(arguments, 0);
    return pickBy(isBefore, args);
}
/**
 * @param {...?} args
 * @return {?}
 */
export function max() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // const args = [].slice.call(arguments, 0);
    return pickBy(isAfter, args);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLW1heC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9taW4tbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUUxRCxnQkFBZ0IsRUFBWSxFQUFFLEtBQXdCO0lBQ3BELHFCQUFJLE1BQWMsQ0FBQztJQUNuQixxQkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLFNBQVMsQ0FBQztLQUNwQjtJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0tBQ25CO0lBQ0QscUJBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7O1FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNaOzs7OztBQUdELE1BQU07SUFBYyxjQUFlO1NBQWYsVUFBZSxFQUFmLHFCQUFlLEVBQWYsSUFBZTtRQUFmLHlCQUFlOzs7SUFHakMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDL0I7Ozs7O0FBRUQsTUFBTTtJQUFjLGNBQWU7U0FBZixVQUFlLEVBQWYscUJBQWUsRUFBZixJQUFlO1FBQWYseUJBQWU7OztJQUdqQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFBpY2sgYSBtb21lbnQgbSBmcm9tIG1vbWVudHMgc28gdGhhdCBtW2ZuXShvdGhlcikgaXMgdHJ1ZSBmb3IgYWxsXHJcbi8vIG90aGVyLiBUaGlzIHJlbGllcyBvbiB0aGUgZnVuY3Rpb24gZm4gdG8gYmUgdHJhbnNpdGl2ZS5cclxuLy9cclxuLy8gbW9tZW50cyBzaG91bGQgZWl0aGVyIGJlIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzIG9yIGFuIGFycmF5LCB3aG9zZVxyXG4vLyBmaXJzdCBlbGVtZW50IGlzIGFuIGFycmF5IG9mIG1vbWVudCBvYmplY3RzLlxyXG5pbXBvcnQgeyBpc0FycmF5LCBpc0RhdGVWYWxpZCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUgfSBmcm9tICcuLi91dGlscy9kYXRlLWNvbXBhcmUnO1xyXG5cclxuZnVuY3Rpb24gcGlja0J5KGZuOiBGdW5jdGlvbiwgZGF0ZXM6IERhdGVbXSB8IERhdGVbXVtdKTogRGF0ZSB7XHJcbiAgbGV0IF9kYXRlczogRGF0ZVtdO1xyXG4gIGNvbnN0IF9maXJzdEFyZyA9IGRhdGVzWzBdO1xyXG4gIGlmIChpc0FycmF5PERhdGU+KF9maXJzdEFyZykgJiYgZGF0ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICBfZGF0ZXMgPSBfZmlyc3RBcmc7XHJcbiAgfSBlbHNlIGlmIChpc0FycmF5PERhdGU+KGRhdGVzKSkge1xyXG4gICAgX2RhdGVzID0gZGF0ZXM7XHJcbiAgfVxyXG5cclxuICBpZiAoIV9kYXRlcyB8fCAhX2RhdGVzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKCk7XHJcbiAgfVxyXG4gIGxldCByZXMgPSBfZGF0ZXNbMF07XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBfZGF0ZXMubGVuZ3RoOyArK2kpIHtcclxuICAgIC8vIGlmICghbW9tZW50c1tpXS5pc1ZhbGlkKCkgfHwgbW9tZW50c1tpXVtmbl0ocmVzKSkge1xyXG4gICAgaWYgKCFpc0RhdGVWYWxpZChfZGF0ZXNbaV0pIHx8IGZuLmNhbGwobnVsbCwgX2RhdGVzW2ldLCByZXMpKSB7XHJcbiAgICAgIHJlcyA9IF9kYXRlc1tpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbi8vIFRPRE86IFVzZSBbXS5zb3J0IGluc3RlYWQ/XHJcbmV4cG9ydCBmdW5jdGlvbiBtaW4oLi4uYXJnczogRGF0ZVtdKTogRGF0ZSB7XHJcbiAgLy8gY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuXHJcbiAgcmV0dXJuIHBpY2tCeShpc0JlZm9yZSwgYXJncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXgoLi4uYXJnczogRGF0ZVtdKTogRGF0ZSB7XHJcbiAgLy8gY29uc3QgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuXHJcbiAgcmV0dXJuIHBpY2tCeShpc0FmdGVyLCBhcmdzKTtcclxufVxyXG4iXX0=