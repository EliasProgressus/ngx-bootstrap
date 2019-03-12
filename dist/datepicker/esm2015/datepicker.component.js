/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import { DatepickerConfig } from './datepicker.config';
export const /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(() => DatePickerComponent),
    multi: true
};
/* tslint:enable:component-selector-name component-selector-type */
export class DatePickerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        /**
         * sets datepicker mode, supports: `day`, `month`, `year`
         */
        this.datepickerMode = 'day';
        /**
         * if false week numbers will be hidden
         */
        this.showWeeks = true;
        this.selectionDone = new EventEmitter(undefined);
        /**
         * callback to invoke when the activeDate is changed.
         */
        this.activeDateChange = new EventEmitter(undefined);
        /* tslint:disable-next-line: no-any*/
        this.onChange = Function.prototype;
        /* tslint:disable-next-line: no-any*/
        this.onTouched = Function.prototype;
        this._now = new Date();
        this.config = config;
        this.configureOptions();
    }
    /**
     * currently active date
     * @return {?}
     */
    get activeDate() {
        return this._activeDate || this._now;
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
    configureOptions() {
        Object.assign(this, this.config);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onUpdate(event) {
        this.activeDate = event;
        this.onChange(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectionDone(event) {
        this.selectionDone.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onActiveDateChange(event) {
        this.activeDateChange.emit(event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (this._datePicker.compare(value, this._activeDate) === 0) {
            return;
        }
        if (value && value instanceof Date) {
            this.activeDate = value;
            this._datePicker.select(value, false);
            return;
        }
        this.activeDate = value ? new Date(value) : void 0;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
DatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'datepicker',
                template: `
    <datepicker-inner [activeDate]="activeDate"
                      (update)="onUpdate($event)"
                      [locale]="config.locale"
                      [datepickerMode]="datepickerMode"
                      [initDate]="initDate"
                      [minDate]="minDate"
                      [maxDate]="maxDate"
                      [minMode]="minMode"
                      [maxMode]="maxMode"
                      [showWeeks]="showWeeks"
                      [formatDay]="formatDay"
                      [formatMonth]="formatMonth"
                      [formatYear]="formatYear"
                      [formatDayHeader]="formatDayHeader"
                      [formatDayTitle]="formatDayTitle"
                      [formatMonthTitle]="formatMonthTitle"
                      [startingDay]="startingDay"
                      [yearRange]="yearRange"
                      [customClass]="customClass"
                      [dateDisabled]="dateDisabled"
                      [dayDisabled]="dayDisabled"
                      [onlyCurrentMonth]="onlyCurrentMonth"
                      [shortcutPropagation]="shortcutPropagation"
                      [monthColLimit]="monthColLimit"
                      [yearColLimit]="yearColLimit"
                      (selectionDone)="onSelectionDone($event)"
                      (activeDateChange)="onActiveDateChange($event)">
      <daypicker tabindex="0"></daypicker>
      <monthpicker tabindex="0"></monthpicker>
      <yearpicker tabindex="0"></yearpicker>
    </datepicker-inner>
    `,
                providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
DatePickerComponent.ctorParameters = () => [
    { type: DatepickerConfig, },
];
DatePickerComponent.propDecorators = {
    "datepickerMode": [{ type: Input },],
    "initDate": [{ type: Input },],
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
    "startingDay": [{ type: Input },],
    "yearRange": [{ type: Input },],
    "onlyCurrentMonth": [{ type: Input },],
    "shortcutPropagation": [{ type: Input },],
    "monthColLimit": [{ type: Input },],
    "yearColLimit": [{ type: Input },],
    "customClass": [{ type: Input },],
    "dateDisabled": [{ type: Input },],
    "dayDisabled": [{ type: Input },],
    "activeDate": [{ type: Input },],
    "selectionDone": [{ type: Output },],
    "activeDateChange": [{ type: Output },],
    "_datePicker": [{ type: ViewChild, args: [DatePickerInnerComponent,] },],
};
function DatePickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    DatePickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    DatePickerComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    DatePickerComponent.propDecorators;
    /**
     * sets datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.datepickerMode;
    /**
     * default date to show if `ng-model` value is not specified
     * @type {?}
     */
    DatePickerComponent.prototype.initDate;
    /**
     * oldest selectable date
     * @type {?}
     */
    DatePickerComponent.prototype.minDate;
    /**
     * latest selectable date
     * @type {?}
     */
    DatePickerComponent.prototype.maxDate;
    /**
     * set lower datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.minMode;
    /**
     * sets upper datepicker mode, supports: `day`, `month`, `year`
     * @type {?}
     */
    DatePickerComponent.prototype.maxMode;
    /**
     * if false week numbers will be hidden
     * @type {?}
     */
    DatePickerComponent.prototype.showWeeks;
    /**
     * format of day in month
     * @type {?}
     */
    DatePickerComponent.prototype.formatDay;
    /**
     * format of month in year
     * @type {?}
     */
    DatePickerComponent.prototype.formatMonth;
    /**
     * format of year in year range
     * @type {?}
     */
    DatePickerComponent.prototype.formatYear;
    /**
     * format of day in week header
     * @type {?}
     */
    DatePickerComponent.prototype.formatDayHeader;
    /**
     * format of title when selecting day
     * @type {?}
     */
    DatePickerComponent.prototype.formatDayTitle;
    /**
     * format of title when selecting month
     * @type {?}
     */
    DatePickerComponent.prototype.formatMonthTitle;
    /**
     * starting day of the week from 0-6 (0=Sunday, ..., 6=Saturday)
     * @type {?}
     */
    DatePickerComponent.prototype.startingDay;
    /**
     * number of years displayed in year selection
     * @type {?}
     */
    DatePickerComponent.prototype.yearRange;
    /**
     * if true only dates from the currently displayed month will be shown
     * @type {?}
     */
    DatePickerComponent.prototype.onlyCurrentMonth;
    /**
     * if true shortcut`s event propagation will be disabled
     * @type {?}
     */
    DatePickerComponent.prototype.shortcutPropagation;
    /**
     * number of months displayed in a single row of month picker
     * @type {?}
     */
    DatePickerComponent.prototype.monthColLimit;
    /**
     * number of years displayed in a single row of year picker
     * @type {?}
     */
    DatePickerComponent.prototype.yearColLimit;
    /**
     * array of custom css classes to be applied to targeted dates
     * @type {?}
     */
    DatePickerComponent.prototype.customClass;
    /**
     * array of disabled dates
     * @type {?}
     */
    DatePickerComponent.prototype.dateDisabled;
    /**
     * disabled days of the week from 0-6 (0=Sunday, ..., 6=Saturday)
     * @type {?}
     */
    DatePickerComponent.prototype.dayDisabled;
    /** @type {?} */
    DatePickerComponent.prototype.selectionDone;
    /**
     * callback to invoke when the activeDate is changed.
     * @type {?}
     */
    DatePickerComponent.prototype.activeDateChange;
    /** @type {?} */
    DatePickerComponent.prototype._datePicker;
    /** @type {?} */
    DatePickerComponent.prototype.onChange;
    /** @type {?} */
    DatePickerComponent.prototype.onTouched;
    /** @type {?} */
    DatePickerComponent.prototype.config;
    /** @type {?} */
    DatePickerComponent.prototype._now;
    /** @type {?} */
    DatePickerComponent.prototype._activeDate;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJkYXRlcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBRU4sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxNQUFNLENBQUMsdUJBQU0saUNBQWlDLEdBQWE7SUFDekQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFHRjtBQXNDQSxNQUFNOzs7O0lBOEVKLFlBQVksTUFBd0I7Ozs7OEJBNUVWLEtBQUs7Ozs7eUJBWVYsSUFBSTs2QkEyQ1csSUFBSSxZQUFZLENBQU8sU0FBUyxDQUFDOzs7O2dDQUk5QixJQUFJLFlBQVksQ0FDckQsU0FBUyxDQUNWOzt3QkFNZSxRQUFRLENBQUMsU0FBUzs7eUJBRWpCLFFBQVEsQ0FBQyxTQUFTO29CQUlaLElBQUksSUFBSSxFQUFFO1FBSS9CLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0tBQ3pCOzs7OztRQWpDRyxVQUFVO1FBQ1osTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQzs7Ozs7O0lBR3ZDLElBQUksVUFBVSxDQUFDLEtBQVc7UUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7S0FDMUI7Ozs7SUE2QkQsZ0JBQWdCO1FBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFXO1FBQ2xCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDdEI7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQVc7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7Ozs7O0lBRUQsa0JBQWtCLENBQUMsS0FBVztRQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7OztJQUdELFVBQVUsQ0FBQyxLQUFVO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUM7U0FDUjtRQUNELEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLFlBQVksSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFdEMsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3BEOzs7OztJQUVELGdCQUFnQixDQUFDLEVBQWM7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7O1lBL0pGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdDUDtnQkFDSCxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQzthQUMvQzs7OztZQTlDUSxnQkFBZ0I7OzsrQkFrRHRCLEtBQUs7eUJBRUwsS0FBSzt3QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBRUwsS0FBSzt3QkFFTCxLQUFLOzBCQUVMLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLOzJCQUVMLEtBQUs7Z0NBRUwsS0FBSzsrQkFFTCxLQUFLO2lDQUVMLEtBQUs7NEJBRUwsS0FBSzswQkFFTCxLQUFLO2lDQUVMLEtBQUs7b0NBRUwsS0FBSzs4QkFFTCxLQUFLOzZCQUVMLEtBQUs7NEJBRUwsS0FBSzs2QkFFTCxLQUFLOzRCQUVMLEtBQUs7MkJBR0wsS0FBSzs4QkFTTCxNQUFNO2lDQUlOLE1BQU07NEJBS04sU0FBUyxTQUFDLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBQcm92aWRlcixcclxuICBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vZGF0ZXBpY2tlci5jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERBVEVQSUNLRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBEYXRlUGlja2VyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyogdHNsaW50OmRpc2FibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRhdGVwaWNrZXItaW5uZXIgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAodXBkYXRlKT1cIm9uVXBkYXRlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2xvY2FsZV09XCJjb25maWcubG9jYWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlcGlja2VyTW9kZV09XCJkYXRlcGlja2VyTW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbaW5pdERhdGVdPVwiaW5pdERhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21pbkRhdGVdPVwibWluRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttaW5Nb2RlXT1cIm1pbk1vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21heE1vZGVdPVwibWF4TW9kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvd1dlZWtzXT1cInNob3dXZWVrc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5XT1cImZvcm1hdERheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0TW9udGhdPVwiZm9ybWF0TW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdFllYXJdPVwiZm9ybWF0WWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5SGVhZGVyXT1cImZvcm1hdERheUhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZm9ybWF0RGF5VGl0bGVdPVwiZm9ybWF0RGF5VGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoVGl0bGVdPVwiZm9ybWF0TW9udGhUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc3RhcnRpbmdEYXldPVwic3RhcnRpbmdEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3llYXJSYW5nZV09XCJ5ZWFyUmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2N1c3RvbUNsYXNzXT1cImN1c3RvbUNsYXNzXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtkYXRlRGlzYWJsZWRdPVwiZGF0ZURpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtkYXlEaXNhYmxlZF09XCJkYXlEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbb25seUN1cnJlbnRNb250aF09XCJvbmx5Q3VycmVudE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtzaG9ydGN1dFByb3BhZ2F0aW9uXT1cInNob3J0Y3V0UHJvcGFnYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21vbnRoQ29sTGltaXRdPVwibW9udGhDb2xMaW1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbeWVhckNvbExpbWl0XT1cInllYXJDb2xMaW1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoc2VsZWN0aW9uRG9uZSk9XCJvblNlbGVjdGlvbkRvbmUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoYWN0aXZlRGF0ZUNoYW5nZSk9XCJvbkFjdGl2ZURhdGVDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICA8ZGF5cGlja2VyIHRhYmluZGV4PVwiMFwiPjwvZGF5cGlja2VyPlxyXG4gICAgICA8bW9udGhwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC9tb250aHBpY2tlcj5cclxuICAgICAgPHllYXJwaWNrZXIgdGFiaW5kZXg9XCIwXCI+PC95ZWFycGlja2VyPlxyXG4gICAgPC9kYXRlcGlja2VyLWlubmVyPlxyXG4gICAgYCxcclxuICBwcm92aWRlcnM6IFtEQVRFUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbi8qIHRzbGludDplbmFibGU6Y29tcG9uZW50LXNlbGVjdG9yLW5hbWUgY29tcG9uZW50LXNlbGVjdG9yLXR5cGUgKi9cclxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgLyoqIHNldHMgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xyXG4gIEBJbnB1dCgpIGRhdGVwaWNrZXJNb2RlID0gJ2RheSc7XHJcbiAgLyoqIGRlZmF1bHQgZGF0ZSB0byBzaG93IGlmIGBuZy1tb2RlbGAgdmFsdWUgaXMgbm90IHNwZWNpZmllZCAqL1xyXG4gIEBJbnB1dCgpIGluaXREYXRlOiBEYXRlO1xyXG4gIC8qKiAgb2xkZXN0IHNlbGVjdGFibGUgZGF0ZSAqL1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgLyoqIGxhdGVzdCBzZWxlY3RhYmxlIGRhdGUgKi9cclxuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlO1xyXG4gIC8qKiBzZXQgbG93ZXIgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xyXG4gIEBJbnB1dCgpIG1pbk1vZGU6IHN0cmluZztcclxuICAvKiogc2V0cyB1cHBlciBkYXRlcGlja2VyIG1vZGUsIHN1cHBvcnRzOiBgZGF5YCwgYG1vbnRoYCwgYHllYXJgICovXHJcbiAgQElucHV0KCkgbWF4TW9kZTogc3RyaW5nO1xyXG4gIC8qKiBpZiBmYWxzZSB3ZWVrIG51bWJlcnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBzaG93V2Vla3MgPSB0cnVlO1xyXG4gIC8qKiBmb3JtYXQgb2YgZGF5IGluIG1vbnRoICovXHJcbiAgQElucHV0KCkgZm9ybWF0RGF5OiBzdHJpbmc7XHJcbiAgLyoqIGZvcm1hdCBvZiBtb250aCBpbiB5ZWFyICovXHJcbiAgQElucHV0KCkgZm9ybWF0TW9udGg6IHN0cmluZztcclxuICAvKiogZm9ybWF0IG9mIHllYXIgaW4geWVhciByYW5nZSAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdFllYXI6IHN0cmluZztcclxuICAvKiogZm9ybWF0IG9mIGRheSBpbiB3ZWVrIGhlYWRlciAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdERheUhlYWRlcjogc3RyaW5nO1xyXG4gIC8qKiBmb3JtYXQgb2YgdGl0bGUgd2hlbiBzZWxlY3RpbmcgZGF5ICovXHJcbiAgQElucHV0KCkgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcclxuICAvKiogZm9ybWF0IG9mIHRpdGxlIHdoZW4gc2VsZWN0aW5nIG1vbnRoICovXHJcbiAgQElucHV0KCkgZm9ybWF0TW9udGhUaXRsZTogc3RyaW5nO1xyXG4gIC8qKiBzdGFydGluZyBkYXkgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXHJcbiAgQElucHV0KCkgc3RhcnRpbmdEYXk6IG51bWJlcjtcclxuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiB5ZWFyIHNlbGVjdGlvbiAqL1xyXG4gIEBJbnB1dCgpIHllYXJSYW5nZTogbnVtYmVyO1xyXG4gIC8qKiBpZiB0cnVlIG9ubHkgZGF0ZXMgZnJvbSB0aGUgY3VycmVudGx5IGRpc3BsYXllZCBtb250aCB3aWxsIGJlIHNob3duICovXHJcbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcclxuICAvKiogaWYgdHJ1ZSBzaG9ydGN1dGBzIGV2ZW50IHByb3BhZ2F0aW9uIHdpbGwgYmUgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xyXG4gIC8qKiBudW1iZXIgb2YgbW9udGhzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgbW9udGggcGlja2VyICovXHJcbiAgQElucHV0KCkgbW9udGhDb2xMaW1pdDogbnVtYmVyO1xyXG4gIC8qKiBudW1iZXIgb2YgeWVhcnMgZGlzcGxheWVkIGluIGEgc2luZ2xlIHJvdyBvZiB5ZWFyIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xyXG4gIC8qKiBhcnJheSBvZiBjdXN0b20gY3NzIGNsYXNzZXMgdG8gYmUgYXBwbGllZCB0byB0YXJnZXRlZCBkYXRlcyAqL1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZzsgY2xheno6IHN0cmluZyB9W107XHJcbiAgLyoqIGFycmF5IG9mIGRpc2FibGVkIGRhdGVzICovXHJcbiAgQElucHV0KCkgZGF0ZURpc2FibGVkOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9W107XHJcbiAgLyoqIGRpc2FibGVkIGRheXMgb2YgdGhlIHdlZWsgZnJvbSAwLTYgKDA9U3VuZGF5LCAuLi4sIDY9U2F0dXJkYXkpICovXHJcbiAgQElucHV0KCkgZGF5RGlzYWJsZWQ6IG51bWJlcltdO1xyXG5cclxuICAvKiogY3VycmVudGx5IGFjdGl2ZSBkYXRlICovXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlIHx8IHRoaXMuX25vdztcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBzZWxlY3Rpb25Eb25lOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KHVuZGVmaW5lZCk7XHJcblxyXG4gIC8qKiBjYWxsYmFjayB0byBpbnZva2Ugd2hlbiB0aGUgYWN0aXZlRGF0ZSBpcyBjaGFuZ2VkLiAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGFjdGl2ZURhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oXHJcbiAgICB1bmRlZmluZWRcclxuICApO1xyXG5cclxuICBAVmlld0NoaWxkKERhdGVQaWNrZXJJbm5lckNvbXBvbmVudClcclxuICBfZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZztcclxuXHJcbiAgcHJvdGVjdGVkIF9ub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByb3RlY3RlZCBfYWN0aXZlRGF0ZTogRGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBEYXRlcGlja2VyQ29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIHRoaXMuY29uZmlndXJlT3B0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlT3B0aW9ucygpOiB2b2lkIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb25maWcpO1xyXG4gIH1cclxuXHJcbiAgb25VcGRhdGUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IGV2ZW50O1xyXG4gICAgdGhpcy5vbkNoYW5nZShldmVudCk7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdGlvbkRvbmUoZXZlbnQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIG9uQWN0aXZlRGF0ZUNoYW5nZShldmVudDogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlQ2hhbmdlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuICAvLyB0b2RvOiBzdXBwb3J0IG51bGwgdmFsdWVcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fZGF0ZVBpY2tlci5jb21wYXJlKHZhbHVlLCB0aGlzLl9hY3RpdmVEYXRlKSA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl9kYXRlUGlja2VyLnNlbGVjdCh2YWx1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHZhbHVlID8gbmV3IERhdGUodmFsdWUpIDogdm9pZCAwO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG59XHJcbiJdfQ==