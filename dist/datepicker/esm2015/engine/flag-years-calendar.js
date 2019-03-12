/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isSameYear, shiftDate } from 'ngx-bootstrap/chronos';
import { isYearDisabled } from '../utils/bs-calendar-utils';
/**
 * @record
 */
export function FlagYearsCalendarOptions() { }
function FlagYearsCalendarOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.isDisabled;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.minDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.maxDate;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.hoveredYear;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.displayMonths;
    /** @type {?} */
    FlagYearsCalendarOptions.prototype.yearIndex;
}
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
export function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((years, rowIndex) => {
        years.forEach((year, yearIndex) => {
            const /** @type {?} */ isHovered = isSameYear(year.date, options.hoveredYear);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            const /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered, isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    const /** @type {?} */ i = yearsCalendar.years.length - 1;
    const /** @type {?} */ j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy15ZWFycy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVELE1BQU0sNEJBQ0osYUFBcUMsRUFDckMsT0FBaUM7SUFFakMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLENBQUMsS0FBOEIsRUFBRSxRQUFnQixFQUFFLEVBQUU7UUFDbkQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQTJCLEVBQUUsU0FBaUIsRUFBRSxFQUFFO1lBQy9ELHVCQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0QsdUJBQU0sVUFBVSxHQUNkLE9BQU8sQ0FBQyxVQUFVO2dCQUNsQixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUU5RCx1QkFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDeEUsRUFBRSxDQUFDLENBQ0QsSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLENBQUMsU0FBUztnQkFDckMsSUFBSSxDQUFDLFVBQVUsS0FBSyxRQUFRLENBQUMsVUFDL0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0QsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxRQUFRLENBQUM7YUFDckQ7U0FDRixDQUFDLENBQUM7S0FDSixDQUNGLENBQUM7O0lBR0YsYUFBYSxDQUFDLGFBQWE7UUFDekIsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQ3ZFLGFBQWEsQ0FBQyxjQUFjO1FBQzFCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWE7WUFDekMsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUVsRCxhQUFhLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUM3QyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUN2RCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7SUFDRix1QkFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLHVCQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDNUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FDOUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3RELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1NhbWVZZWFyLCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBZZWFyc0NhbGVuZGFyVmlld01vZGVsLCBDYWxlbmRhckNlbGxWaWV3TW9kZWwgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBpc1llYXJEaXNhYmxlZCB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zIHtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIG1pbkRhdGU6IERhdGU7XHJcbiAgbWF4RGF0ZTogRGF0ZTtcclxuICBob3ZlcmVkWWVhcjogRGF0ZTtcclxuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XHJcbiAgeWVhckluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGFnWWVhcnNDYWxlbmRhcihcclxuICB5ZWFyc0NhbGVuZGFyOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIG9wdGlvbnM6IEZsYWdZZWFyc0NhbGVuZGFyT3B0aW9uc1xyXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcclxuICB5ZWFyc0NhbGVuZGFyLnllYXJzLmZvckVhY2goXHJcbiAgICAoeWVhcnM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdLCByb3dJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIHllYXJzLmZvckVhY2goKHllYXI6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgeWVhckluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVZZWFyKHllYXIuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkWWVhcik7XHJcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XHJcbiAgICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcclxuICAgICAgICAgIGlzWWVhckRpc2FibGVkKHllYXIuZGF0ZSwgb3B0aW9ucy5taW5EYXRlLCBvcHRpb25zLm1heERhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdNb250aCA9IE9iamVjdC5hc3NpZ24oLyp7fSwqLyB5ZWFyLCB7IGlzSG92ZXJlZCwgaXNEaXNhYmxlZCB9KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICB5ZWFyLmlzSG92ZXJlZCAhPT0gbmV3TW9udGguaXNIb3ZlcmVkIHx8XHJcbiAgICAgICAgICB5ZWFyLmlzRGlzYWJsZWQgIT09IG5ld01vbnRoLmlzRGlzYWJsZWRcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHllYXJzQ2FsZW5kYXIueWVhcnNbcm93SW5kZXhdW3llYXJJbmRleF0gPSBuZXdNb250aDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgbGlua2VkIGNhbGVuZGFyc1xyXG4gIHllYXJzQ2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA9XHJcbiAgICBvcHRpb25zLnllYXJJbmRleCA+IDAgJiYgb3B0aW9ucy55ZWFySW5kZXggIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcclxuICB5ZWFyc0NhbGVuZGFyLmhpZGVSaWdodEFycm93ID1cclxuICAgIG9wdGlvbnMueWVhckluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXHJcbiAgICBvcHRpb25zLnllYXJJbmRleCArIDEgIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcclxuXHJcbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlTGVmdEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXHJcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1swXVswXS5kYXRlLCB7IHllYXI6IC0xIH0pLFxyXG4gICAgb3B0aW9ucy5taW5EYXRlLFxyXG4gICAgb3B0aW9ucy5tYXhEYXRlXHJcbiAgKTtcclxuICBjb25zdCBpID0geWVhcnNDYWxlbmRhci55ZWFycy5sZW5ndGggLSAxO1xyXG4gIGNvbnN0IGogPSB5ZWFyc0NhbGVuZGFyLnllYXJzW2ldLmxlbmd0aCAtIDE7XHJcbiAgeWVhcnNDYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvdyA9IGlzWWVhckRpc2FibGVkKFxyXG4gICAgc2hpZnREYXRlKHllYXJzQ2FsZW5kYXIueWVhcnNbaV1bal0uZGF0ZSwgeyB5ZWFyOiAxIH0pLFxyXG4gICAgb3B0aW9ucy5taW5EYXRlLFxyXG4gICAgb3B0aW9ucy5tYXhEYXRlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHllYXJzQ2FsZW5kYXI7XHJcbn1cclxuIl19