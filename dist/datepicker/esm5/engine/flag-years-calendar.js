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
    yearsCalendar.years.forEach(function (years, rowIndex) {
        years.forEach(function (year, yearIndex) {
            var /** @type {?} */ isHovered = isSameYear(year.date, options.hoveredYear);
            var /** @type {?} */ isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            var /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
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
    var /** @type {?} */ i = yearsCalendar.years.length - 1;
    var /** @type {?} */ j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZy15ZWFycy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVzVELE1BQU0sNEJBQ0osYUFBcUMsRUFDckMsT0FBaUM7SUFFakMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLFVBQUMsS0FBOEIsRUFBRSxRQUFnQjtRQUMvQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBMkIsRUFBRSxTQUFpQjtZQUMzRCxxQkFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdELHFCQUFNLFVBQVUsR0FDZCxPQUFPLENBQUMsVUFBVTtnQkFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUQscUJBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQztZQUN4RSxFQUFFLENBQUMsQ0FDRCxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxTQUFTO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUMvQixDQUFDLENBQUMsQ0FBQztnQkFDRCxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQzthQUNyRDtTQUNGLENBQUMsQ0FBQztLQUNKLENBQ0YsQ0FBQzs7SUFHRixhQUFhLENBQUMsYUFBYTtRQUN6QixPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFDdkUsYUFBYSxDQUFDLGNBQWM7UUFDMUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsYUFBYTtZQUN6QyxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBRWxELGFBQWEsQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQzdDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQ3ZELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUNGLHFCQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDekMscUJBQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM1QyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsY0FBYyxDQUM5QyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFDdEQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO0lBRUYsTUFBTSxDQUFDLGFBQWEsQ0FBQztDQUN0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzU2FtZVllYXIsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnMge1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgbWluRGF0ZTogRGF0ZTtcclxuICBtYXhEYXRlOiBEYXRlO1xyXG4gIGhvdmVyZWRZZWFyOiBEYXRlO1xyXG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcclxuICB5ZWFySW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdZZWFyc0NhbGVuZGFyKFxyXG4gIHllYXJzQ2FsZW5kYXI6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgb3B0aW9uczogRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zXHJcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xyXG4gIHllYXJzQ2FsZW5kYXIueWVhcnMuZm9yRWFjaChcclxuICAgICh5ZWFyczogQ2FsZW5kYXJDZWxsVmlld01vZGVsW10sIHJvd0luZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgeWVhcnMuZm9yRWFjaCgoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCB5ZWFySW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IGlzU2FtZVllYXIoeWVhci5kYXRlLCBvcHRpb25zLmhvdmVyZWRZZWFyKTtcclxuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID1cclxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxyXG4gICAgICAgICAgaXNZZWFyRGlzYWJsZWQoeWVhci5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIHllYXIsIHsgaXNIb3ZlcmVkLCBpc0Rpc2FibGVkIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHllYXIuaXNIb3ZlcmVkICE9PSBuZXdNb250aC5pc0hvdmVyZWQgfHxcclxuICAgICAgICAgIHllYXIuaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgeWVhcnNDYWxlbmRhci55ZWFyc1tyb3dJbmRleF1beWVhckluZGV4XSA9IG5ld01vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXHJcbiAgeWVhcnNDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cclxuICAgIG9wdGlvbnMueWVhckluZGV4ID4gMCAmJiBvcHRpb25zLnllYXJJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xyXG4gIHllYXJzQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxyXG4gICAgb3B0aW9ucy55ZWFySW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcclxuICAgIG9wdGlvbnMueWVhckluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xyXG5cclxuICB5ZWFyc0NhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcclxuICAgIHNoaWZ0RGF0ZSh5ZWFyc0NhbGVuZGFyLnllYXJzWzBdWzBdLmRhdGUsIHsgeWVhcjogLTEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG4gIGNvbnN0IGkgPSB5ZWFyc0NhbGVuZGFyLnllYXJzLmxlbmd0aCAtIDE7XHJcbiAgY29uc3QgaiA9IHllYXJzQ2FsZW5kYXIueWVhcnNbaV0ubGVuZ3RoIC0gMTtcclxuICB5ZWFyc0NhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXHJcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1tpXVtqXS5kYXRlLCB7IHllYXI6IDEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG5cclxuICByZXR1cm4geWVhcnNDYWxlbmRhcjtcclxufVxyXG4iXX0=