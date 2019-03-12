/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { setDate, setHours, setMilliseconds, setMinutes, setMonth, setSeconds } from './date-setters';
import { cloneDate } from '../create/clone';
import { setISODayOfWeek, setLocaleDayOfWeek } from '../units/day-of-week';
import { getMonth } from './date-getters';
import { add, subtract } from '../moment/add-subtract';
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
export function startOf(date, unit, isUTC) {
    const /** @type {?} */ _date = cloneDate(date);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (unit) {
        case 'year':
            setMonth(_date, 0, isUTC);
        /* falls through */
        case 'quarter':
        case 'month':
            setDate(_date, 1, isUTC);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            setHours(_date, 0, isUTC);
        /* falls through */
        case 'hours':
            setMinutes(_date, 0, isUTC);
        /* falls through */
        case 'minutes':
            setSeconds(_date, 0, isUTC);
        /* falls through */
        case 'seconds':
            setMilliseconds(_date, 0, isUTC);
    }
    // weeks are a special case
    if (unit === 'week') {
        setLocaleDayOfWeek(_date, 0, { isUTC });
    }
    if (unit === 'isoWeek') {
        setISODayOfWeek(_date, 1);
    }
    // quarters are also special
    if (unit === 'quarter') {
        setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
    }
    return _date;
}
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
export function endOf(date, unit, isUTC) {
    let /** @type {?} */ _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    const /** @type {?} */ start = startOf(date, _unit, isUTC);
    const /** @type {?} */ _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    const /** @type {?} */ res = subtract(_step, 1, 'milliseconds', isUTC);
    return res;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtZW5kLW9mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvc3RhcnQtZW5kLW9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsT0FBTyxFQUFlLFFBQVEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBRWxGLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQUV2RCxNQUFNLGtCQUFrQixJQUFVLEVBQUUsSUFBZ0IsRUFBRSxLQUFlO0lBQ25FLHVCQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7OztJQUc5QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxNQUFNO1lBQ1QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1FBRTVCLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1YsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1FBRTNCLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLEtBQUssQ0FBQztRQUNYLEtBQUssTUFBTTtZQUNULFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQUU1QixLQUFLLE9BQU87WUFDVixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFFOUIsS0FBSyxTQUFTO1lBQ1osVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1FBRTlCLEtBQUssU0FBUztZQUNaLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOztJQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0tBQ3ZDO0lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMzQjs7SUFHRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2QixRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDcEU7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2Q7Ozs7Ozs7QUFFRCxNQUFNLGdCQUFnQixJQUFVLEVBQUUsSUFBZ0IsRUFBRSxLQUFlO0lBQ2pFLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7O0lBRWpCLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDZjtJQUVELHVCQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxQyx1QkFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekUsdUJBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV0RCxNQUFNLENBQUMsR0FBRyxDQUFDO0NBQ1oiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogc3dpdGNoLWRlZmF1bHRcclxuaW1wb3J0IHsgVGltZVVuaXQsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7XHJcbiAgc2V0RGF0ZSwgc2V0RnVsbERhdGUsIHNldEhvdXJzLCBzZXRNaWxsaXNlY29uZHMsIHNldE1pbnV0ZXMsIHNldE1vbnRoLCBzZXRTZWNvbmRzLFxyXG4gIHNoaWZ0RGF0ZVxyXG59IGZyb20gJy4vZGF0ZS1zZXR0ZXJzJztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcclxuaW1wb3J0IHsgc2V0SVNPRGF5T2ZXZWVrLCBzZXRMb2NhbGVEYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGQsIHN1YnRyYWN0IH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZihkYXRlOiBEYXRlLCB1bml0OiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBjb25zdCBfZGF0ZSA9IGNsb25lRGF0ZShkYXRlKTtcclxuICAvLyB0aGUgZm9sbG93aW5nIHN3aXRjaCBpbnRlbnRpb25hbGx5IG9taXRzIGJyZWFrIGtleXdvcmRzXHJcbiAgLy8gdG8gdXRpbGl6ZSBmYWxsaW5nIHRocm91Z2ggdGhlIGNhc2VzLlxyXG4gIHN3aXRjaCAodW5pdCkge1xyXG4gICAgY2FzZSAneWVhcic6XHJcbiAgICAgIHNldE1vbnRoKF9kYXRlLCAwLCBpc1VUQyk7XHJcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICBjYXNlICdxdWFydGVyJzpcclxuICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgc2V0RGF0ZShfZGF0ZSwgMSwgaXNVVEMpO1xyXG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSAnd2Vlayc6XHJcbiAgICBjYXNlICdpc29XZWVrJzpcclxuICAgIGNhc2UgJ2RheSc6XHJcbiAgICBjYXNlICdkYXRlJzpcclxuICAgICAgc2V0SG91cnMoX2RhdGUsIDAsIGlzVVRDKTtcclxuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cclxuICAgIGNhc2UgJ2hvdXJzJzpcclxuICAgICAgc2V0TWludXRlcyhfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSAnbWludXRlcyc6XHJcbiAgICAgIHNldFNlY29uZHMoX2RhdGUsIDAsIGlzVVRDKTtcclxuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cclxuICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICBzZXRNaWxsaXNlY29uZHMoX2RhdGUsIDAsIGlzVVRDKTtcclxuICB9XHJcblxyXG4gIC8vIHdlZWtzIGFyZSBhIHNwZWNpYWwgY2FzZVxyXG4gIGlmICh1bml0ID09PSAnd2VlaycpIHtcclxuICAgIHNldExvY2FsZURheU9mV2VlayhfZGF0ZSwgMCwge2lzVVRDfSk7XHJcbiAgfVxyXG4gIGlmICh1bml0ID09PSAnaXNvV2VlaycpIHtcclxuICAgIHNldElTT0RheU9mV2VlayhfZGF0ZSwgMSk7XHJcbiAgfVxyXG5cclxuICAvLyBxdWFydGVycyBhcmUgYWxzbyBzcGVjaWFsXHJcbiAgaWYgKHVuaXQgPT09ICdxdWFydGVyJykge1xyXG4gICAgc2V0TW9udGgoX2RhdGUsIE1hdGguZmxvb3IoZ2V0TW9udGgoX2RhdGUsIGlzVVRDKSAvIDMpICogMywgaXNVVEMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF9kYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5kT2YoZGF0ZTogRGF0ZSwgdW5pdDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgbGV0IF91bml0ID0gdW5pdDtcclxuICAvLyAnZGF0ZScgaXMgYW4gYWxpYXMgZm9yICdkYXknLCBzbyBpdCBzaG91bGQgYmUgY29uc2lkZXJlZCBhcyBzdWNoLlxyXG4gIGlmIChfdW5pdCA9PT0gJ2RhdGUnKSB7XHJcbiAgICBfdW5pdCA9ICdkYXknO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgc3RhcnQgPSBzdGFydE9mKGRhdGUsIF91bml0LCBpc1VUQyk7XHJcbiAgY29uc3QgX3N0ZXAgPSBhZGQoc3RhcnQsIDEsIF91bml0ID09PSAnaXNvV2VlaycgPyAnd2VlaycgOiBfdW5pdCwgaXNVVEMpO1xyXG4gIGNvbnN0IHJlcyA9IHN1YnRyYWN0KF9zdGVwLCAxLCAnbWlsbGlzZWNvbmRzJywgaXNVVEMpO1xyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcbiJdfQ==