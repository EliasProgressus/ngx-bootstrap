/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { shiftDate } from 'ngx-bootstrap/chronos';
/**
 * @record
 */
export function MatrixOptions() { }
function MatrixOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    MatrixOptions.prototype.height;
    /** @type {?} */
    MatrixOptions.prototype.width;
    /** @type {?} */
    MatrixOptions.prototype.initialDate;
    /** @type {?} */
    MatrixOptions.prototype.shift;
}
/**
 * @template T
 * @param {?} options
 * @param {?} fn
 * @return {?}
 */
export function createMatrix(options, fn) {
    var /** @type {?} */ prevValue = options.initialDate;
    var /** @type {?} */ matrix = new Array(options.height);
    for (var /** @type {?} */ i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (var /** @type {?} */ j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = shiftDate(prevValue, options.shift);
        }
    }
    return matrix;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0cml4LXV0aWxzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsidXRpbHMvbWF0cml4LXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQVksU0FBUyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVc1RCxNQUFNLHVCQUNKLE9BQXNCLEVBQ3RCLEVBQXFCO0lBRXJCLHFCQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQ3BDLHFCQUFNLE1BQU0sR0FBVSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsR0FBRyxDQUFDLENBQUMscUJBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0IsU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pEO0tBQ0Y7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0NBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaW1lVW5pdCwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmV4cG9ydCB0eXBlIENyZWF0ZU1hdHJpeENiPFQ+ID0gKGRhdGU6IERhdGUpID0+IFQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hdHJpeE9wdGlvbnMge1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaW5pdGlhbERhdGU6IERhdGU7XHJcbiAgc2hpZnQ6IFRpbWVVbml0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWF0cml4PFQ+KFxyXG4gIG9wdGlvbnM6IE1hdHJpeE9wdGlvbnMsXHJcbiAgZm46IENyZWF0ZU1hdHJpeENiPFQ+XHJcbik6IFRbXVtdIHtcclxuICBsZXQgcHJldlZhbHVlID0gb3B0aW9ucy5pbml0aWFsRGF0ZTtcclxuICBjb25zdCBtYXRyaXg6IFRbXVtdID0gbmV3IEFycmF5KG9wdGlvbnMuaGVpZ2h0KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuaGVpZ2h0OyBpKyspIHtcclxuICAgIG1hdHJpeFtpXSA9IG5ldyBBcnJheShvcHRpb25zLndpZHRoKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9ucy53aWR0aDsgaisrKSB7XHJcbiAgICAgIG1hdHJpeFtpXVtqXSA9IGZuKHByZXZWYWx1ZSk7XHJcbiAgICAgIHByZXZWYWx1ZSA9IHNoaWZ0RGF0ZShwcmV2VmFsdWUsIG9wdGlvbnMuc2hpZnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdHJpeDtcclxufVxyXG4iXX0=