/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:max-file-line-count max-line-length cyclomatic-complexity
import { weekOfYear } from '../units/week-calendar-utils';
import { hasOwnProp, isArray, isFunction } from '../utils/type-checks';
import { getDay, getMonth } from '../utils/date-getters';
import { matchWord, regexEscape } from '../parse/regex';
import { setDayOfWeek } from '../units/day-of-week';
/**
 * @record
 */
export function LocaleOptionsFormat() { }
function LocaleOptionsFormat_tsickle_Closure_declarations() {
    /** @type {?} */
    LocaleOptionsFormat.prototype.format;
    /** @type {?} */
    LocaleOptionsFormat.prototype.standalone;
    /** @type {?|undefined} */
    LocaleOptionsFormat.prototype.isFormat;
}
const /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
export const /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
export const /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
export const /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
export const /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
export const /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
export const /** @type {?} */ defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
export const /** @type {?} */ defaultOrdinal = '%d';
export const /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
const /** @type {?} */ defaultMonthsShortRegex = matchWord;
const /** @type {?} */ defaultMonthsRegex = matchWord;
/**
 * @record
 */
export function LocaleData() { }
function LocaleData_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    LocaleData.prototype.abbr;
    /** @type {?|undefined} */
    LocaleData.prototype.parentLocale;
    /** @type {?|undefined} */
    LocaleData.prototype.months;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsShort;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsParseExact;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdays;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdaysShort;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdaysMin;
    /** @type {?|undefined} */
    LocaleData.prototype.weekdaysParseExact;
    /** @type {?|undefined} */
    LocaleData.prototype.longDateFormat;
    /** @type {?|undefined} */
    LocaleData.prototype.calendar;
    /** @type {?|undefined} */
    LocaleData.prototype.relativeTime;
    /** @type {?|undefined} */
    LocaleData.prototype.dayOfMonthOrdinalParse;
    /** @type {?|undefined} */
    LocaleData.prototype.ordinal;
    /** @type {?|undefined} */
    LocaleData.prototype.week;
    /** @type {?|undefined} */
    LocaleData.prototype.invalidDate;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsParse;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsShortRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsStrictRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.monthsShortStrictRegex;
    /** @type {?|undefined} */
    LocaleData.prototype.longMonthsParse;
    /** @type {?|undefined} */
    LocaleData.prototype.shortMonthsParse;
    /** @type {?|undefined} */
    LocaleData.prototype.meridiemParse;
    /** @type {?|undefined} */
    LocaleData.prototype.meridiemHour;
    /** @type {?|undefined} */
    LocaleData.prototype.preparse;
    /** @type {?|undefined} */
    LocaleData.prototype.postformat;
    /** @type {?|undefined} */
    LocaleData.prototype.meridiem;
    /** @type {?|undefined} */
    LocaleData.prototype.isPM;
}
export class Locale {
    /**
     * @param {?} config
     */
    constructor(config) {
        if (!!config) {
            this.set(config);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set(config) {
        let /** @type {?} */ confKey;
        for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
                continue;
            }
            const /** @type {?} */ prop = config[/** @type {?} */ (confKey)];
            const /** @type {?} */ key = /** @type {?} */ ((isFunction(prop) ? confKey : `_${confKey}`));
            this[key] = /** @type {?} */ (prop);
        }
        this._config = config;
    }
    /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    calendar(key, date, now) {
        const /** @type {?} */ output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(null, date, now) : output;
    }
    /**
     * @param {?} key
     * @return {?}
     */
    longDateFormat(key) {
        const /** @type {?} */ format = this._longDateFormat[key];
        const /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    }
    /**
     * @return {?}
     */
    get invalidDate() {
        return this._invalidDate;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set invalidDate(val) {
        this._invalidDate = val;
    }
    /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    ordinal(num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    }
    /**
     * @param {?} str
     * @return {?}
     */
    preparse(str) {
        return str;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    postformat(str) {
        return str;
    }
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    relativeTime(num, withoutSuffix, str, isFuture) {
        const /** @type {?} */ output = this._relativeTime[str];
        return (isFunction(output)) ?
            output(num, withoutSuffix, str, isFuture) :
            output.replace(/%d/i, num.toString(10));
    }
    /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    pastFuture(diff, output) {
        const /** @type {?} */ format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    months(date, format, isUTC = false) {
        if (!date) {
            return isArray(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (isArray(this._months)) {
            return this._months[getMonth(date, isUTC)];
        }
        const /** @type {?} */ key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][getMonth(date, isUTC)];
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    monthsShort(date, format, isUTC = false) {
        if (!date) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (isArray(this._monthsShort)) {
            return this._monthsShort[getMonth(date, isUTC)];
        }
        const /** @type {?} */ key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][getMonth(date, isUTC)];
    }
    /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    monthsParse(monthName, format, strict) {
        let /** @type {?} */ date;
        let /** @type {?} */ regex;
        if (this._monthsParseExact) {
            return this.handleMonthStrictParse(monthName, format, strict);
        }
        if (!this._monthsParse) {
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
        }
        // TODO: add sorting
        // Sorting makes sure if one month (or abbr) is a prefix of another
        // see sorting in computeMonthsParse
        let /** @type {?} */ i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));
            if (strict && !this._longMonthsParse[i]) {
                const /** @type {?} */ _months = this.months(date, '', true).replace('.', '');
                const /** @type {?} */ _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                this._longMonthsParse[i] = new RegExp(`^${_months}$`, 'i');
                this._shortMonthsParse[i] = new RegExp(`^${_shortMonths}$`, 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = `^${this.months(date, '', true)}|^${this.monthsShort(date, '', true)}`;
                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            // test the regex
            if (strict && format === 'MMMM' && (/** @type {?} */ (this._longMonthsParse[i])).test(monthName)) {
                return i;
            }
            if (strict && format === 'MMM' && (/** @type {?} */ (this._shortMonthsParse[i])).test(monthName)) {
                return i;
            }
            if (!strict && this._monthsParse[i].test(monthName)) {
                return i;
            }
        }
    }
    /**
     * @param {?} isStrict
     * @return {?}
     */
    monthsRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsStrictRegex;
            }
            return this._monthsRegex;
        }
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
    /**
     * @param {?} isStrict
     * @return {?}
     */
    monthsShortRegex(isStrict) {
        if (this._monthsParseExact) {
            if (!hasOwnProp(this, '_monthsRegex')) {
                this.computeMonthsParse();
            }
            if (isStrict) {
                return this._monthsShortStrictRegex;
            }
            return this._monthsShortRegex;
        }
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
    /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    week(date, isUTC) {
        return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
    }
    /**
     * @return {?}
     */
    firstDayOfWeek() {
        return this._week.dow;
    }
    /**
     * @return {?}
     */
    firstDayOfYear() {
        return this._week.doy;
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    weekdays(date, format, isUTC) {
        if (!date) {
            return isArray(this._weekdays)
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (isArray(this._weekdays)) {
            return this._weekdays[getDay(date, isUTC)];
        }
        const /** @type {?} */ _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][getDay(date, isUTC)];
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    weekdaysMin(date, format, isUTC) {
        return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
    }
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    weekdaysShort(date, format, isUTC) {
        return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
    }
    /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    weekdaysParse(weekdayName, format, strict) {
        let /** @type {?} */ i;
        let /** @type {?} */ regex;
        if (this._weekdaysParseExact) {
            return this.handleWeekStrictParse(weekdayName, format, strict);
        }
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._minWeekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._fullWeekdaysParse = [];
        }
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // fix: here is the issue
            const /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp(`^${this.weekdays(date, '', true).replace('.', '\.?')}$`, 'i');
                this._shortWeekdaysParse[i] = new RegExp(`^${this.weekdaysShort(date, '', true).replace('.', '\.?')}$`, 'i');
                this._minWeekdaysParse[i] = new RegExp(`^${this.weekdaysMin(date, '', true).replace('.', '\.?')}$`, 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = `^${this.weekdays(date, '', true)}|^${this.weekdaysShort(date, '', true)}|^${this.weekdaysMin(date, '', true)}`;
                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
            }
            if (!isArray(this._fullWeekdaysParse)
                || !isArray(this._shortWeekdaysParse)
                || !isArray(this._minWeekdaysParse)
                || !isArray(this._weekdaysParse)) {
                return;
            }
            // test the regex
            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
                return i;
            }
            else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
                return i;
            }
        }
    }
    /**
     * @param {?} isStrict
     * @return {?}
     */
    weekdaysRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysStrictRegex;
            }
            else {
                return this._weekdaysRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this._weekdaysRegex = matchWord;
            }
            return this._weekdaysStrictRegex && isStrict ?
                this._weekdaysStrictRegex : this._weekdaysRegex;
        }
    }
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    weekdaysShortRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysShortStrictRegex;
            }
            else {
                return this._weekdaysShortRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
                this._weekdaysShortRegex = matchWord;
            }
            return this._weekdaysShortStrictRegex && isStrict ?
                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
        }
    }
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    weekdaysMinRegex(isStrict) {
        if (this._weekdaysParseExact) {
            if (!hasOwnProp(this, '_weekdaysRegex')) {
                this.computeWeekdaysParse();
            }
            if (isStrict) {
                return this._weekdaysMinStrictRegex;
            }
            else {
                return this._weekdaysMinRegex;
            }
        }
        else {
            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
                this._weekdaysMinRegex = matchWord;
            }
            return this._weekdaysMinStrictRegex && isStrict ?
                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    isPM(input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return input.toLowerCase().charAt(0) === 'p';
    }
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    meridiem(hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    formatLongDate(key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        const /** @type {?} */ format = this._longDateFormat[key];
        const /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, (val) => {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    }
    /**
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    handleMonthStrictParse(monthName, format, strict) {
        const /** @type {?} */ llc = monthName.toLocaleLowerCase();
        let /** @type {?} */ i;
        let /** @type {?} */ ii;
        let /** @type {?} */ mom;
        if (!this._monthsParse) {
            // this is not used
            this._monthsParse = [];
            this._longMonthsParse = [];
            this._shortMonthsParse = [];
            for (i = 0; i < 12; ++i) {
                mom = new Date(2000, i);
                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
            }
        }
        if (strict) {
            if (format === 'MMM') {
                ii = (/** @type {?} */ (this._shortMonthsParse)).indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            ii = (/** @type {?} */ (this._longMonthsParse)).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        if (format === 'MMM') {
            ii = (/** @type {?} */ (this._shortMonthsParse)).indexOf(llc);
            if (ii !== -1) {
                return ii;
            }
            ii = (/** @type {?} */ (this._longMonthsParse)).indexOf(llc);
            return ii !== -1 ? ii : null;
        }
        ii = (/** @type {?} */ (this._longMonthsParse)).indexOf(llc);
        if (ii !== -1) {
            return ii;
        }
        ii = (/** @type {?} */ (this._shortMonthsParse)).indexOf(llc);
        return ii !== -1 ? ii : null;
    }
    /**
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    handleWeekStrictParse(weekdayName, format, strict) {
        let /** @type {?} */ ii;
        const /** @type {?} */ llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            let /** @type {?} */ i;
            for (i = 0; i < 7; ++i) {
                const /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
                this._minWeekdaysParse[i] = this.weekdaysMin(date).toLocaleLowerCase();
                this._shortWeekdaysParse[i] = this.weekdaysShort(date).toLocaleLowerCase();
                this._weekdaysParse[i] = this.weekdays(date, '').toLocaleLowerCase();
            }
        }
        if (!isArray(this._weekdaysParse)
            || !isArray(this._shortWeekdaysParse)
            || !isArray(this._minWeekdaysParse)) {
            return;
        }
        if (strict) {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
        else {
            if (format === 'dddd') {
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else if (format === 'ddd') {
                ii = this._shortWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._minWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
            else {
                ii = this._minWeekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._weekdaysParse.indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = this._shortWeekdaysParse.indexOf(llc);
                return ii !== -1 ? ii : null;
            }
        }
    }
    /**
     * @return {?}
     */
    computeMonthsParse() {
        const /** @type {?} */ shortPieces = [];
        const /** @type {?} */ longPieces = [];
        const /** @type {?} */ mixedPieces = [];
        let /** @type {?} */ date;
        let /** @type {?} */ i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(2000, i);
            shortPieces.push(this.monthsShort(date, ''));
            longPieces.push(this.months(date, ''));
            mixedPieces.push(this.months(date, ''));
            mixedPieces.push(this.monthsShort(date, ''));
        }
        // Sorting makes sure if one month (or abbr) is a prefix of another it
        // will match the longer piece.
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 12; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
        }
        for (i = 0; i < 24; i++) {
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._monthsRegex = new RegExp(`^(${mixedPieces.join('|')})`, 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp(`^(${longPieces.join('|')})`, 'i');
        this._monthsShortStrictRegex = new RegExp(`^(${shortPieces.join('|')})`, 'i');
    }
    /**
     * @return {?}
     */
    computeWeekdaysParse() {
        const /** @type {?} */ minPieces = [];
        const /** @type {?} */ shortPieces = [];
        const /** @type {?} */ longPieces = [];
        const /** @type {?} */ mixedPieces = [];
        let /** @type {?} */ i;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);
            const /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            const /** @type {?} */ minp = this.weekdaysMin(date);
            const /** @type {?} */ shortp = this.weekdaysShort(date);
            const /** @type {?} */ longp = this.weekdays(date);
            minPieces.push(minp);
            shortPieces.push(shortp);
            longPieces.push(longp);
            mixedPieces.push(minp);
            mixedPieces.push(shortp);
            mixedPieces.push(longp);
        }
        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
        // will match the longer piece.
        minPieces.sort(cmpLenRev);
        shortPieces.sort(cmpLenRev);
        longPieces.sort(cmpLenRev);
        mixedPieces.sort(cmpLenRev);
        for (i = 0; i < 7; i++) {
            shortPieces[i] = regexEscape(shortPieces[i]);
            longPieces[i] = regexEscape(longPieces[i]);
            mixedPieces[i] = regexEscape(mixedPieces[i]);
        }
        this._weekdaysRegex = new RegExp(`^(${mixedPieces.join('|')})`, 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp(`^(${longPieces.join('|')})`, 'i');
        this._weekdaysShortStrictRegex = new RegExp(`^(${shortPieces.join('|')})`, 'i');
        this._weekdaysMinStrictRegex = new RegExp(`^(${minPieces.join('|')})`, 'i');
    }
}
function Locale_tsickle_Closure_declarations() {
    /** @type {?} */
    Locale.prototype.parentLocale;
    /** @type {?} */
    Locale.prototype._abbr;
    /** @type {?} */
    Locale.prototype._config;
    /** @type {?} */
    Locale.prototype.meridiemHour;
    /** @type {?} */
    Locale.prototype._invalidDate;
    /** @type {?} */
    Locale.prototype._week;
    /** @type {?} */
    Locale.prototype._dayOfMonthOrdinalParse;
    /** @type {?} */
    Locale.prototype._ordinalParse;
    /** @type {?} */
    Locale.prototype._meridiemParse;
    /** @type {?} */
    Locale.prototype._calendar;
    /** @type {?} */
    Locale.prototype._relativeTime;
    /** @type {?} */
    Locale.prototype._months;
    /** @type {?} */
    Locale.prototype._monthsShort;
    /** @type {?} */
    Locale.prototype._monthsRegex;
    /** @type {?} */
    Locale.prototype._monthsShortRegex;
    /** @type {?} */
    Locale.prototype._monthsStrictRegex;
    /** @type {?} */
    Locale.prototype._monthsShortStrictRegex;
    /** @type {?} */
    Locale.prototype._monthsParse;
    /** @type {?} */
    Locale.prototype._longMonthsParse;
    /** @type {?} */
    Locale.prototype._shortMonthsParse;
    /** @type {?} */
    Locale.prototype._monthsParseExact;
    /** @type {?} */
    Locale.prototype._weekdaysParseExact;
    /** @type {?} */
    Locale.prototype._weekdaysRegex;
    /** @type {?} */
    Locale.prototype._weekdaysShortRegex;
    /** @type {?} */
    Locale.prototype._weekdaysMinRegex;
    /** @type {?} */
    Locale.prototype._weekdaysStrictRegex;
    /** @type {?} */
    Locale.prototype._weekdaysShortStrictRegex;
    /** @type {?} */
    Locale.prototype._weekdaysMinStrictRegex;
    /** @type {?} */
    Locale.prototype._weekdays;
    /** @type {?} */
    Locale.prototype._weekdaysShort;
    /** @type {?} */
    Locale.prototype._weekdaysMin;
    /** @type {?} */
    Locale.prototype._weekdaysParse;
    /** @type {?} */
    Locale.prototype._minWeekdaysParse;
    /** @type {?} */
    Locale.prototype._shortWeekdaysParse;
    /** @type {?} */
    Locale.prototype._fullWeekdaysParse;
    /** @type {?} */
    Locale.prototype._longDateFormat;
    /** @type {?} */
    Locale.prototype._ordinal;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function cmpLenRev(a, b) {
    return b.length - a.length;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsibG9jYWxlL2xvY2FsZS5jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXBELHVCQUFNLGdCQUFnQixHQUFHLCtCQUErQixDQUFDO0FBQ3pELE1BQU0sQ0FBQyx1QkFBTSxtQkFBbUIsR0FBRyx1RkFBdUYsQ0FBQyxLQUFLLENBQzlILEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxDQUFDLHVCQUFNLHdCQUF3QixHQUFHLGlEQUFpRCxDQUFDLEtBQUssQ0FDN0YsR0FBRyxDQUNKLENBQUM7QUFDRixNQUFNLENBQUMsdUJBQU0scUJBQXFCLEdBQUcsMERBQTBELENBQUMsS0FBSyxDQUNuRyxHQUFHLENBQ0osQ0FBQztBQUNGLE1BQU0sQ0FBQyx1QkFBTSwwQkFBMEIsR0FBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQzNFLEdBQUcsQ0FDSixDQUFDO0FBQ0YsTUFBTSxDQUFDLHVCQUFNLHdCQUF3QixHQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxRSxNQUFNLENBQUMsdUJBQU0scUJBQXFCLEdBQWdDO0lBQ2hFLEdBQUcsRUFBRSxXQUFXO0lBQ2hCLEVBQUUsRUFBRSxRQUFRO0lBQ1osQ0FBQyxFQUFFLFlBQVk7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LWZpbGUtbGluZS1jb3VudCBtYXgtbGluZS1sZW5ndGggY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcblxyXG5pbXBvcnQgeyB3ZWVrT2ZZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay1jYWxlbmRhci11dGlscyc7XHJcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGdldERheSwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBtYXRjaFdvcmQsIHJlZ2V4RXNjYXBlIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBzZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsZU9wdGlvbnNGb3JtYXQge1xyXG4gIGZvcm1hdDogc3RyaW5nW107XHJcbiAgc3RhbmRhbG9uZTogc3RyaW5nW107XHJcbiAgaXNGb3JtYXQ/OiBSZWdFeHA7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIExvY2FsZU9wdGlvbnMgPSBzdHJpbmdbXSB8IExvY2FsZU9wdGlvbnNGb3JtYXQ7XHJcblxyXG5jb25zdCBNT05USFNfSU5fRk9STUFUID0gL0Rbb0RdPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrTU1NTT8vO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1vbnRocyA9ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdChcclxuICAnXydcclxuKTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCA9ICdKYW5fRmViX01hcl9BcHJfTWF5X0p1bl9KdWxfQXVnX1NlcF9PY3RfTm92X0RlYycuc3BsaXQoXHJcbiAgJ18nXHJcbik7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXMgPSAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KFxyXG4gICdfJ1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgPSAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdChcclxuICAnXydcclxuKTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbiA9ICdTdV9Nb19UdV9XZV9UaF9Gcl9TYScuc3BsaXQoJ18nKTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb25nRGF0ZUZvcm1hdDogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gIExUUzogJ2g6bW06c3MgQScsXHJcbiAgTFQ6ICdoOm1tIEEnLFxyXG4gIEw6ICdNTS9ERC9ZWVlZJyxcclxuICBMTDogJ01NTU0gRCwgWVlZWScsXHJcbiAgTExMOiAnTU1NTSBELCBZWVlZIGg6bW0gQScsXHJcbiAgTExMTDogJ2RkZGQsIE1NTU0gRCwgWVlZWSBoOm1tIEEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdE9yZGluYWwgPSAnJWQnO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UgPSAvXFxkezEsMn0vO1xyXG5cclxuY29uc3QgZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XHJcbmNvbnN0IGRlZmF1bHRNb250aHNSZWdleCA9IG1hdGNoV29yZDtcclxuXHJcbmV4cG9ydCB0eXBlIE9yZGluYWxEYXRlRm4gPSAobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKSA9PiBzdHJpbmc7XHJcbmV4cG9ydCB0eXBlIFBsdXJhbGl6ZURhdGVGbiA9IChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT86IHN0cmluZywgaXNGdXR1cmU/OiBib29sZWFuKSA9PiBzdHJpbmc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsZURhdGEge1xyXG4gIGFiYnI/OiBzdHJpbmc7XHJcbiAgcGFyZW50TG9jYWxlPzogc3RyaW5nO1xyXG5cclxuICBtb250aHM/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XHJcbiAgbW9udGhzU2hvcnQ/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XHJcbiAgbW9udGhzUGFyc2VFeGFjdD86IGJvb2xlYW47XHJcblxyXG4gIHdlZWtkYXlzPzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xyXG4gIHdlZWtkYXlzU2hvcnQ/OiBzdHJpbmdbXSB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xyXG4gIHdlZWtkYXlzTWluPzogc3RyaW5nW10gfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q/OiBib29sZWFuO1xyXG5cclxuICBsb25nRGF0ZUZvcm1hdD86IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBjYWxlbmRhcj86IHtcclxuICAgIFtrZXk6IHN0cmluZ106IChzdHJpbmdcclxuICAgICAgfCAoKGRhdGU6IERhdGUsIG5vdz86IERhdGUpID0+IHN0cmluZylcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIHwgKChkYXlPZldlZWs6IG51bWJlciwgaXNOZXh0V2VlazogYm9vbGVhbikgPT4gc3RyaW5nKSlcclxuICB9O1xyXG4gIHJlbGF0aXZlVGltZT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgUGx1cmFsaXplRGF0ZUZuIH07XHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZT86IFJlZ0V4cDtcclxuICBvcmRpbmFsPzogc3RyaW5nIHwgT3JkaW5hbERhdGVGbjtcclxuXHJcbiAgd2Vlaz86IHsgZG93PzogbnVtYmVyOyBkb3k/OiBudW1iZXIgfTtcclxuXHJcbiAgaW52YWxpZERhdGU/OiBzdHJpbmc7XHJcblxyXG4gIG1vbnRoc1JlZ2V4PzogUmVnRXhwO1xyXG4gIG1vbnRoc1BhcnNlPzogUmVnRXhwW107XHJcbiAgbW9udGhzU2hvcnRSZWdleD86IFJlZ0V4cDtcclxuICBtb250aHNTdHJpY3RSZWdleD86IFJlZ0V4cDtcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4PzogUmVnRXhwO1xyXG4gIGxvbmdNb250aHNQYXJzZT86IFJlZ0V4cFtdO1xyXG4gIHNob3J0TW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcclxuXHJcbiAgbWVyaWRpZW1QYXJzZT86IFJlZ0V4cDtcclxuXHJcbiAgbWVyaWRpZW1Ib3VyPyhob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpOiBudW1iZXI7XHJcblxyXG4gIHByZXBhcnNlPyhzdHI6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgcG9zdGZvcm1hdD8oc3RyOiBzdHJpbmcgfCBudW1iZXIpOiBzdHJpbmc7XHJcblxyXG4gIG1lcmlkaWVtPyhob3VyOiBudW1iZXIsIG1pbnV0ZT86IG51bWJlciwgaXNMb3dlcj86IGJvb2xlYW4pOiBzdHJpbmc7XHJcblxyXG4gIGlzUE0/KGlucHV0OiBzdHJpbmcpOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTG9jYWxlIHtcclxuICBwYXJlbnRMb2NhbGU/OiBMb2NhbGU7XHJcbiAgX2FiYnI6IHN0cmluZztcclxuICBfY29uZmlnOiBMb2NhbGVEYXRhO1xyXG4gIG1lcmlkaWVtSG91cjogKGhvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZykgPT4gbnVtYmVyO1xyXG5cclxuICBfaW52YWxpZERhdGU6IHN0cmluZztcclxuICBfd2VlazogeyBkb3c6IG51bWJlcjsgZG95OiBudW1iZXIgfTtcclxuICBfZGF5T2ZNb250aE9yZGluYWxQYXJzZTogUmVnRXhwO1xyXG4gIF9vcmRpbmFsUGFyc2U6IFJlZ0V4cDtcclxuICBfbWVyaWRpZW1QYXJzZTogUmVnRXhwO1xyXG5cclxuICBwcml2YXRlIF9jYWxlbmRhcjogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICBwcml2YXRlIF9yZWxhdGl2ZVRpbWU6IHsgZnV0dXJlOiBzdHJpbmc7IHBhc3Q6IHN0cmluZyB9O1xyXG4gIHByaXZhdGUgX21vbnRoczogTG9jYWxlT3B0aW9ucztcclxuICBwcml2YXRlIF9tb250aHNTaG9ydDogTG9jYWxlT3B0aW9ucztcclxuICBwcml2YXRlIF9tb250aHNSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX21vbnRoc1Nob3J0UmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF9tb250aHNTdHJpY3RSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF9tb250aHNQYXJzZTogUmVnRXhwW107XHJcbiAgcHJpdmF0ZSBfbG9uZ01vbnRoc1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xyXG4gIHByaXZhdGUgX3Nob3J0TW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XHJcbiAgcHJpdmF0ZSBfbW9udGhzUGFyc2VFeGFjdDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzUGFyc2VFeGFjdDogYm9vbGVhbjtcclxuICBwcml2YXRlIF93ZWVrZGF5c1JlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydFJlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW5SZWdleDogUmVnRXhwO1xyXG5cclxuICBwcml2YXRlIF93ZWVrZGF5c1N0cmljdFJlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW5TdHJpY3RSZWdleDogUmVnRXhwO1xyXG5cclxuICBwcml2YXRlIF93ZWVrZGF5czogTG9jYWxlT3B0aW9ucztcclxuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0OiBzdHJpbmdbXTtcclxuICBwcml2YXRlIF93ZWVrZGF5c01pbjogc3RyaW5nW107XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcclxuICBwcml2YXRlIF9taW5XZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xyXG4gIHByaXZhdGUgX3Nob3J0V2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcclxuICBwcml2YXRlIF9mdWxsV2Vla2RheXNQYXJzZTogUmVnRXhwW107XHJcbiAgcHJpdmF0ZSBfbG9uZ0RhdGVGb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcblxyXG4gIHByaXZhdGUgX29yZGluYWw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBMb2NhbGVEYXRhKSB7XHJcbiAgICBpZiAoISFjb25maWcpIHtcclxuICAgICAgdGhpcy5zZXQoY29uZmlnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldChjb25maWc6IExvY2FsZURhdGEpOiB2b2lkIHtcclxuICAgIGxldCBjb25mS2V5O1xyXG4gICAgZm9yIChjb25mS2V5IGluIGNvbmZpZykge1xyXG4gICAgICBpZiAoIWNvbmZpZy5oYXNPd25Qcm9wZXJ0eShjb25mS2V5KSkge1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHByb3AgPSBjb25maWdbY29uZktleSBhcyBrZXlvZiBMb2NhbGVEYXRhXTtcclxuICAgICAgY29uc3Qga2V5ID0gKGlzRnVuY3Rpb24ocHJvcCkgPyBjb25mS2V5IDogYF8ke2NvbmZLZXl9YCkgYXMga2V5b2YgTG9jYWxlO1xyXG5cclxuICAgICAgdGhpc1trZXldID0gcHJvcCBhcyBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY2FsZW5kYXIoa2V5OiBzdHJpbmcsIGRhdGU6IERhdGUsIG5vdzogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9jYWxlbmRhcltrZXldIHx8IHRoaXMuX2NhbGVuZGFyLnNhbWVFbHNlO1xyXG5cclxuICAgIHJldHVybiBpc0Z1bmN0aW9uKG91dHB1dCkgPyBvdXRwdXQuY2FsbChudWxsLCBkYXRlLCBub3cpIDogb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgbG9uZ0RhdGVGb3JtYXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XHJcbiAgICBjb25zdCBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcclxuXHJcbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xyXG4gICAgICByZXR1cm4gZm9ybWF0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgZnVuY3Rpb24gKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcclxuICB9XHJcblxyXG4gIGdldCBpbnZhbGlkRGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludmFsaWREYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGludmFsaWREYXRlKHZhbDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9pbnZhbGlkRGF0ZSA9IHZhbDtcclxuICB9XHJcblxyXG4gIG9yZGluYWwobnVtOiBudW1iZXIsIHRva2VuPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9vcmRpbmFsLnJlcGxhY2UoJyVkJywgbnVtLnRvU3RyaW5nKDEwKSk7XHJcbiAgfVxyXG5cclxuICBwcmVwYXJzZShzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIHBvc3Rmb3JtYXQoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICByZWxhdGl2ZVRpbWUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX3JlbGF0aXZlVGltZVtzdHJdO1xyXG5cclxuICAgIHJldHVybiAoaXNGdW5jdGlvbihvdXRwdXQpKSA/XHJcbiAgICAgIG91dHB1dChudW0sIHdpdGhvdXRTdWZmaXgsIHN0ciwgaXNGdXR1cmUpIDpcclxuICAgICAgb3V0cHV0LnJlcGxhY2UoLyVkL2ksIG51bS50b1N0cmluZygxMCkpO1xyXG4gIH1cclxuXHJcbiAgcGFzdEZ1dHVyZShkaWZmOiBudW1iZXIsIG91dHB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX3JlbGF0aXZlVGltZVtkaWZmID4gMCA/ICdmdXR1cmUnIDogJ3Bhc3QnXTtcclxuXHJcbiAgICByZXR1cm4gaXNGdW5jdGlvbihmb3JtYXQpID8gZm9ybWF0KG91dHB1dCkgOiBmb3JtYXQucmVwbGFjZSgvJXMvaSwgb3V0cHV0KTtcclxuICB9XHJcblxyXG4gIC8qKiBNb250aHMgKi9cclxuICBtb250aHMoKTogc3RyaW5nW107XHJcbiAgbW9udGhzKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gIG1vbnRocyhkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQyA9IGZhbHNlKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzKVxyXG4gICAgICAgID8gdGhpcy5fbW9udGhzXHJcbiAgICAgICAgOiB0aGlzLl9tb250aHMuc3RhbmRhbG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocykpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGtleSA9ICh0aGlzLl9tb250aHMuaXNGb3JtYXQgfHwgTU9OVEhTX0lOX0ZPUk1BVCkudGVzdChmb3JtYXQpXHJcbiAgICAgID8gJ2Zvcm1hdCdcclxuICAgICAgOiAnc3RhbmRhbG9uZSc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1trZXldW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgfVxyXG5cclxuICBtb250aHNTaG9ydCgpOiBzdHJpbmdbXTtcclxuICBtb250aHNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgbW9udGhzU2hvcnQoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEMgPSBmYWxzZSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KVxyXG4gICAgICAgID8gdGhpcy5fbW9udGhzU2hvcnRcclxuICAgICAgICA6IHRoaXMuX21vbnRoc1Nob3J0LnN0YW5kYWxvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHNTaG9ydCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcbiAgICBjb25zdCBrZXkgPSBNT05USFNfSU5fRk9STUFULnRlc3QoZm9ybWF0KSA/ICdmb3JtYXQnIDogJ3N0YW5kYWxvbmUnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFtrZXldW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgfVxyXG5cclxuICBtb250aHNQYXJzZShtb250aE5hbWU6IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIGxldCBkYXRlO1xyXG4gICAgbGV0IHJlZ2V4O1xyXG5cclxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZU1vbnRoU3RyaWN0UGFyc2UobW9udGhOYW1lLCBmb3JtYXQsIHN0cmljdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xyXG4gICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IGFkZCBzb3J0aW5nXHJcbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyXHJcbiAgICAvLyBzZWUgc29ydGluZyBpbiBjb21wdXRlTW9udGhzUGFyc2VcclxuICAgIGxldCBpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XHJcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCBpKSk7XHJcbiAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSkge1xyXG4gICAgICAgIGNvbnN0IF9tb250aHMgPSB0aGlzLm1vbnRocyhkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICcnKTtcclxuICAgICAgICBjb25zdCBfc2hvcnRNb250aHMgPSB0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xyXG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke19tb250aHN9JGAsICdpJyk7XHJcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke19zaG9ydE1vbnRoc30kYCwgJ2knKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXN0cmljdCAmJiAhdGhpcy5fbW9udGhzUGFyc2VbaV0pIHtcclxuICAgICAgICByZWdleCA9IGBeJHt0aGlzLm1vbnRocyhkYXRlLCAnJywgdHJ1ZSl9fF4ke3RoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycsIHRydWUpfWA7XHJcbiAgICAgICAgdGhpcy5fbW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcclxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU1NJyAmJiAodGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldIGFzIFJlZ0V4cCkudGVzdChtb250aE5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NJyAmJiAodGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSBhcyBSZWdFeHApLnRlc3QobW9udGhOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXN0cmljdCAmJiB0aGlzLl9tb250aHNQYXJzZVtpXS50ZXN0KG1vbnRoTmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW9udGhzUmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pOiBSZWdFeHAge1xyXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZU1vbnRoc1BhcnNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzU3RyaWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzUmVnZXg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xyXG4gICAgICB0aGlzLl9tb250aHNSZWdleCA9IGRlZmF1bHRNb250aHNSZWdleDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xyXG4gICAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1JlZ2V4O1xyXG4gIH1cclxuXHJcbiAgbW9udGhzU2hvcnRSZWdleChpc1N0cmljdDogYm9vbGVhbik6IFJlZ0V4cCB7XHJcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlTW9udGhzUGFyc2UoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNTdHJpY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XHJcbiAgICB9XHJcbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNTaG9ydFJlZ2V4JykpIHtcclxuICAgICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cclxuICAgICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX21vbnRoc1Nob3J0UmVnZXg7XHJcbiAgfVxyXG5cclxuICAvKiogV2VlayAqL1xyXG4gIHdlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIHRoaXMuX3dlZWsuZG93LCB0aGlzLl93ZWVrLmRveSwgaXNVVEMpLndlZWs7XHJcbiAgfVxyXG5cclxuICBmaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG93O1xyXG4gIH1cclxuXHJcbiAgZmlyc3REYXlPZlllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93ZWVrLmRveTtcclxuICB9XHJcblxyXG4gIC8qKiBEYXkgb2YgV2VlayAqL1xyXG4gIHdlZWtkYXlzKCk6IHN0cmluZ1tdO1xyXG4gIHdlZWtkYXlzKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gIHdlZWtkYXlzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzKVxyXG4gICAgICAgID8gdGhpcy5fd2Vla2RheXNcclxuICAgICAgICA6IHRoaXMuX3dlZWtkYXlzLnN0YW5kYWxvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl93ZWVrZGF5cykpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzW2dldERheShkYXRlLCBpc1VUQyldO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9rZXkgPSB0aGlzLl93ZWVrZGF5cy5pc0Zvcm1hdC50ZXN0KGZvcm1hdClcclxuICAgICAgPyAnZm9ybWF0J1xyXG4gICAgICA6ICdzdGFuZGFsb25lJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbX2tleV1bZ2V0RGF5KGRhdGUsIGlzVVRDKV07XHJcbiAgfVxyXG5cclxuICB3ZWVrZGF5c01pbigpOiBzdHJpbmdbXTtcclxuICB3ZWVrZGF5c01pbihkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcclxuICB3ZWVrZGF5c01pbihkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzTWluW2dldERheShkYXRlLCBpc1VUQyldIDogdGhpcy5fd2Vla2RheXNNaW47XHJcbiAgfVxyXG5cclxuICB3ZWVrZGF5c1Nob3J0KCk6IHN0cmluZ1tdO1xyXG4gIHdlZWtkYXlzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgd2Vla2RheXNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuX3dlZWtkYXlzU2hvcnRbZ2V0RGF5KGRhdGUsIGlzVVRDKV0gOiB0aGlzLl93ZWVrZGF5c1Nob3J0O1xyXG4gIH1cclxuXHJcblxyXG4gIC8vIHByb3RvLndlZWtkYXlzUGFyc2UgID0gICAgICAgIGxvY2FsZVdlZWtkYXlzUGFyc2U7XHJcbiAgd2Vla2RheXNQYXJzZSh3ZWVrZGF5TmFtZT86IHN0cmluZywgZm9ybWF0Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIGxldCBpO1xyXG4gICAgbGV0IHJlZ2V4O1xyXG5cclxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlV2Vla1N0cmljdFBhcnNlKHdlZWtkYXlOYW1lLCBmb3JtYXQsIHN0cmljdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XHJcbiAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxyXG4gICAgICAvLyBmaXg6IGhlcmUgaXMgdGhlIGlzc3VlXHJcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcclxuICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0pIHtcclxuICAgICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXMoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xyXG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXNTaG9ydChkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XHJcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoYF4ke3RoaXMud2Vla2RheXNNaW4oZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZVtpXSkge1xyXG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMud2Vla2RheXMoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLndlZWtkYXlzTWluKGRhdGUsICcnLCB0cnVlKX1gO1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKHJlZ2V4LnJlcGxhY2UoJy4nLCAnJyksICdpJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNBcnJheTxSZWdFeHA+KHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlKVxyXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlKVxyXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fbWluV2Vla2RheXNQYXJzZSlcclxuICAgICAgICB8fCAhaXNBcnJheTxSZWdFeHA+KHRoaXMuX3dlZWtkYXlzUGFyc2UpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyB0ZXN0IHRoZSByZWdleFxyXG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZGQnICYmIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkZCcgJiYgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ2RkJyAmJiB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXN0cmljdCAmJiB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldLnRlc3Qod2Vla2RheU5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHByb3RvLndlZWtkYXlzUmVnZXggICAgICAgPSAgICAgICAgd2Vla2RheXNSZWdleDtcclxuICB3ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0OiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzU3RyaWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzUmVnZXg7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBtYXRjaFdvcmQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cclxuICAgICAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNSZWdleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHByb3RvLndlZWtkYXlzU2hvcnRSZWdleCAgPSAgICAgICAgd2Vla2RheXNTaG9ydFJlZ2V4O1xyXG4gIC8vIHByb3RvLndlZWtkYXlzTWluUmVnZXggICAgPSAgICAgICAgd2Vla2RheXNNaW5SZWdleDtcclxuXHJcblxyXG4gIHdlZWtkYXlzU2hvcnRSZWdleChpc1N0cmljdD86IGJvb2xlYW4pOiBSZWdFeHAge1xyXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzU3RyaWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1Nob3J0UmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd2Vla2RheXNNaW5SZWdleChpc1N0cmljdD86IGJvb2xlYW4pOiBSZWdFeHAge1xyXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzU3RyaWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzTWluUmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSBtYXRjaFdvcmQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cclxuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4IDogdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzUE0oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgLy8gSUU4IFF1aXJrcyBNb2RlICYgSUU3IFN0YW5kYXJkcyBNb2RlIGRvIG5vdCBhbGxvdyBhY2Nlc3Npbmcgc3RyaW5ncyBsaWtlIGFycmF5c1xyXG4gICAgLy8gVXNpbmcgY2hhckF0IHNob3VsZCBiZSBtb3JlIGNvbXBhdGlibGUuXHJcbiAgICByZXR1cm4gaW5wdXQudG9Mb3dlckNhc2UoKS5jaGFyQXQoMCkgPT09ICdwJztcclxuICB9XHJcblxyXG4gIG1lcmlkaWVtKGhvdXJzOiBudW1iZXIsIG1pbnV0ZXM6IG51bWJlciwgaXNMb3dlcjogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICBpZiAoaG91cnMgPiAxMSkge1xyXG4gICAgICByZXR1cm4gaXNMb3dlciA/ICdwbScgOiAnUE0nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpc0xvd2VyID8gJ2FtJyA6ICdBTSc7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRMb25nRGF0ZShrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdCA/IHRoaXMuX2xvbmdEYXRlRm9ybWF0IDogZGVmYXVsdExvbmdEYXRlRm9ybWF0O1xyXG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcclxuICAgIGNvbnN0IGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xyXG5cclxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XHJcbiAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRbXHJcbiAgICAgIGtleVxyXG4gICAgICBdID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csICh2YWw6IHN0cmluZykgPT4ge1xyXG4gICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZU1vbnRoU3RyaWN0UGFyc2UobW9udGhOYW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuKSB7XHJcbiAgICBjb25zdCBsbGMgPSBtb250aE5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGxldCBpO1xyXG4gICAgbGV0IGlpO1xyXG4gICAgbGV0IG1vbTtcclxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcclxuICAgICAgLy8gdGhpcyBpcyBub3QgdXNlZFxyXG4gICAgICB0aGlzLl9tb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgMTI7ICsraSkge1xyXG4gICAgICAgIG1vbSA9IG5ldyBEYXRlKDIwMDAsIGkpO1xyXG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRoc1Nob3J0KG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHMobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHJpY3QpIHtcclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcclxuICAgICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XHJcbiAgICAgIGlpID0gKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcclxuICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgIHJldHVybiBpaTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xyXG4gICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICByZXR1cm4gaWk7XHJcbiAgICB9XHJcbiAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlV2Vla1N0cmljdFBhcnNlKHdlZWtkYXlOYW1lOiBzdHJpbmcsIGZvcm1hdDogc3RyaW5nLCBzdHJpY3Q6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgbGV0IGlpO1xyXG4gICAgY29uc3QgbGxjID0gd2Vla2RheU5hbWUudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xyXG4gICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XHJcblxyXG4gICAgICBsZXQgaTtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IDc7ICsraSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c01pbihkYXRlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNTaG9ydChkYXRlKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzKGRhdGUsICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXNQYXJzZSlcclxuICAgICAgfHwgIWlzQXJyYXk8c3RyaW5nPih0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UpXHJcbiAgICAgIHx8ICFpc0FycmF5PHN0cmluZz4odGhpcy5fbWluV2Vla2RheXNQYXJzZSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzdHJpY3QpIHtcclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XHJcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XHJcbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xyXG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcclxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wdXRlTW9udGhzUGFyc2UoKSB7XHJcbiAgICBjb25zdCBzaG9ydFBpZWNlczogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0IGxvbmdQaWVjZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBtaXhlZFBpZWNlczogc3RyaW5nW10gPSBbXTtcclxuICAgIGxldCBkYXRlO1xyXG5cclxuICAgIGxldCBpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XHJcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZSgyMDAwLCBpKTtcclxuICAgICAgc2hvcnRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnKSk7XHJcbiAgICAgIGxvbmdQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhkYXRlLCAnJykpO1xyXG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzKGRhdGUsICcnKSk7XHJcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChkYXRlLCAnJykpO1xyXG4gICAgfVxyXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxyXG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxyXG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcclxuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xyXG4gICAgfVxyXG4gICAgZm9yIChpID0gMDsgaSA8IDI0OyBpKyspIHtcclxuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbW9udGhzUmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWl4ZWRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xyXG4gICAgdGhpcy5fbW9udGhzU2hvcnRSZWdleCA9IHRoaXMuX21vbnRoc1JlZ2V4O1xyXG4gICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bG9uZ1BpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XHJcbiAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcHV0ZVdlZWtkYXlzUGFyc2UoKSB7XHJcbiAgICBjb25zdCBtaW5QaWVjZXMgPSBbXTtcclxuICAgIGNvbnN0IHNob3J0UGllY2VzID0gW107XHJcbiAgICBjb25zdCBsb25nUGllY2VzID0gW107XHJcbiAgICBjb25zdCBtaXhlZFBpZWNlcyA9IFtdO1xyXG5cclxuICAgIGxldCBpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcclxuICAgICAgLy8gbGV0IG1vbSA9IGNyZWF0ZVVUQyhbMjAwMCwgMV0pLmRheShpKTtcclxuICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xyXG4gICAgICBjb25zdCBtaW5wID0gdGhpcy53ZWVrZGF5c01pbihkYXRlKTtcclxuICAgICAgY29uc3Qgc2hvcnRwID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpO1xyXG4gICAgICBjb25zdCBsb25ncCA9IHRoaXMud2Vla2RheXMoZGF0ZSk7XHJcbiAgICAgIG1pblBpZWNlcy5wdXNoKG1pbnApO1xyXG4gICAgICBzaG9ydFBpZWNlcy5wdXNoKHNob3J0cCk7XHJcbiAgICAgIGxvbmdQaWVjZXMucHVzaChsb25ncCk7XHJcbiAgICAgIG1peGVkUGllY2VzLnB1c2gobWlucCk7XHJcbiAgICAgIG1peGVkUGllY2VzLnB1c2goc2hvcnRwKTtcclxuICAgICAgbWl4ZWRQaWVjZXMucHVzaChsb25ncCk7XHJcbiAgICB9XHJcbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIHdlZWtkYXkgKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcclxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cclxuICAgIG1pblBpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XHJcbiAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcclxuICAgICAgbWl4ZWRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShtaXhlZFBpZWNlc1tpXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaXhlZFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XHJcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xyXG4gICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XHJcblxyXG4gICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtsb25nUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcclxuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtzaG9ydFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XHJcbiAgICB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21pblBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbXBMZW5SZXYoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIHJldHVybiBiLmxlbmd0aCAtIGEubGVuZ3RoO1xyXG59XHJcbiJdfQ==