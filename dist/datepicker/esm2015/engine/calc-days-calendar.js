/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getFirstDayOfMonth } from 'ngx-bootstrap/chronos';
import { getStartingDayOfCalendar } from '../utils/bs-calendar-utils';
import { createMatrix } from '../utils/matrix-utils';
/**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */
export function calcDaysCalendar(startingDate, options) {
    const /** @type {?} */ firstDay = getFirstDayOfMonth(startingDate);
    const /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
    const /** @type {?} */ matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate,
        shift: { day: 1 }
    };
    const /** @type {?} */ daysMatrix = createMatrix(matrixOptions, date => date);
    return {
        daysMatrix,
        month: firstDay
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFckQsTUFBTSwyQkFDSixZQUFrQixFQUNsQixPQUF5QjtJQUV6Qix1QkFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsdUJBQU0sV0FBVyxHQUFHLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoRSx1QkFBTSxhQUFhLEdBQUc7UUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtRQUN0QixXQUFXO1FBQ1gsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtLQUNsQixDQUFDO0lBQ0YsdUJBQU0sVUFBVSxHQUFHLFlBQVksQ0FBTyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVuRSxNQUFNLENBQUM7UUFDTCxVQUFVO1FBQ1YsS0FBSyxFQUFFLFFBQVE7S0FDaEIsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdXNlciBhbmQgbW9kZWwgaW5wdXQgc2hvdWxkIGhhbmRsZSBwYXJzaW5nIGFuZCB2YWxpZGF0aW5nIGlucHV0IHZhbHVlc1xyXG4vLyBzaG91bGQgYWNjZXB0IHNvbWUgb3B0aW9uc1xyXG4vLyB0b2RvOiBzcGxpdCBvdXQgZm9ybWF0dGluZ1xyXG5pbXBvcnQgeyBEYXlzQ2FsZW5kYXJNb2RlbCwgTW9udGhWaWV3T3B0aW9ucyB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGdldEZpcnN0RGF5T2ZNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhciB9IGZyb20gJy4uL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjRGF5c0NhbGVuZGFyKFxyXG4gIHN0YXJ0aW5nRGF0ZTogRGF0ZSxcclxuICBvcHRpb25zOiBNb250aFZpZXdPcHRpb25zXHJcbik6IERheXNDYWxlbmRhck1vZGVsIHtcclxuICBjb25zdCBmaXJzdERheSA9IGdldEZpcnN0RGF5T2ZNb250aChzdGFydGluZ0RhdGUpO1xyXG4gIGNvbnN0IGluaXRpYWxEYXRlID0gZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyKGZpcnN0RGF5LCBvcHRpb25zKTtcclxuXHJcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHtcclxuICAgIHdpZHRoOiBvcHRpb25zLndpZHRoLFxyXG4gICAgaGVpZ2h0OiBvcHRpb25zLmhlaWdodCxcclxuICAgIGluaXRpYWxEYXRlLFxyXG4gICAgc2hpZnQ6IHsgZGF5OiAxIH1cclxuICB9O1xyXG4gIGNvbnN0IGRheXNNYXRyaXggPSBjcmVhdGVNYXRyaXg8RGF0ZT4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiBkYXRlKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGRheXNNYXRyaXgsXHJcbiAgICBtb250aDogZmlyc3REYXlcclxuICB9O1xyXG59XHJcbiJdfQ==