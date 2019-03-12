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
    monthCalendar.months.forEach(function (months, rowIndex) {
        months.forEach(function (month, monthIndex) {
            var /** @type {?} */ isHovered = isSameMonth(month.date, options.hoveredMonth);
            var /** @type {?} */ isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            var /** @type {?} */ newMonth = Object.assign(/*{},*/ month, {
                isHovered: isHovered,
                isDisabled: isDisabled
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy1tb250aHMtY2FsZW5kYXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJlbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzdFLE1BQU0sNkJBQ0osYUFBc0MsRUFDdEMsT0FBaUM7SUFFakMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLFVBQUMsTUFBK0IsRUFBRSxRQUFnQjtRQUNoRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBNEIsRUFBRSxVQUFrQjtZQUM5RCxxQkFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2hFLHFCQUFNLFVBQVUsR0FDZCxPQUFPLENBQUMsVUFBVTtnQkFDbEIsZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEUscUJBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDNUMsU0FBUyxXQUFBO2dCQUNULFVBQVUsWUFBQTthQUNYLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyxDQUNELEtBQUssQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLFNBQVM7Z0JBQ3RDLEtBQUssQ0FBQyxVQUFVLEtBQUssUUFBUSxDQUFDLFVBQ2hDLENBQUMsQ0FBQyxDQUFDO2dCQUNELGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ3ZEO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FDRixDQUFDOztJQUdGLGFBQWEsQ0FBQyxhQUFhO1FBQ3pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN6RSxhQUFhLENBQUMsY0FBYztRQUMxQixPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhO1lBQzFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFbkQsYUFBYSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FDN0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDeEQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO0lBQ0YsYUFBYSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FDOUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3ZELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1NhbWVNb250aCwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHtcclxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGFnTW9udGhDYWxlbmRhck9wdGlvbnMge1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgbWluRGF0ZTogRGF0ZTtcclxuICBtYXhEYXRlOiBEYXRlO1xyXG4gIGhvdmVyZWRNb250aDogRGF0ZTtcclxuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XHJcbiAgbW9udGhJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxhZ01vbnRoc0NhbGVuZGFyKFxyXG4gIG1vbnRoQ2FsZW5kYXI6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIG9wdGlvbnM6IEZsYWdNb250aENhbGVuZGFyT3B0aW9uc1xyXG4pOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgbW9udGhDYWxlbmRhci5tb250aHMuZm9yRWFjaChcclxuICAgIChtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdLCByb3dJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIG1vbnRocy5mb3JFYWNoKChtb250aDogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBtb250aEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVNb250aChtb250aC5kYXRlLCBvcHRpb25zLmhvdmVyZWRNb250aCk7XHJcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XHJcbiAgICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcclxuICAgICAgICAgIGlzTW9udGhEaXNhYmxlZChtb250aC5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3TW9udGggPSBPYmplY3QuYXNzaWduKC8qe30sKi8gbW9udGgsIHtcclxuICAgICAgICAgIGlzSG92ZXJlZCxcclxuICAgICAgICAgIGlzRGlzYWJsZWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtb250aC5pc0hvdmVyZWQgIT09IG5ld01vbnRoLmlzSG92ZXJlZCB8fFxyXG4gICAgICAgICAgbW9udGguaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbW9udGhDYWxlbmRhci5tb250aHNbcm93SW5kZXhdW21vbnRoSW5kZXhdID0gbmV3TW9udGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcclxuICBtb250aENhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPVxyXG4gICAgb3B0aW9ucy5tb250aEluZGV4ID4gMCAmJiBvcHRpb25zLm1vbnRoSW5kZXggIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcclxuICBtb250aENhbGVuZGFyLmhpZGVSaWdodEFycm93ID1cclxuICAgIG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxyXG4gICAgb3B0aW9ucy5tb250aEluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xyXG5cclxuICBtb250aENhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcclxuICAgIHNoaWZ0RGF0ZShtb250aENhbGVuZGFyLm1vbnRoc1swXVswXS5kYXRlLCB7IHllYXI6IC0xIH0pLFxyXG4gICAgb3B0aW9ucy5taW5EYXRlLFxyXG4gICAgb3B0aW9ucy5tYXhEYXRlXHJcbiAgKTtcclxuICBtb250aENhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXHJcbiAgICBzaGlmdERhdGUobW9udGhDYWxlbmRhci5tb250aHNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAxIH0pLFxyXG4gICAgb3B0aW9ucy5taW5EYXRlLFxyXG4gICAgb3B0aW9ucy5tYXhEYXRlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1vbnRoQ2FsZW5kYXI7XHJcbn1cclxuIl19