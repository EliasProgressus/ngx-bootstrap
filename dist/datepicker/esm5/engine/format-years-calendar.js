/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { shiftDate, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
var /** @type {?} */ height = 4;
var /** @type {?} */ width = 4;
export var /** @type {?} */ yearsPerCalendar = height * width;
var /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
var /** @type {?} */ shift = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatYearsCalendar(viewDate, formatOptions) {
    var /** @type {?} */ initialDate = shiftDate(viewDate, { year: initialShift });
    var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
        });
    });
    var /** @type {?} */ yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle: yearTitle
    };
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    var /** @type {?} */ from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    var /** @type {?} */ to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return from + " - " + to;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXllYXJzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQscUJBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQixxQkFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLE1BQU0sQ0FBQyxxQkFBTSxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQy9DLHFCQUFNLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUscUJBQU0sS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFMUIsTUFBTSw4QkFDSixRQUFjLEVBQ2QsYUFBc0M7SUFFdEMscUJBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNoRSxxQkFBTSxhQUFhLEdBQUcsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDO0lBQzVELHFCQUFNLFdBQVcsR0FBRyxZQUFZLENBRTlCLGFBQWEsRUFBRSxVQUFBLElBQUk7UUFBSSxPQUFBLENBQUM7WUFDeEIsSUFBSSxNQUFBO1lBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO1NBQ3ZFLENBQUM7SUFIdUIsQ0FHdkIsQ0FBQyxDQUFDO0lBQ0oscUJBQU0sU0FBUyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVuRSxNQUFNLENBQUM7UUFDTCxLQUFLLEVBQUUsV0FBVztRQUNsQixVQUFVLEVBQUUsRUFBRTtRQUNkLFNBQVMsV0FBQTtLQUNWLENBQUM7Q0FDSDs7Ozs7O0FBRUQsOEJBQ0UsV0FBc0MsRUFDdEMsYUFBc0M7SUFFdEMscUJBQU0sSUFBSSxHQUFHLFVBQVUsQ0FDckIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdEIsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckIsQ0FBQztJQUNGLHFCQUFNLEVBQUUsR0FBRyxVQUFVLENBQ25CLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdkMsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckIsQ0FBQztJQUVGLE1BQU0sQ0FBSSxJQUFJLFdBQU0sRUFBSSxDQUFDO0NBQzFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcclxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IHNoaWZ0RGF0ZSwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XHJcblxyXG5jb25zdCBoZWlnaHQgPSA0O1xyXG5jb25zdCB3aWR0aCA9IDQ7XHJcbmV4cG9ydCBjb25zdCB5ZWFyc1BlckNhbGVuZGFyID0gaGVpZ2h0ICogd2lkdGg7XHJcbmNvbnN0IGluaXRpYWxTaGlmdCA9IChNYXRoLmZsb29yKHllYXJzUGVyQ2FsZW5kYXIgLyAyKSAtIDEpICogLTE7XHJcbmNvbnN0IHNoaWZ0ID0geyB5ZWFyOiAxIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNDYWxlbmRhcihcclxuICB2aWV3RGF0ZTogRGF0ZSxcclxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcclxuICBjb25zdCBpbml0aWFsRGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiBpbml0aWFsU2hpZnQgfSk7XHJcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHsgd2lkdGgsIGhlaWdodCwgaW5pdGlhbERhdGUsIHNoaWZ0IH07XHJcbiAgY29uc3QgeWVhcnNNYXRyaXggPSBjcmVhdGVNYXRyaXg8XHJcbiAgICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcclxuICA+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gKHtcclxuICAgIGRhdGUsXHJcbiAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLnllYXJMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXHJcbiAgfSkpO1xyXG4gIGNvbnN0IHllYXJUaXRsZSA9IGZvcm1hdFllYXJSYW5nZVRpdGxlKHllYXJzTWF0cml4LCBmb3JtYXRPcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHllYXJzOiB5ZWFyc01hdHJpeCxcclxuICAgIG1vbnRoVGl0bGU6ICcnLFxyXG4gICAgeWVhclRpdGxlXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0WWVhclJhbmdlVGl0bGUoXHJcbiAgeWVhcnNNYXRyaXg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW10sXHJcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcclxuKTogc3RyaW5nIHtcclxuICBjb25zdCBmcm9tID0gZm9ybWF0RGF0ZShcclxuICAgIHllYXJzTWF0cml4WzBdWzBdLmRhdGUsXHJcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcclxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgKTtcclxuICBjb25zdCB0byA9IGZvcm1hdERhdGUoXHJcbiAgICB5ZWFyc01hdHJpeFtoZWlnaHQgLSAxXVt3aWR0aCAtIDFdLmRhdGUsXHJcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcclxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xyXG59XHJcbiJdfQ==