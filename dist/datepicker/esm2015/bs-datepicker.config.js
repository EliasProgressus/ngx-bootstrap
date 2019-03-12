/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
export class BsDatepickerConfig {
    constructor() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
    }
}
BsDatepickerConfig.decorators = [
    { type: Injectable }
];
function BsDatepickerConfig_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerConfig.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerConfig.ctorParameters;
    /**
     * sets use adaptive position
     * @type {?}
     */
    BsDatepickerConfig.prototype.adaptivePosition;
    /** @type {?} */
    BsDatepickerConfig.prototype.value;
    /** @type {?} */
    BsDatepickerConfig.prototype.isDisabled;
    /**
     * Default min date for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.minDate;
    /**
     * Default max date for all date/range pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.maxDate;
    /** @type {?} */
    BsDatepickerConfig.prototype.daysDisabled;
    /**
     * Disable specific dates
     * @type {?}
     */
    BsDatepickerConfig.prototype.datesDisabled;
    /**
     * Makes dates from other months active
     * @type {?}
     */
    BsDatepickerConfig.prototype.selectFromOtherMonth;
    /**
     * Makes dates from other months active
     * @type {?}
     */
    BsDatepickerConfig.prototype.selectWeek;
    /**
     * Add class to current day
     * @type {?}
     */
    BsDatepickerConfig.prototype.customTodayClass;
    /**
     * Default mode for all date pickers
     * @type {?}
     */
    BsDatepickerConfig.prototype.minMode;
    /**
     * CSS class which will be applied to datepicker container,
     * usually used to set color theme
     * @type {?}
     */
    BsDatepickerConfig.prototype.containerClass;
    /** @type {?} */
    BsDatepickerConfig.prototype.displayMonths;
    /**
     * Allows to hide week numbers in datepicker
     * @type {?}
     */
    BsDatepickerConfig.prototype.showWeekNumbers;
    /** @type {?} */
    BsDatepickerConfig.prototype.dateInputFormat;
    /** @type {?} */
    BsDatepickerConfig.prototype.rangeSeparator;
    /**
     * Date format for date range input field
     * @type {?}
     */
    BsDatepickerConfig.prototype.rangeInputFormat;
    /** @type {?} */
    BsDatepickerConfig.prototype.monthTitle;
    /** @type {?} */
    BsDatepickerConfig.prototype.yearTitle;
    /** @type {?} */
    BsDatepickerConfig.prototype.dayLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.monthLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.yearLabel;
    /** @type {?} */
    BsDatepickerConfig.prototype.weekNumbers;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFZM0MsTUFBTTs7Ozs7Z0NBRWUsS0FBSzs7Ozs7OEJBeUNQLGFBQWE7OzZCQUdkLENBQUM7Ozs7K0JBSUMsSUFBSTsrQkFFSixHQUFHOzs4QkFFSixLQUFLOzs7O2dDQUlILEdBQUc7OzBCQUdULE1BQU07eUJBQ1AsTUFBTTt3QkFDUCxHQUFHOzBCQUNELE1BQU07eUJBQ1AsTUFBTTsyQkFDSixHQUFHOzs7O1lBbkVsQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlXHJcbn0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3IgZGF0ZSByYW5nZSBwaWNrZXIgdGhlcmUgYXJlIGBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZ2Agd2hpY2ggaW5oZXJpdHMgYWxsIHByb3BlcnRpZXMsXHJcbiAqIGV4Y2VwdCBgZGlzcGxheU1vbnRoc2AsIGZvciByYW5nZSBwaWNrZXIgaXQgZGVmYXVsdCB0byBgMmBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckNvbmZpZyBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcclxuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cclxuICBhZGFwdGl2ZVBvc2l0aW9uID0gZmFsc2U7XHJcbiAgdmFsdWU/OiBEYXRlIHwgRGF0ZVtdO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgbWluIGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcclxuICAgKi9cclxuICBtaW5EYXRlPzogRGF0ZTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IG1heCBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXHJcbiAgICovXHJcbiAgbWF4RGF0ZT86IERhdGU7XHJcblxyXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXHJcbiAgICovXHJcbiAgZGF0ZXNEaXNhYmxlZD86IERhdGVbXTtcclxuICAvKipcclxuICAgKiBNYWtlcyBkYXRlcyBmcm9tIG90aGVyIG1vbnRocyBhY3RpdmVcclxuICAgKi9cclxuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2VzIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzIGFjdGl2ZVxyXG4gICAqL1xyXG4gIHNlbGVjdFdlZWs/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgY2xhc3MgdG8gY3VycmVudCBkYXlcclxuICAgKi9cclxuICBjdXN0b21Ub2RheUNsYXNzPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZWZhdWx0IG1vZGUgZm9yIGFsbCBkYXRlIHBpY2tlcnNcclxuICAgKi9cclxuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XHJcblxyXG4gIC8qKiBDU1MgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIGRhdGVwaWNrZXIgY29udGFpbmVyLFxyXG4gICAqIHVzdWFsbHkgdXNlZCB0byBzZXQgY29sb3IgdGhlbWVcclxuICAgKi9cclxuICBjb250YWluZXJDbGFzcyA9ICd0aGVtZS1ncmVlbic7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXHJcbiAgZGlzcGxheU1vbnRocyA9IDE7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRvIGhpZGUgd2VlayBudW1iZXJzIGluIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBzaG93V2Vla051bWJlcnMgPSB0cnVlO1xyXG5cclxuICBkYXRlSW5wdXRGb3JtYXQgPSAnTCc7XHJcbiAgLy8gcmFuZ2UgcGlja2VyXHJcbiAgcmFuZ2VTZXBhcmF0b3IgPSAnIC0gJztcclxuICAvKipcclxuICAgKiBEYXRlIGZvcm1hdCBmb3IgZGF0ZSByYW5nZSBpbnB1dCBmaWVsZFxyXG4gICAqL1xyXG4gIHJhbmdlSW5wdXRGb3JtYXQgPSAnTCc7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXHJcbiAgbW9udGhUaXRsZSA9ICdNTU1NJztcclxuICB5ZWFyVGl0bGUgPSAnWVlZWSc7XHJcbiAgZGF5TGFiZWwgPSAnRCc7XHJcbiAgbW9udGhMYWJlbCA9ICdNTU1NJztcclxuICB5ZWFyTGFiZWwgPSAnWVlZWSc7XHJcbiAgd2Vla051bWJlcnMgPSAndyc7XHJcbn1cclxuIl19