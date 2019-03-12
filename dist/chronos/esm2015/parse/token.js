/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isArray, isFunction, isNumber, isString, toInt } from '../utils/type-checks';
const /** @type {?} */ tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addParseToken(token, callback) {
    const /** @type {?} */ _token = isString(token) ? [token] : token;
    let /** @type {?} */ func = callback;
    if (isNumber(callback)) {
        func = function (input, array, config) {
            array[callback] = toInt(input);
            return config;
        };
    }
    if (isArray(_token) && isFunction(func)) {
        let /** @type {?} */ i;
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
export function addWeekParseToken(token, callback) {
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
export function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
    return config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbEcsdUJBQU0sTUFBTSxHQUFzQyxFQUFFLENBQUM7Ozs7OztBQUVyRCxNQUFNLHdCQUF3QixLQUF3QixFQUFFLFFBQW1DO0lBQ3pGLHVCQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRCxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBRXBCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2YsQ0FBQztLQUNIO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFTLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQscUJBQUksQ0FBQyxDQUFDO1FBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDMUI7S0FDRjtDQUNGOzs7Ozs7QUFFRCxNQUFNLDRCQUE0QixLQUFlLEVBQUUsUUFBMEI7SUFDM0UsYUFBYSxDQUFDLEtBQUssRUFBRSxVQUFVLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCLEVBQUUsTUFBYztRQUN2RyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ25ELENBQUMsQ0FBQztDQUNKOzs7Ozs7O0FBR0QsTUFBTSxrQ0FBa0MsS0FBYSxFQUFFLEtBQWEsRUFBRSxNQUF5QjtJQUM3RixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDaEQ7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNOdW1iZXIsIGlzU3RyaW5nLCB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuLi9jcmVhdGUvcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZVBhcnNlVG9rZW5GbiB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IHRva2Vuczoge1trZXk6IHN0cmluZ106IERhdGVQYXJzZVRva2VuRm59ID0ge307XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nIHwgc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuIHwgbnVtYmVyKSB7XHJcbiAgY29uc3QgX3Rva2VuID0gaXNTdHJpbmcodG9rZW4pID8gW3Rva2VuXSA6IHRva2VuO1xyXG4gIGxldCBmdW5jID0gY2FsbGJhY2s7XHJcblxyXG4gIGlmIChpc051bWJlcihjYWxsYmFjaykpIHtcclxuICAgIGZ1bmMgPSBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgICAgYXJyYXlbY2FsbGJhY2tdID0gdG9JbnQoaW5wdXQpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbmZpZztcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoaXNBcnJheTxzdHJpbmc+KF90b2tlbikgJiYgaXNGdW5jdGlvbihmdW5jKSkge1xyXG4gICAgbGV0IGk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgX3Rva2VuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRva2Vuc1tfdG9rZW5baV1dID0gZnVuYztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRXZWVrUGFyc2VUb2tlbih0b2tlbjogc3RyaW5nW10sIGNhbGxiYWNrOiBEYXRlUGFyc2VUb2tlbkZuKTogdm9pZCB7XHJcbiAgYWRkUGFyc2VUb2tlbih0b2tlbiwgZnVuY3Rpb24gKGlucHV0OiBzdHJpbmcsIGFycmF5OiBEYXRlQXJyYXksIGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcsIF90b2tlbjogc3RyaW5nKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgY29uZmlnLl93ID0gY29uZmlnLl93IHx8IHt9O1xyXG5cclxuICAgIHJldHVybiBjYWxsYmFjayhpbnB1dCwgY29uZmlnLl93LCBjb25maWcsIF90b2tlbik7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVGltZVRvQXJyYXlGcm9tVG9rZW4odG9rZW46IHN0cmluZywgaW5wdXQ6IHN0cmluZywgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBpZiAoaW5wdXQgIT0gbnVsbCAmJiBoYXNPd25Qcm9wKHRva2VucywgdG9rZW4pKSB7XHJcbiAgICB0b2tlbnNbdG9rZW5dKGlucHV0LCBjb25maWcuX2EsIGNvbmZpZywgdG9rZW4pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG4iXX0=