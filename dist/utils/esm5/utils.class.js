/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { window } from './facade/browser';
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /* tslint:disable-next-line: no-any */
        (function (bs) { return bs; })(element.offsetHeight);
    };
    // source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = /**
     * @param {?} elem
     * @return {?}
     */
    function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var /** @type {?} */ view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = window;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
export { Utils };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuY2xhc3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsidXRpbHMuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQyxJQUFBOzs7SUFDRSxzQ0FBc0M7Ozs7O0lBQy9CLFlBQU07Ozs7SUFBYixVQUFjLE9BQVk7O1FBRXhCLENBQUMsVUFBQyxFQUFPLElBQVcsT0FBQSxFQUFFLEVBQUYsQ0FBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQy9DO0lBRUQsZ0ZBQWdGO0lBQ2hGLHNDQUFzQzs7Ozs7SUFDL0IsZUFBUzs7OztJQUFoQixVQUFpQixJQUFTOzs7O1FBSXhCLHFCQUFJLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUUxQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksR0FBRyxNQUFNLENBQUM7U0FDZjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7Z0JBdEJIO0lBdUJDLENBQUE7QUFyQkQsaUJBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgVXRpbHMge1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgc3RhdGljIHJlZmxvdyhlbGVtZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICAoKGJzOiBhbnkpOiB2b2lkID0+IGJzKShlbGVtZW50Lm9mZnNldEhlaWdodCk7XHJcbiAgfVxyXG5cclxuICAvLyBzb3VyY2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L2Jsb2IvbWFzdGVyL3NyYy9jc3MvdmFyL2dldFN0eWxlcy5qc1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgc3RhdGljIGdldFN0eWxlcyhlbGVtOiBhbnkpOiBhbnkge1xyXG4gICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxyXG4gICAgLy8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXHJcbiAgICAvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcclxuICAgIGxldCB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xyXG5cclxuICAgIGlmICghdmlldyB8fCAhdmlldy5vcGVuZXIpIHtcclxuICAgICAgdmlldyA9IHdpbmRvdztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xyXG4gIH1cclxufVxyXG4iXX0=