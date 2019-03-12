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
var /** @type {?} */ locales = {};
var /** @type {?} */ localeFamilies = {};
var /** @type {?} */ globalLocale;
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
    var /** @type {?} */ next;
    var /** @type {?} */ locale;
    var /** @type {?} */ i = 0;
    while (i < names.length) {
        var /** @type {?} */ split = normalizeLocale(names[i]).split('-');
        var /** @type {?} */ j = split.length;
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
    var /** @type {?} */ res = Object.assign({}, parentConfig);
    for (var /** @type {?} */ childProp in childConfig) {
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
    var /** @type {?} */ parentProp;
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
        console.error("Khronos locale error: please load locale \"" + name + "\" before using it");
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
    var /** @type {?} */ data;
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
    var /** @type {?} */ parentConfig = baseConfig;
    config.abbr = name;
    if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
            parentConfig = locales[config.parentLocale]._config;
        }
        else {
            if (!localeFamilies[config.parentLocale]) {
                localeFamilies[config.parentLocale] = [];
            }
            localeFamilies[config.parentLocale].push({ name: name, config: config });
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
    var /** @type {?} */ _config = config;
    if (_config != null) {
        var /** @type {?} */ parentConfig = baseConfig;
        // MERGE
        var /** @type {?} */ tmpLocale = loadLocale(name);
        if (tmpLocale != null) {
            parentConfig = tmpLocale._config;
        }
        _config = mergeConfigs(parentConfig, _config);
        var /** @type {?} */ locale = new Locale(_config);
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
    var /** @type {?} */ _key = isArray(key) ? key : [key];
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
    if (locales["en"]) {
        return undefined;
    }
    getSetGlobalLocale('en', {
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: /**
         * @param {?} num
         * @return {?}
         */
        function (num) {
            var /** @type {?} */ b = num % 10;
            var /** @type {?} */ output = toInt((num % 100) / 10) === 1
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWxlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbImxvY2FsZS9sb2NhbGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFjLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JB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bEIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbnRlcm5hbCBzdG9yYWdlIGZvciBsb2NhbGUgY29uZmlnIGZpbGVzXHJcbmltcG9ydCB7IExvY2FsZSwgTG9jYWxlRGF0YSB9IGZyb20gJy4vbG9jYWxlLmNsYXNzJztcclxuaW1wb3J0IHsgYmFzZUNvbmZpZyB9IGZyb20gJy4vbG9jYWxlLmRlZmF1bHRzJztcclxuaW1wb3J0IHsgaGFzT3duUHJvcCwgaXNBcnJheSwgaXNPYmplY3QsIGlzU3RyaW5nLCBpc1VuZGVmaW5lZCwgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGNvbXBhcmVBcnJheXMgfSBmcm9tICcuLi91dGlscy9jb21wYXJlLWFycmF5cyc7XHJcblxyXG5pbXBvcnQgeyBpbml0V2VlayB9IGZyb20gJy4uL3VuaXRzL3dlZWsnO1xyXG5pbXBvcnQgeyBpbml0V2Vla1llYXIgfSBmcm9tICcuLi91bml0cy93ZWVrLXllYXInO1xyXG5pbXBvcnQgeyBpbml0WWVhciB9IGZyb20gJy4uL3VuaXRzL3llYXInO1xyXG5pbXBvcnQgeyBpbml0VGltZXpvbmUgfSBmcm9tICcuLi91bml0cy90aW1lem9uZSc7XHJcbmltcG9ydCB7IGluaXRUaW1lc3RhbXAgfSBmcm9tICcuLi91bml0cy90aW1lc3RhbXAnO1xyXG5pbXBvcnQgeyBpbml0U2Vjb25kIH0gZnJvbSAnLi4vdW5pdHMvc2Vjb25kJztcclxuaW1wb3J0IHsgaW5pdFF1YXJ0ZXIgfSBmcm9tICcuLi91bml0cy9xdWFydGVyJztcclxuaW1wb3J0IHsgaW5pdE9mZnNldCB9IGZyb20gJy4uL3VuaXRzL29mZnNldCc7XHJcbmltcG9ydCB7IGluaXRNaW51dGUgfSBmcm9tICcuLi91bml0cy9taW51dGUnO1xyXG5pbXBvcnQgeyBpbml0TWlsbGlzZWNvbmQgfSBmcm9tICcuLi91bml0cy9taWxsaXNlY29uZCc7XHJcbmltcG9ydCB7IGluaXRNb250aCB9IGZyb20gJy4uL3VuaXRzL21vbnRoJztcclxuaW1wb3J0IHsgaW5pdEhvdXIgfSBmcm9tICcuLi91bml0cy9ob3VyJztcclxuaW1wb3J0IHsgaW5pdERheU9mWWVhciB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi15ZWFyJztcclxuaW1wb3J0IHsgaW5pdERheU9mV2VlayB9IGZyb20gJy4uL3VuaXRzL2RheS1vZi13ZWVrJztcclxuaW1wb3J0IHsgaW5pdERheU9mTW9udGggfSBmcm9tICcuLi91bml0cy9kYXktb2YtbW9udGgnO1xyXG5cclxuY29uc3QgbG9jYWxlczogeyBba2V5OiBzdHJpbmddOiBMb2NhbGUgfSA9IHt9O1xyXG5jb25zdCBsb2NhbGVGYW1pbGllczogeyBba2V5OiBzdHJpbmddOiB7bmFtZTogc3RyaW5nOyBjb25maWc6IExvY2FsZURhdGF9W10gfSA9IHt9O1xyXG5sZXQgZ2xvYmFsTG9jYWxlOiBMb2NhbGU7XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIHJldHVybiBrZXkgPyBrZXkudG9Mb3dlckNhc2UoKS5yZXBsYWNlKCdfJywgJy0nKSA6IGtleTtcclxufVxyXG5cclxuLy8gcGljayB0aGUgbG9jYWxlIGZyb20gdGhlIGFycmF5XHJcbi8vIHRyeSBbJ2VuLWF1JywgJ2VuLWdiJ10gYXMgJ2VuLWF1JywgJ2VuLWdiJywgJ2VuJywgYXMgaW4gbW92ZSB0aHJvdWdoIHRoZSBsaXN0IHRyeWluZyBlYWNoXHJcbi8vIHN1YnN0cmluZyBmcm9tIG1vc3Qgc3BlY2lmaWMgdG8gbGVhc3QsXHJcbi8vIGJ1dCBtb3ZlIHRvIHRoZSBuZXh0IGFycmF5IGl0ZW0gaWYgaXQncyBhIG1vcmUgc3BlY2lmaWMgdmFyaWFudCB0aGFuIHRoZSBjdXJyZW50IHJvb3RcclxuZnVuY3Rpb24gY2hvb3NlTG9jYWxlKG5hbWVzOiBzdHJpbmdbXSk6IExvY2FsZSB7XHJcbiAgbGV0IG5leHQ7XHJcbiAgbGV0IGxvY2FsZTtcclxuICBsZXQgaSA9IDA7XHJcblxyXG4gIHdoaWxlIChpIDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICBjb25zdCBzcGxpdCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpXSkuc3BsaXQoJy0nKTtcclxuICAgIGxldCBqID0gc3BsaXQubGVuZ3RoO1xyXG4gICAgbmV4dCA9IG5vcm1hbGl6ZUxvY2FsZShuYW1lc1tpICsgMV0pO1xyXG4gICAgbmV4dCA9IG5leHQgPyBuZXh0LnNwbGl0KCctJykgOiBudWxsO1xyXG4gICAgd2hpbGUgKGogPiAwKSB7XHJcbiAgICAgIGxvY2FsZSA9IGxvYWRMb2NhbGUoc3BsaXQuc2xpY2UoMCwgaikuam9pbignLScpKTtcclxuICAgICAgaWYgKGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG5leHQgJiYgbmV4dC5sZW5ndGggPj0gaiAmJiBjb21wYXJlQXJyYXlzKHNwbGl0LCBuZXh0LCB0cnVlKSA+PSBqIC0gMSkge1xyXG4gICAgICAgIC8vIHRoZSBuZXh0IGFycmF5IGl0ZW0gaXMgYmV0dGVyIHRoYW4gYSBzaGFsbG93ZXIgc3Vic3RyaW5nIG9mIHRoaXMgb25lXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgai0tO1xyXG4gICAgfVxyXG4gICAgaSsrO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZUNvbmZpZ3MocGFyZW50Q29uZmlnOiBMb2NhbGVEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29uZmlnOiBMb2NhbGVEYXRhKSB7XHJcbiAgY29uc3QgcmVzOiBMb2NhbGVEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgcGFyZW50Q29uZmlnKTtcclxuXHJcbiAgZm9yIChjb25zdCBjaGlsZFByb3AgaW4gY2hpbGRDb25maWcpIHtcclxuICAgIGlmICghaGFzT3duUHJvcChjaGlsZENvbmZpZywgY2hpbGRQcm9wKSkge1xyXG4gICAgICBjb250aW51ZTtcclxuICAgIH1cclxuICAgIGlmIChpc09iamVjdChwYXJlbnRDb25maWdbY2hpbGRQcm9wXSkgJiYgaXNPYmplY3QoY2hpbGRDb25maWdbY2hpbGRQcm9wXSkpIHtcclxuICAgICAgcmVzW2NoaWxkUHJvcF0gPSB7fTtcclxuICAgICAgT2JqZWN0LmFzc2lnbihyZXNbY2hpbGRQcm9wXSwgcGFyZW50Q29uZmlnW2NoaWxkUHJvcF0pO1xyXG4gICAgICBPYmplY3QuYXNzaWduKHJlc1tjaGlsZFByb3BdLCBjaGlsZENvbmZpZ1tjaGlsZFByb3BdKTtcclxuICAgIH0gZWxzZSBpZiAoY2hpbGRDb25maWdbY2hpbGRQcm9wXSAhPSBudWxsKSB7XHJcbiAgICAgIHJlc1tjaGlsZFByb3BdID0gY2hpbGRDb25maWdbY2hpbGRQcm9wXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRlbGV0ZSByZXNbY2hpbGRQcm9wXTtcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IHBhcmVudFByb3A7XHJcbiAgZm9yIChwYXJlbnRQcm9wIGluIHBhcmVudENvbmZpZykge1xyXG4gICAgaWYgKFxyXG4gICAgICBoYXNPd25Qcm9wKHBhcmVudENvbmZpZywgcGFyZW50UHJvcCkgJiZcclxuICAgICAgIWhhc093blByb3AoY2hpbGRDb25maWcsIHBhcmVudFByb3ApICYmXHJcbiAgICAgIGlzT2JqZWN0KHBhcmVudENvbmZpZ1twYXJlbnRQcm9wIGFzIGtleW9mIExvY2FsZURhdGFdKVxyXG4gICAgKSB7XHJcbiAgICAgIC8vIG1ha2Ugc3VyZSBjaGFuZ2VzIHRvIHByb3BlcnRpZXMgZG9uJ3QgbW9kaWZ5IHBhcmVudCBjb25maWdcclxuICAgICAgcmVzW3BhcmVudFByb3AgYXMga2V5b2YgTG9jYWxlRGF0YV0gPSBPYmplY3QuYXNzaWduKHt9LCByZXNbcGFyZW50UHJvcCBhcyBrZXlvZiBMb2NhbGVEYXRhXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gbG9hZExvY2FsZShuYW1lOiBzdHJpbmcpOiBMb2NhbGUge1xyXG4gIC8vIG5vIHdheSFcclxuICAvKiB2YXIgb2xkTG9jYWxlID0gbnVsbDtcclxuICAgLy8gVE9ETzogRmluZCBhIGJldHRlciB3YXkgdG8gcmVnaXN0ZXIgYW5kIGxvYWQgYWxsIHRoZSBsb2NhbGVzIGluIE5vZGVcclxuICAgaWYgKCFsb2NhbGVzW25hbWVdICYmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykgJiZcclxuICAgICBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuICAgICB0cnkge1xyXG4gICAgICAgb2xkTG9jYWxlID0gZ2xvYmFsTG9jYWxlLl9hYmJyO1xyXG4gICAgICAgdmFyIGFsaWFzZWRSZXF1aXJlID0gcmVxdWlyZTtcclxuICAgICAgIGFsaWFzZWRSZXF1aXJlKCcuL2xvY2FsZS8nICsgbmFtZSk7XHJcbiAgICAgICBnZXRTZXRHbG9iYWxMb2NhbGUob2xkTG9jYWxlKTtcclxuICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICB9Ki9cclxuICBpZiAoIWxvY2FsZXNbbmFtZV0pIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxyXG4gICAgY29uc29sZS5lcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcclxuICAgIC8vIHRocm93IG5ldyBFcnJvcihgS2hyb25vcyBsb2NhbGUgZXJyb3I6IHBsZWFzZSBsb2FkIGxvY2FsZSBcIiR7bmFtZX1cIiBiZWZvcmUgdXNpbmcgaXRgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIHdpbGwgbG9hZCBsb2NhbGUgYW5kIHRoZW4gc2V0IHRoZSBnbG9iYWwgbG9jYWxlLiAgSWZcclxuLy8gbm8gYXJndW1lbnRzIGFyZSBwYXNzZWQgaW4sIGl0IHdpbGwgc2ltcGx5IHJldHVybiB0aGUgY3VycmVudCBnbG9iYWxcclxuLy8gbG9jYWxlIGtleS5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldEdsb2JhbExvY2FsZShrZXk/OiBzdHJpbmcgfCBzdHJpbmdbXSwgdmFsdWVzPzogTG9jYWxlRGF0YSk6IHN0cmluZyB7XHJcbiAgbGV0IGRhdGE6IExvY2FsZTtcclxuXHJcbiAgaWYgKGtleSkge1xyXG4gICAgaWYgKGlzVW5kZWZpbmVkKHZhbHVlcykpIHtcclxuICAgICAgZGF0YSA9IGdldExvY2FsZShrZXkpO1xyXG4gICAgfSBlbHNlIGlmIChpc1N0cmluZyhrZXkpKSB7XHJcbiAgICAgIGRhdGEgPSBkZWZpbmVMb2NhbGUoa2V5LCB2YWx1ZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGdsb2JhbExvY2FsZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZ2xvYmFsTG9jYWxlICYmIGdsb2JhbExvY2FsZS5fYWJicjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xyXG4gIGlmIChjb25maWcgPT09IG51bGwpIHtcclxuICAgIC8vIHVzZWZ1bCBmb3IgdGVzdGluZ1xyXG4gICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XHJcbiAgICBnbG9iYWxMb2NhbGUgPSBnZXRMb2NhbGUoJ2VuJyk7XHJcblxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICBpZiAoIWNvbmZpZykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IHBhcmVudENvbmZpZyA9IGJhc2VDb25maWc7XHJcbiAgY29uZmlnLmFiYnIgPSBuYW1lO1xyXG4gIGlmIChjb25maWcucGFyZW50TG9jYWxlICE9IG51bGwpIHtcclxuICAgIGlmIChsb2NhbGVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdICE9IG51bGwpIHtcclxuICAgICAgcGFyZW50Q29uZmlnID0gbG9jYWxlc1tjb25maWcucGFyZW50TG9jYWxlXS5fY29uZmlnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKCFsb2NhbGVGYW1pbGllc1tjb25maWcucGFyZW50TG9jYWxlXSkge1xyXG4gICAgICAgIGxvY2FsZUZhbWlsaWVzW2NvbmZpZy5wYXJlbnRMb2NhbGVdID0gW107XHJcbiAgICAgIH1cclxuICAgICAgbG9jYWxlRmFtaWxpZXNbY29uZmlnLnBhcmVudExvY2FsZV0ucHVzaCh7IG5hbWUsIGNvbmZpZyB9KTtcclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9jYWxlc1tuYW1lXSA9IG5ldyBMb2NhbGUobWVyZ2VDb25maWdzKHBhcmVudENvbmZpZywgY29uZmlnKSk7XHJcblxyXG4gIGlmIChsb2NhbGVGYW1pbGllc1tuYW1lXSkge1xyXG4gICAgbG9jYWxlRmFtaWxpZXNbbmFtZV0uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xyXG4gICAgICBkZWZpbmVMb2NhbGUoeC5uYW1lLCB4LmNvbmZpZyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIGJhY2t3YXJkcyBjb21wYXQgZm9yIG5vdzogYWxzbyBzZXQgdGhlIGxvY2FsZVxyXG4gIC8vIG1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGxvY2FsZSBBRlRFUiBhbGwgY2hpbGQgbG9jYWxlcyBoYXZlIGJlZW5cclxuICAvLyBjcmVhdGVkLCBzbyB3ZSB3b24ndCBlbmQgdXAgd2l0aCB0aGUgY2hpbGQgbG9jYWxlIHNldC5cclxuICBnZXRTZXRHbG9iYWxMb2NhbGUobmFtZSk7XHJcblxyXG5cclxuICByZXR1cm4gbG9jYWxlc1tuYW1lXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUxvY2FsZShuYW1lOiBzdHJpbmcsIGNvbmZpZz86IExvY2FsZURhdGEpOiBMb2NhbGUge1xyXG4gIGxldCBfY29uZmlnID0gY29uZmlnO1xyXG5cclxuICBpZiAoX2NvbmZpZyAhPSBudWxsKSB7XHJcbiAgICBsZXQgcGFyZW50Q29uZmlnID0gYmFzZUNvbmZpZztcclxuICAgIC8vIE1FUkdFXHJcbiAgICBjb25zdCB0bXBMb2NhbGUgPSBsb2FkTG9jYWxlKG5hbWUpO1xyXG4gICAgaWYgKHRtcExvY2FsZSAhPSBudWxsKSB7XHJcbiAgICAgIHBhcmVudENvbmZpZyA9IHRtcExvY2FsZS5fY29uZmlnO1xyXG4gICAgfVxyXG4gICAgX2NvbmZpZyA9IG1lcmdlQ29uZmlncyhwYXJlbnRDb25maWcsIF9jb25maWcpO1xyXG4gICAgY29uc3QgbG9jYWxlID0gbmV3IExvY2FsZShfY29uZmlnKTtcclxuICAgIGxvY2FsZS5wYXJlbnRMb2NhbGUgPSBsb2NhbGVzW25hbWVdO1xyXG4gICAgbG9jYWxlc1tuYW1lXSA9IGxvY2FsZTtcclxuXHJcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0IGZvciBub3c6IGFsc28gc2V0IHRoZSBsb2NhbGVcclxuICAgIGdldFNldEdsb2JhbExvY2FsZShuYW1lKTtcclxuICB9IGVsc2Uge1xyXG4gICAgLy8gcGFzcyBudWxsIGZvciBjb25maWcgdG8gdW51cGRhdGUsIHVzZWZ1bCBmb3IgdGVzdHNcclxuICAgIGlmIChsb2NhbGVzW25hbWVdICE9IG51bGwpIHtcclxuICAgICAgaWYgKGxvY2FsZXNbbmFtZV0ucGFyZW50TG9jYWxlICE9IG51bGwpIHtcclxuICAgICAgICBsb2NhbGVzW25hbWVdID0gbG9jYWxlc1tuYW1lXS5wYXJlbnRMb2NhbGU7XHJcbiAgICAgIH0gZWxzZSBpZiAobG9jYWxlc1tuYW1lXSAhPSBudWxsKSB7XHJcbiAgICAgICAgZGVsZXRlIGxvY2FsZXNbbmFtZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBsb2NhbGVzW25hbWVdO1xyXG59XHJcblxyXG4vLyByZXR1cm5zIGxvY2FsZSBkYXRhXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGUoa2V5Pzogc3RyaW5nIHwgc3RyaW5nW10pOiBMb2NhbGUge1xyXG4gIHNldERlZmF1bHRMb2NhbGUoKTtcclxuXHJcbiAgaWYgKCFrZXkpIHtcclxuICAgIHJldHVybiBnbG9iYWxMb2NhbGU7XHJcbiAgfVxyXG4gIC8vIGxldCBsb2NhbGU7XHJcbiAgY29uc3QgX2tleSA9IGlzQXJyYXkoa2V5KSA/IGtleSA6IFtrZXldO1xyXG5cclxuICByZXR1cm4gY2hvb3NlTG9jYWxlKF9rZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGlzdExvY2FsZXMoKTogc3RyaW5nW10ge1xyXG4gIHJldHVybiBPYmplY3Qua2V5cyhsb2NhbGVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RGVmYXVsdExvY2FsZSgpOiB2b2lkIHtcclxuICBpZiAobG9jYWxlc1tgZW5gXSkge1xyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBnZXRTZXRHbG9iYWxMb2NhbGUoJ2VuJywge1xyXG4gICAgZGF5T2ZNb250aE9yZGluYWxQYXJzZTogL1xcZHsxLDJ9KHRofHN0fG5kfHJkKS8sXHJcbiAgICBvcmRpbmFsKG51bTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgY29uc3QgYiA9IG51bSAlIDEwO1xyXG4gICAgICBjb25zdCBvdXRwdXQgPVxyXG4gICAgICAgIHRvSW50KChudW0gJSAxMDApIC8gMTApID09PSAxXHJcbiAgICAgICAgICA/ICd0aCdcclxuICAgICAgICAgIDogYiA9PT0gMSA/ICdzdCcgOiBiID09PSAyID8gJ25kJyA6IGIgPT09IDMgPyAncmQnIDogJ3RoJztcclxuXHJcbiAgICAgIHJldHVybiBudW0gKyBvdXRwdXQ7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGluaXRXZWVrKCk7XHJcbiAgaW5pdFdlZWtZZWFyKCk7XHJcbiAgaW5pdFllYXIoKTtcclxuICBpbml0VGltZXpvbmUoKTtcclxuICBpbml0VGltZXN0YW1wKCk7XHJcbiAgaW5pdFNlY29uZCgpO1xyXG4gIGluaXRRdWFydGVyKCk7XHJcbiAgaW5pdE9mZnNldCgpO1xyXG4gIGluaXRNb250aCgpO1xyXG4gIGluaXRNaW51dGUoKTtcclxuICBpbml0TWlsbGlzZWNvbmQoKTtcclxuICBpbml0SG91cigpO1xyXG4gIGluaXREYXlPZlllYXIoKTtcclxuICBpbml0RGF5T2ZXZWVrKCk7XHJcbiAgaW5pdERheU9mTW9udGgoKTtcclxufVxyXG4iXX0=