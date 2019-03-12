/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?=} defaultValue
 * @return {?}
 */
export function OnChange(defaultValue) {
    var /** @type {?} */ sufix = 'Change';
    /* tslint:disable-next-line: no-any */
    return function OnChangeHandler(target, propertyKey) {
        var /** @type {?} */ _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /* tslint:disable-next-line: no-any */
            get: /**
             * @return {?}
             */
            function () {
                return this[_key];
            },
            /* tslint:disable-next-line: no-any */
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdXRpbHMvIiwic291cmNlcyI6WyJkZWNvcmF0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTSxtQkFBbUIsWUFBa0I7SUFDekMscUJBQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQzs7SUFHdkIsTUFBTSxDQUFDLHlCQUF5QixNQUFXLEVBQUUsV0FBbUI7UUFDOUQscUJBQU0sSUFBSSxHQUFHLFFBQU0sV0FBVyxVQUFPLENBQUM7UUFDdEMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFO1lBQ3pDLHNDQUFzQztZQUN0QyxHQUFHOzs7WUFBSDtnQkFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ25CO1lBQ0Qsc0NBQXNDO1lBQ3RDLEdBQUc7Ozs7WUFBSCxVQUFJLEtBQVU7Z0JBQ1oscUJBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsU0FBUyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckQsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3ZDO2FBQ0Y7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDO0NBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvKnRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpcyAqL1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG5leHBvcnQgZnVuY3Rpb24gT25DaGFuZ2UoZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcclxuICBjb25zdCBzdWZpeCA9ICdDaGFuZ2UnO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIHJldHVybiBmdW5jdGlvbiBPbkNoYW5nZUhhbmRsZXIodGFyZ2V0OiBhbnksIHByb3BlcnR5S2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IF9rZXkgPSBgIF9fJHtwcm9wZXJ0eUtleX1WYWx1ZWA7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwge1xyXG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gICAgICBnZXQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpc1tfa2V5XTtcclxuICAgICAgfSxcclxuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgICAgc2V0KHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBwcmV2VmFsdWUgPSB0aGlzW19rZXldO1xyXG4gICAgICAgIHRoaXNbX2tleV0gPSB2YWx1ZTtcclxuICAgICAgICBpZiAocHJldlZhbHVlICE9PSB2YWx1ZSAmJiB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdKSB7XHJcbiAgICAgICAgICB0aGlzW3Byb3BlcnR5S2V5ICsgc3VmaXhdLmVtaXQodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufVxyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcbiJdfQ==