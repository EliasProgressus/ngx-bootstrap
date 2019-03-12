/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createLocalOrUTC } from './from-anything';
import { isDate } from '../utils/type-checks';
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
export function parseDate(input, format, localeKey, strict, isUTC) {
    if (isDate(input)) {
        return input;
    }
    const /** @type {?} */ config = createLocalOrUTC(input, format, localeKey, strict, isUTC);
    return config._d;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvbG9jYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBR25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7O0FBRTlDLE1BQU0sb0JBQW9CLEtBQWdCLEVBQUUsTUFBMEIsRUFDNUMsU0FBa0IsRUFBRSxNQUFnQixFQUFFLEtBQWU7SUFDN0UsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFFRCx1QkFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXpFLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTG9jYWxPclVUQyB9IGZyb20gJy4vZnJvbS1hbnl0aGluZyc7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRGF0ZUlucHV0IH0gZnJvbSAnLi4vdGVzdC9jaGFpbic7XHJcbmltcG9ydCB7IGlzRGF0ZSB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUoaW5wdXQ6IERhdGVJbnB1dCwgZm9ybWF0Pzogc3RyaW5nIHwgc3RyaW5nW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBpZiAoaXNEYXRlKGlucHV0KSkge1xyXG4gICAgcmV0dXJuIGlucHV0O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29uZmlnID0gY3JlYXRlTG9jYWxPclVUQyhpbnB1dCwgZm9ybWF0LCBsb2NhbGVLZXksIHN0cmljdCwgaXNVVEMpO1xyXG5cclxuICByZXR1cm4gY29uZmlnLl9kO1xyXG59XHJcbiJdfQ==