/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Host, HostBinding, Input } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import { isBs3 } from 'ngx-bootstrap/utils';
var BarComponent = /** @class */ (function () {
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        get: /**
         * current value of progress bar
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "setBarWidth", {
        get: /**
         * @return {?}
         */
        function () {
            this.recalculatePercentage();
            return this.percent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BarComponent.prototype, "isBs3", {
        get: /**
         * @return {?}
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = /**
     * @return {?}
     */
    function () {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        var /** @type {?} */ totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    BarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'bar',
                    template: "<ng-content></ng-content>\r\n",
                    host: {
                        role: 'progressbar',
                        'aria-valuemin': '0',
                        '[class]': '"progress-bar " + (type ? "progress-bar-" + type + " bg-" + type : "")',
                        '[class.progress-bar-animated]': '!isBs3 && animate',
                        '[class.progress-bar-striped]': 'striped',
                        '[class.active]': 'isBs3 && animate',
                        '[attr.aria-valuenow]': 'value',
                        '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                        '[attr.aria-valuemax]': 'max',
                        '[style.height.%]': '"100"'
                    }
                }] }
    ];
    /** @nocollapse */
    BarComponent.ctorParameters = function () { return [
        { type: ProgressbarComponent, decorators: [{ type: Host },] },
    ]; };
    BarComponent.propDecorators = {
        "type": [{ type: Input },],
        "value": [{ type: Input },],
        "setBarWidth": [{ type: HostBinding, args: ['style.width.%',] },],
    };
    return BarComponent;
}());
export { BarComponent };
function BarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    BarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    BarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    BarComponent.propDecorators;
    /** @type {?} */
    BarComponent.prototype.max;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    BarComponent.prototype.type;
    /** @type {?} */
    BarComponent.prototype.striped;
    /** @type {?} */
    BarComponent.prototype.animate;
    /** @type {?} */
    BarComponent.prototype.percent;
    /** @type {?} */
    BarComponent.prototype.progress;
    /** @type {?} */
    BarComponent.prototype._value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvIiwic291cmNlcyI6WyJiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULElBQUksRUFDSixXQUFXLEVBQ1gsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUEwRDFDLHNCQUFvQjt1QkFMVixDQUFDO1FBTVQsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7S0FDMUI7MEJBaENHLCtCQUFLOzs7Ozs7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7O1FBR3JCLFVBQVUsQ0FBUztZQUNqQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEIsTUFBTSxDQUFDO2FBQ1I7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM5Qjs7OzswQkFHRyxxQ0FBVzs7Ozs7WUFDYixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUU3QixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7Ozs7SUFHdEIsc0JBQUksK0JBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNoQjs7O09BQUE7Ozs7SUFhRCwrQkFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM1Qjs7OztJQUVELGtDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsNENBQXFCOzs7SUFBckI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxxQkFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO2FBQ3ZDLE1BQU0sQ0FBQyxVQUFVLEtBQWEsRUFBRSxHQUFpQjtZQUNoRCxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDNUIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVSLEVBQUUsQ0FBQyxDQUFDLGVBQWUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLElBQUksZUFBZSxHQUFHLEdBQUcsQ0FBQztTQUN2QztLQUNGOztnQkE3RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxLQUFLO29CQUNmLHlDQUFtQztvQkFDbkMsSUFBSSxFQUFFO3dCQUNKLElBQUksRUFBRSxhQUFhO3dCQUNuQixlQUFlLEVBQUUsR0FBRzt3QkFDcEIsU0FBUyxFQUFFLHdFQUF3RTt3QkFDbkYsK0JBQStCLEVBQUUsbUJBQW1CO3dCQUNwRCw4QkFBOEIsRUFBRSxTQUFTO3dCQUN6QyxnQkFBZ0IsRUFBRSxrQkFBa0I7d0JBQ3BDLHNCQUFzQixFQUFFLE9BQU87d0JBQy9CLHVCQUF1QixFQUFFLHlDQUF5Qzt3QkFDbEUsc0JBQXNCLEVBQUUsS0FBSzt3QkFDN0Isa0JBQWtCLEVBQUUsT0FBTztxQkFDNUI7aUJBQ0Y7Ozs7Z0JBcEJRLG9CQUFvQix1QkEyRGQsSUFBSTs7O3lCQWxDaEIsS0FBSzswQkFHTCxLQUFLO2dDQWFMLFdBQVcsU0FBQyxlQUFlOzt1QkFsRDlCOztTQThCYSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbi8vIHRvZG86IG51bWJlciBwaXBlXHJcbi8vIHRvZG86IHVzZSBxdWVyeSBmcm9tIHByb2dyZXNzP1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcclxuICAgICdhcmlhLXZhbHVlbWluJzogJzAnLFxyXG4gICAgJ1tjbGFzc10nOiAnXCJwcm9ncmVzcy1iYXIgXCIgKyAodHlwZSA/IFwicHJvZ3Jlc3MtYmFyLVwiICsgdHlwZSArIFwiIGJnLVwiICsgdHlwZSA6IFwiXCIpJyxcclxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXSc6ICchaXNCczMgJiYgYW5pbWF0ZScsXHJcbiAgICAnW2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXSc6ICdzdHJpcGVkJyxcclxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdpc0JzMyAmJiBhbmltYXRlJyxcclxuICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXHJcbiAgICAnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3BlcmNlbnQgPyBwZXJjZW50LnRvRml4ZWQoMCkgKyBcIiVcIiA6IFwiXCInLFxyXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ21heCcsXHJcbiAgICAnW3N0eWxlLmhlaWdodC4lXSc6ICdcIjEwMFwiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBtYXg6IG51bWJlcjtcclxuXHJcbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG5cclxuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHY6IG51bWJlcikge1xyXG4gICAgaWYgKCF2ICYmIHYgIT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGguJScpXHJcbiAgZ2V0IHNldEJhcldpZHRoKCkge1xyXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wZXJjZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBzdHJpcGVkOiBib29sZWFuO1xyXG4gIGFuaW1hdGU6IGJvb2xlYW47XHJcbiAgcGVyY2VudCA9IDA7XHJcbiAgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50O1xyXG5cclxuICBwcm90ZWN0ZWQgX3ZhbHVlOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MuYWRkQmFyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb2dyZXNzLnJlbW92ZUJhcih0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlY2FsY3VsYXRlUGVyY2VudGFnZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucGVyY2VudCA9ICsodGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MubWF4ICogMTAwKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsUGVyY2VudGFnZSA9IHRoaXMucHJvZ3Jlc3MuYmFyc1xyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uICh0b3RhbDogbnVtYmVyLCBiYXI6IEJhckNvbXBvbmVudCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgYmFyLnBlcmNlbnQ7XHJcbiAgICAgIH0sIDApO1xyXG5cclxuICAgIGlmICh0b3RhbFBlcmNlbnRhZ2UgPiAxMDApIHtcclxuICAgICAgdGhpcy5wZXJjZW50IC09IHRvdGFsUGVyY2VudGFnZSAtIDEwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19