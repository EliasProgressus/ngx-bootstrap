/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { getOppositePlacement } from './getOppositePlacement';
import { getOuterSizes } from './getOuterSizes';
/**
 * @param {?} target
 * @param {?} hostOffsets
 * @param {?} position
 * @return {?}
 */
export function getTargetOffsets(target, hostOffsets, position) {
    var /** @type {?} */ placement = position.split(' ')[0];
    // Get target node sizes
    var /** @type {?} */ targetRect = getOuterSizes(target);
    // Add position, width and height to our offsets object
    var /** @type {?} */ targetOffsets = {
        width: targetRect.width,
        height: targetRect.height
    };
    // depending by the target placement we have to compute its offsets slightly differently
    var /** @type {?} */ isHoriz = ['right', 'left'].indexOf(placement) !== -1;
    var /** @type {?} */ mainSide = isHoriz ? 'top' : 'left';
    var /** @type {?} */ secondarySide = isHoriz ? 'left' : 'top';
    var /** @type {?} */ measurement = isHoriz ? 'height' : 'width';
    var /** @type {?} */ secondaryMeasurement = !isHoriz ? 'height' : 'width';
    targetOffsets[mainSide] =
        hostOffsets[mainSide] +
            hostOffsets[measurement] / 2 -
            targetRect[measurement] / 2;
    targetOffsets[secondarySide] = placement === secondarySide
        ? hostOffsets[secondarySide] - targetRect[secondaryMeasurement]
        : hostOffsets[getOppositePlacement(secondarySide)];
    return targetOffsets;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0VGFyZ2V0T2Zmc2V0cy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRUYXJnZXRPZmZzZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7QUFHaEQsTUFBTSwyQkFDSixNQUFtQixFQUNuQixXQUFvQixFQUNwQixRQUFnQjtJQUVoQixxQkFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7SUFHekMscUJBQU0sVUFBVSxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7SUFHekMscUJBQU0sYUFBYSxHQUFHO1FBQ3BCLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSztRQUN2QixNQUFNLEVBQUUsVUFBVSxDQUFDLE1BQU07S0FDMUIsQ0FBQzs7SUFHRixxQkFBTSxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVELHFCQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQzFDLHFCQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQy9DLHFCQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ2pELHFCQUFNLG9CQUFvQixHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUUzRCxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3JCLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDckIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7WUFDNUIsVUFBVSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUU5QixhQUFhLENBQUMsYUFBYSxDQUFDLEdBQUcsU0FBUyxLQUFLLGFBQWE7UUFDeEQsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsR0FBRyxVQUFVLENBQUMsb0JBQW9CLENBQUM7UUFDL0QsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBRXJELE1BQU0sQ0FBQyxhQUFhLENBQUM7Q0FDdEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR2V0IG9mZnNldHMgdG8gdGhlIHRhcmdldFxyXG4gKi9cclxuaW1wb3J0IHsgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQgfSBmcm9tICcuL2dldE9wcG9zaXRlUGxhY2VtZW50JztcclxuaW1wb3J0IHsgZ2V0T3V0ZXJTaXplcyB9IGZyb20gJy4vZ2V0T3V0ZXJTaXplcyc7XHJcbmltcG9ydCB7IE9mZnNldHMgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldE9mZnNldHMoXHJcbiAgdGFyZ2V0OiBIVE1MRWxlbWVudCxcclxuICBob3N0T2Zmc2V0czogT2Zmc2V0cyxcclxuICBwb3NpdGlvbjogc3RyaW5nXHJcbik6IE9mZnNldHMge1xyXG4gIGNvbnN0IHBsYWNlbWVudCA9IHBvc2l0aW9uLnNwbGl0KCcgJylbMF07XHJcblxyXG4gIC8vIEdldCB0YXJnZXQgbm9kZSBzaXplc1xyXG4gIGNvbnN0IHRhcmdldFJlY3QgPSBnZXRPdXRlclNpemVzKHRhcmdldCk7XHJcblxyXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcclxuICBjb25zdCB0YXJnZXRPZmZzZXRzID0ge1xyXG4gICAgd2lkdGg6IHRhcmdldFJlY3Qud2lkdGgsXHJcbiAgICBoZWlnaHQ6IHRhcmdldFJlY3QuaGVpZ2h0XHJcbiAgfTtcclxuXHJcbiAgLy8gZGVwZW5kaW5nIGJ5IHRoZSB0YXJnZXQgcGxhY2VtZW50IHdlIGhhdmUgdG8gY29tcHV0ZSBpdHMgb2Zmc2V0cyBzbGlnaHRseSBkaWZmZXJlbnRseVxyXG4gIGNvbnN0IGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xyXG4gIGNvbnN0IG1haW5TaWRlID0gaXNIb3JpeiA/ICd0b3AnIDogJ2xlZnQnO1xyXG4gIGNvbnN0IHNlY29uZGFyeVNpZGUgPSBpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCc7XHJcbiAgY29uc3QgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xyXG4gIGNvbnN0IHNlY29uZGFyeU1lYXN1cmVtZW50ID0gIWlzSG9yaXogPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XHJcblxyXG4gIHRhcmdldE9mZnNldHNbbWFpblNpZGVdID1cclxuICAgIGhvc3RPZmZzZXRzW21haW5TaWRlXSArXHJcbiAgICBob3N0T2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC1cclxuICAgIHRhcmdldFJlY3RbbWVhc3VyZW1lbnRdIC8gMjtcclxuXHJcbiAgdGFyZ2V0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHBsYWNlbWVudCA9PT0gc2Vjb25kYXJ5U2lkZVxyXG4gICAgPyBob3N0T2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSAtIHRhcmdldFJlY3Rbc2Vjb25kYXJ5TWVhc3VyZW1lbnRdXHJcbiAgICA6IGhvc3RPZmZzZXRzW2dldE9wcG9zaXRlUGxhY2VtZW50KHNlY29uZGFyeVNpZGUpXTtcclxuXHJcbiAgcmV0dXJuIHRhcmdldE9mZnNldHM7XHJcbn1cclxuIl19