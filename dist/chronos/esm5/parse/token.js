/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isArray, isFunction, isNumber, isString, toInt } from '../utils/type-checks';
var /** @type {?} */ tokens = {};
/**
 * @param {?} token
 * @param {?} callback
 * @return {?}
 */
export function addParseToken(token, callback) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJwYXJzZS90b2tlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFJbEcscUJBQU0sTUFBTSxHQUFzQyxFQUFFLENBQUM7Ozs7OztBQUVyRCxNQUFNLHdCQUF3QixLQUF3QixFQUFFLFFBQW1DO0lBQ3pGLHFCQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRCxxQkFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDO0lBRXBCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxHQUFHLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7WUFDekUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUvQixNQUFNLENBQUMsTUFBTSxDQUFDO1NBQ2YsQ0FBQztLQUNIO0lBRUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFTLE1BQU0sQ0FBQyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQscUJBQUksQ0FBQyxTQUFBLENBQUM7UUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMxQjtLQUNGO0NBQ0Y7Ozs7OztBQUVELE1BQU0sNEJBQTRCLEtBQWUsRUFBRSxRQUEwQjtJQUMzRSxhQUFhLENBQUMsS0FBSyxFQUFFLFVBQVUsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUIsRUFBRSxNQUFjO1FBQ3ZHLE1BQU0sQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFNUIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDbkQsQ0FBQyxDQUFDO0NBQ0o7Ozs7Ozs7QUFHRCxNQUFNLGtDQUFrQyxLQUFhLEVBQUUsS0FBYSxFQUFFLE1BQXlCO0lBQzdGLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztLQUNoRDtJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxyXG5pbXBvcnQgeyBoYXNPd25Qcm9wLCBpc0FycmF5LCBpc0Z1bmN0aW9uLCBpc051bWJlciwgaXNTdHJpbmcsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUFycmF5LCBEYXRlUGFyc2VUb2tlbkZuIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgdG9rZW5zOiB7W2tleTogc3RyaW5nXTogRGF0ZVBhcnNlVG9rZW5Gbn0gPSB7fTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRQYXJzZVRva2VuKHRva2VuOiBzdHJpbmcgfCBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4gfCBudW1iZXIpIHtcclxuICBjb25zdCBfdG9rZW4gPSBpc1N0cmluZyh0b2tlbikgPyBbdG9rZW5dIDogdG9rZW47XHJcbiAgbGV0IGZ1bmMgPSBjYWxsYmFjaztcclxuXHJcbiAgaWYgKGlzTnVtYmVyKGNhbGxiYWNrKSkge1xyXG4gICAgZnVuYyA9IGZ1bmN0aW9uIChpbnB1dDogc3RyaW5nLCBhcnJheTogRGF0ZUFycmF5LCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gICAgICBhcnJheVtjYWxsYmFja10gPSB0b0ludChpbnB1dCk7XHJcblxyXG4gICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChpc0FycmF5PHN0cmluZz4oX3Rva2VuKSAmJiBpc0Z1bmN0aW9uKGZ1bmMpKSB7XHJcbiAgICBsZXQgaTtcclxuICAgIGZvciAoaSA9IDA7IGkgPCBfdG9rZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdG9rZW5zW190b2tlbltpXV0gPSBmdW5jO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFdlZWtQYXJzZVRva2VuKHRva2VuOiBzdHJpbmdbXSwgY2FsbGJhY2s6IERhdGVQYXJzZVRva2VuRm4pOiB2b2lkIHtcclxuICBhZGRQYXJzZVRva2VuKHRva2VuLCBmdW5jdGlvbiAoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgX3Rva2VuOiBzdHJpbmcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgICBjb25maWcuX3cgPSBjb25maWcuX3cgfHwge307XHJcblxyXG4gICAgcmV0dXJuIGNhbGxiYWNrKGlucHV0LCBjb25maWcuX3csIGNvbmZpZywgX3Rva2VuKTtcclxuICB9KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRUaW1lVG9BcnJheUZyb21Ub2tlbih0b2tlbjogc3RyaW5nLCBpbnB1dDogc3RyaW5nLCBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGlmIChpbnB1dCAhPSBudWxsICYmIGhhc093blByb3AodG9rZW5zLCB0b2tlbikpIHtcclxuICAgIHRva2Vuc1t0b2tlbl0oaW5wdXQsIGNvbmZpZy5fYSwgY29uZmlnLCB0b2tlbik7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcbiJdfQ==