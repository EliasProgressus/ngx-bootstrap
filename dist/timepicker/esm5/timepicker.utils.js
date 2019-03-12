/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ dex = 10;
var /** @type {?} */ hoursPerDay = 24;
var /** @type {?} */ hoursPerDayHalf = 12;
var /** @type {?} */ minutesPerHour = 60;
var /** @type {?} */ secondsPerMinute = 60;
/**
 * @param {?=} value
 * @return {?}
 */
export function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
/**
 * @param {?} controls
 * @param {?} newDate
 * @return {?}
 */
export function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function toNumber(value) {
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNumber(value) {
    return !isNaN(toNumber(value));
}
/**
 * @param {?} value
 * @param {?=} isPM
 * @return {?}
 */
export function parseHours(value, isPM) {
    if (isPM === void 0) { isPM = false; }
    var /** @type {?} */ hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
/**
 * @param {?} value
 * @return {?}
 */
export function parseMinutes(value) {
    var /** @type {?} */ minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
/**
 * @param {?} value
 * @return {?}
 */
export function parseSeconds(value) {
    var /** @type {?} */ seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
/**
 * @param {?} value
 * @return {?}
 */
export function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
/**
 * @param {?} value
 * @param {?} diff
 * @return {?}
 */
export function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    var /** @type {?} */ hour = value.getHours();
    var /** @type {?} */ minutes = value.getMinutes();
    var /** @type {?} */ seconds = value.getSeconds();
    if (diff.hour) {
        hour = (hour + toNumber(diff.hour)) % hoursPerDay;
        if (hour < 0) {
            hour += hoursPerDay;
        }
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
/**
 * @param {?} value
 * @param {?} opts
 * @return {?}
 */
export function setTime(value, opts) {
    var /** @type {?} */ hour = parseHours(opts.hour);
    var /** @type {?} */ minute = parseMinutes(opts.minute);
    var /** @type {?} */ seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
/**
 * @param {?} value
 * @param {?} hours
 * @param {?} minutes
 * @param {?} seconds
 * @return {?}
 */
export function createDate(value, hours, minutes, seconds) {
    return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
}
/**
 * @param {?} value
 * @return {?}
 */
export function padNumber(value) {
    var /** @type {?} */ _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return "0" + _value;
}
/**
 * @param {?} hours
 * @param {?} isPM
 * @return {?}
 */
export function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
/**
 * @param {?} minutes
 * @return {?}
 */
export function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
/**
 * @param {?} seconds
 * @return {?}
 */
export function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
/**
 * @param {?} diff
 * @param {?} max
 * @param {?} min
 * @return {?}
 */
export function isInputLimitValid(diff, max, min) {
    var /** @type {?} */ newDate = changeTime(new Date(), diff);
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
/**
 * @param {?} hours
 * @param {?=} minutes
 * @param {?=} seconds
 * @param {?=} isPM
 * @return {?}
 */
export function isInputValid(hours, minutes, seconds, isPM) {
    if (minutes === void 0) { minutes = '0'; }
    if (seconds === void 0) { seconds = '0'; }
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci51dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci8iLCJzb3VyY2VzIjpbInRpbWVwaWNrZXIudXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLHFCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDZixxQkFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLHFCQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IscUJBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUMxQixxQkFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7O0FBRTVCLE1BQU0sc0JBQXNCLEtBQXFCO0lBQy9DLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELEVBQUUsQ0FBQyxDQUFDLEtBQUssWUFBWSxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUNyQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYjs7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsUUFBa0MsRUFBRSxPQUFhO0lBQzVFLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFH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Q0FBQyxDQUFDO0NBQ3RDOzs7Ozs7O0FBRUQsTUFBTSw0QkFBNEIsSUFBVSxFQUFFLEdBQVMsRUFBRSxHQUFTO0lBQ2hFLHFCQUFNLE9BQU8sR0FBRyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUU3QyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0lBRUQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYjs7Ozs7Ozs7QUFFRCxNQUFNLHVCQUNKLEtBQWEsRUFDYixPQUFhLEVBQ2IsT0FBYSxFQUNiLElBQWE7SUFGYix3QkFBQSxFQUFBLGFBQWE7SUFDYix3QkFBQSxFQUFBLGFBQWE7SUFHYixNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztXQUMvQixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7V0FDM0Isa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lLCBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUgfSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWxzJztcclxuXHJcbmNvbnN0IGRleCA9IDEwO1xyXG5jb25zdCBob3Vyc1BlckRheSA9IDI0O1xyXG5jb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcclxuY29uc3QgbWludXRlc1BlckhvdXIgPSA2MDtcclxuY29uc3Qgc2Vjb25kc1Blck1pbnV0ZSA9IDYwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlPzogc3RyaW5nIHwgRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgaXNOYU4odmFsdWUuZ2V0SG91cnMoKSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gaXNWYWxpZERhdGUobmV3IERhdGUodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZExpbWl0KGNvbnRyb2xzOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsIG5ld0RhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICBpZiAoY29udHJvbHMubWluICYmIG5ld0RhdGUgPCBjb250cm9scy5taW4pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChjb250cm9scy5tYXggJiYgbmV3RGF0ZSA+IGNvbnRyb2xzLm1heCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCBkZXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHZhbHVlIGlzIG51bWJlciB7XHJcbiAgcmV0dXJuICFpc05hTih0b051bWJlcih2YWx1ZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIb3VycyhcclxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIGlzUE0gPSBmYWxzZVxyXG4pOiBudW1iZXIge1xyXG4gIGNvbnN0IGhvdXIgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgaWYgKFxyXG4gICAgaXNOYU4oaG91cikgfHxcclxuICAgIGhvdXIgPCAwIHx8XHJcbiAgICBob3VyID4gKGlzUE0gPyBob3Vyc1BlckRheUhhbGYgOiBob3Vyc1BlckRheSlcclxuICApIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaG91cjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWludXRlcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICBjb25zdCBtaW51dGUgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgaWYgKGlzTmFOKG1pbnV0ZSkgfHwgbWludXRlIDwgMCB8fCBtaW51dGUgPiBtaW51dGVzUGVySG91cikge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHJldHVybiBtaW51dGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNlY29uZHModmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoaXNOYU4oc2Vjb25kcykgfHwgc2Vjb25kcyA8IDAgfHwgc2Vjb25kcyA+IHNlY29uZHNQZXJNaW51dGUpIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2Vjb25kcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSk6IERhdGUge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGltZSh2YWx1ZTogRGF0ZSwgZGlmZjogVGltZSk6IERhdGUge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBjaGFuZ2VUaW1lKGNyZWF0ZURhdGUobmV3IERhdGUoKSwgMCwgMCwgMCksIGRpZmYpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xyXG4gIGxldCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xyXG4gIGxldCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xyXG5cclxuICBpZiAoZGlmZi5ob3VyKSB7XHJcbiAgICBob3VyID0gKGhvdXIgKyB0b051bWJlcihkaWZmLmhvdXIpKSAlIGhvdXJzUGVyRGF5O1xyXG4gICAgaWYgKGhvdXIgPCAwKSB7XHJcbiAgICAgIGhvdXIgKz0gaG91cnNQZXJEYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZGlmZi5taW51dGUpIHtcclxuICAgIG1pbnV0ZXMgPSBtaW51dGVzICsgdG9OdW1iZXIoZGlmZi5taW51dGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpZmYuc2Vjb25kcykge1xyXG4gICAgc2Vjb25kcyA9IHNlY29uZHMgKyB0b051bWJlcihkaWZmLnNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNyZWF0ZURhdGUodmFsdWUsIGhvdXIsIG1pbnV0ZXMsIHNlY29uZHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZSh2YWx1ZTogRGF0ZSwgb3B0czogVGltZSk6IERhdGUge1xyXG4gIGxldCBob3VyID0gcGFyc2VIb3VycyhvcHRzLmhvdXIpO1xyXG4gIGNvbnN0IG1pbnV0ZSA9IHBhcnNlTWludXRlcyhvcHRzLm1pbnV0ZSk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlU2Vjb25kcyhvcHRzLnNlY29uZHMpIHx8IDA7XHJcblxyXG4gIGlmIChvcHRzLmlzUE0pIHtcclxuICAgIGhvdXIgKz0gaG91cnNQZXJEYXlIYWxmO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgaWYgKCFpc05hTihob3VyKSAmJiAhaXNOYU4obWludXRlKSkge1xyXG4gICAgICByZXR1cm4gY3JlYXRlRGF0ZShuZXcgRGF0ZSgpLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc05hTihob3VyKSB8fCBpc05hTihtaW51dGUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlRGF0ZSh2YWx1ZSwgaG91ciwgbWludXRlLCBzZWNvbmRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoXHJcbiAgdmFsdWU6IERhdGUsXHJcbiAgaG91cnM6IG51bWJlcixcclxuICBtaW51dGVzOiBudW1iZXIsXHJcbiAgc2Vjb25kczogbnVtYmVyXHJcbik6IERhdGUge1xyXG4gIHJldHVybiBuZXcgRGF0ZShcclxuICAgIHZhbHVlLmdldEZ1bGxZZWFyKCksXHJcbiAgICB2YWx1ZS5nZXRNb250aCgpLFxyXG4gICAgdmFsdWUuZ2V0RGF0ZSgpLFxyXG4gICAgaG91cnMsXHJcbiAgICBtaW51dGVzLFxyXG4gICAgc2Vjb25kcyxcclxuICAgIHZhbHVlLmdldE1pbGxpc2Vjb25kcygpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZE51bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICBjb25zdCBfdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gIGlmIChfdmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgcmV0dXJuIF92YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBgMCR7X3ZhbHVlfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0hvdXJJbnB1dFZhbGlkKGhvdXJzOiBzdHJpbmcsIGlzUE06IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlSG91cnMoaG91cnMsIGlzUE0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWludXRlSW5wdXRWYWxpZChtaW51dGVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlTWludXRlcyhtaW51dGVzKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NlY29uZElucHV0VmFsaWQoc2Vjb25kczogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICFpc05hTihwYXJzZVNlY29uZHMoc2Vjb25kcykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dExpbWl0VmFsaWQoZGlmZjogVGltZSwgbWF4OiBEYXRlLCBtaW46IERhdGUpOiBib29sZWFuIHtcclxuICBjb25zdCBuZXdEYXRlID0gY2hhbmdlVGltZShuZXcgRGF0ZSgpLCBkaWZmKTtcclxuXHJcbiAgaWYgKG1heCAmJiBuZXdEYXRlID4gbWF4KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAobWluICYmIG5ld0RhdGUgPCBtaW4pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dFZhbGlkKFxyXG4gIGhvdXJzOiBzdHJpbmcsXHJcbiAgbWludXRlcyA9ICcwJyxcclxuICBzZWNvbmRzID0gJzAnLFxyXG4gIGlzUE06IGJvb2xlYW5cclxuKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGlzSG91cklucHV0VmFsaWQoaG91cnMsIGlzUE0pXHJcbiAgICAmJiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlcylcclxuICAgICYmIGlzU2Vjb25kSW5wdXRWYWxpZChzZWNvbmRzKTtcclxufVxyXG4iXX0=