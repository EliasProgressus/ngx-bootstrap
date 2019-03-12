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
    const /** @type {?} */ _diff = diff(date, now, 'day', true, config);
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
export function calendar(date, time, formats, locale = getLocale(), config = {}) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    const /** @type {?} */ now = time;
    const /** @type {?} */ sod = startOf(cloneWithOffset(now, date, config), 'day', config._isUTC);
    const /** @type {?} */ format = getCalendarFormat(date, sod, { _isUTC: true, _offset: 0 }) || 'sameElse';
    let /** @type {?} */ output;
    if (formats) {
        const /** @type {?} */ _format = formats[format];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJtb21lbnQvY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCOUMsTUFBTSw0QkFBNEIsSUFBVSxFQUFFLEdBQVMsRUFBRSxNQUF5QjtJQUNoRix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2IsS0FBSyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUNuQyxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ25DLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pDLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ2xDLFNBQVMsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUM1QjtDQUNGOzs7Ozs7Ozs7QUFFRCxNQUFNLG1CQUFtQixJQUFVLEVBQ1YsSUFBVSxFQUNWLE9BQXFCLEVBQ3JCLFNBQWlCLFNBQVMsRUFBRSxFQUM1QixTQUE0QixFQUFFOzs7SUFHckQsdUJBQU0sR0FBRyxHQUFHLElBQUksQ0FBQztJQUNqQix1QkFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFHLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0UsdUJBQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxJQUFJLFVBQVUsQ0FBQztJQUV0RixxQkFBSSxNQUFNLENBQUM7SUFDWCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1osdUJBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sR0FBRyxPQUFPLENBQUM7U0FDbEI7UUFDRCxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDeEM7S0FDRjtJQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEQ7SUFFRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDdEYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkaWZmIH0gZnJvbSAnLi9kaWZmJztcclxuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcclxuaW1wb3J0IHsgaXNGdW5jdGlvbiwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XHJcbmltcG9ydCB7IHN0YXJ0T2YgfSBmcm9tICcuLi91dGlscy9zdGFydC1lbmQtb2YnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vZm9ybWF0JztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ2FsZW5kYXJTcGVjVmFsID0gc3RyaW5nIHwgKChtPzogRGF0ZUlucHV0LCBub3c/OiBEYXRlKSA9PiBzdHJpbmcpO1xyXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyU3BlYyB7XHJcbiAgc2FtZURheT86IENhbGVuZGFyU3BlY1ZhbDtcclxuICBuZXh0RGF5PzogQ2FsZW5kYXJTcGVjVmFsO1xyXG4gIGxhc3REYXk/OiBDYWxlbmRhclNwZWNWYWw7XHJcbiAgbmV4dFdlZWs/OiBDYWxlbmRhclNwZWNWYWw7XHJcbiAgbGFzdFdlZWs/OiBDYWxlbmRhclNwZWNWYWw7XHJcbiAgc2FtZUVsc2U/OiBDYWxlbmRhclNwZWNWYWw7XHJcblxyXG4gIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnRpZXMgbWlnaHQgYmUgdXNlZCB3aXRoIG1vbWVudC5jYWxlbmRhckZvcm1hdFxyXG4gIFt4OiBzdHJpbmddOiBDYWxlbmRhclNwZWNWYWwgfCB2b2lkOyAvLyB1bmRlZmluZWRcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhbGVuZGFyRm9ybWF0KGRhdGU6IERhdGUsIG5vdzogRGF0ZSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZykge1xyXG4gIGNvbnN0IF9kaWZmID0gZGlmZihkYXRlLCBub3csICdkYXknLCB0cnVlLCBjb25maWcpO1xyXG5cclxuICBzd2l0Y2ggKHRydWUpIHtcclxuICAgIGNhc2UgX2RpZmYgPCAtNjogcmV0dXJuICdzYW1lRWxzZSc7XHJcbiAgICBjYXNlIF9kaWZmIDwgLTE6IHJldHVybiAnbGFzdFdlZWsnO1xyXG4gICAgY2FzZSBfZGlmZiA8IDA6IHJldHVybiAnbGFzdERheSc7XHJcbiAgICBjYXNlIF9kaWZmIDwgMTogcmV0dXJuICdzYW1lRGF5JztcclxuICAgIGNhc2UgX2RpZmYgPCAyOiByZXR1cm4gJ25leHREYXknO1xyXG4gICAgY2FzZSBfZGlmZiA8IDc6IHJldHVybiAnbmV4dFdlZWsnO1xyXG4gICAgZGVmYXVsdDogcmV0dXJuICdzYW1lRWxzZSc7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsZW5kYXIoZGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRzOiBDYWxlbmRhclNwZWMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogc3RyaW5nIHtcclxuICAvLyBXZSB3YW50IHRvIGNvbXBhcmUgdGhlIHN0YXJ0IG9mIHRvZGF5LCB2cyB0aGlzLlxyXG4gIC8vIEdldHRpbmcgc3RhcnQtb2YtdG9kYXkgZGVwZW5kcyBvbiB3aGV0aGVyIHdlJ3JlIGxvY2FsL3V0Yy9vZmZzZXQgb3Igbm90LlxyXG4gIGNvbnN0IG5vdyA9IHRpbWU7XHJcbiAgY29uc3Qgc29kID0gc3RhcnRPZihjbG9uZVdpdGhPZmZzZXQobm93LCBkYXRlLCAgY29uZmlnKSwgJ2RheScsIGNvbmZpZy5faXNVVEMpO1xyXG4gIGNvbnN0IGZvcm1hdCA9IGdldENhbGVuZGFyRm9ybWF0KGRhdGUsIHNvZCwge19pc1VUQzogdHJ1ZSwgX29mZnNldDogMH0pIHx8ICdzYW1lRWxzZSc7XHJcblxyXG4gIGxldCBvdXRwdXQ7XHJcbiAgaWYgKGZvcm1hdHMpIHtcclxuICAgIGNvbnN0IF9mb3JtYXQgPSBmb3JtYXRzW2Zvcm1hdF07XHJcbiAgICBpZiAoaXNTdHJpbmcoX2Zvcm1hdCkpIHtcclxuICAgICAgb3V0cHV0ID0gX2Zvcm1hdDtcclxuICAgIH1cclxuICAgIGlmIChpc0Z1bmN0aW9uKF9mb3JtYXQpKSB7XHJcbiAgICAgIG91dHB1dCA9IF9mb3JtYXQuY2FsbChudWxsLCBkYXRlLCBub3cpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFvdXRwdXQpIHtcclxuICAgIG91dHB1dCA9IGxvY2FsZS5jYWxlbmRhcihmb3JtYXQsIGRhdGUsIGNsb25lRGF0ZShub3cpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmb3JtYXREYXRlKGRhdGUsIG91dHB1dCwgY29uZmlnLl9sb2NhbGUuX2FiYnIsIGNvbmZpZy5faXNVVEMsIGNvbmZpZy5fb2Zmc2V0KTtcclxufVxyXG4iXX0=