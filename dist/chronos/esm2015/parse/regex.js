/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isFunction } from '../utils/type-checks';
export const /** @type {?} */ match1 = /\d/; //       0 - 9
export const /** @type {?} */ match2 = /\d\d/; //      00 - 99
export const /** @type {?} */ match3 = /\d{3}/; //     000 - 999
export const /** @type {?} */ match4 = /\d{4}/; //    0000 - 9999
export const /** @type {?} */ match6 = /[+-]?\d{6}/; // -999999 - 999999
export const /** @type {?} */ match1to2 = /\d\d?/; //       0 - 99
export const /** @type {?} */ match3to4 = /\d\d\d\d?/; //     999 - 9999
export const /** @type {?} */ match5to6 = /\d\d\d\d\d\d?/; //   99999 - 999999
export const /** @type {?} */ match1to3 = /\d{1,3}/; //       0 - 999
export const /** @type {?} */ match1to4 = /\d{1,4}/; //       0 - 9999
export const /** @type {?} */ match1to6 = /[+-]?\d{1,6}/; // -999999 - 999999
export const /** @type {?} */ matchUnsigned = /\d+/; //       0 - inf
export const /** @type {?} */ matchSigned = /[+-]?\d+/; //    -inf - inf
export const /** @type {?} */ matchOffset = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
export const /** @type {?} */ matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
export const /** @type {?} */ matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
// tslint:disable-next-line
export const /** @type {?} */ matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
const /** @type {?} */ regexes = {};
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
    const /** @type {?} */ _strict = false;
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
        .replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, (matched, p1, p2, p3, p4) => p1 || p2 || p3 || p4));
}
/**
 * @param {?} str
 * @return {?}
 */
