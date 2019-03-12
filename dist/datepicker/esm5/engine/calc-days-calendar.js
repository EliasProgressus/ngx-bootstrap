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
    var /** @type {?} */ firstDay = getFirstDayOfMonth(startingDate);
    var /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
    var /** @type {?} */ matrixOptions = {
        width: options.width,
        height: options.height,
        initialDate: initialDate,
        shift: { day: 1 }
    };
    var /** @type {?} */ daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
    return {
        daysMatrix: daysMatrix,
        month: firstDay
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsYy1kYXlzLWNhbGVuZGFyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsiZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFckQsTUFBTSwyQkFDSixZQUFrQixFQUNsQixPQUF5QjtJQUV6QixxQkFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQscUJBQU0sV0FBVyxHQUFHLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoRSxxQkFBTSxhQUFhLEdBQUc7UUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtRQUN0QixXQUFXLGFBQUE7UUFDWCxLQUFLLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFO0tBQ2xCLENBQUM7SUFDRixxQkFBTSxVQUFVLEdBQUcsWUFBWSxDQUFPLGFBQWEsRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztJQUVuRSxNQUFNLENBQUM7UUFDTCxVQUFVLFlBQUE7UUFDVixLQUFLLEVBQUUsUUFBUTtLQUNoQixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyB1c2VyIGFuZCBtb2RlbCBpbnB1dCBzaG91bGQgaGFuZGxlIHBhcnNpbmcgYW5kIHZhbGlkYXRpbmcgaW5wdXQgdmFsdWVzXHJcbi8vIHNob3VsZCBhY2NlcHQgc29tZSBvcHRpb25zXHJcbi8vIHRvZG86IHNwbGl0IG91dCBmb3JtYXR0aW5nXHJcbmltcG9ydCB7IERheXNDYWxlbmRhck1vZGVsLCBNb250aFZpZXdPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgZ2V0Rmlyc3REYXlPZk1vbnRoIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEYXlzQ2FsZW5kYXIoXHJcbiAgc3RhcnRpbmdEYXRlOiBEYXRlLFxyXG4gIG9wdGlvbnM6IE1vbnRoVmlld09wdGlvbnNcclxuKTogRGF5c0NhbGVuZGFyTW9kZWwge1xyXG4gIGNvbnN0IGZpcnN0RGF5ID0gZ2V0Rmlyc3REYXlPZk1vbnRoKHN0YXJ0aW5nRGF0ZSk7XHJcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZmlyc3REYXksIG9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBtYXRyaXhPcHRpb25zID0ge1xyXG4gICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgaW5pdGlhbERhdGUsXHJcbiAgICBzaGlmdDogeyBkYXk6IDEgfVxyXG4gIH07XHJcbiAgY29uc3QgZGF5c01hdHJpeCA9IGNyZWF0ZU1hdHJpeDxEYXRlPihtYXRyaXhPcHRpb25zLCBkYXRlID0+IGRhdGUpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF5c01hdHJpeCxcclxuICAgIG1vbnRoOiBmaXJzdERheVxyXG4gIH07XHJcbn1cclxuIl19