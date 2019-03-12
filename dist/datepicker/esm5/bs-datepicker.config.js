/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
var BsDatepickerConfig = /** @class */ (function () {
    function BsDatepickerConfig() {
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
    BsDatepickerConfig.decorators = [
        { type: Injectable }
    ];
    return BsDatepickerConfig;
}());
export { BsDatepickerConfig };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7OztnQ0FjdEIsS0FBSzs7Ozs7OEJBeUNQLGFBQWE7OzZCQUdkLENBQUM7Ozs7K0JBSUMsSUFBSTsrQkFFSixHQUFHOzs4QkFFSixLQUFLOzs7O2dDQUlILEdBQUc7OzBCQUdULE1BQU07eUJBQ1AsTUFBTTt3QkFDUCxHQUFHOzBCQUNELE1BQU07eUJBQ1AsTUFBTTsyQkFDSixHQUFHOzs7Z0JBbkVsQixVQUFVOzs2QkFYWDs7U0FZYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGVcclxufSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5cclxuLyoqXHJcbiAqIEZvciBkYXRlIHJhbmdlIHBpY2tlciB0aGVyZSBhcmUgYEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnYCB3aGljaCBpbmhlcml0cyBhbGwgcHJvcGVydGllcyxcclxuICogZXhjZXB0IGBkaXNwbGF5TW9udGhzYCwgZm9yIHJhbmdlIHBpY2tlciBpdCBkZWZhdWx0IHRvIGAyYFxyXG4gKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyQ29uZmlnIGltcGxlbWVudHMgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMge1xyXG4gIC8qKiBzZXRzIHVzZSBhZGFwdGl2ZSBwb3NpdGlvbiAqL1xyXG4gIGFkYXB0aXZlUG9zaXRpb24gPSBmYWxzZTtcclxuICB2YWx1ZT86IERhdGUgfCBEYXRlW107XHJcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBtaW4gZGF0ZSBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xyXG4gICAqL1xyXG4gIG1pbkRhdGU/OiBEYXRlO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgbWF4IGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcclxuICAgKi9cclxuICBtYXhEYXRlPzogRGF0ZTtcclxuXHJcbiAgZGF5c0Rpc2FibGVkPzogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcclxuICAgKi9cclxuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xyXG4gIC8qKlxyXG4gICAqIE1ha2VzIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzIGFjdGl2ZVxyXG4gICAqL1xyXG4gIHNlbGVjdEZyb21PdGhlck1vbnRoPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogTWFrZXMgZGF0ZXMgZnJvbSBvdGhlciBtb250aHMgYWN0aXZlXHJcbiAgICovXHJcbiAgc2VsZWN0V2Vlaz86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBjbGFzcyB0byBjdXJyZW50IGRheVxyXG4gICAqL1xyXG4gIGN1c3RvbVRvZGF5Q2xhc3M/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgbW9kZSBmb3IgYWxsIGRhdGUgcGlja2Vyc1xyXG4gICAqL1xyXG4gIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcclxuXHJcbiAgLyoqIENTUyBjbGFzcyB3aGljaCB3aWxsIGJlIGFwcGxpZWQgdG8gZGF0ZXBpY2tlciBjb250YWluZXIsXHJcbiAgICogdXN1YWxseSB1c2VkIHRvIHNldCBjb2xvciB0aGVtZVxyXG4gICAqL1xyXG4gIGNvbnRhaW5lckNsYXNzID0gJ3RoZW1lLWdyZWVuJztcclxuXHJcbiAgLy8gRGF0ZXBpY2tlclJlbmRlck9wdGlvbnNcclxuICBkaXNwbGF5TW9udGhzID0gMTtcclxuICAvKipcclxuICAgKiBBbGxvd3MgdG8gaGlkZSB3ZWVrIG51bWJlcnMgaW4gZGF0ZXBpY2tlclxyXG4gICAqL1xyXG4gIHNob3dXZWVrTnVtYmVycyA9IHRydWU7XHJcblxyXG4gIGRhdGVJbnB1dEZvcm1hdCA9ICdMJztcclxuICAvLyByYW5nZSBwaWNrZXJcclxuICByYW5nZVNlcGFyYXRvciA9ICcgLSAnO1xyXG4gIC8qKlxyXG4gICAqIERhdGUgZm9ybWF0IGZvciBkYXRlIHJhbmdlIGlucHV0IGZpZWxkXHJcbiAgICovXHJcbiAgcmFuZ2VJbnB1dEZvcm1hdCA9ICdMJztcclxuXHJcbiAgLy8gRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcclxuICBtb250aFRpdGxlID0gJ01NTU0nO1xyXG4gIHllYXJUaXRsZSA9ICdZWVlZJztcclxuICBkYXlMYWJlbCA9ICdEJztcclxuICBtb250aExhYmVsID0gJ01NTU0nO1xyXG4gIHllYXJMYWJlbCA9ICdZWVlZJztcclxuICB3ZWVrTnVtYmVycyA9ICd3JztcclxufVxyXG4iXX0=