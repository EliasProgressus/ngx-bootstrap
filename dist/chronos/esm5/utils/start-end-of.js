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
    var /** @type {?} */ _date = cloneDate(date);
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
        setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
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
    var /** @type {?} */ _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    var /** @type {?} */ start = startOf(date, _unit, isUTC);
    var /** @type {?} */ _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    var /** @type {?} */ res = subtract(_step, 1, 'milliseconds', isUTC);
    return res;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnQtZW5kLW9mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvc3RhcnQtZW5kLW9mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQ0wsT0FBTyxFQUFlLFFBQVEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBRWxGLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQUV2RCxNQUFNLGtCQUFrQixJQUFVLEVBQUUsSUFBZ0IsRUFBRSxLQUFlO0lBQ25FLHFCQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7OztJQUc5QixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxNQUFNO1lBQ1QsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1FBRTVCLEtBQUssU0FBUyxDQUFDO1FBQ2YsS0FBSyxPQUFPO1lBQ1YsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1FBRTNCLEtBQUssTUFBTSxDQUFDO1FBQ1osS0FBSyxTQUFTLENBQUM7UUFDZixLQUFLLEtBQUssQ0FBQztRQUNYLEtBQUssTUFBTTtZQUNULFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztRQUU1QixLQUFLLE9BQU87WUFDVixVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQzs7UUFFOUIsS0FBSyxTQUFTO1lBQ1osVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O1FBRTlCLEtBQUssU0FBUztZQUNaLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3BDOztJQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBQyxLQUFLLE9BQUEsRUFBQyxDQUFDLENBQUM7S0FDdkM7SUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2QixlQUFlLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzNCOztJQUdELEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNwRTtJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUM7Q0FDZDs7Ozs7OztBQUVELE1BQU0sZ0JBQWdCLElBQVUsRUFBRSxJQUFnQixFQUFFLEtBQWU7SUFDakUscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQzs7SUFFakIsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDckIsS0FBSyxHQUFHLEtBQUssQ0FBQztLQUNmO0lBRUQscUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFDLHFCQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxxQkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXRELE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDWiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOiBzd2l0Y2gtZGVmYXVsdFxyXG5pbXBvcnQgeyBUaW1lVW5pdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHtcclxuICBzZXREYXRlLCBzZXRGdWxsRGF0ZSwgc2V0SG91cnMsIHNldE1pbGxpc2Vjb25kcywgc2V0TWludXRlcywgc2V0TW9udGgsIHNldFNlY29uZHMsXHJcbiAgc2hpZnREYXRlXHJcbn0gZnJvbSAnLi9kYXRlLXNldHRlcnMnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xyXG5pbXBvcnQgeyBzZXRJU09EYXlPZldlZWssIHNldExvY2FsZURheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGFkZCwgc3VidHJhY3QgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mKGRhdGU6IERhdGUsIHVuaXQ6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGNvbnN0IF9kYXRlID0gY2xvbmVEYXRlKGRhdGUpO1xyXG4gIC8vIHRoZSBmb2xsb3dpbmcgc3dpdGNoIGludGVudGlvbmFsbHkgb21pdHMgYnJlYWsga2V5d29yZHNcclxuICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXHJcbiAgc3dpdGNoICh1bml0KSB7XHJcbiAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgc2V0TW9udGgoX2RhdGUsIDAsIGlzVVRDKTtcclxuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cclxuICAgIGNhc2UgJ3F1YXJ0ZXInOlxyXG4gICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICBzZXREYXRlKF9kYXRlLCAxLCBpc1VUQyk7XHJcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICBjYXNlICd3ZWVrJzpcclxuICAgIGNhc2UgJ2lzb1dlZWsnOlxyXG4gICAgY2FzZSAnZGF5JzpcclxuICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICBzZXRIb3VycyhfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSAnaG91cnMnOlxyXG4gICAgICBzZXRNaW51dGVzKF9kYXRlLCAwLCBpc1VUQyk7XHJcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICBjYXNlICdtaW51dGVzJzpcclxuICAgICAgc2V0U2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgIHNldE1pbGxpc2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gIH1cclxuXHJcbiAgLy8gd2Vla3MgYXJlIGEgc3BlY2lhbCBjYXNlXHJcbiAgaWYgKHVuaXQgPT09ICd3ZWVrJykge1xyXG4gICAgc2V0TG9jYWxlRGF5T2ZXZWVrKF9kYXRlLCAwLCB7aXNVVEN9KTtcclxuICB9XHJcbiAgaWYgKHVuaXQgPT09ICdpc29XZWVrJykge1xyXG4gICAgc2V0SVNPRGF5T2ZXZWVrKF9kYXRlLCAxKTtcclxuICB9XHJcblxyXG4gIC8vIHF1YXJ0ZXJzIGFyZSBhbHNvIHNwZWNpYWxcclxuICBpZiAodW5pdCA9PT0gJ3F1YXJ0ZXInKSB7XHJcbiAgICBzZXRNb250aChfZGF0ZSwgTWF0aC5mbG9vcihnZXRNb250aChfZGF0ZSwgaXNVVEMpIC8gMykgKiAzLCBpc1VUQyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX2RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmRPZihkYXRlOiBEYXRlLCB1bml0OiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBsZXQgX3VuaXQgPSB1bml0O1xyXG4gIC8vICdkYXRlJyBpcyBhbiBhbGlhcyBmb3IgJ2RheScsIHNvIGl0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHN1Y2guXHJcbiAgaWYgKF91bml0ID09PSAnZGF0ZScpIHtcclxuICAgIF91bml0ID0gJ2RheSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydCA9IHN0YXJ0T2YoZGF0ZSwgX3VuaXQsIGlzVVRDKTtcclxuICBjb25zdCBfc3RlcCA9IGFkZChzdGFydCwgMSwgX3VuaXQgPT09ICdpc29XZWVrJyA/ICd3ZWVrJyA6IF91bml0LCBpc1VUQyk7XHJcbiAgY29uc3QgcmVzID0gc3VidHJhY3QoX3N0ZXAsIDEsICdtaWxsaXNlY29uZHMnLCBpc1VUQyk7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuIl19