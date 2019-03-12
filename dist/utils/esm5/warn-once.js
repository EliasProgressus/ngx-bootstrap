/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { isDevMode } from '@angular/core';
var /** @type {?} */ _messagesHash = {};
var /** @type {?} */ _hideMsg = typeof console === 'undefined' || !('warn' in console);
/**
 * @param {?} msg
 * @return {?}
 */
export function warnOnce(msg) {
    if (!isDevMode() || _hideMsg || msg in _messagesHash) {
        return;
    }
    _messagesHash[msg] = true;
    /*tslint:disable-next-line*/
    console.warn(msg);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Fybi1vbmNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC91dGlscy8iLCJzb3VyY2VzIjpbIndhcm4tb25jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxxQkFBTSxhQUFhLEdBQStCLEVBQUUsQ0FBQztBQUNyRCxxQkFBTSxRQUFRLEdBQUcsT0FBTyxPQUFPLEtBQUssV0FBVyxJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUM7Ozs7O0FBRXhFLE1BQU0sbUJBQW1CLEdBQVc7SUFDbEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxRQUFRLElBQUksR0FBRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDO0tBQ1I7SUFFRCxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDOztJQUUxQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0NBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmNvbnN0IF9tZXNzYWdlc0hhc2g6IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge307XHJcbmNvbnN0IF9oaWRlTXNnID0gdHlwZW9mIGNvbnNvbGUgPT09ICd1bmRlZmluZWQnIHx8ICEoJ3dhcm4nIGluIGNvbnNvbGUpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5PbmNlKG1zZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgaWYgKCFpc0Rldk1vZGUoKSB8fCBfaGlkZU1zZyB8fCBtc2cgaW4gX21lc3NhZ2VzSGFzaCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgX21lc3NhZ2VzSGFzaFttc2ddID0gdHJ1ZTtcclxuICAvKnRzbGludDpkaXNhYmxlLW5leHQtbGluZSovXHJcbiAgY29uc29sZS53YXJuKG1zZyk7XHJcbn1cclxuIl19