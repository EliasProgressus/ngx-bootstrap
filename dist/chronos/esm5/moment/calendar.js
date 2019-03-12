/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { diff } from './diff';
import { cloneWithOffset } from '../units/offset';
import { isFunction, isString } from '../utils/type-checks';
import { cloneDate } from '../create/clone';
import { startOf } from '../utils/start-end-of';
import { formatDate } from '../format';
import { getLocale } from '../locale/locales';
/**
 * @record
 */
export function CalendarSpec() { }
function CalendarSpec_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    CalendarSpec.prototype.sameDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.nextDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.lastDay;
    /** @type {?|undefined} */
    CalendarSpec.prototype.nextWeek;
    /** @type {?|undefined} */
    CalendarSpec.prototype.lastWeek;
    /** @type {?|undefined} */
    CalendarSpec.prototype.sameElse;
    /* TODO: handle strange member:
    [x: string]: CalendarSpecVal | void;
    */
}
/**
 * @param {?} date
 * @param {?} now
 * @param {?} config
 * @return {?}
 */
export function getCalendarFormat(date, now, config) {
    var /** @type {?} */ _diff = diff(date, now, 'day', true, config);
    switch (true) {
        case _diff < -6: return 'sameElse';
        case _diff < -1: return 'lastWeek';
        case _diff < 0: return 'lastDay';
        case _diff < 1: return 'sameDay';
        case _diff < 2: return 'nextDay';
        case _diff < 7: return 'nextWeek';
        default: return 'sameElse';
    }
}
/**
 * @param {?} date
 * @param {?} time
 * @param {?} formats
 * @param {?=} locale
 * @param {?=} config
 * @return {?}
 */
