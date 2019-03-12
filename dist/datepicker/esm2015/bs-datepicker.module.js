/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDatepickerInputDirective } from './bs-datepicker-input.directive';
import { BsDatepickerDirective } from './bs-datepicker.component';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInputDirective } from './bs-daterangepicker-input.directive';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsDaterangepickerConfig } from './bs-daterangepicker.config';
import { BsDatepickerInlineDirective } from './bs-datepicker-inline.component';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { BsLocaleService } from './bs-locale.service';
import { BsDatepickerActions } from './reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from './reducer/bs-datepicker.effects';
import { BsDatepickerStore } from './reducer/bs-datepicker.store';
import { BsCalendarLayoutComponent } from './themes/bs/bs-calendar-layout.component';
import { BsCurrentDateViewComponent } from './themes/bs/bs-current-date-view.component';
import { BsCustomDatesViewComponent } from './themes/bs/bs-custom-dates-view.component';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { BsDatepickerDayDecoratorComponent } from './themes/bs/bs-datepicker-day-decorator.directive';
import { BsDatepickerNavigationViewComponent } from './themes/bs/bs-datepicker-navigation-view.component';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { BsDaysCalendarViewComponent } from './themes/bs/bs-days-calendar-view.component';
import { BsMonthCalendarViewComponent } from './themes/bs/bs-months-calendar-view.component';
import { BsTimepickerViewComponent } from './themes/bs/bs-timepicker-view.component';
import { BsYearsCalendarViewComponent } from './themes/bs/bs-years-calendar-view.component';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
const /** @type {?} */ _exports = [
    BsDatepickerContainerComponent,
    BsDaterangepickerContainerComponent,
    BsDatepickerInlineContainerComponent,
    BsDatepickerDirective,
    BsDatepickerInputDirective,
    BsDaterangepickerInputDirective,
    BsDaterangepickerDirective,
    BsDatepickerInlineDirective
];
export class BsDatepickerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerConfig,
                BsDaterangepickerConfig,
                BsDatepickerInlineConfig,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    }
}
BsDatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [
                    BsDatepickerDayDecoratorComponent,
                    BsCurrentDateViewComponent,
                    BsDatepickerNavigationViewComponent,
                    BsTimepickerViewComponent,
                    BsCalendarLayoutComponent,
                    BsDaysCalendarViewComponent,
                    BsMonthCalendarViewComponent,
                    BsYearsCalendarViewComponent,
                    BsCustomDatesViewComponent,
                    ..._exports
                ],
                entryComponents: [
                    BsDatepickerContainerComponent,
                    BsDaterangepickerContainerComponent,
                    BsDatepickerInlineContainerComponent
                ],
                exports: _exports
            },] }
];
function BsDatepickerModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsDatepickerModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsDatepickerModule.ctorParameters;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJicy1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRS9ELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN4RixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUN6RyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUMxRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM3RixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUM1RixPQUFPLEVBQUUsb0NBQW9DLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUU1Ryx1QkFBTSxRQUFRLEdBQUc7SUFDZiw4QkFBOEI7SUFDOUIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUVwQyxxQkFBcUI7SUFDckIsMEJBQTBCO0lBRTFCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFFMUIsMkJBQTJCO0NBQzVCLENBQUM7QUEwQkYsTUFBTTs7OztJQUNKLE1BQU0sQ0FBQyxPQUFPO1FBQ1osTUFBTSxDQUFDO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUU7Z0JBQ1Qsc0JBQXNCO2dCQUN0QixrQkFBa0I7Z0JBQ2xCLGlCQUFpQjtnQkFDakIsbUJBQW1CO2dCQUNuQixrQkFBa0I7Z0JBQ2xCLHVCQUF1QjtnQkFDdkIsd0JBQXdCO2dCQUN4QixtQkFBbUI7Z0JBQ25CLGVBQWU7YUFDaEI7U0FDRixDQUFDO0tBQ0g7OztZQXhDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUU7b0JBQ1osaUNBQWlDO29CQUNqQywwQkFBMEI7b0JBQzFCLG1DQUFtQztvQkFDbkMseUJBQXlCO29CQUV6Qix5QkFBeUI7b0JBQ3pCLDJCQUEyQjtvQkFDM0IsNEJBQTRCO29CQUM1Qiw0QkFBNEI7b0JBRTVCLDBCQUEwQjtvQkFFMUIsR0FBRyxRQUFRO2lCQUNaO2dCQUNELGVBQWUsRUFBRTtvQkFDZiw4QkFBOEI7b0JBQzlCLG1DQUFtQztvQkFDbkMsb0NBQW9DO2lCQUNyQztnQkFDRCxPQUFPLEVBQUUsUUFBUTthQUNsQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudExvYWRlckZhY3RvcnkgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2NvbXBvbmVudC1sb2FkZXInO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWcgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVwaWNrZXItaW5saW5lLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklubGluZUNvbmZpZyB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1pbmxpbmUuY29uZmlnJztcclxuXHJcbmltcG9ydCB7IEJzTG9jYWxlU2VydmljZSB9IGZyb20gJy4vYnMtbG9jYWxlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XHJcbmltcG9ydCB7IEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jYWxlbmRhci1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jdXJyZW50LWRhdGUtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItZGF5LWRlY29yYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNNb250aENhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLW1vbnRocy1jYWxlbmRhci12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzVGltZXBpY2tlclZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNZZWFyc0NhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLXllYXJzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBfZXhwb3J0cyA9IFtcclxuICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50LFxyXG5cclxuICBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXHJcbiAgQnNEYXRlcGlja2VySW5wdXREaXJlY3RpdmUsXHJcblxyXG4gIEJzRGF0ZXJhbmdlcGlja2VySW5wdXREaXJlY3RpdmUsXHJcbiAgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXHJcblxyXG4gIEJzRGF0ZXBpY2tlcklubGluZURpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCxcclxuICAgIEJzQ3VycmVudERhdGVWaWV3Q29tcG9uZW50LFxyXG4gICAgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQsXHJcbiAgICBCc1RpbWVwaWNrZXJWaWV3Q29tcG9uZW50LFxyXG5cclxuICAgIEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQsXHJcbiAgICBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQsXHJcbiAgICBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxyXG4gICAgQnNZZWFyc0NhbGVuZGFyVmlld0NvbXBvbmVudCxcclxuXHJcbiAgICBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCxcclxuXHJcbiAgICAuLi5fZXhwb3J0c1xyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudFxyXG4gIF0sXHJcbiAgZXhwb3J0czogX2V4cG9ydHNcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogQnNEYXRlcGlja2VyTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBDb21wb25lbnRMb2FkZXJGYWN0b3J5LFxyXG4gICAgICAgIFBvc2l0aW9uaW5nU2VydmljZSxcclxuICAgICAgICBCc0RhdGVwaWNrZXJTdG9yZSxcclxuICAgICAgICBCc0RhdGVwaWNrZXJBY3Rpb25zLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlckNvbmZpZyxcclxuICAgICAgICBCc0RhdGVyYW5nZXBpY2tlckNvbmZpZyxcclxuICAgICAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb25maWcsXHJcbiAgICAgICAgQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgICAgICBCc0xvY2FsZVNlcnZpY2VcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19