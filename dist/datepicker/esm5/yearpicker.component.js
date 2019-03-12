/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { DatePickerInnerComponent } from './datepicker-inner.component';
var YearPickerComponent = /** @class */ (function () {
    function YearPickerComponent(datePicker) {
        this.rows = [];
        this.datePicker = datePicker;
    }
    Object.defineProperty(YearPickerComponent.prototype, "isBs4", {
        get: /**
         * @return {?}
         */
        function () {
            return !isBs3();
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
        { type: Component, args: [{
                    selector: 'yearpicker',
                    template: "\n<table *ngIf=\"datePicker.datepickerMode==='year'\" role=\"grid\">\n  <thead>\n    <tr>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-left float-left\"\n                (click)=\"datePicker.move(-1)\" tabindex=\"-1\">\u2039</button>\n      </th>\n      <th [attr.colspan]=\"((datePicker.yearColLimit - 2) <= 0) ? 1 : datePicker.yearColLimit - 2\">\n        <button [id]=\"datePicker.uniqueId + '-title'\" role=\"heading\"\n                type=\"button\" class=\"btn btn-default btn-sm\"\n                (click)=\"datePicker.toggleMode(0)\"\n                [disabled]=\"datePicker.datepickerMode === datePicker.maxMode\"\n                [ngClass]=\"{disabled: datePicker.datepickerMode === datePicker.maxMode}\" tabindex=\"-1\" style=\"width:100%;\">\n          <strong>{{ title }}</strong>\n        </button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-default btn-sm pull-right float-right\"\n                (click)=\"datePicker.move(1)\" tabindex=\"-1\">\u203A</button>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let rowz of rows\">\n      <td *ngFor=\"let dtz of rowz\" class=\"text-center\" role=\"gridcell\" [attr.id]=\"dtz.uid\">\n        <button type=\"button\" style=\"min-width:100%;\" class=\"btn btn-default\"\n                [ngClass]=\"{'btn-link': isBs4 && !dtz.selected && !datePicker.isActive(dtz), 'btn-info': dtz.selected || (isBs4 && !dtz.selected && datePicker.isActive(dtz)), disabled: dtz.disabled, active: !isBs4 && datePicker.isActive(dtz)}\"\n                [disabled]=\"dtz.disabled\"\n                (click)=\"datePicker.select(dtz.date)\" tabindex=\"-1\">\n          <span [ngClass]=\"{'text-success': isBs4 && dtz.current, 'text-info': !isBs4 && dtz.current}\">{{ dtz.label }}</span>\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n  ",
                    styles: ["\n    :host .btn-info .text-success {\n      color: #fff !important;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    YearPickerComponent.ctorParameters = function () { return [
        { type: DatePickerInnerComponent, },
    ]; };
    return YearPickerComponent;
}());
export { YearPickerComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXIvIiwic291cmNlcyI6WyJ5ZWFycGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0lBc0R0RSw2QkFBWSxVQUFvQztvQkFGbEMsRUFBRTtRQUdkLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCO0lBRUQsc0JBQUksc0NBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2pCOzs7T0FBQTs7OztJQUVELHNDQUFROzs7SUFBUjtRQUNFLHFCQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFFbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUVoRSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDO1lBQ3BDLHFCQUFNLEtBQUssR0FBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0MscUJBQUksSUFBVSxDQUFDO1lBQ2YscUJBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBRWxFLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDeEMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDOUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN4RCxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzthQUN4QztZQUVELElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDakUsS0FBSyxDQUNOLENBQUM7WUFDRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDN0QsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVYLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsVUFDaEMsS0FBVyxFQUNYLEtBQVc7WUFFWCxNQUFNLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNsRCxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRVgsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUMvQjs7Ozs7SUFFUyw2Q0FBZTs7OztJQUF6QixVQUEwQixJQUFZOztRQUVwQyxNQUFNLENBQUMsQ0FDTCxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQ3ZFLENBQUM7S0FDSDs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHcxREFvQ1Q7NkJBRUMsaUZBSUQ7aUJBRUY7Ozs7Z0JBaERRLHdCQUF3Qjs7OEJBTGpDOztTQXNEYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZGVwcmVjYXRlZFxyXG4vLyB0c2xpbnQ6ZGlzYWJsZVxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlcGlja2VyLWlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3llYXJwaWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbjx0YWJsZSAqbmdJZj1cImRhdGVQaWNrZXIuZGF0ZXBpY2tlck1vZGU9PT0neWVhcidcIiByb2xlPVwiZ3JpZFwiPlxyXG4gIDx0aGVhZD5cclxuICAgIDx0cj5cclxuICAgICAgPHRoPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1zbSBwdWxsLWxlZnQgZmxvYXQtbGVmdFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKC0xKVwiIHRhYmluZGV4PVwiLTFcIj7igLk8L2J1dHRvbj5cclxuICAgICAgPC90aD5cclxuICAgICAgPHRoIFthdHRyLmNvbHNwYW5dPVwiKChkYXRlUGlja2VyLnllYXJDb2xMaW1pdCAtIDIpIDw9IDApID8gMSA6IGRhdGVQaWNrZXIueWVhckNvbExpbWl0IC0gMlwiPlxyXG4gICAgICAgIDxidXR0b24gW2lkXT1cImRhdGVQaWNrZXIudW5pcXVlSWQgKyAnLXRpdGxlJ1wiIHJvbGU9XCJoZWFkaW5nXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc21cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImRhdGVQaWNrZXIudG9nZ2xlTW9kZSgwKVwiXHJcbiAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlXCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIntkaXNhYmxlZDogZGF0ZVBpY2tlci5kYXRlcGlja2VyTW9kZSA9PT0gZGF0ZVBpY2tlci5tYXhNb2RlfVwiIHRhYmluZGV4PVwiLTFcIiBzdHlsZT1cIndpZHRoOjEwMCU7XCI+XHJcbiAgICAgICAgICA8c3Ryb25nPnt7IHRpdGxlIH19PC9zdHJvbmc+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGg+XHJcbiAgICAgIDx0aD5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tc20gcHVsbC1yaWdodCBmbG9hdC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5tb3ZlKDEpXCIgdGFiaW5kZXg9XCItMVwiPuKAujwvYnV0dG9uPlxyXG4gICAgICA8L3RoPlxyXG4gICAgPC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keT5cclxuICAgIDx0ciAqbmdGb3I9XCJsZXQgcm93eiBvZiByb3dzXCI+XHJcbiAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgZHR6IG9mIHJvd3pcIiBjbGFzcz1cInRleHQtY2VudGVyXCIgcm9sZT1cImdyaWRjZWxsXCIgW2F0dHIuaWRdPVwiZHR6LnVpZFwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwibWluLXdpZHRoOjEwMCU7XCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIlxyXG4gICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydidG4tbGluayc6IGlzQnM0ICYmICFkdHouc2VsZWN0ZWQgJiYgIWRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSwgJ2J0bi1pbmZvJzogZHR6LnNlbGVjdGVkIHx8IChpc0JzNCAmJiAhZHR6LnNlbGVjdGVkICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KSksIGRpc2FibGVkOiBkdHouZGlzYWJsZWQsIGFjdGl2ZTogIWlzQnM0ICYmIGRhdGVQaWNrZXIuaXNBY3RpdmUoZHR6KX1cIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImR0ei5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiZGF0ZVBpY2tlci5zZWxlY3QoZHR6LmRhdGUpXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgPHNwYW4gW25nQ2xhc3NdPVwieyd0ZXh0LXN1Y2Nlc3MnOiBpc0JzNCAmJiBkdHouY3VycmVudCwgJ3RleHQtaW5mbyc6ICFpc0JzNCAmJiBkdHouY3VycmVudH1cIj57eyBkdHoubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIDpob3N0IC5idG4taW5mbyAudGV4dC1zdWNjZXNzIHtcclxuICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWWVhclBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50O1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgcm93czogYW55W10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZGF0ZVBpY2tlcjogRGF0ZVBpY2tlcklubmVyQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmRhdGVQaWNrZXIgPSBkYXRlUGlja2VyO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzZWxmID0gdGhpcztcclxuXHJcbiAgICB0aGlzLmRhdGVQaWNrZXIuc3RlcFllYXIgPSB7IHllYXJzOiB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlIH07XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldFJlZnJlc2hWaWV3SGFuZGxlcihmdW5jdGlvbigpOiB2b2lkIHtcclxuICAgICAgY29uc3QgeWVhcnM6IGFueVtdID0gbmV3IEFycmF5KHRoaXMueWVhclJhbmdlKTtcclxuICAgICAgbGV0IGRhdGU6IERhdGU7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gc2VsZi5nZXRTdGFydGluZ1llYXIodGhpcy5hY3RpdmVEYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG5cclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnllYXJSYW5nZTsgaSsrKSB7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKHN0YXJ0ICsgaSwgMCwgMSk7XHJcbiAgICAgICAgZGF0ZSA9IHRoaXMuZml4VGltZVpvbmUoZGF0ZSk7XHJcbiAgICAgICAgeWVhcnNbaV0gPSB0aGlzLmNyZWF0ZURhdGVPYmplY3QoZGF0ZSwgdGhpcy5mb3JtYXRZZWFyKTtcclxuICAgICAgICB5ZWFyc1tpXS51aWQgPSB0aGlzLnVuaXF1ZUlkICsgJy0nICsgaTtcclxuICAgICAgfVxyXG5cclxuICAgICAgc2VsZi50aXRsZSA9IFt5ZWFyc1swXS5sYWJlbCwgeWVhcnNbdGhpcy55ZWFyUmFuZ2UgLSAxXS5sYWJlbF0uam9pbihcclxuICAgICAgICAnIC0gJ1xyXG4gICAgICApO1xyXG4gICAgICBzZWxmLnJvd3MgPSB0aGlzLnNwbGl0KHllYXJzLCBzZWxmLmRhdGVQaWNrZXIueWVhckNvbExpbWl0KTtcclxuICAgIH0sICd5ZWFyJyk7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnNldENvbXBhcmVIYW5kbGVyKGZ1bmN0aW9uKFxyXG4gICAgICBkYXRlMTogRGF0ZSxcclxuICAgICAgZGF0ZTI6IERhdGVcclxuICAgICk6IG51bWJlciB7XHJcbiAgICAgIHJldHVybiBkYXRlMS5nZXRGdWxsWWVhcigpIC0gZGF0ZTIuZ2V0RnVsbFllYXIoKTtcclxuICAgIH0sICd5ZWFyJyk7XHJcblxyXG4gICAgdGhpcy5kYXRlUGlja2VyLnJlZnJlc2hWaWV3KCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0U3RhcnRpbmdZZWFyKHllYXI6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAvLyB0b2RvOiBwYXJzZUludFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgKHllYXIgLSAxKSAvIHRoaXMuZGF0ZVBpY2tlci55ZWFyUmFuZ2UgKiB0aGlzLmRhdGVQaWNrZXIueWVhclJhbmdlICsgMVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19