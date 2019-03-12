/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { latinMap } from './latin-map';
/**
 * @param {?} str
 * @return {?}
 */
export function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return latinMap[a] || a;
    });
}
/**
 * @param {?} queryToEscape
 * @return {?}
 */
export function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/**
 * @param {?} str
 * @param {?=} wordRegexDelimiters
 * @param {?=} phraseRegexDelimiters
 * @return {?}
 */
export function tokenize(str, wordRegexDelimiters = ' ', phraseRegexDelimiters = '') {
    /* tslint:enable */
    const /** @type {?} */ regexStr = `(?:[${phraseRegexDelimiters}])([^${phraseRegexDelimiters}]+)` +
        `(?:[${phraseRegexDelimiters}])|([^${wordRegexDelimiters}]+)`;
    const /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
    const /** @type {?} */ result = [];
    const /** @type {?} */ preTokenizedLength = preTokenized.length;
    let /** @type {?} */ token;
    const /** @type {?} */ replacePhraseDelimiters = new RegExp(`[${phraseRegexDelimiters}]+`, 'g');
    for (let /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
/**
 * @param {?} object
 * @param {?} option
 * @return {?}
 */
export function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        const /** @type {?} */ functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    const /** @type {?} */ properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    const /** @type {?} */ propertiesArray = properties.split('.');
    for (const /** @type {?} */ property of propertiesArray) {
        if (property in object) {
            // tslint:disable-next-line
            object = object[property];
        }
    }
    if (!object) {
        return '';
    }
    return object.toString();
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvIiwic291cmNlcyI6WyJ0eXBlYWhlYWQtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7O0FBRXZDLE1BQU0sbUJBQW1CLEdBQVc7SUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1QsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUNYO0lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxDQUFTO1FBQzFELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCLENBQUMsQ0FBQztDQUNKOzs7OztBQUVELE1BQU0sdUJBQXVCLGFBQXFCOzs7O0lBSWhELE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLHdCQUF3QixFQUFFLE1BQU0sQ0FBQyxDQUFDO0NBQ2hFOzs7Ozs7O0FBR0QsTUFBTSxtQkFBbUIsR0FBVyxFQUNYLG1CQUFtQixHQUFHLEdBQUcsRUFDekIscUJBQXFCLEdBQUcsRUFBRTs7SUFFakQsdUJBQU0sUUFBUSxHQUFHLE9BQU8scUJBQXFCLFFBQVEscUJBQXFCLEtBQUs7UUFDN0UsT0FBTyxxQkFBcUIsU0FBUyxtQkFBbUIsS0FBSyxDQUFDO0lBQ2hFLHVCQUFNLFlBQVksR0FBYSxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLHVCQUFNLE1BQU0sR0FBYSxFQUFFLENBQUM7SUFDNUIsdUJBQU0sa0JBQWtCLEdBQVcsWUFBWSxDQUFDLE1BQU0sQ0FBQztJQUN2RCxxQkFBSSxLQUFhLENBQUM7SUFDbEIsdUJBQU0sdUJBQXVCLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxxQkFBcUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRS9FLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMvQyxLQUFLLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLEtBQUssS0FBSyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7WUFDM0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDekQ7S0FDRjtJQUVELE1BQU0sQ0FBQyxNQUFNLENBQUM7Q0FDZjs7Ozs7O0FBR0QsTUFBTSw2QkFBNkIsTUFBVyxFQUFFLE1BQWM7SUFDNUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMxQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzFCO0lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUIsdUJBQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFeEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzFDO0lBRUQsdUJBQU0sVUFBVSxHQUFXLE1BQU07U0FDOUIsT0FBTyxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUM7U0FDNUIsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN0Qix1QkFBTSxlQUFlLEdBQWEsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV4RCxHQUFHLENBQUMsQ0FBQyx1QkFBTSxRQUFRLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQztRQUN2QyxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQzs7WUFFdkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMzQjtLQUNGO0lBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQUEsTUFBTSxDQUFDLEVBQUUsQ0FBQztLQUFFO0lBRTFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDMUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXRpbk1hcCB9IGZyb20gJy4vbGF0aW4tbWFwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXRpbml6ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgaWYgKCFzdHIpIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiBzdHIucmVwbGFjZSgvW15BLVphLXowLTlcXFtcXF0gXS9nLCBmdW5jdGlvbiAoYTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBsYXRpbk1hcFthXSB8fCBhO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlUmVnZXhwKHF1ZXJ5VG9Fc2NhcGU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgLy8gUmVnZXg6IGNhcHR1cmUgdGhlIHdob2xlIHF1ZXJ5IHN0cmluZyBhbmQgcmVwbGFjZSBpdCB3aXRoIHRoZSBzdHJpbmdcclxuICAvLyB0aGF0IHdpbGwgYmUgdXNlZCB0byBtYXRjaCB0aGUgcmVzdWx0cywgZm9yIGV4YW1wbGUgaWYgdGhlIGNhcHR1cmUgaXNcclxuICAvLyAnYScgdGhlIHJlc3VsdCB3aWxsIGJlIFxcYVxyXG4gIHJldHVybiBxdWVyeVRvRXNjYXBlLnJlcGxhY2UoLyhbLj8qK14kW1xcXVxcXFwoKXt9fC1dKS9nLCAnXFxcXCQxJyk7XHJcbn1cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShzdHI6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRSZWdleERlbGltaXRlcnMgPSAnICcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBwaHJhc2VSZWdleERlbGltaXRlcnMgPSAnJyk6IEFycmF5PHN0cmluZz4ge1xyXG4gIC8qIHRzbGludDplbmFibGUgKi9cclxuICBjb25zdCByZWdleFN0ciA9IGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSkoW14ke3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKylgICtcclxuICAgIGAoPzpbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XSl8KFteJHt3b3JkUmVnZXhEZWxpbWl0ZXJzfV0rKWA7XHJcbiAgY29uc3QgcHJlVG9rZW5pemVkOiBzdHJpbmdbXSA9IHN0ci5zcGxpdChuZXcgUmVnRXhwKHJlZ2V4U3RyLCAnZycpKTtcclxuICBjb25zdCByZXN1bHQ6IHN0cmluZ1tdID0gW107XHJcbiAgY29uc3QgcHJlVG9rZW5pemVkTGVuZ3RoOiBudW1iZXIgPSBwcmVUb2tlbml6ZWQubGVuZ3RoO1xyXG4gIGxldCB0b2tlbjogc3RyaW5nO1xyXG4gIGNvbnN0IHJlcGxhY2VQaHJhc2VEZWxpbWl0ZXJzID0gbmV3IFJlZ0V4cChgWyR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rYCwgJ2cnKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVUb2tlbml6ZWRMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgdG9rZW4gPSBwcmVUb2tlbml6ZWRbaV07XHJcbiAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoICYmIHRva2VuICE9PSB3b3JkUmVnZXhEZWxpbWl0ZXJzKSB7XHJcbiAgICAgIHJlc3VsdC5wdXNoKHRva2VuLnJlcGxhY2UocmVwbGFjZVBocmFzZURlbGltaXRlcnMsICcnKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZUZyb21PYmplY3Qob2JqZWN0OiBhbnksIG9wdGlvbjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoIW9wdGlvbiB8fCB0eXBlb2Ygb2JqZWN0ICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgaWYgKG9wdGlvbi5lbmRzV2l0aCgnKCknKSkge1xyXG4gICAgY29uc3QgZnVuY3Rpb25OYW1lID0gb3B0aW9uLnNsaWNlKDAsIG9wdGlvbi5sZW5ndGggLSAyKTtcclxuXHJcbiAgICByZXR1cm4gb2JqZWN0W2Z1bmN0aW9uTmFtZV0oKS50b1N0cmluZygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvcGVydGllczogc3RyaW5nID0gb3B0aW9uXHJcbiAgICAucmVwbGFjZSgvXFxbKFxcdyspXFxdL2csICcuJDEnKVxyXG4gICAgLnJlcGxhY2UoL15cXC4vLCAnJyk7XHJcbiAgY29uc3QgcHJvcGVydGllc0FycmF5OiBzdHJpbmdbXSA9IHByb3BlcnRpZXMuc3BsaXQoJy4nKTtcclxuXHJcbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiBwcm9wZXJ0aWVzQXJyYXkpIHtcclxuICAgIGlmIChwcm9wZXJ0eSBpbiBvYmplY3QpIHtcclxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXHJcbiAgICAgIG9iamVjdCA9IG9iamVjdFtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmICghb2JqZWN0KSB7cmV0dXJuICcnOyB9XHJcblxyXG4gIHJldHVybiBvYmplY3QudG9TdHJpbmcoKTtcclxufVxyXG4iXX0=