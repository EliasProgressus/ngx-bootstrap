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
export function formatDate(date, format, locale, isUTC, offset = 0) {
    const /** @type {?} */ _locale = getLocale(locale || 'en');
    if (!_locale) {
        throw new Error(`Locale "${locale}" is not defined, please add it with "defineLocale(...)"`);
    }
    const /** @type {?} */ _format = format || (isUTC ? 'YYYY-MM-DDTHH:mm:ss[Z]' : 'YYYY-MM-DDTHH:mm:ssZ');
    const /** @type {?} */ output = formatMoment(date, _format, _locale, isUTC, offset);
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
export function formatMoment(date, _format, locale, isUTC, offset = 0) {
    if (!isDateValid(date)) {
        return locale.invalidDate;
    }
    const /** @type {?} */ format = expandFormat(_format, locale);
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](date, locale, isUTC, offset);
}
/**
 * @param {?} _format
 * @param {?} locale
 * @return {?}
 */
export function expandFormat(_format, locale) {
    let /** @type {?} */ format = _format;
    let /** @type {?} */ i = 5;
    const /** @type {?} */ localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
    const /** @type {?} */ replaceLongDateFormatTokens = (input) => {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZm9ybWF0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLE9BQU8sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFFbEQsTUFBTSxxQkFBcUIsSUFBVSxFQUFFLE1BQWMsRUFBRSxNQUFlLEVBQUUsS0FBZSxFQUFFLE1BQU0sR0FBRyxDQUFDO0lBQ2pHLHVCQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDO0lBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNiLE1BQU0sSUFBSSxLQUFLLENBQ2IsV0FBVyxNQUFNLDBEQUEwRCxDQUM1RSxDQUFDO0tBQ0g7SUFFRCx1QkFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBRSx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUV2Rix1QkFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVuRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDWixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztDQUNuQzs7Ozs7Ozs7O0FBR0QsTUFBTSx1QkFBdUIsSUFBVSxFQUFFLE9BQWUsRUFBRSxNQUFjLEVBQUUsS0FBZSxFQUFFLE1BQU0sR0FBRyxDQUFDO0lBQ25HLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztLQUMzQjtJQUVELHVCQUFNLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFaEYsTUFBTSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztDQUM3RDs7Ozs7O0FBRUQsTUFBTSx1QkFBdUIsT0FBZSxFQUFFLE1BQWM7SUFDMUQscUJBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQztJQUNyQixxQkFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsdUJBQU0scUJBQXFCLEdBQUcsNENBQTRDLENBQUM7SUFFM0UsdUJBQU0sMkJBQTJCLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRTtRQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUM7S0FDOUMsQ0FBQztJQUVGLHFCQUFxQixDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLHFCQUFxQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3BELE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFLDJCQUEyQixDQUFDLENBQUM7UUFDNUUscUJBQXFCLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ1I7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtb21lbnQuanNcclxuLy8gdmVyc2lvbiA6IDIuMTguMVxyXG4vLyBhdXRob3JzIDogVGltIFdvb2QsIElza3JlbiBDaGVybmV2LCBNb21lbnQuanMgY29udHJpYnV0b3JzXHJcbi8vIGxpY2Vuc2UgOiBNSVRcclxuLy8gbW9tZW50anMuY29tXHJcblxyXG5pbXBvcnQgJy4vdW5pdHMvaW5kZXgnO1xyXG5pbXBvcnQgeyBmb3JtYXRGdW5jdGlvbnMsIG1ha2VGb3JtYXRGdW5jdGlvbiB9IGZyb20gJy4vZm9ybWF0L2Zvcm1hdCc7XHJcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4vbG9jYWxlL2xvY2FsZXMnO1xyXG5pbXBvcnQgeyBpc0RhdGVWYWxpZCB9IGZyb20gJy4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZywgaXNVVEM/OiBib29sZWFuLCBvZmZzZXQgPSAwKTogc3RyaW5nIHtcclxuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSB8fCAnZW4nKTtcclxuICBpZiAoIV9sb2NhbGUpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgYExvY2FsZSBcIiR7bG9jYWxlfVwiIGlzIG5vdCBkZWZpbmVkLCBwbGVhc2UgYWRkIGl0IHdpdGggXCJkZWZpbmVMb2NhbGUoLi4uKVwiYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IF9mb3JtYXQgPSBmb3JtYXQgfHwgKGlzVVRDID8gICdZWVlZLU1NLUREVEhIOm1tOnNzW1pdJyA6ICdZWVlZLU1NLUREVEhIOm1tOnNzWicpO1xyXG5cclxuICBjb25zdCBvdXRwdXQgPSBmb3JtYXRNb21lbnQoZGF0ZSwgX2Zvcm1hdCwgX2xvY2FsZSwgaXNVVEMsIG9mZnNldCk7XHJcblxyXG4gIGlmICghb3V0cHV0KSB7XHJcbiAgICByZXR1cm4gb3V0cHV0O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF9sb2NhbGUucG9zdGZvcm1hdChvdXRwdXQpO1xyXG59XHJcblxyXG4vLyBmb3JtYXQgZGF0ZSB1c2luZyBuYXRpdmUgZGF0ZSBvYmplY3RcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE1vbWVudChkYXRlOiBEYXRlLCBfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlLCBpc1VUQz86IGJvb2xlYW4sIG9mZnNldCA9IDApOiBzdHJpbmcge1xyXG4gIGlmICghaXNEYXRlVmFsaWQoZGF0ZSkpIHtcclxuICAgIHJldHVybiBsb2NhbGUuaW52YWxpZERhdGU7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmb3JtYXQgPSBleHBhbmRGb3JtYXQoX2Zvcm1hdCwgbG9jYWxlKTtcclxuICBmb3JtYXRGdW5jdGlvbnNbZm9ybWF0XSA9IGZvcm1hdEZ1bmN0aW9uc1tmb3JtYXRdIHx8IG1ha2VGb3JtYXRGdW5jdGlvbihmb3JtYXQpO1xyXG5cclxuICByZXR1cm4gZm9ybWF0RnVuY3Rpb25zW2Zvcm1hdF0oZGF0ZSwgbG9jYWxlLCBpc1VUQywgb2Zmc2V0KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGFuZEZvcm1hdChfZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogTG9jYWxlKTogc3RyaW5nIHtcclxuICBsZXQgZm9ybWF0ID0gX2Zvcm1hdDtcclxuICBsZXQgaSA9IDU7XHJcbiAgY29uc3QgbG9jYWxGb3JtYXR0aW5nVG9rZW5zID0gLyhcXFtbXlxcW10qXFxdKXwoXFxcXCk/KExUU3xMVHxMTD9MP0w/fGx7MSw0fSkvZztcclxuXHJcbiAgY29uc3QgcmVwbGFjZUxvbmdEYXRlRm9ybWF0VG9rZW5zID0gKGlucHV0OiBhbnkpID0+IHtcclxuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0TG9uZ0RhdGUoaW5wdXQpIHx8IGlucHV0O1xyXG4gIH07XHJcblxyXG4gIGxvY2FsRm9ybWF0dGluZ1Rva2Vucy5sYXN0SW5kZXggPSAwO1xyXG4gIHdoaWxlIChpID49IDAgJiYgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLnRlc3QoZm9ybWF0KSkge1xyXG4gICAgZm9ybWF0ID0gZm9ybWF0LnJlcGxhY2UobG9jYWxGb3JtYXR0aW5nVG9rZW5zLCByZXBsYWNlTG9uZ0RhdGVGb3JtYXRUb2tlbnMpO1xyXG4gICAgbG9jYWxGb3JtYXR0aW5nVG9rZW5zLmxhc3RJbmRleCA9IDA7XHJcbiAgICBpIC09IDE7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZm9ybWF0O1xyXG59XHJcbiJdfQ==