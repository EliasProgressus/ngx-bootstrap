(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/chronos', ['exports'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].chronos = {})));
}(this, (function (exports) { 'use strict';

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
            if (offset === void 0) {
                offset = 0;
            }
            var /** @type {?} */ output = '';
            for (var /** @type {?} */ j = 0; j < length; j++) {
                output += isFunction(formatArr[j])
                    ? ((formatArr[j])).call(null, date, { format: format, locale: locale, isUTC: isUTC, offset: offset })
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
        if (m === void 0) {
            m = 0;
        }
        if (d === void 0) {
            d = 1;
        }
        if (h === void 0) {
            h = 0;
        }
        if (M === void 0) {
            M = 0;
        }
        if (s === void 0) {
            s = 0;
        }
        if (ms === void 0) {
            ms = 0;
        }
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
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCHours() : date.getHours();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMinutes(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMinutes() : date.getMinutes();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getSeconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCSeconds() : date.getSeconds();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMilliseconds(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
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
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDay() : date.getDay();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getDate(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCDate() : date.getDate();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getMonth(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
        return isUTC ? date.getUTCMonth() : date.getMonth();
    }
    /**
     * @param {?} date
     * @param {?=} isUTC
     * @return {?}
     */
    function getFullYear(date, isUTC) {
        if (isUTC === void 0) {
            isUTC = false;
        }
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
    var Locale = (function () {
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
                    var /** @type {?} */ prop = config[(confKey)];
                    var /** @type {?} */ key = ((isFunction(prop) ? confKey : "_" + confKey));
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
             */ function () {
                return this._invalidDate;
            },
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
                if (isUTC === void 0) {
                    isUTC = false;
                }
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
                if (isUTC === void 0) {
                    isUTC = false;
                }
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
                    if (strict && format === 'MMMM' && ((this._longMonthsParse[i])).test(monthName)) {
                        return i;
                    }
                    if (strict && format === 'MMM' && ((this._shortMonthsParse[i])).test(monthName)) {
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
                        ii = ((this._shortMonthsParse)).indexOf(llc);
                        return ii !== -1 ? ii : null;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                if (format === 'MMM') {
                    ii = ((this._shortMonthsParse)).indexOf(llc);
                    if (ii !== -1) {
                        return ii;
                    }
                    ii = ((this._longMonthsParse)).indexOf(llc);
                    return ii !== -1 ? ii : null;
                }
                ii = ((this._longMonthsParse)).indexOf(llc);
                if (ii !== -1) {
                    return ii;
                }
                ii = ((this._shortMonthsParse)).indexOf(llc);
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
        if (locale === void 0) {
            locale = getLocale();
        }
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
        if (locale === void 0) {
            locale = getLocale();
        }
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
        if (isUTC === void 0) {
            isUTC = false;
        }
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
        if (config === void 0) {
            config = {};
        }
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
        if (config === void 0) {
            config = {};
        }
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
                isObject(parentConfig[(parentProp)])) {
                // make sure changes to properties don't modify parent config
                res[(parentProp)] = Object.assign({}, res[(parentProp)]);
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
             */ function (num) {
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
    var Duration = (function () {
        function Duration(duration, config) {
            if (config === void 0) {
                config = {};
            }
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
        if (offset === void 0) {
            offset = 0;
        }
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
        if (offset === void 0) {
            offset = 0;
        }
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
        if (units === void 0) {
            units = 'milliseconds';
        }
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
        if (units === void 0) {
            units = 'milliseconds';
        }
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
        if (units === void 0) {
            units = 'milliseconds';
        }
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
        if (config === void 0) {
            config = {};
        }
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
        if (locale === void 0) {
            locale = getLocale();
        }
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
        if (locale === void 0) {
            locale = getLocale();
        }
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
        if (locale === void 0) {
            locale = getLocale();
        }
        return (getDay(date, isUTC) + 7 - locale.firstDayOfWeek()) % 7;
    }
    /**
     * @param {?} date
     * @param {?} input
     * @param {?=} opts
     * @return {?}
     */
    function setLocaleDayOfWeek(date, input, opts) {
        if (opts === void 0) {
            opts = {};
        }
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
        if (opts === void 0) {
            opts = {};
        }
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
            return ((str)).replace(/%d/i, num.toString());
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
         */ function (input) {
            return 'م' === input;
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
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
         */ function (str) {
            return str.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (match) {
                return numberMap[match];
            }).replace(/،/g, ',');
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
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
            var /** @type {?} */ lastDigit = number % 10, /** @type {?} */ last2Digits = number % 100;
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
    var /** @type {?} */ monthsShortDot = 'gen._feb._mar._abr._mai._jun._jul._ago._set._oct._nov._des.'.split('_'), /** @type {?} */ monthsShort = 'ene_feb_mar_abr_mai_jun_jul_ago_set_oct_nov_des'.split('_');
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
         */ function (date, format, isUTC) {
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
             */ function (date) {
                return '[avui a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[dema a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ahir a ' + ('la' + (getHours(date) !== 1) ? 'les' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
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
         */ function (_num) {
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
             */ function (date) {
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
             */ function (date) {
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
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'th' :
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
    var /** @type {?} */ monthsShortDot$1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$2 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
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
         */ function (date, format, isUTC) {
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
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
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
    var /** @type {?} */ monthsShortDot$2 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.'.split('_'), /** @type {?} */ monthsShort$3 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split('_');
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
         */ function (date, format, isUTC) {
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
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
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
         */ function (date, format, isUTC) {
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
             */ function (date) {
                return '[hoy a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañana a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[ayer a la' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
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
    var /** @type {?} */ numbersPast = 'nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän'.split(' '), /** @type {?} */ numbersFuture = [
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
         */ function (_num, period) {
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
    var /** @type {?} */ monthsShortDot$4 = 'xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.'.split('_'), /** @type {?} */ monthsShort$5 = 'xan_feb_mar_abr_mai_xuñ_xul_ago_set_out_nov_dec'.split('_');
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
         */ function (date, format, isUTC) {
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
             */ function (date) {
                return '[hoxe á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[mañan á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            nextWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return 'dddd [á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastDay: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
                return '[onte á' + ((getHours(date) !== 1) ? 's' : '') + '] LT';
            },
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
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
             */ function (num) {
                if (num === 2) {
                    return 'שעתיים';
                }
                return num + ' שעות';
            },
            d: 'יום',
            dd: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'יומיים';
                }
                return num + ' ימים';
            },
            M: 'חודש',
            MM: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
                if (num === 2) {
                    return 'חודשיים';
                }
                return num + ' חודשים';
            },
            y: 'שנה',
            yy: /**
             * @param {?} num
             * @return {?}
             */ function (num) {
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
         */ function (input) {
            return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
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
    }, /** @type {?} */ numberMap$1 = {
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
         */ function (str) {
            return str.replace(/[१२३४५६७८९०]/g, function (match) {
                return numberMap$1[match];
            });
        },
        postformat: /**
         * @param {?} str
         * @return {?}
         */ function (str) {
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
         */ function (hour, meridiem) {
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
         */ function (hour, minute, isLower) {
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
         */ function (input) {
            return input.charAt(1).toLowerCase() === 'u';
        },
        meridiem: /**
         * @param {?} hours
         * @param {?} minutes
         * @param {?} isLower
         * @return {?}
         */ function (hours, minutes, isLower) {
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
             */ function (date) {
                return week(date, true);
            },
            lastDay: '[tegnap] LT[-kor]',
            lastWeek: /**
             * @param {?} date
             * @return {?}
             */ function (date) {
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
         */ function (hour, meridiem) {
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
         */ function (hours, minutes, isLower) {
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
             */ function (date) {
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
             */ function (num) {
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
         */ function (input) {
            return input === '午後';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
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
         */ function (num, period) {
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
         */ function (num) {
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
         */ function (date, format, isUTC) {
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
         */ function (_num) {
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
    var /** @type {?} */ monthsShortWithDots$1 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.'.split('_'), /** @type {?} */ monthsShortWithoutDots$1 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split('_');
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
         */ function (date, format, isUTC) {
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
         */ function (_num) {
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
         */ function (date, format, isUTC) {
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
             */ function (date) {
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
             */ function (date) {
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
             */ function (date) {
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
             */ function (date, now) {
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
             */ function (date, now) {
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
         */ function (input) {
            return /^(дня|вечера)$/.test(input);
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
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
         */ function (_num, period) {
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
             */ function (date) {
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
             */ function (date) {
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
             */ function (date) {
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
             */ function (date) {
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
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            var /** @type {?} */ b = num % 10, /** @type {?} */ output = (~~(num % 100 / 10) === 1) ? 'e' :
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
         */ function (input) {
            return input === 'หลังเที่ยง';
        },
        meridiem: /**
         * @param {?} hour
         * @param {?} minute
         * @param {?} isLower
         * @return {?}
         */ function (hour, minute, isLower) {
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
         */ function (_num) {
            var /** @type {?} */ num = Number(_num);
            if (num === 0) {
                // special case for zero
                return num + '\'ıncı';
            }
            var /** @type {?} */ a = num % 10, /** @type {?} */ b = num % 100 - a, /** @type {?} */ c = num >= 100 ? 100 : null;
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
         */ function (hour, meridiem) {
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
         */ function (hour, minute, isLower) {
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
         */ function (_num, period) {
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

    exports.add = add;
    exports.subtract = subtract;
    exports.getDay = getDay;
    exports.isFirstDayOfWeek = isFirstDayOfWeek;
    exports.isSameYear = isSameYear;
    exports.isSameDay = isSameDay;
    exports.isSameMonth = isSameMonth;
    exports.getFullYear = getFullYear;
    exports.getFirstDayOfMonth = getFirstDayOfMonth;
    exports.getMonth = getMonth;
    exports.parseDate = parseDate;
    exports.formatDate = formatDate;
    exports.listLocales = listLocales;
    exports.getLocale = getLocale;
    exports.updateLocale = updateLocale;
    exports.defineLocale = defineLocale;
    exports.getSetGlobalLocale = getSetGlobalLocale;
    exports.isAfter = isAfter;
    exports.isBefore = isBefore;
    exports.isDisabledDay = isDisabledDay;
    exports.isSame = isSame;
    exports.isArray = isArray;
    exports.isDateValid = isDateValid;
    exports.isDate = isDate;
    exports.shiftDate = shiftDate;
    exports.setFullDate = setFullDate;
    exports.endOf = endOf;
    exports.startOf = startOf;
    exports.arLocale = arLocale;
    exports.bgLocale = bgLocale;
    exports.caLocale = caLocale;
    exports.csLocale = csLocale;
    exports.daLocale = daLocale;
    exports.deLocale = deLocale;
    exports.enGbLocale = enGbLocale;
    exports.esDoLocale = esDoLocale;
    exports.esLocale = esLocale;
    exports.esUsLocale = esUsLocale;
    exports.fiLocale = fiLocale;
    exports.frLocale = frLocale;
    exports.glLocale = glLocale;
    exports.heLocale = heLocale;
    exports.hiLocale = hiLocale;
    exports.huLocale = huLocale;
    exports.idLocale = idLocale;
    exports.itLocale = itLocale;
    exports.jaLocale = jaLocale;
    exports.koLocale = koLocale;
    exports.ltLocale = ltLocale;
    exports.mnLocale = mnLocale;
    exports.nbLocale = nbLocale;
    exports.nlBeLocale = nlBeLocale;
    exports.nlLocale = nlLocale;
    exports.plLocale = plLocale;
    exports.ptBrLocale = ptBrLocale;
    exports.roLocale = roLocale;
    exports.ruLocale = ruLocale;
    exports.skLocale = skLocale;
    exports.slLocale = slLocale;
    exports.svLocale = svLocale;
    exports.thLocale = thLocale;
    exports.trLocale = trLocale;
    exports.zhCnLocale = zhCnLocale;
    exports.ɵa = createDate;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1jaHJvbm9zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3V0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvdHlwZS1jaGVja3MudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9hbGlhc2VzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvY29uc3RhbnRzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvemVyby1maWxsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZm9ybWF0L2Zvcm1hdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9kYXRlLWdldHRlcnMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9wYXJzZS9yZWdleC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3BhcnNlL3Rva2VuLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvcHJpb3JpdGllcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2RheS1vZi1tb250aC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9wYXJzaW5nLWZsYWdzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMveWVhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL21vbnRoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGF0ZS1zZXR0ZXJzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Nsb25lLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvc3RhcnQtZW5kLW9mLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdW5pdHMvZGF5LW9mLXllYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbG9jYWxlL2xvY2FsZS5jbGFzcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2xvY2FsZS9sb2NhbGUuZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91dGlscy9jb21wYXJlLWFycmF5cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3dlZWsudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy93ZWVrLXllYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy90aW1lem9uZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3RpbWVzdGFtcC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3NlY29uZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL3F1YXJ0ZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9vZmZzZXQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9taW51dGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy91bml0cy9taWxsaXNlY29uZC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2hvdXIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9sb2NhbGUvbG9jYWxlcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL3ZhbGlkLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvYWJzLWNlaWwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9idWJibGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9kdXJhdGlvbi9odW1hbml6ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2R1cmF0aW9uL2NvbnN0cnVjdG9yLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL3ZhbGlkLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGVmYXVsdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9jcmVhdGUvZnJvbS1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9jaGVjay1vdmVyZmxvdy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLXN0cmluZy1hbmQtZm9ybWF0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1hcnJheS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLW9iamVjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2NyZWF0ZS9mcm9tLWFueXRoaW5nLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvY3JlYXRlL2xvY2FsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvYWJzLXJvdW5kLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvdXRpbHMvZGF0ZS1jb21wYXJlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvZHVyYXRpb24vY3JlYXRlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvbW9tZW50L2FkZC1zdWJ0cmFjdC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL3VuaXRzL2RheS1vZi13ZWVrLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9hci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vYmcudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2NhLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9jcy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZGEudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2RlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lbi1nYi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZXMtZG8udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2VzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9lcy11cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vZmkudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2ZyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9nbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaGUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2hpLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9odS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vaWQudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2l0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9qYS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4va28udHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL2x0LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9tbi50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vbmIudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL25sLWJlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9ubC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcGwudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3B0LWJyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9yby50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vcnUudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3NrLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi9zbC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vc3YudHMiLCJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy9pMThuL3RoLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvaTE4bi90ci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zL2kxOG4vemgtY24udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9kKG46IG51bWJlciwgeDogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gKG4gJSB4ICsgeCkgJSB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWJzRmxvb3IobnVtOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBudW0gPCAwID8gTWF0aC5jZWlsKG51bSkgfHwgMCA6IE1hdGguZmxvb3IobnVtKTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcoc3RyOiBhbnkpOiBzdHIgaXMgc3RyaW5nIHtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUodmFsdWU6IGFueSk6IHZhbHVlIGlzIERhdGUge1xyXG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBib29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlVmFsaWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBkYXRlICYmIGRhdGUuZ2V0VGltZSAmJiAhaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGdW5jdGlvbihmbjogYW55KTogZm4gaXMgRnVuY3Rpb24ge1xyXG4gIHJldHVybiAoXHJcbiAgICBmbiBpbnN0YW5jZW9mIEZ1bmN0aW9uIHx8XHJcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZm4pID09PSAnW29iamVjdCBGdW5jdGlvbl0nXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlPzogYW55KTogdmFsdWUgaXMgbnVtYmVyIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBOdW1iZXJdJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXJyYXk8VD4oaW5wdXQ/OiBhbnkpOiBpbnB1dCBpcyBUW10ge1xyXG4gIHJldHVybiAoXHJcbiAgICBpbnB1dCBpbnN0YW5jZW9mIEFycmF5IHx8XHJcbiAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBBcnJheV0nXHJcbiAgKTtcclxufVxyXG5cclxuLy8gVE9ETzogcmV0dXJuZWQgdHlwZSBzaG91bGQgYmUgY2hhbmdlZCB0byBcImIgaXMgRXh0cmFjdDxrZXlvZiBULCBzdHJpbmc+XCJcclxuLy8gYWZ0ZXIgdXBkYXRlIHRvIHR5cGVzY3JpcHQgMy4xLjEgKGlzc3VlIDQ3MjgpXHJcbmV4cG9ydCBmdW5jdGlvbiBoYXNPd25Qcm9wPFQ+KGE6IFQgLypvYmplY3QqLywgYjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0PFQ+KGlucHV0OiBhbnkgLypvYmplY3QqLyk6IGlucHV0IGlzIFQge1xyXG4gIC8vIElFOCB3aWxsIHRyZWF0IHVuZGVmaW5lZCBhbmQgbnVsbCBhcyBvYmplY3QgaWYgaXQgd2Fzbid0IGZvclxyXG4gIC8vIGlucHV0ICE9IG51bGxcclxuICByZXR1cm4gKFxyXG4gICAgaW5wdXQgIT0gbnVsbCAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoaW5wdXQpID09PSAnW29iamVjdCBPYmplY3RdJ1xyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc09iamVjdEVtcHR5KG9iajogYW55KTogYm9vbGVhbiB7XHJcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKSB7XHJcbiAgICByZXR1cm4gKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG9iaikubGVuZ3RoID09PSAwKTtcclxuICB9XHJcbiAgbGV0IGs7XHJcbiAgZm9yIChrIGluIG9iaikge1xyXG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChpbnB1dDogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGlucHV0ID09PSB2b2lkIDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b0ludDxUPihhcmd1bWVudEZvckNvZXJjaW9uOiBzdHJpbmcgfCBudW1iZXIgfCBUKTogbnVtYmVyIHtcclxuICBjb25zdCBjb2VyY2VkTnVtYmVyID0gK2FyZ3VtZW50Rm9yQ29lcmNpb247XHJcbiAgbGV0IHZhbHVlID0gMDtcclxuXHJcbiAgaWYgKGNvZXJjZWROdW1iZXIgIT09IDAgJiYgaXNGaW5pdGUoY29lcmNlZE51bWJlcikpIHtcclxuICAgIHZhbHVlID0gYWJzRmxvb3IoY29lcmNlZE51bWJlcik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVPYmplY3QsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lIHwgJ2RhdGUnIHwgJ3dlZWsnIHwgJ2lzb1dlZWsnIHwgJ2RheU9mWWVhcicgfFxyXG4gICd3ZWVrZGF5JyB8ICdpc29XZWVrZGF5JyB8ICdzZWNvbmQnIHwgJ21pbGxpc2Vjb25kJyB8ICdtaW51dGUnIHwgJ2hvdXInIHwgJ3F1YXJ0ZXInIHwgJ3dlZWtZZWFyJyB8ICdpc29XZWVrWWVhcic7XHJcblxyXG5jb25zdCBfbWFwVW5pdHM6IHsgW2tleTogc3RyaW5nXTogVW5pdE9mVGltZSB9ID0ge1xyXG4gIGRhdGU6ICdkYXknLFxyXG4gIGhvdXI6ICdob3VycycsXHJcbiAgbWludXRlOiAnbWludXRlcycsXHJcbiAgc2Vjb25kOiAnc2Vjb25kcycsXHJcbiAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdEFsaWFzKHVuaXQ6IEV4dGVuZGVkVW5pdE9mVGltZSwgc2hvcnRoYW5kOiBzdHJpbmcpOiB2b2lkIHtcclxuICBjb25zdCBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XHJcbiAgbGV0IF91bml0ID0gdW5pdDtcclxuICBpZiAobG93ZXJDYXNlIGluIF9tYXBVbml0cykge1xyXG4gICAgX3VuaXQgPSBfbWFwVW5pdHNbbG93ZXJDYXNlXTtcclxuICB9XHJcbiAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tgJHtsb3dlckNhc2V9c2BdID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gX3VuaXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0czogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gIHJldHVybiBpc1N0cmluZyh1bml0cykgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldIDogdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3Q6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pOiBEYXRlT2JqZWN0IHtcclxuICBjb25zdCBub3JtYWxpemVkSW5wdXQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICBsZXQgbm9ybWFsaXplZFByb3A7XHJcbiAgbGV0IHByb3A7XHJcblxyXG4gIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xyXG4gICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XHJcbiAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XHJcbiAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dCBhcyBhbnk7XHJcbn1cclxuIiwiLy8gcGxhY2UgaW4gbmV3IERhdGUoW2FycmF5XSlcclxuZXhwb3J0IGNvbnN0IFlFQVIgPSAwO1xyXG5leHBvcnQgY29uc3QgTU9OVEggPSAxO1xyXG5leHBvcnQgY29uc3QgREFURSA9IDI7XHJcbmV4cG9ydCBjb25zdCBIT1VSID0gMztcclxuZXhwb3J0IGNvbnN0IE1JTlVURSA9IDQ7XHJcbmV4cG9ydCBjb25zdCBTRUNPTkQgPSA1O1xyXG5leHBvcnQgY29uc3QgTUlMTElTRUNPTkQgPSA2O1xyXG5leHBvcnQgY29uc3QgV0VFSyA9IDc7XHJcbmV4cG9ydCBjb25zdCBXRUVLREFZID0gODtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHplcm9GaWxsKG51bTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVuZ3RoOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZVNpZ24/OiBib29sZWFuKTogc3RyaW5nIHtcclxuICBjb25zdCBhYnNOdW1iZXIgPSBgJHtNYXRoLmFicyhudW0pfWA7XHJcbiAgY29uc3QgemVyb3NUb0ZpbGwgPSB0YXJnZXRMZW5ndGggLSBhYnNOdW1iZXIubGVuZ3RoO1xyXG4gIGNvbnN0IHNpZ24gPSBudW0gPj0gMDtcclxuICBjb25zdCBfc2lnbiA9IHNpZ24gPyAoZm9yY2VTaWduID8gJysnIDogJycpIDogJy0nO1xyXG4gIC8vIHRvZG86IHRoaXMgaXMgY3Jhenkgc2xvd1xyXG4gIGNvbnN0IF96ZXJvcyA9IE1hdGgucG93KDEwLCBNYXRoLm1heCgwLCB6ZXJvc1RvRmlsbCkpLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xyXG5cclxuICByZXR1cm4gKF9zaWduICsgX3plcm9zICsgYWJzTnVtYmVyKTtcclxufVxyXG4iLCJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xyXG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgRGF0ZUZvcm1hdHRlckZuIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGxldCBmb3JtYXRGdW5jdGlvbnM6IHtcclxuICBba2V5OiBzdHJpbmddOiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbn0gPSB7fTtcclxuZXhwb3J0IGxldCBmb3JtYXRUb2tlbkZ1bmN0aW9uczogeyBba2V5OiBzdHJpbmddOiBEYXRlRm9ybWF0dGVyRm4gfSA9IHt9O1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCBjb25zdCBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcclxuXHJcbi8vIHRva2VuOiAgICAnTSdcclxuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxyXG4vLyBvcmRpbmFsOiAgJ01vJ1xyXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkZWQ6IFtzdHJpbmcsIG51bWJlciwgYm9vbGVhbl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogRGF0ZUZvcm1hdHRlckZuKTogdm9pZCB7XHJcblxyXG4gIGlmICh0b2tlbikge1xyXG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBpZiAocGFkZGVkKSB7XHJcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB6ZXJvRmlsbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKG9yZGluYWwpIHtcclxuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm9yZGluYWwoY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKSwgdG9rZW4pO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0OiBzdHJpbmcpOlxyXG4gIChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQ/OiBudW1iZXIpID0+IHN0cmluZyB7XHJcblxyXG4gIGNvbnN0IGFycmF5OiBzdHJpbmdbXSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKTtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGZvcm1hdEFycjogc3RyaW5nW10gfCBEYXRlRm9ybWF0dGVyRm5bXSA9IG5ldyBBcnJheShsZW5ndGgpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3JtYXRBcnJbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cclxuICAgICAgPyBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cclxuICAgICAgOiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDOiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcclxuICAgIGxldCBvdXRwdXQgPSAnJztcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcclxuICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oZm9ybWF0QXJyW2pdKVxyXG4gICAgICAgID8gKGZvcm1hdEFycltqXSBhcyBEYXRlRm9ybWF0dGVyRm4pLmNhbGwobnVsbCwgZGF0ZSwge2Zvcm1hdCwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0fSlcclxuICAgICAgICA6IGZvcm1hdEFycltqXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gY3JlYXRlVVRDRGF0ZSh5PzogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtPzogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPzogbnVtYmVyKTogRGF0ZSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KG51bGwsIGFyZ3VtZW50cykpO1xyXG5cclxuICAvLyB0aGUgRGF0ZS5VVEMgZnVuY3Rpb24gcmVtYXBzIHllYXJzIDAtOTkgdG8gMTkwMC0xOTk5XHJcbiAgaWYgKHkgPCAxMDAgJiYgeSA+PSAwICYmIGlzRmluaXRlKGRhdGUuZ2V0VVRDRnVsbFllYXIoKSkpIHtcclxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoeT86IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbSA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGQgPSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBoID0gMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgTSA9IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHMgPSAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBtcyA9IDApOiBEYXRlIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoeSwgbSwgZCwgaCwgTSwgcywgbXMpO1xyXG5cclxuICAvLyB0aGUgZGF0ZSBjb25zdHJ1Y3RvciByZW1hcHMgeWVhcnMgMC05OSB0byAxOTAwLTE5OTlcclxuICBpZiAoeSA8IDEwMCAmJiB5ID49IDAgJiYgaXNGaW5pdGUoZGF0ZS5nZXRGdWxsWWVhcigpKSkge1xyXG4gICAgZGF0ZS5zZXRGdWxsWWVhcih5KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIb3VycyhkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcclxuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0hvdXJzKCkgOiBkYXRlLmdldEhvdXJzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW51dGVzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xyXG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDTWludXRlcygpIDogZGF0ZS5nZXRNaW51dGVzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmRzKGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xyXG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDU2Vjb25kcygpIDogZGF0ZS5nZXRTZWNvbmRzKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKSA6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5KGRhdGU6IERhdGUsIGlzVVRDID0gZmFsc2UpOiBudW1iZXIge1xyXG4gIHJldHVybiBpc1VUQyA/IGRhdGUuZ2V0VVRDRGF5KCkgOiBkYXRlLmdldERheSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZShkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcclxuICByZXR1cm4gaXNVVEMgPyBkYXRlLmdldFVUQ0RhdGUoKSA6IGRhdGUuZ2V0RGF0ZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENNb250aCgpIDogZGF0ZS5nZXRNb250aCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFllYXIoZGF0ZTogRGF0ZSwgaXNVVEMgPSBmYWxzZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzVVRDID8gZGF0ZS5nZXRVVENGdWxsWWVhcigpIDogZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VW5peFRpbWUoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS52YWx1ZU9mKCkgLyAxMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXgoZGF0ZTogRGF0ZSk6IG51bWJlciB7XHJcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGF0ZS52YWx1ZU9mKCkgLyAxMDAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0RGF5T2ZNb250aChkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgcmV0dXJuIGNyZWF0ZURhdGUoXHJcbiAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAxLFxyXG4gICAgZGF0ZS5nZXRIb3VycygpLFxyXG4gICAgZGF0ZS5nZXRNaW51dGVzKCksXHJcbiAgICBkYXRlLmdldFNlY29uZHMoKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5Nb250aChkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICByZXR1cm4gX2RheXNJbk1vbnRoKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9kYXlzSW5Nb250aCh5ZWFyOiBudW1iZXIsIG1vbnRoOiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBuZXcgRGF0ZShEYXRlLlVUQyh5ZWFyLCBtb250aCArIDEsIDApKS5nZXRVVENEYXRlKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGZpcnN0RGF5T2ZXZWVrOiBudW1iZXIpOiBib29sZWFuIHtcclxuICByZXR1cm4gZGF0ZS5nZXREYXkoKSA9PT0gZmlyc3REYXlPZldlZWs7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NhbWVNb250aChkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpIHtcclxuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlzU2FtZVllYXIoZGF0ZTEsIGRhdGUyKSAmJiBnZXRNb250aChkYXRlMSkgPT09IGdldE1vbnRoKGRhdGUyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZVllYXIoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XHJcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBnZXRGdWxsWWVhcihkYXRlMSkgPT09IGdldEZ1bGxZZWFyKGRhdGUyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZURheShkYXRlMTogRGF0ZSwgZGF0ZTI6IERhdGUpOiBib29sZWFuIHtcclxuICBpZiAoIWRhdGUxIHx8ICFkYXRlMikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGlzU2FtZVllYXIoZGF0ZTEsIGRhdGUyKSAmJlxyXG4gICAgaXNTYW1lTW9udGgoZGF0ZTEsIGRhdGUyKSAmJlxyXG4gICAgZ2V0RGF0ZShkYXRlMSkgPT09IGdldERhdGUoZGF0ZTIpXHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaDEgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxyXG5leHBvcnQgY29uc3QgbWF0Y2gyID0gL1xcZFxcZC87ICAgICAgICAgIC8vICAgICAgMDAgLSA5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2gzID0gL1xcZHszfS87ICAgICAgICAgLy8gICAgIDAwMCAtIDk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2g0ID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoNiA9IC9bKy1dP1xcZHs2fS87ICAgIC8vIC05OTk5OTkgLSA5OTk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMiA9IC9cXGRcXGQ/LzsgICAgICAgICAvLyAgICAgICAwIC0gOTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy87IC8vICAgOTk5OTkgLSA5OTk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMyA9IC9cXGR7MSwzfS87ICAgICAgIC8vICAgICAgIDAgLSA5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNCA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS87ICAvLyAtOTk5OTk5IC0gOTk5OTk5XHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcclxuZXhwb3J0IGNvbnN0IG1hdGNoU2lnbmVkID0gL1srLV0/XFxkKy87ICAgICAgLy8gICAgLWluZiAtIGluZlxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcclxuZXhwb3J0IGNvbnN0IG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naTsgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXHJcblxyXG4vLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cclxuLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuZXhwb3J0IGNvbnN0IG1hdGNoV29yZCA9IC9bMC05XXswLDI1Nn1bJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl17MSwyNTZ9fFtcXHUwNjAwLVxcdTA2RkZcXC9dezEsMjU2fShcXHMqP1tcXHUwNjAwLVxcdTA2RkZdezEsMjU2fSl7MSwyfS9pO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVnRXhwVG9rZW5GbiA9IChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpID0+IFJlZ0V4cDtcclxuY29uc3QgcmVnZXhlczoge1trZXk6IHN0cmluZ106IFJlZ0V4cFRva2VuRm59ID0ge307XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4odG9rZW46IHN0cmluZywgcmVnZXg6IFJlZ0V4cCB8IFJlZ0V4cFRva2VuRm4sIHN0cmljdFJlZ2V4PzogUmVnRXhwKTogdm9pZCB7XHJcbiAgaWYgKGlzRnVuY3Rpb24ocmVnZXgpKSB7XHJcbiAgICByZWdleGVzW3Rva2VuXSA9IHJlZ2V4O1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlZ2V4ZXNbdG9rZW5dID0gZnVuY3Rpb24gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkge1xyXG4gICAgcmV0dXJuIChpc1N0cmljdCAmJiBzdHJpY3RSZWdleCkgPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW46IHN0cmluZywgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xyXG4gIGNvbnN0IF9zdHJpY3QgPSBmYWxzZTtcclxuICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKF9zdHJpY3QsIGxvY2FsZSk7XHJcbn1cclxuXHJcbi8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcclxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHJldHVybiByZWdleEVzY2FwZShzdHJcclxuICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXHJcbiAgICAucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpID0+IHAxIHx8IHAyIHx8IHAzIHx8IHA0KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdleEVzY2FwZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZVBhcnNlVG9rZW5GbiB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IHRva2Vuczoge1trZXk6IHN0cmluZ106IERhdGVQYXJzZVRva2VuRm59ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuIHwgbnVtYmVyKSB7XHJcbiAgY29uc3QgX3Rva2VuID0gaXNTdHJpbmcodG9rZW4pID8gW3Rva2VuXSA6IHRva2VuO1xyXG4gIGxldCBmdW5jID0gY2FsbGJhY2s7XHJcblxyXG4gIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcclxuICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheTxzdHJpbmc+KF90b2tlbikgJiYgaXNGdW5jdGlvbihmdW5jKSkge1xyXG4gICAgbGV0IGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgX3Rva2VuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRva2Vuc1tfdG9rZW5baV1dID0gZnVuYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuKTogdm9pZCB7XHJcbiAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIF90b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xyXG5cclxuICAgIHJldHVybiBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIF90b2tlbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW46IHN0cmluZywgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XHJcbiAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG4iLCJjb25zdCBwcmlvcml0aWVzOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IHt9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRQcmlvcml0eSh1bml0OiBzdHJpbmcsIHByaW9yaXR5OiBudW1iZXIpOiB2b2lkIHtcclxuICBwcmlvcml0aWVzW3VuaXRdID0gcHJpb3JpdHk7XHJcbn1cclxuXHJcbi8qXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcmlvcml0aXplZFVuaXRzKHVuaXRzT2JqKSB7XHJcbiAgY29uc3QgdW5pdHMgPSBbXTtcclxuICBsZXQgdW5pdDtcclxuICBmb3IgKHVuaXQgaW4gdW5pdHNPYmopIHtcclxuICAgIGlmICh1bml0c09iai5oYXNPd25Qcm9wZXJ0eSh1bml0KSkge1xyXG4gICAgICB1bml0cy5wdXNoKHsgdW5pdCwgcHJpb3JpdHk6IHByaW9yaXRpZXNbdW5pdF0gfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHVuaXRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHVuaXRzO1xyXG59XHJcbiovXHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGdldERhdGUgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgREFURSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZNb250aCgpIHtcclxuLy8gRk9STUFUVElOR1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignRCcsIFsnREQnLCAyLCBmYWxzZV0sICdEbycsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXREYXRlKGRhdGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ2RhdGUnLCAnRCcpO1xyXG5cclxuLy8gUFJJT1JPSVRZXHJcbiAgYWRkVW5pdFByaW9yaXR5KCdkYXRlJywgOSk7XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ0QnLCBtYXRjaDF0bzIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0REJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0RvJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xyXG4gICAgcmV0dXJuIGxvY2FsZS5fZGF5T2ZNb250aE9yZGluYWxQYXJzZSB8fCBsb2NhbGUuX29yZGluYWxQYXJzZTtcclxuICB9KTtcclxuXHJcbiAgYWRkUGFyc2VUb2tlbihbJ0QnLCAnREQnXSwgREFURSk7XHJcbiAgYWRkUGFyc2VUb2tlbihcclxuICAgICdEbycsXHJcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgICBhcnJheVtEQVRFXSA9IHRvSW50KGlucHV0Lm1hdGNoKG1hdGNoMXRvMilbMF0pO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnLCBEYXRlUGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuXHJcbmZ1bmN0aW9uIGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTogRGF0ZVBhcnNpbmdGbGFncyB7XHJcbiAgLy8gV2UgbmVlZCB0byBkZWVwIGNsb25lIHRoaXMgb2JqZWN0LlxyXG4gIHJldHVybiB7XHJcbiAgICBlbXB0eTogZmFsc2UsXHJcbiAgICB1bnVzZWRUb2tlbnM6IFtdLFxyXG4gICAgdW51c2VkSW5wdXQ6IFtdLFxyXG4gICAgb3ZlcmZsb3c6IC0yLFxyXG4gICAgY2hhcnNMZWZ0T3ZlcjogMCxcclxuICAgIG51bGxJbnB1dDogZmFsc2UsXHJcbiAgICBpbnZhbGlkTW9udGg6IG51bGwsXHJcbiAgICBpbnZhbGlkRm9ybWF0OiBmYWxzZSxcclxuICAgIHVzZXJJbnZhbGlkYXRlZDogZmFsc2UsXHJcbiAgICBpc286IGZhbHNlLFxyXG4gICAgcGFyc2VkRGF0ZVBhcnRzOiBbXSxcclxuICAgIG1lcmlkaWVtOiBudWxsLFxyXG4gICAgcmZjMjgyMjogZmFsc2UsXHJcbiAgICB3ZWVrZGF5TWlzbWF0Y2g6IGZhbHNlXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcnNpbmdGbGFncyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdGbGFncyB7XHJcbiAgaWYgKGNvbmZpZy5fcGYgPT0gbnVsbCkge1xyXG4gICAgY29uZmlnLl9wZiA9IGRlZmF1bHRQYXJzaW5nRmxhZ3MoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWcuX3BmO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGdldEZ1bGxZZWFyIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDF0bzQsIG1hdGNoMXRvNiwgbWF0Y2gyLCBtYXRjaDQsIG1hdGNoNiwgbWF0Y2hTaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IFlFQVIgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbmZ1bmN0aW9uIGdldFllYXIoZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gIHJldHVybiBnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKS50b1N0cmluZygpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFllYXIoKSB7XHJcbiAgYWRkRm9ybWF0VG9rZW4oJ1knLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHkgPSBnZXRGdWxsWWVhcihkYXRlLCBvcHRzLmlzVVRDKTtcclxuXHJcbiAgICByZXR1cm4geSA8PSA5OTk5ID8geS50b1N0cmluZygxMCkgOiBgKyR7eX1gO1xyXG4gIH0pO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZJywgMiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgIHJldHVybiAoZ2V0RnVsbFllYXIoZGF0ZSwgb3B0cy5pc1VUQykgJSAxMDApLnRvU3RyaW5nKDEwKTtcclxuICB9KTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydZWVlZJywgNCwgZmFsc2VdLCBudWxsLCBnZXRZZWFyKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVlZJywgNSwgZmFsc2VdLCBudWxsLCBnZXRZZWFyKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1lZWVlZWScsIDYsIHRydWVdLCBudWxsLCBnZXRZZWFyKTtcclxuXHJcbiAgLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ3llYXInLCAneScpO1xyXG5cclxuICAvLyBQUklPUklUSUVTXHJcblxyXG4gIGFkZFVuaXRQcmlvcml0eSgneWVhcicsIDEpO1xyXG5cclxuICAvLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ1knLCBtYXRjaFNpZ25lZCk7XHJcbiAgYWRkUmVnZXhUb2tlbignWVknLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignWVlZWScsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcclxuICBhZGRSZWdleFRva2VuKCdZWVlZWScsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcclxuICBhZGRSZWdleFRva2VuKCdZWVlZWVknLCBtYXRjaDF0bzYsIG1hdGNoNik7XHJcblxyXG4gIGFkZFBhcnNlVG9rZW4oWydZWVlZWScsICdZWVlZWVknXSwgWUVBUik7XHJcbiAgYWRkUGFyc2VUb2tlbignWVlZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xyXG4gICAgYXJyYXlbWUVBUl0gPSBpbnB1dC5sZW5ndGggPT09IDIgPyBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCkgOiB0b0ludChpbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuICBhZGRQYXJzZVRva2VuKCdZWScsIGZ1bmN0aW9uIChpbnB1dCwgYXJyYXksIGNvbmZpZykge1xyXG4gICAgYXJyYXlbWUVBUl0gPSBwYXJzZVR3b0RpZ2l0WWVhcihpbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuICBhZGRQYXJzZVRva2VuKCdZJywgZnVuY3Rpb24gKGlucHV0LCBhcnJheSwgY29uZmlnKSB7XHJcbiAgICBhcnJheVtZRUFSXSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVHdvRGlnaXRZZWFyKGlucHV0OiBzdHJpbmcpOiBudW1iZXIge1xyXG4gIHJldHVybiB0b0ludChpbnB1dCkgKyAodG9JbnQoaW5wdXQpID4gNjggPyAxOTAwIDogMjAwMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXlzSW5ZZWFyKHllYXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgcmV0dXJuIGlzTGVhcFllYXIoeWVhcikgPyAzNjYgOiAzNjU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xlYXBZZWFyKHllYXI6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAoeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMCkgfHwgeWVhciAlIDQwMCA9PT0gMDtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBpc0xlYXBZZWFyIH0gZnJvbSAnLi95ZWFyJztcclxuaW1wb3J0IHsgbW9kIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyBNT05USCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG4vLyB0b2RvOiB0aGlzIGlzIGR1cGxpY2F0ZSwgc291cmNlIGluIGRhdGUtZ2V0dGVycy50c1xyXG5leHBvcnQgZnVuY3Rpb24gZGF5c0luTW9udGgoeWVhcjogbnVtYmVyLCBtb250aDogbnVtYmVyKTogbnVtYmVyIHtcclxuICBpZiAoaXNOYU4oeWVhcikgfHwgaXNOYU4obW9udGgpKSB7XHJcbiAgICByZXR1cm4gTmFOO1xyXG4gIH1cclxuICBjb25zdCBtb2RNb250aCA9IG1vZChtb250aCwgMTIpO1xyXG4gIGNvbnN0IF95ZWFyID0geWVhciArIChtb250aCAtIG1vZE1vbnRoKSAvIDEyO1xyXG5cclxuICByZXR1cm4gbW9kTW9udGggPT09IDFcclxuICAgID8gaXNMZWFwWWVhcihfeWVhcikgPyAyOSA6IDI4XHJcbiAgICA6ICgzMSAtIG1vZE1vbnRoICUgNyAlIDIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1vbnRoKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdNJywgWydNTScsIDIsIGZhbHNlXSwgJ01vJyxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNb250aChkYXRlLCBvcHRzLmlzVVRDKSArIDEpLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignTU1NJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm1vbnRoc1Nob3J0KGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignTU1NTScsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5tb250aHMoZGF0ZSwgb3B0cy5mb3JtYXQsIG9wdHMuaXNVVEMpO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ21vbnRoJywgJ00nKTtcclxuXHJcbi8vIFBSSU9SSVRZXHJcblxyXG4gIGFkZFVuaXRQcmlvcml0eSgnbW9udGgnLCA4KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignTScsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignTU0nLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignTU1NJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xyXG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcclxuICB9KTtcclxuICBhZGRSZWdleFRva2VuKCdNTU1NJywgZnVuY3Rpb24oaXNTdHJpY3QsIGxvY2FsZSkge1xyXG4gICAgcmV0dXJuIGxvY2FsZS5tb250aHNSZWdleChpc1N0cmljdCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFBhcnNlVG9rZW4oWydNJywgJ01NJ10sIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBhcnJheVtNT05USF0gPSB0b0ludChpbnB1dCkgLSAxO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFBhcnNlVG9rZW4oXHJcbiAgICBbJ01NTScsICdNTU1NJ10sXHJcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgICBjb25zdCBtb250aCA9IGNvbmZpZy5fbG9jYWxlLm1vbnRoc1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xyXG4gICAgICAvLyBpZiB3ZSBkaWRuJ3QgZmluZCBhIG1vbnRoIG5hbWUsIG1hcmsgdGhlIGRhdGUgYXMgaW52YWxpZC5cclxuICAgICAgaWYgKG1vbnRoICE9IG51bGwpIHtcclxuICAgICAgICBhcnJheVtNT05USF0gPSBtb250aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkTW9udGggPSAhIWlucHV0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xyXG5pbXBvcnQgeyBpc051bWJlciB9IGZyb20gJy4vdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBnZXREYXRlLCBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICcuL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGlzTGVhcFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcclxuaW1wb3J0IHsgY3JlYXRlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xyXG5cclxuY29uc3QgZGVmYXVsdFRpbWVVbml0OiBUaW1lVW5pdCA9IHtcclxuICB5ZWFyOiAwLFxyXG4gIG1vbnRoOiAwLFxyXG4gIGRheTogMCxcclxuICBob3VyOiAwLFxyXG4gIG1pbnV0ZTogMCxcclxuICBzZWNvbmRzOiAwXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hpZnREYXRlKGRhdGU6IERhdGUsIHVuaXQ6IFRpbWVVbml0KTogRGF0ZSB7XHJcbiAgY29uc3QgX3VuaXQgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0VGltZVVuaXQsIHVuaXQpO1xyXG4gIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAoX3VuaXQueWVhciB8fCAwKTtcclxuICBjb25zdCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIChfdW5pdC5tb250aCB8fCAwKTtcclxuICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkgKyAoX3VuaXQuZGF5IHx8IDApO1xyXG4gIGlmIChfdW5pdC5tb250aCAmJiAhX3VuaXQuZGF5KSB7XHJcbiAgICBkYXkgPSBNYXRoLm1pbihkYXksIGRheXNJbk1vbnRoKHllYXIsIG1vbnRoKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlRGF0ZShcclxuICAgIHllYXIsXHJcbiAgICBtb250aCxcclxuICAgIGRheSxcclxuICAgIGRhdGUuZ2V0SG91cnMoKSArIChfdW5pdC5ob3VyIHx8IDApLFxyXG4gICAgZGF0ZS5nZXRNaW51dGVzKCkgKyAoX3VuaXQubWludXRlIHx8IDApLFxyXG4gICAgZGF0ZS5nZXRTZWNvbmRzKCkgKyAoX3VuaXQuc2Vjb25kcyB8fCAwKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRGdWxsRGF0ZShkYXRlOiBEYXRlLCB1bml0OiBUaW1lVW5pdCk6IERhdGUge1xyXG4gIHJldHVybiBjcmVhdGVEYXRlKFxyXG4gICAgZ2V0TnVtKGRhdGUuZ2V0RnVsbFllYXIoKSwgdW5pdC55ZWFyKSxcclxuICAgIGdldE51bShkYXRlLmdldE1vbnRoKCksIHVuaXQubW9udGgpLFxyXG4gICAgZ2V0TnVtKGRhdGUuZ2V0RGF0ZSgpLCB1bml0LmRheSksXHJcbiAgICBnZXROdW0oZGF0ZS5nZXRIb3VycygpLCB1bml0LmhvdXIpLFxyXG4gICAgZ2V0TnVtKGRhdGUuZ2V0TWludXRlcygpLCB1bml0Lm1pbnV0ZSksXHJcbiAgICBnZXROdW0oZGF0ZS5nZXRTZWNvbmRzKCksIHVuaXQuc2Vjb25kcyksXHJcbiAgICBnZXROdW0oZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgdW5pdC5taWxsaXNlY29uZHMpXHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TnVtKGRlZjogbnVtYmVyLCBudW0/OiBudW1iZXIpOiBudW1iZXIge1xyXG4gIHJldHVybiBpc051bWJlcihudW0pID8gbnVtIDogZGVmO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RnVsbFllYXIoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgY29uc3QgX21vbnRoID0gZ2V0TW9udGgoZGF0ZSwgaXNVVEMpO1xyXG4gIGNvbnN0IF9kYXRlID0gZ2V0RGF0ZShkYXRlLCBpc1VUQyk7XHJcbiAgY29uc3QgX3llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyk7XHJcbiAgaWYgKGlzTGVhcFllYXIoX3llYXIpICYmIF9tb250aCA9PT0gMSAmJiBfZGF0ZSA9PT0gMjkpIHtcclxuICAgIGNvbnN0IF9kYXlzSW5Nb250aCA9IGRheXNJbk1vbnRoKHZhbHVlLCBfbW9udGgpO1xyXG4gICAgaXNVVEMgPyBkYXRlLnNldFVUQ0Z1bGxZZWFyKHZhbHVlLCBfbW9udGgsIF9kYXlzSW5Nb250aCkgOiBkYXRlLnNldEZ1bGxZZWFyKHZhbHVlLCBfbW9udGgsIF9kYXlzSW5Nb250aCk7XHJcbiAgfVxyXG5cclxuICBpc1VUQyA/IGRhdGUuc2V0VVRDRnVsbFllYXIodmFsdWUpIDogZGF0ZS5zZXRGdWxsWWVhcih2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TW9udGgoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgY29uc3QgZGF5T2ZNb250aCA9IE1hdGgubWluKGdldERhdGUoZGF0ZSksIGRheXNJbk1vbnRoKGdldEZ1bGxZZWFyKGRhdGUpLCB2YWx1ZSkpO1xyXG4gIGlzVVRDID8gZGF0ZS5zZXRVVENNb250aCh2YWx1ZSwgZGF5T2ZNb250aCkgOiBkYXRlLnNldE1vbnRoKHZhbHVlLCBkYXlPZk1vbnRoKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXREYXkoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ0RhdGUodmFsdWUpIDogZGF0ZS5zZXREYXRlKHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRIb3VycyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBpc1VUQyA/IGRhdGUuc2V0VVRDSG91cnModmFsdWUpIDogZGF0ZS5zZXRIb3Vycyh2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0TWludXRlcyhkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBpc1VUQyA/IGRhdGUuc2V0VVRDTWludXRlcyh2YWx1ZSkgOiBkYXRlLnNldE1pbnV0ZXModmFsdWUpO1xyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNlY29uZHMoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ1NlY29uZHModmFsdWUpIDogZGF0ZS5zZXRTZWNvbmRzKHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRNaWxsaXNlY29uZHMoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlciwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgaXNVVEMgPyBkYXRlLnNldFVUQ01pbGxpc2Vjb25kcyh2YWx1ZSkgOiBkYXRlLnNldE1pbGxpc2Vjb25kcyh2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF0ZShkYXRlOiBEYXRlLCB2YWx1ZTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBpc1VUQyA/IGRhdGUuc2V0VVRDRGF0ZSh2YWx1ZSkgOiBkYXRlLnNldERhdGUodmFsdWUpO1xyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFRpbWUoZGF0ZTogRGF0ZSwgdmFsdWU6IG51bWJlcik6IERhdGUge1xyXG4gIGRhdGUuc2V0VGltZSh2YWx1ZSk7XHJcblxyXG4gIHJldHVybiBkYXRlO1xyXG59XHJcbiIsIi8vIGZhc3Rlc3Qgd2F5IHRvIGNsb25lIGRhdGVcclxuLy8gaHR0cHM6Ly9qc3BlcmYuY29tL2Nsb25lLWRhdGUtb2JqZWN0MlxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVEYXRlKGRhdGU6IERhdGUpOiBEYXRlIHtcclxuICByZXR1cm4gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xyXG59XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOiBzd2l0Y2gtZGVmYXVsdFxyXG5pbXBvcnQgeyBUaW1lVW5pdCwgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHtcclxuICBzZXREYXRlLCBzZXRGdWxsRGF0ZSwgc2V0SG91cnMsIHNldE1pbGxpc2Vjb25kcywgc2V0TWludXRlcywgc2V0TW9udGgsIHNldFNlY29uZHMsXHJcbiAgc2hpZnREYXRlXHJcbn0gZnJvbSAnLi9kYXRlLXNldHRlcnMnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xyXG5pbXBvcnQgeyBzZXRJU09EYXlPZldlZWssIHNldExvY2FsZURheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGFkZCwgc3VidHJhY3QgfSBmcm9tICcuLi9tb21lbnQvYWRkLXN1YnRyYWN0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mKGRhdGU6IERhdGUsIHVuaXQ6IFVuaXRPZlRpbWUsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGNvbnN0IF9kYXRlID0gY2xvbmVEYXRlKGRhdGUpO1xyXG4gIC8vIHRoZSBmb2xsb3dpbmcgc3dpdGNoIGludGVudGlvbmFsbHkgb21pdHMgYnJlYWsga2V5d29yZHNcclxuICAvLyB0byB1dGlsaXplIGZhbGxpbmcgdGhyb3VnaCB0aGUgY2FzZXMuXHJcbiAgc3dpdGNoICh1bml0KSB7XHJcbiAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgc2V0TW9udGgoX2RhdGUsIDAsIGlzVVRDKTtcclxuICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cclxuICAgIGNhc2UgJ3F1YXJ0ZXInOlxyXG4gICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICBzZXREYXRlKF9kYXRlLCAxLCBpc1VUQyk7XHJcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICBjYXNlICd3ZWVrJzpcclxuICAgIGNhc2UgJ2lzb1dlZWsnOlxyXG4gICAgY2FzZSAnZGF5JzpcclxuICAgIGNhc2UgJ2RhdGUnOlxyXG4gICAgICBzZXRIb3VycyhfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSAnaG91cnMnOlxyXG4gICAgICBzZXRNaW51dGVzKF9kYXRlLCAwLCBpc1VUQyk7XHJcbiAgICAvKiBmYWxscyB0aHJvdWdoICovXHJcbiAgICBjYXNlICdtaW51dGVzJzpcclxuICAgICAgc2V0U2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gICAgLyogZmFsbHMgdGhyb3VnaCAqL1xyXG4gICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgIHNldE1pbGxpc2Vjb25kcyhfZGF0ZSwgMCwgaXNVVEMpO1xyXG4gIH1cclxuXHJcbiAgLy8gd2Vla3MgYXJlIGEgc3BlY2lhbCBjYXNlXHJcbiAgaWYgKHVuaXQgPT09ICd3ZWVrJykge1xyXG4gICAgc2V0TG9jYWxlRGF5T2ZXZWVrKF9kYXRlLCAwLCB7aXNVVEN9KTtcclxuICB9XHJcbiAgaWYgKHVuaXQgPT09ICdpc29XZWVrJykge1xyXG4gICAgc2V0SVNPRGF5T2ZXZWVrKF9kYXRlLCAxKTtcclxuICB9XHJcblxyXG4gIC8vIHF1YXJ0ZXJzIGFyZSBhbHNvIHNwZWNpYWxcclxuICBpZiAodW5pdCA9PT0gJ3F1YXJ0ZXInKSB7XHJcbiAgICBzZXRNb250aChfZGF0ZSwgTWF0aC5mbG9vcihnZXRNb250aChfZGF0ZSwgaXNVVEMpIC8gMykgKiAzLCBpc1VUQyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX2RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlbmRPZihkYXRlOiBEYXRlLCB1bml0OiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBsZXQgX3VuaXQgPSB1bml0O1xyXG4gIC8vICdkYXRlJyBpcyBhbiBhbGlhcyBmb3IgJ2RheScsIHNvIGl0IHNob3VsZCBiZSBjb25zaWRlcmVkIGFzIHN1Y2guXHJcbiAgaWYgKF91bml0ID09PSAnZGF0ZScpIHtcclxuICAgIF91bml0ID0gJ2RheSc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdGFydCA9IHN0YXJ0T2YoZGF0ZSwgX3VuaXQsIGlzVVRDKTtcclxuICBjb25zdCBfc3RlcCA9IGFkZChzdGFydCwgMSwgX3VuaXQgPT09ICdpc29XZWVrJyA/ICd3ZWVrJyA6IF91bml0LCBpc1VUQyk7XHJcbiAgY29uc3QgcmVzID0gc3VidHJhY3QoX3N0ZXAsIDEsICdtaWxsaXNlY29uZHMnLCBpc1VUQyk7XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgc3RhcnRPZiB9IGZyb20gJy4uL3V0aWxzL3N0YXJ0LWVuZC1vZic7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMywgbWF0Y2gzIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGFkZCB9IGZyb20gJy4uL21vbWVudC9hZGQtc3VidHJhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0RGF5T2ZZZWFyKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdEREQnLCBbJ0REREQnLCAzLCBmYWxzZV0sICdERERvJyxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKGRhdGUpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuXHJcbi8vIEFMSUFTRVNcclxuXHJcbiAgYWRkVW5pdEFsaWFzKCdkYXlPZlllYXInLCAnREREJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG5cclxuICBhZGRVbml0UHJpb3JpdHkoJ2RheU9mWWVhcicsIDQpO1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdEREQnLCBtYXRjaDF0bzMpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0REREQnLCBtYXRjaDMpO1xyXG4gIGFkZFBhcnNlVG9rZW4oXHJcbiAgICBbJ0RERCcsICdEREREJ10sXHJcbiAgICBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgICBjb25maWcuX2RheU9mWWVhciA9IHRvSW50KGlucHV0KTtcclxuXHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mWWVhcihkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gIGNvbnN0IGRhdGUxID0gK3N0YXJ0T2YoZGF0ZSwgJ2RheScsIGlzVVRDKTtcclxuICBjb25zdCBkYXRlMiA9ICtzdGFydE9mKGRhdGUsICd5ZWFyJywgaXNVVEMpO1xyXG4gIGNvbnN0IHNvbWVEYXRlID0gZGF0ZTEgLSBkYXRlMjtcclxuICBjb25zdCBvbmVEYXkgPSAxMDAwICogNjAgKiA2MCAqIDI0O1xyXG5cclxuICByZXR1cm4gTWF0aC5yb3VuZChzb21lRGF0ZSAvIG9uZURheSkgKyAxO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5T2ZZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIpOiBEYXRlIHtcclxuICBjb25zdCBkYXlPZlllYXIgPSBnZXREYXlPZlllYXIoZGF0ZSk7XHJcblxyXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gZGF5T2ZZZWFyKSwgJ2RheScpO1xyXG59XHJcbiIsIi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0geWVhclxyXG4gKiBAcGFyYW0ge251bWJlcn0gZG93IC0gc3RhcnQtb2YtZmlyc3Qtd2Vla1xyXG4gKiBAcGFyYW0ge251bWJlcn0gZG95IC0gc3RhcnQtb2YteWVhclxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9kYXRlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBkYXlzSW5ZZWFyIH0gZnJvbSAnLi95ZWFyJztcclxuaW1wb3J0IHsgZ2V0RGF5T2ZZZWFyIH0gZnJvbSAnLi9kYXktb2YteWVhcic7XHJcbmltcG9ydCB7IGdldEZ1bGxZZWFyIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuXHJcbmZ1bmN0aW9uIGZpcnN0V2Vla09mZnNldCh5ZWFyOiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlcik6IG51bWJlciB7XHJcbiAgLy8gZmlyc3Qtd2VlayBkYXkgLS0gd2hpY2ggamFudWFyeSBpcyBhbHdheXMgaW4gdGhlIGZpcnN0IHdlZWsgKDQgZm9yIGlzbywgMSBmb3Igb3RoZXIpXHJcbiAgY29uc3QgZndkID0gZG93IC0gZG95ICsgNztcclxuICAvLyBmaXJzdC13ZWVrIGRheSBsb2NhbCB3ZWVrZGF5IC0tIHdoaWNoIGxvY2FsIHdlZWtkYXkgaXMgZndkXHJcbiAgY29uc3QgZndkbHcgPSAoY3JlYXRlVVRDRGF0ZSh5ZWFyLCAwLCBmd2QpLmdldFVUQ0RheSgpIC0gZG93ICsgNykgJSA3O1xyXG5cclxuICByZXR1cm4gLWZ3ZGx3ICsgZndkIC0gMTtcclxufVxyXG5cclxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZSNDYWxjdWxhdGluZ19hX2RhdGVfZ2l2ZW5fdGhlX3llYXIuMkNfd2Vla19udW1iZXJfYW5kX3dlZWtkYXlcclxuZXhwb3J0IGZ1bmN0aW9uIGRheU9mWWVhckZyb21XZWVrcyhcclxuICB5ZWFyOiBudW1iZXIsXHJcbiAgd2VlazogbnVtYmVyLFxyXG4gIHdlZWtkYXk6IG51bWJlcixcclxuICBkb3c6IG51bWJlcixcclxuICBkb3k6IG51bWJlclxyXG4pOiB7IHllYXI6IG51bWJlcjsgZGF5T2ZZZWFyOiBudW1iZXIgfSB7XHJcbiAgY29uc3QgbG9jYWxXZWVrZGF5ID0gKDcgKyB3ZWVrZGF5IC0gZG93KSAlIDc7XHJcbiAgY29uc3Qgd2Vla09mZnNldCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyLCBkb3csIGRveSk7XHJcbiAgY29uc3QgZGF5T2ZZZWFyID0gMSArIDcgKiAod2VlayAtIDEpICsgbG9jYWxXZWVrZGF5ICsgd2Vla09mZnNldDtcclxuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xyXG4gIGxldCByZXNEYXlPZlllYXI6IG51bWJlcjtcclxuXHJcbiAgaWYgKGRheU9mWWVhciA8PSAwKSB7XHJcbiAgICByZXNZZWFyID0geWVhciAtIDE7XHJcbiAgICByZXNEYXlPZlllYXIgPSBkYXlzSW5ZZWFyKHJlc1llYXIpICsgZGF5T2ZZZWFyO1xyXG4gIH0gZWxzZSBpZiAoZGF5T2ZZZWFyID4gZGF5c0luWWVhcih5ZWFyKSkge1xyXG4gICAgcmVzWWVhciA9IHllYXIgKyAxO1xyXG4gICAgcmVzRGF5T2ZZZWFyID0gZGF5T2ZZZWFyIC0gZGF5c0luWWVhcih5ZWFyKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzWWVhciA9IHllYXI7XHJcbiAgICByZXNEYXlPZlllYXIgPSBkYXlPZlllYXI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgeWVhcjogcmVzWWVhcixcclxuICAgIGRheU9mWWVhcjogcmVzRGF5T2ZZZWFyXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtPZlllYXIoZGF0ZTogRGF0ZSwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiB7IHdlZWs6IG51bWJlcjsgeWVhcjogbnVtYmVyIH0ge1xyXG4gIGNvbnN0IHdlZWtPZmZzZXQgPSBmaXJzdFdlZWtPZmZzZXQoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XHJcbiAgY29uc3Qgd2VlayA9IE1hdGguZmxvb3IoKGdldERheU9mWWVhcihkYXRlLCBpc1VUQykgLSB3ZWVrT2Zmc2V0IC0gMSkgLyA3KSArIDE7XHJcbiAgbGV0IHJlc1dlZWs6IG51bWJlcjtcclxuICBsZXQgcmVzWWVhcjogbnVtYmVyO1xyXG5cclxuICBpZiAod2VlayA8IDEpIHtcclxuICAgIHJlc1llYXIgPSBnZXRGdWxsWWVhcihkYXRlLCBpc1VUQykgLSAxO1xyXG4gICAgcmVzV2VlayA9IHdlZWsgKyB3ZWVrc0luWWVhcihyZXNZZWFyLCBkb3csIGRveSk7XHJcbiAgfSBlbHNlIGlmICh3ZWVrID4gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSkpIHtcclxuICAgIHJlc1dlZWsgPSB3ZWVrIC0gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBkb3csIGRveSk7XHJcbiAgICByZXNZZWFyID0gZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpICsgMTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzWWVhciA9IGdldEZ1bGxZZWFyKGRhdGUsIGlzVVRDKTtcclxuICAgIHJlc1dlZWsgPSB3ZWVrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHdlZWs6IHJlc1dlZWssXHJcbiAgICB5ZWFyOiByZXNZZWFyXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzSW5ZZWFyKHllYXI6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyKTogbnVtYmVyIHtcclxuICBjb25zdCB3ZWVrT2Zmc2V0ID0gZmlyc3RXZWVrT2Zmc2V0KHllYXIsIGRvdywgZG95KTtcclxuICBjb25zdCB3ZWVrT2Zmc2V0TmV4dCA9IGZpcnN0V2Vla09mZnNldCh5ZWFyICsgMSwgZG93LCBkb3kpO1xyXG5cclxuICByZXR1cm4gKGRheXNJblllYXIoeWVhcikgLSB3ZWVrT2Zmc2V0ICsgd2Vla09mZnNldE5leHQpIC8gNztcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50IG1heC1saW5lLWxlbmd0aCBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuXHJcbmltcG9ydCB7IHdlZWtPZlllYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLWNhbGVuZGFyLXV0aWxzJztcclxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgZ2V0RGF5LCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IG1hdGNoV29yZCwgcmVnZXhFc2NhcGUgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IHNldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlT3B0aW9uc0Zvcm1hdCB7XHJcbiAgZm9ybWF0OiBzdHJpbmdbXTtcclxuICBzdGFuZGFsb25lOiBzdHJpbmdbXTtcclxuICBpc0Zvcm1hdD86IFJlZ0V4cDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTG9jYWxlT3B0aW9ucyA9IHN0cmluZ1tdIHwgTG9jYWxlT3B0aW9uc0Zvcm1hdDtcclxuXHJcbmNvbnN0IE1PTlRIU19JTl9GT1JNQVQgPSAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NPy87XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlTW9udGhzID0gJ0phbnVhcnlfRmVicnVhcnlfTWFyY2hfQXByaWxfTWF5X0p1bmVfSnVseV9BdWd1c3RfU2VwdGVtYmVyX09jdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KFxyXG4gICdfJ1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0ID0gJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdChcclxuICAnXydcclxuKTtcclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyA9ICdTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheScuc3BsaXQoXHJcbiAgJ18nXHJcbik7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TG9jYWxlV2Vla2RheXNTaG9ydCA9ICdTdW5fTW9uX1R1ZV9XZWRfVGh1X0ZyaV9TYXQnLnNwbGl0KFxyXG4gICdfJ1xyXG4pO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluID0gJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpO1xyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvbmdEYXRlRm9ybWF0OiB7IFtpbmRleDogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgTFRTOiAnaDptbTpzcyBBJyxcclxuICBMVDogJ2g6bW0gQScsXHJcbiAgTDogJ01NL0REL1lZWVknLFxyXG4gIExMOiAnTU1NTSBELCBZWVlZJyxcclxuICBMTEw6ICdNTU1NIEQsIFlZWVkgaDptbSBBJyxcclxuICBMTExMOiAnZGRkZCwgTU1NTSBELCBZWVlZIGg6bW0gQSdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0T3JkaW5hbCA9ICclZCc7XHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSA9IC9cXGR7MSwyfS87XHJcblxyXG5jb25zdCBkZWZhdWx0TW9udGhzU2hvcnRSZWdleCA9IG1hdGNoV29yZDtcclxuY29uc3QgZGVmYXVsdE1vbnRoc1JlZ2V4ID0gbWF0Y2hXb3JkO1xyXG5cclxuZXhwb3J0IHR5cGUgT3JkaW5hbERhdGVGbiA9IChudW06IG51bWJlciwgdG9rZW4/OiBzdHJpbmcpID0+IHN0cmluZztcclxuZXhwb3J0IHR5cGUgUGx1cmFsaXplRGF0ZUZuID0gKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5Pzogc3RyaW5nLCBpc0Z1dHVyZT86IGJvb2xlYW4pID0+IHN0cmluZztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTG9jYWxlRGF0YSB7XHJcbiAgYWJicj86IHN0cmluZztcclxuICBwYXJlbnRMb2NhbGU/OiBzdHJpbmc7XHJcblxyXG4gIG1vbnRocz86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcclxuICBtb250aHNTaG9ydD86IExvY2FsZU9wdGlvbnMgfCAoKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pID0+IHN0cmluZyB8IHN0cmluZ1tdKTtcclxuICBtb250aHNQYXJzZUV4YWN0PzogYm9vbGVhbjtcclxuXHJcbiAgd2Vla2RheXM/OiBMb2NhbGVPcHRpb25zIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XHJcbiAgd2Vla2RheXNTaG9ydD86IHN0cmluZ1tdIHwgKChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKSA9PiBzdHJpbmcgfCBzdHJpbmdbXSk7XHJcbiAgd2Vla2RheXNNaW4/OiBzdHJpbmdbXSB8ICgoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbikgPT4gc3RyaW5nIHwgc3RyaW5nW10pO1xyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdD86IGJvb2xlYW47XHJcblxyXG4gIGxvbmdEYXRlRm9ybWF0PzogeyBbaW5kZXg6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIGNhbGVuZGFyPzoge1xyXG4gICAgW2tleTogc3RyaW5nXTogKHN0cmluZ1xyXG4gICAgICB8ICgoZGF0ZTogRGF0ZSwgbm93PzogRGF0ZSkgPT4gc3RyaW5nKVxyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgfCAoKGRheU9mV2VlazogbnVtYmVyLCBpc05leHRXZWVrOiBib29sZWFuKSA9PiBzdHJpbmcpKVxyXG4gIH07XHJcbiAgcmVsYXRpdmVUaW1lPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBQbHVyYWxpemVEYXRlRm4gfTtcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlPzogUmVnRXhwO1xyXG4gIG9yZGluYWw/OiBzdHJpbmcgfCBPcmRpbmFsRGF0ZUZuO1xyXG5cclxuICB3ZWVrPzogeyBkb3c/OiBudW1iZXI7IGRveT86IG51bWJlciB9O1xyXG5cclxuICBpbnZhbGlkRGF0ZT86IHN0cmluZztcclxuXHJcbiAgbW9udGhzUmVnZXg/OiBSZWdFeHA7XHJcbiAgbW9udGhzUGFyc2U/OiBSZWdFeHBbXTtcclxuICBtb250aHNTaG9ydFJlZ2V4PzogUmVnRXhwO1xyXG4gIG1vbnRoc1N0cmljdFJlZ2V4PzogUmVnRXhwO1xyXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg/OiBSZWdFeHA7XHJcbiAgbG9uZ01vbnRoc1BhcnNlPzogUmVnRXhwW107XHJcbiAgc2hvcnRNb250aHNQYXJzZT86IFJlZ0V4cFtdO1xyXG5cclxuICBtZXJpZGllbVBhcnNlPzogUmVnRXhwO1xyXG5cclxuICBtZXJpZGllbUhvdXI/KGhvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZyk6IG51bWJlcjtcclxuXHJcbiAgcHJlcGFyc2U/KHN0cjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuICBwb3N0Zm9ybWF0PyhzdHI6IHN0cmluZyB8IG51bWJlcik6IHN0cmluZztcclxuXHJcbiAgbWVyaWRpZW0/KGhvdXI6IG51bWJlciwgbWludXRlPzogbnVtYmVyLCBpc0xvd2VyPzogYm9vbGVhbik6IHN0cmluZztcclxuXHJcbiAgaXNQTT8oaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbGUge1xyXG4gIHBhcmVudExvY2FsZT86IExvY2FsZTtcclxuICBfYWJicjogc3RyaW5nO1xyXG4gIF9jb25maWc6IExvY2FsZURhdGE7XHJcbiAgbWVyaWRpZW1Ib3VyOiAoaG91cjogbnVtYmVyLCBtZXJpZGllbTogc3RyaW5nKSA9PiBudW1iZXI7XHJcblxyXG4gIF9pbnZhbGlkRGF0ZTogc3RyaW5nO1xyXG4gIF93ZWVrOiB7IGRvdzogbnVtYmVyOyBkb3k6IG51bWJlciB9O1xyXG4gIF9kYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBSZWdFeHA7XHJcbiAgX29yZGluYWxQYXJzZTogUmVnRXhwO1xyXG4gIF9tZXJpZGllbVBhcnNlOiBSZWdFeHA7XHJcblxyXG4gIHByaXZhdGUgX2NhbGVuZGFyOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHByaXZhdGUgX3JlbGF0aXZlVGltZTogeyBmdXR1cmU6IHN0cmluZzsgcGFzdDogc3RyaW5nIH07XHJcbiAgcHJpdmF0ZSBfbW9udGhzOiBMb2NhbGVPcHRpb25zO1xyXG4gIHByaXZhdGUgX21vbnRoc1Nob3J0OiBMb2NhbGVPcHRpb25zO1xyXG4gIHByaXZhdGUgX21vbnRoc1JlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnRSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX21vbnRoc1N0cmljdFJlZ2V4OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfbW9udGhzU2hvcnRTdHJpY3RSZWdleDogUmVnRXhwO1xyXG4gIHByaXZhdGUgX21vbnRoc1BhcnNlOiBSZWdFeHBbXTtcclxuICBwcml2YXRlIF9sb25nTW9udGhzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XHJcbiAgcHJpdmF0ZSBfc2hvcnRNb250aHNQYXJzZTogc3RyaW5nW10gfCBSZWdFeHBbXTtcclxuICBwcml2YXRlIF9tb250aHNQYXJzZUV4YWN0OiBSZWdFeHA7XHJcbiAgcHJpdmF0ZSBfd2Vla2RheXNQYXJzZUV4YWN0OiBib29sZWFuO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzUmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0UmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF93ZWVrZGF5c01pblJlZ2V4OiBSZWdFeHA7XHJcblxyXG4gIHByaXZhdGUgX3dlZWtkYXlzU3RyaWN0UmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXg6IFJlZ0V4cDtcclxuICBwcml2YXRlIF93ZWVrZGF5c01pblN0cmljdFJlZ2V4OiBSZWdFeHA7XHJcblxyXG4gIHByaXZhdGUgX3dlZWtkYXlzOiBMb2NhbGVPcHRpb25zO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzU2hvcnQ6IHN0cmluZ1tdO1xyXG4gIHByaXZhdGUgX3dlZWtkYXlzTWluOiBzdHJpbmdbXTtcclxuICBwcml2YXRlIF93ZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xyXG4gIHByaXZhdGUgX21pbldlZWtkYXlzUGFyc2U6IHN0cmluZ1tdIHwgUmVnRXhwW107XHJcbiAgcHJpdmF0ZSBfc2hvcnRXZWVrZGF5c1BhcnNlOiBzdHJpbmdbXSB8IFJlZ0V4cFtdO1xyXG4gIHByaXZhdGUgX2Z1bGxXZWVrZGF5c1BhcnNlOiBSZWdFeHBbXTtcclxuICBwcml2YXRlIF9sb25nRGF0ZUZvcm1hdDogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgcHJpdmF0ZSBfb3JkaW5hbDogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb25maWc6IExvY2FsZURhdGEpIHtcclxuICAgIGlmICghIWNvbmZpZykge1xyXG4gICAgICB0aGlzLnNldChjb25maWcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0KGNvbmZpZzogTG9jYWxlRGF0YSk6IHZvaWQge1xyXG4gICAgbGV0IGNvbmZLZXk7XHJcbiAgICBmb3IgKGNvbmZLZXkgaW4gY29uZmlnKSB7XHJcbiAgICAgIGlmICghY29uZmlnLmhhc093blByb3BlcnR5KGNvbmZLZXkpKSB7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgcHJvcCA9IGNvbmZpZ1tjb25mS2V5IGFzIGtleW9mIExvY2FsZURhdGFdO1xyXG4gICAgICBjb25zdCBrZXkgPSAoaXNGdW5jdGlvbihwcm9wKSA/IGNvbmZLZXkgOiBgXyR7Y29uZktleX1gKSBhcyBrZXlvZiBMb2NhbGU7XHJcblxyXG4gICAgICB0aGlzW2tleV0gPSBwcm9wIGFzIGFueTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XHJcbiAgfVxyXG5cclxuICBjYWxlbmRhcihrZXk6IHN0cmluZywgZGF0ZTogRGF0ZSwgbm93OiBEYXRlKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG91dHB1dCA9IHRoaXMuX2NhbGVuZGFyW2tleV0gfHwgdGhpcy5fY2FsZW5kYXIuc2FtZUVsc2U7XHJcblxyXG4gICAgcmV0dXJuIGlzRnVuY3Rpb24ob3V0cHV0KSA/IG91dHB1dC5jYWxsKG51bGwsIGRhdGUsIG5vdykgOiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICBsb25nRGF0ZUZvcm1hdChrZXk6IHN0cmluZykge1xyXG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcclxuICAgIGNvbnN0IGZvcm1hdFVwcGVyID0gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5LnRvVXBwZXJDYXNlKCldO1xyXG5cclxuICAgIGlmIChmb3JtYXQgfHwgIWZvcm1hdFVwcGVyKSB7XHJcbiAgICAgIHJldHVybiBmb3JtYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XSA9IGZvcm1hdFVwcGVyLnJlcGxhY2UoL01NTU18TU18RER8ZGRkZC9nLCBmdW5jdGlvbiAodmFsOiBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuIHZhbC5zbGljZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGludmFsaWREYXRlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5faW52YWxpZERhdGU7XHJcbiAgfVxyXG5cclxuICBzZXQgaW52YWxpZERhdGUodmFsOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2ludmFsaWREYXRlID0gdmFsO1xyXG4gIH1cclxuXHJcbiAgb3JkaW5hbChudW06IG51bWJlciwgdG9rZW4/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX29yZGluYWwucmVwbGFjZSgnJWQnLCBudW0udG9TdHJpbmcoMTApKTtcclxuICB9XHJcblxyXG4gIHByZXBhcnNlKHN0cjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gc3RyO1xyXG4gIH1cclxuXHJcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0cjtcclxuICB9XHJcblxyXG4gIHJlbGF0aXZlVGltZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgc3RyOiAnZnV0dXJlJyB8ICdwYXN0JywgaXNGdXR1cmU6IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW3N0cl07XHJcblxyXG4gICAgcmV0dXJuIChpc0Z1bmN0aW9uKG91dHB1dCkpID9cclxuICAgICAgb3V0cHV0KG51bSwgd2l0aG91dFN1ZmZpeCwgc3RyLCBpc0Z1dHVyZSkgOlxyXG4gICAgICBvdXRwdXQucmVwbGFjZSgvJWQvaSwgbnVtLnRvU3RyaW5nKDEwKSk7XHJcbiAgfVxyXG5cclxuICBwYXN0RnV0dXJlKGRpZmY6IG51bWJlciwgb3V0cHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgZm9ybWF0ID0gdGhpcy5fcmVsYXRpdmVUaW1lW2RpZmYgPiAwID8gJ2Z1dHVyZScgOiAncGFzdCddO1xyXG5cclxuICAgIHJldHVybiBpc0Z1bmN0aW9uKGZvcm1hdCkgPyBmb3JtYXQob3V0cHV0KSA6IGZvcm1hdC5yZXBsYWNlKC8lcy9pLCBvdXRwdXQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIE1vbnRocyAqL1xyXG4gIG1vbnRocygpOiBzdHJpbmdbXTtcclxuICBtb250aHMoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgbW9udGhzKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDID0gZmFsc2UpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIGlzQXJyYXk8c3RyaW5nPih0aGlzLl9tb250aHMpXHJcbiAgICAgICAgPyB0aGlzLl9tb250aHNcclxuICAgICAgICA6IHRoaXMuX21vbnRocy5zdGFuZGFsb25lO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qga2V5ID0gKHRoaXMuX21vbnRocy5pc0Zvcm1hdCB8fCBNT05USFNfSU5fRk9STUFUKS50ZXN0KGZvcm1hdClcclxuICAgICAgPyAnZm9ybWF0J1xyXG4gICAgICA6ICdzdGFuZGFsb25lJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbW9udGhzW2tleV1bZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICB9XHJcblxyXG4gIG1vbnRoc1Nob3J0KCk6IHN0cmluZ1tdO1xyXG4gIG1vbnRoc1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcclxuICBtb250aHNTaG9ydChkYXRlPzogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQyA9IGZhbHNlKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fbW9udGhzU2hvcnQpXHJcbiAgICAgICAgPyB0aGlzLl9tb250aHNTaG9ydFxyXG4gICAgICAgIDogdGhpcy5fbW9udGhzU2hvcnQuc3RhbmRhbG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX21vbnRoc1Nob3J0KSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuICAgIGNvbnN0IGtleSA9IE1PTlRIU19JTl9GT1JNQVQudGVzdChmb3JtYXQpID8gJ2Zvcm1hdCcgOiAnc3RhbmRhbG9uZSc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0W2tleV1bZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICB9XHJcblxyXG4gIG1vbnRoc1BhcnNlKG1vbnRoTmFtZTogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgbGV0IGRhdGU7XHJcbiAgICBsZXQgcmVnZXg7XHJcblxyXG4gICAgaWYgKHRoaXMuX21vbnRoc1BhcnNlRXhhY3QpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlTW9udGhTdHJpY3RQYXJzZShtb250aE5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX21vbnRoc1BhcnNlKSB7XHJcbiAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogYWRkIHNvcnRpbmdcclxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgbW9udGggKG9yIGFiYnIpIGlzIGEgcHJlZml4IG9mIGFub3RoZXJcclxuICAgIC8vIHNlZSBzb3J0aW5nIGluIGNvbXB1dGVNb250aHNQYXJzZVxyXG4gICAgbGV0IGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcclxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIGkpKTtcclxuICAgICAgaWYgKHN0cmljdCAmJiAhdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldKSB7XHJcbiAgICAgICAgY29uc3QgX21vbnRocyA9IHRoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJycpO1xyXG4gICAgICAgIGNvbnN0IF9zaG9ydE1vbnRocyA9IHRoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycsIHRydWUpLnJlcGxhY2UoJy4nLCAnJyk7XHJcbiAgICAgICAgdGhpcy5fbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7X21vbnRoc30kYCwgJ2knKTtcclxuICAgICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7X3Nob3J0TW9udGhzfSRgLCAnaScpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghc3RyaWN0ICYmICF0aGlzLl9tb250aHNQYXJzZVtpXSkge1xyXG4gICAgICAgIHJlZ2V4ID0gYF4ke3RoaXMubW9udGhzKGRhdGUsICcnLCB0cnVlKX18XiR7dGhpcy5tb250aHNTaG9ydChkYXRlLCAnJywgdHJ1ZSl9YDtcclxuICAgICAgICB0aGlzLl9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0ZXN0IHRoZSByZWdleFxyXG4gICAgICBpZiAoc3RyaWN0ICYmIGZvcm1hdCA9PT0gJ01NTU0nICYmICh0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gYXMgUmVnRXhwKS50ZXN0KG1vbnRoTmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0cmljdCAmJiBmb3JtYXQgPT09ICdNTU0nICYmICh0aGlzLl9zaG9ydE1vbnRoc1BhcnNlW2ldIGFzIFJlZ0V4cCkudGVzdChtb250aE5hbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghc3RyaWN0ICYmIHRoaXMuX21vbnRoc1BhcnNlW2ldLnRlc3QobW9udGhOYW1lKSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb250aHNSZWdleChpc1N0cmljdDogYm9vbGVhbik6IFJlZ0V4cCB7XHJcbiAgICBpZiAodGhpcy5fbW9udGhzUGFyc2VFeGFjdCkge1xyXG4gICAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlTW9udGhzUGFyc2UoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNTdHJpY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbW9udGhzU3RyaWN0UmVnZXg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLl9tb250aHNSZWdleDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhhc093blByb3AodGhpcywgJ19tb250aHNSZWdleCcpKSB7XHJcbiAgICAgIHRoaXMuX21vbnRoc1JlZ2V4ID0gZGVmYXVsdE1vbnRoc1JlZ2V4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLl9tb250aHNTdHJpY3RSZWdleCAmJiBpc1N0cmljdCA/XHJcbiAgICAgIHRoaXMuX21vbnRoc1N0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzUmVnZXg7XHJcbiAgfVxyXG5cclxuICBtb250aHNTaG9ydFJlZ2V4KGlzU3RyaWN0OiBib29sZWFuKTogUmVnRXhwIHtcclxuICAgIGlmICh0aGlzLl9tb250aHNQYXJzZUV4YWN0KSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1JlZ2V4JykpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVNb250aHNQYXJzZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChpc1N0cmljdCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcclxuICAgIH1cclxuICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX21vbnRoc1Nob3J0UmVnZXgnKSkge1xyXG4gICAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gZGVmYXVsdE1vbnRoc1Nob3J0UmVnZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xyXG4gICAgICB0aGlzLl9tb250aHNTaG9ydFN0cmljdFJlZ2V4IDogdGhpcy5fbW9udGhzU2hvcnRSZWdleDtcclxuICB9XHJcblxyXG4gIC8qKiBXZWVrICovXHJcbiAgd2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgdGhpcy5fd2Vlay5kb3csIHRoaXMuX3dlZWsuZG95LCBpc1VUQykud2VlaztcclxuICB9XHJcblxyXG4gIGZpcnN0RGF5T2ZXZWVrKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2Vlay5kb3c7XHJcbiAgfVxyXG5cclxuICBmaXJzdERheU9mWWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3dlZWsuZG95O1xyXG4gIH1cclxuXHJcbiAgLyoqIERheSBvZiBXZWVrICovXHJcbiAgd2Vla2RheXMoKTogc3RyaW5nW107XHJcbiAgd2Vla2RheXMoZGF0ZTogRGF0ZSwgZm9ybWF0Pzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmc7XHJcbiAgd2Vla2RheXMoZGF0ZT86IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBpc0FycmF5PHN0cmluZz4odGhpcy5fd2Vla2RheXMpXHJcbiAgICAgICAgPyB0aGlzLl93ZWVrZGF5c1xyXG4gICAgICAgIDogdGhpcy5fd2Vla2RheXMuc3RhbmRhbG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheTxzdHJpbmc+KHRoaXMuX3dlZWtkYXlzKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNbZ2V0RGF5KGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2tleSA9IHRoaXMuX3dlZWtkYXlzLmlzRm9ybWF0LnRlc3QoZm9ybWF0KVxyXG4gICAgICA/ICdmb3JtYXQnXHJcbiAgICAgIDogJ3N0YW5kYWxvbmUnO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1tfa2V5XVtnZXREYXkoZGF0ZSwgaXNVVEMpXTtcclxuICB9XHJcblxyXG4gIHdlZWtkYXlzTWluKCk6IHN0cmluZ1tdO1xyXG4gIHdlZWtkYXlzTWluKGRhdGU6IERhdGUsIGZvcm1hdD86IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nO1xyXG4gIHdlZWtkYXlzTWluKGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBkYXRlID8gdGhpcy5fd2Vla2RheXNNaW5bZ2V0RGF5KGRhdGUsIGlzVVRDKV0gOiB0aGlzLl93ZWVrZGF5c01pbjtcclxuICB9XHJcblxyXG4gIHdlZWtkYXlzU2hvcnQoKTogc3RyaW5nW107XHJcbiAgd2Vla2RheXNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZztcclxuICB3ZWVrZGF5c1Nob3J0KGRhdGU/OiBEYXRlLCBmb3JtYXQ/OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiBkYXRlID8gdGhpcy5fd2Vla2RheXNTaG9ydFtnZXREYXkoZGF0ZSwgaXNVVEMpXSA6IHRoaXMuX3dlZWtkYXlzU2hvcnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8gcHJvdG8ud2Vla2RheXNQYXJzZSAgPSAgICAgICAgbG9jYWxlV2Vla2RheXNQYXJzZTtcclxuICB3ZWVrZGF5c1BhcnNlKHdlZWtkYXlOYW1lPzogc3RyaW5nLCBmb3JtYXQ/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgbGV0IGk7XHJcbiAgICBsZXQgcmVnZXg7XHJcblxyXG4gICAgaWYgKHRoaXMuX3dlZWtkYXlzUGFyc2VFeGFjdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVXZWVrU3RyaWN0UGFyc2Uod2Vla2RheU5hbWUsIGZvcm1hdCwgc3RyaWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3dlZWtkYXlzUGFyc2UpIHtcclxuICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9mdWxsV2Vla2RheXNQYXJzZSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAoaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgLy8gbWFrZSB0aGUgcmVnZXggaWYgd2UgZG9uJ3QgaGF2ZSBpdCBhbHJlYWR5XHJcbiAgICAgIC8vIGZpeDogaGVyZSBpcyB0aGUgaXNzdWVcclxuICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xyXG4gICAgICBpZiAoc3RyaWN0ICYmICF0aGlzLl9mdWxsV2Vla2RheXNQYXJzZVtpXSkge1xyXG4gICAgICAgIHRoaXMuX2Z1bGxXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5cyhkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XHJcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUsICcnLCB0cnVlKS5yZXBsYWNlKCcuJywgJ1xcLj8nKX0kYCwgJ2knKTtcclxuICAgICAgICB0aGlzLl9taW5XZWVrZGF5c1BhcnNlW2ldID0gbmV3IFJlZ0V4cChgXiR7dGhpcy53ZWVrZGF5c01pbihkYXRlLCAnJywgdHJ1ZSkucmVwbGFjZSgnLicsICdcXC4/Jyl9JGAsICdpJyk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlW2ldKSB7XHJcbiAgICAgICAgcmVnZXggPSBgXiR7dGhpcy53ZWVrZGF5cyhkYXRlLCAnJywgdHJ1ZSl9fF4ke3RoaXMud2Vla2RheXNTaG9ydChkYXRlLCAnJywgdHJ1ZSl9fF4ke3RoaXMud2Vla2RheXNNaW4oZGF0ZSwgJycsIHRydWUpfWA7XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IG5ldyBSZWdFeHAocmVnZXgucmVwbGFjZSgnLicsICcnKSwgJ2knKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpc0FycmF5PFJlZ0V4cD4odGhpcy5fZnVsbFdlZWtkYXlzUGFyc2UpXHJcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UpXHJcbiAgICAgICAgfHwgIWlzQXJyYXk8UmVnRXhwPih0aGlzLl9taW5XZWVrZGF5c1BhcnNlKVxyXG4gICAgICAgIHx8ICFpc0FycmF5PFJlZ0V4cD4odGhpcy5fd2Vla2RheXNQYXJzZSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIHRlc3QgdGhlIHJlZ2V4XHJcbiAgICAgIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkZCcgJiYgdGhpcy5fZnVsbFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGRkJyAmJiB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfSBlbHNlIGlmIChzdHJpY3QgJiYgZm9ybWF0ID09PSAnZGQnICYmIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfSBlbHNlIGlmICghc3RyaWN0ICYmIHRoaXMuX3dlZWtkYXlzUGFyc2VbaV0udGVzdCh3ZWVrZGF5TmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHJvdG8ud2Vla2RheXNSZWdleCAgICAgICA9ICAgICAgICB3ZWVrZGF5c1JlZ2V4O1xyXG4gIHdlZWtkYXlzUmVnZXgoaXNTdHJpY3Q6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLl93ZWVrZGF5c1BhcnNlRXhhY3QpIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlV2Vla2RheXNQYXJzZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNTdHJpY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTdHJpY3RSZWdleDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNSZWdleDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNSZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNSZWdleCA9IG1hdGNoV29yZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1JlZ2V4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gcHJvdG8ud2Vla2RheXNTaG9ydFJlZ2V4ICA9ICAgICAgICB3ZWVrZGF5c1Nob3J0UmVnZXg7XHJcbiAgLy8gcHJvdG8ud2Vla2RheXNNaW5SZWdleCAgICA9ICAgICAgICB3ZWVrZGF5c01pblJlZ2V4O1xyXG5cclxuXHJcbiAgd2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0PzogYm9vbGVhbik6IFJlZ0V4cCB7XHJcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNTdHJpY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzU2hvcnRSZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNTaG9ydFJlZ2V4ID0gbWF0Y2hXb3JkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ICYmIGlzU3RyaWN0ID9cclxuICAgICAgICB0aGlzLl93ZWVrZGF5c1Nob3J0U3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c1Nob3J0UmVnZXg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0PzogYm9vbGVhbik6IFJlZ0V4cCB7XHJcbiAgICBpZiAodGhpcy5fd2Vla2RheXNQYXJzZUV4YWN0KSB7XHJcbiAgICAgIGlmICghaGFzT3duUHJvcCh0aGlzLCAnX3dlZWtkYXlzUmVnZXgnKSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtkYXlzUGFyc2UoKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNTdHJpY3QpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5TdHJpY3RSZWdleDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2Vla2RheXNNaW5SZWdleDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFoYXNPd25Qcm9wKHRoaXMsICdfd2Vla2RheXNNaW5SZWdleCcpKSB7XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNNaW5SZWdleCA9IG1hdGNoV29yZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggJiYgaXNTdHJpY3QgP1xyXG4gICAgICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggOiB0aGlzLl93ZWVrZGF5c01pblJlZ2V4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNQTShpbnB1dDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAvLyBJRTggUXVpcmtzIE1vZGUgJiBJRTcgU3RhbmRhcmRzIE1vZGUgZG8gbm90IGFsbG93IGFjY2Vzc2luZyBzdHJpbmdzIGxpa2UgYXJyYXlzXHJcbiAgICAvLyBVc2luZyBjaGFyQXQgc2hvdWxkIGJlIG1vcmUgY29tcGF0aWJsZS5cclxuICAgIHJldHVybiBpbnB1dC50b0xvd2VyQ2FzZSgpLmNoYXJBdCgwKSA9PT0gJ3AnO1xyXG4gIH1cclxuXHJcbiAgbWVyaWRpZW0oaG91cnM6IG51bWJlciwgbWludXRlczogbnVtYmVyLCBpc0xvd2VyOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgIGlmIChob3VycyA+IDExKSB7XHJcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ3BtJyA6ICdQTSc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzTG93ZXIgPyAnYW0nIDogJ0FNJztcclxuICB9XHJcblxyXG4gIGZvcm1hdExvbmdEYXRlKGtleTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdCA9IHRoaXMuX2xvbmdEYXRlRm9ybWF0ID8gdGhpcy5fbG9uZ0RhdGVGb3JtYXQgOiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQ7XHJcbiAgICBjb25zdCBmb3JtYXQgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXldO1xyXG4gICAgY29uc3QgZm9ybWF0VXBwZXIgPSB0aGlzLl9sb25nRGF0ZUZvcm1hdFtrZXkudG9VcHBlckNhc2UoKV07XHJcblxyXG4gICAgaWYgKGZvcm1hdCB8fCAhZm9ybWF0VXBwZXIpIHtcclxuICAgICAgcmV0dXJuIGZvcm1hdDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9sb25nRGF0ZUZvcm1hdFtcclxuICAgICAga2V5XHJcbiAgICAgIF0gPSBmb3JtYXRVcHBlci5yZXBsYWNlKC9NTU1NfE1NfEREfGRkZGQvZywgKHZhbDogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiB2YWwuc2xpY2UoMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fbG9uZ0RhdGVGb3JtYXRba2V5XTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTW9udGhTdHJpY3RQYXJzZShtb250aE5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGxsYyA9IG1vbnRoTmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgbGV0IGk7XHJcbiAgICBsZXQgaWk7XHJcbiAgICBsZXQgbW9tO1xyXG4gICAgaWYgKCF0aGlzLl9tb250aHNQYXJzZSkge1xyXG4gICAgICAvLyB0aGlzIGlzIG5vdCB1c2VkXHJcbiAgICAgIHRoaXMuX21vbnRoc1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX2xvbmdNb250aHNQYXJzZSA9IFtdO1xyXG4gICAgICB0aGlzLl9zaG9ydE1vbnRoc1BhcnNlID0gW107XHJcbiAgICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgKytpKSB7XHJcbiAgICAgICAgbW9tID0gbmV3IERhdGUoMjAwMCwgaSk7XHJcbiAgICAgICAgdGhpcy5fc2hvcnRNb250aHNQYXJzZVtpXSA9IHRoaXMubW9udGhzU2hvcnQobW9tLCAnJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcclxuICAgICAgICB0aGlzLl9sb25nTW9udGhzUGFyc2VbaV0gPSB0aGlzLm1vbnRocyhtb20sICcnKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0cmljdCkge1xyXG4gICAgICBpZiAoZm9ybWF0ID09PSAnTU1NJykge1xyXG4gICAgICAgIGlpID0gKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBpaSA9ICh0aGlzLl9sb25nTW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGZvcm1hdCA9PT0gJ01NTScpIHtcclxuICAgICAgaWkgPSAodGhpcy5fc2hvcnRNb250aHNQYXJzZSBhcyBzdHJpbmdbXSkuaW5kZXhPZihsbGMpO1xyXG4gICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpaSA9ICh0aGlzLl9sb25nTW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWkgPSAodGhpcy5fbG9uZ01vbnRoc1BhcnNlIGFzIHN0cmluZ1tdKS5pbmRleE9mKGxsYyk7XHJcbiAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgIHJldHVybiBpaTtcclxuICAgIH1cclxuICAgIGlpID0gKHRoaXMuX3Nob3J0TW9udGhzUGFyc2UgYXMgc3RyaW5nW10pLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVXZWVrU3RyaWN0UGFyc2Uod2Vla2RheU5hbWU6IHN0cmluZywgZm9ybWF0OiBzdHJpbmcsIHN0cmljdDogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICBsZXQgaWk7XHJcbiAgICBjb25zdCBsbGMgPSB3ZWVrZGF5TmFtZS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xyXG4gICAgaWYgKCF0aGlzLl93ZWVrZGF5c1BhcnNlKSB7XHJcbiAgICAgIHRoaXMuX3dlZWtkYXlzUGFyc2UgPSBbXTtcclxuICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlID0gW107XHJcbiAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2UgPSBbXTtcclxuXHJcbiAgICAgIGxldCBpO1xyXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgNzsgKytpKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IHNldERheU9mV2VlayhuZXcgRGF0ZShEYXRlLlVUQygyMDAwLCAxKSksIGksIG51bGwsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX21pbldlZWtkYXlzUGFyc2VbaV0gPSB0aGlzLndlZWtkYXlzTWluKGRhdGUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlW2ldID0gdGhpcy53ZWVrZGF5c1Nob3J0KGRhdGUpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgdGhpcy5fd2Vla2RheXNQYXJzZVtpXSA9IHRoaXMud2Vla2RheXMoZGF0ZSwgJycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWlzQXJyYXk8c3RyaW5nPih0aGlzLl93ZWVrZGF5c1BhcnNlKVxyXG4gICAgICB8fCAhaXNBcnJheTxzdHJpbmc+KHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZSlcclxuICAgICAgfHwgIWlzQXJyYXk8c3RyaW5nPih0aGlzLl9taW5XZWVrZGF5c1BhcnNlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHN0cmljdCkge1xyXG4gICAgICBpZiAoZm9ybWF0ID09PSAnZGRkZCcpIHtcclxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJ2RkZCcpIHtcclxuICAgICAgICBpaSA9IHRoaXMuX3Nob3J0V2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWkgPSB0aGlzLl9taW5XZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlpICE9PSAtMSA/IGlpIDogbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKGZvcm1hdCA9PT0gJ2RkZGQnKSB7XHJcbiAgICAgICAgaWkgPSB0aGlzLl93ZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcblxyXG4gICAgICAgIHJldHVybiBpaSAhPT0gLTEgPyBpaSA6IG51bGw7XHJcbiAgICAgIH0gZWxzZSBpZiAoZm9ybWF0ID09PSAnZGRkJykge1xyXG4gICAgICAgIGlpID0gdGhpcy5fc2hvcnRXZWVrZGF5c1BhcnNlLmluZGV4T2YobGxjKTtcclxuICAgICAgICBpZiAoaWkgIT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gaWk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlpID0gdGhpcy5fd2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpaSA9IHRoaXMuX21pbldlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlpID0gdGhpcy5fbWluV2Vla2RheXNQYXJzZS5pbmRleE9mKGxsYyk7XHJcbiAgICAgICAgaWYgKGlpICE9PSAtMSkge1xyXG4gICAgICAgICAgcmV0dXJuIGlpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpaSA9IHRoaXMuX3dlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG4gICAgICAgIGlmIChpaSAhPT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiBpaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWkgPSB0aGlzLl9zaG9ydFdlZWtkYXlzUGFyc2UuaW5kZXhPZihsbGMpO1xyXG5cclxuICAgICAgICByZXR1cm4gaWkgIT09IC0xID8gaWkgOiBudWxsO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbXB1dGVNb250aHNQYXJzZSgpIHtcclxuICAgIGNvbnN0IHNob3J0UGllY2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3QgbG9uZ1BpZWNlczogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0IG1peGVkUGllY2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IGRhdGU7XHJcblxyXG4gICAgbGV0IGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAvLyBtYWtlIHRoZSByZWdleCBpZiB3ZSBkb24ndCBoYXZlIGl0IGFscmVhZHlcclxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKDIwMDAsIGkpO1xyXG4gICAgICBzaG9ydFBpZWNlcy5wdXNoKHRoaXMubW9udGhzU2hvcnQoZGF0ZSwgJycpKTtcclxuICAgICAgbG9uZ1BpZWNlcy5wdXNoKHRoaXMubW9udGhzKGRhdGUsICcnKSk7XHJcbiAgICAgIG1peGVkUGllY2VzLnB1c2godGhpcy5tb250aHMoZGF0ZSwgJycpKTtcclxuICAgICAgbWl4ZWRQaWVjZXMucHVzaCh0aGlzLm1vbnRoc1Nob3J0KGRhdGUsICcnKSk7XHJcbiAgICB9XHJcbiAgICAvLyBTb3J0aW5nIG1ha2VzIHN1cmUgaWYgb25lIG1vbnRoIChvciBhYmJyKSBpcyBhIHByZWZpeCBvZiBhbm90aGVyIGl0XHJcbiAgICAvLyB3aWxsIG1hdGNoIHRoZSBsb25nZXIgcGllY2UuXHJcbiAgICBzaG9ydFBpZWNlcy5zb3J0KGNtcExlblJldik7XHJcbiAgICBsb25nUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgIG1peGVkUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgIHNob3J0UGllY2VzW2ldID0gcmVnZXhFc2NhcGUoc2hvcnRQaWVjZXNbaV0pO1xyXG4gICAgICBsb25nUGllY2VzW2ldID0gcmVnZXhFc2NhcGUobG9uZ1BpZWNlc1tpXSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMjQ7IGkrKykge1xyXG4gICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9tb250aHNSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHttaXhlZFBpZWNlcy5qb2luKCd8Jyl9KWAsICdpJyk7XHJcbiAgICB0aGlzLl9tb250aHNTaG9ydFJlZ2V4ID0gdGhpcy5fbW9udGhzUmVnZXg7XHJcbiAgICB0aGlzLl9tb250aHNTdHJpY3RSZWdleCA9IG5ldyBSZWdFeHAoYF4oJHtsb25nUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcclxuICAgIHRoaXMuX21vbnRoc1Nob3J0U3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7c2hvcnRQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjb21wdXRlV2Vla2RheXNQYXJzZSgpIHtcclxuICAgIGNvbnN0IG1pblBpZWNlcyA9IFtdO1xyXG4gICAgY29uc3Qgc2hvcnRQaWVjZXMgPSBbXTtcclxuICAgIGNvbnN0IGxvbmdQaWVjZXMgPSBbXTtcclxuICAgIGNvbnN0IG1peGVkUGllY2VzID0gW107XHJcblxyXG4gICAgbGV0IGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgNzsgaSsrKSB7XHJcbiAgICAgIC8vIG1ha2UgdGhlIHJlZ2V4IGlmIHdlIGRvbid0IGhhdmUgaXQgYWxyZWFkeVxyXG4gICAgICAvLyBsZXQgbW9tID0gY3JlYXRlVVRDKFsyMDAwLCAxXSkuZGF5KGkpO1xyXG4gICAgICBjb25zdCBkYXRlID0gc2V0RGF5T2ZXZWVrKG5ldyBEYXRlKERhdGUuVVRDKDIwMDAsIDEpKSwgaSwgbnVsbCwgdHJ1ZSk7XHJcbiAgICAgIGNvbnN0IG1pbnAgPSB0aGlzLndlZWtkYXlzTWluKGRhdGUpO1xyXG4gICAgICBjb25zdCBzaG9ydHAgPSB0aGlzLndlZWtkYXlzU2hvcnQoZGF0ZSk7XHJcbiAgICAgIGNvbnN0IGxvbmdwID0gdGhpcy53ZWVrZGF5cyhkYXRlKTtcclxuICAgICAgbWluUGllY2VzLnB1c2gobWlucCk7XHJcbiAgICAgIHNob3J0UGllY2VzLnB1c2goc2hvcnRwKTtcclxuICAgICAgbG9uZ1BpZWNlcy5wdXNoKGxvbmdwKTtcclxuICAgICAgbWl4ZWRQaWVjZXMucHVzaChtaW5wKTtcclxuICAgICAgbWl4ZWRQaWVjZXMucHVzaChzaG9ydHApO1xyXG4gICAgICBtaXhlZFBpZWNlcy5wdXNoKGxvbmdwKTtcclxuICAgIH1cclxuICAgIC8vIFNvcnRpbmcgbWFrZXMgc3VyZSBpZiBvbmUgd2Vla2RheSAob3IgYWJicikgaXMgYSBwcmVmaXggb2YgYW5vdGhlciBpdFxyXG4gICAgLy8gd2lsbCBtYXRjaCB0aGUgbG9uZ2VyIHBpZWNlLlxyXG4gICAgbWluUGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgIHNob3J0UGllY2VzLnNvcnQoY21wTGVuUmV2KTtcclxuICAgIGxvbmdQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgbWl4ZWRQaWVjZXMuc29ydChjbXBMZW5SZXYpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBzaG9ydFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKHNob3J0UGllY2VzW2ldKTtcclxuICAgICAgbG9uZ1BpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKGxvbmdQaWVjZXNbaV0pO1xyXG4gICAgICBtaXhlZFBpZWNlc1tpXSA9IHJlZ2V4RXNjYXBlKG1peGVkUGllY2VzW2ldKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl93ZWVrZGF5c1JlZ2V4ID0gbmV3IFJlZ0V4cChgXigke21peGVkUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcclxuICAgIHRoaXMuX3dlZWtkYXlzU2hvcnRSZWdleCA9IHRoaXMuX3dlZWtkYXlzUmVnZXg7XHJcbiAgICB0aGlzLl93ZWVrZGF5c01pblJlZ2V4ID0gdGhpcy5fd2Vla2RheXNSZWdleDtcclxuXHJcbiAgICB0aGlzLl93ZWVrZGF5c1N0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke2xvbmdQaWVjZXMuam9pbignfCcpfSlgLCAnaScpO1xyXG4gICAgdGhpcy5fd2Vla2RheXNTaG9ydFN0cmljdFJlZ2V4ID0gbmV3IFJlZ0V4cChgXigke3Nob3J0UGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcclxuICAgIHRoaXMuX3dlZWtkYXlzTWluU3RyaWN0UmVnZXggPSBuZXcgUmVnRXhwKGBeKCR7bWluUGllY2VzLmpvaW4oJ3wnKX0pYCwgJ2knKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNtcExlblJldihhOiBzdHJpbmcsIGI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgcmV0dXJuIGIubGVuZ3RoIC0gYS5sZW5ndGg7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGRlZmF1bHRDYWxlbmRhciA9IHtcclxuICBzYW1lRGF5OiAnW1RvZGF5IGF0XSBMVCcsXHJcbiAgbmV4dERheTogJ1tUb21vcnJvdyBhdF0gTFQnLFxyXG4gIG5leHRXZWVrOiAnZGRkZCBbYXRdIExUJyxcclxuICBsYXN0RGF5OiAnW1llc3RlcmRheSBhdF0gTFQnLFxyXG4gIGxhc3RXZWVrOiAnW0xhc3RdIGRkZGQgW2F0XSBMVCcsXHJcbiAgc2FtZUVsc2U6ICdMJ1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIGRlZmF1bHREYXlPZk1vbnRoT3JkaW5hbFBhcnNlLFxyXG4gIGRlZmF1bHRMb2NhbGVNb250aHMsXHJcbiAgZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxyXG4gIGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcclxuICBkZWZhdWx0TG9jYWxlV2Vla2RheXNNaW4sXHJcbiAgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQsIGRlZmF1bHRMb25nRGF0ZUZvcm1hdCwgZGVmYXVsdE9yZGluYWwsXHJcbiAgTG9jYWxlRGF0YVxyXG59IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZGVmYXVsdENhbGVuZGFyIH0gZnJvbSAnLi9jYWxlbmRhcic7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdEludmFsaWREYXRlID0gJ0ludmFsaWQgZGF0ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdExvY2FsZVdlZWsgPSB7XHJcbiAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICBkb3k6IDYgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRMb2NhbGVNZXJpZGllbVBhcnNlID0gL1thcF1cXC4/bT9cXC4/L2k7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFJlbGF0aXZlVGltZToge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgZnV0dXJlIDogJ2luICVzJyxcclxuICBwYXN0ICAgOiAnJXMgYWdvJyxcclxuICBzICA6ICdhIGZldyBzZWNvbmRzJyxcclxuICBzcyA6ICclZCBzZWNvbmRzJyxcclxuICBtICA6ICdhIG1pbnV0ZScsXHJcbiAgbW0gOiAnJWQgbWludXRlcycsXHJcbiAgaCAgOiAnYW4gaG91cicsXHJcbiAgaGggOiAnJWQgaG91cnMnLFxyXG4gIGQgIDogJ2EgZGF5JyxcclxuICBkZCA6ICclZCBkYXlzJyxcclxuICBNICA6ICdhIG1vbnRoJyxcclxuICBNTSA6ICclZCBtb250aHMnLFxyXG4gIHkgIDogJ2EgeWVhcicsXHJcbiAgeXkgOiAnJWQgeWVhcnMnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYmFzZUNvbmZpZzogTG9jYWxlRGF0YSA9IHtcclxuICBjYWxlbmRhcjogZGVmYXVsdENhbGVuZGFyLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiBkZWZhdWx0TG9uZ0RhdGVGb3JtYXQsXHJcbiAgaW52YWxpZERhdGU6IGRlZmF1bHRJbnZhbGlkRGF0ZSxcclxuICBvcmRpbmFsOiBkZWZhdWx0T3JkaW5hbCxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiBkZWZhdWx0RGF5T2ZNb250aE9yZGluYWxQYXJzZSxcclxuICByZWxhdGl2ZVRpbWU6IGRlZmF1bHRSZWxhdGl2ZVRpbWUsXHJcblxyXG4gIG1vbnRoczogZGVmYXVsdExvY2FsZU1vbnRocyxcclxuICBtb250aHNTaG9ydDogZGVmYXVsdExvY2FsZU1vbnRoc1Nob3J0LFxyXG5cclxuICB3ZWVrOiBkZWZhdWx0TG9jYWxlV2VlayxcclxuXHJcbiAgd2Vla2RheXM6IGRlZmF1bHRMb2NhbGVXZWVrZGF5cyxcclxuICB3ZWVrZGF5c01pbjogZGVmYXVsdExvY2FsZVdlZWtkYXlzTWluLFxyXG4gIHdlZWtkYXlzU2hvcnQ6IGRlZmF1bHRMb2NhbGVXZWVrZGF5c1Nob3J0LFxyXG5cclxuICBtZXJpZGllbVBhcnNlOiBkZWZhdWx0TG9jYWxlTWVyaWRpZW1QYXJzZVxyXG59O1xyXG4iLCIvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXHJcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi90eXBlLWNoZWNrcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5czxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10sIGRvbnRDb252ZXJ0OiBib29sZWFuKSB7XHJcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCk7XHJcbiAgY29uc3QgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKTtcclxuICBsZXQgZGlmZnMgPSAwO1xyXG4gIGxldCBpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSlcclxuICAgICAgfHwgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKSkge1xyXG4gICAgICBkaWZmcysrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgd2Vla09mWWVhciB9IGZyb20gJy4vd2Vlay1jYWxlbmRhci11dGlscyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gyIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJPcHRpb25zLCBXZWVrUGFyc2luZyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XHJcblxyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFdlZWsoKSB7XHJcbiAgYWRkRm9ybWF0VG9rZW4oJ3cnLCBbJ3d3JywgMiwgZmFsc2VdLCAnd28nLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0V2VlayhkYXRlLCBvcHRzLmxvY2FsZSlcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdXJywgWydXVycsIDIsIGZhbHNlXSwgJ1dvJyxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0SVNPV2VlayhkYXRlKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbi8vIEFMSUFTRVNcclxuXHJcbiAgYWRkVW5pdEFsaWFzKCd3ZWVrJywgJ3cnKTtcclxuICBhZGRVbml0QWxpYXMoJ2lzb1dlZWsnLCAnVycpO1xyXG5cclxuLy8gUFJJT1JJVElFU1xyXG5cclxuICBhZGRVbml0UHJpb3JpdHkoJ3dlZWsnLCA1KTtcclxuICBhZGRVbml0UHJpb3JpdHkoJ2lzb1dlZWsnLCA1KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbigndycsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignd3cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUmVnZXhUb2tlbignVycsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignV1cnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcblxyXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxyXG4gICAgWyd3JywgJ3d3JywgJ1cnLCAnV1cnXSxcclxuICAgIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIHdlZWs6IFdlZWtQYXJzaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCB0b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgICB3ZWVrW3Rva2VuLnN1YnN0cigwLCAxKV0gPSB0b0ludChpbnB1dCk7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0U2V0V2VlayAoaW5wdXQpIHtcclxuLy8gICB2YXIgd2VlayA9IHRoaXMubG9jYWxlRGF0YSgpLndlZWsodGhpcyk7XHJcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xyXG4vLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpKTogRGF0ZSB7XHJcbiAgY29uc3Qgd2VlayA9IGdldFdlZWsoZGF0ZSwgbG9jYWxlKTtcclxuXHJcbiAgcmV0dXJuIGFkZChkYXRlLCAoaW5wdXQgLSB3ZWVrKSAqIDcsICdkYXknKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWsoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgcmV0dXJuIGxvY2FsZS53ZWVrKGRhdGUsIGlzVVRDKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT1dlZWsgKGlucHV0KSB7XHJcbi8vICAgdmFyIHdlZWsgPSB3ZWVrT2ZZZWFyKHRoaXMsIDEsIDQpLndlZWs7XHJcbi8vICAgcmV0dXJuIGlucHV0ID09IG51bGwgPyB3ZWVrIDogdGhpcy5hZGQoKGlucHV0IC0gd2VlaykgKiA3LCAnZCcpO1xyXG4vLyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0SVNPV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyKTogRGF0ZSB7XHJcbiAgY29uc3Qgd2VlayA9IGdldElTT1dlZWsoZGF0ZSk7XHJcblxyXG4gIHJldHVybiBhZGQoZGF0ZSwgKGlucHV0IC0gd2VlaykgKiA3LCAnZGF5Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJU09XZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgMSwgNCwgaXNVVEMpLndlZWs7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiwgbWF0Y2gxdG80LCBtYXRjaDF0bzYsIG1hdGNoMiwgbWF0Y2g0LCBtYXRjaDYsIG1hdGNoU2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRXZWVrUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IHBhcnNlVHdvRGlnaXRZZWFyIH0gZnJvbSAnLi95ZWFyJztcclxuaW1wb3J0IHsgZGF5T2ZZZWFyRnJvbVdlZWtzLCB3ZWVrT2ZZZWFyLCB3ZWVrc0luWWVhciB9IGZyb20gJy4vd2Vlay1jYWxlbmRhci11dGlscyc7XHJcbmltcG9ydCB7IGNyZWF0ZVVUQ0RhdGUgfSBmcm9tICcuLi9jcmVhdGUvZGF0ZS1mcm9tLWFycmF5JztcclxuaW1wb3J0IHsgZ2V0SVNPV2VlaywgZ2V0V2VlayB9IGZyb20gJy4vd2Vlayc7XHJcbmltcG9ydCB7IGdldElTT0RheU9mV2VlaywgZ2V0TG9jYWxlRGF5T2ZXZWVrIH0gZnJvbSAnLi9kYXktb2Ytd2Vlayc7XHJcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcclxuaW1wb3J0IHsgc2V0RGF0ZSwgc2V0RnVsbFllYXIsIHNldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcclxuaW1wb3J0IHsgZ2V0RGF0ZSwgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXJGbiwgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuLy8gRk9STUFUVElOR1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRXZWVrWWVhcigpIHtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ2dnJywgMiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgLy8gcmV0dXJuIHRoaXMud2Vla1llYXIoKSAlIDEwMDtcclxuICAgICAgcmV0dXJuIChnZXRXZWVrWWVhcihkYXRlLCBvcHRzLmxvY2FsZSkgJSAxMDApLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydHRycsIDIsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uIChkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgLy8gcmV0dXJuIHRoaXMuaXNvV2Vla1llYXIoKSAlIDEwMDtcclxuICAgICAgcmV0dXJuIChnZXRJU09XZWVrWWVhcihkYXRlKSAlIDEwMCkudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRXZWVrWWVhckZvcm1hdFRva2VuKCdnZ2dnJywgX2dldFdlZWtZZWFyRm9ybWF0Q2IpO1xyXG4gIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ2dnZ2dnJywgX2dldFdlZWtZZWFyRm9ybWF0Q2IpO1xyXG4gIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4oJ0dHR0cnLCBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYik7XHJcbiAgYWRkV2Vla1llYXJGb3JtYXRUb2tlbignR0dHR0cnLCBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYik7XHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygnd2Vla1llYXInLCAnZ2cnKTtcclxuICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtZZWFyJywgJ0dHJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG5cclxuICBhZGRVbml0UHJpb3JpdHkoJ3dlZWtZZWFyJywgMSk7XHJcbiAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrWWVhcicsIDEpO1xyXG5cclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignRycsIG1hdGNoU2lnbmVkKTtcclxuICBhZGRSZWdleFRva2VuKCdnJywgbWF0Y2hTaWduZWQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0dHJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2dnJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0dHR0cnLCBtYXRjaDF0bzQsIG1hdGNoNCk7XHJcbiAgYWRkUmVnZXhUb2tlbignZ2dnZycsIG1hdGNoMXRvNCwgbWF0Y2g0KTtcclxuICBhZGRSZWdleFRva2VuKCdHR0dHRycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcclxuICBhZGRSZWdleFRva2VuKCdnZ2dnZycsIG1hdGNoMXRvNiwgbWF0Y2g2KTtcclxuXHJcbiAgYWRkV2Vla1BhcnNlVG9rZW4oWydnZ2dnJywgJ2dnZ2dnJywgJ0dHR0cnLCAnR0dHR0cnXSxcclxuICAgIGZ1bmN0aW9uIChpbnB1dCwgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZywgdG9rZW4pIHtcclxuICAgICAgd2Vla1t0b2tlbi5zdWJzdHIoMCwgMildID0gdG9JbnQoaW5wdXQpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH0pO1xyXG5cclxuICBhZGRXZWVrUGFyc2VUb2tlbihbJ2dnJywgJ0dHJ10sIGZ1bmN0aW9uIChpbnB1dCwgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZywgdG9rZW4pIHtcclxuICAgIHdlZWtbdG9rZW5dID0gcGFyc2VUd29EaWdpdFllYXIoaW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFdlZWtZZWFyRm9ybWF0VG9rZW4odG9rZW46IHN0cmluZywgZ2V0dGVyOiBEYXRlRm9ybWF0dGVyRm4pOiB2b2lkIHtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbdG9rZW4sIHRva2VuLmxlbmd0aCwgZmFsc2VdLCBudWxsLCBnZXR0ZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0V2Vla1llYXJGb3JtYXRDYihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGdldFdlZWtZZWFyKGRhdGUsIG9wdHMubG9jYWxlKS50b1N0cmluZygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfZ2V0SVNPV2Vla1llYXJGb3JtYXRDYihkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICByZXR1cm4gZ2V0SVNPV2Vla1llYXIoZGF0ZSkudG9TdHJpbmcoKTtcclxufVxyXG5cclxuLy8gTU9NRU5UU1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFdlZWtZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIgfCBEYXRlIHtcclxuICByZXR1cm4gZ2V0U2V0V2Vla1llYXJIZWxwZXIoZGF0ZSxcclxuICAgIGlucHV0LFxyXG4gICAgLy8gdGhpcy53ZWVrKCksXHJcbiAgICBnZXRXZWVrKGRhdGUsIGxvY2FsZSwgaXNVVEMpLFxyXG4gICAgLy8gdGhpcy53ZWVrZGF5KCksXHJcbiAgICBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZSwgbG9jYWxlLCBpc1VUQyksXHJcbiAgICBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSxcclxuICAgIGxvY2FsZS5maXJzdERheU9mWWVhcigpLFxyXG4gICAgaXNVVEMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla1llYXIoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgcmV0dXJuIHdlZWtPZlllYXIoZGF0ZSwgbG9jYWxlLmZpcnN0RGF5T2ZXZWVrKCksIGxvY2FsZS5maXJzdERheU9mWWVhcigpLCBpc1VUQykueWVhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldElTT1dlZWtZZWFyKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB8IERhdGUge1xyXG4gIHJldHVybiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlLCBpbnB1dCwgZ2V0SVNPV2VlayhkYXRlLCBpc1VUQyksIGdldElTT0RheU9mV2VlayhkYXRlLCBpc1VUQyksIDEsIDQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPV2Vla1llYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuKTogbnVtYmVyIHtcclxuICByZXR1cm4gd2Vla09mWWVhcihkYXRlLCAxLCA0LCBpc1VUQykueWVhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldElTT1dlZWtzSW5ZZWFyKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbikge1xyXG4gIHJldHVybiB3ZWVrc0luWWVhcihnZXRGdWxsWWVhcihkYXRlLCBpc1VUQyksIDEsIDQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2Vla3NJblllYXIoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpKTogbnVtYmVyIHtcclxuICByZXR1cm4gd2Vla3NJblllYXIoZ2V0RnVsbFllYXIoZGF0ZSwgaXNVVEMpLCBsb2NhbGUuZmlyc3REYXlPZldlZWsoKSwgbG9jYWxlLmZpcnN0RGF5T2ZZZWFyKCkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZXRXZWVrWWVhckhlbHBlcihkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyLCB3ZWVrOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlZWtkYXk6IG51bWJlciwgZG93OiBudW1iZXIsIGRveTogbnVtYmVyLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIgfCBEYXRlIHtcclxuICBpZiAoIWlucHV0KSB7XHJcbiAgICByZXR1cm4gZ2V0V2Vla1llYXIoZGF0ZSwgdm9pZCAwLCBpc1VUQyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB3ZWVrc1RhcmdldCA9IHdlZWtzSW5ZZWFyKGlucHV0LCBkb3csIGRveSk7XHJcbiAgY29uc3QgX3dlZWsgPSB3ZWVrID4gd2Vla3NUYXJnZXQgPyB3ZWVrc1RhcmdldCA6IHdlZWs7XHJcblxyXG4gIHJldHVybiBzZXRXZWVrQWxsKGRhdGUsIGlucHV0LCBfd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRXZWVrQWxsKGRhdGU6IERhdGUsIHdlZWtZZWFyOiBudW1iZXIsIHdlZWs6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICB3ZWVrZGF5OiBudW1iZXIsIGRvdzogbnVtYmVyLCBkb3k6IG51bWJlcik6IERhdGUge1xyXG4gIGNvbnN0IGRheU9mWWVhckRhdGEgPSBkYXlPZlllYXJGcm9tV2Vla3Mod2Vla1llYXIsIHdlZWssIHdlZWtkYXksIGRvdywgZG95KTtcclxuICBjb25zdCBfZGF0ZSA9IGNyZWF0ZVVUQ0RhdGUoZGF5T2ZZZWFyRGF0YS55ZWFyLCAwLCBkYXlPZlllYXJEYXRhLmRheU9mWWVhcik7XHJcbiAgc2V0RnVsbFllYXIoZGF0ZSwgZ2V0RnVsbFllYXIoX2RhdGUsIHRydWUpLCB0cnVlKTtcclxuICBzZXRNb250aChkYXRlLCBnZXRNb250aChfZGF0ZSwgdHJ1ZSksIHRydWUpO1xyXG4gIHNldERhdGUoZGF0ZSwgZ2V0RGF0ZShfZGF0ZSwgdHJ1ZSksIHRydWUpO1xyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbi8vIHRvZG86IGFkZCBzdXBwb3J0IGZvciB0aW1lem9uZXNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGltZXpvbmUoKSB7XHJcbiAgLy8gRk9STUFUVElOR1xyXG4gIGFkZEZvcm1hdFRva2VuKCd6JywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMuaXNVVEMgPyAnVVRDJyA6ICcnO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4oJ3p6JywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMuaXNVVEMgPyAnQ29vcmRpbmF0ZWQgVW5pdmVyc2FsIFRpbWUnIDogJyc7XHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG5cclxuLy8gTU9NRU5UU1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVBYmJyKGlzVVRDOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIGlzVVRDID8gJ1VUQycgOiAnJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFpvbmVOYW1lKGlzVVRDOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIGlzVVRDID8gJ0Nvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lJyA6ICcnO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IHVuaXggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaFNpZ25lZCwgbWF0Y2hUaW1lc3RhbXAgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW59IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRUaW1lc3RhbXAoKSB7XHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ1gnLCBudWxsLCBudWxsLCBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB1bml4KGRhdGUpXHJcbiAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgfSk7XHJcbiAgYWRkRm9ybWF0VG9rZW4oJ3gnLCBudWxsLCBudWxsLCBmdW5jdGlvbihkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBkYXRlLnZhbHVlT2YoKVxyXG4gICAgICAudG9TdHJpbmcoMTApO1xyXG4gIH0pO1xyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCd4JywgbWF0Y2hTaWduZWQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ1gnLCBtYXRjaFRpbWVzdGFtcCk7XHJcblxyXG4gIGFkZFBhcnNlVG9rZW4oJ1gnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUocGFyc2VGbG9hdChpbnB1dCkgKiAxMDAwKTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG4gIGFkZFBhcnNlVG9rZW4oJ3gnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUodG9JbnQoaW5wdXQpKTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFkZEZvcm1hdFRva2VuIH0gZnJvbSAnLi4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IGdldFNlY29uZHMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDF0bzIsIG1hdGNoMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucyB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdFNlY29uZCgpIHtcclxuLy8gRk9STUFUVElOR1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbigncycsIFsnc3MnLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRTZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ3NlY29uZCcsICdzJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG5cclxuICBhZGRVbml0UHJpb3JpdHkoJ3NlY29uZCcsIDE1KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbigncycsIG1hdGNoMXRvMik7XHJcbiAgYWRkUmVnZXhUb2tlbignc3MnLCBtYXRjaDF0bzIsIG1hdGNoMik7XHJcbiAgYWRkUGFyc2VUb2tlbihbJ3MnLCAnc3MnXSwgU0VDT05EKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IE1PTlRIIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgc2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0UXVhcnRlcigpIHtcclxuLy8gRk9STUFUVElOR1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignUScsIG51bGwsICdRbycsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXRRdWFydGVyKGRhdGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ3F1YXJ0ZXInLCAnUScpO1xyXG5cclxuLy8gUFJJT1JJVFlcclxuXHJcbiAgYWRkVW5pdFByaW9yaXR5KCdxdWFydGVyJywgNyk7XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ1EnLCBtYXRjaDEpO1xyXG4gIGFkZFBhcnNlVG9rZW4oJ1EnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgYXJyYXlbTU9OVEhdID0gKHRvSW50KGlucHV0KSAtIDEpICogMztcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG59XHJcblxyXG4vLyBNT01FTlRTXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UXVhcnRlcihkYXRlOiBEYXRlLCBpc1VUQyA9IGZhbHNlKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5jZWlsKChnZXRNb250aChkYXRlLCBpc1VUQykgKyAxKSAvIDMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0UXVhcnRlcihkYXRlOiBEYXRlLCBxdWFydGVyOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIHJldHVybiBzZXRNb250aChkYXRlLCAocXVhcnRlciAtIDEpICogMyArIGdldE1vbnRoKGRhdGUsIGlzVVRDKSAlIDMsIGlzVVRDKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFNldFF1YXJ0ZXIoaW5wdXQpIHtcclxuLy8gICByZXR1cm4gaW5wdXQgPT0gbnVsbFxyXG4vLyAgICAgPyBNYXRoLmNlaWwoKHRoaXMubW9udGgoKSArIDEpIC8gMylcclxuLy8gICAgIDogdGhpcy5tb250aCgoaW5wdXQgLSAxKSAqIDMgKyB0aGlzLm1vbnRoKCkgJSAzKTtcclxuLy8gfVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIG1heC1saW5lLWxlbmd0aFxyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyB6ZXJvRmlsbCB9IGZyb20gJy4uL3V0aWxzL3plcm8tZmlsbCc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaE9mZnNldCwgbWF0Y2hTaG9ydE9mZnNldCB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IERhdGVBcnJheSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcclxuaW1wb3J0IHsgc2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLXNldHRlcnMnO1xyXG5cclxuZnVuY3Rpb24gYWRkT2Zmc2V0Rm9ybWF0VG9rZW4odG9rZW46IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcpOiB2b2lkIHtcclxuICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKGRhdGU6IERhdGUsIGNvbmZpZyk6IHN0cmluZyB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gZ2V0VVRDT2Zmc2V0KGRhdGUsIHtfaXNVVEM6IGNvbmZpZy5pc1VUQywgX29mZnNldDogY29uZmlnLm9mZnNldH0pO1xyXG4gICAgbGV0IHNpZ24gPSAnKyc7XHJcbiAgICBpZiAob2Zmc2V0IDwgMCkge1xyXG4gICAgICBvZmZzZXQgPSAtb2Zmc2V0O1xyXG4gICAgICBzaWduID0gJy0nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaWduICsgemVyb0ZpbGwofn4ob2Zmc2V0IC8gNjApLCAyKSArIHNlcGFyYXRvciArIHplcm9GaWxsKH5+KG9mZnNldCkgJSA2MCwgMik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0T2Zmc2V0KCkge1xyXG4gIGFkZE9mZnNldEZvcm1hdFRva2VuKCdaJywgJzonKTtcclxuICBhZGRPZmZzZXRGb3JtYXRUb2tlbignWlonLCAnJyk7XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ1onLCBtYXRjaFNob3J0T2Zmc2V0KTtcclxuICBhZGRSZWdleFRva2VuKCdaWicsIG1hdGNoU2hvcnRPZmZzZXQpO1xyXG4gIGFkZFBhcnNlVG9rZW4oWydaJywgJ1paJ10sIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25maWcuX3VzZVVUQyA9IHRydWU7XHJcbiAgICBjb25maWcuX3R6bSA9IG9mZnNldEZyb21TdHJpbmcobWF0Y2hTaG9ydE9mZnNldCwgaW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIEhFTFBFUlNcclxuXHJcbi8vIHRpbWV6b25lIGNodW5rZXJcclxuLy8gJysxMDowMCcgPiBbJzEwJywgICcwMCddXHJcbi8vICctMTUzMCcgID4gWyctMTUnLCAnMzAnXVxyXG5jb25zdCBjaHVua09mZnNldCA9IC8oW1xcK1xcLV18XFxkXFxkKS9naTtcclxuXHJcbmZ1bmN0aW9uIG9mZnNldEZyb21TdHJpbmcobWF0Y2hlcjogUmVnRXhwLCBzdHI6IHN0cmluZyk6IG51bWJlciB7XHJcbiAgY29uc3QgbWF0Y2hlcyA9IChzdHIgfHwgJycpLm1hdGNoKG1hdGNoZXIpO1xyXG5cclxuICBpZiAobWF0Y2hlcyA9PT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjaHVuayA9IG1hdGNoZXNbbWF0Y2hlcy5sZW5ndGggLSAxXTtcclxuICBjb25zdCBwYXJ0cyA9IGNodW5rLm1hdGNoKGNodW5rT2Zmc2V0KSB8fCBbJy0nLCAnMCcsICcwJ107XHJcbiAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KHBhcnRzWzFdLCAxMCkgKiA2MCArIHRvSW50KHBhcnRzWzJdKTtcclxuICBjb25zdCBfbWluID0gcGFydHNbMF0gPT09ICcrJyA/IG1pbnV0ZXMgOiAtbWludXRlcztcclxuXHJcbiAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgPyAwIDogX21pbjtcclxufVxyXG5cclxuLy8gUmV0dXJuIGEgbW9tZW50IGZyb20gaW5wdXQsIHRoYXQgaXMgbG9jYWwvdXRjL3pvbmUgZXF1aXZhbGVudCB0byBtb2RlbC5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lV2l0aE9mZnNldChpbnB1dDogRGF0ZSwgZGF0ZTogRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pOiBEYXRlIHtcclxuICBpZiAoIWNvbmZpZy5faXNVVEMpIHtcclxuICAgIHJldHVybiBpbnB1dDtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlcyA9IGNsb25lRGF0ZShkYXRlKTtcclxuICAvLyB0b2RvOiBpbnB1dC5fZCAtIHJlcy5fZCArICgocmVzLl9vZmZzZXQgfHwgMCkgLSAoaW5wdXQuX29mZnNldCB8fCAwKSkqNjAwMDBcclxuICBjb25zdCBvZmZzZXREaWZmID0gKGNvbmZpZy5fb2Zmc2V0IHx8IDApICogNjAwMDA7XHJcbiAgY29uc3QgZGlmZiA9IGlucHV0LnZhbHVlT2YoKSAtIHJlcy52YWx1ZU9mKCkgKyBvZmZzZXREaWZmO1xyXG4gIC8vIFVzZSBsb3ctbGV2ZWwgYXBpLCBiZWNhdXNlIHRoaXMgZm4gaXMgbG93LWxldmVsIGFwaS5cclxuICByZXMuc2V0VGltZShyZXMudmFsdWVPZigpICsgZGlmZik7XHJcbiAgLy8gdG9kbzogYWRkIHRpbWV6b25lIGhhbmRsaW5nXHJcbiAgLy8gaG9va3MudXBkYXRlT2Zmc2V0KHJlcywgZmFsc2UpO1xyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF0ZU9mZnNldChkYXRlOiBEYXRlKTogbnVtYmVyIHtcclxuICAvLyBPbiBGaXJlZm94LjI0IERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyBhIGZsb2F0aW5nIHBvaW50LlxyXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L3B1bGwvMTg3MVxyXG4gIHJldHVybiAtTWF0aC5yb3VuZChkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgLyAxNSkgKiAxNTtcclxufVxyXG5cclxuLy8gSE9PS1NcclxuXHJcbi8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2hlbmV2ZXIgYSBtb21lbnQgaXMgbXV0YXRlZC5cclxuLy8gSXQgaXMgaW50ZW5kZWQgdG8ga2VlcCB0aGUgb2Zmc2V0IGluIHN5bmMgd2l0aCB0aGUgdGltZXpvbmUuXHJcbi8vIHRvZG86IGl0J3MgZnJvbSBtb21lbnQgdGltZXpvbmVzXHJcbi8vIGhvb2tzLnVwZGF0ZU9mZnNldCA9IGZ1bmN0aW9uICgpIHtcclxuLy8gfTtcclxuXHJcbi8vIE1PTUVOVFNcclxuXHJcbi8vIGtlZXBMb2NhbFRpbWUgPSB0cnVlIG1lYW5zIG9ubHkgY2hhbmdlIHRoZSB0aW1lem9uZSwgd2l0aG91dFxyXG4vLyBhZmZlY3RpbmcgdGhlIGxvY2FsIGhvdXIuIFNvIDU6MzE6MjYgKzAzMDAgLS1bdXRjT2Zmc2V0KDIsIHRydWUpXS0tPlxyXG4vLyA1OjMxOjI2ICswMjAwIEl0IGlzIHBvc3NpYmxlIHRoYXQgNTozMToyNiBkb2Vzbid0IGV4aXN0IHdpdGggb2Zmc2V0XHJcbi8vICswMjAwLCBzbyB3ZSBhZGp1c3QgdGhlIHRpbWUgYXMgbmVlZGVkLCB0byBiZSB2YWxpZC5cclxuLy9cclxuLy8gS2VlcGluZyB0aGUgdGltZSBhY3R1YWxseSBhZGRzL3N1YnRyYWN0cyAob25lIGhvdXIpXHJcbi8vIGZyb20gdGhlIGFjdHVhbCByZXByZXNlbnRlZCB0aW1lLiBUaGF0IGlzIHdoeSB3ZSBjYWxsIHVwZGF0ZU9mZnNldFxyXG4vLyBhIHNlY29uZCB0aW1lLiBJbiBjYXNlIGl0IHdhbnRzIHVzIHRvIGNoYW5nZSB0aGUgb2Zmc2V0IGFnYWluXHJcbi8vIF9jaGFuZ2VJblByb2dyZXNzID09IHRydWUgY2FzZSwgdGhlbiB3ZSBoYXZlIHRvIGFkanVzdCwgYmVjYXVzZVxyXG4vLyB0aGVyZSBpcyBubyBzdWNoIHRpbWUgaW4gdGhlIGdpdmVuIHRpbWV6b25lLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVRDT2Zmc2V0KGRhdGU6IERhdGUsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IG51bWJlciB7XHJcbiAgY29uc3QgX29mZnNldCA9IGNvbmZpZy5fb2Zmc2V0IHx8IDA7XHJcblxyXG4gIHJldHVybiBjb25maWcuX2lzVVRDID8gX29mZnNldCA6IGdldERhdGVPZmZzZXQoZGF0ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRVVENPZmZzZXQoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciB8IHN0cmluZywga2VlcExvY2FsVGltZT86IGJvb2xlYW4sIGtlZXBNaW51dGVzPzogYm9vbGVhbiwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KTogRGF0ZSB7XHJcbiAgY29uc3Qgb2Zmc2V0ID0gY29uZmlnLl9vZmZzZXQgfHwgMDtcclxuICBsZXQgbG9jYWxBZGp1c3Q7XHJcbiAgbGV0IF9pbnB1dCA9IGlucHV0O1xyXG4gIGxldCBfZGF0ZSA9IGRhdGU7XHJcblxyXG4gIGlmIChpc1N0cmluZyhfaW5wdXQpKSB7XHJcbiAgICBfaW5wdXQgPSBvZmZzZXRGcm9tU3RyaW5nKG1hdGNoU2hvcnRPZmZzZXQsIF9pbnB1dCk7XHJcbiAgICBpZiAoX2lucHV0ID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBfZGF0ZTtcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKGlzTnVtYmVyKF9pbnB1dCkgJiYgTWF0aC5hYnMoX2lucHV0KSA8IDE2ICYmICFrZWVwTWludXRlcykge1xyXG4gICAgX2lucHV0ID0gX2lucHV0ICogNjA7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNvbmZpZy5faXNVVEMgJiYga2VlcExvY2FsVGltZSkge1xyXG4gICAgbG9jYWxBZGp1c3QgPSBnZXREYXRlT2Zmc2V0KF9kYXRlKTtcclxuICB9XHJcbiAgY29uZmlnLl9vZmZzZXQgPSBfaW5wdXQ7XHJcbiAgY29uZmlnLl9pc1VUQyA9IHRydWU7XHJcbiAgaWYgKGxvY2FsQWRqdXN0ICE9IG51bGwpIHtcclxuICAgIF9kYXRlID0gYWRkKF9kYXRlLCBsb2NhbEFkanVzdCwgJ21pbnV0ZXMnKTtcclxuICB9XHJcbiAgaWYgKG9mZnNldCAhPT0gX2lucHV0KSB7XHJcbiAgICBpZiAoIWtlZXBMb2NhbFRpbWUgfHwgY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzKSB7XHJcbiAgICAgIF9kYXRlID0gYWRkKF9kYXRlLCBfaW5wdXQgLSBvZmZzZXQsICdtaW51dGVzJywgY29uZmlnLl9pc1VUQyk7XHJcbiAgICAgIC8vIGFkZFN1YnRyYWN0KHRoaXMsIGNyZWF0ZUR1cmF0aW9uKF9pbnB1dCAtIG9mZnNldCwgJ20nKSwgMSwgZmFsc2UpO1xyXG4gICAgfSBlbHNlIGlmICghY29uZmlnLl9jaGFuZ2VJblByb2dyZXNzKSB7XHJcbiAgICAgIGNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcyA9IHRydWU7XHJcbiAgICAgIC8vIHRvZG86IGFkZCB0aW1lem9uZSBoYW5kbGluZ1xyXG4gICAgICAvLyBob29rcy51cGRhdGVPZmZzZXQodGhpcywgdHJ1ZSk7XHJcbiAgICAgIGNvbmZpZy5fY2hhbmdlSW5Qcm9ncmVzcyA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX2RhdGU7XHJcbn1cclxuXHJcbi8qXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRab25lKGlucHV0LCBrZWVwTG9jYWxUaW1lKSB7XHJcbiAgaWYgKGlucHV0ICE9IG51bGwpIHtcclxuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIGlucHV0ID0gLWlucHV0O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXRjT2Zmc2V0KGlucHV0LCBrZWVwTG9jYWxUaW1lKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIC10aGlzLnV0Y09mZnNldCgpO1xyXG4gIH1cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvVVRDKGRhdGU6IERhdGUsIGtlZXBMb2NhbFRpbWU/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCAwLCBrZWVwTG9jYWxUaW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF5bGlnaHRTYXZpbmdUaW1lKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuXHJcbiAgcmV0dXJuIChnZXRVVENPZmZzZXQoZGF0ZSkgPiBnZXRVVENPZmZzZXQoc2V0TW9udGgoY2xvbmVEYXRlKGRhdGUpLCAwKSlcclxuICAgIHx8IGdldFVUQ09mZnNldChkYXRlKSA+IGdldFVUQ09mZnNldChzZXRNb250aChjbG9uZURhdGUoZGF0ZSksIDUpKSk7XHJcbn1cclxuXHJcbi8qZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvTG9jYWwoZGF0ZTogRGF0ZSwgaXNVVEM/OiBib29sZWFuLCBrZWVwTG9jYWxUaW1lPzogYm9vbGVhbikge1xyXG4gIGlmICh0aGlzLl9pc1VUQykge1xyXG4gICAgdGhpcy51dGNPZmZzZXQoMCwga2VlcExvY2FsVGltZSk7XHJcbiAgICB0aGlzLl9pc1VUQyA9IGZhbHNlO1xyXG5cclxuICAgIGlmIChrZWVwTG9jYWxUaW1lKSB7XHJcbiAgICAgIHRoaXMuc3VidHJhY3QoZ2V0RGF0ZU9mZnNldCh0aGlzKSwgJ20nKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRoaXM7XHJcbn0qL1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldE9mZnNldFRvUGFyc2VkT2Zmc2V0KGRhdGU6IERhdGUsIGlucHV0OiBzdHJpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcgPSB7fSk6IERhdGUge1xyXG4gIGlmIChjb25maWcuX3R6bSAhPSBudWxsKSB7XHJcbiAgICByZXR1cm4gc2V0VVRDT2Zmc2V0KGRhdGUsIGNvbmZpZy5fdHptLCBmYWxzZSwgdHJ1ZSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIGNvbnN0IHRab25lID0gb2Zmc2V0RnJvbVN0cmluZyhtYXRjaE9mZnNldCwgaW5wdXQpO1xyXG4gICAgaWYgKHRab25lICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHNldFVUQ09mZnNldChkYXRlLCB0Wm9uZSwgZmFsc2UsIGZhbHNlLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXRVVENPZmZzZXQoZGF0ZSwgMCwgdHJ1ZSwgZmFsc2UsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhc0FsaWduZWRIb3VyT2Zmc2V0KGRhdGU6IERhdGUsIGlucHV0PzogRGF0ZSkge1xyXG4gIGNvbnN0IF9pbnB1dCA9IGlucHV0ID8gZ2V0VVRDT2Zmc2V0KGlucHV0LCB7IF9pc1VUQzogZmFsc2UgfSkgOiAwO1xyXG5cclxuICByZXR1cm4gKGdldFVUQ09mZnNldChkYXRlKSAtIF9pbnB1dCkgJSA2MCA9PT0gMDtcclxufVxyXG5cclxuXHJcbi8vIERFUFJFQ0FURURcclxuLypleHBvcnQgZnVuY3Rpb24gaXNEYXlsaWdodFNhdmluZ1RpbWVTaGlmdGVkKCkge1xyXG4gIGlmICghaXNVbmRlZmluZWQodGhpcy5faXNEU1RTaGlmdGVkKSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcclxuICB9XHJcblxyXG4gIGNvbnN0IGMgPSB7fTtcclxuXHJcbiAgY29weUNvbmZpZyhjLCB0aGlzKTtcclxuICBjID0gcHJlcGFyZUNvbmZpZyhjKTtcclxuXHJcbiAgaWYgKGMuX2EpIHtcclxuICAgIGNvbnN0IG90aGVyID0gYy5faXNVVEMgPyBjcmVhdGVVVEMoYy5fYSkgOiBjcmVhdGVMb2NhbChjLl9hKTtcclxuICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IHRoaXMuaXNWYWxpZCgpICYmXHJcbiAgICAgIGNvbXBhcmVBcnJheXMoYy5fYSwgb3RoZXIudG9BcnJheSgpKSA+IDA7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRoaXMuX2lzRFNUU2hpZnRlZCA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXMuX2lzRFNUU2hpZnRlZDtcclxufSovXHJcblxyXG4vLyBpbiBLaHJvbm9zXHJcbi8qZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWwoKSB7XHJcbiAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gIXRoaXMuX2lzVVRDIDogZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1V0Y09mZnNldCgpIHtcclxuICByZXR1cm4gdGhpcy5pc1ZhbGlkKCkgPyB0aGlzLl9pc1VUQyA6IGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVdGMoKSB7XHJcbiAgcmV0dXJuIHRoaXMuaXNWYWxpZCgpID8gdGhpcy5faXNVVEMgJiYgdGhpcy5fb2Zmc2V0ID09PSAwIDogZmFsc2U7XHJcbn0qL1xyXG4iLCJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBnZXRNaW51dGVzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IE1JTlVURSB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcclxuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNaW51dGUoKSB7XHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ20nLCBbJ21tJywgMiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbi8vIEFMSUFTRVNcclxuXHJcbiAgYWRkVW5pdEFsaWFzKCdtaW51dGUnLCAnbScpO1xyXG5cclxuLy8gUFJJT1JJVFlcclxuXHJcbiAgYWRkVW5pdFByaW9yaXR5KCdtaW51dGUnLCAxNCk7XHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGFkZFJlZ2V4VG9rZW4oJ20nLCBtYXRjaDF0bzIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ21tJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gIGFkZFBhcnNlVG9rZW4oWydtJywgJ21tJ10sIE1JTlVURSk7XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZVxyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG5pbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBhZGRSZWdleFRva2VuLCBtYXRjaDEsIG1hdGNoMXRvMywgbWF0Y2gyLCBtYXRjaDMsIG1hdGNoVW5zaWduZWQgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IE1JTExJU0VDT05EIH0gZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgYWRkUGFyc2VUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3Rva2VuJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlRm9ybWF0dGVyT3B0aW9ucywgV2Vla1BhcnNpbmcgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRNaWxsaXNlY29uZHMgfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0TWlsbGlzZWNvbmQoKSB7XHJcbiAgYWRkRm9ybWF0VG9rZW4oJ1MnLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKH5+KGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAvIDEwMCkpLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTJywgMiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKH5+KGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAvIDEwKSkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTJywgMywgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTJywgNCwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTJywgNSwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMCkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1MnLCA2LCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMCkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTJywgNywgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDAwKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTU1NTU1NTJywgOCwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDAwMCkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTU1MnLCA5LCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAoZ2V0TWlsbGlzZWNvbmRzKGRhdGUsIG9wdHMuaXNVVEMpICogMTAwMDAwMCkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ21pbGxpc2Vjb25kJywgJ21zJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG5cclxuICBhZGRVbml0UHJpb3JpdHkoJ21pbGxpc2Vjb25kJywgMTYpO1xyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdTJywgbWF0Y2gxdG8zLCBtYXRjaDEpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ1NTJywgbWF0Y2gxdG8zLCBtYXRjaDIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ1NTUycsIG1hdGNoMXRvMywgbWF0Y2gzKTtcclxuXHJcbiAgbGV0IHRva2VuO1xyXG4gIGZvciAodG9rZW4gPSAnU1NTUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcclxuICAgIGFkZFJlZ2V4VG9rZW4odG9rZW4sIG1hdGNoVW5zaWduZWQpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcGFyc2VNcyhpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgYXJyYXlbTUlMTElTRUNPTkRdID0gdG9JbnQocGFyc2VGbG9hdChgMC4ke2lucHV0fWApICogMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIGZvciAodG9rZW4gPSAnUyc7IHRva2VuLmxlbmd0aCA8PSA5OyB0b2tlbiArPSAnUycpIHtcclxuICAgIGFkZFBhcnNlVG9rZW4odG9rZW4sIHBhcnNlTXMpO1xyXG4gIH1cclxuLy8gTU9NRU5UU1xyXG59XHJcbiIsImltcG9ydCB7IGdldEhvdXJzLCBnZXRNaW51dGVzLCBnZXRTZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIsIG1hdGNoM3RvNCwgbWF0Y2g1dG82IH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRQYXJzZVRva2VuIH0gZnJvbSAnLi4vcGFyc2UvdG9rZW4nO1xyXG5pbXBvcnQgeyBIT1VSLCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy1mbGFncyc7XHJcbmltcG9ydCB7IGFkZFVuaXRQcmlvcml0eSB9IGZyb20gJy4vcHJpb3JpdGllcyc7XHJcbmltcG9ydCB7IGFkZFVuaXRBbGlhcyB9IGZyb20gJy4vYWxpYXNlcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRIb3VyKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGZ1bmN0aW9uIGhGb3JtYXQoZGF0ZTogRGF0ZSwgaXNVVEM6IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldEhvdXJzKGRhdGUsIGlzVVRDKSAlIDEyIHx8IDEyO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24ga0Zvcm1hdChkYXRlOiBEYXRlLCBpc1VUQzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgaXNVVEMpIHx8IDI0O1xyXG4gIH1cclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ0gnLCBbJ0hIJywgMiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQylcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4oJ2gnLCBbJ2hoJywgMiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuICBhZGRGb3JtYXRUb2tlbignaycsIFsna2snLCAyLCBmYWxzZV0sIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBrRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignaG1tJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgY29uc3QgX2ggPSBoRm9ybWF0KGRhdGUsIG9wdHMuaXNVVEMpO1xyXG4gICAgICBjb25zdCBfbW0gPSB6ZXJvRmlsbChnZXRNaW51dGVzKGRhdGUsIG9wdHMuaXNVVEMpLCAyKTtcclxuXHJcbiAgICAgIHJldHVybiBgJHtfaH0ke19tbX1gO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdobW1zcycsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIGNvbnN0IF9oID0gaEZvcm1hdChkYXRlLCBvcHRzLmlzVVRDKTtcclxuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XHJcbiAgICAgIGNvbnN0IF9zcyA9IHplcm9GaWxsKGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xyXG5cclxuICAgICAgcmV0dXJuIGAke19ofSR7X21tfSR7X3NzfWA7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ0htbScsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIGNvbnN0IF9IID0gZ2V0SG91cnMoZGF0ZSwgb3B0cy5pc1VUQyk7XHJcbiAgICAgIGNvbnN0IF9tbSA9IHplcm9GaWxsKGdldE1pbnV0ZXMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xyXG5cclxuICAgICAgcmV0dXJuIGAke19IfSR7X21tfWA7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ0htbXNzJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgY29uc3QgX0ggPSBnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKTtcclxuICAgICAgY29uc3QgX21tID0gemVyb0ZpbGwoZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgMik7XHJcbiAgICAgIGNvbnN0IF9zcyA9IHplcm9GaWxsKGdldFNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQyksIDIpO1xyXG5cclxuICAgICAgcmV0dXJuIGAke19IfSR7X21tfSR7X3NzfWA7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgZnVuY3Rpb24gbWVyaWRpZW0odG9rZW46IHN0cmluZywgbG93ZXJjYXNlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBhZGRGb3JtYXRUb2tlbih0b2tlbiwgbnVsbCwgbnVsbCxcclxuICAgICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5tZXJpZGllbShnZXRIb3VycyhkYXRlLCBvcHRzLmlzVVRDKSwgZ2V0TWludXRlcyhkYXRlLCBvcHRzLmlzVVRDKSwgbG93ZXJjYXNlKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG1lcmlkaWVtKCdhJywgdHJ1ZSk7XHJcbiAgbWVyaWRpZW0oJ0EnLCBmYWxzZSk7XHJcblxyXG4vLyBBTElBU0VTXHJcblxyXG4gIGFkZFVuaXRBbGlhcygnaG91cicsICdoJyk7XHJcblxyXG4vLyBQUklPUklUWVxyXG4gIGFkZFVuaXRQcmlvcml0eSgnaG91cicsIDEzKTtcclxuXHJcblxyXG4vLyBQQVJTSU5HXHJcblxyXG4gIGZ1bmN0aW9uIG1hdGNoTWVyaWRpZW0oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcclxuICAgIHJldHVybiBsb2NhbGUuX21lcmlkaWVtUGFyc2U7XHJcbiAgfVxyXG5cclxuICBhZGRSZWdleFRva2VuKCdhJywgbWF0Y2hNZXJpZGllbSk7XHJcbiAgYWRkUmVnZXhUb2tlbignQScsIG1hdGNoTWVyaWRpZW0pO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0gnLCBtYXRjaDF0bzIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2gnLCBtYXRjaDF0bzIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2snLCBtYXRjaDF0bzIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0hIJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2hoJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2trJywgbWF0Y2gxdG8yLCBtYXRjaDIpO1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdobW0nLCBtYXRjaDN0bzQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ2htbXNzJywgbWF0Y2g1dG82KTtcclxuICBhZGRSZWdleFRva2VuKCdIbW0nLCBtYXRjaDN0bzQpO1xyXG4gIGFkZFJlZ2V4VG9rZW4oJ0htbXNzJywgbWF0Y2g1dG82KTtcclxuXHJcbiAgYWRkUGFyc2VUb2tlbihbJ0gnLCAnSEgnXSwgSE9VUik7XHJcbiAgYWRkUGFyc2VUb2tlbihcclxuICAgIFsnaycsICdrayddLFxyXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgICAgY29uc3Qga0lucHV0ID0gdG9JbnQoaW5wdXQpO1xyXG4gICAgICBhcnJheVtIT1VSXSA9IGtJbnB1dCA9PT0gMjQgPyAwIDoga0lucHV0O1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICApO1xyXG4gIGFkZFBhcnNlVG9rZW4oWydhJywgJ0EnXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGNvbmZpZy5faXNQbSA9IGNvbmZpZy5fbG9jYWxlLmlzUE0oaW5wdXQpO1xyXG4gICAgY29uZmlnLl9tZXJpZGllbSA9IGlucHV0O1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbiAgYWRkUGFyc2VUb2tlbihbJ2gnLCAnaGgnXSwgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQpO1xyXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHRydWU7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuICBhZGRQYXJzZVRva2VuKCdobW0nLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uc3QgcG9zID0gaW5wdXQubGVuZ3RoIC0gMjtcclxuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvcykpO1xyXG4gICAgYXJyYXlbTUlOVVRFXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MpKTtcclxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmJpZ0hvdXIgPSB0cnVlO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbiAgYWRkUGFyc2VUb2tlbignaG1tc3MnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uc3QgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XHJcbiAgICBjb25zdCBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcclxuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcclxuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xyXG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5iaWdIb3VyID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG4gIGFkZFBhcnNlVG9rZW4oJ0htbScsIGZ1bmN0aW9uKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25zdCBwb3MgPSBpbnB1dC5sZW5ndGggLSAyO1xyXG4gICAgYXJyYXlbSE9VUl0gPSB0b0ludChpbnB1dC5zdWJzdHIoMCwgcG9zKSk7XHJcbiAgICBhcnJheVtNSU5VVEVdID0gdG9JbnQoaW5wdXQuc3Vic3RyKHBvcykpO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfSk7XHJcbiAgYWRkUGFyc2VUb2tlbignSG1tc3MnLCBmdW5jdGlvbihpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uc3QgcG9zMSA9IGlucHV0Lmxlbmd0aCAtIDQ7XHJcbiAgICBjb25zdCBwb3MyID0gaW5wdXQubGVuZ3RoIC0gMjtcclxuICAgIGFycmF5W0hPVVJdID0gdG9JbnQoaW5wdXQuc3Vic3RyKDAsIHBvczEpKTtcclxuICAgIGFycmF5W01JTlVURV0gPSB0b0ludChpbnB1dC5zdWJzdHIocG9zMSwgMikpO1xyXG4gICAgYXJyYXlbU0VDT05EXSA9IHRvSW50KGlucHV0LnN1YnN0cihwb3MyKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuXHJcbn1cclxuIiwiLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xyXG5pbXBvcnQgeyBMb2NhbGUsIExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL2xvY2FsZS5kZWZhdWx0cyc7XHJcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzT2JqZWN0LCBpc1N0cmluZywgaXNVbmRlZmluZWQsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBjb21wYXJlQXJyYXlzIH0gZnJvbSAnLi4vdXRpbHMvY29tcGFyZS1hcnJheXMnO1xyXG5cclxuaW1wb3J0IHsgaW5pdFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcclxuaW1wb3J0IHsgaW5pdFdlZWtZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay15ZWFyJztcclxuaW1wb3J0IHsgaW5pdFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcclxuaW1wb3J0IHsgaW5pdFRpbWV6b25lIH0gZnJvbSAnLi4vdW5pdHMvdGltZXpvbmUnO1xyXG5pbXBvcnQgeyBpbml0VGltZXN0YW1wIH0gZnJvbSAnLi4vdW5pdHMvdGltZXN0YW1wJztcclxuaW1wb3J0IHsgaW5pdFNlY29uZCB9IGZyb20gJy4uL3VuaXRzL3NlY29uZCc7XHJcbmltcG9ydCB7IGluaXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XHJcbmltcG9ydCB7IGluaXRPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xyXG5pbXBvcnQgeyBpbml0TWludXRlIH0gZnJvbSAnLi4vdW5pdHMvbWludXRlJztcclxuaW1wb3J0IHsgaW5pdE1pbGxpc2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvbWlsbGlzZWNvbmQnO1xyXG5pbXBvcnQgeyBpbml0TW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XHJcbmltcG9ydCB7IGluaXRIb3VyIH0gZnJvbSAnLi4vdW5pdHMvaG91cic7XHJcbmltcG9ydCB7IGluaXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XHJcbmltcG9ydCB7IGluaXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcbmltcG9ydCB7IGluaXREYXlPZk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLW1vbnRoJztcclxuXHJcbmNvbnN0IGxvY2FsZXM6IHsgW2tleTogc3RyaW5nXTogTG9jYWxlIH0gPSB7fTtcclxuY29uc3QgbG9jYWxlRmFtaWxpZXM6IHsgW2tleTogc3RyaW5nXToge25hbWU6IHN0cmluZzsgY29uZmlnOiBMb2NhbGVEYXRhfVtdIH0gPSB7fTtcclxubGV0IGdsb2JhbExvY2FsZTogTG9jYWxlO1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XHJcbn1cclxuXHJcbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxyXG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxyXG4vLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LFxyXG4vLyBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XHJcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lczogc3RyaW5nW10pOiBMb2NhbGUge1xyXG4gIGxldCBuZXh0O1xyXG4gIGxldCBsb2NhbGU7XHJcbiAgbGV0IGkgPSAwO1xyXG5cclxuICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XHJcbiAgICBsZXQgaiA9IHNwbGl0Lmxlbmd0aDtcclxuICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcclxuICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcclxuICAgIHdoaWxlIChqID4gMCkge1xyXG4gICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XHJcbiAgICAgIGlmIChsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcclxuICAgICAgICAvLyB0aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGotLTtcclxuICAgIH1cclxuICAgIGkrKztcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZzogTG9jYWxlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZzogTG9jYWxlRGF0YSkge1xyXG4gIGNvbnN0IHJlczogTG9jYWxlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudENvbmZpZyk7XHJcblxyXG4gIGZvciAoY29uc3QgY2hpbGRQcm9wIGluIGNoaWxkQ29uZmlnKSB7XHJcbiAgICBpZiAoIWhhc093blByb3AoY2hpbGRDb25maWcsIGNoaWxkUHJvcCkpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0pKSB7XHJcbiAgICAgIHJlc1tjaGlsZFByb3BdID0ge307XHJcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzW2NoaWxkUHJvcF0sIHBhcmVudENvbmZpZ1tjaGlsZFByb3BdKTtcclxuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgY2hpbGRDb25maWdbY2hpbGRQcm9wXSk7XHJcbiAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0gIT0gbnVsbCkge1xyXG4gICAgICByZXNbY2hpbGRQcm9wXSA9IGNoaWxkQ29uZmlnW2NoaWxkUHJvcF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgcmVzW2NoaWxkUHJvcF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBwYXJlbnRQcm9wO1xyXG4gIGZvciAocGFyZW50UHJvcCBpbiBwYXJlbnRDb25maWcpIHtcclxuICAgIGlmIChcclxuICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHBhcmVudFByb3ApICYmXHJcbiAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwYXJlbnRQcm9wKSAmJlxyXG4gICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSlcclxuICAgICkge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXHJcbiAgICAgIHJlc1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRMb2NhbGUobmFtZTogc3RyaW5nKTogTG9jYWxlIHtcclxuICAvLyBubyB3YXkhXHJcbiAgLyogdmFyIG9sZExvY2FsZSA9IG51bGw7XHJcbiAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXHJcbiAgIGlmICghbG9jYWxlc1tuYW1lXSAmJiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmXHJcbiAgICAgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICAgdHJ5IHtcclxuICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcclxuICAgICAgIHZhciBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XHJcbiAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xyXG4gICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XHJcbiAgICAgfSBjYXRjaCAoZSkge31cclxuICAgfSovXHJcbiAgaWYgKCFsb2NhbGVzW25hbWVdKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnNvbGUuZXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXHJcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXHJcbi8vIGxvY2FsZSBrZXkuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRHbG9iYWxMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10sIHZhbHVlcz86IExvY2FsZURhdGEpOiBzdHJpbmcge1xyXG4gIGxldCBkYXRhOiBMb2NhbGU7XHJcblxyXG4gIGlmIChrZXkpIHtcclxuICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XHJcbiAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcclxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoa2V5KSkge1xyXG4gICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdsb2JhbExvY2FsZSAmJiBnbG9iYWxMb2NhbGUuX2FiYnI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcclxuICBpZiAoY29uZmlnID09PSBudWxsKSB7XHJcbiAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcclxuICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xyXG4gICAgZ2xvYmFsTG9jYWxlID0gZ2V0TG9jYWxlKCdlbicpO1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjb25maWcpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xyXG4gIGNvbmZpZy5hYmJyID0gbmFtZTtcclxuICBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XHJcbiAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XHJcbiAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcclxuICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goeyBuYW1lLCBjb25maWcgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xyXG5cclxuICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcclxuICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcclxuICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXHJcbiAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXHJcbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xyXG5cclxuXHJcbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcclxuICBsZXQgX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgaWYgKF9jb25maWcgIT0gbnVsbCkge1xyXG4gICAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XHJcbiAgICAvLyBNRVJHRVxyXG4gICAgY29uc3QgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcclxuICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcclxuICAgIH1cclxuICAgIF9jb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBfY29uZmlnKTtcclxuICAgIGNvbnN0IGxvY2FsZSA9IG5ldyBMb2NhbGUoX2NvbmZpZyk7XHJcbiAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcclxuICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XHJcblxyXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXHJcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXHJcbiAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xyXG4gICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xyXG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcclxufVxyXG5cclxuLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdKTogTG9jYWxlIHtcclxuICBzZXREZWZhdWx0TG9jYWxlKCk7XHJcblxyXG4gIGlmICgha2V5KSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xyXG4gIH1cclxuICAvLyBsZXQgbG9jYWxlO1xyXG4gIGNvbnN0IF9rZXkgPSBpc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XTtcclxuXHJcbiAgcmV0dXJuIGNob29zZUxvY2FsZShfa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCk6IHN0cmluZ1tdIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoKTogdm9pZCB7XHJcbiAgaWYgKGxvY2FsZXNbYGVuYF0pIHtcclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKCdlbicsIHtcclxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxyXG4gICAgb3JkaW5hbChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGNvbnN0IGIgPSBudW0gJSAxMDtcclxuICAgICAgY29uc3Qgb3V0cHV0ID1cclxuICAgICAgICB0b0ludCgobnVtICUgMTAwKSAvIDEwKSA9PT0gMVxyXG4gICAgICAgICAgPyAndGgnXHJcbiAgICAgICAgICA6IGIgPT09IDEgPyAnc3QnIDogYiA9PT0gMiA/ICduZCcgOiBiID09PSAzID8gJ3JkJyA6ICd0aCc7XHJcblxyXG4gICAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpbml0V2VlaygpO1xyXG4gIGluaXRXZWVrWWVhcigpO1xyXG4gIGluaXRZZWFyKCk7XHJcbiAgaW5pdFRpbWV6b25lKCk7XHJcbiAgaW5pdFRpbWVzdGFtcCgpO1xyXG4gIGluaXRTZWNvbmQoKTtcclxuICBpbml0UXVhcnRlcigpO1xyXG4gIGluaXRPZmZzZXQoKTtcclxuICBpbml0TW9udGgoKTtcclxuICBpbml0TWludXRlKCk7XHJcbiAgaW5pdE1pbGxpc2Vjb25kKCk7XHJcbiAgaW5pdEhvdXIoKTtcclxuICBpbml0RGF5T2ZZZWFyKCk7XHJcbiAgaW5pdERheU9mV2VlaygpO1xyXG4gIGluaXREYXlPZk1vbnRoKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUR1cmF0aW9uIH0gZnJvbSAnLi9jcmVhdGUnO1xyXG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xyXG5pbXBvcnQgeyBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3Qgb3JkZXJpbmc6IChrZXlvZiBEYXRlT2JqZWN0KVtdID0gWyd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXknLCAnaG91cnMnLCAnbWludXRlcycsICdzZWNvbmRzJywgJ21pbGxpc2Vjb25kcyddO1xyXG5jb25zdCBvcmRlcmluZ0hhc2ggPSBvcmRlcmluZy5yZWR1Y2UoKG1lbTogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0sIG9yZGVyKSA9PiB7XHJcbiAgbWVtW29yZGVyXSA9IHRydWU7XHJcblxyXG4gIHJldHVybiBtZW07XHJcbn0sIHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0R1cmF0aW9uVmFsaWQoZHVyYXRpb246IFBhcnRpYWw8RGF0ZU9iamVjdD4pOiBib29sZWFuIHtcclxuICBjb25zdCBkdXJhdGlvbktleXMgPSBPYmplY3Qua2V5cyhkdXJhdGlvbik7XHJcbiAgaWYgKGR1cmF0aW9uS2V5c1xyXG4gICAgICAuc29tZSgoa2V5OiBrZXlvZiBEYXRlT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChrZXkgaW4gb3JkZXJpbmdIYXNoKVxyXG4gICAgICAgICAgJiYgZHVyYXRpb25ba2V5XSA9PT0gbnVsbFxyXG4gICAgICAgICAgfHwgaXNOYU4oZHVyYXRpb25ba2V5XSk7XHJcbiAgICAgIH0pKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIC8vIGZvciAobGV0IGtleSBpbiBkdXJhdGlvbikge1xyXG4gIC8vICAgaWYgKCEoaW5kZXhPZi5jYWxsKG9yZGVyaW5nLCBrZXkpICE9PSAtMSAmJiAoZHVyYXRpb25ba2V5XSA9PSBudWxsIHx8ICFpc05hTihkdXJhdGlvbltrZXldKSkpKSB7XHJcbiAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGxldCB1bml0SGFzRGVjaW1hbCA9IGZhbHNlO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgb3JkZXJpbmcubGVuZ3RoOyArK2kpIHtcclxuICAgIGlmIChkdXJhdGlvbltvcmRlcmluZ1tpXV0pIHtcclxuICAgICAgLy8gb25seSBhbGxvdyBub24taW50ZWdlcnMgZm9yIHNtYWxsZXN0IHVuaXRcclxuICAgICAgaWYgKHVuaXRIYXNEZWNpbWFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChkdXJhdGlvbltvcmRlcmluZ1tpXV0gIT09IHRvSW50KGR1cmF0aW9uW29yZGVyaW5nW2ldXSkpIHtcclxuICAgICAgICB1bml0SGFzRGVjaW1hbCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaXNWYWxpZCgpIHtcclxuLy8gICByZXR1cm4gdGhpcy5faXNWYWxpZDtcclxuLy8gfVxyXG4vL1xyXG4vLyBleHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZCgpOiBEdXJhdGlvbiB7XHJcbi8vICAgcmV0dXJuIGNyZWF0ZUR1cmF0aW9uKE5hTik7XHJcbi8vIH1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFic0NlaWwgKG51bWJlcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguZmxvb3IobnVtYmVyKSA6IE1hdGguY2VpbChudW1iZXIpO1xyXG59XHJcbiIsImltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IGFic0Zsb29yIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBhYnNDZWlsIH0gZnJvbSAnLi4vdXRpbHMvYWJzLWNlaWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZShkdXI6IER1cmF0aW9uKTogRHVyYXRpb24ge1xyXG4gIGxldCBtaWxsaXNlY29uZHMgPSBkdXIuX21pbGxpc2Vjb25kcztcclxuICBsZXQgZGF5cyA9IGR1ci5fZGF5cztcclxuICBsZXQgbW9udGhzID0gZHVyLl9tb250aHM7XHJcbiAgY29uc3QgZGF0YSA9IGR1ci5fZGF0YTtcclxuXHJcbiAgLy8gaWYgd2UgaGF2ZSBhIG1peCBvZiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgdmFsdWVzLCBidWJibGUgZG93biBmaXJzdFxyXG4gIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxyXG4gIGlmICghKChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XHJcbiAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApKSkge1xyXG4gICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xyXG4gICAgZGF5cyA9IDA7XHJcbiAgICBtb250aHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJ1YmJsZXMgdXAgdmFsdWVzLCBzZWUgdGhlIHRlc3RzIGZvclxyXG4gIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cclxuICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XHJcblxyXG4gIGNvbnN0IHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcclxuICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XHJcblxyXG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcclxuXHJcbiAgY29uc3QgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xyXG4gIGRhdGEuaG91cnMgPSBob3VycyAlIDI0O1xyXG5cclxuICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xyXG5cclxuICAvLyBjb252ZXJ0IGRheXMgdG8gbW9udGhzXHJcbiAgY29uc3QgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xyXG4gIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcclxuICBkYXlzIC09IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRoc0Zyb21EYXlzKSk7XHJcblxyXG4gIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcclxuICBjb25zdCB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcclxuICBtb250aHMgJT0gMTI7XHJcblxyXG4gIGRhdGEuZGF5ID0gZGF5cztcclxuICBkYXRhLm1vbnRoID0gbW9udGhzO1xyXG4gIGRhdGEueWVhciA9IHllYXJzO1xyXG5cclxuICByZXR1cm4gZHVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXHJcbiAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXHJcbiAgcmV0dXJuIGRheSAqIDQ4MDAgLyAxNDYwOTc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb250aHNUb0RheXMobW9udGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXHJcbiAgcmV0dXJuIG1vbnRoICogMTQ2MDk3IC8gNDgwMDtcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xyXG5cclxubGV0IHJvdW5kID0gTWF0aC5yb3VuZDtcclxuY29uc3QgdGhyZXNob2xkczogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICBzczogNDQsICAgICAgICAgLy8gYSBmZXcgc2Vjb25kcyB0byBzZWNvbmRzXHJcbiAgczogNDUsICAgICAgICAgLy8gc2Vjb25kcyB0byBtaW51dGVcclxuICBtOiA0NSwgICAgICAgICAvLyBtaW51dGVzIHRvIGhvdXJcclxuICBoOiAyMiwgICAgICAgICAvLyBob3VycyB0byBkYXlcclxuICBkOiAyNiwgICAgICAgICAvLyBkYXlzIHRvIG1vbnRoXHJcbiAgTTogMTEgICAgICAgICAgLy8gbW9udGhzIHRvIHllYXJcclxufTtcclxuXHJcbi8vIGhlbHBlciBmdW5jdGlvbiBmb3IgbW9tZW50LmZuLmZyb20sIG1vbWVudC5mbi5mcm9tTm93LCBhbmQgbW9tZW50LmR1cmF0aW9uLmZuLmh1bWFuaXplXHJcbmZ1bmN0aW9uIHN1YnN0aXR1dGVUaW1lQWdvKHN0cjogJ2Z1dHVyZScgfCAncGFzdCcsIG51bTogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRob3V0U3VmZml4OiBib29sZWFuLCBpc0Z1dHVyZTogYm9vbGVhbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xyXG4gIHJldHVybiBsb2NhbGUucmVsYXRpdmVUaW1lKG51bSB8fCAxLCAhIXdpdGhvdXRTdWZmaXgsIHN0ciwgaXNGdXR1cmUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVsYXRpdmVUaW1lKHBvc05lZ0R1cmF0aW9uOiBEdXJhdGlvbiwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xyXG4gIGNvbnN0IGR1cmF0aW9uID0gY3JlYXRlRHVyYXRpb24ocG9zTmVnRHVyYXRpb24pLmFicygpO1xyXG4gIGNvbnN0IHNlY29uZHMgPSByb3VuZChkdXJhdGlvbi5hcygncycpKTtcclxuICBjb25zdCBtaW51dGVzID0gcm91bmQoZHVyYXRpb24uYXMoJ20nKSk7XHJcbiAgY29uc3QgaG91cnMgPSByb3VuZChkdXJhdGlvbi5hcygnaCcpKTtcclxuICBjb25zdCBkYXlzID0gcm91bmQoZHVyYXRpb24uYXMoJ2QnKSk7XHJcbiAgY29uc3QgbW9udGhzID0gcm91bmQoZHVyYXRpb24uYXMoJ00nKSk7XHJcbiAgY29uc3QgeWVhcnMgPSByb3VuZChkdXJhdGlvbi5hcygneScpKTtcclxuXHJcbiAgY29uc3QgYTogW3N0cmluZ10gfCBbc3RyaW5nLCBudW1iZXJdID1cclxuICAgIHNlY29uZHMgPD0gdGhyZXNob2xkcy5zcyAmJiBbJ3MnLCBzZWNvbmRzXSB8fFxyXG4gICAgc2Vjb25kcyA8IHRocmVzaG9sZHMucyAmJiBbJ3NzJywgc2Vjb25kc10gfHxcclxuICAgIG1pbnV0ZXMgPD0gMSAmJiBbJ20nXSB8fFxyXG4gICAgbWludXRlcyA8IHRocmVzaG9sZHMubSAmJiBbJ21tJywgbWludXRlc10gfHxcclxuICAgIGhvdXJzIDw9IDEgJiYgWydoJ10gfHxcclxuICAgIGhvdXJzIDwgdGhyZXNob2xkcy5oICYmIFsnaGgnLCBob3Vyc10gfHxcclxuICAgIGRheXMgPD0gMSAmJiBbJ2QnXSB8fFxyXG4gICAgZGF5cyA8IHRocmVzaG9sZHMuZCAmJiBbJ2RkJywgZGF5c10gfHxcclxuICAgIG1vbnRocyA8PSAxICYmIFsnTSddIHx8XHJcbiAgICBtb250aHMgPCB0aHJlc2hvbGRzLk0gJiYgWydNTScsIG1vbnRoc10gfHxcclxuICAgIHllYXJzIDw9IDEgJiYgWyd5J10gfHwgWyd5eScsIHllYXJzXTtcclxuXHJcbiAgY29uc3QgYjogW3N0cmluZywgbnVtYmVyIHwgc3RyaW5nLCBib29sZWFuLCBib29sZWFuLCBMb2NhbGVdID1cclxuICAgIFthWzBdLCBhWzFdLCB3aXRob3V0U3VmZml4LCArcG9zTmVnRHVyYXRpb24gPiAwLCBsb2NhbGVdO1xyXG4gIC8vIGFbMl0gPSB3aXRob3V0U3VmZml4O1xyXG4gIC8vIGFbM10gPSArcG9zTmVnRHVyYXRpb24gPiAwO1xyXG4gIC8vIGFbNF0gPSBsb2NhbGU7XHJcblxyXG4gIHJldHVybiBzdWJzdGl0dXRlVGltZUFnby5hcHBseShudWxsLCBiKTtcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCB0aGUgcm91bmRpbmcgZnVuY3Rpb24gZm9yIHJlbGF0aXZlIHRpbWUgc3RyaW5nc1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0UmVsYXRpdmVUaW1lUm91bmRpbmcocm91bmRpbmdGdW5jdGlvbjogYW55KTogYm9vbGVhbiB8IEZ1bmN0aW9uIHtcclxuICBpZiAocm91bmRpbmdGdW5jdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICByZXR1cm4gcm91bmQ7XHJcbiAgfVxyXG4gIGlmICh0eXBlb2Yocm91bmRpbmdGdW5jdGlvbikgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIHJvdW5kID0gcm91bmRpbmdGdW5jdGlvbjtcclxuXHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiBhbGxvd3MgeW91IHRvIHNldCBhIHRocmVzaG9sZCBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVUaHJlc2hvbGQodGhyZXNob2xkOiBzdHJpbmcsIGxpbWl0OiBudW1iZXIpOiBib29sZWFuIHwgbnVtYmVyIHtcclxuICBpZiAodGhyZXNob2xkc1t0aHJlc2hvbGRdID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGxpbWl0ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiB0aHJlc2hvbGRzW3RocmVzaG9sZF07XHJcbiAgfVxyXG4gIHRocmVzaG9sZHNbdGhyZXNob2xkXSA9IGxpbWl0O1xyXG4gIGlmICh0aHJlc2hvbGQgPT09ICdzJykge1xyXG4gICAgdGhyZXNob2xkcy5zcyA9IGxpbWl0IC0gMTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gaHVtYW5pemUod2l0aFN1ZmZpeCkge1xyXG4vLyAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuLy8gICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZSgpO1xyXG4vLyAgIH1cclxuLy9cclxuLy8gICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcclxuLy8gICBsZXQgb3V0cHV0ID0gcmVsYXRpdmVUaW1lKHRoaXMsICF3aXRoU3VmZml4LCBsb2NhbGUpO1xyXG4vL1xyXG4vLyAgIGlmICh3aXRoU3VmZml4KSB7XHJcbi8vICAgICBvdXRwdXQgPSBsb2NhbGUucGFzdEZ1dHVyZSgrdGhpcywgb3V0cHV0KTtcclxuLy8gICB9XHJcbi8vXHJcbi8vICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XHJcbi8vIH1cclxuIiwiaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgaXNEdXJhdGlvblZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XHJcbmltcG9ydCB7IGJ1YmJsZSwgZGF5c1RvTW9udGhzLCBtb250aHNUb0RheXMgfSBmcm9tICcuL2J1YmJsZSc7XHJcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBub3JtYWxpemVVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyByZWxhdGl2ZVRpbWUgfSBmcm9tICcuL2h1bWFuaXplJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHVyYXRpb24ge1xyXG4gIF9taWxsaXNlY29uZHM6IG51bWJlcjtcclxuICBfZGF5czogbnVtYmVyO1xyXG4gIF9tb250aHM6IG51bWJlcjtcclxuICBfZGF0YTogUGFydGlhbDxEYXRlT2JqZWN0PiA9IHt9O1xyXG4gIF9sb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpO1xyXG4gIF9pc1ZhbGlkOiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0PiwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9KSB7XHJcbiAgICB0aGlzLl9sb2NhbGUgPSBjb25maWcgJiYgY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKCk7XHJcbiAgICAvLyBjb25zdCBub3JtYWxpemVkSW5wdXQgPSBub3JtYWxpemVPYmplY3RVbml0cyhkdXJhdGlvbik7XHJcbiAgICBjb25zdCBub3JtYWxpemVkSW5wdXQgPSBkdXJhdGlvbjtcclxuICAgIGNvbnN0IHllYXJzID0gbm9ybWFsaXplZElucHV0LnllYXIgfHwgMDtcclxuICAgIGNvbnN0IHF1YXJ0ZXJzID0gbm9ybWFsaXplZElucHV0LnF1YXJ0ZXIgfHwgMDtcclxuICAgIGNvbnN0IG1vbnRocyA9IG5vcm1hbGl6ZWRJbnB1dC5tb250aCB8fCAwO1xyXG4gICAgY29uc3Qgd2Vla3MgPSBub3JtYWxpemVkSW5wdXQud2VlayB8fCAwO1xyXG4gICAgY29uc3QgZGF5cyA9IG5vcm1hbGl6ZWRJbnB1dC5kYXkgfHwgMDtcclxuICAgIGNvbnN0IGhvdXJzID0gbm9ybWFsaXplZElucHV0LmhvdXJzIHx8IDA7XHJcbiAgICBjb25zdCBtaW51dGVzID0gbm9ybWFsaXplZElucHV0Lm1pbnV0ZXMgfHwgMDtcclxuICAgIGNvbnN0IHNlY29uZHMgPSBub3JtYWxpemVkSW5wdXQuc2Vjb25kcyB8fCAwO1xyXG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gbm9ybWFsaXplZElucHV0Lm1pbGxpc2Vjb25kcyB8fCAwO1xyXG5cclxuICAgIHRoaXMuX2lzVmFsaWQgPSBpc0R1cmF0aW9uVmFsaWQobm9ybWFsaXplZElucHV0KTtcclxuXHJcbiAgICAvLyByZXByZXNlbnRhdGlvbiBmb3IgZGF0ZUFkZFJlbW92ZVxyXG4gICAgdGhpcy5fbWlsbGlzZWNvbmRzID0gK21pbGxpc2Vjb25kcyArXHJcbiAgICAgIHNlY29uZHMgKiAxMDAwICtcclxuICAgICAgbWludXRlcyAqIDYwICogMTAwMCArIC8vIDEwMDAgKiA2MFxyXG4gICAgICBob3VycyAqIDEwMDAgKiA2MCAqIDYwOyAvLyB1c2luZyAxMDAwICogNjAgKiA2MFxyXG4gICAgLy8gaW5zdGVhZCBvZiAzNmU1IHRvIGF2b2lkIGZsb2F0aW5nIHBvaW50IHJvdW5kaW5nIGVycm9ycyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjk3OFxyXG4gICAgLy8gQmVjYXVzZSBvZiBkYXRlQWRkUmVtb3ZlIHRyZWF0cyAyNCBob3VycyBhcyBkaWZmZXJlbnQgZnJvbSBhXHJcbiAgICAvLyBkYXkgd2hlbiB3b3JraW5nIGFyb3VuZCBEU1QsIHdlIG5lZWQgdG8gc3RvcmUgdGhlbSBzZXBhcmF0ZWx5XHJcbiAgICB0aGlzLl9kYXlzID0gK2RheXMgK1xyXG4gICAgICB3ZWVrcyAqIDc7XHJcbiAgICAvLyBJdCBpcyBpbXBvc3NpYmxlIHRvIHRyYW5zbGF0ZSBtb250aHMgaW50byBkYXlzIHdpdGhvdXQga25vd2luZ1xyXG4gICAgLy8gd2hpY2ggbW9udGhzIHlvdSBhcmUgYXJlIHRhbGtpbmcgYWJvdXQsIHNvIHdlIGhhdmUgdG8gc3RvcmVcclxuICAgIC8vIGl0IHNlcGFyYXRlbHkuXHJcbiAgICB0aGlzLl9tb250aHMgPSArbW9udGhzICtcclxuICAgICAgcXVhcnRlcnMgKiAzICtcclxuICAgICAgeWVhcnMgKiAxMjtcclxuXHJcbiAgICAvLyB0aGlzLl9kYXRhID0ge307XHJcblxyXG4gICAgLy8gdGhpcy5fbG9jYWxlID0gZ2V0TG9jYWxlKCk7XHJcblxyXG4gICAgLy8gdGhpcy5fYnViYmxlKCk7XHJcbiAgICByZXR1cm4gYnViYmxlKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgaHVtYW5pemUod2l0aFN1ZmZpeD86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKGBUT0RPOiBpbXBsZW1lbnRgKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmxvY2FsZURhdGEoKS5pbnZhbGlkRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2NhbGUgPSB0aGlzLmxvY2FsZURhdGEoKTtcclxuICAgIGxldCBvdXRwdXQgPSByZWxhdGl2ZVRpbWUodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XHJcblxyXG4gICAgaWYgKHdpdGhTdWZmaXgpIHtcclxuICAgICAgb3V0cHV0ID0gbG9jYWxlLnBhc3RGdXR1cmUoK3RoaXMsIG91dHB1dCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XHJcbiAgfVxyXG5cclxuICBsb2NhbGVEYXRhKCk6IExvY2FsZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgbG9jYWxlKCk6IHN0cmluZztcclxuICBsb2NhbGUobG9jYWxlS2V5OiBzdHJpbmcpOiBEdXJhdGlvbjtcclxuICBsb2NhbGUobG9jYWxlS2V5Pzogc3RyaW5nKTogRHVyYXRpb24gfCBzdHJpbmcge1xyXG4gICAgaWYgKCFsb2NhbGVLZXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5fYWJicjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlS2V5KSB8fCB0aGlzLl9sb2NhbGU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuXHJcbiAgYWJzKCk6IER1cmF0aW9uIHtcclxuICAgIGNvbnN0IG1hdGhBYnMgPSBNYXRoLmFicztcclxuXHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5fZGF0YTtcclxuXHJcbiAgICB0aGlzLl9taWxsaXNlY29uZHMgPSBtYXRoQWJzKHRoaXMuX21pbGxpc2Vjb25kcyk7XHJcbiAgICB0aGlzLl9kYXlzID0gbWF0aEFicyh0aGlzLl9kYXlzKTtcclxuICAgIHRoaXMuX21vbnRocyA9IG1hdGhBYnModGhpcy5fbW9udGhzKTtcclxuXHJcbiAgICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1hdGhBYnMoZGF0YS5taWxsaXNlY29uZHMpO1xyXG4gICAgZGF0YS5zZWNvbmRzID0gbWF0aEFicyhkYXRhLnNlY29uZHMpO1xyXG4gICAgZGF0YS5taW51dGVzID0gbWF0aEFicyhkYXRhLm1pbnV0ZXMpO1xyXG4gICAgZGF0YS5ob3VycyA9IG1hdGhBYnMoZGF0YS5ob3Vycyk7XHJcbiAgICBkYXRhLm1vbnRoID0gbWF0aEFicyhkYXRhLm1vbnRoKTtcclxuICAgIGRhdGEueWVhciA9IG1hdGhBYnMoZGF0YS55ZWFyKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGFzKF91bml0czogc3RyaW5nKTogbnVtYmVyIHtcclxuICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcclxuICAgICAgcmV0dXJuIE5hTjtcclxuICAgIH1cclxuICAgIGxldCBkYXlzO1xyXG4gICAgbGV0IG1vbnRocztcclxuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IHRoaXMuX21pbGxpc2Vjb25kcztcclxuXHJcbiAgICBjb25zdCB1bml0cyA9IG5vcm1hbGl6ZVVuaXRzKF91bml0cyk7XHJcblxyXG4gICAgaWYgKHVuaXRzID09PSAnbW9udGgnIHx8IHVuaXRzID09PSAneWVhcicpIHtcclxuICAgICAgZGF5cyA9IHRoaXMuX2RheXMgKyBtaWxsaXNlY29uZHMgLyA4NjRlNTtcclxuICAgICAgbW9udGhzID0gdGhpcy5fbW9udGhzICsgZGF5c1RvTW9udGhzKGRheXMpO1xyXG5cclxuICAgICAgcmV0dXJuIHVuaXRzID09PSAnbW9udGgnID8gbW9udGhzIDogbW9udGhzIC8gMTI7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGFuZGxlIG1pbGxpc2Vjb25kcyBzZXBhcmF0ZWx5IGJlY2F1c2Ugb2YgZmxvYXRpbmcgcG9pbnQgbWF0aCBlcnJvcnMgKGlzc3VlICMxODY3KVxyXG4gICAgZGF5cyA9IHRoaXMuX2RheXMgKyBNYXRoLnJvdW5kKG1vbnRoc1RvRGF5cyh0aGlzLl9tb250aHMpKTtcclxuICAgIHN3aXRjaCAodW5pdHMpIHtcclxuICAgICAgY2FzZSAnd2VlaycgICA6XHJcbiAgICAgICAgcmV0dXJuIGRheXMgLyA3ICsgbWlsbGlzZWNvbmRzIC8gNjA0OGU1O1xyXG4gICAgICBjYXNlICdkYXknICAgIDpcclxuICAgICAgICByZXR1cm4gZGF5cyArIG1pbGxpc2Vjb25kcyAvIDg2NGU1O1xyXG4gICAgICBjYXNlICdob3VycycgICA6XHJcbiAgICAgICAgcmV0dXJuIGRheXMgKiAyNCArIG1pbGxpc2Vjb25kcyAvIDM2ZTU7XHJcbiAgICAgIGNhc2UgJ21pbnV0ZXMnIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAqIDE0NDAgKyBtaWxsaXNlY29uZHMgLyA2ZTQ7XHJcbiAgICAgIGNhc2UgJ3NlY29uZHMnIDpcclxuICAgICAgICByZXR1cm4gZGF5cyAqIDg2NDAwICsgbWlsbGlzZWNvbmRzIC8gMTAwMDtcclxuICAgICAgLy8gTWF0aC5mbG9vciBwcmV2ZW50cyBmbG9hdGluZyBwb2ludCBtYXRoIGVycm9ycyBoZXJlXHJcbiAgICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoZGF5cyAqIDg2NGU1KSArIG1pbGxpc2Vjb25kcztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gdW5pdCAke3VuaXRzfWApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFsdWVPZiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XHJcbiAgICAgIHJldHVybiBOYU47XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgdGhpcy5fbWlsbGlzZWNvbmRzICtcclxuICAgICAgdGhpcy5fZGF5cyAqIDg2NGU1ICtcclxuICAgICAgKHRoaXMuX21vbnRocyAlIDEyKSAqIDI1OTJlNiArXHJcbiAgICAgIHRvSW50KHRoaXMuX21vbnRocyAvIDEyKSAqIDMxNTM2ZTZcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvbihvYmo6IGFueSk6IG9iaiBpcyBEdXJhdGlvbiB7XHJcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIER1cmF0aW9uO1xyXG59XHJcbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBib29sZWFuIHtcclxuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09IG51bGwpIHtcclxuICAgIGNvbnN0IGZsYWdzID0gZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZyk7XHJcbiAgICBjb25zdCBwYXJzZWRQYXJ0cyA9IEFycmF5LnByb3RvdHlwZS5zb21lLmNhbGwoZmxhZ3MucGFyc2VkRGF0ZVBhcnRzLCBmdW5jdGlvbiAoaTogbnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBpICE9IG51bGw7XHJcbiAgICB9KTtcclxuICAgIGxldCBpc05vd1ZhbGlkID0gIWlzTmFOKGNvbmZpZy5fZCAmJiBjb25maWcuX2QuZ2V0VGltZSgpKSAmJlxyXG4gICAgICBmbGFncy5vdmVyZmxvdyA8IDAgJiZcclxuICAgICAgIWZsYWdzLmVtcHR5ICYmXHJcbiAgICAgICFmbGFncy5pbnZhbGlkTW9udGggJiZcclxuICAgICAgIWZsYWdzLmludmFsaWRXZWVrZGF5ICYmXHJcbiAgICAgICFmbGFncy53ZWVrZGF5TWlzbWF0Y2ggJiZcclxuICAgICAgIWZsYWdzLm51bGxJbnB1dCAmJlxyXG4gICAgICAhZmxhZ3MuaW52YWxpZEZvcm1hdCAmJlxyXG4gICAgICAhZmxhZ3MudXNlckludmFsaWRhdGVkICYmXHJcbiAgICAgICghZmxhZ3MubWVyaWRpZW0gfHwgKGZsYWdzLm1lcmlkaWVtICYmIHBhcnNlZFBhcnRzKSk7XHJcblxyXG4gICAgaWYgKGNvbmZpZy5fc3RyaWN0KSB7XHJcbiAgICAgIGlzTm93VmFsaWQgPSBpc05vd1ZhbGlkICYmXHJcbiAgICAgICAgZmxhZ3MuY2hhcnNMZWZ0T3ZlciA9PT0gMCAmJlxyXG4gICAgICAgIGZsYWdzLnVudXNlZFRva2Vucy5sZW5ndGggPT09IDAgJiZcclxuICAgICAgICBmbGFncy5iaWdIb3VyID09PSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE9iamVjdC5pc0Zyb3plbiA9PSBudWxsIHx8ICFPYmplY3QuaXNGcm96ZW4oY29uZmlnKSkge1xyXG4gICAgICBjb25maWcuX2lzVmFsaWQgPSBpc05vd1ZhbGlkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlzTm93VmFsaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnLl9pc1ZhbGlkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW52YWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnLCBmbGFncz86IHsgbnVsbElucHV0OiBib29sZWFuIH0pOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgY29uZmlnLl9kID0gbmV3IERhdGUoTmFOKTtcclxuICBPYmplY3QuYXNzaWduKGdldFBhcnNpbmdGbGFncyhjb25maWcpLCBmbGFncyB8fCB7IHVzZXJJbnZhbGlkYXRlZDogdHJ1ZSB9KTtcclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtJbnZhbGlkKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmltcG9ydCB7IGRlZmF1bHRMb2NhbGVNb250aHNTaG9ydCwgZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcclxuaW1wb3J0IHsgY3JlYXRlVVRDRGF0ZSB9IGZyb20gJy4vZGF0ZS1mcm9tLWFycmF5JztcclxuaW1wb3J0IHsgY3JlYXRlSW52YWxpZCwgbWFya0ludmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcclxuaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcclxuXHJcbi8vIGlzbyA4NjAxIHJlZ2V4XHJcbi8vIDAwMDAtMDAtMDAgMDAwMC1XMDAgb3IgMDAwMC1XMDAtMCArIFQgKyAwMCBvciAwMDowMCBvciAwMDowMDowMCBvciAwMDowMDowMC4wMDAgKyArMDA6MDAgb3IgKzAwMDAgb3IgKzAwKVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuY29uc3QgZXh0ZW5kZWRJc29SZWdleCA9IC9eXFxzKigoPzpbKy1dXFxkezZ9fFxcZHs0fSktKD86XFxkXFxkLVxcZFxcZHxXXFxkXFxkLVxcZHxXXFxkXFxkfFxcZFxcZFxcZHxcXGRcXGQpKSg/OihUfCApKFxcZFxcZCg/OjpcXGRcXGQoPzo6XFxkXFxkKD86Wy4sXVxcZCspPyk/KT8pKFtcXCtcXC1dXFxkXFxkKD86Oj9cXGRcXGQpP3xcXHMqWik/KT8kLztcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmNvbnN0IGJhc2ljSXNvUmVnZXggPSAvXlxccyooKD86WystXVxcZHs2fXxcXGR7NH0pKD86XFxkXFxkXFxkXFxkfFdcXGRcXGRcXGR8V1xcZFxcZHxcXGRcXGRcXGR8XFxkXFxkKSkoPzooVHwgKShcXGRcXGQoPzpcXGRcXGQoPzpcXGRcXGQoPzpbLixdXFxkKyk/KT8pPykoW1xcK1xcLV1cXGRcXGQoPzo6P1xcZFxcZCk/fFxccypaKT8pPyQvO1xyXG5cclxuY29uc3QgdHpSZWdleCA9IC9afFsrLV1cXGRcXGQoPzo6P1xcZFxcZCk/LztcclxuXHJcbmNvbnN0IGlzb0RhdGVzOiBbc3RyaW5nLCBSZWdFeHAsIGJvb2xlYW5dW10gPSBbXHJcbiAgWydZWVlZWVktTU0tREQnLCAvWystXVxcZHs2fS1cXGRcXGQtXFxkXFxkLywgdHJ1ZV0sXHJcbiAgWydZWVlZLU1NLUREJywgL1xcZHs0fS1cXGRcXGQtXFxkXFxkLywgdHJ1ZV0sXHJcbiAgWydHR0dHLVtXXVdXLUUnLCAvXFxkezR9LVdcXGRcXGQtXFxkLywgdHJ1ZV0sXHJcbiAgWydHR0dHLVtXXVdXJywgL1xcZHs0fS1XXFxkXFxkLywgZmFsc2VdLFxyXG4gIFsnWVlZWS1EREQnLCAvXFxkezR9LVxcZHszfS8sIHRydWVdLFxyXG4gIFsnWVlZWS1NTScsIC9cXGR7NH0tXFxkXFxkLywgZmFsc2VdLFxyXG4gIFsnWVlZWVlZTU1ERCcsIC9bKy1dXFxkezEwfS8sIHRydWVdLFxyXG4gIFsnWVlZWU1NREQnLCAvXFxkezh9LywgdHJ1ZV0sXHJcbiAgLy8gWVlZWU1NIGlzIE5PVCBhbGxvd2VkIGJ5IHRoZSBzdGFuZGFyZFxyXG4gIFsnR0dHR1tXXVdXRScsIC9cXGR7NH1XXFxkezN9LywgdHJ1ZV0sXHJcbiAgWydHR0dHW1ddV1cnLCAvXFxkezR9V1xcZHsyfS8sIGZhbHNlXSxcclxuICBbJ1lZWVlEREQnLCAvXFxkezd9LywgdHJ1ZV1cclxuXTtcclxuXHJcbi8vIGlzbyB0aW1lIGZvcm1hdHMgYW5kIHJlZ2V4ZXNcclxuY29uc3QgaXNvVGltZXM6IFtzdHJpbmcsIFJlZ0V4cF1bXSA9IFtcclxuICBbJ0hIOm1tOnNzLlNTU1MnLCAvXFxkXFxkOlxcZFxcZDpcXGRcXGRcXC5cXGQrL10sXHJcbiAgWydISDptbTpzcyxTU1NTJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkLFxcZCsvXSxcclxuICBbJ0hIOm1tOnNzJywgL1xcZFxcZDpcXGRcXGQ6XFxkXFxkL10sXHJcbiAgWydISDptbScsIC9cXGRcXGQ6XFxkXFxkL10sXHJcbiAgWydISG1tc3MuU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGRcXC5cXGQrL10sXHJcbiAgWydISG1tc3MsU1NTUycsIC9cXGRcXGRcXGRcXGRcXGRcXGQsXFxkKy9dLFxyXG4gIFsnSEhtbXNzJywgL1xcZFxcZFxcZFxcZFxcZFxcZC9dLFxyXG4gIFsnSEhtbScsIC9cXGRcXGRcXGRcXGQvXSxcclxuICBbJ0hIJywgL1xcZFxcZC9dXHJcbl07XHJcblxyXG5jb25zdCBhc3BOZXRKc29uUmVnZXggPSAvXlxcLz9EYXRlXFwoKFxcLT9cXGQrKS9pO1xyXG5cclxuY29uc3Qgb2JzT2Zmc2V0czogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICBVVDogMCxcclxuICBHTVQ6IDAsXHJcbiAgRURUOiAtNCAqIDYwLFxyXG4gIEVTVDogLTUgKiA2MCxcclxuICBDRFQ6IC01ICogNjAsXHJcbiAgQ1NUOiAtNiAqIDYwLFxyXG4gIE1EVDogLTYgKiA2MCxcclxuICBNU1Q6IC03ICogNjAsXHJcbiAgUERUOiAtNyAqIDYwLFxyXG4gIFBTVDogLTggKiA2MFxyXG59O1xyXG5cclxuLy8gUkZDIDI4MjIgcmVnZXg6IEZvciBkZXRhaWxzIHNlZSBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMjgyMiNzZWN0aW9uLTMuM1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuY29uc3QgcmZjMjgyMiA9IC9eKD86KE1vbnxUdWV8V2VkfFRodXxGcml8U2F0fFN1biksP1xccyk/KFxcZHsxLDJ9KVxccyhKYW58RmVifE1hcnxBcHJ8TWF5fEp1bnxKdWx8QXVnfFNlcHxPY3R8Tm92fERlYylcXHMoXFxkezIsNH0pXFxzKFxcZFxcZCk6KFxcZFxcZCkoPzo6KFxcZFxcZCkpP1xccyg/OihVVHxHTVR8W0VDTVBdW1NEXVQpfChbWnpdKXwoWystXVxcZHs0fSkpJC87XHJcblxyXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdFxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUlTTyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGlmICghaXNTdHJpbmcoY29uZmlnLl9pKSkge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xyXG4gIGNvbnN0IG1hdGNoID0gZXh0ZW5kZWRJc29SZWdleC5leGVjKGlucHV0KSB8fCBiYXNpY0lzb1JlZ2V4LmV4ZWMoaW5wdXQpO1xyXG5cclxuXHJcbiAgbGV0IGFsbG93VGltZTtcclxuICBsZXQgZGF0ZUZvcm1hdDtcclxuICBsZXQgdGltZUZvcm1hdDtcclxuICBsZXQgdHpGb3JtYXQ7XHJcblxyXG4gIGlmICghbWF0Y2gpIHtcclxuICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pc28gPSB0cnVlO1xyXG4gIGxldCBpO1xyXG4gIGxldCBsO1xyXG4gIGZvciAoaSA9IDAsIGwgPSBpc29EYXRlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgIGlmIChpc29EYXRlc1tpXVsxXS5leGVjKG1hdGNoWzFdKSkge1xyXG4gICAgICBkYXRlRm9ybWF0ID0gaXNvRGF0ZXNbaV1bMF07XHJcbiAgICAgIGFsbG93VGltZSA9IGlzb0RhdGVzW2ldWzJdICE9PSBmYWxzZTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZGF0ZUZvcm1hdCA9PSBudWxsKSB7XHJcbiAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1hdGNoWzNdKSB7XHJcbiAgICBmb3IgKGkgPSAwLCBsID0gaXNvVGltZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmIChpc29UaW1lc1tpXVsxXS5leGVjKG1hdGNoWzNdKSkge1xyXG4gICAgICAgIC8vIG1hdGNoWzJdIHNob3VsZCBiZSAnVCcgb3Igc3BhY2VcclxuICAgICAgICB0aW1lRm9ybWF0ID0gKG1hdGNoWzJdIHx8ICcgJykgKyBpc29UaW1lc1tpXVswXTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aW1lRm9ybWF0ID09IG51bGwpIHtcclxuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgaWYgKCFhbGxvd1RpbWUgJiYgdGltZUZvcm1hdCAhPSBudWxsKSB7XHJcbiAgICBjb25maWcuX2lzVmFsaWQgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgaWYgKG1hdGNoWzRdKSB7XHJcbiAgICBpZiAodHpSZWdleC5leGVjKG1hdGNoWzRdKSkge1xyXG4gICAgICB0ekZvcm1hdCA9ICdaJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbmZpZy5fZiA9IGRhdGVGb3JtYXQgKyAodGltZUZvcm1hdCB8fCAnJykgKyAodHpGb3JtYXQgfHwgJycpO1xyXG5cclxuICByZXR1cm4gY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuZnVuY3Rpb24gZXh0cmFjdEZyb21SRkMyODIyU3RyaW5ncyh5ZWFyU3RyOiBzdHJpbmcsIG1vbnRoU3RyOiBzdHJpbmcsIGRheVN0cjogc3RyaW5nLCBob3VyU3RyOiBzdHJpbmcsIG1pbnV0ZVN0cjogc3RyaW5nLCBzZWNvbmRTdHI6IHN0cmluZyk6IERhdGVBcnJheSB7XHJcbiAgY29uc3QgcmVzdWx0ID0gW1xyXG4gICAgdW50cnVuY2F0ZVllYXIoeWVhclN0ciksXHJcbiAgICBkZWZhdWx0TG9jYWxlTW9udGhzU2hvcnQuaW5kZXhPZihtb250aFN0ciksXHJcbiAgICBwYXJzZUludChkYXlTdHIsIDEwKSxcclxuICAgIHBhcnNlSW50KGhvdXJTdHIsIDEwKSxcclxuICAgIHBhcnNlSW50KG1pbnV0ZVN0ciwgMTApXHJcbiAgXTtcclxuXHJcbiAgaWYgKHNlY29uZFN0cikge1xyXG4gICAgcmVzdWx0LnB1c2gocGFyc2VJbnQoc2Vjb25kU3RyLCAxMCkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdW50cnVuY2F0ZVllYXIoeWVhclN0cjogc3RyaW5nKTogbnVtYmVyIHtcclxuICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoeWVhclN0ciwgMTApO1xyXG5cclxuICByZXR1cm4geWVhciA8PSA0OSA/IHllYXIgKyAyMDAwIDogeWVhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJlcHJvY2Vzc1JGQzI4MjIoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIFJlbW92ZSBjb21tZW50cyBhbmQgZm9sZGluZyB3aGl0ZXNwYWNlIGFuZCByZXBsYWNlIG11bHRpcGxlLXNwYWNlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXHJcbiAgcmV0dXJuIHN0clxyXG4gICAgLnJlcGxhY2UoL1xcKFteKV0qXFwpfFtcXG5cXHRdL2csICcgJylcclxuICAgIC5yZXBsYWNlKC8oXFxzXFxzKykvZywgJyAnKS50cmltKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrV2Vla2RheSh3ZWVrZGF5U3RyOiBzdHJpbmcsIHBhcnNlZElucHV0OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBib29sZWFuIHtcclxuICBpZiAod2Vla2RheVN0cikge1xyXG4gICAgLy8gVE9ETzogUmVwbGFjZSB0aGUgdmFuaWxsYSBKUyBEYXRlIG9iamVjdCB3aXRoIGFuIGluZGVwZW50ZW50IGRheS1vZi13ZWVrIGNoZWNrLlxyXG4gICAgY29uc3Qgd2Vla2RheVByb3ZpZGVkID0gZGVmYXVsdExvY2FsZVdlZWtkYXlzU2hvcnQuaW5kZXhPZih3ZWVrZGF5U3RyKTtcclxuICAgIGNvbnN0IHdlZWtkYXlBY3R1YWwgPSBuZXcgRGF0ZShwYXJzZWRJbnB1dFswXSwgcGFyc2VkSW5wdXRbMV0sIHBhcnNlZElucHV0WzJdKS5nZXREYXkoKTtcclxuICAgIGlmICh3ZWVrZGF5UHJvdmlkZWQgIT09IHdlZWtkYXlBY3R1YWwpIHtcclxuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykud2Vla2RheU1pc21hdGNoID0gdHJ1ZTtcclxuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlT2Zmc2V0KG9ic09mZnNldDogc3RyaW5nLCBtaWxpdGFyeU9mZnNldDogc3RyaW5nLCBudW1PZmZzZXQ6IHN0cmluZykge1xyXG4gIGlmIChvYnNPZmZzZXQpIHtcclxuICAgIHJldHVybiBvYnNPZmZzZXRzW29ic09mZnNldF07XHJcbiAgfSBlbHNlIGlmIChtaWxpdGFyeU9mZnNldCkge1xyXG4gICAgLy8gdGhlIG9ubHkgYWxsb3dlZCBtaWxpdGFyeSB0eiBpcyBaXHJcbiAgICByZXR1cm4gMDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgaG0gPSBwYXJzZUludChudW1PZmZzZXQsIDEwKTtcclxuICAgIGNvbnN0IG0gPSBobSAlIDEwMDtcclxuICAgIGNvbnN0IGggPSAoaG0gLSBtKSAvIDEwMDtcclxuXHJcbiAgICByZXR1cm4gaCAqIDYwICsgbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGRhdGUgYW5kIHRpbWUgZnJvbSByZWYgMjgyMiBmb3JtYXRcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgaWYgKCFpc1N0cmluZyhjb25maWcuX2kpKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgbWF0Y2ggPSByZmMyODIyLmV4ZWMocHJlcHJvY2Vzc1JGQzI4MjIoY29uZmlnLl9pKSk7XHJcblxyXG4gIGlmICghbWF0Y2gpIHtcclxuICAgIHJldHVybiBtYXJrSW52YWxpZChjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyc2VkQXJyYXkgPSBleHRyYWN0RnJvbVJGQzI4MjJTdHJpbmdzKG1hdGNoWzRdLCBtYXRjaFszXSwgbWF0Y2hbMl0sIG1hdGNoWzVdLCBtYXRjaFs2XSwgbWF0Y2hbN10pO1xyXG4gIGlmICghY2hlY2tXZWVrZGF5KG1hdGNoWzFdLCBwYXJzZWRBcnJheSwgY29uZmlnKSkge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbmZpZy5fYSA9IHBhcnNlZEFycmF5O1xyXG4gIGNvbmZpZy5fdHptID0gY2FsY3VsYXRlT2Zmc2V0KG1hdGNoWzhdLCBtYXRjaFs5XSwgbWF0Y2hbMTBdKTtcclxuXHJcbiAgY29uZmlnLl9kID0gY3JlYXRlVVRDRGF0ZS5hcHBseShudWxsLCBjb25maWcuX2EpO1xyXG4gIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XHJcblxyXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnJmYzI4MjIgPSB0cnVlO1xyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG4vLyBkYXRlIGZyb20gaXNvIGZvcm1hdCBvciBmYWxsYmFja1xyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbVN0cmluZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGlmICghaXNTdHJpbmcoY29uZmlnLl9pKSkge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbnN0IG1hdGNoZWQgPSBhc3BOZXRKc29uUmVnZXguZXhlYyhjb25maWcuX2kpO1xyXG5cclxuICBpZiAobWF0Y2hlZCAhPT0gbnVsbCkge1xyXG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUoK21hdGNoZWRbMV0pO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiB1cGRhdGUgbG9naWMgcHJvY2Vzc2luZ1xyXG4gIC8vIGlzSVNPIC0+IGNvbmZpZ0Zyb21JU09cclxuICAvLyBpc1JGQyAtPiBjb25maWdGcm9tUkZDXHJcblxyXG4gIGNvbmZpZ0Zyb21JU08oY29uZmlnKTtcclxuICBpZiAoY29uZmlnLl9pc1ZhbGlkID09PSBmYWxzZSkge1xyXG4gICAgZGVsZXRlIGNvbmZpZy5faXNWYWxpZDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XHJcbiAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PT0gZmFsc2UpIHtcclxuICAgIGRlbGV0ZSBjb25maWcuX2lzVmFsaWQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyBGaW5hbCBhdHRlbXB0LCB1c2UgSW5wdXQgRmFsbGJhY2tcclxuICAvLyBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xyXG4gIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XHJcbn1cclxuXHJcbi8vIGhvb2tzLmNyZWF0ZUZyb21JbnB1dEZhbGxiYWNrID0gZGVwcmVjYXRlKFxyXG4vLyAgICAgJ3ZhbHVlIHByb3ZpZGVkIGlzIG5vdCBpbiBhIHJlY29nbml6ZWQgUkZDMjgyMiBvciBJU08gZm9ybWF0LiBtb21lbnQgY29uc3RydWN0aW9uIGZhbGxzIGJhY2sgdG8ganMgRGF0ZSgpLCAnICtcclxuLy8gICAgICd3aGljaCBpcyBub3QgcmVsaWFibGUgYWNyb3NzIGFsbCBicm93c2VycyBhbmQgdmVyc2lvbnMuIE5vbiBSRkMyODIyL0lTTyBkYXRlIGZvcm1hdHMgYXJlICcgK1xyXG4vLyAgICAgJ2Rpc2NvdXJhZ2VkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gYW4gdXBjb21pbmcgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHJlZmVyIHRvICcgK1xyXG4vLyAgICAgJ2h0dHA6Ly9tb21lbnRqcy5jb20vZ3VpZGVzLyMvd2FybmluZ3MvanMtZGF0ZS8gZm9yIG1vcmUgaW5mby4nLFxyXG4vLyAgICAgZnVuY3Rpb24gKGNvbmZpZykge1xyXG4vLyAgICAgICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGNvbmZpZy5faSArIChjb25maWcuX3VzZVVUQyA/ICcgVVRDJyA6ICcnKSk7XHJcbi8vICAgICB9XHJcbi8vICk7XHJcbiIsIi8vIG1vbWVudC5qc1xyXG4vLyB2ZXJzaW9uIDogMi4xOC4xXHJcbi8vIGF1dGhvcnMgOiBUaW0gV29vZCwgSXNrcmVuIENoZXJuZXYsIE1vbWVudC5qcyBjb250cmlidXRvcnNcclxuLy8gbGljZW5zZSA6IE1JVFxyXG4vLyBtb21lbnRqcy5jb21cclxuXHJcbmltcG9ydCAnLi91bml0cy9pbmRleCc7XHJcbmltcG9ydCB7IGZvcm1hdEZ1bmN0aW9ucywgbWFrZUZvcm1hdEZ1bmN0aW9uIH0gZnJvbSAnLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9sb2NhbGUvbG9jYWxlcyc7XHJcbmltcG9ydCB7IGlzRGF0ZVZhbGlkIH0gZnJvbSAnLi91dGlscy90eXBlLWNoZWNrcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xyXG4gIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUobG9jYWxlIHx8ICdlbicpO1xyXG4gIGlmICghX2xvY2FsZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICBgTG9jYWxlIFwiJHtsb2NhbGV9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgX2Zvcm1hdCA9IGZvcm1hdCB8fCAoaXNVVEMgPyAgJ1lZWVktTU0tRERUSEg6bW06c3NbWl0nIDogJ1lZWVktTU0tRERUSEg6bW06c3NaJyk7XHJcblxyXG4gIGNvbnN0IG91dHB1dCA9IGZvcm1hdE1vbWVudChkYXRlLCBfZm9ybWF0LCBfbG9jYWxlLCBpc1VUQywgb2Zmc2V0KTtcclxuXHJcbiAgaWYgKCFvdXRwdXQpIHtcclxuICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gX2xvY2FsZS5wb3N0Zm9ybWF0KG91dHB1dCk7XHJcbn1cclxuXHJcbi8vIGZvcm1hdCBkYXRlIHVzaW5nIG5hdGl2ZSBkYXRlIG9iamVjdFxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9tZW50KGRhdGU6IERhdGUsIF9mb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XHJcbiAgaWYgKCFpc0RhdGVWYWxpZChkYXRlKSkge1xyXG4gICAgcmV0dXJuIGxvY2FsZS5pbnZhbGlkRGF0ZTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZvcm1hdCA9IGV4cGFuZEZvcm1hdChfZm9ybWF0LCBsb2NhbGUpO1xyXG4gIGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdID0gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0gfHwgbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdCk7XHJcblxyXG4gIHJldHVybiBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XShkYXRlLCBsb2NhbGUsIGlzVVRDLCBvZmZzZXQpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwYW5kRm9ybWF0KF9mb3JtYXQ6IHN0cmluZywgbG9jYWxlOiBMb2NhbGUpOiBzdHJpbmcge1xyXG4gIGxldCBmb3JtYXQgPSBfZm9ybWF0O1xyXG4gIGxldCBpID0gNTtcclxuICBjb25zdCBsb2NhbEZvcm1hdHRpbmdUb2tlbnMgPSAvKFxcW1teXFxbXSpcXF0pfChcXFxcKT8oTFRTfExUfExMP0w/TD98bHsxLDR9KS9nO1xyXG5cclxuICBjb25zdCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMgPSAoaW5wdXQ6IGFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXRMb25nRGF0ZShpbnB1dCkgfHwgaW5wdXQ7XHJcbiAgfTtcclxuXHJcbiAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XHJcbiAgd2hpbGUgKGkgPj0gMCAmJiBsb2NhbEZvcm1hdHRpbmdUb2tlbnMudGVzdChmb3JtYXQpKSB7XHJcbiAgICBmb3JtYXQgPSBmb3JtYXQucmVwbGFjZShsb2NhbEZvcm1hdHRpbmdUb2tlbnMsIHJlcGxhY2VMb25nRGF0ZUZvcm1hdFRva2Vucyk7XHJcbiAgICBsb2NhbEZvcm1hdHRpbmdUb2tlbnMubGFzdEluZGV4ID0gMDtcclxuICAgIGkgLT0gMTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmb3JtYXQ7XHJcbn1cclxuIiwiLy8gUGljayB0aGUgZmlyc3QgZGVmaW5lZCBvZiB0d28gb3IgdGhyZWUgYXJndW1lbnRzLlxyXG5leHBvcnQgZnVuY3Rpb24gZGVmYXVsdHM8VD4oYT86IFQsIGI/OiBULCBjPzogVCk6IFQge1xyXG4gIGlmIChhICE9IG51bGwpIHtcclxuICAgIHJldHVybiBhO1xyXG4gIH1cclxuICBpZiAoYiAhPSBudWxsKSB7XHJcbiAgICByZXR1cm4gYjtcclxuICB9XHJcblxyXG4gIHJldHVybiBjO1xyXG59XHJcbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEQVRFLCBIT1VSLCBNSUxMSVNFQ09ORCwgTUlOVVRFLCBNT05USCwgU0VDT05ELCBZRUFSIH0gZnJvbSAnLi4vdW5pdHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgZGF5c0luWWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xyXG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVVVENEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBjcmVhdGVEYXRlIH0gZnJvbSAnLi9kYXRlLWZyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBkYXlPZlllYXJGcm9tV2Vla3MsIHdlZWtPZlllYXIsIHdlZWtzSW5ZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay1jYWxlbmRhci11dGlscyc7XHJcbmltcG9ydCB7IGRlZmF1bHRzIH0gZnJvbSAnLi4vdXRpbHMvZGVmYXVsdHMnO1xyXG5cclxuZnVuY3Rpb24gY3VycmVudERhdGVBcnJheShjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZUFycmF5IHtcclxuICBjb25zdCBub3dWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gIGlmIChjb25maWcuX3VzZVVUQykge1xyXG4gICAgcmV0dXJuIFtub3dWYWx1ZS5nZXRVVENGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRVVENNb250aCgpLCBub3dWYWx1ZS5nZXRVVENEYXRlKCldO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFtub3dWYWx1ZS5nZXRGdWxsWWVhcigpLCBub3dWYWx1ZS5nZXRNb250aCgpLCBub3dWYWx1ZS5nZXREYXRlKCldO1xyXG59XHJcblxyXG4vLyBjb252ZXJ0IGFuIGFycmF5IHRvIGEgZGF0ZS5cclxuLy8gdGhlIGFycmF5IHNob3VsZCBtaXJyb3IgdGhlIHBhcmFtZXRlcnMgYmVsb3dcclxuLy8gbm90ZTogYWxsIHZhbHVlcyBwYXN0IHRoZSB5ZWFyIGFyZSBvcHRpb25hbCBhbmQgd2lsbCBkZWZhdWx0IHRvIHRoZSBsb3dlc3QgcG9zc2libGUgdmFsdWUuXHJcbi8vIFt5ZWFyLCBtb250aCwgZGF5ICwgaG91ciwgbWludXRlLCBzZWNvbmQsIG1pbGxpc2Vjb25kXVxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUFycmF5KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgY29uc3QgaW5wdXQgPSBbXTtcclxuICBsZXQgaTtcclxuICBsZXQgZGF0ZTtcclxuICBsZXQgY3VycmVudERhdGU7XHJcbiAgbGV0IGV4cGVjdGVkV2Vla2RheTtcclxuICBsZXQgeWVhclRvVXNlO1xyXG5cclxuICBpZiAoY29uZmlnLl9kKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgY3VycmVudERhdGUgPSBjdXJyZW50RGF0ZUFycmF5KGNvbmZpZyk7XHJcblxyXG4gIC8vIGNvbXB1dGUgZGF5IG9mIHRoZSB5ZWFyIGZyb20gd2Vla3MgYW5kIHdlZWtkYXlzXHJcbiAgaWYgKGNvbmZpZy5fdyAmJiBjb25maWcuX2FbREFURV0gPT0gbnVsbCAmJiBjb25maWcuX2FbTU9OVEhdID09IG51bGwpIHtcclxuICAgIGRheU9mWWVhckZyb21XZWVrSW5mbyhjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgLy8gaWYgdGhlIGRheSBvZiB0aGUgeWVhciBpcyBzZXQsIGZpZ3VyZSBvdXQgd2hhdCBpdCBpc1xyXG4gIGlmIChjb25maWcuX2RheU9mWWVhciAhPSBudWxsKSB7XHJcbiAgICB5ZWFyVG9Vc2UgPSBkZWZhdWx0cyhjb25maWcuX2FbWUVBUl0sIGN1cnJlbnREYXRlW1lFQVJdKTtcclxuXHJcbiAgICBpZiAoY29uZmlnLl9kYXlPZlllYXIgPiBkYXlzSW5ZZWFyKHllYXJUb1VzZSkgfHwgY29uZmlnLl9kYXlPZlllYXIgPT09IDApIHtcclxuICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBkYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoeWVhclRvVXNlLCAwLCBjb25maWcuX2RheU9mWWVhcikpO1xyXG4gICAgY29uZmlnLl9hW01PTlRIXSA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcclxuICAgIGNvbmZpZy5fYVtEQVRFXSA9IGRhdGUuZ2V0VVRDRGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gRGVmYXVsdCB0byBjdXJyZW50IGRhdGUuXHJcbiAgLy8gKiBpZiBubyB5ZWFyLCBtb250aCwgZGF5IG9mIG1vbnRoIGFyZSBnaXZlbiwgZGVmYXVsdCB0byB0b2RheVxyXG4gIC8vICogaWYgZGF5IG9mIG1vbnRoIGlzIGdpdmVuLCBkZWZhdWx0IG1vbnRoIGFuZCB5ZWFyXHJcbiAgLy8gKiBpZiBtb250aCBpcyBnaXZlbiwgZGVmYXVsdCBvbmx5IHllYXJcclxuICAvLyAqIGlmIHllYXIgaXMgZ2l2ZW4sIGRvbid0IGRlZmF1bHQgYW55dGhpbmdcclxuICBmb3IgKGkgPSAwOyBpIDwgMyAmJiBjb25maWcuX2FbaV0gPT0gbnVsbDsgKytpKSB7XHJcbiAgICBjb25maWcuX2FbaV0gPSBpbnB1dFtpXSA9IGN1cnJlbnREYXRlW2ldO1xyXG4gIH1cclxuXHJcbiAgLy8gWmVybyBvdXQgd2hhdGV2ZXIgd2FzIG5vdCBkZWZhdWx0ZWQsIGluY2x1ZGluZyB0aW1lXHJcbiAgZm9yICg7IGkgPCA3OyBpKyspIHtcclxuICAgIGNvbmZpZy5fYVtpXSA9IGlucHV0W2ldID0gKGNvbmZpZy5fYVtpXSA9PSBudWxsKSA/IChpID09PSAyID8gMSA6IDApIDogY29uZmlnLl9hW2ldO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgZm9yIDI0OjAwOjAwLjAwMFxyXG4gIGlmIChjb25maWcuX2FbSE9VUl0gPT09IDI0ICYmXHJcbiAgICBjb25maWcuX2FbTUlOVVRFXSA9PT0gMCAmJlxyXG4gICAgY29uZmlnLl9hW1NFQ09ORF0gPT09IDAgJiZcclxuICAgIGNvbmZpZy5fYVtNSUxMSVNFQ09ORF0gPT09IDApIHtcclxuICAgIGNvbmZpZy5fbmV4dERheSA9IHRydWU7XHJcbiAgICBjb25maWcuX2FbSE9VUl0gPSAwO1xyXG4gIH1cclxuXHJcbiAgY29uZmlnLl9kID0gKGNvbmZpZy5fdXNlVVRDID8gY3JlYXRlVVRDRGF0ZSA6IGNyZWF0ZURhdGUpLmFwcGx5KG51bGwsIGlucHV0KTtcclxuICBleHBlY3RlZFdlZWtkYXkgPSBjb25maWcuX3VzZVVUQyA/IGNvbmZpZy5fZC5nZXRVVENEYXkoKSA6IGNvbmZpZy5fZC5nZXREYXkoKTtcclxuXHJcbiAgLy8gQXBwbHkgdGltZXpvbmUgb2Zmc2V0IGZyb20gaW5wdXQuIFRoZSBhY3R1YWwgdXRjT2Zmc2V0IGNhbiBiZSBjaGFuZ2VkXHJcbiAgLy8gd2l0aCBwYXJzZVpvbmUuXHJcbiAgaWYgKGNvbmZpZy5fdHptICE9IG51bGwpIHtcclxuICAgIGNvbmZpZy5fZC5zZXRVVENNaW51dGVzKGNvbmZpZy5fZC5nZXRVVENNaW51dGVzKCkgLSBjb25maWcuX3R6bSk7XHJcbiAgfVxyXG5cclxuICBpZiAoY29uZmlnLl9uZXh0RGF5KSB7XHJcbiAgICBjb25maWcuX2FbSE9VUl0gPSAyNDtcclxuICB9XHJcblxyXG4gIC8vIGNoZWNrIGZvciBtaXNtYXRjaGluZyBkYXkgb2Ygd2Vla1xyXG4gIGlmIChjb25maWcuX3cgJiYgdHlwZW9mIGNvbmZpZy5fdy5kICE9PSAndW5kZWZpbmVkJyAmJiBjb25maWcuX3cuZCAhPT0gZXhwZWN0ZWRXZWVrZGF5KSB7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS53ZWVrZGF5TWlzbWF0Y2ggPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZnVuY3Rpb24gZGF5T2ZZZWFyRnJvbVdlZWtJbmZvKGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgbGV0IHcsIHdlZWtZZWFyLCB3ZWVrLCB3ZWVrZGF5LCBkb3csIGRveSwgdGVtcCwgd2Vla2RheU92ZXJmbG93O1xyXG5cclxuICB3ID0gY29uZmlnLl93O1xyXG4gIGlmICh3LkdHICE9IG51bGwgfHwgdy5XICE9IG51bGwgfHwgdy5FICE9IG51bGwpIHtcclxuICAgIGRvdyA9IDE7XHJcbiAgICBkb3kgPSA0O1xyXG5cclxuICAgIC8vIFRPRE86IFdlIG5lZWQgdG8gdGFrZSB0aGUgY3VycmVudCBpc29XZWVrWWVhciwgYnV0IHRoYXQgZGVwZW5kcyBvblxyXG4gICAgLy8gaG93IHdlIGludGVycHJldCBub3cgKGxvY2FsLCB1dGMsIGZpeGVkIG9mZnNldCkuIFNvIGNyZWF0ZVxyXG4gICAgLy8gYSBub3cgdmVyc2lvbiBvZiBjdXJyZW50IGNvbmZpZyAodGFrZSBsb2NhbC91dGMvb2Zmc2V0IGZsYWdzLCBhbmRcclxuICAgIC8vIGNyZWF0ZSBub3cpLlxyXG4gICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LkdHLCBjb25maWcuX2FbWUVBUl0sIHdlZWtPZlllYXIobmV3IERhdGUoKSwgMSwgNCkueWVhcik7XHJcbiAgICB3ZWVrID0gZGVmYXVsdHMody5XLCAxKTtcclxuICAgIHdlZWtkYXkgPSBkZWZhdWx0cyh3LkUsIDEpO1xyXG4gICAgaWYgKHdlZWtkYXkgPCAxIHx8IHdlZWtkYXkgPiA3KSB7XHJcbiAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvdyA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRvdztcclxuICAgIGRveSA9IGNvbmZpZy5fbG9jYWxlLl93ZWVrLmRveTtcclxuXHJcbiAgICBjb25zdCBjdXJXZWVrID0gd2Vla09mWWVhcihuZXcgRGF0ZSgpLCBkb3csIGRveSk7XHJcblxyXG4gICAgd2Vla1llYXIgPSBkZWZhdWx0cyh3LmdnLCBjb25maWcuX2FbWUVBUl0sIGN1cldlZWsueWVhcik7XHJcblxyXG4gICAgLy8gRGVmYXVsdCB0byBjdXJyZW50IHdlZWsuXHJcbiAgICB3ZWVrID0gZGVmYXVsdHMody53LCBjdXJXZWVrLndlZWspO1xyXG5cclxuICAgIGlmICh3LmQgIT0gbnVsbCkge1xyXG4gICAgICAvLyB3ZWVrZGF5IC0tIGxvdyBkYXkgbnVtYmVycyBhcmUgY29uc2lkZXJlZCBuZXh0IHdlZWtcclxuICAgICAgd2Vla2RheSA9IHcuZDtcclxuICAgICAgaWYgKHdlZWtkYXkgPCAwIHx8IHdlZWtkYXkgPiA2KSB7XHJcbiAgICAgICAgd2Vla2RheU92ZXJmbG93ID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh3LmUgIT0gbnVsbCkge1xyXG4gICAgICAvLyBsb2NhbCB3ZWVrZGF5IC0tIGNvdW50aW5nIHN0YXJ0cyBmcm9tIGJlZ2luaW5nIG9mIHdlZWtcclxuICAgICAgd2Vla2RheSA9IHcuZSArIGRvdztcclxuICAgICAgaWYgKHcuZSA8IDAgfHwgdy5lID4gNikge1xyXG4gICAgICAgIHdlZWtkYXlPdmVyZmxvdyA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGRlZmF1bHQgdG8gYmVnaW5pbmcgb2Ygd2Vla1xyXG4gICAgICB3ZWVrZGF5ID0gZG93O1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAod2VlayA8IDEgfHwgd2VlayA+IHdlZWtzSW5ZZWFyKHdlZWtZZWFyLCBkb3csIGRveSkpIHtcclxuICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLl9vdmVyZmxvd1dlZWtzID0gdHJ1ZTtcclxuICB9IGVsc2UgaWYgKHdlZWtkYXlPdmVyZmxvdyAhPSBudWxsKSB7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGVtcCA9IGRheU9mWWVhckZyb21XZWVrcyh3ZWVrWWVhciwgd2Vlaywgd2Vla2RheSwgZG93LCBkb3kpO1xyXG4gICAgY29uZmlnLl9hW1lFQVJdID0gdGVtcC55ZWFyO1xyXG4gICAgY29uZmlnLl9kYXlPZlllYXIgPSB0ZW1wLmRheU9mWWVhcjtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2V0UGFyc2luZ0ZsYWdzIH0gZnJvbSAnLi9wYXJzaW5nLWZsYWdzJztcclxuaW1wb3J0IHsgREFURSwgSE9VUiwgTUlMTElTRUNPTkQsIE1JTlVURSwgTU9OVEgsIFNFQ09ORCwgV0VFSywgV0VFS0RBWSwgWUVBUiB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IGRheXNJbk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvbW9udGgnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPdmVyZmxvdyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGxldCBvdmVyZmxvdztcclxuICBjb25zdCBhID0gY29uZmlnLl9hO1xyXG5cclxuICBpZiAoYSAmJiBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5vdmVyZmxvdyA9PT0gLTIpIHtcclxuICAgIC8vIHRvZG86IGZpeCB0aGlzIHNoKnRcclxuICAgIG92ZXJmbG93ID1cclxuICAgICAgYVtNT05USF0gPCAwIHx8IGFbTU9OVEhdID4gMTEgPyBNT05USCA6XHJcbiAgICAgICAgYVtEQVRFXSA8IDEgfHwgYVtEQVRFXSA+IGRheXNJbk1vbnRoKGFbWUVBUl0sIGFbTU9OVEhdKSA/IERBVEUgOlxyXG4gICAgICAgICAgYVtIT1VSXSA8IDAgfHwgYVtIT1VSXSA+IDI0IHx8IChhW0hPVVJdID09PSAyNCAmJiAoYVtNSU5VVEVdICE9PSAwIHx8IGFbU0VDT05EXSAhPT0gMCB8fCBhW01JTExJU0VDT05EXSAhPT0gMCkpID8gSE9VUiA6XHJcbiAgICAgICAgICAgIGFbTUlOVVRFXSA8IDAgfHwgYVtNSU5VVEVdID4gNTkgPyBNSU5VVEUgOlxyXG4gICAgICAgICAgICAgIGFbU0VDT05EXSA8IDAgfHwgYVtTRUNPTkRdID4gNTkgPyBTRUNPTkQgOlxyXG4gICAgICAgICAgICAgICAgYVtNSUxMSVNFQ09ORF0gPCAwIHx8IGFbTUlMTElTRUNPTkRdID4gOTk5ID8gTUlMTElTRUNPTkQgOlxyXG4gICAgICAgICAgICAgICAgICAtMTtcclxuXHJcbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93RGF5T2ZZZWFyICYmIChvdmVyZmxvdyA8IFlFQVIgfHwgb3ZlcmZsb3cgPiBEQVRFKSkge1xyXG4gICAgICBvdmVyZmxvdyA9IERBVEU7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuX292ZXJmbG93V2Vla3MgJiYgb3ZlcmZsb3cgPT09IC0xKSB7XHJcbiAgICAgIG92ZXJmbG93ID0gV0VFSztcclxuICAgIH1cclxuICAgIGlmIChnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5fb3ZlcmZsb3dXZWVrZGF5ICYmIG92ZXJmbG93ID09PSAtMSkge1xyXG4gICAgICBvdmVyZmxvdyA9IFdFRUtEQVk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykub3ZlcmZsb3cgPSBvdmVyZmxvdztcclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgY29uZmlnRnJvbUlTTywgY29uZmlnRnJvbVJGQzI4MjIgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcclxuaW1wb3J0IHsgZXhwYW5kRm9ybWF0IH0gZnJvbSAnLi4vZm9ybWF0JztcclxuaW1wb3J0IHsgZm9ybWF0dGluZ1Rva2VucywgZm9ybWF0VG9rZW5GdW5jdGlvbnMgfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGdldFBhcnNlUmVnZXhGb3JUb2tlbiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IEhPVVIgfSBmcm9tICcuLi91bml0cy9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBnZXRQYXJzaW5nRmxhZ3MgfSBmcm9tICcuL3BhcnNpbmctZmxhZ3MnO1xyXG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIElTTyBzdGFuZGFyZFxyXG4vLyBob29rcy5JU09fODYwMSA9IGZ1bmN0aW9uICgpIHt9O1xyXG5leHBvcnQgY29uc3QgSVNPXzg2MDEgPSAnSVNPXzg2MDEnO1xyXG5cclxuLy8gY29uc3RhbnQgdGhhdCByZWZlcnMgdG8gdGhlIFJGQyAyODIyIGZvcm1cclxuLy8gaG9va3MuUkZDXzI4MjIgPSBmdW5jdGlvbiAoKSB7fTtcclxuZXhwb3J0IGNvbnN0IFJGQ18yODIyID0gJ1JGQ18yODIyJztcclxuXHJcbi8vIGRhdGUgZnJvbSBzdHJpbmcgYW5kIGZvcm1hdCBzdHJpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAvLyBUT0RPOiBNb3ZlIHRoaXMgdG8gYW5vdGhlciBwYXJ0IG9mIHRoZSBjcmVhdGlvbiBmbG93IHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwc1xyXG4gIGlmIChjb25maWcuX2YgPT09IElTT184NjAxKSB7XHJcbiAgICByZXR1cm4gY29uZmlnRnJvbUlTTyhjb25maWcpO1xyXG4gIH1cclxuICBpZiAoY29uZmlnLl9mID09PSBSRkNfMjgyMikge1xyXG4gICAgcmV0dXJuIGNvbmZpZ0Zyb21SRkMyODIyKGNvbmZpZyk7XHJcbiAgfVxyXG4gIGNvbmZpZy5fYSA9IFtdO1xyXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLmVtcHR5ID0gdHJ1ZTtcclxuXHJcbiAgaWYgKGlzQXJyYXkoY29uZmlnLl9mKSB8fCAoIWNvbmZpZy5faSAmJiBjb25maWcuX2kgIT09IDApKSB7XHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhpcyBhcnJheSBpcyB1c2VkIHRvIG1ha2UgYSBEYXRlLCBlaXRoZXIgd2l0aCBgbmV3IERhdGVgIG9yIGBEYXRlLlVUQ2BcclxuXHJcbiAgbGV0IGlucHV0ID0gY29uZmlnLl9pLnRvU3RyaW5nKCk7XHJcbiAgbGV0IHRvdGFsUGFyc2VkSW5wdXRMZW5ndGggPSAwO1xyXG4gIGNvbnN0IGlucHV0TGVuZ3RoID0gaW5wdXQubGVuZ3RoO1xyXG4gIGNvbnN0IHRva2VucyA9IGV4cGFuZEZvcm1hdChjb25maWcuX2YsIGNvbmZpZy5fbG9jYWxlKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKSB8fCBbXTtcclxuXHJcbiAgbGV0IGk7XHJcbiAgbGV0IHRva2VuO1xyXG4gIGxldCBwYXJzZWRJbnB1dDtcclxuICBsZXQgc2tpcHBlZDtcclxuICBmb3IgKGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcclxuICAgIHBhcnNlZElucHV0ID0gKGlucHV0Lm1hdGNoKGdldFBhcnNlUmVnZXhGb3JUb2tlbih0b2tlbiwgY29uZmlnLl9sb2NhbGUpKSB8fCBbXSlbMF07XHJcbiAgICBpZiAocGFyc2VkSW5wdXQpIHtcclxuICAgICAgc2tpcHBlZCA9IGlucHV0LnN1YnN0cigwLCBpbnB1dC5pbmRleE9mKHBhcnNlZElucHV0KSk7XHJcbiAgICAgIGlmIChza2lwcGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKHNraXBwZWQpO1xyXG4gICAgICB9XHJcbiAgICAgIGlucHV0ID0gaW5wdXQuc2xpY2UoaW5wdXQuaW5kZXhPZihwYXJzZWRJbnB1dCkgKyBwYXJzZWRJbnB1dC5sZW5ndGgpO1xyXG4gICAgICB0b3RhbFBhcnNlZElucHV0TGVuZ3RoICs9IHBhcnNlZElucHV0Lmxlbmd0aDtcclxuICAgIH1cclxuICAgIC8vIGRvbid0IHBhcnNlIGlmIGl0J3Mgbm90IGEga25vd24gdG9rZW5cclxuICAgIGlmIChmb3JtYXRUb2tlbkZ1bmN0aW9uc1t0b2tlbl0pIHtcclxuICAgICAgaWYgKHBhcnNlZElucHV0KSB7XHJcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuZW1wdHkgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRUb2tlbnMucHVzaCh0b2tlbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFkZFRpbWVUb0FycmF5RnJvbVRva2VuKHRva2VuLCBwYXJzZWRJbnB1dCwgY29uZmlnKTtcclxuICAgIH0gZWxzZSBpZiAoY29uZmlnLl9zdHJpY3QgJiYgIXBhcnNlZElucHV0KSB7XHJcbiAgICAgIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnVudXNlZFRva2Vucy5wdXNoKHRva2VuKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGFkZCByZW1haW5pbmcgdW5wYXJzZWQgaW5wdXQgbGVuZ3RoIHRvIHRoZSBzdHJpbmdcclxuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5jaGFyc0xlZnRPdmVyID0gaW5wdXRMZW5ndGggLSB0b3RhbFBhcnNlZElucHV0TGVuZ3RoO1xyXG4gIGlmIChpbnB1dC5sZW5ndGggPiAwKSB7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS51bnVzZWRJbnB1dC5wdXNoKGlucHV0KTtcclxuICB9XHJcblxyXG4gIC8vIGNsZWFyIF8xMmggZmxhZyBpZiBob3VyIGlzIDw9IDEyXHJcbiAgaWYgKGNvbmZpZy5fYVtIT1VSXSA8PSAxMiAmJlxyXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9PT0gdHJ1ZSAmJlxyXG4gICAgY29uZmlnLl9hW0hPVVJdID4gMCkge1xyXG4gICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuYmlnSG91ciA9IHZvaWQgMDtcclxuICB9XHJcblxyXG4gIGdldFBhcnNpbmdGbGFncyhjb25maWcpLnBhcnNlZERhdGVQYXJ0cyA9IGNvbmZpZy5fYS5zbGljZSgwKTtcclxuICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5tZXJpZGllbSA9IGNvbmZpZy5fbWVyaWRpZW07XHJcbiAgLy8gaGFuZGxlIG1lcmlkaWVtXHJcbiAgY29uZmlnLl9hW0hPVVJdID0gbWVyaWRpZW1GaXhXcmFwKGNvbmZpZy5fbG9jYWxlLCBjb25maWcuX2FbSE9VUl0sIGNvbmZpZy5fbWVyaWRpZW0pO1xyXG5cclxuICBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcclxuXHJcbiAgcmV0dXJuIGNoZWNrT3ZlcmZsb3coY29uZmlnKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG1lcmlkaWVtRml4V3JhcChsb2NhbGU6IExvY2FsZSwgX2hvdXI6IG51bWJlciwgbWVyaWRpZW06IHN0cmluZyk6IG51bWJlciB7XHJcbiAgbGV0IGhvdXIgPSBfaG91cjtcclxuXHJcbiAgaWYgKG1lcmlkaWVtID09IG51bGwpIHtcclxuICAgIC8vIG5vdGhpbmcgdG8gZG9cclxuICAgIHJldHVybiBob3VyO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxvY2FsZS5tZXJpZGllbUhvdXIgIT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIGxvY2FsZS5tZXJpZGllbUhvdXIoaG91ciwgbWVyaWRpZW0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKGxvY2FsZS5pc1BNID09IG51bGwpIHtcclxuICAgIC8vIHRoaXMgaXMgbm90IHN1cHBvc2VkIHRvIGhhcHBlblxyXG4gICAgcmV0dXJuIGhvdXI7XHJcbiAgfVxyXG4gIC8vIEZhbGxiYWNrXHJcbiAgY29uc3QgaXNQbSA9IGxvY2FsZS5pc1BNKG1lcmlkaWVtKTtcclxuICBpZiAoaXNQbSAmJiBob3VyIDwgMTIpIHtcclxuICAgIGhvdXIgKz0gMTI7XHJcbiAgfVxyXG5cclxuICBpZiAoIWlzUG0gJiYgaG91ciA9PT0gMTIpIHtcclxuICAgIGhvdXIgPSAwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGhvdXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xyXG5cclxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGxldCB0ZW1wQ29uZmlnO1xyXG4gIGxldCBiZXN0TW9tZW50O1xyXG4gIGxldCBzY29yZVRvQmVhdDtcclxuICBsZXQgY3VycmVudFNjb3JlO1xyXG5cclxuICBpZiAoIWNvbmZpZy5fZiB8fCBjb25maWcuX2YubGVuZ3RoID09PSAwKSB7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGk7XHJcbiAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xyXG4gICAgY3VycmVudFNjb3JlID0gMDtcclxuICAgIHRlbXBDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xyXG4gICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcclxuICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XHJcbiAgICB9XHJcbiAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xyXG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcclxuXHJcbiAgICBpZiAoIWlzVmFsaWQodGVtcENvbmZpZykpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcclxuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcclxuXHJcbiAgICAvLyBvciB0b2tlbnNcclxuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xyXG5cclxuICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcclxuXHJcbiAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xyXG4gICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcclxuICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbm9ybWFsaXplT2JqZWN0VW5pdHMgfSBmcm9tICcuLi91bml0cy9hbGlhc2VzJztcclxuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBpc09iamVjdCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbU9iamVjdChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGlmIChjb25maWcuX2QpIHtcclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcclxuICBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XHJcbiAgICBjb25zdCBpID0gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXQgYXMgYW55KTtcclxuICAgIGNvbmZpZy5fYSA9IFtpLnllYXIsIGkubW9udGgsIGkuZGF5LCBpLmhvdXJzLCBpLm1pbnV0ZXMsIGkuc2Vjb25kcywgaS5taWxsaXNlY29uZHNdXHJcbiAgICAvLyB0b2RvOiBvYnNvbGV0ZSAtPiByZW1vdmUgaXRcclxuICAgICAgLm1hcChvYmogPT4gaXNTdHJpbmcob2JqKSA/IHBhcnNlSW50KG9iaiwgMTApIDogb2JqKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWdGcm9tQXJyYXkoY29uZmlnKTtcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgaXNBcnJheSwgaXNEYXRlLCBpc051bWJlciwgaXNPYmplY3QsIGlzT2JqZWN0RW1wdHksIGlzU3RyaW5nLCBpc1VuZGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlcyc7XHJcbmltcG9ydCB7IGNyZWF0ZUludmFsaWQsIGlzVmFsaWQgfSBmcm9tICcuL3ZhbGlkJztcclxuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEFycmF5IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtYXJyYXknO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0IH0gZnJvbSAnLi9mcm9tLXN0cmluZy1hbmQtZm9ybWF0JztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi9jbG9uZSc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmcgfSBmcm9tICcuL2Zyb20tc3RyaW5nJztcclxuaW1wb3J0IHsgY29uZmlnRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tLWFycmF5JztcclxuaW1wb3J0IHsgY29uZmlnRnJvbU9iamVjdCB9IGZyb20gJy4vZnJvbS1vYmplY3QnO1xyXG5pbXBvcnQgeyBjaGVja092ZXJmbG93IH0gZnJvbSAnLi9jaGVjay1vdmVyZmxvdyc7XHJcbmltcG9ydCB7IERhdGVJbnB1dCB9IGZyb20gJy4uL3Rlc3QvY2hhaW4nO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlRnJvbUNvbmZpZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGNvbnN0IHJlcyA9IGNoZWNrT3ZlcmZsb3cocHJlcGFyZUNvbmZpZyhjb25maWcpKTtcclxuICAvLyB0b2RvOiByZW1vdmUsIGluIG1vbWVudC5qcyBpdCdzIG5ldmVyIGNhbGxlZCBjdXogb2YgbW9tZW50IGNvbnN0cnVjdG9yXHJcbiAgcmVzLl9kID0gbmV3IERhdGUocmVzLl9kICE9IG51bGwgPyByZXMuX2QuZ2V0VGltZSgpIDogTmFOKTtcclxuICBpZiAoIWlzVmFsaWQoT2JqZWN0LmFzc2lnbih7fSwgcmVzLCB7X2lzVmFsaWQ6IG51bGx9KSkpIHtcclxuICAgIHJlcy5fZCA9IG5ldyBEYXRlKE5hTik7XHJcbiAgfVxyXG4gIC8vIHRvZG86IHVwZGF0ZSBvZmZzZXRcclxuICAvKmlmIChyZXMuX25leHREYXkpIHtcclxuICAgIC8vIEFkZGluZyBpcyBzbWFydCBlbm91Z2ggYXJvdW5kIERTVFxyXG4gICAgcmVzLl9kID0gYWRkKHJlcy5fZCwgMSwgJ2RheScpO1xyXG4gICAgcmVzLl9uZXh0RGF5ID0gdW5kZWZpbmVkO1xyXG4gIH0qL1xyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJlcGFyZUNvbmZpZyhjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGxldCBpbnB1dCA9IGNvbmZpZy5faTtcclxuICBjb25zdCBmb3JtYXQgPSBjb25maWcuX2Y7XHJcblxyXG4gIGNvbmZpZy5fbG9jYWxlID0gY29uZmlnLl9sb2NhbGUgfHwgZ2V0TG9jYWxlKGNvbmZpZy5fbCk7XHJcblxyXG4gIGlmIChpbnB1dCA9PT0gbnVsbCB8fCAoZm9ybWF0ID09PSB1bmRlZmluZWQgJiYgaW5wdXQgPT09ICcnKSkge1xyXG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnLCB7IG51bGxJbnB1dDogdHJ1ZSB9KTtcclxuICB9XHJcblxyXG4gIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIGNvbmZpZy5faSA9IGlucHV0ID0gY29uZmlnLl9sb2NhbGUucHJlcGFyc2UoaW5wdXQpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzRGF0ZShpbnB1dCkpIHtcclxuICAgIGNvbmZpZy5fZCA9IGNsb25lRGF0ZShpbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IGFkZCBjaGVjayBmb3IgcmVjdXJzaW9uXHJcblxyXG4gIGlmIChpc0FycmF5KGZvcm1hdCkpIHtcclxuICAgIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWcpO1xyXG4gIH0gZWxzZSBpZiAoZm9ybWF0KSB7XHJcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kRm9ybWF0KGNvbmZpZyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbmZpZ0Zyb21JbnB1dChjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc1ZhbGlkKGNvbmZpZykpIHtcclxuICAgIGNvbmZpZy5fZCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb25maWdGcm9tSW5wdXQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBjb25zdCBpbnB1dCA9IGNvbmZpZy5faTtcclxuICBpZiAoaXNVbmRlZmluZWQoaW5wdXQpKSB7XHJcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZSgpO1xyXG4gIH0gZWxzZSBpZiAoaXNEYXRlKGlucHV0KSkge1xyXG4gICAgY29uZmlnLl9kID0gY2xvbmVEYXRlKGlucHV0KTtcclxuICB9IGVsc2UgaWYgKGlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgY29uZmlnRnJvbVN0cmluZyhjb25maWcpO1xyXG4gIH0gZWxzZSBpZiAoaXNBcnJheTxzdHJpbmcgfCBudW1iZXI+KGlucHV0KSAmJiBpbnB1dC5sZW5ndGgpIHtcclxuICAgIGNvbnN0IF9hcnI6IChzdHJpbmcgfCBudW1iZXIpW10gPSBpbnB1dC5zbGljZSgwKTtcclxuICAgIGNvbmZpZy5fYSA9IF9hcnIubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xyXG4gICAgY29uZmlnRnJvbUFycmF5KGNvbmZpZyk7XHJcbiAgfSBlbHNlIGlmIChpc09iamVjdChpbnB1dCkpIHtcclxuICAgIGNvbmZpZ0Zyb21PYmplY3QoY29uZmlnKTtcclxuICB9IGVsc2UgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xyXG4gICAgLy8gZnJvbSBtaWxsaXNlY29uZHNcclxuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKGlucHV0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gICBob29rcy5jcmVhdGVGcm9tSW5wdXRGYWxsYmFjayhjb25maWcpO1xyXG4gICAgcmV0dXJuIGNyZWF0ZUludmFsaWQoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb2NhbE9yVVRDKGlucHV0OiBEYXRlSW5wdXQsIGZvcm1hdD86IHN0cmluZyB8IHN0cmluZ1tdLCBsb2NhbGVLZXk/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBjb25zdCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge307XHJcbiAgbGV0IF9pbnB1dCA9IGlucHV0O1xyXG5cclxuICAvLyBwYXJhbXMgc3dpdGNoIC0+IHNraXA7IHRlc3QgaXQgd2VsbFxyXG4gIC8vIGlmIChsb2NhbGVLZXkgPT09IHRydWUgfHwgbG9jYWxlS2V5ID09PSBmYWxzZSkge1xyXG4gIC8vICAgICBzdHJpY3QgPSBsb2NhbGVLZXk7XHJcbiAgLy8gICAgIGxvY2FsZUtleSA9IHVuZGVmaW5lZDtcclxuICAvLyB9XHJcblxyXG4gIC8vIHRvZG86IGZhaWwgZmFzdCBhbmQgcmV0dXJuIG5vdCB2YWxpZCBkYXRlXHJcbiAgaWYgKChpc09iamVjdChfaW5wdXQpICYmIGlzT2JqZWN0RW1wdHkoX2lucHV0KSkgfHwgKGlzQXJyYXkoX2lucHV0KSAmJiBfaW5wdXQubGVuZ3RoID09PSAwKSkge1xyXG4gICAgX2lucHV0ID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuICAvLyBvYmplY3QgY29uc3RydWN0aW9uIG11c3QgYmUgZG9uZSB0aGlzIHdheS5cclxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMTQyM1xyXG4gIC8vIGNvbmZpZy5faXNBTW9tZW50T2JqZWN0ID0gdHJ1ZTtcclxuICBjb25maWcuX3VzZVVUQyA9IGNvbmZpZy5faXNVVEMgPSBpc1VUQztcclxuICBjb25maWcuX2wgPSBsb2NhbGVLZXk7XHJcbiAgY29uZmlnLl9pID0gX2lucHV0O1xyXG4gIGNvbmZpZy5fZiA9IGZvcm1hdDtcclxuICBjb25maWcuX3N0cmljdCA9IHN0cmljdDtcclxuXHJcbiAgcmV0dXJuIGNyZWF0ZUZyb21Db25maWcoY29uZmlnKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVMb2NhbE9yVVRDIH0gZnJvbSAnLi9mcm9tLWFueXRoaW5nJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlT2JqZWN0IH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcclxuaW1wb3J0IHsgaXNEYXRlIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRGF0ZShpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVLZXk/OiBzdHJpbmcsIHN0cmljdD86IGJvb2xlYW4sIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGlmIChpc0RhdGUoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gaW5wdXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBjb25maWcgPSBjcmVhdGVMb2NhbE9yVVRDKGlucHV0LCBmb3JtYXQsIGxvY2FsZUtleSwgc3RyaWN0LCBpc1VUQyk7XHJcblxyXG4gIHJldHVybiBjb25maWcuX2Q7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFic1JvdW5kKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gbnVtIDwgMCA/IE1hdGgucm91bmQobnVtICogLTEpICogLTEgOiBNYXRoLnJvdW5kKG51bSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgZW5kT2YsIHN0YXJ0T2YgfSBmcm9tICcuL3N0YXJ0LWVuZC1vZic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBZnRlcihcclxuICBkYXRlMTogRGF0ZSxcclxuICBkYXRlMjogRGF0ZSxcclxuICB1bml0czogVW5pdE9mVGltZSA9ICdtaWxsaXNlY29uZHMnXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZHMnKSB7XHJcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpID4gZGF0ZTIudmFsdWVPZigpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGUyLnZhbHVlT2YoKSA8IHN0YXJ0T2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0JlZm9yZShcclxuICBkYXRlMTogRGF0ZSxcclxuICBkYXRlMjogRGF0ZSxcclxuICB1bml0czogVW5pdE9mVGltZSA9ICdtaWxsaXNlY29uZHMnXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghZGF0ZTEgfHwgIWRhdGUyKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAodW5pdHMgPT09ICdtaWxsaXNlY29uZHMnKSB7XHJcbiAgICByZXR1cm4gZGF0ZTEudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGVuZE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpIDwgZGF0ZTIudmFsdWVPZigpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEaXNhYmxlZERheShkYXRlOiBEYXRlLCBkYXlzRGlzYWJsZWQ6IG51bWJlcltdKTogYm9vbGVhbiB7XHJcbiAgaWYgKGRheXNEaXNhYmxlZCA9PT0gdW5kZWZpbmVkIHx8ICFkYXlzRGlzYWJsZWQgfHwgIWRheXNEaXNhYmxlZC5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBkYXlzRGlzYWJsZWQuc29tZSgoZGF5OiBudW1iZXIpID0+IGRheSA9PT0gZGF0ZS5nZXREYXkoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4oXHJcbiAgZGF0ZTogRGF0ZSxcclxuICBmcm9tOiBEYXRlLFxyXG4gIHRvOiBEYXRlLFxyXG4gIHVuaXRzOiBVbml0T2ZUaW1lLFxyXG4gIGluY2x1c2l2aXR5ID0gJygpJ1xyXG4pOiBib29sZWFuIHtcclxuICBjb25zdCBsZWZ0Qm91bmQgPVxyXG4gICAgaW5jbHVzaXZpdHlbMF0gPT09ICcoJ1xyXG4gICAgICA/IGlzQWZ0ZXIoZGF0ZSwgZnJvbSwgdW5pdHMpXHJcbiAgICAgIDogIWlzQmVmb3JlKGRhdGUsIGZyb20sIHVuaXRzKTtcclxuICBjb25zdCByaWdodEJvdW5kID1cclxuICAgIGluY2x1c2l2aXR5WzFdID09PSAnKSdcclxuICAgICAgPyBpc0JlZm9yZShkYXRlLCB0bywgdW5pdHMpXHJcbiAgICAgIDogIWlzQWZ0ZXIoZGF0ZSwgdG8sIHVuaXRzKTtcclxuXHJcbiAgcmV0dXJuIGxlZnRCb3VuZCAmJiByaWdodEJvdW5kO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lKFxyXG4gIGRhdGUxOiBEYXRlLFxyXG4gIGRhdGUyOiBEYXRlLFxyXG4gIHVuaXRzOiBVbml0T2ZUaW1lID0gJ21pbGxpc2Vjb25kcydcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFkYXRlMSB8fCAhZGF0ZTIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh1bml0cyA9PT0gJ21pbGxpc2Vjb25kcycpIHtcclxuICAgIHJldHVybiBkYXRlMS52YWx1ZU9mKCkgPT09IGRhdGUyLnZhbHVlT2YoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0TXMgPSBkYXRlMi52YWx1ZU9mKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBzdGFydE9mKGRhdGUxLCB1bml0cykudmFsdWVPZigpIDw9IGlucHV0TXMgJiZcclxuICAgIGlucHV0TXMgPD0gZW5kT2YoZGF0ZTEsIHVuaXRzKS52YWx1ZU9mKClcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTYW1lRGF5KGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6Ym9vbGVhbntcclxuICByZXR1cm4gKGRhdGUxLmdldERheSgpID09IGRhdGUyLmdldERheSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQWZ0ZXIoXHJcbiAgZGF0ZTE6IERhdGUsXHJcbiAgZGF0ZTI6IERhdGUsXHJcbiAgdW5pdHM/OiBVbml0T2ZUaW1lXHJcbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiBpc1NhbWUoZGF0ZTEsIGRhdGUyLCB1bml0cykgfHwgaXNBZnRlcihkYXRlMSwgZGF0ZTIsIHVuaXRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2FtZU9yQmVmb3JlKFxyXG4gIGRhdGUxOiBEYXRlLFxyXG4gIGRhdGUyOiBEYXRlLFxyXG4gIHVuaXRzPzogVW5pdE9mVGltZVxyXG4pOiBib29sZWFuIHtcclxuICByZXR1cm4gaXNTYW1lKGRhdGUxLCBkYXRlMiwgdW5pdHMpIHx8IGlzQmVmb3JlKGRhdGUxLCBkYXRlMiwgdW5pdHMpO1xyXG59XHJcbiIsIi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxyXG5pbXBvcnQgeyBEdXJhdGlvbiwgaXNEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xyXG5pbXBvcnQgeyBpc0RhdGVWYWxpZCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XHJcbmltcG9ydCB7IGFic1JvdW5kIH0gZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcclxuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XHJcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1jb21wYXJlJztcclxuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XHJcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XHJcblxyXG5jb25zdCBhc3BOZXRSZWdleCA9IC9eKFxcLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xyXG5cclxuLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcclxuLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxyXG4vLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCBpc29SZWdleCA9IC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XHJcblxyXG5leHBvcnQgdHlwZSBEdXJhdGlvbklucHV0ID0gc3RyaW5nIHwgbnVtYmVyIHwgRHVyYXRpb24gfCBQYXJ0aWFsPERhdGVPYmplY3Q+IHwgeyBmcm9tOiBEYXRlOyB0bzogRGF0ZSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uKGlucHV0PzogRHVyYXRpb25JbnB1dCwga2V5Pzogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcclxuICBjb25zdCBkdXJhdGlvbiA9IGNvbnZlcnREdXJhdGlvbihpbnB1dCwga2V5KTtcclxuICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxyXG5cclxuICByZXR1cm4gbmV3IER1cmF0aW9uKGR1cmF0aW9uLCBjb25maWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24oaW5wdXQ6IGFueSwga2V5OiBzdHJpbmcpOiBQYXJ0aWFsPERhdGVPYmplY3Q+IHtcclxuICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgaWYgKGlucHV0ID09IG51bGwpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWlsbGlzZWNvbmRzOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxyXG4gICAgICBkYXk6IGlucHV0Ll9kYXlzLFxyXG4gICAgICBtb250aDogaW5wdXQuX21vbnRoc1xyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xyXG4gICAgLy8gZHVyYXRpb24gPSB7fTtcclxuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiBpbnB1dCB9IDogeyBtaWxsaXNlY29uZHM6IGlucHV0IH07XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICBsZXQgbWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KTtcclxuXHJcbiAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgY29uc3Qgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeWVhcjogMCxcclxuICAgICAgICBkYXk6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXHJcbiAgICAgICAgaG91cnM6IHRvSW50KG1hdGNoW0hPVVJdKSAqIHNpZ24sXHJcbiAgICAgICAgbWludXRlczogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxyXG4gICAgICAgIHNlY29uZHM6IHRvSW50KG1hdGNoW1NFQ09ORF0pICogc2lnbixcclxuICAgICAgICAvLyB0aGUgbWlsbGlzZWNvbmQgZGVjaW1hbCBwb2ludCBpcyBpbmNsdWRlZCBpbiB0aGUgbWF0Y2hcclxuICAgICAgICBtaWxsaXNlY29uZHM6IHRvSW50KGFic1JvdW5kKHRvSW50KG1hdGNoW01JTExJU0VDT05EXSkgKiAxMDAwKSkgKiBzaWduXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KTtcclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAobWF0Y2hbMV0gPT09ICcrJykgPyAxIDogMTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeWVhcjogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxyXG4gICAgICAgIG1vbnRoOiBwYXJzZUlzbyhtYXRjaFszXSwgc2lnbiksXHJcbiAgICAgICAgd2VlazogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxyXG4gICAgICAgIGRheTogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxyXG4gICAgICAgIGhvdXJzOiBwYXJzZUlzbyhtYXRjaFs2XSwgc2lnbiksXHJcbiAgICAgICAgbWludXRlczogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxyXG4gICAgICAgIHNlY29uZHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdDx7ZnJvbTogYW55OyB0bzogYW55fT4oaW5wdXQpICYmICgnZnJvbScgaW4gaW5wdXQgfHwgJ3RvJyBpbiBpbnB1dCkpIHtcclxuICAgIGNvbnN0IGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShwYXJzZURhdGUoaW5wdXQuZnJvbSksIHBhcnNlRGF0ZShpbnB1dC50bykpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pbGxpc2Vjb25kczogZGlmZlJlcy5taWxsaXNlY29uZHMsXHJcbiAgICAgIG1vbnRoOiBkaWZmUmVzLm1vbnRoc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnB1dDtcclxufVxyXG5cclxuLy8gY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XHJcbi8vIGNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBpbnZhbGlkO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VJc28oaW5wOiBzdHJpbmcsIHNpZ246IG51bWJlcik6IG51bWJlciB7XHJcbiAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cclxuICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cclxuICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXHJcbiAgY29uc3QgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XHJcblxyXG4gIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xyXG4gIGNvbnN0IHJlcyA9IHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcclxuXHJcbiAgcmVzLm1vbnRocyA9IGdldE1vbnRoKG90aGVyKSAtIGdldE1vbnRoKGJhc2UpICtcclxuICAgIChnZXRGdWxsWWVhcihvdGhlcikgLSBnZXRGdWxsWWVhcihiYXNlKSkgKiAxMjtcclxuICBjb25zdCBfYmFzZVBsdXMgPSBhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKTtcclxuICBpZiAoaXNBZnRlcihfYmFzZVBsdXMsIG90aGVyKSkge1xyXG4gICAgLS1yZXMubW9udGhzO1xyXG4gIH1cclxuXHJcbiAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICsoYWRkKGNsb25lRGF0ZShiYXNlKSwgcmVzLm1vbnRocywgJ21vbnRoJykpO1xyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xyXG4gIGlmICghKGlzRGF0ZVZhbGlkKGJhc2UpICYmIGlzRGF0ZVZhbGlkKG90aGVyKSkpIHtcclxuICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzO1xyXG4gIGNvbnN0IF9vdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSwge19vZmZzZXQ6IGJhc2UuZ2V0VGltZXpvbmVPZmZzZXQoKX0pO1xyXG4gIGlmIChpc0JlZm9yZShiYXNlLCBfb3RoZXIpKSB7XHJcbiAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIF9vdGhlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoX290aGVyLCBiYXNlKTtcclxuICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcclxuICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xyXG5pbXBvcnQgeyBhYnNSb3VuZCB9IGZyb20gJy4uL3V0aWxzL2Ficy1yb3VuZCc7XHJcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY29uc3RydWN0b3InO1xyXG5pbXBvcnQgeyBnZXREYXRlLCBnZXRNb250aCwgZ2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IHNldERhdGUsIHNldE1vbnRoLCBzZXRUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcclxuaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGQoZGF0ZTogRGF0ZSwgdmFsOiBudW1iZXIsIHBlcmlvZDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgY29uc3QgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xyXG5cclxuICByZXR1cm4gYWRkU3VidHJhY3QoZGF0ZSwgZHVyLCAxLCBpc1VUQyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChkYXRlOiBEYXRlLCB2YWw6IG51bWJlciwgcGVyaW9kOiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBjb25zdCBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XHJcblxyXG4gIHJldHVybiBhZGRTdWJ0cmFjdChkYXRlLCBkdXIsIC0xLCBpc1VUQyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0cmFjdChkYXRlOiBEYXRlLCBkdXJhdGlvbjogRHVyYXRpb24sIGlzQWRkaW5nOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHM7XHJcbiAgY29uc3QgZGF5cyA9IGFic1JvdW5kKGR1cmF0aW9uLl9kYXlzKTtcclxuICBjb25zdCBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcclxuXHJcbiAgLy8gdG9kbzogYWRkIHRpbWV6b25lcyBzdXBwb3J0XHJcbiAgLy8gY29uc3QgX3VwZGF0ZU9mZnNldCA9IHVwZGF0ZU9mZnNldCA9PSBudWxsID8gdHJ1ZSA6IHVwZGF0ZU9mZnNldDtcclxuXHJcbiAgaWYgKG1vbnRocykge1xyXG4gICAgc2V0TW9udGgoZGF0ZSwgZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICsgbW9udGhzICogaXNBZGRpbmcsIGlzVVRDKTtcclxuICB9XHJcbiAgaWYgKGRheXMpIHtcclxuICAgIHNldERhdGUoZGF0ZSwgZ2V0RGF0ZShkYXRlLCBpc1VUQykgKyBkYXlzICogaXNBZGRpbmcsIGlzVVRDKTtcclxuICB9XHJcbiAgaWYgKG1pbGxpc2Vjb25kcykge1xyXG4gICAgc2V0VGltZShkYXRlLCBnZXRUaW1lKGRhdGUpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNsb25lRGF0ZShkYXRlKTtcclxuICAvLyB0b2RvOiBhZGQgdGltZXpvbmVzIHN1cHBvcnRcclxuICAvLyBpZiAoX3VwZGF0ZU9mZnNldCkge1xyXG4gIC8vICAgaG9va3MudXBkYXRlT2Zmc2V0KGRhdGUsIGRheXMgfHwgbW9udGhzKTtcclxuICAvLyB9XHJcbn1cclxuIiwiaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IGFkZFJlZ2V4VG9rZW4sIG1hdGNoMXRvMiB9IGZyb20gJy4uL3BhcnNlL3JlZ2V4JztcclxuaW1wb3J0IHsgYWRkVW5pdEFsaWFzIH0gZnJvbSAnLi9hbGlhc2VzJztcclxuaW1wb3J0IHsgYWRkVW5pdFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0aWVzJztcclxuaW1wb3J0IHsgYWRkV2Vla1BhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLWZsYWdzJztcclxuaW1wb3J0IHsgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XHJcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGVzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERheU9mV2VlaygpIHtcclxuLy8gRk9STUFUVElOR1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignZCcsIG51bGwsICdkbycsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBnZXREYXkoZGF0ZSwgb3B0cy5pc1VUQylcclxuICAgICAgICAudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdkZCcsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5c01pbihkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ2RkZCcsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5c1Nob3J0KGRhdGUsIG9wdHMuZm9ybWF0LCBvcHRzLmlzVVRDKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbignZGRkZCcsIG51bGwsIG51bGwsXHJcbiAgICBmdW5jdGlvbihkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS53ZWVrZGF5cyhkYXRlLCBvcHRzLmZvcm1hdCwgb3B0cy5pc1VUQyk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ2UnLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICAgIC8vIHJldHVybiBnZXREYXkoZGF0ZSwgb3B0cy5pc1VUQykudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4oJ0UnLCBudWxsLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0SVNPRGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpXHJcbiAgICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuLy8gQUxJQVNFU1xyXG5cclxuICBhZGRVbml0QWxpYXMoJ2RheScsICdkJyk7XHJcbiAgYWRkVW5pdEFsaWFzKCd3ZWVrZGF5JywgJ2UnKTtcclxuICBhZGRVbml0QWxpYXMoJ2lzb1dlZWtkYXknLCAnRScpO1xyXG5cclxuLy8gUFJJT1JJVFlcclxuICBhZGRVbml0UHJpb3JpdHkoJ2RheScsIDExKTtcclxuICBhZGRVbml0UHJpb3JpdHkoJ3dlZWtkYXknLCAxMSk7XHJcbiAgYWRkVW5pdFByaW9yaXR5KCdpc29XZWVrZGF5JywgMTEpO1xyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdkJywgbWF0Y2gxdG8yKTtcclxuICBhZGRSZWdleFRva2VuKCdlJywgbWF0Y2gxdG8yKTtcclxuICBhZGRSZWdleFRva2VuKCdFJywgbWF0Y2gxdG8yKTtcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignZGQnLCBmdW5jdGlvbihpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xyXG4gICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5c01pblJlZ2V4KGlzU3RyaWN0KTtcclxuICB9KTtcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignZGRkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcclxuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNTaG9ydFJlZ2V4KGlzU3RyaWN0KTtcclxuICB9KTtcclxuICBhZGRSZWdleFRva2VuKCdkZGRkJywgZnVuY3Rpb24oaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcclxuICAgIHJldHVybiBsb2NhbGUud2Vla2RheXNSZWdleChpc1N0cmljdCk7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxyXG4gICAgWydkZCcsICdkZGQnLCAnZGRkZCddLFxyXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuKSB7XHJcbiAgICAgIGNvbnN0IHdlZWtkYXkgPSBjb25maWcuX2xvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0LCB0b2tlbiwgY29uZmlnLl9zdHJpY3QpO1xyXG4gICAgICAvLyBpZiB3ZSBkaWRuJ3QgZ2V0IGEgd2Vla2RheSBuYW1lLCBtYXJrIHRoZSBkYXRlIGFzIGludmFsaWRcclxuICAgICAgaWYgKHdlZWtkYXkgIT0gbnVsbCkge1xyXG4gICAgICAgIHdlZWsuZCA9IHdlZWtkYXk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2V0UGFyc2luZ0ZsYWdzKGNvbmZpZykuaW52YWxpZFdlZWtkYXkgPSAhIWlucHV0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGFkZFdlZWtQYXJzZVRva2VuKFxyXG4gICAgWydkJywgJ2UnLCAnRSddLFxyXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgd2VlazogV2Vla1BhcnNpbmcsIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIHRva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICAgIHdlZWtbdG9rZW5dID0gdG9JbnQoaW5wdXQpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH1cclxuICApO1xyXG59XHJcblxyXG4vLyBIRUxQRVJTXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VXZWVrZGF5KGlucHV0OiBzdHJpbmcgfCBudW1iZXIsIGxvY2FsZTogTG9jYWxlKTogbnVtYmVyIHtcclxuICBpZiAoIWlzU3RyaW5nKGlucHV0KSkge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgX251bSA9IHBhcnNlSW50KGlucHV0LCAxMCk7XHJcbiAgaWYgKCFpc05hTihfbnVtKSkge1xyXG4gICAgcmV0dXJuIF9udW07XHJcbiAgfVxyXG5cclxuICBjb25zdCBfd2Vla0RheSA9IGxvY2FsZS53ZWVrZGF5c1BhcnNlKGlucHV0KTtcclxuICBpZiAoaXNOdW1iZXIoX3dlZWtEYXkpKSB7XHJcbiAgICByZXR1cm4gX3dlZWtEYXk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlSXNvV2Vla2RheShpbnB1dDogc3RyaW5nIHwgbnVtYmVyLCBsb2NhbGU6IExvY2FsZSA9IGdldExvY2FsZSgpKTogbnVtYmVyIHtcclxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICByZXR1cm4gbG9jYWxlLndlZWtkYXlzUGFyc2UoaW5wdXQpICUgNyB8fCA3O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlzTnVtYmVyKGlucHV0KSAmJiBpc05hTihpbnB1dCkgPyBudWxsIDogaW5wdXQ7XHJcbn1cclxuXHJcbi8vIE1PTUVOVFNcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXREYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgb3B0czogeyBpc1VUQz86IGJvb2xlYW47IGxvY2FsZTogTG9jYWxlIH0pOiBEYXRlIHwgbnVtYmVyIHtcclxuICBpZiAoIWlucHV0KSB7XHJcbiAgICByZXR1cm4gZ2V0RGF5T2ZXZWVrKGRhdGUsIG9wdHMuaXNVVEMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBpbnB1dCwgb3B0cy5sb2NhbGUsIG9wdHMuaXNVVEMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0RGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlucHV0OiBudW1iZXIsIGxvY2FsZSA9IGdldExvY2FsZSgpLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBjb25zdCBkYXkgPSBnZXREYXkoZGF0ZSwgaXNVVEMpO1xyXG4gIGNvbnN0IF9pbnB1dCA9IHBhcnNlV2Vla2RheShpbnB1dCwgbG9jYWxlKTtcclxuXHJcbiAgcmV0dXJuIGFkZChkYXRlLCBfaW5wdXQgLSBkYXksICdkYXknKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERheU9mV2VlayhkYXRlOiBEYXRlLCBpc1VUQz86IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gIHJldHVybiBnZXREYXkoZGF0ZSwgaXNVVEMpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4vLyB0b2RvOiB1dGNcclxuLy8gZ2V0U2V0TG9jYWxlRGF5T2ZXZWVrXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXlPZldlZWsoZGF0ZTogRGF0ZSwgbG9jYWxlID0gZ2V0TG9jYWxlKCksIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgcmV0dXJuIChnZXREYXkoZGF0ZSwgaXNVVEMpICsgNyAtIGxvY2FsZS5maXJzdERheU9mV2VlaygpKSAlIDc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRMb2NhbGVEYXlPZldlZWsoZGF0ZTogRGF0ZSwgaW5wdXQ6IG51bWJlciwgb3B0czogeyBsb2NhbGU/OiBMb2NhbGU7IGlzVVRDPzogYm9vbGVhbiB9ID0ge30pOiBEYXRlIHtcclxuICBjb25zdCB3ZWVrZGF5ID0gZ2V0TG9jYWxlRGF5T2ZXZWVrKGRhdGUsIG9wdHMubG9jYWxlLCBvcHRzLmlzVVRDKTtcclxuXHJcbiAgcmV0dXJuIGFkZChkYXRlLCBpbnB1dCAtIHdlZWtkYXksICdkYXknKTtcclxufVxyXG5cclxuXHJcbi8vIGdldFNldElTT0RheU9mV2Vla1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SVNPRGF5T2ZXZWVrKGRhdGU6IERhdGUsIGlzVVRDPzogYm9vbGVhbik6IG51bWJlciB7XHJcbiAgcmV0dXJuIGdldERheShkYXRlLCBpc1VUQykgfHwgNztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldElTT0RheU9mV2VlayhkYXRlOiBEYXRlLCBpbnB1dDogbnVtYmVyIHwgc3RyaW5nLCBvcHRzOiB7IGxvY2FsZT86IExvY2FsZSB9ID0ge30pOiBEYXRlIHtcclxuICAvLyBiZWhhdmVzIHRoZSBzYW1lIGFzIG1vbWVudCNkYXkgZXhjZXB0XHJcbiAgLy8gYXMgYSBnZXR0ZXIsIHJldHVybnMgNyBpbnN0ZWFkIG9mIDAgKDEtNyByYW5nZSBpbnN0ZWFkIG9mIDAtNilcclxuICAvLyBhcyBhIHNldHRlciwgc3VuZGF5IHNob3VsZCBiZWxvbmcgdG8gdGhlIHByZXZpb3VzIHdlZWsuXHJcblxyXG4gIGNvbnN0IHdlZWtkYXkgPSBwYXJzZUlzb1dlZWtkYXkoaW5wdXQsIG9wdHMubG9jYWxlKTtcclxuXHJcbiAgcmV0dXJuIHNldERheU9mV2VlayhkYXRlLCBnZXREYXlPZldlZWsoZGF0ZSkgJSA3ID8gd2Vla2RheSA6IHdlZWtkYXkgLSA3KTtcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogQXJhYmljIFthcl1cclxuLy8hIGF1dGhvciA6IEFiZGVsIFNhaWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9hYmRlbHNhaWRcclxuLy8hIGF1dGhvciA6IEFobWVkIEVsa2hhdGliXHJcbi8vISBhdXRob3IgOiBmb3JhYmkgaHR0cHM6Ly9naXRodWIuY29tL2ZvcmFiaVxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuY29uc3Qgc3ltYm9sTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAxOiAnw5nCoScsXHJcbiAgMjogJ8OZwqInLFxyXG4gIDM6ICfDmcKjJyxcclxuICA0OiAnw5nCpCcsXHJcbiAgNTogJ8OZwqUnLFxyXG4gIDY6ICfDmcKmJyxcclxuICA3OiAnw5nCpycsXHJcbiAgODogJ8OZwqgnLFxyXG4gIDk6ICfDmcKpJyxcclxuICAwOiAnw5nCoCdcclxufTtcclxuY29uc3QgbnVtYmVyTWFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAnw5nCoSc6ICcxJyxcclxuICAnw5nCoic6ICcyJyxcclxuICAnw5nCoyc6ICczJyxcclxuICAnw5nCpCc6ICc0JyxcclxuICAnw5nCpSc6ICc1JyxcclxuICAnw5nCpic6ICc2JyxcclxuICAnw5nCpyc6ICc3JyxcclxuICAnw5nCqCc6ICc4JyxcclxuICAnw5nCqSc6ICc5JyxcclxuICAnw5nCoCc6ICcwJ1xyXG59O1xyXG5jb25zdCBwbHVyYWxGb3JtID0gZnVuY3Rpb24gKG51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICByZXR1cm4gbnVtID09PSAwID8gMCA6IG51bSA9PT0gMSA/IDEgOiBudW0gPT09IDIgPyAyIDogbnVtICUgMTAwID49IDMgJiYgbnVtICUgMTAwIDw9IDEwID8gMyA6IG51bSAlIDEwMCA+PSAxMSA/IDQgOiA1O1xyXG59O1xyXG5jb25zdCBwbHVyYWxzOiB7W2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nLCBbc3RyaW5nLCBzdHJpbmddLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nXX0gPSB7XHJcbiAgczogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCq8OYwqfDmcKGw5nCisOYwqknLCAnw5jCq8OYwqfDmcKGw5nCisOYwqkgw5nCiMOYwqfDmMKtw5jCr8OYwqknLCBbJ8OYwqvDmMKnw5nChsOZworDmMKqw5jCp8OZwoYnLCAnw5jCq8OYwqfDmcKGw5nCisOYwqrDmcKKw5nChiddLCAnJWQgw5jCq8OZwojDmMKnw5nChicsICclZCDDmMKrw5jCp8OZwobDmcKKw5jCqScsICclZCDDmMKrw5jCp8OZwobDmcKKw5jCqSddLFxyXG4gIG06IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwq/DmcKCw5nCisOZwoLDmMKpJywgJ8OYwq/DmcKCw5nCisOZwoLDmMKpIMOZwojDmMKnw5jCrcOYwq/DmMKpJywgWyfDmMKvw5nCgsOZworDmcKCw5jCqsOYwqfDmcKGJywgJ8OYwq/DmcKCw5nCisOZwoLDmMKqw5nCisOZwoYnXSwgJyVkIMOYwq/DmcKCw5jCp8OYwqbDmcKCJywgJyVkIMOYwq/DmcKCw5nCisOZwoLDmMKpJywgJyVkIMOYwq/DmcKCw5nCisOZwoLDmMKpJ10sXHJcbiAgaDogWyfDmMKjw5nCgsOZwoQgw5nChcOZwoYgw5jCs8OYwqfDmMK5w5jCqScsICfDmMKzw5jCp8OYwrnDmMKpIMOZwojDmMKnw5jCrcOYwq/DmMKpJywgWyfDmMKzw5jCp8OYwrnDmMKqw5jCp8OZwoYnLCAnw5jCs8OYwqfDmMK5w5jCqsOZworDmcKGJ10sICclZCDDmMKzw5jCp8OYwrnDmMKnw5jCqicsICclZCDDmMKzw5jCp8OYwrnDmMKpJywgJyVkIMOYwrPDmMKnw5jCucOYwqknXSxcclxuICBkOiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmcKKw5nCiMOZwoUnLCAnw5nCisOZwojDmcKFIMOZwojDmMKnw5jCrcOYwq8nLCBbJ8OZworDmcKIw5nChcOYwqfDmcKGJywgJ8OZworDmcKIw5nChcOZworDmcKGJ10sICclZCDDmMKjw5nCisOYwqfDmcKFJywgJyVkIMOZworDmcKIw5nChcOZwovDmMKnJywgJyVkIMOZworDmcKIw5nChSddLFxyXG4gIE06IFsnw5jCo8OZwoLDmcKEIMOZwoXDmcKGIMOYwrTDmcKHw5jCsScsICfDmMK0w5nCh8OYwrEgw5nCiMOYwqfDmMKtw5jCrycsIFsnw5jCtMOZwofDmMKxw5jCp8OZwoYnLCAnw5jCtMOZwofDmMKxw5nCisOZwoYnXSwgJyVkIMOYwqPDmMK0w5nCh8OYwrEnLCAnJWQgw5jCtMOZwofDmMKxw5jCpycsICclZCDDmMK0w5nCh8OYwrEnXSxcclxuICB5OiBbJ8OYwqPDmcKCw5nChCDDmcKFw5nChiDDmMK5w5jCp8OZwoUnLCAnw5jCucOYwqfDmcKFIMOZwojDmMKnw5jCrcOYwq8nLCBbJ8OYwrnDmMKnw5nChcOYwqfDmcKGJywgJ8OYwrnDmMKnw5nChcOZworDmcKGJ10sICclZCDDmMKjw5jCucOZwojDmMKnw5nChScsICclZCDDmMK5w5jCp8OZwoXDmcKLw5jCpycsICclZCDDmMK5w5jCp8OZwoUnXVxyXG59O1xyXG5jb25zdCBwbHVyYWxpemUgPSBmdW5jdGlvbiAodTogc3RyaW5nKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgICBjb25zdCBmID0gcGx1cmFsRm9ybShudW0pO1xyXG4gICAgbGV0IHN0ciA9IHBsdXJhbHNbdV1bcGx1cmFsRm9ybShudW0pXTtcclxuICAgIGlmIChmID09PSAyKSB7XHJcbiAgICAgIHN0ciA9IHN0clt3aXRob3V0U3VmZml4ID8gMCA6IDFdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoc3RyIGFzIHN0cmluZykucmVwbGFjZSgvJWQvaSwgbnVtLnRvU3RyaW5nKCkpO1xyXG4gIH07XHJcbn07XHJcbmNvbnN0IG1vbnRoczogc3RyaW5nW10gPSBbXHJcbiAgJ8OZworDmcKGw5jCp8OZworDmMKxJyxcclxuICAnw5nCgcOYwqjDmMKxw5jCp8OZworDmMKxJyxcclxuICAnw5nChcOYwqfDmMKxw5jCsycsXHJcbiAgJ8OYwqPDmMKow5jCscOZworDmcKEJyxcclxuICAnw5nChcOYwqfDmcKKw5nCiCcsXHJcbiAgJ8OZworDmcKIw5nChsOZworDmcKIJyxcclxuICAnw5nCisOZwojDmcKEw5nCisOZwognLFxyXG4gICfDmMKjw5jCusOYwrPDmMK3w5jCsycsXHJcbiAgJ8OYwrPDmMKow5jCqsOZwoXDmMKow5jCsScsXHJcbiAgJ8OYwqPDmcKDw5jCqsOZwojDmMKow5jCsScsXHJcbiAgJ8OZwobDmcKIw5nCgcOZwoXDmMKow5jCsScsXHJcbiAgJ8OYwq/DmcKKw5jCs8OZwoXDmMKow5jCsSdcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBhckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnYXInLFxyXG4gIG1vbnRocyxcclxuICBtb250aHNTaG9ydDogbW9udGhzLFxyXG4gIHdlZWtkYXlzOiAnw5jCp8OZwoTDmMKjw5jCrcOYwq9fw5jCp8OZwoTDmMKlw5jCq8OZwobDmcKKw5nChl/DmMKnw5nChMOYwqvDmcKEw5jCp8OYwqvDmMKnw5jCoV/DmMKnw5nChMOYwqPDmMKxw5jCqMOYwrnDmMKnw5jCoV/DmMKnw5nChMOYwq7DmcKFw5nCisOYwrNfw5jCp8OZwoTDmMKsw5nChcOYwrnDmMKpX8OYwqfDmcKEw5jCs8OYwqjDmMKqJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfDmMKjw5jCrcOYwq9fw5jCpcOYwqvDmcKGw5nCisOZwoZfw5jCq8OZwoTDmMKnw5jCq8OYwqfDmMKhX8OYwqPDmMKxw5jCqMOYwrnDmMKnw5jCoV/DmMKuw5nChcOZworDmMKzX8OYwqzDmcKFw5jCucOYwqlfw5jCs8OYwqjDmMKqJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnw5jCrV/DmcKGX8OYwqtfw5jCsV/DmMKuX8OYwqxfw5jCsycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0QvXFx1MjAwRk0vXFx1MjAwRllZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBISDptbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/DmMK1fMOZwoUvLFxyXG4gIGlzUE0oaW5wdXQpIHtcclxuICAgIHJldHVybiAnw5nChScgPT09IGlucHV0O1xyXG4gIH0sXHJcbiAgbWVyaWRpZW0oaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHJldHVybiAnw5jCtSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ8OZwoUnO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbw5jCp8OZwoTDmcKKw5nCiMOZwoUgw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxyXG4gICAgbmV4dERheTogJ1vDmMK6w5jCr8OZwovDmMKnIMOYwrnDmcKGw5jCryDDmMKnw5nChMOYwrPDmMKnw5jCucOYwqldIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxyXG4gICAgbGFzdERheTogJ1vDmMKjw5nChcOYwrMgw5jCucOZwobDmMKvIMOYwqfDmcKEw5jCs8OYwqfDmMK5w5jCqV0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdkZGRkIFvDmMK5w5nChsOYwq8gw5jCp8OZwoTDmMKzw5jCp8OYwrnDmMKpXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ8OYwqjDmMK5w5jCryAlcycsXHJcbiAgICBwYXN0OiAnw5nChcOZwobDmMKwICVzJyxcclxuICAgIHM6IHBsdXJhbGl6ZSgncycpLFxyXG4gICAgc3M6IHBsdXJhbGl6ZSgncycpLFxyXG4gICAgbTogcGx1cmFsaXplKCdtJyksXHJcbiAgICBtbTogcGx1cmFsaXplKCdtJyksXHJcbiAgICBoOiBwbHVyYWxpemUoJ2gnKSxcclxuICAgIGhoOiBwbHVyYWxpemUoJ2gnKSxcclxuICAgIGQ6IHBsdXJhbGl6ZSgnZCcpLFxyXG4gICAgZGQ6IHBsdXJhbGl6ZSgnZCcpLFxyXG4gICAgTTogcGx1cmFsaXplKCdNJyksXHJcbiAgICBNTTogcGx1cmFsaXplKCdNJyksXHJcbiAgICB5OiBwbHVyYWxpemUoJ3knKSxcclxuICAgIHl5OiBwbHVyYWxpemUoJ3knKVxyXG4gIH0sXHJcbiAgcHJlcGFyc2Uoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bw5nCocOZwqLDmcKjw5nCpMOZwqXDmcKmw5nCp8OZwqjDmcKpw5nCoF0vZywgZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXJNYXBbbWF0Y2hdO1xyXG4gICAgfSkucmVwbGFjZSgvw5jCjC9nLCAnLCcpO1xyXG4gIH0sXHJcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXGQvZywgZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgIHJldHVybiBzeW1ib2xNYXBbbWF0Y2hdO1xyXG4gICAgfSkucmVwbGFjZSgvLC9nLCAnw5jCjCcpO1xyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiA2LCAvLyBTYXR1cmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiAxMiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBLaHJvbm9zIH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBCdWxnYXJpYW4gW2JnXVxyXG4vLyEgYXV0aG9yIDogSXNrcmVuIEl2b3YgQ2hlcm5ldiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9pY2hlcm5ldlxyXG4vLyEgYXV0aG9yIDogS3VuYWwgTWFyd2FoYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJ3YWhhaGFcclxuLy8hIGF1dGhvciA6IE1hdHQgR3JhbmRlIDogaHR0cHM6Ly9naXRodWIuY29tL21hdHRncmFuZGVcclxuLy8hIGF1dGhvciA6IElzYWFjIENhbWJyb24gOiBodHRwczovL2dpdGh1Yi5jb20vaWNhbWJyb25cclxuLy8hIGF1dGhvciA6IFZlbmVsaW4gTWFuY2hldiA6IGh0dHBzOi8vZ2l0aHViLmNvbS92bWFuY2hldlxyXG5cclxuZXhwb3J0IGNvbnN0IGJnTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdiZycsXHJcbiAgbW9udGhzOiAnw5HCj8OQwr3DkcKDw5DCsMORwoDDkMK4X8ORwoTDkMK1w5DCssORwoDDkcKDw5DCsMORwoDDkMK4X8OQwrzDkMKww5HCgMORwoJfw5DCsMOQwr/DkcKAw5DCuMOQwrtfw5DCvMOQwrDDkMK5X8ORwo7DkMK9w5DCuF/DkcKOw5DCu8OQwrhfw5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCX8ORwoHDkMK1w5DCv8ORwoLDkMK1w5DCvMOQwrLDkcKAw5DCuF/DkMK+w5DCusORwoLDkMK+w5DCvMOQwrLDkcKAw5DCuF/DkMK9w5DCvsOQwrXDkMK8w5DCssORwoDDkMK4X8OQwrTDkMK1w5DCusOQwrXDkMK8w5DCssORwoDDkMK4Jy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnw5HCj8OQwr3DkcKAX8ORwoTDkMK1w5DCsl/DkMK8w5DCsMORwoBfw5DCsMOQwr/DkcKAX8OQwrzDkMKww5DCuV/DkcKOw5DCvcOQwrhfw5HCjsOQwrvDkMK4X8OQwrDDkMKyw5DCs1/DkcKBw5DCtcOQwr9fw5DCvsOQwrrDkcKCX8OQwr3DkMK+w5DCtV/DkMK0w5DCtcOQwronLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICfDkMK9w5DCtcOQwrTDkMK1w5DCu8ORwo9fw5DCv8OQwr7DkMK9w5DCtcOQwrTDkMK1w5DCu8OQwr3DkMK4w5DCul/DkMKyw5HCgsOQwr7DkcKAw5DCvcOQwrjDkMK6X8ORwoHDkcKAw5HCj8OQwrTDkMKwX8ORwofDkMK1w5HCgsOQwrLDkcKKw5HCgMORwoLDkcKKw5DCul/DkMK/w5DCtcORwoLDkcKKw5DCul/DkcKBw5HCisOQwrHDkMK+w5HCgsOQwrAnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ8OQwr3DkMK1w5DCtF/DkMK/w5DCvsOQwr1fw5DCssORwoLDkMK+X8ORwoHDkcKAw5HCj1/DkcKHw5DCtcORwoJfw5DCv8OQwrXDkcKCX8ORwoHDkcKKw5DCsScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ8OQwr3DkMK0X8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnRC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBNTU1NIFlZWVkgSDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW8OQwpTDkMK9w5DCtcORwoEgw5DCsl0gTFQnLFxyXG4gICAgbmV4dERheTogJ1vDkMKjw5HCgsORwoDDkMK1IMOQwrJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbw5DCsl0gTFQnLFxyXG4gICAgbGFzdERheTogJ1vDkMKSw5HCh8OQwrXDkcKAw5DCsCDDkMKyXSBMVCcsXHJcbiAgICBsYXN0V2VlazogZnVuY3Rpb24gKGQ6IGFueSkge1xyXG5cclxuICAgICAgc3dpdGNoIChkKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwrjDkMK3w5DCvMOQwrjDkMK9w5DCsMOQwrvDkMKww5HCgsOQwrBdIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwrjDkMK3w5DCvMOQwrjDkMK9w5DCsMOQwrvDkMK4w5HCj10gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICfDkcKBw5DCu8OQwrXDkMK0ICVzJyxcclxuICAgIHBhc3Q6ICfDkMK/w5HCgMOQwrXDkMK0w5DCuCAlcycsXHJcbiAgICBzOiAnw5DCvcORwo/DkMK6w5DCvsOQwrvDkMK6w5DCviDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkMK4JyxcclxuICAgIHNzOiAnJWQgw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0w5DCuCcsXHJcbiAgICBtOiAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwJyxcclxuICAgIG1tOiAnJWQgw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMK4JyxcclxuICAgIGg6ICfDkcKHw5DCsMORwoEnLFxyXG4gICAgaGg6ICclZCDDkcKHw5DCsMORwoHDkMKwJyxcclxuICAgIGQ6ICfDkMK0w5DCtcOQwr0nLFxyXG4gICAgZGQ6ICclZCDDkMK0w5DCvcOQwrgnLFxyXG4gICAgTTogJ8OQwrzDkMK1w5HCgcOQwrXDkcKGJyxcclxuICAgIE1NOiAnJWQgw5DCvMOQwrXDkcKBw5DCtcORwobDkMKwJyxcclxuICAgIHk6ICfDkMKzw5DCvsOQwrTDkMK4w5DCvcOQwrAnLFxyXG4gICAgeXk6ICclZCDDkMKzw5DCvsOQwrTDkMK4w5DCvcOQwrgnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0tKMOQwrXDkMKyfMOQwrXDkMK9fMORwoLDkMK4fMOQwrLDkMK4fMORwoDDkMK4fMOQwrzDkMK4KS8sXHJcbiAgb3JkaW5hbDogZnVuY3Rpb24gKF9udW06IG51bWJlcik6IHN0cmluZyB7XHJcblxyXG4gICAgY29uc3QgbnVtYmVyID0gTnVtYmVyKF9udW0pO1xyXG5cclxuICAgIGxldCBsYXN0RGlnaXQgPSBudW1iZXIgJSAxMCxcclxuICAgICAgbGFzdDJEaWdpdHMgPSBudW1iZXIgJSAxMDA7XHJcblxyXG4gICAgaWYgKG51bWJlciA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkMK1w5DCsic7XHJcbiAgICB9IGVsc2UgaWYgKGxhc3QyRGlnaXRzID09PSAwKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrXDkMK9JztcclxuICAgIH0gZWxzZSBpZiAobGFzdDJEaWdpdHMgPiAxMCAmJiBsYXN0MkRpZ2l0cyA8IDIwKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcORwoLDkMK4JztcclxuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAxKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcOQwrLDkMK4JztcclxuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSAyKSB7XHJcbiAgICAgIHJldHVybiBudW1iZXIgKyAnLcORwoDDkMK4JztcclxuICAgIH0gZWxzZSBpZiAobGFzdERpZ2l0ID09PSA3IHx8IGxhc3REaWdpdCA9PT0gOCkge1xyXG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkMK8w5DCuCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVtYmVyICsgJy3DkcKCw5DCuCc7XHJcbiAgICB9XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA3ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBDYXRhbGFuIFtjYV1cclxuLy8hIGF1dGhvciA6IFhhdmllciBBcmJhdCA6IGh0dHBzOi8vZ2l0aHViLmNvbS9YYXZpc2F1cnVzUmV4XHJcblxyXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZ2VuLl9mZWIuX21hci5fYWJyLl9tYWkuX2p1bi5fanVsLl9hZ28uX3NldC5fb2N0Ll9ub3YuX2Rlcy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21haV9qdW5fanVsX2Fnb19zZXRfb2N0X25vdl9kZXMnLnNwbGl0KCdfJyk7XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL15nZW4vaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYWkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hZ28vaSwgL15zZXQvaSwgL15vY3QvaSwgL15ub3YvaSwgL15kZXMvaV07XHJcbmxldCBtb250aHNSZWdleCA9IC9eKGdlbmVyfGZlYnJlcnxtYXLDg8KnfGFicmlsfG1haWd8anVueXxqdWxpb2x8YWdvc3R8c2V0ZW1icmV8b2N0dWJyZXxub3ZlbWJyZXxkZXNlbWJyZXxnZW5cXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1haVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2V0XFwuP3xvY3RcXC4/fG5vdlxcLj98ZGVzXFwuPykvaTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnY2EnLFxyXG4gIG1vbnRoczogJ2dlbmVyX2ZlYnJlcl9tYXLDg8KnX2FicmlsX21haWdfanVueV9qdWxpb2xfYWdvc3Rfc2V0ZW1icmVfb2N0dWJyZV9ub3ZlbWJyZV9kZXNlbWJyZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgfSxcclxuICBtb250aHNSZWdleCxcclxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcclxuICBtb250aHNTdHJpY3RSZWdleDogL14oZ2VuZXJ8ZmVicmVyfG1hcsODwqd8YWJyaWx8bWFpZ3xqdW55fGp1bGlvbHxhZ29zdHxzZXRlbWJyZXxvY3R1YnJlfG5vdmVtYnJlfGRlc2VtYnJlKS9pLFxyXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKGdlblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG9jdFxcLj98bm92XFwuP3xkZXNcXC4/KS9pLFxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgd2Vla2RheXM6ICdkaXVtZW5nZV9kaWxsdW5zX2RpbWFydHNfZGltZWNyZXNfZGlqb3VzX2RpdmVuZHJlc19kaXNzYWJ0ZScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnZGl1Ll9kaWwuX2RpbS5fZGl4Ll9kaWouX2Rpdi5fZGlzLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ2RnX2RsX2R0X2RjX2RqX2R2X2RzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1thdnVpIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tkZW1hIGEgJyArICgnbGEnICsgKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdsZXMnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdkZGRkIFthICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbYWhpciBhICcgKyAoJ2xhJyArIChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAnbGVzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFsnICsgKCdwYXNzYWRhIGxhICcgKyAoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3Bhc3NhZGVzIGxlcycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdlbiAlcycsXHJcbiAgICBwYXN0OiAnZmEgJXMnLFxyXG4gICAgczogJ3VucyBzZWdvbnMnLFxyXG4gICAgc3M6ICclZCBzZWdvbnMnLFxyXG4gICAgbTogJ3VuIG1pbnV0JyxcclxuICAgIG1tOiAnJWQgbWludXRzJyxcclxuICAgIGg6ICd1bmEgaG9yYScsXHJcbiAgICBoaDogJyVkIGhvcmVzJyxcclxuICAgIGQ6ICd1biBkaWEnLFxyXG4gICAgZGQ6ICclZCBkaWVzJyxcclxuICAgIE06ICd1biBtZXMnLFxyXG4gICAgTU06ICclZCBtZXNvcycsXHJcbiAgICB5OiAndW4gYW55JyxcclxuICAgIHl5OiAnJWQgYW55cydcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShlcnxvbnxlcnxydHzDg8KpKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgY29uc3Qgb3V0cHV0ID0gKG51bSA+IDQpID8gJ8ODwqknIDpcclxuICAgICAgICAobnVtID09PSAxIHx8IG51bSA9PT0gMykgPyAncicgOlxyXG4gICAgICAgICAgKG51bSA9PT0gMikgPyAnbicgOlxyXG4gICAgICAgICAgICAobnVtID09PSA0KSA/ICd0JyA6ICfDg8KpJztcclxuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEN6ZWNoIFtjc11cclxuLy8hIGF1dGhvciA6IHBldHJiZWxhIDogaHR0cHM6Ly9naXRodWIuY29tL3BldHJiZWxhXHJcblxyXG5jb25zdCBtb250aHM6IHN0cmluZ1tdID0gJ2xlZGVuX8ODwrpub3JfYsOFwpllemVuX2R1YmVuX2t2w4TCm3Rlbl/DhMKNZXJ2ZW5fw4TCjWVydmVuZWNfc3JwZW5fesODwqHDhcKZw4PCrV/DhcKZw4PCrWplbl9saXN0b3BhZF9wcm9zaW5lYycuc3BsaXQoJ18nKTtcclxuY29uc3QgbW9udGhzU2hvcnQ6IHN0cmluZ1tdID0gJ2xlZF/Dg8K6bm9fYsOFwpllX2R1Yl9rdsOEwptfw4TCjXZuX8OEwo12Y19zcnBfesODwqHDhcKZX8OFwpnDg8Ktal9saXNfcHJvJy5zcGxpdCgnXycpO1xyXG5cclxuZnVuY3Rpb24gcGx1cmFsKG51bTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChudW0gPiAxKSAmJiAobnVtIDwgNSkgJiYgKH5+KG51bSAvIDEwKSAhPT0gMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICBjb25zdCByZXN1bHQgPSBudW0gKyAnICc7XHJcblxyXG4gIHN3aXRjaCAoa2V5KSB7XHJcbiAgICBjYXNlICdzJzogIC8vIGEgZmV3IHNlY29uZHMgLyBpbiBhIGZldyBzZWNvbmRzIC8gYSBmZXcgc2Vjb25kcyBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdww4PCoXIgc2VrdW5kJyA6ICdww4PCoXIgc2VrdW5kYW1pJztcclxuICAgIGNhc2UgJ3NzJzogLy8gOSBzZWNvbmRzIC8gaW4gOSBzZWNvbmRzIC8gOSBzZWNvbmRzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnc2VrdW5keScgOiAnc2VrdW5kJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdzZWt1bmRhbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ20nOiAgLy8gYSBtaW51dGUgLyBpbiBhIG1pbnV0ZSAvIGEgbWludXRlIGFnb1xyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogKGlzRnV0dXJlID8gJ21pbnV0dScgOiAnbWludXRvdScpO1xyXG4gICAgY2FzZSAnbW0nOiAvLyA5IG1pbnV0ZXMgLyBpbiA5IG1pbnV0ZXMgLyA5IG1pbnV0ZXMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW51dHknIDogJ21pbnV0Jyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtaW51dGFtaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAnaCc6ICAvLyBhbiBob3VyIC8gaW4gYW4gaG91ciAvIGFuIGhvdXIgYWdvXHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2hvZGluYScgOiAoaXNGdXR1cmUgPyAnaG9kaW51JyA6ICdob2Rpbm91Jyk7XHJcbiAgICBjYXNlICdoaCc6IC8vIDkgaG91cnMgLyBpbiA5IGhvdXJzIC8gOSBob3VycyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2hvZGlueScgOiAnaG9kaW4nKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgICBjYXNlICdkJzogIC8vIGEgZGF5IC8gaW4gYSBkYXkgLyBhIGRheSBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdkZW4nIDogJ2RuZW0nO1xyXG4gICAgY2FzZSAnZGQnOiAvLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdkbnknIDogJ2Ruw4PCrScpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnZG55JztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgICBjYXNlICdNJzogIC8vIGEgbW9udGggLyBpbiBhIG1vbnRoIC8gYSBtb250aCBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdtw4TCm3PDg8KtYycgOiAnbcOEwptzw4PCrWNlbSc7XHJcbiAgICBjYXNlICdNTSc6IC8vIDkgbW9udGhzIC8gaW4gOSBtb250aHMgLyA5IG1vbnRocyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ23DhMKbc8ODwq1jZScgOiAnbcOEwptzw4PCrWPDhcKvJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtw4TCm3PDg8KtY2knO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ3knOiAgLy8gYSB5ZWFyIC8gaW4gYSB5ZWFyIC8gYSB5ZWFyIGFnb1xyXG4gICAgICByZXR1cm4gKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpID8gJ3JvaycgOiAncm9rZW0nO1xyXG4gICAgY2FzZSAneXknOiAvLyA5IHllYXJzIC8gaW4gOSB5ZWFycyAvIDkgeWVhcnMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdyb2t5JyA6ICdsZXQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2xldHknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnY3MnLFxyXG4gIG1vbnRocyxcclxuICBtb250aHNTaG9ydCxcclxuICBtb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHMsIG1vbnRoc1Nob3J0KSB7XHJcbiAgICBsZXQgaSwgX21vbnRoc1BhcnNlID0gW107XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAvLyB1c2UgY3VzdG9tIHBhcnNlciB0byBzb2x2ZSBwcm9ibGVtIHdpdGggSnVseSAow4TCjWVydmVuZWMpXHJcbiAgICAgIF9tb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzW2ldICsgJyR8XicgKyBtb250aHNTaG9ydFtpXSArICckJywgJ2knKTtcclxuICAgIH1cclxuICAgIHJldHVybiBfbW9udGhzUGFyc2U7XHJcbiAgfShtb250aHMsIG1vbnRoc1Nob3J0KSksXHJcbiAgc2hvcnRNb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHNTaG9ydCkge1xyXG4gICAgbGV0IGksIF9zaG9ydE1vbnRoc1BhcnNlID0gW107XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBfc2hvcnRNb250aHNQYXJzZVtpXSA9IG5ldyBSZWdFeHAoJ14nICsgbW9udGhzU2hvcnRbaV0gKyAnJCcsICdpJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX3Nob3J0TW9udGhzUGFyc2U7XHJcbiAgfShtb250aHNTaG9ydCkpLFxyXG4gIGxvbmdNb250aHNQYXJzZTogKGZ1bmN0aW9uIChtb250aHMpIHtcclxuICAgIGxldCBpLCBfbG9uZ01vbnRoc1BhcnNlID0gW107XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBfbG9uZ01vbnRoc1BhcnNlW2ldID0gbmV3IFJlZ0V4cCgnXicgKyBtb250aHNbaV0gKyAnJCcsICdpJyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX2xvbmdNb250aHNQYXJzZTtcclxuICB9KG1vbnRocykpLFxyXG4gIHdlZWtkYXlzOiAnbmVkw4TCm2xlX3BvbmTDhMKbbMODwq1fw4PCunRlcsODwr1fc3TDhcKZZWRhX8OEwo10dnJ0ZWtfcMODwqF0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICduZV9wb1/Dg8K6dF9zdF/DhMKNdF9ww4PCoV9zbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ25lX3BvX8ODwrp0X3N0X8OEwo10X3DDg8KhX3NvJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0g6bW0nLFxyXG4gICAgTFRTOiAnSDptbTpzcycsXHJcbiAgICBMOiAnREQuTU0uWVlZWScsXHJcbiAgICBMTDogJ0QuIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdELiBNTU1NIFlZWVkgSDptbScsXHJcbiAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgSDptbScsXHJcbiAgICBsOiAnRC4gTS4gWVlZWSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW2RuZXMgdl0gTFQnLFxyXG4gICAgbmV4dERheTogJ1t6w4PCrXRyYSB2XSBMVCcsXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2IG5lZMOEwptsaSB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHJldHVybiAnW3ZdIGRkZGQgW3ZdIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2ZSBzdMOFwpllZHUgdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIHJldHVybiAnW3ZlIMOEwo10dnJ0ZWsgdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiAnW3YgcMODwqF0ZWsgdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW3Ygc29ib3R1IHZdIExUJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhc3REYXk6ICdbdsOEwo1lcmEgdl0gTFQnLFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWxvdSBuZWTDhMKbbGkgdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwqldIGRkZGQgW3ZdIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bG91IHN0w4XCmWVkdSB2XSBMVCc7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCvV0gZGRkZCBbdl0gTFQnO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsb3Ugc29ib3R1IHZdIExUJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnemEgJXMnLFxyXG4gICAgcGFzdDogJ3DDhcKZZWQgJXMnLFxyXG4gICAgczogdHJhbnNsYXRlLFxyXG4gICAgc3M6IHRyYW5zbGF0ZSxcclxuICAgIG06IHRyYW5zbGF0ZSxcclxuICAgIG1tOiB0cmFuc2xhdGUsXHJcbiAgICBoOiB0cmFuc2xhdGUsXHJcbiAgICBoaDogdHJhbnNsYXRlLFxyXG4gICAgZDogdHJhbnNsYXRlLFxyXG4gICAgZGQ6IHRyYW5zbGF0ZSxcclxuICAgIE06IHRyYW5zbGF0ZSxcclxuICAgIE1NOiB0cmFuc2xhdGUsXHJcbiAgICB5OiB0cmFuc2xhdGUsXHJcbiAgICB5eTogdHJhbnNsYXRlXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn1cXC4vLFxyXG4gIG9yZGluYWw6ICclZC4nLFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogRGFuaXNoIChEZW5tYXJrKSBbZGFdXHJcbi8vISBhdXRob3IgOiBQZXIgSGFuc2VuIDogaHR0cHM6Ly9naXRodWIuY29tL3BlcmhwXHJcblxyXG5leHBvcnQgY29uc3QgZGFMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2RhJyxcclxuICBtb250aHMgOiAnSmFudWFyX0ZlYnJ1YXJfTWFydHNfQXByaWxfTWFqX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGVjZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgOiAnSmFuX0ZlYl9NYXJfQXByX01hal9KdW5fSnVsX0F1Z19TZXBfT2t0X05vdl9EZWMnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiAnU8ODwrhuZGFnX01hbmRhZ19UaXJzZGFnX09uc2RhZ19Ub3JzZGFnX0ZyZWRhZ19Mw4PCuHJkYWcnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICdTw4PCuG5fTWFuX1Rpcl9PbnNfVG9yX0ZyZV9Mw4PCuHInLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAnU8ODwrhfTWFfVGlfT25fVG9fRnJfTMODwrgnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICAgIExUIDogJ0hIOm1tJyxcclxuICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcclxuICAgICAgTCA6ICdERC9NTS9ZWVlZJyxcclxuICAgICAgTEwgOiAnRC4gTU1NTSBZWVlZJyxcclxuICAgICAgTExMIDogJ0QuIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICAgIExMTEwgOiAnZGRkZCBbZC5dIEQuIE1NTU0gWVlZWSBba2wuXSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgICBzYW1lRGF5IDogJ1tpIGRhZyBrbC5dIExUJyxcclxuICAgICAgbmV4dERheSA6ICdbaSBtb3JnZW4ga2wuXSBMVCcsXHJcbiAgICAgIG5leHRXZWVrIDogJ3DDg8KlIGRkZGQgW2tsLl0gTFQnLFxyXG4gICAgICBsYXN0RGF5IDogJ1tpIGfDg8KlciBrbC5dIExUJyxcclxuICAgICAgbGFzdFdlZWsgOiAnW2ldIGRkZGRbcyBrbC5dIExUJyxcclxuICAgICAgc2FtZUVsc2UgOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZSA6IHtcclxuICAgICAgZnV0dXJlIDogJ29tICVzJyxcclxuICAgICAgcGFzdCA6ICclcyBzaWRlbicsXHJcbiAgICAgIHMgOiAnZsODwqUgc2VrdW5kZXInLFxyXG4gICAgICBtIDogJ2V0IG1pbnV0JyxcclxuICAgICAgbW0gOiAnJWQgbWludXR0ZXInLFxyXG4gICAgICBoIDogJ2VuIHRpbWUnLFxyXG4gICAgICBoaCA6ICclZCB0aW1lcicsXHJcbiAgICAgIGQgOiAnZW4gZGFnJyxcclxuICAgICAgZGQgOiAnJWQgZGFnZScsXHJcbiAgICAgIE0gOiAnZW4gbcODwqVuZWQnLFxyXG4gICAgICBNTSA6ICclZCBtw4PCpW5lZGVyJyxcclxuICAgICAgeSA6ICdldCDDg8KlcicsXHJcbiAgICAgIHl5IDogJyVkIMODwqVyJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsIDogJyVkLicsXHJcbiAgd2VlayA6IHtcclxuICAgICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLWtleS1xdW90ZXNcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEdlcm1hbiBbZGVdXHJcbi8vISBhdXRob3IgOiBsbHVjaHMgOiBodHRwczovL2dpdGh1Yi5jb20vbGx1Y2hzXHJcbi8vISBhdXRob3I6IE1lbmVsaW9uIEVsZW5zw4PCumxlOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxyXG4vLyEgYXV0aG9yIDogTWlrb2xhaiBEYWRlbGEgOiBodHRwczovL2dpdGh1Yi5jb20vbWlrMDFhalxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc1JlbGF0aXZlVGltZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICBjb25zdCBmb3JtYXQ6IHsgW2tleTogc3RyaW5nXTogW3N0cmluZywgc3RyaW5nXSB9ID0ge1xyXG4gICAgJ20nOiBbJ2VpbmUgTWludXRlJywgJ2VpbmVyIE1pbnV0ZSddLFxyXG4gICAgJ2gnOiBbJ2VpbmUgU3R1bmRlJywgJ2VpbmVyIFN0dW5kZSddLFxyXG4gICAgJ2QnOiBbJ2VpbiBUYWcnLCAnZWluZW0gVGFnJ10sXHJcbiAgICAnZGQnOiBbbnVtICsgJyBUYWdlJywgbnVtICsgJyBUYWdlbiddLFxyXG4gICAgJ00nOiBbJ2VpbiBNb25hdCcsICdlaW5lbSBNb25hdCddLFxyXG4gICAgJ01NJzogW251bSArICcgTW9uYXRlJywgbnVtICsgJyBNb25hdGVuJ10sXHJcbiAgICAneSc6IFsnZWluIEphaHInLCAnZWluZW0gSmFociddLFxyXG4gICAgJ3l5JzogW251bSArICcgSmFocmUnLCBudW0gKyAnIEphaHJlbiddXHJcbiAgfTtcclxuICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/IGZvcm1hdFtrZXldWzBdIDogZm9ybWF0W2tleV1bMV07XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZGUnLFxyXG4gIG1vbnRoczogJ0phbnVhcl9GZWJydWFyX03Dg8KkcnpfQXByaWxfTWFpX0p1bmlfSnVsaV9BdWd1c3RfU2VwdGVtYmVyX09rdG9iZXJfTm92ZW1iZXJfRGV6ZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdKYW4uX0ZlYi5fTcODwqRyel9BcHIuX01haV9KdW5pX0p1bGlfQXVnLl9TZXAuX09rdC5fTm92Ll9EZXouJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgd2Vla2RheXM6ICdTb25udGFnX01vbnRhZ19EaWVuc3RhZ19NaXR0d29jaF9Eb25uZXJzdGFnX0ZyZWl0YWdfU2Ftc3RhZycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnU28uX01vLl9EaS5fTWkuX0RvLl9Gci5fU2EuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnU29fTW9fRGlfTWlfRG9fRnJfU2EnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRC4gTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbaGV1dGUgdW1dIExUIFtVaHJdJyxcclxuICAgIHNhbWVFbHNlOiAnTCcsXHJcbiAgICBuZXh0RGF5OiAnW21vcmdlbiB1bV0gTFQgW1Vocl0nLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFt1bV0gTFQgW1Vocl0nLFxyXG4gICAgbGFzdERheTogJ1tnZXN0ZXJuIHVtXSBMVCBbVWhyXScsXHJcbiAgICBsYXN0V2VlazogJ1tsZXR6dGVuXSBkZGRkIFt1bV0gTFQgW1Vocl0nXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2luICVzJyxcclxuICAgIHBhc3Q6ICd2b3IgJXMnLFxyXG4gICAgczogJ2VpbiBwYWFyIFNla3VuZGVuJyxcclxuICAgIHNzOiAnJWQgU2VrdW5kZW4nLFxyXG4gICAgbTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIG1tOiAnJWQgTWludXRlbicsXHJcbiAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgaGg6ICclZCBTdHVuZGVuJyxcclxuICAgIGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBkZDogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIE06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBNTTogcHJvY2Vzc1JlbGF0aXZlVGltZSxcclxuICAgIHk6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICB5eTogcHJvY2Vzc1JlbGF0aXZlVGltZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBFbmdsaXNoIChVbml0ZWQgS2luZ2RvbSkgW2VuLWdiXVxyXG4vLyEgYXV0aG9yIDogQ2hyaXMgR2VkcmltIDogaHR0cHM6Ly9naXRodWIuY29tL2NocmlzZ2VkcmltXHJcblxyXG5leHBvcnQgY29uc3QgZW5HYkxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZW4tZ2InLFxyXG4gIG1vbnRocyA6ICdKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0IDogJ0phbl9GZWJfTWFyX0Fwcl9NYXlfSnVuX0p1bF9BdWdfU2VwX09jdF9Ob3ZfRGVjJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzIDogJ1N1bmRheV9Nb25kYXlfVHVlc2RheV9XZWRuZXNkYXlfVGh1cnNkYXlfRnJpZGF5X1NhdHVyZGF5Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAnU3VuX01vbl9UdWVfV2VkX1RodV9GcmlfU2F0Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ1N1X01vX1R1X1dlX1RoX0ZyX1NhJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xyXG4gICAgTFQgOiAnSEg6bW0nLFxyXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcclxuICAgIEwgOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTCA6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgc2FtZURheSA6ICdbVG9kYXkgYXRdIExUJyxcclxuICAgIG5leHREYXkgOiAnW1RvbW9ycm93IGF0XSBMVCcsXHJcbiAgICBuZXh0V2VlayA6ICdkZGRkIFthdF0gTFQnLFxyXG4gICAgbGFzdERheSA6ICdbWWVzdGVyZGF5IGF0XSBMVCcsXHJcbiAgICBsYXN0V2VlayA6ICdbTGFzdF0gZGRkZCBbYXRdIExUJyxcclxuICAgIHNhbWVFbHNlIDogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnaW4gJXMnLFxyXG4gICAgcGFzdCA6ICclcyBhZ28nLFxyXG4gICAgcyA6ICdhIGZldyBzZWNvbmRzJyxcclxuICAgIHNzIDogJyVkIHNlY29uZHMnLFxyXG4gICAgbSA6ICdhIG1pbnV0ZScsXHJcbiAgICBtbSA6ICclZCBtaW51dGVzJyxcclxuICAgIGggOiAnYW4gaG91cicsXHJcbiAgICBoaCA6ICclZCBob3VycycsXHJcbiAgICBkIDogJ2EgZGF5JyxcclxuICAgIGRkIDogJyVkIGRheXMnLFxyXG4gICAgTSA6ICdhIG1vbnRoJyxcclxuICAgIE1NIDogJyVkIG1vbnRocycsXHJcbiAgICB5IDogJ2EgeWVhcicsXHJcbiAgICB5eSA6ICclZCB5ZWFycydcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdHxuZHxyZHx0aCkvLFxyXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcclxuICAgIGNvbnN0IGIgPSBudW0gJSAxMCxcclxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAndGgnIDpcclxuICAgICAgICAoYiA9PT0gMSkgPyAnc3QnIDpcclxuICAgICAgICAgIChiID09PSAyKSA/ICduZCcgOlxyXG4gICAgICAgICAgICAoYiA9PT0gMykgPyAncmQnIDogJ3RoJztcclxuICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XHJcbiAgfSxcclxuICB3ZWVrIDoge1xyXG4gICAgZG93IDogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG5cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogU3BhbmlzaCAoRG9taW5pY2FuIFJlcHVibGljKSBbZXMtZG9dXHJcblxyXG5sZXQgbW9udGhzU2hvcnREb3QgPSAnZW5lLl9mZWIuX21hci5fYWJyLl9tYXkuX2p1bi5fanVsLl9hZ28uX3NlcC5fb2N0Ll9ub3YuX2RpYy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL15lbmUvaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hZ28vaSwgL15zZXAvaSwgL15vY3QvaSwgL15ub3YvaSwgL15kaWMvaV07XHJcbmxldCBtb250aHNSZWdleCA9IC9eKGVuZXJvfGZlYnJlcm98bWFyem98YWJyaWx8bWF5b3xqdW5pb3xqdWxpb3xhZ29zdG98c2VwdGllbWJyZXxvY3R1YnJlfG5vdmllbWJyZXxkaWNpZW1icmV8ZW5lXFwuP3xmZWJcXC4/fG1hclxcLj98YWJyXFwuP3xtYXlcXC4/fGp1blxcLj98anVsXFwuP3xhZ29cXC4/fHNlcFxcLj98b2N0XFwuP3xub3ZcXC4/fGRpY1xcLj8pL2k7XHJcblxyXG5leHBvcnQgY29uc3QgZXNEb0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZXMtZG8nLFxyXG4gIG1vbnRoczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XHJcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb250aHNSZWdleCxcclxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcclxuICBtb250aHNTdHJpY3RSZWdleDogL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZSkvaSxcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaSxcclxuICBtb250aHNQYXJzZSxcclxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDg8KpLl9qdWUuX3ZpZS5fc8ODwqFiLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDg8KhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdoOm1tIEEnLFxyXG4gICAgTFRTOiAnaDptbTpzcyBBJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcclxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBoOm1tIEEnLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBoOm1tIEEnXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdbaG95IGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdbbWHDg8KxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VuICVzJyxcclxuICAgIHBhc3Q6ICdoYWNlICVzJyxcclxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcclxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxyXG4gICAgaDogJ3VuYSBob3JhJyxcclxuICAgIGhoOiAnJWQgaG9yYXMnLFxyXG4gICAgZDogJ3VuIGTDg8KtYScsXHJcbiAgICBkZDogJyVkIGTDg8KtYXMnLFxyXG4gICAgTTogJ3VuIG1lcycsXHJcbiAgICBNTTogJyVkIG1lc2VzJyxcclxuICAgIHk6ICd1biBhw4PCsW8nLFxyXG4gICAgeXk6ICclZCBhw4PCsW9zJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXHJcbiAgb3JkaW5hbDogJyVkw4LCuicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogU3BhbmlzaCBbZXNdXHJcbi8vISBhdXRob3IgOiBKdWxpbyBOYXB1csODwq0gOiBodHRwczovL2dpdGh1Yi5jb20vanVsaW9uY1xyXG5cclxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2VuZS5fZmViLl9tYXIuX2Fici5fbWF5Ll9qdW4uX2p1bC5fYWdvLl9zZXAuX29jdC5fbm92Ll9kaWMuJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0ID0gJ2VuZV9mZWJfbWFyX2Ficl9tYXlfanVuX2p1bF9hZ29fc2VwX29jdF9ub3ZfZGljJy5zcGxpdCgnXycpO1xyXG5cclxubGV0IG1vbnRoc1BhcnNlID0gWy9eZW5lL2ksIC9eZmViL2ksIC9ebWFyL2ksIC9eYWJyL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYWdvL2ksIC9ec2VwL2ksIC9eb2N0L2ksIC9ebm92L2ksIC9eZGljL2ldO1xyXG5sZXQgbW9udGhzUmVnZXggPSAvXihlbmVyb3xmZWJyZXJvfG1hcnpvfGFicmlsfG1heW98anVuaW98anVsaW98YWdvc3RvfHNlcHRpZW1icmV8b2N0dWJyZXxub3ZpZW1icmV8ZGljaWVtYnJlfGVuZVxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWF5XFwuP3xqdW5cXC4/fGp1bFxcLj98YWdvXFwuP3xzZXBcXC4/fG9jdFxcLj98bm92XFwuP3xkaWNcXC4/KS9pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVzTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdlcycsXHJcbiAgbW9udGhzOiAnZW5lcm9fZmVicmVyb19tYXJ6b19hYnJpbF9tYXlvX2p1bmlvX2p1bGlvX2Fnb3N0b19zZXB0aWVtYnJlX29jdHVicmVfbm92aWVtYnJlX2RpY2llbWJyZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydChkYXRlOiBEYXRlLCBmb3JtYXQ6IHN0cmluZywgaXNVVEM/OiBib29sZWFuKTogc3RyaW5nIHwgc3RyaW5nW10ge1xyXG4gICAgaWYgKCFkYXRlKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydERvdDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgfSxcclxuICBtb250aHNSZWdleCxcclxuICBtb250aHNTaG9ydFJlZ2V4OiBtb250aHNSZWdleCxcclxuICBtb250aHNTdHJpY3RSZWdleDogL14oZW5lcm98ZmVicmVyb3xtYXJ6b3xhYnJpbHxtYXlvfGp1bmlvfGp1bGlvfGFnb3N0b3xzZXB0aWVtYnJlfG9jdHVicmV8bm92aWVtYnJlfGRpY2llbWJyZSkvaSxcclxuICBtb250aHNTaG9ydFN0cmljdFJlZ2V4OiAvXihlbmVcXC4/fGZlYlxcLj98bWFyXFwuP3xhYnJcXC4/fG1heVxcLj98anVuXFwuP3xqdWxcXC4/fGFnb1xcLj98c2VwXFwuP3xvY3RcXC4/fG5vdlxcLj98ZGljXFwuPykvaSxcclxuICBtb250aHNQYXJzZSxcclxuICBsb25nTW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG4gIHNob3J0TW9udGhzUGFyc2U6IG1vbnRoc1BhcnNlLFxyXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDg8KpLl9qdWUuX3ZpZS5fc8ODwqFiLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDg8KhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFtkZV0gTU1NTSBbZGVdIFlZWVknLFxyXG4gICAgTExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tob3kgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBuZXh0RGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbbWHDg8KxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ2RkZGQgW2EgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdERheShkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW2F5ZXIgYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VuICVzJyxcclxuICAgIHBhc3Q6ICdoYWNlICVzJyxcclxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcclxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxyXG4gICAgaDogJ3VuYSBob3JhJyxcclxuICAgIGhoOiAnJWQgaG9yYXMnLFxyXG4gICAgZDogJ3VuIGTDg8KtYScsXHJcbiAgICBkZDogJyVkIGTDg8KtYXMnLFxyXG4gICAgTTogJ3VuIG1lcycsXHJcbiAgICBNTTogJyVkIG1lc2VzJyxcclxuICAgIHk6ICd1biBhw4PCsW8nLFxyXG4gICAgeXk6ICclZCBhw4PCsW9zJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXHJcbiAgb3JkaW5hbDogJyVkw4LCuicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRIb3VycywgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogU3BhbmlzaCAoVW5pdGVkIFN0YXRlcykgW2VzLXVzXVxyXG4vLyEgYXV0aG9yIDogYnVzdHRhIDogaHR0cHM6Ly9naXRodWIuY29tL2J1c3R0YVxyXG5cclxubGV0IG1vbnRoc1Nob3J0RG90ID0gJ2VuZS5fZmViLl9tYXIuX2Fici5fbWF5Ll9qdW4uX2p1bC5fYWdvLl9zZXAuX29jdC5fbm92Ll9kaWMuJy5zcGxpdCgnXycpO1xyXG5sZXQgbW9udGhzU2hvcnQgPSAnZW5lX2ZlYl9tYXJfYWJyX21heV9qdW5fanVsX2Fnb19zZXBfb2N0X25vdl9kaWMnLnNwbGl0KCdfJyk7XHJcblxyXG5leHBvcnQgY29uc3QgZXNVc0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnZXMtdXMnLFxyXG4gIG1vbnRoczogJ2VuZXJvX2ZlYnJlcm9fbWFyem9fYWJyaWxfbWF5b19qdW5pb19qdWxpb19hZ29zdG9fc2VwdGllbWJyZV9vY3R1YnJlX25vdmllbWJyZV9kaWNpZW1icmUnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XHJcbiAgICB9IGVsc2UgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0RG90W2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnZG9taW5nb19sdW5lc19tYXJ0ZXNfbWnDg8KpcmNvbGVzX2p1ZXZlc192aWVybmVzX3PDg8KhYmFkbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnZG9tLl9sdW4uX21hci5fbWnDg8KpLl9qdWUuX3ZpZS5fc8ODwqFiLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ2RvX2x1X21hX21pX2p1X3ZpX3PDg8KhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdoOm1tIEEnLFxyXG4gICAgTFRTOiAnaDptbTpzcyBBJyxcclxuICAgIEw6ICdNTS9ERC9ZWVlZJyxcclxuICAgIExMOiAnTU1NTSBbZGVdIEQgW2RlXSBZWVlZJyxcclxuICAgIExMTDogJ01NTU0gW2RlXSBEIFtkZV0gWVlZWSBoOm1tIEEnLFxyXG4gICAgTExMTDogJ2RkZGQsIE1NTU0gW2RlXSBEIFtkZV0gWVlZWSBoOm1tIEEnXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdbaG95IGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dERheShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICdbbWHDg8KxYW5hIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbmV4dFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnZGRkZCBbYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBsYXN0RGF5KGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gJ1theWVyIGEgbGEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiAnW2VsXSBkZGRkIFtwYXNhZG8gYSBsYScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VuICVzJyxcclxuICAgIHBhc3Q6ICdoYWNlICVzJyxcclxuICAgIHM6ICd1bm9zIHNlZ3VuZG9zJyxcclxuICAgIHNzOiAnJWQgc2VndW5kb3MnLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0b3MnLFxyXG4gICAgaDogJ3VuYSBob3JhJyxcclxuICAgIGhoOiAnJWQgaG9yYXMnLFxyXG4gICAgZDogJ3VuIGTDg8KtYScsXHJcbiAgICBkZDogJyVkIGTDg8KtYXMnLFxyXG4gICAgTTogJ3VuIG1lcycsXHJcbiAgICBNTTogJyVkIG1lc2VzJyxcclxuICAgIHk6ICd1biBhw4PCsW8nLFxyXG4gICAgeXk6ICclZCBhw4PCsW9zJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXHJcbiAgb3JkaW5hbDogJyVkw4LCuicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAwLCAvLyBTdW5kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNiAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9ibG9iL2RldmVsb3AvbG9jYWxlL2ZpLmpzXHJcblxyXG52YXIgbnVtYmVyc1Bhc3QgPSAnbm9sbGEgeWtzaSBrYWtzaSBrb2xtZSBuZWxqw4PCpCB2aWlzaSBrdXVzaSBzZWl0c2Vtw4PCpG4ga2FoZGVrc2FuIHloZGVrc8ODwqRuJy5zcGxpdCgnICcpLFxyXG4gIG51bWJlcnNGdXR1cmUgPSBbXHJcbiAgICAnbm9sbGEnLCAneWhkZW4nLCAna2FoZGVuJywgJ2tvbG1lbicsICduZWxqw4PCpG4nLCAndmlpZGVuJywgJ2t1dWRlbicsXHJcbiAgICBudW1iZXJzUGFzdFs3XSwgbnVtYmVyc1Bhc3RbOF0sIG51bWJlcnNQYXN0WzldXHJcbiAgXTtcclxuXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOlxyXG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAnbXV1dGFtYW4gc2VrdW5uaW4nIDogJ211dXRhbWEgc2VrdW50aSc7XHJcbiAgICBjYXNlICdzcyc6XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdzZWt1bm5pbicgOiAnc2VrdW50aWEnO1xyXG4gICAgY2FzZSAnbSc6XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdtaW51dXRpbicgOiAnbWludXV0dGknO1xyXG4gICAgY2FzZSAnbW0nOlxyXG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICdtaW51dXRpbicgOiAnbWludXV0dGlhJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdoJzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3R1bm5pbicgOiAndHVudGknO1xyXG4gICAgY2FzZSAnaGgnOlxyXG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd0dW5uaW4nIDogJ3R1bnRpYSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnZCc6XHJcbiAgICAgIHJldHVybiBpc0Z1dHVyZSA/ICdww4PCpGl2w4PCpG4nIDogJ3DDg8KkaXbDg8KkJztcclxuICAgIGNhc2UgJ2RkJzpcclxuICAgICAgcmVzdWx0ID0gaXNGdXR1cmUgPyAncMODwqRpdsODwqRuJyA6ICdww4PCpGl2w4PCpMODwqQnO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ00nOlxyXG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAna3V1a2F1ZGVuJyA6ICdrdXVrYXVzaSc7XHJcbiAgICBjYXNlICdNTSc6XHJcbiAgICAgIHJlc3VsdCA9IGlzRnV0dXJlID8gJ2t1dWthdWRlbicgOiAna3V1a2F1dHRhJztcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICd5JzpcclxuICAgICAgcmV0dXJuIGlzRnV0dXJlID8gJ3Z1b2RlbicgOiAndnVvc2knO1xyXG4gICAgY2FzZSAneXknOlxyXG4gICAgICByZXN1bHQgPSBpc0Z1dHVyZSA/ICd2dW9kZW4nIDogJ3Z1b3R0YSc7XHJcbiAgICAgIGJyZWFrO1xyXG4gIH1cclxuICByZXN1bHQgPSB2ZXJiYWxOdW1iZXIobnVtLCBpc0Z1dHVyZSkgKyAnICcgKyByZXN1bHQ7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdmVyYmFsTnVtYmVyKG51bTogbnVtYmVyLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIHJldHVybiBudW0gPCAxMCA/IChpc0Z1dHVyZSA/IG51bWJlcnNGdXR1cmVbbnVtXSA6IG51bWJlcnNQYXN0W251bV0pIDogbnVtO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZmlMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2ZpJyxcclxuICBtb250aHM6ICd0YW1taWt1dV9oZWxtaWt1dV9tYWFsaXNrdXVfaHVodGlrdXVfdG91a29rdXVfa2Vzw4PCpGt1dV9oZWluw4PCpGt1dV9lbG9rdXVfc3l5c2t1dV9sb2tha3V1X21hcnJhc2t1dV9qb3VsdWt1dScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ3RhbW1pX2hlbG1pX21hYWxpc19odWh0aV90b3Vrb19rZXPDg8KkX2hlaW7Dg8KkX2Vsb19zeXlzX2xva2FfbWFycmFzX2pvdWx1Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnc3VubnVudGFpX21hYW5hbnRhaV90aWlzdGFpX2tlc2tpdmlpa2tvX3RvcnN0YWlfcGVyamFudGFpX2xhdWFudGFpJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdzdV9tYV90aV9rZV90b19wZV9sYScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ3N1X21hX3RpX2tlX3RvX3BlX2xhJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hILm1tJyxcclxuICAgIExUUzogJ0hILm1tLnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRG8gTU1NTVt0YV0gWVlZWScsXHJcbiAgICBMTEw6ICdEbyBNTU1NW3RhXSBZWVlZLCBba2xvXSBISC5tbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRG8gTU1NTVt0YV0gWVlZWSwgW2tsb10gSEgubW0nLFxyXG4gICAgbDogJ0QuTS5ZWVlZJyxcclxuICAgIGxsOiAnRG8gTU1NIFlZWVknLFxyXG4gICAgbGxsOiAnRG8gTU1NIFlZWVksIFtrbG9dIEhILm1tJyxcclxuICAgIGxsbGw6ICdkZGQsIERvIE1NTSBZWVlZLCBba2xvXSBISC5tbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW3TDg8KkbsODwqTDg8Kkbl0gW2tsb10gTFQnLFxyXG4gICAgbmV4dERheTogJ1todW9tZW5uYV0gW2tsb10gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtrbG9dIExUJyxcclxuICAgIGxhc3REYXk6ICdbZWlsZW5dIFtrbG9dIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW3ZpaW1lXSBkZGRkW25hXSBba2xvXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJyVzIHDDg8Kkw4PCpHN0w4PCpCcsXHJcbiAgICBwYXN0OiAnJXMgc2l0dGVuJyxcclxuICAgIHM6IHRyYW5zbGF0ZSxcclxuICAgIHNzOiB0cmFuc2xhdGUsXHJcbiAgICBtOiB0cmFuc2xhdGUsXHJcbiAgICBtbTogdHJhbnNsYXRlLFxyXG4gICAgaDogdHJhbnNsYXRlLFxyXG4gICAgaGg6IHRyYW5zbGF0ZSxcclxuICAgIGQ6IHRyYW5zbGF0ZSxcclxuICAgIGRkOiB0cmFuc2xhdGUsXHJcbiAgICBNOiB0cmFuc2xhdGUsXHJcbiAgICBNTTogdHJhbnNsYXRlLFxyXG4gICAgeTogdHJhbnNsYXRlLFxyXG4gICAgeXk6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBGcmVuY2ggW2ZyXVxyXG4vLyEgYXV0aG9yIDogSm9obiBGaXNjaGVyIDogaHR0cHM6Ly9naXRodWIuY29tL2pmcm9mZmljZVxyXG5cclxuZXhwb3J0IGNvbnN0IGZyTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdmcicsXHJcbiAgbW9udGhzOiAnamFudmllcl9mw4PCqXZyaWVyX21hcnNfYXZyaWxfbWFpX2p1aW5fanVpbGxldF9hb8ODwrt0X3NlcHRlbWJyZV9vY3RvYnJlX25vdmVtYnJlX2TDg8KpY2VtYnJlJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnamFudi5fZsODwql2ci5fbWFyc19hdnIuX21haV9qdWluX2p1aWwuX2Fvw4PCu3Rfc2VwdC5fb2N0Ll9ub3YuX2TDg8KpYy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ2RpbWFuY2hlX2x1bmRpX21hcmRpX21lcmNyZWRpX2pldWRpX3ZlbmRyZWRpX3NhbWVkaScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnZGltLl9sdW4uX21hci5fbWVyLl9qZXUuX3Zlbi5fc2FtLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ2RpX2x1X21hX21lX2plX3ZlX3NhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbQXVqb3VyZMOiwoDCmWh1aSDDg8KgXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW0RlbWFpbiDDg8KgXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW8ODwqBdIExUJyxcclxuICAgIGxhc3REYXk6ICdbSGllciDDg8KgXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ2RkZGQgW2Rlcm5pZXIgw4PCoF0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdkYW5zICVzJyxcclxuICAgIHBhc3Q6ICdpbCB5IGEgJXMnLFxyXG4gICAgczogJ3F1ZWxxdWVzIHNlY29uZGVzJyxcclxuICAgIHNzOiAnJWQgc2Vjb25kZXMnLFxyXG4gICAgbTogJ3VuZSBtaW51dGUnLFxyXG4gICAgbW06ICclZCBtaW51dGVzJyxcclxuICAgIGg6ICd1bmUgaGV1cmUnLFxyXG4gICAgaGg6ICclZCBoZXVyZXMnLFxyXG4gICAgZDogJ3VuIGpvdXInLFxyXG4gICAgZGQ6ICclZCBqb3VycycsXHJcbiAgICBNOiAndW4gbW9pcycsXHJcbiAgICBNTTogJyVkIG1vaXMnLFxyXG4gICAgeTogJ3VuIGFuJyxcclxuICAgIHl5OiAnJWQgYW5zJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KGVyfCkvLFxyXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2Q6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoX251bSk7XHJcbiAgICBzd2l0Y2ggKHBlcmlvZCkge1xyXG4gICAgICAvLyBUT0RPOiBSZXR1cm4gJ2UnIHdoZW4gZGF5IG9mIG1vbnRoID4gMS4gTW92ZSB0aGlzIGNhc2UgaW5zaWRlXHJcbiAgICAgIC8vIGJsb2NrIGZvciBtYXNjdWxpbmUgd29yZHMgYmVsb3cuXHJcbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMzM3NVxyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgKG51bSA9PT0gMSA/ICdlcicgOiAnJyk7XHJcblxyXG4gICAgICAvLyBXb3JkcyB3aXRoIG1hc2N1bGluZSBncmFtbWF0aWNhbCBnZW5kZXI6IG1vaXMsIHRyaW1lc3RyZSwgam91clxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICBjYXNlICdNJzpcclxuICAgICAgY2FzZSAnUSc6XHJcbiAgICAgIGNhc2UgJ0RERCc6XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAobnVtID09PSAxID8gJ2VyJyA6ICdlJyk7XHJcblxyXG4gICAgICAvLyBXb3JkcyB3aXRoIGZlbWluaW5lIGdyYW1tYXRpY2FsIGdlbmRlcjogc2VtYWluZVxyXG4gICAgICBjYXNlICd3JzpcclxuICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArIChudW0gPT09IDEgPyAncmUnIDogJ2UnKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldEhvdXJzLCBnZXRNb250aCB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBHYWxpY2lhbiBbZ2xdXHJcbi8vISBhdXRob3IgOiBEYXLDg8KtbyBCZWlyw4PCsyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9xdWlub2JyYXZvXHJcblxyXG5sZXQgbW9udGhzU2hvcnREb3QgPSAneGFuLl9mZWIuX21hci5fYWJyLl9tYWkuX3h1w4PCsS5feHVsLl9hZ28uX3NldC5fb3V0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgPSAneGFuX2ZlYl9tYXJfYWJyX21haV94dcODwrFfeHVsX2Fnb19zZXRfb3V0X25vdl9kZWMnLnNwbGl0KCdfJyk7XHJcblxyXG5sZXQgbW9udGhzUGFyc2UgPSBbL154YW4vaSwgL15mZWIvaSwgL15tYXIvaSwgL15hYnIvaSwgL15tYWkvaSwgL154dcODwrEvaSwgL154dWwvaSwgL15hZ28vaSwgL15zZXQvaSwgL15vdXQvaSwgL15ub3YvaSwgL15kZWMvaV07XHJcbmxldCBtb250aHNSZWdleCA9IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcODwrFvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvfHhhblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3x4dcODwrFcXC4/fHh1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG91dFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdnbCcsXHJcbiAgbW9udGhzOiAneGFuZWlyb19mZWJyZWlyb19tYXJ6b19hYnJpbF9tYWlvX3h1w4PCsW9feHVsbG9fYWdvc3RvX3NldGVtYnJvX291dHVicm9fbm92ZW1icm9fZGVjZW1icm8nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnREb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKC8tTU1NLS8udGVzdChmb3JtYXQpKSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBtb250aHNTaG9ydERvdFtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gIH0sXHJcbiAgbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKHhhbmVpcm98ZmVicmVpcm98bWFyem98YWJyaWx8bWFpb3x4dcODwrFvfHh1bGxvfGFnb3N0b3xzZXRlbWJyb3xvdXR1YnJvfG5vdmVtYnJvfGRlY2VtYnJvKS9pLFxyXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKHhhblxcLj98ZmViXFwuP3xtYXJcXC4/fGFiclxcLj98bWFpXFwuP3x4dcODwrFcXC4/fHh1bFxcLj98YWdvXFwuP3xzZXRcXC4/fG91dFxcLj98bm92XFwuP3xkZWNcXC4/KS9pLFxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgd2Vla2RheXM6ICdkb21pbmdvX2x1bnNfbWFydGVzX23Dg8KpcmNvcmVzX3hvdmVzX3ZlbnJlc19zw4PCoWJhZG8nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ2RvbS5fbHVuLl9tYXIuX23Dg8Kpci5feG92Ll92ZW4uX3PDg8KhYi4nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tw4PCqV94b192ZV9zw4PCoScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcclxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgSDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5KGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdbaG94ZSDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIG5leHREYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1ttYcODwrFhbiDDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuICdkZGRkIFvDg8KhJyArICgoZ2V0SG91cnMoZGF0ZSkgIT09IDEpID8gJ3MnIDogJycpICsgJ10gTFQnO1xyXG4gICAgfSxcclxuICAgIGxhc3REYXkoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tvbnRlIMODwqEnICsgKChnZXRIb3VycyhkYXRlKSAhPT0gMSkgPyAncycgOiAnJykgKyAnXSBMVCc7XHJcbiAgICB9LFxyXG4gICAgbGFzdFdlZWsoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gJ1tvXSBkZGRkIFtwYXNhZG8gw4PCoScgKyAoKGdldEhvdXJzKGRhdGUpICE9PSAxKSA/ICdzJyA6ICcnKSArICddIExUJztcclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ2VuICVzJyxcclxuICAgIHBhc3Q6ICdmYWkgJXMnLFxyXG4gICAgczogJ3VucyBzZWd1bmRvcycsXHJcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcclxuICAgIG06ICd1biBtaW51dG8nLFxyXG4gICAgbW06ICclZCBtaW51dG9zJyxcclxuICAgIGg6ICd1bmhhIGhvcmEnLFxyXG4gICAgaGg6ICclZCBob3JhcycsXHJcbiAgICBkOiAndW4gZMODwq1hJyxcclxuICAgIGRkOiAnJWQgZMODwq1hcycsXHJcbiAgICBNOiAndW4gbWVzJyxcclxuICAgIE1NOiAnJWQgbWVzZXMnLFxyXG4gICAgeTogJ3VuIGFubycsXHJcbiAgICB5eTogJyVkIGFub3MnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn3DgsK6LyxcclxuICBvcmRpbmFsOiAnJWTDgsK6JyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBIZWJyZXcgW2hlXVxyXG4vLyEgYXV0aG9yIDogVG9tZXIgQ29oZW4gOiBodHRwczovL2dpdGh1Yi5jb20vdG9tZXJcclxuLy8hIGF1dGhvciA6IE1vc2hlIFNpbWFudG92IDogaHR0cHM6Ly9naXRodWIuY29tL0RldmVsb3BtZW50SUxcclxuLy8hIGF1dGhvciA6IFRhbCBBdGVyIDogaHR0cHM6Ly9naXRodWIuY29tL1RhbEF0ZXJcclxuXHJcbmV4cG9ydCBjb25zdCBoZUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaGUnLFxyXG4gIG1vbnRoczogJ8OXwpnDl8Kgw5fClcOXwpDDl8KoX8OXwqTDl8KRw5fCqMOXwpXDl8KQw5fCqF/Dl8Kew5fCqMOXwqVfw5fCkMOXwqTDl8Kow5fCmcOXwpxfw5fCnsOXwpDDl8KZX8OXwpnDl8KVw5fCoMOXwplfw5fCmcOXwpXDl8Kcw5fCmV/Dl8KQw5fClcOXwpLDl8KVw5fCocOXwphfw5fCocOXwqTDl8KYw5fCnsOXwpHDl8KoX8OXwpDDl8KVw5fCp8OXwpjDl8KVw5fCkcOXwqhfw5fCoMOXwpXDl8KRw5fCnsOXwpHDl8KoX8OXwpPDl8Kmw5fCnsOXwpHDl8KoJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnw5fCmcOXwqDDl8KVw5fCs1/Dl8Kkw5fCkcOXwqjDl8KzX8OXwp7Dl8Kow5fCpV/Dl8KQw5fCpMOXwqjDl8KzX8OXwp7Dl8KQw5fCmV/Dl8KZw5fClcOXwqDDl8KZX8OXwpnDl8KVw5fCnMOXwplfw5fCkMOXwpXDl8KSw5fCs1/Dl8Khw5fCpMOXwpjDl8KzX8OXwpDDl8KVw5fCp8OXwrNfw5fCoMOXwpXDl8KRw5fCs1/Dl8KTw5fCpsOXwp7Dl8KzJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnw5fCqMOXwpDDl8Kpw5fClcOXwp9fw5fCqcOXwqDDl8KZX8OXwqnDl8Kcw5fCmcOXwqnDl8KZX8OXwqjDl8KRw5fCmcOXwqLDl8KZX8OXwpfDl8Kew5fCmcOXwqnDl8KZX8OXwqnDl8KZw5fCqcOXwplfw5fCqcOXwpHDl8KqJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfDl8KQw5fCs1/Dl8KRw5fCs1/Dl8KSw5fCs1/Dl8KTw5fCs1/Dl8KUw5fCs1/Dl8KVw5fCs1/Dl8Kpw5fCsycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ8OXwpBfw5fCkV/Dl8KSX8OXwpNfw5fClF/Dl8KVX8OXwqknLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ0REL01NL1lZWVknLFxyXG4gICAgTEw6ICdEIFvDl8KRXU1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIFvDl8KRXU1NTU0gWVlZWSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgRCBbw5fCkV1NTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgbDogJ0QvTS9ZWVlZJyxcclxuICAgIGxsOiAnRCBNTU0gWVlZWScsXHJcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcclxuICAgIGxsbGw6ICdkZGQsIEQgTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vDl8KUw5fCmcOXwpXDl8KdIMOXwpHDlsK+XUxUJyxcclxuICAgIG5leHREYXk6ICdbw5fCnsOXwpfDl8KoIMOXwpHDlsK+XUxUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCBbw5fCkcOXwqnDl8Kiw5fClF0gTFQnLFxyXG4gICAgbGFzdERheTogJ1vDl8KQw5fCqsOXwp7Dl8KVw5fCnCDDl8KRw5bCvl1MVCcsXHJcbiAgICBsYXN0V2VlazogJ1vDl8KRw5fCmcOXwpXDl8KdXSBkZGRkIFvDl8KUw5fCkMOXwpfDl8Kow5fClcOXwp8gw5fCkcOXwqnDl8Kiw5fClF0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICfDl8KRw5fCosOXwpXDl8KTICVzJyxcclxuICAgIHBhc3Q6ICfDl8Kcw5fCpMOXwqDDl8KZICVzJyxcclxuICAgIHM6ICfDl8Kew5fCocOXwqTDl8KoIMOXwqnDl8Kgw5fCmcOXwpXDl8KqJyxcclxuICAgIHNzOiAnJWQgw5fCqcOXwqDDl8KZw5fClcOXwqonLFxyXG4gICAgbTogJ8OXwpPDl8Knw5fClCcsXHJcbiAgICBtbTogJyVkIMOXwpPDl8Knw5fClcOXwqonLFxyXG4gICAgaDogJ8OXwqnDl8Kiw5fClCcsXHJcbiAgICBoaChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGlmIChudW0gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ8OXwqnDl8Kiw5fCqsOXwpnDl8KZw5fCnSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bSArICcgw5fCqcOXwqLDl8KVw5fCqic7XHJcbiAgICB9LFxyXG4gICAgZDogJ8OXwpnDl8KVw5fCnScsXHJcbiAgICBkZChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGlmIChudW0gPT09IDIpIHtcclxuICAgICAgICByZXR1cm4gJ8OXwpnDl8KVw5fCnsOXwpnDl8KZw5fCnSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bSArICcgw5fCmcOXwp7Dl8KZw5fCnSc7XHJcbiAgICB9LFxyXG4gICAgTTogJ8OXwpfDl8KVw5fCk8OXwqknLFxyXG4gICAgTU0obnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICBpZiAobnVtID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuICfDl8KXw5fClcOXwpPDl8Kpw5fCmcOXwpnDl8KdJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gbnVtICsgJyDDl8KXw5fClcOXwpPDl8Kpw5fCmcOXwp0nO1xyXG4gICAgfSxcclxuICAgIHk6ICfDl8Kpw5fCoMOXwpQnLFxyXG4gICAgeXkobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICBpZiAobnVtID09PSAyKSB7XHJcbiAgICAgICAgcmV0dXJuICfDl8Kpw5fCoMOXwqrDl8KZw5fCmcOXwp0nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bSAlIDEwID09PSAwICYmIG51bSAhPT0gMTApIHtcclxuICAgICAgICByZXR1cm4gbnVtICsgJyDDl8Kpw5fCoMOXwpQnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBudW0gKyAnIMOXwqnDl8Kgw5fCmcOXwp0nO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL8OXwpDDl8KXw5fClFwiw5fCpnzDl8Kcw5fCpMOXwqDDl8KUXCLDl8KmfMOXwpDDl8KXw5fCqMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnXzDl8Kcw5fCpMOXwqDDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp18w5fCnMOXwqTDl8Kgw5fClcOXwqogw5fCkcOXwpXDl8Knw5fCqHzDl8KRw5fCkcOXwpXDl8Knw5fCqHzDl8KRw5fCosOXwqjDl8KRL2ksXHJcbiAgaXNQTShpbnB1dCkge1xyXG4gICAgcmV0dXJuIC9eKMOXwpDDl8KXw5fClFwiw5fCpnzDl8KQw5fCl8OXwqjDl8KZIMOXwpTDl8Kmw5fClMOXwqjDl8KZw5fCmcOXwp18w5fCkcOXwqLDl8Kow5fCkSkkLy50ZXN0KGlucHV0KTtcclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCA1KSB7XHJcbiAgICAgIHJldHVybiAnw5fCnMOXwqTDl8Kgw5fClcOXwqogw5fCkcOXwpXDl8Knw5fCqCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xyXG4gICAgICByZXR1cm4gJ8OXwpHDl8KRw5fClcOXwqfDl8KoJztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHJldHVybiBpc0xvd2VyID8gJ8OXwpzDl8Kkw5fCoMOXwpRcIsOXwqYnIDogJ8OXwpzDl8Kkw5fCoMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnSc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxOCkge1xyXG4gICAgICByZXR1cm4gaXNMb3dlciA/ICfDl8KQw5fCl8OXwpRcIsOXwqYnIDogJ8OXwpDDl8KXw5fCqMOXwpkgw5fClMOXwqbDl8KUw5fCqMOXwpnDl8KZw5fCnSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ8OXwpHDl8Kiw5fCqMOXwpEnO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEhpbmRpIFtoaV1cclxuLy8hIGF1dGhvciA6IE1heWFuayBTaW5naGFsIDogaHR0cHM6Ly9naXRodWIuY29tL21heWFua3NpbmdoYWxcclxuXHJcbmxldCBzeW1ib2xNYXA6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgMTogJ8OgwqXCpycsXHJcbiAgICAyOiAnw6DCpcKoJyxcclxuICAgIDM6ICfDoMKlwqknLFxyXG4gICAgNDogJ8OgwqXCqicsXHJcbiAgICA1OiAnw6DCpcKrJyxcclxuICAgIDY6ICfDoMKlwqwnLFxyXG4gICAgNzogJ8OgwqXCrScsXHJcbiAgICA4OiAnw6DCpcKuJyxcclxuICAgIDk6ICfDoMKlwq8nLFxyXG4gICAgMDogJ8OgwqXCpidcclxuICB9LFxyXG4gIG51bWJlck1hcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICAnw6DCpcKnJzogJzEnLFxyXG4gICAgJ8OgwqXCqCc6ICcyJyxcclxuICAgICfDoMKlwqknOiAnMycsXHJcbiAgICAnw6DCpcKqJzogJzQnLFxyXG4gICAgJ8OgwqXCqyc6ICc1JyxcclxuICAgICfDoMKlwqwnOiAnNicsXHJcbiAgICAnw6DCpcKtJzogJzcnLFxyXG4gICAgJ8OgwqXCric6ICc4JyxcclxuICAgICfDoMKlwq8nOiAnOScsXHJcbiAgICAnw6DCpcKmJzogJzAnXHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBoaUxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaGknLFxyXG4gIG1vbnRoczogJ8OgwqTCnMOgwqTCqMOgwqTCtcOgwqTCsMOgwqXCgF/DoMKkwqvDoMKkwrzDoMKkwrDDoMKkwrXDoMKkwrDDoMKlwoBfw6DCpMKuw6DCpMK+w6DCpMKww6DCpcKNw6DCpMKaX8OgwqTChcOgwqTCqsOgwqXCjcOgwqTCsMOgwqXCiMOgwqTCsl/DoMKkwq7DoMKkwohfw6DCpMKcw6DCpcKCw6DCpMKoX8OgwqTCnMOgwqXCgcOgwqTCssOgwqTCvsOgwqTCiF/DoMKkwoXDoMKkwpfDoMKkwrjDoMKlwo3DoMKkwqRfw6DCpMK4w6DCpMK/w6DCpMKkw6DCpMKuw6DCpcKNw6DCpMKsw6DCpMKwX8OgwqTChcOgwqTClcOgwqXCjcOgwqTCn8OgwqXCgsOgwqTCrMOgwqTCsF/DoMKkwqjDoMKkwrXDoMKkwq7DoMKlwo3DoMKkwqzDoMKkwrBfw6DCpMKmw6DCpMK/w6DCpMK4w6DCpMKuw6DCpcKNw6DCpMKsw6DCpMKwJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnw6DCpMKcw6DCpMKoLl/DoMKkwqvDoMKkwrzDoMKkwrAuX8OgwqTCrsOgwqTCvsOgwqTCsMOgwqXCjcOgwqTCml/DoMKkwoXDoMKkwqrDoMKlwo3DoMKkwrDDoMKlwoguX8OgwqTCrsOgwqTCiF/DoMKkwpzDoMKlwoLDoMKkwqhfw6DCpMKcw6DCpcKBw6DCpMKyLl/DoMKkwoXDoMKkwpcuX8OgwqTCuMOgwqTCv8OgwqTCpC5fw6DCpMKFw6DCpMKVw6DCpcKNw6DCpMKfw6DCpcKCLl/DoMKkwqjDoMKkwrUuX8OgwqTCpsOgwqTCv8OgwqTCuC4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ8OgwqTCsMOgwqTCtcOgwqTCv8OgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwrjDoMKlwovDoMKkwq7DoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMKuw6DCpMKCw6DCpMKXw6DCpMKyw6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCrMOgwqXCgcOgwqTCp8OgwqTCtcOgwqTCvsOgwqTCsF/DoMKkwpfDoMKlwoHDoMKkwrDDoMKlwoLDoMKkwrXDoMKkwr7DoMKkwrBfw6DCpMK2w6DCpcKBw6DCpMKVw6DCpcKNw6DCpMKww6DCpMK1w6DCpMK+w6DCpMKwX8OgwqTCtsOgwqTCqMOgwqTCv8OgwqTCtcOgwqTCvsOgwqTCsCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnw6DCpMKww6DCpMK1w6DCpMK/X8OgwqTCuMOgwqXCi8OgwqTCrl/DoMKkwq7DoMKkwoLDoMKkwpfDoMKkwrJfw6DCpMKsw6DCpcKBw6DCpMKnX8OgwqTCl8OgwqXCgcOgwqTCsMOgwqXCgl/DoMKkwrbDoMKlwoHDoMKkwpXDoMKlwo3DoMKkwrBfw6DCpMK2w6DCpMKow6DCpMK/Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnw6DCpMKwX8OgwqTCuMOgwqXCi1/DoMKkwq7DoMKkwoJfw6DCpMKsw6DCpcKBX8OgwqTCl8OgwqXCgV/DoMKkwrbDoMKlwoFfw6DCpMK2Jy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0EgaDptbSDDoMKkwqzDoMKkwpzDoMKlwocnLFxyXG4gICAgTFRTOiAnQSBoOm1tOnNzIMOgwqTCrMOgwqTCnMOgwqXChycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZLCBBIGg6bW0gw6DCpMKsw6DCpMKcw6DCpcKHJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSwgQSBoOm1tIMOgwqTCrMOgwqTCnMOgwqXChydcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW8OgwqTChsOgwqTCnF0gTFQnLFxyXG4gICAgbmV4dERheTogJ1vDoMKkwpXDoMKkwrJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZCwgTFQnLFxyXG4gICAgbGFzdERheTogJ1vDoMKkwpXDoMKkwrJdIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW8OgwqTCqsOgwqTCv8OgwqTCm8OgwqTCssOgwqXCh10gZGRkZCwgTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICclcyDDoMKkwq7DoMKlwofDoMKkwoInLFxyXG4gICAgcGFzdDogJyVzIMOgwqTCqsOgwqTCucOgwqTCssOgwqXChycsXHJcbiAgICBzOiAnw6DCpMKVw6DCpcKBw6DCpMKbIMOgwqTCucOgwqXCgCDDoMKkwpXDoMKlwo3DoMKkwrfDoMKkwqMnLFxyXG4gICAgc3M6ICclZCDDoMKkwrjDoMKlwofDoMKkwpXDoMKkwoLDoMKkwqEnLFxyXG4gICAgbTogJ8OgwqTCj8OgwqTClSDDoMKkwq7DoMKkwr/DoMKkwqjDoMKkwp8nLFxyXG4gICAgbW06ICclZCDDoMKkwq7DoMKkwr/DoMKkwqjDoMKkwp8nLFxyXG4gICAgaDogJ8OgwqTCj8OgwqTClSDDoMKkwpjDoMKkwoLDoMKkwp/DoMKkwr4nLFxyXG4gICAgaGg6ICclZCDDoMKkwpjDoMKkwoLDoMKkwp/DoMKlwocnLFxyXG4gICAgZDogJ8OgwqTCj8OgwqTClSDDoMKkwqbDoMKkwr/DoMKkwqgnLFxyXG4gICAgZGQ6ICclZCDDoMKkwqbDoMKkwr/DoMKkwqgnLFxyXG4gICAgTTogJ8OgwqTCj8OgwqTClSDDoMKkwq7DoMKkwrnDoMKlwoDDoMKkwqjDoMKlwocnLFxyXG4gICAgTU06ICclZCDDoMKkwq7DoMKkwrnDoMKlwoDDoMKkwqjDoMKlwocnLFxyXG4gICAgeTogJ8OgwqTCj8OgwqTClSDDoMKkwrXDoMKkwrDDoMKlwo3DoMKkwrcnLFxyXG4gICAgeXk6ICclZCDDoMKkwrXDoMKkwrDDoMKlwo3DoMKkwrcnXHJcbiAgfSxcclxuICBwcmVwYXJzZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1vDoMKlwqfDoMKlwqjDoMKlwqnDoMKlwqrDoMKlwqvDoMKlwqzDoMKlwq3DoMKlwq7DoMKlwq/DoMKlwqZdL2csIGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICByZXR1cm4gbnVtYmVyTWFwW21hdGNoXTtcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcG9zdGZvcm1hdChzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcZC9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgcmV0dXJuIHN5bWJvbE1hcFttYXRjaF07XHJcbiAgICB9KTtcclxuICB9LFxyXG4gIC8vIEhpbmRpIG5vdGF0aW9uIGZvciBtZXJpZGllbXMgYXJlIHF1aXRlIGZ1enp5IGluIHByYWN0aWNlLiBXaGlsZSB0aGVyZSBleGlzdHNcclxuICAvLyBhIHJpZ2lkIG5vdGlvbiBvZiBhICdQYWhhcicgaXQgaXMgbm90IHVzZWQgYXMgcmlnaWRseSBpbiBtb2Rlcm4gSGluZGkuXHJcbiAgbWVyaWRpZW1QYXJzZTogL8OgwqTCsMOgwqTCvsOgwqTCpHzDoMKkwrjDoMKlwoHDoMKkwqzDoMKkwrl8w6DCpMKmw6DCpcKLw6DCpMKqw6DCpMK5w6DCpMKwfMOgwqTCtsOgwqTCvsOgwqTCri8sXHJcbiAgbWVyaWRpZW1Ib3VyKGhvdXIsIG1lcmlkaWVtKSB7XHJcbiAgICBpZiAoaG91ciA9PT0gMTIpIHtcclxuICAgICAgaG91ciA9IDA7XHJcbiAgICB9XHJcbiAgICBpZiAobWVyaWRpZW0gPT09ICfDoMKkwrDDoMKkwr7DoMKkwqQnKSB7XHJcbiAgICAgIHJldHVybiBob3VyIDwgNCA/IGhvdXIgOiBob3VyICsgMTI7XHJcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnw6DCpMK4w6DCpcKBw6DCpMKsw6DCpMK5Jykge1xyXG4gICAgICByZXR1cm4gaG91cjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDoMKkwqbDoMKlwovDoMKkwqrDoMKkwrnDoMKkwrAnKSB7XHJcbiAgICAgIHJldHVybiBob3VyID49IDEwID8gaG91ciA6IGhvdXIgKyAxMjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICfDoMKkwrbDoMKkwr7DoMKkwq4nKSB7XHJcbiAgICAgIHJldHVybiBob3VyICsgMTI7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgNCkge1xyXG4gICAgICByZXR1cm4gJ8OgwqTCsMOgwqTCvsOgwqTCpCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxMCkge1xyXG4gICAgICByZXR1cm4gJ8OgwqTCuMOgwqXCgcOgwqTCrMOgwqTCuSc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAxNykge1xyXG4gICAgICByZXR1cm4gJ8OgwqTCpsOgwqXCi8OgwqTCqsOgwqTCucOgwqTCsCc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXIgPCAyMCkge1xyXG4gICAgICByZXR1cm4gJ8OgwqTCtsOgwqTCvsOgwqTCric7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ8OgwqTCsMOgwqTCvsOgwqTCpCc7XHJcbiAgICB9XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDAsIC8vIFN1bmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA2ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiAxc3QgaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEh1bmdhcmlhbiBbaHVdXHJcbi8vISBhdXRob3IgOiBBZGFtIEJydW5uZXIgOiBodHRwczovL2dpdGh1Yi5jb20vYWRhbWJydW5uZXJcclxuXHJcbmxldCB3ZWVrRW5kaW5ncyA9ICd2YXPDg8Khcm5hcCBow4PCqXRmw4XCkW4ga2VkZGVuIHN6ZXJkw4PCoW4gY3PDg8K8dMODwrZydMODwrZrw4PCtm4gcMODwqludGVrZW4gc3pvbWJhdG9uJy5zcGxpdCgnICcpO1xyXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3MnOlxyXG4gICAgICByZXR1cm4gKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXgpID8gJ27Dg8KpaMODwqFueSBtw4PCoXNvZHBlcmMnIDogJ27Dg8KpaMODwqFueSBtw4PCoXNvZHBlcmNlJztcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgcmV0dXJuIG51bSArICgoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCkgPyAnIG3Dg8Khc29kcGVyYycgOiAnIG3Dg8Khc29kcGVyY2UnKTtcclxuICAgIGNhc2UgJ20nOlxyXG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XHJcbiAgICBjYXNlICdtbSc6XHJcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgcGVyYycgOiAnIHBlcmNlJyk7XHJcbiAgICBjYXNlICdoJzpcclxuICAgICAgcmV0dXJuICdlZ3knICsgKGlzRnV0dXJlIHx8IHdpdGhvdXRTdWZmaXggPyAnIMODwrNyYScgOiAnIMODwrNyw4PCoWphJyk7XHJcbiAgICBjYXNlICdoaCc6XHJcbiAgICAgIHJldHVybiBudW0gKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCs3JhJyA6ICcgw4PCs3LDg8KhamEnKTtcclxuICAgIGNhc2UgJ2QnOlxyXG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgbmFwJyA6ICcgbmFwamEnKTtcclxuICAgIGNhc2UgJ2RkJzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBuYXAnIDogJyBuYXBqYScpO1xyXG4gICAgY2FzZSAnTSc6XHJcbiAgICAgIHJldHVybiAnZWd5JyArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow4PCs25hcCcgOiAnIGjDg8KzbmFwamEnKTtcclxuICAgIGNhc2UgJ01NJzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyBow4PCs25hcCcgOiAnIGjDg8KzbmFwamEnKTtcclxuICAgIGNhc2UgJ3knOlxyXG4gICAgICByZXR1cm4gJ2VneScgKyAoaXNGdXR1cmUgfHwgd2l0aG91dFN1ZmZpeCA/ICcgw4PCqXYnIDogJyDDg8KpdmUnKTtcclxuICAgIGNhc2UgJ3l5JzpcclxuICAgICAgcmV0dXJuIG51bSArIChpc0Z1dHVyZSB8fCB3aXRob3V0U3VmZml4ID8gJyDDg8KpdicgOiAnIMODwql2ZScpO1xyXG4gIH1cclxuICByZXR1cm4gJyc7XHJcbn1cclxuZnVuY3Rpb24gd2VlayhkYXRlOiBEYXRlLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIHJldHVybiAoaXNGdXR1cmUgPyAnJyA6ICdbbcODwrpsdF0gJykgKyAnWycgKyB3ZWVrRW5kaW5nc1tnZXREYXlPZldlZWsoZGF0ZSldICsgJ10gTFRbLWtvcl0nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaHVMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2h1JyxcclxuICBtb250aHMgOiAnamFudcODwqFyX2ZlYnJ1w4PCoXJfbcODwqFyY2l1c1/Dg8KhcHJpbGlzX23Dg8KhanVzX2rDg8K6bml1c19qw4PCumxpdXNfYXVndXN6dHVzX3N6ZXB0ZW1iZXJfb2t0w4PCs2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA6ICdqYW5fZmViX23Dg8KhcmNfw4PCoXByX23Dg8Khal9qw4PCum5fasODwrpsX2F1Z19zemVwdF9va3Rfbm92X2RlYycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6ICd2YXPDg8Khcm5hcF9ow4PCqXRmw4XCkV9rZWRkX3N6ZXJkYV9jc8ODwrx0w4PCtnJ0w4PCtmtfcMODwqludGVrX3N6b21iYXQnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICd2YXNfaMODwql0X2tlZGRfc3plX2Nzw4PCvHRfcMODwqluX3N6bycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICd2X2hfa19zemVfY3NfcF9zem8nLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICBMVCA6ICdIOm1tJyxcclxuICAgIExUUyA6ICdIOm1tOnNzJyxcclxuICAgIEwgOiAnWVlZWS5NTS5ERC4nLFxyXG4gICAgTEwgOiAnWVlZWS4gTU1NTSBELicsXHJcbiAgICBMTEwgOiAnWVlZWS4gTU1NTSBELiBIOm1tJyxcclxuICAgIExMTEwgOiAnWVlZWS4gTU1NTSBELiwgZGRkZCBIOm1tJ1xyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL2RlfGR1L2ksXHJcbiAgaXNQTSAoaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMSkudG9Mb3dlckNhc2UoKSA9PT0gJ3UnO1xyXG4gIH0sXHJcbiAgbWVyaWRpZW0gKGhvdXJzLCBtaW51dGVzLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91cnMgPCAxMikge1xyXG4gICAgICByZXR1cm4gaXNMb3dlciA9PT0gdHJ1ZSA/ICdkZScgOiAnREUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGlzTG93ZXIgPT09IHRydWUgPyAnZHUnIDogJ0RVJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgc2FtZURheSA6ICdbbWFdIExUWy1rb3JdJyxcclxuICAgIG5leHREYXkgOiAnW2hvbG5hcF0gTFRbLWtvcl0nLFxyXG4gICAgbmV4dFdlZWsgKGRhdGU6IERhdGUpIHtcclxuICAgICAgcmV0dXJuIHdlZWsoZGF0ZSwgdHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgbGFzdERheSA6ICdbdGVnbmFwXSBMVFsta29yXScsXHJcbiAgICBsYXN0V2VlayAoZGF0ZTogRGF0ZSkge1xyXG4gICAgICByZXR1cm4gd2VlayhkYXRlLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2UgOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZSA6IHtcclxuICAgIGZ1dHVyZSA6ICclcyBtw4PCumx2YScsXHJcbiAgICBwYXN0IDogJyVzJyxcclxuICAgIHMgOiB0cmFuc2xhdGUsXHJcbiAgICBzcyA6IHRyYW5zbGF0ZSxcclxuICAgIG0gOiB0cmFuc2xhdGUsXHJcbiAgICBtbSA6IHRyYW5zbGF0ZSxcclxuICAgIGggOiB0cmFuc2xhdGUsXHJcbiAgICBoaCA6IHRyYW5zbGF0ZSxcclxuICAgIGQgOiB0cmFuc2xhdGUsXHJcbiAgICBkZCA6IHRyYW5zbGF0ZSxcclxuICAgIE0gOiB0cmFuc2xhdGUsXHJcbiAgICBNTSA6IHRyYW5zbGF0ZSxcclxuICAgIHkgOiB0cmFuc2xhdGUsXHJcbiAgICB5eSA6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsIDogJyVkLicsXHJcbiAgd2VlayA6IHtcclxuICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95IDogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEluZG9uZXNpYSBbaWRdXHJcbi8vISBhdXRob3IgOiBSb215IEt1c3VtYSA6IGh0dHBzOi8vZ2l0aHViLmNvbS9ya3VzdW1hXHJcbi8vISByZWZlcmVuY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50L2Jsb2IvZGV2ZWxvcC9sb2NhbGUvaWQuanNcclxuXHJcbmV4cG9ydCBjb25zdCBpZExvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnaWQnLFxyXG4gIG1vbnRocyA6ICdKYW51YXJpX0ZlYnJ1YXJpX01hcmV0X0FwcmlsX01laV9KdW5pX0p1bGlfQWd1c3R1c19TZXB0ZW1iZXJfT2t0b2Jlcl9Ob3ZlbWJlcl9EZXNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCA6ICdKYW5fRmViX01hcl9BcHJfTWVpX0p1bl9KdWxfQWdzX1NlcF9Pa3RfTm92X0Rlcycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5cyA6ICdNaW5nZ3VfU2VuaW5fU2VsYXNhX1JhYnVfS2FtaXNfSnVtYXRfU2FidHUnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydCA6ICdNaW5fU2VuX1NlbF9SYWJfS2FtX0p1bV9TYWInLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW4gOiAnTWdfU25fU2xfUmJfS21fSm1fU2InLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICBMVCA6ICdISC5tbScsXHJcbiAgICBMVFMgOiAnSEgubW0uc3MnLFxyXG4gICAgTCA6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMIDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTCA6ICdEIE1NTU0gWVlZWSBbcHVrdWxdIEhILm1tJyxcclxuICAgIExMTEwgOiAnZGRkZCwgRCBNTU1NIFlZWVkgW3B1a3VsXSBISC5tbSdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC9wYWdpfHNpYW5nfHNvcmV8bWFsYW0vLFxyXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xyXG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XHJcbiAgICAgIGhvdXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lcmlkaWVtID09PSAncGFnaScpIHtcclxuICAgICAgcmV0dXJuIGhvdXI7XHJcbiAgICB9IGVsc2UgaWYgKG1lcmlkaWVtID09PSAnc2lhbmcnKSB7XHJcbiAgICAgIHJldHVybiBob3VyID49IDExID8gaG91ciA6IGhvdXIgKyAxMjtcclxuICAgIH0gZWxzZSBpZiAobWVyaWRpZW0gPT09ICdzb3JlJyB8fCBtZXJpZGllbSA9PT0gJ21hbGFtJykge1xyXG4gICAgICByZXR1cm4gaG91ciArIDEyO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWVyaWRpZW0oaG91cnMsIG1pbnV0ZXMsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VycyA8IDExKSB7XHJcbiAgICAgIHJldHVybiAncGFnaSc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTUpIHtcclxuICAgICAgcmV0dXJuICdzaWFuZyc7XHJcbiAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTkpIHtcclxuICAgICAgcmV0dXJuICdzb3JlJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnbWFsYW0nO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICBzYW1lRGF5IDogJ1tIYXJpIGluaSBwdWt1bF0gTFQnLFxyXG4gICAgbmV4dERheSA6ICdbQmVzb2sgcHVrdWxdIExUJyxcclxuICAgIG5leHRXZWVrIDogJ2RkZGQgW3B1a3VsXSBMVCcsXHJcbiAgICBsYXN0RGF5IDogJ1tLZW1hcmluIHB1a3VsXSBMVCcsXHJcbiAgICBsYXN0V2VlayA6ICdkZGRkIFtsYWx1IHB1a3VsXSBMVCcsXHJcbiAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgZnV0dXJlIDogJ2RhbGFtICVzJyxcclxuICAgIHBhc3QgOiAnJXMgeWFuZyBsYWx1JyxcclxuICAgIHMgOiAnYmViZXJhcGEgZGV0aWsnLFxyXG4gICAgc3MgOiAnJWQgZGV0aWsnLFxyXG4gICAgbSA6ICdzZW1lbml0JyxcclxuICAgIG1tIDogJyVkIG1lbml0JyxcclxuICAgIGggOiAnc2VqYW0nLFxyXG4gICAgaGggOiAnJWQgamFtJyxcclxuICAgIGQgOiAnc2VoYXJpJyxcclxuICAgIGRkIDogJyVkIGhhcmknLFxyXG4gICAgTSA6ICdzZWJ1bGFuJyxcclxuICAgIE1NIDogJyVkIGJ1bGFuJyxcclxuICAgIHkgOiAnc2V0YWh1bicsXHJcbiAgICB5eSA6ICclZCB0YWh1bidcclxuICB9LFxyXG4gIHdlZWsgOiB7XHJcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveSA6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcblxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEl0YWxpYW4gW2l0XVxyXG4vLyEgYXV0aG9yIDogTG9yZW56byA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbGllbVxyXG4vLyEgYXV0aG9yOiBNYXR0aWEgTGFyZW50aXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9ub3N0YWxnaWF6XHJcblxyXG5leHBvcnQgY29uc3QgaXRMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2l0JyxcclxuICBtb250aHM6ICdnZW5uYWlvX2ZlYmJyYWlvX21hcnpvX2FwcmlsZV9tYWdnaW9fZ2l1Z25vX2x1Z2xpb19hZ29zdG9fc2V0dGVtYnJlX290dG9icmVfbm92ZW1icmVfZGljZW1icmUnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdnZW5fZmViX21hcl9hcHJfbWFnX2dpdV9sdWdfYWdvX3NldF9vdHRfbm92X2RpYycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ2RvbWVuaWNhX2x1bmVkw4PCrF9tYXJ0ZWTDg8KsX21lcmNvbGVkw4PCrF9naW92ZWTDg8KsX3ZlbmVyZMODwqxfc2FiYXRvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdkb21fbHVuX21hcl9tZXJfZ2lvX3Zlbl9zYWInLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdkb19sdV9tYV9tZV9naV92ZV9zYScuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnREQvTU0vWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbT2dnaSBhbGxlXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW0RvbWFuaSBhbGxlXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW2FsbGVdIExUJyxcclxuICAgIGxhc3REYXk6ICdbSWVyaSBhbGxlXSBMVCcsXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgcmV0dXJuICdbbGEgc2NvcnNhXSBkZGRkIFthbGxlXSBMVCc7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiAnW2xvIHNjb3Jzb10gZGRkZCBbYWxsZV0gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmUobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKCgvXlswLTldLiskLykudGVzdChudW0udG9TdHJpbmcoMTApKSA/ICd0cmEnIDogJ2luJykgKyAnICcgKyBudW07XHJcbiAgICB9LFxyXG4gICAgcGFzdDogJyVzIGZhJyxcclxuICAgIHM6ICdhbGN1bmkgc2Vjb25kaScsXHJcbiAgICBzczogJyVkIHNlY29uZGknLFxyXG4gICAgbTogJ3VuIG1pbnV0bycsXHJcbiAgICBtbTogJyVkIG1pbnV0aScsXHJcbiAgICBoOiAndW5cXCdvcmEnLFxyXG4gICAgaGg6ICclZCBvcmUnLFxyXG4gICAgZDogJ3VuIGdpb3JubycsXHJcbiAgICBkZDogJyVkIGdpb3JuaScsXHJcbiAgICBNOiAndW4gbWVzZScsXHJcbiAgICBNTTogJyVkIG1lc2knLFxyXG4gICAgeTogJ3VuIGFubm8nLFxyXG4gICAgeXk6ICclZCBhbm5pJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9w4LCui8sXHJcbiAgb3JkaW5hbDogJyVkw4LCuicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogSmFwYW5lc2UgW2phXVxyXG4vLyEgYXV0aG9yIDogTEkgTG9uZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9iYXJ5b25cclxuXHJcbmV4cG9ydCBjb25zdCBqYUxvY2FsZTogTG9jYWxlRGF0YSA9ICB7XHJcbiAgYWJicjogJ2phJyxcclxuICBtb250aHMgOiAnMcOmwpzCiF8yw6bCnMKIXzPDpsKcwohfNMOmwpzCiF81w6bCnMKIXzbDpsKcwohfN8OmwpzCiF84w6bCnMKIXznDpsKcwohfMTDDpsKcwohfMTHDpsKcwohfMTLDpsKcwognLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgOiAnMcOmwpzCiF8yw6bCnMKIXzPDpsKcwohfNMOmwpzCiF81w6bCnMKIXzbDpsKcwohfN8OmwpzCiF84w6bCnMKIXznDpsKcwohfMTDDpsKcwohfMTHDpsKcwohfMTLDpsKcwognLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiAnw6bCl8Klw6bCm8Kcw6bCl8KlX8OmwpzCiMOmwpvCnMOmwpfCpV/Dp8KBwqvDpsKbwpzDpsKXwqVfw6bCsMK0w6bCm8Kcw6bCl8KlX8OmwpzCqMOmwpvCnMOmwpfCpV/DqcKHwpHDpsKbwpzDpsKXwqVfw6XCnMKfw6bCm8Kcw6bCl8KlJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAnw6bCl8KlX8OmwpzCiF/Dp8KBwqtfw6bCsMK0X8OmwpzCqF/DqcKHwpFfw6XCnMKfJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ8OmwpfCpV/DpsKcwohfw6fCgcKrX8OmwrDCtF/DpsKcwqhfw6nCh8KRX8OlwpzCnycuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgIExUIDogJ0hIOm1tJyxcclxuICAgIExUUyA6ICdISDptbTpzcycsXHJcbiAgICBMIDogJ1lZWVkvTU0vREQnLFxyXG4gICAgTEwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcclxuICAgIExMTCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0nLFxyXG4gICAgTExMTCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0gZGRkZCcsXHJcbiAgICBsIDogJ1lZWVkvTU0vREQnLFxyXG4gICAgbGwgOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcclxuICAgIGxsbCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0nLFxyXG4gICAgbGxsbCA6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0gZGRkZCdcclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2U6IC/DpcKNwojDpcKJwo18w6XCjcKIw6XCvsKML2ksXHJcbiAgaXNQTSAoaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gJ8Olwo3CiMOlwr7CjCc7XHJcbiAgfSxcclxuICBtZXJpZGllbSAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHJldHVybiAnw6XCjcKIw6XCicKNJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnw6XCjcKIw6XCvsKMJztcclxuICAgIH1cclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgc2FtZURheSA6ICdbw6TCu8KKw6bCl8KlXSBMVCcsXHJcbiAgICBuZXh0RGF5IDogJ1vDpsKYwo7DpsKXwqVdIExUJyxcclxuICAgIG5leHRXZWVrIDogJ1vDpsKdwqXDqcKAwrFdZGRkZCBMVCcsXHJcbiAgICBsYXN0RGF5IDogJ1vDpsKYwqjDpsKXwqVdIExUJyxcclxuICAgIGxhc3RXZWVrIDogJ1vDpcKJwo3DqcKAwrFdZGRkZCBMVCcsXHJcbiAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfcOmwpfCpS8sXHJcbiAgb3JkaW5hbCAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJ8OmwpfCpSc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnJXPDpcK+wownLFxyXG4gICAgcGFzdCA6ICclc8OlwonCjScsXHJcbiAgICBzIDogJ8OmwpXCsMOnwqfCkicsXHJcbiAgICBzcyA6ICclZMOnwqfCkicsXHJcbiAgICBtIDogJzHDpcKIwoYnLFxyXG4gICAgbW0gOiAnJWTDpcKIwoYnLFxyXG4gICAgaCA6ICcxw6bCmcKCw6nClsKTJyxcclxuICAgIGhoIDogJyVkw6bCmcKCw6nClsKTJyxcclxuICAgIGQgOiAnMcOmwpfCpScsXHJcbiAgICBkZCA6ICclZMOmwpfCpScsXHJcbiAgICBNIDogJzHDo8KDwrbDpsKcwognLFxyXG4gICAgTU0gOiAnJWTDo8KDwrbDpsKcwognLFxyXG4gICAgeSA6ICcxw6XCucK0JyxcclxuICAgIHl5IDogJyVkw6XCucK0J1xyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1zaG9ydGhhbmRcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IEtvcmVhbiBba29dXHJcbi8vISBhdXRob3IgOiBLeXVuZ3dvb2ssIFBhcmsgOiBodHRwczovL2dpdGh1Yi5jb20va3l1bmd3MDBrXHJcbi8vISBhdXRob3IgOiBKZWVleXVsIExlZSA8amVlZXl1bEBnbWFpbC5jb20+XHJcblxyXG5leHBvcnQgY29uc3Qga29Mb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ2tvJyxcclxuICBtb250aHMgOiAnMcOswpvClF8yw6zCm8KUXzPDrMKbwpRfNMOswpvClF81w6zCm8KUXzbDrMKbwpRfN8OswpvClF84w6zCm8KUXznDrMKbwpRfMTDDrMKbwpRfMTHDrMKbwpRfMTLDrMKbwpQnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQgOiAnMcOswpvClF8yw6zCm8KUXzPDrMKbwpRfNMOswpvClF81w6zCm8KUXzbDrMKbwpRfN8OswpvClF84w6zCm8KUXznDrMKbwpRfMTDDrMKbwpRfMTHDrMKbwpRfMTLDrMKbwpQnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiAnw6zCncK8w6zCmsKUw6zCncK8X8OswpvClMOswprClMOswp3CvF/DrcKZwpTDrMKawpTDrMKdwrxfw6zCiMKYw6zCmsKUw6zCncK8X8OrwqrCqcOswprClMOswp3CvF/DqsK4wojDrMKawpTDrMKdwrxfw63ChsKgw6zCmsKUw6zCncK8Jy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAnw6zCncK8X8OswpvClF/DrcKZwpRfw6zCiMKYX8OrwqrCqV/DqsK4wohfw63ChsKgJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ8Oswp3CvF/DrMKbwpRfw63CmcKUX8OswojCmF/Dq8Kqwqlfw6rCuMKIX8OtwobCoCcuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdCA6IHtcclxuICAgIExUIDogJ0EgaDptbScsXHJcbiAgICBMVFMgOiAnQSBoOm1tOnNzJyxcclxuICAgIEwgOiAnWVlZWS5NTS5ERCcsXHJcbiAgICBMTCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCcsXHJcbiAgICBMTEwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgQSBoOm1tJyxcclxuICAgIExMTEwgOiAnWVlZWcOrwoXChCBNTU1NIETDrMKdwrwgZGRkZCBBIGg6bW0nLFxyXG4gICAgbCA6ICdZWVlZLk1NLkREJyxcclxuICAgIGxsIDogJ1lZWVnDq8KFwoQgTU1NTSBEw6zCncK8JyxcclxuICAgIGxsbCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBBIGg6bW0nLFxyXG4gICAgbGxsbCA6ICdZWVlZw6vChcKEIE1NTU0gRMOswp3CvCBkZGRkIEEgaDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgc2FtZURheSA6ICfDrMKYwqTDq8KKwpggTFQnLFxyXG4gICAgbmV4dERheSA6ICfDq8KCwrTDrMKdwrwgTFQnLFxyXG4gICAgbmV4dFdlZWsgOiAnZGRkZCBMVCcsXHJcbiAgICBsYXN0RGF5IDogJ8OswpbCtMOswqDCnCBMVCcsXHJcbiAgICBsYXN0V2VlayA6ICfDrMKnwoDDq8KCwpzDrMKjwrwgZGRkZCBMVCcsXHJcbiAgICBzYW1lRWxzZSA6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lIDoge1xyXG4gICAgZnV0dXJlIDogJyVzIMOtwpvChCcsXHJcbiAgICBwYXN0IDogJyVzIMOswqDChCcsXHJcbiAgICBzIDogJ8OrwqrChyDDrMK0wognLFxyXG4gICAgc3MgOiAnJWTDrMK0wognLFxyXG4gICAgbSA6ICcxw6vCtsKEJyxcclxuICAgIG1tIDogJyVkw6vCtsKEJyxcclxuICAgIGggOiAnw63ClcKcIMOswovCnMOqwrDChCcsXHJcbiAgICBoaCA6ICclZMOswovCnMOqwrDChCcsXHJcbiAgICBkIDogJ8OtwpXCmMOrwqPCqCcsXHJcbiAgICBkZCA6ICclZMOswp3CvCcsXHJcbiAgICBNIDogJ8OtwpXCnCDDq8KLwqwnLFxyXG4gICAgTU0gOiAnJWTDq8KLwqwnLFxyXG4gICAgeSA6ICfDrMKdwrwgw6vChcKEJyxcclxuICAgIHl5IDogJyVkw6vChcKEJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZSA6IC9cXGR7MSwyfSjDrMKdwrx8w6zCm8KUfMOswqPCvCkvLFxyXG4gIG9yZGluYWwgOiBmdW5jdGlvbiAobnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJ8Oswp3CvCc7XHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnw6zCm8KUJztcclxuICAgICAgY2FzZSAndyc6XHJcbiAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnw6zCo8K8JztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1lcmlkaWVtUGFyc2UgOiAvw6zCmMKkw6zCoMKEfMOswpjCpMOtwpvChC8sXHJcbiAgaXNQTSA6IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgcmV0dXJuIHRva2VuID09PSAnw6zCmMKkw63Cm8KEJztcclxuICB9LFxyXG4gIG1lcmlkaWVtIDogZnVuY3Rpb24gKGhvdXIsIG1pbnV0ZSwgaXNVcHBlcikge1xyXG4gICAgcmV0dXJuIGhvdXIgPCAxMiA/ICfDrMKYwqTDrMKgwoQnIDogJ8OswpjCpMOtwpvChCc7XHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBMaXRodWFuaWFuIFtsdF1cclxuLy8hIGF1dGhvciA6IFN0YW5pc2xhdmFzIEd1ayA6IGh0dHBzOi8vZ2l0aHViLmNvbS9peG9zdGVyXHJcblxyXG5jb25zdCB1bml0cyA9IHtcclxuICBzcyA6ICdzZWt1bmTDhMKXX3Nla3VuZMOFwr5pw4XCs19zZWt1bmRlcycsXHJcbiAgbSA6ICdtaW51dMOEwpdfbWludXTDhMKXc19taW51dMOEwpknLFxyXG4gIG1tOiAnbWludXTDhMKXc19taW51w4TCjWnDhcKzX21pbnV0ZXMnLFxyXG4gIGggOiAndmFsYW5kYV92YWxhbmRvc192YWxhbmTDhMKFJyxcclxuICBoaDogJ3ZhbGFuZG9zX3ZhbGFuZMOFwrNfdmFsYW5kYXMnLFxyXG4gIGQgOiAnZGllbmFfZGllbm9zX2RpZW7DhMKFJyxcclxuICBkZDogJ2RpZW5vc19kaWVuw4XCs19kaWVuYXMnLFxyXG4gIE0gOiAnbcOEwpdudW9fbcOEwpduZXNpb19tw4TCl25lc8OEwq8nLFxyXG4gIE1NOiAnbcOEwpduZXNpYWlfbcOEwpduZXNpw4XCs19tw4TCl25lc2l1cycsXHJcbiAgeSA6ICdtZXRhaV9tZXTDhcKzX21ldHVzJyxcclxuICB5eTogJ21ldGFpX21ldMOFwrNfbWV0dXMnXHJcbn07XHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZVNlY29uZHMobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIGlmICh3aXRob3V0U3VmZml4KSB7XHJcbiAgICAgIHJldHVybiAna2VsaW9zIHNla3VuZMOEwpdzJztcclxuICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gaXNGdXR1cmUgPyAna2VsacOFwrMgc2VrdW5kw4XCvmnDhcKzJyA6ICdrZWxpYXMgc2VrdW5kZXMnO1xyXG4gIH1cclxufVxyXG5mdW5jdGlvbiB0cmFuc2xhdGVTaW5ndWxhcihudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKSB7XHJcbiAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyBmb3JtcyhrZXkpWzBdIDogKGlzRnV0dXJlID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMl0pO1xyXG59XHJcbmZ1bmN0aW9uIHNwZWNpYWwobnVtOiBudW1iZXIpIHtcclxuICByZXR1cm4gbnVtICUgMTAgPT09IDAgfHwgKG51bSA+IDEwICYmIG51bSA8IDIwKTtcclxufVxyXG5mdW5jdGlvbiBmb3JtcyhrZXk6IHN0cmluZykge1xyXG4gIHJldHVybiB1bml0c1trZXldLnNwbGl0KCdfJyk7XHJcbn1cclxuZnVuY3Rpb24gdHJhbnNsYXRlKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZywgaXNGdXR1cmU6IGJvb2xlYW4pIHtcclxuICBsZXQgcmVzdWx0ID0gbnVtICsgJyAnO1xyXG4gIGlmIChudW0gPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHJlc3VsdCArIHRyYW5zbGF0ZVNpbmd1bGFyKG51bSwgd2l0aG91dFN1ZmZpeCwga2V5WzBdLCBpc0Z1dHVyZSk7XHJcbiAgfSBlbHNlIGlmICh3aXRob3V0U3VmZml4KSB7XHJcbiAgICAgIHJldHVybiByZXN1bHQgKyAoc3BlY2lhbChudW0pID8gZm9ybXMoa2V5KVsxXSA6IGZvcm1zKGtleSlbMF0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAgIGlmIChpc0Z1dHVyZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3VsdCArIGZvcm1zKGtleSlbMV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHNwZWNpYWwobnVtKSA/IGZvcm1zKGtleSlbMV0gOiBmb3JtcyhrZXkpWzJdKTtcclxuICAgICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGx0TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdsdCcsXHJcbiAgbW9udGhzIDoge1xyXG4gICAgZm9ybWF0OiAnc2F1c2lvX3Zhc2FyaW9fa292b19iYWxhbmTDhcK+aW9fZ2VndcOFwr7DhMKXc19iaXLDhcK+ZWxpb19saWVwb3NfcnVncGrDhcKrw4TCjWlvX3J1Z3PDhMKXam9fc3BhbGlvX2xhcGtyacOEwo1pb19ncnVvZMOFwr5pbycuc3BsaXQoJ18nKSxcclxuICAgIHN0YW5kYWxvbmU6ICdzYXVzaXNfdmFzYXJpc19rb3Zhc19iYWxhbmRpc19nZWd1w4XCvsOEwpdfYmlyw4XCvmVsaXNfbGllcGFfcnVncGrDhcKrdGlzX3J1Z3PDhMKXamlzX3NwYWxpc19sYXBrcml0aXNfZ3J1b2Rpcycuc3BsaXQoJ18nKSxcclxuICAgIGlzRm9ybWF0OiAvRFtvRF0/KFxcW1teXFxbXFxdXSpcXF18XFxzKStNTU1NP3xNTU1NPyhcXFtbXlxcW1xcXV0qXFxdfFxccykrRFtvRF0/L1xyXG4gIH0sXHJcbiAgbW9udGhzU2hvcnQgOiAnc2F1X3Zhc19rb3ZfYmFsX2dlZ19iaXJfbGllX3JncF9yZ3Nfc3BhX2xhcF9ncmQnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXMgOiB7XHJcbiAgICAgIGZvcm1hdDogJ3Nla21hZGllbsOEwq9fcGlybWFkaWVuw4TCr19hbnRyYWRpZW7DhMKvX3RyZcOEwo1pYWRpZW7DhMKvX2tldHZpcnRhZGllbsOEwq9fcGVua3RhZGllbsOEwq9fw4XCoWXDhcKhdGFkaWVuw4TCrycuc3BsaXQoJ18nKSxcclxuICAgICAgc3RhbmRhbG9uZTogJ3Nla21hZGllbmlzX3Bpcm1hZGllbmlzX2FudHJhZGllbmlzX3RyZcOEwo1pYWRpZW5pc19rZXR2aXJ0YWRpZW5pc19wZW5rdGFkaWVuaXNfw4XCoWXDhcKhdGFkaWVuaXMnLnNwbGl0KCdfJyksXHJcbiAgICAgIGlzRm9ybWF0OiAvZGRkZCBISDptbS9cclxuICB9LFxyXG4gIHdlZWtkYXlzU2hvcnQgOiAnU2VrX1Bpcl9BbnRfVHJlX0tldF9QZW5fw4XCoGXDhcKhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluIDogJ1NfUF9BX1RfS19Qbl/DhcKgJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdCA6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQgOiB7XHJcbiAgICAgIExUIDogJ0hIOm1tJyxcclxuICAgICAgTFRTIDogJ0hIOm1tOnNzJyxcclxuICAgICAgTCA6ICdZWVlZLU1NLUREJyxcclxuICAgICAgTEwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dJyxcclxuICAgICAgTExMIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXSwgSEg6bW0gW3ZhbC5dJyxcclxuICAgICAgTExMTCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIGRkZGQsIEhIOm1tIFt2YWwuXScsXHJcbiAgICAgIGwgOiAnWVlZWS1NTS1ERCcsXHJcbiAgICAgIGxsIDogJ1lZWVkgW20uXSBNTU1NIEQgW2QuXScsXHJcbiAgICAgIGxsbCA6ICdZWVlZIFttLl0gTU1NTSBEIFtkLl0sIEhIOm1tIFt2YWwuXScsXHJcbiAgICAgIGxsbGwgOiAnWVlZWSBbbS5dIE1NTU0gRCBbZC5dLCBkZGQsIEhIOm1tIFt2YWwuXSdcclxuICB9LFxyXG4gIGNhbGVuZGFyIDoge1xyXG4gICAgICBzYW1lRGF5IDogJ1vDhcKgaWFuZGllbl0gTFQnLFxyXG4gICAgICBuZXh0RGF5IDogJ1tSeXRval0gTFQnLFxyXG4gICAgICBuZXh0V2VlayA6ICdkZGRkIExUJyxcclxuICAgICAgbGFzdERheSA6ICdbVmFrYXJdIExUJyxcclxuICAgICAgbGFzdFdlZWsgOiAnW1ByYcOEwpdqdXPDhMKvXSBkZGRkIExUJyxcclxuICAgICAgc2FtZUVsc2UgOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZSA6IHtcclxuICAgICAgZnV0dXJlIDogJ3BvICVzJyxcclxuICAgICAgcGFzdCA6ICdwcmllw4XCoSAlcycsXHJcbiAgICAgIHMgOiB0cmFuc2xhdGVTZWNvbmRzLFxyXG4gICAgICBzcyA6IHRyYW5zbGF0ZSxcclxuICAgICAgbSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBtbSA6IHRyYW5zbGF0ZSxcclxuICAgICAgaCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBoaCA6IHRyYW5zbGF0ZSxcclxuICAgICAgZCA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBkZCA6IHRyYW5zbGF0ZSxcclxuICAgICAgTSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICBNTSA6IHRyYW5zbGF0ZSxcclxuICAgICAgeSA6IHRyYW5zbGF0ZVNpbmd1bGFyLFxyXG4gICAgICB5eSA6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9LW9qaS8sXHJcbiAgb3JkaW5hbChudW0pIHtcclxuICAgICAgcmV0dXJuIG51bSArICctb2ppJztcclxuICB9LFxyXG4gIHdlZWsgOiB7XHJcbiAgICAgIGRvdyA6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgICBkb3kgOiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcbi8vIHRzbGludDpkaXNhYmxlOm9iamVjdC1saXRlcmFsLXNob3J0aGFuZFxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogTW9uZ29saWFuIFttbl1cclxuLy8hIGF1dGhvciA6IEphdmtobGFudHVncyBOeWFtZG9yaiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qYXZraGFhbmo3XHJcblxyXG5mdW5jdGlvbiB0cmFuc2xhdGUobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nLCBpc0Z1dHVyZTogYm9vbGVhbikge1xyXG4gIHN3aXRjaCAoa2V5KSB7XHJcbiAgICBjYXNlICdzJzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnw5HChcORwo3DkMK0w5HChcORwo3DkMK9IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtCcgOiAnw5HChcORwo3DkMK0w5HChcORwo3DkMK9IMORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwovDkMK9JztcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrQnIDogJyDDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKLw5DCvScpO1xyXG4gICAgY2FzZSAnbSc6XHJcbiAgICBjYXNlICdtbSc6XHJcbiAgICAgIHJldHVybiBudW0gKyAod2l0aG91dFN1ZmZpeCA/ICcgw5DCvMOQwrjDkMK9w5HCg8ORwoInIDogJyDDkMK8w5DCuMOQwr3DkcKDw5HCgsORwovDkMK9Jyk7XHJcbiAgICBjYXNlICdoJzpcclxuICAgIGNhc2UgJ2hoJzpcclxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkcKGw5DCsMOQwrMnIDogJyDDkcKGw5DCsMOQwrPDkMK4w5DCucOQwr0nKTtcclxuICAgIGNhc2UgJ2QnOlxyXG4gICAgY2FzZSAnZGQnOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMOTwqnDkMK0w5PCqcORwoAnIDogJyDDk8Kpw5DCtMORwoDDkMK4w5DCucOQwr0nKTtcclxuICAgIGNhc2UgJ00nOlxyXG4gICAgY2FzZSAnTU0nOlxyXG4gICAgICByZXR1cm4gbnVtICsgKHdpdGhvdXRTdWZmaXggPyAnIMORwoHDkMKww5HCgCcgOiAnIMORwoHDkMKww5HCgMORwovDkMK9Jyk7XHJcbiAgICBjYXNlICd5JzpcclxuICAgIGNhc2UgJ3l5JzpcclxuICAgICAgcmV0dXJuIG51bSArICh3aXRob3V0U3VmZml4ID8gJyDDkMK2w5DCuMOQwrsnIDogJyDDkMK2w5DCuMOQwrvDkMK4w5DCucOQwr0nKTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG1uTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdtbicsXHJcbiAgbW9udGhzOiAnw5DCncORwo3DkMKzw5DCtMOSwq/DkMKzw5HCjcORwo3DkcKAIMORwoHDkMKww5HCgF/DkMKlw5DCvsORwpHDkcKAw5DCtMORwoPDkMKzw5DCsMOQwrDDkcKAIMORwoHDkMKww5HCgF/DkMKTw5HCg8ORwoDDkMKww5DCssOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DClMOTwqnDkcKAw5PCqcOQwrLDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwqLDkMKww5DCssOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCl8ORwoPDkcKAw5DCs8OQwrDDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpTDkMK+w5DCu8OQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DCncOQwrDDkMK5w5DCvMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoBfw5DClcORwoHDkMK0w5LCr8OQwrPDkcKNw5HCjcORwoAgw5HCgcOQwrDDkcKAX8OQwpDDkcKAw5DCsMOQwrLDkMK0w5HCg8OQwrPDkMKww5DCsMORwoAgw5HCgcOQwrDDkcKAX8OQwpDDkcKAw5DCssOQwrDDkMK9IMOQwr3DkcKNw5DCs8OQwrTDksKvw5DCs8ORwo3DkcKNw5HCgCDDkcKBw5DCsMORwoBfw5DCkMORwoDDkMKyw5DCsMOQwr0gw5HChcOQwr7DkcKRw5HCgMOQwrTDkcKDw5DCs8OQwrDDkMKww5HCgCDDkcKBw5DCsMORwoAnLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICcxIMORwoHDkMKww5HCgF8yIMORwoHDkMKww5HCgF8zIMORwoHDkMKww5HCgF80IMORwoHDkMKww5HCgF81IMORwoHDkMKww5HCgF82IMORwoHDkMKww5HCgF83IMORwoHDkMKww5HCgF84IMORwoHDkMKww5HCgF85IMORwoHDkMKww5HCgF8xMCDDkcKBw5DCsMORwoBfMTEgw5HCgcOQwrDDkcKAXzEyIMORwoHDkMKww5HCgCcuc3BsaXQoJ18nKSxcclxuICBtb250aHNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIHdlZWtkYXlzOiAnw5DCncORwo/DkMK8X8OQwpTDkMKww5DCssOQwrDDkMKwX8OQwpzDkcKPw5DCs8OQwrzDkMKww5HCgF/DkMKbw5HChcOQwrDDkMKzw5DCssOQwrBfw5DCn8OSwq/DkcKAw5HCjcOQwrJfw5DCkcOQwrDDkMKww5HCgcOQwrDDkMK9X8OQwpHDkcKPw5DCvMOQwrHDkMKwJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfDkMKdw5HCj8OQwrxfw5DClMOQwrDDkMKyX8OQwpzDkcKPw5DCs1/DkMKbw5HChcOQwrBfw5DCn8OSwq/DkcKAX8OQwpHDkMKww5DCsF/DkMKRw5HCj8OQwrwnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICfDkMKdw5HCj1/DkMKUw5DCsF/DkMKcw5HCj1/DkMKbw5HChV/DkMKfw5LCr1/DkMKRw5DCsF/DkMKRw5HCjycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ1lZWVktTU0tREQnLFxyXG4gICAgTEw6ICdZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCcsXHJcbiAgICBMTEw6ICdZWVlZIMOQwr7DkMK9w5HCiyBNTU1Nw5HCi8OQwr0gRCBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCwgWVlZWSDDkMK+w5DCvcORwosgTU1NTcORwovDkMK9IEQgSEg6bW0nXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAvw5LCrsOTwqh8w5LCrsOQwqUvaSxcclxuICBpc1BNOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgIHJldHVybiBpbnB1dCA9PT0gJ8OSwq7DkMKlJztcclxuICB9LFxyXG4gIG1lcmlkaWVtOiBmdW5jdGlvbiAoaG91ciwgbWludXRlLCBpc0xvd2VyKSB7XHJcbiAgICBpZiAoaG91ciA8IDEyKSB7XHJcbiAgICAgIHJldHVybiAnw5LCrsOTwqgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICfDksKuw5DCpSc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vDk8Kow5DCvcOTwqnDk8Kpw5DCtMOTwqnDkcKAXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW8OQwpzDkMKww5HCgMOQwrPDkMKww5DCsMORwohdIExUJyxcclxuICAgIG5leHRXZWVrOiAnW8OQwpjDkcKAw5HCjcORwoVdIGRkZGQgTFQnLFxyXG4gICAgbGFzdERheTogJ1vDk8Kow5HCh8OQwrjDkMKzw5DCtMOTwqnDkcKAXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1vDk8Kow5DCvcOQwrPDk8Kpw5HCgMORwoHDk8Kpw5DCvV0gZGRkZCBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJyVzIMOQwrTDkMKww5HCgMOQwrDDkMKwJyxcclxuICAgIHBhc3Q6ICclcyDDk8Kpw5DCvMOQwr3Dk8KpJyxcclxuICAgIHM6IHRyYW5zbGF0ZSxcclxuICAgIHNzOiB0cmFuc2xhdGUsXHJcbiAgICBtOiB0cmFuc2xhdGUsXHJcbiAgICBtbTogdHJhbnNsYXRlLFxyXG4gICAgaDogdHJhbnNsYXRlLFxyXG4gICAgaGg6IHRyYW5zbGF0ZSxcclxuICAgIGQ6IHRyYW5zbGF0ZSxcclxuICAgIGRkOiB0cmFuc2xhdGUsXHJcbiAgICBNOiB0cmFuc2xhdGUsXHJcbiAgICBNTTogdHJhbnNsYXRlLFxyXG4gICAgeTogdHJhbnNsYXRlLFxyXG4gICAgeXk6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9IMOTwqnDkMK0w5PCqcORwoAvLFxyXG4gIG9yZGluYWw6IGZ1bmN0aW9uIChudW06IG51bWJlciwgcGVyaW9kOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgc3dpdGNoIChwZXJpb2QpIHtcclxuICAgICAgY2FzZSAnZCc6XHJcbiAgICAgIGNhc2UgJ0QnOlxyXG4gICAgICBjYXNlICdEREQnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnIMOTwqnDkMK0w5PCqcORwoAnO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBudW0udG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXRcclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogTm9yd2VnaWFuIEJva23Dg8KlbCBbbmJdXHJcbi8vISBhdXRob3JzIDogRXNwZW4gSG92bGFuZHNkYWwgOiBodHRwczovL2dpdGh1Yi5jb20vcmV4eGFyc1xyXG4vLyEgICAgICAgICAgIFNpZ3VyZCBHYXJ0bWFubiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9zaWd1cmRnYVxyXG5cclxuZXhwb3J0IGNvbnN0IG5iTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICduYicsXHJcbiAgbW9udGhzOiAnamFudWFyX2ZlYnJ1YXJfbWFyc19hcHJpbF9tYWlfanVuaV9qdWxpX2F1Z3VzdF9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZXNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ2phbi5fZmViLl9tYXJzX2FwcmlsX21haV9qdW5pX2p1bGlfYXVnLl9zZXAuX29rdC5fbm92Ll9kZXMuJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgd2Vla2RheXM6ICdzw4PCuG5kYWdfbWFuZGFnX3RpcnNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDg8K4cmRhZycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnc8ODwrguX21hLl90aS5fb24uX3RvLl9mci5fbMODwrguJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnc8ODwrhfbWFfdGlfb25fdG9fZnJfbMODwrgnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRC4gTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QuIE1NTU0gWVlZWSBba2wuXSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCBELiBNTU1NIFlZWVkgW2tsLl0gSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tpIGRhZyBrbC5dIExUJyxcclxuICAgIG5leHREYXk6ICdbaSBtb3JnZW4ga2wuXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW2tsLl0gTFQnLFxyXG4gICAgbGFzdERheTogJ1tpIGfDg8KlciBrbC5dIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW2ZvcnJpZ2VdIGRkZGQgW2tsLl0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdvbSAlcycsXHJcbiAgICBwYXN0OiAnJXMgc2lkZW4nLFxyXG4gICAgczogJ25vZW4gc2VrdW5kZXInLFxyXG4gICAgc3M6ICclZCBzZWt1bmRlcicsXHJcbiAgICBtOiAnZXR0IG1pbnV0dCcsXHJcbiAgICBtbTogJyVkIG1pbnV0dGVyJyxcclxuICAgIGg6ICdlbiB0aW1lJyxcclxuICAgIGhoOiAnJWQgdGltZXInLFxyXG4gICAgZDogJ2VuIGRhZycsXHJcbiAgICBkZDogJyVkIGRhZ2VyJyxcclxuICAgIE06ICdlbiBtw4PCpW5lZCcsXHJcbiAgICBNTTogJyVkIG3Dg8KlbmVkZXInLFxyXG4gICAgeTogJ2V0dCDDg8KlcicsXHJcbiAgICB5eTogJyVkIMODwqVyJ1xyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0IC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogRHV0Y2ggKEJlbGdpdW0pIFtubC1iZV1cclxuLy8hIGF1dGhvciA6IEpvcmlzIFLDg8K2bGluZyA6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Jpc3JvbGluZ1xyXG4vLyEgYXV0aG9yIDogSmFjb2IgTWlkZGFnIDogaHR0cHM6Ly9naXRodWIuY29tL21pZGRhZ2pcclxuXHJcbmxldCBtb250aHNTaG9ydFdpdGhEb3RzID0gJ2phbi5fZmViLl9tcnQuX2Fwci5fbWVpX2p1bi5fanVsLl9hdWcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyk7XHJcbmxldCBtb250aHNTaG9ydFdpdGhvdXREb3RzID0gJ2phbl9mZWJfbXJ0X2Fwcl9tZWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xyXG5cclxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcclxubGV0IG1vbnRoc1JlZ2V4ID0gL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxhcHJpbHxtZWl8YXByaWx8anVbbmxdaXxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcnxqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5sQmVMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ25sLWJlJyxcclxuICBtb250aHM6ICdqYW51YXJpX2ZlYnJ1YXJpX21hYXJ0X2FwcmlsX21laV9qdW5pX2p1bGlfYXVndXN0dXNfc2VwdGVtYmVyX29rdG9iZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90cztcclxuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aG91dERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXHJcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oamFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xtZWl8anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXHJcblxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcblxyXG4gIHdlZWtkYXlzOiAnem9uZGFnX21hYW5kYWdfZGluc2RhZ193b2Vuc2RhZ19kb25kZXJkYWdfdnJpamRhZ196YXRlcmRhZycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnem8uX21hLl9kaS5fd28uX2RvLl92ci5femEuJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnem9fbWFfZGlfd29fZG9fdnJfemEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRCBNTU1NIFlZWVkgSEg6bW0nXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1t2YW5kYWFnIG9tXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW21vcmdlbiBvbV0gTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdkZGRkIFtvbV0gTFQnLFxyXG4gICAgbGFzdERheTogJ1tnaXN0ZXJlbiBvbV0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbYWZnZWxvcGVuXSBkZGRkIFtvbV0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdvdmVyICVzJyxcclxuICAgIHBhc3Q6ICclcyBnZWxlZGVuJyxcclxuICAgIHM6ICdlZW4gcGFhciBzZWNvbmRlbicsXHJcbiAgICBzczogJyVkIHNlY29uZGVuJyxcclxuICAgIG06ICfDg8Kpw4PCqW4gbWludXV0JyxcclxuICAgIG1tOiAnJWQgbWludXRlbicsXHJcbiAgICBoOiAnw4PCqcODwqluIHV1cicsXHJcbiAgICBoaDogJyVkIHV1cicsXHJcbiAgICBkOiAnw4PCqcODwqluIGRhZycsXHJcbiAgICBkZDogJyVkIGRhZ2VuJyxcclxuICAgIE06ICfDg8Kpw4PCqW4gbWFhbmQnLFxyXG4gICAgTU06ICclZCBtYWFuZGVuJyxcclxuICAgIHk6ICfDg8Kpw4PCqW4gamFhcicsXHJcbiAgICB5eTogJyVkIGphYXInXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oc3RlfGRlKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgcmV0dXJuIG51bSArICgobnVtID09PSAxIHx8IG51bSA9PT0gOCB8fCBudW0gPj0gMjApID8gJ3N0ZScgOiAnZGUnKTtcclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogRHV0Y2ggW25sXVxyXG4vLyEgYXV0aG9yIDogSm9yaXMgUsODwrZsaW5nIDogaHR0cHM6Ly9naXRodWIuY29tL2pvcmlzcm9saW5nXHJcbi8vISBhdXRob3IgOiBKYWNvYiBNaWRkYWcgOiBodHRwczovL2dpdGh1Yi5jb20vbWlkZGFnalxyXG5cclxubGV0IG1vbnRoc1Nob3J0V2l0aERvdHMgPSAnamFuLl9mZWIuX21ydC5fYXByLl9tZWlfanVuLl9qdWwuX2F1Zy5fc2VwLl9va3QuX25vdi5fZGVjLicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydFdpdGhvdXREb3RzID0gJ2phbl9mZWJfbXJ0X2Fwcl9tZWlfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xyXG5cclxubGV0IG1vbnRoc1BhcnNlID0gWy9eamFuL2ksIC9eZmViL2ksIC9ebWFhcnR8bXJ0Lj8kL2ksIC9eYXByL2ksIC9ebWVpJC9pLCAvXmp1bltpLl0/JC9pLCAvXmp1bFtpLl0/JC9pLCAvXmF1Zy9pLCAvXnNlcC9pLCAvXm9rdC9pLCAvXm5vdi9pLCAvXmRlYy9pXTtcclxubGV0IG1vbnRoc1JlZ2V4ID0gL14oamFudWFyaXxmZWJydWFyaXxtYWFydHxhcHJpbHxtZWl8YXByaWx8anVbbmxdaXxhdWd1c3R1c3xzZXB0ZW1iZXJ8b2t0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcnxqYW5cXC4/fGZlYlxcLj98bXJ0XFwuP3xhcHJcXC4/fGp1W25sXVxcLj98YXVnXFwuP3xzZXBcXC4/fG9rdFxcLj98bm92XFwuP3xkZWNcXC4/KS9pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5sTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdubCcsXHJcbiAgbW9udGhzIDogJ2phbnVhcmlfZmVicnVhcmlfbWFhcnRfYXByaWxfbWVpX2p1bmlfanVsaV9hdWd1c3R1c19zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydCAoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGlzVVRDPzogYm9vbGVhbik6IHN0cmluZyB8IHN0cmluZ1tdIHtcclxuICAgIGlmICghZGF0ZSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU2hvcnRXaXRoRG90cztcclxuICAgIH0gZWxzZSBpZiAoLy1NTU0tLy50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc1Nob3J0V2l0aG91dERvdHNbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBtb250aHNTaG9ydFdpdGhEb3RzW2dldE1vbnRoKGRhdGUsIGlzVVRDKV07XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU2hvcnRSZWdleDogbW9udGhzUmVnZXgsXHJcbiAgbW9udGhzU3RyaWN0UmVnZXg6IC9eKGphbnVhcml8ZmVicnVhcml8bWFhcnR8bWVpfGp1W25sXWl8YXByaWx8YXVndXN0dXN8c2VwdGVtYmVyfG9rdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2ksXHJcbiAgbW9udGhzU2hvcnRTdHJpY3RSZWdleDogL14oamFuXFwuP3xmZWJcXC4/fG1ydFxcLj98YXByXFwuP3xtZWl8anVbbmxdXFwuP3xhdWdcXC4/fHNlcFxcLj98b2t0XFwuP3xub3ZcXC4/fGRlY1xcLj8pL2ksXHJcblxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZSA6IG1vbnRoc1BhcnNlLFxyXG4gIHNob3J0TW9udGhzUGFyc2UgOiBtb250aHNQYXJzZSxcclxuXHJcbiAgd2Vla2RheXMgOiAnem9uZGFnX21hYW5kYWdfZGluc2RhZ193b2Vuc2RhZ19kb25kZXJkYWdfdnJpamRhZ196YXRlcmRhZycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0IDogJ3pvLl9tYS5fZGkuX3dvLl9kby5fdnIuX3phLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbiA6ICd6b19tYV9kaV93b19kb192cl96YScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3QgOiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0IDoge1xyXG4gICAgTFQgOiAnSEg6bW0nLFxyXG4gICAgTFRTIDogJ0hIOm1tOnNzJyxcclxuICAgIEwgOiAnREQtTU0tWVlZWScsXHJcbiAgICBMTCA6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEwgOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTCA6ICdkZGRkIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXIgOiB7XHJcbiAgICBzYW1lRGF5OiAnW3ZhbmRhYWcgb21dIExUJyxcclxuICAgIG5leHREYXk6ICdbbW9yZ2VuIG9tXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW29tXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW2dpc3RlcmVuIG9tXSBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1thZmdlbG9wZW5dIGRkZGQgW29tXSBMVCcsXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWUgOiB7XHJcbiAgICBmdXR1cmUgOiAnb3ZlciAlcycsXHJcbiAgICBwYXN0IDogJyVzIGdlbGVkZW4nLFxyXG4gICAgcyA6ICdlZW4gcGFhciBzZWNvbmRlbicsXHJcbiAgICBzcyA6ICclZCBzZWNvbmRlbicsXHJcbiAgICBtIDogJ8ODwqnDg8KpbiBtaW51dXQnLFxyXG4gICAgbW0gOiAnJWQgbWludXRlbicsXHJcbiAgICBoIDogJ8ODwqnDg8KpbiB1dXInLFxyXG4gICAgaGggOiAnJWQgdXVyJyxcclxuICAgIGQgOiAnw4PCqcODwqluIGRhZycsXHJcbiAgICBkZCA6ICclZCBkYWdlbicsXHJcbiAgICBNIDogJ8ODwqnDg8KpbiBtYWFuZCcsXHJcbiAgICBNTSA6ICclZCBtYWFuZGVuJyxcclxuICAgIHkgOiAnw4PCqcODwqluIGphYXInLFxyXG4gICAgeXkgOiAnJWQgamFhcidcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfShzdGV8ZGUpLyxcclxuICBvcmRpbmFsIChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgcmV0dXJuIG51bSArICgobnVtID09PSAxIHx8IG51bSA9PT0gOCB8fCBudW0gPj0gMjApID8gJ3N0ZScgOiAnZGUnKTtcclxuICB9LFxyXG4gIHdlZWsgOiB7XHJcbiAgICBkb3cgOiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveSA6IDQgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDR0aCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0TW9udGggfSBmcm9tICcuLi91dGlscy9kYXRlLWdldHRlcnMnO1xyXG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBQb2xpc2ggW3BsXVxyXG4vLyEgYXV0aG9yIDogUmFmYWwgSGlyc3ogOiBodHRwczovL2dpdGh1Yi5jb20vZXZvTFxyXG5cclxubGV0IG1vbnRoc05vbWluYXRpdmUgPSAnc3R5Y3plw4XChF9sdXR5X21hcnplY19rd2llY2llw4XChF9tYWpfY3plcndpZWNfbGlwaWVjX3NpZXJwaWXDhcKEX3dyemVzaWXDhcKEX3Bhw4XCumR6aWVybmlrX2xpc3RvcGFkX2dydWR6aWXDhcKEJy5zcGxpdCgnXycpO1xyXG5sZXQgbW9udGhzU3ViamVjdGl2ZSA9ICdzdHljem5pYV9sdXRlZ29fbWFyY2Ffa3dpZXRuaWFfbWFqYV9jemVyd2NhX2xpcGNhX3NpZXJwbmlhX3dyemXDhcKbbmlhX3Bhw4XCumR6aWVybmlrYV9saXN0b3BhZGFfZ3J1ZG5pYScuc3BsaXQoJ18nKTtcclxuXHJcbmZ1bmN0aW9uIHBsdXJhbChudW06IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAobnVtICUgMTAgPCA1KSAmJiAobnVtICUgMTAgPiAxKSAmJiAoKH5+KG51bSAvIDEwKSAlIDEwKSAhPT0gMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGxldCByZXN1bHQgPSBudW0gKyAnICc7XHJcbiAgc3dpdGNoIChrZXkpIHtcclxuICAgIGNhc2UgJ3NzJzpcclxuICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdzZWt1bmR5JyA6ICdzZWt1bmQnKTtcclxuICAgIGNhc2UgJ20nOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogJ21pbnV0w4TCmSc7XHJcbiAgICBjYXNlICdtbSc6XHJcbiAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnbWludXR5JyA6ICdtaW51dCcpO1xyXG4gICAgY2FzZSAnaCc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4ID8gJ2dvZHppbmEnIDogJ2dvZHppbsOEwpknO1xyXG4gICAgY2FzZSAnaGgnOlxyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2dvZHppbnknIDogJ2dvZHppbicpO1xyXG4gICAgY2FzZSAnTU0nOlxyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ21pZXNpw4TChWNlJyA6ICdtaWVzacOEwpljeScpO1xyXG4gICAgY2FzZSAneXknOlxyXG4gICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2xhdGEnIDogJ2xhdCcpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHBsTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdwbCcsXHJcbiAgbW9udGhzKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCBpc1VUQz86IGJvb2xlYW4pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICBpZiAoIWRhdGUpIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc05vbWluYXRpdmU7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1hdCA9PT0gJycpIHtcclxuICAgICAgLy8gSGFjazogaWYgZm9ybWF0IGVtcHR5IHdlIGtub3cgdGhpcyBpcyB1c2VkIHRvIGdlbmVyYXRlXHJcbiAgICAgIC8vIFJlZ0V4cCBieSBtb21lbnQuIEdpdmUgdGhlbiBiYWNrIGJvdGggdmFsaWQgZm9ybXMgb2YgbW9udGhzXHJcbiAgICAgIC8vIGluIFJlZ0V4cCByZWFkeSBmb3JtYXQuXHJcbiAgICAgIHJldHVybiAnKCcgKyBtb250aHNTdWJqZWN0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV0gKyAnfCcgKyBtb250aHNOb21pbmF0aXZlW2dldE1vbnRoKGRhdGUsIGlzVVRDKV0gKyAnKSc7XHJcbiAgICB9IGVsc2UgaWYgKC9EIE1NTU0vLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgICByZXR1cm4gbW9udGhzU3ViamVjdGl2ZVtnZXRNb250aChkYXRlLCBpc1VUQyldO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIG1vbnRoc05vbWluYXRpdmVbZ2V0TW9udGgoZGF0ZSwgaXNVVEMpXTtcclxuICAgIH1cclxuICB9LFxyXG4gIG1vbnRoc1Nob3J0OiAnc3R5X2x1dF9tYXJfa3dpX21hal9jemVfbGlwX3NpZV93cnpfcGHDhcK6X2xpc19ncnUnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXM6ICduaWVkemllbGFfcG9uaWVkemlhw4XCgmVrX3d0b3Jla1/DhcKbcm9kYV9jendhcnRla19wacOEwoV0ZWtfc29ib3RhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICduZHpfcG9uX3d0X8OFwptyX2N6d19wdF9zb2InLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdOZF9Qbl9XdF/DhcKacl9Del9QdF9Tbycuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdISDptbScsXHJcbiAgICBMVFM6ICdISDptbTpzcycsXHJcbiAgICBMOiAnREQuTU0uWVlZWScsXHJcbiAgICBMTDogJ0QgTU1NTSBZWVlZJyxcclxuICAgIExMTDogJ0QgTU1NTSBZWVlZIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW0R6acOFwpsgb10gTFQnLFxyXG4gICAgbmV4dERheTogJ1tKdXRybyBvXSBMVCcsXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1tXIG5pZWR6aWVsw4TCmSBvXSBMVCc7XHJcblxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIHJldHVybiAnW1dlIHd0b3JlayBvXSBMVCc7XHJcblxyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiAnW1cgw4XCm3JvZMOEwpkgb10gTFQnO1xyXG5cclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1tXIHBpw4TChXRlayBvXSBMVCc7XHJcblxyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW1cgc29ib3TDhMKZIG9dIExUJztcclxuXHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHJldHVybiAnW1ddIGRkZGQgW29dIExUJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhc3REYXk6ICdbV2N6b3JhaiBvXSBMVCcsXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBuaWVkemllbMOEwpkgb10gTFQnO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiAnW1cgemVzesOFwoLDhMKFIMOFwptyb2TDhMKZIG9dIExUJztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBjendhcnRlayBvXSBMVCc7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdbVyB6ZXN6w4XCgsOEwoUgcGnDhMKFdGVrIG9dIExUJztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCw4TChSBzb2JvdMOEwpkgb10gTFQnO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gJ1tXIHplc3rDhcKCeV0gZGRkZCBbb10gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICd6YSAlcycsXHJcbiAgICBwYXN0OiAnJXMgdGVtdScsXHJcbiAgICBzOiAna2lsa2Egc2VrdW5kJyxcclxuICAgIHNzOiB0cmFuc2xhdGUsXHJcbiAgICBtOiB0cmFuc2xhdGUsXHJcbiAgICBtbTogdHJhbnNsYXRlLFxyXG4gICAgaDogdHJhbnNsYXRlLFxyXG4gICAgaGg6IHRyYW5zbGF0ZSxcclxuICAgIGQ6ICcxIGR6aWXDhcKEJyxcclxuICAgIGRkOiAnJWQgZG5pJyxcclxuICAgIE06ICdtaWVzacOEwoVjJyxcclxuICAgIE1NOiB0cmFuc2xhdGUsXHJcbiAgICB5OiAncm9rJyxcclxuICAgIHl5OiB0cmFuc2xhdGVcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXHJcbiAgb3JkaW5hbDogJyVkLicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBQb3J0dWd1ZXNlIChCcmF6aWwpIFtwdC1icl1cclxuLy8hIGF1dGhvciA6IENhaW8gUmliZWlybyBQZXJlaXJhIDogaHR0cHM6Ly9naXRodWIuY29tL2NhaW8tcmliZWlyby1wZXJlaXJhXHJcblxyXG5leHBvcnQgY29uc3QgcHRCckxvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAncHQtYnInLFxyXG4gIG1vbnRoczogJ0phbmVpcm9fRmV2ZXJlaXJvX01hcsODwqdvX0FicmlsX01haW9fSnVuaG9fSnVsaG9fQWdvc3RvX1NldGVtYnJvX091dHVicm9fTm92ZW1icm9fRGV6ZW1icm8nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICdKYW5fRmV2X01hcl9BYnJfTWFpX0p1bl9KdWxfQWdvX1NldF9PdXRfTm92X0Rleicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ0RvbWluZ29fU2VndW5kYS1mZWlyYV9UZXLDg8KnYS1mZWlyYV9RdWFydGEtZmVpcmFfUXVpbnRhLWZlaXJhX1NleHRhLWZlaXJhX1PDg8KhYmFkbycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnRG9tX1NlZ19UZXJfUXVhX1F1aV9TZXhfU8ODwqFiJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnRG9fMsOCwqpfM8OCwqpfNMOCwqpfNcOCwqpfNsOCwqpfU8ODwqEnLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNQYXJzZUV4YWN0OiB0cnVlLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBbZGVdIE1NTU0gW2RlXSBZWVlZJyxcclxuICAgIExMTDogJ0QgW2RlXSBNTU1NIFtkZV0gWVlZWSBbw4PCoHNdIEhIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIFtkZV0gTU1NTSBbZGVdIFlZWVkgW8ODwqBzXSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW0hvamUgw4PCoHNdIExUJyxcclxuICAgIG5leHREYXk6ICdbQW1hbmjDg8KjIMODwqBzXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW8ODwqBzXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW09udGVtIMODwqBzXSBMVCcsXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHJldHVybiAoZ2V0RGF5T2ZXZWVrKGRhdGUpID09PSAwIHx8IGdldERheU9mV2VlayhkYXRlKSA9PT0gNikgP1xyXG4gICAgICAgICdbw4PCmmx0aW1vXSBkZGRkIFvDg8Kgc10gTFQnIDogLy8gU2F0dXJkYXkgKyBTdW5kYXlcclxuICAgICAgICAnW8ODwppsdGltYV0gZGRkZCBbw4PCoHNdIExUJzsgLy8gTW9uZGF5IC0gRnJpZGF5XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdlbSAlcycsXHJcbiAgICBwYXN0OiAnJXMgYXRyw4PCoXMnLFxyXG4gICAgczogJ3BvdWNvcyBzZWd1bmRvcycsXHJcbiAgICBzczogJyVkIHNlZ3VuZG9zJyxcclxuICAgIG06ICd1bSBtaW51dG8nLFxyXG4gICAgbW06ICclZCBtaW51dG9zJyxcclxuICAgIGg6ICd1bWEgaG9yYScsXHJcbiAgICBoaDogJyVkIGhvcmFzJyxcclxuICAgIGQ6ICd1bSBkaWEnLFxyXG4gICAgZGQ6ICclZCBkaWFzJyxcclxuICAgIE06ICd1bSBtw4PCqnMnLFxyXG4gICAgTU06ICclZCBtZXNlcycsXHJcbiAgICB5OiAndW0gYW5vJyxcclxuICAgIHl5OiAnJWQgYW5vcydcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfcOCwrovLFxyXG4gIG9yZGluYWw6ICclZMOCwronXHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8gISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8gISBsb2NhbGUgOiBSb21hbmlhbiBbcm9dXHJcbi8vISBhdXRob3IgOiBWbGFkIEd1cmRpZ2EgOiBodHRwczovL2dpdGh1Yi5jb20vZ3VyZGlnYVxyXG4vLyEgYXV0aG9yIDogVmFsZW50aW4gQWdhY2hpIDogaHR0cHM6Ly9naXRodWIuY29tL2F2YWx5XHJcbi8vICEgYXV0aG9yIDogRWFybGUgd2hpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS81ZWFybGVcclxuXHJcbmZ1bmN0aW9uIHJlbGF0aXZlVGltZVdpdGhQbHVyYWwobnVtOiBudW1iZXIsIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0OiB7W2tleTpzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgc3M6ICdzZWN1bmRlJyxcclxuICAgIG1tOiAnbWludXRlJyxcclxuICAgIGhoOiAnb3JlJyxcclxuICAgIGRkOiAnemlsZScsXHJcbiAgICBNTTogJ2x1bmknLFxyXG4gICAgeXk6ICdhbmknXHJcbiAgfTtcclxuXHJcbiAgbGV0IHNlcGFyYXRvciA9ICcgJztcclxuICBpZiAobnVtICUgMTAwID49IDIwIHx8IChudW0gPj0gMTAwICYmIG51bSAlIDEwMCA9PT0gMCkpIHtcclxuICAgIHNlcGFyYXRvciA9ICcgZGUgJztcclxuICB9XHJcbiAgcmV0dXJuIG51bSArIHNlcGFyYXRvciArIGZvcm1hdFtrZXldO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJvTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdybycsXHJcbiAgbW9udGhzOiAnaWFudWFyaWVfZmVicnVhcmllX21hcnRpZV9hcHJpbGllX21haV9pdW5pZV9pdWxpZV9hdWd1c3Rfc2VwdGVtYnJpZV9vY3RvbWJyaWVfbm9pZW1icmllX2RlY2VtYnJpZScuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ2lhbi5fZmVici5fbWFydC5fYXByLl9tYWlfaXVuLl9pdWwuX2F1Zy5fc2VwdC5fb2N0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ2R1bWluaWPDhMKDX2x1bmlfbWFyw4jCm2lfbWllcmN1cmlfam9pX3ZpbmVyaV9zw4PCom1iw4TCg3TDhMKDJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICdEdW1fTHVuX01hcl9NaWVfSm9pX1Zpbl9Tw4PCom0nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICdEdV9MdV9NYV9NaV9Kb19WaV9Tw4PCoicuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBIOm1tJyxcclxuICAgIExMTEw6ICdkZGRkLCBEIE1NTU0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbYXppIGxhXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW23Dg8KiaW5lIGxhXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ2RkZGQgW2xhXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW2llcmkgbGFdIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW2Zvc3RhXSBkZGRkIFtsYV0gTFQnLFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdwZXN0ZSAlcycsXHJcbiAgICBwYXN0OiAnJXMgw4PCrm4gdXJtw4TCgycsXHJcbiAgICBzOiAnY8ODwqJ0ZXZhIHNlY3VuZGUnLFxyXG4gICAgc3M6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICBtOiAndW4gbWludXQnLFxyXG4gICAgbW06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICBoOiAnbyBvcsOEwoMnLFxyXG4gICAgaGg6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICBkOiAnbyB6aScsXHJcbiAgICBkZDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIE06ICdvIGx1bsOEwoMnLFxyXG4gICAgTU06IHJlbGF0aXZlVGltZVdpdGhQbHVyYWwsXHJcbiAgICB5OiAndW4gYW4nLFxyXG4gICAgeXk6IHJlbGF0aXZlVGltZVdpdGhQbHVyYWxcclxuICB9LFxyXG4gIHdlZWs6IHtcclxuICAgIGRvdzogMSwgLy8gTW9uZGF5IGlzIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsuXHJcbiAgICBkb3k6IDcgIC8vIFRoZSB3ZWVrIHRoYXQgY29udGFpbnMgSmFuIDFzdCBpcyB0aGUgZmlyc3Qgd2VlayBvZiB0aGUgeWVhci5cclxuICB9XHJcbn07XHJcbiIsIi8vIHRzbGludDpkaXNhYmxlOmNvbW1lbnQtZm9ybWF0IGJpbmFyeS1leHByZXNzaW9uLW9wZXJhbmQtb3JkZXIgbWF4LWxpbmUtbGVuZ3RoXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2UgcHJlZmVyLXRlbXBsYXRlIGN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1zaGFkb3dlZC12YXJpYWJsZSBzd2l0Y2gtZGVmYXVsdCBwcmVmZXItY29uc3RcclxuLy8gdHNsaW50OmRpc2FibGU6b25lLXZhcmlhYmxlLXBlci1kZWNsYXJhdGlvbiBuZXdsaW5lLWJlZm9yZS1yZXR1cm5cclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgZ2V0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xyXG5pbXBvcnQgeyBnZXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBSdXNzaWFuIFtydV1cclxuLy8hIGF1dGhvciA6IFZpa3Rvcm1pbmF0b3IgOiBodHRwczovL2dpdGh1Yi5jb20vVmlrdG9ybWluYXRvclxyXG4vLyEgQXV0aG9yIDogTWVuZWxpb24gRWxlbnPDg8K6bGUgOiBodHRwczovL2dpdGh1Yi5jb20vT2lyZVxyXG4vLyEgYXV0aG9yIDogw5DCmsOQwr7DkcKAw5DCtcOQwr3DkMKxw5DCtcORwoDDkMKzIMOQwpzDkMKww5HCgMOQwrogOiBodHRwczovL2dpdGh1Yi5jb20vc29ja2V0cGFpclxyXG5cclxuZnVuY3Rpb24gcGx1cmFsKHdvcmQ6IHN0cmluZywgbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIGxldCBmb3JtcyA9IHdvcmQuc3BsaXQoJ18nKTtcclxuICByZXR1cm4gbnVtICUgMTAgPT09IDEgJiYgbnVtICUgMTAwICE9PSAxMSA/IGZvcm1zWzBdIDogKG51bSAlIDEwID49IDIgJiYgbnVtICUgMTAgPD0gNCAmJiAobnVtICUgMTAwIDwgMTAgfHwgbnVtICUgMTAwID49IDIwKSA/IGZvcm1zWzFdIDogZm9ybXNbMl0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsKG51bTogbnVtYmVyLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgbGV0IGZvcm1hdDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICBzczogd2l0aG91dFN1ZmZpeCA/ICfDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkMKwX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwotfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyA6ICfDkcKBw5DCtcOQwrrDkcKDw5DCvcOQwrTDkcKDX8ORwoHDkMK1w5DCusORwoPDkMK9w5DCtMORwotfw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyxcclxuICAgIG1tOiB3aXRob3V0U3VmZml4ID8gJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5DCsF/DkMK8w5DCuMOQwr3DkcKDw5HCgsORwotfw5DCvMOQwrjDkMK9w5HCg8ORwoInIDogJ8OQwrzDkMK4w5DCvcORwoPDkcKCw5HCg1/DkMK8w5DCuMOQwr3DkcKDw5HCgsORwotfw5DCvMOQwrjDkMK9w5HCg8ORwoInLFxyXG4gICAgaGg6ICfDkcKHw5DCsMORwoFfw5HCh8OQwrDDkcKBw5DCsF/DkcKHw5DCsMORwoHDkMK+w5DCsicsXHJcbiAgICBkZDogJ8OQwrTDkMK1w5DCvcORwoxfw5DCtMOQwr3DkcKPX8OQwrTDkMK9w5DCtcOQwrknLFxyXG4gICAgTU06ICfDkMK8w5DCtcORwoHDkcKPw5HChl/DkMK8w5DCtcORwoHDkcKPw5HChsOQwrBfw5DCvMOQwrXDkcKBw5HCj8ORwobDkMK1w5DCsicsXHJcbiAgICB5eTogJ8OQwrPDkMK+w5DCtF/DkMKzw5DCvsOQwrTDkMKwX8OQwrvDkMK1w5HCgidcclxuICB9O1xyXG4gIGlmIChrZXkgPT09ICdtJykge1xyXG4gICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnw5DCvMOQwrjDkMK9w5HCg8ORwoLDkMKwJyA6ICfDkMK8w5DCuMOQwr3DkcKDw5HCgsORwoMnO1xyXG4gIH1cclxuICByZXR1cm4gbnVtICsgJyAnICsgcGx1cmFsKGZvcm1hdFtrZXldLCArbnVtKTtcclxufVxyXG5cclxubGV0IG1vbnRoc1BhcnNlID0gWy9ew5HCj8OQwr3DkMKyL2ksIC9ew5HChMOQwrXDkMKyL2ksIC9ew5DCvMOQwrDDkcKAL2ksIC9ew5DCsMOQwr/DkcKAL2ksIC9ew5DCvMOQwrBbw5DCucORwo9dL2ksIC9ew5DCuMORwo7DkMK9L2ksIC9ew5DCuMORwo7DkMK7L2ksIC9ew5DCsMOQwrLDkMKzL2ksIC9ew5HCgcOQwrXDkMK9L2ksIC9ew5DCvsOQwrrDkcKCL2ksIC9ew5DCvcOQwr7DkcKPL2ksIC9ew5DCtMOQwrXDkMK6L2ldO1xyXG5cclxuLy8gaHR0cDovL25ldy5ncmFtb3RhLnJ1L3NwcmF2a2EvcnVsZXMvMTM5LXByb3AgOiDDgsKnIDEwM1xyXG4vLyDDkMKhw5DCvsOQwrrDkcKAw5DCsMORwonDkMK1w5DCvcOQwrjDkcKPIMOQwrzDkMK1w5HCgcORwo/DkcKGw5DCtcOQwrI6IGh0dHA6Ly9uZXcuZ3JhbW90YS5ydS9zcHJhdmthL2J1cm8vc2VhcmNoLWFuc3dlcj9zPTI0MjYzN1xyXG4vLyBDTERSIGRhdGE6ICAgICAgICAgIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvY2xkci9jaGFydHMvMjgvc3VtbWFyeS9ydS5odG1sIzE3NTNcclxuZXhwb3J0IGNvbnN0IHJ1TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdydScsXHJcbiAgbW9udGhzOiB7XHJcbiAgICBmb3JtYXQ6ICfDkcKPw5DCvcOQwrLDkMKww5HCgMORwo9fw5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7w5HCj1/DkMK8w5DCsMORwoDDkcKCw5DCsF/DkMKww5DCv8ORwoDDkMK1w5DCu8ORwo9fw5DCvMOQwrDDkcKPX8OQwrjDkcKOw5DCvcORwo9fw5DCuMORwo7DkMK7w5HCj1/DkMKww5DCssOQwrPDkcKDw5HCgcORwoLDkMKwX8ORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoDDkcKPX8OQwr7DkMK6w5HCgsORwo/DkMKxw5HCgMORwo9fw5DCvcOQwr7DkcKPw5DCscORwoDDkcKPX8OQwrTDkMK1w5DCusOQwrDDkMKxw5HCgMORwo8nLnNwbGl0KCdfJyksXHJcbiAgICBzdGFuZGFsb25lOiAnw5HCj8OQwr3DkMKyw5DCsMORwoDDkcKMX8ORwoTDkMK1w5DCssORwoDDkMKww5DCu8ORwoxfw5DCvMOQwrDDkcKAw5HCgl/DkMKww5DCv8ORwoDDkMK1w5DCu8ORwoxfw5DCvMOQwrDDkMK5X8OQwrjDkcKOw5DCvcORwoxfw5DCuMORwo7DkMK7w5HCjF/DkMKww5DCssOQwrPDkcKDw5HCgcORwoJfw5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgMORwoxfw5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAw5HCjF/DkMK9w5DCvsORwo/DkMKxw5HCgMORwoxfw5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAw5HCjCcuc3BsaXQoJ18nKVxyXG4gIH0sXHJcbiAgbW9udGhzU2hvcnQ6IHtcclxuICAgIC8vIMOQwr/DkMK+IENMRFIgw5DCuMOQwrzDkMK1w5DCvcOQwr3DkMK+IFwiw5DCuMORwo7DkMK7LlwiIMOQwrggXCLDkMK4w5HCjsOQwr0uXCIsIMOQwr3DkMK+IMOQwrrDkMKww5DCusOQwr7DkMK5IMORwoHDkMK8w5HCi8ORwoHDkMK7IMOQwrzDkMK1w5DCvcORwo/DkcKCw5HCjCDDkMKxw5HCg8OQwrrDkMKyw5HCgyDDkMK9w5DCsCDDkcKCw5DCvsORwofDkMK6w5HCgyA/XHJcbiAgICBmb3JtYXQ6ICfDkcKPw5DCvcOQwrIuX8ORwoTDkMK1w5DCssORwoAuX8OQwrzDkMKww5HCgC5fw5DCsMOQwr/DkcKALl/DkMK8w5DCsMORwo9fw5DCuMORwo7DkMK9w5HCj1/DkMK4w5HCjsOQwrvDkcKPX8OQwrDDkMKyw5DCsy5fw5HCgcOQwrXDkMK9w5HCgi5fw5DCvsOQwrrDkcKCLl/DkMK9w5DCvsORwo/DkMKxLl/DkMK0w5DCtcOQwrouJy5zcGxpdCgnXycpLFxyXG4gICAgc3RhbmRhbG9uZTogJ8ORwo/DkMK9w5DCsi5fw5HChMOQwrXDkMKyw5HCgC5fw5DCvMOQwrDDkcKAw5HCgl/DkMKww5DCv8ORwoAuX8OQwrzDkMKww5DCuV/DkMK4w5HCjsOQwr3DkcKMX8OQwrjDkcKOw5DCu8ORwoxfw5DCsMOQwrLDkMKzLl/DkcKBw5DCtcOQwr3DkcKCLl/DkMK+w5DCusORwoIuX8OQwr3DkMK+w5HCj8OQwrEuX8OQwrTDkMK1w5DCui4nLnNwbGl0KCdfJylcclxuICB9LFxyXG4gIHdlZWtkYXlzOiB7XHJcbiAgICBzdGFuZGFsb25lOiAnw5DCssOQwr7DkcKBw5DCusORwoDDkMK1w5HCgcOQwrXDkMK9w5HCjMOQwrVfw5DCv8OQwr7DkMK9w5DCtcOQwrTDkMK1w5DCu8ORwozDkMK9w5DCuMOQwrpfw5DCssORwoLDkMK+w5HCgMOQwr3DkMK4w5DCul/DkcKBw5HCgMOQwrXDkMK0w5DCsF/DkcKHw5DCtcORwoLDkMKyw5DCtcORwoDDkMKzX8OQwr/DkcKPw5HCgsOQwr3DkMK4w5HChsOQwrBfw5HCgcORwoPDkMKxw5DCscOQwr7DkcKCw5DCsCcuc3BsaXQoJ18nKSxcclxuICAgIGZvcm1hdDogJ8OQwrLDkMK+w5HCgcOQwrrDkcKAw5DCtcORwoHDkMK1w5DCvcORwozDkMK1X8OQwr/DkMK+w5DCvcOQwrXDkMK0w5DCtcOQwrvDkcKMw5DCvcOQwrjDkMK6X8OQwrLDkcKCw5DCvsORwoDDkMK9w5DCuMOQwrpfw5HCgcORwoDDkMK1w5DCtMORwoNfw5HCh8OQwrXDkcKCw5DCssOQwrXDkcKAw5DCs1/DkMK/w5HCj8ORwoLDkMK9w5DCuMORwobDkcKDX8ORwoHDkcKDw5DCscOQwrHDkMK+w5HCgsORwoMnLnNwbGl0KCdfJyksXHJcbiAgICBpc0Zvcm1hdDogL1xcWyA/W8OQwpLDkMKyXSA/KD86w5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKDw5HCjnzDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5HCg8ORwo58w5HCjcORwoLDkcKDKT8gP1xcXSA/ZGRkZC9cclxuICB9LFxyXG4gIHdlZWtkYXlzU2hvcnQ6ICfDkMKyw5HCgV/DkMK/w5DCvV/DkMKyw5HCgl/DkcKBw5HCgF/DkcKHw5HCgl/DkMK/w5HCgl/DkcKBw5DCsScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ8OQwrLDkcKBX8OQwr/DkMK9X8OQwrLDkcKCX8ORwoHDkcKAX8ORwofDkcKCX8OQwr/DkcKCX8ORwoHDkMKxJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1BhcnNlLFxyXG4gIGxvbmdNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcbiAgc2hvcnRNb250aHNQYXJzZTogbW9udGhzUGFyc2UsXHJcblxyXG4gIC8vIMOQwr/DkMK+w5DCu8OQwr3DkcKLw5DCtSDDkMK9w5DCsMOQwrfDkMKyw5DCsMOQwr3DkMK4w5HCjyDDkcKBIMOQwr/DkMKww5DCtMOQwrXDkMK2w5DCsMOQwrzDkMK4LCDDkMK/w5DCviDDkcKCw5HCgMOQwrggw5DCscORwoPDkMK6w5DCssORwossIMOQwrTDkMK7w5HCjyDDkMK9w5DCtcOQwrrDkMK+w5HCgsOQwr7DkcKAw5HCi8ORwoUsIMOQwr/DkMK+IDQgw5DCscORwoPDkMK6w5DCssORwossIMORwoHDkMK+w5DCusORwoDDkMKww5HCicOQwrXDkMK9w5DCuMORwo8gw5HCgSDDkcKCw5DCvsORwofDkMK6w5DCvsOQwrkgw5DCuCDDkMKxw5DCtcOQwrcgw5HCgsOQwr7DkcKHw5DCusOQwrhcclxuICBtb250aHNSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCjMORwo9dfMORwo/DkMK9w5DCslxcLj98w5HChMOQwrXDkMKyw5HCgMOQwrDDkMK7W8ORwozDkcKPXXzDkcKEw5DCtcOQwrLDkcKAP1xcLj98w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrzDkMKww5HCgFxcLj98w5DCsMOQwr/DkcKAw5DCtcOQwrtbw5HCjMORwo9dfMOQwrDDkMK/w5HCgFxcLj98w5DCvMOQwrBbw5DCucORwo9dfMOQwrjDkcKOw5DCvVvDkcKMw5HCj118w5DCuMORwo7DkMK9XFwuP3zDkMK4w5HCjsOQwrtbw5HCjMORwo9dfMOQwrjDkcKOw5DCu1xcLj98w5DCsMOQwrLDkMKzw5HCg8ORwoHDkcKCw5DCsD98w5DCsMOQwrLDkMKzXFwuP3zDkcKBw5DCtcOQwr3DkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkcKBw5DCtcOQwr3DkcKCP1xcLj98w5DCvsOQwrrDkcKCw5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK+w5DCusORwoJcXC4/fMOQwr3DkMK+w5HCj8OQwrHDkcKAW8ORwozDkcKPXXzDkMK9w5DCvsORwo/DkMKxP1xcLj98w5DCtMOQwrXDkMK6w5DCsMOQwrHDkcKAW8ORwozDkcKPXXzDkMK0w5DCtcOQwrpcXC4/KS9pLFxyXG5cclxuICAvLyDDkMK6w5DCvsOQwr/DkMK4w5HCjyDDkMK/w5HCgMOQwrXDkMK0w5HCi8OQwrTDkcKDw5HCicOQwrXDkMKzw5DCvlxyXG4gIG1vbnRoc1Nob3J0UmVnZXg6IC9eKMORwo/DkMK9w5DCssOQwrDDkcKAW8ORwozDkcKPXXzDkcKPw5DCvcOQwrJcXC4/fMORwoTDkMK1w5DCssORwoDDkMKww5DCu1vDkcKMw5HCj118w5HChMOQwrXDkMKyw5HCgD9cXC4/fMOQwrzDkMKww5HCgMORwoLDkMKwP3zDkMK8w5DCsMORwoBcXC4/fMOQwrDDkMK/w5HCgMOQwrXDkMK7W8ORwozDkcKPXXzDkMKww5DCv8ORwoBcXC4/fMOQwrzDkMKwW8OQwrnDkcKPXXzDkMK4w5HCjsOQwr1bw5HCjMORwo9dfMOQwrjDkcKOw5DCvVxcLj98w5DCuMORwo7DkMK7W8ORwozDkcKPXXzDkMK4w5HCjsOQwrtcXC4/fMOQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrA/fMOQwrDDkMKyw5DCs1xcLj98w5HCgcOQwrXDkMK9w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5HCgcOQwrXDkMK9w5HCgj9cXC4/fMOQwr7DkMK6w5HCgsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvsOQwrrDkcKCXFwuP3zDkMK9w5DCvsORwo/DkMKxw5HCgFvDkcKMw5HCj118w5DCvcOQwr7DkcKPw5DCsT9cXC4/fMOQwrTDkMK1w5DCusOQwrDDkMKxw5HCgFvDkcKMw5HCj118w5DCtMOQwrXDkMK6XFwuPykvaSxcclxuXHJcbiAgLy8gw5DCv8OQwr7DkMK7w5DCvcORwovDkMK1IMOQwr3DkMKww5DCt8OQwrLDkMKww5DCvcOQwrjDkcKPIMORwoEgw5DCv8OQwrDDkMK0w5DCtcOQwrbDkMKww5DCvMOQwrhcclxuICBtb250aHNTdHJpY3RSZWdleDogL14ow5HCj8OQwr3DkMKyw5DCsMORwoBbw5HCj8ORwoxdfMORwoTDkMK1w5DCssORwoDDkMKww5DCu1vDkcKPw5HCjF18w5DCvMOQwrDDkcKAw5HCgsOQwrA/fMOQwrDDkMK/w5HCgMOQwrXDkMK7W8ORwo/DkcKMXXzDkMK8w5DCsFvDkcKPw5DCuV18w5DCuMORwo7DkMK9W8ORwo/DkcKMXXzDkMK4w5HCjsOQwrtbw5HCj8ORwoxdfMOQwrDDkMKyw5DCs8ORwoPDkcKBw5HCgsOQwrA/fMORwoHDkMK1w5DCvcORwoLDkcKPw5DCscORwoBbw5HCj8ORwoxdfMOQwr7DkMK6w5HCgsORwo/DkMKxw5HCgFvDkcKPw5HCjF18w5DCvcOQwr7DkcKPw5DCscORwoBbw5HCj8ORwoxdfMOQwrTDkMK1w5DCusOQwrDDkMKxw5HCgFvDkcKPw5HCjF0pL2ksXHJcblxyXG4gIC8vIMOQwpLDkcKLw5HCgMOQwrDDkMK2w5DCtcOQwr3DkMK4w5DCtSwgw5DCusOQwr7DkcKCw5DCvsORwoDDkMK+w5DCtSDDkcKBw5DCvsOQwr7DkcKCw5DCssOQwrXDkcKBw5HCgsOQwrLDkcKDw5DCtcORwoIgw5HCgsOQwr7DkMK7w5HCjMOQwrrDkMK+IMORwoHDkMK+w5DCusORwoDDkMKww5HCicORwpHDkMK9w5DCvcORwovDkMK8IMORwoTDkMK+w5HCgMOQwrzDkMKww5DCvFxyXG4gIG1vbnRoc1Nob3J0U3RyaWN0UmVnZXg6IC9eKMORwo/DkMK9w5DCslxcLnzDkcKEw5DCtcOQwrLDkcKAP1xcLnzDkMK8w5DCsMORwoBbw5HCgi5dfMOQwrDDkMK/w5HCgFxcLnzDkMK8w5DCsFvDkcKPw5DCuV18w5DCuMORwo7DkMK9W8ORwozDkcKPLl18w5DCuMORwo7DkMK7W8ORwozDkcKPLl18w5DCsMOQwrLDkMKzXFwufMORwoHDkMK1w5DCvcORwoI/XFwufMOQwr7DkMK6w5HCglxcLnzDkMK9w5DCvsORwo/DkMKxP1xcLnzDkMK0w5DCtcOQwrpcXC4pL2ksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVkgw5DCsy4nLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgw5DCsy4sIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIMOQwrMuLCBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbw5DCocOQwrXDkMKzw5DCvsOQwrTDkMK9w5HCjyDDkMKyXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW8OQwpfDkMKww5DCssORwoLDkcKAw5DCsCDDkMKyXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OQwpLDkcKHw5DCtcORwoDDkMKwIMOQwrJdIExUJyxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUsIG5vdzogRGF0ZSkge1xyXG4gICAgICBpZiAoZ2V0V2Vlayhub3cpICE9PSBnZXRXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5DCtcOQwrVdIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5DCuMOQwrldIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkcKBw5DCu8OQwrXDkMK0w5HCg8ORwo7DkcKJw5HCg8ORwo5dIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGdldERheU9mV2VlayhkYXRlKSA9PT0gMikge1xyXG4gICAgICAgICAgcmV0dXJuICdbw5DCksOQwr5dIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdbw5DCkl0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhc3RXZWVrKGRhdGU6IERhdGUsIG5vdzogRGF0ZSkge1xyXG4gICAgICBpZiAoZ2V0V2Vlayhub3cpICE9PSBnZXRXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgcmV0dXJuICdbw5DCkiDDkMK/w5HCgMOQwr7DkcKIw5DCu8OQwr7DkMK1XSBkZGRkIFvDkMKyXSBMVCc7XHJcbiAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIHJldHVybiAnW8OQwpIgw5DCv8ORwoDDkMK+w5HCiMOQwrvDkcKLw5DCuV0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICByZXR1cm4gJ1vDkMKSIMOQwr/DkcKAw5DCvsORwojDkMK7w5HCg8ORwo5dIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKGdldERheU9mV2VlayhkYXRlKSA9PT0gMikge1xyXG4gICAgICAgICAgcmV0dXJuICdbw5DCksOQwr5dIGRkZGQgW8OQwrJdIExUJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICdbw5DCkl0gZGRkZCBbw5DCsl0gTFQnO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnw5HCh8OQwrXDkcKAw5DCtcOQwrcgJXMnLFxyXG4gICAgcGFzdDogJyVzIMOQwr3DkMKww5DCt8OQwrDDkMK0JyxcclxuICAgIHM6ICfDkMK9w5DCtcORwoHDkMK6w5DCvsOQwrvDkcKMw5DCusOQwr4gw5HCgcOQwrXDkMK6w5HCg8OQwr3DkMK0JyxcclxuICAgIHNzOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgbTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIG1tOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgaDogJ8ORwofDkMKww5HCgScsXHJcbiAgICBoaDogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbCxcclxuICAgIGQ6ICfDkMK0w5DCtcOQwr3DkcKMJyxcclxuICAgIGRkOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgTTogJ8OQwrzDkMK1w5HCgcORwo/DkcKGJyxcclxuICAgIE1NOiByZWxhdGl2ZVRpbWVXaXRoUGx1cmFsLFxyXG4gICAgeTogJ8OQwrPDkMK+w5DCtCcsXHJcbiAgICB5eTogcmVsYXRpdmVUaW1lV2l0aFBsdXJhbFxyXG4gIH0sXHJcbiAgbWVyaWRpZW1QYXJzZTogL8OQwr3DkMK+w5HCh8OQwrh8w5HCg8ORwoLDkcKAw5DCsHzDkMK0w5DCvcORwo98w5DCssOQwrXDkcKHw5DCtcORwoDDkMKwL2ksXHJcbiAgaXNQTShpbnB1dCkge1xyXG4gICAgcmV0dXJuIC9eKMOQwrTDkMK9w5HCj3zDkMKyw5DCtcORwofDkMK1w5HCgMOQwrApJC8udGVzdChpbnB1dCk7XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGlmIChob3VyIDwgNCkge1xyXG4gICAgICByZXR1cm4gJ8OQwr3DkMK+w5HCh8OQwrgnO1xyXG4gICAgfSBlbHNlIGlmIChob3VyIDwgMTIpIHtcclxuICAgICAgcmV0dXJuICfDkcKDw5HCgsORwoDDkMKwJztcclxuICAgIH0gZWxzZSBpZiAoaG91ciA8IDE3KSB7XHJcbiAgICAgIHJldHVybiAnw5DCtMOQwr3DkcKPJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAnw5DCssOQwrXDkcKHw5DCtcORwoDDkMKwJztcclxuICAgIH1cclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfS0ow5DCuXzDkMKzw5DCvnzDkcKPKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIsIHBlcmlvZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICBjYXNlICdkJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJy3DkMK5JztcclxuICAgICAgY2FzZSAnRCc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICctw5DCs8OQwr4nO1xyXG4gICAgICBjYXNlICd3JzpcclxuICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgcmV0dXJuIG51bSArICctw5HCjyc7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFNsb3ZhayBbc2tdXHJcbi8vISBhdXRob3IgOiBKb3plZiBQYcOFwr5pbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9hdGlyaXNcclxuXHJcbmNvbnN0IG1vbnRocyA9ICdqYW51w4PCoXJfZmVicnXDg8Khcl9tYXJlY19hcHLDg8KtbF9tw4PCoWpfasODwrpuX2rDg8K6bF9hdWd1c3Rfc2VwdGVtYmVyX29rdMODwrNiZXJfbm92ZW1iZXJfZGVjZW1iZXInLnNwbGl0KCdfJyk7XHJcbmNvbnN0IG1vbnRoc1Nob3J0ID0gJ2phbl9mZWJfbWFyX2Fwcl9tw4PCoWpfasODwrpuX2rDg8K6bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpO1xyXG5cclxuZnVuY3Rpb24gcGx1cmFsKG51bTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChudW0gPiAxKSAmJiAobnVtIDwgNSkgJiYgKH5+KG51bSAvIDEwKSAhPT0gMSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zbGF0ZShudW06IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICBjb25zdCByZXN1bHQgPSBudW0gKyAnICc7XHJcblxyXG4gIHN3aXRjaCAoa2V5KSB7XHJcbiAgICBjYXNlICdzJzovLyBhIGZldyBzZWNvbmRzIC8gaW4gYSBmZXcgc2Vjb25kcyAvIGEgZmV3IHNlY29uZHMgYWdvXHJcbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAncMODwqFyIHNla8ODwrpuZCcgOiAncMODwqFyIHNla3VuZGFtaSc7XHJcbiAgICBjYXNlICdzcyc6Ly8gOSBzZWNvbmRzIC8gaW4gOSBzZWNvbmRzIC8gOSBzZWNvbmRzIGFnb1xyXG4gICAgICBpZiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAocGx1cmFsKG51bSkgPyAnc2VrdW5keScgOiAnc2Vrw4PCum5kJyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdzZWt1bmRhbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ20nOi8vIGEgbWludXRlIC8gaW4gYSBtaW51dGUgLyBhIG1pbnV0ZSBhZ29cclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnbWluw4PCunRhJyA6IChpc0Z1dHVyZSA/ICdtaW7Dg8K6dHUnIDogJ21pbsODwrp0b3UnKTtcclxuICAgIGNhc2UgJ21tJzovLyA5IG1pbnV0ZXMgLyBpbiA5IG1pbnV0ZXMgLyA5IG1pbnV0ZXMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtaW7Dg8K6dHknIDogJ21pbsODwrp0Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICdtaW7Dg8K6dGFtaSc7XHJcbiAgICAgIH1cclxuICAgIC8vIGJyZWFrO1xyXG4gICAgY2FzZSAnaCc6Ly8gYW4gaG91ciAvIGluIGFuIGhvdXIgLyBhbiBob3VyIGFnb1xyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdob2RpbmEnIDogKGlzRnV0dXJlID8gJ2hvZGludScgOiAnaG9kaW5vdScpO1xyXG4gICAgY2FzZSAnaGgnOi8vIDkgaG91cnMgLyBpbiA5IGhvdXJzIC8gOSBob3VycyBhZ29cclxuICAgICAgaWYgKHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUpIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgKHBsdXJhbChudW0pID8gJ2hvZGlueScgOiAnaG9kw4PCrW4nKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0ICsgJ2hvZGluYW1pJztcclxuICAgICAgfVxyXG4gICAgLy8gYnJlYWs7XHJcbiAgICBjYXNlICdkJzovLyBhIGRheSAvIGluIGEgZGF5IC8gYSBkYXkgYWdvXHJcbiAgICAgIHJldHVybiAod2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSkgPyAnZGXDhcKIJyA6ICdkw4XCiG9tJztcclxuICAgIGNhc2UgJ2RkJzovLyA5IGRheXMgLyBpbiA5IGRheXMgLyA5IGRheXMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdkbmknIDogJ2Ruw4PCrScpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnZMOFwohhbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ00nOi8vIGEgbW9udGggLyBpbiBhIG1vbnRoIC8gYSBtb250aCBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdtZXNpYWMnIDogJ21lc2lhY29tJztcclxuICAgIGNhc2UgJ01NJzovLyA5IG1vbnRocyAvIGluIDkgbW9udGhzIC8gOSBtb250aHMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdtZXNpYWNlJyA6ICdtZXNpYWNvdicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAnbWVzaWFjbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICAgIGNhc2UgJ3knOi8vIGEgeWVhciAvIGluIGEgeWVhciAvIGEgeWVhciBhZ29cclxuICAgICAgcmV0dXJuICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSA/ICdyb2snIDogJ3Jva29tJztcclxuICAgIGNhc2UgJ3l5JzovLyA5IHllYXJzIC8gaW4gOSB5ZWFycyAvIDkgeWVhcnMgYWdvXHJcbiAgICAgIGlmICh3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArIChwbHVyYWwobnVtKSA/ICdyb2t5JyA6ICdyb2tvdicpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiByZXN1bHQgKyAncm9rbWknO1xyXG4gICAgICB9XHJcbiAgICAvLyBicmVhaztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBza0xvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAnc2snLFxyXG4gIG1vbnRocyxcclxuICBtb250aHNTaG9ydCxcclxuICB3ZWVrZGF5czogJ25lZGXDhMK+YV9wb25kZWxva191dG9yb2tfc3RyZWRhX8OFwqF0dnJ0b2tfcGlhdG9rX3NvYm90YScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnbmVfcG9fdXRfc3Rfw4XCoXRfcGlfc28nLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNNaW46ICduZV9wb191dF9zdF/DhcKhdF9waV9zbycuc3BsaXQoJ18nKSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQgRC4gTU1NTSBZWVlZIEg6bW0nLFxyXG4gICAgbDogJ0QuIE0uIFlZWVknXHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1tkbmVzIG9dIExUJyxcclxuICAgIG5leHREYXk6ICdbemFqdHJhIG9dIExUJyxcclxuICAgIG5leHRXZWVrKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgICBzd2l0Y2ggKGdldERheU9mV2VlayhkYXRlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgIHJldHVybiAnW3YgbmVkZcOEwr51IG9dIExUJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbb10gTFQnO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiAnW3Ygc3RyZWR1IG9dIExUJztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2byDDhcKhdHZydG9rIG9dIExUJztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICByZXR1cm4gJ1t2IHBpYXRvayBvXSBMVCc7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbdiBzb2JvdHUgb10gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbGFzdERheTogJ1t2w4TCjWVyYSBvXSBMVCcsXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgICAgc3dpdGNoIChnZXREYXlPZldlZWsoZGF0ZSkpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICByZXR1cm4gJ1ttaW51bMODwrogbmVkZcOEwr51IG9dIExUJztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K9XSBkZGRkIFtvXSBMVCc7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgcmV0dXJuICdbbWludWzDg8K6IHN0cmVkdSBvXSBMVCc7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCvV0gZGRkZCBbb10gTFQnO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIHJldHVybiAnW21pbnVsw4PCuiBzb2JvdHUgb10gTFQnO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2FtZUVsc2U6ICdMJ1xyXG4gIH0sXHJcbiAgcmVsYXRpdmVUaW1lOiB7XHJcbiAgICBmdXR1cmU6ICdvICVzJyxcclxuICAgIHBhc3Q6ICdwcmVkICVzJyxcclxuICAgIHM6IHRyYW5zbGF0ZSxcclxuICAgIHNzOiB0cmFuc2xhdGUsXHJcbiAgICBtOiB0cmFuc2xhdGUsXHJcbiAgICBtbTogdHJhbnNsYXRlLFxyXG4gICAgaDogdHJhbnNsYXRlLFxyXG4gICAgaGg6IHRyYW5zbGF0ZSxcclxuICAgIGQ6IHRyYW5zbGF0ZSxcclxuICAgIGRkOiB0cmFuc2xhdGUsXHJcbiAgICBNOiB0cmFuc2xhdGUsXHJcbiAgICBNTTogdHJhbnNsYXRlLFxyXG4gICAgeTogdHJhbnNsYXRlLFxyXG4gICAgeXk6IHRyYW5zbGF0ZVxyXG4gIH0sXHJcbiAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9XFwuLyxcclxuICBvcmRpbmFsOiAnJWQuJyxcclxuICB3ZWVrOiB7XHJcbiAgICBkb3c6IDEsIC8vIE1vbmRheSBpcyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxyXG4gICAgZG95OiA0ICAvLyBUaGUgd2VlayB0aGF0IGNvbnRhaW5zIEphbiA0dGggaXMgdGhlIGZpcnN0IHdlZWsgb2YgdGhlIHllYXIuXHJcbiAgfVxyXG59O1xyXG5cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvYmplY3QtbGl0ZXJhbC1rZXktcXVvdGVzXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IFNsb3ZlbmlhbiBbc2xdXHJcbi8vISBhdXRob3IgOiBtaWhhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9taWhhblxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc1JlbGF0aXZlVGltZShudW1iZXI6IG51bWJlciwgd2l0aG91dFN1ZmZpeDogYm9vbGVhbiwga2V5OiBzdHJpbmcsIGlzRnV0dXJlOiBib29sZWFuKTogc3RyaW5nIHtcclxuICB2YXIgcmVzdWx0ID0gbnVtYmVyICsgJyAnO1xyXG4gIHN3aXRjaCAoa2V5KSB7XHJcbiAgICBjYXNlICdzJzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbmVrYWogc2VrdW5kJyA6ICduZWthaiBzZWt1bmRhbWknO1xyXG4gICAgY2FzZSAnc3MnOlxyXG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggPyAnc2VrdW5kbycgOiAnc2VrdW5kaSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kaScgOiAnc2VrdW5kYWgnO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdzZWt1bmRlJyA6ICdzZWt1bmRhaCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnc2VrdW5kJyA6ICdzZWt1bmQnO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICBjYXNlICdtJzpcclxuICAgICAgcmV0dXJuIHdpdGhvdXRTdWZmaXggPyAnZW5hIG1pbnV0YScgOiAnZW5vIG1pbnV0byc7XHJcbiAgICBjYXNlICdtbSc6XHJcbiAgICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCA/ICdtaW51dGEnIDogJ21pbnV0byc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWludXRpJyA6ICdtaW51dGFtYSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyIDwgNSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0ZScgOiAnbWludXRhbWknO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21pbnV0JyA6ICdtaW51dGFtaSc7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIGNhc2UgJ2gnOlxyXG4gICAgICByZXR1cm4gd2l0aG91dFN1ZmZpeCA/ICdlbmEgdXJhJyA6ICdlbm8gdXJvJztcclxuICAgIGNhc2UgJ2hoJzpcclxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4ID8gJ3VyYScgOiAndXJvJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICd1cmknIDogJ3VyYW1hJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPCA1KSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXJlJyA6ICd1cmFtaSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAndXInIDogJ3VyYW1pJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgY2FzZSAnZCc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VuIGRhbicgOiAnZW5pbSBkbmVtJztcclxuICAgIGNhc2UgJ2RkJzpcclxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2RhbicgOiAnZG5lbSc7XHJcbiAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAyKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnZG5pJyA6ICdkbmV2b21hJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdkbmknIDogJ2RuZXZpJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgY2FzZSAnTSc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VuIG1lc2VjJyA6ICdlbmltIG1lc2VjZW0nO1xyXG4gICAgY2FzZSAnTU0nOlxyXG4gICAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWMnIDogJ21lc2VjZW0nO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA9PT0gMikge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ21lc2VjYScgOiAnbWVzZWNlbWEnO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdtZXNlY2UnIDogJ21lc2VjaSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IHdpdGhvdXRTdWZmaXggfHwgaXNGdXR1cmUgPyAnbWVzZWNldicgOiAnbWVzZWNpJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgY2FzZSAneSc6XHJcbiAgICAgIHJldHVybiB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2VubyBsZXRvJyA6ICdlbmltIGxldG9tJztcclxuICAgIGNhc2UgJ3l5JzpcclxuICAgICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJlc3VsdCArPSB3aXRob3V0U3VmZml4IHx8IGlzRnV0dXJlID8gJ2xldG8nIDogJ2xldG9tJztcclxuICAgICAgfSBlbHNlIGlmIChudW1iZXIgPT09IDIpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRpJyA6ICdsZXRvbWEnO1xyXG4gICAgICB9IGVsc2UgaWYgKG51bWJlciA8IDUpIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXRhJyA6ICdsZXRpJztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgKz0gd2l0aG91dFN1ZmZpeCB8fCBpc0Z1dHVyZSA/ICdsZXQnIDogJ2xldGknO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2xMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3NsJyxcclxuICBtb250aHM6ICdqYW51YXJfZmVicnVhcl9tYXJlY19hcHJpbF9tYWpfanVuaWpfanVsaWpfYXZndXN0X3NlcHRlbWJlcl9va3RvYmVyX25vdmVtYmVyX2RlY2VtYmVyJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnamFuLl9mZWIuX21hci5fYXByLl9tYWouX2p1bi5fanVsLl9hdmcuX3NlcC5fb2t0Ll9ub3YuX2RlYy4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ25lZGVsamFfcG9uZWRlbGpla190b3Jla19zcmVkYV/DhMKNZXRydGVrX3BldGVrX3NvYm90YScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnbmVkLl9wb24uX3Rvci5fc3JlLl/DhMKNZXQuX3BldC5fc29iLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ25lX3BvX3RvX3NyX8OEwo1lX3BlX3NvJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICBsb25nRGF0ZUZvcm1hdDoge1xyXG4gICAgTFQ6ICdIOm1tJyxcclxuICAgIExUUzogJ0g6bW06c3MnLFxyXG4gICAgTDogJ0RELk1NLllZWVknLFxyXG4gICAgTEw6ICdELiBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRC4gTU1NTSBZWVlZIEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQuIE1NTU0gWVlZWSBIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbZGFuZXMgb2JdIExUJyxcclxuICAgIG5leHREYXk6ICdbanV0cmkgb2JdIExUJyxcclxuXHJcbiAgICBuZXh0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgcmV0dXJuICdbdl0gW25lZGVsam9dIFtvYl0gTFQnO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHJldHVybiAnW3ZdIFtzcmVkb10gW29iXSBMVCc7XHJcbiAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgcmV0dXJuICdbdl0gW3NvYm90b10gW29iXSBMVCc7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdbdl0gZGRkZCBbb2JdIExUJztcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxhc3REYXk6ICdbdsOEwo1lcmFqIG9iXSBMVCcsXHJcbiAgICBsYXN0V2VlayhkYXRlOiBEYXRlKSB7XHJcbiAgICAgIHN3aXRjaCAoZ2V0RGF5T2ZXZWVrKGRhdGUpKSB7XHJcbiAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgcmV0dXJuICdbcHJlasOFwqFuam9dIFtuZWRlbGpvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qb10gW3NyZWRvXSBbb2JdIExUJztcclxuICAgICAgICBjYXNlIDY6XHJcbiAgICAgICAgICByZXR1cm4gJ1twcmVqw4XCoW5qb10gW3NvYm90b10gW29iXSBMVCc7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgcmV0dXJuICdbcHJlasOFwqFuamldIGRkZGQgW29iXSBMVCc7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzYW1lRWxzZTogJ0wnXHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJ8OEwo1leiAlcycsXHJcbiAgICBwYXN0OiAncHJlZCAlcycsXHJcbiAgICBzOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgc3M6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBtOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgbW06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBoOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgaGg6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBkOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgZGQ6IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICBNOiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgTU06IHByb2Nlc3NSZWxhdGl2ZVRpbWUsXHJcbiAgICB5OiBwcm9jZXNzUmVsYXRpdmVUaW1lLFxyXG4gICAgeXk6IHByb2Nlc3NSZWxhdGl2ZVRpbWVcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfVxcLi8sXHJcbiAgb3JkaW5hbDogJyVkLicsXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuaW1wb3J0IHsgTG9jYWxlRGF0YSB9IGZyb20gJy4uL2xvY2FsZS9sb2NhbGUuY2xhc3MnO1xyXG5cclxuLy8hIG1vbWVudC5qcyBsb2NhbGUgY29uZmlndXJhdGlvblxyXG4vLyEgbG9jYWxlIDogU3dlZGlzaCBbc3ZdXHJcbi8vISBhdXRob3IgOiBKZW5zIEFsbSA6IGh0dHBzOi8vZ2l0aHViLmNvbS91bG11c1xyXG5cclxuZXhwb3J0IGNvbnN0IHN2TG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICdzdicsXHJcbiAgbW9udGhzOiAnamFudWFyaV9mZWJydWFyaV9tYXJzX2FwcmlsX21hal9qdW5pX2p1bGlfYXVndXN0aV9zZXB0ZW1iZXJfb2t0b2Jlcl9ub3ZlbWJlcl9kZWNlbWJlcicuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ2phbl9mZWJfbWFyX2Fwcl9tYWpfanVuX2p1bF9hdWdfc2VwX29rdF9ub3ZfZGVjJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnc8ODwrZuZGFnX23Dg8KlbmRhZ190aXNkYWdfb25zZGFnX3RvcnNkYWdfZnJlZGFnX2zDg8K2cmRhZycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnc8ODwrZuX23Dg8Klbl90aXNfb25zX3Rvcl9mcmVfbMODwrZyJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnc8ODwrZfbcODwqVfdGlfb25fdG9fZnJfbMODwrYnLnNwbGl0KCdfJyksXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSEg6bW0nLFxyXG4gICAgTFRTOiAnSEg6bW06c3MnLFxyXG4gICAgTDogJ1lZWVktTU0tREQnLFxyXG4gICAgTEw6ICdEIE1NTU0gWVlZWScsXHJcbiAgICBMTEw6ICdEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXHJcbiAgICBMTExMOiAnZGRkZCBEIE1NTU0gWVlZWSBba2wuXSBISDptbScsXHJcbiAgICBsbGw6ICdEIE1NTSBZWVlZIEhIOm1tJyxcclxuICAgIGxsbGw6ICdkZGQgRCBNTU0gWVlZWSBISDptbSdcclxuICB9LFxyXG4gIGNhbGVuZGFyOiB7XHJcbiAgICBzYW1lRGF5OiAnW0lkYWddIExUJyxcclxuICAgIG5leHREYXk6ICdbSW1vcmdvbl0gTFQnLFxyXG4gICAgbGFzdERheTogJ1tJZ8ODwqVyXSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ1tQw4PCpV0gZGRkZCBMVCcsXHJcbiAgICBsYXN0V2VlazogJ1tJXSBkZGRkW3NdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnb20gJXMnLFxyXG4gICAgcGFzdDogJ2bDg8K2ciAlcyBzZWRhbicsXHJcbiAgICBzOiAnbsODwqVncmEgc2VrdW5kZXInLFxyXG4gICAgc3M6ICclZCBzZWt1bmRlcicsXHJcbiAgICBtOiAnZW4gbWludXQnLFxyXG4gICAgbW06ICclZCBtaW51dGVyJyxcclxuICAgIGg6ICdlbiB0aW1tZScsXHJcbiAgICBoaDogJyVkIHRpbW1hcicsXHJcbiAgICBkOiAnZW4gZGFnJyxcclxuICAgIGRkOiAnJWQgZGFnYXInLFxyXG4gICAgTTogJ2VuIG3Dg8KlbmFkJyxcclxuICAgIE1NOiAnJWQgbcODwqVuYWRlcicsXHJcbiAgICB5OiAnZXR0IMODwqVyJyxcclxuICAgIHl5OiAnJWQgw4PCpXInXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0oZXxhKS8sXHJcbiAgb3JkaW5hbChfbnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbnVtID0gTnVtYmVyKF9udW0pO1xyXG4gICAgbGV0IGIgPSBudW0gJSAxMCxcclxuICAgICAgb3V0cHV0ID0gKH5+KG51bSAlIDEwMCAvIDEwKSA9PT0gMSkgPyAnZScgOlxyXG4gICAgICAgIChiID09PSAxKSA/ICdhJyA6XHJcbiAgICAgICAgICAoYiA9PT0gMikgPyAnYScgOlxyXG4gICAgICAgICAgICAoYiA9PT0gMykgPyAnZScgOiAnZSc7XHJcbiAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG5cclxuLy8gbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vIGxvY2FsZSA6IFRoYWkgW3RoXVxyXG4vLyBhdXRob3IgOiBXYXRjaGFyYXBvbCBTYW5pdHdvbmcgOiBodHRwczovL2dpdGh1Yi5jb20vdHVtaXRcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCB0aExvY2FsZTogTG9jYWxlRGF0YSA9IHtcclxuICBhYmJyOiAndGgnLFxyXG4gIG1vbnRoczogJ8OgwrjCocOgwrjCgcOgwrjCo8OgwrjCssOgwrjChMOgwrjCoV/DoMK4woHDoMK4wrjDoMK4wqHDoMK4wqDDoMK4wrLDoMK4wp7DoMK4wrHDoMK4wpnDoMK4wpjDoMK5woxfw6DCuMKhw6DCuMK1w6DCuMKZw6DCuMKyw6DCuMKEw6DCuMKhX8OgwrnCgMOgwrjCocOgwrjCqcOgwrjCssOgwrjCosOgwrjCmV/DoMK4wp7DoMK4wqTDoMK4wqnDoMK4wqDDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKhw6DCuMK0w6DCuMKWw6DCuMK4w6DCuMKZw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjCgcOgwrjCo8OgwrjCgcOgwrjCjsOgwrjCssOgwrjChMOgwrjCoV/DoMK4wqrDoMK4wrTDoMK4wofDoMK4wqvDoMK4wrLDoMK4woTDoMK4wqFfw6DCuMKBw6DCuMKxw6DCuMKZw6DCuMKiw6DCuMKyw6DCuMKiw6DCuMKZX8OgwrjClcOgwrjCuMOgwrjCpcOgwrjCssOgwrjChMOgwrjCoV/DoMK4wp7DoMK4wqTDoMK4wqjDoMK4wojDoMK4wrTDoMK4woHDoMK4wrLDoMK4wqLDoMK4wplfw6DCuMKYw6DCuMKxw6DCuMKZw6DCuMKnw6DCuMKyw6DCuMKEw6DCuMKhJy5zcGxpdCgnXycpLFxyXG4gIG1vbnRoc1Nob3J0OiAnw6DCuMKhLsOgwrjChC5fw6DCuMKBLsOgwrjCni5fw6DCuMKhw6DCuMK1LsOgwrjChC5fw6DCucKAw6DCuMKhLsOgwrjCoi5fw6DCuMKeLsOgwrjChC5fw6DCuMKhw6DCuMK0LsOgwrjCoi5fw6DCuMKBLsOgwrjChC5fw6DCuMKqLsOgwrjChC5fw6DCuMKBLsOgwrjCoi5fw6DCuMKVLsOgwrjChC5fw6DCuMKeLsOgwrjCoi5fw6DCuMKYLsOgwrjChC4nLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzUGFyc2VFeGFjdDogdHJ1ZSxcclxuICB3ZWVrZGF5czogJ8OgwrjCrcOgwrjCssOgwrjCl8OgwrjCtMOgwrjClcOgwrjCosOgwrnCjF/DoMK4wojDoMK4wrHDoMK4wpnDoMK4wpfDoMK4wqPDoMK5woxfw6DCuMKtw6DCuMKxw6DCuMKHw6DCuMKEw6DCuMKyw6DCuMKjX8OgwrjCnsOgwrjCuMOgwrjCmF/DoMK4wp7DoMK4wqTDoMK4wqvDoMK4wrHDoMK4wqrDoMK4wprDoMK4wpTDoMK4wrVfw6DCuMKow6DCuMK4w6DCuMKBw6DCuMKjw6DCucKMX8OgwrnCgMOgwrjCqsOgwrjCssOgwrjCo8OgwrnCjCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnw6DCuMKtw6DCuMKyw6DCuMKXw6DCuMK0w6DCuMKVw6DCuMKiw6DCucKMX8OgwrjCiMOgwrjCscOgwrjCmcOgwrjCl8OgwrjCo8OgwrnCjF/DoMK4wq3DoMK4wrHDoMK4wofDoMK4woTDoMK4wrLDoMK4wqNfw6DCuMKew6DCuMK4w6DCuMKYX8OgwrjCnsOgwrjCpMOgwrjCq8OgwrjCscOgwrjCql/DoMK4wqjDoMK4wrjDoMK4woHDoMK4wqPDoMK5woxfw6DCucKAw6DCuMKqw6DCuMKyw6DCuMKjw6DCucKMJy5zcGxpdCgnXycpLCAvLyB5ZXMsIHRocmVlIGNoYXJhY3RlcnMgZGlmZmVyZW5jZVxyXG4gIHdlZWtkYXlzTWluOiAnw6DCuMKtw6DCuMKyLl/DoMK4woguX8OgwrjCrS5fw6DCuMKeLl/DoMK4wp7DoMK4wqQuX8OgwrjCqC5fw6DCuMKqLicuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1BhcnNlRXhhY3Q6IHRydWUsXHJcbiAgbG9uZ0RhdGVGb3JtYXQ6IHtcclxuICAgIExUOiAnSDptbScsXHJcbiAgICBMVFM6ICdIOm1tOnNzJyxcclxuICAgIEw6ICdERC9NTS9ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyIEg6bW0nLFxyXG4gICAgTExMTDogJ8OgwrjCp8OgwrjCscOgwrjCmWRkZGTDoMK4wpfDoMK4wrXDoMK5woggRCBNTU1NIFlZWVkgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyIEg6bW0nXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAvw6DCuMKBw6DCucKIw6DCuMKtw6DCuMKZw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHfMOgwrjCq8OgwrjCpcOgwrjCscOgwrjCh8OgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChy8sXHJcbiAgaXNQTShpbnB1dCkge1xyXG4gICAgcmV0dXJuIGlucHV0ID09PSAnw6DCuMKrw6DCuMKlw6DCuMKxw6DCuMKHw6DCucKAw6DCuMKXw6DCuMK1w6DCucKIw6DCuMKiw6DCuMKHJztcclxuICB9LFxyXG4gIG1lcmlkaWVtKGhvdXIsIG1pbnV0ZSwgaXNMb3dlcikge1xyXG4gICAgaWYgKGhvdXIgPCAxMikge1xyXG4gICAgICByZXR1cm4gJ8OgwrjCgcOgwrnCiMOgwrjCrcOgwrjCmcOgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChyc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ8OgwrjCq8OgwrjCpcOgwrjCscOgwrjCh8OgwrnCgMOgwrjCl8OgwrjCtcOgwrnCiMOgwrjCosOgwrjChyc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vDoMK4wqfDoMK4wrHDoMK4wpnDoMK4wpnDoMK4wrXDoMK5wokgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXHJcbiAgICBuZXh0RGF5OiAnW8OgwrjCnsOgwrjCo8OgwrjCuMOgwrnCiMOgwrjCh8OgwrjCmcOgwrjCtcOgwrnCiSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcclxuICAgIG5leHRXZWVrOiAnZGRkZFvDoMK4wqvDoMK4wpnDoMK5wonDoMK4wrIgw6DCucKAw6DCuMKnw6DCuMKlw6DCuMKyXSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OgwrnCgMOgwrjCocOgwrjCt8OgwrnCiMOgwrjCrcOgwrjCp8OgwrjCssOgwrjCmcOgwrjCmcOgwrjCtcOgwrnCiSDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcclxuICAgIGxhc3RXZWVrOiAnW8OgwrjCp8OgwrjCscOgwrjCmV1kZGRkW8OgwrjCl8OgwrjCtcOgwrnCiMOgwrnCgcOgwrjCpcOgwrnCicOgwrjCpyDDoMK5woDDoMK4wqfDoMK4wqXDoMK4wrJdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnw6DCuMKtw6DCuMK1w6DCuMKBICVzJyxcclxuICAgIHBhc3Q6ICclc8OgwrjCl8OgwrjCtcOgwrnCiMOgwrnCgcOgwrjCpcOgwrnCicOgwrjCpycsXHJcbiAgICBzOiAnw6DCucKEw6DCuMKhw6DCucKIw6DCuMKBw6DCuMK1w6DCucKIw6DCuMKnw6DCuMK0w6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcclxuICAgIHNzOiAnJWQgw6DCuMKnw6DCuMK0w6DCuMKZw6DCuMKyw6DCuMKXw6DCuMK1JyxcclxuICAgIG06ICcxIMOgwrjCmcOgwrjCssOgwrjCl8OgwrjCtScsXHJcbiAgICBtbTogJyVkIMOgwrjCmcOgwrjCssOgwrjCl8OgwrjCtScsXHJcbiAgICBoOiAnMSDDoMK4worDoMK4wrHDoMK5wojDoMK4wqfDoMK5woLDoMK4wqHDoMK4wocnLFxyXG4gICAgaGg6ICclZCDDoMK4worDoMK4wrHDoMK5wojDoMK4wqfDoMK5woLDoMK4wqHDoMK4wocnLFxyXG4gICAgZDogJzEgw6DCuMKnw6DCuMKxw6DCuMKZJyxcclxuICAgIGRkOiAnJWQgw6DCuMKnw6DCuMKxw6DCuMKZJyxcclxuICAgIE06ICcxIMOgwrnCgMOgwrjClMOgwrjCt8OgwrjCrcOgwrjCmScsXHJcbiAgICBNTTogJyVkIMOgwrnCgMOgwrjClMOgwrjCt8OgwrjCrcOgwrjCmScsXHJcbiAgICB5OiAnMSDDoMK4wpvDoMK4wrUnLFxyXG4gICAgeXk6ICclZCDDoMK4wpvDoMK4wrUnXHJcbiAgfVxyXG59O1xyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTpjb21tZW50LWZvcm1hdCBiaW5hcnktZXhwcmVzc2lvbi1vcGVyYW5kLW9yZGVyIG1heC1saW5lLWxlbmd0aFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1iaXR3aXNlIHByZWZlci10ZW1wbGF0ZSBjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tc2hhZG93ZWQtdmFyaWFibGUgc3dpdGNoLWRlZmF1bHQgcHJlZmVyLWNvbnN0XHJcbi8vIHRzbGludDpkaXNhYmxlOm9uZS12YXJpYWJsZS1wZXItZGVjbGFyYXRpb24gbmV3bGluZS1iZWZvcmUtcmV0dXJuXHJcblxyXG5pbXBvcnQgeyBMb2NhbGVEYXRhIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG4vLyEgbW9tZW50LmpzIGxvY2FsZSBjb25maWd1cmF0aW9uXHJcbi8vISBsb2NhbGUgOiBUdXJraXNoIFt0cl1cclxuLy8hIGF1dGhvcnMgOiBFcmhhbiBHdW5kb2dhbiA6IGh0dHBzOi8vZ2l0aHViLmNvbS9lcmhhbmd1bmRvZ2FuLFxyXG4vLyEgICAgICAgICAgIEJ1cmFrIFlpw4TCn2l0IEtheWE6IGh0dHBzOi8vZ2l0aHViLmNvbS9CWUtcclxuXHJcbmxldCBzdWZmaXhlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHtcclxuICAxOiAnXFwnaW5jaScsXHJcbiAgNTogJ1xcJ2luY2knLFxyXG4gIDg6ICdcXCdpbmNpJyxcclxuICA3MDogJ1xcJ2luY2knLFxyXG4gIDgwOiAnXFwnaW5jaScsXHJcbiAgMjogJ1xcJ25jaScsXHJcbiAgNzogJ1xcJ25jaScsXHJcbiAgMjA6ICdcXCduY2knLFxyXG4gIDUwOiAnXFwnbmNpJyxcclxuICAzOiAnXFwnw4PCvG5jw4PCvCcsXHJcbiAgNDogJ1xcJ8ODwrxuY8ODwrwnLFxyXG4gIDEwMDogJ1xcJ8ODwrxuY8ODwrwnLFxyXG4gIDY6ICdcXCduY8OEwrEnLFxyXG4gIDk6ICdcXCd1bmN1JyxcclxuICAxMDogJ1xcJ3VuY3UnLFxyXG4gIDMwOiAnXFwndW5jdScsXHJcbiAgNjA6ICdcXCfDhMKxbmPDhMKxJyxcclxuICA5MDogJ1xcJ8OEwrFuY8OEwrEnXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdHJMb2NhbGU6IExvY2FsZURhdGEgPSB7XHJcbiAgYWJicjogJ3RyJyxcclxuICBtb250aHM6ICdPY2FrX8OFwp51YmF0X01hcnRfTmlzYW5fTWF5w4TCsXNfSGF6aXJhbl9UZW1tdXpfQcOEwp91c3Rvc19FeWzDg8K8bF9Fa2ltX0thc8OEwrFtX0FyYWzDhMKxaycuc3BsaXQoJ18nKSxcclxuICBtb250aHNTaG9ydDogJ09jYV/DhcKedWJfTWFyX05pc19NYXlfSGF6X1RlbV9Bw4TCn3VfRXlsX0VraV9LYXNfQXJhJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzOiAnUGF6YXJfUGF6YXJ0ZXNpX1NhbMOEwrFfw4PCh2Fyw4XCn2FtYmFfUGVyw4XCn2VtYmVfQ3VtYV9DdW1hcnRlc2knLnNwbGl0KCdfJyksXHJcbiAgd2Vla2RheXNTaG9ydDogJ1Bhel9QdHNfU2FsX8ODwodhcl9QZXJfQ3VtX0N0cycuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c01pbjogJ1B6X1B0X1NhX8ODwodhX1BlX0N1X0N0Jy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdERC5NTS5ZWVlZJyxcclxuICAgIExMOiAnRCBNTU1NIFlZWVknLFxyXG4gICAgTExMOiAnRCBNTU1NIFlZWVkgSEg6bW0nLFxyXG4gICAgTExMTDogJ2RkZGQsIEQgTU1NTSBZWVlZIEhIOm1tJ1xyXG4gIH0sXHJcbiAgY2FsZW5kYXI6IHtcclxuICAgIHNhbWVEYXk6ICdbYnVnw4PCvG4gc2FhdF0gTFQnLFxyXG4gICAgbmV4dERheTogJ1t5YXLDhMKxbiBzYWF0XSBMVCcsXHJcbiAgICBuZXh0V2VlazogJ1tnZWxlY2VrXSBkZGRkIFtzYWF0XSBMVCcsXHJcbiAgICBsYXN0RGF5OiAnW2TDg8K8bl0gTFQnLFxyXG4gICAgbGFzdFdlZWs6ICdbZ2XDg8KnZW5dIGRkZGQgW3NhYXRdIExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIHJlbGF0aXZlVGltZToge1xyXG4gICAgZnV0dXJlOiAnJXMgc29ucmEnLFxyXG4gICAgcGFzdDogJyVzIMODwrZuY2UnLFxyXG4gICAgczogJ2Jpcmthw4PCpyBzYW5peWUnLFxyXG4gICAgc3M6ICclZCBzYW5peWUnLFxyXG4gICAgbTogJ2JpciBkYWtpa2EnLFxyXG4gICAgbW06ICclZCBkYWtpa2EnLFxyXG4gICAgaDogJ2JpciBzYWF0JyxcclxuICAgIGhoOiAnJWQgc2FhdCcsXHJcbiAgICBkOiAnYmlyIGfDg8K8bicsXHJcbiAgICBkZDogJyVkIGfDg8K8bicsXHJcbiAgICBNOiAnYmlyIGF5JyxcclxuICAgIE1NOiAnJWQgYXknLFxyXG4gICAgeTogJ2JpciB5w4TCsWwnLFxyXG4gICAgeXk6ICclZCB5w4TCsWwnXHJcbiAgfSxcclxuICBkYXlPZk1vbnRoT3JkaW5hbFBhcnNlOiAvXFxkezEsMn0nKGluY2l8bmNpfMODwrxuY8ODwrx8bmPDhMKxfHVuY3V8w4TCsW5jw4TCsSkvLFxyXG4gIG9yZGluYWwoX251bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcclxuICAgIGlmIChudW0gPT09IDApIHsgIC8vIHNwZWNpYWwgY2FzZSBmb3IgemVyb1xyXG4gICAgICByZXR1cm4gbnVtICsgJ1xcJ8OEwrFuY8OEwrEnO1xyXG4gICAgfVxyXG4gICAgbGV0IGEgPSBudW0gJSAxMCxcclxuICAgICAgYiA9IG51bSAlIDEwMCAtIGEsXHJcbiAgICAgIGMgPSBudW0gPj0gMTAwID8gMTAwIDogbnVsbDtcclxuICAgIHJldHVybiBudW0gKyAoc3VmZml4ZXNbYV0gfHwgc3VmZml4ZXNbYl0gfHwgc3VmZml4ZXNbY10pO1xyXG4gIH0sXHJcbiAgd2Vlazoge1xyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNyAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gMXN0IGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIiwiLy8gdHNsaW50OmRpc2FibGU6Y29tbWVudC1mb3JtYXQgYmluYXJ5LWV4cHJlc3Npb24tb3BlcmFuZC1vcmRlciBtYXgtbGluZS1sZW5ndGhcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYml0d2lzZSBwcmVmZXItdGVtcGxhdGUgY3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLXNoYWRvd2VkLXZhcmlhYmxlIHN3aXRjaC1kZWZhdWx0IHByZWZlci1jb25zdFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpvbmUtdmFyaWFibGUtcGVyLWRlY2xhcmF0aW9uIG5ld2xpbmUtYmVmb3JlLXJldHVyblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1wYXJhbWV0ZXItcmVhc3NpZ25tZW50IHByZWZlci1zd2l0Y2hcclxuXHJcbmltcG9ydCB7IExvY2FsZURhdGEgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbi8vISBtb21lbnQuanMgbG9jYWxlIGNvbmZpZ3VyYXRpb25cclxuLy8hIGxvY2FsZSA6IENoaW5lc2UgKENoaW5hKSBbemgtY25dXHJcbi8vISBhdXRob3IgOiBzdXVwaWMgOiBodHRwczovL2dpdGh1Yi5jb20vc3V1cGljXHJcbi8vISBhdXRob3IgOiBaZW5vIFplbmcgOiBodHRwczovL2dpdGh1Yi5jb20vemVub3plbmdcclxuXHJcbmV4cG9ydCBjb25zdCB6aENuTG9jYWxlOiBMb2NhbGVEYXRhID0ge1xyXG4gIGFiYnI6ICd6aC1jbicsXHJcbiAgbW9udGhzOiAnw6TCuMKAw6bCnMKIX8OkwrrCjMOmwpzCiF/DpMK4wonDpsKcwohfw6XCm8Kbw6bCnMKIX8OkwrrClMOmwpzCiF/DpcKFwq3DpsKcwohfw6TCuMKDw6bCnMKIX8OlwoXCq8OmwpzCiF/DpMK5wp3DpsKcwohfw6XCjcKBw6bCnMKIX8Olwo3CgcOkwrjCgMOmwpzCiF/DpcKNwoHDpMK6wozDpsKcwognLnNwbGl0KCdfJyksXHJcbiAgbW9udGhzU2hvcnQ6ICcxw6bCnMKIXzLDpsKcwohfM8OmwpzCiF80w6bCnMKIXzXDpsKcwohfNsOmwpzCiF83w6bCnMKIXzjDpsKcwohfOcOmwpzCiF8xMMOmwpzCiF8xMcOmwpzCiF8xMsOmwpzCiCcuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5czogJ8OmwpjCn8OmwpzCn8OmwpfCpV/DpsKYwp/DpsKcwp/DpMK4woBfw6bCmMKfw6bCnMKfw6TCusKMX8OmwpjCn8OmwpzCn8OkwrjCiV/DpsKYwp/DpsKcwp/DpcKbwptfw6bCmMKfw6bCnMKfw6TCusKUX8OmwpjCn8OmwpzCn8OlwoXCrScuc3BsaXQoJ18nKSxcclxuICB3ZWVrZGF5c1Nob3J0OiAnw6XCkcKow6bCl8KlX8OlwpHCqMOkwrjCgF/DpcKRwqjDpMK6woxfw6XCkcKow6TCuMKJX8OlwpHCqMOlwpvCm1/DpcKRwqjDpMK6wpRfw6XCkcKow6XChcKtJy5zcGxpdCgnXycpLFxyXG4gIHdlZWtkYXlzTWluOiAnw6bCl8KlX8OkwrjCgF/DpMK6woxfw6TCuMKJX8OlwpvCm1/DpMK6wpRfw6XChcKtJy5zcGxpdCgnXycpLFxyXG4gIGxvbmdEYXRlRm9ybWF0OiB7XHJcbiAgICBMVDogJ0hIOm1tJyxcclxuICAgIExUUzogJ0hIOm1tOnNzJyxcclxuICAgIEw6ICdZWVlZL01NL0REJyxcclxuICAgIExMOiAnWVlZWcOlwrnCtE3DpsKcwohEw6bCl8KlJyxcclxuICAgIExMTDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpUFow6fCgsK5bW3DpcKIwoYnLFxyXG4gICAgTExMTDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpWRkZGRBaMOnwoLCuW1tw6XCiMKGJyxcclxuICAgIGw6ICdZWVlZL00vRCcsXHJcbiAgICBsbDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpScsXHJcbiAgICBsbGw6ICdZWVlZw6XCucK0TcOmwpzCiETDpsKXwqUgSEg6bW0nLFxyXG4gICAgbGxsbDogJ1lZWVnDpcK5wrRNw6bCnMKIRMOmwpfCpWRkZGQgSEg6bW0nXHJcbiAgfSxcclxuICBtZXJpZGllbVBhcnNlOiAvw6XCh8KMw6bCmcKofMOmwpfCqcOkwrjCinzDpMK4worDpcKNwoh8w6TCuMKtw6XCjcKIfMOkwrjCi8Olwo3CiHzDpsKZwprDpMK4woovLFxyXG4gIG1lcmlkaWVtSG91cihob3VyLCBtZXJpZGllbSkge1xyXG4gICAgaWYgKGhvdXIgPT09IDEyKSB7XHJcbiAgICAgIGhvdXIgPSAwO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lcmlkaWVtID09PSAnw6XCh8KMw6bCmcKoJyB8fCBtZXJpZGllbSA9PT0gJ8OmwpfCqcOkwrjCiicgfHxcclxuICAgICAgbWVyaWRpZW0gPT09ICfDpMK4worDpcKNwognKSB7XHJcbiAgICAgIHJldHVybiBob3VyO1xyXG4gICAgfSBlbHNlIGlmIChtZXJpZGllbSA9PT0gJ8OkwrjCi8Olwo3CiCcgfHwgbWVyaWRpZW0gPT09ICfDpsKZwprDpMK4woonKSB7XHJcbiAgICAgIHJldHVybiBob3VyICsgMTI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAnw6TCuMKtw6XCjcKIJ1xyXG4gICAgICByZXR1cm4gaG91ciA+PSAxMSA/IGhvdXIgOiBob3VyICsgMTI7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXJpZGllbShob3VyLCBtaW51dGUsIGlzTG93ZXIpIHtcclxuICAgIGxldCBobSA9IGhvdXIgKiAxMDAgKyBtaW51dGU7XHJcbiAgICBpZiAoaG0gPCA2MDApIHtcclxuICAgICAgcmV0dXJuICfDpcKHwozDpsKZwqgnO1xyXG4gICAgfSBlbHNlIGlmIChobSA8IDkwMCkge1xyXG4gICAgICByZXR1cm4gJ8OmwpfCqcOkwrjCiic7XHJcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTEzMCkge1xyXG4gICAgICByZXR1cm4gJ8OkwrjCisOlwo3CiCc7XHJcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTIzMCkge1xyXG4gICAgICByZXR1cm4gJ8OkwrjCrcOlwo3CiCc7XHJcbiAgICB9IGVsc2UgaWYgKGhtIDwgMTgwMCkge1xyXG4gICAgICByZXR1cm4gJ8OkwrjCi8Olwo3CiCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ8OmwpnCmsOkwrjCiic7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjYWxlbmRhcjoge1xyXG4gICAgc2FtZURheTogJ1vDpMK7worDpcKkwqldTFQnLFxyXG4gICAgbmV4dERheTogJ1vDpsKYwo7DpcKkwqldTFQnLFxyXG4gICAgbmV4dFdlZWs6ICdbw6TCuMKLXWRkZGRMVCcsXHJcbiAgICBsYXN0RGF5OiAnW8OmwpjCqMOlwqTCqV1MVCcsXHJcbiAgICBsYXN0V2VlazogJ1vDpMK4wopdZGRkZExUJyxcclxuICAgIHNhbWVFbHNlOiAnTCdcclxuICB9LFxyXG4gIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSjDpsKXwqV8w6bCnMKIfMOlwpHCqCkvLFxyXG4gIG9yZGluYWwoX251bTogbnVtYmVyLCBwZXJpb2QpIHtcclxuICAgIGNvbnN0IG51bSA9IE51bWJlcihfbnVtKTtcclxuICAgIHN3aXRjaCAocGVyaW9kKSB7XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICBjYXNlICdEJzpcclxuICAgICAgY2FzZSAnREREJzpcclxuICAgICAgICByZXR1cm4gbnVtICsgJ8OmwpfCpSc7XHJcbiAgICAgIGNhc2UgJ00nOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnw6bCnMKIJztcclxuICAgICAgY2FzZSAndyc6XHJcbiAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgIHJldHVybiBudW0gKyAnw6XCkcKoJztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gbnVtLnRvU3RyaW5nKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICByZWxhdGl2ZVRpbWU6IHtcclxuICAgIGZ1dHVyZTogJyVzw6XChsKFJyxcclxuICAgIHBhc3Q6ICclc8OlwonCjScsXHJcbiAgICBzOiAnw6XCh8Kgw6fCp8KSJyxcclxuICAgIHNzOiAnJWQgw6fCp8KSJyxcclxuICAgIG06ICcxIMOlwojChsOpwpLCnycsXHJcbiAgICBtbTogJyVkIMOlwojChsOpwpLCnycsXHJcbiAgICBoOiAnMSDDpcKwwo/DpsKXwrYnLFxyXG4gICAgaGg6ICclZCDDpcKwwo/DpsKXwrYnLFxyXG4gICAgZDogJzEgw6XCpMKpJyxcclxuICAgIGRkOiAnJWQgw6XCpMKpJyxcclxuICAgIE06ICcxIMOkwrjCqsOmwpzCiCcsXHJcbiAgICBNTTogJyVkIMOkwrjCqsOmwpzCiCcsXHJcbiAgICB5OiAnMSDDpcK5wrQnLFxyXG4gICAgeXk6ICclZCDDpcK5wrQnXHJcbiAgfSxcclxuICB3ZWVrOiB7XHJcbiAgICAvLyBHQi9UIDc0MDgtMTk5NMOjwoDCisOmwpXCsMOmwo3CrsOlwoXCg8OlwpLCjMOkwrrCpMOmwo3CosOmwqDCvMOlwrzCj8OCwrfDpMK/wqHDpsKBwq/DpMK6wqTDpsKNwqLDgsK3w6bCl8Klw6bCnMKfw6XCksKMw6bCl8K2w6nCl8K0w6jCocKow6fCpMK6w6bCs8KVw6PCgMKLw6TCuMKOSVNPIDg2MDE6MTk4OMOnwq3CicOmwpXCiFxyXG4gICAgZG93OiAxLCAvLyBNb25kYXkgaXMgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cclxuICAgIGRveTogNCAgLy8gVGhlIHdlZWsgdGhhdCBjb250YWlucyBKYW4gNHRoIGlzIHRoZSBmaXJzdCB3ZWVrIG9mIHRoZSB5ZWFyLlxyXG4gIH1cclxufTtcclxuIl0sIm5hbWVzIjpbImRheXNJbk1vbnRoIiwibW9udGhzIiwibW9udGhzU2hvcnQiLCJtb250aHNTaG9ydERvdCIsIm1vbnRoc1BhcnNlIiwibW9udGhzUmVnZXgiLCJ0cmFuc2xhdGUiLCJzeW1ib2xNYXAiLCJudW1iZXJNYXAiLCJtb250aHNTaG9ydFdpdGhEb3RzIiwibW9udGhzU2hvcnRXaXRob3V0RG90cyIsInBsdXJhbCIsInJlbGF0aXZlVGltZVdpdGhQbHVyYWwiLCJwcm9jZXNzUmVsYXRpdmVUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFQSxpQkFBb0IsQ0FBUyxFQUFFLENBQVM7UUFDdEMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN4Qjs7Ozs7QUFFRCxzQkFBeUIsR0FBVztRQUNsQyxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4RDs7Ozs7O0FDUkQ7Ozs7QUFFQSxzQkFBeUIsR0FBUTtRQUMvQixPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztLQUNoQzs7Ozs7QUFFRCxvQkFBdUIsS0FBVTtRQUMvQixPQUFPLEtBQUssWUFBWSxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGVBQWUsQ0FBQztLQUMzRjs7Ozs7QUFNRCx5QkFBNEIsSUFBVTtR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