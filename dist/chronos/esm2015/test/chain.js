/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
export const /** @type {?} */ moment = (/** @type {?} */ (_moment));
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
        const /** @type {?} */ _date = input.clone();
        return isUTC ? _date.utc() : _date;
    }
    if (isBoolean(localeKey)) {
        return new Khronos(input, format, null, localeKey, isUTC);
    }
    return new Khronos(input, format, localeKey, strict, isUTC);
}
moment.utc = (input, format, localeKey, strict) => {
    return _moment(input, format, localeKey, strict, true);
};
moment.parseZone = (input, format, localeKey, strict) => {
    return _moment(input, format, localeKey, strict, true).parseZone();
};
moment.locale = getSetGlobalLocale;
moment.localeData = (key) => {
    if (key instanceof Khronos) {
        return key.localeData();
    }
    return getLocale(key);
};
// moment.utc = createUTC;
moment.unix = (inp) => new Khronos(inp * 1000);
moment.ISO_8601 = ISO_8601;
moment.RFC_2822 = RFC_2822;
moment.defineLocale = defineLocale;
moment.parseTwoDigitYear = parseTwoDigitYear;
moment.isDate = isDate;
moment.invalid = function _invalid() {
    return new Khronos(new Date(NaN));
};
// duration(inp?: Duration | DateInput | Khronos, unit?: MomentUnitOfTime): Duration;
moment.duration = (input, unit) => {
    const /** @type {?} */ _unit = mapUnitOfTime(unit);
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
moment.min = function _min(...dates) {
    const /** @type {?} */ _firstArg = dates[0];
    const /** @type {?} */ _dates = (isArray(_firstArg) ? _firstArg : dates)
        .map((date) => _moment(date))
        .map(date => date.toDate());
    const /** @type {?} */ _date = min(..._dates);
    return new Khronos(_date);
};
moment.max = function _max(...dates) {
    const /** @type {?} */ _firstArg = dates[0];
    const /** @type {?} */ _dates = (isArray(_firstArg) ? _firstArg : dates)
        .map((date) => _moment(date))
        .map(date => date.toDate());
    const /** @type {?} */ _date = max(..._dates);
    return new Khronos(_date);
};
moment.locales = () => {
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
const /** @type {?} */ _unitsPriority = {
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
const /** @type {?} */ _timeHashMap = {
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
    const /** @type {?} */ _res = {};
    return Object.keys(obj)
        .reduce((res, key) => {
        res[mapUnitOfTime(key)] = obj[key];
        return res;
    }, _res);
}
export class Khronos {
    /**
     * @param {?=} input
     * @param {?=} format
     * @param {?=} localeKey
     * @param {?=} strict
     * @param {?=} isUTC
     * @param {?=} offset
     */
    constructor(input, format, localeKey, strict = false, isUTC = false, offset) {
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
        const /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
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
    _toConfig() {
        return { _isUTC: this._isUTC, _locale: this._locale, _offset: this._offset, _tzm: this._tzm };
    }
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    locale(localeKey) {
        if (isUndefined(localeKey)) {
            return this._locale._abbr;
        }
        if (localeKey instanceof Khronos) {
            this._locale = localeKey._locale;
            return this;
        }
        const /** @type {?} */ newLocaleData = getLocale(localeKey);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
    /**
     * @return {?}
     */
    localeData() {
        return this._locale;
    }
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    add(val, period) {
        if (isString(val)) {
            this._date = add(this._date, parseInt(val, 10), mapUnitOfTime(period));
        }
        if (isNumber(val)) {
            this._date = add(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            const /** @type {?} */ _mapped = mapMomentInputObject(val);
            Object.keys(_mapped)
                .forEach((key) => add(this._date, _mapped[key], key));
        }
        return this;
    }
    /**
     * @param {?=} time
     * @param {?=} formats
     * @return {?}
     */
    calendar(time, formats) {
        const /** @type {?} */ _time = time instanceof Khronos ? time : new Khronos(time || new Date());
        const /** @type {?} */ _offset = (this._offset || 0) - (_time._offset || 0);
        const /** @type {?} */ _config = Object.assign(this._toConfig(), { _offset });
        return calendar(this._date, _time._date, formats, this._locale, _config);
    }
    /**
     * @return {?}
     */
    clone() {
        const /** @type {?} */ localeKey = this._locale && this._locale._abbr || 'en';
        // return new Khronos(cloneDate(this._date), this._format, localeKey, this._isStrict, this._isUTC);
        // fails if isUTC and offset
        // return new Khronos(new Date(this.valueOf()),
        return new Khronos(this._date, this._format, localeKey, this._isStrict, this._isUTC, this._offset);
    }
    /**
     * @param {?} b
     * @param {?=} unitOfTime
     * @param {?=} precise
     * @return {?}
     */
    diff(b, unitOfTime, precise) {
        const /** @type {?} */ unit = mapUnitOfTime(unitOfTime);
        const /** @type {?} */ _b = b instanceof Khronos ? b : new Khronos(b);
        // const zoneDelta = (_b.utcOffset() - this.utcOffset());
        // const config = Object.assign(this._toConfig(), {
        //   _offset: 0,
        //   _isUTC: true,
        //   _zoneDelta: zoneDelta
        // });
        // return diff(new Date(this.valueOf()), new Date(_b.valueOf()), unit, precise, config);
        return diff(this._date, _b.toDate(), unit, precise, this._toConfig());
    }
    /**
     * @param {?=} period
     * @return {?}
     */
    endOf(period) {
        const /** @type {?} */ _per = mapUnitOfTime(period);
        this._date = endOf(this._date, _per, this._isUTC);
        return this;
    }
    /**
     * @param {?=} format
     * @return {?}
     */
    format(format) {
        return formatDate(this._date, format, this._locale && this._locale._abbr, this._isUTC, this._offset);
    }
    /**
     * @param {?=} time
     * @param {?=} withoutSuffix
     * @return {?}
     */
    from(time, withoutSuffix) {
        const /** @type {?} */ _time = _moment(time);
        if (this.isValid() && _time.isValid()) {
            return createDuration({ to: this.toDate(), from: _time.toDate() })
                .locale(this.locale())
                .humanize(!withoutSuffix);
        }
        return this.localeData().invalidDate;
    }
    /**
     * @param {?=} withoutSuffix
     * @return {?}
     */
    fromNow(withoutSuffix) {
        return this.from(new Date(), withoutSuffix);
    }
    /**
     * @param {?} inp
     * @param {?=} suffix
     * @return {?}
     */
    to(inp, suffix) {
        throw new Error(`TODO: Implement`);
    }
    /**
     * @param {?=} withoutPrefix
     * @return {?}
     */
    toNow(withoutPrefix) {
        throw new Error(`TODO: Implement`);
    }
    /**
     * @param {?} val
     * @param {?=} period
     * @return {?}
     */
    subtract(val, period) {
        if (isString(val)) {
            this._date = subtract(this._date, parseInt(val, 10), mapUnitOfTime(period));
            return this;
        }
        if (isNumber(val)) {
            this._date = subtract(this._date, val, mapUnitOfTime(period));
        }
        if (isObject(val)) {
            const /** @type {?} */ _mapped = mapMomentInputObject(val);
            Object.keys(_mapped)
                .forEach((key) => subtract(this._date, _mapped[key], key));
        }
        return this;
    }
    /**
     * @param {?} period
     * @return {?}
     */
    get(period) {
        if (period === 'dayOfYear') {
            return this.dayOfYear();
        }
        const /** @type {?} */ unit = mapUnitOfTime(period);
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
                throw new Error(`Unknown moment.get('${period}')`);
        }
    }
    /**
     * @param {?} period
     * @param {?=} input
     * @return {?}
     */
    set(period, input) {
        if (isString(period)) {
            const /** @type {?} */ unit = mapUnitOfTime(period);
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
                    throw new Error(`Unknown moment.get('${period}')`);
            }
        }
        if (isObject(period)) {
            const /** @type {?} */ _mapped = mapMomentInputObject(period);
            Object.keys(_mapped)
                .sort(function (a, b) {
                return _unitsPriority[a] - _unitsPriority[b];
            })
                .forEach((key) => this.set(key, _mapped[key]));
        }
        return this;
    }
    /**
     * @return {?}
     */
    toString() {
        return this.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
    }
    /**
     * @return {?}
     */
    toISOString() {
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
    }
    /**
     * @return {?}
     */
    inspect() {
        throw new Error('TODO: implement');
    }
    /**
     * @return {?}
     */
    toJSON() {
        return this.toISOString();
    }
    /**
     * @return {?}
     */
    toDate() {
        return new Date(this.valueOf());
    }
    /**
     * @return {?}
     */
    toObject() {
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
    }
    /**
     * @return {?}
     */
    toArray() {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()];
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isAfter(date, unit) {
        const /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isAfter(this._date, date.toDate(), _unit);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isBefore(date, unit) {
        const /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBefore(this.toDate(), date.toDate(), _unit);
    }
    /**
     * @param {?} from
     * @param {?} to
     * @param {?=} unit
     * @param {?=} inclusivity
     * @return {?}
     */
    isBetween(from, to, unit, inclusivity) {
        const /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isBetween(this.toDate(), from.toDate(), to.toDate(), _unit, inclusivity);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isSame(date, unit) {
        const /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSame(this._date, date.toDate(), _unit);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isSameOrAfter(date, unit) {
        const /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrAfter(this._date, date.toDate(), _unit);
    }
    /**
     * @param {?} date
     * @param {?=} unit
     * @return {?}
     */
    isSameOrBefore(date, unit) {
        const /** @type {?} */ _unit = unit ? mapUnitOfTime(unit) : void 0;
        return isSameOrBefore(this._date, date.toDate(), _unit);
    }
    /**
     * @return {?}
     */
    isValid() {
        return isDateValid(this._date);
    }
    /**
     * @return {?}
     */
    valueOf() {
        return this._date.valueOf() - ((this._offset || 0) * 60000);
    }
    /**
     * @return {?}
     */
    unix() {
        // return getUnixTime(this._date);
        return Math.floor(this.valueOf() / 1000);
    }
    /**
     * @param {?=} b
     * @param {?=} keepLocalTime
     * @return {?}
     */
    utcOffset(b, keepLocalTime) {
        const /** @type {?} */ _config = this._toConfig();
        if (!b && b !== 0) {
            return getUTCOffset(this._date, _config);
        }
        this._date = setUTCOffset(this._date, b, keepLocalTime, false, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    }
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    utc(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime);
    }
    /**
     * @param {?=} keepLocalTime
     * @return {?}
     */
    local(keepLocalTime) {
        if (this._isUTC) {
            this.utcOffset(0, keepLocalTime);
            this._isUTC = false;
            if (keepLocalTime) {
                this.subtract(getDateOffset(this._date), 'm');
            }
        }
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    parseZone(input) {
        const /** @type {?} */ _config = this._toConfig();
        this._date = setOffsetToParsedOffset(this._date, input, _config);
        this._offset = _config._offset;
        this._isUTC = _config._isUTC;
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    hasAlignedHourOffset(input) {
        return hasAlignedHourOffset(this._date, input ? input._date : void 0);
    }
    /**
     * @return {?}
     */
    isDST() {
        return isDaylightSavingTime(this._date);
    }
    /**
     * @return {?}
     */
    isLocal() {
        return !this._isUTC;
    }
    /**
     * @return {?}
     */
    isUtcOffset() {
        return this._isUTC;
    }
    /**
     * @return {?}
     */
    isUTC() {
        return this.isUtc();
    }
    /**
     * @return {?}
     */
    isUtc() {
        return this._isUTC && this._offset === 0;
    }
    /**
     * @return {?}
     */
    zoneAbbr() {
        return getZoneAbbr(this._isUTC);
    }
    /**
     * @return {?}
     */
    zoneName() {
        return getZoneName(this._isUTC);
    }
    /**
     * @param {?=} year
     * @return {?}
     */
    year(year) {
        if (!year && year !== 0) {
            return getFullYear(this._date, this._isUTC);
        }
        this._date = cloneDate(setFullYear(this._date, year));
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    weekYear(val) {
        if (!val && val !== 0) {
            return getWeekYear(this._date, this._locale, this.isUTC());
        }
        const /** @type {?} */ date = getSetWeekYear(this._date, val, this._locale, this.isUTC());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeekYear(val) {
        if (!val && val !== 0) {
            return getISOWeekYear(this._date, this.isUTC());
        }
        const /** @type {?} */ date = getSetISOWeekYear(this._date, val, this.isUtc());
        if (isDate(date)) {
            this._date = date;
        }
        return this;
    }
    /**
     * @return {?}
     */
    isLeapYear() {
        return isLeapYear(getFullYear(this.toDate(), this.isUTC()));
    }
    /**
     * @param {?=} month
     * @return {?}
     */
    month(month) {
        if (!month && month !== 0) {
            return getMonth(this._date, this._isUTC);
        }
        let /** @type {?} */ _month = month;
        if (isString(month)) {
            const /** @type {?} */ locale = this._locale || getLocale();
            _month = locale.monthsParse(month);
        }
        if (isNumber(_month)) {
            this._date = cloneDate(setMonth(this._date, _month, this._isUTC));
        }
        return this;
    }
    /**
     * @param {?=} hours
     * @return {?}
     */
    hour(hours) {
        return this.hours(hours);
    }
    /**
     * @param {?=} hours
     * @return {?}
     */
    hours(hours) {
        if (!hours && hours !== 0) {
            return getHours(this._date, this._isUTC);
        }
        this._date = cloneDate(setHours(this._date, hours, this._isUTC));
        return this;
    }
    /**
     * @param {?=} minutes
     * @return {?}
     */
    minute(minutes) {
        return this.minutes(minutes);
    }
    /**
     * @param {?=} minutes
     * @return {?}
     */
    minutes(minutes) {
        if (!minutes && minutes !== 0) {
            return getMinutes(this._date, this._isUTC);
        }
        this._date = cloneDate(setMinutes(this._date, minutes, this._isUTC));
        return this;
    }
    /**
     * @param {?=} seconds
     * @return {?}
     */
    second(seconds) {
        return this.seconds(seconds);
    }
    /**
     * @param {?=} seconds
     * @return {?}
     */
    seconds(seconds) {
        if (!seconds && seconds !== 0) {
            return getSeconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setSeconds(this._date, seconds, this._isUTC));
        return this;
    }
    /**
     * @param {?=} ms
     * @return {?}
     */
    millisecond(ms) {
        return this.milliseconds(ms);
    }
    /**
     * @param {?=} seconds
     * @return {?}
     */
    milliseconds(seconds) {
        if (!seconds && seconds !== 0) {
            return getMilliseconds(this._date, this._isUTC);
        }
        this._date = cloneDate(setMilliseconds(this._date, seconds, this._isUTC));
        return this;
    }
    /**
     * @param {?=} date
     * @return {?}
     */
    date(date) {
        if (!date && date !== 0) {
            return getDate(this._date, this._isUTC);
        }
        this._date = cloneDate(setDate(this._date, date, this._isUTC));
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    day(input) {
        if (!input && input !== 0) {
            return getDayOfWeek(this._date, this._isUTC);
        }
        let /** @type {?} */ _input = input;
        if (isString(input)) {
            _input = parseWeekday(input, this._locale);
        }
        if (isNumber(_input)) {
            this._date = setDayOfWeek(this._date, _input, this._locale, this._isUTC);
        }
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    weekday(val) {
        if (!val && val !== 0) {
            return getLocaleDayOfWeek(this._date, this._locale, this._isUTC);
        }
        this._date = setLocaleDayOfWeek(this._date, val, { locale: this._locale, isUTC: this._isUTC });
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeekday(val) {
        if (!val && val !== 0) {
            return getISODayOfWeek(this._date);
        }
        this._date = setISODayOfWeek(this._date, val);
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    dayOfYear(val) {
        if (!val && val !== 0) {
            return getDayOfYear(this._date);
        }
        this._date = setDayOfYear(this._date, val);
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    week(input) {
        if (!input && input !== 0) {
            return getWeek(this._date, this._locale);
        }
        this._date = setWeek(this._date, input, this._locale);
        return this;
    }
    /**
     * @param {?=} input
     * @return {?}
     */
    weeks(input) {
        return this.week(input);
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeek(val) {
        if (!val && val !== 0) {
            return getISOWeek(this._date);
        }
        this._date = setISOWeek(this._date, val);
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    isoWeeks(val) {
        return this.isoWeek(val);
    }
    /**
     * @return {?}
     */
    weeksInYear() {
        return getWeeksInYear(this._date, this._isUTC, this._locale);
    }
    /**
     * @return {?}
     */
    isoWeeksInYear() {
        return getISOWeeksInYear(this._date, this._isUTC);
    }
    /**
     * @return {?}
     */
    daysInMonth() {
        return daysInMonth(getFullYear(this._date, this._isUTC), getMonth(this._date, this._isUTC));
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    quarter(val) {
        if (!val && val !== 0) {
            return getQuarter(this._date, this._isUTC);
        }
        this._date = setQuarter(this._date, val, this._isUTC);
        return this;
    }
    /**
     * @param {?=} val
     * @return {?}
     */
    quarters(val) {
        return this.quarter(val);
    }
    /**
     * @param {?=} period
     * @return {?}
     */
    startOf(period) {
        const /** @type {?} */ _per = mapUnitOfTime(period);
        this._date = startOf(this._date, _per, this._isUTC);
        return this;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhaW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ0ZXN0L2NoYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsR0FBRyxFQUFhLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUVwRCxPQUFPLEVBQ0wsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUVsRixNQUFNLHVCQUF1QixDQUFDO0FBQy9CLE9BQU8sRUFDTCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFDckUsVUFBVSxFQUNYLE1BQU0sdUJBQXVCLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUN4RSxXQUFXLEVBQ1osTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFdEUsT0FBTyxFQUNMLGFBQWEsRUFDYixZQUFZLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQ2pGLFlBQVksRUFDYixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUcs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QUFDLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQzdGOzs7OztJQUtELE9BQU8sQ0FBQyxHQUFZO1FBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiOzs7OztJQUtELFFBQVEsQ0FBQyxHQUFZO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQzFCOzs7OztJQUVELE9BQU8sQ0FBQyxNQUF5QjtRQUMvQix1QkFBTSxJQUFJLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwRCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aCBtYXgtZmlsZS1saW5lLWNvdW50XHJcbmltcG9ydCB7IGFkZCwgcGFyc2VEYXRlLCBzdWJ0cmFjdCB9IGZyb20gJy4uL2luZGV4JztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlT2JqZWN0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRIb3VycywgZ2V0TWlsbGlzZWNvbmRzLCBnZXRNaW51dGVzLCBnZXRNb250aCwgZ2V0U2Vjb25kcyxcclxuICBnZXRVbml4VGltZVxyXG59IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7XHJcbiAgc2V0RGF0ZSwgc2V0RnVsbFllYXIsIHNldEhvdXJzLCBzZXRNaWxsaXNlY29uZHMsIHNldE1pbnV0ZXMsIHNldE1vbnRoLFxyXG4gIHNldFNlY29uZHNcclxufSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xyXG5pbXBvcnQge1xyXG4gIGlzQXJyYXksXHJcbiAgaXNCb29sZWFuLCBpc0RhdGUsIGlzRGF0ZVZhbGlkLCBpc0Z1bmN0aW9uLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nLFxyXG4gIGlzVW5kZWZpbmVkXHJcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnLi4vZm9ybWF0JztcclxuaW1wb3J0IHsgSVNPXzg2MDEsIFJGQ18yODIyIH0gZnJvbSAnLi4vY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xyXG5pbXBvcnQgeyBMb2NhbGUsIExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHtcclxuICBnZXREYXRlT2Zmc2V0LFxyXG4gIGdldFVUQ09mZnNldCwgaGFzQWxpZ25lZEhvdXJPZmZzZXQsIGlzRGF5bGlnaHRTYXZpbmdUaW1lLCBzZXRPZmZzZXRUb1BhcnNlZE9mZnNldCxcclxuICBzZXRVVENPZmZzZXRcclxufSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xyXG5pbXBvcnQgeyBpc0xlYXBZZWFyLCBwYXJzZVR3b0RpZ2l0WWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xyXG5pbXBvcnQgeyBpc0FmdGVyLCBpc0JlZm9yZSwgaXNCZXR3ZWVuLCBpc1NhbWUsIGlzU2FtZU9yQWZ0ZXIsIGlzU2FtZU9yQmVmb3JlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1jb21wYXJlJztcclxuaW1wb3J0IHsgZGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XHJcbmltcG9ydCB7XHJcbiAgZ2V0RGF5T2ZXZWVrLCBnZXRJU09EYXlPZldlZWssIGdldExvY2FsZURheU9mV2VlaywgcGFyc2VXZWVrZGF5LCBzZXREYXlPZldlZWssIHNldElTT0RheU9mV2VlayxcclxuICBzZXRMb2NhbGVEYXlPZldlZWtcclxufSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcbmltcG9ydCB7IGdldElTT1dlZWssIGdldFdlZWssIHNldElTT1dlZWssIHNldFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcclxuaW1wb3J0IHtcclxuICBnZXRJU09XZWVrc0luWWVhciwgZ2V0SVNPV2Vla1llYXIsIGdldFNldElTT1dlZWtZZWFyLCBnZXRTZXRXZWVrWWVhciwgZ2V0V2Vla3NJblllYXIsXHJcbiAgZ2V0V2Vla1llYXJcclxufSBmcm9tICcuLi91bml0cy93ZWVrLXllYXInO1xyXG5pbXBvcnQgeyBlbmRPZiwgc3RhcnRPZiB9IGZyb20gJy4uL3V0aWxzL3N0YXJ0LWVuZC1vZic7XHJcbmltcG9ydCB7IGdldFF1YXJ0ZXIsIHNldFF1YXJ0ZXIgfSBmcm9tICcuLi91bml0cy9xdWFydGVyJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyLCBzZXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XHJcbmltcG9ydCB7IGdldFpvbmVBYmJyLCBnZXRab25lTmFtZSB9IGZyb20gJy4uL3VuaXRzL3RpbWV6b25lJztcclxuaW1wb3J0IHsgZGlmZiB9IGZyb20gJy4uL21vbWVudC9kaWZmJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGNhbGVuZGFyLCBDYWxlbmRhclNwZWMgfSBmcm9tICcuLi9tb21lbnQvY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBkZWZpbmVMb2NhbGUsIGdldExvY2FsZSwgZ2V0U2V0R2xvYmFsTG9jYWxlLCBsaXN0TG9jYWxlcyB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcclxuaW1wb3J0IHsgbWF4LCBtaW4gfSBmcm9tICcuLi9tb21lbnQvbWluLW1heCc7XHJcbmltcG9ydCB7IER1cmF0aW9uLCBpc0R1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY29uc3RydWN0b3InO1xyXG5pbXBvcnQgeyBjcmVhdGVMb2NhbE9yVVRDIH0gZnJvbSAnLi4vY3JlYXRlL2Zyb20tYW55dGhpbmcnO1xyXG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XHJcblxyXG5leHBvcnQgdHlwZSBEYXRlSW5wdXQgPSBzdHJpbmcgfCBudW1iZXIgfCBEYXRlIHwgc3RyaW5nW10gfCBEYXRlQXJyYXkgfCBNb21lbnRJbnB1dE9iamVjdDtcclxuXHJcbmV4cG9ydCBjb25zdCBtb21lbnQ6IE1vbWVudEZuID0gKF9tb21lbnQgYXMgTW9tZW50Rm4pO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb21lbnRGbiB7XHJcbiAgKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IEtocm9ub3M7XHJcblxyXG4gIElTT184NjAxOiBzdHJpbmc7XHJcbiAgUkZDXzI4MjI6IHN0cmluZztcclxuXHJcbiAgdXRjKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZyB8IGJvb2xlYW4sIHN0cmljdD86IGJvb2xlYW4pOiBLaHJvbm9zO1xyXG5cclxuICBwYXJzZVpvbmUoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbik6IEtocm9ub3M7XHJcblxyXG4gIHVuaXgobnVtOiBudW1iZXIpOiBLaHJvbm9zO1xyXG5cclxuICBsb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10sIHZhbHVlcz86IExvY2FsZURhdGEpOiBzdHJpbmc7XHJcblxyXG4gIGR1cmF0aW9uKGlucD86IER1cmF0aW9uIHwgRGF0ZUlucHV0IHwgS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBEdXJhdGlvbjtcclxuXHJcbiAgZGVmaW5lTG9jYWxlKG5hbWU6IHN0cmluZywgY29uZmlnPzogTG9jYWxlRGF0YSk6IExvY2FsZTtcclxuXHJcbiAgcGFyc2VUd29EaWdpdFllYXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlcjtcclxuXHJcbiAgaXNEYXRlKGlucHV0PzogYW55KTogaW5wdXQgaXMgRGF0ZTtcclxuXHJcbiAgbW9udGhzKCk6IHN0cmluZ1tdO1xyXG5cclxuICBtb250aHMoaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgbW9udGhzKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIG1vbnRocyhmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgbW9udGhzU2hvcnQoKTogc3RyaW5nW107XHJcblxyXG4gIG1vbnRoc1Nob3J0KGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoc1Nob3J0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIG1vbnRoc1Nob3J0KGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5cygpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXMoaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgd2Vla2RheXMoZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXMoZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzKGxvY2FsZVNvcnRlZDogYm9vbGVhbik6IHN0cmluZ1tdO1xyXG5cclxuICB3ZWVrZGF5cyhsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXMobG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgd2Vla2RheXNTaG9ydCgpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXNTaG9ydChpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5c1Nob3J0KGZvcm1hdDogc3RyaW5nKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzU2hvcnQoZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzU2hvcnQobG9jYWxlU29ydGVkOiBib29sZWFuKTogc3RyaW5nW107XHJcblxyXG4gIHdlZWtkYXlzU2hvcnQobG9jYWxlU29ydGVkOiBib29sZWFuLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5c1Nob3J0KGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXNTaG9ydChsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGZvcm1hdDogc3RyaW5nLCBpbmRleDogbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICB3ZWVrZGF5c01pbigpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXNNaW4oaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgd2Vla2RheXNNaW4oZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXNNaW4oZm9ybWF0OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZDogYm9vbGVhbik6IHN0cmluZ1tdO1xyXG5cclxuICB3ZWVrZGF5c01pbihsb2NhbGVTb3J0ZWQ6IGJvb2xlYW4sIGluZGV4OiBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIHdlZWtkYXlzTWluKGxvY2FsZVNvcnRlZDogYm9vbGVhbiwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmdbXTtcclxuXHJcbiAgd2Vla2RheXNNaW4obG9jYWxlU29ydGVkOiBib29sZWFuLCBmb3JtYXQ6IHN0cmluZywgaW5kZXg6IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgcmVsYXRpdmVUaW1lVGhyZXNob2xkKHRocmVzaG9sZDogc3RyaW5nKTogbnVtYmVyIHwgYm9vbGVhbjtcclxuXHJcbiAgcmVsYXRpdmVUaW1lVGhyZXNob2xkKHRocmVzaG9sZDogc3RyaW5nLCBsaW1pdDogbnVtYmVyKTogYm9vbGVhbjtcclxuXHJcbiAgbWluKC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zO1xyXG5cclxuICBtYXgoLi4uZGF0ZXM6ICgoRGF0ZUlucHV0IHwgS2hyb25vcylbXSB8IChEYXRlSW5wdXQgfCBLaHJvbm9zKSlbXSk6IEtocm9ub3M7XHJcblxyXG4gIGxvY2FsZURhdGEoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10gfCBLaHJvbm9zKTogTG9jYWxlO1xyXG5cclxuICB1cGRhdGVMb2NhbGUobGFuZ3VhZ2U6IHN0cmluZywgbG9jYWxlU3BlYz86IExvY2FsZURhdGEpOiBMb2NhbGU7XHJcblxyXG4gIGNhbGVuZGFyRm9ybWF0KG06IERhdGUsIG5vdzogRGF0ZSk6IHN0cmluZztcclxuXHJcbiAgLy8gdG9kbzogcmVtb3ZlIHRoaXNcclxuICBjYWxlbmRhckZvcm1hdChtOiBLaHJvbm9zLCBub3c6IEtocm9ub3MpOiBzdHJpbmc7XHJcblxyXG4gIC8vIHRvZG86IGltcGxlbWVudFxyXG4gIGludmFsaWQoKTogS2hyb25vcztcclxuXHJcbiAgbG9jYWxlcygpOiBzdHJpbmdbXTtcclxuXHJcbiAgLy8gdG9kbzogaW1wbGVtZW50XHJcbiAgdXBkYXRlT2Zmc2V0KG06IEtocm9ub3MsIGtlZXBUaW1lPzogYm9vbGVhbik6IHZvaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9tb21lbnQoaW5wdXQ/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbiwgaXNVVEM/OiBib29sZWFuKTogS2hyb25vcyB7XHJcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgS2hyb25vcykge1xyXG4gICAgY29uc3QgX2RhdGUgPSBpbnB1dC5jbG9uZSgpO1xyXG5cclxuICAgIHJldHVybiBpc1VUQyA/IF9kYXRlLnV0YygpIDogX2RhdGU7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNCb29sZWFuKGxvY2FsZUtleSkpIHtcclxuICAgIHJldHVybiBuZXcgS2hyb25vcyhpbnB1dCwgZm9ybWF0LCBudWxsLCBsb2NhbGVLZXksIGlzVVRDKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBuZXcgS2hyb25vcyhpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xyXG59XHJcblxyXG5tb21lbnQudXRjID0gKGlucHV0PzogRGF0ZUlucHV0IHwgS2hyb25vcywgZm9ybWF0Pzogc3RyaW5nLCBsb2NhbGVLZXk/OiBzdHJpbmcgfCBib29sZWFuLCBzdHJpY3Q/OiBib29sZWFuKTogS2hyb25vcyA9PiB7XHJcbiAgcmV0dXJuIF9tb21lbnQoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIHRydWUpO1xyXG59O1xyXG5cclxubW9tZW50LnBhcnNlWm9uZSA9IChpbnB1dD86IERhdGVJbnB1dCB8IEtocm9ub3MsIGZvcm1hdD86IHN0cmluZywgbG9jYWxlS2V5Pzogc3RyaW5nIHwgYm9vbGVhbiwgc3RyaWN0PzogYm9vbGVhbik6IEtocm9ub3MgPT4ge1xyXG4gIHJldHVybiBfbW9tZW50KGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCB0cnVlKS5wYXJzZVpvbmUoKTtcclxufTtcclxuXHJcbm1vbWVudC5sb2NhbGUgPSBnZXRTZXRHbG9iYWxMb2NhbGU7XHJcbm1vbWVudC5sb2NhbGVEYXRhID0gKGtleT86IHN0cmluZyB8IHN0cmluZ1tdIHwgS2hyb25vcyk6IExvY2FsZSA9PiB7XHJcbiAgaWYgKGtleSBpbnN0YW5jZW9mIEtocm9ub3MpIHtcclxuICAgIHJldHVybiBrZXkubG9jYWxlRGF0YSgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdldExvY2FsZShrZXkpO1xyXG59O1xyXG5cclxuLy8gbW9tZW50LnV0YyA9IGNyZWF0ZVVUQztcclxubW9tZW50LnVuaXggPSAoaW5wOiBudW1iZXIpID0+IG5ldyBLaHJvbm9zKGlucCAqIDEwMDApO1xyXG5tb21lbnQuSVNPXzg2MDEgPSBJU09fODYwMTtcclxubW9tZW50LlJGQ18yODIyID0gUkZDXzI4MjI7XHJcbm1vbWVudC5kZWZpbmVMb2NhbGUgPSBkZWZpbmVMb2NhbGU7XHJcbm1vbWVudC5wYXJzZVR3b0RpZ2l0WWVhciA9IHBhcnNlVHdvRGlnaXRZZWFyO1xyXG5tb21lbnQuaXNEYXRlID0gaXNEYXRlO1xyXG5tb21lbnQuaW52YWxpZCA9IGZ1bmN0aW9uIF9pbnZhbGlkKCk6IEtocm9ub3Mge1xyXG4gIHJldHVybiBuZXcgS2hyb25vcyhuZXcgRGF0ZShOYU4pKTtcclxufTtcclxuXHJcbi8vIGR1cmF0aW9uKGlucD86IER1cmF0aW9uIHwgRGF0ZUlucHV0IHwgS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBEdXJhdGlvbjtcclxubW9tZW50LmR1cmF0aW9uID0gKGlucHV0PzogRHVyYXRpb24gfCBEYXRlSW5wdXQgfCBLaHJvbm9zLCB1bml0PzogTW9tZW50VW5pdE9mVGltZSk6IER1cmF0aW9uID0+IHtcclxuICBjb25zdCBfdW5pdCA9IG1hcFVuaXRPZlRpbWUodW5pdCk7XHJcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndG9kbyBpbXBsZW1lbnQnKTtcclxuICB9XHJcblxyXG4gIGlmIChpbnB1dCA9PSBudWxsKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKGlucHV0LCBfdW5pdCwgeyBfbG9jYWxlOiBpbnB1dC5fbG9jYWxlIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGlucHV0KSB8fCBpc051bWJlcihpbnB1dCkgfHwgaXNEdXJhdGlvbihpbnB1dCkgfHwgaXNPYmplY3Q8RGF0ZU9iamVjdD4oaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlRHVyYXRpb24oaW5wdXQsIF91bml0KTtcclxuICB9XHJcblxyXG4gIHRocm93IG5ldyBFcnJvcigndG9kbyBpbXBsZW1lbnQnKTtcclxufTtcclxuXHJcbm1vbWVudC5taW4gPSBmdW5jdGlvbiBfbWluKC4uLmRhdGVzOiAoKERhdGVJbnB1dCB8IEtocm9ub3MpW10gfCAoRGF0ZUlucHV0IHwgS2hyb25vcykpW10pOiBLaHJvbm9zIHtcclxuICBjb25zdCBfZmlyc3RBcmcgPSBkYXRlc1swXTtcclxuICBjb25zdCBfZGF0ZXMgPSAoaXNBcnJheShfZmlyc3RBcmcpID8gX2ZpcnN0QXJnIDogZGF0ZXMpXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAubWFwKChkYXRlOiBLaHJvbm9zKSA9PiBfbW9tZW50KGRhdGUpKVxyXG4gICAgLm1hcChkYXRlID0+IGRhdGUudG9EYXRlKCkpO1xyXG5cclxuICBjb25zdCBfZGF0ZSA9IG1pbiguLi5fZGF0ZXMpO1xyXG5cclxuICByZXR1cm4gbmV3IEtocm9ub3MoX2RhdGUpO1xyXG59O1xyXG5cclxubW9tZW50Lm1heCA9IGZ1bmN0aW9uIF9tYXgoLi4uZGF0ZXM6ICgoRGF0ZUlucHV0IHwgS2hyb25vcylbXSB8IChEYXRlSW5wdXQgfCBLaHJvbm9zKSlbXSk6IEtocm9ub3Mge1xyXG4gIGNvbnN0IF9maXJzdEFyZyA9IGRhdGVzWzBdO1xyXG4gIGNvbnN0IF9kYXRlcyA9IChpc0FycmF5KF9maXJzdEFyZykgPyBfZmlyc3RBcmcgOiBkYXRlcylcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIC5tYXAoKGRhdGU6IEtocm9ub3MpID0+IF9tb21lbnQoZGF0ZSkpXHJcbiAgICAubWFwKGRhdGUgPT4gZGF0ZS50b0RhdGUoKSk7XHJcblxyXG4gIGNvbnN0IF9kYXRlID0gbWF4KC4uLl9kYXRlcyk7XHJcblxyXG4gIHJldHVybiBuZXcgS2hyb25vcyhfZGF0ZSk7XHJcbn07XHJcblxyXG5tb21lbnQubG9jYWxlcyA9ICgpOiBzdHJpbmdbXSA9PiB7XHJcbiAgcmV0dXJuIGxpc3RMb2NhbGVzKCk7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vbWVudElucHV0T2JqZWN0IHtcclxuICB5ZWFycz86IG51bWJlcjtcclxuICB5ZWFyPzogbnVtYmVyO1xyXG4gIHk/OiBudW1iZXI7XHJcblxyXG4gIG1vbnRocz86IG51bWJlcjtcclxuICBtb250aD86IG51bWJlcjtcclxuICBNPzogbnVtYmVyO1xyXG5cclxuICBkYXlzPzogbnVtYmVyO1xyXG4gIGRheT86IG51bWJlcjtcclxuICBkPzogbnVtYmVyO1xyXG5cclxuICBkYXRlcz86IG51bWJlcjtcclxuICBkYXRlPzogbnVtYmVyO1xyXG4gIEQ/OiBudW1iZXI7XHJcblxyXG4gIGhvdXJzPzogbnVtYmVyO1xyXG4gIGhvdXI/OiBudW1iZXI7XHJcbiAgaD86IG51bWJlcjtcclxuXHJcbiAgbWludXRlcz86IG51bWJlcjtcclxuICBtaW51dGU/OiBudW1iZXI7XHJcbiAgbT86IG51bWJlcjtcclxuXHJcbiAgc2Vjb25kcz86IG51bWJlcjtcclxuICBzZWNvbmQ/OiBudW1iZXI7XHJcbiAgcz86IG51bWJlcjtcclxuXHJcbiAgbWlsbGlzZWNvbmRzPzogbnVtYmVyO1xyXG4gIG1pbGxpc2Vjb25kPzogbnVtYmVyO1xyXG4gIG1zPzogbnVtYmVyO1xyXG5cclxuICB3PzogbnVtYmVyO1xyXG4gIHdlZWs/OiBudW1iZXI7XHJcbiAgd2Vla3M/OiBudW1iZXI7XHJcblxyXG4gIFE/OiBudW1iZXI7XHJcbiAgcXVhcnRlcj86IG51bWJlcjtcclxuICBxdWFydGVycz86IG51bWJlcjtcclxuXHJcbiAgd2Vla1llYXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE1vbWVudFVuaXRPZlRpbWUgPSAoXHJcbiAgJ3llYXInIHwgJ3llYXJzJyB8ICd5JyB8XHJcbiAgJ21vbnRoJyB8ICdtb250aHMnIHwgJ00nIHxcclxuICAnd2VlaycgfCAnd2Vla3MnIHwgJ3cnIHxcclxuICAnZGF5JyB8ICdkYXlzJyB8ICdkJyB8XHJcbiAgJ2hvdXInIHwgJ2hvdXJzJyB8ICdoJyB8XHJcbiAgJ21pbnV0ZScgfCAnbWludXRlcycgfCAnbScgfFxyXG4gICdzZWNvbmQnIHwgJ3NlY29uZHMnIHwgJ3MnIHxcclxuICAnbWlsbGlzZWNvbmQnIHwgJ21pbGxpc2Vjb25kcycgfCAnbXMnIHxcclxuICAncScgfCAncXVhcnRlcicgfCAncXVhcnRlcnMnIHwgJ1EnIHxcclxuICAnaXNvV2VlaycgfCAnaXNvV2Vla3MnIHwgJ1cnIHxcclxuICAnZGF0ZScgfCAnZGF0ZXMnIHwgJ0QnXHJcbiAgKTtcclxuXHJcbmV4cG9ydCB0eXBlIE1vbWVudEFsbCA9IE1vbWVudFVuaXRPZlRpbWUgfFxyXG4gICd3ZWVrWWVhcicgfCAnd2Vla1llYXJzJyB8ICdnZycgfFxyXG4gICdpc29XZWVrWWVhcicgfCAnaXNvV2Vla1llYXJzJyB8ICdHRycgfFxyXG4gICdkYXlPZlllYXInIHwgJ2RheU9mWWVhcnMnIHwgJ0RERCcgfFxyXG4gICd3ZWVrZGF5JyB8ICd3ZWVrZGF5cycgfCAnZScgfFxyXG4gICdpc29XZWVrZGF5JyB8ICdpc29XZWVrZGF5cycgfCAnRSc7XHJcblxyXG5jb25zdCBfdW5pdHNQcmlvcml0eToge1trZXkgaW4gVW5pdE9mVGltZV06IG51bWJlcn0gPSB7XHJcbiAgeWVhcjogMSxcclxuICBtb250aDogOCxcclxuICB3ZWVrOiA1LFxyXG4gIGlzb1dlZWs6IDUsXHJcbiAgZGF5OiAxMSxcclxuICB3ZWVrZGF5OiAxMSxcclxuICBpc29XZWVrZGF5OiAxMSxcclxuICBob3VyczogMTMsXHJcbiAgd2Vla1llYXI6IDEsXHJcbiAgaXNvV2Vla1llYXI6IDEsXHJcbiAgcXVhcnRlcjogNyxcclxuICBkYXRlOiA5LFxyXG4gIGRheU9mWWVhcjogNCxcclxuICBtaW51dGVzOiAxNCxcclxuICBzZWNvbmRzOiAxNSxcclxuICBtaWxsaXNlY29uZHM6IDE2XHJcbn07XHJcblxyXG4vLyB0b2RvOiBkbyBJIG5lZWQgMiBtYXBwZXJzP1xyXG5jb25zdCBfdGltZUhhc2hNYXA6IHsgW2tleSBpbiBNb21lbnRBbGxdOiBVbml0T2ZUaW1lIHwgc3RyaW5nIH0gPSB7XHJcbiAgeTogJ3llYXInLFxyXG4gIHllYXJzOiAneWVhcicsXHJcbiAgeWVhcjogJ3llYXInLFxyXG4gIE06ICdtb250aCcsXHJcbiAgbW9udGhzOiAnbW9udGgnLFxyXG4gIG1vbnRoOiAnbW9udGgnLFxyXG4gIHc6ICd3ZWVrJyxcclxuICB3ZWVrczogJ3dlZWsnLFxyXG4gIHdlZWs6ICd3ZWVrJyxcclxuXHJcbiAgZDogJ2RheScsXHJcbiAgZGF5czogJ2RheScsXHJcbiAgZGF5OiAnZGF5JyxcclxuXHJcbiAgZGF0ZTogJ2RhdGUnLFxyXG4gIGRhdGVzOiAnZGF0ZScsXHJcbiAgRDogJ2RhdGUnLFxyXG5cclxuICBoOiAnaG91cnMnLFxyXG4gIGhvdXI6ICdob3VycycsXHJcbiAgaG91cnM6ICdob3VycycsXHJcbiAgbTogJ21pbnV0ZXMnLFxyXG4gIG1pbnV0ZTogJ21pbnV0ZXMnLFxyXG4gIG1pbnV0ZXM6ICdtaW51dGVzJyxcclxuICBzOiAnc2Vjb25kcycsXHJcbiAgc2Vjb25kOiAnc2Vjb25kcycsXHJcbiAgc2Vjb25kczogJ3NlY29uZHMnLFxyXG4gIG1zOiAnbWlsbGlzZWNvbmRzJyxcclxuICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kcycsXHJcbiAgbWlsbGlzZWNvbmRzOiAnbWlsbGlzZWNvbmRzJyxcclxuICBxdWFydGVyOiAncXVhcnRlcicsXHJcbiAgcXVhcnRlcnM6ICdxdWFydGVyJyxcclxuICBxOiAncXVhcnRlcicsXHJcbiAgUTogJ3F1YXJ0ZXInLFxyXG4gIGlzb1dlZWs6ICdpc29XZWVrJyxcclxuICBpc29XZWVrczogJ2lzb1dlZWsnLFxyXG4gIFc6ICdpc29XZWVrJyxcclxuICB3ZWVrWWVhcjogJ3dlZWtZZWFyJyxcclxuICB3ZWVrWWVhcnM6ICd3ZWVrWWVhcicsXHJcbiAgZ2c6ICd3ZWVrWWVhcnMnLFxyXG4gIGlzb1dlZWtZZWFyOiAnaXNvV2Vla1llYXInLFxyXG4gIGlzb1dlZWtZZWFyczogJ2lzb1dlZWtZZWFyJyxcclxuICBHRzogJ2lzb1dlZWtZZWFyJyxcclxuICBkYXlPZlllYXI6ICdkYXlPZlllYXInLFxyXG4gIGRheU9mWWVhcnM6ICdkYXlPZlllYXInLFxyXG4gIERERDogJ2RheU9mWWVhcicsXHJcbiAgd2Vla2RheTogJ3dlZWtkYXknLFxyXG4gIHdlZWtkYXlzOiAnd2Vla2RheScsXHJcbiAgZTogJ3dlZWtkYXknLFxyXG4gIGlzb1dlZWtkYXk6ICdpc29XZWVrZGF5JyxcclxuICBpc29XZWVrZGF5czogJ2lzb1dlZWtkYXknLFxyXG4gIEU6ICdpc29XZWVrZGF5J1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFwVW5pdE9mVGltZShwZXJpb2Q6IE1vbWVudEFsbCk6IFVuaXRPZlRpbWUge1xyXG4gIHJldHVybiBfdGltZUhhc2hNYXBbcGVyaW9kXSBhcyBVbml0T2ZUaW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBNb21lbnRJbnB1dE9iamVjdChvYmo6IE1vbWVudElucHV0T2JqZWN0KToge1trZXkgaW4gVW5pdE9mVGltZV0/OiBudW1iZXJ9IHtcclxuICBjb25zdCBfcmVzOiB7W2tleSBpbiBVbml0T2ZUaW1lXT86IG51bWJlcn0gPSB7fTtcclxuXHJcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iailcclxuICAgIC5yZWR1Y2UoKHJlcywga2V5OiBrZXlvZiBNb21lbnRJbnB1dE9iamVjdCkgPT4ge1xyXG4gICAgICByZXNbbWFwVW5pdE9mVGltZShrZXkpXSA9IG9ialtrZXldO1xyXG5cclxuICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0sIF9yZXMpO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgS2hyb25vcyB7XHJcbiAgX2RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIF9pc1VUQyA9IGZhbHNlO1xyXG4gIF9pc1N0cmljdDogYm9vbGVhbjtcclxuICBfbG9jYWxlOiBMb2NhbGU7XHJcbiAgX2Zvcm1hdDogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgX29mZnNldDogbnVtYmVyO1xyXG4gIF90em06IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoaW5wdXQ/OiBEYXRlSW5wdXQsXHJcbiAgICAgICAgICAgICAgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sXHJcbiAgICAgICAgICAgICAgbG9jYWxlS2V5Pzogc3RyaW5nLFxyXG4gICAgICAgICAgICAgIHN0cmljdCA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgIGlzVVRDID0gZmFsc2UsXHJcbiAgICAgICAgICAgICAgb2Zmc2V0PzogbnVtYmVyKSB7XHJcbiAgICAvLyBsb2NhbGUgd2lsbCBiZSBuZWVkZWQgdG8gZm9ybWF0IGludmFsaWQgZGF0ZSBtZXNzYWdlXHJcbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlS2V5KTtcclxuICAgIC8vIHBhcnNlIGludmFsaWQgaW5wdXRcclxuICAgIGlmIChpbnB1dCA9PT0gJycgfHwgaW5wdXQgPT09IG51bGwgfHwgKGlzTnVtYmVyKGlucHV0KSAmJiBpc05hTihpbnB1dCkpKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZShOYU4pO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faXNVVEMgPSBpc1VUQztcclxuICAgIGlmICh0aGlzLl9pc1VUQykge1xyXG4gICAgICB0aGlzLl9vZmZzZXQgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG9mZnNldCB8fCBvZmZzZXQgPT09IDApIHtcclxuICAgICAgdGhpcy5fb2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5faXNTdHJpY3QgPSBzdHJpY3Q7XHJcbiAgICB0aGlzLl9mb3JtYXQgPSBmb3JtYXQ7XHJcblxyXG4gICAgaWYgKCFpbnB1dCAmJiBpbnB1dCAhPT0gMCAmJiAhZm9ybWF0KSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShpbnB1dCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzLl9kYXRlID0gcGFyc2VEYXRlKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XHJcbiAgICBjb25zdCBjb25maWcgPSBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XHJcbiAgICB0aGlzLl9kYXRlID0gY29uZmlnLl9kO1xyXG4gICAgdGhpcy5fb2Zmc2V0ID0gaXNOdW1iZXIoY29uZmlnLl9vZmZzZXQpID8gY29uZmlnLl9vZmZzZXQgOiB0aGlzLl9vZmZzZXQ7XHJcbiAgICB0aGlzLl9pc1VUQyA9IGNvbmZpZy5faXNVVEM7XHJcbiAgICB0aGlzLl9pc1N0cmljdCA9IGNvbmZpZy5fc3RyaWN0O1xyXG4gICAgdGhpcy5fZm9ybWF0ID0gY29uZmlnLl9mO1xyXG4gICAgdGhpcy5fdHptID0gY29uZmlnLl90em07XHJcbiAgfVxyXG5cclxuICBfdG9Db25maWcoKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgcmV0dXJuIHsgX2lzVVRDOiB0aGlzLl9pc1VUQywgX2xvY2FsZTogdGhpcy5fbG9jYWxlLCBfb2Zmc2V0OiB0aGlzLl9vZmZzZXQsIF90em06IHRoaXMuX3R6bSB9O1xyXG4gIH1cclxuXHJcbiAgLy8gTG9jYWxlXHJcbiAgbG9jYWxlKCk6IHN0cmluZztcclxuICBsb2NhbGUobG9jYWxlS2V5OiBzdHJpbmcgfCBzdHJpbmdbXSB8IEtocm9ub3MpOiBLaHJvbm9zO1xyXG4gIGxvY2FsZShsb2NhbGVLZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSB8IEtocm9ub3MpOiBLaHJvbm9zIHwgc3RyaW5nIHtcclxuICAgIGlmIChpc1VuZGVmaW5lZChsb2NhbGVLZXkpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9sb2NhbGUuX2FiYnI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsZUtleSBpbnN0YW5jZW9mIEtocm9ub3MpIHtcclxuICAgICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlS2V5Ll9sb2NhbGU7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdMb2NhbGVEYXRhID0gZ2V0TG9jYWxlKGxvY2FsZUtleSk7XHJcbiAgICBpZiAobmV3TG9jYWxlRGF0YSAhPSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2xvY2FsZSA9IG5ld0xvY2FsZURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBsb2NhbGVEYXRhKCk6IExvY2FsZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgLy8gQmFzaWNcclxuXHJcbiAgYWRkKHZhbDogbnVtYmVyIHwgc3RyaW5nIHwgTW9tZW50SW5wdXRPYmplY3QsIHBlcmlvZD86IFVuaXRPZlRpbWUgfCBNb21lbnRVbml0T2ZUaW1lKTogS2hyb25vcyB7XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gYWRkKHRoaXMuX2RhdGUsIHBhcnNlSW50KHZhbCwgMTApLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc051bWJlcih2YWwpKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSBhZGQodGhpcy5fZGF0ZSwgdmFsLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdDxNb21lbnRJbnB1dE9iamVjdD4odmFsKSkge1xyXG4gICAgICBjb25zdCBfbWFwcGVkID0gbWFwTW9tZW50SW5wdXRPYmplY3QodmFsKTtcclxuICAgICAgT2JqZWN0LmtleXMoX21hcHBlZClcclxuICAgICAgICAuZm9yRWFjaCgoa2V5OiBVbml0T2ZUaW1lKSA9PiBhZGQodGhpcy5fZGF0ZSwgX21hcHBlZFtrZXldLCBrZXkpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIGZpeG1lOiBmb3Igc29tZSByZWFzb24gaGVyZSAnbnVsbCcgZm9yIHRpbWUgaXMgZmluZVxyXG4gIGNhbGVuZGFyKHRpbWU/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCBmb3JtYXRzPzogQ2FsZW5kYXJTcGVjKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IF90aW1lID0gdGltZSBpbnN0YW5jZW9mIEtocm9ub3MgPyB0aW1lIDogbmV3IEtocm9ub3ModGltZSB8fCBuZXcgRGF0ZSgpKTtcclxuICAgIGNvbnN0IF9vZmZzZXQgPSAodGhpcy5fb2Zmc2V0IHx8IDApIC0gKF90aW1lLl9vZmZzZXQgfHwgMCk7XHJcbiAgICBjb25zdCBfY29uZmlnID0gT2JqZWN0LmFzc2lnbih0aGlzLl90b0NvbmZpZygpLCB7IF9vZmZzZXQgfSk7XHJcblxyXG4gICAgcmV0dXJuIGNhbGVuZGFyKHRoaXMuX2RhdGUsIF90aW1lLl9kYXRlLFxyXG4gICAgICBmb3JtYXRzLCB0aGlzLl9sb2NhbGUsIF9jb25maWcpO1xyXG4gIH1cclxuXHJcbiAgY2xvbmUoKTogS2hyb25vcyB7XHJcbiAgICBjb25zdCBsb2NhbGVLZXkgPSB0aGlzLl9sb2NhbGUgJiYgdGhpcy5fbG9jYWxlLl9hYmJyIHx8ICdlbic7XHJcblxyXG4gICAgLy8gcmV0dXJuIG5ldyBLaHJvbm9zKGNsb25lRGF0ZSh0aGlzLl9kYXRlKSwgdGhpcy5fZm9ybWF0LCBsb2NhbGVLZXksIHRoaXMuX2lzU3RyaWN0LCB0aGlzLl9pc1VUQyk7XHJcbiAgICAvLyBmYWlscyBpZiBpc1VUQyBhbmQgb2Zmc2V0XHJcbiAgICAvLyByZXR1cm4gbmV3IEtocm9ub3MobmV3IERhdGUodGhpcy52YWx1ZU9mKCkpLFxyXG4gICAgcmV0dXJuIG5ldyBLaHJvbm9zKHRoaXMuX2RhdGUsXHJcbiAgICAgIHRoaXMuX2Zvcm1hdCxcclxuICAgICAgbG9jYWxlS2V5LFxyXG4gICAgICB0aGlzLl9pc1N0cmljdCxcclxuICAgICAgdGhpcy5faXNVVEMsXHJcbiAgICAgIHRoaXMuX29mZnNldCk7XHJcbiAgfVxyXG5cclxuICBkaWZmKGI6IERhdGVJbnB1dCB8IEtocm9ub3MsIHVuaXRPZlRpbWU/OiBNb21lbnRVbml0T2ZUaW1lLCBwcmVjaXNlPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBjb25zdCB1bml0ID0gbWFwVW5pdE9mVGltZSh1bml0T2ZUaW1lKTtcclxuICAgIGNvbnN0IF9iID0gYiBpbnN0YW5jZW9mIEtocm9ub3MgPyBiIDogbmV3IEtocm9ub3MoYik7XHJcbiAgICAvLyBjb25zdCB6b25lRGVsdGEgPSAoX2IudXRjT2Zmc2V0KCkgLSB0aGlzLnV0Y09mZnNldCgpKTtcclxuICAgIC8vIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24odGhpcy5fdG9Db25maWcoKSwge1xyXG4gICAgLy8gICBfb2Zmc2V0OiAwLFxyXG4gICAgLy8gICBfaXNVVEM6IHRydWUsXHJcbiAgICAvLyAgIF96b25lRGVsdGE6IHpvbmVEZWx0YVxyXG4gICAgLy8gfSk7XHJcbiAgICAvLyByZXR1cm4gZGlmZihuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSksIG5ldyBEYXRlKF9iLnZhbHVlT2YoKSksIHVuaXQsIHByZWNpc2UsIGNvbmZpZyk7XHJcblxyXG4gICAgcmV0dXJuIGRpZmYodGhpcy5fZGF0ZSwgX2IudG9EYXRlKCksIHVuaXQsIHByZWNpc2UsIHRoaXMuX3RvQ29uZmlnKCkpO1xyXG4gIH1cclxuXHJcbiAgZW5kT2YocGVyaW9kPzogTW9tZW50VW5pdE9mVGltZSk6IEtocm9ub3Mge1xyXG4gICAgY29uc3QgX3BlciA9IG1hcFVuaXRPZlRpbWUocGVyaW9kKTtcclxuICAgIHRoaXMuX2RhdGUgPSBlbmRPZih0aGlzLl9kYXRlLCBfcGVyLCB0aGlzLl9pc1VUQyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBmb3JtYXQoZm9ybWF0Pzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBmb3JtYXREYXRlKHRoaXMuX2RhdGUsIGZvcm1hdCwgdGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5fYWJiciwgdGhpcy5faXNVVEMsIHRoaXMuX29mZnNldCk7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBpbXBsZW1lbnRcclxuICBmcm9tKHRpbWU/OiBEYXRlSW5wdXQgfCBLaHJvbm9zLCB3aXRob3V0U3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBfdGltZSA9IF9tb21lbnQodGltZSk7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkKCkgJiYgX3RpbWUuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVEdXJhdGlvbih7IHRvOiB0aGlzLnRvRGF0ZSgpLCBmcm9tOiBfdGltZS50b0RhdGUoKSB9KVxyXG4gICAgICAgIC5sb2NhbGUodGhpcy5sb2NhbGUoKSlcclxuICAgICAgICAuaHVtYW5pemUoIXdpdGhvdXRTdWZmaXgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZTtcclxuICB9XHJcblxyXG4gIGZyb21Ob3cod2l0aG91dFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZnJvbShuZXcgRGF0ZSgpLCB3aXRob3V0U3VmZml4KTtcclxuICB9XHJcblxyXG4gIHRvKGlucDogRGF0ZUlucHV0IHwgS2hyb25vcywgc3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFRPRE86IEltcGxlbWVudGApO1xyXG4gIH1cclxuXHJcbiAgdG9Ob3cod2l0aG91dFByZWZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBJbXBsZW1lbnRgKTtcclxuICB9XHJcblxyXG4gIHN1YnRyYWN0KHZhbDogbnVtYmVyIHwgc3RyaW5nIHwgTW9tZW50SW5wdXRPYmplY3QsIHBlcmlvZD86IFVuaXRPZlRpbWUgfCBNb21lbnRVbml0T2ZUaW1lKTogS2hyb25vcyB7XHJcbiAgICBpZiAoaXNTdHJpbmcodmFsKSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gc3VidHJhY3QodGhpcy5fZGF0ZSwgcGFyc2VJbnQodmFsLCAxMCksIG1hcFVuaXRPZlRpbWUocGVyaW9kKSk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOdW1iZXIodmFsKSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gc3VidHJhY3QodGhpcy5fZGF0ZSwgdmFsLCBtYXBVbml0T2ZUaW1lKHBlcmlvZCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdDxNb21lbnRJbnB1dE9iamVjdD4odmFsKSkge1xyXG4gICAgICBjb25zdCBfbWFwcGVkID0gbWFwTW9tZW50SW5wdXRPYmplY3QodmFsKTtcclxuICAgICAgT2JqZWN0LmtleXMoX21hcHBlZClcclxuICAgICAgICAuZm9yRWFjaCgoa2V5OiBVbml0T2ZUaW1lKSA9PiBzdWJ0cmFjdCh0aGlzLl9kYXRlLCBfbWFwcGVkW2tleV0sIGtleSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0KHBlcmlvZDogTW9tZW50QWxsKTogbnVtYmVyIHtcclxuICAgIGlmIChwZXJpb2QgPT09ICdkYXlPZlllYXInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRheU9mWWVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVuaXQgPSBtYXBVbml0T2ZUaW1lKHBlcmlvZCk7XHJcbiAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgY2FzZSAneWVhcic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueWVhcigpO1xyXG4gICAgICBjYXNlICdtb250aCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubW9udGgoKTtcclxuICAgICAgLy8gfCAnd2VlaydcclxuICAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZSgpO1xyXG4gICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmRheSgpO1xyXG4gICAgICBjYXNlICdob3Vycyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoKTtcclxuICAgICAgY2FzZSAnbWludXRlcyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWludXRlcygpO1xyXG4gICAgICBjYXNlICdzZWNvbmRzJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzKCk7XHJcbiAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmRzKCk7XHJcbiAgICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWsoKTtcclxuICAgICAgY2FzZSAnaXNvV2Vlayc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2VlaygpO1xyXG4gICAgICBjYXNlICd3ZWVrWWVhcic6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud2Vla1llYXIoKTtcclxuICAgICAgY2FzZSAnaXNvV2Vla1llYXInOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKCk7XHJcbiAgICAgIGNhc2UgJ3dlZWtkYXknOlxyXG4gICAgICAgIHJldHVybiB0aGlzLndlZWtkYXkoKTtcclxuICAgICAgY2FzZSAnaXNvV2Vla2RheSc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla2RheSgpO1xyXG4gICAgICBjYXNlICdxdWFydGVyJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5xdWFydGVyKCk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vbWVudC5nZXQoJyR7cGVyaW9kfScpYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQocGVyaW9kOiBNb21lbnRBbGwgfCBNb21lbnRJbnB1dE9iamVjdCwgaW5wdXQ/OiBudW1iZXIpOiBLaHJvbm9zIHtcclxuXHJcbiAgICBpZiAoaXNTdHJpbmcocGVyaW9kKSkge1xyXG4gICAgICBjb25zdCB1bml0ID0gbWFwVW5pdE9mVGltZShwZXJpb2QpO1xyXG4gICAgICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLnllYXIoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ21vbnRoJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1vbnRoKGlucHV0KTtcclxuICAgICAgICAvLyB8ICd3ZWVrJ1xyXG4gICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5kYXkoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZGF0ZShpbnB1dCk7XHJcbiAgICAgICAgY2FzZSAnaG91cnMnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaG91cnMoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ21pbnV0ZXMnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubWludXRlcyhpbnB1dCk7XHJcbiAgICAgICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZWNvbmRzKGlucHV0KTtcclxuICAgICAgICBjYXNlICdtaWxsaXNlY29uZHMnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubWlsbGlzZWNvbmRzKGlucHV0KTtcclxuICAgICAgICBjYXNlICd3ZWVrJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLndlZWsoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ2lzb1dlZWsnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2VlayhpbnB1dCk7XHJcbiAgICAgICAgY2FzZSAnd2Vla1llYXInOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMud2Vla1llYXIoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ2lzb1dlZWtZZWFyJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmlzb1dlZWtZZWFyKGlucHV0KTtcclxuICAgICAgICBjYXNlICd3ZWVrZGF5JzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLndlZWtkYXkoaW5wdXQpO1xyXG4gICAgICAgIGNhc2UgJ2lzb1dlZWtkYXknOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuaXNvV2Vla2RheShpbnB1dCk7XHJcbiAgICAgICAgY2FzZSAncXVhcnRlcic6XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5xdWFydGVyKGlucHV0KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIG1vbWVudC5nZXQoJyR7cGVyaW9kfScpYCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3Q8TW9tZW50SW5wdXRPYmplY3Q+KHBlcmlvZCkpIHtcclxuICAgICAgY29uc3QgX21hcHBlZCA9IG1hcE1vbWVudElucHV0T2JqZWN0KHBlcmlvZCk7XHJcbiAgICAgIE9iamVjdC5rZXlzKF9tYXBwZWQpXHJcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24oYTogVW5pdE9mVGltZSwgYjogVW5pdE9mVGltZSk6IG51bWJlciB7XHJcbiAgICAgICAgICByZXR1cm4gX3VuaXRzUHJpb3JpdHlbYV0gLSBfdW5pdHNQcmlvcml0eVtiXTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5mb3JFYWNoKChrZXk6IFVuaXRPZlRpbWUpID0+IHRoaXMuc2V0KGtleSwgX21hcHBlZFtrZXldKSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm1hdCgnZGRkIE1NTSBERCBZWVlZIEhIOm1tOnNzIFtHTVRdWlonKTtcclxuICB9XHJcblxyXG4gIHRvSVNPU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0cnVlKSA8IDAgfHwgZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdHJ1ZSkgPiA5OTk5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdCgnWVlZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRnVuY3Rpb24oRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcpKSB7XHJcbiAgICAgIC8vIG5hdGl2ZSBpbXBsZW1lbnRhdGlvbiBpcyB+NTB4IGZhc3RlciwgdXNlIGl0IHdoZW4gd2UgY2FuXHJcbiAgICAgIHJldHVybiB0aGlzLnRvRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0KCdZWVlZLU1NLUREW1RdSEg6bW06c3MuU1NTW1pdJyk7XHJcbiAgfVxyXG5cclxuICBpbnNwZWN0KCk6IHN0cmluZyB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RPRE86IGltcGxlbWVudCcpO1xyXG4gIH1cclxuXHJcbiAgdG9KU09OKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy50b0lTT1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgdG9EYXRlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcclxuICB9XHJcblxyXG4gIHRvT2JqZWN0KCk6IHtba2V5IGluIE1vbWVudFVuaXRPZlRpbWVdPzogbnVtYmVyfSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyB5ZWFyczogZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxyXG4gICAgICAvLyBtb250aHM6IGdldE1vbnRoKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcclxuXHJcbiAgICAgIHllYXI6IGdldEZ1bGxZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcclxuICAgICAgbW9udGg6IGdldE1vbnRoKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcclxuICAgICAgZGF0ZTogZ2V0RGF0ZSh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXHJcbiAgICAgIGhvdXJzOiBnZXRIb3Vycyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksXHJcbiAgICAgIG1pbnV0ZXM6IGdldE1pbnV0ZXModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpLFxyXG4gICAgICBzZWNvbmRzOiBnZXRTZWNvbmRzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSxcclxuICAgICAgbWlsbGlzZWNvbmRzOiBnZXRNaWxsaXNlY29uZHModGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdG9BcnJheSgpOiBEYXRlQXJyYXkge1xyXG4gICAgcmV0dXJuIFt0aGlzLnllYXIoKSwgdGhpcy5tb250aCgpLCB0aGlzLmRhdGUoKSwgdGhpcy5ob3VyKCksIHRoaXMubWludXRlKCksIHRoaXMuc2Vjb25kKCksIHRoaXMubWlsbGlzZWNvbmQoKV07XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gRGF0ZXMgYm9vbGVhbiBhbGdlYnJhXHJcblxyXG4gIGlzQWZ0ZXIoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XHJcblxyXG4gICAgcmV0dXJuIGlzQWZ0ZXIodGhpcy5fZGF0ZSwgZGF0ZS50b0RhdGUoKSwgX3VuaXQpO1xyXG4gIH1cclxuXHJcbiAgaXNCZWZvcmUoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XHJcblxyXG4gICAgcmV0dXJuIGlzQmVmb3JlKHRoaXMudG9EYXRlKCksIGRhdGUudG9EYXRlKCksIF91bml0KTtcclxuICB9XHJcblxyXG4gIGlzQmV0d2Vlbihmcm9tOiBLaHJvbm9zLCB0bzogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUsIGluY2x1c2l2aXR5Pzogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xyXG5cclxuICAgIHJldHVybiBpc0JldHdlZW4odGhpcy50b0RhdGUoKSwgZnJvbS50b0RhdGUoKSwgdG8udG9EYXRlKCksIF91bml0LCBpbmNsdXNpdml0eSk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWUoZGF0ZTogS2hyb25vcywgdW5pdD86IE1vbWVudFVuaXRPZlRpbWUpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IF91bml0ID0gdW5pdCA/IG1hcFVuaXRPZlRpbWUodW5pdCkgOiB2b2lkIDA7XHJcblxyXG4gICAgcmV0dXJuIGlzU2FtZSh0aGlzLl9kYXRlLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XHJcbiAgfVxyXG5cclxuICBpc1NhbWVPckFmdGVyKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xyXG5cclxuICAgIHJldHVybiBpc1NhbWVPckFmdGVyKHRoaXMuX2RhdGUsIGRhdGUudG9EYXRlKCksIF91bml0KTtcclxuICB9XHJcblxyXG4gIGlzU2FtZU9yQmVmb3JlKGRhdGU6IEtocm9ub3MsIHVuaXQ/OiBNb21lbnRVbml0T2ZUaW1lKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBfdW5pdCA9IHVuaXQgPyBtYXBVbml0T2ZUaW1lKHVuaXQpIDogdm9pZCAwO1xyXG5cclxuICAgIHJldHVybiBpc1NhbWVPckJlZm9yZSh0aGlzLl9kYXRlLCBkYXRlLnRvRGF0ZSgpLCBfdW5pdCk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzRGF0ZVZhbGlkKHRoaXMuX2RhdGUpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVPZigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGUudmFsdWVPZigpIC0gKCh0aGlzLl9vZmZzZXQgfHwgMCkgKiA2MDAwMCk7XHJcbiAgfVxyXG5cclxuICB1bml4KCk6IG51bWJlciB7XHJcbiAgICAvLyByZXR1cm4gZ2V0VW5peFRpbWUodGhpcy5fZGF0ZSk7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLnZhbHVlT2YoKSAvIDEwMDApO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIE9mZnNldFxyXG5cclxuICB1dGNPZmZzZXQoKTogbnVtYmVyO1xyXG4gIHV0Y09mZnNldChiOiBudW1iZXIgfCBzdHJpbmcsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogS2hyb25vcztcclxuICB1dGNPZmZzZXQoYj86IG51bWJlciB8IHN0cmluZywga2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBudW1iZXIgfCBLaHJvbm9zIHtcclxuICAgIGNvbnN0IF9jb25maWcgPSB0aGlzLl90b0NvbmZpZygpO1xyXG5cclxuICAgIGlmICghYiAmJiBiICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRVVENPZmZzZXQodGhpcy5fZGF0ZSwgX2NvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IHNldFVUQ09mZnNldCh0aGlzLl9kYXRlLCBiLCBrZWVwTG9jYWxUaW1lLCBmYWxzZSwgX2NvbmZpZyk7XHJcblxyXG4gICAgdGhpcy5fb2Zmc2V0ID0gX2NvbmZpZy5fb2Zmc2V0O1xyXG4gICAgdGhpcy5faXNVVEMgPSBfY29uZmlnLl9pc1VUQztcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHV0YyhrZWVwTG9jYWxUaW1lPzogYm9vbGVhbik6IEtocm9ub3Mge1xyXG4gICAgcmV0dXJuIHRoaXMudXRjT2Zmc2V0KDAsIGtlZXBMb2NhbFRpbWUpO1xyXG4gIH1cclxuXHJcbiAgbG9jYWwoa2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBLaHJvbm9zIHtcclxuICAgIGlmICh0aGlzLl9pc1VUQykge1xyXG4gICAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcclxuICAgICAgdGhpcy5faXNVVEMgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XHJcbiAgICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMuX2RhdGUpLCAnbScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBwYXJzZVpvbmUoaW5wdXQ/OiBzdHJpbmcpOiBLaHJvbm9zIHtcclxuICAgIGNvbnN0IF9jb25maWcgPSB0aGlzLl90b0NvbmZpZygpO1xyXG4gICAgdGhpcy5fZGF0ZSA9IHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0KHRoaXMuX2RhdGUsIGlucHV0LCBfY29uZmlnKTtcclxuXHJcbiAgICB0aGlzLl9vZmZzZXQgPSBfY29uZmlnLl9vZmZzZXQ7XHJcbiAgICB0aGlzLl9pc1VUQyA9IF9jb25maWcuX2lzVVRDO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgaGFzQWxpZ25lZEhvdXJPZmZzZXQoaW5wdXQ/OiBLaHJvbm9zKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaGFzQWxpZ25lZEhvdXJPZmZzZXQodGhpcy5fZGF0ZSwgaW5wdXQgPyBpbnB1dC5fZGF0ZSA6IHZvaWQgMCk7XHJcbiAgfVxyXG5cclxuICBpc0RTVCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0RheWxpZ2h0U2F2aW5nVGltZSh0aGlzLl9kYXRlKTtcclxuICB9XHJcblxyXG4gIGlzTG9jYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuX2lzVVRDO1xyXG4gIH1cclxuXHJcbiAgaXNVdGNPZmZzZXQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNVVEM7XHJcbiAgfVxyXG5cclxuICBpc1VUQygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzVXRjKCk7XHJcbiAgfVxyXG5cclxuICBpc1V0YygpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDA7XHJcbiAgfVxyXG5cclxuICAvLyBUaW1lem9uZVxyXG5cclxuICB6b25lQWJicigpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldFpvbmVBYmJyKHRoaXMuX2lzVVRDKTtcclxuICB9XHJcblxyXG4gIHpvbmVOYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZ2V0Wm9uZU5hbWUodGhpcy5faXNVVEMpO1xyXG4gIH1cclxuXHJcbiAgLy8gWWVhclxyXG5cclxuICB5ZWFyKCk6IG51bWJlcjtcclxuICB5ZWFyKHllYXI6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgeWVhcih5ZWFyPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXllYXIgJiYgeWVhciAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0RnVsbFllYXIodGhpcy5fZGF0ZSwgeWVhcikpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgd2Vla1llYXIoKTogbnVtYmVyO1xyXG4gIHdlZWtZZWFyKHZhbDogbnVtYmVyKTogS2hyb25vcztcclxuICB3ZWVrWWVhcih2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0V2Vla1llYXIodGhpcy5fZGF0ZSwgdGhpcy5fbG9jYWxlLCB0aGlzLmlzVVRDKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGUgPSBnZXRTZXRXZWVrWWVhcih0aGlzLl9kYXRlLCB2YWwsIHRoaXMuX2xvY2FsZSwgdGhpcy5pc1VUQygpKTtcclxuICAgIGlmIChpc0RhdGUoZGF0ZSkpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBpc29XZWVrWWVhcigpOiBudW1iZXIgO1xyXG4gIGlzb1dlZWtZZWFyKHZhbDogbnVtYmVyKTogS2hyb25vcyA7XHJcbiAgaXNvV2Vla1llYXIodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldElTT1dlZWtZZWFyKHRoaXMuX2RhdGUsIHRoaXMuaXNVVEMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGF0ZSA9IGdldFNldElTT1dlZWtZZWFyKHRoaXMuX2RhdGUsIHZhbCwgdGhpcy5pc1V0YygpKTtcclxuXHJcbiAgICBpZiAoaXNEYXRlKGRhdGUpKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSBkYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgaXNMZWFwWWVhcigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0xlYXBZZWFyKGdldEZ1bGxZZWFyKHRoaXMudG9EYXRlKCksIHRoaXMuaXNVVEMoKSkpO1xyXG4gIH1cclxuXHJcbiAgLy8gTW9udGhcclxuXHJcbiAgbW9udGgoKTogbnVtYmVyO1xyXG4gIG1vbnRoKG1vbnRoOiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zO1xyXG4gIG1vbnRoKG1vbnRoPzogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIW1vbnRoICYmIG1vbnRoICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRNb250aCh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IF9tb250aCA9IG1vbnRoO1xyXG5cclxuICAgIGlmIChpc1N0cmluZyhtb250aCkpIHtcclxuICAgICAgY29uc3QgbG9jYWxlID0gdGhpcy5fbG9jYWxlIHx8IGdldExvY2FsZSgpO1xyXG4gICAgICBfbW9udGggPSBsb2NhbGUubW9udGhzUGFyc2UobW9udGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc051bWJlcihfbW9udGgpKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSBjbG9uZURhdGUoc2V0TW9udGgodGhpcy5fZGF0ZSwgX21vbnRoLCB0aGlzLl9pc1VUQykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgaG91cigpOiBudW1iZXI7XHJcbiAgaG91cihob3VyczogbnVtYmVyKTogS2hyb25vcztcclxuICBob3VyKGhvdXJzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5ob3Vycyhob3Vycyk7XHJcbiAgfVxyXG5cclxuICBob3VycygpOiBudW1iZXI7XHJcbiAgaG91cnMoaG91cnM6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgaG91cnMoaG91cnM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghaG91cnMgJiYgaG91cnMgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldEhvdXJzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldEhvdXJzKHRoaXMuX2RhdGUsIGhvdXJzLCB0aGlzLl9pc1VUQykpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgbWludXRlKCk6IG51bWJlcjtcclxuICBtaW51dGUobWludXRlczogbnVtYmVyKTogS2hyb25vcztcclxuICBtaW51dGUobWludXRlcz86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubWludXRlcyhtaW51dGVzKTtcclxuICB9XHJcblxyXG4gIG1pbnV0ZXMoKTogbnVtYmVyO1xyXG4gIG1pbnV0ZXMobWludXRlczogbnVtYmVyKTogS2hyb25vcztcclxuICBtaW51dGVzKG1pbnV0ZXM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghbWludXRlcyAmJiBtaW51dGVzICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRNaW51dGVzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldE1pbnV0ZXModGhpcy5fZGF0ZSwgbWludXRlcywgdGhpcy5faXNVVEMpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAqL1xyXG4gIHNlY29uZCgpOiBudW1iZXI7XHJcbiAgc2Vjb25kKHNlY29uZHM6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgc2Vjb25kKHNlY29uZHM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNlY29uZHMoc2Vjb25kcyk7XHJcbiAgfVxyXG5cclxuICBzZWNvbmRzKCk6IG51bWJlcjtcclxuICBzZWNvbmRzKHNlY29uZHM6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgc2Vjb25kcyhzZWNvbmRzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXNlY29uZHMgJiYgc2Vjb25kcyAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0U2Vjb25kcyh0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IGNsb25lRGF0ZShzZXRTZWNvbmRzKHRoaXMuX2RhdGUsIHNlY29uZHMsIHRoaXMuX2lzVVRDKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBtaWxsaXNlY29uZCgpOiBudW1iZXI7XHJcbiAgbWlsbGlzZWNvbmQobXM6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgbWlsbGlzZWNvbmQobXM/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm1pbGxpc2Vjb25kcyhtcyk7XHJcbiAgfVxyXG5cclxuICBtaWxsaXNlY29uZHMoKTogbnVtYmVyO1xyXG4gIG1pbGxpc2Vjb25kcyhzZWNvbmRzOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIG1pbGxpc2Vjb25kcyhzZWNvbmRzPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXNlY29uZHMgJiYgc2Vjb25kcyAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0TWlsbGlzZWNvbmRzKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldE1pbGxpc2Vjb25kcyh0aGlzLl9kYXRlLCBzZWNvbmRzLCB0aGlzLl9pc1VUQykpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLy8gRGF5XHJcblxyXG4gIGRhdGUoKTogbnVtYmVyO1xyXG4gIGRhdGUoZGF0ZTogbnVtYmVyKTogS2hyb25vcztcclxuICBkYXRlKGRhdGU/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghZGF0ZSAmJiBkYXRlICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXREYXRlKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gY2xvbmVEYXRlKHNldERhdGUodGhpcy5fZGF0ZSwgZGF0ZSwgdGhpcy5faXNVVEMpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGRheSgpOiBudW1iZXIgO1xyXG4gIGRheShpbnB1dDogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyA7XHJcbiAgZGF5KGlucHV0PzogbnVtYmVyIHwgc3RyaW5nKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIWlucHV0ICYmIGlucHV0ICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXREYXlPZldlZWsodGhpcy5fZGF0ZSwgdGhpcy5faXNVVEMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBfaW5wdXQgPSBpbnB1dDtcclxuXHJcbiAgICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICAgIF9pbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgdGhpcy5fbG9jYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOdW1iZXIoX2lucHV0KSkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gc2V0RGF5T2ZXZWVrKHRoaXMuX2RhdGUsIF9pbnB1dCwgdGhpcy5fbG9jYWxlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICB3ZWVrZGF5KCk6IG51bWJlciA7XHJcbiAgd2Vla2RheSh2YWw6IG51bWJlcik6IEtocm9ub3MgO1xyXG4gIHdlZWtkYXkodmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIXZhbCAmJiB2YWwgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGdldExvY2FsZURheU9mV2Vlayh0aGlzLl9kYXRlLCB0aGlzLl9sb2NhbGUsIHRoaXMuX2lzVVRDKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9kYXRlID0gc2V0TG9jYWxlRGF5T2ZXZWVrKHRoaXMuX2RhdGUsIHZhbCwgeyBsb2NhbGU6IHRoaXMuX2xvY2FsZSwgaXNVVEM6IHRoaXMuX2lzVVRDIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgaXNvV2Vla2RheSgpOiBudW1iZXIgO1xyXG4gIGlzb1dlZWtkYXkodmFsOiBudW1iZXIgfCBzdHJpbmcpOiBLaHJvbm9zIDtcclxuICBpc29XZWVrZGF5KHZhbD86IG51bWJlciB8IHN0cmluZyk6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRJU09EYXlPZldlZWsodGhpcy5fZGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IHNldElTT0RheU9mV2Vlayh0aGlzLl9kYXRlLCB2YWwpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGF5T2ZZZWFyKCk6IG51bWJlcjtcclxuICBkYXlPZlllYXIodmFsOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIGRheU9mWWVhcih2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKHRoaXMuX2RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBzZXREYXlPZlllYXIodGhpcy5fZGF0ZSwgdmFsKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vIFdlZWtcclxuXHJcbiAgd2VlaygpOiBudW1iZXI7XHJcbiAgd2VlayhpbnB1dDogbnVtYmVyKTogS2hyb25vcztcclxuICB3ZWVrKGlucHV0PzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICBpZiAoIWlucHV0ICYmIGlucHV0ICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRXZWVrKHRoaXMuX2RhdGUsIHRoaXMuX2xvY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IHNldFdlZWsodGhpcy5fZGF0ZSwgaW5wdXQsIHRoaXMuX2xvY2FsZSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICB3ZWVrcygpOiBudW1iZXI7XHJcbiAgd2Vla3MoaW5wdXQ6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgd2Vla3MoaW5wdXQ/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLndlZWsoaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgaXNvV2VlaygpOiBudW1iZXIgO1xyXG4gIGlzb1dlZWsodmFsOiBudW1iZXIpOiBLaHJvbm9zIDtcclxuICBpc29XZWVrKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgaWYgKCF2YWwgJiYgdmFsICE9PSAwKSB7XHJcbiAgICAgIHJldHVybiBnZXRJU09XZWVrKHRoaXMuX2RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2RhdGUgPSBzZXRJU09XZWVrKHRoaXMuX2RhdGUsIHZhbCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBpc29XZWVrcygpOiBudW1iZXIgO1xyXG4gIGlzb1dlZWtzKHZhbDogbnVtYmVyKTogS2hyb25vcyA7XHJcbiAgaXNvV2Vla3ModmFsPzogbnVtYmVyKTogS2hyb25vcyB8IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5pc29XZWVrKHZhbCk7XHJcbiAgfVxyXG5cclxuICB3ZWVrc0luWWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldFdlZWtzSW5ZZWFyKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDLCB0aGlzLl9sb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgaXNvV2Vla3NJblllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRJU09XZWVrc0luWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZGF5c0luTW9udGgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBkYXlzSW5Nb250aChnZXRGdWxsWWVhcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyksIGdldE1vbnRoKHRoaXMuX2RhdGUsIHRoaXMuX2lzVVRDKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcXVhcnRlcigpOiBudW1iZXI7XHJcbiAgcXVhcnRlcih2YWw6IG51bWJlcik6IEtocm9ub3M7XHJcbiAgcXVhcnRlcih2YWw/OiBudW1iZXIpOiBLaHJvbm9zIHwgbnVtYmVyIHtcclxuICAgIGlmICghdmFsICYmIHZhbCAhPT0gMCkge1xyXG4gICAgICByZXR1cm4gZ2V0UXVhcnRlcih0aGlzLl9kYXRlLCB0aGlzLl9pc1VUQyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZGF0ZSA9IHNldFF1YXJ0ZXIodGhpcy5fZGF0ZSwgdmFsLCB0aGlzLl9pc1VUQyk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgKi9cclxuICBxdWFydGVycygpOiBudW1iZXI7XHJcbiAgcXVhcnRlcnModmFsOiBudW1iZXIpOiBLaHJvbm9zO1xyXG4gIHF1YXJ0ZXJzKHZhbD86IG51bWJlcik6IEtocm9ub3MgfCBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMucXVhcnRlcih2YWwpO1xyXG4gIH1cclxuXHJcbiAgc3RhcnRPZihwZXJpb2Q/OiBNb21lbnRVbml0T2ZUaW1lKTogS2hyb25vcyB7XHJcbiAgICBjb25zdCBfcGVyID0gbWFwVW5pdE9mVGltZShwZXJpb2QpO1xyXG4gICAgdGhpcy5fZGF0ZSA9IHN0YXJ0T2YodGhpcy5fZGF0ZSwgX3BlciwgdGhpcy5faXNVVEMpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbn1cclxuIl19