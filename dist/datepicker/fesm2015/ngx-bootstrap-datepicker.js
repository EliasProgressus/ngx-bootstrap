import { Injectable, Component, EventEmitter, Directive, ElementRef, Input, Output, Renderer2, ViewContainerRef, ChangeDetectorRef, forwardRef, Host, ChangeDetectionStrategy, NgModule, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { getFullYear, getMonth, getDay, isFirstDayOfWeek, isAfter, isBefore, shiftDate, endOf, startOf, isSame, getFirstDayOfMonth, formatDate, getLocale, isDisabledDay, isSameDay, isSameMonth, isSameYear, setFullDate, isArray, isDateValid, parseDate, isDate } from 'ngx-bootstrap/chronos';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { isBs3 } from 'ngx-bootstrap/utils';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
class BsDatepickerConfig {
    constructor() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
}
BsDatepickerConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class BsDatepickerAbstractComponent {
    constructor() {
        this._customRangesFish = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._effects.setMinDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._effects.setMaxDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set daysDisabled(value) {
        this._effects.setDaysDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set datesDisabled(value) {
        this._effects.setDatesDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._effects.setDisabled(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setViewMode(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dayHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    weekHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearHoverHandler(event) { }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthSelectHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearSelectHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _stopPropagation(event) {
        event.stopPropagation();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerActions {
    /**
     * @return {?}
     */
    calculate() {
        return { type: BsDatepickerActions.CALCULATE };
    }
    /**
     * @return {?}
     */
    format() {
        return { type: BsDatepickerActions.FORMAT };
    }
    /**
     * @return {?}
     */
    flag() {
        return { type: BsDatepickerActions.FLAG };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    select(date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    }
    /**
     * @param {?} step
     * @return {?}
     */
    navigateStep(step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    }
    /**
     * @param {?} options
     * @return {?}
     */
    setOptions(options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    selectRange(value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    hoverDay(event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    minDate(date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    maxDate(date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    }
    /**
     * @param {?} days
     * @return {?}
     */
    daysDisabled(days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    }
    /**
     * @param {?} dates
     * @return {?}
     */
    datesDisabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isDisabled(value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    setLocale(locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    }
}
BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
BsDatepickerActions.FLAG = '[datepicker] set flags';
BsDatepickerActions.SELECT = '[datepicker] select date';
BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
BsDatepickerActions.HOVER = '[datepicker] hover date';
BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
BsDatepickerActions.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsLocaleService {
    constructor() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    /**
     * @return {?}
     */
    get locale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._localeChange;
    }
    /**
     * @return {?}
     */
    get currentLocale() {
        return this._locale.getValue();
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    use(locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    }
}
BsLocaleService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerEffects {
    /**
     * @param {?} _actions
     * @param {?} _localeService
     */
    constructor(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    init(_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    }
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this._store.dispatch(this._actions.select(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRangeValue(value) {
        this._store.dispatch(this._actions.selectRange(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMinDate(value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMaxDate(value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDaysDisabled(value) {
        this._store.dispatch(this._actions.daysDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDatesDisabled(value) {
        this._store.dispatch(this._actions.datesDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisabled(value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    }
    /**
     * @param {?} _config
     * @return {?}
     */
    setOptions(_config) {
        const /** @type {?} */ _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    }
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    setBindings(container) {
        container.daysCalendar = this._store
            .select(state => state.flaggedMonths)
            .pipe(filter(months => !!months));
        // month calendar
        container.monthsCalendar = this._store
            .select(state => state.flaggedMonthsCalendar)
            .pipe(filter(months => !!months));
        // year calendar
        container.yearsCalendar = this._store
            .select(state => state.yearsCalendarFlagged)
            .pipe(filter(years => !!years));
        container.viewMode = this._store.select(state => state.view.mode);
        container.options = this._store
            .select(state => state.showWeekNumbers)
            .pipe(map(showWeekNumbers => ({ showWeekNumbers })));
        return this;
    }
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    setEventHandlers(container) {
        container.setViewMode = (event) => {
            this._store.dispatch(this._actions.changeViewMode(event));
        };
        container.navigateTo = (event) => {
            this._store.dispatch(this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = (event) => {
            const /** @type {?} */ _cell = /** @type {?} */ (event.cell);
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.monthSelectHandler = (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    month: getMonth(event.date),
                    year: getFullYear(event.date)
                },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    year: getFullYear(event.date)
                },
                viewMode: 'month'
            }));
        };
        return this;
    }
    /**
     * @return {?}
     */
    registerDatepickerSideEffects() {
        this._subs.push(this._store.select(state => state.view).subscribe(view => {
            this._store.dispatch(this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(state => state.monthsModel)
            .pipe(filter(monthModel => !!monthModel))
            .subscribe(month => this._store.dispatch(this._actions.format())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.formattedMonths)
            .pipe(filter(month => !!month))
            .subscribe(month => this._store.dispatch(this._actions.flag())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.selectedDate)
            .pipe(filter(selectedDate => !!selectedDate))
            .subscribe(selectedDate => this._store.dispatch(this._actions.flag())));
        // flag for date range picker
        this._subs.push(this._store
            .select(state => state.selectedRange)
            .pipe(filter(selectedRange => !!selectedRange))
            .subscribe(selectedRange => this._store.dispatch(this._actions.flag())));
        // monthsCalendar
        this._subs.push(this._store
            .select(state => state.monthsCalendar)
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // years calendar
        this._subs.push(this._store
            .select(state => state.yearsCalendarModel)
            .pipe(filter(state => !!state))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // on hover
        this._subs.push(this._store
            .select(state => state.hoveredDate)
            .pipe(filter(hoveredDate => !!hoveredDate))
            .subscribe(hoveredDate => this._store.dispatch(this._actions.flag())));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(locale => this._store.dispatch(this._actions.setLocale(locale))));
        return this;
    }
    /**
     * @return {?}
     */
    destroy() {
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
}
BsDatepickerEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerEffects.ctorParameters = () => [
    { type: BsDatepickerActions, },
    { type: BsLocaleService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ defaultMonthOptions = {
    width: 7,
    height: 6
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _initialView = { date: new Date(), mode: 'day' };
const /** @type {?} */ initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    monthViewOptions: defaultMonthOptions
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} options
 * @return {?}
 */
function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    const /** @type {?} */ weekDay = getDay(date);
    const /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
/**
 * @param {?} weekday
 * @param {?} startingDayOffset
 * @return {?}
 */
function calculateDateOffset(weekday, startingDayOffset) {
    if (startingDayOffset === 0) {
        return weekday;
    }
    const /** @type {?} */ offset = weekday - startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isMonthDisabled(date, min, max) {
    const /** @type {?} */ minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    const /** @type {?} */ maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function isYearDisabled(date, min, max) {
    const /** @type {?} */ minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    const /** @type {?} */ maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound;
}
/**
 * @param {?} date
 * @param {?} datesDisabled
 * @return {?}
 */
function isDisabledDate(date, datesDisabled) {
    if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
        return false;
    }
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'date'));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 * @param {?} options
 * @param {?} fn
 * @return {?}
 */
function createMatrix(options, fn) {
    let /** @type {?} */ prevValue = options.initialDate;
    const /** @type {?} */ matrix = new Array(options.height);
    for (let /** @type {?} */ i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (let /** @type {?} */ j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = shiftDate(prevValue, options.shift);
        }
    }
    return matrix;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} startingDate
 * @param {?} options
 * @return {?}
 */
function calcDaysCalendar(startingDate, options) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} daysCalendar
 * @param {?} formatOptions
 * @param {?} monthIndex
 * @return {?}
 */
function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map((week, weekIndex) => ({
            days: week.map((date, dayIndex) => ({
                date,
                label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex,
                weekIndex,
                dayIndex
            }))
        }))
    };
}
/**
 * @param {?} daysMatrix
 * @param {?} format
 * @param {?} locale
 * @return {?}
 */
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map((days) => (days[0] ? formatDate(days[0], format, locale) : ''));
}
/**
 * @param {?} locale
 * @return {?}
 */
function getShiftedWeekdays(locale) {
    const /** @type {?} */ _locale = getLocale(locale);
    const /** @type {?} */ weekdays = /** @type {?} */ (_locale.weekdaysShort());
    const /** @type {?} */ firstDayOfWeek = _locale.firstDayOfWeek();
    return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} formattedMonth
 * @param {?} options
 * @return {?}
 */
function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach((week) => {
        /* tslint:disable-next-line: cyclomatic-complexity */
        week.days.forEach((day, dayIndex) => {
            // datepicker
            const /** @type {?} */ isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            const /** @type {?} */ isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            const /** @type {?} */ isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            const /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            const /** @type {?} */ isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            const /** @type {?} */ isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day') ||
                isDisabledDay(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled);
            const /** @type {?} */ currentDate = new Date();
            const /** @type {?} */ isToday = !isOtherMonth && isSameDay(day.date, currentDate);
            // decide update or not
            const /** @type {?} */ newDay = Object.assign({}, day, {
                isOtherMonth,
                isHovered,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isInRange,
                isDisabled,
                isToday
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            (options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
/**
 * @param {?} date
 * @param {?} selectedRange
 * @param {?} hoveredDate
 * @return {?}
 */
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} mode
 * @param {?=} minMode
 * @return {?}
 */
function canSwitchMode(mode, minMode) {
    return minMode ? mode >= minMode : true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ height = 4;
const /** @type {?} */ width = 3;
const /** @type {?} */ shift = { month: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatMonthsCalendar(viewDate, formatOptions) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} monthCalendar
 * @param {?} options
 * @return {?}
 */
function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach((months, rowIndex) => {
        months.forEach((month, monthIndex) => {
            const /** @type {?} */ isHovered = isSameMonth(month.date, options.hoveredMonth);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            const /** @type {?} */ newMonth = Object.assign(/*{},*/ month, {
                isHovered,
                isDisabled
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        options.monthIndex < options.displayMonths &&
            options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ height$1 = 4;
const /** @type {?} */ width$1 = 4;
const /** @type {?} */ yearsPerCalendar = height$1 * width$1;
const /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
const /** @type {?} */ shift$1 = { year: 1 };
/**
 * @param {?} viewDate
 * @param {?} formatOptions
 * @return {?}
 */
function formatYearsCalendar(viewDate, formatOptions) {
    const /** @type {?} */ initialDate = shiftDate(viewDate, { year: initialShift });
    const /** @type {?} */ matrixOptions = { width: width$1, height: height$1, initialDate, shift: shift$1 };
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
    const /** @type {?} */ to = formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return `${from} - ${to}`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} yearsCalendar
 * @param {?} options
 * @return {?}
 */
function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((years, rowIndex) => {
        years.forEach((year, yearIndex) => {
            const /** @type {?} */ isHovered = isSameYear(year.date, options.hoveredYear);
            const /** @type {?} */ isDisabled = options.isDisabled ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            const /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered, isDisabled });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    const /** @type {?} */ i = yearsCalendar.years.length - 1;
    const /** @type {?} */ j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
function bsDatepickerReducer(state = initialDatepickerState, action) {
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
            const /** @type {?} */ date = shiftDate(startOf(state.view.date, 'month'), action.payload);
            const /** @type {?} */ newState = {
                view: {
                    mode: state.view.mode,
                    date
                }
            };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            const /** @type {?} */ payload = action.payload;
            const /** @type {?} */ date = setFullDate(state.view.date, payload.unit);
            let /** @type {?} */ newState;
            let /** @type {?} */ mode;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date, mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date, mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode)) {
                return state;
            }
            const /** @type {?} */ date = state.view.date;
            const /** @type {?} */ mode = action.payload;
            const /** @type {?} */ newState = { view: { date, mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            const /** @type {?} */ newState = {
                selectedDate: action.payload,
                view: state.view
            };
            const /** @type {?} */ mode = state.view.mode;
            const /** @type {?} */ _date = action.payload || state.view.date;
            const /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_OPTIONS: {
            const /** @type {?} */ newState = action.payload;
            // preserve view mode
            const /** @type {?} */ mode = newState.minMode ? newState.minMode : state.view.mode;
            const /** @type {?} */ _viewDate = isDateValid(newState.value) && newState.value
                || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0]
                || state.view.date;
            const /** @type {?} */ date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode, date };
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
            const /** @type {?} */ newState = {
                selectedRange: action.payload,
                view: state.view
            };
            const /** @type {?} */ mode = state.view.mode;
            const /** @type {?} */ _date = action.payload && action.payload[0] || state.view.date;
            const /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
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
    const /** @type {?} */ displayMonths = state.displayMonths;
    // use selected date on initial rendering if set
    let /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'day') {
        state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
        const /** @type {?} */ monthsModel = new Array(displayMonths);
        for (let /** @type {?} */ monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = shiftDate(viewDate, { month: 1 });
        }
        return Object.assign({}, state, { monthsModel });
    }
    if (state.view.mode === 'month') {
        const /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        const /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel });
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
        const /** @type {?} */ formattedMonths = state.monthsModel.map((month, monthIndex) => formatDaysCalendar(month, getFormatOptions(state), monthIndex));
        return Object.assign({}, state, { formattedMonths });
    }
    // how many calendars
    const /** @type {?} */ displayMonths = state.displayMonths;
    // check initial rendering
    // use selected date on initial rendering if set
    let /** @type {?} */ viewDate = state.view.date;
    if (state.view.mode === 'month') {
        const /** @type {?} */ monthsCalendar = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        const /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
        for (let /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel });
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
        const /** @type {?} */ flaggedMonths = state.formattedMonths.map((formattedMonth, monthIndex) => flagDaysCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            daysDisabled: state.daysDisabled,
            datesDisabled: state.datesDisabled,
            hoveredDate: state.hoveredDate,
            selectedDate: state.selectedDate,
            selectedRange: state.selectedRange,
            displayMonths: state.displayMonths,
            monthIndex
        }));
        return Object.assign({}, state, { flaggedMonths });
    }
    if (state.view.mode === 'month') {
        const /** @type {?} */ flaggedMonthsCalendar = state.monthsCalendar.map((formattedMonth, monthIndex) => flagMonthsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredMonth: state.hoveredMonth,
            displayMonths: state.displayMonths,
            monthIndex
        }));
        return Object.assign({}, state, { flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year') {
        const /** @type {?} */ yearsCalendarFlagged = state.yearsCalendarModel.map((formattedMonth, yearIndex) => flagYearsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredYear: state.hoveredYear,
            displayMonths: state.displayMonths,
            yearIndex
        }));
        return Object.assign({}, state, { yearsCalendarFlagged });
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
    const /** @type {?} */ _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && isAfter(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && isBefore(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerStore extends MiniStore {
    constructor() {
        const /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        const /** @type {?} */ state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
}
BsDatepickerStore.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerStore.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
    /**
     * @param {?} _config
     * @param {?} _store
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positionService
     */
    constructor(_config, _store, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this._subs = [];
        this._effects = _effects;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._effects.setValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this._config.adaptivePosition
                }
            }
        });
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select((state) => state.selectedDate)
            .subscribe((date) => this.valueChange.emit(date)));
    }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) {
        const /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
        this._effects.destroy();
    }
}
BsDatepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-datepicker-container',
                providers: [BsDatepickerStore, BsDatepickerEffects],
                template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\">\r\n\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\r\n        <bs-days-calendar-view\r\n          *ngFor=\"let calendar of (daysCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          [options]=\"options | async\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"dayHoverHandler($event)\"\r\n          (onHoverWeek)=\"weekHoverHandler($event)\"\r\n          (onSelect)=\"daySelectHandler($event)\"\r\n        ></bs-days-calendar-view>\r\n      </div>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\"\r\n        ></bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\r\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\r\n        [calendar]=\"calendar\"\r\n        (onNavigate)=\"navigateTo($event)\"\r\n        (onViewMode)=\"setViewMode($event)\"\r\n        (onHover)=\"yearHoverHandler($event)\"\r\n        (onSelect)=\"yearSelectHandler($event)\"\r\n      ></bs-years-calendar-view>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\">Apply</button>\r\n      <button class=\"btn btn-default\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\r\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '(click)': '_stopPropagation($event)',
                    style: 'position: absolute; display: block;',
                    role: 'dialog',
                    'aria-label': 'calendar'
                }
            }] }
];
/** @nocollapse */
BsDatepickerContainerComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: BsDatepickerStore, },
    { type: BsDatepickerActions, },
    { type: BsDatepickerEffects, },
    { type: PositioningService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         * Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    /**
     * Returns whether or not the datepicker is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._datepicker.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["daysDisabled"]) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    show() {
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
            this.bsValue = value;
            this.hide();
        }));
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Set config for datepicker
     * @return {?}
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDatepicker]',
                exportAs: 'bsDatepicker'
            },] }
];
/** @nocollapse */
BsDatepickerDirective.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
];
BsDatepickerDirective.propDecorators = {
    "placement": [{ type: Input },],
    "triggers": [{ type: Input },],
    "outsideClick": [{ type: Input },],
    "container": [{ type: Input },],
    "outsideEsc": [{ type: Input },],
    "isOpen": [{ type: Input },],
    "onShown": [{ type: Output },],
    "onHidden": [{ type: Output },],
    "bsValue": [{ type: Input },],
    "bsConfig": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "minMode": [{ type: Input },],
    "daysDisabled": [{ type: Input },],
    "datesDisabled": [{ type: Input },],
    "bsValueChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerInlineConfig extends BsDatepickerConfig {
}
BsDatepickerInlineConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
    /**
     * @param {?} _config
     * @param {?} _store
     * @param {?} _actions
     * @param {?} _effects
     * @param {?} _positioningService
     */
    constructor(_config, _store, _actions, _effects, _positioningService) {
        super(_config, _store, _actions, _effects, _positioningService);
    }
}
BsDatepickerInlineContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-datepicker-inline-container',
                providers: [BsDatepickerStore, BsDatepickerEffects],
                template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\">\r\n\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\r\n        <bs-days-calendar-view\r\n          *ngFor=\"let calendar of (daysCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          [options]=\"options | async\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"dayHoverHandler($event)\"\r\n          (onHoverWeek)=\"weekHoverHandler($event)\"\r\n          (onSelect)=\"daySelectHandler($event)\"\r\n        ></bs-days-calendar-view>\r\n      </div>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\"\r\n        ></bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\r\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\r\n        [calendar]=\"calendar\"\r\n        (onNavigate)=\"navigateTo($event)\"\r\n        (onViewMode)=\"setViewMode($event)\"\r\n        (onHover)=\"yearHoverHandler($event)\"\r\n        (onSelect)=\"yearSelectHandler($event)\"\r\n      ></bs-years-calendar-view>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\">Apply</button>\r\n      <button class=\"btn btn-default\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\r\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '(click)': '_stopPropagation($event)',
                    style: 'display: inline-block;'
                }
            }] }
];
/** @nocollapse */
BsDatepickerInlineContainerComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: BsDatepickerStore, },
    { type: BsDatepickerActions, },
    { type: BsDatepickerEffects, },
    { type: PositioningService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerInlineDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    /**
     * Initial value of datepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
            this.bsValue = value;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    }
    /**
     * Set config for datepicker
     * @return {?}
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDatepickerInlineDirective.decorators = [
    { type: Directive, args: [{
                selector: 'bs-datepicker-inline',
                exportAs: 'bsDatepickerInline'
            },] }
];
/** @nocollapse */
BsDatepickerInlineDirective.ctorParameters = () => [
    { type: BsDatepickerInlineConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
];
BsDatepickerInlineDirective.propDecorators = {
    "bsValue": [{ type: Input },],
    "bsConfig": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "datesDisabled": [{ type: Input },],
    "bsValueChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
const /** @type {?} */ BS_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
class BsDatepickerInputDirective {
    /**
     * @param {?} _picker
     * @param {?} _localeService
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} changeDetection
     */
    constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe((value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(() => {
            this._setInputValue(this._value);
        });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    _setInputValue(value) {
        const /** @type {?} */ initialDate = !value ? ''
            : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue((/** @type {?} */ (event.target)).value);
        this._onChange(this._value);
        this._onTouched();
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        const /** @type {?} */ _value = c.value;
        /* tslint:disable-next-line: prefer-switch */
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (isDate(_value)) {
            const /** @type {?} */ _isDateValid = isDateValid(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, 'date')) {
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, 'date')) {
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            this._value = null;
        }
        else {
            const /** @type {?} */ _localeKey = this._localeService.currentLocale;
            const /** @type {?} */ _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
            }
            this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        }
        this._picker.bsValue = this._value;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this._onTouched();
    }
    /**
     * @return {?}
     */
    hide() {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    }
}
BsDatepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[bsDatepicker]`,
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
            },] }
];
/** @nocollapse */
BsDatepickerInputDirective.ctorParameters = () => [
    { type: BsDatepickerDirective, decorators: [{ type: Host },] },
    { type: BsLocaleService, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaterangepickerConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
    }
}
BsDaterangepickerConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
    /**
     * @param {?} _effects
     * @param {?} _actions
     * @param {?} _config
     * @param {?} _store
     * @param {?} _positionService
     */
    constructor(_effects, _actions, _config, _store, _positionService) {
        super();
        this._actions = _actions;
        this._config = _config;
        this._store = _store;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this._rangeStack = [];
        this._subs = [];
        this._effects = _effects;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        this._effects.setRangeValue(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this._config.adaptivePosition
                }
            }
        });
        this.containerClass = this._config.containerClass;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this._effects
            .init(this._store)
            .setOptions(this._config)
            .setBindings(this)
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(state => state.selectedRange)
            .subscribe(date => this.valueChange.emit(date)));
    }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) {
        const /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
        this._effects.destroy();
    }
}
BsDaterangepickerContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-daterangepicker-container',
                providers: [BsDatepickerStore, BsDatepickerEffects],
                template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\">\r\n\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\r\n        <bs-days-calendar-view\r\n          *ngFor=\"let calendar of (daysCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          [options]=\"options | async\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"dayHoverHandler($event)\"\r\n          (onHoverWeek)=\"weekHoverHandler($event)\"\r\n          (onSelect)=\"daySelectHandler($event)\"\r\n        ></bs-days-calendar-view>\r\n      </div>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\"\r\n        ></bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\r\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\r\n        [calendar]=\"calendar\"\r\n        (onNavigate)=\"navigateTo($event)\"\r\n        (onViewMode)=\"setViewMode($event)\"\r\n        (onHover)=\"yearHoverHandler($event)\"\r\n        (onSelect)=\"yearSelectHandler($event)\"\r\n      ></bs-years-calendar-view>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\">Apply</button>\r\n      <button class=\"btn btn-default\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\r\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\r\n  </div>\r\n</div>\r\n",
                host: {
                    '(click)': '_stopPropagation($event)',
                    style: 'position: absolute; display: block;',
                    role: 'dialog',
                    'aria-label': 'calendar'
                }
            }] }
];
/** @nocollapse */
BsDaterangepickerContainerComponent.ctorParameters = () => [
    { type: BsDatepickerEffects, },
    { type: BsDatepickerActions, },
    { type: BsDatepickerConfig, },
    { type: BsDatepickerStore, },
    { type: PositioningService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaterangepickerDirective {
    /**
     * @param {?} _config
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} cis
     */
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended
         * to. Currently only supports "body".
         */
        this.container = 'body';
        this.outsideEsc = true;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
    }
    /**
     * Returns whether or not the daterangepicker is currently being shown
     * @return {?}
     */
    get isOpen() {
        return this._datepicker.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Initial value of daterangepicker
     * @param {?} value
     * @return {?}
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    show() {
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter((range) => range && range[0] && !!range[1]))
            .subscribe((value) => {
            this.bsValue = value;
            this.hide();
        }));
    }
    /**
     * Set config for daterangepicker
     * @return {?}
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
        });
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDaterangepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[bsDaterangepicker]',
                exportAs: 'bsDaterangepicker'
            },] }
];
/** @nocollapse */
BsDaterangepickerDirective.ctorParameters = () => [
    { type: BsDaterangepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
];
BsDaterangepickerDirective.propDecorators = {
    "placement": [{ type: Input },],
    "triggers": [{ type: Input },],
    "outsideClick": [{ type: Input },],
    "container": [{ type: Input },],
    "outsideEsc": [{ type: Input },],
    "isOpen": [{ type: Input },],
    "onShown": [{ type: Output },],
    "onHidden": [{ type: Output },],
    "bsValue": [{ type: Input },],
    "bsConfig": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "datesDisabled": [{ type: Input },],
    "bsValueChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDaterangepickerInputDirective),
    multi: true
};
const /** @type {?} */ BS_DATERANGEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => BsDaterangepickerInputDirective),
    multi: true
};
class BsDaterangepickerInputDirective {
    /**
     * @param {?} _picker
     * @param {?} _localeService
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} changeDetection
     */
    constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        // update input value on datepicker value update
        this._picker.bsValueChange.subscribe((value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        });
        // update input value on locale change
        this._localeService.localeChange.subscribe(() => {
            this._setInputValue(this._value);
        });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    _setInputValue(date) {
        let /** @type {?} */ range = '';
        if (date) {
            const /** @type {?} */ start = !date[0] ? ''
                : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            const /** @type {?} */ end = !date[1] ? ''
                : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onChange(event) {
        /* tslint:disable-next-line: no-any*/
        this.writeValue((/** @type {?} */ (event.target)).value);
        this._onChange(this._value);
        this._onTouched();
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        const /** @type {?} */ _value = c.value;
        if (_value === null || _value === undefined || !isArray(_value)) {
            return null;
        }
        const /** @type {?} */ _isFirstDateValid = isDateValid(_value[0]);
        const /** @type {?} */ _isSecondDateValid = isDateValid(_value[1]);
        if (!_isFirstDateValid) {
            return { bsDate: { invalid: _value[0] } };
        }
        if (!_isSecondDateValid) {
            return { bsDate: { invalid: _value[1] } };
        }
        if (this._picker && this._picker.minDate && isBefore(_value[0], this._picker.minDate, 'date')) {
            return { bsDate: { minDate: this._picker.minDate } };
        }
        if (this._picker && this._picker.maxDate && isAfter(_value[1], this._picker.maxDate, 'date')) {
            return { bsDate: { maxDate: this._picker.maxDate } };
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (!value) {
            this._value = null;
        }
        else {
            const /** @type {?} */ _localeKey = this._localeService.currentLocale;
            const /** @type {?} */ _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
            }
            let /** @type {?} */ _input = [];
            if (typeof value === 'string') {
                _input = value.split(this._picker._config.rangeSeparator);
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = (/** @type {?} */ (_input))
                .map((_val) => parseDate(_val, this._picker._config.dateInputFormat, this._localeService.currentLocale))
                .map((date) => (isNaN(date.valueOf()) ? null : date));
        }
        this._picker.bsValue = this._value;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this._onTouched();
    }
    /**
     * @return {?}
     */
    hide() {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
    }
}
BsDaterangepickerInputDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[bsDaterangepicker]`,
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
            },] }
];
/** @nocollapse */
BsDaterangepickerInputDirective.ctorParameters = () => [
    { type: BsDaterangepickerDirective, decorators: [{ type: Host },] },
    { type: BsLocaleService, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ChangeDetectorRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsCalendarLayoutComponent {
}
BsCalendarLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-calendar-layout',
                template: `
    <!-- current date, will be added in nearest releases -->
    <bs-current-date title="hey there" *ngIf="false"></bs-current-date>

    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>

    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>

    <!--timepicker-->
    <bs-timepicker *ngIf="false"></bs-timepicker>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsCurrentDateViewComponent {
}
BsCurrentDateViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-current-date',
                template: `<div class="current-timedate"><span>{{ title }}</span></div>`
            }] }
];
/** @nocollapse */
BsCurrentDateViewComponent.propDecorators = {
    "title": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsCustomDatesViewComponent {
}
BsCustomDatesViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-custom-date-view',
                template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges">{{ range.label }}</button>
      <button *ngIf="isCustomRangeShown">Custom Range</button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
BsCustomDatesViewComponent.propDecorators = {
    "isCustomRangeShown": [{ type: Input },],
    "ranges": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerDayDecoratorComponent {
    /**
     * @param {?} _config
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.day.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
    }
}
BsDatepickerDayDecoratorComponent.decorators = [
    { type: Component, args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected'
                },
                template: `{{ day.label }}`
            }] }
];
/** @nocollapse */
BsDatepickerDayDecoratorComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
    { type: ElementRef, },
    { type: Renderer2, },
];
BsDatepickerDayDecoratorComponent.propDecorators = {
    "day": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const BsNavigationDirection = {
    UP: 0,
    DOWN: 1,
};
BsNavigationDirection[BsNavigationDirection.UP] = "UP";
BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDatepickerNavigationViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    /**
     * @param {?} down
     * @return {?}
     */
    navTo(down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    }
    /**
     * @param {?} viewMode
     * @return {?}
     */
    view(viewMode) {
        this.onViewMode.emit(viewMode);
    }
}
BsDatepickerNavigationViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-datepicker-navigation-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button class="previous"
            [disabled]="calendar.disableLeftArrow"
            [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
            (click)="navTo(true)"><span>&lsaquo;</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

    <button class="current"
            *ngIf="calendar.monthTitle"
            (click)="view('month')"
    ><span>{{ calendar.monthTitle }}</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

    <button class="current" (click)="view('year')"
    ><span>{{ calendar.yearTitle }}</span></button>

    &#8203;  <!-- zero-width space needed for correct alignement
                  with preserveWhitespaces: false in Angular -->

    <button class="next"
            [disabled]="calendar.disableRightArrow"
            [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
            (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
  `
            }] }
];
/** @nocollapse */
BsDatepickerNavigationViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDaysCalendarViewComponent {
    /**
     * @param {?} _config
     */
    constructor(_config) {
        this._config = _config;
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onHoverWeek = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    selectDay(event) {
        this.onSelect.emit(event);
    }
    /**
     * @param {?} week
     * @return {?}
     */
    selectWeek(week) {
        if (!this._config.selectWeek) {
            return;
        }
        if (week.days
            && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        const /** @type {?} */ selectedDay = week.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        this.onSelect.emit(selectedDay);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    weekHoverHandler(cell, isHovered) {
        if (!this._config.selectWeek) {
            return;
        }
        const /** @type {?} */ hasActiveDays = cell.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverDay(cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        this.onHover.emit({ cell, isHovered });
    }
}
BsDaysCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-days-calendar-view',
                // changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
        <tr>
          <!--if show weeks-->
          <th *ngIf="options.showWeekNumbers"></th>
          <th *ngFor="let weekday of calendar.weekdays; let i = index"
              aria-label="weekday">{{ calendar.weekdays[i] }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let week of calendar.weeks; let i = index">
          <td class="week" [class.active-week]="isWeekHovered"  *ngIf="options.showWeekNumbers">
            <span
                (click)="selectWeek(week)"
                (mouseenter)="weekHoverHandler(week, true)"
                (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
          </td>
          <td *ngFor="let day of week.days" role="gridcell">
          <span bsDatepickerDayDecorator
                [day]="day"
                (click)="selectDay(day)"
                (mouseenter)="hoverDay(day, true)"
                (mouseleave)="hoverDay(day, false)">{{ day.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>

    </bs-calendar-layout>
  `
            }] }
];
/** @nocollapse */
BsDaysCalendarViewComponent.ctorParameters = () => [
    { type: BsDatepickerConfig, },
];
BsDaysCalendarViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "options": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
    "onSelect": [{ type: Output },],
    "onHover": [{ type: Output },],
    "onHoverWeek": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsMonthCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    }
    /**
     * @param {?} month
     * @return {?}
     */
    viewMonth(month) {
        this.onSelect.emit(month);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverMonth(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsMonthCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-month-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="months">
        <tbody>
        <tr *ngFor="let row of calendar.months">
          <td *ngFor="let month of row" role="gridcell"
              (click)="viewMonth(month)"
              (mouseenter)="hoverMonth(month, true)"
              (mouseleave)="hoverMonth(month, false)"
              [class.disabled]="month.isDisabled"
              [class.is-highlighted]="month.isHovered">
            <span>{{ month.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
            }] }
];
/** @nocollapse */
BsMonthCalendarViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
    "onSelect": [{ type: Output },],
    "onHover": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsTimepickerViewComponent {
    constructor() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
}
BsTimepickerViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-timepicker',
                template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase">+</button>
      </div>
      <button class="switch-time-format">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsYearsCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    }
    /**
     * @param {?} year
     * @return {?}
     */
    viewYear(year) {
        this.onSelect.emit(year);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverYear(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsYearsCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-years-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="years">
        <tbody>
        <tr *ngFor="let row of calendar.years">
          <td *ngFor="let year of row" role="gridcell"
              (click)="viewYear(year)"
              (mouseenter)="hoverYear(year, true)"
              (mouseleave)="hoverYear(year, false)"
              [class.disabled]="year.isDisabled"
              [class.is-highlighted]="year.isHovered">
            <span>{{ year.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
            }] }
];
/** @nocollapse */
BsYearsCalendarViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
    "onSelect": [{ type: Output },],
    "onHover": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ _exports = [
    BsDatepickerContainerComponent,
    BsDaterangepickerContainerComponent,
    BsDatepickerInlineContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerInputDirective,
    BsDaterangepickerDirective,
    BsDatepickerInlineDirective
];
class BsDatepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDaterangepickerConfig,
                BsDatepickerInlineConfig,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    }
}
BsDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    BsDatepickerDayDecoratorComponent,
                    BsCurrentDateViewComponent,
                    BsDatepickerNavigationViewComponent,
                    BsTimepickerViewComponent,
                    BsCalendarLayoutComponent,
                    BsDaysCalendarViewComponent,
                    BsMonthCalendarViewComponent,
                    BsYearsCalendarViewComponent,
                    BsCustomDatesViewComponent,
                    ..._exports
                ],
                entryComponents: [
                    BsDatepickerContainerComponent,
                    BsDaterangepickerContainerComponent,
                    BsDatepickerInlineContainerComponent
                ],
                exports: _exports
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DateFormatter {
    /**
     * @param {?} date
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    format(date, format, locale) {
        return formatDate(date, format, locale);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatePickerInnerComponent {
    constructor() {
        this.selectionDone = new EventEmitter(undefined);
        this.update = new EventEmitter(false);
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/
        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    /**
     * @return {?}
     */
    get activeDate() {
        return this._activeDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // todo: use date for unique value
        this.uniqueId = `datepicker--${Math.floor(Math.random() * 10000)}`;
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes["activeDate"]);
    }
    /**
     * @param {?} activeDate
     * @return {?}
     */
    checkIfActiveDateGotUpdated(activeDate) {
        if (activeDate && !activeDate.firstChange) {
            const /** @type {?} */ previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setCompareHandler(handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    compare(date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setRefreshViewHandler(handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    }
    /**
     * @return {?}
     */
    refreshView() {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    dateFilter(date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    }
    /**
     * @param {?} dateObject
     * @return {?}
     */
    isActive(dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    createDateObject(date, format) {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    }
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    split(arr, size) {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    fixTimeZone(date) {
        const /** @type {?} */ hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    }
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    select(date, isManual = true) {
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    move(direction) {
        /* tslint:disable-next-line: no-any*/
        let /** @type {?} */ expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            const /** @type {?} */ year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            const /** @type {?} */ month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    }
    /**
     * @param {?} _direction
     * @return {?}
     */
    toggleMode(_direction) {
        const /** @type {?} */ direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getCustomClassForDate(date) {
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        const /** @type {?} */ customClassObject = this.customClass.find((customClass) => {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    }
    /**
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    compareDateDisabled(date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        let /** @type {?} */ isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach((disabledDate) => {
                if (this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    }
}
DatePickerInnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-inner',
                template: `
    <!--&lt;!&ndash;ng-keydown="keydown($event)"&ndash;&gt;-->
    <div *ngIf="datepickerMode" class="well well-sm bg-faded p-a card" role="application" >
      <ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
DatePickerInnerComponent.propDecorators = {
    "locale": [{ type: Input },],
    "datepickerMode": [{ type: Input },],
    "startingDay": [{ type: Input },],
    "yearRange": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "minMode": [{ type: Input },],
    "maxMode": [{ type: Input },],
    "showWeeks": [{ type: Input },],
    "formatDay": [{ type: Input },],
    "formatMonth": [{ type: Input },],
    "formatYear": [{ type: Input },],
    "formatDayHeader": [{ type: Input },],
    "formatDayTitle": [{ type: Input },],
    "formatMonthTitle": [{ type: Input },],
    "onlyCurrentMonth": [{ type: Input },],
    "shortcutPropagation": [{ type: Input },],
    "customClass": [{ type: Input },],
    "monthColLimit": [{ type: Input },],
    "yearColLimit": [{ type: Input },],
    "dateDisabled": [{ type: Input },],
    "dayDisabled": [{ type: Input },],
    "initDate": [{ type: Input },],
    "selectionDone": [{ type: Output },],
    "update": [{ type: Output },],
    "activeDateChange": [{ type: Output },],
    "activeDate": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatepickerConfig {
    constructor() {
        this.locale = 'en';
        this.datepickerMode = 'day';
        this.startingDay = 0;
        this.yearRange = 20;
        this.minMode = 'day';
        this.maxMode = 'year';
        this.showWeeks = true;
        this.formatDay = 'DD';
        this.formatMonth = 'MMMM';
        this.formatYear = 'YYYY';
        this.formatDayHeader = 'dd';
        this.formatDayTitle = 'MMMM YYYY';
        this.formatMonthTitle = 'YYYY';
        this.onlyCurrentMonth = false;
        this.monthColLimit = 3;
        this.yearColLimit = 5;
        this.shortcutPropagation = false;
    }
}
DatepickerConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};
/* tslint:enable:component-selector-name component-selector-type */
class DatePickerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */
        this.showWeeks = true;
        this.selectionDone = new EventEmitter(undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    /**
     * currently active date
     * @return {?}
     */
    get activeDate() {
        return this._activeDate || this._now;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
    }
    /**
     * @return {?}
     */
    configureOptions() {
        Object.assign(this, this.config);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onUpdate(event) {
        this.activeDate = event;
        this.onChange(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectionDone(event) {
        this.selectionDone.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onActiveDateChange(event) {
        this.activeDateChange.emit(event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker',
                template: `
    <datepicker-inner [activeDate]="activeDate"
                      (update)="onUpdate($event)"
                      [locale]="config.locale"
                      [datepickerMode]="datepickerMode"
                      [initDate]="initDate"
                      [minDate]="minDate"
                      [maxDate]="maxDate"
                      [minMode]="minMode"
                      [maxMode]="maxMode"
                      [showWeeks]="showWeeks"
                      [formatDay]="formatDay"
                      [formatMonth]="formatMonth"
                      [formatYear]="formatYear"
                      [formatDayHeader]="formatDayHeader"
                      [formatDayTitle]="formatDayTitle"
                      [formatMonthTitle]="formatMonthTitle"
                      [startingDay]="startingDay"
                      [yearRange]="yearRange"
                      [customClass]="customClass"
                      [dateDisabled]="dateDisabled"
                      [dayDisabled]="dayDisabled"
                      [onlyCurrentMonth]="onlyCurrentMonth"
                      [shortcutPropagation]="shortcutPropagation"
                      [monthColLimit]="monthColLimit"
                      [yearColLimit]="yearColLimit"
                      (selectionDone)="onSelectionDone($event)"
                      (activeDateChange)="onActiveDateChange($event)">
      <daypicker tabindex="0"></daypicker>
      <monthpicker tabindex="0"></monthpicker>
      <yearpicker tabindex="0"></yearpicker>
    </datepicker-inner>
    `,
                providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
DatePickerComponent.ctorParameters = () => [
    { type: DatepickerConfig, },
];
DatePickerComponent.propDecorators = {
    "datepickerMode": [{ type: Input },],
    "initDate": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "minMode": [{ type: Input },],
    "maxMode": [{ type: Input },],
    "showWeeks": [{ type: Input },],
    "formatDay": [{ type: Input },],
    "formatMonth": [{ type: Input },],
    "formatYear": [{ type: Input },],
    "formatDayHeader": [{ type: Input },],
    "formatDayTitle": [{ type: Input },],
    "formatMonthTitle": [{ type: Input },],
    "startingDay": [{ type: Input },],
    "yearRange": [{ type: Input },],
    "onlyCurrentMonth": [{ type: Input },],
    "shortcutPropagation": [{ type: Input },],
    "monthColLimit": [{ type: Input },],
    "yearColLimit": [{ type: Input },],
    "customClass": [{ type: Input },],
    "dateDisabled": [{ type: Input },],
    "dayDisabled": [{ type: Input },],
    "activeDate": [{ type: Input },],
    "selectionDone": [{ type: Output },],
    "activeDateChange": [{ type: Output },],
    "_datePicker": [{ type: ViewChild, args: [DatePickerInnerComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DayPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.labels = [];
        this.rows = [];
        this.weekNumbers = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepDay = { months: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ year = this.activeDate.getFullYear();
            const /** @type {?} */ month = this.activeDate.getMonth();
            const /** @type {?} */ firstDayOfMonth = new Date(year, month, 1);
            const /** @type {?} */ difference = this.startingDay - firstDayOfMonth.getDay();
            const /** @type {?} */ numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
            const /** @type {?} */ firstDate = new Date(firstDayOfMonth.getTime());
            if (numDisplayedFromPreviousMonth > 0) {
                firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
            }
            // 42 is the number of days on a six-week calendar
            const /** @type {?} */ _days = self.getDates(firstDate, 42);
            const /** @type {?} */ days = [];
            for (let /** @type {?} */ i = 0; i < 42; i++) {
                const /** @type {?} */ _dateObject = this.createDateObject(_days[i], this.formatDay);
                _dateObject.secondary = _days[i].getMonth() !== month;
                _dateObject.uid = this.uniqueId + '-' + i;
                days[i] = _dateObject;
            }
            self.labels = [];
            for (let /** @type {?} */ j = 0; j < 7; j++) {
                self.labels[j] = {};
                self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
            }
            self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
            self.rows = this.split(days, 7);
            if (this.showWeeks) {
                self.weekNumbers = [];
                const /** @type {?} */ thursdayIndex = (4 + 7 - this.startingDay) % 7;
                const /** @type {?} */ numWeeks = self.rows.length;
                for (let /** @type {?} */ curWeek = 0; curWeek < numWeeks; curWeek++) {
                    self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                }
            }
        }, 'day');
        this.datePicker.setCompareHandler(function (date1, date2) {
            const /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
            const /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            return d1.getTime() - d2.getTime();
        }, 'day');
        this.datePicker.refreshView();
    }
    /**
     * @param {?} startDate
     * @param {?} n
     * @return {?}
     */
    getDates(startDate, n) {
        const /** @type {?} */ dates = new Array(n);
        let /** @type {?} */ current = new Date(startDate.getTime());
        let /** @type {?} */ i = 0;
        let /** @type {?} */ date;
        while (i < n) {
            date = new Date(current.getTime());
            date = this.datePicker.fixTimeZone(date);
            dates[i++] = date;
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
        }
        return dates;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getISO8601WeekNumber(date) {
        const /** @type {?} */ checkDate = new Date(date.getTime());
        // Thursday
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
        const /** @type {?} */ time = checkDate.getTime();
        // Compare with Jan 1
        checkDate.setMonth(0);
        checkDate.setDate(1);
        return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
    }
}
DayPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'daypicker',
                template: `
<table *ngIf="datePicker.datepickerMode === 'day'" role="grid" [attr.aria-labelledby]="datePicker.uniqueId + '-title'" aria-activedescendant="activeDateId">
  <thead>
    <tr>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">‹</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-left float-left"
                (click)="datePicker.move(-1)"
                tabindex="-1">&lt;</button>
      </th>
      <th [attr.colspan]="5 + (datePicker.showWeeks ? 1 : 0)">
        <button [id]="datePicker.uniqueId + '-title'"
                type="button" class="btn btn-default btn-secondary btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === datePicker.maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong>
        </button>
      </th>
      <th>
        <button *ngIf="!isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">›</button>
        <button *ngIf="isBs4"
                type="button"
                class="btn btn-default btn-secondary btn-sm pull-right float-right"
                (click)="datePicker.move(1)"
                tabindex="-1">&gt;
        </button>
      </th>
    </tr>
    <tr>
      <th *ngIf="datePicker.showWeeks"></th>
      <th *ngFor="let labelz of labels" class="text-center">
        <small aria-label="labelz.full"><b>{{ labelz.abbr }}</b></small>
      </th>
    </tr>
  </thead>
  <tbody>
    <ng-template ngFor [ngForOf]="rows" let-rowz="$implicit" let-index="index">
      <tr *ngIf="!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)">
        <td *ngIf="datePicker.showWeeks" class="h6" class="text-center">
          <em>{{ weekNumbers[index] }}</em>
        </td>
        <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [id]="dtz.uid">
          <button type="button" style="min-width:100%;" class="btn btn-sm {{dtz.customClass}}"
                  *ngIf="!(datePicker.onlyCurrentMonth && dtz.secondary)"
                  [ngClass]="{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}"
                  [disabled]="dtz.disabled"
                  (click)="datePicker.select(dtz.date)" tabindex="-1">
            <span [ngClass]="{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
          </button>
        </td>
      </tr>
    </ng-template>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-secondary {
      color: #292b2c;
      background-color: #fff;
      border-color: #ccc;
    }
    :host .btn-info .text-muted {
      color: #292b2c !important;
    }
  `]
            }] }
];
// todo: key events implementation
/** @nocollapse */
DayPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MonthPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepMonth = { years: 1 };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ months = new Array(12);
            const /** @type {?} */ year = this.activeDate.getFullYear();
            let /** @type {?} */ date;
            for (let /** @type {?} */ i = 0; i < 12; i++) {
                date = new Date(year, i, 1);
                date = this.fixTimeZone(date);
                months[i] = this.createDateObject(date, this.formatMonth);
                months[i].uid = this.uniqueId + '-' + i;
            }
            self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
            self.rows = this.split(months, self.datePicker.monthColLimit);
        }, 'month');
        this.datePicker.setCompareHandler(function (date1, date2) {
            const /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth());
            const /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth());
            return d1.getTime() - d2.getTime();
        }, 'month');
        this.datePicker.refreshView();
    }
}
MonthPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'monthpicker',
                template: `
<table *ngIf="datePicker.datepickerMode==='month'" role="grid">
  <thead>
    <tr>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-left float-left"
                (click)="datePicker.move(-1)" tabindex="-1">‹</button></th>
      <th [attr.colspan]="((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2">
        <button [id]="datePicker.uniqueId + '-title'"
                type="button" class="btn btn-default btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong> 
        </button>
      </th>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-right float-right"
                (click)="datePicker.move(1)" tabindex="-1">›</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let rowz of rows">
      <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [attr.id]="dtz.uid" [ngClass]="dtz.customClass">
        <button type="button" style="min-width:100%;" class="btn btn-default"
                [ngClass]="{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}"
                [disabled]="dtz.disabled"
                (click)="datePicker.select(dtz.date)" tabindex="-1">
          <span [ngClass]="{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-info .text-success {
      color: #fff !important;
    }
  `]
            }] }
];
// todo: key events implementation
/** @nocollapse */
MonthPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class YearPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ years = new Array(this.yearRange);
            let /** @type {?} */ date;
            const /** @type {?} */ start = self.getStartingYear(this.activeDate.getFullYear());
            for (let /** @type {?} */ i = 0; i < this.yearRange; i++) {
                date = new Date(start + i, 0, 1);
                date = this.fixTimeZone(date);
                years[i] = this.createDateObject(date, this.formatYear);
                years[i].uid = this.uniqueId + '-' + i;
            }
            self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
            self.rows = this.split(years, self.datePicker.yearColLimit);
        }, 'year');
        this.datePicker.setCompareHandler(function (date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        }, 'year');
        this.datePicker.refreshView();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    getStartingYear(year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    }
}
YearPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'yearpicker',
                template: `
<table *ngIf="datePicker.datepickerMode==='year'" role="grid">
  <thead>
    <tr>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-left float-left"
                (click)="datePicker.move(-1)" tabindex="-1">‹</button>
      </th>
      <th [attr.colspan]="((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2">
        <button [id]="datePicker.uniqueId + '-title'" role="heading"
                type="button" class="btn btn-default btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === datePicker.maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong>
        </button>
      </th>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-right float-right"
                (click)="datePicker.move(1)" tabindex="-1">›</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let rowz of rows">
      <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [attr.id]="dtz.uid">
        <button type="button" style="min-width:100%;" class="btn btn-default"
                [ngClass]="{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}"
                [disabled]="dtz.disabled"
                (click)="datePicker.select(dtz.date)" tabindex="-1">
          <span [ngClass]="{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-info .text-success {
      color: #fff !important;
    }
  `]
            }] }
];
/** @nocollapse */
YearPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
    }
}
DatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [
                    DatePickerComponent,
                    DatePickerInnerComponent,
                    DayPickerComponent,
                    MonthPickerComponent,
                    YearPickerComponent
                ],
                exports: [
                    DatePickerComponent,
                    DatePickerInnerComponent,
                    DayPickerComponent,
                    MonthPickerComponent,
                    YearPickerComponent
                ],
                entryComponents: [DatePickerComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BsDatepickerConfig, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerDirective, BsLocaleService, DateFormatter, DatePickerComponent, DatepickerConfig, DatepickerModule, DayPickerComponent, MonthPickerComponent, YearPickerComponent, BsDatepickerAbstractComponent as ɵl, BsDatepickerInputDirective as ɵr, BsDaterangepickerInputDirective as ɵs, DatePickerInnerComponent as ɵt, DATEPICKER_CONTROL_VALUE_ACCESSOR as ɵa, BsDatepickerActions as ɵo, BsDatepickerEffects as ɵn, BsDatepickerStore as ɵm, BsCalendarLayoutComponent as ɵf, BsCurrentDateViewComponent as ɵc, BsCustomDatesViewComponent as ɵj, BsDatepickerContainerComponent as ɵk, BsDatepickerDayDecoratorComponent as ɵb, BsDatepickerInlineContainerComponent as ɵq, BsDatepickerNavigationViewComponent as ɵd, BsDaterangepickerContainerComponent as ɵp, BsDaysCalendarViewComponent as ɵg, BsMonthCalendarViewComponent as ɵh, BsTimepickerViewComponent as ɵe, BsYearsCalendarViewComponent as ɵi };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kYXRlcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1sb2NhbGUuc2VydmljZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9fZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci91dGlscy9icy1jYWxlbmRhci11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3V0aWxzL21hdHJpeC11dGlscy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9jYWxjLWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZm9ybWF0LWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL3ZpZXctbW9kZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2ZsYWctbW9udGhzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLnJlZHVjZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcmFuZ2VwaWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWNhbGVuZGFyLWxheW91dC5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtY3VycmVudC1kYXRlLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLW1vbnRocy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLXllYXJzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci5tb2R1bGUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlLWZvcm1hdHRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RheXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9tb250aHBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci95ZWFycGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcclxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZVxyXG59IGZyb20gJy4vbW9kZWxzJztcclxuXHJcblxyXG4vKipcclxuICogRm9yIGRhdGUgcmFuZ2UgcGlja2VyIHRoZXJlIGFyZSBgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWdgIHdoaWNoIGluaGVyaXRzIGFsbCBwcm9wZXJ0aWVzLFxyXG4gKiBleGNlcHQgYGRpc3BsYXlNb250aHNgLCBmb3IgcmFuZ2UgcGlja2VyIGl0IGRlZmF1bHQgdG8gYDJgXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb25maWcgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XHJcbiAgLyoqIHNldHMgdXNlIGFkYXB0aXZlIHBvc2l0aW9uICovXHJcbiAgYWRhcHRpdmVQb3NpdGlvbiA9IGZhbHNlO1xyXG4gIHZhbHVlPzogRGF0ZSB8IERhdGVbXTtcclxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IG1pbiBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXHJcbiAgICovXHJcbiAgbWluRGF0ZT86IERhdGU7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBtYXggZGF0ZSBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xyXG4gICAqL1xyXG4gIG1heERhdGU/OiBEYXRlO1xyXG5cclxuICBkYXlzRGlzYWJsZWQ/OiBudW1iZXJbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xyXG4gICAqL1xyXG4gIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogTWFrZXMgZGF0ZXMgZnJvbSBvdGhlciBtb250aHMgYWN0aXZlXHJcbiAgICovXHJcbiAgc2VsZWN0RnJvbU90aGVyTW9udGg/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBNYWtlcyBkYXRlcyBmcm9tIG90aGVyIG1vbnRocyBhY3RpdmVcclxuICAgKi9cclxuICBzZWxlY3RXZWVrPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGNsYXNzIHRvIGN1cnJlbnQgZGF5XHJcbiAgICovXHJcbiAgY3VzdG9tVG9kYXlDbGFzcz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBtb2RlIGZvciBhbGwgZGF0ZSBwaWNrZXJzXHJcbiAgICovXHJcbiAgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xyXG5cclxuICAvKiogQ1NTIGNsYXNzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byBkYXRlcGlja2VyIGNvbnRhaW5lcixcclxuICAgKiB1c3VhbGx5IHVzZWQgdG8gc2V0IGNvbG9yIHRoZW1lXHJcbiAgICovXHJcbiAgY29udGFpbmVyQ2xhc3MgPSAndGhlbWUtZ3JlZW4nO1xyXG5cclxuICAvLyBEYXRlcGlja2VyUmVuZGVyT3B0aW9uc1xyXG4gIGRpc3BsYXlNb250aHMgPSAxO1xyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0byBoaWRlIHdlZWsgbnVtYmVycyBpbiBkYXRlcGlja2VyXHJcbiAgICovXHJcbiAgc2hvd1dlZWtOdW1iZXJzID0gdHJ1ZTtcclxuXHJcbiAgZGF0ZUlucHV0Rm9ybWF0ID0gJ0wnO1xyXG4gIC8vIHJhbmdlIHBpY2tlclxyXG4gIHJhbmdlU2VwYXJhdG9yID0gJyAtICc7XHJcbiAgLyoqXHJcbiAgICogRGF0ZSBmb3JtYXQgZm9yIGRhdGUgcmFuZ2UgaW5wdXQgZmllbGRcclxuICAgKi9cclxuICByYW5nZUlucHV0Rm9ybWF0ID0gJ0wnO1xyXG5cclxuICAvLyBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4gIG1vbnRoVGl0bGUgPSAnTU1NTSc7XHJcbiAgeWVhclRpdGxlID0gJ1lZWVknO1xyXG4gIGRheUxhYmVsID0gJ0QnO1xyXG4gIG1vbnRoTGFiZWwgPSAnTU1NTSc7XHJcbiAgeWVhckxhYmVsID0gJ1lZWVknO1xyXG4gIHdlZWtOdW1iZXJzID0gJ3cnO1xyXG59XHJcbiIsIi8vIGRhdGVwaWNrZXIgY29udGFpbmVyIGNvbXBvbmVudFxyXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1lbXB0eSAqL1xyXG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzIH0gZnJvbSAnLi4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcclxuICBCc05hdmlnYXRpb25FdmVudCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXHJcbiAgQ2VsbEhvdmVyRXZlbnQsXHJcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXHJcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIERheVZpZXdNb2RlbCxcclxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBXZWVrVmlld01vZGVsLFxyXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IHtcclxuICBjb250YWluZXJDbGFzczogc3RyaW5nO1xyXG4gIGlzT3RoZXJNb250aHNBY3RpdmU6IGJvb2xlYW47XHJcblxyXG4gIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzO1xyXG4gIF9jdXN0b21SYW5nZXNGaXNoOiBCc0N1c3RvbURhdGVzW10gPSBbXTtcclxuXHJcbiAgc2V0IG1pbkRhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWluRGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4RGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy5fZWZmZWN0cy5zZXRNYXhEYXRlKHZhbHVlKTtcclxuICB9XHJcbiAgc2V0IGRheXNEaXNhYmxlZCh2YWx1ZTogbnVtYmVyW10pIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF5c0Rpc2FibGVkKHZhbHVlKTtcclxuICB9XHJcbiAgc2V0IGRhdGVzRGlzYWJsZWQodmFsdWU6IERhdGVbXSkge1xyXG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXRlc0Rpc2FibGVkKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldCBpc0Rpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldERpc2FibGVkKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHZpZXdNb2RlOiBPYnNlcnZhYmxlPEJzRGF0ZXBpY2tlclZpZXdNb2RlPjtcclxuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xyXG4gIG1vbnRoc0NhbGVuZGFyOiBPYnNlcnZhYmxlPE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW10+O1xyXG4gIHllYXJzQ2FsZW5kYXI6IE9ic2VydmFibGU8WWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdPjtcclxuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcclxuXHJcbiAgc2V0Vmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7fVxyXG5cclxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQge31cclxuXHJcbiAgZGF5SG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cclxuXHJcbiAgd2Vla0hvdmVySGFuZGxlcihldmVudDogV2Vla1ZpZXdNb2RlbCk6IHZvaWQge31cclxuXHJcbiAgbW9udGhIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxyXG5cclxuICB5ZWFySG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cclxuXHJcbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge31cclxuXHJcbiAgbW9udGhTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XHJcblxyXG4gIHllYXJTZWxlY3RIYW5kbGVyKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHt9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgX3N0b3BQcm9wYWdhdGlvbihldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcclxuaW1wb3J0IHtcclxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcclxuICBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQsXHJcbiAgQ2VsbEhvdmVyRXZlbnQsXHJcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQWN0aW9ucyB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IENBTENVTEFURSA9ICdbZGF0ZXBpY2tlcl0gY2FsY3VsYXRlIGRhdGVzIG1hdHJpeCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEZPUk1BVCA9ICdbZGF0ZXBpY2tlcl0gZm9ybWF0IGRhdGVwaWNrZXIgdmFsdWVzJztcclxuICBzdGF0aWMgcmVhZG9ubHkgRkxBRyA9ICdbZGF0ZXBpY2tlcl0gc2V0IGZsYWdzJztcclxuICBzdGF0aWMgcmVhZG9ubHkgU0VMRUNUID0gJ1tkYXRlcGlja2VyXSBzZWxlY3QgZGF0ZSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX09GRlNFVCA9ICdbZGF0ZXBpY2tlcl0gc2hpZnQgdmlldyBkYXRlJztcclxuICBzdGF0aWMgcmVhZG9ubHkgTkFWSUdBVEVfVE8gPSAnW2RhdGVwaWNrZXJdIGNoYW5nZSB2aWV3IGRhdGUnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfT1BUSU9OUyA9ICdbZGF0ZXBpY2tlcl0gdXBkYXRlIHJlbmRlciBvcHRpb25zJztcclxuICBzdGF0aWMgcmVhZG9ubHkgSE9WRVIgPSAnW2RhdGVwaWNrZXJdIGhvdmVyIGRhdGUnO1xyXG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfVklFV01PREUgPSAnW2RhdGVwaWNrZXJdIHN3aXRjaCB2aWV3IG1vZGUnO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01JTl9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWluIGRhdGUnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfTUFYX0RBVEUgPSAnW2RhdGVwaWNrZXJdIHNldCBtYXggZGF0ZSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9EQVlTRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXlzIGRpc2FibGVkJztcclxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX0RBVEVTRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcyBkaXNhYmxlZCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9JU19ESVNBQkxFRCA9ICdbZGF0ZXBpY2tlcl0gc2V0IGlzIGRpc2FibGVkJztcclxuXHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9MT0NBTEUgPSAnW2RhdGVwaWNrZXJdIHNldCBkYXRlcGlja2VyIGxvY2FsZSc7XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSBTRUxFQ1RfUkFOR0UgPSAnW2RhdGVyYW5nZXBpY2tlcl0gc2VsZWN0IGRhdGVzIHJhbmdlJztcclxuXHJcbiAgY2FsY3VsYXRlKCk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkNBTENVTEFURSB9O1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KCk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4geyB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVCB9O1xyXG4gIH1cclxuXHJcbiAgZmxhZygpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5GTEFHIH07XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZGF0ZTogRGF0ZSk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVCxcclxuICAgICAgcGF5bG9hZDogZGF0ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkNIQU5HRV9WSUVXTU9ERSxcclxuICAgICAgcGF5bG9hZDogZXZlbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9UTyxcclxuICAgICAgcGF5bG9hZDogZXZlbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBuYXZpZ2F0ZVN0ZXAoc3RlcDogVGltZVVuaXQpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5OQVZJR0FURV9PRkZTRVQsXHJcbiAgICAgIHBheWxvYWQ6IHN0ZXBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRPcHRpb25zKG9wdGlvbnM6IERhdGVwaWNrZXJSZW5kZXJPcHRpb25zKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX09QVElPTlMsXHJcbiAgICAgIHBheWxvYWQ6IG9wdGlvbnNcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvLyBkYXRlIHJhbmdlIHBpY2tlclxyXG4gIHNlbGVjdFJhbmdlKHZhbHVlOiBEYXRlW10pOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1RfUkFOR0UsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaG92ZXJEYXkoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuSE9WRVIsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50LmlzSG92ZXJlZCA/IGV2ZW50LmNlbGwuZGF0ZSA6IG51bGxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBtaW5EYXRlKGRhdGU6IERhdGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUlOX0RBVEUsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBtYXhEYXRlKGRhdGU6IERhdGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEUsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBkYXlzRGlzYWJsZWQoZGF5czogbnVtYmVyW10pOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfREFZU0RJU0FCTEVELFxyXG4gICAgICBwYXlsb2FkOiBkYXlzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGF0ZXNEaXNhYmxlZChkYXRlczogRGF0ZVtdKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBVEVTRElTQUJMRUQsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGVzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9JU19ESVNBQkxFRCxcclxuICAgICAgcGF5bG9hZDogdmFsdWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTE9DQUxFLFxyXG4gICAgICBwYXlsb2FkOiBsb2NhbGVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0xvY2FsZVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX2RlZmF1bHRMb2NhbGUgPSAnZW4nO1xyXG4gIHByaXZhdGUgX2xvY2FsZSA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPih0aGlzLl9kZWZhdWx0TG9jYWxlKTtcclxuICBwcml2YXRlIF9sb2NhbGVDaGFuZ2U6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuX2xvY2FsZS5hc09ic2VydmFibGUoKTtcclxuXHJcbiAgZ2V0IGxvY2FsZSgpOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGxvY2FsZUNoYW5nZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZUNoYW5nZTtcclxuICB9XHJcblxyXG4gIGdldCBjdXJyZW50TG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlLmdldFZhbHVlKCk7XHJcbiAgfVxyXG5cclxuICB1c2UobG9jYWxlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChsb2NhbGUgPT09IHRoaXMuY3VycmVudExvY2FsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbG9jYWxlLm5leHQobG9jYWxlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuLi9icy1sb2NhbGUuc2VydmljZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcclxuICBDZWxsSG92ZXJFdmVudCxcclxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgRGF5Vmlld01vZGVsLFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gIHZpZXdNb2RlOiBPYnNlcnZhYmxlPEJzRGF0ZXBpY2tlclZpZXdNb2RlPjtcclxuICBkYXlzQ2FsZW5kYXI6IE9ic2VydmFibGU8RGF5c0NhbGVuZGFyVmlld01vZGVsW10+O1xyXG4gIG1vbnRoc0NhbGVuZGFyOiBPYnNlcnZhYmxlPE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW10+O1xyXG4gIHllYXJzQ2FsZW5kYXI6IE9ic2VydmFibGU8WWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdPjtcclxuICBvcHRpb25zOiBPYnNlcnZhYmxlPERhdGVwaWNrZXJSZW5kZXJPcHRpb25zPjtcclxuXHJcbiAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlO1xyXG4gIHByaXZhdGUgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlKSB7fVxyXG5cclxuICBpbml0KF9ic0RhdGVwaWNrZXJTdG9yZTogQnNEYXRlcGlja2VyU3RvcmUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIHRoaXMuX3N0b3JlID0gX2JzRGF0ZXBpY2tlclN0b3JlO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIHNldHRlcnMgKi9cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0KHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZVZhbHVlKHZhbHVlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0UmFuZ2UodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHNldE1pbkRhdGUodmFsdWU6IERhdGUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubWluRGF0ZSh2YWx1ZSkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0TWF4RGF0ZSh2YWx1ZTogRGF0ZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5tYXhEYXRlKHZhbHVlKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXREYXlzRGlzYWJsZWQodmFsdWU6IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmRheXNEaXNhYmxlZCh2YWx1ZSkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZXNEaXNhYmxlZCh2YWx1ZTogRGF0ZVtdKSB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmRhdGVzRGlzYWJsZWQodmFsdWUpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkKHZhbHVlOiBib29sZWFuKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmlzRGlzYWJsZWQodmFsdWUpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qIFNldCByZW5kZXJpbmcgb3B0aW9ucyAqL1xyXG4gIHNldE9wdGlvbnMoX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICBjb25zdCBfb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe2xvY2FsZTogdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlfSwgX2NvbmZpZyk7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNldE9wdGlvbnMoX29wdGlvbnMpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiB2aWV3IHRvIG1vZGUgYmluZGluZ3MgKi9cclxuICBzZXRCaW5kaW5ncyhjb250YWluZXI6IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50KTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICBjb250YWluZXIuZGF5c0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcclxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIobW9udGhzID0+ICEhbW9udGhzKVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIG1vbnRoIGNhbGVuZGFyXHJcbiAgICBjb250YWluZXIubW9udGhzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxyXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZsYWdnZWRNb250aHNDYWxlbmRhcilcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKG1vbnRocyA9PiAhIW1vbnRocylcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyB5ZWFyIGNhbGVuZGFyXHJcbiAgICBjb250YWluZXIueWVhcnNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXHJcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUueWVhcnNDYWxlbmRhckZsYWdnZWQpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcih5ZWFycyA9PiAhIXllYXJzKVxyXG4gICAgICApO1xyXG5cclxuICAgIGNvbnRhaW5lci52aWV3TW9kZSA9IHRoaXMuX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52aWV3Lm1vZGUpO1xyXG5cclxuICAgIGNvbnRhaW5lci5vcHRpb25zID0gdGhpcy5fc3RvcmVcclxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zaG93V2Vla051bWJlcnMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIG1hcChzaG93V2Vla051bWJlcnMgPT4gKHtzaG93V2Vla051bWJlcnN9KSlcclxuICAgICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBldmVudCBoYW5kbGVycyAqL1xyXG4gIHNldEV2ZW50SGFuZGxlcnMoY29udGFpbmVyOiBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgY29udGFpbmVyLnNldFZpZXdNb2RlID0gKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQgPT4ge1xyXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmNoYW5nZVZpZXdNb2RlKGV2ZW50KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5uYXZpZ2F0ZVRvID0gKGV2ZW50OiBCc05hdmlnYXRpb25FdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm5hdmlnYXRlU3RlcChldmVudC5zdGVwKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5kYXlIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgIGNvbnN0IF9jZWxsID0gZXZlbnQuY2VsbCBhcyBEYXlWaWV3TW9kZWw7XHJcbiAgICAgIGlmIChfY2VsbC5pc090aGVyTW9udGggfHwgX2NlbGwuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5ob3ZlckRheShldmVudCkpO1xyXG4gICAgICBfY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5tb250aEhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci55ZWFySG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICBldmVudC5jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLm1vbnRoU2VsZWN0SGFuZGxlciA9IChldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCA9PiB7XHJcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1bml0OiB7XHJcbiAgICAgICAgICAgIG1vbnRoOiBnZXRNb250aChldmVudC5kYXRlKSxcclxuICAgICAgICAgICAgeWVhcjogZ2V0RnVsbFllYXIoZXZlbnQuZGF0ZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2aWV3TW9kZTogJ2RheSdcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIueWVhclNlbGVjdEhhbmRsZXIgPSAoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdW5pdDoge1xyXG4gICAgICAgICAgICB5ZWFyOiBnZXRGdWxsWWVhcihldmVudC5kYXRlKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZpZXdNb2RlOiAnbW9udGgnXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICByZWdpc3RlckRhdGVwaWNrZXJTaWRlRWZmZWN0cygpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZpZXcpLnN1YnNjcmliZSh2aWV3ID0+IHtcclxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmNhbGN1bGF0ZSgpKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gZm9ybWF0IGNhbGVuZGFyIHZhbHVlcyBvbiBtb250aCBtb2RlbCBjaGFuZ2VcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm1vbnRoc01vZGVsKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKG1vbnRoTW9kZWwgPT4gISFtb250aE1vZGVsKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKG1vbnRoID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZm9ybWF0KCkpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBmbGFnIGRheSB2YWx1ZXNcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZvcm1hdHRlZE1vbnRocylcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihtb250aCA9PiAhIW1vbnRoKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKG1vbnRoID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gZmxhZyBkYXkgdmFsdWVzXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3RlZERhdGUpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoc2VsZWN0ZWREYXRlID0+ICEhc2VsZWN0ZWREYXRlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkRGF0ZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGZsYWcgZm9yIGRhdGUgcmFuZ2UgcGlja2VyXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5zZWxlY3RlZFJhbmdlKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKHNlbGVjdGVkUmFuZ2UgPT4gISFzZWxlY3RlZFJhbmdlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKHNlbGVjdGVkUmFuZ2UgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBtb250aHNDYWxlbmRhclxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzQ2FsZW5kYXIpXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHllYXJzIGNhbGVuZGFyXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS55ZWFyc0NhbGVuZGFyTW9kZWwpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoc3RhdGUgPT4gISFzdGF0ZSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG9uIGhvdmVyXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5ob3ZlcmVkRGF0ZSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihob3ZlcmVkRGF0ZSA9PiAhIWhvdmVyZWREYXRlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKGhvdmVyZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gb24gbG9jYWxlIGNoYW5nZVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmxvY2FsZUNoYW5nZVxyXG4gICAgICAgIC5zdWJzY3JpYmUobG9jYWxlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0TG9jYWxlKGxvY2FsZSkpKVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIE1vbnRoVmlld09wdGlvbnNcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRNb250aE9wdGlvbnM6IE1vbnRoVmlld09wdGlvbnMgPSB7XHJcbiAgd2lkdGg6IDcsXHJcbiAgaGVpZ2h0OiA2XHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXHJcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXHJcbiAgRGF5c0NhbGVuZGFyTW9kZWwsXHJcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIE1vbnRoVmlld09wdGlvbnMsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRNb250aE9wdGlvbnMgfSBmcm9tICcuL19kZWZhdWx0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnNEYXRlcGlja2VyVmlld1N0YXRlIHtcclxuICBkYXRlOiBEYXRlO1xyXG4gIG1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RhdGVcclxuICBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLCBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyB7XHJcbiAgLy8gZGF0ZSBwaWNrZXJcclxuICBzZWxlY3RlZERhdGU/OiBEYXRlO1xyXG4gIC8vIGRhdGVyYW5nZSBwaWNrZXJcclxuICBzZWxlY3RlZFJhbmdlPzogRGF0ZVtdO1xyXG5cclxuICAvLyBpbml0aWFsIGRhdGUgb2YgY2FsZW5kYXIsIHRvZGF5IGJ5IGRlZmF1bHRcclxuICB2aWV3OiBCc0RhdGVwaWNrZXJWaWV3U3RhdGU7XHJcblxyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8vIGJvdW5kc1xyXG4gIG1pbkRhdGU/OiBEYXRlO1xyXG4gIG1heERhdGU/OiBEYXRlO1xyXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xyXG4gIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW107XHJcbiAgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xyXG5cclxuICBob3ZlcmVkRGF0ZT86IERhdGU7XHJcbiAgaG92ZXJlZE1vbnRoPzogRGF0ZTtcclxuICBob3ZlcmVkWWVhcj86IERhdGU7XHJcblxyXG4gIC8vIGRheXMgY2FsZW5kYXJcclxuICBtb250aHNNb2RlbD86IERheXNDYWxlbmRhck1vZGVsW107XHJcbiAgZm9ybWF0dGVkTW9udGhzPzogRGF5c0NhbGVuZGFyVmlld01vZGVsW107XHJcbiAgZmxhZ2dlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcclxuXHJcbiAgLy8gbW9udGhzIGNhbGVuZGFyXHJcbiAgbW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG4gIGZsYWdnZWRNb250aHNDYWxlbmRhcj86IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsW107XHJcblxyXG4gIC8vIHllYXJzIGNhbGVuZGFyXHJcbiAgeWVhcnNDYWxlbmRhck1vZGVsPzogWWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG4gIHllYXJzQ2FsZW5kYXJGbGFnZ2VkPzogWWVhcnNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG5cclxuICAvLyBvcHRpb25zXHJcbiAgbW9udGhWaWV3T3B0aW9uczogTW9udGhWaWV3T3B0aW9ucztcclxuXHJcbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcclxuICBzaG93V2Vla051bWJlcnM/OiBib29sZWFuO1xyXG4gIGRpc3BsYXlNb250aHM/OiBudW1iZXI7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXHJcbiAgbG9jYWxlOiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoVGl0bGU6IHN0cmluZztcclxuICB5ZWFyVGl0bGU6IHN0cmluZztcclxuXHJcbiAgZGF5TGFiZWw6IHN0cmluZztcclxuICBtb250aExhYmVsOiBzdHJpbmc7XHJcbiAgeWVhckxhYmVsOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtOdW1iZXJzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IF9pbml0aWFsVmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlID0geyBkYXRlOiBuZXcgRGF0ZSgpLCBtb2RlOiAnZGF5JyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxEYXRlcGlja2VyU3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlID0gT2JqZWN0LmFzc2lnbihcclxuICBuZXcgQnNEYXRlcGlja2VyQ29uZmlnKCksXHJcbiAge1xyXG4gICAgbG9jYWxlOiAnZW4nLFxyXG4gICAgdmlldzogX2luaXRpYWxWaWV3LFxyXG4gICAgc2VsZWN0ZWRSYW5nZTogW10sXHJcbiAgICBtb250aFZpZXdPcHRpb25zOiBkZWZhdWx0TW9udGhPcHRpb25zXHJcbiAgfVxyXG4pO1xyXG4iLCJpbXBvcnQge1xyXG4gIGdldERheSxcclxuICBpc0ZpcnN0RGF5T2ZXZWVrLFxyXG4gIGlzQWZ0ZXIsXHJcbiAgaXNCZWZvcmUsXHJcbiAgc2hpZnREYXRlLFxyXG4gIGVuZE9mLFxyXG4gIHN0YXJ0T2YsXHJcbiAgaXNTYW1lXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB7IGZpcnN0RGF5T2ZXZWVrPzogbnVtYmVyIH0pOiBEYXRlIHtcclxuICBpZiAoaXNGaXJzdERheU9mV2VlayhkYXRlLCBvcHRpb25zLmZpcnN0RGF5T2ZXZWVrKSkge1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3ZWVrRGF5ID0gZ2V0RGF5KGRhdGUpO1xyXG4gIGNvbnN0IG9mZnNldCA9IGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla0RheSwgb3B0aW9ucy5maXJzdERheU9mV2Vlayk7XHJcblxyXG4gIHJldHVybiBzaGlmdERhdGUoZGF0ZSwge2RheTogLW9mZnNldH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlRGF0ZU9mZnNldCh3ZWVrZGF5OiBudW1iZXIsIHN0YXJ0aW5nRGF5T2Zmc2V0OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChzdGFydGluZ0RheU9mZnNldCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIHdlZWtkYXk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvZmZzZXQgPSB3ZWVrZGF5IC0gc3RhcnRpbmdEYXlPZmZzZXQgJSA3O1xyXG5cclxuICByZXR1cm4gb2Zmc2V0IDwgMCA/IG9mZnNldCArIDcgOiBvZmZzZXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc01vbnRoRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtaW5Cb3VuZCA9IG1pbiAmJiBpc0JlZm9yZShlbmRPZihkYXRlLCAnbW9udGgnKSwgbWluLCAnZGF5Jyk7XHJcbiAgY29uc3QgbWF4Qm91bmQgPSBtYXggJiYgaXNBZnRlcihzdGFydE9mKGRhdGUsICdtb250aCcpLCBtYXgsICdkYXknKTtcclxuXHJcbiAgcmV0dXJuIG1pbkJvdW5kIHx8IG1heEJvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNZZWFyRGlzYWJsZWQoZGF0ZTogRGF0ZSwgbWluOiBEYXRlLCBtYXg6IERhdGUpOiBib29sZWFuIHtcclxuICBjb25zdCBtaW5Cb3VuZCA9IG1pbiAmJiBpc0JlZm9yZShlbmRPZihkYXRlLCAneWVhcicpLCBtaW4sICdkYXknKTtcclxuICBjb25zdCBtYXhCb3VuZCA9IG1heCAmJiBpc0FmdGVyKHN0YXJ0T2YoZGF0ZSwgJ3llYXInKSwgbWF4LCAnZGF5Jyk7XHJcblxyXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlzYWJsZWREYXRlKGRhdGU6IERhdGUsIGRhdGVzRGlzYWJsZWQ6IERhdGVbXSk6IGJvb2xlYW4ge1xyXG4gIGlmIChkYXRlc0Rpc2FibGVkID09PSB1bmRlZmluZWQgfHwgIWRhdGVzRGlzYWJsZWQgfHwgIWRhdGVzRGlzYWJsZWQubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0ZXNEaXNhYmxlZC5zb21lKChkYXRlRGlzYWJsZWQ6IERhdGUpID0+IGlzU2FtZShkYXRlLCBkYXRlRGlzYWJsZWQsICdkYXRlJykpO1xyXG59XHJcbiIsImltcG9ydCB7IFRpbWVVbml0LCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5cclxuZXhwb3J0IHR5cGUgQ3JlYXRlTWF0cml4Q2I8VD4gPSAoZGF0ZTogRGF0ZSkgPT4gVDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWF0cml4T3B0aW9ucyB7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBpbml0aWFsRGF0ZTogRGF0ZTtcclxuICBzaGlmdDogVGltZVVuaXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNYXRyaXg8VD4oXHJcbiAgb3B0aW9uczogTWF0cml4T3B0aW9ucyxcclxuICBmbjogQ3JlYXRlTWF0cml4Q2I8VD5cclxuKTogVFtdW10ge1xyXG4gIGxldCBwcmV2VmFsdWUgPSBvcHRpb25zLmluaXRpYWxEYXRlO1xyXG4gIGNvbnN0IG1hdHJpeDogVFtdW10gPSBuZXcgQXJyYXkob3B0aW9ucy5oZWlnaHQpO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5oZWlnaHQ7IGkrKykge1xyXG4gICAgbWF0cml4W2ldID0gbmV3IEFycmF5KG9wdGlvbnMud2lkdGgpO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBvcHRpb25zLndpZHRoOyBqKyspIHtcclxuICAgICAgbWF0cml4W2ldW2pdID0gZm4ocHJldlZhbHVlKTtcclxuICAgICAgcHJldlZhbHVlID0gc2hpZnREYXRlKHByZXZWYWx1ZSwgb3B0aW9ucy5zaGlmdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWF0cml4O1xyXG59XHJcbiIsIi8vIHVzZXIgYW5kIG1vZGVsIGlucHV0IHNob3VsZCBoYW5kbGUgcGFyc2luZyBhbmQgdmFsaWRhdGluZyBpbnB1dCB2YWx1ZXNcclxuLy8gc2hvdWxkIGFjY2VwdCBzb21lIG9wdGlvbnNcclxuLy8gdG9kbzogc3BsaXQgb3V0IGZvcm1hdHRpbmdcclxuaW1wb3J0IHsgRGF5c0NhbGVuZGFyTW9kZWwsIE1vbnRoVmlld09wdGlvbnMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBnZXRGaXJzdERheU9mTW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY0RheXNDYWxlbmRhcihcclxuICBzdGFydGluZ0RhdGU6IERhdGUsXHJcbiAgb3B0aW9uczogTW9udGhWaWV3T3B0aW9uc1xyXG4pOiBEYXlzQ2FsZW5kYXJNb2RlbCB7XHJcbiAgY29uc3QgZmlyc3REYXkgPSBnZXRGaXJzdERheU9mTW9udGgoc3RhcnRpbmdEYXRlKTtcclxuICBjb25zdCBpbml0aWFsRGF0ZSA9IGdldFN0YXJ0aW5nRGF5T2ZDYWxlbmRhcihmaXJzdERheSwgb3B0aW9ucyk7XHJcblxyXG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7XHJcbiAgICB3aWR0aDogb3B0aW9ucy53aWR0aCxcclxuICAgIGhlaWdodDogb3B0aW9ucy5oZWlnaHQsXHJcbiAgICBpbml0aWFsRGF0ZSxcclxuICAgIHNoaWZ0OiB7IGRheTogMSB9XHJcbiAgfTtcclxuICBjb25zdCBkYXlzTWF0cml4ID0gY3JlYXRlTWF0cml4PERhdGU+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gZGF0ZSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBkYXlzTWF0cml4LFxyXG4gICAgbW9udGg6IGZpcnN0RGF5XHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxyXG4gIERheXNDYWxlbmRhck1vZGVsLFxyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGZvcm1hdERhdGUsIGdldExvY2FsZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF5c0NhbGVuZGFyKGRheXNDYWxlbmRhcjogRGF5c0NhbGVuZGFyTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhJbmRleDogbnVtYmVyKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcclxuICByZXR1cm4ge1xyXG4gICAgbW9udGg6IGRheXNDYWxlbmRhci5tb250aCxcclxuICAgIG1vbnRoVGl0bGU6IGZvcm1hdERhdGUoXHJcbiAgICAgIGRheXNDYWxlbmRhci5tb250aCxcclxuICAgICAgZm9ybWF0T3B0aW9ucy5tb250aFRpdGxlLFxyXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxyXG4gICAgKSxcclxuICAgIHllYXJUaXRsZTogZm9ybWF0RGF0ZShcclxuICAgICAgZGF5c0NhbGVuZGFyLm1vbnRoLFxyXG4gICAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcclxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcclxuICAgICksXHJcbiAgICB3ZWVrTnVtYmVyczogZ2V0V2Vla051bWJlcnMoXHJcbiAgICAgIGRheXNDYWxlbmRhci5kYXlzTWF0cml4LFxyXG4gICAgICBmb3JtYXRPcHRpb25zLndlZWtOdW1iZXJzLFxyXG4gICAgICBmb3JtYXRPcHRpb25zLmxvY2FsZVxyXG4gICAgKSxcclxuICAgIHdlZWtkYXlzOiBnZXRTaGlmdGVkV2Vla2RheXMoZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxyXG4gICAgd2Vla3M6IGRheXNDYWxlbmRhci5kYXlzTWF0cml4Lm1hcCgod2VlazogRGF0ZVtdLCB3ZWVrSW5kZXg6IG51bWJlcikgPT4gKHtcclxuICAgICAgZGF5czogd2Vlay5tYXAoKGRhdGU6IERhdGUsIGRheUluZGV4OiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgZGF0ZSxcclxuICAgICAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLmRheUxhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSksXHJcbiAgICAgICAgbW9udGhJbmRleCxcclxuICAgICAgICB3ZWVrSW5kZXgsXHJcbiAgICAgICAgZGF5SW5kZXhcclxuICAgICAgfSkpXHJcbiAgICB9KSlcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla051bWJlcnMoZGF5c01hdHJpeDogRGF0ZVtdW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gIHJldHVybiBkYXlzTWF0cml4Lm1hcChcclxuICAgIChkYXlzOiBEYXRlW10pID0+IChkYXlzWzBdID8gZm9ybWF0RGF0ZShkYXlzWzBdLCBmb3JtYXQsIGxvY2FsZSkgOiAnJylcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2hpZnRlZFdlZWtkYXlzKGxvY2FsZTogc3RyaW5nKTogc3RyaW5nW10ge1xyXG4gIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlKTtcclxuICBjb25zdCB3ZWVrZGF5cyA9IF9sb2NhbGUud2Vla2RheXNTaG9ydCgpIGFzIHN0cmluZ1tdO1xyXG4gIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gX2xvY2FsZS5maXJzdERheU9mV2VlaygpO1xyXG5cclxuICByZXR1cm4gWy4uLndlZWtkYXlzLnNsaWNlKGZpcnN0RGF5T2ZXZWVrKSwgLi4ud2Vla2RheXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspXTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBEYXlWaWV3TW9kZWwsXHJcbiAgV2Vla1ZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzQWZ0ZXIsXHJcbiAgaXNCZWZvcmUsXHJcbiAgaXNEaXNhYmxlZERheSxcclxuICBpc1NhbWVEYXksXHJcbiAgaXNTYW1lTW9udGgsXHJcbiAgc2hpZnREYXRlXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmltcG9ydCB7IGlzTW9udGhEaXNhYmxlZCwgaXNEaXNhYmxlZERhdGUgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zIHtcclxuICBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIG1pbkRhdGU6IERhdGU7XHJcbiAgbWF4RGF0ZTogRGF0ZTtcclxuICBkYXlzRGlzYWJsZWQ6IG51bWJlcltdO1xyXG4gIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcclxuICBob3ZlcmVkRGF0ZTogRGF0ZTtcclxuICBzZWxlY3RlZERhdGU6IERhdGU7XHJcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdO1xyXG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcclxuICBtb250aEluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGFnRGF5c0NhbGVuZGFyKFxyXG4gIGZvcm1hdHRlZE1vbnRoOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgb3B0aW9uczogRmxhZ0RheXNDYWxlbmRhck9wdGlvbnNcclxuKTogRGF5c0NhbGVuZGFyVmlld01vZGVsIHtcclxuICBmb3JtYXR0ZWRNb250aC53ZWVrcy5mb3JFYWNoKCh3ZWVrOiBXZWVrVmlld01vZGVsKSA9PiB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGN5Y2xvbWF0aWMtY29tcGxleGl0eSAqL1xyXG4gICAgd2Vlay5kYXlzLmZvckVhY2goKGRheTogRGF5Vmlld01vZGVsLCBkYXlJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIC8vIGRhdGVwaWNrZXJcclxuICAgICAgY29uc3QgaXNPdGhlck1vbnRoID0gIWlzU2FtZU1vbnRoKGRheS5kYXRlLCBmb3JtYXR0ZWRNb250aC5tb250aCk7XHJcblxyXG4gICAgICBjb25zdCBpc0hvdmVyZWQgPVxyXG4gICAgICAgICFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcclxuICAgICAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcclxuICAgICAgY29uc3QgaXNTZWxlY3Rpb25TdGFydCA9XHJcbiAgICAgICAgIWlzT3RoZXJNb250aCAmJlxyXG4gICAgICAgIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZSAmJlxyXG4gICAgICAgIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlWzBdKTtcclxuICAgICAgY29uc3QgaXNTZWxlY3Rpb25FbmQgPVxyXG4gICAgICAgICFpc090aGVyTW9udGggJiZcclxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcclxuICAgICAgICBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZVsxXSk7XHJcblxyXG4gICAgICBjb25zdCBpc1NlbGVjdGVkID1cclxuICAgICAgICAoIWlzT3RoZXJNb250aCAmJiBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWREYXRlKSkgfHxcclxuICAgICAgICBpc1NlbGVjdGlvblN0YXJ0IHx8XHJcbiAgICAgICAgaXNTZWxlY3Rpb25FbmQ7XHJcblxyXG4gICAgICBjb25zdCBpc0luUmFuZ2UgPVxyXG4gICAgICAgICFpc090aGVyTW9udGggJiZcclxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcclxuICAgICAgICBpc0RhdGVJblJhbmdlKGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2UsIG9wdGlvbnMuaG92ZXJlZERhdGUpO1xyXG5cclxuICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XHJcbiAgICAgICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XHJcbiAgICAgICAgaXNCZWZvcmUoZGF5LmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgJ2RheScpIHx8XHJcbiAgICAgICAgaXNBZnRlcihkYXkuZGF0ZSwgb3B0aW9ucy5tYXhEYXRlLCAnZGF5JykgfHxcclxuICAgICAgICBpc0Rpc2FibGVkRGF5KGRheS5kYXRlLCBvcHRpb25zLmRheXNEaXNhYmxlZCkgfHxcclxuICAgICAgICBpc0Rpc2FibGVkRGF0ZShkYXkuZGF0ZSwgb3B0aW9ucy5kYXRlc0Rpc2FibGVkKTtcclxuXHJcbiAgICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgY29uc3QgaXNUb2RheSA9ICFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBjdXJyZW50RGF0ZSk7XHJcblxyXG4gICAgICAvLyBkZWNpZGUgdXBkYXRlIG9yIG5vdFxyXG4gICAgICBjb25zdCBuZXdEYXkgPSBPYmplY3QuYXNzaWduKHt9LCBkYXksIHtcclxuICAgICAgICBpc090aGVyTW9udGgsXHJcbiAgICAgICAgaXNIb3ZlcmVkLFxyXG4gICAgICAgIGlzU2VsZWN0ZWQsXHJcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCxcclxuICAgICAgICBpc1NlbGVjdGlvbkVuZCxcclxuICAgICAgICBpc0luUmFuZ2UsXHJcbiAgICAgICAgaXNEaXNhYmxlZCxcclxuICAgICAgICBpc1RvZGF5XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRheS5pc090aGVyTW9udGggIT09IG5ld0RheS5pc090aGVyTW9udGggfHxcclxuICAgICAgICBkYXkuaXNIb3ZlcmVkICE9PSBuZXdEYXkuaXNIb3ZlcmVkIHx8XHJcbiAgICAgICAgZGF5LmlzU2VsZWN0ZWQgIT09IG5ld0RheS5pc1NlbGVjdGVkIHx8XHJcbiAgICAgICAgZGF5LmlzU2VsZWN0aW9uU3RhcnQgIT09IG5ld0RheS5pc1NlbGVjdGlvblN0YXJ0IHx8XHJcbiAgICAgICAgZGF5LmlzU2VsZWN0aW9uRW5kICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25FbmQgfHxcclxuICAgICAgICBkYXkuaXNEaXNhYmxlZCAhPT0gbmV3RGF5LmlzRGlzYWJsZWQgfHxcclxuICAgICAgICBkYXkuaXNJblJhbmdlICE9PSBuZXdEYXkuaXNJblJhbmdlXHJcbiAgICAgICkge1xyXG4gICAgICAgIHdlZWsuZGF5c1tkYXlJbmRleF0gPSBuZXdEYXk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcclxuICBmb3JtYXR0ZWRNb250aC5oaWRlTGVmdEFycm93ID1cclxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxyXG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA+IDAgJiYgb3B0aW9ucy5tb250aEluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHMpO1xyXG4gIGZvcm1hdHRlZE1vbnRoLmhpZGVSaWdodEFycm93ID1cclxuICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxyXG4gICAgKG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxyXG4gICAgICBvcHRpb25zLm1vbnRoSW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHMpO1xyXG5cclxuICBmb3JtYXR0ZWRNb250aC5kaXNhYmxlTGVmdEFycm93ID0gaXNNb250aERpc2FibGVkKFxyXG4gICAgc2hpZnREYXRlKGZvcm1hdHRlZE1vbnRoLm1vbnRoLCB7IG1vbnRoOiAtMSB9KSxcclxuICAgIG9wdGlvbnMubWluRGF0ZSxcclxuICAgIG9wdGlvbnMubWF4RGF0ZVxyXG4gICk7XHJcbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc01vbnRoRGlzYWJsZWQoXHJcbiAgICBzaGlmdERhdGUoZm9ybWF0dGVkTW9udGgubW9udGgsIHsgbW9udGg6IDEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG5cclxuICByZXR1cm4gZm9ybWF0dGVkTW9udGg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoXHJcbiAgZGF0ZTogRGF0ZSxcclxuICBzZWxlY3RlZFJhbmdlOiBEYXRlW10sXHJcbiAgaG92ZXJlZERhdGU6IERhdGVcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFkYXRlIHx8ICFzZWxlY3RlZFJhbmdlWzBdKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAoc2VsZWN0ZWRSYW5nZVsxXSkge1xyXG4gICAgcmV0dXJuIGRhdGUgPiBzZWxlY3RlZFJhbmdlWzBdICYmIGRhdGUgPD0gc2VsZWN0ZWRSYW5nZVsxXTtcclxuICB9XHJcblxyXG4gIGlmIChob3ZlcmVkRGF0ZSkge1xyXG4gICAgcmV0dXJuIGRhdGUgPiBzZWxlY3RlZFJhbmdlWzBdICYmIGRhdGUgPD0gaG92ZXJlZERhdGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn1cclxuIiwiaW1wb3J0IHsgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhblN3aXRjaE1vZGUobW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUsIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBtaW5Nb2RlID8gbW9kZSA+PSBtaW5Nb2RlIDogdHJ1ZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IHN0YXJ0T2YsIGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xyXG5cclxuY29uc3QgaGVpZ2h0ID0gNDtcclxuY29uc3Qgd2lkdGggPSAzO1xyXG5jb25zdCBzaGlmdCA9IHsgbW9udGg6IDEgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb250aHNDYWxlbmRhcihcclxuICB2aWV3RGF0ZTogRGF0ZSxcclxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4pOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBzdGFydE9mKHZpZXdEYXRlLCAneWVhcicpO1xyXG4gIGNvbnN0IG1hdHJpeE9wdGlvbnMgPSB7IHdpZHRoLCBoZWlnaHQsIGluaXRpYWxEYXRlLCBzaGlmdCB9O1xyXG4gIGNvbnN0IG1vbnRoTWF0cml4ID0gY3JlYXRlTWF0cml4PFxyXG4gICAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXHJcbiAgPihtYXRyaXhPcHRpb25zLCBkYXRlID0+ICh7XHJcbiAgICBkYXRlLFxyXG4gICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5tb250aExhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBtb250aHM6IG1vbnRoTWF0cml4LFxyXG4gICAgbW9udGhUaXRsZTogJycsXHJcbiAgICB5ZWFyVGl0bGU6IGZvcm1hdERhdGUoXHJcbiAgICAgIHZpZXdEYXRlLFxyXG4gICAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcclxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcclxuICAgIClcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IGlzU2FtZU1vbnRoLCBzaGlmdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQge1xyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGlzTW9udGhEaXNhYmxlZCwgaXNZZWFyRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdNb250aENhbGVuZGFyT3B0aW9ucyB7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBtaW5EYXRlOiBEYXRlO1xyXG4gIG1heERhdGU6IERhdGU7XHJcbiAgaG92ZXJlZE1vbnRoOiBEYXRlO1xyXG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcclxuICBtb250aEluZGV4OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmbGFnTW9udGhzQ2FsZW5kYXIoXHJcbiAgbW9udGhDYWxlbmRhcjogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgb3B0aW9uczogRmxhZ01vbnRoQ2FsZW5kYXJPcHRpb25zXHJcbik6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsIHtcclxuICBtb250aENhbGVuZGFyLm1vbnRocy5mb3JFYWNoKFxyXG4gICAgKG1vbnRoczogQ2FsZW5kYXJDZWxsVmlld01vZGVsW10sIHJvd0luZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgbW9udGhzLmZvckVhY2goKG1vbnRoOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIG1vbnRoSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IGlzU2FtZU1vbnRoKG1vbnRoLmRhdGUsIG9wdGlvbnMuaG92ZXJlZE1vbnRoKTtcclxuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID1cclxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxyXG4gICAgICAgICAgaXNNb250aERpc2FibGVkKG1vbnRoLmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlKTtcclxuICAgICAgICBjb25zdCBuZXdNb250aCA9IE9iamVjdC5hc3NpZ24oLyp7fSwqLyBtb250aCwge1xyXG4gICAgICAgICAgaXNIb3ZlcmVkLFxyXG4gICAgICAgICAgaXNEaXNhYmxlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIG1vbnRoLmlzSG92ZXJlZCAhPT0gbmV3TW9udGguaXNIb3ZlcmVkIHx8XHJcbiAgICAgICAgICBtb250aC5pc0Rpc2FibGVkICE9PSBuZXdNb250aC5pc0Rpc2FibGVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICBtb250aENhbGVuZGFyLm1vbnRoc1tyb3dJbmRleF1bbW9udGhJbmRleF0gPSBuZXdNb250aDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgbGlua2VkIGNhbGVuZGFyc1xyXG4gIG1vbnRoQ2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA9XHJcbiAgICBvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xyXG4gIG1vbnRoQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxyXG4gICAgb3B0aW9ucy5tb250aEluZGV4IDwgb3B0aW9ucy5kaXNwbGF5TW9udGhzICYmXHJcbiAgICBvcHRpb25zLm1vbnRoSW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XHJcblxyXG4gIG1vbnRoQ2FsZW5kYXIuZGlzYWJsZUxlZnRBcnJvdyA9IGlzWWVhckRpc2FibGVkKFxyXG4gICAgc2hpZnREYXRlKG1vbnRoQ2FsZW5kYXIubW9udGhzWzBdWzBdLmRhdGUsIHsgeWVhcjogLTEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG4gIG1vbnRoQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcclxuICAgIHNoaWZ0RGF0ZShtb250aENhbGVuZGFyLm1vbnRoc1swXVswXS5kYXRlLCB7IHllYXI6IDEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG5cclxuICByZXR1cm4gbW9udGhDYWxlbmRhcjtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxyXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgc2hpZnREYXRlLCBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcclxuXHJcbmNvbnN0IGhlaWdodCA9IDQ7XHJcbmNvbnN0IHdpZHRoID0gNDtcclxuZXhwb3J0IGNvbnN0IHllYXJzUGVyQ2FsZW5kYXIgPSBoZWlnaHQgKiB3aWR0aDtcclxuY29uc3QgaW5pdGlhbFNoaWZ0ID0gKE1hdGguZmxvb3IoeWVhcnNQZXJDYWxlbmRhciAvIDIpIC0gMSkgKiAtMTtcclxuY29uc3Qgc2hpZnQgPSB7IHllYXI6IDEgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRZZWFyc0NhbGVuZGFyKFxyXG4gIHZpZXdEYXRlOiBEYXRlLFxyXG4gIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXHJcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xyXG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IGluaXRpYWxTaGlmdCB9KTtcclxuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcclxuICBjb25zdCB5ZWFyc01hdHJpeCA9IGNyZWF0ZU1hdHJpeDxcclxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xyXG4gICAgZGF0ZSxcclxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMueWVhckxhYmVsLCBmb3JtYXRPcHRpb25zLmxvY2FsZSlcclxuICB9KSk7XHJcbiAgY29uc3QgeWVhclRpdGxlID0gZm9ybWF0WWVhclJhbmdlVGl0bGUoeWVhcnNNYXRyaXgsIGZvcm1hdE9wdGlvbnMpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeWVhcnM6IHllYXJzTWF0cml4LFxyXG4gICAgbW9udGhUaXRsZTogJycsXHJcbiAgICB5ZWFyVGl0bGVcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRZZWFyUmFuZ2VUaXRsZShcclxuICB5ZWFyc01hdHJpeDogQ2FsZW5kYXJDZWxsVmlld01vZGVsW11bXSxcclxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IGZyb20gPSBmb3JtYXREYXRlKFxyXG4gICAgeWVhcnNNYXRyaXhbMF1bMF0uZGF0ZSxcclxuICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxyXG4gICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcclxuICApO1xyXG4gIGNvbnN0IHRvID0gZm9ybWF0RGF0ZShcclxuICAgIHllYXJzTWF0cml4W2hlaWdodCAtIDFdW3dpZHRoIC0gMV0uZGF0ZSxcclxuICAgIGZvcm1hdE9wdGlvbnMueWVhclRpdGxlLFxyXG4gICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcclxuICApO1xyXG5cclxuICByZXR1cm4gYCR7ZnJvbX0gLSAke3RvfWA7XHJcbn1cclxuIiwiaW1wb3J0IHsgaXNTYW1lWWVhciwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgWWVhcnNDYWxlbmRhclZpZXdNb2RlbCwgQ2FsZW5kYXJDZWxsVmlld01vZGVsIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgaXNZZWFyRGlzYWJsZWQgfSBmcm9tICcuLi91dGlscy9icy1jYWxlbmRhci11dGlscyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZsYWdZZWFyc0NhbGVuZGFyT3B0aW9ucyB7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBtaW5EYXRlOiBEYXRlO1xyXG4gIG1heERhdGU6IERhdGU7XHJcbiAgaG92ZXJlZFllYXI6IERhdGU7XHJcbiAgZGlzcGxheU1vbnRoczogbnVtYmVyO1xyXG4gIHllYXJJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxhZ1llYXJzQ2FsZW5kYXIoXHJcbiAgeWVhcnNDYWxlbmRhcjogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBvcHRpb25zOiBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnNcclxuKTogWWVhcnNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgeWVhcnNDYWxlbmRhci55ZWFycy5mb3JFYWNoKFxyXG4gICAgKHllYXJzOiBDYWxlbmRhckNlbGxWaWV3TW9kZWxbXSwgcm93SW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICB5ZWFycy5mb3JFYWNoKCh5ZWFyOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIHllYXJJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNIb3ZlcmVkID0gaXNTYW1lWWVhcih5ZWFyLmRhdGUsIG9wdGlvbnMuaG92ZXJlZFllYXIpO1xyXG4gICAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxyXG4gICAgICAgICAgb3B0aW9ucy5pc0Rpc2FibGVkIHx8XHJcbiAgICAgICAgICBpc1llYXJEaXNhYmxlZCh5ZWFyLmRhdGUsIG9wdGlvbnMubWluRGF0ZSwgb3B0aW9ucy5tYXhEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3TW9udGggPSBPYmplY3QuYXNzaWduKC8qe30sKi8geWVhciwgeyBpc0hvdmVyZWQsIGlzRGlzYWJsZWQgfSk7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgeWVhci5pc0hvdmVyZWQgIT09IG5ld01vbnRoLmlzSG92ZXJlZCB8fFxyXG4gICAgICAgICAgeWVhci5pc0Rpc2FibGVkICE9PSBuZXdNb250aC5pc0Rpc2FibGVkXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB5ZWFyc0NhbGVuZGFyLnllYXJzW3Jvd0luZGV4XVt5ZWFySW5kZXhdID0gbmV3TW9udGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcclxuICB5ZWFyc0NhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPVxyXG4gICAgb3B0aW9ucy55ZWFySW5kZXggPiAwICYmIG9wdGlvbnMueWVhckluZGV4ICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XHJcbiAgeWVhcnNDYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA9XHJcbiAgICBvcHRpb25zLnllYXJJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxyXG4gICAgb3B0aW9ucy55ZWFySW5kZXggKyAxICE9PSBvcHRpb25zLmRpc3BsYXlNb250aHM7XHJcblxyXG4gIHllYXJzQ2FsZW5kYXIuZGlzYWJsZUxlZnRBcnJvdyA9IGlzWWVhckRpc2FibGVkKFxyXG4gICAgc2hpZnREYXRlKHllYXJzQ2FsZW5kYXIueWVhcnNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAtMSB9KSxcclxuICAgIG9wdGlvbnMubWluRGF0ZSxcclxuICAgIG9wdGlvbnMubWF4RGF0ZVxyXG4gICk7XHJcbiAgY29uc3QgaSA9IHllYXJzQ2FsZW5kYXIueWVhcnMubGVuZ3RoIC0gMTtcclxuICBjb25zdCBqID0geWVhcnNDYWxlbmRhci55ZWFyc1tpXS5sZW5ndGggLSAxO1xyXG4gIHllYXJzQ2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcclxuICAgIHNoaWZ0RGF0ZSh5ZWFyc0NhbGVuZGFyLnllYXJzW2ldW2pdLmRhdGUsIHsgeWVhcjogMSB9KSxcclxuICAgIG9wdGlvbnMubWluRGF0ZSxcclxuICAgIG9wdGlvbnMubWF4RGF0ZVxyXG4gICk7XHJcblxyXG4gIHJldHVybiB5ZWFyc0NhbGVuZGFyO1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnRcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IGNhbGNEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvY2FsYy1kYXlzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgZm9ybWF0RGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC1kYXlzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgZmxhZ0RheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLWRheXMtY2FsZW5kYXInO1xyXG5pbXBvcnQge1xyXG4gIHNldEZ1bGxEYXRlLFxyXG4gIHNoaWZ0RGF0ZSxcclxuICBpc0FycmF5LFxyXG4gIGlzRGF0ZVZhbGlkLFxyXG4gIHN0YXJ0T2YsXHJcbiAgZ2V0TG9jYWxlLFxyXG4gIGlzQWZ0ZXIsXHJcbiAgaXNCZWZvcmVcclxufSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBjYW5Td2l0Y2hNb2RlIH0gZnJvbSAnLi4vZW5naW5lL3ZpZXctbW9kZSc7XHJcbmltcG9ydCB7IGZvcm1hdE1vbnRoc0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC1tb250aHMtY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBmbGFnTW9udGhzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBmb3JtYXRZZWFyc0NhbGVuZGFyLCB5ZWFyc1BlckNhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2Zvcm1hdC15ZWFycy1jYWxlbmRhcic7XHJcbmltcG9ydCB7IGZsYWdZZWFyc0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2ZsYWcteWVhcnMtY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBCc1ZpZXdOYXZpZ2F0aW9uRXZlbnQsIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLCBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5cclxuLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGJzRGF0ZXBpY2tlclJlZHVjZXIoc3RhdGUgPSBpbml0aWFsRGF0ZXBpY2tlclN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IEFjdGlvbik6IEJzRGF0ZXBpY2tlclN0YXRlIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0FMQ1VMQVRFOiB7XHJcbiAgICAgIHJldHVybiBjYWxjdWxhdGVSZWR1Y2VyKHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuRk9STUFUOiB7XHJcbiAgICAgIHJldHVybiBmb3JtYXRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5GTEFHOiB7XHJcbiAgICAgIHJldHVybiBmbGFnUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VUOiB7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBzaGlmdERhdGUoc3RhcnRPZihzdGF0ZS52aWV3LmRhdGUsICdtb250aCcpLCBhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgICAgIHZpZXc6IHtcclxuICAgICAgICAgIG1vZGU6IHN0YXRlLnZpZXcubW9kZSxcclxuICAgICAgICAgIGRhdGVcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfVE86IHtcclxuICAgICAgY29uc3QgcGF5bG9hZDogQnNWaWV3TmF2aWdhdGlvbkV2ZW50ID0gYWN0aW9uLnBheWxvYWQ7XHJcblxyXG4gICAgICBjb25zdCBkYXRlID0gc2V0RnVsbERhdGUoc3RhdGUudmlldy5kYXRlLCBwYXlsb2FkLnVuaXQpO1xyXG4gICAgICBsZXQgbmV3U3RhdGU7XHJcbiAgICAgIGxldCBtb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcclxuICAgICAgaWYgKGNhblN3aXRjaE1vZGUocGF5bG9hZC52aWV3TW9kZSwgc3RhdGUubWluTW9kZSkpIHtcclxuICAgICAgICBtb2RlID0gcGF5bG9hZC52aWV3TW9kZTtcclxuICAgICAgICBuZXdTdGF0ZSA9IHsgdmlldzogeyBkYXRlLCBtb2RlIH0gfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xyXG4gICAgICAgIG5ld1N0YXRlID0geyBzZWxlY3RlZERhdGU6IGRhdGUsIHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREU6IHtcclxuICAgICAgaWYgKCFjYW5Td2l0Y2hNb2RlKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5taW5Nb2RlKSkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRlID0gc3RhdGUudmlldy5kYXRlO1xyXG4gICAgICBjb25zdCBtb2RlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0geyB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSOiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBob3ZlcmVkRGF0ZTogYWN0aW9uLnBheWxvYWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVDoge1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICBzZWxlY3RlZERhdGU6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIHZpZXc6IHN0YXRlLnZpZXdcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS52aWV3Lm1vZGU7XHJcbiAgICAgIGNvbnN0IF9kYXRlID0gYWN0aW9uLnBheWxvYWQgfHwgc3RhdGUudmlldy5kYXRlO1xyXG4gICAgICBjb25zdCBkYXRlID0gZ2V0Vmlld0RhdGUoX2RhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xyXG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX09QVElPTlM6IHtcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgLy8gcHJlc2VydmUgdmlldyBtb2RlXHJcbiAgICAgIGNvbnN0IG1vZGUgPSBuZXdTdGF0ZS5taW5Nb2RlID8gbmV3U3RhdGUubWluTW9kZSA6IHN0YXRlLnZpZXcubW9kZTtcclxuICAgICAgY29uc3QgX3ZpZXdEYXRlID0gaXNEYXRlVmFsaWQobmV3U3RhdGUudmFsdWUpICYmIG5ld1N0YXRlLnZhbHVlXHJcbiAgICAgICAgfHwgaXNBcnJheShuZXdTdGF0ZS52YWx1ZSkgJiYgaXNEYXRlVmFsaWQobmV3U3RhdGUudmFsdWVbMF0pICYmIG5ld1N0YXRlLnZhbHVlWzBdXHJcbiAgICAgICAgfHwgc3RhdGUudmlldy5kYXRlO1xyXG4gICAgICBjb25zdCBkYXRlID0gZ2V0Vmlld0RhdGUoX3ZpZXdEYXRlLCBuZXdTdGF0ZS5taW5EYXRlLCBuZXdTdGF0ZS5tYXhEYXRlKTtcclxuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xyXG4gICAgICAvLyB1cGRhdGUgc2VsZWN0ZWQgdmFsdWVcclxuICAgICAgaWYgKG5ld1N0YXRlLnZhbHVlKSB7XHJcbiAgICAgICAgLy8gaWYgbmV3IHZhbHVlIGlzIGFycmF5IHdlIHdvcmsgd2l0aCBkYXRlIHJhbmdlXHJcbiAgICAgICAgaWYgKGlzQXJyYXkobmV3U3RhdGUudmFsdWUpKSB7XHJcbiAgICAgICAgICBuZXdTdGF0ZS5zZWxlY3RlZFJhbmdlID0gbmV3U3RhdGUudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiBuZXcgdmFsdWUgaXMgYSBkYXRlIC0+IGRhdGVwaWNrZXJcclxuICAgICAgICBpZiAobmV3U3RhdGUudmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgICBuZXdTdGF0ZS5zZWxlY3RlZERhdGUgPSBuZXdTdGF0ZS52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHByb3ZpZGVkIHZhbHVlIGlzIG5vdCBzdXBwb3J0ZWQgOilcclxuICAgICAgICAvLyBuZWVkIHRvIHJlcG9ydCBpdCBzb21laG93XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRhdGUgcmFuZ2UgcGlja2VyXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUX1JBTkdFOiB7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xyXG4gICAgICAgIHNlbGVjdGVkUmFuZ2U6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgIHZpZXc6IHN0YXRlLnZpZXdcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGNvbnN0IG1vZGUgPSBzdGF0ZS52aWV3Lm1vZGU7XHJcbiAgICAgIGNvbnN0IF9kYXRlID0gYWN0aW9uLnBheWxvYWQgJiYgYWN0aW9uLnBheWxvYWRbMF0gfHwgc3RhdGUudmlldy5kYXRlO1xyXG4gICAgICBjb25zdCBkYXRlID0gZ2V0Vmlld0RhdGUoX2RhdGUsIHN0YXRlLm1pbkRhdGUsIHN0YXRlLm1heERhdGUpO1xyXG4gICAgICBuZXdTdGF0ZS52aWV3ID0geyBtb2RlLCBkYXRlIH07XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01JTl9EQVRFOiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIG1pbkRhdGU6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NQVhfREFURToge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBtYXhEYXRlOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfSVNfRElTQUJMRUQ6IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgaXNEaXNhYmxlZDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlUmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUpOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XHJcbiAgLy8gaG93IG1hbnkgY2FsZW5kYXJzXHJcbiAgY29uc3QgZGlzcGxheU1vbnRocyA9IHN0YXRlLmRpc3BsYXlNb250aHM7XHJcbiAgLy8gdXNlIHNlbGVjdGVkIGRhdGUgb24gaW5pdGlhbCByZW5kZXJpbmcgaWYgc2V0XHJcbiAgbGV0IHZpZXdEYXRlID0gc3RhdGUudmlldy5kYXRlO1xyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnZGF5Jykge1xyXG4gICAgc3RhdGUubW9udGhWaWV3T3B0aW9ucy5maXJzdERheU9mV2VlayA9IGdldExvY2FsZShzdGF0ZS5sb2NhbGUpLmZpcnN0RGF5T2ZXZWVrKCk7XHJcbiAgICBjb25zdCBtb250aHNNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcclxuICAgIGZvciAobGV0IG1vbnRoSW5kZXggPSAwOyBtb250aEluZGV4IDwgZGlzcGxheU1vbnRoczsgbW9udGhJbmRleCsrKSB7XHJcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcclxuICAgICAgbW9udGhzTW9kZWxbbW9udGhJbmRleF0gPSBjYWxjRGF5c0NhbGVuZGFyKFxyXG4gICAgICAgIHZpZXdEYXRlLFxyXG4gICAgICAgIHN0YXRlLm1vbnRoVmlld09wdGlvbnNcclxuICAgICAgKTtcclxuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgbW9udGg6IDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1vbnRoc01vZGVsIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgY29uc3QgbW9udGhzQ2FsZW5kYXIgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XHJcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xyXG4gICAgICBjYWxlbmRhckluZGV4KytcclxuICAgICkge1xyXG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXHJcbiAgICAgIG1vbnRoc0NhbGVuZGFyW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXHJcbiAgICAgICAgdmlld0RhdGUsXHJcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcclxuICAgICAgKTtcclxuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzQ2FsZW5kYXIgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcclxuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcclxuXHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XHJcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xyXG4gICAgICBjYWxlbmRhckluZGV4KytcclxuICAgICkge1xyXG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXHJcbiAgICAgIHllYXJzQ2FsZW5kYXJNb2RlbFtjYWxlbmRhckluZGV4XSA9IGZvcm1hdFllYXJzQ2FsZW5kYXIoXHJcbiAgICAgICAgdmlld0RhdGUsXHJcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcclxuICAgICAgKTtcclxuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogeWVhcnNQZXJDYWxlbmRhciB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhck1vZGVsIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb246IEFjdGlvbik6IEJzRGF0ZXBpY2tlclN0YXRlIHtcclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnZGF5Jykge1xyXG4gICAgY29uc3QgZm9ybWF0dGVkTW9udGhzID0gc3RhdGUubW9udGhzTW9kZWwubWFwKChtb250aCwgbW9udGhJbmRleCkgPT5cclxuICAgICAgZm9ybWF0RGF5c0NhbGVuZGFyKG1vbnRoLCBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKSwgbW9udGhJbmRleClcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGZvcm1hdHRlZE1vbnRocyB9KTtcclxuICB9XHJcblxyXG4gIC8vIGhvdyBtYW55IGNhbGVuZGFyc1xyXG4gIGNvbnN0IGRpc3BsYXlNb250aHMgPSBzdGF0ZS5kaXNwbGF5TW9udGhzO1xyXG4gIC8vIGNoZWNrIGluaXRpYWwgcmVuZGVyaW5nXHJcbiAgLy8gdXNlIHNlbGVjdGVkIGRhdGUgb24gaW5pdGlhbCByZW5kZXJpbmcgaWYgc2V0XHJcbiAgbGV0IHZpZXdEYXRlID0gc3RhdGUudmlldy5kYXRlO1xyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICBjb25zdCBtb250aHNDYWxlbmRhciA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcclxuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XHJcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcclxuICAgICAgbW9udGhzQ2FsZW5kYXJbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRNb250aHNDYWxlbmRhcihcclxuICAgICAgICB2aWV3RGF0ZSxcclxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxyXG4gICAgICApO1xyXG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNDYWxlbmRhciB9KTtcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICd5ZWFyJykge1xyXG4gICAgY29uc3QgeWVhcnNDYWxlbmRhck1vZGVsID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xyXG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcclxuICAgICAgY2FsZW5kYXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxyXG4gICAgICB5ZWFyc0NhbGVuZGFyTW9kZWxbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRZZWFyc0NhbGVuZGFyKFxyXG4gICAgICAgIHZpZXdEYXRlLFxyXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXHJcbiAgICAgICk7XHJcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDE2IH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB5ZWFyc0NhbGVuZGFyTW9kZWwgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYWdSZWR1Y2VyKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcclxuICAgIGNvbnN0IGZsYWdnZWRNb250aHMgPSBzdGF0ZS5mb3JtYXR0ZWRNb250aHMubWFwKFxyXG4gICAgICAoZm9ybWF0dGVkTW9udGgsIG1vbnRoSW5kZXgpID0+XHJcbiAgICAgICAgZmxhZ0RheXNDYWxlbmRhcihmb3JtYXR0ZWRNb250aCwge1xyXG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcclxuICAgICAgICAgIG1pbkRhdGU6IHN0YXRlLm1pbkRhdGUsXHJcbiAgICAgICAgICBtYXhEYXRlOiBzdGF0ZS5tYXhEYXRlLFxyXG4gICAgICAgICAgZGF5c0Rpc2FibGVkOiBzdGF0ZS5kYXlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBkYXRlc0Rpc2FibGVkOiBzdGF0ZS5kYXRlc0Rpc2FibGVkLFxyXG4gICAgICAgICAgaG92ZXJlZERhdGU6IHN0YXRlLmhvdmVyZWREYXRlLFxyXG4gICAgICAgICAgc2VsZWN0ZWREYXRlOiBzdGF0ZS5zZWxlY3RlZERhdGUsXHJcbiAgICAgICAgICBzZWxlY3RlZFJhbmdlOiBzdGF0ZS5zZWxlY3RlZFJhbmdlLFxyXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcclxuICAgICAgICAgIG1vbnRoSW5kZXhcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZmxhZ2dlZE1vbnRocyB9KTtcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgIGNvbnN0IGZsYWdnZWRNb250aHNDYWxlbmRhciA9IHN0YXRlLm1vbnRoc0NhbGVuZGFyLm1hcChcclxuICAgICAgKGZvcm1hdHRlZE1vbnRoLCBtb250aEluZGV4KSA9PlxyXG4gICAgICAgIGZsYWdNb250aHNDYWxlbmRhcihmb3JtYXR0ZWRNb250aCwge1xyXG4gICAgICAgICAgaXNEaXNhYmxlZDogc3RhdGUuaXNEaXNhYmxlZCxcclxuICAgICAgICAgIG1pbkRhdGU6IHN0YXRlLm1pbkRhdGUsXHJcbiAgICAgICAgICBtYXhEYXRlOiBzdGF0ZS5tYXhEYXRlLFxyXG4gICAgICAgICAgaG92ZXJlZE1vbnRoOiBzdGF0ZS5ob3ZlcmVkTW9udGgsXHJcbiAgICAgICAgICBkaXNwbGF5TW9udGhzOiBzdGF0ZS5kaXNwbGF5TW9udGhzLFxyXG4gICAgICAgICAgbW9udGhJbmRleFxyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcclxuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJGbGFnZ2VkID0gc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsLm1hcChcclxuICAgICAgKGZvcm1hdHRlZE1vbnRoLCB5ZWFySW5kZXgpID0+XHJcbiAgICAgICAgZmxhZ1llYXJzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcclxuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxyXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcclxuICAgICAgICAgIGhvdmVyZWRZZWFyOiBzdGF0ZS5ob3ZlcmVkWWVhcixcclxuICAgICAgICAgIGRpc3BsYXlNb250aHM6IHN0YXRlLmRpc3BsYXlNb250aHMsXHJcbiAgICAgICAgICB5ZWFySW5kZXhcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhckZsYWdnZWQgfSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZvcm1hdE9wdGlvbnMoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlKTogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMge1xyXG4gIHJldHVybiB7XHJcbiAgICBsb2NhbGU6IHN0YXRlLmxvY2FsZSxcclxuXHJcbiAgICBtb250aFRpdGxlOiBzdGF0ZS5tb250aFRpdGxlLFxyXG4gICAgeWVhclRpdGxlOiBzdGF0ZS55ZWFyVGl0bGUsXHJcblxyXG4gICAgZGF5TGFiZWw6IHN0YXRlLmRheUxhYmVsLFxyXG4gICAgbW9udGhMYWJlbDogc3RhdGUubW9udGhMYWJlbCxcclxuICAgIHllYXJMYWJlbDogc3RhdGUueWVhckxhYmVsLFxyXG5cclxuICAgIHdlZWtOdW1iZXJzOiBzdGF0ZS53ZWVrTnVtYmVyc1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpZiB2aWV3IGRhdGUgaXMgcHJvdmlkZWQgKGJzVmFsdWV8bmdNb2RlbCkgaXQgc2hvdWxkIGJlIHNob3duXHJcbiAqIGlmIHZpZXcgZGF0ZSBpcyBub3QgcHJvdmlkZXI6XHJcbiAqIGlmIG1pbkRhdGU+Y3VycmVudERhdGUgKGRlZmF1bHQgdmlldyB2YWx1ZSksIHNob3cgbWluRGF0ZVxyXG4gKiBpZiBtYXhEYXRlPGN1cnJlbnREYXRlKGRlZmF1bHQgdmlldyB2YWx1ZSkgc2hvdyBtYXhEYXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRWaWV3RGF0ZSh2aWV3RGF0ZTogRGF0ZSB8IERhdGVbXSwgbWluRGF0ZTogRGF0ZSwgbWF4RGF0ZTogRGF0ZSkge1xyXG4gIGNvbnN0IF9kYXRlID0gQXJyYXkuaXNBcnJheSh2aWV3RGF0ZSkgPyB2aWV3RGF0ZVswXSA6IHZpZXdEYXRlO1xyXG5cclxuICBpZiAobWluRGF0ZSAmJiBpc0FmdGVyKG1pbkRhdGUsIF9kYXRlLCAnZGF5JykpIHtcclxuICAgIHJldHVybiBtaW5EYXRlO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1heERhdGUgJiYgaXNCZWZvcmUobWF4RGF0ZSwgX2RhdGUsICdkYXknKSkge1xyXG4gICAgcmV0dXJuIG1heERhdGU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX2RhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNaW5pU3RvcmUsIEFjdGlvbiwgTWluaVN0YXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdGF0ZSwgaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdGF0ZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBic0RhdGVwaWNrZXJSZWR1Y2VyIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnJlZHVjZXInO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8QnNEYXRlcGlja2VyU3RhdGU+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IF9kaXNwYXRjaGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBY3Rpb24+KHtcclxuICAgICAgdHlwZTogJ1tkYXRlcGlja2VyXSBkaXNwYXRjaGVyIGluaXQnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxCc0RhdGVwaWNrZXJTdGF0ZT4oXHJcbiAgICAgIGluaXRpYWxEYXRlcGlja2VyU3RhdGUsXHJcbiAgICAgIF9kaXNwYXRjaGVyLFxyXG4gICAgICBic0RhdGVwaWNrZXJSZWR1Y2VyXHJcbiAgICApO1xyXG4gICAgc3VwZXIoX2Rpc3BhdGNoZXIsIGJzRGF0ZXBpY2tlclJlZHVjZXIsIHN0YXRlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IERheVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1jb250YWluZXInLFxyXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXHJcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgZGlzcGxheTogYmxvY2s7JyxcclxuICAgIHJvbGU6ICdkaWFsb2cnLFxyXG4gICAgJ2FyaWEtbGFiZWwnOiAnY2FsZW5kYXInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBzZXQgdmFsdWUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0VmFsdWUodmFsdWUpO1xyXG4gIH1cclxuICB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG5cclxuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcclxuICAgIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzLFxyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25TZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcclxuICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgZmxpcDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmFkYXB0aXZlUG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA9IHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aDtcclxuICAgIHRoaXMuY29udGFpbmVyQ2xhc3MgPSB0aGlzLl9jb25maWcuY29udGFpbmVyQ2xhc3M7XHJcbiAgICB0aGlzLl9lZmZlY3RzXHJcbiAgICAgIC5pbml0KHRoaXMuX3N0b3JlKVxyXG4gICAgICAvLyBpbnRpYWwgc3RhdGUgb3B0aW9uc1xyXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXHJcbiAgICAgIC8vIGRhdGEgYmluZGluZyB2aWV3IC0tPiBtb2RlbFxyXG4gICAgICAuc2V0QmluZGluZ3ModGhpcylcclxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgIC5zZXRFdmVudEhhbmRsZXJzKHRoaXMpXHJcbiAgICAgIC5yZWdpc3RlckRhdGVwaWNrZXJTaWRlRWZmZWN0cygpO1xyXG5cclxuICAgIC8vIHRvZG86IG1vdmUgaXQgc29tZXdoZXJlIGVsc2VcclxuICAgIC8vIG9uIHNlbGVjdGVkIGRhdGUgY2hhbmdlXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgICAuc2VsZWN0KChzdGF0ZTogYW55KSA9PiBzdGF0ZS5zZWxlY3RlZERhdGUpXHJcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRlOiBhbnkpID0+IHRoaXMudmFsdWVDaGFuZ2UuZW1pdChkYXRlKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID8gZGF5LmlzRGlzYWJsZWQgOiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCk7XHJcblxyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0KGRheS5kYXRlKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9lZmZlY3RzLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnRSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcywgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXIsIENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyXScsXHJcbiAgZXhwb3J0QXM6ICdic0RhdGVwaWNrZXInXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSBkYXRlcGlja2VyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxyXG4gICAqIGV2ZW50IG5hbWVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHRyaWdnZXJzID0gJ2NsaWNrJztcclxuICAvKipcclxuICAgKiBDbG9zZSBkYXRlcGlja2VyIG9uIG91dHNpZGUgY2xpY2tcclxuICAgKi9cclxuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXBpY2tlciBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXHJcbiAgICogQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyID0gJ2JvZHknO1xyXG5cclxuICBASW5wdXQoKSBvdXRzaWRlRXNjID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZGF0ZXBpY2tlciBpcyBjdXJyZW50bHkgYmVpbmcgc2hvd25cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpc09wZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzT3Blbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIHNob3duXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcGlja2VyIGlzIGhpZGRlblxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICBfYnNWYWx1ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBJbml0aWFsIHZhbHVlIG9mIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uZmlnIG9iamVjdCBmb3IgZGF0ZXBpY2tlclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlckNvbmZpZz47XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcclxuICAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogTWluaW11bSB2aWV3IG1vZGUgOiBkYXksIG1vbnRoLCBvciB5ZWFyXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWluTW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgQ2VydGFpbiBkYXlzIGluIHRoZSB3ZWVrXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF5c0Rpc2FibGVkOiBudW1iZXJbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRhdGVzRGlzYWJsZWQ6IERhdGVbXTtcclxuICAvKipcclxuICAgKiBFbWl0cyB3aGVuIGRhdGVwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XHJcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlclJlZjogQ29tcG9uZW50UmVmPEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXHJcbiAgICAgICAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XHJcbiAgICAvLyB0b2RvOiBhc3NpZ24gb25seSBzdWJzZXQgb2YgZmllbGRzXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvbmZpZyk7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICBfZWxlbWVudFJlZixcclxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgIF9yZW5kZXJlclxyXG4gICAgKTtcclxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcclxuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kYXRlcGlja2VyLm9uSGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyLmxpc3Rlbih7XHJcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXHJcbiAgICAgIG91dHNpZGVFc2M6IHRoaXMub3V0c2lkZUVzYyxcclxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXHJcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm1heERhdGUpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmRheXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRheXNEaXNhYmxlZCA9IHRoaXMuZGF5c0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlc0Rpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRDb25maWcoKTtcclxuXHJcbiAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcclxuICAgICAgLmF0dGFjaChCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcclxuICAgICAgLnBvc2l0aW9uKHthdHRhY2htZW50OiB0aGlzLnBsYWNlbWVudH0pXHJcbiAgICAgIC5zaG93KHtwbGFjZW1lbnQ6IHRoaXMucGxhY2VtZW50fSk7XHJcblxyXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gZXh0ZXJuYWwgc291cmNlIChtb2RlbCAtPiB2aWV3KVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLmJzVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcclxuICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmdcclxuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXBpY2tlclxyXG4gICAqL1xyXG4gIHNldENvbmZpZygpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX2NvbmZpZywgdGhpcy5ic0NvbmZpZywge1xyXG4gICAgICB2YWx1ZTogdGhpcy5fYnNWYWx1ZSxcclxuICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxyXG4gICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXHJcbiAgICAgIG1heERhdGU6IHRoaXMubWF4RGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWF4RGF0ZSxcclxuICAgICAgZGF5c0Rpc2FibGVkOiB0aGlzLmRheXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF5c0Rpc2FibGVkLFxyXG4gICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWQsXHJcbiAgICAgIG1pbk1vZGU6IHRoaXMubWluTW9kZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluTW9kZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnIGV4dGVuZHMgQnNEYXRlcGlja2VyQ29uZmlnIHsgfVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lcicsXHJcbiAgcHJvdmlkZXJzOiBbQnNEYXRlcGlja2VyU3RvcmUsIEJzRGF0ZXBpY2tlckVmZmVjdHNdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcclxuICAgIHN0eWxlOiAnZGlzcGxheTogaW5saW5lLWJsb2NrOydcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcclxuICAgIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXHJcbiAgICBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcclxuICAgIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzLFxyXG4gICAgX3Bvc2l0aW9uaW5nU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihfY29uZmlnLCBfc3RvcmUsIF9hY3Rpb25zLCBfZWZmZWN0cywgX3Bvc2l0aW9uaW5nU2VydmljZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWlubGluZScsXHJcbiAgZXhwb3J0QXM6ICdic0RhdGVwaWNrZXJJbmxpbmUnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICBfYnNWYWx1ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBJbml0aWFsIHZhbHVlIG9mIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uZmlnIG9iamVjdCBmb3IgZGF0ZXBpY2tlclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGJzQ29uZmlnOiBQYXJ0aWFsPEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZz47XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXBpY2tlciBpcyBlbmFibGVkIG9yIG5vdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cclxuICAgKi9cclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgd2hlbiBkYXRlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NvbmZpZzogQnNEYXRlcGlja2VySW5saW5lQ29uZmlnLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XHJcbiAgICAvLyB0b2RvOiBhc3NpZ24gb25seSBzdWJzZXQgb2YgZmllbGRzXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuX2NvbmZpZyk7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICBfZWxlbWVudFJlZixcclxuICAgICAgX3ZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgIF9yZW5kZXJlclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDb25maWcoKTtcclxuXHJcbiAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcclxuICAgICAgLmF0dGFjaChCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgIC50byh0aGlzLl9lbGVtZW50UmVmKVxyXG4gICAgICAuc2hvdygpO1xyXG5cclxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlcGlja2VyUmVmIHx8ICF0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5tYXhEYXRlKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5kYXRlc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBzZXRDb25maWcoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHRoaXMuYnNDb25maWcsIHtcclxuICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXHJcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcclxuICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxyXG4gICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXHJcbiAgICAgIGRhdGVzRGlzYWJsZWQ6IHRoaXMuZGF0ZXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNEaXNhYmxlZFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiBhbnkge1xyXG4gICAgdGhpcy5fZGF0ZXBpY2tlci5kaXNwb3NlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIFByb3ZpZGVyLFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBYnN0cmFjdENvbnRyb2wsXHJcbiAgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgTkdfVkFMSURBVE9SUyxcclxuICBOR19WQUxVRV9BQ0NFU1NPUixcclxuICBWYWxpZGF0aW9uRXJyb3JzLFxyXG4gIFZhbGlkYXRvclxyXG59IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7XHJcbiAgcGFyc2VEYXRlLFxyXG4gIGZvcm1hdERhdGUsXHJcbiAgZ2V0TG9jYWxlLFxyXG4gIGlzQWZ0ZXIsXHJcbiAgaXNCZWZvcmUsXHJcbiAgaXNEYXRlLFxyXG4gIGlzRGF0ZVZhbGlkXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEJTX0RBVEVQSUNLRVJfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBCU19EQVRFUElDS0VSX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBpbnB1dFtic0RhdGVwaWNrZXJdYCxcclxuICBob3N0OiB7XHJcbiAgICAnKGNoYW5nZSknOiAnb25DaGFuZ2UoJGV2ZW50KScsXHJcbiAgICAnKGtleXVwLmVzYyknOiAnaGlkZSgpJyxcclxuICAgICcoYmx1ciknOiAnb25CbHVyKCknXHJcbiAgfSxcclxuICBwcm92aWRlcnM6IFtCU19EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUElDS0VSX1ZBTElEQVRPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgVmFsaWRhdG9yIHtcclxuICBwcml2YXRlIF9vbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBwcml2YXRlIF9vblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtdmFyaWFibGUgKi9cclxuICBwcml2YXRlIF92YWxpZGF0b3JDaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBfcGlja2VyOiBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcclxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcclxuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIGlmICh0aGlzLl92YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcclxuICAgICAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBsb2NhbGUgY2hhbmdlXHJcbiAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHRoaXMuX3ZhbHVlKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3NldElucHV0VmFsdWUodmFsdWU6IERhdGUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluaXRpYWxEYXRlID0gIXZhbHVlID8gJydcclxuICAgICAgOiBmb3JtYXREYXRlKHZhbHVlLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSk7XHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgaW5pdGlhbERhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICB0aGlzLndyaXRlVmFsdWUoKGV2ZW50LnRhcmdldCBhcyBhbnkpLnZhbHVlKTtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMuX3ZhbHVlKTtcclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGUoYzogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwge1xyXG4gICAgY29uc3QgX3ZhbHVlOiBEYXRlIHwgc3RyaW5nID0gYy52YWx1ZTtcclxuXHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHByZWZlci1zd2l0Y2ggKi9cclxuICAgIGlmIChfdmFsdWUgPT09IG51bGwgfHwgX3ZhbHVlID09PSB1bmRlZmluZWQgfHwgX3ZhbHVlID09PSAnJykge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNEYXRlKF92YWx1ZSkpIHtcclxuICAgICAgY29uc3QgX2lzRGF0ZVZhbGlkID0gaXNEYXRlVmFsaWQoX3ZhbHVlKTtcclxuICAgICAgaWYgKCFfaXNEYXRlVmFsaWQpIHtcclxuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlIH0gfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWluRGF0ZSAmJiBpc0JlZm9yZShfdmFsdWUsIHRoaXMuX3BpY2tlci5taW5EYXRlLCAnZGF0ZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IG1pbkRhdGU6IHRoaXMuX3BpY2tlci5taW5EYXRlIH0gfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX3BpY2tlciAmJiB0aGlzLl9waWNrZXIubWF4RGF0ZSAmJiBpc0FmdGVyKF92YWx1ZSwgdGhpcy5fcGlja2VyLm1heERhdGUsICdkYXRlJykpIHtcclxuICAgICAgICByZXR1cm4geyBic0RhdGU6IHsgbWF4RGF0ZTogdGhpcy5fcGlja2VyLm1heERhdGUgfSB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWxpZGF0b3JDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBzdHJpbmcpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgX2xvY2FsZUtleSA9IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZTtcclxuICAgICAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShfbG9jYWxlS2V5KTtcclxuICAgICAgaWYgKCFfbG9jYWxlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYExvY2FsZSBcIiR7X2xvY2FsZUtleX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gcGFyc2VEYXRlKHZhbHVlLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5fcGlja2VyLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZWxlY3RSb290RWxlbWVudCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KS5ibHVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbmZpZyB7XHJcbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcclxuICBkaXNwbGF5TW9udGhzID0gMjtcclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcicsXHJcbiAgcHJvdmlkZXJzOiBbQnNEYXRlcGlja2VyU3RvcmUsIEJzRGF0ZXBpY2tlckVmZmVjdHNdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcclxuICAgIHN0eWxlOiAncG9zaXRpb246IGFic29sdXRlOyBkaXNwbGF5OiBibG9jazsnLFxyXG4gICAgcm9sZTogJ2RpYWxvZycsXHJcbiAgICAnYXJpYS1sYWJlbCc6ICdjYWxlbmRhcidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlW10pIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0UmFuZ2VWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVtdPigpO1xyXG5cclxuICBfcmFuZ2VTdGFjazogRGF0ZVtdID0gW107XHJcbiAgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcclxuICAgIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSxcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fZWZmZWN0cyA9IF9lZmZlY3RzO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lckNsYXNzID0gdGhpcy5fY29uZmlnLmNvbnRhaW5lckNsYXNzO1xyXG4gICAgdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID0gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoO1xyXG4gICAgdGhpcy5fZWZmZWN0c1xyXG4gICAgICAuaW5pdCh0aGlzLl9zdG9yZSlcclxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcclxuICAgICAgLy8gdG9kbzogZml4IHRoaXMsIHNwbGl0IGNvbmZpZ3NcclxuICAgICAgLnNldE9wdGlvbnModGhpcy5fY29uZmlnKVxyXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcclxuICAgICAgLnNldEJpbmRpbmdzKHRoaXMpXHJcbiAgICAgIC8vIHNldCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxyXG4gICAgICAucmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTtcclxuXHJcbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXHJcbiAgICAvLyBvbiBzZWxlY3RlZCBkYXRlIGNoYW5nZVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWRSYW5nZSlcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGUgPT4gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPyBkYXkuaXNEaXNhYmxlZCA6IChkYXkuaXNPdGhlck1vbnRoIHx8IGRheS5pc0Rpc2FibGVkKTtcclxuXHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgb25seSBvbmUgZGF0ZSBpcyBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAvLyBhbmQgdXNlciBjbGlja3Mgb24gcHJldmlvdXMgZGF0ZVxyXG4gICAgLy8gc3RhcnQgc2VsZWN0aW9uIGZyb20gbmV3IGRhdGVcclxuICAgIC8vIGJ1dCBpZiBuZXcgZGF0ZSBpcyBhZnRlciBpbml0aWFsIG9uZVxyXG4gICAgLy8gdGhhbiBmaW5pc2ggc2VsZWN0aW9uXHJcbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9XHJcbiAgICAgICAgZGF5LmRhdGUgPj0gdGhpcy5fcmFuZ2VTdGFja1swXVxyXG4gICAgICAgICAgPyBbdGhpcy5fcmFuZ2VTdGFja1swXSwgZGF5LmRhdGVdXHJcbiAgICAgICAgICA6IFtkYXkuZGF0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3JhbmdlU3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBbZGF5LmRhdGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0UmFuZ2UodGhpcy5fcmFuZ2VTdGFjaykpO1xyXG5cclxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLl9yYW5nZVN0YWNrID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9lZmZlY3RzLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBDb21wb25lbnRMb2FkZXIgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcmFuZ2VwaWNrZXJdJyxcclxuICBleHBvcnRBczogJ2JzRGF0ZXJhbmdlcGlja2VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmVcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIC8qKlxyXG4gICAqIFBsYWNlbWVudCBvZiBhIGRhdGVyYW5nZXBpY2tlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcclxuICAgKiBldmVudCBuYW1lcy5cclxuICAgKi9cclxuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgZGF0ZXJhbmdlcGlja2VyIG9uIG91dHNpZGUgY2xpY2tcclxuICAgKi9cclxuICBASW5wdXQoKSBvdXRzaWRlQ2xpY2sgPSB0cnVlO1xyXG4gIC8qKlxyXG4gICAqIEEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgZGF0ZXJhbmdlcGlja2VyIHNob3VsZCBiZSBhcHBlbmRlZFxyXG4gICAqIHRvLiBDdXJyZW50bHkgb25seSBzdXBwb3J0cyBcImJvZHlcIi5cclxuICAgKi9cclxuICBASW5wdXQoKSBjb250YWluZXIgPSAnYm9keSc7XHJcblxyXG4gIEBJbnB1dCgpIG91dHNpZGVFc2MgPSB0cnVlO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IHRoZSBkYXRlcmFuZ2VwaWNrZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIHNob3duXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIEBPdXRwdXQoKSBvblNob3duOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAvKipcclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBkYXRlcmFuZ2VwaWNrZXIgaXMgaGlkZGVuXHJcbiAgICovXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIEBPdXRwdXQoKSBvbkhpZGRlbjogRXZlbnRFbWl0dGVyPGFueT47XHJcblxyXG4gIF9ic1ZhbHVlOiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcmFuZ2VwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBic1ZhbHVlKHZhbHVlOiBEYXRlW10pIHtcclxuICAgIGlmICh0aGlzLl9ic1ZhbHVlID09PSB2YWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9ic1ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmJzVmFsdWVDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25maWcgb2JqZWN0IGZvciBkYXRlcmFuZ2VwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVyYW5nZXBpY2tlckNvbmZpZz47XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgZGF0ZXJhbmdlcGlja2VyJ3MgY29udGVudCBpcyBlbmFibGVkIG9yIG5vdFxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogTWluaW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBNYXhpbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cclxuICAgKi9cclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgd2hlbiBkYXRlcmFuZ2VwaWNrZXIgdmFsdWUgaGFzIGJlZW4gY2hhbmdlZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBic1ZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfY29uZmlnOiBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcclxuICAgICAgICAgICAgICBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgICAgICAgICAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnkpIHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXIgPSBjaXMuY3JlYXRlTG9hZGVyPEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgX2VsZW1lbnRSZWYsXHJcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBfcmVuZGVyZXJcclxuICAgICk7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9jb25maWcpO1xyXG4gICAgdGhpcy5vblNob3duID0gdGhpcy5fZGF0ZXBpY2tlci5vblNob3duO1xyXG4gICAgdGhpcy5vbkhpZGRlbiA9IHRoaXMuX2RhdGVwaWNrZXIub25IaWRkZW47XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXIubGlzdGVuKHtcclxuICAgICAgb3V0c2lkZUNsaWNrOiB0aGlzLm91dHNpZGVDbGljayxcclxuICAgICAgb3V0c2lkZUVzYzogdGhpcy5vdXRzaWRlRXNjLFxyXG4gICAgICB0cmlnZ2VyczogdGhpcy50cmlnZ2VycyxcclxuICAgICAgc2hvdzogKCkgPT4gdGhpcy5zaG93KClcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zZXRDb25maWcoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyBhbiBlbGVtZW50w6LCgMKZcyBkYXRlcGlja2VyLiBUaGlzIGlzIGNvbnNpZGVyZWQgYSDDosKAwpxtYW51YWzDosKAwp0gdHJpZ2dlcmluZyBvZlxyXG4gICAqIHRoZSBkYXRlcGlja2VyLlxyXG4gICAqL1xyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZXBpY2tlci5pc1Nob3duKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNldENvbmZpZygpO1xyXG5cclxuICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYgPSB0aGlzLl9kYXRlcGlja2VyXHJcbiAgICAgIC5wcm92aWRlKHtwcm92aWRlOiBCc0RhdGVwaWNrZXJDb25maWcsIHVzZVZhbHVlOiB0aGlzLl9jb25maWd9KVxyXG4gICAgICAuYXR0YWNoKEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXHJcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxyXG4gICAgICAuc2hvdyh7cGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudH0pO1xyXG5cclxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gaWYgZGF0ZSBjaGFuZ2VzIGZyb20gcGlja2VyICh2aWV3IC0+IG1vZGVsKVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlQ2hhbmdlXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoKHJhbmdlOiBEYXRlW10pID0+IHJhbmdlICYmIHJhbmdlWzBdICYmICEhcmFuZ2VbMV0pXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcclxuICAgICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcmFuZ2VwaWNrZXJcclxuICAgKi9cclxuICBzZXRDb25maWcoKSB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKFxyXG4gICAgICB7fSxcclxuICAgICAgdGhpcy5fY29uZmlnLFxyXG4gICAgICB0aGlzLmJzQ29uZmlnLFxyXG4gICAgICB7XHJcbiAgICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXHJcbiAgICAgICAgaXNEaXNhYmxlZDogdGhpcy5pc0Rpc2FibGVkLFxyXG4gICAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcclxuICAgICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXHJcbiAgICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXIuaGlkZSgpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmdcclxuICAgKiBvZiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc09wZW4pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgUHJvdmlkZXIsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IHBhcnNlRGF0ZSwgZm9ybWF0RGF0ZSwgZ2V0TG9jYWxlLCBpc0FmdGVyLCBpc0JlZm9yZSwgaXNBcnJheSwgaXNEYXRlVmFsaWQgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xyXG5cclxuY29uc3QgQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxJREFUT1JTLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogYGlucHV0W2JzRGF0ZXJhbmdlcGlja2VyXWAsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudCknLFxyXG4gICAgJyhrZXl1cC5lc2MpJzogJ2hpZGUoKScsXHJcbiAgICAnKGJsdXIpJzogJ29uQmx1cigpJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbQlNfREFURVJBTkdFUElDS0VSX1ZBTFVFX0FDQ0VTU09SLCBCU19EQVRFUkFOR0VQSUNLRVJfVkFMSURBVE9SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlICovXHJcbiAgcHJpdmF0ZSBfdmFsaWRhdG9yQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJpdmF0ZSBfcGlja2VyOiBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgICAgICAgICAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgIC8vIHVwZGF0ZSBpbnB1dCB2YWx1ZSBvbiBkYXRlcGlja2VyIHZhbHVlIHVwZGF0ZVxyXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gbG9jYWxlIGNoYW5nZVxyXG4gICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh0aGlzLl92YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXRJbnB1dFZhbHVlKGRhdGU6IERhdGVbXSk6IHZvaWQge1xyXG4gICAgbGV0IHJhbmdlID0gJyc7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBzdGFydDogc3RyaW5nID0gIWRhdGVbMF0gPyAnJ1xyXG4gICAgICAgIDogZm9ybWF0RGF0ZShkYXRlWzBdLFxyXG4gICAgICAgICAgdGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VJbnB1dEZvcm1hdCxcclxuICAgICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZVxyXG4gICAgICAgICk7XHJcbiAgICAgIGNvbnN0IGVuZDogc3RyaW5nID0gIWRhdGVbMV0gPyAnJ1xyXG4gICAgICAgIDogZm9ybWF0RGF0ZShcclxuICAgICAgICAgIGRhdGVbMV0sXHJcbiAgICAgICAgICB0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZUlucHV0Rm9ybWF0LFxyXG4gICAgICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlXHJcbiAgICAgICAgKTtcclxuICAgICAgcmFuZ2UgPSAoc3RhcnQgJiYgZW5kKSA/IHN0YXJ0ICsgdGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VTZXBhcmF0b3IgKyBlbmQgOiAnJztcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHJhbmdlKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgdGhpcy53cml0ZVZhbHVlKChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGNvbnN0IF92YWx1ZTogW0RhdGUsIERhdGVdID0gYy52YWx1ZTtcclxuXHJcbiAgICBpZiAoX3ZhbHVlID09PSBudWxsIHx8IF92YWx1ZSA9PT0gdW5kZWZpbmVkIHx8ICFpc0FycmF5KF92YWx1ZSkpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2lzRmlyc3REYXRlVmFsaWQgPSBpc0RhdGVWYWxpZChfdmFsdWVbMF0pO1xyXG4gICAgY29uc3QgX2lzU2Vjb25kRGF0ZVZhbGlkID0gaXNEYXRlVmFsaWQoX3ZhbHVlWzFdKTtcclxuXHJcbiAgICBpZiAoIV9pc0ZpcnN0RGF0ZVZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBpbnZhbGlkOiBfdmFsdWVbMF0gfSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghX2lzU2Vjb25kRGF0ZVZhbGlkKSB7XHJcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBpbnZhbGlkOiBfdmFsdWVbMV0gfSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1pbkRhdGUgJiYgaXNCZWZvcmUoX3ZhbHVlWzBdLCB0aGlzLl9waWNrZXIubWluRGF0ZSwgJ2RhdGUnKSkge1xyXG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgbWluRGF0ZTogdGhpcy5fcGlja2VyLm1pbkRhdGUgfSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1heERhdGUgJiYgaXNBZnRlcihfdmFsdWVbMV0sIHRoaXMuX3BpY2tlci5tYXhEYXRlLCAnZGF0ZScpKSB7XHJcbiAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtYXhEYXRlOiB0aGlzLl9waWNrZXIubWF4RGF0ZSB9IH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVmFsaWRhdG9yQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl92YWxpZGF0b3JDaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGVbXSB8IHN0cmluZykge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBfbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlU2VydmljZS5jdXJyZW50TG9jYWxlO1xyXG4gICAgICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKF9sb2NhbGVLZXkpO1xyXG4gICAgICBpZiAoIV9sb2NhbGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgICAgICBgTG9jYWxlIFwiJHtfbG9jYWxlS2V5fVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBfaW5wdXQ6IChzdHJpbmdbXSB8IERhdGVbXSkgPSBbXTtcclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBfaW5wdXQgPSB2YWx1ZS5zcGxpdCh0aGlzLl9waWNrZXIuX2NvbmZpZy5yYW5nZVNlcGFyYXRvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIF9pbnB1dCA9IHZhbHVlO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgdGhpcy5fdmFsdWUgPSAoX2lucHV0IGFzIHN0cmluZ1tdKVxyXG4gICAgICAgIC5tYXAoKF92YWw6IHN0cmluZyk6IERhdGUgPT5cclxuICAgICAgICAgIHBhcnNlRGF0ZShfdmFsLCB0aGlzLl9waWNrZXIuX2NvbmZpZy5kYXRlSW5wdXRGb3JtYXQsIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZSkpXHJcbiAgICAgICAgLm1hcCgoZGF0ZTogRGF0ZSkgPT4gKGlzTmFOKGRhdGUudmFsdWVPZigpKSA/IG51bGwgOiBkYXRlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcGlja2VyLmJzVmFsdWUgPSB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5fcGlja2VyLmlzRGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyKCkge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5fcGlja2VyLmhpZGUoKTtcclxuICAgIHRoaXMuX3JlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpLmJsdXIoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWNhbGVuZGFyLWxheW91dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDwhLS0gY3VycmVudCBkYXRlLCB3aWxsIGJlIGFkZGVkIGluIG5lYXJlc3QgcmVsZWFzZXMgLS0+XHJcbiAgICA8YnMtY3VycmVudC1kYXRlIHRpdGxlPVwiaGV5IHRoZXJlXCIgKm5nSWY9XCJmYWxzZVwiPjwvYnMtY3VycmVudC1kYXRlPlxyXG5cclxuICAgIDwhLS1uYXZpZ2F0aW9uLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlci1oZWFkXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYm9keVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tdGltZXBpY2tlci0tPlxyXG4gICAgPGJzLXRpbWVwaWNrZXIgKm5nSWY9XCJmYWxzZVwiPjwvYnMtdGltZXBpY2tlcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50IHt9XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtY3VycmVudC1kYXRlJyxcclxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJjdXJyZW50LXRpbWVkYXRlXCI+PHNwYW4+e3sgdGl0bGUgfX08L3NwYW4+PC9kaXY+YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnNDdXN0b21EYXRlcyB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogRGF0ZSB8IERhdGVbXTtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1jdXN0b20tZGF0ZS12aWV3JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItcHJlZGVmaW5lZC1idG5zXCI+XHJcbiAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IHJhbmdlIG9mIHJhbmdlc1wiPnt7IHJhbmdlLmxhYmVsIH19PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCJpc0N1c3RvbVJhbmdlU2hvd25cIj5DdXN0b20gUmFuZ2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBpc0N1c3RvbVJhbmdlU2hvd246IHRydWU7XHJcbiAgQElucHV0KCkgcmFuZ2VzOiBCc0N1c3RvbURhdGVzW107XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IERheVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ1tic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JdJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkYXkuaXNEaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmlzLWhpZ2hsaWdodGVkXSc6ICdkYXkuaXNIb3ZlcmVkJyxcclxuICAgICdbY2xhc3MuaXMtb3RoZXItbW9udGhdJzogJ2RheS5pc090aGVyTW9udGgnLFxyXG4gICAgJ1tjbGFzcy5pcy1hY3RpdmUtb3RoZXItbW9udGhdJzogJ2RheS5pc090aGVyTW9udGhIb3ZlcmVkJyxcclxuICAgICdbY2xhc3MuaW4tcmFuZ2VdJzogJ2RheS5pc0luUmFuZ2UnLFxyXG4gICAgJ1tjbGFzcy5zZWxlY3Qtc3RhcnRdJzogJ2RheS5pc1NlbGVjdGlvblN0YXJ0JyxcclxuICAgICdbY2xhc3Muc2VsZWN0LWVuZF0nOiAnZGF5LmlzU2VsZWN0aW9uRW5kJyxcclxuICAgICdbY2xhc3Muc2VsZWN0ZWRdJzogJ2RheS5pc1NlbGVjdGVkJ1xyXG4gIH0sXHJcbiAgdGVtcGxhdGU6IGB7eyBkYXkubGFiZWwgfX1gXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIGRheTogRGF5Vmlld01vZGVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kYXkuaXNUb2RheSAmJiB0aGlzLl9jb25maWcgJiYgdGhpcy5fY29uZmlnLmN1c3RvbVRvZGF5Q2xhc3MpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgdGhpcy5fY29uZmlnLmN1c3RvbVRvZGF5Q2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3JyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cInByZXZpb3VzXCJcclxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3dcIlxyXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlTGVmdEFycm93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8odHJ1ZSlcIj48c3Bhbj4mbHNhcXVvOzwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxyXG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImNhbGVuZGFyLm1vbnRoVGl0bGVcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidmlldygnbW9udGgnKVwiXHJcbiAgICA+PHNwYW4+e3sgY2FsZW5kYXIubW9udGhUaXRsZSB9fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxyXG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImN1cnJlbnRcIiAoY2xpY2spPVwidmlldygneWVhcicpXCJcclxuICAgID48c3Bhbj57eyBjYWxlbmRhci55ZWFyVGl0bGUgfX08L3NwYW4+PC9idXR0b24+XHJcblxyXG4gICAgJiM4MjAzOyAgPCEtLSB6ZXJvLXdpZHRoIHNwYWNlIG5lZWRlZCBmb3IgY29ycmVjdCBhbGlnbmVtZW50XHJcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibmV4dFwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvd1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVSaWdodEFycm93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8oZmFsc2UpXCI+PHNwYW4+JnJzYXF1bzs8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkRpcmVjdGlvbj4oKTtcclxuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XHJcblxyXG4gIG5hdlRvKGRvd246IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KFxyXG4gICAgICBkb3duID8gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gOiBCc05hdmlnYXRpb25EaXJlY3Rpb24uVVBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2aWV3KHZpZXdNb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQodmlld01vZGUpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxyXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBEYXlWaWV3TW9kZWwsIFdlZWtWaWV3TW9kZWxcclxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRheXMtY2FsZW5kYXItdmlldycsXHJcbiAgLy8gY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxicy1jYWxlbmRhci1sYXlvdXQ+XHJcbiAgICAgIDxicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1xyXG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXHJcbiAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAob25WaWV3TW9kZSk9XCJjaGFuZ2VWaWV3TW9kZSgkZXZlbnQpXCJcclxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XHJcblxyXG4gICAgICA8IS0tZGF5cyBtYXRyaXgtLT5cclxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJkYXlzIHdlZWtzXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0cj5cclxuICAgICAgICAgIDwhLS1pZiBzaG93IHdlZWtzLS0+XHJcbiAgICAgICAgICA8dGggKm5nSWY9XCJvcHRpb25zLnNob3dXZWVrTnVtYmVyc1wiPjwvdGg+XHJcbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IHdlZWtkYXkgb2YgY2FsZW5kYXIud2Vla2RheXM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ3ZWVrZGF5XCI+e3sgY2FsZW5kYXIud2Vla2RheXNbaV0gfX1cclxuICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgY2FsZW5kYXIud2Vla3M7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cIndlZWtcIiBbY2xhc3MuYWN0aXZlLXdlZWtdPVwiaXNXZWVrSG92ZXJlZFwiICAqbmdJZj1cIm9wdGlvbnMuc2hvd1dlZWtOdW1iZXJzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0V2Vlayh3ZWVrKVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIHRydWUpXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cIndlZWtIb3ZlckhhbmRsZXIod2VlaywgZmFsc2UpXCI+e3sgY2FsZW5kYXIud2Vla051bWJlcnNbaV0gfX08L3NwYW4+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkYXkgb2Ygd2Vlay5kYXlzXCIgcm9sZT1cImdyaWRjZWxsXCI+XHJcbiAgICAgICAgICA8c3BhbiBic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JcclxuICAgICAgICAgICAgICAgIFtkYXldPVwiZGF5XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3REYXkoZGF5KVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlckRheShkYXksIHRydWUpXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyRGF5KGRheSwgZmFsc2UpXCI+e3sgZGF5LmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgPC9icy1jYWxlbmRhci1sYXlvdXQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50ICB7XHJcbiAgQElucHV0KCkgY2FsZW5kYXI6IERheXNDYWxlbmRhclZpZXdNb2RlbDtcclxuICBASW5wdXQoKSBvcHRpb25zOiBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucztcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXlWaWV3TW9kZWw+KCk7XHJcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyV2VlayA9IG5ldyBFdmVudEVtaXR0ZXI8V2Vla1ZpZXdNb2RlbD4oKTtcclxuXHJcbiAgaXNXZWVrSG92ZXJlZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpIHsgfVxyXG5cclxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XHJcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgbW9udGg6IHN0ZXAgfSB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0RGF5KGV2ZW50OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIHRoaXMub25TZWxlY3QuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RXZWVrKHdlZWs6IFdlZWtWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdFdlZWspIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3ZWVrLmRheXNcclxuICAgICAgJiYgd2Vlay5kYXlzWzBdXHJcbiAgICAgICYmICF3ZWVrLmRheXNbMF0uaXNEaXNhYmxlZFxyXG4gICAgICAmJiB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGgpIHtcclxuXHJcbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh3ZWVrLmRheXNbMF0pO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3ZWVrLmRheXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZERheSA9IHdlZWsuZGF5cy5maW5kKChkYXk6IERheVZpZXdNb2RlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoXHJcbiAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcclxuICAgICAgICA6ICFkYXkuaXNPdGhlck1vbnRoICYmICFkYXkuaXNEaXNhYmxlZDtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25TZWxlY3QuZW1pdChzZWxlY3RlZERheSk7XHJcbiAgfVxyXG5cclxuICB3ZWVrSG92ZXJIYW5kbGVyKGNlbGw6IFdlZWtWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2Vlaykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFzQWN0aXZlRGF5cyA9IGNlbGwuZGF5cy5maW5kKChkYXk6IERheVZpZXdNb2RlbCkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoXHJcbiAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcclxuICAgICAgICA6ICFkYXkuaXNPdGhlck1vbnRoICYmICFkYXkuaXNEaXNhYmxlZDtcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChoYXNBY3RpdmVEYXlzKSB7XHJcbiAgICAgIGNlbGwuaXNIb3ZlcmVkID0gaXNIb3ZlcmVkO1xyXG4gICAgICB0aGlzLmlzV2Vla0hvdmVyZWQgPSBpc0hvdmVyZWQ7XHJcbiAgICAgIHRoaXMub25Ib3ZlcldlZWsuZW1pdChjZWxsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGhvdmVyRGF5KGNlbGw6IERheVZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoICYmIGNlbGwuaXNPdGhlck1vbnRoKSB7XHJcbiAgICAgIGNlbGwuaXNPdGhlck1vbnRoSG92ZXJlZCA9IGlzSG92ZXJlZDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcclxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXHJcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXHJcbiAgQ2VsbEhvdmVyRXZlbnQsXHJcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtbW9udGgtY2FsZW5kYXItdmlldycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxicy1jYWxlbmRhci1sYXlvdXQ+XHJcbiAgICAgIDxicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1xyXG4gICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXHJcbiAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAob25WaWV3TW9kZSk9XCJjaGFuZ2VWaWV3TW9kZSgkZXZlbnQpXCJcclxuICAgICAgPjwvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXc+XHJcblxyXG4gICAgICA8dGFibGUgcm9sZT1cImdyaWRcIiBjbGFzcz1cIm1vbnRoc1wiPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBjYWxlbmRhci5tb250aHNcIj5cclxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgbW9udGggb2Ygcm93XCIgcm9sZT1cImdyaWRjZWxsXCJcclxuICAgICAgICAgICAgICAoY2xpY2spPVwidmlld01vbnRoKG1vbnRoKVwiXHJcbiAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJNb250aChtb250aCwgdHJ1ZSlcIlxyXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyTW9udGgobW9udGgsIGZhbHNlKVwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIm1vbnRoLmlzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5pcy1oaWdobGlnaHRlZF09XCJtb250aC5pc0hvdmVyZWRcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgbW9udGgubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzTW9udGhDYWxlbmRhclZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNlbGxWaWV3TW9kZWw+KCk7XHJcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xyXG5cclxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XHJcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgeWVhcjogc3RlcCB9IH0pO1xyXG4gIH1cclxuXHJcbiAgdmlld01vbnRoKG1vbnRoOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpIHtcclxuICAgIHRoaXMub25TZWxlY3QuZW1pdChtb250aCk7XHJcbiAgfVxyXG5cclxuICBob3Zlck1vbnRoKGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLXRpbWVwaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJzLXRpbWVwaWNrZXItY29udHJvbHNcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtZGVjcmVhc2VcIj4tPC9idXR0b24+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImhvdXJzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1pbmNyZWFzZVwiPis8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJzLWRlY3JlYXNlXCI+LTwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJtaW51dGVzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1pbmNyZWFzZVwiPis8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJzd2l0Y2gtdGltZS1mb3JtYXRcIj57eyBhbXBtIH19XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBc0FBQUFLQ0FZQUFBQmk4S1NEQUFBQlNFbEVRVlFZVjNYUVBVdkRVQlFHNEhOdWFndFZxYzZLZ291Q3Y2R0l1SW50WUJMQjloY0lRcExTdENBSVY3RFltcFRjUldjWHFaaW8zVndjL1VDYy9RRXFmZ3lLR2JyMEk3blMxRWlIZXFZelBPL2g1U0QwamF4VVpqbVNMQ0IrT0ZiK1VGSU5Gd0FTQUVBZHB1OWdhR1hWeUFISEZRQmtIcEtIYzZhOWR6RUN2QUR5WTlzcWxBTXNLOVcwanp4RFhxZXl0cjNtaFFja3hTamkyN1RKSjUvclBtSXB3SkpxM0hydGR1cmlZT3VydjFhNGkxcDVIbmhrRzlPRnltaTBSZW9PMDVjR3diK2F5djRkeXNWeWdqZUZtc1AwNWY4d3BaUThmc2R2Zm11WTl6aldTTnFVdGdZRlZuT1ZSZUlMWW9CRnpkUUk1L0dHRnpOSGhHYmVabm9wREdVMjlzWmJzY2dsZG1DOTl3MzVWT0FUVHljSU1NY0JYSWZwU1ZHelpoQTZDOGhoMDBjb25sbjZWUTlUR2dWMzJPRUFLUUM0RHJCcTdDSndkMGdnUjdWcS9yUHJmZ0IrQzNzR3lwWTVEQUFBQUFCSlJVNUVya0pnZ2c9PVwiXHJcbiAgICAgICAgICBhbHQ9XCJcIj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc1RpbWVwaWNrZXJWaWV3Q29tcG9uZW50IHtcclxuICBhbXBtID0gJ29rJztcclxuICBob3VycyA9IDA7XHJcbiAgbWludXRlcyA9IDA7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgeWVhcnNQZXJDYWxlbmRhciB9IGZyb20gJy4uLy4uL2VuZ2luZS9mb3JtYXQteWVhcnMtY2FsZW5kYXInO1xyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcclxuICBCc05hdmlnYXRpb25FdmVudCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXHJcbiAgQ2VsbEhvdmVyRXZlbnQsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLXllYXJzLWNhbGVuZGFyLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcclxuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxyXG5cclxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJ5ZWFyc1wiPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBjYWxlbmRhci55ZWFyc1wiPlxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHJvd1wiIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInZpZXdZZWFyKHllYXIpXCJcclxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlclllYXIoeWVhciwgdHJ1ZSlcIlxyXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyWWVhcih5ZWFyLCBmYWxzZSlcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ5ZWFyLmlzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5pcy1oaWdobGlnaHRlZF09XCJ5ZWFyLmlzSG92ZXJlZFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyB5ZWFyLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjYWxlbmRhcjogWWVhcnNDYWxlbmRhclZpZXdNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNlbGxWaWV3TW9kZWw+KCk7XHJcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xyXG5cclxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XHJcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgeWVhcjogc3RlcCAqIHllYXJzUGVyQ2FsZW5kYXIgfSB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdZZWFyKHllYXI6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCkge1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHllYXIpO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJZZWFyKGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbmZpZyc7XHJcblxyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xyXG5pbXBvcnQgeyBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY2FsZW5kYXItbGF5b3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VycmVudC1kYXRlLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzTW9udGhDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1tb250aHMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc1RpbWVwaWNrZXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtdGltZXBpY2tlci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy15ZWFycy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgX2V4cG9ydHMgPSBbXHJcbiAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCxcclxuXHJcbiAgQnNEYXRlcGlja2VyRGlyZWN0aXZlLFxyXG4gIEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlLFxyXG5cclxuICBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlLFxyXG4gIEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlLFxyXG5cclxuICBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmVcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBCc0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JDb21wb25lbnQsXHJcbiAgICBCc0N1cnJlbnREYXRlVmlld0NvbXBvbmVudCxcclxuICAgIEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50LFxyXG4gICAgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCxcclxuXHJcbiAgICBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50LFxyXG4gICAgQnNEYXlzQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxyXG4gICAgQnNNb250aENhbGVuZGFyVmlld0NvbXBvbmVudCxcclxuICAgIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQsXHJcblxyXG4gICAgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQsXHJcblxyXG4gICAgLi4uX2V4cG9ydHNcclxuICBdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW1xyXG4gICAgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnRcclxuICBdLFxyXG4gIGV4cG9ydHM6IF9leHBvcnRzXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEJzRGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSxcclxuICAgICAgICBQb3NpdGlvbmluZ1NlcnZpY2UsXHJcbiAgICAgICAgQnNEYXRlcGlja2VyU3RvcmUsXHJcbiAgICAgICAgQnNEYXRlcGlja2VyQWN0aW9ucyxcclxuICAgICAgICBCc0RhdGVwaWNrZXJDb25maWcsXHJcbiAgICAgICAgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcsXHJcbiAgICAgICAgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlckVmZmVjdHMsXHJcbiAgICAgICAgQnNMb2NhbGVTZXJ2aWNlXHJcbiAgICAgIF1cclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXR0ZXIge1xyXG4gIGZvcm1hdChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0LCBsb2NhbGUpO1xyXG4gIH1cclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTogbWF4LWZpbGUtbGluZS1jb3VudCAqL1xyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlciB9IGZyb20gJy4vZGF0ZS1mb3JtYXR0ZXInO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1pbm5lcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDwhLS0mbHQ7ISZuZGFzaDtuZy1rZXlkb3duPVwia2V5ZG93bigkZXZlbnQpXCImbmRhc2g7Jmd0Oy0tPlxyXG4gICAgPGRpdiAqbmdJZj1cImRhdGVwaWNrZXJNb2RlXCIgY2xhc3M9XCJ3ZWxsIHdlbGwtc20gYmctZmFkZWQgcC1hIGNhcmRcIiByb2xlPVwiYXBwbGljYXRpb25cIiA+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcclxuICBASW5wdXQoKSBkYXRlcGlja2VyTW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN0YXJ0aW5nRGF5OiBudW1iZXI7XHJcbiAgQElucHV0KCkgeWVhclJhbmdlOiBudW1iZXI7XHJcblxyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBtaW5Nb2RlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbWF4TW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHNob3dXZWVrczogYm9vbGVhbjtcclxuICBASW5wdXQoKSBmb3JtYXREYXk6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXRNb250aDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXREYXlIZWFkZXI6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXREYXlUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoVGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBvbmx5Q3VycmVudE1vbnRoOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3J0Y3V0UHJvcGFnYXRpb246IGJvb2xlYW47XHJcbiAgQElucHV0KCkgY3VzdG9tQ2xhc3M6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nOyBjbGF6ejogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBtb250aENvbExpbWl0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgeWVhckNvbExpbWl0OiBudW1iZXI7XHJcbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9W107XHJcbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xyXG4gIEBJbnB1dCgpIGluaXREYXRlOiBEYXRlO1xyXG5cclxuICBAT3V0cHV0KCkgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xyXG4gIEBPdXRwdXQoKSB1cGRhdGU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oZmFsc2UpO1xyXG4gIEBPdXRwdXQoKSBhY3RpdmVEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBzdGVwRGF5OiBhbnkgPSB7fTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgc3RlcE1vbnRoOiBhbnkgPSB7fTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgc3RlcFllYXI6IGFueSA9IHt9O1xyXG5cclxuICB1bmlxdWVJZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgbW9kZXM6IHN0cmluZ1tdID0gWydkYXknLCAnbW9udGgnLCAneWVhciddO1xyXG4gIHByb3RlY3RlZCBkYXRlRm9ybWF0dGVyOiBEYXRlRm9ybWF0dGVyID0gbmV3IERhdGVGb3JtYXR0ZXIoKTtcclxuICBwcm90ZWN0ZWQgX2FjdGl2ZURhdGU6IERhdGU7XHJcbiAgcHJvdGVjdGVkIHNlbGVjdGVkRGF0ZTogRGF0ZTtcclxuICBwcm90ZWN0ZWQgYWN0aXZlRGF0ZUlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJEYXk6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlckRheTogRnVuY3Rpb247XHJcbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlck1vbnRoOiBGdW5jdGlvbjtcclxuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJNb250aDogRnVuY3Rpb247XHJcbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlclllYXI6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlclllYXI6IEZ1bmN0aW9uO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZURhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogYWRkIGZvcm1hdHRlciB2YWx1ZSB0byBEYXRlIG9iamVjdFxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgLy8gdG9kbzogdXNlIGRhdGUgZm9yIHVuaXF1ZSB2YWx1ZVxyXG4gICAgdGhpcy51bmlxdWVJZCA9ICBgZGF0ZXBpY2tlci0tJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCl9YDtcclxuXHJcbiAgICBpZiAodGhpcy5pbml0RGF0ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmluaXREYXRlO1xyXG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS52YWx1ZU9mKCkpO1xyXG4gICAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYWN0aXZlRGF0ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0aGlzLnJlZnJlc2hWaWV3IHNob3VsZCBiZSBjYWxsZWQgaGVyZSB0byByZWZsZWN0IHRoZSBjaGFuZ2VzIG9uIHRoZSBmbHlcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdW51c2VkLXZhcmlhYmxlXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgdGhpcy5jaGVja0lmQWN0aXZlRGF0ZUdvdFVwZGF0ZWQoY2hhbmdlcy5hY3RpdmVEYXRlKTtcclxuICB9XHJcblxyXG4gIC8vIENoZWNrIGlmIGFjdGl2ZURhdGUgaGFzIGJlZW4gdXBkYXRlIGFuZCB0aGVuIGVtaXQgdGhlIGFjdGl2ZURhdGVDaGFuZ2Ugd2l0aCB0aGUgbmV3IGRhdGVcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIGNoZWNrSWZBY3RpdmVEYXRlR290VXBkYXRlZChhY3RpdmVEYXRlOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmIChhY3RpdmVEYXRlICYmICFhY3RpdmVEYXRlLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzVmFsdWUgPSBhY3RpdmVEYXRlLnByZXZpb3VzVmFsdWU7XHJcbiAgICAgIGlmIChcclxuICAgICAgICBwcmV2aW91c1ZhbHVlICYmXHJcbiAgICAgICAgcHJldmlvdXNWYWx1ZSBpbnN0YW5jZW9mIERhdGUgJiZcclxuICAgICAgICBwcmV2aW91c1ZhbHVlLmdldFRpbWUoKSAhPT0gYWN0aXZlRGF0ZS5jdXJyZW50VmFsdWUuZ2V0VGltZSgpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENvbXBhcmVIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlID09PSAnZGF5Jykge1xyXG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5ID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcclxuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlclllYXIgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcGFyZShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKGRhdGUxID09PSB1bmRlZmluZWQgfHwgZGF0ZTIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5JyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KGRhdGUxLCBkYXRlMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgoZGF0ZTEsIGRhdGUyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInICYmIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcihkYXRlMSwgZGF0ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2b2lkIDA7XHJcbiAgfVxyXG5cclxuICBzZXRSZWZyZXNoVmlld0hhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24sIHR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGUgPT09ICdkYXknKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5ID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhciA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWZyZXNoVmlldygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5JyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGgpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGF0ZUZpbHRlcihkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlRm9ybWF0dGVyLmZvcm1hdChkYXRlLCBmb3JtYXQsIHRoaXMubG9jYWxlKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBpc0FjdGl2ZShkYXRlT2JqZWN0OiBhbnkpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmNvbXBhcmUoZGF0ZU9iamVjdC5kYXRlLCB0aGlzLmFjdGl2ZURhdGUpID09PSAwKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUlkID0gZGF0ZU9iamVjdC51aWQ7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgY3JlYXRlRGF0ZU9iamVjdChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb25zdCBkYXRlT2JqZWN0OiBhbnkgPSB7fTtcclxuICAgIGRhdGVPYmplY3QuZGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgZGF0ZS5nZXREYXRlKClcclxuICAgICk7XHJcbiAgICBkYXRlT2JqZWN0LmRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGVPYmplY3QuZGF0ZSk7XHJcbiAgICBkYXRlT2JqZWN0LmxhYmVsID0gdGhpcy5kYXRlRmlsdGVyKGRhdGUsIGZvcm1hdCk7XHJcbiAgICBkYXRlT2JqZWN0LnNlbGVjdGVkID0gdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMuc2VsZWN0ZWREYXRlKSA9PT0gMDtcclxuICAgIGRhdGVPYmplY3QuZGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQoZGF0ZSk7XHJcbiAgICBkYXRlT2JqZWN0LmN1cnJlbnQgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgbmV3IERhdGUoKSkgPT09IDA7XHJcbiAgICBkYXRlT2JqZWN0LmN1c3RvbUNsYXNzID0gdGhpcy5nZXRDdXN0b21DbGFzc0ZvckRhdGUoZGF0ZU9iamVjdC5kYXRlKTtcclxuXHJcbiAgICByZXR1cm4gZGF0ZU9iamVjdDtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBzcGxpdChhcnI6IGFueVtdLCBzaXplOiBudW1iZXIpOiBhbnlbXSB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBjb25zdCBhcnJheXM6IGFueVtdID0gW107XHJcbiAgICB3aGlsZSAoYXJyLmxlbmd0aCA+IDApIHtcclxuICAgICAgYXJyYXlzLnB1c2goYXJyLnNwbGljZSgwLCBzaXplKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGFycmF5cztcclxuICB9XHJcblxyXG4gIC8vIEZpeCBhIGhhcmQtcmVwcm9kdWNpYmxlIGJ1ZyB3aXRoIHRpbWV6b25lc1xyXG4gIC8vIFRoZSBidWcgZGVwZW5kcyBvbiBPUywgYnJvd3NlciwgY3VycmVudCB0aW1lem9uZSBhbmQgY3VycmVudCBkYXRlXHJcbiAgLy8gaS5lLlxyXG4gIC8vIHZhciBkYXRlID0gbmV3IERhdGUoMjAxNCwgMCwgMSk7XHJcbiAgLy8gY29uc29sZS5sb2coZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLFxyXG4gIC8vIGRhdGUuZ2V0SG91cnMoKSk7IGNhbiByZXN1bHQgaW4gXCIyMDEzIDExIDMxIDIzXCIgYmVjYXVzZSBvZiB0aGUgYnVnLlxyXG4gIGZpeFRpbWVab25lKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICAgIGNvbnN0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cclxuICAgIHJldHVybiBuZXcgRGF0ZShcclxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpLFxyXG4gICAgICBob3VycyA9PT0gMjMgPyBob3VycyArIDIgOiAwXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGRhdGU6IERhdGUsIGlzTWFudWFsID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWluTW9kZSkge1xyXG4gICAgICBpZiAoIXRoaXMuYWN0aXZlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuZml4VGltZVpvbmUodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgaWYgKGlzTWFudWFsKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25Eb25lLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgICBkYXRlLmdldERhdGUoKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmZpeFRpbWVab25lKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICAgIGlmIChpc01hbnVhbCkge1xyXG4gICAgICAgIHRoaXMuZGF0ZXBpY2tlck1vZGUgPSB0aGlzLm1vZGVzW1xyXG4gICAgICAgICAgdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpIC0gMVxyXG4gICAgICAgIF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuYWN0aXZlRGF0ZS52YWx1ZU9mKCkpO1xyXG4gICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgbW92ZShkaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgbGV0IGV4cGVjdGVkU3RlcDogYW55O1xyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknKSB7XHJcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcERheTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBNb250aDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInKSB7XHJcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcFllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV4cGVjdGVkU3RlcCkge1xyXG4gICAgICBjb25zdCB5ZWFyID1cclxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSArIGRpcmVjdGlvbiAqIChleHBlY3RlZFN0ZXAueWVhcnMgfHwgMCk7XHJcbiAgICAgIGNvbnN0IG1vbnRoID1cclxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSArIGRpcmVjdGlvbiAqIChleHBlY3RlZFN0ZXAubW9udGhzIHx8IDApO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcblxyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNb2RlKF9kaXJlY3Rpb246IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGlyZWN0aW9uID0gX2RpcmVjdGlvbiB8fCAxO1xyXG5cclxuICAgIGlmIChcclxuICAgICAgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWF4TW9kZSAmJiBkaXJlY3Rpb24gPT09IDEpIHx8XHJcbiAgICAgICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1pbk1vZGUgJiYgZGlyZWN0aW9uID09PSAtMSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbXHJcbiAgICAgIHRoaXMubW9kZXMuaW5kZXhPZih0aGlzLmRhdGVwaWNrZXJNb2RlKSArIGRpcmVjdGlvblxyXG4gICAgXTtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDdXN0b21DbGFzc0ZvckRhdGUoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuY3VzdG9tQ2xhc3MpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gICAgLy8gdG9kbzogYnVpbGQgYSBoYXNoIG9mIGN1c3RvbSBjbGFzc2VzLCBpdCB3aWxsIHdvcmsgZmFzdGVyXHJcbiAgICBjb25zdCBjdXN0b21DbGFzc09iamVjdDoge1xyXG4gICAgICBkYXRlOiBEYXRlO1xyXG4gICAgICBtb2RlOiBzdHJpbmc7XHJcbiAgICAgIGNsYXp6OiBzdHJpbmc7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgfSA9IHRoaXMuY3VzdG9tQ2xhc3MuZmluZCgoY3VzdG9tQ2xhc3M6IGFueSkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGN1c3RvbUNsYXNzLmRhdGUudmFsdWVPZigpID09PSBkYXRlLnZhbHVlT2YoKSAmJlxyXG4gICAgICAgIGN1c3RvbUNsYXNzLm1vZGUgPT09IHRoaXMuZGF0ZXBpY2tlck1vZGVcclxuICAgICAgKTtcclxuICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIHJldHVybiBjdXN0b21DbGFzc09iamVjdCA9PT0gdW5kZWZpbmVkID8gJycgOiBjdXN0b21DbGFzc09iamVjdC5jbGF6ejtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjb21wYXJlRGF0ZURpc2FibGVkKFxyXG4gICAgZGF0ZTFEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfSxcclxuICAgIGRhdGUyOiBEYXRlXHJcbiAgKTogbnVtYmVyIHtcclxuICAgIGlmIChkYXRlMURpc2FibGVkID09PSB1bmRlZmluZWQgfHwgZGF0ZTIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICdkYXknICYmIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aChkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAneWVhcicgJiYgdGhpcy5jb21wYXJlSGFuZGxlclllYXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgaXNEaXNhYmxlZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgICBsZXQgaXNEYXRlRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLmRhdGVEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmRhdGVEaXNhYmxlZC5mb3JFYWNoKFxyXG4gICAgICAgIChkaXNhYmxlZERhdGU6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH0pID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLmNvbXBhcmVEYXRlRGlzYWJsZWQoZGlzYWJsZWREYXRlLCBkYXRlKSA9PT0gMCkge1xyXG4gICAgICAgICAgICBpc0RhdGVEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRheURpc2FibGVkKSB7XHJcbiAgICAgIGlzRGF0ZURpc2FibGVkID1cclxuICAgICAgICBpc0RhdGVEaXNhYmxlZCB8fFxyXG4gICAgICAgIHRoaXMuZGF5RGlzYWJsZWQuaW5kZXhPZihkYXRlLmdldERheSgpKSA+IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGlzRGF0ZURpc2FibGVkIHx8XHJcbiAgICAgICh0aGlzLm1pbkRhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWluRGF0ZSkgPCAwKSB8fFxyXG4gICAgICAodGhpcy5tYXhEYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1heERhdGUpID4gMClcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJDb25maWcge1xyXG4gIGxvY2FsZSA9ICdlbic7XHJcbiAgZGF0ZXBpY2tlck1vZGUgPSAnZGF5JztcclxuICBzdGFydGluZ0RheSA9IDA7XHJcbiAgeWVhclJhbmdlID0gMjA7XHJcbiAgbWluTW9kZSA9ICdkYXknO1xyXG4gIG1heE1vZGUgPSAneWVhcic7XHJcbiAgc2hvd1dlZWtzID0gdHJ1ZTtcclxuICBmb3JtYXREYXkgPSAnREQnO1xyXG4gIGZvcm1hdE1vbnRoID0gJ01NTU0nO1xyXG4gIGZvcm1hdFllYXIgPSAnWVlZWSc7XHJcbiAgZm9ybWF0RGF5SGVhZGVyID0gJ2RkJztcclxuICBmb3JtYXREYXlUaXRsZSA9ICdNTU1NIFlZWVknO1xyXG4gIGZvcm1hdE1vbnRoVGl0bGUgPSAnWVlZWSc7XHJcbiAgb25seUN1cnJlbnRNb250aCA9IGZhbHNlO1xyXG4gIG1vbnRoQ29sTGltaXQgPSAzO1xyXG4gIHllYXJDb2xMaW1pdCA9IDU7XHJcbiAgc2hvcnRjdXRQcm9wYWdhdGlvbiA9IGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBQcm92aWRlcixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRhdGVwaWNrZXItaW5uZXIgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAodXBkYXRlKT1cIm9uVXBkYXRlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2xvY2FsZV09XCJjb25maWcubG9jYWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlcGlja2VyTW9kZV09XCJkYXRlcGlja2VyTW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5pdERhdGVdPVwiaW5pdERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21pbkRhdGVdPVwibWluRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttaW5Nb2RlXT1cIm1pbk1vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21heE1vZGVdPVwibWF4TW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvd1dlZWtzXT1cInNob3dXZWVrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5XT1cImZvcm1hdERheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhdPVwiZm9ybWF0TW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdFllYXJdPVwiZm9ybWF0WWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5SGVhZGVyXT1cImZvcm1hdERheUhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5VGl0bGVdPVwiZm9ybWF0RGF5VGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoVGl0bGVdPVwiZm9ybWF0TW9udGhUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRpbmdEYXldPVwic3RhcnRpbmdEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3llYXJSYW5nZV09XCJ5ZWFyUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2N1c3RvbUNsYXNzXT1cImN1c3RvbUNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlRGlzYWJsZWRdPVwiZGF0ZURpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtkYXlEaXNhYmxlZF09XCJkYXlEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbb25seUN1cnJlbnRNb250aF09XCJvbmx5Q3VycmVudE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzaG9ydGN1dFByb3BhZ2F0aW9uXT1cInNob3J0Y3V0UHJvcGFnYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21vbnRoQ29sTGltaXRdPVwibW9udGhDb2xMaW1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbeWVhckNvbExpbWl0XT1cInllYXJDb2xMaW1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uRG9uZSk9XCJvblNlbGVjdGlvbkRvbmUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlRGF0ZUNoYW5nZSk9XCJvbkFjdGl2ZURhdGVDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8ZGF5cGlja2VyIHRhYmluZGV4PVwiMFwiPjwvZGF5cGlja2VyPlxyXG4gICAgICA8bW9udGhwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9tb250aHBpY2tlcj5cclxuICAgICAgPHllYXJwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC95ZWFycGlja2VyPlxyXG4gICAgPC9kYXRlcGlja2VyLWlubmVyPlxyXG4gICAgYCxcclxuICBwcm92aWRlcnM6IFtEQVRFUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbi8qIHRzbGludDplbmFibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgLyoqIHNldHMgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xyXG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlID0gJ2RheSc7XHJcbiAgLyoqIGRlZmF1bHQgZGF0ZSB0byBzaG93IGlmIGBuZy1tb2RlbGAgdmFsdWUgaXMgbm90IHNwZWNpZmllZCAqL1xyXG4gIEBJbnB1dCgpIGluaXREYXRlOiBEYXRlO1xyXG4gIC8qKiAgb2xkZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgLyoqIGxhdGVzdCBzZWxlY3RhYmxlIGRhdGUgKi9cclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIC8qKiBzZXQgbG93ZXIgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xyXG4gIEBJbnB1dCgpIG1pbk1vZGU6IHN0cmluZztcclxuICAvKiogc2V0cyB1cHBlciBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXHJcbiAgQElucHV0KCkgbWF4TW9kZTogc3RyaW5nO1xyXG4gIC8qKiBpZiBmYWxzZSB3ZWVrIG51bWJlcnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBzaG93V2Vla3MgPSB0cnVlO1xyXG4gIC8qKiBmb3JtYXQgb2YgZGF5IGluIG1vbnRoICovXHJcbiAgQElucHV0KCkgZm9ybWF0RGF5OiBzdHJpbmc7XHJcbiAgLyoqIGZvcm1hdCBvZiBtb250aCBpbiB5ZWFyICovXHJcbiAgQElucHV0KCkgZm9ybWF0TW9udGg6IHN0cmluZztcclxuICAvKiogZm9ybWF0IG9mIHllYXIgaW4geWVhciByYW5nZSAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcclxuICAvKiogZm9ybWF0IG9mIGRheSBpbiB3ZWVrIGhlYWRlciAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdERheUhlYWRlcjogc3RyaW5nO1xyXG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgZGF5ICovXHJcbiAgQElucHV0KCkgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcclxuICAvKiogZm9ybWF0IG9mIHRpdGxlIHdoZW4gc2VsZWN0aW5nIG1vbnRoICovXHJcbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xyXG4gIC8qKiBzdGFydGluZyBkYXkgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXHJcbiAgQElucHV0KCkgc3RhcnRpbmdEYXk6IG51bWJlcjtcclxuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiB5ZWFyIHNlbGVjdGlvbiAqL1xyXG4gIEBJbnB1dCgpIHllYXJSYW5nZTogbnVtYmVyO1xyXG4gIC8qKiBpZiB0cnVlIG9ubHkgZGF0ZXMgZnJvbSB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBtb250aCB3aWxsIGJlIHNob3duICovXHJcbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcclxuICAvKiogaWYgdHJ1ZSBzaG9ydGN1dGBzIGV2ZW50IHByb3BhZ2F0aW9uIHdpbGwgYmUgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xyXG4gIC8qKiBudW1iZXIgb2YgbW9udGhzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgbW9udGggcGlja2VyICovXHJcbiAgQElucHV0KCkgbW9udGhDb2xMaW1pdDogbnVtYmVyO1xyXG4gIC8qKiBudW1iZXIgb2YgeWVhcnMgZGlzcGxheWVkIGluIGEgc2luZ2xlIHJvdyBvZiB5ZWFyIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xyXG4gIC8qKiBhcnJheSBvZiBjdXN0b20gY3NzIGNsYXNzZXMgdG8gYmUgYXBwbGllZCB0byB0YXJnZXRlZCBkYXRlcyAqL1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZzsgY2xheno6IHN0cmluZyB9W107XHJcbiAgLyoqIGFycmF5IG9mIGRpc2FibGVkIGRhdGVzICovXHJcbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9W107XHJcbiAgLyoqIGRpc2FibGVkIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXHJcbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xyXG5cclxuICAvKiogY3VycmVudGx5IGFjdGl2ZSBkYXRlICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlIHx8IHRoaXMuX25vdztcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3Rpb25Eb25lOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XHJcblxyXG4gIC8qKiBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgYWN0aXZlRGF0ZSBpcyBjaGFuZ2VkLiAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oXHJcbiAgICB1bmRlZmluZWRcclxuICApO1xyXG5cclxuICBAVmlld0NoaWxkKERhdGVQaWNrZXJJbm5lckNvbXBvbmVudClcclxuICBfZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZztcclxuXHJcbiAgcHJvdGVjdGVkIF9ub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByb3RlY3RlZCBfYWN0aXZlRGF0ZTogRGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBEYXRlcGlja2VyQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb25maWcpO1xyXG4gIH1cclxuXHJcbiAgb25VcGRhdGUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGV2ZW50O1xyXG4gICAgdGhpcy5vbkNoYW5nZShldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbkRvbmUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQWN0aXZlRGF0ZUNoYW5nZShldmVudDogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuICAvLyB0b2RvOiBzdXBwb3J0IG51bGwgdmFsdWVcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZVBpY2tlci5jb21wYXJlKHZhbHVlLCB0aGlzLl9hY3RpdmVEYXRlKSA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9kYXRlUGlja2VyLnNlbGVjdCh2YWx1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogdm9pZCAwO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG59XHJcbiIsIi8vIEBkZXByZWNhdGVkXHJcbi8vIHRzbGludDpkaXNhYmxlXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXlwaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknXCIgcm9sZT1cImdyaWRcIiBbYXR0ci5hcmlhLWxhYmVsbGVkYnldPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCIgYXJpYS1hY3RpdmVkZXNjZW5kYW50PVwiYWN0aXZlRGF0ZUlkXCI+XHJcbiAgPHRoZWFkPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGg+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFpc0JzNFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCJcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj7DosKAwrk8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNCczRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKC0xKVwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+Jmx0OzwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGggW2F0dHIuY29sc3Bhbl09XCI1ICsgKGRhdGVQaWNrZXIuc2hvd1dlZWtzID8gMSA6IDApXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci50b2dnbGVNb2RlKDApXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGVcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgIDxzdHJvbmc+e3sgdGl0bGUgfX08L3N0cm9uZz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgICAgPHRoPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaXNCczRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPsOiwoDCujwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJpc0JzNFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zZWNvbmRhcnkgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+Jmd0O1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgPC90cj5cclxuICAgIDx0cj5cclxuICAgICAgPHRoICpuZ0lmPVwiZGF0ZVBpY2tlci5zaG93V2Vla3NcIj48L3RoPlxyXG4gICAgICA8dGggKm5nRm9yPVwibGV0IGxhYmVseiBvZiBsYWJlbHNcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgPHNtYWxsIGFyaWEtbGFiZWw9XCJsYWJlbHouZnVsbFwiPjxiPnt7IGxhYmVsei5hYmJyIH19PC9iPjwvc21hbGw+XHJcbiAgICAgIDwvdGg+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGhlYWQ+XHJcbiAgPHRib2R5PlxyXG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIFtuZ0Zvck9mXT1cInJvd3NcIiBsZXQtcm93ej1cIiRpbXBsaWNpdFwiIGxldC1pbmRleD1cImluZGV4XCI+XHJcbiAgICAgIDx0ciAqbmdJZj1cIiEoZGF0ZVBpY2tlci5vbmx5Q3VycmVudE1vbnRoICYmIHJvd3pbMF0uc2Vjb25kYXJ5ICYmIHJvd3pbNl0uc2Vjb25kYXJ5KVwiPlxyXG4gICAgICAgIDx0ZCAqbmdJZj1cImRhdGVQaWNrZXIuc2hvd1dlZWtzXCIgY2xhc3M9XCJoNlwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxlbT57eyB3ZWVrTnVtYmVyc1tpbmRleF0gfX08L2VtPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBkdHogb2Ygcm93elwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBbaWRdPVwiZHR6LnVpZFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tc20ge3tkdHouY3VzdG9tQ2xhc3N9fVwiXHJcbiAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIShkYXRlUGlja2VyLm9ubHlDdXJyZW50TW9udGggJiYgZHR6LnNlY29uZGFyeSlcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1zZWNvbmRhcnknOiBpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCwgZGlzYWJsZWQ6IGR0ei5kaXNhYmxlZCwgYWN0aXZlOiAhaXNCczQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWRlZmF1bHQnOiAhaXNCczR9XCJcclxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1tdXRlZCc6IGR0ei5zZWNvbmRhcnkgfHwgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCczQgJiYgZHR6LmN1cnJlbnR9XCI+e3sgZHR6LmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgPC90Ym9keT5cclxuPC90YWJsZT5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICBjb2xvcjogIzI5MmIyYztcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgfVxyXG4gICAgOmhvc3QgLmJ0bi1pbmZvIC50ZXh0LW11dGVkIHtcclxuICAgICAgY29sb3I6ICMyOTJiMmMgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF5UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBsYWJlbHM6IGFueVtdID0gW107XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICByb3dzOiBhbnlbXSA9IFtdO1xyXG4gIHdlZWtOdW1iZXJzOiBudW1iZXJbXSA9IFtdO1xyXG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgLypwcm90ZWN0ZWQgZ2V0RGF5c0luTW9udGgoeWVhcjpudW1iZXIsIG1vbnRoOm51bWJlcikge1xyXG4gICByZXR1cm4gKChtb250aCA9PT0gMSkgJiYgKHllYXIgJSA0ID09PSAwKSAmJlxyXG4gICAoKHllYXIgJSAxMDAgIT09IDApIHx8ICh5ZWFyICUgNDAwID09PSAwKSkpID8gMjkgOiBEQVlTX0lOX01PTlRIW21vbnRoXTtcclxuICAgfSovXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcERheSA9IHsgbW9udGhzOiAxIH07XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFJlZnJlc2hWaWV3SGFuZGxlcihmdW5jdGlvbigpOiB2b2lkIHtcclxuICAgICAgY29uc3QgeWVhciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBjb25zdCBtb250aCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICBjb25zdCBmaXJzdERheU9mTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSk7XHJcbiAgICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0aGlzLnN0YXJ0aW5nRGF5IC0gZmlyc3REYXlPZk1vbnRoLmdldERheSgpO1xyXG4gICAgICBjb25zdCBudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA9XHJcbiAgICAgICAgZGlmZmVyZW5jZSA+IDAgPyA3IC0gZGlmZmVyZW5jZSA6IC1kaWZmZXJlbmNlO1xyXG4gICAgICBjb25zdCBmaXJzdERhdGUgPSBuZXcgRGF0ZShmaXJzdERheU9mTW9udGguZ2V0VGltZSgpKTtcclxuXHJcbiAgICAgIGlmIChudW1EaXNwbGF5ZWRGcm9tUHJldmlvdXNNb250aCA+IDApIHtcclxuICAgICAgICBmaXJzdERhdGUuc2V0RGF0ZSgtbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggKyAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gNDIgaXMgdGhlIG51bWJlciBvZiBkYXlzIG9uIGEgc2l4LXdlZWsgY2FsZW5kYXJcclxuICAgICAgY29uc3QgX2RheXM6IERhdGVbXSA9IHNlbGYuZ2V0RGF0ZXMoZmlyc3REYXRlLCA0Mik7XHJcbiAgICAgIGNvbnN0IGRheXM6IGFueVtdID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IF9kYXRlT2JqZWN0ID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KF9kYXlzW2ldLCB0aGlzLmZvcm1hdERheSk7XHJcbiAgICAgICAgX2RhdGVPYmplY3Quc2Vjb25kYXJ5ID0gX2RheXNbaV0uZ2V0TW9udGgoKSAhPT0gbW9udGg7XHJcbiAgICAgICAgX2RhdGVPYmplY3QudWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XHJcbiAgICAgICAgZGF5c1tpXSA9IF9kYXRlT2JqZWN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLmxhYmVscyA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xyXG4gICAgICAgIHNlbGYubGFiZWxzW2pdID0ge307XHJcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uYWJiciA9IHRoaXMuZGF0ZUZpbHRlcihcclxuICAgICAgICAgIGRheXNbal0uZGF0ZSxcclxuICAgICAgICAgIHRoaXMuZm9ybWF0RGF5SGVhZGVyXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZWxmLmxhYmVsc1tqXS5mdWxsID0gdGhpcy5kYXRlRmlsdGVyKGRheXNbal0uZGF0ZSwgJ0VFRUUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi50aXRsZSA9IHRoaXMuZGF0ZUZpbHRlcih0aGlzLmFjdGl2ZURhdGUsIHRoaXMuZm9ybWF0RGF5VGl0bGUpO1xyXG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KGRheXMsIDcpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2hvd1dlZWtzKSB7XHJcbiAgICAgICAgc2VsZi53ZWVrTnVtYmVycyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHRodXJzZGF5SW5kZXggPSAoNCArIDcgLSB0aGlzLnN0YXJ0aW5nRGF5KSAlIDc7XHJcbiAgICAgICAgY29uc3QgbnVtV2Vla3MgPSBzZWxmLnJvd3MubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGN1cldlZWsgPSAwOyBjdXJXZWVrIDwgbnVtV2Vla3M7IGN1cldlZWsrKykge1xyXG4gICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy5wdXNoKFxyXG4gICAgICAgICAgICBzZWxmLmdldElTTzg2MDFXZWVrTnVtYmVyKHNlbGYucm93c1tjdXJXZWVrXVt0aHVyc2RheUluZGV4XS5kYXRlKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sICdkYXknKTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Q29tcGFyZUhhbmRsZXIoZnVuY3Rpb24oXHJcbiAgICAgIGRhdGUxOiBEYXRlLFxyXG4gICAgICBkYXRlMjogRGF0ZVxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgY29uc3QgZDEgPSBuZXcgRGF0ZShkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpLCBkYXRlMS5nZXREYXRlKCkpO1xyXG4gICAgICBjb25zdCBkMiA9IG5ldyBEYXRlKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCksIGRhdGUyLmdldERhdGUoKSk7XHJcbiAgICAgIHJldHVybiBkMS5nZXRUaW1lKCkgLSBkMi5nZXRUaW1lKCk7XHJcbiAgICB9LCAnZGF5Jyk7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnJlZnJlc2hWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0RGF0ZXMoc3RhcnREYXRlOiBEYXRlLCBuOiBudW1iZXIpOiBEYXRlW10ge1xyXG4gICAgY29uc3QgZGF0ZXM6IERhdGVbXSA9IG5ldyBBcnJheShuKTtcclxuICAgIGxldCBjdXJyZW50ID0gbmV3IERhdGUoc3RhcnREYXRlLmdldFRpbWUoKSk7XHJcbiAgICBsZXQgaSA9IDA7XHJcbiAgICBsZXQgZGF0ZTogRGF0ZTtcclxuICAgIHdoaWxlIChpIDwgbikge1xyXG4gICAgICBkYXRlID0gbmV3IERhdGUoY3VycmVudC5nZXRUaW1lKCkpO1xyXG4gICAgICBkYXRlID0gdGhpcy5kYXRlUGlja2VyLmZpeFRpbWVab25lKGRhdGUpO1xyXG4gICAgICBkYXRlc1tpKytdID0gZGF0ZTtcclxuICAgICAgY3VycmVudCA9IG5ldyBEYXRlKFxyXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgZGF0ZS5nZXREYXRlKCkgKyAxXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZXM7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0SVNPODYwMVdlZWtOdW1iZXIoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgICBjb25zdCBjaGVja0RhdGUgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XHJcbiAgICAvLyBUaHVyc2RheVxyXG4gICAgY2hlY2tEYXRlLnNldERhdGUoY2hlY2tEYXRlLmdldERhdGUoKSArIDQgLSAoY2hlY2tEYXRlLmdldERheSgpIHx8IDcpKTtcclxuICAgIGNvbnN0IHRpbWUgPSBjaGVja0RhdGUuZ2V0VGltZSgpO1xyXG4gICAgLy8gQ29tcGFyZSB3aXRoIEphbiAxXHJcbiAgICBjaGVja0RhdGUuc2V0TW9udGgoMCk7XHJcbiAgICBjaGVja0RhdGUuc2V0RGF0ZSgxKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIE1hdGguZmxvb3IoTWF0aC5yb3VuZCgodGltZSAtIGNoZWNrRGF0ZS5nZXRUaW1lKCkpIC8gODY0MDAwMDApIC8gNykgKyAxXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzoga2V5IGV2ZW50cyBpbXBsZW1lbnRhdGlvblxyXG59XHJcbiIsIi8vIEBkZXByZWNhdGVkXHJcbi8vIHRzbGludDpkaXNhYmxlXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbW9udGhwaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGU9PT0nbW9udGgnXCIgcm9sZT1cImdyaWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+w6LCgMK5PC9idXR0b24+PC90aD5cclxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiKChkYXRlUGlja2VyLm1vbnRoQ29sTGltaXQgLSAyKSA8PSAwKSA/IDEgOiBkYXRlUGlja2VyLm1vbnRoQ29sTGltaXQgLSAyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gbWF4TW9kZVwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IG1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgIDxzdHJvbmc+e3sgdGl0bGUgfX08L3N0cm9uZz4gXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCujwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgPC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keT5cclxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93eiBvZiByb3dzXCI+XHJcbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2F0dHIuaWRdPVwiZHR6LnVpZFwiIFtuZ0NsYXNzXT1cImR0ei5jdXN0b21DbGFzc1wiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWluLXdpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tbGluayc6IGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkIHx8IChpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSksIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KX1cIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LXN1Y2Nlc3MnOiBpc0JzNCAmJiBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JzNCAmJiBkdHouY3VycmVudH1cIj57eyBkdHoubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9udGhQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcm93czogYW55W10gPSBbXTtcclxuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XHJcbiAgbWF4TW9kZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcclxuICAgIHRoaXMuZGF0ZVBpY2tlciA9IGRhdGVQaWNrZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIWlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwTW9udGggPSB7IHllYXJzOiAxIH07XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFJlZnJlc2hWaWV3SGFuZGxlcihmdW5jdGlvbigpOiB2b2lkIHtcclxuICAgICAgY29uc3QgbW9udGhzOiBhbnlbXSA9IG5ldyBBcnJheSgxMik7XHJcbiAgICAgIGNvbnN0IHllYXI6IG51bWJlciA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBsZXQgZGF0ZTogRGF0ZTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBpLCAxKTtcclxuICAgICAgICBkYXRlID0gdGhpcy5maXhUaW1lWm9uZShkYXRlKTtcclxuICAgICAgICBtb250aHNbaV0gPSB0aGlzLmNyZWF0ZURhdGVPYmplY3QoZGF0ZSwgdGhpcy5mb3JtYXRNb250aCk7XHJcbiAgICAgICAgbW9udGhzW2ldLnVpZCA9IHRoaXMudW5pcXVlSWQgKyAnLScgKyBpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnRpdGxlID0gdGhpcy5kYXRlRmlsdGVyKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5mb3JtYXRNb250aFRpdGxlKTtcclxuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdChtb250aHMsIHNlbGYuZGF0ZVBpY2tlci5tb250aENvbExpbWl0KTtcclxuICAgIH0sICdtb250aCcpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbihcclxuICAgICAgZGF0ZTE6IERhdGUsXHJcbiAgICAgIGRhdGUyOiBEYXRlXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICBjb25zdCBkMSA9IG5ldyBEYXRlKGRhdGUxLmdldEZ1bGxZZWFyKCksIGRhdGUxLmdldE1vbnRoKCkpO1xyXG4gICAgICBjb25zdCBkMiA9IG5ldyBEYXRlKGRhdGUyLmdldEZ1bGxZZWFyKCksIGRhdGUyLmdldE1vbnRoKCkpO1xyXG4gICAgICByZXR1cm4gZDEuZ2V0VGltZSgpIC0gZDIuZ2V0VGltZSgpO1xyXG4gICAgfSwgJ21vbnRoJyk7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnJlZnJlc2hWaWV3KCk7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBrZXkgZXZlbnRzIGltcGxlbWVudGF0aW9uXHJcbn1cclxuIiwiLy8gQGRlcHJlY2F0ZWRcclxuLy8gdHNsaW50OmRpc2FibGVcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd5ZWFycGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlPT09J3llYXInXCIgcm9sZT1cImdyaWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+w6LCgMK5PC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIigoZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQgLSAyKSA8PSAwKSA/IDEgOiBkYXRlUGlja2VyLnllYXJDb2xMaW1pdCAtIDJcIj5cclxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIiByb2xlPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZVwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZX1cIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxyXG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGg+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj7DosKAwro8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvd3ogb2Ygcm93c1wiPlxyXG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFthdHRyLmlkXT1cImR0ei51aWRcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYnRuLWxpbmsnOiBpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCB8fCAoaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eikpLCBkaXNhYmxlZDogZHR6LmRpc2FibGVkLCBhY3RpdmU6ICFpc0JzNCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eil9XCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIuc2VsZWN0KGR0ei5kYXRlKVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1zdWNjZXNzJzogaXNCczQgJiYgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCczQgJiYgZHR6LmN1cnJlbnR9XCI+e3sgZHR6LmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdCAuYnRuLWluZm8gLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFllYXJQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHJvd3M6IGFueVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5kYXRlUGlja2VyID0gZGF0ZVBpY2tlcjtcclxuICB9XHJcblxyXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNCczMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnN0ZXBZZWFyID0geyB5ZWFyczogdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSB9O1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHllYXJzOiBhbnlbXSA9IG5ldyBBcnJheSh0aGlzLnllYXJSYW5nZSk7XHJcbiAgICAgIGxldCBkYXRlOiBEYXRlO1xyXG4gICAgICBjb25zdCBzdGFydCA9IHNlbGYuZ2V0U3RhcnRpbmdZZWFyKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZWFyUmFuZ2U7IGkrKykge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShzdGFydCArIGksIDAsIDEpO1xyXG4gICAgICAgIGRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGUpO1xyXG4gICAgICAgIHllYXJzW2ldID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0WWVhcik7XHJcbiAgICAgICAgeWVhcnNbaV0udWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYudGl0bGUgPSBbeWVhcnNbMF0ubGFiZWwsIHllYXJzW3RoaXMueWVhclJhbmdlIC0gMV0ubGFiZWxdLmpvaW4oXHJcbiAgICAgICAgJyAtICdcclxuICAgICAgKTtcclxuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdCh5ZWFycywgc2VsZi5kYXRlUGlja2VyLnllYXJDb2xMaW1pdCk7XHJcbiAgICB9LCAneWVhcicpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbihcclxuICAgICAgZGF0ZTE6IERhdGUsXHJcbiAgICAgIGRhdGUyOiBEYXRlXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gZGF0ZTEuZ2V0RnVsbFllYXIoKSAtIGRhdGUyLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9LCAneWVhcicpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFN0YXJ0aW5nWWVhcih5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gdG9kbzogcGFyc2VJbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh5ZWFyIC0gMSkgLyB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlICogdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSArIDFcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXlQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RheXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNb250aFBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vbW9udGhwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgWWVhclBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4veWVhcnBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50LFxyXG4gICAgRGF5UGlja2VyQ29tcG9uZW50LFxyXG4gICAgTW9udGhQaWNrZXJDb21wb25lbnQsXHJcbiAgICBZZWFyUGlja2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBEYXRlUGlja2VyQ29tcG9uZW50LFxyXG4gICAgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50LFxyXG4gICAgRGF5UGlja2VyQ29tcG9uZW50LFxyXG4gICAgTW9udGhQaWNrZXJDb21wb25lbnQsXHJcbiAgICBZZWFyUGlja2VyQ29tcG9uZW50XHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXRlUGlja2VyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogRGF0ZXBpY2tlck1vZHVsZSwgcHJvdmlkZXJzOiBbRGF0ZXBpY2tlckNvbmZpZ10gfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImhlaWdodCIsIndpZHRoIiwic2hpZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBWUE7Ozs7O2dDQUVxQixLQUFLOzs7Ozs4QkF5Q1AsYUFBYTs7NkJBR2QsQ0FBQzs7OzsrQkFJQyxJQUFJOytCQUVKLEdBQUc7OzhCQUVKLEtBQUs7Ozs7Z0NBSUgsR0FBRzs7MEJBR1QsTUFBTTt5QkFDUCxNQUFNO3dCQUNQLEdBQUc7MEJBQ0QsTUFBTTt5QkFDUCxNQUFNOzJCQUNKLEdBQUc7Ozs7WUFuRWxCLFVBQVU7Ozs7Ozs7Ozs7QUNPWDs7aUNBS3VDLEVBQUU7Ozs7OztJQUV2QyxJQUFJLE9BQU8sQ0FBQyxLQUFXO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLEtBQVc7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBZTtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0Qzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFRRCxXQUFXLENBQUMsS0FBMkIsS0FBVTs7Ozs7SUFFakQsVUFBVSxDQUFDLEtBQXdCLEtBQVU7Ozs7O0lBRTdDLGVBQWUsQ0FBQyxLQUFxQixLQUFVOzs7OztJQUUvQyxnQkFBZ0IsQ0FBQyxLQUFvQixLQUFVOzs7OztJQUUvQyxpQkFBaUIsQ0FBQyxLQUFxQixLQUFVOzs7OztJQUVqRCxnQkFBZ0IsQ0FBQyxLQUFxQixLQUFVOzs7OztJQUVoRCxnQkFBZ0IsQ0FBQyxHQUFpQixLQUFVOzs7OztJQUU1QyxrQkFBa0IsQ0FBQyxLQUE0QixLQUFVOzs7OztJQUV6RCxpQkFBaUIsQ0FBQyxLQUE0QixLQUFVOzs7OztJQUd4RCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN6QjtDQUNGOzs7Ozs7QUN2RUQ7Ozs7SUFnQ0UsU0FBUztRQUNQLE9BQU8sRUFBRSxJQUFJLEVBQUUsbUJBQW1CLENBQUMsU0FBUyxFQUFFLENBQUM7S0FDaEQ7Ozs7SUFFRCxNQUFNO1FBQ0osT0FBTyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUM3Qzs7OztJQUVELElBQUk7UUFDRixPQUFPLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO0tBQzNDOzs7OztJQUVELE1BQU0sQ0FBQyxJQUFVO1FBQ2YsT0FBTztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNO1lBQ2hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztLQUNIOzs7OztJQUVELGNBQWMsQ0FBQyxLQUEyQjtRQUN4QyxPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGVBQWU7WUFDekMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQTRCO1FBQ3JDLE9BQU87WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsV0FBVztZQUNyQyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBYztRQUN6QixPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGVBQWU7WUFDekMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0g7Ozs7O0lBRUQsVUFBVSxDQUFDLE9BQWdDO1FBQ3pDLE9BQU87WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsV0FBVztZQUNyQyxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO0tBQ0g7Ozs7O0lBR0QsV0FBVyxDQUFDLEtBQWE7UUFDdkIsT0FBTztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxZQUFZO1lBQ3RDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFxQjtRQUM1QixPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLEtBQUs7WUFDL0IsT0FBTyxFQUFFLEtBQUssQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtTQUNsRCxDQUFDO0tBQ0g7Ozs7O0lBRUQsT0FBTyxDQUFDLElBQVU7UUFDaEIsT0FBTztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxZQUFZO1lBQ3RDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztLQUNIOzs7OztJQUVELE9BQU8sQ0FBQyxJQUFVO1FBQ2hCLE9BQU87WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsWUFBWTtZQUN0QyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7S0FDSDs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBYztRQUN6QixPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGdCQUFnQjtZQUMxQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7S0FDSDs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGlCQUFpQjtZQUMzQyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYztRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGVBQWU7WUFDekMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsT0FBTztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3BDLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUM7S0FDSDs7Z0NBMUgyQixxQ0FBcUM7NkJBQ3hDLHVDQUF1QzsyQkFDekMsd0JBQXdCOzZCQUN0QiwwQkFBMEI7c0NBQ2pCLDhCQUE4QjtrQ0FDbEMsK0JBQStCO2tDQUMvQixvQ0FBb0M7NEJBQzFDLHlCQUF5QjtzQ0FDZiwrQkFBK0I7bUNBRWxDLDJCQUEyQjttQ0FDM0IsMkJBQTJCO3VDQUN2QixnQ0FBZ0M7d0NBQy9CLGlDQUFpQztzQ0FDbkMsOEJBQThCO2lDQUVuQyxvQ0FBb0M7bUNBRWxDLHNDQUFzQzs7WUFwQnRFLFVBQVU7Ozs7Ozs7QUNWWDs7OEJBSzJCLElBQUk7dUJBQ1gsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLGNBQWMsQ0FBQzs2QkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7Ozs7O0lBRXZFLElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztLQUMzQjs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUNoQzs7Ozs7SUFFRCxHQUFHLENBQUMsTUFBYztRQUNoQixJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2pDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNCOzs7WUF4QkYsVUFBVTs7Ozs7OztBQ0hYOzs7OztJQXFDRSxZQUFvQixRQUE2QixFQUM3QjtRQURBLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzdCLG1CQUFjLEdBQWQsY0FBYztxQkFIRixFQUFFO0tBR3FCOzs7OztJQUV2RCxJQUFJLENBQUMsa0JBQXFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFFakMsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7O0lBSUQsUUFBUSxDQUFDLEtBQVc7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNuRDs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3hEOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFXO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFbkQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRW5ELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWU7UUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV4RCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUVELFdBQVcsQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFFdEQsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFHRCxVQUFVLENBQUMsT0FBMkI7UUFDcEMsdUJBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRXpELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7OztJQUdELFdBQVcsQ0FBQyxTQUF3QztRQUNsRCxTQUFTLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNO2FBQ2pDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQzthQUNwQyxJQUFJLENBQ0gsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQzNCLENBQUM7O1FBR0osU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTTthQUNuQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQzthQUM1QyxJQUFJLENBQ0gsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQzNCLENBQUM7O1FBR0osU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTTthQUNsQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQzthQUMzQyxJQUFJLENBQ0gsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ3pCLENBQUM7UUFFSixTQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxFLFNBQVMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU07YUFDNUIsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQ3RDLElBQUksQ0FDSCxHQUFHLENBQUMsZUFBZSxLQUFLLEVBQUMsZUFBZSxFQUFDLENBQUMsQ0FBQyxDQUM1QyxDQUFDO1FBRUosT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7O0lBR0QsZ0JBQWdCLENBQUMsU0FBd0M7UUFDdkQsU0FBUyxDQUFDLFdBQVcsR0FBRyxDQUFDLEtBQTJCO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDM0QsQ0FBQztRQUVGLFNBQVMsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUF3QjtZQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM5RCxDQUFDO1FBRUYsU0FBUyxDQUFDLGVBQWUsR0FBRyxDQUFDLEtBQXFCO1lBQ2hELHVCQUFNLEtBQUsscUJBQUcsS0FBSyxDQUFDLElBQW9CLENBQUEsQ0FBQztZQUN6QyxJQUFJLEtBQUssQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtnQkFDMUMsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwRCxLQUFLLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDbkMsQ0FBQztRQUVGLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEtBQXFCO1lBQ2xELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDeEMsQ0FBQztRQUVGLFNBQVMsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQXFCO1lBQ2pELEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7U0FDeEMsQ0FBQztRQUVGLFNBQVMsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEtBQTRCO1lBQzFELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUN2QixJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO29CQUMzQixJQUFJLEVBQUUsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7aUJBQzlCO2dCQUNELFFBQVEsRUFBRSxLQUFLO2FBQ2hCLENBQUMsQ0FDSCxDQUFDO1NBQ0gsQ0FBQztRQUVGLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLEtBQTRCO1lBQ3pELElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsT0FBTzthQUNSO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO2dCQUN2QixJQUFJLEVBQUU7b0JBQ0osSUFBSSxFQUFFLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2lCQUM5QjtnQkFDRCxRQUFRLEVBQUUsT0FBTzthQUNsQixDQUFDLENBQ0gsQ0FBQztTQUNILENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztLQUNiOzs7O0lBRUQsNkJBQTZCO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUk7WUFDcEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ2pELENBQUMsQ0FDSCxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xDLElBQUksQ0FDSCxNQUFNLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FDbkM7YUFDQSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUNwRSxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQ3RDLElBQUksQ0FDSCxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FDekI7YUFDQSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUNsRSxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ25DLElBQUksQ0FDSCxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FDdkM7YUFDQSxTQUFTLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUN6RSxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQ3BDLElBQUksQ0FDSCxNQUFNLENBQUMsYUFBYSxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FDekM7YUFDQSxTQUFTLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUMxRSxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUMvRCxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUM7YUFDekMsSUFBSSxDQUNILE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUMvRCxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxNQUFNO2FBQ1IsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xDLElBQUksQ0FDSCxNQUFNLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDckM7YUFDQSxTQUFTLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUN4RSxDQUFDOztRQUdGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWTthQUM3QixTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDOUUsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7SUFFRCxPQUFPO1FBQ0wsS0FBSyx1QkFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7S0FDRjs7O1lBeFBGLFVBQVU7Ozs7WUFsQkYsbUJBQW1CO1lBR25CLGVBQWU7Ozs7Ozs7QUNQeEIsQUFBTyx1QkFBTSxtQkFBbUIsR0FBcUI7SUFDbkQsS0FBSyxFQUFFLENBQUM7SUFDUixNQUFNLEVBQUUsQ0FBQztDQUNWLENBQUM7Ozs7OztBQ0dGLEFBZ0VBLHVCQUFNLFlBQVksR0FBMEIsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7QUFFOUUsQUFBTyx1QkFBTSxzQkFBc0IsR0FBc0IsTUFBTSxDQUFDLE1BQU0sQ0FDcEUsSUFBSSxrQkFBa0IsRUFBRSxFQUN4QjtJQUNFLE1BQU0sRUFBRSxJQUFJO0lBQ1osSUFBSSxFQUFFLFlBQVk7SUFDbEIsYUFBYSxFQUFFLEVBQUU7SUFDakIsZ0JBQWdCLEVBQUUsbUJBQW1CO0NBQ3RDLENBQ0YsQ0FBQzs7Ozs7O0FDcEZGOzs7OztBQVdBLGtDQUF5QyxJQUFVLEVBQ1YsT0FBb0M7SUFDM0UsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO1FBQ2xELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCx1QkFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLHVCQUFNLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRXBFLE9BQU8sU0FBUyxDQUFDLElBQUksRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Q0FDeEM7Ozs7OztBQUVELDZCQUFvQyxPQUFlLEVBQUUsaUJBQXlCO0lBQzVFLElBQUksaUJBQWlCLEtBQUssQ0FBQyxFQUFFO1FBQzNCLE9BQU8sT0FBTyxDQUFDO0tBQ2hCO0lBRUQsdUJBQU0sTUFBTSxHQUFHLE9BQU8sR0FBRyxpQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFL0MsT0FBTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDO0NBQ3pDOzs7Ozs7O0FBRUQseUJBQWdDLElBQVUsRUFBRSxHQUFTLEVBQUUsR0FBUztJQUM5RCx1QkFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuRSx1QkFBTSxRQUFRLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVwRSxPQUFPLFFBQVEsSUFBSSxRQUFRLENBQUM7Q0FDN0I7Ozs7Ozs7QUFFRCx3QkFBK0IsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQzdELHVCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xFLHVCQUFNLFFBQVEsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRW5FLE9BQU8sUUFBUSxJQUFJLFFBQVEsQ0FBQztDQUM3Qjs7Ozs7O0FBRUQsd0JBQStCLElBQVUsRUFBRSxhQUFxQjtJQUM5RCxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO1FBQzFFLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFrQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7Q0FDdkY7Ozs7OztBQ3JERDs7Ozs7O0FBV0Esc0JBQ0UsT0FBc0IsRUFDdEIsRUFBcUI7SUFFckIscUJBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7SUFDcEMsdUJBQU0sTUFBTSxHQUFVLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoRCxLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakQ7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7OztBQ3RCRDs7Ozs7QUFJQSwwQkFDRSxZQUFrQixFQUNsQixPQUF5QjtJQUV6Qix1QkFBTSxRQUFRLEdBQUcsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEQsdUJBQU0sV0FBVyxHQUFHLHdCQUF3QixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUVoRSx1QkFBTSxhQUFhLEdBQUc7UUFDcEIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO1FBQ3BCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTTtRQUN0QixXQUFXO1FBQ1gsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtLQUNsQixDQUFDO0lBQ0YsdUJBQU0sVUFBVSxHQUFHLFlBQVksQ0FBTyxhQUFhLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBRW5FLE9BQU87UUFDTCxVQUFVO1FBQ1YsS0FBSyxFQUFFLFFBQVE7S0FDaEIsQ0FBQztDQUNIOzs7Ozs7QUN0QkQ7Ozs7OztBQUVBLDRCQUFtQyxZQUErQixFQUMvQixhQUFzQyxFQUN0QyxVQUFrQjtJQUNuRCxPQUFPO1FBQ0wsS0FBSyxFQUFFLFlBQVksQ0FBQyxLQUFLO1FBQ3pCLFVBQVUsRUFBRSxVQUFVLENBQ3BCLFlBQVksQ0FBQyxLQUFLLEVBQ2xCLGFBQWEsQ0FBQyxVQUFVLEVBQ3hCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO1FBQ0QsU0FBUyxFQUFFLFVBQVUsQ0FDbkIsWUFBWSxDQUFDLEtBQUssRUFDbEIsYUFBYSxDQUFDLFNBQVMsRUFDdkIsYUFBYSxDQUFDLE1BQU0sQ0FDckI7UUFDRCxXQUFXLEVBQUUsY0FBYyxDQUN6QixZQUFZLENBQUMsVUFBVSxFQUN2QixhQUFhLENBQUMsV0FBVyxFQUN6QixhQUFhLENBQUMsTUFBTSxDQUNyQjtRQUNELFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO1FBQ2xELEtBQUssRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQVksRUFBRSxTQUFpQixNQUFNO1lBQ3ZFLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBVSxFQUFFLFFBQWdCLE1BQU07Z0JBQ2hELElBQUk7Z0JBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyRSxVQUFVO2dCQUNWLFNBQVM7Z0JBQ1QsUUFBUTthQUNULENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSDs7Ozs7OztBQUVELHdCQUErQixVQUFvQixFQUNwQixNQUFjLEVBQ2QsTUFBYztJQUMzQyxPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQ25CLENBQUMsSUFBWSxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FDdkUsQ0FBQztDQUNIOzs7OztBQUVELDRCQUFtQyxNQUFjO0lBQy9DLHVCQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsdUJBQU0sUUFBUSxxQkFBRyxPQUFPLENBQUMsYUFBYSxFQUFjLENBQUEsQ0FBQztJQUNyRCx1QkFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBRWhELE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0NBQ2xGOzs7Ozs7QUNoREQ7Ozs7O0FBd0JBLDBCQUNFLGNBQXFDLEVBQ3JDLE9BQWdDO0lBRWhDLGNBQWMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBbUI7O1FBRS9DLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBaUIsRUFBRSxRQUFnQjs7WUFFcEQsdUJBQU0sWUFBWSxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRWxFLHVCQUFNLFNBQVMsR0FDYixDQUFDLFlBQVksSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBRTVELHVCQUFNLGdCQUFnQixHQUNwQixDQUFDLFlBQVk7Z0JBQ2IsT0FBTyxDQUFDLGFBQWE7Z0JBQ3JCLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRCx1QkFBTSxjQUFjLEdBQ2xCLENBQUMsWUFBWTtnQkFDYixPQUFPLENBQUMsYUFBYTtnQkFDckIsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBRWhELHVCQUFNLFVBQVUsR0FDZCxDQUFDLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUM7Z0JBQzNELGdCQUFnQjtnQkFDaEIsY0FBYyxDQUFDO1lBRWpCLHVCQUFNLFNBQVMsR0FDYixDQUFDLFlBQVk7Z0JBQ2IsT0FBTyxDQUFDLGFBQWE7Z0JBQ3JCLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRXRFLHVCQUFNLFVBQVUsR0FDZCxPQUFPLENBQUMsVUFBVTtnQkFDbEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDO2dCQUN6QyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDO2dCQUM3QyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFbEQsdUJBQU0sV0FBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7WUFDL0IsdUJBQU0sT0FBTyxHQUFHLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOztZQUdsRSx1QkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxFQUFFO2dCQUNwQyxZQUFZO2dCQUNaLFNBQVM7Z0JBQ1QsVUFBVTtnQkFDVixnQkFBZ0I7Z0JBQ2hCLGNBQWM7Z0JBQ2QsU0FBUztnQkFDVCxVQUFVO2dCQUNWLE9BQU87YUFDUixDQUFDLENBQUM7WUFFSCxJQUNFLEdBQUcsQ0FBQyxZQUFZLEtBQUssTUFBTSxDQUFDLFlBQVk7Z0JBQ3hDLEdBQUcsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLFNBQVM7Z0JBQ2xDLEdBQUcsQ0FBQyxVQUFVLEtBQUssTUFBTSxDQUFDLFVBQVU7Z0JBQ3BDLEdBQUcsQ0FBQyxnQkFBZ0IsS0FBSyxNQUFNLENBQUMsZ0JBQWdCO2dCQUNoRCxHQUFHLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQyxjQUFjO2dCQUM1QyxHQUFHLENBQUMsVUFBVSxLQUFLLE1BQU0sQ0FBQyxVQUFVO2dCQUNwQyxHQUFHLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxTQUMzQixFQUFFO2dCQUNBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO2FBQzlCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FBQyxDQUFDOztJQUdILGNBQWMsQ0FBQyxhQUFhO1FBQzFCLE9BQU8sQ0FBQyxVQUFVO2FBQ2pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzNFLGNBQWMsQ0FBQyxjQUFjO1FBQzNCLE9BQU8sQ0FBQyxVQUFVO2FBQ2pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLGFBQWE7Z0JBQ3pDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV0RCxjQUFjLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUMvQyxTQUFTLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQzlDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUNGLGNBQWMsQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQ2hELFNBQVMsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQzdDLE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUVGLE9BQU8sY0FBYyxDQUFDO0NBQ3ZCOzs7Ozs7O0FBRUQsdUJBQ0UsSUFBVSxFQUNWLGFBQXFCLEVBQ3JCLFdBQWlCO0lBRWpCLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDOUIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8sSUFBSSxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsSUFBSSxXQUFXLEVBQUU7UUFDZixPQUFPLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLFdBQVcsQ0FBQztLQUN2RDtJQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2Q7Ozs7Ozs7Ozs7O0FDeklELHVCQUE4QixJQUEwQixFQUFFLE9BQThCO0lBQ3RGLE9BQU8sT0FBTyxHQUFHLElBQUksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0NBQ3pDOzs7Ozs7QUNDRCxBQUdBLHVCQUFNLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDakIsdUJBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNoQix1QkFBTSxLQUFLLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7OztBQUUzQiw4QkFDRSxRQUFjLEVBQ2QsYUFBc0M7SUFFdEMsdUJBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUMsdUJBQU0sYUFBYSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDNUQsdUJBQU0sV0FBVyxHQUFHLFlBQVksQ0FFOUIsYUFBYSxFQUFFLElBQUksS0FBSztRQUN4QixJQUFJO1FBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO0tBQ3hFLENBQUMsQ0FBQyxDQUFDO0lBRUosT0FBTztRQUNMLE1BQU0sRUFBRSxXQUFXO1FBQ25CLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLFVBQVUsQ0FDbkIsUUFBUSxFQUNSLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCO0tBQ0YsQ0FBQztDQUNIOzs7Ozs7QUNsQ0Q7Ozs7O0FBZ0JBLDRCQUNFLGFBQXNDLEVBQ3RDLE9BQWlDO0lBRWpDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUMxQixDQUFDLE1BQStCLEVBQUUsUUFBZ0I7UUFDaEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQTRCLEVBQUUsVUFBa0I7WUFDOUQsdUJBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNoRSx1QkFBTSxVQUFVLEdBQ2QsT0FBTyxDQUFDLFVBQVU7Z0JBQ2xCLGVBQWUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLHVCQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxTQUFTLEtBQUssRUFBRTtnQkFDNUMsU0FBUztnQkFDVCxVQUFVO2FBQ1gsQ0FBQyxDQUFDO1lBQ0gsSUFDRSxLQUFLLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxTQUFTO2dCQUN0QyxLQUFLLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUNoQyxFQUFFO2dCQUNBLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ3ZEO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FDRixDQUFDOztJQUdGLGFBQWEsQ0FBQyxhQUFhO1FBQ3pCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFVLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN6RSxhQUFhLENBQUMsY0FBYztRQUMxQixPQUFPLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxhQUFhO1lBQzFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFbkQsYUFBYSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FDN0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDeEQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO0lBQ0YsYUFBYSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FDOUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQ3ZELE9BQU8sQ0FBQyxPQUFPLEVBQ2YsT0FBTyxDQUFDLE9BQU8sQ0FDaEIsQ0FBQztJQUVGLE9BQU8sYUFBYSxDQUFDO0NBQ3RCOzs7Ozs7QUN2REQsQUFHQSx1QkFBTUEsUUFBTSxHQUFHLENBQUMsQ0FBQztBQUNqQix1QkFBTUMsT0FBSyxHQUFHLENBQUMsQ0FBQztBQUNoQixBQUFPLHVCQUFNLGdCQUFnQixHQUFHRCxRQUFNLEdBQUdDLE9BQUssQ0FBQztBQUMvQyx1QkFBTSxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNqRSx1QkFBTUMsT0FBSyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7QUFFMUIsNkJBQ0UsUUFBYyxFQUNkLGFBQXNDO0lBRXRDLHVCQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDaEUsdUJBQU0sYUFBYSxHQUFHLFNBQUVELE9BQUssVUFBRUQsUUFBTSxFQUFFLFdBQVcsU0FBRUUsT0FBSyxFQUFFLENBQUM7SUFDNUQsdUJBQU0sV0FBVyxHQUFHLFlBQVksQ0FFOUIsYUFBYSxFQUFFLElBQUksS0FBSztRQUN4QixJQUFJO1FBQ0osS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLFNBQVMsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDO0tBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBQ0osdUJBQU0sU0FBUyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVuRSxPQUFPO1FBQ0wsS0FBSyxFQUFFLFdBQVc7UUFDbEIsVUFBVSxFQUFFLEVBQUU7UUFDZCxTQUFTO0tBQ1YsQ0FBQztDQUNIOzs7Ozs7QUFFRCw4QkFDRSxXQUFzQyxFQUN0QyxhQUFzQztJQUV0Qyx1QkFBTSxJQUFJLEdBQUcsVUFBVSxDQUNyQixXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN0QixhQUFhLENBQUMsU0FBUyxFQUN2QixhQUFhLENBQUMsTUFBTSxDQUNyQixDQUFDO0lBQ0YsdUJBQU0sRUFBRSxHQUFHLFVBQVUsQ0FDbkIsV0FBVyxDQUFDRixRQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUNDLE9BQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ3ZDLGFBQWEsQ0FBQyxTQUFTLEVBQ3ZCLGFBQWEsQ0FBQyxNQUFNLENBQ3JCLENBQUM7SUFFRixPQUFPLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxDQUFDO0NBQzFCOzs7Ozs7QUNuREQ7Ozs7O0FBYUEsMkJBQ0UsYUFBcUMsRUFDckMsT0FBaUM7SUFFakMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLENBQUMsS0FBOEIsRUFBRSxRQUFnQjtRQUMvQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBMkIsRUFBRSxTQUFpQjtZQUMzRCx1QkFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdELHVCQUFNLFVBQVUsR0FDZCxPQUFPLENBQUMsVUFBVTtnQkFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFOUQsdUJBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxNQUFNLFNBQVMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDeEUsSUFDRSxJQUFJLENBQUMsU0FBUyxLQUFLLFFBQVEsQ0FBQyxTQUFTO2dCQUNyQyxJQUFJLENBQUMsVUFBVSxLQUFLLFFBQVEsQ0FBQyxVQUMvQixFQUFFO2dCQUNBLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDO2FBQ3JEO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FDRixDQUFDOztJQUdGLGFBQWEsQ0FBQyxhQUFhO1FBQ3pCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUN2RSxhQUFhLENBQUMsY0FBYztRQUMxQixPQUFPLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxhQUFhO1lBQ3pDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxhQUFhLENBQUM7SUFFbEQsYUFBYSxDQUFDLGdCQUFnQixHQUFHLGNBQWMsQ0FDN0MsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFDdkQsT0FBTyxDQUFDLE9BQU8sRUFDZixPQUFPLENBQUMsT0FBTyxDQUNoQixDQUFDO0lBQ0YsdUJBQU0sQ0FBQyxHQUFHLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUN6Qyx1QkFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLGFBQWEsQ0FBQyxpQkFBaUIsR0FBRyxjQUFjLENBQzlDLFNBQVMsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUN0RCxPQUFPLENBQUMsT0FBTyxFQUNmLE9BQU8sQ0FBQyxPQUFPLENBQ2hCLENBQUM7SUFFRixPQUFPLGFBQWEsQ0FBQztDQUN0Qjs7Ozs7O0FDeEREOzs7OztBQXlCQSw2QkFBb0MsS0FBSyxHQUFHLHNCQUFzQixFQUM5QixNQUFjO0lBQ2hELFFBQVEsTUFBTSxDQUFDLElBQUk7UUFDakIsS0FBSyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEMsT0FBTyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQztRQUVELEtBQUssbUJBQW1CLENBQUMsTUFBTSxFQUFFO1lBQy9CLE9BQU8sYUFBYSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNyQztRQUVELEtBQUssbUJBQW1CLENBQUMsSUFBSSxFQUFFO1lBQzdCLE9BQU8sV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuQztRQUVELEtBQUssbUJBQW1CLENBQUMsZUFBZSxFQUFFO1lBQ3hDLHVCQUFNLElBQUksR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRSx1QkFBTSxRQUFRLEdBQUc7Z0JBQ2YsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUk7b0JBQ3JCLElBQUk7aUJBQ0w7YUFDRixDQUFDO1lBRUYsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0M7UUFFRCxLQUFLLG1CQUFtQixDQUFDLFdBQVcsRUFBRTtZQUNwQyx1QkFBTSxPQUFPLEdBQTBCLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFFdEQsdUJBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQscUJBQUksUUFBUSxDQUFDO1lBQ2IscUJBQUksSUFBMEIsQ0FBQztZQUMvQixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDbEQsSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7Z0JBQ3hCLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNMLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkIsUUFBUSxHQUFHLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQzthQUN6RDtZQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsS0FBSyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUU7WUFDeEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDakQsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3Qix1QkFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUM1Qix1QkFBTSxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQztZQUUxQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUVELEtBQUssbUJBQW1CLENBQUMsS0FBSyxFQUFFO1lBQzlCLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQ2xFO1FBRUQsS0FBSyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUU7WUFDL0IsdUJBQU0sUUFBUSxHQUFHO2dCQUNmLFlBQVksRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDNUIsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2FBQ2pCLENBQUM7WUFFRix1QkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDN0IsdUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEQsdUJBQU0sSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUQsUUFBUSxDQUFDLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUUvQixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUVELEtBQUssbUJBQW1CLENBQUMsV0FBVyxFQUFFO1lBQ3BDLHVCQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDOztZQUVoQyx1QkFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ25FLHVCQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFFBQVEsQ0FBQyxLQUFLO21CQUMxRCxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLFdBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7bUJBQzlFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JCLHVCQUFNLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3hFLFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7O1lBRS9CLElBQUksUUFBUSxDQUFDLEtBQUssRUFBRTs7Z0JBRWxCLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDM0IsUUFBUSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUN6Qzs7Z0JBR0QsSUFBSSxRQUFRLENBQUMsS0FBSyxZQUFZLElBQUksRUFBRTtvQkFDbEMsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2lCQUN4Qzs7O2FBSUY7WUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQzs7UUFHRCxLQUFLLG1CQUFtQixDQUFDLFlBQVksRUFBRTtZQUNyQyx1QkFBTSxRQUFRLEdBQUc7Z0JBQ2YsYUFBYSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUM3QixJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUk7YUFDakIsQ0FBQztZQUVGLHVCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUM3Qix1QkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3JFLHVCQUFNLElBQUksR0FBRyxXQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlELFFBQVEsQ0FBQyxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFFL0IsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0M7UUFFRCxLQUFLLG1CQUFtQixDQUFDLFlBQVksRUFBRTtZQUNyQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRTtnQkFDOUIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPO2FBQ3hCLENBQUMsQ0FBQztTQUNKO1FBQ0QsS0FBSyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUU7WUFDckMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7Z0JBQzlCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTzthQUN4QixDQUFDLENBQUM7U0FDSjtRQUNELEtBQUssbUJBQW1CLENBQUMsZUFBZSxFQUFFO1lBQ3hDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFO2dCQUM5QixVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU87YUFDM0IsQ0FBQyxDQUFDO1NBQ0o7UUFFRDtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2hCO0NBQ0Y7Ozs7O0FBRUQsMEJBQTBCLEtBQXdCOztJQUVoRCx1QkFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7SUFFMUMscUJBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBRS9CLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1FBQzdCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNqRix1QkFBTSxXQUFXLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0MsS0FBSyxxQkFBSSxVQUFVLEdBQUcsQ0FBQyxFQUFFLFVBQVUsR0FBRyxhQUFhLEVBQUUsVUFBVSxFQUFFLEVBQUU7O1lBRWpFLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxnQkFBZ0IsQ0FDeEMsUUFBUSxFQUNSLEtBQUssQ0FBQyxnQkFBZ0IsQ0FDdkIsQ0FBQztZQUNGLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUM7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDbEQ7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUMvQix1QkFBTSxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsS0FDRSxxQkFBSSxhQUFhLEdBQUcsQ0FBQyxFQUNyQixhQUFhLEdBQUcsYUFBYSxFQUM3QixhQUFhLEVBQUUsRUFDZjs7WUFFQSxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsb0JBQW9CLENBQ2xELFFBQVEsRUFDUixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztZQUNGLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7S0FDckQ7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUM5Qix1QkFBTSxrQkFBa0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUVwRCxLQUNFLHFCQUFJLGFBQWEsR0FBRyxDQUFDLEVBQ3JCLGFBQWEsR0FBRyxhQUFhLEVBQzdCLGFBQWEsRUFBRSxFQUNmOztZQUVBLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxHQUFHLG1CQUFtQixDQUNyRCxRQUFRLEVBQ1IsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7WUFDRixRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7U0FDNUQ7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztLQUN6RDtJQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2Q7Ozs7OztBQUVELHVCQUF1QixLQUF3QixFQUN4QixNQUFjO0lBQ25DLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1FBQzdCLHVCQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQzlELGtCQUFrQixDQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FDL0QsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztLQUN0RDs7SUFHRCx1QkFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7O0lBRzFDLHFCQUFJLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUUvQixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtRQUMvQix1QkFBTSxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEQsS0FDRSxxQkFBSSxhQUFhLEdBQUcsQ0FBQyxFQUNyQixhQUFhLEdBQUcsYUFBYSxFQUM3QixhQUFhLEVBQUUsRUFDZjs7WUFFQSxjQUFjLENBQUMsYUFBYSxDQUFDLEdBQUcsb0JBQW9CLENBQ2xELFFBQVEsRUFDUixnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FDeEIsQ0FBQztZQUNGLFFBQVEsR0FBRyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0M7UUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7S0FDckQ7SUFFRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtRQUM5Qix1QkFBTSxrQkFBa0IsR0FBRyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRCxLQUNFLHFCQUFJLGFBQWEsR0FBRyxDQUFDLEVBQ3JCLGFBQWEsR0FBRyxhQUFhLEVBQzdCLGFBQWEsRUFBRSxFQUNmOztZQUVBLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxHQUFHLG1CQUFtQixDQUNyRCxRQUFRLEVBQ1IsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQ3hCLENBQUM7WUFDRixRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7S0FDekQ7SUFFRCxPQUFPLEtBQUssQ0FBQztDQUNkOzs7Ozs7QUFFRCxxQkFBcUIsS0FBd0IsRUFDeEIsTUFBYztJQUNqQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtRQUM3Qix1QkFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQzdDLENBQUMsY0FBYyxFQUFFLFVBQVUsS0FDekIsZ0JBQWdCLENBQUMsY0FBYyxFQUFFO1lBQy9CLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDbEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFVBQVU7U0FDWCxDQUFDLENBQ0wsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQztLQUNwRDtJQUVELElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1FBQy9CLHVCQUFNLHFCQUFxQixHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUNwRCxDQUFDLGNBQWMsRUFBRSxVQUFVLEtBQ3pCLGtCQUFrQixDQUFDLGNBQWMsRUFBRTtZQUNqQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7WUFDNUIsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO1lBQ3RCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7WUFDaEMsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLFVBQVU7U0FDWCxDQUFDLENBQ0wsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0tBQzVEO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUU7UUFDOUIsdUJBQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FDdkQsQ0FBQyxjQUFjLEVBQUUsU0FBUyxLQUN4QixpQkFBaUIsQ0FBQyxjQUFjLEVBQUU7WUFDaEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixPQUFPLEVBQUUsS0FBSyxDQUFDLE9BQU87WUFDdEIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxTQUFTO1NBQ1YsQ0FBQyxDQUNMLENBQUM7UUFFRixPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQztLQUMzRDtJQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2Q7Ozs7O0FBRUQsMEJBQTBCLEtBQXdCO0lBQ2hELE9BQU87UUFDTCxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07UUFFcEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1FBQzVCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUUxQixRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVE7UUFDeEIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1FBQzVCLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztRQUUxQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7S0FDL0IsQ0FBQztDQUNIOzs7Ozs7Ozs7OztBQVFELHFCQUFxQixRQUF1QixFQUFFLE9BQWEsRUFBRSxPQUFhO0lBQ3hFLHVCQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7SUFFL0QsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0MsT0FBTyxPQUFPLENBQUM7S0FDaEI7SUFFRCxJQUFJLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtRQUM5QyxPQUFPLE9BQU8sQ0FBQztLQUNoQjtJQUVELE9BQU8sS0FBSyxDQUFDO0NBQ2Q7Ozs7OztBQ2pYRCx1QkFPK0IsU0FBUSxTQUE0QjtJQUNqRTtRQUNFLHVCQUFNLFdBQVcsR0FBRyxJQUFJLGVBQWUsQ0FBUztZQUM5QyxJQUFJLEVBQUUsOEJBQThCO1NBQ3JDLENBQUMsQ0FBQztRQUNILHVCQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsQ0FDekIsc0JBQXNCLEVBQ3RCLFdBQVcsRUFDWCxtQkFBbUIsQ0FDcEIsQ0FBQztRQUNGLEtBQUssQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEQ7OztZQVpGLFVBQVU7Ozs7Ozs7OztBQ05YLG9DQXVCNEMsU0FBUSw2QkFBNkI7Ozs7Ozs7O0lBUS9FLFlBQ1UsU0FDQSxRQUNBLFVBQ1IsUUFBNkIsRUFDckI7UUFFUixLQUFLLEVBQUUsQ0FBQztRQU5BLFlBQU8sR0FBUCxPQUFPO1FBQ1AsV0FBTSxHQUFOLE1BQU07UUFDTixhQUFRLEdBQVIsUUFBUTtRQUVSLHFCQUFnQixHQUFoQixnQkFBZ0I7MkJBUlEsSUFBSSxZQUFZLEVBQVE7cUJBRWxDLEVBQUU7UUFTeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7Ozs7O0lBZkQsSUFBSSxLQUFLLENBQUMsS0FBVztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUMvQjs7OztJQWVELFFBQVE7UUFDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1lBQy9CLFNBQVMsRUFBRTtnQkFDVCxJQUFJLEVBQUU7b0JBQ0osT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCO2lCQUN2QzthQUNGO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUTthQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBRWpCLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBRXhCLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFFakIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDO2FBQ3RCLDZCQUE2QixFQUFFLENBQUM7OztRQUluQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsTUFBTTthQUVSLE1BQU0sQ0FBQyxDQUFDLEtBQVUsS0FBSyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBRTFDLFNBQVMsQ0FBQyxDQUFDLElBQVMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0tBQ0g7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsR0FBaUI7UUFDaEMsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBHLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFRCxXQUFXO1FBQ1QsS0FBSyx1QkFBTSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQ3pCOzs7WUE3RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDO2dCQUNuRCxpakZBQXdDO2dCQUN4QyxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUFFLDBCQUEwQjtvQkFDckMsS0FBSyxFQUFFLHFDQUFxQztvQkFDNUMsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsWUFBWSxFQUFFLFVBQVU7aUJBQ3pCO2FBQ0Y7Ozs7WUFuQlEsa0JBQWtCO1lBSWxCLGlCQUFpQjtZQUZqQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBRW5CLGtCQUFrQjs7Ozs7OztBQ1IzQjs7Ozs7Ozs7SUFxSEUsWUFBbUIsT0FBMkIsRUFDbEMsV0FBdUIsRUFDdkIsU0FBb0IsRUFDcEIsaUJBQW1DLEVBQ25DLEdBQTJCO1FBSnBCLFlBQU8sR0FBUCxPQUFPLENBQW9COzs7O3lCQW5HWSxRQUFROzs7Ozt3QkFLOUMsT0FBTzs7Ozs0QkFJSCxJQUFJOzs7Ozt5QkFLUCxNQUFNOzBCQUVMLElBQUk7Ozs7NkJBNEVvQixJQUFJLFlBQVksRUFBRTtxQkFFOUIsRUFBRTs7UUFXbEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FDakMsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLENBQ1YsQ0FBQztRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztLQUMzQzs7Ozs7UUEzRkcsTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7Ozs7OztJQUdsQyxJQUFJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0tBQ0Y7Ozs7OztRQWtCRyxPQUFPLENBQUMsS0FBVztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQTREakMsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ3pELE9BQU87U0FDUjtRQUVELElBQUksT0FBTyxhQUFVO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxPQUFPLGFBQVU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFFRCxJQUFJLE9BQU8sa0JBQWU7WUFDeEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDL0Q7UUFFRCxJQUFJLE9BQU8sbUJBQWdCO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxPQUFPLGdCQUFhO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzNEO0tBQ0Y7Ozs7OztJQU1ELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ25DLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQzlELE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQzthQUN0QyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNsQixRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQzs7UUFHckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFXO1lBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDNUMsQ0FBQyxDQUNILENBQUM7O1FBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVc7WUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUNILENBQUM7S0FDSDs7Ozs7O0lBTUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7UUFDRCxLQUFLLHVCQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzVCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtLQUNGOzs7Ozs7SUFNRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYjs7Ozs7SUFLRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUQsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3BCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztZQUMvRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztZQUMvRCxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWTtZQUM5RSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtZQUNqRixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztTQUNoRSxDQUFDLENBQUM7S0FDSjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzVCOzs7WUEzT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRSxjQUFjO2FBQ3pCOzs7O1lBTlEsa0JBQWtCO1lBTkEsVUFBVTtZQUNSLFNBQVM7WUFBaUIsZ0JBQWdCO1lBRTdDLHNCQUFzQjs7OzBCQWM3QyxLQUFLO3lCQUtMLEtBQUs7NkJBSUwsS0FBSzswQkFLTCxLQUFLOzJCQUVMLEtBQUs7dUJBS0wsS0FBSzt3QkFpQkwsTUFBTTt5QkFLTixNQUFNO3dCQU1OLEtBQUs7eUJBWUwsS0FBSzsyQkFJTCxLQUFLO3dCQUlMLEtBQUs7d0JBSUwsS0FBSzt3QkFLTCxLQUFLOzZCQUtMLEtBQUs7OEJBS0wsS0FBSzs4QkFJTCxNQUFNOzs7Ozs7O0FDOUdULDhCQUlzQyxTQUFRLGtCQUFrQjs7O1lBRC9ELFVBQVU7Ozs7Ozs7QUNIWCwwQ0FtQmtELFNBQVEsOEJBQThCOzs7Ozs7OztJQUV0RixZQUNFLE9BQTJCLEVBQzNCLE1BQXlCLEVBQ3pCLFFBQTZCLEVBQzdCLFFBQTZCLEVBQzdCLG1CQUF1QztRQUV2QyxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUM7S0FDakU7OztZQW5CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztnQkFDMUMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ25ELGlqRkFBd0M7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxLQUFLLEVBQUUsd0JBQXdCO2lCQUNoQzthQUNGOzs7O1lBZlEsa0JBQWtCO1lBR2xCLGlCQUFpQjtZQUZqQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBR25CLGtCQUFrQjs7Ozs7OztBQ1IzQjs7Ozs7Ozs7SUEwREUsWUFBbUIsT0FBaUMsRUFDaEMsYUFDUixTQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsR0FBMkI7UUFKcEIsWUFBTyxHQUFQLE9BQU8sQ0FBMEI7UUFDaEMsZ0JBQVcsR0FBWCxXQUFXOzs7OzZCQVJlLElBQUksWUFBWSxFQUFFO3FCQUU5QixFQUFFOztRQVdsQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsWUFBWSxDQUNqQyxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFNBQVMsQ0FDVixDQUFDO0tBQ0g7Ozs7OztRQWxERyxPQUFPLENBQUMsS0FBVztRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQStDakMsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ25DLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQzlELE1BQU0sQ0FBQyxvQ0FBb0MsQ0FBQzthQUM1QyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNwQixJQUFJLEVBQUUsQ0FBQzs7UUFHVixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQVc7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUM1QyxDQUFDLENBQ0gsQ0FBQzs7UUFHRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVztZQUM3RCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUN0QixDQUFDLENBQ0gsQ0FBQztLQUNIOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ3pELE9BQU87U0FDUjtRQUVELElBQUksT0FBTyxhQUFVO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxPQUFPLGFBQVU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFFRCxJQUFJLE9BQU8sbUJBQWdCO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxPQUFPLGdCQUFhO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzNEO0tBQ0Y7Ozs7O0lBS0QsU0FBUztRQUNQLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzVELEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNwQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDL0QsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87WUFDL0QsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7U0FDbEYsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM1Qjs7O1lBM0hGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBTlEsd0JBQXdCO1lBTk4sVUFBVTtZQUNSLFNBQVM7WUFBaUIsZ0JBQWdCO1lBRTdDLHNCQUFzQjs7O3dCQWU3QyxLQUFLO3lCQVlMLEtBQUs7MkJBSUwsS0FBSzt3QkFJTCxLQUFLO3dCQUlMLEtBQUs7OEJBSUwsS0FBSzs4QkFJTCxNQUFNOzs7Ozs7O0FDbkRULEFBZ0NBLHVCQUFNLDRCQUE0QixHQUFhO0lBQzdDLE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSwwQkFBMEIsQ0FBQztJQUN6RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRix1QkFBTSx1QkFBdUIsR0FBYTtJQUN4QyxPQUFPLEVBQUUsYUFBYTs7SUFFdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxNQUFNLDBCQUEwQixDQUFDO0lBQ3pELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVdGOzs7Ozs7OztJQVFFLFlBQTRCLFNBQ1IsZ0JBQ0EsV0FDQSxRQUNBO1FBSlEsWUFBTyxHQUFQLE9BQU87UUFDZixtQkFBYyxHQUFkLGNBQWM7UUFDZCxjQUFTLEdBQVQsU0FBUztRQUNULFdBQU0sR0FBTixNQUFNO1FBQ04sb0JBQWUsR0FBZixlQUFlO3lCQVZmLFFBQVEsQ0FBQyxTQUFTOzBCQUNqQixRQUFRLENBQUMsU0FBUztnQ0FFWixRQUFRLENBQUMsU0FBUzs7UUFTM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBVztZQUMvQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JDLENBQUMsQ0FBQzs7UUFHSCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQVc7UUFDeEIsdUJBQU0sV0FBVyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUU7Y0FDM0IsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUUvRixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7S0FDN0U7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQVk7O1FBRW5CLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQUMsS0FBSyxDQUFDLE1BQWEsR0FBRSxLQUFLLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7Ozs7O0lBRUQsUUFBUSxDQUFDLENBQWtCO1FBQ3pCLHVCQUFNLE1BQU0sR0FBa0IsQ0FBQyxDQUFDLEtBQUssQ0FBQzs7UUFHdEMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTtZQUM1RCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEIsdUJBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNqQixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUM7YUFDeEM7WUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDMUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7YUFDdEQ7WUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDekYsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUM7YUFDdEQ7U0FDRjtLQUNGOzs7OztJQUVELHlCQUF5QixDQUFDLEVBQWM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztLQUM1Qjs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBb0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO2FBQU07WUFDTCx1QkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7WUFDckQsdUJBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNaLE1BQU0sSUFBSSxLQUFLLENBQ2IsV0FBVyxVQUFVLDBEQUEwRCxDQUNoRixDQUFDO2FBQ0g7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDekc7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BDOzs7OztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUNyQyxJQUFJLFVBQVUsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUUvRSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUN2RTs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFjO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQ3JCOzs7OztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7O0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ3BFOzs7WUEzSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLElBQUksRUFBRTtvQkFDSixVQUFVLEVBQUUsa0JBQWtCO29CQUM5QixhQUFhLEVBQUUsUUFBUTtvQkFDdkIsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCO2dCQUNELFNBQVMsRUFBRSxDQUFDLDRCQUE0QixFQUFFLHVCQUF1QixDQUFDO2FBQ25FOzs7O1lBekJRLHFCQUFxQix1QkFrQ2YsSUFBSTtZQWpDVixlQUFlO1lBdkJ0QixTQUFTO1lBSlQsVUFBVTtZQUZWLGlCQUFpQjs7Ozs7OztBQ0RuQiw2QkFJcUMsU0FBUSxrQkFBa0I7Ozs7NkJBRTdDLENBQUM7Ozs7WUFIbEIsVUFBVTs7Ozs7OztBQ0hYLHlDQXdCaUQsU0FBUSw2QkFBNkI7Ozs7Ozs7O0lBVXBGLFlBQ0UsUUFBNkIsRUFDckIsVUFDQSxTQUNBLFFBQ0E7UUFFUixLQUFLLEVBQUUsQ0FBQztRQUxBLGFBQVEsR0FBUixRQUFRO1FBQ1IsWUFBTyxHQUFQLE9BQU87UUFDUCxXQUFNLEdBQU4sTUFBTTtRQUNOLHFCQUFnQixHQUFoQixnQkFBZ0I7MkJBVFosSUFBSSxZQUFZLEVBQVU7MkJBRWxCLEVBQUU7cUJBQ0EsRUFBRTtRQVN4QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztLQUMxQjs7Ozs7SUFqQkQsSUFBSSxLQUFLLENBQUMsS0FBYTtRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQzs7OztJQWlCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztZQUMvQixTQUFTLEVBQUU7Z0JBQ1QsSUFBSSxFQUFFO29CQUNKLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQjtpQkFDdkM7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7UUFDbEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVE7YUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUdqQixVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUV4QixXQUFXLENBQUMsSUFBSSxDQUFDO2FBRWpCLGdCQUFnQixDQUFDLElBQUksQ0FBQzthQUN0Qiw2QkFBNkIsRUFBRSxDQUFDOzs7UUFJbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07YUFDUixNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUM7YUFDcEMsU0FBUyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUNsRCxDQUFDO0tBQ0g7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsR0FBaUI7UUFDaEMsdUJBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxZQUFZLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXBHLElBQUksVUFBVSxFQUFFO1lBQ2QsT0FBTztTQUNSOzs7Ozs7UUFPRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVztnQkFDZCxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO3NCQUMzQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQztzQkFDL0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDbEI7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFbEUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FDdkI7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxLQUFLLHVCQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzVCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDekI7OztZQWxHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ25ELGlqRkFBd0M7Z0JBQ3hDLElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUsMEJBQTBCO29CQUNyQyxLQUFLLEVBQUUscUNBQXFDO29CQUM1QyxJQUFJLEVBQUUsUUFBUTtvQkFDZCxZQUFZLEVBQUUsVUFBVTtpQkFDekI7YUFDRjs7OztZQWpCUSxtQkFBbUI7WUFEbkIsbUJBQW1CO1lBRm5CLGtCQUFrQjtZQUlsQixpQkFBaUI7WUFDakIsa0JBQWtCOzs7Ozs7O0FDUjNCOzs7Ozs7OztJQXNIRSxZQUFtQixPQUFnQyxFQUN2QyxXQUF1QixFQUN2QixTQUFvQixFQUNwQixpQkFBbUMsRUFDbkMsR0FBMkI7UUFKcEIsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7Ozs7eUJBeEZPLFFBQVE7Ozs7O3dCQUs5QyxPQUFPOzs7OzRCQUlILElBQUk7Ozs7O3lCQUtQLE1BQU07MEJBRUwsSUFBSTs7Ozs2QkFpRXNCLElBQUksWUFBWSxFQUFFO3FCQUVoQyxFQUFFO1FBVWxDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FDakMsV0FBVyxFQUNYLGlCQUFpQixFQUNqQixTQUFTLENBQ1YsQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQztLQUMzQzs7Ozs7UUEvRUcsTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7Ozs7OztJQUdsQyxJQUFJLE1BQU0sQ0FBQyxLQUFjO1FBQ3ZCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2I7YUFBTTtZQUNMLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO0tBQ0Y7Ozs7OztRQWtCRyxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzNCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDOzs7OztJQWdEakMsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO1lBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUU7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0tBQ2xCOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ3pELE9BQU87U0FDUjtRQUVELElBQUksT0FBTyxhQUFVO1lBQ25CLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBRUQsSUFBSSxPQUFPLGFBQVU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckQ7UUFFRCxJQUFJLE9BQU8sbUJBQWdCO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ2pFO1FBRUQsSUFBSSxPQUFPLGdCQUFhO1lBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzNEO0tBQ0Y7Ozs7OztJQU1ELElBQUk7UUFDRixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQ25DLE9BQU8sQ0FBQyxFQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBQyxDQUFDO2FBQzlELE1BQU0sQ0FBQyxtQ0FBbUMsQ0FBQzthQUMzQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNsQixRQUFRLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDO2FBQ3RDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQzs7UUFHckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFhO1lBQ3pDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDNUMsQ0FBQyxDQUNILENBQUM7O1FBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVzthQUNyQyxJQUFJLENBQ0gsTUFBTSxDQUFDLENBQUMsS0FBYSxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUMzRDthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWE7WUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2IsQ0FBQyxDQUNMLENBQUM7S0FDSDs7Ozs7SUFLRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUMxQixFQUFFLEVBQ0YsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsUUFBUSxFQUNiO1lBQ0UsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3BCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztZQUMvRCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTztZQUMvRCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYTtTQUNsRixDQUNGLENBQUM7S0FDSDs7Ozs7O0lBTUQsSUFBSTtRQUNGLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7UUFDRCxLQUFLLHVCQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzVCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQjtLQUNGOzs7Ozs7SUFNRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDcEI7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDYjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO0tBQzVCOzs7WUFuT0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFWUSx1QkFBdUI7WUFYOUIsVUFBVTtZQU9WLFNBQVM7WUFFVCxnQkFBZ0I7WUFLVCxzQkFBc0I7OzswQkFhNUIsS0FBSzt5QkFLTCxLQUFLOzZCQUlMLEtBQUs7MEJBS0wsS0FBSzsyQkFFTCxLQUFLO3VCQUtMLEtBQUs7d0JBaUJMLE1BQU07eUJBS04sTUFBTTt3QkFNTixLQUFLO3lCQVlMLEtBQUs7MkJBSUwsS0FBSzt3QkFJTCxLQUFLO3dCQUlMLEtBQUs7OEJBSUwsS0FBSzs4QkFJTCxNQUFNOzs7Ozs7O0FDL0dULEFBcUJBLHVCQUFNLGlDQUFpQyxHQUFhO0lBQ2xELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSwrQkFBK0IsQ0FBQztJQUM5RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRix1QkFBTSw0QkFBNEIsR0FBYTtJQUM3QyxPQUFPLEVBQUUsYUFBYTs7SUFFdEIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxNQUFNLCtCQUErQixDQUFDO0lBQzlELEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQVlGOzs7Ozs7OztJQVFFLFlBQTRCLFNBQ1IsZ0JBQ0EsV0FDQSxRQUNBO1FBSlEsWUFBTyxHQUFQLE9BQU87UUFDZixtQkFBYyxHQUFkLGNBQWM7UUFDZCxjQUFTLEdBQVQsU0FBUztRQUNULFdBQU0sR0FBTixNQUFNO1FBQ04sb0JBQWUsR0FBZixlQUFlO3lCQVZmLFFBQVEsQ0FBQyxTQUFTOzBCQUNqQixRQUFRLENBQUMsU0FBUztnQ0FFWixRQUFRLENBQUMsU0FBUzs7UUFTM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBYTtZQUNqRCxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JDLENBQUMsQ0FBQzs7UUFHSCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7WUFDekMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbEMsQ0FBQyxDQUFDO0tBQ0o7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDekIscUJBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksSUFBSSxFQUFFO1lBQ1IsdUJBQU0sS0FBSyxHQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7a0JBQy9CLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ2xCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FDbEMsQ0FBQztZQUNKLHVCQUFNLEdBQUcsR0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO2tCQUM3QixVQUFVLENBQ1YsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FDbEMsQ0FBQztZQUNKLEtBQUssR0FBRyxDQUFDLEtBQUssSUFBSSxHQUFHLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGNBQWMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ2pGO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ3ZFOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFZOztRQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFDLEtBQUssQ0FBQyxNQUFhLEdBQUUsS0FBSyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQ25COzs7OztJQUVELFFBQVEsQ0FBQyxDQUFrQjtRQUN6Qix1QkFBTSxNQUFNLEdBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFckMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0QsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELHVCQUFNLGlCQUFpQixHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCx1QkFBTSxrQkFBa0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFbEQsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3RCLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN2QixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7U0FDM0M7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsRUFBRTtZQUM3RixPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztTQUN0RDtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzVGLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDO1NBQ3REO0tBQ0Y7Ozs7O0lBRUQseUJBQXlCLENBQUMsRUFBYztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0tBQzVCOzs7OztJQUVELFVBQVUsQ0FBQyxLQUFzQjtRQUMvQixJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFBTTtZQUNMLHVCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUNyRCx1QkFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1osTUFBTSxJQUFJLEtBQUssQ0FDYixXQUFXLFVBQVUsMERBQTBELENBQ2hGLENBQUM7YUFDSDtZQUVELHFCQUFJLE1BQU0sR0FBd0IsRUFBRSxDQUFDO1lBQ3JDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM3QixNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUMzRDtZQUVELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsTUFBTSxHQUFHLEtBQUssQ0FBQzthQUNoQjtZQUdELElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQUMsTUFBa0I7aUJBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQVksS0FDaEIsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztpQkFDMUYsR0FBRyxDQUFDLENBQUMsSUFBVSxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUMvRDtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7S0FDcEM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3JDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRS9FLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ3ZFOzs7OztJQUdELGdCQUFnQixDQUFDLEVBQWM7UUFDN0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7Ozs7O0lBR0QsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7S0FDbkI7Ozs7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDcEU7OztZQTFKRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsSUFBSSxFQUFFO29CQUNKLFVBQVUsRUFBRSxrQkFBa0I7b0JBQzlCLGFBQWEsRUFBRSxRQUFRO29CQUN2QixRQUFRLEVBQUUsVUFBVTtpQkFDckI7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsaUNBQWlDLEVBQUUsNEJBQTRCLENBQUM7YUFDN0U7Ozs7WUExQlEsMEJBQTBCLHVCQW1DcEIsSUFBSTtZQWxDVixlQUFlO1lBWnRCLFNBQVM7WUFKVCxVQUFVO1lBRlYsaUJBQWlCOzs7Ozs7O0FDRG5COzs7WUFFQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDthQUNGOzs7Ozs7O0FDcEJEOzs7WUFFQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLDhEQUE4RDthQUN6RTs7OztzQkFFRSxLQUFLOzs7Ozs7O0FDUFI7OztZQU9DLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixRQUFRLEVBQUU7Ozs7O0dBS1Q7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7bUNBRUUsS0FBSzt1QkFDTCxLQUFLOzs7Ozs7O0FDbkJSOzs7Ozs7SUE4QkUsWUFDVSxTQUNBLFFBQ0E7UUFGQSxZQUFPLEdBQVAsT0FBTztRQUNQLFdBQU0sR0FBTixNQUFNO1FBQ04sY0FBUyxHQUFULFNBQVM7S0FDZDs7OztJQUVMLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkY7S0FDRjs7O1lBNUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsSUFBSSxFQUFFO29CQUNKLGtCQUFrQixFQUFFLGdCQUFnQjtvQkFDcEMsd0JBQXdCLEVBQUUsZUFBZTtvQkFDekMsd0JBQXdCLEVBQUUsa0JBQWtCO29CQUM1QywrQkFBK0IsRUFBRSx5QkFBeUI7b0JBQzFELGtCQUFrQixFQUFFLGVBQWU7b0JBQ25DLHNCQUFzQixFQUFFLHNCQUFzQjtvQkFDOUMsb0JBQW9CLEVBQUUsb0JBQW9CO29CQUMxQyxrQkFBa0IsRUFBRSxnQkFBZ0I7aUJBQ3JDO2dCQUNELFFBQVEsRUFBRSxpQkFBaUI7YUFDNUI7Ozs7WUFqQlEsa0JBQWtCO1lBTnpCLFVBQVU7WUFHVixTQUFTOzs7b0JBc0JSLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QlI7OzBCQW1EeUIsSUFBSSxZQUFZLEVBQXlCOzBCQUN6QyxJQUFJLFlBQVksRUFBd0I7Ozs7OztJQUUvRCxLQUFLLENBQUMsSUFBYTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxHQUFHLHFCQUFxQixDQUFDLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxFQUFFLENBQzdELENBQUM7S0FDSDs7Ozs7SUFFRCxJQUFJLENBQUMsUUFBOEI7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDaEM7OztZQWpERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBOEJUO2FBQ0Y7Ozs7eUJBRUUsS0FBSzsyQkFFTCxNQUFNOzJCQUNOLE1BQU07Ozs7Ozs7QUNwRFQ7Ozs7SUEwRUUsWUFBb0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7MEJBVHhCLElBQUksWUFBWSxFQUFxQjswQkFDckMsSUFBSSxZQUFZLEVBQXdCO3dCQUUxQyxJQUFJLFlBQVksRUFBZ0I7dUJBQ2pDLElBQUksWUFBWSxFQUFrQjsyQkFDOUIsSUFBSSxZQUFZLEVBQWlCO0tBSUw7Ozs7O0lBRXBELFVBQVUsQ0FBQyxLQUE0QjtRQUNyQyx1QkFBTSxJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ2pEOzs7OztJQUVELGNBQWMsQ0FBQyxLQUEyQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3Qjs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBbUI7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDM0I7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQW1CO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM1QixPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJO2VBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7ZUFDWixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtlQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFO1lBRXRDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVqQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPO1NBQ1I7UUFFRCx1QkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFpQjtZQUNuRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CO2tCQUNwQyxDQUFDLEdBQUcsQ0FBQyxVQUFVO2tCQUNmLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7U0FDMUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDakM7Ozs7OztJQUVELGdCQUFnQixDQUFDLElBQW1CLEVBQUUsU0FBa0I7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUVELHVCQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQWlCO1lBQ3JELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0I7a0JBQ3BDLENBQUMsR0FBRyxDQUFDLFVBQVU7a0JBQ2YsQ0FBQyxHQUFHLENBQUMsWUFBWSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFFSCxJQUFJLGFBQWEsRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztZQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM3QjtLQUNGOzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBa0IsRUFBRSxTQUFrQjtRQUM3QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxRCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7O1lBNUhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCOztnQkFFakMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q1Q7YUFDRjs7OztZQTdDUSxrQkFBa0I7Ozt5QkErQ3hCLEtBQUs7d0JBQ0wsS0FBSzsyQkFFTCxNQUFNOzJCQUNOLE1BQU07eUJBRU4sTUFBTTt3QkFDTixNQUFNOzRCQUNOLE1BQU07Ozs7Ozs7QUN0RVQ7OzBCQXdDeUIsSUFBSSxZQUFZLEVBQXFCOzBCQUNyQyxJQUFJLFlBQVksRUFBd0I7d0JBRTFDLElBQUksWUFBWSxFQUF5Qjt1QkFDMUMsSUFBSSxZQUFZLEVBQWtCOzs7Ozs7SUFFdEQsVUFBVSxDQUFDLEtBQTRCO1FBQ3JDLHVCQUFNLElBQUksR0FBRyxxQkFBcUIsQ0FBQyxJQUFJLEtBQUssS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDaEQ7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQTRCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzNCOzs7Ozs7SUFFRCxVQUFVLENBQUMsSUFBMkIsRUFBRSxTQUFrQjtRQUN4RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUEyQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3Qjs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2FBQ0Y7Ozs7eUJBRUUsS0FBSzsyQkFFTCxNQUFNOzJCQUNOLE1BQU07eUJBRU4sTUFBTTt3QkFDTixNQUFNOzs7Ozs7O0FDM0NUOztvQkF5QlMsSUFBSTtxQkFDSCxDQUFDO3VCQUNDLENBQUM7Ozs7WUF6QlosU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDthQUNGOzs7Ozs7O0FDeEJEOzswQkF5Q3lCLElBQUksWUFBWSxFQUFxQjswQkFDckMsSUFBSSxZQUFZLEVBQXdCO3dCQUUxQyxJQUFJLFlBQVksRUFBeUI7dUJBQzFDLElBQUksWUFBWSxFQUFrQjs7Ozs7O0lBRXRELFVBQVUsQ0FBQyxLQUE0QjtRQUNyQyx1QkFBTSxJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxLQUFLLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ25FOzs7OztJQUVELFFBQVEsQ0FBQyxJQUEyQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjs7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQTJCLEVBQUUsU0FBa0I7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7Ozs7SUFFRCxjQUFjLENBQUMsS0FBMkI7UUFDeEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCVDthQUNGOzs7O3lCQUVFLEtBQUs7MkJBRUwsTUFBTTsyQkFDTixNQUFNO3lCQUVOLE1BQU07d0JBQ04sTUFBTTs7Ozs7OztBQzdDVCxBQStCQSx1QkFBTSxRQUFRLEdBQUc7SUFDZiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUVwQyxxQkFBcUI7SUFDckIsMEJBQTBCO0lBRTFCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFFMUIsMkJBQTJCO0NBQzVCLENBQUM7QUEwQkY7Ozs7SUFDRSxPQUFPLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1Qsc0JBQXNCO2dCQUN0QixrQkFBa0I7Z0JBQ2xCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLHVCQUF1QjtnQkFDdkIsd0JBQXdCO2dCQUN4QixtQkFBbUI7Z0JBQ25CLGVBQWU7YUFDaEI7U0FDRixDQUFDO0tBQ0g7OztZQXhDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUU7b0JBQ1osaUNBQWlDO29CQUNqQywwQkFBMEI7b0JBQzFCLG1DQUFtQztvQkFDbkMseUJBQXlCO29CQUV6Qix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1Qiw0QkFBNEI7b0JBRTVCLDBCQUEwQjtvQkFFMUIsR0FBRyxRQUFRO2lCQUNaO2dCQUNELGVBQWUsRUFBRTtvQkFDZiw4QkFBOEI7b0JBQzlCLG1DQUFtQztvQkFDbkMsb0NBQW9DO2lCQUNyQztnQkFDRCxPQUFPLEVBQUUsUUFBUTthQUNsQjs7Ozs7OztBQ3BFRDs7Ozs7OztJQUdFLE1BQU0sQ0FBQyxJQUFVLEVBQUUsTUFBYyxFQUFFLE1BQWM7UUFDL0MsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN6QztDQUNGOzs7Ozs7QUNMRDs7NkJBZ0RnRCxJQUFJLFlBQVksQ0FBTyxTQUFTLENBQUM7c0JBQ3hDLElBQUksWUFBWSxDQUFPLEtBQUssQ0FBQztnQ0FDbkIsSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDOzt1QkFHbkUsRUFBRTs7eUJBRUEsRUFBRTs7d0JBRUgsRUFBRTtxQkFJVSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDOzZCQUNYLElBQUksYUFBYSxFQUFFOzs7OztRQWF4RCxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDOzs7Ozs7SUFHMUIsSUFBSSxVQUFVLENBQUMsS0FBVztRQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztLQUMxQjs7OztJQUdELFFBQVE7O1FBRU4sSUFBSSxDQUFDLFFBQVEsR0FBSSxlQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFFcEUsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDbkM7YUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7OztJQUlELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLE9BQU8sZUFBWSxDQUFDO0tBQ3REOzs7OztJQUlELDJCQUEyQixDQUFDLFVBQWU7UUFDekMsSUFBSSxVQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFO1lBQ3pDLHVCQUFNLGFBQWEsR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1lBQy9DLElBQ0UsYUFBYTtnQkFDYixhQUFhLFlBQVksSUFBSTtnQkFDN0IsYUFBYSxDQUFDLE9BQU8sRUFBRSxLQUFLLFVBQVUsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUM3RCxFQUFFO2dCQUNBLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzdDO1NBQ0Y7S0FDRjs7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBaUIsRUFBRSxJQUFZO1FBQy9DLElBQUksSUFBSSxLQUFLLEtBQUssRUFBRTtZQUNsQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDO1NBQ2xDO1FBRUQsSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxPQUFPLENBQUM7U0FDcEM7UUFFRCxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE9BQU8sQ0FBQztTQUNuQztLQUNGOzs7Ozs7SUFFRCxPQUFPLENBQUMsS0FBVyxFQUFFLEtBQVc7UUFDOUIsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLEVBQUU7WUFDOUMsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMzRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0M7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDL0M7UUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM3RCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDOUM7UUFFRCxPQUFPLEtBQUssQ0FBQyxDQUFDO0tBQ2Y7Ozs7OztJQUVELHFCQUFxQixDQUFDLE9BQWlCLEVBQUUsSUFBWTtRQUNuRCxJQUFJLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDbEIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQztTQUN0QztRQUVELElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNwQixJQUFJLENBQUMsdUJBQXVCLEdBQUcsT0FBTyxDQUFDO1NBQ3hDO1FBRUQsSUFBSSxJQUFJLEtBQUssTUFBTSxFQUFFO1lBQ25CLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUM7U0FDdkM7S0FDRjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMvRCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5QjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLHVCQUF1QixFQUFFO1lBQ25FLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDakUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7U0FDL0I7S0FDRjs7Ozs7O0lBRUQsVUFBVSxDQUFDLElBQVUsRUFBRSxNQUFjO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDN0Q7Ozs7O0lBR0QsUUFBUSxDQUFDLFVBQWU7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFFbkMsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQUdELGdCQUFnQixDQUFDLElBQVUsRUFBRSxNQUFjOztRQUV6Qyx1QkFBTSxVQUFVLEdBQVEsRUFBRSxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDZixDQUFDO1FBQ0YsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwRCxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFELFVBQVUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyRSxPQUFPLFVBQVUsQ0FBQztLQUNuQjs7Ozs7O0lBR0QsS0FBSyxDQUFDLEdBQVUsRUFBRSxJQUFZOztRQUU1Qix1QkFBTSxNQUFNLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ2xDO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDZjs7Ozs7SUFRRCxXQUFXLENBQUMsSUFBVTtRQUNwQix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTlCLE9BQU8sSUFBSSxJQUFJLENBQ2IsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUNkLEtBQUssS0FBSyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQzdCLENBQUM7S0FDSDs7Ozs7O0lBRUQsTUFBTSxDQUFDLElBQVUsRUFBRSxRQUFRLEdBQUcsSUFBSTtRQUNoQyxJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUNqRDtZQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFDbEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUNmLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FDZixDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUM7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FDeEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUNsQixJQUFJLENBQUMsUUFBUSxFQUFFLEVBQ2YsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUNmLENBQUM7WUFDRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3BELElBQUksUUFBUSxFQUFFO2dCQUNaLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FDNUMsQ0FBQzthQUNIO1NBQ0Y7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELElBQUksQ0FBQyxTQUFpQjs7UUFFcEIscUJBQUksWUFBaUIsQ0FBQztRQUN0QixJQUFJLElBQUksQ0FBQyxjQUFjLEtBQUssS0FBSyxFQUFFO1lBQ2pDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQzdCO1FBRUQsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLE9BQU8sRUFBRTtZQUNuQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUMvQjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxNQUFNLEVBQUU7WUFDbEMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDOUI7UUFFRCxJQUFJLFlBQVksRUFBRTtZQUNoQix1QkFBTSxJQUFJLEdBQ1IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxTQUFTLElBQUksWUFBWSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN4RSx1QkFBTSxLQUFLLEdBQ1QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxTQUFTLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFM0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO0tBQ0Y7Ozs7O0lBRUQsVUFBVSxDQUFDLFVBQWtCO1FBQzNCLHVCQUFNLFNBQVMsR0FBRyxVQUFVLElBQUksQ0FBQyxDQUFDO1FBRWxDLElBQ0UsQ0FBQyxJQUFJLENBQUMsY0FBYyxLQUFLLElBQUksQ0FBQyxPQUFPLElBQUksU0FBUyxLQUFLLENBQUM7YUFDdkQsSUFBSSxDQUFDLGNBQWMsS0FBSyxJQUFJLENBQUMsT0FBTyxJQUFJLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FDM0QsRUFBRTtZQUNBLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFNBQVMsQ0FDcEQsQ0FBQztRQUNGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFUyxxQkFBcUIsQ0FBQyxJQUFVO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3JCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O1FBRUQsdUJBQU0saUJBQWlCLEdBS25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBZ0I7WUFDekMsUUFDRSxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzdDLFdBQVcsQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLGNBQWMsRUFDeEM7U0FDSCxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsT0FBTyxpQkFBaUIsS0FBSyxTQUFTLEdBQUcsRUFBRSxHQUFHLGlCQUFpQixDQUFDLEtBQUssQ0FBQztLQUN2RTs7Ozs7O0lBRVMsbUJBQW1CLENBQzNCLGFBQTJDLEVBQzNDLEtBQVc7UUFFWCxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtZQUN0RCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUVELElBQUksYUFBYSxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxJQUFJLGFBQWEsQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUM5RCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzVEO1FBRUQsSUFBSSxhQUFhLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUQsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMzRDtRQUVELE9BQU8sU0FBUyxDQUFDO0tBQ2xCOzs7OztJQUVTLFVBQVUsQ0FBQyxJQUFVO1FBQzdCLHFCQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUN2QixDQUFDLFlBQTBDO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN0RCxjQUFjLEdBQUcsSUFBSSxDQUFDO2lCQUN2QjthQUNGLENBQ0YsQ0FBQztTQUNIO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLGNBQWM7Z0JBQ1osY0FBYztvQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRDtRQUVELFFBQ0UsY0FBYzthQUNiLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyRCxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDdEQ7S0FDSDs7O1lBclhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7O0dBS1Q7YUFDRjs7Ozt1QkFFRSxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxLQUFLO3dCQUVMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7aUNBQ0wsS0FBSztpQ0FDTCxLQUFLO29DQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBRUwsTUFBTTt1QkFDTixNQUFNO2lDQUNOLE1BQU07MkJBd0JOLEtBQUs7Ozs7Ozs7QUMzRVI7O3NCQUlXLElBQUk7OEJBQ0ksS0FBSzsyQkFDUixDQUFDO3lCQUNILEVBQUU7dUJBQ0osS0FBSzt1QkFDTCxNQUFNO3lCQUNKLElBQUk7eUJBQ0osSUFBSTsyQkFDRixNQUFNOzBCQUNQLE1BQU07K0JBQ0QsSUFBSTs4QkFDTCxXQUFXO2dDQUNULE1BQU07Z0NBQ04sS0FBSzs2QkFDUixDQUFDOzRCQUNGLENBQUM7bUNBQ00sS0FBSzs7OztZQWxCNUIsVUFBVTs7Ozs7OztBQ0ZYLHVCQWFhLGlDQUFpQyxHQUFhO0lBQ3pELE9BQU8sRUFBRSxpQkFBaUI7O0lBRTFCLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0FBeUNGOzs7O0lBOEVFLFlBQVksTUFBd0I7Ozs7OEJBNUVWLEtBQUs7Ozs7eUJBWVYsSUFBSTs2QkEyQ1csSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDOzs7O2dDQUk5QixJQUFJLFlBQVksQ0FDckQsU0FBUyxDQUNWOzt3QkFNZSxRQUFRLENBQUMsU0FBUzs7eUJBRWpCLFFBQVEsQ0FBQyxTQUFTO29CQUlaLElBQUksSUFBSSxFQUFFO1FBSS9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7OztRQWpDRyxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUd2QyxJQUFJLFVBQVUsQ0FBQyxLQUFXO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7O0lBNkJELGdCQUFnQjtRQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVztRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCOzs7OztJQUVELGVBQWUsQ0FBQyxLQUFXO1FBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDOzs7OztJQUVELGtCQUFrQixDQUFDLEtBQVc7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFHRCxVQUFVLENBQUMsS0FBVTtRQUNuQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzNELE9BQU87U0FDUjtRQUNELElBQUksS0FBSyxJQUFJLEtBQUssWUFBWSxJQUFJLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRXRDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQ3BEOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQWM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7O1lBL0pGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDUDtnQkFDSCxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7OztZQTlDUSxnQkFBZ0I7OzsrQkFrRHRCLEtBQUs7eUJBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBRUwsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLOzJCQUVMLEtBQUs7Z0NBRUwsS0FBSzsrQkFFTCxLQUFLO2lDQUVMLEtBQUs7NEJBRUwsS0FBSzswQkFFTCxLQUFLO2lDQUVMLEtBQUs7b0NBRUwsS0FBSzs4QkFFTCxLQUFLOzZCQUVMLEtBQUs7NEJBRUwsS0FBSzs2QkFFTCxLQUFLOzRCQUVMLEtBQUs7MkJBR0wsS0FBSzs4QkFTTCxNQUFNO2lDQUlOLE1BQU07NEJBS04sU0FBUyxTQUFDLHdCQUF3Qjs7Ozs7OztBQzFIckM7Ozs7SUE0RkUsWUFBWSxVQUFvQztzQkFOaEMsRUFBRTtvQkFFSixFQUFFOzJCQUNRLEVBQUU7UUFJeEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDakI7Ozs7SUFNRCxRQUFRO1FBQ04sdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUV4QyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO1lBQ3BDLHVCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzNDLHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3pDLHVCQUFNLGVBQWUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pELHVCQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMvRCx1QkFBTSw2QkFBNkIsR0FDakMsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsVUFBVSxDQUFDO1lBQ2hELHVCQUFNLFNBQVMsR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUV0RCxJQUFJLDZCQUE2QixHQUFHLENBQUMsRUFBRTtnQkFDckMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLDZCQUE2QixHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEOztZQUdELHVCQUFNLEtBQUssR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCx1QkFBTSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3ZCLEtBQUsscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQix1QkFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3BFLFdBQVcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLEtBQUssQ0FBQztnQkFDdEQsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUM7YUFDdkI7WUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNqQixLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQ25DLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLGVBQWUsQ0FDckIsQ0FBQztnQkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDN0Q7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2dCQUN0Qix1QkFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO2dCQUNyRCx1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLEtBQUsscUJBQUksT0FBTyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFO29CQUNuRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQ2xFLENBQUM7aUJBQ0g7YUFDRjtTQUNGLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFVixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQ2hDLEtBQVcsRUFDWCxLQUFXO1lBRVgsdUJBQU0sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDNUUsdUJBQU0sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDNUUsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3BDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFVixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQy9COzs7Ozs7SUFFUyxRQUFRLENBQUMsU0FBZSxFQUFFLENBQVM7UUFDM0MsdUJBQU0sS0FBSyxHQUFXLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLHFCQUFJLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUM1QyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YscUJBQUksSUFBVSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ25DLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7WUFDbEIsT0FBTyxHQUFHLElBQUksSUFBSSxDQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLEVBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFDZixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUNuQixDQUFDO1NBQ0g7UUFDRCxPQUFPLEtBQUssQ0FBQztLQUNkOzs7OztJQUVTLG9CQUFvQixDQUFDLElBQVU7UUFDdkMsdUJBQU0sU0FBUyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDOztRQUUzQyxTQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLElBQUksU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsdUJBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7UUFFakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLFFBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQ3ZFO0tBQ0g7OztZQWxNRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpRVQ7eUJBRUM7Ozs7Ozs7OztHQVNEO2FBRUY7Ozs7O1lBbEZRLHdCQUF3Qjs7Ozs7OztBQ0ZqQzs7OztJQXlERSxZQUFZLFVBQW9DO29CQUpsQyxFQUFFO1FBS2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxRQUFRO1FBQ04sdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO1lBQ3BDLHVCQUFNLE1BQU0sR0FBVSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNwQyx1QkFBTSxJQUFJLEdBQVcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuRCxxQkFBSSxJQUFVLENBQUM7WUFFZixLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0IsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3pDO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQy9ELEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFWixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQ2hDLEtBQVcsRUFDWCxLQUFXO1lBRVgsdUJBQU0sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztZQUMzRCx1QkFBTSxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzNELE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRVosSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMvQjs7O1lBM0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1DVDt5QkFFQzs7OztHQUlEO2FBRUY7Ozs7O1lBL0NRLHdCQUF3Qjs7Ozs7OztBQ0hqQzs7OztJQXlERSxZQUFZLFVBQW9DO29CQUZsQyxFQUFFO1FBR2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxRQUFRO1FBQ04sdUJBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhFLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUM7WUFDcEMsdUJBQU0sS0FBSyxHQUFVLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxxQkFBSSxJQUFVLENBQUM7WUFDZix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFFbEUsS0FBSyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3hELEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO2FBQ3hDO1lBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUNqRSxLQUFLLENBQ04sQ0FBQztZQUNGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM3RCxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUNoQyxLQUFXLEVBQ1gsS0FBVztZQUVYLE9BQU8sS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsRCxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMvQjs7Ozs7SUFFUyxlQUFlLENBQUMsSUFBWTs7UUFFcEMsUUFDRSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUN0RTtLQUNIOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DVDt5QkFFQzs7OztHQUlEO2FBRUY7Ozs7WUFoRFEsd0JBQXdCOzs7Ozs7O0FDTGpDOzs7O0lBOEJFLE9BQU8sT0FBTztRQUNaLE9BQU8sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO0tBQ3RFOzs7WUFyQkYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLENBQUM7Z0JBQ3BDLFlBQVksRUFBRTtvQkFDWixtQkFBbUI7b0JBQ25CLHdCQUF3QjtvQkFDeEIsa0JBQWtCO29CQUNsQixvQkFBb0I7b0JBQ3BCLG1CQUFtQjtpQkFDcEI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLG1CQUFtQjtvQkFDbkIsd0JBQXdCO29CQUN4QixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsbUJBQW1CO2lCQUNwQjtnQkFDRCxlQUFlLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUN2Qzs7Ozs7Ozs7Ozs7Ozs7OyJ9