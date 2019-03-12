/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { initialDatepickerState } from './bs-datepicker.state';
import { BsDatepickerActions } from './bs-datepicker.actions';
import { calcDaysCalendar } from '../engine/calc-days-calendar';
import { formatDaysCalendar } from '../engine/format-days-calendar';
import { flagDaysCalendar } from '../engine/flag-days-calendar';
import { setFullDate, shiftDate, isArray, isDateValid, startOf, getLocale, isAfter, isBefore } from 'ngx-bootstrap/chronos';
import { canSwitchMode } from '../engine/view-mode';
import { formatMonthsCalendar } from '../engine/format-months-calendar';
import { flagMonthsCalendar } from '../engine/flag-months-calendar';
import { formatYearsCalendar, yearsPerCalendar } from '../engine/format-years-calendar';
import { flagYearsCalendar } from '../engine/flag-years-calendar';
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function bsDatepickerReducer(state, action) {
    if (state === void 0) { state = initialDatepickerState; }
    switch (action.type) {
        case BsDatepickerActions.CALCULATE: {
            return calculateReducer(state);
        }
        case BsDatepickerActions.FORMAT: {
            return formatReducer(state, action);
        }
        case BsDatepickerActions.FLAG: {
            return flagReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_OFFSET: {
            var /** @type {?} */ date = shiftDate(startOf(state.view.date, 'month'), action.payload);
            var /** @type {?} */ newState = {
                view: {
                    mode: state.view.mode,
                    date: date
                }
            };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            var /** @type {?} */ payload = action.payload;
            var /** @type {?} */ date = setFullDate(state.view.date, payload.unit);
            var /** @type {?} */ newState = void 0;
            var /** @type {?} */ mode = void 0;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date: date, mode: mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date: date, mode: mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode)) {
                return state;
            }
            var /** @type {?} */ date = state.view.date;
            var /** @type {?} */ mode = action.payload;
            var /** @type {?} */ newState = { view: { date: date, mode: mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            var /** @type {?} */ newState = {
                selectedDate: action.payload,
                view: state.view
            };
            var /** @type {?} */ mode = state.view.mode;
            var /** @type {?} */ _date = action.payload || state.view.date;
            var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            var /** @type {?} */ newState = action.payload;
            // preserve view mode
            var /** @type {?} */ mode = newState.minMode ? newState.minMode : state.view.mode;
            var /** @type {?} */ _viewDate = isDateValid(newState.value) && newState.value
                || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0]
                || state.view.date;
            var /** @type {?} */ date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode: mode, date: date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (isArray(newState.value)) {
                    newState.selectedRange = newState.value;
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case BsDatepickerActions.SELECT_RANGE: {
            var /** @type {?} */ newState = {
                selectedRange: action.payload,
                view: state.view
            };
            var /** @type {?} */ mode = state.view.mode;
            var /** @type {?} */ _date = action.payload && action.payload[0] || state.view.date;
            var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode: mode, date: date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case BsDatepickerActions.SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case BsDatepickerActions.SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        default:
            return state;
    }
}
/**
 * @param {?} state
 * @return {?}
 */
function calculateReducer(state) {
    // how many calendars
    var /** @type {?} */ displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    var /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
        var /** @type {?} */ monthsModel = new Array(displayMonths);
        for (var /** @type {?} */ monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = shiftDate(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel: monthsModel });
    }
    if (state.view.mode === 'month') {
        var /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function formatReducer(state, action) {
    if (state.view.mode === 'day') {
        var /** @type {?} */ formattedMonths = state.monthsModel.map(function (month, monthIndex) {
            return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
        });
        return Object.assign({}, state, { formattedMonths: formattedMonths });
    }
    // how many calendars
    var /** @type {?} */ displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    var /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'month') {
        var /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar: monthsCalendar });
    }
    if (state.view.mode === 'year') {
        var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
    }
    return state;
}
/**
 * @param {?} state
 * @param {?} action
 * @return {?}
 */
function flagReducer(state, action) {
    if (state.view.mode === 'day') {
        var /** @type {?} */ flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
            return flagDaysCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                daysDisabled: state.daysDisabled,
                datesDisabled: state.datesDisabled,
                hoveredDate: state.hoveredDate,
                selectedDate: state.selectedDate,
                selectedRange: state.selectedRange,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonths: flaggedMonths });
    }
    if (state.view.mode === 'month') {
        var /** @type {?} */ flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
            return flagMonthsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredMonth: state.hoveredMonth,
                displayMonths: state.displayMonths,
                monthIndex: monthIndex
            });
        });
        return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        var /** @type {?} */ yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
            return flagYearsCalendar(formattedMonth, {
                isDisabled: state.isDisabled,
                minDate: state.minDate,
                maxDate: state.maxDate,
                hoveredYear: state.hoveredYear,
                displayMonths: state.displayMonths,
                yearIndex: yearIndex
            });
        });
        return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
    }
    return state;
}
/**
 * @param {?} state
 * @return {?}
 */
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 * @param {?} viewDate
 * @param {?} minDate
 * @param {?} maxDate
 * @return {?}
 */
