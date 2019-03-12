/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { defaultLocaleMonthsShort, defaultLocaleWeekdaysShort } from '../locale/locale.class';
import { isString } from '../utils/type-checks';
import { configFromStringAndFormat } from './from-string-and-format';
import { createUTCDate } from './date-from-array';
import { createInvalid, markInvalid } from './valid';
import { getParsingFlags } from './parsing-flags';
// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
// tslint:disable-next-line
var /** @type {?} */ extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
// tslint:disable-next-line
var /** @type {?} */ basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var /** @type {?} */ tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
var /** @type {?} */ isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/, true],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/, true],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/, true],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/, true],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/, true],
    ['YYYYMMDD', /\d{8}/, true],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/, true],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/, true]
];
// iso time formats and regexes
var /** @type {?} */ isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];
var /** @type {?} */ aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
var /** @type {?} */ obsOffsets = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
};
// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
// tslint:disable-next-line
var /** @type {?} */ rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
/**
 * @param {?} config
 * @return {?}
 */
export function configFromISO(config) {
    if (!isString(config._i)) {
        return config;
    }
    var /** @type {?} */ input = config._i;
    var /** @type {?} */ match = extendedIsoRegex.exec(input) || basicIsoRegex.exec(input);
    var /** @type {?} */ allowTime;
    var /** @type {?} */ dateFormat;
    var /** @type {?} */ timeFormat;
    var /** @type {?} */ tzFormat;
    if (!match) {
        config._isValid = false;
        return config;
    }
    // getParsingFlags(config).iso = true;
    var /** @type {?} */ i;
    var /** @type {?} */ l;
    for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
            dateFormat = isoDates[i][0];
            allowTime = isoDates[i][2] !== false;
            break;
        }
    }
    if (dateFormat == null) {
        config._isValid = false;
        return config;
    }
    if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
            if (isoTimes[i][1].exec(match[3])) {
                // match[2] should be 'T' or space
                timeFormat = (match[2] || ' ') + isoTimes[i][0];
                break;
            }
        }
        if (timeFormat == null) {
            config._isValid = false;
            return config;
        }
    }
    if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return config;
    }
    if (match[4]) {
        if (tzRegex.exec(match[4])) {
            tzFormat = 'Z';
        }
        else {
            config._isValid = false;
            return config;
        }
    }
    config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
    return configFromStringAndFormat(config);
}
/**
 * @param {?} yearStr
 * @param {?} monthStr
 * @param {?} dayStr
 * @param {?} hourStr
 * @param {?} minuteStr
 * @param {?} secondStr
 * @return {?}
 */
function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    var /** @type {?} */ result = [
        untruncateYear(yearStr),
        defaultLocaleMonthsShort.indexOf(monthStr),
        parseInt(dayStr, 10),
        parseInt(hourStr, 10),
        parseInt(minuteStr, 10)
    ];
    if (secondStr) {
        result.push(parseInt(secondStr, 10));
    }
    return result;
}
/**
 * @param {?} yearStr
 * @return {?}
 */
function untruncateYear(yearStr) {
    var /** @type {?} */ year = parseInt(yearStr, 10);
    return year <= 49 ? year + 2000 : year;
}
/**
 * @param {?} str
 * @return {?}
 */
function preprocessRFC2822(str) {
    // Remove comments and folding whitespace and replace multiple-spaces with a single space
    return str
        .replace(/\([^)]*\)|[\n\t]/g, ' ')
        .replace(/(\s\s+)/g, ' ').trim();
}
/**
 * @param {?} weekdayStr
 * @param {?} parsedInput
 * @param {?} config
 * @return {?}
 */
function checkWeekday(weekdayStr, parsedInput, config) {
    if (weekdayStr) {
        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        var /** @type {?} */ weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr);
        var /** @type {?} */ weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
        if (weekdayProvided !== weekdayActual) {
            getParsingFlags(config).weekdayMismatch = true;
            config._isValid = false;
            return false;
        }
    }
    return true;
}
/**
 * @param {?} obsOffset
 * @param {?} militaryOffset
 * @param {?} numOffset
 * @return {?}
 */
function calculateOffset(obsOffset, militaryOffset, numOffset) {
    if (obsOffset) {
        return obsOffsets[obsOffset];
    }
    else if (militaryOffset) {
        // the only allowed military tz is Z
        return 0;
    }
    else {
        var /** @type {?} */ hm = parseInt(numOffset, 10);
        var /** @type {?} */ m = hm % 100;
        var /** @type {?} */ h = (hm - m) / 100;
        return h * 60 + m;
    }
}
/**
 * @param {?} config
 * @return {?}
 */
export function configFromRFC2822(config) {
    if (!isString(config._i)) {
        return config;
    }
    var /** @type {?} */ match = rfc2822.exec(preprocessRFC2822(config._i));
    if (!match) {
        return markInvalid(config);
    }
    var /** @type {?} */ parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
    if (!checkWeekday(match[1], parsedArray, config)) {
        return config;
    }
    config._a = parsedArray;
    config._tzm = calculateOffset(match[8], match[9], match[10]);
    config._d = createUTCDate.apply(null, config._a);
    config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    getParsingFlags(config).rfc2822 = true;
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
export function configFromString(config) {
    if (!isString(config._i)) {
        return config;
    }
    var /** @type {?} */ matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return config;
    }
    // todo: update logic processing
    // isISO -> configFromISO
    // isRFC -> configFromRFC
    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    }
    else {
        return config;
    }
    // Final attempt, use Input Fallback
    // hooks.createFromInputFallback(config);
    return createInvalid(config);
}
// hooks.createFromInputFallback = deprecate(
//     'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
//     'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
//     'discouraged and will be removed in an upcoming major release. Please refer to ' +
//     'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
//     function (config) {
//         config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
//     }
// );

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1zdHJpbmcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvZnJvbS1zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRzlGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS2xELHFCQUFNLGdCQUFnQixHQUFHLGtKQUFrSixDQUFDOztBQUU1SyxxQkFBTSxhQUFhLEdBQUcsNklBQTZJLENBQUM7QUFFcEsscUJBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDO0FBRXhDLHFCQUFNLFFBQVEsR0FBZ0M7SUFDNUMsQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDO0lBQzdDLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQztJQUN2QyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7SUFDeEMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQztJQUNwQyxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO0lBQ2pDLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7SUFDaEMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQztJQUNsQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOztJQUUzQixDQUFD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QUM7UUFDTixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7OztJQUlELE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDOUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IHsgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LCBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBtYXJrSW52YWxpZCB9IGZyb20gJy4vdmFsaWQnO1xyXG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xyXG5cclxuLy8gaXNvIDg2MDEgcmVnZXhcclxuLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCBleHRlbmRlZElzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuY29uc3QgYmFzaWNJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OlxcZFxcZCg/OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XHJcblxyXG5jb25zdCB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vO1xyXG5cclxuY29uc3QgaXNvRGF0ZXM6IFtzdHJpbmcsIFJlZ0V4cCwgYm9vbGVhbl1bXSA9IFtcclxuICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvLCB0cnVlXSxcclxuICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvLCB0cnVlXSxcclxuICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvLCB0cnVlXSxcclxuICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXHJcbiAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9LywgdHJ1ZV0sXHJcbiAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXHJcbiAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9LywgdHJ1ZV0sXHJcbiAgWydZWVlZTU1ERCcsIC9cXGR7OH0vLCB0cnVlXSxcclxuICAvLyBZWVlZTU0gaXMgTk9UIGFsbG93ZWQgYnkgdGhlIHN0YW5kYXJkXHJcbiAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vLCB0cnVlXSxcclxuICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxyXG4gIFsnWVlZWURERCcsIC9cXGR7N30vLCB0cnVlXVxyXG5dO1xyXG5cclxuLy8gaXNvIHRpbWUgZm9ybWF0cyBhbmQgcmVnZXhlc1xyXG5jb25zdCBpc29UaW1lczogW3N0cmluZywgUmVnRXhwXVtdID0gW1xyXG4gIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcclxuICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxyXG4gIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcclxuICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcclxuICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcclxuICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXHJcbiAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXHJcbiAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxyXG4gIFsnSEgnLCAvXFxkXFxkL11cclxuXTtcclxuXHJcbmNvbnN0IGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoXFwtP1xcZCspL2k7XHJcblxyXG5jb25zdCBvYnNPZmZzZXRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gIFVUOiAwLFxyXG4gIEdNVDogMCxcclxuICBFRFQ6IC00ICogNjAsXHJcbiAgRVNUOiAtNSAqIDYwLFxyXG4gIENEVDogLTUgKiA2MCxcclxuICBDU1Q6IC02ICogNjAsXHJcbiAgTURUOiAtNiAqIDYwLFxyXG4gIE1TVDogLTcgKiA2MCxcclxuICBQRFQ6IC03ICogNjAsXHJcbiAgUFNUOiAtOCAqIDYwXHJcbn07XHJcblxyXG4vLyBSRkMgMjgyMiByZWdleDogRm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI3NlY3Rpb24tMy4zXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLztcclxuXHJcbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5wdXQgPSBjb25maWcuX2k7XHJcbiAgY29uc3QgbWF0Y2ggPSBleHRlbmRlZElzb1JlZ2V4LmV4ZWMoaW5wdXQpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhpbnB1dCk7XHJcblxyXG5cclxuICBsZXQgYWxsb3dUaW1lO1xyXG4gIGxldCBkYXRlRm9ybWF0O1xyXG4gIGxldCB0aW1lRm9ybWF0O1xyXG4gIGxldCB0ekZvcm1hdDtcclxuXHJcbiAgaWYgKCFtYXRjaCkge1xyXG4gICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IGw7XHJcbiAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XHJcbiAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcclxuICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcclxuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBpZiAobWF0Y2hbM10pIHtcclxuICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XHJcbiAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxyXG4gICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xyXG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcclxuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBpZiAobWF0Y2hbNF0pIHtcclxuICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XHJcbiAgICAgIHR6Rm9ybWF0ID0gJ1onO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XHJcblxyXG4gIHJldHVybiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5mdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKHllYXJTdHI6IHN0cmluZywgbW9udGhTdHI6IHN0cmluZywgZGF5U3RyOiBzdHJpbmcsIGhvdXJTdHI6IHN0cmluZywgbWludXRlU3RyOiBzdHJpbmcsIHNlY29uZFN0cjogc3RyaW5nKTogRGF0ZUFycmF5IHtcclxuICBjb25zdCByZXN1bHQgPSBbXHJcbiAgICB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSxcclxuICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSxcclxuICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxyXG4gICAgcGFyc2VJbnQoaG91clN0ciwgMTApLFxyXG4gICAgcGFyc2VJbnQobWludXRlU3RyLCAxMClcclxuICBdO1xyXG5cclxuICBpZiAoc2Vjb25kU3RyKSB7XHJcbiAgICByZXN1bHQucHVzaChwYXJzZUludChzZWNvbmRTdHIsIDEwKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU3RyLCAxMCk7XHJcblxyXG4gIHJldHVybiB5ZWFyIDw9IDQ5ID8geWVhciArIDIwMDAgOiB5ZWFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcclxuICByZXR1cm4gc3RyXHJcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgJyAnKVxyXG4gICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpLnRyaW0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tXZWVrZGF5KHdlZWtkYXlTdHI6IHN0cmluZywgcGFyc2VkSW5wdXQ6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IGJvb2xlYW4ge1xyXG4gIGlmICh3ZWVrZGF5U3RyKSB7XHJcbiAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbnRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXHJcbiAgICBjb25zdCB3ZWVrZGF5UHJvdmlkZWQgPSBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpO1xyXG4gICAgY29uc3Qgd2Vla2RheUFjdHVhbCA9IG5ldyBEYXRlKHBhcnNlZElucHV0WzBdLCBwYXJzZWRJbnB1dFsxXSwgcGFyc2VkSW5wdXRbMl0pLmdldERheSgpO1xyXG4gICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xyXG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xyXG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0OiBzdHJpbmcsIG1pbGl0YXJ5T2Zmc2V0OiBzdHJpbmcsIG51bU9mZnNldDogc3RyaW5nKSB7XHJcbiAgaWYgKG9ic09mZnNldCkge1xyXG4gICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcclxuICB9IGVsc2UgaWYgKG1pbGl0YXJ5T2Zmc2V0KSB7XHJcbiAgICAvLyB0aGUgb25seSBhbGxvd2VkIG1pbGl0YXJ5IHR6IGlzIFpcclxuICAgIHJldHVybiAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApO1xyXG4gICAgY29uc3QgbSA9IGhtICUgMTAwO1xyXG4gICAgY29uc3QgaCA9IChobSAtIG0pIC8gMTAwO1xyXG5cclxuICAgIHJldHVybiBoICogNjAgKyBtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGF0ZSBhbmQgdGltZSBmcm9tIHJlZiAyODIyIGZvcm1hdFxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBpZiAoIWlzU3RyaW5nKGNvbmZpZy5faSkpIHtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKTtcclxuXHJcbiAgaWYgKCFtYXRjaCkge1xyXG4gICAgcmV0dXJuIG1hcmtJbnZhbGlkKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJzZWRBcnJheSA9IGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MobWF0Y2hbNF0sIG1hdGNoWzNdLCBtYXRjaFsyXSwgbWF0Y2hbNV0sIG1hdGNoWzZdLCBtYXRjaFs3XSk7XHJcbiAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnLl9hID0gcGFyc2VkQXJyYXk7XHJcbiAgY29uZmlnLl90em0gPSBjYWxjdWxhdGVPZmZzZXQobWF0Y2hbOF0sIG1hdGNoWzldLCBtYXRjaFsxMF0pO1xyXG5cclxuICBjb25maWcuX2QgPSBjcmVhdGVVVENEYXRlLmFwcGx5KG51bGwsIGNvbmZpZy5fYSk7XHJcbiAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcclxuXHJcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucmZjMjgyMiA9IHRydWU7XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XHJcblxyXG4gIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XHJcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IHVwZGF0ZSBsb2dpYyBwcm9jZXNzaW5nXHJcbiAgLy8gaXNJU08gLT4gY29uZmlnRnJvbUlTT1xyXG4gIC8vIGlzUkZDIC0+IGNvbmZpZ0Zyb21SRkNcclxuXHJcbiAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xyXG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcclxuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIEZpbmFsIGF0dGVtcHQsIHVzZSBJbnB1dCBGYWxsYmFja1xyXG4gIC8vIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XHJcbiAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcclxufVxyXG5cclxuLy8gaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXHJcbi8vICAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xyXG4vLyAgICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIFJGQzI4MjIvSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXHJcbi8vICAgICAnZGlzY291cmFnZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhbiB1cGNvbWluZyBtYWpvciByZWxlYXNlLiBQbGVhc2UgcmVmZXIgdG8gJyArXHJcbi8vICAgICAnaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXHJcbi8vICAgICBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbi8vICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcclxuLy8gICAgIH1cclxuLy8gKTtcclxuIl19