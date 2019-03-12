/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createInvalid, isValid } from './valid';
import { getParsingFlags } from './parsing-flags';
import { configFromStringAndFormat } from './from-string-and-format';
/**
 * @param {?} config
 * @return {?}
 */
export function configFromStringAndArray(config) {
    var /** @type {?} */ tempConfig;
    var /** @type {?} */ bestMoment;
    var /** @type {?} */ scoreToBeat;
    var /** @type {?} */ currentScore;
    if (!config._f || config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        return createInvalid(config);
    }
    var /** @type {?} */ i;
    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = Object.assign({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);
        if (!isValid(tempConfig)) {
            continue;
        }
        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;
        // or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
        getParsingFlags(tempConfig).score = currentScore;
        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }
    return Object.assign(config, bestMoment || tempConfig);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbS1zdHJpbmctYW5kLWFycmF5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiY3JlYXRlL2Zyb20tc3RyaW5nLWFuZC1hcnJheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2xELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUdyRSxNQUFNLG1DQUFtQyxNQUF5QjtJQUNoRSxxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxVQUFVLENBQUM7SUFDZixxQkFBSSxXQUFXLENBQUM7SUFDaEIscUJBQUksWUFBWSxDQUFDO0lBRWpCLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRTdDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7SUFFRCxxQkFBSSxDQUFDLENBQUM7SUFDTixHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3RDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUMzQixVQUFVLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDckM7UUFDRCxVQUFVLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLFFBQVEsQ0FBQztTQUNWOztRQUdELFlBQVksSUFBSSxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsYUFBYSxDQUFDOztRQUcxRCxZQUFZLElBQUksZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBRXJFLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBRWpELEVBQUUsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksWUFBWSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsV0FBVyxHQUFHLFlBQVksQ0FBQztZQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDO1NBQ3pCO0tBQ0Y7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJLFVBQVUsQ0FBQyxDQUFDO0NBQ3hEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGF0ZVBhcnNpbmdDb25maWcgfSBmcm9tICcuL3BhcnNpbmcudHlwZXMnO1xyXG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkLCBpc1ZhbGlkIH0gZnJvbSAnLi92YWxpZCc7XHJcbmltcG9ydCB7IGdldFBhcnNpbmdGbGFncyB9IGZyb20gJy4vcGFyc2luZy1mbGFncyc7XHJcbmltcG9ydCB7IGNvbmZpZ0Zyb21TdHJpbmdBbmRGb3JtYXQgfSBmcm9tICcuL2Zyb20tc3RyaW5nLWFuZC1mb3JtYXQnO1xyXG5cclxuLy8gZGF0ZSBmcm9tIHN0cmluZyBhbmQgYXJyYXkgb2YgZm9ybWF0IHN0cmluZ3NcclxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21TdHJpbmdBbmRBcnJheShjb25maWc6IERhdGVQYXJzaW5nQ29uZmlnKTogRGF0ZVBhcnNpbmdDb25maWcge1xyXG4gIGxldCB0ZW1wQ29uZmlnO1xyXG4gIGxldCBiZXN0TW9tZW50O1xyXG4gIGxldCBzY29yZVRvQmVhdDtcclxuICBsZXQgY3VycmVudFNjb3JlO1xyXG5cclxuICBpZiAoIWNvbmZpZy5fZiB8fCBjb25maWcuX2YubGVuZ3RoID09PSAwKSB7XHJcbiAgICBnZXRQYXJzaW5nRmxhZ3MoY29uZmlnKS5pbnZhbGlkRm9ybWF0ID0gdHJ1ZTtcclxuXHJcbiAgICByZXR1cm4gY3JlYXRlSW52YWxpZChjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGk7XHJcbiAgZm9yIChpID0gMDsgaSA8IGNvbmZpZy5fZi5sZW5ndGg7IGkrKykge1xyXG4gICAgY3VycmVudFNjb3JlID0gMDtcclxuICAgIHRlbXBDb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBjb25maWcpO1xyXG4gICAgaWYgKGNvbmZpZy5fdXNlVVRDICE9IG51bGwpIHtcclxuICAgICAgdGVtcENvbmZpZy5fdXNlVVRDID0gY29uZmlnLl91c2VVVEM7XHJcbiAgICB9XHJcbiAgICB0ZW1wQ29uZmlnLl9mID0gY29uZmlnLl9mW2ldO1xyXG4gICAgY29uZmlnRnJvbVN0cmluZ0FuZEZvcm1hdCh0ZW1wQ29uZmlnKTtcclxuXHJcbiAgICBpZiAoIWlzVmFsaWQodGVtcENvbmZpZykpIHtcclxuICAgICAgY29udGludWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgdGhlcmUgaXMgYW55IGlucHV0IHRoYXQgd2FzIG5vdCBwYXJzZWQgYWRkIGEgcGVuYWx0eSBmb3IgdGhhdCBmb3JtYXRcclxuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykuY2hhcnNMZWZ0T3ZlcjtcclxuXHJcbiAgICAvLyBvciB0b2tlbnNcclxuICAgIGN1cnJlbnRTY29yZSArPSBnZXRQYXJzaW5nRmxhZ3ModGVtcENvbmZpZykudW51c2VkVG9rZW5zLmxlbmd0aCAqIDEwO1xyXG5cclxuICAgIGdldFBhcnNpbmdGbGFncyh0ZW1wQ29uZmlnKS5zY29yZSA9IGN1cnJlbnRTY29yZTtcclxuXHJcbiAgICBpZiAoc2NvcmVUb0JlYXQgPT0gbnVsbCB8fCBjdXJyZW50U2NvcmUgPCBzY29yZVRvQmVhdCkge1xyXG4gICAgICBzY29yZVRvQmVhdCA9IGN1cnJlbnRTY29yZTtcclxuICAgICAgYmVzdE1vbWVudCA9IHRlbXBDb25maWc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmFzc2lnbihjb25maWcsIGJlc3RNb21lbnQgfHwgdGVtcENvbmZpZyk7XHJcbn1cclxuIl19