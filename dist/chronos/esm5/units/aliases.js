/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { hasOwnProp, isString } from '../utils/type-checks';
var /** @type {?} */ aliases = {};
var /** @type {?} */ _mapUnits = {
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
    var /** @type {?} */ lowerCase = unit.toLowerCase();
    var /** @type {?} */ _unit = unit;
    if (lowerCase in _mapUnits) {
        _unit = _mapUnits[lowerCase];
    }
    aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = _unit;
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
    var /** @type {?} */ normalizedInput = {};
    var /** @type {?} */ normalizedProp;
    var /** @type {?} */ prop;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXNlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbInVuaXRzL2FsaWFzZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHNUQscUJBQU0sT0FBTyxHQUE4QixFQUFFLENBQUM7QUFLOUMscUJBQU0sU0FBUyxHQUFrQztJQUMvQyxJQUFJLEVBQUUsS0FBSztJQUNYLElBQUksRUFBRSxPQUFPO0lBQ2IsTUFBTSxFQUFFLFNBQVM7SUFDakIsTUFBTSxFQUFFLFNBQVM7SUFDakIsV0FBVyxFQUFFLGNBQWM7Q0FDNUIsQ0FBQzs7Ozs7O0FBRUYsTUFBTSx1QkFBdUIsSUFBd0IsRUFBRSxTQUFpQjtJQUN0RSxxQkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLHFCQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDakIsRUFBRSxDQUFDLENBQUMsU0FBUyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsS0FBSyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUM5QjtJQUNELE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUksU0FBUyxNQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxDQUFDO0NBQzVFOzs7OztBQUVELE1BQU0seUJBQXlCLEtBQXdCO0lBQ3JELE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztDQUNyRjs7Ozs7QUFFRCxNQUFNLCtCQUErQixXQUFzQztJQUN6RSxxQkFBTSxlQUFlLEdBQThCLEVBQUUsQ0FBQztJQUN0RCxxQkFBSSxjQUFjLENBQUM7SUFDbkIscUJBQUksSUFBSSxDQUFDO0lBRVQsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEMsY0FBYyxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixlQUFlLENBQUMsY0FBYyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7S0FDRjtJQUVELE1BQU0sbUJBQUMsZUFBc0IsRUFBQztDQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhc093blByb3AsIGlzU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlT2JqZWN0LCBVbml0T2ZUaW1lIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5cclxuY29uc3QgYWxpYXNlczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG5cclxuZXhwb3J0IHR5cGUgRXh0ZW5kZWRVbml0T2ZUaW1lID0gVW5pdE9mVGltZSB8ICdkYXRlJyB8ICd3ZWVrJyB8ICdpc29XZWVrJyB8ICdkYXlPZlllYXInIHxcclxuICAnd2Vla2RheScgfCAnaXNvV2Vla2RheScgfCAnc2Vjb25kJyB8ICdtaWxsaXNlY29uZCcgfCAnbWludXRlJyB8ICdob3VyJyB8ICdxdWFydGVyJyB8ICd3ZWVrWWVhcicgfCAnaXNvV2Vla1llYXInO1xyXG5cclxuY29uc3QgX21hcFVuaXRzOiB7IFtrZXk6IHN0cmluZ106IFVuaXRPZlRpbWUgfSA9IHtcclxuICBkYXRlOiAnZGF5JyxcclxuICBob3VyOiAnaG91cnMnLFxyXG4gIG1pbnV0ZTogJ21pbnV0ZXMnLFxyXG4gIHNlY29uZDogJ3NlY29uZHMnLFxyXG4gIG1pbGxpc2Vjb25kOiAnbWlsbGlzZWNvbmRzJ1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVuaXRBbGlhcyh1bml0OiBFeHRlbmRlZFVuaXRPZlRpbWUsIHNob3J0aGFuZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgY29uc3QgbG93ZXJDYXNlID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xyXG4gIGxldCBfdW5pdCA9IHVuaXQ7XHJcbiAgaWYgKGxvd2VyQ2FzZSBpbiBfbWFwVW5pdHMpIHtcclxuICAgIF91bml0ID0gX21hcFVuaXRzW2xvd2VyQ2FzZV07XHJcbiAgfVxyXG4gIGFsaWFzZXNbbG93ZXJDYXNlXSA9IGFsaWFzZXNbYCR7bG93ZXJDYXNlfXNgXSA9IGFsaWFzZXNbc2hvcnRoYW5kXSA9IF91bml0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplVW5pdHModW5pdHM6IHN0cmluZyB8IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICByZXR1cm4gaXNTdHJpbmcodW5pdHMpID8gYWxpYXNlc1t1bml0c10gfHwgYWxpYXNlc1t1bml0cy50b0xvd2VyQ2FzZSgpXSA6IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZU9iamVjdFVuaXRzKGlucHV0T2JqZWN0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9KTogRGF0ZU9iamVjdCB7XHJcbiAgY29uc3Qgbm9ybWFsaXplZElucHV0OiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge307XHJcbiAgbGV0IG5vcm1hbGl6ZWRQcm9wO1xyXG4gIGxldCBwcm9wO1xyXG5cclxuICBmb3IgKHByb3AgaW4gaW5wdXRPYmplY3QpIHtcclxuICAgIGlmIChoYXNPd25Qcm9wKGlucHV0T2JqZWN0LCBwcm9wKSkge1xyXG4gICAgICBub3JtYWxpemVkUHJvcCA9IG5vcm1hbGl6ZVVuaXRzKHByb3ApO1xyXG4gICAgICBpZiAobm9ybWFsaXplZFByb3ApIHtcclxuICAgICAgICBub3JtYWxpemVkSW5wdXRbbm9ybWFsaXplZFByb3BdID0gaW5wdXRPYmplY3RbcHJvcF07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBub3JtYWxpemVkSW5wdXQgYXMgYW55O1xyXG59XHJcbiJdfQ==