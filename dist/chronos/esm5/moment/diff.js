/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { cloneWithOffset, getDateOffset, getUTCOffset } from '../units/offset';
import { absFloor } from '../utils';
import { isDateValid, isNumber } from '../utils/type-checks';
import { getFullYear, getMonth } from '../utils/date-getters';
import { add } from './add-subtract';
import { cloneDate } from '../create/clone';
/**
 * @param {?} date
 * @param {?} input
 * @param {?} units
 * @param {?} asFloat
 * @param {?=} config
 * @return {?}
 */
export function diff(date, input, units, asFloat, config) {
    if (config === void 0) { config = {}; }
    if (!isDateValid(date)) {
        return NaN;
    }
    var /** @type {?} */ that = cloneWithOffset(input, date, config);
    if (!isDateValid(that)) {
        return NaN;
    }
    var /** @type {?} */ zoneOffset = (getDateOffset(input) - getDateOffset(date)) * 6e4;
    var /** @type {?} */ zoneDelta = isNumber(config._zoneDelta)
        ? config._zoneDelta * 6e4
        : (getUTCOffset(input, config) - getUTCOffset(date, config)) * 6e4;
    var /** @type {?} */ output;
    switch (units) {
        case 'year':
            output = monthDiff(date, that) / 12;
            break;
        case 'month':
            output = monthDiff(date, that);
            break;
        case 'quarter':
            output = monthDiff(date, that) / 3;
            break;
        case 'seconds':
            output = (date.valueOf() - that.valueOf()) / 1e3;
            break; // 1000
        case 'minutes':
            output = (date.valueOf() - that.valueOf()) / 6e4;
            break; // 1000 * 60
        case 'hours':
            output = (date.valueOf() - that.valueOf()) / 36e5;
            break; // 1000 * 60 * 60
        case 'day':
            output = (date.valueOf() - that.valueOf() - (zoneDelta === 0 ? zoneOffset : zoneDelta)) / 864e5;
            break; // 1000 * 60 * 60 * 24, negate dst
        case 'week':
            output = (date.valueOf() - that.valueOf() - zoneDelta) / 6048e5;
            break; // 1000 * 60 * 60 * 24 * 7, negate dst
        default:
            output = date.valueOf() - that.valueOf();
    }
    return asFloat ? output : absFloor(output);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function monthDiff(a, b) {
    // difference in months
    var /** @type {?} */ wholeMonthDiff = ((getFullYear(b) - getFullYear(a)) * 12) + (getMonth(b) - getMonth(a));
    // b is in (anchor - 1 month, anchor + 1 month)
    var /** @type {?} */ anchor = add(cloneDate(a), wholeMonthDiff, 'month');
    var /** @type {?} */ anchor2;
    var /** @type {?} */ adjust;
    if (b.valueOf() - anchor.valueOf() < 0) {
        anchor2 = add(cloneDate(a), wholeMonthDiff - 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor.valueOf() - anchor2.valueOf());
    }
    else {
        anchor2 = add(cloneDate(a), wholeMonthDiff + 1, 'month');
        // linear across the month
        adjust = (b.valueOf() - anchor.valueOf()) / (anchor2.valueOf() - anchor.valueOf());
    }
    // check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvY2hyb25vcy8iLCJzb3VyY2VzIjpbIm1vbWVudC9kaWZmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7QUFFNUMsTUFBTSxlQUFlLElBQVUsRUFBRSxLQUFXLEVBQ3ZCLEtBQWlCLEVBQUUsT0FBZ0IsRUFDbkMsTUFBOEI7SUFBOUIsdUJBQUEsRUFBQSxXQUE4QjtJQUVqRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsTUFBTSxDQUFDLEdBQUcsQ0FBQztLQUNaO0lBRUQscUJBQU0sSUFBSSxHQUFHLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRWxELEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixNQUFNLENBQUMsR0FBRyxDQUFDO0tBQ1o7SUFFRCxxQkFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ3RFLHFCQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxD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Q0FBQzs7UUFFekQsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0tBQ3BGO0lBQUMsSUFBSSxDQUFDLENBQUM7UUFDTixPQUFPLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEdBQUcsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDOztRQUV6RCxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7S0FDcEY7O0lBR0QsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ3hDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xvbmVXaXRoT2Zmc2V0LCBnZXREYXRlT2Zmc2V0LCBnZXRVVENPZmZzZXQgfSBmcm9tICcuLi91bml0cy9vZmZzZXQnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgYWJzRmxvb3IgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGlzRGF0ZVZhbGlkLCBpc051bWJlciB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgZ2V0RnVsbFllYXIsIGdldE1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkIH0gZnJvbSAnLi9hZGQtc3VidHJhY3QnO1xyXG5pbXBvcnQgeyBjbG9uZURhdGUgfSBmcm9tICcuLi9jcmVhdGUvY2xvbmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpZmYoZGF0ZTogRGF0ZSwgaW5wdXQ6IERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgIHVuaXRzOiBVbml0T2ZUaW1lLCBhc0Zsb2F0OiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICBjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnID0ge31cclxuICAgICAgICAgICAgICAgICAgICAgKTogbnVtYmVyIHtcclxuICBpZiAoIWlzRGF0ZVZhbGlkKGRhdGUpKSB7XHJcbiAgICByZXR1cm4gTmFOO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGhhdCA9IGNsb25lV2l0aE9mZnNldChpbnB1dCwgZGF0ZSwgY29uZmlnKTtcclxuXHJcbiAgaWYgKCFpc0RhdGVWYWxpZCh0aGF0KSkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIGNvbnN0IHpvbmVPZmZzZXQgPSAoZ2V0RGF0ZU9mZnNldChpbnB1dCkgLSBnZXREYXRlT2Zmc2V0KGRhdGUpKSAqIDZlNDtcclxuICBjb25zdCB6b25lRGVsdGEgPSBpc051bWJlcihjb25maWcuX3pvbmVEZWx0YSlcclxuICAgID8gY29uZmlnLl96b25lRGVsdGEgKiA2ZTRcclxuICAgIDogKGdldFVUQ09mZnNldChpbnB1dCwgY29uZmlnKSAtIGdldFVUQ09mZnNldChkYXRlLCBjb25maWcpKSAqIDZlNDtcclxuXHJcbiAgbGV0IG91dHB1dDtcclxuICBzd2l0Y2ggKHVuaXRzKSB7XHJcbiAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgb3V0cHV0ID0gbW9udGhEaWZmKGRhdGUsIHRoYXQpIC8gMTI7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICBvdXRwdXQgPSBtb250aERpZmYoZGF0ZSwgdGhhdCk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAncXVhcnRlcic6XHJcbiAgICAgIG91dHB1dCA9IG1vbnRoRGlmZihkYXRlLCB0aGF0KSAvIDM7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgY2FzZSAnc2Vjb25kcyc6XHJcbiAgICAgIG91dHB1dCA9IChkYXRlLnZhbHVlT2YoKSAtIHRoYXQudmFsdWVPZigpKSAvIDFlMztcclxuICAgICAgYnJlYWs7IC8vIDEwMDBcclxuICAgIGNhc2UgJ21pbnV0ZXMnOlxyXG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSkgLyA2ZTQ7XHJcbiAgICAgIGJyZWFrOyAvLyAxMDAwICogNjBcclxuICAgIGNhc2UgJ2hvdXJzJzpcclxuICAgICAgb3V0cHV0ID0gKGRhdGUudmFsdWVPZigpIC0gdGhhdC52YWx1ZU9mKCkpIC8gMzZlNTtcclxuICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwXHJcbiAgICBjYXNlICdkYXknOlxyXG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSAtICh6b25lRGVsdGEgPT09IDAgPyB6b25lT2Zmc2V0IDogem9uZURlbHRhKSkgLyA4NjRlNTtcclxuICAgICAgYnJlYWs7IC8vIDEwMDAgKiA2MCAqIDYwICogMjQsIG5lZ2F0ZSBkc3RcclxuICAgIGNhc2UgJ3dlZWsnOlxyXG4gICAgICBvdXRwdXQgPSAoZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKSAtIHpvbmVEZWx0YSkgLyA2MDQ4ZTU7XHJcbiAgICAgIGJyZWFrOyAvLyAxMDAwICogNjAgKiA2MCAqIDI0ICogNywgbmVnYXRlIGRzdFxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgb3V0cHV0ID0gZGF0ZS52YWx1ZU9mKCkgLSB0aGF0LnZhbHVlT2YoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBhc0Zsb2F0ID8gb3V0cHV0IDogYWJzRmxvb3Iob3V0cHV0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9udGhEaWZmKGE6IERhdGUsIGI6IERhdGUpOiBudW1iZXIge1xyXG4gIC8vIGRpZmZlcmVuY2UgaW4gbW9udGhzXHJcbiAgY29uc3Qgd2hvbGVNb250aERpZmYgPSAoKGdldEZ1bGxZZWFyKGIpIC0gZ2V0RnVsbFllYXIoYSkpICogMTIpICsgKGdldE1vbnRoKGIpIC0gZ2V0TW9udGgoYSkpO1xyXG4vLyBiIGlzIGluIChhbmNob3IgLSAxIG1vbnRoLCBhbmNob3IgKyAxIG1vbnRoKVxyXG4gIGNvbnN0IGFuY2hvciA9IGFkZChjbG9uZURhdGUoYSksIHdob2xlTW9udGhEaWZmLCAnbW9udGgnKTtcclxuICBsZXQgYW5jaG9yMjtcclxuICBsZXQgYWRqdXN0O1xyXG5cclxuXHJcbiAgaWYgKGIudmFsdWVPZigpIC0gYW5jaG9yLnZhbHVlT2YoKSA8IDApIHtcclxuICAgIGFuY2hvcjIgPSBhZGQoY2xvbmVEYXRlKGEpLCB3aG9sZU1vbnRoRGlmZiAtIDEsICdtb250aCcpO1xyXG4gICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcclxuICAgIGFkanVzdCA9IChiLnZhbHVlT2YoKSAtIGFuY2hvci52YWx1ZU9mKCkpIC8gKGFuY2hvci52YWx1ZU9mKCkgLSBhbmNob3IyLnZhbHVlT2YoKSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGFuY2hvcjIgPSBhZGQoY2xvbmVEYXRlKGEpLCB3aG9sZU1vbnRoRGlmZiArIDEsICdtb250aCcpO1xyXG4gICAgLy8gbGluZWFyIGFjcm9zcyB0aGUgbW9udGhcclxuICAgIGFkanVzdCA9IChiLnZhbHVlT2YoKSAtIGFuY2hvci52YWx1ZU9mKCkpIC8gKGFuY2hvcjIudmFsdWVPZigpIC0gYW5jaG9yLnZhbHVlT2YoKSk7XHJcbiAgfVxyXG5cclxuICAvLyBjaGVjayBmb3IgbmVnYXRpdmUgemVybywgcmV0dXJuIHplcm8gaWYgbmVnYXRpdmUgemVyb1xyXG4gIHJldHVybiAtKHdob2xlTW9udGhEaWZmICsgYWRqdXN0KSB8fCAwO1xyXG59XHJcbiJdfQ==