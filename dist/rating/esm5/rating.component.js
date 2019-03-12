/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, HostListener, Input, Output, forwardRef, TemplateRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
export var /** @type {?} */ RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: forwardRef(function () { return RatingComponent; }),
    multi: true
};
var RatingComponent = /** @class */ (function () {
    function RatingComponent(changeDetection) {
        this.changeDetection = changeDetection;
        /**
         * number of icons
         */
        this.max = 5;
        /**
         * fired when icon selected, $event:number equals to selected rating
         */
        this.onHover = new EventEmitter();
        /**
         * fired when icon selected, $event:number equals to previous rating value
         */
        this.onLeave = new EventEmitter();
        // tslint:disable-next-line:no-any
        this.onChange = Function.prototype;
        // tslint:disable-next-line:no-any
        this.onTouched = Function.prototype;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RatingComponent.prototype.onKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /* tslint:disable-next-line: deprecation */
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        /* tslint:disable-next-line: deprecation */
        var /** @type {?} */ sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    };
    // model -> view
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.enter = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    };
    /**
     * @return {?}
     */
    RatingComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.value = this.preValue;
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RatingComponent.prototype.registerOnChange = /**
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
    RatingComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    RatingComponent.prototype.rate = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    };
    /**
     * @param {?} max
     * @return {?}
     */
    RatingComponent.prototype.buildTemplateObjects = /**
     * @param {?} max
     * @return {?}
     */
    function (max) {
        var /** @type {?} */ result = [];
        for (var /** @type {?} */ i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    };
    RatingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'rating',
                    template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\r\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\r\n      [attr.aria-valuenow]=\"value\">\r\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\r\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\r\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\r\n    <span class=\"bs-rating-star\"\r\n          (mouseenter)=\"enter(index + 1)\"\r\n          (click)=\"rate(index + 1)\"\r\n          [title]=\"r.title\"\r\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\r\n          [class.active]=\"index < value\">\r\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\r\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n</span>\r\n",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    RatingComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef, },
    ]; };
    RatingComponent.propDecorators = {
        "max": [{ type: Input },],
        "readonly": [{ type: Input },],
        "titles": [{ type: Input },],
        "customTemplate": [{ type: Input },],
        "onHover": [{ type: Output },],
        "onLeave": [{ type: Output },],
        "onKeydown": [{ type: HostListener, args: ['keydown', ['$event'],] },],
    };
    return RatingComponent;
}());
export { RatingComponent };
function RatingComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    RatingComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    RatingComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    RatingComponent.propDecorators;
    /**
     * number of icons
     * @type {?}
     */
    RatingComponent.prototype.max;
    /**
     * if true will not react on any user events
     * @type {?}
     */
    RatingComponent.prototype.readonly;
    /**
     * array of icons titles, default: (["one", "two", "three", "four", "five"])
     * @type {?}
     */
    RatingComponent.prototype.titles;
    /**
     * custom template for icons
     * @type {?}
     */
    RatingComponent.prototype.customTemplate;
    /**
     * fired when icon selected, $event:number equals to selected rating
     * @type {?}
     */
    RatingComponent.prototype.onHover;
    /**
     * fired when icon selected, $event:number equals to previous rating value
     * @type {?}
     */
    RatingComponent.prototype.onLeave;
    /** @type {?} */
    RatingComponent.prototype.onChange;
    /** @type {?} */
    RatingComponent.prototype.onTouched;
    /** @type {?} */
    RatingComponent.prototype.range;
    /** @type {?} */
    RatingComponent.prototype.value;
    /** @type {?} */
    RatingComponent.prototype.preValue;
    /** @type {?} */
    RatingComponent.prototype.changeDetection;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvcmF0aW5nLyIsInNvdXJjZXMiOlsicmF0aW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sVUFBVSxFQUFFLFdBQVcsRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDcEUsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE1BQU0sQ0FBQyxxQkFBTSw2QkFBNkIsR0FBb0I7SUFDNUQsT0FBTyxFQUFFLGlCQUFpQjs7SUFFMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsZUFBZSxFQUFmLENBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7O0lBZ0NBLHlCQUFvQixlQUFrQztRQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7Ozs7bUJBdEJ2QyxDQUFDOzs7O3VCQVMwQixJQUFJLFlBQVksRUFBRTs7Ozt1QkFFbEIsSUFBSSxZQUFZLEVBQUU7O3dCQUc1QyxRQUFRLENBQUMsU0FBUzs7eUJBRWpCLFFBQVEsQ0FBQyxTQUFTO0tBTXVCOzs7OztJQUcxRCxtQ0FBUzs7OztjQUFDLEtBQW9COztRQUU1QixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sQ0FBQztTQUNSO1FBRUQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7UUFFeEIscUJBQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQzs7Ozs7SUFHL0Isa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU07WUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTTtnQkFDYixDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2xEO0lBRUQsZ0JBQWdCOzs7OztJQUNoQixvQ0FBVTs7OztJQUFWLFVBQVcsS0FBYTtRQUN0QixFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7WUFFcEMsTUFBTSxDQUFDO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3JDOzs7OztJQUVELCtCQUFLOzs7O0lBQUwsVUFBTSxLQUFhO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtLQUNGOzs7O0lBRUQsK0JBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzNCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVELDBDQUFnQjs7OztJQUFoQixVQUFpQixFQUFxQjtRQUNwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCwyQ0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztLQUNyQjs7Ozs7SUFFRCw4QkFBSTs7OztJQUFKLFVBQUssS0FBYTtRQUNoQixFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN0QjtLQUNGOzs7OztJQUVTLDhDQUFvQjs7OztJQUE5QixVQUErQixHQUFXO1FBQ3hDLHFCQUFNLE1BQU0sR0FBb0IsRUFBRSxDQUFDO1FBQ25DLEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLENBQUM7Z0JBQ1IsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7YUFDL0IsQ0FBQyxDQUFDO1NBQ047UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2Y7O2dCQTdHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLDY4QkFBc0M7b0JBQ3RDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO29CQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBakJtRCxpQkFBaUI7Ozt3QkFvQmxFLEtBQUs7NkJBRUwsS0FBSzsyQkFFTCxLQUFLO21DQUdMLEtBQUs7NEJBRUwsTUFBTTs0QkFFTixNQUFNOzhCQWFOLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7OzBCQW5EckM7O1NBeUJhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgZm9yd2FyZFJlZiwgVGVtcGxhdGVSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFjY2Vzc29yQ29udGVudCwgUmF0aW5nUmVzdWx0cyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBSQVRJTkdfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogQWNjZXNzb3JDb250ZW50ID0ge1xyXG4gIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyYXRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1JBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgLyoqIG51bWJlciBvZiBpY29ucyAqL1xyXG4gIEBJbnB1dCgpIG1heCA9IDU7XHJcbiAgLyoqIGlmIHRydWUgd2lsbCBub3QgcmVhY3Qgb24gYW55IHVzZXIgZXZlbnRzICovXHJcbiAgQElucHV0KCkgcmVhZG9ubHk6IGJvb2xlYW47XHJcbiAgLyoqIGFycmF5IG9mIGljb25zIHRpdGxlcywgZGVmYXVsdDogKFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCIsIFwiZm91clwiLCBcImZpdmVcIl0pICovXHJcbiAgQElucHV0KCkgdGl0bGVzOiBzdHJpbmdbXTtcclxuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBpY29ucyAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBzZWxlY3RlZCByYXRpbmcgKi9cclxuICBAT3V0cHV0KCkgb25Ib3ZlcjogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gcHJldmlvdXMgcmF0aW5nIHZhbHVlICovXHJcbiAgQE91dHB1dCgpIG9uTGVhdmU6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25DaGFuZ2U6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgb25Ub3VjaGVkOiBhbnkgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIHJhbmdlOiBSYXRpbmdSZXN1bHRzW107XHJcbiAgdmFsdWU6IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgcHJlVmFsdWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gKi9cclxuICAgIGlmIChbMzcsIDM4LCAzOSwgNDBdLmluZGV4T2YoZXZlbnQud2hpY2gpID09PSAtMSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgY29uc3Qgc2lnbiA9IGV2ZW50LndoaWNoID09PSAzOCB8fCBldmVudC53aGljaCA9PT0gMzkgPyAxIDogLTE7XHJcbiAgICB0aGlzLnJhdGUodGhpcy52YWx1ZSArIHNpZ24pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1heCA9IHR5cGVvZiB0aGlzLm1heCAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm1heCA6IDU7XHJcbiAgICB0aGlzLnRpdGxlcyA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLnRpdGxlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy50aXRsZXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gdGhpcy50aXRsZXNcclxuICAgICAgICA6IFtdO1xyXG4gICAgdGhpcy5yYW5nZSA9IHRoaXMuYnVpbGRUZW1wbGF0ZU9iamVjdHModGhpcy5tYXgpO1xyXG4gIH1cclxuXHJcbiAgLy8gbW9kZWwgLT4gdmlld1xyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHZhbHVlICUgMSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IE1hdGgucm91bmQodmFsdWUpO1xyXG4gICAgICB0aGlzLnByZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJlVmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgZW50ZXIodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIHRoaXMub25Ib3Zlci5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMucHJlVmFsdWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMub25MZWF2ZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IG51bWJlcikgPT4ge30pOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHJhdGUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5ICYmIHZhbHVlID49IDAgJiYgdmFsdWUgPD0gdGhpcy5yYW5nZS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy53cml0ZVZhbHVlKHZhbHVlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgYnVpbGRUZW1wbGF0ZU9iamVjdHMobWF4OiBudW1iZXIpOiBSYXRpbmdSZXN1bHRzW10ge1xyXG4gICAgY29uc3QgcmVzdWx0OiBSYXRpbmdSZXN1bHRzW10gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF4OyBpKyspIHtcclxuICAgICAgcmVzdWx0LnB1c2goe1xyXG4gICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICB0aXRsZTogdGhpcy50aXRsZXNbaV0gfHwgaSArIDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=