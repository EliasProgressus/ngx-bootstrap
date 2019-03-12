/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { BsDatepickerActions } from './bs-datepicker.actions';
import { BsLocaleService } from '../bs-locale.service';
export class BsDatepickerEffects {
    /**
     * @param {?} _actions
     * @param {?} _localeService
     */
    constructor(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    /**
     * @param {?} _bsDatepickerStore
     * @return {?}
     */
    init(_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    }
    /**
     * setters
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this._store.dispatch(this._actions.select(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRangeValue(value) {
        this._store.dispatch(this._actions.selectRange(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMinDate(value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMaxDate(value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDaysDisabled(value) {
        this._store.dispatch(this._actions.daysDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDatesDisabled(value) {
        this._store.dispatch(this._actions.datesDisabled(value));
        return this;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDisabled(value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    }
    /**
     * @param {?} _config
     * @return {?}
     */
    setOptions(_config) {
        const /** @type {?} */ _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    }
    /**
     * view to mode bindings
     * @param {?} container
     * @return {?}
     */
    setBindings(container) {
        container.daysCalendar = this._store
            .select(state => state.flaggedMonths)
            .pipe(filter(months => !!months));
        // month calendar
        container.monthsCalendar = this._store
            .select(state => state.flaggedMonthsCalendar)
            .pipe(filter(months => !!months));
        // year calendar
        container.yearsCalendar = this._store
            .select(state => state.yearsCalendarFlagged)
            .pipe(filter(years => !!years));
        container.viewMode = this._store.select(state => state.view.mode);
        container.options = this._store
            .select(state => state.showWeekNumbers)
            .pipe(map(showWeekNumbers => ({ showWeekNumbers })));
        return this;
    }
    /**
     * event handlers
     * @param {?} container
     * @return {?}
     */
    setEventHandlers(container) {
        container.setViewMode = (event) => {
            this._store.dispatch(this._actions.changeViewMode(event));
        };
        container.navigateTo = (event) => {
            this._store.dispatch(this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = (event) => {
            const /** @type {?} */ _cell = /** @type {?} */ (event.cell);
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.monthSelectHandler = (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    month: getMonth(event.date),
                    year: getFullYear(event.date)
                },
                viewMode: 'day'
            }));
        };
        container.yearSelectHandler = (event) => {
            if (event.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    year: getFullYear(event.date)
                },
                viewMode: 'month'
            }));
        };
        return this;
    }
    /**
     * @return {?}
     */
    registerDatepickerSideEffects() {
        this._subs.push(this._store.select(state => state.view).subscribe(view => {
            this._store.dispatch(this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(state => state.monthsModel)
            .pipe(filter(monthModel => !!monthModel))
            .subscribe(month => this._store.dispatch(this._actions.format())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.formattedMonths)
            .pipe(filter(month => !!month))
            .subscribe(month => this._store.dispatch(this._actions.flag())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.selectedDate)
            .pipe(filter(selectedDate => !!selectedDate))
            .subscribe(selectedDate => this._store.dispatch(this._actions.flag())));
        // flag for date range picker
        this._subs.push(this._store
            .select(state => state.selectedRange)
            .pipe(filter(selectedRange => !!selectedRange))
            .subscribe(selectedRange => this._store.dispatch(this._actions.flag())));
        // monthsCalendar
        this._subs.push(this._store
            .select(state => state.monthsCalendar)
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // years calendar
        this._subs.push(this._store
            .select(state => state.yearsCalendarModel)
            .pipe(filter(state => !!state))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // on hover
        this._subs.push(this._store
            .select(state => state.hoveredDate)
            .pipe(filter(hoveredDate => !!hoveredDate))
            .subscribe(hoveredDate => this._store.dispatch(this._actions.flag())));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(locale => this._store.dispatch(this._actions.setLocale(locale))));
        return this;
    }
    /**
     * @return {?}
     */
    destroy() {
        for (const /** @type {?} */ sub of this._subs) {
            sub.unsubscribe();
        }
    }
}
BsDatepickerEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BsDatepickerEffects.ctorParameters = () => [
    { type: BsDatepickerActions, },
    { type: BsLocaleService, },
];
function BsDatepickerEffects_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerEffects.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerEffects.ctorParameters;
    /** @type {?} */
    BsDatepickerEffects.prototype.viewMode;
    /** @type {?} */
    BsDatepickerEffects.prototype.daysCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.monthsCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.yearsCalendar;
    /** @type {?} */
    BsDatepickerEffects.prototype.options;
    /** @type {?} */
    BsDatepickerEffects.prototype._store;
    /** @type {?} */
    BsDatepickerEffects.prototype._subs;
    /** @type {?} */
    BsDatepickerEffects.prototype._actions;
    /** @type {?} */
    BsDatepickerEffects.prototype._localeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5lZmZlY3RzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9kYXRlcGlja2VyLyIsInNvdXJjZXMiOlsicmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWdCdkQsTUFBTTs7Ozs7SUFVSixZQUFvQixRQUE2QixFQUM3QjtRQURBLGFBQVEsR0FBUixRQUFRLENBQXFCO1FBQzdCLG1CQUFjLEdBQWQsY0FBYztxQkFIRixFQUFFO0tBR3FCOzs7OztJQUV2RCxJQUFJLENBQUMsa0JBQXFDO1FBQ3hDLElBQUksQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFFakMsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiOzs7Ozs7SUFJRCxRQUFRLENBQUMsS0FBVztRQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ25EOzs7OztJQUVELGFBQWEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDeEQ7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQVc7UUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxD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SUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07YUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xDLElBQUksQ0FDSCxNQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQ25DO2FBQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQ3BFLENBQUM7O1FBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07YUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2FBQ3RDLElBQUksQ0FDSCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQ3pCO2FBQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQ2xFLENBQUM7O1FBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07YUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ25DLElBQUksQ0FDSCxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQ3ZDO2FBQ0EsU0FBUyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQ3pFLENBQUM7O1FBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07YUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDO2FBQ3BDLElBQUksQ0FDSCxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQ3pDO2FBQ0EsU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQzFFLENBQUM7O1FBR0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsSUFBSSxDQUFDLE1BQU07YUFDUixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDO2FBQ3JDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDL0QsQ0FBQzs7UUFHRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsTUFBTTthQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQzthQUN6QyxJQUFJLENBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUN6QjthQUNBLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDL0QsQ0FBQzs7UUFHRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsTUFBTTthQUNSLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDbEMsSUFBSSxDQUNILE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FDckM7YUFDQSxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FDeEUsQ0FBQzs7UUFHRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVk7YUFDN0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUM5RSxDQUFDO1FBRUYsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNiOzs7O0lBRUQsT0FBTztRQUNMLEdBQUcsQ0FBQyxDQUFDLHVCQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkI7S0FDRjs7O1lBeFBGLFVBQVU7Ozs7WUFsQkYsbUJBQW1CO1lBR25CLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5zdG9yZSc7XHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4uL2JzLWxvY2FsZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNOYXZpZ2F0aW9uRXZlbnQsXHJcbiAgQ2FsZW5kYXJDZWxsVmlld01vZGVsLFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxyXG4gIERheXNDYWxlbmRhclZpZXdNb2RlbCxcclxuICBEYXlWaWV3TW9kZWwsXHJcbiAgTW9udGhzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uL21vZGVscyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgdmlld01vZGU6IE9ic2VydmFibGU8QnNEYXRlcGlja2VyVmlld01vZGU+O1xyXG4gIGRheXNDYWxlbmRhcjogT2JzZXJ2YWJsZTxEYXlzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgbW9udGhzQ2FsZW5kYXI6IE9ic2VydmFibGU8TW9udGhzQ2FsZW5kYXJWaWV3TW9kZWxbXT47XHJcbiAgeWVhcnNDYWxlbmRhcjogT2JzZXJ2YWJsZTxZZWFyc0NhbGVuZGFyVmlld01vZGVsW10+O1xyXG4gIG9wdGlvbnM6IE9ic2VydmFibGU8RGF0ZXBpY2tlclJlbmRlck9wdGlvbnM+O1xyXG5cclxuICBwcml2YXRlIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmU7XHJcbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcclxuICAgICAgICAgICAgICBwcml2YXRlIF9sb2NhbGVTZXJ2aWNlOiBCc0xvY2FsZVNlcnZpY2UpIHt9XHJcblxyXG4gIGluaXQoX2JzRGF0ZXBpY2tlclN0b3JlOiBCc0RhdGVwaWNrZXJTdG9yZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgdGhpcy5fc3RvcmUgPSBfYnNEYXRlcGlja2VyU3RvcmU7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKiogc2V0dGVycyAqL1xyXG5cclxuICBzZXRWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QodmFsdWUpKTtcclxuICB9XHJcblxyXG4gIHNldFJhbmdlVmFsdWUodmFsdWU6IERhdGVbXSk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3RSYW5nZSh2YWx1ZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0TWluRGF0ZSh2YWx1ZTogRGF0ZSk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5taW5EYXRlKHZhbHVlKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRNYXhEYXRlKHZhbHVlOiBEYXRlKTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLm1heERhdGUodmFsdWUpKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldERheXNEaXNhYmxlZCh2YWx1ZTogbnVtYmVyW10pIHtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF5c0Rpc2FibGVkKHZhbHVlKSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXREYXRlc0Rpc2FibGVkKHZhbHVlOiBEYXRlW10pIHtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZGF0ZXNEaXNhYmxlZCh2YWx1ZSkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuaXNEaXNhYmxlZCh2YWx1ZSkpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyogU2V0IHJlbmRlcmluZyBvcHRpb25zICovXHJcbiAgc2V0T3B0aW9ucyhfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIGNvbnN0IF9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7bG9jYWxlOiB0aGlzLl9sb2NhbGVTZXJ2aWNlLmN1cnJlbnRMb2NhbGV9LCBfY29uZmlnKTtcclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuc2V0T3B0aW9ucyhfb3B0aW9ucykpO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIHZpZXcgdG8gbW9kZSBiaW5kaW5ncyAqL1xyXG4gIHNldEJpbmRpbmdzKGNvbnRhaW5lcjogQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQpOiBCc0RhdGVwaWNrZXJFZmZlY3RzIHtcclxuICAgIGNvbnRhaW5lci5kYXlzQ2FsZW5kYXIgPSB0aGlzLl9zdG9yZVxyXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmZsYWdnZWRNb250aHMpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGZpbHRlcihtb250aHMgPT4gISFtb250aHMpXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gbW9udGggY2FsZW5kYXJcclxuICAgIGNvbnRhaW5lci5tb250aHNDYWxlbmRhciA9IHRoaXMuX3N0b3JlXHJcbiAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZmxhZ2dlZE1vbnRoc0NhbGVuZGFyKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIobW9udGhzID0+ICEhbW9udGhzKVxyXG4gICAgICApO1xyXG5cclxuICAgIC8vIHllYXIgY2FsZW5kYXJcclxuICAgIGNvbnRhaW5lci55ZWFyc0NhbGVuZGFyID0gdGhpcy5fc3RvcmVcclxuICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS55ZWFyc0NhbGVuZGFyRmxhZ2dlZClcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZmlsdGVyKHllYXJzID0+ICEheWVhcnMpXHJcbiAgICAgICk7XHJcblxyXG4gICAgY29udGFpbmVyLnZpZXdNb2RlID0gdGhpcy5fc3RvcmUuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnZpZXcubW9kZSk7XHJcblxyXG4gICAgY29udGFpbmVyLm9wdGlvbnMgPSB0aGlzLl9zdG9yZVxyXG4gICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNob3dXZWVrTnVtYmVycylcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgbWFwKHNob3dXZWVrTnVtYmVycyA9PiAoe3Nob3dXZWVrTnVtYmVyc30pKVxyXG4gICAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqIGV2ZW50IGhhbmRsZXJzICovXHJcbiAgc2V0RXZlbnRIYW5kbGVycyhjb250YWluZXI6IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50KTogQnNEYXRlcGlja2VyRWZmZWN0cyB7XHJcbiAgICBjb250YWluZXIuc2V0Vmlld01vZGUgPSAoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCA9PiB7XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuY2hhbmdlVmlld01vZGUoZXZlbnQpKTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLm5hdmlnYXRlVG8gPSAoZXZlbnQ6IEJzTmF2aWdhdGlvbkV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMubmF2aWdhdGVTdGVwKGV2ZW50LnN0ZXApKTtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLmRheUhvdmVySGFuZGxlciA9IChldmVudDogQ2VsbEhvdmVyRXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgY29uc3QgX2NlbGwgPSBldmVudC5jZWxsIGFzIERheVZpZXdNb2RlbDtcclxuICAgICAgaWYgKF9jZWxsLmlzT3RoZXJNb250aCB8fCBfY2VsbC5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmhvdmVyRGF5KGV2ZW50KSk7XHJcbiAgICAgIF9jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLm1vbnRoSG92ZXJIYW5kbGVyID0gKGV2ZW50OiBDZWxsSG92ZXJFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICBldmVudC5jZWxsLmlzSG92ZXJlZCA9IGV2ZW50LmlzSG92ZXJlZDtcclxuICAgIH07XHJcblxyXG4gICAgY29udGFpbmVyLnllYXJIb3ZlckhhbmRsZXIgPSAoZXZlbnQ6IENlbGxIb3ZlckV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICAgIGV2ZW50LmNlbGwuaXNIb3ZlcmVkID0gZXZlbnQuaXNIb3ZlcmVkO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb250YWluZXIubW9udGhTZWxlY3RIYW5kbGVyID0gKGV2ZW50OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkID0+IHtcclxuICAgICAgaWYgKGV2ZW50LmlzRGlzYWJsZWQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgICAgdGhpcy5fYWN0aW9ucy5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVuaXQ6IHtcclxuICAgICAgICAgICAgbW9udGg6IGdldE1vbnRoKGV2ZW50LmRhdGUpLFxyXG4gICAgICAgICAgICB5ZWFyOiBnZXRGdWxsWWVhcihldmVudC5kYXRlKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZpZXdNb2RlOiAnZGF5J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnRhaW5lci55ZWFyU2VsZWN0SGFuZGxlciA9IChldmVudDogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCA9PiB7XHJcbiAgICAgIGlmIChldmVudC5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1bml0OiB7XHJcbiAgICAgICAgICAgIHllYXI6IGdldEZ1bGxZZWFyKGV2ZW50LmRhdGUpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdmlld01vZGU6ICdtb250aCdcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyRGF0ZXBpY2tlclNpZGVFZmZlY3RzKCk6IEJzRGF0ZXBpY2tlckVmZmVjdHMge1xyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUudmlldykuc3Vic2NyaWJlKHZpZXcgPT4ge1xyXG4gICAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuY2FsY3VsYXRlKCkpO1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBmb3JtYXQgY2FsZW5kYXIgdmFsdWVzIG9uIG1vbnRoIG1vZGVsIGNoYW5nZVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUubW9udGhzTW9kZWwpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIobW9udGhNb2RlbCA9PiAhIW1vbnRoTW9kZWwpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobW9udGggPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mb3JtYXQoKSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIGZsYWcgZGF5IHZhbHVlc1xyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuZm9ybWF0dGVkTW9udGhzKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKG1vbnRoID0+ICEhbW9udGgpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUobW9udGggPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBmbGFnIGRheSB2YWx1ZXNcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkRGF0ZSlcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihzZWxlY3RlZERhdGUgPT4gISFzZWxlY3RlZERhdGUpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWREYXRlID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gZmxhZyBmb3IgZGF0ZSByYW5nZSBwaWNrZXJcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnNlbGVjdGVkUmFuZ2UpXHJcbiAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoc2VsZWN0ZWRSYW5nZSA9PiAhIXNlbGVjdGVkUmFuZ2UpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoc2VsZWN0ZWRSYW5nZSA9PiB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLmZsYWcoKSkpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIG1vbnRoc0NhbGVuZGFyXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlXHJcbiAgICAgICAgLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5tb250aHNDYWxlbmRhcilcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8geWVhcnMgY2FsZW5kYXJcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLnllYXJzQ2FsZW5kYXJNb2RlbClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIGZpbHRlcihzdGF0ZSA9PiAhIXN0YXRlKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX2FjdGlvbnMuZmxhZygpKSlcclxuICAgICk7XHJcblxyXG4gICAgLy8gb24gaG92ZXJcclxuICAgIHRoaXMuX3N1YnMucHVzaChcclxuICAgICAgdGhpcy5fc3RvcmVcclxuICAgICAgICAuc2VsZWN0KHN0YXRlID0+IHN0YXRlLmhvdmVyZWREYXRlKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZmlsdGVyKGhvdmVyZWREYXRlID0+ICEhaG92ZXJlZERhdGUpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoaG92ZXJlZERhdGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5mbGFnKCkpKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBvbiBsb2NhbGUgY2hhbmdlXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX2xvY2FsZVNlcnZpY2UubG9jYWxlQ2hhbmdlXHJcbiAgICAgICAgLnN1YnNjcmliZShsb2NhbGUgPT4gdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZXRMb2NhbGUobG9jYWxlKSkpXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==