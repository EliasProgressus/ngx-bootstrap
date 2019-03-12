/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { createDuration } from '../duration/create';
import { absRound } from '../utils/abs-round';
import { getDate, getMonth, getTime } from '../utils/date-getters';
import { setDate, setMonth, setTime } from '../utils/date-setters';
import { cloneDate } from '../create/clone';
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
export function add(date, val, period, isUTC) {
    var /** @type {?} */ dur = createDuration(val, period);
    return addSubtract(date, dur, 1, isUTC);
}
/**
 * @param {?} date
 * @param {?} val
 * @param {?} period
 * @param {?=} isUTC
 * @return {?}
 */
export function subtract(date, val, period, isUTC) {
    var /** @type {?} */ dur = createDuration(val, period);
    return addSubtract(date, dur, -1, isUTC);
}
/**
 * @param {?} date
 * @param {?} duration
 * @param {?} isAdding
 * @param {?=} isUTC
 * @return {?}
 */
export function addSubtract(date, duration, isAdding, isUTC) {
    var /** @type {?} */ milliseconds = duration._milliseconds;
    var /** @type {?} */ days = absRound(duration._days);
    var /** @type {?} */ months = absRound(duration._months);
    // todo: add timezones support
    // const _updateOffset = updateOffset == null ? true : updateOffset;
    if (months) {
        setMonth(date, getMonth(date, isUTC) + months * isAdding, isUTC);
    }
    if (days) {
        setDate(date, getDate(date, isUTC) + days * isAdding, isUTC);
    }
    if (milliseconds) {
        setTime(date, getTime(date) + milliseconds * isAdding);
    }
    return cloneDate(date);
    // todo: add timezones support
    // if (_updateOffset) {
    //   hooks.updateOffset(date, days || months);
    // }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXN1YnRyYWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsibW9tZW50L2FkZC1zdWJ0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7O0FBRzVDLE1BQU0sY0FBYyxJQUFVLEVBQUUsR0FBVyxFQUFFLE1BQWtCLEVBQUUsS0FBZTtJQUM5RSxxQkFBTSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV4QyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0NBQ3pDOzs7Ozs7OztBQUVELE1BQU0sbUJBQW1CLElBQVUsRUFBRSxHQUFXLEVBQUUsTUFBa0IsRUFBRSxLQUFlO0lBQ25GLHFCQUFNLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXhDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztDQUMxQzs7Ozs7Ozs7QUFFRCxNQUFNLHNCQUFzQixJQUFVLEVBQUUsUUFBa0IsRUFBRSxRQUFnQixFQUFFLEtBQWU7SUFDM0YscUJBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUM7SUFDNUMscUJBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMscUJBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7OztJQUsxQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ1gsUUFBUSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDbEU7SUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ1QsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7S0FDOUQ7SUFDRCxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztLQUN4RDtJQUVELE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Ozs7O0NBS3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRHVyYXRpb24gfSBmcm9tICcuLi9kdXJhdGlvbi9jcmVhdGUnO1xyXG5pbXBvcnQgeyBhYnNSb3VuZCB9IGZyb20gJy4uL3V0aWxzL2Ficy1yb3VuZCc7XHJcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSAnLi4vZHVyYXRpb24vY29uc3RydWN0b3InO1xyXG5pbXBvcnQgeyBnZXREYXRlLCBnZXRNb250aCwgZ2V0VGltZSB9IGZyb20gJy4uL3V0aWxzL2RhdGUtZ2V0dGVycyc7XHJcbmltcG9ydCB7IHNldERhdGUsIHNldE1vbnRoLCBzZXRUaW1lIH0gZnJvbSAnLi4vdXRpbHMvZGF0ZS1zZXR0ZXJzJztcclxuaW1wb3J0IHsgY2xvbmVEYXRlIH0gZnJvbSAnLi4vY3JlYXRlL2Nsb25lJztcclxuaW1wb3J0IHsgVW5pdE9mVGltZSB9IGZyb20gJy4uL3R5cGVzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGQoZGF0ZTogRGF0ZSwgdmFsOiBudW1iZXIsIHBlcmlvZDogVW5pdE9mVGltZSwgaXNVVEM/OiBib29sZWFuKTogRGF0ZSB7XHJcbiAgY29uc3QgZHVyID0gY3JlYXRlRHVyYXRpb24odmFsLCBwZXJpb2QpO1xyXG5cclxuICByZXR1cm4gYWRkU3VidHJhY3QoZGF0ZSwgZHVyLCAxLCBpc1VUQyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJ0cmFjdChkYXRlOiBEYXRlLCB2YWw6IG51bWJlciwgcGVyaW9kOiBVbml0T2ZUaW1lLCBpc1VUQz86IGJvb2xlYW4pOiBEYXRlIHtcclxuICBjb25zdCBkdXIgPSBjcmVhdGVEdXJhdGlvbih2YWwsIHBlcmlvZCk7XHJcblxyXG4gIHJldHVybiBhZGRTdWJ0cmFjdChkYXRlLCBkdXIsIC0xLCBpc1VUQyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTdWJ0cmFjdChkYXRlOiBEYXRlLCBkdXJhdGlvbjogRHVyYXRpb24sIGlzQWRkaW5nOiBudW1iZXIsIGlzVVRDPzogYm9vbGVhbik6IERhdGUge1xyXG4gIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGR1cmF0aW9uLl9taWxsaXNlY29uZHM7XHJcbiAgY29uc3QgZGF5cyA9IGFic1JvdW5kKGR1cmF0aW9uLl9kYXlzKTtcclxuICBjb25zdCBtb250aHMgPSBhYnNSb3VuZChkdXJhdGlvbi5fbW9udGhzKTtcclxuXHJcbiAgLy8gdG9kbzogYWRkIHRpbWV6b25lcyBzdXBwb3J0XHJcbiAgLy8gY29uc3QgX3VwZGF0ZU9mZnNldCA9IHVwZGF0ZU9mZnNldCA9PSBudWxsID8gdHJ1ZSA6IHVwZGF0ZU9mZnNldDtcclxuXHJcbiAgaWYgKG1vbnRocykge1xyXG4gICAgc2V0TW9udGgoZGF0ZSwgZ2V0TW9udGgoZGF0ZSwgaXNVVEMpICsgbW9udGhzICogaXNBZGRpbmcsIGlzVVRDKTtcclxuICB9XHJcbiAgaWYgKGRheXMpIHtcclxuICAgIHNldERhdGUoZGF0ZSwgZ2V0RGF0ZShkYXRlLCBpc1VUQykgKyBkYXlzICogaXNBZGRpbmcsIGlzVVRDKTtcclxuICB9XHJcbiAgaWYgKG1pbGxpc2Vjb25kcykge1xyXG4gICAgc2V0VGltZShkYXRlLCBnZXRUaW1lKGRhdGUpICsgbWlsbGlzZWNvbmRzICogaXNBZGRpbmcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNsb25lRGF0ZShkYXRlKTtcclxuICAvLyB0b2RvOiBhZGQgdGltZXpvbmVzIHN1cHBvcnRcclxuICAvLyBpZiAoX3VwZGF0ZU9mZnNldCkge1xyXG4gIC8vICAgaG9va3MudXBkYXRlT2Zmc2V0KGRhdGUsIGRheXMgfHwgbW9udGhzKTtcclxuICAvLyB9XHJcbn1cclxuIl19