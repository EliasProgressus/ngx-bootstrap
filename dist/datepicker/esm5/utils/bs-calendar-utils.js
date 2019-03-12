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
    var /** @type {?} */ weekDay = getDay(date);
    var /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
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
    var /** @type {?} */ offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function isMonthDisabled(date, min, max) {
    var /** @type {?} */ minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    var /** @type {?} */ maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
export function isYearDisabled(date, min, max) {
    var /** @type {?} */ minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    var /** @type {?} */ maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
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
    return datesDisabled.some(function (dateDisabled) { return isSame(date, dateDisabled, 'date'); });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY2FsZW5kYXItdXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ1dGlscy9icy1jYWxlbmRhci11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE1BQU0sRUFDTixnQkFBZ0IsRUFDaEIsT0FBTyxFQUNQLFFBQVEsRUFDUixTQUFTLEVBQ1QsS0FBSyxFQUNMLE9BQU8sRUFDUCxNQUFNLEVBQ1AsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7O0FBRS9CLE1BQU0sbUNBQW1DLElBQVUsRUFDVixPQUFvQztJQUMzRSxFQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCxxQkFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLHFCQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztDQUN4Qzs7Ozs7O0FBRUQsTUFBTSw4QkFBOEIsT0FBZSxFQUFFLGlCQUF5QjtJQUM1RSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDaEI7SUFFRCxxQkFBTSxNQUFNLEdBQUcsT0FBTyxHQUFHLGlCQUFpQixHQUFHLENBQUMsQ0FBQztJQUUvQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0NBQ3pDOzs7Ozs7O0FBRUQsTUFBTSwwQkFBMEIsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQzlELHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXBFLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO0NBQzdCOzs7Ozs7O0FBRUQsTUFBTSx5QkFBeUIsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQzdELHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLHFCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5FLE1BQU0sQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO0NBQzdCOzs7Ozs7QUFFRCxNQUFNLHlCQUF5QixJQUFVLEVBQUUsYUFBcUI7SUFDOUQsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLFNBQVMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNFLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQUMsWUFBa0IsSUFBSyxPQUFBLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7Q0FDdkYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGdldERheSxcclxuICBpc0ZpcnN0RGF5T2ZXZWVrLFxyXG4gIGlzQWZ0ZXIsXHJcbiAgaXNCZWZvcmUsXHJcbiAgc2hpZnREYXRlLFxyXG4gIGVuZE9mLFxyXG4gIHN0YXJ0T2YsXHJcbiAgaXNTYW1lXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIH0pOiBEYXRlIHtcclxuICBpZiAoaXNGaXJzdERheU9mV2VlayhkYXRlLCBvcHRpb25zLmZpcnN0RGF5T2ZXZWVrKSkge1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3ZWVrRGF5ID0gZ2V0RGF5KGRhdGUpO1xyXG4gIGNvbnN0IG9mZnNldCA9IGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla0RheSwgb3B0aW9ucy5maXJzdERheU9mV2Vlayk7XHJcblxyXG4gIHJldHVybiBzaGlmdERhdGUoZGF0ZSwge2RheTogLW9mZnNldH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGF0ZU9mZnNldCh3ZWVrZGF5OiBudW1iZXIsIHN0YXJ0aW5nRGF5T2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChzdGFydGluZ0RheU9mZnNldCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHdlZWtkYXk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvZmZzZXQgPSB3ZWVrZGF5IC0gc3RhcnRpbmdEYXlPZmZzZXQgJSA3O1xyXG5cclxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IG9mZnNldCArIDcgOiBvZmZzZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01vbnRoRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtaW5Cb3VuZCA9IG1pbiAmJiBpc0JlZm9yZShlbmRPZihkYXRlLCAnbW9udGgnKSwgbWluLCAnZGF5Jyk7XHJcbiAgY29uc3QgbWF4Qm91bmQgPSBtYXggJiYgaXNBZnRlcihzdGFydE9mKGRhdGUsICdtb250aCcpLCBtYXgsICdkYXknKTtcclxuXHJcbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtaW5Cb3VuZCA9IG1pbiAmJiBpc0JlZm9yZShlbmRPZihkYXRlLCAneWVhcicpLCBtaW4sICdkYXknKTtcclxuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ3llYXInKSwgbWF4LCAnZGF5Jyk7XHJcblxyXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlzYWJsZWREYXRlKGRhdGU6IERhdGUsIGRhdGVzRGlzYWJsZWQ6IERhdGVbXSk6IGJvb2xlYW4ge1xyXG4gIGlmIChkYXRlc0Rpc2FibGVkID09PSB1bmRlZmluZWQgfHwgIWRhdGVzRGlzYWJsZWQgfHwgIWRhdGVzRGlzYWJsZWQubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0ZXNEaXNhYmxlZC5zb21lKChkYXRlRGlzYWJsZWQ6IERhdGUpID0+IGlzU2FtZShkYXRlLCBkYXRlRGlzYWJsZWQsICdkYXRlJykpO1xyXG59XHJcbiJdfQ==