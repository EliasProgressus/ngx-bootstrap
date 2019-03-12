/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { shiftDate, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
const /** @type {?} */ height = 4;
const /** @type {?} */ width = 4;
export const /** @type {?} */ yearsPerCalendar = height * width;
const /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
const /** @type {?} */ shift = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatYearsCalendar(viewDate, formatOptions) {
    const /** @type {?} */ initialDate = shiftDate(viewDate, { year: initialShift });
    const /** @type {?} */ matrixOptions = { width, height, initialDate, shift };
    const /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
    }));
    const /** @type {?} */ yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle
    };
}
/**
 * @param {?} yearsMatrix
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    const /** @type {?} */ from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    const /** @type {?} */ to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return `${from} - ${to}`;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LXllYXJzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBS0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFckQsdUJBQU0sTUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQix1QkFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLE1BQU0sQ0FBQyx1QkFBTSxnQkFBZ0IsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQy9DLHVCQUFNLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDakUsdUJBQU0sS0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFMUIsTUFBTSw4QkFDSixRQUFjLEVBQ2QsYUFBc0M7SUFFdEMsdUJBQU0sV0FBVyxHQUFHLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNoRSx1QkFBTSxhQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUM1RCx1QkFBTSxXQUFXLEdBQUcsWUFBWSxDQUU5QixhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLElBQUk7UUFDSixLQUFLLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBRSxhQUFhLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUM7S0FDdkUsQ0FBQyxDQUFDLENBQUM7SUFDSix1QkFBTSxTQUFTLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBRW5FLE1BQU0sQ0FBQztRQUNMLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUztLQUNWLENBQUM7Q0FDSDs7Ozs7O0FBRUQsOEJBQ0UsV0FBc0MsRUFDdEMsYUFBc0M7SUFFdEMsdUJBQU0sSUFBSSxHQUFHLFVBQVUsQ0FDckIsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdEIsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckIsQ0FBQztJQUNGLHVCQUFNLEVBQUUsR0FBRyxVQUFVLENBQ25CLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDdkMsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckIsQ0FBQztJQUVGLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxFQUFFLEVBQUUsQ0FBQztDQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzaGlmdERhdGUsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xyXG5cclxuY29uc3QgaGVpZ2h0ID0gNDtcclxuY29uc3Qgd2lkdGggPSA0O1xyXG5leHBvcnQgY29uc3QgeWVhcnNQZXJDYWxlbmRhciA9IGhlaWdodCAqIHdpZHRoO1xyXG5jb25zdCBpbml0aWFsU2hpZnQgPSAoTWF0aC5mbG9vcih5ZWFyc1BlckNhbGVuZGFyIC8gMikgLSAxKSAqIC0xO1xyXG5jb25zdCBzaGlmdCA9IHsgeWVhcjogMSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFllYXJzQ2FsZW5kYXIoXHJcbiAgdmlld0RhdGU6IERhdGUsXHJcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcclxuKTogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogaW5pdGlhbFNoaWZ0IH0pO1xyXG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7IHdpZHRoLCBoZWlnaHQsIGluaXRpYWxEYXRlLCBzaGlmdCB9O1xyXG4gIGNvbnN0IHllYXJzTWF0cml4ID0gY3JlYXRlTWF0cml4PFxyXG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXHJcbiAgPihtYXRyaXhPcHRpb25zLCBkYXRlID0+ICh7XHJcbiAgICBkYXRlLFxyXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy55ZWFyTGFiZWwsIGZvcm1hdE9wdGlvbnMubG9jYWxlKVxyXG4gIH0pKTtcclxuICBjb25zdCB5ZWFyVGl0bGUgPSBmb3JtYXRZZWFyUmFuZ2VUaXRsZSh5ZWFyc01hdHJpeCwgZm9ybWF0T3B0aW9ucyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB5ZWFyczogeWVhcnNNYXRyaXgsXHJcbiAgICBtb250aFRpdGxlOiAnJyxcclxuICAgIHllYXJUaXRsZVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdFllYXJSYW5nZVRpdGxlKFxyXG4gIHllYXJzTWF0cml4OiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXVtdLFxyXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXHJcbik6IHN0cmluZyB7XHJcbiAgY29uc3QgZnJvbSA9IGZvcm1hdERhdGUoXHJcbiAgICB5ZWFyc01hdHJpeFswXVswXS5kYXRlLFxyXG4gICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXHJcbiAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxyXG4gICk7XHJcbiAgY29uc3QgdG8gPSBmb3JtYXREYXRlKFxyXG4gICAgeWVhcnNNYXRyaXhbaGVpZ2h0IC0gMV1bd2lkdGggLSAxXS5kYXRlLFxyXG4gICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXHJcbiAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxyXG4gICk7XHJcblxyXG4gIHJldHVybiBgJHtmcm9tfSAtICR7dG99YDtcclxufVxyXG4iXX0=