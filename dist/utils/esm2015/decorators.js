/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
export function OnChange(defaultValue) {
    const /** @type {?} */ sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return function OnChangeHandler(target, propertyKey) {
        const /** @type {?} */ _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get() {
                return this[_key];
            },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                const /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJkZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxtQkFBbUIsWUFBa0I7SUFDekMsdUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQzs7SUFHdkIsTUFBTSxDQUFDLHlCQUF5QixNQUFXLEVBQUUsV0FBbUI7UUFDOUQsdUJBQU0sSUFBSSxHQUFHLE1BQU0sV0FBVyxPQUFPLENBQUM7UUFDdEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFOzs7O1lBRXpDLEdBQUc7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNuQjs7Ozs7WUFFRCxHQUFHLENBQUMsS0FBVTtnQkFDWix1QkFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNuQixFQUFFLENBQUMsQ0FBQyxTQUFTLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkM7YUFDRjtTQUNGLENBQUMsQ0FBQztLQUNKLENBQUM7Q0FDSCIsInNvdXJjZXNDb250ZW50IjpbIi8qdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzICovXHJcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBPbkNoYW5nZShkZWZhdWx0VmFsdWU/OiBhbnkpOiBhbnkge1xyXG4gIGNvbnN0IHN1Zml4ID0gJ0NoYW5nZSc7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgcmV0dXJuIGZ1bmN0aW9uIE9uQ2hhbmdlSGFuZGxlcih0YXJnZXQ6IGFueSwgcHJvcGVydHlLZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgX2tleSA9IGAgX18ke3Byb3BlcnR5S2V5fVZhbHVlYDtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCB7XHJcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICAgIGdldCgpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzW19rZXldO1xyXG4gICAgICB9LFxyXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgICBzZXQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHByZXZWYWx1ZSA9IHRoaXNbX2tleV07XHJcbiAgICAgICAgdGhpc1tfa2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIGlmIChwcmV2VmFsdWUgIT09IHZhbHVlICYmIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0pIHtcclxuICAgICAgICAgIHRoaXNbcHJvcGVydHlLZXkgKyBzdWZpeF0uZW1pdCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcbi8qIHRzbGludDplbmFibGUgKi9cclxuIl19