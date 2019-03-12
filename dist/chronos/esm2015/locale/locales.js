/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Locale } from './locale.class';
import { baseConfig } from './locale.defaults';
import { hasOwnProp, isArray, isObject, isString, isUndefined, toInt } from '../utils/type-checks';
import { compareArrays } from '../utils/compare-arrays';
import { initWeek } from '../units/week';
import { initWeekYear } from '../units/week-year';
import { initYear } from '../units/year';
import { initTimezone } from '../units/timezone';
import { initTimestamp } from '../units/timestamp';
import { initSecond } from '../units/second';
import { initQuarter } from '../units/quarter';
import { initOffset } from '../units/offset';
import { initMinute } from '../units/minute';
import { initMillisecond } from '../units/millisecond';
import { initMonth } from '../units/month';
import { initHour } from '../units/hour';
import { initDayOfYear } from '../units/day-of-year';
import { initDayOfWeek } from '../units/day-of-week';
import { initDayOfMonth } from '../units/day-of-month';
const /** @type {?} */ locales = {};
const /** @type {?} */ localeFamilies = {};
let /** @type {?} */ globalLocale;
/**
 * @param {?} key
 * @return {?}
 */
function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}
/**
 * @param {?} names
 * @return {?}
 */
function chooseLocale(names) {
    let /** @type {?} */ next;
    let /** @type {?} */ locale;
    let /** @type {?} */ i = 0;
    while (i < names.length) {
        const /** @type {?} */ split = normalizeLocale(names[i]).split('-');
        let /** @type {?} */ j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                // the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}
/**
 * @param {?} parentConfig
 * @param {?} childConfig
 * @return {?}
 */
export function mergeConfigs(parentConfig, childConfig) {
    const /** @type {?} */ res = Object.assign({}, parentConfig);
    for (const /** @type {?} */ childProp in childConfig) {
        if (!hasOwnProp(childConfig, childProp)) {
            continue;
        }
        if (isObject(parentConfig[childProp]) && isObject(childConfig[childProp])) {
            res[childProp] = {};
            Object.assign(res[childProp], parentConfig[childProp]);
            Object.assign(res[childProp], childConfig[childProp]);
        }
        else if (childConfig[childProp] != null) {
            res[childProp] = childConfig[childProp];
        }
        else {
            delete res[childProp];
        }
    }
    let /** @type {?} */ parentProp;
    for (parentProp in parentConfig) {
        if (hasOwnProp(parentConfig, parentProp) &&
            !hasOwnProp(childConfig, parentProp) &&
            isObject(parentConfig[/** @type {?} */ (parentProp)])) {
            // make sure changes to properties don't modify parent config
            res[/** @type {?} */ (parentProp)] = Object.assign({}, res[/** @type {?} */ (parentProp)]);
        }
    }
    return res;
}
/**
 * @param {?} name
 * @return {?}
 */
function loadLocale(name) {
    // no way!
    /* var oldLocale = null;
       // TODO: Find a better way to register and load all the locales in Node
       if (!locales[name] && (typeof module !== 'undefined') &&
         module && module.exports) {
         try {
           oldLocale = globalLocale._abbr;
           var aliasedRequire = require;
           aliasedRequire('./locale/' + name);
           getSetGlobalLocale(oldLocale);
         } catch (e) {}
       }*/
    if (!locales[name]) {
        // tslint:disable-next-line
        console.error(`Khronos locale error: please load locale "${name}" before using it`);
        // throw new Error(`Khronos locale error: please load locale "${name}" before using it`);
    }
    return locales[name];
}
/**
 * @param {?=} key
 * @param {?=} values
 * @return {?}
 */
export function getSetGlobalLocale(key, values) {
    let /** @type {?} */ data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else if (isString(key)) {
            data = defineLocale(key, values);
        }
        if (data) {
            globalLocale = data;
        }
    }
    return globalLocale && globalLocale._abbr;
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
export function defineLocale(name, config) {
    if (config === null) {
        // useful for testing
        delete locales[name];
        globalLocale = getLocale('en');
        return null;
    }
    if (!config) {
        return;
    }
    let /** @type {?} */ parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name, config });
            return null;
        }
    }
    locales[name] = new Locale(mergeConfigs(parentConfig, config));
    if (localeFamilies[name]) {
        localeFamilies[name].forEach(function (x) {
            defineLocale(x.name, x.config);
        });
    }
    // backwards compat for now: also set the locale
    // make sure we set the locale AFTER all child locales have been
    // created, so we won't end up with the child locale set.
    getSetGlobalLocale(name);
    return locales[name];
}
/**
 * @param {?} name
 * @param {?=} config
 * @return {?}
 */
export function updateLocale(name, config) {
    let /** @type {?} */ _config = config;
    if (_config != null) {
        let /** @type {?} */ parentConfig = baseConfig;
        // MERGE
        const /** @type {?} */ tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        const /** @type {?} */ locale = new Locale(_config);
        locale.parentLocale = locales[name];
        locales[name] = locale;
        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    }
    else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            }
            else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}
/**
 * @param {?=} key
 * @return {?}
 */
export function getLocale(key) {
    setDefaultLocale();
    if (!key) {
        return globalLocale;
    }
    // let locale;
    const /** @type {?} */ _key = isArray(key) ? key : [key];
    return chooseLocale(_key);
}
/**
 * @return {?}
 */
export function listLocales() {
    return Object.keys(locales);
}
/**
 * @return {?}
 */
function setDefaultLocale() {
    if (locales[`en`]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        /**
         * @param {?} num
         * @return {?}
         */
        ordinal(num) {
            const /** @type {?} */ b = num % 10;
            const /** @type {?} */ output = toInt((num % 100) / 10) === 1
                ? 'th'
                : b === 1 ? 'st' : b === 2 ? 'nd' : b === 3 ? 'rd' : 'th';
            return num + output;
        }
    });
    initWeek();
    initWeekYear();
    initYear();
    initTimezone();
    initTimestamp();
    initSecond();
    initQuarter();
    initOffset();
    initMonth();
    initMinute();
    initMillisecond();
    initHour();
    initDayOfYear();
    initDayOfWeek();
    initDayOfMonth();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImxvY2FsZS9sb2NhbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RCx1QkFBTSxPQUFPLEdBQThCLEVBQUUsQ0FBQztBQUM5Qyx1QkFBTSxjQUFjLEdBQTRELEVBQUUsQ0FBQztBQUNuRixxQkFBSSxZQUFvQixDQUFDOzs7OztBQUV6Qix5QkFBeUIsR0FBVztJQUNsQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0NBQ3hEOzs7OztBQU1ELHNCQUFzQixLQUFlO0lBQ25DLHFCQUFJLElBQUksQ0FBQztJQUNULHFCQUFJLE1BQU0sQ0FBQztJQUNYLHFCQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFVixPQUFPLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDeEIsdUJBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkQscUJBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDckIsSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2IsTUFBTSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRCxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDZjtZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBRTFFLEtBQUssQ0FBQzthQUNQO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDTDtRQUNELENBQUMsRUFBRSxDQUFDO0tBQ0w7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0NBQ2I7Ozs7OztBQUVELE1BQU0sdUJBQXVCLFlBQXdCLEVBQ3hCLFdBQXVCO0lBQ2xELHVCQUFNLEdBQUcsR0FBZSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUV4RCxHQUFHLENBQUMsQ0FBQyx1QkFBTSxTQUFTLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hDLFFBQVEsQ0FBQztTQUNWO1FBQ0QsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3pDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2QjtLQUNGO0lBQ0QscUJBQUksVUFBVSxDQUFDO0lBQ2YsR0FBRyxDQUFDLENBQUMsVUFBVSxJQUFJLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDaEMsRUFBRSxDQUFDLENBQ0QsVUFBVSxDQUFDLFlBQVksRUFBRSxVQUFVLENBQUM7WUFDcEMsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUNwQyxRQUFRLENBQUMsWUFBWSxtQkFBQyxVQUE4QixFQUFDLENBQ3ZELENBQUMsQ0FBQyxDQUFDOztZQUVELEdBQUcsbUJBQUMsVUFBOEIsRUFBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEdBQUcsbUJBQUMsVUFBOEIsRUFBQyxDQUFDLENBQUM7U0FDOUY7S0FDRjtJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDWjs7Ozs7QUFHRCxvQkFBb0IsSUFBWTs7Ozs7Ozs7Ozs7OztJQWE5QixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O1FBRW5CLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkNBQTZDLElBQUksbUJBQW1CLENBQUMsQ0FBQzs7S0FFckY7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3RCOzs7Ozs7QUFLRCxNQUFNLDZCQUE2QixHQUF1QixFQUFFLE1BQW1CO0lBQzdFLHFCQUFJLElBQVksQ0FBQztJQUVqQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1IsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZCO1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxHQUFHLFlBQVksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEM7UUFFRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1QsWUFBWSxHQUFHLElBQUksQ0FBQztTQUNyQjtLQUNGO0lBRUQsTUFBTSxDQUFDLFlBQVksSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDO0NBQzNDOzs7Ozs7QUFFRCxNQUFNLHVCQUF1QixJQUFZLEVBQUUsTUFBbUI7SUFDNUQsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7O1FBRXBCLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JCLFlBQVksR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFL0IsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1osTUFBTSxDQUFDO0tBQ1I7SUFFRCxxQkFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDO0lBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQ25CLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDO1NBQ3JEO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxjQUFjLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUMxQztZQUNELGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFFM0QsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFFRCxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBRS9ELEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7WUFDdEMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDLENBQUMsQ0FBQztLQUNKOzs7O0lBS0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHekIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztDQUN0Qjs7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsSUFBWSxFQUFFLE1BQW1CO0lBQzVELHFCQUFJLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFFckIsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIscUJBQUksWUFBWSxHQUFHLFVBQVUsQ0FBQzs7UUFFOUIsdUJBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuQyxFQUFFLENBQUMsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QixZQUFZLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQztTQUNsQztRQUNELE9BQU8sR0FBRyxZQUFZLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLHVCQUFNLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDOztRQUd2QixrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQjtJQUFDLElBQUksQ0FBQyxDQUFDOztRQUVOLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUM7YUFDNUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3RCO1NBQ0Y7S0FDRjtJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7Q0FDdEI7Ozs7O0FBR0QsTUFBTSxvQkFBb0IsR0FBdUI7SUFDL0MsZ0JBQWdCLEVBQUUsQ0FBQztJQUVuQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDVCxNQUFNLENBQUMsWUFBWSxDQUFDO0tBQ3JCOztJQUVELHVCQUFNLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV4QyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQzNCOzs7O0FBRUQsTUFBTTtJQUNKLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQzdCOzs7O0FBRUQ7SUFDRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxCLE1BQU0sQ0FBQyxTQUFTLENBQUM7S0FDbEI7SUFFRCxrQkFBa0IsQ0FBQyxJQUFJLEVBQUU7UUFDdkIsc0JBQXNCLEVBQUUsc0JBQXNCOzs7OztRQUM5QyxPQUFPLENBQUMsR0FBVztZQUNqQix1QkFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNuQix1QkFBTSxNQUFNLEdBQ1YsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxJQUFJO2dCQUNOLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFOUQsTUFBTSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUM7U0FDckI7S0FDRixDQUFDLENBQUM7SUFFSCxRQUFRLEVBQUUsQ0FBQztJQUNYLFlBQVksRUFBRSxDQUFDO0lBQ2YsUUFBUSxFQUFFLENBQUM7SUFDWCxZQUFZLEVBQUUsQ0FBQztJQUNmLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsV0FBVyxFQUFFLENBQUM7SUFDZCxVQUFVLEVBQUUsQ0FBQztJQUNiLFNBQVMsRUFBRSxDQUFDO0lBQ1osVUFBVSxFQUFFLENBQUM7SUFDYixlQUFlLEVBQUUsQ0FBQztJQUNsQixRQUFRLEVBQUUsQ0FBQztJQUNYLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGNBQWMsRUFBRSxDQUFDO0NBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW50ZXJuYWwgc3RvcmFnZSBmb3IgbG9jYWxlIGNvbmZpZyBmaWxlc1xyXG5pbXBvcnQgeyBMb2NhbGUsIExvY2FsZURhdGEgfSBmcm9tICcuL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGJhc2VDb25maWcgfSBmcm9tICcuL2xvY2FsZS5kZWZhdWx0cyc7XHJcbmltcG9ydCB7IGhhc093blByb3AsIGlzQXJyYXksIGlzT2JqZWN0LCBpc1N0cmluZywgaXNVbmRlZmluZWQsIHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBjb21wYXJlQXJyYXlzIH0gZnJvbSAnLi4vdXRpbHMvY29tcGFyZS1hcnJheXMnO1xyXG5cclxuaW1wb3J0IHsgaW5pdFdlZWsgfSBmcm9tICcuLi91bml0cy93ZWVrJztcclxuaW1wb3J0IHsgaW5pdFdlZWtZZWFyIH0gZnJvbSAnLi4vdW5pdHMvd2Vlay15ZWFyJztcclxuaW1wb3J0IHsgaW5pdFllYXIgfSBmcm9tICcuLi91bml0cy95ZWFyJztcclxuaW1wb3J0IHsgaW5pdFRpbWV6b25lIH0gZnJvbSAnLi4vdW5pdHMvdGltZXpvbmUnO1xyXG5pbXBvcnQgeyBpbml0VGltZXN0YW1wIH0gZnJvbSAnLi4vdW5pdHMvdGltZXN0YW1wJztcclxuaW1wb3J0IHsgaW5pdFNlY29uZCB9IGZyb20gJy4uL3VuaXRzL3NlY29uZCc7XHJcbmltcG9ydCB7IGluaXRRdWFydGVyIH0gZnJvbSAnLi4vdW5pdHMvcXVhcnRlcic7XHJcbmltcG9ydCB7IGluaXRPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xyXG5pbXBvcnQgeyBpbml0TWludXRlIH0gZnJvbSAnLi4vdW5pdHMvbWludXRlJztcclxuaW1wb3J0IHsgaW5pdE1pbGxpc2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvbWlsbGlzZWNvbmQnO1xyXG5pbXBvcnQgeyBpbml0TW9udGggfSBmcm9tICcuLi91bml0cy9tb250aCc7XHJcbmltcG9ydCB7IGluaXRIb3VyIH0gZnJvbSAnLi4vdW5pdHMvaG91cic7XHJcbmltcG9ydCB7IGluaXREYXlPZlllYXIgfSBmcm9tICcuLi91bml0cy9kYXktb2YteWVhcic7XHJcbmltcG9ydCB7IGluaXREYXlPZldlZWsgfSBmcm9tICcuLi91bml0cy9kYXktb2Ytd2Vlayc7XHJcbmltcG9ydCB7IGluaXREYXlPZk1vbnRoIH0gZnJvbSAnLi4vdW5pdHMvZGF5LW9mLW1vbnRoJztcclxuXHJcbmNvbnN0IGxvY2FsZXM6IHsgW2tleTogc3RyaW5nXTogTG9jYWxlIH0gPSB7fTtcclxuY29uc3QgbG9jYWxlRmFtaWxpZXM6IHsgW2tleTogc3RyaW5nXToge25hbWU6IHN0cmluZzsgY29uZmlnOiBMb2NhbGVEYXRhfVtdIH0gPSB7fTtcclxubGV0IGdsb2JhbExvY2FsZTogTG9jYWxlO1xyXG5cclxuZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICByZXR1cm4ga2V5ID8ga2V5LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgnXycsICctJykgOiBrZXk7XHJcbn1cclxuXHJcbi8vIHBpY2sgdGhlIGxvY2FsZSBmcm9tIHRoZSBhcnJheVxyXG4vLyB0cnkgWydlbi1hdScsICdlbi1nYiddIGFzICdlbi1hdScsICdlbi1nYicsICdlbicsIGFzIGluIG1vdmUgdGhyb3VnaCB0aGUgbGlzdCB0cnlpbmcgZWFjaFxyXG4vLyBzdWJzdHJpbmcgZnJvbSBtb3N0IHNwZWNpZmljIHRvIGxlYXN0LFxyXG4vLyBidXQgbW92ZSB0byB0aGUgbmV4dCBhcnJheSBpdGVtIGlmIGl0J3MgYSBtb3JlIHNwZWNpZmljIHZhcmlhbnQgdGhhbiB0aGUgY3VycmVudCByb290XHJcbmZ1bmN0aW9uIGNob29zZUxvY2FsZShuYW1lczogc3RyaW5nW10pOiBMb2NhbGUge1xyXG4gIGxldCBuZXh0O1xyXG4gIGxldCBsb2NhbGU7XHJcbiAgbGV0IGkgPSAwO1xyXG5cclxuICB3aGlsZSAoaSA8IG5hbWVzLmxlbmd0aCkge1xyXG4gICAgY29uc3Qgc3BsaXQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaV0pLnNwbGl0KCctJyk7XHJcbiAgICBsZXQgaiA9IHNwbGl0Lmxlbmd0aDtcclxuICAgIG5leHQgPSBub3JtYWxpemVMb2NhbGUobmFtZXNbaSArIDFdKTtcclxuICAgIG5leHQgPSBuZXh0ID8gbmV4dC5zcGxpdCgnLScpIDogbnVsbDtcclxuICAgIHdoaWxlIChqID4gMCkge1xyXG4gICAgICBsb2NhbGUgPSBsb2FkTG9jYWxlKHNwbGl0LnNsaWNlKDAsIGopLmpvaW4oJy0nKSk7XHJcbiAgICAgIGlmIChsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChuZXh0ICYmIG5leHQubGVuZ3RoID49IGogJiYgY29tcGFyZUFycmF5cyhzcGxpdCwgbmV4dCwgdHJ1ZSkgPj0gaiAtIDEpIHtcclxuICAgICAgICAvLyB0aGUgbmV4dCBhcnJheSBpdGVtIGlzIGJldHRlciB0aGFuIGEgc2hhbGxvd2VyIHN1YnN0cmluZyBvZiB0aGlzIG9uZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIGotLTtcclxuICAgIH1cclxuICAgIGkrKztcclxuICB9XHJcblxyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VDb25maWdzKHBhcmVudENvbmZpZzogTG9jYWxlRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvbmZpZzogTG9jYWxlRGF0YSkge1xyXG4gIGNvbnN0IHJlczogTG9jYWxlRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHBhcmVudENvbmZpZyk7XHJcblxyXG4gIGZvciAoY29uc3QgY2hpbGRQcm9wIGluIGNoaWxkQ29uZmlnKSB7XHJcbiAgICBpZiAoIWhhc093blByb3AoY2hpbGRDb25maWcsIGNoaWxkUHJvcCkpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcbiAgICBpZiAoaXNPYmplY3QocGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pICYmIGlzT2JqZWN0KGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0pKSB7XHJcbiAgICAgIHJlc1tjaGlsZFByb3BdID0ge307XHJcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzW2NoaWxkUHJvcF0sIHBhcmVudENvbmZpZ1tjaGlsZFByb3BdKTtcclxuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgY2hpbGRDb25maWdbY2hpbGRQcm9wXSk7XHJcbiAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZmlnW2NoaWxkUHJvcF0gIT0gbnVsbCkge1xyXG4gICAgICByZXNbY2hpbGRQcm9wXSA9IGNoaWxkQ29uZmlnW2NoaWxkUHJvcF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkZWxldGUgcmVzW2NoaWxkUHJvcF07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBwYXJlbnRQcm9wO1xyXG4gIGZvciAocGFyZW50UHJvcCBpbiBwYXJlbnRDb25maWcpIHtcclxuICAgIGlmIChcclxuICAgICAgaGFzT3duUHJvcChwYXJlbnRDb25maWcsIHBhcmVudFByb3ApICYmXHJcbiAgICAgICFoYXNPd25Qcm9wKGNoaWxkQ29uZmlnLCBwYXJlbnRQcm9wKSAmJlxyXG4gICAgICBpc09iamVjdChwYXJlbnRDb25maWdbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSlcclxuICAgICkge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgY2hhbmdlcyB0byBwcm9wZXJ0aWVzIGRvbid0IG1vZGlmeSBwYXJlbnQgY29uZmlnXHJcbiAgICAgIHJlc1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHJlcztcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGxvYWRMb2NhbGUobmFtZTogc3RyaW5nKTogTG9jYWxlIHtcclxuICAvLyBubyB3YXkhXHJcbiAgLyogdmFyIG9sZExvY2FsZSA9IG51bGw7XHJcbiAgIC8vIFRPRE86IEZpbmQgYSBiZXR0ZXIgd2F5IHRvIHJlZ2lzdGVyIGFuZCBsb2FkIGFsbCB0aGUgbG9jYWxlcyBpbiBOb2RlXHJcbiAgIGlmICghbG9jYWxlc1tuYW1lXSAmJiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpICYmXHJcbiAgICAgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcbiAgICAgdHJ5IHtcclxuICAgICAgIG9sZExvY2FsZSA9IGdsb2JhbExvY2FsZS5fYWJicjtcclxuICAgICAgIHZhciBhbGlhc2VkUmVxdWlyZSA9IHJlcXVpcmU7XHJcbiAgICAgICBhbGlhc2VkUmVxdWlyZSgnLi9sb2NhbGUvJyArIG5hbWUpO1xyXG4gICAgICAgZ2V0U2V0R2xvYmFsTG9jYWxlKG9sZExvY2FsZSk7XHJcbiAgICAgfSBjYXRjaCAoZSkge31cclxuICAgfSovXHJcbiAgaWYgKCFsb2NhbGVzW25hbWVdKSB7XHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnNvbGUuZXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoYEtocm9ub3MgbG9jYWxlIGVycm9yOiBwbGVhc2UgbG9hZCBsb2NhbGUgXCIke25hbWV9XCIgYmVmb3JlIHVzaW5nIGl0YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcclxufVxyXG5cclxuLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGxvYWQgbG9jYWxlIGFuZCB0aGVuIHNldCB0aGUgZ2xvYmFsIGxvY2FsZS4gIElmXHJcbi8vIG5vIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGluLCBpdCB3aWxsIHNpbXBseSByZXR1cm4gdGhlIGN1cnJlbnQgZ2xvYmFsXHJcbi8vIGxvY2FsZSBrZXkuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRHbG9iYWxMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10sIHZhbHVlcz86IExvY2FsZURhdGEpOiBzdHJpbmcge1xyXG4gIGxldCBkYXRhOiBMb2NhbGU7XHJcblxyXG4gIGlmIChrZXkpIHtcclxuICAgIGlmIChpc1VuZGVmaW5lZCh2YWx1ZXMpKSB7XHJcbiAgICAgIGRhdGEgPSBnZXRMb2NhbGUoa2V5KTtcclxuICAgIH0gZWxzZSBpZiAoaXNTdHJpbmcoa2V5KSkge1xyXG4gICAgICBkYXRhID0gZGVmaW5lTG9jYWxlKGtleSwgdmFsdWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YSkge1xyXG4gICAgICBnbG9iYWxMb2NhbGUgPSBkYXRhO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGdsb2JhbExvY2FsZSAmJiBnbG9iYWxMb2NhbGUuX2FiYnI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcclxuICBpZiAoY29uZmlnID09PSBudWxsKSB7XHJcbiAgICAvLyB1c2VmdWwgZm9yIHRlc3RpbmdcclxuICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xyXG4gICAgZ2xvYmFsTG9jYWxlID0gZ2V0TG9jYWxlKCdlbicpO1xyXG5cclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFjb25maWcpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBwYXJlbnRDb25maWcgPSBiYXNlQ29uZmlnO1xyXG4gIGNvbmZpZy5hYmJyID0gbmFtZTtcclxuICBpZiAoY29uZmlnLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XHJcbiAgICBpZiAobG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXSAhPSBudWxsKSB7XHJcbiAgICAgIHBhcmVudENvbmZpZyA9IGxvY2FsZXNbY29uZmlnLnBhcmVudExvY2FsZV0uX2NvbmZpZztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0pIHtcclxuICAgICAgICBsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSA9IFtdO1xyXG4gICAgICB9XHJcbiAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdLnB1c2goeyBuYW1lLCBjb25maWcgfSk7XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvY2FsZXNbbmFtZV0gPSBuZXcgTG9jYWxlKG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIGNvbmZpZykpO1xyXG5cclxuICBpZiAobG9jYWxlRmFtaWxpZXNbbmFtZV0pIHtcclxuICAgIGxvY2FsZUZhbWlsaWVzW25hbWVdLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcclxuICAgICAgZGVmaW5lTG9jYWxlKHgubmFtZSwgeC5jb25maWcpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcclxuICAvLyBtYWtlIHN1cmUgd2Ugc2V0IHRoZSBsb2NhbGUgQUZURVIgYWxsIGNoaWxkIGxvY2FsZXMgaGF2ZSBiZWVuXHJcbiAgLy8gY3JlYXRlZCwgc28gd2Ugd29uJ3QgZW5kIHVwIHdpdGggdGhlIGNoaWxkIGxvY2FsZSBzZXQuXHJcbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKG5hbWUpO1xyXG5cclxuXHJcbiAgcmV0dXJuIGxvY2FsZXNbbmFtZV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVMb2NhbGUobmFtZTogc3RyaW5nLCBjb25maWc/OiBMb2NhbGVEYXRhKTogTG9jYWxlIHtcclxuICBsZXQgX2NvbmZpZyA9IGNvbmZpZztcclxuXHJcbiAgaWYgKF9jb25maWcgIT0gbnVsbCkge1xyXG4gICAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XHJcbiAgICAvLyBNRVJHRVxyXG4gICAgY29uc3QgdG1wTG9jYWxlID0gbG9hZExvY2FsZShuYW1lKTtcclxuICAgIGlmICh0bXBMb2NhbGUgIT0gbnVsbCkge1xyXG4gICAgICBwYXJlbnRDb25maWcgPSB0bXBMb2NhbGUuX2NvbmZpZztcclxuICAgIH1cclxuICAgIF9jb25maWcgPSBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnLCBfY29uZmlnKTtcclxuICAgIGNvbnN0IGxvY2FsZSA9IG5ldyBMb2NhbGUoX2NvbmZpZyk7XHJcbiAgICBsb2NhbGUucGFyZW50TG9jYWxlID0gbG9jYWxlc1tuYW1lXTtcclxuICAgIGxvY2FsZXNbbmFtZV0gPSBsb2NhbGU7XHJcblxyXG4gICAgLy8gYmFja3dhcmRzIGNvbXBhdCBmb3Igbm93OiBhbHNvIHNldCB0aGUgbG9jYWxlXHJcbiAgICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIHBhc3MgbnVsbCBmb3IgY29uZmlnIHRvIHVudXBkYXRlLCB1c2VmdWwgZm9yIHRlc3RzXHJcbiAgICBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgIGlmIChsb2NhbGVzW25hbWVdLnBhcmVudExvY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlO1xyXG4gICAgICB9IGVsc2UgaWYgKGxvY2FsZXNbbmFtZV0gIT0gbnVsbCkge1xyXG4gICAgICAgIGRlbGV0ZSBsb2NhbGVzW25hbWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcclxufVxyXG5cclxuLy8gcmV0dXJucyBsb2NhbGUgZGF0YVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYWxlKGtleT86IHN0cmluZyB8IHN0cmluZ1tdKTogTG9jYWxlIHtcclxuICBzZXREZWZhdWx0TG9jYWxlKCk7XHJcblxyXG4gIGlmICgha2V5KSB7XHJcbiAgICByZXR1cm4gZ2xvYmFsTG9jYWxlO1xyXG4gIH1cclxuICAvLyBsZXQgbG9jYWxlO1xyXG4gIGNvbnN0IF9rZXkgPSBpc0FycmF5KGtleSkgPyBrZXkgOiBba2V5XTtcclxuXHJcbiAgcmV0dXJuIGNob29zZUxvY2FsZShfa2V5KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxpc3RMb2NhbGVzKCk6IHN0cmluZ1tdIHtcclxuICByZXR1cm4gT2JqZWN0LmtleXMobG9jYWxlcyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUoKTogdm9pZCB7XHJcbiAgaWYgKGxvY2FsZXNbYGVuYF0pIHtcclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2V0R2xvYmFsTG9jYWxlKCdlbicsIHtcclxuICAgIGRheU9mTW9udGhPcmRpbmFsUGFyc2U6IC9cXGR7MSwyfSh0aHxzdHxuZHxyZCkvLFxyXG4gICAgb3JkaW5hbChudW06IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgIGNvbnN0IGIgPSBudW0gJSAxMDtcclxuICAgICAgY29uc3Qgb3V0cHV0ID1cclxuICAgICAgICB0b0ludCgobnVtICUgMTAwKSAvIDEwKSA9PT0gMVxyXG4gICAgICAgICAgPyAndGgnXHJcbiAgICAgICAgICA6IGIgPT09IDEgPyAnc3QnIDogYiA9PT0gMiA/ICduZCcgOiBiID09PSAzID8gJ3JkJyA6ICd0aCc7XHJcblxyXG4gICAgICByZXR1cm4gbnVtICsgb3V0cHV0O1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBpbml0V2VlaygpO1xyXG4gIGluaXRXZWVrWWVhcigpO1xyXG4gIGluaXRZZWFyKCk7XHJcbiAgaW5pdFRpbWV6b25lKCk7XHJcbiAgaW5pdFRpbWVzdGFtcCgpO1xyXG4gIGluaXRTZWNvbmQoKTtcclxuICBpbml0UXVhcnRlcigpO1xyXG4gIGluaXRPZmZzZXQoKTtcclxuICBpbml0TW9udGgoKTtcclxuICBpbml0TWludXRlKCk7XHJcbiAgaW5pdE1pbGxpc2Vjb25kKCk7XHJcbiAgaW5pdEhvdXIoKTtcclxuICBpbml0RGF5T2ZZZWFyKCk7XHJcbiAgaW5pdERheU9mV2VlaygpO1xyXG4gIGluaXREYXlPZk1vbnRoKCk7XHJcbn1cclxuIl19