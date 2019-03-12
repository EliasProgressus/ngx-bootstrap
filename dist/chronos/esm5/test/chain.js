/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { add, subtract } from '../index';
import { getDate, getFullYear, getHours, getMilliseconds, getMinutes, getMonth, getSeconds } from '../utils/date-getters';
import { setDate, setFullYear, setHours, setMilliseconds, setMinutes, setMonth, setSeconds } from '../utils/date-setters';
import { cloneDate } from '../create/clone';
import { isArray, isBoolean, isDate, isDateValid, isFunction, isNumber, isObject, isString, isUndefined } from '../utils/type-checks';
import { formatDate } from '../format';
import { ISO_8601, RFC_2822 } from '../create/from-string-and-format';
import { getDateOffset, getUTCOffset, hasAlignedHourOffset, isDaylightSavingTime, setOffsetToParsedOffset, setUTCOffset } from '../units/offset';
import { isLeapYear, parseTwoDigitYear } from '../units/year';
import { isAfter, isBefore, isBetween, isSame, isSameOrAfter, isSameOrBefore } from '../utils/date-compare';
import { daysInMonth } from '../units/month';
import { getDayOfWeek, getISODayOfWeek, getLocaleDayOfWeek, parseWeekday, setDayOfWeek, setISODayOfWeek, setLocaleDayOfWeek } from '../units/day-of-week';
import { getISOWeek, getWeek, setISOWeek, setWeek } from '../units/week';
import { getISOWeeksInYear, getISOWeekYear, getSetISOWeekYear, getSetWeekYear, getWeeksInYear, getWeekYear } from '../units/week-year';
import { endOf, startOf } from '../utils/start-end-of';
import { getQuarter, setQuarter } from '../units/quarter';
import { getDayOfYear, setDayOfYear } from '../units/day-of-year';
import { getZoneAbbr, getZoneName } from '../units/timezone';
import { diff } from '../moment/diff';
import { calendar } from '../moment/calendar';
import { defineLocale, getLocale, getSetGlobalLocale, listLocales } from '../locale/locales';
import { max, min } from '../moment/min-max';
import { isDuration } from '../duration/constructor';
import { createLocalOrUTC } from '../create/from-anything';
import { createDuration } from '../duration/create';
export var /** @type {?} */ moment = (/** @type {?} */ (_moment));
/**
 * @record
 */
export function MomentFn() { }
function MomentFn_tsickle_Closure_declarations() {
    /* TODO: handle strange member:
    (input?: DateInput | Khronos, format?: string | string[], localeKey?: string | boolean, strict?: boolean, isUTC?: boolean): Khronos;
    */
    /** @type {?} */
    MomentFn.prototype.ISO_8601;
    /** @type {?} */
    MomentFn.prototype.RFC_2822;
    /** @type {?} */
    MomentFn.prototype.utc;
    /** @type {?} */
    MomentFn.prototype.parseZone;
    /** @type {?} */
    MomentFn.prototype.unix;
    /** @type {?} */
    MomentFn.prototype.locale;
    /** @type {?} */
    MomentFn.prototype.duration;
    /** @type {?} */
    MomentFn.prototype.defineLocale;
    /** @type {?} */
    MomentFn.prototype.parseTwoDigitYear;
    /** @type {?} */
    MomentFn.prototype.isDate;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.months;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.monthsShort;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdays;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysShort;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.weekdaysMin;
    /** @type {?} */
    MomentFn.prototype.relativeTimeThreshold;
    /** @type {?} */
    MomentFn.prototype.relativeTimeThreshold;
    /** @type {?} */
    MomentFn.prototype.min;
    /** @type {?} */
    MomentFn.prototype.max;
    /** @type {?} */
    MomentFn.prototype.localeData;
    /** @type {?} */
    MomentFn.prototype.updateLocale;
    /** @type {?} */
    MomentFn.prototype.calendarFormat;
    /** @type {?} */
    MomentFn.prototype.calendarFormat;
    /** @type {?} */
    MomentFn.prototype.invalid;
    /** @type {?} */
    MomentFn.prototype.locales;
    /** @type {?} */
    MomentFn.prototype.updateOffset;
}
/**
 * @param {?=} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function _moment(input, format, localeKey, strict, isUTC) {
    if (input instanceof Khronos) {
        var /** @type {?} */ _date = input.clone();
        return isUTC ? _date.utc() : _date;
    }
    if (isBoolean(localeKey)) {
        return new Khronos(input, format, null, localeKey, isUTC);
    }
    return new Khronos(input, format, localeKey, strict, isUTC);
}
moment.utc = function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true);
};
moment.parseZone = function (input, format, localeKey, strict) {
    return _moment(input, format, localeKey, strict, true).parseZone();
};
moment.locale = getSetGlobalLocale;
moment.localeData = function (key) {
    if (key instanceof Khronos) {
        return key.localeData();
    }
    return getLocale(key);
};
// moment.utc = createUTC;
moment.unix = function (inp) { return new Khronos(inp * 1000); };
moment.ISO_8601 = ISO_8601;
moment.RFC_2822 = RFC_2822;
moment.defineLocale = defineLocale;
moment.parseTwoDigitYear = parseTwoDigitYear;
moment.isDate = isDate;
moment.invalid = function _invalid() {
    return new Khronos(new Date(NaN));
};
// duration(inp?: Duration | DateInput | Khronos, unit?: MomentUnitOfTime): Duration;
moment.duration = function (input, unit) {
    var /** @type {?} */ _unit = mapUnitOfTime(unit);
    if (isDate(input)) {
        throw new Error('todo implement');
    }
    if (input == null) {
        return createDuration();
    }
    if (isDuration(input)) {
        return createDuration(input, _unit, { _locale: input._locale });
    }
    if (isString(input) || isNumber(input) || isDuration(input) || isObject(input)) {
        return createDuration(input, _unit);
    }
    throw new Error('todo implement');
};
moment.min = function _min() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    var /** @type {?} */ _firstArg = dates[0];
    var /** @type {?} */ _dates = (isArray(_firstArg) ? _firstArg : dates)
        .map(function (date) { return _moment(date); })
        .map(function (date) { return date.toDate(); });
    var /** @type {?} */ _date = min.apply(void 0, tslib_1.__spread(_dates));
    return new Khronos(_date);
};
moment.max = function _max() {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    var /** @type {?} */ _firstArg = dates[0];
    var /** @type {?} */ _dates = (isArray(_firstArg) ? _firstArg : dates)
        .map(function (date) { return _moment(date); })
        .map(function (date) { return date.toDate(); });
    var /** @type {?} */ _date = max.apply(void 0, tslib_1.__spread(_dates));
    return new Khronos(_date);
};
moment.locales = function () {
    return listLocales();
};
/**
 * @record
 */
export function MomentInputObject() { }
function MomentInputObject_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    MomentInputObject.prototype.years;
    /** @type {?|undefined} */
    MomentInputObject.prototype.year;
    /** @type {?|undefined} */
    MomentInputObject.prototype.y;
    /** @type {?|undefined} */
    MomentInputObject.prototype.months;
    /** @type {?|undefined} */
    MomentInputObject.prototype.month;
    /** @type {?|undefined} */
    MomentInputObject.prototype.M;
    /** @type {?|undefined} */
    MomentInputObject.prototype.days;
    /** @type {?|undefined} */
    MomentInputObject.prototype.day;
    /** @type {?|undefined} */
    MomentInputObject.prototype.d;
    /** @type {?|undefined} */
    MomentInputObject.prototype.dates;
    /** @type {?|undefined} */
    MomentInputObject.prototype.date;
    /** @type {?|undefined} */
    MomentInputObject.prototype.D;
    /** @type {?|undefined} */
    MomentInputObject.prototype.hours;
    /** @type {?|undefined} */
    MomentInputObject.prototype.hour;
    /** @type {?|undefined} */
    MomentInputObject.prototype.h;
    /** @type {?|undefined} */
    MomentInputObject.prototype.minutes;
    /** @type {?|undefined} */
    MomentInputObject.prototype.minute;
    /** @type {?|undefined} */
    MomentInputObject.prototype.m;
    /** @type {?|undefined} */
    MomentInputObject.prototype.seconds;
    /** @type {?|undefined} */
    MomentInputObject.prototype.second;
    /** @type {?|undefined} */
    MomentInputObject.prototype.s;
    /** @type {?|undefined} */
    MomentInputObject.prototype.milliseconds;
    /** @type {?|undefined} */
    MomentInputObject.prototype.millisecond;
    /** @type {?|undefined} */
    MomentInputObject.prototype.ms;
    /** @type {?|undefined} */
    MomentInputObject.prototype.w;
    /** @type {?|undefined} */
    MomentInputObject.prototype.week;
    /** @type {?|undefined} */
    MomentInputObject.prototype.weeks;
    /** @type {?|undefined} */
    MomentInputObject.prototype.Q;
    /** @type {?|undefined} */
    MomentInputObject.prototype.quarter;
    /** @type {?|undefined} */
    MomentInputObject.prototype.quarters;
    /** @type {?|undefined} */
    MomentInputObject.prototype.weekYear;
}
var /** @type {?} */ _unitsPriority = {
    year: 1,
    month: 8,
    week: 5,
    isoWeek: 5,
    day: 11,
    weekday: 11,
    isoWeekday: 11,
    hours: 13,
    weekYear: 1,
    isoWeekYear: 1,
    quarter: 7,
    date: 9,
    dayOfYear: 4,
    minutes: 14,
    seconds: 15,
    milliseconds: 16
};
// todo: do I need 2 mappers?
var /** @type {?} */ _timeHashMap = {
    y: 'year',
    years: 'year',
    year: 'year',
    M: 'month',
    months: 'month',
    month: 'month',
    w: 'week',
    weeks: 'week',
    week: 'week',
    d: 'day',
    days: 'day',
    day: 'day',
    date: 'date',
    dates: 'date',
    D: 'date',
    h: 'hours',
    hour: 'hours',
    hours: 'hours',
    m: 'minutes',
    minute: 'minutes',
    minutes: 'minutes',
    s: 'seconds',
    second: 'seconds',
    seconds: 'seconds',
    ms: 'milliseconds',
    millisecond: 'milliseconds',
    milliseconds: 'milliseconds',
    quarter: 'quarter',
    quarters: 'quarter',
    q: 'quarter',
    Q: 'quarter',
    isoWeek: 'isoWeek',
    isoWeeks: 'isoWeek',
    W: 'isoWeek',
    weekYear: 'weekYear',
    weekYears: 'weekYear',
    gg: 'weekYears',
    isoWeekYear: 'isoWeekYear',
    isoWeekYears: 'isoWeekYear',
    GG: 'isoWeekYear',
    dayOfYear: 'dayOfYear',
    dayOfYears: 'dayOfYear',
    DDD: 'dayOfYear',
    weekday: 'weekday',
    weekdays: 'weekday',
    e: 'weekday',
    isoWeekday: 'isoWeekday',
    isoWeekdays: 'isoWeekday',
    E: 'isoWeekday'
};
/**
 * @param {?} period
 * @return {?}
 */
function mapUnitOfTime(period) {
    return /** @type {?} */ (_timeHashMap[period]);
}
/**
 * @param {?} obj
 * @return {?}
 */
