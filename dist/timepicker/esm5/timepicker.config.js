/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Provides default configuration values for timepicker
 */
var TimepickerConfig = /** @class */ (function () {
    function TimepickerConfig() {
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
    TimepickerConfig.decorators = [
        { type: Injectable }
    ];
    return TimepickerConfig;
}());
export { TimepickerConfig };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7O3dCQU05QixDQUFDOzs7OzBCQUVDLENBQUM7Ozs7MkJBRUEsRUFBRTs7Ozs0QkFFRCxJQUFJOzs7O3lCQUVQLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzs7Ozs2QkFFUixLQUFLOzs7O3dCQUVWLEtBQUs7Ozs7MEJBRUgsSUFBSTs7Ozt5QkFFTCxJQUFJOzs7OzRCQUVELElBQUk7Ozs7MkJBRUwsS0FBSzs7OzsyQkFFTCxJQUFJOzs7Z0JBekJuQixVQUFVOzsyQkFIWDs7U0FJYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKiogUHJvdmlkZXMgZGVmYXVsdCBjb25maWd1cmF0aW9uIHZhbHVlcyBmb3IgdGltZXBpY2tlciAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29uZmlnIHtcclxuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cclxuICBob3VyU3RlcCA9IDE7XHJcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXHJcbiAgbWludXRlU3RlcCA9IDU7XHJcbiAgLyoqIHNlY29uZHMgY2hhbmdlcyBzdGVwICovXHJcbiAgc2Vjb25kc1N0ZXAgPSAxMDtcclxuICAvKiogaWYgdHJ1ZSB3b3JrcyBpbiAxMkggbW9kZSBhbmQgZGlzcGxheXMgQU0vUE0uIElmIGZhbHNlIHdvcmtzIGluIDI0SCBtb2RlIGFuZCBoaWRlcyBBTS9QTSAqL1xyXG4gIHNob3dNZXJpZGlhbiA9IHRydWU7XHJcbiAgLyoqIG1lcmlkaWFuIGxhYmVscyBiYXNlZCBvbiBsb2NhbGUgKi9cclxuICBtZXJpZGlhbnMgPSBbJ0FNJywgJ1BNJ107XHJcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgcmVhZG9ubHkgKi9cclxuICByZWFkb25seUlucHV0ID0gZmFsc2U7XHJcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgZGlzYWJsZWQgKi9cclxuICBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIC8qKiBpZiB0cnVlIHNjcm9sbCBpbnNpZGUgaG91cnMgYW5kIG1pbnV0ZXMgaW5wdXRzIHdpbGwgY2hhbmdlIHRpbWUgKi9cclxuICBtb3VzZXdoZWVsID0gdHJ1ZTtcclxuICAvKiogaWYgdHJ1ZSB0aGUgdmFsdWVzIG9mIGhvdXJzIGFuZCBtaW51dGVzIGNhbiBiZSBjaGFuZ2VkIHVzaW5nIHRoZSB1cC9kb3duIGFycm93IGtleXMgb24gdGhlIGtleWJvYXJkICovXHJcbiAgYXJyb3drZXlzID0gdHJ1ZTtcclxuICAvKiogaWYgdHJ1ZSBzcGlubmVyIGFycm93cyBhYm92ZSBhbmQgYmVsb3cgdGhlIGlucHV0cyB3aWxsIGJlIHNob3duICovXHJcbiAgc2hvd1NwaW5uZXJzID0gdHJ1ZTtcclxuICAvKiogc2hvdyBzZWNvbmRzIGluIHRpbWVwaWNrZXIgKi9cclxuICBzaG93U2Vjb25kcyA9IGZhbHNlO1xyXG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xyXG4gIHNob3dNaW51dGVzID0gdHJ1ZTtcclxuICAvKiogbWluaW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xyXG4gIG1pbjogRGF0ZTtcclxuICAvKiogbWF4aW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xyXG4gIG1heDogRGF0ZTtcclxufVxyXG4iXX0=