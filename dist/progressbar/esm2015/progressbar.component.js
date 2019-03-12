/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from 'ngx-bootstrap/utils';
export class ProgressbarComponent {
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
function ProgressbarComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    ProgressbarComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    ProgressbarComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    ProgressbarComponent.propDecorators;
    /**
     * provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger`
     * @type {?}
     */
    ProgressbarComponent.prototype.type;
    /** @type {?} */
    ProgressbarComponent.prototype.isStacked;
    /** @type {?} */
    ProgressbarComponent.prototype._striped;
    /** @type {?} */
    ProgressbarComponent.prototype._animate;
    /** @type {?} */
    ProgressbarComponent.prototype._value;
    /** @type {?} */
    ProgressbarComponent.prototype.addClass;
    /** @type {?} */
    ProgressbarComponent.prototype.bars;
    /** @type {?} */
    ProgressbarComponent.prototype._max;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWJvb3RzdHJhcC9wcm9ncmVzc2Jhci8iLCJzb3VyY2VzIjpbInByb2dyZXNzYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWU1QyxNQUFNOzs7O0lBMkRKLFlBQVksTUFBeUI7eUJBOUJ6QixLQUFLO3dCQXVCeUIsSUFBSTs7b0JBR3ZCLEVBQUU7b0JBRVIsR0FBRztRQUdsQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztLQUM3Qjs7Ozs7O1FBMURHLE9BQU8sQ0FBQyxLQUFjO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBZSxFQUFFLEVBQUU7WUFDcEMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7U0FDbkIsQ0FBQyxDQUFDOzs7Ozs7O1FBSUQsT0FBTyxDQUFDLEtBQWM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFlLEVBQUUsRUFBRTtZQUNwQyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztTQUNuQixDQUFDLENBQUM7Ozs7Ozs7OztRQVVELEtBQUssQ0FBQyxLQUFxQjtRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Ozs7O0lBT3RCLElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUNoQjs7Ozs7UUFLRyxHQUFHO1FBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Ozs7OztJQUduQixJQUFJLEdBQUcsQ0FBQyxDQUFTO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQWlCLEVBQUUsRUFBRTtZQUN0QyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUM3QixDQUFDLENBQUM7S0FDSjs7Ozs7SUFZRCxNQUFNLENBQUMsR0FBaUI7UUFDdEIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUU1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQjs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBaUI7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDN0M7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHlSQUEyQzt5QkFFekM7Ozs7O0dBS0Q7YUFFRjs7OztZQWZRLGlCQUFpQjs7O3dCQWtCdkIsS0FBSzt3QkFRTCxLQUFLO3FCQVNMLEtBQUs7c0JBSUwsS0FBSztvQkFnQkwsV0FBVyxTQUFDLFVBQVUsY0FDdEIsS0FBSzt5QkFZTCxXQUFXLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWcgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZyc7XHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IEJhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NiYXJDb21wb25lbnQge1xyXG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cclxuICBASW5wdXQoKVxyXG4gIHNldCBhbmltYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9hbmltYXRlID0gdmFsdWU7XHJcbiAgICB0aGlzLmJhcnMuZm9yRWFjaCgoYjogQmFyQ29tcG9uZW50KSA9PiB7XHJcbiAgICAgIGIuYW5pbWF0ZSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKiBJZiBgdHJ1ZWAsIHN0cmlwZWQgY2xhc3NlcyBhcmUgYXBwbGllZCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHN0cmlwZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3N0cmlwZWQgPSB2YWx1ZTtcclxuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiOiBCYXJDb21wb25lbnQpID0+IHtcclxuICAgICAgYi5zdHJpcGVkID0gdmFsdWU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZztcclxuICAvKiogY3VycmVudCB2YWx1ZSBvZiBwcm9ncmVzcyBiYXIuIENvdWxkIGJlIGEgbnVtYmVyIG9yIGFycmF5IG9mIG9iamVjdHNcclxuICAgKiBsaWtlIHtcInZhbHVlXCI6MTUsXCJ0eXBlXCI6XCJpbmZvXCIsXCJsYWJlbFwiOlwiMTUgJVwifVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHNldCB2YWx1ZSh2YWx1ZTogbnVtYmVyIHwgYW55W10pIHtcclxuICAgIHRoaXMuaXNTdGFja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gIH1cclxuICBpc1N0YWNrZWQgPSBmYWxzZTtcclxuICBfc3RyaXBlZDogYm9vbGVhbjtcclxuICBfYW5pbWF0ZTogYm9vbGVhbjtcclxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXHJcbiAgX3ZhbHVlOiBudW1iZXIgfCBhbnlbXTtcclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIubWF4JylcclxuICBASW5wdXQoKVxyXG4gIGdldCBtYXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9tYXg7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4KHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4ID0gdjtcclxuICAgIHRoaXMuYmFycy5mb3JFYWNoKChiYXI6IEJhckNvbXBvbmVudCkgPT4ge1xyXG4gICAgICBiYXIucmVjYWxjdWxhdGVQZXJjZW50YWdlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHJvZ3Jlc3MnKSBhZGRDbGFzcyA9IHRydWU7XHJcblxyXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cclxuICBiYXJzOiBCYXJDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBwcm90ZWN0ZWQgX21heCA9IDEwMDtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBQcm9ncmVzc2JhckNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuICBhZGRCYXIoYmFyOiBCYXJDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGJhci5hbmltYXRlID0gdGhpcy5fYW5pbWF0ZTtcclxuICAgIGJhci5zdHJpcGVkID0gdGhpcy5fc3RyaXBlZDtcclxuXHJcbiAgICB0aGlzLmJhcnMucHVzaChiYXIpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQmFyKGJhcjogQmFyQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmJhcnMuc3BsaWNlKHRoaXMuYmFycy5pbmRleE9mKGJhciksIDEpO1xyXG4gIH1cclxufVxyXG4iXX0=