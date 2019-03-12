/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { toInt } from '../utils/type-checks';
var /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
var ɵ0 = function (mem, order) {
    mem[order] = true;
    return mem;
};
var /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
/**
 * @param {?} duration
 * @return {?}
 */
export function isDurationValid(duration) {
    var /** @type {?} */ durationKeys = Object.keys(duration);
    if (durationKeys
        .some(function (key) {
        return (key in orderingHash)
            && duration[key] === null
            || isNaN(duration[key]);
    })) {
        return false;
    }
    // for (let key in duration) {
    //   if (!(indexOf.call(ordering, key) !== -1 && (duration[key] == null || !isNaN(duration[key])))) {
    //     return false;
    //   }
    // }
    var /** @type {?} */ unitHasDecimal = false;
    for (var /** @type {?} */ i = 0; i < ordering.length; ++i) {
        if (duration[ordering[i]]) {
            // only allow non-integers for smallest unit
            if (unitHasDecimal) {
                return false;
            }
            if (duration[ordering[i]] !== toInt(duration[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }
    return true;
}
// export function isValid() {
//   return this._isValid;
// }
//
// export function createInvalid(): Duration {
//   return createDuration(NaN);
// }
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi92YWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSzdDLHFCQUFNLFFBQVEsR0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQzdGLFVBQUMsR0FBK0IsRUFBRSxLQUFLO0lBQzFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7SUFFbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNaO0FBSkQscUJBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEtBSWpDLEVBQUUsQ0FBQyxDQUFDOzs7OztBQUVQLE1BQU0sMEJBQTBCLFFBQTZCO0lBQzNELHFCQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLEVBQUUsQ0FBQyxDQUFDLFlBQVk7U0FDWCxJQUFJLENBQUMsVUFBQyxHQUFxQjtRQUMxQixNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksWUFBWSxDQUFDO2VBQ3ZCLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJO2VBQ3RCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztLQUMzQixDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFPRCxxQkFBSSxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUN6QyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUUxQixFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2Q7WUFDRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsY0FBYyxHQUFHLElBQUksQ0FBQzthQUN2QjtTQUNGO0tBQ0Y7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO0NBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0ludCB9IGZyb20gJy4uL3V0aWxzL3R5cGUtY2hlY2tzJztcclxuaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuL2NyZWF0ZSc7XHJcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IERhdGVPYmplY3QgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5jb25zdCBvcmRlcmluZzogKGtleW9mIERhdGVPYmplY3QpW10gPSBbJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RheScsICdob3VycycsICdtaW51dGVzJywgJ3NlY29uZHMnLCAnbWlsbGlzZWNvbmRzJ107XHJcbmNvbnN0IG9yZGVyaW5nSGFzaCA9IG9yZGVyaW5nLnJlZHVjZSgobWVtOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSwgb3JkZXIpID0+IHtcclxuICBtZW1bb3JkZXJdID0gdHJ1ZTtcclxuXHJcbiAgcmV0dXJuIG1lbTtcclxufSwge30pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRHVyYXRpb25WYWxpZChkdXJhdGlvbjogUGFydGlhbDxEYXRlT2JqZWN0Pik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGR1cmF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGR1cmF0aW9uKTtcclxuICBpZiAoZHVyYXRpb25LZXlzXHJcbiAgICAgIC5zb21lKChrZXk6IGtleW9mIERhdGVPYmplY3QpID0+IHtcclxuICAgICAgICByZXR1cm4gKGtleSBpbiBvcmRlcmluZ0hhc2gpXHJcbiAgICAgICAgICAmJiBkdXJhdGlvbltrZXldID09PSBudWxsXHJcbiAgICAgICAgICB8fCBpc05hTihkdXJhdGlvbltrZXldKTtcclxuICAgICAgfSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgLy8gZm9yIChsZXQga2V5IGluIGR1cmF0aW9uKSB7XHJcbiAgLy8gICBpZiAoIShpbmRleE9mLmNhbGwob3JkZXJpbmcsIGtleSkgIT09IC0xICYmIChkdXJhdGlvbltrZXldID09IG51bGwgfHwgIWlzTmFOKGR1cmF0aW9uW2tleV0pKSkpIHtcclxuICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gIC8vICAgfVxyXG4gIC8vIH1cclxuXHJcbiAgbGV0IHVuaXRIYXNEZWNpbWFsID0gZmFsc2U7XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlcmluZy5sZW5ndGg7ICsraSkge1xyXG4gICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSkge1xyXG4gICAgICAvLyBvbmx5IGFsbG93IG5vbi1pbnRlZ2VycyBmb3Igc21hbGxlc3QgdW5pdFxyXG4gICAgICBpZiAodW5pdEhhc0RlY2ltYWwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGR1cmF0aW9uW29yZGVyaW5nW2ldXSAhPT0gdG9JbnQoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSkge1xyXG4gICAgICAgIHVuaXRIYXNEZWNpbWFsID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkKCkge1xyXG4vLyAgIHJldHVybiB0aGlzLl9pc1ZhbGlkO1xyXG4vLyB9XHJcbi8vXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkKCk6IER1cmF0aW9uIHtcclxuLy8gICByZXR1cm4gY3JlYXRlRHVyYXRpb24oTmFOKTtcclxuLy8gfVxyXG4iXX0=