function mapMomentInputObject(obj) {
    var /** @type {?} */ _res = {};
    return Object.keys(obj)
        .reduce(function (res, key) {
        res[mapUnitOfTime(key)] = obj[key];
        return res;
    }, _res);
}
var Khronos = /** @class */ (function () {
    function Khronos(input, format, localeKey, strict, isUTC, offset) {
        if (strict === void 0) { strict = false; }
        if (isUTC === void 0) { isUTC = false; }
        this._date = new Date();
        this._isUTC = false;
        // locale will be needed to format invalid date message
        this._locale = getLocale(localeKey);
        // parse invalid input
        if (input === '' || input === null || (isNumber(input) && isNaN(input))) {
            this._date = new Date(NaN);
            return this;
        }
        this._isUTC = isUTC;
        if (this._isUTC) {
            this._offset = 0;
        }
        if (offset || offset === 0) {
            this._offset = offset;
        }
        this._isStrict = strict;
        this._format = format;
        if (!input && input !== 0 && !format) {
            this._date = new Date();
            return this;
        }
        if (isDate(input)) {
            this._date = cloneDate(input);
            return this;
        }
        // this._date = parseDate(input, format, localeKey, strict, isUTC);
        var /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
        this._date = config._d;
        this._offset = isNumber(config._offset) ? config._offset : this._offset;
        this._isUTC = config._isUTC;
        this._isStrict = config._strict;
        this._format = config._f;
        this._tzm = config._tzm;
    }
    /**
     * @return {?}
     */
    Khronos.prototype._toConfig = /**
     * @return {?}
     */
    function () {
        return { _isUTC: this._isUTC, _locale: this._locale, _offset: this._offset, _tzm: this._tzm };
    };
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    Khronos.prototype.locale = /**
     * @param {?=} localeKey
     * @return {?}
     */
    function (localeKey) {
        if (isUndefined(localeKey)) {
            return this._locale._abbr;
        }
        if (localeKey instanceof Khronos) {
            this._locale = localeKey._locale;
            return this;
        }
        var /** @type {?} */ newLocaleData = getLocale(localeKey);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.localeData = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    // Basic
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.add = /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    function (val, period) {
        var _this = this;
        if (isString(val)) {
            this._date = add(this._date, parseInt(val, 10), mapUnitOfTime(period));
        }
        if (isNumber(val)) {
            this._date = add(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            var /** @type {?} */ _mapped_1 = mapMomentInputObject(val);
            Object.keys(_mapped_1)
                .forEach(function (key) { return add(_this._date, _mapped_1[key], key); });
        }
        return this;
    };
    // fixme: for some reason here 'null' for time is fine
    /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    Khronos.prototype.calendar = /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    function (time, formats) {
        var /** @type {?} */ _time = time instanceof Khronos ? time : new Khronos(time || new Date());
        var /** @type {?} */ _offset = (this._offset || 0) - (_time._offset || 0);
        var /** @type {?} */ _config = Object.assign(this._toConfig(), { _offset: _offset });
        return calendar(this._date, _time._date, formats, this._locale, _config);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.clone = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ localeKey = this._locale && this._locale._abbr || 'en';
        // return new Khronos(cloneDate(this._date), this._format, localeKey, this._isStrict, this._isUTC);
        // fails if isUTC and offset
        // return new Khronos(new Date(this.valueOf()),
        return new Khronos(this._date, this._format, localeKey, this._isStrict, this._isUTC, this._offset);
    };
    /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    Khronos.prototype.diff = /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    function (b, unitOfTime, precise) {
        var /** @type {?} */ unit = mapUnitOfTime(unitOfTime);
        var /** @type {?} */ _b = b instanceof Khronos ? b : new Khronos(b);
        // const zoneDelta = (_b.utcOffset() - this.utcOffset());
        // const config = Object.assign(this._toConfig(), {
        //   _offset: 0,
        //   _isUTC: true,
        //   _zoneDelta: zoneDelta
        // });
        // return diff(new Date(this.valueOf()), new Date(_b.valueOf()), unit, precise, config);
        return diff(this._date, _b.toDate(), unit, precise, this._toConfig());
    };
    /**
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.endOf = /**
     * @param {?=} period
     * @return {?}
     */
    function (period) {
        var /** @type {?} */ _per = mapUnitOfTime(period);
        this._date = endOf(this._date, _per, this._isUTC);
        return this;
    };
    /**
     * @param {?=} format
     * @return {?}
     */
    Khronos.prototype.format = /**
     * @param {?=} format
     * @return {?}
     */
    function (format) {
        return formatDate(this._date, format, this._locale && this._locale._abbr, this._isUTC, this._offset);
    };
    // todo: implement
    /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    Khronos.prototype.from = /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    function (time, withoutSuffix) {
        var /** @type {?} */ _time = _moment(time);
        if (this.isValid() && _time.isValid()) {
            return createDuration({ to: this.toDate(), from: _time.toDate() })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        }
        return this.localeData().invalidDate;
    };
    /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    Khronos.prototype.fromNow = /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    function (withoutSuffix) {
        return this.from(new Date(), withoutSuffix);
    };
    /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    Khronos.prototype.to = /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    function (inp, suffix) {
        throw new Error("TODO: Implement");
    };
    /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    Khronos.prototype.toNow = /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    function (withoutPrefix) {
        throw new Error("TODO: Implement");
    };
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.subtract = /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    function (val, period) {
        var _this = this;
        if (isString(val)) {
            this._date = subtract(this._date, parseInt(val, 10), mapUnitOfTime(period));
            return this;
        }
        if (isNumber(val)) {
            this._date = subtract(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            var /** @type {?} */ _mapped_2 = mapMomentInputObject(val);
            Object.keys(_mapped_2)
                .forEach(function (key) { return subtract(_this._date, _mapped_2[key], key); });
        }
        return this;
    };
    /**
     * @param {?} period
     * @return {?}
     */
    Khronos.prototype.get = /**
     * @param {?} period
     * @return {?}
     */
    function (period) {
        if (period === 'dayOfYear') {
            return this.dayOfYear();
        }
        var /** @type {?} */ unit = mapUnitOfTime(period);
        switch (unit) {
            case 'year':
                return this.year();
            case 'month':
                return this.month();
            // | 'week'
            case 'date':
                return this.date();
            case 'day':
                return this.day();
            case 'hours':
                return this.hours();
            case 'minutes':
                return this.minutes();
            case 'seconds':
                return this.seconds();
            case 'milliseconds':
                return this.milliseconds();
            case 'week':
                return this.week();
            case 'isoWeek':
                return this.isoWeek();
            case 'weekYear':
                return this.weekYear();
            case 'isoWeekYear':
                return this.isoWeekYear();
            case 'weekday':
                return this.weekday();
            case 'isoWeekday':
                return this.isoWeekday();
            case 'quarter':
                return this.quarter();
            default:
                throw new Error("Unknown moment.get('" + period + "')");
        }
    };
    /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.set = /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    function (period, input) {
        var _this = this;
        if (isString(period)) {
            var /** @type {?} */ unit = mapUnitOfTime(period);
            switch (unit) {
                case 'year':
                    return this.year(input);
                case 'month':
                    return this.month(input);
                // | 'week'
                case 'day':
                    return this.day(input);
                case 'date':
                    return this.date(input);
                case 'hours':
                    return this.hours(input);
                case 'minutes':
                    return this.minutes(input);
                case 'seconds':
                    return this.seconds(input);
                case 'milliseconds':
                    return this.milliseconds(input);
                case 'week':
                    return this.week(input);
                case 'isoWeek':
                    return this.isoWeek(input);
                case 'weekYear':
                    return this.weekYear(input);
                case 'isoWeekYear':
                    return this.isoWeekYear(input);
                case 'weekday':
                    return this.weekday(input);
                case 'isoWeekday':
                    return this.isoWeekday(input);
                case 'quarter':
                    return this.quarter(input);
                default:
                    throw new Error("Unknown moment.get('" + period + "')");
            }
        }
        if (isObject(period)) {
            var /** @type {?} */ _mapped_3 = mapMomentInputObject(period);
            Object.keys(_mapped_3)
                .sort(function (a, b) {
                return _unitsPriority[a] - _unitsPriority[b];
            })
                .forEach(function (key) { return _this.set(key, _mapped_3[key]); });
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toISOString = /**
     * @return {?}
     */
    function () {
        if (!this.isValid()) {
            return null;
        }
        if (getFullYear(this._date, true) < 0 || getFullYear(this._date, true) > 9999) {
            return this.format('YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        }
        if (isFunction(Date.prototype.toISOString)) {
            // native implementation is ~50x faster, use it when we can
            return this.toDate().toISOString();
        }
        return this.format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.inspect = /**
     * @return {?}
     */
    function () {
        throw new Error('TODO: implement');
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toJSON = /**
     * @return {?}
     */
    function () {
        return this.toISOString();
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toDate = /**
     * @return {?}
     */
    function () {
        return new Date(this.valueOf());
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toObject = /**
     * @return {?}
     */
    function () {
        return {
            // years: getFullYear(this._date, this._isUTC),
            // months: getMonth(this._date, this._isUTC),
            year: getFullYear(this._date, this._isUTC),
            month: getMonth(this._date, this._isUTC),
            date: getDate(this._date, this._isUTC),
            hours: getHours(this._date, this._isUTC),
            minutes: getMinutes(this._date, this._isUTC),
            seconds: getSeconds(this._date, this._isUTC),
            milliseconds: getMilliseconds(this._date, this._isUTC)
        };
    };
    /**
     * @return {?}
     */
    Khronos.prototype.toArray = /**
     * @return {?}
     */
    function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    };
    // Dates boolean algebra
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isAfter = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isAfter(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isBefore = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBefore(this.toDate(), date.toDate(), _unit);
    };
    /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    Khronos.prototype.isBetween = /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    function (from, to, unit, inclusivity) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBetween(this.toDate(), from.toDate(), to.toDate(), _unit, inclusivity);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSame = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSame(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSameOrAfter = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrAfter(this._date, date.toDate(), _unit);
    };
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    Khronos.prototype.isSameOrBefore = /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    function (date, unit) {
        var /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrBefore(this._date, date.toDate(), _unit);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return isDateValid(this._date);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        return this._date.valueOf() - ((this._offset || 0) * 60000);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.unix = /**
     * @return {?}
     */
    function () {
        // return getUnixTime(this._date);
        return Math.floor(this.valueOf() / 1000);
    };
    /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.utcOffset = /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (b, keepLocalTime) {
        var /** @type {?} */ _config = this._toConfig();
        if (!b && b !== 0) {
            return getUTCOffset(this._date, _config);
        }
        this._date = setUTCOffset(this._date, b, keepLocalTime, false, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.utc = /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    };
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    Khronos.prototype.local = /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    function (keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this._date), 'm');
            }
        }
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.parseZone = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        var /** @type {?} */ _config = this._toConfig();
        this._date = setOffsetToParsedOffset(this._date, input, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.hasAlignedHourOffset = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        return hasAlignedHourOffset(this._date, input ? input._date : void 0);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isDST = /**
     * @return {?}
     */
    function () {
        return isDaylightSavingTime(this._date);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isLocal = /**
     * @return {?}
     */
    function () {
        return !this._isUTC;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUtcOffset = /**
     * @return {?}
     */
    function () {
        return this._isUTC;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUTC = /**
     * @return {?}
     */
    function () {
        return this.isUtc();
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isUtc = /**
     * @return {?}
     */
    function () {
        return this._isUTC && this._offset === 0;
    };
    // Timezone
    /**
     * @return {?}
     */
    Khronos.prototype.zoneAbbr = /**
     * @return {?}
     */
    function () {
        return getZoneAbbr(this._isUTC);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.zoneName = /**
     * @return {?}
     */
    function () {
        return getZoneName(this._isUTC);
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    Khronos.prototype.year = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        if (!year && year !== 0) {
            return getFullYear(this._date, this._isUTC);
        }
        this._date = cloneDate(setFullYear(this._date, year));
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.weekYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getWeekYear(this._date, this._locale, this.isUTC());
        }
        var /** @type {?} */ date = getSetWeekYear(this._date, val, this._locale, this.isUTC());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeekYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISOWeekYear(this._date, this.isUTC());
        }
        var /** @type {?} */ date = getSetISOWeekYear(this._date, val, this.isUtc());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isLeapYear = /**
     * @return {?}
     */
    function () {
        return isLeapYear(getFullYear(this.toDate(), this.isUTC()));
    };
    /**
     * @param {?=} month
     * @return {?}
     */
    Khronos.prototype.month = /**
     * @param {?=} month
     * @return {?}
     */
    function (month) {
        if (!month && month !== 0) {
            return getMonth(this._date, this._isUTC);
        }
        var /** @type {?} */ _month = month;
        if (isString(month)) {
            var /** @type {?} */ locale = this._locale || getLocale();
            _month = locale.monthsParse(month);
        }
        if (isNumber(_month)) {
            this._date = cloneDate(setMonth(this._date, _month, this._isUTC));
        }
        return this;
    };
    /**
     * @param {?=} hours
     * @return {?}
     */
    Khronos.prototype.hour = /**
     * @param {?=} hours
     * @return {?}
     */
    function (hours) {
        return this.hours(hours);
    };
    /**
     * @param {?=} hours
     * @return {?}
     */
    Khronos.prototype.hours = /**
     * @param {?=} hours
     * @return {?}
     */
    function (hours) {
        if (!hours && hours !== 0) {
            return getHours(this._date, this._isUTC);
        }
        this._date = cloneDate(setHours(this._date, hours, this._isUTC));
        return this;
    };
    /**
     * @param {?=} minutes
     * @return {?}
     */
    Khronos.prototype.minute = /**
     * @param {?=} minutes
     * @return {?}
     */
    function (minutes) {
        return this.minutes(minutes);
    };
    /**
     * @param {?=} minutes
     * @return {?}
     */
    Khronos.prototype.minutes = /**
     * @param {?=} minutes
     * @return {?}
     */
    function (minutes) {
        if (!minutes && minutes !== 0) {
            return getMinutes(this._date, this._isUTC);
        }
        this._date = cloneDate(setMinutes(this._date, minutes, this._isUTC));
        return this;
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.second = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        return this.seconds(seconds);
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.seconds = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        if (!seconds && seconds !== 0) {
            return getSeconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setSeconds(this._date, seconds, this._isUTC));
        return this;
    };
    /**
     * @param {?=} ms
     * @return {?}
     */
    Khronos.prototype.millisecond = /**
     * @param {?=} ms
     * @return {?}
     */
    function (ms) {
        return this.milliseconds(ms);
    };
    /**
     * @param {?=} seconds
     * @return {?}
     */
    Khronos.prototype.milliseconds = /**
     * @param {?=} seconds
     * @return {?}
     */
    function (seconds) {
        if (!seconds && seconds !== 0) {
            return getMilliseconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setMilliseconds(this._date, seconds, this._isUTC));
        return this;
    };
    /**
     * @param {?=} date
     * @return {?}
     */
    Khronos.prototype.date = /**
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (!date && date !== 0) {
            return getDate(this._date, this._isUTC);
        }
        this._date = cloneDate(setDate(this._date, date, this._isUTC));
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.day = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        if (!input && input !== 0) {
            return getDayOfWeek(this._date, this._isUTC);
        }
        var /** @type {?} */ _input = input;
        if (isString(input)) {
            _input = parseWeekday(input, this._locale);
        }
        if (isNumber(_input)) {
            this._date = setDayOfWeek(this._date, _input, this._locale, this._isUTC);
        }
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.weekday = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getLocaleDayOfWeek(this._date, this._locale, this._isUTC);
        }
        this._date = setLocaleDayOfWeek(this._date, val, { locale: this._locale, isUTC: this._isUTC });
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeekday = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISODayOfWeek(this._date);
        }
        this._date = setISODayOfWeek(this._date, val);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.dayOfYear = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getDayOfYear(this._date);
        }
        this._date = setDayOfYear(this._date, val);
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.week = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        if (!input && input !== 0) {
            return getWeek(this._date, this._locale);
        }
        this._date = setWeek(this._date, input, this._locale);
        return this;
    };
    /**
     * @param {?=} input
     * @return {?}
     */
    Khronos.prototype.weeks = /**
     * @param {?=} input
     * @return {?}
     */
    function (input) {
        return this.week(input);
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeek = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getISOWeek(this._date);
        }
        this._date = setISOWeek(this._date, val);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.isoWeeks = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        return this.isoWeek(val);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.weeksInYear = /**
     * @return {?}
     */
    function () {
        return getWeeksInYear(this._date, this._isUTC, this._locale);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.isoWeeksInYear = /**
     * @return {?}
     */
    function () {
        return getISOWeeksInYear(this._date, this._isUTC);
    };
    /**
     * @return {?}
     */
    Khronos.prototype.daysInMonth = /**
     * @return {?}
     */
    function () {
        return daysInMonth(getFullYear(this._date, this._isUTC), getMonth(this._date, this._isUTC));
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.quarter = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        if (!val && val !== 0) {
            return getQuarter(this._date, this._isUTC);
        }
        this._date = setQuarter(this._date, val, this._isUTC);
        return this;
    };
    /**
     * @param {?=} val
     * @return {?}
     */
    Khronos.prototype.quarters = /**
     * @param {?=} val
     * @return {?}
     */
    function (val) {
        return this.quarter(val);
    };
    /**
     * @param {?=} period
     * @return {?}
     */
    Khronos.prototype.startOf = /**
     * @param {?=} period
     * @return {?}
     */
    function (period) {
        var /** @type {?} */ _per = mapUnitOfTime(period);
        this._date = startOf(this._date, _per, this._isUTC);
        return this;
    };
    return Khronos;
}());
export { Khronos };
function Khronos_tsickle_Closure_declarations() {
    /** @type {?} */
    Khronos.prototype._date;
    /** @type {?} */
    Khronos.prototype._isUTC;
    /** @type {?} */
    Khronos.prototype._isStrict;
    /** @type {?} */
    Khronos.prototype._locale;
    /** @type {?} */
    Khronos.prototype._format;
    /** @type {?} */
    Khronos.prototype._offset;
    /** @type {?} */
    Khronos.prototype._tzm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ0ZXN0L2NoYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLEdBQUcsRUFBYSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEQsT0FBTyxFQUNMLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFFbEYsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQixPQUFPLEVBQ0wsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQ3JFLFVBQVUsRUFDWCxNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFDeEUsV0FBVyxFQUNaLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUN2QyxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXRFLE9BQU8sRUFDTCxhQUFhLEVBQ2IsWUFBWSxFQUFFLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLHVCQUF1QixFQUNqRixZQUFZLEVBQ2IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVH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Ozs7SUFLRCx5QkFBTzs7OztJQUFQLFVBQVEsR0FBWTtRQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRELE1BQU0sQ0FBQyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFLRCwwQkFBUTs7OztJQUFSLFVBQVMsR0FBWTtRQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUMxQjs7Ozs7SUFFRCx5QkFBTzs7OztJQUFQLFVBQVEsTUFBeUI7UUFDL0IscUJBQU0sSUFBSSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFcEQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO2tCQXRxQ0g7SUF3cUNDLENBQUE7QUEzd0JELG1CQTJ3QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGggbWF4LWZpbGUtbGluZS1jb3VudFxyXG5pbXBvcnQgeyBhZGQsIHBhcnNlRGF0ZSwgc3VidHJhY3QgfSBmcm9tICcuLi9pbmRleCc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZU9iamVjdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHtcclxuICBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0SG91cnMsIGdldE1pbGxpc2Vjb25kcywgZ2V0TWludXRlcywgZ2V0TW9udGgsIGdldFNlY29uZHMsXHJcbiAgZ2V0VW5peFRpbWVcclxufSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQge1xyXG4gIHNldERhdGUsIHNldEZ1bGxZZWFyLCBzZXRIb3Vycywgc2V0TWlsbGlzZWNvbmRzLCBzZXRNaW51dGVzLCBzZXRNb250aCxcclxuICBzZXRTZWNvbmRzXHJcbn0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcclxuaW1wb3J0IHtcclxuICBpc0FycmF5LFxyXG4gIGlzQm9vbGVhbiwgaXNEYXRlLCBpc0RhdGVWYWxpZCwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZyxcclxuICBpc1VuZGVmaW5lZFxyXG59IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gJy4uL2Zvcm1hdCc7XHJcbmltcG9ydCB7IElTT184NjAxLCBSRkNfMjgyMiB9IGZyb20gJy4uL2NyZWF0ZS9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcclxuaW1wb3J0IHsgTG9jYWxlLCBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGF0ZU9mZnNldCxcclxuICBnZXRVVENPZmZzZXQsIGhhc0FsaWduZWRIb3VyT2Zmc2V0LCBpc0RheWxpZ2h0U2F2aW5nVGltZSwgc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQsXHJcbiAgc2V0VVRDT2Zmc2V0XHJcbn0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcclxuaW1wb3J0IHsgaXNMZWFwWWVhciwgcGFyc2VUd29EaWdpdFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcclxuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUsIGlzQmV0d2VlbiwgaXNTYW1lLCBpc1NhbWVPckFmdGVyLCBpc1NhbWVPckJlZm9yZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtY29tcGFyZSc7XHJcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xyXG5pbXBvcnQge1xyXG4gIGdldERheU9mV2VlaywgZ2V0SVNPRGF5T2ZXZWVrLCBnZXRMb2NhbGVEYXlPZldlZWssIHBhcnNlV2Vla2RheSwgc2V0RGF5T2ZXZWVrLCBzZXRJU09EYXlPZldlZWssXHJcbiAgc2V0TG9jYWxlRGF5T2ZXZWVrXHJcbn0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5pbXBvcnQgeyBnZXRJU09XZWVrLCBnZXRXZWVrLCBzZXRJU09XZWVrLCBzZXRXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0SVNPV2Vla3NJblllYXIsIGdldElTT1dlZWtZZWFyLCBnZXRTZXRJU09XZWVrWWVhciwgZ2V0U2V0V2Vla1llYXIsIGdldFdlZWtzSW5ZZWFyLFxyXG4gIGdldFdlZWtZZWFyXHJcbn0gZnJvbSAnLi4vdW5pdHMvd2Vlay15ZWFyJztcclxuaW1wb3J0IHsgZW5kT2YsIHN0YXJ0T2YgfSBmcm9tICcuLi91dGlscy9zdGFydC1lbmQtb2YnO1xyXG5pbXBvcnQgeyBnZXRRdWFydGVyLCBzZXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XHJcbmltcG9ydCB7IGdldERheU9mWWVhciwgc2V0RGF5T2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXllYXInO1xyXG5pbXBvcnQgeyBnZXRab25lQWJiciwgZ2V0Wm9uZU5hbWUgfSBmcm9tICcuLi91bml0cy90aW1lem9uZSc7XHJcbmltcG9ydCB7IGRpZmYgfSBmcm9tICcuLi9tb21lbnQvZGlmZic7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBjYWxlbmRhciwgQ2FsZW5kYXJTcGVjIH0gZnJvbSAnLi4vbW9tZW50L2NhbGVuZGFyJztcclxuaW1wb3J0IHsgZGVmaW5lTG9jYWxlLCBnZXRMb2NhbGUsIGdldFNldEdsb2JhbExvY2FsZSwgbGlzdExvY2FsZXMgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XHJcbmltcG9ydCB7IG1heCwgbWluIH0gZnJvbSAnLi4vbW9tZW50L21pbi1tYXgnO1xyXG5pbXBvcnQgeyBEdXJhdGlvbiwgaXNEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NvbnN0cnVjdG9yJztcclxuaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4uL2NyZWF0ZS9mcm9tLWFueXRoaW5nJztcclxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xyXG5cclxuZXhwb3J0IHR5cGUgRGF0ZUlucHV0ID0gc3RyaW5nIHwgbnVtYmVyIHwgRGF0ZSB8IHN0cmluZ1tdIHwgRGF0ZUFycmF5IHwgTW9tZW50SW5wdXRPYmplY3Q7XHJcblxyXG5leHBvcnQgY29uc3QgbW9tZW50OiBNb21lbnRGbiA9IChfbW9tZW50IGFzIE1vbWVudEZuKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9tZW50Rm4ge1xyXG4gIChpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBLaHJvbm9zO1xyXG5cclxuICBJU09fODYwMTogc3RyaW5nO1xyXG4gIFJGQ18yODIyOiBzdHJpbmc7XHJcblxyXG4gIHV0YyhpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuKTogS2hyb25vcztcclxuXHJcbiAgcGFyc2Vab25lKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4pOiBLaHJvbm9zO1xyXG5cclxuICB1bml4KG51bTogbnVtYmVyKTogS2hyb25vcztcclxuXHJcbiAgbG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdLCB2YWx1ZXM/OiBMb2NhbGVEYXRhKTogc3RyaW5nO1xyXG5cclxuICBkdXJhdGlvbihpbnA/OiBEdXJhdGlvbiB8IERhdGVJbnB1dCB8IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogRHVyYXRpb247XHJcblxyXG4gIGRlZmluZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGU7XHJcblxyXG4gIHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0OiBzdHJpbmcpOiBudW1iZXI7XHJcblxyXG4gIGlzRGF0ZShpbnB1dD86IGFueSk6IGlucHV0IGlzIERhdGU7XHJcblxyXG4gIG1vbnRocygpOiBzdHJpbmdbXTtcclxuXHJcbiAgbW9udGhzKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIG1vbnRocyhmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xyXG5cclxuICBtb250aHMoZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoc1Nob3J0KCk6IHN0cmluZ1tdO1xyXG5cclxuICBtb250aHNTaG9ydChpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICBtb250aHNTaG9ydChmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xyXG5cclxuICBtb250aHNTaG9ydChmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgd2Vla2RheXMoKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzKGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5cyhsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4pOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXMobG9jYWxlU29ydGVkOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5cyhsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzU2hvcnQoKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzU2hvcnQoaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgd2Vla2RheXNTaG9ydChmb3JtYXQ6IHN0cmluZyk6IHN0cmluZ1tdO1xyXG5cclxuICB3ZWVrZGF5c1Nob3J0KGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZDogYm9vbGVhbik6IHN0cmluZ1tdO1xyXG5cclxuICB3ZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgd2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzU2hvcnQobG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgd2Vla2RheXNNaW4oKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzTWluKGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzTWluKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzTWluKGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4pOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXNNaW4obG9jYWxlU29ydGVkOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQ6IHN0cmluZyk6IG51bWJlciB8IGJvb2xlYW47XHJcblxyXG4gIHJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQ6IHN0cmluZywgbGltaXQ6IG51bWJlcik6IGJvb2xlYW47XHJcblxyXG4gIG1pbiguLi5kYXRlczogKChEYXRlSW5wdXQgfCBLaHJvbm9zKVtdIHwgKERhdGVJbnB1dCB8IEtocm9ub3MpKVtdKTogS2hyb25vcztcclxuXHJcbiAgbWF4KC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zO1xyXG5cclxuICBsb2NhbGVEYXRhKGtleT86IHN0cmluZyB8IHN0cmluZ1tdIHwgS2hyb25vcyk6IExvY2FsZTtcclxuXHJcbiAgdXBkYXRlTG9jYWxlKGxhbmd1YWdlOiBzdHJpbmcsIGxvY2FsZVNwZWM/OiBMb2NhbGVEYXRhKTogTG9jYWxlO1xyXG5cclxuICBjYWxlbmRhckZvcm1hdChtOiBEYXRlLCBub3c6IERhdGUpOiBzdHJpbmc7XHJcblxyXG4gIC8vIHRvZG86IHJlbW92ZSB0aGlzXHJcbiAgY2FsZW5kYXJGb3JtYXQobTogS2hyb25vcywgbm93OiBLaHJvbm9zKTogc3RyaW5nO1xyXG5cclxuICAvLyB0b2RvOiBpbXBsZW1lbnRcclxuICBpbnZhbGlkKCk6IEtocm9ub3M7XHJcblxyXG4gIGxvY2FsZXMoKTogc3RyaW5nW107XHJcblxyXG4gIC8vIHRvZG86IGltcGxlbWVudFxyXG4gIHVwZGF0ZU9mZnNldChtOiBLaHJvbm9zLCBrZWVwVGltZT86IGJvb2xlYW4pOiB2b2lkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfbW9tZW50KGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IEtocm9ub3Mge1xyXG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIEtocm9ub3MpIHtcclxuICAgIGNvbnN0IF9kYXRlID0gaW5wdXQuY2xvbmUoKTtcclxuXHJcbiAgICByZXR1cm4gaXNVVEMgPyBfZGF0ZS51dGMoKSA6IF9kYXRlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzQm9vbGVhbihsb2NhbGVLZXkpKSB7XHJcbiAgICByZXR1cm4gbmV3IEtocm9ub3MoaW5wdXQsIGZvcm1hdCwgbnVsbCwgbG9jYWxlS2V5LCBpc1VUQyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbmV3IEtocm9ub3MoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIGlzVVRDKTtcclxufVxyXG5cclxubW9tZW50LnV0YyA9IChpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbik6IEtocm9ub3MgPT4ge1xyXG4gIHJldHVybiBfbW9tZW50KGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCB0cnVlKTtcclxufTtcclxuXHJcbm1vbWVudC5wYXJzZVpvbmUgPSAoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcsIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4pOiBLaHJvbm9zID0+IHtcclxuICByZXR1cm4gX21vbWVudChpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgdHJ1ZSkucGFyc2Vab25lKCk7XHJcbn07XHJcblxyXG5tb21lbnQubG9jYWxlID0gZ2V0U2V0R2xvYmFsTG9jYWxlO1xyXG5tb21lbnQubG9jYWxlRGF0YSA9IChrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IEtocm9ub3MpOiBMb2NhbGUgPT4ge1xyXG4gIGlmIChrZXkgaW5zdGFuY2VvZiBLaHJvbm9zKSB7XHJcbiAgICByZXR1cm4ga2V5LmxvY2FsZURhdGEoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRMb2NhbGUoa2V5KTtcclxufTtcclxuXHJcbi8vIG1vbWVudC51dGMgPSBjcmVhdGVVVEM7XHJcbm1vbWVudC51bml4ID0gKGlucDogbnVtYmVyKSA9PiBuZXcgS2hyb25vcyhpbnAgKiAxMDAwKTtcclxubW9tZW50LklTT184NjAxID0gSVNPXzg2MDE7XHJcbm1vbWVudC5SRkNfMjgyMiA9IFJGQ18yODIyO1xyXG5tb21lbnQuZGVmaW5lTG9jYWxlID0gZGVmaW5lTG9jYWxlO1xyXG5tb21lbnQucGFyc2VUd29EaWdpdFllYXIgPSBwYXJzZVR3b0RpZ2l0WWVhcjtcclxubW9tZW50LmlzRGF0ZSA9IGlzRGF0ZTtcclxubW9tZW50LmludmFsaWQgPSBmdW5jdGlvbiBfaW52YWxpZCgpOiBLaHJvbm9zIHtcclxuICByZXR1cm4gbmV3IEtocm9ub3MobmV3IERhdGUoTmFOKSk7XHJcbn07XHJcblxyXG4vLyBkdXJhdGlvbihpbnA/OiBEdXJhdGlvbiB8IERhdGVJbnB1dCB8IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogRHVyYXRpb247XHJcbm1vbWVudC5kdXJhdGlvbiA9IChpbnB1dD86IER1cmF0aW9uIHwgRGF0ZUlucHV0IHwgS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBEdXJhdGlvbiA9PiB7XHJcbiAgY29uc3QgX3VuaXQgPSBtYXBVbml0T2ZUaW1lKHVuaXQpO1xyXG4gIGlmIChpc0RhdGUoaW5wdXQpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3RvZG8gaW1wbGVtZW50Jyk7XHJcbiAgfVxyXG5cclxuICBpZiAoaW5wdXQgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKCk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNEdXJhdGlvbihpbnB1dCkpIHtcclxuICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihpbnB1dCwgX3VuaXQsIHsgX2xvY2FsZTogaW5wdXQuX2xvY2FsZSB9KTtcclxuICB9XHJcblxyXG4gIGlmIChpc1N0cmluZyhpbnB1dCkgfHwgaXNOdW1iZXIoaW5wdXQpIHx8IGlzRHVyYXRpb24oaW5wdXQpIHx8IGlzT2JqZWN0PERhdGVPYmplY3Q+KGlucHV0KSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKGlucHV0LCBfdW5pdCk7XHJcbiAgfVxyXG5cclxuICB0aHJvdyBuZXcgRXJyb3IoJ3RvZG8gaW1wbGVtZW50Jyk7XHJcbn07XHJcblxyXG5tb21lbnQubWluID0gZnVuY3Rpb24gX21pbiguLi5kYXRlczogKChEYXRlSW5wdXQgfCBLaHJvbm9zKVtdIHwgKERhdGVJbnB1dCB8IEtocm9ub3MpKVtdKTogS2hyb25vcyB7XHJcbiAgY29uc3QgX2ZpcnN0QXJnID0gZGF0ZXNbMF07XHJcbiAgY29uc3QgX2RhdGVzID0gKGlzQXJyYXkoX2ZpcnN0QXJnKSA/IF9maXJzdEFyZyA6IGRhdGVzKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgLm1hcCgoZGF0ZTogS2hyb25vcykgPT4gX21vbWVudChkYXRlKSlcclxuICAgIC5tYXAoZGF0ZSA9PiBkYXRlLnRvRGF0ZSgpKTtcclxuXHJcbiAgY29uc3QgX2RhdGUgPSBtaW4oLi4uX2RhdGVzKTtcclxuXHJcbiAgcmV0dXJuIG5ldyBLaHJvbm9zKF9kYXRlKTtcclxufTtcclxuXHJcbm1vbWVudC5tYXggPSBmdW5jdGlvbiBfbWF4KC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zIHtcclxuICBjb25zdCBfZmlyc3RBcmcgPSBkYXRlc1swXTtcclxuICBjb25zdCBfZGF0ZXMgPSAoaXNBcnJheShfZmlyc3RBcmcpID8gX2ZpcnN0QXJnIDogZGF0ZXMpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAubWFwKChkYXRlOiBLaHJvbm9zKSA9PiBfbW9tZW50KGRhdGUpKVxyXG4gICAgLm1hcChkYXRlID0+IGRhdGUudG9EYXRlKCkpO1xyXG5cclxuICBjb25zdCBfZGF0ZSA9IG1heCguLi5fZGF0ZXMpO1xyXG5cclxuICByZXR1cm4gbmV3IEtocm9ub3MoX2RhdGUpO1xyXG59O1xyXG5cclxubW9tZW50LmxvY2FsZXMgPSAoKTogc3RyaW5nW10gPT4ge1xyXG4gIHJldHVybiBsaXN0TG9jYWxlcygpO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb21lbnRJbnB1dE9iamVjdCB7XHJcbiAgeWVhcnM/OiBudW1iZXI7XHJcbiAgeWVhcj86IG51bWJlcjtcclxuICB5PzogbnVtYmVyO1xyXG5cclxuICBtb250aHM/OiBudW1iZXI7XHJcbiAgbW9udGg/OiBudW1iZXI7XHJcbiAgTT86IG51bWJlcjtcclxuXHJcbiAgZGF5cz86IG51bWJlcjtcclxuICBkYXk/OiBudW1iZXI7XHJcbiAgZD86IG51bWJlcjtcclxuXHJcbiAgZGF0ZXM/OiBudW1iZXI7XHJcbiAgZGF0ZT86IG51bWJlcjtcclxuICBEPzogbnVtYmVyO1xyXG5cclxuICBob3Vycz86IG51bWJlcjtcclxuICBob3VyPzogbnVtYmVyO1xyXG4gIGg/OiBudW1iZXI7XHJcblxyXG4gIG1pbnV0ZXM/OiBudW1iZXI7XHJcbiAgbWludXRlPzogbnVtYmVyO1xyXG4gIG0/OiBudW1iZXI7XHJcblxyXG4gIHNlY29uZHM/OiBudW1iZXI7XHJcbiAgc2Vjb25kPzogbnVtYmVyO1xyXG4gIHM/OiBudW1iZXI7XHJcblxyXG4gIG1pbGxpc2Vjb25kcz86IG51bWJlcjtcclxuICBtaWxsaXNlY29uZD86IG51bWJlcjtcclxuICBtcz86IG51bWJlcjtcclxuXHJcbiAgdz86IG51bWJlcjtcclxuICB3ZWVrPzogbnVtYmVyO1xyXG4gIHdlZWtzPzogbnVtYmVyO1xyXG5cclxuICBRPzogbnVtYmVyO1xyXG4gIHF1YXJ0ZXI/OiBudW1iZXI7XHJcbiAgcXVhcnRlcnM/OiBudW1iZXI7XHJcblxyXG4gIHdlZWtZZWFyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNb21lbnRVbml0T2ZUaW1lID0gKFxyXG4gICd5ZWFyJyB8ICd5ZWFycycgfCAneScgfFxyXG4gICdtb250aCcgfCAnbW9udGhzJyB8ICdNJyB8XHJcbiAgJ3dlZWsnIHwgJ3dlZWtzJyB8ICd3JyB8XHJcbiAgJ2RheScgfCAnZGF5cycgfCAnZCcgfFxyXG4gICdob3VyJyB8ICdob3VycycgfCAnaCcgfFxyXG4gICdtaW51dGUnIHwgJ21pbnV0ZXMnIHwgJ20nIHxcclxuICAnc2Vjb25kJyB8ICdzZWNvbmRzJyB8ICdzJyB8XHJcbiAgJ21pbGxpc2Vjb25kJyB8ICdtaWxsaXNlY29uZHMnIHwgJ21zJyB8XHJcbiAgJ3EnIHwgJ3F1YXJ0ZXInIHwgJ3F1YXJ0ZXJzJyB8ICdRJyB8XHJcbiAgJ2lzb1dlZWsnIHwgJ2lzb1dlZWtzJyB8ICdXJyB8XHJcbiAgJ2RhdGUnIHwgJ2RhdGVzJyB8ICdEJ1xyXG4gICk7XHJcblxyXG5leHBvcnQgdHlwZSBNb21lbnRBbGwgPSBNb21lbnRVbml0T2ZUaW1lIHxcclxuICAnd2Vla1llYXInIHwgJ3dlZWtZZWFycycgfCAnZ2cnIHxcclxuICAnaXNvV2Vla1llYXInIHwgJ2lzb1dlZWtZZWFycycgfCAnR0cnIHxcclxuICAnZGF5T2ZZZWFyJyB8ICdkYXlPZlllYXJzJyB8ICdEREQnIHxcclxuICAnd2Vla2RheScgfCAnd2Vla2RheXMnIHwgJ2UnIHxcclxuICAnaXNvV2Vla2RheScgfCAnaXNvV2Vla2RheXMnIHwgJ0UnO1xyXG5cclxuY29uc3QgX3VuaXRzUHJpb3JpdHk6IHtba2V5IGluIFVuaXRPZlRpbWVdOiBudW1iZXJ9ID0ge1xyXG4gIHllYXI6IDEsXHJcbiAgbW9udGg6IDgsXHJcbiAgd2VlazogNSxcclxuICBpc29XZWVrOiA1LFxyXG4gIGRheTogMTEsXHJcbiAgd2Vla2RheTogMTEsXHJcbiAgaXNvV2Vla2RheTogMTEsXHJcbiAgaG91cnM6IDEzLFxyXG4gIHdlZWtZZWFyOiAxLFxyXG4gIGlzb1dlZWtZZWFyOiAxLFxyXG4gIHF1YXJ0ZXI6IDcsXHJcbiAgZGF0ZTogOSxcclxuICBkYXlPZlllYXI6IDQsXHJcbiAgbWludXRlczogMTQsXHJcbiAgc2Vjb25kczogMTUsXHJcbiAgbWlsbGlzZWNvbmRzOiAxNlxyXG59O1xyXG5cclxuLy8gdG9kbzogZG8gSSBuZWVkIDIgbWFwcGVycz9cclxuY29uc3QgX3RpbWVIYXNoTWFwOiB7IFtrZXkgaW4gTW9tZW50QWxsXTogVW5pdE9mVGltZSB8IHN0cmluZyB9ID0ge1xyXG4gIHk6ICd5ZWFyJyxcclxuICB5ZWFyczogJ3llYXInLFxyXG4gIHllYXI6ICd5ZWFyJyxcclxuICBNOiAnbW9udGgnLFxyXG4gIG1vbnRoczogJ21vbnRoJyxcclxuICBtb250aDogJ21vbnRoJyxcclxuICB3OiAnd2VlaycsXHJcbiAgd2Vla3M6ICd3ZWVrJyxcclxuICB3ZWVrOiAnd2VlaycsXHJcblxyXG4gIGQ6ICdkYXknLFxyXG4gIGRheXM6ICdkYXknLFxyXG4gIGRheTogJ2RheScsXHJcblxyXG4gIGRhdGU6ICdkYXRlJyxcclxuICBkYXRlczogJ2RhdGUnLFxyXG4gIEQ6ICdkYXRlJyxcclxuXHJcbiAgaDogJ2hvdXJzJyxcclxuICBob3VyOiAnaG91cnMnLFxyXG4gIGhvdXJzOiAnaG91cnMnLFxyXG4gIG06ICdtaW51dGVzJyxcclxuICBtaW51dGU6ICdtaW51dGVzJyxcclxuICBtaW51dGVzOiAnbWludXRlcycsXHJcbiAgczogJ3NlY29uZHMnLFxyXG4gIHNlY29uZDogJ3NlY29uZHMnLFxyXG4gIHNlY29uZHM6ICdzZWNvbmRzJyxcclxuICBtczogJ21pbGxpc2Vjb25kcycsXHJcbiAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnLFxyXG4gIG1pbGxpc2Vjb25kczogJ21pbGxpc2Vjb25kcycsXHJcbiAgcXVhcnRlcjogJ3F1YXJ0ZXInLFxyXG4gIHF1YXJ0ZXJzOiAncXVhcnRlcicsXHJcbiAgcTogJ3F1YXJ0ZXInLFxyXG4gIFE6ICdxdWFydGVyJyxcclxuICBpc29XZWVrOiAnaXNvV2VlaycsXHJcbiAgaXNvV2Vla3M6ICdpc29XZWVrJyxcclxuICBXOiAnaXNvV2VlaycsXHJcbiAgd2Vla1llYXI6ICd3ZWVrWWVhcicsXHJcbiAgd2Vla1llYXJzOiAnd2Vla1llYXInLFxyXG4gIGdnOiAnd2Vla1llYXJzJyxcclxuICBpc29XZWVrWWVhcjogJ2lzb1dlZWtZZWFyJyxcclxuICBpc29XZWVrWWVhcnM6ICdpc29XZWVrWWVhcicsXHJcbiAgR0c6ICdpc29XZWVrWWVhcicsXHJcbiAgZGF5T2ZZZWFyOiAnZGF5T2ZZZWFyJyxcclxuICBkYXlPZlllYXJzOiAnZGF5T2ZZZWFyJyxcclxuICBEREQ6ICdkYXlPZlllYXInLFxyXG4gIHdlZWtkYXk6ICd3ZWVrZGF5JyxcclxuICB3ZWVrZGF5czogJ3dlZWtkYXknLFxyXG4gIGU6ICd3ZWVrZGF5JyxcclxuICBpc29XZWVrZGF5OiAnaXNvV2Vla2RheScsXHJcbiAgaXNvV2Vla2RheXM6ICdpc29XZWVrZGF5JyxcclxuICBFOiAnaXNvV2Vla2RheSdcclxufTtcclxuXHJcbmZ1bmN0aW9uIG1hcFVuaXRPZlRpbWUocGVyaW9kOiBNb21lbnRBbGwpOiBVbml0T2ZUaW1lIHtcclxuICByZXR1cm4gX3RpbWVIYXNoTWFwW3BlcmlvZF0gYXMgVW5pdE9mVGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwTW9tZW50SW5wdXRPYmplY3Qob2JqOiBNb21lbnRJbnB1dE9iamVjdCk6IHtba2V5IGluIFVuaXRPZlRpbWVdPzogbnVtYmVyfSB7XHJcbiAgY29uc3QgX3Jlczoge1trZXkgaW4gVW5pdE9mVGltZV0/OiBudW1iZXJ9ID0ge307XHJcblxyXG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopXHJcbiAgICAucmVkdWNlKChyZXMsIGtleToga2V5b2YgTW9tZW50SW5wdXRPYmplY3QpID0+IHtcclxuICAgICAgcmVzW21hcFVuaXRPZlRpbWUoa2V5KV0gPSBvYmpba2V5XTtcclxuXHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LCBfcmVzKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEtocm9ub3Mge1xyXG4gIF9kYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICBfaXNVVEMgPSBmYWxzZTtcclxuICBfaXNTdHJpY3Q6IGJvb2xlYW47XHJcbiAgX2xvY2FsZTogTG9jYWxlO1xyXG4gIF9mb3JtYXQ6IHN0cmluZyB8IHN0cmluZ1tdO1xyXG4gIF9vZmZzZXQ6IG51bWJlcjtcclxuICBfdHptOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlucHV0PzogRGF0ZUlucHV0LFxyXG4gICAgICAgICAgICAgIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgICAgICAgICAgIGxvY2FsZUtleT86IHN0cmluZyxcclxuICAgICAgICAgICAgICBzdHJpY3QgPSBmYWxzZSxcclxuICAgICAgICAgICAgICBpc1VUQyA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG9mZnNldD86IG51bWJlcikge1xyXG4gICAgLy8gbG9jYWxlIHdpbGwgYmUgbmVlZGVkIHRvIGZvcm1hdCBpbnZhbGlkIGRhdGUgbWVzc2FnZVxyXG4gICAgdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZUtleSk7XHJcbiAgICAvLyBwYXJzZSBpbnZhbGlkIGlucHV0XHJcbiAgICBpZiAoaW5wdXQgPT09ICcnIHx8IGlucHV0ID09PSBudWxsIHx8IChpc051bWJlcihpbnB1dCkgJiYgaXNOYU4oaW5wdXQpKSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUoTmFOKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2lzVVRDID0gaXNVVEM7XHJcbiAgICBpZiAodGhpcy5faXNVVEMpIHtcclxuICAgICAgdGhpcy5fb2Zmc2V0ID0gMDtcclxuICAgIH1cclxuICAgIGlmIChvZmZzZXQgfHwgb2Zmc2V0ID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX29mZnNldCA9IG9mZnNldDtcclxuICAgIH1cclxuICAgIHRoaXMuX2lzU3RyaWN0ID0gc3RyaWN0O1xyXG4gICAgdGhpcy5fZm9ybWF0ID0gZm9ybWF0O1xyXG5cclxuICAgIGlmICghaW5wdXQgJiYgaW5wdXQgIT09IDAgJiYgIWZvcm1hdCkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0RhdGUoaW5wdXQpKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoaW5wdXQpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5fZGF0ZSA9IHBhcnNlRGF0ZShpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xyXG4gICAgY29uc3QgY29uZmlnID0gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xyXG4gICAgdGhpcy5fZGF0ZSA9IGNvbmZpZy5fZDtcclxuICAgIHRoaXMuX29mZnNldCA9IGlzTnVtYmVyKGNvbmZpZy5fb2Zmc2V0KSA/IGNvbmZpZy5fb2Zmc2V0IDogdGhpcy5fb2Zmc2V0O1xyXG4gICAgdGhpcy5faXNVVEMgPSBjb25maWcuX2lzVVRDO1xyXG4gICAgdGhpcy5faXNTdHJpY3QgPSBjb25maWcuX3N0cmljdDtcclxuICAgIHRoaXMuX2Zvcm1hdCA9IGNvbmZpZy5fZjtcclxuICAgIHRoaXMuX3R6bSA9IGNvbmZpZy5fdHptO1xyXG4gIH1cclxuXHJcbiAgX3RvQ29uZmlnKCk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIHJldHVybiB7IF9pc1VUQzogdGhpcy5faXNVVEMsIF9sb2NhbGU6IHRoaXMuX2xvY2FsZSwgX29mZnNldDogdGhpcy5fb2Zmc2V0LCBfdHptOiB0aGlzLl90em0gfTtcclxuICB9XHJcblxyXG4gIC8vIExvY2FsZVxyXG4gIGxvY2FsZSgpOiBzdHJpbmc7XHJcbiAgbG9jYWxlKGxvY2FsZUtleTogc3RyaW5nIHwgc3RyaW5nW10gfCBLaHJvbm9zKTogS2hyb25vcztcclxuICBsb2NhbGUobG9jYWxlS2V5Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBLaHJvbm9zKTogS2hyb25vcyB8IHN0cmluZyB7XHJcbiAgICBpZiAoaXNVbmRlZmluZWQobG9jYWxlS2V5KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2NhbGVLZXkgaW5zdGFuY2VvZiBLaHJvbm9zKSB7XHJcbiAgICAgIHRoaXMuX2xvY2FsZSA9IGxvY2FsZUtleS5fbG9jYWxlO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3TG9jYWxlRGF0YSA9IGdldExvY2FsZShsb2NhbGVLZXkpO1xyXG4gICAgaWYgKG5ld0xvY2FsZURhdGEgIT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9sb2NhbGUgPSBuZXdMb2NhbGVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxlRGF0YSgpOiBMb2NhbGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIC8vIEJhc2ljXHJcblxyXG4gIGFkZCh2YWw6IG51bWJlciB8IHN0cmluZyB8IE1vbWVudElucHV0T2JqZWN0LCBwZXJpb2Q/OiBVbml0T2ZUaW1lIHwgTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xyXG4gICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IGFkZCh0aGlzLl9kYXRlLCBwYXJzZUludCh2YWwsIDEwKSwgbWFwVW5pdE9mVGltZShwZXJpb2QpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOdW1iZXIodmFsKSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gYWRkKHRoaXMuX2RhdGUsIHZhbCwgbWFwVW5pdE9mVGltZShwZXJpb2QpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3Q8TW9tZW50SW5wdXRPYmplY3Q+KHZhbCkpIHtcclxuICAgICAgY29uc3QgX21hcHBlZCA9IG1hcE1vbWVudElucHV0T2JqZWN0KHZhbCk7XHJcbiAgICAgIE9iamVjdC5rZXlzKF9tYXBwZWQpXHJcbiAgICAgICAgLmZvckVhY2goKGtleTogVW5pdE9mVGltZSkgPT4gYWRkKHRoaXMuX2RhdGUsIF9tYXBwZWRba2V5XSwga2V5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBmaXhtZTogZm9yIHNvbWUgcmVhc29uIGhlcmUgJ251bGwnIGZvciB0aW1lIGlzIGZpbmVcclxuICBjYWxlbmRhcih0aW1lPzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0cz86IENhbGVuZGFyU3BlYyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBfdGltZSA9IHRpbWUgaW5zdGFuY2VvZiBLaHJvbm9zID8gdGltZSA6IG5ldyBLaHJvbm9zKHRpbWUgfHwgbmV3IERhdGUoKSk7XHJcbiAgICBjb25zdCBfb2Zmc2V0ID0gKHRoaXMuX29mZnNldCB8fCAwKSAtIChfdGltZS5fb2Zmc2V0IHx8IDApO1xyXG4gICAgY29uc3QgX2NvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5fdG9Db25maWcoKSwgeyBfb2Zmc2V0IH0pO1xyXG5cclxuICAgIHJldHVybiBjYWxlbmRhcih0aGlzLl9kYXRlLCBfdGltZS5fZGF0ZSxcclxuICAgICAgZm9ybWF0cywgdGhpcy5fbG9jYWxlLCBfY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGNsb25lKCk6IEtocm9ub3Mge1xyXG4gICAgY29uc3QgbG9jYWxlS2V5ID0gdGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5fYWJiciB8fCAnZW4nO1xyXG5cclxuICAgIC8vIHJldHVybiBuZXcgS2hyb25vcyhjbG9uZURhdGUodGhpcy5fZGF0ZSksIHRoaXMuX2Zvcm1hdCwgbG9jYWxlS2V5LCB0aGlzLl9pc1N0cmljdCwgdGhpcy5faXNVVEMpO1xyXG4gICAgLy8gZmFpbHMgaWYgaXNVVEMgYW5kIG9mZnNldFxyXG4gICAgLy8gcmV0dXJuIG5ldyBLaHJvbm9zKG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKSxcclxuICAgIHJldHVybiBuZXcgS2hyb25vcyh0aGlzLl9kYXRlLFxyXG4gICAgICB0aGlzLl9mb3JtYXQsXHJcbiAgICAgIGxvY2FsZUtleSxcclxuICAgICAgdGhpcy5faXNTdHJpY3QsXHJcbiAgICAgIHRoaXMuX2lzVVRDLFxyXG4gICAgICB0aGlzLl9vZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgZGlmZihiOiBEYXRlSW5wdXQgfCBLaHJvbm9zLCB1bml0T2ZUaW1lPzogTW9tZW50VW5pdE9mVGltZSwgcHJlY2lzZT86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgY29uc3QgdW5pdCA9IG1hcFVuaXRPZlRpbWUodW5pdE9mVGltZSk7XHJcbiAgICBjb25zdCBfYiA9IGIgaW5zdGFuY2VvZiBLaHJvbm9zID8gYiA6IG5ldyBLaHJvbm9zKGIpO1xyXG4gICAgLy8gY29uc3Qgem9uZURlbHRhID0gKF9iLnV0Y09mZnNldCgpIC0gdGhpcy51dGNPZmZzZXQoKSk7XHJcbiAgICAvLyBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHRoaXMuX3RvQ29uZmlnKCksIHtcclxuICAgIC8vICAgX29mZnNldDogMCxcclxuICAgIC8vICAgX2lzVVRDOiB0cnVlLFxyXG4gICAgLy8gICBfem9uZURlbHRhOiB6b25lRGVsdGFcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gcmV0dXJuIGRpZmYobmV3IERhdGUodGhpcy52YWx1ZU9mKCkpLCBuZXcgRGF0ZShfYi52YWx1ZU9mKCkpLCB1bml0LCBwcmVjaXNlLCBjb25maWcpO1xyXG5cclxuICAgIHJldHVybiBkaWZmKHRoaXMuX2RhdGUsIF9iLnRvRGF0ZSgpLCB1bml0LCBwcmVjaXNlLCB0aGlzLl90b0NvbmZpZygpKTtcclxuICB9XHJcblxyXG4gIGVuZE9mKHBlcmlvZD86IE1vbWVudFVuaXRPZlRpbWUpOiBLaHJvbm9zIHtcclxuICAgIGNvbnN0IF9wZXIgPSBtYXBVbml0T2ZUaW1lKHBlcmlvZCk7XHJcbiAgICB0aGlzLl9kYXRlID0gZW5kT2YodGhpcy5fZGF0ZSwgX3BlciwgdGhpcy5faXNVVEMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0KGZvcm1hdD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZm9ybWF0RGF0ZSh0aGlzLl9kYXRlLCBmb3JtYXQsIHRoaXMuX2xvY2FsZSAmJiB0aGlzLl9sb2NhbGUuX2FiYnIsIHRoaXMuX2lzVVRDLCB0aGlzLl9vZmZzZXQpO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogaW1wbGVtZW50XHJcbiAgZnJvbSh0aW1lPzogRGF0ZUlucHV0IHwgS2hyb25vcywgd2l0aG91dFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgY29uc3QgX3RpbWUgPSBfbW9tZW50KHRpbWUpO1xyXG4gICAgaWYgKHRoaXMuaXNWYWxpZCgpICYmIF90aW1lLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oeyB0bzogdGhpcy50b0RhdGUoKSwgZnJvbTogX3RpbWUudG9EYXRlKCkgfSlcclxuICAgICAgICAubG9jYWxlKHRoaXMubG9jYWxlKCkpXHJcbiAgICAgICAgLmh1bWFuaXplKCF3aXRob3V0U3VmZml4KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbGVEYXRhKCkuaW52YWxpZERhdGU7XHJcbiAgfVxyXG5cclxuICBmcm9tTm93KHdpdGhvdXRTdWZmaXg/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZyb20obmV3IERhdGUoKSwgd2l0aG91dFN1ZmZpeCk7XHJcbiAgfVxyXG5cclxuICB0byhpbnA6IERhdGVJbnB1dCB8IEtocm9ub3MsIHN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBJbXBsZW1lbnRgKTtcclxuICB9XHJcblxyXG4gIHRvTm93KHdpdGhvdXRQcmVmaXg/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgVE9ETzogSW1wbGVtZW50YCk7XHJcbiAgfVxyXG5cclxuICBzdWJ0cmFjdCh2YWw6IG51bWJlciB8IHN0cmluZyB8IE1vbWVudElucHV0T2JqZWN0LCBwZXJpb2Q/OiBVbml0T2ZUaW1lIHwgTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xyXG4gICAgaWYgKGlzU3RyaW5nKHZhbCkpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IHN1YnRyYWN0KHRoaXMuX2RhdGUsIHBhcnNlSW50KHZhbCwgMTApLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTnVtYmVyKHZhbCkpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IHN1YnRyYWN0KHRoaXMuX2RhdGUsIHZhbCwgbWFwVW5pdE9mVGltZShwZXJpb2QpKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3Q8TW9tZW50SW5wdXRPYmplY3Q+KHZhbCkpIHtcclxuICAgICAgY29uc3QgX21hcHBlZCA9IG1hcE1vbWVudElucHV0T2JqZWN0KHZhbCk7XHJcbiAgICAgIE9iamVjdC5rZXlzKF9tYXBwZWQpXHJcbiAgICAgICAgLmZvckVhY2goKGtleTogVW5pdE9mVGltZSkgPT4gc3VidHJhY3QodGhpcy5fZGF0ZSwgX21hcHBlZFtrZXldLCBrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGdldChwZXJpb2Q6IE1vbWVudEFsbCk6IG51bWJlciB7XHJcbiAgICBpZiAocGVyaW9kID09PSAnZGF5T2ZZZWFyJykge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXlPZlllYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB1bml0ID0gbWFwVW5pdE9mVGltZShwZXJpb2QpO1xyXG4gICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgIHJldHVybiB0aGlzLnllYXIoKTtcclxuICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm1vbnRoKCk7XHJcbiAgICAgIC8vIHwgJ3dlZWsnXHJcbiAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGUoKTtcclxuICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICByZXR1cm4gdGhpcy5kYXkoKTtcclxuICAgICAgY2FzZSAnaG91cnMnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvdXJzKCk7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZXMnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZXMoKTtcclxuICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Vjb25kcygpO1xyXG4gICAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kcygpO1xyXG4gICAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrKCk7XHJcbiAgICAgIGNhc2UgJ2lzb1dlZWsnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWsoKTtcclxuICAgICAgY2FzZSAnd2Vla1llYXInOlxyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtZZWFyKCk7XHJcbiAgICAgIGNhc2UgJ2lzb1dlZWtZZWFyJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpO1xyXG4gICAgICBjYXNlICd3ZWVrZGF5JzpcclxuICAgICAgICByZXR1cm4gdGhpcy53ZWVrZGF5KCk7XHJcbiAgICAgIGNhc2UgJ2lzb1dlZWtkYXknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtkYXkoKTtcclxuICAgICAgY2FzZSAncXVhcnRlcic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhcnRlcigpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb21lbnQuZ2V0KCcke3BlcmlvZH0nKWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0KHBlcmlvZDogTW9tZW50QWxsIHwgTW9tZW50SW5wdXRPYmplY3QsIGlucHV0PzogbnVtYmVyKTogS2hyb25vcyB7XHJcblxyXG4gICAgaWYgKGlzU3RyaW5nKHBlcmlvZCkpIHtcclxuICAgICAgY29uc3QgdW5pdCA9IG1hcFVuaXRPZlRpbWUocGVyaW9kKTtcclxuICAgICAgc3dpdGNoICh1bml0KSB7XHJcbiAgICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy55ZWFyKGlucHV0KTtcclxuICAgICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb250aChpbnB1dCk7XHJcbiAgICAgICAgLy8gfCAnd2VlaydcclxuICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF5KGlucHV0KTtcclxuICAgICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmRhdGUoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ2hvdXJzJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmhvdXJzKGlucHV0KTtcclxuICAgICAgICBjYXNlICdtaW51dGVzJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1pbnV0ZXMoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ3NlY29uZHMnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2Vjb25kcyhpbnB1dCk7XHJcbiAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kcyhpbnB1dCk7XHJcbiAgICAgICAgY2FzZSAnd2Vlayc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy53ZWVrKGlucHV0KTtcclxuICAgICAgICBjYXNlICdpc29XZWVrJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWsoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ3dlZWtZZWFyJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLndlZWtZZWFyKGlucHV0KTtcclxuICAgICAgICBjYXNlICdpc29XZWVrWWVhcic6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5pc29XZWVrWWVhcihpbnB1dCk7XHJcbiAgICAgICAgY2FzZSAnd2Vla2RheSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy53ZWVrZGF5KGlucHV0KTtcclxuICAgICAgICBjYXNlICdpc29XZWVrZGF5JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtkYXkoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ3F1YXJ0ZXInOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucXVhcnRlcihpbnB1dCk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBtb21lbnQuZ2V0KCcke3BlcmlvZH0nKWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0PE1vbWVudElucHV0T2JqZWN0PihwZXJpb2QpKSB7XHJcbiAgICAgIGNvbnN0IF9tYXBwZWQgPSBtYXBNb21lbnRJbnB1dE9iamVjdChwZXJpb2QpO1xyXG4gICAgICBPYmplY3Qua2V5cyhfbWFwcGVkKVxyXG4gICAgICAgIC5zb3J0KGZ1bmN0aW9uKGE6IFVuaXRPZlRpbWUsIGI6IFVuaXRPZlRpbWUpOiBudW1iZXIge1xyXG4gICAgICAgICAgcmV0dXJuIF91bml0c1ByaW9yaXR5W2FdIC0gX3VuaXRzUHJpb3JpdHlbYl07XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuZm9yRWFjaCgoa2V5OiBVbml0T2ZUaW1lKSA9PiB0aGlzLnNldChrZXksIF9tYXBwZWRba2V5XSkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ2RkZCBNTU0gREQgWVlZWSBISDptbTpzcyBbR01UXVpaJyk7XHJcbiAgfVxyXG5cclxuICB0b0lTT1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdHJ1ZSkgPCAwIHx8IGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRydWUpID4gOTk5OSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXQoJ1lZWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0Z1bmN0aW9uKERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKSkge1xyXG4gICAgICAvLyBuYXRpdmUgaW1wbGVtZW50YXRpb24gaXMgfjUweCBmYXN0ZXIsIHVzZSBpdCB3aGVuIHdlIGNhblxyXG4gICAgICByZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmZvcm1hdCgnWVlZWS1NTS1ERFtUXUhIOm1tOnNzLlNTU1taXScpO1xyXG4gIH1cclxuXHJcbiAgaW5zcGVjdCgpOiBzdHJpbmcge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdUT0RPOiBpbXBsZW1lbnQnKTtcclxuICB9XHJcblxyXG4gIHRvSlNPTigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudG9JU09TdHJpbmcoKTtcclxuICB9XHJcblxyXG4gIHRvRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XHJcbiAgfVxyXG5cclxuICB0b09iamVjdCgpOiB7W2tleSBpbiBNb21lbnRVbml0T2ZUaW1lXT86IG51bWJlcn0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLy8geWVhcnM6IGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcclxuICAgICAgLy8gbW9udGhzOiBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXHJcblxyXG4gICAgICB5ZWFyOiBnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXHJcbiAgICAgIG1vbnRoOiBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXHJcbiAgICAgIGRhdGU6IGdldERhdGUodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxyXG4gICAgICBob3VyczogZ2V0SG91cnModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxyXG4gICAgICBtaW51dGVzOiBnZXRNaW51dGVzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcclxuICAgICAgc2Vjb25kczogZ2V0U2Vjb25kcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXHJcbiAgICAgIG1pbGxpc2Vjb25kczogZ2V0TWlsbGlzZWNvbmRzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRvQXJyYXkoKTogRGF0ZUFycmF5IHtcclxuICAgIHJldHVybiBbdGhpcy55ZWFyKCksIHRoaXMubW9udGgoKSwgdGhpcy5kYXRlKCksIHRoaXMuaG91cigpLCB0aGlzLm1pbnV0ZSgpLCB0aGlzLnNlY29uZCgpLCB0aGlzLm1pbGxpc2Vjb25kKCldO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIERhdGVzIGJvb2xlYW4gYWxnZWJyYVxyXG5cclxuICBpc0FmdGVyKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xyXG5cclxuICAgIHJldHVybiBpc0FmdGVyKHRoaXMuX2RhdGUsIGRhdGUudG9EYXRlKCksIF91bml0KTtcclxuICB9XHJcblxyXG4gIGlzQmVmb3JlKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xyXG5cclxuICAgIHJldHVybiBpc0JlZm9yZSh0aGlzLnRvRGF0ZSgpLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XHJcbiAgfVxyXG5cclxuICBpc0JldHdlZW4oZnJvbTogS2hyb25vcywgdG86IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lLCBpbmNsdXNpdml0eT86IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcclxuXHJcbiAgICByZXR1cm4gaXNCZXR3ZWVuKHRoaXMudG9EYXRlKCksIGZyb20udG9EYXRlKCksIHRvLnRvRGF0ZSgpLCBfdW5pdCwgaW5jbHVzaXZpdHkpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xyXG5cclxuICAgIHJldHVybiBpc1NhbWUodGhpcy5fZGF0ZSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xyXG4gIH1cclxuXHJcbiAgaXNTYW1lT3JBZnRlcihkYXRlOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcclxuXHJcbiAgICByZXR1cm4gaXNTYW1lT3JBZnRlcih0aGlzLl9kYXRlLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVPckJlZm9yZShkYXRlOiBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgX3VuaXQgPSB1bml0ID8gbWFwVW5pdE9mVGltZSh1bml0KSA6IHZvaWQgMDtcclxuXHJcbiAgICByZXR1cm4gaXNTYW1lT3JCZWZvcmUodGhpcy5fZGF0ZSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0RhdGVWYWxpZCh0aGlzLl9kYXRlKTtcclxuICB9XHJcblxyXG4gIHZhbHVlT2YoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlLnZhbHVlT2YoKSAtICgodGhpcy5fb2Zmc2V0IHx8IDApICogNjAwMDApO1xyXG4gIH1cclxuXHJcbiAgdW5peCgpOiBudW1iZXIge1xyXG4gICAgLy8gcmV0dXJuIGdldFVuaXhUaW1lKHRoaXMuX2RhdGUpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy52YWx1ZU9mKCkgLyAxMDAwKTtcclxuICB9XHJcblxyXG5cclxuICAvLyBPZmZzZXRcclxuXHJcbiAgdXRjT2Zmc2V0KCk6IG51bWJlcjtcclxuICB1dGNPZmZzZXQoYjogbnVtYmVyIHwgc3RyaW5nLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IEtocm9ub3M7XHJcbiAgdXRjT2Zmc2V0KGI/OiBudW1iZXIgfCBzdHJpbmcsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogbnVtYmVyIHwgS2hyb25vcyB7XHJcbiAgICBjb25zdCBfY29uZmlnID0gdGhpcy5fdG9Db25maWcoKTtcclxuXHJcbiAgICBpZiAoIWIgJiYgYiAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0VVRDT2Zmc2V0KHRoaXMuX2RhdGUsIF9jb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBzZXRVVENPZmZzZXQodGhpcy5fZGF0ZSwgYiwga2VlcExvY2FsVGltZSwgZmFsc2UsIF9jb25maWcpO1xyXG5cclxuICAgIHRoaXMuX29mZnNldCA9IF9jb25maWcuX29mZnNldDtcclxuICAgIHRoaXMuX2lzVVRDID0gX2NvbmZpZy5faXNVVEM7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB1dGMoa2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBLaHJvbm9zIHtcclxuICAgIHJldHVybiB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcclxuICB9XHJcblxyXG4gIGxvY2FsKGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogS2hyb25vcyB7XHJcbiAgICBpZiAodGhpcy5faXNVVEMpIHtcclxuICAgICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XHJcbiAgICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAoa2VlcExvY2FsVGltZSkge1xyXG4gICAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzLl9kYXRlKSwgJ20nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcGFyc2Vab25lKGlucHV0Pzogc3RyaW5nKTogS2hyb25vcyB7XHJcbiAgICBjb25zdCBfY29uZmlnID0gdGhpcy5fdG9Db25maWcoKTtcclxuICAgIHRoaXMuX2RhdGUgPSBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCh0aGlzLl9kYXRlLCBpbnB1dCwgX2NvbmZpZyk7XHJcblxyXG4gICAgdGhpcy5fb2Zmc2V0ID0gX2NvbmZpZy5fb2Zmc2V0O1xyXG4gICAgdGhpcy5faXNVVEMgPSBfY29uZmlnLl9pc1VUQztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGhhc0FsaWduZWRIb3VyT2Zmc2V0KGlucHV0PzogS2hyb25vcyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGhhc0FsaWduZWRIb3VyT2Zmc2V0KHRoaXMuX2RhdGUsIGlucHV0ID8gaW5wdXQuX2RhdGUgOiB2b2lkIDApO1xyXG4gIH1cclxuXHJcbiAgaXNEU1QoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNEYXlsaWdodFNhdmluZ1RpbWUodGhpcy5fZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBpc0xvY2FsKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLl9pc1VUQztcclxuICB9XHJcblxyXG4gIGlzVXRjT2Zmc2V0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzVVRDO1xyXG4gIH1cclxuXHJcbiAgaXNVVEMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pc1V0YygpO1xyXG4gIH1cclxuXHJcbiAgaXNVdGMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gVGltZXpvbmVcclxuXHJcbiAgem9uZUFiYnIoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBnZXRab25lQWJicih0aGlzLl9pc1VUQyk7XHJcbiAgfVxyXG5cclxuICB6b25lTmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFpvbmVOYW1lKHRoaXMuX2lzVVRDKTtcclxuICB9XHJcblxyXG4gIC8vIFllYXJcclxuXHJcbiAgeWVhcigpOiBudW1iZXI7XHJcbiAgeWVhcih5ZWFyOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIHllYXIoeWVhcj86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCF5ZWFyICYmIHllYXIgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHllYXIpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHdlZWtZZWFyKCk6IG51bWJlcjtcclxuICB3ZWVrWWVhcih2YWw6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgd2Vla1llYXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldFdlZWtZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2xvY2FsZSwgdGhpcy5pc1VUQygpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkYXRlID0gZ2V0U2V0V2Vla1llYXIodGhpcy5fZGF0ZSwgdmFsLCB0aGlzLl9sb2NhbGUsIHRoaXMuaXNVVEMoKSk7XHJcbiAgICBpZiAoaXNEYXRlKGRhdGUpKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgaXNvV2Vla1llYXIoKTogbnVtYmVyIDtcclxuICBpc29XZWVrWWVhcih2YWw6IG51bWJlcik6IEtocm9ub3MgO1xyXG4gIGlzb1dlZWtZZWFyKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRJU09XZWVrWWVhcih0aGlzLl9kYXRlLCB0aGlzLmlzVVRDKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBnZXRTZXRJU09XZWVrWWVhcih0aGlzLl9kYXRlLCB2YWwsIHRoaXMuaXNVdGMoKSk7XHJcblxyXG4gICAgaWYgKGlzRGF0ZShkYXRlKSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gZGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGlzTGVhcFllYXIoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNMZWFwWWVhcihnZXRGdWxsWWVhcih0aGlzLnRvRGF0ZSgpLCB0aGlzLmlzVVRDKCkpKTtcclxuICB9XHJcblxyXG4gIC8vIE1vbnRoXHJcblxyXG4gIG1vbnRoKCk6IG51bWJlcjtcclxuICBtb250aChtb250aDogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcztcclxuICBtb250aChtb250aD86IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCFtb250aCAmJiBtb250aCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0TW9udGgodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBfbW9udGggPSBtb250aDtcclxuXHJcbiAgICBpZiAoaXNTdHJpbmcobW9udGgpKSB7XHJcbiAgICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMuX2xvY2FsZSB8fCBnZXRMb2NhbGUoKTtcclxuICAgICAgX21vbnRoID0gbG9jYWxlLm1vbnRoc1BhcnNlKG1vbnRoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOdW1iZXIoX21vbnRoKSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldE1vbnRoKHRoaXMuX2RhdGUsIF9tb250aCwgdGhpcy5faXNVVEMpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIGhvdXIoKTogbnVtYmVyO1xyXG4gIGhvdXIoaG91cnM6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgaG91cihob3Vycz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaG91cnMoaG91cnMpO1xyXG4gIH1cclxuXHJcbiAgaG91cnMoKTogbnVtYmVyO1xyXG4gIGhvdXJzKGhvdXJzOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIGhvdXJzKGhvdXJzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIWhvdXJzICYmIGhvdXJzICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRIb3Vycyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRIb3Vycyh0aGlzLl9kYXRlLCBob3VycywgdGhpcy5faXNVVEMpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIG1pbnV0ZSgpOiBudW1iZXI7XHJcbiAgbWludXRlKG1pbnV0ZXM6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgbWludXRlKG1pbnV0ZXM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm1pbnV0ZXMobWludXRlcyk7XHJcbiAgfVxyXG5cclxuICBtaW51dGVzKCk6IG51bWJlcjtcclxuICBtaW51dGVzKG1pbnV0ZXM6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgbWludXRlcyhtaW51dGVzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIW1pbnV0ZXMgJiYgbWludXRlcyAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0TWludXRlcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRNaW51dGVzKHRoaXMuX2RhdGUsIG1pbnV0ZXMsIHRoaXMuX2lzVVRDKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBzZWNvbmQoKTogbnVtYmVyO1xyXG4gIHNlY29uZChzZWNvbmRzOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIHNlY29uZChzZWNvbmRzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zZWNvbmRzKHNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgc2Vjb25kcygpOiBudW1iZXI7XHJcbiAgc2Vjb25kcyhzZWNvbmRzOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIHNlY29uZHMoc2Vjb25kcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCFzZWNvbmRzICYmIHNlY29uZHMgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldFNlY29uZHModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0U2Vjb25kcyh0aGlzLl9kYXRlLCBzZWNvbmRzLCB0aGlzLl9pc1VUQykpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgbWlsbGlzZWNvbmQoKTogbnVtYmVyO1xyXG4gIG1pbGxpc2Vjb25kKG1zOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIG1pbGxpc2Vjb25kKG1zPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5taWxsaXNlY29uZHMobXMpO1xyXG4gIH1cclxuXHJcbiAgbWlsbGlzZWNvbmRzKCk6IG51bWJlcjtcclxuICBtaWxsaXNlY29uZHMoc2Vjb25kczogbnVtYmVyKTogS2hyb25vcztcclxuICBtaWxsaXNlY29uZHMoc2Vjb25kcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCFzZWNvbmRzICYmIHNlY29uZHMgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldE1pbGxpc2Vjb25kcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRNaWxsaXNlY29uZHModGhpcy5fZGF0ZSwgc2Vjb25kcywgdGhpcy5faXNVVEMpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIERheVxyXG5cclxuICBkYXRlKCk6IG51bWJlcjtcclxuICBkYXRlKGRhdGU6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgZGF0ZShkYXRlPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIWRhdGUgJiYgZGF0ZSAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0RGF0ZSh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXREYXRlKHRoaXMuX2RhdGUsIGRhdGUsIHRoaXMuX2lzVVRDKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkYXkoKTogbnVtYmVyIDtcclxuICBkYXkoaW5wdXQ6IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgO1xyXG4gIGRheShpbnB1dD86IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCFpbnB1dCAmJiBpbnB1dCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgX2lucHV0ID0gaW5wdXQ7XHJcblxyXG4gICAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgICBfaW5wdXQgPSBwYXJzZVdlZWtkYXkoaW5wdXQsIHRoaXMuX2xvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTnVtYmVyKF9pbnB1dCkpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IHNldERheU9mV2Vlayh0aGlzLl9kYXRlLCBfaW5wdXQsIHRoaXMuX2xvY2FsZSwgdGhpcy5faXNVVEMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgd2Vla2RheSgpOiBudW1iZXIgO1xyXG4gIHdlZWtkYXkodmFsOiBudW1iZXIpOiBLaHJvbm9zIDtcclxuICB3ZWVrZGF5KHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRMb2NhbGVEYXlPZldlZWsodGhpcy5fZGF0ZSwgdGhpcy5fbG9jYWxlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IHNldExvY2FsZURheU9mV2Vlayh0aGlzLl9kYXRlLCB2YWwsIHsgbG9jYWxlOiB0aGlzLl9sb2NhbGUsIGlzVVRDOiB0aGlzLl9pc1VUQyB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGlzb1dlZWtkYXkoKTogbnVtYmVyIDtcclxuICBpc29XZWVrZGF5KHZhbDogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyA7XHJcbiAgaXNvV2Vla2RheSh2YWw/OiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0SVNPRGF5T2ZXZWVrKHRoaXMuX2RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBzZXRJU09EYXlPZldlZWsodGhpcy5fZGF0ZSwgdmFsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRheU9mWWVhcigpOiBudW1iZXI7XHJcbiAgZGF5T2ZZZWFyKHZhbDogbnVtYmVyKTogS2hyb25vcztcclxuICBkYXlPZlllYXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldERheU9mWWVhcih0aGlzLl9kYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gc2V0RGF5T2ZZZWFyKHRoaXMuX2RhdGUsIHZhbCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvLyBXZWVrXHJcblxyXG4gIHdlZWsoKTogbnVtYmVyO1xyXG4gIHdlZWsoaW5wdXQ6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgd2VlayhpbnB1dD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCFpbnB1dCAmJiBpbnB1dCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0V2Vlayh0aGlzLl9kYXRlLCB0aGlzLl9sb2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBzZXRXZWVrKHRoaXMuX2RhdGUsIGlucHV0LCB0aGlzLl9sb2NhbGUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgd2Vla3MoKTogbnVtYmVyO1xyXG4gIHdlZWtzKGlucHV0OiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIHdlZWtzKGlucHV0PzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53ZWVrKGlucHV0KTtcclxuICB9XHJcblxyXG4gIGlzb1dlZWsoKTogbnVtYmVyIDtcclxuICBpc29XZWVrKHZhbDogbnVtYmVyKTogS2hyb25vcyA7XHJcbiAgaXNvV2Vlayh2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0SVNPV2Vlayh0aGlzLl9kYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gc2V0SVNPV2Vlayh0aGlzLl9kYXRlLCB2YWwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgaXNvV2Vla3MoKTogbnVtYmVyIDtcclxuICBpc29XZWVrcyh2YWw6IG51bWJlcik6IEtocm9ub3MgO1xyXG4gIGlzb1dlZWtzKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNvV2Vlayh2YWwpO1xyXG4gIH1cclxuXHJcbiAgd2Vla3NJblllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRXZWVrc0luWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQywgdGhpcy5fbG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGlzb1dlZWtzSW5ZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZ2V0SVNPV2Vla3NJblllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xyXG4gIH1cclxuXHJcblxyXG4gIGRheXNJbk1vbnRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZGF5c0luTW9udGgoZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLCBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQykpO1xyXG4gIH1cclxuXHJcblxyXG4gIHF1YXJ0ZXIoKTogbnVtYmVyO1xyXG4gIHF1YXJ0ZXIodmFsOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIHF1YXJ0ZXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldFF1YXJ0ZXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBzZXRRdWFydGVyKHRoaXMuX2RhdGUsIHZhbCwgdGhpcy5faXNVVEMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgcXVhcnRlcnMoKTogbnVtYmVyO1xyXG4gIHF1YXJ0ZXJzKHZhbDogbnVtYmVyKTogS2hyb25vcztcclxuICBxdWFydGVycyh2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnF1YXJ0ZXIodmFsKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0T2YocGVyaW9kPzogTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xyXG4gICAgY29uc3QgX3BlciA9IG1hcFVuaXRPZlRpbWUocGVyaW9kKTtcclxuICAgIHRoaXMuX2RhdGUgPSBzdGFydE9mKHRoaXMuX2RhdGUsIF9wZXIsIHRoaXMuX2lzVVRDKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==