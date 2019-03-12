/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { DatePickerInnerComponent } from './datepicker-inner.component';
export class YearPickerComponent {
    /**
     * @param {?} datePicker
     */
    constructor(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ self = this;
        this.datePicker.stepYear = { years: this.datePicker.yearRange };
        this.datePicker.setRefreshViewHandler(function () {
            const /** @type {?} */ years = new Array(this.yearRange);
            let /** @type {?} */ date;
            const /** @type {?} */ start = self.getStartingYear(this.activeDate.getFullYear());
            for (let /** @type {?} */ i = 0; i < this.yearRange; i++) {
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
    }
    /**
     * @param {?} year
     * @return {?}
     */
    getStartingYear(year) {
        // todo: parseInt
        return ((year - 1) / this.datePicker.yearRange * this.datePicker.yearRange + 1);
    }
}
YearPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'yearpicker',
                template: `
<table *ngIf="datePicker.datepickerMode==='year'" role="grid">
  <thead>
    <tr>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-left float-left"
                (click)="datePicker.move(-1)" tabindex="-1">‹</button>
      </th>
      <th [attr.colspan]="((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2">
        <button [id]="datePicker.uniqueId + '-title'" role="heading"
                type="button" class="btn btn-default btn-sm"
                (click)="datePicker.toggleMode(0)"
                [disabled]="datePicker.datepickerMode === datePicker.maxMode"
                [ngClass]="{disabled: datePicker.datepickerMode === datePicker.maxMode}" tabindex="-1" style="width:100%;">
          <strong>{{ title }}</strong>
        </button>
      </th>
      <th>
        <button type="button" class="btn btn-default btn-sm pull-right float-right"
                (click)="datePicker.move(1)" tabindex="-1">›</button>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let rowz of rows">
      <td *ngFor="let dtz of rowz" class="text-center" role="gridcell" [attr.id]="dtz.uid">
        <button type="button" style="min-width:100%;" class="btn btn-default"
                [ngClass]="{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}"
                [disabled]="dtz.disabled"
                (click)="datePicker.select(dtz.date)" tabindex="-1">
          <span [ngClass]="{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}">{{ dtz.label }}</span>
        </button>
      </td>
    </tr>
  </tbody>
</table>
  `,
                styles: [`
    :host .btn-info .text-success {
      color: #fff !important;
    }
  `]
            }] }
];
/** @nocollapse */
YearPickerComponent.ctorParameters = () => [
    { type: DatePickerInnerComponent, },
];
function YearPickerComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    YearPickerComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    YearPickerComponent.ctorParameters;
    /** @type {?} */
    YearPickerComponent.prototype.datePicker;
    /** @type {?} */
    YearPickerComponent.prototype.title;
    /** @type {?} */
    YearPickerComponent.prototype.rows;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ5ZWFycGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFpRHhFLE1BQU07Ozs7SUFLSixZQUFZLFVBQW9DO29CQUZsQyxFQUFFO1FBR2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFRCxJQUFJLEtBQUs7UUFDUCxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNqQjs7OztJQUVELFFBQVE7UUFDTix1QkFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRWxCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFaEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNwQyx1QkFBTSxLQUFLLEdBQVUsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLHFCQUFJLElBQVUsQ0FBQztZQUNmLHVCQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUVsRSxHQUFHLENBQUMsQ0FBQyxxQkFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzlCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDeEQsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDeEM7WUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEtBQUssQ0FDTixDQUFDO1lBQ0YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzdELEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFWCxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLFVBQ2hDLEtBQVcsRUFDWCxLQUFXO1lBRVgsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbEQsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVYLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDL0I7Ozs7O0lBRVMsZUFBZSxDQUFDLElBQVk7O1FBRXBDLE1BQU0sQ0FBQyxDQUNMLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FDdkUsQ0FBQztLQUNIOzs7WUFsR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DVDt5QkFFQzs7OztHQUlEO2FBRUY7Ozs7WUFoRFEsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGRlcHJlY2F0ZWRcclxuLy8gdHNsaW50OmRpc2FibGVcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZXBpY2tlci1pbm5lci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd5ZWFycGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG48dGFibGUgKm5nSWY9XCJkYXRlUGlja2VyLmRhdGVwaWNrZXJNb2RlPT09J3llYXInXCIgcm9sZT1cImdyaWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHI+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1sZWZ0IGZsb2F0LWxlZnRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgtMSlcIiB0YWJpbmRleD1cIi0xXCI+4oC5PC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aCBbYXR0ci5jb2xzcGFuXT1cIigoZGF0ZVBpY2tlci55ZWFyQ29sTGltaXQgLSAyKSA8PSAwKSA/IDEgOiBkYXRlUGlja2VyLnllYXJDb2xMaW1pdCAtIDJcIj5cclxuICAgICAgICA8YnV0dG9uIFtpZF09XCJkYXRlUGlja2VyLnVuaXF1ZUlkICsgJy10aXRsZSdcIiByb2xlPVwiaGVhZGluZ1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJkYXRlUGlja2VyLnRvZ2dsZU1vZGUoMClcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZVwiXHJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ZGlzYWJsZWQ6IGRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGUgPT09IGRhdGVQaWNrZXIubWF4TW9kZX1cIiB0YWJpbmRleD1cIi0xXCIgc3R5bGU9XCJ3aWR0aDoxMDAlO1wiPlxyXG4gICAgICAgICAgPHN0cm9uZz57eyB0aXRsZSB9fTwvc3Ryb25nPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgICA8dGg+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLXNtIHB1bGwtcmlnaHQgZmxvYXQtcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIubW92ZSgxKVwiIHRhYmluZGV4PVwiLTFcIj7igLo8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAgICA8dHIgKm5nRm9yPVwibGV0IHJvd3ogb2Ygcm93c1wiPlxyXG4gICAgICA8dGQgKm5nRm9yPVwibGV0IGR0eiBvZiByb3d6XCIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIHJvbGU9XCJncmlkY2VsbFwiIFthdHRyLmlkXT1cImR0ei51aWRcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIm1pbi13aWR0aDoxMDAlO1wiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnYnRuLWxpbmsnOiBpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmICFkYXRlUGlja2VyLmlzQWN0aXZlKGR0eiksICdidG4taW5mbyc6IGR0ei5zZWxlY3RlZCB8fCAoaXNCczQgJiYgIWR0ei5zZWxlY3RlZCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eikpLCBkaXNhYmxlZDogZHR6LmRpc2FibGVkLCBhY3RpdmU6ICFpc0JzNCAmJiBkYXRlUGlja2VyLmlzQWN0aXZlKGR0eil9XCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkdHouZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIuc2VsZWN0KGR0ei5kYXRlKVwiIHRhYmluZGV4PVwiLTFcIj5cclxuICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cInsndGV4dC1zdWNjZXNzJzogaXNCczQgJiYgZHR6LmN1cnJlbnQsICd0ZXh0LWluZm8nOiAhaXNCczQgJiYgZHR6LmN1cnJlbnR9XCI+e3sgZHR6LmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L3RkPlxyXG4gICAgPC90cj5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICA6aG9zdCAuYnRuLWluZm8gLnRleHQtc3VjY2VzcyB7XHJcbiAgICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFllYXJQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudDtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHJvd3M6IGFueVtdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGRhdGVQaWNrZXI6IERhdGVQaWNrZXJJbm5lckNvbXBvbmVudCkge1xyXG4gICAgdGhpcy5kYXRlUGlja2VyID0gZGF0ZVBpY2tlcjtcclxuICB9XHJcblxyXG4gIGdldCBpc0JzNCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhaXNCczMoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnN0ZXBZZWFyID0geyB5ZWFyczogdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSB9O1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRSZWZyZXNoVmlld0hhbmRsZXIoZnVuY3Rpb24oKTogdm9pZCB7XHJcbiAgICAgIGNvbnN0IHllYXJzOiBhbnlbXSA9IG5ldyBBcnJheSh0aGlzLnllYXJSYW5nZSk7XHJcbiAgICAgIGxldCBkYXRlOiBEYXRlO1xyXG4gICAgICBjb25zdCBzdGFydCA9IHNlbGYuZ2V0U3RhcnRpbmdZZWFyKHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuXHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy55ZWFyUmFuZ2U7IGkrKykge1xyXG4gICAgICAgIGRhdGUgPSBuZXcgRGF0ZShzdGFydCArIGksIDAsIDEpO1xyXG4gICAgICAgIGRhdGUgPSB0aGlzLmZpeFRpbWVab25lKGRhdGUpO1xyXG4gICAgICAgIHllYXJzW2ldID0gdGhpcy5jcmVhdGVEYXRlT2JqZWN0KGRhdGUsIHRoaXMuZm9ybWF0WWVhcik7XHJcbiAgICAgICAgeWVhcnNbaV0udWlkID0gdGhpcy51bmlxdWVJZCArICctJyArIGk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNlbGYudGl0bGUgPSBbeWVhcnNbMF0ubGFiZWwsIHllYXJzW3RoaXMueWVhclJhbmdlIC0gMV0ubGFiZWxdLmpvaW4oXHJcbiAgICAgICAgJyAtICdcclxuICAgICAgKTtcclxuICAgICAgc2VsZi5yb3dzID0gdGhpcy5zcGxpdCh5ZWFycywgc2VsZi5kYXRlUGlja2VyLnllYXJDb2xMaW1pdCk7XHJcbiAgICB9LCAneWVhcicpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5zZXRDb21wYXJlSGFuZGxlcihmdW5jdGlvbihcclxuICAgICAgZGF0ZTE6IERhdGUsXHJcbiAgICAgIGRhdGUyOiBEYXRlXHJcbiAgICApOiBudW1iZXIge1xyXG4gICAgICByZXR1cm4gZGF0ZTEuZ2V0RnVsbFllYXIoKSAtIGRhdGUyLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9LCAneWVhcicpO1xyXG5cclxuICAgIHRoaXMuZGF0ZVBpY2tlci5yZWZyZXNoVmlldygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGdldFN0YXJ0aW5nWWVhcih5ZWFyOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgLy8gdG9kbzogcGFyc2VJbnRcclxuICAgIHJldHVybiAoXHJcbiAgICAgICh5ZWFyIC0gMSkgLyB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlICogdGhpcy5kYXRlUGlja2VyLnllYXJSYW5nZSArIDFcclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiJdfQ==