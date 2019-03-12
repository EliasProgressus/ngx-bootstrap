/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @param {?} element
 * @return {?}
 */
export function getOuterSizes(element) {
    const /** @type {?} */ window = element.ownerDocument.defaultView;
    const /** @type {?} */ styles = window.getComputedStyle(element);
    const /** @type {?} */ x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
    const /** @type {?} */ y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
    return {
        width: Number(element.offsetWidth) + y,
        height: Number(element.offsetHeight) + x
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3V0ZXJTaXplcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRPdXRlclNpemVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQU0sd0JBQXdCLE9BQVk7SUFDeEMsdUJBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2pELHVCQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEQsdUJBQU0sQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ25GLHVCQUFNLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUVuRixNQUFNLENBQUM7UUFDTCxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO1FBQ3RDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7S0FDekMsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRPdXRlclNpemVzKGVsZW1lbnQ6IGFueSkge1xyXG4gIGNvbnN0IHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcclxuICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcclxuICBjb25zdCB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xyXG4gIGNvbnN0IHkgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0IHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luUmlnaHQgfHwgMCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB3aWR0aDogTnVtYmVyKGVsZW1lbnQub2Zmc2V0V2lkdGgpICsgeSxcclxuICAgIGhlaWdodDogTnVtYmVyKGVsZW1lbnQub2Zmc2V0SGVpZ2h0KSArIHhcclxuICB9O1xyXG59XHJcbiJdfQ==