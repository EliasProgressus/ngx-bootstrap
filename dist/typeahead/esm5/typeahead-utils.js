/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
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
export function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    var /** @type {?} */ regexStr = "(?:[" + phraseRegexDelimiters + "])([^" + phraseRegexDelimiters + "]+)" +
        ("(?:[" + phraseRegexDelimiters + "])|([^" + wordRegexDelimiters + "]+)");
    var /** @type {?} */ preTokenized = str.split(new RegExp(regexStr, 'g'));
    var /** @type {?} */ result = [];
    var /** @type {?} */ preTokenizedLength = preTokenized.length;
    var /** @type {?} */ token;
    var /** @type {?} */ replacePhraseDelimiters = new RegExp("[" + phraseRegexDelimiters + "]+", 'g');
    for (var /** @type {?} */ i = 0; i < preTokenizedLength; i += 1) {
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
        var /** @type {?} */ functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var /** @type {?} */ properties = option
        .replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var /** @type {?} */ propertiesArray = properties.split('.');
    try {
        for (var propertiesArray_1 = tslib_1.__values(propertiesArray), propertiesArray_1_1 = propertiesArray_1.next(); !propertiesArray_1_1.done; propertiesArray_1_1 = propertiesArray_1.next()) {
            var property = propertiesArray_1_1.value;
            if (property in object) {
                // tslint:disable-next-line
                object = object[property];
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (propertiesArray_1_1 && !propertiesArray_1_1.done && (_a = propertiesArray_1.return)) _a.call(propertiesArray_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (!object) {
        return '';
    }
    return object.toString();
    var e_1, _a;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90eXBlYWhlYWQvIiwic291cmNlcyI6WyJ0eXBlYWhlYWQtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7OztBQUV2QyxNQUFNLG1CQUFtQixHQUFXO0lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNULE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FDWDtJQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBUztRQUMxRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN6QixDQUFDLENBQUM7Q0FDSjs7Ozs7QUFFRCxNQUFNLHVCQUF1QixhQUFxQjs7OztJQUloRCxNQUFNLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxNQUFNLENBQUMsQ0FBQztDQUNoRTs7Ozs7OztBQUdELE1BQU0sbUJBQW1CLEdBQVcsRUFDWCxtQkFBeUIsRUFDekIscUJBQTBCO0lBRDFCLG9DQUFBLEVBQUEseUJBQXlCO0lBQ3pCLHNDQUFBLEVBQUEsMEJBQTBCOztJQUVqRCxxQkFBTSxRQUFRLEdBQUcsU0FBTyxxQkFBcUIsYUFBUSxxQkFBcUIsUUFBSztTQUM3RSxTQUFPLHFCQUFxQixjQUFTLG1CQUFtQixRQUFLLENBQUEsQ0FBQztJQUNoRSxxQkFBTSxZQUFZLEdBQWEsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNwRSxxQkFBTSxNQUFNLEdBQWEsRUFBRSxDQUFDO0lBQzVCLHFCQUFNLGtCQUFrQixHQUFXLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDdkQscUJBQUksS0FBYSxDQUFDO0lBQ2xCLHFCQUFNLHVCQUF1QixHQUFHLElBQUksTUFBTSxDQUFDLE1BQUkscUJBQXFCLE9BQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUUvRSxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrQkFBa0IsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDL0MsS0FBSyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLEtBQUssbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1lBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO0tBQ0Y7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2Y7Ozs7OztBQUdELE1BQU0sNkJBQTZCLE1BQVcsRUFBRSxNQUFjO0lBQzVELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQjtJQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLHFCQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztLQUMxQztJQUVELHFCQUFNLFVBQVUsR0FBVyxNQUFNO1NBQzlCLE9BQU8sQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDO1NBQzVCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEIscUJBQU0sZUFBZSxHQUFhLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7O1FBRXhELEdBQUcsQ0FBQyxDQUFtQixJQUFBLG9CQUFBLGlCQUFBLGVBQWUsQ0FBQSxnREFBQTtZQUFqQyxJQUFNLFFBQVEsNEJBQUE7WUFDakIsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7O2dCQUV2QixNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzNCO1NBQ0Y7Ozs7Ozs7OztJQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUFBLE1BQU0sQ0FBQyxFQUFFLENBQUM7S0FBRTtJQUUxQixNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDOztDQUMxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhdGluTWFwIH0gZnJvbSAnLi9sYXRpbi1tYXAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxhdGluaXplKHN0cjogc3RyaW5nKTogc3RyaW5nIHtcclxuICBpZiAoIXN0cikge1xyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bXkEtWmEtejAtOVxcW1xcXSBdL2csIGZ1bmN0aW9uIChhOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGxhdGluTWFwW2FdIHx8IGE7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAvLyBSZWdleDogY2FwdHVyZSB0aGUgd2hvbGUgcXVlcnkgc3RyaW5nIGFuZCByZXBsYWNlIGl0IHdpdGggdGhlIHN0cmluZ1xyXG4gIC8vIHRoYXQgd2lsbCBiZSB1c2VkIHRvIG1hdGNoIHRoZSByZXN1bHRzLCBmb3IgZXhhbXBsZSBpZiB0aGUgY2FwdHVyZSBpc1xyXG4gIC8vICdhJyB0aGUgcmVzdWx0IHdpbGwgYmUgXFxhXHJcbiAgcmV0dXJuIHF1ZXJ5VG9Fc2NhcGUucmVwbGFjZSgvKFsuPyorXiRbXFxdXFxcXCgpe318LV0pL2csICdcXFxcJDEnKTtcclxufVxyXG5cclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRva2VuaXplKHN0cjogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgd29yZFJlZ2V4RGVsaW1pdGVycyA9ICcgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHBocmFzZVJlZ2V4RGVsaW1pdGVycyA9ICcnKTogQXJyYXk8c3RyaW5nPiB7XHJcbiAgLyogdHNsaW50OmVuYWJsZSAqL1xyXG4gIGNvbnN0IHJlZ2V4U3RyID0gYCg/Olske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKShbXiR7cGhyYXNlUmVnZXhEZWxpbWl0ZXJzfV0rKWAgK1xyXG4gICAgYCg/Olske3BocmFzZVJlZ2V4RGVsaW1pdGVyc31dKXwoW14ke3dvcmRSZWdleERlbGltaXRlcnN9XSspYDtcclxuICBjb25zdCBwcmVUb2tlbml6ZWQ6IHN0cmluZ1tdID0gc3RyLnNwbGl0KG5ldyBSZWdFeHAocmVnZXhTdHIsICdnJykpO1xyXG4gIGNvbnN0IHJlc3VsdDogc3RyaW5nW10gPSBbXTtcclxuICBjb25zdCBwcmVUb2tlbml6ZWRMZW5ndGg6IG51bWJlciA9IHByZVRva2VuaXplZC5sZW5ndGg7XHJcbiAgbGV0IHRva2VuOiBzdHJpbmc7XHJcbiAgY29uc3QgcmVwbGFjZVBocmFzZURlbGltaXRlcnMgPSBuZXcgUmVnRXhwKGBbJHtwaHJhc2VSZWdleERlbGltaXRlcnN9XStgLCAnZycpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByZVRva2VuaXplZExlbmd0aDsgaSArPSAxKSB7XHJcbiAgICB0b2tlbiA9IHByZVRva2VuaXplZFtpXTtcclxuICAgIGlmICh0b2tlbiAmJiB0b2tlbi5sZW5ndGggJiYgdG9rZW4gIT09IHdvcmRSZWdleERlbGltaXRlcnMpIHtcclxuICAgICAgcmVzdWx0LnB1c2godG9rZW4ucmVwbGFjZShyZXBsYWNlUGhyYXNlRGVsaW1pdGVycywgJycpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlRnJvbU9iamVjdChvYmplY3Q6IGFueSwgb3B0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gIGlmICghb3B0aW9uIHx8IHR5cGVvZiBvYmplY3QgIT09ICdvYmplY3QnKSB7XHJcbiAgICByZXR1cm4gb2JqZWN0LnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBpZiAob3B0aW9uLmVuZHNXaXRoKCcoKScpKSB7XHJcbiAgICBjb25zdCBmdW5jdGlvbk5hbWUgPSBvcHRpb24uc2xpY2UoMCwgb3B0aW9uLmxlbmd0aCAtIDIpO1xyXG5cclxuICAgIHJldHVybiBvYmplY3RbZnVuY3Rpb25OYW1lXSgpLnRvU3RyaW5nKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9wZXJ0aWVzOiBzdHJpbmcgPSBvcHRpb25cclxuICAgIC5yZXBsYWNlKC9cXFsoXFx3KylcXF0vZywgJy4kMScpXHJcbiAgICAucmVwbGFjZSgvXlxcLi8sICcnKTtcclxuICBjb25zdCBwcm9wZXJ0aWVzQXJyYXk6IHN0cmluZ1tdID0gcHJvcGVydGllcy5zcGxpdCgnLicpO1xyXG5cclxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHByb3BlcnRpZXNBcnJheSkge1xyXG4gICAgaWYgKHByb3BlcnR5IGluIG9iamVjdCkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgICAgb2JqZWN0ID0gb2JqZWN0W3Byb3BlcnR5XTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCFvYmplY3QpIHtyZXR1cm4gJyc7IH1cclxuXHJcbiAgcmV0dXJuIG9iamVjdC50b1N0cmluZygpO1xyXG59XHJcbiJdfQ==