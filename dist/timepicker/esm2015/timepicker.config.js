/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Provides default configuration values for timepicker
 */
export class TimepickerConfig {
    constructor() {
        /**
         * hours change step
         */
        this.hourStep = 1;
        /**
         * hours change step
         */
        this.minuteStep = 5;
        /**
         * seconds changes step
         */
        this.secondsStep = 10;
        /**
         * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
         */
        this.showMeridian = true;
        /**
         * meridian labels based on locale
         */
        this.meridians = ['AM', 'PM'];
        /**
         * if true hours and minutes fields will be readonly
         */
        this.readonlyInput = false;
        /**
         * if true hours and minutes fields will be disabled
         */
        this.disabled = false;
        /**
         * if true scroll inside hours and minutes inputs will change time
         */
        this.mousewheel = true;
        /**
         * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
         */
        this.arrowkeys = true;
        /**
         * if true spinner arrows above and below the inputs will be shown
         */
        this.showSpinners = true;
        /**
         * show seconds in timepicker
         */
        this.showSeconds = false;
        /**
         * show minutes in timepicker
         */
        this.showMinutes = true;
    }
}
TimepickerConfig.decorators = [
    { type: Injectable }
];
function TimepickerConfig_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TimepickerConfig.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TimepickerConfig.ctorParameters;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.hourStep;
    /**
     * hours change step
     * @type {?}
     */
    TimepickerConfig.prototype.minuteStep;
    /**
     * seconds changes step
     * @type {?}
     */
    TimepickerConfig.prototype.secondsStep;
    /**
     * if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM
     * @type {?}
     */
    TimepickerConfig.prototype.showMeridian;
    /**
     * meridian labels based on locale
     * @type {?}
     */
    TimepickerConfig.prototype.meridians;
    /**
     * if true hours and minutes fields will be readonly
     * @type {?}
     */
    TimepickerConfig.prototype.readonlyInput;
    /**
     * if true hours and minutes fields will be disabled
     * @type {?}
     */
    TimepickerConfig.prototype.disabled;
    /**
     * if true scroll inside hours and minutes inputs will change time
     * @type {?}
     */
    TimepickerConfig.prototype.mousewheel;
    /**
     * if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard
     * @type {?}
     */
    TimepickerConfig.prototype.arrowkeys;
    /**
     * if true spinner arrows above and below the inputs will be shown
     * @type {?}
     */
    TimepickerConfig.prototype.showSpinners;
    /**
     * show seconds in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showSeconds;
    /**
     * show minutes in timepicker
     * @type {?}
     */
    TimepickerConfig.prototype.showMinutes;
    /**
     * minimum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.min;
    /**
     * maximum time user can select
     * @type {?}
     */
    TimepickerConfig.prototype.max;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUkzQyxNQUFNOzs7Ozt3QkFFTyxDQUFDOzs7OzBCQUVDLENBQUM7Ozs7MkJBRUEsRUFBRTs7Ozs0QkFFRCxJQUFJOzs7O3lCQUVQLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzs7Ozs2QkFFUixLQUFLOzs7O3dCQUVWLEtBQUs7Ozs7MEJBRUgsSUFBSTs7Ozt5QkFFTCxJQUFJOzs7OzRCQUVELElBQUk7Ozs7MkJBRUwsS0FBSzs7OzsyQkFFTCxJQUFJOzs7O1lBekJuQixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIFByb3ZpZGVzIGRlZmF1bHQgY29uZmlndXJhdGlvbiB2YWx1ZXMgZm9yIHRpbWVwaWNrZXIgKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbmZpZyB7XHJcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXHJcbiAgaG91clN0ZXAgPSAxO1xyXG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIG1pbnV0ZVN0ZXAgPSA1O1xyXG4gIC8qKiBzZWNvbmRzIGNoYW5nZXMgc3RlcCAqL1xyXG4gIHNlY29uZHNTdGVwID0gMTA7XHJcbiAgLyoqIGlmIHRydWUgd29ya3MgaW4gMTJIIG1vZGUgYW5kIGRpc3BsYXlzIEFNL1BNLiBJZiBmYWxzZSB3b3JrcyBpbiAyNEggbW9kZSBhbmQgaGlkZXMgQU0vUE0gKi9cclxuICBzaG93TWVyaWRpYW4gPSB0cnVlO1xyXG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXHJcbiAgbWVyaWRpYW5zID0gWydBTScsICdQTSddO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXHJcbiAgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXHJcbiAgbW91c2V3aGVlbCA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xyXG4gIGFycm93a2V5cyA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgc3Bpbm5lciBhcnJvd3MgYWJvdmUgYW5kIGJlbG93IHRoZSBpbnB1dHMgd2lsbCBiZSBzaG93biAqL1xyXG4gIHNob3dTcGlubmVycyA9IHRydWU7XHJcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXHJcbiAgc2hvd1NlY29uZHMgPSBmYWxzZTtcclxuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cclxuICBzaG93TWludXRlcyA9IHRydWU7XHJcbiAgLyoqIG1pbmltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cclxuICBtaW46IERhdGU7XHJcbiAgLyoqIG1heGltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cclxuICBtYXg6IERhdGU7XHJcbn1cclxuIl19