/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { formatDate, getLocale } from 'ngx-bootstrap/chronos';
/**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */
export function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
            return ({
                days: week.map(function (date, dayIndex) {
                    return ({
                        date: date,
                        label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                        monthIndex: monthIndex,
                        weekIndex: weekIndex,
                        dayIndex: dayIndex
                    });
                })
            });
        })
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
export function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map(function (days) { return (days[0] ? formatDate(days[0], format, locale) : ''); });
}
/**
 * @param {?} locale
 * @return {?}
 */
export function getShiftedWeekdays(locale) {
    var /** @type {?} */ _locale = getLocale(locale);
    var /** @type {?} */ weekdays = /** @type {?} */ (_locale.weekdaysShort());
    var /** @type {?} */ firstDayOfWeek = _locale.firstDayOfWeek();
    return tslib_1.__spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWRheXMtY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJlbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFLQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7O0FBRTlELE1BQU0sNkJBQTZCLFlBQStCLEVBQy9CLGFBQXNDLEVBQ3RDLFVBQWtCO0lBQ25ELE1BQU0sQ0FBQztRQUNMLEtBQUssRUFBRSxZQUFZLENBQUMsS0FBSztRQUN6QixVQUFVLEVBQUUsVUFBVSxDQUNwQixZQUFZLENBQUMsS0FBSyxFQUNsQixhQUFhLENBQUMsVUFBVSxFQUN4QixhQUFhLENBQUMsTUFBTSxDQUNyQjtRQUNELFNBQVMsRUFBRSxVQUFVLENBQ25CLFlBQVksQ0FBQyxLQUFLLEVBQ2xCLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO1FBQ0QsV0FBVyxFQUFFLGNBQWMsQ0FDekIsWUFBWSxDQUFDLFVBQVUsRUFDdkIsYUFBYSxDQUFDLFdBQVcsRUFDekIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7UUFDRCxRQUFRLEVBQUUsa0JBQWtCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxLQUFLLEVBQUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFZLEVBQUUsU0FBaUI7WUFBSyxPQUFBLENBQUM7Z0JBQ3ZFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsSUFBVSxFQUFFLFFBQWdCO29CQUFLLE9BQUEsQ0FBQzt3QkFDaEQsSUFBSSxNQUFBO3dCQUNKLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxRQUFRLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQzt3QkFDckUsVUFBVSxZQUFBO3dCQUNWLFNBQVMsV0FBQTt3QkFDVCxRQUFRLFVBQUE7cUJBQ1QsQ0FBQztnQkFOK0MsQ0FNL0MsQ0FBQzthQUNKLENBQUM7UUFSc0UsQ0FRdEUsQ0FBQztLQUNKLENBQUM7Q0FDSDs7Ozs7OztBQUVELE1BQU0seUJBQXlCLFVBQW9CLEVBQ3BCLE1BQWMsRUFDZCxNQUFjO0lBQzNDLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUNuQixVQUFDLElBQVksSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQXBELENBQW9ELENBQ3ZFLENBQUM7Q0FDSDs7Ozs7QUFFRCxNQUFNLDZCQUE2QixNQUFjO0lBQy9DLHFCQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMscUJBQU0sUUFBUSxxQkFBRyxPQUFPLENBQUMsYUFBYSxFQUFjLENBQUEsQ0FBQztJQUNyRCxxQkFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRWhELE1BQU0sa0JBQUssUUFBUSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBSyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRTtDQUNsRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXHJcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXHJcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZ2V0TG9jYWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXlzQ2FsZW5kYXIoZGF5c0NhbGVuZGFyOiBEYXlzQ2FsZW5kYXJNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb250aEluZGV4OiBudW1iZXIpOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwge1xyXG4gIHJldHVybiB7XHJcbiAgICBtb250aDogZGF5c0NhbGVuZGFyLm1vbnRoLFxyXG4gICAgbW9udGhUaXRsZTogZm9ybWF0RGF0ZShcclxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxyXG4gICAgICBmb3JtYXRPcHRpb25zLm1vbnRoVGl0bGUsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgICApLFxyXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxyXG4gICAgICBkYXlzQ2FsZW5kYXIubW9udGgsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxyXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxyXG4gICAgKSxcclxuICAgIHdlZWtOdW1iZXJzOiBnZXRXZWVrTnVtYmVycyhcclxuICAgICAgZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMud2Vla051bWJlcnMsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgICApLFxyXG4gICAgd2Vla2RheXM6IGdldFNoaWZ0ZWRXZWVrZGF5cyhmb3JtYXRPcHRpb25zLmxvY2FsZSksXHJcbiAgICB3ZWVrczogZGF5c0NhbGVuZGFyLmRheXNNYXRyaXgubWFwKCh3ZWVrOiBEYXRlW10sIHdlZWtJbmRleDogbnVtYmVyKSA9PiAoe1xyXG4gICAgICBkYXlzOiB3ZWVrLm1hcCgoZGF0ZTogRGF0ZSwgZGF5SW5kZXg6IG51bWJlcikgPT4gKHtcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMuZGF5TGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKSxcclxuICAgICAgICBtb250aEluZGV4LFxyXG4gICAgICAgIHdlZWtJbmRleCxcclxuICAgICAgICBkYXlJbmRleFxyXG4gICAgICB9KSlcclxuICAgIH0pKVxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrTnVtYmVycyhkYXlzTWF0cml4OiBEYXRlW11bXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgcmV0dXJuIGRheXNNYXRyaXgubWFwKFxyXG4gICAgKGRheXM6IERhdGVbXSkgPT4gKGRheXNbMF0gPyBmb3JtYXREYXRlKGRheXNbMF0sIGZvcm1hdCwgbG9jYWxlKSA6ICcnKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTaGlmdGVkV2Vla2RheXMobG9jYWxlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGUpO1xyXG4gIGNvbnN0IHdlZWtkYXlzID0gX2xvY2FsZS53ZWVrZGF5c1Nob3J0KCkgYXMgc3RyaW5nW107XHJcbiAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBfbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCk7XHJcblxyXG4gIHJldHVybiBbLi4ud2Vla2RheXMuc2xpY2UoZmlyc3REYXlPZldlZWspLCAuLi53ZWVrZGF5cy5zbGljZSgwLCBmaXJzdERheU9mV2VlayldO1xyXG59XHJcbiJdfQ==