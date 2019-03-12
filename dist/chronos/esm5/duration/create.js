/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Duration, isDuration } from './constructor';
import { isDateValid, isNumber, isObject, isString, toInt } from '../utils/type-checks';
import { DATE, HOUR, MILLISECOND, MINUTE, SECOND } from '../units/constants';
import { parseDate } from '../create/local';
import { absRound } from '../utils/abs-round';
import { cloneWithOffset } from '../units/offset';
import { isAfter, isBefore } from '../utils/date-compare';
import { getFullYear, getMonth } from '../utils/date-getters';
import { add } from '../moment/add-subtract';
import { cloneDate } from '../create/clone';
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
export function createDuration(input, key, config) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZHVyYXRpb24vY3JlYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUc5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMscUJBQU0sV0FBVyxHQUFHLDBEQUEwRCxDQUFDOzs7OztBQU0vRSxxQkFBTSxRQUFRLEdBQUcscUtBQXFLLENBQUM7Ozs7Ozs7QUFJdkwsTUFBTSx5QkFBeUIsS0FBcUIsRUFBRSxHQUFZLEVBQUUsTUFBOEI7SUFBOUIsdUJBQUEsRUFBQSxXQUE4QjtJQUNoRyxxQkFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFHN0MsTUFBTSxDQUFDLElBQUksUUFB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Q0FBQztRQUM5QyxHQUFHLENBQUMsWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQztRQUNyQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUMxQjtJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDWiIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFTUC5ORVQganNvbiBkYXRlIGZvcm1hdCByZWdleFxyXG5pbXBvcnQgeyBEdXJhdGlvbiwgaXNEdXJhdGlvbiB9IGZyb20gJy4vY29uc3RydWN0b3InO1xyXG5pbXBvcnQgeyBpc0RhdGVWYWxpZCwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc1N0cmluZywgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERBVEUsIEhPVVIsIE1JTExJU0VDT05ELCBNSU5VVEUsIFNFQ09ORCB9IGZyb20gJy4uL3VuaXRzL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHBhcnNlRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9sb2NhbCc7XHJcbmltcG9ydCB7IGFic1JvdW5kIH0gZnJvbSAnLi4vdXRpbHMvYWJzLXJvdW5kJztcclxuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGNsb25lV2l0aE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XHJcbmltcG9ydCB7IGlzQWZ0ZXIsIGlzQmVmb3JlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1jb21wYXJlJztcclxuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi4vbW9tZW50L2FkZC1zdWJ0cmFjdCc7XHJcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4uL2NyZWF0ZS9jbG9uZSc7XHJcblxyXG5jb25zdCBhc3BOZXRSZWdleCA9IC9eKFxcLXxcXCspPyg/OihcXGQqKVsuIF0pPyhcXGQrKVxcOihcXGQrKSg/OlxcOihcXGQrKShcXC5cXGQqKT8pPyQvO1xyXG5cclxuLy8gZnJvbSBodHRwOi8vZG9jcy5jbG9zdXJlLWxpYnJhcnkuZ29vZ2xlY29kZS5jb20vZ2l0L2Nsb3N1cmVfZ29vZ19kYXRlX2RhdGUuanMuc291cmNlLmh0bWxcclxuLy8gc29tZXdoYXQgbW9yZSBpbiBsaW5lIHdpdGggNC40LjMuMiAyMDA0IHNwZWMsIGJ1dCBhbGxvd3MgZGVjaW1hbCBhbnl3aGVyZVxyXG4vLyBhbmQgZnVydGhlciBtb2RpZmllZCB0byBhbGxvdyBmb3Igc3RyaW5ncyBjb250YWluaW5nIGJvdGggd2VlayBhbmQgZGF5XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5jb25zdCBpc29SZWdleCA9IC9eKC18XFwrKT9QKD86KFstK10/WzAtOSwuXSopWSk/KD86KFstK10/WzAtOSwuXSopTSk/KD86KFstK10/WzAtOSwuXSopVyk/KD86KFstK10/WzAtOSwuXSopRCk/KD86VCg/OihbLStdP1swLTksLl0qKUgpPyg/OihbLStdP1swLTksLl0qKU0pPyg/OihbLStdP1swLTksLl0qKVMpPyk/JC87XHJcblxyXG5leHBvcnQgdHlwZSBEdXJhdGlvbklucHV0ID0gc3RyaW5nIHwgbnVtYmVyIHwgRHVyYXRpb24gfCBQYXJ0aWFsPERhdGVPYmplY3Q+IHwgeyBmcm9tOiBEYXRlOyB0bzogRGF0ZSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUR1cmF0aW9uKGlucHV0PzogRHVyYXRpb25JbnB1dCwga2V5Pzogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge30pIHtcclxuICBjb25zdCBkdXJhdGlvbiA9IGNvbnZlcnREdXJhdGlvbihpbnB1dCwga2V5KTtcclxuICAvLyBtYXRjaGluZyBhZ2FpbnN0IHJlZ2V4cCBpcyBleHBlbnNpdmUsIGRvIGl0IG9uIGRlbWFuZFxyXG5cclxuICByZXR1cm4gbmV3IER1cmF0aW9uKGR1cmF0aW9uLCBjb25maWcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0RHVyYXRpb24oaW5wdXQ6IGFueSwga2V5OiBzdHJpbmcpOiBQYXJ0aWFsPERhdGVPYmplY3Q+IHtcclxuICAvLyBjaGVja3MgZm9yIG51bGwgb3IgdW5kZWZpbmVkXHJcbiAgaWYgKGlucHV0ID09IG51bGwpIHtcclxuICAgIHJldHVybiB7fTtcclxuICB9XHJcblxyXG4gIGlmIChpc0R1cmF0aW9uKGlucHV0KSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWlsbGlzZWNvbmRzOiBpbnB1dC5fbWlsbGlzZWNvbmRzLFxyXG4gICAgICBkYXk6IGlucHV0Ll9kYXlzLFxyXG4gICAgICBtb250aDogaW5wdXQuX21vbnRoc1xyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKGlzTnVtYmVyKGlucHV0KSkge1xyXG4gICAgLy8gZHVyYXRpb24gPSB7fTtcclxuICAgIHJldHVybiBrZXkgPyB7IFtrZXldOiBpbnB1dCB9IDogeyBtaWxsaXNlY29uZHM6IGlucHV0IH07XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICBsZXQgbWF0Y2ggPSBhc3BOZXRSZWdleC5leGVjKGlucHV0KTtcclxuXHJcbiAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgY29uc3Qgc2lnbiA9IChtYXRjaFsxXSA9PT0gJy0nKSA/IC0xIDogMTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeWVhcjogMCxcclxuICAgICAgICBkYXk6IHRvSW50KG1hdGNoW0RBVEVdKSAqIHNpZ24sXHJcbiAgICAgICAgaG91cnM6IHRvSW50KG1hdGNoW0hPVVJdKSAqIHNpZ24sXHJcbiAgICAgICAgbWludXRlczogdG9JbnQobWF0Y2hbTUlOVVRFXSkgKiBzaWduLFxyXG4gICAgICAgIHNlY29uZHM6IHRvSW50KG1hdGNoW1NFQ09ORF0pICogc2lnbixcclxuICAgICAgICAvLyB0aGUgbWlsbGlzZWNvbmQgZGVjaW1hbCBwb2ludCBpcyBpbmNsdWRlZCBpbiB0aGUgbWF0Y2hcclxuICAgICAgICBtaWxsaXNlY29uZHM6IHRvSW50KGFic1JvdW5kKHRvSW50KG1hdGNoW01JTExJU0VDT05EXSkgKiAxMDAwKSkgKiBzaWduXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgbWF0Y2ggPSBpc29SZWdleC5leGVjKGlucHV0KTtcclxuICAgIGlmIChtYXRjaCkge1xyXG4gICAgICBjb25zdCBzaWduID0gKG1hdGNoWzFdID09PSAnLScpID8gLTEgOiAobWF0Y2hbMV0gPT09ICcrJykgPyAxIDogMTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeWVhcjogcGFyc2VJc28obWF0Y2hbMl0sIHNpZ24pLFxyXG4gICAgICAgIG1vbnRoOiBwYXJzZUlzbyhtYXRjaFszXSwgc2lnbiksXHJcbiAgICAgICAgd2VlazogcGFyc2VJc28obWF0Y2hbNF0sIHNpZ24pLFxyXG4gICAgICAgIGRheTogcGFyc2VJc28obWF0Y2hbNV0sIHNpZ24pLFxyXG4gICAgICAgIGhvdXJzOiBwYXJzZUlzbyhtYXRjaFs2XSwgc2lnbiksXHJcbiAgICAgICAgbWludXRlczogcGFyc2VJc28obWF0Y2hbN10sIHNpZ24pLFxyXG4gICAgICAgIHNlY29uZHM6IHBhcnNlSXNvKG1hdGNoWzhdLCBzaWduKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlmIChpc09iamVjdDx7ZnJvbTogYW55OyB0bzogYW55fT4oaW5wdXQpICYmICgnZnJvbScgaW4gaW5wdXQgfHwgJ3RvJyBpbiBpbnB1dCkpIHtcclxuICAgIGNvbnN0IGRpZmZSZXMgPSBtb21lbnRzRGlmZmVyZW5jZShwYXJzZURhdGUoaW5wdXQuZnJvbSksIHBhcnNlRGF0ZShpbnB1dC50bykpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1pbGxpc2Vjb25kczogZGlmZlJlcy5taWxsaXNlY29uZHMsXHJcbiAgICAgIG1vbnRoOiBkaWZmUmVzLm1vbnRoc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnB1dDtcclxufVxyXG5cclxuLy8gY3JlYXRlRHVyYXRpb24uZm4gPSBEdXJhdGlvbi5wcm90b3R5cGU7XHJcbi8vIGNyZWF0ZUR1cmF0aW9uLmludmFsaWQgPSBpbnZhbGlkO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VJc28oaW5wOiBzdHJpbmcsIHNpZ246IG51bWJlcik6IG51bWJlciB7XHJcbiAgLy8gV2UnZCBub3JtYWxseSB1c2Ugfn5pbnAgZm9yIHRoaXMsIGJ1dCB1bmZvcnR1bmF0ZWx5IGl0IGFsc29cclxuICAvLyBjb252ZXJ0cyBmbG9hdHMgdG8gaW50cy5cclxuICAvLyBpbnAgbWF5IGJlIHVuZGVmaW5lZCwgc28gY2FyZWZ1bCBjYWxsaW5nIHJlcGxhY2Ugb24gaXQuXHJcbiAgY29uc3QgcmVzID0gaW5wICYmIHBhcnNlRmxvYXQoaW5wLnJlcGxhY2UoJywnLCAnLicpKTtcclxuICAvLyBhcHBseSBzaWduIHdoaWxlIHdlJ3JlIGF0IGl0XHJcblxyXG4gIHJldHVybiAoaXNOYU4ocmVzKSA/IDAgOiByZXMpICogc2lnbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcG9zaXRpdmVNb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xyXG4gIGNvbnN0IHJlcyA9IHsgbWlsbGlzZWNvbmRzOiAwLCBtb250aHM6IDAgfTtcclxuXHJcbiAgcmVzLm1vbnRocyA9IGdldE1vbnRoKG90aGVyKSAtIGdldE1vbnRoKGJhc2UpICtcclxuICAgIChnZXRGdWxsWWVhcihvdGhlcikgLSBnZXRGdWxsWWVhcihiYXNlKSkgKiAxMjtcclxuICBjb25zdCBfYmFzZVBsdXMgPSBhZGQoY2xvbmVEYXRlKGJhc2UpLCByZXMubW9udGhzLCAnbW9udGgnKTtcclxuICBpZiAoaXNBZnRlcihfYmFzZVBsdXMsIG90aGVyKSkge1xyXG4gICAgLS1yZXMubW9udGhzO1xyXG4gIH1cclxuXHJcbiAgcmVzLm1pbGxpc2Vjb25kcyA9ICtvdGhlciAtICsoYWRkKGNsb25lRGF0ZShiYXNlKSwgcmVzLm1vbnRocywgJ21vbnRoJykpO1xyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtb21lbnRzRGlmZmVyZW5jZShiYXNlOiBEYXRlLCBvdGhlcjogRGF0ZSk6IHsgbWlsbGlzZWNvbmRzOiBudW1iZXI7IG1vbnRoczogbnVtYmVyIH0ge1xyXG4gIGlmICghKGlzRGF0ZVZhbGlkKGJhc2UpICYmIGlzRGF0ZVZhbGlkKG90aGVyKSkpIHtcclxuICAgIHJldHVybiB7IG1pbGxpc2Vjb25kczogMCwgbW9udGhzOiAwIH07XHJcbiAgfVxyXG5cclxuICBsZXQgcmVzO1xyXG4gIGNvbnN0IF9vdGhlciA9IGNsb25lV2l0aE9mZnNldChvdGhlciwgYmFzZSwge19vZmZzZXQ6IGJhc2UuZ2V0VGltZXpvbmVPZmZzZXQoKX0pO1xyXG4gIGlmIChpc0JlZm9yZShiYXNlLCBfb3RoZXIpKSB7XHJcbiAgICByZXMgPSBwb3NpdGl2ZU1vbWVudHNEaWZmZXJlbmNlKGJhc2UsIF9vdGhlcik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IHBvc2l0aXZlTW9tZW50c0RpZmZlcmVuY2UoX290aGVyLCBiYXNlKTtcclxuICAgIHJlcy5taWxsaXNlY29uZHMgPSAtcmVzLm1pbGxpc2Vjb25kcztcclxuICAgIHJlcy5tb250aHMgPSAtcmVzLm1vbnRocztcclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuIl19