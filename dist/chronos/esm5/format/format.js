/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { zeroFill } from '../utils/zero-fill';
import { isFunction } from '../utils/type-checks';
export var /** @type {?} */ formatFunctions = {};
export var /** @type {?} */ formatTokenFunctions = {};
// tslint:disable-next-line
export var /** @type {?} */ formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
/**
 * @param {?} token
 * @param {?} padded
 * @param {?} ordinal
 * @param {?} callback
 * @return {?}
 */
export function addFormatToken(token, padded, ordinal, callback) {
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
export function makeFormatFunction(format) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0L2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxNQUFNLENBQUMscUJBQUksZUFBZSxHQUV0QixFQUFFLENBQUM7QUFDUCxNQUFNLENBQUMscUJBQUksb0JBQW9CLEdBQXVDLEVBQUUsQ0FBQzs7QUFHekUsTUFBTSxDQUFDLHFCQUFNLGdCQUFnQixHQUFHLHNMQUFzTCxDQUFDOzs7Ozs7OztBQU12TixNQUFNLHlCQUF5QixLQUFhLEVBQ2IsTUFBaUMsRUFDakMsT0FBZSxFQUNmLFFBQXlCO0lBRXRELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDVixvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDeEM7SUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEUsQ0FBQztLQUNIO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNaLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsSUFBVSxFQUFFLElBQTBCO1lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRSxDQUFDO0tBQ0g7Q0FDRjs7Ozs7QUFFRCxNQUFNLDZCQUE2QixNQUFjO0lBRy9DLHFCQUFNLEtBQUssR0FBYSxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkQscUJBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFNUIscUJBQU0sU0FBUyxHQUFpQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsRSxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsTUFBTSxDQUFDLFVBQVUsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFjLEVBQUUsTUFBVTtRQUFWLHVCQUFBLEVBQUEsVUFBVTtRQUNyRSxxQkFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsbUJBQUMsU0FBUyxDQUFDLENBQUMsQ0FBb0IsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUMsTUFBTSxRQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUMsQ0FBQztnQkFDckYsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZixDQUFDO0NBQ0g7Ozs7O0FBRUQsZ0NBQWdDLEtBQWE7SUFDM0MsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IHplcm9GaWxsIH0gZnJvbSAnLi4vdXRpbHMvemVyby1maWxsJztcclxuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIERhdGVGb3JtYXR0ZXJGbiB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBsZXQgZm9ybWF0RnVuY3Rpb25zOiB7XHJcbiAgW2tleTogc3RyaW5nXTogKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldD86IG51bWJlcikgPT4gc3RyaW5nO1xyXG59ID0ge307XHJcbmV4cG9ydCBsZXQgZm9ybWF0VG9rZW5GdW5jdGlvbnM6IHsgW2tleTogc3RyaW5nXTogRGF0ZUZvcm1hdHRlckZuIH0gPSB7fTtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG5leHBvcnQgY29uc3QgZm9ybWF0dGluZ1Rva2VucyA9IC8oXFxbW15cXFtdKlxcXSl8KFxcXFwpPyhbSGhdbW0oc3MpP3xNb3xNTT9NP00/fERvfERERG98REQ/RD9EP3xkZGQ/ZD98ZG8/fHdbb3x3XT98V1tvfFddP3xRbz98WVlZWVlZfFlZWVlZfFlZWVl8WVl8Z2coZ2dnPyk/fEdHKEdHRz8pP3xlfEV8YXxBfGhoP3xISD98a2s/fG1tP3xzcz98U3sxLDl9fHh8WHx6ej98Wlo/fC4pL2c7XHJcblxyXG4vLyB0b2tlbjogICAgJ00nXHJcbi8vIHBhZGRlZDogICBbJ01NJywgMl1cclxuLy8gb3JkaW5hbDogICdNbydcclxuLy8gY2FsbGJhY2s6IGZ1bmN0aW9uICgpIHsgdGhpcy5tb250aCgpICsgMSB9XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRGb3JtYXRUb2tlbih0b2tlbjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGVkOiBbc3RyaW5nLCBudW1iZXIsIGJvb2xlYW5dLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3JkaW5hbDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IERhdGVGb3JtYXR0ZXJGbik6IHZvaWQge1xyXG5cclxuICBpZiAodG9rZW4pIHtcclxuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW3Rva2VuXSA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgaWYgKHBhZGRlZCkge1xyXG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbcGFkZGVkWzBdXSA9IGZ1bmN0aW9uICgpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gemVyb0ZpbGwoY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKSwgcGFkZGVkWzFdLCBwYWRkZWRbMl0pO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChvcmRpbmFsKSB7XHJcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1tvcmRpbmFsXSA9IGZ1bmN0aW9uIChkYXRlOiBEYXRlLCBvcHRzOiBEYXRlRm9ybWF0dGVyT3B0aW9ucyk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiBvcHRzLmxvY2FsZS5vcmRpbmFsKGNhbGxiYWNrLmFwcGx5KG51bGwsIGFyZ3VtZW50cyksIHRva2VuKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFrZUZvcm1hdEZ1bmN0aW9uKGZvcm1hdDogc3RyaW5nKTpcclxuICAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmcge1xyXG5cclxuICBjb25zdCBhcnJheTogc3RyaW5nW10gPSBmb3JtYXQubWF0Y2goZm9ybWF0dGluZ1Rva2Vucyk7XHJcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xyXG5cclxuICBjb25zdCBmb3JtYXRBcnI6IHN0cmluZ1tdIHwgRGF0ZUZvcm1hdHRlckZuW10gPSBuZXcgQXJyYXkobGVuZ3RoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgZm9ybWF0QXJyW2ldID0gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dXHJcbiAgICAgID8gZm9ybWF0VG9rZW5GdW5jdGlvbnNbYXJyYXlbaV1dXHJcbiAgICAgIDogcmVtb3ZlRm9ybWF0dGluZ1Rva2VucyhhcnJheVtpXSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGU6IERhdGUsIGxvY2FsZTogTG9jYWxlLCBpc1VUQzogYm9vbGVhbiwgb2Zmc2V0ID0gMCk6IHN0cmluZyB7XHJcbiAgICBsZXQgb3V0cHV0ID0gJyc7XHJcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxlbmd0aDsgaisrKSB7XHJcbiAgICAgIG91dHB1dCArPSBpc0Z1bmN0aW9uKGZvcm1hdEFycltqXSlcclxuICAgICAgICA/IChmb3JtYXRBcnJbal0gYXMgRGF0ZUZvcm1hdHRlckZuKS5jYWxsKG51bGwsIGRhdGUsIHtmb3JtYXQsIGxvY2FsZSwgaXNVVEMsIG9mZnNldH0pXHJcbiAgICAgICAgOiBmb3JtYXRBcnJbal07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG91dHB1dDtcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xyXG4gICAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL15cXFt8XFxdJC9nLCAnJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXFxcXC9nLCAnJyk7XHJcbn1cclxuIl19