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
    var /** @type {?} */ absNumber = "" + Math.abs(num);
    var /** @type {?} */ zerosToFill = targetLength - absNumber.length;
    var /** @type {?} */ sign = num >= 0;
    var /** @type {?} */ _sign = sign ? (forceSign ? '+' : '') : '-';
    // todo: this is crazy slow
    var /** @type {?} */ _zeros = Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1);
    return (_sign + _zeros + absNumber);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemVyby1maWxsLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9jaHJvbm9zLyIsInNvdXJjZXMiOlsidXRpbHMvemVyby1maWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQUFNLG1CQUFtQixHQUFXLEVBQ1gsWUFBb0IsRUFDcEIsU0FBbUI7SUFDMUMscUJBQU0sU0FBUyxHQUFHLEtBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUcsQ0FBQztJQUNyQyxxQkFBTSxXQUFXLEdBQUcsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUM7SUFDcEQscUJBQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDdEIscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzs7SUFFbEQscUJBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBRyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7Q0FDckMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gemVyb0ZpbGwobnVtOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZW5ndGg6IG51bWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlU2lnbj86IGJvb2xlYW4pOiBzdHJpbmcge1xyXG4gIGNvbnN0IGFic051bWJlciA9IGAke01hdGguYWJzKG51bSl9YDtcclxuICBjb25zdCB6ZXJvc1RvRmlsbCA9IHRhcmdldExlbmd0aCAtIGFic051bWJlci5sZW5ndGg7XHJcbiAgY29uc3Qgc2lnbiA9IG51bSA+PSAwO1xyXG4gIGNvbnN0IF9zaWduID0gc2lnbiA/IChmb3JjZVNpZ24gPyAnKycgOiAnJykgOiAnLSc7XHJcbiAgLy8gdG9kbzogdGhpcyBpcyBjcmF6eSBzbG93XHJcbiAgY29uc3QgX3plcm9zID0gTWF0aC5wb3coMTAsIE1hdGgubWF4KDAsIHplcm9zVG9GaWxsKSkudG9TdHJpbmcoKS5zdWJzdHIoMSk7XHJcblxyXG4gIHJldHVybiAoX3NpZ24gKyBfemVyb3MgKyBhYnNOdW1iZXIpO1xyXG59XHJcbiJdfQ==