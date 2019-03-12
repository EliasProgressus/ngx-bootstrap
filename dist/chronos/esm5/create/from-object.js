/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { normalizeObjectUnits } from '../units/aliases';
import { configFromArray } from './from-array';
import { isObject, isString } from '../utils/type-checks';
/**
 * @param {?} config
 * @return {?}
 */
export function configFromObject(config) {
    if (config._d) {
        return config;
    }
    var /** @type {?} */ input = config._i;
    if (isObject(input)) {
        var /** @type {?} */ i = normalizeObjectUnits(/** @type {?} */ (input));
        config._a = [i.year, i.month, i.day, i.hours, i.minutes, i.seconds, i.milliseconds]
            .map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
    }
    return configFromArray(config);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1vYmplY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJjcmVhdGUvZnJvbS1vYmplY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7QUFFMUQsTUFBTSwyQkFBMkIsTUFBeUI7SUFDeEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDZCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7SUFFRCxxQkFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUN4QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLHFCQUFNLENBQUMsR0FBRyxvQkFBb0IsbUJBQUMsS0FBWSxFQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFFaEYsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQXZDLENBQXVDLENBQUMsQ0FBQztLQUN4RDtJQUVELE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7Q0FDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBub3JtYWxpemVPYmplY3RVbml0cyB9IGZyb20gJy4uL3VuaXRzL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tQXJyYXkgfSBmcm9tICcuL2Zyb20tYXJyYXknO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4vcGFyc2luZy50eXBlcyc7XHJcbmltcG9ydCB7IGlzT2JqZWN0LCBpc1N0cmluZyB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tT2JqZWN0KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgaWYgKGNvbmZpZy5fZCkge1xyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9XHJcblxyXG4gIGNvbnN0IGlucHV0ID0gY29uZmlnLl9pO1xyXG4gIGlmIChpc09iamVjdChpbnB1dCkpIHtcclxuICAgIGNvbnN0IGkgPSBub3JtYWxpemVPYmplY3RVbml0cyhpbnB1dCBhcyBhbnkpO1xyXG4gICAgY29uZmlnLl9hID0gW2kueWVhciwgaS5tb250aCwgaS5kYXksIGkuaG91cnMsIGkubWludXRlcywgaS5zZWNvbmRzLCBpLm1pbGxpc2Vjb25kc11cclxuICAgIC8vIHRvZG86IG9ic29sZXRlIC0+IHJlbW92ZSBpdFxyXG4gICAgICAubWFwKG9iaiA9PiBpc1N0cmluZyhvYmopID8gcGFyc2VJbnQob2JqLCAxMCkgOiBvYmopO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xyXG59XHJcbiJdfQ==