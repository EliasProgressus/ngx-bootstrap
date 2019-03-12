/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { yearsPerCalendar } from '../../engine/format-years-calendar';
import { BsNavigationDirection } from '../../models';
export class BsYearsCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    navigateTo(event) {
        const /** @type {?} */ step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    }
    /**
     * @param {?} year
     * @return {?}
     */
    viewYear(year) {
        this.onSelect.emit(year);
    }
    /**
     * @param {?} cell
     * @param {?} isHovered
     * @return {?}
     */
    hoverYear(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsYearsCalendarViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'bs-years-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="years">
        <tbody>
        <tr *ngFor="let row of calendar.years">
          <td *ngFor="let year of row" role="gridcell"
              (click)="viewYear(year)"
              (mouseenter)="hoverYear(year, true)"
              (mouseleave)="hoverYear(year, false)"
              [class.disabled]="year.isDisabled"
              [class.is-highlighted]="year.isHovered">
            <span>{{ year.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
            }] }
];
/** @nocollapse */
BsYearsCalendarViewComponent.propDecorators = {
    "calendar": [{ type: Input },],
    "onNavigate": [{ type: Output },],
    "onViewMode": [{ type: Output },],
    "onSelect": [{ type: Output },],
    "onHover": [{ type: Output },],
};
function BsYearsCalendarViewComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BsYearsCalendarViewComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BsYearsCalendarViewComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BsYearsCalendarViewComponent.propDecorators;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.calendar;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onNavigate;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onViewMode;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onSelect;
    /** @type {?} */
    BsYearsCalendarViewComponent.prototype.onHover;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ0aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEUsT0FBTyxFQUVMLHFCQUFxQixFQUt0QixNQUFNLGNBQWMsQ0FBQztBQTZCdEIsTUFBTTs7MEJBR21CLElBQUksWUFBWSxFQUFxQjswQkFDckMsSUFBSSxZQUFZLEVBQXdCO3dCQUUxQyxJQUFJLFlBQVksRUFBeUI7dUJBQzFDLElBQUksWUFBWSxFQUFrQjs7Ozs7O0lBRXRELFVBQVUsQ0FBQyxLQUE0QjtRQUNyQyx1QkFBTSxJQUFJLEdBQUcscUJBQXFCLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLEdBQUcsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDbkU7Ozs7O0lBRUQsUUFBUSxDQUFDLElBQTJCO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzFCOzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBMkIsRUFBRSxTQUFrQjtRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0tBQ3hDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUEyQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUM3Qjs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2dCQUNsQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUJUO2FBQ0Y7Ozs7eUJBRUUsS0FBSzsyQkFFTCxNQUFNOzJCQUNOLE1BQU07eUJBRU4sTUFBTTt3QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgeWVhcnNQZXJDYWxlbmRhciB9IGZyb20gJy4uLy4uL2VuZ2luZS9mb3JtYXQteWVhcnMtY2FsZW5kYXInO1xyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcclxuICBCc05hdmlnYXRpb25FdmVudCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXHJcbiAgQ2VsbEhvdmVyRXZlbnQsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLXllYXJzLWNhbGVuZGFyLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcclxuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxyXG5cclxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJ5ZWFyc1wiPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBjYWxlbmRhci55ZWFyc1wiPlxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB5ZWFyIG9mIHJvd1wiIHJvbGU9XCJncmlkY2VsbFwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInZpZXdZZWFyKHllYXIpXCJcclxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlclllYXIoeWVhciwgdHJ1ZSlcIlxyXG4gICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhvdmVyWWVhcih5ZWFyLCBmYWxzZSlcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJ5ZWFyLmlzRGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5pcy1oaWdobGlnaHRlZF09XCJ5ZWFyLmlzSG92ZXJlZFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyB5ZWFyLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjYWxlbmRhcjogWWVhcnNDYWxlbmRhclZpZXdNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNlbGxWaWV3TW9kZWw+KCk7XHJcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xyXG5cclxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XHJcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgeWVhcjogc3RlcCAqIHllYXJzUGVyQ2FsZW5kYXIgfSB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdZZWFyKHllYXI6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCkge1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHllYXIpO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJZZWFyKGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=