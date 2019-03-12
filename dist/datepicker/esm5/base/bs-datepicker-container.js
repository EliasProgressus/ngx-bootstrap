/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BsDatepickerAbstractComponent = /** @class */ (function () {
    function BsDatepickerAbstractComponent() {
        this._customRangesFish = [];
    }
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMinDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setMaxDate(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDaysDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDatesDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effects.setDisabled(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.setViewMode = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.navigateTo = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.dayHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.weekHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearHoverHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} day
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.daySelectHandler = /**
     * @param {?} day
     * @return {?}
     */
    function (day) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.monthSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype.yearSelectHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) { };
    /* tslint:disable-next-line: no-any */
    /**
     * @param {?} event
     * @return {?}
     */
    BsDatepickerAbstractComponent.prototype._stopPropagation = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.stopPropagation();
    };
    return BsDatepickerAbstractComponent;
}());
/**
 * @abstract
 */
export { BsDatepickerAbstractComponent };
function BsDatepickerAbstractComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.containerClass;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.isOtherMonthsActive;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype._effects;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype._customRangesFish;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.viewMode;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.daysCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.yearsCalendar;
    /** @type {?} */
    BsDatepickerAbstractComponent.prototype.options;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJiYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkE7OztBQUFBOztpQ0FLdUMsRUFBRTs7SUFFdkMsc0JBQUksa0RBQU87Ozs7O1FBQVgsVUFBWSxLQUFXO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ2pDOzs7T0FBQTtJQUVELHNCQUFJLGtEQUFPOzs7OztRQUFYLFVBQVksS0FBVztZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQzs7O09BQUE7SUFDRCxzQkFBSSx1REFBWTs7Ozs7UUFBaEIsVUFBaUIsS0FBZTtZQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0Qzs7O09BQUE7SUFDRCxzQkFBSSx3REFBYTs7Ozs7UUFBakIsVUFBa0IsS0FBYTtZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDOzs7T0FBQTtJQUVELHNCQUFJLHFEQUFVOzs7OztRQUFkLFVBQWUsS0FBYztZQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsQzs7O09BQUE7Ozs7O0lBUUQsbURBQVc7Ozs7SUFBWCxVQUFZLEtBQTJCLEtBQVU7Ozs7O0lBRWpELGtEQUFVOzs7O0lBQVYsVUFBVyxLQUF3QixLQUFVOzs7OztJQUU3Qyx1REFBZTs7OztJQUFmLFVBQWdCLEtBQXFCLEtBQVU7Ozs7O0lBRS9DLHdEQUFnQjs7OztJQUFoQixVQUFpQixLQUFvQixLQUFVOzs7OztJQUUvQyx5REFBaUI7Ozs7SUFBakIsVUFBa0IsS0FBcUIsS0FBVTs7Ozs7SUFFakQsd0RBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQXFCLEtBQVU7Ozs7O0lBRWhELHdEQUFnQjs7OztJQUFoQixVQUFpQixHQUFpQixLQUFVOzs7OztJQUU1QywwREFBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBNEIsS0FBVTs7Ozs7SUFFekQseURBQWlCOzs7O0lBQWpCLFVBQWtCLEtBQTRCLEtBQVU7SUFFeEQsc0NBQXNDOzs7OztJQUN0Qyx3REFBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBVTtRQUN6QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7S0FDekI7d0NBdEVIO0lBdUVDLENBQUE7Ozs7QUFyREQseUNBcURDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGF0ZXBpY2tlciBjb250YWluZXIgY29tcG9uZW50XHJcbi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXHJcbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXMgfSBmcm9tICcuLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcclxuICBDZWxsSG92ZXJFdmVudCxcclxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgRGF5Vmlld01vZGVsLFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIFdlZWtWaWV3TW9kZWwsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQge1xyXG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XHJcbiAgaXNPdGhlck1vbnRoc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHM7XHJcbiAgX2N1c3RvbVJhbmdlc0Zpc2g6IEJzQ3VzdG9tRGF0ZXNbXSA9IFtdO1xyXG5cclxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy5fZWZmZWN0cy5zZXRNaW5EYXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1heERhdGUodmFsdWUpO1xyXG4gIH1cclxuICBzZXQgZGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXlzRGlzYWJsZWQodmFsdWUpO1xyXG4gIH1cclxuICBzZXQgZGF0ZXNEaXNhYmxlZCh2YWx1ZTogRGF0ZVtdKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVzRGlzYWJsZWQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGlzYWJsZWQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xyXG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xyXG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xyXG5cclxuICBzZXRWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHt9XHJcblxyXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkYXlIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxyXG5cclxuICB3ZWVrSG92ZXJIYW5kbGVyKGV2ZW50OiBXZWVrVmlld01vZGVsKTogdm9pZCB7fVxyXG5cclxuICBtb250aEhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIHllYXJIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7fVxyXG5cclxuICBtb250aFNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cclxuXHJcbiAgeWVhclNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBfc3RvcFByb3BhZ2F0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxufVxyXG4iXX0=