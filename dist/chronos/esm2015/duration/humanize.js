/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createDuration } from './create';
let /** @type {?} */ round = Math.round;
const /** @type {?} */ thresholds = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month
    M: 11 // months to year
};
/**
 * @param {?} str
 * @param {?} num
 * @param {?} withoutSuffix
 * @param {?} isFuture
 * @param {?} locale
 * @return {?}
 */
function substituteTimeAgo(str, num, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(num || 1, !!withoutSuffix, str, isFuture);
}
/**
 * @param {?} posNegDuration
 * @param {?} withoutSuffix
 * @param {?} locale
 * @return {?}
 */
export function relativeTime(posNegDuration, withoutSuffix, locale) {
    const /** @type {?} */ duration = createDuration(posNegDuration).abs();
    const /** @type {?} */ seconds = round(duration.as('s'));
    const /** @type {?} */ minutes = round(duration.as('m'));
    const /** @type {?} */ hours = round(duration.as('h'));
    const /** @type {?} */ days = round(duration.as('d'));
    const /** @type {?} */ months = round(duration.as('M'));
    const /** @type {?} */ years = round(duration.as('y'));
    const /** @type {?} */ a = seconds <= thresholds["ss"] && ['s', seconds] ||
        seconds < thresholds["s"] && ['ss', seconds] ||
        minutes <= 1 && ['m'] ||
        minutes < thresholds["m"] && ['mm', minutes] ||
        hours <= 1 && ['h'] ||
        hours < thresholds["h"] && ['hh', hours] ||
        days <= 1 && ['d'] ||
        days < thresholds["d"] && ['dd', days] ||
        months <= 1 && ['M'] ||
        months < thresholds["M"] && ['MM', months] ||
        years <= 1 && ['y'] || ['yy', years];
    const /** @type {?} */ b = [a[0], a[1], withoutSuffix, +posNegDuration > 0, locale];
    // a[2] = withoutSuffix;
    // a[3] = +posNegDuration > 0;
    // a[4] = locale;
    return substituteTimeAgo.apply(null, b);
}
/**
 * @param {?} roundingFunction
 * @return {?}
 */
export function getSetRelativeTimeRounding(roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof (roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}
/**
 * @param {?} threshold
 * @param {?} limit
 * @return {?}
 */
export function getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds["ss"] = limit - 1;
    }
    return true;
}
// export function humanize(withSuffix) {
//   if (!this.isValid()) {
//     return this.localeData().invalidDate();
//   }
//
//   const locale = this.localeData();
//   let output = relativeTime(this, !withSuffix, locale);
//
//   if (withSuffix) {
//     output = locale.pastFuture(+this, output);
//   }
//
//   return locale.postformat(output);
// }

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVtYW5pemUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2Nocm9ub3MvIiwic291cmNlcyI6WyJkdXJhdGlvbi9odW1hbml6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUkxQyxxQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztBQUN2Qix1QkFBTSxVQUFVLEdBQThCO0lBQzVDLEVBQUUsRUFBRSxFQUFFOztJQUNOLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFOztJQUNMLENBQUMsRUFBRSxFQUFFO0NBQ04sQ0FBQzs7Ozs7Ozs7O0FBR0YsMkJBQTJCLEdBQXNCLEVBQUUsR0FBVyxFQUNuQyxhQUFzQixFQUFFLFFBQWlCLEVBQ3pDLE1BQWM7SUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztDQUN0RTs7Ozs7OztBQUVELE1BQU0sdUJBQXVCLGNBQXdCLEVBQUUsYUFBc0IsRUFBRSxNQUFjO0lBQzNGLHVCQUFNLFFBQVEsR0FBRyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEQsdUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsdUJBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDeEMsdUJBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsdUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDckMsdUJBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdkMsdUJBQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFdEMsdUJBQU0sQ0FBQyxHQUNMLE9BQU8sSUFBSSxVQUFVLE1BQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUM7UUFDMUMsT0FBTyxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3JCLE9BQU8sR0FBRyxVQUFVLEtBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7UUFDekMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUNuQixLQUFLLEdBQUcsVUFBVSxLQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO1FBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsSUFBSSxHQUFHLFVBQVUsS0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztRQUNuQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLE1BQU0sR0FBRyxVQUFVLEtBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUM7UUFDdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRXZDLHVCQUFNLENBQUMsR0FDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsY0FBYyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztJQUszRCxNQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztDQUN6Qzs7Ozs7QUFHRCxNQUFNLHFDQUFxQyxnQkFBcUI7SUFDOUQsRUFBRSxDQUFDLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFDRCxFQUFFLENBQUMsQ0FBQyxPQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzVDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQztRQUV6QixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0NBQ2Q7Ozs7OztBQUdELE1BQU0sc0NBQXNDLFNBQWlCLEVBQUUsS0FBYTtJQUMxRSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFDRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzlCO0lBQ0QsVUFBVSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUM5QixFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0QixVQUFVLFNBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztLQUMzQjtJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOmN5Y2xvbWF0aWMtY29tcGxleGl0eVxyXG5pbXBvcnQgeyBjcmVhdGVEdXJhdGlvbiB9IGZyb20gJy4vY3JlYXRlJztcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vbG9jYWxlL2xvY2FsZS5jbGFzcyc7XHJcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XHJcblxyXG5sZXQgcm91bmQgPSBNYXRoLnJvdW5kO1xyXG5jb25zdCB0aHJlc2hvbGRzOiB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0ge1xyXG4gIHNzOiA0NCwgICAgICAgICAvLyBhIGZldyBzZWNvbmRzIHRvIHNlY29uZHNcclxuICBzOiA0NSwgICAgICAgICAvLyBzZWNvbmRzIHRvIG1pbnV0ZVxyXG4gIG06IDQ1LCAgICAgICAgIC8vIG1pbnV0ZXMgdG8gaG91clxyXG4gIGg6IDIyLCAgICAgICAgIC8vIGhvdXJzIHRvIGRheVxyXG4gIGQ6IDI2LCAgICAgICAgIC8vIGRheXMgdG8gbW9udGhcclxuICBNOiAxMSAgICAgICAgICAvLyBtb250aHMgdG8geWVhclxyXG59O1xyXG5cclxuLy8gaGVscGVyIGZ1bmN0aW9uIGZvciBtb21lbnQuZm4uZnJvbSwgbW9tZW50LmZuLmZyb21Ob3csIGFuZCBtb21lbnQuZHVyYXRpb24uZm4uaHVtYW5pemVcclxuZnVuY3Rpb24gc3Vic3RpdHV0ZVRpbWVBZ28oc3RyOiAnZnV0dXJlJyB8ICdwYXN0JywgbnVtOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhvdXRTdWZmaXg6IGJvb2xlYW4sIGlzRnV0dXJlOiBib29sZWFuLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGxvY2FsZS5yZWxhdGl2ZVRpbWUobnVtIHx8IDEsICEhd2l0aG91dFN1ZmZpeCwgc3RyLCBpc0Z1dHVyZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUocG9zTmVnRHVyYXRpb246IER1cmF0aW9uLCB3aXRob3V0U3VmZml4OiBib29sZWFuLCBsb2NhbGU6IExvY2FsZSk6IHN0cmluZyB7XHJcbiAgY29uc3QgZHVyYXRpb24gPSBjcmVhdGVEdXJhdGlvbihwb3NOZWdEdXJhdGlvbikuYWJzKCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdzJykpO1xyXG4gIGNvbnN0IG1pbnV0ZXMgPSByb3VuZChkdXJhdGlvbi5hcygnbScpKTtcclxuICBjb25zdCBob3VycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCdoJykpO1xyXG4gIGNvbnN0IGRheXMgPSByb3VuZChkdXJhdGlvbi5hcygnZCcpKTtcclxuICBjb25zdCBtb250aHMgPSByb3VuZChkdXJhdGlvbi5hcygnTScpKTtcclxuICBjb25zdCB5ZWFycyA9IHJvdW5kKGR1cmF0aW9uLmFzKCd5JykpO1xyXG5cclxuICBjb25zdCBhOiBbc3RyaW5nXSB8IFtzdHJpbmcsIG51bWJlcl0gPVxyXG4gICAgc2Vjb25kcyA8PSB0aHJlc2hvbGRzLnNzICYmIFsncycsIHNlY29uZHNdIHx8XHJcbiAgICBzZWNvbmRzIDwgdGhyZXNob2xkcy5zICYmIFsnc3MnLCBzZWNvbmRzXSB8fFxyXG4gICAgbWludXRlcyA8PSAxICYmIFsnbSddIHx8XHJcbiAgICBtaW51dGVzIDwgdGhyZXNob2xkcy5tICYmIFsnbW0nLCBtaW51dGVzXSB8fFxyXG4gICAgaG91cnMgPD0gMSAmJiBbJ2gnXSB8fFxyXG4gICAgaG91cnMgPCB0aHJlc2hvbGRzLmggJiYgWydoaCcsIGhvdXJzXSB8fFxyXG4gICAgZGF5cyA8PSAxICYmIFsnZCddIHx8XHJcbiAgICBkYXlzIDwgdGhyZXNob2xkcy5kICYmIFsnZGQnLCBkYXlzXSB8fFxyXG4gICAgbW9udGhzIDw9IDEgJiYgWydNJ10gfHxcclxuICAgIG1vbnRocyA8IHRocmVzaG9sZHMuTSAmJiBbJ01NJywgbW9udGhzXSB8fFxyXG4gICAgeWVhcnMgPD0gMSAmJiBbJ3knXSB8fCBbJ3l5JywgeWVhcnNdO1xyXG5cclxuICBjb25zdCBiOiBbc3RyaW5nLCBudW1iZXIgfCBzdHJpbmcsIGJvb2xlYW4sIGJvb2xlYW4sIExvY2FsZV0gPVxyXG4gICAgW2FbMF0sIGFbMV0sIHdpdGhvdXRTdWZmaXgsICtwb3NOZWdEdXJhdGlvbiA+IDAsIGxvY2FsZV07XHJcbiAgLy8gYVsyXSA9IHdpdGhvdXRTdWZmaXg7XHJcbiAgLy8gYVszXSA9ICtwb3NOZWdEdXJhdGlvbiA+IDA7XHJcbiAgLy8gYVs0XSA9IGxvY2FsZTtcclxuXHJcbiAgcmV0dXJuIHN1YnN0aXR1dGVUaW1lQWdvLmFwcGx5KG51bGwsIGIpO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IHRoZSByb3VuZGluZyBmdW5jdGlvbiBmb3IgcmVsYXRpdmUgdGltZSBzdHJpbmdzXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXRSZWxhdGl2ZVRpbWVSb3VuZGluZyhyb3VuZGluZ0Z1bmN0aW9uOiBhbnkpOiBib29sZWFuIHwgRnVuY3Rpb24ge1xyXG4gIGlmIChyb3VuZGluZ0Z1bmN0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgIHJldHVybiByb3VuZDtcclxuICB9XHJcbiAgaWYgKHR5cGVvZihyb3VuZGluZ0Z1bmN0aW9uKSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgcm91bmQgPSByb3VuZGluZ0Z1bmN0aW9uO1xyXG5cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGFsbG93cyB5b3UgdG8gc2V0IGEgdGhyZXNob2xkIGZvciByZWxhdGl2ZSB0aW1lIHN0cmluZ3NcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldFJlbGF0aXZlVGltZVRocmVzaG9sZCh0aHJlc2hvbGQ6IHN0cmluZywgbGltaXQ6IG51bWJlcik6IGJvb2xlYW4gfCBudW1iZXIge1xyXG4gIGlmICh0aHJlc2hvbGRzW3RocmVzaG9sZF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAobGltaXQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgcmV0dXJuIHRocmVzaG9sZHNbdGhyZXNob2xkXTtcclxuICB9XHJcbiAgdGhyZXNob2xkc1t0aHJlc2hvbGRdID0gbGltaXQ7XHJcbiAgaWYgKHRocmVzaG9sZCA9PT0gJ3MnKSB7XHJcbiAgICB0aHJlc2hvbGRzLnNzID0gbGltaXQgLSAxO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBodW1hbml6ZSh3aXRoU3VmZml4KSB7XHJcbi8vICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xyXG4vLyAgICAgcmV0dXJuIHRoaXMubG9jYWxlRGF0YSgpLmludmFsaWREYXRlKCk7XHJcbi8vICAgfVxyXG4vL1xyXG4vLyAgIGNvbnN0IGxvY2FsZSA9IHRoaXMubG9jYWxlRGF0YSgpO1xyXG4vLyAgIGxldCBvdXRwdXQgPSByZWxhdGl2ZVRpbWUodGhpcywgIXdpdGhTdWZmaXgsIGxvY2FsZSk7XHJcbi8vXHJcbi8vICAgaWYgKHdpdGhTdWZmaXgpIHtcclxuLy8gICAgIG91dHB1dCA9IGxvY2FsZS5wYXN0RnV0dXJlKCt0aGlzLCBvdXRwdXQpO1xyXG4vLyAgIH1cclxuLy9cclxuLy8gICByZXR1cm4gbG9jYWxlLnBvc3Rmb3JtYXQob3V0cHV0KTtcclxuLy8gfVxyXG4iXX0=