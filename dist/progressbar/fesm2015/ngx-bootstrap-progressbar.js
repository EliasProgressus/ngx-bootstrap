import { Injectable, Component, HostBinding, Input, Host, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarConfig {
    constructor() {
        /**
         * if `true` changing value of progress bar will be animated
         */
        this.animate = false;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
}
ProgressbarConfig.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.isStacked = false;
        this.addClass = true;
        /* tslint:disable-next-line:no-any */
        this.bars = [];
        this._max = 100;
        Object.assign(this, config);
    }
    /**
     * if `true` changing value of progress bar will be animated
     * @param {?} value
     * @return {?}
     */
    set animate(value) {
        this._animate = value;
        this.bars.forEach((b) => {
            b.animate = value;
        });
    }
    /**
     * If `true`, striped classes are applied
     * @param {?} value
     * @return {?}
     */
    set striped(value) {
        this._striped = value;
        this.bars.forEach((b) => {
            b.striped = value;
        });
    }
    /**
     * current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     * @param {?} value
     * @return {?}
     */
    /* tslint:disable-next-line:no-any */
    set value(value) {
        this.isStacked = Array.isArray(value);
        this._value = value;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        this._max = v;
        this.bars.forEach((bar) => {
            bar.recalculatePercentage();
        });
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    addBar(bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'progressbar',
                template: "<bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\">\r\n  <ng-content></ng-content>\r\n</bar>\r\n<ng-template [ngIf]=\"isStacked\">\r\n  <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }}</bar>\r\n</ng-template>\r\n",
                styles: [`
    :host {
      width: 100%;
      display: flex;
    }
  `]
            }] }
];
/** @nocollapse */
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfig, },
];
ProgressbarComponent.propDecorators = {
    "animate": [{ type: Input },],
    "striped": [{ type: Input },],
    "type": [{ type: Input },],
    "value": [{ type: Input },],
    "max": [{ type: HostBinding, args: ['attr.max',] }, { type: Input },],
    "addClass": [{ type: HostBinding, args: ['class.progress',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BarComponent {
    /**
     * @param {?} progress
     */
    constructor(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * current value of progress bar
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }
    /**
     * @return {?}
     */
    get setBarWidth() {
        this.recalculatePercentage();
        return this.percent;
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        const /** @type {?} */ totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
}
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
BarComponent.ctorParameters = () => [
    { type: ProgressbarComponent, decorators: [{ type: Host },] },
];
BarComponent.propDecorators = {
    "type": [{ type: Input },],
    "value": [{ type: Input },],
    "setBarWidth": [{ type: HostBinding, args: ['style.width.%',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfig] };
    }
}
ProgressbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { BarComponent, ProgressbarComponent, ProgressbarModule, ProgressbarConfig };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWJvb3RzdHJhcC1wcm9ncmVzc2Jhci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb25maWcudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtYm9vdHN0cmFwL3Byb2dyZXNzYmFyL2Jhci5jb21wb25lbnQudHMiLCJuZzovL25neC1ib290c3RyYXAvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29uZmlnIHtcclxuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkICovXHJcbiAgYW5pbWF0ZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cclxuICBtYXggPSAxMDA7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWcgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZyc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQge1xyXG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBhbmltYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XHJcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYjogQmFyQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGIuYW5pbWF0ZSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKiBJZiBgdHJ1ZWAsIHN0cmlwZWQgY2xhc3NlcyBhcmUgYXBwbGllZCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN0cmlwZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3N0cmlwZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcclxuICAgICAgYi5zdHJpcGVkID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIuIENvdWxkIGJlIGEgbnVtYmVyIG9yIGFycmF5IG9mIG9iamVjdHNcclxuICAgKiBsaWtlIHtcInZhbHVlXCI6MTUsXCJ0eXBlXCI6XCJpbmZvXCIsXCJsYWJlbFwiOlwiMTUgJVwifVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgYW55W10pIHtcclxuICAgIHRoaXMuaXNTdGFja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICBpc1N0YWNrZWQgPSBmYWxzZTtcclxuICBfc3RyaXBlZDogYm9vbGVhbjtcclxuICBfYW5pbWF0ZTogYm9vbGVhbjtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgX3ZhbHVlOiBudW1iZXIgfCBhbnlbXTtcclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4JylcclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXg7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4KHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4ID0gdjtcclxuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiYXI6IEJhckNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBhZGRDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBiYXJzOiBCYXJDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgX21heCA9IDEwMDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBQcm9ncmVzc2JhckNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuICBhZGRCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGJhci5hbmltYXRlID0gdGhpcy5fYW5pbWF0ZTtcclxuICAgIGJhci5zdHJpcGVkID0gdGhpcy5fc3RyaXBlZDtcclxuXHJcbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuLy8gdG9kbzogbnVtYmVyIHBpcGVcclxuLy8gdG9kbzogdXNlIHF1ZXJ5IGZyb20gcHJvZ3Jlc3M/XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFyLmNvbXBvbmVudC5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICByb2xlOiAncHJvZ3Jlc3NiYXInLFxyXG4gICAgJ2FyaWEtdmFsdWVtaW4nOiAnMCcsXHJcbiAgICAnW2NsYXNzXSc6ICdcInByb2dyZXNzLWJhciBcIiArICh0eXBlID8gXCJwcm9ncmVzcy1iYXItXCIgKyB0eXBlICsgXCIgYmctXCIgKyB0eXBlIDogXCJcIiknLFxyXG4gICAgJ1tjbGFzcy5wcm9ncmVzcy1iYXItYW5pbWF0ZWRdJzogJyFpc0JzMyAmJiBhbmltYXRlJyxcclxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLXN0cmlwZWRdJzogJ3N0cmlwZWQnLFxyXG4gICAgJ1tjbGFzcy5hY3RpdmVdJzogJ2lzQnMzICYmIGFuaW1hdGUnLFxyXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcclxuICAgICdbYXR0ci5hcmlhLXZhbHVldGV4dF0nOiAncGVyY2VudCA/IHBlcmNlbnQudG9GaXhlZCgwKSArIFwiJVwiIDogXCJcIicsXHJcbiAgICAnW2F0dHIuYXJpYS12YWx1ZW1heF0nOiAnbWF4JyxcclxuICAgICdbc3R5bGUuaGVpZ2h0LiVdJzogJ1wiMTAwXCInXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIG1heDogbnVtYmVyO1xyXG5cclxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cclxuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhciAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodjogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXYgJiYgdiAhPT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl92YWx1ZSA9IHY7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS53aWR0aC4lJylcclxuICBnZXQgc2V0QmFyV2lkdGgoKSB7XHJcbiAgICB0aGlzLnJlY2FsY3VsYXRlUGVyY2VudGFnZSgpO1xyXG5cclxuICAgIHJldHVybiB0aGlzLnBlcmNlbnQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHN0cmlwZWQ6IGJvb2xlYW47XHJcbiAgYW5pbWF0ZTogYm9vbGVhbjtcclxuICBwZXJjZW50ID0gMDtcclxuICBwcm9ncmVzczogUHJvZ3Jlc3NiYXJDb21wb25lbnQ7XHJcblxyXG4gIHByb3RlY3RlZCBfdmFsdWU6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoQEhvc3QoKSBwcm9ncmVzczogUHJvZ3Jlc3NiYXJDb21wb25lbnQpIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wcm9ncmVzcy5hZGRCYXIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucHJvZ3Jlc3MucmVtb3ZlQmFyKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcmVjYWxjdWxhdGVQZXJjZW50YWdlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wZXJjZW50ID0gKyh0aGlzLnZhbHVlIC8gdGhpcy5wcm9ncmVzcy5tYXggKiAxMDApLnRvRml4ZWQoMik7XHJcblxyXG4gICAgY29uc3QgdG90YWxQZXJjZW50YWdlID0gdGhpcy5wcm9ncmVzcy5iYXJzXHJcbiAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsOiBudW1iZXIsIGJhcjogQmFyQ29tcG9uZW50KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdG90YWwgKyBiYXIucGVyY2VudDtcclxuICAgICAgfSwgMCk7XHJcblxyXG4gICAgaWYgKHRvdGFsUGVyY2VudGFnZSA+IDEwMCkge1xyXG4gICAgICB0aGlzLnBlcmNlbnQgLT0gdG90YWxQZXJjZW50YWdlIC0gMTAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb21wb25lbnQgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyQ29uZmlnIH0gZnJvbSAnLi9wcm9ncmVzc2Jhci5jb25maWcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtCYXJDb21wb25lbnQsIFByb2dyZXNzYmFyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQmFyQ29tcG9uZW50LCBQcm9ncmVzc2JhckNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcclxuICAgIHJldHVybiB7IG5nTW9kdWxlOiBQcm9ncmVzc2Jhck1vZHVsZSwgcHJvdmlkZXJzOiBbUHJvZ3Jlc3NiYXJDb25maWddIH07XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozt1QkFLcUIsS0FBSzs7OzttQkFFbEIsR0FBRzs7OztZQUxWLFVBQVU7Ozs7Ozs7QUNGWDs7OztJQTRFRSxZQUFZLE1BQXlCO3lCQTlCekIsS0FBSzt3QkF1QnlCLElBQUk7O29CQUd2QixFQUFFO29CQUVSLEdBQUc7UUFHbEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FD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