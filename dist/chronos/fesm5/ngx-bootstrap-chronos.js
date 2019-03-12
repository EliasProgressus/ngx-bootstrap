/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} n
 * @param {?} x
 * @return {?}
 */
function mod(n, x) {
    return (n % x + x) % x;
}
/**
 * @param {?} num
 * @return {?}
 */
function absFloor(num) {
    return num < 0 ? Math.ceil(num) || 0 : Math.floor(num);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} str
 * @return {?}
 */
function isString(str) {
    return typeof str === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * @param {?} date
 * @return {?}
 */
function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
/**
 * @param {?} fn
 * @return {?}
 */
function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
/**
 * @param {?=} value
 * @return {?}
 */
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
/**
 * @template T
 * @param {?=} input
 * @return {?}
 */
function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
/**
 * @template T
 * @param {?} input
 * @return {?}
 */
function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
/**
 * @param {?} obj
 * @return {?}
 */
function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    var /** @type {?} */ k;
    for (k in obj) {
        if (obj.hasOwnProperty(k)) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} input
 * @return {?}
 */
function isUndefined(input) {
    return input === void 0;
}
/**
 * @template T
 * @param {?} argumentForCoercion
 * @return {?}
 */
function toInt(argumentForCoercion) {
    var /** @type {?} */ coercedNumber = +argumentForCoercion;
    var /** @type {?} */ value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ aliases = {};
var /** @type {?} */ _mapUnits = {
    date: 'day',
    hour: 'hours',
    minute: 'minutes',
    second: 'seconds',
    millisecond: 'milliseconds'
};
/**
 * @param {?} unit
 * @param {?} shorthand
 * @return {?}
 */
function addUnitAlias(unit, shorthand) {
    var /** @type {?} */ lowerCase = unit.toLowerCase();
    var /** @type {?} */ _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
}
/**
 * @param {?} units
 * @return {?}
 */
function normalizeUnits(units) {
    return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
/**
 * @param {?} inputObject
 * @return {?}
 */
function normalizeObjectUnits(inputObject) {
    var /** @type {?} */ normalizedInput = {};
    var /** @type {?} */ normalizedProp;
    var /** @type {?} */ prop;
    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }
    return /** @type {?} */ (normalizedInput);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// place in new Date([array])
var /** @type {?} */ YEAR = 0;
var /** @type {?} */ MONTH = 1;
var /** @type {?} */ DATE = 2;
var /** @type {?} */ HOUR = 3;
var /** @type {?} */ MINUTE = 4;
var /** @type {?} */ SECOND = 5;
var /** @type {?} */ MILLISECOND = 6;
var /** @type {?} */ WEEK = 7;
var /** @type {?} */ WEEKDAY = 8;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */
function zeroFill(num, targetLength, forceSign) {
    var /** @type {?} */ absNumber = "" + Math.abs(num);
    var /** @type {?} */ zerosToFill = targetLength - absNumber.length;
    var /** @type {?} */ sign = num >= 0;
    var /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    var /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ formatFunctions = {};
var /** @type {?} */ formatTokenFunctions = {};
// tslint:disable-next-line
var /** @type {?} */ formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
/**
 * @param {?} token
 * @param {?} padded
 * @param {?} ordinal
 * @param {?} callback
 * @return {?}
 */
function addFormatToken(token, padded, ordinal, callback) {
    if (token) {
        formatTokenFunctions[token] = callback;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(callback.apply(null, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function (date, opts) {
            return opts.locale.ordinal(callback.apply(null, arguments), token);
        };
    }
}
/**
 * @param {?} format
 * @return {?}
 */
function makeFormatFunction(format) {
    var /** @type {?} */ array = format.match(formattingTokens);
    var /** @type {?} */ length = array.length;
    var /** @type {?} */ formatArr = new Array(length);
    for (var /** @type {?} */ i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale, isUTC, offset) {
        if (offset === void 0) { offset = 0; }
        var /** @type {?} */ output = '';
        for (var /** @type {?} */ j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? (/** @type {?} */ (formatArr[j])).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
                : formatArr[j];
        }
        return output;
    };
}
/**
 * @param {?} input
 * @return {?}
 */
function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @return {?}
 */
function createUTCDate(y, m, d) {
    var /** @type {?} */ date = new Date(Date.UTC.apply(null, arguments));
    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}
/**
 * @param {?=} y
 * @param {?=} m
 * @param {?=} d
 * @param {?=} h
 * @param {?=} M
 * @param {?=} s
 * @param {?=} ms
 * @return {?}
 */
function createDate(y, m, d, h, M, s, ms) {
    if (m === void 0) { m = 0; }
    if (d === void 0) { d = 1; }
    if (h === void 0) { h = 0; }
    if (M === void 0) { M = 0; }
    if (s === void 0) { s = 0; }
    if (ms === void 0) { ms = 0; }
    var /** @type {?} */ date = new Date(y, m, d, h, M, s, ms);
    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getHours(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCHours() : date.getHours();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMinutes(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMinutes() : date.getMinutes();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getSeconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCSeconds() : date.getSeconds();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMilliseconds(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMilliseconds() : date.getMilliseconds();
}
/**
 * @param {?} date
 * @return {?}
 */
function getTime(date) {
    return date.getTime();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDay(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDay() : date.getDay();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDate(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCDate() : date.getDate();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getMonth(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCMonth() : date.getMonth();
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getFullYear(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return isUTC ? date.getUTCFullYear() : date.getFullYear();
}
/**
 * @param {?} date
 * @return {?}
 */
function unix(date) {
    return Math.floor(date.valueOf() / 1000);
}
/**
 * @param {?} date
 * @return {?}
 */
function getFirstDayOfMonth(date) {
    return createDate(date.getFullYear(), date.getMonth(), 1, date.getHours(), date.getMinutes(), date.getSeconds());
}
/**
 * @param {?} date
 * @param {?} firstDayOfWeek
 * @return {?}
 */
function isFirstDayOfWeek(date, firstDayOfWeek) {
    return date.getDay() === firstDayOfWeek;
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameMonth(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return isSameYear(date1, date2) && getMonth(date1) === getMonth(date2);
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameYear(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return getFullYear(date1) === getFullYear(date2);
}
/**
 * @param {?} date1
 * @param {?} date2
 * @return {?}
 */
function isSameDay(date1, date2) {
    if (!date1 || !date2) {
        return false;
    }
    return (isSameYear(date1, date2) &&
        isSameMonth(date1, date2) &&
        getDate(date1) === getDate(date2));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ match1 = /\d/; //       0 - 9
var /** @type {?} */ match2 = /\d\d/; //      00 - 99
var /** @type {?} */ match3 = /\d{3}/; //     000 - 999
var /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
var /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
var /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
var /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
var /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
var /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
var /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
var /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
var /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
var /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
var /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
var /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
var /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var /** @type {?} */ regexes = {};
/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */
function addRegexToken(token, regex, strictRegex) {
    if (isFunction(regex)) {
        regexes[token] = regex;
        return;
    }
    regexes[token] = function (isStrict, locale) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}
/**
 * @param {?} token
 * @param {?} locale
 * @return {?}
 */
function getParseRegexForToken(token, locale) {
    var /** @type {?} */ _strict = false;
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }
    return regexes[token](_strict, locale);
}
/**
 * @param {?} str
 * @return {?}
 */
function unescapeFormat(str) {
    // tslint:disable-next-line
    return regexEscape(str
        .replace('\\', '')
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) { return p1 || p2 || p3 || p4; }));
}
/**
 * @param {?} str
 * @return {?}
 */
function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
function addParseToken(token, callback) {
    var /** @type {?} */ _token = isString(token) ? [token] : token;
    var /** @type {?} */ func = callback;
    if (isNumber(callback)) {
        func = function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        };
    }
    if (isArray(_token) && isFunction(func)) {
        var /** @type {?} */ i = void 0;
        for (i = 0; i < _token.length; i++) {
            tokens[_token[i]] = func;
        }
    }
}
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
function addWeekParseToken(token, callback) {
    addParseToken(token, function (input, array, config, _token) {
        config._w = config._w || {};
        return callback(input, config._w, config, _token);
    });
}
/**
 * @param {?} token
 * @param {?} input
 * @param {?} config
 * @return {?}
 */
function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*
export function getPrioritizedUnits(unitsObj) {
  const units = [];
  let unit;
  for (unit in unitsObj) {
    if (unitsObj.hasOwnProperty(unit)) {
      units.push({ unit, priority: priorities[unit] });
    }
  }
  units.sort(function (a, b) {
    return a.priority - b.priority;
  });

  return units;
}
*/

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfMonth() {
    // FORMATTING
    addFormatToken('D', ['DD', 2, false], 'Do', function (date, opts) {
        return getDate(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('date', 'D');
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array, config) {
        array[DATE] = toInt(input.match(match1to2)[0]);
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty: false,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: false,
        invalidMonth: null,
        invalidFormat: false,
        userInvalidated: false,
        iso: false,
        parsedDateParts: [],
        meridiem: null,
        rfc2822: false,
        weekdayMismatch: false
    };
}
/**
 * @param {?} config
 * @return {?}
 */
function getParsingFlags(config) {
    if (config._pf == null) {
        config._pf = defaultParsingFlags();
    }
    return config._pf;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function getYear(date, opts) {
    return getFullYear(date, opts.isUTC).toString();
}
/**
 * @return {?}
 */
function initYear() {
    addFormatToken('Y', null, null, function (date, opts) {
        var /** @type {?} */ y = getFullYear(date, opts.isUTC);
        return y <= 9999 ? y.toString(10) : "+" + y;
    });
    addFormatToken(null, ['YY', 2, false], null, function (date, opts) {
        return (getFullYear(date, opts.isUTC) % 100).toString(10);
    });
    addFormatToken(null, ['YYYY', 4, false], null, getYear);
    addFormatToken(null, ['YYYYY', 5, false], null, getYear);
    addFormatToken(null, ['YYYYYY', 6, true], null, getYear);
    // ALIASES
    addUnitAlias('year', 'y');
    // PARSING
    addRegexToken('Y', matchSigned);
    addRegexToken('YY', match1to2, match2);
    addRegexToken('YYYY', match1to4, match4);
    addRegexToken('YYYYY', match1to6, match6);
    addRegexToken('YYYYYY', match1to6, match6);
    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
    addParseToken('YYYY', function (input, array, config) {
        array[YEAR] = input.length === 2 ? parseTwoDigitYear(input) : toInt(input);
        return config;
    });
    addParseToken('YY', function (input, array, config) {
        array[YEAR] = parseTwoDigitYear(input);
        return config;
    });
    addParseToken('Y', function (input, array, config) {
        array[YEAR] = parseInt(input, 10);
        return config;
    });
}
/**
 * @param {?} input
 * @return {?}
 */
function parseTwoDigitYear(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
}
/**
 * @param {?} year
 * @return {?}
 */
function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}
/**
 * @param {?} year
 * @return {?}
 */
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} year
 * @param {?} month
 * @return {?}
 */
function daysInMonth$1(year, month) {
    if (isNaN(year) || isNaN(month)) {
        return NaN;
    }
    var /** @type {?} */ modMonth = mod(month, 12);
    var /** @type {?} */ _year = year + (month - modMonth) / 12;
    return modMonth === 1
        ? isLeapYear(_year) ? 29 : 28
        : (31 - modMonth % 7 % 2);
}
/**
 * @return {?}
 */
function initMonth() {
    // FORMATTING
    addFormatToken('M', ['MM', 2, false], 'Mo', function (date, opts) {
        return (getMonth(date, opts.isUTC) + 1).toString(10);
    });
    addFormatToken('MMM', null, null, function (date, opts) {
        return opts.locale.monthsShort(date, opts.format, opts.isUTC);
    });
    addFormatToken('MMMM', null, null, function (date, opts) {
        return opts.locale.months(date, opts.format, opts.isUTC);
    });
    // ALIASES
    addUnitAlias('month', 'M');
    // PARSING
    addRegexToken('M', match1to2);
    addRegexToken('MM', match1to2, match2);
    addRegexToken('MMM', function (isStrict, locale) {
        return locale.monthsShortRegex(isStrict);
    });
    addRegexToken('MMMM', function (isStrict, locale) {
        return locale.monthsRegex(isStrict);
    });
    addParseToken(['M', 'MM'], function (input, array, config) {
        array[MONTH] = toInt(input) - 1;
        return config;
    });
    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
        var /** @type {?} */ month = config._locale.monthsParse(input, token, config._strict);
        // if we didn't find a month name, mark the date as invalid.
        if (month != null) {
            array[MONTH] = month;
        }
        else {
            getParsingFlags(config).invalidMonth = !!input;
        }
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ defaultTimeUnit = {
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0
};
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
function shiftDate(date, unit) {
    var /** @type {?} */ _unit = Object.assign({}, defaultTimeUnit, unit);
    var /** @type {?} */ year = date.getFullYear() + (_unit.year || 0);
    var /** @type {?} */ month = date.getMonth() + (_unit.month || 0);
    var /** @type {?} */ day = date.getDate() + (_unit.day || 0);
    if (_unit.month && !_unit.day) {
        day = Math.min(day, daysInMonth$1(year, month));
    }
    return createDate(year, month, day, date.getHours() + (_unit.hour || 0), date.getMinutes() + (_unit.minute || 0), date.getSeconds() + (_unit.seconds || 0));
}
/**
 * @param {?} date
 * @param {?} unit
 * @return {?}
 */
function setFullDate(date, unit) {
    return createDate(getNum(date.getFullYear(), unit.year), getNum(date.getMonth(), unit.month), getNum(date.getDate(), unit.day), getNum(date.getHours(), unit.hour), getNum(date.getMinutes(), unit.minute), getNum(date.getSeconds(), unit.seconds), getNum(date.getMilliseconds(), unit.milliseconds));
}
/**
 * @param {?} def
 * @param {?=} num
 * @return {?}
 */
function getNum(def, num) {
    return isNumber(num) ? num : def;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMonth(date, value, isUTC) {
    var /** @type {?} */ dayOfMonth = Math.min(getDate(date), daysInMonth$1(getFullYear(date), value));
    isUTC ? date.setUTCMonth(value, dayOfMonth) : date.setMonth(value, dayOfMonth);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setHours(date, value, isUTC) {
    isUTC ? date.setUTCHours(value) : date.setHours(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMinutes(date, value, isUTC) {
    isUTC ? date.setUTCMinutes(value) : date.setMinutes(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setSeconds(date, value, isUTC) {
    isUTC ? date.setUTCSeconds(value) : date.setSeconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setMilliseconds(date, value, isUTC) {
    isUTC ? date.setUTCMilliseconds(value) : date.setMilliseconds(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @param {?=} isUTC
 * @return {?}
 */
function setDate(date, value, isUTC) {
    isUTC ? date.setUTCDate(value) : date.setDate(value);
    return date;
}
/**
 * @param {?} date
 * @param {?} value
 * @return {?}
 */
function setTime(date, value) {
    date.setTime(value);
    return date;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @return {?}
 */
function cloneDate(date) {
    return new Date(date.getTime());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
function startOf(date, unit, isUTC) {
    var /** @type {?} */ _date = cloneDate(date);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (unit) {
        case 'year':
            setMonth(_date, 0, isUTC);
        /* falls through */
        case 'quarter':
        case 'month':
            setDate(_date, 1, isUTC);
        /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            setHours(_date, 0, isUTC);
        /* falls through */
        case 'hours':
            setMinutes(_date, 0, isUTC);
        /* falls through */
        case 'minutes':
            setSeconds(_date, 0, isUTC);
        /* falls through */
        case 'seconds':
            setMilliseconds(_date, 0, isUTC);
    }
    // weeks are a special case
    if (unit === 'week') {
        setLocaleDayOfWeek(_date, 0, { isUTC: isUTC });
    }
    if (unit === 'isoWeek') {
        setISODayOfWeek(_date, 1);
    }
    // quarters are also special
    if (unit === 'quarter') {
        setMonth(_date, Math.floor(getMonth(_date, isUTC) / 3) * 3, isUTC);
    }
    return _date;
}
/**
 * @param {?} date
 * @param {?} unit
 * @param {?=} isUTC
 * @return {?}
 */
function endOf(date, unit, isUTC) {
    var /** @type {?} */ _unit = unit;
    // 'date' is an alias for 'day', so it should be considered as such.
    if (_unit === 'date') {
        _unit = 'day';
    }
    var /** @type {?} */ start = startOf(date, _unit, isUTC);
    var /** @type {?} */ _step = add(start, 1, _unit === 'isoWeek' ? 'week' : _unit, isUTC);
    var /** @type {?} */ res = subtract(_step, 1, 'milliseconds', isUTC);
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfYear() {
    // FORMATTING
    addFormatToken('DDD', ['DDDD', 3, false], 'DDDo', function (date) {
        return getDayOfYear(date)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('dayOfYear', 'DDD');
    addRegexToken('DDD', match1to3);
    addRegexToken('DDDD', match3);
    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
        config._dayOfYear = toInt(input);
        return config;
    });
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDayOfYear(date, isUTC) {
    var /** @type {?} */ date1 = +startOf(date, 'day', isUTC);
    var /** @type {?} */ date2 = +startOf(date, 'year', isUTC);
    var /** @type {?} */ someDate = date1 - date2;
    var /** @type {?} */ oneDay = 1000 * 60 * 60 * 24;
    return Math.round(someDate / oneDay) + 1;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var /** @type {?} */ fwd = dow - doy + 7;
    // first-week day local weekday -- which local weekday is fwd
    var /** @type {?} */ fwdlw = (createUTCDate(year, 0, fwd).getUTCDay() - dow + 7) % 7;
    return -fwdlw + fwd - 1;
}
/**
 * @param {?} year
 * @param {?} week
 * @param {?} weekday
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var /** @type {?} */ localWeekday = (7 + weekday - dow) % 7;
    var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
    var /** @type {?} */ dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset;
    var /** @type {?} */ resYear;
    var /** @type {?} */ resDayOfYear;
    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    }
    else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    }
    else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }
    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}
/**
 * @param {?} date
 * @param {?} dow
 * @param {?} doy
 * @param {?=} isUTC
 * @return {?}
 */
function weekOfYear(date, dow, doy, isUTC) {
    var /** @type {?} */ weekOffset = firstWeekOffset(getFullYear(date, isUTC), dow, doy);
    var /** @type {?} */ week = Math.floor((getDayOfYear(date, isUTC) - weekOffset - 1) / 7) + 1;
    var /** @type {?} */ resWeek;
    var /** @type {?} */ resYear;
    if (week < 1) {
        resYear = getFullYear(date, isUTC) - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    }
    else if (week > weeksInYear(getFullYear(date, isUTC), dow, doy)) {
        resWeek = week - weeksInYear(getFullYear(date, isUTC), dow, doy);
        resYear = getFullYear(date, isUTC) + 1;
    }
    else {
        resYear = getFullYear(date, isUTC);
        resWeek = week;
    }
    return {
        week: resWeek,
        year: resYear
    };
}
/**
 * @param {?} year
 * @param {?} dow
 * @param {?} doy
 * @return {?}
 */
function weeksInYear(year, dow, doy) {
    var /** @type {?} */ weekOffset = firstWeekOffset(year, dow, doy);
    var /** @type {?} */ weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var /** @type {?} */ defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
var /** @type {?} */ defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
var /** @type {?} */ defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
var /** @type {?} */ defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
var /** @type {?} */ defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
var /** @type {?} */ defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
};
var /** @type {?} */ defaultOrdinal = '%d';
var /** @type {?} */ defaultDayOfMonthOrdinalParse = /\d{1,2}/;
var /** @type {?} */ defaultMonthsShortRegex = matchWord;
var /** @type {?} */ defaultMonthsRegex = matchWord;
var Locale = /** @class */ (function () {
    function Locale(config) {
        if (!!config) {
            this.set(config);
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    Locale.prototype.set = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        var /** @type {?} */ confKey;
        for (confKey in config) {
            if (!config.hasOwnProperty(confKey)) {
                continue;
            }
            var /** @type {?} */ prop = config[/** @type {?} */ (confKey)];
            var /** @type {?} */ key = /** @type {?} */ ((isFunction(prop) ? confKey : "_" + confKey));
            this[key] = /** @type {?} */ (prop);
        }
        this._config = config;
    };
    /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    Locale.prototype.calendar = /**
     * @param {?} key
     * @param {?} date
     * @param {?} now
     * @return {?}
     */
    function (key, date, now) {
        var /** @type {?} */ output = this._calendar[key] || this._calendar["sameElse"];
        return isFunction(output) ? output.call(null, date, now) : output;
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Locale.prototype.longDateFormat = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        var /** @type {?} */ format = this._longDateFormat[key];
        var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    Object.defineProperty(Locale.prototype, "invalidDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._invalidDate;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._invalidDate = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    Locale.prototype.ordinal = /**
     * @param {?} num
     * @param {?=} token
     * @return {?}
     */
    function (num, token) {
        return this._ordinal.replace('%d', num.toString(10));
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Locale.prototype.preparse = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str;
    };
    /**
     * @param {?} str
     * @return {?}
     */
    Locale.prototype.postformat = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str;
    };
    /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    Locale.prototype.relativeTime = /**
     * @param {?} num
     * @param {?} withoutSuffix
     * @param {?} str
     * @param {?} isFuture
     * @return {?}
     */
    function (num, withoutSuffix, str, isFuture) {
        var /** @type {?} */ output = this._relativeTime[str];
        return (isFunction(output)) ?
            output(num, withoutSuffix, str, isFuture) :
            output.replace(/%d/i, num.toString(10));
    };
    /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    Locale.prototype.pastFuture = /**
     * @param {?} diff
     * @param {?} output
     * @return {?}
     */
    function (diff, output) {
        var /** @type {?} */ format = this._relativeTime[diff > 0 ? 'future' : 'past'];
        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.months = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return isArray(this._months)
                ? this._months
                : this._months.standalone;
        }
        if (isArray(this._months)) {
            return this._months[getMonth(date, isUTC)];
        }
        var /** @type {?} */ key = (this._months.isFormat || MONTHS_IN_FORMAT).test(format)
            ? 'format'
            : 'standalone';
        return this._months[key][getMonth(date, isUTC)];
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.monthsShort = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (isUTC === void 0) { isUTC = false; }
        if (!date) {
            return isArray(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
        }
        if (isArray(this._monthsShort)) {
            return this._monthsShort[getMonth(date, isUTC)];
        }
        var /** @type {?} */ key = MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone';
        return this._monthsShort[key][getMonth(date, isUTC)];
    };
    /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.monthsParse = /**
     * @param {?} monthName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    function (monthName, format, strict) {
        var /** @type {?} */ date;
        var /** @type {?} */ regex;
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
        var /** @type {?} */ i;
        for (i = 0; i < 12; i++) {
            // make the regex if we don't have it already
            date = new Date(Date.UTC(2000, i));
            if (strict && !this._longMonthsParse[i]) {
                var /** @type {?} */ _months = this.months(date, '', true).replace('.', '');
                var /** @type {?} */ _shortMonths = this.monthsShort(date, '', true).replace('.', '');
                this._longMonthsParse[i] = new RegExp("^" + _months + "$", 'i');
                this._shortMonthsParse[i] = new RegExp("^" + _shortMonths + "$", 'i');
            }
            if (!strict && !this._monthsParse[i]) {
                regex = "^" + this.months(date, '', true) + "|^" + this.monthsShort(date, '', true);
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
    };
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.monthsRegex = /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
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
    };
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.monthsShortRegex = /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
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
    };
    /** Week */
    /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.week = /**
     * Week
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, isUTC) {
        return weekOfYear(date, this._week.dow, this._week.doy, isUTC).week;
    };
    /**
     * @return {?}
     */
    Locale.prototype.firstDayOfWeek = /**
     * @return {?}
     */
    function () {
        return this._week.dow;
    };
    /**
     * @return {?}
     */
    Locale.prototype.firstDayOfYear = /**
     * @return {?}
     */
    function () {
        return this._week.doy;
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdays = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return isArray(this._weekdays)
                ? this._weekdays
                : this._weekdays.standalone;
        }
        if (isArray(this._weekdays)) {
            return this._weekdays[getDay(date, isUTC)];
        }
        var /** @type {?} */ _key = this._weekdays.isFormat.test(format)
            ? 'format'
            : 'standalone';
        return this._weekdays[_key][getDay(date, isUTC)];
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdaysMin = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        return date ? this._weekdaysMin[getDay(date, isUTC)] : this._weekdaysMin;
    };
    /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    Locale.prototype.weekdaysShort = /**
     * @param {?=} date
     * @param {?=} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        return date ? this._weekdaysShort[getDay(date, isUTC)] : this._weekdaysShort;
    };
    // proto.weekdaysParse  =        localeWeekdaysParse;
    /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.weekdaysParse = /**
     * @param {?=} weekdayName
     * @param {?=} format
     * @param {?=} strict
     * @return {?}
     */
    function (weekdayName, format, strict) {
        var /** @type {?} */ i;
        var /** @type {?} */ regex;
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
            var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            if (strict && !this._fullWeekdaysParse[i]) {
                this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(date, '', true).replace('.', '\.?') + "$", 'i');
                this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(date, '', true).replace('.', '\.?') + "$", 'i');
                this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(date, '', true).replace('.', '\.?') + "$", 'i');
            }
            if (!this._weekdaysParse[i]) {
                regex = "^" + this.weekdays(date, '', true) + "|^" + this.weekdaysShort(date, '', true) + "|^" + this.weekdaysMin(date, '', true);
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
    };
    // proto.weekdaysRegex       =        weekdaysRegex;
    /**
     * @param {?} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysRegex = /**
     * @param {?} isStrict
     * @return {?}
     */
    function (isStrict) {
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
    };
    // proto.weekdaysShortRegex  =        weekdaysShortRegex;
    // proto.weekdaysMinRegex    =        weekdaysMinRegex;
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysShortRegex = /**
     * @param {?=} isStrict
     * @return {?}
     */
    function (isStrict) {
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
    };
    /**
     * @param {?=} isStrict
     * @return {?}
     */
    Locale.prototype.weekdaysMinRegex = /**
     * @param {?=} isStrict
     * @return {?}
     */
    function (isStrict) {
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
    };
    /**
     * @param {?} input
     * @return {?}
     */
    Locale.prototype.isPM = /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
        // Using charAt should be more compatible.
        return input.toLowerCase().charAt(0) === 'p';
    };
    /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    Locale.prototype.meridiem = /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours > 11) {
            return isLower ? 'pm' : 'PM';
        }
        return isLower ? 'am' : 'AM';
    };
    /**
     * @param {?} key
     * @return {?}
     */
    Locale.prototype.formatLongDate = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        this._longDateFormat = this._longDateFormat ? this._longDateFormat : defaultLongDateFormat;
        var /** @type {?} */ format = this._longDateFormat[key];
        var /** @type {?} */ formatUpper = this._longDateFormat[key.toUpperCase()];
        if (format || !formatUpper) {
            return format;
        }
        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
            return val.slice(1);
        });
        return this._longDateFormat[key];
    };
    /**
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    Locale.prototype.handleMonthStrictParse = /**
     * @param {?} monthName
     * @param {?} format
     * @param {?=} strict
     * @return {?}
     */
    function (monthName, format, strict) {
        var /** @type {?} */ llc = monthName.toLocaleLowerCase();
        var /** @type {?} */ i;
        var /** @type {?} */ ii;
        var /** @type {?} */ mom;
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
    };
    /**
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    Locale.prototype.handleWeekStrictParse = /**
     * @param {?} weekdayName
     * @param {?} format
     * @param {?} strict
     * @return {?}
     */
    function (weekdayName, format, strict) {
        var /** @type {?} */ ii;
        var /** @type {?} */ llc = weekdayName.toLocaleLowerCase();
        if (!this._weekdaysParse) {
            this._weekdaysParse = [];
            this._shortWeekdaysParse = [];
            this._minWeekdaysParse = [];
            var /** @type {?} */ i = void 0;
            for (i = 0; i < 7; ++i) {
                var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
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
    };
    /**
     * @return {?}
     */
    Locale.prototype.computeMonthsParse = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ shortPieces = [];
        var /** @type {?} */ longPieces = [];
        var /** @type {?} */ mixedPieces = [];
        var /** @type {?} */ date;
        var /** @type {?} */ i;
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
        this._monthsRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._monthsShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
    };
    /**
     * @return {?}
     */
    Locale.prototype.computeWeekdaysParse = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ minPieces = [];
        var /** @type {?} */ shortPieces = [];
        var /** @type {?} */ longPieces = [];
        var /** @type {?} */ mixedPieces = [];
        var /** @type {?} */ i;
        for (i = 0; i < 7; i++) {
            // make the regex if we don't have it already
            // let mom = createUTC([2000, 1]).day(i);
            var /** @type {?} */ date = setDayOfWeek(new Date(Date.UTC(2000, 1)), i, null, true);
            var /** @type {?} */ minp = this.weekdaysMin(date);
            var /** @type {?} */ shortp = this.weekdaysShort(date);
            var /** @type {?} */ longp = this.weekdays(date);
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
        this._weekdaysRegex = new RegExp("^(" + mixedPieces.join('|') + ")", 'i');
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + longPieces.join('|') + ")", 'i');
        this._weekdaysShortStrictRegex = new RegExp("^(" + shortPieces.join('|') + ")", 'i');
        this._weekdaysMinStrictRegex = new RegExp("^(" + minPieces.join('|') + ")", 'i');
    };
    return Locale;
}());
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function cmpLenRev(a, b) {
    return b.length - a.length;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ defaultInvalidDate = 'Invalid date';
var /** @type {?} */ defaultLocaleWeek = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6 // The week that contains Jan 1st is the first week of the year.
};
var /** @type {?} */ defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
var /** @type {?} */ defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    ss: '%d seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
};
var /** @type {?} */ baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,
    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,
    week: defaultLocaleWeek,
    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,
    meridiemParse: defaultLocaleMeridiemParse
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @param {?} dontConvert
 * @return {?}
 */
function compareArrays(array1, array2, dontConvert) {
    var /** @type {?} */ len = Math.min(array1.length, array2.length);
    var /** @type {?} */ lengthDiff = Math.abs(array1.length - array2.length);
    var /** @type {?} */ diffs = 0;
    var /** @type {?} */ i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i])
            || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initWeek() {
    addFormatToken('w', ['ww', 2, false], 'wo', function (date, opts) {
        return getWeek(date, opts.locale)
            .toString(10);
    });
    addFormatToken('W', ['WW', 2, false], 'Wo', function (date) {
        return getISOWeek(date)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('week', 'w');
    addUnitAlias('isoWeek', 'W');
    // PARSING
    addRegexToken('w', match1to2);
    addRegexToken('ww', match1to2, match2);
    addRegexToken('W', match1to2);
    addRegexToken('WW', match1to2, match2);
    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input);
        return config;
    });
    // export function getSetWeek (input) {
    //   var week = this.localeData().week(this);
    //   return input == null ? week : this.add((input - week) * 7, 'd');
    // }
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function getWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return locale.week(date, isUTC);
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISOWeek(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).week;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initWeekYear() {
    addFormatToken(null, ['gg', 2, false], null, function (date, opts) {
        // return this.weekYear() % 100;
        return (getWeekYear(date, opts.locale) % 100).toString();
    });
    addFormatToken(null, ['GG', 2, false], null, function (date) {
        // return this.isoWeekYear() % 100;
        return (getISOWeekYear(date) % 100).toString();
    });
    addWeekYearFormatToken('gggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('ggggg', _getWeekYearFormatCb);
    addWeekYearFormatToken('GGGG', _getISOWeekYearFormatCb);
    addWeekYearFormatToken('GGGGG', _getISOWeekYearFormatCb);
    // ALIASES
    addUnitAlias('weekYear', 'gg');
    addUnitAlias('isoWeekYear', 'GG');
    // PARSING
    addRegexToken('G', matchSigned);
    addRegexToken('g', matchSigned);
    addRegexToken('GG', match1to2, match2);
    addRegexToken('gg', match1to2, match2);
    addRegexToken('GGGG', match1to4, match4);
    addRegexToken('gggg', match1to4, match4);
    addRegexToken('GGGGG', match1to6, match6);
    addRegexToken('ggggg', match1to6, match6);
    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input);
        return config;
    });
    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
        week[token] = parseTwoDigitYear(input);
        return config;
    });
}
/**
 * @param {?} token
 * @param {?} getter
 * @return {?}
 */
function addWeekYearFormatToken(token, getter) {
    addFormatToken(null, [token, token.length, false], null, getter);
}
/**
 * @param {?} date
 * @param {?} opts
 * @return {?}
 */
function _getWeekYearFormatCb(date, opts) {
    return getWeekYear(date, opts.locale).toString();
}
/**
 * @param {?} date
 * @return {?}
 */
function _getISOWeekYearFormatCb(date) {
    return getISOWeekYear(date).toString();
}
/**
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function getWeekYear(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return weekOfYear(date, locale.firstDayOfWeek(), locale.firstDayOfYear(), isUTC).year;
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISOWeekYear(date, isUTC) {
    return weekOfYear(date, 1, 4, isUTC).year;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initTimezone() {
    // FORMATTING
    addFormatToken('z', null, null, function (date, opts) {
        return opts.isUTC ? 'UTC' : '';
    });
    addFormatToken('zz', null, null, function (date, opts) {
        return opts.isUTC ? 'Coordinated Universal Time' : '';
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initTimestamp() {
    // FORMATTING
    addFormatToken('X', null, null, function (date) {
        return unix(date)
            .toString(10);
    });
    addFormatToken('x', null, null, function (date) {
        return date.valueOf()
            .toString(10);
    });
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
        return config;
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initSecond() {
    // FORMATTING
    addFormatToken('s', ['ss', 2, false], null, function (date, opts) {
        return getSeconds(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('second', 's');
    // PARSING
    addRegexToken('s', match1to2);
    addRegexToken('ss', match1to2, match2);
    addParseToken(['s', 'ss'], SECOND);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initQuarter() {
    // FORMATTING
    addFormatToken('Q', null, 'Qo', function (date, opts) {
        return getQuarter(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('quarter', 'Q');
    // PARSING
    addRegexToken('Q', match1);
    addParseToken('Q', function (input, array, config) {
        array[MONTH] = (toInt(input) - 1) * 3;
        return config;
    });
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getQuarter(date, isUTC) {
    if (isUTC === void 0) { isUTC = false; }
    return Math.ceil((getMonth(date, isUTC) + 1) / 3);
}
// export function getSetQuarter(input) {
//   return input == null
//     ? Math.ceil((this.month() + 1) / 3)
//     : this.month((input - 1) * 3 + this.month() % 3);
// }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} token
 * @param {?} separator
 * @return {?}
 */
function addOffsetFormatToken(token, separator) {
    addFormatToken(token, null, null, function (date, config) {
        var /** @type {?} */ offset = getUTCOffset(date, { _isUTC: config.isUTC, _offset: config.offset });
        var /** @type {?} */ sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}
/**
 * @return {?}
 */
function initOffset() {
    addOffsetFormatToken('Z', ':');
    addOffsetFormatToken('ZZ', '');
    // PARSING
    addRegexToken('Z', matchShortOffset);
    addRegexToken('ZZ', matchShortOffset);
    addParseToken(['Z', 'ZZ'], function (input, array, config) {
        config._useUTC = true;
        config._tzm = offsetFromString(matchShortOffset, input);
        return config;
    });
}
// HELPERS
// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var /** @type {?} */ chunkOffset = /([\+\-]|\d\d)/gi;
/**
 * @param {?} matcher
 * @param {?} str
 * @return {?}
 */
function offsetFromString(matcher, str) {
    var /** @type {?} */ matches = (str || '').match(matcher);
    if (matches === null) {
        return null;
    }
    var /** @type {?} */ chunk = matches[matches.length - 1];
    var /** @type {?} */ parts = chunk.match(chunkOffset) || ['-', '0', '0'];
    var /** @type {?} */ minutes = parseInt(parts[1], 10) * 60 + toInt(parts[2]);
    var /** @type {?} */ _min = parts[0] === '+' ? minutes : -minutes;
    return minutes === 0 ? 0 : _min;
}
/**
 * @param {?} input
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
function cloneWithOffset(input, date, config) {
    if (config === void 0) { config = {}; }
    if (!config._isUTC) {
        return input;
    }
    var /** @type {?} */ res = cloneDate(date);
    // todo: input._d - res._d + ((res._offset || 0) - (input._offset || 0))*60000
    var /** @type {?} */ offsetDiff = (config._offset || 0) * 60000;
    var /** @type {?} */ diff = input.valueOf() - res.valueOf() + offsetDiff;
    // Use low-level api, because this fn is low-level api.
    res.setTime(res.valueOf() + diff);
    // todo: add timezone handling
    // hooks.updateOffset(res, false);
    return res;
}
/**
 * @param {?} date
 * @return {?}
 */
function getDateOffset(date) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(date.getTimezoneOffset() / 15) * 15;
}
/**
 * @param {?} date
 * @param {?=} config
 * @return {?}
 */
function getUTCOffset(date, config) {
    if (config === void 0) { config = {}; }
    var /** @type {?} */ _offset = config._offset || 0;
    return config._isUTC ? _offset : getDateOffset(date);
}
// DEPRECATED
/*export function isDaylightSavingTimeShifted() {
  if (!isUndefined(this._isDSTShifted)) {
    return this._isDSTShifted;
  }

  const c = {};

  copyConfig(c, this);
  c = prepareConfig(c);

  if (c._a) {
    const other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
    this._isDSTShifted = this.isValid() &&
      compareArrays(c._a, other.toArray()) > 0;
  } else {
    this._isDSTShifted = false;
  }

  return this._isDSTShifted;
}*/
// in Khronos
/*export function isLocal() {
  return this.isValid() ? !this._isUTC : false;
}

export function isUtcOffset() {
  return this.isValid() ? this._isUTC : false;
}

export function isUtc() {
  return this.isValid() ? this._isUTC && this._offset === 0 : false;
}*/

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initMinute() {
    // FORMATTING
    addFormatToken('m', ['mm', 2, false], null, function (date, opts) {
        return getMinutes(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('minute', 'm');
    // PARSING
    addRegexToken('m', match1to2);
    addRegexToken('mm', match1to2, match2);
    addParseToken(['m', 'mm'], MINUTE);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initMillisecond() {
    addFormatToken('S', null, null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
    });
    addFormatToken(null, ['SS', 2, false], null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
    });
    addFormatToken(null, ['SSS', 3, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC)).toString(10);
    });
    addFormatToken(null, ['SSSS', 4, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
    });
    addFormatToken(null, ['SSSSS', 5, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
    });
    addFormatToken(null, ['SSSSSS', 6, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
    });
    addFormatToken(null, ['SSSSSSS', 7, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var /** @type {?} */ token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }
    /**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function parseMs(input, array, config) {
        array[MILLISECOND] = toInt(parseFloat("0." + input) * 1000);
        return config;
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initHour() {
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function hFormat(date, isUTC) {
        return getHours(date, isUTC) % 12 || 12;
    }
    /**
     * @param {?} date
     * @param {?} isUTC
     * @return {?}
     */
    function kFormat(date, isUTC) {
        return getHours(date, isUTC) || 24;
    }
    addFormatToken('H', ['HH', 2, false], null, function (date, opts) {
        return getHours(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('h', ['hh', 2, false], null, function (date, opts) {
        return hFormat(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('k', ['kk', 2, false], null, function (date, opts) {
        return kFormat(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('hmm', null, null, function (date, opts) {
        var /** @type {?} */ _h = hFormat(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _h + _mm;
    });
    addFormatToken('hmmss', null, null, function (date, opts) {
        var /** @type {?} */ _h = hFormat(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _h + _mm + _ss;
    });
    addFormatToken('Hmm', null, null, function (date, opts) {
        var /** @type {?} */ _H = getHours(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        return "" + _H + _mm;
    });
    addFormatToken('Hmmss', null, null, function (date, opts) {
        var /** @type {?} */ _H = getHours(date, opts.isUTC);
        var /** @type {?} */ _mm = zeroFill(getMinutes(date, opts.isUTC), 2);
        var /** @type {?} */ _ss = zeroFill(getSeconds(date, opts.isUTC), 2);
        return "" + _H + _mm + _ss;
    });
    /**
     * @param {?} token
     * @param {?} lowercase
     * @return {?}
     */
    function meridiem(token, lowercase) {
        addFormatToken(token, null, null, function (date, opts) {
            return opts.locale.meridiem(getHours(date, opts.isUTC), getMinutes(date, opts.isUTC), lowercase);
        });
    }
    meridiem('a', true);
    meridiem('A', false);
    // ALIASES
    addUnitAlias('hour', 'h');
    /**
     * @param {?} isStrict
     * @param {?} locale
     * @return {?}
     */
    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse;
    }
    addRegexToken('a', matchMeridiem);
    addRegexToken('A', matchMeridiem);
    addRegexToken('H', match1to2);
    addRegexToken('h', match1to2);
    addRegexToken('k', match1to2);
    addRegexToken('HH', match1to2, match2);
    addRegexToken('hh', match1to2, match2);
    addRegexToken('kk', match1to2, match2);
    addRegexToken('hmm', match3to4);
    addRegexToken('hmmss', match5to6);
    addRegexToken('Hmm', match3to4);
    addRegexToken('Hmmss', match5to6);
    addParseToken(['H', 'HH'], HOUR);
    addParseToken(['k', 'kk'], function (input, array, config) {
        var /** @type {?} */ kInput = toInt(input);
        array[HOUR] = kInput === 24 ? 0 : kInput;
        return config;
    });
    addParseToken(['a', 'A'], function (input, array, config) {
        config._isPm = config._locale.isPM(input);
        config._meridiem = input;
        return config;
    });
    addParseToken(['h', 'hh'], function (input, array, config) {
        array[HOUR] = toInt(input);
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('hmm', function (input, array, config) {
        var /** @type {?} */ pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('hmmss', function (input, array, config) {
        var /** @type {?} */ pos1 = input.length - 4;
        var /** @type {?} */ pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        getParsingFlags(config).bigHour = true;
        return config;
    });
    addParseToken('Hmm', function (input, array, config) {
        var /** @type {?} */ pos = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos));
        array[MINUTE] = toInt(input.substr(pos));
        return config;
    });
    addParseToken('Hmmss', function (input, array, config) {
        var /** @type {?} */ pos1 = input.length - 4;
        var /** @type {?} */ pos2 = input.length - 2;
        array[HOUR] = toInt(input.substr(0, pos1));
        array[MINUTE] = toInt(input.substr(pos1, 2));
        array[SECOND] = toInt(input.substr(pos2));
        return config;
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ locales = {};
var /** @type {?} */ localeFamilies = {};
var /** @type {?} */ globalLocale;
/**
 * @param {?} key
 * @return {?}
 */
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
/**
 * @param {?} names
 * @return {?}
 */
function chooseLocale(names) {
    var /** @type {?} */ next;
    var /** @type {?} */ locale;
    var /** @type {?} */ i = 0;
    while (i < names.length) {
        var /** @type {?} */ split = normalizeLocale(names[i]).split('-');
        var /** @type {?} */ j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
/**
 * @param {?} parentConfig
 * @param {?} childConfig
 * @return {?}
 */
function mergeConfigs(parentConfig, childConfig) {
    var /** @type {?} */ res = Object.assign({}, parentConfig);
    for (var /** @type {?} */ childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
            continue;
        }
        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
            res[childProp] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[childProp] = childConfig[childProp];
        }
        else {
            delete res[childProp];
        }
    }
    var /** @type {?} */ parentProp;
    for (parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[/** @type {?} */ (parentProp)])) {
            // make sure changes to properties don't modify parent config
            res[/** @type {?} */ (parentProp)] = Object.assign({}, res[/** @type {?} */ (parentProp)]);
        }
    }
    return res;
}
/**
 * @param {?} name
 * @return {?}
 */
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
       // TODO: Find a better way to register and load all the locales in Node
       if (!locales[name] && (typeof module !== 'undefined') &&
         module && module.exports) {
         try {
           oldLocale = globalLocale._abbr;
           var aliasedRequire = require;
           aliasedRequire('./locale/' + name);
           getSetGlobalLocale(oldLocale);
         } catch (e) {}
       }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
/**
 * @param {?=} key
 * @param {?=} values
 * @return {?}
 */
function getSetGlobalLocale(key, values) {
    var /** @type {?} */ data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else if (isString(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    var /** @type {?} */ parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
            return null;
        }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
        });
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
function updateLocale(name, config) {
    var /** @type {?} */ _config = config;
    if (_config != null) {
        var /** @type {?} */ parentConfig = baseConfig;
        // MERGE
        var /** @type {?} */ tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        var /** @type {?} */ locale = new Locale(_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
/**
 * @param {?=} key
 * @return {?}
 */
function getLocale(key) {
    setDefaultLocale();
    if (!key) {
        return globalLocale;
    }
    // let locale;
    var /** @type {?} */ _key = isArray(key) ? key : [key];
    return chooseLocale(_key);
}
/**
 * @return {?}
 */
function listLocales() {
    return Object.keys(locales);
}
/**
 * @return {?}
 */
function setDefaultLocale() {
    if (locales["en"]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            var /** @type {?} */ b = num % 10;
            var /** @type {?} */ output = toInt((num % 100) / 10) === 1
                ? 'th'
                : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return num + output;
        }
    });
    initWeek();
    initWeekYear();
    initYear();
    initTimezone();
    initTimestamp();
    initSecond();
    initQuarter();
    initOffset();
    initMonth();
    initMinute();
    initMillisecond();
    initHour();
    initDayOfYear();
    initDayOfWeek();
    initDayOfMonth();
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
var ɵ0 = function (mem, order) {
    mem[order] = true;
    return mem;
};
var /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
/**
 * @param {?} duration
 * @return {?}
 */
function isDurationValid(duration) {
    var /** @type {?} */ durationKeys = Object.keys(duration);
    if (durationKeys
        .some(function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    })) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    var /** @type {?} */ unitHasDecimal = false;
    for (var /** @type {?} */ i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} number
 * @return {?}
 */
function absCeil(number) {
    return number < 0 ? Math.floor(number) : Math.ceil(number);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} dur
 * @return {?}
 */
function bubble(dur) {
    var /** @type {?} */ milliseconds = dur._milliseconds;
    var /** @type {?} */ days = dur._days;
    var /** @type {?} */ months = dur._months;
    var /** @type {?} */ data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    var /** @type {?} */ seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    var /** @type {?} */ minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    var /** @type {?} */ hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    // convert days to months
    var /** @type {?} */ monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    var /** @type {?} */ years = absFloor(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
/**
 * @param {?} day
 * @return {?}
 */
function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
/**
 * @param {?} month
 * @return {?}
 */
function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ round = Math.round;
var /** @type {?} */ thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year
};
/**
 * @param {?} str
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} isFuture
 * @param {?} locale
 * @return {?}
 */
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
/**
 * @param {?} posNegDuration
 * @param {?} withoutSuffix
 * @param {?} locale
 * @return {?}
 */
function relativeTime(posNegDuration, withoutSuffix, locale) {
    var /** @type {?} */ duration = createDuration(posNegDuration).abs();
    var /** @type {?} */ seconds = round(duration.as('s'));
    var /** @type {?} */ minutes = round(duration.as('m'));
    var /** @type {?} */ hours = round(duration.as('h'));
    var /** @type {?} */ days = round(duration.as('d'));
    var /** @type {?} */ months = round(duration.as('M'));
    var /** @type {?} */ years = round(duration.as('y'));
    var /** @type {?} */ a = seconds <= thresholds["ss"] && ['s', seconds] ||
        seconds < thresholds["s"] && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds["m"] && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds["h"] && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds["d"] && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds["M"] && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    var /** @type {?} */ b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}
// export function humanize(withSuffix) {
//   if (!this.isValid()) {
//     return this.localeData().invalidDate();
//   }
//
//   const locale = this.localeData();
//   let output = relativeTime(this, !withSuffix, locale);
//
//   if (withSuffix) {
//     output = locale.pastFuture(+this, output);
//   }
//
//   return locale.postformat(output);
// }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Duration = /** @class */ (function () {
    function Duration(duration, config) {
        if (config === void 0) { config = {}; }
        this._data = {};
        this._locale = getLocale();
        this._locale = config && config._locale || getLocale();
        // const normalizedInput = normalizeObjectUnits(duration);
        var /** @type {?} */ normalizedInput = duration;
        var /** @type {?} */ years = normalizedInput.year || 0;
        var /** @type {?} */ quarters = normalizedInput.quarter || 0;
        var /** @type {?} */ months = normalizedInput.month || 0;
        var /** @type {?} */ weeks = normalizedInput.week || 0;
        var /** @type {?} */ days = normalizedInput.day || 0;
        var /** @type {?} */ hours = normalizedInput.hours || 0;
        var /** @type {?} */ minutes = normalizedInput.minutes || 0;
        var /** @type {?} */ seconds = normalizedInput.seconds || 0;
        var /** @type {?} */ milliseconds = normalizedInput.milliseconds || 0;
        this._isValid = isDurationValid(normalizedInput);
        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1000 +
            minutes * 60 * 1000 + // 1000 * 60
            // 1000 * 60
            hours * 1000 * 60 * 60; // using 1000 * 60 * 60
        // instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible to translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            quarters * 3 +
            years * 12;
        // this._data = {};
        // this._locale = getLocale();
        // this._bubble();
        return bubble(this);
    }
    /**
     * @return {?}
     */
    Duration.prototype.isValid = /**
     * @return {?}
     */
    function () {
        return this._isValid;
    };
    /**
     * @param {?=} withSuffix
     * @return {?}
     */
    Duration.prototype.humanize = /**
     * @param {?=} withSuffix
     * @return {?}
     */
    function (withSuffix) {
        // throw new Error(`TODO: implement`);
        if (!this.isValid()) {
            return this.localeData().invalidDate;
        }
        var /** @type {?} */ locale = this.localeData();
        var /** @type {?} */ output = relativeTime(this, !withSuffix, locale);
        if (withSuffix) {
            output = locale.pastFuture(+this, output);
        }
        return locale.postformat(output);
    };
    /**
     * @return {?}
     */
    Duration.prototype.localeData = /**
     * @return {?}
     */
    function () {
        return this._locale;
    };
    /**
     * @param {?=} localeKey
     * @return {?}
     */
    Duration.prototype.locale = /**
     * @param {?=} localeKey
     * @return {?}
     */
    function (localeKey) {
        if (!localeKey) {
            return this._locale._abbr;
        }
        this._locale = getLocale(localeKey) || this._locale;
        return this;
    };
    /**
     * @return {?}
     */
    Duration.prototype.abs = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ mathAbs = Math.abs;
        var /** @type {?} */ data = this._data;
        this._milliseconds = mathAbs(this._milliseconds);
        this._days = mathAbs(this._days);
        this._months = mathAbs(this._months);
        data.milliseconds = mathAbs(data.milliseconds);
        data.seconds = mathAbs(data.seconds);
        data.minutes = mathAbs(data.minutes);
        data.hours = mathAbs(data.hours);
        data.month = mathAbs(data.month);
        data.year = mathAbs(data.year);
        return this;
    };
    /**
     * @param {?} _units
     * @return {?}
     */
    Duration.prototype.as = /**
     * @param {?} _units
     * @return {?}
     */
    function (_units) {
        if (!this.isValid()) {
            return NaN;
        }
        var /** @type {?} */ days;
        var /** @type {?} */ months;
        var /** @type {?} */ milliseconds = this._milliseconds;
        var /** @type {?} */ units = normalizeUnits(_units);
        if (units === 'month' || units === 'year') {
            days = this._days + milliseconds / 864e5;
            months = this._months + daysToMonths(days);
            return units === 'month' ? months : months / 12;
        }
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week':
                return days / 7 + milliseconds / 6048e5;
            case 'day':
                return days + milliseconds / 864e5;
            case 'hours':
                return days * 24 + milliseconds / 36e5;
            case 'minutes':
                return days * 1440 + milliseconds / 6e4;
            case 'seconds':
                return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'milliseconds':
                return Math.floor(days * 864e5) + milliseconds;
            default:
                throw new Error("Unknown unit " + units);
        }
    };
    /**
     * @return {?}
     */
    Duration.prototype.valueOf = /**
     * @return {?}
     */
    function () {
        if (!this.isValid()) {
            return NaN;
        }
        return (this._milliseconds +
            this._days * 864e5 +
            (this._months % 12) * 2592e6 +
            toInt(this._months / 12) * 31536e6);
    };
    return Duration;
}());
/**
 * @param {?} obj
 * @return {?}
 */
function isDuration(obj) {
    return obj instanceof Duration;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function isValid(config) {
    if (config._isValid == null) {
        var /** @type {?} */ flags = getParsingFlags(config);
        var /** @type {?} */ parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var /** @type {?} */ isNowValid = !isNaN(config._d && config._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (config._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
        if (Object.isFrozen == null || !Object.isFrozen(config)) {
            config._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return config._isValid;
}
/**
 * @param {?} config
 * @param {?=} flags
 * @return {?}
 */
function createInvalid(config, flags) {
    config._d = new Date(NaN);
    Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function markInvalid(config) {
    config._isValid = false;
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
function configFromISO(config) {
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
function configFromRFC2822(config) {
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
function configFromString(config) {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    var /** @type {?} */ _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    var /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    var /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    var /** @type {?} */ format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
function expandFormat(_format, locale) {
    var /** @type {?} */ format = _format;
    var /** @type {?} */ i = 5;
    var /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var /** @type {?} */ replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 * @param {?=} a
 * @param {?=} b
 * @param {?=} c
 * @return {?}
 */
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function currentDateArray(config) {
    var /** @type {?} */ nowValue = new Date();
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}
/**
 * @param {?} config
 * @return {?}
 */
function configFromArray(config) {
    var /** @type {?} */ input = [];
    var /** @type {?} */ i;
    var /** @type {?} */ date;
    var /** @type {?} */ currentDate;
    var /** @type {?} */ expectedWeekday;
    var /** @type {?} */ yearToUse;
    if (config._d) {
        return config;
    }
    currentDate = currentDateArray(config);
    // compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }
    // if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }
        date = new Date(Date.UTC(yearToUse, 0, config._dayOfYear));
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }
    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }
    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
        config._a[MINUTE] === 0 &&
        config._a[SECOND] === 0 &&
        config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
    // check for mismatching day of week
    if (config._w && typeof config._w["d"] !== 'undefined' && config._w["d"] !== expectedWeekday) {
        getParsingFlags(config).weekdayMismatch = true;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function dayOfYearFromWeekInfo(config) {
    var /** @type {?} */ w, /** @type {?} */ weekYear, /** @type {?} */ week, /** @type {?} */ weekday, /** @type {?} */ dow, /** @type {?} */ doy, /** @type {?} */ temp, /** @type {?} */ weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;
        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(new Date(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    }
    else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;
        var /** @type {?} */ curWeek = weekOfYear(new Date(), dow, doy);
        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
        // Default to current week.
        week = defaults(w.w, curWeek.week);
        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        }
        else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        }
        else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    }
    else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    }
    else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function checkOverflow(config) {
    var /** @type {?} */ overflow;
    var /** @type {?} */ a = config._a;
    if (a && getParsingFlags(config).overflow === -2) {
        // todo: fix this sh*t
        overflow =
            a[MONTH] < 0 || a[MONTH] > 11 ? MONTH :
                a[DATE] < 1 || a[DATE] > daysInMonth$1(a[YEAR], a[MONTH]) ? DATE :
                    a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
                        a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE :
                            a[SECOND] < 0 || a[SECOND] > 59 ? SECOND :
                                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
                                    -1;
        if (getParsingFlags(config)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(config)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(config)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }
        getParsingFlags(config).overflow = overflow;
    }
    return config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// constant that refers to the ISO standard
// hooks.ISO_8601 = function () {};
var /** @type {?} */ ISO_8601 = 'ISO_8601';
// constant that refers to the RFC 2822 form
// hooks.RFC_2822 = function () {};
var /** @type {?} */ RFC_2822 = 'RFC_2822';
/**
 * @param {?} config
 * @return {?}
 */
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === ISO_8601) {
        return configFromISO(config);
    }
    if (config._f === RFC_2822) {
        return configFromRFC2822(config);
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    if (isArray(config._f) || (!config._i && config._i !== 0)) {
        return config;
    }
    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var /** @type {?} */ input = config._i.toString();
    var /** @type {?} */ totalParsedInputLength = 0;
    var /** @type {?} */ inputLength = input.length;
    var /** @type {?} */ tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    var /** @type {?} */ i;
    var /** @type {?} */ token;
    var /** @type {?} */ parsedInput;
    var /** @type {?} */ skipped;
    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (input.match(getParseRegexForToken(token, config._locale)) || [])[0];
        if (parsedInput) {
            skipped = input.substr(0, input.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            input = input.slice(input.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }
    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = inputLength - totalParsedInputLength;
    if (input.length > 0) {
        getParsingFlags(config).unusedInput.push(input);
    }
    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = void 0;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    return checkOverflow(config);
}
/**
 * @param {?} locale
 * @param {?} _hour
 * @param {?} meridiem
 * @return {?}
 */
function meridiemFixWrap(locale, _hour, meridiem) {
    var /** @type {?} */ hour = _hour;
    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    }
    if (locale.isPM == null) {
        // this is not supposed to happen
        return hour;
    }
    // Fallback
    var /** @type {?} */ isPm = locale.isPM(meridiem);
    if (isPm && hour < 12) {
        hour += 12;
    }
    if (!isPm && hour === 12) {
        hour = 0;
    }
    return hour;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function configFromStringAndArray(config) {
    var /** @type {?} */ tempConfig;
    var /** @type {?} */ bestMoment;
    var /** @type {?} */ scoreToBeat;
    var /** @type {?} */ currentScore;
    if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
    }
    var /** @type {?} */ i;
    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (!isValid(tempConfig)) {
            continue;
        }
        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        // or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }
    return Object.assign(config, bestMoment || tempConfig);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function configFromObject(config) {
    if (config._d) {
        return config;
    }
    var /** @type {?} */ input = config._i;
    if (isObject(input)) {
        var /** @type {?} */ i = normalizeObjectUnits(/** @type {?} */ (input));
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            .map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
    }
    return configFromArray(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} config
 * @return {?}
 */
function createFromConfig(config) {
    var /** @type {?} */ res = checkOverflow(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!isValid(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
        // Adding is smart enough around DST
        res._d = add(res._d, 1, 'day');
        res._nextDay = undefined;
      }*/
    return res;
}
/**
 * @param {?} config
 * @return {?}
 */
function prepareConfig(config) {
    var /** @type {?} */ input = config._i;
    var /** @type {?} */ format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
        return createInvalid(config, { nullInput: true });
    }
    if (isString(input)) {
        config._i = input = config._locale.preparse(input);
    }
    if (isDate(input)) {
        config._d = cloneDate(input);
        return config;
    }
    // todo: add check for recursion
    if (isArray(format)) {
        configFromStringAndArray(config);
    }
    else if (format) {
        configFromStringAndFormat(config);
    }
    else {
        configFromInput(config);
    }
    if (!isValid(config)) {
        config._d = null;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function configFromInput(config) {
    var /** @type {?} */ input = config._i;
    if (isUndefined(input)) {
        config._d = new Date();
    }
    else if (isDate(input)) {
        config._d = cloneDate(input);
    }
    else if (isString(input)) {
        configFromString(config);
    }
    else if (isArray(input) && input.length) {
        var /** @type {?} */ _arr = input.slice(0);
        config._a = _arr.map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
        configFromArray(config);
    }
    else if (isObject(input)) {
        configFromObject(config);
    }
    else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    return config;
}
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    var /** @type {?} */ config = {};
    var /** @type {?} */ _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
function parseDate(input, format, localeKey, strict, isUTC) {
    if (isDate(input)) {
        return input;
    }
    var /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
    return config._d;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} num
 * @return {?}
 */
function absRound(num) {
    return num < 0 ? Math.round(num * -1) * -1 : Math.round(num);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isAfter(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() > date2.valueOf();
    }
    return date2.valueOf() < startOf(date1, units).valueOf();
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isBefore(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() < date2.valueOf();
    }
    return endOf(date1, units).valueOf() < date2.valueOf();
}
/**
 * @param {?} date
 * @param {?} daysDisabled
 * @return {?}
 */
function isDisabledDay(date, daysDisabled) {
    if (daysDisabled === undefined || !daysDisabled || !daysDisabled.length) {
        return false;
    }
    return daysDisabled.some(function (day) { return day === date.getDay(); });
}
/**
 * @param {?} date1
 * @param {?} date2
 * @param {?=} units
 * @return {?}
 */
function isSame(date1, date2, units) {
    if (units === void 0) { units = 'milliseconds'; }
    if (!date1 || !date2) {
        return false;
    }
    if (units === 'milliseconds') {
        return date1.valueOf() === date2.valueOf();
    }
    var /** @type {?} */ inputMs = date2.valueOf();
    return (startOf(date1, units).valueOf() <= inputMs &&
        inputMs <= endOf(date1, units).valueOf());
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
// tslint:disable-next-line
var /** @type {?} */ isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
/**
 * @param {?=} input
 * @param {?=} key
 * @param {?=} config
 * @return {?}
 */
function createDuration(input, key, config) {
    if (config === void 0) { config = {}; }
    var /** @type {?} */ duration = convertDuration(input, key);
    // matching against regexp is expensive, do it on demand
    return new Duration(duration, config);
}
/**
 * @param {?} input
 * @param {?} key
 * @return {?}
 */
function convertDuration(input, key) {
    // checks for null or undefined
    if (input == null) {
        return {};
    }
    if (isDuration(input)) {
        return {
            milliseconds: input._milliseconds,
            day: input._days,
            month: input._months
        };
    }
    if (isNumber(input)) {
        // duration = {};
        return key ? (_a = {}, _a[key] = input, _a) : { milliseconds: input };
    }
    if (isString(input)) {
        var /** @type {?} */ match = aspNetRegex.exec(input);
        if (match) {
            var /** @type {?} */ sign = (match[1] === '-') ? -1 : 1;
            return {
                year: 0,
                day: toInt(match[DATE]) * sign,
                hours: toInt(match[HOUR]) * sign,
                minutes: toInt(match[MINUTE]) * sign,
                seconds: toInt(match[SECOND]) * sign,
                // the millisecond decimal point is included in the match
                milliseconds: toInt(absRound(toInt(match[MILLISECOND]) * 1000)) * sign
            };
        }
        match = isoRegex.exec(input);
        if (match) {
            var /** @type {?} */ sign = (match[1] === '-') ? -1 : (match[1] === '+') ? 1 : 1;
            return {
                year: parseIso(match[2], sign),
                month: parseIso(match[3], sign),
                week: parseIso(match[4], sign),
                day: parseIso(match[5], sign),
                hours: parseIso(match[6], sign),
                minutes: parseIso(match[7], sign),
                seconds: parseIso(match[8], sign)
            };
        }
    }
    if (isObject(input) && ('from' in input || 'to' in input)) {
        var /** @type {?} */ diffRes = momentsDifference(parseDate(input.from), parseDate(input.to));
        return {
            milliseconds: diffRes.milliseconds,
            month: diffRes.months
        };
    }
    return input;
    var _a;
}
/**
 * @param {?} inp
 * @param {?} sign
 * @return {?}
 */
function parseIso(inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var /** @type {?} */ res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function positiveMomentsDifference(base, other) {
    var /** @type {?} */ res = { milliseconds: 0, months: 0 };
    res.months = getMonth(other) - getMonth(base) +
        (getFullYear(other) - getFullYear(base)) * 12;
    var /** @type {?} */ _basePlus = add(cloneDate(base), res.months, 'month');
    if (isAfter(_basePlus, other)) {
        --res.months;
    }
    res.milliseconds = +other - +(add(cloneDate(base), res.months, 'month'));
    return res;
}
/**
 * @param {?} base
 * @param {?} other
 * @return {?}
 */
function momentsDifference(base, other) {
    if (!(isDateValid(base) && isDateValid(other))) {
        return { milliseconds: 0, months: 0 };
    }
    var /** @type {?} */ res;
    var /** @type {?} */ _other = cloneWithOffset(other, base, { _offset: base.getTimezoneOffset() });
    if (isBefore(base, _other)) {
        res = positiveMomentsDifference(base, _other);
    }
    else {
        res = positiveMomentsDifference(_other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }
    return res;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
function add(date, val, period, isUTC) {
    var /** @type {?} */ dur = createDuration(val, period);
    return addSubtract(date, dur, 1, isUTC);
}
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
function subtract(date, val, period, isUTC) {
    var /** @type {?} */ dur = createDuration(val, period);
    return addSubtract(date, dur, -1, isUTC);
}
/**
 * @param {?} date
 * @param {?} duration
 * @param {?} isAdding
 * @param {?=} isUTC
 * @return {?}
 */
function addSubtract(date, duration, isAdding, isUTC) {
    var /** @type {?} */ milliseconds = duration._milliseconds;
    var /** @type {?} */ days = absRound(duration._days);
    var /** @type {?} */ months = absRound(duration._months);
    // todo: add timezones support
    // const _updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
        setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
    }
    if (days) {
        setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
    }
    if (milliseconds) {
        setTime(date, getTime(date) + milliseconds * isAdding);
    }
    return cloneDate(date);
    // todo: add timezones support
    // if (_updateOffset) {
    //   hooks.updateOffset(date, days || months);
    // }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function initDayOfWeek() {
    // FORMATTING
    addFormatToken('d', null, 'do', function (date, opts) {
        return getDay(date, opts.isUTC)
            .toString(10);
    });
    addFormatToken('dd', null, null, function (date, opts) {
        return opts.locale.weekdaysMin(date, opts.format, opts.isUTC);
    });
    addFormatToken('ddd', null, null, function (date, opts) {
        return opts.locale.weekdaysShort(date, opts.format, opts.isUTC);
    });
    addFormatToken('dddd', null, null, function (date, opts) {
        return opts.locale.weekdays(date, opts.format, opts.isUTC);
    });
    addFormatToken('e', null, null, function (date, opts) {
        return getLocaleDayOfWeek(date, opts.locale, opts.isUTC)
            .toString(10);
        // return getDay(date, opts.isUTC).toString(10);
    });
    addFormatToken('E', null, null, function (date, opts) {
        return getISODayOfWeek(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('day', 'd');
    addUnitAlias('weekday', 'e');
    addUnitAlias('isoWeekday', 'E');
    // PARSING
    addRegexToken('d', match1to2);
    addRegexToken('e', match1to2);
    addRegexToken('E', match1to2);
    addRegexToken('dd', function (isStrict, locale) {
        return locale.weekdaysMinRegex(isStrict);
    });
    addRegexToken('ddd', function (isStrict, locale) {
        return locale.weekdaysShortRegex(isStrict);
    });
    addRegexToken('dddd', function (isStrict, locale) {
        return locale.weekdaysRegex(isStrict);
    });
    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
        var /** @type {?} */ weekday = config._locale.weekdaysParse(input, token, config._strict);
        // if we didn't get a weekday name, mark the date as invalid
        if (weekday != null) {
            week["d"] = weekday;
        }
        else {
            getParsingFlags(config).invalidWeekday = !!input;
        }
        return config;
    });
    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
        week[token] = toInt(input);
        return config;
    });
}
/**
 * @param {?} input
 * @param {?} locale
 * @return {?}
 */
function parseWeekday(input, locale) {
    if (!isString(input)) {
        return input;
    }
    var /** @type {?} */ _num = parseInt(input, 10);
    if (!isNaN(_num)) {
        return _num;
    }
    var /** @type {?} */ _weekDay = locale.weekdaysParse(input);
    if (isNumber(_weekDay)) {
        return _weekDay;
    }
    return null;
}
/**
 * @param {?} input
 * @param {?=} locale
 * @return {?}
 */
function parseIsoWeekday(input, locale) {
    if (locale === void 0) { locale = getLocale(); }
    if (isString(input)) {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNumber(input) && isNaN(input) ? null : input;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function setDayOfWeek(date, input, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    var /** @type {?} */ day = getDay(date, isUTC);
    var /** @type {?} */ _input = parseWeekday(input, locale);
    return add(date, _input - day, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getDayOfWeek(date, isUTC) {
    return getDay(date, isUTC);
}
/**
 * ****************************************
 * @param {?} date
 * @param {?=} locale
 * @param {?=} isUTC
 * @return {?}
 */
function getLocaleDayOfWeek(date, locale, isUTC) {
    if (locale === void 0) { locale = getLocale(); }
    return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
function setLocaleDayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    var /** @type {?} */ weekday = getLocaleDayOfWeek(date, opts.locale, opts.isUTC);
    return add(date, input - weekday, 'day');
}
/**
 * @param {?} date
 * @param {?=} isUTC
 * @return {?}
 */
function getISODayOfWeek(date, isUTC) {
    return getDay(date, isUTC) || 7;
}
/**
 * @param {?} date
 * @param {?} input
 * @param {?=} opts
 * @return {?}
 */
function setISODayOfWeek(date, input, opts) {
    if (opts === void 0) { opts = {}; }
    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.
    var /** @type {?} */ weekday = parseIsoWeekday(input, opts.locale);
    return setDayOfWeek(date, getDayOfWeek(date) % 7 ? weekday : weekday - 7);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
var /** @type {?} */ symbolMap = {
    1: '١',
    2: '٢',
    3: '٣',
    4: '٤',
    5: '٥',
    6: '٦',
    7: '٧',
    8: '٨',
    9: '٩',
    0: '٠'
};
var /** @type {?} */ numberMap = {
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
    '٠': '0'
};
var /** @type {?} */ pluralForm = function (num) {
    return num === 0 ? 0 : num === 1 ? 1 : num === 2 ? 2 : num % 100 >= 3 && num % 100 <= 10 ? 3 : num % 100 >= 11 ? 4 : 5;
};
var /** @type {?} */ plurals = {
    s: ['أقل من ثانية', 'ثانية واحدة', ['ثانيتان', 'ثانيتين'], '%d ثوان', '%d ثانية', '%d ثانية'],
    m: ['أقل من دقيقة', 'دقيقة واحدة', ['دقيقتان', 'دقيقتين'], '%d دقائق', '%d دقيقة', '%d دقيقة'],
    h: ['أقل من ساعة', 'ساعة واحدة', ['ساعتان', 'ساعتين'], '%d ساعات', '%d ساعة', '%d ساعة'],
    d: ['أقل من يوم', 'يوم واحد', ['يومان', 'يومين'], '%d أيام', '%d يومًا', '%d يوم'],
    M: ['أقل من شهر', 'شهر واحد', ['شهران', 'شهرين'], '%d أشهر', '%d شهرا', '%d شهر'],
    y: ['أقل من عام', 'عام واحد', ['عامان', 'عامين'], '%d أعوام', '%d عامًا', '%d عام']
};
var /** @type {?} */ pluralize = function (u) {
    return function (num, withoutSuffix) {
        var /** @type {?} */ f = pluralForm(num);
        var /** @type {?} */ str = plurals[u][pluralForm(num)];
        if (f === 2) {
            str = str[withoutSuffix ? 0 : 1];
        }
        return (/** @type {?} */ (str)).replace(/%d/i, num.toString());
    };
};
var /** @type {?} */ months = [
    'يناير',
    'فبراير',
    'مارس',
    'أبريل',
    'مايو',
    'يونيو',
    'يوليو',
    'أغسطس',
    'سبتمبر',
    'أكتوبر',
    'نوفمبر',
    'ديسمبر'
];
var /** @type {?} */ arLocale = {
    abbr: 'ar',
    months: months,
    monthsShort: months,
    weekdays: 'الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت'.split('_'),
    weekdaysShort: 'أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت'.split('_'),
    weekdaysMin: 'ح_ن_ث_ر_خ_ج_س'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'D/\u200FM/\u200FYYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    meridiemParse: /ص|م/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return 'م' === input;
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ص';
        }
        else {
            return 'م';
        }
    },
    calendar: {
        sameDay: '[اليوم عند الساعة] LT',
        nextDay: '[غدًا عند الساعة] LT',
        nextWeek: 'dddd [عند الساعة] LT',
        lastDay: '[أمس عند الساعة] LT',
        lastWeek: 'dddd [عند الساعة] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'بعد %s',
        past: 'منذ %s',
        s: pluralize('s'),
        ss: pluralize('s'),
        m: pluralize('m'),
        mm: pluralize('m'),
        h: pluralize('h'),
        hh: pluralize('h'),
        d: pluralize('d'),
        dd: pluralize('d'),
        M: pluralize('M'),
        MM: pluralize('M'),
        y: pluralize('y'),
        yy: pluralize('y')
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
            return numberMap[match];
        }).replace(/،/g, ',');
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap[match];
        }).replace(/,/g, '،');
    },
    week: {
        dow: 6,
        // Saturday is the first day of the week.
        doy: 12 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Bulgarian [bg]
//! author : Iskren Ivov Chernev : https://github.com/ichernev
//! author : Kunal Marwaha : https://github.com/marwahaha
//! author : Matt Grande : https://github.com/mattgrande
//! author : Isaac Cambron : https://github.com/icambron
//! author : Venelin Manchev : https://github.com/vmanchev
var /** @type {?} */ bgLocale = {
    abbr: 'bg',
    months: 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември'.split('_'),
    monthsShort: 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек'.split('_'),
    weekdays: 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота'.split('_'),
    weekdaysShort: 'нед_пон_вто_сря_чет_пет_съб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'D.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[Днес в] LT',
        nextDay: '[Утре в] LT',
        nextWeek: 'dddd [в] LT',
        lastDay: '[Вчера в] LT',
        lastWeek: function (d) {
            switch (d) {
                case 0:
                case 3:
                case 6:
                    return '[В изминалата] dddd [в] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[В изминалия] dddd [в] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'след %s',
        past: 'преди %s',
        s: 'няколко секунди',
        ss: '%d секунди',
        m: 'минута',
        mm: '%d минути',
        h: 'час',
        hh: '%d часа',
        d: 'ден',
        dd: '%d дни',
        M: 'месец',
        MM: '%d месеца',
        y: 'година',
        yy: '%d години'
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
    ordinal: function (_num) {
        var /** @type {?} */ number = Number(_num);
        var /** @type {?} */ lastDigit = number % 10, /** @type {?} */
        last2Digits = number % 100;
        if (number === 0) {
            return number + '-ев';
        }
        else if (last2Digits === 0) {
            return number + '-ен';
        }
        else if (last2Digits > 10 && last2Digits < 20) {
            return number + '-ти';
        }
        else if (lastDigit === 1) {
            return number + '-ви';
        }
        else if (lastDigit === 2) {
            return number + '-ри';
        }
        else if (lastDigit === 7 || lastDigit === 8) {
            return number + '-ми';
        }
        else {
            return number + '-ти';
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Catalan [ca]
//! author : Xavier Arbat : https://github.com/XavisaurusRex
var /** @type {?} */ monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_'), /** @type {?} */
monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
var /** @type {?} */ monthsParse = [/^gen/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^oct/i, /^nov/i, /^des/i];
var /** @type {?} */ monthsRegex = /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre|gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i;
var /** @type {?} */ caLocale = {
    abbr: 'ca',
    months: 'gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort[getMonth(date, isUTC)];
        }
        return monthsShortDot[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex,
    monthsShortRegex: monthsRegex,
    monthsStrictRegex: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i,
    monthsShortStrictRegex: /^(gen\.?|feb\.?|mar\.?|abr\.?|mai\.?|jun\.?|jul\.?|ago\.?|set\.?|oct\.?|nov\.?|des\.?)/i,
    monthsParse: monthsParse,
    longMonthsParse: monthsParse,
    shortMonthsParse: monthsParse,
    weekdays: 'diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte'.split('_'),
    weekdaysShort: 'diu._dil._dim._dix._dij._div._dis.'.split('_'),
    weekdaysMin: 'dg_dl_dt_dc_dj_dv_ds'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[avui a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[dema a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ahir a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [' + ('passada la ' + (getHours(date) !== 1) ? 'passades les' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fa %s',
        s: 'uns segons',
        ss: '%d segons',
        m: 'un minut',
        mm: '%d minuts',
        h: 'una hora',
        hh: '%d hores',
        d: 'un dia',
        dd: '%d dies',
        M: 'un mes',
        MM: '%d mesos',
        y: 'un any',
        yy: '%d anys'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|on|er|rt|é)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        var /** @type {?} */ output = (num > 4) ? 'é' :
            (num === 1 || num === 3) ? 'r' :
                (num === 2) ? 'n' :
                    (num === 4) ? 't' : 'é';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
var /** @type {?} */ months$1 = 'leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec'.split('_');
var /** @type {?} */ monthsShort$1 = 'led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = num + ' ';
    switch (key) {
        case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekund' : 'pár sekundami';
        case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'sekundy' : 'sekund');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minuta' : (isFuture ? 'minutu' : 'minutou');
        case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'minuty' : 'minut');
            }
            else {
                return result + 'minutami';
            }
        // break;
        case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'hodiny' : 'hodin');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd':
            // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'den' : 'dnem';
        case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'dny' : 'dní');
            }
            else {
                return result + 'dny';
            }
        // break;
        case 'M':
            // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'měsíc' : 'měsícem';
        case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'měsíce' : 'měsíců');
            }
            else {
                return result + 'měsíci';
            }
        // break;
        case 'y':
            // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokem';
        case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural(num) ? 'roky' : 'let');
            }
            else {
                return result + 'lety';
            }
    }
}
var /** @type {?} */ csLocale = {
    abbr: 'cs',
    months: months$1,
    monthsShort: monthsShort$1,
    monthsParse: (function (months, monthsShort) {
        var /** @type {?} */ i, /** @type {?} */ _monthsParse = [];
        for (i = 0; i < 12; i++) {
            // use custom parser to solve problem with July (červenec)
            _monthsParse[i] = new RegExp('^' + months[i] + '$|^' + monthsShort[i] + '$', 'i');
        }
        return _monthsParse;
    }(months$1, monthsShort$1)),
    shortMonthsParse: (function (monthsShort) {
        var /** @type {?} */ i, /** @type {?} */ _shortMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _shortMonthsParse[i] = new RegExp('^' + monthsShort[i] + '$', 'i');
        }
        return _shortMonthsParse;
    }(monthsShort$1)),
    longMonthsParse: (function (months) {
        var /** @type {?} */ i, /** @type {?} */ _longMonthsParse = [];
        for (i = 0; i < 12; i++) {
            _longMonthsParse[i] = new RegExp('^' + months[i] + '$', 'i');
        }
        return _longMonthsParse;
    }(months$1)),
    weekdays: 'neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota'.split('_'),
    weekdaysShort: 'ne_po_út_st_čt_pá_so'.split('_'),
    weekdaysMin: 'ne_po_út_st_čt_pá_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes v] LT',
        nextDay: '[zítra v] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v neděli v] LT';
                case 1:
                case 2:
                    return '[v] dddd [v] LT';
                case 3:
                    return '[ve středu v] LT';
                case 4:
                    return '[ve čtvrtek v] LT';
                case 5:
                    return '[v pátek v] LT';
                case 6:
                    return '[v sobotu v] LT';
            }
        },
        lastDay: '[včera v] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulou neděli v] LT';
                case 1:
                case 2:
                    return '[minulé] dddd [v] LT';
                case 3:
                    return '[minulou středu v] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [v] LT';
                case 6:
                    return '[minulou sobotu v] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: 'před %s',
        s: translate,
        ss: translate,
        m: translate,
        mm: translate,
        h: translate,
        hh: translate,
        d: translate,
        dd: translate,
        M: translate,
        MM: translate,
        y: translate,
        yy: translate
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format
//! moment.js locale configuration
//! locale : Danish (Denmark) [da]
//! author : Per Hansen : https://github.com/perhp
var /** @type {?} */ daLocale = {
    abbr: 'da',
    months: 'Januar_Februar_Marts_April_Maj_Juni_Juli_August_September_Oktober_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Maj_Jun_Jul_Aug_Sep_Okt_Nov_Dec'.split('_'),
    weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'),
    weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'),
    weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'på dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[i] dddd[s kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'få sekunder',
        m: 'et minut',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dage',
        M: 'en måned',
        MM: '%d måneder',
        y: 'et år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-key-quotes
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ format = {
        'm': ['eine Minute', 'einer Minute'],
        'h': ['eine Stunde', 'einer Stunde'],
        'd': ['ein Tag', 'einem Tag'],
        'dd': [num + ' Tage', num + ' Tagen'],
        'M': ['ein Monat', 'einem Monat'],
        'MM': [num + ' Monate', num + ' Monaten'],
        'y': ['ein Jahr', 'einem Jahr'],
        'yy': [num + ' Jahre', num + ' Jahren']
    };
    return withoutSuffix ? format[key][0] : format[key][1];
}
var /** @type {?} */ deLocale = {
    abbr: 'de',
    months: 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split('_'),
    monthsShort: 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.'.split('_'),
    monthsParseExact: true,
    weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split('_'),
    weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
    weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY HH:mm',
        LLLL: 'dddd, D. MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[heute um] LT [Uhr]',
        sameElse: 'L',
        nextDay: '[morgen um] LT [Uhr]',
        nextWeek: 'dddd [um] LT [Uhr]',
        lastDay: '[gestern um] LT [Uhr]',
        lastWeek: '[letzten] dddd [um] LT [Uhr]'
    },
    relativeTime: {
        future: 'in %s',
        past: 'vor %s',
        s: 'ein paar Sekunden',
        ss: '%d Sekunden',
        m: processRelativeTime,
        mm: '%d Minuten',
        h: processRelativeTime,
        hh: '%d Stunden',
        d: processRelativeTime,
        dd: processRelativeTime,
        M: processRelativeTime,
        MM: processRelativeTime,
        y: processRelativeTime,
        yy: processRelativeTime
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : English (United Kingdom) [en-gb]
//! author : Chris Gedrim : https://github.com/chrisgedrim
var /** @type {?} */ enGbLocale = {
    abbr: 'en-gb',
    months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
    weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
    weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
    weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Today at] LT',
        nextDay: '[Tomorrow at] LT',
        nextWeek: 'dddd [at] LT',
        lastDay: '[Yesterday at] LT',
        lastWeek: '[Last] dddd [at] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: 'a few seconds',
        ss: '%d seconds',
        m: 'a minute',
        mm: '%d minutes',
        h: 'an hour',
        hh: '%d hours',
        d: 'a day',
        dd: '%d days',
        M: 'a month',
        MM: '%d months',
        y: 'a year',
        yy: '%d years'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        var /** @type {?} */ b = num % 10, /** @type {?} */
        output = (~~(num % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                    (b === 3) ? 'rd' : 'th';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish (Dominican Republic) [es-do]
var /** @type {?} */ monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */
monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var /** @type {?} */ monthsParse$1 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var /** @type {?} */ monthsRegex$1 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var /** @type {?} */ esDoLocale = {
    abbr: 'es-do',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$1;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort$2[getMonth(date, isUTC)];
        }
        else {
            return monthsShortDot$1[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$1,
    monthsShortRegex: monthsRegex$1,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse$1,
    longMonthsParse: monthsParse$1,
    shortMonthsParse: monthsParse$1,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY h:mm A',
        LLLL: 'dddd, D [de] MMMM [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish [es]
//! author : Julio Napurí : https://github.com/julionc
var /** @type {?} */ monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */
monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var /** @type {?} */ monthsParse$2 = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i];
var /** @type {?} */ monthsRegex$2 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
var /** @type {?} */ esLocale = {
    abbr: 'es',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$2;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort$3[getMonth(date, isUTC)];
        }
        return monthsShortDot$2[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex$2,
    monthsShortRegex: monthsRegex$2,
    monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
    monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
    monthsParse: monthsParse$2,
    longMonthsParse: monthsParse$2,
    shortMonthsParse: monthsParse$2,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Spanish (United States) [es-us]
//! author : bustta : https://github.com/bustta
var /** @type {?} */ monthsShortDot$3 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_');
var /** @type {?} */ monthsShort$4 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
var /** @type {?} */ esUsLocale = {
    abbr: 'es-us',
    months: 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$3;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShort$4[getMonth(date, isUTC)];
        }
        else {
            return monthsShortDot$3[getMonth(date, isUTC)];
        }
    },
    monthsParseExact: true,
    weekdays: 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mi_ju_vi_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM [de] D [de] YYYY',
        LLL: 'MMMM [de] D [de] YYYY h:mm A',
        LLLL: 'dddd, MMMM [de] D [de] YYYY h:mm A'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[el] dddd [pasado a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'hace %s',
        s: 'unos segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'una hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un año',
        yy: '%d años'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
// https://github.com/moment/moment/blob/develop/locale/fi.js
var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */
numbersFuture = [
    'nolla', 'yhden', 'kahden', 'kolmen', 'neljän', 'viiden', 'kuuden',
    numbersPast[7], numbersPast[8], numbersPast[9]
];
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$1(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = '';
    switch (key) {
        case 's':
            return isFuture ? 'muutaman sekunnin' : 'muutama sekunti';
        case 'ss':
            return isFuture ? 'sekunnin' : 'sekuntia';
        case 'm':
            return isFuture ? 'minuutin' : 'minuutti';
        case 'mm':
            result = isFuture ? 'minuutin' : 'minuuttia';
            break;
        case 'h':
            return isFuture ? 'tunnin' : 'tunti';
        case 'hh':
            result = isFuture ? 'tunnin' : 'tuntia';
            break;
        case 'd':
            return isFuture ? 'päivän' : 'päivä';
        case 'dd':
            result = isFuture ? 'päivän' : 'päivää';
            break;
        case 'M':
            return isFuture ? 'kuukauden' : 'kuukausi';
        case 'MM':
            result = isFuture ? 'kuukauden' : 'kuukautta';
            break;
        case 'y':
            return isFuture ? 'vuoden' : 'vuosi';
        case 'yy':
            result = isFuture ? 'vuoden' : 'vuotta';
            break;
    }
    result = verbalNumber(num, isFuture) + ' ' + result;
    return result;
}
/**
 * @param {?} num
 * @param {?} isFuture
 * @return {?}
 */
function verbalNumber(num, isFuture) {
    return num < 10 ? (isFuture ? numbersFuture[num] : numbersPast[num]) : num;
}
var /** @type {?} */ fiLocale = {
    abbr: 'fi',
    months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split('_'),
    monthsShort: 'tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu'.split('_'),
    weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split('_'),
    weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
    weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD.MM.YYYY',
        LL: 'Do MMMM[ta] YYYY',
        LLL: 'Do MMMM[ta] YYYY, [klo] HH.mm',
        LLLL: 'dddd, Do MMMM[ta] YYYY, [klo] HH.mm',
        l: 'D.M.YYYY',
        ll: 'Do MMM YYYY',
        lll: 'Do MMM YYYY, [klo] HH.mm',
        llll: 'ddd, Do MMM YYYY, [klo] HH.mm'
    },
    calendar: {
        sameDay: '[tänään] [klo] LT',
        nextDay: '[huomenna] [klo] LT',
        nextWeek: 'dddd [klo] LT',
        lastDay: '[eilen] [klo] LT',
        lastWeek: '[viime] dddd[na] [klo] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s päästä',
        past: '%s sitten',
        s: translate$1,
        ss: translate$1,
        m: translate$1,
        mm: translate$1,
        h: translate$1,
        hh: translate$1,
        d: translate$1,
        dd: translate$1,
        M: translate$1,
        MM: translate$1,
        y: translate$1,
        yy: translate$1
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : French [fr]
//! author : John Fischer : https://github.com/jfroffice
var /** @type {?} */ frLocale = {
    abbr: 'fr',
    months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
    monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
    monthsParseExact: true,
    weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
    weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
    weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Aujourd’hui à] LT',
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dans %s',
        past: 'il y a %s',
        s: 'quelques secondes',
        ss: '%d secondes',
        m: 'une minute',
        mm: '%d minutes',
        h: 'une heure',
        hh: '%d heures',
        d: 'un jour',
        dd: '%d jours',
        M: 'un mois',
        MM: '%d mois',
        y: 'un an',
        yy: '%d ans'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        var /** @type {?} */ num = Number(_num);
        switch (period) {
            // TODO: Return 'e' when day of month > 1. Move this case inside
            // block for masculine words below.
            // See https://github.com/moment/moment/issues/3375
            case 'D':
                return num + (num === 1 ? 'er' : '');
            // Words with masculine grammatical gender: mois, trimestre, jour
            default:
            case 'M':
            case 'Q':
            case 'DDD':
            case 'd':
                return num + (num === 1 ? 'er' : 'e');
            // Words with feminine grammatical gender: semaine
            case 'w':
            case 'W':
                return num + (num === 1 ? 're' : 'e');
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Galician [gl]
//! author : Darío Beiró : https://github.com/quinobravo
var /** @type {?} */ monthsShortDot$4 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */
monthsShort$5 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
var /** @type {?} */ monthsParse$3 = [/^xan/i, /^feb/i, /^mar/i, /^abr/i, /^mai/i, /^xuñ/i, /^xul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dec/i];
var /** @type {?} */ monthsRegex$3 = /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro|xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i;
var /** @type {?} */ glLocale = {
    abbr: 'gl',
    months: 'xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortDot$4;
        }
        if (/-MMM-/.test(format)) {
            return monthsShort$5[getMonth(date, isUTC)];
        }
        return monthsShortDot$4[getMonth(date, isUTC)];
    },
    monthsRegex: monthsRegex$3,
    monthsShortRegex: monthsRegex$3,
    monthsStrictRegex: /^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i,
    monthsShortStrictRegex: /^(xan\.?|feb\.?|mar\.?|abr\.?|mai\.?|xuñ\.?|xul\.?|ago\.?|set\.?|out\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$3,
    longMonthsParse: monthsParse$3,
    shortMonthsParse: monthsParse$3,
    weekdays: 'domingo_luns_martes_mércores_xoves_venres_sábado'.split('_'),
    weekdaysShort: 'dom._lun._mar._mér._xov._ven._sáb.'.split('_'),
    weekdaysMin: 'do_lu_ma_mé_xo_ve_sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY H:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm'
    },
    calendar: {
        sameDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastDay: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return '[o] dddd [pasado á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'en %s',
        past: 'fai %s',
        s: 'uns segundos',
        ss: '%d segundos',
        m: 'un minuto',
        mm: '%d minutos',
        h: 'unha hora',
        hh: '%d horas',
        d: 'un día',
        dd: '%d días',
        M: 'un mes',
        MM: '%d meses',
        y: 'un ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Hebrew [he]
//! author : Tomer Cohen : https://github.com/tomer
//! author : Moshe Simantov : https://github.com/DevelopmentIL
//! author : Tal Ater : https://github.com/TalAter
var /** @type {?} */ heLocale = {
    abbr: 'he',
    months: 'ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר'.split('_'),
    monthsShort: 'ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳'.split('_'),
    weekdays: 'ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת'.split('_'),
    weekdaysShort: 'א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳'.split('_'),
    weekdaysMin: 'א_ב_ג_ד_ה_ו_ש'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [ב]MMMM YYYY',
        LLL: 'D [ב]MMMM YYYY HH:mm',
        LLLL: 'dddd, D [ב]MMMM YYYY HH:mm',
        l: 'D/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[היום ב־]LT',
        nextDay: '[מחר ב־]LT',
        nextWeek: 'dddd [בשעה] LT',
        lastDay: '[אתמול ב־]LT',
        lastWeek: '[ביום] dddd [האחרון בשעה] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'בעוד %s',
        past: 'לפני %s',
        s: 'מספר שניות',
        ss: '%d שניות',
        m: 'דקה',
        mm: '%d דקות',
        h: 'שעה',
        hh: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שעתיים';
            }
            return num + ' שעות';
        },
        d: 'יום',
        dd: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'יומיים';
            }
            return num + ' ימים';
        },
        M: 'חודש',
        MM: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'חודשיים';
            }
            return num + ' חודשים';
        },
        y: 'שנה',
        yy: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            if (num === 2) {
                return 'שנתיים';
            }
            else if (num % 10 === 0 && num !== 10) {
                return num + ' שנה';
            }
            return num + ' שנים';
        }
    },
    meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 5) {
            return 'לפנות בוקר';
        }
        else if (hour < 10) {
            return 'בבוקר';
        }
        else if (hour < 12) {
            return isLower ? 'לפנה"צ' : 'לפני הצהריים';
        }
        else if (hour < 18) {
            return isLower ? 'אחה"צ' : 'אחרי הצהריים';
        }
        else {
            return 'בערב';
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Hindi [hi]
//! author : Mayank Singhal : https://github.com/mayanksinghal
var /** @type {?} */ symbolMap$1 = {
    1: '१',
    2: '२',
    3: '३',
    4: '४',
    5: '५',
    6: '६',
    7: '७',
    8: '८',
    9: '९',
    0: '०'
}, /** @type {?} */
numberMap$1 = {
    '१': '1',
    '२': '2',
    '३': '3',
    '४': '4',
    '५': '5',
    '६': '6',
    '७': '7',
    '८': '8',
    '९': '9',
    '०': '0'
};
var /** @type {?} */ hiLocale = {
    abbr: 'hi',
    months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर'.split('_'),
    monthsShort: 'जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.'.split('_'),
    monthsParseExact: true,
    weekdays: 'रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार'.split('_'),
    weekdaysShort: 'रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि'.split('_'),
    weekdaysMin: 'र_सो_मं_बु_गु_शु_श'.split('_'),
    longDateFormat: {
        LT: 'A h:mm बजे',
        LTS: 'A h:mm:ss बजे',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY, A h:mm बजे',
        LLLL: 'dddd, D MMMM YYYY, A h:mm बजे'
    },
    calendar: {
        sameDay: '[आज] LT',
        nextDay: '[कल] LT',
        nextWeek: 'dddd, LT',
        lastDay: '[कल] LT',
        lastWeek: '[पिछले] dddd, LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s में',
        past: '%s पहले',
        s: 'कुछ ही क्षण',
        ss: '%d सेकंड',
        m: 'एक मिनट',
        mm: '%d मिनट',
        h: 'एक घंटा',
        hh: '%d घंटे',
        d: 'एक दिन',
        dd: '%d दिन',
        M: 'एक महीने',
        MM: '%d महीने',
        y: 'एक वर्ष',
        yy: '%d वर्ष'
    },
    preparse: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/[१२३४५६७८९०]/g, function (match) {
            return numberMap$1[match];
        });
    },
    postformat: /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        return str.replace(/\d/g, function (match) {
            return symbolMap$1[match];
        });
    },
    // Hindi notation for meridiems are quite fuzzy in practice. While there exists
    // a rigid notion of a 'Pahar' it is not used as rigidly in modern Hindi.
    meridiemParse: /रात|सुबह|दोपहर|शाम/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'रात') {
            return hour < 4 ? hour : hour + 12;
        }
        else if (meridiem === 'सुबह') {
            return hour;
        }
        else if (meridiem === 'दोपहर') {
            return hour >= 10 ? hour : hour + 12;
        }
        else if (meridiem === 'शाम') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'रात';
        }
        else if (hour < 10) {
            return 'सुबह';
        }
        else if (hour < 17) {
            return 'दोपहर';
        }
        else if (hour < 20) {
            return 'शाम';
        }
        else {
            return 'रात';
        }
    },
    week: {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Hungarian [hu]
//! author : Adam Brunner : https://github.com/adambrunner
var /** @type {?} */ weekEndings = 'vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton'.split(' ');
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$2(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return (isFuture || withoutSuffix) ? 'néhány másodperc' : 'néhány másodperce';
        case 'ss':
            return num + ((isFuture || withoutSuffix) ? ' másodperc' : ' másodperce');
        case 'm':
            return 'egy' + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'mm':
            return num + (isFuture || withoutSuffix ? ' perc' : ' perce');
        case 'h':
            return 'egy' + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'hh':
            return num + (isFuture || withoutSuffix ? ' óra' : ' órája');
        case 'd':
            return 'egy' + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'dd':
            return num + (isFuture || withoutSuffix ? ' nap' : ' napja');
        case 'M':
            return 'egy' + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'MM':
            return num + (isFuture || withoutSuffix ? ' hónap' : ' hónapja');
        case 'y':
            return 'egy' + (isFuture || withoutSuffix ? ' év' : ' éve');
        case 'yy':
            return num + (isFuture || withoutSuffix ? ' év' : ' éve');
    }
    return '';
}
/**
 * @param {?} date
 * @param {?} isFuture
 * @return {?}
 */
function week(date, isFuture) {
    return (isFuture ? '' : '[múlt] ') + '[' + weekEndings[getDayOfWeek(date)] + '] LT[-kor]';
}
var /** @type {?} */ huLocale = {
    abbr: 'hu',
    months: 'január_február_március_április_május_június_július_augusztus_szeptember_október_november_december'.split('_'),
    monthsShort: 'jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec'.split('_'),
    weekdays: 'vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat'.split('_'),
    weekdaysShort: 'vas_hét_kedd_sze_csüt_pén_szo'.split('_'),
    weekdaysMin: 'v_h_k_sze_cs_p_szo'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'YYYY.MM.DD.',
        LL: 'YYYY. MMMM D.',
        LLL: 'YYYY. MMMM D. H:mm',
        LLLL: 'YYYY. MMMM D., dddd H:mm'
    },
    meridiemParse: /de|du/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input.charAt(1).toLowerCase() === 'u';
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 12) {
            return isLower === true ? 'de' : 'DE';
        }
        else {
            return isLower === true ? 'du' : 'DU';
        }
    },
    calendar: {
        sameDay: '[ma] LT[-kor]',
        nextDay: '[holnap] LT[-kor]',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, true);
        },
        lastDay: '[tegnap] LT[-kor]',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return week(date, false);
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s múlva',
        past: '%s',
        s: translate$2,
        ss: translate$2,
        m: translate$2,
        mm: translate$2,
        h: translate$2,
        hh: translate$2,
        d: translate$2,
        dd: translate$2,
        M: translate$2,
        MM: translate$2,
        y: translate$2,
        yy: translate$2
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Indonesia [id]
//! author : Romy Kusuma : https://github.com/rkusuma
//! reference: https://github.com/moment/moment/blob/develop/locale/id.js
var /** @type {?} */ idLocale = {
    abbr: 'id',
    months: 'Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember'.split('_'),
    monthsShort: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des'.split('_'),
    weekdays: 'Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu'.split('_'),
    weekdaysShort: 'Min_Sen_Sel_Rab_Kam_Jum_Sab'.split('_'),
    weekdaysMin: 'Mg_Sn_Sl_Rb_Km_Jm_Sb'.split('_'),
    longDateFormat: {
        LT: 'HH.mm',
        LTS: 'HH.mm.ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [pukul] HH.mm',
        LLLL: 'dddd, D MMMM YYYY [pukul] HH.mm'
    },
    meridiemParse: /pagi|siang|sore|malam/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === 'pagi') {
            return hour;
        }
        else if (meridiem === 'siang') {
            return hour >= 11 ? hour : hour + 12;
        }
        else if (meridiem === 'sore' || meridiem === 'malam') {
            return hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hours
     * @param {?} minutes
     * @param {?} isLower
     * @return {?}
     */
    function (hours, minutes, isLower) {
        if (hours < 11) {
            return 'pagi';
        }
        else if (hours < 15) {
            return 'siang';
        }
        else if (hours < 19) {
            return 'sore';
        }
        else {
            return 'malam';
        }
    },
    calendar: {
        sameDay: '[Hari ini pukul] LT',
        nextDay: '[Besok pukul] LT',
        nextWeek: 'dddd [pukul] LT',
        lastDay: '[Kemarin pukul] LT',
        lastWeek: 'dddd [lalu pukul] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'dalam %s',
        past: '%s yang lalu',
        s: 'beberapa detik',
        ss: '%d detik',
        m: 'semenit',
        mm: '%d menit',
        h: 'sejam',
        hh: '%d jam',
        d: 'sehari',
        dd: '%d hari',
        M: 'sebulan',
        MM: '%d bulan',
        y: 'setahun',
        yy: '%d tahun'
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Italian [it]
//! author : Lorenzo : https://github.com/aliem
//! author: Mattia Larentis: https://github.com/nostalgiaz
var /** @type {?} */ itLocale = {
    abbr: 'it',
    months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
    monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split('_'),
    weekdays: 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
    weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
    weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Oggi alle] LT',
        nextDay: '[Domani alle] LT',
        nextWeek: 'dddd [alle] LT',
        lastDay: '[Ieri alle] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[la scorsa] dddd [alle] LT';
                default:
                    return '[lo scorso] dddd [alle] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            return ((/^[0-9].+$/).test(num.toString(10)) ? 'tra' : 'in') + ' ' + num;
        },
        past: '%s fa',
        s: 'alcuni secondi',
        ss: '%d secondi',
        m: 'un minuto',
        mm: '%d minuti',
        h: 'un\'ora',
        hh: '%d ore',
        d: 'un giorno',
        dd: '%d giorni',
        M: 'un mese',
        MM: '%d mesi',
        y: 'un anno',
        yy: '%d anni'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Japanese [ja]
//! author : LI Long : https://github.com/baryon
var /** @type {?} */ jaLocale = {
    abbr: 'ja',
    months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日'.split('_'),
    weekdaysShort: '日_月_火_水_木_金_土'.split('_'),
    weekdaysMin: '日_月_火_水_木_金_土'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日 HH:mm',
        LLLL: 'YYYY年M月D日 HH:mm dddd',
        l: 'YYYY/MM/DD',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日 HH:mm dddd'
    },
    meridiemParse: /午前|午後/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === '午後';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return '午前';
        }
        else {
            return '午後';
        }
    },
    calendar: {
        sameDay: '[今日] LT',
        nextDay: '[明日] LT',
        nextWeek: '[来週]dddd LT',
        lastDay: '[昨日] LT',
        lastWeek: '[前週]dddd LT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}日/,
    ordinal: /**
     * @param {?} num
     * @param {?} period
     * @return {?}
     */
    function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            default:
                return num.toString(10);
        }
    },
    relativeTime: {
        future: '%s後',
        past: '%s前',
        s: '数秒',
        ss: '%d秒',
        m: '1分',
        mm: '%d分',
        h: '1時間',
        hh: '%d時間',
        d: '1日',
        dd: '%d日',
        M: '1ヶ月',
        MM: '%dヶ月',
        y: '1年',
        yy: '%d年'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
//! moment.js locale configuration
//! locale : Korean [ko]
//! author : Kyungwook, Park : https://github.com/kyungw00k
//! author : Jeeeyul Lee <jeeeyul@gmail.com>
var /** @type {?} */ koLocale = {
    abbr: 'ko',
    months: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    monthsShort: '1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월'.split('_'),
    weekdays: '일요일_월요일_화요일_수요일_목요일_금요일_토요일'.split('_'),
    weekdaysShort: '일_월_화_수_목_금_토'.split('_'),
    weekdaysMin: '일_월_화_수_목_금_토'.split('_'),
    longDateFormat: {
        LT: 'A h:mm',
        LTS: 'A h:mm:ss',
        L: 'YYYY.MM.DD',
        LL: 'YYYY년 MMMM D일',
        LLL: 'YYYY년 MMMM D일 A h:mm',
        LLLL: 'YYYY년 MMMM D일 dddd A h:mm',
        l: 'YYYY.MM.DD',
        ll: 'YYYY년 MMMM D일',
        lll: 'YYYY년 MMMM D일 A h:mm',
        llll: 'YYYY년 MMMM D일 dddd A h:mm'
    },
    calendar: {
        sameDay: '오늘 LT',
        nextDay: '내일 LT',
        nextWeek: 'dddd LT',
        lastDay: '어제 LT',
        lastWeek: '지난주 dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s 후',
        past: '%s 전',
        s: '몇 초',
        ss: '%d초',
        m: '1분',
        mm: '%d분',
        h: '한 시간',
        hh: '%d시간',
        d: '하루',
        dd: '%d일',
        M: '한 달',
        MM: '%d달',
        y: '일 년',
        yy: '%d년'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '일';
            case 'M':
                return num + '월';
            case 'w':
            case 'W':
                return num + '주';
            default:
                return num.toString(10);
        }
    },
    meridiemParse: /오전|오후/,
    isPM: function (token) {
        return token === '오후';
    },
    meridiem: function (hour, minute, isUpper) {
        return hour < 12 ? '오전' : '오후';
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Lithuanian [lt]
//! author : Stanislavas Guk : https://github.com/ixoster
var /** @type {?} */ units = {
    ss: 'sekundė_sekundžių_sekundes',
    m: 'minutė_minutės_minutę',
    mm: 'minutės_minučių_minutes',
    h: 'valanda_valandos_valandą',
    hh: 'valandos_valandų_valandas',
    d: 'diena_dienos_dieną',
    dd: 'dienos_dienų_dienas',
    M: 'mėnuo_mėnesio_mėnesį',
    MM: 'mėnesiai_mėnesių_mėnesius',
    y: 'metai_metų_metus',
    yy: 'metai_metų_metus'
};
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSeconds(num, withoutSuffix, key, isFuture) {
    if (withoutSuffix) {
        return 'kelios sekundės';
    }
    else {
        return isFuture ? 'kelių sekundžių' : 'kelias sekundes';
    }
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translateSingular(num, withoutSuffix, key, isFuture) {
    return withoutSuffix ? forms(key)[0] : (isFuture ? forms(key)[1] : forms(key)[2]);
}
/**
 * @param {?} num
 * @return {?}
 */
function special(num) {
    return num % 10 === 0 || (num > 10 && num < 20);
}
/**
 * @param {?} key
 * @return {?}
 */
function forms(key) {
    return units[key].split('_');
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$3(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = num + ' ';
    if (num === 1) {
        return result + translateSingular(num, withoutSuffix, key[0], isFuture);
    }
    else if (withoutSuffix) {
        return result + (special(num) ? forms(key)[1] : forms(key)[0]);
    }
    else {
        if (isFuture) {
            return result + forms(key)[1];
        }
        else {
            return result + (special(num) ? forms(key)[1] : forms(key)[2]);
        }
    }
}
var /** @type {?} */ ltLocale = {
    abbr: 'lt',
    months: {
        format: 'sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio'.split('_'),
        standalone: 'sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis'.split('_'),
        isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
    },
    monthsShort: 'sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd'.split('_'),
    weekdays: {
        format: 'sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį'.split('_'),
        standalone: 'sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis'.split('_'),
        isFormat: /dddd HH:mm/
    },
    weekdaysShort: 'Sek_Pir_Ant_Tre_Ket_Pen_Šeš'.split('_'),
    weekdaysMin: 'S_P_A_T_K_Pn_Š'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY [m.] MMMM D [d.]',
        LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
        l: 'YYYY-MM-DD',
        ll: 'YYYY [m.] MMMM D [d.]',
        lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
        llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
    },
    calendar: {
        sameDay: '[Šiandien] LT',
        nextDay: '[Rytoj] LT',
        nextWeek: 'dddd LT',
        lastDay: '[Vakar] LT',
        lastWeek: '[Praėjusį] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'po %s',
        past: 'prieš %s',
        s: translateSeconds,
        ss: translate$3,
        m: translateSingular,
        mm: translate$3,
        h: translateSingular,
        hh: translate$3,
        d: translateSingular,
        dd: translate$3,
        M: translateSingular,
        MM: translate$3,
        y: translateSingular,
        yy: translate$3
    },
    dayOfMonthOrdinalParse: /\d{1,2}-oji/,
    ordinal: /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return num + '-oji';
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:object-literal-shorthand
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$4(num, withoutSuffix, key, isFuture) {
    switch (key) {
        case 's':
            return withoutSuffix ? 'хэдхэн секунд' : 'хэдхэн секундын';
        case 'ss':
            return num + (withoutSuffix ? ' секунд' : ' секундын');
        case 'm':
        case 'mm':
            return num + (withoutSuffix ? ' минут' : ' минутын');
        case 'h':
        case 'hh':
            return num + (withoutSuffix ? ' цаг' : ' цагийн');
        case 'd':
        case 'dd':
            return num + (withoutSuffix ? ' өдөр' : ' өдрийн');
        case 'M':
        case 'MM':
            return num + (withoutSuffix ? ' сар' : ' сарын');
        case 'y':
        case 'yy':
            return num + (withoutSuffix ? ' жил' : ' жилийн');
        default:
            return num.toString(10);
    }
}
var /** @type {?} */ mnLocale = {
    abbr: 'mn',
    months: 'Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар'.split('_'),
    monthsShort: '1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар'.split('_'),
    monthsParseExact: true,
    weekdays: 'Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба'.split('_'),
    weekdaysShort: 'Ням_Дав_Мяг_Лха_Пүр_Баа_Бям'.split('_'),
    weekdaysMin: 'Ня_Да_Мя_Лх_Пү_Ба_Бя'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'YYYY оны MMMMын D',
        LLL: 'YYYY оны MMMMын D HH:mm',
        LLLL: 'dddd, YYYY оны MMMMын D HH:mm'
    },
    meridiemParse: /ҮӨ|ҮХ/i,
    isPM: function (input) {
        return input === 'ҮХ';
    },
    meridiem: function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ҮӨ';
        }
        else {
            return 'ҮХ';
        }
    },
    calendar: {
        sameDay: '[Өнөөдөр] LT',
        nextDay: '[Маргааш] LT',
        nextWeek: '[Ирэх] dddd LT',
        lastDay: '[Өчигдөр] LT',
        lastWeek: '[Өнгөрсөн] dddd LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s дараа',
        past: '%s өмнө',
        s: translate$4,
        ss: translate$4,
        m: translate$4,
        mm: translate$4,
        h: translate$4,
        hh: translate$4,
        d: translate$4,
        dd: translate$4,
        M: translate$4,
        MM: translate$4,
        y: translate$4,
        yy: translate$4
    },
    dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
    ordinal: function (num, period) {
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + ' өдөр';
            default:
                return num.toString(10);
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Norwegian Bokmål [nb]
//! authors : Espen Hovlandsdal : https://github.com/rexxars
//!           Sigurd Gartmann : https://github.com/sigurdga
var /** @type {?} */ nbLocale = {
    abbr: 'nb',
    months: 'januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember'.split('_'),
    monthsShort: 'jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.'.split('_'),
    monthsParseExact: true,
    weekdays: 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag'.split('_'),
    weekdaysShort: 'sø._ma._ti._on._to._fr._lø.'.split('_'),
    weekdaysMin: 'sø_ma_ti_on_to_fr_lø'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D. MMMM YYYY [kl.] HH:mm'
    },
    calendar: {
        sameDay: '[i dag kl.] LT',
        nextDay: '[i morgen kl.] LT',
        nextWeek: 'dddd [kl.] LT',
        lastDay: '[i går kl.] LT',
        lastWeek: '[forrige] dddd [kl.] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: '%s siden',
        s: 'noen sekunder',
        ss: '%d sekunder',
        m: 'ett minutt',
        mm: '%d minutter',
        h: 'en time',
        hh: '%d timer',
        d: 'en dag',
        dd: '%d dager',
        M: 'en måned',
        MM: '%d måneder',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Dutch (Belgium) [nl-be]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
var /** @type {?} */ monthsShortWithDots = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_');
var /** @type {?} */ monthsShortWithoutDots = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
var /** @type {?} */ monthsParse$4 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var /** @type {?} */ monthsRegex$4 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var /** @type {?} */ nlBeLocale = {
    abbr: 'nl-be',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$4,
    monthsShortRegex: monthsRegex$4,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$4,
    longMonthsParse: monthsParse$4,
    shortMonthsParse: monthsParse$4,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Dutch [nl]
//! author : Joris Röling : https://github.com/jorisroling
//! author : Jacob Middag : https://github.com/middagj
var /** @type {?} */ monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), /** @type {?} */
monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
var /** @type {?} */ monthsParse$5 = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i];
var /** @type {?} */ monthsRegex$5 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
var /** @type {?} */ nlLocale = {
    abbr: 'nl',
    months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split('_'),
    monthsShort: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsShortWithDots$1;
        }
        else if (/-MMM-/.test(format)) {
            return monthsShortWithoutDots$1[getMonth(date, isUTC)];
        }
        else {
            return monthsShortWithDots$1[getMonth(date, isUTC)];
        }
    },
    monthsRegex: monthsRegex$5,
    monthsShortRegex: monthsRegex$5,
    monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
    monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
    monthsParse: monthsParse$5,
    longMonthsParse: monthsParse$5,
    shortMonthsParse: monthsParse$5,
    weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split('_'),
    weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
    weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD-MM-YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[vandaag om] LT',
        nextDay: '[morgen om] LT',
        nextWeek: 'dddd [om] LT',
        lastDay: '[gisteren om] LT',
        lastWeek: '[afgelopen] dddd [om] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'over %s',
        past: '%s geleden',
        s: 'een paar seconden',
        ss: '%d seconden',
        m: 'één minuut',
        mm: '%d minuten',
        h: 'één uur',
        hh: '%d uur',
        d: 'één dag',
        dd: '%d dagen',
        M: 'één maand',
        MM: '%d maanden',
        y: 'één jaar',
        yy: '%d jaar'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        return num + ((num === 1 || num === 8 || num >= 20) ? 'ste' : 'de');
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Polish [pl]
//! author : Rafal Hirsz : https://github.com/evoL
var /** @type {?} */ monthsNominative = 'styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień'.split('_');
var /** @type {?} */ monthsSubjective = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural$1(num) {
    return (num % 10 < 5) && (num % 10 > 1) && ((~~(num / 10) % 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function translate$5(num, withoutSuffix, key) {
    var /** @type {?} */ result = num + ' ';
    switch (key) {
        case 'ss':
            return result + (plural$1(num) ? 'sekundy' : 'sekund');
        case 'm':
            return withoutSuffix ? 'minuta' : 'minutę';
        case 'mm':
            return result + (plural$1(num) ? 'minuty' : 'minut');
        case 'h':
            return withoutSuffix ? 'godzina' : 'godzinę';
        case 'hh':
            return result + (plural$1(num) ? 'godziny' : 'godzin');
        case 'MM':
            return result + (plural$1(num) ? 'miesiące' : 'miesięcy');
        case 'yy':
            return result + (plural$1(num) ? 'lata' : 'lat');
    }
}
var /** @type {?} */ plLocale = {
    abbr: 'pl',
    months: /**
     * @param {?} date
     * @param {?} format
     * @param {?=} isUTC
     * @return {?}
     */
    function (date, format, isUTC) {
        if (!date) {
            return monthsNominative;
        }
        else if (format === '') {
            // Hack: if format empty we know this is used to generate
            // RegExp by moment. Give then back both valid forms of months
            // in RegExp ready format.
            return '(' + monthsSubjective[getMonth(date, isUTC)] + '|' + monthsNominative[getMonth(date, isUTC)] + ')';
        }
        else if (/D MMMM/.test(format)) {
            return monthsSubjective[getMonth(date, isUTC)];
        }
        else {
            return monthsNominative[getMonth(date, isUTC)];
        }
    },
    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru'.split('_'),
    weekdays: 'niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota'.split('_'),
    weekdaysShort: 'ndz_pon_wt_śr_czw_pt_sob'.split('_'),
    weekdaysMin: 'Nd_Pn_Wt_Śr_Cz_Pt_So'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Dziś o] LT',
        nextDay: '[Jutro o] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W niedzielę o] LT';
                case 2:
                    return '[We wtorek o] LT';
                case 3:
                    return '[W środę o] LT';
                case 5:
                    return '[W piątek o] LT';
                case 6:
                    return '[W sobotę o] LT';
                default:
                    return '[W] dddd [o] LT';
            }
        },
        lastDay: '[Wczoraj o] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[W zeszłą niedzielę o] LT';
                case 3:
                    return '[W zeszłą środę o] LT';
                case 4:
                    return '[W zeszłą czwartek o] LT';
                case 5:
                    return '[W zeszłą piątek o] LT';
                case 6:
                    return '[W zeszłą sobotę o] LT';
                default:
                    return '[W zeszły] dddd [o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'za %s',
        past: '%s temu',
        s: 'kilka sekund',
        ss: translate$5,
        m: translate$5,
        mm: translate$5,
        h: translate$5,
        hh: translate$5,
        d: '1 dzień',
        dd: '%d dni',
        M: 'miesiąc',
        MM: translate$5,
        y: 'rok',
        yy: translate$5
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Portuguese (Brazil) [pt-br]
//! author : Caio Ribeiro Pereira : https://github.com/caio-ribeiro-pereira
var /** @type {?} */ ptBrLocale = {
    abbr: 'pt-br',
    months: 'Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro'.split('_'),
    monthsShort: 'Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez'.split('_'),
    weekdays: 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado'.split('_'),
    weekdaysShort: 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb'.split('_'),
    weekdaysMin: 'Do_2ª_3ª_4ª_5ª_6ª_Sá'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D [de] MMMM [de] YYYY',
        LLL: 'D [de] MMMM [de] YYYY [às] HH:mm',
        LLLL: 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
    },
    calendar: {
        sameDay: '[Hoje às] LT',
        nextDay: '[Amanhã às] LT',
        nextWeek: 'dddd [às] LT',
        lastDay: '[Ontem às] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            return (getDayOfWeek(date) === 0 || getDayOfWeek(date) === 6) ?
                '[Último] dddd [às] LT' : // Saturday + Sunday
                '[Última] dddd [às] LT'; // Monday - Friday
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'em %s',
        past: '%s atrás',
        s: 'poucos segundos',
        ss: '%d segundos',
        m: 'um minuto',
        mm: '%d minutos',
        h: 'uma hora',
        hh: '%d horas',
        d: 'um dia',
        dd: '%d dias',
        M: 'um mês',
        MM: '%d meses',
        y: 'um ano',
        yy: '%d anos'
    },
    dayOfMonthOrdinalParse: /\d{1,2}º/,
    ordinal: '%dº'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural(num, withoutSuffix, key) {
    var /** @type {?} */ format = {
        ss: 'secunde',
        mm: 'minute',
        hh: 'ore',
        dd: 'zile',
        MM: 'luni',
        yy: 'ani'
    };
    var /** @type {?} */ separator = ' ';
    if (num % 100 >= 20 || (num >= 100 && num % 100 === 0)) {
        separator = ' de ';
    }
    return num + separator + format[key];
}
var /** @type {?} */ roLocale = {
    abbr: 'ro',
    months: 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie'.split('_'),
    monthsShort: 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă'.split('_'),
    weekdaysShort: 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm'.split('_'),
    weekdaysMin: 'Du_Lu_Ma_Mi_Jo_Vi_Sâ'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY H:mm',
        LLLL: 'dddd, D MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[azi la] LT',
        nextDay: '[mâine la] LT',
        nextWeek: 'dddd [la] LT',
        lastDay: '[ieri la] LT',
        lastWeek: '[fosta] dddd [la] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'peste %s',
        past: '%s în urmă',
        s: 'câteva secunde',
        ss: relativeTimeWithPlural,
        m: 'un minut',
        mm: relativeTimeWithPlural,
        h: 'o oră',
        hh: relativeTimeWithPlural,
        d: 'o zi',
        dd: relativeTimeWithPlural,
        M: 'o lună',
        MM: relativeTimeWithPlural,
        y: 'un an',
        yy: relativeTimeWithPlural
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} word
 * @param {?} num
 * @return {?}
 */
function plural$2(word, num) {
    var /** @type {?} */ forms = word.split('_');
    return num % 10 === 1 && num % 100 !== 11 ? forms[0] : (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? forms[1] : forms[2]);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @return {?}
 */
function relativeTimeWithPlural$1(num, withoutSuffix, key) {
    var /** @type {?} */ format = {
        ss: withoutSuffix ? 'секунда_секунды_секунд' : 'секунду_секунды_секунд',
        mm: withoutSuffix ? 'минута_минуты_минут' : 'минуту_минуты_минут',
        hh: 'час_часа_часов',
        dd: 'день_дня_дней',
        MM: 'месяц_месяца_месяцев',
        yy: 'год_года_лет'
    };
    if (key === 'm') {
        return withoutSuffix ? 'минута' : 'минуту';
    }
    return num + ' ' + plural$2(format[key], +num);
}
var /** @type {?} */ monthsParse$6 = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
// http://new.gramota.ru/spravka/rules/139-prop : § 103
// Сокращения месяцев: http://new.gramota.ru/spravka/buro/search-answer?s=242637
// CLDR data:          http://www.unicode.org/cldr/charts/28/summary/ru.html#1753
var /** @type {?} */ ruLocale = {
    abbr: 'ru',
    months: {
        format: 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря'.split('_'),
        standalone: 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь'.split('_')
    },
    monthsShort: {
        // по CLDR именно "июл." и "июн.", но какой смысл менять букву на точку ?
        format: 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.'.split('_'),
        standalone: 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.'.split('_')
    },
    weekdays: {
        standalone: 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота'.split('_'),
        format: 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу'.split('_'),
        isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
    },
    weekdaysShort: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'вс_пн_вт_ср_чт_пт_сб'.split('_'),
    monthsParse: monthsParse$6,
    longMonthsParse: monthsParse$6,
    shortMonthsParse: monthsParse$6,
    // полные названия с падежами, по три буквы, для некоторых, по 4 буквы, сокращения с точкой и без точки
    monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // копия предыдущего
    monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
    // полные названия с падежами
    monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
    // Выражение, которое соотвествует только сокращённым формам
    monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY г.',
        LLL: 'D MMMM YYYY г., H:mm',
        LLLL: 'dddd, D MMMM YYYY г., H:mm'
    },
    calendar: {
        sameDay: '[Сегодня в] LT',
        nextDay: '[Завтра в] LT',
        lastDay: '[Вчера в] LT',
        nextWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В следующее] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В следующий] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В следующую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        lastWeek: /**
         * @param {?} date
         * @param {?} now
         * @return {?}
         */
        function (date, now) {
            if (getWeek(now) !== getWeek(date)) {
                switch (getDayOfWeek(date)) {
                    case 0:
                        return '[В прошлое] dddd [в] LT';
                    case 1:
                    case 2:
                    case 4:
                        return '[В прошлый] dddd [в] LT';
                    case 3:
                    case 5:
                    case 6:
                        return '[В прошлую] dddd [в] LT';
                }
            }
            else {
                if (getDayOfWeek(date) === 2) {
                    return '[Во] dddd [в] LT';
                }
                else {
                    return '[В] dddd [в] LT';
                }
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'через %s',
        past: '%s назад',
        s: 'несколько секунд',
        ss: relativeTimeWithPlural$1,
        m: relativeTimeWithPlural$1,
        mm: relativeTimeWithPlural$1,
        h: 'час',
        hh: relativeTimeWithPlural$1,
        d: 'день',
        dd: relativeTimeWithPlural$1,
        M: 'месяц',
        MM: relativeTimeWithPlural$1,
        y: 'год',
        yy: relativeTimeWithPlural$1
    },
    meridiemParse: /ночи|утра|дня|вечера/i,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return /^(дня|вечера)$/.test(input);
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 4) {
            return 'ночи';
        }
        else if (hour < 12) {
            return 'утра';
        }
        else if (hour < 17) {
            return 'дня';
        }
        else {
            return 'вечера';
        }
    },
    dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        var /** @type {?} */ num = Number(_num);
        switch (period) {
            case 'M':
            case 'd':
            case 'DDD':
                return num + '-й';
            case 'D':
                return num + '-го';
            case 'w':
            case 'W':
                return num + '-я';
            default:
                return num.toString(10);
        }
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
//! moment.js locale configuration
//! locale : Slovak [sk]
//! author : Jozef Pažin : https://github.com/atiris
var /** @type {?} */ months$2 = 'január_február_marec_apríl_máj_jún_júl_august_september_október_november_december'.split('_');
var /** @type {?} */ monthsShort$6 = 'jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec'.split('_');
/**
 * @param {?} num
 * @return {?}
 */
function plural$3(num) {
    return (num > 1) && (num < 5) && (~~(num / 10) !== 1);
}
/**
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function translate$6(num, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = num + ' ';
    switch (key) {
        case 's':
            // a few seconds / in a few seconds / a few seconds ago
            return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami';
        case 'ss':
            // 9 seconds / in 9 seconds / 9 seconds ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'sekundy' : 'sekúnd');
            }
            else {
                return result + 'sekundami';
            }
        // break;
        case 'm':
            // a minute / in a minute / a minute ago
            return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou');
        case 'mm':
            // 9 minutes / in 9 minutes / 9 minutes ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'minúty' : 'minút');
            }
            else {
                return result + 'minútami';
            }
        // break;
        case 'h':
            // an hour / in an hour / an hour ago
            return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou');
        case 'hh':
            // 9 hours / in 9 hours / 9 hours ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'hodiny' : 'hodín');
            }
            else {
                return result + 'hodinami';
            }
        // break;
        case 'd':
            // a day / in a day / a day ago
            return (withoutSuffix || isFuture) ? 'deň' : 'dňom';
        case 'dd':
            // 9 days / in 9 days / 9 days ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'dni' : 'dní');
            }
            else {
                return result + 'dňami';
            }
        // break;
        case 'M':
            // a month / in a month / a month ago
            return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom';
        case 'MM':
            // 9 months / in 9 months / 9 months ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'mesiace' : 'mesiacov');
            }
            else {
                return result + 'mesiacmi';
            }
        // break;
        case 'y':
            // a year / in a year / a year ago
            return (withoutSuffix || isFuture) ? 'rok' : 'rokom';
        case 'yy':
            // 9 years / in 9 years / 9 years ago
            if (withoutSuffix || isFuture) {
                return result + (plural$3(num) ? 'roky' : 'rokov');
            }
            else {
                return result + 'rokmi';
            }
    }
}
var /** @type {?} */ skLocale = {
    abbr: 'sk',
    months: months$2,
    monthsShort: monthsShort$6,
    weekdays: 'nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota'.split('_'),
    weekdaysShort: 'ne_po_ut_st_št_pi_so'.split('_'),
    weekdaysMin: 'ne_po_ut_st_št_pi_so'.split('_'),
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd D. MMMM YYYY H:mm',
        l: 'D. M. YYYY'
    },
    calendar: {
        sameDay: '[dnes o] LT',
        nextDay: '[zajtra o] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v nedeľu o] LT';
                case 1:
                case 2:
                    return '[v] dddd [o] LT';
                case 3:
                    return '[v stredu o] LT';
                case 4:
                    return '[vo štvrtok o] LT';
                case 5:
                    return '[v piatok o] LT';
                case 6:
                    return '[v sobotu o] LT';
            }
        },
        lastDay: '[včera o] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[minulú nedeľu o] LT';
                case 1:
                case 2:
                    return '[minulý] dddd [o] LT';
                case 3:
                    return '[minulú stredu o] LT';
                case 4:
                case 5:
                    return '[minulý] dddd [o] LT';
                case 6:
                    return '[minulú sobotu o] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'o %s',
        past: 'pred %s',
        s: translate$6,
        ss: translate$6,
        m: translate$6,
        mm: translate$6,
        h: translate$6,
        hh: translate$6,
        d: translate$6,
        dd: translate$6,
        M: translate$6,
        MM: translate$6,
        y: translate$6,
        yy: translate$6
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} number
 * @param {?} withoutSuffix
 * @param {?} key
 * @param {?} isFuture
 * @return {?}
 */
function processRelativeTime$1(number, withoutSuffix, key, isFuture) {
    var /** @type {?} */ result = number + ' ';
    switch (key) {
        case 's':
            return withoutSuffix || isFuture ? 'nekaj sekund' : 'nekaj sekundami';
        case 'ss':
            if (number === 1) {
                result += withoutSuffix ? 'sekundo' : 'sekundi';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'sekundi' : 'sekundah';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'sekunde' : 'sekundah';
            }
            else {
                result += withoutSuffix || isFuture ? 'sekund' : 'sekund';
            }
            return result;
        case 'm':
            return withoutSuffix ? 'ena minuta' : 'eno minuto';
        case 'mm':
            if (number === 1) {
                result += withoutSuffix ? 'minuta' : 'minuto';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'minuti' : 'minutama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'minute' : 'minutami';
            }
            else {
                result += withoutSuffix || isFuture ? 'minut' : 'minutami';
            }
            return result;
        case 'h':
            return withoutSuffix ? 'ena ura' : 'eno uro';
        case 'hh':
            if (number === 1) {
                result += withoutSuffix ? 'ura' : 'uro';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'uri' : 'urama';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'ure' : 'urami';
            }
            else {
                result += withoutSuffix || isFuture ? 'ur' : 'urami';
            }
            return result;
        case 'd':
            return withoutSuffix || isFuture ? 'en dan' : 'enim dnem';
        case 'dd':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'dan' : 'dnem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevoma';
            }
            else {
                result += withoutSuffix || isFuture ? 'dni' : 'dnevi';
            }
            return result;
        case 'M':
            return withoutSuffix || isFuture ? 'en mesec' : 'enim mesecem';
        case 'MM':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'mesec' : 'mesecem';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'meseca' : 'mesecema';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'mesece' : 'meseci';
            }
            else {
                result += withoutSuffix || isFuture ? 'mesecev' : 'meseci';
            }
            return result;
        case 'y':
            return withoutSuffix || isFuture ? 'eno leto' : 'enim letom';
        case 'yy':
            if (number === 1) {
                result += withoutSuffix || isFuture ? 'leto' : 'letom';
            }
            else if (number === 2) {
                result += withoutSuffix || isFuture ? 'leti' : 'letoma';
            }
            else if (number < 5) {
                result += withoutSuffix || isFuture ? 'leta' : 'leti';
            }
            else {
                result += withoutSuffix || isFuture ? 'let' : 'leti';
            }
            return result;
    }
}
var /** @type {?} */ slLocale = {
    abbr: 'sl',
    months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split('_'),
    monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split('_'),
    monthsParseExact: true,
    weekdays: 'nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota'.split('_'),
    weekdaysShort: 'ned._pon._tor._sre._čet._pet._sob.'.split('_'),
    weekdaysMin: 'ne_po_to_sr_če_pe_so'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D. MMMM YYYY',
        LLL: 'D. MMMM YYYY H:mm',
        LLLL: 'dddd, D. MMMM YYYY H:mm'
    },
    calendar: {
        sameDay: '[danes ob] LT',
        nextDay: '[jutri ob] LT',
        nextWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[v] [nedeljo] [ob] LT';
                case 3:
                    return '[v] [sredo] [ob] LT';
                case 6:
                    return '[v] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[v] dddd [ob] LT';
            }
        },
        lastDay: '[včeraj ob] LT',
        lastWeek: /**
         * @param {?} date
         * @return {?}
         */
        function (date) {
            switch (getDayOfWeek(date)) {
                case 0:
                    return '[prejšnjo] [nedeljo] [ob] LT';
                case 3:
                    return '[prejšnjo] [sredo] [ob] LT';
                case 6:
                    return '[prejšnjo] [soboto] [ob] LT';
                case 1:
                case 2:
                case 4:
                case 5:
                    return '[prejšnji] dddd [ob] LT';
            }
        },
        sameElse: 'L'
    },
    relativeTime: {
        future: 'čez %s',
        past: 'pred %s',
        s: processRelativeTime$1,
        ss: processRelativeTime$1,
        m: processRelativeTime$1,
        mm: processRelativeTime$1,
        h: processRelativeTime$1,
        hh: processRelativeTime$1,
        d: processRelativeTime$1,
        dd: processRelativeTime$1,
        M: processRelativeTime$1,
        MM: processRelativeTime$1,
        y: processRelativeTime$1,
        yy: processRelativeTime$1
    },
    dayOfMonthOrdinalParse: /\d{1,2}\./,
    ordinal: '%d.',
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Swedish [sv]
//! author : Jens Alm : https://github.com/ulmus
var /** @type {?} */ svLocale = {
    abbr: 'sv',
    months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split('_'),
    monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split('_'),
    weekdays: 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag'.split('_'),
    weekdaysShort: 'sön_mån_tis_ons_tor_fre_lör'.split('_'),
    weekdaysMin: 'sö_må_ti_on_to_fr_lö'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[Idag] LT',
        nextDay: '[Imorgon] LT',
        lastDay: '[Igår] LT',
        nextWeek: '[På] dddd LT',
        lastWeek: '[I] dddd[s] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'om %s',
        past: 'för %s sedan',
        s: 'några sekunder',
        ss: '%d sekunder',
        m: 'en minut',
        mm: '%d minuter',
        h: 'en timme',
        hh: '%d timmar',
        d: 'en dag',
        dd: '%d dagar',
        M: 'en månad',
        MM: '%d månader',
        y: 'ett år',
        yy: '%d år'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        var /** @type {?} */ b = num % 10, /** @type {?} */
        output = (~~(num % 100 / 10) === 1) ? 'e' :
            (b === 1) ? 'a' :
                (b === 2) ? 'a' :
                    (b === 3) ? 'e' : 'e';
        return num + output;
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
var /** @type {?} */ thLocale = {
    abbr: 'th',
    months: 'มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม'.split('_'),
    monthsShort: 'ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.'.split('_'),
    monthsParseExact: true,
    weekdays: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์'.split('_'),
    weekdaysShort: 'อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์'.split('_'),
    // yes, three characters difference
    weekdaysMin: 'อา._จ._อ._พ._พฤ._ศ._ส.'.split('_'),
    weekdaysParseExact: true,
    longDateFormat: {
        LT: 'H:mm',
        LTS: 'H:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY เวลา H:mm',
        LLLL: 'วันddddที่ D MMMM YYYY เวลา H:mm'
    },
    meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
    isPM: /**
     * @param {?} input
     * @return {?}
     */
    function (input) {
        return input === 'หลังเที่ยง';
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        if (hour < 12) {
            return 'ก่อนเที่ยง';
        }
        else {
            return 'หลังเที่ยง';
        }
    },
    calendar: {
        sameDay: '[วันนี้ เวลา] LT',
        nextDay: '[พรุ่งนี้ เวลา] LT',
        nextWeek: 'dddd[หน้า เวลา] LT',
        lastDay: '[เมื่อวานนี้ เวลา] LT',
        lastWeek: '[วัน]dddd[ที่แล้ว เวลา] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: 'อีก %s',
        past: '%sที่แล้ว',
        s: 'ไม่กี่วินาที',
        ss: '%d วินาที',
        m: '1 นาที',
        mm: '%d นาที',
        h: '1 ชั่วโมง',
        hh: '%d ชั่วโมง',
        d: '1 วัน',
        dd: '%d วัน',
        M: '1 เดือน',
        MM: '%d เดือน',
        y: '1 ปี',
        yy: '%d ปี'
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
//! moment.js locale configuration
//! locale : Turkish [tr]
//! authors : Erhan Gundogan : https://github.com/erhangundogan,
//!           Burak Yiğit Kaya: https://github.com/BYK
var /** @type {?} */ suffixes = {
    1: '\'inci',
    5: '\'inci',
    8: '\'inci',
    70: '\'inci',
    80: '\'inci',
    2: '\'nci',
    7: '\'nci',
    20: '\'nci',
    50: '\'nci',
    3: '\'üncü',
    4: '\'üncü',
    100: '\'üncü',
    6: '\'ncı',
    9: '\'uncu',
    10: '\'uncu',
    30: '\'uncu',
    60: '\'ıncı',
    90: '\'ıncı'
};
var /** @type {?} */ trLocale = {
    abbr: 'tr',
    months: 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık'.split('_'),
    monthsShort: 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara'.split('_'),
    weekdays: 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi'.split('_'),
    weekdaysShort: 'Paz_Pts_Sal_Çar_Per_Cum_Cts'.split('_'),
    weekdaysMin: 'Pz_Pt_Sa_Ça_Pe_Cu_Ct'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD.MM.YYYY',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY HH:mm',
        LLLL: 'dddd, D MMMM YYYY HH:mm'
    },
    calendar: {
        sameDay: '[bugün saat] LT',
        nextDay: '[yarın saat] LT',
        nextWeek: '[gelecek] dddd [saat] LT',
        lastDay: '[dün] LT',
        lastWeek: '[geçen] dddd [saat] LT',
        sameElse: 'L'
    },
    relativeTime: {
        future: '%s sonra',
        past: '%s önce',
        s: 'birkaç saniye',
        ss: '%d saniye',
        m: 'bir dakika',
        mm: '%d dakika',
        h: 'bir saat',
        hh: '%d saat',
        d: 'bir gün',
        dd: '%d gün',
        M: 'bir ay',
        MM: '%d ay',
        y: 'bir yıl',
        yy: '%d yıl'
    },
    dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
    ordinal: /**
     * @param {?} _num
     * @return {?}
     */
    function (_num) {
        var /** @type {?} */ num = Number(_num);
        if (num === 0) {
            // special case for zero
            return num + '\'ıncı';
        }
        var /** @type {?} */ a = num % 10, /** @type {?} */
        b = num % 100 - a, /** @type {?} */
        c = num >= 100 ? 100 : null;
        return num + (suffixes[a] || suffixes[b] || suffixes[c]);
    },
    week: {
        dow: 1,
        // Monday is the first day of the week.
        doy: 7 // The week that contains Jan 1st is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:comment-format binary-expression-operand-order max-line-length
// tslint:disable:no-bitwise prefer-template cyclomatic-complexity
// tslint:disable:no-shadowed-variable switch-default prefer-const
// tslint:disable:one-variable-per-declaration newline-before-return
// tslint:disable:no-parameter-reassignment prefer-switch
//! moment.js locale configuration
//! locale : Chinese (China) [zh-cn]
//! author : suupic : https://github.com/suupic
//! author : Zeno Zeng : https://github.com/zenozeng
var /** @type {?} */ zhCnLocale = {
    abbr: 'zh-cn',
    months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),
    monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
    weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
    weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),
    weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
    longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'YYYY/MM/DD',
        LL: 'YYYY年M月D日',
        LLL: 'YYYY年M月D日Ah点mm分',
        LLLL: 'YYYY年M月D日ddddAh点mm分',
        l: 'YYYY/M/D',
        ll: 'YYYY年M月D日',
        lll: 'YYYY年M月D日 HH:mm',
        llll: 'YYYY年M月D日dddd HH:mm'
    },
    meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
    meridiemHour: /**
     * @param {?} hour
     * @param {?} meridiem
     * @return {?}
     */
    function (hour, meridiem) {
        if (hour === 12) {
            hour = 0;
        }
        if (meridiem === '凌晨' || meridiem === '早上' ||
            meridiem === '上午') {
            return hour;
        }
        else if (meridiem === '下午' || meridiem === '晚上') {
            return hour + 12;
        }
        else {
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        }
    },
    meridiem: /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} isLower
     * @return {?}
     */
    function (hour, minute, isLower) {
        var /** @type {?} */ hm = hour * 100 + minute;
        if (hm < 600) {
            return '凌晨';
        }
        else if (hm < 900) {
            return '早上';
        }
        else if (hm < 1130) {
            return '上午';
        }
        else if (hm < 1230) {
            return '中午';
        }
        else if (hm < 1800) {
            return '下午';
        }
        else {
            return '晚上';
        }
    },
    calendar: {
        sameDay: '[今天]LT',
        nextDay: '[明天]LT',
        nextWeek: '[下]ddddLT',
        lastDay: '[昨天]LT',
        lastWeek: '[上]ddddLT',
        sameElse: 'L'
    },
    dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
    ordinal: /**
     * @param {?} _num
     * @param {?} period
     * @return {?}
     */
    function (_num, period) {
        var /** @type {?} */ num = Number(_num);
        switch (period) {
            case 'd':
            case 'D':
            case 'DDD':
                return num + '日';
            case 'M':
                return num + '月';
            case 'w':
            case 'W':
                return num + '周';
            default:
                return num.toString();
        }
    },
    relativeTime: {
        future: '%s内',
        past: '%s前',
        s: '几秒',
        ss: '%d 秒',
        m: '1 分钟',
        mm: '%d 分钟',
        h: '1 小时',
        hh: '%d 小时',
        d: '1 天',
        dd: '%d 天',
        M: '1 个月',
        MM: '%d 个月',
        y: '1 年',
        yy: '%d 年'
    },
    week: {
        // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
        dow: 1,
        // Monday is the first day of the week.
        doy: 4 // The week that contains Jan 4th is the first week of the year.
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { add, subtract, getDay, isFirstDayOfWeek, isSameYear, isSameDay, isSameMonth, getFullYear, getFirstDayOfMonth, getMonth, parseDate, formatDate, listLocales, getLocale, updateLocale, defineLocale, getSetGlobalLocale, isAfter, isBefore, isDisabledDay, isSame, isArray, isDateValid, isDate, shiftDate, setFullDate, endOf, startOf, arLocale, bgLocale, caLocale, csLocale, daLocale, deLocale, enGbLocale, esDoLocale, esLocale, esUsLocale, fiLocale, frLocale, glLocale, heLocale, hiLocale, huLocale, idLocale, itLocale, jaLocale, koLocale, ltLocale, mnLocale, nbLocale, nlBeLocale, nlLocale, plLocale, ptBrLocale, roLocale, ruLocale, skLocale, slLocale, svLocale, thLocale, trLocale, zhCnLocale, createDate as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jaHJvbm9zLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy90eXBlLWNoZWNrcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2FsaWFzZXMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9jb25zdGFudHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy96ZXJvLWZpbGwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9mb3JtYXQvZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2RhdGUtZnJvbS1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzL2RhdGUtZ2V0dGVycy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3BhcnNlL3JlZ2V4LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvcGFyc2UvdG9rZW4udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9wcmlvcml0aWVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLW1vbnRoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL3BhcnNpbmctZmxhZ3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy95ZWFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvbW9udGgudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLXNldHRlcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvY2xvbmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9zdGFydC1lbmQtb2YudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9kYXktb2YteWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9sb2NhbGUvbG9jYWxlLmNsYXNzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2NhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2xvY2FsZS5kZWZhdWx0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzL2NvbXBhcmUtYXJyYXlzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvd2Vlay50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWsteWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3RpbWV6b25lLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvdGltZXN0YW1wLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvc2Vjb25kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvcXVhcnRlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL29mZnNldC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21pbnV0ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21pbGxpc2Vjb25kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvaG91ci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9sb2NhbGVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vdmFsaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9hYnMtY2VpbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2J1YmJsZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2h1bWFuaXplLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vY29uc3RydWN0b3IudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvdmFsaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1zdHJpbmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9mb3JtYXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kZWZhdWx0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLWFycmF5LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2NoZWNrLW92ZXJmbG93LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1zdHJpbmctYW5kLWFycmF5LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tb2JqZWN0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tYW55dGhpbmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvbG9jYWwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9hYnMtcm91bmQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLWNvbXBhcmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9jcmVhdGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9tb21lbnQvYWRkLXN1YnRyYWN0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLXdlZWsudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2FyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9iZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vY2EudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2NzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9kYS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VuLWdiLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lcy1kby50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZXMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VzLXVzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9maS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZnIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2dsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9oZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaGkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2h1LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9pZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2phLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9rby50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbHQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL21uLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9uYi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbmwtYmUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL25sLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9wbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcHQtYnIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3JvLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9ydS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vc2sudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3NsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9zdi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vdGgudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3RyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi96aC1jbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb2QobjogbnVtYmVyLCB4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiAobiAlIHggKyB4KSAlIHg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhYnNGbG9vcihudW06IG51bWJlcik6IG51bWJlciB7XHJcbiAgcmV0dXJuIG51bSA8IDAgPyBNYXRoLmNlaWwobnVtKSB8fCAwIDogTWF0aC5mbG9vcihudW0pO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBhYnNGbG9vciB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhzdHI6IGFueSk6IHN0ciBpcyBzdHJpbmcge1xyXG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRGF0ZSB7XHJcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWU6IGFueSk6IHZhbHVlIGlzIGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGVWYWxpZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGRhdGUgJiYgZGF0ZS5nZXRUaW1lICYmICFpc05hTihkYXRlLmdldFRpbWUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuOiBhbnkpOiBmbiBpcyBGdW5jdGlvbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIGZuIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcclxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheTxUPihpbnB1dD86IGFueSk6IGlucHV0IGlzIFRbXSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHxcclxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSdcclxuICApO1xyXG59XHJcblxyXG4vLyBUT0RPOiByZXR1cm5lZCB0eXBlIHNob3VsZCBiZSBjaGFuZ2VkIHRvIFwiYiBpcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz5cIlxyXG4vLyBhZnRlciB1cGRhdGUgdG8gdHlwZXNjcmlwdCAzLjEuMSAoaXNzdWUgNDcyOClcclxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3A8VD4oYTogVCAvKm9iamVjdCovLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Q8VD4oaW5wdXQ6IGFueSAvKm9iamVjdCovKTogaW5wdXQgaXMgVCB7XHJcbiAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXHJcbiAgLy8gaW5wdXQgIT0gbnVsbFxyXG4gIHJldHVybiAoXHJcbiAgICBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcclxuICAgIHJldHVybiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDApO1xyXG4gIH1cclxuICBsZXQgaztcclxuICBmb3IgKGsgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0OiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvSW50PFQ+KGFyZ3VtZW50Rm9yQ29lcmNpb246IHN0cmluZyB8IG51bWJlciB8IFQpOiBudW1iZXIge1xyXG4gIGNvbnN0IGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbjtcclxuICBsZXQgdmFsdWUgPSAwO1xyXG5cclxuICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xyXG4gICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZU9iamVjdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IGFsaWFzZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuXHJcbmV4cG9ydCB0eXBlIEV4dGVuZGVkVW5pdE9mVGltZSA9IFVuaXRPZlRpbWUgfCAnZGF0ZScgfCAnd2VlaycgfCAnaXNvV2VlaycgfCAnZGF5T2ZZZWFyJyB8XHJcbiAgJ3dlZWtkYXknIHwgJ2lzb1dlZWtkYXknIHwgJ3NlY29uZCcgfCAnbWlsbGlzZWNvbmQnIHwgJ21pbnV0ZScgfCAnaG91cicgfCAncXVhcnRlcicgfCAnd2Vla1llYXInIHwgJ2lzb1dlZWtZZWFyJztcclxuXHJcbmNvbnN0IF9tYXBVbml0czogeyBba2V5OiBzdHJpbmddOiBVbml0T2ZUaW1lIH0gPSB7XHJcbiAgZGF0ZTogJ2RheScsXHJcbiAgaG91cjogJ2hvdXJzJyxcclxuICBtaW51dGU6ICdtaW51dGVzJyxcclxuICBzZWNvbmQ6ICdzZWNvbmRzJyxcclxuICBtaWxsaXNlY29uZDogJ21pbGxpc2Vjb25kcydcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRVbml0QWxpYXModW5pdDogRXh0ZW5kZWRVbml0T2ZUaW1lLCBzaG9ydGhhbmQ6IHN0cmluZyk6IHZvaWQge1xyXG4gIGNvbnN0IGxvd2VyQ2FzZSA9IHVuaXQudG9Mb3dlckNhc2UoKTtcclxuICBsZXQgX3VuaXQgPSB1bml0O1xyXG4gIGlmIChsb3dlckNhc2UgaW4gX21hcFVuaXRzKSB7XHJcbiAgICBfdW5pdCA9IF9tYXBVbml0c1tsb3dlckNhc2VdO1xyXG4gIH1cclxuICBhbGlhc2VzW2xvd2VyQ2FzZV0gPSBhbGlhc2VzW2Ake2xvd2VyQ2FzZX1zYF0gPSBhbGlhc2VzW3Nob3J0aGFuZF0gPSBfdW5pdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVVuaXRzKHVuaXRzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGlzU3RyaW5nKHVuaXRzKSA/IGFsaWFzZXNbdW5pdHNdIHx8IGFsaWFzZXNbdW5pdHMudG9Mb3dlckNhc2UoKV0gOiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dE9iamVjdDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSk6IERhdGVPYmplY3Qge1xyXG4gIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHt9O1xyXG4gIGxldCBub3JtYWxpemVkUHJvcDtcclxuICBsZXQgcHJvcDtcclxuXHJcbiAgZm9yIChwcm9wIGluIGlucHV0T2JqZWN0KSB7XHJcbiAgICBpZiAoaGFzT3duUHJvcChpbnB1dE9iamVjdCwgcHJvcCkpIHtcclxuICAgICAgbm9ybWFsaXplZFByb3AgPSBub3JtYWxpemVVbml0cyhwcm9wKTtcclxuICAgICAgaWYgKG5vcm1hbGl6ZWRQcm9wKSB7XHJcbiAgICAgICAgbm9ybWFsaXplZElucHV0W25vcm1hbGl6ZWRQcm9wXSA9IGlucHV0T2JqZWN0W3Byb3BdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9ybWFsaXplZElucHV0IGFzIGFueTtcclxufVxyXG4iLCIvLyBwbGFjZSBpbiBuZXcgRGF0ZShbYXJyYXldKVxyXG5leHBvcnQgY29uc3QgWUVBUiA9IDA7XHJcbmV4cG9ydCBjb25zdCBNT05USCA9IDE7XHJcbmV4cG9ydCBjb25zdCBEQVRFID0gMjtcclxuZXhwb3J0IGNvbnN0IEhPVVIgPSAzO1xyXG5leHBvcnQgY29uc3QgTUlOVVRFID0gNDtcclxuZXhwb3J0IGNvbnN0IFNFQ09ORCA9IDU7XHJcbmV4cG9ydCBjb25zdCBNSUxMSVNFQ09ORCA9IDY7XHJcbmV4cG9ydCBjb25zdCBXRUVLID0gNztcclxuZXhwb3J0IGNvbnN0IFdFRUtEQVkgPSA4O1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gemVyb0ZpbGwobnVtOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZW5ndGg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2lnbj86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IGFic051bWJlciA9IGAke01hdGguYWJzKG51bSl9YDtcclxuICBjb25zdCB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGg7XHJcbiAgY29uc3Qgc2lnbiA9IG51bSA+PSAwO1xyXG4gIGNvbnN0IF9zaWduID0gc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLSc7XHJcbiAgLy8gdG9kbzogdGhpcyBpcyBjcmF6eSBzbG93XHJcbiAgY29uc3QgX3plcm9zID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSk7XHJcblxyXG4gIHJldHVybiAoX3NpZ24gKyBfemVyb3MgKyBhYnNOdW1iZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XHJcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zLCBEYXRlRm9ybWF0dGVyRm4gfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5leHBvcnQgbGV0IGZvcm1hdEZ1bmN0aW9uczoge1xyXG4gIFtrZXk6IHN0cmluZ106IChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQ/OiBudW1iZXIpID0+IHN0cmluZztcclxufSA9IHt9O1xyXG5leHBvcnQgbGV0IGZvcm1hdFRva2VuRnVuY3Rpb25zOiB7IFtrZXk6IHN0cmluZ106IERhdGVGb3JtYXR0ZXJGbiB9ID0ge307XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuZXhwb3J0IGNvbnN0IGZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oW0hoXW1tKHNzKT98TW98TU0/TT9NP3xEb3xERERvfEREP0Q/RD98ZGRkP2Q/fGRvP3x3W298d10/fFdbb3xXXT98UW8/fFlZWVlZWXxZWVlZWXxZWVlZfFlZfGdnKGdnZz8pP3xHRyhHR0c/KT98ZXxFfGF8QXxoaD98SEg/fGtrP3xtbT98c3M/fFN7MSw5fXx4fFh8eno/fFpaP3wuKS9nO1xyXG5cclxuLy8gdG9rZW46ICAgICdNJ1xyXG4vLyBwYWRkZWQ6ICAgWydNTScsIDJdXHJcbi8vIG9yZGluYWw6ICAnTW8nXHJcbi8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7IHRoaXMubW9udGgoKSArIDEgfVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkRm9ybWF0VG9rZW4odG9rZW46IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRlZDogW3N0cmluZywgbnVtYmVyLCBib29sZWFuXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yZGluYWw6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBEYXRlRm9ybWF0dGVyRm4pOiB2b2lkIHtcclxuXHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0gPSBjYWxsYmFjaztcclxuICB9XHJcblxyXG4gIGlmIChwYWRkZWQpIHtcclxuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3BhZGRlZFswXV0gPSBmdW5jdGlvbiAoKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHplcm9GaWxsKGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHBhZGRlZFsxXSwgcGFkZGVkWzJdKTtcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAob3JkaW5hbCkge1xyXG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbb3JkaW5hbF0gPSBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUub3JkaW5hbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCB0b2tlbik7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQ6IHN0cmluZyk6XHJcbiAgKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldD86IG51bWJlcikgPT4gc3RyaW5nIHtcclxuXHJcbiAgY29uc3QgYXJyYXk6IHN0cmluZ1tdID0gZm9ybWF0Lm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpO1xyXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcclxuXHJcbiAgY29uc3QgZm9ybWF0QXJyOiBzdHJpbmdbXSB8IERhdGVGb3JtYXR0ZXJGbltdID0gbmV3IEFycmF5KGxlbmd0aCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgIGZvcm1hdEFycltpXSA9IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXVxyXG4gICAgICA/IGZvcm1hdFRva2VuRnVuY3Rpb25zW2FycmF5W2ldXVxyXG4gICAgICA6IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM6IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xyXG4gICAgbGV0IG91dHB1dCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBsZW5ndGg7IGorKykge1xyXG4gICAgICBvdXRwdXQgKz0gaXNGdW5jdGlvbihmb3JtYXRBcnJbal0pXHJcbiAgICAgICAgPyAoZm9ybWF0QXJyW2pdIGFzIERhdGVGb3JtYXR0ZXJGbikuY2FsbChudWxsLCBkYXRlLCB7Zm9ybWF0LCBsb2NhbGUsIGlzVVRDLCBvZmZzZXR9KVxyXG4gICAgICAgIDogZm9ybWF0QXJyW2pdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhpbnB1dDogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoaW5wdXQubWF0Y2goL1xcW1tcXHNcXFNdLykpIHtcclxuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfFxcXSQvZywgJycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1xcXFwvZywgJycpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVVENEYXRlKHk/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0/OiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ/OiBudW1iZXIpOiBEYXRlIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkobnVsbCwgYXJndW1lbnRzKSk7XHJcblxyXG4gIC8vIHRoZSBEYXRlLlVUQyBmdW5jdGlvbiByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcclxuICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRVVENGdWxsWWVhcigpKSkge1xyXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0ZSh5PzogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgZCA9IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGggPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBNID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zID0gMCk6IERhdGUge1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh5LCBtLCBkLCBoLCBNLCBzLCBtcyk7XHJcblxyXG4gIC8vIHRoZSBkYXRlIGNvbnN0cnVjdG9yIHJlbWFwcyB5ZWFycyAwLTk5IHRvIDE5MDAtMTk5OVxyXG4gIGlmICh5IDwgMTAwICYmIHkgPj0gMCAmJiBpc0Zpbml0ZShkYXRlLmdldEZ1bGxZZWFyKCkpKSB7XHJcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhvdXJzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xyXG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDSG91cnMoKSA6IGRhdGUuZ2V0SG91cnMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbnV0ZXMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENNaW51dGVzKCkgOiBkYXRlLmdldE1pbnV0ZXMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZHMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENTZWNvbmRzKCkgOiBkYXRlLmdldFNlY29uZHMoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE1pbGxpc2Vjb25kcyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcclxuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpIDogZGF0ZS5nZXRNaWxsaXNlY29uZHMoKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXkoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENEYXkoKSA6IGRhdGUuZ2V0RGF5KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xyXG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDRGF0ZSgpIDogZGF0ZS5nZXREYXRlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcclxuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ01vbnRoKCkgOiBkYXRlLmdldE1vbnRoKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsWWVhcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcclxuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgOiBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVbml4VGltZShkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLnZhbHVlT2YoKSAvIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5peChkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5mbG9vcihkYXRlLnZhbHVlT2YoKSAvIDEwMDApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Rmlyc3REYXlPZk1vbnRoKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICByZXR1cm4gY3JlYXRlRGF0ZShcclxuICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgIGRhdGUuZ2V0TW9udGgoKSxcclxuICAgIDEsXHJcbiAgICBkYXRlLmdldEhvdXJzKCksXHJcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSxcclxuICAgIGRhdGUuZ2V0U2Vjb25kcygpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJbk1vbnRoKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gIHJldHVybiBfZGF5c0luTW9udGgoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX2RheXNJbk1vbnRoKHllYXI6IG51bWJlciwgbW9udGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKERhdGUuVVRDKHllYXIsIG1vbnRoICsgMSwgMCkpLmdldFVUQ0RhdGUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRmlyc3REYXlPZldlZWsoZGF0ZTogRGF0ZSwgZmlyc3REYXlPZldlZWs6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBkYXRlLmdldERheSgpID09PSBmaXJzdERheU9mV2VlaztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU1vbnRoKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSkge1xyXG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmIGdldE1vbnRoKGRhdGUxKSA9PT0gZ2V0TW9udGgoZGF0ZTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lWWVhcihkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcclxuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdldEZ1bGxZZWFyKGRhdGUxKSA9PT0gZ2V0RnVsbFllYXIoZGF0ZTIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgaXNTYW1lWWVhcihkYXRlMSwgZGF0ZTIpICYmXHJcbiAgICBpc1NhbWVNb250aChkYXRlMSwgZGF0ZTIpICYmXHJcbiAgICBnZXREYXRlKGRhdGUxKSA9PT0gZ2V0RGF0ZShkYXRlMilcclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IGhhc093blByb3AsIGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoMSA9IC9cXGQvOyAgICAgICAgICAgIC8vICAgICAgIDAgLSA5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDIgPSAvXFxkXFxkLzsgICAgICAgICAgLy8gICAgICAwMCAtIDk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDMgPSAvXFxkezN9LzsgICAgICAgICAvLyAgICAgMDAwIC0gOTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDQgPSAvXFxkezR9LzsgICAgICAgICAvLyAgICAwMDAwIC0gOTk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2g2ID0gL1srLV0/XFxkezZ9LzsgICAgLy8gLTk5OTk5OSAtIDk5OTk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2gxdG8yID0gL1xcZFxcZD8vOyAgICAgICAgIC8vICAgICAgIDAgLSA5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2gzdG80ID0gL1xcZFxcZFxcZFxcZD8vOyAgICAgLy8gICAgIDk5OSAtIDk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoNXRvNiA9IC9cXGRcXGRcXGRcXGRcXGRcXGQ/LzsgLy8gICA5OTk5OSAtIDk5OTk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2gxdG8zID0gL1xcZHsxLDN9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2gxdG80ID0gL1xcZHsxLDR9LzsgICAgICAgLy8gICAgICAgMCAtIDk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNiA9IC9bKy1dP1xcZHsxLDZ9LzsgIC8vIC05OTk5OTkgLSA5OTk5OTlcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaFVuc2lnbmVkID0gL1xcZCsvOyAgICAgICAgICAgLy8gICAgICAgMCAtIGluZlxyXG5leHBvcnQgY29uc3QgbWF0Y2hTaWduZWQgPSAvWystXT9cXGQrLzsgICAgICAvLyAgICAtaW5mIC0gaW5mXHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hPZmZzZXQgPSAvWnxbKy1dXFxkXFxkOj9cXGRcXGQvZ2k7IC8vICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxyXG5leHBvcnQgY29uc3QgbWF0Y2hTaG9ydE9mZnNldCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/L2dpOyAvLyArMDAgLTAwICswMDowMCAtMDA6MDAgKzAwMDAgLTAwMDAgb3IgWlxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoVGltZXN0YW1wID0gL1srLV0/XFxkKyhcXC5cXGR7MSwzfSk/LzsgLy8gMTIzNDU2Nzg5IDEyMzQ1Njc4OS4xMjNcclxuXHJcbi8vIGFueSB3b3JkIChvciB0d28pIGNoYXJhY3RlcnMgb3IgbnVtYmVycyBpbmNsdWRpbmcgdHdvL3RocmVlIHdvcmQgbW9udGggaW4gYXJhYmljLlxyXG4vLyBpbmNsdWRlcyBzY290dGlzaCBnYWVsaWMgdHdvIHdvcmQgYW5kIGh5cGhlbmF0ZWQgbW9udGhzXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5leHBvcnQgY29uc3QgbWF0Y2hXb3JkID0gL1swLTldezAsMjU2fVsnYS16XFx1MDBBMC1cXHUwNUZGXFx1MDcwMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXXsxLDI1Nn18W1xcdTA2MDAtXFx1MDZGRlxcL117MSwyNTZ9KFxccyo/W1xcdTA2MDAtXFx1MDZGRl17MSwyNTZ9KXsxLDJ9L2k7XHJcblxyXG5leHBvcnQgdHlwZSBSZWdFeHBUb2tlbkZuID0gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkgPT4gUmVnRXhwO1xyXG5jb25zdCByZWdleGVzOiB7W2tleTogc3RyaW5nXTogUmVnRXhwVG9rZW5Gbn0gPSB7fTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUmVnZXhUb2tlbih0b2tlbjogc3RyaW5nLCByZWdleDogUmVnRXhwIHwgUmVnRXhwVG9rZW5Gbiwgc3RyaWN0UmVnZXg/OiBSZWdFeHApOiB2b2lkIHtcclxuICBpZiAoaXNGdW5jdGlvbihyZWdleCkpIHtcclxuICAgIHJlZ2V4ZXNbdG9rZW5dID0gcmVnZXg7XHJcblxyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgcmVnZXhlc1t0b2tlbl0gPSBmdW5jdGlvbiAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKSB7XHJcbiAgICByZXR1cm4gKGlzU3RyaWN0ICYmIHN0cmljdFJlZ2V4KSA/IHN0cmljdFJlZ2V4IDogcmVnZXg7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbjogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XHJcbiAgY29uc3QgX3N0cmljdCA9IGZhbHNlO1xyXG4gIGlmICghaGFzT3duUHJvcChyZWdleGVzLCB0b2tlbikpIHtcclxuICAgIHJldHVybiBuZXcgUmVnRXhwKHVuZXNjYXBlRm9ybWF0KHRva2VuKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVnZXhlc1t0b2tlbl0oX3N0cmljdCwgbG9jYWxlKTtcclxufVxyXG5cclxuLy8gQ29kZSBmcm9tIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzU2MTQ5My9pcy10aGVyZS1hLXJlZ2V4cC1lc2NhcGUtZnVuY3Rpb24taW4tamF2YXNjcmlwdFxyXG5mdW5jdGlvbiB1bmVzY2FwZUZvcm1hdChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgcmV0dXJuIHJlZ2V4RXNjYXBlKHN0clxyXG4gICAgLnJlcGxhY2UoJ1xcXFwnLCAnJylcclxuICAgIC5yZXBsYWNlKC9cXFxcKFxcWyl8XFxcXChcXF0pfFxcWyhbXlxcXVxcW10qKVxcXXxcXFxcKC4pL2csIChtYXRjaGVkLCBwMSwgcDIsIHAzLCBwNCkgPT4gcDEgfHwgcDIgfHwgcDMgfHwgcDQpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2V4RXNjYXBlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4gc3RyLnJlcGxhY2UoL1stXFwvXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxyXG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc0Z1bmN0aW9uLCBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlUGFyc2VUb2tlbkZuIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgdG9rZW5zOiB7W2tleTogc3RyaW5nXTogRGF0ZVBhcnNlVG9rZW5Gbn0gPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJzZVRva2VuKHRva2VuOiBzdHJpbmcgfCBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4gfCBudW1iZXIpIHtcclxuICBjb25zdCBfdG9rZW4gPSBpc1N0cmluZyh0b2tlbikgPyBbdG9rZW5dIDogdG9rZW47XHJcbiAgbGV0IGZ1bmMgPSBjYWxsYmFjaztcclxuXHJcbiAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xyXG4gICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5PHN0cmluZz4oX3Rva2VuKSAmJiBpc0Z1bmN0aW9uKGZ1bmMpKSB7XHJcbiAgICBsZXQgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBfdG9rZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG9rZW5zW190b2tlbltpXV0gPSBmdW5jO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuOiBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4pOiB2b2lkIHtcclxuICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgX3Rva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XHJcblxyXG4gICAgcmV0dXJuIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgX3Rva2VuKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbjogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcclxuICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcbiIsImNvbnN0IHByaW9yaXRpZXM6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdFByaW9yaXR5KHVuaXQ6IHN0cmluZywgcHJpb3JpdHk6IG51bWJlcik6IHZvaWQge1xyXG4gIHByaW9yaXRpZXNbdW5pdF0gPSBwcmlvcml0eTtcclxufVxyXG5cclxuLypcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByaW9yaXRpemVkVW5pdHModW5pdHNPYmopIHtcclxuICBjb25zdCB1bml0cyA9IFtdO1xyXG4gIGxldCB1bml0O1xyXG4gIGZvciAodW5pdCBpbiB1bml0c09iaikge1xyXG4gICAgaWYgKHVuaXRzT2JqLmhhc093blByb3BlcnR5KHVuaXQpKSB7XHJcbiAgICAgIHVuaXRzLnB1c2goeyB1bml0LCBwcmlvcml0eTogcHJpb3JpdGllc1t1bml0XSB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgdW5pdHMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdW5pdHM7XHJcbn1cclxuKi9cclxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgZ2V0RGF0ZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyBEQVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcclxuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXlPZk1vbnRoKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdEJywgWydERCcsIDIsIGZhbHNlXSwgJ0RvJyxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGdldERhdGUoZGF0ZSwgb3B0cy5pc1VUQylcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygnZGF0ZScsICdEJyk7XHJcblxyXG4vLyBQUklPUk9JVFlcclxuICBhZGRVbml0UHJpb3JpdHkoJ2RhdGUnLCA5KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignRCcsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignREQnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignRG8nLCBmdW5jdGlvbihpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICByZXR1cm4gbG9jYWxlLl9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlIHx8IGxvY2FsZS5fb3JkaW5hbFBhcnNlO1xyXG4gIH0pO1xyXG5cclxuICBhZGRQYXJzZVRva2VuKFsnRCcsICdERCddLCBEQVRFKTtcclxuICBhZGRQYXJzZVRva2VuKFxyXG4gICAgJ0RvJyxcclxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICAgIGFycmF5W0RBVEVdID0gdG9JbnQoaW5wdXQubWF0Y2gobWF0Y2gxdG8yKVswXSk7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcsIERhdGVQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gZGVmYXVsdFBhcnNpbmdGbGFncygpOiBEYXRlUGFyc2luZ0ZsYWdzIHtcclxuICAvLyBXZSBuZWVkIHRvIGRlZXAgY2xvbmUgdGhpcyBvYmplY3QuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVtcHR5OiBmYWxzZSxcclxuICAgIHVudXNlZFRva2VuczogW10sXHJcbiAgICB1bnVzZWRJbnB1dDogW10sXHJcbiAgICBvdmVyZmxvdzogLTIsXHJcbiAgICBjaGFyc0xlZnRPdmVyOiAwLFxyXG4gICAgbnVsbElucHV0OiBmYWxzZSxcclxuICAgIGludmFsaWRNb250aDogbnVsbCxcclxuICAgIGludmFsaWRGb3JtYXQ6IGZhbHNlLFxyXG4gICAgdXNlckludmFsaWRhdGVkOiBmYWxzZSxcclxuICAgIGlzbzogZmFsc2UsXHJcbiAgICBwYXJzZWREYXRlUGFydHM6IFtdLFxyXG4gICAgbWVyaWRpZW06IG51bGwsXHJcbiAgICByZmMyODIyOiBmYWxzZSxcclxuICAgIHdlZWtkYXlNaXNtYXRjaDogZmFsc2VcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0ZsYWdzIHtcclxuICBpZiAoY29uZmlnLl9wZiA9PSBudWxsKSB7XHJcbiAgICBjb25maWcuX3BmID0gZGVmYXVsdFBhcnNpbmdGbGFncygpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5fcGY7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgZ2V0RnVsbFllYXIgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMXRvNCwgbWF0Y2gxdG82LCBtYXRjaDIsIG1hdGNoNCwgbWF0Y2g2LCBtYXRjaFNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgWUVBUiB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuLy8gRk9STUFUVElOR1xyXG5cclxuZnVuY3Rpb24gZ2V0WWVhcihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGdldEZ1bGxZZWFyKGRhdGUsIG9wdHMuaXNVVEMpLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0WWVhcigpIHtcclxuICBhZGRGb3JtYXRUb2tlbignWScsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgeSA9IGdldEZ1bGxZZWFyKGRhdGUsIG9wdHMuaXNVVEMpO1xyXG5cclxuICAgIHJldHVybiB5IDw9IDk5OTkgPyB5LnRvU3RyaW5nKDEwKSA6IGArJHt5fWA7XHJcbiAgfSk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVknLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIChnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKSAlIDEwMCkudG9TdHJpbmcoMTApO1xyXG4gIH0pO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVknLCA0LCBmYWxzZV0sIG51bGwsIGdldFllYXIpO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVlZWVknLCA1LCBmYWxzZV0sIG51bGwsIGdldFllYXIpO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnWVlZWVlZJywgNiwgdHJ1ZV0sIG51bGwsIGdldFllYXIpO1xyXG5cclxuICAvLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygneWVhcicsICd5Jyk7XHJcblxyXG4gIC8vIFBSSU9SSVRJRVNcclxuXHJcbiAgYWRkVW5pdFByaW9yaXR5KCd5ZWFyJywgMSk7XHJcblxyXG4gIC8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignWScsIG1hdGNoU2lnbmVkKTtcclxuICBhZGRSZWdleFRva2VuKCdZWScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICBhZGRSZWdleFRva2VuKCdZWVlZJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ1lZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcclxuXHJcbiAgYWRkUGFyc2VUb2tlbihbJ1lZWVlZJywgJ1lZWVlZWSddLCBZRUFSKTtcclxuICBhZGRQYXJzZVRva2VuKCdZWVlZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XHJcbiAgICBhcnJheVtZRUFSXSA9IGlucHV0Lmxlbmd0aCA9PT0gMiA/IHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KSA6IHRvSW50KGlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG4gIGFkZFBhcnNlVG9rZW4oJ1lZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XHJcbiAgICBhcnJheVtZRUFSXSA9IHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG4gIGFkZFBhcnNlVG9rZW4oJ1knLCBmdW5jdGlvbiAoaW5wdXQsIGFycmF5LCBjb25maWcpIHtcclxuICAgIGFycmF5W1lFQVJdID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQ6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgcmV0dXJuIHRvSW50KGlucHV0KSArICh0b0ludChpbnB1dCkgPiA2OCA/IDE5MDAgOiAyMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRheXNJblllYXIoeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gaXNMZWFwWWVhcih5ZWFyKSA/IDM2NiA6IDM2NTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTGVhcFllYXIoeWVhcjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICh5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwKSB8fCB5ZWFyICUgNDAwID09PSAwO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGlzTGVhcFllYXIgfSBmcm9tICcuL3llYXInO1xyXG5pbXBvcnQgeyBtb2QgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcclxuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcclxuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbi8vIHRvZG86IHRoaXMgaXMgZHVwbGljYXRlLCBzb3VyY2UgaW4gZGF0ZS1nZXR0ZXJzLnRzXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmIChpc05hTih5ZWFyKSB8fCBpc05hTihtb250aCkpIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG4gIGNvbnN0IG1vZE1vbnRoID0gbW9kKG1vbnRoLCAxMik7XHJcbiAgY29uc3QgX3llYXIgPSB5ZWFyICsgKG1vbnRoIC0gbW9kTW9udGgpIC8gMTI7XHJcblxyXG4gIHJldHVybiBtb2RNb250aCA9PT0gMVxyXG4gICAgPyBpc0xlYXBZZWFyKF95ZWFyKSA/IDI5IDogMjhcclxuICAgIDogKDMxIC0gbW9kTW9udGggJSA3ICUgMik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0TW9udGgoKSB7XHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ00nLCBbJ01NJywgMiwgZmFsc2VdLCAnTW8nLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1vbnRoKGRhdGUsIG9wdHMuaXNVVEMpICsgMSkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdNTU0nLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gb3B0cy5sb2NhbGUubW9udGhzU2hvcnQoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdNTU1NJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm1vbnRocyhkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygnbW9udGgnLCAnTScpO1xyXG5cclxuLy8gUFJJT1JJVFlcclxuXHJcbiAgYWRkVW5pdFByaW9yaXR5KCdtb250aCcsIDgpO1xyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdNJywgbWF0Y2gxdG8yKTtcclxuICBhZGRSZWdleFRva2VuKCdNTScsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICBhZGRSZWdleFRva2VuKCdNTU0nLCBmdW5jdGlvbihpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xyXG4gIH0pO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ01NTU0nLCBmdW5jdGlvbihpc1N0cmljdCwgbG9jYWxlKSB7XHJcbiAgICByZXR1cm4gbG9jYWxlLm1vbnRoc1JlZ2V4KGlzU3RyaWN0KTtcclxuICB9KTtcclxuXHJcbiAgYWRkUGFyc2VUb2tlbihbJ00nLCAnTU0nXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGFycmF5W01PTlRIXSA9IHRvSW50KGlucHV0KSAtIDE7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuXHJcbiAgYWRkUGFyc2VUb2tlbihcclxuICAgIFsnTU1NJywgJ01NTU0nXSxcclxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICAgIGNvbnN0IG1vbnRoID0gY29uZmlnLl9sb2NhbGUubW9udGhzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XHJcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBmaW5kIGEgbW9udGggbmFtZSwgbWFyayB0aGUgZGF0ZSBhcyBpbnZhbGlkLlxyXG4gICAgICBpZiAobW9udGggIT0gbnVsbCkge1xyXG4gICAgICAgIGFycmF5W01PTlRIXSA9IG1vbnRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRNb250aCA9ICEhaW5wdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lVW5pdCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgZGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XHJcbmltcG9ydCB7IGlzTnVtYmVyIH0gZnJvbSAnLi90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGdldERhdGUsIGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJy4vZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgaXNMZWFwWWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xyXG5pbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XHJcblxyXG5jb25zdCBkZWZhdWx0VGltZVVuaXQ6IFRpbWVVbml0ID0ge1xyXG4gIHllYXI6IDAsXHJcbiAgbW9udGg6IDAsXHJcbiAgZGF5OiAwLFxyXG4gIGhvdXI6IDAsXHJcbiAgbWludXRlOiAwLFxyXG4gIHNlY29uZHM6IDBcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaGlmdERhdGUoZGF0ZTogRGF0ZSwgdW5pdDogVGltZVVuaXQpOiBEYXRlIHtcclxuICBjb25zdCBfdW5pdCA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRUaW1lVW5pdCwgdW5pdCk7XHJcbiAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIChfdW5pdC55ZWFyIHx8IDApO1xyXG4gIGNvbnN0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgKF91bml0Lm1vbnRoIHx8IDApO1xyXG4gIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKSArIChfdW5pdC5kYXkgfHwgMCk7XHJcbiAgaWYgKF91bml0Lm1vbnRoICYmICFfdW5pdC5kYXkpIHtcclxuICAgIGRheSA9IE1hdGgubWluKGRheSwgZGF5c0luTW9udGgoeWVhciwgbW9udGgpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjcmVhdGVEYXRlKFxyXG4gICAgeWVhcixcclxuICAgIG1vbnRoLFxyXG4gICAgZGF5LFxyXG4gICAgZGF0ZS5nZXRIb3VycygpICsgKF91bml0LmhvdXIgfHwgMCksXHJcbiAgICBkYXRlLmdldE1pbnV0ZXMoKSArIChfdW5pdC5taW51dGUgfHwgMCksXHJcbiAgICBkYXRlLmdldFNlY29uZHMoKSArIChfdW5pdC5zZWNvbmRzIHx8IDApXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEZ1bGxEYXRlKGRhdGU6IERhdGUsIHVuaXQ6IFRpbWVVbml0KTogRGF0ZSB7XHJcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXHJcbiAgICBnZXROdW0oZGF0ZS5nZXRGdWxsWWVhcigpLCB1bml0LnllYXIpLFxyXG4gICAgZ2V0TnVtKGRhdGUuZ2V0TW9udGgoKSwgdW5pdC5tb250aCksXHJcbiAgICBnZXROdW0oZGF0ZS5nZXREYXRlKCksIHVuaXQuZGF5KSxcclxuICAgIGdldE51bShkYXRlLmdldEhvdXJzKCksIHVuaXQuaG91ciksXHJcbiAgICBnZXROdW0oZGF0ZS5nZXRNaW51dGVzKCksIHVuaXQubWludXRlKSxcclxuICAgIGdldE51bShkYXRlLmdldFNlY29uZHMoKSwgdW5pdC5zZWNvbmRzKSxcclxuICAgIGdldE51bShkYXRlLmdldE1pbGxpc2Vjb25kcygpLCB1bml0Lm1pbGxpc2Vjb25kcylcclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXROdW0oZGVmOiBudW1iZXIsIG51bT86IG51bWJlcik6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzTnVtYmVyKG51bSkgPyBudW0gOiBkZWY7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGdWxsWWVhcihkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBjb25zdCBfbW9udGggPSBnZXRNb250aChkYXRlLCBpc1VUQyk7XHJcbiAgY29uc3QgX2RhdGUgPSBnZXREYXRlKGRhdGUsIGlzVVRDKTtcclxuICBjb25zdCBfeWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcclxuICBpZiAoaXNMZWFwWWVhcihfeWVhcikgJiYgX21vbnRoID09PSAxICYmIF9kYXRlID09PSAyOSkge1xyXG4gICAgY29uc3QgX2RheXNJbk1vbnRoID0gZGF5c0luTW9udGgodmFsdWUsIF9tb250aCk7XHJcbiAgICBpc1VUQyA/IGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKSA6IGRhdGUuc2V0RnVsbFllYXIodmFsdWUsIF9tb250aCwgX2RheXNJbk1vbnRoKTtcclxuICB9XHJcblxyXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENGdWxsWWVhcih2YWx1ZSkgOiBkYXRlLnNldEZ1bGxZZWFyKHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNb250aChkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBjb25zdCBkYXlPZk1vbnRoID0gTWF0aC5taW4oZ2V0RGF0ZShkYXRlKSwgZGF5c0luTW9udGgoZ2V0RnVsbFllYXIoZGF0ZSksIHZhbHVlKSk7XHJcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01vbnRoKHZhbHVlLCBkYXlPZk1vbnRoKSA6IGRhdGUuc2V0TW9udGgodmFsdWUsIGRheU9mTW9udGgpO1xyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldERheShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBpc1VUQyA/IGRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkYXRlLnNldERhdGUodmFsdWUpO1xyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEhvdXJzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENIb3Vycyh2YWx1ZSkgOiBkYXRlLnNldEhvdXJzKHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNaW51dGVzKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNaW51dGVzKHZhbHVlKSA6IGRhdGUuc2V0TWludXRlcyh2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0U2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBpc1VUQyA/IGRhdGUuc2V0VVRDU2Vjb25kcyh2YWx1ZSkgOiBkYXRlLnNldFNlY29uZHModmFsdWUpO1xyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE1pbGxpc2Vjb25kcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBpc1VUQyA/IGRhdGUuc2V0VVRDTWlsbGlzZWNvbmRzKHZhbHVlKSA6IGRhdGUuc2V0TWlsbGlzZWNvbmRzKHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREYXRlKGRhdGU6IERhdGUsIHZhbHVlOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENEYXRlKHZhbHVlKSA6IGRhdGUuc2V0RGF0ZSh2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyKTogRGF0ZSB7XHJcbiAgZGF0ZS5zZXRUaW1lKHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuIiwiLy8gZmFzdGVzdCB3YXkgdG8gY2xvbmUgZGF0ZVxyXG4vLyBodHRwczovL2pzcGVyZi5jb20vY2xvbmUtZGF0ZS1vYmplY3QyXHJcbmV4cG9ydCBmdW5jdGlvbiBjbG9uZURhdGUoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSk7XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6IHN3aXRjaC1kZWZhdWx0XHJcbmltcG9ydCB7IFRpbWVVbml0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQge1xyXG4gIHNldERhdGUsIHNldEZ1bGxEYXRlLCBzZXRIb3Vycywgc2V0TWlsbGlzZWNvbmRzLCBzZXRNaW51dGVzLCBzZXRNb250aCwgc2V0U2Vjb25kcyxcclxuICBzaGlmdERhdGVcclxufSBmcm9tICcuL2RhdGUtc2V0dGVycyc7XHJcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XHJcbmltcG9ydCB7IHNldElTT0RheU9mV2Vlaywgc2V0TG9jYWxlRGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4vZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkLCBzdWJ0cmFjdCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0T2YoZGF0ZTogRGF0ZSwgdW5pdDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgY29uc3QgX2RhdGUgPSBjbG9uZURhdGUoZGF0ZSk7XHJcbiAgLy8gdGhlIGZvbGxvd2luZyBzd2l0Y2ggaW50ZW50aW9uYWxseSBvbWl0cyBicmVhayBrZXl3b3Jkc1xyXG4gIC8vIHRvIHV0aWxpemUgZmFsbGluZyB0aHJvdWdoIHRoZSBjYXNlcy5cclxuICBzd2l0Y2ggKHVuaXQpIHtcclxuICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICBzZXRNb250aChfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSAncXVhcnRlcic6XHJcbiAgICBjYXNlICdtb250aCc6XHJcbiAgICAgIHNldERhdGUoX2RhdGUsIDEsIGlzVVRDKTtcclxuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cclxuICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgY2FzZSAnaXNvV2Vlayc6XHJcbiAgICBjYXNlICdkYXknOlxyXG4gICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgIHNldEhvdXJzKF9kYXRlLCAwLCBpc1VUQyk7XHJcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICBjYXNlICdob3Vycyc6XHJcbiAgICAgIHNldE1pbnV0ZXMoX2RhdGUsIDAsIGlzVVRDKTtcclxuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cclxuICAgIGNhc2UgJ21pbnV0ZXMnOlxyXG4gICAgICBzZXRTZWNvbmRzKF9kYXRlLCAwLCBpc1VUQyk7XHJcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICBjYXNlICdzZWNvbmRzJzpcclxuICAgICAgc2V0TWlsbGlzZWNvbmRzKF9kYXRlLCAwLCBpc1VUQyk7XHJcbiAgfVxyXG5cclxuICAvLyB3ZWVrcyBhcmUgYSBzcGVjaWFsIGNhc2VcclxuICBpZiAodW5pdCA9PT0gJ3dlZWsnKSB7XHJcbiAgICBzZXRMb2NhbGVEYXlPZldlZWsoX2RhdGUsIDAsIHtpc1VUQ30pO1xyXG4gIH1cclxuICBpZiAodW5pdCA9PT0gJ2lzb1dlZWsnKSB7XHJcbiAgICBzZXRJU09EYXlPZldlZWsoX2RhdGUsIDEpO1xyXG4gIH1cclxuXHJcbiAgLy8gcXVhcnRlcnMgYXJlIGFsc28gc3BlY2lhbFxyXG4gIGlmICh1bml0ID09PSAncXVhcnRlcicpIHtcclxuICAgIHNldE1vbnRoKF9kYXRlLCBNYXRoLmZsb29yKGdldE1vbnRoKF9kYXRlLCBpc1VUQykgLyAzKSAqIDMsIGlzVVRDKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZE9mKGRhdGU6IERhdGUsIHVuaXQ6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGxldCBfdW5pdCA9IHVuaXQ7XHJcbiAgLy8gJ2RhdGUnIGlzIGFuIGFsaWFzIGZvciAnZGF5Jywgc28gaXQgc2hvdWxkIGJlIGNvbnNpZGVyZWQgYXMgc3VjaC5cclxuICBpZiAoX3VuaXQgPT09ICdkYXRlJykge1xyXG4gICAgX3VuaXQgPSAnZGF5JztcclxuICB9XHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZihkYXRlLCBfdW5pdCwgaXNVVEMpO1xyXG4gIGNvbnN0IF9zdGVwID0gYWRkKHN0YXJ0LCAxLCBfdW5pdCA9PT0gJ2lzb1dlZWsnID8gJ3dlZWsnIDogX3VuaXQsIGlzVVRDKTtcclxuICBjb25zdCByZXMgPSBzdWJ0cmFjdChfc3RlcCwgMSwgJ21pbGxpc2Vjb25kcycsIGlzVVRDKTtcclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBzdGFydE9mIH0gZnJvbSAnLi4vdXRpbHMvc3RhcnQtZW5kLW9mJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8zLCBtYXRjaDMgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXREYXlPZlllYXIoKSB7XHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ0RERCcsIFsnRERERCcsIDMsIGZhbHNlXSwgJ0RERG8nLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXREYXlPZlllYXIoZGF0ZSlcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ2RheU9mWWVhcicsICdEREQnKTtcclxuXHJcbi8vIFBSSU9SSVRZXHJcblxyXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF5T2ZZZWFyJywgNCk7XHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ0RERCcsIG1hdGNoMXRvMyk7XHJcbiAgYWRkUmVnZXhUb2tlbignRERERCcsIG1hdGNoMyk7XHJcbiAgYWRkUGFyc2VUb2tlbihcclxuICAgIFsnREREJywgJ0REREQnXSxcclxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICAgIGNvbmZpZy5fZGF5T2ZZZWFyID0gdG9JbnQoaW5wdXQpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgY29uc3QgZGF0ZTEgPSArc3RhcnRPZihkYXRlLCAnZGF5JywgaXNVVEMpO1xyXG4gIGNvbnN0IGRhdGUyID0gK3N0YXJ0T2YoZGF0ZSwgJ3llYXInLCBpc1VUQyk7XHJcbiAgY29uc3Qgc29tZURhdGUgPSBkYXRlMSAtIGRhdGUyO1xyXG4gIGNvbnN0IG9uZURheSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XHJcblxyXG4gIHJldHVybiBNYXRoLnJvdW5kKHNvbWVEYXRlIC8gb25lRGF5KSArIDE7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREYXlPZlllYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlcik6IERhdGUge1xyXG4gIGNvbnN0IGRheU9mWWVhciA9IGdldERheU9mWWVhcihkYXRlKTtcclxuXHJcbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSBkYXlPZlllYXIpLCAnZGF5Jyk7XHJcbn1cclxuIiwiLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB5ZWFyXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkb3cgLSBzdGFydC1vZi1maXJzdC13ZWVrXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBkb3kgLSBzdGFydC1vZi15ZWFyXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2RhdGUtZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IGRheXNJblllYXIgfSBmcm9tICcuL3llYXInO1xyXG5pbXBvcnQgeyBnZXREYXlPZlllYXIgfSBmcm9tICcuL2RheS1vZi15ZWFyJztcclxuaW1wb3J0IHsgZ2V0RnVsbFllYXIgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuZnVuY3Rpb24gZmlyc3RXZWVrT2Zmc2V0KHllYXI6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAvLyBmaXJzdC13ZWVrIGRheSAtLSB3aGljaCBqYW51YXJ5IGlzIGFsd2F5cyBpbiB0aGUgZmlyc3Qgd2VlayAoNCBmb3IgaXNvLCAxIGZvciBvdGhlcilcclxuICBjb25zdCBmd2QgPSBkb3cgLSBkb3kgKyA3O1xyXG4gIC8vIGZpcnN0LXdlZWsgZGF5IGxvY2FsIHdlZWtkYXkgLS0gd2hpY2ggbG9jYWwgd2Vla2RheSBpcyBmd2RcclxuICBjb25zdCBmd2RsdyA9IChjcmVhdGVVVENEYXRlKHllYXIsIDAsIGZ3ZCkuZ2V0VVRDRGF5KCkgLSBkb3cgKyA3KSAlIDc7XHJcblxyXG4gIHJldHVybiAtZndkbHcgKyBmd2QgLSAxO1xyXG59XHJcblxyXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlI0NhbGN1bGF0aW5nX2FfZGF0ZV9naXZlbl90aGVfeWVhci4yQ193ZWVrX251bWJlcl9hbmRfd2Vla2RheVxyXG5leHBvcnQgZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtzKFxyXG4gIHllYXI6IG51bWJlcixcclxuICB3ZWVrOiBudW1iZXIsXHJcbiAgd2Vla2RheTogbnVtYmVyLFxyXG4gIGRvdzogbnVtYmVyLFxyXG4gIGRveTogbnVtYmVyXHJcbik6IHsgeWVhcjogbnVtYmVyOyBkYXlPZlllYXI6IG51bWJlciB9IHtcclxuICBjb25zdCBsb2NhbFdlZWtkYXkgPSAoNyArIHdlZWtkYXkgLSBkb3cpICUgNztcclxuICBjb25zdCB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KTtcclxuICBjb25zdCBkYXlPZlllYXIgPSAxICsgNyAqICh3ZWVrIC0gMSkgKyBsb2NhbFdlZWtkYXkgKyB3ZWVrT2Zmc2V0O1xyXG4gIGxldCByZXNZZWFyOiBudW1iZXI7XHJcbiAgbGV0IHJlc0RheU9mWWVhcjogbnVtYmVyO1xyXG5cclxuICBpZiAoZGF5T2ZZZWFyIDw9IDApIHtcclxuICAgIHJlc1llYXIgPSB5ZWFyIC0gMTtcclxuICAgIHJlc0RheU9mWWVhciA9IGRheXNJblllYXIocmVzWWVhcikgKyBkYXlPZlllYXI7XHJcbiAgfSBlbHNlIGlmIChkYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXIpKSB7XHJcbiAgICByZXNZZWFyID0geWVhciArIDE7XHJcbiAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXIgLSBkYXlzSW5ZZWFyKHllYXIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXNZZWFyID0geWVhcjtcclxuICAgIHJlc0RheU9mWWVhciA9IGRheU9mWWVhcjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB5ZWFyOiByZXNZZWFyLFxyXG4gICAgZGF5T2ZZZWFyOiByZXNEYXlPZlllYXJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Vla09mWWVhcihkYXRlOiBEYXRlLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IHsgd2VlazogbnVtYmVyOyB5ZWFyOiBudW1iZXIgfSB7XHJcbiAgY29uc3Qgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldChnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KTtcclxuICBjb25zdCB3ZWVrID0gTWF0aC5mbG9vcigoZ2V0RGF5T2ZZZWFyKGRhdGUsIGlzVVRDKSAtIHdlZWtPZmZzZXQgLSAxKSAvIDcpICsgMTtcclxuICBsZXQgcmVzV2VlazogbnVtYmVyO1xyXG4gIGxldCByZXNZZWFyOiBudW1iZXI7XHJcblxyXG4gIGlmICh3ZWVrIDwgMSkge1xyXG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSAtIDE7XHJcbiAgICByZXNXZWVrID0gd2VlayArIHdlZWtzSW5ZZWFyKHJlc1llYXIsIGRvdywgZG95KTtcclxuICB9IGVsc2UgaWYgKHdlZWsgPiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KSkge1xyXG4gICAgcmVzV2VlayA9IHdlZWsgLSB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGRvdywgZG95KTtcclxuICAgIHJlc1llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQykgKyAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXNZZWFyID0gZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpO1xyXG4gICAgcmVzV2VlayA9IHdlZWs7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgd2VlazogcmVzV2VlayxcclxuICAgIHllYXI6IHJlc1llYXJcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NJblllYXIoeWVhcjogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoeWVhciwgZG93LCBkb3kpO1xyXG4gIGNvbnN0IHdlZWtPZmZzZXROZXh0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIgKyAxLCBkb3csIGRveSk7XHJcblxyXG4gIHJldHVybiAoZGF5c0luWWVhcih5ZWFyKSAtIHdlZWtPZmZzZXQgKyB3ZWVrT2Zmc2V0TmV4dCkgLyA3O1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1maWxlLWxpbmUtY291bnQgbWF4LWxpbmUtbGVuZ3RoIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG5cclxuaW1wb3J0IHsgd2Vla09mWWVhciB9IGZyb20gJy4uL3VuaXRzL3dlZWstY2FsZW5kYXItdXRpbHMnO1xyXG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBnZXREYXksIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgbWF0Y2hXb3JkLCByZWdleEVzY2FwZSB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgc2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVPcHRpb25zRm9ybWF0IHtcclxuICBmb3JtYXQ6IHN0cmluZ1tdO1xyXG4gIHN0YW5kYWxvbmU6IHN0cmluZ1tdO1xyXG4gIGlzRm9ybWF0PzogUmVnRXhwO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBMb2NhbGVPcHRpb25zID0gc3RyaW5nW10gfCBMb2NhbGVPcHRpb25zRm9ybWF0O1xyXG5cclxuY29uc3QgTU9OVEhTX0lOX0ZPUk1BVCA9IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/LztcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVNb250aHMgPSAnSmFudWFyeV9GZWJydWFyeV9NYXJjaF9BcHJpbF9NYXlfSnVuZV9KdWx5X0F1Z3VzdF9TZXB0ZW1iZXJfT2N0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoXHJcbiAgJ18nXHJcbik7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQgPSAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KFxyXG4gICdfJ1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzID0gJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdChcclxuICAnXydcclxuKTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0ID0gJ1N1bl9Nb25fVHVlX1dlZF9UaHVfRnJpX1NhdCcuc3BsaXQoXHJcbiAgJ18nXHJcbik7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4gPSAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyk7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQ6IHsgW2luZGV4OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICBMVFM6ICdoOm1tOnNzIEEnLFxyXG4gIExUOiAnaDptbSBBJyxcclxuICBMOiAnTU0vREQvWVlZWScsXHJcbiAgTEw6ICdNTU1NIEQsIFlZWVknLFxyXG4gIExMTDogJ01NTU0gRCwgWVlZWSBoOm1tIEEnLFxyXG4gIExMTEw6ICdkZGRkLCBNTU1NIEQsIFlZWVkgaDptbSBBJ1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPcmRpbmFsID0gJyVkJztcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlID0gL1xcZHsxLDJ9LztcclxuXHJcbmNvbnN0IGRlZmF1bHRNb250aHNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xyXG5jb25zdCBkZWZhdWx0TW9udGhzUmVnZXggPSBtYXRjaFdvcmQ7XHJcblxyXG5leHBvcnQgdHlwZSBPcmRpbmFsRGF0ZUZuID0gKG51bTogbnVtYmVyLCB0b2tlbj86IHN0cmluZykgPT4gc3RyaW5nO1xyXG5leHBvcnQgdHlwZSBQbHVyYWxpemVEYXRlRm4gPSAobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk/OiBzdHJpbmcsIGlzRnV0dXJlPzogYm9vbGVhbikgPT4gc3RyaW5nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhbGVEYXRhIHtcclxuICBhYmJyPzogc3RyaW5nO1xyXG4gIHBhcmVudExvY2FsZT86IHN0cmluZztcclxuXHJcbiAgbW9udGhzPzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xyXG4gIG1vbnRoc1Nob3J0PzogTG9jYWxlT3B0aW9ucyB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xyXG4gIG1vbnRoc1BhcnNlRXhhY3Q/OiBib29sZWFuO1xyXG5cclxuICB3ZWVrZGF5cz86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcclxuICB3ZWVrZGF5c1Nob3J0Pzogc3RyaW5nW10gfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcclxuICB3ZWVrZGF5c01pbj86IHN0cmluZ1tdIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0PzogYm9vbGVhbjtcclxuXHJcbiAgbG9uZ0RhdGVGb3JtYXQ/OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgY2FsZW5kYXI/OiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiAoc3RyaW5nXHJcbiAgICAgIHwgKChkYXRlOiBEYXRlLCBub3c/OiBEYXRlKSA9PiBzdHJpbmcpXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgICB8ICgoZGF5T2ZXZWVrOiBudW1iZXIsIGlzTmV4dFdlZWs6IGJvb2xlYW4pID0+IHN0cmluZykpXHJcbiAgfTtcclxuICByZWxhdGl2ZVRpbWU/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IFBsdXJhbGl6ZURhdGVGbiB9O1xyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U/OiBSZWdFeHA7XHJcbiAgb3JkaW5hbD86IHN0cmluZyB8IE9yZGluYWxEYXRlRm47XHJcblxyXG4gIHdlZWs/OiB7IGRvdz86IG51bWJlcjsgZG95PzogbnVtYmVyIH07XHJcblxyXG4gIGludmFsaWREYXRlPzogc3RyaW5nO1xyXG5cclxuICBtb250aHNSZWdleD86IFJlZ0V4cDtcclxuICBtb250aHNQYXJzZT86IFJlZ0V4cFtdO1xyXG4gIG1vbnRoc1Nob3J0UmVnZXg/OiBSZWdFeHA7XHJcbiAgbW9udGhzU3RyaWN0UmVnZXg/OiBSZWdFeHA7XHJcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleD86IFJlZ0V4cDtcclxuICBsb25nTW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcclxuICBzaG9ydE1vbnRoc1BhcnNlPzogUmVnRXhwW107XHJcblxyXG4gIG1lcmlkaWVtUGFyc2U/OiBSZWdFeHA7XHJcblxyXG4gIG1lcmlkaWVtSG91cj8oaG91cjogbnVtYmVyLCBtZXJpZGllbTogc3RyaW5nKTogbnVtYmVyO1xyXG5cclxuICBwcmVwYXJzZT8oc3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG4gIHBvc3Rmb3JtYXQ/KHN0cjogc3RyaW5nIHwgbnVtYmVyKTogc3RyaW5nO1xyXG5cclxuICBtZXJpZGllbT8oaG91cjogbnVtYmVyLCBtaW51dGU/OiBudW1iZXIsIGlzTG93ZXI/OiBib29sZWFuKTogc3RyaW5nO1xyXG5cclxuICBpc1BNPyhpbnB1dDogc3RyaW5nKTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIExvY2FsZSB7XHJcbiAgcGFyZW50TG9jYWxlPzogTG9jYWxlO1xyXG4gIF9hYmJyOiBzdHJpbmc7XHJcbiAgX2NvbmZpZzogTG9jYWxlRGF0YTtcclxuICBtZXJpZGllbUhvdXI6IChob3VyOiBudW1iZXIsIG1lcmlkaWVtOiBzdHJpbmcpID0+IG51bWJlcjtcclxuXHJcbiAgX2ludmFsaWREYXRlOiBzdHJpbmc7XHJcbiAgX3dlZWs6IHsgZG93OiBudW1iZXI7IGRveTogbnVtYmVyIH07XHJcbiAgX2RheU9mTW9udGhPcmRpbmFsUGFyc2U6IFJlZ0V4cDtcclxuICBfb3JkaW5hbFBhcnNlOiBSZWdFeHA7XHJcbiAgX21lcmlkaWVtUGFyc2U6IFJlZ0V4cDtcclxuXHJcbiAgcHJpdmF0ZSBfY2FsZW5kYXI6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgcHJpdmF0ZSBfcmVsYXRpdmVUaW1lOiB7IGZ1dHVyZTogc3RyaW5nOyBwYXN0OiBzdHJpbmcgfTtcclxuICBwcml2YXRlIF9tb250aHM6IExvY2FsZU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnQ6IExvY2FsZU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBfbW9udGhzUmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF9tb250aHNTaG9ydFJlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfbW9udGhzU3RyaWN0UmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF9tb250aHNTaG9ydFN0cmljdFJlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfbW9udGhzUGFyc2U6IFJlZ0V4cFtdO1xyXG4gIHByaXZhdGUgX2xvbmdNb250aHNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcclxuICBwcml2YXRlIF9zaG9ydE1vbnRoc1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xyXG4gIHByaXZhdGUgX21vbnRoc1BhcnNlRXhhY3Q6IFJlZ0V4cDtcclxuICBwcml2YXRlIF93ZWVrZGF5c1BhcnNlRXhhY3Q6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnRSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzTWluUmVnZXg6IFJlZ0V4cDtcclxuXHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNTdHJpY3RSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzTWluU3RyaWN0UmVnZXg6IFJlZ0V4cDtcclxuXHJcbiAgcHJpdmF0ZSBfd2Vla2RheXM6IExvY2FsZU9wdGlvbnM7XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNTaG9ydDogc3RyaW5nW107XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNNaW46IHN0cmluZ1tdO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XHJcbiAgcHJpdmF0ZSBfbWluV2Vla2RheXNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcclxuICBwcml2YXRlIF9zaG9ydFdlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XHJcbiAgcHJpdmF0ZSBfZnVsbFdlZWtkYXlzUGFyc2U6IFJlZ0V4cFtdO1xyXG4gIHByaXZhdGUgX2xvbmdEYXRlRm9ybWF0OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG5cclxuICBwcml2YXRlIF9vcmRpbmFsOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogTG9jYWxlRGF0YSkge1xyXG4gICAgaWYgKCEhY29uZmlnKSB7XHJcbiAgICAgIHRoaXMuc2V0KGNvbmZpZyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXQoY29uZmlnOiBMb2NhbGVEYXRhKTogdm9pZCB7XHJcbiAgICBsZXQgY29uZktleTtcclxuICAgIGZvciAoY29uZktleSBpbiBjb25maWcpIHtcclxuICAgICAgaWYgKCFjb25maWcuaGFzT3duUHJvcGVydHkoY29uZktleSkpIHtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBwcm9wID0gY29uZmlnW2NvbmZLZXkgYXMga2V5b2YgTG9jYWxlRGF0YV07XHJcbiAgICAgIGNvbnN0IGtleSA9IChpc0Z1bmN0aW9uKHByb3ApID8gY29uZktleSA6IGBfJHtjb25mS2V5fWApIGFzIGtleW9mIExvY2FsZTtcclxuXHJcbiAgICAgIHRoaXNba2V5XSA9IHByb3AgYXMgYW55O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcclxuICB9XHJcblxyXG4gIGNhbGVuZGFyKGtleTogc3RyaW5nLCBkYXRlOiBEYXRlLCBub3c6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5fY2FsZW5kYXJba2V5XSB8fCB0aGlzLl9jYWxlbmRhci5zYW1lRWxzZTtcclxuXHJcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvdXRwdXQpID8gb3V0cHV0LmNhbGwobnVsbCwgZGF0ZSwgbm93KSA6IG91dHB1dDtcclxuICB9XHJcblxyXG4gIGxvbmdEYXRlRm9ybWF0KGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xyXG4gICAgY29uc3QgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XHJcblxyXG4gICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcclxuICAgICAgcmV0dXJuIGZvcm1hdDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldID0gZm9ybWF0VXBwZXIucmVwbGFjZSgvTU1NTXxNTXxERHxkZGRkL2csIGZ1bmN0aW9uICh2YWw6IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gdmFsLnNsaWNlKDEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XHJcbiAgfVxyXG5cclxuICBnZXQgaW52YWxpZERhdGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnZhbGlkRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBpbnZhbGlkRGF0ZSh2YWw6IHN0cmluZykge1xyXG4gICAgdGhpcy5faW52YWxpZERhdGUgPSB2YWw7XHJcbiAgfVxyXG5cclxuICBvcmRpbmFsKG51bTogbnVtYmVyLCB0b2tlbj86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3JkaW5hbC5yZXBsYWNlKCclZCcsIG51bS50b1N0cmluZygxMCkpO1xyXG4gIH1cclxuXHJcbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBzdHI7XHJcbiAgfVxyXG5cclxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgcmVsYXRpdmVUaW1lKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBzdHI6ICdmdXR1cmUnIHwgJ3Bhc3QnLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbc3RyXTtcclxuXHJcbiAgICByZXR1cm4gKGlzRnVuY3Rpb24ob3V0cHV0KSkgP1xyXG4gICAgICBvdXRwdXQobnVtLCB3aXRob3V0U3VmZml4LCBzdHIsIGlzRnV0dXJlKSA6XHJcbiAgICAgIG91dHB1dC5yZXBsYWNlKC8lZC9pLCBudW0udG9TdHJpbmcoMTApKTtcclxuICB9XHJcblxyXG4gIHBhc3RGdXR1cmUoZGlmZjogbnVtYmVyLCBvdXRwdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9yZWxhdGl2ZVRpbWVbZGlmZiA+IDAgPyAnZnV0dXJlJyA6ICdwYXN0J107XHJcblxyXG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oZm9ybWF0KSA/IGZvcm1hdChvdXRwdXQpIDogZm9ybWF0LnJlcGxhY2UoLyVzL2ksIG91dHB1dCk7XHJcbiAgfVxyXG5cclxuICAvKiogTW9udGhzICovXHJcbiAgbW9udGhzKCk6IHN0cmluZ1tdO1xyXG4gIG1vbnRocyhkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcclxuICBtb250aHMoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEMgPSBmYWxzZSk6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRocylcclxuICAgICAgICA/IHRoaXMuX21vbnRoc1xyXG4gICAgICAgIDogdGhpcy5fbW9udGhzLnN0YW5kYWxvbmU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHMpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBrZXkgPSAodGhpcy5fbW9udGhzLmlzRm9ybWF0IHx8IE1PTlRIU19JTl9GT1JNQVQpLnRlc3QoZm9ybWF0KVxyXG4gICAgICA/ICdmb3JtYXQnXHJcbiAgICAgIDogJ3N0YW5kYWxvbmUnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9tb250aHNba2V5XVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gIH1cclxuXHJcbiAgbW9udGhzU2hvcnQoKTogc3RyaW5nW107XHJcbiAgbW9udGhzU2hvcnQoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gIG1vbnRoc1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHNTaG9ydClcclxuICAgICAgICA/IHRoaXMuX21vbnRoc1Nob3J0XHJcbiAgICAgICAgOiB0aGlzLl9tb250aHNTaG9ydC5zdGFuZGFsb25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzU2hvcnQpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfVxyXG4gICAgY29uc3Qga2V5ID0gTU9OVEhTX0lOX0ZPUk1BVC50ZXN0KGZvcm1hdCkgPyAnZm9ybWF0JyA6ICdzdGFuZGFsb25lJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRba2V5XVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gIH1cclxuXHJcbiAgbW9udGhzUGFyc2UobW9udGhOYW1lOiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBsZXQgZGF0ZTtcclxuICAgIGxldCByZWdleDtcclxuXHJcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVNb250aFN0cmljdFBhcnNlKG1vbnRoTmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fbW9udGhzUGFyc2UpIHtcclxuICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBhZGQgc29ydGluZ1xyXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSBtb250aCAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlclxyXG4gICAgLy8gc2VlIHNvcnRpbmcgaW4gY29tcHV0ZU1vbnRoc1BhcnNlXHJcbiAgICBsZXQgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxyXG4gICAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgaSkpO1xyXG4gICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0pIHtcclxuICAgICAgICBjb25zdCBfbW9udGhzID0gdGhpcy5tb250aHMoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnJyk7XHJcbiAgICAgICAgY29uc3QgX3Nob3J0TW9udGhzID0gdGhpcy5tb250aHNTaG9ydChkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICcnKTtcclxuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHtfbW9udGhzfSRgLCAnaScpO1xyXG4gICAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHtfc2hvcnRNb250aHN9JGAsICdpJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFzdHJpY3QgJiYgIXRoaXMuX21vbnRoc1BhcnNlW2ldKSB7XHJcbiAgICAgICAgcmVnZXggPSBgXiR7dGhpcy5tb250aHMoZGF0ZSwgJycsIHRydWUpfXxeJHt0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnLCB0cnVlKX1gO1xyXG4gICAgICAgIHRoaXMuX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XHJcbiAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnTU1NTScgJiYgKHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSBhcyBSZWdFeHApLnRlc3QobW9udGhOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTScgJiYgKHRoaXMuX3Nob3J0TW9udGhzUGFyc2VbaV0gYXMgUmVnRXhwKS50ZXN0KG1vbnRoTmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFzdHJpY3QgJiYgdGhpcy5fbW9udGhzUGFyc2VbaV0udGVzdChtb250aE5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1vbnRoc1JlZ2V4KGlzU3RyaWN0OiBib29sZWFuKTogUmVnRXhwIHtcclxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVNb250aHNQYXJzZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1JlZ2V4O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcclxuICAgICAgdGhpcy5fbW9udGhzUmVnZXggPSBkZWZhdWx0TW9udGhzUmVnZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cclxuICAgICAgdGhpcy5fbW9udGhzU3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNSZWdleDtcclxuICB9XHJcblxyXG4gIG1vbnRoc1Nob3J0UmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pOiBSZWdFeHAge1xyXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzUmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZU1vbnRoc1BhcnNlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGlzU3RyaWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xyXG4gICAgfVxyXG4gICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfbW9udGhzU2hvcnRSZWdleCcpKSB7XHJcbiAgICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSBkZWZhdWx0TW9udGhzU2hvcnRSZWdleDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XHJcbiAgICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl9tb250aHNTaG9ydFJlZ2V4O1xyXG4gIH1cclxuXHJcbiAgLyoqIFdlZWsgKi9cclxuICB3ZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCB0aGlzLl93ZWVrLmRvdywgdGhpcy5fd2Vlay5kb3ksIGlzVVRDKS53ZWVrO1xyXG4gIH1cclxuXHJcbiAgZmlyc3REYXlPZldlZWsoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl93ZWVrLmRvdztcclxuICB9XHJcblxyXG4gIGZpcnN0RGF5T2ZZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3k7XHJcbiAgfVxyXG5cclxuICAvKiogRGF5IG9mIFdlZWsgKi9cclxuICB3ZWVrZGF5cygpOiBzdHJpbmdbXTtcclxuICB3ZWVrZGF5cyhkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcclxuICB3ZWVrZGF5cyhkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl93ZWVrZGF5cylcclxuICAgICAgICA/IHRoaXMuX3dlZWtkYXlzXHJcbiAgICAgICAgOiB0aGlzLl93ZWVrZGF5cy5zdGFuZGFsb25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1tnZXREYXkoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfa2V5ID0gdGhpcy5fd2Vla2RheXMuaXNGb3JtYXQudGVzdChmb3JtYXQpXHJcbiAgICAgID8gJ2Zvcm1hdCdcclxuICAgICAgOiAnc3RhbmRhbG9uZSc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzW19rZXldW2dldERheShkYXRlLCBpc1VUQyldO1xyXG4gIH1cclxuXHJcbiAgd2Vla2RheXNNaW4oKTogc3RyaW5nW107XHJcbiAgd2Vla2RheXNNaW4oZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgd2Vla2RheXNNaW4oZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLl93ZWVrZGF5c01pbltnZXREYXkoZGF0ZSwgaXNVVEMpXSA6IHRoaXMuX3dlZWtkYXlzTWluO1xyXG4gIH1cclxuXHJcbiAgd2Vla2RheXNTaG9ydCgpOiBzdHJpbmdbXTtcclxuICB3ZWVrZGF5c1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gIHdlZWtkYXlzU2hvcnQoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIGRhdGUgPyB0aGlzLl93ZWVrZGF5c1Nob3J0W2dldERheShkYXRlLCBpc1VUQyldIDogdGhpcy5fd2Vla2RheXNTaG9ydDtcclxuICB9XHJcblxyXG5cclxuICAvLyBwcm90by53ZWVrZGF5c1BhcnNlICA9ICAgICAgICBsb2NhbGVXZWVrZGF5c1BhcnNlO1xyXG4gIHdlZWtkYXlzUGFyc2Uod2Vla2RheU5hbWU/OiBzdHJpbmcsIGZvcm1hdD86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBsZXQgaTtcclxuICAgIGxldCByZWdleDtcclxuXHJcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVdlZWtTdHJpY3RQYXJzZSh3ZWVrZGF5TmFtZSwgZm9ybWF0LCBzdHJpY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5fd2Vla2RheXNQYXJzZSkge1xyXG4gICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcclxuICAgICAgLy8gZml4OiBoZXJlIGlzIHRoZSBpc3N1ZVxyXG4gICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgIGlmIChzdHJpY3QgJiYgIXRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldKSB7XHJcbiAgICAgICAgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcclxuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnXFwuPycpfSRgLCAnaScpO1xyXG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKGBeJHt0aGlzLndlZWtkYXlzTWluKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2VbaV0pIHtcclxuICAgICAgICByZWdleCA9IGBeJHt0aGlzLndlZWtkYXlzKGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy53ZWVrZGF5c01pbihkYXRlLCAnJywgdHJ1ZSl9YDtcclxuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChyZWdleC5yZXBsYWNlKCcuJywgJycpLCAnaScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSlcclxuICAgICAgICB8fCAhaXNBcnJheTxSZWdFeHA+KHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSlcclxuICAgICAgICB8fCAhaXNBcnJheTxSZWdFeHA+KHRoaXMuX21pbldlZWtkYXlzUGFyc2UpXHJcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl93ZWVrZGF5c1BhcnNlKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdGVzdCB0aGUgcmVnZXhcclxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGRkJyAmJiB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZGQnICYmIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9IGVsc2UgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdkZCcgJiYgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9IGVsc2UgaWYgKCFzdHJpY3QgJiYgdGhpcy5fd2Vla2RheXNQYXJzZVtpXS50ZXN0KHdlZWtkYXlOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcm90by53ZWVrZGF5c1JlZ2V4ICAgICAgID0gICAgICAgIHdlZWtkYXlzUmVnZXg7XHJcbiAgd2Vla2RheXNSZWdleChpc1N0cmljdDogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVXZWVrZGF5c1BhcnNlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c1JlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbWF0Y2hXb3JkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzUmVnZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBwcm90by53ZWVrZGF5c1Nob3J0UmVnZXggID0gICAgICAgIHdlZWtkYXlzU2hvcnRSZWdleDtcclxuICAvLyBwcm90by53ZWVrZGF5c01pblJlZ2V4ICAgID0gICAgICAgIHdlZWtkYXlzTWluUmVnZXg7XHJcblxyXG5cclxuICB3ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3Q/OiBib29sZWFuKTogUmVnRXhwIHtcclxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNTaG9ydFJlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXggPSBtYXRjaFdvcmQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRTdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3Q/OiBib29sZWFuKTogUmVnRXhwIHtcclxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblN0cmljdFJlZ2V4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ193ZWVrZGF5c01pblJlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gbWF0Y2hXb3JkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA6IHRoaXMuX3dlZWtkYXlzTWluUmVnZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1BNKGlucHV0OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIC8vIElFOCBRdWlya3MgTW9kZSAmIElFNyBTdGFuZGFyZHMgTW9kZSBkbyBub3QgYWxsb3cgYWNjZXNzaW5nIHN0cmluZ3MgbGlrZSBhcnJheXNcclxuICAgIC8vIFVzaW5nIGNoYXJBdCBzaG91bGQgYmUgbW9yZSBjb21wYXRpYmxlLlxyXG4gICAgcmV0dXJuIGlucHV0LnRvTG93ZXJDYXNlKCkuY2hhckF0KDApID09PSAncCc7XHJcbiAgfVxyXG5cclxuICBtZXJpZGllbShob3VyczogbnVtYmVyLCBtaW51dGVzOiBudW1iZXIsIGlzTG93ZXI6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgaWYgKGhvdXJzID4gMTEpIHtcclxuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAncG0nIDogJ1BNJztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNMb3dlciA/ICdhbScgOiAnQU0nO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0TG9uZ0RhdGUoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXQgPyB0aGlzLl9sb25nRGF0ZUZvcm1hdCA6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdDtcclxuICAgIGNvbnN0IGZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleV07XHJcbiAgICBjb25zdCBmb3JtYXRVcHBlciA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0W2tleS50b1VwcGVyQ2FzZSgpXTtcclxuXHJcbiAgICBpZiAoZm9ybWF0IHx8ICFmb3JtYXRVcHBlcikge1xyXG4gICAgICByZXR1cm4gZm9ybWF0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xvbmdEYXRlRm9ybWF0W1xyXG4gICAgICBrZXlcclxuICAgICAgXSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCAodmFsOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVNb250aFN0cmljdFBhcnNlKG1vbnRoTmFtZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbikge1xyXG4gICAgY29uc3QgbGxjID0gbW9udGhOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBsZXQgaTtcclxuICAgIGxldCBpaTtcclxuICAgIGxldCBtb207XHJcbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XHJcbiAgICAgIC8vIHRoaXMgaXMgbm90IHVzZWRcclxuICAgICAgdGhpcy5fbW9udGhzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcclxuICAgICAgZm9yIChpID0gMDsgaSA8IDEyOyArK2kpIHtcclxuICAgICAgICBtb20gPSBuZXcgRGF0ZSgyMDAwLCBpKTtcclxuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gdGhpcy5tb250aHNTaG9ydChtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzKG1vbSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RyaWN0KSB7XHJcbiAgICAgIGlmIChmb3JtYXQgPT09ICdNTU0nKSB7XHJcbiAgICAgICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xyXG4gICAgICBpaSA9ICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XHJcbiAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlpID0gKHRoaXMuX2xvbmdNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBpaSA9ICh0aGlzLl9sb25nTW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcclxuICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgcmV0dXJuIGlpO1xyXG4gICAgfVxyXG4gICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVdlZWtTdHJpY3RQYXJzZSh3ZWVrZGF5TmFtZTogc3RyaW5nLCBmb3JtYXQ6IHN0cmluZywgc3RyaWN0OiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIGxldCBpaTtcclxuICAgIGNvbnN0IGxsYyA9IHdlZWtkYXlOYW1lLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcclxuICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZSA9IFtdO1xyXG5cclxuICAgICAgbGV0IGk7XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCA3OyArK2kpIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fbWluV2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXNNaW4oZGF0ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSkudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLl93ZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5cyhkYXRlLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzUGFyc2UpXHJcbiAgICAgIHx8ICFpc0FycmF5PHN0cmluZz4odGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlKVxyXG4gICAgICB8fCAhaXNBcnJheTxzdHJpbmc+KHRoaXMuX21pbldlZWtkYXlzUGFyc2UpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc3RyaWN0KSB7XHJcbiAgICAgIGlmIChmb3JtYXQgPT09ICdkZGRkJykge1xyXG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xyXG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcclxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgfSBlbHNlIGlmIChmb3JtYXQgPT09ICdkZGQnKSB7XHJcbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY29tcHV0ZU1vbnRoc1BhcnNlKCkge1xyXG4gICAgY29uc3Qgc2hvcnRQaWVjZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdCBsb25nUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3QgbWl4ZWRQaWVjZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBsZXQgZGF0ZTtcclxuXHJcbiAgICBsZXQgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxyXG4gICAgICBkYXRlID0gbmV3IERhdGUoMjAwMCwgaSk7XHJcbiAgICAgIHNob3J0UGllY2VzLnB1c2godGhpcy5tb250aHNTaG9ydChkYXRlLCAnJykpO1xyXG4gICAgICBsb25nUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcclxuICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRocyhkYXRlLCAnJykpO1xyXG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycpKTtcclxuICAgIH1cclxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXIgaXRcclxuICAgIC8vIHdpbGwgbWF0Y2ggdGhlIGxvbmdlciBwaWVjZS5cclxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgc2hvcnRQaWVjZXNbaV0gPSByZWdleEVzY2FwZShzaG9ydFBpZWNlc1tpXSk7XHJcbiAgICAgIGxvbmdQaWVjZXNbaV0gPSByZWdleEVzY2FwZShsb25nUGllY2VzW2ldKTtcclxuICAgIH1cclxuICAgIGZvciAoaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcbiAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21peGVkUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcclxuICAgIHRoaXMuX21vbnRoc1Nob3J0UmVnZXggPSB0aGlzLl9tb250aHNSZWdleDtcclxuICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke2xvbmdQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xyXG4gICAgdGhpcy5fbW9udGhzU2hvcnRTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtzaG9ydFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVXZWVrZGF5c1BhcnNlKCkge1xyXG4gICAgY29uc3QgbWluUGllY2VzID0gW107XHJcbiAgICBjb25zdCBzaG9ydFBpZWNlcyA9IFtdO1xyXG4gICAgY29uc3QgbG9uZ1BpZWNlcyA9IFtdO1xyXG4gICAgY29uc3QgbWl4ZWRQaWVjZXMgPSBbXTtcclxuXHJcbiAgICBsZXQgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XHJcbiAgICAgIC8vIGxldCBtb20gPSBjcmVhdGVVVEMoWzIwMDAsIDFdKS5kYXkoaSk7XHJcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXREYXlPZldlZWsobmV3IERhdGUoRGF0ZS5VVEMoMjAwMCwgMSkpLCBpLCBudWxsLCB0cnVlKTtcclxuICAgICAgY29uc3QgbWlucCA9IHRoaXMud2Vla2RheXNNaW4oZGF0ZSk7XHJcbiAgICAgIGNvbnN0IHNob3J0cCA9IHRoaXMud2Vla2RheXNTaG9ydChkYXRlKTtcclxuICAgICAgY29uc3QgbG9uZ3AgPSB0aGlzLndlZWtkYXlzKGRhdGUpO1xyXG4gICAgICBtaW5QaWVjZXMucHVzaChtaW5wKTtcclxuICAgICAgc2hvcnRQaWVjZXMucHVzaChzaG9ydHApO1xyXG4gICAgICBsb25nUGllY2VzLnB1c2gobG9uZ3ApO1xyXG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKG1pbnApO1xyXG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKHNob3J0cCk7XHJcbiAgICAgIG1peGVkUGllY2VzLnB1c2gobG9uZ3ApO1xyXG4gICAgfVxyXG4gICAgLy8gU29ydGluZyBtYWtlcyBzdXJlIGlmIG9uZSB3ZWVrZGF5IChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XHJcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXHJcbiAgICBtaW5QaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgc2hvcnRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgbG9uZ1BpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICBtaXhlZFBpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xyXG4gICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XHJcbiAgICAgIG1peGVkUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobWl4ZWRQaWVjZXNbaV0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3dlZWtkYXlzUmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWl4ZWRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xyXG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcclxuICAgIHRoaXMuX3dlZWtkYXlzTWluUmVnZXggPSB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xyXG5cclxuICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bG9uZ1BpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XHJcbiAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7c2hvcnRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xyXG4gICAgdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaW5QaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY21wTGVuUmV2KGE6IHN0cmluZywgYjogc3RyaW5nKTogbnVtYmVyIHtcclxuICByZXR1cm4gYi5sZW5ndGggLSBhLmxlbmd0aDtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZGVmYXVsdENhbGVuZGFyID0ge1xyXG4gIHNhbWVEYXk6ICdbVG9kYXkgYXRdIExUJyxcclxuICBuZXh0RGF5OiAnW1RvbW9ycm93IGF0XSBMVCcsXHJcbiAgbmV4dFdlZWs6ICdkZGRkIFthdF0gTFQnLFxyXG4gIGxhc3REYXk6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXHJcbiAgbGFzdFdlZWs6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcclxuICBzYW1lRWxzZTogJ0wnXHJcbn07XHJcbiIsImltcG9ydCB7XHJcbiAgZGVmYXVsdERheU9mTW9udGhPcmRpbmFsUGFyc2UsXHJcbiAgZGVmYXVsdExvY2FsZU1vbnRocyxcclxuICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXHJcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxyXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5c01pbixcclxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCwgZGVmYXVsdExvbmdEYXRlRm9ybWF0LCBkZWZhdWx0T3JkaW5hbCxcclxuICBMb2NhbGVEYXRhXHJcbn0gZnJvbSAnLi9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBkZWZhdWx0Q2FsZW5kYXIgfSBmcm9tICcuL2NhbGVuZGFyJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0SW52YWxpZERhdGUgPSAnSW52YWxpZCBkYXRlJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2VlayA9IHtcclxuICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gIGRveTogNiAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1lcmlkaWVtUGFyc2UgPSAvW2FwXVxcLj9tP1xcLj8vaTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0UmVsYXRpdmVUaW1lOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICBmdXR1cmUgOiAnaW4gJXMnLFxyXG4gIHBhc3QgICA6ICclcyBhZ28nLFxyXG4gIHMgIDogJ2EgZmV3IHNlY29uZHMnLFxyXG4gIHNzIDogJyVkIHNlY29uZHMnLFxyXG4gIG0gIDogJ2EgbWludXRlJyxcclxuICBtbSA6ICclZCBtaW51dGVzJyxcclxuICBoICA6ICdhbiBob3VyJyxcclxuICBoaCA6ICclZCBob3VycycsXHJcbiAgZCAgOiAnYSBkYXknLFxyXG4gIGRkIDogJyVkIGRheXMnLFxyXG4gIE0gIDogJ2EgbW9udGgnLFxyXG4gIE1NIDogJyVkIG1vbnRocycsXHJcbiAgeSAgOiAnYSB5ZWFyJyxcclxuICB5eSA6ICclZCB5ZWFycydcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBiYXNlQ29uZmlnOiBMb2NhbGVEYXRhID0ge1xyXG4gIGNhbGVuZGFyOiBkZWZhdWx0Q2FsZW5kYXIsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IGRlZmF1bHRMb25nRGF0ZUZvcm1hdCxcclxuICBpbnZhbGlkRGF0ZTogZGVmYXVsdEludmFsaWREYXRlLFxyXG4gIG9yZGluYWw6IGRlZmF1bHRPcmRpbmFsLFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxyXG4gIHJlbGF0aXZlVGltZTogZGVmYXVsdFJlbGF0aXZlVGltZSxcclxuXHJcbiAgbW9udGhzOiBkZWZhdWx0TG9jYWxlTW9udGhzLFxyXG4gIG1vbnRoc1Nob3J0OiBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQsXHJcblxyXG4gIHdlZWs6IGRlZmF1bHRMb2NhbGVXZWVrLFxyXG5cclxuICB3ZWVrZGF5czogZGVmYXVsdExvY2FsZVdlZWtkYXlzLFxyXG4gIHdlZWtkYXlzTWluOiBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXHJcbiAgd2Vla2RheXNTaG9ydDogZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsXHJcblxyXG4gIG1lcmlkaWVtUGFyc2U6IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlXHJcbn07XHJcbiIsIi8vIGNvbXBhcmUgdHdvIGFycmF5cywgcmV0dXJuIHRoZSBudW1iZXIgb2YgZGlmZmVyZW5jZXNcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuL3R5cGUtY2hlY2tzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlQXJyYXlzPFQ+KGFycmF5MTogVFtdLCBhcnJheTI6IFRbXSwgZG9udENvbnZlcnQ6IGJvb2xlYW4pIHtcclxuICBjb25zdCBsZW4gPSBNYXRoLm1pbihhcnJheTEubGVuZ3RoLCBhcnJheTIubGVuZ3RoKTtcclxuICBjb25zdCBsZW5ndGhEaWZmID0gTWF0aC5hYnMoYXJyYXkxLmxlbmd0aCAtIGFycmF5Mi5sZW5ndGgpO1xyXG4gIGxldCBkaWZmcyA9IDA7XHJcbiAgbGV0IGk7XHJcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICBpZiAoKGRvbnRDb252ZXJ0ICYmIGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKVxyXG4gICAgICB8fCAoIWRvbnRDb252ZXJ0ICYmIHRvSW50KGFycmF5MVtpXSkgIT09IHRvSW50KGFycmF5MltpXSkpKSB7XHJcbiAgICAgIGRpZmZzKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGlmZnMgKyBsZW5ndGhEaWZmO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyB3ZWVrT2ZZZWFyIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcclxuXHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0V2VlaygpIHtcclxuICBhZGRGb3JtYXRUb2tlbigndycsIFsnd3cnLCAyLCBmYWxzZV0sICd3bycsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRXZWVrKGRhdGUsIG9wdHMubG9jYWxlKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ1cnLCBbJ1dXJywgMiwgZmFsc2VdLCAnV28nLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRJU09XZWVrKGRhdGUpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ3dlZWsnLCAndycpO1xyXG4gIGFkZFVuaXRBbGlhcygnaXNvV2VlaycsICdXJyk7XHJcblxyXG4vLyBQUklPUklUSUVTXHJcblxyXG4gIGFkZFVuaXRQcmlvcml0eSgnd2VlaycsIDUpO1xyXG4gIGFkZFVuaXRQcmlvcml0eSgnaXNvV2VlaycsIDUpO1xyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCd3JywgbWF0Y2gxdG8yKTtcclxuICBhZGRSZWdleFRva2VuKCd3dycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICBhZGRSZWdleFRva2VuKCdXJywgbWF0Y2gxdG8yKTtcclxuICBhZGRSZWdleFRva2VuKCdXVycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuXHJcbiAgYWRkV2Vla1BhcnNlVG9rZW4oXHJcbiAgICBbJ3cnLCAnd3cnLCAnVycsICdXVyddLFxyXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICAgIHdlZWtbdG9rZW4uc3Vic3RyKDAsIDEpXSA9IHRvSW50KGlucHV0KTtcclxuXHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTZXRXZWVrIChpbnB1dCkge1xyXG4vLyAgIHZhciB3ZWVrID0gdGhpcy5sb2NhbGVEYXRhKCkud2Vlayh0aGlzKTtcclxuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XHJcbi8vIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFdlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgbG9jYWxlID0gZ2V0TG9jYWxlKCkpOiBEYXRlIHtcclxuICBjb25zdCB3ZWVrID0gZ2V0V2VlayhkYXRlLCBsb2NhbGUpO1xyXG5cclxuICByZXR1cm4gYWRkKGRhdGUsIChpbnB1dCAtIHdlZWspICogNywgJ2RheScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VlayhkYXRlOiBEYXRlLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICByZXR1cm4gbG9jYWxlLndlZWsoZGF0ZSwgaXNVVEMpO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2VlayAoaW5wdXQpIHtcclxuLy8gICB2YXIgd2VlayA9IHdlZWtPZlllYXIodGhpcywgMSwgNCkud2VlaztcclxuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbCA/IHdlZWsgOiB0aGlzLmFkZCgoaW5wdXQgLSB3ZWVrKSAqIDcsICdkJyk7XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRJU09XZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIpOiBEYXRlIHtcclxuICBjb25zdCB3ZWVrID0gZ2V0SVNPV2VlayhkYXRlKTtcclxuXHJcbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSB3ZWVrKSAqIDcsICdkYXknKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCAxLCA0LCBpc1VUQykud2VlaztcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcclxuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDF0bzQsIG1hdGNoMXRvNiwgbWF0Y2gyLCBtYXRjaDQsIG1hdGNoNiwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFdlZWtQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgcGFyc2VUd29EaWdpdFllYXIgfSBmcm9tICcuL3llYXInO1xyXG5pbXBvcnQgeyBkYXlPZlllYXJGcm9tV2Vla3MsIHdlZWtPZlllYXIsIHdlZWtzSW5ZZWFyIH0gZnJvbSAnLi93ZWVrLWNhbGVuZGFyLXV0aWxzJztcclxuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBnZXRJU09XZWVrLCBnZXRXZWVrIH0gZnJvbSAnLi93ZWVrJztcclxuaW1wb3J0IHsgZ2V0SVNPRGF5T2ZXZWVrLCBnZXRMb2NhbGVEYXlPZldlZWsgfSBmcm9tICcuL2RheS1vZi13ZWVrJztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBzZXREYXRlLCBzZXRGdWxsWWVhciwgc2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xyXG5pbXBvcnQgeyBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlckZuLCBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlZWtZZWFyKCkge1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnZ2cnLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy53ZWVrWWVhcigpICUgMTAwO1xyXG4gICAgICByZXR1cm4gKGdldFdlZWtZZWFyKGRhdGUsIG9wdHMubG9jYWxlKSAlIDEwMCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ0dHJywgMiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICAvLyByZXR1cm4gdGhpcy5pc29XZWVrWWVhcigpICUgMTAwO1xyXG4gICAgICByZXR1cm4gKGdldElTT1dlZWtZZWFyKGRhdGUpICUgMTAwKS50b1N0cmluZygpO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2cnLCBfZ2V0V2Vla1llYXJGb3JtYXRDYik7XHJcbiAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignZ2dnZ2cnLCBfZ2V0V2Vla1llYXJGb3JtYXRDYik7XHJcbiAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHRycsIF9nZXRJU09XZWVrWWVhckZvcm1hdENiKTtcclxuICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdHR0dHRycsIF9nZXRJU09XZWVrWWVhckZvcm1hdENiKTtcclxuXHJcbi8vIEFMSUFTRVNcclxuXHJcbiAgYWRkVW5pdEFsaWFzKCd3ZWVrWWVhcicsICdnZycpO1xyXG4gIGFkZFVuaXRBbGlhcygnaXNvV2Vla1llYXInLCAnR0cnKTtcclxuXHJcbi8vIFBSSU9SSVRZXHJcblxyXG4gIGFkZFVuaXRQcmlvcml0eSgnd2Vla1llYXInLCAxKTtcclxuICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtZZWFyJywgMSk7XHJcblxyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdHJywgbWF0Y2hTaWduZWQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2cnLCBtYXRjaFNpZ25lZCk7XHJcbiAgYWRkUmVnZXhUb2tlbignR0cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignZ2cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignR0dHRycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcclxuICBhZGRSZWdleFRva2VuKCdnZ2dnJywgbWF0Y2gxdG80LCBtYXRjaDQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0dHR0dHJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2dnZ2dnJywgbWF0Y2gxdG82LCBtYXRjaDYpO1xyXG5cclxuICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnZ2cnLCAnZ2dnZ2cnLCAnR0dHRycsICdHR0dHRyddLFxyXG4gICAgZnVuY3Rpb24gKGlucHV0LCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnLCB0b2tlbikge1xyXG4gICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAyKV0gPSB0b0ludChpbnB1dCk7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfSk7XHJcblxyXG4gIGFkZFdlZWtQYXJzZVRva2VuKFsnZ2cnLCAnR0cnXSwgZnVuY3Rpb24gKGlucHV0LCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnLCB0b2tlbikge1xyXG4gICAgd2Vla1t0b2tlbl0gPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkV2Vla1llYXJGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLCBnZXR0ZXI6IERhdGVGb3JtYXR0ZXJGbik6IHZvaWQge1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFt0b2tlbiwgdG9rZW4ubGVuZ3RoLCBmYWxzZV0sIG51bGwsIGdldHRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRXZWVrWWVhckZvcm1hdENiKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICByZXR1cm4gZ2V0V2Vla1llYXIoZGF0ZSwgb3B0cy5sb2NhbGUpLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9nZXRJU09XZWVrWWVhckZvcm1hdENiKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gIHJldHVybiBnZXRJU09XZWVrWWVhcihkYXRlKS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vLyBNT01FTlRTXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2Vla1llYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xyXG4gIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlLFxyXG4gICAgaW5wdXQsXHJcbiAgICAvLyB0aGlzLndlZWsoKSxcclxuICAgIGdldFdlZWsoZGF0ZSwgbG9jYWxlLCBpc1VUQyksXHJcbiAgICAvLyB0aGlzLndlZWtkYXkoKSxcclxuICAgIGdldExvY2FsZURheU9mV2VlayhkYXRlLCBsb2NhbGUsIGlzVVRDKSxcclxuICAgIGxvY2FsZS5maXJzdERheU9mV2VlaygpLFxyXG4gICAgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCksXHJcbiAgICBpc1VUQyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrWWVhcihkYXRlOiBEYXRlLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSwgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCksIGlzVVRDKS55ZWFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0SVNPV2Vla1llYXIoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHwgRGF0ZSB7XHJcbiAgcmV0dXJuIGdldFNldFdlZWtZZWFySGVscGVyKGRhdGUsIGlucHV0LCBnZXRJU09XZWVrKGRhdGUsIGlzVVRDKSwgZ2V0SVNPRGF5T2ZXZWVrKGRhdGUsIGlzVVRDKSwgMSwgNCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gIHJldHVybiB3ZWVrT2ZZZWFyKGRhdGUsIDEsIDQsIGlzVVRDKS55ZWFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla3NJblllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIHdlZWtzSW5ZZWFyKGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKSwgMSwgNCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWVrc0luWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCkpOiBudW1iZXIge1xyXG4gIHJldHVybiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIGxvY2FsZS5maXJzdERheU9mV2VlaygpLCBsb2NhbGUuZmlyc3REYXlPZlllYXIoKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNldFdlZWtZZWFySGVscGVyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIHdlZWs6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Vla2RheTogbnVtYmVyLCBkb3c6IG51bWJlciwgZG95OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xyXG4gIGlmICghaW5wdXQpIHtcclxuICAgIHJldHVybiBnZXRXZWVrWWVhcihkYXRlLCB2b2lkIDAsIGlzVVRDKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHdlZWtzVGFyZ2V0ID0gd2Vla3NJblllYXIoaW5wdXQsIGRvdywgZG95KTtcclxuICBjb25zdCBfd2VlayA9IHdlZWsgPiB3ZWVrc1RhcmdldCA/IHdlZWtzVGFyZ2V0IDogd2VlaztcclxuXHJcbiAgcmV0dXJuIHNldFdlZWtBbGwoZGF0ZSwgaW5wdXQsIF93ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFdlZWtBbGwoZGF0ZTogRGF0ZSwgd2Vla1llYXI6IG51bWJlciwgd2VlazogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyKTogRGF0ZSB7XHJcbiAgY29uc3QgZGF5T2ZZZWFyRGF0YSA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xyXG4gIGNvbnN0IF9kYXRlID0gY3JlYXRlVVRDRGF0ZShkYXlPZlllYXJEYXRhLnllYXIsIDAsIGRheU9mWWVhckRhdGEuZGF5T2ZZZWFyKTtcclxuICBzZXRGdWxsWWVhcihkYXRlLCBnZXRGdWxsWWVhcihfZGF0ZSwgdHJ1ZSksIHRydWUpO1xyXG4gIHNldE1vbnRoKGRhdGUsIGdldE1vbnRoKF9kYXRlLCB0cnVlKSwgdHJ1ZSk7XHJcbiAgc2V0RGF0ZShkYXRlLCBnZXREYXRlKF9kYXRlLCB0cnVlKSwgdHJ1ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuLy8gdG9kbzogYWRkIHN1cHBvcnQgZm9yIHRpbWV6b25lc1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lem9uZSgpIHtcclxuICAvLyBGT1JNQVRUSU5HXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ3onLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gb3B0cy5pc1VUQyA/ICdVVEMnIDogJyc7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbignenonLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gb3B0cy5pc1VUQyA/ICdDb29yZGluYXRlZCBVbml2ZXJzYWwgVGltZScgOiAnJztcclxuICAgIH1cclxuICApO1xyXG59XHJcblxyXG4vLyBNT01FTlRTXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZUFiYnIoaXNVVEM6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gaXNVVEMgPyAnVVRDJyA6ICcnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Wm9uZU5hbWUoaXNVVEM6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gaXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgdW5peCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoU2lnbmVkLCBtYXRjaFRpbWVzdGFtcCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbn0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFRpbWVzdGFtcCgpIHtcclxuLy8gRk9STUFUVElOR1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignWCcsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHVuaXgoZGF0ZSlcclxuICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICB9KTtcclxuICBhZGRGb3JtYXRUb2tlbigneCcsIG51bGwsIG51bGwsIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGRhdGUudmFsdWVPZigpXHJcbiAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgfSk7XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ3gnLCBtYXRjaFNpZ25lZCk7XHJcbiAgYWRkUmVnZXhUb2tlbignWCcsIG1hdGNoVGltZXN0YW1wKTtcclxuXHJcbiAgYWRkUGFyc2VUb2tlbignWCcsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShwYXJzZUZsb2F0KGlucHV0KSAqIDEwMDApO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbiAgYWRkUGFyc2VUb2tlbigneCcsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSh0b0ludChpbnB1dCkpO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgZ2V0U2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyBTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0U2Vjb25kKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdzJywgWydzcycsIDIsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQylcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygnc2Vjb25kJywgJ3MnKTtcclxuXHJcbi8vIFBSSU9SSVRZXHJcblxyXG4gIGFkZFVuaXRQcmlvcml0eSgnc2Vjb25kJywgMTUpO1xyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdzJywgbWF0Y2gxdG8yKTtcclxuICBhZGRSZWdleFRva2VuKCdzcycsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICBhZGRQYXJzZVRva2VuKFsncycsICdzcyddLCBTRUNPTkQpO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMSB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgTU9OVEggfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRRdWFydGVyKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdRJywgbnVsbCwgJ1FvJyxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGdldFF1YXJ0ZXIoZGF0ZSwgb3B0cy5pc1VUQylcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygncXVhcnRlcicsICdRJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG5cclxuICBhZGRVbml0UHJpb3JpdHkoJ3F1YXJ0ZXInLCA3KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignUScsIG1hdGNoMSk7XHJcbiAgYWRkUGFyc2VUb2tlbignUScsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBhcnJheVtNT05USF0gPSAodG9JbnQoaW5wdXQpIC0gMSkgKiAzO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIE1PTUVOVFNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWFydGVyKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xyXG4gIHJldHVybiBNYXRoLmNlaWwoKGdldE1vbnRoKGRhdGUsIGlzVVRDKSArIDEpIC8gMyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRRdWFydGVyKGRhdGU6IERhdGUsIHF1YXJ0ZXI6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgcmV0dXJuIHNldE1vbnRoKGRhdGUsIChxdWFydGVyIC0gMSkgKiAzICsgZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICUgMywgaXNVVEMpO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0UXVhcnRlcihpbnB1dCkge1xyXG4vLyAgIHJldHVybiBpbnB1dCA9PSBudWxsXHJcbi8vICAgICA/IE1hdGguY2VpbCgodGhpcy5tb250aCgpICsgMSkgLyAzKVxyXG4vLyAgICAgOiB0aGlzLm1vbnRoKChpbnB1dCAtIDEpICogMyArIHRoaXMubW9udGgoKSAlIDMpO1xyXG4vLyB9XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGlzTnVtYmVyLCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoT2Zmc2V0LCBtYXRjaFNob3J0T2Zmc2V0IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xyXG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtc2V0dGVycyc7XHJcblxyXG5mdW5jdGlvbiBhZGRPZmZzZXRGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLCBzZXBhcmF0b3I6IHN0cmluZyk6IHZvaWQge1xyXG4gIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLCBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgY29uZmlnKTogc3RyaW5nIHtcclxuICAgIGxldCBvZmZzZXQgPSBnZXRVVENPZmZzZXQoZGF0ZSwge19pc1VUQzogY29uZmlnLmlzVVRDLCBfb2Zmc2V0OiBjb25maWcub2Zmc2V0fSk7XHJcbiAgICBsZXQgc2lnbiA9ICcrJztcclxuICAgIGlmIChvZmZzZXQgPCAwKSB7XHJcbiAgICAgIG9mZnNldCA9IC1vZmZzZXQ7XHJcbiAgICAgIHNpZ24gPSAnLSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNpZ24gKyB6ZXJvRmlsbCh+fihvZmZzZXQgLyA2MCksIDIpICsgc2VwYXJhdG9yICsgemVyb0ZpbGwofn4ob2Zmc2V0KSAlIDYwLCAyKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRPZmZzZXQoKSB7XHJcbiAgYWRkT2Zmc2V0Rm9ybWF0VG9rZW4oJ1onLCAnOicpO1xyXG4gIGFkZE9mZnNldEZvcm1hdFRva2VuKCdaWicsICcnKTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ1paJywgbWF0Y2hTaG9ydE9mZnNldCk7XHJcbiAgYWRkUGFyc2VUb2tlbihbJ1onLCAnWlonXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGNvbmZpZy5fdXNlVVRDID0gdHJ1ZTtcclxuICAgIGNvbmZpZy5fdHptID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaFNob3J0T2Zmc2V0LCBpbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxufVxyXG5cclxuLy8gSEVMUEVSU1xyXG5cclxuLy8gdGltZXpvbmUgY2h1bmtlclxyXG4vLyAnKzEwOjAwJyA+IFsnMTAnLCAgJzAwJ11cclxuLy8gJy0xNTMwJyAgPiBbJy0xNScsICczMCddXHJcbmNvbnN0IGNodW5rT2Zmc2V0ID0gLyhbXFwrXFwtXXxcXGRcXGQpL2dpO1xyXG5cclxuZnVuY3Rpb24gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaGVyOiBSZWdFeHAsIHN0cjogc3RyaW5nKTogbnVtYmVyIHtcclxuICBjb25zdCBtYXRjaGVzID0gKHN0ciB8fCAnJykubWF0Y2gobWF0Y2hlcik7XHJcblxyXG4gIGlmIChtYXRjaGVzID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNodW5rID0gbWF0Y2hlc1ttYXRjaGVzLmxlbmd0aCAtIDFdO1xyXG4gIGNvbnN0IHBhcnRzID0gY2h1bmsubWF0Y2goY2h1bmtPZmZzZXQpIHx8IFsnLScsICcwJywgJzAnXTtcclxuICBjb25zdCBtaW51dGVzID0gcGFyc2VJbnQocGFydHNbMV0sIDEwKSAqIDYwICsgdG9JbnQocGFydHNbMl0pO1xyXG4gIGNvbnN0IF9taW4gPSBwYXJ0c1swXSA9PT0gJysnID8gbWludXRlcyA6IC1taW51dGVzO1xyXG5cclxuICByZXR1cm4gbWludXRlcyA9PT0gMCA/IDAgOiBfbWluO1xyXG59XHJcblxyXG4vLyBSZXR1cm4gYSBtb21lbnQgZnJvbSBpbnB1dCwgdGhhdCBpcyBsb2NhbC91dGMvem9uZSBlcXVpdmFsZW50IHRvIG1vZGVsLlxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVXaXRoT2Zmc2V0KGlucHV0OiBEYXRlLCBkYXRlOiBEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xyXG4gIGlmICghY29uZmlnLl9pc1VUQykge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzID0gY2xvbmVEYXRlKGRhdGUpO1xyXG4gIC8vIHRvZG86IGlucHV0Ll9kIC0gcmVzLl9kICsgKChyZXMuX29mZnNldCB8fCAwKSAtIChpbnB1dC5fb2Zmc2V0IHx8IDApKSo2MDAwMFxyXG4gIGNvbnN0IG9mZnNldERpZmYgPSAoY29uZmlnLl9vZmZzZXQgfHwgMCkgKiA2MDAwMDtcclxuICBjb25zdCBkaWZmID0gaW5wdXQudmFsdWVPZigpIC0gcmVzLnZhbHVlT2YoKSArIG9mZnNldERpZmY7XHJcbiAgLy8gVXNlIGxvdy1sZXZlbCBhcGksIGJlY2F1c2UgdGhpcyBmbiBpcyBsb3ctbGV2ZWwgYXBpLlxyXG4gIHJlcy5zZXRUaW1lKHJlcy52YWx1ZU9mKCkgKyBkaWZmKTtcclxuICAvLyB0b2RvOiBhZGQgdGltZXpvbmUgaGFuZGxpbmdcclxuICAvLyBob29rcy51cGRhdGVPZmZzZXQocmVzLCBmYWxzZSk7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRlT2Zmc2V0KGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gIC8vIE9uIEZpcmVmb3guMjQgRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIGEgZmxvYXRpbmcgcG9pbnQuXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvcHVsbC8xODcxXHJcbiAgcmV0dXJuIC1NYXRoLnJvdW5kKGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAvIDE1KSAqIDE1O1xyXG59XHJcblxyXG4vLyBIT09LU1xyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCB3aGVuZXZlciBhIG1vbWVudCBpcyBtdXRhdGVkLlxyXG4vLyBJdCBpcyBpbnRlbmRlZCB0byBrZWVwIHRoZSBvZmZzZXQgaW4gc3luYyB3aXRoIHRoZSB0aW1lem9uZS5cclxuLy8gdG9kbzogaXQncyBmcm9tIG1vbWVudCB0aW1lem9uZXNcclxuLy8gaG9va3MudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKCkge1xyXG4vLyB9O1xyXG5cclxuLy8gTU9NRU5UU1xyXG5cclxuLy8ga2VlcExvY2FsVGltZSA9IHRydWUgbWVhbnMgb25seSBjaGFuZ2UgdGhlIHRpbWV6b25lLCB3aXRob3V0XHJcbi8vIGFmZmVjdGluZyB0aGUgbG9jYWwgaG91ci4gU28gNTozMToyNiArMDMwMCAtLVt1dGNPZmZzZXQoMiwgdHJ1ZSldLS0+XHJcbi8vIDU6MzE6MjYgKzAyMDAgSXQgaXMgcG9zc2libGUgdGhhdCA1OjMxOjI2IGRvZXNuJ3QgZXhpc3Qgd2l0aCBvZmZzZXRcclxuLy8gKzAyMDAsIHNvIHdlIGFkanVzdCB0aGUgdGltZSBhcyBuZWVkZWQsIHRvIGJlIHZhbGlkLlxyXG4vL1xyXG4vLyBLZWVwaW5nIHRoZSB0aW1lIGFjdHVhbGx5IGFkZHMvc3VidHJhY3RzIChvbmUgaG91cilcclxuLy8gZnJvbSB0aGUgYWN0dWFsIHJlcHJlc2VudGVkIHRpbWUuIFRoYXQgaXMgd2h5IHdlIGNhbGwgdXBkYXRlT2Zmc2V0XHJcbi8vIGEgc2Vjb25kIHRpbWUuIEluIGNhc2UgaXQgd2FudHMgdXMgdG8gY2hhbmdlIHRoZSBvZmZzZXQgYWdhaW5cclxuLy8gX2NoYW5nZUluUHJvZ3Jlc3MgPT0gdHJ1ZSBjYXNlLCB0aGVuIHdlIGhhdmUgdG8gYWRqdXN0LCBiZWNhdXNlXHJcbi8vIHRoZXJlIGlzIG5vIHN1Y2ggdGltZSBpbiB0aGUgZ2l2ZW4gdGltZXpvbmUuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVVENPZmZzZXQoZGF0ZTogRGF0ZSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogbnVtYmVyIHtcclxuICBjb25zdCBfb2Zmc2V0ID0gY29uZmlnLl9vZmZzZXQgfHwgMDtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5faXNVVEMgPyBfb2Zmc2V0IDogZ2V0RGF0ZU9mZnNldChkYXRlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFVUQ09mZnNldChkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyIHwgc3RyaW5nLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbiwga2VlcE1pbnV0ZXM/OiBib29sZWFuLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcclxuICBjb25zdCBvZmZzZXQgPSBjb25maWcuX29mZnNldCB8fCAwO1xyXG4gIGxldCBsb2NhbEFkanVzdDtcclxuICBsZXQgX2lucHV0ID0gaW5wdXQ7XHJcbiAgbGV0IF9kYXRlID0gZGF0ZTtcclxuXHJcbiAgaWYgKGlzU3RyaW5nKF9pbnB1dCkpIHtcclxuICAgIF9pbnB1dCA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgX2lucHV0KTtcclxuICAgIGlmIChfaW5wdXQgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIF9kYXRlO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoX2lucHV0KSAmJiBNYXRoLmFicyhfaW5wdXQpIDwgMTYgJiYgIWtlZXBNaW51dGVzKSB7XHJcbiAgICBfaW5wdXQgPSBfaW5wdXQgKiA2MDtcclxuICB9XHJcblxyXG4gIGlmICghY29uZmlnLl9pc1VUQyAmJiBrZWVwTG9jYWxUaW1lKSB7XHJcbiAgICBsb2NhbEFkanVzdCA9IGdldERhdGVPZmZzZXQoX2RhdGUpO1xyXG4gIH1cclxuICBjb25maWcuX29mZnNldCA9IF9pbnB1dDtcclxuICBjb25maWcuX2lzVVRDID0gdHJ1ZTtcclxuICBpZiAobG9jYWxBZGp1c3QgIT0gbnVsbCkge1xyXG4gICAgX2RhdGUgPSBhZGQoX2RhdGUsIGxvY2FsQWRqdXN0LCAnbWludXRlcycpO1xyXG4gIH1cclxuICBpZiAob2Zmc2V0ICE9PSBfaW5wdXQpIHtcclxuICAgIGlmICgha2VlcExvY2FsVGltZSB8fCBjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcclxuICAgICAgX2RhdGUgPSBhZGQoX2RhdGUsIF9pbnB1dCAtIG9mZnNldCwgJ21pbnV0ZXMnLCBjb25maWcuX2lzVVRDKTtcclxuICAgICAgLy8gYWRkU3VidHJhY3QodGhpcywgY3JlYXRlRHVyYXRpb24oX2lucHV0IC0gb2Zmc2V0LCAnbScpLCAxLCBmYWxzZSk7XHJcbiAgICB9IGVsc2UgaWYgKCFjb25maWcuX2NoYW5nZUluUHJvZ3Jlc3MpIHtcclxuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgLy8gdG9kbzogYWRkIHRpbWV6b25lIGhhbmRsaW5nXHJcbiAgICAgIC8vIGhvb2tzLnVwZGF0ZU9mZnNldCh0aGlzLCB0cnVlKTtcclxuICAgICAgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBfZGF0ZTtcclxufVxyXG5cclxuLypcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFpvbmUoaW5wdXQsIGtlZXBMb2NhbFRpbWUpIHtcclxuICBpZiAoaW5wdXQgIT0gbnVsbCkge1xyXG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgaW5wdXQgPSAtaW5wdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51dGNPZmZzZXQoaW5wdXQsIGtlZXBMb2NhbFRpbWUpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gLXRoaXMudXRjT2Zmc2V0KCk7XHJcbiAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9VVEMoZGF0ZTogRGF0ZSwga2VlcExvY2FsVGltZT86IGJvb2xlYW4pOiBEYXRlIHtcclxuICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIDAsIGtlZXBMb2NhbFRpbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWUoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG5cclxuICByZXR1cm4gKGdldFVUQ09mZnNldChkYXRlKSA+IGdldFVUQ09mZnNldChzZXRNb250aChjbG9uZURhdGUoZGF0ZSksIDApKVxyXG4gICAgfHwgZ2V0VVRDT2Zmc2V0KGRhdGUpID4gZ2V0VVRDT2Zmc2V0KHNldE1vbnRoKGNsb25lRGF0ZShkYXRlKSwgNSkpKTtcclxufVxyXG5cclxuLypleHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9Mb2NhbChkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4sIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKSB7XHJcbiAgaWYgKHRoaXMuX2lzVVRDKSB7XHJcbiAgICB0aGlzLnV0Y09mZnNldCgwLCBrZWVwTG9jYWxUaW1lKTtcclxuICAgIHRoaXMuX2lzVVRDID0gZmFsc2U7XHJcblxyXG4gICAgaWYgKGtlZXBMb2NhbFRpbWUpIHtcclxuICAgICAgdGhpcy5zdWJ0cmFjdChnZXREYXRlT2Zmc2V0KHRoaXMpLCAnbScpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdGhpcztcclxufSovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0T2Zmc2V0VG9QYXJzZWRPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XHJcbiAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcclxuICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgY29uZmlnLl90em0sIGZhbHNlLCB0cnVlLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgY29uc3QgdFpvbmUgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoT2Zmc2V0LCBpbnB1dCk7XHJcbiAgICBpZiAodFpvbmUgIT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIHRab25lLCBmYWxzZSwgZmFsc2UsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCAwLCB0cnVlLCBmYWxzZSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFzQWxpZ25lZEhvdXJPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ/OiBEYXRlKSB7XHJcbiAgY29uc3QgX2lucHV0ID0gaW5wdXQgPyBnZXRVVENPZmZzZXQoaW5wdXQsIHsgX2lzVVRDOiBmYWxzZSB9KSA6IDA7XHJcblxyXG4gIHJldHVybiAoZ2V0VVRDT2Zmc2V0KGRhdGUpIC0gX2lucHV0KSAlIDYwID09PSAwO1xyXG59XHJcblxyXG5cclxuLy8gREVQUkVDQVRFRFxyXG4vKmV4cG9ydCBmdW5jdGlvbiBpc0RheWxpZ2h0U2F2aW5nVGltZVNoaWZ0ZWQoKSB7XHJcbiAgaWYgKCFpc1VuZGVmaW5lZCh0aGlzLl9pc0RTVFNoaWZ0ZWQpKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYyA9IHt9O1xyXG5cclxuICBjb3B5Q29uZmlnKGMsIHRoaXMpO1xyXG4gIGMgPSBwcmVwYXJlQ29uZmlnKGMpO1xyXG5cclxuICBpZiAoYy5fYSkge1xyXG4gICAgY29uc3Qgb3RoZXIgPSBjLl9pc1VUQyA/IGNyZWF0ZVVUQyhjLl9hKSA6IGNyZWF0ZUxvY2FsKGMuX2EpO1xyXG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gdGhpcy5pc1ZhbGlkKCkgJiZcclxuICAgICAgY29tcGFyZUFycmF5cyhjLl9hLCBvdGhlci50b0FycmF5KCkpID4gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgdGhpcy5faXNEU1RTaGlmdGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcy5faXNEU1RTaGlmdGVkO1xyXG59Ki9cclxuXHJcbi8vIGluIEtocm9ub3NcclxuLypleHBvcnQgZnVuY3Rpb24gaXNMb2NhbCgpIHtcclxuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyAhdGhpcy5faXNVVEMgOiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVXRjT2Zmc2V0KCkge1xyXG4gIHJldHVybiB0aGlzLmlzVmFsaWQoKSA/IHRoaXMuX2lzVVRDIDogZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1V0YygpIHtcclxuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyAmJiB0aGlzLl9vZmZzZXQgPT09IDAgOiBmYWxzZTtcclxufSovXHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGdldE1pbnV0ZXMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgTUlOVVRFIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1pbnV0ZSgpIHtcclxuLy8gRk9STUFUVElOR1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignbScsIFsnbW0nLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ21pbnV0ZScsICdtJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG5cclxuICBhZGRVbml0UHJpb3JpdHkoJ21pbnV0ZScsIDE0KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignbScsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignbW0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUGFyc2VUb2tlbihbJ20nLCAnbW0nXSwgTUlOVVRFKTtcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlXHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbmltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMSwgbWF0Y2gxdG8zLCBtYXRjaDIsIG1hdGNoMywgbWF0Y2hVbnNpZ25lZCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgTUlMTElTRUNPTkQgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcclxuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGdldE1pbGxpc2Vjb25kcyB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNaWxsaXNlY29uZCgpIHtcclxuICBhZGRGb3JtYXRUb2tlbignUycsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAofn4oZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpIC8gMTAwKSkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1MnLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAofn4oZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpIC8gMTApKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1MnLCAzLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1MnLCA0LCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTApLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1MnLCA1LCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTUycsIDYsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTU1MnLCA3LCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDApLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTU1MnLCA4LCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDAwKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTU1NTUycsIDksIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwMDAwKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygnbWlsbGlzZWNvbmQnLCAnbXMnKTtcclxuXHJcbi8vIFBSSU9SSVRZXHJcblxyXG4gIGFkZFVuaXRQcmlvcml0eSgnbWlsbGlzZWNvbmQnLCAxNik7XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ1MnLCBtYXRjaDF0bzMsIG1hdGNoMSk7XHJcbiAgYWRkUmVnZXhUb2tlbignU1MnLCBtYXRjaDF0bzMsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignU1NTJywgbWF0Y2gxdG8zLCBtYXRjaDMpO1xyXG5cclxuICBsZXQgdG9rZW47XHJcbiAgZm9yICh0b2tlbiA9ICdTU1NTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xyXG4gICAgYWRkUmVnZXhUb2tlbih0b2tlbiwgbWF0Y2hVbnNpZ25lZCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBwYXJzZU1zKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBhcnJheVtNSUxMSVNFQ09ORF0gPSB0b0ludChwYXJzZUZsb2F0KGAwLiR7aW5wdXR9YCkgKiAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgZm9yICh0b2tlbiA9ICdTJzsgdG9rZW4ubGVuZ3RoIDw9IDk7IHRva2VuICs9ICdTJykge1xyXG4gICAgYWRkUGFyc2VUb2tlbih0b2tlbiwgcGFyc2VNcyk7XHJcbiAgfVxyXG4vLyBNT01FTlRTXHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1pbnV0ZXMsIGdldFNlY29uZHMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiwgbWF0Y2gzdG80LCBtYXRjaDV0bzYgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IEhPVVIsIE1JTlVURSwgU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcclxuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcclxuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEhvdXIoKSB7XHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbiAgZnVuY3Rpb24gaEZvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgaXNVVEMpICUgMTIgfHwgMTI7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBrRm9ybWF0KGRhdGU6IERhdGUsIGlzVVRDOiBib29sZWFuKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBnZXRIb3VycyhkYXRlLCBpc1VUQykgfHwgMjQ7XHJcbiAgfVxyXG5cclxuICBhZGRGb3JtYXRUb2tlbignSCcsIFsnSEgnLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbignaCcsIFsnaGgnLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBoRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG4gIGFkZEZvcm1hdFRva2VuKCdrJywgWydraycsIDIsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGtGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQylcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdobW0nLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICBjb25zdCBfaCA9IGhGb3JtYXQoZGF0ZSwgb3B0cy5pc1VUQyk7XHJcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xyXG5cclxuICAgICAgcmV0dXJuIGAke19ofSR7X21tfWA7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ2htbXNzJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgY29uc3QgX2ggPSBoRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpO1xyXG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcclxuICAgICAgY29uc3QgX3NzID0gemVyb0ZpbGwoZ2V0U2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XHJcblxyXG4gICAgICByZXR1cm4gYCR7X2h9JHtfbW19JHtfc3N9YDtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignSG1tJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgY29uc3QgX0ggPSBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKTtcclxuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XHJcblxyXG4gICAgICByZXR1cm4gYCR7X0h9JHtfbW19YDtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignSG1tc3MnLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICBjb25zdCBfSCA9IGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpO1xyXG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcclxuICAgICAgY29uc3QgX3NzID0gemVyb0ZpbGwoZ2V0U2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XHJcblxyXG4gICAgICByZXR1cm4gYCR7X0h9JHtfbW19JHtfc3N9YDtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBmdW5jdGlvbiBtZXJpZGllbSh0b2tlbjogc3RyaW5nLCBsb3dlcmNhc2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGFkZEZvcm1hdFRva2VuKHRva2VuLCBudWxsLCBudWxsLFxyXG4gICAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm1lcmlkaWVtKGdldEhvdXJzKGRhdGUsIG9wdHMuaXNVVEMpLCBnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCBsb3dlcmNhc2UpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbWVyaWRpZW0oJ2EnLCB0cnVlKTtcclxuICBtZXJpZGllbSgnQScsIGZhbHNlKTtcclxuXHJcbi8vIEFMSUFTRVNcclxuXHJcbiAgYWRkVW5pdEFsaWFzKCdob3VyJywgJ2gnKTtcclxuXHJcbi8vIFBSSU9SSVRZXHJcbiAgYWRkVW5pdFByaW9yaXR5KCdob3VyJywgMTMpO1xyXG5cclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgZnVuY3Rpb24gbWF0Y2hNZXJpZGllbShpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGxvY2FsZS5fbWVyaWRpZW1QYXJzZTtcclxuICB9XHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ2EnLCBtYXRjaE1lcmlkaWVtKTtcclxuICBhZGRSZWdleFRva2VuKCdBJywgbWF0Y2hNZXJpZGllbSk7XHJcbiAgYWRkUmVnZXhUb2tlbignSCcsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignaCcsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignaycsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignSEgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignaGgnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbigna2snLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ2htbScsIG1hdGNoM3RvNCk7XHJcbiAgYWRkUmVnZXhUb2tlbignaG1tc3MnLCBtYXRjaDV0bzYpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0htbScsIG1hdGNoM3RvNCk7XHJcbiAgYWRkUmVnZXhUb2tlbignSG1tc3MnLCBtYXRjaDV0bzYpO1xyXG5cclxuICBhZGRQYXJzZVRva2VuKFsnSCcsICdISCddLCBIT1VSKTtcclxuICBhZGRQYXJzZVRva2VuKFxyXG4gICAgWydrJywgJ2trJ10sXHJcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgICBjb25zdCBrSW5wdXQgPSB0b0ludChpbnB1dCk7XHJcbiAgICAgIGFycmF5W0hPVVJdID0ga0lucHV0ID09PSAyNCA/IDAgOiBrSW5wdXQ7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkUGFyc2VUb2tlbihbJ2EnLCAnQSddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uZmlnLl9pc1BtID0gY29uZmlnLl9sb2NhbGUuaXNQTShpbnB1dCk7XHJcbiAgICBjb25maWcuX21lcmlkaWVtID0gaW5wdXQ7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuICBhZGRQYXJzZVRva2VuKFsnaCcsICdoaCddLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dCk7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG4gIGFkZFBhcnNlVG9rZW4oJ2htbScsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25zdCBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xyXG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XHJcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xyXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuICBhZGRQYXJzZVRva2VuKCdobW1zcycsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25zdCBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcclxuICAgIGNvbnN0IHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xyXG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xyXG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XHJcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcclxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbiAgYWRkUGFyc2VUb2tlbignSG1tJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGNvbnN0IHBvcyA9IGlucHV0Lmxlbmd0aCAtIDI7XHJcbiAgICBhcnJheVtIT1VSXSA9IHRvSW50KGlucHV0LnN1YnN0cigwLCBwb3MpKTtcclxuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuICBhZGRQYXJzZVRva2VuKCdIbW1zcycsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25zdCBwb3MxID0gaW5wdXQubGVuZ3RoIC0gNDtcclxuICAgIGNvbnN0IHBvczIgPSBpbnB1dC5sZW5ndGggLSAyO1xyXG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zMSkpO1xyXG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MxLCAyKSk7XHJcbiAgICBhcnJheVtTRUNPTkRdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvczIpKTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG5cclxufVxyXG4iLCIvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXHJcbmltcG9ydCB7IExvY2FsZSwgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4vbG9jYWxlLmRlZmF1bHRzJztcclxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nLCBpc1VuZGVmaW5lZCwgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGNvbXBhcmVBcnJheXMgfSBmcm9tICcuLi91dGlscy9jb21wYXJlLWFycmF5cyc7XHJcblxyXG5pbXBvcnQgeyBpbml0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xyXG5pbXBvcnQgeyBpbml0V2Vla1llYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLXllYXInO1xyXG5pbXBvcnQgeyBpbml0WWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xyXG5pbXBvcnQgeyBpbml0VGltZXpvbmUgfSBmcm9tICcuLi91bml0cy90aW1lem9uZSc7XHJcbmltcG9ydCB7IGluaXRUaW1lc3RhbXAgfSBmcm9tICcuLi91bml0cy90aW1lc3RhbXAnO1xyXG5pbXBvcnQgeyBpbml0U2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvc2Vjb25kJztcclxuaW1wb3J0IHsgaW5pdFF1YXJ0ZXIgfSBmcm9tICcuLi91bml0cy9xdWFydGVyJztcclxuaW1wb3J0IHsgaW5pdE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XHJcbmltcG9ydCB7IGluaXRNaW51dGUgfSBmcm9tICcuLi91bml0cy9taW51dGUnO1xyXG5pbXBvcnQgeyBpbml0TWlsbGlzZWNvbmQgfSBmcm9tICcuLi91bml0cy9taWxsaXNlY29uZCc7XHJcbmltcG9ydCB7IGluaXRNb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcclxuaW1wb3J0IHsgaW5pdEhvdXIgfSBmcm9tICcuLi91bml0cy9ob3VyJztcclxuaW1wb3J0IHsgaW5pdERheU9mWWVhciB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi15ZWFyJztcclxuaW1wb3J0IHsgaW5pdERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuaW1wb3J0IHsgaW5pdERheU9mTW9udGggfSBmcm9tICcuLi91bml0cy9kYXktb2YtbW9udGgnO1xyXG5cclxuY29uc3QgbG9jYWxlczogeyBba2V5OiBzdHJpbmddOiBMb2NhbGUgfSA9IHt9O1xyXG5jb25zdCBsb2NhbGVGYW1pbGllczogeyBba2V5OiBzdHJpbmddOiB7bmFtZTogc3RyaW5nOyBjb25maWc6IExvY2FsZURhdGF9W10gfSA9IHt9O1xyXG5sZXQgZ2xvYmFsTG9jYWxlOiBMb2NhbGU7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcclxufVxyXG5cclxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XHJcbi8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXHJcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsXHJcbi8vIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcclxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzOiBzdHJpbmdbXSk6IExvY2FsZSB7XHJcbiAgbGV0IG5leHQ7XHJcbiAgbGV0IGxvY2FsZTtcclxuICBsZXQgaSA9IDA7XHJcblxyXG4gIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzcGxpdCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpXSkuc3BsaXQoJy0nKTtcclxuICAgIGxldCBqID0gc3BsaXQubGVuZ3RoO1xyXG4gICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xyXG4gICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xyXG4gICAgd2hpbGUgKGogPiAwKSB7XHJcbiAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcclxuICAgICAgaWYgKGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xyXG4gICAgICAgIC8vIHRoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgai0tO1xyXG4gICAgfVxyXG4gICAgaSsrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnOiBMb2NhbGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnOiBMb2NhbGVEYXRhKSB7XHJcbiAgY29uc3QgcmVzOiBMb2NhbGVEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50Q29uZmlnKTtcclxuXHJcbiAgZm9yIChjb25zdCBjaGlsZFByb3AgaW4gY2hpbGRDb25maWcpIHtcclxuICAgIGlmICghaGFzT3duUHJvcChjaGlsZENvbmZpZywgY2hpbGRQcm9wKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbY2hpbGRQcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbY2hpbGRQcm9wXSkpIHtcclxuICAgICAgcmVzW2NoaWxkUHJvcF0gPSB7fTtcclxuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgcGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pO1xyXG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBjaGlsZENvbmZpZ1tjaGlsZFByb3BdKTtcclxuICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbY2hpbGRQcm9wXSAhPSBudWxsKSB7XHJcbiAgICAgIHJlc1tjaGlsZFByb3BdID0gY2hpbGRDb25maWdbY2hpbGRQcm9wXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSByZXNbY2hpbGRQcm9wXTtcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHBhcmVudFByb3A7XHJcbiAgZm9yIChwYXJlbnRQcm9wIGluIHBhcmVudENvbmZpZykge1xyXG4gICAgaWYgKFxyXG4gICAgICBoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcGFyZW50UHJvcCkgJiZcclxuICAgICAgIWhhc093blByb3AoY2hpbGRDb25maWcsIHBhcmVudFByb3ApICYmXHJcbiAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcclxuICAgICAgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0gPSBPYmplY3QuYXNzaWduKHt9LCByZXNbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lOiBzdHJpbmcpOiBMb2NhbGUge1xyXG4gIC8vIG5vIHdheSFcclxuICAvKiB2YXIgb2xkTG9jYWxlID0gbnVsbDtcclxuICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcclxuICAgaWYgKCFsb2NhbGVzW25hbWVdICYmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiZcclxuICAgICBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICB0cnkge1xyXG4gICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xyXG4gICAgICAgdmFyIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcclxuICAgICAgIGFsaWFzZWRSZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XHJcbiAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcclxuICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICB9Ki9cclxuICBpZiAoIWxvY2FsZXNbbmFtZV0pIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgY29uc29sZS5lcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcclxuLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcclxuLy8gbG9jYWxlIGtleS5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFsdWVzPzogTG9jYWxlRGF0YSk6IHN0cmluZyB7XHJcbiAgbGV0IGRhdGE6IExvY2FsZTtcclxuXHJcbiAgaWYgKGtleSkge1xyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcclxuICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xyXG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhrZXkpKSB7XHJcbiAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2xvYmFsTG9jYWxlICYmIGdsb2JhbExvY2FsZS5fYWJicjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xyXG4gIGlmIChjb25maWcgPT09IG51bGwpIHtcclxuICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xyXG4gICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XHJcbiAgICBnbG9iYWxMb2NhbGUgPSBnZXRMb2NhbGUoJ2VuJyk7XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNvbmZpZykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XHJcbiAgY29uZmlnLmFiYnIgPSBuYW1lO1xyXG4gIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcclxuICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcclxuICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xyXG4gICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7IG5hbWUsIGNvbmZpZyB9KTtcclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XHJcblxyXG4gIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xyXG4gICAgbG9jYWxlRmFtaWxpZXNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xyXG4gICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxyXG4gIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cclxuICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cclxuICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XHJcblxyXG5cclxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xyXG4gIGxldCBfY29uZmlnID0gY29uZmlnO1xyXG5cclxuICBpZiAoX2NvbmZpZyAhPSBudWxsKSB7XHJcbiAgICBsZXQgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcclxuICAgIC8vIE1FUkdFXHJcbiAgICBjb25zdCB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xyXG4gICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xyXG4gICAgfVxyXG4gICAgX2NvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIF9jb25maWcpO1xyXG4gICAgY29uc3QgbG9jYWxlID0gbmV3IExvY2FsZShfY29uZmlnKTtcclxuICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xyXG4gICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZTtcclxuXHJcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcclxuICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcclxuICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcclxuICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcclxuICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XHJcbiAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGxvY2FsZSBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10pOiBMb2NhbGUge1xyXG4gIHNldERlZmF1bHRMb2NhbGUoKTtcclxuXHJcbiAgaWYgKCFrZXkpIHtcclxuICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XHJcbiAgfVxyXG4gIC8vIGxldCBsb2NhbGU7XHJcbiAgY29uc3QgX2tleSA9IGlzQXJyYXkoa2V5KSA/IGtleSA6IFtrZXldO1xyXG5cclxuICByZXR1cm4gY2hvb3NlTG9jYWxlKF9rZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdExvY2FsZXMoKTogc3RyaW5nW10ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdExvY2FsZSgpOiB2b2lkIHtcclxuICBpZiAobG9jYWxlc1tgZW5gXSkge1xyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xyXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXHJcbiAgICBvcmRpbmFsKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgY29uc3QgYiA9IG51bSAlIDEwO1xyXG4gICAgICBjb25zdCBvdXRwdXQgPVxyXG4gICAgICAgIHRvSW50KChudW0gJSAxMDApIC8gMTApID09PSAxXHJcbiAgICAgICAgICA/ICd0aCdcclxuICAgICAgICAgIDogYiA9PT0gMSA/ICdzdCcgOiBiID09PSAyID8gJ25kJyA6IGIgPT09IDMgPyAncmQnIDogJ3RoJztcclxuXHJcbiAgICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGluaXRXZWVrKCk7XHJcbiAgaW5pdFdlZWtZZWFyKCk7XHJcbiAgaW5pdFllYXIoKTtcclxuICBpbml0VGltZXpvbmUoKTtcclxuICBpbml0VGltZXN0YW1wKCk7XHJcbiAgaW5pdFNlY29uZCgpO1xyXG4gIGluaXRRdWFydGVyKCk7XHJcbiAgaW5pdE9mZnNldCgpO1xyXG4gIGluaXRNb250aCgpO1xyXG4gIGluaXRNaW51dGUoKTtcclxuICBpbml0TWlsbGlzZWNvbmQoKTtcclxuICBpbml0SG91cigpO1xyXG4gIGluaXREYXlPZlllYXIoKTtcclxuICBpbml0RGF5T2ZXZWVrKCk7XHJcbiAgaW5pdERheU9mTW9udGgoKTtcclxufVxyXG4iLCJpbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XHJcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBvcmRlcmluZzogKGtleW9mIERhdGVPYmplY3QpW10gPSBbJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnLCAnbWlsbGlzZWNvbmRzJ107XHJcbmNvbnN0IG9yZGVyaW5nSGFzaCA9IG9yZGVyaW5nLnJlZHVjZSgobWVtOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSwgb3JkZXIpID0+IHtcclxuICBtZW1bb3JkZXJdID0gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIG1lbTtcclxufSwge30pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0Pik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGR1cmF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGR1cmF0aW9uKTtcclxuICBpZiAoZHVyYXRpb25LZXlzXHJcbiAgICAgIC5zb21lKChrZXk6IGtleW9mIERhdGVPYmplY3QpID0+IHtcclxuICAgICAgICByZXR1cm4gKGtleSBpbiBvcmRlcmluZ0hhc2gpXHJcbiAgICAgICAgICAmJiBkdXJhdGlvbltrZXldID09PSBudWxsXHJcbiAgICAgICAgICB8fCBpc05hTihkdXJhdGlvbltrZXldKTtcclxuICAgICAgfSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgLy8gZm9yIChsZXQga2V5IGluIGR1cmF0aW9uKSB7XHJcbiAgLy8gICBpZiAoIShpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmIChkdXJhdGlvbltrZXldID09IG51bGwgfHwgIWlzTmFOKGR1cmF0aW9uW2tleV0pKSkpIHtcclxuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgbGV0IHVuaXRIYXNEZWNpbWFsID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcmluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSkge1xyXG4gICAgICAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxyXG4gICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSAhPT0gdG9JbnQoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSkge1xyXG4gICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKCkge1xyXG4vLyAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKCk6IER1cmF0aW9uIHtcclxuLy8gICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcclxuLy8gfVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYWJzQ2VpbCAobnVtYmVyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5mbG9vcihudW1iZXIpIDogTWF0aC5jZWlsKG51bWJlcik7XHJcbn1cclxuIiwiaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcclxuaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGFic0NlaWwgfSBmcm9tICcuLi91dGlscy9hYnMtY2VpbCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnViYmxlKGR1cjogRHVyYXRpb24pOiBEdXJhdGlvbiB7XHJcbiAgbGV0IG1pbGxpc2Vjb25kcyA9IGR1ci5fbWlsbGlzZWNvbmRzO1xyXG4gIGxldCBkYXlzID0gZHVyLl9kYXlzO1xyXG4gIGxldCBtb250aHMgPSBkdXIuX21vbnRocztcclxuICBjb25zdCBkYXRhID0gZHVyLl9kYXRhO1xyXG5cclxuICAvLyBpZiB3ZSBoYXZlIGEgbWl4IG9mIHBvc2l0aXZlIGFuZCBuZWdhdGl2ZSB2YWx1ZXMsIGJ1YmJsZSBkb3duIGZpcnN0XHJcbiAgLy8gY2hlY2s6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yMTY2XHJcbiAgaWYgKCEoKG1pbGxpc2Vjb25kcyA+PSAwICYmIGRheXMgPj0gMCAmJiBtb250aHMgPj0gMCkgfHxcclxuICAgICAgKG1pbGxpc2Vjb25kcyA8PSAwICYmIGRheXMgPD0gMCAmJiBtb250aHMgPD0gMCkpKSB7XHJcbiAgICBtaWxsaXNlY29uZHMgKz0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzKSArIGRheXMpICogODY0ZTU7XHJcbiAgICBkYXlzID0gMDtcclxuICAgIG1vbnRocyA9IDA7XHJcbiAgfVxyXG5cclxuICAvLyBUaGUgZm9sbG93aW5nIGNvZGUgYnViYmxlcyB1cCB2YWx1ZXMsIHNlZSB0aGUgdGVzdHMgZm9yXHJcbiAgLy8gZXhhbXBsZXMgb2Ygd2hhdCB0aGF0IG1lYW5zLlxyXG4gIGRhdGEubWlsbGlzZWNvbmRzID0gbWlsbGlzZWNvbmRzICUgMTAwMDtcclxuXHJcbiAgY29uc3Qgc2Vjb25kcyA9IGFic0Zsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xyXG4gIGRhdGEuc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcclxuXHJcbiAgY29uc3QgbWludXRlcyA9IGFic0Zsb29yKHNlY29uZHMgLyA2MCk7XHJcbiAgZGF0YS5taW51dGVzID0gbWludXRlcyAlIDYwO1xyXG5cclxuICBjb25zdCBob3VycyA9IGFic0Zsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgZGF0YS5ob3VycyA9IGhvdXJzICUgMjQ7XHJcblxyXG4gIGRheXMgKz0gYWJzRmxvb3IoaG91cnMgLyAyNCk7XHJcblxyXG4gIC8vIGNvbnZlcnQgZGF5cyB0byBtb250aHNcclxuICBjb25zdCBtb250aHNGcm9tRGF5cyA9IGFic0Zsb29yKGRheXNUb01vbnRocyhkYXlzKSk7XHJcbiAgbW9udGhzICs9IG1vbnRoc0Zyb21EYXlzO1xyXG4gIGRheXMgLT0gYWJzQ2VpbChtb250aHNUb0RheXMobW9udGhzRnJvbURheXMpKTtcclxuXHJcbiAgLy8gMTIgbW9udGhzIC0+IDEgeWVhclxyXG4gIGNvbnN0IHllYXJzID0gYWJzRmxvb3IobW9udGhzIC8gMTIpO1xyXG4gIG1vbnRocyAlPSAxMjtcclxuXHJcbiAgZGF0YS5kYXkgPSBkYXlzO1xyXG4gIGRhdGEubW9udGggPSBtb250aHM7XHJcbiAgZGF0YS55ZWFyID0geWVhcnM7XHJcblxyXG4gIHJldHVybiBkdXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXlzVG9Nb250aHMoZGF5OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIC8vIDQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcclxuICAvLyA0MDAgeWVhcnMgaGF2ZSAxMiBtb250aHMgPT09IDQ4MDBcclxuICByZXR1cm4gZGF5ICogNDgwMCAvIDE0NjA5NztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc1RvRGF5cyhtb250aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAvLyB0aGUgcmV2ZXJzZSBvZiBkYXlzVG9Nb250aHNcclxuICByZXR1cm4gbW9udGggKiAxNDYwOTcgLyA0ODAwO1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XHJcblxyXG5sZXQgcm91bmQgPSBNYXRoLnJvdW5kO1xyXG5jb25zdCB0aHJlc2hvbGRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gIHNzOiA0NCwgICAgICAgICAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcclxuICBzOiA0NSwgICAgICAgICAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxyXG4gIG06IDQ1LCAgICAgICAgIC8vIG1pbnV0ZXMgdG8gaG91clxyXG4gIGg6IDIyLCAgICAgICAgIC8vIGhvdXJzIHRvIGRheVxyXG4gIGQ6IDI2LCAgICAgICAgIC8vIGRheXMgdG8gbW9udGhcclxuICBNOiAxMSAgICAgICAgICAvLyBtb250aHMgdG8geWVhclxyXG59O1xyXG5cclxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcclxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRpbWVBZ28oc3RyOiAnZnV0dXJlJyB8ICdwYXN0JywgbnVtOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGlzRnV0dXJlOiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyLCBpc0Z1dHVyZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUocG9zTmVnRHVyYXRpb246IER1cmF0aW9uLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZHVyYXRpb24gPSBjcmVhdGVEdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKTtcclxuICBjb25zdCBob3VycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpO1xyXG4gIGNvbnN0IGRheXMgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcclxuICBjb25zdCBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKTtcclxuICBjb25zdCB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpO1xyXG5cclxuICBjb25zdCBhOiBbc3RyaW5nXSB8IFtzdHJpbmcsIG51bWJlcl0gPVxyXG4gICAgc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdIHx8XHJcbiAgICBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsnc3MnLCBzZWNvbmRzXSB8fFxyXG4gICAgbWludXRlcyA8PSAxICYmIFsnbSddIHx8XHJcbiAgICBtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSB8fFxyXG4gICAgaG91cnMgPD0gMSAmJiBbJ2gnXSB8fFxyXG4gICAgaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSB8fFxyXG4gICAgZGF5cyA8PSAxICYmIFsnZCddIHx8XHJcbiAgICBkYXlzIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSB8fFxyXG4gICAgbW9udGhzIDw9IDEgJiYgWydNJ10gfHxcclxuICAgIG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSB8fFxyXG4gICAgeWVhcnMgPD0gMSAmJiBbJ3knXSB8fCBbJ3l5JywgeWVhcnNdO1xyXG5cclxuICBjb25zdCBiOiBbc3RyaW5nLCBudW1iZXIgfCBzdHJpbmcsIGJvb2xlYW4sIGJvb2xlYW4sIExvY2FsZV0gPVxyXG4gICAgW2FbMF0sIGFbMV0sIHdpdGhvdXRTdWZmaXgsICtwb3NOZWdEdXJhdGlvbiA+IDAsIGxvY2FsZV07XHJcbiAgLy8gYVsyXSA9IHdpdGhvdXRTdWZmaXg7XHJcbiAgLy8gYVszXSA9ICtwb3NOZWdEdXJhdGlvbiA+IDA7XHJcbiAgLy8gYVs0XSA9IGxvY2FsZTtcclxuXHJcbiAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGIpO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IHRoZSByb3VuZGluZyBmdW5jdGlvbiBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyhyb3VuZGluZ0Z1bmN0aW9uOiBhbnkpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiByb3VuZDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZihyb3VuZGluZ0Z1bmN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQ6IHN0cmluZywgbGltaXQ6IG51bWJlcik6IGJvb2xlYW4gfCBudW1iZXIge1xyXG4gIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcclxuICB9XHJcbiAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XHJcbiAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XHJcbiAgICB0aHJlc2hvbGRzLnNzID0gbGltaXQgLSAxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBodW1hbml6ZSh3aXRoU3VmZml4KSB7XHJcbi8vICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4vLyAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XHJcbi8vICAgfVxyXG4vL1xyXG4vLyAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xyXG4vLyAgIGxldCBvdXRwdXQgPSByZWxhdGl2ZVRpbWUodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XHJcbi8vXHJcbi8vICAgaWYgKHdpdGhTdWZmaXgpIHtcclxuLy8gICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xyXG4vLyAgIH1cclxuLy9cclxuLy8gICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcclxuLy8gfVxyXG4iLCJpbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBpc0R1cmF0aW9uVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcclxuaW1wb3J0IHsgYnViYmxlLCBkYXlzVG9Nb250aHMsIG1vbnRoc1RvRGF5cyB9IGZyb20gJy4vYnViYmxlJztcclxuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IG5vcm1hbGl6ZVVuaXRzIH0gZnJvbSAnLi4vdW5pdHMvYWxpYXNlcyc7XHJcbmltcG9ydCB7IHJlbGF0aXZlVGltZSB9IGZyb20gJy4vaHVtYW5pemUnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEdXJhdGlvbiB7XHJcbiAgX21pbGxpc2Vjb25kczogbnVtYmVyO1xyXG4gIF9kYXlzOiBudW1iZXI7XHJcbiAgX21vbnRoczogbnVtYmVyO1xyXG4gIF9kYXRhOiBQYXJ0aWFsPERhdGVPYmplY3Q+ID0ge307XHJcbiAgX2xvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCk7XHJcbiAgX2lzVmFsaWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcclxuICAgIHRoaXMuX2xvY2FsZSA9IGNvbmZpZyAmJiBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoKTtcclxuICAgIC8vIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IG5vcm1hbGl6ZU9iamVjdFVuaXRzKGR1cmF0aW9uKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRJbnB1dCA9IGR1cmF0aW9uO1xyXG4gICAgY29uc3QgeWVhcnMgPSBub3JtYWxpemVkSW5wdXQueWVhciB8fCAwO1xyXG4gICAgY29uc3QgcXVhcnRlcnMgPSBub3JtYWxpemVkSW5wdXQucXVhcnRlciB8fCAwO1xyXG4gICAgY29uc3QgbW9udGhzID0gbm9ybWFsaXplZElucHV0Lm1vbnRoIHx8IDA7XHJcbiAgICBjb25zdCB3ZWVrcyA9IG5vcm1hbGl6ZWRJbnB1dC53ZWVrIHx8IDA7XHJcbiAgICBjb25zdCBkYXlzID0gbm9ybWFsaXplZElucHV0LmRheSB8fCAwO1xyXG4gICAgY29uc3QgaG91cnMgPSBub3JtYWxpemVkSW5wdXQuaG91cnMgfHwgMDtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSBub3JtYWxpemVkSW5wdXQubWludXRlcyB8fCAwO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IG5vcm1hbGl6ZWRJbnB1dC5zZWNvbmRzIHx8IDA7XHJcbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQubWlsbGlzZWNvbmRzIHx8IDA7XHJcblxyXG4gICAgdGhpcy5faXNWYWxpZCA9IGlzRHVyYXRpb25WYWxpZChub3JtYWxpemVkSW5wdXQpO1xyXG5cclxuICAgIC8vIHJlcHJlc2VudGF0aW9uIGZvciBkYXRlQWRkUmVtb3ZlXHJcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSArbWlsbGlzZWNvbmRzICtcclxuICAgICAgc2Vjb25kcyAqIDEwMDAgK1xyXG4gICAgICBtaW51dGVzICogNjAgKiAxMDAwICsgLy8gMTAwMCAqIDYwXHJcbiAgICAgIGhvdXJzICogMTAwMCAqIDYwICogNjA7IC8vIHVzaW5nIDEwMDAgKiA2MCAqIDYwXHJcbiAgICAvLyBpbnN0ZWFkIG9mIDM2ZTUgdG8gYXZvaWQgZmxvYXRpbmcgcG9pbnQgcm91bmRpbmcgZXJyb3JzIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8yOTc4XHJcbiAgICAvLyBCZWNhdXNlIG9mIGRhdGVBZGRSZW1vdmUgdHJlYXRzIDI0IGhvdXJzIGFzIGRpZmZlcmVudCBmcm9tIGFcclxuICAgIC8vIGRheSB3aGVuIHdvcmtpbmcgYXJvdW5kIERTVCwgd2UgbmVlZCB0byBzdG9yZSB0aGVtIHNlcGFyYXRlbHlcclxuICAgIHRoaXMuX2RheXMgPSArZGF5cyArXHJcbiAgICAgIHdlZWtzICogNztcclxuICAgIC8vIEl0IGlzIGltcG9zc2libGUgdG8gdHJhbnNsYXRlIG1vbnRocyBpbnRvIGRheXMgd2l0aG91dCBrbm93aW5nXHJcbiAgICAvLyB3aGljaCBtb250aHMgeW91IGFyZSBhcmUgdGFsa2luZyBhYm91dCwgc28gd2UgaGF2ZSB0byBzdG9yZVxyXG4gICAgLy8gaXQgc2VwYXJhdGVseS5cclxuICAgIHRoaXMuX21vbnRocyA9ICttb250aHMgK1xyXG4gICAgICBxdWFydGVycyAqIDMgK1xyXG4gICAgICB5ZWFycyAqIDEyO1xyXG5cclxuICAgIC8vIHRoaXMuX2RhdGEgPSB7fTtcclxuXHJcbiAgICAvLyB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUoKTtcclxuXHJcbiAgICAvLyB0aGlzLl9idWJibGUoKTtcclxuICAgIHJldHVybiBidWJibGUodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBodW1hbml6ZSh3aXRoU3VmZml4PzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYFRPRE86IGltcGxlbWVudGApO1xyXG5cclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xyXG4gICAgbGV0IG91dHB1dCA9IHJlbGF0aXZlVGltZSh0aGlzLCAhd2l0aFN1ZmZpeCwgbG9jYWxlKTtcclxuXHJcbiAgICBpZiAod2l0aFN1ZmZpeCkge1xyXG4gICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcclxuICB9XHJcblxyXG4gIGxvY2FsZURhdGEoKTogTG9jYWxlIHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGU7XHJcbiAgfVxyXG5cclxuICBsb2NhbGUoKTogc3RyaW5nO1xyXG4gIGxvY2FsZShsb2NhbGVLZXk6IHN0cmluZyk6IER1cmF0aW9uO1xyXG4gIGxvY2FsZShsb2NhbGVLZXk/OiBzdHJpbmcpOiBEdXJhdGlvbiB8IHN0cmluZyB7XHJcbiAgICBpZiAoIWxvY2FsZUtleSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbG9jYWxlLl9hYmJyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGVLZXkpIHx8IHRoaXMuX2xvY2FsZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG5cclxuICBhYnMoKTogRHVyYXRpb24ge1xyXG4gICAgY29uc3QgbWF0aEFicyA9IE1hdGguYWJzO1xyXG5cclxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9kYXRhO1xyXG5cclxuICAgIHRoaXMuX21pbGxpc2Vjb25kcyA9IG1hdGhBYnModGhpcy5fbWlsbGlzZWNvbmRzKTtcclxuICAgIHRoaXMuX2RheXMgPSBtYXRoQWJzKHRoaXMuX2RheXMpO1xyXG4gICAgdGhpcy5fbW9udGhzID0gbWF0aEFicyh0aGlzLl9tb250aHMpO1xyXG5cclxuICAgIGRhdGEubWlsbGlzZWNvbmRzID0gbWF0aEFicyhkYXRhLm1pbGxpc2Vjb25kcyk7XHJcbiAgICBkYXRhLnNlY29uZHMgPSBtYXRoQWJzKGRhdGEuc2Vjb25kcyk7XHJcbiAgICBkYXRhLm1pbnV0ZXMgPSBtYXRoQWJzKGRhdGEubWludXRlcyk7XHJcbiAgICBkYXRhLmhvdXJzID0gbWF0aEFicyhkYXRhLmhvdXJzKTtcclxuICAgIGRhdGEubW9udGggPSBtYXRoQWJzKGRhdGEubW9udGgpO1xyXG4gICAgZGF0YS55ZWFyID0gbWF0aEFicyhkYXRhLnllYXIpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgYXMoX3VuaXRzOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4gICAgICByZXR1cm4gTmFOO1xyXG4gICAgfVxyXG4gICAgbGV0IGRheXM7XHJcbiAgICBsZXQgbW9udGhzO1xyXG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gdGhpcy5fbWlsbGlzZWNvbmRzO1xyXG5cclxuICAgIGNvbnN0IHVuaXRzID0gbm9ybWFsaXplVW5pdHMoX3VuaXRzKTtcclxuXHJcbiAgICBpZiAodW5pdHMgPT09ICdtb250aCcgfHwgdW5pdHMgPT09ICd5ZWFyJykge1xyXG4gICAgICBkYXlzID0gdGhpcy5fZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xyXG4gICAgICBtb250aHMgPSB0aGlzLl9tb250aHMgKyBkYXlzVG9Nb250aHMoZGF5cyk7XHJcblxyXG4gICAgICByZXR1cm4gdW5pdHMgPT09ICdtb250aCcgPyBtb250aHMgOiBtb250aHMgLyAxMjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBoYW5kbGUgbWlsbGlzZWNvbmRzIHNlcGFyYXRlbHkgYmVjYXVzZSBvZiBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyAoaXNzdWUgIzE4NjcpXHJcbiAgICBkYXlzID0gdGhpcy5fZGF5cyArIE1hdGgucm91bmQobW9udGhzVG9EYXlzKHRoaXMuX21vbnRocykpO1xyXG4gICAgc3dpdGNoICh1bml0cykge1xyXG4gICAgICBjYXNlICd3ZWVrJyAgIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAvIDcgKyBtaWxsaXNlY29uZHMgLyA2MDQ4ZTU7XHJcbiAgICAgIGNhc2UgJ2RheScgICAgOlxyXG4gICAgICAgIHJldHVybiBkYXlzICsgbWlsbGlzZWNvbmRzIC8gODY0ZTU7XHJcbiAgICAgIGNhc2UgJ2hvdXJzJyAgIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAqIDI0ICsgbWlsbGlzZWNvbmRzIC8gMzZlNTtcclxuICAgICAgY2FzZSAnbWludXRlcycgOlxyXG4gICAgICAgIHJldHVybiBkYXlzICogMTQ0MCArIG1pbGxpc2Vjb25kcyAvIDZlNDtcclxuICAgICAgY2FzZSAnc2Vjb25kcycgOlxyXG4gICAgICAgIHJldHVybiBkYXlzICogODY0MDAgKyBtaWxsaXNlY29uZHMgLyAxMDAwO1xyXG4gICAgICAvLyBNYXRoLmZsb29yIHByZXZlbnRzIGZsb2F0aW5nIHBvaW50IG1hdGggZXJyb3JzIGhlcmVcclxuICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihkYXlzICogODY0ZTUpICsgbWlsbGlzZWNvbmRzO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biB1bml0ICR7dW5pdHN9YCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YWx1ZU9mICgpIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB0aGlzLl9taWxsaXNlY29uZHMgK1xyXG4gICAgICB0aGlzLl9kYXlzICogODY0ZTUgK1xyXG4gICAgICAodGhpcy5fbW9udGhzICUgMTIpICogMjU5MmU2ICtcclxuICAgICAgdG9JbnQodGhpcy5fbW9udGhzIC8gMTIpICogMzE1MzZlNlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uKG9iajogYW55KTogb2JqIGlzIER1cmF0aW9uIHtcclxuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRHVyYXRpb247XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IGJvb2xlYW4ge1xyXG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT0gbnVsbCkge1xyXG4gICAgY29uc3QgZmxhZ3MgPSBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKTtcclxuICAgIGNvbnN0IHBhcnNlZFBhcnRzID0gQXJyYXkucHJvdG90eXBlLnNvbWUuY2FsbChmbGFncy5wYXJzZWREYXRlUGFydHMsIGZ1bmN0aW9uIChpOiBudW1iZXIpIHtcclxuICAgICAgcmV0dXJuIGkgIT0gbnVsbDtcclxuICAgIH0pO1xyXG4gICAgbGV0IGlzTm93VmFsaWQgPSAhaXNOYU4oY29uZmlnLl9kICYmIGNvbmZpZy5fZC5nZXRUaW1lKCkpICYmXHJcbiAgICAgIGZsYWdzLm92ZXJmbG93IDwgMCAmJlxyXG4gICAgICAhZmxhZ3MuZW1wdHkgJiZcclxuICAgICAgIWZsYWdzLmludmFsaWRNb250aCAmJlxyXG4gICAgICAhZmxhZ3MuaW52YWxpZFdlZWtkYXkgJiZcclxuICAgICAgIWZsYWdzLndlZWtkYXlNaXNtYXRjaCAmJlxyXG4gICAgICAhZmxhZ3MubnVsbElucHV0ICYmXHJcbiAgICAgICFmbGFncy5pbnZhbGlkRm9ybWF0ICYmXHJcbiAgICAgICFmbGFncy51c2VySW52YWxpZGF0ZWQgJiZcclxuICAgICAgKCFmbGFncy5tZXJpZGllbSB8fCAoZmxhZ3MubWVyaWRpZW0gJiYgcGFyc2VkUGFydHMpKTtcclxuXHJcbiAgICBpZiAoY29uZmlnLl9zdHJpY3QpIHtcclxuICAgICAgaXNOb3dWYWxpZCA9IGlzTm93VmFsaWQgJiZcclxuICAgICAgICBmbGFncy5jaGFyc0xlZnRPdmVyID09PSAwICYmXHJcbiAgICAgICAgZmxhZ3MudW51c2VkVG9rZW5zLmxlbmd0aCA9PT0gMCAmJlxyXG4gICAgICAgIGZsYWdzLmJpZ0hvdXIgPT09IHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoT2JqZWN0LmlzRnJvemVuID09IG51bGwgfHwgIU9iamVjdC5pc0Zyb3plbihjb25maWcpKSB7XHJcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGlzTm93VmFsaWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXNOb3dWYWxpZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWcuX2lzVmFsaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIGZsYWdzPzogeyBudWxsSW5wdXQ6IGJvb2xlYW4gfSk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBjb25maWcuX2QgPSBuZXcgRGF0ZShOYU4pO1xyXG4gIE9iamVjdC5hc3NpZ24oZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZyksIGZsYWdzIHx8IHsgdXNlckludmFsaWRhdGVkOiB0cnVlIH0pO1xyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFya0ludmFsaWQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuaW1wb3J0IHsgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LCBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xyXG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBtYXJrSW52YWxpZCB9IGZyb20gJy4vdmFsaWQnO1xyXG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xyXG5cclxuLy8gaXNvIDg2MDEgcmVnZXhcclxuLy8gMDAwMC0wMC0wMCAwMDAwLVcwMCBvciAwMDAwLVcwMC0wICsgVCArIDAwIG9yIDAwOjAwIG9yIDAwOjAwOjAwIG9yIDAwOjAwOjAwLjAwMCArICswMDowMCBvciArMDAwMCBvciArMDApXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCBleHRlbmRlZElzb1JlZ2V4ID0gL15cXHMqKCg/OlsrLV1cXGR7Nn18XFxkezR9KS0oPzpcXGRcXGQtXFxkXFxkfFdcXGRcXGQtXFxkfFdcXGRcXGR8XFxkXFxkXFxkfFxcZFxcZCkpKD86KFR8ICkoXFxkXFxkKD86OlxcZFxcZCg/OjpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuY29uc3QgYmFzaWNJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSkoPzpcXGRcXGRcXGRcXGR8V1xcZFxcZFxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OlxcZFxcZCg/OlxcZFxcZCg/OlsuLF1cXGQrKT8pPyk/KShbXFwrXFwtXVxcZFxcZCg/Ojo/XFxkXFxkKT98XFxzKlopPyk/JC87XHJcblxyXG5jb25zdCB0elJlZ2V4ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vO1xyXG5cclxuY29uc3QgaXNvRGF0ZXM6IFtzdHJpbmcsIFJlZ0V4cCwgYm9vbGVhbl1bXSA9IFtcclxuICBbJ1lZWVlZWS1NTS1ERCcsIC9bKy1dXFxkezZ9LVxcZFxcZC1cXGRcXGQvLCB0cnVlXSxcclxuICBbJ1lZWVktTU0tREQnLCAvXFxkezR9LVxcZFxcZC1cXGRcXGQvLCB0cnVlXSxcclxuICBbJ0dHR0ctW1ddV1ctRScsIC9cXGR7NH0tV1xcZFxcZC1cXGQvLCB0cnVlXSxcclxuICBbJ0dHR0ctW1ddV1cnLCAvXFxkezR9LVdcXGRcXGQvLCBmYWxzZV0sXHJcbiAgWydZWVlZLURERCcsIC9cXGR7NH0tXFxkezN9LywgdHJ1ZV0sXHJcbiAgWydZWVlZLU1NJywgL1xcZHs0fS1cXGRcXGQvLCBmYWxzZV0sXHJcbiAgWydZWVlZWVlNTUREJywgL1srLV1cXGR7MTB9LywgdHJ1ZV0sXHJcbiAgWydZWVlZTU1ERCcsIC9cXGR7OH0vLCB0cnVlXSxcclxuICAvLyBZWVlZTU0gaXMgTk9UIGFsbG93ZWQgYnkgdGhlIHN0YW5kYXJkXHJcbiAgWydHR0dHW1ddV1dFJywgL1xcZHs0fVdcXGR7M30vLCB0cnVlXSxcclxuICBbJ0dHR0dbV11XVycsIC9cXGR7NH1XXFxkezJ9LywgZmFsc2VdLFxyXG4gIFsnWVlZWURERCcsIC9cXGR7N30vLCB0cnVlXVxyXG5dO1xyXG5cclxuLy8gaXNvIHRpbWUgZm9ybWF0cyBhbmQgcmVnZXhlc1xyXG5jb25zdCBpc29UaW1lczogW3N0cmluZywgUmVnRXhwXVtdID0gW1xyXG4gIFsnSEg6bW06c3MuU1NTUycsIC9cXGRcXGQ6XFxkXFxkOlxcZFxcZFxcLlxcZCsvXSxcclxuICBbJ0hIOm1tOnNzLFNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQsXFxkKy9dLFxyXG4gIFsnSEg6bW06c3MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGQvXSxcclxuICBbJ0hIOm1tJywgL1xcZFxcZDpcXGRcXGQvXSxcclxuICBbJ0hIbW1zcy5TU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZFxcLlxcZCsvXSxcclxuICBbJ0hIbW1zcyxTU1NTJywgL1xcZFxcZFxcZFxcZFxcZFxcZCxcXGQrL10sXHJcbiAgWydISG1tc3MnLCAvXFxkXFxkXFxkXFxkXFxkXFxkL10sXHJcbiAgWydISG1tJywgL1xcZFxcZFxcZFxcZC9dLFxyXG4gIFsnSEgnLCAvXFxkXFxkL11cclxuXTtcclxuXHJcbmNvbnN0IGFzcE5ldEpzb25SZWdleCA9IC9eXFwvP0RhdGVcXCgoXFwtP1xcZCspL2k7XHJcblxyXG5jb25zdCBvYnNPZmZzZXRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gIFVUOiAwLFxyXG4gIEdNVDogMCxcclxuICBFRFQ6IC00ICogNjAsXHJcbiAgRVNUOiAtNSAqIDYwLFxyXG4gIENEVDogLTUgKiA2MCxcclxuICBDU1Q6IC02ICogNjAsXHJcbiAgTURUOiAtNiAqIDYwLFxyXG4gIE1TVDogLTcgKiA2MCxcclxuICBQRFQ6IC03ICogNjAsXHJcbiAgUFNUOiAtOCAqIDYwXHJcbn07XHJcblxyXG4vLyBSRkMgMjgyMiByZWdleDogRm9yIGRldGFpbHMgc2VlIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMyODIyI3NlY3Rpb24tMy4zXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCByZmMyODIyID0gL14oPzooTW9ufFR1ZXxXZWR8VGh1fEZyaXxTYXR8U3VuKSw/XFxzKT8oXFxkezEsMn0pXFxzKEphbnxGZWJ8TWFyfEFwcnxNYXl8SnVufEp1bHxBdWd8U2VwfE9jdHxOb3Z8RGVjKVxccyhcXGR7Miw0fSlcXHMoXFxkXFxkKTooXFxkXFxkKSg/OjooXFxkXFxkKSk/XFxzKD86KFVUfEdNVHxbRUNNUF1bU0RdVCl8KFtael0pfChbKy1dXFxkezR9KSkkLztcclxuXHJcbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0XHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tSVNPKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5wdXQgPSBjb25maWcuX2k7XHJcbiAgY29uc3QgbWF0Y2ggPSBleHRlbmRlZElzb1JlZ2V4LmV4ZWMoaW5wdXQpIHx8IGJhc2ljSXNvUmVnZXguZXhlYyhpbnB1dCk7XHJcblxyXG5cclxuICBsZXQgYWxsb3dUaW1lO1xyXG4gIGxldCBkYXRlRm9ybWF0O1xyXG4gIGxldCB0aW1lRm9ybWF0O1xyXG4gIGxldCB0ekZvcm1hdDtcclxuXHJcbiAgaWYgKCFtYXRjaCkge1xyXG4gICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmlzbyA9IHRydWU7XHJcbiAgbGV0IGk7XHJcbiAgbGV0IGw7XHJcbiAgZm9yIChpID0gMCwgbCA9IGlzb0RhdGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgaWYgKGlzb0RhdGVzW2ldWzFdLmV4ZWMobWF0Y2hbMV0pKSB7XHJcbiAgICAgIGRhdGVGb3JtYXQgPSBpc29EYXRlc1tpXVswXTtcclxuICAgICAgYWxsb3dUaW1lID0gaXNvRGF0ZXNbaV1bMl0gIT09IGZhbHNlO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChkYXRlRm9ybWF0ID09IG51bGwpIHtcclxuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBpZiAobWF0Y2hbM10pIHtcclxuICAgIGZvciAoaSA9IDAsIGwgPSBpc29UaW1lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgaWYgKGlzb1RpbWVzW2ldWzFdLmV4ZWMobWF0Y2hbM10pKSB7XHJcbiAgICAgICAgLy8gbWF0Y2hbMl0gc2hvdWxkIGJlICdUJyBvciBzcGFjZVxyXG4gICAgICAgIHRpbWVGb3JtYXQgPSAobWF0Y2hbMl0gfHwgJyAnKSArIGlzb1RpbWVzW2ldWzBdO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRpbWVGb3JtYXQgPT0gbnVsbCkge1xyXG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuICBpZiAoIWFsbG93VGltZSAmJiB0aW1lRm9ybWF0ICE9IG51bGwpIHtcclxuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBpZiAobWF0Y2hbNF0pIHtcclxuICAgIGlmICh0elJlZ2V4LmV4ZWMobWF0Y2hbNF0pKSB7XHJcbiAgICAgIHR6Rm9ybWF0ID0gJ1onO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uZmlnLl9mID0gZGF0ZUZvcm1hdCArICh0aW1lRm9ybWF0IHx8ICcnKSArICh0ekZvcm1hdCB8fCAnJyk7XHJcblxyXG4gIHJldHVybiBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5mdW5jdGlvbiBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKHllYXJTdHI6IHN0cmluZywgbW9udGhTdHI6IHN0cmluZywgZGF5U3RyOiBzdHJpbmcsIGhvdXJTdHI6IHN0cmluZywgbWludXRlU3RyOiBzdHJpbmcsIHNlY29uZFN0cjogc3RyaW5nKTogRGF0ZUFycmF5IHtcclxuICBjb25zdCByZXN1bHQgPSBbXHJcbiAgICB1bnRydW5jYXRlWWVhcih5ZWFyU3RyKSxcclxuICAgIGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydC5pbmRleE9mKG1vbnRoU3RyKSxcclxuICAgIHBhcnNlSW50KGRheVN0ciwgMTApLFxyXG4gICAgcGFyc2VJbnQoaG91clN0ciwgMTApLFxyXG4gICAgcGFyc2VJbnQobWludXRlU3RyLCAxMClcclxuICBdO1xyXG5cclxuICBpZiAoc2Vjb25kU3RyKSB7XHJcbiAgICByZXN1bHQucHVzaChwYXJzZUludChzZWNvbmRTdHIsIDEwKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1bnRydW5jYXRlWWVhcih5ZWFyU3RyOiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIGNvbnN0IHllYXIgPSBwYXJzZUludCh5ZWFyU3RyLCAxMCk7XHJcblxyXG4gIHJldHVybiB5ZWFyIDw9IDQ5ID8geWVhciArIDIwMDAgOiB5ZWFyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcmVwcm9jZXNzUkZDMjgyMihzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gUmVtb3ZlIGNvbW1lbnRzIGFuZCBmb2xkaW5nIHdoaXRlc3BhY2UgYW5kIHJlcGxhY2UgbXVsdGlwbGUtc3BhY2VzIHdpdGggYSBzaW5nbGUgc3BhY2VcclxuICByZXR1cm4gc3RyXHJcbiAgICAucmVwbGFjZSgvXFwoW14pXSpcXCl8W1xcblxcdF0vZywgJyAnKVxyXG4gICAgLnJlcGxhY2UoLyhcXHNcXHMrKS9nLCAnICcpLnRyaW0oKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tXZWVrZGF5KHdlZWtkYXlTdHI6IHN0cmluZywgcGFyc2VkSW5wdXQ6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IGJvb2xlYW4ge1xyXG4gIGlmICh3ZWVrZGF5U3RyKSB7XHJcbiAgICAvLyBUT0RPOiBSZXBsYWNlIHRoZSB2YW5pbGxhIEpTIERhdGUgb2JqZWN0IHdpdGggYW4gaW5kZXBlbnRlbnQgZGF5LW9mLXdlZWsgY2hlY2suXHJcbiAgICBjb25zdCB3ZWVrZGF5UHJvdmlkZWQgPSBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydC5pbmRleE9mKHdlZWtkYXlTdHIpO1xyXG4gICAgY29uc3Qgd2Vla2RheUFjdHVhbCA9IG5ldyBEYXRlKHBhcnNlZElucHV0WzBdLCBwYXJzZWRJbnB1dFsxXSwgcGFyc2VkSW5wdXRbMl0pLmdldERheSgpO1xyXG4gICAgaWYgKHdlZWtkYXlQcm92aWRlZCAhPT0gd2Vla2RheUFjdHVhbCkge1xyXG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xyXG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVPZmZzZXQob2JzT2Zmc2V0OiBzdHJpbmcsIG1pbGl0YXJ5T2Zmc2V0OiBzdHJpbmcsIG51bU9mZnNldDogc3RyaW5nKSB7XHJcbiAgaWYgKG9ic09mZnNldCkge1xyXG4gICAgcmV0dXJuIG9ic09mZnNldHNbb2JzT2Zmc2V0XTtcclxuICB9IGVsc2UgaWYgKG1pbGl0YXJ5T2Zmc2V0KSB7XHJcbiAgICAvLyB0aGUgb25seSBhbGxvd2VkIG1pbGl0YXJ5IHR6IGlzIFpcclxuICAgIHJldHVybiAwO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBobSA9IHBhcnNlSW50KG51bU9mZnNldCwgMTApO1xyXG4gICAgY29uc3QgbSA9IGhtICUgMTAwO1xyXG4gICAgY29uc3QgaCA9IChobSAtIG0pIC8gMTAwO1xyXG5cclxuICAgIHJldHVybiBoICogNjAgKyBtO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZGF0ZSBhbmQgdGltZSBmcm9tIHJlZiAyODIyIGZvcm1hdFxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBpZiAoIWlzU3RyaW5nKGNvbmZpZy5faSkpIHtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXRjaCA9IHJmYzI4MjIuZXhlYyhwcmVwcm9jZXNzUkZDMjgyMihjb25maWcuX2kpKTtcclxuXHJcbiAgaWYgKCFtYXRjaCkge1xyXG4gICAgcmV0dXJuIG1hcmtJbnZhbGlkKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwYXJzZWRBcnJheSA9IGV4dHJhY3RGcm9tUkZDMjgyMlN0cmluZ3MobWF0Y2hbNF0sIG1hdGNoWzNdLCBtYXRjaFsyXSwgbWF0Y2hbNV0sIG1hdGNoWzZdLCBtYXRjaFs3XSk7XHJcbiAgaWYgKCFjaGVja1dlZWtkYXkobWF0Y2hbMV0sIHBhcnNlZEFycmF5LCBjb25maWcpKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnLl9hID0gcGFyc2VkQXJyYXk7XHJcbiAgY29uZmlnLl90em0gPSBjYWxjdWxhdGVPZmZzZXQobWF0Y2hbOF0sIG1hdGNoWzldLCBtYXRjaFsxMF0pO1xyXG5cclxuICBjb25maWcuX2QgPSBjcmVhdGVVVENEYXRlLmFwcGx5KG51bGwsIGNvbmZpZy5fYSk7XHJcbiAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcclxuXHJcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucmZjMjgyMiA9IHRydWU7XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbi8vIGRhdGUgZnJvbSBpc28gZm9ybWF0IG9yIGZhbGxiYWNrXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tU3RyaW5nKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWF0Y2hlZCA9IGFzcE5ldEpzb25SZWdleC5leGVjKGNvbmZpZy5faSk7XHJcblxyXG4gIGlmIChtYXRjaGVkICE9PSBudWxsKSB7XHJcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgrbWF0Y2hlZFsxXSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IHVwZGF0ZSBsb2dpYyBwcm9jZXNzaW5nXHJcbiAgLy8gaXNJU08gLT4gY29uZmlnRnJvbUlTT1xyXG4gIC8vIGlzUkZDIC0+IGNvbmZpZ0Zyb21SRkNcclxuXHJcbiAgY29uZmlnRnJvbUlTTyhjb25maWcpO1xyXG4gIGlmIChjb25maWcuX2lzVmFsaWQgPT09IGZhbHNlKSB7XHJcbiAgICBkZWxldGUgY29uZmlnLl9pc1ZhbGlkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcclxuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIEZpbmFsIGF0dGVtcHQsIHVzZSBJbnB1dCBGYWxsYmFja1xyXG4gIC8vIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XHJcbiAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcclxufVxyXG5cclxuLy8gaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2sgPSBkZXByZWNhdGUoXHJcbi8vICAgICAndmFsdWUgcHJvdmlkZWQgaXMgbm90IGluIGEgcmVjb2duaXplZCBSRkMyODIyIG9yIElTTyBmb3JtYXQuIG1vbWVudCBjb25zdHJ1Y3Rpb24gZmFsbHMgYmFjayB0byBqcyBEYXRlKCksICcgK1xyXG4vLyAgICAgJ3doaWNoIGlzIG5vdCByZWxpYWJsZSBhY3Jvc3MgYWxsIGJyb3dzZXJzIGFuZCB2ZXJzaW9ucy4gTm9uIFJGQzI4MjIvSVNPIGRhdGUgZm9ybWF0cyBhcmUgJyArXHJcbi8vICAgICAnZGlzY291cmFnZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBhbiB1cGNvbWluZyBtYWpvciByZWxlYXNlLiBQbGVhc2UgcmVmZXIgdG8gJyArXHJcbi8vICAgICAnaHR0cDovL21vbWVudGpzLmNvbS9ndWlkZXMvIy93YXJuaW5ncy9qcy1kYXRlLyBmb3IgbW9yZSBpbmZvLicsXHJcbi8vICAgICBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbi8vICAgICAgICAgY29uZmlnLl9kID0gbmV3IERhdGUoY29uZmlnLl9pICsgKGNvbmZpZy5fdXNlVVRDID8gJyBVVEMnIDogJycpKTtcclxuLy8gICAgIH1cclxuLy8gKTtcclxuIiwiLy8gbW9tZW50LmpzXHJcbi8vIHZlcnNpb24gOiAyLjE4LjFcclxuLy8gYXV0aG9ycyA6IFRpbSBXb29kLCBJc2tyZW4gQ2hlcm5ldiwgTW9tZW50LmpzIGNvbnRyaWJ1dG9yc1xyXG4vLyBsaWNlbnNlIDogTUlUXHJcbi8vIG1vbWVudGpzLmNvbVxyXG5cclxuaW1wb3J0ICcuL3VuaXRzL2luZGV4JztcclxuaW1wb3J0IHsgZm9ybWF0RnVuY3Rpb25zLCBtYWtlRm9ybWF0RnVuY3Rpb24gfSBmcm9tICcuL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuL2xvY2FsZS9sb2NhbGVzJztcclxuaW1wb3J0IHsgaXNEYXRlVmFsaWQgfSBmcm9tICcuL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XHJcbiAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShsb2NhbGUgfHwgJ2VuJyk7XHJcbiAgaWYgKCFfbG9jYWxlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXHJcbiAgICAgIGBMb2NhbGUgXCIke2xvY2FsZX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBfZm9ybWF0ID0gZm9ybWF0IHx8IChpc1VUQyA/ICAnWVlZWS1NTS1ERFRISDptbTpzc1taXScgOiAnWVlZWS1NTS1ERFRISDptbTpzc1onKTtcclxuXHJcbiAgY29uc3Qgb3V0cHV0ID0gZm9ybWF0TW9tZW50KGRhdGUsIF9mb3JtYXQsIF9sb2NhbGUsIGlzVVRDLCBvZmZzZXQpO1xyXG5cclxuICBpZiAoIW91dHB1dCkge1xyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9XHJcblxyXG4gIHJldHVybiBfbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcclxufVxyXG5cclxuLy8gZm9ybWF0IGRhdGUgdXNpbmcgbmF0aXZlIGRhdGUgb2JqZWN0XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRNb21lbnQoZGF0ZTogRGF0ZSwgX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcclxuICBpZiAoIWlzRGF0ZVZhbGlkKGRhdGUpKSB7XHJcbiAgICByZXR1cm4gbG9jYWxlLmludmFsaWREYXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZm9ybWF0ID0gZXhwYW5kRm9ybWF0KF9mb3JtYXQsIGxvY2FsZSk7XHJcbiAgZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gPSBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSB8fCBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0KTtcclxuXHJcbiAgcmV0dXJuIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdKGRhdGUsIGxvY2FsZSwgaXNVVEMsIG9mZnNldCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBhbmRGb3JtYXQoX2Zvcm1hdDogc3RyaW5nLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgbGV0IGZvcm1hdCA9IF9mb3JtYXQ7XHJcbiAgbGV0IGkgPSA1O1xyXG4gIGNvbnN0IGxvY2FsRm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhMVFN8TFR8TEw/TD9MP3xsezEsNH0pL2c7XHJcblxyXG4gIGNvbnN0IHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2VucyA9IChpbnB1dDogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdExvbmdEYXRlKGlucHV0KSB8fCBpbnB1dDtcclxuICB9O1xyXG5cclxuICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcclxuICB3aGlsZSAoaSA+PSAwICYmIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy50ZXN0KGZvcm1hdCkpIHtcclxuICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKGxvY2FsRm9ybWF0dGluZ1Rva2VucywgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zKTtcclxuICAgIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xyXG4gICAgaSAtPSAxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZvcm1hdDtcclxufVxyXG4iLCIvLyBQaWNrIHRoZSBmaXJzdCBkZWZpbmVkIG9mIHR3byBvciB0aHJlZSBhcmd1bWVudHMuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0czxUPihhPzogVCwgYj86IFQsIGM/OiBUKTogVCB7XHJcbiAgaWYgKGEgIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG4gIGlmIChiICE9IG51bGwpIHtcclxuICAgIHJldHVybiBiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGM7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIE1PTlRILCBTRUNPTkQsIFlFQVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi4vdW5pdHMveWVhcic7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XHJcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuL2RhdGUtZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IGNyZWF0ZURhdGUgfSBmcm9tICcuL2RhdGUtZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IGRheU9mWWVhckZyb21XZWVrcywgd2Vla09mWWVhciwgd2Vla3NJblllYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzJztcclxuaW1wb3J0IHsgZGVmYXVsdHMgfSBmcm9tICcuLi91dGlscy9kZWZhdWx0cyc7XHJcblxyXG5mdW5jdGlvbiBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlQXJyYXkge1xyXG4gIGNvbnN0IG5vd1ZhbHVlID0gbmV3IERhdGUoKTtcclxuXHJcbiAgaWYgKGNvbmZpZy5fdXNlVVRDKSB7XHJcbiAgICByZXR1cm4gW25vd1ZhbHVlLmdldFVUQ0Z1bGxZZWFyKCksIG5vd1ZhbHVlLmdldFVUQ01vbnRoKCksIG5vd1ZhbHVlLmdldFVUQ0RhdGUoKV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW25vd1ZhbHVlLmdldEZ1bGxZZWFyKCksIG5vd1ZhbHVlLmdldE1vbnRoKCksIG5vd1ZhbHVlLmdldERhdGUoKV07XHJcbn1cclxuXHJcbi8vIGNvbnZlcnQgYW4gYXJyYXkgdG8gYSBkYXRlLlxyXG4vLyB0aGUgYXJyYXkgc2hvdWxkIG1pcnJvciB0aGUgcGFyYW1ldGVycyBiZWxvd1xyXG4vLyBub3RlOiBhbGwgdmFsdWVzIHBhc3QgdGhlIHllYXIgYXJlIG9wdGlvbmFsIGFuZCB3aWxsIGRlZmF1bHQgdG8gdGhlIGxvd2VzdCBwb3NzaWJsZSB2YWx1ZS5cclxuLy8gW3llYXIsIG1vbnRoLCBkYXkgLCBob3VyLCBtaW51dGUsIHNlY29uZCwgbWlsbGlzZWNvbmRdXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tQXJyYXkoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBjb25zdCBpbnB1dCA9IFtdO1xyXG4gIGxldCBpO1xyXG4gIGxldCBkYXRlO1xyXG4gIGxldCBjdXJyZW50RGF0ZTtcclxuICBsZXQgZXhwZWN0ZWRXZWVrZGF5O1xyXG4gIGxldCB5ZWFyVG9Vc2U7XHJcblxyXG4gIGlmIChjb25maWcuX2QpIHtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBjdXJyZW50RGF0ZSA9IGN1cnJlbnREYXRlQXJyYXkoY29uZmlnKTtcclxuXHJcbiAgLy8gY29tcHV0ZSBkYXkgb2YgdGhlIHllYXIgZnJvbSB3ZWVrcyBhbmQgd2Vla2RheXNcclxuICBpZiAoY29uZmlnLl93ICYmIGNvbmZpZy5fYVtEQVRFXSA9PSBudWxsICYmIGNvbmZpZy5fYVtNT05USF0gPT0gbnVsbCkge1xyXG4gICAgZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvLyBpZiB0aGUgZGF5IG9mIHRoZSB5ZWFyIGlzIHNldCwgZmlndXJlIG91dCB3aGF0IGl0IGlzXHJcbiAgaWYgKGNvbmZpZy5fZGF5T2ZZZWFyICE9IG51bGwpIHtcclxuICAgIHllYXJUb1VzZSA9IGRlZmF1bHRzKGNvbmZpZy5fYVtZRUFSXSwgY3VycmVudERhdGVbWUVBUl0pO1xyXG5cclxuICAgIGlmIChjb25maWcuX2RheU9mWWVhciA+IGRheXNJblllYXIoeWVhclRvVXNlKSB8fCBjb25maWcuX2RheU9mWWVhciA9PT0gMCkge1xyXG4gICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyVG9Vc2UsIDAsIGNvbmZpZy5fZGF5T2ZZZWFyKSk7XHJcbiAgICBjb25maWcuX2FbTU9OVEhdID0gZGF0ZS5nZXRVVENNb250aCgpO1xyXG4gICAgY29uZmlnLl9hW0RBVEVdID0gZGF0ZS5nZXRVVENEYXRlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgZGF0ZS5cclxuICAvLyAqIGlmIG5vIHllYXIsIG1vbnRoLCBkYXkgb2YgbW9udGggYXJlIGdpdmVuLCBkZWZhdWx0IHRvIHRvZGF5XHJcbiAgLy8gKiBpZiBkYXkgb2YgbW9udGggaXMgZ2l2ZW4sIGRlZmF1bHQgbW9udGggYW5kIHllYXJcclxuICAvLyAqIGlmIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG9ubHkgeWVhclxyXG4gIC8vICogaWYgeWVhciBpcyBnaXZlbiwgZG9uJ3QgZGVmYXVsdCBhbnl0aGluZ1xyXG4gIGZvciAoaSA9IDA7IGkgPCAzICYmIGNvbmZpZy5fYVtpXSA9PSBudWxsOyArK2kpIHtcclxuICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gY3VycmVudERhdGVbaV07XHJcbiAgfVxyXG5cclxuICAvLyBaZXJvIG91dCB3aGF0ZXZlciB3YXMgbm90IGRlZmF1bHRlZCwgaW5jbHVkaW5nIHRpbWVcclxuICBmb3IgKDsgaSA8IDc7IGkrKykge1xyXG4gICAgY29uZmlnLl9hW2ldID0gaW5wdXRbaV0gPSAoY29uZmlnLl9hW2ldID09IG51bGwpID8gKGkgPT09IDIgPyAxIDogMCkgOiBjb25maWcuX2FbaV07XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBmb3IgMjQ6MDA6MDAuMDAwXHJcbiAgaWYgKGNvbmZpZy5fYVtIT1VSXSA9PT0gMjQgJiZcclxuICAgIGNvbmZpZy5fYVtNSU5VVEVdID09PSAwICYmXHJcbiAgICBjb25maWcuX2FbU0VDT05EXSA9PT0gMCAmJlxyXG4gICAgY29uZmlnLl9hW01JTExJU0VDT05EXSA9PT0gMCkge1xyXG4gICAgY29uZmlnLl9uZXh0RGF5ID0gdHJ1ZTtcclxuICAgIGNvbmZpZy5fYVtIT1VSXSA9IDA7XHJcbiAgfVxyXG5cclxuICBjb25maWcuX2QgPSAoY29uZmlnLl91c2VVVEMgPyBjcmVhdGVVVENEYXRlIDogY3JlYXRlRGF0ZSkuYXBwbHkobnVsbCwgaW5wdXQpO1xyXG4gIGV4cGVjdGVkV2Vla2RheSA9IGNvbmZpZy5fdXNlVVRDID8gY29uZmlnLl9kLmdldFVUQ0RheSgpIDogY29uZmlnLl9kLmdldERheSgpO1xyXG5cclxuICAvLyBBcHBseSB0aW1lem9uZSBvZmZzZXQgZnJvbSBpbnB1dC4gVGhlIGFjdHVhbCB1dGNPZmZzZXQgY2FuIGJlIGNoYW5nZWRcclxuICAvLyB3aXRoIHBhcnNlWm9uZS5cclxuICBpZiAoY29uZmlnLl90em0gIT0gbnVsbCkge1xyXG4gICAgY29uZmlnLl9kLnNldFVUQ01pbnV0ZXMoY29uZmlnLl9kLmdldFVUQ01pbnV0ZXMoKSAtIGNvbmZpZy5fdHptKTtcclxuICB9XHJcblxyXG4gIGlmIChjb25maWcuX25leHREYXkpIHtcclxuICAgIGNvbmZpZy5fYVtIT1VSXSA9IDI0O1xyXG4gIH1cclxuXHJcbiAgLy8gY2hlY2sgZm9yIG1pc21hdGNoaW5nIGRheSBvZiB3ZWVrXHJcbiAgaWYgKGNvbmZpZy5fdyAmJiB0eXBlb2YgY29uZmlnLl93LmQgIT09ICd1bmRlZmluZWQnICYmIGNvbmZpZy5fdy5kICE9PSBleHBlY3RlZFdlZWtkYXkpIHtcclxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLndlZWtkYXlNaXNtYXRjaCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkYXlPZlllYXJGcm9tV2Vla0luZm8oY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBsZXQgdywgd2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95LCB0ZW1wLCB3ZWVrZGF5T3ZlcmZsb3c7XHJcblxyXG4gIHcgPSBjb25maWcuX3c7XHJcbiAgaWYgKHcuR0cgIT0gbnVsbCB8fCB3LlcgIT0gbnVsbCB8fCB3LkUgIT0gbnVsbCkge1xyXG4gICAgZG93ID0gMTtcclxuICAgIGRveSA9IDQ7XHJcblxyXG4gICAgLy8gVE9ETzogV2UgbmVlZCB0byB0YWtlIHRoZSBjdXJyZW50IGlzb1dlZWtZZWFyLCBidXQgdGhhdCBkZXBlbmRzIG9uXHJcbiAgICAvLyBob3cgd2UgaW50ZXJwcmV0IG5vdyAobG9jYWwsIHV0YywgZml4ZWQgb2Zmc2V0KS4gU28gY3JlYXRlXHJcbiAgICAvLyBhIG5vdyB2ZXJzaW9uIG9mIGN1cnJlbnQgY29uZmlnICh0YWtlIGxvY2FsL3V0Yy9vZmZzZXQgZmxhZ3MsIGFuZFxyXG4gICAgLy8gY3JlYXRlIG5vdykuXHJcbiAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuR0csIGNvbmZpZy5fYVtZRUFSXSwgd2Vla09mWWVhcihuZXcgRGF0ZSgpLCAxLCA0KS55ZWFyKTtcclxuICAgIHdlZWsgPSBkZWZhdWx0cyh3LlcsIDEpO1xyXG4gICAgd2Vla2RheSA9IGRlZmF1bHRzKHcuRSwgMSk7XHJcbiAgICBpZiAod2Vla2RheSA8IDEgfHwgd2Vla2RheSA+IDcpIHtcclxuICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgZG93ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG93O1xyXG4gICAgZG95ID0gY29uZmlnLl9sb2NhbGUuX3dlZWsuZG95O1xyXG5cclxuICAgIGNvbnN0IGN1cldlZWsgPSB3ZWVrT2ZZZWFyKG5ldyBEYXRlKCksIGRvdywgZG95KTtcclxuXHJcbiAgICB3ZWVrWWVhciA9IGRlZmF1bHRzKHcuZ2csIGNvbmZpZy5fYVtZRUFSXSwgY3VyV2Vlay55ZWFyKTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IHRvIGN1cnJlbnQgd2Vlay5cclxuICAgIHdlZWsgPSBkZWZhdWx0cyh3LncsIGN1cldlZWsud2Vlayk7XHJcblxyXG4gICAgaWYgKHcuZCAhPSBudWxsKSB7XHJcbiAgICAgIC8vIHdlZWtkYXkgLS0gbG93IGRheSBudW1iZXJzIGFyZSBjb25zaWRlcmVkIG5leHQgd2Vla1xyXG4gICAgICB3ZWVrZGF5ID0gdy5kO1xyXG4gICAgICBpZiAod2Vla2RheSA8IDAgfHwgd2Vla2RheSA+IDYpIHtcclxuICAgICAgICB3ZWVrZGF5T3ZlcmZsb3cgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHcuZSAhPSBudWxsKSB7XHJcbiAgICAgIC8vIGxvY2FsIHdlZWtkYXkgLS0gY291bnRpbmcgc3RhcnRzIGZyb20gYmVnaW5pbmcgb2Ygd2Vla1xyXG4gICAgICB3ZWVrZGF5ID0gdy5lICsgZG93O1xyXG4gICAgICBpZiAody5lIDwgMCB8fCB3LmUgPiA2KSB7XHJcbiAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gZGVmYXVsdCB0byBiZWdpbmluZyBvZiB3ZWVrXHJcbiAgICAgIHdlZWtkYXkgPSBkb3c7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICh3ZWVrIDwgMSB8fCB3ZWVrID4gd2Vla3NJblllYXIod2Vla1llYXIsIGRvdywgZG95KSkge1xyXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgPSB0cnVlO1xyXG4gIH0gZWxzZSBpZiAod2Vla2RheU92ZXJmbG93ICE9IG51bGwpIHtcclxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0ZW1wID0gZGF5T2ZZZWFyRnJvbVdlZWtzKHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSk7XHJcbiAgICBjb25maWcuX2FbWUVBUl0gPSB0ZW1wLnllYXI7XHJcbiAgICBjb25maWcuX2RheU9mWWVhciA9IHRlbXAuZGF5T2ZZZWFyO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xyXG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBNT05USCwgU0VDT05ELCBXRUVLLCBXRUVLREFZLCBZRUFSIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZGF5c0luTW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGVja092ZXJmbG93KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgbGV0IG92ZXJmbG93O1xyXG4gIGNvbnN0IGEgPSBjb25maWcuX2E7XHJcblxyXG4gIGlmIChhICYmIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm92ZXJmbG93ID09PSAtMikge1xyXG4gICAgLy8gdG9kbzogZml4IHRoaXMgc2gqdFxyXG4gICAgb3ZlcmZsb3cgPVxyXG4gICAgICBhW01PTlRIXSA8IDAgfHwgYVtNT05USF0gPiAxMSA/IE1PTlRIIDpcclxuICAgICAgICBhW0RBVEVdIDwgMSB8fCBhW0RBVEVdID4gZGF5c0luTW9udGgoYVtZRUFSXSwgYVtNT05USF0pID8gREFURSA6XHJcbiAgICAgICAgICBhW0hPVVJdIDwgMCB8fCBhW0hPVVJdID4gMjQgfHwgKGFbSE9VUl0gPT09IDI0ICYmIChhW01JTlVURV0gIT09IDAgfHwgYVtTRUNPTkRdICE9PSAwIHx8IGFbTUlMTElTRUNPTkRdICE9PSAwKSkgPyBIT1VSIDpcclxuICAgICAgICAgICAgYVtNSU5VVEVdIDwgMCB8fCBhW01JTlVURV0gPiA1OSA/IE1JTlVURSA6XHJcbiAgICAgICAgICAgICAgYVtTRUNPTkRdIDwgMCB8fCBhW1NFQ09ORF0gPiA1OSA/IFNFQ09ORCA6XHJcbiAgICAgICAgICAgICAgICBhW01JTExJU0VDT05EXSA8IDAgfHwgYVtNSUxMSVNFQ09ORF0gPiA5OTkgPyBNSUxMSVNFQ09ORCA6XHJcbiAgICAgICAgICAgICAgICAgIC0xO1xyXG5cclxuICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dEYXlPZlllYXIgJiYgKG92ZXJmbG93IDwgWUVBUiB8fCBvdmVyZmxvdyA+IERBVEUpKSB7XHJcbiAgICAgIG92ZXJmbG93ID0gREFURTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrcyAmJiBvdmVyZmxvdyA9PT0gLTEpIHtcclxuICAgICAgb3ZlcmZsb3cgPSBXRUVLO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtkYXkgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XHJcbiAgICAgIG92ZXJmbG93ID0gV0VFS0RBWTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5vdmVyZmxvdyA9IG92ZXJmbG93O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tSVNPLCBjb25maWdGcm9tUkZDMjgyMiB9IGZyb20gJy4vZnJvbS1zdHJpbmcnO1xyXG5pbXBvcnQgeyBleHBhbmRGb3JtYXQgfSBmcm9tICcuLi9mb3JtYXQnO1xyXG5pbXBvcnQgeyBmb3JtYXR0aW5nVG9rZW5zLCBmb3JtYXRUb2tlbkZ1bmN0aW9ucyB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBpc0FycmF5LCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgZ2V0UGFyc2VSZWdleEZvclRva2VuIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgSE9VUiB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XHJcbmltcG9ydCB7IGNoZWNrT3ZlcmZsb3cgfSBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgSVNPIHN0YW5kYXJkXHJcbi8vIGhvb2tzLklTT184NjAxID0gZnVuY3Rpb24gKCkge307XHJcbmV4cG9ydCBjb25zdCBJU09fODYwMSA9ICdJU09fODYwMSc7XHJcblxyXG4vLyBjb25zdGFudCB0aGF0IHJlZmVycyB0byB0aGUgUkZDIDI4MjIgZm9ybVxyXG4vLyBob29rcy5SRkNfMjgyMiA9IGZ1bmN0aW9uICgpIHt9O1xyXG5leHBvcnQgY29uc3QgUkZDXzI4MjIgPSAnUkZDXzI4MjInO1xyXG5cclxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgZm9ybWF0IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIC8vIFRPRE86IE1vdmUgdGhpcyB0byBhbm90aGVyIHBhcnQgb2YgdGhlIGNyZWF0aW9uIGZsb3cgdG8gcHJldmVudCBjaXJjdWxhciBkZXBzXHJcbiAgaWYgKGNvbmZpZy5fZiA9PT0gSVNPXzg2MDEpIHtcclxuICAgIHJldHVybiBjb25maWdGcm9tSVNPKGNvbmZpZyk7XHJcbiAgfVxyXG4gIGlmIChjb25maWcuX2YgPT09IFJGQ18yODIyKSB7XHJcbiAgICByZXR1cm4gY29uZmlnRnJvbVJGQzI4MjIoY29uZmlnKTtcclxuICB9XHJcbiAgY29uZmlnLl9hID0gW107XHJcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSB0cnVlO1xyXG5cclxuICBpZiAoaXNBcnJheShjb25maWcuX2YpIHx8ICghY29uZmlnLl9pICYmIGNvbmZpZy5faSAhPT0gMCkpIHtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyBUaGlzIGFycmF5IGlzIHVzZWQgdG8gbWFrZSBhIERhdGUsIGVpdGhlciB3aXRoIGBuZXcgRGF0ZWAgb3IgYERhdGUuVVRDYFxyXG5cclxuICBsZXQgaW5wdXQgPSBjb25maWcuX2kudG9TdHJpbmcoKTtcclxuICBsZXQgdG90YWxQYXJzZWRJbnB1dExlbmd0aCA9IDA7XHJcbiAgY29uc3QgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGg7XHJcbiAgY29uc3QgdG9rZW5zID0gZXhwYW5kRm9ybWF0KGNvbmZpZy5fZiwgY29uZmlnLl9sb2NhbGUpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnMpIHx8IFtdO1xyXG5cclxuICBsZXQgaTtcclxuICBsZXQgdG9rZW47XHJcbiAgbGV0IHBhcnNlZElucHV0O1xyXG4gIGxldCBza2lwcGVkO1xyXG4gIGZvciAoaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgIHRva2VuID0gdG9rZW5zW2ldO1xyXG4gICAgcGFyc2VkSW5wdXQgPSAoaW5wdXQubWF0Y2goZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuLCBjb25maWcuX2xvY2FsZSkpIHx8IFtdKVswXTtcclxuICAgIGlmIChwYXJzZWRJbnB1dCkge1xyXG4gICAgICBza2lwcGVkID0gaW5wdXQuc3Vic3RyKDAsIGlucHV0LmluZGV4T2YocGFyc2VkSW5wdXQpKTtcclxuICAgICAgaWYgKHNraXBwZWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goc2tpcHBlZCk7XHJcbiAgICAgIH1cclxuICAgICAgaW5wdXQgPSBpbnB1dC5zbGljZShpbnB1dC5pbmRleE9mKHBhcnNlZElucHV0KSArIHBhcnNlZElucHV0Lmxlbmd0aCk7XHJcbiAgICAgIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggKz0gcGFyc2VkSW5wdXQubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgLy8gZG9uJ3QgcGFyc2UgaWYgaXQncyBub3QgYSBrbm93biB0b2tlblxyXG4gICAgaWYgKGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSkge1xyXG4gICAgICBpZiAocGFyc2VkSW5wdXQpIHtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5lbXB0eSA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW4sIHBhcnNlZElucHV0LCBjb25maWcpO1xyXG4gICAgfSBlbHNlIGlmIChjb25maWcuX3N0cmljdCAmJiAhcGFyc2VkSW5wdXQpIHtcclxuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykudW51c2VkVG9rZW5zLnB1c2godG9rZW4pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gYWRkIHJlbWFpbmluZyB1bnBhcnNlZCBpbnB1dCBsZW5ndGggdG8gdGhlIHN0cmluZ1xyXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmNoYXJzTGVmdE92ZXIgPSBpbnB1dExlbmd0aCAtIHRvdGFsUGFyc2VkSW5wdXRMZW5ndGg7XHJcbiAgaWYgKGlucHV0Lmxlbmd0aCA+IDApIHtcclxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZElucHV0LnB1c2goaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgLy8gY2xlYXIgXzEyaCBmbGFnIGlmIGhvdXIgaXMgPD0gMTJcclxuICBpZiAoY29uZmlnLl9hW0hPVVJdIDw9IDEyICYmXHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID09PSB0cnVlICYmXHJcbiAgICBjb25maWcuX2FbSE9VUl0gPiAwKSB7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdm9pZCAwO1xyXG4gIH1cclxuXHJcbiAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykucGFyc2VkRGF0ZVBhcnRzID0gY29uZmlnLl9hLnNsaWNlKDApO1xyXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLm1lcmlkaWVtID0gY29uZmlnLl9tZXJpZGllbTtcclxuICAvLyBoYW5kbGUgbWVyaWRpZW1cclxuICBjb25maWcuX2FbSE9VUl0gPSBtZXJpZGllbUZpeFdyYXAoY29uZmlnLl9sb2NhbGUsIGNvbmZpZy5fYVtIT1VSXSwgY29uZmlnLl9tZXJpZGllbSk7XHJcblxyXG4gIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xyXG5cclxuICByZXR1cm4gY2hlY2tPdmVyZmxvdyhjb25maWcpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbWVyaWRpZW1GaXhXcmFwKGxvY2FsZTogTG9jYWxlLCBfaG91cjogbnVtYmVyLCBtZXJpZGllbTogc3RyaW5nKTogbnVtYmVyIHtcclxuICBsZXQgaG91ciA9IF9ob3VyO1xyXG5cclxuICBpZiAobWVyaWRpZW0gPT0gbnVsbCkge1xyXG4gICAgLy8gbm90aGluZyB0byBkb1xyXG4gICAgcmV0dXJuIGhvdXI7XHJcbiAgfVxyXG5cclxuICBpZiAobG9jYWxlLm1lcmlkaWVtSG91ciAhPSBudWxsKSB7XHJcbiAgICByZXR1cm4gbG9jYWxlLm1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSk7XHJcbiAgfVxyXG5cclxuICBpZiAobG9jYWxlLmlzUE0gPT0gbnVsbCkge1xyXG4gICAgLy8gdGhpcyBpcyBub3Qgc3VwcG9zZWQgdG8gaGFwcGVuXHJcbiAgICByZXR1cm4gaG91cjtcclxuICB9XHJcbiAgLy8gRmFsbGJhY2tcclxuICBjb25zdCBpc1BtID0gbG9jYWxlLmlzUE0obWVyaWRpZW0pO1xyXG4gIGlmIChpc1BtICYmIGhvdXIgPCAxMikge1xyXG4gICAgaG91ciArPSAxMjtcclxuICB9XHJcblxyXG4gIGlmICghaXNQbSAmJiBob3VyID09PSAxMikge1xyXG4gICAgaG91ciA9IDA7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaG91cjtcclxufVxyXG4iLCJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQsIGlzVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcclxuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcclxuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XHJcblxyXG4vLyBkYXRlIGZyb20gc3RyaW5nIGFuZCBhcnJheSBvZiBmb3JtYXQgc3RyaW5nc1xyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgbGV0IHRlbXBDb25maWc7XHJcbiAgbGV0IGJlc3RNb21lbnQ7XHJcbiAgbGV0IHNjb3JlVG9CZWF0O1xyXG4gIGxldCBjdXJyZW50U2NvcmU7XHJcblxyXG4gIGlmICghY29uZmlnLl9mIHx8IGNvbmZpZy5fZi5sZW5ndGggPT09IDApIHtcclxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmludmFsaWRGb3JtYXQgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBsZXQgaTtcclxuICBmb3IgKGkgPSAwOyBpIDwgY29uZmlnLl9mLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjdXJyZW50U2NvcmUgPSAwO1xyXG4gICAgdGVtcENvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XHJcbiAgICBpZiAoY29uZmlnLl91c2VVVEMgIT0gbnVsbCkge1xyXG4gICAgICB0ZW1wQ29uZmlnLl91c2VVVEMgPSBjb25maWcuX3VzZVVUQztcclxuICAgIH1cclxuICAgIHRlbXBDb25maWcuX2YgPSBjb25maWcuX2ZbaV07XHJcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KHRlbXBDb25maWcpO1xyXG5cclxuICAgIGlmICghaXNWYWxpZCh0ZW1wQ29uZmlnKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpZiB0aGVyZSBpcyBhbnkgaW5wdXQgdGhhdCB3YXMgbm90IHBhcnNlZCBhZGQgYSBwZW5hbHR5IGZvciB0aGF0IGZvcm1hdFxyXG4gICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5jaGFyc0xlZnRPdmVyO1xyXG5cclxuICAgIC8vIG9yIHRva2Vuc1xyXG4gICAgY3VycmVudFNjb3JlICs9IGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS51bnVzZWRUb2tlbnMubGVuZ3RoICogMTA7XHJcblxyXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKHRlbXBDb25maWcpLnNjb3JlID0gY3VycmVudFNjb3JlO1xyXG5cclxuICAgIGlmIChzY29yZVRvQmVhdCA9PSBudWxsIHx8IGN1cnJlbnRTY29yZSA8IHNjb3JlVG9CZWF0KSB7XHJcbiAgICAgIHNjb3JlVG9CZWF0ID0gY3VycmVudFNjb3JlO1xyXG4gICAgICBiZXN0TW9tZW50ID0gdGVtcENvbmZpZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBPYmplY3QuYXNzaWduKGNvbmZpZywgYmVzdE1vbWVudCB8fCB0ZW1wQ29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBub3JtYWxpemVPYmplY3RVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGlzT2JqZWN0LCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgaWYgKGNvbmZpZy5fZCkge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xyXG4gIGlmIChpc09iamVjdChpbnB1dCkpIHtcclxuICAgIGNvbnN0IGkgPSBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dCBhcyBhbnkpO1xyXG4gICAgY29uZmlnLl9hID0gW2kueWVhciwgaS5tb250aCwgaS5kYXksIGkuaG91cnMsIGkubWludXRlcywgaS5zZWNvbmRzLCBpLm1pbGxpc2Vjb25kc11cclxuICAgIC8vIHRvZG86IG9ic29sZXRlIC0+IHJlbW92ZSBpdFxyXG4gICAgICAubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxyXG5pbXBvcnQgeyBpc0FycmF5LCBpc0RhdGUsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNPYmplY3RFbXB0eSwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcclxuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgaXNWYWxpZCB9IGZyb20gJy4vdmFsaWQnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1hcnJheSc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuL2Nsb25lJztcclxuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZyB9IGZyb20gJy4vZnJvbS1zdHJpbmcnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tT2JqZWN0IH0gZnJvbSAnLi9mcm9tLW9iamVjdCc7XHJcbmltcG9ydCB7IGNoZWNrT3ZlcmZsb3cgfSBmcm9tICcuL2NoZWNrLW92ZXJmbG93JztcclxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgY29uc3QgcmVzID0gY2hlY2tPdmVyZmxvdyhwcmVwYXJlQ29uZmlnKGNvbmZpZykpO1xyXG4gIC8vIHRvZG86IHJlbW92ZSwgaW4gbW9tZW50LmpzIGl0J3MgbmV2ZXIgY2FsbGVkIGN1eiBvZiBtb21lbnQgY29uc3RydWN0b3JcclxuICByZXMuX2QgPSBuZXcgRGF0ZShyZXMuX2QgIT0gbnVsbCA/IHJlcy5fZC5nZXRUaW1lKCkgOiBOYU4pO1xyXG4gIGlmICghaXNWYWxpZChPYmplY3QuYXNzaWduKHt9LCByZXMsIHtfaXNWYWxpZDogbnVsbH0pKSkge1xyXG4gICAgcmVzLl9kID0gbmV3IERhdGUoTmFOKTtcclxuICB9XHJcbiAgLy8gdG9kbzogdXBkYXRlIG9mZnNldFxyXG4gIC8qaWYgKHJlcy5fbmV4dERheSkge1xyXG4gICAgLy8gQWRkaW5nIGlzIHNtYXJ0IGVub3VnaCBhcm91bmQgRFNUXHJcbiAgICByZXMuX2QgPSBhZGQocmVzLl9kLCAxLCAnZGF5Jyk7XHJcbiAgICByZXMuX25leHREYXkgPSB1bmRlZmluZWQ7XHJcbiAgfSovXHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmVwYXJlQ29uZmlnKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgbGV0IGlucHV0ID0gY29uZmlnLl9pO1xyXG4gIGNvbnN0IGZvcm1hdCA9IGNvbmZpZy5fZjtcclxuXHJcbiAgY29uZmlnLl9sb2NhbGUgPSBjb25maWcuX2xvY2FsZSB8fCBnZXRMb2NhbGUoY29uZmlnLl9sKTtcclxuXHJcbiAgaWYgKGlucHV0ID09PSBudWxsIHx8IChmb3JtYXQgPT09IHVuZGVmaW5lZCAmJiBpbnB1dCA9PT0gJycpKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcsIHsgbnVsbElucHV0OiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgY29uZmlnLl9pID0gaW5wdXQgPSBjb25maWcuX2xvY2FsZS5wcmVwYXJzZShpbnB1dCk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNEYXRlKGlucHV0KSkge1xyXG4gICAgY29uZmlnLl9kID0gY2xvbmVEYXRlKGlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciByZWN1cnNpb25cclxuXHJcbiAgaWYgKGlzQXJyYXkoZm9ybWF0KSkge1xyXG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5KGNvbmZpZyk7XHJcbiAgfSBlbHNlIGlmIChmb3JtYXQpIHtcclxuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uZmlnRnJvbUlucHV0KGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzVmFsaWQoY29uZmlnKSkge1xyXG4gICAgY29uZmlnLl9kID0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmZpZ0Zyb21JbnB1dChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xyXG4gIGlmIChpc1VuZGVmaW5lZChpbnB1dCkpIHtcclxuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKCk7XHJcbiAgfSBlbHNlIGlmIChpc0RhdGUoaW5wdXQpKSB7XHJcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xyXG4gIH0gZWxzZSBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICBjb25maWdGcm9tU3RyaW5nKGNvbmZpZyk7XHJcbiAgfSBlbHNlIGlmIChpc0FycmF5PHN0cmluZyB8IG51bWJlcj4oaW5wdXQpICYmIGlucHV0Lmxlbmd0aCkge1xyXG4gICAgY29uc3QgX2FycjogKHN0cmluZyB8IG51bWJlcilbXSA9IGlucHV0LnNsaWNlKDApO1xyXG4gICAgY29uZmlnLl9hID0gX2Fyci5tYXAob2JqID0+IGlzU3RyaW5nKG9iaikgPyBwYXJzZUludChvYmosIDEwKSA6IG9iaik7XHJcbiAgICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcclxuICB9IGVsc2UgaWYgKGlzT2JqZWN0KGlucHV0KSkge1xyXG4gICAgY29uZmlnRnJvbU9iamVjdChjb25maWcpO1xyXG4gIH0gZWxzZSBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XHJcbiAgICAvLyBmcm9tIG1pbGxpc2Vjb25kc1xyXG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUoaW5wdXQpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyAgIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrKGNvbmZpZyk7XHJcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQ6IERhdGVJbnB1dCwgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sIGxvY2FsZUtleT86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbiwgaXNVVEM/OiBib29sZWFuKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGNvbnN0IGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fTtcclxuICBsZXQgX2lucHV0ID0gaW5wdXQ7XHJcblxyXG4gIC8vIHBhcmFtcyBzd2l0Y2ggLT4gc2tpcDsgdGVzdCBpdCB3ZWxsXHJcbiAgLy8gaWYgKGxvY2FsZUtleSA9PT0gdHJ1ZSB8fCBsb2NhbGVLZXkgPT09IGZhbHNlKSB7XHJcbiAgLy8gICAgIHN0cmljdCA9IGxvY2FsZUtleTtcclxuICAvLyAgICAgbG9jYWxlS2V5ID0gdW5kZWZpbmVkO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gdG9kbzogZmFpbCBmYXN0IGFuZCByZXR1cm4gbm90IHZhbGlkIGRhdGVcclxuICBpZiAoKGlzT2JqZWN0KF9pbnB1dCkgJiYgaXNPYmplY3RFbXB0eShfaW5wdXQpKSB8fCAoaXNBcnJheShfaW5wdXQpICYmIF9pbnB1dC5sZW5ndGggPT09IDApKSB7XHJcbiAgICBfaW5wdXQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG4gIC8vIG9iamVjdCBjb25zdHJ1Y3Rpb24gbXVzdCBiZSBkb25lIHRoaXMgd2F5LlxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8xNDIzXHJcbiAgLy8gY29uZmlnLl9pc0FNb21lbnRPYmplY3QgPSB0cnVlO1xyXG4gIGNvbmZpZy5fdXNlVVRDID0gY29uZmlnLl9pc1VUQyA9IGlzVVRDO1xyXG4gIGNvbmZpZy5fbCA9IGxvY2FsZUtleTtcclxuICBjb25maWcuX2kgPSBfaW5wdXQ7XHJcbiAgY29uZmlnLl9mID0gZm9ybWF0O1xyXG4gIGNvbmZpZy5fc3RyaWN0ID0gc3RyaWN0O1xyXG5cclxuICByZXR1cm4gY3JlYXRlRnJvbUNvbmZpZyhjb25maWcpO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUxvY2FsT3JVVEMgfSBmcm9tICcuL2Zyb20tYW55dGhpbmcnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xyXG5pbXBvcnQgeyBpc0RhdGUgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VEYXRlKGlucHV0OiBEYXRlSW5wdXQsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZUtleT86IHN0cmluZywgc3RyaWN0PzogYm9vbGVhbiwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNvbmZpZyA9IGNyZWF0ZUxvY2FsT3JVVEMoaW5wdXQsIGZvcm1hdCwgbG9jYWxlS2V5LCBzdHJpY3QsIGlzVVRDKTtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5fZDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYWJzUm91bmQobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBudW0gPCAwID8gTWF0aC5yb3VuZChudW0gKiAtMSkgKiAtMSA6IE1hdGgucm91bmQobnVtKTtcclxufVxyXG4iLCJpbXBvcnQgeyBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBlbmRPZiwgc3RhcnRPZiB9IGZyb20gJy4vc3RhcnQtZW5kLW9mJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FmdGVyKFxyXG4gIGRhdGUxOiBEYXRlLFxyXG4gIGRhdGUyOiBEYXRlLFxyXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcclxuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPiBkYXRlMi52YWx1ZU9mKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0ZTIudmFsdWVPZigpIDwgc3RhcnRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQmVmb3JlKFxyXG4gIGRhdGUxOiBEYXRlLFxyXG4gIGRhdGUyOiBEYXRlLFxyXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcclxuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPCBkYXRlMi52YWx1ZU9mKCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZW5kT2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCkgPCBkYXRlMi52YWx1ZU9mKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Rpc2FibGVkRGF5KGRhdGU6IERhdGUsIGRheXNEaXNhYmxlZDogbnVtYmVyW10pOiBib29sZWFuIHtcclxuICBpZiAoZGF5c0Rpc2FibGVkID09PSB1bmRlZmluZWQgfHwgIWRheXNEaXNhYmxlZCB8fCAhZGF5c0Rpc2FibGVkLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRheXNEaXNhYmxlZC5zb21lKChkYXk6IG51bWJlcikgPT4gZGF5ID09PSBkYXRlLmdldERheSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2VlbihcclxuICBkYXRlOiBEYXRlLFxyXG4gIGZyb206IERhdGUsXHJcbiAgdG86IERhdGUsXHJcbiAgdW5pdHM6IFVuaXRPZlRpbWUsXHJcbiAgaW5jbHVzaXZpdHkgPSAnKCknXHJcbik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGxlZnRCb3VuZCA9XHJcbiAgICBpbmNsdXNpdml0eVswXSA9PT0gJygnXHJcbiAgICAgID8gaXNBZnRlcihkYXRlLCBmcm9tLCB1bml0cylcclxuICAgICAgOiAhaXNCZWZvcmUoZGF0ZSwgZnJvbSwgdW5pdHMpO1xyXG4gIGNvbnN0IHJpZ2h0Qm91bmQgPVxyXG4gICAgaW5jbHVzaXZpdHlbMV0gPT09ICcpJ1xyXG4gICAgICA/IGlzQmVmb3JlKGRhdGUsIHRvLCB1bml0cylcclxuICAgICAgOiAhaXNBZnRlcihkYXRlLCB0bywgdW5pdHMpO1xyXG5cclxuICByZXR1cm4gbGVmdEJvdW5kICYmIHJpZ2h0Qm91bmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWUoXHJcbiAgZGF0ZTE6IERhdGUsXHJcbiAgZGF0ZTI6IERhdGUsXHJcbiAgdW5pdHM6IFVuaXRPZlRpbWUgPSAnbWlsbGlzZWNvbmRzJ1xyXG4pOiBib29sZWFuIHtcclxuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHVuaXRzID09PSAnbWlsbGlzZWNvbmRzJykge1xyXG4gICAgcmV0dXJuIGRhdGUxLnZhbHVlT2YoKSA9PT0gZGF0ZTIudmFsdWVPZigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaW5wdXRNcyA9IGRhdGUyLnZhbHVlT2YoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIHN0YXJ0T2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCkgPD0gaW5wdXRNcyAmJlxyXG4gICAgaW5wdXRNcyA8PSBlbmRPZihkYXRlMSwgdW5pdHMpLnZhbHVlT2YoKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVEYXkoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTpib29sZWFue1xyXG4gIHJldHVybiAoZGF0ZTEuZ2V0RGF5KCkgPT0gZGF0ZTIuZ2V0RGF5KCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JBZnRlcihcclxuICBkYXRlMTogRGF0ZSxcclxuICBkYXRlMjogRGF0ZSxcclxuICB1bml0cz86IFVuaXRPZlRpbWVcclxuKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGlzU2FtZShkYXRlMSwgZGF0ZTIsIHVuaXRzKSB8fCBpc0FmdGVyKGRhdGUxLCBkYXRlMiwgdW5pdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lT3JCZWZvcmUoXHJcbiAgZGF0ZTE6IERhdGUsXHJcbiAgZGF0ZTI6IERhdGUsXHJcbiAgdW5pdHM/OiBVbml0T2ZUaW1lXHJcbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNCZWZvcmUoZGF0ZTEsIGRhdGUyLCB1bml0cyk7XHJcbn1cclxuIiwiLy8gQVNQLk5FVCBqc29uIGRhdGUgZm9ybWF0IHJlZ2V4XHJcbmltcG9ydCB7IER1cmF0aW9uLCBpc0R1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IGlzRGF0ZVZhbGlkLCBpc051bWJlciwgaXNPYmplY3QsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlMTElTRUNPTkQsIE1JTlVURSwgU0VDT05EIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgcGFyc2VEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2xvY2FsJztcclxuaW1wb3J0IHsgYWJzUm91bmQgfSBmcm9tICcuLi91dGlscy9hYnMtcm91bmQnO1xyXG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0IH0gZnJvbSAnLi4vdW5pdHMvb2Zmc2V0JztcclxuaW1wb3J0IHsgaXNBZnRlciwgaXNCZWZvcmUgfSBmcm9tICcuLi91dGlscy9kYXRlLWNvbXBhcmUnO1xyXG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcclxuXHJcbmNvbnN0IGFzcE5ldFJlZ2V4ID0gL14oXFwtfFxcKyk/KD86KFxcZCopWy4gXSk/KFxcZCspXFw6KFxcZCspKD86XFw6KFxcZCspKFxcLlxcZCopPyk/JC87XHJcblxyXG4vLyBmcm9tIGh0dHA6Ly9kb2NzLmNsb3N1cmUtbGlicmFyeS5nb29nbGVjb2RlLmNvbS9naXQvY2xvc3VyZV9nb29nX2RhdGVfZGF0ZS5qcy5zb3VyY2UuaHRtbFxyXG4vLyBzb21ld2hhdCBtb3JlIGluIGxpbmUgd2l0aCA0LjQuMy4yIDIwMDQgc3BlYywgYnV0IGFsbG93cyBkZWNpbWFsIGFueXdoZXJlXHJcbi8vIGFuZCBmdXJ0aGVyIG1vZGlmaWVkIHRvIGFsbG93IGZvciBzdHJpbmdzIGNvbnRhaW5pbmcgYm90aCB3ZWVrIGFuZCBkYXlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmNvbnN0IGlzb1JlZ2V4ID0gL14oLXxcXCspP1AoPzooWy0rXT9bMC05LC5dKilZKT8oPzooWy0rXT9bMC05LC5dKilNKT8oPzooWy0rXT9bMC05LC5dKilXKT8oPzooWy0rXT9bMC05LC5dKilEKT8oPzpUKD86KFstK10/WzAtOSwuXSopSCk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopUyk/KT8kLztcclxuXHJcbmV4cG9ydCB0eXBlIER1cmF0aW9uSW5wdXQgPSBzdHJpbmcgfCBudW1iZXIgfCBEdXJhdGlvbiB8IFBhcnRpYWw8RGF0ZU9iamVjdD4gfCB7IGZyb206IERhdGU7IHRvOiBEYXRlIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRHVyYXRpb24oaW5wdXQ/OiBEdXJhdGlvbklucHV0LCBrZXk/OiBzdHJpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSkge1xyXG4gIGNvbnN0IGR1cmF0aW9uID0gY29udmVydER1cmF0aW9uKGlucHV0LCBrZXkpO1xyXG4gIC8vIG1hdGNoaW5nIGFnYWluc3QgcmVnZXhwIGlzIGV4cGVuc2l2ZSwgZG8gaXQgb24gZGVtYW5kXHJcblxyXG4gIHJldHVybiBuZXcgRHVyYXRpb24oZHVyYXRpb24sIGNvbmZpZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnREdXJhdGlvbihpbnB1dDogYW55LCBrZXk6IHN0cmluZyk6IFBhcnRpYWw8RGF0ZU9iamVjdD4ge1xyXG4gIC8vIGNoZWNrcyBmb3IgbnVsbCBvciB1bmRlZmluZWRcclxuICBpZiAoaW5wdXQgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHt9O1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRHVyYXRpb24oaW5wdXQpKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtaWxsaXNlY29uZHM6IGlucHV0Ll9taWxsaXNlY29uZHMsXHJcbiAgICAgIGRheTogaW5wdXQuX2RheXMsXHJcbiAgICAgIG1vbnRoOiBpbnB1dC5fbW9udGhzXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAoaXNOdW1iZXIoaW5wdXQpKSB7XHJcbiAgICAvLyBkdXJhdGlvbiA9IHt9O1xyXG4gICAgcmV0dXJuIGtleSA/IHsgW2tleV06IGlucHV0IH0gOiB7IG1pbGxpc2Vjb25kczogaW5wdXQgfTtcclxuICB9XHJcblxyXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIGxldCBtYXRjaCA9IGFzcE5ldFJlZ2V4LmV4ZWMoaW5wdXQpO1xyXG5cclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAxO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB5ZWFyOiAwLFxyXG4gICAgICAgIGRheTogdG9JbnQobWF0Y2hbREFURV0pICogc2lnbixcclxuICAgICAgICBob3VyczogdG9JbnQobWF0Y2hbSE9VUl0pICogc2lnbixcclxuICAgICAgICBtaW51dGVzOiB0b0ludChtYXRjaFtNSU5VVEVdKSAqIHNpZ24sXHJcbiAgICAgICAgc2Vjb25kczogdG9JbnQobWF0Y2hbU0VDT05EXSkgKiBzaWduLFxyXG4gICAgICAgIC8vIHRoZSBtaWxsaXNlY29uZCBkZWNpbWFsIHBvaW50IGlzIGluY2x1ZGVkIGluIHRoZSBtYXRjaFxyXG4gICAgICAgIG1pbGxpc2Vjb25kczogdG9JbnQoYWJzUm91bmQodG9JbnQobWF0Y2hbTUlMTElTRUNPTkRdKSAqIDEwMDApKSAqIHNpZ25cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBtYXRjaCA9IGlzb1JlZ2V4LmV4ZWMoaW5wdXQpO1xyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIGNvbnN0IHNpZ24gPSAobWF0Y2hbMV0gPT09ICctJykgPyAtMSA6IChtYXRjaFsxXSA9PT0gJysnKSA/IDEgOiAxO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB5ZWFyOiBwYXJzZUlzbyhtYXRjaFsyXSwgc2lnbiksXHJcbiAgICAgICAgbW9udGg6IHBhcnNlSXNvKG1hdGNoWzNdLCBzaWduKSxcclxuICAgICAgICB3ZWVrOiBwYXJzZUlzbyhtYXRjaFs0XSwgc2lnbiksXHJcbiAgICAgICAgZGF5OiBwYXJzZUlzbyhtYXRjaFs1XSwgc2lnbiksXHJcbiAgICAgICAgaG91cnM6IHBhcnNlSXNvKG1hdGNoWzZdLCBzaWduKSxcclxuICAgICAgICBtaW51dGVzOiBwYXJzZUlzbyhtYXRjaFs3XSwgc2lnbiksXHJcbiAgICAgICAgc2Vjb25kczogcGFyc2VJc28obWF0Y2hbOF0sIHNpZ24pXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaWYgKGlzT2JqZWN0PHtmcm9tOiBhbnk7IHRvOiBhbnl9PihpbnB1dCkgJiYgKCdmcm9tJyBpbiBpbnB1dCB8fCAndG8nIGluIGlucHV0KSkge1xyXG4gICAgY29uc3QgZGlmZlJlcyA9IG1vbWVudHNEaWZmZXJlbmNlKHBhcnNlRGF0ZShpbnB1dC5mcm9tKSwgcGFyc2VEYXRlKGlucHV0LnRvKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWlsbGlzZWNvbmRzOiBkaWZmUmVzLm1pbGxpc2Vjb25kcyxcclxuICAgICAgbW9udGg6IGRpZmZSZXMubW9udGhzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlucHV0O1xyXG59XHJcblxyXG4vLyBjcmVhdGVEdXJhdGlvbi5mbiA9IER1cmF0aW9uLnByb3RvdHlwZTtcclxuLy8gY3JlYXRlRHVyYXRpb24uaW52YWxpZCA9IGludmFsaWQ7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUlzbyhpbnA6IHN0cmluZywgc2lnbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAvLyBXZSdkIG5vcm1hbGx5IHVzZSB+fmlucCBmb3IgdGhpcywgYnV0IHVuZm9ydHVuYXRlbHkgaXQgYWxzb1xyXG4gIC8vIGNvbnZlcnRzIGZsb2F0cyB0byBpbnRzLlxyXG4gIC8vIGlucCBtYXkgYmUgdW5kZWZpbmVkLCBzbyBjYXJlZnVsIGNhbGxpbmcgcmVwbGFjZSBvbiBpdC5cclxuICBjb25zdCByZXMgPSBpbnAgJiYgcGFyc2VGbG9hdChpbnAucmVwbGFjZSgnLCcsICcuJykpO1xyXG4gIC8vIGFwcGx5IHNpZ24gd2hpbGUgd2UncmUgYXQgaXRcclxuXHJcbiAgcmV0dXJuIChpc05hTihyZXMpID8gMCA6IHJlcykgKiBzaWduO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2U6IERhdGUsIG90aGVyOiBEYXRlKTogeyBtaWxsaXNlY29uZHM6IG51bWJlcjsgbW9udGhzOiBudW1iZXIgfSB7XHJcbiAgY29uc3QgcmVzID0geyBtaWxsaXNlY29uZHM6IDAsIG1vbnRoczogMCB9O1xyXG5cclxuICByZXMubW9udGhzID0gZ2V0TW9udGgob3RoZXIpIC0gZ2V0TW9udGgoYmFzZSkgK1xyXG4gICAgKGdldEZ1bGxZZWFyKG90aGVyKSAtIGdldEZ1bGxZZWFyKGJhc2UpKSAqIDEyO1xyXG4gIGNvbnN0IF9iYXNlUGx1cyA9IGFkZChjbG9uZURhdGUoYmFzZSksIHJlcy5tb250aHMsICdtb250aCcpO1xyXG4gIGlmIChpc0FmdGVyKF9iYXNlUGx1cywgb3RoZXIpKSB7XHJcbiAgICAtLXJlcy5tb250aHM7XHJcbiAgfVxyXG5cclxuICByZXMubWlsbGlzZWNvbmRzID0gK290aGVyIC0gKyhhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKSk7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbWVudHNEaWZmZXJlbmNlKGJhc2U6IERhdGUsIG90aGVyOiBEYXRlKTogeyBtaWxsaXNlY29uZHM6IG51bWJlcjsgbW9udGhzOiBudW1iZXIgfSB7XHJcbiAgaWYgKCEoaXNEYXRlVmFsaWQoYmFzZSkgJiYgaXNEYXRlVmFsaWQob3RoZXIpKSkge1xyXG4gICAgcmV0dXJuIHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcclxuICB9XHJcblxyXG4gIGxldCByZXM7XHJcbiAgY29uc3QgX290aGVyID0gY2xvbmVXaXRoT2Zmc2V0KG90aGVyLCBiYXNlLCB7X29mZnNldDogYmFzZS5nZXRUaW1lem9uZU9mZnNldCgpfSk7XHJcbiAgaWYgKGlzQmVmb3JlKGJhc2UsIF9vdGhlcikpIHtcclxuICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoYmFzZSwgX290aGVyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzID0gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShfb3RoZXIsIGJhc2UpO1xyXG4gICAgcmVzLm1pbGxpc2Vjb25kcyA9IC1yZXMubWlsbGlzZWNvbmRzO1xyXG4gICAgcmVzLm1vbnRocyA9IC1yZXMubW9udGhzO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4uL2R1cmF0aW9uL2NyZWF0ZSc7XHJcbmltcG9ydCB7IGFic1JvdW5kIH0gZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcclxuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IGdldERhdGUsIGdldE1vbnRoLCBnZXRUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgc2V0RGF0ZSwgc2V0TW9udGgsIHNldFRpbWUgfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xyXG5pbXBvcnQgeyBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZChkYXRlOiBEYXRlLCB2YWw6IG51bWJlciwgcGVyaW9kOiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBjb25zdCBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XHJcblxyXG4gIHJldHVybiBhZGRTdWJ0cmFjdChkYXRlLCBkdXIsIDEsIGlzVVRDKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YnRyYWN0KGRhdGU6IERhdGUsIHZhbDogbnVtYmVyLCBwZXJpb2Q6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGNvbnN0IGR1ciA9IGNyZWF0ZUR1cmF0aW9uKHZhbCwgcGVyaW9kKTtcclxuXHJcbiAgcmV0dXJuIGFkZFN1YnRyYWN0KGRhdGUsIGR1ciwgLTEsIGlzVVRDKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFN1YnRyYWN0KGRhdGU6IERhdGUsIGR1cmF0aW9uOiBEdXJhdGlvbiwgaXNBZGRpbmc6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgY29uc3QgbWlsbGlzZWNvbmRzID0gZHVyYXRpb24uX21pbGxpc2Vjb25kcztcclxuICBjb25zdCBkYXlzID0gYWJzUm91bmQoZHVyYXRpb24uX2RheXMpO1xyXG4gIGNvbnN0IG1vbnRocyA9IGFic1JvdW5kKGR1cmF0aW9uLl9tb250aHMpO1xyXG5cclxuICAvLyB0b2RvOiBhZGQgdGltZXpvbmVzIHN1cHBvcnRcclxuICAvLyBjb25zdCBfdXBkYXRlT2Zmc2V0ID0gdXBkYXRlT2Zmc2V0ID09IG51bGwgPyB0cnVlIDogdXBkYXRlT2Zmc2V0O1xyXG5cclxuICBpZiAobW9udGhzKSB7XHJcbiAgICBzZXRNb250aChkYXRlLCBnZXRNb250aChkYXRlLCBpc1VUQykgKyBtb250aHMgKiBpc0FkZGluZywgaXNVVEMpO1xyXG4gIH1cclxuICBpZiAoZGF5cykge1xyXG4gICAgc2V0RGF0ZShkYXRlLCBnZXREYXRlKGRhdGUsIGlzVVRDKSArIGRheXMgKiBpc0FkZGluZywgaXNVVEMpO1xyXG4gIH1cclxuICBpZiAobWlsbGlzZWNvbmRzKSB7XHJcbiAgICBzZXRUaW1lKGRhdGUsIGdldFRpbWUoZGF0ZSkgKyBtaWxsaXNlY29uZHMgKiBpc0FkZGluZyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY2xvbmVEYXRlKGRhdGUpO1xyXG4gIC8vIHRvZG86IGFkZCB0aW1lem9uZXMgc3VwcG9ydFxyXG4gIC8vIGlmIChfdXBkYXRlT2Zmc2V0KSB7XHJcbiAgLy8gICBob29rcy51cGRhdGVPZmZzZXQoZGF0ZSwgZGF5cyB8fCBtb250aHMpO1xyXG4gIC8vIH1cclxufVxyXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0RGF5IH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmctZmxhZ3MnO1xyXG5pbXBvcnQgeyBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBhZGQgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZXZWVrKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdkJywgbnVsbCwgJ2RvJyxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGdldERheShkYXRlLCBvcHRzLmlzVVRDKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ2RkJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzTWluKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignZGRkJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzU2hvcnQoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdkZGRkJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLndlZWtkYXlzKGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignZScsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgICAgLy8gcmV0dXJuIGdldERheShkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbignRScsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRJU09EYXlPZldlZWsoZGF0ZSwgb3B0cy5pc1VUQylcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygnZGF5JywgJ2QnKTtcclxuICBhZGRVbml0QWxpYXMoJ3dlZWtkYXknLCAnZScpO1xyXG4gIGFkZFVuaXRBbGlhcygnaXNvV2Vla2RheScsICdFJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF5JywgMTEpO1xyXG4gIGFkZFVuaXRQcmlvcml0eSgnd2Vla2RheScsIDExKTtcclxuICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWtkYXknLCAxMSk7XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ2QnLCBtYXRjaDF0bzIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2UnLCBtYXRjaDF0bzIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0UnLCBtYXRjaDF0bzIpO1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdkZCcsIGZ1bmN0aW9uKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IFJlZ0V4cCB7XHJcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzTWluUmVnZXgoaXNTdHJpY3QpO1xyXG4gIH0pO1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdkZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1Nob3J0UmVnZXgoaXNTdHJpY3QpO1xyXG4gIH0pO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2RkZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c1JlZ2V4KGlzU3RyaWN0KTtcclxuICB9KTtcclxuXHJcbiAgYWRkV2Vla1BhcnNlVG9rZW4oXHJcbiAgICBbJ2RkJywgJ2RkZCcsICdkZGRkJ10sXHJcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW4pIHtcclxuICAgICAgY29uc3Qgd2Vla2RheSA9IGNvbmZpZy5fbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQsIHRva2VuLCBjb25maWcuX3N0cmljdCk7XHJcbiAgICAgIC8vIGlmIHdlIGRpZG4ndCBnZXQgYSB3ZWVrZGF5IG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZFxyXG4gICAgICBpZiAod2Vla2RheSAhPSBudWxsKSB7XHJcbiAgICAgICAgd2Vlay5kID0gd2Vla2RheTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkV2Vla2RheSA9ICEhaW5wdXQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkV2Vla1BhcnNlVG9rZW4oXHJcbiAgICBbJ2QnLCAnZScsICdFJ10sXHJcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCB3ZWVrOiBXZWVrUGFyc2luZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgdG9rZW46IHN0cmluZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgICAgd2Vla1t0b2tlbl0gPSB0b0ludChpbnB1dCk7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuXHJcbi8vIEhFTFBFUlNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVdlZWtkYXkoaW5wdXQ6IHN0cmluZyB8IG51bWJlciwgbG9jYWxlOiBMb2NhbGUpOiBudW1iZXIge1xyXG4gIGlmICghaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBfbnVtID0gcGFyc2VJbnQoaW5wdXQsIDEwKTtcclxuICBpZiAoIWlzTmFOKF9udW0pKSB7XHJcbiAgICByZXR1cm4gX251bTtcclxuICB9XHJcblxyXG4gIGNvbnN0IF93ZWVrRGF5ID0gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpO1xyXG4gIGlmIChpc051bWJlcihfd2Vla0RheSkpIHtcclxuICAgIHJldHVybiBfd2Vla0RheTtcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VJc29XZWVrZGF5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIsIGxvY2FsZTogTG9jYWxlID0gZ2V0TG9jYWxlKCkpOiBudW1iZXIge1xyXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNQYXJzZShpbnB1dCkgJSA3IHx8IDc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaXNOdW1iZXIoaW5wdXQpICYmIGlzTmFOKGlucHV0KSA/IG51bGwgOiBpbnB1dDtcclxufVxyXG5cclxuLy8gTU9NRU5UU1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldERheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGlzVVRDPzogYm9vbGVhbjsgbG9jYWxlOiBMb2NhbGUgfSk6IERhdGUgfCBudW1iZXIge1xyXG4gIGlmICghaW5wdXQpIHtcclxuICAgIHJldHVybiBnZXREYXlPZldlZWsoZGF0ZSwgb3B0cy5pc1VUQyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2V0RGF5T2ZXZWVrKGRhdGUsIGlucHV0LCBvcHRzLmxvY2FsZSwgb3B0cy5pc1VUQyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGNvbnN0IGRheSA9IGdldERheShkYXRlLCBpc1VUQyk7XHJcbiAgY29uc3QgX2lucHV0ID0gcGFyc2VXZWVrZGF5KGlucHV0LCBsb2NhbGUpO1xyXG5cclxuICByZXR1cm4gYWRkKGRhdGUsIF9pbnB1dCAtIGRheSwgJ2RheScpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgcmV0dXJuIGdldERheShkYXRlLCBpc1VUQyk7XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi8vIHRvZG86IHV0Y1xyXG4vLyBnZXRTZXRMb2NhbGVEYXlPZldlZWtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2FsZURheU9mV2VlayhkYXRlOiBEYXRlLCBsb2NhbGUgPSBnZXRMb2NhbGUoKSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICByZXR1cm4gKGdldERheShkYXRlLCBpc1VUQykgKyA3IC0gbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCkpICUgNztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldExvY2FsZURheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCBvcHRzOiB7IGxvY2FsZT86IExvY2FsZTsgaXNVVEM/OiBib29sZWFuIH0gPSB7fSk6IERhdGUge1xyXG4gIGNvbnN0IHdlZWtkYXkgPSBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xyXG5cclxuICByZXR1cm4gYWRkKGRhdGUsIGlucHV0IC0gd2Vla2RheSwgJ2RheScpO1xyXG59XHJcblxyXG5cclxuLy8gZ2V0U2V0SVNPRGF5T2ZXZWVrXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09EYXlPZldlZWsoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICByZXR1cm4gZ2V0RGF5KGRhdGUsIGlzVVRDKSB8fCA3O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIgfCBzdHJpbmcsIG9wdHM6IHsgbG9jYWxlPzogTG9jYWxlIH0gPSB7fSk6IERhdGUge1xyXG4gIC8vIGJlaGF2ZXMgdGhlIHNhbWUgYXMgbW9tZW50I2RheSBleGNlcHRcclxuICAvLyBhcyBhIGdldHRlciwgcmV0dXJucyA3IGluc3RlYWQgb2YgMCAoMS03IHJhbmdlIGluc3RlYWQgb2YgMC02KVxyXG4gIC8vIGFzIGEgc2V0dGVyLCBzdW5kYXkgc2hvdWxkIGJlbG9uZyB0byB0aGUgcHJldmlvdXMgd2Vlay5cclxuXHJcbiAgY29uc3Qgd2Vla2RheSA9IHBhcnNlSXNvV2Vla2RheShpbnB1dCwgb3B0cy5sb2NhbGUpO1xyXG5cclxuICByZXR1cm4gc2V0RGF5T2ZXZWVrKGRhdGUsIGdldERheU9mV2VlayhkYXRlKSAlIDcgPyB3ZWVrZGF5IDogd2Vla2RheSAtIDcpO1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBBcmFiaWMgW2FyXVxyXG4vLyEgYXV0aG9yIDogQWJkZWwgU2FpZDogaHR0cHM6Ly9naXRodWIuY29tL2FiZGVsc2FpZFxyXG4vLyEgYXV0aG9yIDogQWhtZWQgRWxraGF0aWJcclxuLy8hIGF1dGhvciA6IGZvcmFiaSBodHRwczovL2dpdGh1Yi5jb20vZm9yYWJpXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG5jb25zdCBzeW1ib2xNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gIDE6ICfDmcKhJyxcclxuICAyOiAnw5nCoicsXHJcbiAgMzogJ8OZwqMnLFxyXG4gIDQ6ICfDmcKkJyxcclxuICA1OiAnw5nCpScsXHJcbiAgNjogJ8OZwqYnLFxyXG4gIDc6ICfDmcKnJyxcclxuICA4OiAnw5nCqCcsXHJcbiAgOTogJ8OZwqknLFxyXG4gIDA6ICfDmcKgJ1xyXG59O1xyXG5jb25zdCBudW1iZXJNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICfDmcKhJzogJzEnLFxyXG4gICfDmcKiJzogJzInLFxyXG4gICfDmcKjJzogJzMnLFxyXG4gICfDmcKkJzogJzQnLFxyXG4gICfDmcKlJzogJzUnLFxyXG4gICfDmcKmJzogJzYnLFxyXG4gICfDmcKnJzogJzcnLFxyXG4gICfDmcKoJzogJzgnLFxyXG4gICfDmcKpJzogJzknLFxyXG4gICfDmcKgJzogJzAnXHJcbn07XHJcbmNvbnN0IHBsdXJhbEZvcm0gPSBmdW5jdGlvbiAobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBudW0gPT09IDAgPyAwIDogbnVtID09PSAxID8gMSA6IG51bSA9PT0gMiA/IDIgOiBudW0gJSAxMDAgPj0gMyAmJiBudW0gJSAxMDAgPD0gMTAgPyAzIDogbnVtICUgMTAwID49IDExID8gNCA6IDU7XHJcbn07XHJcbmNvbnN0IHBsdXJhbHM6IHtba2V5OiBzdHJpbmddOiBbc3RyaW5nLCBzdHJpbmcsIFtzdHJpbmcsIHN0cmluZ10sIHN0cmluZywgc3RyaW5nLCBzdHJpbmddfSA9IHtcclxuICBzOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMKrw5jCp8OZwobDmcKKw5jCqScsICfDmMKrw5jCp8OZwobDmcKKw5jCqSDDmcKIw5jCp8OYwq3DmMKvw5jCqScsIFsnw5jCq8OYwqfDmcKGw5nCisOYwqrDmMKnw5nChicsICfDmMKrw5jCp8OZwobDmcKKw5jCqsOZworDmcKGJ10sICclZCDDmMKrw5nCiMOYwqfDmcKGJywgJyVkIMOYwqvDmMKnw5nChsOZworDmMKpJywgJyVkIMOYwqvDmMKnw5nChsOZworDmMKpJ10sXHJcbiAgbTogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCr8OZwoLDmcKKw5nCgsOYwqknLCAnw5jCr8OZwoLDmcKKw5nCgsOYwqkgw5nCiMOYwqfDmMKtw5jCr8OYwqknLCBbJ8OYwq/DmcKCw5nCisOZwoLDmMKqw5jCp8OZwoYnLCAnw5jCr8OZwoLDmcKKw5nCgsOYwqrDmcKKw5nChiddLCAnJWQgw5jCr8OZwoLDmMKnw5jCpsOZwoInLCAnJWQgw5jCr8OZwoLDmcKKw5nCgsOYwqknLCAnJWQgw5jCr8OZwoLDmcKKw5nCgsOYwqknXSxcclxuICBoOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMKzw5jCp8OYwrnDmMKpJywgJ8OYwrPDmMKnw5jCucOYwqkgw5nCiMOYwqfDmMKtw5jCr8OYwqknLCBbJ8OYwrPDmMKnw5jCucOYwqrDmMKnw5nChicsICfDmMKzw5jCp8OYwrnDmMKqw5nCisOZwoYnXSwgJyVkIMOYwrPDmMKnw5jCucOYwqfDmMKqJywgJyVkIMOYwrPDmMKnw5jCucOYwqknLCAnJWQgw5jCs8OYwqfDmMK5w5jCqSddLFxyXG4gIGQ6IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOZworDmcKIw5nChScsICfDmcKKw5nCiMOZwoUgw5nCiMOYwqfDmMKtw5jCrycsIFsnw5nCisOZwojDmcKFw5jCp8OZwoYnLCAnw5nCisOZwojDmcKFw5nCisOZwoYnXSwgJyVkIMOYwqPDmcKKw5jCp8OZwoUnLCAnJWQgw5nCisOZwojDmcKFw5nCi8OYwqcnLCAnJWQgw5nCisOZwojDmcKFJ10sXHJcbiAgTTogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCtMOZwofDmMKxJywgJ8OYwrTDmcKHw5jCsSDDmcKIw5jCp8OYwq3DmMKvJywgWyfDmMK0w5nCh8OYwrHDmMKnw5nChicsICfDmMK0w5nCh8OYwrHDmcKKw5nChiddLCAnJWQgw5jCo8OYwrTDmcKHw5jCsScsICclZCDDmMK0w5nCh8OYwrHDmMKnJywgJyVkIMOYwrTDmcKHw5jCsSddLFxyXG4gIHk6IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwrnDmMKnw5nChScsICfDmMK5w5jCp8OZwoUgw5nCiMOYwqfDmMKtw5jCrycsIFsnw5jCucOYwqfDmcKFw5jCp8OZwoYnLCAnw5jCucOYwqfDmcKFw5nCisOZwoYnXSwgJyVkIMOYwqPDmMK5w5nCiMOYwqfDmcKFJywgJyVkIMOYwrnDmMKnw5nChcOZwovDmMKnJywgJyVkIMOYwrnDmMKnw5nChSddXHJcbn07XHJcbmNvbnN0IHBsdXJhbGl6ZSA9IGZ1bmN0aW9uICh1OiBzdHJpbmcpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGYgPSBwbHVyYWxGb3JtKG51bSk7XHJcbiAgICBsZXQgc3RyID0gcGx1cmFsc1t1XVtwbHVyYWxGb3JtKG51bSldO1xyXG4gICAgaWYgKGYgPT09IDIpIHtcclxuICAgICAgc3RyID0gc3RyW3dpdGhvdXRTdWZmaXggPyAwIDogMV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChzdHIgYXMgc3RyaW5nKS5yZXBsYWNlKC8lZC9pLCBudW0udG9TdHJpbmcoKSk7XHJcbiAgfTtcclxufTtcclxuY29uc3QgbW9udGhzOiBzdHJpbmdbXSA9IFtcclxuICAnw5nCisOZwobDmMKnw5nCisOYwrEnLFxyXG4gICfDmcKBw5jCqMOYwrHDmMKnw5nCisOYwrEnLFxyXG4gICfDmcKFw5jCp8OYwrHDmMKzJyxcclxuICAnw5jCo8OYwqjDmMKxw5nCisOZwoQnLFxyXG4gICfDmcKFw5jCp8OZworDmcKIJyxcclxuICAnw5nCisOZwojDmcKGw5nCisOZwognLFxyXG4gICfDmcKKw5nCiMOZwoTDmcKKw5nCiCcsXHJcbiAgJ8OYwqPDmMK6w5jCs8OYwrfDmMKzJyxcclxuICAnw5jCs8OYwqjDmMKqw5nChcOYwqjDmMKxJyxcclxuICAnw5jCo8OZwoPDmMKqw5nCiMOYwqjDmMKxJyxcclxuICAnw5nChsOZwojDmcKBw5nChcOYwqjDmMKxJyxcclxuICAnw5jCr8OZworDmMKzw5nChcOYwqjDmMKxJ1xyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdhcicsXHJcbiAgbW9udGhzLFxyXG4gIG1vbnRoc1Nob3J0OiBtb250aHMsXHJcbiAgd2Vla2RheXM6ICfDmMKnw5nChMOYwqPDmMKtw5jCr1/DmMKnw5nChMOYwqXDmMKrw5nChsOZworDmcKGX8OYwqfDmcKEw5jCq8OZwoTDmMKnw5jCq8OYwqfDmMKhX8OYwqfDmcKEw5jCo8OYwrHDmMKow5jCucOYwqfDmMKhX8OYwqfDmcKEw5jCrsOZwoXDmcKKw5jCs1/DmMKnw5nChMOYwqzDmcKFw5jCucOYwqlfw5jCp8OZwoTDmMKzw5jCqMOYwqonLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ8OYwqPDmMKtw5jCr1/DmMKlw5jCq8OZwobDmcKKw5nChl/DmMKrw5nChMOYwqfDmMKrw5jCp8OYwqFfw5jCo8OYwrHDmMKow5jCucOYwqfDmMKhX8OYwq7DmcKFw5nCisOYwrNfw5jCrMOZwoXDmMK5w5jCqV/DmMKzw5jCqMOYwqonLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICfDmMKtX8OZwoZfw5jCq1/DmMKxX8OYwq5fw5jCrF/DmMKzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnRC9cXHUyMDBGTS9cXHUyMDBGWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL8OYwrV8w5nChS8sXHJcbiAgaXNQTShpbnB1dCkge1xyXG4gICAgcmV0dXJuICfDmcKFJyA9PT0gaW5wdXQ7XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuICfDmMK1JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnw5nChSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vDmMKnw5nChMOZworDmcKIw5nChSDDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW8OYwrrDmMKvw5nCi8OYwqcgw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OYwqPDmcKFw5jCsyDDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ2RkZGQgW8OYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnw5jCqMOYwrnDmMKvICVzJyxcclxuICAgIHBhc3Q6ICfDmcKFw5nChsOYwrAgJXMnLFxyXG4gICAgczogcGx1cmFsaXplKCdzJyksXHJcbiAgICBzczogcGx1cmFsaXplKCdzJyksXHJcbiAgICBtOiBwbHVyYWxpemUoJ20nKSxcclxuICAgIG1tOiBwbHVyYWxpemUoJ20nKSxcclxuICAgIGg6IHBsdXJhbGl6ZSgnaCcpLFxyXG4gICAgaGg6IHBsdXJhbGl6ZSgnaCcpLFxyXG4gICAgZDogcGx1cmFsaXplKCdkJyksXHJcbiAgICBkZDogcGx1cmFsaXplKCdkJyksXHJcbiAgICBNOiBwbHVyYWxpemUoJ00nKSxcclxuICAgIE1NOiBwbHVyYWxpemUoJ00nKSxcclxuICAgIHk6IHBsdXJhbGl6ZSgneScpLFxyXG4gICAgeXk6IHBsdXJhbGl6ZSgneScpXHJcbiAgfSxcclxuICBwcmVwYXJzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vDmcKhw5nCosOZwqPDmcKkw5nCpcOZwqbDmcKnw5nCqMOZwqnDmcKgXS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgcmV0dXJuIG51bWJlck1hcFttYXRjaF07XHJcbiAgICB9KS5yZXBsYWNlKC/DmMKML2csICcsJyk7XHJcbiAgfSxcclxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XHJcbiAgICB9KS5yZXBsYWNlKC8sL2csICfDmMKMJyk7XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDYsIC8vIFNhdHVyZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDEyICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IEtocm9ub3MgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEJ1bGdhcmlhbiBbYmddXHJcbi8vISBhdXRob3IgOiBJc2tyZW4gSXZvdiBDaGVybmV2IDogaHR0cHM6Ly9naXRodWIuY29tL2ljaGVybmV2XHJcbi8vISBhdXRob3IgOiBLdW5hbCBNYXJ3YWhhIDogaHR0cHM6Ly9naXRodWIuY29tL21hcndhaGFoYVxyXG4vLyEgYXV0aG9yIDogTWF0dCBHcmFuZGUgOiBodHRwczovL2dpdGh1Yi5jb20vbWF0dGdyYW5kZVxyXG4vLyEgYXV0aG9yIDogSXNhYWMgQ2FtYnJvbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2FtYnJvblxyXG4vLyEgYXV0aG9yIDogVmVuZWxpbiBNYW5jaGV2IDogaHR0cHM6Ly9naXRodWIuY29tL3ZtYW5jaGV2XHJcblxyXG5leHBvcnQgY29uc3QgYmdMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2JnJyxcclxuICBtb250aHM6ICfDkcKPw5DCvcORwoPDkMKww5HCgMOQwrhfw5HChMOQwrXDkMKyw5HCgMORwoPDkMKww5HCgMOQwrhfw5DCvMOQwrDDkcKAw5HCgl/DkMKww5DCv8ORwoDDkMK4w5DCu1/DkMK8w5DCsMOQwrlfw5HCjsOQwr3DkMK4X8ORwo7DkMK7w5DCuF/DkMKww5DCssOQwrPDkcKDw5HCgcORwoJfw5HCgcOQwrXDkMK/w5HCgsOQwrXDkMK8w5DCssORwoDDkMK4X8OQwr7DkMK6w5HCgsOQwr7DkMK8w5DCssORwoDDkMK4X8OQwr3DkMK+w5DCtcOQwrzDkMKyw5HCgMOQwrhfw5DCtMOQwrXDkMK6w5DCtcOQwrzDkMKyw5HCgMOQwrgnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICfDkcKPw5DCvcORwoBfw5HChMOQwrXDkMKyX8OQwrzDkMKww5HCgF/DkMKww5DCv8ORwoBfw5DCvMOQwrDDkMK5X8ORwo7DkMK9w5DCuF/DkcKOw5DCu8OQwrhfw5DCsMOQwrLDkMKzX8ORwoHDkMK1w5DCv1/DkMK+w5DCusORwoJfw5DCvcOQwr7DkMK1X8OQwrTDkMK1w5DCuicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ8OQwr3DkMK1w5DCtMOQwrXDkMK7w5HCj1/DkMK/w5DCvsOQwr3DkMK1w5DCtMOQwrXDkMK7w5DCvcOQwrjDkMK6X8OQwrLDkcKCw5DCvsORwoDDkMK9w5DCuMOQwrpfw5HCgcORwoDDkcKPw5DCtMOQwrBfw5HCh8OQwrXDkcKCw5DCssORworDkcKAw5HCgsORworDkMK6X8OQwr/DkMK1w5HCgsORworDkMK6X8ORwoHDkcKKw5DCscOQwr7DkcKCw5DCsCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnw5DCvcOQwrXDkMK0X8OQwr/DkMK+w5DCvV/DkMKyw5HCgsOQwr5fw5HCgcORwoDDkcKPX8ORwofDkMK1w5HCgl/DkMK/w5DCtcORwoJfw5HCgcORworDkMKxJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnw5DCvcOQwrRfw5DCv8OQwr1fw5DCssORwoJfw5HCgcORwoBfw5HCh8ORwoJfw5DCv8ORwoJfw5HCgcOQwrEnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdELk1NLllZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbw5DClMOQwr3DkMK1w5HCgSDDkMKyXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW8OQwqPDkcKCw5HCgMOQwrUgw5DCsl0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDkMKyXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OQwpLDkcKHw5DCtcORwoDDkMKwIMOQwrJdIExUJyxcclxuICAgIGxhc3RXZWVrOiBmdW5jdGlvbiAoZDogYW55KSB7XHJcblxyXG4gICAgICBzd2l0Y2ggKGQpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCuMOQwrfDkMK8w5DCuMOQwr3DkMKww5DCu8OQwrDDkcKCw5DCsF0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCuMOQwrfDkMK8w5DCuMOQwr3DkMKww5DCu8OQwrjDkcKPXSBkZGRkIFvDkMKyXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ8ORwoHDkMK7w5DCtcOQwrQgJXMnLFxyXG4gICAgcGFzdDogJ8OQwr/DkcKAw5DCtcOQwrTDkMK4ICVzJyxcclxuICAgIHM6ICfDkMK9w5HCj8OQwrrDkMK+w5DCu8OQwrrDkMK+IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMOQwrgnLFxyXG4gICAgc3M6ICclZCDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkMK4JyxcclxuICAgIG06ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsOQwrAnLFxyXG4gICAgbW06ICclZCDDkMK8w5DCuMOQwr3DkcKDw5HCgsOQwrgnLFxyXG4gICAgaDogJ8ORwofDkMKww5HCgScsXHJcbiAgICBoaDogJyVkIMORwofDkMKww5HCgcOQwrAnLFxyXG4gICAgZDogJ8OQwrTDkMK1w5DCvScsXHJcbiAgICBkZDogJyVkIMOQwrTDkMK9w5DCuCcsXHJcbiAgICBNOiAnw5DCvMOQwrXDkcKBw5DCtcORwoYnLFxyXG4gICAgTU06ICclZCDDkMK8w5DCtcORwoHDkMK1w5HChsOQwrAnLFxyXG4gICAgeTogJ8OQwrPDkMK+w5DCtMOQwrjDkMK9w5DCsCcsXHJcbiAgICB5eTogJyVkIMOQwrPDkMK+w5DCtMOQwrjDkMK9w5DCuCdcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0ow5DCtcOQwrJ8w5DCtcOQwr18w5HCgsOQwrh8w5DCssOQwrh8w5HCgMOQwrh8w5DCvMOQwrgpLyxcclxuICBvcmRpbmFsOiBmdW5jdGlvbiAoX251bTogbnVtYmVyKTogc3RyaW5nIHtcclxuXHJcbiAgICBjb25zdCBudW1iZXIgPSBOdW1iZXIoX251bSk7XHJcblxyXG4gICAgbGV0IGxhc3REaWdpdCA9IG51bWJlciAlIDEwLFxyXG4gICAgICBsYXN0MkRpZ2l0cyA9IG51bWJlciAlIDEwMDtcclxuXHJcbiAgICBpZiAobnVtYmVyID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrXDkMKyJztcclxuICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPT09IDApIHtcclxuICAgICAgcmV0dXJuIG51bWJlciArICctw5DCtcOQwr0nO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0MkRpZ2l0cyA+IDEwICYmIGxhc3QyRGlnaXRzIDwgMjApIHtcclxuICAgICAgcmV0dXJuIG51bWJlciArICctw5HCgsOQwrgnO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIG51bWJlciArICctw5DCssOQwrgnO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDIpIHtcclxuICAgICAgcmV0dXJuIG51bWJlciArICctw5HCgMOQwrgnO1xyXG4gICAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPT09IDcgfHwgbGFzdERpZ2l0ID09PSA4KSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrzDkMK4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcORwoLDkMK4JztcclxuICAgIH1cclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IENhdGFsYW4gW2NhXVxyXG4vLyEgYXV0aG9yIDogWGF2aWVyIEFyYmF0IDogaHR0cHM6Ly9naXRodWIuY29tL1hhdmlzYXVydXNSZXhcclxuXHJcbmxldCBtb250aHNTaG9ydERvdCA9ICdnZW4uX2ZlYi5fbWFyLl9hYnIuX21haS5fanVuLl9qdWwuX2Fnby5fc2V0Ll9vY3QuX25vdi5fZGVzLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWFpX2p1bl9qdWxfYWdvX3NldF9vY3Rfbm92X2Rlcycuc3BsaXQoJ18nKTtcclxuXHJcbmxldCBtb250aHNQYXJzZSA9IFsvXmdlbi9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1haS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmFnby9pLCAvXnNldC9pLCAvXm9jdC9pLCAvXm5vdi9pLCAvXmRlcy9pXTtcclxubGV0IG1vbnRoc1JlZ2V4ID0gL14oZ2VuZXJ8ZmVicmVyfG1hcsODwqd8YWJyaWx8bWFpZ3xqdW55fGp1bGlvbHxhZ29zdHxzZXRlbWJyZXxvY3R1YnJlfG5vdmVtYnJlfGRlc2VtYnJlfGdlblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG9jdFxcLj98bm92XFwuP3xkZXNcXC4/KS9pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdjYScsXHJcbiAgbW9udGhzOiAnZ2VuZXJfZmVicmVyX21hcsODwqdfYWJyaWxfbWFpZ19qdW55X2p1bGlvbF9hZ29zdF9zZXRlbWJyZV9vY3R1YnJlX25vdmVtYnJlX2Rlc2VtYnJlJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICB9LFxyXG4gIG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihnZW5lcnxmZWJyZXJ8bWFyw4PCp3xhYnJpbHxtYWlnfGp1bnl8anVsaW9sfGFnb3N0fHNldGVtYnJlfG9jdHVicmV8bm92ZW1icmV8ZGVzZW1icmUpL2ksXHJcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oZ2VuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNldFxcLj98b2N0XFwuP3xub3ZcXC4/fGRlc1xcLj8pL2ksXHJcbiAgbW9udGhzUGFyc2UsXHJcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICB3ZWVrZGF5czogJ2RpdW1lbmdlX2RpbGx1bnNfZGltYXJ0c19kaW1lY3Jlc19kaWpvdXNfZGl2ZW5kcmVzX2Rpc3NhYnRlJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkaXUuX2RpbC5fZGltLl9kaXguX2Rpai5fZGl2Ll9kaXMuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnZGdfZGxfZHRfZGNfZGpfZHZfZHMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXHJcbiAgICBMTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW2F2dWkgYSAnICsgKCdsYScgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ2xlcycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW2RlbWEgYSAnICsgKCdsYScgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ2xlcycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ2RkZGQgW2EgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1thaGlyIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgWycgKyAoJ3Bhc3NhZGEgbGEgJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncGFzc2FkZXMgbGVzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VuICVzJyxcclxuICAgIHBhc3Q6ICdmYSAlcycsXHJcbiAgICBzOiAndW5zIHNlZ29ucycsXHJcbiAgICBzczogJyVkIHNlZ29ucycsXHJcbiAgICBtOiAndW4gbWludXQnLFxyXG4gICAgbW06ICclZCBtaW51dHMnLFxyXG4gICAgaDogJ3VuYSBob3JhJyxcclxuICAgIGhoOiAnJWQgaG9yZXMnLFxyXG4gICAgZDogJ3VuIGRpYScsXHJcbiAgICBkZDogJyVkIGRpZXMnLFxyXG4gICAgTTogJ3VuIG1lcycsXHJcbiAgICBNTTogJyVkIG1lc29zJyxcclxuICAgIHk6ICd1biBhbnknLFxyXG4gICAgeXk6ICclZCBhbnlzJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KGVyfG9ufGVyfHJ0fMODwqkpLyxcclxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XHJcbiAgICBjb25zdCBvdXRwdXQgPSAobnVtID4gNCkgPyAnw4PCqScgOlxyXG4gICAgICAgIChudW0gPT09IDEgfHwgbnVtID09PSAzKSA/ICdyJyA6XHJcbiAgICAgICAgICAobnVtID09PSAyKSA/ICduJyA6XHJcbiAgICAgICAgICAgIChudW0gPT09IDQpID8gJ3QnIDogJ8ODwqknO1xyXG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogQ3plY2ggW2NzXVxyXG4vLyEgYXV0aG9yIDogcGV0cmJlbGEgOiBodHRwczovL2dpdGh1Yi5jb20vcGV0cmJlbGFcclxuXHJcbmNvbnN0IG1vbnRoczogc3RyaW5nW10gPSAnbGVkZW5fw4PCum5vcl9iw4XCmWV6ZW5fZHViZW5fa3bDhMKbdGVuX8OEwo1lcnZlbl/DhMKNZXJ2ZW5lY19zcnBlbl96w4PCocOFwpnDg8KtX8OFwpnDg8KtamVuX2xpc3RvcGFkX3Byb3NpbmVjJy5zcGxpdCgnXycpO1xyXG5jb25zdCBtb250aHNTaG9ydDogc3RyaW5nW10gPSAnbGVkX8ODwrpub19iw4XCmWVfZHViX2t2w4TCm1/DhMKNdm5fw4TCjXZjX3NycF96w4PCocOFwplfw4XCmcODwq1qX2xpc19wcm8nLnNwbGl0KCdfJyk7XHJcblxyXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gKG51bSA+IDEpICYmIChudW0gPCA1KSAmJiAofn4obnVtIC8gMTApICE9PSAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IHJlc3VsdCA9IG51bSArICcgJztcclxuXHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOiAgLy8gYSBmZXcgc2Vjb25kcyAvIGluIGEgZmV3IHNlY29uZHMgLyBhIGZldyBzZWNvbmRzIGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3DDg8KhciBzZWt1bmQnIDogJ3DDg8KhciBzZWt1bmRhbWknO1xyXG4gICAgY2FzZSAnc3MnOiAvLyA5IHNlY29uZHMgLyBpbiA5IHNlY29uZHMgLyA5IHNlY29uZHMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWt1bmQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Nla3VuZGFtaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAnbSc6ICAvLyBhIG1pbnV0ZSAvIGluIGEgbWludXRlIC8gYSBtaW51dGUgYWdvXHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAoaXNGdXR1cmUgPyAnbWludXR1JyA6ICdtaW51dG91Jyk7XHJcbiAgICBjYXNlICdtbSc6IC8vIDkgbWludXRlcyAvIGluIDkgbWludXRlcyAvIDkgbWludXRlcyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pbnV0eScgOiAnbWludXQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21pbnV0YW1pJztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgICBjYXNlICdoJzogIC8vIGFuIGhvdXIgLyBpbiBhbiBob3VyIC8gYW4gaG91ciBhZ29cclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnaG9kaW5hJyA6IChpc0Z1dHVyZSA/ICdob2RpbnUnIDogJ2hvZGlub3UnKTtcclxuICAgIGNhc2UgJ2hoJzogLy8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnaG9kaW55JyA6ICdob2RpbicpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnaG9kaW5hbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ2QnOiAgLy8gYSBkYXkgLyBpbiBhIGRheSAvIGEgZGF5IGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ2RlbicgOiAnZG5lbSc7XHJcbiAgICBjYXNlICdkZCc6IC8vIDkgZGF5cyAvIGluIDkgZGF5cyAvIDkgZGF5cyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2RueScgOiAnZG7Dg8KtJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdkbnknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ00nOiAgLy8gYSBtb250aCAvIGluIGEgbW9udGggLyBhIG1vbnRoIGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ23DhMKbc8ODwq1jJyA6ICdtw4TCm3PDg8KtY2VtJztcclxuICAgIGNhc2UgJ01NJzogLy8gOSBtb250aHMgLyBpbiA5IG1vbnRocyAvIDkgbW9udGhzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbcOEwptzw4PCrWNlJyA6ICdtw4TCm3PDg8KtY8OFwq8nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ23DhMKbc8ODwq1jaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAneSc6ICAvLyBhIHllYXIgLyBpbiBhIHllYXIgLyBhIHllYXIgYWdvXHJcbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncm9rJyA6ICdyb2tlbSc7XHJcbiAgICBjYXNlICd5eSc6IC8vIDkgeWVhcnMgLyBpbiA5IHllYXJzIC8gOSB5ZWFycyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Jva3knIDogJ2xldCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbGV0eSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdjcycsXHJcbiAgbW9udGhzLFxyXG4gIG1vbnRoc1Nob3J0LFxyXG4gIG1vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocywgbW9udGhzU2hvcnQpIHtcclxuICAgIGxldCBpLCBfbW9udGhzUGFyc2UgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIC8vIHVzZSBjdXN0b20gcGFyc2VyIHRvIHNvbHZlIHByb2JsZW0gd2l0aCBKdWx5ICjDhMKNZXJ2ZW5lYylcclxuICAgICAgX21vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNbaV0gKyAnJHxeJyArIG1vbnRoc1Nob3J0W2ldICsgJyQnLCAnaScpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9tb250aHNQYXJzZTtcclxuICB9KG1vbnRocywgbW9udGhzU2hvcnQpKSxcclxuICBzaG9ydE1vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRoc1Nob3J0KSB7XHJcbiAgICBsZXQgaSwgX3Nob3J0TW9udGhzUGFyc2UgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIF9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNTaG9ydFtpXSArICckJywgJ2knKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfc2hvcnRNb250aHNQYXJzZTtcclxuICB9KG1vbnRoc1Nob3J0KSksXHJcbiAgbG9uZ01vbnRoc1BhcnNlOiAoZnVuY3Rpb24gKG1vbnRocykge1xyXG4gICAgbGV0IGksIF9sb25nTW9udGhzUGFyc2UgPSBbXTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIF9sb25nTW9udGhzUGFyc2VbaV0gPSBuZXcgUmVnRXhwKCdeJyArIG1vbnRoc1tpXSArICckJywgJ2knKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfbG9uZ01vbnRoc1BhcnNlO1xyXG4gIH0obW9udGhzKSksXHJcbiAgd2Vla2RheXM6ICduZWTDhMKbbGVfcG9uZMOEwptsw4PCrV/Dg8K6dGVyw4PCvV9zdMOFwpllZGFfw4TCjXR2cnRla19ww4PCoXRla19zb2JvdGEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ25lX3BvX8ODwrp0X3N0X8OEwo10X3DDg8KhX3NvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnbmVfcG9fw4PCunRfc3Rfw4TCjXRfcMODwqFfc28nLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkIEQuIE1NTU0gWVlZWSBIOm1tJyxcclxuICAgIGw6ICdELiBNLiBZWVlZJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbZG5lcyB2XSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW3rDg8KtdHJhIHZdIExUJyxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW3YgbmVkw4TCm2xpIHZdIExUJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiAnW3ZlIHN0w4XCmWVkdSB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgcmV0dXJuICdbdmUgw4TCjXR2cnRlayB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdbdiBww4PCoXRlayB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgdl0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYSB2XSBMVCcsXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IG5lZMOEwptsaSB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCqV0gZGRkZCBbdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3Ugc3TDhcKZZWR1IHZdIExUJztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K9XSBkZGRkIFt2XSBMVCc7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWxvdSBzb2JvdHUgdl0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICd6YSAlcycsXHJcbiAgICBwYXN0OiAncMOFwpllZCAlcycsXHJcbiAgICBzOiB0cmFuc2xhdGUsXHJcbiAgICBzczogdHJhbnNsYXRlLFxyXG4gICAgbTogdHJhbnNsYXRlLFxyXG4gICAgbW06IHRyYW5zbGF0ZSxcclxuICAgIGg6IHRyYW5zbGF0ZSxcclxuICAgIGhoOiB0cmFuc2xhdGUsXHJcbiAgICBkOiB0cmFuc2xhdGUsXHJcbiAgICBkZDogdHJhbnNsYXRlLFxyXG4gICAgTTogdHJhbnNsYXRlLFxyXG4gICAgTU06IHRyYW5zbGF0ZSxcclxuICAgIHk6IHRyYW5zbGF0ZSxcclxuICAgIHl5OiB0cmFuc2xhdGVcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXHJcbiAgb3JkaW5hbDogJyVkLicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuXHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0XHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBEYW5pc2ggKERlbm1hcmspIFtkYV1cclxuLy8hIGF1dGhvciA6IFBlciBIYW5zZW4gOiBodHRwczovL2dpdGh1Yi5jb20vcGVyaHBcclxuXHJcbmV4cG9ydCBjb25zdCBkYUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZGEnLFxyXG4gIG1vbnRocyA6ICdKYW51YXJfRmVicnVhcl9NYXJ0c19BcHJpbF9NYWpfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWFqX0p1bl9KdWxfQXVnX1NlcF9Pa3RfTm92X0RlYycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6ICdTw4PCuG5kYWdfTWFuZGFnX1RpcnNkYWdfT25zZGFnX1RvcnNkYWdfRnJlZGFnX0zDg8K4cmRhZycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0IDogJ1PDg8K4bl9NYW5fVGlyX09uc19Ub3JfRnJlX0zDg8K4cicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICdTw4PCuF9NYV9UaV9Pbl9Ub19Gcl9Mw4PCuCcuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgICAgTFQgOiAnSEg6bW0nLFxyXG4gICAgICBMVFMgOiAnSEg6bW06c3MnLFxyXG4gICAgICBMIDogJ0REL01NL1lZWVknLFxyXG4gICAgICBMTCA6ICdELiBNTU1NIFlZWVknLFxyXG4gICAgICBMTEwgOiAnRC4gTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgICAgTExMTCA6ICdkZGRkIFtkLl0gRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICAgIHNhbWVEYXkgOiAnW2kgZGFnIGtsLl0gTFQnLFxyXG4gICAgICBuZXh0RGF5IDogJ1tpIG1vcmdlbiBrbC5dIExUJyxcclxuICAgICAgbmV4dFdlZWsgOiAncMODwqUgZGRkZCBba2wuXSBMVCcsXHJcbiAgICAgIGxhc3REYXkgOiAnW2kgZ8ODwqVyIGtsLl0gTFQnLFxyXG4gICAgICBsYXN0V2VlayA6ICdbaV0gZGRkZFtzIGtsLl0gTFQnLFxyXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgICBmdXR1cmUgOiAnb20gJXMnLFxyXG4gICAgICBwYXN0IDogJyVzIHNpZGVuJyxcclxuICAgICAgcyA6ICdmw4PCpSBzZWt1bmRlcicsXHJcbiAgICAgIG0gOiAnZXQgbWludXQnLFxyXG4gICAgICBtbSA6ICclZCBtaW51dHRlcicsXHJcbiAgICAgIGggOiAnZW4gdGltZScsXHJcbiAgICAgIGhoIDogJyVkIHRpbWVyJyxcclxuICAgICAgZCA6ICdlbiBkYWcnLFxyXG4gICAgICBkZCA6ICclZCBkYWdlJyxcclxuICAgICAgTSA6ICdlbiBtw4PCpW5lZCcsXHJcbiAgICAgIE1NIDogJyVkIG3Dg8KlbmVkZXInLFxyXG4gICAgICB5IDogJ2V0IMODwqVyJyxcclxuICAgICAgeXkgOiAnJWQgw4PCpXInXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWwgOiAnJWQuJyxcclxuICB3ZWVrIDoge1xyXG4gICAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuXHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwta2V5LXF1b3Rlc1xyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogR2VybWFuIFtkZV1cclxuLy8hIGF1dGhvciA6IGxsdWNocyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9sbHVjaHNcclxuLy8hIGF1dGhvcjogTWVuZWxpb24gRWxlbnPDg8K6bGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXHJcbi8vISBhdXRob3IgOiBNaWtvbGFqIERhZGVsYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWswMWFqXHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IGZvcm1hdDogeyBba2V5OiBzdHJpbmddOiBbc3RyaW5nLCBzdHJpbmddIH0gPSB7XHJcbiAgICAnbSc6IFsnZWluZSBNaW51dGUnLCAnZWluZXIgTWludXRlJ10sXHJcbiAgICAnaCc6IFsnZWluZSBTdHVuZGUnLCAnZWluZXIgU3R1bmRlJ10sXHJcbiAgICAnZCc6IFsnZWluIFRhZycsICdlaW5lbSBUYWcnXSxcclxuICAgICdkZCc6IFtudW0gKyAnIFRhZ2UnLCBudW0gKyAnIFRhZ2VuJ10sXHJcbiAgICAnTSc6IFsnZWluIE1vbmF0JywgJ2VpbmVtIE1vbmF0J10sXHJcbiAgICAnTU0nOiBbbnVtICsgJyBNb25hdGUnLCBudW0gKyAnIE1vbmF0ZW4nXSxcclxuICAgICd5JzogWydlaW4gSmFocicsICdlaW5lbSBKYWhyJ10sXHJcbiAgICAneXknOiBbbnVtICsgJyBKYWhyZScsIG51bSArICcgSmFocmVuJ11cclxuICB9O1xyXG4gIHJldHVybiB3aXRob3V0U3VmZml4ID8gZm9ybWF0W2tleV1bMF0gOiBmb3JtYXRba2V5XVsxXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdkZScsXHJcbiAgbW9udGhzOiAnSmFudWFyX0ZlYnJ1YXJfTcODwqRyel9BcHJpbF9NYWlfSnVuaV9KdWxpX0F1Z3VzdF9TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXplbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ0phbi5fRmViLl9Nw4PCpHJ6X0Fwci5fTWFpX0p1bmlfSnVsaV9BdWcuX1NlcC5fT2t0Ll9Ob3YuX0Rlei4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ1Nvbm50YWdfTW9udGFnX0RpZW5zdGFnX01pdHR3b2NoX0Rvbm5lcnN0YWdfRnJlaXRhZ19TYW1zdGFnJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdTby5fTW8uX0RpLl9NaS5fRG8uX0ZyLl9TYS4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdTb19Nb19EaV9NaV9Eb19Gcl9TYScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBELiBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1toZXV0ZSB1bV0gTFQgW1Vocl0nLFxyXG4gICAgc2FtZUVsc2U6ICdMJyxcclxuICAgIG5leHREYXk6ICdbbW9yZ2VuIHVtXSBMVCBbVWhyXScsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW3VtXSBMVCBbVWhyXScsXHJcbiAgICBsYXN0RGF5OiAnW2dlc3Rlcm4gdW1dIExUIFtVaHJdJyxcclxuICAgIGxhc3RXZWVrOiAnW2xldHp0ZW5dIGRkZGQgW3VtXSBMVCBbVWhyXSdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnaW4gJXMnLFxyXG4gICAgcGFzdDogJ3ZvciAlcycsXHJcbiAgICBzOiAnZWluIHBhYXIgU2VrdW5kZW4nLFxyXG4gICAgc3M6ICclZCBTZWt1bmRlbicsXHJcbiAgICBtOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgbW06ICclZCBNaW51dGVuJyxcclxuICAgIGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBoaDogJyVkIFN0dW5kZW4nLFxyXG4gICAgZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIGRkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIE1NOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgeTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIHl5OiBwcm9jZXNzUmVsYXRpdmVUaW1lXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWw6ICclZC4nLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEVuZ2xpc2ggKFVuaXRlZCBLaW5nZG9tKSBbZW4tZ2JdXHJcbi8vISBhdXRob3IgOiBDaHJpcyBHZWRyaW0gOiBodHRwczovL2dpdGh1Yi5jb20vY2hyaXNnZWRyaW1cclxuXHJcbmV4cG9ydCBjb25zdCBlbkdiTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdlbi1nYicsXHJcbiAgbW9udGhzIDogJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01heV9KdW5fSnVsX0F1Z19TZXBfT2N0X05vdl9EZWMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiAnU3VuZGF5X01vbmRheV9UdWVzZGF5X1dlZG5lc2RheV9UaHVyc2RheV9GcmlkYXlfU2F0dXJkYXknLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAnU3VfTW9fVHVfV2VfVGhfRnJfU2EnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICBMVCA6ICdISDptbScsXHJcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxyXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMIDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICBzYW1lRGF5IDogJ1tUb2RheSBhdF0gTFQnLFxyXG4gICAgbmV4dERheSA6ICdbVG9tb3Jyb3cgYXRdIExUJyxcclxuICAgIG5leHRXZWVrIDogJ2RkZGQgW2F0XSBMVCcsXHJcbiAgICBsYXN0RGF5IDogJ1tZZXN0ZXJkYXkgYXRdIExUJyxcclxuICAgIGxhc3RXZWVrIDogJ1tMYXN0XSBkZGRkIFthdF0gTFQnLFxyXG4gICAgc2FtZUVsc2UgOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZSA6IHtcclxuICAgIGZ1dHVyZSA6ICdpbiAlcycsXHJcbiAgICBwYXN0IDogJyVzIGFnbycsXHJcbiAgICBzIDogJ2EgZmV3IHNlY29uZHMnLFxyXG4gICAgc3MgOiAnJWQgc2Vjb25kcycsXHJcbiAgICBtIDogJ2EgbWludXRlJyxcclxuICAgIG1tIDogJyVkIG1pbnV0ZXMnLFxyXG4gICAgaCA6ICdhbiBob3VyJyxcclxuICAgIGhoIDogJyVkIGhvdXJzJyxcclxuICAgIGQgOiAnYSBkYXknLFxyXG4gICAgZGQgOiAnJWQgZGF5cycsXHJcbiAgICBNIDogJ2EgbW9udGgnLFxyXG4gICAgTU0gOiAnJWQgbW9udGhzJyxcclxuICAgIHkgOiAnYSB5ZWFyJyxcclxuICAgIHl5IDogJyVkIHllYXJzJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0fG5kfHJkfHRoKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgY29uc3QgYiA9IG51bSAlIDEwLFxyXG4gICAgICBvdXRwdXQgPSAofn4obnVtICUgMTAwIC8gMTApID09PSAxKSA/ICd0aCcgOlxyXG4gICAgICAgIChiID09PSAxKSA/ICdzdCcgOlxyXG4gICAgICAgICAgKGIgPT09IDIpID8gJ25kJyA6XHJcbiAgICAgICAgICAgIChiID09PSAzKSA/ICdyZCcgOiAndGgnO1xyXG4gICAgcmV0dXJuIG51bSArIG91dHB1dDtcclxuICB9LFxyXG4gIHdlZWsgOiB7XHJcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBTcGFuaXNoIChEb21pbmljYW4gUmVwdWJsaWMpIFtlcy1kb11cclxuXHJcbmxldCBtb250aHNTaG9ydERvdCA9ICdlbmUuX2ZlYi5fbWFyLl9hYnIuX21heS5fanVuLl9qdWwuX2Fnby5fc2VwLl9vY3QuX25vdi5fZGljLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKTtcclxuXHJcbmxldCBtb250aHNQYXJzZSA9IFsvXmVuZS9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmFnby9pLCAvXnNlcC9pLCAvXm9jdC9pLCAvXm5vdi9pLCAvXmRpYy9pXTtcclxubGV0IG1vbnRoc1JlZ2V4ID0gL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZXxlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaTtcclxuXHJcbmV4cG9ydCBjb25zdCBlc0RvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdlcy1kbycsXHJcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcclxuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxyXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pLFxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacODwqlyY29sZXNfanVldmVzX3ZpZXJuZXNfc8ODwqFiYWRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacODwqkuX2p1ZS5fdmllLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ2g6bW0gQScsXHJcbiAgICBMVFM6ICdoOm1tOnNzIEEnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIGg6bW0gQScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIGg6bW0gQSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnZW4gJXMnLFxyXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxyXG4gICAgczogJ3Vub3Mgc2VndW5kb3MnLFxyXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXHJcbiAgICBtOiAndW4gbWludXRvJyxcclxuICAgIG1tOiAnJWQgbWludXRvcycsXHJcbiAgICBoOiAndW5hIGhvcmEnLFxyXG4gICAgaGg6ICclZCBob3JhcycsXHJcbiAgICBkOiAndW4gZMODwq1hJyxcclxuICAgIGRkOiAnJWQgZMODwq1hcycsXHJcbiAgICBNOiAndW4gbWVzJyxcclxuICAgIE1NOiAnJWQgbWVzZXMnLFxyXG4gICAgeTogJ3VuIGHDg8KxbycsXHJcbiAgICB5eTogJyVkIGHDg8Kxb3MnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcclxuICBvcmRpbmFsOiAnJWTDgsK6JyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBTcGFuaXNoIFtlc11cclxuLy8hIGF1dGhvciA6IEp1bGlvIE5hcHVyw4PCrSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qdWxpb25jXHJcblxyXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL15lbmUvaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hZ28vaSwgL15zZXAvaSwgL15vY3QvaSwgL15ub3YvaSwgL15kaWMvaV07XHJcbmxldCBtb250aHNSZWdleCA9IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XHJcblxyXG5leHBvcnQgY29uc3QgZXNMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2VzJyxcclxuICBtb250aHM6ICdlbmVyb19mZWJyZXJvX21hcnpvX2FicmlsX21heW9fanVuaW9fanVsaW9fYWdvc3RvX3NlcHRpZW1icmVfb2N0dWJyZV9ub3ZpZW1icmVfZGljaWVtYnJlJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICB9LFxyXG4gIG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1Nob3J0UmVnZXg6IG1vbnRoc1JlZ2V4LFxyXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlKS9pLFxyXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pLFxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacODwqlyY29sZXNfanVldmVzX3ZpZXJuZXNfc8ODwqFiYWRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacODwqkuX2p1ZS5fdmllLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWScsXHJcbiAgICBMTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheShkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW2hveSBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbYXllciBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnZW4gJXMnLFxyXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxyXG4gICAgczogJ3Vub3Mgc2VndW5kb3MnLFxyXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXHJcbiAgICBtOiAndW4gbWludXRvJyxcclxuICAgIG1tOiAnJWQgbWludXRvcycsXHJcbiAgICBoOiAndW5hIGhvcmEnLFxyXG4gICAgaGg6ICclZCBob3JhcycsXHJcbiAgICBkOiAndW4gZMODwq1hJyxcclxuICAgIGRkOiAnJWQgZMODwq1hcycsXHJcbiAgICBNOiAndW4gbWVzJyxcclxuICAgIE1NOiAnJWQgbWVzZXMnLFxyXG4gICAgeTogJ3VuIGHDg8KxbycsXHJcbiAgICB5eTogJyVkIGHDg8Kxb3MnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcclxuICBvcmRpbmFsOiAnJWTDgsK6JyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBTcGFuaXNoIChVbml0ZWQgU3RhdGVzKSBbZXMtdXNdXHJcbi8vISBhdXRob3IgOiBidXN0dGEgOiBodHRwczovL2dpdGh1Yi5jb20vYnVzdHRhXHJcblxyXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyk7XHJcbmxldCBtb250aHNTaG9ydCA9ICdlbmVfZmViX21hcl9hYnJfbWF5X2p1bl9qdWxfYWdvX3NlcF9vY3Rfbm92X2RpYycuc3BsaXQoJ18nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBlc1VzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdlcy11cycsXHJcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcclxuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3RbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bmVzX21hcnRlc19tacODwqlyY29sZXNfanVldmVzX3ZpZXJuZXNfc8ODwqFiYWRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb20uX2x1bi5fbWFyLl9tacODwqkuX2p1ZS5fdmllLl9zw4PCoWIuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnZG9fbHVfbWFfbWlfanVfdmlfc8ODwqEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ2g6bW0gQScsXHJcbiAgICBMVFM6ICdoOm1tOnNzIEEnLFxyXG4gICAgTDogJ01NL0REL1lZWVknLFxyXG4gICAgTEw6ICdNTU1NIFtkZV0gRCBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnTU1NTSBbZGVdIEQgW2RlXSBZWVlZIGg6bW0gQScsXHJcbiAgICBMTExMOiAnZGRkZCwgTU1NTSBbZGVdIEQgW2RlXSBZWVlZIGg6bW0gQSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1ttYcODwrFhbmEgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdkZGRkIFthIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdbZWxdIGRkZGQgW3Bhc2FkbyBhIGxhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnZW4gJXMnLFxyXG4gICAgcGFzdDogJ2hhY2UgJXMnLFxyXG4gICAgczogJ3Vub3Mgc2VndW5kb3MnLFxyXG4gICAgc3M6ICclZCBzZWd1bmRvcycsXHJcbiAgICBtOiAndW4gbWludXRvJyxcclxuICAgIG1tOiAnJWQgbWludXRvcycsXHJcbiAgICBoOiAndW5hIGhvcmEnLFxyXG4gICAgaGg6ICclZCBob3JhcycsXHJcbiAgICBkOiAndW4gZMODwq1hJyxcclxuICAgIGRkOiAnJWQgZMODwq1hcycsXHJcbiAgICBNOiAndW4gbWVzJyxcclxuICAgIE1NOiAnJWQgbWVzZXMnLFxyXG4gICAgeTogJ3VuIGHDg8KxbycsXHJcbiAgICB5eTogJyVkIGHDg8Kxb3MnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcclxuICBvcmRpbmFsOiAnJWTDgsK6JyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2Jsb2IvZGV2ZWxvcC9sb2NhbGUvZmkuanNcclxuXHJcbnZhciBudW1iZXJzUGFzdCA9ICdub2xsYSB5a3NpIGtha3NpIGtvbG1lIG5lbGrDg8KkIHZpaXNpIGt1dXNpIHNlaXRzZW3Dg8KkbiBrYWhkZWtzYW4geWhkZWtzw4PCpG4nLnNwbGl0KCcgJyksXHJcbiAgbnVtYmVyc0Z1dHVyZSA9IFtcclxuICAgICdub2xsYScsICd5aGRlbicsICdrYWhkZW4nLCAna29sbWVuJywgJ25lbGrDg8KkbicsICd2aWlkZW4nLCAna3V1ZGVuJyxcclxuICAgIG51bWJlcnNQYXN0WzddLCBudW1iZXJzUGFzdFs4XSwgbnVtYmVyc1Bhc3RbOV1cclxuICBdO1xyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIHZhciByZXN1bHQgPSAnJztcclxuICBzd2l0Y2ggKGtleSkge1xyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtdXV0YW1hbiBzZWt1bm5pbicgOiAnbXV1dGFtYSBzZWt1bnRpJztcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3Nla3VubmluJyA6ICdzZWt1bnRpYSc7XHJcbiAgICBjYXNlICdtJzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aSc7XHJcbiAgICBjYXNlICdtbSc6XHJcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ21pbnV1dGluJyA6ICdtaW51dXR0aWEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndHVubmluJyA6ICd0dW50aSc7XHJcbiAgICBjYXNlICdoaCc6XHJcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3R1bm5pbicgOiAndHVudGlhJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdkJzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3DDg8KkaXbDg8KkbicgOiAncMODwqRpdsODwqQnO1xyXG4gICAgY2FzZSAnZGQnOlxyXG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdww4PCpGl2w4PCpG4nIDogJ3DDg8KkaXbDg8Kkw4PCpCc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnTSc6XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrdXVrYXVkZW4nIDogJ2t1dWthdXNpJztcclxuICAgIGNhc2UgJ01NJzpcclxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXV0dGEnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ3knOlxyXG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAndnVvZGVuJyA6ICd2dW9zaSc7XHJcbiAgICBjYXNlICd5eSc6XHJcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ3Z1b2RlbicgOiAndnVvdHRhJztcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG4gIHJlc3VsdCA9IHZlcmJhbE51bWJlcihudW0sIGlzRnV0dXJlKSArICcgJyArIHJlc3VsdDtcclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiB2ZXJiYWxOdW1iZXIobnVtOiBudW1iZXIsIGlzRnV0dXJlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIG51bSA8IDEwID8gKGlzRnV0dXJlID8gbnVtYmVyc0Z1dHVyZVtudW1dIDogbnVtYmVyc1Bhc3RbbnVtXSkgOiBudW07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBmaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZmknLFxyXG4gIG1vbnRoczogJ3RhbW1pa3V1X2hlbG1pa3V1X21hYWxpc2t1dV9odWh0aWt1dV90b3Vrb2t1dV9rZXPDg8Kka3V1X2hlaW7Dg8Kka3V1X2Vsb2t1dV9zeXlza3V1X2xva2FrdXVfbWFycmFza3V1X2pvdWx1a3V1Jy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAndGFtbWlfaGVsbWlfbWFhbGlzX2h1aHRpX3RvdWtvX2tlc8ODwqRfaGVpbsODwqRfZWxvX3N5eXNfbG9rYV9tYXJyYXNfam91bHUnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICdzdW5udW50YWlfbWFhbmFudGFpX3RpaXN0YWlfa2Vza2l2aWlra29fdG9yc3RhaV9wZXJqYW50YWlfbGF1YW50YWknLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ3N1X21hX3RpX2tlX3RvX3BlX2xhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnc3VfbWFfdGlfa2VfdG9fcGVfbGEnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEgubW0nLFxyXG4gICAgTFRTOiAnSEgubW0uc3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdEbyBNTU1NW3RhXSBZWVlZJyxcclxuICAgIExMTDogJ0RvIE1NTU1bdGFdIFlZWVksIFtrbG9dIEhILm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXHJcbiAgICBsOiAnRC5NLllZWVknLFxyXG4gICAgbGw6ICdEbyBNTU0gWVlZWScsXHJcbiAgICBsbGw6ICdEbyBNTU0gWVlZWSwgW2tsb10gSEgubW0nLFxyXG4gICAgbGxsbDogJ2RkZCwgRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbdMODwqRuw4PCpMODwqRuXSBba2xvXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW2h1b21lbm5hXSBba2xvXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW2tsb10gTFQnLFxyXG4gICAgbGFzdERheTogJ1tlaWxlbl0gW2tsb10gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbdmlpbWVdIGRkZGRbbmFdIFtrbG9dIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnJXMgcMODwqTDg8Kkc3TDg8KkJyxcclxuICAgIHBhc3Q6ICclcyBzaXR0ZW4nLFxyXG4gICAgczogdHJhbnNsYXRlLFxyXG4gICAgc3M6IHRyYW5zbGF0ZSxcclxuICAgIG06IHRyYW5zbGF0ZSxcclxuICAgIG1tOiB0cmFuc2xhdGUsXHJcbiAgICBoOiB0cmFuc2xhdGUsXHJcbiAgICBoaDogdHJhbnNsYXRlLFxyXG4gICAgZDogdHJhbnNsYXRlLFxyXG4gICAgZGQ6IHRyYW5zbGF0ZSxcclxuICAgIE06IHRyYW5zbGF0ZSxcclxuICAgIE1NOiB0cmFuc2xhdGUsXHJcbiAgICB5OiB0cmFuc2xhdGUsXHJcbiAgICB5eTogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWw6ICclZC4nLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEZyZW5jaCBbZnJdXHJcbi8vISBhdXRob3IgOiBKb2huIEZpc2NoZXIgOiBodHRwczovL2dpdGh1Yi5jb20vamZyb2ZmaWNlXHJcblxyXG5leHBvcnQgY29uc3QgZnJMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2ZyJyxcclxuICBtb250aHM6ICdqYW52aWVyX2bDg8KpdnJpZXJfbWFyc19hdnJpbF9tYWlfanVpbl9qdWlsbGV0X2Fvw4PCu3Rfc2VwdGVtYnJlX29jdG9icmVfbm92ZW1icmVfZMODwqljZW1icmUnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdqYW52Ll9mw4PCqXZyLl9tYXJzX2F2ci5fbWFpX2p1aW5fanVpbC5fYW/Dg8K7dF9zZXB0Ll9vY3QuX25vdi5fZMODwqljLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnZGltYW5jaGVfbHVuZGlfbWFyZGlfbWVyY3JlZGlfamV1ZGlfdmVuZHJlZGlfc2FtZWRpJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkaW0uX2x1bi5fbWFyLl9tZXIuX2pldS5fdmVuLl9zYW0uJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnZGlfbHVfbWFfbWVfamVfdmVfc2EnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tBdWpvdXJkw6LCgMKZaHVpIMODwqBdIExUJyxcclxuICAgIG5leHREYXk6ICdbRGVtYWluIMODwqBdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbw4PCoF0gTFQnLFxyXG4gICAgbGFzdERheTogJ1tIaWVyIMODwqBdIExUJyxcclxuICAgIGxhc3RXZWVrOiAnZGRkZCBbZGVybmllciDDg8KgXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2RhbnMgJXMnLFxyXG4gICAgcGFzdDogJ2lsIHkgYSAlcycsXHJcbiAgICBzOiAncXVlbHF1ZXMgc2Vjb25kZXMnLFxyXG4gICAgc3M6ICclZCBzZWNvbmRlcycsXHJcbiAgICBtOiAndW5lIG1pbnV0ZScsXHJcbiAgICBtbTogJyVkIG1pbnV0ZXMnLFxyXG4gICAgaDogJ3VuZSBoZXVyZScsXHJcbiAgICBoaDogJyVkIGhldXJlcycsXHJcbiAgICBkOiAndW4gam91cicsXHJcbiAgICBkZDogJyVkIGpvdXJzJyxcclxuICAgIE06ICd1biBtb2lzJyxcclxuICAgIE1NOiAnJWQgbW9pcycsXHJcbiAgICB5OiAndW4gYW4nLFxyXG4gICAgeXk6ICclZCBhbnMnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXJ8KS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIC8vIFRPRE86IFJldHVybiAnZScgd2hlbiBkYXkgb2YgbW9udGggPiAxLiBNb3ZlIHRoaXMgY2FzZSBpbnNpZGVcclxuICAgICAgLy8gYmxvY2sgZm9yIG1hc2N1bGluZSB3b3JkcyBiZWxvdy5cclxuICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2lzc3Vlcy8zMzc1XHJcbiAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ2VyJyA6ICcnKTtcclxuXHJcbiAgICAgIC8vIFdvcmRzIHdpdGggbWFzY3VsaW5lIGdyYW1tYXRpY2FsIGdlbmRlcjogbW9pcywgdHJpbWVzdHJlLCBqb3VyXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICBjYXNlICdRJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAnZXInIDogJ2UnKTtcclxuXHJcbiAgICAgIC8vIFdvcmRzIHdpdGggZmVtaW5pbmUgZ3JhbW1hdGljYWwgZ2VuZGVyOiBzZW1haW5lXHJcbiAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICBjYXNlICdXJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdyZScgOiAnZScpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuXHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0SG91cnMsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEdhbGljaWFuIFtnbF1cclxuLy8hIGF1dGhvciA6IERhcsODwq1vIEJlaXLDg8KzIDogaHR0cHM6Ly9naXRodWIuY29tL3F1aW5vYnJhdm9cclxuXHJcbmxldCBtb250aHNTaG9ydERvdCA9ICd4YW4uX2ZlYi5fbWFyLl9hYnIuX21haS5feHXDg8KxLl94dWwuX2Fnby5fc2V0Ll9vdXQuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA9ICd4YW5fZmViX21hcl9hYnJfbWFpX3h1w4PCsV94dWxfYWdvX3NldF9vdXRfbm92X2RlYycuc3BsaXQoJ18nKTtcclxuXHJcbmxldCBtb250aHNQYXJzZSA9IFsvXnhhbi9pLCAvXmZlYi9pLCAvXm1hci9pLCAvXmFici9pLCAvXm1haS9pLCAvXnh1w4PCsS9pLCAvXnh1bC9pLCAvXmFnby9pLCAvXnNldC9pLCAvXm91dC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcclxubGV0IG1vbnRoc1JlZ2V4ID0gL14oeGFuZWlyb3xmZWJyZWlyb3xtYXJ6b3xhYnJpbHxtYWlvfHh1w4PCsW98eHVsbG98YWdvc3RvfHNldGVtYnJvfG91dHVicm98bm92ZW1icm98ZGVjZW1icm98eGFuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fHh1w4PCsVxcLj98eHVsXFwuP3xhZ29cXC4/fHNldFxcLj98b3V0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XHJcblxyXG5leHBvcnQgY29uc3QgZ2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2dsJyxcclxuICBtb250aHM6ICd4YW5laXJvX2ZlYnJlaXJvX21hcnpvX2FicmlsX21haW9feHXDg8Kxb194dWxsb19hZ29zdG9fc2V0ZW1icm9fb3V0dWJyb19ub3ZlbWJyb19kZWNlbWJybycuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgfSxcclxuICBtb250aHNSZWdleCxcclxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcclxuICBtb250aHNTdHJpY3RSZWdleDogL14oeGFuZWlyb3xmZWJyZWlyb3xtYXJ6b3xhYnJpbHxtYWlvfHh1w4PCsW98eHVsbG98YWdvc3RvfHNldGVtYnJvfG91dHVicm98bm92ZW1icm98ZGVjZW1icm8pL2ksXHJcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oeGFuXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYWlcXC4/fHh1w4PCsVxcLj98eHVsXFwuP3xhZ29cXC4/fHNldFxcLj98b3V0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXHJcbiAgbW9udGhzUGFyc2UsXHJcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICB3ZWVrZGF5czogJ2RvbWluZ29fbHVuc19tYXJ0ZXNfbcODwqlyY29yZXNfeG92ZXNfdmVucmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbcODwqlyLl94b3YuX3Zlbi5fc8ODwqFiLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX23Dg8KpX3hvX3ZlX3PDg8KhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tob3hlIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dERheShkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW21hw4PCsWFuIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ2RkZGQgW8ODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW29udGUgw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW29dIGRkZGQgW3Bhc2FkbyDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnZW4gJXMnLFxyXG4gICAgcGFzdDogJ2ZhaSAlcycsXHJcbiAgICBzOiAndW5zIHNlZ3VuZG9zJyxcclxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxyXG4gICAgaDogJ3VuaGEgaG9yYScsXHJcbiAgICBoaDogJyVkIGhvcmFzJyxcclxuICAgIGQ6ICd1biBkw4PCrWEnLFxyXG4gICAgZGQ6ICclZCBkw4PCrWFzJyxcclxuICAgIE06ICd1biBtZXMnLFxyXG4gICAgTU06ICclZCBtZXNlcycsXHJcbiAgICB5OiAndW4gYW5vJyxcclxuICAgIHl5OiAnJWQgYW5vcydcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxyXG4gIG9yZGluYWw6ICclZMOCwronLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEhlYnJldyBbaGVdXHJcbi8vISBhdXRob3IgOiBUb21lciBDb2hlbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS90b21lclxyXG4vLyEgYXV0aG9yIDogTW9zaGUgU2ltYW50b3YgOiBodHRwczovL2dpdGh1Yi5jb20vRGV2ZWxvcG1lbnRJTFxyXG4vLyEgYXV0aG9yIDogVGFsIEF0ZXIgOiBodHRwczovL2dpdGh1Yi5jb20vVGFsQXRlclxyXG5cclxuZXhwb3J0IGNvbnN0IGhlTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdoZScsXHJcbiAgbW9udGhzOiAnw5fCmcOXwqDDl8KVw5fCkMOXwqhfw5fCpMOXwpHDl8Kow5fClcOXwpDDl8KoX8OXwp7Dl8Kow5fCpV/Dl8KQw5fCpMOXwqjDl8KZw5fCnF/Dl8Kew5fCkMOXwplfw5fCmcOXwpXDl8Kgw5fCmV/Dl8KZw5fClcOXwpzDl8KZX8OXwpDDl8KVw5fCksOXwpXDl8Khw5fCmF/Dl8Khw5fCpMOXwpjDl8Kew5fCkcOXwqhfw5fCkMOXwpXDl8Knw5fCmMOXwpXDl8KRw5fCqF/Dl8Kgw5fClcOXwpHDl8Kew5fCkcOXwqhfw5fCk8OXwqbDl8Kew5fCkcOXwqgnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICfDl8KZw5fCoMOXwpXDl8KzX8OXwqTDl8KRw5fCqMOXwrNfw5fCnsOXwqjDl8KlX8OXwpDDl8Kkw5fCqMOXwrNfw5fCnsOXwpDDl8KZX8OXwpnDl8KVw5fCoMOXwplfw5fCmcOXwpXDl8Kcw5fCmV/Dl8KQw5fClcOXwpLDl8KzX8OXwqHDl8Kkw5fCmMOXwrNfw5fCkMOXwpXDl8Knw5fCs1/Dl8Kgw5fClcOXwpHDl8KzX8OXwpPDl8Kmw5fCnsOXwrMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICfDl8Kow5fCkMOXwqnDl8KVw5fCn1/Dl8Kpw5fCoMOXwplfw5fCqcOXwpzDl8KZw5fCqcOXwplfw5fCqMOXwpHDl8KZw5fCosOXwplfw5fCl8OXwp7Dl8KZw5fCqcOXwplfw5fCqcOXwpnDl8Kpw5fCmV/Dl8Kpw5fCkcOXwqonLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ8OXwpDDl8KzX8OXwpHDl8KzX8OXwpLDl8KzX8OXwpPDl8KzX8OXwpTDl8KzX8OXwpXDl8KzX8OXwqnDl8KzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnw5fCkF/Dl8KRX8OXwpJfw5fCk1/Dl8KUX8OXwpVfw5fCqScuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgW8OXwpFdTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgW8OXwpFdTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIFvDl8KRXU1NTU0gWVlZWSBISDptbScsXHJcbiAgICBsOiAnRC9NL1lZWVknLFxyXG4gICAgbGw6ICdEIE1NTSBZWVlZJyxcclxuICAgIGxsbDogJ0QgTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgbGxsbDogJ2RkZCwgRCBNTU0gWVlZWSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW8OXwpTDl8KZw5fClcOXwp0gw5fCkcOWwr5dTFQnLFxyXG4gICAgbmV4dERheTogJ1vDl8Kew5fCl8OXwqggw5fCkcOWwr5dTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFvDl8KRw5fCqcOXwqLDl8KUXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OXwpDDl8Kqw5fCnsOXwpXDl8KcIMOXwpHDlsK+XUxUJyxcclxuICAgIGxhc3RXZWVrOiAnW8OXwpHDl8KZw5fClcOXwp1dIGRkZGQgW8OXwpTDl8KQw5fCl8OXwqjDl8KVw5fCnyDDl8KRw5fCqcOXwqLDl8KUXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ8OXwpHDl8Kiw5fClcOXwpMgJXMnLFxyXG4gICAgcGFzdDogJ8OXwpzDl8Kkw5fCoMOXwpkgJXMnLFxyXG4gICAgczogJ8OXwp7Dl8Khw5fCpMOXwqggw5fCqcOXwqDDl8KZw5fClcOXwqonLFxyXG4gICAgc3M6ICclZCDDl8Kpw5fCoMOXwpnDl8KVw5fCqicsXHJcbiAgICBtOiAnw5fCk8OXwqfDl8KUJyxcclxuICAgIG1tOiAnJWQgw5fCk8OXwqfDl8KVw5fCqicsXHJcbiAgICBoOiAnw5fCqcOXwqLDl8KUJyxcclxuICAgIGhoKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgaWYgKG51bSA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAnw5fCqcOXwqLDl8Kqw5fCmcOXwpnDl8KdJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVtICsgJyDDl8Kpw5fCosOXwpXDl8KqJztcclxuICAgIH0sXHJcbiAgICBkOiAnw5fCmcOXwpXDl8KdJyxcclxuICAgIGRkKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgaWYgKG51bSA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAnw5fCmcOXwpXDl8Kew5fCmcOXwpnDl8KdJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVtICsgJyDDl8KZw5fCnsOXwpnDl8KdJztcclxuICAgIH0sXHJcbiAgICBNOiAnw5fCl8OXwpXDl8KTw5fCqScsXHJcbiAgICBNTShudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGlmIChudW0gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ8OXwpfDl8KVw5fCk8OXwqnDl8KZw5fCmcOXwp0nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudW0gKyAnIMOXwpfDl8KVw5fCk8OXwqnDl8KZw5fCnSc7XHJcbiAgICB9LFxyXG4gICAgeTogJ8OXwqnDl8Kgw5fClCcsXHJcbiAgICB5eShudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGlmIChudW0gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ8OXwqnDl8Kgw5fCqsOXwpnDl8KZw5fCnSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtICUgMTAgPT09IDAgJiYgbnVtICE9PSAxMCkge1xyXG4gICAgICAgIHJldHVybiBudW0gKyAnIMOXwqnDl8Kgw5fClCc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bSArICcgw5fCqcOXwqDDl8KZw5fCnSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAvw5fCkMOXwpfDl8KUXCLDl8KmfMOXwpzDl8Kkw5fCoMOXwpRcIsOXwqZ8w5fCkMOXwpfDl8Kow5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdfMOXwpzDl8Kkw5fCoMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnXzDl8Kcw5fCpMOXwqDDl8KVw5fCqiDDl8KRw5fClcOXwqfDl8KofMOXwpHDl8KRw5fClcOXwqfDl8KofMOXwpHDl8Kiw5fCqMOXwpEvaSxcclxuICBpc1BNKGlucHV0KSB7XHJcbiAgICByZXR1cm4gL14ow5fCkMOXwpfDl8KUXCLDl8KmfMOXwpDDl8KXw5fCqMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnXzDl8KRw5fCosOXwqjDl8KRKSQvLnRlc3QoaW5wdXQpO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91ciA8IDUpIHtcclxuICAgICAgcmV0dXJuICfDl8Kcw5fCpMOXwqDDl8KVw5fCqiDDl8KRw5fClcOXwqfDl8KoJztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XHJcbiAgICAgIHJldHVybiAnw5fCkcOXwpHDl8KVw5fCp8OXwqgnO1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuIGlzTG93ZXIgPyAnw5fCnMOXwqTDl8Kgw5fClFwiw5fCpicgOiAnw5fCnMOXwqTDl8Kgw5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdJztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE4KSB7XHJcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ8OXwpDDl8KXw5fClFwiw5fCpicgOiAnw5fCkMOXwpfDl8Kow5fCmSDDl8KUw5fCpsOXwpTDl8Kow5fCmcOXwpnDl8KdJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnw5fCkcOXwqLDl8Kow5fCkSc7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSGluZGkgW2hpXVxyXG4vLyEgYXV0aG9yIDogTWF5YW5rIFNpbmdoYWwgOiBodHRwczovL2dpdGh1Yi5jb20vbWF5YW5rc2luZ2hhbFxyXG5cclxubGV0IHN5bWJvbE1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICAxOiAnw6DCpcKnJyxcclxuICAgIDI6ICfDoMKlwqgnLFxyXG4gICAgMzogJ8OgwqXCqScsXHJcbiAgICA0OiAnw6DCpcKqJyxcclxuICAgIDU6ICfDoMKlwqsnLFxyXG4gICAgNjogJ8OgwqXCrCcsXHJcbiAgICA3OiAnw6DCpcKtJyxcclxuICAgIDg6ICfDoMKlwq4nLFxyXG4gICAgOTogJ8OgwqXCrycsXHJcbiAgICAwOiAnw6DCpcKmJ1xyXG4gIH0sXHJcbiAgbnVtYmVyTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgICfDoMKlwqcnOiAnMScsXHJcbiAgICAnw6DCpcKoJzogJzInLFxyXG4gICAgJ8OgwqXCqSc6ICczJyxcclxuICAgICfDoMKlwqonOiAnNCcsXHJcbiAgICAnw6DCpcKrJzogJzUnLFxyXG4gICAgJ8OgwqXCrCc6ICc2JyxcclxuICAgICfDoMKlwq0nOiAnNycsXHJcbiAgICAnw6DCpcKuJzogJzgnLFxyXG4gICAgJ8OgwqXCryc6ICc5JyxcclxuICAgICfDoMKlwqYnOiAnMCdcclxuICB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IGhpTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdoaScsXHJcbiAgbW9udGhzOiAnw6DCpMKcw6DCpMKow6DCpMK1w6DCpMKww6DCpcKAX8OgwqTCq8OgwqTCvMOgwqTCsMOgwqTCtcOgwqTCsMOgwqXCgF/DoMKkwq7DoMKkwr7DoMKkwrDDoMKlwo3DoMKkwppfw6DCpMKFw6DCpMKqw6DCpcKNw6DCpMKww6DCpcKIw6DCpMKyX8OgwqTCrsOgwqTCiF/DoMKkwpzDoMKlwoLDoMKkwqhfw6DCpMKcw6DCpcKBw6DCpMKyw6DCpMK+w6DCpMKIX8OgwqTChcOgwqTCl8OgwqTCuMOgwqXCjcOgwqTCpF/DoMKkwrjDoMKkwr/DoMKkwqTDoMKkwq7DoMKlwo3DoMKkwqzDoMKkwrBfw6DCpMKFw6DCpMKVw6DCpcKNw6DCpMKfw6DCpcKCw6DCpMKsw6DCpMKwX8OgwqTCqMOgwqTCtcOgwqTCrsOgwqXCjcOgwqTCrMOgwqTCsF/DoMKkwqbDoMKkwr/DoMKkwrjDoMKkwq7DoMKlwo3DoMKkwqzDoMKkwrAnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICfDoMKkwpzDoMKkwqguX8OgwqTCq8OgwqTCvMOgwqTCsC5fw6DCpMKuw6DCpMK+w6DCpMKww6DCpcKNw6DCpMKaX8OgwqTChcOgwqTCqsOgwqXCjcOgwqTCsMOgwqXCiC5fw6DCpMKuw6DCpMKIX8OgwqTCnMOgwqXCgsOgwqTCqF/DoMKkwpzDoMKlwoHDoMKkwrIuX8OgwqTChcOgwqTCly5fw6DCpMK4w6DCpMK/w6DCpMKkLl/DoMKkwoXDoMKkwpXDoMKlwo3DoMKkwp/DoMKlwoIuX8OgwqTCqMOgwqTCtS5fw6DCpMKmw6DCpMK/w6DCpMK4Licuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnw6DCpMKww6DCpMK1w6DCpMK/w6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCuMOgwqXCi8OgwqTCrsOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwq7DoMKkwoLDoMKkwpfDoMKkwrLDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMKsw6DCpcKBw6DCpMKnw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCl8OgwqXCgcOgwqTCsMOgwqXCgsOgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwrbDoMKlwoHDoMKkwpXDoMKlwo3DoMKkwrDDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMK2w6DCpMKow6DCpMK/w6DCpMK1w6DCpMK+w6DCpMKwJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfDoMKkwrDDoMKkwrXDoMKkwr9fw6DCpMK4w6DCpcKLw6DCpMKuX8OgwqTCrsOgwqTCgsOgwqTCl8OgwqTCsl/DoMKkwqzDoMKlwoHDoMKkwqdfw6DCpMKXw6DCpcKBw6DCpMKww6DCpcKCX8OgwqTCtsOgwqXCgcOgwqTClcOgwqXCjcOgwqTCsF/DoMKkwrbDoMKkwqjDoMKkwr8nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICfDoMKkwrBfw6DCpMK4w6DCpcKLX8OgwqTCrsOgwqTCgl/DoMKkwqzDoMKlwoFfw6DCpMKXw6DCpcKBX8OgwqTCtsOgwqXCgV/DoMKkwrYnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnQSBoOm1tIMOgwqTCrMOgwqTCnMOgwqXChycsXHJcbiAgICBMVFM6ICdBIGg6bW06c3Mgw6DCpMKsw6DCpMKcw6DCpcKHJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVksIEEgaDptbSDDoMKkwqzDoMKkwpzDoMKlwocnLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZLCBBIGg6bW0gw6DCpMKsw6DCpMKcw6DCpcKHJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbw6DCpMKGw6DCpMKcXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW8OgwqTClcOgwqTCsl0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkLCBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OgwqTClcOgwqTCsl0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbw6DCpMKqw6DCpMK/w6DCpMKbw6DCpMKyw6DCpcKHXSBkZGRkLCBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJyVzIMOgwqTCrsOgwqXCh8OgwqTCgicsXHJcbiAgICBwYXN0OiAnJXMgw6DCpMKqw6DCpMK5w6DCpMKyw6DCpcKHJyxcclxuICAgIHM6ICfDoMKkwpXDoMKlwoHDoMKkwpsgw6DCpMK5w6DCpcKAIMOgwqTClcOgwqXCjcOgwqTCt8OgwqTCoycsXHJcbiAgICBzczogJyVkIMOgwqTCuMOgwqXCh8OgwqTClcOgwqTCgsOgwqTCoScsXHJcbiAgICBtOiAnw6DCpMKPw6DCpMKVIMOgwqTCrsOgwqTCv8OgwqTCqMOgwqTCnycsXHJcbiAgICBtbTogJyVkIMOgwqTCrsOgwqTCv8OgwqTCqMOgwqTCnycsXHJcbiAgICBoOiAnw6DCpMKPw6DCpMKVIMOgwqTCmMOgwqTCgsOgwqTCn8OgwqTCvicsXHJcbiAgICBoaDogJyVkIMOgwqTCmMOgwqTCgsOgwqTCn8OgwqXChycsXHJcbiAgICBkOiAnw6DCpMKPw6DCpMKVIMOgwqTCpsOgwqTCv8OgwqTCqCcsXHJcbiAgICBkZDogJyVkIMOgwqTCpsOgwqTCv8OgwqTCqCcsXHJcbiAgICBNOiAnw6DCpMKPw6DCpMKVIMOgwqTCrsOgwqTCucOgwqXCgMOgwqTCqMOgwqXChycsXHJcbiAgICBNTTogJyVkIMOgwqTCrsOgwqTCucOgwqXCgMOgwqTCqMOgwqXChycsXHJcbiAgICB5OiAnw6DCpMKPw6DCpMKVIMOgwqTCtcOgwqTCsMOgwqXCjcOgwqTCtycsXHJcbiAgICB5eTogJyVkIMOgwqTCtcOgwqTCsMOgwqXCjcOgwqTCtydcclxuICB9LFxyXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvW8OgwqXCp8OgwqXCqMOgwqXCqcOgwqXCqsOgwqXCq8OgwqXCrMOgwqXCrcOgwqXCrsOgwqXCr8OgwqXCpl0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xyXG4gICAgfSk7XHJcbiAgfSxcclxuICBwb3N0Zm9ybWF0KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxkL2csIGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICByZXR1cm4gc3ltYm9sTWFwW21hdGNoXTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgLy8gSGluZGkgbm90YXRpb24gZm9yIG1lcmlkaWVtcyBhcmUgcXVpdGUgZnV6enkgaW4gcHJhY3RpY2UuIFdoaWxlIHRoZXJlIGV4aXN0c1xyXG4gIC8vIGEgcmlnaWQgbm90aW9uIG9mIGEgJ1BhaGFyJyBpdCBpcyBub3QgdXNlZCBhcyByaWdpZGx5IGluIG1vZGVybiBIaW5kaS5cclxuICBtZXJpZGllbVBhcnNlOiAvw6DCpMKww6DCpMK+w6DCpMKkfMOgwqTCuMOgwqXCgcOgwqTCrMOgwqTCuXzDoMKkwqbDoMKlwovDoMKkwqrDoMKkwrnDoMKkwrB8w6DCpMK2w6DCpMK+w6DCpMKuLyxcclxuICBtZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pIHtcclxuICAgIGlmIChob3VyID09PSAxMikge1xyXG4gICAgICBob3VyID0gMDtcclxuICAgIH1cclxuICAgIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCsMOgwqTCvsOgwqTCpCcpIHtcclxuICAgICAgcmV0dXJuIGhvdXIgPCA0ID8gaG91ciA6IGhvdXIgKyAxMjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDoMKkwrjDoMKlwoHDoMKkwqzDoMKkwrknKSB7XHJcbiAgICAgIHJldHVybiBob3VyO1xyXG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCpsOgwqXCi8OgwqTCqsOgwqTCucOgwqTCsCcpIHtcclxuICAgICAgcmV0dXJuIGhvdXIgPj0gMTAgPyBob3VyIDogaG91ciArIDEyO1xyXG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OgwqTCtsOgwqTCvsOgwqTCricpIHtcclxuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcclxuICAgIH1cclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCA0KSB7XHJcbiAgICAgIHJldHVybiAnw6DCpMKww6DCpMK+w6DCpMKkJztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEwKSB7XHJcbiAgICAgIHJldHVybiAnw6DCpMK4w6DCpcKBw6DCpMKsw6DCpMK5JztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XHJcbiAgICAgIHJldHVybiAnw6DCpMKmw6DCpcKLw6DCpMKqw6DCpMK5w6DCpMKwJztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDIwKSB7XHJcbiAgICAgIHJldHVybiAnw6DCpMK2w6DCpMK+w6DCpMKuJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnw6DCpMKww6DCpMK+w6DCpMKkJztcclxuICAgIH1cclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMCwgLy8gU3VuZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDYgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSHVuZ2FyaWFuIFtodV1cclxuLy8hIGF1dGhvciA6IEFkYW0gQnJ1bm5lciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hZGFtYnJ1bm5lclxyXG5cclxubGV0IHdlZWtFbmRpbmdzID0gJ3Zhc8ODwqFybmFwIGjDg8KpdGbDhcKRbiBrZWRkZW4gc3plcmTDg8KhbiBjc8ODwrx0w4PCtnJ0w4PCtmvDg8K2biBww4PCqW50ZWtlbiBzem9tYmF0b24nLnNwbGl0KCcgJyk7XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICBzd2l0Y2ggKGtleSkge1xyXG4gICAgY2FzZSAncyc6XHJcbiAgICAgIHJldHVybiAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnbsODwqlow4PCoW55IG3Dg8Khc29kcGVyYycgOiAnbsODwqlow4PCoW55IG3Dg8Khc29kcGVyY2UnO1xyXG4gICAgY2FzZSAnc3MnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4KSA/ICcgbcODwqFzb2RwZXJjJyA6ICcgbcODwqFzb2RwZXJjZScpO1xyXG4gICAgY2FzZSAnbSc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcclxuICAgIGNhc2UgJ21tJzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBwZXJjJyA6ICcgcGVyY2UnKTtcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCs3JhJyA6ICcgw4PCs3LDg8KhamEnKTtcclxuICAgIGNhc2UgJ2hoJzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KzcmEnIDogJyDDg8KzcsODwqFqYScpO1xyXG4gICAgY2FzZSAnZCc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xyXG4gICAgY2FzZSAnZGQnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIG5hcCcgOiAnIG5hcGphJyk7XHJcbiAgICBjYXNlICdNJzpcclxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDg8KzbmFwJyA6ICcgaMODwrNuYXBqYScpO1xyXG4gICAgY2FzZSAnTU0nOlxyXG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIGjDg8KzbmFwJyA6ICcgaMODwrNuYXBqYScpO1xyXG4gICAgY2FzZSAneSc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KpdicgOiAnIMODwql2ZScpO1xyXG4gICAgY2FzZSAneXknOlxyXG4gICAgICByZXR1cm4gbnVtICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwql2JyA6ICcgw4PCqXZlJyk7XHJcbiAgfVxyXG4gIHJldHVybiAnJztcclxufVxyXG5mdW5jdGlvbiB3ZWVrKGRhdGU6IERhdGUsIGlzRnV0dXJlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIChpc0Z1dHVyZSA/ICcnIDogJ1ttw4PCumx0XSAnKSArICdbJyArIHdlZWtFbmRpbmdzW2dldERheU9mV2VlayhkYXRlKV0gKyAnXSBMVFsta29yXSc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBodUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaHUnLFxyXG4gIG1vbnRocyA6ICdqYW51w4PCoXJfZmVicnXDg8Khcl9tw4PCoXJjaXVzX8ODwqFwcmlsaXNfbcODwqFqdXNfasODwrpuaXVzX2rDg8K6bGl1c19hdWd1c3p0dXNfc3plcHRlbWJlcl9va3TDg8KzYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0IDogJ2phbl9mZWJfbcODwqFyY1/Dg8KhcHJfbcODwqFqX2rDg8K6bl9qw4PCumxfYXVnX3N6ZXB0X29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzIDogJ3Zhc8ODwqFybmFwX2jDg8KpdGbDhcKRX2tlZGRfc3plcmRhX2Nzw4PCvHTDg8K2cnTDg8K2a19ww4PCqW50ZWtfc3pvbWJhdCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0IDogJ3Zhc19ow4PCqXRfa2VkZF9zemVfY3PDg8K8dF9ww4PCqW5fc3pvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ3ZfaF9rX3N6ZV9jc19wX3N6bycuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgIExUIDogJ0g6bW0nLFxyXG4gICAgTFRTIDogJ0g6bW06c3MnLFxyXG4gICAgTCA6ICdZWVlZLk1NLkRELicsXHJcbiAgICBMTCA6ICdZWVlZLiBNTU1NIEQuJyxcclxuICAgIExMTCA6ICdZWVlZLiBNTU1NIEQuIEg6bW0nLFxyXG4gICAgTExMTCA6ICdZWVlZLiBNTU1NIEQuLCBkZGRkIEg6bW0nXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAvZGV8ZHUvaSxcclxuICBpc1BNIChpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0LmNoYXJBdCgxKS50b0xvd2VyQ2FzZSgpID09PSAndSc7XHJcbiAgfSxcclxuICBtZXJpZGllbSAoaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VycyA8IDEyKSB7XHJcbiAgICAgIHJldHVybiBpc0xvd2VyID09PSB0cnVlID8gJ2RlJyA6ICdERSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkdScgOiAnRFUnO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICBzYW1lRGF5IDogJ1ttYV0gTFRbLWtvcl0nLFxyXG4gICAgbmV4dERheSA6ICdbaG9sbmFwXSBMVFsta29yXScsXHJcbiAgICBuZXh0V2VlayAoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gd2VlayhkYXRlLCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICBsYXN0RGF5IDogJ1t0ZWduYXBdIExUWy1rb3JdJyxcclxuICAgIGxhc3RXZWVrIChkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiB3ZWVrKGRhdGUsIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgZnV0dXJlIDogJyVzIG3Dg8K6bHZhJyxcclxuICAgIHBhc3QgOiAnJXMnLFxyXG4gICAgcyA6IHRyYW5zbGF0ZSxcclxuICAgIHNzIDogdHJhbnNsYXRlLFxyXG4gICAgbSA6IHRyYW5zbGF0ZSxcclxuICAgIG1tIDogdHJhbnNsYXRlLFxyXG4gICAgaCA6IHRyYW5zbGF0ZSxcclxuICAgIGhoIDogdHJhbnNsYXRlLFxyXG4gICAgZCA6IHRyYW5zbGF0ZSxcclxuICAgIGRkIDogdHJhbnNsYXRlLFxyXG4gICAgTSA6IHRyYW5zbGF0ZSxcclxuICAgIE1NIDogdHJhbnNsYXRlLFxyXG4gICAgeSA6IHRyYW5zbGF0ZSxcclxuICAgIHl5IDogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWwgOiAnJWQuJyxcclxuICB3ZWVrIDoge1xyXG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSW5kb25lc2lhIFtpZF1cclxuLy8hIGF1dGhvciA6IFJvbXkgS3VzdW1hIDogaHR0cHM6Ly9naXRodWIuY29tL3JrdXN1bWFcclxuLy8hIHJlZmVyZW5jZTogaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvYmxvYi9kZXZlbG9wL2xvY2FsZS9pZC5qc1xyXG5cclxuZXhwb3J0IGNvbnN0IGlkTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdpZCcsXHJcbiAgbW9udGhzIDogJ0phbnVhcmlfRmVicnVhcmlfTWFyZXRfQXByaWxfTWVpX0p1bmlfSnVsaV9BZ3VzdHVzX1NlcHRlbWJlcl9Pa3RvYmVyX05vdmVtYmVyX0Rlc2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NZWlfSnVuX0p1bF9BZ3NfU2VwX09rdF9Ob3ZfRGVzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzIDogJ01pbmdndV9TZW5pbl9TZWxhc2FfUmFidV9LYW1pc19KdW1hdF9TYWJ0dScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0IDogJ01pbl9TZW5fU2VsX1JhYl9LYW1fSnVtX1NhYicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICdNZ19Tbl9TbF9SYl9LbV9KbV9TYicuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgIExUIDogJ0hILm1tJyxcclxuICAgIExUUyA6ICdISC5tbS5zcycsXHJcbiAgICBMIDogJ0REL01NL1lZWVknLFxyXG4gICAgTEwgOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMIDogJ0QgTU1NTSBZWVlZIFtwdWt1bF0gSEgubW0nLFxyXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJ1xyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL3BhZ2l8c2lhbmd8c29yZXxtYWxhbS8sXHJcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XHJcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcclxuICAgICAgaG91ciA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVyaWRpZW0gPT09ICdwYWdpJykge1xyXG4gICAgICByZXR1cm4gaG91cjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzaWFuZycpIHtcclxuICAgICAgcmV0dXJuIGhvdXIgPj0gMTEgPyBob3VyIDogaG91ciArIDEyO1xyXG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ3NvcmUnIHx8IG1lcmlkaWVtID09PSAnbWFsYW0nKSB7XHJcbiAgICAgIHJldHVybiBob3VyICsgMTI7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VycywgbWludXRlcywgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXJzIDwgMTEpIHtcclxuICAgICAgcmV0dXJuICdwYWdpJztcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNSkge1xyXG4gICAgICByZXR1cm4gJ3NpYW5nJztcclxuICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxOSkge1xyXG4gICAgICByZXR1cm4gJ3NvcmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdtYWxhbSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhciA6IHtcclxuICAgIHNhbWVEYXkgOiAnW0hhcmkgaW5pIHB1a3VsXSBMVCcsXHJcbiAgICBuZXh0RGF5IDogJ1tCZXNvayBwdWt1bF0gTFQnLFxyXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBbcHVrdWxdIExUJyxcclxuICAgIGxhc3REYXkgOiAnW0tlbWFyaW4gcHVrdWxdIExUJyxcclxuICAgIGxhc3RXZWVrIDogJ2RkZGQgW2xhbHUgcHVrdWxdIExUJyxcclxuICAgIHNhbWVFbHNlIDogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnZGFsYW0gJXMnLFxyXG4gICAgcGFzdCA6ICclcyB5YW5nIGxhbHUnLFxyXG4gICAgcyA6ICdiZWJlcmFwYSBkZXRpaycsXHJcbiAgICBzcyA6ICclZCBkZXRpaycsXHJcbiAgICBtIDogJ3NlbWVuaXQnLFxyXG4gICAgbW0gOiAnJWQgbWVuaXQnLFxyXG4gICAgaCA6ICdzZWphbScsXHJcbiAgICBoaCA6ICclZCBqYW0nLFxyXG4gICAgZCA6ICdzZWhhcmknLFxyXG4gICAgZGQgOiAnJWQgaGFyaScsXHJcbiAgICBNIDogJ3NlYnVsYW4nLFxyXG4gICAgTU0gOiAnJWQgYnVsYW4nLFxyXG4gICAgeSA6ICdzZXRhaHVuJyxcclxuICAgIHl5IDogJyVkIHRhaHVuJ1xyXG4gIH0sXHJcbiAgd2VlayA6IHtcclxuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95IDogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuXHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSXRhbGlhbiBbaXRdXHJcbi8vISBhdXRob3IgOiBMb3JlbnpvIDogaHR0cHM6Ly9naXRodWIuY29tL2FsaWVtXHJcbi8vISBhdXRob3I6IE1hdHRpYSBMYXJlbnRpczogaHR0cHM6Ly9naXRodWIuY29tL25vc3RhbGdpYXpcclxuXHJcbmV4cG9ydCBjb25zdCBpdExvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaXQnLFxyXG4gIG1vbnRoczogJ2dlbm5haW9fZmViYnJhaW9fbWFyem9fYXByaWxlX21hZ2dpb19naXVnbm9fbHVnbGlvX2Fnb3N0b19zZXR0ZW1icmVfb3R0b2JyZV9ub3ZlbWJyZV9kaWNlbWJyZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ2dlbl9mZWJfbWFyX2Fwcl9tYWdfZ2l1X2x1Z19hZ29fc2V0X290dF9ub3ZfZGljJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnZG9tZW5pY2FfbHVuZWTDg8KsX21hcnRlZMODwqxfbWVyY29sZWTDg8KsX2dpb3ZlZMODwqxfdmVuZXJkw4PCrF9zYWJhdG8nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ2RvbV9sdW5fbWFyX21lcl9naW9fdmVuX3NhYicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21lX2dpX3ZlX3NhJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tPZ2dpIGFsbGVdIExUJyxcclxuICAgIG5leHREYXk6ICdbRG9tYW5pIGFsbGVdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbYWxsZV0gTFQnLFxyXG4gICAgbGFzdERheTogJ1tJZXJpIGFsbGVdIExUJyxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1tsYSBzY29yc2FdIGRkZGQgW2FsbGVdIExUJztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuICdbbG8gc2NvcnNvXSBkZGRkIFthbGxlXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZShudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoKC9eWzAtOV0uKyQvKS50ZXN0KG51bS50b1N0cmluZygxMCkpID8gJ3RyYScgOiAnaW4nKSArICcgJyArIG51bTtcclxuICAgIH0sXHJcbiAgICBwYXN0OiAnJXMgZmEnLFxyXG4gICAgczogJ2FsY3VuaSBzZWNvbmRpJyxcclxuICAgIHNzOiAnJWQgc2Vjb25kaScsXHJcbiAgICBtOiAndW4gbWludXRvJyxcclxuICAgIG1tOiAnJWQgbWludXRpJyxcclxuICAgIGg6ICd1blxcJ29yYScsXHJcbiAgICBoaDogJyVkIG9yZScsXHJcbiAgICBkOiAndW4gZ2lvcm5vJyxcclxuICAgIGRkOiAnJWQgZ2lvcm5pJyxcclxuICAgIE06ICd1biBtZXNlJyxcclxuICAgIE1NOiAnJWQgbWVzaScsXHJcbiAgICB5OiAndW4gYW5ubycsXHJcbiAgICB5eTogJyVkIGFubmknXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcclxuICBvcmRpbmFsOiAnJWTDgsK6JyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBKYXBhbmVzZSBbamFdXHJcbi8vISBhdXRob3IgOiBMSSBMb25nIDogaHR0cHM6Ly9naXRodWIuY29tL2JhcnlvblxyXG5cclxuZXhwb3J0IGNvbnN0IGphTG9jYWxlOiBMb2NhbGVEYXRhID0gIHtcclxuICBhYmJyOiAnamEnLFxyXG4gIG1vbnRocyA6ICcxw6bCnMKIXzLDpsKcwohfM8OmwpzCiF80w6bCnMKIXzXDpsKcwohfNsOmwpzCiF83w6bCnMKIXzjDpsKcwohfOcOmwpzCiF8xMMOmwpzCiF8xMcOmwpzCiF8xMsOmwpzCiCcuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA6ICcxw6bCnMKIXzLDpsKcwohfM8OmwpzCiF80w6bCnMKIXzXDpsKcwohfNsOmwpzCiF83w6bCnMKIXzjDpsKcwohfOcOmwpzCiF8xMMOmwpzCiF8xMcOmwpzCiF8xMsOmwpzCiCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6ICfDpsKXwqXDpsKbwpzDpsKXwqVfw6bCnMKIw6bCm8Kcw6bCl8KlX8OnwoHCq8OmwpvCnMOmwpfCpV/DpsKwwrTDpsKbwpzDpsKXwqVfw6bCnMKow6bCm8Kcw6bCl8KlX8OpwofCkcOmwpvCnMOmwpfCpV/DpcKcwp/DpsKbwpzDpsKXwqUnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICfDpsKXwqVfw6bCnMKIX8OnwoHCq1/DpsKwwrRfw6bCnMKoX8OpwofCkV/DpcKcwp8nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAnw6bCl8KlX8OmwpzCiF/Dp8KBwqtfw6bCsMK0X8OmwpzCqF/DqcKHwpFfw6XCnMKfJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xyXG4gICAgTFQgOiAnSEg6bW0nLFxyXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcclxuICAgIEwgOiAnWVlZWS9NTS9ERCcsXHJcbiAgICBMTCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxyXG4gICAgTExMIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbScsXHJcbiAgICBMTExMIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbSBkZGRkJyxcclxuICAgIGwgOiAnWVlZWS9NTS9ERCcsXHJcbiAgICBsbCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxyXG4gICAgbGxsIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbScsXHJcbiAgICBsbGxsIDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbSBkZGRkJ1xyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL8Olwo3CiMOlwonCjXzDpcKNwojDpcK+wowvaSxcclxuICBpc1BNIChpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0ID09PSAnw6XCjcKIw6XCvsKMJztcclxuICB9LFxyXG4gIG1lcmlkaWVtIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuICfDpcKNwojDpcKJwo0nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICfDpcKNwojDpcK+wownO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICBzYW1lRGF5IDogJ1vDpMK7worDpsKXwqVdIExUJyxcclxuICAgIG5leHREYXkgOiAnW8OmwpjCjsOmwpfCpV0gTFQnLFxyXG4gICAgbmV4dFdlZWsgOiAnW8Omwp3CpcOpwoDCsV1kZGRkIExUJyxcclxuICAgIGxhc3REYXkgOiAnW8OmwpjCqMOmwpfCpV0gTFQnLFxyXG4gICAgbGFzdFdlZWsgOiAnW8OlwonCjcOpwoDCsV1kZGRkIExUJyxcclxuICAgIHNhbWVFbHNlIDogJ0wnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9w6bCl8KlLyxcclxuICBvcmRpbmFsIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnw6bCl8KlJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZSA6IHtcclxuICAgIGZ1dHVyZSA6ICclc8Olwr7CjCcsXHJcbiAgICBwYXN0IDogJyVzw6XCicKNJyxcclxuICAgIHMgOiAnw6bClcKww6fCp8KSJyxcclxuICAgIHNzIDogJyVkw6fCp8KSJyxcclxuICAgIG0gOiAnMcOlwojChicsXHJcbiAgICBtbSA6ICclZMOlwojChicsXHJcbiAgICBoIDogJzHDpsKZwoLDqcKWwpMnLFxyXG4gICAgaGggOiAnJWTDpsKZwoLDqcKWwpMnLFxyXG4gICAgZCA6ICcxw6bCl8KlJyxcclxuICAgIGRkIDogJyVkw6bCl8KlJyxcclxuICAgIE0gOiAnMcOjwoPCtsOmwpzCiCcsXHJcbiAgICBNTSA6ICclZMOjwoPCtsOmwpzCiCcsXHJcbiAgICB5IDogJzHDpcK5wrQnLFxyXG4gICAgeXkgOiAnJWTDpcK5wrQnXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogS29yZWFuIFtrb11cclxuLy8hIGF1dGhvciA6IEt5dW5nd29vaywgUGFyayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9reXVuZ3cwMGtcclxuLy8hIGF1dGhvciA6IEplZWV5dWwgTGVlIDxqZWVleXVsQGdtYWlsLmNvbT5cclxuXHJcbmV4cG9ydCBjb25zdCBrb0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAna28nLFxyXG4gIG1vbnRocyA6ICcxw6zCm8KUXzLDrMKbwpRfM8OswpvClF80w6zCm8KUXzXDrMKbwpRfNsOswpvClF83w6zCm8KUXzjDrMKbwpRfOcOswpvClF8xMMOswpvClF8xMcOswpvClF8xMsOswpvClCcuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA6ICcxw6zCm8KUXzLDrMKbwpRfM8OswpvClF80w6zCm8KUXzXDrMKbwpRfNsOswpvClF83w6zCm8KUXzjDrMKbwpRfOcOswpvClF8xMMOswpvClF8xMcOswpvClF8xMsOswpvClCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6ICfDrMKdwrzDrMKawpTDrMKdwrxfw6zCm8KUw6zCmsKUw6zCncK8X8OtwpnClMOswprClMOswp3CvF/DrMKIwpjDrMKawpTDrMKdwrxfw6vCqsKpw6zCmsKUw6zCncK8X8OqwrjCiMOswprClMOswp3CvF/DrcKGwqDDrMKawpTDrMKdwrwnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICfDrMKdwrxfw6zCm8KUX8OtwpnClF/DrMKIwphfw6vCqsKpX8OqwrjCiF/DrcKGwqAnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAnw6zCncK8X8OswpvClF/DrcKZwpRfw6zCiMKYX8OrwqrCqV/DqsK4wohfw63ChsKgJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xyXG4gICAgTFQgOiAnQSBoOm1tJyxcclxuICAgIExUUyA6ICdBIGg6bW06c3MnLFxyXG4gICAgTCA6ICdZWVlZLk1NLkREJyxcclxuICAgIExMIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8JyxcclxuICAgIExMTCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBBIGg6bW0nLFxyXG4gICAgTExMTCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBkZGRkIEEgaDptbScsXHJcbiAgICBsIDogJ1lZWVkuTU0uREQnLFxyXG4gICAgbGwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwnLFxyXG4gICAgbGxsIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8IEEgaDptbScsXHJcbiAgICBsbGxsIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8IGRkZGQgQSBoOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICBzYW1lRGF5IDogJ8OswpjCpMOrworCmCBMVCcsXHJcbiAgICBuZXh0RGF5IDogJ8OrwoLCtMOswp3CvCBMVCcsXHJcbiAgICBuZXh0V2VlayA6ICdkZGRkIExUJyxcclxuICAgIGxhc3REYXkgOiAnw6zClsK0w6zCoMKcIExUJyxcclxuICAgIGxhc3RXZWVrIDogJ8OswqfCgMOrwoLCnMOswqPCvCBkZGRkIExUJyxcclxuICAgIHNhbWVFbHNlIDogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnJXMgw63Cm8KEJyxcclxuICAgIHBhc3QgOiAnJXMgw6zCoMKEJyxcclxuICAgIHMgOiAnw6vCqsKHIMOswrTCiCcsXHJcbiAgICBzcyA6ICclZMOswrTCiCcsXHJcbiAgICBtIDogJzHDq8K2woQnLFxyXG4gICAgbW0gOiAnJWTDq8K2woQnLFxyXG4gICAgaCA6ICfDrcKVwpwgw6zCi8Kcw6rCsMKEJyxcclxuICAgIGhoIDogJyVkw6zCi8Kcw6rCsMKEJyxcclxuICAgIGQgOiAnw63ClcKYw6vCo8KoJyxcclxuICAgIGRkIDogJyVkw6zCncK8JyxcclxuICAgIE0gOiAnw63ClcKcIMOrwovCrCcsXHJcbiAgICBNTSA6ICclZMOrwovCrCcsXHJcbiAgICB5IDogJ8Oswp3CvCDDq8KFwoQnLFxyXG4gICAgeXkgOiAnJWTDq8KFwoQnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlIDogL1xcZHsxLDJ9KMOswp3CvHzDrMKbwpR8w6zCo8K8KS8sXHJcbiAgb3JkaW5hbCA6IGZ1bmN0aW9uIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnw6zCncK8JztcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICfDrMKbwpQnO1xyXG4gICAgICBjYXNlICd3JzpcclxuICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICfDrMKjwrwnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZSA6IC/DrMKYwqTDrMKgwoR8w6zCmMKkw63Cm8KELyxcclxuICBpc1BNIDogZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICByZXR1cm4gdG9rZW4gPT09ICfDrMKYwqTDrcKbwoQnO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW0gOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc1VwcGVyKSB7XHJcbiAgICByZXR1cm4gaG91ciA8IDEyID8gJ8OswpjCpMOswqDChCcgOiAnw6zCmMKkw63Cm8KEJztcclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IExpdGh1YW5pYW4gW2x0XVxyXG4vLyEgYXV0aG9yIDogU3RhbmlzbGF2YXMgR3VrIDogaHR0cHM6Ly9naXRodWIuY29tL2l4b3N0ZXJcclxuXHJcbmNvbnN0IHVuaXRzID0ge1xyXG4gIHNzIDogJ3Nla3VuZMOEwpdfc2VrdW5kw4XCvmnDhcKzX3Nla3VuZGVzJyxcclxuICBtIDogJ21pbnV0w4TCl19taW51dMOEwpdzX21pbnV0w4TCmScsXHJcbiAgbW06ICdtaW51dMOEwpdzX21pbnXDhMKNacOFwrNfbWludXRlcycsXHJcbiAgaCA6ICd2YWxhbmRhX3ZhbGFuZG9zX3ZhbGFuZMOEwoUnLFxyXG4gIGhoOiAndmFsYW5kb3NfdmFsYW5kw4XCs192YWxhbmRhcycsXHJcbiAgZCA6ICdkaWVuYV9kaWVub3NfZGllbsOEwoUnLFxyXG4gIGRkOiAnZGllbm9zX2RpZW7DhcKzX2RpZW5hcycsXHJcbiAgTSA6ICdtw4TCl251b19tw4TCl25lc2lvX23DhMKXbmVzw4TCrycsXHJcbiAgTU06ICdtw4TCl25lc2lhaV9tw4TCl25lc2nDhcKzX23DhMKXbmVzaXVzJyxcclxuICB5IDogJ21ldGFpX21ldMOFwrNfbWV0dXMnLFxyXG4gIHl5OiAnbWV0YWlfbWV0w4XCs19tZXR1cydcclxufTtcclxuZnVuY3Rpb24gdHJhbnNsYXRlU2Vjb25kcyhudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XHJcbiAgaWYgKHdpdGhvdXRTdWZmaXgpIHtcclxuICAgICAgcmV0dXJuICdrZWxpb3Mgc2VrdW5kw4TCl3MnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdrZWxpw4XCsyBzZWt1bmTDhcK+acOFwrMnIDogJ2tlbGlhcyBzZWt1bmRlcyc7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVNpbmd1bGFyKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcclxuICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1zKGtleSlbMF0gOiAoaXNGdXR1cmUgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVsyXSk7XHJcbn1cclxuZnVuY3Rpb24gc3BlY2lhbChudW06IG51bWJlcikge1xyXG4gIHJldHVybiBudW0gJSAxMCA9PT0gMCB8fCAobnVtID4gMTAgJiYgbnVtIDwgMjApO1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1zKGtleTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIHVuaXRzW2tleV0uc3BsaXQoJ18nKTtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIGxldCByZXN1bHQgPSBudW0gKyAnICc7XHJcbiAgaWYgKG51bSA9PT0gMSkge1xyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgdHJhbnNsYXRlU2luZ3VsYXIobnVtLCB3aXRob3V0U3VmZml4LCBrZXlbMF0sIGlzRnV0dXJlKTtcclxuICB9IGVsc2UgaWYgKHdpdGhvdXRTdWZmaXgpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdCArIChzcGVjaWFsKG51bSkgPyBmb3JtcyhrZXkpWzFdIDogZm9ybXMoa2V5KVswXSk7XHJcbiAgfSBlbHNlIHtcclxuICAgICAgaWYgKGlzRnV0dXJlKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgZm9ybXMoa2V5KVsxXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW0pID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbHRMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2x0JyxcclxuICBtb250aHMgOiB7XHJcbiAgICBmb3JtYXQ6ICdzYXVzaW9fdmFzYXJpb19rb3ZvX2JhbGFuZMOFwr5pb19nZWd1w4XCvsOEwpdzX2JpcsOFwr5lbGlvX2xpZXBvc19ydWdwasOFwqvDhMKNaW9fcnVnc8OEwpdqb19zcGFsaW9fbGFwa3Jpw4TCjWlvX2dydW9kw4XCvmlvJy5zcGxpdCgnXycpLFxyXG4gICAgc3RhbmRhbG9uZTogJ3NhdXNpc192YXNhcmlzX2tvdmFzX2JhbGFuZGlzX2dlZ3XDhcK+w4TCl19iaXLDhcK+ZWxpc19saWVwYV9ydWdwasOFwqt0aXNfcnVnc8OEwpdqaXNfc3BhbGlzX2xhcGtyaXRpc19ncnVvZGlzJy5zcGxpdCgnXycpLFxyXG4gICAgaXNGb3JtYXQ6IC9EW29EXT8oXFxbW15cXFtcXF1dKlxcXXxcXHMpK01NTU0/fE1NTU0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStEW29EXT8vXHJcbiAgfSxcclxuICBtb250aHNTaG9ydCA6ICdzYXVfdmFzX2tvdl9iYWxfZ2VnX2Jpcl9saWVfcmdwX3Jnc19zcGFfbGFwX2dyZCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6IHtcclxuICAgICAgZm9ybWF0OiAnc2VrbWFkaWVuw4TCr19waXJtYWRpZW7DhMKvX2FudHJhZGllbsOEwq9fdHJlw4TCjWlhZGllbsOEwq9fa2V0dmlydGFkaWVuw4TCr19wZW5rdGFkaWVuw4TCr1/DhcKhZcOFwqF0YWRpZW7DhMKvJy5zcGxpdCgnXycpLFxyXG4gICAgICBzdGFuZGFsb25lOiAnc2VrbWFkaWVuaXNfcGlybWFkaWVuaXNfYW50cmFkaWVuaXNfdHJlw4TCjWlhZGllbmlzX2tldHZpcnRhZGllbmlzX3Blbmt0YWRpZW5pc1/DhcKhZcOFwqF0YWRpZW5pcycuc3BsaXQoJ18nKSxcclxuICAgICAgaXNGb3JtYXQ6IC9kZGRkIEhIOm1tL1xyXG4gIH0sXHJcbiAgd2Vla2RheXNTaG9ydCA6ICdTZWtfUGlyX0FudF9UcmVfS2V0X1Blbl/DhcKgZcOFwqEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAnU19QX0FfVF9LX1BuX8OFwqAnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0IDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgICAgTFQgOiAnSEg6bW0nLFxyXG4gICAgICBMVFMgOiAnSEg6bW06c3MnLFxyXG4gICAgICBMIDogJ1lZWVktTU0tREQnLFxyXG4gICAgICBMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0nLFxyXG4gICAgICBMTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBISDptbSBbdmFsLl0nLFxyXG4gICAgICBMTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgZGRkZCwgSEg6bW0gW3ZhbC5dJyxcclxuICAgICAgbCA6ICdZWVlZLU1NLUREJyxcclxuICAgICAgbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcclxuICAgICAgbGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcclxuICAgICAgbGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZCwgSEg6bW0gW3ZhbC5dJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICAgIHNhbWVEYXkgOiAnW8OFwqBpYW5kaWVuXSBMVCcsXHJcbiAgICAgIG5leHREYXkgOiAnW1J5dG9qXSBMVCcsXHJcbiAgICAgIG5leHRXZWVrIDogJ2RkZGQgTFQnLFxyXG4gICAgICBsYXN0RGF5IDogJ1tWYWthcl0gTFQnLFxyXG4gICAgICBsYXN0V2VlayA6ICdbUHJhw4TCl2p1c8OEwq9dIGRkZGQgTFQnLFxyXG4gICAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgICBmdXR1cmUgOiAncG8gJXMnLFxyXG4gICAgICBwYXN0IDogJ3ByaWXDhcKhICVzJyxcclxuICAgICAgcyA6IHRyYW5zbGF0ZVNlY29uZHMsXHJcbiAgICAgIHNzIDogdHJhbnNsYXRlLFxyXG4gICAgICBtIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIG1tIDogdHJhbnNsYXRlLFxyXG4gICAgICBoIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIGhoIDogdHJhbnNsYXRlLFxyXG4gICAgICBkIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIGRkIDogdHJhbnNsYXRlLFxyXG4gICAgICBNIDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIE1NIDogdHJhbnNsYXRlLFxyXG4gICAgICB5IDogdHJhbnNsYXRlU2luZ3VsYXIsXHJcbiAgICAgIHl5IDogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tb2ppLyxcclxuICBvcmRpbmFsKG51bSkge1xyXG4gICAgICByZXR1cm4gbnVtICsgJy1vamknO1xyXG4gIH0sXHJcbiAgd2VlayA6IHtcclxuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuLy8gdHNsaW50OmRpc2FibGU6b2JqZWN0LWxpdGVyYWwtc2hvcnRoYW5kXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBNb25nb2xpYW4gW21uXVxyXG4vLyEgYXV0aG9yIDogSmF2a2hsYW50dWdzIE55YW1kb3JqIDogaHR0cHM6Ly9naXRodWIuY29tL2phdmtoYWFuajdcclxuXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfDkcKFw5HCjcOQwrTDkcKFw5HCjcOQwr0gw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyA6ICfDkcKFw5HCjcOQwrTDkcKFw5HCjcOQwr0gw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCi8OQwr0nO1xyXG4gICAgY2FzZSAnc3MnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnIMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwovDkMK9Jyk7XHJcbiAgICBjYXNlICdtJzpcclxuICAgIGNhc2UgJ21tJzpcclxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkMK8w5DCuMOQwr3DkcKDw5HCgicgOiAnIMOQwrzDkMK4w5DCvcORwoPDkcKCw5HCi8OQwr0nKTtcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgY2FzZSAnaGgnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwobDkMKww5DCsycgOiAnIMORwobDkMKww5DCs8OQwrjDkMK5w5DCvScpO1xyXG4gICAgY2FzZSAnZCc6XHJcbiAgICBjYXNlICdkZCc6XHJcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5PCqcOQwrTDk8Kpw5HCgCcgOiAnIMOTwqnDkMK0w5HCgMOQwrjDkMK5w5DCvScpO1xyXG4gICAgY2FzZSAnTSc6XHJcbiAgICBjYXNlICdNTSc6XHJcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5HCgcOQwrDDkcKAJyA6ICcgw5HCgcOQwrDDkcKAw5HCi8OQwr0nKTtcclxuICAgIGNhc2UgJ3knOlxyXG4gICAgY2FzZSAneXknOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMOQwrbDkMK4w5DCuycgOiAnIMOQwrbDkMK4w5DCu8OQwrjDkMK5w5DCvScpO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbW5Mb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ21uJyxcclxuICBtb250aHM6ICfDkMKdw5HCjcOQwrPDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwqXDkMK+w5HCkcORwoDDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpPDkcKDw5HCgMOQwrDDkMKyw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKUw5PCqcORwoDDk8Kpw5DCssOQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCosOQwrDDkMKyw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKXw5HCg8ORwoDDkMKzw5DCsMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DClMOQwr7DkMK7w5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKdw5DCsMOQwrnDkMK8w5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKVw5HCgcOQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCkMORwoDDkMKww5DCssOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCkMORwoDDkMKyw5DCsMOQwr0gw5DCvcORwo3DkMKzw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKQw5HCgMOQwrLDkMKww5DCvSDDkcKFw5DCvsORwpHDkcKAw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgCcuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJzEgw5HCgcOQwrDDkcKAXzIgw5HCgcOQwrDDkcKAXzMgw5HCgcOQwrDDkcKAXzQgw5HCgcOQwrDDkcKAXzUgw5HCgcOQwrDDkcKAXzYgw5HCgcOQwrDDkcKAXzcgw5HCgcOQwrDDkcKAXzggw5HCgcOQwrDDkcKAXzkgw5HCgcOQwrDDkcKAXzEwIMORwoHDkMKww5HCgF8xMSDDkcKBw5DCsMORwoBfMTIgw5HCgcOQwrDDkcKAJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgd2Vla2RheXM6ICfDkMKdw5HCj8OQwrxfw5DClMOQwrDDkMKyw5DCsMOQwrBfw5DCnMORwo/DkMKzw5DCvMOQwrDDkcKAX8OQwpvDkcKFw5DCsMOQwrPDkMKyw5DCsF/DkMKfw5LCr8ORwoDDkcKNw5DCsl/DkMKRw5DCsMOQwrDDkcKBw5DCsMOQwr1fw5DCkcORwo/DkMK8w5DCscOQwrAnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ8OQwp3DkcKPw5DCvF/DkMKUw5DCsMOQwrJfw5DCnMORwo/DkMKzX8OQwpvDkcKFw5DCsF/DkMKfw5LCr8ORwoBfw5DCkcOQwrDDkMKwX8OQwpHDkcKPw5DCvCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ8OQwp3DkcKPX8OQwpTDkMKwX8OQwpzDkcKPX8OQwpvDkcKFX8OQwp/DksKvX8OQwpHDkMKwX8OQwpHDkcKPJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnWVlZWS1NTS1ERCcsXHJcbiAgICBMTDogJ1lZWVkgw5DCvsOQwr3DkcKLIE1NTU3DkcKLw5DCvSBEJyxcclxuICAgIExMTDogJ1lZWVkgw5DCvsOQwr3DkcKLIE1NTU3DkcKLw5DCvSBEIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCBISDptbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/DksKuw5PCqHzDksKuw5DCpS9pLFxyXG4gIGlzUE06IGZ1bmN0aW9uIChpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0ID09PSAnw5LCrsOQwqUnO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW06IGZ1bmN0aW9uIChob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuICfDksKuw5PCqCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ8OSwq7DkMKlJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW8OTwqjDkMK9w5PCqcOTwqnDkMK0w5PCqcORwoBdIExUJyxcclxuICAgIG5leHREYXk6ICdbw5DCnMOQwrDDkcKAw5DCs8OQwrDDkMKww5HCiF0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdbw5DCmMORwoDDkcKNw5HChV0gZGRkZCBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OTwqjDkcKHw5DCuMOQwrPDkMK0w5PCqcORwoBdIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW8OTwqjDkMK9w5DCs8OTwqnDkcKAw5HCgcOTwqnDkMK9XSBkZGRkIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnJXMgw5DCtMOQwrDDkcKAw5DCsMOQwrAnLFxyXG4gICAgcGFzdDogJyVzIMOTwqnDkMK8w5DCvcOTwqknLFxyXG4gICAgczogdHJhbnNsYXRlLFxyXG4gICAgc3M6IHRyYW5zbGF0ZSxcclxuICAgIG06IHRyYW5zbGF0ZSxcclxuICAgIG1tOiB0cmFuc2xhdGUsXHJcbiAgICBoOiB0cmFuc2xhdGUsXHJcbiAgICBoaDogdHJhbnNsYXRlLFxyXG4gICAgZDogdHJhbnNsYXRlLFxyXG4gICAgZGQ6IHRyYW5zbGF0ZSxcclxuICAgIE06IHRyYW5zbGF0ZSxcclxuICAgIE1NOiB0cmFuc2xhdGUsXHJcbiAgICB5OiB0cmFuc2xhdGUsXHJcbiAgICB5eTogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0gw5PCqcOQwrTDk8Kpw5HCgC8sXHJcbiAgb3JkaW5hbDogZnVuY3Rpb24gKG51bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xyXG4gICAgICBjYXNlICdkJzpcclxuICAgICAgY2FzZSAnRCc6XHJcbiAgICAgIGNhc2UgJ0RERCc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICcgw5PCqcOQwrTDk8Kpw5HCgCc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdFxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBOb3J3ZWdpYW4gQm9rbcODwqVsIFtuYl1cclxuLy8hIGF1dGhvcnMgOiBFc3BlbiBIb3ZsYW5kc2RhbCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZXh4YXJzXHJcbi8vISAgICAgICAgICAgU2lndXJkIEdhcnRtYW5uIDogaHR0cHM6Ly9naXRodWIuY29tL3NpZ3VyZGdhXHJcblxyXG5leHBvcnQgY29uc3QgbmJMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ25iJyxcclxuICBtb250aHM6ICdqYW51YXJfZmVicnVhcl9tYXJzX2FwcmlsX21haV9qdW5pX2p1bGlfYXVndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2Rlc2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnamFuLl9mZWIuX21hcnNfYXByaWxfbWFpX2p1bmlfanVsaV9hdWcuX3NlcC5fb2t0Ll9ub3YuX2Rlcy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ3PDg8K4bmRhZ19tYW5kYWdfdGlyc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMODwrhyZGFnJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdzw4PCuC5fbWEuX3RpLl9vbi5fdG8uX2ZyLl9sw4PCuC4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdzw4PCuF9tYV90aV9vbl90b19mcl9sw4PCuCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkIEQuIE1NTU0gWVlZWSBba2wuXSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW2kgZGFnIGtsLl0gTFQnLFxyXG4gICAgbmV4dERheTogJ1tpIG1vcmdlbiBrbC5dIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBba2wuXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW2kgZ8ODwqVyIGtsLl0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbZm9ycmlnZV0gZGRkZCBba2wuXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ29tICVzJyxcclxuICAgIHBhc3Q6ICclcyBzaWRlbicsXHJcbiAgICBzOiAnbm9lbiBzZWt1bmRlcicsXHJcbiAgICBzczogJyVkIHNla3VuZGVyJyxcclxuICAgIG06ICdldHQgbWludXR0JyxcclxuICAgIG1tOiAnJWQgbWludXR0ZXInLFxyXG4gICAgaDogJ2VuIHRpbWUnLFxyXG4gICAgaGg6ICclZCB0aW1lcicsXHJcbiAgICBkOiAnZW4gZGFnJyxcclxuICAgIGRkOiAnJWQgZGFnZXInLFxyXG4gICAgTTogJ2VuIG3Dg8KlbmVkJyxcclxuICAgIE1NOiAnJWQgbcODwqVuZWRlcicsXHJcbiAgICB5OiAnZXR0IMODwqVyJyxcclxuICAgIHl5OiAnJWQgw4PCpXInXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWw6ICclZC4nLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBEdXRjaCAoQmVsZ2l1bSkgW25sLWJlXVxyXG4vLyEgYXV0aG9yIDogSm9yaXMgUsODwrZsaW5nIDogaHR0cHM6Ly9naXRodWIuY29tL2pvcmlzcm9saW5nXHJcbi8vISBhdXRob3IgOiBKYWNvYiBNaWRkYWcgOiBodHRwczovL2dpdGh1Yi5jb20vbWlkZGFnalxyXG5cclxubGV0IG1vbnRoc1Nob3J0V2l0aERvdHMgPSAnamFuLl9mZWIuX21ydC5fYXByLl9tZWlfanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKTtcclxubGV0IG1vbnRoc1Nob3J0V2l0aG91dERvdHMgPSAnamFuX2ZlYl9tcnRfYXByX21laV9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL15qYW4vaSwgL15mZWIvaSwgL15tYWFydHxtcnQuPyQvaSwgL15hcHIvaSwgL15tZWkkL2ksIC9eanVuW2kuXT8kL2ksIC9eanVsW2kuXT8kL2ksIC9eYXVnL2ksIC9ec2VwL2ksIC9eb2t0L2ksIC9ebm92L2ksIC9eZGVjL2ldO1xyXG5sZXQgbW9udGhzUmVnZXggPSAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fGFwcmlsfG1laXxhcHJpbHxqdVtubF1pfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyfGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XHJcblxyXG5leHBvcnQgY29uc3QgbmxCZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnbmwtYmUnLFxyXG4gIG1vbnRoczogJ2phbnVhcmlfZmVicnVhcmlfbWFhcnRfYXByaWxfbWVpX2p1bmlfanVsaV9hdWd1c3R1c19zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xyXG4gICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRob3V0RG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtb250aHNSZWdleCxcclxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcclxuICBtb250aHNTdHJpY3RSZWdleDogL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxtZWl8anVbbmxdaXxhcHJpbHxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fG1laXxqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaSxcclxuXHJcbiAgbW9udGhzUGFyc2UsXHJcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuXHJcbiAgd2Vla2RheXM6ICd6b25kYWdfbWFhbmRhZ19kaW5zZGFnX3dvZW5zZGFnX2RvbmRlcmRhZ192cmlqZGFnX3phdGVyZGFnJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICd6by5fbWEuX2RpLl93by5fZG8uX3ZyLl96YS4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICd6b19tYV9kaV93b19kb192cl96YScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW3ZhbmRhYWcgb21dIExUJyxcclxuICAgIG5leHREYXk6ICdbbW9yZ2VuIG9tXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW29tXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW2dpc3RlcmVuIG9tXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1thZmdlbG9wZW5dIGRkZGQgW29tXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ292ZXIgJXMnLFxyXG4gICAgcGFzdDogJyVzIGdlbGVkZW4nLFxyXG4gICAgczogJ2VlbiBwYWFyIHNlY29uZGVuJyxcclxuICAgIHNzOiAnJWQgc2Vjb25kZW4nLFxyXG4gICAgbTogJ8ODwqnDg8KpbiBtaW51dXQnLFxyXG4gICAgbW06ICclZCBtaW51dGVuJyxcclxuICAgIGg6ICfDg8Kpw4PCqW4gdXVyJyxcclxuICAgIGhoOiAnJWQgdXVyJyxcclxuICAgIGQ6ICfDg8Kpw4PCqW4gZGFnJyxcclxuICAgIGRkOiAnJWQgZGFnZW4nLFxyXG4gICAgTTogJ8ODwqnDg8KpbiBtYWFuZCcsXHJcbiAgICBNTTogJyVkIG1hYW5kZW4nLFxyXG4gICAgeTogJ8ODwqnDg8KpbiBqYWFyJyxcclxuICAgIHl5OiAnJWQgamFhcidcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcclxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XHJcbiAgICByZXR1cm4gbnVtICsgKChudW0gPT09IDEgfHwgbnVtID09PSA4IHx8IG51bSA+PSAyMCkgPyAnc3RlJyA6ICdkZScpO1xyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBEdXRjaCBbbmxdXHJcbi8vISBhdXRob3IgOiBKb3JpcyBSw4PCtmxpbmcgOiBodHRwczovL2dpdGh1Yi5jb20vam9yaXNyb2xpbmdcclxuLy8hIGF1dGhvciA6IEphY29iIE1pZGRhZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWRkYWdqXHJcblxyXG5sZXQgbW9udGhzU2hvcnRXaXRoRG90cyA9ICdqYW4uX2ZlYi5fbXJ0Ll9hcHIuX21laV9qdW4uX2p1bC5fYXVnLl9zZXAuX29rdC5fbm92Ll9kZWMuJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0V2l0aG91dERvdHMgPSAnamFuX2ZlYl9tcnRfYXByX21laV9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL15qYW4vaSwgL15mZWIvaSwgL15tYWFydHxtcnQuPyQvaSwgL15hcHIvaSwgL15tZWkkL2ksIC9eanVuW2kuXT8kL2ksIC9eanVsW2kuXT8kL2ksIC9eYXVnL2ksIC9ec2VwL2ksIC9eb2t0L2ksIC9ebm92L2ksIC9eZGVjL2ldO1xyXG5sZXQgbW9udGhzUmVnZXggPSAvXihqYW51YXJpfGZlYnJ1YXJpfG1hYXJ0fGFwcmlsfG1laXxhcHJpbHxqdVtubF1pfGF1Z3VzdHVzfHNlcHRlbWJlcnxva3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyfGphblxcLj98ZmViXFwuP3xtcnRcXC4/fGFwclxcLj98anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2k7XHJcblxyXG5leHBvcnQgY29uc3QgbmxMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ25sJyxcclxuICBtb250aHMgOiAnamFudWFyaV9mZWJydWFyaV9tYWFydF9hcHJpbF9tZWlfanVuaV9qdWxpX2F1Z3VzdHVzX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0IChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzO1xyXG4gICAgfSBlbHNlIGlmICgvLU1NTS0vLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRob3V0RG90c1tnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBtb250aHNSZWdleCxcclxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcclxuICBtb250aHNTdHJpY3RSZWdleDogL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxtZWl8anVbbmxdaXxhcHJpbHxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaSxcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fG1laXxqdVtubF1cXC4/fGF1Z1xcLj98c2VwXFwuP3xva3RcXC4/fG5vdlxcLj98ZGVjXFwuPykvaSxcclxuXHJcbiAgbW9udGhzUGFyc2UsXHJcbiAgbG9uZ01vbnRoc1BhcnNlIDogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZSA6IG1vbnRoc1BhcnNlLFxyXG5cclxuICB3ZWVrZGF5cyA6ICd6b25kYWdfbWFhbmRhZ19kaW5zZGFnX3dvZW5zZGFnX2RvbmRlcmRhZ192cmlqZGFnX3phdGVyZGFnJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAnem8uX21hLl9kaS5fd28uX2RvLl92ci5femEuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ3pvX21hX2RpX3dvX2RvX3ZyX3phJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICBMVCA6ICdISDptbScsXHJcbiAgICBMVFMgOiAnSEg6bW06c3MnLFxyXG4gICAgTCA6ICdERC1NTS1ZWVlZJyxcclxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMIDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhciA6IHtcclxuICAgIHNhbWVEYXk6ICdbdmFuZGFhZyBvbV0gTFQnLFxyXG4gICAgbmV4dERheTogJ1ttb3JnZW4gb21dIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbb21dIExUJyxcclxuICAgIGxhc3REYXk6ICdbZ2lzdGVyZW4gb21dIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW2FmZ2Vsb3Blbl0gZGRkZCBbb21dIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZSA6IHtcclxuICAgIGZ1dHVyZSA6ICdvdmVyICVzJyxcclxuICAgIHBhc3QgOiAnJXMgZ2VsZWRlbicsXHJcbiAgICBzIDogJ2VlbiBwYWFyIHNlY29uZGVuJyxcclxuICAgIHNzIDogJyVkIHNlY29uZGVuJyxcclxuICAgIG0gOiAnw4PCqcODwqluIG1pbnV1dCcsXHJcbiAgICBtbSA6ICclZCBtaW51dGVuJyxcclxuICAgIGggOiAnw4PCqcODwqluIHV1cicsXHJcbiAgICBoaCA6ICclZCB1dXInLFxyXG4gICAgZCA6ICfDg8Kpw4PCqW4gZGFnJyxcclxuICAgIGRkIDogJyVkIGRhZ2VuJyxcclxuICAgIE0gOiAnw4PCqcODwqluIG1hYW5kJyxcclxuICAgIE1NIDogJyVkIG1hYW5kZW4nLFxyXG4gICAgeSA6ICfDg8Kpw4PCqW4gamFhcicsXHJcbiAgICB5eSA6ICclZCBqYWFyJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHN0ZXxkZSkvLFxyXG4gIG9yZGluYWwgKF9udW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XHJcbiAgICByZXR1cm4gbnVtICsgKChudW0gPT09IDEgfHwgbnVtID09PSA4IHx8IG51bSA+PSAyMCkgPyAnc3RlJyA6ICdkZScpO1xyXG4gIH0sXHJcbiAgd2VlayA6IHtcclxuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFBvbGlzaCBbcGxdXHJcbi8vISBhdXRob3IgOiBSYWZhbCBIaXJzeiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ldm9MXHJcblxyXG5sZXQgbW9udGhzTm9taW5hdGl2ZSA9ICdzdHljemXDhcKEX2x1dHlfbWFyemVjX2t3aWVjaWXDhcKEX21hal9jemVyd2llY19saXBpZWNfc2llcnBpZcOFwoRfd3J6ZXNpZcOFwoRfcGHDhcK6ZHppZXJuaWtfbGlzdG9wYWRfZ3J1ZHppZcOFwoQnLnNwbGl0KCdfJyk7XHJcbmxldCBtb250aHNTdWJqZWN0aXZlID0gJ3N0eWN6bmlhX2x1dGVnb19tYXJjYV9rd2lldG5pYV9tYWphX2N6ZXJ3Y2FfbGlwY2Ffc2llcnBuaWFfd3J6ZcOFwptuaWFfcGHDhcK6ZHppZXJuaWthX2xpc3RvcGFkYV9ncnVkbmlhJy5zcGxpdCgnXycpO1xyXG5cclxuZnVuY3Rpb24gcGx1cmFsKG51bTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChudW0gJSAxMCA8IDUpICYmIChudW0gJSAxMCA+IDEpICYmICgofn4obnVtIC8gMTApICUgMTApICE9PSAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgbGV0IHJlc3VsdCA9IG51bSArICcgJztcclxuICBzd2l0Y2ggKGtleSkge1xyXG4gICAgY2FzZSAnc3MnOlxyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Nla3VuZHknIDogJ3Nla3VuZCcpO1xyXG4gICAgY2FzZSAnbSc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAnbWludXTDhMKZJztcclxuICAgIGNhc2UgJ21tJzpcclxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XHJcbiAgICBjYXNlICdoJzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZ29kemluYScgOiAnZ29kemluw4TCmSc7XHJcbiAgICBjYXNlICdoaCc6XHJcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnZ29kemlueScgOiAnZ29kemluJyk7XHJcbiAgICBjYXNlICdNTSc6XHJcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWllc2nDhMKFY2UnIDogJ21pZXNpw4TCmWN5Jyk7XHJcbiAgICBjYXNlICd5eSc6XHJcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbGF0YScgOiAnbGF0Jyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGxMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3BsJyxcclxuICBtb250aHMoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzTm9taW5hdGl2ZTtcclxuICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnJykge1xyXG4gICAgICAvLyBIYWNrOiBpZiBmb3JtYXQgZW1wdHkgd2Uga25vdyB0aGlzIGlzIHVzZWQgdG8gZ2VuZXJhdGVcclxuICAgICAgLy8gUmVnRXhwIGJ5IG1vbWVudC4gR2l2ZSB0aGVuIGJhY2sgYm90aCB2YWxpZCBmb3JtcyBvZiBtb250aHNcclxuICAgICAgLy8gaW4gUmVnRXhwIHJlYWR5IGZvcm1hdC5cclxuICAgICAgcmV0dXJuICcoJyArIG1vbnRoc1N1YmplY3RpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXSArICd8JyArIG1vbnRoc05vbWluYXRpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXSArICcpJztcclxuICAgIH0gZWxzZSBpZiAoL0QgTU1NTS8udGVzdChmb3JtYXQpKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTdWJqZWN0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbW9udGhzTm9taW5hdGl2ZVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbW9udGhzU2hvcnQ6ICdzdHlfbHV0X21hcl9rd2lfbWFqX2N6ZV9saXBfc2llX3dyel9wYcOFwrpfbGlzX2dydScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ25pZWR6aWVsYV9wb25pZWR6aWHDhcKCZWtfd3RvcmVrX8OFwptyb2RhX2N6d2FydGVrX3Bpw4TChXRla19zb2JvdGEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ25kel9wb25fd3Rfw4XCm3JfY3p3X3B0X3NvYicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ05kX1BuX1d0X8OFwppyX0N6X1B0X1NvJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbRHppw4XCmyBvXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW0p1dHJvIG9dIExUJyxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW1cgbmllZHppZWzDhMKZIG9dIExUJztcclxuXHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgcmV0dXJuICdbV2Ugd3RvcmVrIG9dIExUJztcclxuXHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgcmV0dXJuICdbVyDDhcKbcm9kw4TCmSBvXSBMVCc7XHJcblxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiAnW1cgcGnDhMKFdGVrIG9dIExUJztcclxuXHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbVyBzb2JvdMOEwpkgb10gTFQnO1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuICdbV10gZGRkZCBbb10gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGFzdERheTogJ1tXY3pvcmFqIG9dIExUJyxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoLDhMKFIG5pZWR6aWVsw4TCmSBvXSBMVCc7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgw4XCm3JvZMOEwpkgb10gTFQnO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoLDhMKFIGN6d2FydGVrIG9dIExUJztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBwacOEwoV0ZWsgb10gTFQnO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoLDhMKFIHNvYm90w4TCmSBvXSBMVCc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoJ5XSBkZGRkIFtvXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ3phICVzJyxcclxuICAgIHBhc3Q6ICclcyB0ZW11JyxcclxuICAgIHM6ICdraWxrYSBzZWt1bmQnLFxyXG4gICAgc3M6IHRyYW5zbGF0ZSxcclxuICAgIG06IHRyYW5zbGF0ZSxcclxuICAgIG1tOiB0cmFuc2xhdGUsXHJcbiAgICBoOiB0cmFuc2xhdGUsXHJcbiAgICBoaDogdHJhbnNsYXRlLFxyXG4gICAgZDogJzEgZHppZcOFwoQnLFxyXG4gICAgZGQ6ICclZCBkbmknLFxyXG4gICAgTTogJ21pZXNpw4TChWMnLFxyXG4gICAgTU06IHRyYW5zbGF0ZSxcclxuICAgIHk6ICdyb2snLFxyXG4gICAgeXk6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFBvcnR1Z3Vlc2UgKEJyYXppbCkgW3B0LWJyXVxyXG4vLyEgYXV0aG9yIDogQ2FpbyBSaWJlaXJvIFBlcmVpcmEgOiBodHRwczovL2dpdGh1Yi5jb20vY2Fpby1yaWJlaXJvLXBlcmVpcmFcclxuXHJcbmV4cG9ydCBjb25zdCBwdEJyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdwdC1icicsXHJcbiAgbW9udGhzOiAnSmFuZWlyb19GZXZlcmVpcm9fTWFyw4PCp29fQWJyaWxfTWFpb19KdW5ob19KdWxob19BZ29zdG9fU2V0ZW1icm9fT3V0dWJyb19Ob3ZlbWJyb19EZXplbWJybycuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ0phbl9GZXZfTWFyX0Ficl9NYWlfSnVuX0p1bF9BZ29fU2V0X091dF9Ob3ZfRGV6Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnRG9taW5nb19TZWd1bmRhLWZlaXJhX1RlcsODwqdhLWZlaXJhX1F1YXJ0YS1mZWlyYV9RdWludGEtZmVpcmFfU2V4dGEtZmVpcmFfU8ODwqFiYWRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdEb21fU2VnX1Rlcl9RdWFfUXVpX1NleF9Tw4PCoWInLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdEb18yw4LCql8zw4LCql80w4LCql81w4LCql82w4LCql9Tw4PCoScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIFvDg8Kgc10gSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBbw4PCoHNdIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbSG9qZSDDg8Kgc10gTFQnLFxyXG4gICAgbmV4dERheTogJ1tBbWFuaMODwqMgw4PCoHNdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbw4PCoHNdIExUJyxcclxuICAgIGxhc3REYXk6ICdbT250ZW0gw4PCoHNdIExUJyxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuIChnZXREYXlPZldlZWsoZGF0ZSkgPT09IDAgfHwgZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSA2KSA/XHJcbiAgICAgICAgJ1vDg8KabHRpbW9dIGRkZGQgW8ODwqBzXSBMVCcgOiAvLyBTYXR1cmRheSArIFN1bmRheVxyXG4gICAgICAgICdbw4PCmmx0aW1hXSBkZGRkIFvDg8Kgc10gTFQnOyAvLyBNb25kYXkgLSBGcmlkYXlcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VtICVzJyxcclxuICAgIHBhc3Q6ICclcyBhdHLDg8KhcycsXHJcbiAgICBzOiAncG91Y29zIHNlZ3VuZG9zJyxcclxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxyXG4gICAgbTogJ3VtIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxyXG4gICAgaDogJ3VtYSBob3JhJyxcclxuICAgIGhoOiAnJWQgaG9yYXMnLFxyXG4gICAgZDogJ3VtIGRpYScsXHJcbiAgICBkZDogJyVkIGRpYXMnLFxyXG4gICAgTTogJ3VtIG3Dg8KqcycsXHJcbiAgICBNTTogJyVkIG1lc2VzJyxcclxuICAgIHk6ICd1bSBhbm8nLFxyXG4gICAgeXk6ICclZCBhbm9zJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXHJcbiAgb3JkaW5hbDogJyVkw4LCuidcclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyAhIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyAhIGxvY2FsZSA6IFJvbWFuaWFuIFtyb11cclxuLy8hIGF1dGhvciA6IFZsYWQgR3VyZGlnYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ndXJkaWdhXHJcbi8vISBhdXRob3IgOiBWYWxlbnRpbiBBZ2FjaGkgOiBodHRwczovL2dpdGh1Yi5jb20vYXZhbHlcclxuLy8gISBhdXRob3IgOiBFYXJsZSB3aGl0ZTogaHR0cHM6Ly9naXRodWIuY29tLzVlYXJsZVxyXG5cclxuZnVuY3Rpb24gcmVsYXRpdmVUaW1lV2l0aFBsdXJhbChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGxldCBmb3JtYXQ6IHtba2V5OnN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICBzczogJ3NlY3VuZGUnLFxyXG4gICAgbW06ICdtaW51dGUnLFxyXG4gICAgaGg6ICdvcmUnLFxyXG4gICAgZGQ6ICd6aWxlJyxcclxuICAgIE1NOiAnbHVuaScsXHJcbiAgICB5eTogJ2FuaSdcclxuICB9O1xyXG5cclxuICBsZXQgc2VwYXJhdG9yID0gJyAnO1xyXG4gIGlmIChudW0gJSAxMDAgPj0gMjAgfHwgKG51bSA+PSAxMDAgJiYgbnVtICUgMTAwID09PSAwKSkge1xyXG4gICAgc2VwYXJhdG9yID0gJyBkZSAnO1xyXG4gIH1cclxuICByZXR1cm4gbnVtICsgc2VwYXJhdG9yICsgZm9ybWF0W2tleV07XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgcm9Mb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3JvJyxcclxuICBtb250aHM6ICdpYW51YXJpZV9mZWJydWFyaWVfbWFydGllX2FwcmlsaWVfbWFpX2l1bmllX2l1bGllX2F1Z3VzdF9zZXB0ZW1icmllX29jdG9tYnJpZV9ub2llbWJyaWVfZGVjZW1icmllJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnaWFuLl9mZWJyLl9tYXJ0Ll9hcHIuX21haV9pdW4uX2l1bC5fYXVnLl9zZXB0Ll9vY3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnZHVtaW5pY8OEwoNfbHVuaV9tYXLDiMKbaV9taWVyY3VyaV9qb2lfdmluZXJpX3PDg8KibWLDhMKDdMOEwoMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ0R1bV9MdW5fTWFyX01pZV9Kb2lfVmluX1PDg8KibScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ0R1X0x1X01hX01pX0pvX1ZpX1PDg8KiJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQuTU0uWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1themkgbGFdIExUJyxcclxuICAgIG5leHREYXk6ICdbbcODwqJpbmUgbGFdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbbGFdIExUJyxcclxuICAgIGxhc3REYXk6ICdbaWVyaSBsYV0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbZm9zdGFdIGRkZGQgW2xhXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ3Blc3RlICVzJyxcclxuICAgIHBhc3Q6ICclcyDDg8KubiB1cm3DhMKDJyxcclxuICAgIHM6ICdjw4PConRldmEgc2VjdW5kZScsXHJcbiAgICBzczogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIG06ICd1biBtaW51dCcsXHJcbiAgICBtbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIGg6ICdvIG9yw4TCgycsXHJcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIGQ6ICdvIHppJyxcclxuICAgIGRkOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgTTogJ28gbHVuw4TCgycsXHJcbiAgICBNTTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIHk6ICd1biBhbicsXHJcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRXZWVrIH0gZnJvbSAnLi4vdW5pdHMvd2Vlayc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFJ1c3NpYW4gW3J1XVxyXG4vLyEgYXV0aG9yIDogVmlrdG9ybWluYXRvciA6IGh0dHBzOi8vZ2l0aHViLmNvbS9WaWt0b3JtaW5hdG9yXHJcbi8vISBBdXRob3IgOiBNZW5lbGlvbiBFbGVuc8ODwrpsZSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9PaXJlXHJcbi8vISBhdXRob3IgOiDDkMKaw5DCvsORwoDDkMK1w5DCvcOQwrHDkMK1w5HCgMOQwrMgw5DCnMOQwrDDkcKAw5DCuiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zb2NrZXRwYWlyXHJcblxyXG5mdW5jdGlvbiBwbHVyYWwod29yZDogc3RyaW5nLCBudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgbGV0IGZvcm1zID0gd29yZC5zcGxpdCgnXycpO1xyXG4gIHJldHVybiBudW0gJSAxMCA9PT0gMSAmJiBudW0gJSAxMDAgIT09IDExID8gZm9ybXNbMF0gOiAobnVtICUgMTAgPj0gMiAmJiBudW0gJSAxMCA8PSA0ICYmIChudW0gJSAxMDAgPCAxMCB8fCBudW0gJSAxMDAgPj0gMjApID8gZm9ybXNbMV0gOiBmb3Jtc1syXSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHNzOiB3aXRob3V0U3VmZml4ID8gJ8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMOQwrBfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCi1/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnIDogJ8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwoNfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5HCi1/DkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnLFxyXG4gICAgbW06IHdpdGhvdXRTdWZmaXggPyAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwX8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCi1/DkMK8w5DCuMOQwr3DkcKDw5HCgicgOiAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkcKDX8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCi1/DkMK8w5DCuMOQwr3DkcKDw5HCgicsXHJcbiAgICBoaDogJ8ORwofDkMKww5HCgV/DkcKHw5DCsMORwoHDkMKwX8ORwofDkMKww5HCgcOQwr7DkMKyJyxcclxuICAgIGRkOiAnw5DCtMOQwrXDkMK9w5HCjF/DkMK0w5DCvcORwo9fw5DCtMOQwr3DkMK1w5DCuScsXHJcbiAgICBNTTogJ8OQwrzDkMK1w5HCgcORwo/DkcKGX8OQwrzDkMK1w5HCgcORwo/DkcKGw5DCsF/DkMK8w5DCtcORwoHDkcKPw5HChsOQwrXDkMKyJyxcclxuICAgIHl5OiAnw5DCs8OQwr7DkMK0X8OQwrPDkMK+w5DCtMOQwrBfw5DCu8OQwrXDkcKCJ1xyXG4gIH07XHJcbiAgaWYgKGtleSA9PT0gJ20nKSB7XHJcbiAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsOQwrAnIDogJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCgyc7XHJcbiAgfVxyXG4gIHJldHVybiBudW0gKyAnICcgKyBwbHVyYWwoZm9ybWF0W2tleV0sICtudW0pO1xyXG59XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL17DkcKPw5DCvcOQwrIvaSwgL17DkcKEw5DCtcOQwrIvaSwgL17DkMK8w5DCsMORwoAvaSwgL17DkMKww5DCv8ORwoAvaSwgL17DkMK8w5DCsFvDkMK5w5HCj10vaSwgL17DkMK4w5HCjsOQwr0vaSwgL17DkMK4w5HCjsOQwrsvaSwgL17DkMKww5DCssOQwrMvaSwgL17DkcKBw5DCtcOQwr0vaSwgL17DkMK+w5DCusORwoIvaSwgL17DkMK9w5DCvsORwo8vaSwgL17DkMK0w5DCtcOQwrovaV07XHJcblxyXG4vLyBodHRwOi8vbmV3LmdyYW1vdGEucnUvc3ByYXZrYS9ydWxlcy8xMzktcHJvcCA6IMOCwqcgMTAzXHJcbi8vIMOQwqHDkMK+w5DCusORwoDDkMKww5HCicOQwrXDkMK9w5DCuMORwo8gw5DCvMOQwrXDkcKBw5HCj8ORwobDkMK1w5DCsjogaHR0cDovL25ldy5ncmFtb3RhLnJ1L3NwcmF2a2EvYnVyby9zZWFyY2gtYW5zd2VyP3M9MjQyNjM3XHJcbi8vIENMRFIgZGF0YTogICAgICAgICAgaHR0cDovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy8yOC9zdW1tYXJ5L3J1Lmh0bWwjMTc1M1xyXG5leHBvcnQgY29uc3QgcnVMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3J1JyxcclxuICBtb250aHM6IHtcclxuICAgIGZvcm1hdDogJ8ORwo/DkMK9w5DCssOQwrDDkcKAw5HCj1/DkcKEw5DCtcOQwrLDkcKAw5DCsMOQwrvDkcKPX8OQwrzDkMKww5HCgMORwoLDkMKwX8OQwrDDkMK/w5HCgMOQwrXDkMK7w5HCj1/DkMK8w5DCsMORwo9fw5DCuMORwo7DkMK9w5HCj1/DkMK4w5HCjsOQwrvDkcKPX8OQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrBfw5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgMORwo9fw5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAw5HCj1/DkMK9w5DCvsORwo/DkMKxw5HCgMORwo9fw5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAw5HCjycuc3BsaXQoJ18nKSxcclxuICAgIHN0YW5kYWxvbmU6ICfDkcKPw5DCvcOQwrLDkMKww5HCgMORwoxfw5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7w5HCjF/DkMK8w5DCsMORwoDDkcKCX8OQwrDDkMK/w5HCgMOQwrXDkMK7w5HCjF/DkMK8w5DCsMOQwrlfw5DCuMORwo7DkMK9w5HCjF/DkMK4w5HCjsOQwrvDkcKMX8OQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgl/DkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAw5HCjF/DkMK+w5DCusORwoLDkcKPw5DCscORwoDDkcKMX8OQwr3DkMK+w5HCj8OQwrHDkcKAw5HCjF/DkMK0w5DCtcOQwrrDkMKww5DCscORwoDDkcKMJy5zcGxpdCgnXycpXHJcbiAgfSxcclxuICBtb250aHNTaG9ydDoge1xyXG4gICAgLy8gw5DCv8OQwr4gQ0xEUiDDkMK4w5DCvMOQwrXDkMK9w5DCvcOQwr4gXCLDkMK4w5HCjsOQwrsuXCIgw5DCuCBcIsOQwrjDkcKOw5DCvS5cIiwgw5DCvcOQwr4gw5DCusOQwrDDkMK6w5DCvsOQwrkgw5HCgcOQwrzDkcKLw5HCgcOQwrsgw5DCvMOQwrXDkMK9w5HCj8ORwoLDkcKMIMOQwrHDkcKDw5DCusOQwrLDkcKDIMOQwr3DkMKwIMORwoLDkMK+w5HCh8OQwrrDkcKDID9cclxuICAgIGZvcm1hdDogJ8ORwo/DkMK9w5DCsi5fw5HChMOQwrXDkMKyw5HCgC5fw5DCvMOQwrDDkcKALl/DkMKww5DCv8ORwoAuX8OQwrzDkMKww5HCj1/DkMK4w5HCjsOQwr3DkcKPX8OQwrjDkcKOw5DCu8ORwo9fw5DCsMOQwrLDkMKzLl/DkcKBw5DCtcOQwr3DkcKCLl/DkMK+w5DCusORwoIuX8OQwr3DkMK+w5HCj8OQwrEuX8OQwrTDkMK1w5DCui4nLnNwbGl0KCdfJyksXHJcbiAgICBzdGFuZGFsb25lOiAnw5HCj8OQwr3DkMKyLl/DkcKEw5DCtcOQwrLDkcKALl/DkMK8w5DCsMORwoDDkcKCX8OQwrDDkMK/w5HCgC5fw5DCvMOQwrDDkMK5X8OQwrjDkcKOw5DCvcORwoxfw5DCuMORwo7DkMK7w5HCjF/DkMKww5DCssOQwrMuX8ORwoHDkMK1w5DCvcORwoIuX8OQwr7DkMK6w5HCgi5fw5DCvcOQwr7DkcKPw5DCsS5fw5DCtMOQwrXDkMK6Licuc3BsaXQoJ18nKVxyXG4gIH0sXHJcbiAgd2Vla2RheXM6IHtcclxuICAgIHN0YW5kYWxvbmU6ICfDkMKyw5DCvsORwoHDkMK6w5HCgMOQwrXDkcKBw5DCtcOQwr3DkcKMw5DCtV/DkMK/w5DCvsOQwr3DkMK1w5DCtMOQwrXDkMK7w5HCjMOQwr3DkMK4w5DCul/DkMKyw5HCgsOQwr7DkcKAw5DCvcOQwrjDkMK6X8ORwoHDkcKAw5DCtcOQwrTDkMKwX8ORwofDkMK1w5HCgsOQwrLDkMK1w5HCgMOQwrNfw5DCv8ORwo/DkcKCw5DCvcOQwrjDkcKGw5DCsF/DkcKBw5HCg8OQwrHDkMKxw5DCvsORwoLDkMKwJy5zcGxpdCgnXycpLFxyXG4gICAgZm9ybWF0OiAnw5DCssOQwr7DkcKBw5DCusORwoDDkMK1w5HCgcOQwrXDkMK9w5HCjMOQwrVfw5DCv8OQwr7DkMK9w5DCtcOQwrTDkMK1w5DCu8ORwozDkMK9w5DCuMOQwrpfw5DCssORwoLDkMK+w5HCgMOQwr3DkMK4w5DCul/DkcKBw5HCgMOQwrXDkMK0w5HCg1/DkcKHw5DCtcORwoLDkMKyw5DCtcORwoDDkMKzX8OQwr/DkcKPw5HCgsOQwr3DkMK4w5HChsORwoNfw5HCgcORwoPDkMKxw5DCscOQwr7DkcKCw5HCgycuc3BsaXQoJ18nKSxcclxuICAgIGlzRm9ybWF0OiAvXFxbID9bw5DCksOQwrJdID8oPzrDkMK/w5HCgMOQwr7DkcKIw5DCu8ORwoPDkcKOfMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkcKDw5HCjnzDkcKNw5HCgsORwoMpPyA/XFxdID9kZGRkL1xyXG4gIH0sXHJcbiAgd2Vla2RheXNTaG9ydDogJ8OQwrLDkcKBX8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnw5DCssORwoFfw5DCv8OQwr1fw5DCssORwoJfw5HCgcORwoBfw5HCh8ORwoJfw5DCv8ORwoJfw5HCgcOQwrEnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2UsXHJcbiAgbG9uZ01vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuICBzaG9ydE1vbnRoc1BhcnNlOiBtb250aHNQYXJzZSxcclxuXHJcbiAgLy8gw5DCv8OQwr7DkMK7w5DCvcORwovDkMK1IMOQwr3DkMKww5DCt8OQwrLDkMKww5DCvcOQwrjDkcKPIMORwoEgw5DCv8OQwrDDkMK0w5DCtcOQwrbDkMKww5DCvMOQwrgsIMOQwr/DkMK+IMORwoLDkcKAw5DCuCDDkMKxw5HCg8OQwrrDkMKyw5HCiywgw5DCtMOQwrvDkcKPIMOQwr3DkMK1w5DCusOQwr7DkcKCw5DCvsORwoDDkcKLw5HChSwgw5DCv8OQwr4gNCDDkMKxw5HCg8OQwrrDkMKyw5HCiywgw5HCgcOQwr7DkMK6w5HCgMOQwrDDkcKJw5DCtcOQwr3DkMK4w5HCjyDDkcKBIMORwoLDkMK+w5HCh8OQwrrDkMK+w5DCuSDDkMK4IMOQwrHDkMK1w5DCtyDDkcKCw5DCvsORwofDkMK6w5DCuFxyXG4gIG1vbnRoc1JlZ2V4OiAvXijDkcKPw5DCvcOQwrLDkMKww5HCgFvDkcKMw5HCj118w5HCj8OQwr3DkMKyXFwuP3zDkcKEw5DCtcOQwrLDkcKAw5DCsMOQwrtbw5HCjMORwo9dfMORwoTDkMK1w5DCssORwoA/XFwuP3zDkMK8w5DCsMORwoDDkcKCw5DCsD98w5DCvMOQwrDDkcKAXFwuP3zDkMKww5DCv8ORwoDDkMK1w5DCu1vDkcKMw5HCj118w5DCsMOQwr/DkcKAXFwuP3zDkMK8w5DCsFvDkMK5w5HCj118w5DCuMORwo7DkMK9W8ORwozDkcKPXXzDkMK4w5HCjsOQwr1cXC4/fMOQwrjDkcKOw5DCu1vDkcKMw5HCj118w5DCuMORwo7DkMK7XFwuP3zDkMKww5DCssOQwrPDkcKDw5HCgcORwoLDkMKwP3zDkMKww5DCssOQwrNcXC4/fMORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoBbw5HCjMORwo9dfMORwoHDkMK1w5DCvcORwoI/XFwuP3zDkMK+w5DCusORwoLDkcKPw5DCscORwoBbw5HCjMORwo9dfMOQwr7DkMK6w5HCglxcLj98w5DCvcOQwr7DkcKPw5DCscORwoBbw5HCjMORwo9dfMOQwr3DkMK+w5HCj8OQwrE/XFwuP3zDkMK0w5DCtcOQwrrDkMKww5DCscORwoBbw5HCjMORwo9dfMOQwrTDkMK1w5DCulxcLj8pL2ksXHJcblxyXG4gIC8vIMOQwrrDkMK+w5DCv8OQwrjDkcKPIMOQwr/DkcKAw5DCtcOQwrTDkcKLw5DCtMORwoPDkcKJw5DCtcOQwrPDkMK+XHJcbiAgbW9udGhzU2hvcnRSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCjMORwo9dfMORwo/DkMK9w5DCslxcLj98w5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7W8ORwozDkcKPXXzDkcKEw5DCtcOQwrLDkcKAP1xcLj98w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrzDkMKww5HCgFxcLj98w5DCsMOQwr/DkcKAw5DCtcOQwrtbw5HCjMORwo9dfMOQwrDDkMK/w5HCgFxcLj98w5DCvMOQwrBbw5DCucORwo9dfMOQwrjDkcKOw5DCvVvDkcKMw5HCj118w5DCuMORwo7DkMK9XFwuP3zDkMK4w5HCjsOQwrtbw5HCjMORwo9dfMOQwrjDkcKOw5DCu1xcLj98w5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsD98w5DCsMOQwrLDkMKzXFwuP3zDkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkcKBw5DCtcOQwr3DkcKCP1xcLj98w5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK+w5DCusORwoJcXC4/fMOQwr3DkMK+w5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK9w5DCvsORwo/DkMKxP1xcLj98w5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAW8ORwozDkcKPXXzDkMK0w5DCtcOQwrpcXC4/KS9pLFxyXG5cclxuICAvLyDDkMK/w5DCvsOQwrvDkMK9w5HCi8OQwrUgw5DCvcOQwrDDkMK3w5DCssOQwrDDkMK9w5DCuMORwo8gw5HCgSDDkMK/w5DCsMOQwrTDkMK1w5DCtsOQwrDDkMK8w5DCuFxyXG4gIG1vbnRoc1N0cmljdFJlZ2V4OiAvXijDkcKPw5DCvcOQwrLDkMKww5HCgFvDkcKPw5HCjF18w5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7W8ORwo/DkcKMXXzDkMK8w5DCsMORwoDDkcKCw5DCsD98w5DCsMOQwr/DkcKAw5DCtcOQwrtbw5HCj8ORwoxdfMOQwrzDkMKwW8ORwo/DkMK5XXzDkMK4w5HCjsOQwr1bw5HCj8ORwoxdfMOQwrjDkcKOw5DCu1vDkcKPw5HCjF18w5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsD98w5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgFvDkcKPw5HCjF18w5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAW8ORwo/DkcKMXXzDkMK9w5DCvsORwo/DkMKxw5HCgFvDkcKPw5HCjF18w5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAW8ORwo/DkcKMXSkvaSxcclxuXHJcbiAgLy8gw5DCksORwovDkcKAw5DCsMOQwrbDkMK1w5DCvcOQwrjDkMK1LCDDkMK6w5DCvsORwoLDkMK+w5HCgMOQwr7DkMK1IMORwoHDkMK+w5DCvsORwoLDkMKyw5DCtcORwoHDkcKCw5DCssORwoPDkMK1w5HCgiDDkcKCw5DCvsOQwrvDkcKMw5DCusOQwr4gw5HCgcOQwr7DkMK6w5HCgMOQwrDDkcKJw5HCkcOQwr3DkMK9w5HCi8OQwrwgw5HChMOQwr7DkcKAw5DCvMOQwrDDkMK8XHJcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14ow5HCj8OQwr3DkMKyXFwufMORwoTDkMK1w5DCssORwoA/XFwufMOQwrzDkMKww5HCgFvDkcKCLl18w5DCsMOQwr/DkcKAXFwufMOQwrzDkMKwW8ORwo/DkMK5XXzDkMK4w5HCjsOQwr1bw5HCjMORwo8uXXzDkMK4w5HCjsOQwrtbw5HCjMORwo8uXXzDkMKww5DCssOQwrNcXC58w5HCgcOQwrXDkMK9w5HCgj9cXC58w5DCvsOQwrrDkcKCXFwufMOQwr3DkMK+w5HCj8OQwrE/XFwufMOQwrTDkMK1w5DCulxcLikvaSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWSDDkMKzLicsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDDkMKzLiwgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgw5DCsy4sIEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vDkMKhw5DCtcOQwrPDkMK+w5DCtMOQwr3DkcKPIMOQwrJdIExUJyxcclxuICAgIG5leHREYXk6ICdbw5DCl8OQwrDDkMKyw5HCgsORwoDDkMKwIMOQwrJdIExUJyxcclxuICAgIGxhc3REYXk6ICdbw5DCksORwofDkMK1w5HCgMOQwrAgw5DCsl0gTFQnLFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSwgbm93OiBEYXRlKSB7XHJcbiAgICAgIGlmIChnZXRXZWVrKG5vdykgIT09IGdldFdlZWsoZGF0ZSkpIHtcclxuICAgICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkMK1w5DCtV0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkMK4w5DCuV0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMORwoHDkMK7w5DCtcOQwrTDkcKDw5HCjsORwonDkcKDw5HCjl0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSAyKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSw5DCvl0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSXSBkZGRkIFvDkMKyXSBMVCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSwgbm93OiBEYXRlKSB7XHJcbiAgICAgIGlmIChnZXRXZWVrKG5vdykgIT09IGdldFdlZWsoZGF0ZSkpIHtcclxuICAgICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwr/DkcKAw5DCvsORwojDkMK7w5DCvsOQwrVdIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK/w5HCgMOQwr7DkcKIw5DCu8ORwovDkMK5XSBkZGRkIFvDkMKyXSBMVCc7XHJcbiAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKDw5HCjl0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSAyKSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSw5DCvl0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSXSBkZGRkIFvDkMKyXSBMVCc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICfDkcKHw5DCtcORwoDDkMK1w5DCtyAlcycsXHJcbiAgICBwYXN0OiAnJXMgw5DCvcOQwrDDkMK3w5DCsMOQwrQnLFxyXG4gICAgczogJ8OQwr3DkMK1w5HCgcOQwrrDkMK+w5DCu8ORwozDkMK6w5DCviDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnLFxyXG4gICAgc3M6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICBtOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgbW06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICBoOiAnw5HCh8OQwrDDkcKBJyxcclxuICAgIGhoOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgZDogJ8OQwrTDkMK1w5DCvcORwownLFxyXG4gICAgZGQ6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICBNOiAnw5DCvMOQwrXDkcKBw5HCj8ORwoYnLFxyXG4gICAgTU06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICB5OiAnw5DCs8OQwr7DkMK0JyxcclxuICAgIHl5OiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAvw5DCvcOQwr7DkcKHw5DCuHzDkcKDw5HCgsORwoDDkMKwfMOQwrTDkMK9w5HCj3zDkMKyw5DCtcORwofDkMK1w5HCgMOQwrAvaSxcclxuICBpc1BNKGlucHV0KSB7XHJcbiAgICByZXR1cm4gL14ow5DCtMOQwr3DkcKPfMOQwrLDkMK1w5HCh8OQwrXDkcKAw5DCsCkkLy50ZXN0KGlucHV0KTtcclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCA0KSB7XHJcbiAgICAgIHJldHVybiAnw5DCvcOQwr7DkcKHw5DCuCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMikge1xyXG4gICAgICByZXR1cm4gJ8ORwoPDkcKCw5HCgMOQwrAnO1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTcpIHtcclxuICAgICAgcmV0dXJuICfDkMK0w5DCvcORwo8nO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICfDkMKyw5DCtcORwofDkMK1w5HCgMOQwrAnO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LSjDkMK5fMOQwrPDkMK+fMORwo8pLyxcclxuICBvcmRpbmFsKF9udW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnLcOQwrknO1xyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJy3DkMKzw5DCvic7XHJcbiAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICBjYXNlICdXJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJy3DkcKPJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogU2xvdmFrIFtza11cclxuLy8hIGF1dGhvciA6IEpvemVmIFBhw4XCvmluIDogaHR0cHM6Ly9naXRodWIuY29tL2F0aXJpc1xyXG5cclxuY29uc3QgbW9udGhzID0gJ2phbnXDg8Khcl9mZWJydcODwqFyX21hcmVjX2FwcsODwq1sX23Dg8Khal9qw4PCum5fasODwrpsX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0w4PCs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKTtcclxuY29uc3QgbW9udGhzU2hvcnQgPSAnamFuX2ZlYl9tYXJfYXByX23Dg8Khal9qw4PCum5fasODwrpsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyk7XHJcblxyXG5mdW5jdGlvbiBwbHVyYWwobnVtOiBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gKG51bSA+IDEpICYmIChudW0gPCA1KSAmJiAofn4obnVtIC8gMTApICE9PSAxKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IHJlc3VsdCA9IG51bSArICcgJztcclxuXHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOi8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdww4PCoXIgc2Vrw4PCum5kJyA6ICdww4PCoXIgc2VrdW5kYW1pJztcclxuICAgIGNhc2UgJ3NzJzovLyA5IHNlY29uZHMgLyBpbiA5IHNlY29uZHMgLyA5IHNlY29uZHMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWvDg8K6bmQnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ3Nla3VuZGFtaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAnbSc6Ly8gYSBtaW51dGUgLyBpbiBhIG1pbnV0ZSAvIGEgbWludXRlIGFnb1xyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW7Dg8K6dGEnIDogKGlzRnV0dXJlID8gJ21pbsODwrp0dScgOiAnbWluw4PCunRvdScpO1xyXG4gICAgY2FzZSAnbW0nOi8vIDkgbWludXRlcyAvIGluIDkgbWludXRlcyAvIDkgbWludXRlcyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pbsODwrp0eScgOiAnbWluw4PCunQnKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ21pbsODwrp0YW1pJztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgICBjYXNlICdoJzovLyBhbiBob3VyIC8gaW4gYW4gaG91ciAvIGFuIGhvdXIgYWdvXHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2hvZGluYScgOiAoaXNGdXR1cmUgPyAnaG9kaW51JyA6ICdob2Rpbm91Jyk7XHJcbiAgICBjYXNlICdoaCc6Ly8gOSBob3VycyAvIGluIDkgaG91cnMgLyA5IGhvdXJzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnaG9kaW55JyA6ICdob2TDg8KtbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnaG9kaW5hbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ2QnOi8vIGEgZGF5IC8gaW4gYSBkYXkgLyBhIGRheSBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdkZcOFwognIDogJ2TDhcKIb20nO1xyXG4gICAgY2FzZSAnZGQnOi8vIDkgZGF5cyAvIGluIDkgZGF5cyAvIDkgZGF5cyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2RuaScgOiAnZG7Dg8KtJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdkw4XCiGFtaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAnTSc6Ly8gYSBtb250aCAvIGluIGEgbW9udGggLyBhIG1vbnRoIGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ21lc2lhYycgOiAnbWVzaWFjb20nO1xyXG4gICAgY2FzZSAnTU0nOi8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21lc2lhY2UnIDogJ21lc2lhY292Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtZXNpYWNtaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAneSc6Ly8gYSB5ZWFyIC8gaW4gYSB5ZWFyIC8gYSB5ZWFyIGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3JvaycgOiAncm9rb20nO1xyXG4gICAgY2FzZSAneXknOi8vIDkgeWVhcnMgLyBpbiA5IHllYXJzIC8gOSB5ZWFycyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ3Jva3knIDogJ3Jva292Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdyb2ttaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNrTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdzaycsXHJcbiAgbW9udGhzLFxyXG4gIG1vbnRoc1Nob3J0LFxyXG4gIHdlZWtkYXlzOiAnbmVkZcOEwr5hX3BvbmRlbG9rX3V0b3Jva19zdHJlZGFfw4XCoXR2cnRva19waWF0b2tfc29ib3RhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICduZV9wb191dF9zdF/DhcKhdF9waV9zbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ25lX3BvX3V0X3N0X8OFwqF0X3BpX3NvJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQuTU0uWVlZWScsXHJcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgSDptbScsXHJcbiAgICBsOiAnRC4gTS4gWVlZWSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW2RuZXMgb10gTFQnLFxyXG4gICAgbmV4dERheTogJ1t6YWp0cmEgb10gTFQnLFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgcmV0dXJuICdbdiBuZWRlw4TCvnUgb10gTFQnO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2XSBkZGRkIFtvXSBMVCc7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgcmV0dXJuICdbdiBzdHJlZHUgb10gTFQnO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHJldHVybiAnW3ZvIMOFwqF0dnJ0b2sgb10gTFQnO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiAnW3YgcGlhdG9rIG9dIExUJztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2IHNvYm90dSBvXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsYXN0RGF5OiAnW3bDhMKNZXJhIG9dIExUJyxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCuiBuZWRlw4TCvnUgb10gTFQnO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwr1dIGRkZGQgW29dIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwrogc3RyZWR1IG9dIExUJztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K9XSBkZGRkIFtvXSBMVCc7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IHNvYm90dSBvXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ28gJXMnLFxyXG4gICAgcGFzdDogJ3ByZWQgJXMnLFxyXG4gICAgczogdHJhbnNsYXRlLFxyXG4gICAgc3M6IHRyYW5zbGF0ZSxcclxuICAgIG06IHRyYW5zbGF0ZSxcclxuICAgIG1tOiB0cmFuc2xhdGUsXHJcbiAgICBoOiB0cmFuc2xhdGUsXHJcbiAgICBoaDogdHJhbnNsYXRlLFxyXG4gICAgZDogdHJhbnNsYXRlLFxyXG4gICAgZGQ6IHRyYW5zbGF0ZSxcclxuICAgIE06IHRyYW5zbGF0ZSxcclxuICAgIE1NOiB0cmFuc2xhdGUsXHJcbiAgICB5OiB0cmFuc2xhdGUsXHJcbiAgICB5eTogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWw6ICclZC4nLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZXZWVrIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLXdlZWsnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogU2xvdmVuaWFuIFtzbF1cclxuLy8hIGF1dGhvciA6IG1paGFuIDogaHR0cHM6Ly9naXRodWIuY29tL21paGFuXHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUmVsYXRpdmVUaW1lKG51bWJlcjogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIHZhciByZXN1bHQgPSBudW1iZXIgKyAnICc7XHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICduZWthaiBzZWt1bmQnIDogJ25la2FqIHNla3VuZGFtaSc7XHJcbiAgICBjYXNlICdzcyc6XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCA/ICdzZWt1bmRvJyA6ICdzZWt1bmRpJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmRpJyA6ICdzZWt1bmRhaCc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3Nla3VuZGUnIDogJ3Nla3VuZGFoJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmQnIDogJ3Nla3VuZCc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIGNhc2UgJ20nOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdlbmEgbWludXRhJyA6ICdlbm8gbWludXRvJztcclxuICAgIGNhc2UgJ21tJzpcclxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ21pbnV0YScgOiAnbWludXRvJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtaW51dGknIDogJ21pbnV0YW1hJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRlJyA6ICdtaW51dGFtaSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXQnIDogJ21pbnV0YW1pJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgY2FzZSAnaCc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2VuYSB1cmEnIDogJ2VubyB1cm8nO1xyXG4gICAgY2FzZSAnaGgnOlxyXG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAndXJhJyA6ICd1cm8nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ3VyaScgOiAndXJhbWEnO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cmUnIDogJ3VyYW1pJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cicgOiAndXJhbWknO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICBjYXNlICdkJzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW4gZGFuJyA6ICdlbmltIGRuZW0nO1xyXG4gICAgY2FzZSAnZGQnOlxyXG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZGFuJyA6ICdkbmVtJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkbmknIDogJ2RuZXZvbWEnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RuaScgOiAnZG5ldmknO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICBjYXNlICdNJzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW4gbWVzZWMnIDogJ2VuaW0gbWVzZWNlbSc7XHJcbiAgICBjYXNlICdNTSc6XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlYycgOiAnbWVzZWNlbSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNhJyA6ICdtZXNlY2VtYSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjZScgOiAnbWVzZWNpJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2V2JyA6ICdtZXNlY2knO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICBjYXNlICd5JzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZW5vIGxldG8nIDogJ2VuaW0gbGV0b20nO1xyXG4gICAgY2FzZSAneXknOlxyXG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbGV0bycgOiAnbGV0b20nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldGknIDogJ2xldG9tYSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldGEnIDogJ2xldGknO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldCcgOiAnbGV0aSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzbExvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnc2wnLFxyXG4gIG1vbnRoczogJ2phbnVhcl9mZWJydWFyX21hcmVjX2FwcmlsX21hal9qdW5pal9qdWxpal9hdmd1c3Rfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdqYW4uX2ZlYi5fbWFyLl9hcHIuX21hai5fanVuLl9qdWwuX2F2Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnbmVkZWxqYV9wb25lZGVsamVrX3RvcmVrX3NyZWRhX8OEwo1ldHJ0ZWtfcGV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICduZWQuX3Bvbi5fdG9yLl9zcmUuX8OEwo1ldC5fcGV0Ll9zb2IuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnbmVfcG9fdG9fc3Jfw4TCjWVfcGVfc28nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQuTU0uWVlZWScsXHJcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tkYW5lcyBvYl0gTFQnLFxyXG4gICAgbmV4dERheTogJ1tqdXRyaSBvYl0gTFQnLFxyXG5cclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2XSBbbmVkZWxqb10gW29iXSBMVCc7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgcmV0dXJuICdbdl0gW3NyZWRvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2XSBbc29ib3RvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2XSBkZGRkIFtvYl0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYWogb2JdIExUJyxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qb10gW25lZGVsam9dIFtvYl0gTFQnO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmpvXSBbc3JlZG9dIFtvYl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW3ByZWrDhcKhbmpvXSBbc29ib3RvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qaV0gZGRkZCBbb2JdIExUJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnw4TCjWV6ICVzJyxcclxuICAgIHBhc3Q6ICdwcmVkICVzJyxcclxuICAgIHM6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBzczogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIG06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBtbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBoaDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBNTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBTd2VkaXNoIFtzdl1cclxuLy8hIGF1dGhvciA6IEplbnMgQWxtIDogaHR0cHM6Ly9naXRodWIuY29tL3VsbXVzXHJcblxyXG5leHBvcnQgY29uc3Qgc3ZMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3N2JyxcclxuICBtb250aHM6ICdqYW51YXJpX2ZlYnJ1YXJpX21hcnNfYXByaWxfbWFqX2p1bmlfanVsaV9hdWd1c3RpX3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnamFuX2ZlYl9tYXJfYXByX21hal9qdW5fanVsX2F1Z19zZXBfb2t0X25vdl9kZWMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICdzw4PCtm5kYWdfbcODwqVuZGFnX3Rpc2RhZ19vbnNkYWdfdG9yc2RhZ19mcmVkYWdfbMODwrZyZGFnJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdzw4PCtm5fbcODwqVuX3Rpc19vbnNfdG9yX2ZyZV9sw4PCtnInLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdzw4PCtl9tw4PCpV90aV9vbl90b19mcl9sw4PCticuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnWVlZWS1NTS1ERCcsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIFtrbC5dIEhIOm1tJyxcclxuICAgIGxsbDogJ0QgTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgbGxsbDogJ2RkZCBEIE1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbSWRhZ10gTFQnLFxyXG4gICAgbmV4dERheTogJ1tJbW9yZ29uXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW0lnw4PCpXJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnW1DDg8KlXSBkZGRkIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW0ldIGRkZGRbc10gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdvbSAlcycsXHJcbiAgICBwYXN0OiAnZsODwrZyICVzIHNlZGFuJyxcclxuICAgIHM6ICduw4PCpWdyYSBzZWt1bmRlcicsXHJcbiAgICBzczogJyVkIHNla3VuZGVyJyxcclxuICAgIG06ICdlbiBtaW51dCcsXHJcbiAgICBtbTogJyVkIG1pbnV0ZXInLFxyXG4gICAgaDogJ2VuIHRpbW1lJyxcclxuICAgIGhoOiAnJWQgdGltbWFyJyxcclxuICAgIGQ6ICdlbiBkYWcnLFxyXG4gICAgZGQ6ICclZCBkYWdhcicsXHJcbiAgICBNOiAnZW4gbcODwqVuYWQnLFxyXG4gICAgTU06ICclZCBtw4PCpW5hZGVyJyxcclxuICAgIHk6ICdldHQgw4PCpXInLFxyXG4gICAgeXk6ICclZCDDg8KlcidcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlfGEpLyxcclxuICBvcmRpbmFsKF9udW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XHJcbiAgICBsZXQgYiA9IG51bSAlIDEwLFxyXG4gICAgICBvdXRwdXQgPSAofn4obnVtICUgMTAwIC8gMTApID09PSAxKSA/ICdlJyA6XHJcbiAgICAgICAgKGIgPT09IDEpID8gJ2EnIDpcclxuICAgICAgICAgIChiID09PSAyKSA/ICdhJyA6XHJcbiAgICAgICAgICAgIChiID09PSAzKSA/ICdlJyA6ICdlJztcclxuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG4vLyBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8gbG9jYWxlIDogVGhhaSBbdGhdXHJcbi8vIGF1dGhvciA6IFdhdGNoYXJhcG9sIFNhbml0d29uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS90dW1pdFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRoTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICd0aCcsXHJcbiAgbW9udGhzOiAnw6DCuMKhw6DCuMKBw6DCuMKjw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCgcOgwrjCuMOgwrjCocOgwrjCoMOgwrjCssOgwrjCnsOgwrjCscOgwrjCmcOgwrjCmMOgwrnCjF/DoMK4wqHDoMK4wrXDoMK4wpnDoMK4wrLDoMK4woTDoMK4wqFfw6DCucKAw6DCuMKhw6DCuMKpw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjCnsOgwrjCpMOgwrjCqcOgwrjCoMOgwrjCssOgwrjChMOgwrjCoV/DoMK4wqHDoMK4wrTDoMK4wpbDoMK4wrjDoMK4wpnDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKBw6DCuMKjw6DCuMKBw6DCuMKOw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCqsOgwrjCtMOgwrjCh8OgwrjCq8OgwrjCssOgwrjChMOgwrjCoV/DoMK4woHDoMK4wrHDoMK4wpnDoMK4wqLDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKVw6DCuMK4w6DCuMKlw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrjCnsOgwrjCpMOgwrjCqMOgwrjCiMOgwrjCtMOgwrjCgcOgwrjCssOgwrjCosOgwrjCmV/DoMK4wpjDoMK4wrHDoMK4wpnDoMK4wqfDoMK4wrLDoMK4woTDoMK4wqEnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICfDoMK4wqEuw6DCuMKELl/DoMK4woEuw6DCuMKeLl/DoMK4wqHDoMK4wrUuw6DCuMKELl/DoMK5woDDoMK4wqEuw6DCuMKiLl/DoMK4wp4uw6DCuMKELl/DoMK4wqHDoMK4wrQuw6DCuMKiLl/DoMK4woEuw6DCuMKELl/DoMK4wqouw6DCuMKELl/DoMK4woEuw6DCuMKiLl/DoMK4wpUuw6DCuMKELl/DoMK4wp4uw6DCuMKiLl/DoMK4wpguw6DCuMKELicuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnw6DCuMKtw6DCuMKyw6DCuMKXw6DCuMK0w6DCuMKVw6DCuMKiw6DCucKMX8OgwrjCiMOgwrjCscOgwrjCmcOgwrjCl8OgwrjCo8OgwrnCjF/DoMK4wq3DoMK4wrHDoMK4wofDoMK4woTDoMK4wrLDoMK4wqNfw6DCuMKew6DCuMK4w6DCuMKYX8OgwrjCnsOgwrjCpMOgwrjCq8OgwrjCscOgwrjCqsOgwrjCmsOgwrjClMOgwrjCtV/DoMK4wqjDoMK4wrjDoMK4woHDoMK4wqPDoMK5woxfw6DCucKAw6DCuMKqw6DCuMKyw6DCuMKjw6DCucKMJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfDoMK4wq3DoMK4wrLDoMK4wpfDoMK4wrTDoMK4wpXDoMK4wqLDoMK5woxfw6DCuMKIw6DCuMKxw6DCuMKZw6DCuMKXw6DCuMKjw6DCucKMX8OgwrjCrcOgwrjCscOgwrjCh8OgwrjChMOgwrjCssOgwrjCo1/DoMK4wp7DoMK4wrjDoMK4wphfw6DCuMKew6DCuMKkw6DCuMKrw6DCuMKxw6DCuMKqX8OgwrjCqMOgwrjCuMOgwrjCgcOgwrjCo8OgwrnCjF/DoMK5woDDoMK4wqrDoMK4wrLDoMK4wqPDoMK5wownLnNwbGl0KCdfJyksIC8vIHllcywgdGhyZWUgY2hhcmFjdGVycyBkaWZmZXJlbmNlXHJcbiAgd2Vla2RheXNNaW46ICfDoMK4wq3DoMK4wrIuX8OgwrjCiC5fw6DCuMKtLl/DoMK4wp4uX8OgwrjCnsOgwrjCpC5fw6DCuMKoLl/DoMK4wqouJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrIgSDptbScsXHJcbiAgICBMTExMOiAnw6DCuMKnw6DCuMKxw6DCuMKZZGRkZMOgwrjCl8OgwrjCtcOgwrnCiCBEIE1NTU0gWVlZWSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrIgSDptbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/DoMK4woHDoMK5wojDoMK4wq3DoMK4wpnDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wod8w6DCuMKrw6DCuMKlw6DCuMKxw6DCuMKHw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHLyxcclxuICBpc1BNKGlucHV0KSB7XHJcbiAgICByZXR1cm4gaW5wdXQgPT09ICfDoMK4wqvDoMK4wqXDoMK4wrHDoMK4wofDoMK5woDDoMK4wpfDoMK4wrXDoMK5wojDoMK4wqLDoMK4wocnO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHJldHVybiAnw6DCuMKBw6DCucKIw6DCuMKtw6DCuMKZw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnw6DCuMKrw6DCuMKlw6DCuMKxw6DCuMKHw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW8OgwrjCp8OgwrjCscOgwrjCmcOgwrjCmcOgwrjCtcOgwrnCiSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcclxuICAgIG5leHREYXk6ICdbw6DCuMKew6DCuMKjw6DCuMK4w6DCucKIw6DCuMKHw6DCuMKZw6DCuMK1w6DCucKJIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkW8OgwrjCq8OgwrjCmcOgwrnCicOgwrjCsiDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcclxuICAgIGxhc3REYXk6ICdbw6DCucKAw6DCuMKhw6DCuMK3w6DCucKIw6DCuMKtw6DCuMKnw6DCuMKyw6DCuMKZw6DCuMKZw6DCuMK1w6DCucKJIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbw6DCuMKnw6DCuMKxw6DCuMKZXWRkZGRbw6DCuMKXw6DCuMK1w6DCucKIw6DCucKBw6DCuMKlw6DCucKJw6DCuMKnIMOgwrnCgMOgwrjCp8OgwrjCpcOgwrjCsl0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICfDoMK4wq3DoMK4wrXDoMK4woEgJXMnLFxyXG4gICAgcGFzdDogJyVzw6DCuMKXw6DCuMK1w6DCucKIw6DCucKBw6DCuMKlw6DCucKJw6DCuMKnJyxcclxuICAgIHM6ICfDoMK5woTDoMK4wqHDoMK5wojDoMK4woHDoMK4wrXDoMK5wojDoMK4wqfDoMK4wrTDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxyXG4gICAgc3M6ICclZCDDoMK4wqfDoMK4wrTDoMK4wpnDoMK4wrLDoMK4wpfDoMK4wrUnLFxyXG4gICAgbTogJzEgw6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcclxuICAgIG1tOiAnJWQgw6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcclxuICAgIGg6ICcxIMOgwrjCisOgwrjCscOgwrnCiMOgwrjCp8OgwrnCgsOgwrjCocOgwrjChycsXHJcbiAgICBoaDogJyVkIMOgwrjCisOgwrjCscOgwrnCiMOgwrjCp8OgwrnCgsOgwrjCocOgwrjChycsXHJcbiAgICBkOiAnMSDDoMK4wqfDoMK4wrHDoMK4wpknLFxyXG4gICAgZGQ6ICclZCDDoMK4wqfDoMK4wrHDoMK4wpknLFxyXG4gICAgTTogJzEgw6DCucKAw6DCuMKUw6DCuMK3w6DCuMKtw6DCuMKZJyxcclxuICAgIE1NOiAnJWQgw6DCucKAw6DCuMKUw6DCuMK3w6DCuMKtw6DCuMKZJyxcclxuICAgIHk6ICcxIMOgwrjCm8OgwrjCtScsXHJcbiAgICB5eTogJyVkIMOgwrjCm8OgwrjCtSdcclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFR1cmtpc2ggW3RyXVxyXG4vLyEgYXV0aG9ycyA6IEVyaGFuIEd1bmRvZ2FuIDogaHR0cHM6Ly9naXRodWIuY29tL2VyaGFuZ3VuZG9nYW4sXHJcbi8vISAgICAgICAgICAgQnVyYWsgWWnDhMKfaXQgS2F5YTogaHR0cHM6Ly9naXRodWIuY29tL0JZS1xyXG5cclxubGV0IHN1ZmZpeGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge1xyXG4gIDE6ICdcXCdpbmNpJyxcclxuICA1OiAnXFwnaW5jaScsXHJcbiAgODogJ1xcJ2luY2knLFxyXG4gIDcwOiAnXFwnaW5jaScsXHJcbiAgODA6ICdcXCdpbmNpJyxcclxuICAyOiAnXFwnbmNpJyxcclxuICA3OiAnXFwnbmNpJyxcclxuICAyMDogJ1xcJ25jaScsXHJcbiAgNTA6ICdcXCduY2knLFxyXG4gIDM6ICdcXCfDg8K8bmPDg8K8JyxcclxuICA0OiAnXFwnw4PCvG5jw4PCvCcsXHJcbiAgMTAwOiAnXFwnw4PCvG5jw4PCvCcsXHJcbiAgNjogJ1xcJ25jw4TCsScsXHJcbiAgOTogJ1xcJ3VuY3UnLFxyXG4gIDEwOiAnXFwndW5jdScsXHJcbiAgMzA6ICdcXCd1bmN1JyxcclxuICA2MDogJ1xcJ8OEwrFuY8OEwrEnLFxyXG4gIDkwOiAnXFwnw4TCsW5jw4TCsSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB0ckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAndHInLFxyXG4gIG1vbnRoczogJ09jYWtfw4XCnnViYXRfTWFydF9OaXNhbl9NYXnDhMKxc19IYXppcmFuX1RlbW11el9Bw4TCn3VzdG9zX0V5bMODwrxsX0VraW1fS2Fzw4TCsW1fQXJhbMOEwrFrJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnT2NhX8OFwp51Yl9NYXJfTmlzX01heV9IYXpfVGVtX0HDhMKfdV9FeWxfRWtpX0thc19BcmEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICdQYXphcl9QYXphcnRlc2lfU2Fsw4TCsV/Dg8KHYXLDhcKfYW1iYV9QZXLDhcKfZW1iZV9DdW1hX0N1bWFydGVzaScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnUGF6X1B0c19TYWxfw4PCh2FyX1Blcl9DdW1fQ3RzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnUHpfUHRfU2Ffw4PCh2FfUGVfQ3VfQ3QnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tidWfDg8K8biBzYWF0XSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW3lhcsOEwrFuIHNhYXRdIExUJyxcclxuICAgIG5leHRXZWVrOiAnW2dlbGVjZWtdIGRkZGQgW3NhYXRdIExUJyxcclxuICAgIGxhc3REYXk6ICdbZMODwrxuXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1tnZcODwqdlbl0gZGRkZCBbc2FhdF0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICclcyBzb25yYScsXHJcbiAgICBwYXN0OiAnJXMgw4PCtm5jZScsXHJcbiAgICBzOiAnYmlya2HDg8KnIHNhbml5ZScsXHJcbiAgICBzczogJyVkIHNhbml5ZScsXHJcbiAgICBtOiAnYmlyIGRha2lrYScsXHJcbiAgICBtbTogJyVkIGRha2lrYScsXHJcbiAgICBoOiAnYmlyIHNhYXQnLFxyXG4gICAgaGg6ICclZCBzYWF0JyxcclxuICAgIGQ6ICdiaXIgZ8ODwrxuJyxcclxuICAgIGRkOiAnJWQgZ8ODwrxuJyxcclxuICAgIE06ICdiaXIgYXknLFxyXG4gICAgTU06ICclZCBheScsXHJcbiAgICB5OiAnYmlyIHnDhMKxbCcsXHJcbiAgICB5eTogJyVkIHnDhMKxbCdcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfScoaW5jaXxuY2l8w4PCvG5jw4PCvHxuY8OEwrF8dW5jdXzDhMKxbmPDhMKxKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgaWYgKG51bSA9PT0gMCkgeyAgLy8gc3BlY2lhbCBjYXNlIGZvciB6ZXJvXHJcbiAgICAgIHJldHVybiBudW0gKyAnXFwnw4TCsW5jw4TCsSc7XHJcbiAgICB9XHJcbiAgICBsZXQgYSA9IG51bSAlIDEwLFxyXG4gICAgICBiID0gbnVtICUgMTAwIC0gYSxcclxuICAgICAgYyA9IG51bSA+PSAxMDAgPyAxMDAgOiBudWxsO1xyXG4gICAgcmV0dXJuIG51bSArIChzdWZmaXhlc1thXSB8fCBzdWZmaXhlc1tiXSB8fCBzdWZmaXhlc1tjXSk7XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXBhcmFtZXRlci1yZWFzc2lnbm1lbnQgcHJlZmVyLXN3aXRjaFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogQ2hpbmVzZSAoQ2hpbmEpIFt6aC1jbl1cclxuLy8hIGF1dGhvciA6IHN1dXBpYyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdXVwaWNcclxuLy8hIGF1dGhvciA6IFplbm8gWmVuZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS96ZW5vemVuZ1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoQ25Mb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3poLWNuJyxcclxuICBtb250aHM6ICfDpMK4woDDpsKcwohfw6TCusKMw6bCnMKIX8OkwrjCicOmwpzCiF/DpcKbwpvDpsKcwohfw6TCusKUw6bCnMKIX8OlwoXCrcOmwpzCiF/DpMK4woPDpsKcwohfw6XChcKrw6bCnMKIX8OkwrnCncOmwpzCiF/DpcKNwoHDpsKcwohfw6XCjcKBw6TCuMKAw6bCnMKIX8Olwo3CgcOkwrrCjMOmwpzCiCcuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJzHDpsKcwohfMsOmwpzCiF8zw6bCnMKIXzTDpsKcwohfNcOmwpzCiF82w6bCnMKIXzfDpsKcwohfOMOmwpzCiF85w6bCnMKIXzEww6bCnMKIXzExw6bCnMKIXzEyw6bCnMKIJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnw6bCmMKfw6bCnMKfw6bCl8KlX8OmwpjCn8OmwpzCn8OkwrjCgF/DpsKYwp/DpsKcwp/DpMK6woxfw6bCmMKfw6bCnMKfw6TCuMKJX8OmwpjCn8OmwpzCn8OlwpvCm1/DpsKYwp/DpsKcwp/DpMK6wpRfw6bCmMKfw6bCnMKfw6XChcKtJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfDpcKRwqjDpsKXwqVfw6XCkcKow6TCuMKAX8OlwpHCqMOkwrrCjF/DpcKRwqjDpMK4wolfw6XCkcKow6XCm8KbX8OlwpHCqMOkwrrClF/DpcKRwqjDpcKFwq0nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICfDpsKXwqVfw6TCuMKAX8OkwrrCjF/DpMK4wolfw6XCm8KbX8OkwrrClF/DpcKFwq0nLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ1lZWVkvTU0vREQnLFxyXG4gICAgTEw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUnLFxyXG4gICAgTExMOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlQWjDp8KCwrltbcOlwojChicsXHJcbiAgICBMTExMOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlZGRkZEFow6fCgsK5bW3DpcKIwoYnLFxyXG4gICAgbDogJ1lZWVkvTS9EJyxcclxuICAgIGxsOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcclxuICAgIGxsbDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpSBISDptbScsXHJcbiAgICBsbGxsOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlZGRkZCBISDptbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/DpcKHwozDpsKZwqh8w6bCl8Kpw6TCuMKKfMOkwrjCisOlwo3CiHzDpMK4wq3DpcKNwoh8w6TCuMKLw6XCjcKIfMOmwpnCmsOkwrjCii8sXHJcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XHJcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcclxuICAgICAgaG91ciA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVyaWRpZW0gPT09ICfDpcKHwozDpsKZwqgnIHx8IG1lcmlkaWVtID09PSAnw6bCl8Kpw6TCuMKKJyB8fFxyXG4gICAgICBtZXJpZGllbSA9PT0gJ8OkwrjCisOlwo3CiCcpIHtcclxuICAgICAgcmV0dXJuIGhvdXI7XHJcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnw6TCuMKLw6XCjcKIJyB8fCBtZXJpZGllbSA9PT0gJ8OmwpnCmsOkwrjCiicpIHtcclxuICAgICAgcmV0dXJuIGhvdXIgKyAxMjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vICfDpMK4wq3DpcKNwognXHJcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcclxuICAgIH1cclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgbGV0IGhtID0gaG91ciAqIDEwMCArIG1pbnV0ZTtcclxuICAgIGlmIChobSA8IDYwMCkge1xyXG4gICAgICByZXR1cm4gJ8OlwofCjMOmwpnCqCc7XHJcbiAgICB9IGVsc2UgaWYgKGhtIDwgOTAwKSB7XHJcbiAgICAgIHJldHVybiAnw6bCl8Kpw6TCuMKKJztcclxuICAgIH0gZWxzZSBpZiAoaG0gPCAxMTMwKSB7XHJcbiAgICAgIHJldHVybiAnw6TCuMKKw6XCjcKIJztcclxuICAgIH0gZWxzZSBpZiAoaG0gPCAxMjMwKSB7XHJcbiAgICAgIHJldHVybiAnw6TCuMKtw6XCjcKIJztcclxuICAgIH0gZWxzZSBpZiAoaG0gPCAxODAwKSB7XHJcbiAgICAgIHJldHVybiAnw6TCuMKLw6XCjcKIJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnw6bCmcKaw6TCuMKKJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW8OkwrvCisOlwqTCqV1MVCcsXHJcbiAgICBuZXh0RGF5OiAnW8OmwpjCjsOlwqTCqV1MVCcsXHJcbiAgICBuZXh0V2VlazogJ1vDpMK4wotdZGRkZExUJyxcclxuICAgIGxhc3REYXk6ICdbw6bCmMKow6XCpMKpXUxUJyxcclxuICAgIGxhc3RXZWVrOiAnW8OkwrjCil1kZGRkTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KMOmwpfCpXzDpsKcwoh8w6XCkcKoKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZCkge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnw6bCl8KlJztcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICfDpsKcwognO1xyXG4gICAgICBjYXNlICd3JzpcclxuICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICfDpcKRwqgnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnJXPDpcKGwoUnLFxyXG4gICAgcGFzdDogJyVzw6XCicKNJyxcclxuICAgIHM6ICfDpcKHwqDDp8KnwpInLFxyXG4gICAgc3M6ICclZCDDp8KnwpInLFxyXG4gICAgbTogJzEgw6XCiMKGw6nCksKfJyxcclxuICAgIG1tOiAnJWQgw6XCiMKGw6nCksKfJyxcclxuICAgIGg6ICcxIMOlwrDCj8OmwpfCticsXHJcbiAgICBoaDogJyVkIMOlwrDCj8OmwpfCticsXHJcbiAgICBkOiAnMSDDpcKkwqknLFxyXG4gICAgZGQ6ICclZCDDpcKkwqknLFxyXG4gICAgTTogJzEgw6TCuMKqw6bCnMKIJyxcclxuICAgIE1NOiAnJWQgw6TCuMKqw6bCnMKIJyxcclxuICAgIHk6ICcxIMOlwrnCtCcsXHJcbiAgICB5eTogJyVkIMOlwrnCtCdcclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIC8vIEdCL1QgNzQwOC0xOTk0w6PCgMKKw6bClcKww6bCjcKuw6XChcKDw6XCksKMw6TCusKkw6bCjcKiw6bCoMK8w6XCvMKPw4LCt8Okwr/CocOmwoHCr8OkwrrCpMOmwo3CosOCwrfDpsKXwqXDpsKcwp/DpcKSwozDpsKXwrbDqcKXwrTDqMKhwqjDp8KkwrrDpsKzwpXDo8KAwovDpMK4wo5JU08gODYwMToxOTg4w6fCrcKJw6bClcKIXHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiZGF5c0luTW9udGgiLCJtb250aHMiLCJtb250aHNTaG9ydCIsIm1vbnRoc1Nob3J0RG90IiwibW9udGhzUGFyc2UiLCJtb250aHNSZWdleCIsInRyYW5zbGF0ZSIsInN5bWJvbE1hcCIsIm51bWJlck1hcCIsIm1vbnRoc1Nob3J0V2l0aERvdHMiLCJtb250aHNTaG9ydFdpdGhvdXREb3RzIiwicGx1cmFsIiwicmVsYXRpdmVUaW1lV2l0aFBsdXJhbCIsInByb2Nlc3NSZWxhdGl2ZVRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLGFBQW9CLENBQVMsRUFBRSxDQUFTO0lBQ3RDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDeEI7Ozs7O0FBRUQsa0JBQXlCLEdBQVc7SUFDbEMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDeEQ7Ozs7OztBQ1JEOzs7O0FBRUEsa0JBQXlCLEdBQVE7SUFDL0IsT0FBTyxPQUFPLEdBQUcsS0FBSyxRQUFRLENBQUM7Q0FDaEM7Ozs7O0FBRUQsZ0JBQXVCLEtBQVU7SUFDL0IsT0FBTyxLQUFLLFlBQVksSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxlQUFlLENBQUM7Q0FDM0Y7Ozs7O0FBTUQscUJBQTRCLElBQVU7SUFDcEMsT0FBTyxJ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SUFBSSxDQUFDO1FBRVQscUJBQUksQ0FBQyxDQUFDO1FBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBRXZCLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN2QyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlDOzs7UUFHRCxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0IsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDNUM7UUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksTUFBTSxDQUFDLE9BQUssV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7OztJQUd4RSxxQ0FBb0I7Ozs7UUFDMUIscUJBQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNyQixxQkFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLHFCQUFNLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDdEIscUJBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUV2QixxQkFBSSxDQUFDLENBQUM7UUFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7O1lBR3RCLHFCQUFNLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3RFLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BDLHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDckIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZCLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkIsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCOzs7UUFHRCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMzQixXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RCLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0MsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlDO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMvQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUU3QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBSyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUUsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksTUFBTSxDQUFDLE9BQUssV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7aUJBL3RCaEY7SUFpdUJDLENBQUE7QUEvbkJEOzs7OztBQWlvQkEsbUJBQW1CLENBQVMsRUFBRSxDQUFTO0lBQ3JDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO0NBQzVCOzs7Ozs7QUNydUJELEFBQU8scUJBQU0sZUFBZSxHQUFHO0lBQzdCLE9BQU8sRUFBRSxlQUFlO0lBQ3hCLE9BQU8sRUFBRSxrQkFBa0I7SUFDM0IsUUFBUSxFQUFFLGNBQWM7SUFDeEIsT0FBTyxFQUFFLG1CQUFtQjtJQUM1QixRQUFRLEVBQUUscUJBQXFCO0lBQy9CLFFBQVEsRUFBRSxHQUFHO0NBQ2QsQ0FBQzs7Ozs7O0FDUEYsQUFXTyxxQkFBTSxrQkFBa0IsR0FBRyxjQUFjLENBQUM7QUFFakQsQUFBTyxxQkFBTSxpQkFBaUIsR0FBRztJQUMvQixHQUFHLEVBQUUsQ0FBQzs7SUFDTixHQUFHLEVBQUUsQ0FBQztDQUNQLENBQUM7QUFFRixBQUFPLHFCQUFNLDBCQUEwQixHQUFHLGVBQWUsQ0FBQztBQUUxRCxBQUFPLHFCQUFNLG1CQUFtQixHQUE0QjtJQUMxRCxNQUFNLEVBQUcsT0FBTztJQUNoQixJQUFJLEVBQUssUUFBUTtJQUNqQixDQUFDLEVBQUksZUFBZTtJQUNwQixFQUFFLEVBQUcsWUFBWTtJQUNqQixDQUFDLEVBQUksVUFBVTtJQUNmLEVBQUUsRUFBRyxZQUFZO0lBQ2pCLENBQUMsRUFBSSxTQUFTO0lBQ2QsRUFBRSxFQUFHLFVBQVU7SUFDZixDQUFDLEVBQUksT0FBTztJQUNaLEVBQUUsRUFBRyxTQUFTO0lBQ2QsQ0FBQyxFQUFJLFNBQVM7SUFDZCxFQUFFLEVBQUcsV0FBVztJQUNoQixDQUFDLEVBQUksUUFBUTtJQUNiLEVBQUUsRUFBRyxVQUFVO0NBQ2hCLENBQUM7QUFFRixBQUFPLHFCQUFNLFVBQVUsR0FBZTtJQUNwQyxRQUFRLEVBQUUsZUFBZTtJQUN6QixjQUFjLEVBQUUscUJBQXFCO0lBQ3JDLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0IsT0FBTyxFQUFFLGNBQWM7SUFDdkIsc0JBQXNCLEVBQUUsNkJBQTZCO0lBQ3JELFlBQVksRUFBRSxtQkFBbUI7SUFFakMsTUFBTSxFQUFFLG1CQUFtQjtJQUMzQixXQUFXLEVBQUUsd0JBQXdCO0lBRXJDLElBQUksRUFBRSxpQkFBaUI7SUFFdkIsUUFBUSxFQUFFLHFCQUFxQjtJQUMvQixXQUFXLEVBQUUsd0JBQXdCO0lBQ3JDLGFBQWEsRUFBRSwwQkFBMEI7SUFFekMsYUFBYSxFQUFFLDBCQUEwQjtDQUMxQyxDQUFDOzs7Ozs7QUN0REY7Ozs7Ozs7QUFFQSx1QkFBaUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxXQUFvQjtJQUM3RSxxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxxQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QscUJBQUksQ0FBQyxDQUFDO0lBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDeEIsSUFBSSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVELEtBQUssRUFBRSxDQUFDO1NBQ1Q7S0FDRjtJQUVELE9BQU8sS0FBSyxHQUFHLFVBQVUsQ0FBQztDQUMzQjs7Ozs7O0FDaEJEOzs7QUFlQTtJQUNFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDOUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQ0YsQ0FBQztJQUVGLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVO1FBQ2pCLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQzthQUNwQixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDakIsQ0FDRixDQUFDOztJQUlGLFlBQVksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUIsWUFBWSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFTN0IsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QixhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXZDLGlCQUFpQixDQUNmLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQ3RCLFVBQVMsS0FBYSxFQUFFLElBQWlCLEVBQUUsTUFBeUIsRUFBRSxLQUFhO1FBQ2pGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QyxPQUFPLE1BQU0sQ0FBQztLQUNmLENBQ0YsQ0FBQzs7Ozs7Q0FNSDs7Ozs7OztBQVFELGlCQUF3QixJQUFVLEVBQUUsTUFBb0IsRUFBRSxLQUFlO0lBQXJDLHVCQUFBLEVBQUEsU0FBUyxTQUFTLEVBQUU7SUFDdEQsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztDQUNqQzs7Ozs7O0FBYUQsb0JBQTJCLElBQVUsRUFBRSxLQUFlO0lBQ3BELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztDQUMzQzs7Ozs7O0FDckZEOzs7QUFtQkE7SUFDRSxjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3pDLFVBQVUsSUFBVSxFQUFFLElBQTBCOztRQUU5QyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDO0tBQzFELENBQ0YsQ0FBQztJQUVGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDekMsVUFBVSxJQUFVOztRQUVsQixPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztLQUNoRCxDQUNGLENBQUM7SUFFRixzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUNyRCxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN0RCxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUN4RCxzQkFBc0IsQ0FBQyxPQUFPLEVBQUUsdUJBQXVCLENBQUMsQ0FBQzs7SUFJekQsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQVVsQyxhQUFhLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsYUFBYSxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsYUFBYSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsYUFBYSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDekMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFFMUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFDbEQsVUFBVSxLQUFLLEVBQUUsSUFBaUIsRUFBRSxNQUFNLEVBQUUsS0FBSztRQUMvQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEMsT0FBTyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7SUFFTCxpQkFBaUIsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxVQUFVLEtBQUssRUFBRSxJQUFpQixFQUFFLE1BQU0sRUFBRSxLQUFLO1FBQy9FLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV2QyxPQUFPLE1BQU0sQ0FBQztLQUNmLENBQUMsQ0FBQztDQUNKOzs7Ozs7QUFFRCxnQ0FBZ0MsS0FBYSxFQUFFLE1BQXVCO0lBQ3BFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDbEU7Ozs7OztBQUVELDhCQUE4QixJQUFVLEVBQUUsSUFBMEI7SUFDbEUsT0FBTyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUNsRDs7Ozs7QUFFRCxpQ0FBaUMsSUFBVTtJQUN6QyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztDQUN4Qzs7Ozs7OztBQWdCRCxxQkFBNEIsSUFBVSxFQUFFLE1BQW9CLEVBQUUsS0FBZTtJQUFyQyx1QkFBQSxFQUFBLFNBQVMsU0FBUyxFQUFFO0lBQzFELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztDQUN2Rjs7Ozs7O0FBTUQsd0JBQStCLElBQVUsRUFBRSxLQUFlO0lBQ3hELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztDQUMzQzs7Ozs7O0FDL0dEOzs7QUFLQTs7SUFFRSxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzVCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0tBQ2hDLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDN0IsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxJQUFJLENBQUMsS0FBSyxHQUFHLDRCQUE0QixHQUFHLEVBQUUsQ0FBQztLQUN2RCxDQUNGLENBQUM7Q0FDSDs7Ozs7O0FDakJEOzs7QUFTQTs7SUFHRSxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBUyxJQUFVO1FBQ2pELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQzthQUNkLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQixDQUFDLENBQUM7SUFDSCxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBUyxJQUFVO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE9BQU8sRUFBRTthQUNsQixRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDakIsQ0FBQyxDQUFDOztJQUlILGFBQWEsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDaEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztJQUVuQyxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDcEYsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFL0MsT0FBTyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDcEYsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuQyxPQUFPLE1BQU0sQ0FBQztLQUNmLENBQUMsQ0FBQztDQUNKOzs7Ozs7QUNwQ0Q7OztBQVVBOztJQUdFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDaEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQ0YsQ0FBQzs7SUFJRixZQUFZLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQVE1QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNwQzs7Ozs7O0FDakNEOzs7QUFhQTs7SUFHRSxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzVCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2hDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQixDQUNGLENBQUM7O0lBSUYsWUFBWSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFRN0IsYUFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQixhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDcEYsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFdEMsT0FBTyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7Q0FDSjs7Ozs7O0FBSUQsb0JBQTJCLElBQVUsRUFBRSxLQUFhO0lBQWIsc0JBQUEsRUFBQSxhQUFhO0lBQ2xELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ25EOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0JELDhCQUE4QixLQUFhLEVBQUUsU0FBaUI7SUFDNUQsY0FBYyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsSUFBVSxFQUFFLE1BQU07UUFDNUQscUJBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDaEYscUJBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNkLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUNqQixJQUFJLEdBQUcsR0FBRyxDQUFDO1NBQ1o7UUFFRCxPQUFPLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDdkYsQ0FBQyxDQUFDO0NBQ0o7Ozs7QUFFRDtJQUNFLG9CQUFvQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMvQixvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7O0lBSS9CLGFBQWEsQ0FBQyxHQUFHLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUNyQyxhQUFhLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDNUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4RCxPQUFPLE1BQU0sQ0FBQztLQUNmLENBQUMsQ0FBQztDQUNKOzs7OztBQU9ELHFCQUFNLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQzs7Ozs7O0FBRXRDLDBCQUEwQixPQUFlLEVBQUUsR0FBVztJQUNwRCxxQkFBTSxPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUUzQyxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7UUFDcEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELHFCQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQyxxQkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDMUQscUJBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5RCxxQkFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUM7SUFFbkQsT0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7Q0FDakM7Ozs7Ozs7QUFHRCx5QkFBZ0MsS0FBVyxFQUFFLElBQVUsRUFDdkIsTUFBOEI7SUFBOUIsdUJBQUEsRUFBQSxXQUE4QjtJQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNsQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQscUJBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7SUFFNUIscUJBQU0sVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDO0lBQ2pELHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxDQUFDLE9BQU8sRUFBRSxHQUFHLFVBQVUsQ0FBQzs7SUFFMUQsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7OztJQUlsQyxPQUFPLEdBQUcsQ0FBQztDQUNaOzs7OztBQUVELHVCQUE4QixJQUFVOzs7SUFHdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDO0NBQ3hEOzs7Ozs7QUFzQkQsc0JBQTZCLElBQVUsRUFBRSxNQUE4QjtJQUE5Qix1QkFBQSxFQUFBLFdBQThCO0lBQ3JFLHFCQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztJQUVwQyxPQUFPLE1BQU0sQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN0RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEhEOzs7QUFVQTs7SUFHRSxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3hDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2hDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQixDQUNGLENBQUM7O0lBSUYsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFRNUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QixhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDcEM7Ozs7Ozs7OztBQ2xCRDtJQUNFLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxDQUFDLENBQUMsRUFBRSxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkUsQ0FDRixDQUFDO0lBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN6QyxVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxPQUFPLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsRSxDQUNGLENBQUM7SUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQzFDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDekQsQ0FDRixDQUFDO0lBQ0YsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUMzQyxVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUM5RCxDQUNGLENBQUM7SUFDRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQzVDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQy9ELENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDN0MsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDaEUsQ0FDRixDQUFDO0lBQ0YsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUM5QyxVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqRSxDQUNGLENBQUM7SUFDRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQy9DLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xFLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDaEQsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkUsQ0FDRixDQUFDOztJQUtGLFlBQVksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBUWxDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXhDLHFCQUFJLEtBQUssQ0FBQztJQUNWLEtBQUssS0FBSyxHQUFHLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFO1FBQ3BELGFBQWEsQ0FBQyxLQUFLLEVBQUUsYUFBYSxDQUFDLENBQUM7S0FDckM7Ozs7Ozs7SUFFRCxpQkFBaUIsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDekUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBSyxLQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUU1RCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsS0FBSyxLQUFLLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEVBQUU7UUFDakQsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUMvQjs7Q0FFRjs7Ozs7O0FDOUZEOzs7QUFlQTs7Ozs7O0lBR0UsaUJBQWlCLElBQVUsRUFBRSxLQUFjO1FBQ3pDLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0tBQ3pDOzs7Ozs7SUFFRCxpQkFBaUIsSUFBVSxFQUFFLEtBQWM7UUFDekMsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNwQztJQUVELGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDOUIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDN0IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDeEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDN0IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQ0YsQ0FBQztJQUVGLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDOUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MscUJBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLHFCQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFdEQsT0FBTyxLQUFHLEVBQUUsR0FBRyxHQUFLLENBQUM7S0FDdEIsQ0FDRixDQUFDO0lBRUYsY0FBYyxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUNoQyxVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxxQkFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMscUJBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN0RCxxQkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRELE9BQU8sS0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEdBQUssQ0FBQztLQUM1QixDQUNGLENBQUM7SUFFRixjQUFjLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzlCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLHFCQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxxQkFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXRELE9BQU8sS0FBRyxFQUFFLEdBQUcsR0FBSyxDQUFDO0tBQ3RCLENBQ0YsQ0FBQztJQUVGLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDaEMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MscUJBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLHFCQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEQscUJBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUV0RCxPQUFPLEtBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFLLENBQUM7S0FDNUIsQ0FDRixDQUFDOzs7Ozs7SUFFRixrQkFBa0IsS0FBYSxFQUFFLFNBQWtCO1FBQ2pELGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDOUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7WUFDN0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNsRyxDQUNGLENBQUM7S0FDSDtJQUVELFFBQVEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEIsUUFBUSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQzs7SUFJckIsWUFBWSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQzs7Ozs7O0lBUTFCLHVCQUF1QixRQUFpQixFQUFFLE1BQWM7UUFDdEQsT0FBTyxNQUFNLENBQUMsY0FBYyxDQUFDO0tBQzlCO0lBRUQsYUFBYSxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNsQyxhQUFhLENBQUMsR0FBRyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ2xDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUIsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXZDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEMsYUFBYSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUNsQyxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2hDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFbEMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLGFBQWEsQ0FDWCxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsRUFDWCxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1FBQ2pFLHFCQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sS0FBSyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUV6QyxPQUFPLE1BQU0sQ0FBQztLQUNmLENBQ0YsQ0FBQztJQUNGLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1FBQzNGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFekIsT0FBTyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtRQUM1RixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXZDLE9BQU8sTUFBTSxDQUFDO0tBQ2YsQ0FBQyxDQUFDO0lBQ0gsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1FBQ3RGLHFCQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFdkMsT0FBTyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDeEYscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXZDLE9BQU8sTUFBTSxDQUFDO0tBQ2YsQ0FBQyxDQUFDO0lBQ0gsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1FBQ3RGLHFCQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFekMsT0FBTyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsT0FBTyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDeEYscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQzlCLHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDM0MsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRTFDLE9BQU8sTUFBTSxDQUFDO0tBQ2YsQ0FBQyxDQUFDO0NBRUo7Ozs7OztBQ2xMRCxBQXFCQSxxQkFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQztBQUM5QyxxQkFBTSxjQUFjLEdBQTRELEVBQUUsQ0FBQztBQUNuRixxQkFBSSxZQUFvQixDQUFDOzs7OztBQUV6Qix5QkFBeUIsR0FBVztJQUNsQyxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Q0FDeEQ7Ozs7O0FBTUQsc0JBQXNCLEtBQWU7SUFDbkMscUJBQUksSUFBSSxDQUFDO0lBQ1QscUJBQUksTUFBTSxDQUFDO0lBQ1gscUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUVWLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDdkIscUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQscUJBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDWixNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksTUFBTSxFQUFFO2dCQUNWLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7WUFDRCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFOztnQkFFekUsTUFBTTthQUNQO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUNELENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7Ozs7QUFFRCxzQkFBNkIsWUFBd0IsRUFDeEIsV0FBdUI7SUFDbEQscUJBQU0sR0FBRyxHQUFlLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRXhELEtBQUsscUJBQU0sU0FBUyxJQUFJLFdBQVcsRUFBRTtRQUNuQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsRUFBRTtZQUN2QyxTQUFTO1NBQ1Y7UUFDRCxJQUFJLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUU7WUFDekUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN2RDthQUFNLElBQUksV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN6QyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QscUJBQUksVUFBVSxDQUFDO0lBQ2YsS0FBSyxVQUFVLElBQUksWUFBWSxFQUFFO1FBQy9CLElBQ0UsVUFBVSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7WUFDcEMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUNwQyxRQUFRLENBQUMsWUFBWSxtQkFBQyxVQUE4QixFQUFDLENBQ3ZELEVBQUU7O1lBRUEsR0FBRyxtQkFBQyxVQUE4QixFQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsR0FBRyxtQkFBQyxVQUE4QixFQUFDLENBQUMsQ0FBQztTQUM5RjtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7Q0FDWjs7Ozs7QUFHRCxvQkFBb0IsSUFBWTs7Ozs7Ozs7Ozs7OztJQWE5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztRQUVsQixPQUFPLENBQUMsS0FBSyxDQUFDLGdEQUE2QyxJQUFJLHVCQUFtQixDQUFDLENBQUM7O0tBRXJGO0lBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDdEI7Ozs7OztBQUtELDRCQUFtQyxHQUF1QixFQUFFLE1BQW1CO0lBQzdFLHFCQUFJLElBQVksQ0FBQztJQUVqQixJQUFJLEdBQUcsRUFBRTtRQUNQLElBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZCLElBQUksR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDdkI7YUFBTSxJQUFJLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNsQztRQUVELElBQUksSUFBSSxFQUFFO1lBQ1IsWUFBWSxHQUFHLElBQUksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxZQUFZLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQztDQUMzQzs7Ozs7O0FBRUQsc0JBQTZCLElBQVksRUFBRSxNQUFtQjtJQUM1RCxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7O1FBRW5CLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPO0tBQ1I7SUFFRCxxQkFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLElBQUksTUFBTSxDQUFDLFlBQVksSUFBSSxJQUFJLEVBQUU7UUFDL0IsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUN4QyxZQUFZLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUM7U0FDckQ7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUN4QyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUMxQztZQUNELGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1lBRTNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUVELE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFL0QsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDeEIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDdEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNKOzs7O0lBS0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHekIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDdEI7Ozs7OztBQUVELHNCQUE2QixJQUFZLEVBQUUsTUFBbUI7SUFDNUQscUJBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUVyQixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7UUFDbkIscUJBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQzs7UUFFOUIscUJBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxJQUFJLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDckIsWUFBWSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUM7U0FDbEM7UUFDRCxPQUFPLEdBQUcsWUFBWSxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5QyxxQkFBTSxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbkMsTUFBTSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQzs7UUFHdkIsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDMUI7U0FBTTs7UUFFTCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDekIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDNUM7aUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNoQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN0QjtTQUNGO0tBQ0Y7SUFFRCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN0Qjs7Ozs7QUFHRCxtQkFBMEIsR0FBdUI7SUFDL0MsZ0JBQWdCLEVBQUUsQ0FBQztJQUVuQixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTyxZQUFZLENBQUM7S0FDckI7O0lBRUQscUJBQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV4QyxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUMzQjs7OztBQUVEO0lBQ0UsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzdCOzs7O0FBRUQ7SUFDRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUVqQixPQUFPLFNBQVMsQ0FBQztLQUNsQjtJQUVELGtCQUFrQixDQUFDLElBQUksRUFBRTtRQUN2QixzQkFBc0IsRUFBRSxzQkFBc0I7UUFDOUMsT0FBTzs7OztRQUFQLFVBQVEsR0FBVztZQUNqQixxQkFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNuQixxQkFBTSxNQUFNLEdBQ1YsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDO2tCQUN6QixJQUFJO2tCQUNKLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUU5RCxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7U0FDckI7S0FDRixDQUFDLENBQUM7SUFFSCxRQUFRLEVBQUUsQ0FBQztJQUNYLFlBQVksRUFBRSxDQUFDO0lBQ2YsUUFBUSxFQUFFLENBQUM7SUFDWCxZQUFZLEVBQUUsQ0FBQztJQUNmLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsV0FBVyxFQUFFLENBQUM7SUFDZCxVQUFVLEVBQUUsQ0FBQztJQUNiLFNBQVMsRUFBRSxDQUFDO0lBQ1osVUFBVSxFQUFFLENBQUM7SUFDYixlQUFlLEVBQUUsQ0FBQztJQUNsQixRQUFRLEVBQUUsQ0FBQztJQUNYLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGNBQWMsRUFBRSxDQUFDO0NBQ2xCOzs7Ozs7QUN6UUQsQUFLQSxxQkFBTSxRQUFRLEdBQXlCLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUM3RixVQUFDLEdBQStCLEVBQUUsS0FBSztJQUMxRSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRWxCLE9BQU8sR0FBRyxDQUFDO0NBQ1o7QUFKRCxxQkFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FJakMsRUFBRSxDQUFDLENBQUM7Ozs7O0FBRVAseUJBQWdDLFFBQTZCO0lBQzNELHFCQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLElBQUksWUFBWTtTQUNYLElBQUksQ0FBQyxVQUFDLEdBQXFCO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLElBQUksWUFBWTtlQUN0QixRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSTtlQUN0QixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDM0IsQ0FBQyxFQUFFO1FBQ04sT0FBTyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBT0QscUJBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztJQUMzQixLQUFLLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDeEMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O1lBRXpCLElBQUksY0FBYyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxRCxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0Y7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7Ozs7Ozs7QUMxQ0QsaUJBQXlCLE1BQWM7SUFDckMsT0FBTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUM1RDs7Ozs7O0FDREQ7Ozs7QUFHQSxnQkFBdUIsR0FBYTtJQUNsQyxxQkFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNyQyxxQkFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQixxQkFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN6QixxQkFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs7O0lBSXZCLElBQUksRUFBRSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQztTQUMvQyxZQUFZLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDcEQsWUFBWSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzdELElBQUksR0FBRyxDQUFDLENBQUM7UUFDVCxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ1o7OztJQUlELElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztJQUV4QyxxQkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsQ0FBQztJQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFFNUIscUJBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBRTVCLHFCQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUV4QixJQUFJLElBQUksUUFBUSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQzs7SUFHN0IscUJBQU0sY0FBYyxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNwRCxNQUFNLElBQUksY0FBYyxDQUFDO0lBQ3pCLElBQUksSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7O0lBRzlDLHFCQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLE1BQU0sSUFBSSxFQUFFLENBQUM7SUFFYixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztJQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUVsQixPQUFPLEdBQUcsQ0FBQztDQUNaOzs7OztBQUVELHNCQUE2QixHQUFXOzs7SUFHdEMsT0FBTyxHQUFHLEdBQUcsSUFBSSxHQUFHLE1BQU0sQ0FBQztDQUM1Qjs7Ozs7QUFFRCxzQkFBNkIsS0FBYTs7SUFFeEMsT0FBTyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztDQUM5Qjs7Ozs7O0FDMURELEFBSUEscUJBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7QUFDdkIscUJBQU0sVUFBVSxHQUE4QjtJQUM1QyxFQUFFLEVBQUUsRUFBRTs7SUFDTixDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRTs7SUFDTCxDQUFDLEVBQUUsRUFBRTtDQUNOLENBQUM7Ozs7Ozs7OztBQUdGLDJCQUEyQixHQUFzQixFQUFFLEdBQVcsRUFDbkMsYUFBc0IsRUFBRSxRQUFpQixFQUN6QyxNQUFjO0lBQ3ZDLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0NBQ3RFOzs7Ozs7O0FBRUQsc0JBQTZCLGNBQXdCLEVBQUUsYUFBc0IsRUFBRSxNQUFjO0lBQzNGLHFCQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEQscUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMscUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMscUJBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMscUJBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMscUJBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdEMscUJBQU0sQ0FBQyxHQUNMLE9BQU8sSUFBSSxVQUFVLE1BQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7UUFDMUMsT0FBTyxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sR0FBRyxVQUFVLEtBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7UUFDekMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQixLQUFLLEdBQUcsVUFBVSxLQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsSUFBSSxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxVQUFVLEtBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZDLHFCQUFNLENBQUMsR0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztJQUszRCxPQUFPLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkRELEFBVUEsSUFBQTtJQVFFLGtCQUFZLFFBQTZCLEVBQUUsTUFBOEI7UUFBOUIsdUJBQUEsRUFBQSxXQUE4QjtxQkFKNUMsRUFBRTt1QkFDYixTQUFTLEVBQUU7UUFJM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxTQUFTLEVBQUUsQ0FBQzs7UUFFdkQscUJBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQztRQUNqQyxxQkFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMscUJBQU0sUUFBUSxHQUFHLGVBQWUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQzlDLHFCQUFNLE1BQU0sR0FBRyxlQUFlLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUMxQyxxQkFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUM7UUFDeEMscUJBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ3RDLHFCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN6QyxxQkFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDN0MscUJBQU0sT0FBTyxHQUFHLGVBQWUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQzdDLHFCQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsUUFBUSxHQUFHLGVBQWUsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7UUFHakQsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLFlBQVk7WUFDaEMsT0FBTyxHQUFHLElBQUk7WUFDZCxPQUFPLEdBQUcsRUFBRSxHQUFHLElBQUk7O1lBQ25CLEtBQUssR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7OztRQUl6QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSTtZQUNoQixLQUFLLEdBQUcsQ0FBQyxDQUFDOzs7O1FBSVosSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLE1BQU07WUFDcEIsUUFBUSxHQUFHLENBQUM7WUFDWixLQUFLLEdBQUcsRUFBRSxDQUFDOzs7O1FBT2IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDckI7Ozs7SUFFRCwwQkFBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7S0FDdEI7Ozs7O0lBRUQsMkJBQVE7Ozs7SUFBUixVQUFTLFVBQW9COztRQUczQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQztTQUN0QztRQUVELHFCQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDakMscUJBQUksTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFckQsSUFBSSxVQUFVLEVBQUU7WUFDZCxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQzs7OztJQUVELDZCQUFVOzs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztLQUNyQjs7Ozs7SUFJRCx5QkFBTTs7OztJQUFOLFVBQU8sU0FBa0I7UUFDdkIsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRXBELE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7SUFHRCxzQkFBRzs7O0lBQUg7UUFDRSxxQkFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUV6QixxQkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV4QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQixPQUFPLElBQUksQ0FBQztLQUNiOzs7OztJQUVELHFCQUFFOzs7O0lBQUYsVUFBRyxNQUFjO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNuQixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QscUJBQUksSUFBSSxDQUFDO1FBQ1QscUJBQUksTUFBTSxDQUFDO1FBQ1gscUJBQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFFeEMscUJBQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVyQyxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUN6QyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3pDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUUzQyxPQUFPLEtBQUssS0FBSyxPQUFPLEdBQUcsTUFBTSxHQUFHLE1BQU0sR0FBRyxFQUFFLENBQUM7U0FDakQ7O1FBR0QsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDM0QsUUFBUSxLQUFLO1lBQ1gsS0FBSyxNQUFNO2dCQUNULE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDO1lBQzFDLEtBQUssS0FBSztnQkFDUixPQUFPLElBQUksR0FBRyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLEtBQUssT0FBTztnQkFDVixPQUFPLElBQUksR0FBRyxFQUFFLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QyxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxJQUFJLEdBQUcsSUFBSSxHQUFHLFlBQVksR0FBRyxHQUFHLENBQUM7WUFDMUMsS0FBSyxTQUFTO2dCQUNaLE9BQU8sSUFBSSxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDOztZQUU1QyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDO1lBQ2pEO2dCQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMsa0JBQWdCLEtBQU8sQ0FBQyxDQUFDO1NBQzVDO0tBQ0Y7Ozs7SUFFRCwwQkFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25CLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxRQUNFLElBQUksQ0FBQyxhQUFhO1lBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSztZQUNsQixDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxJQUFJLE1BQU07WUFDNUIsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsT0FBTyxFQUNsQztLQUNIO21CQXJLSDtJQXNLQyxDQUFBO0FBNUpEOzs7O0FBOEpBLG9CQUEyQixHQUFRO0lBQ2pDLE9BQU8sR0FBRyxZQUFZLFFBQVEsQ0FBQztDQUNoQzs7Ozs7O0FDektEOzs7O0FBRUEsaUJBQXdCLE1BQXlCO0lBQy9DLElBQUksTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7UUFDM0IscUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxxQkFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFTO1lBQ3RGLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQztTQUNsQixDQUFDLENBQUM7UUFDSCxxQkFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUNsQixDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ1osQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNuQixDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ3JCLENBQUMsS0FBSyxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUNoQixDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQ3BCLENBQUMsS0FBSyxDQUFDLGVBQWU7YUFDckIsQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxRQUFRLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUV2RCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsVUFBVSxHQUFHLFVBQVU7Z0JBQ3JCLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQztnQkFDekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDL0IsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7U0FDL0I7UUFFRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2RCxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztTQUM5QjthQUFNO1lBQ0wsT0FBTyxVQUFVLENBQUM7U0FDbkI7S0FDRjtJQUVELE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztDQUN4Qjs7Ozs7O0FBRUQsdUJBQThCLE1BQXlCLEVBQUUsS0FBOEI7SUFDckYsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUUzRSxPQUFPLE1BQU0sQ0FBQztDQUNmOzs7OztBQUVELHFCQUE0QixNQUF5QjtJQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUV4QixPQUFPLE1BQU0sQ0FBQztDQUNmOzs7Ozs7QUMvQ0Q7OztBQVlBLHFCQUFNLGdCQUFnQixHQUFHLGtKQUFrSixDQUFDOztBQUU1SyxxQkFBTSxhQUFhLEdBQUcsNklBQTZJLENBQUM7QUFFcEsscUJBQU0sT0FBTyxHQUFHLHVCQUF1QixDQUFDO0FBRXhDLHFCQUFNLFFBQVEsR0FBZ0M7SUFDNUMsQ0FBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxDQUFDO0lBQzdDLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQztJQUN2QyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUM7SUFDeEMsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQztJQUNwQyxDQUFDLFVBQVUsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO0lBQ2pDLENBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7SUFDaEMsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQztJQUNsQyxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDOztJQUUzQixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDO0lBQ25DLENBQUMsV0FBVyxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUM7SUFDbkMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztDQUMzQixDQUFDOztBQUdGLHFCQUFNLFFBQVEsR0FBdUI7SUFDbkMsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUM7SUFDeEMsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7SUFDdkMsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDO0lBQ3RCLENBQUMsYUFBYSxFQUFFLG1CQUFtQixDQUFDO0lBQ3BDLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDO0lBQ25DLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQztJQUMxQixDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUM7SUFDcEIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDO0NBQ2YsQ0FBQztBQUVGLHFCQUFNLGVBQWUsR0FBRyxxQkFBcUIsQ0FBQztBQUU5QyxxQkFBTSxVQUFVLEdBQThCO0lBQzVDLEVBQUUsRUFBRSxDQUFDO0lBQ0wsR0FBRyxFQUFFLENBQUM7SUFDTixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtJQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO0lBQ1osR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDWixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtJQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO0lBQ1osR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDWixHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRTtJQUNaLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFO0NBQ2IsQ0FBQzs7O0FBSUYscUJBQU0sT0FBTyxHQUFHLHlMQUF5TCxDQUFDOzs7OztBQUcxTSx1QkFBOEIsTUFBeUI7SUFDckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDeEIsT0FBTyxNQUFNLENBQUM7S0FDZjtJQUVELHFCQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3hCLHFCQUFNLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUd4RSxxQkFBSSxTQUFTLENBQUM7SUFDZCxxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxRQUFRLENBQUM7SUFFYixJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFeEIsT0FBTyxNQUFNLENBQUM7S0FDZjs7SUFHRCxxQkFBSSxDQUFDLENBQUM7SUFDTixxQkFBSSxDQUFDLENBQUM7SUFDTixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQztZQUNyQyxNQUFNO1NBQ1A7S0FDRjtJQUVELElBQUksVUFBVSxJQUFJLElBQUksRUFBRTtRQUN0QixNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUV4QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDWixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7O2dCQUVqQyxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsTUFBTTthQUNQO1NBQ0Y7UUFFRCxJQUFJLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDdEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFFeEIsT0FBTyxNQUFNLENBQUM7U0FDZjtLQUVGO0lBQ0QsSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1FBQ3BDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXhCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNaLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxQixRQUFRLEdBQUcsR0FBRyxDQUFDO1NBQ2hCO2FBQU07WUFDTCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUV4QixPQUFPLE1BQU0sQ0FBQztTQUNmO0tBQ0Y7SUFFRCxNQUFNLENBQUMsRUFBRSxHQUFHLFVBQVUsSUFBSSxVQUFVLElBQUksRUFBRSxDQUFDLElBQUksUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRS9ELE9BQU8seUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDMUM7Ozs7Ozs7Ozs7QUFHRCxtQ0FBbUMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLE9BQWUsRUFBRSxTQUFpQixFQUFFLFNBQWlCO0lBQ3pJLHFCQUFNLE1BQU0sR0FBRztRQUNiLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDdkIsd0JBQXdCLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUMxQyxRQUFRLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQztRQUNwQixRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztRQUNyQixRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztLQUN4QixDQUFDO0lBRUYsSUFBSSxTQUFTLEVBQUU7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUN0QztJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7O0FBRUQsd0JBQXdCLE9BQWU7SUFDckMscUJBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFbkMsT0FBTyxJQUFJLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ3hDOzs7OztBQUVELDJCQUEyQixHQUFXOztJQUVwQyxPQUFPLEdBQUc7U0FDUCxPQUFPLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxDQUFDO1NBQ2pDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDcEM7Ozs7Ozs7QUFFRCxzQkFBc0IsVUFBa0IsRUFBRSxXQUFzQixFQUFFLE1BQXlCO0lBQ3pGLElBQUksVUFBVSxFQUFFOztRQUVkLHFCQUFNLGVBQWUsR0FBRywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUscUJBQU0sYUFBYSxHQUFHLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEYsSUFBSSxlQUFlLEtBQUssYUFBYSxFQUFFO1lBQ3JDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBRXhCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7Ozs7QUFFRCx5QkFBeUIsU0FBaUIsRUFBRSxjQUFzQixFQUFFLFNBQWlCO0lBQ25GLElBQUksU0FBUyxFQUFFO1FBQ2IsT0FBTyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDOUI7U0FBTSxJQUFJLGNBQWMsRUFBRTs7UUFFekIsT0FBTyxDQUFDLENBQUM7S0FDVjtTQUFNO1FBQ0wscUJBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbkMscUJBQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDbkIscUJBQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUM7UUFFekIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuQjtDQUNGOzs7OztBQUdELDJCQUFrQyxNQUF5QjtJQUN6RCxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN4QixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQscUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFekQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzVCO0lBRUQscUJBQU0sV0FBVyxHQUFHLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ2hELE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxNQUFNLENBQUMsRUFBRSxHQUFHLFdBQVcsQ0FBQztJQUN4QixNQUFNLENBQUMsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTdELE1BQU0sQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRXZDLE9BQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7O0FBR0QsMEJBQWlDLE1BQXlCO0lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxxQkFBTSxPQUFPLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFaEQsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsQyxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7O0lBTUQsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLElBQUksTUFBTSxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7UUFDN0IsT0FBTyxNQUFNLENBQUMsUUFBUSxDQUFDO0tBQ3hCO1NBQU07UUFDTCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsSUFBSSxNQUFNLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtRQUM3QixPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7S0FDeEI7U0FBTTtRQUNMLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7OztJQUlELE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdQRCxvQkFBMkIsSUFBVSxFQUFFLE1BQWMsRUFBRSxNQUFlLEVBQUUsS0FBZSxFQUFFLE1BQVU7SUFBVix1QkFBQSxFQUFBLFVBQVU7SUFDakcscUJBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7SUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtRQUNaLE1BQU0sSUFBSSxLQUFLLENBQ2IsY0FBVyxNQUFNLGdFQUEwRCxDQUM1RSxDQUFDO0tBQ0g7SUFFRCxxQkFBTSxPQUFPLEdBQUcsTUFBTSxLQUFLLEtBQUssR0FBSSx3QkFBd0IsR0FBRyxzQkFBc0IsQ0FBQyxDQUFDO0lBRXZGLHFCQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRW5FLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDWCxPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ25DOzs7Ozs7Ozs7QUFHRCxzQkFBNkIsSUFBVSxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsS0FBZSxFQUFFLE1BQVU7SUFBVix1QkFBQSxFQUFBLFVBQVU7SUFDbkcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUN0QixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUM7S0FDM0I7SUFFRCxxQkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhGLE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQzdEOzs7Ozs7QUFFRCxzQkFBNkIsT0FBZSxFQUFFLE1BQWM7SUFDMUQscUJBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQixxQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YscUJBQU0scUJBQXFCLEdBQUcsNENBQTRDLENBQUM7SUFFM0UscUJBQU0sMkJBQTJCLEdBQUcsVUFBQyxLQUFVO1FBQzdDLE9BQU8sTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7S0FDOUMsQ0FBQztJQUVGLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNuRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO1FBQzVFLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNSO0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7Ozs7Ozs7OztBQzNERCxrQkFBNEIsQ0FBSyxFQUFFLENBQUssRUFBRSxDQUFLO0lBQzdDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtRQUNiLE9BQU8sQ0FBQyxDQUFDO0tBQ1Y7SUFDRCxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDYixPQUFPLENBQUMsQ0FBQztLQUNWO0lBRUQsT0FBTyxDQUFDLENBQUM7Q0FDVjs7Ozs7O0FDUkQ7Ozs7QUFRQSwwQkFBMEIsTUFBeUI7SUFDakQscUJBQU0sUUFBUSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7SUFFNUIsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQ2xCLE9BQU8sQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLEVBQUUsUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0tBQ25GO0lBRUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Q0FDMUU7Ozs7O0FBTUQseUJBQWdDLE1BQXlCO0lBQ3ZELHFCQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDakIscUJBQUksQ0FBQyxDQUFDO0lBQ04scUJBQUksSUFBSSxDQUFDO0lBQ1QscUJBQUksV0FBVyxDQUFDO0lBQ2hCLHFCQUFJLGVBQWUsQ0FBQztJQUNwQixxQkFBSSxTQUFTLENBQUM7SUFFZCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEVBQUU7UUFDYixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsV0FBVyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDOztJQUd2QyxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7UUFDcEUscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDL0I7O0lBR0QsSUFBSSxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtRQUM3QixTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFekQsSUFBSSxNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxNQUFNLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN4RSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1NBQ25EO1FBRUQsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzRCxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0QyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztLQUNyQzs7Ozs7O0lBT0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7UUFDOUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFDOztJQUdELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNqQixNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JGOztJQUdELElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3hCLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDdkIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDOUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckI7SUFFRCxNQUFNLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxhQUFhLEdBQUcsVUFBVSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDN0UsZUFBZSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDOzs7SUFJOUUsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRTtRQUN2QixNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsRTtJQUVELElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtRQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUN0Qjs7SUFHRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksT0FBTyxNQUFNLENBQUMsRUFBRSxLQUFFLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxFQUFFLFVBQU8sZUFBZSxFQUFFO1FBQ3RGLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0tBQ2hEO0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7QUFFRCwrQkFBK0IsTUFBeUI7SUFDdEQscUJBQUksQ0FBQyxtQkFBRSxRQUFRLG1CQUFFLElBQUksbUJBQUUsT0FBTyxtQkFBRSxHQUFHLG1CQUFFLEdBQUcsbUJBQUUsSUFBSSxtQkFBRSxlQUFlLENBQUM7SUFFaEUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO1FBQzlDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDUixHQUFHLEdBQUcsQ0FBQyxDQUFDOzs7OztRQU1SLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RSxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksT0FBTyxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQzlCLGVBQWUsR0FBRyxJQUFJLENBQUM7U0FDeEI7S0FDRjtTQUFNO1FBQ0wsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMvQixHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBRS9CLHFCQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFakQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDOztRQUd6RCxJQUFJLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7O1lBRWYsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxJQUFJLE9BQU8sR0FBRyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDOUIsZUFBZSxHQUFHLElBQUksQ0FBQzthQUN4QjtTQUNGO2FBQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTs7WUFFdEIsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLGVBQWUsR0FBRyxJQUFJLENBQUM7YUFDeEI7U0FDRjthQUFNOztZQUVMLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDZjtLQUNGO0lBQ0QsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRTtRQUN0RCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztLQUMvQztTQUFNLElBQUksZUFBZSxJQUFJLElBQUksRUFBRTtRQUNsQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO0tBQ2pEO1NBQU07UUFDTCxJQUFJLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDcEM7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNmOzs7Ozs7QUM3SkQ7Ozs7QUFLQSx1QkFBOEIsTUFBeUI7SUFDckQscUJBQUksUUFBUSxDQUFDO0lBQ2IscUJBQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFFcEIsSUFBSSxDQUFDLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTs7UUFFaEQsUUFBUTtZQUNOLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxLQUFLO2dCQUNuQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBR0EsYUFBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJO29CQUM1RCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSTt3QkFDcEgsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU07NEJBQ3RDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNO2dDQUN0QyxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLEdBQUcsV0FBVztvQ0FDdEQsQ0FBQyxDQUFDLENBQUM7UUFFakIsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsa0JBQWtCLEtBQUssUUFBUSxHQUFHLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDdEYsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDN0QsUUFBUSxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixJQUFJLFFBQVEsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUMvRCxRQUFRLEdBQUcsT0FBTyxDQUFDO1NBQ3BCO1FBRUQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDN0M7SUFFRCxPQUFPLE1BQU0sQ0FBQztDQUNmOzs7Ozs7QUNqQ0Q7O0FBY0EsQUFBTyxxQkFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDOzs7QUFJbkMsQUFBTyxxQkFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDOzs7OztBQUduQyxtQ0FBMEMsTUFBeUI7O0lBRWpFLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxRQUFRLEVBQUU7UUFDMUIsT0FBTyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssUUFBUSxFQUFFO1FBQzFCLE9BQU8saUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEM7SUFDRCxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNmLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBRXJDLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN6RCxPQUFPLE1BQU0sQ0FBQztLQUNmOztJQUlELHFCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2pDLHFCQUFJLHNCQUFzQixHQUFHLENBQUMsQ0FBQztJQUMvQixxQkFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztJQUNqQyxxQkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVyRixxQkFBSSxDQUFDLENBQUM7SUFDTixxQkFBSSxLQUFLLENBQUM7SUFDVixxQkFBSSxXQUFXLENBQUM7SUFDaEIscUJBQUksT0FBTyxDQUFDO0lBQ1osS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2xDLEtBQUssR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEIsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksV0FBVyxFQUFFO1lBQ2YsT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuRDtZQUNELEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JFLHNCQUFzQixJQUFJLFdBQVcsQ0FBQyxNQUFNLENBQUM7U0FDOUM7O1FBRUQsSUFBSSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvQixJQUFJLFdBQVcsRUFBRTtnQkFDZixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNsRDtZQUVELHVCQUF1QixDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDckQ7YUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDekMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEQ7S0FDRjs7SUFHRCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxHQUFHLFdBQVcsR0FBRyxzQkFBc0IsQ0FBQztJQUM3RSxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3BCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pEOztJQUdELElBQUksTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ3ZCLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLEtBQUssSUFBSTtRQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUNyQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQzFDO0lBRUQsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3RCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7O0lBRXBELE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFckYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXhCLE9BQU8sYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzlCOzs7Ozs7O0FBR0QseUJBQXlCLE1BQWMsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7SUFDdEUscUJBQUksSUFBSSxHQUFHLEtBQUssQ0FBQztJQUVqQixJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7O1FBRXBCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO1FBQy9CLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDNUM7SUFFRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFOztRQUV2QixPQUFPLElBQUksQ0FBQztLQUNiOztJQUVELHFCQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7UUFDckIsSUFBSSxJQUFJLEVBQUUsQ0FBQztLQUNaO0lBRUQsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1FBQ3hCLElBQUksR0FBRyxDQUFDLENBQUM7S0FDVjtJQUVELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7OztBQzNIRDs7OztBQUtBLGtDQUF5QyxNQUF5QjtJQUNoRSxxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxXQUFXLENBQUM7SUFDaEIscUJBQUksWUFBWSxDQUFDO0lBRWpCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUN4QyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUU3QyxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QjtJQUVELHFCQUFJLENBQUMsQ0FBQztJQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDckMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtZQUMxQixVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDckM7UUFDRCxVQUFVLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUN4QixTQUFTO1NBQ1Y7O1FBR0QsWUFBWSxJQUFJLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxhQUFhLENBQUM7O1FBRzFELFlBQVksSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFckUsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFFakQsSUFBSSxXQUFXLElBQUksSUFBSSxJQUFJLFlBQVksR0FBRyxXQUFXLEVBQUU7WUFDckQsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxVQUFVLENBQUMsQ0FBQztDQUN4RDs7Ozs7O0FDL0NEOzs7O0FBS0EsMEJBQWlDLE1BQXlCO0lBQ3hELElBQUksTUFBTSxDQUFDLEVBQUUsRUFBRTtRQUNiLE9BQU8sTUFBTSxDQUFDO0tBQ2Y7SUFFRCxxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN4QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuQixxQkFBTSxDQUFDLEdBQUcsb0JBQW9CLG1CQUFDLEtBQVksRUFBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDO2FBRWhGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBQSxDQUFDLENBQUM7S0FDeEQ7SUFFRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNoQzs7Ozs7O0FDbEJEOzs7O0FBYUEsMEJBQTBCLE1BQXlCO0lBQ2pELHFCQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBRWpELEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDdEQsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4Qjs7Ozs7OztJQVFELE9BQU8sR0FBRyxDQUFDO0NBQ1o7Ozs7O0FBRUQsdUJBQThCLE1BQXlCO0lBQ3JELHFCQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ3RCLHFCQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBRXpCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXhELElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxNQUFNLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxFQUFFLENBQUMsRUFBRTtRQUM1RCxPQUFPLGFBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNuRDtJQUVELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ25CLE1BQU0sQ0FBQyxFQUFFLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BEO0lBRUQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0IsT0FBTyxNQUFNLENBQUM7S0FDZjs7SUFJRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNuQix3QkFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNsQztTQUFNLElBQUksTUFBTSxFQUFFO1FBQ2pCLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ25DO1NBQU07UUFDTCxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDekI7SUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7QUFFRCx5QkFBeUIsTUFBeUI7SUFDaEQscUJBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDeEIsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0tBQ3hCO1NBQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDeEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDOUI7U0FBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUMxQixnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQjtTQUFNLElBQUksT0FBTyxDQUFrQixLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQzFELHFCQUFNLElBQUksR0FBd0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLEdBQUEsQ0FBQyxDQUFDO1FBQ3JFLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN6QjtTQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzFCLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFCO1NBQU0sSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7O1FBRTFCLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDN0I7U0FBTTs7UUFFTCxPQUFPLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUM5QjtJQUVELE9BQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7Ozs7OztBQUVELDBCQUFpQyxLQUFnQixFQUFFLE1BQTBCLEVBQUUsU0FBa0IsRUFBRSxNQUFnQixFQUFFLEtBQWU7SUFDbEkscUJBQU0sTUFBTSxHQUFzQixFQUFFLENBQUM7SUFDckMscUJBQUksTUFBTSxHQUFHLEtBQUssQ0FBQzs7Ozs7OztJQVNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsTUFBTSxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtRQUMzRixNQUFNLEdBQUcsU0FBUyxDQUFDO0tBQ3BCOzs7O0lBSUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN2QyxNQUFNLENBQUMsRUFBRSxHQUFHLFNBQVMsQ0FBQztJQUN0QixNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNuQixNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQztJQUNuQixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUV4QixPQUFPLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDOzs7Ozs7QUNySEQ7Ozs7Ozs7O0FBS0EsbUJBQTBCLEtBQWdCLEVBQUUsTUFBMEIsRUFDNUMsU0FBa0IsRUFBRSxNQUFnQixFQUFFLEtBQWU7SUFDN0UsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDakIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELHFCQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFekUsT0FBTyxNQUFNLENBQUMsRUFBRSxDQUFDO0NBQ2xCOzs7Ozs7Ozs7O0FDZEQsa0JBQXlCLEdBQVc7SUFDbEMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUM5RDs7Ozs7O0FDREQ7Ozs7OztBQUVBLGlCQUNFLEtBQVcsRUFDWCxLQUFXLEVBQ1gsS0FBa0M7SUFBbEMsc0JBQUEsRUFBQSxzQkFBa0M7SUFFbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUMxQztJQUVELE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Q0FDMUQ7Ozs7Ozs7QUFFRCxrQkFDRSxLQUFXLEVBQ1gsS0FBVyxFQUNYLEtBQWtDO0lBQWxDLHNCQUFBLEVBQUEsc0JBQWtDO0lBRWxDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxLQUFLLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxLQUFLLGNBQWMsRUFBRTtRQUM1QixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7S0FDMUM7SUFFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0NBQ3hEOzs7Ozs7QUFFRCx1QkFBOEIsSUFBVSxFQUFFLFlBQXNCO0lBQzlELElBQUksWUFBWSxLQUFLLFNBQVMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUU7UUFDdkUsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVcsSUFBSyxPQUFBLEdBQUcsS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUEsQ0FBQyxDQUFDO0NBQ2xFOzs7Ozs7O0FBcUJELGdCQUNFLEtBQVcsRUFDWCxLQUFXLEVBQ1gsS0FBa0M7SUFBbEMsc0JBQUEsRUFBQSxzQkFBa0M7SUFFbEMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNwQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEtBQUssY0FBYyxFQUFFO1FBQzVCLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztLQUM1QztJQUVELHFCQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFaEMsUUFDRSxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU87UUFDMUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3hDO0NBQ0g7Ozs7OztBQ2hGRCxBQWFBLHFCQUFNLFdBQVcsR0FBRywwREFBMEQsQ0FBQzs7Ozs7QUFNL0UscUJBQU0sUUFBUSxHQUFHLHFLQUFxSyxDQUFDOzs7Ozs7O0FBSXZMLHdCQUErQixLQUFxQixFQUFFLEdBQVksRUFBRSxNQUE4QjtJQUE5Qix1QkFBQSxFQUFBLFdBQThCO0lBQ2hHLHFCQUFNLFFBQVEsR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUc3QyxPQUFPLElBQUksUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUN2Qzs7Ozs7O0FBRUQseUJBQXlCLEtBQVUsRUFBRSxHQUFXOztJQUU5QyxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7UUFDakIsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3JCLE9BQU87WUFDTCxZQUFZLEVBQUUsS0FBSyxDQUFDLGFBQWE7WUFDakMsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztTQUNyQixDQUFDO0tBQ0g7SUFDRCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTs7UUFFbkIsT0FBTyxHQUFHLGFBQUssR0FBQyxHQUFHLElBQUcsS0FBSyxRQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ3pEO0lBRUQsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIscUJBQUksS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFcEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxxQkFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUV6QyxPQUFPO2dCQUNMLElBQUksRUFBRSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSTtnQkFDOUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJO2dCQUNoQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUk7Z0JBQ3BDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSTs7Z0JBRXBDLFlBQVksRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUk7YUFDdkUsQ0FBQztTQUNIO1FBRUQsS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxxQkFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRWxFLE9BQU87Z0JBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUM5QixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQy9CLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDOUIsR0FBRyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO2dCQUM3QixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztnQkFDakMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO2FBQ2xDLENBQUM7U0FDSDtLQUVGO0lBRUQsSUFBSSxRQUFRLENBQXVCLEtBQUssQ0FBQyxLQUFLLE1BQU0sSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1FBQy9FLHFCQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU5RSxPQUFPO1lBQ0wsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZO1lBQ2xDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTTtTQUN0QixDQUFDO0tBQ0g7SUFFRCxPQUFPLEtBQUssQ0FBQzs7Q0FDZDs7Ozs7O0FBS0Qsa0JBQWtCLEdBQVcsRUFBRSxJQUFZOzs7O0lBSXpDLHFCQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7O0lBR3JELE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7Q0FDdEM7Ozs7OztBQUVELG1DQUFtQyxJQUFVLEVBQUUsS0FBVztJQUN4RCxxQkFBTSxHQUFHLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUUzQyxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEQscUJBQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RCxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEVBQUU7UUFDN0IsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQ2Q7SUFFRCxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFekUsT0FBTyxHQUFHLENBQUM7Q0FDWjs7Ozs7O0FBRUQsMkJBQTJCLElBQVUsRUFBRSxLQUFXO0lBQ2hELElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ3ZDO0lBRUQscUJBQUksR0FBRyxDQUFDO0lBQ1IscUJBQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxFQUFDLENBQUMsQ0FBQztJQUNqRixJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDMUIsR0FBRyxHQUFHLHlCQUF5QixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMvQztTQUFNO1FBQ0wsR0FBRyxHQUFHLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUMxQjtJQUVELE9BQU8sR0FBRyxDQUFDO0NBQ1o7Ozs7OztBQzNJRDs7Ozs7OztBQVFBLGFBQW9CLElBQVUsRUFBRSxHQUFXLEVBQUUsTUFBa0IsRUFBRSxLQUFlO0lBQzlFLHFCQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXhDLE9BQU8sV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ3pDOzs7Ozs7OztBQUVELGtCQUF5QixJQUFVLEVBQUUsR0FBVyxFQUFFLE1BQWtCLEVBQUUsS0FBZTtJQUNuRixxQkFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV4QyxPQUFPLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7OztBQUVELHFCQUE0QixJQUFVLEVBQUUsUUFBa0IsRUFBRSxRQUFnQixFQUFFLEtBQWU7SUFDM0YscUJBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDNUMscUJBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMscUJBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7OztJQUsxQyxJQUFJLE1BQU0sRUFBRTtRQUNWLFFBQVEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLEdBQUcsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQ2xFO0lBQ0QsSUFBSSxJQUFJLEVBQUU7UUFDUixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztLQUM5RDtJQUNELElBQUksWUFBWSxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztLQUN4RDtJQUVELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDOzs7OztDQUt4Qjs7Ozs7O0FDM0NEOzs7QUFlQTs7SUFHRSxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzVCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQzVCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqQixDQUNGLENBQUM7SUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzdCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9ELENBQ0YsQ0FBQztJQUVGLGNBQWMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDOUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakUsQ0FDRixDQUFDO0lBRUYsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUMvQixVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM1RCxDQUNGLENBQUM7SUFFRixjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQzVCLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE9BQU8sa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNyRCxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7O0tBRWpCLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsT0FBTyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDckMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQ0YsQ0FBQzs7SUFJRixZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLFlBQVksQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDN0IsWUFBWSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFTaEMsYUFBYSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5QixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFOUIsYUFBYSxDQUFDLElBQUksRUFBRSxVQUFTLFFBQWlCLEVBQUUsTUFBYztRQUM1RCxPQUFPLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMxQyxDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVMsUUFBaUIsRUFBRSxNQUFjO1FBQzdELE9BQU8sTUFBTSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzVDLENBQUMsQ0FBQztJQUNILGFBQWEsQ0FBQyxNQUFNLEVBQUUsVUFBUyxRQUFpQixFQUFFLE1BQWM7UUFDOUQsT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3ZDLENBQUMsQ0FBQztJQUVILGlCQUFpQixDQUNmLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsRUFDckIsVUFBUyxLQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUF5QixFQUFFLEtBQUs7UUFDekUscUJBQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztRQUUzRSxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxRQUFLLE9BQU8sQ0FBQztTQUNsQjthQUFNO1lBQ0wsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDO1NBQ2xEO1FBRUQsT0FBTyxNQUFNLENBQUM7S0FDZixDQUNGLENBQUM7SUFFRixpQkFBaUIsQ0FDZixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQ2YsVUFBUyxLQUFhLEVBQUUsSUFBaUIsRUFBRSxNQUF5QixFQUFFLEtBQWE7UUFDakYsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixPQUFPLE1BQU0sQ0FBQztLQUNmLENBQ0YsQ0FBQztDQUNIOzs7Ozs7QUFJRCxzQkFBNkIsS0FBc0IsRUFBRSxNQUFjO0lBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDcEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELHFCQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDaEIsT0FBTyxJQUFJLENBQUM7S0FDYjtJQUVELHFCQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3RCLE9BQU8sUUFBUSxDQUFDO0tBQ2pCO0lBRUQsT0FBTyxJQUFJLENBQUM7Q0FDYjs7Ozs7O0FBRUQseUJBQWdDLEtBQXNCLEVBQUUsTUFBNEI7SUFBNUIsdUJBQUEsRUFBQSxTQUFpQixTQUFTLEVBQUU7SUFDbEYsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkIsT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDN0M7SUFFRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQztDQUN2RDs7Ozs7Ozs7QUFZRCxzQkFBNkIsSUFBVSxFQUFFLEtBQWEsRUFBRSxNQUFvQixFQUFFLEtBQWU7SUFBckMsdUJBQUEsRUFBQSxTQUFTLFNBQVMsRUFBRTtJQUMxRSxxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxxQkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUUzQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUN2Qzs7Ozs7O0FBRUQsc0JBQTZCLElBQVUsRUFBRSxLQUFlO0lBQ3RELE9BQU8sTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztDQUM1Qjs7Ozs7Ozs7QUFNRCw0QkFBbUMsSUFBVSxFQUFFLE1BQW9CLEVBQUUsS0FBZTtJQUFyQyx1QkFBQSxFQUFBLFNBQVMsU0FBUyxFQUFFO0lBQ2pFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ2hFOzs7Ozs7O0FBRUQsNEJBQW1DLElBQVUsRUFBRSxLQUFhLEVBQUUsSUFBK0M7SUFBL0MscUJBQUEsRUFBQSxTQUErQztJQUMzRyxxQkFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWxFLE9BQU8sR0FBRyxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQzFDOzs7Ozs7QUFJRCx5QkFBZ0MsSUFBVSxFQUFFLEtBQWU7SUFDekQsT0FBTyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUNqQzs7Ozs7OztBQUVELHlCQUFnQyxJQUFVLEVBQUUsS0FBc0IsRUFBRSxJQUE4QjtJQUE5QixxQkFBQSxFQUFBLFNBQThCOzs7O0lBS2hHLHFCQUFNLE9BQU8sR0FBRyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVwRCxPQUFPLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQzNFOzs7Ozs7Ozs7Ozs7QUNqTEQscUJBQU0sU0FBUyxHQUE0QjtJQUN6QyxDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztDQUNQLENBQUM7QUFDRixxQkFBTSxTQUFTLEdBQTRCO0lBQ3pDLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0NBQ1QsQ0FBQztBQUNGLHFCQUFNLFVBQVUsR0FBRyxVQUFVLEdBQVc7SUFDdEMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN4SCxDQUFDO0FBQ0YscUJBQU0sT0FBTyxHQUFnRjtJQUMzRixDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsYUFBYSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQzdGLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7SUFDOUYsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVksRUFBRSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztJQUN4RixDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsVUFBVSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDO0lBQ2xGLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUM7SUFDakYsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQztDQUNwRixDQUFDO0FBQ0YscUJBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBUztJQUNuQyxPQUFPLFVBQVUsR0FBVyxFQUFFLGFBQXNCO1FBQ2xELHFCQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIscUJBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxHQUFHLEdBQUcsR0FBRyxDQUFDLGFBQWEsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLG1CQUFDLEdBQWEsR0FBRSxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0tBQ3ZELENBQUM7Q0FDSCxDQUFDO0FBQ0YscUJBQU0sTUFBTSxHQUFhO0lBQ3ZCLE9BQU87SUFDUCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxNQUFNO0lBQ04sT0FBTztJQUNQLE9BQU87SUFDUCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFFBQVE7SUFDUixRQUFRO0lBQ1IsUUFBUTtDQUNULENBQUM7QUFFRixxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLFFBQUE7SUFDTixXQUFXLEVBQUUsTUFBTTtJQUNuQixRQUFRLEVBQUUscURBQXFELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxhQUFhLEVBQUUsdUNBQXVDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqRSxXQUFXLEVBQUUsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLHNCQUFzQjtRQUN6QixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx3QkFBd0I7S0FDL0I7SUFDRCxhQUFhLEVBQUUsS0FBSztJQUNwQixJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE9BQU8sR0FBRyxLQUFLLEtBQUssQ0FBQztLQUN0QjtJQUNELFFBQVE7Ozs7OztjQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM1QixJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLEdBQUcsQ0FBQztTQUNaO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQztTQUNaO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLE9BQU8sRUFBRSxzQkFBc0I7UUFDL0IsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxRQUFRO1FBQ2QsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7UUFDakIsRUFBRSxFQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUM7S0FDbkI7SUFDRCxRQUFROzs7O0lBQVIsVUFBUyxHQUFXO1FBQ2xCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLO1lBQ2pELE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3ZCO0lBQ0QsVUFBVTs7OztjQUFDLEdBQVc7UUFDcEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQUs7WUFDdkMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDdkI7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsRUFBRTtLQUNSO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RHLFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pFLFFBQVEsRUFBRSx3REFBd0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsSUFBSSxFQUFFLHdCQUF3QjtLQUMvQjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxVQUFVLENBQU07WUFFeEIsUUFBUSxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixPQUFPLDRCQUE0QixDQUFDO2dCQUN0QyxLQUFLLENBQUMsQ0FBQztnQkFDUCxLQUFLLENBQUMsQ0FBQztnQkFDUCxLQUFLLENBQUMsQ0FBQztnQkFDUCxLQUFLLENBQUM7b0JBQ0osT0FBTywyQkFBMkIsQ0FBQzthQUN0QztTQUNGO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxVQUFVO1FBQ2hCLENBQUMsRUFBRSxpQkFBaUI7UUFDcEIsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxRQUFRO1FBQ1osQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFdBQVc7S0FDaEI7SUFDRCxzQkFBc0IsRUFBRSw2QkFBNkI7SUFDckQsT0FBTyxFQUFFLFVBQVUsSUFBWTtRQUU3QixxQkFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLHFCQUFJLFNBQVMsR0FBRyxNQUFNLEdBQUcsRUFBRTtRQUN6QixXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUU3QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEIsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxXQUFXLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE9BQU8sTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNLElBQUksV0FBVyxHQUFHLEVBQUUsSUFBSSxXQUFXLEdBQUcsRUFBRSxFQUFFO1lBQy9DLE9BQU8sTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QjthQUFNLElBQUksU0FBUyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTSxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxTQUFTLEtBQUssQ0FBQyxJQUFJLFNBQVMsS0FBSyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDdkI7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7O0FDcEZELHFCQUFJLGNBQWMsR0FBRyw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQzNGLFdBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFN0UscUJBQUksV0FBVyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUMvSCxxQkFBSSxXQUFXLEdBQUcsMktBQTJLLENBQUM7QUFFOUwscUJBQWEsUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLG1GQUFtRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEcsV0FBVzs7Ozs7O0lBQVgsVUFBWSxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO1FBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU8sY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM5QztJQUNELFdBQVcsYUFBQTtJQUNYLGdCQUFnQixFQUFFLFdBQVc7SUFDN0IsaUJBQWlCLEVBQUUsdUZBQXVGO0lBQzFHLHNCQUFzQixFQUFFLHlGQUF5RjtJQUNqSCxXQUFXLGFBQUE7SUFDWCxlQUFlLEVBQUUsV0FBVztJQUM1QixnQkFBZ0IsRUFBRSxXQUFXO0lBQzdCLFFBQVEsRUFBRSw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xGLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixHQUFHLEVBQUUsNEJBQTRCO1FBQ2pDLElBQUksRUFBRSxrQ0FBa0M7S0FDekM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPOzs7O2tCQUFDLElBQVU7WUFDaEIsT0FBTyxVQUFVLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQzNFO1FBQ0QsT0FBTzs7OztrQkFBQyxJQUFVO1lBQ2hCLE9BQU8sVUFBVSxJQUFJLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUMzRTtRQUNELFFBQVE7Ozs7a0JBQUMsSUFBVTtZQUNqQixPQUFPLFVBQVUsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDM0U7UUFDRCxPQUFPOzs7O2tCQUFDLElBQVU7WUFDaEIsT0FBTyxVQUFVLElBQUksSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQzNFO1FBQ0QsUUFBUTs7OztrQkFBQyxJQUFVO1lBQ2pCLE9BQU8sYUFBYSxJQUFJLGFBQWEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsY0FBYyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNoRztRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxPQUFPO1FBQ2IsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSx3QkFBd0I7SUFDaEQsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLHFCQUFNLE1BQU0sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRztZQUMxQixDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUM1QixDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRztvQkFDZixDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNoQyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDckI7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0Y7Ozs7Ozs7OztBQ3RGRCxxQkFBTUMsUUFBTSxHQUFhLG1GQUFtRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN4SCxxQkFBTUMsYUFBVyxHQUFhLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7QUFFM0YsZ0JBQWdCLEdBQVc7SUFDekIsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDdkQ7Ozs7Ozs7O0FBRUQsbUJBQW1CLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUNwRixxQkFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUV6QixRQUFRLEdBQUc7UUFDVCxLQUFLLEdBQUc7O1lBQ04sT0FBTyxDQUFDLGFBQWEsSUFBSSxRQUFRLElBQUksWUFBWSxHQUFHLGVBQWUsQ0FBQztRQUN0RSxLQUFLLElBQUk7O1lBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO2dCQUM3QixPQUFPLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLE9BQU8sTUFBTSxHQUFHLFdBQVcsQ0FBQzthQUM3Qjs7UUFFSCxLQUFLLEdBQUc7O1lBQ04sT0FBTyxhQUFhLEdBQUcsUUFBUSxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDdEUsS0FBSyxJQUFJOztZQUNQLElBQUksYUFBYSxJQUFJLFFBQVEsRUFBRTtnQkFDN0IsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQzthQUNwRDtpQkFBTTtnQkFDTCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUM7YUFDNUI7O1FBRUgsS0FBSyxHQUFHOztZQUNOLE9BQU8sYUFBYSxHQUFHLFFBQVEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUM7YUFDcEQ7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDO2FBQzVCOztRQUVILEtBQUssR0FBRzs7WUFDTixPQUFPLENBQUMsYUFBYSxJQUFJLFFBQVEsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDO1FBQ3RELEtBQUssSUFBSTs7WUFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDL0M7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCOztRQUVILEtBQUssR0FBRzs7WUFDTixPQUFPLENBQUMsYUFBYSxJQUFJLFFBQVEsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDO1FBQzNELEtBQUssSUFBSTs7WUFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDckQ7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLEdBQUcsUUFBUSxDQUFDO2FBQzFCOztRQUVILEtBQUssR0FBRzs7WUFDTixPQUFPLENBQUMsYUFBYSxJQUFJLFFBQVEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3ZELEtBQUssSUFBSTs7WUFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUM7YUFDaEQ7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLEdBQUcsTUFBTSxDQUFDO2FBQ3hCO0tBRUo7Q0FDRjtBQUVELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sVUFBQTtJQUNOLFdBQVcsZUFBQTtJQUNYLFdBQVcsR0FBRyxVQUFVLE1BQU0sRUFBRSxXQUFXO1FBQ3pDLHFCQUFJLENBQUMsbUJBQUUsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN6QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFFdkIsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7U0FDbkY7UUFDRCxPQUFPLFlBQVksQ0FBQztLQUNyQixDQUFDRCxRQUFNLEVBQUVDLGFBQVcsQ0FBQyxDQUFDO0lBQ3ZCLGdCQUFnQixHQUFHLFVBQVUsV0FBVztRQUN0QyxxQkFBSSxDQUFDLG1CQUFFLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztRQUM5QixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QixpQkFBaUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNwRTtRQUNELE9BQU8saUJBQWlCLENBQUM7S0FDMUIsQ0FBQ0EsYUFBVyxDQUFDLENBQUM7SUFDZixlQUFlLEdBQUcsVUFBVSxNQUFNO1FBQ2hDLHFCQUFJLENBQUMsbUJBQUUsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztLQUN6QixDQUFDRCxRQUFNLENBQUMsQ0FBQztJQUNWLFFBQVEsRUFBRSxrREFBa0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZFLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsSUFBSSxFQUFFLHdCQUF3QjtRQUM5QixDQUFDLEVBQUUsWUFBWTtLQUNoQjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVE7Ozs7UUFBUixVQUFTLElBQVU7WUFDakIsUUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN4QixLQUFLLENBQUM7b0JBQ0osT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDO29CQUNKLE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCLEtBQUssQ0FBQztvQkFDSixPQUFPLGtCQUFrQixDQUFDO2dCQUM1QixLQUFLLENBQUM7b0JBQ0osT0FBTyxtQkFBbUIsQ0FBQztnQkFDN0IsS0FBSyxDQUFDO29CQUNKLE9BQU8sZ0JBQWdCLENBQUM7Z0JBQzFCLEtBQUssQ0FBQztvQkFDSixPQUFPLGlCQUFpQixDQUFDO2FBQzVCO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFROzs7O1FBQVIsVUFBUyxJQUFVO1lBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO29CQUNKLE9BQU8sdUJBQXVCLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixPQUFPLHNCQUFzQixDQUFDO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osT0FBTyx1QkFBdUIsQ0FBQztnQkFDakMsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDO29CQUNKLE9BQU8sc0JBQXNCLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQztvQkFDSixPQUFPLHVCQUF1QixDQUFDO2FBQ2xDO1NBQ0Y7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7OztBQzNLRCxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUcscUZBQXFGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RyxXQUFXLEVBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUcsb0RBQW9ELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxhQUFhLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxjQUFjLEVBQUc7UUFDYixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxjQUFjO1FBQ25CLEdBQUcsRUFBRyxvQkFBb0I7UUFDMUIsSUFBSSxFQUFHLG9DQUFvQztLQUM5QztJQUNELFFBQVEsRUFBRztRQUNQLE9BQU8sRUFBRyxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFHLG1CQUFtQjtRQUM3QixRQUFRLEVBQUcsa0JBQWtCO1FBQzdCLE9BQU8sRUFBRyxnQkFBZ0I7UUFDMUIsUUFBUSxFQUFHLG9CQUFvQjtRQUMvQixRQUFRLEVBQUcsR0FBRztLQUNqQjtJQUNELFlBQVksRUFBRztRQUNYLE1BQU0sRUFBRyxPQUFPO1FBQ2hCLElBQUksRUFBRyxVQUFVO1FBQ2pCLENBQUMsRUFBRyxhQUFhO1FBQ2pCLENBQUMsRUFBRyxVQUFVO1FBQ2QsRUFBRSxFQUFHLGFBQWE7UUFDbEIsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxRQUFRO1FBQ1osRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsVUFBVTtRQUNkLEVBQUUsRUFBRyxZQUFZO1FBQ2pCLENBQUMsRUFBRyxPQUFPO1FBQ1gsRUFBRSxFQUFHLE9BQU87S0FDZjtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFHLEtBQUs7SUFDZixJQUFJLEVBQUc7UUFDSCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNWO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDRCw2QkFBNkIsR0FBVyxFQUFFLGFBQXNCLEVBQUUsR0FBVyxFQUFFLFFBQWlCO0lBQzlGLHFCQUFNLE1BQU0sR0FBd0M7UUFDbEQsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztRQUNwQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO1FBQ3BDLEdBQUcsRUFBRSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUM7UUFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7UUFDakMsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLFNBQVMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUM7UUFDL0IsSUFBSSxFQUFFLENBQUMsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDO0tBQ3hDLENBQUM7SUFDRixPQUFPLGFBQWEsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3hEO0FBRUQscUJBQWEsUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLG9GQUFvRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkcsV0FBVyxFQUFFLDREQUE0RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDcEYsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixRQUFRLEVBQUUsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNsRixhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEdBQUcsRUFBRSxvQkFBb0I7UUFDekIsSUFBSSxFQUFFLDBCQUEwQjtLQUNqQztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxxQkFBcUI7UUFDOUIsUUFBUSxFQUFFLEdBQUc7UUFDYixPQUFPLEVBQUUsc0JBQXNCO1FBQy9CLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsT0FBTyxFQUFFLHVCQUF1QjtRQUNoQyxRQUFRLEVBQUUsOEJBQThCO0tBQ3pDO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixDQUFDLEVBQUUsbUJBQW1CO1FBQ3RCLEVBQUUsRUFBRSxtQkFBbUI7UUFDdkIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsbUJBQW1CO0tBQ3hCO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7Ozs7OztBQ2hFRCxxQkFBYSxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUcsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMzRyxXQUFXLEVBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUcsMERBQTBELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRixhQUFhLEVBQUcsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxXQUFXLEVBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMvQyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7UUFDekIsSUFBSSxFQUFHLHlCQUF5QjtLQUNqQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxrQkFBa0I7UUFDNUIsUUFBUSxFQUFHLGNBQWM7UUFDekIsT0FBTyxFQUFHLG1CQUFtQjtRQUM3QixRQUFRLEVBQUcscUJBQXFCO1FBQ2hDLFFBQVEsRUFBRyxHQUFHO0tBQ2Y7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsT0FBTztRQUNoQixJQUFJLEVBQUcsUUFBUTtRQUNmLENBQUMsRUFBRyxlQUFlO1FBQ25CLEVBQUUsRUFBRyxZQUFZO1FBQ2pCLENBQUMsRUFBRyxVQUFVO1FBQ2QsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxPQUFPO1FBQ1gsRUFBRSxFQUFHLFNBQVM7UUFDZCxDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLENBQUMsRUFBRyxRQUFRO1FBQ1osRUFBRSxFQUFHLFVBQVU7S0FDaEI7SUFDRCxzQkFBc0IsRUFBRSxzQkFBc0I7SUFDOUMsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLHFCQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUNoQixNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSTtZQUN4QyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSTtnQkFDZCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSTtvQkFDZCxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQyxPQUFPLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDckI7SUFDRCxJQUFJLEVBQUc7UUFDTCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNSO0NBQ0Y7Ozs7Ozs7O0FDckRELHFCQUFJRSxnQkFBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDM0ZELGFBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFN0UscUJBQUlFLGFBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gscUJBQUlDLGFBQVcsR0FBRyxrTEFBa0wsQ0FBQztBQUVyTSxxQkFBYSxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsMEZBQTBGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RyxXQUFXOzs7Ozs7SUFBWCxVQUFZLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtRQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBT0YsZ0JBQWMsQ0FBQztTQUN2QjthQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixPQUFPRCxhQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNDO2FBQU07WUFDTCxPQUFPQyxnQkFBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUM5QztLQUNGO0lBQ0QsV0FBVyxlQUFBO0lBQ1gsZ0JBQWdCLEVBQUVFLGFBQVc7SUFDN0IsaUJBQWlCLEVBQUUsOEZBQThGO0lBQ2pILHNCQUFzQixFQUFFLHlGQUF5RjtJQUNqSCxXQUFXLGVBQUE7SUFDWCxlQUFlLEVBQUVELGFBQVc7SUFDNUIsZ0JBQWdCLEVBQUVBLGFBQVc7SUFDN0IsUUFBUSxFQUFFLHNEQUFzRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0UsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsUUFBUTtRQUNaLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixHQUFHLEVBQUUsOEJBQThCO1FBQ25DLElBQUksRUFBRSxvQ0FBb0M7S0FDM0M7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ25FO1FBQ0QsT0FBTzs7OztRQUFQLFVBQVEsSUFBVTtZQUNoQixPQUFPLGNBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUN0RTtRQUNELFFBQVE7Ozs7UUFBUixVQUFTLElBQVU7WUFDakIsT0FBTyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDcEU7UUFDRCxPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ3BFO1FBQ0QsUUFBUTs7OztRQUFSLFVBQVMsSUFBVTtZQUNqQixPQUFPLHdCQUF3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2hGO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsZUFBZTtRQUNsQixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0Y7Ozs7Ozs7OztBQzVFRCxxQkFBSUQsZ0JBQWMsR0FBRyw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQzNGRCxhQUFXLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTdFLHFCQUFJRSxhQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9ILHFCQUFJQyxhQUFXLEdBQUcsa0xBQWtMLENBQUM7QUFFck0scUJBQWEsUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLDBGQUEwRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0csV0FBVzs7Ozs7O0lBQVgsVUFBWSxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU9GLGdCQUFjLENBQUM7U0FDdkI7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDeEIsT0FBT0QsYUFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQztRQUVELE9BQU9DLGdCQUFjLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzlDO0lBQ0QsV0FBVyxlQUFBO0lBQ1gsZ0JBQWdCLEVBQUVFLGFBQVc7SUFDN0IsaUJBQWlCLEVBQUUsOEZBQThGO0lBQ2pILHNCQUFzQixFQUFFLHlGQUF5RjtJQUNqSCxXQUFXLGVBQUE7SUFDWCxlQUFlLEVBQUVELGFBQVc7SUFDNUIsZ0JBQWdCLEVBQUVBLGFBQVc7SUFDN0IsUUFBUSxFQUFFLHNEQUFzRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0UsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsTUFBTTtRQUNWLEdBQUcsRUFBRSxTQUFTO1FBQ2QsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsdUJBQXVCO1FBQzNCLEdBQUcsRUFBRSw0QkFBNEI7UUFDakMsSUFBSSxFQUFFLGtDQUFrQztLQUN6QztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU87Ozs7a0JBQUMsSUFBVTtZQUNoQixPQUFPLFdBQVcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNuRTtRQUNELE9BQU87Ozs7a0JBQUMsSUFBVTtZQUNoQixPQUFPLGNBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUN0RTtRQUNELFFBQVE7Ozs7a0JBQUMsSUFBVTtZQUNqQixPQUFPLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNwRTtRQUNELE9BQU87Ozs7a0JBQUMsSUFBVTtZQUNoQixPQUFPLFlBQVksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUNwRTtRQUNELFFBQVE7Ozs7a0JBQUMsSUFBVTtZQUNqQixPQUFPLHdCQUF3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2hGO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsZUFBZTtRQUNsQixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0Y7Ozs7Ozs7OztBQy9FRCxxQkFBSUQsZ0JBQWMsR0FBRyw2REFBNkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUYscUJBQUlELGFBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFL0UscUJBQWEsVUFBVSxHQUFlO0lBQ3BDLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLDBGQUEwRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0csV0FBVzs7Ozs7O0lBQVgsVUFBWSxJQUFVLEVBQUUsTUFBYyxFQUFFLEtBQWU7UUFDckQsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULE9BQU9DLGdCQUFjLENBQUM7U0FDdkI7YUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsT0FBT0QsYUFBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBT0MsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDOUM7S0FDRjtJQUNELGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLHNEQUFzRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0UsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsUUFBUTtRQUNaLEdBQUcsRUFBRSxXQUFXO1FBQ2hCLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLHVCQUF1QjtRQUMzQixHQUFHLEVBQUUsOEJBQThCO1FBQ25DLElBQUksRUFBRSxvQ0FBb0M7S0FDM0M7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sV0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ25FO1FBQ0QsT0FBTzs7OztRQUFQLFVBQVEsSUFBVTtZQUNoQixPQUFPLGNBQWMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztTQUN0RTtRQUNELFFBQVE7Ozs7UUFBUixVQUFTLElBQVU7WUFDakIsT0FBTyxZQUFZLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDcEU7UUFDRCxPQUFPOzs7O1FBQVAsVUFBUSxJQUFVO1lBQ2hCLE9BQU8sWUFBWSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ3BFO1FBQ0QsUUFBUTs7OztRQUFSLFVBQVMsSUFBVTtZQUNqQixPQUFPLHdCQUF3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2hGO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsZUFBZTtRQUNsQixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFVBQVU7SUFDbEMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0Y7Ozs7Ozs7Ozs7OztBQ3RFRCxxQkFBSSxXQUFXLEdBQUcsdUVBQXVFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNsRyxhQUFhLEdBQUc7SUFDZCxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRO0lBQ2xFLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQztDQUMvQyxDQUFDOzs7Ozs7OztBQUVKLHFCQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYscUJBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNoQixRQUFRLEdBQUc7UUFDVCxLQUFLLEdBQUc7WUFDTixPQUFPLFFBQVEsR0FBRyxtQkFBbUIsR0FBRyxpQkFBaUIsQ0FBQztRQUM1RCxLQUFLLElBQUk7WUFDUCxPQUFPLFFBQVEsR0FBRyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzVDLEtBQUssR0FBRztZQUNOLE9BQU8sUUFBUSxHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDNUMsS0FBSyxJQUFJO1lBQ1AsTUFBTSxHQUFHLFFBQVEsR0FBRyxVQUFVLEdBQUcsV0FBVyxDQUFDO1lBQzdDLE1BQU07UUFDUixLQUFLLEdBQUc7WUFDTixPQUFPLFFBQVEsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssSUFBSTtZQUNQLE1BQU0sR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN4QyxNQUFNO1FBQ1IsS0FBSyxHQUFHO1lBQ04sT0FBTyxRQUFRLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN2QyxLQUFLLElBQUk7WUFDUCxNQUFNLEdBQUcsUUFBUSxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDeEMsTUFBTTtRQUNSLEtBQUssR0FBRztZQUNOLE9BQU8sUUFBUSxHQUFHLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFDN0MsS0FBSyxJQUFJO1lBQ1AsTUFBTSxHQUFHLFFBQVEsR0FBRyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQzlDLE1BQU07UUFDUixLQUFLLEdBQUc7WUFDTixPQUFPLFFBQVEsR0FBRyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ3ZDLEtBQUssSUFBSTtZQUNQLE1BQU0sR0FBRyxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztZQUN4QyxNQUFNO0tBQ1Q7SUFDRCxNQUFNLEdBQUcsWUFBWSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDO0lBQ3BELE9BQU8sTUFBTSxDQUFDO0NBQ2Y7Ozs7OztBQUVELHNCQUFzQixHQUFXLEVBQUUsUUFBaUI7SUFDbEQsT0FBTyxHQUFHLEdBQUcsRUFBRSxJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztDQUM1RTtBQUVELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSwwR0FBMEcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdILFdBQVcsRUFBRSxzRUFBc0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlGLFFBQVEsRUFBRSxvRUFBb0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pGLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxrQkFBa0I7UUFDdEIsR0FBRyxFQUFFLCtCQUErQjtRQUNwQyxJQUFJLEVBQUUscUNBQXFDO1FBQzNDLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLDBCQUEwQjtRQUMvQixJQUFJLEVBQUUsK0JBQStCO0tBQ3RDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixPQUFPLEVBQUUscUJBQXFCO1FBQzlCLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFdBQVc7UUFDbkIsSUFBSSxFQUFFLFdBQVc7UUFDakIsQ0FBQyxFQUFFRyxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxXQUFXO0lBQ25DLE9BQU8sRUFBRSxLQUFLO0lBQ2QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGOzs7Ozs7Ozs7Ozs7O0FDL0ZELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxzRkFBc0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pHLFdBQVcsRUFBRSxnRUFBZ0UsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLHFEQUFxRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUUsYUFBYSxFQUFFLG9DQUFvQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx3QkFBd0I7S0FDL0I7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsb0JBQW9CO1FBQzdCLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLFFBQVEsRUFBRSxxQkFBcUI7UUFDL0IsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxtQkFBbUI7UUFDdEIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRCxzQkFBc0IsRUFBRSxjQUFjO0lBQ3RDLE9BQU87Ozs7O0lBQVAsVUFBUSxJQUFZLEVBQUUsTUFBYztRQUNsQyxxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLFFBQVEsTUFBTTs7OztZQUlaLEtBQUssR0FBRztnQkFDTixPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFHdkMsUUFBUTtZQUNSLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEtBQUssQ0FBQztZQUNYLEtBQUssR0FBRztnQkFDTixPQUFPLEdBQUcsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQzs7WUFHeEMsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDekM7S0FDRjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7O0FDcEVELHFCQUFJSCxnQkFBYyxHQUFHLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDM0ZELGFBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFN0UscUJBQUlFLGFBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDL0gscUJBQUlDLGFBQVcsR0FBRyxnTEFBZ0wsQ0FBQztBQUVuTSxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsd0ZBQXdGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMzRyxXQUFXOzs7Ozs7SUFBWCxVQUFZLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtRQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBT0YsZ0JBQWMsQ0FBQztTQUN2QjtRQUVELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN4QixPQUFPRCxhQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsT0FBT0MsZ0JBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDOUM7SUFDRCxXQUFXLGVBQUE7SUFDWCxnQkFBZ0IsRUFBRUUsYUFBVztJQUM3QixpQkFBaUIsRUFBRSw0RkFBNEY7SUFDL0csc0JBQXNCLEVBQUUseUZBQXlGO0lBQ2pILFdBQVcsZUFBQTtJQUNYLGVBQWUsRUFBRUQsYUFBVztJQUM1QixnQkFBZ0IsRUFBRUEsYUFBVztJQUM3QixRQUFRLEVBQUUsa0RBQWtELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RSxhQUFhLEVBQUUsb0NBQW9DLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsR0FBRyxFQUFFLDRCQUE0QjtRQUNqQyxJQUFJLEVBQUUsa0NBQWtDO0tBQ3pDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTzs7OztrQkFBQyxJQUFVO1lBQ2hCLE9BQU8sU0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2pFO1FBQ0QsT0FBTzs7OztrQkFBQyxJQUFVO1lBQ2hCLE9BQU8sVUFBVSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2xFO1FBQ0QsUUFBUTs7OztrQkFBQyxJQUFVO1lBQ2pCLE9BQU8sU0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2pFO1FBQ0QsT0FBTzs7OztrQkFBQyxJQUFVO1lBQ2hCLE9BQU8sU0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDO1NBQ2pFO1FBQ0QsUUFBUTs7OztrQkFBQyxJQUFVO1lBQ2pCLE9BQU8sb0JBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7U0FDNUU7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsUUFBUTtRQUNkLENBQUMsRUFBRSxjQUFjO1FBQ2pCLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDOUVELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSx5RUFBeUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVGLFdBQVcsRUFBRSwyREFBMkQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ25GLFFBQVEsRUFBRSxzQ0FBc0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNELGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsZ0JBQWdCO1FBQ3BCLEdBQUcsRUFBRSxzQkFBc0I7UUFDM0IsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsSUFBSSxFQUFFLHVCQUF1QjtLQUM5QjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxhQUFhO1FBQ3RCLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLFFBQVEsRUFBRSxnQkFBZ0I7UUFDMUIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLDhCQUE4QjtRQUN4QyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFNBQVM7UUFDakIsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRTs7OztRQUFGLFVBQUcsR0FBVztZQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLFFBQVEsQ0FBQzthQUNqQjtZQUNELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUNELENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRTs7OztRQUFGLFVBQUcsR0FBVztZQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLFFBQVEsQ0FBQzthQUNqQjtZQUNELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUN0QjtRQUNELENBQUMsRUFBRSxNQUFNO1FBQ1QsRUFBRTs7OztRQUFGLFVBQUcsR0FBVztZQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLFNBQVMsQ0FBQzthQUNsQjtZQUNELE9BQU8sR0FBRyxHQUFHLFNBQVMsQ0FBQztTQUN4QjtRQUNELENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRTs7OztRQUFGLFVBQUcsR0FBVztZQUNaLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTtnQkFDYixPQUFPLFFBQVEsQ0FBQzthQUNqQjtpQkFBTSxJQUFJLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQ3ZDLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQzthQUNyQjtZQUNELE9BQU8sR0FBRyxHQUFHLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsYUFBYSxFQUFFLCtEQUErRDtJQUM5RSxJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE9BQU8sNkJBQTZCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2xEO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO2FBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxDQUFDO1NBQ2hCO2FBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sT0FBTyxHQUFHLFFBQVEsR0FBRyxjQUFjLENBQUM7U0FDNUM7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxPQUFPLEdBQUcsT0FBTyxHQUFHLGNBQWMsQ0FBQztTQUMzQzthQUFNO1lBQ0wsT0FBTyxNQUFNLENBQUM7U0FDZjtLQUNGO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDbkZELHFCQUFJRyxXQUFTLEdBQTRCO0lBQ3JDLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0lBQ04sQ0FBQyxFQUFFLEdBQUc7SUFDTixDQUFDLEVBQUUsR0FBRztJQUNOLENBQUMsRUFBRSxHQUFHO0NBQ1A7QUFDREMsV0FBUyxHQUE0QjtJQUNuQyxHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztJQUNSLEdBQUcsRUFBRSxHQUFHO0lBQ1IsR0FBRyxFQUFFLEdBQUc7SUFDUixHQUFHLEVBQUUsR0FBRztDQUNULENBQUM7QUFFSixxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsNkVBQTZFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRyxXQUFXLEVBQUUsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxzREFBc0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNFLGFBQWEsRUFBRSxpQ0FBaUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzNELFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLEdBQUcsRUFBRSxlQUFlO1FBQ3BCLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLHlCQUF5QjtRQUM5QixJQUFJLEVBQUUsK0JBQStCO0tBQ3RDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFNBQVM7UUFDbEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLFVBQVU7UUFDcEIsT0FBTyxFQUFFLFNBQVM7UUFDbEIsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFFBQVE7UUFDaEIsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsYUFBYTtRQUNoQixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxRQUFROzs7O0lBQVIsVUFBUyxHQUFXO1FBQ2xCLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsVUFBVSxLQUFLO1lBQ2pELE9BQU9BLFdBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QixDQUFDLENBQUM7S0FDSjtJQUNELFVBQVU7Ozs7SUFBVixVQUFXLEdBQVc7UUFDcEIsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQUs7WUFDdkMsT0FBT0QsV0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCLENBQUMsQ0FBQztLQUNKOzs7SUFHRCxhQUFhLEVBQUUsb0JBQW9CO0lBQ25DLFlBQVk7Ozs7O2NBQUMsSUFBSSxFQUFFLFFBQVE7UUFDekIsSUFBSSxJQUFJLEtBQUssRUFBRSxFQUFFO1lBQ2YsSUFBSSxHQUFHLENBQUMsQ0FBQztTQUNWO1FBQ0QsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNwQzthQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUM5QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN0QzthQUFNLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtZQUM3QixPQUFPLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7S0FDRjtJQUNELFFBQVE7Ozs7OztjQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM1QixJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU0sSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ3BCLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGOzs7Ozs7Ozs7QUM3R0QscUJBQUksV0FBVyxHQUFHLCtEQUErRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7QUFDN0YscUJBQW1CLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUNwRixRQUFRLEdBQUc7UUFDVCxLQUFLLEdBQUc7WUFDTixPQUFPLENBQUMsUUFBUSxJQUFJLGFBQWEsSUFBSSxrQkFBa0IsR0FBRyxtQkFBbUIsQ0FBQztRQUNoRixLQUFLLElBQUk7WUFDUCxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxhQUFhLElBQUksWUFBWSxHQUFHLGFBQWEsQ0FBQyxDQUFDO1FBQzVFLEtBQUssR0FBRztZQUNOLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsT0FBTyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2hFLEtBQUssR0FBRztZQUNOLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELEtBQUssR0FBRztZQUNOLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2pFLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELEtBQUssR0FBRztZQUNOLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ3JFLEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQ25FLEtBQUssR0FBRztZQUNOLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzlELEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxJQUFJLFFBQVEsSUFBSSxhQUFhLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0tBQzdEO0lBQ0QsT0FBTyxFQUFFLENBQUM7Q0FDWDs7Ozs7O0FBQ0QsY0FBYyxJQUFVLEVBQUUsUUFBaUI7SUFDekMsT0FBTyxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUcsU0FBUyxJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDO0NBQzNGO0FBRUQscUJBQWEsUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLG1HQUFtRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkgsV0FBVyxFQUFHLG9EQUFvRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0UsUUFBUSxFQUFHLHFEQUFxRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDM0UsYUFBYSxFQUFHLCtCQUErQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDMUQsV0FBVyxFQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDN0MsY0FBYyxFQUFHO1FBQ2YsRUFBRSxFQUFHLE1BQU07UUFDWCxHQUFHLEVBQUcsU0FBUztRQUNmLENBQUMsRUFBRyxhQUFhO1FBQ2pCLEVBQUUsRUFBRyxlQUFlO1FBQ3BCLEdBQUcsRUFBRyxvQkFBb0I7UUFDMUIsSUFBSSxFQUFHLDBCQUEwQjtLQUNsQztJQUNELGFBQWEsRUFBRSxRQUFRO0lBQ3ZCLElBQUk7Ozs7Y0FBRSxLQUFLO1FBQ1QsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxLQUFLLEdBQUcsQ0FBQztLQUM5QztJQUNELFFBQVE7Ozs7OztjQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTztRQUMvQixJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDZCxPQUFPLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztTQUN2QzthQUFNO1lBQ0wsT0FBTyxPQUFPLEtBQUssSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7U0FDdkM7S0FDRjtJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxtQkFBbUI7UUFDN0IsUUFBUTs7OztrQkFBRSxJQUFVO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6QjtRQUNELE9BQU8sRUFBRyxtQkFBbUI7UUFDN0IsUUFBUTs7OztrQkFBRSxJQUFVO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUNELFFBQVEsRUFBRyxHQUFHO0tBQ2Y7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsVUFBVTtRQUNuQixJQUFJLEVBQUcsSUFBSTtRQUNYLENBQUMsRUFBR0QsV0FBUztRQUNiLEVBQUUsRUFBR0EsV0FBUztRQUNkLENBQUMsRUFBR0EsV0FBUztRQUNiLEVBQUUsRUFBR0EsV0FBUztRQUNkLENBQUMsRUFBR0EsV0FBUztRQUNiLEVBQUUsRUFBR0EsV0FBUztRQUNkLENBQUMsRUFBR0EsV0FBUztRQUNiLEVBQUUsRUFBR0EsV0FBUztRQUNkLENBQUMsRUFBR0EsV0FBUztRQUNiLEVBQUUsRUFBR0EsV0FBUztRQUNkLENBQUMsRUFBR0EsV0FBUztRQUNiLEVBQUUsRUFBR0EsV0FBUztLQUNmO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUcsS0FBSztJQUNmLElBQUksRUFBRztRQUNMLEdBQUcsRUFBRyxDQUFDOztRQUNQLEdBQUcsRUFBRyxDQUFDO0tBQ1I7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRyx3RkFBd0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVHLFdBQVcsRUFBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLFFBQVEsRUFBRyw0Q0FBNEMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xFLGFBQWEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hELFdBQVcsRUFBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9DLGNBQWMsRUFBRztRQUNmLEVBQUUsRUFBRyxPQUFPO1FBQ1osR0FBRyxFQUFHLFVBQVU7UUFDaEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLGFBQWE7UUFDbEIsR0FBRyxFQUFHLDJCQUEyQjtRQUNqQyxJQUFJLEVBQUcsaUNBQWlDO0tBQ3pDO0lBQ0QsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxZQUFZOzs7OztjQUFDLElBQUksRUFBRSxRQUFRO1FBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNmLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUN2QixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxJQUFJLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN0QzthQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQ3RELE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNsQjtLQUNGO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPO1FBQzlCLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtZQUNkLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDckIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTSxJQUFJLEtBQUssR0FBRyxFQUFFLEVBQUU7WUFDckIsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNO1lBQ0wsT0FBTyxPQUFPLENBQUM7U0FDaEI7S0FDRjtJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRyxxQkFBcUI7UUFDL0IsT0FBTyxFQUFHLGtCQUFrQjtRQUM1QixRQUFRLEVBQUcsaUJBQWlCO1FBQzVCLE9BQU8sRUFBRyxvQkFBb0I7UUFDOUIsUUFBUSxFQUFHLHNCQUFzQjtRQUNqQyxRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0QsWUFBWSxFQUFHO1FBQ2IsTUFBTSxFQUFHLFVBQVU7UUFDbkIsSUFBSSxFQUFHLGNBQWM7UUFDckIsQ0FBQyxFQUFHLGdCQUFnQjtRQUNwQixFQUFFLEVBQUcsVUFBVTtRQUNmLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsT0FBTztRQUNYLEVBQUUsRUFBRyxRQUFRO1FBQ2IsQ0FBQyxFQUFHLFFBQVE7UUFDWixFQUFFLEVBQUcsU0FBUztRQUNkLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsU0FBUztRQUNiLEVBQUUsRUFBRyxVQUFVO0tBQ2hCO0lBQ0QsSUFBSSxFQUFHO1FBQ0wsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUM7S0FDUjtDQUNGOzs7Ozs7Ozs7O0FDbkVELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSwrRkFBK0YsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xILFdBQVcsRUFBRSxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pFLFFBQVEsRUFBRSwwREFBMEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQy9FLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSxtQkFBbUI7UUFDeEIsSUFBSSxFQUFFLHdCQUF3QjtLQUMvQjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUTs7OztrQkFBQyxJQUFVO1lBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO29CQUNKLE9BQU8sNEJBQTRCLENBQUM7Z0JBQ3RDO29CQUNFLE9BQU8sNEJBQTRCLENBQUM7YUFDdkM7U0FDRjtRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNOzs7O1FBQU4sVUFBTyxHQUFXO1lBQ2hCLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUMxRTtRQUNELElBQUksRUFBRSxPQUFPO1FBQ2IsQ0FBQyxFQUFFLGdCQUFnQjtRQUNuQixFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsV0FBVztRQUNkLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7Ozs7OztBQ3hERCxxQkFBYSxRQUFRLEdBQWdCO0lBQ25DLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUQsV0FBVyxFQUFHLHdDQUF3QyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDakUsUUFBUSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbkQsYUFBYSxFQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFDLFdBQVcsRUFBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4QyxjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxXQUFXO1FBQ2hCLEdBQUcsRUFBRyxpQkFBaUI7UUFDdkIsSUFBSSxFQUFHLHNCQUFzQjtRQUM3QixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsV0FBVztRQUNoQixHQUFHLEVBQUcsaUJBQWlCO1FBQ3ZCLElBQUksRUFBRyxzQkFBc0I7S0FDOUI7SUFDRCxhQUFhLEVBQUUsUUFBUTtJQUN2QixJQUFJOzs7O2NBQUUsS0FBSztRQUNULE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztLQUN2QjtJQUNELFFBQVE7Ozs7OztjQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM3QixJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxRQUFRLEVBQUc7UUFDVCxPQUFPLEVBQUcsU0FBUztRQUNuQixPQUFPLEVBQUcsU0FBUztRQUNuQixRQUFRLEVBQUcsYUFBYTtRQUN4QixPQUFPLEVBQUcsU0FBUztRQUNuQixRQUFRLEVBQUcsYUFBYTtRQUN4QixRQUFRLEVBQUcsR0FBRztLQUNmO0lBQ0Qsc0JBQXNCLEVBQUcsVUFBVTtJQUNuQyxPQUFPOzs7OztJQUFQLFVBQVMsR0FBVyxFQUFFLE1BQWM7UUFDbEMsUUFBUSxNQUFNO1lBQ1osS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssS0FBSztnQkFDUixPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDbkI7Z0JBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzNCO0tBQ0Y7SUFDRCxZQUFZLEVBQUc7UUFDYixNQUFNLEVBQUcsS0FBSztRQUNkLElBQUksRUFBRyxLQUFLO1FBQ1osQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxJQUFJO1FBQ1IsRUFBRSxFQUFHLEtBQUs7UUFDVixDQUFDLEVBQUcsS0FBSztRQUNULEVBQUUsRUFBRyxNQUFNO1FBQ1gsQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLE1BQU07UUFDWCxDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO0tBQ1g7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDL0RELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRyx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzVELFdBQVcsRUFBRyx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pFLFFBQVEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ25ELGFBQWEsRUFBRyxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxQyxXQUFXLEVBQUcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEMsY0FBYyxFQUFHO1FBQ2YsRUFBRSxFQUFHLFFBQVE7UUFDYixHQUFHLEVBQUcsV0FBVztRQUNqQixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsZUFBZTtRQUNwQixHQUFHLEVBQUcsc0JBQXNCO1FBQzVCLElBQUksRUFBRywyQkFBMkI7UUFDbEMsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLGVBQWU7UUFDcEIsR0FBRyxFQUFHLHNCQUFzQjtRQUM1QixJQUFJLEVBQUcsMkJBQTJCO0tBQ25DO0lBQ0QsUUFBUSxFQUFHO1FBQ1QsT0FBTyxFQUFHLE9BQU87UUFDakIsT0FBTyxFQUFHLE9BQU87UUFDakIsUUFBUSxFQUFHLFNBQVM7UUFDcEIsT0FBTyxFQUFHLE9BQU87UUFDakIsUUFBUSxFQUFHLGFBQWE7UUFDeEIsUUFBUSxFQUFHLEdBQUc7S0FDZjtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxNQUFNO1FBQ2YsSUFBSSxFQUFHLE1BQU07UUFDYixDQUFDLEVBQUcsS0FBSztRQUNULEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLElBQUk7UUFDUixFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxNQUFNO1FBQ1YsRUFBRSxFQUFHLE1BQU07UUFDWCxDQUFDLEVBQUcsSUFBSTtRQUNSLEVBQUUsRUFBRyxLQUFLO1FBQ1YsQ0FBQyxFQUFHLEtBQUs7UUFDVCxFQUFFLEVBQUcsS0FBSztRQUNWLENBQUMsRUFBRyxLQUFLO1FBQ1QsRUFBRSxFQUFHLEtBQUs7S0FDWDtJQUNELHNCQUFzQixFQUFHLGdCQUFnQjtJQUN6QyxPQUFPLEVBQUcsVUFBVSxHQUFXLEVBQUUsTUFBYztRQUM3QyxRQUFRLE1BQU07WUFDWixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDM0I7S0FDRjtJQUNELGFBQWEsRUFBRyxPQUFPO0lBQ3ZCLElBQUksRUFBRyxVQUFVLEtBQUs7UUFDcEIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFHLFVBQVUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQ3hDLE9BQU8sSUFBSSxHQUFHLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2hDO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUNwRUQscUJBQU0sS0FBSyxHQUFHO0lBQ1osRUFBRSxFQUFHLDRCQUE0QjtJQUNqQyxDQUFDLEVBQUcsdUJBQXVCO0lBQzNCLEVBQUUsRUFBRSx5QkFBeUI7SUFDN0IsQ0FBQyxFQUFHLDBCQUEwQjtJQUM5QixFQUFFLEVBQUUsMkJBQTJCO0lBQy9CLENBQUMsRUFBRyxvQkFBb0I7SUFDeEIsRUFBRSxFQUFFLHFCQUFxQjtJQUN6QixDQUFDLEVBQUcsc0JBQXNCO0lBQzFCLEVBQUUsRUFBRSwyQkFBMkI7SUFDL0IsQ0FBQyxFQUFHLGtCQUFrQjtJQUN0QixFQUFFLEVBQUUsa0JBQWtCO0NBQ3ZCLENBQUM7Ozs7Ozs7O0FBQ0YsMEJBQTBCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUMzRixJQUFJLGFBQWEsRUFBRTtRQUNmLE9BQU8saUJBQWlCLENBQUM7S0FDNUI7U0FBTTtRQUNILE9BQU8sUUFBUSxHQUFHLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0tBQzNEO0NBQ0Y7Ozs7Ozs7O0FBQ0QsMkJBQTJCLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUM1RixPQUFPLGFBQWEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNuRjs7Ozs7QUFDRCxpQkFBaUIsR0FBVztJQUMxQixPQUFPLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxLQUFLLEdBQUcsR0FBRyxFQUFFLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0NBQ2pEOzs7OztBQUNELGVBQWUsR0FBVztJQUN4QixPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDOUI7Ozs7Ozs7O0FBQ0QscUJBQW1CLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUNwRixxQkFBSSxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUN2QixJQUFJLEdBQUcsS0FBSyxDQUFDLEVBQUU7UUFDWCxPQUFPLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMzRTtTQUFNLElBQUksYUFBYSxFQUFFO1FBQ3RCLE9BQU8sTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDbEU7U0FBTTtRQUNILElBQUksUUFBUSxFQUFFO1lBQ1YsT0FBTyxNQUFNLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDSCxPQUFPLE1BQU0sSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xFO0tBQ0o7Q0FDRjtBQUVELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRztRQUNQLE1BQU0sRUFBRSxtR0FBbUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RILFVBQVUsRUFBRSxpR0FBaUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3hILFFBQVEsRUFBRSw2REFBNkQ7S0FDeEU7SUFDRCxXQUFXLEVBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxRQUFRLEVBQUc7UUFDUCxNQUFNLEVBQUUsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN0RyxVQUFVLEVBQUUsMEZBQTBGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNqSCxRQUFRLEVBQUUsWUFBWTtLQUN6QjtJQUNELGFBQWEsRUFBRyw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3hELFdBQVcsRUFBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3pDLGtCQUFrQixFQUFHLElBQUk7SUFDekIsY0FBYyxFQUFHO1FBQ2IsRUFBRSxFQUFHLE9BQU87UUFDWixHQUFHLEVBQUcsVUFBVTtRQUNoQixDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsdUJBQXVCO1FBQzVCLEdBQUcsRUFBRyxxQ0FBcUM7UUFDM0MsSUFBSSxFQUFHLDJDQUEyQztRQUNsRCxDQUFDLEVBQUcsWUFBWTtRQUNoQixFQUFFLEVBQUcsdUJBQXVCO1FBQzVCLEdBQUcsRUFBRyxxQ0FBcUM7UUFDM0MsSUFBSSxFQUFHLDBDQUEwQztLQUNwRDtJQUNELFFBQVEsRUFBRztRQUNQLE9BQU8sRUFBRyxlQUFlO1FBQ3pCLE9BQU8sRUFBRyxZQUFZO1FBQ3RCLFFBQVEsRUFBRyxTQUFTO1FBQ3BCLE9BQU8sRUFBRyxZQUFZO1FBQ3RCLFFBQVEsRUFBRyxvQkFBb0I7UUFDL0IsUUFBUSxFQUFHLEdBQUc7S0FDakI7SUFDRCxZQUFZLEVBQUc7UUFDWCxNQUFNLEVBQUcsT0FBTztRQUNoQixJQUFJLEVBQUcsVUFBVTtRQUNqQixDQUFDLEVBQUcsZ0JBQWdCO1FBQ3BCLEVBQUUsRUFBR0EsV0FBUztRQUNkLENBQUMsRUFBRyxpQkFBaUI7UUFDckIsRUFBRSxFQUFHQSxXQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUdBLFdBQVM7UUFDZCxDQUFDLEVBQUcsaUJBQWlCO1FBQ3JCLEVBQUUsRUFBR0EsV0FBUztRQUNkLENBQUMsRUFBRyxpQkFBaUI7UUFDckIsRUFBRSxFQUFHQSxXQUFTO1FBQ2QsQ0FBQyxFQUFHLGlCQUFpQjtRQUNyQixFQUFFLEVBQUdBLFdBQVM7S0FDakI7SUFDRCxzQkFBc0IsRUFBRSxhQUFhO0lBQ3JDLE9BQU87Ozs7Y0FBQyxHQUFHO1FBQ1AsT0FBTyxHQUFHLEdBQUcsTUFBTSxDQUFDO0tBQ3ZCO0lBQ0QsSUFBSSxFQUFHO1FBQ0gsR0FBRyxFQUFHLENBQUM7O1FBQ1AsR0FBRyxFQUFHLENBQUM7S0FDVjtDQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2R0QscUJBQW1CLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUNwRixRQUFRLEdBQUc7UUFDVCxLQUFLLEdBQUc7WUFDTixPQUFPLGFBQWEsR0FBRyxlQUFlLEdBQUcsaUJBQWlCLENBQUM7UUFDN0QsS0FBSyxJQUFJO1lBQ1AsT0FBTyxHQUFHLElBQUksYUFBYSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztRQUN6RCxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxJQUFJLGFBQWEsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDLENBQUM7UUFDdkQsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUk7WUFDUCxPQUFPLEdBQUcsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELEtBQUssR0FBRyxDQUFDO1FBQ1QsS0FBSyxJQUFJO1lBQ1AsT0FBTyxHQUFHLElBQUksYUFBYSxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUMsQ0FBQztRQUNyRCxLQUFLLEdBQUcsQ0FBQztRQUNULEtBQUssSUFBSTtZQUNQLE9BQU8sR0FBRyxJQUFJLGFBQWEsR0FBRyxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDbkQsS0FBSyxHQUFHLENBQUM7UUFDVCxLQUFLLElBQUk7WUFDUCxPQUFPLEdBQUcsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3BEO1lBQ0UsT0FBTyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzNCO0NBQ0Y7QUFFRCxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsOExBQThMLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqTixXQUFXLEVBQUUsNEVBQTRFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRyxnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSw0Q0FBNEMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pFLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLG1CQUFtQjtRQUN2QixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLElBQUksRUFBRSwrQkFBK0I7S0FDdEM7SUFDRCxhQUFhLEVBQUUsUUFBUTtJQUN2QixJQUFJLEVBQUUsVUFBVSxLQUFLO1FBQ25CLE9BQU8sS0FBSyxLQUFLLElBQUksQ0FBQztLQUN2QjtJQUNELFFBQVEsRUFBRSxVQUFVLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUN2QyxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsY0FBYztRQUN2QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxjQUFjO0lBQ3RDLE9BQU8sRUFBRSxVQUFVLEdBQVcsRUFBRSxNQUFjO1FBQzVDLFFBQVEsTUFBTTtZQUNaLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCO2dCQUNFLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtLQUNGO0NBQ0Y7Ozs7Ozs7Ozs7QUM3RkQscUJBQWEsUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLG9GQUFvRixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkcsV0FBVyxFQUFFLDZEQUE2RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckYsZ0JBQWdCLEVBQUUsSUFBSTtJQUN0QixRQUFRLEVBQUUsb0RBQW9ELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxjQUFjO1FBQ2xCLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsSUFBSSxFQUFFLCtCQUErQjtLQUN0QztJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsT0FBTyxFQUFFLG1CQUFtQjtRQUM1QixRQUFRLEVBQUUsZUFBZTtRQUN6QixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSx5QkFBeUI7UUFDbkMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxPQUFPO1FBQ2YsSUFBSSxFQUFFLFVBQVU7UUFDaEIsQ0FBQyxFQUFFLGVBQWU7UUFDbEIsRUFBRSxFQUFFLGFBQWE7UUFDakIsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsT0FBTztLQUNaO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7OztBQzFDRCxxQkFBSSxtQkFBbUIsR0FBRyw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbEcscUJBQUksc0JBQXNCLEdBQUcsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBRTFGLHFCQUFJRixhQUFXLEdBQUcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDckoscUJBQUlDLGFBQVcsR0FBRywwS0FBMEssQ0FBQztBQUU3TCxxQkFBYSxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUseUZBQXlGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM1RyxXQUFXOzs7Ozs7SUFBWCxVQUFZLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtRQUNyRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxtQkFBbUIsQ0FBQztTQUM1QjthQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixPQUFPLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUFNO1lBQ0wsT0FBTyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbkQ7S0FDRjtJQUVELFdBQVcsZUFBQTtJQUNYLGdCQUFnQixFQUFFQSxhQUFXO0lBQzdCLGlCQUFpQixFQUFFLDJGQUEyRjtJQUM5RyxzQkFBc0IsRUFBRSxrRkFBa0Y7SUFFMUcsV0FBVyxlQUFBO0lBQ1gsZUFBZSxFQUFFRCxhQUFXO0lBQzVCLGdCQUFnQixFQUFFQSxhQUFXO0lBRTdCLFFBQVEsRUFBRSw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2pGLGFBQWEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLE9BQU8sRUFBRSxrQkFBa0I7UUFDM0IsUUFBUSxFQUFFLDBCQUEwQjtRQUNwQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFNBQVM7UUFDakIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsQ0FBQyxFQUFFLG1CQUFtQjtRQUN0QixFQUFFLEVBQUUsYUFBYTtRQUNqQixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFFBQVE7UUFDWixDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFdBQVc7UUFDZCxFQUFFLEVBQUUsWUFBWTtRQUNoQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxTQUFTO0tBQ2Q7SUFDRCxzQkFBc0IsRUFBRSxpQkFBaUI7SUFDekMsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxFQUFFLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDO0tBQ3JFO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGOzs7Ozs7Ozs7O0FDekVELHFCQUFJSyxxQkFBbUIsR0FBRyw0REFBNEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQy9GQyx3QkFBc0IsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFFeEYscUJBQUlOLGFBQVcsR0FBRyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNySixxQkFBSUMsYUFBVyxHQUFHLDBLQUEwSyxDQUFDO0FBRTdMLHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRyx5RkFBeUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzdHLFdBQVc7Ozs7OztJQUFYLFVBQWEsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFlO1FBQ3RELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPSSxxQkFBbUIsQ0FBQztTQUM1QjthQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMvQixPQUFPQyx3QkFBc0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNMLE9BQU9ELHFCQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRDtLQUNGO0lBRUQsV0FBVyxlQUFBO0lBQ1gsZ0JBQWdCLEVBQUVKLGFBQVc7SUFDN0IsaUJBQWlCLEVBQUUsMkZBQTJGO0lBQzlHLHNCQUFzQixFQUFFLGtGQUFrRjtJQUUxRyxXQUFXLGVBQUE7SUFDWCxlQUFlLEVBQUdELGFBQVc7SUFDN0IsZ0JBQWdCLEVBQUdBLGFBQVc7SUFFOUIsUUFBUSxFQUFHLDREQUE0RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDbEYsYUFBYSxFQUFHLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDeEQsV0FBVyxFQUFHLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0Msa0JBQWtCLEVBQUcsSUFBSTtJQUN6QixjQUFjLEVBQUc7UUFDZixFQUFFLEVBQUcsT0FBTztRQUNaLEdBQUcsRUFBRyxVQUFVO1FBQ2hCLENBQUMsRUFBRyxZQUFZO1FBQ2hCLEVBQUUsRUFBRyxhQUFhO1FBQ2xCLEdBQUcsRUFBRyxtQkFBbUI7UUFDekIsSUFBSSxFQUFHLHdCQUF3QjtLQUNoQztJQUNELFFBQVEsRUFBRztRQUNULE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRztRQUNiLE1BQU0sRUFBRyxTQUFTO1FBQ2xCLElBQUksRUFBRyxZQUFZO1FBQ25CLENBQUMsRUFBRyxtQkFBbUI7UUFDdkIsRUFBRSxFQUFHLGFBQWE7UUFDbEIsQ0FBQyxFQUFHLFlBQVk7UUFDaEIsRUFBRSxFQUFHLFlBQVk7UUFDakIsQ0FBQyxFQUFHLFNBQVM7UUFDYixFQUFFLEVBQUcsUUFBUTtRQUNiLENBQUMsRUFBRyxTQUFTO1FBQ2IsRUFBRSxFQUFHLFVBQVU7UUFDZixDQUFDLEVBQUcsV0FBVztRQUNmLEVBQUUsRUFBRyxZQUFZO1FBQ2pCLENBQUMsRUFBRyxVQUFVO1FBQ2QsRUFBRSxFQUFHLFNBQVM7S0FDZjtJQUNELHNCQUFzQixFQUFFLGlCQUFpQjtJQUN6QyxPQUFPOzs7O0lBQVAsVUFBUyxJQUFZO1FBQ25CLHFCQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUM7S0FDckU7SUFDRCxJQUFJLEVBQUc7UUFDTCxHQUFHLEVBQUcsQ0FBQzs7UUFDUCxHQUFHLEVBQUcsQ0FBQztLQUNSO0NBQ0Y7Ozs7Ozs7OztBQ3pFRCxxQkFBSSxnQkFBZ0IsR0FBRyxrR0FBa0csQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckkscUJBQUksZ0JBQWdCLEdBQUcsb0dBQW9HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7OztBQUV2SSxrQkFBZ0IsR0FBVztJQUN6QixPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ3hFOzs7Ozs7O0FBRUQscUJBQW1CLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVc7SUFDakUscUJBQUksTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDdkIsUUFBUSxHQUFHO1FBQ1QsS0FBSyxJQUFJO1lBQ1AsT0FBTyxNQUFNLElBQUlPLFFBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDdkQsS0FBSyxHQUFHO1lBQ04sT0FBTyxhQUFhLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUM3QyxLQUFLLElBQUk7WUFDUCxPQUFPLE1BQU0sSUFBSUEsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQztRQUNyRCxLQUFLLEdBQUc7WUFDTixPQUFPLGFBQWEsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQy9DLEtBQUssSUFBSTtZQUNQLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELEtBQUssSUFBSTtZQUNQLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1FBQzFELEtBQUssSUFBSTtZQUNQLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO0tBQ2xEO0NBQ0Y7QUFFRCxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNOzs7Ozs7SUFBTixVQUFPLElBQVUsRUFBRSxNQUFjLEVBQUUsS0FBZTtRQUNoRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTyxnQkFBZ0IsQ0FBQztTQUN6QjthQUFNLElBQUksTUFBTSxLQUFLLEVBQUUsRUFBRTs7OztZQUl4QixPQUFPLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDNUc7YUFBTSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDaEMsT0FBTyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLE9BQU8sZ0JBQWdCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ2hEO0tBQ0Y7SUFDRCxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsNERBQTRELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNqRixhQUFhLEVBQUUsMEJBQTBCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNwRCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx5QkFBeUI7S0FDaEM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsYUFBYTtRQUN0QixPQUFPLEVBQUUsY0FBYztRQUN2QixRQUFROzs7O1FBQVIsVUFBUyxJQUFVO1lBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO29CQUNKLE9BQU8sb0JBQW9CLENBQUM7Z0JBRTlCLEtBQUssQ0FBQztvQkFDSixPQUFPLGtCQUFrQixDQUFDO2dCQUU1QixLQUFLLENBQUM7b0JBQ0osT0FBTyxnQkFBZ0IsQ0FBQztnQkFFMUIsS0FBSyxDQUFDO29CQUNKLE9BQU8saUJBQWlCLENBQUM7Z0JBRTNCLEtBQUssQ0FBQztvQkFDSixPQUFPLGlCQUFpQixDQUFDO2dCQUUzQjtvQkFDRSxPQUFPLGlCQUFpQixDQUFDO2FBQzVCO1NBQ0Y7UUFDRCxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFFBQVE7Ozs7UUFBUixVQUFTLElBQVU7WUFDakIsUUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN4QixLQUFLLENBQUM7b0JBQ0osT0FBTywyQkFBMkIsQ0FBQztnQkFDckMsS0FBSyxDQUFDO29CQUNKLE9BQU8sdUJBQXVCLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztvQkFDSixPQUFPLDBCQUEwQixDQUFDO2dCQUNwQyxLQUFLLENBQUM7b0JBQ0osT0FBTyx3QkFBd0IsQ0FBQztnQkFDbEMsS0FBSyxDQUFDO29CQUNKLE9BQU8sd0JBQXdCLENBQUM7Z0JBQ2xDO29CQUNFLE9BQU8sd0JBQXdCLENBQUM7YUFDbkM7U0FDRjtRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsT0FBTztRQUNmLElBQUksRUFBRSxTQUFTO1FBQ2YsQ0FBQyxFQUFFLGNBQWM7UUFDakIsRUFBRSxFQUFFTCxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFQSxXQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFQSxXQUFTO1FBQ2IsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUVBLFdBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0Y7Ozs7Ozs7OztBQ3pIRCxxQkFBYSxVQUFVLEdBQWU7SUFDcEMsSUFBSSxFQUFFLE9BQU87SUFDYixNQUFNLEVBQUUsMEZBQTBGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3RyxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsZ0ZBQWdGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNyRyxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxPQUFPO1FBQ1gsR0FBRyxFQUFFLFVBQVU7UUFDZixDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSx1QkFBdUI7UUFDM0IsR0FBRyxFQUFFLGtDQUFrQztRQUN2QyxJQUFJLEVBQUUsd0NBQXdDO0tBQy9DO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGNBQWM7UUFDdkIsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixRQUFRLEVBQUUsY0FBYztRQUN4QixPQUFPLEVBQUUsZUFBZTtRQUN4QixRQUFROzs7O2tCQUFDLElBQVU7WUFDakIsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzFELHVCQUF1QjtnQkFDdkIsdUJBQXVCLENBQUM7U0FDM0I7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsVUFBVTtRQUNoQixDQUFDLEVBQUUsaUJBQWlCO1FBQ3BCLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsVUFBVTtRQUNkLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFNBQVM7UUFDYixDQUFDLEVBQUUsUUFBUTtRQUNYLEVBQUUsRUFBRSxVQUFVO1FBQ2QsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsVUFBVTtJQUNsQyxPQUFPLEVBQUUsS0FBSztDQUNmOzs7Ozs7Ozs7Ozs7QUM5Q0QsZ0NBQWdDLEdBQVcsRUFBRSxhQUFzQixFQUFFLEdBQVc7SUFDOUUscUJBQUksTUFBTSxHQUEyQjtRQUNuQyxFQUFFLEVBQUUsU0FBUztRQUNiLEVBQUUsRUFBRSxRQUFRO1FBQ1osRUFBRSxFQUFFLEtBQUs7UUFDVCxFQUFFLEVBQUUsTUFBTTtRQUNWLEVBQUUsRUFBRSxNQUFNO1FBQ1YsRUFBRSxFQUFFLEtBQUs7S0FDVixDQUFDO0lBRUYscUJBQUksU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNwQixJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksRUFBRSxLQUFLLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRTtRQUN0RCxTQUFTLEdBQUcsTUFBTSxDQUFDO0tBQ3BCO0lBQ0QsT0FBTyxHQUFHLEdBQUcsU0FBUyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUN0QztBQUdELHFCQUFhLFFBQVEsR0FBZTtJQUNsQyxJQUFJLEVBQUUsSUFBSTtJQUNWLE1BQU0sRUFBRSxtR0FBbUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3RILFdBQVcsRUFBRSwrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3ZGLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsUUFBUSxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdEUsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsd0JBQXdCO0tBQy9CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGFBQWE7UUFDdEIsT0FBTyxFQUFFLGVBQWU7UUFDeEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFlBQVk7UUFDbEIsQ0FBQyxFQUFFLGdCQUFnQjtRQUNuQixFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxzQkFBc0I7UUFDMUIsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLHNCQUFzQjtRQUMxQixDQUFDLEVBQUUsT0FBTztRQUNWLEVBQUUsRUFBRSxzQkFBc0I7S0FDM0I7SUFDRCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0Y7Ozs7Ozs7Ozs7O0FDM0RELGtCQUFnQixJQUFZLEVBQUUsR0FBVztJQUN2QyxxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN0Sjs7Ozs7OztBQUVELGtDQUFnQyxHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXO0lBQzlFLHFCQUFJLE1BQU0sR0FBNEI7UUFDcEMsRUFBRSxFQUFFLGFBQWEsR0FBRyx3QkFBd0IsR0FBRyx3QkFBd0I7UUFDdkUsRUFBRSxFQUFFLGFBQWEsR0FBRyxxQkFBcUIsR0FBRyxxQkFBcUI7UUFDakUsRUFBRSxFQUFFLGdCQUFnQjtRQUNwQixFQUFFLEVBQUUsZUFBZTtRQUNuQixFQUFFLEVBQUUsc0JBQXNCO1FBQzFCLEVBQUUsRUFBRSxjQUFjO0tBQ25CLENBQUM7SUFDRixJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUU7UUFDZixPQUFPLGFBQWEsR0FBRyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzVDO0lBQ0QsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHSyxRQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7Q0FDOUM7QUFFRCxxQkFBSVAsYUFBVyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7OztBQUtsSSxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUU7UUFDTixNQUFNLEVBQUUsbUZBQW1GLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUN0RyxVQUFVLEVBQUUsaUZBQWlGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUN6RztJQUNELFdBQVcsRUFBRTs7UUFFWCxNQUFNLEVBQUUsK0RBQStELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNsRixVQUFVLEVBQUUsK0RBQStELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztLQUN2RjtJQUNELFFBQVEsRUFBRTtRQUNSLFVBQVUsRUFBRSwrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ3RGLE1BQU0sRUFBRSwrREFBK0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1FBQ2xGLFFBQVEsRUFBRSxnREFBZ0Q7S0FDM0Q7SUFDRCxhQUFhLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxXQUFXLGVBQUE7SUFDWCxlQUFlLEVBQUVBLGFBQVc7SUFDNUIsZ0JBQWdCLEVBQUVBLGFBQVc7O0lBRzdCLFdBQVcsRUFBRSwwTUFBME07O0lBR3ZOLGdCQUFnQixFQUFFLDBNQUEwTTs7SUFHNU4saUJBQWlCLEVBQUUsdUhBQXVIOztJQUcxSSxzQkFBc0IsRUFBRSw0RkFBNEY7SUFDcEgsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGdCQUFnQjtRQUNwQixHQUFHLEVBQUUsc0JBQXNCO1FBQzNCLElBQUksRUFBRSw0QkFBNEI7S0FDbkM7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLE9BQU8sRUFBRSxjQUFjO1FBQ3ZCLFFBQVE7Ozs7O2tCQUFDLElBQVUsRUFBRSxHQUFTO1lBQzVCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEMsUUFBUSxZQUFZLENBQUMsSUFBSSxDQUFDO29CQUN4QixLQUFLLENBQUM7d0JBQ0osT0FBTywyQkFBMkIsQ0FBQztvQkFDckMsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDO3dCQUNKLE9BQU8sMkJBQTJCLENBQUM7b0JBQ3JDLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQyxDQUFDO29CQUNQLEtBQUssQ0FBQzt3QkFDSixPQUFPLDJCQUEyQixDQUFDO2lCQUN0QzthQUNGO2lCQUFNO2dCQUNMLElBQUksWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDNUIsT0FBTyxrQkFBa0IsQ0FBQztpQkFDM0I7cUJBQU07b0JBQ0wsT0FBTyxpQkFBaUIsQ0FBQztpQkFDMUI7YUFDRjtTQUNGO1FBQ0QsUUFBUTs7Ozs7a0JBQUMsSUFBVSxFQUFFLEdBQVM7WUFDNUIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLEtBQUssQ0FBQzt3QkFDSixPQUFPLHlCQUF5QixDQUFDO29CQUNuQyxLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUMsQ0FBQztvQkFDUCxLQUFLLENBQUM7d0JBQ0osT0FBTyx5QkFBeUIsQ0FBQztvQkFDbkMsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDLENBQUM7b0JBQ1AsS0FBSyxDQUFDO3dCQUNKLE9BQU8seUJBQXlCLENBQUM7aUJBQ3BDO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUM1QixPQUFPLGtCQUFrQixDQUFDO2lCQUMzQjtxQkFBTTtvQkFDTCxPQUFPLGlCQUFpQixDQUFDO2lCQUMxQjthQUNGO1NBQ0Y7UUFDRCxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsQ0FBQyxFQUFFLGtCQUFrQjtRQUNyQixFQUFFLEVBQUVRLHdCQUFzQjtRQUMxQixDQUFDLEVBQUVBLHdCQUFzQjtRQUN6QixFQUFFLEVBQUVBLHdCQUFzQjtRQUMxQixDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRUEsd0JBQXNCO1FBQzFCLENBQUMsRUFBRSxNQUFNO1FBQ1QsRUFBRSxFQUFFQSx3QkFBc0I7UUFDMUIsQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUVBLHdCQUFzQjtRQUMxQixDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRUEsd0JBQXNCO0tBQzNCO0lBQ0QsYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxJQUFJOzs7O2NBQUMsS0FBSztRQUNSLE9BQU8sZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3JDO0lBQ0QsUUFBUTs7Ozs7O2NBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPO1FBQzVCLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtZQUNaLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTSxJQUFJLElBQUksR0FBRyxFQUFFLEVBQUU7WUFDcEIsT0FBTyxNQUFNLENBQUM7U0FDZjthQUFNLElBQUksSUFBSSxHQUFHLEVBQUUsRUFBRTtZQUNwQixPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxPQUFPLFFBQVEsQ0FBQztTQUNqQjtLQUNGO0lBQ0Qsc0JBQXNCLEVBQUUsa0JBQWtCO0lBQzFDLE9BQU87Ozs7O0lBQVAsVUFBUSxJQUFZLEVBQUUsTUFBYztRQUNsQyxxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLFFBQVEsTUFBTTtZQUNaLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEtBQUs7Z0JBQ1IsT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLEtBQUssR0FBRztnQkFDTixPQUFPLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSyxHQUFHLENBQUM7WUFDVCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDO1lBQ3BCO2dCQUNFLE9BQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsSUFBSSxFQUFFO1FBQ0osR0FBRyxFQUFFLENBQUM7O1FBQ04sR0FBRyxFQUFFLENBQUM7S0FDUDtDQUNGOzs7Ozs7Ozs7QUMzS0QscUJBQU1YLFFBQU0sR0FBRyxtRkFBbUYsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDOUcscUJBQU1DLGFBQVcsR0FBRyxpREFBaUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7O0FBRWpGLGtCQUFnQixHQUFXO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0NBQ3ZEOzs7Ozs7OztBQUVELHFCQUFtQixHQUFXLEVBQUUsYUFBc0IsRUFBRSxHQUFXLEVBQUUsUUFBaUI7SUFDcEYscUJBQU0sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFFekIsUUFBUSxHQUFHO1FBQ1QsS0FBSyxHQUFHOztZQUNOLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxJQUFJLFlBQVksR0FBRyxlQUFlLENBQUM7UUFDdEUsS0FBSyxJQUFJOztZQUNQLElBQUksYUFBYSxJQUFJLFFBQVEsRUFBRTtnQkFDN0IsT0FBTyxNQUFNLElBQUlTLFFBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDLENBQUM7YUFDdEQ7aUJBQ0k7Z0JBQ0gsT0FBTyxNQUFNLEdBQUcsV0FBVyxDQUFDO2FBQzdCOztRQUVILEtBQUssR0FBRzs7WUFDTixPQUFPLGFBQWEsR0FBRyxRQUFRLElBQUksUUFBUSxHQUFHLFFBQVEsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUN0RSxLQUFLLElBQUk7O1lBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO2dCQUM3QixPQUFPLE1BQU0sSUFBSUEsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQzthQUNwRDtpQkFDSTtnQkFDSCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUM7YUFDNUI7O1FBRUgsS0FBSyxHQUFHOztZQUNOLE9BQU8sYUFBYSxHQUFHLFFBQVEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUssSUFBSTs7WUFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDO2FBQ3BEO2lCQUNJO2dCQUNILE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQzthQUM1Qjs7UUFFSCxLQUFLLEdBQUc7O1lBQ04sT0FBTyxDQUFDLGFBQWEsSUFBSSxRQUFRLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUN0RCxLQUFLLElBQUk7O1lBQ1AsSUFBSSxhQUFhLElBQUksUUFBUSxFQUFFO2dCQUM3QixPQUFPLE1BQU0sSUFBSUEsUUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQzthQUMvQztpQkFDSTtnQkFDSCxPQUFPLE1BQU0sR0FBRyxPQUFPLENBQUM7YUFDekI7O1FBRUgsS0FBSyxHQUFHOztZQUNOLE9BQU8sQ0FBQyxhQUFhLElBQUksUUFBUSxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDN0QsS0FBSyxJQUFJOztZQUNQLElBQUksYUFBYSxJQUFJLFFBQVEsRUFBRTtnQkFDN0IsT0FBTyxNQUFNLElBQUlBLFFBQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsVUFBVSxDQUFDLENBQUM7YUFDeEQ7aUJBQ0k7Z0JBQ0gsT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDO2FBQzVCOztRQUVILEtBQUssR0FBRzs7WUFDTixPQUFPLENBQUMsYUFBYSxJQUFJLFFBQVEsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3ZELEtBQUssSUFBSTs7WUFDUCxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7Z0JBQzdCLE9BQU8sTUFBTSxJQUFJQSxRQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDO2FBQ2xEO2lCQUNJO2dCQUNILE9BQU8sTUFBTSxHQUFHLE9BQU8sQ0FBQzthQUN6QjtLQUVKO0NBQ0Y7QUFFRCxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLFVBQUE7SUFDTixXQUFXLGVBQUE7SUFDWCxRQUFRLEVBQUUscURBQXFELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRSxhQUFhLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsTUFBTTtRQUNWLEdBQUcsRUFBRSxTQUFTO1FBQ2QsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsY0FBYztRQUNsQixHQUFHLEVBQUUsbUJBQW1CO1FBQ3hCLElBQUksRUFBRSx3QkFBd0I7UUFDOUIsQ0FBQyxFQUFFLFlBQVk7S0FDaEI7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsYUFBYTtRQUN0QixPQUFPLEVBQUUsZUFBZTtRQUN4QixRQUFROzs7O1FBQVIsVUFBUyxJQUFVO1lBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO29CQUNKLE9BQU8saUJBQWlCLENBQUM7Z0JBQzNCLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixPQUFPLGlCQUFpQixDQUFDO2dCQUMzQixLQUFLLENBQUM7b0JBQ0osT0FBTyxpQkFBaUIsQ0FBQztnQkFDM0IsS0FBSyxDQUFDO29CQUNKLE9BQU8sbUJBQW1CLENBQUM7Z0JBQzdCLEtBQUssQ0FBQztvQkFDSixPQUFPLGlCQUFpQixDQUFDO2dCQUMzQixLQUFLLENBQUM7b0JBQ0osT0FBTyxpQkFBaUIsQ0FBQzthQUM1QjtTQUNGO1FBQ0QsT0FBTyxFQUFFLGNBQWM7UUFDdkIsUUFBUTs7OztRQUFSLFVBQVMsSUFBVTtZQUNqQixRQUFRLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ3hCLEtBQUssQ0FBQztvQkFDSixPQUFPLHNCQUFzQixDQUFDO2dCQUNoQyxLQUFLLENBQUMsQ0FBQztnQkFDUCxLQUFLLENBQUM7b0JBQ0osT0FBTyxzQkFBc0IsQ0FBQztnQkFDaEMsS0FBSyxDQUFDO29CQUNKLE9BQU8sc0JBQXNCLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxDQUFDO2dCQUNQLEtBQUssQ0FBQztvQkFDSixPQUFPLHNCQUFzQixDQUFDO2dCQUNoQyxLQUFLLENBQUM7b0JBQ0osT0FBTyxzQkFBc0IsQ0FBQzthQUNqQztTQUNGO1FBQ0QsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUVMLFdBQVM7UUFDWixFQUFFLEVBQUVBLFdBQVM7UUFDYixDQUFDLEVBQUVBLFdBQVM7UUFDWixFQUFFLEVBQUVBLFdBQVM7UUFDYixDQUFDLEVBQUVBLFdBQVM7UUFDWixFQUFFLEVBQUVBLFdBQVM7UUFDYixDQUFDLEVBQUVBLFdBQVM7UUFDWixFQUFFLEVBQUVBLFdBQVM7UUFDYixDQUFDLEVBQUVBLFdBQVM7UUFDWixFQUFFLEVBQUVBLFdBQVM7UUFDYixDQUFDLEVBQUVBLFdBQVM7UUFDWixFQUFFLEVBQUVBLFdBQVM7S0FDZDtJQUNELHNCQUFzQixFQUFFLFdBQVc7SUFDbkMsT0FBTyxFQUFFLEtBQUs7SUFDZCxJQUFJLEVBQUU7UUFDSixHQUFHLEVBQUUsQ0FBQzs7UUFDTixHQUFHLEVBQUUsQ0FBQztLQUNQO0NBQ0Y7Ozs7Ozs7Ozs7Ozs7QUN0SkQsK0JBQTZCLE1BQWMsRUFBRSxhQUFzQixFQUFFLEdBQVcsRUFBRSxRQUFpQjtJQUNqRyxxQkFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUMxQixRQUFRLEdBQUc7UUFDVCxLQUFLLEdBQUc7WUFDTixPQUFPLGFBQWEsSUFBSSxRQUFRLEdBQUcsY0FBYyxHQUFHLGlCQUFpQixDQUFDO1FBQ3hFLEtBQUssSUFBSTtZQUNQLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDaEIsTUFBTSxJQUFJLGFBQWEsR0FBRyxTQUFTLEdBQUcsU0FBUyxDQUFDO2FBQ2pEO2lCQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsU0FBUyxHQUFHLFVBQVUsQ0FBQzthQUM5RDtpQkFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMzRDtZQUNELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLEtBQUssR0FBRztZQUNOLE9BQU8sYUFBYSxHQUFHLFlBQVksR0FBRyxZQUFZLENBQUM7UUFDckQsS0FBSyxJQUFJO1lBQ1AsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixNQUFNLElBQUksYUFBYSxHQUFHLFFBQVEsR0FBRyxRQUFRLENBQUM7YUFDL0M7aUJBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO2FBQzdEO2lCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQzthQUM3RDtpQkFBTTtnQkFDTCxNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsS0FBSyxHQUFHO1lBQ04sT0FBTyxhQUFhLEdBQUcsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMvQyxLQUFLLElBQUk7WUFDUCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxhQUFhLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN6QztpQkFBTSxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7YUFDdkQ7aUJBQU0sSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUNyQixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxLQUFLLEdBQUcsT0FBTyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7YUFDdEQ7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixLQUFLLEdBQUc7WUFDTixPQUFPLGFBQWEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1RCxLQUFLLElBQUk7WUFDUCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7YUFDdEQ7aUJBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPLENBQUM7YUFDdkQ7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixLQUFLLEdBQUc7WUFDTixPQUFPLGFBQWEsSUFBSSxRQUFRLEdBQUcsVUFBVSxHQUFHLGNBQWMsQ0FBQztRQUNqRSxLQUFLLElBQUk7WUFDUCxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLE9BQU8sR0FBRyxTQUFTLENBQUM7YUFDM0Q7aUJBQU0sSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN2QixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxRQUFRLEdBQUcsVUFBVSxDQUFDO2FBQzdEO2lCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDckIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsUUFBUSxHQUFHLFFBQVEsQ0FBQzthQUMzRDtpQkFBTTtnQkFDTCxNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxTQUFTLEdBQUcsUUFBUSxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsS0FBSyxHQUFHO1lBQ04sT0FBTyxhQUFhLElBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxZQUFZLENBQUM7UUFDL0QsS0FBSyxJQUFJO1lBQ1AsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUNoQixNQUFNLElBQUksYUFBYSxJQUFJLFFBQVEsR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO2FBQ3hEO2lCQUFNLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDdkIsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQzthQUN6RDtpQkFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxhQUFhLElBQUksUUFBUSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsTUFBTSxJQUFJLGFBQWEsSUFBSSxRQUFRLEdBQUcsS0FBSyxHQUFHLE1BQU0sQ0FBQzthQUN0RDtZQUNELE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0NBQ0Y7QUFFRCxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRyxXQUFXLEVBQUUsNkRBQTZELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNyRixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxxREFBcUQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFFLGFBQWEsRUFBRSxvQ0FBb0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlELFdBQVcsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzlDLGtCQUFrQixFQUFFLElBQUk7SUFDeEIsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE1BQU07UUFDVixHQUFHLEVBQUUsU0FBUztRQUNkLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGNBQWM7UUFDbEIsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixJQUFJLEVBQUUseUJBQXlCO0tBQ2hDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGVBQWU7UUFDeEIsT0FBTyxFQUFFLGVBQWU7UUFFeEIsUUFBUTs7OztrQkFBQyxJQUFVO1lBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO29CQUNKLE9BQU8sdUJBQXVCLENBQUM7Z0JBQ2pDLEtBQUssQ0FBQztvQkFDSixPQUFPLHFCQUFxQixDQUFDO2dCQUMvQixLQUFLLENBQUM7b0JBQ0osT0FBTyxzQkFBc0IsQ0FBQztnQkFDaEMsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDO29CQUNKLE9BQU8sa0JBQWtCLENBQUM7YUFDN0I7U0FDRjtRQUNELE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUTs7OztrQkFBQyxJQUFVO1lBQ2pCLFFBQVEsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDeEIsS0FBSyxDQUFDO29CQUNKLE9BQU8sOEJBQThCLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQztvQkFDSixPQUFPLDRCQUE0QixDQUFDO2dCQUN0QyxLQUFLLENBQUM7b0JBQ0osT0FBTyw2QkFBNkIsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDO29CQUNKLE9BQU8seUJBQXlCLENBQUM7YUFDcEM7U0FDRjtRQUNELFFBQVEsRUFBRSxHQUFHO0tBQ2Q7SUFDRCxZQUFZLEVBQUU7UUFDWixNQUFNLEVBQUUsUUFBUTtRQUNoQixJQUFJLEVBQUUsU0FBUztRQUNmLENBQUMsRUFBRU8scUJBQW1CO1FBQ3RCLEVBQUUsRUFBRUEscUJBQW1CO1FBQ3ZCLENBQUMsRUFBRUEscUJBQW1CO1FBQ3RCLEVBQUUsRUFBRUEscUJBQW1CO1FBQ3ZCLENBQUMsRUFBRUEscUJBQW1CO1FBQ3RCLEVBQUUsRUFBRUEscUJBQW1CO1FBQ3ZCLENBQUMsRUFBRUEscUJBQW1CO1FBQ3RCLEVBQUUsRUFBRUEscUJBQW1CO1FBQ3ZCLENBQUMsRUFBRUEscUJBQW1CO1FBQ3RCLEVBQUUsRUFBRUEscUJBQW1CO1FBQ3ZCLENBQUMsRUFBRUEscUJBQW1CO1FBQ3RCLEVBQUUsRUFBRUEscUJBQW1CO0tBQ3hCO0lBQ0Qsc0JBQXNCLEVBQUUsV0FBVztJQUNuQyxPQUFPLEVBQUUsS0FBSztJQUNkLElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7Ozs7OztBQ2hLRCxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsdUZBQXVGLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRyxXQUFXLEVBQUUsaURBQWlELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN6RSxRQUFRLEVBQUUsbURBQW1ELENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RSxhQUFhLEVBQUUsNkJBQTZCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2RCxXQUFXLEVBQUUsc0JBQXNCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM5QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsYUFBYTtRQUNqQixHQUFHLEVBQUUseUJBQXlCO1FBQzlCLElBQUksRUFBRSw4QkFBOEI7UUFDcEMsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixJQUFJLEVBQUUsc0JBQXNCO0tBQzdCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLFdBQVc7UUFDcEIsT0FBTyxFQUFFLGNBQWM7UUFDdkIsT0FBTyxFQUFFLFdBQVc7UUFDcEIsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLGdCQUFnQjtRQUMxQixRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsY0FBYztRQUNwQixDQUFDLEVBQUUsZ0JBQWdCO1FBQ25CLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLFVBQVU7UUFDYixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxZQUFZO1FBQ2hCLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLE9BQU87S0FDWjtJQUNELHNCQUFzQixFQUFFLGNBQWM7SUFDdEMsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLHFCQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRTtRQUNkLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHO1lBQ3ZDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHO2dCQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHO29CQUNiLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQzlCLE9BQU8sR0FBRyxHQUFHLE1BQU0sQ0FBQztLQUNyQjtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7OztBQ3ZERCxxQkFBYSxRQUFRLEdBQWU7SUFDbEMsSUFBSSxFQUFFLElBQUk7SUFDVixNQUFNLEVBQUUsbUdBQW1HLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN0SCxXQUFXLEVBQUUsZ0VBQWdFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN4RixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLFFBQVEsRUFBRSxnREFBZ0QsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3JFLGFBQWEsRUFBRSw2Q0FBNkMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztJQUN2RSxXQUFXLEVBQUUsd0JBQXdCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUNoRCxrQkFBa0IsRUFBRSxJQUFJO0lBQ3hCLGNBQWMsRUFBRTtRQUNkLEVBQUUsRUFBRSxNQUFNO1FBQ1YsR0FBRyxFQUFFLFNBQVM7UUFDZCxDQUFDLEVBQUUsWUFBWTtRQUNmLEVBQUUsRUFBRSxhQUFhO1FBQ2pCLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsSUFBSSxFQUFFLGtDQUFrQztLQUN6QztJQUNELGFBQWEsRUFBRSx1QkFBdUI7SUFDdEMsSUFBSTs7OztjQUFDLEtBQUs7UUFDUixPQUFPLEtBQUssS0FBSyxZQUFZLENBQUM7S0FDL0I7SUFDRCxRQUFROzs7Ozs7Y0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE9BQU87UUFDNUIsSUFBSSxJQUFJLEdBQUcsRUFBRSxFQUFFO1lBQ2IsT0FBTyxZQUFZLENBQUM7U0FDckI7YUFBTTtZQUNMLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLE9BQU8sRUFBRSxvQkFBb0I7UUFDN0IsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixPQUFPLEVBQUUsdUJBQXVCO1FBQ2hDLFFBQVEsRUFBRSw0QkFBNEI7UUFDdEMsUUFBUSxFQUFFLEdBQUc7S0FDZDtJQUNELFlBQVksRUFBRTtRQUNaLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLElBQUksRUFBRSxXQUFXO1FBQ2pCLENBQUMsRUFBRSxjQUFjO1FBQ2pCLEVBQUUsRUFBRSxXQUFXO1FBQ2YsQ0FBQyxFQUFFLFFBQVE7UUFDWCxFQUFFLEVBQUUsU0FBUztRQUNiLENBQUMsRUFBRSxXQUFXO1FBQ2QsRUFBRSxFQUFFLFlBQVk7UUFDaEIsQ0FBQyxFQUFFLE9BQU87UUFDVixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxTQUFTO1FBQ1osRUFBRSxFQUFFLFVBQVU7UUFDZCxDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO0tBQ1o7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7QUNuREQscUJBQUksUUFBUSxHQUE4QjtJQUN4QyxDQUFDLEVBQUUsUUFBUTtJQUNYLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osQ0FBQyxFQUFFLE9BQU87SUFDVixDQUFDLEVBQUUsT0FBTztJQUNWLEVBQUUsRUFBRSxPQUFPO0lBQ1gsRUFBRSxFQUFFLE9BQU87SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLENBQUMsRUFBRSxRQUFRO0lBQ1gsR0FBRyxFQUFFLFFBQVE7SUFDYixDQUFDLEVBQUUsT0FBTztJQUNWLENBQUMsRUFBRSxRQUFRO0lBQ1gsRUFBRSxFQUFFLFFBQVE7SUFDWixFQUFFLEVBQUUsUUFBUTtJQUNaLEVBQUUsRUFBRSxRQUFRO0lBQ1osRUFBRSxFQUFFLFFBQVE7Q0FDYixDQUFDO0FBRUYscUJBQWEsUUFBUSxHQUFlO0lBQ2xDLElBQUksRUFBRSxJQUFJO0lBQ1YsTUFBTSxFQUFFLDRFQUE0RSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDL0YsV0FBVyxFQUFFLGlEQUFpRCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDekUsUUFBUSxFQUFFLHVEQUF1RCxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDNUUsYUFBYSxFQUFFLDZCQUE2QixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDdkQsV0FBVyxFQUFFLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDOUMsY0FBYyxFQUFFO1FBQ2QsRUFBRSxFQUFFLE9BQU87UUFDWCxHQUFHLEVBQUUsVUFBVTtRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLGFBQWE7UUFDakIsR0FBRyxFQUFFLG1CQUFtQjtRQUN4QixJQUFJLEVBQUUseUJBQXlCO0tBQ2hDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSwwQkFBMEI7UUFDcEMsT0FBTyxFQUFFLFVBQVU7UUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLFVBQVU7UUFDbEIsSUFBSSxFQUFFLFNBQVM7UUFDZixDQUFDLEVBQUUsZUFBZTtRQUNsQixFQUFFLEVBQUUsV0FBVztRQUNmLENBQUMsRUFBRSxZQUFZO1FBQ2YsRUFBRSxFQUFFLFdBQVc7UUFDZixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxTQUFTO1FBQ2IsQ0FBQyxFQUFFLFNBQVM7UUFDWixFQUFFLEVBQUUsUUFBUTtRQUNaLENBQUMsRUFBRSxRQUFRO1FBQ1gsRUFBRSxFQUFFLE9BQU87UUFDWCxDQUFDLEVBQUUsU0FBUztRQUNaLEVBQUUsRUFBRSxRQUFRO0tBQ2I7SUFDRCxzQkFBc0IsRUFBRSx1Q0FBdUM7SUFDL0QsT0FBTzs7OztJQUFQLFVBQVEsSUFBWTtRQUNsQixxQkFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksR0FBRyxLQUFLLENBQUMsRUFBRTs7WUFDYixPQUFPLEdBQUcsR0FBRyxRQUFRLENBQUM7U0FDdkI7UUFDRCxxQkFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUU7UUFDZCxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2pCLENBQUMsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUM7UUFDOUIsT0FBTyxHQUFHLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMxRDtJQUNELElBQUksRUFBRTtRQUNKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7O0FDMUVELHFCQUFhLFVBQVUsR0FBZTtJQUNwQyxJQUFJLEVBQUUsT0FBTztJQUNiLE1BQU0sRUFBRSx1Q0FBdUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELFdBQVcsRUFBRSx3Q0FBd0MsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hFLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2xELGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ2hELFdBQVcsRUFBRSxlQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUN2QyxjQUFjLEVBQUU7UUFDZCxFQUFFLEVBQUUsT0FBTztRQUNYLEdBQUcsRUFBRSxVQUFVO1FBQ2YsQ0FBQyxFQUFFLFlBQVk7UUFDZixFQUFFLEVBQUUsV0FBVztRQUNmLEdBQUcsRUFBRSxpQkFBaUI7UUFDdEIsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixDQUFDLEVBQUUsVUFBVTtRQUNiLEVBQUUsRUFBRSxXQUFXO1FBQ2YsR0FBRyxFQUFFLGlCQUFpQjtRQUN0QixJQUFJLEVBQUUscUJBQXFCO0tBQzVCO0lBQ0QsYUFBYSxFQUFFLG1CQUFtQjtJQUNsQyxZQUFZOzs7OztjQUFDLElBQUksRUFBRSxRQUFRO1FBQ3pCLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRTtZQUNmLElBQUksR0FBRyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksUUFBUSxLQUFLLElBQUksSUFBSSxRQUFRLEtBQUssSUFBSTtZQUN4QyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQ25CLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLFFBQVEsS0FBSyxJQUFJLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNqRCxPQUFPLElBQUksR0FBRyxFQUFFLENBQUM7U0FDbEI7YUFBTTs7WUFFTCxPQUFPLElBQUksSUFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7U0FDdEM7S0FDRjtJQUNELFFBQVE7Ozs7OztjQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTztRQUM1QixxQkFBSSxFQUFFLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7UUFDN0IsSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksRUFBRSxHQUFHLEdBQUcsRUFBRTtZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFO1lBQ3BCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUU7WUFDcEIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNLElBQUksRUFBRSxHQUFHLElBQUksRUFBRTtZQUNwQixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFDRCxRQUFRLEVBQUU7UUFDUixPQUFPLEVBQUUsUUFBUTtRQUNqQixPQUFPLEVBQUUsUUFBUTtRQUNqQixRQUFRLEVBQUUsV0FBVztRQUNyQixPQUFPLEVBQUUsUUFBUTtRQUNqQixRQUFRLEVBQUUsV0FBVztRQUNyQixRQUFRLEVBQUUsR0FBRztLQUNkO0lBQ0Qsc0JBQXNCLEVBQUUsZ0JBQWdCO0lBQ3hDLE9BQU87Ozs7O2NBQUMsSUFBWSxFQUFFLE1BQU07UUFDMUIscUJBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixRQUFRLE1BQU07WUFDWixLQUFLLEdBQUcsQ0FBQztZQUNULEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxLQUFLO2dCQUNSLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFLLEdBQUc7Z0JBQ04sT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ25CLEtBQUssR0FBRyxDQUFDO1lBQ1QsS0FBSyxHQUFHO2dCQUNOLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUNuQjtnQkFDRSxPQUFPLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN6QjtLQUNGO0lBQ0QsWUFBWSxFQUFFO1FBQ1osTUFBTSxFQUFFLEtBQUs7UUFDYixJQUFJLEVBQUUsS0FBSztRQUNYLENBQUMsRUFBRSxJQUFJO1FBQ1AsRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO1FBQ1gsQ0FBQyxFQUFFLE1BQU07UUFDVCxFQUFFLEVBQUUsT0FBTztRQUNYLENBQUMsRUFBRSxLQUFLO1FBQ1IsRUFBRSxFQUFFLE1BQU07UUFDVixDQUFDLEVBQUUsTUFBTTtRQUNULEVBQUUsRUFBRSxPQUFPO1FBQ1gsQ0FBQyxFQUFFLEtBQUs7UUFDUixFQUFFLEVBQUUsTUFBTTtLQUNYO0lBQ0QsSUFBSSxFQUFFOztRQUVKLEdBQUcsRUFBRSxDQUFDOztRQUNOLEdBQUcsRUFBRSxDQUFDO0tBQ1A7Q0FDRjs7Ozs7Ozs7Ozs7Ozs7In0=