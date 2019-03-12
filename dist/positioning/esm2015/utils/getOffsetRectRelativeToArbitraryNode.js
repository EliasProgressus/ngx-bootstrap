/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getBoundingClientRect } from './getBoundingClientRect';
import { getClientRect } from './getClientRect';
import { getScrollParent } from './getScrollParent';
import { getStyleComputedProperty } from './getStyleComputedProperty';
import { includeScroll } from './includeScroll';
import { isIE as runIsIE } from './isIE';
/**
 * @param {?} children
 * @param {?} parent
 * @param {?=} fixedPosition
 * @return {?}
 */
export function getOffsetRectRelativeToArbitraryNode(children, parent, fixedPosition = false) {
    const /** @type {?} */ isIE10 = runIsIE(10);
    const /** @type {?} */ isHTML = parent.nodeName === 'HTML';
    const /** @type {?} */ childrenRect = getBoundingClientRect(children);
    const /** @type {?} */ parentRect = getBoundingClientRect(parent);
    const /** @type {?} */ scrollParent = getScrollParent(children);
    const /** @type {?} */ styles = getStyleComputedProperty(parent);
    const /** @type {?} */ borderTopWidth = parseFloat(styles.borderTopWidth);
    const /** @type {?} */ borderLeftWidth = parseFloat(styles.borderLeftWidth);
    // In cases where the parent is fixed, we must ignore negative scroll in offset calc
    if (fixedPosition && isHTML) {
        parentRect.top = Math.max(parentRect.top, 0);
        parentRect.left = Math.max(parentRect.left, 0);
    }
    let /** @type {?} */ offsets = getClientRect({
        top: childrenRect.top - parentRect.top - borderTopWidth,
        left: childrenRect.left - parentRect.left - borderLeftWidth,
        width: childrenRect.width,
        height: childrenRect.height
    });
    offsets.marginTop = 0;
    offsets.marginLeft = 0;
    // Subtract margins of documentElement in case it's being used as parent
    // we do this only on HTML because it's the only element that behaves
    // differently when margins are applied to it. The margins are included in
    // the box of the documentElement, in the other cases not.
    if (!isIE10 && isHTML) {
        const /** @type {?} */ marginTop = parseFloat(styles.marginTop);
        const /** @type {?} */ marginLeft = parseFloat(styles.marginLeft);
        offsets.top -= borderTopWidth - marginTop;
        offsets.bottom -= borderTopWidth - marginTop;
        offsets.left -= borderLeftWidth - marginLeft;
        offsets.right -= borderLeftWidth - marginLeft;
        // Attach marginTop and marginLeft because in some circumstances we may need them
        offsets.marginTop = marginTop;
        offsets.marginLeft = marginLeft;
    }
    if (isIE10 && !fixedPosition
        ? parent.contains(scrollParent)
        : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
        offsets = includeScroll(offsets, parent);
    }
    return offsets;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLElBQUksSUFBSSxPQUFPLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7QUFHekMsTUFBTSwrQ0FDSixRQUFxQixFQUNyQixNQUFtQixFQUNuQixhQUFhLEdBQUcsS0FBSztJQUVyQix1QkFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLHVCQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxLQUFLLE1BQU0sQ0FBQztJQUMxQyx1QkFBTSxZQUFZLEdBQVEscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUQsdUJBQU0sVUFBVSxHQUFRLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RELHVCQUFNLFlBQVksR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFL0MsdUJBQU0sTUFBTSxHQUFHLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELHVCQUFNLGNBQWMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3pELHVCQUFNLGVBQWUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztJQUczRCxFQUFFLENBQUMsQ0FBQyxhQUFhLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1QixVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNoRDtJQUVELHFCQUFJLE9BQU8sR0FBWSxhQUFhLENBQUM7UUFDbkMsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsR0FBRyxjQUFjO1FBQ3ZELElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLEdBQUcsZUFBZTtRQUMzRCxLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7UUFDekIsTUFBTSxFQUFFLFlBQVksQ0FBQyxNQUFNO0tBQzVCLENBQUMsQ0FBQztJQUVILE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLE9BQU8sQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDOzs7OztJQU12QixFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLHVCQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLHVCQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWpELE9BQU8sQ0FBQyxHQUFHLElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUMxQyxPQUFPLENBQUMsTUFBTSxJQUFJLGNBQWMsR0FBRyxTQUFTLENBQUM7UUFDN0MsT0FBTyxDQUFDLElBQUksSUFBSSxlQUFlLEdBQUcsVUFBVSxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxLQUFLLElBQUksZUFBZSxHQUFHLFVBQVUsQ0FBQzs7UUFHOUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDOUIsT0FBTyxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDakM7SUFFRCxFQUFFLENBQUMsQ0FDRCxNQUFNLElBQUksQ0FBQyxhQUFhO1FBQ3RCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUMvQixDQUFDLENBQUMsTUFBTSxLQUFLLFlBQVksSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLE1BQzNELENBQUMsQ0FBQyxDQUFDO1FBQ0QsT0FBTyxHQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDMUM7SUFFRCxNQUFNLENBQUMsT0FBTyxDQUFDO0NBQ2hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IH0gZnJvbSAnLi9nZXRCb3VuZGluZ0NsaWVudFJlY3QnO1xyXG5pbXBvcnQgeyBnZXRDbGllbnRSZWN0IH0gZnJvbSAnLi9nZXRDbGllbnRSZWN0JztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsUGFyZW50IH0gZnJvbSAnLi9nZXRTY3JvbGxQYXJlbnQnO1xyXG5pbXBvcnQgeyBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkgfSBmcm9tICcuL2dldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eSc7XHJcbmltcG9ydCB7IGluY2x1ZGVTY3JvbGwgfSBmcm9tICcuL2luY2x1ZGVTY3JvbGwnO1xyXG5pbXBvcnQgeyBpc0lFIGFzIHJ1bklzSUUgfSBmcm9tICcuL2lzSUUnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUoXHJcbiAgY2hpbGRyZW46IEhUTUxFbGVtZW50LFxyXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgZml4ZWRQb3NpdGlvbiA9IGZhbHNlXHJcbik6IE9mZnNldHMge1xyXG4gIGNvbnN0IGlzSUUxMCA9IHJ1bklzSUUoMTApO1xyXG4gIGNvbnN0IGlzSFRNTCA9IHBhcmVudC5ub2RlTmFtZSA9PT0gJ0hUTUwnO1xyXG4gIGNvbnN0IGNoaWxkcmVuUmVjdDogYW55ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KGNoaWxkcmVuKTtcclxuICBjb25zdCBwYXJlbnRSZWN0OiBhbnkgPSBnZXRCb3VuZGluZ0NsaWVudFJlY3QocGFyZW50KTtcclxuICBjb25zdCBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xyXG5cclxuICBjb25zdCBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcclxuICBjb25zdCBib3JkZXJUb3BXaWR0aCA9IHBhcnNlRmxvYXQoc3R5bGVzLmJvcmRlclRvcFdpZHRoKTtcclxuICBjb25zdCBib3JkZXJMZWZ0V2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlcy5ib3JkZXJMZWZ0V2lkdGgpO1xyXG5cclxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcclxuICBpZiAoZml4ZWRQb3NpdGlvbiAmJiBpc0hUTUwpIHtcclxuICAgIHBhcmVudFJlY3QudG9wID0gTWF0aC5tYXgocGFyZW50UmVjdC50b3AsIDApO1xyXG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcclxuICB9XHJcblxyXG4gIGxldCBvZmZzZXRzOiBPZmZzZXRzID0gZ2V0Q2xpZW50UmVjdCh7XHJcbiAgICB0b3A6IGNoaWxkcmVuUmVjdC50b3AgLSBwYXJlbnRSZWN0LnRvcCAtIGJvcmRlclRvcFdpZHRoLFxyXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXHJcbiAgICB3aWR0aDogY2hpbGRyZW5SZWN0LndpZHRoLFxyXG4gICAgaGVpZ2h0OiBjaGlsZHJlblJlY3QuaGVpZ2h0XHJcbiAgfSk7XHJcblxyXG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcclxuICBvZmZzZXRzLm1hcmdpbkxlZnQgPSAwO1xyXG5cclxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcclxuICAvLyB3ZSBkbyB0aGlzIG9ubHkgb24gSFRNTCBiZWNhdXNlIGl0J3MgdGhlIG9ubHkgZWxlbWVudCB0aGF0IGJlaGF2ZXNcclxuICAvLyBkaWZmZXJlbnRseSB3aGVuIG1hcmdpbnMgYXJlIGFwcGxpZWQgdG8gaXQuIFRoZSBtYXJnaW5zIGFyZSBpbmNsdWRlZCBpblxyXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cclxuICBpZiAoIWlzSUUxMCAmJiBpc0hUTUwpIHtcclxuICAgIGNvbnN0IG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCk7XHJcbiAgICBjb25zdCBtYXJnaW5MZWZ0ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luTGVmdCk7XHJcblxyXG4gICAgb2Zmc2V0cy50b3AgLT0gYm9yZGVyVG9wV2lkdGggLSBtYXJnaW5Ub3A7XHJcbiAgICBvZmZzZXRzLmJvdHRvbSAtPSBib3JkZXJUb3BXaWR0aCAtIG1hcmdpblRvcDtcclxuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xyXG4gICAgb2Zmc2V0cy5yaWdodCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xyXG5cclxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxyXG4gICAgb2Zmc2V0cy5tYXJnaW5Ub3AgPSBtYXJnaW5Ub3A7XHJcbiAgICBvZmZzZXRzLm1hcmdpbkxlZnQgPSBtYXJnaW5MZWZ0O1xyXG4gIH1cclxuXHJcbiAgaWYgKFxyXG4gICAgaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uXHJcbiAgICAgID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudClcclxuICAgICAgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJ1xyXG4gICkge1xyXG4gICAgb2Zmc2V0cyA9IGluY2x1ZGVTY3JvbGwob2Zmc2V0cywgcGFyZW50KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBvZmZzZXRzO1xyXG59XHJcbiJdfQ==