function getViewDate(viewDate, minDate, maxDate) {
    var /** @type {?} */ _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && isAfter(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && isBefore(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBcUIsc0JBQXNCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVsRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxPQUFPLEVBQ1AsV0FBVyxFQUNYLE9BQU8sRUFDUCxTQUFTLEVBQ1QsT0FBTyxFQUNQLFFBQVEsRUFDVCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7O0FBS2xFLE1BQU0sOEJBQThCLEtBQThCLEVBQzlCLE1BQWM7SUFEZCxzQkFBQSxFQUFBLDhCQUE4QjtJQUVoRSxNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwQixLQUFLLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25DLE1B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QUFFLEtBQUssQ0FBQyxVQUFVO1FBQzVCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUUxQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7UUFDeEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1FBQzVCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUUxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7S0FDL0IsQ0FBQztDQUNIOzs7Ozs7Ozs7OztBQVFELHFCQUFxQixRQUF1QixFQUFFLE9BQWEsRUFBRSxPQUFhO0lBQ3hFLHFCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUUvRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDaEI7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxPQUFPLENBQUM7S0FDaEI7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0YXRlLCBpbml0aWFsRGF0ZXBpY2tlclN0YXRlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnN0YXRlJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjYWxjRGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhcic7XHJcbmltcG9ydCB7IGZvcm1hdERheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtZGF5cy1jYWxlbmRhcic7XHJcbmltcG9ydCB7IGZsYWdEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyJztcclxuaW1wb3J0IHtcclxuICBzZXRGdWxsRGF0ZSxcclxuICBzaGlmdERhdGUsXHJcbiAgaXNBcnJheSxcclxuICBpc0RhdGVWYWxpZCxcclxuICBzdGFydE9mLFxyXG4gIGdldExvY2FsZSxcclxuICBpc0FmdGVyLFxyXG4gIGlzQmVmb3JlXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgY2FuU3dpdGNoTW9kZSB9IGZyb20gJy4uL2VuZ2luZS92aWV3LW1vZGUnO1xyXG5pbXBvcnQgeyBmb3JtYXRNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgZmxhZ01vbnRoc0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2ZsYWctbW9udGhzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgZm9ybWF0WWVhcnNDYWxlbmRhciwgeWVhcnNQZXJDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQteWVhcnMtY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBmbGFnWWVhcnNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgQnNWaWV3TmF2aWdhdGlvbkV2ZW50LCBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucywgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY3ljbG9tYXRpYy1jb21wbGV4aXR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBic0RhdGVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkNBTENVTEFURToge1xyXG4gICAgICByZXR1cm4gY2FsY3VsYXRlUmVkdWNlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVDoge1xyXG4gICAgICByZXR1cm4gZm9ybWF0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRzoge1xyXG4gICAgICByZXR1cm4gZmxhZ1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX09GRlNFVDoge1xyXG4gICAgICBjb25zdCBkYXRlID0gc2hpZnREYXRlKHN0YXJ0T2Yoc3RhdGUudmlldy5kYXRlLCAnbW9udGgnKSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICB2aWV3OiB7XHJcbiAgICAgICAgICBtb2RlOiBzdGF0ZS52aWV3Lm1vZGUsXHJcbiAgICAgICAgICBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPOiB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQ6IEJzVmlld05hdmlnYXRpb25FdmVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZSA9IHNldEZ1bGxEYXRlKHN0YXRlLnZpZXcuZGF0ZSwgcGF5bG9hZC51bml0KTtcclxuICAgICAgbGV0IG5ld1N0YXRlO1xyXG4gICAgICBsZXQgbW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XHJcbiAgICAgIGlmIChjYW5Td2l0Y2hNb2RlKHBheWxvYWQudmlld01vZGUsIHN0YXRlLm1pbk1vZGUpKSB7XHJcbiAgICAgICAgbW9kZSA9IHBheWxvYWQudmlld01vZGU7XHJcbiAgICAgICAgbmV3U3RhdGUgPSB7IHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcclxuICAgICAgICBuZXdTdGF0ZSA9IHsgc2VsZWN0ZWREYXRlOiBkYXRlLCB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1ZJRVdNT0RFOiB7XHJcbiAgICAgIGlmICghY2FuU3dpdGNoTW9kZShhY3Rpb24ucGF5bG9hZCwgc3RhdGUubWluTW9kZSkpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgbW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgdmlldzogeyBkYXRlLCBtb2RlIH0gfTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5IT1ZFUjoge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaG92ZXJlZERhdGU6IGFjdGlvbi5wYXlsb2FkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1Q6IHtcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWREYXRlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB2aWV3OiBzdGF0ZS52aWV3XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xyXG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkIHx8IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcclxuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TOiB7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIC8vIHByZXNlcnZlIHZpZXcgbW9kZVxyXG4gICAgICBjb25zdCBtb2RlID0gbmV3U3RhdGUubWluTW9kZSA/IG5ld1N0YXRlLm1pbk1vZGUgOiBzdGF0ZS52aWV3Lm1vZGU7XHJcbiAgICAgIGNvbnN0IF92aWV3RGF0ZSA9IGlzRGF0ZVZhbGlkKG5ld1N0YXRlLnZhbHVlKSAmJiBuZXdTdGF0ZS52YWx1ZVxyXG4gICAgICAgIHx8IGlzQXJyYXkobmV3U3RhdGUudmFsdWUpICYmIGlzRGF0ZVZhbGlkKG5ld1N0YXRlLnZhbHVlWzBdKSAmJiBuZXdTdGF0ZS52YWx1ZVswXVxyXG4gICAgICAgIHx8IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF92aWV3RGF0ZSwgbmV3U3RhdGUubWluRGF0ZSwgbmV3U3RhdGUubWF4RGF0ZSk7XHJcbiAgICAgIG5ld1N0YXRlLnZpZXcgPSB7IG1vZGUsIGRhdGUgfTtcclxuICAgICAgLy8gdXBkYXRlIHNlbGVjdGVkIHZhbHVlXHJcbiAgICAgIGlmIChuZXdTdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgIC8vIGlmIG5ldyB2YWx1ZSBpcyBhcnJheSB3ZSB3b3JrIHdpdGggZGF0ZSByYW5nZVxyXG4gICAgICAgIGlmIChpc0FycmF5KG5ld1N0YXRlLnZhbHVlKSkge1xyXG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSYW5nZSA9IG5ld1N0YXRlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbmV3IHZhbHVlIGlzIGEgZGF0ZSAtPiBkYXRlcGlja2VyXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWREYXRlID0gbmV3U3RhdGUudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcm92aWRlZCB2YWx1ZSBpcyBub3Qgc3VwcG9ydGVkIDopXHJcbiAgICAgICAgLy8gbmVlZCB0byByZXBvcnQgaXQgc29tZWhvd1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIHJhbmdlIHBpY2tlclxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVF9SQU5HRToge1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICBzZWxlY3RlZFJhbmdlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB2aWV3OiBzdGF0ZS52aWV3XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xyXG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkWzBdIHx8IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcclxuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURToge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBtaW5EYXRlOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEU6IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbWF4RGF0ZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0lTX0RJU0FCTEVEOiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGlzRGlzYWJsZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlKTogQnNEYXRlcGlja2VyU3RhdGUge1xyXG4gIC8vIGhvdyBtYW55IGNhbGVuZGFyc1xyXG4gIGNvbnN0IGRpc3BsYXlNb250aHMgPSBzdGF0ZS5kaXNwbGF5TW9udGhzO1xyXG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxyXG4gIGxldCB2aWV3RGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcclxuICAgIHN0YXRlLm1vbnRoVmlld09wdGlvbnMuZmlyc3REYXlPZldlZWsgPSBnZXRMb2NhbGUoc3RhdGUubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xyXG4gICAgY29uc3QgbW9udGhzTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XHJcbiAgICBmb3IgKGxldCBtb250aEluZGV4ID0gMDsgbW9udGhJbmRleCA8IGRpc3BsYXlNb250aHM7IG1vbnRoSW5kZXgrKykge1xyXG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXHJcbiAgICAgIG1vbnRoc01vZGVsW21vbnRoSW5kZXhdID0gY2FsY0RheXNDYWxlbmRhcihcclxuICAgICAgICB2aWV3RGF0ZSxcclxuICAgICAgICBzdGF0ZS5tb250aFZpZXdPcHRpb25zXHJcbiAgICAgICk7XHJcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IG1vbnRoOiAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNNb2RlbCB9KTtcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgIGNvbnN0IG1vbnRoc0NhbGVuZGFyID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xyXG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcclxuICAgICAgY2FsZW5kYXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxyXG4gICAgICBtb250aHNDYWxlbmRhcltjYWxlbmRhckluZGV4XSA9IGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxyXG4gICAgICAgIHZpZXdEYXRlLFxyXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXHJcbiAgICAgICk7XHJcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1vbnRoc0NhbGVuZGFyIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XHJcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XHJcblxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xyXG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcclxuICAgICAgY2FsZW5kYXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxyXG4gICAgICB5ZWFyc0NhbGVuZGFyTW9kZWxbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRZZWFyc0NhbGVuZGFyKFxyXG4gICAgICAgIHZpZXdEYXRlLFxyXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXHJcbiAgICAgICk7XHJcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IHllYXJzUGVyQ2FsZW5kYXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJNb2RlbCB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0UmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZE1vbnRocyA9IHN0YXRlLm1vbnRoc01vZGVsLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+XHJcbiAgICAgIGZvcm1hdERheXNDYWxlbmRhcihtb250aCwgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSksIG1vbnRoSW5kZXgpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmb3JtYXR0ZWRNb250aHMgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBob3cgbWFueSBjYWxlbmRhcnNcclxuICBjb25zdCBkaXNwbGF5TW9udGhzID0gc3RhdGUuZGlzcGxheU1vbnRocztcclxuICAvLyBjaGVjayBpbml0aWFsIHJlbmRlcmluZ1xyXG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxyXG4gIGxldCB2aWV3RGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgY29uc3QgbW9udGhzQ2FsZW5kYXIgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XHJcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xyXG4gICAgICBjYWxlbmRhckluZGV4KytcclxuICAgICkge1xyXG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXHJcbiAgICAgIG1vbnRoc0NhbGVuZGFyW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXHJcbiAgICAgICAgdmlld0RhdGUsXHJcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcclxuICAgICAgKTtcclxuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzQ2FsZW5kYXIgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcclxuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcclxuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XHJcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcclxuICAgICAgeWVhcnNDYWxlbmRhck1vZGVsW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0WWVhcnNDYWxlbmRhcihcclxuICAgICAgICB2aWV3RGF0ZSxcclxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxyXG4gICAgICApO1xyXG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxNiB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhck1vZGVsIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGFnUmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogQWN0aW9uKTogQnNEYXRlcGlja2VyU3RhdGUge1xyXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdkYXknKSB7XHJcbiAgICBjb25zdCBmbGFnZ2VkTW9udGhzID0gc3RhdGUuZm9ybWF0dGVkTW9udGhzLm1hcChcclxuICAgICAgKGZvcm1hdHRlZE1vbnRoLCBtb250aEluZGV4KSA9PlxyXG4gICAgICAgIGZsYWdEYXlzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcclxuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxyXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcclxuICAgICAgICAgIGRheXNEaXNhYmxlZDogc3RhdGUuZGF5c0Rpc2FibGVkLFxyXG4gICAgICAgICAgZGF0ZXNEaXNhYmxlZDogc3RhdGUuZGF0ZXNEaXNhYmxlZCxcclxuICAgICAgICAgIGhvdmVyZWREYXRlOiBzdGF0ZS5ob3ZlcmVkRGF0ZSxcclxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogc3RhdGUuc2VsZWN0ZWREYXRlLFxyXG4gICAgICAgICAgc2VsZWN0ZWRSYW5nZTogc3RhdGUuc2VsZWN0ZWRSYW5nZSxcclxuICAgICAgICAgIGRpc3BsYXlNb250aHM6IHN0YXRlLmRpc3BsYXlNb250aHMsXHJcbiAgICAgICAgICBtb250aEluZGV4XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGZsYWdnZWRNb250aHMgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICBjb25zdCBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgPSBzdGF0ZS5tb250aHNDYWxlbmRhci5tYXAoXHJcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cclxuICAgICAgICBmbGFnTW9udGhzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcclxuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxyXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcclxuICAgICAgICAgIGhvdmVyZWRNb250aDogc3RhdGUuaG92ZXJlZE1vbnRoLFxyXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcclxuICAgICAgICAgIG1vbnRoSW5kZXhcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZmxhZ2dlZE1vbnRoc0NhbGVuZGFyIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XHJcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyRmxhZ2dlZCA9IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbC5tYXAoXHJcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgeWVhckluZGV4KSA9PlxyXG4gICAgICAgIGZsYWdZZWFyc0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XHJcbiAgICAgICAgICBpc0Rpc2FibGVkOiBzdGF0ZS5pc0Rpc2FibGVkLFxyXG4gICAgICAgICAgbWluRGF0ZTogc3RhdGUubWluRGF0ZSxcclxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXHJcbiAgICAgICAgICBob3ZlcmVkWWVhcjogc3RhdGUuaG92ZXJlZFllYXIsXHJcbiAgICAgICAgICBkaXNwbGF5TW9udGhzOiBzdGF0ZS5kaXNwbGF5TW9udGhzLFxyXG4gICAgICAgICAgeWVhckluZGV4XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJGbGFnZ2VkIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtYXRPcHRpb25zKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSk6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYWxlOiBzdGF0ZS5sb2NhbGUsXHJcblxyXG4gICAgbW9udGhUaXRsZTogc3RhdGUubW9udGhUaXRsZSxcclxuICAgIHllYXJUaXRsZTogc3RhdGUueWVhclRpdGxlLFxyXG5cclxuICAgIGRheUxhYmVsOiBzdGF0ZS5kYXlMYWJlbCxcclxuICAgIG1vbnRoTGFiZWw6IHN0YXRlLm1vbnRoTGFiZWwsXHJcbiAgICB5ZWFyTGFiZWw6IHN0YXRlLnllYXJMYWJlbCxcclxuXHJcbiAgICB3ZWVrTnVtYmVyczogc3RhdGUud2Vla051bWJlcnNcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogaWYgdmlldyBkYXRlIGlzIHByb3ZpZGVkIChic1ZhbHVlfG5nTW9kZWwpIGl0IHNob3VsZCBiZSBzaG93blxyXG4gKiBpZiB2aWV3IGRhdGUgaXMgbm90IHByb3ZpZGVyOlxyXG4gKiBpZiBtaW5EYXRlPmN1cnJlbnREYXRlIChkZWZhdWx0IHZpZXcgdmFsdWUpLCBzaG93IG1pbkRhdGVcclxuICogaWYgbWF4RGF0ZTxjdXJyZW50RGF0ZShkZWZhdWx0IHZpZXcgdmFsdWUpIHNob3cgbWF4RGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Vmlld0RhdGUodmlld0RhdGU6IERhdGUgfCBEYXRlW10sIG1pbkRhdGU6IERhdGUsIG1heERhdGU6IERhdGUpIHtcclxuICBjb25zdCBfZGF0ZSA9IEFycmF5LmlzQXJyYXkodmlld0RhdGUpID8gdmlld0RhdGVbMF0gOiB2aWV3RGF0ZTtcclxuXHJcbiAgaWYgKG1pbkRhdGUgJiYgaXNBZnRlcihtaW5EYXRlLCBfZGF0ZSwgJ2RheScpKSB7XHJcbiAgICByZXR1cm4gbWluRGF0ZTtcclxuICB9XHJcblxyXG4gIGlmIChtYXhEYXRlICYmIGlzQmVmb3JlKG1heERhdGUsIF9kYXRlLCAnZGF5JykpIHtcclxuICAgIHJldHVybiBtYXhEYXRlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF9kYXRlO1xyXG59XHJcbiJdfQ==