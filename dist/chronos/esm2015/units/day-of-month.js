/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { getDate } from '../utils/date-getters';
import { addRegexToken, match1to2, match2 } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { DATE } from './constants';
import { toInt } from '../utils/type-checks';
import { addUnitAlias } from './aliases';
import { addUnitPriority } from './priorities';
/**
 * @return {?}
 */
export function initDayOfMonth() {
    // FORMATTING
    addFormatToken('D', ['DD', 2, false], 'Do', function (date, opts) {
        return getDate(date, opts.isUTC)
            .toString(10);
    });
    // ALIASES
    addUnitAlias('date', 'D');
    // PRIOROITY
    addUnitPriority('date', 9);
    // PARSING
    addRegexToken('D', match1to2);
    addRegexToken('DD', match1to2, match2);
    addRegexToken('Do', function (isStrict, locale) {
        return locale._dayOfMonthOrdinalParse || locale._ordinalParse;
    });
    addParseToken(['D', 'DD'], DATE);
    addParseToken('Do', function (input, array, config) {
        array[DATE] = toInt(input.match(match1to2)[0]);
        return config;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW9mLW1vbnRoLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvZGF5LW9mLW1vbnRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2hELE9BQU8sRUFBRSxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxjQUFjLENBQUM7Ozs7QUFJL0MsTUFBTTs7SUFHSixjQUFjLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQ3hDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDN0IsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQ0YsQ0FBQzs7SUFJRixZQUFZLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztJQUcxQixlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDOztJQUkzQixhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLGFBQWEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsVUFBUyxRQUFRLEVBQUUsTUFBTTtRQUMzQyxNQUFNLENBQUMsTUFBTSxDQUFDLHVCQUF1QixJQUFJLE1BQU0sQ0FBQyxhQUFhLENBQUM7S0FDL0QsQ0FBQyxDQUFDO0lBRUgsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pDLGFBQWEsQ0FDWCxJQUFJLEVBQ0osVUFBUyxLQUFhLEVBQUUsS0FBZ0IsRUFBRSxNQUF5QjtRQUNqRSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2YsQ0FDRixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyBnZXREYXRlIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxdG8yLCBtYXRjaDIgfSBmcm9tICcuLi9wYXJzZS9yZWdleCc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IERBVEUgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXksIERhdGVGb3JtYXR0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERheU9mTW9udGgoKSB7XHJcbi8vIEZPUk1BVFRJTkdcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4oJ0QnLCBbJ0REJywgMiwgZmFsc2VdLCAnRG8nLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gZ2V0RGF0ZShkYXRlLCBvcHRzLmlzVVRDKVxyXG4gICAgICAgIC50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbi8vIEFMSUFTRVNcclxuXHJcbiAgYWRkVW5pdEFsaWFzKCdkYXRlJywgJ0QnKTtcclxuXHJcbi8vIFBSSU9ST0lUWVxyXG4gIGFkZFVuaXRQcmlvcml0eSgnZGF0ZScsIDkpO1xyXG5cclxuLy8gUEFSU0lOR1xyXG5cclxuICBhZGRSZWdleFRva2VuKCdEJywgbWF0Y2gxdG8yKTtcclxuICBhZGRSZWdleFRva2VuKCdERCcsIG1hdGNoMXRvMiwgbWF0Y2gyKTtcclxuICBhZGRSZWdleFRva2VuKCdEbycsIGZ1bmN0aW9uKGlzU3RyaWN0LCBsb2NhbGUpIHtcclxuICAgIHJldHVybiBsb2NhbGUuX2RheU9mTW9udGhPcmRpbmFsUGFyc2UgfHwgbG9jYWxlLl9vcmRpbmFsUGFyc2U7XHJcbiAgfSk7XHJcblxyXG4gIGFkZFBhcnNlVG9rZW4oWydEJywgJ0REJ10sIERBVEUpO1xyXG4gIGFkZFBhcnNlVG9rZW4oXHJcbiAgICAnRG8nLFxyXG4gICAgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgICAgYXJyYXlbREFURV0gPSB0b0ludChpbnB1dC5tYXRjaChtYXRjaDF0bzIpWzBdKTtcclxuXHJcbiAgICAgIHJldHVybiBjb25maWc7XHJcbiAgICB9XHJcbiAgKTtcclxufVxyXG4iXX0=