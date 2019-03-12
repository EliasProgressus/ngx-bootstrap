/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { toInt } from './type-checks';
/**
 * @template T
 * @param {?} array1
 * @param {?} array2
 * @param {?} dontConvert
 * @return {?}
 */
export function compareArrays(array1, array2, dontConvert) {
    var /** @type {?} */ len = Math.min(array1.length, array2.length);
    var /** @type {?} */ lengthDiff = Math.abs(array1.length - array2.length);
    var /** @type {?} */ diffs = 0;
    var /** @type {?} */ i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i])
            || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFyZS1hcnJheXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJ1dGlscy9jb21wYXJlLWFycmF5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7QUFFdEMsTUFBTSx3QkFBMkIsTUFBVyxFQUFFLE1BQVcsRUFBRSxXQUFvQjtJQUM3RSxxQkFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuRCxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzRCxxQkFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0lBQ2QscUJBQUksQ0FBQyxDQUFDO0lBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztlQUN2QyxDQUFDLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0QsS0FBSyxFQUFFLENBQUM7U0FDVDtLQUNGO0lBRUQsTUFBTSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7Q0FDM0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wYXJlIHR3byBhcnJheXMsIHJldHVybiB0aGUgbnVtYmVyIG9mIGRpZmZlcmVuY2VzXHJcbmltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi90eXBlLWNoZWNrcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFyZUFycmF5czxUPihhcnJheTE6IFRbXSwgYXJyYXkyOiBUW10sIGRvbnRDb252ZXJ0OiBib29sZWFuKSB7XHJcbiAgY29uc3QgbGVuID0gTWF0aC5taW4oYXJyYXkxLmxlbmd0aCwgYXJyYXkyLmxlbmd0aCk7XHJcbiAgY29uc3QgbGVuZ3RoRGlmZiA9IE1hdGguYWJzKGFycmF5MS5sZW5ndGggLSBhcnJheTIubGVuZ3RoKTtcclxuICBsZXQgZGlmZnMgPSAwO1xyXG4gIGxldCBpO1xyXG4gIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xyXG4gICAgaWYgKChkb250Q29udmVydCAmJiBhcnJheTFbaV0gIT09IGFycmF5MltpXSlcclxuICAgICAgfHwgKCFkb250Q29udmVydCAmJiB0b0ludChhcnJheTFbaV0pICE9PSB0b0ludChhcnJheTJbaV0pKSkge1xyXG4gICAgICBkaWZmcysrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpZmZzICsgbGVuZ3RoRGlmZjtcclxufVxyXG4iXX0=