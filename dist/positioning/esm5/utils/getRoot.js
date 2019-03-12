/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @param {?} node
 * @return {?}
 */
export function getRoot(node) {
    if (node.parentNode !== null) {
        return getRoot(node.parentNode);
    }
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0Um9vdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcG9zaXRpb25pbmcvIiwic291cmNlcyI6WyJ1dGlscy9nZXRSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUdBLE1BQU0sa0JBQWtCLElBQVU7SUFDaEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ2pDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSb290KG5vZGU6IE5vZGUpOiBhbnkge1xyXG4gIGlmIChub2RlLnBhcmVudE5vZGUgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbm9kZTtcclxufVxyXG4iXX0=