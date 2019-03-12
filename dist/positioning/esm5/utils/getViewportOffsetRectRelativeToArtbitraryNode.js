/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getClientRect } from './getClientRect';
import { getOffsetRectRelativeToArbitraryNode } from './getOffsetRectRelativeToArbitraryNode';
import { getScroll } from './getScroll';
/**
 * @param {?} element
 * @param {?=} excludeScroll
 * @return {?}
 */
export function getViewportOffsetRectRelativeToArtbitraryNode(element, excludeScroll) {
    if (excludeScroll === void 0) { excludeScroll = false; }
    var /** @type {?} */ html = element.ownerDocument.documentElement;
    var /** @type {?} */ relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
    var /** @type {?} */ width = Math.max(html.clientWidth, window.innerWidth || 0);
    var /** @type {?} */ height = Math.max(html.clientHeight, window.innerHeight || 0);
    var /** @type {?} */ scrollTop = !excludeScroll ? getScroll(html) : 0;
    var /** @type {?} */ scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
    var /** @type {?} */ offset = {
        top: scrollTop - Number(relativeOffset.top) + Number(relativeOffset.marginTop),
        left: scrollLeft - Number(relativeOffset.left) + Number(relativeOffset.marginLeft),
        width: width,
        height: height
    };
    return getClientRect(offset);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZy8iLCJzb3VyY2VzIjpbInV0aWxzL2dldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxhQUFhLENBQUM7Ozs7OztBQUd4QyxNQUFNLHdEQUF3RCxPQUFvQixFQUFFLGFBQXFCO0lBQXJCLDhCQUFBLEVBQUEscUJBQXFCO0lBQ3ZHLHFCQUFNLElBQUksR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQztJQUNuRCxxQkFBTSxjQUFjLEdBQUcsb0NBQW9DLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNFLHFCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNqRSxxQkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFcEUscUJBQU0sU0FBUyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxxQkFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoRSxxQkFBTSxNQUFNLEdBQUc7UUFDYixHQUFHLEVBQUUsU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7UUFDOUUsSUFBSSxFQUFFLFVBQVUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO1FBQ2xGLEtBQUssT0FBQTtRQUNMLE1BQU0sUUFBQTtLQUNQLENBQUM7SUFFRixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Q2xpZW50UmVjdCB9IGZyb20gJy4vZ2V0Q2xpZW50UmVjdCc7XHJcbmltcG9ydCB7IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZSB9IGZyb20gJy4vZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlJztcclxuaW1wb3J0IHsgZ2V0U2Nyb2xsIH0gZnJvbSAnLi9nZXRTY3JvbGwnO1xyXG5pbXBvcnQgeyBPZmZzZXRzIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRWaWV3cG9ydE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJ0Yml0cmFyeU5vZGUoZWxlbWVudDogSFRNTEVsZW1lbnQsIGV4Y2x1ZGVTY3JvbGwgPSBmYWxzZSk6IE9mZnNldHMge1xyXG4gIGNvbnN0IGh0bWwgPSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xyXG4gIGNvbnN0IHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xyXG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoaHRtbC5jbGllbnRXaWR0aCwgd2luZG93LmlubmVyV2lkdGggfHwgMCk7XHJcbiAgY29uc3QgaGVpZ2h0ID0gTWF0aC5tYXgoaHRtbC5jbGllbnRIZWlnaHQsIHdpbmRvdy5pbm5lckhlaWdodCB8fCAwKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsVG9wID0gIWV4Y2x1ZGVTY3JvbGwgPyBnZXRTY3JvbGwoaHRtbCkgOiAwO1xyXG4gIGNvbnN0IHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcclxuXHJcbiAgY29uc3Qgb2Zmc2V0ID0ge1xyXG4gICAgdG9wOiBzY3JvbGxUb3AgLSBOdW1iZXIocmVsYXRpdmVPZmZzZXQudG9wKSArIE51bWJlcihyZWxhdGl2ZU9mZnNldC5tYXJnaW5Ub3ApLFxyXG4gICAgbGVmdDogc2Nyb2xsTGVmdCAtIE51bWJlcihyZWxhdGl2ZU9mZnNldC5sZWZ0KSArIE51bWJlcihyZWxhdGl2ZU9mZnNldC5tYXJnaW5MZWZ0KSxcclxuICAgIHdpZHRoLFxyXG4gICAgaGVpZ2h0XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIGdldENsaWVudFJlY3Qob2Zmc2V0KTtcclxufVxyXG4iXX0=