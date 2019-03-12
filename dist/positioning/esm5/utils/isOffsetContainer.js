/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getOffsetParent } from './getOffsetParent';
/**
 * @param {?} element
 * @return {?}
 */
export function isOffsetContainer(element) {
    var nodeName = element.nodeName;
    if (nodeName === 'BODY') {
        return false;
    }
    return (nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNPZmZzZXRDb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nLyIsInNvdXJjZXMiOlsidXRpbHMvaXNPZmZzZXRDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7QUFFcEQsTUFBTSw0QkFBNEIsT0FBWTtJQUNwQyxJQUFBLDJCQUFRLENBQWE7SUFDN0IsRUFBRSxDQUFDLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0lBRUQsTUFBTSxDQUFDLENBQ0wsUUFBUSxLQUFLLE1BQU0sSUFBSSxlQUFlLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssT0FBTyxDQUM5RSxDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRPZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNPZmZzZXRDb250YWluZXIoZWxlbWVudDogYW55KSB7XHJcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZWxlbWVudDtcclxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50XHJcbiAgKTtcclxufVxyXG4iXX0=