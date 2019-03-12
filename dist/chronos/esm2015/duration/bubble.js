/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { absFloor } from '../utils';
import { absCeil } from '../utils/abs-ceil';
/**
 * @param {?} dur
 * @return {?}
 */
export function bubble(dur) {
    let /** @type {?} */ milliseconds = dur._milliseconds;
    let /** @type {?} */ days = dur._days;
    let /** @type {?} */ months = dur._months;
    const /** @type {?} */ data = dur._data;
    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
        (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }
    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;
    const /** @type {?} */ seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    const /** @type {?} */ minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    const /** @type {?} */ hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    // convert days to months
    const /** @type {?} */ monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    // 12 months -> 1 year
    const /** @type {?} */ years = absFloor(months / 12);
    months %= 12;
    data.day = days;
    data.month = months;
    data.year = years;
    return dur;
}
/**
 * @param {?} day
 * @return {?}
 */
export function daysToMonths(day) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return day * 4800 / 146097;
}
/**
 * @param {?} month
 * @return {?}
 */
export function monthsToDays(month) {
    // the reverse of daysToMonths
    return month * 146097 / 4800;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnViYmxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsiZHVyYXRpb24vYnViYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFNUMsTUFBTSxpQkFBaUIsR0FBYTtJQUNsQyxxQkFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUNyQyxxQkFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztJQUNyQixxQkFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztJQUN6Qix1QkFBTSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQzs7O0lBSXZCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRCxZQUFZLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDN0QsSUFBSSxHQUFHLENBQUMsQ0FBQztRQUNULE1BQU0sR0FBRyxDQUFDLENBQUM7S0FDWjs7O0lBSUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBRXhDLHVCQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDO0lBQzlDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUU1Qix1QkFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFFNUIsdUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBRXhCLElBQUksSUFBSSxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztJQUc3Qix1QkFBTSxjQUFjLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sSUFBSSxjQUFjLENBQUM7SUFDekIsSUFBSSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQzs7SUFHOUMsdUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEMsTUFBTSxJQUFJLEVBQUUsQ0FBQztJQUViLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBRWxCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Q0FDWjs7Ozs7QUFFRCxNQUFNLHVCQUF1QixHQUFXOzs7SUFHdEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsTUFBTSxDQUFDO0NBQzVCOzs7OztBQUVELE1BQU0sdUJBQXVCLEtBQWE7O0lBRXhDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQztDQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi9jb25zdHJ1Y3Rvcic7XHJcbmltcG9ydCB7IGFic0Zsb29yIH0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBhYnNDZWlsIH0gZnJvbSAnLi4vdXRpbHMvYWJzLWNlaWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1YmJsZShkdXI6IER1cmF0aW9uKTogRHVyYXRpb24ge1xyXG4gIGxldCBtaWxsaXNlY29uZHMgPSBkdXIuX21pbGxpc2Vjb25kcztcclxuICBsZXQgZGF5cyA9IGR1ci5fZGF5cztcclxuICBsZXQgbW9udGhzID0gZHVyLl9tb250aHM7XHJcbiAgY29uc3QgZGF0YSA9IGR1ci5fZGF0YTtcclxuXHJcbiAgLy8gaWYgd2UgaGF2ZSBhIG1peCBvZiBwb3NpdGl2ZSBhbmQgbmVnYXRpdmUgdmFsdWVzLCBidWJibGUgZG93biBmaXJzdFxyXG4gIC8vIGNoZWNrOiBodHRwczovL2dpdGh1Yi5jb20vbW9tZW50L21vbWVudC9pc3N1ZXMvMjE2NlxyXG4gIGlmICghKChtaWxsaXNlY29uZHMgPj0gMCAmJiBkYXlzID49IDAgJiYgbW9udGhzID49IDApIHx8XHJcbiAgICAgIChtaWxsaXNlY29uZHMgPD0gMCAmJiBkYXlzIDw9IDAgJiYgbW9udGhzIDw9IDApKSkge1xyXG4gICAgbWlsbGlzZWNvbmRzICs9IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRocykgKyBkYXlzKSAqIDg2NGU1O1xyXG4gICAgZGF5cyA9IDA7XHJcbiAgICBtb250aHMgPSAwO1xyXG4gIH1cclxuXHJcbiAgLy8gVGhlIGZvbGxvd2luZyBjb2RlIGJ1YmJsZXMgdXAgdmFsdWVzLCBzZWUgdGhlIHRlc3RzIGZvclxyXG4gIC8vIGV4YW1wbGVzIG9mIHdoYXQgdGhhdCBtZWFucy5cclxuICBkYXRhLm1pbGxpc2Vjb25kcyA9IG1pbGxpc2Vjb25kcyAlIDEwMDA7XHJcblxyXG4gIGNvbnN0IHNlY29uZHMgPSBhYnNGbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcclxuICBkYXRhLnNlY29uZHMgPSBzZWNvbmRzICUgNjA7XHJcblxyXG4gIGNvbnN0IG1pbnV0ZXMgPSBhYnNGbG9vcihzZWNvbmRzIC8gNjApO1xyXG4gIGRhdGEubWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcclxuXHJcbiAgY29uc3QgaG91cnMgPSBhYnNGbG9vcihtaW51dGVzIC8gNjApO1xyXG4gIGRhdGEuaG91cnMgPSBob3VycyAlIDI0O1xyXG5cclxuICBkYXlzICs9IGFic0Zsb29yKGhvdXJzIC8gMjQpO1xyXG5cclxuICAvLyBjb252ZXJ0IGRheXMgdG8gbW9udGhzXHJcbiAgY29uc3QgbW9udGhzRnJvbURheXMgPSBhYnNGbG9vcihkYXlzVG9Nb250aHMoZGF5cykpO1xyXG4gIG1vbnRocyArPSBtb250aHNGcm9tRGF5cztcclxuICBkYXlzIC09IGFic0NlaWwobW9udGhzVG9EYXlzKG1vbnRoc0Zyb21EYXlzKSk7XHJcblxyXG4gIC8vIDEyIG1vbnRocyAtPiAxIHllYXJcclxuICBjb25zdCB5ZWFycyA9IGFic0Zsb29yKG1vbnRocyAvIDEyKTtcclxuICBtb250aHMgJT0gMTI7XHJcblxyXG4gIGRhdGEuZGF5ID0gZGF5cztcclxuICBkYXRhLm1vbnRoID0gbW9udGhzO1xyXG4gIGRhdGEueWVhciA9IHllYXJzO1xyXG5cclxuICByZXR1cm4gZHVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF5c1RvTW9udGhzKGRheTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAvLyA0MDAgeWVhcnMgaGF2ZSAxNDYwOTcgZGF5cyAodGFraW5nIGludG8gYWNjb3VudCBsZWFwIHllYXIgcnVsZXMpXHJcbiAgLy8gNDAwIHllYXJzIGhhdmUgMTIgbW9udGhzID09PSA0ODAwXHJcbiAgcmV0dXJuIGRheSAqIDQ4MDAgLyAxNDYwOTc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtb250aHNUb0RheXMobW9udGg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgLy8gdGhlIHJldmVyc2Ugb2YgZGF5c1RvTW9udGhzXHJcbiAgcmV0dXJuIG1vbnRoICogMTQ2MDk3IC8gNDgwMDtcclxufVxyXG4iXX0=