/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isArray, isDate, isNumber, isObject, isObjectEmpty, isString, isUndefined } from '../utils/type-checks';
import { getLocale } from '../locale/locales';
import { createInvalid, isValid } from './valid';
import { configFromStringAndArray } from './from-string-and-array';
import { configFromStringAndFormat } from './from-string-and-format';
import { cloneDate } from './clone';
import { configFromString } from './from-string';
import { configFromArray } from './from-array';
import { configFromObject } from './from-object';
import { checkOverflow } from './check-overflow';
/**
 * @param {?} config
 * @return {?}
 */
function createFromConfig(config) {
    var /** @type {?} */ res = checkOverflow(prepareConfig(config));
    // todo: remove, in moment.js it's never called cuz of moment constructor
    res._d = new Date(res._d != null ? res._d.getTime() : NaN);
    if (!isValid(Object.assign({}, res, { _isValid: null }))) {
        res._d = new Date(NaN);
    }
    // todo: update offset
    /*if (res._nextDay) {
        // Adding is smart enough around DST
        res._d = add(res._d, 1, 'day');
        res._nextDay = undefined;
      }*/
    return res;
}
/**
 * @param {?} config
 * @return {?}
 */
export function prepareConfig(config) {
    var /** @type {?} */ input = config._i;
    var /** @type {?} */ format = config._f;
    config._locale = config._locale || getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
        return createInvalid(config, { nullInput: true });
    }
    if (isString(input)) {
        config._i = input = config._locale.preparse(input);
    }
    if (isDate(input)) {
        config._d = cloneDate(input);
        return config;
    }
    // todo: add check for recursion
    if (isArray(format)) {
        configFromStringAndArray(config);
    }
    else if (format) {
        configFromStringAndFormat(config);
    }
    else {
        configFromInput(config);
    }
    if (!isValid(config)) {
        config._d = null;
    }
    return config;
}
/**
 * @param {?} config
 * @return {?}
 */
function configFromInput(config) {
    var /** @type {?} */ input = config._i;
    if (isUndefined(input)) {
        config._d = new Date();
    }
    else if (isDate(input)) {
        config._d = cloneDate(input);
    }
    else if (isString(input)) {
        configFromString(config);
    }
    else if (isArray(input) && input.length) {
        var /** @type {?} */ _arr = input.slice(0);
        config._a = _arr.map(function (obj) { return isString(obj) ? parseInt(obj, 10) : obj; });
        configFromArray(config);
    }
    else if (isObject(input)) {
        configFromObject(config);
    }
    else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    }
    else {
        //   hooks.createFromInputFallback(config);
        return createInvalid(config);
    }
    return config;
}
/**
 * @param {?} input
 * @param {?=} format
 * @param {?=} localeKey
 * @param {?=} strict
 * @param {?=} isUTC
 * @return {?}
 */
