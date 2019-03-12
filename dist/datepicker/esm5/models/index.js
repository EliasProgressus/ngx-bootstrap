/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * **************
 * @record
 */
export function NavigationViewModel() { }
function NavigationViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    NavigationViewModel.prototype.monthTitle;
    /** @type {?} */
    NavigationViewModel.prototype.yearTitle;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.hideRightArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableLeftArrow;
    /** @type {?|undefined} */
    NavigationViewModel.prototype.disableRightArrow;
}
/**
 * @record
 */
export function CalendarCellViewModel() { }
function CalendarCellViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarCellViewModel.prototype.date;
    /** @type {?} */
    CalendarCellViewModel.prototype.label;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isDisabled;
    /** @type {?|undefined} */
    CalendarCellViewModel.prototype.isHovered;
}
/**
 * **************
 * @record
 */
export function DayViewModel() { }
function DayViewModel_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonthHovered;
    /** @type {?|undefined} */
    DayViewModel.prototype.isOtherMonth;
    /** @type {?|undefined} */
    DayViewModel.prototype.isInRange;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionStart;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelectionEnd;
    /** @type {?|undefined} */
    DayViewModel.prototype.isSelected;
    /** @type {?|undefined} */
    DayViewModel.prototype.isToday;
    /** @type {?|undefined} */
    DayViewModel.prototype.monthIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.weekIndex;
    /** @type {?|undefined} */
    DayViewModel.prototype.dayIndex;
}
/**
 * @record
 */
export function WeekViewModel() { }
function WeekViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekViewModel.prototype.days;
    /** @type {?|undefined} */
    WeekViewModel.prototype.isHovered;
}
/**
 * @record
 */
export function DaysCalendarViewModel() { }
function DaysCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarViewModel.prototype.weeks;
    /** @type {?} */
    DaysCalendarViewModel.prototype.month;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekNumbers;
    /** @type {?} */
    DaysCalendarViewModel.prototype.weekdays;
}
/**
 * **************
 * @record
 */
export function MonthsCalendarViewModel() { }
function MonthsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthsCalendarViewModel.prototype.months;
}
/**
 * **************
 * @record
 */
export function YearsCalendarViewModel() { }
function YearsCalendarViewModel_tsickle_Closure_declarations() {
    /** @type {?} */
    YearsCalendarViewModel.prototype.years;
}
/**
 * **************
 * @record
 */
export function DaysCalendarModel() { }
function DaysCalendarModel_tsickle_Closure_declarations() {
    /** @type {?} */
    DaysCalendarModel.prototype.daysMatrix;
    /** @type {?} */
    DaysCalendarModel.prototype.month;
}
/**
 * **************
 * @record
 */
export function MonthViewOptions() { }
function MonthViewOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    MonthViewOptions.prototype.width;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.height;
    /** @type {?|undefined} */
    MonthViewOptions.prototype.firstDayOfWeek;
}
/**
 * **************
 * @record
 */
export function DatepickerFormatOptions() { }
function DatepickerFormatOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    DatepickerFormatOptions.prototype.locale;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearTitle;
    /** @type {?} */
    DatepickerFormatOptions.prototype.dayLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.monthLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.yearLabel;
    /** @type {?} */
    DatepickerFormatOptions.prototype.weekNumbers;
}
/**
 * @record
 */
export function DatepickerRenderOptions() { }
function DatepickerRenderOptions_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.showWeekNumbers;
    /** @type {?|undefined} */
    DatepickerRenderOptions.prototype.displayMonths;
}
/** @enum {number} */
var BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
export { BsNavigationDirection };
BsNavigationDirection[BsNavigationDirection.UP] = "UP";
BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";
/**
 * @record
 */
export function BsNavigationEvent() { }
function BsNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.direction;
    /** @type {?|undefined} */
    BsNavigationEvent.prototype.step;
}
/**
 * @record
 */
export function BsViewNavigationEvent() { }
function BsViewNavigationEvent_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    BsViewNavigationEvent.prototype.unit;
    /** @type {?} */
    BsViewNavigationEvent.prototype.viewMode;
}
/**
 * @record
 */
export function CellHoverEvent() { }
function CellHoverEvent_tsickle_Closure_declarations() {
    /** @type {?} */
    CellHoverEvent.prototype.cell;
    /** @type {?} */
    CellHoverEvent.prototype.isHovered;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJtb2RlbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVVbml0IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmV4cG9ydCB0eXBlIEJzRGF0ZXBpY2tlclZpZXdNb2RlID0gJ2RheScgfCAnbW9udGgnIHwgJ3llYXInO1xyXG5cclxuLyoqICoqKioqKioqKioqKioqKiAqL1xyXG4vLyBuYXZpZ2F0aW9uIGJhciBzZXR0aW5nc1xyXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRpb25WaWV3TW9kZWwge1xyXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcclxuICB5ZWFyVGl0bGU6IHN0cmluZztcclxuICBoaWRlTGVmdEFycm93PzogYm9vbGVhbjtcclxuICBoaWRlUmlnaHRBcnJvdz86IGJvb2xlYW47XHJcbiAgZGlzYWJsZUxlZnRBcnJvdz86IGJvb2xlYW47XHJcbiAgZGlzYWJsZVJpZ2h0QXJyb3c/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB7XHJcbiAgZGF0ZTogRGF0ZTtcclxuICBsYWJlbDogc3RyaW5nO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIGlzSG92ZXJlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKiAqKioqKioqKioqKioqKiogKi9cclxuLy8gZGF5cyBtYXRyaXg6IGRheSBjZWxsIHZpZXcgbW9kZWxcclxuZXhwb3J0IGludGVyZmFjZSBEYXlWaWV3TW9kZWwgZXh0ZW5kcyBDYWxlbmRhckNlbGxWaWV3TW9kZWwge1xyXG4gIGlzT3RoZXJNb250aEhvdmVyZWQ/OiBib29sZWFuO1xyXG4gIGlzT3RoZXJNb250aD86IGJvb2xlYW47XHJcbiAgaXNJblJhbmdlPzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGlvblN0YXJ0PzogYm9vbGVhbjtcclxuICBpc1NlbGVjdGlvbkVuZD86IGJvb2xlYW47XHJcbiAgaXNTZWxlY3RlZD86IGJvb2xlYW47XHJcbiAgaXNUb2RheT86IGJvb2xlYW47XHJcbiAgLy8gZGF5IGluZGV4XHJcbiAgbW9udGhJbmRleD86IG51bWJlcjtcclxuICB3ZWVrSW5kZXg/OiBudW1iZXI7XHJcbiAgZGF5SW5kZXg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2Vla1ZpZXdNb2RlbCB7XHJcbiAgZGF5czogRGF5Vmlld01vZGVsW107XHJcbiAgaXNIb3ZlcmVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuLy8gdG9kbzogc3BsaXQgbmF2aWdhdGlvbiBzZXR0aW5nc1xyXG5leHBvcnQgaW50ZXJmYWNlIERheXNDYWxlbmRhclZpZXdNb2RlbCBleHRlbmRzIE5hdmlnYXRpb25WaWV3TW9kZWwge1xyXG4gIHdlZWtzOiBXZWVrVmlld01vZGVsW107XHJcbiAgLy8gYWRkaXRpb25hbCBpbmZvcm1hdGlvblxyXG4gIG1vbnRoOiBEYXRlO1xyXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmdbXTtcclxuICB3ZWVrZGF5czogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKiAqKioqKioqKioqKioqKiogKi9cclxuLy8gbW9udGhzIGNhbGVuZGFyXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwgZXh0ZW5kcyBOYXZpZ2F0aW9uVmlld01vZGVsIHtcclxuICBtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XHJcbn1cclxuXHJcbi8qKiAqKioqKioqKioqKioqKiogKi9cclxuLy8geWVhcnMgY2FsZW5kYXJcclxuZXhwb3J0IGludGVyZmFjZSBZZWFyc0NhbGVuZGFyVmlld01vZGVsIGV4dGVuZHMgTmF2aWdhdGlvblZpZXdNb2RlbCB7XHJcbiAgeWVhcnM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW107XHJcbn1cclxuXHJcbi8qKiAqKioqKioqKioqKioqKiogKi9cclxuXHJcbi8vIG1hdGggbW9kZWxcclxuLyoqICoqKioqKioqKioqKioqKiAqL1xyXG5cclxuLy8gZGF5cyBEYXRlJ3MgYXJyYXlcclxuZXhwb3J0IGludGVyZmFjZSBEYXlzQ2FsZW5kYXJNb2RlbCB7XHJcbiAgZGF5c01hdHJpeDogRGF0ZVtdW107XHJcbiAgbW9udGg6IERhdGU7XHJcbn1cclxuXHJcbi8qKiAqKioqKioqKioqKioqKiogKi9cclxuLy8gc29tZSBmdW5jIG9wdGlvbnNcclxuZXhwb3J0IGludGVyZmFjZSBNb250aFZpZXdPcHRpb25zIHtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgZmlyc3REYXlPZldlZWs/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKiAqKioqKioqKioqKioqKiogKi9cclxuLy8gcmVuZGVyaW5nIG9wdGlvbnNcclxuZXhwb3J0IGludGVyZmFjZSBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XHJcbiAgbG9jYWxlOiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcclxuICB5ZWFyVGl0bGU6IHN0cmluZztcclxuXHJcbiAgZGF5TGFiZWw6IHN0cmluZztcclxuICBtb250aExhYmVsOiBzdHJpbmc7XHJcbiAgeWVhckxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMge1xyXG4gIHNob3dXZWVrTnVtYmVycz86IGJvb2xlYW47XHJcbiAgZGlzcGxheU1vbnRocz86IG51bWJlcjtcclxufVxyXG5cclxuLyoqICoqKioqKioqKioqKioqKiAqL1xyXG4vLyBldmVudHNcclxuLyoqICoqKioqKioqKioqKioqKiAqL1xyXG5leHBvcnQgZW51bSBCc05hdmlnYXRpb25EaXJlY3Rpb24ge1xyXG4gIFVQLFxyXG4gIERPV05cclxufVxyXG5cclxuLy8gdXNlZCBmb3IgbmF2aWdhdGlvbiBldmVudHMsIHRvIGNoYW5nZSB2aWV3IGRhdGUgaW4gc3RhdGVcclxuZXhwb3J0IGludGVyZmFjZSBCc05hdmlnYXRpb25FdmVudCB7XHJcbiAgZGlyZWN0aW9uPzogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uO1xyXG4gIHN0ZXA/OiBUaW1lVW5pdDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQge1xyXG4gIHVuaXQ/OiBUaW1lVW5pdDtcclxuICB2aWV3TW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2VsbEhvdmVyRXZlbnQge1xyXG4gIGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbDtcclxuICBpc0hvdmVyZWQ6IGJvb2xlYW47XHJcbn1cclxuIl19