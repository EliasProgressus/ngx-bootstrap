/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// moment.js
// version : 2.18.1
// authors : Tim Wood, Iskren Chernev, Moment.js contributors
// license : MIT
// momentjs.com
import './units/index';
import { formatFunctions, makeFormatFunction } from './format/format';
import { getLocale } from './locale/locales';
import { isDateValid } from './utils/type-checks';
/**
 * @param {?} date
 * @param {?} format
 * @param {?=} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatDate(date, format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    var /** @type {?} */ _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error("Locale \"" + locale + "\" is not defined, please add it with \"defineLocale(...)\"");
    }
    var /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    var /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
    if (!output) {
        return output;
    }
    return _locale.postformat(output);
}
/**
 * @param {?} date
 * @param {?} _format
 * @param {?} locale
 * @param {?=} isUTC
 * @param {?=} offset
 * @return {?}
 */
export function formatMoment(date, _format, locale, isUTC, offset) {
    if (offset === void 0) { offset = 0; }
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    var /** @type {?} */ format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
export function expandFormat(_format, locale) {
    var /** @type {?} */ format = _format;
    var /** @type {?} */ i = 5;
    var /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    var /** @type {?} */ replaceLongDateFormatTokens = function (input) {
        return locale.formatLongDate(input) || input;
    };
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }
    return format;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFFbEQsTUFBTSxxQkFBcUIsSUFBVSxFQUFFLE1BQWMsRUFBRSxNQUFlLEVBQUUsS0FBZSxFQUFFLE1BQVU7SUFBVix1QkFBQSxFQUFBLFVBQVU7SUFDakcscUJBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUM7SUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2IsTUFBTSxJQUFJLEtBQUssQ0FDYixjQUFXLE1BQU0sZ0VBQTBELENBQzVFLENBQUM7S0FDSDtJQUVELHFCQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFFLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBRXZGLHFCQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRW5FLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNaLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZjtJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQ25DOzs7Ozs7Ozs7QUFHRCxNQUFNLHVCQUF1QixJQUFVLEVBQUUsT0FBZSxFQUFFLE1BQWMsRUFBRSxLQUFlLEVBQUUsTUFBVTtJQUFWLHVCQUFBLEVBQUEsVUFBVTtJQUNuRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7S0FDM0I7SUFFRCxxQkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM3QyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRWhGLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Q0FDN0Q7Ozs7OztBQUVELE1BQU0sdUJBQXVCLE9BQWUsRUFBRSxNQUFjO0lBQzFELHFCQUFJLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDckIscUJBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNWLHFCQUFNLHFCQUFxQixHQUFHLDRDQUE0QyxDQUFDO0lBRTNFLHFCQUFNLDJCQUEyQixHQUFHLFVBQUMsS0FBVTtRQUM3QyxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7S0FDOUMsQ0FBQztJQUVGLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDNUUscUJBQXFCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ1I7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb21lbnQuanNcclxuLy8gdmVyc2lvbiA6IDIuMTguMVxyXG4vLyBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXHJcbi8vIGxpY2Vuc2UgOiBNSVRcclxuLy8gbW9tZW50anMuY29tXHJcblxyXG5pbXBvcnQgJy4vdW5pdHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBmb3JtYXRGdW5jdGlvbnMsIG1ha2VGb3JtYXRGdW5jdGlvbiB9IGZyb20gJy4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBpc0RhdGVWYWxpZCB9IGZyb20gJy4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZywgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcclxuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSB8fCAnZW4nKTtcclxuICBpZiAoIV9sb2NhbGUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYExvY2FsZSBcIiR7bG9jYWxlfVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IF9mb3JtYXQgPSBmb3JtYXQgfHwgKGlzVVRDID8gICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJyA6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicpO1xyXG5cclxuICBjb25zdCBvdXRwdXQgPSBmb3JtYXRNb21lbnQoZGF0ZSwgX2Zvcm1hdCwgX2xvY2FsZSwgaXNVVEMsIG9mZnNldCk7XHJcblxyXG4gIGlmICghb3V0cHV0KSB7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF9sb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xyXG59XHJcblxyXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbWVudChkYXRlOiBEYXRlLCBfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xyXG4gIGlmICghaXNEYXRlVmFsaWQoZGF0ZSkpIHtcclxuICAgIHJldHVybiBsb2NhbGUuaW52YWxpZERhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXQgPSBleHBhbmRGb3JtYXQoX2Zvcm1hdCwgbG9jYWxlKTtcclxuICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xyXG5cclxuICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0oZGF0ZSwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0ID0gX2Zvcm1hdDtcclxuICBsZXQgaSA9IDU7XHJcbiAgY29uc3QgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcclxuXHJcbiAgY29uc3QgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zID0gKGlucHV0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0TG9uZ0RhdGUoaW5wdXQpIHx8IGlucHV0O1xyXG4gIH07XHJcblxyXG4gIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xyXG4gIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xyXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XHJcbiAgICBpIC09IDE7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZm9ybWF0O1xyXG59XHJcbiJdfQ==