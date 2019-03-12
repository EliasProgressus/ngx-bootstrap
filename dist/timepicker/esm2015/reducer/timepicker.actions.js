/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class TimepickerActions {
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeHours(event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeMinutes(event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeSeconds(event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTime(value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateControls(value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    }
}
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
TimepickerActions.decorators = [
    { type: Injectable }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTM0MsTUFBTTs7Ozs7SUFRSixVQUFVLENBQUMsS0FBb0I7UUFDN0IsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFdBQVc7WUFDbkMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQXNCO1FBQ2hDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxZQUFZO1lBQ3BDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFzQjtRQUNsQyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBc0I7UUFDbEMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsT0FBTyxDQUFDLEtBQVc7UUFDakIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGFBQWE7WUFDckMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsY0FBYyxDQUFDLEtBQStCO1FBQzVDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxlQUFlO1lBQ3ZDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOztnQ0EvQzZCLHdDQUF3QztpQ0FDdkMsMkJBQTJCO21DQUN6Qiw2QkFBNkI7bUNBQzdCLDZCQUE2QjtrQ0FDOUIsNEJBQTRCO29DQUMxQiw4QkFBOEI7O1lBUGpFLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcclxuaW1wb3J0IHtcclxuICBUaW1lQ2hhbmdlRXZlbnQsXHJcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxyXG4gIFRpbWVcclxufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQWN0aW9ucyB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFdSSVRFX1ZBTFVFID0gJ1t0aW1lcGlja2VyXSB3cml0ZSB2YWx1ZSBmcm9tIG5nIG1vZGVsJztcclxuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0hPVVJTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2UgaG91cnMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfTUlOVVRFUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIG1pbnV0ZXMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfU0VDT05EUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIHNlY29uZHMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfVElNRV9VTklUID0gJ1t0aW1lcGlja2VyXSBzZXQgdGltZSB1bml0JztcclxuICBzdGF0aWMgcmVhZG9ubHkgVVBEQVRFX0NPTlRST0xTID0gJ1t0aW1lcGlja2VyXSB1cGRhdGUgY29udHJvbHMnO1xyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5XUklURV9WQUxVRSxcclxuICAgICAgcGF5bG9hZDogdmFsdWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VIb3VycyhldmVudDogVGltZUNoYW5nZUV2ZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfSE9VUlMsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTWludXRlcyhldmVudDogVGltZUNoYW5nZUV2ZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfTUlOVVRFUyxcclxuICAgICAgcGF5bG9hZDogZXZlbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTZWNvbmRzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1NFQ09ORFMsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VGltZSh2YWx1ZTogVGltZSk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklULFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRyb2xzKHZhbHVlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuVVBEQVRFX0NPTlRST0xTLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19