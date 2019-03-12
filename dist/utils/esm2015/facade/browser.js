/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
const /** @type {?} */ win = (typeof window !== 'undefined' && window) || /** @type {?} */ ({});
export { win as window };
export const /** @type {?} */ document = win.document;
export const /** @type {?} */ location = win.location;
export const /** @type {?} */ gc = win.gc ? () => win.gc() : () => null;
export const /** @type {?} */ performance = win.performance ? win.performance : null;
export const /** @type {?} */ Event = win.Event;
export const /** @type {?} */ MouseEvent = win.MouseEvent;
export const /** @type {?} */ KeyboardEvent = win.KeyboardEvent;
export const /** @type {?} */ EventTarget = win.EventTarget;
export const /** @type {?} */ History = win.History;
export const /** @type {?} */ Location = win.Location;
export const /** @type {?} */ EventListener = win.EventListener;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJmYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV0EsdUJBQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxzQkFBSSxFQUFTLENBQUEsQ0FBQztBQUVuRSxPQUFPLEVBQUUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNyQyxNQUFNLENBQUMsdUJBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLHVCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxDQUFDLElBQUksQ0FBQztBQUM1RCxNQUFNLENBQUMsdUJBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUNwRSxNQUFNLENBQUMsdUJBQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7QUFDL0IsTUFBTSxDQUFDLHVCQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDO0FBQ3pDLE1BQU0sQ0FBQyx1QkFBTSxhQUFhLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztBQUMvQyxNQUFNLENBQUMsdUJBQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7QUFDM0MsTUFBTSxDQUFDLHVCQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO0FBQ25DLE1BQU0sQ0FBQyx1QkFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNyQyxNQUFNLENBQUMsdUJBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcclxuICovXHJcblxyXG4vKipcclxuICogSlMgdmVyc2lvbiBvZiBicm93c2VyIEFQSXMuIFRoaXMgbGlicmFyeSBjYW4gb25seSBydW4gaW4gdGhlIGJyb3dzZXIuXHJcbiAqL1xyXG5jb25zdCB3aW4gPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93KSB8fCB7fSBhcyBhbnk7XHJcblxyXG5leHBvcnQgeyB3aW4gYXMgd2luZG93IH07XHJcbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IHdpbi5kb2N1bWVudDtcclxuZXhwb3J0IGNvbnN0IGxvY2F0aW9uID0gd2luLmxvY2F0aW9uO1xyXG5leHBvcnQgY29uc3QgZ2MgPSB3aW4uZ2MgPyAoKSA9PiB3aW4uZ2MoKSA6ICgpOiBhbnkgPT4gbnVsbDtcclxuZXhwb3J0IGNvbnN0IHBlcmZvcm1hbmNlID0gd2luLnBlcmZvcm1hbmNlID8gd2luLnBlcmZvcm1hbmNlIDogbnVsbDtcclxuZXhwb3J0IGNvbnN0IEV2ZW50ID0gd2luLkV2ZW50O1xyXG5leHBvcnQgY29uc3QgTW91c2VFdmVudCA9IHdpbi5Nb3VzZUV2ZW50O1xyXG5leHBvcnQgY29uc3QgS2V5Ym9hcmRFdmVudCA9IHdpbi5LZXlib2FyZEV2ZW50O1xyXG5leHBvcnQgY29uc3QgRXZlbnRUYXJnZXQgPSB3aW4uRXZlbnRUYXJnZXQ7XHJcbmV4cG9ydCBjb25zdCBIaXN0b3J5ID0gd2luLkhpc3Rvcnk7XHJcbmV4cG9ydCBjb25zdCBMb2NhdGlvbiA9IHdpbi5Mb2NhdGlvbjtcclxuZXhwb3J0IGNvbnN0IEV2ZW50TGlzdGVuZXIgPSB3aW4uRXZlbnRMaXN0ZW5lcjtcclxuIl19