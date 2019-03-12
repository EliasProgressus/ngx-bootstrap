(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('ngx-bootstrap/mini-ngrx'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/timepicker', ['exports', '@angular/core', 'rxjs', 'ngx-bootstrap/mini-ngrx', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].timepicker = {}),global.ng.core,global.rxjs,global.miniNgrx,global.ng.forms,global.ng.common));
}(this, (function (exports,core,rxjs,miniNgrx,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimepickerActions = (function () {
        function TimepickerActions() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerActions.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: TimepickerActions.WRITE_VALUE,
                    payload: value
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TimepickerActions.prototype.changeHours = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: TimepickerActions.CHANGE_HOURS,
                    payload: event
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TimepickerActions.prototype.changeMinutes = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: TimepickerActions.CHANGE_MINUTES,
                    payload: event
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        TimepickerActions.prototype.changeSeconds = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: TimepickerActions.CHANGE_SECONDS,
                    payload: event
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerActions.prototype.setTime = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: TimepickerActions.SET_TIME_UNIT,
                    payload: value
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerActions.prototype.updateControls = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: TimepickerActions.UPDATE_CONTROLS,
                    payload: value
                };
            };
        TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
        TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
        TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
        TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
        TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
        TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
        TimepickerActions.decorators = [
            { type: core.Injectable }
        ];
        return TimepickerActions;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ dex = 10;
    var /** @type {?} */ hoursPerDay = 24;
    var /** @type {?} */ hoursPerDayHalf = 12;
    var /** @type {?} */ minutesPerHour = 60;
    var /** @type {?} */ secondsPerMinute = 60;
    /**
     * @param {?=} value
     * @return {?}
     */
    function isValidDate(value) {
        if (!value) {
            return false;
        }
        if (value instanceof Date && isNaN(value.getHours())) {
            return false;
        }
        if (typeof value === 'string') {
            return isValidDate(new Date(value));
        }
        return true;
    }
    /**
     * @param {?} controls
     * @param {?} newDate
     * @return {?}
     */
    function isValidLimit(controls, newDate) {
        if (controls.min && newDate < controls.min) {
            return false;
        }
        if (controls.max && newDate > controls.max) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function toNumber(value) {
        if (typeof value === 'number') {
            return value;
        }
        return parseInt(value, dex);
    }
    /**
     * @param {?} value
     * @param {?=} isPM
     * @return {?}
     */
    function parseHours(value, isPM) {
        if (isPM === void 0) {
            isPM = false;
        }
        var /** @type {?} */ hour = toNumber(value);
        if (isNaN(hour) ||
            hour < 0 ||
            hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
            return NaN;
        }
        return hour;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function parseMinutes(value) {
        var /** @type {?} */ minute = toNumber(value);
        if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
            return NaN;
        }
        return minute;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function parseSeconds(value) {
        var /** @type {?} */ seconds = toNumber(value);
        if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
            return NaN;
        }
        return seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function parseTime(value) {
        if (typeof value === 'string') {
            return new Date(value);
        }
        return value;
    }
    /**
     * @param {?} value
     * @param {?} diff
     * @return {?}
     */
    function changeTime(value, diff) {
        if (!value) {
            return changeTime(createDate(new Date(), 0, 0, 0), diff);
        }
        var /** @type {?} */ hour = value.getHours();
        var /** @type {?} */ minutes = value.getMinutes();
        var /** @type {?} */ seconds = value.getSeconds();
        if (diff.hour) {
            hour = (hour + toNumber(diff.hour)) % hoursPerDay;
            if (hour < 0) {
                hour += hoursPerDay;
            }
        }
        if (diff.minute) {
            minutes = minutes + toNumber(diff.minute);
        }
        if (diff.seconds) {
            seconds = seconds + toNumber(diff.seconds);
        }
        return createDate(value, hour, minutes, seconds);
    }
    /**
     * @param {?} value
     * @param {?} opts
     * @return {?}
     */
    function setTime(value, opts) {
        var /** @type {?} */ hour = parseHours(opts.hour);
        var /** @type {?} */ minute = parseMinutes(opts.minute);
        var /** @type {?} */ seconds = parseSeconds(opts.seconds) || 0;
        if (opts.isPM) {
            hour += hoursPerDayHalf;
        }
        if (!value) {
            if (!isNaN(hour) && !isNaN(minute)) {
                return createDate(new Date(), hour, minute, seconds);
            }
            return value;
        }
        if (isNaN(hour) || isNaN(minute)) {
            return value;
        }
        return createDate(value, hour, minute, seconds);
    }
    /**
     * @param {?} value
     * @param {?} hours
     * @param {?} minutes
     * @param {?} seconds
     * @return {?}
     */
    function createDate(value, hours, minutes, seconds) {
        return new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    function padNumber(value) {
        var /** @type {?} */ _value = value.toString();
        if (_value.length > 1) {
            return _value;
        }
        return "0" + _value;
    }
    /**
     * @param {?} hours
     * @param {?} isPM
     * @return {?}
     */
    function isHourInputValid(hours, isPM) {
        return !isNaN(parseHours(hours, isPM));
    }
    /**
     * @param {?} minutes
     * @return {?}
     */
    function isMinuteInputValid(minutes) {
        return !isNaN(parseMinutes(minutes));
    }
    /**
     * @param {?} seconds
     * @return {?}
     */
    function isSecondInputValid(seconds) {
        return !isNaN(parseSeconds(seconds));
    }
    /**
     * @param {?} diff
     * @param {?} max
     * @param {?} min
     * @return {?}
     */
    function isInputLimitValid(diff, max, min) {
        var /** @type {?} */ newDate = changeTime(new Date(), diff);
        if (max && newDate > max) {
            return false;
        }
        if (min && newDate < min) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} hours
     * @param {?=} minutes
     * @param {?=} seconds
     * @param {?=} isPM
     * @return {?}
     */
    function isInputValid(hours, minutes, seconds, isPM) {
        if (minutes === void 0) {
            minutes = '0';
        }
        if (seconds === void 0) {
            seconds = '0';
        }
        return isHourInputValid(hours, isPM)
            && isMinuteInputValid(minutes)
            && isSecondInputValid(seconds);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} state
     * @param {?=} event
     * @return {?}
     */
    function canChangeValue(state, event) {
        if (state.readonlyInput || state.disabled) {
            return false;
        }
        if (event) {
            if (event.source === 'wheel' && !state.mousewheel) {
                return false;
            }
            if (event.source === 'key' && !state.arrowkeys) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} event
     * @param {?} controls
     * @return {?}
     */
    function canChangeHours(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementHours) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementHours) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} event
     * @param {?} controls
     * @return {?}
     */
    function canChangeMinutes(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementMinutes) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementMinutes) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} event
     * @param {?} controls
     * @return {?}
     */
    function canChangeSeconds(event, controls) {
        if (!event.step) {
            return false;
        }
        if (event.step > 0 && !controls.canIncrementSeconds) {
            return false;
        }
        if (event.step < 0 && !controls.canDecrementSeconds) {
            return false;
        }
        return true;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function getControlsValue(state) {
        var hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, readonlyInput = state.readonlyInput, disabled = state.disabled, mousewheel = state.mousewheel, arrowkeys = state.arrowkeys, showSpinners = state.showSpinners, showMeridian = state.showMeridian, showSeconds = state.showSeconds, meridians = state.meridians, min = state.min, max = state.max;
        return {
            hourStep: hourStep,
            minuteStep: minuteStep,
            secondsStep: secondsStep,
            readonlyInput: readonlyInput,
            disabled: disabled,
            mousewheel: mousewheel,
            arrowkeys: arrowkeys,
            showSpinners: showSpinners,
            showMeridian: showMeridian,
            showSeconds: showSeconds,
            meridians: meridians,
            min: min,
            max: max
        };
    }
    /**
     * @param {?} value
     * @param {?} state
     * @return {?}
     */
    function timepickerControls(value, state) {
        var /** @type {?} */ hoursPerDayHalf = 12;
        var min = state.min, max = state.max, hourStep = state.hourStep, minuteStep = state.minuteStep, secondsStep = state.secondsStep, showSeconds = state.showSeconds;
        var /** @type {?} */ res = {
            canIncrementHours: true,
            canIncrementMinutes: true,
            canIncrementSeconds: true,
            canDecrementHours: true,
            canDecrementMinutes: true,
            canDecrementSeconds: true,
            canToggleMeridian: true
        };
        if (!value) {
            return res;
        }
        // compare dates
        if (max) {
            var /** @type {?} */ _newHour = changeTime(value, { hour: hourStep });
            res.canIncrementHours = max > _newHour;
            if (!res.canIncrementHours) {
                var /** @type {?} */ _newMinutes = changeTime(value, { minute: minuteStep });
                res.canIncrementMinutes = showSeconds
                    ? max > _newMinutes
                    : max >= _newMinutes;
            }
            if (!res.canIncrementMinutes) {
                var /** @type {?} */ _newSeconds = changeTime(value, { seconds: secondsStep });
                res.canIncrementSeconds = max >= _newSeconds;
            }
            if (value.getHours() < hoursPerDayHalf) {
                res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
            }
        }
        if (min) {
            var /** @type {?} */ _newHour = changeTime(value, { hour: -hourStep });
            res.canDecrementHours = min < _newHour;
            if (!res.canDecrementHours) {
                var /** @type {?} */ _newMinutes = changeTime(value, { minute: -minuteStep });
                res.canDecrementMinutes = showSeconds
                    ? min < _newMinutes
                    : min <= _newMinutes;
            }
            if (!res.canDecrementMinutes) {
                var /** @type {?} */ _newSeconds = changeTime(value, { seconds: -secondsStep });
                res.canDecrementSeconds = min <= _newSeconds;
            }
            if (value.getHours() >= hoursPerDayHalf) {
                res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
            }
        }
        return res;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Provides default configuration values for timepicker
     */
    var TimepickerConfig = (function () {
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
            { type: core.Injectable }
        ];
        return TimepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ initialState = {
        value: null,
        config: new TimepickerConfig(),
        controls: {
            canIncrementHours: true,
            canIncrementMinutes: true,
            canIncrementSeconds: true,
            canDecrementHours: true,
            canDecrementMinutes: true,
            canDecrementSeconds: true,
            canToggleMeridian: true
        }
    };
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function timepickerReducer(state, action) {
        if (state === void 0) {
            state = initialState;
        }
        switch (action.type) {
            case TimepickerActions.WRITE_VALUE: {
                return Object.assign({}, state, { value: action.payload });
            }
            case TimepickerActions.CHANGE_HOURS: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeHours(action.payload, state.controls)) {
                    return state;
                }
                var /** @type {?} */ _newTime = changeTime(state.value, { hour: action.payload.step });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.CHANGE_MINUTES: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeMinutes(action.payload, state.controls)) {
                    return state;
                }
                var /** @type {?} */ _newTime = changeTime(state.value, { minute: action.payload.step });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.CHANGE_SECONDS: {
                if (!canChangeValue(state.config, action.payload) ||
                    !canChangeSeconds(action.payload, state.controls)) {
                    return state;
                }
                var /** @type {?} */ _newTime = changeTime(state.value, {
                    seconds: action.payload.step
                });
                if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                    return state;
                }
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.SET_TIME_UNIT: {
                if (!canChangeValue(state.config)) {
                    return state;
                }
                var /** @type {?} */ _newTime = setTime(state.value, action.payload);
                return Object.assign({}, state, { value: _newTime });
            }
            case TimepickerActions.UPDATE_CONTROLS: {
                var /** @type {?} */ _newControlsState = timepickerControls(state.value, action.payload);
                var /** @type {?} */ _newState = {
                    value: state.value,
                    config: action.payload,
                    controls: _newControlsState
                };
                if (state.config.showMeridian !== _newState.config.showMeridian) {
                    if (state.value) {
                        _newState.value = new Date(state.value);
                    }
                }
                return Object.assign({}, state, _newState);
            }
            default:
                return state;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimepickerStore = (function (_super) {
        __extends(TimepickerStore, _super);
        function TimepickerStore() {
            var _this = this;
            var /** @type {?} */ _dispatcher = new rxjs.BehaviorSubject({
                type: '[mini-ngrx] dispatcher init'
            });
            var /** @type {?} */ state = new miniNgrx.MiniState(initialState, _dispatcher, timepickerReducer);
            _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
            return _this;
        }
        TimepickerStore.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        TimepickerStore.ctorParameters = function () { return []; };
        return TimepickerStore;
    }(miniNgrx.MiniStore));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return TimepickerComponent; }),
        multi: true
    };
    var TimepickerComponent = (function () {
        function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
            var _this = this;
            this._cd = _cd;
            this._store = _store;
            this._timepickerActions = _timepickerActions;
            /**
             * emits true if value is a valid date
             */
            this.isValid = new core.EventEmitter();
            // min\max validation for input fields
            this.invalidHours = false;
            this.invalidMinutes = false;
            this.invalidSeconds = false;
            // control value accessor methods
            // tslint:disable-next-line:no-any
            this.onChange = Function.prototype;
            // tslint:disable-next-line:no-any
            this.onTouched = Function.prototype;
            Object.assign(this, _config);
            this.timepickerSub = _store
                .select(function (state) { return state.value; })
                .subscribe(function (value) {
                // update UI values if date changed
                // update UI values if date changed
                _this._renderTime(value);
                _this.onChange(value);
                _this._store.dispatch(_this._timepickerActions.updateControls(getControlsValue(_this)));
            });
            _store
                .select(function (state) { return state.controls; })
                .subscribe(function (controlsState) {
                _this.isValid.emit(isInputValid(_this.hours, _this.minutes, _this.seconds, _this.isPM()));
                Object.assign(_this, controlsState);
                _cd.markForCheck();
            });
        }
        Object.defineProperty(TimepickerComponent.prototype, "isSpinnersVisible", {
            /** @deprecated - please use `isEditable` instead */
            get: /**
             * @deprecated - please use `isEditable` instead
             * @return {?}
             */ function () {
                return this.showSpinners && !this.readonlyInput;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimepickerComponent.prototype, "isEditable", {
            get: /**
             * @return {?}
             */ function () {
                return !(this.readonlyInput || this.disabled);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.resetValidation = /**
         * @return {?}
         */
            function () {
                this.invalidHours = false;
                this.invalidMinutes = false;
                this.invalidSeconds = false;
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.isPM = /**
         * @return {?}
         */
            function () {
                return this.showMeridian && this.meridian === this.meridians[1];
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        TimepickerComponent.prototype.prevDef = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                $event.preventDefault();
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        TimepickerComponent.prototype.wheelSign = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                return Math.sign($event.deltaY) * -1;
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        TimepickerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
            };
        /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
        TimepickerComponent.prototype.changeHours = /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
            function (step, source) {
                if (source === void 0) {
                    source = '';
                }
                this.resetValidation();
                this._store.dispatch(this._timepickerActions.changeHours({ step: step, source: source }));
            };
        /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
        TimepickerComponent.prototype.changeMinutes = /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
            function (step, source) {
                if (source === void 0) {
                    source = '';
                }
                this.resetValidation();
                this._store.dispatch(this._timepickerActions.changeMinutes({ step: step, source: source }));
            };
        /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
        TimepickerComponent.prototype.changeSeconds = /**
         * @param {?} step
         * @param {?=} source
         * @return {?}
         */
            function (step, source) {
                if (source === void 0) {
                    source = '';
                }
                this.resetValidation();
                this._store.dispatch(this._timepickerActions.changeSeconds({ step: step, source: source }));
            };
        /**
         * @param {?} hours
         * @return {?}
         */
        TimepickerComponent.prototype.updateHours = /**
         * @param {?} hours
         * @return {?}
         */
            function (hours) {
                this.resetValidation();
                this.hours = hours;
                var /** @type {?} */ isValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
                if (!isValid) {
                    this.invalidHours = true;
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._updateTime();
            };
        /**
         * @param {?} minutes
         * @return {?}
         */
        TimepickerComponent.prototype.updateMinutes = /**
         * @param {?} minutes
         * @return {?}
         */
            function (minutes) {
                this.resetValidation();
                this.minutes = minutes;
                var /** @type {?} */ isValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
                if (!isValid) {
                    this.invalidMinutes = true;
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._updateTime();
            };
        /**
         * @param {?} seconds
         * @return {?}
         */
        TimepickerComponent.prototype.updateSeconds = /**
         * @param {?} seconds
         * @return {?}
         */
            function (seconds) {
                this.resetValidation();
                this.seconds = seconds;
                var /** @type {?} */ isValid = isSecondInputValid(this.seconds) && this.isValidLimit();
                if (!isValid) {
                    this.invalidSeconds = true;
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._updateTime();
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.isValidLimit = /**
         * @return {?}
         */
            function () {
                return isInputLimitValid({
                    hour: this.hours,
                    minute: this.minutes,
                    seconds: this.seconds,
                    isPM: this.isPM()
                }, this.max, this.min);
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype._updateTime = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ _seconds = this.showSeconds ? this.seconds : void 0;
                var /** @type {?} */ _minutes = this.showMinutes ? this.minutes : void 0;
                if (!isInputValid(this.hours, _minutes, _seconds, this.isPM())) {
                    this.isValid.emit(false);
                    this.onChange(null);
                    return;
                }
                this._store.dispatch(this._timepickerActions.setTime({
                    hour: this.hours,
                    minute: this.minutes,
                    seconds: this.seconds,
                    isPM: this.isPM()
                }));
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.toggleMeridian = /**
         * @return {?}
         */
            function () {
                if (!this.showMeridian || !this.isEditable) {
                    return;
                }
                var /** @type {?} */ _hoursPerDayHalf = 12;
                this._store.dispatch(this._timepickerActions.changeHours({
                    step: _hoursPerDayHalf,
                    source: ''
                }));
            };
        /**
         * Write a new value to the element.
         */
        /**
         * Write a new value to the element.
         * @param {?} obj
         * @return {?}
         */
        TimepickerComponent.prototype.writeValue = /**
         * Write a new value to the element.
         * @param {?} obj
         * @return {?}
         */
            function (obj) {
                if (isValidDate(obj)) {
                    this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
                }
                else if (obj == null) {
                    this._store.dispatch(this._timepickerActions.writeValue(null));
                }
            };
        /**
         * Set the function to be called when the control receives a change event.
         */
        // tslint:disable-next-line:no-any
        /**
         * Set the function to be called when the control receives a change event.
         * @param {?} fn
         * @return {?}
         */
        TimepickerComponent.prototype.registerOnChange = /**
         * Set the function to be called when the control receives a change event.
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * Set the function to be called when the control receives a touch event.
         */
        /**
         * Set the function to be called when the control receives a touch event.
         * @param {?} fn
         * @return {?}
         */
        TimepickerComponent.prototype.registerOnTouched = /**
         * Set the function to be called when the control receives a touch event.
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * This function is called when the control status changes to or from "disabled".
         * Depending on the value, it will enable or disable the appropriate DOM element.
         *
         * @param isDisabled
         */
        /**
         * This function is called when the control status changes to or from "disabled".
         * Depending on the value, it will enable or disable the appropriate DOM element.
         *
         * @param {?} isDisabled
         * @return {?}
         */
        TimepickerComponent.prototype.setDisabledState = /**
         * This function is called when the control status changes to or from "disabled".
         * Depending on the value, it will enable or disable the appropriate DOM element.
         *
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.disabled = isDisabled;
                this._cd.markForCheck();
            };
        /**
         * @return {?}
         */
        TimepickerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.timepickerSub.unsubscribe();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        TimepickerComponent.prototype._renderTime = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!isValidDate(value)) {
                    this.hours = '';
                    this.minutes = '';
                    this.seconds = '';
                    this.meridian = this.meridians[0];
                    return;
                }
                var /** @type {?} */ _value = parseTime(value);
                var /** @type {?} */ _hoursPerDayHalf = 12;
                var /** @type {?} */ _hours = _value.getHours();
                if (this.showMeridian) {
                    this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
                    _hours = _hours % _hoursPerDayHalf;
                    // should be 12 PM, not 00 PM
                    if (_hours === 0) {
                        _hours = _hoursPerDayHalf;
                    }
                }
                this.hours = padNumber(_hours);
                this.minutes = padNumber(_value.getMinutes());
                this.seconds = padNumber(_value.getUTCSeconds());
            };
        TimepickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'timepicker',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                        template: "<table>\r\n  <tbody>\r\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\r\n    <!-- increment hours button-->\r\n    <td>\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\r\n         (click)=\"changeHours(hourStep)\"\r\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- increment minutes button -->\r\n    <td *ngIf=\"showMinutes\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\r\n         (click)=\"changeMinutes(minuteStep)\"\r\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\r\n    <!-- increment seconds button -->\r\n    <td *ngIf=\"showSeconds\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\r\n         (click)=\"changeSeconds(secondsStep)\">\r\n        <span class=\"bs-chevron bs-chevron-up\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian placeholder-->\r\n    <td *ngIf=\"showMeridian\"></td>\r\n  </tr>\r\n  <tr>\r\n    <!-- hours -->\r\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             placeholder=\"HH\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"hours\"\r\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\r\n             (change)=\"updateHours($event.target.value)\"></td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\r\n    <!-- minutes -->\r\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             placeholder=\"MM\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"minutes\"\r\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\r\n             (change)=\"updateMinutes($event.target.value)\">\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\r\n    <!-- seconds -->\r\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             placeholder=\"SS\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"seconds\"\r\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\r\n             (change)=\"updateSeconds($event.target.value)\">\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian -->\r\n    <td *ngIf=\"showMeridian\">\r\n      <button type=\"button\" class=\"btn btn-default text-center\"\r\n              [disabled]=\"!isEditable || !canToggleMeridian\"\r\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\r\n              (click)=\"toggleMeridian()\"\r\n      >{{ meridian }}\r\n      </button>\r\n    </td>\r\n  </tr>\r\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\r\n    <!-- decrement hours button-->\r\n    <td>\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\r\n         (click)=\"changeHours(-hourStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- decrement minutes button-->\r\n    <td *ngIf=\"showMinutes\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\r\n         (click)=\"changeMinutes(-minuteStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\r\n    <!-- decrement seconds button-->\r\n    <td *ngIf=\"showSeconds\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\r\n         (click)=\"changeSeconds(-secondsStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian placeholder-->\r\n    <td *ngIf=\"showMeridian\"></td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n",
                        encapsulation: core.ViewEncapsulation.None,
                        styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        TimepickerComponent.ctorParameters = function () {
            return [
                { type: TimepickerConfig, },
                { type: core.ChangeDetectorRef, },
                { type: TimepickerStore, },
                { type: TimepickerActions, },
            ];
        };
        TimepickerComponent.propDecorators = {
            "hourStep": [{ type: core.Input },],
            "minuteStep": [{ type: core.Input },],
            "secondsStep": [{ type: core.Input },],
            "readonlyInput": [{ type: core.Input },],
            "disabled": [{ type: core.Input },],
            "mousewheel": [{ type: core.Input },],
            "arrowkeys": [{ type: core.Input },],
            "showSpinners": [{ type: core.Input },],
            "showMeridian": [{ type: core.Input },],
            "showMinutes": [{ type: core.Input },],
            "showSeconds": [{ type: core.Input },],
            "meridians": [{ type: core.Input },],
            "min": [{ type: core.Input },],
            "max": [{ type: core.Input },],
            "isValid": [{ type: core.Output },],
        };
        return TimepickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var TimepickerModule = (function () {
        function TimepickerModule() {
        }
        /**
         * @return {?}
         */
        TimepickerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: TimepickerModule,
                    providers: [TimepickerConfig, TimepickerActions, TimepickerStore]
                };
            };
        TimepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TimepickerComponent],
                        exports: [TimepickerComponent]
                    },] }
        ];
        return TimepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.TimepickerComponent = TimepickerComponent;
    exports.TimepickerActions = TimepickerActions;
    exports.TimepickerStore = TimepickerStore;
    exports.TimepickerConfig = TimepickerConfig;
    exports.TimepickerModule = TimepickerModule;
    exports.ɵa = TIMEPICKER_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10aW1lcGlja2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5hY3Rpb25zLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3RpbWVwaWNrZXIudXRpbHMudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLWNvbnRyb2xzLnV0aWwudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5yZWR1Y2VyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvcmVkdWNlci90aW1lcGlja2VyLnN0b3JlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcclxuaW1wb3J0IHtcclxuICBUaW1lQ2hhbmdlRXZlbnQsXHJcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxyXG4gIFRpbWVcclxufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVscyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQWN0aW9ucyB7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFdSSVRFX1ZBTFVFID0gJ1t0aW1lcGlja2VyXSB3cml0ZSB2YWx1ZSBmcm9tIG5nIG1vZGVsJztcclxuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX0hPVVJTID0gJ1t0aW1lcGlja2VyXSBjaGFuZ2UgaG91cnMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfTUlOVVRFUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIG1pbnV0ZXMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBDSEFOR0VfU0VDT05EUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIHNlY29uZHMnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfVElNRV9VTklUID0gJ1t0aW1lcGlja2VyXSBzZXQgdGltZSB1bml0JztcclxuICBzdGF0aWMgcmVhZG9ubHkgVVBEQVRFX0NPTlRST0xTID0gJ1t0aW1lcGlja2VyXSB1cGRhdGUgY29udHJvbHMnO1xyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5XUklURV9WQUxVRSxcclxuICAgICAgcGF5bG9hZDogdmFsdWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VIb3VycyhldmVudDogVGltZUNoYW5nZUV2ZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfSE9VUlMsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTWludXRlcyhldmVudDogVGltZUNoYW5nZUV2ZW50KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfTUlOVVRFUyxcclxuICAgICAgcGF5bG9hZDogZXZlbnRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTZWNvbmRzKGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1NFQ09ORFMsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0VGltZSh2YWx1ZTogVGltZSk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBUaW1lcGlja2VyQWN0aW9ucy5TRVRfVElNRV9VTklULFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUNvbnRyb2xzKHZhbHVlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuVVBEQVRFX0NPTlRST0xTLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lLCBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUgfSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWxzJztcclxuXHJcbmNvbnN0IGRleCA9IDEwO1xyXG5jb25zdCBob3Vyc1BlckRheSA9IDI0O1xyXG5jb25zdCBob3Vyc1BlckRheUhhbGYgPSAxMjtcclxuY29uc3QgbWludXRlc1BlckhvdXIgPSA2MDtcclxuY29uc3Qgc2Vjb25kc1Blck1pbnV0ZSA9IDYwO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWREYXRlKHZhbHVlPzogc3RyaW5nIHwgRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUgJiYgaXNOYU4odmFsdWUuZ2V0SG91cnMoKSkpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gaXNWYWxpZERhdGUobmV3IERhdGUodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZExpbWl0KGNvbnRyb2xzOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsIG5ld0RhdGU6IERhdGUpOiBib29sZWFuIHtcclxuICBpZiAoY29udHJvbHMubWluICYmIG5ld0RhdGUgPCBjb250cm9scy5taW4pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChjb250cm9scy5tYXggJiYgbmV3RGF0ZSA+IGNvbnRyb2xzLm1heCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCBkZXgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHZhbHVlIGlzIG51bWJlciB7XHJcbiAgcmV0dXJuICFpc05hTih0b051bWJlcih2YWx1ZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VIb3VycyhcclxuICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxyXG4gIGlzUE0gPSBmYWxzZVxyXG4pOiBudW1iZXIge1xyXG4gIGNvbnN0IGhvdXIgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgaWYgKFxyXG4gICAgaXNOYU4oaG91cikgfHxcclxuICAgIGhvdXIgPCAwIHx8XHJcbiAgICBob3VyID4gKGlzUE0gPyBob3Vyc1BlckRheUhhbGYgOiBob3Vyc1BlckRheSlcclxuICApIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaG91cjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlTWludXRlcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICBjb25zdCBtaW51dGUgPSB0b051bWJlcih2YWx1ZSk7XHJcbiAgaWYgKGlzTmFOKG1pbnV0ZSkgfHwgbWludXRlIDwgMCB8fCBtaW51dGUgPiBtaW51dGVzUGVySG91cikge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHJldHVybiBtaW51dGU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVNlY29uZHModmFsdWU6IHN0cmluZyB8IG51bWJlcik6IG51bWJlciB7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoaXNOYU4oc2Vjb25kcykgfHwgc2Vjb25kcyA8IDAgfHwgc2Vjb25kcyA+IHNlY29uZHNQZXJNaW51dGUpIHtcclxuICAgIHJldHVybiBOYU47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gc2Vjb25kcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSk6IERhdGUge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVGltZSh2YWx1ZTogRGF0ZSwgZGlmZjogVGltZSk6IERhdGUge1xyXG4gIGlmICghdmFsdWUpIHtcclxuICAgIHJldHVybiBjaGFuZ2VUaW1lKGNyZWF0ZURhdGUobmV3IERhdGUoKSwgMCwgMCwgMCksIGRpZmYpO1xyXG4gIH1cclxuXHJcbiAgbGV0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xyXG4gIGxldCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xyXG4gIGxldCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xyXG5cclxuICBpZiAoZGlmZi5ob3VyKSB7XHJcbiAgICBob3VyID0gKGhvdXIgKyB0b051bWJlcihkaWZmLmhvdXIpKSAlIGhvdXJzUGVyRGF5O1xyXG4gICAgaWYgKGhvdXIgPCAwKSB7XHJcbiAgICAgIGhvdXIgKz0gaG91cnNQZXJEYXk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoZGlmZi5taW51dGUpIHtcclxuICAgIG1pbnV0ZXMgPSBtaW51dGVzICsgdG9OdW1iZXIoZGlmZi5taW51dGUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGRpZmYuc2Vjb25kcykge1xyXG4gICAgc2Vjb25kcyA9IHNlY29uZHMgKyB0b051bWJlcihkaWZmLnNlY29uZHMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNyZWF0ZURhdGUodmFsdWUsIGhvdXIsIG1pbnV0ZXMsIHNlY29uZHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0VGltZSh2YWx1ZTogRGF0ZSwgb3B0czogVGltZSk6IERhdGUge1xyXG4gIGxldCBob3VyID0gcGFyc2VIb3VycyhvcHRzLmhvdXIpO1xyXG4gIGNvbnN0IG1pbnV0ZSA9IHBhcnNlTWludXRlcyhvcHRzLm1pbnV0ZSk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHBhcnNlU2Vjb25kcyhvcHRzLnNlY29uZHMpIHx8IDA7XHJcblxyXG4gIGlmIChvcHRzLmlzUE0pIHtcclxuICAgIGhvdXIgKz0gaG91cnNQZXJEYXlIYWxmO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgaWYgKCFpc05hTihob3VyKSAmJiAhaXNOYU4obWludXRlKSkge1xyXG4gICAgICByZXR1cm4gY3JlYXRlRGF0ZShuZXcgRGF0ZSgpLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGlmIChpc05hTihob3VyKSB8fCBpc05hTihtaW51dGUpKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlRGF0ZSh2YWx1ZSwgaG91ciwgbWludXRlLCBzZWNvbmRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoXHJcbiAgdmFsdWU6IERhdGUsXHJcbiAgaG91cnM6IG51bWJlcixcclxuICBtaW51dGVzOiBudW1iZXIsXHJcbiAgc2Vjb25kczogbnVtYmVyXHJcbik6IERhdGUge1xyXG4gIHJldHVybiBuZXcgRGF0ZShcclxuICAgIHZhbHVlLmdldEZ1bGxZZWFyKCksXHJcbiAgICB2YWx1ZS5nZXRNb250aCgpLFxyXG4gICAgdmFsdWUuZ2V0RGF0ZSgpLFxyXG4gICAgaG91cnMsXHJcbiAgICBtaW51dGVzLFxyXG4gICAgc2Vjb25kcyxcclxuICAgIHZhbHVlLmdldE1pbGxpc2Vjb25kcygpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhZE51bWJlcih2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICBjb25zdCBfdmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gIGlmIChfdmFsdWUubGVuZ3RoID4gMSkge1xyXG4gICAgcmV0dXJuIF92YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBgMCR7X3ZhbHVlfWA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0hvdXJJbnB1dFZhbGlkKGhvdXJzOiBzdHJpbmcsIGlzUE06IGJvb2xlYW4pOiBib29sZWFuIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlSG91cnMoaG91cnMsIGlzUE0pKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWludXRlSW5wdXRWYWxpZChtaW51dGVzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlTWludXRlcyhtaW51dGVzKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1NlY29uZElucHV0VmFsaWQoc2Vjb25kczogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuICFpc05hTihwYXJzZVNlY29uZHMoc2Vjb25kcykpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dExpbWl0VmFsaWQoZGlmZjogVGltZSwgbWF4OiBEYXRlLCBtaW46IERhdGUpOiBib29sZWFuIHtcclxuICBjb25zdCBuZXdEYXRlID0gY2hhbmdlVGltZShuZXcgRGF0ZSgpLCBkaWZmKTtcclxuXHJcbiAgaWYgKG1heCAmJiBuZXdEYXRlID4gbWF4KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpZiAobWluICYmIG5ld0RhdGUgPCBtaW4pIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNJbnB1dFZhbGlkKFxyXG4gIGhvdXJzOiBzdHJpbmcsXHJcbiAgbWludXRlcyA9ICcwJyxcclxuICBzZWNvbmRzID0gJzAnLFxyXG4gIGlzUE06IGJvb2xlYW5cclxuKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIGlzSG91cklucHV0VmFsaWQoaG91cnMsIGlzUE0pXHJcbiAgICAmJiBpc01pbnV0ZUlucHV0VmFsaWQobWludXRlcylcclxuICAgICYmIGlzU2Vjb25kSW5wdXRWYWxpZChzZWNvbmRzKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjaGFuZ2VUaW1lIH0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcclxuaW1wb3J0IHtcclxuICBUaW1lQ2hhbmdlRXZlbnQsXHJcbiAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxyXG4gIFRpbWVwaWNrZXJDb250cm9sc1xyXG59IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZVZhbHVlKFxyXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXHJcbiAgZXZlbnQ/OiBUaW1lQ2hhbmdlRXZlbnRcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKHN0YXRlLnJlYWRvbmx5SW5wdXQgfHwgc3RhdGUuZGlzYWJsZWQpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ3doZWVsJyAmJiAhc3RhdGUubW91c2V3aGVlbCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gJ2tleScgJiYgIXN0YXRlLmFycm93a2V5cykge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbkNoYW5nZUhvdXJzKFxyXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXHJcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xyXG4pOiBib29sZWFuIHtcclxuICBpZiAoIWV2ZW50LnN0ZXApIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50SG91cnMpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50SG91cnMpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlTWludXRlcyhcclxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxyXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFldmVudC5zdGVwKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50TWludXRlcykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlU2Vjb25kcyhcclxuICBldmVudDogVGltZUNoYW5nZUV2ZW50LFxyXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHNcclxuKTogYm9vbGVhbiB7XHJcbiAgaWYgKCFldmVudC5zdGVwKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChldmVudC5zdGVwID4gMCAmJiAhY29udHJvbHMuY2FuSW5jcmVtZW50U2Vjb25kcykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBpZiAoZXZlbnQuc3RlcCA8IDAgJiYgIWNvbnRyb2xzLmNhbkRlY3JlbWVudFNlY29uZHMpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29udHJvbHNWYWx1ZShcclxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlXHJcbik6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaG91clN0ZXAsXHJcbiAgICBtaW51dGVTdGVwLFxyXG4gICAgc2Vjb25kc1N0ZXAsXHJcbiAgICByZWFkb25seUlucHV0LFxyXG4gICAgZGlzYWJsZWQsXHJcbiAgICBtb3VzZXdoZWVsLFxyXG4gICAgYXJyb3drZXlzLFxyXG4gICAgc2hvd1NwaW5uZXJzLFxyXG4gICAgc2hvd01lcmlkaWFuLFxyXG4gICAgc2hvd1NlY29uZHMsXHJcbiAgICBtZXJpZGlhbnMsXHJcbiAgICBtaW4sXHJcbiAgICBtYXhcclxuICB9ID0gc3RhdGU7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBob3VyU3RlcCxcclxuICAgIG1pbnV0ZVN0ZXAsXHJcbiAgICBzZWNvbmRzU3RlcCxcclxuICAgIHJlYWRvbmx5SW5wdXQsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIG1vdXNld2hlZWwsXHJcbiAgICBhcnJvd2tleXMsXHJcbiAgICBzaG93U3Bpbm5lcnMsXHJcbiAgICBzaG93TWVyaWRpYW4sXHJcbiAgICBzaG93U2Vjb25kcyxcclxuICAgIG1lcmlkaWFucyxcclxuICAgIG1pbixcclxuICAgIG1heFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lcGlja2VyQ29udHJvbHMoXHJcbiAgdmFsdWU6IERhdGUsXHJcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZVxyXG4pOiBUaW1lcGlja2VyQ29udHJvbHMge1xyXG4gIGNvbnN0IGhvdXJzUGVyRGF5SGFsZiA9IDEyO1xyXG4gIGNvbnN0IHsgbWluLCBtYXgsIGhvdXJTdGVwLCBtaW51dGVTdGVwLCBzZWNvbmRzU3RlcCwgc2hvd1NlY29uZHMgfSA9IHN0YXRlO1xyXG4gIGNvbnN0IHJlczogVGltZXBpY2tlckNvbnRyb2xzID0ge1xyXG4gICAgY2FuSW5jcmVtZW50SG91cnM6IHRydWUsXHJcbiAgICBjYW5JbmNyZW1lbnRNaW51dGVzOiB0cnVlLFxyXG4gICAgY2FuSW5jcmVtZW50U2Vjb25kczogdHJ1ZSxcclxuXHJcbiAgICBjYW5EZWNyZW1lbnRIb3VyczogdHJ1ZSxcclxuICAgIGNhbkRlY3JlbWVudE1pbnV0ZXM6IHRydWUsXHJcbiAgICBjYW5EZWNyZW1lbnRTZWNvbmRzOiB0cnVlLFxyXG5cclxuICAgIGNhblRvZ2dsZU1lcmlkaWFuOiB0cnVlXHJcbiAgfTtcclxuXHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8vIGNvbXBhcmUgZGF0ZXNcclxuICBpZiAobWF4KSB7XHJcbiAgICBjb25zdCBfbmV3SG91ciA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91clN0ZXAgfSk7XHJcbiAgICByZXMuY2FuSW5jcmVtZW50SG91cnMgPSBtYXggPiBfbmV3SG91cjtcclxuXHJcbiAgICBpZiAoIXJlcy5jYW5JbmNyZW1lbnRIb3Vycykge1xyXG4gICAgICBjb25zdCBfbmV3TWludXRlcyA9IGNoYW5nZVRpbWUodmFsdWUsIHsgbWludXRlOiBtaW51dGVTdGVwIH0pO1xyXG4gICAgICByZXMuY2FuSW5jcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXHJcbiAgICAgICAgPyBtYXggPiBfbmV3TWludXRlc1xyXG4gICAgICAgIDogbWF4ID49IF9uZXdNaW51dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzLmNhbkluY3JlbWVudE1pbnV0ZXMpIHtcclxuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IHNlY29uZHNTdGVwIH0pO1xyXG4gICAgICByZXMuY2FuSW5jcmVtZW50U2Vjb25kcyA9IG1heCA+PSBfbmV3U2Vjb25kcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuZ2V0SG91cnMoKSA8IGhvdXJzUGVyRGF5SGFsZikge1xyXG4gICAgICByZXMuY2FuVG9nZ2xlTWVyaWRpYW4gPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IGhvdXI6IGhvdXJzUGVyRGF5SGFsZiB9KSA8IG1heDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChtaW4pIHtcclxuICAgIGNvbnN0IF9uZXdIb3VyID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiAtaG91clN0ZXAgfSk7XHJcbiAgICByZXMuY2FuRGVjcmVtZW50SG91cnMgPSBtaW4gPCBfbmV3SG91cjtcclxuXHJcbiAgICBpZiAoIXJlcy5jYW5EZWNyZW1lbnRIb3Vycykge1xyXG4gICAgICBjb25zdCBfbmV3TWludXRlcyA9IGNoYW5nZVRpbWUodmFsdWUsIHsgbWludXRlOiAtbWludXRlU3RlcCB9KTtcclxuICAgICAgcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMgPSBzaG93U2Vjb25kc1xyXG4gICAgICAgID8gbWluIDwgX25ld01pbnV0ZXNcclxuICAgICAgICA6IG1pbiA8PSBfbmV3TWludXRlcztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXJlcy5jYW5EZWNyZW1lbnRNaW51dGVzKSB7XHJcbiAgICAgIGNvbnN0IF9uZXdTZWNvbmRzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBzZWNvbmRzOiAtc2Vjb25kc1N0ZXAgfSk7XHJcbiAgICAgIHJlcy5jYW5EZWNyZW1lbnRTZWNvbmRzID0gbWluIDw9IF9uZXdTZWNvbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5nZXRIb3VycygpID49IGhvdXJzUGVyRGF5SGFsZikge1xyXG4gICAgICByZXMuY2FuVG9nZ2xlTWVyaWRpYW4gPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IGhvdXI6IC1ob3Vyc1BlckRheUhhbGYgfSkgPiBtaW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcmVzO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKiBQcm92aWRlcyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciB0aW1lcGlja2VyICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb25maWcge1xyXG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIGhvdXJTdGVwID0gMTtcclxuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cclxuICBtaW51dGVTdGVwID0gNTtcclxuICAvKiogc2Vjb25kcyBjaGFuZ2VzIHN0ZXAgKi9cclxuICBzZWNvbmRzU3RlcCA9IDEwO1xyXG4gIC8qKiBpZiB0cnVlIHdvcmtzIGluIDEySCBtb2RlIGFuZCBkaXNwbGF5cyBBTS9QTS4gSWYgZmFsc2Ugd29ya3MgaW4gMjRIIG1vZGUgYW5kIGhpZGVzIEFNL1BNICovXHJcbiAgc2hvd01lcmlkaWFuID0gdHJ1ZTtcclxuICAvKiogbWVyaWRpYW4gbGFiZWxzIGJhc2VkIG9uIGxvY2FsZSAqL1xyXG4gIG1lcmlkaWFucyA9IFsnQU0nLCAnUE0nXTtcclxuICAvKiogaWYgdHJ1ZSBob3VycyBhbmQgbWludXRlcyBmaWVsZHMgd2lsbCBiZSByZWFkb25seSAqL1xyXG4gIHJlYWRvbmx5SW5wdXQgPSBmYWxzZTtcclxuICAvKiogaWYgdHJ1ZSBob3VycyBhbmQgbWludXRlcyBmaWVsZHMgd2lsbCBiZSBkaXNhYmxlZCAqL1xyXG4gIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgLyoqIGlmIHRydWUgc2Nyb2xsIGluc2lkZSBob3VycyBhbmQgbWludXRlcyBpbnB1dHMgd2lsbCBjaGFuZ2UgdGltZSAqL1xyXG4gIG1vdXNld2hlZWwgPSB0cnVlO1xyXG4gIC8qKiBpZiB0cnVlIHRoZSB2YWx1ZXMgb2YgaG91cnMgYW5kIG1pbnV0ZXMgY2FuIGJlIGNoYW5nZWQgdXNpbmcgdGhlIHVwL2Rvd24gYXJyb3cga2V5cyBvbiB0aGUga2V5Ym9hcmQgKi9cclxuICBhcnJvd2tleXMgPSB0cnVlO1xyXG4gIC8qKiBpZiB0cnVlIHNwaW5uZXIgYXJyb3dzIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5wdXRzIHdpbGwgYmUgc2hvd24gKi9cclxuICBzaG93U3Bpbm5lcnMgPSB0cnVlO1xyXG4gIC8qKiBzaG93IHNlY29uZHMgaW4gdGltZXBpY2tlciAqL1xyXG4gIHNob3dTZWNvbmRzID0gZmFsc2U7XHJcbiAgLyoqIHNob3cgbWludXRlcyBpbiB0aW1lcGlja2VyICovXHJcbiAgc2hvd01pbnV0ZXMgPSB0cnVlO1xyXG4gIC8qKiBtaW5pbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXHJcbiAgbWluOiBEYXRlO1xyXG4gIC8qKiBtYXhpbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXHJcbiAgbWF4OiBEYXRlO1xyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcclxuaW1wb3J0IHtcclxuICBjYW5DaGFuZ2VIb3VycyxcclxuICBjYW5DaGFuZ2VNaW51dGVzLFxyXG4gIGNhbkNoYW5nZVNlY29uZHMsXHJcbiAgY2FuQ2hhbmdlVmFsdWUsXHJcbiAgdGltZXBpY2tlckNvbnRyb2xzXHJcbn0gZnJvbSAnLi4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcclxuaW1wb3J0IHsgVGltZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uL3RpbWVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHtcclxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXHJcbiAgVGltZXBpY2tlckNvbnRyb2xzXHJcbn0gZnJvbSAnLi4vdGltZXBpY2tlci5tb2RlbHMnO1xyXG5pbXBvcnQgeyBjaGFuZ2VUaW1lLCBzZXRUaW1lLCBpc1ZhbGlkTGltaXQgfSBmcm9tICcuLi90aW1lcGlja2VyLnV0aWxzJztcclxuaW1wb3J0IHsgVGltZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3RpbWVwaWNrZXIuYWN0aW9ucyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlclN0YXRlIHtcclxuICB2YWx1ZTogRGF0ZTtcclxuICBjb25maWc6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZTtcclxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBUaW1lcGlja2VyU3RhdGUgPSB7XHJcbiAgdmFsdWU6IG51bGwsXHJcbiAgY29uZmlnOiBuZXcgVGltZXBpY2tlckNvbmZpZygpLFxyXG4gIGNvbnRyb2xzOiB7XHJcbiAgICBjYW5JbmNyZW1lbnRIb3VyczogdHJ1ZSxcclxuICAgIGNhbkluY3JlbWVudE1pbnV0ZXM6IHRydWUsXHJcbiAgICBjYW5JbmNyZW1lbnRTZWNvbmRzOiB0cnVlLFxyXG5cclxuICAgIGNhbkRlY3JlbWVudEhvdXJzOiB0cnVlLFxyXG4gICAgY2FuRGVjcmVtZW50TWludXRlczogdHJ1ZSxcclxuICAgIGNhbkRlY3JlbWVudFNlY29uZHM6IHRydWUsXHJcblxyXG4gICAgY2FuVG9nZ2xlTWVyaWRpYW46IHRydWVcclxuICB9XHJcbn07XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y3ljbG9tYXRpYy1jb21wbGV4aXR5XHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lcGlja2VyUmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uOiBBY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLldSSVRFX1ZBTFVFOiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogYWN0aW9uLnBheWxvYWQgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfSE9VUlM6IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcsIGFjdGlvbi5wYXlsb2FkKSB8fFxyXG4gICAgICAgICFjYW5DaGFuZ2VIb3VycyhhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY29udHJvbHMpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgX25ld1RpbWUgPSBjaGFuZ2VUaW1lKHN0YXRlLnZhbHVlLCB7IGhvdXI6IGFjdGlvbi5wYXlsb2FkLnN0ZXAgfSk7XHJcblxyXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdmFsdWU6IF9uZXdUaW1lIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX01JTlVURVM6IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgICFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcsIGFjdGlvbi5wYXlsb2FkKSB8fFxyXG4gICAgICAgICFjYW5DaGFuZ2VNaW51dGVzKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5jb250cm9scylcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBfbmV3VGltZSA9IGNoYW5nZVRpbWUoc3RhdGUudmFsdWUsIHsgbWludXRlOiBhY3Rpb24ucGF5bG9hZC5zdGVwIH0pO1xyXG5cclxuICAgICAgaWYgKChzdGF0ZS5jb25maWcubWF4IHx8IHN0YXRlLmNvbmZpZy5taW4pICYmICFpc1ZhbGlkTGltaXQoc3RhdGUuY29uZmlnLCBfbmV3VGltZSkpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfU0VDT05EUzoge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZywgYWN0aW9uLnBheWxvYWQpIHx8XHJcbiAgICAgICAgIWNhbkNoYW5nZVNlY29uZHMoYWN0aW9uLnBheWxvYWQsIHN0YXRlLmNvbnRyb2xzKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gY2hhbmdlVGltZShzdGF0ZS52YWx1ZSwge1xyXG4gICAgICAgIHNlY29uZHM6IGFjdGlvbi5wYXlsb2FkLnN0ZXBcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLlNFVF9USU1FX1VOSVQ6IHtcclxuICAgICAgaWYgKCFjYW5DaGFuZ2VWYWx1ZShzdGF0ZS5jb25maWcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBfbmV3VGltZSA9IHNldFRpbWUoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5VUERBVEVfQ09OVFJPTFM6IHtcclxuICAgICAgY29uc3QgX25ld0NvbnRyb2xzU3RhdGUgPSB0aW1lcGlja2VyQ29udHJvbHMoc3RhdGUudmFsdWUsIGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgY29uc3QgX25ld1N0YXRlOiBUaW1lcGlja2VyU3RhdGUgPSB7XHJcbiAgICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlLFxyXG4gICAgICAgIGNvbmZpZzogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgY29udHJvbHM6IF9uZXdDb250cm9sc1N0YXRlXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBpZiAoc3RhdGUuY29uZmlnLnNob3dNZXJpZGlhbiAhPT0gX25ld1N0YXRlLmNvbmZpZy5zaG93TWVyaWRpYW4pIHtcclxuICAgICAgICBpZiAoc3RhdGUudmFsdWUpIHtcclxuICAgICAgICAgIF9uZXdTdGF0ZS52YWx1ZSA9IG5ldyBEYXRlKHN0YXRlLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgX25ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICB0aW1lcGlja2VyUmVkdWNlcixcclxuICBUaW1lcGlja2VyU3RhdGUsXHJcbiAgaW5pdGlhbFN0YXRlXHJcbn0gZnJvbSAnLi90aW1lcGlja2VyLnJlZHVjZXInO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEFjdGlvbiwgTWluaVN0b3JlLCBNaW5pU3RhdGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyU3RvcmUgZXh0ZW5kcyBNaW5pU3RvcmU8VGltZXBpY2tlclN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBfZGlzcGF0Y2hlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWN0aW9uPih7XHJcbiAgICAgIHR5cGU6ICdbbWluaS1uZ3J4XSBkaXNwYXRjaGVyIGluaXQnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHN0YXRlID0gbmV3IE1pbmlTdGF0ZTxUaW1lcGlja2VyU3RhdGU+KFxyXG4gICAgICBpbml0aWFsU3RhdGUsXHJcbiAgICAgIF9kaXNwYXRjaGVyLFxyXG4gICAgICB0aW1lcGlja2VyUmVkdWNlclxyXG4gICAgKTtcclxuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCB0aW1lcGlja2VyUmVkdWNlciwgc3RhdGUpO1xyXG4gIH1cclxufVxyXG4iLCIvKiB0c2xpbnQ6ZGlzYWJsZTpuby1mb3J3YXJkLXJlZiBtYXgtZmlsZS1saW5lLWNvdW50ICovXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyU3RvcmUgfSBmcm9tICcuL3JlZHVjZXIvdGltZXBpY2tlci5zdG9yZSc7XHJcbmltcG9ydCB7IGdldENvbnRyb2xzVmFsdWUgfSBmcm9tICcuL3RpbWVwaWNrZXItY29udHJvbHMudXRpbCc7XHJcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29uZmlnJztcclxuXHJcbmltcG9ydCB7XHJcbiAgVGltZUNoYW5nZVNvdXJjZSxcclxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXHJcbiAgVGltZXBpY2tlckNvbnRyb2xzXHJcbn0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGlzVmFsaWREYXRlLFxyXG4gIHBhZE51bWJlcixcclxuICBwYXJzZVRpbWUsXHJcbiAgaXNJbnB1dFZhbGlkLFxyXG4gIGlzSG91cklucHV0VmFsaWQsXHJcbiAgaXNNaW51dGVJbnB1dFZhbGlkLFxyXG4gIGlzU2Vjb25kSW5wdXRWYWxpZCxcclxuICBpc0lucHV0TGltaXRWYWxpZFxyXG59IGZyb20gJy4vdGltZXBpY2tlci51dGlscyc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5leHBvcnQgY29uc3QgVElNRVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBDb250cm9sVmFsdWVBY2Nlc3Nvck1vZGVsID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGltZXBpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGltZXBpY2tlcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbVElNRVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLCBUaW1lcGlja2VyU3RvcmVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuYnMtY2hldnJvbiB7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogOXB4O1xyXG4gICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDNweCAwcHggMCAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJzLWNoZXZyb24tdXAge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnMtY2hldnJvbi1kb3duIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgIHRvcDogLTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnMtdGltZXBpY2tlci1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gICAgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLFxyXG4gICAgVGltZXBpY2tlckNvbnRyb2xzLFxyXG4gICAgT25DaGFuZ2VzLFxyXG4gICAgT25EZXN0cm95IHtcclxuICAvKiogaG91cnMgY2hhbmdlIHN0ZXAgKi9cclxuICBASW5wdXQoKSBob3VyU3RlcDogbnVtYmVyO1xyXG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIEBJbnB1dCgpIG1pbnV0ZVN0ZXA6IG51bWJlcjtcclxuICAvKiogc2Vjb25kcyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIEBJbnB1dCgpIHNlY29uZHNTdGVwOiBudW1iZXI7XHJcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgcmVhZG9ubHkgKi9cclxuICBASW5wdXQoKSByZWFkb25seUlucHV0OiBib29sZWFuO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHRydWUgc2Nyb2xsIGluc2lkZSBob3VycyBhbmQgbWludXRlcyBpbnB1dHMgd2lsbCBjaGFuZ2UgdGltZSAqL1xyXG4gIEBJbnB1dCgpIG1vdXNld2hlZWw6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xyXG4gIEBJbnB1dCgpIGFycm93a2V5czogYm9vbGVhbjtcclxuICAvKiogaWYgdHJ1ZSBzcGlubmVyIGFycm93cyBhYm92ZSBhbmQgYmVsb3cgdGhlIGlucHV0cyB3aWxsIGJlIHNob3duICovXHJcbiAgQElucHV0KCkgc2hvd1NwaW5uZXJzOiBib29sZWFuO1xyXG4gIC8qKiBpZiB0cnVlIG1lcmlkaWFuIGJ1dHRvbiB3aWxsIGJlIHNob3duICovXHJcbiAgQElucHV0KCkgc2hvd01lcmlkaWFuOiBib29sZWFuO1xyXG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHNob3dNaW51dGVzOiBib29sZWFuO1xyXG4gIC8qKiBzaG93IHNlY29uZHMgaW4gdGltZXBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHNob3dTZWNvbmRzOiBib29sZWFuO1xyXG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXHJcbiAgQElucHV0KCkgbWVyaWRpYW5zOiBzdHJpbmdbXTtcclxuICAvKiogbWluaW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xyXG4gIEBJbnB1dCgpIG1pbjogRGF0ZTtcclxuICAvKiogbWF4aW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xyXG4gIEBJbnB1dCgpIG1heDogRGF0ZTtcclxuXHJcbiAgLyoqIGVtaXRzIHRydWUgaWYgdmFsdWUgaXMgYSB2YWxpZCBkYXRlICovXHJcbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIC8vIHVpIHZhcmlhYmxlc1xyXG4gIGhvdXJzOiBzdHJpbmc7XHJcbiAgbWludXRlczogc3RyaW5nO1xyXG4gIHNlY29uZHM6IHN0cmluZztcclxuICBtZXJpZGlhbjogc3RyaW5nO1xyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0VkaXRhYmxlYCBpbnN0ZWFkICovXHJcbiAgZ2V0IGlzU3Bpbm5lcnNWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1NwaW5uZXJzICYmICF0aGlzLnJlYWRvbmx5SW5wdXQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMucmVhZG9ubHlJbnB1dCB8fCB0aGlzLmRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIC8vIG1pblxcbWF4IHZhbGlkYXRpb24gZm9yIGlucHV0IGZpZWxkc1xyXG4gIGludmFsaWRIb3VycyA9IGZhbHNlO1xyXG4gIGludmFsaWRNaW51dGVzID0gZmFsc2U7XHJcbiAgaW52YWxpZFNlY29uZHMgPSBmYWxzZTtcclxuXHJcbiAgLy8gdGltZSBwaWNrZXIgY29udHJvbHMgc3RhdGVcclxuICBjYW5JbmNyZW1lbnRIb3VyczogYm9vbGVhbjtcclxuICBjYW5JbmNyZW1lbnRNaW51dGVzOiBib29sZWFuO1xyXG4gIGNhbkluY3JlbWVudFNlY29uZHM6IGJvb2xlYW47XHJcblxyXG4gIGNhbkRlY3JlbWVudEhvdXJzOiBib29sZWFuO1xyXG4gIGNhbkRlY3JlbWVudE1pbnV0ZXM6IGJvb2xlYW47XHJcbiAgY2FuRGVjcmVtZW50U2Vjb25kczogYm9vbGVhbjtcclxuXHJcbiAgY2FuVG9nZ2xlTWVyaWRpYW46IGJvb2xlYW47XHJcblxyXG4gIC8vIGNvbnRyb2wgdmFsdWUgYWNjZXNzb3IgbWV0aG9kc1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICB0aW1lcGlja2VyU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX2NvbmZpZzogVGltZXBpY2tlckNvbmZpZyxcclxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgX3N0b3JlOiBUaW1lcGlja2VyU3RvcmUsXHJcbiAgICBwcml2YXRlIF90aW1lcGlja2VyQWN0aW9uczogVGltZXBpY2tlckFjdGlvbnNcclxuICApIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgX2NvbmZpZyk7XHJcblxyXG4gICAgdGhpcy50aW1lcGlja2VyU3ViID0gX3N0b3JlXHJcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmFsdWUpXHJcbiAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XHJcbiAgICAgICAgLy8gdXBkYXRlIFVJIHZhbHVlcyBpZiBkYXRlIGNoYW5nZWRcclxuICAgICAgICB0aGlzLl9yZW5kZXJUaW1lKHZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy51cGRhdGVDb250cm9scyhnZXRDb250cm9sc1ZhbHVlKHRoaXMpKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIF9zdG9yZVxyXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmNvbnRyb2xzKVxyXG4gICAgICAuc3Vic2NyaWJlKChjb250cm9sc1N0YXRlOiBUaW1lcGlja2VyQ29udHJvbHMpID0+IHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQuZW1pdChpc0lucHV0VmFsaWQodGhpcy5ob3VycywgdGhpcy5taW51dGVzLCB0aGlzLnNlY29uZHMsIHRoaXMuaXNQTSgpKSk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb250cm9sc1N0YXRlKTtcclxuICAgICAgICBfY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRWYWxpZGF0aW9uKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnZhbGlkSG91cnMgPSBmYWxzZTtcclxuICAgIHRoaXMuaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcclxuICAgIHRoaXMuaW52YWxpZFNlY29uZHMgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzUE0oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93TWVyaWRpYW4gJiYgdGhpcy5tZXJpZGlhbiA9PT0gdGhpcy5tZXJpZGlhbnNbMV07XHJcbiAgfVxyXG5cclxuICBwcmV2RGVmKCRldmVudDogRXZlbnQpIHtcclxuICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgd2hlZWxTaWduKCRldmVudDogV2hlZWxFdmVudEluaXQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIE1hdGguc2lnbigkZXZlbnQuZGVsdGFZKSAqIC0xO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnVwZGF0ZUNvbnRyb2xzKGdldENvbnRyb2xzVmFsdWUodGhpcykpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSG91cnMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHsgc3RlcCwgc291cmNlIH0pKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU1pbnV0ZXMoc3RlcDogbnVtYmVyLCBzb3VyY2U6IFRpbWVDaGFuZ2VTb3VyY2UgPSAnJyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxyXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VNaW51dGVzKHsgc3RlcCwgc291cmNlIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2Vjb25kcyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZVNlY29uZHMoeyBzdGVwLCBzb3VyY2UgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVIb3Vycyhob3Vyczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5ob3VycyA9IGhvdXJzO1xyXG5cclxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc0hvdXJJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMuaXNQTSgpKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xyXG5cclxuICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICB0aGlzLmludmFsaWRIb3VycyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl91cGRhdGVUaW1lKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNaW51dGVzKG1pbnV0ZXM6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIHRoaXMubWludXRlcyA9IG1pbnV0ZXM7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzTWludXRlSW5wdXRWYWxpZCh0aGlzLm1pbnV0ZXMpICYmIHRoaXMuaXNWYWxpZExpbWl0KCk7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZE1pbnV0ZXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2Vjb25kcyhzZWNvbmRzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICB0aGlzLnNlY29uZHMgPSBzZWNvbmRzO1xyXG5cclxuICAgIGNvbnN0IGlzVmFsaWQgPSBpc1NlY29uZElucHV0VmFsaWQodGhpcy5zZWNvbmRzKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xyXG5cclxuICAgIGlmICghaXNWYWxpZCkge1xyXG4gICAgICB0aGlzLmludmFsaWRTZWNvbmRzID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoZmFsc2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3VwZGF0ZVRpbWUoKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWRMaW1pdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpc0lucHV0TGltaXRWYWxpZCh7XHJcbiAgICAgIGhvdXI6IHRoaXMuaG91cnMsXHJcbiAgICAgIG1pbnV0ZTogdGhpcy5taW51dGVzLFxyXG4gICAgICBzZWNvbmRzOiB0aGlzLnNlY29uZHMsXHJcbiAgICAgIGlzUE06IHRoaXMuaXNQTSgpXHJcbiAgICB9LCB0aGlzLm1heCwgdGhpcy5taW4pO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVRpbWUoKSB7XHJcbiAgICBjb25zdCBfc2Vjb25kcyA9IHRoaXMuc2hvd1NlY29uZHMgPyB0aGlzLnNlY29uZHMgOiB2b2lkIDA7XHJcbiAgICBjb25zdCBfbWludXRlcyA9IHRoaXMuc2hvd01pbnV0ZXMgPyB0aGlzLm1pbnV0ZXMgOiB2b2lkIDA7XHJcbiAgICBpZiAoIWlzSW5wdXRWYWxpZCh0aGlzLmhvdXJzLCBfbWludXRlcywgX3NlY29uZHMsIHRoaXMuaXNQTSgpKSkge1xyXG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnNldFRpbWUoe1xyXG4gICAgICAgIGhvdXI6IHRoaXMuaG91cnMsXHJcbiAgICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXHJcbiAgICAgICAgc2Vjb25kczogdGhpcy5zZWNvbmRzLFxyXG4gICAgICAgIGlzUE06IHRoaXMuaXNQTSgpXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTWVyaWRpYW4oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc2hvd01lcmlkaWFuIHx8ICF0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9ob3Vyc1BlckRheUhhbGYgPSAxMjtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxyXG4gICAgICB0aGlzLl90aW1lcGlja2VyQWN0aW9ucy5jaGFuZ2VIb3Vycyh7XHJcbiAgICAgICAgc3RlcDogX2hvdXJzUGVyRGF5SGFsZixcclxuICAgICAgICBzb3VyY2U6ICcnXHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV3JpdGUgYSBuZXcgdmFsdWUgdG8gdGhlIGVsZW1lbnQuXHJcbiAgICovXHJcbiAgd3JpdGVWYWx1ZShvYmo6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgfCBEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAoaXNWYWxpZERhdGUob2JqKSkge1xyXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl90aW1lcGlja2VyQWN0aW9ucy53cml0ZVZhbHVlKHBhcnNlVGltZShvYmopKSk7XHJcbiAgICB9IGVsc2UgaWYgKG9iaiA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLndyaXRlVmFsdWUobnVsbCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIGNoYW5nZSBldmVudC5cclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSB0b3VjaCBldmVudC5cclxuICAgKi9cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHN0YXR1cyBjaGFuZ2VzIHRvIG9yIGZyb20gXCJkaXNhYmxlZFwiLlxyXG4gICAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUsIGl0IHdpbGwgZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFwcHJvcHJpYXRlIERPTSBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlzRGlzYWJsZWRcclxuICAgKi9cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZXBpY2tlclN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfcmVuZGVyVGltZSh2YWx1ZTogc3RyaW5nIHwgRGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKCFpc1ZhbGlkRGF0ZSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5ob3VycyA9ICcnO1xyXG4gICAgICB0aGlzLm1pbnV0ZXMgPSAnJztcclxuICAgICAgdGhpcy5zZWNvbmRzID0gJyc7XHJcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1swXTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfdmFsdWUgPSBwYXJzZVRpbWUodmFsdWUpO1xyXG4gICAgY29uc3QgX2hvdXJzUGVyRGF5SGFsZiA9IDEyO1xyXG4gICAgbGV0IF9ob3VycyA9IF92YWx1ZS5nZXRIb3VycygpO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3dNZXJpZGlhbikge1xyXG4gICAgICB0aGlzLm1lcmlkaWFuID0gdGhpcy5tZXJpZGlhbnNbX2hvdXJzID49IF9ob3Vyc1BlckRheUhhbGYgPyAxIDogMF07XHJcbiAgICAgIF9ob3VycyA9IF9ob3VycyAlIF9ob3Vyc1BlckRheUhhbGY7XHJcbiAgICAgIC8vIHNob3VsZCBiZSAxMiBQTSwgbm90IDAwIFBNXHJcbiAgICAgIGlmIChfaG91cnMgPT09IDApIHtcclxuICAgICAgICBfaG91cnMgPSBfaG91cnNQZXJEYXlIYWxmO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5ob3VycyA9IHBhZE51bWJlcihfaG91cnMpO1xyXG4gICAgdGhpcy5taW51dGVzID0gcGFkTnVtYmVyKF92YWx1ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgdGhpcy5zZWNvbmRzID0gcGFkTnVtYmVyKF92YWx1ZS5nZXRVVENTZWNvbmRzKCkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyQ29uZmlnIH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IFRpbWVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLnN0b3JlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbVGltZXBpY2tlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1RpbWVwaWNrZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBUaW1lcGlja2VyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtUaW1lcGlja2VyQ29uZmlnLCBUaW1lcGlja2VyQWN0aW9ucywgVGltZXBpY2tlclN0b3JlXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIkJlaGF2aW9yU3ViamVjdCIsIk1pbmlTdGF0ZSIsIk1pbmlTdG9yZSIsIk5HX1ZBTFVFX0FDQ0VTU09SIiwiZm9yd2FyZFJlZiIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiVmlld0VuY2Fwc3VsYXRpb24iLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiT3V0cHV0IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztRQWlCRSxzQ0FBVTs7OztZQUFWLFVBQVcsS0FBb0I7Z0JBQzdCLE9BQU87b0JBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFdBQVc7b0JBQ25DLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUM7YUFDSDs7Ozs7UUFFRCx1Q0FBVzs7OztZQUFYLFVBQVksS0FBc0I7Z0JBQ2hDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLFlBQVk7b0JBQ3BDLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUM7YUFDSDs7Ozs7UUFFRCx5Q0FBYTs7OztZQUFiLFVBQWMsS0FBc0I7Z0JBQ2xDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7b0JBQ3RDLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUM7YUFDSDs7Ozs7UUFFRCx5Q0FBYTs7OztZQUFiLFVBQWMsS0FBc0I7Z0JBQ2xDLE9BQU87b0JBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7b0JBQ3RDLE9BQU8sRUFBRSxLQUFLO2lCQUNmLENBQUM7YUFDSDs7Ozs7UUFFRCxtQ0FBTzs7OztZQUFQLFVBQVEsS0FBVztnQkFDakIsT0FBTztvQkFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsYUFBYTtvQkFDckMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNIOzs7OztRQUVELDBDQUFjOzs7O1lBQWQsVUFBZSxLQUErQjtnQkFDNUMsT0FBTztvQkFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsZUFBZTtvQkFDdkMsT0FBTyxFQUFFLEtBQUs7aUJBQ2YsQ0FBQzthQUNIO3dDQS9DNkIsd0NBQXdDO3lDQUN2QywyQkFBMkI7MkNBQ3pCLDZCQUE2QjsyQ0FDN0IsNkJBQTZCOzBDQUM5Qiw0QkFBNEI7NENBQzFCLDhCQUE4Qjs7b0JBUGpFQSxl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