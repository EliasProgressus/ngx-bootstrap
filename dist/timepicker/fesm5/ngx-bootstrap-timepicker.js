import { Injectable, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation, NgModule } from '@angular/core';
import { __extends } from 'tslib';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimepickerActions = /** @class */ (function () {
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
        { type: Injectable }
    ];
    return TimepickerActions;
}());

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
    if (isPM === void 0) { isPM = false; }
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
    if (minutes === void 0) { minutes = '0'; }
    if (seconds === void 0) { seconds = '0'; }
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
    if (state === void 0) { state = initialState; }
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
var TimepickerStore = /** @class */ (function (_super) {
    __extends(TimepickerStore, _super);
    function TimepickerStore() {
        var _this = this;
        var /** @type {?} */ _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        var /** @type {?} */ state = new MiniState(initialState, _dispatcher, timepickerReducer);
        _this = _super.call(this, _dispatcher, timepickerReducer, state) || this;
        return _this;
    }
    TimepickerStore.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TimepickerStore.ctorParameters = function () { return []; };
    return TimepickerStore;
}(MiniStore));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return TimepickerComponent; }),
    multi: true
};
var TimepickerComponent = /** @class */ (function () {
    function TimepickerComponent(_config, _cd, _store, _timepickerActions) {
        var _this = this;
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /**
         * emits true if value is a valid date
         */
        this.isValid = new EventEmitter();
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
         */
        function () {
            return this.showSpinners && !this.readonlyInput;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimepickerComponent.prototype, "isEditable", {
        get: /**
         * @return {?}
         */
        function () {
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
        if (source === void 0) { source = ''; }
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
        if (source === void 0) { source = ''; }
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
        if (source === void 0) { source = ''; }
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
        { type: Component, args: [{
                    selector: 'timepicker',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore],
                    template: "<table>\r\n  <tbody>\r\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\r\n    <!-- increment hours button-->\r\n    <td>\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\r\n         (click)=\"changeHours(hourStep)\"\r\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- increment minutes button -->\r\n    <td *ngIf=\"showMinutes\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\r\n         (click)=\"changeMinutes(minuteStep)\"\r\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\r\n    <!-- increment seconds button -->\r\n    <td *ngIf=\"showSeconds\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\r\n         (click)=\"changeSeconds(secondsStep)\">\r\n        <span class=\"bs-chevron bs-chevron-up\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian placeholder-->\r\n    <td *ngIf=\"showMeridian\"></td>\r\n  </tr>\r\n  <tr>\r\n    <!-- hours -->\r\n    <td class=\"form-group\" [class.has-error]=\"invalidHours\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             placeholder=\"HH\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"hours\"\r\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\r\n             (change)=\"updateHours($event.target.value)\"></td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\r\n    <!-- minutes -->\r\n    <td class=\"form-group\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             placeholder=\"MM\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"minutes\"\r\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\r\n             (change)=\"updateMinutes($event.target.value)\">\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\r\n    <!-- seconds -->\r\n    <td class=\"form-group\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             placeholder=\"SS\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"seconds\"\r\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\r\n             (change)=\"updateSeconds($event.target.value)\">\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian -->\r\n    <td *ngIf=\"showMeridian\">\r\n      <button type=\"button\" class=\"btn btn-default text-center\"\r\n              [disabled]=\"!isEditable || !canToggleMeridian\"\r\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\r\n              (click)=\"toggleMeridian()\"\r\n      >{{ meridian }}\r\n      </button>\r\n    </td>\r\n  </tr>\r\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\r\n    <!-- decrement hours button-->\r\n    <td>\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\r\n         (click)=\"changeHours(-hourStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- decrement minutes button-->\r\n    <td *ngIf=\"showMinutes\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\r\n         (click)=\"changeMinutes(-minuteStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\r\n    <!-- decrement seconds button-->\r\n    <td *ngIf=\"showSeconds\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\r\n         (click)=\"changeSeconds(-secondsStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian placeholder-->\r\n    <td *ngIf=\"showMeridian\"></td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n",
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n    .bs-chevron {\n      border-style: solid;\n      display: block;\n      width: 9px;\n      height: 9px;\n      position: relative;\n      border-width: 3px 0px 0 3px;\n    }\n\n    .bs-chevron-up {\n      -webkit-transform: rotate(45deg);\n      transform: rotate(45deg);\n      top: 2px;\n    }\n\n    .bs-chevron-down {\n      -webkit-transform: rotate(-135deg);\n      transform: rotate(-135deg);\n      top: -2px;\n    }\n\n    .bs-timepicker-field {\n      width: 50px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    TimepickerComponent.ctorParameters = function () { return [
        { type: TimepickerConfig, },
        { type: ChangeDetectorRef, },
        { type: TimepickerStore, },
        { type: TimepickerActions, },
    ]; };
    TimepickerComponent.propDecorators = {
        "hourStep": [{ type: Input },],
        "minuteStep": [{ type: Input },],
        "secondsStep": [{ type: Input },],
        "readonlyInput": [{ type: Input },],
        "disabled": [{ type: Input },],
        "mousewheel": [{ type: Input },],
        "arrowkeys": [{ type: Input },],
        "showSpinners": [{ type: Input },],
        "showMeridian": [{ type: Input },],
        "showMinutes": [{ type: Input },],
        "showSeconds": [{ type: Input },],
        "meridians": [{ type: Input },],
        "min": [{ type: Input },],
        "max": [{ type: Input },],
        "isValid": [{ type: Output },],
    };
    return TimepickerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimepickerModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { TimepickerComponent, TimepickerActions, TimepickerStore, TimepickerConfig, TimepickerModule, TIMEPICKER_CONTROL_VALUE_ACCESSOR as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC10aW1lcGlja2VyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci90aW1lcGlja2VyLnV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci1jb250cm9scy51dGlsLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvdGltZXBpY2tlci9yZWR1Y2VyL3RpbWVwaWNrZXIucmVkdWNlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3RpbWVwaWNrZXIvdGltZXBpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcbmltcG9ydCB7XHJcbiAgVGltZUNoYW5nZUV2ZW50LFxyXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcclxuICBUaW1lXHJcbn0gZnJvbSAnLi4vdGltZXBpY2tlci5tb2RlbHMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckFjdGlvbnMge1xyXG4gIHN0YXRpYyByZWFkb25seSBXUklURV9WQUxVRSA9ICdbdGltZXBpY2tlcl0gd3JpdGUgdmFsdWUgZnJvbSBuZyBtb2RlbCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IENIQU5HRV9IT1VSUyA9ICdbdGltZXBpY2tlcl0gY2hhbmdlIGhvdXJzJztcclxuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX01JTlVURVMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBtaW51dGVzJztcclxuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1NFQ09ORFMgPSAnW3RpbWVwaWNrZXJdIGNoYW5nZSBzZWNvbmRzJztcclxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX1RJTUVfVU5JVCA9ICdbdGltZXBpY2tlcl0gc2V0IHRpbWUgdW5pdCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFVQREFURV9DT05UUk9MUyA9ICdbdGltZXBpY2tlcl0gdXBkYXRlIGNvbnRyb2xzJztcclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuV1JJVEVfVkFMVUUsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlSG91cnMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX0hPVVJTLFxyXG4gICAgICBwYXlsb2FkOiBldmVudFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYW5nZU1pbnV0ZXMoZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuQ0hBTkdFX01JTlVURVMsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2Vjb25kcyhldmVudDogVGltZUNoYW5nZUV2ZW50KTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9TRUNPTkRTLFxyXG4gICAgICBwYXlsb2FkOiBldmVudFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFRpbWUodmFsdWU6IFRpbWUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogVGltZXBpY2tlckFjdGlvbnMuU0VUX1RJTUVfVU5JVCxcclxuICAgICAgcGF5bG9hZDogdmFsdWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDb250cm9scyh2YWx1ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUyxcclxuICAgICAgcGF5bG9hZDogdmFsdWVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRpbWUsIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSB9IGZyb20gJy4vdGltZXBpY2tlci5tb2RlbHMnO1xyXG5cclxuY29uc3QgZGV4ID0gMTA7XHJcbmNvbnN0IGhvdXJzUGVyRGF5ID0gMjQ7XHJcbmNvbnN0IGhvdXJzUGVyRGF5SGFsZiA9IDEyO1xyXG5jb25zdCBtaW51dGVzUGVySG91ciA9IDYwO1xyXG5jb25zdCBzZWNvbmRzUGVyTWludXRlID0gNjA7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNWYWxpZERhdGUodmFsdWU/OiBzdHJpbmcgfCBEYXRlKTogYm9vbGVhbiB7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTih2YWx1ZS5nZXRIb3VycygpKSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBpc1ZhbGlkRGF0ZShuZXcgRGF0ZSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkTGltaXQoY29udHJvbHM6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSwgbmV3RGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIGlmIChjb250cm9scy5taW4gJiYgbmV3RGF0ZSA8IGNvbnRyb2xzLm1pbikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNvbnRyb2xzLm1heCAmJiBuZXdEYXRlID4gY29udHJvbHMubWF4KSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIGRleCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc051bWJlcih2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogdmFsdWUgaXMgbnVtYmVyIHtcclxuICByZXR1cm4gIWlzTmFOKHRvTnVtYmVyKHZhbHVlKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUhvdXJzKFxyXG4gIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXHJcbiAgaXNQTSA9IGZhbHNlXHJcbik6IG51bWJlciB7XHJcbiAgY29uc3QgaG91ciA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoXHJcbiAgICBpc05hTihob3VyKSB8fFxyXG4gICAgaG91ciA8IDAgfHxcclxuICAgIGhvdXIgPiAoaXNQTSA/IGhvdXJzUGVyRGF5SGFsZiA6IGhvdXJzUGVyRGF5KVxyXG4gICkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHJldHVybiBob3VyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VNaW51dGVzKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiBudW1iZXIge1xyXG4gIGNvbnN0IG1pbnV0ZSA9IHRvTnVtYmVyKHZhbHVlKTtcclxuICBpZiAoaXNOYU4obWludXRlKSB8fCBtaW51dGUgPCAwIHx8IG1pbnV0ZSA+IG1pbnV0ZXNQZXJIb3VyKSB7XHJcbiAgICByZXR1cm4gTmFOO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1pbnV0ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU2Vjb25kcyh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogbnVtYmVyIHtcclxuICBjb25zdCBzZWNvbmRzID0gdG9OdW1iZXIodmFsdWUpO1xyXG4gIGlmIChpc05hTihzZWNvbmRzKSB8fCBzZWNvbmRzIDwgMCB8fCBzZWNvbmRzID4gc2Vjb25kc1Blck1pbnV0ZSkge1xyXG4gICAgcmV0dXJuIE5hTjtcclxuICB9XHJcblxyXG4gIHJldHVybiBzZWNvbmRzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogRGF0ZSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdmFsdWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUaW1lKHZhbHVlOiBEYXRlLCBkaWZmOiBUaW1lKTogRGF0ZSB7XHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgcmV0dXJuIGNoYW5nZVRpbWUoY3JlYXRlRGF0ZShuZXcgRGF0ZSgpLCAwLCAwLCAwKSwgZGlmZik7XHJcbiAgfVxyXG5cclxuICBsZXQgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XHJcbiAgbGV0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XHJcbiAgbGV0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XHJcblxyXG4gIGlmIChkaWZmLmhvdXIpIHtcclxuICAgIGhvdXIgPSAoaG91ciArIHRvTnVtYmVyKGRpZmYuaG91cikpICUgaG91cnNQZXJEYXk7XHJcbiAgICBpZiAoaG91ciA8IDApIHtcclxuICAgICAgaG91ciArPSBob3Vyc1BlckRheTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChkaWZmLm1pbnV0ZSkge1xyXG4gICAgbWludXRlcyA9IG1pbnV0ZXMgKyB0b051bWJlcihkaWZmLm1pbnV0ZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZGlmZi5zZWNvbmRzKSB7XHJcbiAgICBzZWNvbmRzID0gc2Vjb25kcyArIHRvTnVtYmVyKGRpZmYuc2Vjb25kcyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3JlYXRlRGF0ZSh2YWx1ZSwgaG91ciwgbWludXRlcywgc2Vjb25kcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRUaW1lKHZhbHVlOiBEYXRlLCBvcHRzOiBUaW1lKTogRGF0ZSB7XHJcbiAgbGV0IGhvdXIgPSBwYXJzZUhvdXJzKG9wdHMuaG91cik7XHJcbiAgY29uc3QgbWludXRlID0gcGFyc2VNaW51dGVzKG9wdHMubWludXRlKTtcclxuICBjb25zdCBzZWNvbmRzID0gcGFyc2VTZWNvbmRzKG9wdHMuc2Vjb25kcykgfHwgMDtcclxuXHJcbiAgaWYgKG9wdHMuaXNQTSkge1xyXG4gICAgaG91ciArPSBob3Vyc1BlckRheUhhbGY7XHJcbiAgfVxyXG5cclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICBpZiAoIWlzTmFOKGhvdXIpICYmICFpc05hTihtaW51dGUpKSB7XHJcbiAgICAgIHJldHVybiBjcmVhdGVEYXRlKG5ldyBEYXRlKCksIGhvdXIsIG1pbnV0ZSwgc2Vjb25kcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGlzTmFOKGhvdXIpIHx8IGlzTmFOKG1pbnV0ZSkpIHtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjcmVhdGVEYXRlKHZhbHVlLCBob3VyLCBtaW51dGUsIHNlY29uZHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGF0ZShcclxuICB2YWx1ZTogRGF0ZSxcclxuICBob3VyczogbnVtYmVyLFxyXG4gIG1pbnV0ZXM6IG51bWJlcixcclxuICBzZWNvbmRzOiBudW1iZXJcclxuKTogRGF0ZSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRlKFxyXG4gICAgdmFsdWUuZ2V0RnVsbFllYXIoKSxcclxuICAgIHZhbHVlLmdldE1vbnRoKCksXHJcbiAgICB2YWx1ZS5nZXREYXRlKCksXHJcbiAgICBob3VycyxcclxuICAgIG1pbnV0ZXMsXHJcbiAgICBzZWNvbmRzLFxyXG4gICAgdmFsdWUuZ2V0TWlsbGlzZWNvbmRzKClcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFkTnVtYmVyKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gIGNvbnN0IF92YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgaWYgKF92YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICByZXR1cm4gX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGAwJHtfdmFsdWV9YDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzSG91cklucHV0VmFsaWQoaG91cnM6IHN0cmluZywgaXNQTTogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAhaXNOYU4ocGFyc2VIb3Vycyhob3VycywgaXNQTSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNaW51dGVJbnB1dFZhbGlkKG1pbnV0ZXM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiAhaXNOYU4ocGFyc2VNaW51dGVzKG1pbnV0ZXMpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2Vjb25kSW5wdXRWYWxpZChzZWNvbmRzOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICByZXR1cm4gIWlzTmFOKHBhcnNlU2Vjb25kcyhzZWNvbmRzKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lucHV0TGltaXRWYWxpZChkaWZmOiBUaW1lLCBtYXg6IERhdGUsIG1pbjogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IG5ld0RhdGUgPSBjaGFuZ2VUaW1lKG5ldyBEYXRlKCksIGRpZmYpO1xyXG5cclxuICBpZiAobWF4ICYmIG5ld0RhdGUgPiBtYXgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChtaW4gJiYgbmV3RGF0ZSA8IG1pbikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0lucHV0VmFsaWQoXHJcbiAgaG91cnM6IHN0cmluZyxcclxuICBtaW51dGVzID0gJzAnLFxyXG4gIHNlY29uZHMgPSAnMCcsXHJcbiAgaXNQTTogYm9vbGVhblxyXG4pOiBib29sZWFuIHtcclxuICByZXR1cm4gaXNIb3VySW5wdXRWYWxpZChob3VycywgaXNQTSlcclxuICAgICYmIGlzTWludXRlSW5wdXRWYWxpZChtaW51dGVzKVxyXG4gICAgJiYgaXNTZWNvbmRJbnB1dFZhbGlkKHNlY29uZHMpO1xyXG59XHJcbiIsImltcG9ydCB7IGNoYW5nZVRpbWUgfSBmcm9tICcuL3RpbWVwaWNrZXIudXRpbHMnO1xyXG5pbXBvcnQge1xyXG4gIFRpbWVDaGFuZ2VFdmVudCxcclxuICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXHJcbiAgVGltZXBpY2tlckNvbnRyb2xzXHJcbn0gZnJvbSAnLi90aW1lcGlja2VyLm1vZGVscyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlVmFsdWUoXHJcbiAgc3RhdGU6IFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcclxuICBldmVudD86IFRpbWVDaGFuZ2VFdmVudFxyXG4pOiBib29sZWFuIHtcclxuICBpZiAoc3RhdGUucmVhZG9ubHlJbnB1dCB8fCBzdGF0ZS5kaXNhYmxlZCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQuc291cmNlID09PSAnd2hlZWwnICYmICFzdGF0ZS5tb3VzZXdoZWVsKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQuc291cmNlID09PSAna2V5JyAmJiAhc3RhdGUuYXJyb3drZXlzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FuQ2hhbmdlSG91cnMoXHJcbiAgZXZlbnQ6IFRpbWVDaGFuZ2VFdmVudCxcclxuICBjb250cm9sczogVGltZXBpY2tlckNvbnRyb2xzXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghZXZlbnQuc3RlcCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRIb3Vycykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50LnN0ZXAgPCAwICYmICFjb250cm9scy5jYW5EZWNyZW1lbnRIb3Vycykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VNaW51dGVzKFxyXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXHJcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xyXG4pOiBib29sZWFuIHtcclxuICBpZiAoIWV2ZW50LnN0ZXApIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRNaW51dGVzKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50TWludXRlcykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5DaGFuZ2VTZWNvbmRzKFxyXG4gIGV2ZW50OiBUaW1lQ2hhbmdlRXZlbnQsXHJcbiAgY29udHJvbHM6IFRpbWVwaWNrZXJDb250cm9sc1xyXG4pOiBib29sZWFuIHtcclxuICBpZiAoIWV2ZW50LnN0ZXApIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgaWYgKGV2ZW50LnN0ZXAgPiAwICYmICFjb250cm9scy5jYW5JbmNyZW1lbnRTZWNvbmRzKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChldmVudC5zdGVwIDwgMCAmJiAhY29udHJvbHMuY2FuRGVjcmVtZW50U2Vjb25kcykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb250cm9sc1ZhbHVlKFxyXG4gIHN0YXRlOiBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGVcclxuKTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlIHtcclxuICBjb25zdCB7XHJcbiAgICBob3VyU3RlcCxcclxuICAgIG1pbnV0ZVN0ZXAsXHJcbiAgICBzZWNvbmRzU3RlcCxcclxuICAgIHJlYWRvbmx5SW5wdXQsXHJcbiAgICBkaXNhYmxlZCxcclxuICAgIG1vdXNld2hlZWwsXHJcbiAgICBhcnJvd2tleXMsXHJcbiAgICBzaG93U3Bpbm5lcnMsXHJcbiAgICBzaG93TWVyaWRpYW4sXHJcbiAgICBzaG93U2Vjb25kcyxcclxuICAgIG1lcmlkaWFucyxcclxuICAgIG1pbixcclxuICAgIG1heFxyXG4gIH0gPSBzdGF0ZTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGhvdXJTdGVwLFxyXG4gICAgbWludXRlU3RlcCxcclxuICAgIHNlY29uZHNTdGVwLFxyXG4gICAgcmVhZG9ubHlJbnB1dCxcclxuICAgIGRpc2FibGVkLFxyXG4gICAgbW91c2V3aGVlbCxcclxuICAgIGFycm93a2V5cyxcclxuICAgIHNob3dTcGlubmVycyxcclxuICAgIHNob3dNZXJpZGlhbixcclxuICAgIHNob3dTZWNvbmRzLFxyXG4gICAgbWVyaWRpYW5zLFxyXG4gICAgbWluLFxyXG4gICAgbWF4XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVwaWNrZXJDb250cm9scyhcclxuICB2YWx1ZTogRGF0ZSxcclxuICBzdGF0ZTogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlXHJcbik6IFRpbWVwaWNrZXJDb250cm9scyB7XHJcbiAgY29uc3QgaG91cnNQZXJEYXlIYWxmID0gMTI7XHJcbiAgY29uc3QgeyBtaW4sIG1heCwgaG91clN0ZXAsIG1pbnV0ZVN0ZXAsIHNlY29uZHNTdGVwLCBzaG93U2Vjb25kcyB9ID0gc3RhdGU7XHJcbiAgY29uc3QgcmVzOiBUaW1lcGlja2VyQ29udHJvbHMgPSB7XHJcbiAgICBjYW5JbmNyZW1lbnRIb3VyczogdHJ1ZSxcclxuICAgIGNhbkluY3JlbWVudE1pbnV0ZXM6IHRydWUsXHJcbiAgICBjYW5JbmNyZW1lbnRTZWNvbmRzOiB0cnVlLFxyXG5cclxuICAgIGNhbkRlY3JlbWVudEhvdXJzOiB0cnVlLFxyXG4gICAgY2FuRGVjcmVtZW50TWludXRlczogdHJ1ZSxcclxuICAgIGNhbkRlY3JlbWVudFNlY29uZHM6IHRydWUsXHJcblxyXG4gICAgY2FuVG9nZ2xlTWVyaWRpYW46IHRydWVcclxuICB9O1xyXG5cclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH1cclxuXHJcbiAgLy8gY29tcGFyZSBkYXRlc1xyXG4gIGlmIChtYXgpIHtcclxuICAgIGNvbnN0IF9uZXdIb3VyID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBob3VyOiBob3VyU3RlcCB9KTtcclxuICAgIHJlcy5jYW5JbmNyZW1lbnRIb3VycyA9IG1heCA+IF9uZXdIb3VyO1xyXG5cclxuICAgIGlmICghcmVzLmNhbkluY3JlbWVudEhvdXJzKSB7XHJcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IG1pbnV0ZVN0ZXAgfSk7XHJcbiAgICAgIHJlcy5jYW5JbmNyZW1lbnRNaW51dGVzID0gc2hvd1NlY29uZHNcclxuICAgICAgICA/IG1heCA+IF9uZXdNaW51dGVzXHJcbiAgICAgICAgOiBtYXggPj0gX25ld01pbnV0ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFyZXMuY2FuSW5jcmVtZW50TWludXRlcykge1xyXG4gICAgICBjb25zdCBfbmV3U2Vjb25kcyA9IGNoYW5nZVRpbWUodmFsdWUsIHsgc2Vjb25kczogc2Vjb25kc1N0ZXAgfSk7XHJcbiAgICAgIHJlcy5jYW5JbmNyZW1lbnRTZWNvbmRzID0gbWF4ID49IF9uZXdTZWNvbmRzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2YWx1ZS5nZXRIb3VycygpIDwgaG91cnNQZXJEYXlIYWxmKSB7XHJcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogaG91cnNQZXJEYXlIYWxmIH0pIDwgbWF4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG1pbikge1xyXG4gICAgY29uc3QgX25ld0hvdXIgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IGhvdXI6IC1ob3VyU3RlcCB9KTtcclxuICAgIHJlcy5jYW5EZWNyZW1lbnRIb3VycyA9IG1pbiA8IF9uZXdIb3VyO1xyXG5cclxuICAgIGlmICghcmVzLmNhbkRlY3JlbWVudEhvdXJzKSB7XHJcbiAgICAgIGNvbnN0IF9uZXdNaW51dGVzID0gY2hhbmdlVGltZSh2YWx1ZSwgeyBtaW51dGU6IC1taW51dGVTdGVwIH0pO1xyXG4gICAgICByZXMuY2FuRGVjcmVtZW50TWludXRlcyA9IHNob3dTZWNvbmRzXHJcbiAgICAgICAgPyBtaW4gPCBfbmV3TWludXRlc1xyXG4gICAgICAgIDogbWluIDw9IF9uZXdNaW51dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghcmVzLmNhbkRlY3JlbWVudE1pbnV0ZXMpIHtcclxuICAgICAgY29uc3QgX25ld1NlY29uZHMgPSBjaGFuZ2VUaW1lKHZhbHVlLCB7IHNlY29uZHM6IC1zZWNvbmRzU3RlcCB9KTtcclxuICAgICAgcmVzLmNhbkRlY3JlbWVudFNlY29uZHMgPSBtaW4gPD0gX25ld1NlY29uZHM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbHVlLmdldEhvdXJzKCkgPj0gaG91cnNQZXJEYXlIYWxmKSB7XHJcbiAgICAgIHJlcy5jYW5Ub2dnbGVNZXJpZGlhbiA9IGNoYW5nZVRpbWUodmFsdWUsIHsgaG91cjogLWhvdXJzUGVyRGF5SGFsZiB9KSA+IG1pbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiByZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIFByb3ZpZGVzIGRlZmF1bHQgY29uZmlndXJhdGlvbiB2YWx1ZXMgZm9yIHRpbWVwaWNrZXIgKi9cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbmZpZyB7XHJcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXHJcbiAgaG91clN0ZXAgPSAxO1xyXG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIG1pbnV0ZVN0ZXAgPSA1O1xyXG4gIC8qKiBzZWNvbmRzIGNoYW5nZXMgc3RlcCAqL1xyXG4gIHNlY29uZHNTdGVwID0gMTA7XHJcbiAgLyoqIGlmIHRydWUgd29ya3MgaW4gMTJIIG1vZGUgYW5kIGRpc3BsYXlzIEFNL1BNLiBJZiBmYWxzZSB3b3JrcyBpbiAyNEggbW9kZSBhbmQgaGlkZXMgQU0vUE0gKi9cclxuICBzaG93TWVyaWRpYW4gPSB0cnVlO1xyXG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXHJcbiAgbWVyaWRpYW5zID0gWydBTScsICdQTSddO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXHJcbiAgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXHJcbiAgbW91c2V3aGVlbCA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xyXG4gIGFycm93a2V5cyA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgc3Bpbm5lciBhcnJvd3MgYWJvdmUgYW5kIGJlbG93IHRoZSBpbnB1dHMgd2lsbCBiZSBzaG93biAqL1xyXG4gIHNob3dTcGlubmVycyA9IHRydWU7XHJcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXHJcbiAgc2hvd1NlY29uZHMgPSBmYWxzZTtcclxuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cclxuICBzaG93TWludXRlcyA9IHRydWU7XHJcbiAgLyoqIG1pbmltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cclxuICBtaW46IERhdGU7XHJcbiAgLyoqIG1heGltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cclxuICBtYXg6IERhdGU7XHJcbn1cclxuIiwiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xyXG5pbXBvcnQge1xyXG4gIGNhbkNoYW5nZUhvdXJzLFxyXG4gIGNhbkNoYW5nZU1pbnV0ZXMsXHJcbiAgY2FuQ2hhbmdlU2Vjb25kcyxcclxuICBjYW5DaGFuZ2VWYWx1ZSxcclxuICB0aW1lcGlja2VyQ29udHJvbHNcclxufSBmcm9tICcuLi90aW1lcGlja2VyLWNvbnRyb2xzLnV0aWwnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vdGltZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQge1xyXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcclxuICBUaW1lcGlja2VyQ29udHJvbHNcclxufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVscyc7XHJcbmltcG9ydCB7IGNoYW5nZVRpbWUsIHNldFRpbWUsIGlzVmFsaWRMaW1pdCB9IGZyb20gJy4uL3RpbWVwaWNrZXIudXRpbHMnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vdGltZXBpY2tlci5hY3Rpb25zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyU3RhdGUge1xyXG4gIHZhbHVlOiBEYXRlO1xyXG4gIGNvbmZpZzogVGltZXBpY2tlckNvbXBvbmVudFN0YXRlO1xyXG4gIGNvbnRyb2xzOiBUaW1lcGlja2VyQ29udHJvbHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFRpbWVwaWNrZXJTdGF0ZSA9IHtcclxuICB2YWx1ZTogbnVsbCxcclxuICBjb25maWc6IG5ldyBUaW1lcGlja2VyQ29uZmlnKCksXHJcbiAgY29udHJvbHM6IHtcclxuICAgIGNhbkluY3JlbWVudEhvdXJzOiB0cnVlLFxyXG4gICAgY2FuSW5jcmVtZW50TWludXRlczogdHJ1ZSxcclxuICAgIGNhbkluY3JlbWVudFNlY29uZHM6IHRydWUsXHJcblxyXG4gICAgY2FuRGVjcmVtZW50SG91cnM6IHRydWUsXHJcbiAgICBjYW5EZWNyZW1lbnRNaW51dGVzOiB0cnVlLFxyXG4gICAgY2FuRGVjcmVtZW50U2Vjb25kczogdHJ1ZSxcclxuXHJcbiAgICBjYW5Ub2dnbGVNZXJpZGlhbjogdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjeWNsb21hdGljLWNvbXBsZXhpdHlcclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuV1JJVEVfVkFMVUU6IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBhY3Rpb24ucGF5bG9hZCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9IT1VSUzoge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZywgYWN0aW9uLnBheWxvYWQpIHx8XHJcbiAgICAgICAgIWNhbkNoYW5nZUhvdXJzKGFjdGlvbi5wYXlsb2FkLCBzdGF0ZS5jb250cm9scylcclxuICAgICAgKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBfbmV3VGltZSA9IGNoYW5nZVRpbWUoc3RhdGUudmFsdWUsIHsgaG91cjogYWN0aW9uLnBheWxvYWQuc3RlcCB9KTtcclxuXHJcbiAgICAgIGlmICgoc3RhdGUuY29uZmlnLm1heCB8fCBzdGF0ZS5jb25maWcubWluKSAmJiAhaXNWYWxpZExpbWl0KHN0YXRlLmNvbmZpZywgX25ld1RpbWUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyB2YWx1ZTogX25ld1RpbWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBUaW1lcGlja2VyQWN0aW9ucy5DSEFOR0VfTUlOVVRFUzoge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZywgYWN0aW9uLnBheWxvYWQpIHx8XHJcbiAgICAgICAgIWNhbkNoYW5nZU1pbnV0ZXMoYWN0aW9uLnBheWxvYWQsIHN0YXRlLmNvbnRyb2xzKVxyXG4gICAgICApIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gY2hhbmdlVGltZShzdGF0ZS52YWx1ZSwgeyBtaW51dGU6IGFjdGlvbi5wYXlsb2FkLnN0ZXAgfSk7XHJcblxyXG4gICAgICBpZiAoKHN0YXRlLmNvbmZpZy5tYXggfHwgc3RhdGUuY29uZmlnLm1pbikgJiYgIWlzVmFsaWRMaW1pdChzdGF0ZS5jb25maWcsIF9uZXdUaW1lKSkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLkNIQU5HRV9TRUNPTkRTOiB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICAhY2FuQ2hhbmdlVmFsdWUoc3RhdGUuY29uZmlnLCBhY3Rpb24ucGF5bG9hZCkgfHxcclxuICAgICAgICAhY2FuQ2hhbmdlU2Vjb25kcyhhY3Rpb24ucGF5bG9hZCwgc3RhdGUuY29udHJvbHMpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgX25ld1RpbWUgPSBjaGFuZ2VUaW1lKHN0YXRlLnZhbHVlLCB7XHJcbiAgICAgICAgc2Vjb25kczogYWN0aW9uLnBheWxvYWQuc3RlcFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICgoc3RhdGUuY29uZmlnLm1heCB8fCBzdGF0ZS5jb25maWcubWluKSAmJiAhaXNWYWxpZExpbWl0KHN0YXRlLmNvbmZpZywgX25ld1RpbWUpKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgdmFsdWU6IF9uZXdUaW1lIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgVGltZXBpY2tlckFjdGlvbnMuU0VUX1RJTUVfVU5JVDoge1xyXG4gICAgICBpZiAoIWNhbkNoYW5nZVZhbHVlKHN0YXRlLmNvbmZpZykpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IF9uZXdUaW1lID0gc2V0VGltZShzdGF0ZS52YWx1ZSwgYWN0aW9uLnBheWxvYWQpO1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHZhbHVlOiBfbmV3VGltZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFRpbWVwaWNrZXJBY3Rpb25zLlVQREFURV9DT05UUk9MUzoge1xyXG4gICAgICBjb25zdCBfbmV3Q29udHJvbHNTdGF0ZSA9IHRpbWVwaWNrZXJDb250cm9scyhzdGF0ZS52YWx1ZSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBjb25zdCBfbmV3U3RhdGU6IFRpbWVwaWNrZXJTdGF0ZSA9IHtcclxuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUsXHJcbiAgICAgICAgY29uZmlnOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICBjb250cm9sczogX25ld0NvbnRyb2xzU3RhdGVcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChzdGF0ZS5jb25maWcuc2hvd01lcmlkaWFuICE9PSBfbmV3U3RhdGUuY29uZmlnLnNob3dNZXJpZGlhbikge1xyXG4gICAgICAgIGlmIChzdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgX25ld1N0YXRlLnZhbHVlID0gbmV3IERhdGUoc3RhdGUudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBfbmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIHRpbWVwaWNrZXJSZWR1Y2VyLFxyXG4gIFRpbWVwaWNrZXJTdGF0ZSxcclxuICBpbml0aWFsU3RhdGVcclxufSBmcm9tICcuL3RpbWVwaWNrZXIucmVkdWNlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uLCBNaW5pU3RvcmUsIE1pbmlTdGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJTdG9yZSBleHRlbmRzIE1pbmlTdG9yZTxUaW1lcGlja2VyU3RhdGU+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IF9kaXNwYXRjaGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBY3Rpb24+KHtcclxuICAgICAgdHlwZTogJ1ttaW5pLW5ncnhdIGRpc3BhdGNoZXIgaW5pdCdcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPFRpbWVwaWNrZXJTdGF0ZT4oXHJcbiAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgX2Rpc3BhdGNoZXIsXHJcbiAgICAgIHRpbWVwaWNrZXJSZWR1Y2VyXHJcbiAgICApO1xyXG4gICAgc3VwZXIoX2Rpc3BhdGNoZXIsIHRpbWVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIHRzbGludDpkaXNhYmxlOm5vLWZvcndhcmQtcmVmIG1heC1maWxlLWxpbmUtY291bnQgKi9cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcywgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFRpbWVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLnN0b3JlJztcclxuaW1wb3J0IHsgZ2V0Q29udHJvbHNWYWx1ZSB9IGZyb20gJy4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcclxuaW1wb3J0IHsgVGltZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vdGltZXBpY2tlci5jb25maWcnO1xyXG5cclxuaW1wb3J0IHtcclxuICBUaW1lQ2hhbmdlU291cmNlLFxyXG4gIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcclxuICBUaW1lcGlja2VyQ29udHJvbHNcclxufSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWxzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNWYWxpZERhdGUsXHJcbiAgcGFkTnVtYmVyLFxyXG4gIHBhcnNlVGltZSxcclxuICBpc0lucHV0VmFsaWQsXHJcbiAgaXNIb3VySW5wdXRWYWxpZCxcclxuICBpc01pbnV0ZUlucHV0VmFsaWQsXHJcbiAgaXNTZWNvbmRJbnB1dFZhbGlkLFxyXG4gIGlzSW5wdXRMaW1pdFZhbGlkXHJcbn0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3JNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSU1FUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yTW9kZWwgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUaW1lcGlja2VyQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0aW1lcGlja2VyJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtUSU1FUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1IsIFRpbWVwaWNrZXJTdG9yZV0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW2BcclxuICAgIC5icy1jaGV2cm9uIHtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA5cHg7XHJcbiAgICAgIGhlaWdodDogOXB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci13aWR0aDogM3B4IDBweCAwIDNweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnMtY2hldnJvbi11cCB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgICAgIHRvcDogMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5icy1jaGV2cm9uLWRvd24ge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgdG9wOiAtMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5icy10aW1lcGlja2VyLWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICB9XHJcbiAgYF0sXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZXBpY2tlckNvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsXHJcbiAgICBUaW1lcGlja2VyQ29tcG9uZW50U3RhdGUsXHJcbiAgICBUaW1lcGlja2VyQ29udHJvbHMsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkRlc3Ryb3kge1xyXG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIEBJbnB1dCgpIGhvdXJTdGVwOiBudW1iZXI7XHJcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXHJcbiAgQElucHV0KCkgbWludXRlU3RlcDogbnVtYmVyO1xyXG4gIC8qKiBzZWNvbmRzIGNoYW5nZSBzdGVwICovXHJcbiAgQElucHV0KCkgc2Vjb25kc1N0ZXA6IG51bWJlcjtcclxuICAvKiogaWYgdHJ1ZSBob3VycyBhbmQgbWludXRlcyBmaWVsZHMgd2lsbCBiZSByZWFkb25seSAqL1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5SW5wdXQ6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHRydWUgaG91cnMgYW5kIG1pbnV0ZXMgZmllbGRzIHdpbGwgYmUgZGlzYWJsZWQgKi9cclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcclxuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXHJcbiAgQElucHV0KCkgbW91c2V3aGVlbDogYm9vbGVhbjtcclxuICAvKiogaWYgdHJ1ZSB0aGUgdmFsdWVzIG9mIGhvdXJzIGFuZCBtaW51dGVzIGNhbiBiZSBjaGFuZ2VkIHVzaW5nIHRoZSB1cC9kb3duIGFycm93IGtleXMgb24gdGhlIGtleWJvYXJkICovXHJcbiAgQElucHV0KCkgYXJyb3drZXlzOiBib29sZWFuO1xyXG4gIC8qKiBpZiB0cnVlIHNwaW5uZXIgYXJyb3dzIGFib3ZlIGFuZCBiZWxvdyB0aGUgaW5wdXRzIHdpbGwgYmUgc2hvd24gKi9cclxuICBASW5wdXQoKSBzaG93U3Bpbm5lcnM6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHRydWUgbWVyaWRpYW4gYnV0dG9uIHdpbGwgYmUgc2hvd24gKi9cclxuICBASW5wdXQoKSBzaG93TWVyaWRpYW46IGJvb2xlYW47XHJcbiAgLyoqIHNob3cgbWludXRlcyBpbiB0aW1lcGlja2VyICovXHJcbiAgQElucHV0KCkgc2hvd01pbnV0ZXM6IGJvb2xlYW47XHJcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXHJcbiAgQElucHV0KCkgc2hvd1NlY29uZHM6IGJvb2xlYW47XHJcbiAgLyoqIG1lcmlkaWFuIGxhYmVscyBiYXNlZCBvbiBsb2NhbGUgKi9cclxuICBASW5wdXQoKSBtZXJpZGlhbnM6IHN0cmluZ1tdO1xyXG4gIC8qKiBtaW5pbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXHJcbiAgQElucHV0KCkgbWluOiBEYXRlO1xyXG4gIC8qKiBtYXhpbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXHJcbiAgQElucHV0KCkgbWF4OiBEYXRlO1xyXG5cclxuICAvKiogZW1pdHMgdHJ1ZSBpZiB2YWx1ZSBpcyBhIHZhbGlkIGRhdGUgKi9cclxuICBAT3V0cHV0KCkgaXNWYWxpZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgLy8gdWkgdmFyaWFibGVzXHJcbiAgaG91cnM6IHN0cmluZztcclxuICBtaW51dGVzOiBzdHJpbmc7XHJcbiAgc2Vjb25kczogc3RyaW5nO1xyXG4gIG1lcmlkaWFuOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCAtIHBsZWFzZSB1c2UgYGlzRWRpdGFibGVgIGluc3RlYWQgKi9cclxuICBnZXQgaXNTcGlubmVyc1Zpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5zaG93U3Bpbm5lcnMgJiYgIXRoaXMucmVhZG9ubHlJbnB1dDtcclxuICB9XHJcblxyXG4gIGdldCBpc0VkaXRhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEodGhpcy5yZWFkb25seUlucHV0IHx8IHRoaXMuZGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgLy8gbWluXFxtYXggdmFsaWRhdGlvbiBmb3IgaW5wdXQgZmllbGRzXHJcbiAgaW52YWxpZEhvdXJzID0gZmFsc2U7XHJcbiAgaW52YWxpZE1pbnV0ZXMgPSBmYWxzZTtcclxuICBpbnZhbGlkU2Vjb25kcyA9IGZhbHNlO1xyXG5cclxuICAvLyB0aW1lIHBpY2tlciBjb250cm9scyBzdGF0ZVxyXG4gIGNhbkluY3JlbWVudEhvdXJzOiBib29sZWFuO1xyXG4gIGNhbkluY3JlbWVudE1pbnV0ZXM6IGJvb2xlYW47XHJcbiAgY2FuSW5jcmVtZW50U2Vjb25kczogYm9vbGVhbjtcclxuXHJcbiAgY2FuRGVjcmVtZW50SG91cnM6IGJvb2xlYW47XHJcbiAgY2FuRGVjcmVtZW50TWludXRlczogYm9vbGVhbjtcclxuICBjYW5EZWNyZW1lbnRTZWNvbmRzOiBib29sZWFuO1xyXG5cclxuICBjYW5Ub2dnbGVNZXJpZGlhbjogYm9vbGVhbjtcclxuXHJcbiAgLy8gY29udHJvbCB2YWx1ZSBhY2Nlc3NvciBtZXRob2RzXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIHRpbWVwaWNrZXJTdWI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfY29uZmlnOiBUaW1lcGlja2VyQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IFRpbWVwaWNrZXJTdG9yZSxcclxuICAgIHByaXZhdGUgX3RpbWVwaWNrZXJBY3Rpb25zOiBUaW1lcGlja2VyQWN0aW9uc1xyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcclxuXHJcbiAgICB0aGlzLnRpbWVwaWNrZXJTdWIgPSBfc3RvcmVcclxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52YWx1ZSlcclxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcclxuICAgICAgICAvLyB1cGRhdGUgVUkgdmFsdWVzIGlmIGRhdGUgY2hhbmdlZFxyXG4gICAgICAgIHRoaXMuX3JlbmRlclRpbWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnVwZGF0ZUNvbnRyb2xzKGdldENvbnRyb2xzVmFsdWUodGhpcykpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgX3N0b3JlXHJcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuY29udHJvbHMpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGNvbnRyb2xzU3RhdGU6IFRpbWVwaWNrZXJDb250cm9scykgPT4ge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGlzSW5wdXRWYWxpZCh0aGlzLmhvdXJzLCB0aGlzLm1pbnV0ZXMsIHRoaXMuc2Vjb25kcywgdGhpcy5pc1BNKCkpKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbnRyb2xzU3RhdGUpO1xyXG4gICAgICAgIF9jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXNldFZhbGlkYXRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLmludmFsaWRIb3VycyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbnZhbGlkTWludXRlcyA9IGZhbHNlO1xyXG4gICAgdGhpcy5pbnZhbGlkU2Vjb25kcyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaXNQTSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnNob3dNZXJpZGlhbiAmJiB0aGlzLm1lcmlkaWFuID09PSB0aGlzLm1lcmlkaWFuc1sxXTtcclxuICB9XHJcblxyXG4gIHByZXZEZWYoJGV2ZW50OiBFdmVudCkge1xyXG4gICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICB3aGVlbFNpZ24oJGV2ZW50OiBXaGVlbEV2ZW50SW5pdCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gTWF0aC5zaWduKCRldmVudC5kZWx0YVkpICogLTE7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMudXBkYXRlQ29udHJvbHMoZ2V0Q29udHJvbHNWYWx1ZSh0aGlzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VIb3VycyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlSG91cnMoeyBzdGVwLCBzb3VyY2UgfSkpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTWludXRlcyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZU1pbnV0ZXMoeyBzdGVwLCBzb3VyY2UgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTZWNvbmRzKHN0ZXA6IG51bWJlciwgc291cmNlOiBUaW1lQ2hhbmdlU291cmNlID0gJycpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlU2Vjb25kcyh7IHN0ZXAsIHNvdXJjZSB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUhvdXJzKGhvdXJzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICB0aGlzLmhvdXJzID0gaG91cnM7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzSG91cklucHV0VmFsaWQodGhpcy5ob3VycywgdGhpcy5pc1BNKCkpICYmIHRoaXMuaXNWYWxpZExpbWl0KCk7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZEhvdXJzID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoZmFsc2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3VwZGF0ZVRpbWUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU1pbnV0ZXMobWludXRlczogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5taW51dGVzID0gbWludXRlcztcclxuXHJcbiAgICBjb25zdCBpc1ZhbGlkID0gaXNNaW51dGVJbnB1dFZhbGlkKHRoaXMubWludXRlcykgJiYgdGhpcy5pc1ZhbGlkTGltaXQoKTtcclxuXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgdGhpcy5pbnZhbGlkTWludXRlcyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl91cGRhdGVUaW1lKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWNvbmRzKHNlY29uZHM6IHN0cmluZykge1xyXG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIHRoaXMuc2Vjb25kcyA9IHNlY29uZHM7XHJcblxyXG4gICAgY29uc3QgaXNWYWxpZCA9IGlzU2Vjb25kSW5wdXRWYWxpZCh0aGlzLnNlY29uZHMpICYmIHRoaXMuaXNWYWxpZExpbWl0KCk7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZFNlY29uZHMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZExpbWl0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzSW5wdXRMaW1pdFZhbGlkKHtcclxuICAgICAgaG91cjogdGhpcy5ob3VycyxcclxuICAgICAgbWludXRlOiB0aGlzLm1pbnV0ZXMsXHJcbiAgICAgIHNlY29uZHM6IHRoaXMuc2Vjb25kcyxcclxuICAgICAgaXNQTTogdGhpcy5pc1BNKClcclxuICAgIH0sIHRoaXMubWF4LCB0aGlzLm1pbik7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVGltZSgpIHtcclxuICAgIGNvbnN0IF9zZWNvbmRzID0gdGhpcy5zaG93U2Vjb25kcyA/IHRoaXMuc2Vjb25kcyA6IHZvaWQgMDtcclxuICAgIGNvbnN0IF9taW51dGVzID0gdGhpcy5zaG93TWludXRlcyA/IHRoaXMubWludXRlcyA6IHZvaWQgMDtcclxuICAgIGlmICghaXNJbnB1dFZhbGlkKHRoaXMuaG91cnMsIF9taW51dGVzLCBfc2Vjb25kcywgdGhpcy5pc1BNKCkpKSB7XHJcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuc2V0VGltZSh7XHJcbiAgICAgICAgaG91cjogdGhpcy5ob3VycyxcclxuICAgICAgICBtaW51dGU6IHRoaXMubWludXRlcyxcclxuICAgICAgICBzZWNvbmRzOiB0aGlzLnNlY29uZHMsXHJcbiAgICAgICAgaXNQTTogdGhpcy5pc1BNKClcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNZXJpZGlhbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zaG93TWVyaWRpYW4gfHwgIXRoaXMuaXNFZGl0YWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2hvdXJzUGVyRGF5SGFsZiA9IDEyO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHtcclxuICAgICAgICBzdGVwOiBfaG91cnNQZXJEYXlIYWxmLFxyXG4gICAgICAgIHNvdXJjZTogJydcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cclxuICAgKi9cclxuICB3cml0ZVZhbHVlKG9iajogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCB8IERhdGUpOiB2b2lkIHtcclxuICAgIGlmIChpc1ZhbGlkRGF0ZShvYmopKSB7XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLndyaXRlVmFsdWUocGFyc2VUaW1lKG9iaikpKTtcclxuICAgIH0gZWxzZSBpZiAob2JqID09IG51bGwpIHtcclxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fdGltZXBpY2tlckFjdGlvbnMud3JpdGVWYWx1ZShudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgY2hhbmdlIGV2ZW50LlxyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgd2hlbiB0aGUgY29udHJvbCByZWNlaXZlcyBhIHRvdWNoIGV2ZW50LlxyXG4gICAqL1xyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgc3RhdHVzIGNoYW5nZXMgdG8gb3IgZnJvbSBcImRpc2FibGVkXCIuXHJcbiAgICogRGVwZW5kaW5nIG9uIHRoZSB2YWx1ZSwgaXQgd2lsbCBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYXBwcm9wcmlhdGUgRE9NIGVsZW1lbnQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaXNEaXNhYmxlZFxyXG4gICAqL1xyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lcGlja2VyU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZW5kZXJUaW1lKHZhbHVlOiBzdHJpbmcgfCBEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzVmFsaWREYXRlKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLmhvdXJzID0gJyc7XHJcbiAgICAgIHRoaXMubWludXRlcyA9ICcnO1xyXG4gICAgICB0aGlzLnNlY29uZHMgPSAnJztcclxuICAgICAgdGhpcy5tZXJpZGlhbiA9IHRoaXMubWVyaWRpYW5zWzBdO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF92YWx1ZSA9IHBhcnNlVGltZSh2YWx1ZSk7XHJcbiAgICBjb25zdCBfaG91cnNQZXJEYXlIYWxmID0gMTI7XHJcbiAgICBsZXQgX2hvdXJzID0gX3ZhbHVlLmdldEhvdXJzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd01lcmlkaWFuKSB7XHJcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1tfaG91cnMgPj0gX2hvdXJzUGVyRGF5SGFsZiA/IDEgOiAwXTtcclxuICAgICAgX2hvdXJzID0gX2hvdXJzICUgX2hvdXJzUGVyRGF5SGFsZjtcclxuICAgICAgLy8gc2hvdWxkIGJlIDEyIFBNLCBub3QgMDAgUE1cclxuICAgICAgaWYgKF9ob3VycyA9PT0gMCkge1xyXG4gICAgICAgIF9ob3VycyA9IF9ob3Vyc1BlckRheUhhbGY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhvdXJzID0gcGFkTnVtYmVyKF9ob3Vycyk7XHJcbiAgICB0aGlzLm1pbnV0ZXMgPSBwYWROdW1iZXIoX3ZhbHVlLmdldE1pbnV0ZXMoKSk7XHJcbiAgICB0aGlzLnNlY29uZHMgPSBwYWROdW1iZXIoX3ZhbHVlLmdldFVUQ1NlY29uZHMoKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgeyBUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi90aW1lcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFRpbWVwaWNrZXJDb25maWcgfSBmcm9tICcuL3RpbWVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgVGltZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuc3RvcmUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtUaW1lcGlja2VyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbVGltZXBpY2tlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRpbWVwaWNrZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1RpbWVwaWNrZXJDb25maWcsIFRpbWVwaWNrZXJBY3Rpb25zLCBUaW1lcGlja2VyU3RvcmVdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsidHNsaWJfMS5fX2V4dGVuZHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7SUFpQkUsc0NBQVU7Ozs7SUFBVixVQUFXLEtBQW9CO1FBQzdCLE9BQU87WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsV0FBVztZQUNuQyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksS0FBc0I7UUFDaEMsT0FBTztZQUNMLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxZQUFZO1lBQ3BDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQztLQUNIOzs7OztJQUVELHlDQUFhOzs7O0lBQWIsVUFBYyxLQUFzQjtRQUNsQyxPQUFPO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGNBQWM7WUFDdEMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQseUNBQWE7Ozs7SUFBYixVQUFjLEtBQXNCO1FBQ2xDLE9BQU87WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDs7Ozs7SUFFRCxtQ0FBTzs7OztJQUFQLFVBQVEsS0FBVztRQUNqQixPQUFPO1lBQ0wsSUFBSSxFQUFFLGlCQUFpQixDQUFDLGFBQWE7WUFDckMsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDO0tBQ0g7Ozs7O0lBRUQsMENBQWM7Ozs7SUFBZCxVQUFlLEtBQStCO1FBQzVDLE9BQU87WUFDTCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsZUFBZTtZQUN2QyxPQUFPLEVBQUUsS0FBSztTQUNmLENBQUM7S0FDSDtvQ0EvQzZCLHdDQUF3QztxQ0FDdkMsMkJBQTJCO3VDQUN6Qiw2QkFBNkI7dUNBQzdCLDZCQUE2QjtzQ0FDOUIsNEJBQTRCO3dDQUMxQiw4QkFBOEI7O2dCQVBqRSxVQUFVOzs0QkFSWDs7Ozs7OztBQ0VBLHFCQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDZixxQkFBTSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3ZCLHFCQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7QUFDM0IscUJBQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUMxQixxQkFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7Ozs7O0FBRTVCLHFCQUE0QixLQUFxQjtJQUMvQyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksS0FBSyxZQUFZLElBQUksSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUU7UUFDcEQsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sV0FBVyxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDckM7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7Ozs7QUFFRCxzQkFBNkIsUUFBa0MsRUFBRSxPQUFhO0lBQzVFLElBQUksUUFBUSxDQUFDLEdBQUcsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUMxQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxRQUFRLENBQUMsR0FBRyxJQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFO1FBQzFDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7OztBQUVELGtCQUF5QixLQUFzQjtJQUM3QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxRQUFRLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzdCOzs7Ozs7QUFNRCxvQkFDRSxLQUFzQixFQUN0QixJQUFZO0lBQVoscUJBQUEsRUFBQSxZQUFZO0lBRVoscUJBQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixJQUNFLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDWCxJQUFJLEdBQUcsQ0FBQztRQUNSLElBQUksSUFBSSxJQUFJLEdBQUcsZUFBZSxHQUFHLFdBQVcsQ0FDOUMsRUFBRTtRQUNBLE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7OztBQUVELHNCQUE2QixLQUFzQjtJQUNqRCxxQkFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksTUFBTSxHQUFHLGNBQWMsRUFBRTtRQUMxRCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsT0FBTyxNQUFNLENBQUM7Q0FDZjs7Ozs7QUFFRCxzQkFBNkIsS0FBc0I7SUFDakQscUJBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxJQUFJLE9BQU8sR0FBRyxnQkFBZ0IsRUFBRTtRQUMvRCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsT0FBTyxPQUFPLENBQUM7Q0FDaEI7Ozs7O0FBRUQsbUJBQTBCLEtBQW9CO0lBQzVDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1FBQzdCLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDeEI7SUFFRCxPQUFPLEtBQUssQ0FBQztDQUNkOzs7Ozs7QUFFRCxvQkFBMkIsS0FBVyxFQUFFLElBQVU7SUFDaEQsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDMUQ7SUFFRCxxQkFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVCLHFCQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDakMscUJBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUVqQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDYixJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUM7UUFDbEQsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFO1lBQ1osSUFBSSxJQUFJLFdBQVcsQ0FBQztTQUNyQjtLQUNGO0lBRUQsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1FBQ2YsT0FBTyxHQUFHLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzNDO0lBRUQsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2hCLE9BQU8sR0FBRyxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUM1QztJQUVELE9BQU8sVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0NBQ2xEOzs7Ozs7QUFFRCxpQkFBd0IsS0FBVyxFQUFFLElBQVU7SUFDN0MscUJBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMscUJBQU0sTUFBTSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMscUJBQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhELElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtRQUNiLElBQUksSUFBSSxlQUFlLENBQUM7S0FDekI7SUFFRCxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxPQUFPLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDdEQ7UUFFRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2hDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztDQUNqRDs7Ozs7Ozs7QUFFRCxvQkFDRSxLQUFXLEVBQ1gsS0FBYSxFQUNiLE9BQWUsRUFDZixPQUFlO0lBRWYsT0FBTyxJQUFJLElBQUksQ0FDYixLQUFLLENBQUMsV0FBVyxFQUFFLEVBQ25CLEtBQUssQ0FBQyxRQUFRLEVBQUUsRUFDaEIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUNmLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxFQUNQLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FDeEIsQ0FBQztDQUNIOzs7OztBQUVELG1CQUEwQixLQUFhO0lBQ3JDLHFCQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUNyQixPQUFPLE1BQU0sQ0FBQztLQUNmO0lBRUQsT0FBTyxNQUFJLE1BQVEsQ0FBQztDQUNyQjs7Ozs7O0FBRUQsMEJBQWlDLEtBQWEsRUFBRSxJQUFhO0lBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO0NBQ3hDOzs7OztBQUVELDRCQUFtQyxPQUFlO0lBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDdEM7Ozs7O0FBRUQsNEJBQW1DLE9BQWU7SUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztDQUN0Qzs7Ozs7OztBQUVELDJCQUFrQyxJQUFVLEVBQUUsR0FBUyxFQUFFLEdBQVM7SUFDaEUscUJBQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRTdDLElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELElBQUksR0FBRyxJQUFJLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDeEIsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7Ozs7O0FBRUQsc0JBQ0UsS0FBYSxFQUNiLE9BQWEsRUFDYixPQUFhLEVBQ2IsSUFBYTtJQUZiLHdCQUFBLEVBQUEsYUFBYTtJQUNiLHdCQUFBLEVBQUEsYUFBYTtJQUdiLE9BQU8sZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztXQUMvQixrQkFBa0IsQ0FBQyxPQUFPLENBQUM7V0FDM0Isa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDbEM7Ozs7OztBQzFNRDs7Ozs7QUFPQSx3QkFDRSxLQUErQixFQUMvQixLQUF1QjtJQUV2QixJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRTtRQUN6QyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLEVBQUU7UUFDVCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtZQUNqRCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDOUMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7Q0FDYjs7Ozs7O0FBRUQsd0JBQ0UsS0FBc0IsRUFDdEIsUUFBNEI7SUFFNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtRQUNqRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFBRTtRQUNqRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7Q0FDYjs7Ozs7O0FBRUQsMEJBQ0UsS0FBc0IsRUFDdEIsUUFBNEI7SUFFNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUNuRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUNuRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7Q0FDYjs7Ozs7O0FBRUQsMEJBQ0UsS0FBc0IsRUFDdEIsUUFBNEI7SUFFNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7UUFDZixPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUNuRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBQ0QsSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRTtRQUNuRCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsT0FBTyxJQUFJLENBQUM7Q0FDYjs7Ozs7QUFFRCwwQkFDRSxLQUErQjtJQUc3QixJQUFBLHlCQUFRLEVBQ1IsNkJBQVUsRUFDViwrQkFBVyxFQUNYLG1DQUFhLEVBQ2IseUJBQVEsRUFDUiw2QkFBVSxFQUNWLDJCQUFTLEVBQ1QsaUNBQVksRUFDWixpQ0FBWSxFQUNaLCtCQUFXLEVBQ1gsMkJBQVMsRUFDVCxlQUFHLEVBQ0gsZUFBRyxDQUNLO0lBRVYsT0FBTztRQUNMLFFBQVEsVUFBQTtRQUNSLFVBQVUsWUFBQTtRQUNWLFdBQVcsYUFBQTtRQUNYLGFBQWEsZUFBQTtRQUNiLFFBQVEsVUFBQTtRQUNSLFVBQVUsWUFBQTtRQUNWLFNBQVMsV0FBQTtRQUNULFlBQVksY0FBQTtRQUNaLFlBQVksY0FBQTtRQUNaLFdBQVcsYUFBQTtRQUNYLFNBQVMsV0FBQTtRQUNULEdBQUcsS0FBQTtRQUNILEdBQUcsS0FBQTtLQUNKLENBQUM7Q0FDSDs7Ozs7O0FBRUQsNEJBQ0UsS0FBVyxFQUNYLEtBQStCO0lBRS9CLHFCQUFNLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDbkIsSUFBQSxlQUFHLEVBQUUsZUFBRyxFQUFFLHlCQUFRLEVBQUUsNkJBQVUsRUFBRSwrQkFBVyxFQUFFLCtCQUFXLENBQVc7SUFDM0UscUJBQU0sR0FBRyxHQUF1QjtRQUM5QixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCLENBQUM7SUFFRixJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1YsT0FBTyxHQUFHLENBQUM7S0FDWjs7SUFHRCxJQUFJLEdBQUcsRUFBRTtRQUNQLHFCQUFNLFFBQVEsR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkQsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFFdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixxQkFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQzlELEdBQUcsQ0FBQyxtQkFBbUIsR0FBRyxXQUFXO2tCQUNqQyxHQUFHLEdBQUcsV0FBVztrQkFDakIsR0FBRyxJQUFJLFdBQVcsQ0FBQztTQUN4QjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIscUJBQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNoRSxHQUFHLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxJQUFJLFdBQVcsQ0FBQztTQUM5QztRQUVELElBQUksS0FBSyxDQUFDLFFBQVEsRUFBRSxHQUFHLGVBQWUsRUFBRTtZQUN0QyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM1RTtLQUNGO0lBRUQsSUFBSSxHQUFHLEVBQUU7UUFDUCxxQkFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEQsR0FBRyxDQUFDLGlCQUFpQixHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUM7UUFFdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixxQkFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7WUFDL0QsR0FBRyxDQUFDLG1CQUFtQixHQUFHLFdBQVc7a0JBQ2pDLEdBQUcsR0FBRyxXQUFXO2tCQUNqQixHQUFHLElBQUksV0FBVyxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRTtZQUM1QixxQkFBTSxXQUFXLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDakUsR0FBRyxDQUFDLG1CQUFtQixHQUFHLEdBQUcsSUFBSSxXQUFXLENBQUM7U0FDOUM7UUFFRCxJQUFJLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxlQUFlLEVBQUU7WUFDdkMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUM3RTtLQUNGO0lBRUQsT0FBTyxHQUFHLENBQUM7Q0FDWjs7Ozs7O0FDdkxEOzs7Ozs7Ozt3QkFNYSxDQUFDOzs7OzBCQUVDLENBQUM7Ozs7MkJBRUEsRUFBRTs7Ozs0QkFFRCxJQUFJOzs7O3lCQUVQLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQzs7Ozs2QkFFUixLQUFLOzs7O3dCQUVWLEtBQUs7Ozs7MEJBRUgsSUFBSTs7Ozt5QkFFTCxJQUFJOzs7OzRCQUVELElBQUk7Ozs7MkJBRUwsS0FBSzs7OzsyQkFFTCxJQUFJOzs7Z0JBekJuQixVQUFVOzsyQkFIWDs7Ozs7OztBQ0NBLEFBcUJPLHFCQUFNLFlBQVksR0FBb0I7SUFDM0MsS0FBSyxFQUFFLElBQUk7SUFDWCxNQUFNLEVBQUUsSUFBSSxnQkFBZ0IsRUFBRTtJQUM5QixRQUFRLEVBQUU7UUFDUixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO1FBQ3ZCLG1CQUFtQixFQUFFLElBQUk7UUFDekIsbUJBQW1CLEVBQUUsSUFBSTtRQUV6QixpQkFBaUIsRUFBRSxJQUFJO0tBQ3hCO0NBQ0YsQ0FBQzs7Ozs7O0FBR0YsMkJBQWtDLEtBQW9CLEVBQUUsTUFBYztJQUFwQyxzQkFBQSxFQUFBLG9CQUFvQjtJQUNwRCxRQUFRLE1BQU0sQ0FBQyxJQUFJO1FBQ2pCLEtBQUssaUJBQWlCLENBQUMsV0FBVyxFQUFFO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzVEO1FBRUQsS0FBSyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUU7WUFDbkMsSUFDRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FDaEQsRUFBRTtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQscUJBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUV4RSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsRUFBRTtnQkFDakYsT0FBTyxLQUFLLENBQUM7YUFDaEI7WUFFRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsS0FBSyxpQkFBaUIsQ0FBQyxjQUFjLEVBQUU7WUFDckMsSUFDRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUM7Z0JBQzdDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsUUFBUSxDQUNsRCxFQUFFO2dCQUNBLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFFRCxxQkFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRTFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNuRixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUVELEtBQUssaUJBQWlCLENBQUMsY0FBYyxFQUFFO1lBQ3JDLElBQ0UsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDO2dCQUM3QyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FDbEQsRUFBRTtnQkFDQSxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQscUJBQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUN2QyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJO2FBQzdCLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNuRixPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUN0RDtRQUVELEtBQUssaUJBQWlCLENBQUMsYUFBYSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQscUJBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUV0RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3REO1FBRUQsS0FBSyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUU7WUFDdEMscUJBQU0saUJBQWlCLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUUscUJBQU0sU0FBUyxHQUFvQjtnQkFDakMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO2dCQUNsQixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU87Z0JBQ3RCLFFBQVEsRUFBRSxpQkFBaUI7YUFDNUIsQ0FBQztZQUVGLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7Z0JBQy9ELElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtvQkFDZixTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDekM7YUFDRjtZQUVELE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVDO1FBRUQ7WUFDRSxPQUFPLEtBQUssQ0FBQztLQUNoQjtDQUNGOzs7Ozs7O0lDckhvQ0EsbUNBQTBCO0lBQzdEO1FBQUEsaUJBVUM7UUFUQyxxQkFBTSxXQUFXLEdBQUcsSUFBSSxlQUFlLENBQVM7WUFDOUMsSUFBSSxFQUFFLDZCQUE2QjtTQUNwQyxDQUFDLENBQUM7UUFDSCxxQkFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQ3pCLFlBQVksRUFDWixXQUFXLEVBQ1gsaUJBQWlCLENBQ2xCLENBQUM7UUFDRixRQUFBLGtCQUFNLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLENBQUMsU0FBQzs7S0FDOUM7O2dCQVpGLFVBQVU7Ozs7MEJBVlg7RUFXcUMsU0FBUzs7Ozs7O0FDVjlDLHFCQXlDYSxpQ0FBaUMsR0FBOEI7SUFDMUUsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEdBQUEsQ0FBQztJQUNsRCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBZ0hBLDZCQUNFLE9BQXlCLEVBQ2pCLEtBQ0EsUUFDQTtRQUpWLGlCQTJCQztRQXpCUyxRQUFHLEdBQUgsR0FBRztRQUNILFdBQU0sR0FBTixNQUFNO1FBQ04sdUJBQWtCLEdBQWxCLGtCQUFrQjs7Ozt1QkE3Q1IsSUFBSSxZQUFZLEVBQVc7OzRCQWtCaEMsS0FBSzs4QkFDSCxLQUFLOzhCQUNMLEtBQUs7Ozt3QkFlWCxRQUFRLENBQUMsU0FBUzs7eUJBRWpCLFFBQVEsQ0FBQyxTQUFTO1FBVTVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRTdCLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTTthQUN4QixNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxHQUFBLENBQUM7YUFDNUIsU0FBUyxDQUFDLFVBQUMsS0FBVzs7O1lBRXJCLEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVyQixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUMvRCxDQUFDO1NBQ0gsQ0FBQyxDQUFDO1FBRUwsTUFBTTthQUNILE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxRQUFRLEdBQUEsQ0FBQzthQUMvQixTQUFTLENBQUMsVUFBQyxhQUFpQztZQUMzQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyRixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNuQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEIsQ0FBQyxDQUFDO0tBQ047SUEzREQsc0JBQUksa0RBQWlCOzs7Ozs7UUFBckI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQ2pEOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDL0M7OztPQUFBOzs7O0lBdURELDZDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0tBQzdCOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNqRTs7Ozs7SUFFRCxxQ0FBTzs7OztJQUFQLFVBQVEsTUFBYTtRQUNuQixNQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7S0FDekI7Ozs7O0lBRUQsdUNBQVM7Ozs7SUFBVCxVQUFVLE1BQXNCO1FBQzlCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdEM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQy9ELENBQUM7S0FDSDs7Ozs7O0lBRUQseUNBQVc7Ozs7O0lBQVgsVUFBWSxJQUFZLEVBQUUsTUFBNkI7UUFBN0IsdUJBQUEsRUFBQSxXQUE2QjtRQUNyRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQzdFOzs7Ozs7SUFFRCwyQ0FBYTs7Ozs7SUFBYixVQUFjLElBQVksRUFBRSxNQUE2QjtRQUE3Qix1QkFBQSxFQUFBLFdBQTZCO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FDeEQsQ0FBQztLQUNIOzs7Ozs7SUFFRCwyQ0FBYTs7Ozs7SUFBYixVQUFjLElBQVksRUFBRSxNQUE2QjtRQUE3Qix1QkFBQSxFQUFBLFdBQTZCO1FBQ3ZELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FDeEQsQ0FBQztLQUNIOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUVuQixxQkFBTSxPQUFPLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakYsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxPQUFlO1FBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixxQkFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUV4RSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVwQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsMkNBQWE7Ozs7SUFBYixVQUFjLE9BQWU7UUFDM0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRXZCLHFCQUFNLE9BQU8sR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXhFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELDBDQUFZOzs7SUFBWjtRQUNFLE9BQU8saUJBQWlCLENBQUM7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNwQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUU7U0FDbEIsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUN4Qjs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLHFCQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDMUQscUJBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRTtZQUM5RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDO1lBQzlCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSztZQUNoQixNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDcEIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQ2xCLENBQUMsQ0FDSCxDQUFDO0tBQ0g7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUMsT0FBTztTQUNSO1FBRUQscUJBQU0sZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO1lBQ2xDLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFDLENBQ0gsQ0FBQztLQUNIOzs7Ozs7Ozs7SUFLRCx3Q0FBVTs7Ozs7SUFBVixVQUFXLEdBQXFDO1FBQzlDLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTthQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDaEU7S0FDRjs7Ozs7Ozs7OztJQU1ELDhDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsRUFBa0I7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7Ozs7OztJQUtELCtDQUFpQjs7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7Ozs7Ozs7Ozs7Ozs7SUFRRCw4Q0FBZ0I7Ozs7Ozs7SUFBaEIsVUFBaUIsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDbEM7Ozs7O0lBRU8seUNBQVc7Ozs7Y0FBQyxLQUFvQjtRQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVsQyxPQUFPO1NBQ1I7UUFFRCxxQkFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLHFCQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUM1QixxQkFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRS9CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxJQUFJLGdCQUFnQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNuRSxNQUFNLEdBQUcsTUFBTSxHQUFHLGdCQUFnQixDQUFDOztZQUVuQyxJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQzthQUMzQjtTQUNGO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7OztnQkF0VnBELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLGVBQWUsQ0FBQztvQkFDL0QsczFLQUEwQztvQkEyQjFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzZCQTFCNUIsNmVBeUJSO2lCQUVGOzs7O2dCQTlEUSxnQkFBZ0I7Z0JBaEJ2QixpQkFBaUI7Z0JBY1YsZUFBZTtnQkFEZixpQkFBaUI7Ozs2QkF5RXZCLEtBQUs7K0JBRUwsS0FBSztnQ0FFTCxLQUFLO2tDQUVMLEtBQUs7NkJBRUwsS0FBSzsrQkFFTCxLQUFLOzhCQUVMLEtBQUs7aUNBRUwsS0FBSztpQ0FFTCxLQUFLO2dDQUVMLEtBQUs7Z0NBRUwsS0FBSzs4QkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBRUwsS0FBSzs0QkFHTCxNQUFNOzs4QkF0SFQ7Ozs7Ozs7QUNBQTs7Ozs7O0lBY1Msd0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO1NBQ2xFLENBQUM7S0FDSDs7Z0JBWEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2lCQUMvQjs7MkJBWkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==