export function calendar(date, time, formats, locale, config) {
    if (locale === void 0) { locale = getLocale(); }
    if (config === void 0) { config = {}; }
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var /** @type {?} */ now = time;
    var /** @type {?} */ sod = startOf(cloneWithOffset(now, date, config), 'day', config._isUTC);
    var /** @type {?} */ format = getCalendarFormat(date, sod, { _isUTC: true, _offset: 0 }) || 'sameElse';
    var /** @type {?} */ output;
    if (formats) {
        var /** @type {?} */ _format = formats[format];
        if (isString(_format)) {
            output = _format;
        }
        if (isFunction(_format)) {
            output = _format.call(null, date, now);
        }
    }
    if (!output) {
        output = locale.calendar(format, date, cloneDate(now));
    }
    return formatDate(date, output, config._locale._abbr, config._isUTC, config._offset);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJtb21lbnQvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCOUMsTUFBTSw0QkFBNEIsSUFBVSxFQUFFLEdBQVMsRUFBRSxNQUF5QjtJQUNoRixxQkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25DLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2xDLFNBQVMsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUM1QjtDQUNGOzs7Ozs7Ozs7QUFFRCxNQUFNLG1CQUFtQixJQUFVLEVBQ1YsSUFBVSxFQUNWLE9BQXFCLEVBQ3JCLE1BQTRCLEVBQzVCLE1BQThCO0lBRDlCLHVCQUFBLEVBQUEsU0FBaUIsU0FBUyxFQUFFO0lBQzVCLHVCQUFBLEVBQUEsV0FBOEI7OztJQUdyRCxxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLHFCQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUcsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvRSxxQkFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLElBQUksVUFBVSxDQUFDO0lBRXRGLHFCQUFJLE1BQU0sQ0FBQztJQUNYLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDWixxQkFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUNsQjtRQUNELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsTUFBTSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN4QztLQUNGO0lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUN4RDtJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztDQUN0RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGRpZmYgfSBmcm9tICcuL2RpZmYnO1xyXG5pbXBvcnQgeyBjbG9uZVdpdGhPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xyXG5pbXBvcnQgeyBpc0Z1bmN0aW9uLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcclxuaW1wb3J0IHsgc3RhcnRPZiB9IGZyb20gJy4uL3V0aWxzL3N0YXJ0LWVuZC1vZic7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICcuLi9mb3JtYXQnO1xyXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcblxyXG5leHBvcnQgdHlwZSBDYWxlbmRhclNwZWNWYWwgPSBzdHJpbmcgfCAoKG0/OiBEYXRlSW5wdXQsIG5vdz86IERhdGUpID0+IHN0cmluZyk7XHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FsZW5kYXJTcGVjIHtcclxuICBzYW1lRGF5PzogQ2FsZW5kYXJTcGVjVmFsO1xyXG4gIG5leHREYXk/OiBDYWxlbmRhclNwZWNWYWw7XHJcbiAgbGFzdERheT86IENhbGVuZGFyU3BlY1ZhbDtcclxuICBuZXh0V2Vlaz86IENhbGVuZGFyU3BlY1ZhbDtcclxuICBsYXN0V2Vlaz86IENhbGVuZGFyU3BlY1ZhbDtcclxuICBzYW1lRWxzZT86IENhbGVuZGFyU3BlY1ZhbDtcclxuXHJcbiAgLy8gYW55IGFkZGl0aW9uYWwgcHJvcGVydGllcyBtaWdodCBiZSB1c2VkIHdpdGggbW9tZW50LmNhbGVuZGFyRm9ybWF0XHJcbiAgW3g6IHN0cmluZ106IENhbGVuZGFyU3BlY1ZhbCB8IHZvaWQ7IC8vIHVuZGVmaW5lZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FsZW5kYXJGb3JtYXQoZGF0ZTogRGF0ZSwgbm93OiBEYXRlLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKSB7XHJcbiAgY29uc3QgX2RpZmYgPSBkaWZmKGRhdGUsIG5vdywgJ2RheScsIHRydWUsIGNvbmZpZyk7XHJcblxyXG4gIHN3aXRjaCAodHJ1ZSkge1xyXG4gICAgY2FzZSBfZGlmZiA8IC02OiByZXR1cm4gJ3NhbWVFbHNlJztcclxuICAgIGNhc2UgX2RpZmYgPCAtMTogcmV0dXJuICdsYXN0V2Vlayc7XHJcbiAgICBjYXNlIF9kaWZmIDwgMDogcmV0dXJuICdsYXN0RGF5JztcclxuICAgIGNhc2UgX2RpZmYgPCAxOiByZXR1cm4gJ3NhbWVEYXknO1xyXG4gICAgY2FzZSBfZGlmZiA8IDI6IHJldHVybiAnbmV4dERheSc7XHJcbiAgICBjYXNlIF9kaWZmIDwgNzogcmV0dXJuICduZXh0V2Vlayc7XHJcbiAgICBkZWZhdWx0OiByZXR1cm4gJ3NhbWVFbHNlJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxlbmRhcihkYXRlOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHM6IENhbGVuZGFyU3BlYyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBzdHJpbmcge1xyXG4gIC8vIFdlIHdhbnQgdG8gY29tcGFyZSB0aGUgc3RhcnQgb2YgdG9kYXksIHZzIHRoaXMuXHJcbiAgLy8gR2V0dGluZyBzdGFydC1vZi10b2RheSBkZXBlbmRzIG9uIHdoZXRoZXIgd2UncmUgbG9jYWwvdXRjL29mZnNldCBvciBub3QuXHJcbiAgY29uc3Qgbm93ID0gdGltZTtcclxuICBjb25zdCBzb2QgPSBzdGFydE9mKGNsb25lV2l0aE9mZnNldChub3csIGRhdGUsICBjb25maWcpLCAnZGF5JywgY29uZmlnLl9pc1VUQyk7XHJcbiAgY29uc3QgZm9ybWF0ID0gZ2V0Q2FsZW5kYXJGb3JtYXQoZGF0ZSwgc29kLCB7X2lzVVRDOiB0cnVlLCBfb2Zmc2V0OiAwfSkgfHwgJ3NhbWVFbHNlJztcclxuXHJcbiAgbGV0IG91dHB1dDtcclxuICBpZiAoZm9ybWF0cykge1xyXG4gICAgY29uc3QgX2Zvcm1hdCA9IGZvcm1hdHNbZm9ybWF0XTtcclxuICAgIGlmIChpc1N0cmluZyhfZm9ybWF0KSkge1xyXG4gICAgICBvdXRwdXQgPSBfZm9ybWF0O1xyXG4gICAgfVxyXG4gICAgaWYgKGlzRnVuY3Rpb24oX2Zvcm1hdCkpIHtcclxuICAgICAgb3V0cHV0ID0gX2Zvcm1hdC5jYWxsKG51bGwsIGRhdGUsIG5vdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoIW91dHB1dCkge1xyXG4gICAgb3V0cHV0ID0gbG9jYWxlLmNhbGVuZGFyKGZvcm1hdCwgZGF0ZSwgY2xvbmVEYXRlKG5vdykpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgb3V0cHV0LCBjb25maWcuX2xvY2FsZS5fYWJiciwgY29uZmlnLl9pc1VUQywgY29uZmlnLl9vZmZzZXQpO1xyXG59XHJcbiJdfQ==