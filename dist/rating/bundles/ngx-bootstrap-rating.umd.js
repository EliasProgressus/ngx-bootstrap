(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/rating', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].rating = {}),global.ng.core,global.ng.forms,global.ng.common));
}(this, (function (exports,core,forms,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ RATING_CONTROL_VALUE_ACCESSOR = {
        provide: forms.NG_VALUE_ACCESSOR,
        /* tslint:disable-next-line: no-use-before-declare */
        useExisting: core.forwardRef(function () { return RatingComponent; }),
        multi: true
    };
    var RatingComponent = (function () {
        function RatingComponent(changeDetection) {
            this.changeDetection = changeDetection;
            /**
             * number of icons
             */
            this.max = 5;
            /**
             * fired when icon selected, $event:number equals to selected rating
             */
            this.onHover = new core.EventEmitter();
            /**
             * fired when icon selected, $event:number equals to previous rating value
             */
            this.onLeave = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: 'rating',
                        template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\r\n      role=\"slider\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"range.length\"\r\n      [attr.aria-valuenow]=\"value\">\r\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\r\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\r\n    <span class=\"sr-only\">({{ index < value ? '*' : ' ' }})</span>\r\n    <span class=\"bs-rating-star\"\r\n          (mouseenter)=\"enter(index + 1)\"\r\n          (click)=\"rate(index + 1)\"\r\n          [title]=\"r.title\"\r\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\r\n          [class.active]=\"index < value\">\r\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\r\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n</span>\r\n",
                        providers: [RATING_CONTROL_VALUE_ACCESSOR],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        RatingComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef, },
            ];
        };
        RatingComponent.propDecorators = {
            "max": [{ type: core.Input },],
            "readonly": [{ type: core.Input },],
            "titles": [{ type: core.Input },],
            "customTemplate": [{ type: core.Input },],
            "onHover": [{ type: core.Output },],
            "onLeave": [{ type: core.Output },],
            "onKeydown": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
        };
        return RatingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var RatingModule = (function () {
        function RatingModule() {
        }
        /**
         * @return {?}
         */
        RatingModule.forRoot = /**
         * @return {?}
         */
            function () {
                return {
                    ngModule: RatingModule,
                    providers: []
                };
            };
        RatingModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [RatingComponent],
                        exports: [RatingComponent]
                    },] }
        ];
        return RatingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.RatingComponent = RatingComponent;
    exports.RatingModule = RatingModule;
    exports.ɵa = RATING_CONTROL_VALUE_ACCESSOR;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1yYXRpbmcudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtYm9vdHN0cmFwL3JhdGluZy9yYXRpbmcuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3JhdGluZy9yYXRpbmcubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBmb3J3YXJkUmVmLCBUZW1wbGF0ZVJlZiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQWNjZXNzb3JDb250ZW50LCBSYXRpbmdSZXN1bHRzIH0gZnJvbSAnLi9tb2RlbHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBBY2Nlc3NvckNvbnRlbnQgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11c2UtYmVmb3JlLWRlY2xhcmUgKi9cclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRpbmdDb21wb25lbnQpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JhdGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3JhdGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbUkFUSU5HX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICAvKiogbnVtYmVyIG9mIGljb25zICovXHJcbiAgQElucHV0KCkgbWF4ID0gNTtcclxuICAvKiogaWYgdHJ1ZSB3aWxsIG5vdCByZWFjdCBvbiBhbnkgdXNlciBldmVudHMgKi9cclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbjtcclxuICAvKiogYXJyYXkgb2YgaWNvbnMgdGl0bGVzLCBkZWZhdWx0OiAoW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiXSkgKi9cclxuICBASW5wdXQoKSB0aXRsZXM6IHN0cmluZ1tdO1xyXG4gIC8qKiBjdXN0b20gdGVtcGxhdGUgZm9yIGljb25zICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiBmaXJlZCB3aGVuIGljb24gc2VsZWN0ZWQsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHNlbGVjdGVkIHJhdGluZyAqL1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogZmlyZWQgd2hlbiBpY29uIHNlbGVjdGVkLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byBwcmV2aW91cyByYXRpbmcgdmFsdWUgKi9cclxuICBAT3V0cHV0KCkgb25MZWF2ZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvbkNoYW5nZTogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgcmFuZ2U6IFJhdGluZ1Jlc3VsdHNbXTtcclxuICB2YWx1ZTogbnVtYmVyO1xyXG4gIHByb3RlY3RlZCBwcmVWYWx1ZTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBkZXByZWNhdGlvbiAqL1xyXG4gICAgaWYgKFszNywgMzgsIDM5LCA0MF0uaW5kZXhPZihldmVudC53aGljaCkgPT09IC0xKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uICovXHJcbiAgICBjb25zdCBzaWduID0gZXZlbnQud2hpY2ggPT09IDM4IHx8IGV2ZW50LndoaWNoID09PSAzOSA/IDEgOiAtMTtcclxuICAgIHRoaXMucmF0ZSh0aGlzLnZhbHVlICsgc2lnbik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWF4ID0gdHlwZW9mIHRoaXMubWF4ICE9PSAndW5kZWZpbmVkJyA/IHRoaXMubWF4IDogNTtcclxuICAgIHRoaXMudGl0bGVzID1cclxuICAgICAgdHlwZW9mIHRoaXMudGl0bGVzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLnRpdGxlcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyB0aGlzLnRpdGxlc1xyXG4gICAgICAgIDogW107XHJcbiAgICB0aGlzLnJhbmdlID0gdGhpcy5idWlsZFRlbXBsYXRlT2JqZWN0cyh0aGlzLm1heCk7XHJcbiAgfVxyXG5cclxuICAvLyBtb2RlbCAtPiB2aWV3XHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUgJSAxICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMucHJlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBlbnRlcih2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgdGhpcy5vbkhvdmVyLmVtaXQodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5wcmVWYWx1ZTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgdGhpcy5vbkxlYXZlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB7fSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmF0ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkgJiYgdmFsdWUgPj0gMCAmJiB2YWx1ZSA8PSB0aGlzLnJhbmdlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLndyaXRlVmFsdWUodmFsdWUpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBidWlsZFRlbXBsYXRlT2JqZWN0cyhtYXg6IG51bWJlcik6IFJhdGluZ1Jlc3VsdHNbXSB7XHJcbiAgICBjb25zdCByZXN1bHQ6IFJhdGluZ1Jlc3VsdHNbXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgICBpbmRleDogaSxcclxuICAgICAgICAgIHRpdGxlOiB0aGlzLnRpdGxlc1tpXSB8fCBpICsgMVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJhdGluZ0NvbXBvbmVudCB9IGZyb20gJy4vcmF0aW5nLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1JhdGluZ0NvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1JhdGluZ0NvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJhdGluZ01vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogUmF0aW5nTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiTkdfVkFMVUVfQUNDRVNTT1IiLCJmb3J3YXJkUmVmIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIklucHV0IiwiT3V0cHV0IiwiSG9zdExpc3RlbmVyIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFZYSw2QkFBNkIsR0FBb0I7UUFDNUQsT0FBTyxFQUFFQSx1QkFBaUI7O1FBRTFCLFdBQVcsRUFBRUMsZUFBVSxDQUFDLGNBQU0sT0FBQSxlQUFlLEdBQUEsQ0FBQztRQUM5QyxLQUFLLEVBQUUsSUFBSTtLQUNaLENBQUM7O1FBZ0NBLHlCQUFvQixlQUFrQztZQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7Ozs7dUJBdEJ2QyxDQUFDOzs7OzJCQVMwQixJQUFJQyxpQkFBWSxFQUFFOzs7OzJCQUVsQixJQUFJQSxpQkFBWSxFQUFFOzs0QkFHNUMsUUFBUSxDQUFDLFNBQVM7OzZCQUVqQixRQUFRLENBQUMsU0FBUztTQU11Qjs7Ozs7UUFHMUQsbUNBQVM7Ozs7c0JBQUMsS0FBb0I7O2dCQUU1QixJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtvQkFDaEQsT0FBTztpQkFDUjtnQkFFRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Z0JBRXhCLHFCQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FB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