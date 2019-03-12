/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BsDatepickerContainerComponent } from './bs-datepicker-container.component';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
var BsDatepickerInlineContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BsDatepickerInlineContainerComponent, _super);
    function BsDatepickerInlineContainerComponent(_config, _store, _actions, _effects, _positioningService) {
        return _super.call(this, _config, _store, _actions, _effects, _positioningService) || this;
    }
    BsDatepickerInlineContainerComponent.decorators = [
        { type: Component, args: [{
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
    BsDatepickerInlineContainerComponent.ctorParameters = function () { return [
        { type: BsDatepickerConfig, },
        { type: BsDatepickerStore, },
        { type: BsDatepickerActions, },
        { type: BsDatepickerEffects, },
        { type: PositioningService, },
    ]; };
    return BsDatepickerInlineContainerComponent;
}(BsDatepickerContainerComponent));
export { BsDatepickerInlineContainerComponent };
function BsDatepickerInlineContainerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerInlineContainerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerInlineContainerComponent.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvZGF0ZXBpY2tlci8iLCJzb3VyY2VzIjpbInRoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBV0wsZ0VBQThCO0lBRXRGLDhDQUNFLE9BQTJCLEVBQzNCLE1BQXlCLEVBQ3pCLFFBQTZCLEVBQzdCLFFBQTZCLEVBQzdCLG1CQUF1QztlQUV2QyxrQkFBTSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsbUJBQW1CLENBQUM7S0FDaEU7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdDQUFnQztvQkFDMUMsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7b0JBQ25ELGlqRkFBd0M7b0JBQ3hDLElBQUksRUFBRTt3QkFDSixTQUFTLEVBQUUsMEJBQTBCO3dCQUNyQyxLQUFLLEVBQUUsd0JBQXdCO3FCQUNoQztpQkFDRjs7OztnQkFmUSxrQkFBa0I7Z0JBR2xCLGlCQUFpQjtnQkFGakIsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBR25CLGtCQUFrQjs7K0NBUjNCO0VBbUIwRCw4QkFBOEI7U0FBM0Usb0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuLi8uLi9icy1kYXRlcGlja2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXInLFxyXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXHJcbiAgICBzdHlsZTogJ2Rpc3BsYXk6IGlubGluZS1ibG9jazsnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXHJcbiAgICBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxyXG4gICAgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgIF9wb3NpdGlvbmluZ1NlcnZpY2U6IFBvc2l0aW9uaW5nU2VydmljZVxyXG4gICkge1xyXG4gICAgc3VwZXIoX2NvbmZpZywgX3N0b3JlLCBfYWN0aW9ucywgX2VmZmVjdHMsIF9wb3NpdGlvbmluZ1NlcnZpY2UpO1xyXG4gIH1cclxufVxyXG4iXX0=