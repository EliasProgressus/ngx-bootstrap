/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DateFormatter } from './date-formatter';
export class DatePickerInnerComponent {
    constructor() {
        this.selectionDone = new EventEmitter(undefined);
        this.update = new EventEmitter(false);
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.stepDay = {};
        /* tslint:disable-next-line: no-any*/
        this.stepMonth = {};
        /* tslint:disable-next-line: no-any*/
        this.stepYear = {};
        this.modes = ['day', 'month', 'year'];
        this.dateFormatter = new DateFormatter();
    }
    /**
     * @return {?}
     */
    get activeDate() {
        return this._activeDate;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // todo: use date for unique value
        this.uniqueId = `datepicker--${Math.floor(Math.random() * 10000)}`;
        if (this.initDate) {
            this.activeDate = this.initDate;
            this.selectedDate = new Date(this.activeDate.valueOf());
            this.update.emit(this.activeDate);
        }
        else if (this.activeDate === undefined) {
            this.activeDate = new Date();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.refreshView();
        this.checkIfActiveDateGotUpdated(changes["activeDate"]);
    }
    /**
     * @param {?} activeDate
     * @return {?}
     */
    checkIfActiveDateGotUpdated(activeDate) {
        if (activeDate && !activeDate.firstChange) {
            const /** @type {?} */ previousValue = activeDate.previousValue;
            if (previousValue &&
                previousValue instanceof Date &&
                previousValue.getTime() !== activeDate.currentValue.getTime()) {
                this.activeDateChange.emit(this.activeDate);
            }
        }
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setCompareHandler(handler, type) {
        if (type === 'day') {
            this.compareHandlerDay = handler;
        }
        if (type === 'month') {
            this.compareHandlerMonth = handler;
        }
        if (type === 'year') {
            this.compareHandlerYear = handler;
        }
    }
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */
    compare(date1, date2) {
        if (date1 === undefined || date2 === undefined) {
            return undefined;
        }
        if (this.datepickerMode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1, date2);
        }
        if (this.datepickerMode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1, date2);
        }
        if (this.datepickerMode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1, date2);
        }
        return void 0;
    }
    /**
     * @param {?} handler
     * @param {?} type
     * @return {?}
     */
    setRefreshViewHandler(handler, type) {
        if (type === 'day') {
            this.refreshViewHandlerDay = handler;
        }
        if (type === 'month') {
            this.refreshViewHandlerMonth = handler;
        }
        if (type === 'year') {
            this.refreshViewHandlerYear = handler;
        }
    }
    /**
     * @return {?}
     */
    refreshView() {
        if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
            this.refreshViewHandlerDay();
        }
        if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
            this.refreshViewHandlerMonth();
        }
        if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
            this.refreshViewHandlerYear();
        }
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    dateFilter(date, format) {
        return this.dateFormatter.format(date, format, this.locale);
    }
    /**
     * @param {?} dateObject
     * @return {?}
     */
    isActive(dateObject) {
        if (this.compare(dateObject.date, this.activeDate) === 0) {
            this.activeDateId = dateObject.uid;
            return true;
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} format
     * @return {?}
     */
    createDateObject(date, format) {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ dateObject = {};
        dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        dateObject.date = this.fixTimeZone(dateObject.date);
        dateObject.label = this.dateFilter(date, format);
        dateObject.selected = this.compare(date, this.selectedDate) === 0;
        dateObject.disabled = this.isDisabled(date);
        dateObject.current = this.compare(date, new Date()) === 0;
        dateObject.customClass = this.getCustomClassForDate(dateObject.date);
        return dateObject;
    }
    /**
     * @param {?} arr
     * @param {?} size
     * @return {?}
     */
    split(arr, size) {
        /* tslint:disable-next-line: no-any*/
        const /** @type {?} */ arrays = [];
        while (arr.length > 0) {
            arrays.push(arr.splice(0, size));
        }
        return arrays;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    fixTimeZone(date) {
        const /** @type {?} */ hours = date.getHours();
        return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
    }
    /**
     * @param {?} date
     * @param {?=} isManual
     * @return {?}
     */
    select(date, isManual = true) {
        if (this.datepickerMode === this.minMode) {
            if (!this.activeDate) {
                this.activeDate = new Date(0, 0, 0, 0, 0, 0, 0);
            }
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.selectionDone.emit(this.activeDate);
            }
        }
        else {
            this.activeDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.activeDate = this.fixTimeZone(this.activeDate);
            if (isManual) {
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) - 1];
            }
        }
        this.selectedDate = new Date(this.activeDate.valueOf());
        this.update.emit(this.activeDate);
        this.refreshView();
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    move(direction) {
        /* tslint:disable-next-line: no-any*/
        let /** @type {?} */ expectedStep;
        if (this.datepickerMode === 'day') {
            expectedStep = this.stepDay;
        }
        if (this.datepickerMode === 'month') {
            expectedStep = this.stepMonth;
        }
        if (this.datepickerMode === 'year') {
            expectedStep = this.stepYear;
        }
        if (expectedStep) {
            const /** @type {?} */ year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
            const /** @type {?} */ month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
            this.activeDate = new Date(year, month, 1);
            this.refreshView();
            this.activeDateChange.emit(this.activeDate);
        }
    }
    /**
     * @param {?} _direction
     * @return {?}
     */
    toggleMode(_direction) {
        const /** @type {?} */ direction = _direction || 1;
        if ((this.datepickerMode === this.maxMode && direction === 1) ||
            (this.datepickerMode === this.minMode && direction === -1)) {
            return;
        }
        this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
        this.refreshView();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getCustomClassForDate(date) {
        if (!this.customClass) {
            return '';
        }
        // todo: build a hash of custom classes, it will work faster
        const /** @type {?} */ customClassObject = this.customClass.find((customClass) => {
            return (customClass.date.valueOf() === date.valueOf() &&
                customClass.mode === this.datepickerMode);
        }, this);
        return customClassObject === undefined ? '' : customClassObject.clazz;
    }
    /**
     * @param {?} date1Disabled
     * @param {?} date2
     * @return {?}
     */
    compareDateDisabled(date1Disabled, date2) {
        if (date1Disabled === undefined || date2 === undefined) {
            return undefined;
        }
        if (date1Disabled.mode === 'day' && this.compareHandlerDay) {
            return this.compareHandlerDay(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'month' && this.compareHandlerMonth) {
            return this.compareHandlerMonth(date1Disabled.date, date2);
        }
        if (date1Disabled.mode === 'year' && this.compareHandlerYear) {
            return this.compareHandlerYear(date1Disabled.date, date2);
        }
        return undefined;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isDisabled(date) {
        let /** @type {?} */ isDateDisabled = false;
        if (this.dateDisabled) {
            this.dateDisabled.forEach((disabledDate) => {
                if (this.compareDateDisabled(disabledDate, date) === 0) {
                    isDateDisabled = true;
                }
            });
        }
        if (this.dayDisabled) {
            isDateDisabled =
                isDateDisabled ||
                    this.dayDisabled.indexOf(date.getDay()) > -1;
        }
        return (isDateDisabled ||
            (this.minDate && this.compare(date, this.minDate) < 0) ||
            (this.maxDate && this.compare(date, this.maxDate) > 0));
    }
}
DatePickerInnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker-inner',
                template: `
    <!--&lt;!&ndash;ng-keydown="keydown($event)"&ndash;&gt;-->
    <div *ngIf="datepickerMode" class="well well-sm bg-faded p-a card" role="application" >
      <ng-content></ng-content>
    </div>
  `
            }] }
];
/** @nocollapse */
DatePickerInnerComponent.propDecorators = {
    "locale": [{ type: Input },],
    "datepickerMode": [{ type: Input },],
    "startingDay": [{ type: Input },],
    "yearRange": [{ type: Input },],
    "minDate": [{ type: Input },],
    "maxDate": [{ type: Input },],
    "minMode": [{ type: Input },],
    "maxMode": [{ type: Input },],
    "showWeeks": [{ type: Input },],
    "formatDay": [{ type: Input },],
    "formatMonth": [{ type: Input },],
    "formatYear": [{ type: Input },],
    "formatDayHeader": [{ type: Input },],
    "formatDayTitle": [{ type: Input },],
    "formatMonthTitle": [{ type: Input },],
    "onlyCurrentMonth": [{ type: Input },],
    "shortcutPropagation": [{ type: Input },],
    "customClass": [{ type: Input },],
    "monthColLimit": [{ type: Input },],
    "yearColLimit": [{ type: Input },],
    "dateDisabled": [{ type: Input },],
    "dayDisabled": [{ type: Input },],
    "initDate": [{ type: Input },],
    "selectionDone": [{ type: Output },],
    "update": [{ type: Output },],
    "activeDateChange": [{ type: Output },],
    "activeDate": [{ type: Input },],
};
function DatePickerInnerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DatePickerInnerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DatePickerInnerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DatePickerInnerComponent.propDecorators;
    /** @type {?} */
    DatePickerInnerComponent.prototype.locale;
    /** @type {?} */
    DatePickerInnerComponent.prototype.datepickerMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.startingDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.yearRange;
    /** @type {?} */
    DatePickerInnerComponent.prototype.minDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.maxDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.minMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.maxMode;
    /** @type {?} */
    DatePickerInnerComponent.prototype.showWeeks;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDayHeader;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatDayTitle;
    /** @type {?} */
    DatePickerInnerComponent.prototype.formatMonthTitle;
    /** @type {?} */
    DatePickerInnerComponent.prototype.onlyCurrentMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.shortcutPropagation;
    /** @type {?} */
    DatePickerInnerComponent.prototype.customClass;
    /** @type {?} */
    DatePickerInnerComponent.prototype.monthColLimit;
    /** @type {?} */
    DatePickerInnerComponent.prototype.yearColLimit;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dateDisabled;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dayDisabled;
    /** @type {?} */
    DatePickerInnerComponent.prototype.initDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.selectionDone;
    /** @type {?} */
    DatePickerInnerComponent.prototype.update;
    /** @type {?} */
    DatePickerInnerComponent.prototype.activeDateChange;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.stepYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.uniqueId;
    /** @type {?} */
    DatePickerInnerComponent.prototype.modes;
    /** @type {?} */
    DatePickerInnerComponent.prototype.dateFormatter;
    /** @type {?} */
    DatePickerInnerComponent.prototype._activeDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.selectedDate;
    /** @type {?} */
    DatePickerInnerComponent.prototype.activeDateId;
    /** @type {?} */
    DatePickerInnerComponent.prototype.refreshViewHandlerDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.compareHandlerDay;
    /** @type {?} */
    DatePickerInnerComponent.prototype.refreshViewHandlerMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.compareHandlerMonth;
    /** @type {?} */
    DatePickerInnerComponent.prototype.refreshViewHandlerYear;
    /** @type {?} */
    DatePickerInnerComponent.prototype.compareHandlerYear;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFZakQsTUFBTTs7NkJBMEIwQyxJQUFJLFlBQVksQ0FBTyxTQUFTLENBQUM7c0JBQ3hDLElBQUksWUFBWSxDQUFPLEtBQUssQ0FBQztnQ0FDbkIsSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDOzt1QkFHbkUsRUFBRTs7eUJBRUEsRUFBRTs7d0JBRUgsRUFBRTtxQkFJVSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDOzZCQUNYLElBQUksYUFBYSxFQUFFOzs7OztRQWF4RCxVQUFVO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Ozs7OztJQUcxQixJQUFJLFVBQVUsQ0FBQyxLQUFXO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO0tBQzFCOzs7O0lBR0QsUUFBUTs7UUFFTixJQUFJLENBQUMsUUFBUSxHQUFJLGVBQWUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUVwRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7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OzBCQUNMLEtBQUs7d0JBRUwsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztpQ0FDTCxLQUFLO2lDQUNMLEtBQUs7b0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFFTCxNQUFNO3VCQUNOLE1BQU07aUNBQ04sTUFBTTsyQkF3Qk4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOiBtYXgtZmlsZS1saW5lLWNvdW50ICovXHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBEYXRlRm9ybWF0dGVyIH0gZnJvbSAnLi9kYXRlLWZvcm1hdHRlcic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWlubmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPCEtLSZsdDshJm5kYXNoO25nLWtleWRvd249XCJrZXlkb3duKCRldmVudClcIiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICA8ZGl2ICpuZ0lmPVwiZGF0ZXBpY2tlck1vZGVcIiBjbGFzcz1cIndlbGwgd2VsbC1zbSBiZy1mYWRlZCBwLWEgY2FyZFwiIHJvbGU9XCJhcHBsaWNhdGlvblwiID5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGxvY2FsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3RhcnRpbmdEYXk6IG51bWJlcjtcclxuICBASW5wdXQoKSB5ZWFyUmFuZ2U6IG51bWJlcjtcclxuXHJcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZTtcclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIG1pbk1vZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBtYXhNb2RlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc2hvd1dlZWtzOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGZvcm1hdERheTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0WWVhcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdERheUhlYWRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1hdERheVRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG9ubHlDdXJyZW50TW9udGg6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvcnRjdXRQcm9wYWdhdGlvbjogYm9vbGVhbjtcclxuICBASW5wdXQoKSBjdXN0b21DbGFzczogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmc7IGNsYXp6OiBzdHJpbmcgfVtdO1xyXG4gIEBJbnB1dCgpIG1vbnRoQ29sTGltaXQ6IG51bWJlcjtcclxuICBASW5wdXQoKSB5ZWFyQ29sTGltaXQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBkYXRlRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH1bXTtcclxuICBASW5wdXQoKSBkYXlEaXNhYmxlZDogbnVtYmVyW107XHJcbiAgQElucHV0KCkgaW5pdERhdGU6IERhdGU7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3Rpb25Eb25lOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XHJcbiAgQE91dHB1dCgpIHVwZGF0ZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPihmYWxzZSk7XHJcbiAgQE91dHB1dCgpIGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHN0ZXBEYXk6IGFueSA9IHt9O1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBzdGVwTW9udGg6IGFueSA9IHt9O1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBzdGVwWWVhcjogYW55ID0ge307XHJcblxyXG4gIHVuaXF1ZUlkOiBzdHJpbmc7XHJcblxyXG4gIHByb3RlY3RlZCBtb2Rlczogc3RyaW5nW10gPSBbJ2RheScsICdtb250aCcsICd5ZWFyJ107XHJcbiAgcHJvdGVjdGVkIGRhdGVGb3JtYXR0ZXI6IERhdGVGb3JtYXR0ZXIgPSBuZXcgRGF0ZUZvcm1hdHRlcigpO1xyXG4gIHByb3RlY3RlZCBfYWN0aXZlRGF0ZTogRGF0ZTtcclxuICBwcm90ZWN0ZWQgc2VsZWN0ZWREYXRlOiBEYXRlO1xyXG4gIHByb3RlY3RlZCBhY3RpdmVEYXRlSWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIHJlZnJlc2hWaWV3SGFuZGxlckRheTogRnVuY3Rpb247XHJcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyRGF5OiBGdW5jdGlvbjtcclxuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyTW9udGg6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCBjb21wYXJlSGFuZGxlck1vbnRoOiBGdW5jdGlvbjtcclxuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyWWVhcjogRnVuY3Rpb247XHJcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyWWVhcjogRnVuY3Rpb247XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhZGQgZm9ybWF0dGVyIHZhbHVlIHRvIERhdGUgb2JqZWN0XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAvLyB0b2RvOiB1c2UgZGF0ZSBmb3IgdW5pcXVlIHZhbHVlXHJcbiAgICB0aGlzLnVuaXF1ZUlkID0gIGBkYXRlcGlja2VyLS0ke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKX1gO1xyXG5cclxuICAgIGlmICh0aGlzLmluaXREYXRlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuaW5pdERhdGU7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlLnZhbHVlT2YoKSk7XHJcbiAgICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVEYXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRoaXMucmVmcmVzaFZpZXcgc2hvdWxkIGJlIGNhbGxlZCBoZXJlIHRvIHJlZmxlY3QgdGhlIGNoYW5nZXMgb24gdGhlIGZseVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby11bnVzZWQtdmFyaWFibGVcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgICB0aGlzLmNoZWNrSWZBY3RpdmVEYXRlR290VXBkYXRlZChjaGFuZ2VzLmFjdGl2ZURhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ2hlY2sgaWYgYWN0aXZlRGF0ZSBoYXMgYmVlbiB1cGRhdGUgYW5kIHRoZW4gZW1pdCB0aGUgYWN0aXZlRGF0ZUNoYW5nZSB3aXRoIHRoZSBuZXcgZGF0ZVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgY2hlY2tJZkFjdGl2ZURhdGVHb3RVcGRhdGVkKGFjdGl2ZURhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKGFjdGl2ZURhdGUgJiYgIWFjdGl2ZURhdGUuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgY29uc3QgcHJldmlvdXNWYWx1ZSA9IGFjdGl2ZURhdGUucHJldmlvdXNWYWx1ZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHByZXZpb3VzVmFsdWUgJiZcclxuICAgICAgICBwcmV2aW91c1ZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJlxyXG4gICAgICAgIHByZXZpb3VzVmFsdWUuZ2V0VGltZSgpICE9PSBhY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZS5nZXRUaW1lKClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q29tcGFyZUhhbmRsZXIoaGFuZGxlcjogRnVuY3Rpb24sIHR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGUgPT09ICdkYXknKSB7XHJcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xyXG4gICAgICB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhciA9IGhhbmRsZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wYXJlKGRhdGUxOiBEYXRlLCBkYXRlMjogRGF0ZSk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICBpZiAoZGF0ZTEgPT09IHVuZGVmaW5lZCB8fCBkYXRlMiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknICYmIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJEYXkoZGF0ZTEsIGRhdGUyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aChkYXRlMSwgZGF0ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicgJiYgdGhpcy5jb21wYXJlSGFuZGxlclllYXIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKGRhdGUxLCBkYXRlMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZvaWQgMDtcclxuICB9XHJcblxyXG4gIHNldFJlZnJlc2hWaWV3SGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RheScpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGggPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlID09PSAneWVhcicpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyID0gaGFuZGxlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZnJlc2hWaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdkYXknICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5KSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyRGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCkge1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJZZWFyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkYXRlRmlsdGVyKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVGb3JtYXR0ZXIuZm9ybWF0KGRhdGUsIGZvcm1hdCwgdGhpcy5sb2NhbGUpO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGlzQWN0aXZlKGRhdGVPYmplY3Q6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuY29tcGFyZShkYXRlT2JqZWN0LmRhdGUsIHRoaXMuYWN0aXZlRGF0ZSkgPT09IDApIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlSWQgPSBkYXRlT2JqZWN0LnVpZDtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBjcmVhdGVEYXRlT2JqZWN0KGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nKTogYW55IHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGNvbnN0IGRhdGVPYmplY3Q6IGFueSA9IHt9O1xyXG4gICAgZGF0ZU9iamVjdC5kYXRlID0gbmV3IERhdGUoXHJcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICBkYXRlLmdldERhdGUoKVxyXG4gICAgKTtcclxuICAgIGRhdGVPYmplY3QuZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZU9iamVjdC5kYXRlKTtcclxuICAgIGRhdGVPYmplY3QubGFiZWwgPSB0aGlzLmRhdGVGaWx0ZXIoZGF0ZSwgZm9ybWF0KTtcclxuICAgIGRhdGVPYmplY3Quc2VsZWN0ZWQgPSB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5zZWxlY3RlZERhdGUpID09PSAwO1xyXG4gICAgZGF0ZU9iamVjdC5kaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZChkYXRlKTtcclxuICAgIGRhdGVPYmplY3QuY3VycmVudCA9IHRoaXMuY29tcGFyZShkYXRlLCBuZXcgRGF0ZSgpKSA9PT0gMDtcclxuICAgIGRhdGVPYmplY3QuY3VzdG9tQ2xhc3MgPSB0aGlzLmdldEN1c3RvbUNsYXNzRm9yRGF0ZShkYXRlT2JqZWN0LmRhdGUpO1xyXG5cclxuICAgIHJldHVybiBkYXRlT2JqZWN0O1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHNwbGl0KGFycjogYW55W10sIHNpemU6IG51bWJlcik6IGFueVtdIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGNvbnN0IGFycmF5czogYW55W10gPSBbXTtcclxuICAgIHdoaWxlIChhcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICBhcnJheXMucHVzaChhcnIuc3BsaWNlKDAsIHNpemUpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYXJyYXlzO1xyXG4gIH1cclxuXHJcbiAgLy8gRml4IGEgaGFyZC1yZXByb2R1Y2libGUgYnVnIHdpdGggdGltZXpvbmVzXHJcbiAgLy8gVGhlIGJ1ZyBkZXBlbmRzIG9uIE9TLCBicm93c2VyLCBjdXJyZW50IHRpbWV6b25lIGFuZCBjdXJyZW50IGRhdGVcclxuICAvLyBpLmUuXHJcbiAgLy8gdmFyIGRhdGUgPSBuZXcgRGF0ZSgyMDE0LCAwLCAxKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksXHJcbiAgLy8gZGF0ZS5nZXRIb3VycygpKTsgY2FuIHJlc3VsdCBpbiBcIjIwMTMgMTEgMzEgMjNcIiBiZWNhdXNlIG9mIHRoZSBidWcuXHJcbiAgZml4VGltZVpvbmUoZGF0ZTogRGF0ZSk6IERhdGUge1xyXG4gICAgY29uc3QgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcblxyXG4gICAgcmV0dXJuIG5ldyBEYXRlKFxyXG4gICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgIGRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgZGF0ZS5nZXREYXRlKCksXHJcbiAgICAgIGhvdXJzID09PSAyMyA/IGhvdXJzICsgMiA6IDBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QoZGF0ZTogRGF0ZSwgaXNNYW51YWwgPSB0cnVlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5taW5Nb2RlKSB7XHJcbiAgICAgIGlmICghdGhpcy5hY3RpdmVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgZGF0ZS5nZXREYXRlKClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5maXhUaW1lWm9uZSh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgICBpZiAoaXNNYW51YWwpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkRvbmUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuZml4VGltZVpvbmUodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgaWYgKGlzTWFudWFsKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlcGlja2VyTW9kZSA9IHRoaXMubW9kZXNbXHJcbiAgICAgICAgICB0aGlzLm1vZGVzLmluZGV4T2YodGhpcy5kYXRlcGlja2VyTW9kZSkgLSAxXHJcbiAgICAgICAgXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gbmV3IERhdGUodGhpcy5hY3RpdmVEYXRlLnZhbHVlT2YoKSk7XHJcbiAgICB0aGlzLnVwZGF0ZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlKGRpcmVjdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgICBsZXQgZXhwZWN0ZWRTdGVwOiBhbnk7XHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScpIHtcclxuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwRGF5O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIGV4cGVjdGVkU3RlcCA9IHRoaXMuc3RlcE1vbnRoO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAneWVhcicpIHtcclxuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwWWVhcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhwZWN0ZWRTdGVwKSB7XHJcbiAgICAgIGNvbnN0IHllYXIgPVxyXG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpICsgZGlyZWN0aW9uICogKGV4cGVjdGVkU3RlcC55ZWFycyB8fCAwKTtcclxuICAgICAgY29uc3QgbW9udGggPVxyXG4gICAgICAgIHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICsgZGlyZWN0aW9uICogKGV4cGVjdGVkU3RlcC5tb250aHMgfHwgMCk7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcclxuXHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZU1vZGUoX2RpcmVjdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkaXJlY3Rpb24gPSBfZGlyZWN0aW9uIHx8IDE7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5tYXhNb2RlICYmIGRpcmVjdGlvbiA9PT0gMSkgfHxcclxuICAgICAgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09IHRoaXMubWluTW9kZSAmJiBkaXJlY3Rpb24gPT09IC0xKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRhdGVwaWNrZXJNb2RlID0gdGhpcy5tb2Rlc1tcclxuICAgICAgdGhpcy5tb2Rlcy5pbmRleE9mKHRoaXMuZGF0ZXBpY2tlck1vZGUpICsgZGlyZWN0aW9uXHJcbiAgICBdO1xyXG4gICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldEN1c3RvbUNsYXNzRm9yRGF0ZShkYXRlOiBEYXRlKTogc3RyaW5nIHtcclxuICAgIGlmICghdGhpcy5jdXN0b21DbGFzcykge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICAvLyB0b2RvOiBidWlsZCBhIGhhc2ggb2YgY3VzdG9tIGNsYXNzZXMsIGl0IHdpbGwgd29yayBmYXN0ZXJcclxuICAgIGNvbnN0IGN1c3RvbUNsYXNzT2JqZWN0OiB7XHJcbiAgICAgIGRhdGU6IERhdGU7XHJcbiAgICAgIG1vZGU6IHN0cmluZztcclxuICAgICAgY2xheno6IHN0cmluZztcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICB9ID0gdGhpcy5jdXN0b21DbGFzcy5maW5kKChjdXN0b21DbGFzczogYW55KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgY3VzdG9tQ2xhc3MuZGF0ZS52YWx1ZU9mKCkgPT09IGRhdGUudmFsdWVPZigpICYmXHJcbiAgICAgICAgY3VzdG9tQ2xhc3MubW9kZSA9PT0gdGhpcy5kYXRlcGlja2VyTW9kZVxyXG4gICAgICApO1xyXG4gICAgfSwgdGhpcyk7XHJcblxyXG4gICAgcmV0dXJuIGN1c3RvbUNsYXNzT2JqZWN0ID09PSB1bmRlZmluZWQgPyAnJyA6IGN1c3RvbUNsYXNzT2JqZWN0LmNsYXp6O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNvbXBhcmVEYXRlRGlzYWJsZWQoXHJcbiAgICBkYXRlMURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9LFxyXG4gICAgZGF0ZTI6IERhdGVcclxuICApOiBudW1iZXIge1xyXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQgPT09IHVuZGVmaW5lZCB8fCBkYXRlMiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ2RheScgJiYgdGhpcy5jb21wYXJlSGFuZGxlckRheSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlckRheShkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAnbW9udGgnICYmIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlclllYXIoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBpc0Rpc2FibGVkKGRhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICAgIGxldCBpc0RhdGVEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuZGF0ZURpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuZGF0ZURpc2FibGVkLmZvckVhY2goXHJcbiAgICAgICAgKGRpc2FibGVkRGF0ZTogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKHRoaXMuY29tcGFyZURhdGVEaXNhYmxlZChkaXNhYmxlZERhdGUsIGRhdGUpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGlzRGF0ZURpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF5RGlzYWJsZWQpIHtcclxuICAgICAgaXNEYXRlRGlzYWJsZWQgPVxyXG4gICAgICAgIGlzRGF0ZURpc2FibGVkIHx8XHJcbiAgICAgICAgdGhpcy5kYXlEaXNhYmxlZC5pbmRleE9mKGRhdGUuZ2V0RGF5KCkpID4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgaXNEYXRlRGlzYWJsZWQgfHxcclxuICAgICAgKHRoaXMubWluRGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5taW5EYXRlKSA8IDApIHx8XHJcbiAgICAgICh0aGlzLm1heERhdGUgJiYgdGhpcy5jb21wYXJlKGRhdGUsIHRoaXMubWF4RGF0ZSkgPiAwKVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19