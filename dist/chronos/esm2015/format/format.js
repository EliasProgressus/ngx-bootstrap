/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { zeroFill } from '../utils/zero-fill';
import { isFunction } from '../utils/type-checks';
export let /** @type {?} */ formatFunctions = {};
export let /** @type {?} */ formatTokenFunctions = {};
// tslint:disable-next-line
export const /** @type {?} */ formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
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
    const /** @type {?} */ array = format.match(formattingTokens);
    const /** @type {?} */ length = array.length;
    const /** @type {?} */ formatArr = new Array(length);
    for (let /** @type {?} */ i = 0; i < length; i++) {
        formatArr[i] = formatTokenFunctions[array[i]]
            ? formatTokenFunctions[array[i]]
            : removeFormattingTokens(array[i]);
    }
    return function (date, locale, isUTC, offset = 0) {
        let /** @type {?} */ output = '';
        for (let /** @type {?} */ j = 0; j < length; j++) {
            output += isFunction(formatArr[j])
                ? (/** @type {?} */ (formatArr[j])).call(null, date, { format, locale, isUTC, offset })
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0L2Zvcm1hdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxNQUFNLENBQUMscUJBQUksZUFBZSxHQUV0QixFQUFFLENBQUM7QUFDUCxNQUFNLENBQUMscUJBQUksb0JBQW9CLEdBQXVDLEVBQUUsQ0FBQzs7QUFHekUsTUFBTSxDQUFDLHVCQUFNLGdCQUFnQixHQUFHLHNMQUFzTCxDQUFDOzs7Ozs7OztBQU12TixNQUFNLHlCQUF5QixLQUFhLEVBQ2IsTUFBaUMsRUFDakMsT0FBZSxFQUNmLFFBQXlCO0lBRXRELEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDVixvQkFBb0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUM7S0FDeEM7SUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDaEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEUsQ0FBQztLQUNIO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNaLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQVUsSUFBVSxFQUFFLElBQTBCO1lBQzlFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNwRSxDQUFDO0tBQ0g7Q0FDRjs7Ozs7QUFFRCxNQUFNLDZCQUE2QixNQUFjO0lBRy9DLHVCQUFNLEtBQUssR0FBYSxNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDdkQsdUJBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFFNUIsdUJBQU0sU0FBUyxHQUFpQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsRSxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUNoQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3RDO0lBRUQsTUFBTSxDQUFDLFVBQVUsSUFBVSxFQUFFLE1BQWMsRUFBRSxLQUFjLEVBQUUsTUFBTSxHQUFHLENBQUM7UUFDckUscUJBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoQyxNQUFNLElBQUksVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLG1CQUFDLFNBQVMsQ0FBQyxDQUFDLENBQW9CLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDO2dCQUNyRixDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO1FBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNmLENBQUM7Q0FDSDs7Ozs7QUFFRCxnQ0FBZ0MsS0FBYTtJQUMzQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDdEM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Q0FDakMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgemVyb0ZpbGwgfSBmcm9tICcuLi91dGlscy96ZXJvLWZpbGwnO1xyXG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyT3B0aW9ucywgRGF0ZUZvcm1hdHRlckZuIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGxldCBmb3JtYXRGdW5jdGlvbnM6IHtcclxuICBba2V5OiBzdHJpbmddOiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDPzogYm9vbGVhbiwgb2Zmc2V0PzogbnVtYmVyKSA9PiBzdHJpbmc7XHJcbn0gPSB7fTtcclxuZXhwb3J0IGxldCBmb3JtYXRUb2tlbkZ1bmN0aW9uczogeyBba2V5OiBzdHJpbmddOiBEYXRlRm9ybWF0dGVyRm4gfSA9IHt9O1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCBjb25zdCBmb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KFtIaF1tbShzcyk/fE1vfE1NP00/TT98RG98REREb3xERD9EP0Q/fGRkZD9kP3xkbz98d1tvfHddP3xXW298V10/fFFvP3xZWVlZWVl8WVlZWVl8WVlZWXxZWXxnZyhnZ2c/KT98R0coR0dHPyk/fGV8RXxhfEF8aGg/fEhIP3xraz98bW0/fHNzP3xTezEsOX18eHxYfHp6P3xaWj98LikvZztcclxuXHJcbi8vIHRva2VuOiAgICAnTSdcclxuLy8gcGFkZGVkOiAgIFsnTU0nLCAyXVxyXG4vLyBvcmRpbmFsOiAgJ01vJ1xyXG4vLyBjYWxsYmFjazogZnVuY3Rpb24gKCkgeyB0aGlzLm1vbnRoKCkgKyAxIH1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEZvcm1hdFRva2VuKHRva2VuOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkZWQ6IFtzdHJpbmcsIG51bWJlciwgYm9vbGVhbl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmRpbmFsOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogRGF0ZUZvcm1hdHRlckZuKTogdm9pZCB7XHJcblxyXG4gIGlmICh0b2tlbikge1xyXG4gICAgZm9ybWF0VG9rZW5GdW5jdGlvbnNbdG9rZW5dID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBpZiAocGFkZGVkKSB7XHJcbiAgICBmb3JtYXRUb2tlbkZ1bmN0aW9uc1twYWRkZWRbMF1dID0gZnVuY3Rpb24gKCk6IHN0cmluZyB7XHJcbiAgICAgIHJldHVybiB6ZXJvRmlsbChjYWxsYmFjay5hcHBseShudWxsLCBhcmd1bWVudHMpLCBwYWRkZWRbMV0sIHBhZGRlZFsyXSk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKG9yZGluYWwpIHtcclxuICAgIGZvcm1hdFRva2VuRnVuY3Rpb25zW29yZGluYWxdID0gZnVuY3Rpb24gKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIG9wdHMubG9jYWxlLm9yZGluYWwoY2FsbGJhY2suYXBwbHkobnVsbCwgYXJndW1lbnRzKSwgdG9rZW4pO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlRm9ybWF0RnVuY3Rpb24oZm9ybWF0OiBzdHJpbmcpOlxyXG4gIChkYXRlOiBEYXRlLCBsb2NhbGU6IExvY2FsZSwgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQ/OiBudW1iZXIpID0+IHN0cmluZyB7XHJcblxyXG4gIGNvbnN0IGFycmF5OiBzdHJpbmdbXSA9IGZvcm1hdC5tYXRjaChmb3JtYXR0aW5nVG9rZW5zKTtcclxuICBjb25zdCBsZW5ndGggPSBhcnJheS5sZW5ndGg7XHJcblxyXG4gIGNvbnN0IGZvcm1hdEFycjogc3RyaW5nW10gfCBEYXRlRm9ybWF0dGVyRm5bXSA9IG5ldyBBcnJheShsZW5ndGgpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICBmb3JtYXRBcnJbaV0gPSBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cclxuICAgICAgPyBmb3JtYXRUb2tlbkZ1bmN0aW9uc1thcnJheVtpXV1cclxuICAgICAgOiByZW1vdmVGb3JtYXR0aW5nVG9rZW5zKGFycmF5W2ldKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBmdW5jdGlvbiAoZGF0ZTogRGF0ZSwgbG9jYWxlOiBMb2NhbGUsIGlzVVRDOiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcclxuICAgIGxldCBvdXRwdXQgPSAnJztcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGVuZ3RoOyBqKyspIHtcclxuICAgICAgb3V0cHV0ICs9IGlzRnVuY3Rpb24oZm9ybWF0QXJyW2pdKVxyXG4gICAgICAgID8gKGZvcm1hdEFycltqXSBhcyBEYXRlRm9ybWF0dGVyRm4pLmNhbGwobnVsbCwgZGF0ZSwge2Zvcm1hdCwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0fSlcclxuICAgICAgICA6IGZvcm1hdEFycltqXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKGlucHV0Lm1hdGNoKC9cXFtbXFxzXFxTXS8pKSB7XHJcbiAgICByZXR1cm4gaW5wdXQucmVwbGFjZSgvXlxcW3xcXF0kL2csICcnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKTtcclxufVxyXG4iXX0=