/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} num
 * @param {?} targetLength
 * @param {?=} forceSign
 * @return {?}
 */
export function zeroFill(num, targetLength, forceSign) {
    const /** @type {?} */ absNumber = `${Math.abs(num)}`;
    const /** @type {?} */ zerosToFill = targetLength - absNumber.length;
    const /** @type {?} */ sign = num >= 0;
    const /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    const /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyby1maWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvemVyby1maWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLG1CQUFtQixHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsU0FBbUI7SUFDMUMsdUJBQU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ3JDLHVCQUFNLFdBQVcsR0FBRyxZQUFZLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUNwRCx1QkFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUN0Qix1QkFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDOztJQUVsRCx1QkFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFM0UsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUMsQ0FBQztDQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB6ZXJvRmlsbChudW06IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlbmd0aDogbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VTaWduPzogYm9vbGVhbik6IHN0cmluZyB7XHJcbiAgY29uc3QgYWJzTnVtYmVyID0gYCR7TWF0aC5hYnMobnVtKX1gO1xyXG4gIGNvbnN0IHplcm9zVG9GaWxsID0gdGFyZ2V0TGVuZ3RoIC0gYWJzTnVtYmVyLmxlbmd0aDtcclxuICBjb25zdCBzaWduID0gbnVtID49IDA7XHJcbiAgY29uc3QgX3NpZ24gPSBzaWduID8gKGZvcmNlU2lnbiA/ICcrJyA6ICcnKSA6ICctJztcclxuICAvLyB0b2RvOiB0aGlzIGlzIGNyYXp5IHNsb3dcclxuICBjb25zdCBfemVyb3MgPSBNYXRoLnBvdygxMCwgTWF0aC5tYXgoMCwgemVyb3NUb0ZpbGwpKS50b1N0cmluZygpLnN1YnN0cigxKTtcclxuXHJcbiAgcmV0dXJuIChfc2lnbiArIF96ZXJvcyArIGFic051bWJlcik7XHJcbn1cclxuIl19