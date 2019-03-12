/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { addFormatToken } from '../format/format';
import { unix } from '../utils/date-getters';
import { addRegexToken, matchSigned, matchTimestamp } from '../parse/regex';
import { addParseToken } from '../parse/token';
import { toInt } from '../utils/type-checks';
/**
 * @return {?}
 */
export function initTimestamp() {
    // FORMATTING
    addFormatToken('X', null, null, function (date) {
        return unix(date)
            .toString(10);
    });
    addFormatToken('x', null, null, function (date) {
        return date.valueOf()
            .toString(10);
    });
    // PARSING
    addRegexToken('x', matchSigned);
    addRegexToken('X', matchTimestamp);
    addParseToken('X', function (input, array, config) {
        config._d = new Date(parseFloat(input) * 1000);
        return config;
    });
    addParseToken('x', function (input, array, config) {
        config._d = new Date(toInt(input));
        return config;
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0YW1wLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidW5pdHMvdGltZXN0YW1wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdDLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLN0MsTUFBTTs7SUFHSixjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBUyxJQUFVO1FBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQUMsQ0FBQztJQUNILGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFTLElBQVU7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pCLENBQUMsQ0FBQzs7SUFJSCxhQUFhLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFFbkMsYUFBYSxDQUFDLEdBQUcsRUFBRSxVQUFTLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1FBQ3BGLE1BQU0sQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBRS9DLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZixDQUFDLENBQUM7SUFDSCxhQUFhLENBQUMsR0FBRyxFQUFFLFVBQVMsS0FBYSxFQUFFLEtBQWdCLEVBQUUsTUFBeUI7UUFDcEYsTUFBTSxDQUFDLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUVuQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2YsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhZGRGb3JtYXRUb2tlbiB9IGZyb20gJy4uL2Zvcm1hdC9mb3JtYXQnO1xyXG5pbXBvcnQgeyB1bml4IH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2hTaWduZWQsIG1hdGNoVGltZXN0YW1wIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBhZGRQYXJzZVRva2VufSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBEYXRlQXJyYXkgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IERhdGVQYXJzaW5nQ29uZmlnIH0gZnJvbSAnLi4vY3JlYXRlL3BhcnNpbmcudHlwZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0VGltZXN0YW1wKCkge1xyXG4vLyBGT1JNQVRUSU5HXHJcblxyXG4gIGFkZEZvcm1hdFRva2VuKCdYJywgbnVsbCwgbnVsbCwgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdW5peChkYXRlKVxyXG4gICAgICAudG9TdHJpbmcoMTApO1xyXG4gIH0pO1xyXG4gIGFkZEZvcm1hdFRva2VuKCd4JywgbnVsbCwgbnVsbCwgZnVuY3Rpb24oZGF0ZTogRGF0ZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGF0ZS52YWx1ZU9mKClcclxuICAgICAgLnRvU3RyaW5nKDEwKTtcclxuICB9KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbigneCcsIG1hdGNoU2lnbmVkKTtcclxuICBhZGRSZWdleFRva2VuKCdYJywgbWF0Y2hUaW1lc3RhbXApO1xyXG5cclxuICBhZGRQYXJzZVRva2VuKCdYJywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHBhcnNlRmxvYXQoaW5wdXQpICogMTAwMCk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxuICBhZGRQYXJzZVRva2VuKCd4JywgZnVuY3Rpb24oaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGNvbmZpZy5fZCA9IG5ldyBEYXRlKHRvSW50KGlucHV0KSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbmZpZztcclxuICB9KTtcclxufVxyXG4iXX0=