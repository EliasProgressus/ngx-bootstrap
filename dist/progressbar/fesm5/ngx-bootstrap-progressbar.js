import { Injectable, Component, HostBinding, Input, Host, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarConfig = /** @class */ (function () {
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
        { type: Injectable }
    ];
    return ProgressbarConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarComponent = /** @class */ (function () {
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
         */
        function (value) {
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
         */
        function (value) {
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
         */
        function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "max", {
        get: /**
         * maximum total value of progress element
         * @return {?}
         */
        function () {
            return this._max;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
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
        { type: Component, args: [{
                    selector: 'progressbar',
                    template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\r\n  <ng-content></ng-content>\r\n</bar>\r\n<ng-template [ngIf]=\"isStacked\">\r\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\r\n</ng-template>\r\n",
                    styles: ["\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig, },
    ]; };
    ProgressbarComponent.propDecorators = {
        "animate": [{ type: Input },],
        "striped": [{ type: Input },],
        "type": [{ type: Input },],
        "value": [{ type: Input },],
        "max": [{ type: HostBinding, args: ['attr.max',] }, { type: Input },],
        "addClass": [{ type: HostBinding, args: ['class.progress',] },],
    };
    return ProgressbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarModule = /** @class */ (function () {
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
        { type: NgModule, args: [{
                    imports: [CommonModule],
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

export { BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wcm9ncmVzc2Jhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL2Jhci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29uZmlnIHtcclxuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkICovXHJcbiAgYW5pbWF0ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cclxuICBtYXggPSAxMDA7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWcgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZyc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQge1xyXG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBhbmltYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XHJcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYjogQmFyQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGIuYW5pbWF0ZSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKiBJZiBgdHJ1ZWAsIHN0cmlwZWQgY2xhc3NlcyBhcmUgYXBwbGllZCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN0cmlwZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3N0cmlwZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcclxuICAgICAgYi5zdHJpcGVkID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIuIENvdWxkIGJlIGEgbnVtYmVyIG9yIGFycmF5IG9mIG9iamVjdHNcclxuICAgKiBsaWtlIHtcInZhbHVlXCI6MTUsXCJ0eXBlXCI6XCJpbmZvXCIsXCJsYWJlbFwiOlwiMTUgJVwifVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgYW55W10pIHtcclxuICAgIHRoaXMuaXNTdGFja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICBpc1N0YWNrZWQgPSBmYWxzZTtcclxuICBfc3RyaXBlZDogYm9vbGVhbjtcclxuICBfYW5pbWF0ZTogYm9vbGVhbjtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgX3ZhbHVlOiBudW1iZXIgfCBhbnlbXTtcclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4JylcclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXg7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4KHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4ID0gdjtcclxuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiYXI6IEJhckNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBhZGRDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBiYXJzOiBCYXJDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgX21heCA9IDEwMDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBQcm9ncmVzc2JhckNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuICBhZGRCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGJhci5hbmltYXRlID0gdGhpcy5fYW5pbWF0ZTtcclxuICAgIGJhci5zdHJpcGVkID0gdGhpcy5fc3RyaXBlZDtcclxuXHJcbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuLy8gdG9kbzogbnVtYmVyIHBpcGVcclxuLy8gdG9kbzogdXNlIHF1ZXJ5IGZyb20gcHJvZ3Jlc3M/XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxyXG4gICAgJ2FyaWEtdmFsdWVtaW4nOiAnMCcsXHJcbiAgICAnW2NsYXNzXSc6ICdcInByb2dyZXNzLWJhciBcIiArICh0eXBlID8gXCJwcm9ncmVzcy1iYXItXCIgKyB0eXBlICsgXCIgYmctXCIgKyB0eXBlIDogXCJcIiknLFxyXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdJzogJyFpc0JzMyAmJiBhbmltYXRlJyxcclxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLXN0cmlwZWRdJzogJ3N0cmlwZWQnLFxyXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2lzQnMzICYmIGFuaW1hdGUnLFxyXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcclxuICAgICdbYXR0ci5hcmlhLXZhbHVldGV4dF0nOiAncGVyY2VudCA/IHBlcmNlbnQudG9GaXhlZCgwKSArIFwiJVwiIDogXCJcIicsXHJcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcclxuICAgICdbc3R5bGUuaGVpZ2h0LiVdJzogJ1wiMTAwXCInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIG1heDogbnVtYmVyO1xyXG5cclxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXYgJiYgdiAhPT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC4lJylcclxuICBnZXQgc2V0QmFyV2lkdGgoKSB7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHN0cmlwZWQ6IGJvb2xlYW47XHJcbiAgYW5pbWF0ZTogYm9vbGVhbjtcclxuICBwZXJjZW50ID0gMDtcclxuICBwcm9ncmVzczogUHJvZ3Jlc3NiYXJDb21wb25lbnQ7XHJcblxyXG4gIHByb3RlY3RlZCBfdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcm9ncmVzczogUHJvZ3Jlc3NiYXJDb21wb25lbnQpIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9ncmVzcy5hZGRCYXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MucmVtb3ZlQmFyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVjYWxjdWxhdGVQZXJjZW50YWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wZXJjZW50ID0gKyh0aGlzLnZhbHVlIC8gdGhpcy5wcm9ncmVzcy5tYXggKiAxMDApLnRvRml4ZWQoMik7XHJcblxyXG4gICAgY29uc3QgdG90YWxQZXJjZW50YWdlID0gdGhpcy5wcm9ncmVzcy5iYXJzXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsOiBudW1iZXIsIGJhcjogQmFyQ29tcG9uZW50KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdG90YWwgKyBiYXIucGVyY2VudDtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgaWYgKHRvdGFsUGVyY2VudGFnZSA+IDEwMCkge1xyXG4gICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBQcm9ncmVzc2Jhck1vZHVsZSwgcHJvdmlkZXJzOiBbUHJvZ3Jlc3NiYXJDb25maWddIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozt1QkFLcUIsS0FBSzs7OzttQkFFbEIsR0FBRzs7O2dCQUxWLFVBQVU7OzRCQUZYOzs7Ozs7O0FDQUE7SUE0RUUsOEJBQVksTUFBeUI7eUJBOUJ6QixLQUFLO3dCQXVCeUIsSUFBSTs7b0JBR3ZCLEVBQUU7b0JBRVIsR0FBRztRQUdsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FB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