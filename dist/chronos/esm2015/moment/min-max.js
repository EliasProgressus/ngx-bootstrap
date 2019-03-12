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
    let /** @type {?} */ _dates;
    const /** @type {?} */ _firstArg = dates[0];
    if (isArray(_firstArg) && dates.length === 1) {
        _dates = _firstArg;
    }
    else if (isArray(dates)) {
        _dates = dates;
    }
    if (!_dates || !_dates.length) {
        return new Date();
    }
    let /** @type {?} */ res = _dates[0];
    for (let /** @type {?} */ i = 1; i < _dates.length; ++i) {
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
export function min(...args) {
    // const args = [].slice.call(arguments, 0);
    return pickBy(isBefore, args);
}
/**
 * @param {...?} args
 * @return {?}
 */
export function max(...args) {
    // const args = [].slice.call(arguments, 0);
    return pickBy(isAfter, args);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWluLW1heC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9taW4tbWF4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUUxRCxnQkFBZ0IsRUFBWSxFQUFFLEtBQXdCO0lBQ3BELHFCQUFJLE1BQWMsQ0FBQztJQUNuQix1QkFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzNCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBTyxTQUFTLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsTUFBTSxHQUFHLFNBQVMsQ0FBQztLQUNwQjtJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLE1BQU0sR0FBRyxLQUFLLENBQUM7S0FDaEI7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO0tBQ25CO0lBQ0QscUJBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7O1FBRXZDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNqQjtLQUNGO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNaOzs7OztBQUdELE1BQU0sY0FBYyxHQUFHLElBQVk7O0lBR2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQy9COzs7OztBQUVELE1BQU0sY0FBYyxHQUFHLElBQVk7O0lBR2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUGljayBhIG1vbWVudCBtIGZyb20gbW9tZW50cyBzbyB0aGF0IG1bZm5dKG90aGVyKSBpcyB0cnVlIGZvciBhbGxcclxuLy8gb3RoZXIuIFRoaXMgcmVsaWVzIG9uIHRoZSBmdW5jdGlvbiBmbiB0byBiZSB0cmFuc2l0aXZlLlxyXG4vL1xyXG4vLyBtb21lbnRzIHNob3VsZCBlaXRoZXIgYmUgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMgb3IgYW4gYXJyYXksIHdob3NlXHJcbi8vIGZpcnN0IGVsZW1lbnQgaXMgYW4gYXJyYXkgb2YgbW9tZW50IG9iamVjdHMuXHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGF0ZVZhbGlkIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XHJcblxyXG5mdW5jdGlvbiBwaWNrQnkoZm46IEZ1bmN0aW9uLCBkYXRlczogRGF0ZVtdIHwgRGF0ZVtdW10pOiBEYXRlIHtcclxuICBsZXQgX2RhdGVzOiBEYXRlW107XHJcbiAgY29uc3QgX2ZpcnN0QXJnID0gZGF0ZXNbMF07XHJcbiAgaWYgKGlzQXJyYXk8RGF0ZT4oX2ZpcnN0QXJnKSAmJiBkYXRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgIF9kYXRlcyA9IF9maXJzdEFyZztcclxuICB9IGVsc2UgaWYgKGlzQXJyYXk8RGF0ZT4oZGF0ZXMpKSB7XHJcbiAgICBfZGF0ZXMgPSBkYXRlcztcclxuICB9XHJcblxyXG4gIGlmICghX2RhdGVzIHx8ICFfZGF0ZXMubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUoKTtcclxuICB9XHJcbiAgbGV0IHJlcyA9IF9kYXRlc1swXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IF9kYXRlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgLy8gaWYgKCFtb21lbnRzW2ldLmlzVmFsaWQoKSB8fCBtb21lbnRzW2ldW2ZuXShyZXMpKSB7XHJcbiAgICBpZiAoIWlzRGF0ZVZhbGlkKF9kYXRlc1tpXSkgfHwgZm4uY2FsbChudWxsLCBfZGF0ZXNbaV0sIHJlcykpIHtcclxuICAgICAgcmVzID0gX2RhdGVzW2ldO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuLy8gVE9ETzogVXNlIFtdLnNvcnQgaW5zdGVhZD9cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbiguLi5hcmdzOiBEYXRlW10pOiBEYXRlIHtcclxuICAvLyBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG5cclxuICByZXR1cm4gcGlja0J5KGlzQmVmb3JlLCBhcmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1heCguLi5hcmdzOiBEYXRlW10pOiBEYXRlIHtcclxuICAvLyBjb25zdCBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG5cclxuICByZXR1cm4gcGlja0J5KGlzQWZ0ZXIsIGFyZ3MpO1xyXG59XHJcbiJdfQ==