/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var TimepickerActions = /** @class */ (function () {
    function TimepickerActions() {
    }
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeHours = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeMinutes = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    TimepickerActions.prototype.changeSeconds = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.setTime = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    TimepickerActions.prototype.updateControls = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    };
    TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
    TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
    TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
    TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
    TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
    TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
    TimepickerActions.decorators = [
        { type: Injectable }
    ];
    return TimepickerActions;
}());
export { TimepickerActions };
function TimepickerActions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimepickerActions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimepickerActions.ctorParameters;
    /** @type {?} */
    TimepickerActions.WRITE_VALUE;
    /** @type {?} */
    TimepickerActions.CHANGE_HOURS;
    /** @type {?} */
    TimepickerActions.CHANGE_MINUTES;
    /** @type {?} */
    TimepickerActions.CHANGE_SECONDS;
    /** @type {?} */
    TimepickerActions.SET_TIME_UNIT;
    /** @type {?} */
    TimepickerActions.UPDATE_CONTROLS;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7O0lBaUJ6QyxzQ0FBVTs7OztJQUFWLFVBQVcsS0FBb0I7UUFDN0IsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLEtBQXNCO1FBQ2hDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxZQUFZO1lBQ3BDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELHlDQUFhOzs7O0lBQWIsVUFBYyxLQUFzQjtRQUNsQyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsS0FBc0I7UUFDbEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsbUNBQU87Ozs7SUFBUCxVQUFRLEtBQVc7UUFDakIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGFBQWE7WUFDckMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLEtBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxlQUFlO1lBQ3ZDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIO29DQS9DNkIsd0NBQXdDO3FDQUN2QywyQkFBMkI7dUNBQ3pCLDZCQUE2Qjt1Q0FDN0IsNkJBQTZCO3NDQUM5Qiw0QkFBNEI7d0NBQzFCLDhCQUE4Qjs7Z0JBUGpFLFVBQVU7OzRCQVJYOztTQVNhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xyXG5pbXBvcnQge1xyXG4gIFRpbWVDaGFuZ2VFdmVudCxcclxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXHJcbiAgVGltZVxyXG59IGZyb20gJy4uL3RpbWVwaWNrZXIubW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJBY3Rpb25zIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgV1JJVEVfVkFMVUUgPSAnW3RpbWVwaWNrZXJdIHdyaXRlIHZhbHVlIGZyb20gbmcgbW9kZWwnO1xyXG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfSE9VUlMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBob3Vycyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9NSU5VVEVTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2UgbWludXRlcyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9TRUNPTkRTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2Ugc2Vjb25kcyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9USU1FX1VOSVQgPSAnW3RpbWVwaWNrZXJdIHNldCB0aW1lIHVuaXQnO1xyXG4gIHN0YXRpYyByZWFkb25seSBVUERBVEVfQ09OVFJPTFMgPSAnW3RpbWVwaWNrZXJdIHVwZGF0ZSBjb250cm9scyc7XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IERhdGUgfCBzdHJpbmcpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLldSSVRFX1ZBTFVFLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYW5nZUhvdXJzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9IT1VSUyxcclxuICAgICAgcGF5bG9hZDogZXZlbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNaW51dGVzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9NSU5VVEVTLFxyXG4gICAgICBwYXlsb2FkOiBldmVudFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVNlY29uZHMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUyxcclxuICAgICAgcGF5bG9hZDogZXZlbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZXRUaW1lKHZhbHVlOiBUaW1lKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLlNFVF9USU1FX1VOSVQsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQ29udHJvbHModmFsdWU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5VUERBVEVfQ09OVFJPTFMsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=