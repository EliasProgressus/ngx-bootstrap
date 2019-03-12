/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { startOf, formatDate } from 'ngx-bootstrap/chronos';
import { createMatrix } from '../utils/matrix-utils';
const /** @type {?} */ height = 4;
const /** @type {?} */ width = 3;
const /** @type {?} */ shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
export function formatMonthsCalendar(viewDate, formatOptions) {
    const /** @type {?} */ initialDate = startOf(viewDate, 'year');
    const /** @type {?} */ matrixOptions = { width, height, initialDate, shift };
    const /** @type {?} */ monthMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
    }));
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LW1vbnRocy1jYWxlbmRhci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbImVuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFLQSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCx1QkFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLHVCQUFNLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDaEIsdUJBQU0sS0FBSyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFM0IsTUFBTSwrQkFDSixRQUFjLEVBQ2QsYUFBc0M7SUFFdEMsdUJBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsdUJBQU0sYUFBYSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDNUQsdUJBQU0sV0FBVyxHQUFHLFlBQVksQ0FFOUIsYUFBYSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixJQUFJO1FBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO0tBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxDQUFDO1FBQ0wsTUFBTSxFQUFFLFdBQVc7UUFDbkIsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTLEVBQUUsVUFBVSxDQUNuQixRQUFRLEVBQ1IsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7S0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IHN0YXJ0T2YsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xyXG5cclxuY29uc3QgaGVpZ2h0ID0gNDtcclxuY29uc3Qgd2lkdGggPSAzO1xyXG5jb25zdCBzaGlmdCA9IHsgbW9udGg6IDEgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb250aHNDYWxlbmRhcihcclxuICB2aWV3RGF0ZTogRGF0ZSxcclxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4pOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzdGFydE9mKHZpZXdEYXRlLCAneWVhcicpO1xyXG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7IHdpZHRoLCBoZWlnaHQsIGluaXRpYWxEYXRlLCBzaGlmdCB9O1xyXG4gIGNvbnN0IG1vbnRoTWF0cml4ID0gY3JlYXRlTWF0cml4PFxyXG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXHJcbiAgPihtYXRyaXhPcHRpb25zLCBkYXRlID0+ICh7XHJcbiAgICBkYXRlLFxyXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5tb250aExhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb250aHM6IG1vbnRoTWF0cml4LFxyXG4gICAgbW9udGhUaXRsZTogJycsXHJcbiAgICB5ZWFyVGl0bGU6IGZvcm1hdERhdGUoXHJcbiAgICAgIHZpZXdEYXRlLFxyXG4gICAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcclxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcclxuICAgIClcclxuICB9O1xyXG59XHJcbiJdfQ==