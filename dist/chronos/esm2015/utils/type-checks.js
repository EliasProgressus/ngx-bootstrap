/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { absFloor } from '../utils';
/**
 * @param {?} str
 * @return {?}
 */
export function isString(str) {
    return typeof str === 'string';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isDate(value) {
    return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isBoolean(value) {
    return value === true || value === false;
}
/**
 * @param {?} date
 * @return {?}
 */
export function isDateValid(date) {
    return date && date.getTime && !isNaN(date.getTime());
}
/**
 * @param {?} fn
 * @return {?}
 */
export function isFunction(fn) {
    return (fn instanceof Function ||
        Object.prototype.toString.call(fn) === '[object Function]');
}
/**
 * @param {?=} value
 * @return {?}
 */
export function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}
/**
 * @template T
 * @param {?=} input
 * @return {?}
 */
export function isArray(input) {
    return (input instanceof Array ||
        Object.prototype.toString.call(input) === '[object Array]');
}
/**
 * @template T
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
export function hasOwnProp(a /*object*/, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
/**
 * @template T
 * @param {?} input
 * @return {?}
 */
export function isObject(input /*object*/) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return (input != null && Object.prototype.toString.call(input) === '[object Object]');
}
/**
 * @param {?} obj
 * @return {?}
 */
export function isObjectEmpty(obj) {
    if (Object.getOwnPropertyNames) {
        return (Object.getOwnPropertyNames(obj).length === 0);
    }
    let /** @type {?} */ k;
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
export function isUndefined(input) {
    return input === void 0;
}
/**
 * @template T
 * @param {?} argumentForCoercion
 * @return {?}
 */
export function toInt(argumentForCoercion) {
    const /** @type {?} */ coercedNumber = +argumentForCoercion;
    let /** @type {?} */ value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }
    return value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZS1jaGVja3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1dGlscy90eXBlLWNoZWNrcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7Ozs7QUFFcEMsTUFBTSxtQkFBbUIsR0FBUTtJQUMvQixNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssUUFBUSxDQUFDO0NBQ2hDOzs7OztBQUVELE1BQU0saUJBQWlCLEtBQVU7SUFDL0IsTUFBTSxDQUFDLEtBQUssWUFBWSxJQUFJLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGVBQWUsQ0FBQztDQUMzRjs7Ozs7QUFFRCxNQUFNLG9CQUFvQixLQUFVO0lBQ2xDLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUM7Q0FDMUM7Ozs7O0FBRUQsTUFBTSxzQkFBc0IsSUFBVTtJQUNwQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7Q0FDdkQ7Ozs7O0FBRUQsTUFBTSxxQkFBcUIsRUFBTztJQUNoQyxNQUFNLENBQUMsQ0FDTCxFQUFFLFlBQVksUUFBUTtRQUN0QixNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssbUJBQW1CLENBQzNELENBQUM7Q0FDSDs7Ozs7QUFFRCxNQUFNLG1CQUFtQixLQUFXO0lBQ2xDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGlCQUFpQixDQUFDO0NBQ2pHOzs7Ozs7QUFFRCxNQUFNLGtCQUFxQixLQUFXO0lBQ3BDLE1BQU0sQ0FBQyxDQUNMLEtBQUssWUFBWSxLQUFLO1FBQ3RCLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxnQkFBZ0IsQ0FDM0QsQ0FBQztDQUNIOzs7Ozs7O0FBSUQsTUFBTSxxQkFBd0IsQ0FBSSxhQUFhLENBQVM7SUFDdEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDbkQ7Ozs7OztBQUVELE1BQU0sbUJBQXNCLEtBQVU7OztJQUdwQyxNQUFNLENBQUMsQ0FDTCxLQUFLLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxpQkFBaUIsQ0FDN0UsQ0FBQztDQUNIOzs7OztBQUVELE1BQU0sd0JBQXdCLEdBQVE7SUFDcEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUMvQixNQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3ZEO0lBQ0QscUJBQUksQ0FBQyxDQUFDO0lBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZCxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYjs7Ozs7QUFHRCxNQUFNLHNCQUFzQixLQUFVO0lBQ3BDLE1BQU0sQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLENBQUM7Q0FDekI7Ozs7OztBQUVELE1BQU0sZ0JBQW1CLG1CQUF3QztJQUMvRCx1QkFBTSxhQUFhLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQztJQUMzQyxxQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBRWQsRUFBRSxDQUFDLENBQUMsYUFBYSxLQUFLLENBQUMsSUFBSSxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7S0FDakM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhYnNGbG9vciB9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZyhzdHI6IGFueSk6IHN0ciBpcyBzdHJpbmcge1xyXG4gIHJldHVybiB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZTogYW55KTogdmFsdWUgaXMgRGF0ZSB7XHJcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWU6IGFueSk6IHZhbHVlIGlzIGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGVWYWxpZChkYXRlOiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGRhdGUgJiYgZGF0ZS5nZXRUaW1lICYmICFpc05hTihkYXRlLmdldFRpbWUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Z1bmN0aW9uKGZuOiBhbnkpOiBmbiBpcyBGdW5jdGlvbiB7XHJcbiAgcmV0dXJuIChcclxuICAgIGZuIGluc3RhbmNlb2YgRnVuY3Rpb24gfHxcclxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSdcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU/OiBhbnkpOiB2YWx1ZSBpcyBudW1iZXIge1xyXG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IE51bWJlcl0nO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBcnJheTxUPihpbnB1dD86IGFueSk6IGlucHV0IGlzIFRbXSB7XHJcbiAgcmV0dXJuIChcclxuICAgIGlucHV0IGluc3RhbmNlb2YgQXJyYXkgfHxcclxuICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IEFycmF5XSdcclxuICApO1xyXG59XHJcblxyXG4vLyBUT0RPOiByZXR1cm5lZCB0eXBlIHNob3VsZCBiZSBjaGFuZ2VkIHRvIFwiYiBpcyBFeHRyYWN0PGtleW9mIFQsIHN0cmluZz5cIlxyXG4vLyBhZnRlciB1cGRhdGUgdG8gdHlwZXNjcmlwdCAzLjEuMSAoaXNzdWUgNDcyOClcclxuZXhwb3J0IGZ1bmN0aW9uIGhhc093blByb3A8VD4oYTogVCAvKm9iamVjdCovLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGEsIGIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Q8VD4oaW5wdXQ6IGFueSAvKm9iamVjdCovKTogaW5wdXQgaXMgVCB7XHJcbiAgLy8gSUU4IHdpbGwgdHJlYXQgdW5kZWZpbmVkIGFuZCBudWxsIGFzIG9iamVjdCBpZiBpdCB3YXNuJ3QgZm9yXHJcbiAgLy8gaW5wdXQgIT0gbnVsbFxyXG4gIHJldHVybiAoXHJcbiAgICBpbnB1dCAhPSBudWxsICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0RW1wdHkob2JqOiBhbnkpOiBib29sZWFuIHtcclxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMpIHtcclxuICAgIHJldHVybiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDApO1xyXG4gIH1cclxuICBsZXQgaztcclxuICBmb3IgKGsgaW4gb2JqKSB7XHJcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGspKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKGlucHV0OiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gaW5wdXQgPT09IHZvaWQgMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvSW50PFQ+KGFyZ3VtZW50Rm9yQ29lcmNpb246IHN0cmluZyB8IG51bWJlciB8IFQpOiBudW1iZXIge1xyXG4gIGNvbnN0IGNvZXJjZWROdW1iZXIgPSArYXJndW1lbnRGb3JDb2VyY2lvbjtcclxuICBsZXQgdmFsdWUgPSAwO1xyXG5cclxuICBpZiAoY29lcmNlZE51bWJlciAhPT0gMCAmJiBpc0Zpbml0ZShjb2VyY2VkTnVtYmVyKSkge1xyXG4gICAgdmFsdWUgPSBhYnNGbG9vcihjb2VyY2VkTnVtYmVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG4iXX0=