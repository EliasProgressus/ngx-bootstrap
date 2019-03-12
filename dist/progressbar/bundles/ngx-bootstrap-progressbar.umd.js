(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/progressbar', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].progressbar = {}),global.ng.core,global.utils,global.ng.common));
}(this, (function (exports,core,utils,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressbarConfig = (function () {
        function ProgressbarConfig() {
            /**
             * if `true` changing value of progress bar will be animated
             */
            this.animate = false;
            /**
             * maximum total value of progress element
             */
            this.max = 100;
        }
        ProgressbarConfig.decorators = [
            { type: core.Injectable }
        ];
        return ProgressbarConfig;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressbarComponent = (function () {
        function ProgressbarComponent(config) {
            this.isStacked = false;
            this.addClass = true;
            /* tslint:disable-next-line:no-any */
            this.bars = [];
            this._max = 100;
            Object.assign(this, config);
        }
        Object.defineProperty(ProgressbarComponent.prototype, "animate", {
            set: /**
             * if `true` changing value of progress bar will be animated
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._animate = value;
                this.bars.forEach(function (b) {
                    b.animate = value;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "striped", {
            set: /**
             * If `true`, striped classes are applied
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._striped = value;
                this.bars.forEach(function (b) {
                    b.striped = value;
                });
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "value", {
            set: /**
             * current value of progress bar. Could be a number or array of objects
             * like {"value":15,"type":"info","label":"15 %"}
             * @param {?} value
             * @return {?}
             */ 
            /* tslint:disable-next-line:no-any */
            function (value) {
                this.isStacked = Array.isArray(value);
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "max", {
            get: /**
             * maximum total value of progress element
             * @return {?}
             */ function () {
                return this._max;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
                this._max = v;
                this.bars.forEach(function (bar) {
                    bar.recalculatePercentage();
                });
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @param {?} bar
         * @return {?}
         */
        ProgressbarComponent.prototype.addBar = /**
         * @param {?} bar
         * @return {?}
         */
            function (bar) {
                bar.animate = this._animate;
                bar.striped = this._striped;
                this.bars.push(bar);
            };
        /**
         * @param {?} bar
         * @return {?}
         */
        ProgressbarComponent.prototype.removeBar = /**
         * @param {?} bar
         * @return {?}
         */
            function (bar) {
                this.bars.splice(this.bars.indexOf(bar), 1);
            };
        ProgressbarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'progressbar',
                        template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\r\n  <ng-content></ng-content>\r\n</bar>\r\n<ng-template [ngIf]=\"isStacked\">\r\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\r\n</ng-template>\r\n",
                        styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        ProgressbarComponent.ctorParameters = function () {
            return [
                { type: ProgressbarConfig, },
            ];
        };
        ProgressbarComponent.propDecorators = {
            "animate": [{ type: core.Input },],
            "striped": [{ type: core.Input },],
            "type": [{ type: core.Input },],
            "value": [{ type: core.Input },],
            "max": [{ type: core.HostBinding, args: ['attr.max',] }, { type: core.Input },],
            "addClass": [{ type: core.HostBinding, args: ['class.progress',] },],
        };
        return ProgressbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var BarComponent = (function () {
        function BarComponent(progress) {
            this.percent = 0;
            this.progress = progress;
        }
        Object.defineProperty(BarComponent.prototype, "value", {
            get: /**
             * current value of progress bar
             * @return {?}
             */ function () {
                return this._value;
            },
            set: /**
             * @param {?} v
             * @return {?}
             */ function (v) {
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
             */ function () {
                this.recalculatePercentage();
                return this.percent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BarComponent.prototype, "isBs3", {
            get: /**
             * @return {?}
             */ function () {
                return utils.isBs3();
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
            { type: core.Component, args: [{
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
        BarComponent.ctorParameters = function () {
            return [
                { type: ProgressbarComponent, decorators: [{ type: core.Host },] },
            ];
        };
        BarComponent.propDecorators = {
            "type": [{ type: core.Input },],
            "value": [{ type: core.Input },],
            "setBarWidth": [{ type: core.HostBinding, args: ['style.width.%',] },],
        };
        return BarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ProgressbarModule = (function () {
        function ProgressbarModule() {
        }
        /**
         * @return {?}
         */
        ProgressbarModule.forRoot = /**
         * @return {?}
         */
            function () {
                return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
            };
        ProgressbarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [BarComponent, ProgressbarComponent],
                        exports: [BarComponent, ProgressbarComponent]
                    },] }
        ];
        return ProgressbarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.BarComponent = BarComponent;
    exports.ProgressbarComponent = ProgressbarComponent;
    exports.ProgressbarModule = ProgressbarModule;
    exports.ProgressbarConfig = ProgressbarConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wcm9ncmVzc2Jhci51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29uZmlnLnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci9iYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2JhckNvbmZpZyB7XHJcbiAgLyoqIGlmIGB0cnVlYCBjaGFuZ2luZyB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgd2lsbCBiZSBhbmltYXRlZCAqL1xyXG4gIGFuaW1hdGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXHJcbiAgbWF4ID0gMTAwO1xyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwcm9ncmVzc2JhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIDpob3N0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IHtcclxuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYW5pbWF0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fYW5pbWF0ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5iYXJzLmZvckVhY2goKGI6IEJhckNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBiLmFuaW1hdGUgPSB2YWx1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuICAvKiogSWYgYHRydWVgLCBzdHJpcGVkIGNsYXNzZXMgYXJlIGFwcGxpZWQgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBzdHJpcGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9zdHJpcGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYjogQmFyQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGIuc3RyaXBlZCA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgLyoqIGN1cnJlbnQgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyLiBDb3VsZCBiZSBhIG51bWJlciBvciBhcnJheSBvZiBvYmplY3RzXHJcbiAgICogbGlrZSB7XCJ2YWx1ZVwiOjE1LFwidHlwZVwiOlwiaW5mb1wiLFwibGFiZWxcIjpcIjE1ICVcIn1cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IGFueVtdKSB7XHJcbiAgICB0aGlzLmlzU3RhY2tlZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgaXNTdGFja2VkID0gZmFsc2U7XHJcbiAgX3N0cmlwZWQ6IGJvb2xlYW47XHJcbiAgX2FuaW1hdGU6IGJvb2xlYW47XHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIF92YWx1ZTogbnVtYmVyIHwgYW55W107XHJcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLm1heCcpXHJcbiAgQElucHV0KClcclxuICBnZXQgbWF4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4O1xyXG4gIH1cclxuXHJcbiAgc2V0IG1heCh2OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX21heCA9IHY7XHJcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYmFyOiBCYXJDb21wb25lbnQpID0+IHtcclxuICAgICAgYmFyLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByb2dyZXNzJykgYWRkQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgYmFyczogQmFyQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgcHJvdGVjdGVkIF9tYXggPSAxMDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogUHJvZ3Jlc3NiYXJDb25maWcpIHtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuICB9XHJcbiAgYWRkQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBiYXIuYW5pbWF0ZSA9IHRoaXMuX2FuaW1hdGU7XHJcbiAgICBiYXIuc3RyaXBlZCA9IHRoaXMuX3N0cmlwZWQ7XHJcblxyXG4gICAgdGhpcy5iYXJzLnB1c2goYmFyKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZUJhcihiYXI6IEJhckNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5iYXJzLnNwbGljZSh0aGlzLmJhcnMuaW5kZXhPZihiYXIpLCAxKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbXBvbmVudCB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuXHJcbi8vIHRvZG86IG51bWJlciBwaXBlXHJcbi8vIHRvZG86IHVzZSBxdWVyeSBmcm9tIHByb2dyZXNzP1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgcm9sZTogJ3Byb2dyZXNzYmFyJyxcclxuICAgICdhcmlhLXZhbHVlbWluJzogJzAnLFxyXG4gICAgJ1tjbGFzc10nOiAnXCJwcm9ncmVzcy1iYXIgXCIgKyAodHlwZSA/IFwicHJvZ3Jlc3MtYmFyLVwiICsgdHlwZSArIFwiIGJnLVwiICsgdHlwZSA6IFwiXCIpJyxcclxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXSc6ICchaXNCczMgJiYgYW5pbWF0ZScsXHJcbiAgICAnW2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXSc6ICdzdHJpcGVkJyxcclxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdpc0JzMyAmJiBhbmltYXRlJyxcclxuICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXHJcbiAgICAnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3BlcmNlbnQgPyBwZXJjZW50LnRvRml4ZWQoMCkgKyBcIiVcIiA6IFwiXCInLFxyXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ21heCcsXHJcbiAgICAnW3N0eWxlLmhlaWdodC4lXSc6ICdcIjEwMFwiJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBtYXg6IG51bWJlcjtcclxuXHJcbiAgLyoqIHByb3ZpZGUgb25lIG9mIHRoZSBmb3VyIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6IGBzdWNjZXNzYCwgYGluZm9gLCBgd2FybmluZ2AsIGBkYW5nZXJgICovXHJcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG5cclxuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB2YWx1ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHY6IG51bWJlcikge1xyXG4gICAgaWYgKCF2ICYmIHYgIT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2O1xyXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGguJScpXHJcbiAgZ2V0IHNldEJhcldpZHRoKCkge1xyXG4gICAgdGhpcy5yZWNhbGN1bGF0ZVBlcmNlbnRhZ2UoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wZXJjZW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzQnMzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGlzQnMzKCk7XHJcbiAgfVxyXG5cclxuICBzdHJpcGVkOiBib29sZWFuO1xyXG4gIGFuaW1hdGU6IGJvb2xlYW47XHJcbiAgcGVyY2VudCA9IDA7XHJcbiAgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50O1xyXG5cclxuICBwcm90ZWN0ZWQgX3ZhbHVlOiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHJvZ3Jlc3M6IFByb2dyZXNzYmFyQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MuYWRkQmFyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLnByb2dyZXNzLnJlbW92ZUJhcih0aGlzKTtcclxuICB9XHJcblxyXG4gIHJlY2FsY3VsYXRlUGVyY2VudGFnZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucGVyY2VudCA9ICsodGhpcy52YWx1ZSAvIHRoaXMucHJvZ3Jlc3MubWF4ICogMTAwKS50b0ZpeGVkKDIpO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsUGVyY2VudGFnZSA9IHRoaXMucHJvZ3Jlc3MuYmFyc1xyXG4gICAgICAucmVkdWNlKGZ1bmN0aW9uICh0b3RhbDogbnVtYmVyLCBiYXI6IEJhckNvbXBvbmVudCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRvdGFsICsgYmFyLnBlcmNlbnQ7XHJcbiAgICAgIH0sIDApO1xyXG5cclxuICAgIGlmICh0b3RhbFBlcmNlbnRhZ2UgPiAxMDApIHtcclxuICAgICAgdGhpcy5wZXJjZW50IC09IHRvdGFsUGVyY2VudGFnZSAtIDEwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc2JhckNvbmZpZyB9IGZyb20gJy4vcHJvZ3Jlc3NiYXIuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbQmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0JhckNvbXBvbmVudCwgUHJvZ3Jlc3NiYXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmVzc2Jhck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogUHJvZ3Jlc3NiYXJNb2R1bGUsIHByb3ZpZGVyczogW1Byb2dyZXNzYmFyQ29uZmlnXSB9O1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsImlzQnMzIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJIb3N0QmluZGluZyIsIkhvc3QiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7OzsyQkFLcUIsS0FBSzs7Ozt1QkFFbEIsR0FBRzs7O29CQUxWQSxlQUFVOztnQ0FGWDs7Ozs7OztBQ0FBO1FBNEVFLDhCQUFZLE1BQXlCOzZCQTlCekIsS0FBSzs0QkF1QnlCLElBQUk7O3dCQUd2QixFQUFFO3dCQUVSLEdBQUc7WUFHbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDN0I7OEJBMURHLHlDQUFPOzs7OzswQkFBQyxLQUFjO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFlO29CQUNoQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztpQkFDbkIsQ0FBQyxDQUFDOzs7Ozs4QkFJRCx5Q0FBTzs7Ozs7MEJBQUMsS0FBYztnQkFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBZTtvQkFDaEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7aUJBQ25CLENBQUMsQ0FBQzs7Ozs7OEJBVUQsdUNBQUs7Ozs7Ozs7O3NCQUFDLEtBQXFCO2dCQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOzs7OztRQU90QixzQkFBSSx1Q0FBSzs7O2dCQUFUO2dCQUNFLE9BQU9DLFdBQUssRUFBRSxDQUFDO2FBQ2hCOzs7V0FBQTs4QkFLRyxxQ0FBRzs7Ozs7Z0JBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDOzs7OztnQkFHbkIsVUFBUSxDQUFTO2dCQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBaUI7b0JBQ2xDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO2lCQUM3QixDQUFDLENBQUM7YUFDSjs7Ozs7Ozs7UUFZRCxxQ0FBTTs7OztZQUFOLFVBQU8sR0FBaUI7Z0JBQ3RCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDNUIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyQjs7Ozs7UUFFRCx3Q0FBUzs7OztZQUFULFVBQVUsR0FBaUI7Z0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzdDOztvQkFuRkZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsYUFBYTt3QkFDdkIseVJBQTJDO2lDQUV6QyxvRUFLRDtxQkFFRjs7Ozs7d0JBZlEsaUJBQWlCOzs7O2dDQWtCdkJDLFVBQUs7Z0NBUUxBLFVBQUs7NkJBU0xBLFVBQUs7OEJBSUxBLFVBQUs7NEJBZ0JMQyxnQkFBVyxTQUFDLFVBQVUsY0FDdEJELFVBQUs7aUNBWUxDLGdCQUFXLFNBQUMsZ0JBQWdCOzttQ0FyRS9COzs7Ozs7O0FDQUE7UUFvRUUsc0JBQW9COzJCQUxWLENBQUM7WUFNVCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQjs4QkFoQ0csK0JBQUs7Ozs7O2dCQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQzs7Ozs7Z0JBR3JCLFVBQVUsQ0FBUztnQkFDakIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNqQixPQUFPO2lCQUNSO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQzthQUM5Qjs7Ozs4QkFHRyxxQ0FBVzs7OztnQkFDYixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFFN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDOzs7OztRQUd0QixzQkFBSSwrQkFBSzs7O2dCQUFUO2dCQUNFLE9BQU9ILFdBQUssRUFBRSxDQUFDO2FBQ2hCOzs7V0FBQTs7OztRQWFELCtCQUFROzs7WUFBUjtnQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1Qjs7OztRQUVELGtDQUFXOzs7WUFBWDtnQkFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMvQjs7OztRQUVELDRDQUFxQjs7O1lBQXJCO2dCQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbEUscUJBQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTtxQkFDdkMsTUFBTSxDQUFDLFVBQVUsS0FBYSxFQUFFLEdBQWlCO29CQUNoRCxPQUFPLEtBQUssR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO2lCQUM1QixFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUVSLElBQUksZUFBZSxHQUFHLEdBQUcsRUFBRTtvQkFDekIsSUFBSSxDQUFDLE9BQU8sSUFBSSxlQUFlLEdBQUcsR0FBRyxDQUFDO2lCQUN2QzthQUNGOztvQkE3RUZDLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsS0FBSzt3QkFDZix5Q0FBbUM7d0JBQ25DLElBQUksRUFBRTs0QkFDSixJQUFJLEVBQUUsYUFBYTs0QkFDbkIsZUFBZSxFQUFFLEdBQUc7NEJBQ3BCLFNBQVMsRUFBRSx3RUFBd0U7NEJBQ25GLCtCQUErQixFQUFFLG1CQUFtQjs0QkFDcEQsOEJBQThCLEVBQUUsU0FBUzs0QkFDekMsZ0JBQWdCLEVBQUUsa0JBQWtCOzRCQUNwQyxzQkFBc0IsRUFBRSxPQUFPOzRCQUMvQix1QkFBdUIsRUFBRSx5Q0FBeUM7NEJBQ2xFLHNCQUFzQixFQUFFLEtBQUs7NEJBQzdCLGtCQUFrQixFQUFFLE9BQU87eUJBQzVCO3FCQUNGOzs7Ozt3QkFwQlEsb0JBQW9CLHVCQTJEZEcsU0FBSTs7Ozs2QkFsQ2hCRixVQUFLOzhCQUdMQSxVQUFLO29DQWFMQyxnQkFBVyxTQUFDLGVBQWU7OzJCQWxEOUI7Ozs7Ozs7QUNBQTs7Ozs7O1FBYVMseUJBQU87OztZQUFkO2dCQUNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDO2FBQ3hFOztvQkFSRkUsYUFBUSxTQUFDO3dCQUNSLE9BQU8sRUFBRSxDQUFDQyxtQkFBWSxDQUFDO3dCQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUM7d0JBQ2xELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxvQkFBb0IsQ0FBQztxQkFDOUM7O2dDQVhEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==