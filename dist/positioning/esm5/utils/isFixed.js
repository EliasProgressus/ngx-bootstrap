/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { getParentNode } from './getParentNode';
/**
 * @param {?} element
 * @return {?}
 */
export function isFixed(element) {
    var /** @type {?} */ nodeName = element.nodeName;
    if (nodeName === 'BODY' || nodeName === 'HTML') {
        return false;
    }
    if (getStyleComputedProperty(element, 'position') === 'fixed') {
        return true;
    }
    return isFixed(getParentNode(element));
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNGaXhlZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9pc0ZpeGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7O0FBRWhELE1BQU0sa0JBQWtCLE9BQW9CO0lBQzFDLHFCQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ2xDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsS0FBSyxNQUFNLElBQUksUUFBUSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0MsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkO0lBQ0QsRUFBRSxDQUFDLENBQUMsd0JBQXdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiO0lBRUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztDQUN4QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDaGVjayBpZiB0aGUgZ2l2ZW4gZWxlbWVudCBpcyBmaXhlZCBvciBpcyBpbnNpZGUgYSBmaXhlZCBwYXJlbnRcclxuICovXHJcbmltcG9ydCB7IGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSB9IGZyb20gJy4vZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5JztcclxuaW1wb3J0IHsgZ2V0UGFyZW50Tm9kZSB9IGZyb20gJy4vZ2V0UGFyZW50Tm9kZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG5vZGVOYW1lID0gZWxlbWVudC5ub2RlTmFtZTtcclxuICBpZiAobm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgJ3Bvc2l0aW9uJykgPT09ICdmaXhlZCcpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlzRml4ZWQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XHJcbn1cclxuIl19