/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { window } from './facade/browser';
let /** @type {?} */ guessedVersion;
/**
 * @return {?}
 */
function _guessBsVersion() {
    if (typeof document === 'undefined') {
        return null;
    }
    const /** @type {?} */ spanEl = document.createElement('span');
    spanEl.innerText = 'test bs version';
    document.body.appendChild(spanEl);
    spanEl.classList.add('d-none');
    const /** @type {?} */ rect = spanEl.getBoundingClientRect();
    document.body.removeChild(spanEl);
    if (!rect) {
        return 'bs3';
    }
    return rect.top === 0 ? 'bs4' : 'bs3';
}
/**
 * @param {?} theme
 * @return {?}
 */
export function setTheme(theme) {
    guessedVersion = theme;
}
/**
 * @return {?}
 */
export function isBs3() {
    if (typeof window === 'undefined') {
        return true;
    }
    if (typeof window.__theme === 'undefined') {
        if (guessedVersion) {
            return guessedVersion === 'bs3';
        }
        guessedVersion = _guessBsVersion();
        return guessedVersion === 'bs3';
    }
    return window.__theme !== 'bs4';
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3V0aWxzLyIsInNvdXJjZXMiOlsidGhlbWUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUxQyxxQkFBSSxjQUE2QixDQUFDOzs7O0FBRWxDO0lBQ0UsRUFBRSxDQUFDLENBQUMsT0FBTyxRQUFRLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNwQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFDRCx1QkFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM5QyxNQUFNLENBQUMsU0FBUyxHQUFHLGlCQUFpQixDQUFDO0lBQ3JDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLHVCQUFNLElBQUksR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDVixNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0NBQ3ZDOzs7OztBQUVELE1BQU0sbUJBQW1CLEtBQW9CO0lBQzNDLGNBQWMsR0FBRyxLQUFLLENBQUM7Q0FDeEI7Ozs7QUFHRCxNQUFNO0lBQ0osRUFBRSxDQUFDLENBQUMsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2I7SUFFRCxFQUFFLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMxQyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxjQUFjLEtBQUssS0FBSyxDQUFDO1NBQ2pDO1FBQ0QsY0FBYyxHQUFHLGVBQWUsRUFBRSxDQUFDO1FBRW5DLE1BQU0sQ0FBQyxjQUFjLEtBQUssS0FBSyxDQUFDO0tBQ2pDO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEtBQUssS0FBSyxDQUFDO0NBQ2pDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2luZG93IH0gZnJvbSAnLi9mYWNhZGUvYnJvd3Nlcic7XHJcblxyXG5sZXQgZ3Vlc3NlZFZlcnNpb246ICdiczMnIHwgJ2JzNCc7XHJcblxyXG5mdW5jdGlvbiBfZ3Vlc3NCc1ZlcnNpb24oKTogJ2JzMycgfCAnYnM0JyB7XHJcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBjb25zdCBzcGFuRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgc3BhbkVsLmlubmVyVGV4dCA9ICd0ZXN0IGJzIHZlcnNpb24nO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3BhbkVsKTtcclxuICBzcGFuRWwuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgY29uc3QgcmVjdCA9IHNwYW5FbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNwYW5FbCk7XHJcbiAgaWYgKCFyZWN0KSB7XHJcbiAgICByZXR1cm4gJ2JzMyc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVjdC50b3AgPT09IDAgPyAnYnM0JyA6ICdiczMnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGhlbWUodGhlbWU6ICdiczMnIHwgJ2JzNCcpOiB2b2lkIHtcclxuICBndWVzc2VkVmVyc2lvbiA9IHRoZW1lO1xyXG59XHJcblxyXG4vLyB0b2RvOiBpbiBuZ3gtYm9vdHN0cmFwLCBiczQgd2lsbCBiZWNhbWUgYSBkZWZhdWx0IG9uZVxyXG5leHBvcnQgZnVuY3Rpb24gaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygd2luZG93Ll9fdGhlbWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICBpZiAoZ3Vlc3NlZFZlcnNpb24pIHtcclxuICAgICAgcmV0dXJuIGd1ZXNzZWRWZXJzaW9uID09PSAnYnMzJztcclxuICAgIH1cclxuICAgIGd1ZXNzZWRWZXJzaW9uID0gX2d1ZXNzQnNWZXJzaW9uKCk7XHJcblxyXG4gICAgcmV0dXJuIGd1ZXNzZWRWZXJzaW9uID09PSAnYnMzJztcclxuICB9XHJcblxyXG4gIHJldHVybiB3aW5kb3cuX190aGVtZSAhPT0gJ2JzNCc7XHJcbn1cclxuIl19