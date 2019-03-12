/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, HostBinding, Input, Renderer2 } from '@angular/core';
import { TabsetConfig } from './tabset.config';
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer) {
        this.renderer = renderer;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        get: /**
         * if true tabs will be placed vertically
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        var /** @type {?} */ index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            var /** @type {?} */ newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var /** @type {?} */ step = 1; step <= tabsLength; step += 1) {
            var /** @type {?} */ prevIndex = index - step;
            var /** @type {?} */ nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var /** @type {?} */ i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
        var _a;
    };
    TabsetComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tabset',
                    template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\r\n  <li *ngFor=\"let tabz of tabs\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\r\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\">\r\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\r\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\r\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\r\n       (click)=\"tabz.active = true\">\r\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\r\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n"
                }] }
    ];
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig, },
        { type: Renderer2, },
    ]; };
    TabsetComponent.propDecorators = {
        "vertical": [{ type: Input },],
        "justified": [{ type: Input },],
        "type": [{ type: Input },],
        "clazz": [{ type: HostBinding, args: ['class.tab-container',] },],
    };
    return TabsetComponent;
}());
export { TabsetComponent };
function TabsetComponent_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    TabsetComponent.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    TabsetComponent.ctorParameters;
    /** @type {!Object<string,!Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
    TabsetComponent.propDecorators;
    /** @type {?} */
    TabsetComponent.prototype.clazz;
    /** @type {?} */
    TabsetComponent.prototype.tabs;
    /** @type {?} */
    TabsetComponent.prototype.classMap;
    /** @type {?} */
    TabsetComponent.prototype.isDestroyed;
    /** @type {?} */
    TabsetComponent.prototype._vertical;
    /** @type {?} */
    TabsetComponent.prototype._justified;
    /** @type {?} */
    TabsetComponent.prototype._type;
    /** @type {?} */
    TabsetComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1ib290c3RyYXAvdGFicy8iLCJzb3VyY2VzIjpbInRhYnNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOztJQWdEN0MseUJBQVksTUFBb0IsRUFBVSxRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXO3FCQVZqQixJQUFJO29CQUV6QixFQUFFO3dCQUNjLEVBQUU7UUFRdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0I7MEJBeENHLHFDQUFROzs7Ozs7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzs7Ozs7O1FBRXhCLFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7Ozs7MEJBSUcsc0NBQVM7Ozs7OztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOzs7Ozs7UUFFekIsVUFBYyxLQUFjO1lBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjs7OzswQkFJRyxpQ0FBSTs7Ozs7O1lBQ04sTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Ozs7OztRQUVwQixVQUFTLEtBQWE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BCOzs7Ozs7O0lBZ0JELHFDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcs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QyxxQkFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDZDtRQUVELEdBQUcsQ0FBQyxDQUFDLHFCQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQzthQUNiO1NBQ0Y7UUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ2Q7Ozs7SUFFUyxxQ0FBVzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLFFBQVE7Z0JBQ1gsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUM1QixhQUFhLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQzVCLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUzs7WUFDL0IsR0FBQyxTQUFPLElBQUksQ0FBQyxJQUFNLElBQUcsSUFBSTtlQUMzQixDQUFDOztLQUNIOztnQkE3SEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixxeUJBQXNDO2lCQUN2Qzs7OztnQkFOUSxZQUFZO2dCQUg4QixTQUFTOzs7NkJBWXpELEtBQUs7OEJBVUwsS0FBSzt5QkFVTCxLQUFLOzBCQVNMLFdBQVcsU0FBQyxxQkFBcUI7OzBCQXpDcEM7O1NBVWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkRlc3Ryb3ksIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGFic2V0Q29uZmlnIH0gZnJvbSAnLi90YWJzZXQuY29uZmlnJztcclxuLy8gdG9kbzogYWRkIGFjdGl2ZSBldmVudCB0byB0YWJcclxuLy8gdG9kbzogZml4PyBtaXhpbmcgc3RhdGljIGFuZCBkeW5hbWljIHRhYnMgcG9zaXRpb24gdGFicyBpbiBvcmRlciBvZiBjcmVhdGlvblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYnNldCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYnNldC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYnNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgLyoqIGlmIHRydWUgdGFicyB3aWxsIGJlIHBsYWNlZCB2ZXJ0aWNhbGx5ICovXHJcbiAgQElucHV0KClcclxuICBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XHJcbiAgfVxyXG4gIHNldCB2ZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fdmVydGljYWwgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICB9XHJcblxyXG4gIC8qKiBpZiB0cnVlIHRhYnMgZmlsbCB0aGUgY29udGFpbmVyIGFuZCBoYXZlIGEgY29uc2lzdGVudCB3aWR0aCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGp1c3RpZmllZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9qdXN0aWZpZWQ7XHJcbiAgfVxyXG4gIHNldCBqdXN0aWZpZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2p1c3RpZmllZCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIG5hdmlnYXRpb24gY29udGV4dCBjbGFzczogJ3RhYnMnIG9yICdwaWxscycgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0eXBlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcclxuICB9XHJcbiAgc2V0IHR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItY29udGFpbmVyJykgY2xhenogPSB0cnVlO1xyXG5cclxuICB0YWJzOiBUYWJEaXJlY3RpdmVbXSA9IFtdO1xyXG4gIGNsYXNzTWFwOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQ6IGJvb2xlYW47XHJcbiAgcHJvdGVjdGVkIF92ZXJ0aWNhbDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX2p1c3RpZmllZDogYm9vbGVhbjtcclxuICBwcm90ZWN0ZWQgX3R5cGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBUYWJzZXRDb25maWcsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzLnB1c2godGFiKTtcclxuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmIHR5cGVvZiB0YWIuYWN0aXZlID09PSAndW5kZWZpbmVkJztcclxuICB9XHJcblxyXG4gIHJlbW92ZVRhYihcclxuICAgIHRhYjogVGFiRGlyZWN0aXZlLFxyXG4gICAgb3B0aW9ucyA9IHsgcmVzZWxlY3Q6IHRydWUsIGVtaXQ6IHRydWUgfVxyXG4gICk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRhYnMuaW5kZXhPZih0YWIpO1xyXG4gICAgaWYgKGluZGV4ID09PSAtMSB8fCB0aGlzLmlzRGVzdHJveWVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIFNlbGVjdCBhIG5ldyB0YWIgaWYgdGhlIHRhYiB0byBiZSByZW1vdmVkIGlzIHNlbGVjdGVkIGFuZCBub3QgZGVzdHJveWVkXHJcbiAgICBpZiAob3B0aW9ucy5yZXNlbGVjdCAmJiB0YWIuYWN0aXZlICYmIHRoaXMuaGFzQXZhaWxhYmxlVGFicyhpbmRleCkpIHtcclxuICAgICAgY29uc3QgbmV3QWN0aXZlSW5kZXggPSB0aGlzLmdldENsb3Nlc3RUYWJJbmRleChpbmRleCk7XHJcbiAgICAgIHRoaXMudGFic1tuZXdBY3RpdmVJbmRleF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmIChvcHRpb25zLmVtaXQpIHtcclxuICAgICAgdGFiLnJlbW92ZWQuZW1pdCh0YWIpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50YWJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBpZiAodGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQoXHJcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlLFxyXG4gICAgICAgIHRhYi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnRcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcclxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBzdGVwO1xyXG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xyXG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ2ZsZXgtY29sdW1uJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcclxuICAgICAgW2BuYXYtJHt0aGlzLnR5cGV9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==