/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// tslint:disable:no-bitwise
// FORMATTING
import { addFormatToken } from '../format/format';
import { addRegexToken, match1, match1to3, match2, match3, matchUnsigned } from '../parse/regex';
import { MILLISECOND } from './constants';
import { toInt } from '../utils/type-checks';
import { addParseToken } from '../parse/token';
import { addUnitAlias } from './aliases';
import { addUnitPriority } from './priorities';
import { getMilliseconds } from '../utils/date-getters';
/**
 * @return {?}
 */
export function initMillisecond() {
    addFormatToken('S', null, null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 100)).toString(10);
    });
    addFormatToken(null, ['SS', 2, false], null, function (date, opts) {
        return (~~(getMilliseconds(date, opts.isUTC) / 10)).toString(10);
    });
    addFormatToken(null, ['SSS', 3, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC)).toString(10);
    });
    addFormatToken(null, ['SSSS', 4, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10).toString(10);
    });
    addFormatToken(null, ['SSSSS', 5, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100).toString(10);
    });
    addFormatToken(null, ['SSSSSS', 6, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000).toString(10);
    });
    addFormatToken(null, ['SSSSSSS', 7, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 10000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSS', 8, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 100000).toString(10);
    });
    addFormatToken(null, ['SSSSSSSSS', 9, false], null, function (date, opts) {
        return (getMilliseconds(date, opts.isUTC) * 1000000).toString(10);
    });
    // ALIASES
    addUnitAlias('millisecond', 'ms');
    // PRIORITY
    addUnitPriority('millisecond', 16);
    // PARSING
    addRegexToken('S', match1to3, match1);
    addRegexToken('SS', match1to3, match2);
    addRegexToken('SSS', match1to3, match3);
    var /** @type {?} */ token;
    for (token = 'SSSS'; token.length <= 9; token += 'S') {
        addRegexToken(token, matchUnsigned);
    }
    /**
     * @param {?} input
     * @param {?} array
     * @param {?} config
     * @return {?}
     */
    function parseMs(input, array, config) {
        array[MILLISECOND] = toInt(parseFloat("0." + input) * 1000);
        return config;
    }
    for (token = 'S'; token.length <= 9; token += 'S') {
        addParseToken(token, parseMs);
    }
    // MOMENTS
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlsbGlzZWNvbmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1bml0cy9taWxsaXNlY29uZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakcsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUvQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7QUFHeEQsTUFBTTtJQUNKLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFDNUIsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbkUsQ0FDRixDQUFDO0lBRUYsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUN6QyxVQUFTLElBQVUsRUFBRSxJQUEwQjtRQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsRSxDQUNGLENBQUM7SUFFRixjQUFjLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQzFDLFVBQVMsSUFBVSxFQUFFLElBQTBCO1FBQzdDLE1BQU0sQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ3pELENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDM0MsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQzlELENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDNUMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQy9ELENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDN0MsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hFLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDOUMsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2pFLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDL0MsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xFLENBQ0YsQ0FBQztJQUNGLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksRUFDaEQsVUFBUyxJQUFVLEVBQUUsSUFBMEI7UUFDN0MsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ25FLENBQ0YsQ0FBQzs7SUFLRixZQUFZLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUlsQyxlQUFlLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxDQUFDOztJQUluQyxhQUFhLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0QyxhQUFhLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN2QyxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV4QyxxQkFBSSxLQUFLLENBQUM7SUFDVixHQUFHLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEtBQUssSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNyRCxhQUFhLENBQUMsS0FBSyxFQUFFLGFBQWEsQ0FBQyxDQUFDO0tBQ3JDOzs7Ozs7O0lBRUQsaUJBQWlCLEtBQWEsRUFBRSxLQUFnQixFQUFFLE1BQXlCO1FBQ3pFLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLE9BQUssS0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFFNUQsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNmO0lBRUQsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUksR0FBRyxFQUFFLENBQUM7UUFDbEQsYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUMvQjs7Q0FFRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWJpdHdpc2VcclxuLy8gRk9STUFUVElOR1xyXG5cclxuaW1wb3J0IHsgYWRkRm9ybWF0VG9rZW4gfSBmcm9tICcuLi9mb3JtYXQvZm9ybWF0JztcclxuaW1wb3J0IHsgYWRkUmVnZXhUb2tlbiwgbWF0Y2gxLCBtYXRjaDF0bzMsIG1hdGNoMiwgbWF0Y2gzLCBtYXRjaFVuc2lnbmVkIH0gZnJvbSAnLi4vcGFyc2UvcmVnZXgnO1xyXG5pbXBvcnQgeyBNSUxMSVNFQ09ORCB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgdG9JbnQgfSBmcm9tICcuLi91dGlscy90eXBlLWNoZWNrcyc7XHJcbmltcG9ydCB7IGFkZFBhcnNlVG9rZW4gfSBmcm9tICcuLi9wYXJzZS90b2tlbic7XHJcbmltcG9ydCB7IERhdGVBcnJheSwgRGF0ZUZvcm1hdHRlck9wdGlvbnMsIFdlZWtQYXJzaW5nIH0gZnJvbSAnLi4vdHlwZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0QWxpYXMgfSBmcm9tICcuL2FsaWFzZXMnO1xyXG5pbXBvcnQgeyBhZGRVbml0UHJpb3JpdHkgfSBmcm9tICcuL3ByaW9yaXRpZXMnO1xyXG5pbXBvcnQgeyBEYXRlUGFyc2luZ0NvbmZpZyB9IGZyb20gJy4uL2NyZWF0ZS9wYXJzaW5nLnR5cGVzJztcclxuaW1wb3J0IHsgZ2V0TWlsbGlzZWNvbmRzIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1nZXR0ZXJzJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1pbGxpc2Vjb25kKCkge1xyXG4gIGFkZEZvcm1hdFRva2VuKCdTJywgbnVsbCwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICh+fihnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgLyAxMDApKS50b1N0cmluZygxMCk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTUycsIDIsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuICh+fihnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgLyAxMCkpLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICBhZGRGb3JtYXRUb2tlbihudWxsLCBbJ1NTUycsIDMsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykpLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTUycsIDQsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMCkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTUycsIDUsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDApLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTJywgNiwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDApLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTUycsIDcsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwMCkudG9TdHJpbmcoMTApO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgYWRkRm9ybWF0VG9rZW4obnVsbCwgWydTU1NTU1NTUycsIDgsIGZhbHNlXSwgbnVsbCxcclxuICAgIGZ1bmN0aW9uKGRhdGU6IERhdGUsIG9wdHM6IERhdGVGb3JtYXR0ZXJPcHRpb25zKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIChnZXRNaWxsaXNlY29uZHMoZGF0ZSwgb3B0cy5pc1VUQykgKiAxMDAwMDApLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG4gIGFkZEZvcm1hdFRva2VuKG51bGwsIFsnU1NTU1NTU1NTJywgOSwgZmFsc2VdLCBudWxsLFxyXG4gICAgZnVuY3Rpb24oZGF0ZTogRGF0ZSwgb3B0czogRGF0ZUZvcm1hdHRlck9wdGlvbnMpOiBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gKGdldE1pbGxpc2Vjb25kcyhkYXRlLCBvcHRzLmlzVVRDKSAqIDEwMDAwMDApLnRvU3RyaW5nKDEwKTtcclxuICAgIH1cclxuICApO1xyXG5cclxuXHJcbi8vIEFMSUFTRVNcclxuXHJcbiAgYWRkVW5pdEFsaWFzKCdtaWxsaXNlY29uZCcsICdtcycpO1xyXG5cclxuLy8gUFJJT1JJVFlcclxuXHJcbiAgYWRkVW5pdFByaW9yaXR5KCdtaWxsaXNlY29uZCcsIDE2KTtcclxuXHJcbi8vIFBBUlNJTkdcclxuXHJcbiAgYWRkUmVnZXhUb2tlbignUycsIG1hdGNoMXRvMywgbWF0Y2gxKTtcclxuICBhZGRSZWdleFRva2VuKCdTUycsIG1hdGNoMXRvMywgbWF0Y2gyKTtcclxuICBhZGRSZWdleFRva2VuKCdTU1MnLCBtYXRjaDF0bzMsIG1hdGNoMyk7XHJcblxyXG4gIGxldCB0b2tlbjtcclxuICBmb3IgKHRva2VuID0gJ1NTU1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XHJcbiAgICBhZGRSZWdleFRva2VuKHRva2VuLCBtYXRjaFVuc2lnbmVkKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHBhcnNlTXMoaW5wdXQ6IHN0cmluZywgYXJyYXk6IERhdGVBcnJheSwgY29uZmlnOiBEYXRlUGFyc2luZ0NvbmZpZyk6IERhdGVQYXJzaW5nQ29uZmlnIHtcclxuICAgIGFycmF5W01JTExJU0VDT05EXSA9IHRvSW50KHBhcnNlRmxvYXQoYDAuJHtpbnB1dH1gKSAqIDEwMDApO1xyXG5cclxuICAgIHJldHVybiBjb25maWc7XHJcbiAgfVxyXG5cclxuICBmb3IgKHRva2VuID0gJ1MnOyB0b2tlbi5sZW5ndGggPD0gOTsgdG9rZW4gKz0gJ1MnKSB7XHJcbiAgICBhZGRQYXJzZVRva2VuKHRva2VuLCBwYXJzZU1zKTtcclxuICB9XHJcbi8vIE1PTUVOVFNcclxufVxyXG4iXX0=