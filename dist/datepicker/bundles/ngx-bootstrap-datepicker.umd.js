(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ngx-bootstrap/chronos'), require('ngx-bootstrap/mini-ngrx'), require('ngx-bootstrap/positioning'), require('ngx-bootstrap/component-loader'), require('@angular/forms'), require('@angular/common'), require('ngx-bootstrap/utils')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/datepicker', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'ngx-bootstrap/chronos', 'ngx-bootstrap/mini-ngrx', 'ngx-bootstrap/positioning', 'ngx-bootstrap/component-loader', '@angular/forms', '@angular/common', 'ngx-bootstrap/utils'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].datepicker = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.chronos,global.miniNgrx,global.positioning,global.componentLoader,global.ng.forms,global.ng.common,global.utils));
}(this, (function (exports,core,rxjs,operators,chronos,miniNgrx,positioning,componentLoader,forms,common,utils) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
     * except `displayMonths`, for range picker it default to `2`
     */
    var BsDatepickerConfig = (function () {
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
            { type: core.Injectable }
        ];
        return BsDatepickerConfig;
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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @abstract
     */
    var /**
     * @abstract
     */ BsDatepickerAbstractComponent = (function () {
        function BsDatepickerAbstractComponent() {
            this._customRangesFish = [];
        }
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "minDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setMinDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "maxDate", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setMaxDate(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "daysDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setDaysDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "datesDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setDatesDisabled(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerAbstractComponent.prototype, "isDisabled", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
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
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerActions = (function () {
        function BsDatepickerActions() {
        }
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.calculate = /**
         * @return {?}
         */
            function () {
                return { type: BsDatepickerActions.CALCULATE };
            };
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.format = /**
         * @return {?}
         */
            function () {
                return { type: BsDatepickerActions.FORMAT };
            };
        /**
         * @return {?}
         */
        BsDatepickerActions.prototype.flag = /**
         * @return {?}
         */
            function () {
                return { type: BsDatepickerActions.FLAG };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.select = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return {
                    type: BsDatepickerActions.SELECT,
                    payload: date
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: BsDatepickerActions.CHANGE_VIEWMODE,
                    payload: event
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: BsDatepickerActions.NAVIGATE_TO,
                    payload: event
                };
            };
        /**
         * @param {?} step
         * @return {?}
         */
        BsDatepickerActions.prototype.navigateStep = /**
         * @param {?} step
         * @return {?}
         */
            function (step) {
                return {
                    type: BsDatepickerActions.NAVIGATE_OFFSET,
                    payload: step
                };
            };
        /**
         * @param {?} options
         * @return {?}
         */
        BsDatepickerActions.prototype.setOptions = /**
         * @param {?} options
         * @return {?}
         */
            function (options) {
                return {
                    type: BsDatepickerActions.SET_OPTIONS,
                    payload: options
                };
            };
        // date range picker
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerActions.prototype.selectRange = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: BsDatepickerActions.SELECT_RANGE,
                    payload: value
                };
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerActions.prototype.hoverDay = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                return {
                    type: BsDatepickerActions.HOVER,
                    payload: event.isHovered ? event.cell.date : null
                };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.minDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return {
                    type: BsDatepickerActions.SET_MIN_DATE,
                    payload: date
                };
            };
        /**
         * @param {?} date
         * @return {?}
         */
        BsDatepickerActions.prototype.maxDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                return {
                    type: BsDatepickerActions.SET_MAX_DATE,
                    payload: date
                };
            };
        /**
         * @param {?} days
         * @return {?}
         */
        BsDatepickerActions.prototype.daysDisabled = /**
         * @param {?} days
         * @return {?}
         */
            function (days) {
                return {
                    type: BsDatepickerActions.SET_DAYSDISABLED,
                    payload: days
                };
            };
        /**
         * @param {?} dates
         * @return {?}
         */
        BsDatepickerActions.prototype.datesDisabled = /**
         * @param {?} dates
         * @return {?}
         */
            function (dates) {
                return {
                    type: BsDatepickerActions.SET_DATESDISABLED,
                    payload: dates
                };
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerActions.prototype.isDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return {
                    type: BsDatepickerActions.SET_IS_DISABLED,
                    payload: value
                };
            };
        /**
         * @param {?} locale
         * @return {?}
         */
        BsDatepickerActions.prototype.setLocale = /**
         * @param {?} locale
         * @return {?}
         */
            function (locale) {
                return {
                    type: BsDatepickerActions.SET_LOCALE,
                    payload: locale
                };
            };
        BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
        BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
        BsDatepickerActions.FLAG = '[datepicker] set flags';
        BsDatepickerActions.SELECT = '[datepicker] select date';
        BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
        BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
        BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
        BsDatepickerActions.HOVER = '[datepicker] hover date';
        BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
        BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
        BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
        BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
        BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
        BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
        BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
        BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
        BsDatepickerActions.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerActions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsLocaleService = (function () {
        function BsLocaleService() {
            this._defaultLocale = 'en';
            this._locale = new rxjs.BehaviorSubject(this._defaultLocale);
            this._localeChange = this._locale.asObservable();
        }
        Object.defineProperty(BsLocaleService.prototype, "locale", {
            get: /**
             * @return {?}
             */ function () {
                return this._locale;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "localeChange", {
            get: /**
             * @return {?}
             */ function () {
                return this._localeChange;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsLocaleService.prototype, "currentLocale", {
            get: /**
             * @return {?}
             */ function () {
                return this._locale.getValue();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} locale
         * @return {?}
         */
        BsLocaleService.prototype.use = /**
         * @param {?} locale
         * @return {?}
         */
            function (locale) {
                if (locale === this.currentLocale) {
                    return;
                }
                this._locale.next(locale);
            };
        BsLocaleService.decorators = [
            { type: core.Injectable }
        ];
        return BsLocaleService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerEffects = (function () {
        function BsDatepickerEffects(_actions, _localeService) {
            this._actions = _actions;
            this._localeService = _localeService;
            this._subs = [];
        }
        /**
         * @param {?} _bsDatepickerStore
         * @return {?}
         */
        BsDatepickerEffects.prototype.init = /**
         * @param {?} _bsDatepickerStore
         * @return {?}
         */
            function (_bsDatepickerStore) {
                this._store = _bsDatepickerStore;
                return this;
            };
        /** setters */
        /**
         * setters
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setValue = /**
         * setters
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.select(value));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setRangeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.selectRange(value));
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setMinDate = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.minDate(value));
                return this;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setMaxDate = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.maxDate(value));
                return this;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setDaysDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.daysDisabled(value));
                return this;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setDatesDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.datesDisabled(value));
                return this;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerEffects.prototype.setDisabled = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this._store.dispatch(this._actions.isDisabled(value));
                return this;
            };
        /* Set rendering options */
        /**
         * @param {?} _config
         * @return {?}
         */
        BsDatepickerEffects.prototype.setOptions = /**
         * @param {?} _config
         * @return {?}
         */
            function (_config) {
                var /** @type {?} */ _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
                this._store.dispatch(this._actions.setOptions(_options));
                return this;
            };
        /** view to mode bindings */
        /**
         * view to mode bindings
         * @param {?} container
         * @return {?}
         */
        BsDatepickerEffects.prototype.setBindings = /**
         * view to mode bindings
         * @param {?} container
         * @return {?}
         */
            function (container) {
                container.daysCalendar = this._store
                    .select(function (state) { return state.flaggedMonths; })
                    .pipe(operators.filter(function (months) { return !!months; }));
                // month calendar
                container.monthsCalendar = this._store
                    .select(function (state) { return state.flaggedMonthsCalendar; })
                    .pipe(operators.filter(function (months) { return !!months; }));
                // year calendar
                container.yearsCalendar = this._store
                    .select(function (state) { return state.yearsCalendarFlagged; })
                    .pipe(operators.filter(function (years) { return !!years; }));
                container.viewMode = this._store.select(function (state) { return state.view.mode; });
                container.options = this._store
                    .select(function (state) { return state.showWeekNumbers; })
                    .pipe(operators.map(function (showWeekNumbers) { return ({ showWeekNumbers: showWeekNumbers }); }));
                return this;
            };
        /** event handlers */
        /**
         * event handlers
         * @param {?} container
         * @return {?}
         */
        BsDatepickerEffects.prototype.setEventHandlers = /**
         * event handlers
         * @param {?} container
         * @return {?}
         */
            function (container) {
                var _this = this;
                container.setViewMode = function (event) {
                    _this._store.dispatch(_this._actions.changeViewMode(event));
                };
                container.navigateTo = function (event) {
                    _this._store.dispatch(_this._actions.navigateStep(event.step));
                };
                container.dayHoverHandler = function (event) {
                    var /** @type {?} */ _cell = (event.cell);
                    if (_cell.isOtherMonth || _cell.isDisabled) {
                        return;
                    }
                    _this._store.dispatch(_this._actions.hoverDay(event));
                    _cell.isHovered = event.isHovered;
                };
                container.monthHoverHandler = function (event) {
                    event.cell.isHovered = event.isHovered;
                };
                container.yearHoverHandler = function (event) {
                    event.cell.isHovered = event.isHovered;
                };
                container.monthSelectHandler = function (event) {
                    if (event.isDisabled) {
                        return;
                    }
                    _this._store.dispatch(_this._actions.navigateTo({
                        unit: {
                            month: chronos.getMonth(event.date),
                            year: chronos.getFullYear(event.date)
                        },
                        viewMode: 'day'
                    }));
                };
                container.yearSelectHandler = function (event) {
                    if (event.isDisabled) {
                        return;
                    }
                    _this._store.dispatch(_this._actions.navigateTo({
                        unit: {
                            year: chronos.getFullYear(event.date)
                        },
                        viewMode: 'month'
                    }));
                };
                return this;
            };
        /**
         * @return {?}
         */
        BsDatepickerEffects.prototype.registerDatepickerSideEffects = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._subs.push(this._store.select(function (state) { return state.view; }).subscribe(function (view) {
                    _this._store.dispatch(_this._actions.calculate());
                }));
                // format calendar values on month model change
                this._subs.push(this._store
                    .select(function (state) { return state.monthsModel; })
                    .pipe(operators.filter(function (monthModel) { return !!monthModel; }))
                    .subscribe(function (month) { return _this._store.dispatch(_this._actions.format()); }));
                // flag day values
                this._subs.push(this._store
                    .select(function (state) { return state.formattedMonths; })
                    .pipe(operators.filter(function (month) { return !!month; }))
                    .subscribe(function (month) { return _this._store.dispatch(_this._actions.flag()); }));
                // flag day values
                this._subs.push(this._store
                    .select(function (state) { return state.selectedDate; })
                    .pipe(operators.filter(function (selectedDate) { return !!selectedDate; }))
                    .subscribe(function (selectedDate) { return _this._store.dispatch(_this._actions.flag()); }));
                // flag for date range picker
                this._subs.push(this._store
                    .select(function (state) { return state.selectedRange; })
                    .pipe(operators.filter(function (selectedRange) { return !!selectedRange; }))
                    .subscribe(function (selectedRange) { return _this._store.dispatch(_this._actions.flag()); }));
                // monthsCalendar
                this._subs.push(this._store
                    .select(function (state) { return state.monthsCalendar; })
                    .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
                // years calendar
                this._subs.push(this._store
                    .select(function (state) { return state.yearsCalendarModel; })
                    .pipe(operators.filter(function (state) { return !!state; }))
                    .subscribe(function () { return _this._store.dispatch(_this._actions.flag()); }));
                // on hover
                this._subs.push(this._store
                    .select(function (state) { return state.hoveredDate; })
                    .pipe(operators.filter(function (hoveredDate) { return !!hoveredDate; }))
                    .subscribe(function (hoveredDate) { return _this._store.dispatch(_this._actions.flag()); }));
                // on locale change
                this._subs.push(this._localeService.localeChange
                    .subscribe(function (locale) { return _this._store.dispatch(_this._actions.setLocale(locale)); }));
                return this;
            };
        /**
         * @return {?}
         */
        BsDatepickerEffects.prototype.destroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        BsDatepickerEffects.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerEffects.ctorParameters = function () {
            return [
                { type: BsDatepickerActions, },
                { type: BsLocaleService, },
            ];
        };
        return BsDatepickerEffects;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ defaultMonthOptions = {
        width: 7,
        height: 6
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ _initialView = { date: new Date(), mode: 'day' };
    var /** @type {?} */ initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
        locale: 'en',
        view: _initialView,
        selectedRange: [],
        monthViewOptions: defaultMonthOptions
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} date
     * @param {?} options
     * @return {?}
     */
    function getStartingDayOfCalendar(date, options) {
        if (chronos.isFirstDayOfWeek(date, options.firstDayOfWeek)) {
            return date;
        }
        var /** @type {?} */ weekDay = chronos.getDay(date);
        var /** @type {?} */ offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
        return chronos.shiftDate(date, { day: -offset });
    }
    /**
     * @param {?} weekday
     * @param {?} startingDayOffset
     * @return {?}
     */
    function calculateDateOffset(weekday, startingDayOffset) {
        if (startingDayOffset === 0) {
            return weekday;
        }
        var /** @type {?} */ offset = weekday - startingDayOffset % 7;
        return offset < 0 ? offset + 7 : offset;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function isMonthDisabled(date, min, max) {
        var /** @type {?} */ minBound = min && chronos.isBefore(chronos.endOf(date, 'month'), min, 'day');
        var /** @type {?} */ maxBound = max && chronos.isAfter(chronos.startOf(date, 'month'), max, 'day');
        return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function isYearDisabled(date, min, max) {
        var /** @type {?} */ minBound = min && chronos.isBefore(chronos.endOf(date, 'year'), min, 'day');
        var /** @type {?} */ maxBound = max && chronos.isAfter(chronos.startOf(date, 'year'), max, 'day');
        return minBound || maxBound;
    }
    /**
     * @param {?} date
     * @param {?} datesDisabled
     * @return {?}
     */
    function isDisabledDate(date, datesDisabled) {
        if (datesDisabled === undefined || !datesDisabled || !datesDisabled.length) {
            return false;
        }
        return datesDisabled.some(function (dateDisabled) { return chronos.isSame(date, dateDisabled, 'date'); });
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @template T
     * @param {?} options
     * @param {?} fn
     * @return {?}
     */
    function createMatrix(options, fn) {
        var /** @type {?} */ prevValue = options.initialDate;
        var /** @type {?} */ matrix = new Array(options.height);
        for (var /** @type {?} */ i = 0; i < options.height; i++) {
            matrix[i] = new Array(options.width);
            for (var /** @type {?} */ j = 0; j < options.width; j++) {
                matrix[i][j] = fn(prevValue);
                prevValue = chronos.shiftDate(prevValue, options.shift);
            }
        }
        return matrix;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} startingDate
     * @param {?} options
     * @return {?}
     */
    function calcDaysCalendar(startingDate, options) {
        var /** @type {?} */ firstDay = chronos.getFirstDayOfMonth(startingDate);
        var /** @type {?} */ initialDate = getStartingDayOfCalendar(firstDay, options);
        var /** @type {?} */ matrixOptions = {
            width: options.width,
            height: options.height,
            initialDate: initialDate,
            shift: { day: 1 }
        };
        var /** @type {?} */ daysMatrix = createMatrix(matrixOptions, function (date) { return date; });
        return {
            daysMatrix: daysMatrix,
            month: firstDay
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} daysCalendar
     * @param {?} formatOptions
     * @param {?} monthIndex
     * @return {?}
     */
    function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
        return {
            month: daysCalendar.month,
            monthTitle: chronos.formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
            yearTitle: chronos.formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
            weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
            weekdays: getShiftedWeekdays(formatOptions.locale),
            weeks: daysCalendar.daysMatrix.map(function (week, weekIndex) {
                return ({
                    days: week.map(function (date, dayIndex) {
                        return ({
                            date: date,
                            label: chronos.formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                            monthIndex: monthIndex,
                            weekIndex: weekIndex,
                            dayIndex: dayIndex
                        });
                    })
                });
            })
        };
    }
    /**
     * @param {?} daysMatrix
     * @param {?} format
     * @param {?} locale
     * @return {?}
     */
    function getWeekNumbers(daysMatrix, format, locale) {
        return daysMatrix.map(function (days) { return (days[0] ? chronos.formatDate(days[0], format, locale) : ''); });
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    function getShiftedWeekdays(locale) {
        var /** @type {?} */ _locale = chronos.getLocale(locale);
        var /** @type {?} */ weekdays = (_locale.weekdaysShort());
        var /** @type {?} */ firstDayOfWeek = _locale.firstDayOfWeek();
        return __spread(weekdays.slice(firstDayOfWeek), weekdays.slice(0, firstDayOfWeek));
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} formattedMonth
     * @param {?} options
     * @return {?}
     */
    function flagDaysCalendar(formattedMonth, options) {
        formattedMonth.weeks.forEach(function (week) {
            /* tslint:disable-next-line: cyclomatic-complexity */
            week.days.forEach(function (day, dayIndex) {
                // datepicker
                var /** @type {?} */ isOtherMonth = !chronos.isSameMonth(day.date, formattedMonth.month);
                var /** @type {?} */ isHovered = !isOtherMonth && chronos.isSameDay(day.date, options.hoveredDate);
                // date range picker
                var /** @type {?} */ isSelectionStart = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[0]);
                var /** @type {?} */ isSelectionEnd = !isOtherMonth &&
                    options.selectedRange &&
                    chronos.isSameDay(day.date, options.selectedRange[1]);
                var /** @type {?} */ isSelected = (!isOtherMonth && chronos.isSameDay(day.date, options.selectedDate)) ||
                    isSelectionStart ||
                    isSelectionEnd;
                var /** @type {?} */ isInRange = !isOtherMonth &&
                    options.selectedRange &&
                    isDateInRange(day.date, options.selectedRange, options.hoveredDate);
                var /** @type {?} */ isDisabled = options.isDisabled ||
                    chronos.isBefore(day.date, options.minDate, 'day') ||
                    chronos.isAfter(day.date, options.maxDate, 'day') ||
                    chronos.isDisabledDay(day.date, options.daysDisabled) ||
                    isDisabledDate(day.date, options.datesDisabled);
                var /** @type {?} */ currentDate = new Date();
                var /** @type {?} */ isToday = !isOtherMonth && chronos.isSameDay(day.date, currentDate);
                // decide update or not
                var /** @type {?} */ newDay = Object.assign({}, day, {
                    isOtherMonth: isOtherMonth,
                    isHovered: isHovered,
                    isSelected: isSelected,
                    isSelectionStart: isSelectionStart,
                    isSelectionEnd: isSelectionEnd,
                    isInRange: isInRange,
                    isDisabled: isDisabled,
                    isToday: isToday
                });
                if (day.isOtherMonth !== newDay.isOtherMonth ||
                    day.isHovered !== newDay.isHovered ||
                    day.isSelected !== newDay.isSelected ||
                    day.isSelectionStart !== newDay.isSelectionStart ||
                    day.isSelectionEnd !== newDay.isSelectionEnd ||
                    day.isDisabled !== newDay.isDisabled ||
                    day.isInRange !== newDay.isInRange) {
                    week.days[dayIndex] = newDay;
                }
            });
        });
        // todo: add check for linked calendars
        formattedMonth.hideLeftArrow =
            options.isDisabled ||
                (options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
        formattedMonth.hideRightArrow =
            options.isDisabled ||
                (options.monthIndex < options.displayMonths &&
                    options.monthIndex + 1 !== options.displayMonths);
        formattedMonth.disableLeftArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
        formattedMonth.disableRightArrow = isMonthDisabled(chronos.shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
        return formattedMonth;
    }
    /**
     * @param {?} date
     * @param {?} selectedRange
     * @param {?} hoveredDate
     * @return {?}
     */
    function isDateInRange(date, selectedRange, hoveredDate) {
        if (!date || !selectedRange[0]) {
            return false;
        }
        if (selectedRange[1]) {
            return date > selectedRange[0] && date <= selectedRange[1];
        }
        if (hoveredDate) {
            return date > selectedRange[0] && date <= hoveredDate;
        }
        return false;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} mode
     * @param {?=} minMode
     * @return {?}
     */
    function canSwitchMode(mode, minMode) {
        return minMode ? mode >= minMode : true;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ height = 4;
    var /** @type {?} */ width = 3;
    var /** @type {?} */ shift = { month: 1 };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @return {?}
     */
    function formatMonthsCalendar(viewDate, formatOptions) {
        var /** @type {?} */ initialDate = chronos.startOf(viewDate, 'year');
        var /** @type {?} */ matrixOptions = { width: width, height: height, initialDate: initialDate, shift: shift };
        var /** @type {?} */ monthMatrix = createMatrix(matrixOptions, function (date) {
            return ({
                date: date,
                label: chronos.formatDate(date, formatOptions.monthLabel, formatOptions.locale)
            });
        });
        return {
            months: monthMatrix,
            monthTitle: '',
            yearTitle: chronos.formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale)
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} monthCalendar
     * @param {?} options
     * @return {?}
     */
    function flagMonthsCalendar(monthCalendar, options) {
        monthCalendar.months.forEach(function (months, rowIndex) {
            months.forEach(function (month, monthIndex) {
                var /** @type {?} */ isHovered = chronos.isSameMonth(month.date, options.hoveredMonth);
                var /** @type {?} */ isDisabled = options.isDisabled ||
                    isMonthDisabled(month.date, options.minDate, options.maxDate);
                var /** @type {?} */ newMonth = Object.assign(/*{},*/ month, {
                    isHovered: isHovered,
                    isDisabled: isDisabled
                });
                if (month.isHovered !== newMonth.isHovered ||
                    month.isDisabled !== newMonth.isDisabled) {
                    monthCalendar.months[rowIndex][monthIndex] = newMonth;
                }
            });
        });
        // todo: add check for linked calendars
        monthCalendar.hideLeftArrow =
            options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
        monthCalendar.hideRightArrow =
            options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths;
        monthCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        monthCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
        return monthCalendar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ height$1 = 4;
    var /** @type {?} */ width$1 = 4;
    var /** @type {?} */ yearsPerCalendar = height$1 * width$1;
    var /** @type {?} */ initialShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
    var /** @type {?} */ shift$1 = { year: 1 };
    /**
     * @param {?} viewDate
     * @param {?} formatOptions
     * @return {?}
     */
    function formatYearsCalendar(viewDate, formatOptions) {
        var /** @type {?} */ initialDate = chronos.shiftDate(viewDate, { year: initialShift });
        var /** @type {?} */ matrixOptions = { width: width$1, height: height$1, initialDate: initialDate, shift: shift$1 };
        var /** @type {?} */ yearsMatrix = createMatrix(matrixOptions, function (date) {
            return ({
                date: date,
                label: chronos.formatDate(date, formatOptions.yearLabel, formatOptions.locale)
            });
        });
        var /** @type {?} */ yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
        return {
            years: yearsMatrix,
            monthTitle: '',
            yearTitle: yearTitle
        };
    }
    /**
     * @param {?} yearsMatrix
     * @param {?} formatOptions
     * @return {?}
     */
    function formatYearRangeTitle(yearsMatrix, formatOptions) {
        var /** @type {?} */ from = chronos.formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
        var /** @type {?} */ to = chronos.formatDate(yearsMatrix[height$1 - 1][width$1 - 1].date, formatOptions.yearTitle, formatOptions.locale);
        return from + " - " + to;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?} yearsCalendar
     * @param {?} options
     * @return {?}
     */
    function flagYearsCalendar(yearsCalendar, options) {
        yearsCalendar.years.forEach(function (years, rowIndex) {
            years.forEach(function (year, yearIndex) {
                var /** @type {?} */ isHovered = chronos.isSameYear(year.date, options.hoveredYear);
                var /** @type {?} */ isDisabled = options.isDisabled ||
                    isYearDisabled(year.date, options.minDate, options.maxDate);
                var /** @type {?} */ newMonth = Object.assign(/*{},*/ year, { isHovered: isHovered, isDisabled: isDisabled });
                if (year.isHovered !== newMonth.isHovered ||
                    year.isDisabled !== newMonth.isDisabled) {
                    yearsCalendar.years[rowIndex][yearIndex] = newMonth;
                }
            });
        });
        // todo: add check for linked calendars
        yearsCalendar.hideLeftArrow =
            options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
        yearsCalendar.hideRightArrow =
            options.yearIndex < options.displayMonths &&
                options.yearIndex + 1 !== options.displayMonths;
        yearsCalendar.disableLeftArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
        var /** @type {?} */ i = yearsCalendar.years.length - 1;
        var /** @type {?} */ j = yearsCalendar.years[i].length - 1;
        yearsCalendar.disableRightArrow = isYearDisabled(chronos.shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
        return yearsCalendar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    function bsDatepickerReducer(state, action) {
        if (state === void 0) {
            state = initialDatepickerState;
        }
        switch (action.type) {
            case BsDatepickerActions.CALCULATE: {
                return calculateReducer(state);
            }
            case BsDatepickerActions.FORMAT: {
                return formatReducer(state, action);
            }
            case BsDatepickerActions.FLAG: {
                return flagReducer(state, action);
            }
            case BsDatepickerActions.NAVIGATE_OFFSET: {
                var /** @type {?} */ date = chronos.shiftDate(chronos.startOf(state.view.date, 'month'), action.payload);
                var /** @type {?} */ newState = {
                    view: {
                        mode: state.view.mode,
                        date: date
                    }
                };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.NAVIGATE_TO: {
                var /** @type {?} */ payload = action.payload;
                var /** @type {?} */ date = chronos.setFullDate(state.view.date, payload.unit);
                var /** @type {?} */ newState = void 0;
                var /** @type {?} */ mode = void 0;
                if (canSwitchMode(payload.viewMode, state.minMode)) {
                    mode = payload.viewMode;
                    newState = { view: { date: date, mode: mode } };
                }
                else {
                    mode = state.view.mode;
                    newState = { selectedDate: date, view: { date: date, mode: mode } };
                }
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.CHANGE_VIEWMODE: {
                if (!canSwitchMode(action.payload, state.minMode)) {
                    return state;
                }
                var /** @type {?} */ date = state.view.date;
                var /** @type {?} */ mode = action.payload;
                var /** @type {?} */ newState = { view: { date: date, mode: mode } };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.HOVER: {
                return Object.assign({}, state, { hoveredDate: action.payload });
            }
            case BsDatepickerActions.SELECT: {
                var /** @type {?} */ newState = {
                    selectedDate: action.payload,
                    view: state.view
                };
                var /** @type {?} */ mode = state.view.mode;
                var /** @type {?} */ _date = action.payload || state.view.date;
                var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_OPTIONS: {
                var /** @type {?} */ newState = action.payload;
                // preserve view mode
                var /** @type {?} */ mode = newState.minMode ? newState.minMode : state.view.mode;
                var /** @type {?} */ _viewDate = chronos.isDateValid(newState.value) && newState.value
                    || chronos.isArray(newState.value) && chronos.isDateValid(newState.value[0]) && newState.value[0]
                    || state.view.date;
                var /** @type {?} */ date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
                newState.view = { mode: mode, date: date };
                // update selected value
                if (newState.value) {
                    // if new value is array we work with date range
                    if (chronos.isArray(newState.value)) {
                        newState.selectedRange = newState.value;
                    }
                    // if new value is a date -> datepicker
                    if (newState.value instanceof Date) {
                        newState.selectedDate = newState.value;
                    }
                    // provided value is not supported :)
                    // need to report it somehow
                }
                return Object.assign({}, state, newState);
            }
            // date range picker
            case BsDatepickerActions.SELECT_RANGE: {
                var /** @type {?} */ newState = {
                    selectedRange: action.payload,
                    view: state.view
                };
                var /** @type {?} */ mode = state.view.mode;
                var /** @type {?} */ _date = action.payload && action.payload[0] || state.view.date;
                var /** @type {?} */ date = getViewDate(_date, state.minDate, state.maxDate);
                newState.view = { mode: mode, date: date };
                return Object.assign({}, state, newState);
            }
            case BsDatepickerActions.SET_MIN_DATE: {
                return Object.assign({}, state, {
                    minDate: action.payload
                });
            }
            case BsDatepickerActions.SET_MAX_DATE: {
                return Object.assign({}, state, {
                    maxDate: action.payload
                });
            }
            case BsDatepickerActions.SET_IS_DISABLED: {
                return Object.assign({}, state, {
                    isDisabled: action.payload
                });
            }
            default:
                return state;
        }
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function calculateReducer(state) {
        // how many calendars
        var /** @type {?} */ displayMonths = state.displayMonths;
        // use selected date on initial rendering if set
        var /** @type {?} */ viewDate = state.view.date;
        if (state.view.mode === 'day') {
            state.monthViewOptions.firstDayOfWeek = chronos.getLocale(state.locale).firstDayOfWeek();
            var /** @type {?} */ monthsModel = new Array(displayMonths);
            for (var /** @type {?} */ monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
                viewDate = chronos.shiftDate(viewDate, { month: 1 });
            }
            return Object.assign({}, state, { monthsModel: monthsModel });
        }
        if (state.view.mode === 'month') {
            var /** @type {?} */ monthsCalendar = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: yearsPerCalendar });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function formatReducer(state, action) {
        if (state.view.mode === 'day') {
            var /** @type {?} */ formattedMonths = state.monthsModel.map(function (month, monthIndex) {
                return formatDaysCalendar(month, getFormatOptions(state), monthIndex);
            });
            return Object.assign({}, state, { formattedMonths: formattedMonths });
        }
        // how many calendars
        var /** @type {?} */ displayMonths = state.displayMonths;
        // check initial rendering
        // use selected date on initial rendering if set
        var /** @type {?} */ viewDate = state.view.date;
        if (state.view.mode === 'month') {
            var /** @type {?} */ monthsCalendar = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 1 });
            }
            return Object.assign({}, state, { monthsCalendar: monthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarModel = new Array(displayMonths);
            for (var /** @type {?} */ calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
                // todo: for unlinked calendars it will be harder
                yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
                viewDate = chronos.shiftDate(viewDate, { year: 16 });
            }
            return Object.assign({}, state, { yearsCalendarModel: yearsCalendarModel });
        }
        return state;
    }
    /**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function flagReducer(state, action) {
        if (state.view.mode === 'day') {
            var /** @type {?} */ flaggedMonths = state.formattedMonths.map(function (formattedMonth, monthIndex) {
                return flagDaysCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    daysDisabled: state.daysDisabled,
                    datesDisabled: state.datesDisabled,
                    hoveredDate: state.hoveredDate,
                    selectedDate: state.selectedDate,
                    selectedRange: state.selectedRange,
                    displayMonths: state.displayMonths,
                    monthIndex: monthIndex
                });
            });
            return Object.assign({}, state, { flaggedMonths: flaggedMonths });
        }
        if (state.view.mode === 'month') {
            var /** @type {?} */ flaggedMonthsCalendar = state.monthsCalendar.map(function (formattedMonth, monthIndex) {
                return flagMonthsCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    hoveredMonth: state.hoveredMonth,
                    displayMonths: state.displayMonths,
                    monthIndex: monthIndex
                });
            });
            return Object.assign({}, state, { flaggedMonthsCalendar: flaggedMonthsCalendar });
        }
        if (state.view.mode === 'year') {
            var /** @type {?} */ yearsCalendarFlagged = state.yearsCalendarModel.map(function (formattedMonth, yearIndex) {
                return flagYearsCalendar(formattedMonth, {
                    isDisabled: state.isDisabled,
                    minDate: state.minDate,
                    maxDate: state.maxDate,
                    hoveredYear: state.hoveredYear,
                    displayMonths: state.displayMonths,
                    yearIndex: yearIndex
                });
            });
            return Object.assign({}, state, { yearsCalendarFlagged: yearsCalendarFlagged });
        }
        return state;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    function getFormatOptions(state) {
        return {
            locale: state.locale,
            monthTitle: state.monthTitle,
            yearTitle: state.yearTitle,
            dayLabel: state.dayLabel,
            monthLabel: state.monthLabel,
            yearLabel: state.yearLabel,
            weekNumbers: state.weekNumbers
        };
    }
    /**
     * if view date is provided (bsValue|ngModel) it should be shown
     * if view date is not provider:
     * if minDate>currentDate (default view value), show minDate
     * if maxDate<currentDate(default view value) show maxDate
     * @param {?} viewDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */
    function getViewDate(viewDate, minDate, maxDate) {
        var /** @type {?} */ _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
        if (minDate && chronos.isAfter(minDate, _date, 'day')) {
            return minDate;
        }
        if (maxDate && chronos.isBefore(maxDate, _date, 'day')) {
            return maxDate;
        }
        return _date;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerStore = (function (_super) {
        __extends(BsDatepickerStore, _super);
        function BsDatepickerStore() {
            var _this = this;
            var /** @type {?} */ _dispatcher = new rxjs.BehaviorSubject({
                type: '[datepicker] dispatcher init'
            });
            var /** @type {?} */ state = new miniNgrx.MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
            _this = _super.call(this, _dispatcher, bsDatepickerReducer, state) || this;
            return _this;
        }
        BsDatepickerStore.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        BsDatepickerStore.ctorParameters = function () { return []; };
        return BsDatepickerStore;
    }(miniNgrx.MiniStore));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerContainerComponent = (function (_super) {
        __extends(BsDatepickerContainerComponent, _super);
        function BsDatepickerContainerComponent(_config, _store, _actions, _effects, _positionService) {
            var _this = _super.call(this) || this;
            _this._config = _config;
            _this._store = _store;
            _this._actions = _actions;
            _this._positionService = _positionService;
            _this.valueChange = new core.EventEmitter();
            _this._subs = [];
            _this._effects = _effects;
            return _this;
        }
        Object.defineProperty(BsDatepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setValue(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._positionService.setOptions({
                    modifiers: {
                        flip: {
                            enabled: this._config.adaptivePosition
                        }
                    }
                });
                this.isOtherMonthsActive = this._config.selectFromOtherMonth;
                this.containerClass = this._config.containerClass;
                this._effects
                    .init(this._store)
                    .setOptions(this._config)
                    .setBindings(this)
                    .setEventHandlers(this)
                    .registerDatepickerSideEffects();
                // todo: move it somewhere else
                // on selected date change
                this._subs.push(this._store
                    .select(function (state) { return state.selectedDate; })
                    .subscribe(function (date) { return _this.valueChange.emit(date); }));
            };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                var /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
                if (isDisabled) {
                    return;
                }
                this._store.dispatch(this._actions.select(day.date));
            };
        /**
         * @return {?}
         */
        BsDatepickerContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._effects.destroy();
                var e_1, _c;
            };
        BsDatepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\">\r\n\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\r\n        <bs-days-calendar-view\r\n          *ngFor=\"let calendar of (daysCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          [options]=\"options | async\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"dayHoverHandler($event)\"\r\n          (onHoverWeek)=\"weekHoverHandler($event)\"\r\n          (onSelect)=\"daySelectHandler($event)\"\r\n        ></bs-days-calendar-view>\r\n      </div>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\"\r\n        ></bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\r\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\r\n        [calendar]=\"calendar\"\r\n        (onNavigate)=\"navigateTo($event)\"\r\n        (onViewMode)=\"setViewMode($event)\"\r\n        (onHover)=\"yearHoverHandler($event)\"\r\n        (onSelect)=\"yearSelectHandler($event)\"\r\n      ></bs-years-calendar-view>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\">Apply</button>\r\n      <button class=\"btn btn-default\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\r\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\r\n  </div>\r\n</div>\r\n",
                        host: {
                            '(click)': '_stopPropagation($event)',
                            style: 'position: absolute; display: block;',
                            role: 'dialog',
                            'aria-label': 'calendar'
                        }
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerEffects, },
                { type: positioning.PositioningService, },
            ];
        };
        return BsDatepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerDirective = (function () {
        function BsDatepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            /**
             * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close datepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the datepicker should be appended to.
             * Currently only supports "body".
             */
            this.container = 'body';
            this.outsideEsc = true;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
        }
        Object.defineProperty(BsDatepickerDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the datepicker is currently being shown
             * @return {?}
             */ function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDatepickerDirective.prototype, "bsValue", {
            set: /**
             * Initial value of datepicker
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._datepicker.listen({
                    outsideClick: this.outsideClick,
                    outsideEsc: this.outsideEsc,
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                this.setConfig();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this._datepickerRef || !this._datepickerRef.instance) {
                    return;
                }
                if (changes["minDate"]) {
                    this._datepickerRef.instance.minDate = this.minDate;
                }
                if (changes["maxDate"]) {
                    this._datepickerRef.instance.maxDate = this.maxDate;
                }
                if (changes["daysDisabled"]) {
                    this._datepickerRef.instance.daysDisabled = this.daysDisabled;
                }
                if (changes["datesDisabled"]) {
                    this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                }
                if (changes["isDisabled"]) {
                    this._datepickerRef.instance.isDisabled = this.isDisabled;
                }
            };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.show = /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._datepicker.isShown) {
                    return;
                }
                this.setConfig();
                this._datepickerRef = this._datepicker
                    .provide({ provide: BsDatepickerConfig, useValue: this._config })
                    .attach(BsDatepickerContainerComponent)
                    .to(this.container)
                    .position({ attachment: this.placement })
                    .show({ placement: this.placement });
                // if date changes from external source (model -> view)
                this._subs.push(this.bsValueChange.subscribe(function (value) {
                    _this._datepickerRef.instance.value = value;
                }));
                // if date changes from picker (view -> model)
                this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.hide = /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this._datepicker.hide();
                }
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        BsDatepickerDirective.prototype.toggle = /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * Set config for datepicker
         */
        /**
         * Set config for datepicker
         * @return {?}
         */
        BsDatepickerDirective.prototype.setConfig = /**
         * Set config for datepicker
         * @return {?}
         */
            function () {
                this._config = Object.assign({}, this._config, this.bsConfig, {
                    value: this._bsValue,
                    isDisabled: this.isDisabled,
                    minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                    maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                    daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
                    datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
                    minMode: this.minMode || this.bsConfig && this.bsConfig.minMode
                });
            };
        /**
         * @return {?}
         */
        BsDatepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._datepicker.dispose();
            };
        BsDatepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDatepicker]',
                        exportAs: 'bsDatepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDatepickerDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "outsideEsc": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "daysDisabled": [{ type: core.Input },],
            "datesDisabled": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDatepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerInlineConfig = (function (_super) {
        __extends(BsDatepickerInlineConfig, _super);
        function BsDatepickerInlineConfig() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BsDatepickerInlineConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDatepickerInlineConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerInlineContainerComponent = (function (_super) {
        __extends(BsDatepickerInlineContainerComponent, _super);
        function BsDatepickerInlineContainerComponent(_config, _store, _actions, _effects, _positioningService) {
            return _super.call(this, _config, _store, _actions, _effects, _positioningService) || this;
        }
        BsDatepickerInlineContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-inline-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\">\r\n\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\r\n        <bs-days-calendar-view\r\n          *ngFor=\"let calendar of (daysCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          [options]=\"options | async\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"dayHoverHandler($event)\"\r\n          (onHoverWeek)=\"weekHoverHandler($event)\"\r\n          (onSelect)=\"daySelectHandler($event)\"\r\n        ></bs-days-calendar-view>\r\n      </div>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\"\r\n        ></bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\r\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\r\n        [calendar]=\"calendar\"\r\n        (onNavigate)=\"navigateTo($event)\"\r\n        (onViewMode)=\"setViewMode($event)\"\r\n        (onHover)=\"yearHoverHandler($event)\"\r\n        (onSelect)=\"yearSelectHandler($event)\"\r\n      ></bs-years-calendar-view>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\">Apply</button>\r\n      <button class=\"btn btn-default\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\r\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\r\n  </div>\r\n</div>\r\n",
                        host: {
                            '(click)': '_stopPropagation($event)',
                            style: 'display: inline-block;'
                        }
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerInlineContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerEffects, },
                { type: positioning.PositioningService, },
            ];
        };
        return BsDatepickerInlineContainerComponent;
    }(BsDatepickerContainerComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerInlineDirective = (function () {
        function BsDatepickerInlineDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            this._elementRef = _elementRef;
            /**
             * Emits when datepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            // todo: assign only subset of fields
            Object.assign(this, this._config);
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        }
        Object.defineProperty(BsDatepickerInlineDirective.prototype, "bsValue", {
            set: /**
             * Initial value of datepicker
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.setConfig();
                this._datepickerRef = this._datepicker
                    .provide({ provide: BsDatepickerConfig, useValue: this._config })
                    .attach(BsDatepickerInlineContainerComponent)
                    .to(this._elementRef)
                    .show();
                // if date changes from external source (model -> view)
                this._subs.push(this.bsValueChange.subscribe(function (value) {
                    _this._datepickerRef.instance.value = value;
                }));
                // if date changes from picker (view -> model)
                this._subs.push(this._datepickerRef.instance.valueChange.subscribe(function (value) {
                    _this.bsValue = value;
                }));
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this._datepickerRef || !this._datepickerRef.instance) {
                    return;
                }
                if (changes["minDate"]) {
                    this._datepickerRef.instance.minDate = this.minDate;
                }
                if (changes["maxDate"]) {
                    this._datepickerRef.instance.maxDate = this.maxDate;
                }
                if (changes["datesDisabled"]) {
                    this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                }
                if (changes["isDisabled"]) {
                    this._datepickerRef.instance.isDisabled = this.isDisabled;
                }
            };
        /**
         * Set config for datepicker
         */
        /**
         * Set config for datepicker
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.setConfig = /**
         * Set config for datepicker
         * @return {?}
         */
            function () {
                this._config = Object.assign({}, this._config, this.bsConfig, {
                    value: this._bsValue,
                    isDisabled: this.isDisabled,
                    minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                    maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                    datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
                });
            };
        /**
         * @return {?}
         */
        BsDatepickerInlineDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._datepicker.dispose();
            };
        BsDatepickerInlineDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'bs-datepicker-inline',
                        exportAs: 'bsDatepickerInline'
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerInlineDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerInlineConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDatepickerInlineDirective.propDecorators = {
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "datesDisabled": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDatepickerInlineDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BS_DATEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var /** @type {?} */ BS_DATEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDatepickerInputDirective; }),
        multi: true
    };
    var BsDatepickerInputDirective = (function () {
        function BsDatepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            var _this = this;
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            // update input value on datepicker value update
            this._picker.bsValueChange.subscribe(function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            });
            // update input value on locale change
            this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            });
        }
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerInputDirective.prototype._setInputValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var /** @type {?} */ initialDate = !value ? ''
                    : chronos.formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
                this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /* tslint:disable-next-line: no-any*/
                this.writeValue(((event.target)).value);
                this._onChange(this._value);
                this._onTouched();
            };
        /**
         * @param {?} c
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                var /** @type {?} */ _value = c.value;
                /* tslint:disable-next-line: prefer-switch */
                if (_value === null || _value === undefined || _value === '') {
                    return null;
                }
                if (chronos.isDate(_value)) {
                    var /** @type {?} */ _isDateValid = chronos.isDateValid(_value);
                    if (!_isDateValid) {
                        return { bsDate: { invalid: _value } };
                    }
                    if (this._picker && this._picker.minDate && chronos.isBefore(_value, this._picker.minDate, 'date')) {
                        return { bsDate: { minDate: this._picker.minDate } };
                    }
                    if (this._picker && this._picker.maxDate && chronos.isAfter(_value, this._picker.maxDate, 'date')) {
                        return { bsDate: { maxDate: this._picker.maxDate } };
                    }
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._validatorChange = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!value) {
                    this._value = null;
                }
                else {
                    var /** @type {?} */ _localeKey = this._localeService.currentLocale;
                    var /** @type {?} */ _locale = chronos.getLocale(_localeKey);
                    if (!_locale) {
                        throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                    }
                    this._value = chronos.parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
                }
                this._picker.bsValue = this._value;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this._picker.isDisabled = isDisabled;
                if (isDisabled) {
                    this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                    return;
                }
                this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this._onTouched();
            };
        /**
         * @return {?}
         */
        BsDatepickerInputDirective.prototype.hide = /**
         * @return {?}
         */
            function () {
                this._picker.hide();
                this._renderer.selectRootElement(this._elRef.nativeElement).blur();
            };
        BsDatepickerInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[bsDatepicker]",
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
                    },] }
        ];
        /** @nocollapse */
        BsDatepickerInputDirective.ctorParameters = function () {
            return [
                { type: BsDatepickerDirective, decorators: [{ type: core.Host },] },
                { type: BsLocaleService, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return BsDatepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerConfig = (function (_super) {
        __extends(BsDaterangepickerConfig, _super);
        function BsDaterangepickerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // DatepickerRenderOptions
            _this.displayMonths = 2;
            return _this;
        }
        BsDaterangepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return BsDaterangepickerConfig;
    }(BsDatepickerConfig));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerContainerComponent = (function (_super) {
        __extends(BsDaterangepickerContainerComponent, _super);
        function BsDaterangepickerContainerComponent(_effects, _actions, _config, _store, _positionService) {
            var _this = _super.call(this) || this;
            _this._actions = _actions;
            _this._config = _config;
            _this._store = _store;
            _this._positionService = _positionService;
            _this.valueChange = new core.EventEmitter();
            _this._rangeStack = [];
            _this._subs = [];
            _this._effects = _effects;
            return _this;
        }
        Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._effects.setRangeValue(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._positionService.setOptions({
                    modifiers: {
                        flip: {
                            enabled: this._config.adaptivePosition
                        }
                    }
                });
                this.containerClass = this._config.containerClass;
                this.isOtherMonthsActive = this._config.selectFromOtherMonth;
                this._effects
                    .init(this._store)
                    .setOptions(this._config)
                    .setBindings(this)
                    .setEventHandlers(this)
                    .registerDatepickerSideEffects();
                // todo: move it somewhere else
                // on selected date change
                this._subs.push(this._store
                    .select(function (state) { return state.selectedRange; })
                    .subscribe(function (date) { return _this.valueChange.emit(date); }));
            };
        /**
         * @param {?} day
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.daySelectHandler = /**
         * @param {?} day
         * @return {?}
         */
            function (day) {
                var /** @type {?} */ isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
                if (isDisabled) {
                    return;
                }
                // if only one date is already selected
                // and user clicks on previous date
                // start selection from new date
                // but if new date is after initial one
                // than finish selection
                if (this._rangeStack.length === 1) {
                    this._rangeStack =
                        day.date >= this._rangeStack[0]
                            ? [this._rangeStack[0], day.date]
                            : [day.date];
                }
                if (this._rangeStack.length === 0) {
                    this._rangeStack = [day.date];
                }
                this._store.dispatch(this._actions.selectRange(this._rangeStack));
                if (this._rangeStack.length === 2) {
                    this._rangeStack = [];
                }
            };
        /**
         * @return {?}
         */
        BsDaterangepickerContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                this._effects.destroy();
                var e_1, _c;
            };
        BsDaterangepickerContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-daterangepicker-container',
                        providers: [BsDatepickerStore, BsDatepickerEffects],
                        template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\">\r\n\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <div *ngSwitchCase=\"'day'\" class=\"bs-media-container\">\r\n        <bs-days-calendar-view\r\n          *ngFor=\"let calendar of (daysCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          [options]=\"options | async\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"dayHoverHandler($event)\"\r\n          (onHoverWeek)=\"weekHoverHandler($event)\"\r\n          (onSelect)=\"daySelectHandler($event)\"\r\n        ></bs-days-calendar-view>\r\n      </div>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of (monthsCalendar | async)\"\r\n          [class.bs-datepicker-multiple]=\"(daysCalendar | async)?.length > 1\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\"\r\n        ></bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n        *ngFor=\"let calendar of (yearsCalendar | async)\"\r\n        [class.bs-datepicker-multiple]=\"(daysCalendar | async )?.length > 1\"\r\n        [calendar]=\"calendar\"\r\n        (onNavigate)=\"navigateTo($event)\"\r\n        (onViewMode)=\"setViewMode($event)\"\r\n        (onHover)=\"yearHoverHandler($event)\"\r\n        (onSelect)=\"yearSelectHandler($event)\"\r\n      ></bs-years-calendar-view>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\">Apply</button>\r\n      <button class=\"btn btn-default\">Cancel</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"false\">\r\n    <bs-custom-date-view [ranges]=\"_customRangesFish\"></bs-custom-date-view>\r\n  </div>\r\n</div>\r\n",
                        host: {
                            '(click)': '_stopPropagation($event)',
                            style: 'position: absolute; display: block;',
                            role: 'dialog',
                            'aria-label': 'calendar'
                        }
                    }] }
        ];
        /** @nocollapse */
        BsDaterangepickerContainerComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerEffects, },
                { type: BsDatepickerActions, },
                { type: BsDatepickerConfig, },
                { type: BsDatepickerStore, },
                { type: positioning.PositioningService, },
            ];
        };
        return BsDaterangepickerContainerComponent;
    }(BsDatepickerAbstractComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaterangepickerDirective = (function () {
        function BsDaterangepickerDirective(_config, _elementRef, _renderer, _viewContainerRef, cis) {
            this._config = _config;
            /**
             * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
             */
            this.placement = 'bottom';
            /**
             * Specifies events that should trigger. Supports a space separated list of
             * event names.
             */
            this.triggers = 'click';
            /**
             * Close daterangepicker on outside click
             */
            this.outsideClick = true;
            /**
             * A selector specifying the element the daterangepicker should be appended
             * to. Currently only supports "body".
             */
            this.container = 'body';
            this.outsideEsc = true;
            /**
             * Emits when daterangepicker value has been changed
             */
            this.bsValueChange = new core.EventEmitter();
            this._subs = [];
            this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
            Object.assign(this, _config);
            this.onShown = this._datepicker.onShown;
            this.onHidden = this._datepicker.onHidden;
        }
        Object.defineProperty(BsDaterangepickerDirective.prototype, "isOpen", {
            get: /**
             * Returns whether or not the daterangepicker is currently being shown
             * @return {?}
             */ function () {
                return this._datepicker.isShown;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BsDaterangepickerDirective.prototype, "bsValue", {
            set: /**
             * Initial value of daterangepicker
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (this._bsValue === value) {
                    return;
                }
                this._bsValue = value;
                this.bsValueChange.emit(value);
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this._datepicker.listen({
                    outsideClick: this.outsideClick,
                    outsideEsc: this.outsideEsc,
                    triggers: this.triggers,
                    show: function () { return _this.show(); }
                });
                this.setConfig();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (!this._datepickerRef || !this._datepickerRef.instance) {
                    return;
                }
                if (changes["minDate"]) {
                    this._datepickerRef.instance.minDate = this.minDate;
                }
                if (changes["maxDate"]) {
                    this._datepickerRef.instance.maxDate = this.maxDate;
                }
                if (changes["datesDisabled"]) {
                    this._datepickerRef.instance.datesDisabled = this.datesDisabled;
                }
                if (changes["isDisabled"]) {
                    this._datepickerRef.instance.isDisabled = this.isDisabled;
                }
            };
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.show = /**
         * Opens an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                var _this = this;
                if (this._datepicker.isShown) {
                    return;
                }
                this.setConfig();
                this._datepickerRef = this._datepicker
                    .provide({ provide: BsDatepickerConfig, useValue: this._config })
                    .attach(BsDaterangepickerContainerComponent)
                    .to(this.container)
                    .position({ attachment: this.placement })
                    .show({ placement: this.placement });
                // if date changes from external source (model -> view)
                this._subs.push(this.bsValueChange.subscribe(function (value) {
                    _this._datepickerRef.instance.value = value;
                }));
                // if date changes from picker (view -> model)
                this._subs.push(this._datepickerRef.instance.valueChange
                    .pipe(operators.filter(function (range) { return range && range[0] && !!range[1]; }))
                    .subscribe(function (value) {
                    _this.bsValue = value;
                    _this.hide();
                }));
            };
        /**
         * Set config for daterangepicker
         */
        /**
         * Set config for daterangepicker
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.setConfig = /**
         * Set config for daterangepicker
         * @return {?}
         */
            function () {
                this._config = Object.assign({}, this._config, this.bsConfig, {
                    value: this._bsValue,
                    isDisabled: this.isDisabled,
                    minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
                    maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
                    datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled
                });
            };
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         */
        /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.hide = /**
         * Closes an element’s datepicker. This is considered a “manual” triggering of
         * the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    this._datepicker.hide();
                }
                try {
                    for (var _a = __values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        var sub = _b.value;
                        sub.unsubscribe();
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return))
                            _c.call(_a);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                var e_1, _c;
            };
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         */
        /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.toggle = /**
         * Toggles an element’s datepicker. This is considered a “manual” triggering
         * of the datepicker.
         * @return {?}
         */
            function () {
                if (this.isOpen) {
                    return this.hide();
                }
                this.show();
            };
        /**
         * @return {?}
         */
        BsDaterangepickerDirective.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._datepicker.dispose();
            };
        BsDaterangepickerDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: '[bsDaterangepicker]',
                        exportAs: 'bsDaterangepicker'
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerDirective.ctorParameters = function () {
            return [
                { type: BsDaterangepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
                { type: core.ViewContainerRef, },
                { type: componentLoader.ComponentLoaderFactory, },
            ];
        };
        BsDaterangepickerDirective.propDecorators = {
            "placement": [{ type: core.Input },],
            "triggers": [{ type: core.Input },],
            "outsideClick": [{ type: core.Input },],
            "container": [{ type: core.Input },],
            "outsideEsc": [{ type: core.Input },],
            "isOpen": [{ type: core.Input },],
            "onShown": [{ type: core.Output },],
            "onHidden": [{ type: core.Output },],
            "bsValue": [{ type: core.Input },],
            "bsConfig": [{ type: core.Input },],
            "isDisabled": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "datesDisabled": [{ type: core.Input },],
            "bsValueChange": [{ type: core.Output },],
        };
        return BsDaterangepickerDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ BS_DATERANGEPICKER_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var /** @type {?} */ BS_DATERANGEPICKER_VALIDATOR = {
        provide: forms.NG_VALIDATORS,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return BsDaterangepickerInputDirective; }),
        multi: true
    };
    var BsDaterangepickerInputDirective = (function () {
        function BsDaterangepickerInputDirective(_picker, _localeService, _renderer, _elRef, changeDetection) {
            var _this = this;
            this._picker = _picker;
            this._localeService = _localeService;
            this._renderer = _renderer;
            this._elRef = _elRef;
            this.changeDetection = changeDetection;
            this._onChange = Function.prototype;
            this._onTouched = Function.prototype;
            this._validatorChange = Function.prototype;
            // update input value on datepicker value update
            this._picker.bsValueChange.subscribe(function (value) {
                _this._setInputValue(value);
                if (_this._value !== value) {
                    _this._value = value;
                    _this._onChange(value);
                    _this._onTouched();
                }
                _this.changeDetection.markForCheck();
            });
            // update input value on locale change
            this._localeService.localeChange.subscribe(function () {
                _this._setInputValue(_this._value);
            });
        }
        /**
         * @param {?} date
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype._setInputValue = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var /** @type {?} */ range = '';
                if (date) {
                    var /** @type {?} */ start = !date[0] ? ''
                        : chronos.formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                    var /** @type {?} */ end = !date[1] ? ''
                        : chronos.formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
                    range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
                }
                this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.onChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                /* tslint:disable-next-line: no-any*/
                this.writeValue(((event.target)).value);
                this._onChange(this._value);
                this._onTouched();
            };
        /**
         * @param {?} c
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.validate = /**
         * @param {?} c
         * @return {?}
         */
            function (c) {
                var /** @type {?} */ _value = c.value;
                if (_value === null || _value === undefined || !chronos.isArray(_value)) {
                    return null;
                }
                var /** @type {?} */ _isFirstDateValid = chronos.isDateValid(_value[0]);
                var /** @type {?} */ _isSecondDateValid = chronos.isDateValid(_value[1]);
                if (!_isFirstDateValid) {
                    return { bsDate: { invalid: _value[0] } };
                }
                if (!_isSecondDateValid) {
                    return { bsDate: { invalid: _value[1] } };
                }
                if (this._picker && this._picker.minDate && chronos.isBefore(_value[0], this._picker.minDate, 'date')) {
                    return { bsDate: { minDate: this._picker.minDate } };
                }
                if (this._picker && this._picker.maxDate && chronos.isAfter(_value[1], this._picker.maxDate, 'date')) {
                    return { bsDate: { maxDate: this._picker.maxDate } };
                }
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnValidatorChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._validatorChange = fn;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                if (!value) {
                    this._value = null;
                }
                else {
                    var /** @type {?} */ _localeKey = this._localeService.currentLocale;
                    var /** @type {?} */ _locale = chronos.getLocale(_localeKey);
                    if (!_locale) {
                        throw new Error("Locale \"" + _localeKey + "\" is not defined, please add it with \"defineLocale(...)\"");
                    }
                    var /** @type {?} */ _input = [];
                    if (typeof value === 'string') {
                        _input = value.split(this._picker._config.rangeSeparator);
                    }
                    if (Array.isArray(value)) {
                        _input = value;
                    }
                    this._value = ((_input))
                        .map(function (_val) {
                        return chronos.parseDate(_val, _this._picker._config.dateInputFormat, _this._localeService.currentLocale);
                    })
                        .map(function (date) { return (isNaN(date.valueOf()) ? null : date); });
                }
                this._picker.bsValue = this._value;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this._picker.isDisabled = isDisabled;
                if (isDisabled) {
                    this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
                    return;
                }
                this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onChange = fn;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} fn
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this._onTouched = fn;
            };
        /**
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.onBlur = /**
         * @return {?}
         */
            function () {
                this._onTouched();
            };
        /**
         * @return {?}
         */
        BsDaterangepickerInputDirective.prototype.hide = /**
         * @return {?}
         */
            function () {
                this._picker.hide();
                this._renderer.selectRootElement(this._elRef.nativeElement).blur();
            };
        BsDaterangepickerInputDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: "input[bsDaterangepicker]",
                        host: {
                            '(change)': 'onChange($event)',
                            '(keyup.esc)': 'hide()',
                            '(blur)': 'onBlur()'
                        },
                        providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
                    },] }
        ];
        /** @nocollapse */
        BsDaterangepickerInputDirective.ctorParameters = function () {
            return [
                { type: BsDaterangepickerDirective, decorators: [{ type: core.Host },] },
                { type: BsLocaleService, },
                { type: core.Renderer2, },
                { type: core.ElementRef, },
                { type: core.ChangeDetectorRef, },
            ];
        };
        return BsDaterangepickerInputDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCalendarLayoutComponent = (function () {
        function BsCalendarLayoutComponent() {
        }
        BsCalendarLayoutComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-calendar-layout',
                        template: "\n    <!-- current date, will be added in nearest releases -->\n    <bs-current-date title=\"hey there\" *ngIf=\"false\"></bs-current-date>\n\n    <!--navigation-->\n    <div class=\"bs-datepicker-head\">\n      <ng-content select=\"bs-datepicker-navigation-view\"></ng-content>\n    </div>\n\n    <div class=\"bs-datepicker-body\">\n      <ng-content></ng-content>\n    </div>\n\n    <!--timepicker-->\n    <bs-timepicker *ngIf=\"false\"></bs-timepicker>\n  "
                    }] }
        ];
        return BsCalendarLayoutComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCurrentDateViewComponent = (function () {
        function BsCurrentDateViewComponent() {
        }
        BsCurrentDateViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-current-date',
                        template: "<div class=\"current-timedate\"><span>{{ title }}</span></div>"
                    }] }
        ];
        /** @nocollapse */
        BsCurrentDateViewComponent.propDecorators = {
            "title": [{ type: core.Input },],
        };
        return BsCurrentDateViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsCustomDatesViewComponent = (function () {
        function BsCustomDatesViewComponent() {
        }
        BsCustomDatesViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-custom-date-view',
                        template: "\n    <div class=\"bs-datepicker-predefined-btns\">\n      <button *ngFor=\"let range of ranges\">{{ range.label }}</button>\n      <button *ngIf=\"isCustomRangeShown\">Custom Range</button>\n    </div>\n  ",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        BsCustomDatesViewComponent.propDecorators = {
            "isCustomRangeShown": [{ type: core.Input },],
            "ranges": [{ type: core.Input },],
        };
        return BsCustomDatesViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerDayDecoratorComponent = (function () {
        function BsDatepickerDayDecoratorComponent(_config, _elRef, _renderer) {
            this._config = _config;
            this._elRef = _elRef;
            this._renderer = _renderer;
        }
        /**
         * @return {?}
         */
        BsDatepickerDayDecoratorComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.day.isToday && this._config && this._config.customTodayClass) {
                    this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
                }
            };
        BsDatepickerDayDecoratorComponent.decorators = [
            { type: core.Component, args: [{
                        selector: '[bsDatepickerDayDecorator]',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        host: {
                            '[class.disabled]': 'day.isDisabled',
                            '[class.is-highlighted]': 'day.isHovered',
                            '[class.is-other-month]': 'day.isOtherMonth',
                            '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                            '[class.in-range]': 'day.isInRange',
                            '[class.select-start]': 'day.isSelectionStart',
                            '[class.select-end]': 'day.isSelectionEnd',
                            '[class.selected]': 'day.isSelected'
                        },
                        template: "{{ day.label }}"
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerDayDecoratorComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
                { type: core.ElementRef, },
                { type: core.Renderer2, },
            ];
        };
        BsDatepickerDayDecoratorComponent.propDecorators = {
            "day": [{ type: core.Input },],
        };
        return BsDatepickerDayDecoratorComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /** @enum {number} */
    var BsNavigationDirection = {
        UP: 0,
        DOWN: 1,
    };
    BsNavigationDirection[BsNavigationDirection.UP] = "UP";
    BsNavigationDirection[BsNavigationDirection.DOWN] = "DOWN";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDatepickerNavigationViewComponent = (function () {
        function BsDatepickerNavigationViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
        }
        /**
         * @param {?} down
         * @return {?}
         */
        BsDatepickerNavigationViewComponent.prototype.navTo = /**
         * @param {?} down
         * @return {?}
         */
            function (down) {
                this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
            };
        /**
         * @param {?} viewMode
         * @return {?}
         */
        BsDatepickerNavigationViewComponent.prototype.view = /**
         * @param {?} viewMode
         * @return {?}
         */
            function (viewMode) {
                this.onViewMode.emit(viewMode);
            };
        BsDatepickerNavigationViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-datepicker-navigation-view',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        template: "\n    <button class=\"previous\"\n            [disabled]=\"calendar.disableLeftArrow\"\n            [style.visibility]=\"calendar.hideLeftArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(true)\"><span>&lsaquo;</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\"\n            *ngIf=\"calendar.monthTitle\"\n            (click)=\"view('month')\"\n    ><span>{{ calendar.monthTitle }}</span>\n    </button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"current\" (click)=\"view('year')\"\n    ><span>{{ calendar.yearTitle }}</span></button>\n\n    &#8203;  <!-- zero-width space needed for correct alignement\n                  with preserveWhitespaces: false in Angular -->\n\n    <button class=\"next\"\n            [disabled]=\"calendar.disableRightArrow\"\n            [style.visibility]=\"calendar.hideRightArrow ? 'hidden' : 'visible'\"\n            (click)=\"navTo(false)\"><span>&rsaquo;</span>\n    </button>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDatepickerNavigationViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
        };
        return BsDatepickerNavigationViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsDaysCalendarViewComponent = (function () {
        function BsDaysCalendarViewComponent(_config) {
            this._config = _config;
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
            this.onHoverWeek = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
                this.onNavigate.emit({ step: { month: step } });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onViewMode.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.selectDay = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onSelect.emit(event);
            };
        /**
         * @param {?} week
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.selectWeek = /**
         * @param {?} week
         * @return {?}
         */
            function (week) {
                var _this = this;
                if (!this._config.selectWeek) {
                    return;
                }
                if (week.days
                    && week.days[0]
                    && !week.days[0].isDisabled
                    && this._config.selectFromOtherMonth) {
                    this.onSelect.emit(week.days[0]);
                    return;
                }
                if (week.days.length === 0) {
                    return;
                }
                var /** @type {?} */ selectedDay = week.days.find(function (day) {
                    return _this._config.selectFromOtherMonth
                        ? !day.isDisabled
                        : !day.isOtherMonth && !day.isDisabled;
                });
                this.onSelect.emit(selectedDay);
            };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.weekHoverHandler = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
            function (cell, isHovered) {
                var _this = this;
                if (!this._config.selectWeek) {
                    return;
                }
                var /** @type {?} */ hasActiveDays = cell.days.find(function (day) {
                    return _this._config.selectFromOtherMonth
                        ? !day.isDisabled
                        : !day.isOtherMonth && !day.isDisabled;
                });
                if (hasActiveDays) {
                    cell.isHovered = isHovered;
                    this.isWeekHovered = isHovered;
                    this.onHoverWeek.emit(cell);
                }
            };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsDaysCalendarViewComponent.prototype.hoverDay = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
            function (cell, isHovered) {
                if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
                    cell.isOtherMonthHovered = isHovered;
                }
                this.onHover.emit({ cell: cell, isHovered: isHovered });
            };
        BsDaysCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-days-calendar-view',
                        // changeDetection: ChangeDetectionStrategy.OnPush,
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <!--days matrix-->\n      <table role=\"grid\" class=\"days weeks\">\n        <thead>\n        <tr>\n          <!--if show weeks-->\n          <th *ngIf=\"options.showWeekNumbers\"></th>\n          <th *ngFor=\"let weekday of calendar.weekdays; let i = index\"\n              aria-label=\"weekday\">{{ calendar.weekdays[i] }}\n          </th>\n        </tr>\n        </thead>\n        <tbody>\n        <tr *ngFor=\"let week of calendar.weeks; let i = index\">\n          <td class=\"week\" [class.active-week]=\"isWeekHovered\"  *ngIf=\"options.showWeekNumbers\">\n            <span\n                (click)=\"selectWeek(week)\"\n                (mouseenter)=\"weekHoverHandler(week, true)\"\n                (mouseleave)=\"weekHoverHandler(week, false)\">{{ calendar.weekNumbers[i] }}</span>\n          </td>\n          <td *ngFor=\"let day of week.days\" role=\"gridcell\">\n          <span bsDatepickerDayDecorator\n                [day]=\"day\"\n                (click)=\"selectDay(day)\"\n                (mouseenter)=\"hoverDay(day, true)\"\n                (mouseleave)=\"hoverDay(day, false)\">{{ day.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsDaysCalendarViewComponent.ctorParameters = function () {
            return [
                { type: BsDatepickerConfig, },
            ];
        };
        BsDaysCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "options": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
            "onHoverWeek": [{ type: core.Output },],
        };
        return BsDaysCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsMonthCalendarViewComponent = (function () {
        function BsMonthCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
                this.onNavigate.emit({ step: { year: step } });
            };
        /**
         * @param {?} month
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.viewMonth = /**
         * @param {?} month
         * @return {?}
         */
            function (month) {
                this.onSelect.emit(month);
            };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.hoverMonth = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
            function (cell, isHovered) {
                this.onHover.emit({ cell: cell, isHovered: isHovered });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsMonthCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onViewMode.emit(event);
            };
        BsMonthCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-month-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"months\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.months\">\n          <td *ngFor=\"let month of row\" role=\"gridcell\"\n              (click)=\"viewMonth(month)\"\n              (mouseenter)=\"hoverMonth(month, true)\"\n              (mouseleave)=\"hoverMonth(month, false)\"\n              [class.disabled]=\"month.isDisabled\"\n              [class.is-highlighted]=\"month.isHovered\">\n            <span>{{ month.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsMonthCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
        };
        return BsMonthCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsTimepickerViewComponent = (function () {
        function BsTimepickerViewComponent() {
            this.ampm = 'ok';
            this.hours = 0;
            this.minutes = 0;
        }
        BsTimepickerViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-timepicker',
                        template: "\n    <div class=\"bs-timepicker-container\">\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"hours\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <div class=\"bs-timepicker-controls\">\n        <button class=\"bs-decrease\">-</button>\n        <input type=\"text\" [value]=\"minutes\" placeholder=\"00\">\n        <button class=\"bs-increase\">+</button>\n      </div>\n      <button class=\"switch-time-format\">{{ ampm }}\n        <img\n          src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==\"\n          alt=\"\">\n      </button>\n    </div>\n  "
                    }] }
        ];
        return BsTimepickerViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BsYearsCalendarViewComponent = (function () {
        function BsYearsCalendarViewComponent() {
            this.onNavigate = new core.EventEmitter();
            this.onViewMode = new core.EventEmitter();
            this.onSelect = new core.EventEmitter();
            this.onHover = new core.EventEmitter();
        }
        /**
         * @param {?} event
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.navigateTo = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
                this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
            };
        /**
         * @param {?} year
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.viewYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                this.onSelect.emit(year);
            };
        /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.hoverYear = /**
         * @param {?} cell
         * @param {?} isHovered
         * @return {?}
         */
            function (cell, isHovered) {
                this.onHover.emit({ cell: cell, isHovered: isHovered });
            };
        /**
         * @param {?} event
         * @return {?}
         */
        BsYearsCalendarViewComponent.prototype.changeViewMode = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.onViewMode.emit(event);
            };
        BsYearsCalendarViewComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'bs-years-calendar-view',
                        template: "\n    <bs-calendar-layout>\n      <bs-datepicker-navigation-view\n        [calendar]=\"calendar\"\n        (onNavigate)=\"navigateTo($event)\"\n        (onViewMode)=\"changeViewMode($event)\"\n      ></bs-datepicker-navigation-view>\n\n      <table role=\"grid\" class=\"years\">\n        <tbody>\n        <tr *ngFor=\"let row of calendar.years\">\n          <td *ngFor=\"let year of row\" role=\"gridcell\"\n              (click)=\"viewYear(year)\"\n              (mouseenter)=\"hoverYear(year, true)\"\n              (mouseleave)=\"hoverYear(year, false)\"\n              [class.disabled]=\"year.isDisabled\"\n              [class.is-highlighted]=\"year.isHovered\">\n            <span>{{ year.label }}</span>\n          </td>\n        </tr>\n        </tbody>\n      </table>\n    </bs-calendar-layout>\n  "
                    }] }
        ];
        /** @nocollapse */
        BsYearsCalendarViewComponent.propDecorators = {
            "calendar": [{ type: core.Input },],
            "onNavigate": [{ type: core.Output },],
            "onViewMode": [{ type: core.Output },],
            "onSelect": [{ type: core.Output },],
            "onHover": [{ type: core.Output },],
        };
        return BsYearsCalendarViewComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ _exports = [
        BsDatepickerContainerComponent,
        BsDaterangepickerContainerComponent,
        BsDatepickerInlineContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerInputDirective,
        BsDaterangepickerDirective,
        BsDatepickerInlineDirective
    ];
    var BsDatepickerModule = (function () {
        function BsDatepickerModule() {
        }
        /**
         * @return {?}
         */
        BsDatepickerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: BsDatepickerModule,
                    providers: [
                        componentLoader.ComponentLoaderFactory,
                        positioning.PositioningService,
                        BsDatepickerStore,
                        BsDatepickerActions,
                        BsDatepickerConfig,
                        BsDaterangepickerConfig,
                        BsDatepickerInlineConfig,
                        BsDatepickerEffects,
                        BsLocaleService
                    ]
                };
            };
        BsDatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: __spread([
                            BsDatepickerDayDecoratorComponent,
                            BsCurrentDateViewComponent,
                            BsDatepickerNavigationViewComponent,
                            BsTimepickerViewComponent,
                            BsCalendarLayoutComponent,
                            BsDaysCalendarViewComponent,
                            BsMonthCalendarViewComponent,
                            BsYearsCalendarViewComponent,
                            BsCustomDatesViewComponent
                        ], _exports),
                        entryComponents: [
                            BsDatepickerContainerComponent,
                            BsDaterangepickerContainerComponent,
                            BsDatepickerInlineContainerComponent
                        ],
                        exports: _exports
                    },] }
        ];
        return BsDatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DateFormatter = (function () {
        function DateFormatter() {
        }
        /**
         * @param {?} date
         * @param {?} format
         * @param {?} locale
         * @return {?}
         */
        DateFormatter.prototype.format = /**
         * @param {?} date
         * @param {?} format
         * @param {?} locale
         * @return {?}
         */
            function (date, format, locale) {
                return chronos.formatDate(date, format, locale);
            };
        return DateFormatter;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatePickerInnerComponent = (function () {
        function DatePickerInnerComponent() {
            this.selectionDone = new core.EventEmitter(undefined);
            this.update = new core.EventEmitter(false);
            this.activeDateChange = new core.EventEmitter(undefined);
            /* tslint:disable-next-line: no-any*/
            this.stepDay = {};
            /* tslint:disable-next-line: no-any*/
            this.stepMonth = {};
            /* tslint:disable-next-line: no-any*/
            this.stepYear = {};
            this.modes = ['day', 'month', 'year'];
            this.dateFormatter = new DateFormatter();
        }
        Object.defineProperty(DatePickerInnerComponent.prototype, "activeDate", {
            get: /**
             * @return {?}
             */ function () {
                return this._activeDate;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._activeDate = value;
            },
            enumerable: true,
            configurable: true
        });
        // todo: add formatter value to Date object
        /**
         * @return {?}
         */
        DatePickerInnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // todo: use date for unique value
                this.uniqueId = "datepicker--" + Math.floor(Math.random() * 10000);
                if (this.initDate) {
                    this.activeDate = this.initDate;
                    this.selectedDate = new Date(this.activeDate.valueOf());
                    this.update.emit(this.activeDate);
                }
                else if (this.activeDate === undefined) {
                    this.activeDate = new Date();
                }
            };
        // this.refreshView should be called here to reflect the changes on the fly
        // tslint:disable-next-line:no-unused-variable
        /**
         * @param {?} changes
         * @return {?}
         */
        DatePickerInnerComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                this.refreshView();
                this.checkIfActiveDateGotUpdated(changes["activeDate"]);
            };
        // Check if activeDate has been update and then emit the activeDateChange with the new date
        /* tslint:disable-next-line: no-any */
        /**
         * @param {?} activeDate
         * @return {?}
         */
        DatePickerInnerComponent.prototype.checkIfActiveDateGotUpdated = /**
         * @param {?} activeDate
         * @return {?}
         */
            function (activeDate) {
                if (activeDate && !activeDate.firstChange) {
                    var /** @type {?} */ previousValue = activeDate.previousValue;
                    if (previousValue &&
                        previousValue instanceof Date &&
                        previousValue.getTime() !== activeDate.currentValue.getTime()) {
                        this.activeDateChange.emit(this.activeDate);
                    }
                }
            };
        /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
        DatePickerInnerComponent.prototype.setCompareHandler = /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
            function (handler, type) {
                if (type === 'day') {
                    this.compareHandlerDay = handler;
                }
                if (type === 'month') {
                    this.compareHandlerMonth = handler;
                }
                if (type === 'year') {
                    this.compareHandlerYear = handler;
                }
            };
        /**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
        DatePickerInnerComponent.prototype.compare = /**
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */
            function (date1, date2) {
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
            };
        /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
        DatePickerInnerComponent.prototype.setRefreshViewHandler = /**
         * @param {?} handler
         * @param {?} type
         * @return {?}
         */
            function (handler, type) {
                if (type === 'day') {
                    this.refreshViewHandlerDay = handler;
                }
                if (type === 'month') {
                    this.refreshViewHandlerMonth = handler;
                }
                if (type === 'year') {
                    this.refreshViewHandlerYear = handler;
                }
            };
        /**
         * @return {?}
         */
        DatePickerInnerComponent.prototype.refreshView = /**
         * @return {?}
         */
            function () {
                if (this.datepickerMode === 'day' && this.refreshViewHandlerDay) {
                    this.refreshViewHandlerDay();
                }
                if (this.datepickerMode === 'month' && this.refreshViewHandlerMonth) {
                    this.refreshViewHandlerMonth();
                }
                if (this.datepickerMode === 'year' && this.refreshViewHandlerYear) {
                    this.refreshViewHandlerYear();
                }
            };
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
        DatePickerInnerComponent.prototype.dateFilter = /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
            function (date, format) {
                return this.dateFormatter.format(date, format, this.locale);
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} dateObject
         * @return {?}
         */
        DatePickerInnerComponent.prototype.isActive = /**
         * @param {?} dateObject
         * @return {?}
         */
            function (dateObject) {
                if (this.compare(dateObject.date, this.activeDate) === 0) {
                    this.activeDateId = dateObject.uid;
                    return true;
                }
                return false;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
        DatePickerInnerComponent.prototype.createDateObject = /**
         * @param {?} date
         * @param {?} format
         * @return {?}
         */
            function (date, format) {
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ dateObject = {};
                dateObject.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
                dateObject.date = this.fixTimeZone(dateObject.date);
                dateObject.label = this.dateFilter(date, format);
                dateObject.selected = this.compare(date, this.selectedDate) === 0;
                dateObject.disabled = this.isDisabled(date);
                dateObject.current = this.compare(date, new Date()) === 0;
                dateObject.customClass = this.getCustomClassForDate(dateObject.date);
                return dateObject;
            };
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} arr
         * @param {?} size
         * @return {?}
         */
        DatePickerInnerComponent.prototype.split = /**
         * @param {?} arr
         * @param {?} size
         * @return {?}
         */
            function (arr, size) {
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ arrays = [];
                while (arr.length > 0) {
                    arrays.push(arr.splice(0, size));
                }
                return arrays;
            };
        // Fix a hard-reproducible bug with timezones
        // The bug depends on OS, browser, current timezone and current date
        // i.e.
        // var date = new Date(2014, 0, 1);
        // console.log(date.getFullYear(), date.getMonth(), date.getDate(),
        // date.getHours()); can result in "2013 11 31 23" because of the bug.
        /**
         * @param {?} date
         * @return {?}
         */
        DatePickerInnerComponent.prototype.fixTimeZone = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var /** @type {?} */ hours = date.getHours();
                return new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours === 23 ? hours + 2 : 0);
            };
        /**
         * @param {?} date
         * @param {?=} isManual
         * @return {?}
         */
        DatePickerInnerComponent.prototype.select = /**
         * @param {?} date
         * @param {?=} isManual
         * @return {?}
         */
            function (date, isManual) {
                if (isManual === void 0) {
                    isManual = true;
                }
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
            };
        /**
         * @param {?} direction
         * @return {?}
         */
        DatePickerInnerComponent.prototype.move = /**
         * @param {?} direction
         * @return {?}
         */
            function (direction) {
                /* tslint:disable-next-line: no-any*/
                var /** @type {?} */ expectedStep;
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
                    var /** @type {?} */ year = this.activeDate.getFullYear() + direction * (expectedStep.years || 0);
                    var /** @type {?} */ month = this.activeDate.getMonth() + direction * (expectedStep.months || 0);
                    this.activeDate = new Date(year, month, 1);
                    this.refreshView();
                    this.activeDateChange.emit(this.activeDate);
                }
            };
        /**
         * @param {?} _direction
         * @return {?}
         */
        DatePickerInnerComponent.prototype.toggleMode = /**
         * @param {?} _direction
         * @return {?}
         */
            function (_direction) {
                var /** @type {?} */ direction = _direction || 1;
                if ((this.datepickerMode === this.maxMode && direction === 1) ||
                    (this.datepickerMode === this.minMode && direction === -1)) {
                    return;
                }
                this.datepickerMode = this.modes[this.modes.indexOf(this.datepickerMode) + direction];
                this.refreshView();
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatePickerInnerComponent.prototype.getCustomClassForDate = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var _this = this;
                if (!this.customClass) {
                    return '';
                }
                // todo: build a hash of custom classes, it will work faster
                var /** @type {?} */ customClassObject = this.customClass.find(function (customClass) {
                    return (customClass.date.valueOf() === date.valueOf() &&
                        customClass.mode === _this.datepickerMode);
                }, this);
                return customClassObject === undefined ? '' : customClassObject.clazz;
            };
        /**
         * @param {?} date1Disabled
         * @param {?} date2
         * @return {?}
         */
        DatePickerInnerComponent.prototype.compareDateDisabled = /**
         * @param {?} date1Disabled
         * @param {?} date2
         * @return {?}
         */
            function (date1Disabled, date2) {
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
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DatePickerInnerComponent.prototype.isDisabled = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var _this = this;
                var /** @type {?} */ isDateDisabled = false;
                if (this.dateDisabled) {
                    this.dateDisabled.forEach(function (disabledDate) {
                        if (_this.compareDateDisabled(disabledDate, date) === 0) {
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
            };
        DatePickerInnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker-inner',
                        template: "\n    <!--&lt;!&ndash;ng-keydown=\"keydown($event)\"&ndash;&gt;-->\n    <div *ngIf=\"datepickerMode\" class=\"well well-sm bg-faded p-a card\" role=\"application\" >\n      <ng-content></ng-content>\n    </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        DatePickerInnerComponent.propDecorators = {
            "locale": [{ type: core.Input },],
            "datepickerMode": [{ type: core.Input },],
            "startingDay": [{ type: core.Input },],
            "yearRange": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "maxMode": [{ type: core.Input },],
            "showWeeks": [{ type: core.Input },],
            "formatDay": [{ type: core.Input },],
            "formatMonth": [{ type: core.Input },],
            "formatYear": [{ type: core.Input },],
            "formatDayHeader": [{ type: core.Input },],
            "formatDayTitle": [{ type: core.Input },],
            "formatMonthTitle": [{ type: core.Input },],
            "onlyCurrentMonth": [{ type: core.Input },],
            "shortcutPropagation": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "monthColLimit": [{ type: core.Input },],
            "yearColLimit": [{ type: core.Input },],
            "dateDisabled": [{ type: core.Input },],
            "dayDisabled": [{ type: core.Input },],
            "initDate": [{ type: core.Input },],
            "selectionDone": [{ type: core.Output },],
            "update": [{ type: core.Output },],
            "activeDateChange": [{ type: core.Output },],
            "activeDate": [{ type: core.Input },],
        };
        return DatePickerInnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatepickerConfig = (function () {
        function DatepickerConfig() {
            this.locale = 'en';
            this.datepickerMode = 'day';
            this.startingDay = 0;
            this.yearRange = 20;
            this.minMode = 'day';
            this.maxMode = 'year';
            this.showWeeks = true;
            this.formatDay = 'DD';
            this.formatMonth = 'MMMM';
            this.formatYear = 'YYYY';
            this.formatDayHeader = 'dd';
            this.formatDayTitle = 'MMMM YYYY';
            this.formatMonthTitle = 'YYYY';
            this.onlyCurrentMonth = false;
            this.monthColLimit = 3;
            this.yearColLimit = 5;
            this.shortcutPropagation = false;
        }
        DatepickerConfig.decorators = [
            { type: core.Injectable }
        ];
        return DatepickerConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ DATEPICKER_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return DatePickerComponent; }),
        multi: true
    };
    var DatePickerComponent = (function () {
        function DatePickerComponent(config) {
            /**
             * sets datepicker mode, supports: `day`, `month`, `year`
             */
            this.datepickerMode = 'day';
            /**
             * if false week numbers will be hidden
             */
            this.showWeeks = true;
            this.selectionDone = new core.EventEmitter(undefined);
            /**
             * callback to invoke when the activeDate is changed.
             */
            this.activeDateChange = new core.EventEmitter(undefined);
            /* tslint:disable-next-line: no-any*/
            this.onChange = Function.prototype;
            /* tslint:disable-next-line: no-any*/
            this.onTouched = Function.prototype;
            this._now = new Date();
            this.config = config;
            this.configureOptions();
        }
        Object.defineProperty(DatePickerComponent.prototype, "activeDate", {
            get: /**
             * currently active date
             * @return {?}
             */ function () {
                return this._activeDate || this._now;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._activeDate = value;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        DatePickerComponent.prototype.configureOptions = /**
         * @return {?}
         */
            function () {
                Object.assign(this, this.config);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DatePickerComponent.prototype.onUpdate = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.activeDate = event;
                this.onChange(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DatePickerComponent.prototype.onSelectionDone = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.selectionDone.emit(event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        DatePickerComponent.prototype.onActiveDateChange = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.activeDateChange.emit(event);
            };
        // todo: support null value
        /* tslint:disable-next-line: no-any*/
        /**
         * @param {?} value
         * @return {?}
         */
        DatePickerComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this._datePicker.compare(value, this._activeDate) === 0) {
                    return;
                }
                if (value && value instanceof Date) {
                    this.activeDate = value;
                    this._datePicker.select(value, false);
                    return;
                }
                this.activeDate = value ? new Date(value) : void 0;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        DatePickerComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        DatePickerComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        DatePickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'datepicker',
                        template: "\n    <datepicker-inner [activeDate]=\"activeDate\"\n                      (update)=\"onUpdate($event)\"\n                      [locale]=\"config.locale\"\n                      [datepickerMode]=\"datepickerMode\"\n                      [initDate]=\"initDate\"\n                      [minDate]=\"minDate\"\n                      [maxDate]=\"maxDate\"\n                      [minMode]=\"minMode\"\n                      [maxMode]=\"maxMode\"\n                      [showWeeks]=\"showWeeks\"\n                      [formatDay]=\"formatDay\"\n                      [formatMonth]=\"formatMonth\"\n                      [formatYear]=\"formatYear\"\n                      [formatDayHeader]=\"formatDayHeader\"\n                      [formatDayTitle]=\"formatDayTitle\"\n                      [formatMonthTitle]=\"formatMonthTitle\"\n                      [startingDay]=\"startingDay\"\n                      [yearRange]=\"yearRange\"\n                      [customClass]=\"customClass\"\n                      [dateDisabled]=\"dateDisabled\"\n                      [dayDisabled]=\"dayDisabled\"\n                      [onlyCurrentMonth]=\"onlyCurrentMonth\"\n                      [shortcutPropagation]=\"shortcutPropagation\"\n                      [monthColLimit]=\"monthColLimit\"\n                      [yearColLimit]=\"yearColLimit\"\n                      (selectionDone)=\"onSelectionDone($event)\"\n                      (activeDateChange)=\"onActiveDateChange($event)\">\n      <daypicker tabindex=\"0\"></daypicker>\n      <monthpicker tabindex=\"0\"></monthpicker>\n      <yearpicker tabindex=\"0\"></yearpicker>\n    </datepicker-inner>\n    ",
                        providers: [DATEPICKER_CONTROL_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        DatePickerComponent.ctorParameters = function () {
            return [
                { type: DatepickerConfig, },
            ];
        };
        DatePickerComponent.propDecorators = {
            "datepickerMode": [{ type: core.Input },],
            "initDate": [{ type: core.Input },],
            "minDate": [{ type: core.Input },],
            "maxDate": [{ type: core.Input },],
            "minMode": [{ type: core.Input },],
            "maxMode": [{ type: core.Input },],
            "showWeeks": [{ type: core.Input },],
            "formatDay": [{ type: core.Input },],
            "formatMonth": [{ type: core.Input },],
            "formatYear": [{ type: core.Input },],
            "formatDayHeader": [{ type: core.Input },],
            "formatDayTitle": [{ type: core.Input },],
            "formatMonthTitle": [{ type: core.Input },],
            "startingDay": [{ type: core.Input },],
            "yearRange": [{ type: core.Input },],
            "onlyCurrentMonth": [{ type: core.Input },],
            "shortcutPropagation": [{ type: core.Input },],
            "monthColLimit": [{ type: core.Input },],
            "yearColLimit": [{ type: core.Input },],
            "customClass": [{ type: core.Input },],
            "dateDisabled": [{ type: core.Input },],
            "dayDisabled": [{ type: core.Input },],
            "activeDate": [{ type: core.Input },],
            "selectionDone": [{ type: core.Output },],
            "activeDateChange": [{ type: core.Output },],
            "_datePicker": [{ type: core.ViewChild, args: [DatePickerInnerComponent,] },],
        };
        return DatePickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DayPickerComponent = (function () {
        function DayPickerComponent(datePicker) {
            this.labels = [];
            this.rows = [];
            this.weekNumbers = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(DayPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /*protected getDaysInMonth(year:number, month:number) {
         return ((month === 1) && (year % 4 === 0) &&
         ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
         }*/
        /**
         * @return {?}
         */
        DayPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ self = this;
                this.datePicker.stepDay = { months: 1 };
                this.datePicker.setRefreshViewHandler(function () {
                    var /** @type {?} */ year = this.activeDate.getFullYear();
                    var /** @type {?} */ month = this.activeDate.getMonth();
                    var /** @type {?} */ firstDayOfMonth = new Date(year, month, 1);
                    var /** @type {?} */ difference = this.startingDay - firstDayOfMonth.getDay();
                    var /** @type {?} */ numDisplayedFromPreviousMonth = difference > 0 ? 7 - difference : -difference;
                    var /** @type {?} */ firstDate = new Date(firstDayOfMonth.getTime());
                    if (numDisplayedFromPreviousMonth > 0) {
                        firstDate.setDate(-numDisplayedFromPreviousMonth + 1);
                    }
                    // 42 is the number of days on a six-week calendar
                    var /** @type {?} */ _days = self.getDates(firstDate, 42);
                    var /** @type {?} */ days = [];
                    for (var /** @type {?} */ i = 0; i < 42; i++) {
                        var /** @type {?} */ _dateObject = this.createDateObject(_days[i], this.formatDay);
                        _dateObject.secondary = _days[i].getMonth() !== month;
                        _dateObject.uid = this.uniqueId + '-' + i;
                        days[i] = _dateObject;
                    }
                    self.labels = [];
                    for (var /** @type {?} */ j = 0; j < 7; j++) {
                        self.labels[j] = {};
                        self.labels[j].abbr = this.dateFilter(days[j].date, this.formatDayHeader);
                        self.labels[j].full = this.dateFilter(days[j].date, 'EEEE');
                    }
                    self.title = this.dateFilter(this.activeDate, this.formatDayTitle);
                    self.rows = this.split(days, 7);
                    if (this.showWeeks) {
                        self.weekNumbers = [];
                        var /** @type {?} */ thursdayIndex = (4 + 7 - this.startingDay) % 7;
                        var /** @type {?} */ numWeeks = self.rows.length;
                        for (var /** @type {?} */ curWeek = 0; curWeek < numWeeks; curWeek++) {
                            self.weekNumbers.push(self.getISO8601WeekNumber(self.rows[curWeek][thursdayIndex].date));
                        }
                    }
                }, 'day');
                this.datePicker.setCompareHandler(function (date1, date2) {
                    var /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
                    var /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
                    return d1.getTime() - d2.getTime();
                }, 'day');
                this.datePicker.refreshView();
            };
        /**
         * @param {?} startDate
         * @param {?} n
         * @return {?}
         */
        DayPickerComponent.prototype.getDates = /**
         * @param {?} startDate
         * @param {?} n
         * @return {?}
         */
            function (startDate, n) {
                var /** @type {?} */ dates = new Array(n);
                var /** @type {?} */ current = new Date(startDate.getTime());
                var /** @type {?} */ i = 0;
                var /** @type {?} */ date;
                while (i < n) {
                    date = new Date(current.getTime());
                    date = this.datePicker.fixTimeZone(date);
                    dates[i++] = date;
                    current = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
                }
                return dates;
            };
        /**
         * @param {?} date
         * @return {?}
         */
        DayPickerComponent.prototype.getISO8601WeekNumber = /**
         * @param {?} date
         * @return {?}
         */
            function (date) {
                var /** @type {?} */ checkDate = new Date(date.getTime());
                // Thursday
                checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
                var /** @type {?} */ time = checkDate.getTime();
                // Compare with Jan 1
                checkDate.setMonth(0);
                checkDate.setDate(1);
                return (Math.floor(Math.round((time - checkDate.getTime()) / 86400000) / 7) + 1);
            };
        DayPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'daypicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode === 'day'\" role=\"grid\" [attr.aria-labelledby]=\"datePicker.uniqueId + '-title'\" aria-activedescendant=\"activeDateId\">\n  <thead>\n    <tr>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">\u2039</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\"\n                tabindex=\"-1\">&lt;</button>\n      </th>\n      <th [attr.colspan]=\"5 + (datePicker.showWeeks ? 1 : 0)\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-secondary btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button *ngIf=\"!isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">\u203A</button>\n        <button *ngIf=\"isBs4\"\n                type=\"button\"\n                class=\"btn btn-default btn-secondary btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\"\n                tabindex=\"-1\">&gt;\n        </button>\n      </th>\n    </tr>\n    <tr>\n      <th *ngIf=\"datePicker.showWeeks\"></th>\n      <th *ngFor=\"let labelz of labels\" class=\"text-center\">\n        <small aria-label=\"labelz.full\"><b>{{ labelz.abbr }}</b></small>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <ng-template ngFor [ngForOf]=\"rows\" let-rowz=\"$implicit\" let-index=\"index\">\n      <tr *ngIf=\"!(datePicker.onlyCurrentMonth && rowz[0].secondary && rowz[6].secondary)\">\n        <td *ngIf=\"datePicker.showWeeks\" class=\"h6\" class=\"text-center\">\n          <em>{{ weekNumbers[index] }}</em>\n        </td>\n        <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [id]=\"dtz.uid\">\n          <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-sm {{dtz.customClass}}\"\n                  *ngIf=\"!(datePicker.onlyCurrentMonth && dtz.secondary)\"\n                  [ngClass]=\"{'btn-secondary': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected, disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz), 'btn-default': !isBs4}\"\n                  [disabled]=\"dtz.disabled\"\n                  (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n            <span [ngClass]=\"{'text-muted': dtz.secondary || dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n          </button>\n        </td>\n      </tr>\n    </ng-template>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-secondary {\n      color: #292b2c;\n      background-color: #fff;\n      border-color: #ccc;\n    }\n    :host .btn-info .text-muted {\n      color: #292b2c !important;\n    }\n  "]
                    }] }
        ];
        // todo: key events implementation
        /** @nocollapse */
        DayPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return DayPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MonthPickerComponent = (function () {
        function MonthPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(MonthPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        MonthPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ self = this;
                this.datePicker.stepMonth = { years: 1 };
                this.datePicker.setRefreshViewHandler(function () {
                    var /** @type {?} */ months = new Array(12);
                    var /** @type {?} */ year = this.activeDate.getFullYear();
                    var /** @type {?} */ date;
                    for (var /** @type {?} */ i = 0; i < 12; i++) {
                        date = new Date(year, i, 1);
                        date = this.fixTimeZone(date);
                        months[i] = this.createDateObject(date, this.formatMonth);
                        months[i].uid = this.uniqueId + '-' + i;
                    }
                    self.title = this.dateFilter(this.activeDate, this.formatMonthTitle);
                    self.rows = this.split(months, self.datePicker.monthColLimit);
                }, 'month');
                this.datePicker.setCompareHandler(function (date1, date2) {
                    var /** @type {?} */ d1 = new Date(date1.getFullYear(), date1.getMonth());
                    var /** @type {?} */ d2 = new Date(date2.getFullYear(), date2.getMonth());
                    return d1.getTime() - d2.getTime();
                }, 'month');
                this.datePicker.refreshView();
            };
        MonthPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'monthpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='month'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button></th>\n      <th [attr.colspan]=\"((datePicker.monthColLimit - 2) <= 0) ? 1 : datePicker.monthColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong> \n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\" [ngClass]=\"dtz.customClass\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        // todo: key events implementation
        /** @nocollapse */
        MonthPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return MonthPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var YearPickerComponent = (function () {
        function YearPickerComponent(datePicker) {
            this.rows = [];
            this.datePicker = datePicker;
        }
        Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
            get: /**
             * @return {?}
             */ function () {
                return !utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        YearPickerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var /** @type {?} */ self = this;
                this.datePicker.stepYear = { years: this.datePicker.yearRange };
                this.datePicker.setRefreshViewHandler(function () {
                    var /** @type {?} */ years = new Array(this.yearRange);
                    var /** @type {?} */ date;
                    var /** @type {?} */ start = self.getStartingYear(this.activeDate.getFullYear());
                    for (var /** @type {?} */ i = 0; i < this.yearRange; i++) {
                        date = new Date(start + i, 0, 1);
                        date = this.fixTimeZone(date);
                        years[i] = this.createDateObject(date, this.formatYear);
                        years[i].uid = this.uniqueId + '-' + i;
                    }
                    self.title = [years[0].label, years[this.yearRange - 1].label].join(' - ');
                    self.rows = this.split(years, self.datePicker.yearColLimit);
                }, 'year');
                this.datePicker.setCompareHandler(function (date1, date2) {
                    return date1.getFullYear() - date2.getFullYear();
                }, 'year');
                this.datePicker.refreshView();
            };
        /**
         * @param {?} year
         * @return {?}
         */
        YearPickerComponent.prototype.getStartingYear = /**
         * @param {?} year
         * @return {?}
         */
            function (year) {
                // todo: parseInt
                return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
            };
        YearPickerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'yearpicker',
                        template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                        styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        YearPickerComponent.ctorParameters = function () {
            return [
                { type: DatePickerInnerComponent, },
            ];
        };
        return YearPickerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var DatepickerModule = (function () {
        function DatepickerModule() {
        }
        /**
         * @return {?}
         */
        DatepickerModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: DatepickerModule, providers: [DatepickerConfig] };
            };
        DatepickerModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
                        declarations: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        exports: [
                            DatePickerComponent,
                            DatePickerInnerComponent,
                            DayPickerComponent,
                            MonthPickerComponent,
                            YearPickerComponent
                        ],
                        entryComponents: [DatePickerComponent]
                    },] }
        ];
        return DatepickerModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BsDatepickerConfig = BsDatepickerConfig;
    exports.BsDatepickerDirective = BsDatepickerDirective;
    exports.BsDatepickerInlineConfig = BsDatepickerInlineConfig;
    exports.BsDatepickerInlineDirective = BsDatepickerInlineDirective;
    exports.BsDatepickerModule = BsDatepickerModule;
    exports.BsDaterangepickerConfig = BsDaterangepickerConfig;
    exports.BsDaterangepickerDirective = BsDaterangepickerDirective;
    exports.BsLocaleService = BsLocaleService;
    exports.DateFormatter = DateFormatter;
    exports.DatePickerComponent = DatePickerComponent;
    exports.DatepickerConfig = DatepickerConfig;
    exports.DatepickerModule = DatepickerModule;
    exports.DayPickerComponent = DayPickerComponent;
    exports.MonthPickerComponent = MonthPickerComponent;
    exports.YearPickerComponent = YearPickerComponent;
    exports.ɵl = BsDatepickerAbstractComponent;
    exports.ɵr = BsDatepickerInputDirective;
    exports.ɵs = BsDaterangepickerInputDirective;
    exports.ɵt = DatePickerInnerComponent;
    exports.ɵa = DATEPICKER_CONTROL_VALUE_ACCESSOR;
    exports.ɵo = BsDatepickerActions;
    exports.ɵn = BsDatepickerEffects;
    exports.ɵm = BsDatepickerStore;
    exports.ɵf = BsCalendarLayoutComponent;
    exports.ɵc = BsCurrentDateViewComponent;
    exports.ɵj = BsCustomDatesViewComponent;
    exports.ɵk = BsDatepickerContainerComponent;
    exports.ɵb = BsDatepickerDayDecoratorComponent;
    exports.ɵq = BsDatepickerInlineContainerComponent;
    exports.ɵd = BsDatepickerNavigationViewComponent;
    exports.ɵp = BsDaterangepickerContainerComponent;
    exports.ɵg = BsDaysCalendarViewComponent;
    exports.ɵh = BsMonthCalendarViewComponent;
    exports.ɵe = BsTimepickerViewComponent;
    exports.ɵi = BsYearsCalendarViewComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1kYXRlcGlja2VyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXIuY29uZmlnLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWxvY2FsZS5zZXJ2aWNlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL19kZWZhdWx0cy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdGF0ZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3V0aWxzL2JzLWNhbGVuZGFyLXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdXRpbHMvbWF0cml4LXV0aWxzLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mb3JtYXQtZGF5cy1jYWxlbmRhci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2VuZ2luZS9mbGFnLWRheXMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvdmlldy1tb2RlLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2Zvcm1hdC1tb250aHMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZmxhZy1tb250aHMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9lbmdpbmUvZm9ybWF0LXllYXJzLWNhbGVuZGFyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZW5naW5lL2ZsYWcteWVhcnMtY2FsZW5kYXIudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIucmVkdWNlci50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcmFuZ2VwaWNrZXIuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvYnMtZGF0ZXJhbmdlcGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2JzLWRhdGVyYW5nZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtY2FsZW5kYXItbGF5b3V0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1jdXJyZW50LWRhdGUtdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItZGF5LWRlY29yYXRvci5kaXJlY3RpdmUudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRheXMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtbW9udGhzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLXRpbWVwaWNrZXItdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLm1vZHVsZS50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGUtZm9ybWF0dGVyLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci9kYXRlcGlja2VyLmNvbmZpZy50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL2RhdGVwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF5cGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL21vbnRocGlja2VyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyL3llYXJwaWNrZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlXHJcbn0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBGb3IgZGF0ZSByYW5nZSBwaWNrZXIgdGhlcmUgYXJlIGBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZ2Agd2hpY2ggaW5oZXJpdHMgYWxsIHByb3BlcnRpZXMsXHJcbiAqIGV4Y2VwdCBgZGlzcGxheU1vbnRoc2AsIGZvciByYW5nZSBwaWNrZXIgaXQgZGVmYXVsdCB0byBgMmBcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckNvbmZpZyBpbXBsZW1lbnRzIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zIHtcclxuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cclxuICBhZGFwdGl2ZVBvc2l0aW9uID0gZmFsc2U7XHJcbiAgdmFsdWU/OiBEYXRlIHwgRGF0ZVtdO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgbWluIGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcclxuICAgKi9cclxuICBtaW5EYXRlPzogRGF0ZTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IG1heCBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXHJcbiAgICovXHJcbiAgbWF4RGF0ZT86IERhdGU7XHJcblxyXG4gIGRheXNEaXNhYmxlZD86IG51bWJlcltdO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXHJcbiAgICovXHJcbiAgZGF0ZXNEaXNhYmxlZD86IERhdGVbXTtcclxuICAvKipcclxuICAgKiBNYWtlcyBkYXRlcyBmcm9tIG90aGVyIG1vbnRocyBhY3RpdmVcclxuICAgKi9cclxuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ha2VzIGRhdGVzIGZyb20gb3RoZXIgbW9udGhzIGFjdGl2ZVxyXG4gICAqL1xyXG4gIHNlbGVjdFdlZWs/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgY2xhc3MgdG8gY3VycmVudCBkYXlcclxuICAgKi9cclxuICBjdXN0b21Ub2RheUNsYXNzPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZWZhdWx0IG1vZGUgZm9yIGFsbCBkYXRlIHBpY2tlcnNcclxuICAgKi9cclxuICBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGU7XHJcblxyXG4gIC8qKiBDU1MgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIGRhdGVwaWNrZXIgY29udGFpbmVyLFxyXG4gICAqIHVzdWFsbHkgdXNlZCB0byBzZXQgY29sb3IgdGhlbWVcclxuICAgKi9cclxuICBjb250YWluZXJDbGFzcyA9ICd0aGVtZS1ncmVlbic7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXHJcbiAgZGlzcGxheU1vbnRocyA9IDE7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRvIGhpZGUgd2VlayBudW1iZXJzIGluIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBzaG93V2Vla051bWJlcnMgPSB0cnVlO1xyXG5cclxuICBkYXRlSW5wdXRGb3JtYXQgPSAnTCc7XHJcbiAgLy8gcmFuZ2UgcGlja2VyXHJcbiAgcmFuZ2VTZXBhcmF0b3IgPSAnIC0gJztcclxuICAvKipcclxuICAgKiBEYXRlIGZvcm1hdCBmb3IgZGF0ZSByYW5nZSBpbnB1dCBmaWVsZFxyXG4gICAqL1xyXG4gIHJhbmdlSW5wdXRGb3JtYXQgPSAnTCc7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zXHJcbiAgbW9udGhUaXRsZSA9ICdNTU1NJztcclxuICB5ZWFyVGl0bGUgPSAnWVlZWSc7XHJcbiAgZGF5TGFiZWwgPSAnRCc7XHJcbiAgbW9udGhMYWJlbCA9ICdNTU1NJztcclxuICB5ZWFyTGFiZWwgPSAnWVlZWSc7XHJcbiAgd2Vla051bWJlcnMgPSAndyc7XHJcbn1cclxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIvLyBkYXRlcGlja2VyIGNvbnRhaW5lciBjb21wb25lbnRcclxuLyogdHNsaW50OmRpc2FibGU6bm8tZW1wdHkgKi9cclxuaW1wb3J0IHsgQnNDdXN0b21EYXRlcyB9IGZyb20gJy4uL3RoZW1lcy9icy9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXHJcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBEYXlWaWV3TW9kZWwsXHJcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgV2Vla1ZpZXdNb2RlbCxcclxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB7XHJcbiAgY29udGFpbmVyQ2xhc3M6IHN0cmluZztcclxuICBpc090aGVyTW9udGhzQWN0aXZlOiBib29sZWFuO1xyXG5cclxuICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cztcclxuICBfY3VzdG9tUmFuZ2VzRmlzaDogQnNDdXN0b21EYXRlc1tdID0gW107XHJcblxyXG4gIHNldCBtaW5EYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldE1pbkRhdGUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1heERhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0TWF4RGF0ZSh2YWx1ZSk7XHJcbiAgfVxyXG4gIHNldCBkYXlzRGlzYWJsZWQodmFsdWU6IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldERheXNEaXNhYmxlZCh2YWx1ZSk7XHJcbiAgfVxyXG4gIHNldCBkYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW10pIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0RGF0ZXNEaXNhYmxlZCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXQgaXNEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZWZmZWN0cy5zZXREaXNhYmxlZCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2aWV3TW9kZTogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZT47XHJcbiAgZGF5c0NhbGVuZGFyOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdPjtcclxuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcclxuICB5ZWFyc0NhbGVuZGFyOiBPYnNlcnZhYmxlPFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgb3B0aW9uczogT2JzZXJ2YWJsZTxEYXRlcGlja2VyUmVuZGVyT3B0aW9ucz47XHJcblxyXG4gIHNldFZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge31cclxuXHJcbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRheUhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIHdlZWtIb3ZlckhhbmRsZXIoZXZlbnQ6IFdlZWtWaWV3TW9kZWwpOiB2b2lkIHt9XHJcblxyXG4gIG1vbnRoSG92ZXJIYW5kbGVyKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQge31cclxuXHJcbiAgeWVhckhvdmVySGFuZGxlcihldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHt9XHJcblxyXG4gIG1vbnRoU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxyXG5cclxuICB5ZWFyU2VsZWN0SGFuZGxlcihldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7fVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSAqL1xyXG4gIF9zdG9wUHJvcGFnYXRpb24oZXZlbnQ6IGFueSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGltZVVuaXQgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL21pbmktbmdyeCc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNWaWV3TmF2aWdhdGlvbkV2ZW50LFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckFjdGlvbnMge1xyXG4gIHN0YXRpYyByZWFkb25seSBDQUxDVUxBVEUgPSAnW2RhdGVwaWNrZXJdIGNhbGN1bGF0ZSBkYXRlcyBtYXRyaXgnO1xyXG4gIHN0YXRpYyByZWFkb25seSBGT1JNQVQgPSAnW2RhdGVwaWNrZXJdIGZvcm1hdCBkYXRlcGlja2VyIHZhbHVlcyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEZMQUcgPSAnW2RhdGVwaWNrZXJdIHNldCBmbGFncyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFTEVDVCA9ICdbZGF0ZXBpY2tlcl0gc2VsZWN0IGRhdGUnO1xyXG4gIHN0YXRpYyByZWFkb25seSBOQVZJR0FURV9PRkZTRVQgPSAnW2RhdGVwaWNrZXJdIHNoaWZ0IHZpZXcgZGF0ZSc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IE5BVklHQVRFX1RPID0gJ1tkYXRlcGlja2VyXSBjaGFuZ2UgdmlldyBkYXRlJztcclxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX09QVElPTlMgPSAnW2RhdGVwaWNrZXJdIHVwZGF0ZSByZW5kZXIgb3B0aW9ucyc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IEhPVkVSID0gJ1tkYXRlcGlja2VyXSBob3ZlciBkYXRlJztcclxuICBzdGF0aWMgcmVhZG9ubHkgQ0hBTkdFX1ZJRVdNT0RFID0gJ1tkYXRlcGlja2VyXSBzd2l0Y2ggdmlldyBtb2RlJztcclxuXHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9NSU5fREFURSA9ICdbZGF0ZXBpY2tlcl0gc2V0IG1pbiBkYXRlJztcclxuICBzdGF0aWMgcmVhZG9ubHkgU0VUX01BWF9EQVRFID0gJ1tkYXRlcGlja2VyXSBzZXQgbWF4IGRhdGUnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfREFZU0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF5cyBkaXNhYmxlZCc7XHJcbiAgc3RhdGljIHJlYWRvbmx5IFNFVF9EQVRFU0RJU0FCTEVEID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXMgZGlzYWJsZWQnO1xyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfSVNfRElTQUJMRUQgPSAnW2RhdGVwaWNrZXJdIHNldCBpcyBkaXNhYmxlZCc7XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSBTRVRfTE9DQUxFID0gJ1tkYXRlcGlja2VyXSBzZXQgZGF0ZXBpY2tlciBsb2NhbGUnO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgU0VMRUNUX1JBTkdFID0gJ1tkYXRlcmFuZ2VwaWNrZXJdIHNlbGVjdCBkYXRlcyByYW5nZSc7XHJcblxyXG4gIGNhbGN1bGF0ZSgpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DQUxDVUxBVEUgfTtcclxuICB9XHJcblxyXG4gIGZvcm1hdCgpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHsgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5GT1JNQVQgfTtcclxuICB9XHJcblxyXG4gIGZsYWcoKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7IHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRyB9O1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0KGRhdGU6IERhdGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1QsXHJcbiAgICAgIHBheWxvYWQ6IGRhdGVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5DSEFOR0VfVklFV01PREUsXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVUbyhldmVudDogQnNWaWV3TmF2aWdhdGlvbkV2ZW50KTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfVE8sXHJcbiAgICAgIHBheWxvYWQ6IGV2ZW50XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbmF2aWdhdGVTdGVwKHN0ZXA6IFRpbWVVbml0KTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuTkFWSUdBVEVfT0ZGU0VULFxyXG4gICAgICBwYXlsb2FkOiBzdGVwXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TLFxyXG4gICAgICBwYXlsb2FkOiBvcHRpb25zXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLy8gZGF0ZSByYW5nZSBwaWNrZXJcclxuICBzZWxlY3RSYW5nZSh2YWx1ZTogRGF0ZVtdKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VMRUNUX1JBTkdFLFxyXG4gICAgICBwYXlsb2FkOiB2YWx1ZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGhvdmVyRGF5KGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLkhPVkVSLFxyXG4gICAgICBwYXlsb2FkOiBldmVudC5pc0hvdmVyZWQgPyBldmVudC5jZWxsLmRhdGUgOiBudWxsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWluRGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01JTl9EQVRFLFxyXG4gICAgICBwYXlsb2FkOiBkYXRlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgbWF4RGF0ZShkYXRlOiBEYXRlKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX01BWF9EQVRFLFxyXG4gICAgICBwYXlsb2FkOiBkYXRlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGF5c0Rpc2FibGVkKGRheXM6IG51bWJlcltdKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0RBWVNESVNBQkxFRCxcclxuICAgICAgcGF5bG9hZDogZGF5c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGRhdGVzRGlzYWJsZWQoZGF0ZXM6IERhdGVbXSk6IEFjdGlvbiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0eXBlOiBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9EQVRFU0RJU0FCTEVELFxyXG4gICAgICBwYXlsb2FkOiBkYXRlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlzRGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBBY3Rpb24ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdHlwZTogQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfSVNfRElTQUJMRUQsXHJcbiAgICAgIHBheWxvYWQ6IHZhbHVlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0TG9jYWxlKGxvY2FsZTogc3RyaW5nKTogQWN0aW9uIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHR5cGU6IEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0xPQ0FMRSxcclxuICAgICAgcGF5bG9hZDogbG9jYWxlXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNMb2NhbGVTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9kZWZhdWx0TG9jYWxlID0gJ2VuJztcclxuICBwcml2YXRlIF9sb2NhbGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4odGhpcy5fZGVmYXVsdExvY2FsZSk7XHJcbiAgcHJpdmF0ZSBfbG9jYWxlQ2hhbmdlOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLl9sb2NhbGUuYXNPYnNlcnZhYmxlKCk7XHJcblxyXG4gIGdldCBsb2NhbGUoKTogQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldCBsb2NhbGVDaGFuZ2UoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLl9sb2NhbGVDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBnZXQgY3VycmVudExvY2FsZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZS5nZXRWYWx1ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXNlKGxvY2FsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAobG9jYWxlID09PSB0aGlzLmN1cnJlbnRMb2NhbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2xvY2FsZS5uZXh0KGxvY2FsZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi4vYnMtbG9jYWxlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHtcclxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcclxuICBCc05hdmlnYXRpb25FdmVudCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXHJcbiAgQ2VsbEhvdmVyRXZlbnQsXHJcbiAgRGF0ZXBpY2tlclJlbmRlck9wdGlvbnMsXHJcbiAgRGF5c0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIERheVZpZXdNb2RlbCxcclxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICB2aWV3TW9kZTogT2JzZXJ2YWJsZTxCc0RhdGVwaWNrZXJWaWV3TW9kZT47XHJcbiAgZGF5c0NhbGVuZGFyOiBPYnNlcnZhYmxlPERheXNDYWxlbmRhclZpZXdNb2RlbFtdPjtcclxuICBtb250aHNDYWxlbmRhcjogT2JzZXJ2YWJsZTxNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdPjtcclxuICB5ZWFyc0NhbGVuZGFyOiBPYnNlcnZhYmxlPFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgb3B0aW9uczogT2JzZXJ2YWJsZTxEYXRlcGlja2VyUmVuZGVyT3B0aW9ucz47XHJcblxyXG4gIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZTtcclxuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSkge31cclxuXHJcbiAgaW5pdChfYnNEYXRlcGlja2VyU3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICB0aGlzLl9zdG9yZSA9IF9ic0RhdGVwaWNrZXJTdG9yZTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8qKiBzZXR0ZXJzICovXHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdCh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFuZ2VWYWx1ZSh2YWx1ZTogRGF0ZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHZhbHVlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRNaW5EYXRlKHZhbHVlOiBEYXRlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm1pbkRhdGUodmFsdWUpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldE1heERhdGUodmFsdWU6IERhdGUpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubWF4RGF0ZSh2YWx1ZSkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF5c0Rpc2FibGVkKHZhbHVlOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5kYXlzRGlzYWJsZWQodmFsdWUpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldERhdGVzRGlzYWJsZWQodmFsdWU6IERhdGVbXSkge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5kYXRlc0Rpc2FibGVkKHZhbHVlKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZCh2YWx1ZTogYm9vbGVhbik6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5pc0Rpc2FibGVkKHZhbHVlKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiBTZXQgcmVuZGVyaW5nIG9wdGlvbnMgKi9cclxuICBzZXRPcHRpb25zKF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgY29uc3QgX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHtsb2NhbGU6IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZX0sIF9jb25maWcpO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRPcHRpb25zKF9vcHRpb25zKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogdmlldyB0byBtb2RlIGJpbmRpbmdzICovXHJcbiAgc2V0QmluZGluZ3MoY29udGFpbmVyOiBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgY29udGFpbmVyLmRheXNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXHJcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZmxhZ2dlZE1vbnRocylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKG1vbnRocyA9PiAhIW1vbnRocylcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBtb250aCBjYWxlbmRhclxyXG4gICAgY29udGFpbmVyLm1vbnRoc0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcclxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mbGFnZ2VkTW9udGhzQ2FsZW5kYXIpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihtb250aHMgPT4gISFtb250aHMpXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8geWVhciBjYWxlbmRhclxyXG4gICAgY29udGFpbmVyLnllYXJzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxyXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnllYXJzQ2FsZW5kYXJGbGFnZ2VkKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoeWVhcnMgPT4gISF5ZWFycylcclxuICAgICAgKTtcclxuXHJcbiAgICBjb250YWluZXIudmlld01vZGUgPSB0aGlzLl9zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmlldy5tb2RlKTtcclxuXHJcbiAgICBjb250YWluZXIub3B0aW9ucyA9IHRoaXMuX3N0b3JlXHJcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2hvd1dlZWtOdW1iZXJzKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBtYXAoc2hvd1dlZWtOdW1iZXJzID0+ICh7c2hvd1dlZWtOdW1iZXJzfSkpXHJcbiAgICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogZXZlbnQgaGFuZGxlcnMgKi9cclxuICBzZXRFdmVudEhhbmRsZXJzKGNvbnRhaW5lcjogQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIGNvbnRhaW5lci5zZXRWaWV3TW9kZSA9IChldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkID0+IHtcclxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jaGFuZ2VWaWV3TW9kZShldmVudCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIubmF2aWdhdGVUbyA9IChldmVudDogQnNOYXZpZ2F0aW9uRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVN0ZXAoZXZlbnQuc3RlcCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIuZGF5SG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICBjb25zdCBfY2VsbCA9IGV2ZW50LmNlbGwgYXMgRGF5Vmlld01vZGVsO1xyXG4gICAgICBpZiAoX2NlbGwuaXNPdGhlck1vbnRoIHx8IF9jZWxsLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaG92ZXJEYXkoZXZlbnQpKTtcclxuICAgICAgX2NlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIubW9udGhIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgIGV2ZW50LmNlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIueWVhckhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgZXZlbnQuY2VsbC5pc0hvdmVyZWQgPSBldmVudC5pc0hvdmVyZWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci5tb250aFNlbGVjdEhhbmRsZXIgPSAoZXZlbnQ6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdW5pdDoge1xyXG4gICAgICAgICAgICBtb250aDogZ2V0TW9udGgoZXZlbnQuZGF0ZSksXHJcbiAgICAgICAgICAgIHllYXI6IGdldEZ1bGxZZWFyKGV2ZW50LmRhdGUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmlld01vZGU6ICdkYXknXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLnllYXJTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmlzRGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVuaXQ6IHtcclxuICAgICAgICAgICAgeWVhcjogZ2V0RnVsbFllYXIoZXZlbnQuZGF0ZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2aWV3TW9kZTogJ21vbnRoJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52aWV3KS5zdWJzY3JpYmUodmlldyA9PiB7XHJcbiAgICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jYWxjdWxhdGUoKSk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGZvcm1hdCBjYWxlbmRhciB2YWx1ZXMgb24gbW9udGggbW9kZWwgY2hhbmdlXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5tb250aHNNb2RlbClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihtb250aE1vZGVsID0+ICEhbW9udGhNb2RlbClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShtb250aCA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZvcm1hdCgpKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gZmxhZyBkYXkgdmFsdWVzXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5mb3JtYXR0ZWRNb250aHMpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIobW9udGggPT4gISFtb250aClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShtb250aCA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGZsYWcgZGF5IHZhbHVlc1xyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWREYXRlKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKHNlbGVjdGVkRGF0ZSA9PiAhIXNlbGVjdGVkRGF0ZSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZERhdGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBmbGFnIGZvciBkYXRlIHJhbmdlIHBpY2tlclxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWRSYW5nZSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihzZWxlY3RlZFJhbmdlID0+ICEhc2VsZWN0ZWRSYW5nZSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShzZWxlY3RlZFJhbmdlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gbW9udGhzQ2FsZW5kYXJcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLm1vbnRoc0NhbGVuZGFyKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyB5ZWFycyBjYWxlbmRhclxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUueWVhcnNDYWxlbmRhck1vZGVsKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKHN0YXRlID0+ICEhc3RhdGUpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBvbiBob3ZlclxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuaG92ZXJlZERhdGUpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoaG92ZXJlZERhdGUgPT4gISFob3ZlcmVkRGF0ZSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZShob3ZlcmVkRGF0ZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG9uIGxvY2FsZSBjaGFuZ2VcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2VcclxuICAgICAgICAuc3Vic2NyaWJlKGxvY2FsZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNldExvY2FsZShsb2NhbGUpKSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBkZXN0cm95KCk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBzdWIgb2YgdGhpcy5fc3Vicykge1xyXG4gICAgICBzdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBNb250aFZpZXdPcHRpb25zXHJcbn0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBkZWZhdWx0TW9udGhPcHRpb25zOiBNb250aFZpZXdPcHRpb25zID0ge1xyXG4gIHdpZHRoOiA3LFxyXG4gIGhlaWdodDogNlxyXG59O1xyXG4iLCJpbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxyXG4gIERheXNDYWxlbmRhck1vZGVsLFxyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBNb250aFZpZXdPcHRpb25zLFxyXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBkZWZhdWx0TW9udGhPcHRpb25zIH0gZnJvbSAnLi9fZGVmYXVsdHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJzRGF0ZXBpY2tlclZpZXdTdGF0ZSB7XHJcbiAgZGF0ZTogRGF0ZTtcclxuICBtb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlclN0YXRlXHJcbiAgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucywgRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnMge1xyXG4gIC8vIGRhdGUgcGlja2VyXHJcbiAgc2VsZWN0ZWREYXRlPzogRGF0ZTtcclxuICAvLyBkYXRlcmFuZ2UgcGlja2VyXHJcbiAgc2VsZWN0ZWRSYW5nZT86IERhdGVbXTtcclxuXHJcbiAgLy8gaW5pdGlhbCBkYXRlIG9mIGNhbGVuZGFyLCB0b2RheSBieSBkZWZhdWx0XHJcbiAgdmlldzogQnNEYXRlcGlja2VyVmlld1N0YXRlO1xyXG5cclxuICBpc0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAvLyBib3VuZHNcclxuICBtaW5EYXRlPzogRGF0ZTtcclxuICBtYXhEYXRlPzogRGF0ZTtcclxuICBkYXlzRGlzYWJsZWQ/OiBudW1iZXJbXTtcclxuICBkYXRlc0Rpc2FibGVkPzogRGF0ZVtdO1xyXG4gIG1pbk1vZGU/OiBCc0RhdGVwaWNrZXJWaWV3TW9kZTtcclxuXHJcbiAgaG92ZXJlZERhdGU/OiBEYXRlO1xyXG4gIGhvdmVyZWRNb250aD86IERhdGU7XHJcbiAgaG92ZXJlZFllYXI/OiBEYXRlO1xyXG5cclxuICAvLyBkYXlzIGNhbGVuZGFyXHJcbiAgbW9udGhzTW9kZWw/OiBEYXlzQ2FsZW5kYXJNb2RlbFtdO1xyXG4gIGZvcm1hdHRlZE1vbnRocz86IERheXNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG4gIGZsYWdnZWRNb250aHM/OiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcclxuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XHJcblxyXG4gIC8vIG1vbnRocyBjYWxlbmRhclxyXG4gIG1vbnRoc0NhbGVuZGFyPzogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcclxuICBmbGFnZ2VkTW9udGhzQ2FsZW5kYXI/OiBNb250aHNDYWxlbmRhclZpZXdNb2RlbFtdO1xyXG5cclxuICAvLyB5ZWFycyBjYWxlbmRhclxyXG4gIHllYXJzQ2FsZW5kYXJNb2RlbD86IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcclxuICB5ZWFyc0NhbGVuZGFyRmxhZ2dlZD86IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxbXTtcclxuXHJcbiAgLy8gb3B0aW9uc1xyXG4gIG1vbnRoVmlld09wdGlvbnM6IE1vbnRoVmlld09wdGlvbnM7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXHJcbiAgc2hvd1dlZWtOdW1iZXJzPzogYm9vbGVhbjtcclxuICBkaXNwbGF5TW9udGhzPzogbnVtYmVyO1xyXG5cclxuICAvLyBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4gIGxvY2FsZTogc3RyaW5nO1xyXG5cclxuICBtb250aFRpdGxlOiBzdHJpbmc7XHJcbiAgeWVhclRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIGRheUxhYmVsOiBzdHJpbmc7XHJcbiAgbW9udGhMYWJlbDogc3RyaW5nO1xyXG4gIHllYXJMYWJlbDogc3RyaW5nO1xyXG5cclxuICB3ZWVrTnVtYmVyczogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBfaW5pdGlhbFZpZXc6IEJzRGF0ZXBpY2tlclZpZXdTdGF0ZSA9IHsgZGF0ZTogbmV3IERhdGUoKSwgbW9kZTogJ2RheScgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsRGF0ZXBpY2tlclN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSA9IE9iamVjdC5hc3NpZ24oXHJcbiAgbmV3IEJzRGF0ZXBpY2tlckNvbmZpZygpLFxyXG4gIHtcclxuICAgIGxvY2FsZTogJ2VuJyxcclxuICAgIHZpZXc6IF9pbml0aWFsVmlldyxcclxuICAgIHNlbGVjdGVkUmFuZ2U6IFtdLFxyXG4gICAgbW9udGhWaWV3T3B0aW9uczogZGVmYXVsdE1vbnRoT3B0aW9uc1xyXG4gIH1cclxuKTtcclxuIiwiaW1wb3J0IHtcclxuICBnZXREYXksXHJcbiAgaXNGaXJzdERheU9mV2VlayxcclxuICBpc0FmdGVyLFxyXG4gIGlzQmVmb3JlLFxyXG4gIHNoaWZ0RGF0ZSxcclxuICBlbmRPZixcclxuICBzdGFydE9mLFxyXG4gIGlzU2FtZVxyXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyKGRhdGU6IERhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogeyBmaXJzdERheU9mV2Vlaz86IG51bWJlciB9KTogRGF0ZSB7XHJcbiAgaWYgKGlzRmlyc3REYXlPZldlZWsoZGF0ZSwgb3B0aW9ucy5maXJzdERheU9mV2VlaykpIHtcclxuICAgIHJldHVybiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgd2Vla0RheSA9IGdldERheShkYXRlKTtcclxuICBjb25zdCBvZmZzZXQgPSBjYWxjdWxhdGVEYXRlT2Zmc2V0KHdlZWtEYXksIG9wdGlvbnMuZmlyc3REYXlPZldlZWspO1xyXG5cclxuICByZXR1cm4gc2hpZnREYXRlKGRhdGUsIHtkYXk6IC1vZmZzZXR9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZURhdGVPZmZzZXQod2Vla2RheTogbnVtYmVyLCBzdGFydGluZ0RheU9mZnNldDogbnVtYmVyKTogbnVtYmVyIHtcclxuICBpZiAoc3RhcnRpbmdEYXlPZmZzZXQgPT09IDApIHtcclxuICAgIHJldHVybiB3ZWVrZGF5O1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb2Zmc2V0ID0gd2Vla2RheSAtIHN0YXJ0aW5nRGF5T2Zmc2V0ICUgNztcclxuXHJcbiAgcmV0dXJuIG9mZnNldCA8IDAgPyBvZmZzZXQgKyA3IDogb2Zmc2V0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNb250aERpc2FibGVkKGRhdGU6IERhdGUsIG1pbjogRGF0ZSwgbWF4OiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ21vbnRoJyksIG1pbiwgJ2RheScpO1xyXG4gIGNvbnN0IG1heEJvdW5kID0gbWF4ICYmIGlzQWZ0ZXIoc3RhcnRPZihkYXRlLCAnbW9udGgnKSwgbWF4LCAnZGF5Jyk7XHJcblxyXG4gIHJldHVybiBtaW5Cb3VuZCB8fCBtYXhCb3VuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzWWVhckRpc2FibGVkKGRhdGU6IERhdGUsIG1pbjogRGF0ZSwgbWF4OiBEYXRlKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgbWluQm91bmQgPSBtaW4gJiYgaXNCZWZvcmUoZW5kT2YoZGF0ZSwgJ3llYXInKSwgbWluLCAnZGF5Jyk7XHJcbiAgY29uc3QgbWF4Qm91bmQgPSBtYXggJiYgaXNBZnRlcihzdGFydE9mKGRhdGUsICd5ZWFyJyksIG1heCwgJ2RheScpO1xyXG5cclxuICByZXR1cm4gbWluQm91bmQgfHwgbWF4Qm91bmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Rpc2FibGVkRGF0ZShkYXRlOiBEYXRlLCBkYXRlc0Rpc2FibGVkOiBEYXRlW10pOiBib29sZWFuIHtcclxuICBpZiAoZGF0ZXNEaXNhYmxlZCA9PT0gdW5kZWZpbmVkIHx8ICFkYXRlc0Rpc2FibGVkIHx8ICFkYXRlc0Rpc2FibGVkLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGVzRGlzYWJsZWQuc29tZSgoZGF0ZURpc2FibGVkOiBEYXRlKSA9PiBpc1NhbWUoZGF0ZSwgZGF0ZURpc2FibGVkLCAnZGF0ZScpKTtcclxufVxyXG4iLCJpbXBvcnQgeyBUaW1lVW5pdCwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmV4cG9ydCB0eXBlIENyZWF0ZU1hdHJpeENiPFQ+ID0gKGRhdGU6IERhdGUpID0+IFQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hdHJpeE9wdGlvbnMge1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaW5pdGlhbERhdGU6IERhdGU7XHJcbiAgc2hpZnQ6IFRpbWVVbml0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWF0cml4PFQ+KFxyXG4gIG9wdGlvbnM6IE1hdHJpeE9wdGlvbnMsXHJcbiAgZm46IENyZWF0ZU1hdHJpeENiPFQ+XHJcbik6IFRbXVtdIHtcclxuICBsZXQgcHJldlZhbHVlID0gb3B0aW9ucy5pbml0aWFsRGF0ZTtcclxuICBjb25zdCBtYXRyaXg6IFRbXVtdID0gbmV3IEFycmF5KG9wdGlvbnMuaGVpZ2h0KTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IG9wdGlvbnMuaGVpZ2h0OyBpKyspIHtcclxuICAgIG1hdHJpeFtpXSA9IG5ldyBBcnJheShvcHRpb25zLndpZHRoKTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgb3B0aW9ucy53aWR0aDsgaisrKSB7XHJcbiAgICAgIG1hdHJpeFtpXVtqXSA9IGZuKHByZXZWYWx1ZSk7XHJcbiAgICAgIHByZXZWYWx1ZSA9IHNoaWZ0RGF0ZShwcmV2VmFsdWUsIG9wdGlvbnMuc2hpZnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1hdHJpeDtcclxufVxyXG4iLCIvLyB1c2VyIGFuZCBtb2RlbCBpbnB1dCBzaG91bGQgaGFuZGxlIHBhcnNpbmcgYW5kIHZhbGlkYXRpbmcgaW5wdXQgdmFsdWVzXHJcbi8vIHNob3VsZCBhY2NlcHQgc29tZSBvcHRpb25zXHJcbi8vIHRvZG86IHNwbGl0IG91dCBmb3JtYXR0aW5nXHJcbmltcG9ydCB7IERheXNDYWxlbmRhck1vZGVsLCBNb250aFZpZXdPcHRpb25zIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgZ2V0Rmlyc3REYXlPZk1vbnRoIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgZ2V0U3RhcnRpbmdEYXlPZkNhbGVuZGFyIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNYXRyaXggfSBmcm9tICcuLi91dGlscy9tYXRyaXgtdXRpbHMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNEYXlzQ2FsZW5kYXIoXHJcbiAgc3RhcnRpbmdEYXRlOiBEYXRlLFxyXG4gIG9wdGlvbnM6IE1vbnRoVmlld09wdGlvbnNcclxuKTogRGF5c0NhbGVuZGFyTW9kZWwge1xyXG4gIGNvbnN0IGZpcnN0RGF5ID0gZ2V0Rmlyc3REYXlPZk1vbnRoKHN0YXJ0aW5nRGF0ZSk7XHJcbiAgY29uc3QgaW5pdGlhbERhdGUgPSBnZXRTdGFydGluZ0RheU9mQ2FsZW5kYXIoZmlyc3REYXksIG9wdGlvbnMpO1xyXG5cclxuICBjb25zdCBtYXRyaXhPcHRpb25zID0ge1xyXG4gICAgd2lkdGg6IG9wdGlvbnMud2lkdGgsXHJcbiAgICBoZWlnaHQ6IG9wdGlvbnMuaGVpZ2h0LFxyXG4gICAgaW5pdGlhbERhdGUsXHJcbiAgICBzaGlmdDogeyBkYXk6IDEgfVxyXG4gIH07XHJcbiAgY29uc3QgZGF5c01hdHJpeCA9IGNyZWF0ZU1hdHJpeDxEYXRlPihtYXRyaXhPcHRpb25zLCBkYXRlID0+IGRhdGUpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZGF5c01hdHJpeCxcclxuICAgIG1vbnRoOiBmaXJzdERheVxyXG4gIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcclxuICBEYXlzQ2FsZW5kYXJNb2RlbCxcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlLCBnZXRMb2NhbGUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERheXNDYWxlbmRhcihkYXlzQ2FsZW5kYXI6IERheXNDYWxlbmRhck1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdE9wdGlvbnM6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoSW5kZXg6IG51bWJlcik6IERheXNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG1vbnRoOiBkYXlzQ2FsZW5kYXIubW9udGgsXHJcbiAgICBtb250aFRpdGxlOiBmb3JtYXREYXRlKFxyXG4gICAgICBkYXlzQ2FsZW5kYXIubW9udGgsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMubW9udGhUaXRsZSxcclxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcclxuICAgICksXHJcbiAgICB5ZWFyVGl0bGU6IGZvcm1hdERhdGUoXHJcbiAgICAgIGRheXNDYWxlbmRhci5tb250aCxcclxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgICApLFxyXG4gICAgd2Vla051bWJlcnM6IGdldFdlZWtOdW1iZXJzKFxyXG4gICAgICBkYXlzQ2FsZW5kYXIuZGF5c01hdHJpeCxcclxuICAgICAgZm9ybWF0T3B0aW9ucy53ZWVrTnVtYmVycyxcclxuICAgICAgZm9ybWF0T3B0aW9ucy5sb2NhbGVcclxuICAgICksXHJcbiAgICB3ZWVrZGF5czogZ2V0U2hpZnRlZFdlZWtkYXlzKGZvcm1hdE9wdGlvbnMubG9jYWxlKSxcclxuICAgIHdlZWtzOiBkYXlzQ2FsZW5kYXIuZGF5c01hdHJpeC5tYXAoKHdlZWs6IERhdGVbXSwgd2Vla0luZGV4OiBudW1iZXIpID0+ICh7XHJcbiAgICAgIGRheXM6IHdlZWsubWFwKChkYXRlOiBEYXRlLCBkYXlJbmRleDogbnVtYmVyKSA9PiAoe1xyXG4gICAgICAgIGRhdGUsXHJcbiAgICAgICAgbGFiZWw6IGZvcm1hdERhdGUoZGF0ZSwgZm9ybWF0T3B0aW9ucy5kYXlMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpLFxyXG4gICAgICAgIG1vbnRoSW5kZXgsXHJcbiAgICAgICAgd2Vla0luZGV4LFxyXG4gICAgICAgIGRheUluZGV4XHJcbiAgICAgIH0pKVxyXG4gICAgfSkpXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFdlZWtOdW1iZXJzKGRheXNNYXRyaXg6IERhdGVbXVtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICByZXR1cm4gZGF5c01hdHJpeC5tYXAoXHJcbiAgICAoZGF5czogRGF0ZVtdKSA9PiAoZGF5c1swXSA/IGZvcm1hdERhdGUoZGF5c1swXSwgZm9ybWF0LCBsb2NhbGUpIDogJycpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNoaWZ0ZWRXZWVrZGF5cyhsb2NhbGU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuICBjb25zdCBfbG9jYWxlID0gZ2V0TG9jYWxlKGxvY2FsZSk7XHJcbiAgY29uc3Qgd2Vla2RheXMgPSBfbG9jYWxlLndlZWtkYXlzU2hvcnQoKSBhcyBzdHJpbmdbXTtcclxuICBjb25zdCBmaXJzdERheU9mV2VlayA9IF9sb2NhbGUuZmlyc3REYXlPZldlZWsoKTtcclxuXHJcbiAgcmV0dXJuIFsuLi53ZWVrZGF5cy5zbGljZShmaXJzdERheU9mV2VlayksIC4uLndlZWtkYXlzLnNsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKV07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgRGF5Vmlld01vZGVsLFxyXG4gIFdlZWtWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc0FmdGVyLFxyXG4gIGlzQmVmb3JlLFxyXG4gIGlzRGlzYWJsZWREYXksXHJcbiAgaXNTYW1lRGF5LFxyXG4gIGlzU2FtZU1vbnRoLFxyXG4gIHNoaWZ0RGF0ZVxyXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcblxyXG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzRGlzYWJsZWREYXRlIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGFnRGF5c0NhbGVuZGFyT3B0aW9ucyB7XHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICBtaW5EYXRlOiBEYXRlO1xyXG4gIG1heERhdGU6IERhdGU7XHJcbiAgZGF5c0Rpc2FibGVkOiBudW1iZXJbXTtcclxuICBkYXRlc0Rpc2FibGVkOiBEYXRlW107XHJcbiAgaG92ZXJlZERhdGU6IERhdGU7XHJcbiAgc2VsZWN0ZWREYXRlOiBEYXRlO1xyXG4gIHNlbGVjdGVkUmFuZ2U6IERhdGVbXTtcclxuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XHJcbiAgbW9udGhJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxhZ0RheXNDYWxlbmRhcihcclxuICBmb3JtYXR0ZWRNb250aDogRGF5c0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIG9wdGlvbnM6IEZsYWdEYXlzQ2FsZW5kYXJPcHRpb25zXHJcbik6IERheXNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgZm9ybWF0dGVkTW9udGgud2Vla3MuZm9yRWFjaCgod2VlazogV2Vla1ZpZXdNb2RlbCkgPT4ge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjeWNsb21hdGljLWNvbXBsZXhpdHkgKi9cclxuICAgIHdlZWsuZGF5cy5mb3JFYWNoKChkYXk6IERheVZpZXdNb2RlbCwgZGF5SW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAvLyBkYXRlcGlja2VyXHJcbiAgICAgIGNvbnN0IGlzT3RoZXJNb250aCA9ICFpc1NhbWVNb250aChkYXkuZGF0ZSwgZm9ybWF0dGVkTW9udGgubW9udGgpO1xyXG5cclxuICAgICAgY29uc3QgaXNIb3ZlcmVkID1cclxuICAgICAgICAhaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgb3B0aW9ucy5ob3ZlcmVkRGF0ZSk7XHJcbiAgICAgIC8vIGRhdGUgcmFuZ2UgcGlja2VyXHJcbiAgICAgIGNvbnN0IGlzU2VsZWN0aW9uU3RhcnQgPVxyXG4gICAgICAgICFpc090aGVyTW9udGggJiZcclxuICAgICAgICBvcHRpb25zLnNlbGVjdGVkUmFuZ2UgJiZcclxuICAgICAgICBpc1NhbWVEYXkoZGF5LmRhdGUsIG9wdGlvbnMuc2VsZWN0ZWRSYW5nZVswXSk7XHJcbiAgICAgIGNvbnN0IGlzU2VsZWN0aW9uRW5kID1cclxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXHJcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXHJcbiAgICAgICAgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkUmFuZ2VbMV0pO1xyXG5cclxuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9XHJcbiAgICAgICAgKCFpc090aGVyTW9udGggJiYgaXNTYW1lRGF5KGRheS5kYXRlLCBvcHRpb25zLnNlbGVjdGVkRGF0ZSkpIHx8XHJcbiAgICAgICAgaXNTZWxlY3Rpb25TdGFydCB8fFxyXG4gICAgICAgIGlzU2VsZWN0aW9uRW5kO1xyXG5cclxuICAgICAgY29uc3QgaXNJblJhbmdlID1cclxuICAgICAgICAhaXNPdGhlck1vbnRoICYmXHJcbiAgICAgICAgb3B0aW9ucy5zZWxlY3RlZFJhbmdlICYmXHJcbiAgICAgICAgaXNEYXRlSW5SYW5nZShkYXkuZGF0ZSwgb3B0aW9ucy5zZWxlY3RlZFJhbmdlLCBvcHRpb25zLmhvdmVyZWREYXRlKTtcclxuXHJcbiAgICAgIGNvbnN0IGlzRGlzYWJsZWQgPVxyXG4gICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxyXG4gICAgICAgIGlzQmVmb3JlKGRheS5kYXRlLCBvcHRpb25zLm1pbkRhdGUsICdkYXknKSB8fFxyXG4gICAgICAgIGlzQWZ0ZXIoZGF5LmRhdGUsIG9wdGlvbnMubWF4RGF0ZSwgJ2RheScpIHx8XHJcbiAgICAgICAgaXNEaXNhYmxlZERheShkYXkuZGF0ZSwgb3B0aW9ucy5kYXlzRGlzYWJsZWQpIHx8XHJcbiAgICAgICAgaXNEaXNhYmxlZERhdGUoZGF5LmRhdGUsIG9wdGlvbnMuZGF0ZXNEaXNhYmxlZCk7XHJcblxyXG4gICAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGNvbnN0IGlzVG9kYXkgPSAhaXNPdGhlck1vbnRoICYmIGlzU2FtZURheShkYXkuZGF0ZSwgY3VycmVudERhdGUpO1xyXG5cclxuICAgICAgLy8gZGVjaWRlIHVwZGF0ZSBvciBub3RcclxuICAgICAgY29uc3QgbmV3RGF5ID0gT2JqZWN0LmFzc2lnbih7fSwgZGF5LCB7XHJcbiAgICAgICAgaXNPdGhlck1vbnRoLFxyXG4gICAgICAgIGlzSG92ZXJlZCxcclxuICAgICAgICBpc1NlbGVjdGVkLFxyXG4gICAgICAgIGlzU2VsZWN0aW9uU3RhcnQsXHJcbiAgICAgICAgaXNTZWxlY3Rpb25FbmQsXHJcbiAgICAgICAgaXNJblJhbmdlLFxyXG4gICAgICAgIGlzRGlzYWJsZWQsXHJcbiAgICAgICAgaXNUb2RheVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBkYXkuaXNPdGhlck1vbnRoICE9PSBuZXdEYXkuaXNPdGhlck1vbnRoIHx8XHJcbiAgICAgICAgZGF5LmlzSG92ZXJlZCAhPT0gbmV3RGF5LmlzSG92ZXJlZCB8fFxyXG4gICAgICAgIGRheS5pc1NlbGVjdGVkICE9PSBuZXdEYXkuaXNTZWxlY3RlZCB8fFxyXG4gICAgICAgIGRheS5pc1NlbGVjdGlvblN0YXJ0ICE9PSBuZXdEYXkuaXNTZWxlY3Rpb25TdGFydCB8fFxyXG4gICAgICAgIGRheS5pc1NlbGVjdGlvbkVuZCAhPT0gbmV3RGF5LmlzU2VsZWN0aW9uRW5kIHx8XHJcbiAgICAgICAgZGF5LmlzRGlzYWJsZWQgIT09IG5ld0RheS5pc0Rpc2FibGVkIHx8XHJcbiAgICAgICAgZGF5LmlzSW5SYW5nZSAhPT0gbmV3RGF5LmlzSW5SYW5nZVxyXG4gICAgICApIHtcclxuICAgICAgICB3ZWVrLmRheXNbZGF5SW5kZXhdID0gbmV3RGF5O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXHJcbiAgZm9ybWF0dGVkTW9udGguaGlkZUxlZnRBcnJvdyA9XHJcbiAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcclxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPiAwICYmIG9wdGlvbnMubW9udGhJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcclxuICBmb3JtYXR0ZWRNb250aC5oaWRlUmlnaHRBcnJvdyA9XHJcbiAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcclxuICAgIChvcHRpb25zLm1vbnRoSW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcclxuICAgICAgb3B0aW9ucy5tb250aEluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzKTtcclxuXHJcbiAgZm9ybWF0dGVkTW9udGguZGlzYWJsZUxlZnRBcnJvdyA9IGlzTW9udGhEaXNhYmxlZChcclxuICAgIHNoaWZ0RGF0ZShmb3JtYXR0ZWRNb250aC5tb250aCwgeyBtb250aDogLTEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG4gIGZvcm1hdHRlZE1vbnRoLmRpc2FibGVSaWdodEFycm93ID0gaXNNb250aERpc2FibGVkKFxyXG4gICAgc2hpZnREYXRlKGZvcm1hdHRlZE1vbnRoLm1vbnRoLCB7IG1vbnRoOiAxIH0pLFxyXG4gICAgb3B0aW9ucy5taW5EYXRlLFxyXG4gICAgb3B0aW9ucy5tYXhEYXRlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGZvcm1hdHRlZE1vbnRoO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhdGVJblJhbmdlKFxyXG4gIGRhdGU6IERhdGUsXHJcbiAgc2VsZWN0ZWRSYW5nZTogRGF0ZVtdLFxyXG4gIGhvdmVyZWREYXRlOiBEYXRlXHJcbik6IGJvb2xlYW4ge1xyXG4gIGlmICghZGF0ZSB8fCAhc2VsZWN0ZWRSYW5nZVswXSkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKHNlbGVjdGVkUmFuZ2VbMV0pIHtcclxuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IHNlbGVjdGVkUmFuZ2VbMV07XHJcbiAgfVxyXG5cclxuICBpZiAoaG92ZXJlZERhdGUpIHtcclxuICAgIHJldHVybiBkYXRlID4gc2VsZWN0ZWRSYW5nZVswXSAmJiBkYXRlIDw9IGhvdmVyZWREYXRlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbiIsImltcG9ydCB7IEJzRGF0ZXBpY2tlclZpZXdNb2RlIH0gZnJvbSAnLi4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5Td2l0Y2hNb2RlKG1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlLCBtaW5Nb2RlPzogQnNEYXRlcGlja2VyVmlld01vZGUpOiBib29sZWFuIHtcclxuICByZXR1cm4gbWluTW9kZSA/IG1vZGUgPj0gbWluTW9kZSA6IHRydWU7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcclxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBzdGFydE9mLCBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgY3JlYXRlTWF0cml4IH0gZnJvbSAnLi4vdXRpbHMvbWF0cml4LXV0aWxzJztcclxuXHJcbmNvbnN0IGhlaWdodCA9IDQ7XHJcbmNvbnN0IHdpZHRoID0gMztcclxuY29uc3Qgc2hpZnQgPSB7IG1vbnRoOiAxIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXHJcbiAgdmlld0RhdGU6IERhdGUsXHJcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcclxuKTogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwge1xyXG4gIGNvbnN0IGluaXRpYWxEYXRlID0gc3RhcnRPZih2aWV3RGF0ZSwgJ3llYXInKTtcclxuICBjb25zdCBtYXRyaXhPcHRpb25zID0geyB3aWR0aCwgaGVpZ2h0LCBpbml0aWFsRGF0ZSwgc2hpZnQgfTtcclxuICBjb25zdCBtb250aE1hdHJpeCA9IGNyZWF0ZU1hdHJpeDxcclxuICAgIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG4gID4obWF0cml4T3B0aW9ucywgZGF0ZSA9PiAoe1xyXG4gICAgZGF0ZSxcclxuICAgIGxhYmVsOiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdE9wdGlvbnMubW9udGhMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXHJcbiAgfSkpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgbW9udGhzOiBtb250aE1hdHJpeCxcclxuICAgIG1vbnRoVGl0bGU6ICcnLFxyXG4gICAgeWVhclRpdGxlOiBmb3JtYXREYXRlKFxyXG4gICAgICB2aWV3RGF0ZSxcclxuICAgICAgZm9ybWF0T3B0aW9ucy55ZWFyVGl0bGUsXHJcbiAgICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgICApXHJcbiAgfTtcclxufVxyXG4iLCJpbXBvcnQgeyBpc1NhbWVNb250aCwgc2hpZnREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHtcclxuICBNb250aHNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcclxufSBmcm9tICcuLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBpc01vbnRoRGlzYWJsZWQsIGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGFnTW9udGhDYWxlbmRhck9wdGlvbnMge1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgbWluRGF0ZTogRGF0ZTtcclxuICBtYXhEYXRlOiBEYXRlO1xyXG4gIGhvdmVyZWRNb250aDogRGF0ZTtcclxuICBkaXNwbGF5TW9udGhzOiBudW1iZXI7XHJcbiAgbW9udGhJbmRleDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmxhZ01vbnRoc0NhbGVuZGFyKFxyXG4gIG1vbnRoQ2FsZW5kYXI6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIG9wdGlvbnM6IEZsYWdNb250aENhbGVuZGFyT3B0aW9uc1xyXG4pOiBNb250aHNDYWxlbmRhclZpZXdNb2RlbCB7XHJcbiAgbW9udGhDYWxlbmRhci5tb250aHMuZm9yRWFjaChcclxuICAgIChtb250aHM6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdLCByb3dJbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgIG1vbnRocy5mb3JFYWNoKChtb250aDogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBtb250aEluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zdCBpc0hvdmVyZWQgPSBpc1NhbWVNb250aChtb250aC5kYXRlLCBvcHRpb25zLmhvdmVyZWRNb250aCk7XHJcbiAgICAgICAgY29uc3QgaXNEaXNhYmxlZCA9XHJcbiAgICAgICAgICBvcHRpb25zLmlzRGlzYWJsZWQgfHxcclxuICAgICAgICAgIGlzTW9udGhEaXNhYmxlZChtb250aC5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XHJcbiAgICAgICAgY29uc3QgbmV3TW9udGggPSBPYmplY3QuYXNzaWduKC8qe30sKi8gbW9udGgsIHtcclxuICAgICAgICAgIGlzSG92ZXJlZCxcclxuICAgICAgICAgIGlzRGlzYWJsZWRcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBtb250aC5pc0hvdmVyZWQgIT09IG5ld01vbnRoLmlzSG92ZXJlZCB8fFxyXG4gICAgICAgICAgbW9udGguaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgbW9udGhDYWxlbmRhci5tb250aHNbcm93SW5kZXhdW21vbnRoSW5kZXhdID0gbmV3TW9udGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICApO1xyXG5cclxuICAvLyB0b2RvOiBhZGQgY2hlY2sgZm9yIGxpbmtlZCBjYWxlbmRhcnNcclxuICBtb250aENhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPVxyXG4gICAgb3B0aW9ucy5tb250aEluZGV4ID4gMCAmJiBvcHRpb25zLm1vbnRoSW5kZXggIT09IG9wdGlvbnMuZGlzcGxheU1vbnRocztcclxuICBtb250aENhbGVuZGFyLmhpZGVSaWdodEFycm93ID1cclxuICAgIG9wdGlvbnMubW9udGhJbmRleCA8IG9wdGlvbnMuZGlzcGxheU1vbnRocyAmJlxyXG4gICAgb3B0aW9ucy5tb250aEluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xyXG5cclxuICBtb250aENhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcclxuICAgIHNoaWZ0RGF0ZShtb250aENhbGVuZGFyLm1vbnRoc1swXVswXS5kYXRlLCB7IHllYXI6IC0xIH0pLFxyXG4gICAgb3B0aW9ucy5taW5EYXRlLFxyXG4gICAgb3B0aW9ucy5tYXhEYXRlXHJcbiAgKTtcclxuICBtb250aENhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXHJcbiAgICBzaGlmdERhdGUobW9udGhDYWxlbmRhci5tb250aHNbMF1bMF0uZGF0ZSwgeyB5ZWFyOiAxIH0pLFxyXG4gICAgb3B0aW9ucy5taW5EYXRlLFxyXG4gICAgb3B0aW9ucy5tYXhEYXRlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIG1vbnRoQ2FsZW5kYXI7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucyxcclxuICBZZWFyc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IHNoaWZ0RGF0ZSwgZm9ybWF0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7IGNyZWF0ZU1hdHJpeCB9IGZyb20gJy4uL3V0aWxzL21hdHJpeC11dGlscyc7XHJcblxyXG5jb25zdCBoZWlnaHQgPSA0O1xyXG5jb25zdCB3aWR0aCA9IDQ7XHJcbmV4cG9ydCBjb25zdCB5ZWFyc1BlckNhbGVuZGFyID0gaGVpZ2h0ICogd2lkdGg7XHJcbmNvbnN0IGluaXRpYWxTaGlmdCA9IChNYXRoLmZsb29yKHllYXJzUGVyQ2FsZW5kYXIgLyAyKSAtIDEpICogLTE7XHJcbmNvbnN0IHNoaWZ0ID0geyB5ZWFyOiAxIH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0WWVhcnNDYWxlbmRhcihcclxuICB2aWV3RGF0ZTogRGF0ZSxcclxuICBmb3JtYXRPcHRpb25zOiBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4pOiBZZWFyc0NhbGVuZGFyVmlld01vZGVsIHtcclxuICBjb25zdCBpbml0aWFsRGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiBpbml0aWFsU2hpZnQgfSk7XHJcbiAgY29uc3QgbWF0cml4T3B0aW9ucyA9IHsgd2lkdGgsIGhlaWdodCwgaW5pdGlhbERhdGUsIHNoaWZ0IH07XHJcbiAgY29uc3QgeWVhcnNNYXRyaXggPSBjcmVhdGVNYXRyaXg8XHJcbiAgICBDYWxlbmRhckNlbGxWaWV3TW9kZWxcclxuICA+KG1hdHJpeE9wdGlvbnMsIGRhdGUgPT4gKHtcclxuICAgIGRhdGUsXHJcbiAgICBsYWJlbDogZm9ybWF0RGF0ZShkYXRlLCBmb3JtYXRPcHRpb25zLnllYXJMYWJlbCwgZm9ybWF0T3B0aW9ucy5sb2NhbGUpXHJcbiAgfSkpO1xyXG4gIGNvbnN0IHllYXJUaXRsZSA9IGZvcm1hdFllYXJSYW5nZVRpdGxlKHllYXJzTWF0cml4LCBmb3JtYXRPcHRpb25zKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHllYXJzOiB5ZWFyc01hdHJpeCxcclxuICAgIG1vbnRoVGl0bGU6ICcnLFxyXG4gICAgeWVhclRpdGxlXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0WWVhclJhbmdlVGl0bGUoXHJcbiAgeWVhcnNNYXRyaXg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbFtdW10sXHJcbiAgZm9ybWF0T3B0aW9uczogRGF0ZXBpY2tlckZvcm1hdE9wdGlvbnNcclxuKTogc3RyaW5nIHtcclxuICBjb25zdCBmcm9tID0gZm9ybWF0RGF0ZShcclxuICAgIHllYXJzTWF0cml4WzBdWzBdLmRhdGUsXHJcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcclxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgKTtcclxuICBjb25zdCB0byA9IGZvcm1hdERhdGUoXHJcbiAgICB5ZWFyc01hdHJpeFtoZWlnaHQgLSAxXVt3aWR0aCAtIDFdLmRhdGUsXHJcbiAgICBmb3JtYXRPcHRpb25zLnllYXJUaXRsZSxcclxuICAgIGZvcm1hdE9wdGlvbnMubG9jYWxlXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIGAke2Zyb219IC0gJHt0b31gO1xyXG59XHJcbiIsImltcG9ydCB7IGlzU2FtZVllYXIsIHNoaWZ0RGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsIENhbGVuZGFyQ2VsbFZpZXdNb2RlbCB9IGZyb20gJy4uL21vZGVscyc7XHJcbmltcG9ydCB7IGlzWWVhckRpc2FibGVkIH0gZnJvbSAnLi4vdXRpbHMvYnMtY2FsZW5kYXItdXRpbHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGFnWWVhcnNDYWxlbmRhck9wdGlvbnMge1xyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgbWluRGF0ZTogRGF0ZTtcclxuICBtYXhEYXRlOiBEYXRlO1xyXG4gIGhvdmVyZWRZZWFyOiBEYXRlO1xyXG4gIGRpc3BsYXlNb250aHM6IG51bWJlcjtcclxuICB5ZWFySW5kZXg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYWdZZWFyc0NhbGVuZGFyKFxyXG4gIHllYXJzQ2FsZW5kYXI6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgb3B0aW9uczogRmxhZ1llYXJzQ2FsZW5kYXJPcHRpb25zXHJcbik6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWwge1xyXG4gIHllYXJzQ2FsZW5kYXIueWVhcnMuZm9yRWFjaChcclxuICAgICh5ZWFyczogQ2FsZW5kYXJDZWxsVmlld01vZGVsW10sIHJvd0luZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgeWVhcnMuZm9yRWFjaCgoeWVhcjogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCB5ZWFySW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzSG92ZXJlZCA9IGlzU2FtZVllYXIoeWVhci5kYXRlLCBvcHRpb25zLmhvdmVyZWRZZWFyKTtcclxuICAgICAgICBjb25zdCBpc0Rpc2FibGVkID1cclxuICAgICAgICAgIG9wdGlvbnMuaXNEaXNhYmxlZCB8fFxyXG4gICAgICAgICAgaXNZZWFyRGlzYWJsZWQoeWVhci5kYXRlLCBvcHRpb25zLm1pbkRhdGUsIG9wdGlvbnMubWF4RGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld01vbnRoID0gT2JqZWN0LmFzc2lnbigvKnt9LCovIHllYXIsIHsgaXNIb3ZlcmVkLCBpc0Rpc2FibGVkIH0pO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHllYXIuaXNIb3ZlcmVkICE9PSBuZXdNb250aC5pc0hvdmVyZWQgfHxcclxuICAgICAgICAgIHllYXIuaXNEaXNhYmxlZCAhPT0gbmV3TW9udGguaXNEaXNhYmxlZFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgeWVhcnNDYWxlbmRhci55ZWFyc1tyb3dJbmRleF1beWVhckluZGV4XSA9IG5ld01vbnRoO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gdG9kbzogYWRkIGNoZWNrIGZvciBsaW5rZWQgY2FsZW5kYXJzXHJcbiAgeWVhcnNDYWxlbmRhci5oaWRlTGVmdEFycm93ID1cclxuICAgIG9wdGlvbnMueWVhckluZGV4ID4gMCAmJiBvcHRpb25zLnllYXJJbmRleCAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xyXG4gIHllYXJzQ2FsZW5kYXIuaGlkZVJpZ2h0QXJyb3cgPVxyXG4gICAgb3B0aW9ucy55ZWFySW5kZXggPCBvcHRpb25zLmRpc3BsYXlNb250aHMgJiZcclxuICAgIG9wdGlvbnMueWVhckluZGV4ICsgMSAhPT0gb3B0aW9ucy5kaXNwbGF5TW9udGhzO1xyXG5cclxuICB5ZWFyc0NhbGVuZGFyLmRpc2FibGVMZWZ0QXJyb3cgPSBpc1llYXJEaXNhYmxlZChcclxuICAgIHNoaWZ0RGF0ZSh5ZWFyc0NhbGVuZGFyLnllYXJzWzBdWzBdLmRhdGUsIHsgeWVhcjogLTEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG4gIGNvbnN0IGkgPSB5ZWFyc0NhbGVuZGFyLnllYXJzLmxlbmd0aCAtIDE7XHJcbiAgY29uc3QgaiA9IHllYXJzQ2FsZW5kYXIueWVhcnNbaV0ubGVuZ3RoIC0gMTtcclxuICB5ZWFyc0NhbGVuZGFyLmRpc2FibGVSaWdodEFycm93ID0gaXNZZWFyRGlzYWJsZWQoXHJcbiAgICBzaGlmdERhdGUoeWVhcnNDYWxlbmRhci55ZWFyc1tpXVtqXS5kYXRlLCB7IHllYXI6IDEgfSksXHJcbiAgICBvcHRpb25zLm1pbkRhdGUsXHJcbiAgICBvcHRpb25zLm1heERhdGVcclxuICApO1xyXG5cclxuICByZXR1cm4geWVhcnNDYWxlbmRhcjtcclxufVxyXG4iLCIvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtZmlsZS1saW5lLWNvdW50XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0YXRlLCBpbml0aWFsRGF0ZXBpY2tlclN0YXRlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLnN0YXRlJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9taW5pLW5ncngnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBjYWxjRGF5c0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2NhbGMtZGF5cy1jYWxlbmRhcic7XHJcbmltcG9ydCB7IGZvcm1hdERheXNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtZGF5cy1jYWxlbmRhcic7XHJcbmltcG9ydCB7IGZsYWdEYXlzQ2FsZW5kYXIgfSBmcm9tICcuLi9lbmdpbmUvZmxhZy1kYXlzLWNhbGVuZGFyJztcclxuaW1wb3J0IHtcclxuICBzZXRGdWxsRGF0ZSxcclxuICBzaGlmdERhdGUsXHJcbiAgaXNBcnJheSxcclxuICBpc0RhdGVWYWxpZCxcclxuICBzdGFydE9mLFxyXG4gIGdldExvY2FsZSxcclxuICBpc0FmdGVyLFxyXG4gIGlzQmVmb3JlXHJcbn0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgY2FuU3dpdGNoTW9kZSB9IGZyb20gJy4uL2VuZ2luZS92aWV3LW1vZGUnO1xyXG5pbXBvcnQgeyBmb3JtYXRNb250aHNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQtbW9udGhzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgZmxhZ01vbnRoc0NhbGVuZGFyIH0gZnJvbSAnLi4vZW5naW5lL2ZsYWctbW9udGhzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgZm9ybWF0WWVhcnNDYWxlbmRhciwgeWVhcnNQZXJDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mb3JtYXQteWVhcnMtY2FsZW5kYXInO1xyXG5pbXBvcnQgeyBmbGFnWWVhcnNDYWxlbmRhciB9IGZyb20gJy4uL2VuZ2luZS9mbGFnLXllYXJzLWNhbGVuZGFyJztcclxuaW1wb3J0IHsgQnNWaWV3TmF2aWdhdGlvbkV2ZW50LCBEYXRlcGlja2VyRm9ybWF0T3B0aW9ucywgQnNEYXRlcGlja2VyVmlld01vZGUgfSBmcm9tICcuLi9tb2RlbHMnO1xyXG5cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY3ljbG9tYXRpYy1jb21wbGV4aXR5ICovXHJcbmV4cG9ydCBmdW5jdGlvbiBic0RhdGVwaWNrZXJSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbERhdGVwaWNrZXJTdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkNBTENVTEFURToge1xyXG4gICAgICByZXR1cm4gY2FsY3VsYXRlUmVkdWNlcihzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLkZPUk1BVDoge1xyXG4gICAgICByZXR1cm4gZm9ybWF0UmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuRkxBRzoge1xyXG4gICAgICByZXR1cm4gZmxhZ1JlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX09GRlNFVDoge1xyXG4gICAgICBjb25zdCBkYXRlID0gc2hpZnREYXRlKHN0YXJ0T2Yoc3RhdGUudmlldy5kYXRlLCAnbW9udGgnKSwgYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICB2aWV3OiB7XHJcbiAgICAgICAgICBtb2RlOiBzdGF0ZS52aWV3Lm1vZGUsXHJcbiAgICAgICAgICBkYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLk5BVklHQVRFX1RPOiB7XHJcbiAgICAgIGNvbnN0IHBheWxvYWQ6IEJzVmlld05hdmlnYXRpb25FdmVudCA9IGFjdGlvbi5wYXlsb2FkO1xyXG5cclxuICAgICAgY29uc3QgZGF0ZSA9IHNldEZ1bGxEYXRlKHN0YXRlLnZpZXcuZGF0ZSwgcGF5bG9hZC51bml0KTtcclxuICAgICAgbGV0IG5ld1N0YXRlO1xyXG4gICAgICBsZXQgbW9kZTogQnNEYXRlcGlja2VyVmlld01vZGU7XHJcbiAgICAgIGlmIChjYW5Td2l0Y2hNb2RlKHBheWxvYWQudmlld01vZGUsIHN0YXRlLm1pbk1vZGUpKSB7XHJcbiAgICAgICAgbW9kZSA9IHBheWxvYWQudmlld01vZGU7XHJcbiAgICAgICAgbmV3U3RhdGUgPSB7IHZpZXc6IHsgZGF0ZSwgbW9kZSB9IH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbW9kZSA9IHN0YXRlLnZpZXcubW9kZTtcclxuICAgICAgICBuZXdTdGF0ZSA9IHsgc2VsZWN0ZWREYXRlOiBkYXRlLCB2aWV3OiB7IGRhdGUsIG1vZGUgfSB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuQ0hBTkdFX1ZJRVdNT0RFOiB7XHJcbiAgICAgIGlmICghY2FuU3dpdGNoTW9kZShhY3Rpb24ucGF5bG9hZCwgc3RhdGUubWluTW9kZSkpIHtcclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgZGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgbW9kZSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHsgdmlldzogeyBkYXRlLCBtb2RlIH0gfTtcclxuXHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgbmV3U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5IT1ZFUjoge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgaG92ZXJlZERhdGU6IGFjdGlvbi5wYXlsb2FkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRUxFQ1Q6IHtcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSB7XHJcbiAgICAgICAgc2VsZWN0ZWREYXRlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB2aWV3OiBzdGF0ZS52aWV3XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xyXG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkIHx8IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcclxuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9PUFRJT05TOiB7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIC8vIHByZXNlcnZlIHZpZXcgbW9kZVxyXG4gICAgICBjb25zdCBtb2RlID0gbmV3U3RhdGUubWluTW9kZSA/IG5ld1N0YXRlLm1pbk1vZGUgOiBzdGF0ZS52aWV3Lm1vZGU7XHJcbiAgICAgIGNvbnN0IF92aWV3RGF0ZSA9IGlzRGF0ZVZhbGlkKG5ld1N0YXRlLnZhbHVlKSAmJiBuZXdTdGF0ZS52YWx1ZVxyXG4gICAgICAgIHx8IGlzQXJyYXkobmV3U3RhdGUudmFsdWUpICYmIGlzRGF0ZVZhbGlkKG5ld1N0YXRlLnZhbHVlWzBdKSAmJiBuZXdTdGF0ZS52YWx1ZVswXVxyXG4gICAgICAgIHx8IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF92aWV3RGF0ZSwgbmV3U3RhdGUubWluRGF0ZSwgbmV3U3RhdGUubWF4RGF0ZSk7XHJcbiAgICAgIG5ld1N0YXRlLnZpZXcgPSB7IG1vZGUsIGRhdGUgfTtcclxuICAgICAgLy8gdXBkYXRlIHNlbGVjdGVkIHZhbHVlXHJcbiAgICAgIGlmIChuZXdTdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgIC8vIGlmIG5ldyB2YWx1ZSBpcyBhcnJheSB3ZSB3b3JrIHdpdGggZGF0ZSByYW5nZVxyXG4gICAgICAgIGlmIChpc0FycmF5KG5ld1N0YXRlLnZhbHVlKSkge1xyXG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWRSYW5nZSA9IG5ld1N0YXRlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbmV3IHZhbHVlIGlzIGEgZGF0ZSAtPiBkYXRlcGlja2VyXHJcbiAgICAgICAgaWYgKG5ld1N0YXRlLnZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgbmV3U3RhdGUuc2VsZWN0ZWREYXRlID0gbmV3U3RhdGUudmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwcm92aWRlZCB2YWx1ZSBpcyBub3Qgc3VwcG9ydGVkIDopXHJcbiAgICAgICAgLy8gbmVlZCB0byByZXBvcnQgaXQgc29tZWhvd1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIG5ld1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkYXRlIHJhbmdlIHBpY2tlclxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFTEVDVF9SQU5HRToge1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IHtcclxuICAgICAgICBzZWxlY3RlZFJhbmdlOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICB2aWV3OiBzdGF0ZS52aWV3XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBjb25zdCBtb2RlID0gc3RhdGUudmlldy5tb2RlO1xyXG4gICAgICBjb25zdCBfZGF0ZSA9IGFjdGlvbi5wYXlsb2FkICYmIGFjdGlvbi5wYXlsb2FkWzBdIHx8IHN0YXRlLnZpZXcuZGF0ZTtcclxuICAgICAgY29uc3QgZGF0ZSA9IGdldFZpZXdEYXRlKF9kYXRlLCBzdGF0ZS5taW5EYXRlLCBzdGF0ZS5tYXhEYXRlKTtcclxuICAgICAgbmV3U3RhdGUudmlldyA9IHsgbW9kZSwgZGF0ZSB9O1xyXG5cclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCBuZXdTdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBCc0RhdGVwaWNrZXJBY3Rpb25zLlNFVF9NSU5fREFURToge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgICBtaW5EYXRlOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhc2UgQnNEYXRlcGlja2VyQWN0aW9ucy5TRVRfTUFYX0RBVEU6IHtcclxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XHJcbiAgICAgICAgbWF4RGF0ZTogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjYXNlIEJzRGF0ZXBpY2tlckFjdGlvbnMuU0VUX0lTX0RJU0FCTEVEOiB7XHJcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICAgIGlzRGlzYWJsZWQ6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVJlZHVjZXIoc3RhdGU6IEJzRGF0ZXBpY2tlclN0YXRlKTogQnNEYXRlcGlja2VyU3RhdGUge1xyXG4gIC8vIGhvdyBtYW55IGNhbGVuZGFyc1xyXG4gIGNvbnN0IGRpc3BsYXlNb250aHMgPSBzdGF0ZS5kaXNwbGF5TW9udGhzO1xyXG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxyXG4gIGxldCB2aWV3RGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcclxuICAgIHN0YXRlLm1vbnRoVmlld09wdGlvbnMuZmlyc3REYXlPZldlZWsgPSBnZXRMb2NhbGUoc3RhdGUubG9jYWxlKS5maXJzdERheU9mV2VlaygpO1xyXG4gICAgY29uc3QgbW9udGhzTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XHJcbiAgICBmb3IgKGxldCBtb250aEluZGV4ID0gMDsgbW9udGhJbmRleCA8IGRpc3BsYXlNb250aHM7IG1vbnRoSW5kZXgrKykge1xyXG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXHJcbiAgICAgIG1vbnRoc01vZGVsW21vbnRoSW5kZXhdID0gY2FsY0RheXNDYWxlbmRhcihcclxuICAgICAgICB2aWV3RGF0ZSxcclxuICAgICAgICBzdGF0ZS5tb250aFZpZXdPcHRpb25zXHJcbiAgICAgICk7XHJcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IG1vbnRoOiAxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBtb250aHNNb2RlbCB9KTtcclxuICB9XHJcblxyXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgIGNvbnN0IG1vbnRoc0NhbGVuZGFyID0gbmV3IEFycmF5KGRpc3BsYXlNb250aHMpO1xyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xyXG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcclxuICAgICAgY2FsZW5kYXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxyXG4gICAgICBtb250aHNDYWxlbmRhcltjYWxlbmRhckluZGV4XSA9IGZvcm1hdE1vbnRoc0NhbGVuZGFyKFxyXG4gICAgICAgIHZpZXdEYXRlLFxyXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXHJcbiAgICAgICk7XHJcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IDEgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IG1vbnRoc0NhbGVuZGFyIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XHJcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyTW9kZWwgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XHJcblxyXG4gICAgZm9yIChcclxuICAgICAgbGV0IGNhbGVuZGFySW5kZXggPSAwO1xyXG4gICAgICBjYWxlbmRhckluZGV4IDwgZGlzcGxheU1vbnRocztcclxuICAgICAgY2FsZW5kYXJJbmRleCsrXHJcbiAgICApIHtcclxuICAgICAgLy8gdG9kbzogZm9yIHVubGlua2VkIGNhbGVuZGFycyBpdCB3aWxsIGJlIGhhcmRlclxyXG4gICAgICB5ZWFyc0NhbGVuZGFyTW9kZWxbY2FsZW5kYXJJbmRleF0gPSBmb3JtYXRZZWFyc0NhbGVuZGFyKFxyXG4gICAgICAgIHZpZXdEYXRlLFxyXG4gICAgICAgIGdldEZvcm1hdE9wdGlvbnMoc3RhdGUpXHJcbiAgICAgICk7XHJcbiAgICAgIHZpZXdEYXRlID0gc2hpZnREYXRlKHZpZXdEYXRlLCB7IHllYXI6IHllYXJzUGVyQ2FsZW5kYXIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJNb2RlbCB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0UmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiBBY3Rpb24pOiBCc0RhdGVwaWNrZXJTdGF0ZSB7XHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ2RheScpIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZE1vbnRocyA9IHN0YXRlLm1vbnRoc01vZGVsLm1hcCgobW9udGgsIG1vbnRoSW5kZXgpID0+XHJcbiAgICAgIGZvcm1hdERheXNDYWxlbmRhcihtb250aCwgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSksIG1vbnRoSW5kZXgpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwgeyBmb3JtYXR0ZWRNb250aHMgfSk7XHJcbiAgfVxyXG5cclxuICAvLyBob3cgbWFueSBjYWxlbmRhcnNcclxuICBjb25zdCBkaXNwbGF5TW9udGhzID0gc3RhdGUuZGlzcGxheU1vbnRocztcclxuICAvLyBjaGVjayBpbml0aWFsIHJlbmRlcmluZ1xyXG4gIC8vIHVzZSBzZWxlY3RlZCBkYXRlIG9uIGluaXRpYWwgcmVuZGVyaW5nIGlmIHNldFxyXG4gIGxldCB2aWV3RGF0ZSA9IHN0YXRlLnZpZXcuZGF0ZTtcclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgY29uc3QgbW9udGhzQ2FsZW5kYXIgPSBuZXcgQXJyYXkoZGlzcGxheU1vbnRocyk7XHJcbiAgICBmb3IgKFxyXG4gICAgICBsZXQgY2FsZW5kYXJJbmRleCA9IDA7XHJcbiAgICAgIGNhbGVuZGFySW5kZXggPCBkaXNwbGF5TW9udGhzO1xyXG4gICAgICBjYWxlbmRhckluZGV4KytcclxuICAgICkge1xyXG4gICAgICAvLyB0b2RvOiBmb3IgdW5saW5rZWQgY2FsZW5kYXJzIGl0IHdpbGwgYmUgaGFyZGVyXHJcbiAgICAgIG1vbnRoc0NhbGVuZGFyW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0TW9udGhzQ2FsZW5kYXIoXHJcbiAgICAgICAgdmlld0RhdGUsXHJcbiAgICAgICAgZ2V0Rm9ybWF0T3B0aW9ucyhzdGF0ZSlcclxuICAgICAgKTtcclxuICAgICAgdmlld0RhdGUgPSBzaGlmdERhdGUodmlld0RhdGUsIHsgeWVhcjogMSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgbW9udGhzQ2FsZW5kYXIgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAneWVhcicpIHtcclxuICAgIGNvbnN0IHllYXJzQ2FsZW5kYXJNb2RlbCA9IG5ldyBBcnJheShkaXNwbGF5TW9udGhzKTtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBjYWxlbmRhckluZGV4ID0gMDtcclxuICAgICAgY2FsZW5kYXJJbmRleCA8IGRpc3BsYXlNb250aHM7XHJcbiAgICAgIGNhbGVuZGFySW5kZXgrK1xyXG4gICAgKSB7XHJcbiAgICAgIC8vIHRvZG86IGZvciB1bmxpbmtlZCBjYWxlbmRhcnMgaXQgd2lsbCBiZSBoYXJkZXJcclxuICAgICAgeWVhcnNDYWxlbmRhck1vZGVsW2NhbGVuZGFySW5kZXhdID0gZm9ybWF0WWVhcnNDYWxlbmRhcihcclxuICAgICAgICB2aWV3RGF0ZSxcclxuICAgICAgICBnZXRGb3JtYXRPcHRpb25zKHN0YXRlKVxyXG4gICAgICApO1xyXG4gICAgICB2aWV3RGF0ZSA9IHNoaWZ0RGF0ZSh2aWV3RGF0ZSwgeyB5ZWFyOiAxNiB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgeWVhcnNDYWxlbmRhck1vZGVsIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmbGFnUmVkdWNlcihzdGF0ZTogQnNEYXRlcGlja2VyU3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjogQWN0aW9uKTogQnNEYXRlcGlja2VyU3RhdGUge1xyXG4gIGlmIChzdGF0ZS52aWV3Lm1vZGUgPT09ICdkYXknKSB7XHJcbiAgICBjb25zdCBmbGFnZ2VkTW9udGhzID0gc3RhdGUuZm9ybWF0dGVkTW9udGhzLm1hcChcclxuICAgICAgKGZvcm1hdHRlZE1vbnRoLCBtb250aEluZGV4KSA9PlxyXG4gICAgICAgIGZsYWdEYXlzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcclxuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxyXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcclxuICAgICAgICAgIGRheXNEaXNhYmxlZDogc3RhdGUuZGF5c0Rpc2FibGVkLFxyXG4gICAgICAgICAgZGF0ZXNEaXNhYmxlZDogc3RhdGUuZGF0ZXNEaXNhYmxlZCxcclxuICAgICAgICAgIGhvdmVyZWREYXRlOiBzdGF0ZS5ob3ZlcmVkRGF0ZSxcclxuICAgICAgICAgIHNlbGVjdGVkRGF0ZTogc3RhdGUuc2VsZWN0ZWREYXRlLFxyXG4gICAgICAgICAgc2VsZWN0ZWRSYW5nZTogc3RhdGUuc2VsZWN0ZWRSYW5nZSxcclxuICAgICAgICAgIGRpc3BsYXlNb250aHM6IHN0YXRlLmRpc3BsYXlNb250aHMsXHJcbiAgICAgICAgICBtb250aEluZGV4XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IGZsYWdnZWRNb250aHMgfSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc3RhdGUudmlldy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICBjb25zdCBmbGFnZ2VkTW9udGhzQ2FsZW5kYXIgPSBzdGF0ZS5tb250aHNDYWxlbmRhci5tYXAoXHJcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgbW9udGhJbmRleCkgPT5cclxuICAgICAgICBmbGFnTW9udGhzQ2FsZW5kYXIoZm9ybWF0dGVkTW9udGgsIHtcclxuICAgICAgICAgIGlzRGlzYWJsZWQ6IHN0YXRlLmlzRGlzYWJsZWQsXHJcbiAgICAgICAgICBtaW5EYXRlOiBzdGF0ZS5taW5EYXRlLFxyXG4gICAgICAgICAgbWF4RGF0ZTogc3RhdGUubWF4RGF0ZSxcclxuICAgICAgICAgIGhvdmVyZWRNb250aDogc3RhdGUuaG92ZXJlZE1vbnRoLFxyXG4gICAgICAgICAgZGlzcGxheU1vbnRoczogc3RhdGUuZGlzcGxheU1vbnRocyxcclxuICAgICAgICAgIG1vbnRoSW5kZXhcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgZmxhZ2dlZE1vbnRoc0NhbGVuZGFyIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLnZpZXcubW9kZSA9PT0gJ3llYXInKSB7XHJcbiAgICBjb25zdCB5ZWFyc0NhbGVuZGFyRmxhZ2dlZCA9IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbC5tYXAoXHJcbiAgICAgIChmb3JtYXR0ZWRNb250aCwgeWVhckluZGV4KSA9PlxyXG4gICAgICAgIGZsYWdZZWFyc0NhbGVuZGFyKGZvcm1hdHRlZE1vbnRoLCB7XHJcbiAgICAgICAgICBpc0Rpc2FibGVkOiBzdGF0ZS5pc0Rpc2FibGVkLFxyXG4gICAgICAgICAgbWluRGF0ZTogc3RhdGUubWluRGF0ZSxcclxuICAgICAgICAgIG1heERhdGU6IHN0YXRlLm1heERhdGUsXHJcbiAgICAgICAgICBob3ZlcmVkWWVhcjogc3RhdGUuaG92ZXJlZFllYXIsXHJcbiAgICAgICAgICBkaXNwbGF5TW9udGhzOiBzdGF0ZS5kaXNwbGF5TW9udGhzLFxyXG4gICAgICAgICAgeWVhckluZGV4XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7IHllYXJzQ2FsZW5kYXJGbGFnZ2VkIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JtYXRPcHRpb25zKHN0YXRlOiBCc0RhdGVwaWNrZXJTdGF0ZSk6IERhdGVwaWNrZXJGb3JtYXRPcHRpb25zIHtcclxuICByZXR1cm4ge1xyXG4gICAgbG9jYWxlOiBzdGF0ZS5sb2NhbGUsXHJcblxyXG4gICAgbW9udGhUaXRsZTogc3RhdGUubW9udGhUaXRsZSxcclxuICAgIHllYXJUaXRsZTogc3RhdGUueWVhclRpdGxlLFxyXG5cclxuICAgIGRheUxhYmVsOiBzdGF0ZS5kYXlMYWJlbCxcclxuICAgIG1vbnRoTGFiZWw6IHN0YXRlLm1vbnRoTGFiZWwsXHJcbiAgICB5ZWFyTGFiZWw6IHN0YXRlLnllYXJMYWJlbCxcclxuXHJcbiAgICB3ZWVrTnVtYmVyczogc3RhdGUud2Vla051bWJlcnNcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogaWYgdmlldyBkYXRlIGlzIHByb3ZpZGVkIChic1ZhbHVlfG5nTW9kZWwpIGl0IHNob3VsZCBiZSBzaG93blxyXG4gKiBpZiB2aWV3IGRhdGUgaXMgbm90IHByb3ZpZGVyOlxyXG4gKiBpZiBtaW5EYXRlPmN1cnJlbnREYXRlIChkZWZhdWx0IHZpZXcgdmFsdWUpLCBzaG93IG1pbkRhdGVcclxuICogaWYgbWF4RGF0ZTxjdXJyZW50RGF0ZShkZWZhdWx0IHZpZXcgdmFsdWUpIHNob3cgbWF4RGF0ZVxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0Vmlld0RhdGUodmlld0RhdGU6IERhdGUgfCBEYXRlW10sIG1pbkRhdGU6IERhdGUsIG1heERhdGU6IERhdGUpIHtcclxuICBjb25zdCBfZGF0ZSA9IEFycmF5LmlzQXJyYXkodmlld0RhdGUpID8gdmlld0RhdGVbMF0gOiB2aWV3RGF0ZTtcclxuXHJcbiAgaWYgKG1pbkRhdGUgJiYgaXNBZnRlcihtaW5EYXRlLCBfZGF0ZSwgJ2RheScpKSB7XHJcbiAgICByZXR1cm4gbWluRGF0ZTtcclxuICB9XHJcblxyXG4gIGlmIChtYXhEYXRlICYmIGlzQmVmb3JlKG1heERhdGUsIF9kYXRlLCAnZGF5JykpIHtcclxuICAgIHJldHVybiBtYXhEYXRlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIF9kYXRlO1xyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWluaVN0b3JlLCBBY3Rpb24sIE1pbmlTdGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RhdGUsIGluaXRpYWxEYXRlcGlja2VyU3RhdGUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuc3RhdGUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYnNEYXRlcGlja2VyUmVkdWNlciB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5yZWR1Y2VyJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlclN0b3JlIGV4dGVuZHMgTWluaVN0b3JlPEJzRGF0ZXBpY2tlclN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBjb25zdCBfZGlzcGF0Y2hlciA9IG5ldyBCZWhhdmlvclN1YmplY3Q8QWN0aW9uPih7XHJcbiAgICAgIHR5cGU6ICdbZGF0ZXBpY2tlcl0gZGlzcGF0Y2hlciBpbml0J1xyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzdGF0ZSA9IG5ldyBNaW5pU3RhdGU8QnNEYXRlcGlja2VyU3RhdGU+KFxyXG4gICAgICBpbml0aWFsRGF0ZXBpY2tlclN0YXRlLFxyXG4gICAgICBfZGlzcGF0Y2hlcixcclxuICAgICAgYnNEYXRlcGlja2VyUmVkdWNlclxyXG4gICAgKTtcclxuICAgIHN1cGVyKF9kaXNwYXRjaGVyLCBic0RhdGVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRhdGVwaWNrZXItY29udGFpbmVyJyxcclxuICBwcm92aWRlcnM6IFtCc0RhdGVwaWNrZXJTdG9yZSwgQnNEYXRlcGlja2VyRWZmZWN0c10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknLFxyXG4gICAgc3R5bGU6ICdwb3NpdGlvbjogYWJzb2x1dGU7IGRpc3BsYXk6IGJsb2NrOycsXHJcbiAgICByb2xlOiAnZGlhbG9nJyxcclxuICAgICdhcmlhLWxhYmVsJzogJ2NhbGVuZGFyJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldFZhbHVlKHZhbHVlKTtcclxuICB9XHJcbiAgdmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuXHJcbiAgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcclxuICAgIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSxcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fZWZmZWN0cyA9IF9lZmZlY3RzO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPSB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGg7XHJcbiAgICB0aGlzLmNvbnRhaW5lckNsYXNzID0gdGhpcy5fY29uZmlnLmNvbnRhaW5lckNsYXNzO1xyXG4gICAgdGhpcy5fZWZmZWN0c1xyXG4gICAgICAuaW5pdCh0aGlzLl9zdG9yZSlcclxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcclxuICAgICAgLnNldE9wdGlvbnModGhpcy5fY29uZmlnKVxyXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcclxuICAgICAgLnNldEJpbmRpbmdzKHRoaXMpXHJcbiAgICAgIC8vIHNldCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxyXG4gICAgICAucmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTtcclxuXHJcbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXHJcbiAgICAvLyBvbiBzZWxlY3RlZCBkYXRlIGNoYW5nZVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICAgICAgLnNlbGVjdCgoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2VsZWN0ZWREYXRlKVxyXG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55ICovXHJcbiAgICAgICAgLnN1YnNjcmliZSgoZGF0ZTogYW55KSA9PiB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSkpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZGF5U2VsZWN0SGFuZGxlcihkYXk6IERheVZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA/IGRheS5pc0Rpc2FibGVkIDogKGRheS5pc090aGVyTW9udGggfHwgZGF5LmlzRGlzYWJsZWQpO1xyXG5cclxuICAgIGlmIChpc0Rpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdChkYXkuZGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZWZmZWN0cy5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJWaWV3TW9kZSB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXBpY2tlcl0nLFxyXG4gIGV4cG9ydEFzOiAnYnNEYXRlcGlja2VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgLyoqXHJcbiAgICogUGxhY2VtZW50IG9mIGEgZGF0ZXBpY2tlci4gQWNjZXB0czogXCJ0b3BcIiwgXCJib3R0b21cIiwgXCJsZWZ0XCIsIFwicmlnaHRcIlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogJ3RvcCcgfCAnYm90dG9tJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgZXZlbnRzIHRoYXQgc2hvdWxkIHRyaWdnZXIuIFN1cHBvcnRzIGEgc3BhY2Ugc2VwYXJhdGVkIGxpc3Qgb2ZcclxuICAgKiBldmVudCBuYW1lcy5cclxuICAgKi9cclxuICBASW5wdXQoKSB0cmlnZ2VycyA9ICdjbGljayc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2UgZGF0ZXBpY2tlciBvbiBvdXRzaWRlIGNsaWNrXHJcbiAgICovXHJcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRhdGVwaWNrZXIgc2hvdWxkIGJlIGFwcGVuZGVkIHRvLlxyXG4gICAqIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIFwiYm9keVwiLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lciA9ICdib2R5JztcclxuXHJcbiAgQElucHV0KCkgb3V0c2lkZUVzYyA9IHRydWU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgd2hldGhlciBvciBub3QgdGhlIGRhdGVwaWNrZXIgaXMgY3VycmVudGx5IGJlaW5nIHNob3duXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBzaG93blxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXBpY2tlciBpcyBoaWRkZW5cclxuICAgKi9cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgQE91dHB1dCgpIG9uSGlkZGVuOiBFdmVudEVtaXR0ZXI8YW55PjtcclxuXHJcbiAgX2JzVmFsdWU6IERhdGU7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJDb25maWc+O1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIncyBjb250ZW50IGlzIGVuYWJsZWQgb3Igbm90XHJcbiAgICovXHJcbiAgQElucHV0KCkgaXNEaXNhYmxlZDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBNaW5pbXVtIGRhdGUgd2hpY2ggaXMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cclxuICAgKi9cclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xyXG4gIC8qKlxyXG4gICAqIE1heGltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1pbmltdW0gdmlldyBtb2RlIDogZGF5LCBtb250aCwgb3IgeWVhclxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1pbk1vZGU6IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlIENlcnRhaW4gZGF5cyBpbiB0aGUgd2Vla1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGRheXNEaXNhYmxlZDogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgc3BlY2lmaWMgZGF0ZXNcclxuICAgKi9cclxuICBASW5wdXQoKSBkYXRlc0Rpc2FibGVkOiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgd2hlbiBkYXRlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBwcm90ZWN0ZWQgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXI6IENvbXBvbmVudExvYWRlcjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xyXG4gIHByaXZhdGUgX2RhdGVwaWNrZXJSZWY6IENvbXBvbmVudFJlZjxCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxyXG4gICAgICAgICAgICAgIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xyXG4gICAgLy8gdG9kbzogYXNzaWduIG9ubHkgc3Vic2V0IG9mIGZpZWxkc1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9jb25maWcpO1xyXG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgX2VsZW1lbnRSZWYsXHJcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBfcmVuZGVyZXJcclxuICAgICk7XHJcbiAgICB0aGlzLm9uU2hvd24gPSB0aGlzLl9kYXRlcGlja2VyLm9uU2hvd247XHJcbiAgICB0aGlzLm9uSGlkZGVuID0gdGhpcy5fZGF0ZXBpY2tlci5vbkhpZGRlbjtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGF0ZXBpY2tlci5saXN0ZW4oe1xyXG4gICAgICBvdXRzaWRlQ2xpY2s6IHRoaXMub3V0c2lkZUNsaWNrLFxyXG4gICAgICBvdXRzaWRlRXNjOiB0aGlzLm91dHNpZGVFc2MsXHJcbiAgICAgIHRyaWdnZXJzOiB0aGlzLnRyaWdnZXJzLFxyXG4gICAgICBzaG93OiAoKSA9PiB0aGlzLnNob3coKVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNldENvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9kYXRlcGlja2VyUmVmIHx8ICF0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5taW5EYXRlKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWluRGF0ZSA9IHRoaXMubWluRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5tYXhEYXRlKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UubWF4RGF0ZSA9IHRoaXMubWF4RGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5kYXlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXlzRGlzYWJsZWQgPSB0aGlzLmRheXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5kYXRlc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuZGF0ZXNEaXNhYmxlZCA9IHRoaXMuZGF0ZXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY2hhbmdlcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UuaXNEaXNhYmxlZCA9IHRoaXMuaXNEaXNhYmxlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIGRhdGVwaWNrZXIuXHJcbiAgICovXHJcbiAgc2hvdygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9kYXRlcGlja2VyLmlzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2V0Q29uZmlnKCk7XHJcblxyXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRGF0ZXBpY2tlckNvbmZpZywgdXNlVmFsdWU6IHRoaXMuX2NvbmZpZ30pXHJcbiAgICAgIC5hdHRhY2goQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAudG8odGhpcy5jb250YWluZXIpXHJcbiAgICAgIC5wb3NpdGlvbih7YXR0YWNobWVudDogdGhpcy5wbGFjZW1lbnR9KVxyXG4gICAgICAuc2hvdyh7cGxhY2VtZW50OiB0aGlzLnBsYWNlbWVudH0pO1xyXG5cclxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIGV4dGVybmFsIHNvdXJjZSAobW9kZWwgLT4gdmlldylcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGUpID0+IHtcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5ic1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIGRhdGVwaWNrZXIuXHJcbiAgICovXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nXHJcbiAgICogb2YgdGhlIGRhdGVwaWNrZXIuXHJcbiAgICovXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBjb25maWcgZm9yIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBzZXRDb25maWcoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9jb25maWcsIHRoaXMuYnNDb25maWcsIHtcclxuICAgICAgdmFsdWU6IHRoaXMuX2JzVmFsdWUsXHJcbiAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcclxuICAgICAgbWluRGF0ZTogdGhpcy5taW5EYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5taW5EYXRlLFxyXG4gICAgICBtYXhEYXRlOiB0aGlzLm1heERhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1heERhdGUsXHJcbiAgICAgIGRheXNEaXNhYmxlZDogdGhpcy5kYXlzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRheXNEaXNhYmxlZCxcclxuICAgICAgZGF0ZXNEaXNhYmxlZDogdGhpcy5kYXRlc0Rpc2FibGVkIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5kYXRlc0Rpc2FibGVkLFxyXG4gICAgICBtaW5Nb2RlOiB0aGlzLm1pbk1vZGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbk1vZGVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyLmRpc3Bvc2UoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyBleHRlbmRzIEJzRGF0ZXBpY2tlckNvbmZpZyB7IH1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXInLFxyXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXHJcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXHJcbiAgICBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxyXG4gICAgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgIF9wb3NpdGlvbmluZ1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoX2NvbmZpZywgX3N0b3JlLCBfYWN0aW9ucywgX2VmZmVjdHMsIF9wb3NpdGlvbmluZ1NlcnZpY2UpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudFJlZiwgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyLCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlciwgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItaW5saW5lLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1pbmxpbmUnLFxyXG4gIGV4cG9ydEFzOiAnYnNEYXRlcGlja2VySW5saW5lJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgX2JzVmFsdWU6IERhdGU7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbCB2YWx1ZSBvZiBkYXRlcGlja2VyXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuX2JzVmFsdWUgPT09IHZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2JzVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbmZpZyBvYmplY3QgZm9yIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBASW5wdXQoKSBic0NvbmZpZzogUGFydGlhbDxCc0RhdGVwaWNrZXJJbmxpbmVDb25maWc+O1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVwaWNrZXIgaXMgZW5hYmxlZCBvciBub3RcclxuICAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xyXG4gIC8qKlxyXG4gICAqIEVtaXRzIHdoZW4gZGF0ZXBpY2tlciB2YWx1ZSBoYXMgYmVlbiBjaGFuZ2VkXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIGJzVmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG5cclxuICBwcml2YXRlIF9kYXRlcGlja2VyOiBDb21wb25lbnRMb2FkZXI8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9kYXRlcGlja2VyUmVmOiBDb21wb25lbnRSZWY8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIF9jb25maWc6IEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgIGNpczogQ29tcG9uZW50TG9hZGVyRmFjdG9yeSkge1xyXG4gICAgLy8gdG9kbzogYXNzaWduIG9ubHkgc3Vic2V0IG9mIGZpZWxkc1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCB0aGlzLl9jb25maWcpO1xyXG4gICAgdGhpcy5fZGF0ZXBpY2tlciA9IGNpcy5jcmVhdGVMb2FkZXI8QnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50PihcclxuICAgICAgX2VsZW1lbnRSZWYsXHJcbiAgICAgIF92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICBfcmVuZGVyZXJcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q29uZmlnKCk7XHJcblxyXG4gICAgdGhpcy5fZGF0ZXBpY2tlclJlZiA9IHRoaXMuX2RhdGVwaWNrZXJcclxuICAgICAgLnByb3ZpZGUoe3Byb3ZpZGU6IEJzRGF0ZXBpY2tlckNvbmZpZywgdXNlVmFsdWU6IHRoaXMuX2NvbmZpZ30pXHJcbiAgICAgIC5hdHRhY2goQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50KVxyXG4gICAgICAudG8odGhpcy5fZWxlbWVudFJlZilcclxuICAgICAgLnNob3coKTtcclxuXHJcbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBwaWNrZXIgKHZpZXcgLT4gbW9kZWwpXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UudmFsdWVDaGFuZ2Uuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZSkgPT4ge1xyXG4gICAgICAgIHRoaXMuYnNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fZGF0ZXBpY2tlclJlZiB8fCAhdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWluRGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1pbkRhdGUgPSB0aGlzLm1pbkRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubWF4RGF0ZSkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLm1heERhdGUgPSB0aGlzLm1heERhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuZGF0ZXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmRhdGVzRGlzYWJsZWQgPSB0aGlzLmRhdGVzRGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLmlzRGlzYWJsZWQgPSB0aGlzLmlzRGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29uZmlnIGZvciBkYXRlcGlja2VyXHJcbiAgICovXHJcbiAgc2V0Q29uZmlnKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fY29uZmlnLCB0aGlzLmJzQ29uZmlnLCB7XHJcbiAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxyXG4gICAgICBpc0Rpc2FibGVkOiB0aGlzLmlzRGlzYWJsZWQsXHJcbiAgICAgIG1pbkRhdGU6IHRoaXMubWluRGF0ZSB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcubWluRGF0ZSxcclxuICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxyXG4gICAgICBkYXRlc0Rpc2FibGVkOiB0aGlzLmRhdGVzRGlzYWJsZWQgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLmRhdGVzRGlzYWJsZWRcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogYW55IHtcclxuICAgIHRoaXMuX2RhdGVwaWNrZXIuZGlzcG9zZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBQcm92aWRlcixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWJzdHJhY3RDb250cm9sLFxyXG4gIENvbnRyb2xWYWx1ZUFjY2Vzc29yLFxyXG4gIE5HX1ZBTElEQVRPUlMsXHJcbiAgTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgVmFsaWRhdGlvbkVycm9ycyxcclxuICBWYWxpZGF0b3JcclxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHBhcnNlRGF0ZSxcclxuICBmb3JtYXREYXRlLFxyXG4gIGdldExvY2FsZSxcclxuICBpc0FmdGVyLFxyXG4gIGlzQmVmb3JlLFxyXG4gIGlzRGF0ZSxcclxuICBpc0RhdGVWYWxpZFxyXG59IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XHJcblxyXG5jb25zdCBCU19EQVRFUElDS0VSX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgQlNfREFURVBJQ0tFUl9WQUxJREFUT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiBgaW5wdXRbYnNEYXRlcGlja2VyXWAsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjaGFuZ2UpJzogJ29uQ2hhbmdlKCRldmVudCknLFxyXG4gICAgJyhrZXl1cC5lc2MpJzogJ2hpZGUoKScsXHJcbiAgICAnKGJsdXIpJzogJ29uQmx1cigpJ1xyXG4gIH0sXHJcbiAgcHJvdmlkZXJzOiBbQlNfREFURVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiwgQlNfREFURVBJQ0tFUl9WQUxJREFUT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZVxyXG4gIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIFZhbGlkYXRvciB7XHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLXZhcmlhYmxlICovXHJcbiAgcHJpdmF0ZSBfdmFsaWRhdG9yQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcGlja2VyRGlyZWN0aXZlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2xvY2FsZVNlcnZpY2U6IEJzTG9jYWxlU2VydmljZSxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgLy8gdXBkYXRlIGlucHV0IHZhbHVlIG9uIGRhdGVwaWNrZXIgdmFsdWUgdXBkYXRlXHJcbiAgICB0aGlzLl9waWNrZXIuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICBpZiAodGhpcy5fdmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gbG9jYWxlIGNoYW5nZVxyXG4gICAgdGhpcy5fbG9jYWxlU2VydmljZS5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5fc2V0SW5wdXRWYWx1ZSh0aGlzLl92YWx1ZSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9zZXRJbnB1dFZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbml0aWFsRGF0ZSA9ICF2YWx1ZSA/ICcnXHJcbiAgICAgIDogZm9ybWF0RGF0ZSh2YWx1ZSwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpO1xyXG5cclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIGluaXRpYWxEYXRlKTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgdGhpcy53cml0ZVZhbHVlKChldmVudC50YXJnZXQgYXMgYW55KS52YWx1ZSk7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLl92YWx1ZSk7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgIGNvbnN0IF92YWx1ZTogRGF0ZSB8IHN0cmluZyA9IGMudmFsdWU7XHJcblxyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBwcmVmZXItc3dpdGNoICovXHJcbiAgICBpZiAoX3ZhbHVlID09PSBudWxsIHx8IF92YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IF92YWx1ZSA9PT0gJycpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRGF0ZShfdmFsdWUpKSB7XHJcbiAgICAgIGNvbnN0IF9pc0RhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZSk7XHJcbiAgICAgIGlmICghX2lzRGF0ZVZhbGlkKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IGludmFsaWQ6IF92YWx1ZSB9IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1pbkRhdGUgJiYgaXNCZWZvcmUoX3ZhbHVlLCB0aGlzLl9waWNrZXIubWluRGF0ZSwgJ2RhdGUnKSkge1xyXG4gICAgICAgIHJldHVybiB7IGJzRGF0ZTogeyBtaW5EYXRlOiB0aGlzLl9waWNrZXIubWluRGF0ZSB9IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl9waWNrZXIgJiYgdGhpcy5fcGlja2VyLm1heERhdGUgJiYgaXNBZnRlcihfdmFsdWUsIHRoaXMuX3BpY2tlci5tYXhEYXRlLCAnZGF0ZScpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IG1heERhdGU6IHRoaXMuX3BpY2tlci5tYXhEYXRlIH0gfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgc3RyaW5nKSB7XHJcbiAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IF9sb2NhbGVLZXkgPSB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGU7XHJcbiAgICAgIGNvbnN0IF9sb2NhbGUgPSBnZXRMb2NhbGUoX2xvY2FsZUtleSk7XHJcbiAgICAgIGlmICghX2xvY2FsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcclxuICAgICAgICAgIGBMb2NhbGUgXCIke19sb2NhbGVLZXl9XCIgaXMgbm90IGRlZmluZWQsIHBsZWFzZSBhZGQgaXQgd2l0aCBcImRlZmluZUxvY2FsZSguLi4pXCJgXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl92YWx1ZSA9IHBhcnNlRGF0ZSh2YWx1ZSwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlID0gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIGlmIChpc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoKSB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLl9waWNrZXIuaGlkZSgpO1xyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCkuYmx1cigpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcgZXh0ZW5kcyBCc0RhdGVwaWNrZXJDb25maWcge1xyXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXHJcbiAgZGlzcGxheU1vbnRocyA9IDI7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2Jhc2UvYnMtZGF0ZXBpY2tlci1jb250YWluZXInO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IERheVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcblxyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRhdGVyYW5nZXBpY2tlci1jb250YWluZXInLFxyXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXHJcbiAgICBzdHlsZTogJ3Bvc2l0aW9uOiBhYnNvbHV0ZTsgZGlzcGxheTogYmxvY2s7JyxcclxuICAgIHJvbGU6ICdkaWFsb2cnLFxyXG4gICAgJ2FyaWEtbGFiZWwnOiAnY2FsZW5kYXInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZVtdKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzLnNldFJhbmdlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuXHJcbiAgX3JhbmdlU3RhY2s6IERhdGVbXSA9IFtdO1xyXG4gIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHMsXHJcbiAgICBwcml2YXRlIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXHJcbiAgICBwcml2YXRlIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXHJcbiAgICBwcml2YXRlIF9wb3NpdGlvblNlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuX2VmZmVjdHMgPSBfZWZmZWN0cztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xyXG4gICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICBmbGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuYWRhcHRpdmVQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jb250YWluZXJDbGFzcztcclxuICAgIHRoaXMuaXNPdGhlck1vbnRoc0FjdGl2ZSA9IHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aDtcclxuICAgIHRoaXMuX2VmZmVjdHNcclxuICAgICAgLmluaXQodGhpcy5fc3RvcmUpXHJcbiAgICAgIC8vIGludGlhbCBzdGF0ZSBvcHRpb25zXHJcbiAgICAgIC8vIHRvZG86IGZpeCB0aGlzLCBzcGxpdCBjb25maWdzXHJcbiAgICAgIC5zZXRPcHRpb25zKHRoaXMuX2NvbmZpZylcclxuICAgICAgLy8gZGF0YSBiaW5kaW5nIHZpZXcgLS0+IG1vZGVsXHJcbiAgICAgIC5zZXRCaW5kaW5ncyh0aGlzKVxyXG4gICAgICAvLyBzZXQgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgLnNldEV2ZW50SGFuZGxlcnModGhpcylcclxuICAgICAgLnJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk7XHJcblxyXG4gICAgLy8gdG9kbzogbW92ZSBpdCBzb21ld2hlcmUgZWxzZVxyXG4gICAgLy8gb24gc2VsZWN0ZWQgZGF0ZSBjaGFuZ2VcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXHJcbiAgICAgICAgLnN1YnNjcmliZShkYXRlID0+IHRoaXMudmFsdWVDaGFuZ2UuZW1pdChkYXRlKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBkYXlTZWxlY3RIYW5kbGVyKGRheTogRGF5Vmlld01vZGVsKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID8gZGF5LmlzRGlzYWJsZWQgOiAoZGF5LmlzT3RoZXJNb250aCB8fCBkYXkuaXNEaXNhYmxlZCk7XHJcblxyXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlmIG9ubHkgb25lIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZFxyXG4gICAgLy8gYW5kIHVzZXIgY2xpY2tzIG9uIHByZXZpb3VzIGRhdGVcclxuICAgIC8vIHN0YXJ0IHNlbGVjdGlvbiBmcm9tIG5ldyBkYXRlXHJcbiAgICAvLyBidXQgaWYgbmV3IGRhdGUgaXMgYWZ0ZXIgaW5pdGlhbCBvbmVcclxuICAgIC8vIHRoYW4gZmluaXNoIHNlbGVjdGlvblxyXG4gICAgaWYgKHRoaXMuX3JhbmdlU3RhY2subGVuZ3RoID09PSAxKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPVxyXG4gICAgICAgIGRheS5kYXRlID49IHRoaXMuX3JhbmdlU3RhY2tbMF1cclxuICAgICAgICAgID8gW3RoaXMuX3JhbmdlU3RhY2tbMF0sIGRheS5kYXRlXVxyXG4gICAgICAgICAgOiBbZGF5LmRhdGVdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLl9yYW5nZVN0YWNrID0gW2RheS5kYXRlXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHRoaXMuX3JhbmdlU3RhY2spKTtcclxuXHJcbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZWZmZWN0cy5kZXN0cm95KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSwgQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzRGF0ZXJhbmdlcGlja2VyXScsXHJcbiAgZXhwb3J0QXM6ICdic0RhdGVyYW5nZXBpY2tlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlXHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSBkYXRlcmFuZ2VwaWNrZXIuIEFjY2VwdHM6IFwidG9wXCIsIFwiYm90dG9tXCIsIFwibGVmdFwiLCBcInJpZ2h0XCJcclxuICAgKi9cclxuICBASW5wdXQoKSBwbGFjZW1lbnQ6ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnID0gJ2JvdHRvbSc7XHJcbiAgLyoqXHJcbiAgICogU3BlY2lmaWVzIGV2ZW50cyB0aGF0IHNob3VsZCB0cmlnZ2VyLiBTdXBwb3J0cyBhIHNwYWNlIHNlcGFyYXRlZCBsaXN0IG9mXHJcbiAgICogZXZlbnQgbmFtZXMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHJpZ2dlcnMgPSAnY2xpY2snO1xyXG4gIC8qKlxyXG4gICAqIENsb3NlIGRhdGVyYW5nZXBpY2tlciBvbiBvdXRzaWRlIGNsaWNrXHJcbiAgICovXHJcbiAgQElucHV0KCkgb3V0c2lkZUNsaWNrID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIGRhdGVyYW5nZXBpY2tlciBzaG91bGQgYmUgYXBwZW5kZWRcclxuICAgKiB0by4gQ3VycmVudGx5IG9ubHkgc3VwcG9ydHMgXCJib2R5XCIuXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyID0gJ2JvZHknO1xyXG5cclxuICBASW5wdXQoKSBvdXRzaWRlRXNjID0gdHJ1ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIGN1cnJlbnRseSBiZWluZyBzaG93blxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGlzT3BlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlcGlja2VyLmlzU2hvd247XHJcbiAgfVxyXG5cclxuICBzZXQgaXNPcGVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGRhdGVyYW5nZXBpY2tlciBpcyBzaG93blxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBAT3V0cHV0KCkgb25TaG93bjogRXZlbnRFbWl0dGVyPGFueT47XHJcbiAgLyoqXHJcbiAgICogRW1pdHMgYW4gZXZlbnQgd2hlbiB0aGUgZGF0ZXJhbmdlcGlja2VyIGlzIGhpZGRlblxyXG4gICAqL1xyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICBAT3V0cHV0KCkgb25IaWRkZW46IEV2ZW50RW1pdHRlcjxhbnk+O1xyXG5cclxuICBfYnNWYWx1ZTogRGF0ZVtdO1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWwgdmFsdWUgb2YgZGF0ZXJhbmdlcGlja2VyXHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYnNWYWx1ZSh2YWx1ZTogRGF0ZVtdKSB7XHJcbiAgICBpZiAodGhpcy5fYnNWYWx1ZSA9PT0gdmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnNWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5ic1ZhbHVlQ2hhbmdlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29uZmlnIG9iamVjdCBmb3IgZGF0ZXJhbmdlcGlja2VyXHJcbiAgICovXHJcbiAgQElucHV0KCkgYnNDb25maWc6IFBhcnRpYWw8QnNEYXRlcmFuZ2VwaWNrZXJDb25maWc+O1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIGRhdGVyYW5nZXBpY2tlcidzIGNvbnRlbnQgaXMgZW5hYmxlZCBvciBub3RcclxuICAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1pbmltdW0gZGF0ZSB3aGljaCBpcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvblxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGU7XHJcbiAgLyoqXHJcbiAgICogTWF4aW11bSBkYXRlIHdoaWNoIGlzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICAvKipcclxuICAgKiBEaXNhYmxlIHNwZWNpZmljIGRhdGVzXHJcbiAgICovXHJcbiAgQElucHV0KCkgZGF0ZXNEaXNhYmxlZDogRGF0ZVtdO1xyXG4gIC8qKlxyXG4gICAqIEVtaXRzIHdoZW4gZGF0ZXJhbmdlcGlja2VyIHZhbHVlIGhhcyBiZWVuIGNoYW5nZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgYnNWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIHByb3RlY3RlZCBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfZGF0ZXBpY2tlcjogQ29tcG9uZW50TG9hZGVyPEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9kYXRlcGlja2VyUmVmOiBDb21wb25lbnRSZWY8QnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQ+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2NvbmZpZzogQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcsXHJcbiAgICAgICAgICAgICAgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICAgICAgICAgICAgY2lzOiBDb21wb25lbnRMb2FkZXJGYWN0b3J5KSB7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyID0gY2lzLmNyZWF0ZUxvYWRlcjxCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudD4oXHJcbiAgICAgIF9lbGVtZW50UmVmLFxyXG4gICAgICBfdmlld0NvbnRhaW5lclJlZixcclxuICAgICAgX3JlbmRlcmVyXHJcbiAgICApO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcclxuICAgIHRoaXMub25TaG93biA9IHRoaXMuX2RhdGVwaWNrZXIub25TaG93bjtcclxuICAgIHRoaXMub25IaWRkZW4gPSB0aGlzLl9kYXRlcGlja2VyLm9uSGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kYXRlcGlja2VyLmxpc3Rlbih7XHJcbiAgICAgIG91dHNpZGVDbGljazogdGhpcy5vdXRzaWRlQ2xpY2ssXHJcbiAgICAgIG91dHNpZGVFc2M6IHRoaXMub3V0c2lkZUVzYyxcclxuICAgICAgdHJpZ2dlcnM6IHRoaXMudHJpZ2dlcnMsXHJcbiAgICAgIHNob3c6ICgpID0+IHRoaXMuc2hvdygpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2V0Q29uZmlnKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2RhdGVwaWNrZXJSZWYgfHwgIXRoaXMuX2RhdGVwaWNrZXJSZWYuaW5zdGFuY2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm1pbkRhdGUpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5taW5EYXRlID0gdGhpcy5taW5EYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLm1heERhdGUpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5tYXhEYXRlID0gdGhpcy5tYXhEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmRhdGVzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5kYXRlc0Rpc2FibGVkID0gdGhpcy5kYXRlc0Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS5pc0Rpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYW4gZWxlbWVudMOiwoDCmXMgZGF0ZXBpY2tlci4gVGhpcyBpcyBjb25zaWRlcmVkIGEgw6LCgMKcbWFudWFsw6LCgMKdIHRyaWdnZXJpbmcgb2ZcclxuICAgKiB0aGUgZGF0ZXBpY2tlci5cclxuICAgKi9cclxuICBzaG93KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2RhdGVwaWNrZXIuaXNTaG93bikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRDb25maWcoKTtcclxuXHJcbiAgICB0aGlzLl9kYXRlcGlja2VyUmVmID0gdGhpcy5fZGF0ZXBpY2tlclxyXG4gICAgICAucHJvdmlkZSh7cHJvdmlkZTogQnNEYXRlcGlja2VyQ29uZmlnLCB1c2VWYWx1ZTogdGhpcy5fY29uZmlnfSlcclxuICAgICAgLmF0dGFjaChCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudClcclxuICAgICAgLnRvKHRoaXMuY29udGFpbmVyKVxyXG4gICAgICAucG9zaXRpb24oe2F0dGFjaG1lbnQ6IHRoaXMucGxhY2VtZW50fSlcclxuICAgICAgLnNob3coe3BsYWNlbWVudDogdGhpcy5wbGFjZW1lbnR9KTtcclxuXHJcbiAgICAvLyBpZiBkYXRlIGNoYW5nZXMgZnJvbSBleHRlcm5hbCBzb3VyY2UgKG1vZGVsIC0+IHZpZXcpXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuYnNWYWx1ZUNoYW5nZS5zdWJzY3JpYmUoKHZhbHVlOiBEYXRlW10pID0+IHtcclxuICAgICAgICB0aGlzLl9kYXRlcGlja2VyUmVmLmluc3RhbmNlLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGlmIGRhdGUgY2hhbmdlcyBmcm9tIHBpY2tlciAodmlldyAtPiBtb2RlbClcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fZGF0ZXBpY2tlclJlZi5pbnN0YW5jZS52YWx1ZUNoYW5nZVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKChyYW5nZTogRGF0ZVtdKSA9PiByYW5nZSAmJiByYW5nZVswXSAmJiAhIXJhbmdlWzFdKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCh2YWx1ZTogRGF0ZVtdKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmJzVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbmZpZyBmb3IgZGF0ZXJhbmdlcGlja2VyXHJcbiAgICovXHJcbiAgc2V0Q29uZmlnKCkge1xyXG4gICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbihcclxuICAgICAge30sXHJcbiAgICAgIHRoaXMuX2NvbmZpZyxcclxuICAgICAgdGhpcy5ic0NvbmZpZyxcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiB0aGlzLl9ic1ZhbHVlLFxyXG4gICAgICAgIGlzRGlzYWJsZWQ6IHRoaXMuaXNEaXNhYmxlZCxcclxuICAgICAgICBtaW5EYXRlOiB0aGlzLm1pbkRhdGUgfHwgdGhpcy5ic0NvbmZpZyAmJiB0aGlzLmJzQ29uZmlnLm1pbkRhdGUsXHJcbiAgICAgICAgbWF4RGF0ZTogdGhpcy5tYXhEYXRlIHx8IHRoaXMuYnNDb25maWcgJiYgdGhpcy5ic0NvbmZpZy5tYXhEYXRlLFxyXG4gICAgICAgIGRhdGVzRGlzYWJsZWQ6IHRoaXMuZGF0ZXNEaXNhYmxlZCB8fCB0aGlzLmJzQ29uZmlnICYmIHRoaXMuYnNDb25maWcuZGF0ZXNEaXNhYmxlZFxyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nIG9mXHJcbiAgICogdGhlIGRhdGVwaWNrZXIuXHJcbiAgICovXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzT3Blbikge1xyXG4gICAgICB0aGlzLl9kYXRlcGlja2VyLmhpZGUoKTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGVzIGFuIGVsZW1lbnTDosKAwplzIGRhdGVwaWNrZXIuIFRoaXMgaXMgY29uc2lkZXJlZCBhIMOiwoDCnG1hbnVhbMOiwoDCnSB0cmlnZ2VyaW5nXHJcbiAgICogb2YgdGhlIGRhdGVwaWNrZXIuXHJcbiAgICovXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNob3coKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fZGF0ZXBpY2tlci5kaXNwb3NlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIFByb3ZpZGVyLFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEFic3RyYWN0Q29udHJvbCxcclxuICBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICBOR19WQUxJREFUT1JTLFxyXG4gIE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIFZhbGlkYXRpb25FcnJvcnMsXHJcbiAgVmFsaWRhdG9yXHJcbn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBwYXJzZURhdGUsIGZvcm1hdERhdGUsIGdldExvY2FsZSwgaXNBZnRlciwgaXNCZWZvcmUsIGlzQXJyYXksIGlzRGF0ZVZhbGlkIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0xvY2FsZVNlcnZpY2UgfSBmcm9tICcuL2JzLWxvY2FsZS5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IEJTX0RBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgQlNfREFURVJBTkdFUElDS0VSX1ZBTElEQVRPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMSURBVE9SUyxcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVzZS1iZWZvcmUtZGVjbGFyZSAqL1xyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6IGBpbnB1dFtic0RhdGVyYW5nZXBpY2tlcl1gLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2hhbmdlKSc6ICdvbkNoYW5nZSgkZXZlbnQpJyxcclxuICAgICcoa2V5dXAuZXNjKSc6ICdoaWRlKCknLFxyXG4gICAgJyhibHVyKSc6ICdvbkJsdXIoKSdcclxuICB9LFxyXG4gIHByb3ZpZGVyczogW0JTX0RBVEVSQU5HRVBJQ0tFUl9WQUxVRV9BQ0NFU1NPUiwgQlNfREFURVJBTkdFUElDS0VSX1ZBTElEQVRPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmVcclxuICBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0b3Ige1xyXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIHByaXZhdGUgX29uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLXVudXNlZC12YXJpYWJsZSAqL1xyXG4gIHByaXZhdGUgX3ZhbGlkYXRvckNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBwcml2YXRlIF92YWx1ZTogRGF0ZVtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASG9zdCgpIHByaXZhdGUgX3BpY2tlcjogQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfbG9jYWxlU2VydmljZTogQnNMb2NhbGVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAvLyB1cGRhdGUgaW5wdXQgdmFsdWUgb24gZGF0ZXBpY2tlciB2YWx1ZSB1cGRhdGVcclxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlQ2hhbmdlLnN1YnNjcmliZSgodmFsdWU6IERhdGVbXSkgPT4ge1xyXG4gICAgICB0aGlzLl9zZXRJbnB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgaWYgKHRoaXMuX3ZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gdXBkYXRlIGlucHV0IHZhbHVlIG9uIGxvY2FsZSBjaGFuZ2VcclxuICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuX3NldElucHV0VmFsdWUodGhpcy5fdmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfc2V0SW5wdXRWYWx1ZShkYXRlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIGxldCByYW5nZSA9ICcnO1xyXG4gICAgaWYgKGRhdGUpIHtcclxuICAgICAgY29uc3Qgc3RhcnQ6IHN0cmluZyA9ICFkYXRlWzBdID8gJydcclxuICAgICAgICA6IGZvcm1hdERhdGUoZGF0ZVswXSxcclxuICAgICAgICAgIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlSW5wdXRGb3JtYXQsXHJcbiAgICAgICAgICB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGVcclxuICAgICAgICApO1xyXG4gICAgICBjb25zdCBlbmQ6IHN0cmluZyA9ICFkYXRlWzFdID8gJydcclxuICAgICAgICA6IGZvcm1hdERhdGUoXHJcbiAgICAgICAgICBkYXRlWzFdLFxyXG4gICAgICAgICAgdGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VJbnB1dEZvcm1hdCxcclxuICAgICAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZVxyXG4gICAgICAgICk7XHJcbiAgICAgIHJhbmdlID0gKHN0YXJ0ICYmIGVuZCkgPyBzdGFydCArIHRoaXMuX3BpY2tlci5fY29uZmlnLnJhbmdlU2VwYXJhdG9yICsgZW5kIDogJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCByYW5nZSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZShldmVudDogRXZlbnQpIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIHRoaXMud3JpdGVWYWx1ZSgoZXZlbnQudGFyZ2V0IGFzIGFueSkudmFsdWUpO1xyXG4gICAgdGhpcy5fb25DaGFuZ2UodGhpcy5fdmFsdWUpO1xyXG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZShjOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCB7XHJcbiAgICBjb25zdCBfdmFsdWU6IFtEYXRlLCBEYXRlXSA9IGMudmFsdWU7XHJcblxyXG4gICAgaWYgKF92YWx1ZSA9PT0gbnVsbCB8fCBfdmFsdWUgPT09IHVuZGVmaW5lZCB8fCAhaXNBcnJheShfdmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9pc0ZpcnN0RGF0ZVZhbGlkID0gaXNEYXRlVmFsaWQoX3ZhbHVlWzBdKTtcclxuICAgIGNvbnN0IF9pc1NlY29uZERhdGVWYWxpZCA9IGlzRGF0ZVZhbGlkKF92YWx1ZVsxXSk7XHJcblxyXG4gICAgaWYgKCFfaXNGaXJzdERhdGVWYWxpZCkge1xyXG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzBdIH0gfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIV9pc1NlY29uZERhdGVWYWxpZCkge1xyXG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgaW52YWxpZDogX3ZhbHVlWzFdIH0gfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5taW5EYXRlICYmIGlzQmVmb3JlKF92YWx1ZVswXSwgdGhpcy5fcGlja2VyLm1pbkRhdGUsICdkYXRlJykpIHtcclxuICAgICAgcmV0dXJuIHsgYnNEYXRlOiB7IG1pbkRhdGU6IHRoaXMuX3BpY2tlci5taW5EYXRlIH0gfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fcGlja2VyICYmIHRoaXMuX3BpY2tlci5tYXhEYXRlICYmIGlzQWZ0ZXIoX3ZhbHVlWzFdLCB0aGlzLl9waWNrZXIubWF4RGF0ZSwgJ2RhdGUnKSkge1xyXG4gICAgICByZXR1cm4geyBic0RhdGU6IHsgbWF4RGF0ZTogdGhpcy5fcGlja2VyLm1heERhdGUgfSB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblZhbGlkYXRvckNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsaWRhdG9yQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlW10gfCBzdHJpbmcpIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgdGhpcy5fdmFsdWUgPSBudWxsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgX2xvY2FsZUtleSA9IHRoaXMuX2xvY2FsZVNlcnZpY2UuY3VycmVudExvY2FsZTtcclxuICAgICAgY29uc3QgX2xvY2FsZSA9IGdldExvY2FsZShfbG9jYWxlS2V5KTtcclxuICAgICAgaWYgKCFfbG9jYWxlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxyXG4gICAgICAgICAgYExvY2FsZSBcIiR7X2xvY2FsZUtleX1cIiBpcyBub3QgZGVmaW5lZCwgcGxlYXNlIGFkZCBpdCB3aXRoIFwiZGVmaW5lTG9jYWxlKC4uLilcImBcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgX2lucHV0OiAoc3RyaW5nW10gfCBEYXRlW10pID0gW107XHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgX2lucHV0ID0gdmFsdWUuc3BsaXQodGhpcy5fcGlja2VyLl9jb25maWcucmFuZ2VTZXBhcmF0b3IpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBfaW5wdXQgPSB2YWx1ZTtcclxuICAgICAgfVxyXG5cclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gKF9pbnB1dCBhcyBzdHJpbmdbXSlcclxuICAgICAgICAubWFwKChfdmFsOiBzdHJpbmcpOiBEYXRlID0+XHJcbiAgICAgICAgICBwYXJzZURhdGUoX3ZhbCwgdGhpcy5fcGlja2VyLl9jb25maWcuZGF0ZUlucHV0Rm9ybWF0LCB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGUpKVxyXG4gICAgICAgIC5tYXAoKGRhdGU6IERhdGUpID0+IChpc05hTihkYXRlLnZhbHVlT2YoKSkgPyBudWxsIDogZGF0ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BpY2tlci5ic1ZhbHVlID0gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuX3BpY2tlci5pc0Rpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIGlmIChpc0Rpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnKTtcclxuICB9XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIG9uQmx1cigpIHtcclxuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuX3BpY2tlci5oaWRlKCk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZWxlY3RSb290RWxlbWVudCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KS5ibHVyKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1jYWxlbmRhci1sYXlvdXQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tIGN1cnJlbnQgZGF0ZSwgd2lsbCBiZSBhZGRlZCBpbiBuZWFyZXN0IHJlbGVhc2VzIC0tPlxyXG4gICAgPGJzLWN1cnJlbnQtZGF0ZSB0aXRsZT1cImhleSB0aGVyZVwiICpuZ0lmPVwiZmFsc2VcIj48L2JzLWN1cnJlbnQtZGF0ZT5cclxuXHJcbiAgICA8IS0tbmF2aWdhdGlvbi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItaGVhZFwiPlxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlld1wiPjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWJvZHlcIj5cclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLXRpbWVwaWNrZXItLT5cclxuICAgIDxicy10aW1lcGlja2VyICpuZ0lmPVwiZmFsc2VcIj48L2JzLXRpbWVwaWNrZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNDYWxlbmRhckxheW91dENvbXBvbmVudCB7fVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWN1cnJlbnQtZGF0ZScsXHJcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiY3VycmVudC10aW1lZGF0ZVwiPjxzcGFuPnt7IHRpdGxlIH19PC9zcGFuPjwvZGl2PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJzQ3VzdG9tRGF0ZXMge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IERhdGUgfCBEYXRlW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtY3VzdG9tLWRhdGUtdmlldycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRuc1wiPlxyXG4gICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCByYW5nZSBvZiByYW5nZXNcIj57eyByYW5nZS5sYWJlbCB9fTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uICpuZ0lmPVwiaXNDdXN0b21SYW5nZVNob3duXCI+Q3VzdG9tIFJhbmdlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaXNDdXN0b21SYW5nZVNob3duOiB0cnVlO1xyXG4gIEBJbnB1dCgpIHJhbmdlczogQnNDdXN0b21EYXRlc1tdO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXScsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGF5LmlzRGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5pcy1oaWdobGlnaHRlZF0nOiAnZGF5LmlzSG92ZXJlZCcsXHJcbiAgICAnW2NsYXNzLmlzLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoJyxcclxuICAgICdbY2xhc3MuaXMtYWN0aXZlLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoSG92ZXJlZCcsXHJcbiAgICAnW2NsYXNzLmluLXJhbmdlXSc6ICdkYXkuaXNJblJhbmdlJyxcclxuICAgICdbY2xhc3Muc2VsZWN0LXN0YXJ0XSc6ICdkYXkuaXNTZWxlY3Rpb25TdGFydCcsXHJcbiAgICAnW2NsYXNzLnNlbGVjdC1lbmRdJzogJ2RheS5pc1NlbGVjdGlvbkVuZCcsXHJcbiAgICAnW2NsYXNzLnNlbGVjdGVkXSc6ICdkYXkuaXNTZWxlY3RlZCdcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBge3sgZGF5LmxhYmVsIH19YFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXk6IERheVZpZXdNb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGF5LmlzVG9kYXkgJiYgdGhpcy5fY29uZmlnICYmIHRoaXMuX2NvbmZpZy5jdXN0b21Ub2RheUNsYXNzKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMuX2NvbmZpZy5jdXN0b21Ub2RheUNsYXNzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWxcclxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldycsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxidXR0b24gY2xhc3M9XCJwcmV2aW91c1wiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlTGVmdEFycm93XCJcclxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwiY2FsZW5kYXIuaGlkZUxlZnRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm5hdlRvKHRydWUpXCI+PHNwYW4+JmxzYXF1bzs8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcclxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjdXJyZW50XCJcclxuICAgICAgICAgICAgKm5nSWY9XCJjYWxlbmRhci5tb250aFRpdGxlXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInZpZXcoJ21vbnRoJylcIlxyXG4gICAgPjxzcGFuPnt7IGNhbGVuZGFyLm1vbnRoVGl0bGUgfX08L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWduZW1lbnRcclxuICAgICAgICAgICAgICAgICAgd2l0aCBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSBpbiBBbmd1bGFyIC0tPlxyXG5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjdXJyZW50XCIgKGNsaWNrKT1cInZpZXcoJ3llYXInKVwiXHJcbiAgICA+PHNwYW4+e3sgY2FsZW5kYXIueWVhclRpdGxlIH19PC9zcGFuPjwvYnV0dG9uPlxyXG5cclxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25lbWVudFxyXG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XHJcblxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cIm5leHRcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FsZW5kYXIuZGlzYWJsZVJpZ2h0QXJyb3dcIlxyXG4gICAgICAgICAgICBbc3R5bGUudmlzaWJpbGl0eV09XCJjYWxlbmRhci5oaWRlUmlnaHRBcnJvdyA/ICdoaWRkZW4nIDogJ3Zpc2libGUnXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm5hdlRvKGZhbHNlKVwiPjxzcGFuPiZyc2FxdW87PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XHJcblxyXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25EaXJlY3Rpb24+KCk7XHJcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xyXG5cclxuICBuYXZUbyhkb3duOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdChcclxuICAgICAgZG93biA/IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOIDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLlVQXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgdmlldyh2aWV3TW9kZTogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KHZpZXdNb2RlKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcclxuICBCc05hdmlnYXRpb25FdmVudCxcclxuICBDZWxsSG92ZXJFdmVudCxcclxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgRGF5Vmlld01vZGVsLCBXZWVrVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1kYXlzLWNhbGVuZGFyLXZpZXcnLFxyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcclxuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxyXG5cclxuICAgICAgPCEtLWRheXMgbWF0cml4LS0+XHJcbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwiZGF5cyB3ZWVrc1wiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8IS0taWYgc2hvdyB3ZWVrcy0tPlxyXG4gICAgICAgICAgPHRoICpuZ0lmPVwib3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj48L3RoPlxyXG4gICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCB3ZWVrZGF5IG9mIGNhbGVuZGFyLndlZWtkYXlzOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwid2Vla2RheVwiPnt7IGNhbGVuZGFyLndlZWtkYXlzW2ldIH19XHJcbiAgICAgICAgICA8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCB3ZWVrIG9mIGNhbGVuZGFyLndlZWtzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICA8dGQgY2xhc3M9XCJ3ZWVrXCIgW2NsYXNzLmFjdGl2ZS13ZWVrXT1cImlzV2Vla0hvdmVyZWRcIiAgKm5nSWY9XCJvcHRpb25zLnNob3dXZWVrTnVtYmVyc1wiPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFdlZWsod2VlaylcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwid2Vla0hvdmVySGFuZGxlcih3ZWVrLCB0cnVlKVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJ3ZWVrSG92ZXJIYW5kbGVyKHdlZWssIGZhbHNlKVwiPnt7IGNhbGVuZGFyLndlZWtOdW1iZXJzW2ldIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWsuZGF5c1wiIHJvbGU9XCJncmlkY2VsbFwiPlxyXG4gICAgICAgICAgPHNwYW4gYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXHJcbiAgICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0RGF5KGRheSlcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJEYXkoZGF5LCB0cnVlKVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlckRheShkYXksIGZhbHNlKVwiPnt7IGRheS5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCAge1xyXG4gIEBJbnB1dCgpIGNhbGVuZGFyOiBEYXlzQ2FsZW5kYXJWaWV3TW9kZWw7XHJcbiAgQElucHV0KCkgb3B0aW9uczogRGF0ZXBpY2tlclJlbmRlck9wdGlvbnM7XHJcblxyXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5Vmlld01vZGVsPigpO1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25Ib3ZlcldlZWsgPSBuZXcgRXZlbnRFbWl0dGVyPFdlZWtWaWV3TW9kZWw+KCk7XHJcblxyXG4gIGlzV2Vla0hvdmVyZWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnKSB7IH1cclxuXHJcbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xyXG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IG1vbnRoOiBzdGVwIH0gfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdERheShldmVudDogRGF5Vmlld01vZGVsKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0V2Vlayh3ZWVrOiBXZWVrVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX2NvbmZpZy5zZWxlY3RXZWVrKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2Vlay5kYXlzXHJcbiAgICAgICYmIHdlZWsuZGF5c1swXVxyXG4gICAgICAmJiAhd2Vlay5kYXlzWzBdLmlzRGlzYWJsZWRcclxuICAgICAgJiYgdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoKSB7XHJcblxyXG4gICAgICB0aGlzLm9uU2VsZWN0LmVtaXQod2Vlay5kYXlzWzBdKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAod2Vlay5kYXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSB3ZWVrLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxyXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXHJcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoc2VsZWN0ZWREYXkpO1xyXG4gIH1cclxuXHJcbiAgd2Vla0hvdmVySGFuZGxlcihjZWxsOiBXZWVrVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fY29uZmlnLnNlbGVjdFdlZWspIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc0FjdGl2ZURheXMgPSBjZWxsLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxyXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXHJcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzQWN0aXZlRGF5cykge1xyXG4gICAgICBjZWxsLmlzSG92ZXJlZCA9IGlzSG92ZXJlZDtcclxuICAgICAgdGhpcy5pc1dlZWtIb3ZlcmVkID0gaXNIb3ZlcmVkO1xyXG4gICAgICB0aGlzLm9uSG92ZXJXZWVrLmVtaXQoY2VsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBob3ZlckRheShjZWxsOiBEYXlWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aCAmJiBjZWxsLmlzT3RoZXJNb250aCkge1xyXG4gICAgICBjZWxsLmlzT3RoZXJNb250aEhvdmVyZWQgPSBpc0hvdmVyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxyXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG59IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLW1vbnRoLWNhbGVuZGFyLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcclxuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxyXG5cclxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJtb250aHNcIj5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgY2FsZW5kYXIubW9udGhzXCI+XHJcbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IG1vbnRoIG9mIHJvd1wiIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInZpZXdNb250aChtb250aClcIlxyXG4gICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImhvdmVyTW9udGgobW9udGgsIHRydWUpXCJcclxuICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3Zlck1vbnRoKG1vbnRoLCBmYWxzZSlcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJtb250aC5pc0Rpc2FibGVkXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdPVwibW9udGguaXNIb3ZlcmVkXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPnt7IG1vbnRoLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjYWxlbmRhcjogTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWw7XHJcblxyXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJDZWxsVmlld01vZGVsPigpO1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcclxuXHJcbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xyXG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IHllYXI6IHN0ZXAgfSB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdNb250aChtb250aDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKSB7XHJcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQobW9udGgpO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJNb250aChjZWxsOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy10aW1lcGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImJzLXRpbWVwaWNrZXItY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJzLWRlY3JlYXNlXCI+LTwvYnV0dG9uPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFt2YWx1ZV09XCJob3Vyc1wiIHBsYWNlaG9sZGVyPVwiMDBcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIj4rPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiPi08L2J1dHRvbj5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbdmFsdWVdPVwibWludXRlc1wiIHBsYWNlaG9sZGVyPVwiMDBcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnMtaW5jcmVhc2VcIj4rPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwic3dpdGNoLXRpbWUtZm9ybWF0XCI+e3sgYW1wbSB9fVxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBS0NBWUFBQUJpOEtTREFBQUJTRWxFUVZRWVYzWFFQVXZEVUJRRzRITnVhZ3RWcWM2S2dvdUN2NkdJdUludFlCTEI5aGNJUXBMU3RDQUlWN0RZbXBUY1JXY1hxWmlvM1Z3Yy9VQ2MvUUVxZmd5S0dicjBJN25TMUVpSGVxWXpQTy9oNVNEMGpheFVaam1TTENCK09GYitVRklORndBU0FFQWRwdTlnYUdYVnlBSEhGUUJrSHBLSGM2YTlkekVDdkFEeVk5c3FsQU1zSzlXMGp6eERYcWV5dHIzbWhRY2t4U2ppMjdUSko1L3JQbUlwd0pKcTNIcnRkdXJpWU91cnYxYTRpMXA1SG5oa0c5T0Z5bWkwUmVvTzA1Y0d3YitheXY0ZHlzVnlnamVGbXNQMDVmOHdwWlE4ZnNkdmZtdVk5empXU05xVXRnWUZWbk9WUmVJTFlvQkZ6ZFFJNS9HR0Z6TkhoR2JlWm5vcERHVTI5c1pic2NnbGRtQzk5dzM1Vk9BVFR5Y0lNTWNCWElmcFNWR3paaEE2QzhoaDAwY29ubG42VlE5VEdnVjMyT0VBS1FDNERyQnE3Q0p3ZDBnZ1I3VnEvclByZmdCK0Mzc0d5cFk1REFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgICAgYWx0PVwiXCI+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB7XHJcbiAgYW1wbSA9ICdvayc7XHJcbiAgaG91cnMgPSAwO1xyXG4gIG1pbnV0ZXMgPSAwO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHllYXJzUGVyQ2FsZW5kYXIgfSBmcm9tICcuLi8uLi9lbmdpbmUvZm9ybWF0LXllYXJzLWNhbGVuZGFyJztcclxuaW1wb3J0IHtcclxuICBCc0RhdGVwaWNrZXJWaWV3TW9kZSxcclxuICBCc05hdmlnYXRpb25EaXJlY3Rpb24sXHJcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXHJcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIFllYXJzQ2FsZW5kYXJWaWV3TW9kZWxcclxufSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy15ZWFycy1jYWxlbmRhci12aWV3JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJzLWNhbGVuZGFyLWxheW91dD5cclxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XHJcbiAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcclxuICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxyXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxyXG4gICAgICA+PC9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldz5cclxuXHJcbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwieWVhcnNcIj5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgY2FsZW5kYXIueWVhcnNcIj5cclxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgeWVhciBvZiByb3dcIiByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ2aWV3WWVhcih5ZWFyKVwiXHJcbiAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJZZWFyKHllYXIsIHRydWUpXCJcclxuICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlclllYXIoeWVhciwgZmFsc2UpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwieWVhci5pc0Rpc2FibGVkXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdPVwieWVhci5pc0hvdmVyZWRcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgeWVhci5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9icy1jYWxlbmRhci1sYXlvdXQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNZZWFyc0NhbGVuZGFyVmlld0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2FsZW5kYXI6IFllYXJzQ2FsZW5kYXJWaWV3TW9kZWw7XHJcblxyXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FsZW5kYXJDZWxsVmlld01vZGVsPigpO1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcclxuXHJcbiAgbmF2aWdhdGVUbyhldmVudDogQnNOYXZpZ2F0aW9uRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGVwID0gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gPT09IGV2ZW50ID8gLTEgOiAxO1xyXG4gICAgdGhpcy5vbk5hdmlnYXRlLmVtaXQoeyBzdGVwOiB7IHllYXI6IHN0ZXAgKiB5ZWFyc1BlckNhbGVuZGFyIH0gfSk7XHJcbiAgfVxyXG5cclxuICB2aWV3WWVhcih5ZWFyOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpIHtcclxuICAgIHRoaXMub25TZWxlY3QuZW1pdCh5ZWFyKTtcclxuICB9XHJcblxyXG4gIGhvdmVyWWVhcihjZWxsOiBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWaWV3TW9kZShldmVudDogQnNEYXRlcGlja2VyVmlld01vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25WaWV3TW9kZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXItaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZURpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29uZmlnIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuaW1wb3J0IHsgQnNDYWxlbmRhckxheW91dENvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWNhbGVuZGFyLWxheW91dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0N1cnJlbnREYXRlVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1cnJlbnQtZGF0ZS12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlck5hdmlnYXRpb25WaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRheXMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtbW9udGhzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLXRpbWVwaWNrZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbmNvbnN0IF9leHBvcnRzID0gW1xyXG4gIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQsXHJcblxyXG4gIEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSxcclxuICBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcclxuXHJcbiAgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSxcclxuICBCc0RhdGVyYW5nZXBpY2tlckRpcmVjdGl2ZSxcclxuXHJcbiAgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50LFxyXG4gICAgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQsXHJcbiAgICBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCxcclxuICAgIEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQsXHJcblxyXG4gICAgQnNDYWxlbmRhckxheW91dENvbXBvbmVudCxcclxuICAgIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCxcclxuICAgIEJzTW9udGhDYWxlbmRhclZpZXdDb21wb25lbnQsXHJcbiAgICBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxyXG5cclxuICAgIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50LFxyXG5cclxuICAgIC4uLl9leHBvcnRzXHJcbiAgXSxcclxuICBlbnRyeUNvbXBvbmVudHM6IFtcclxuICAgIEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBfZXhwb3J0c1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCc0RhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlclN0b3JlLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICAgICAgQnNEYXRlcGlja2VyQ29uZmlnLFxyXG4gICAgICAgIEJzRGF0ZXJhbmdlcGlja2VyQ29uZmlnLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyxcclxuICAgICAgICBCc0RhdGVwaWNrZXJFZmZlY3RzLFxyXG4gICAgICAgIEJzTG9jYWxlU2VydmljZVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jaHJvbm9zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRlRm9ybWF0dGVyIHtcclxuICBmb3JtYXQoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcsIGxvY2FsZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBmb3JtYXREYXRlKGRhdGUsIGZvcm1hdCwgbG9jYWxlKTtcclxuICB9XHJcbn1cclxuIiwiLyogdHNsaW50OmRpc2FibGU6IG1heC1maWxlLWxpbmUtY291bnQgKi9cclxuaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGVGb3JtYXR0ZXIgfSBmcm9tICcuL2RhdGUtZm9ybWF0dGVyJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItaW5uZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8IS0tJmx0OyEmbmRhc2g7bmcta2V5ZG93bj1cImtleWRvd24oJGV2ZW50KVwiJm5kYXNoOyZndDstLT5cclxuICAgIDxkaXYgKm5nSWY9XCJkYXRlcGlja2VyTW9kZVwiIGNsYXNzPVwid2VsbCB3ZWxsLXNtIGJnLWZhZGVkIHAtYSBjYXJkXCIgcm9sZT1cImFwcGxpY2F0aW9uXCIgPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGF0ZXBpY2tlck1vZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzdGFydGluZ0RheTogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHllYXJSYW5nZTogbnVtYmVyO1xyXG5cclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xyXG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGU7XHJcbiAgQElucHV0KCkgbWluTW9kZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG1heE1vZGU6IHN0cmluZztcclxuICBASW5wdXQoKSBzaG93V2Vla3M6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgZm9ybWF0RGF5OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0TW9udGg6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXRZZWFyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0RGF5SGVhZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybWF0RGF5VGl0bGU6IHN0cmluZztcclxuICBASW5wdXQoKSBmb3JtYXRNb250aFRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgb25seUN1cnJlbnRNb250aDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBzaG9ydGN1dFByb3BhZ2F0aW9uOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGN1c3RvbUNsYXNzOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZzsgY2xheno6IHN0cmluZyB9W107XHJcbiAgQElucHV0KCkgbW9udGhDb2xMaW1pdDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHllYXJDb2xMaW1pdDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfVtdO1xyXG4gIEBJbnB1dCgpIGRheURpc2FibGVkOiBudW1iZXJbXTtcclxuICBASW5wdXQoKSBpbml0RGF0ZTogRGF0ZTtcclxuXHJcbiAgQE91dHB1dCgpIHNlbGVjdGlvbkRvbmU6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4odW5kZWZpbmVkKTtcclxuICBAT3V0cHV0KCkgdXBkYXRlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KGZhbHNlKTtcclxuICBAT3V0cHV0KCkgYWN0aXZlRGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgc3RlcERheTogYW55ID0ge307XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHN0ZXBNb250aDogYW55ID0ge307XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHN0ZXBZZWFyOiBhbnkgPSB7fTtcclxuXHJcbiAgdW5pcXVlSWQ6IHN0cmluZztcclxuXHJcbiAgcHJvdGVjdGVkIG1vZGVzOiBzdHJpbmdbXSA9IFsnZGF5JywgJ21vbnRoJywgJ3llYXInXTtcclxuICBwcm90ZWN0ZWQgZGF0ZUZvcm1hdHRlcjogRGF0ZUZvcm1hdHRlciA9IG5ldyBEYXRlRm9ybWF0dGVyKCk7XHJcbiAgcHJvdGVjdGVkIF9hY3RpdmVEYXRlOiBEYXRlO1xyXG4gIHByb3RlY3RlZCBzZWxlY3RlZERhdGU6IERhdGU7XHJcbiAgcHJvdGVjdGVkIGFjdGl2ZURhdGVJZDogc3RyaW5nO1xyXG5cclxuICBwcm90ZWN0ZWQgcmVmcmVzaFZpZXdIYW5kbGVyRGF5OiBGdW5jdGlvbjtcclxuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJEYXk6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJNb250aDogRnVuY3Rpb247XHJcbiAgcHJvdGVjdGVkIGNvbXBhcmVIYW5kbGVyTW9udGg6IEZ1bmN0aW9uO1xyXG4gIHByb3RlY3RlZCByZWZyZXNoVmlld0hhbmRsZXJZZWFyOiBGdW5jdGlvbjtcclxuICBwcm90ZWN0ZWQgY29tcGFyZUhhbmRsZXJZZWFyOiBGdW5jdGlvbjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IGFkZCBmb3JtYXR0ZXIgdmFsdWUgdG8gRGF0ZSBvYmplY3RcclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIHRvZG86IHVzZSBkYXRlIGZvciB1bmlxdWUgdmFsdWVcclxuICAgIHRoaXMudW5pcXVlSWQgPSAgYGRhdGVwaWNrZXItLSR7TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApfWA7XHJcblxyXG4gICAgaWYgKHRoaXMuaW5pdERhdGUpIHtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5pbml0RGF0ZTtcclxuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpKTtcclxuICAgICAgdGhpcy51cGRhdGUuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmFjdGl2ZURhdGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdGhpcy5yZWZyZXNoVmlldyBzaG91bGQgYmUgY2FsbGVkIGhlcmUgdG8gcmVmbGVjdCB0aGUgY2hhbmdlcyBvbiB0aGUgZmx5XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXVudXNlZC12YXJpYWJsZVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICAgIHRoaXMuY2hlY2tJZkFjdGl2ZURhdGVHb3RVcGRhdGVkKGNoYW5nZXMuYWN0aXZlRGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiBhY3RpdmVEYXRlIGhhcyBiZWVuIHVwZGF0ZSBhbmQgdGhlbiBlbWl0IHRoZSBhY3RpdmVEYXRlQ2hhbmdlIHdpdGggdGhlIG5ldyBkYXRlXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICBjaGVja0lmQWN0aXZlRGF0ZUdvdFVwZGF0ZWQoYWN0aXZlRGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoYWN0aXZlRGF0ZSAmJiAhYWN0aXZlRGF0ZS5maXJzdENoYW5nZSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlID0gYWN0aXZlRGF0ZS5wcmV2aW91c1ZhbHVlO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgcHJldmlvdXNWYWx1ZSAmJlxyXG4gICAgICAgIHByZXZpb3VzVmFsdWUgaW5zdGFuY2VvZiBEYXRlICYmXHJcbiAgICAgICAgcHJldmlvdXNWYWx1ZS5nZXRUaW1lKCkgIT09IGFjdGl2ZURhdGUuY3VycmVudFZhbHVlLmdldFRpbWUoKVxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDb21wYXJlSGFuZGxlcihoYW5kbGVyOiBGdW5jdGlvbiwgdHlwZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ2RheScpIHtcclxuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlckRheSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZSA9PT0gJ3llYXInKSB7XHJcbiAgICAgIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyID0gaGFuZGxlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBhcmUoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIGlmIChkYXRlMSA9PT0gdW5kZWZpbmVkIHx8IGRhdGUyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScgJiYgdGhpcy5jb21wYXJlSGFuZGxlckRheSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlckRheShkYXRlMSwgZGF0ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnbW9udGgnICYmIHRoaXMuY29tcGFyZUhhbmRsZXJNb250aCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKGRhdGUxLCBkYXRlMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wYXJlSGFuZGxlclllYXIoZGF0ZTEsIGRhdGUyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdm9pZCAwO1xyXG4gIH1cclxuXHJcbiAgc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGhhbmRsZXI6IEZ1bmN0aW9uLCB0eXBlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlID09PSAnZGF5Jykge1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlckRheSA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJNb250aCA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGUgPT09ICd5ZWFyJykge1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVmcmVzaFZpZXcoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ2RheScgJiYgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkpIHtcclxuICAgICAgdGhpcy5yZWZyZXNoVmlld0hhbmRsZXJEYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ21vbnRoJyAmJiB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlck1vbnRoKSB7XHJcbiAgICAgIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyTW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gJ3llYXInICYmIHRoaXMucmVmcmVzaFZpZXdIYW5kbGVyWWVhcikge1xyXG4gICAgICB0aGlzLnJlZnJlc2hWaWV3SGFuZGxlclllYXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRhdGVGaWx0ZXIoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0ZUZvcm1hdHRlci5mb3JtYXQoZGF0ZSwgZm9ybWF0LCB0aGlzLmxvY2FsZSk7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgaXNBY3RpdmUoZGF0ZU9iamVjdDogYW55KTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5jb21wYXJlKGRhdGVPYmplY3QuZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKSA9PT0gMCkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGVJZCA9IGRhdGVPYmplY3QudWlkO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIGNyZWF0ZURhdGVPYmplY3QoZGF0ZTogRGF0ZSwgZm9ybWF0OiBzdHJpbmcpOiBhbnkge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29uc3QgZGF0ZU9iamVjdDogYW55ID0ge307XHJcbiAgICBkYXRlT2JqZWN0LmRhdGUgPSBuZXcgRGF0ZShcclxuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgIGRhdGUuZ2V0RGF0ZSgpXHJcbiAgICApO1xyXG4gICAgZGF0ZU9iamVjdC5kYXRlID0gdGhpcy5maXhUaW1lWm9uZShkYXRlT2JqZWN0LmRhdGUpO1xyXG4gICAgZGF0ZU9iamVjdC5sYWJlbCA9IHRoaXMuZGF0ZUZpbHRlcihkYXRlLCBmb3JtYXQpO1xyXG4gICAgZGF0ZU9iamVjdC5zZWxlY3RlZCA9IHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLnNlbGVjdGVkRGF0ZSkgPT09IDA7XHJcbiAgICBkYXRlT2JqZWN0LmRpc2FibGVkID0gdGhpcy5pc0Rpc2FibGVkKGRhdGUpO1xyXG4gICAgZGF0ZU9iamVjdC5jdXJyZW50ID0gdGhpcy5jb21wYXJlKGRhdGUsIG5ldyBEYXRlKCkpID09PSAwO1xyXG4gICAgZGF0ZU9iamVjdC5jdXN0b21DbGFzcyA9IHRoaXMuZ2V0Q3VzdG9tQ2xhc3NGb3JEYXRlKGRhdGVPYmplY3QuZGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGVPYmplY3Q7XHJcbiAgfVxyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWFueSovXHJcbiAgc3BsaXQoYXJyOiBhbnlbXSwgc2l6ZTogbnVtYmVyKTogYW55W10ge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gICAgY29uc3QgYXJyYXlzOiBhbnlbXSA9IFtdO1xyXG4gICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGFycmF5cy5wdXNoKGFyci5zcGxpY2UoMCwgc2l6ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBhcnJheXM7XHJcbiAgfVxyXG5cclxuICAvLyBGaXggYSBoYXJkLXJlcHJvZHVjaWJsZSBidWcgd2l0aCB0aW1lem9uZXNcclxuICAvLyBUaGUgYnVnIGRlcGVuZHMgb24gT1MsIGJyb3dzZXIsIGN1cnJlbnQgdGltZXpvbmUgYW5kIGN1cnJlbnQgZGF0ZVxyXG4gIC8vIGkuZS5cclxuICAvLyB2YXIgZGF0ZSA9IG5ldyBEYXRlKDIwMTQsIDAsIDEpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSxcclxuICAvLyBkYXRlLmdldEhvdXJzKCkpOyBjYW4gcmVzdWx0IGluIFwiMjAxMyAxMSAzMSAyM1wiIGJlY2F1c2Ugb2YgdGhlIGJ1Zy5cclxuICBmaXhUaW1lWm9uZShkYXRlOiBEYXRlKTogRGF0ZSB7XHJcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IERhdGUoXHJcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICBkYXRlLmdldERhdGUoKSxcclxuICAgICAgaG91cnMgPT09IDIzID8gaG91cnMgKyAyIDogMFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdChkYXRlOiBEYXRlLCBpc01hbnVhbCA9IHRydWUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1pbk1vZGUpIHtcclxuICAgICAgaWYgKCF0aGlzLmFjdGl2ZURhdGUpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgRGF0ZSgwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoXHJcbiAgICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpLFxyXG4gICAgICAgIGRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgICBkYXRlLmdldERhdGUoKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmZpeFRpbWVab25lKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICAgIGlmIChpc01hbnVhbCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uRG9uZS5lbWl0KHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKFxyXG4gICAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSxcclxuICAgICAgICBkYXRlLmdldE1vbnRoKCksXHJcbiAgICAgICAgZGF0ZS5nZXREYXRlKClcclxuICAgICAgKTtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5maXhUaW1lWm9uZSh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgICBpZiAoaXNNYW51YWwpIHtcclxuICAgICAgICB0aGlzLmRhdGVwaWNrZXJNb2RlID0gdGhpcy5tb2Rlc1tcclxuICAgICAgICAgIHRoaXMubW9kZXMuaW5kZXhPZih0aGlzLmRhdGVwaWNrZXJNb2RlKSAtIDFcclxuICAgICAgICBdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSBuZXcgRGF0ZSh0aGlzLmFjdGl2ZURhdGUudmFsdWVPZigpKTtcclxuICAgIHRoaXMudXBkYXRlLmVtaXQodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIHRoaXMucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIG1vdmUoZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYW55Ki9cclxuICAgIGxldCBleHBlY3RlZFN0ZXA6IGFueTtcclxuICAgIGlmICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5Jykge1xyXG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBEYXk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgZXhwZWN0ZWRTdGVwID0gdGhpcy5zdGVwTW9udGg7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGF0ZXBpY2tlck1vZGUgPT09ICd5ZWFyJykge1xyXG4gICAgICBleHBlY3RlZFN0ZXAgPSB0aGlzLnN0ZXBZZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChleHBlY3RlZFN0ZXApIHtcclxuICAgICAgY29uc3QgeWVhciA9XHJcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkgKyBkaXJlY3Rpb24gKiAoZXhwZWN0ZWRTdGVwLnllYXJzIHx8IDApO1xyXG4gICAgICBjb25zdCBtb250aCA9XHJcbiAgICAgICAgdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgKyBkaXJlY3Rpb24gKiAoZXhwZWN0ZWRTdGVwLm1vbnRocyB8fCAwKTtcclxuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xyXG5cclxuICAgICAgdGhpcy5yZWZyZXNoVmlldygpO1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGVDaGFuZ2UuZW1pdCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTW9kZShfZGlyZWN0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRpcmVjdGlvbiA9IF9kaXJlY3Rpb24gfHwgMTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgICh0aGlzLmRhdGVwaWNrZXJNb2RlID09PSB0aGlzLm1heE1vZGUgJiYgZGlyZWN0aW9uID09PSAxKSB8fFxyXG4gICAgICAodGhpcy5kYXRlcGlja2VyTW9kZSA9PT0gdGhpcy5taW5Nb2RlICYmIGRpcmVjdGlvbiA9PT0gLTEpXHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0ZXBpY2tlck1vZGUgPSB0aGlzLm1vZGVzW1xyXG4gICAgICB0aGlzLm1vZGVzLmluZGV4T2YodGhpcy5kYXRlcGlja2VyTW9kZSkgKyBkaXJlY3Rpb25cclxuICAgIF07XHJcbiAgICB0aGlzLnJlZnJlc2hWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0Q3VzdG9tQ2xhc3NGb3JEYXRlKGRhdGU6IERhdGUpOiBzdHJpbmcge1xyXG4gICAgaWYgKCF0aGlzLmN1c3RvbUNsYXNzKSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIC8vIHRvZG86IGJ1aWxkIGEgaGFzaCBvZiBjdXN0b20gY2xhc3NlcywgaXQgd2lsbCB3b3JrIGZhc3RlclxyXG4gICAgY29uc3QgY3VzdG9tQ2xhc3NPYmplY3Q6IHtcclxuICAgICAgZGF0ZTogRGF0ZTtcclxuICAgICAgbW9kZTogc3RyaW5nO1xyXG4gICAgICBjbGF6ejogc3RyaW5nO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkgKi9cclxuICAgIH0gPSB0aGlzLmN1c3RvbUNsYXNzLmZpbmQoKGN1c3RvbUNsYXNzOiBhbnkpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBjdXN0b21DbGFzcy5kYXRlLnZhbHVlT2YoKSA9PT0gZGF0ZS52YWx1ZU9mKCkgJiZcclxuICAgICAgICBjdXN0b21DbGFzcy5tb2RlID09PSB0aGlzLmRhdGVwaWNrZXJNb2RlXHJcbiAgICAgICk7XHJcbiAgICB9LCB0aGlzKTtcclxuXHJcbiAgICByZXR1cm4gY3VzdG9tQ2xhc3NPYmplY3QgPT09IHVuZGVmaW5lZCA/ICcnIDogY3VzdG9tQ2xhc3NPYmplY3QuY2xheno7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgY29tcGFyZURhdGVEaXNhYmxlZChcclxuICAgIGRhdGUxRGlzYWJsZWQ6IHsgZGF0ZTogRGF0ZTsgbW9kZTogc3RyaW5nIH0sXHJcbiAgICBkYXRlMjogRGF0ZVxyXG4gICk6IG51bWJlciB7XHJcbiAgICBpZiAoZGF0ZTFEaXNhYmxlZCA9PT0gdW5kZWZpbmVkIHx8IGRhdGUyID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0ZTFEaXNhYmxlZC5tb2RlID09PSAnZGF5JyAmJiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyRGF5KGRhdGUxRGlzYWJsZWQuZGF0ZSwgZGF0ZTIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRlMURpc2FibGVkLm1vZGUgPT09ICdtb250aCcgJiYgdGhpcy5jb21wYXJlSGFuZGxlck1vbnRoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyTW9udGgoZGF0ZTFEaXNhYmxlZC5kYXRlLCBkYXRlMik7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGUxRGlzYWJsZWQubW9kZSA9PT0gJ3llYXInICYmIHRoaXMuY29tcGFyZUhhbmRsZXJZZWFyKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBhcmVIYW5kbGVyWWVhcihkYXRlMURpc2FibGVkLmRhdGUsIGRhdGUyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGlzRGlzYWJsZWQoZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IGlzRGF0ZURpc2FibGVkID0gZmFsc2U7XHJcbiAgICBpZiAodGhpcy5kYXRlRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kYXRlRGlzYWJsZWQuZm9yRWFjaChcclxuICAgICAgICAoZGlzYWJsZWREYXRlOiB7IGRhdGU6IERhdGU7IG1vZGU6IHN0cmluZyB9KSA9PiB7XHJcbiAgICAgICAgICBpZiAodGhpcy5jb21wYXJlRGF0ZURpc2FibGVkKGRpc2FibGVkRGF0ZSwgZGF0ZSkgPT09IDApIHtcclxuICAgICAgICAgICAgaXNEYXRlRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kYXlEaXNhYmxlZCkge1xyXG4gICAgICBpc0RhdGVEaXNhYmxlZCA9XHJcbiAgICAgICAgaXNEYXRlRGlzYWJsZWQgfHxcclxuICAgICAgICB0aGlzLmRheURpc2FibGVkLmluZGV4T2YoZGF0ZS5nZXREYXkoKSkgPiAtMTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBpc0RhdGVEaXNhYmxlZCB8fFxyXG4gICAgICAodGhpcy5taW5EYXRlICYmIHRoaXMuY29tcGFyZShkYXRlLCB0aGlzLm1pbkRhdGUpIDwgMCkgfHxcclxuICAgICAgKHRoaXMubWF4RGF0ZSAmJiB0aGlzLmNvbXBhcmUoZGF0ZSwgdGhpcy5tYXhEYXRlKSA+IDApXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQ29uZmlnIHtcclxuICBsb2NhbGUgPSAnZW4nO1xyXG4gIGRhdGVwaWNrZXJNb2RlID0gJ2RheSc7XHJcbiAgc3RhcnRpbmdEYXkgPSAwO1xyXG4gIHllYXJSYW5nZSA9IDIwO1xyXG4gIG1pbk1vZGUgPSAnZGF5JztcclxuICBtYXhNb2RlID0gJ3llYXInO1xyXG4gIHNob3dXZWVrcyA9IHRydWU7XHJcbiAgZm9ybWF0RGF5ID0gJ0REJztcclxuICBmb3JtYXRNb250aCA9ICdNTU1NJztcclxuICBmb3JtYXRZZWFyID0gJ1lZWVknO1xyXG4gIGZvcm1hdERheUhlYWRlciA9ICdkZCc7XHJcbiAgZm9ybWF0RGF5VGl0bGUgPSAnTU1NTSBZWVlZJztcclxuICBmb3JtYXRNb250aFRpdGxlID0gJ1lZWVknO1xyXG4gIG9ubHlDdXJyZW50TW9udGggPSBmYWxzZTtcclxuICBtb250aENvbExpbWl0ID0gMztcclxuICB5ZWFyQ29sTGltaXQgPSA1O1xyXG4gIHNob3J0Y3V0UHJvcGFnYXRpb24gPSBmYWxzZTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUHJvdmlkZXIsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBEQVRFUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IFByb3ZpZGVyID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRGF0ZVBpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbi8qIHRzbGludDpkaXNhYmxlOmNvbXBvbmVudC1zZWxlY3Rvci1uYW1lIGNvbXBvbmVudC1zZWxlY3Rvci10eXBlICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkYXRlcGlja2VyLWlubmVyIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHVwZGF0ZSk9XCJvblVwZGF0ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwiY29uZmlnLmxvY2FsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF0ZXBpY2tlck1vZGVdPVwiZGF0ZXBpY2tlck1vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2luaXREYXRlXT1cImluaXREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbWluTW9kZV09XCJtaW5Nb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttYXhNb2RlXT1cIm1heE1vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3Nob3dXZWVrc109XCJzaG93V2Vla3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheV09XCJmb3JtYXREYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdE1vbnRoXT1cImZvcm1hdE1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRZZWFyXT1cImZvcm1hdFllYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheUhlYWRlcl09XCJmb3JtYXREYXlIZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW2Zvcm1hdERheVRpdGxlXT1cImZvcm1hdERheVRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtmb3JtYXRNb250aFRpdGxlXT1cImZvcm1hdE1vbnRoVGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3N0YXJ0aW5nRGF5XT1cInN0YXJ0aW5nRGF5XCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt5ZWFyUmFuZ2VdPVwieWVhclJhbmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtjdXN0b21DbGFzc109XCJjdXN0b21DbGFzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF0ZURpc2FibGVkXT1cImRhdGVEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbZGF5RGlzYWJsZWRdPVwiZGF5RGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW29ubHlDdXJyZW50TW9udGhdPVwib25seUN1cnJlbnRNb250aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbc2hvcnRjdXRQcm9wYWdhdGlvbl09XCJzaG9ydGN1dFByb3BhZ2F0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFttb250aENvbExpbWl0XT1cIm1vbnRoQ29sTGltaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3llYXJDb2xMaW1pdF09XCJ5ZWFyQ29sTGltaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHNlbGVjdGlvbkRvbmUpPVwib25TZWxlY3Rpb25Eb25lKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGFjdGl2ZURhdGVDaGFuZ2UpPVwib25BY3RpdmVEYXRlQ2hhbmdlKCRldmVudClcIj5cclxuICAgICAgPGRheXBpY2tlciB0YWJpbmRleD1cIjBcIj48L2RheXBpY2tlcj5cclxuICAgICAgPG1vbnRocGlja2VyIHRhYmluZGV4PVwiMFwiPjwvbW9udGhwaWNrZXI+XHJcbiAgICAgIDx5ZWFycGlja2VyIHRhYmluZGV4PVwiMFwiPjwveWVhcnBpY2tlcj5cclxuICAgIDwvZGF0ZXBpY2tlci1pbm5lcj5cclxuICAgIGAsXHJcbiAgcHJvdmlkZXJzOiBbREFURVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG4vKiB0c2xpbnQ6ZW5hYmxlOmNvbXBvbmVudC1zZWxlY3Rvci1uYW1lIGNvbXBvbmVudC1zZWxlY3Rvci10eXBlICovXHJcbmV4cG9ydCBjbGFzcyBEYXRlUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIC8qKiBzZXRzIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cclxuICBASW5wdXQoKSBkYXRlcGlja2VyTW9kZSA9ICdkYXknO1xyXG4gIC8qKiBkZWZhdWx0IGRhdGUgdG8gc2hvdyBpZiBgbmctbW9kZWxgIHZhbHVlIGlzIG5vdCBzcGVjaWZpZWQgKi9cclxuICBASW5wdXQoKSBpbml0RGF0ZTogRGF0ZTtcclxuICAvKiogIG9sZGVzdCBzZWxlY3RhYmxlIGRhdGUgKi9cclxuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlO1xyXG4gIC8qKiBsYXRlc3Qgc2VsZWN0YWJsZSBkYXRlICovXHJcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZTtcclxuICAvKiogc2V0IGxvd2VyIGRhdGVwaWNrZXIgbW9kZSwgc3VwcG9ydHM6IGBkYXlgLCBgbW9udGhgLCBgeWVhcmAgKi9cclxuICBASW5wdXQoKSBtaW5Nb2RlOiBzdHJpbmc7XHJcbiAgLyoqIHNldHMgdXBwZXIgZGF0ZXBpY2tlciBtb2RlLCBzdXBwb3J0czogYGRheWAsIGBtb250aGAsIGB5ZWFyYCAqL1xyXG4gIEBJbnB1dCgpIG1heE1vZGU6IHN0cmluZztcclxuICAvKiogaWYgZmFsc2Ugd2VlayBudW1iZXJzIHdpbGwgYmUgaGlkZGVuICovXHJcbiAgQElucHV0KCkgc2hvd1dlZWtzID0gdHJ1ZTtcclxuICAvKiogZm9ybWF0IG9mIGRheSBpbiBtb250aCAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdERheTogc3RyaW5nO1xyXG4gIC8qKiBmb3JtYXQgb2YgbW9udGggaW4geWVhciAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoOiBzdHJpbmc7XHJcbiAgLyoqIGZvcm1hdCBvZiB5ZWFyIGluIHllYXIgcmFuZ2UgKi9cclxuICBASW5wdXQoKSBmb3JtYXRZZWFyOiBzdHJpbmc7XHJcbiAgLyoqIGZvcm1hdCBvZiBkYXkgaW4gd2VlayBoZWFkZXIgKi9cclxuICBASW5wdXQoKSBmb3JtYXREYXlIZWFkZXI6IHN0cmluZztcclxuICAvKiogZm9ybWF0IG9mIHRpdGxlIHdoZW4gc2VsZWN0aW5nIGRheSAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdERheVRpdGxlOiBzdHJpbmc7XHJcbiAgLyoqIGZvcm1hdCBvZiB0aXRsZSB3aGVuIHNlbGVjdGluZyBtb250aCAqL1xyXG4gIEBJbnB1dCgpIGZvcm1hdE1vbnRoVGl0bGU6IHN0cmluZztcclxuICAvKiogc3RhcnRpbmcgZGF5IG9mIHRoZSB3ZWVrIGZyb20gMC02ICgwPVN1bmRheSwgLi4uLCA2PVNhdHVyZGF5KSAqL1xyXG4gIEBJbnB1dCgpIHN0YXJ0aW5nRGF5OiBudW1iZXI7XHJcbiAgLyoqIG51bWJlciBvZiB5ZWFycyBkaXNwbGF5ZWQgaW4geWVhciBzZWxlY3Rpb24gKi9cclxuICBASW5wdXQoKSB5ZWFyUmFuZ2U6IG51bWJlcjtcclxuICAvKiogaWYgdHJ1ZSBvbmx5IGRhdGVzIGZyb20gdGhlIGN1cnJlbnRseSBkaXNwbGF5ZWQgbW9udGggd2lsbCBiZSBzaG93biAqL1xyXG4gIEBJbnB1dCgpIG9ubHlDdXJyZW50TW9udGg6IGJvb2xlYW47XHJcbiAgLyoqIGlmIHRydWUgc2hvcnRjdXRgcyBldmVudCBwcm9wYWdhdGlvbiB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgc2hvcnRjdXRQcm9wYWdhdGlvbjogYm9vbGVhbjtcclxuICAvKiogbnVtYmVyIG9mIG1vbnRocyBkaXNwbGF5ZWQgaW4gYSBzaW5nbGUgcm93IG9mIG1vbnRoIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIG1vbnRoQ29sTGltaXQ6IG51bWJlcjtcclxuICAvKiogbnVtYmVyIG9mIHllYXJzIGRpc3BsYXllZCBpbiBhIHNpbmdsZSByb3cgb2YgeWVhciBwaWNrZXIgKi9cclxuICBASW5wdXQoKSB5ZWFyQ29sTGltaXQ6IG51bWJlcjtcclxuICAvKiogYXJyYXkgb2YgY3VzdG9tIGNzcyBjbGFzc2VzIHRvIGJlIGFwcGxpZWQgdG8gdGFyZ2V0ZWQgZGF0ZXMgKi9cclxuICBASW5wdXQoKSBjdXN0b21DbGFzczogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmc7IGNsYXp6OiBzdHJpbmcgfVtdO1xyXG4gIC8qKiBhcnJheSBvZiBkaXNhYmxlZCBkYXRlcyAqL1xyXG4gIEBJbnB1dCgpIGRhdGVEaXNhYmxlZDogeyBkYXRlOiBEYXRlOyBtb2RlOiBzdHJpbmcgfVtdO1xyXG4gIC8qKiBkaXNhYmxlZCBkYXlzIG9mIHRoZSB3ZWVrIGZyb20gMC02ICgwPVN1bmRheSwgLi4uLCA2PVNhdHVyZGF5KSAqL1xyXG4gIEBJbnB1dCgpIGRheURpc2FibGVkOiBudW1iZXJbXTtcclxuXHJcbiAgLyoqIGN1cnJlbnRseSBhY3RpdmUgZGF0ZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGFjdGl2ZURhdGUoKTogRGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZSB8fCB0aGlzLl9ub3c7XHJcbiAgfVxyXG5cclxuICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgc2VsZWN0aW9uRG9uZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPih1bmRlZmluZWQpO1xyXG5cclxuICAvKiogY2FsbGJhY2sgdG8gaW52b2tlIHdoZW4gdGhlIGFjdGl2ZURhdGUgaXMgY2hhbmdlZC4gKi9cclxuICBAT3V0cHV0KClcclxuICBhY3RpdmVEYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KFxyXG4gICAgdW5kZWZpbmVkXHJcbiAgKTtcclxuXHJcbiAgQFZpZXdDaGlsZChEYXRlUGlja2VySW5uZXJDb21wb25lbnQpXHJcbiAgX2RhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcclxuXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIG9uQ2hhbmdlOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIG9uVG91Y2hlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBjb25maWc6IERhdGVwaWNrZXJDb25maWc7XHJcblxyXG4gIHByb3RlY3RlZCBfbm93OiBEYXRlID0gbmV3IERhdGUoKTtcclxuICBwcm90ZWN0ZWQgX2FjdGl2ZURhdGU6IERhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogRGF0ZXBpY2tlckNvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XHJcbiAgICB0aGlzLmNvbmZpZ3VyZU9wdGlvbnMoKTtcclxuICB9XHJcblxyXG4gIGNvbmZpZ3VyZU9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG9uVXBkYXRlKGV2ZW50OiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBldmVudDtcclxuICAgIHRoaXMub25DaGFuZ2UoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25TZWxlY3Rpb25Eb25lKGV2ZW50OiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkRvbmUuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkFjdGl2ZURhdGVDaGFuZ2UoZXZlbnQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZUNoYW5nZS5lbWl0KGV2ZW50KTtcclxuICB9XHJcbiAgLy8gdG9kbzogc3VwcG9ydCBudWxsIHZhbHVlXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1hbnkqL1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2RhdGVQaWNrZXIuY29tcGFyZSh2YWx1ZSwgdGhpcy5fYWN0aXZlRGF0ZSkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5fZGF0ZVBpY2tlci5zZWxlY3QodmFsdWUsIGZhbHNlKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IHZvaWQgMDtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxufVxyXG4iLCIvLyBAZGVwcmVjYXRlZFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZVxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGF5cGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSAnZGF5J1wiIHJvbGU9XCJncmlkXCIgW2F0dHIuYXJpYS1sYWJlbGxlZGJ5XT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiIGFyaWEtYWN0aXZlZGVzY2VuZGFudD1cImFjdGl2ZURhdGVJZFwiPlxyXG4gIDx0aGVhZD5cclxuICAgIDx0cj5cclxuICAgICAgPHRoPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCIhaXNCczRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKC0xKVwiXHJcbiAgICAgICAgICAgICAgICB0YWJpbmRleD1cIi0xXCI+w6LCgMK5PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzQnM0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPiZsdDs8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiNSArIChkYXRlUGlja2VyLnNob3dXZWVrcyA/IDEgOiAwKVwiPlxyXG4gICAgICAgIDxidXR0b24gW2lkXT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWlzQnM0XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNlY29uZGFyeSBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCJcclxuICAgICAgICAgICAgICAgIHRhYmluZGV4PVwiLTFcIj7DosKAwro8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNCczRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc2Vjb25kYXJ5IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIlxyXG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9XCItMVwiPiZndDtcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0aCAqbmdJZj1cImRhdGVQaWNrZXIuc2hvd1dlZWtzXCI+PC90aD5cclxuICAgICAgPHRoICpuZ0Zvcj1cImxldCBsYWJlbHogb2YgbGFiZWxzXCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgIDxzbWFsbCBhcmlhLWxhYmVsPVwibGFiZWx6LmZ1bGxcIj48Yj57eyBsYWJlbHouYWJiciB9fTwvYj48L3NtYWxsPlxyXG4gICAgICA8L3RoPlxyXG4gICAgPC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keT5cclxuICAgIDxuZy10ZW1wbGF0ZSBuZ0ZvciBbbmdGb3JPZl09XCJyb3dzXCIgbGV0LXJvd3o9XCIkaW1wbGljaXRcIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxyXG4gICAgICA8dHIgKm5nSWY9XCIhKGRhdGVQaWNrZXIub25seUN1cnJlbnRNb250aCAmJiByb3d6WzBdLnNlY29uZGFyeSAmJiByb3d6WzZdLnNlY29uZGFyeSlcIj5cclxuICAgICAgICA8dGQgKm5nSWY9XCJkYXRlUGlja2VyLnNob3dXZWVrc1wiIGNsYXNzPVwiaDZcIiBjbGFzcz1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZW0+e3sgd2Vla051bWJlcnNbaW5kZXhdIH19PC9lbT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2lkXT1cImR0ei51aWRcIj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWluLXdpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLXNtIHt7ZHR6LmN1c3RvbUNsYXNzfX1cIlxyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cIiEoZGF0ZVBpY2tlci5vbmx5Q3VycmVudE1vbnRoICYmIGR0ei5zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tc2Vjb25kYXJ5JzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQsIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1kZWZhdWx0JzogIWlzQnM0fVwiXHJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtbXV0ZWQnOiBkdHouc2Vjb25kYXJ5IHx8IGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIDpob3N0IC5idG4tc2Vjb25kYXJ5IHtcclxuICAgICAgY29sb3I6ICMyOTJiMmM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2NjYztcclxuICAgIH1cclxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1tdXRlZCB7XHJcbiAgICAgIGNvbG9yOiAjMjkyYjJjICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERheVBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgbGFiZWxzOiBhbnlbXSA9IFtdO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcm93czogYW55W10gPSBbXTtcclxuICB3ZWVrTnVtYmVyczogbnVtYmVyW10gPSBbXTtcclxuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5kYXRlUGlja2VyID0gZGF0ZVBpY2tlcjtcclxuICB9XHJcblxyXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNCczMoKTtcclxuICB9XHJcblxyXG4gIC8qcHJvdGVjdGVkIGdldERheXNJbk1vbnRoKHllYXI6bnVtYmVyLCBtb250aDpudW1iZXIpIHtcclxuICAgcmV0dXJuICgobW9udGggPT09IDEpICYmICh5ZWFyICUgNCA9PT0gMCkgJiZcclxuICAgKCh5ZWFyICUgMTAwICE9PSAwKSB8fCAoeWVhciAlIDQwMCA9PT0gMCkpKSA/IDI5IDogREFZU19JTl9NT05USFttb250aF07XHJcbiAgIH0qL1xyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnN0ZXBEYXkgPSB7IG1vbnRoczogMSB9O1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHllYXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgY29uc3QgbW9udGggPSB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgY29uc3QgZmlyc3REYXlPZk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDEpO1xyXG4gICAgICBjb25zdCBkaWZmZXJlbmNlID0gdGhpcy5zdGFydGluZ0RheSAtIGZpcnN0RGF5T2ZNb250aC5nZXREYXkoKTtcclxuICAgICAgY29uc3QgbnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPVxyXG4gICAgICAgIGRpZmZlcmVuY2UgPiAwID8gNyAtIGRpZmZlcmVuY2UgOiAtZGlmZmVyZW5jZTtcclxuICAgICAgY29uc3QgZmlyc3REYXRlID0gbmV3IERhdGUoZmlyc3REYXlPZk1vbnRoLmdldFRpbWUoKSk7XHJcblxyXG4gICAgICBpZiAobnVtRGlzcGxheWVkRnJvbVByZXZpb3VzTW9udGggPiAwKSB7XHJcbiAgICAgICAgZmlyc3REYXRlLnNldERhdGUoLW51bURpc3BsYXllZEZyb21QcmV2aW91c01vbnRoICsgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDQyIGlzIHRoZSBudW1iZXIgb2YgZGF5cyBvbiBhIHNpeC13ZWVrIGNhbGVuZGFyXHJcbiAgICAgIGNvbnN0IF9kYXlzOiBEYXRlW10gPSBzZWxmLmdldERhdGVzKGZpcnN0RGF0ZSwgNDIpO1xyXG4gICAgICBjb25zdCBkYXlzOiBhbnlbXSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQyOyBpKyspIHtcclxuICAgICAgICBjb25zdCBfZGF0ZU9iamVjdCA9IHRoaXMuY3JlYXRlRGF0ZU9iamVjdChfZGF5c1tpXSwgdGhpcy5mb3JtYXREYXkpO1xyXG4gICAgICAgIF9kYXRlT2JqZWN0LnNlY29uZGFyeSA9IF9kYXlzW2ldLmdldE1vbnRoKCkgIT09IG1vbnRoO1xyXG4gICAgICAgIF9kYXRlT2JqZWN0LnVpZCA9IHRoaXMudW5pcXVlSWQgKyAnLScgKyBpO1xyXG4gICAgICAgIGRheXNbaV0gPSBfZGF0ZU9iamVjdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi5sYWJlbHMgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcclxuICAgICAgICBzZWxmLmxhYmVsc1tqXSA9IHt9O1xyXG4gICAgICAgIHNlbGYubGFiZWxzW2pdLmFiYnIgPSB0aGlzLmRhdGVGaWx0ZXIoXHJcbiAgICAgICAgICBkYXlzW2pdLmRhdGUsXHJcbiAgICAgICAgICB0aGlzLmZvcm1hdERheUhlYWRlclxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2VsZi5sYWJlbHNbal0uZnVsbCA9IHRoaXMuZGF0ZUZpbHRlcihkYXlzW2pdLmRhdGUsICdFRUVFJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYudGl0bGUgPSB0aGlzLmRhdGVGaWx0ZXIodGhpcy5hY3RpdmVEYXRlLCB0aGlzLmZvcm1hdERheVRpdGxlKTtcclxuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdChkYXlzLCA3KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNob3dXZWVrcykge1xyXG4gICAgICAgIHNlbGYud2Vla051bWJlcnMgPSBbXTtcclxuICAgICAgICBjb25zdCB0aHVyc2RheUluZGV4ID0gKDQgKyA3IC0gdGhpcy5zdGFydGluZ0RheSkgJSA3O1xyXG4gICAgICAgIGNvbnN0IG51bVdlZWtzID0gc2VsZi5yb3dzLmxlbmd0aDtcclxuICAgICAgICBmb3IgKGxldCBjdXJXZWVrID0gMDsgY3VyV2VlayA8IG51bVdlZWtzOyBjdXJXZWVrKyspIHtcclxuICAgICAgICAgIHNlbGYud2Vla051bWJlcnMucHVzaChcclxuICAgICAgICAgICAgc2VsZi5nZXRJU084NjAxV2Vla051bWJlcihzZWxmLnJvd3NbY3VyV2Vla11bdGh1cnNkYXlJbmRleF0uZGF0ZSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LCAnZGF5Jyk7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxyXG4gICAgICBkYXRlMTogRGF0ZSxcclxuICAgICAgZGF0ZTI6IERhdGVcclxuICAgICk6IG51bWJlciB7XHJcbiAgICAgIGNvbnN0IGQxID0gbmV3IERhdGUoZGF0ZTEuZ2V0RnVsbFllYXIoKSwgZGF0ZTEuZ2V0TW9udGgoKSwgZGF0ZTEuZ2V0RGF0ZSgpKTtcclxuICAgICAgY29uc3QgZDIgPSBuZXcgRGF0ZShkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpLCBkYXRlMi5nZXREYXRlKCkpO1xyXG4gICAgICByZXR1cm4gZDEuZ2V0VGltZSgpIC0gZDIuZ2V0VGltZSgpO1xyXG4gICAgfSwgJ2RheScpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldERhdGVzKHN0YXJ0RGF0ZTogRGF0ZSwgbjogbnVtYmVyKTogRGF0ZVtdIHtcclxuICAgIGNvbnN0IGRhdGVzOiBEYXRlW10gPSBuZXcgQXJyYXkobik7XHJcbiAgICBsZXQgY3VycmVudCA9IG5ldyBEYXRlKHN0YXJ0RGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgbGV0IGkgPSAwO1xyXG4gICAgbGV0IGRhdGU6IERhdGU7XHJcbiAgICB3aGlsZSAoaSA8IG4pIHtcclxuICAgICAgZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnQuZ2V0VGltZSgpKTtcclxuICAgICAgZGF0ZSA9IHRoaXMuZGF0ZVBpY2tlci5maXhUaW1lWm9uZShkYXRlKTtcclxuICAgICAgZGF0ZXNbaSsrXSA9IGRhdGU7XHJcbiAgICAgIGN1cnJlbnQgPSBuZXcgRGF0ZShcclxuICAgICAgICBkYXRlLmdldEZ1bGxZZWFyKCksXHJcbiAgICAgICAgZGF0ZS5nZXRNb250aCgpLFxyXG4gICAgICAgIGRhdGUuZ2V0RGF0ZSgpICsgMVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRhdGVzO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldElTTzg2MDFXZWVrTnVtYmVyKGRhdGU6IERhdGUpOiBudW1iZXIge1xyXG4gICAgY29uc3QgY2hlY2tEYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgLy8gVGh1cnNkYXlcclxuICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgKyA0IC0gKGNoZWNrRGF0ZS5nZXREYXkoKSB8fCA3KSk7XHJcbiAgICBjb25zdCB0aW1lID0gY2hlY2tEYXRlLmdldFRpbWUoKTtcclxuICAgIC8vIENvbXBhcmUgd2l0aCBKYW4gMVxyXG4gICAgY2hlY2tEYXRlLnNldE1vbnRoKDApO1xyXG4gICAgY2hlY2tEYXRlLnNldERhdGUoMSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBNYXRoLmZsb29yKE1hdGgucm91bmQoKHRpbWUgLSBjaGVja0RhdGUuZ2V0VGltZSgpKSAvIDg2NDAwMDAwKSAvIDcpICsgMVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IGtleSBldmVudHMgaW1wbGVtZW50YXRpb25cclxufVxyXG4iLCIvLyBAZGVwcmVjYXRlZFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZVxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21vbnRocGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlPT09J21vbnRoJ1wiIHJvbGU9XCJncmlkXCI+XHJcbiAgPHRoZWFkPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGg+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCuTwvYnV0dG9uPjwvdGg+XHJcbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIigoZGF0ZVBpY2tlci5tb250aENvbExpbWl0IC0gMikgPD0gMCkgPyAxIDogZGF0ZVBpY2tlci5tb250aENvbExpbWl0IC0gMlwiPlxyXG4gICAgICAgIDxidXR0b24gW2lkXT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IG1heE1vZGVcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBtYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+IFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGg+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj7DosKAwro8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvd3ogb2Ygcm93c1wiPlxyXG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFthdHRyLmlkXT1cImR0ei51aWRcIiBbbmdDbGFzc109XCJkdHouY3VzdG9tQ2xhc3NcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYnRuLWxpbmsnOiBpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCB8fCAoaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eikpLCBkaXNhYmxlZDogZHR6LmRpc2FibGVkLCBhY3RpdmU6ICFpc0JzNCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eil9XCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIuc2VsZWN0KGR0ei5kYXRlKVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1zdWNjZXNzJzogaXNCczQgJiYgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCczQgJiYgZHR6LmN1cnJlbnR9XCI+e3sgZHR6LmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdCAuYnRuLWluZm8gLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vbnRoUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHJvd3M6IGFueVtdID0gW107XHJcbiAgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xyXG4gIG1heE1vZGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcE1vbnRoID0geyB5ZWFyczogMSB9O1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IG1vbnRoczogYW55W10gPSBuZXcgQXJyYXkoMTIpO1xyXG4gICAgICBjb25zdCB5ZWFyOiBudW1iZXIgPSB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgbGV0IGRhdGU6IERhdGU7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoeWVhciwgaSwgMSk7XHJcbiAgICAgICAgZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZSk7XHJcbiAgICAgICAgbW9udGhzW2ldID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0TW9udGgpO1xyXG4gICAgICAgIG1vbnRoc1tpXS51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi50aXRsZSA9IHRoaXMuZGF0ZUZpbHRlcih0aGlzLmFjdGl2ZURhdGUsIHRoaXMuZm9ybWF0TW9udGhUaXRsZSk7XHJcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQobW9udGhzLCBzZWxmLmRhdGVQaWNrZXIubW9udGhDb2xMaW1pdCk7XHJcbiAgICB9LCAnbW9udGgnKTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Q29tcGFyZUhhbmRsZXIoZnVuY3Rpb24oXHJcbiAgICAgIGRhdGUxOiBEYXRlLFxyXG4gICAgICBkYXRlMjogRGF0ZVxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgY29uc3QgZDEgPSBuZXcgRGF0ZShkYXRlMS5nZXRGdWxsWWVhcigpLCBkYXRlMS5nZXRNb250aCgpKTtcclxuICAgICAgY29uc3QgZDIgPSBuZXcgRGF0ZShkYXRlMi5nZXRGdWxsWWVhcigpLCBkYXRlMi5nZXRNb250aCgpKTtcclxuICAgICAgcmV0dXJuIGQxLmdldFRpbWUoKSAtIGQyLmdldFRpbWUoKTtcclxuICAgIH0sICdtb250aCcpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzoga2V5IGV2ZW50cyBpbXBsZW1lbnRhdGlvblxyXG59XHJcbiIsIi8vIEBkZXByZWNhdGVkXHJcbi8vIHRzbGludDpkaXNhYmxlXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VySW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGVwaWNrZXItaW5uZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAneWVhcnBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuPHRhYmxlICpuZ0lmPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZT09PSd5ZWFyJ1wiIHJvbGU9XCJncmlkXCI+XHJcbiAgPHRoZWFkPlxyXG4gICAgPHRyPlxyXG4gICAgICA8dGg+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtbGVmdCBmbG9hdC1sZWZ0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoLTEpXCIgdGFiaW5kZXg9XCItMVwiPsOiwoDCuTwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGggW2F0dHIuY29sc3Bhbl09XCIoKGRhdGVQaWNrZXIueWVhckNvbExpbWl0IC0gMikgPD0gMCkgPyAxIDogZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQgLSAyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBbaWRdPVwiZGF0ZVBpY2tlci51bmlxdWVJZCArICctdGl0bGUnXCIgcm9sZT1cImhlYWRpbmdcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci50b2dnbGVNb2RlKDApXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGVcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwie2Rpc2FibGVkOiBkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlID09PSBkYXRlUGlja2VyLm1heE1vZGV9XCIgdGFiaW5kZXg9XCItMVwiIHN0eWxlPVwid2lkdGg6MTAwJTtcIj5cclxuICAgICAgICAgIDxzdHJvbmc+e3sgdGl0bGUgfX08L3N0cm9uZz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgICAgPHRoPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLXJpZ2h0IGZsb2F0LXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLm1vdmUoMSlcIiB0YWJpbmRleD1cIi0xXCI+w6LCgMK6PC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGhlYWQ+XHJcbiAgPHRib2R5PlxyXG4gICAgPHRyICpuZ0Zvcj1cImxldCByb3d6IG9mIHJvd3NcIj5cclxuICAgICAgPHRkICpuZ0Zvcj1cImxldCBkdHogb2Ygcm93elwiIGNsYXNzPVwidGV4dC1jZW50ZXJcIiByb2xlPVwiZ3JpZGNlbGxcIiBbYXR0ci5pZF09XCJkdHoudWlkXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJtaW4td2lkdGg6MTAwJTtcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2J0bi1saW5rJzogaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiAhZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopLCAnYnRuLWluZm8nOiBkdHouc2VsZWN0ZWQgfHwgKGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopKSwgZGlzYWJsZWQ6IGR0ei5kaXNhYmxlZCwgYWN0aXZlOiAhaXNCczQgJiYgZGF0ZVBpY2tlci5pc0FjdGl2ZShkdHopfVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZHR6LmRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnNlbGVjdChkdHouZGF0ZSlcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJ7J3RleHQtc3VjY2Vzcyc6IGlzQnM0ICYmIGR0ei5jdXJyZW50LCAndGV4dC1pbmZvJzogIWlzQnM0ICYmIGR0ei5jdXJyZW50fVwiPnt7IGR0ei5sYWJlbCB9fTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC90ZD5cclxuICAgIDwvdHI+XHJcbiAgPC90Ym9keT5cclxuPC90YWJsZT5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QgLmJ0bi1pbmZvIC50ZXh0LXN1Y2Nlc3Mge1xyXG4gICAgICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBZZWFyUGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQ7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICByb3dzOiBhbnlbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRlUGlja2VyOiBEYXRlUGlja2VySW5uZXJDb21wb25lbnQpIHtcclxuICAgIHRoaXMuZGF0ZVBpY2tlciA9IGRhdGVQaWNrZXI7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNCczQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIWlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zdGVwWWVhciA9IHsgeWVhcnM6IHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UgfTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0UmVmcmVzaFZpZXdIYW5kbGVyKGZ1bmN0aW9uKCk6IHZvaWQge1xyXG4gICAgICBjb25zdCB5ZWFyczogYW55W10gPSBuZXcgQXJyYXkodGhpcy55ZWFyUmFuZ2UpO1xyXG4gICAgICBsZXQgZGF0ZTogRGF0ZTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBzZWxmLmdldFN0YXJ0aW5nWWVhcih0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKSk7XHJcblxyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMueWVhclJhbmdlOyBpKyspIHtcclxuICAgICAgICBkYXRlID0gbmV3IERhdGUoc3RhcnQgKyBpLCAwLCAxKTtcclxuICAgICAgICBkYXRlID0gdGhpcy5maXhUaW1lWm9uZShkYXRlKTtcclxuICAgICAgICB5ZWFyc1tpXSA9IHRoaXMuY3JlYXRlRGF0ZU9iamVjdChkYXRlLCB0aGlzLmZvcm1hdFllYXIpO1xyXG4gICAgICAgIHllYXJzW2ldLnVpZCA9IHRoaXMudW5pcXVlSWQgKyAnLScgKyBpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZWxmLnRpdGxlID0gW3llYXJzWzBdLmxhYmVsLCB5ZWFyc1t0aGlzLnllYXJSYW5nZSAtIDFdLmxhYmVsXS5qb2luKFxyXG4gICAgICAgICcgLSAnXHJcbiAgICAgICk7XHJcbiAgICAgIHNlbGYucm93cyA9IHRoaXMuc3BsaXQoeWVhcnMsIHNlbGYuZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQpO1xyXG4gICAgfSwgJ3llYXInKTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc2V0Q29tcGFyZUhhbmRsZXIoZnVuY3Rpb24oXHJcbiAgICAgIGRhdGUxOiBEYXRlLFxyXG4gICAgICBkYXRlMjogRGF0ZVxyXG4gICAgKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIGRhdGUxLmdldEZ1bGxZZWFyKCkgLSBkYXRlMi5nZXRGdWxsWWVhcigpO1xyXG4gICAgfSwgJ3llYXInKTtcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIucmVmcmVzaFZpZXcoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRTdGFydGluZ1llYXIoeWVhcjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIC8vIHRvZG86IHBhcnNlSW50XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAoeWVhciAtIDEpIC8gdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSAqIHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UgKyAxXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXRlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2RhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgRGF5UGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXlwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTW9udGhQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL21vbnRocGlja2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFllYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3llYXJwaWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCxcclxuICAgIERheVBpY2tlckNvbXBvbmVudCxcclxuICAgIE1vbnRoUGlja2VyQ29tcG9uZW50LFxyXG4gICAgWWVhclBpY2tlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRGF0ZVBpY2tlckNvbXBvbmVudCxcclxuICAgIERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCxcclxuICAgIERheVBpY2tlckNvbXBvbmVudCxcclxuICAgIE1vbnRoUGlja2VyQ29tcG9uZW50LFxyXG4gICAgWWVhclBpY2tlckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbRGF0ZVBpY2tlckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IERhdGVwaWNrZXJNb2R1bGUsIHByb3ZpZGVyczogW0RhdGVwaWNrZXJDb25maWddIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJJbmplY3RhYmxlIiwiQmVoYXZpb3JTdWJqZWN0IiwiZmlsdGVyIiwibWFwIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsInRzbGliXzEuX192YWx1ZXMiLCJpc0ZpcnN0RGF5T2ZXZWVrIiwiZ2V0RGF5Iiwic2hpZnREYXRlIiwiaXNCZWZvcmUiLCJlbmRPZiIsImlzQWZ0ZXIiLCJzdGFydE9mIiwiaXNTYW1lIiwiZ2V0Rmlyc3REYXlPZk1vbnRoIiwiZm9ybWF0RGF0ZSIsImdldExvY2FsZSIsImlzU2FtZU1vbnRoIiwiaXNTYW1lRGF5IiwiaXNEaXNhYmxlZERheSIsImhlaWdodCIsIndpZHRoIiwic2hpZnQiLCJpc1NhbWVZZWFyIiwic2V0RnVsbERhdGUiLCJpc0RhdGVWYWxpZCIsImlzQXJyYXkiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk1pbmlTdGF0ZSIsIk1pbmlTdG9yZSIsIkV2ZW50RW1pdHRlciIsIkNvbXBvbmVudCIsIlBvc2l0aW9uaW5nU2VydmljZSIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJWaWV3Q29udGFpbmVyUmVmIiwiQ29tcG9uZW50TG9hZGVyRmFjdG9yeSIsIklucHV0IiwiT3V0cHV0IiwiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiTkdfVkFMSURBVE9SUyIsImlzRGF0ZSIsInBhcnNlRGF0ZSIsIkhvc3QiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJWaWV3Q2hpbGQiLCJpc0JzMyIsIkZvcm1zTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztvQ0FjcUIsS0FBSzs7Ozs7a0NBeUNQLGFBQWE7O2lDQUdkLENBQUM7Ozs7bUNBSUMsSUFBSTttQ0FFSixHQUFHOztrQ0FFSixLQUFLOzs7O29DQUlILEdBQUc7OzhCQUdULE1BQU07NkJBQ1AsTUFBTTs0QkFDUCxHQUFHOzhCQUNELE1BQU07NkJBQ1AsTUFBTTsrQkFDSixHQUFHOzs7b0JBbkVsQkEsZUFBVTs7aUNBWFg7OztJQ0FBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlB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