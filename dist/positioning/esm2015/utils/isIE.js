/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isBrowser } from './isBrowser';
const /** @type {?} */ isIE11 = isBrowser && !!((/** @type {?} */ (window)).MSInputMethodContext && (/** @type {?} */ (document)).documentMode);
const /** @type {?} */ isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * @param {?=} version
 * @return {?}
 */
export function isIE(version) {
    if (version === 11) {
        return isIE11;
    }
    if (version === 10) {
        return isIE10;
    }
    return isIE11 || isIE10;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNJRS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9pc0lFLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFHQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXhDLHVCQUFNLE1BQU0sR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQUMsTUFBYSxFQUFDLENBQUMsb0JBQW9CLElBQUksbUJBQUMsUUFBZSxFQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkcsdUJBQU0sTUFBTSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7QUFFaEUsTUFBTSxlQUFlLE9BQWdCO0lBQ25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZjtJQUNELEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDZjtJQUVELE1BQU0sQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDO0NBQ3pCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIERldGVybWluZXMgaWYgdGhlIGJyb3dzZXIgaXMgSW50ZXJuZXQgRXhwbG9yZXJcclxuICovXHJcbmltcG9ydCB7IGlzQnJvd3NlciB9IGZyb20gJy4vaXNCcm93c2VyJztcclxuXHJcbmNvbnN0IGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISgod2luZG93IGFzIGFueSkuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKTtcclxuY29uc3QgaXNJRTEwID0gaXNCcm93c2VyICYmIC9NU0lFIDEwLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSUUodmVyc2lvbj86IG51bWJlcikge1xyXG4gIGlmICh2ZXJzaW9uID09PSAxMSkge1xyXG4gICAgcmV0dXJuIGlzSUUxMTtcclxuICB9XHJcbiAgaWYgKHZlcnNpb24gPT09IDEwKSB7XHJcbiAgICByZXR1cm4gaXNJRTEwO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XHJcbn1cclxuIl19