export function regexEscape(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS9yZWdleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUc5RCxNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQztBQUMzQixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUM3QixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUM5QixNQUFNLENBQUMsdUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUNqQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUNyQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQztBQUN6QyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sU0FBUyxHQUFHLGNBQWMsQ0FBQztBQUV4QyxNQUFNLENBQUMsdUJBQU0sYUFBYSxHQUFHLEtBQUssQ0FBQztBQUNuQyxNQUFNLENBQUMsdUJBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQztBQUV0QyxNQUFNLENBQUMsdUJBQU0sV0FBVyxHQUFHLG9CQUFvQixDQUFDO0FBQ2hELE1BQU0sQ0FBQyx1QkFBTSxnQkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztBQUUxRCxNQUFNLENBQUMsdUJBQU0sY0FBYyxHQUFHLHNCQUFzQixDQUFDOzs7O0FBS3JELE1BQU0sQ0FBQyx1QkFBTSxTQUFTLEdBQUcsMElBQTBJLENBQUM7QUFHcEssdUJBQU0sT0FBTyxHQUFtQyxFQUFFLENBQUM7Ozs7Ozs7QUFHbkQsTUFBTSx3QkFBd0IsS0FBYSxFQUFFLEtBQTZCLEVBQUUsV0FBb0I7SUFDOUYsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBRXZCLE1BQU0sQ0FBQztLQUNSO0lBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLFVBQVUsUUFBaUIsRUFBRSxNQUFjO1FBQzFELE1BQU0sQ0FBQyxDQUFDLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDeEQsQ0FBQztDQUNIOzs7Ozs7QUFFRCxNQUFNLGdDQUFnQyxLQUFhLEVBQUUsTUFBYztJQUNqRSx1QkFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsTUFBTSxDQUFDLElBQUksTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQzFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDeEM7Ozs7O0FBR0Qsd0JBQXdCLEdBQVc7O0lBRWpDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRztTQUNuQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztTQUNqQixPQUFPLENBQUMscUNBQXFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDbkcsQ0FBQztDQUNIOzs7OztBQUVELE1BQU0sc0JBQXNCLEdBQVc7SUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi9sb2NhbGUvbG9jYWxlLmNsYXNzJztcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaDEgPSAvXFxkLzsgICAgICAgICAgICAvLyAgICAgICAwIC0gOVxyXG5leHBvcnQgY29uc3QgbWF0Y2gyID0gL1xcZFxcZC87ICAgICAgICAgIC8vICAgICAgMDAgLSA5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2gzID0gL1xcZHszfS87ICAgICAgICAgLy8gICAgIDAwMCAtIDk5OVxyXG5leHBvcnQgY29uc3QgbWF0Y2g0ID0gL1xcZHs0fS87ICAgICAgICAgLy8gICAgMDAwMCAtIDk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoNiA9IC9bKy1dP1xcZHs2fS87ICAgIC8vIC05OTk5OTkgLSA5OTk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMiA9IC9cXGRcXGQ/LzsgICAgICAgICAvLyAgICAgICAwIC0gOTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoM3RvNCA9IC9cXGRcXGRcXGRcXGQ/LzsgICAgIC8vICAgICA5OTkgLSA5OTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDV0bzYgPSAvXFxkXFxkXFxkXFxkXFxkXFxkPy87IC8vICAgOTk5OTkgLSA5OTk5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvMyA9IC9cXGR7MSwzfS87ICAgICAgIC8vICAgICAgIDAgLSA5OTlcclxuZXhwb3J0IGNvbnN0IG1hdGNoMXRvNCA9IC9cXGR7MSw0fS87ICAgICAgIC8vICAgICAgIDAgLSA5OTk5XHJcbmV4cG9ydCBjb25zdCBtYXRjaDF0bzYgPSAvWystXT9cXGR7MSw2fS87ICAvLyAtOTk5OTk5IC0gOTk5OTk5XHJcblxyXG5leHBvcnQgY29uc3QgbWF0Y2hVbnNpZ25lZCA9IC9cXGQrLzsgICAgICAgICAgIC8vICAgICAgIDAgLSBpbmZcclxuZXhwb3J0IGNvbnN0IG1hdGNoU2lnbmVkID0gL1srLV0/XFxkKy87ICAgICAgLy8gICAgLWluZiAtIGluZlxyXG5cclxuZXhwb3J0IGNvbnN0IG1hdGNoT2Zmc2V0ID0gL1p8WystXVxcZFxcZDo/XFxkXFxkL2dpOyAvLyArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcclxuZXhwb3J0IGNvbnN0IG1hdGNoU2hvcnRPZmZzZXQgPSAvWnxbKy1dXFxkXFxkKD86Oj9cXGRcXGQpPy9naTsgLy8gKzAwIC0wMCArMDA6MDAgLTAwOjAwICswMDAwIC0wMDAwIG9yIFpcclxuXHJcbmV4cG9ydCBjb25zdCBtYXRjaFRpbWVzdGFtcCA9IC9bKy1dP1xcZCsoXFwuXFxkezEsM30pPy87IC8vIDEyMzQ1Njc4OSAxMjM0NTY3ODkuMTIzXHJcblxyXG4vLyBhbnkgd29yZCAob3IgdHdvKSBjaGFyYWN0ZXJzIG9yIG51bWJlcnMgaW5jbHVkaW5nIHR3by90aHJlZSB3b3JkIG1vbnRoIGluIGFyYWJpYy5cclxuLy8gaW5jbHVkZXMgc2NvdHRpc2ggZ2FlbGljIHR3byB3b3JkIGFuZCBoeXBoZW5hdGVkIG1vbnRoc1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuZXhwb3J0IGNvbnN0IG1hdGNoV29yZCA9IC9bMC05XXswLDI1Nn1bJ2EtelxcdTAwQTAtXFx1MDVGRlxcdTA3MDAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl17MSwyNTZ9fFtcXHUwNjAwLVxcdTA2RkZcXC9dezEsMjU2fShcXHMqP1tcXHUwNjAwLVxcdTA2RkZdezEsMjU2fSl7MSwyfS9pO1xyXG5cclxuZXhwb3J0IHR5cGUgUmVnRXhwVG9rZW5GbiA9IChpc1N0cmljdDogYm9vbGVhbiwgbG9jYWxlOiBMb2NhbGUpID0+IFJlZ0V4cDtcclxuY29uc3QgcmVnZXhlczoge1trZXk6IHN0cmluZ106IFJlZ0V4cFRva2VuRm59ID0ge307XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlZ2V4VG9rZW4odG9rZW46IHN0cmluZywgcmVnZXg6IFJlZ0V4cCB8IFJlZ0V4cFRva2VuRm4sIHN0cmljdFJlZ2V4PzogUmVnRXhwKTogdm9pZCB7XHJcbiAgaWYgKGlzRnVuY3Rpb24ocmVnZXgpKSB7XHJcbiAgICByZWdleGVzW3Rva2VuXSA9IHJlZ2V4O1xyXG5cclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIHJlZ2V4ZXNbdG9rZW5dID0gZnVuY3Rpb24gKGlzU3RyaWN0OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSkge1xyXG4gICAgcmV0dXJuIChpc1N0cmljdCAmJiBzdHJpY3RSZWdleCkgPyBzdHJpY3RSZWdleCA6IHJlZ2V4O1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJzZVJlZ2V4Rm9yVG9rZW4odG9rZW46IHN0cmluZywgbG9jYWxlOiBMb2NhbGUpOiBSZWdFeHAge1xyXG4gIGNvbnN0IF9zdHJpY3QgPSBmYWxzZTtcclxuICBpZiAoIWhhc093blByb3AocmVnZXhlcywgdG9rZW4pKSB7XHJcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCh1bmVzY2FwZUZvcm1hdCh0b2tlbikpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlZ2V4ZXNbdG9rZW5dKF9zdHJpY3QsIGxvY2FsZSk7XHJcbn1cclxuXHJcbi8vIENvZGUgZnJvbSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM1NjE0OTMvaXMtdGhlcmUtYS1yZWdleHAtZXNjYXBlLWZ1bmN0aW9uLWluLWphdmFzY3JpcHRcclxuZnVuY3Rpb24gdW5lc2NhcGVGb3JtYXQoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gIHJldHVybiByZWdleEVzY2FwZShzdHJcclxuICAgIC5yZXBsYWNlKCdcXFxcJywgJycpXHJcbiAgICAucmVwbGFjZSgvXFxcXChcXFspfFxcXFwoXFxdKXxcXFsoW15cXF1cXFtdKilcXF18XFxcXCguKS9nLCAobWF0Y2hlZCwgcDEsIHAyLCBwMywgcDQpID0+IHAxIHx8IHAyIHx8IHAzIHx8IHA0KVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdleEVzY2FwZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bLVxcL1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcclxufVxyXG4iXX0=