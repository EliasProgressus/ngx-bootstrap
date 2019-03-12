/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, EventEmitter } from '@angular/core';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
var BsDaterangepickerContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BsDaterangepickerContainerComponent, _super);
    function BsDaterangepickerContainerComponent(_effects, _actions, _config, _store, _positionService) {
        var _this = _super.call(this) || this;
        _this._actions = _actions;
        _this._config = _config;
        _this._store = _store;
        _this._positionService = _positionService;
        _this.valueChange = new EventEmitter();
        _this._rangeStack = [];
        _this._subs = [];
        _this._effects = _effects;
        return _this;
    }
    Object.defineProperty(BsDaterangepickerContainerComponent.prototype, "value", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
            for (var _a = tslib_1.__values(this._subs), _b = _a.next(); !_b.done; _b = _a.next()) {
                var sub = _b.value;
                sub.unsubscribe();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this._effects.destroy();
        var e_1, _c;
    };
    BsDaterangepickerContainerComponent.decorators = [
        { type: Component, args: [{
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
    BsDaterangepickerContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerEffects, },
        { type: BsDatepickerActions, },
        { type: BsDatepickerConfig, },
        { type: BsDatepickerStore, },
        { type: PositioningService, },
    ]; };
    return BsDaterangepickerContainerComponent;
}(BsDatepickerAbstractComponent));
export { BsDaterangepickerContainerComponent };
function BsDaterangepickerContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDaterangepickerContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDaterangepickerContainerComponent.ctorParameters;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype.valueChange;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._rangeStack;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._subs;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._actions;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._config;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._store;
    /** @type {?} */
    BsDaterangepickerContainerComponent.prototype._positionService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ0aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBZ0JOLCtEQUE2QjtJQVVwRiw2Q0FDRSxRQUE2QixFQUNyQixVQUNBLFNBQ0EsUUFDQTtRQUxWLFlBT0UsaUJBQU8sU0FFUjtRQVBTLGNBQVEsR0FBUixRQUFRO1FBQ1IsYUFBTyxHQUFQLE9BQU87UUFDUCxZQUFNLEdBQU4sTUFBTTtRQUNOLHNCQUFnQixHQUFoQixnQkFBZ0I7NEJBVFosSUFBSSxZQUFZLEVBQVU7NEJBRWxCLEVBQUU7c0JBQ0EsRUFBRTtRQVN4QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQzs7S0FDMUI7SUFqQkQsc0JBQUksc0RBQUs7Ozs7O1FBQVQsVUFBVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDOzs7T0FBQTs7OztJQWlCRCxzREFBUTs7O0lBQVI7UUFBQSxp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QUM7b0JBQ25ELGlqRkFBd0M7b0JBQ3hDLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxLQUFLLEVBQUUscUNBQXFDO3dCQUM1QyxJQUFJLEVBQUUsUUFBUTt3QkFDZCxZQUFZLEVBQUUsVUFBVTtxQkFDekI7aUJBQ0Y7Ozs7Z0JBakJRLG1CQUFtQjtnQkFEbkIsbUJBQW1CO2dCQUZuQixrQkFBa0I7Z0JBSWxCLGlCQUFpQjtnQkFDakIsa0JBQWtCOzs4Q0FSM0I7RUF3QnlELDZCQUE2QjtTQUF6RSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgRGF5Vmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcicsXHJcbiAgcHJvdmlkZXJzOiBbQnNEYXRlcGlja2VyU3RvcmUsIEJzRGF0ZXBpY2tlckVmZmVjdHNdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcclxuICAgIHN0eWxlOiAncG9zaXRpb246IGFic29sdXRlOyBkaXNwbGF5OiBibG9jazsnLFxyXG4gICAgcm9sZTogJ2RpYWxvZycsXHJcbiAgICAnYXJpYS1sYWJlbCc6ICdjYWxlbmRhcidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlW10pIHtcclxuICAgIHRoaXMuX2VmZmVjdHMuc2V0UmFuZ2VWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVtdPigpO1xyXG5cclxuICBfcmFuZ2VTdGFjazogRGF0ZVtdID0gW107XHJcbiAgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICBwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcclxuICAgIHByaXZhdGUgX3N0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSxcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fZWZmZWN0cyA9IF9lZmZlY3RzO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2Uuc2V0T3B0aW9ucyh7XHJcbiAgICAgIG1vZGlmaWVyczoge1xyXG4gICAgICAgIGZsaXA6IHtcclxuICAgICAgICAgIGVuYWJsZWQ6IHRoaXMuX2NvbmZpZy5hZGFwdGl2ZVBvc2l0aW9uXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lckNsYXNzID0gdGhpcy5fY29uZmlnLmNvbnRhaW5lckNsYXNzO1xyXG4gICAgdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID0gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoO1xyXG4gICAgdGhpcy5fZWZmZWN0c1xyXG4gICAgICAuaW5pdCh0aGlzLl9zdG9yZSlcclxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcclxuICAgICAgLy8gdG9kbzogZml4IHRoaXMsIHNwbGl0IGNvbmZpZ3NcclxuICAgICAgLnNldE9wdGlvbnModGhpcy5fY29uZmlnKVxyXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcclxuICAgICAgLnNldEJpbmRpbmdzKHRoaXMpXHJcbiAgICAgIC8vIHNldCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxyXG4gICAgICAucmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTtcclxuXHJcbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXHJcbiAgICAvLyBvbiBzZWxlY3RlZCBkYXRlIGNoYW5nZVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWRSYW5nZSlcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGUgPT4gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPyBkYXkuaXNEaXNhYmxlZCA6IChkYXkuaXNPdGhlck1vbnRoIHx8IGRheS5pc0Rpc2FibGVkKTtcclxuXHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaWYgb25seSBvbmUgZGF0ZSBpcyBhbHJlYWR5IHNlbGVjdGVkXHJcbiAgICAvLyBhbmQgdXNlciBjbGlja3Mgb24gcHJldmlvdXMgZGF0ZVxyXG4gICAgLy8gc3RhcnQgc2VsZWN0aW9uIGZyb20gbmV3IGRhdGVcclxuICAgIC8vIGJ1dCBpZiBuZXcgZGF0ZSBpcyBhZnRlciBpbml0aWFsIG9uZVxyXG4gICAgLy8gdGhhbiBmaW5pc2ggc2VsZWN0aW9uXHJcbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9XHJcbiAgICAgICAgZGF5LmRhdGUgPj0gdGhpcy5fcmFuZ2VTdGFja1swXVxyXG4gICAgICAgICAgPyBbdGhpcy5fcmFuZ2VTdGFja1swXSwgZGF5LmRhdGVdXHJcbiAgICAgICAgICA6IFtkYXkuZGF0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX3JhbmdlU3RhY2subGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBbZGF5LmRhdGVdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2VsZWN0UmFuZ2UodGhpcy5fcmFuZ2VTdGFjaykpO1xyXG5cclxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLl9yYW5nZVN0YWNrID0gW107XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9lZmZlY3RzLmRlc3Ryb3koKTtcclxuICB9XHJcbn1cclxuIl19