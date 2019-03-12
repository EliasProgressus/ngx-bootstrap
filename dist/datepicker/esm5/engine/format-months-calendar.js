/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { startOf, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
var /** @type {?} */ height = 4;
var /** @type {?} */ width = 3;
var /** @type {?} */ shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatMonthsCalendar(viewDate, formatOptions) {
    var /** @type {?} */ initialDate = startOf(viewDate, 'year');
    var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
    var /** @type {?} */ monthMatrix = createMatrix(matrixOptions, function (date) {
        return ({
            date: date,
            label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
        });
    });
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1vbnRocy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxxQkFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLHFCQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDaEIscUJBQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFM0IsTUFBTSwrQkFDSixRQUFjLEVBQ2QsYUFBc0M7SUFFdEMscUJBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMscUJBQU0sYUFBYSxHQUFHLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztJQUM1RCxxQkFBTSxXQUFXLEdBQUcsWUFBWSxDQUU5QixhQUFhLEVBQUUsVUFBQSxJQUFJO1FBQUksT0FBQSxDQUFDO1lBQ3hCLElBQUksTUFBQTtZQUNKLEtBQUssRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQztTQUN4RSxDQUFDO0lBSHVCLENBR3ZCLENBQUMsQ0FBQztJQUVKLE1BQU0sQ0FBQztRQUNMLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLFVBQVUsQ0FDbkIsUUFBUSxFQUNSLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO0tBQ0YsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcclxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzdGFydE9mLCBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcclxuXHJcbmNvbnN0IGhlaWdodCA9IDQ7XHJcbmNvbnN0IHdpZHRoID0gMztcclxuY29uc3Qgc2hpZnQgPSB7IG1vbnRoOiAxIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXHJcbiAgdmlld0RhdGU6IERhdGUsXHJcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcclxuKTogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwge1xyXG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc3RhcnRPZih2aWV3RGF0ZSwgJ3llYXInKTtcclxuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcclxuICBjb25zdCBtb250aE1hdHJpeCA9IGNyZWF0ZU1hdHJpeDxcclxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xyXG4gICAgZGF0ZSxcclxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMubW9udGhMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbW9udGhzOiBtb250aE1hdHJpeCxcclxuICAgIG1vbnRoVGl0bGU6ICcnLFxyXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxyXG4gICAgICB2aWV3RGF0ZSxcclxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgICApXHJcbiAgfTtcclxufVxyXG4iXX0=