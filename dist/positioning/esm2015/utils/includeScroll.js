/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getScroll } from './getScroll';
/**
 * @param {?} rect
 * @param {?} element
 * @param {?=} subtract
 * @return {?}
 */
export function includeScroll(rect, element, subtract = false) {
    const /** @type {?} */ scrollTop = getScroll(element, 'top');
    const /** @type {?} */ scrollLeft = getScroll(element, 'left');
    const /** @type {?} */ modifier = subtract ? -1 : 1;
    rect.top += scrollTop * modifier;
    rect.bottom += scrollTop * modifier;
    rect.left += scrollLeft * modifier;
    rect.right += scrollLeft * modifier;
    return rect;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jbHVkZVNjcm9sbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9pbmNsdWRlU2Nyb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDOzs7Ozs7O0FBR3hDLE1BQU0sd0JBQXdCLElBQWEsRUFBRSxPQUFvQixFQUFFLFFBQVEsR0FBRyxLQUFLO0lBQ2pGLHVCQUFNLFNBQVMsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLHVCQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzlDLHVCQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDO0lBQ2pDLElBQUksQ0FBQyxNQUFNLElBQUksU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUNwQyxJQUFJLENBQUMsSUFBSSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUM7SUFDbkMsSUFBSSxDQUFDLEtBQUssSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDO0lBRXBDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Q0FDYiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcclxuICovXHJcbmltcG9ydCB7IGdldFNjcm9sbCB9IGZyb20gJy4vZ2V0U2Nyb2xsJztcclxuaW1wb3J0IHsgT2Zmc2V0cyB9IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5jbHVkZVNjcm9sbChyZWN0OiBPZmZzZXRzLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgc3VidHJhY3QgPSBmYWxzZSkge1xyXG4gIGNvbnN0IHNjcm9sbFRvcCA9IGdldFNjcm9sbChlbGVtZW50LCAndG9wJyk7XHJcbiAgY29uc3Qgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xyXG4gIGNvbnN0IG1vZGlmaWVyID0gc3VidHJhY3QgPyAtMSA6IDE7XHJcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XHJcbiAgcmVjdC5ib3R0b20gKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XHJcbiAgcmVjdC5sZWZ0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcclxuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcclxuXHJcbiAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuIl19