/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
export class BsDatepickerAbstractComponent {
    constructor() {
        this._customRangesFish = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minDate(value) {
        this._effects.setMinDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set maxDate(value) {
        this._effects.setMaxDate(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set daysDisabled(value) {
        this._effects.setDaysDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set datesDisabled(value) {
        this._effects.setDatesDisabled(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._effects.setDisabled(value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setViewMode(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    dayHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    weekHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthHoverHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearHoverHandler(event) { }
    /**
     * @param {?} day
     * @return {?}
     */
    daySelectHandler(day) { }
    /**
     * @param {?} event
     * @return {?}
     */
    monthSelectHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    yearSelectHandler(event) { }
    /**
     * @param {?} event
     * @return {?}
     */
    _stopPropagation(event) {
        event.stopPropagation();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJiYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFrQkEsTUFBTTs7aUNBS2lDLEVBQUU7Ozs7OztJQUV2QyxJQUFJLE9BQU8sQ0FBQyxLQUFXO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pDOzs7OztJQUVELElBQUksT0FBTyxDQUFDLEtBQVc7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDakM7Ozs7O0lBQ0QsSUFBSSxZQUFZLENBQUMsS0FBZTtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUN0Qzs7Ozs7SUFDRCxJQUFJLGFBQWEsQ0FBQyxLQUFhO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdkM7Ozs7O0lBRUQsSUFBSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNsQzs7Ozs7SUFRRCxXQUFXLENBQUMsS0FBMkIsS0FBVTs7Ozs7SUFFakQsVUFBVSxDQUFDLEtBQXdCLEtBQVU7Ozs7O0lBRTdDLGVBQWUsQ0FBQyxLQUFxQixLQUFVOzs7OztJQUUvQyxnQkFBZ0IsQ0FBQyxLQUFvQixLQUFVOzs7OztJQUUvQyxpQkFBaUIsQ0FBQyxLQUFxQixLQUFVOzs7OztJQUVqRCxnQkFBZ0IsQ0FBQyxLQUFxQixLQUFVOzs7OztJQUVoRCxnQkFBZ0IsQ0FBQyxHQUFpQixLQUFVOzs7OztJQUU1QyxrQkFBa0IsQ0FBQyxLQUE0QixLQUFVOzs7OztJQUV6RCxpQkFBaUIsQ0FBQyxLQUE0QixLQUFVOzs7OztJQUd4RCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN6QjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZGF0ZXBpY2tlciBjb250YWluZXIgY29tcG9uZW50XHJcbi8qIHRzbGludDpkaXNhYmxlOm5vLWVtcHR5ICovXHJcbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXMgfSBmcm9tICcuLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCxcclxuICBDZWxsSG92ZXJFdmVudCxcclxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgRGF5Vmlld01vZGVsLFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIFdlZWtWaWV3TW9kZWwsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQge1xyXG4gIGNvbnRhaW5lckNsYXNzOiBzdHJpbmc7XHJcbiAgaXNPdGhlck1vbnRoc0FjdGl2ZTogYm9vbGVhbjtcclxuXHJcbiAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHM7XHJcbiAgX2N1c3RvbVJhbmdlc0Zpc2g6IEJzQ3VzdG9tRGF0ZXNbXSA9IFtdO1xyXG5cclxuICBzZXQgbWluRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy5fZWZmZWN0cy5zZXRNaW5EYXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldCBtYXhEYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1heERhdGUodmFsdWUpO1xyXG4gIH1cclxuICBzZXQgZGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fZWZmZWN0cy5zZXREYXlzRGlzYWJsZWQodmFsdWUpO1xyXG4gIH1cclxuICBzZXQgZGF0ZXNEaXNhYmxlZCh2YWx1ZTogRGF0ZVtdKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldERhdGVzRGlzYWJsZWQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGlzYWJsZWQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xyXG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xyXG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xyXG5cclxuICBzZXRWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHt9XHJcblxyXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkYXlIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxyXG5cclxuICB3ZWVrSG92ZXJIYW5kbGVyKGV2ZW50OiBXZWVrVmlld01vZGVsKTogdm9pZCB7fVxyXG5cclxuICBtb250aEhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIHllYXJIb3ZlckhhbmRsZXIoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCB7fVxyXG5cclxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7fVxyXG5cclxuICBtb250aFNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cclxuXHJcbiAgeWVhclNlbGVjdEhhbmRsZXIoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge31cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBfc3RvcFByb3BhZ2F0aW9uKGV2ZW50OiBhbnkpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxufVxyXG4iXX0=