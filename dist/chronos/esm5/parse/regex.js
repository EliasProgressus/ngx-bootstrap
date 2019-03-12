/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isFunction } from '../utils/type-checks';
export var /** @type {?} */ match1 = /\d/; //       0 - 9
export var /** @type {?} */ match2 = /\d\d/; //      00 - 99
export var /** @type {?} */ match3 = /\d{3}/; //     000 - 999
export var /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
export var /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
export var /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
export var /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
export var /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
export var /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
export var /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
export var /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
export var /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
export var /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
export var /** @type {?} */ matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
export var /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
export var /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
export var /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
var /** @type {?} */ regexes = {};
/**
 * @param {?} token
 * @param {?} regex
 * @param {?=} strictRegex
 * @return {?}
 */
export function addRegexToken(token, regex, strictRegex) {
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
export function getParseRegexForToken(token, locale) {
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
export function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS9yZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUc5RCxNQUFNLENBQUMscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLENBQUMscUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixNQUFNLENBQUMscUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMscUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMscUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQztBQUNuQyxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNyQyxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQztBQUN6QyxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxNQUFNLENBQUMscUJBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUV4QyxNQUFNLENBQUMscUJBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQztBQUNuQyxNQUFNLENBQUMscUJBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQztBQUV0QyxNQUFNLENBQUMscUJBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyxxQkFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztBQUUxRCxNQUFNLENBQUMscUJBQU0sY0FBYyxHQUFHLHNCQUFzQixDQUFDOzs7O0FBS3JELE1BQU0sQ0FBQyxxQkFBTSxTQUFTLEdBQUcsMElBQTBJLENBQUM7QUFHcEsscUJBQU0sT0FBTyxHQUFtQyxFQUFFLENBQUM7Ozs7Ozs7QUFHbkQsTUFBTSx3QkFBd0IsS0FBYSxFQUFFLEtBQTZCLEVBQUUsV0FBb0I7SUFDOUYsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXZCLE1BQU0sQ0FBQztLQUNSO0lBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsUUFBaUIsRUFBRSxNQUFjO1FBQzFELE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDeEQsQ0FBQztDQUNIOzs7Ozs7QUFFRCxNQUFNLGdDQUFnQyxLQUFhLEVBQUUsTUFBYztJQUNqRSxxQkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDeEM7Ozs7O0FBR0Qsd0JBQXdCLEdBQVc7O0lBRWpDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRztTQUNuQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqQixPQUFPLENBQUMscUNBQXFDLEVBQUUsVUFBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFLLE9BQUEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQ25HLENBQUM7Q0FDSDs7Ozs7QUFFRCxNQUFNLHNCQUFzQixHQUFXO0lBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ3REIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2gxID0gL1xcZC87ICAgICAgICAgICAgLy8gICAgICAgMCAtIDlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMiA9IC9cXGRcXGQvOyAgICAgICAgICAvLyAgICAgIDAwIC0gOTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMyA9IC9cXGR7M30vOyAgICAgICAgIC8vICAgICAwMDAgLSA5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoNCA9IC9cXGR7NH0vOyAgICAgICAgIC8vICAgIDAwMDAgLSA5OTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDYgPSAvWystXT9cXGR7Nn0vOyAgICAvLyAtOTk5OTk5IC0gOTk5OTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzIgPSAvXFxkXFxkPy87ICAgICAgICAgLy8gICAgICAgMCAtIDk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDN0bzQgPSAvXFxkXFxkXFxkXFxkPy87ICAgICAvLyAgICAgOTk5IC0gOTk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2g1dG82ID0gL1xcZFxcZFxcZFxcZFxcZFxcZD8vOyAvLyAgIDk5OTk5IC0gOTk5OTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzMgPSAvXFxkezEsM30vOyAgICAgICAvLyAgICAgICAwIC0gOTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzQgPSAvXFxkezEsNH0vOyAgICAgICAvLyAgICAgICAwIC0gOTk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2gxdG82ID0gL1srLV0/XFxkezEsNn0vOyAgLy8gLTk5OTk5OSAtIDk5OTk5OVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoVW5zaWduZWQgPSAvXFxkKy87ICAgICAgICAgICAvLyAgICAgICAwIC0gaW5mXHJcbmV4cG9ydCBjb25zdCBtYXRjaFNpZ25lZCA9IC9bKy1dP1xcZCsvOyAgICAgIC8vICAgIC1pbmYgLSBpbmZcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaE9mZnNldCA9IC9afFsrLV1cXGRcXGQ6P1xcZFxcZC9naTsgLy8gKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXHJcbmV4cG9ydCBjb25zdCBtYXRjaFNob3J0T2Zmc2V0ID0gL1p8WystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZ2k7IC8vICswMCAtMDAgKzAwOjAwIC0wMDowMCArMDAwMCAtMDAwMCBvciBaXHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hUaW1lc3RhbXAgPSAvWystXT9cXGQrKFxcLlxcZHsxLDN9KT8vOyAvLyAxMjM0NTY3ODkgMTIzNDU2Nzg5LjEyM1xyXG5cclxuLy8gYW55IHdvcmQgKG9yIHR3bykgY2hhcmFjdGVycyBvciBudW1iZXJzIGluY2x1ZGluZyB0d28vdGhyZWUgd29yZCBtb250aCBpbiBhcmFiaWMuXHJcbi8vIGluY2x1ZGVzIHNjb3R0aXNoIGdhZWxpYyB0d28gd29yZCBhbmQgaHlwaGVuYXRlZCBtb250aHNcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbmV4cG9ydCBjb25zdCBtYXRjaFdvcmQgPSAvWzAtOV17MCwyNTZ9WydhLXpcXHUwMEEwLVxcdTA1RkZcXHUwNzAwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdezEsMjU2fXxbXFx1MDYwMC1cXHUwNkZGXFwvXXsxLDI1Nn0oXFxzKj9bXFx1MDYwMC1cXHUwNkZGXXsxLDI1Nn0pezEsMn0vaTtcclxuXHJcbmV4cG9ydCB0eXBlIFJlZ0V4cFRva2VuRm4gPSAoaXNTdHJpY3Q6IGJvb2xlYW4sIGxvY2FsZTogTG9jYWxlKSA9PiBSZWdFeHA7XHJcbmNvbnN0IHJlZ2V4ZXM6IHtba2V5OiBzdHJpbmddOiBSZWdFeHBUb2tlbkZufSA9IHt9O1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRSZWdleFRva2VuKHRva2VuOiBzdHJpbmcsIHJlZ2V4OiBSZWdFeHAgfCBSZWdFeHBUb2tlbkZuLCBzdHJpY3RSZWdleD86IFJlZ0V4cCk6IHZvaWQge1xyXG4gIGlmIChpc0Z1bmN0aW9uKHJlZ2V4KSkge1xyXG4gICAgcmVnZXhlc1t0b2tlbl0gPSByZWdleDtcclxuXHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICByZWdleGVzW3Rva2VuXSA9IGZ1bmN0aW9uIChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpIHtcclxuICAgIHJldHVybiAoaXNTdHJpY3QgJiYgc3RyaWN0UmVnZXgpID8gc3RyaWN0UmVnZXggOiByZWdleDtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyc2VSZWdleEZvclRva2VuKHRva2VuOiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogUmVnRXhwIHtcclxuICBjb25zdCBfc3RyaWN0ID0gZmFsc2U7XHJcbiAgaWYgKCFoYXNPd25Qcm9wKHJlZ2V4ZXMsIHRva2VuKSkge1xyXG4gICAgcmV0dXJuIG5ldyBSZWdFeHAodW5lc2NhcGVGb3JtYXQodG9rZW4pKTtcclxuICB9XHJcblxyXG4gIHJldHVybiByZWdleGVzW3Rva2VuXShfc3RyaWN0LCBsb2NhbGUpO1xyXG59XHJcblxyXG4vLyBDb2RlIGZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNTYxNDkzL2lzLXRoZXJlLWEtcmVnZXhwLWVzY2FwZS1mdW5jdGlvbi1pbi1qYXZhc2NyaXB0XHJcbmZ1bmN0aW9uIHVuZXNjYXBlRm9ybWF0KHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICByZXR1cm4gcmVnZXhFc2NhcGUoc3RyXHJcbiAgICAucmVwbGFjZSgnXFxcXCcsICcnKVxyXG4gICAgLnJlcGxhY2UoL1xcXFwoXFxbKXxcXFxcKFxcXSl8XFxbKFteXFxdXFxbXSopXFxdfFxcXFwoLikvZywgKG1hdGNoZWQsIHAxLCBwMiwgcDMsIHA0KSA9PiBwMSB8fCBwMiB8fCBwMyB8fCBwNClcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnZXhFc2NhcGUoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1cXC9cXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XHJcbn1cclxuIl19