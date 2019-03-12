/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { defaultMonthOptions } from './_defaults';
import { BsDatepickerConfig } from '../bs-datepicker.config';
/**
 * @record
 */
export function BsDatepickerViewState() { }
function BsDatepickerViewState_tsickle_Closure_declarations() {
    /** @type {?} */
    BsDatepickerViewState.prototype.date;
    /** @type {?} */
    BsDatepickerViewState.prototype.mode;
}
var BsDatepickerState = /** @class */ (function () {
    function BsDatepickerState() {
    }
    return BsDatepickerState;
}());
export { BsDatepickerState };
function BsDatepickerState_tsickle_Closure_declarations() {
    /** @type {?} */
    BsDatepickerState.prototype.selectedDate;
    /** @type {?} */
    BsDatepickerState.prototype.selectedRange;
    /** @type {?} */
    BsDatepickerState.prototype.view;
    /** @type {?} */
    BsDatepickerState.prototype.isDisabled;
    /** @type {?} */
    BsDatepickerState.prototype.minDate;
    /** @type {?} */
    BsDatepickerState.prototype.maxDate;
    /** @type {?} */
    BsDatepickerState.prototype.daysDisabled;
    /** @type {?} */
    BsDatepickerState.prototype.datesDisabled;
    /** @type {?} */
    BsDatepickerState.prototype.minMode;
    /** @type {?} */
    BsDatepickerState.prototype.hoveredDate;
    /** @type {?} */
    BsDatepickerState.prototype.hoveredMonth;
    /** @type {?} */
    BsDatepickerState.prototype.hoveredYear;
    /** @type {?} */
    BsDatepickerState.prototype.monthsModel;
    /** @type {?} */
    BsDatepickerState.prototype.formattedMonths;
    /** @type {?} */
    BsDatepickerState.prototype.flaggedMonths;
    /** @type {?} */
    BsDatepickerState.prototype.selectFromOtherMonth;
    /** @type {?} */
    BsDatepickerState.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerState.prototype.flaggedMonthsCalendar;
    /** @type {?} */
    BsDatepickerState.prototype.yearsCalendarModel;
    /** @type {?} */
    BsDatepickerState.prototype.yearsCalendarFlagged;
    /** @type {?} */
    BsDatepickerState.prototype.monthViewOptions;
    /** @type {?} */
    BsDatepickerState.prototype.showWeekNumbers;
    /** @type {?} */
    BsDatepickerState.prototype.displayMonths;
    /** @type {?} */
    BsDatepickerState.prototype.locale;
    /** @type {?} */
    BsDatepickerState.prototype.monthTitle;
    /** @type {?} */
    BsDatepickerState.prototype.yearTitle;
    /** @type {?} */
    BsDatepickerState.prototype.dayLabel;
    /** @type {?} */
    BsDatepickerState.prototype.monthLabel;
    /** @type {?} */
    BsDatepickerState.prototype.yearLabel;
    /** @type {?} */
    BsDatepickerState.prototype.weekNumbers;
}
var /** @type {?} */ _initialView = { date: new Date(), mode: 'day' };
export var /** @type {?} */ initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInJlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBVUEsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7OztBQU83RCxJQUFBOzs7NEJBbEJBO0lBd0VDLENBQUE7QUF0REQsNkJBc0RDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxxQkFBTSxZQUFZLEdBQTBCLEVBQUUsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBRTlFLE1BQU0sQ0FBQyxxQkFBTSxzQkFBc0IsR0FBc0IsTUFBTSxDQUFDLE1BQU0sQ0FDcEUsSUFBSSxrQkFBa0IsRUFBRSxFQUN4QjtJQUNFLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLFlBQVk7SUFDbEIsYUFBYSxFQUFFLEVBQUU7SUFDakIsZ0JBQWdCLEVBQUUsbUJBQW1CO0NBQ3RDLENBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXHJcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXHJcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXHJcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIE1vbnRoVmlld09wdGlvbnMsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRNb250aE9wdGlvbnMgfSBmcm9tICcuL19kZWZhdWx0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnNEYXRlcGlja2VyVmlld1N0YXRlIHtcclxuICBkYXRlOiBEYXRlO1xyXG4gIG1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RhdGVcclxuICBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLCBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XHJcbiAgLy8gZGF0ZSBwaWNrZXJcclxuICBzZWxlY3RlZERhdGU/OiBEYXRlO1xyXG4gIC8vIGRhdGVyYW5nZSBwaWNrZXJcclxuICBzZWxlY3RlZFJhbmdlPzogRGF0ZVtdO1xyXG5cclxuICAvLyBpbml0aWFsIGRhdGUgb2YgY2FsZW5kYXIsIHRvZGF5IGJ5IGRlZmF1bHRcclxuICB2aWV3OiBCc0RhdGVwaWNrZXJWaWV3U3RhdGU7XHJcblxyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8vIGJvdW5kc1xyXG4gIG1pbkRhdGU/OiBEYXRlO1xyXG4gIG1heERhdGU/OiBEYXRlO1xyXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xyXG4gIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW107XHJcbiAgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xyXG5cclxuICBob3ZlcmVkRGF0ZT86IERhdGU7XHJcbiAgaG92ZXJlZE1vbnRoPzogRGF0ZTtcclxuICBob3ZlcmVkWWVhcj86IERhdGU7XHJcblxyXG4gIC8vIGRheXMgY2FsZW5kYXJcclxuICBtb250aHNNb2RlbD86IERheXNDYWxlbmRhck1vZGVsW107XHJcbiAgZm9ybWF0dGVkTW9udGhzPzogRGF5c0NhbGVuZGFyVmlld01vZGVsW107XHJcbiAgZmxhZ2dlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcclxuXHJcbiAgLy8gbW9udGhzIGNhbGVuZGFyXHJcbiAgbW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG4gIGZsYWdnZWRNb250aHNDYWxlbmRhcj86IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW107XHJcblxyXG4gIC8vIHllYXJzIGNhbGVuZGFyXHJcbiAgeWVhcnNDYWxlbmRhck1vZGVsPzogWWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG4gIHllYXJzQ2FsZW5kYXJGbGFnZ2VkPzogWWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG5cclxuICAvLyBvcHRpb25zXHJcbiAgbW9udGhWaWV3T3B0aW9uczogTW9udGhWaWV3T3B0aW9ucztcclxuXHJcbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcclxuICBzaG93V2Vla051bWJlcnM/OiBib29sZWFuO1xyXG4gIGRpc3BsYXlNb250aHM/OiBudW1iZXI7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXHJcbiAgbG9jYWxlOiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcclxuICB5ZWFyVGl0bGU6IHN0cmluZztcclxuXHJcbiAgZGF5TGFiZWw6IHN0cmluZztcclxuICBtb250aExhYmVsOiBzdHJpbmc7XHJcbiAgeWVhckxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IF9pbml0aWFsVmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlID0geyBkYXRlOiBuZXcgRGF0ZSgpLCBtb2RlOiAnZGF5JyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxEYXRlcGlja2VyU3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlID0gT2JqZWN0LmFzc2lnbihcclxuICBuZXcgQnNEYXRlcGlja2VyQ29uZmlnKCksXHJcbiAge1xyXG4gICAgbG9jYWxlOiAnZW4nLFxyXG4gICAgdmlldzogX2luaXRpYWxWaWV3LFxyXG4gICAgc2VsZWN0ZWRSYW5nZTogW10sXHJcbiAgICBtb250aFZpZXdPcHRpb25zOiBkZWZhdWx0TW9udGhPcHRpb25zXHJcbiAgfVxyXG4pO1xyXG4iXX0=