export function createLocalOrUTC(input, format, localeKey, strict, isUTC) {
    var /** @type {?} */ config = {};
    var /** @type {?} */ _input = input;
    // params switch -> skip; test it well
    // if (localeKey === true || localeKey === false) {
    //     strict = localeKey;
    //     localeKey = undefined;
    // }
    // todo: fail fast and return not valid date
    if ((isObject(_input) && isObjectEmpty(_input)) || (isArray(_input) && _input.length === 0)) {
        _input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    // config._isAMomentObject = true;
    config._useUTC = config._isUTC = isUTC;
    config._l = localeKey;
    config._i = _input;
    config._f = format;
    config._strict = strict;
    return createFromConfig(config);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1hbnl0aGluZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImNyZWF0ZS9mcm9tLWFueXRoaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsT0FBTyxFQUFFLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25FLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDcEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7QUFHakQsMEJBQTBCLE1BQXlCO0lBQ2pELHFCQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0lBRWpELEdBQUcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FB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QUFDLEVBQUUsR0FBRyxTQUFTLENBQUM7SUFDdEIsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDbkIsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7SUFDbkIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFFeEIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXHJcbmltcG9ydCB7IGlzQXJyYXksIGlzRGF0ZSwgaXNOdW1iZXIsIGlzT2JqZWN0LCBpc09iamVjdEVtcHR5LCBpc1N0cmluZywgaXNVbmRlZmluZWQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheSB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWFycmF5JztcclxuaW1wb3J0IHsgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCB9IGZyb20gJy4vZnJvbS1zdHJpbmctYW5kLWZvcm1hdCc7XHJcbmltcG9ydCB7IGNsb25lRGF0ZSB9IGZyb20gJy4vY2xvbmUnO1xyXG5pbXBvcnQgeyBjb25maWdGcm9tU3RyaW5nIH0gZnJvbSAnLi9mcm9tLXN0cmluZyc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21BcnJheSB9IGZyb20gJy4vZnJvbS1hcnJheSc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21PYmplY3QgfSBmcm9tICcuL2Zyb20tb2JqZWN0JztcclxuaW1wb3J0IHsgY2hlY2tPdmVyZmxvdyB9IGZyb20gJy4vY2hlY2stb3ZlcmZsb3cnO1xyXG5pbXBvcnQgeyBEYXRlSW5wdXQgfSBmcm9tICcuLi90ZXN0L2NoYWluJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZyb21Db25maWcoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBjb25zdCByZXMgPSBjaGVja092ZXJmbG93KHByZXBhcmVDb25maWcoY29uZmlnKSk7XHJcbiAgLy8gdG9kbzogcmVtb3ZlLCBpbiBtb21lbnQuanMgaXQncyBuZXZlciBjYWxsZWQgY3V6IG9mIG1vbWVudCBjb25zdHJ1Y3RvclxyXG4gIHJlcy5fZCA9IG5ldyBEYXRlKHJlcy5fZCAhPSBudWxsID8gcmVzLl9kLmdldFRpbWUoKSA6IE5hTik7XHJcbiAgaWYgKCFpc1ZhbGlkKE9iamVjdC5hc3NpZ24oe30sIHJlcywge19pc1ZhbGlkOiBudWxsfSkpKSB7XHJcbiAgICByZXMuX2QgPSBuZXcgRGF0ZShOYU4pO1xyXG4gIH1cclxuICAvLyB0b2RvOiB1cGRhdGUgb2Zmc2V0XHJcbiAgLyppZiAocmVzLl9uZXh0RGF5KSB7XHJcbiAgICAvLyBBZGRpbmcgaXMgc21hcnQgZW5vdWdoIGFyb3VuZCBEU1RcclxuICAgIHJlcy5fZCA9IGFkZChyZXMuX2QsIDEsICdkYXknKTtcclxuICAgIHJlcy5fbmV4dERheSA9IHVuZGVmaW5lZDtcclxuICB9Ki9cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByZXBhcmVDb25maWcoY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICBsZXQgaW5wdXQgPSBjb25maWcuX2k7XHJcbiAgY29uc3QgZm9ybWF0ID0gY29uZmlnLl9mO1xyXG5cclxuICBjb25maWcuX2xvY2FsZSA9IGNvbmZpZy5fbG9jYWxlIHx8IGdldExvY2FsZShjb25maWcuX2wpO1xyXG5cclxuICBpZiAoaW5wdXQgPT09IG51bGwgfHwgKGZvcm1hdCA9PT0gdW5kZWZpbmVkICYmIGlucHV0ID09PSAnJykpIHtcclxuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZywgeyBudWxsSW5wdXQ6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNTdHJpbmcoaW5wdXQpKSB7XHJcbiAgICBjb25maWcuX2kgPSBpbnB1dCA9IGNvbmZpZy5fbG9jYWxlLnByZXBhcnNlKGlucHV0KTtcclxuICB9XHJcblxyXG4gIGlmIChpc0RhdGUoaW5wdXQpKSB7XHJcbiAgICBjb25maWcuX2QgPSBjbG9uZURhdGUoaW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIHJlY3Vyc2lvblxyXG5cclxuICBpZiAoaXNBcnJheShmb3JtYXQpKSB7XHJcbiAgICBjb25maWdGcm9tU3RyaW5nQW5kQXJyYXkoY29uZmlnKTtcclxuICB9IGVsc2UgaWYgKGZvcm1hdCkge1xyXG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdChjb25maWcpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25maWdGcm9tSW5wdXQoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIGlmICghaXNWYWxpZChjb25maWcpKSB7XHJcbiAgICBjb25maWcuX2QgPSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvbmZpZztcclxufVxyXG5cclxuZnVuY3Rpb24gY29uZmlnRnJvbUlucHV0KGNvbmZpZzogRGF0ZVBhcnNpbmdDb25maWcpOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgY29uc3QgaW5wdXQgPSBjb25maWcuX2k7XHJcbiAgaWYgKGlzVW5kZWZpbmVkKGlucHV0KSkge1xyXG4gICAgY29uZmlnLl9kID0gbmV3IERhdGUoKTtcclxuICB9IGVsc2UgaWYgKGlzRGF0ZShpbnB1dCkpIHtcclxuICAgIGNvbmZpZy5fZCA9IGNsb25lRGF0ZShpbnB1dCk7XHJcbiAgfSBlbHNlIGlmIChpc1N0cmluZyhpbnB1dCkpIHtcclxuICAgIGNvbmZpZ0Zyb21TdHJpbmcoY29uZmlnKTtcclxuICB9IGVsc2UgaWYgKGlzQXJyYXk8c3RyaW5nIHwgbnVtYmVyPihpbnB1dCkgJiYgaW5wdXQubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBfYXJyOiAoc3RyaW5nIHwgbnVtYmVyKVtdID0gaW5wdXQuc2xpY2UoMCk7XHJcbiAgICBjb25maWcuX2EgPSBfYXJyLm1hcChvYmogPT4gaXNTdHJpbmcob2JqKSA/IHBhcnNlSW50KG9iaiwgMTApIDogb2JqKTtcclxuICAgIGNvbmZpZ0Zyb21BcnJheShjb25maWcpO1xyXG4gIH0gZWxzZSBpZiAoaXNPYmplY3QoaW5wdXQpKSB7XHJcbiAgICBjb25maWdGcm9tT2JqZWN0KGNvbmZpZyk7XHJcbiAgfSBlbHNlIGlmIChpc051bWJlcihpbnB1dCkpIHtcclxuICAgIC8vIGZyb20gbWlsbGlzZWNvbmRzXHJcbiAgICBjb25maWcuX2QgPSBuZXcgRGF0ZShpbnB1dCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vICAgaG9va3MuY3JlYXRlRnJvbUlucHV0RmFsbGJhY2soY29uZmlnKTtcclxuICAgIHJldHVybiBjcmVhdGVJbnZhbGlkKGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTG9jYWxPclVUQyhpbnB1dDogRGF0ZUlucHV0LCBmb3JtYXQ/OiBzdHJpbmcgfCBzdHJpbmdbXSwgbG9jYWxlS2V5Pzogc3RyaW5nLCBzdHJpY3Q/OiBib29sZWFuLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlUGFyc2luZ0NvbmZpZyB7XHJcbiAgY29uc3QgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyA9IHt9O1xyXG4gIGxldCBfaW5wdXQgPSBpbnB1dDtcclxuXHJcbiAgLy8gcGFyYW1zIHN3aXRjaCAtPiBza2lwOyB0ZXN0IGl0IHdlbGxcclxuICAvLyBpZiAobG9jYWxlS2V5ID09PSB0cnVlIHx8IGxvY2FsZUtleSA9PT0gZmFsc2UpIHtcclxuICAvLyAgICAgc3RyaWN0ID0gbG9jYWxlS2V5O1xyXG4gIC8vICAgICBsb2NhbGVLZXkgPSB1bmRlZmluZWQ7XHJcbiAgLy8gfVxyXG5cclxuICAvLyB0b2RvOiBmYWlsIGZhc3QgYW5kIHJldHVybiBub3QgdmFsaWQgZGF0ZVxyXG4gIGlmICgoaXNPYmplY3QoX2lucHV0KSAmJiBpc09iamVjdEVtcHR5KF9pbnB1dCkpIHx8IChpc0FycmF5KF9pbnB1dCkgJiYgX2lucHV0Lmxlbmd0aCA9PT0gMCkpIHtcclxuICAgIF9pbnB1dCA9IHVuZGVmaW5lZDtcclxuICB9XHJcbiAgLy8gb2JqZWN0IGNvbnN0cnVjdGlvbiBtdXN0IGJlIGRvbmUgdGhpcyB3YXkuXHJcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21vbWVudC9tb21lbnQvaXNzdWVzLzE0MjNcclxuICAvLyBjb25maWcuX2lzQU1vbWVudE9iamVjdCA9IHRydWU7XHJcbiAgY29uZmlnLl91c2VVVEMgPSBjb25maWcuX2lzVVRDID0gaXNVVEM7XHJcbiAgY29uZmlnLl9sID0gbG9jYWxlS2V5O1xyXG4gIGNvbmZpZy5faSA9IF9pbnB1dDtcclxuICBjb25maWcuX2YgPSBmb3JtYXQ7XHJcbiAgY29uZmlnLl9zdHJpY3QgPSBzdHJpY3Q7XHJcblxyXG4gIHJldHVybiBjcmVhdGVGcm9tQ29uZmlnKGNvbmZpZyk7XHJcbn1cclxuIl19