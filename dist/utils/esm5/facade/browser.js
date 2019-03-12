/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var /** @type {?} */ win = (typeof window !== 'undefined' && window) || /** @type {?} */ ({});
export { win as window };
export var /** @type {?} */ document = win.document;
export var /** @type {?} */ location = win.location;
export var /** @type {?} */ gc = win.gc ? function () { return win.gc(); } : function () { return null; };
export var /** @type {?} */ performance = win.performance ? win.performance : null;
export var /** @type {?} */ Event = win.Event;
export var /** @type {?} */ MouseEvent = win.MouseEvent;
export var /** @type {?} */ KeyboardEvent = win.KeyboardEvent;
export var /** @type {?} */ EventTarget = win.EventTarget;
export var /** @type {?} */ History = win.History;
export var /** @type {?} */ Location = win.Location;
export var /** @type {?} */ EventListener = win.EventListener;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJmYWNhZGUvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBV0EscUJBQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxzQkFBSSxFQUFTLENBQUEsQ0FBQztBQUVuRSxPQUFPLEVBQUUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO0FBQ3pCLE1BQU0sQ0FBQyxxQkFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztBQUNyQyxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLHFCQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFNLE9BQUEsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFSLENBQVEsQ0FBQyxDQUFDLENBQUMsY0FBVyxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7QUFDNUQsTUFBTSxDQUFDLHFCQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDcEUsTUFBTSxDQUFDLHFCQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQy9CLE1BQU0sQ0FBQyxxQkFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUN6QyxNQUFNLENBQUMscUJBQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDL0MsTUFBTSxDQUFDLHFCQUFNLFdBQVcsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQzNDLE1BQU0sQ0FBQyxxQkFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUNuQyxNQUFNLENBQUMscUJBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7QUFDckMsTUFBTSxDQUFDLHFCQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEpTIHZlcnNpb24gb2YgYnJvd3NlciBBUElzLiBUaGlzIGxpYnJhcnkgY2FuIG9ubHkgcnVuIGluIHRoZSBicm93c2VyLlxyXG4gKi9cclxuY29uc3Qgd2luID0gKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykgfHwge30gYXMgYW55O1xyXG5cclxuZXhwb3J0IHsgd2luIGFzIHdpbmRvdyB9O1xyXG5leHBvcnQgY29uc3QgZG9jdW1lbnQgPSB3aW4uZG9jdW1lbnQ7XHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvbiA9IHdpbi5sb2NhdGlvbjtcclxuZXhwb3J0IGNvbnN0IGdjID0gd2luLmdjID8gKCkgPT4gd2luLmdjKCkgOiAoKTogYW55ID0+IG51bGw7XHJcbmV4cG9ydCBjb25zdCBwZXJmb3JtYW5jZSA9IHdpbi5wZXJmb3JtYW5jZSA/IHdpbi5wZXJmb3JtYW5jZSA6IG51bGw7XHJcbmV4cG9ydCBjb25zdCBFdmVudCA9IHdpbi5FdmVudDtcclxuZXhwb3J0IGNvbnN0IE1vdXNlRXZlbnQgPSB3aW4uTW91c2VFdmVudDtcclxuZXhwb3J0IGNvbnN0IEtleWJvYXJkRXZlbnQgPSB3aW4uS2V5Ym9hcmRFdmVudDtcclxuZXhwb3J0IGNvbnN0IEV2ZW50VGFyZ2V0ID0gd2luLkV2ZW50VGFyZ2V0O1xyXG5leHBvcnQgY29uc3QgSGlzdG9yeSA9IHdpbi5IaXN0b3J5O1xyXG5leHBvcnQgY29uc3QgTG9jYXRpb24gPSB3aW4uTG9jYXRpb247XHJcbmV4cG9ydCBjb25zdCBFdmVudExpc3RlbmVyID0gd2luLkV2ZW50TGlzdGVuZXI7XHJcbiJdfQ==