/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { toInt } from '../utils/type-checks';
const /** @type {?} */ ordering = ['year', 'quarter', 'month', 'week', 'day', 'hours', 'minutes', 'seconds', 'milliseconds'];
const ɵ0 = (mem, order) => {
    mem[order] = true;
    return mem;
};
const /** @type {?} */ orderingHash = ordering.reduce(ɵ0, {});
/**
 * @param {?} duration
 * @return {?}
 */
export function isDurationValid(duration) {
    const /** @type {?} */ durationKeys = Object.keys(duration);
    if (durationKeys
        .some((key) => {
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
    let /** @type {?} */ unitHasDecimal = false;
    for (let /** @type {?} */ i = 0; i < ordering.length; ++i) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi92YWxpZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBSzdDLHVCQUFNLFFBQVEsR0FBeUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1dBQzdGLENBQUMsR0FBK0IsRUFBRSxLQUFLLEVBQUUsRUFBRTtJQUM5RSxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO0lBRWxCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDWjtBQUpELHVCQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsTUFBTSxLQUlqQyxFQUFFLENBQUMsQ0FBQzs7Ozs7QUFFUCxNQUFNLDBCQUEwQixRQUE2QjtJQUMzRCx1QkFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzQyxFQUFFLENBQUMsQ0FBQyxZQUFZO1NBQ1gsSUFBSSxDQUFDLENBQUMsR0FBcUIsRUFBRSxFQUFFO1FBQzlCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxZQUFZLENBQUM7ZUFDdkIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUk7ZUFDdEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7OztJQU9ELHFCQUFJLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDM0IsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRTFCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDZDtZQUNELEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxjQUFjLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1NBQ0Y7S0FDRjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvSW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZS1jaGVja3MnO1xyXG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcclxuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tICcuL2NvbnN0cnVjdG9yJztcclxuaW1wb3J0IHsgRGF0ZU9iamVjdCB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmNvbnN0IG9yZGVyaW5nOiAoa2V5b2YgRGF0ZU9iamVjdClbXSA9IFsneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF5JywgJ2hvdXJzJywgJ21pbnV0ZXMnLCAnc2Vjb25kcycsICdtaWxsaXNlY29uZHMnXTtcclxuY29uc3Qgb3JkZXJpbmdIYXNoID0gb3JkZXJpbmcucmVkdWNlKChtZW06IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9LCBvcmRlcikgPT4ge1xyXG4gIG1lbVtvcmRlcl0gPSB0cnVlO1xyXG5cclxuICByZXR1cm4gbWVtO1xyXG59LCB7fSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNEdXJhdGlvblZhbGlkKGR1cmF0aW9uOiBQYXJ0aWFsPERhdGVPYmplY3Q+KTogYm9vbGVhbiB7XHJcbiAgY29uc3QgZHVyYXRpb25LZXlzID0gT2JqZWN0LmtleXMoZHVyYXRpb24pO1xyXG4gIGlmIChkdXJhdGlvbktleXNcclxuICAgICAgLnNvbWUoKGtleToga2V5b2YgRGF0ZU9iamVjdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoa2V5IGluIG9yZGVyaW5nSGFzaClcclxuICAgICAgICAgICYmIGR1cmF0aW9uW2tleV0gPT09IG51bGxcclxuICAgICAgICAgIHx8IGlzTmFOKGR1cmF0aW9uW2tleV0pO1xyXG4gICAgICB9KSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICAvLyBmb3IgKGxldCBrZXkgaW4gZHVyYXRpb24pIHtcclxuICAvLyAgIGlmICghKGluZGV4T2YuY2FsbChvcmRlcmluZywga2V5KSAhPT0gLTEgJiYgKGR1cmF0aW9uW2tleV0gPT0gbnVsbCB8fCAhaXNOYU4oZHVyYXRpb25ba2V5XSkpKSkge1xyXG4gIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG5cclxuICBsZXQgdW5pdEhhc0RlY2ltYWwgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9yZGVyaW5nLmxlbmd0aDsgKytpKSB7XHJcbiAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dKSB7XHJcbiAgICAgIC8vIG9ubHkgYWxsb3cgbm9uLWludGVnZXJzIGZvciBzbWFsbGVzdCB1bml0XHJcbiAgICAgIGlmICh1bml0SGFzRGVjaW1hbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoZHVyYXRpb25bb3JkZXJpbmdbaV1dICE9PSB0b0ludChkdXJhdGlvbltvcmRlcmluZ1tpXV0pKSB7XHJcbiAgICAgICAgdW5pdEhhc0RlY2ltYWwgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWQoKSB7XHJcbi8vICAgcmV0dXJuIHRoaXMuX2lzVmFsaWQ7XHJcbi8vIH1cclxuLy9cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUludmFsaWQoKTogRHVyYXRpb24ge1xyXG4vLyAgIHJldHVybiBjcmVhdGVEdXJhdGlvbihOYU4pO1xyXG4vLyB9XHJcbiJdfQ==