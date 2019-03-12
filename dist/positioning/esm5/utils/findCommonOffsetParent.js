/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isOffsetContainer } from './isOffsetContainer';
import { getRoot } from './getRoot';
import { getOffsetParent } from './getOffsetParent';
/**
 * @param {?} element1
 * @param {?} element2
 * @return {?}
 */
export function findCommonOffsetParent(element1, element2) {
    // This check is needed to avoid errors in case one of the elements isn't defined for any reason
    if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
        return document.documentElement;
    }
    // Here we make sure to give as "start" the element that comes first in the DOM
    /* tslint:disable-next-line: no-bitwise */
    var /** @type {?} */ order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
    var /** @type {?} */ start = order ? element1 : element2;
    var /** @type {?} */ end = order ? element2 : element1;
    // Get common ancestor container
    var /** @type {?} */ range = document.createRange();
    range.setStart(start, 0);
    range.setEnd(end, 0);
    var commonAncestorContainer = range.commonAncestorContainer;
    // Both nodes are inside #document
    if ((element1 !== commonAncestorContainer &&
        element2 !== commonAncestorContainer) ||
        start.contains(end)) {
        if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
        }
        return getOffsetParent(commonAncestorContainer);
    }
    // one of the nodes is inside shadowDOM, find which one
    var /** @type {?} */ element1root = getRoot(element1);
    if (element1root.host) {
        return findCommonOffsetParent(element1root.host, element2);
    }
    else {
        return findCommonOffsetParent(element1, getRoot(element2).host);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZENvbW1vbk9mZnNldFBhcmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9maW5kQ29tbW9uT2Zmc2V0UGFyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7Ozs7O0FBRXBELE1BQU0saUNBQWlDLFFBQXFCLEVBQUUsUUFBcUI7O0lBRWpGLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDO0tBQ2pDOzs7SUFJRCxxQkFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQztJQUU1RixxQkFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUMxQyxxQkFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQzs7SUFHeEMscUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNiLElBQUEsdURBQXVCLENBQVc7O0lBRzFDLEVBQUUsQ0FBQyxDQUNELENBQUMsUUFBUSxLQUFLLHVCQUF1QjtRQUNuQyxRQUFRLEtBQUssdUJBQXVCLENBQUM7UUFDdkMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsaUJBQWlCLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLHVCQUF1QixDQUFDO1NBQ2hDO1FBRUQsTUFBTSxDQUFDLGVBQWUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0tBQ2pEOztJQUdELHFCQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdkMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdEIsTUFBTSxDQUFDLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7S0FDNUQ7SUFBQyxJQUFJLENBQUMsQ0FBQztRQUNOLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2pFO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogRmluZHMgdGhlIG9mZnNldCBwYXJlbnQgY29tbW9uIHRvIHRoZSB0d28gcHJvdmlkZWQgbm9kZXNcclxuICovXHJcbmltcG9ydCB7IGlzT2Zmc2V0Q29udGFpbmVyIH0gZnJvbSAnLi9pc09mZnNldENvbnRhaW5lcic7XHJcbmltcG9ydCB7IGdldFJvb3QgfSBmcm9tICcuL2dldFJvb3QnO1xyXG5pbXBvcnQgeyBnZXRPZmZzZXRQYXJlbnQgfSBmcm9tICcuL2dldE9mZnNldFBhcmVudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbW1vbk9mZnNldFBhcmVudChlbGVtZW50MTogSFRNTEVsZW1lbnQsIGVsZW1lbnQyOiBIVE1MRWxlbWVudCk6IGFueSB7XHJcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXHJcbiAgaWYgKCFlbGVtZW50MSB8fCAhZWxlbWVudDEubm9kZVR5cGUgfHwgIWVsZW1lbnQyIHx8ICFlbGVtZW50Mi5ub2RlVHlwZSkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZSAqL1xyXG4gIGNvbnN0IG9yZGVyID0gZWxlbWVudDEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudDIpICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9GT0xMT1dJTkc7XHJcblxyXG4gIGNvbnN0IHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xyXG4gIGNvbnN0IGVuZCA9IG9yZGVyID8gZWxlbWVudDIgOiBlbGVtZW50MTtcclxuXHJcbiAgLy8gR2V0IGNvbW1vbiBhbmNlc3RvciBjb250YWluZXJcclxuICBjb25zdCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XHJcbiAgcmFuZ2Uuc2V0U3RhcnQoc3RhcnQsIDApO1xyXG4gIHJhbmdlLnNldEVuZChlbmQsIDApO1xyXG4gIGNvbnN0IHsgY29tbW9uQW5jZXN0b3JDb250YWluZXIgfSA9IHJhbmdlO1xyXG5cclxuICAvLyBCb3RoIG5vZGVzIGFyZSBpbnNpZGUgI2RvY3VtZW50XHJcbiAgaWYgKFxyXG4gICAgKGVsZW1lbnQxICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciAmJlxyXG4gICAgICBlbGVtZW50MiAhPT0gY29tbW9uQW5jZXN0b3JDb250YWluZXIpIHx8XHJcbiAgICBzdGFydC5jb250YWlucyhlbmQpXHJcbiAgKSB7XHJcbiAgICBpZiAoaXNPZmZzZXRDb250YWluZXIoY29tbW9uQW5jZXN0b3JDb250YWluZXIpKSB7XHJcbiAgICAgIHJldHVybiBjb21tb25BbmNlc3RvckNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKTtcclxuICB9XHJcblxyXG4gIC8vIG9uZSBvZiB0aGUgbm9kZXMgaXMgaW5zaWRlIHNoYWRvd0RPTSwgZmluZCB3aGljaCBvbmVcclxuICBjb25zdCBlbGVtZW50MXJvb3QgPSBnZXRSb290KGVsZW1lbnQxKTtcclxuICBpZiAoZWxlbWVudDFyb290Lmhvc3QpIHtcclxuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxLCBnZXRSb290KGVsZW1lbnQyKS5ob3N0KTtcclxuICB9XHJcbn1cclxuIl19