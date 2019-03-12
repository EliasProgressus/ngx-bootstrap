/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isSameMonth, shiftDate } from 'ngx-bootstrap/chronos';
import { isMonthDisabled, isYearDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagMonthCalendarOptions() { }
function FlagMonthCalendarOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.hoveredMonth;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagMonthCalendarOptions.prototype.monthIndex;
}
/**
 * @param {?} monthCalendar
 * @param {?} options
 * @return {?}
 */
export function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach((months, rowIndex) => {
        months.forEach((month, monthIndex) => {
            const /** @type {?} */ isHovered = isSameMonth(month.date, options.hoveredMonth);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            const /** @type {?} */ newMonth = Object.assign(/*{},*/ month, {
                isHovered,
                isDisabled
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1tb250aHMtY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJlbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzdFLE1BQU0sNkJBQ0osYUFBc0MsRUFDdEMsT0FBaUM7SUFFakMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLENBQUMsTUFBK0IsRUFBRSxRQUFnQixFQUFFLEVBQUU7UUFDcEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQTRCLEVBQUUsVUFBa0IsRUFBRSxFQUFFO1lBQ2xFLHVCQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDaEUsdUJBQU0sVUFBVSxHQUNkLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRSx1QkFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUM1QyxTQUFTO2dCQUNULFVBQVU7YUFDWCxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsQ0FDRCxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxTQUFTO2dCQUN0QyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUNoQyxDQUFDLENBQUMsQ0FBQztnQkFDRCxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUN2RDtTQUNGLENBQUMsQ0FBQztLQUNKLENBQ0YsQ0FBQzs7SUFHRixhQUFhLENBQUMsYUFBYTtRQUN6QixPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDekUsYUFBYSxDQUFDLGNBQWM7UUFDMUIsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsYUFBYTtZQUMxQyxPQUFPLENBQUMsVUFBVSxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRW5ELGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQzdDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3hELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUNGLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQzlDLFNBQVMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUN2RCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7SUFFRixNQUFNLENBQUMsYUFBYSxDQUFDO0NBQ3RCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNTYW1lTW9udGgsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7XHJcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgaXNNb250aERpc2FibGVkLCBpc1llYXJEaXNhYmxlZCB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ01vbnRoQ2FsZW5kYXJPcHRpb25zIHtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIG1pbkRhdGU6IERhdGU7XHJcbiAgbWF4RGF0ZTogRGF0ZTtcclxuICBob3ZlcmVkTW9udGg6IERhdGU7XHJcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xyXG4gIG1vbnRoSW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdNb250aHNDYWxlbmRhcihcclxuICBtb250aENhbGVuZGFyOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBvcHRpb25zOiBGbGFnTW9udGhDYWxlbmRhck9wdGlvbnNcclxuKTogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwge1xyXG4gIG1vbnRoQ2FsZW5kYXIubW9udGhzLmZvckVhY2goXHJcbiAgICAobW9udGhzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBtb250aHMuZm9yRWFjaCgobW9udGg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgbW9udGhJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNIb3ZlcmVkID0gaXNTYW1lTW9udGgobW9udGguZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkTW9udGgpO1xyXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxyXG4gICAgICAgICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XHJcbiAgICAgICAgICBpc01vbnRoRGlzYWJsZWQobW9udGguZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUpO1xyXG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIG1vbnRoLCB7XHJcbiAgICAgICAgICBpc0hvdmVyZWQsXHJcbiAgICAgICAgICBpc0Rpc2FibGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgbW9udGguaXNIb3ZlcmVkICE9PSBuZXdNb250aC5pc0hvdmVyZWQgfHxcclxuICAgICAgICAgIG1vbnRoLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG1vbnRoQ2FsZW5kYXIubW9udGhzW3Jvd0luZGV4XVttb250aEluZGV4XSA9IG5ld01vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXHJcbiAgbW9udGhDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cclxuICAgIG9wdGlvbnMubW9udGhJbmRleCA+IDAgJiYgb3B0aW9ucy5tb250aEluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XHJcbiAgbW9udGhDYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA9XHJcbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcclxuICAgIG9wdGlvbnMubW9udGhJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcclxuXHJcbiAgbW9udGhDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXHJcbiAgICBzaGlmdERhdGUobW9udGhDYWxlbmRhci5tb250aHNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcclxuICAgIG9wdGlvbnMubWluRGF0ZSxcclxuICAgIG9wdGlvbnMubWF4RGF0ZVxyXG4gICk7XHJcbiAgbW9udGhDYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvdyA9IGlzWWVhckRpc2FibGVkKFxyXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogMSB9KSxcclxuICAgIG9wdGlvbnMubWluRGF0ZSxcclxuICAgIG9wdGlvbnMubWF4RGF0ZVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBtb250aENhbGVuZGFyO1xyXG59XHJcbiJdfQ==