/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
var BsDatepickerActions = /** @class */ (function () {
    function BsDatepickerActions() {
    }
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.calculate = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.CALCULATE };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.format = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FORMAT };
    };
    /**
     * @return {?}
     */
    BsDatepickerActions.prototype.flag = /**
     * @return {?}
     */
    function () {
        return { type: BsDatepickerActions.FLAG };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.select = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.changeViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    };
    /**
     * @param {?} step
     * @return {?}
     */
    BsDatepickerActions.prototype.navigateStep = /**
     * @param {?} step
     * @return {?}
     */
    function (step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    };
    /**
     * @param {?} options
     * @return {?}
     */
    BsDatepickerActions.prototype.setOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    };
    // date range picker
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.selectRange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerActions.prototype.hoverDay = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.minDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    BsDatepickerActions.prototype.maxDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    };
    /**
     * @param {?} days
     * @return {?}
     */
    BsDatepickerActions.prototype.daysDisabled = /**
     * @param {?} days
     * @return {?}
     */
    function (days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    };
    /**
     * @param {?} dates
     * @return {?}
     */
    BsDatepickerActions.prototype.datesDisabled = /**
     * @param {?} dates
     * @return {?}
     */
    function (dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    BsDatepickerActions.prototype.isDisabled = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    };
    /**
     * @param {?} locale
     * @return {?}
     */
    BsDatepickerActions.prototype.setLocale = /**
     * @param {?} locale
     * @return {?}
     */
    function (locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    };
    BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
    BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
    BsDatepickerActions.FLAG = '[datepicker] set flags';
    BsDatepickerActions.SELECT = '[datepicker] select date';
    BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
    BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
    BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
    BsDatepickerActions.HOVER = '[datepicker] hover date';
    BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
    BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
    BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
    BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
    BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
    BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
    BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
    BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
    BsDatepickerActions.decorators = [
        { type: Injectable }
    ];
    return BsDatepickerActions;
}());
export { BsDatepickerActions };
function BsDatepickerActions_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerActions.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerActions.ctorParameters;
    /** @type {?} */
    BsDatepickerActions.CALCULATE;
    /** @type {?} */
    BsDatepickerActions.FORMAT;
    /** @type {?} */
    BsDatepickerActions.FLAG;
    /** @type {?} */
    BsDatepickerActions.SELECT;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_OFFSET;
    /** @type {?} */
    BsDatepickerActions.NAVIGATE_TO;
    /** @type {?} */
    BsDatepickerActions.SET_OPTIONS;
    /** @type {?} */
    BsDatepickerActions.HOVER;
    /** @type {?} */
    BsDatepickerActions.CHANGE_VIEWMODE;
    /** @type {?} */
    BsDatepickerActions.SET_MIN_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_MAX_DATE;
    /** @type {?} */
    BsDatepickerActions.SET_DAYSDISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_DATESDISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_IS_DISABLED;
    /** @type {?} */
    BsDatepickerActions.SET_LOCALE;
    /** @type {?} */
    BsDatepickerActions.SELECT_RANGE;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5hY3Rpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUFnQ3pDLHVDQUFTOzs7SUFBVDtRQUNFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNoRDs7OztJQUVELG9DQUFNOzs7SUFBTjtRQUNFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUM3Qzs7OztJQUVELGtDQUFJOzs7SUFBSjtRQUNFLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMzQzs7Ozs7SUFFRCxvQ0FBTTs7OztJQUFOLFVBQU8sSUFBVTtRQUNmLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxNQUFNO1lBQ2hDLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQztLQUNIOzs7OztJQUVELDRDQUFjOzs7O0lBQWQsVUFBZSxLQUEyQjtRQUN4QyxNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsZUFBZTtZQUN6QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCx3Q0FBVTs7OztJQUFWLFVBQVcsS0FBNEI7UUFDckMsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFdBQVc7WUFDckMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLElBQWM7UUFDekIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGVBQWU7WUFDekMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0g7Ozs7O0lBRUQsd0NBQVU7Ozs7SUFBVixVQUFXLE9BQWdDO1FBQ3pDLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxXQUFXO1lBQ3JDLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUM7S0FDSDtJQUVELG9CQUFvQjs7Ozs7SUFDcEIseUNBQVc7Ozs7SUFBWCxVQUFZLEtBQWE7UUFDdkIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7WUFDdEMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsc0NBQVE7Ozs7SUFBUixVQUFTLEtBQXFCO1FBQzVCLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxLQUFLO1lBQy9CLE9BQU8sRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNsRCxDQUFDO0tBQ0g7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLElBQVU7UUFDaEIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7WUFDdEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0g7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLElBQVU7UUFDaEIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLFlBQVk7WUFDdEMsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDO0tBQ0g7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLElBQWM7UUFDekIsTUFBTSxDQUFDO1lBQ0wsSUFBSSxFQUFFLG1CQUFtQixDQUFDLGdCQUFnQjtZQUMxQyxPQUFPLEVBQUUsSUFBSTtTQUNkLENBQUM7S0FDSDs7Ozs7SUFFRCwyQ0FBYTs7OztJQUFiLFVBQWMsS0FBYTtRQUN6QixNQUFNLENBQUM7WUFDTCxJQUFJLEVBQUUsbUJBQW1CLENBQUMsaUJBQWlCO1lBQzNDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELHdDQUFVOzs7O0lBQVYsVUFBVyxLQUFjO1FBQ3ZCLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxlQUFlO1lBQ3pDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxNQUFjO1FBQ3RCLE1BQU0sQ0FBQztZQUNMLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3BDLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUM7S0FDSDtvQ0ExSDJCLHFDQUFxQztpQ0FDeEMsdUNBQXVDOytCQUN6Qyx3QkFBd0I7aUNBQ3RCLDBCQUEwQjswQ0FDakIsOEJBQThCO3NDQUNsQywrQkFBK0I7c0NBQy9CLG9DQUFvQztnQ0FDMUMseUJBQXlCOzBDQUNmLCtCQUErQjt1Q0FFbEMsMkJBQTJCO3VDQUMzQiwyQkFBMkI7MkNBQ3ZCLGdDQUFnQzs0Q0FDL0IsaUNBQWlDOzBDQUNuQyw4QkFBOEI7cUNBRW5DLG9DQUFvQzt1Q0FFbEMsc0NBQXNDOztnQkFwQnRFLFVBQVU7OzhCQVZYOztTQVdhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNWaWV3TmF2aWdhdGlvbkV2ZW50LFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckFjdGlvbnMge1xyXG4gIHN0YXRpYyByZWFkb25seSBDQUxDVUxBVEUgPSAnW2RhdGVwaWNrZXJdIGNhbGN1bGF0ZSBkYXRlcyBtYXRyaXgnO1xyXG4gIHN0YXRpYyByZWFkb25seSBGT1JNQVQgPSAnW2RhdGVwaWNrZXJdIGZvcm1hdCBkYXRlcGlja2VyIHZhbHVlcyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEZMQUcgPSAnW2RhdGVwaWNrZXJdIHNldCBmbGFncyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVCA9ICdbZGF0ZXBpY2tlcl0gc2VsZWN0IGRhdGUnO1xyXG4gIHN0YXRpYyByZWFkb25seSBOQVZJR0FURV9PRkZTRVQgPSAnW2RhdGVwaWNrZXJdIHNoaWZ0IHZpZXcgZGF0ZSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX1RPID0gJ1tkYXRlcGlja2VyXSBjaGFuZ2UgdmlldyBkYXRlJztcclxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX09QVElPTlMgPSAnW2RhdGVwaWNrZXJdIHVwZGF0ZSByZW5kZXIgb3B0aW9ucyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEhPVkVSID0gJ1tkYXRlcGlja2VyXSBob3ZlciBkYXRlJztcclxuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1ZJRVdNT0RFID0gJ1tkYXRlcGlja2VyXSBzd2l0Y2ggdmlldyBtb2RlJztcclxuXHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9NSU5fREFURSA9ICdbZGF0ZXBpY2tlcl0gc2V0IG1pbiBkYXRlJztcclxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01BWF9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWF4IGRhdGUnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfREFZU0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF5cyBkaXNhYmxlZCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9EQVRFU0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXMgZGlzYWJsZWQnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfSVNfRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBpcyBkaXNhYmxlZCc7XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfTE9DQUxFID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXBpY2tlciBsb2NhbGUnO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgU0VMRUNUX1JBTkdFID0gJ1tkYXRlcmFuZ2VwaWNrZXJdIHNlbGVjdCBkYXRlcyByYW5nZSc7XHJcblxyXG4gIGNhbGN1bGF0ZSgpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DQUxDVUxBVEUgfTtcclxuICB9XHJcblxyXG4gIGZvcm1hdCgpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5GT1JNQVQgfTtcclxuICB9XHJcblxyXG4gIGZsYWcoKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRyB9O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1QsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREUsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUbyhldmVudDogQnNWaWV3TmF2aWdhdGlvbkV2ZW50KTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfVE8sXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVTdGVwKHN0ZXA6IFRpbWVVbml0KTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VULFxyXG4gICAgICBwYXlsb2FkOiBzdGVwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TLFxyXG4gICAgICBwYXlsb2FkOiBvcHRpb25zXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcclxuICBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUX1JBTkdFLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhvdmVyRGF5KGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSLFxyXG4gICAgICBwYXlsb2FkOiBldmVudC5pc0hvdmVyZWQgPyBldmVudC5jZWxsLmRhdGUgOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWluRGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01JTl9EQVRFLFxyXG4gICAgICBwYXlsb2FkOiBkYXRlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWF4RGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01BWF9EQVRFLFxyXG4gICAgICBwYXlsb2FkOiBkYXRlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGF5c0Rpc2FibGVkKGRheXM6IG51bWJlcltdKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBWVNESVNBQkxFRCxcclxuICAgICAgcGF5bG9hZDogZGF5c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGRhdGVzRGlzYWJsZWQoZGF0ZXM6IERhdGVbXSk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9EQVRFU0RJU0FCTEVELFxyXG4gICAgICBwYXlsb2FkOiBkYXRlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfSVNfRElTQUJMRUQsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0xPQ0FMRSxcclxuICAgICAgcGF5bG9hZDogbG9jYWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=