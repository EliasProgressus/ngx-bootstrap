/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isString } from '../utils/type-checks';
const /** @type {?} */ aliases = {};
const /** @type {?} */ _mapUnits = {
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
export function addUnitAlias(unit, shorthand) {
    const /** @type {?} */ lowerCase = unit.toLowerCase();
    let /** @type {?} */ _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[`${lowerCase}s`] = aliases[shorthand] = _unit;
}
/**
 * @param {?} units
 * @return {?}
 */
export function normalizeUnits(units) {
    return isString(units) ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}
/**
 * @param {?} inputObject
 * @return {?}
 */
export function normalizeObjectUnits(inputObject) {
    const /** @type {?} */ normalizedInput = {};
    let /** @type {?} */ normalizedProp;
    let /** @type {?} */ prop;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2FsaWFzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHNUQsdUJBQU0sT0FBTyxHQUE4QixFQUFFLENBQUM7QUFLOUMsdUJBQU0sU0FBUyxHQUFrQztJQUMvQyxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLFNBQVM7SUFDakIsV0FBVyxFQUFFLGNBQWM7Q0FDNUIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSx1QkFBdUIsSUFBd0IsRUFBRSxTQUFpQjtJQUN0RSx1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDakIsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5QjtJQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7Q0FDNUU7Ozs7O0FBRUQsTUFBTSx5QkFBeUIsS0FBd0I7SUFDckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0NBQ3JGOzs7OztBQUVELE1BQU0sK0JBQStCLFdBQXNDO0lBQ3pFLHVCQUFNLGVBQWUsR0FBOEIsRUFBRSxDQUFDO0lBQ3RELHFCQUFJLGNBQWMsQ0FBQztJQUNuQixxQkFBSSxJQUFJLENBQUM7SUFFVCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUN6QixFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQyxjQUFjLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RDLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLGVBQWUsQ0FBQyxjQUFjLENBQUMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7U0FDRjtLQUNGO0lBRUQsTUFBTSxtQkFBQyxlQUFzQixFQUFDO0NBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNTdHJpbmcgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVPYmplY3QsIFVuaXRPZlRpbWUgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBhbGlhc2VzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG5leHBvcnQgdHlwZSBFeHRlbmRlZFVuaXRPZlRpbWUgPSBVbml0T2ZUaW1lIHwgJ2RhdGUnIHwgJ3dlZWsnIHwgJ2lzb1dlZWsnIHwgJ2RheU9mWWVhcicgfFxyXG4gICd3ZWVrZGF5JyB8ICdpc29XZWVrZGF5JyB8ICdzZWNvbmQnIHwgJ21pbGxpc2Vjb25kJyB8ICdtaW51dGUnIHwgJ2hvdXInIHwgJ3F1YXJ0ZXInIHwgJ3dlZWtZZWFyJyB8ICdpc29XZWVrWWVhcic7XHJcblxyXG5jb25zdCBfbWFwVW5pdHM6IHsgW2tleTogc3RyaW5nXTogVW5pdE9mVGltZSB9ID0ge1xyXG4gIGRhdGU6ICdkYXknLFxyXG4gIGhvdXI6ICdob3VycycsXHJcbiAgbWludXRlOiAnbWludXRlcycsXHJcbiAgc2Vjb25kOiAnc2Vjb25kcycsXHJcbiAgbWlsbGlzZWNvbmQ6ICdtaWxsaXNlY29uZHMnXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkVW5pdEFsaWFzKHVuaXQ6IEV4dGVuZGVkVW5pdE9mVGltZSwgc2hvcnRoYW5kOiBzdHJpbmcpOiB2b2lkIHtcclxuICBjb25zdCBsb3dlckNhc2UgPSB1bml0LnRvTG93ZXJDYXNlKCk7XHJcbiAgbGV0IF91bml0ID0gdW5pdDtcclxuICBpZiAobG93ZXJDYXNlIGluIF9tYXBVbml0cykge1xyXG4gICAgX3VuaXQgPSBfbWFwVW5pdHNbbG93ZXJDYXNlXTtcclxuICB9XHJcbiAgYWxpYXNlc1tsb3dlckNhc2VdID0gYWxpYXNlc1tgJHtsb3dlckNhc2V9c2BdID0gYWxpYXNlc1tzaG9ydGhhbmRdID0gX3VuaXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVbml0cyh1bml0czogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcge1xyXG4gIHJldHVybiBpc1N0cmluZyh1bml0cykgPyBhbGlhc2VzW3VuaXRzXSB8fCBhbGlhc2VzW3VuaXRzLnRvTG93ZXJDYXNlKCldIDogdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplT2JqZWN0VW5pdHMoaW5wdXRPYmplY3Q6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0pOiBEYXRlT2JqZWN0IHtcclxuICBjb25zdCBub3JtYWxpemVkSW5wdXQ6IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSB7fTtcclxuICBsZXQgbm9ybWFsaXplZFByb3A7XHJcbiAgbGV0IHByb3A7XHJcblxyXG4gIGZvciAocHJvcCBpbiBpbnB1dE9iamVjdCkge1xyXG4gICAgaWYgKGhhc093blByb3AoaW5wdXRPYmplY3QsIHByb3ApKSB7XHJcbiAgICAgIG5vcm1hbGl6ZWRQcm9wID0gbm9ybWFsaXplVW5pdHMocHJvcCk7XHJcbiAgICAgIGlmIChub3JtYWxpemVkUHJvcCkge1xyXG4gICAgICAgIG5vcm1hbGl6ZWRJbnB1dFtub3JtYWxpemVkUHJvcF0gPSBpbnB1dE9iamVjdFtwcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG5vcm1hbGl6ZWRJbnB1dCBhcyBhbnk7XHJcbn1cclxuIl19