/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isSame } from 'ngx-bootstrap/chronos';
/**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */
export function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    const /** @type {?} */ weekDay = getDay(date);
    const /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */
export function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    const /** @type {?} */ offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function isMonthDisabled(date, min, max) {
    const /** @type {?} */ minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    const /** @type {?} */ maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function isYearDisabled(date, min, max) {
    const /** @type {?} */ minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    const /** @type {?} */ maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */
export function isDisabledDate(date, datesDisabled) {
    if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'date'));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY2FsZW5kYXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ1dGlscy9icy1jYWxlbmRhci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBRS9CLE1BQU0sbUNBQW1DLElBQVUsRUFDVixPQUFvQztJQUMzRSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCx1QkFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLHVCQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztDQUN4Qzs7Ozs7O0FBRUQsTUFBTSw4QkFBOEIsT0FBZSxFQUFFLGlCQUF5QjtJQUM1RSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDaEI7SUFFRCx1QkFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUUvQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0NBQ3pDOzs7Ozs7O0FBRUQsTUFBTSwwQkFBMEIsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQzlELHVCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLHVCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO0NBQzdCOzs7Ozs7O0FBRUQsTUFBTSx5QkFBeUIsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQzdELHVCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLHVCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5FLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO0NBQzdCOzs7Ozs7QUFFRCxNQUFNLHlCQUF5QixJQUFVLEVBQUUsYUFBcUI7SUFDOUQsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBa0IsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztDQUN2RiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgZ2V0RGF5LFxyXG4gIGlzRmlyc3REYXlPZldlZWssXHJcbiAgaXNBZnRlcixcclxuICBpc0JlZm9yZSxcclxuICBzaGlmdERhdGUsXHJcbiAgZW5kT2YsXHJcbiAgc3RhcnRPZixcclxuICBpc1NhbWVcclxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihkYXRlOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHsgZmlyc3REYXlPZldlZWs/OiBudW1iZXIgfSk6IERhdGUge1xyXG4gIGlmIChpc0ZpcnN0RGF5T2ZXZWVrKGRhdGUsIG9wdGlvbnMuZmlyc3REYXlPZldlZWspKSB7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdlZWtEYXkgPSBnZXREYXkoZGF0ZSk7XHJcbiAgY29uc3Qgb2Zmc2V0ID0gY2FsY3VsYXRlRGF0ZU9mZnNldCh3ZWVrRGF5LCBvcHRpb25zLmZpcnN0RGF5T2ZXZWVrKTtcclxuXHJcbiAgcmV0dXJuIHNoaWZ0RGF0ZShkYXRlLCB7ZGF5OiAtb2Zmc2V0fSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtkYXk6IG51bWJlciwgc3RhcnRpbmdEYXlPZmZzZXQ6IG51bWJlcik6IG51bWJlciB7XHJcbiAgaWYgKHN0YXJ0aW5nRGF5T2Zmc2V0ID09PSAwKSB7XHJcbiAgICByZXR1cm4gd2Vla2RheTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9mZnNldCA9IHdlZWtkYXkgLSBzdGFydGluZ0RheU9mZnNldCAlIDc7XHJcblxyXG4gIHJldHVybiBvZmZzZXQgPCAwID8gb2Zmc2V0ICsgNyA6IG9mZnNldDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTW9udGhEaXNhYmxlZChkYXRlOiBEYXRlLCBtaW46IERhdGUsIG1heDogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICdtb250aCcpLCBtaW4sICdkYXknKTtcclxuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ21vbnRoJyksIG1heCwgJ2RheScpO1xyXG5cclxuICByZXR1cm4gbWluQm91bmQgfHwgbWF4Qm91bmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1llYXJEaXNhYmxlZChkYXRlOiBEYXRlLCBtaW46IERhdGUsIG1heDogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG1pbkJvdW5kID0gbWluICYmIGlzQmVmb3JlKGVuZE9mKGRhdGUsICd5ZWFyJyksIG1pbiwgJ2RheScpO1xyXG4gIGNvbnN0IG1heEJvdW5kID0gbWF4ICYmIGlzQWZ0ZXIoc3RhcnRPZihkYXRlLCAneWVhcicpLCBtYXgsICdkYXknKTtcclxuXHJcbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERhdGUoZGF0ZTogRGF0ZSwgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdKTogYm9vbGVhbiB7XHJcbiAgaWYgKGRhdGVzRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCAhZGF0ZXNEaXNhYmxlZCB8fCAhZGF0ZXNEaXNhYmxlZC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlc0Rpc2FibGVkLnNvbWUoKGRhdGVEaXNhYmxlZDogRGF0ZSkgPT4gaXNTYW1lKGRhdGUsIGRhdGVEaXNhYmxlZCwgJ2RhdGUnKSk7XHJcbn1cclxuIl19