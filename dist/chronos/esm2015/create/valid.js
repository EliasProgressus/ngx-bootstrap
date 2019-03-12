/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getParsingFlags } from './parsing-flags';
/**
 * @param {?} config
 * @return {?}
 */
export function isValid(config) {
    if (config._isValid == null) {
        const /** @type {?} */ flags = getParsingFlags(config);
        const /** @type {?} */ parsedParts = Array.prototype.some.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        let /** @type {?} */ isNowValid = !isNaN(config._d && config._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.weekdayMismatch &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));
        if (config._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }
        if (Object.isFrozen == null || !Object.isFrozen(config)) {
            config._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return config._isValid;
}
/**
 * @param {?} config
 * @param {?=} flags
 * @return {?}
 */
export function createInvalid(config, flags) {
    config._d = new Date(NaN);
    Object.assign(getParsingFlags(config), flags || { userInvalidated: true });
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
export function markInvalid(config) {
    config._isValid = false;
    return config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvdmFsaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFbEQsTUFBTSxrQkFBa0IsTUFBeUI7SUFDL0MsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVCLHVCQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsdUJBQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBUztZQUN0RixNQUFNLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQztTQUNsQixDQUFDLENBQUM7UUFDSCxxQkFBSSxVQUFVLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZELEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQztZQUNsQixDQUFDLEtBQUssQ0FBQyxLQUFLO1lBQ1osQ0FBQyxLQUFLLENBQUMsWUFBWTtZQUNuQixDQUFDLEtBQUssQ0FBQyxjQUFjO1lBQ3JCLENBQUMsS0FBSyxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxLQUFLLENBQUMsU0FBUztZQUNoQixDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQ3BCLENBQUMsS0FBSyxDQUFDLGVBQWU7WUFDdEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFFdkQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbkIsVUFBVSxHQUFHLFVBQVU7Z0JBQ3JCLEtBQUssQ0FBQyxhQUFhLEtBQUssQ0FBQztnQkFDekIsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLEtBQUssQ0FBQztnQkFDL0IsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUM7U0FDL0I7UUFFRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1NBQzlCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsVUFBVSxDQUFDO1NBQ25CO0tBQ0Y7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztDQUN4Qjs7Ozs7O0FBRUQsTUFBTSx3QkFBd0IsTUFBeUIsRUFBRSxLQUE4QjtJQUNyRixNQUFNLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZjs7Ozs7QUFFRCxNQUFNLHNCQUFzQixNQUF5QjtJQUNuRCxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUV4QixNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgaWYgKGNvbmZpZy5faXNWYWxpZCA9PSBudWxsKSB7XHJcbiAgICBjb25zdCBmbGFncyA9IGdldFBhcnNpbmdGbGFncyhjb25maWcpO1xyXG4gICAgY29uc3QgcGFyc2VkUGFydHMgPSBBcnJheS5wcm90b3R5cGUuc29tZS5jYWxsKGZsYWdzLnBhcnNlZERhdGVQYXJ0cywgZnVuY3Rpb24gKGk6IG51bWJlcikge1xyXG4gICAgICByZXR1cm4gaSAhPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICBsZXQgaXNOb3dWYWxpZCA9ICFpc05hTihjb25maWcuX2QgJiYgY29uZmlnLl9kLmdldFRpbWUoKSkgJiZcclxuICAgICAgZmxhZ3Mub3ZlcmZsb3cgPCAwICYmXHJcbiAgICAgICFmbGFncy5lbXB0eSAmJlxyXG4gICAgICAhZmxhZ3MuaW52YWxpZE1vbnRoICYmXHJcbiAgICAgICFmbGFncy5pbnZhbGlkV2Vla2RheSAmJlxyXG4gICAgICAhZmxhZ3Mud2Vla2RheU1pc21hdGNoICYmXHJcbiAgICAgICFmbGFncy5udWxsSW5wdXQgJiZcclxuICAgICAgIWZsYWdzLmludmFsaWRGb3JtYXQgJiZcclxuICAgICAgIWZsYWdzLnVzZXJJbnZhbGlkYXRlZCAmJlxyXG4gICAgICAoIWZsYWdzLm1lcmlkaWVtIHx8IChmbGFncy5tZXJpZGllbSAmJiBwYXJzZWRQYXJ0cykpO1xyXG5cclxuICAgIGlmIChjb25maWcuX3N0cmljdCkge1xyXG4gICAgICBpc05vd1ZhbGlkID0gaXNOb3dWYWxpZCAmJlxyXG4gICAgICAgIGZsYWdzLmNoYXJzTGVmdE92ZXIgPT09IDAgJiZcclxuICAgICAgICBmbGFncy51bnVzZWRUb2tlbnMubGVuZ3RoID09PSAwICYmXHJcbiAgICAgICAgZmxhZ3MuYmlnSG91ciA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChPYmplY3QuaXNGcm96ZW4gPT0gbnVsbCB8fCAhT2JqZWN0LmlzRnJvemVuKGNvbmZpZykpIHtcclxuICAgICAgY29uZmlnLl9pc1ZhbGlkID0gaXNOb3dWYWxpZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpc05vd1ZhbGlkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZy5faXNWYWxpZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZywgZmxhZ3M/OiB7IG51bGxJbnB1dDogYm9vbGVhbiB9KTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGNvbmZpZy5fZCA9IG5ldyBEYXRlKE5hTik7XHJcbiAgT2JqZWN0LmFzc2lnbihnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKSwgZmxhZ3MgfHwgeyB1c2VySW52YWxpZGF0ZWQ6IHRydWUgfSk7XHJcblxyXG4gIHJldHVybiBjb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrSW52YWxpZChjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGNvbmZpZy5faXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcbiJdfQ==